---
id: contributing-emulators
title: Contributing
---

To contribute to the `emulators` package do the following:

1. Checkout `js-dos` repositiory
  
  `git clone https://github.com/caiiiycuk/js-dos`

2. Switch to `emulators` branch

  `git checkout -b dev origin/emulators`
  
3. Install [emscripten sdk](https://emscripten.org/docs/tools_reference/emsdk.html), and confgure environment to use it.

4. Install [cmake](https://cmake.org/) and [gulp 4](https://gulpjs.com/).

4. Now you can build everything with `gulp` command

Native part of emulators is plain cmake project, you can open it
in your favorite editor. CMake project have following targets:

1. **`sokol`** - js-dos v7 native version: dosbox + UI based on [sokol](https://github.com/floooh/sokol).
This version is exactly same as web version. **You should use this target
to contribute in js-dos v7.**
2. **`direct`** - target that used to build web-direct version of js-dos v7.
You can compile it only with **emscripten**.
3. **`worker`** - target that used to build web-worker version of js-dos v7.
You can compile it only with **emscripten**.
4. `dosbox` - original version of dosbox (UI based on SDL). You can use
it to compare behaviour between original dosbox and js-dos v7.
5. `libzip` - shared code that contain implementation of zip.
6. `jsdos` - shared code that contain implementation of dosbox.

## Protocol

The idea of new js-dos v7 is that all targets (native and web) have exactly
same way to communicate between client (native UI, browser UI) and dosbox.


```c title="https://raw.githubusercontent.com/caiiiycuk/js-dos/emulators/src/include/protocol.h"
{}
```

## Server

For simplicity you can think that server is a dosbox.
But in theory server can be implemented with different emulators. Now we support
only **dosbox implementation** (look at `jsdos.cmake`).

### server_run()

Client should run this function when it's ready to start dosbox. This 
function will start emulator. Client should prepare filesystem for dosbox **it 
expect that `cwd` contains `.jsdos/dosbox.conf` file**. 

So you need to extract [js-dos bundle](overview.md#js-dos-bundle) in some directory and start sokol binary
in this directory, and it will act exactly in same way as direct/worker dosbox.


### server_add_key(keycode, pressed)

This function add keycode to queue. They will be processed when dosbox poll keyboard
events.

### server_exit()

Terminates execution of dosbox and free resouces.

## Client

Direct, worker, and sokol implementations share same code for server part. But they are completely different,
because they implement UI and sound system for different platforms. In original dosbox this was made
by SDL, it was hard-coupled with dosbox. js-dos clearly detach emulator from it's ui. You can easily add new
UI/sound system to dosbox. 

For example let's look on sokol UI implementaion. You can use it to debug and develop new features for js-dos.
Worker is a primary web implemenation for js-dos v7. sokol implementaion tries to work in simmilar way: we start
dosbox emulator in main thread and client in new thread.

```cpp
void runRuntime() {
  std::thread client(client_run);
  server_run();
  client.join();
}
```

### client_frame_set_size(width, height)

When server starts it will send frame size of dosbox window by invoking `client_frame_set_size`. You should allocate
rgba buffer to store frame content. This function will be called each time when dosbox window size is changed.

```cpp
extern int frameWidth = 0;
extern int frameHeight = 0;
extern uint32_t *frameRgba = 0;

void client_frame_set_size(int width, int height) {
  std::lock_guard<std::mutex> g(mutex);

  if (frameRgba) {
    delete[] frameRgba;
  }
  frameWidth = width;
  frameHeight = height;
  frameRgba = new uint32_t[width * height];
}
```

### client_frame_update_lines(lines, count, rgba)

This method will be called each time if content of dosbox window are changed. dosbox implemenation
will send only changed lines. You need to update your frame buffer correctly.

Dirty region format (lines argument):
* line number [0, height)
* count of changed lines
* offset in passed buffer (rgba argument)

```cpp
void client_frame_update_lines(uint32_t *lines, uint32_t count, void *rgba) {
  std::lock_guard<std::mutex> g(mutex);

  frameCount++;
  if (!frameRgba) {
    return;
  }

  for (uint32_t i = 0; i < count; ++i) {
    uint32_t start = lines[i * 3];
    uint32_t count = lines[i * 3 + 1];
    uint32_t offset = lines[i * 3 + 2];
    memcpy(&frameRgba[start * frameWidth], (char *)rgba + offset,
           sizeof(uint32_t) * count * frameWidth);
  }
}
```

Implementing `client_frame_set_size` and `client_frame_update_lines` is enough to render
dosbox window:

```cpp
// ... 
   appDescription.frame_cb = []() { sokolFrame(); };
// ...

void sokolFrame() {
  std::lock_guard<std::mutex> g(mutex);

  // ...
  
  sg_image_content imageContent = {};
  imageContent.subimage[0][0] = {};
  imageContent.subimage[0][0].ptr = frameRgba;
  imageContent.subimage[0][0].size =
      (state->width) * (state->height) * (int)sizeof(uint32_t);

  sg_update_image(state->bind.fs_images[0], &imageContent);

  sg_begin_default_pass(&state->pass, state->width, state->height);
  sg_apply_pipeline(state->pipeline);
  sg_apply_bindings(&state->bind);
  sg_draw(0, 4, 1);
  sg_end_pass();
  sg_commit();

  renderedFrame = frameCount;
}
```

### client_sound_init(freq);

Called when dosbox need to initialize sound system. 

```cpp
void client_sound_init(int freq) {
  saudio_desc audioDescription = {};
  audioDescription.sample_rate = static_cast<int>(freq);
  audioDescription.num_channels = 1;

  saudio_setup(&audioDescription);
  assert(saudio_isvalid());
}
```

### client_sound_push(samples, num_samples)

This method is called each time when new sound samples should be pushed to audio device.
With sokol implementation is very simple:

```cpp
void client_sound_push(const float *samples, int num_samples) {
  saudio_push(samples, num_samples);
}
```

### client_stdout(data, amount)

This method will be called each time when dosbox prints something to it's console.

### Communicate to server

Each time when key is pressed we should send event to dosbox:

```cpp
// ...
  appDescription.event_cb = [](const sapp_event *event) {
    switch (event->type) {
      case SAPP_EVENTTYPE_KEY_DOWN:
      case SAPP_EVENTTYPE_KEY_UP:
        keyEvent(event);
        break;
      default:;
    }
  };
// ...


void keyEvent(const sapp_event *event) {
  server_add_key((KBD_KEYS)event->key_code,
         event->type == SAPP_EVENTTYPE_KEY_DOWN);
}
```

When user closes sokol window we need to stop server:
```cpp
  appDescription.cleanup_cb = []() { server_exit(); };
```


That is. Check complete [source](https://github.com/caiiiycuk/js-dos/tree/emulators/src/dos/sokol) of sokol implementation.

## Testing

If `gulp` command finished successfully then you can run emulators tests.
To do this run static web server to host `dist` directory. For example, with `http-server`:

```
hs dist
```

and open test page in browser:

```
firefox http://127.0.0.1:8080/test/test.html
```

all tests should pass.


## Contributing on github

To contribute your code please create PR on github, and check if all tests passed.