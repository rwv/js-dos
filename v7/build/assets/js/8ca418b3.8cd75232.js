(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(108)),i={id:"backward-compability",title:"Backward compatibility"},c={unversionedId:"backward-compability",id:"backward-compability",isDocsHomePage:!1,title:"Backward compatibility",description:"js-dos v7 is better than 6.22 in many cases. But it targets modern browsers.",source:"@site/docs/backward-compability.md",slug:"/backward-compability",permalink:"/v7/build/docs/backward-compability",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/backward-compability.md",version:"current",sidebar:"someSidebar",previous:{title:"Bundle creation",permalink:"/v7/build/docs/jsdos-bundle"},next:{title:"Command Interface (CI)",permalink:"/v7/build/docs/command-interface"}},s=[{value:"Documentation",id:"documentation",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"js-dos v7 is better than 6.22 in many cases. But it targets modern browsers.\nIt supports only wasm execution, so it's not possible to run js-dos in pure js mode.\nIn rare cases this can be important and js-dos 6.22 is only one option there."),Object(a.b)("p",null,"However ",Object(a.b)("a",{parentName:"p",href:"/v7/build/docs/#js-dos-bundle"},"js-dos bundle")," is plain zip archive, so you can\nuse them also with js-dos 6.22."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html",metastring:'title="examples/dos-6.22.html"',title:'"examples/dos-6.22.html"'},"{}\n")),Object(a.b)("h2",{id:"documentation"},"Documentation"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://js-dos.com/index_6.22.html"},"Documentation")," of js-dos 6.22."))}u.isMDXComponent=!0}}]);