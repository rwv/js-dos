#ifndef _JSDOS_EVENTS_H_
#define _JSDOS_EVENTS_H_

#include <string>

// Events
// ======
// Is abstraction for communcation between C++ and JS
class Events {
private:
  friend class CommandInterface;
  Events();

  // C++ --> JS
  // ----------
  // **ready** - triggered when runtime is ready
private:
  void ready();

public:
  // **frame** - triggered when frame is rendered
  void frame();

private:
  // JS --> C++
  // ----------
  // **exit** - if tirggered then runtime will be stopped
  void registerExit();

  // **screenshot** - if triggered then callback will receive screenshot image
  void registerScreenshot();
  void supplyScreenshotIfNeeded();
};

#endif // _JSDOS_EVENTS_H_