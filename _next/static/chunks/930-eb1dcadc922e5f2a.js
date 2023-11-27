"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[930],{5322:function(n,e,t){t.d(e,{Av:function(){return a},pF:function(){return r},xv:function(){return i},zi:function(){return o}});var r="right-scroll-bar-position",o="width-before-scroll-bar",i="with-scroll-bars-hidden",a="--removed-body-scroll-bar-size"},2776:function(n,e,t){t.d(e,{jp:function(){return RemoveScrollBar}});var r=t(2265),o=t(8662),i=t(5322),a={left:0,top:0,right:0,gap:0},parse=function(n){return parseInt(n||"",10)||0},getOffset=function(n){var e=window.getComputedStyle(document.body),t=e["padding"===n?"paddingLeft":"marginLeft"],r=e["padding"===n?"paddingTop":"marginTop"],o=e["padding"===n?"paddingRight":"marginRight"];return[parse(t),parse(r),parse(o)]},getGapWidth=function(n){if(void 0===n&&(n="margin"),"undefined"==typeof window)return a;var e=getOffset(n),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-t+e[2]-e[0])}},c=(0,o.Ws)(),getStyles=function(n,e,t,r){var o=n.left,a=n.top,c=n.right,u=n.gap;return void 0===t&&(t="margin"),"\n  .".concat(i.xv," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([e&&"position: relative ".concat(r,";"),"margin"===t&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(c,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===t&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(i.pF," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(i.zi," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(i.pF," .").concat(i.pF," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(i.zi," .").concat(i.zi," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat(i.Av,": ").concat(u,"px;\n  }\n")},RemoveScrollBar=function(n){var e=n.noRelative,t=n.noImportant,o=n.gapMode,i=void 0===o?"margin":o,a=r.useMemo(function(){return getGapWidth(i)},[i]);return r.createElement(c,{styles:getStyles(a,!e,i,t?"":"!important")})}},8662:function(n,e,t){t.d(e,{Ws:function(){return styleSingleton}});var r,o=t(2265);function makeStyleTag(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=r||t.nc;return e&&n.setAttribute("nonce",e),n}function injectStyles(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function insertStyleTag(n){(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}var stylesheetSingleton=function(){var n=0,e=null;return{add:function(t){0==n&&(e=makeStyleTag())&&(injectStyles(e,t),insertStyleTag(e)),n++},remove:function(){--n||!e||(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},styleHookSingleton=function(){var n=stylesheetSingleton();return function(e,t){o.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&t])}},styleSingleton=function(){var n=styleHookSingleton();return function(e){return n(e.styles,e.dynamic),null}}},5835:function(n,e,t){function assignRef(n,e){return"function"==typeof n?n(e):n&&(n.current=e),n}t.d(e,{q:function(){return useMergeRefs}});var r=t(2265);function useCallbackRef(n,e){var t=(0,r.useState)(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(value){var r=t.value;r!==value&&(t.value=value,t.callback(value,r))}}}})[0];return t.callback=e,t.facade}function useMergeRefs(n,e){return useCallbackRef(e||null,function(e){return n.forEach(function(n){return assignRef(n,e)})})}},6898:function(n,e,t){t.d(e,{L:function(){return exportSidecar}});var r=t(44),o=t(2265),SideCar=function(n){var e=n.sideCar,t=(0,r._T)(n,["sideCar"]);if(!e)throw Error("Sidecar: please provide `sideCar` property to import the right car");var i=e.read();if(!i)throw Error("Sidecar medium not found");return o.createElement(i,(0,r.pi)({},t))};function exportSidecar(n,e){return n.useMedium(e),SideCar}SideCar.isSideCarExport=!0},8427:function(n,e,t){t.d(e,{_:function(){return createSidecarMedium}});var r=t(44);function ItoI(n){return n}function innerCreateMedium(n,e){void 0===e&&(e=ItoI);var t=[],r=!1;return{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(n){var o=e(n,r);return t.push(o),function(){t=t.filter(function(n){return n!==o})}},assignSyncMedium:function(n){for(r=!0;t.length;){var e=t;t=[],e.forEach(n)}t={push:function(e){return n(e)},filter:function(){return t}}},assignMedium:function(n){r=!0;var e=[];if(t.length){var o=t;t=[],o.forEach(n),e=t}var executeQueue=function(){var t=e;e=[],t.forEach(n)},cycle=function(){return Promise.resolve().then(executeQueue)};cycle(),t={push:function(n){e.push(n),cycle()},filter:function(n){return e=e.filter(n),t}}}}}function createSidecarMedium(n){void 0===n&&(n={});var e=innerCreateMedium(null);return e.options=(0,r.pi)({async:!0,ssr:!1},n),e}},44:function(n,e,t){t.d(e,{_T:function(){return __rest},ev:function(){return __spreadArray},pi:function(){return __assign}});var __assign=function(){return(__assign=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)};function __rest(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&0>e.indexOf(r)&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)0>e.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t}function __spreadArray(n,e,t){if(t||2==arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return n.concat(r||Array.prototype.slice.call(e))}"function"==typeof SuppressedError&&SuppressedError}}]);