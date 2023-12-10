"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[930],{5322:function(n,t,r){r.d(t,{Av:function(){return c},pF:function(){return e},xv:function(){return i},zi:function(){return o}});var e="right-scroll-bar-position",o="width-before-scroll-bar",i="with-scroll-bars-hidden",c="--removed-body-scroll-bar-size"},2776:function(n,t,r){r.d(t,{jp:function(){return p}});var e=r(2265),o=r(8662),i=r(5322),c={left:0,top:0,right:0,gap:0},a=function(n){return parseInt(n||"",10)||0},u=function(n){var t=window.getComputedStyle(document.body),r=t["padding"===n?"paddingLeft":"marginLeft"],e=t["padding"===n?"paddingTop":"marginTop"],o=t["padding"===n?"paddingRight":"marginRight"];return[a(r),a(e),a(o)]},f=function(n){if(void 0===n&&(n="margin"),"undefined"==typeof window)return c;var t=u(n),r=document.documentElement.clientWidth,e=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,e-r+t[2]-t[0])}},d=(0,o.Ws)(),l=function(n,t,r,e){var o=n.left,c=n.top,a=n.right,u=n.gap;return void 0===r&&(r="margin"),"\n  .".concat(i.xv," {\n   overflow: hidden ").concat(e,";\n   padding-right: ").concat(u,"px ").concat(e,";\n  }\n  body {\n    overflow: hidden ").concat(e,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(e,";"),"margin"===r&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(c,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(e,";\n    "),"padding"===r&&"padding-right: ".concat(u,"px ").concat(e,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(i.pF," {\n    right: ").concat(u,"px ").concat(e,";\n  }\n  \n  .").concat(i.zi," {\n    margin-right: ").concat(u,"px ").concat(e,";\n  }\n  \n  .").concat(i.pF," .").concat(i.pF," {\n    right: 0 ").concat(e,";\n  }\n  \n  .").concat(i.zi," .").concat(i.zi," {\n    margin-right: 0 ").concat(e,";\n  }\n  \n  body {\n    ").concat(i.Av,": ").concat(u,"px;\n  }\n")},p=function(n){var t=n.noRelative,r=n.noImportant,o=n.gapMode,i=void 0===o?"margin":o,c=e.useMemo(function(){return f(i)},[i]);return e.createElement(d,{styles:l(c,!t,i,r?"":"!important")})}},8662:function(n,t,r){r.d(t,{Ws:function(){return a}});var e,o=r(2265),i=function(){var n=0,t=null;return{add:function(o){if(0==n&&(t=function(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var t=e||r.nc;return t&&n.setAttribute("nonce",t),n}())){var i,c;(i=t).styleSheet?i.styleSheet.cssText=o:i.appendChild(document.createTextNode(o)),c=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(c)}n++},remove:function(){--n||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},c=function(){var n=i();return function(t,r){o.useEffect(function(){return n.add(t),function(){n.remove()}},[t&&r])}},a=function(){var n=c();return function(t){return n(t.styles,t.dynamic),null}}},5835:function(n,t,r){r.d(t,{q:function(){return o}});var e=r(2265);function o(n,t){var r,o,i;return r=t||null,o=function(t){return n.forEach(function(n){return"function"==typeof n?n(t):n&&(n.current=t),n})},(i=(0,e.useState)(function(){return{value:r,callback:o,facade:{get current(){return i.value},set current(value){var n=i.value;n!==value&&(i.value=value,i.callback(value,n))}}}})[0]).callback=o,i.facade}},6898:function(n,t,r){r.d(t,{L:function(){return c}});var e=r(44),o=r(2265),i=function(n){var t=n.sideCar,r=(0,e._T)(n,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var i=t.read();if(!i)throw Error("Sidecar medium not found");return o.createElement(i,(0,e.pi)({},r))};function c(n,t){return n.useMedium(t),i}i.isSideCarExport=!0},8427:function(n,t,r){r.d(t,{_:function(){return i}});var e=r(44);function o(n){return n}function i(n){void 0===n&&(n={});var t,r,i,c=(void 0===t&&(t=o),r=[],i=!1,{read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:null},useMedium:function(n){var e=t(n,i);return r.push(e),function(){r=r.filter(function(n){return n!==e})}},assignSyncMedium:function(n){for(i=!0;r.length;){var t=r;r=[],t.forEach(n)}r={push:function(t){return n(t)},filter:function(){return r}}},assignMedium:function(n){i=!0;var t=[];if(r.length){var e=r;r=[],e.forEach(n),t=r}var o=function(){var r=t;t=[],r.forEach(n)},c=function(){return Promise.resolve().then(o)};c(),r={push:function(n){t.push(n),c()},filter:function(n){return t=t.filter(n),r}}}});return c.options=(0,e.pi)({async:!0,ssr:!1},n),c}},44:function(n,t,r){r.d(t,{_T:function(){return o},ev:function(){return i},pi:function(){return e}});var e=function(){return(e=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)};function o(n,t){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&0>t.indexOf(e)&&(r[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,e=Object.getOwnPropertySymbols(n);o<e.length;o++)0>t.indexOf(e[o])&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(r[e[o]]=n[e[o]]);return r}function i(n,t,r){if(r||2==arguments.length)for(var e,o=0,i=t.length;o<i;o++)!e&&o in t||(e||(e=Array.prototype.slice.call(t,0,o)),e[o]=t[o]);return n.concat(e||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError}}]);