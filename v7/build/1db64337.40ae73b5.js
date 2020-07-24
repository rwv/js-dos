(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return c}));var a=n(2),o=n(10),s=(n(0),n(156)),r={id:"overview",title:"Overview",sidebar_label:"Overview"},i={id:"overview",isDocsHomePage:!0,title:"Overview",description:"js-dos v7 is still in under development and some features are not ready.",source:"@site/docs/overview.md",permalink:"/v7/build/docs/",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/overview.md",sidebar_label:"Overview",sidebar:"someSidebar",next:{title:"Releases",permalink:"/v7/build/docs/releases"}},d=[{value:"js-dos bundle",id:"js-dos-bundle",children:[]},{value:"Run jsdos file",id:"run-jsdos-file",children:[{value:"1. Use player hosted on dos.zone",id:"1-use-player-hosted-on-doszone",children:[]},{value:"2. Use js-dos api",id:"2-use-js-dos-api",children:[]}]},{value:"emulators",id:"emulators",children:[]}],l={rightToc:d};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"js-dos v7 is still in under development and some features are not ready.\nFor example you can't use mouse yet. Please use ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://js-dos.com"}),"js-dos 6.22")," for production\nprojects."))),Object(s.b)("p",null,"New version of js-dos is more modular, you can use it partially. It consists of:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"js-dos bundle - universal package that js-dos understands"),Object(s.b)("li",{parentName:"ul"},"emulators - ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/emulators"}),"npm package"),", that provide just DOS emulator that can be runned in different environments"),Object(s.b)("li",{parentName:"ul"},"emulators-ui - ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/emulators-ui"}),"npm package"),", a set of ui/sound components to render emulator output in browser"),Object(s.b)("li",{parentName:"ul"},"js-dos - ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/js-dos/v/beta"}),"npm package")," that combine everything to run DOS program in browser")),Object(s.b)("h2",{id:"js-dos-bundle"},"js-dos bundle"),Object(s.b)("p",null,"js-dos 6.22 have very easy API to run DOS program in browser, but to start it you need configure program:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"download game archive (usually zip)"),Object(s.b)("li",{parentName:"ul"},"extract it"),Object(s.b)("li",{parentName:"ul"},"configure dos file system"),Object(s.b)("li",{parentName:"ul"},"configure dosbox options (cycles, renderer type, etc.)"),Object(s.b)("li",{parentName:"ul"},"configre controllers (mouse, keyboard type, etc.)")),Object(s.b)("p",null,"Often quality of game also depends on good configuration."),Object(s.b)("p",null,"Starting from js-dos 7, api expects ",Object(s.b)("inlineCode",{parentName:"p"},"js-dos bundle")," that already contains all configuration needed to start program.\n",Object(s.b)("inlineCode",{parentName:"p"},"js-dos bundle")," it's a just ",Object(s.b)("strong",{parentName:"p"},"ZIP")," archive that contains game it self and js-dos config file (same as dosbox.conf file).\nFor example, ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://talks.dos.zone/t/digger-may-06-1999/1922"}),"digger.jsdos"),": "),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),".jsdos\\dosbox.conf - dosbox configuration file\nDIGGER.COM         - game file\n")),Object(s.b)("p",null,"You can generate ",Object(s.b)("inlineCode",{parentName:"p"},"js-dos bundle")," programmatically. But, we recommend to use our ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://dos.zone/en/studio"}),"bundle generator"),"\nMoreover you can search on ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://talks.dos.zone/search?expanded=true&q=%23en%20tags%3Ajsdos"}),"our database")," if someone already uploaded ",Object(s.b)("inlineCode",{parentName:"p"},"js-dos bundle")," for program."),Object(s.b)("p",null,"Read ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"estimating-performance"}),"guide")," about creating ",Object(s.b)("inlineCode",{parentName:"p"},"js-dos bundle"),"."),Object(s.b)("h2",{id:"run-jsdos-file"},"Run jsdos file"),Object(s.b)("p",null,"Once you have ",Object(s.b)("inlineCode",{parentName:"p"},"jsdos bundle")," you can easily run it in browser. There are several options:"),Object(s.b)("h3",{id:"1-use-player-hosted-on-doszone"},"1. Use player hosted on dos.zone"),Object(s.b)("p",null,"Easiest way, no need to write code. You just need url of js-dos (you can get it from game database)."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live",live:!0}),'function runInIframe() {\n  function onStart() {\n    // playerUrl can be found on page of game\n    // e.g. https://talks.dos.zone/t/digger-may-06-1999/1922\n\n    const bundleUrl = "https://doszone-uploads.s3.dualstack.eu-central-1.amazonaws.com/original/2X/9/9ed7eb9c2c441f56656692ed4dc7ab28f58503ce.jsdos";\n    const playerUrl = "https://dos.zone/en/player/" + encodeURIComponent(bundleUrl);\n    \n    document.getElementById("demo-iframe").src = playerUrl;\n  };\n  \n  return (\n    <div>\n      <iframe id="demo-iframe" style={{ width: "64vw", height: "40vw", maxWidth: "640px", maxHeight: "320px" }}></iframe>\n      <br/>\n      <button onClick={onStart}>Start</button>\n    </div>\n  );\n}\n')),Object(s.b)("h3",{id:"2-use-js-dos-api"},"2. Use js-dos api"),Object(s.b)("p",null,"js-dos v7 is even simple then 6.22, to run ",Object(s.b)("inlineCode",{parentName:"p"},"bundle")," you just need a one line of code:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"live",live:!0}),'declare const emulators: any;\n\nfunction runWithJsDos() {\n  emulators.pathPrefix = "/v7/build/releases/latest/js-dos/";\n\n  function onStart() {\n    const bundleUrl = "https://doszone-uploads.s3.dualstack.eu-central-1.amazonaws.com/original/2X/9/9ed7eb9c2c441f56656692ed4dc7ab28f58503ce.jsdos";\n    \n    Dos(document.getElementById("demo-jsdos")).run(bundleUrl);\n  };\n  \n  return (\n    <div>\n      <div id="demo-jsdos" style={{ width: "64vw", height: "40vw", maxWidth: "640px", maxHeight: "320px" }}></div>\n      <br/>\n      <button onClick={onStart}>Start</button>\n    </div>\n  );\n}\n')),Object(s.b)("h2",{id:"emulators"},"emulators"),Object(s.b)("p",null,"emulators package conains core that can run DOS program in wasm environment. Now it supports two execution modes:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"direct - run DOS emulation inside main browser thread."),Object(s.b)("li",{parentName:"ul"},"worker - run DOS emulation inside worker thread.")),Object(s.b)("p",null,"Read ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"estimating-performance"}),"guide")," how to create ",Object(s.b)("inlineCode",{parentName:"p"},"js-dos bundle")," and use it to estimate emulator performance."))}c.isMDXComponent=!0}}]);