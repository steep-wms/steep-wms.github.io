(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[668],{9027:function(e,t,n){"use strict";n.d(t,{O:function(){return o}});var r=n(2265);let o=({color:e="currentColor",direction:t="left",distance:n="md",duration:o=.4,easing:i="cubic-bezier(0, 0, 0, 1)",hideOutline:u=!0,label:a,lines:l=3,onToggle:c,render:s,rounded:f=!1,size:d=32,toggle:p,toggled:v})=>{let[y,g]=(0,r.useState)(!1),m=Math.max(12,Math.min(48,d)),b=Math.round((48-m)/2),h=m/12,E=Math.round(h),w=m/(l*(("lg"===n?.25:"sm"===n?.75:.5)+(3===l?1:1.25))),x=Math.round(w),S=E*l+x*(l-1),O=(h-E+(w-x))/(3===l?1:2),k=parseFloat((m/(3===l?"lg"===n?4.0425:"sm"===n?5.1625:4.6325:"lg"===n?6.7875:"sm"===n?8.4875:7.6675)-O/(4/3)).toFixed(2)),j=Math.max(0,o),L={cursor:"pointer",height:"48px",position:"relative",transition:`${j}s ${i}`,userSelect:"none",width:"48px"},$={background:e,height:`${E}px`,left:`${b}px`,position:"absolute"};u&&(L.outline="none"),f&&($.borderRadius="9em");let C=p||g,A=void 0!==v?v:y;return s({barHeight:E,barStyles:$,burgerStyles:L,easing:i,handler:()=>{C(!A),"function"==typeof c&&c(!A)},isLeft:"left"===t,isToggled:A,label:a,margin:x,move:k,time:j,topOffset:Math.round((48-S)/2),width:m})}},8265:function(e,t,n){"use strict";n.d(t,{y:function(){return u}});var r=n(9027),o=n(2265);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let u=e=>o.createElement(r.O,i({},e,{render:e=>o.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:`${e.isToggled?`rotate(${180*(e.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},o.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none"}`}}),o.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,opacity:`${e.isToggled?"0":"1"}`}}),o.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none"}`}}))}))},9029:function(e,t,n){var r=n(2242).Symbol;e.exports=r},6714:function(e,t,n){var r=n(9029),o=n(5078),i=n(6276),u=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":u&&u in Object(e)?o(e):i(e)}},3225:function(e,t,n){var r=n(121),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},6503:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},5078:function(e,t,n){var r=n(9029),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,a=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(e){}var o=u.call(e);return r&&(t?e[a]=n:delete e[a]),o}},6276:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},2242:function(e,t,n){var r=n(6503),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},121:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},8143:function(e,t,n){var r=n(6905),o=n(4752),i=n(1573),u=Math.max,a=Math.min;e.exports=function(e,t,n){var l,c,s,f,d,p,v=0,y=!1,g=!1,m=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(t){var n=l,r=c;return l=c=void 0,v=t,f=e.apply(r,n)}function h(e){var n=e-p,r=e-v;return void 0===p||n>=t||n<0||g&&r>=s}function E(){var e,n,r,i=o();if(h(i))return w(i);d=setTimeout(E,(e=i-p,n=i-v,r=t-e,g?a(r,s-n):r))}function w(e){return(d=void 0,m&&l)?b(e):(l=c=void 0,f)}function x(){var e,n=o(),r=h(n);if(l=arguments,c=this,p=n,r){if(void 0===d)return v=e=p,d=setTimeout(E,t),y?b(e):f;if(g)return clearTimeout(d),d=setTimeout(E,t),b(p)}return void 0===d&&(d=setTimeout(E,t)),f}return t=i(t)||0,r(n)&&(y=!!n.leading,s=(g="maxWait"in n)?u(i(n.maxWait)||0,t):s,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==d&&clearTimeout(d),v=0,l=p=c=d=void 0},x.flush=function(){return void 0===d?f:w(o())},x}},6905:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},2387:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},1087:function(e,t,n){var r=n(6714),o=n(2387);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},4752:function(e,t,n){var r=n(2242);e.exports=function(){return r.Date.now()}},7269:function(e,t,n){var r=n(8143),o=n(6905);e.exports=function(e,t,n){var i=!0,u=!0;if("function"!=typeof e)throw TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,u="trailing"in n?!!n.trailing:u),r(e,t,{leading:i,maxWait:t,trailing:u})}},1573:function(e,t,n){var r=n(3225),o=n(6905),i=n(1087),u=0/0,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return u;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):a.test(e)?u:+e}},8864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(1024);n(2265);let o=r._(n(533));function i(e){return{default:(null==e?void 0:e.default)||e}}function u(e,t){let n=o.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e),Object.assign(r,t);let u=r.loader;return n({...r,loader:()=>null!=u?u().then(i):Promise.resolve(i(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3699:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return o},NoSSR:function(){return i}}),n(1024),n(2265);let r=n(7669);function o(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function i(e){let{children:t}=e;return t}},533:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(1024),o=r._(n(2265)),i=n(3699),u=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function n(e){let n=t.loading,r=o.default.createElement(n,{isLoading:!0,pastDelay:!0,error:null}),u=t.ssr?o.default.Fragment:i.NoSSR,a=t.lazy;return o.default.createElement(o.default.Suspense,{fallback:r},o.default.createElement(u,null,o.default.createElement(a,e)))}return t.lazy=o.default.lazy(t.loader),n.displayName="LoadableComponent",n}},1396:function(e,t,n){e.exports=n(6685)},4033:function(e,t,n){e.exports=n(8165)},9299:function(e,t,n){"use strict";n.d(t,{y1:function(){return E}});var r=n(2265);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n(7437);var i=["shift","alt","meta","mod","ctrl"],u={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function a(e){return(u[e]||e).trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function l(e,t){return void 0===t&&(t=","),e.split(t)}function c(e,t,n){void 0===t&&(t="+");var r=e.toLocaleLowerCase().split(t).map(function(e){return a(e)});return o({},{alt:r.includes("alt"),ctrl:r.includes("ctrl")||r.includes("control"),shift:r.includes("shift"),meta:r.includes("meta"),mod:r.includes("mod")},{keys:r.filter(function(e){return!i.includes(e)}),description:n})}"undefined"!=typeof document&&(document.addEventListener("keydown",function(e){void 0!==e.key&&d([a(e.key),a(e.code)])}),document.addEventListener("keyup",function(e){void 0!==e.key&&p([a(e.key),a(e.code)])})),"undefined"!=typeof window&&window.addEventListener("blur",function(){s.clear()});var s=new Set;function f(e){return Array.isArray(e)}function d(e){var t=Array.isArray(e)?e:[e];s.has("meta")&&s.forEach(function(e){return!i.includes(e)&&s.delete(e.toLowerCase())}),t.forEach(function(e){return s.add(e.toLowerCase())})}function p(e){var t=Array.isArray(e)?e:[e];"meta"===e?s.clear():t.forEach(function(e){return s.delete(e.toLowerCase())})}function v(e,t){var n=e.target;void 0===t&&(t=!1);var r=n&&n.tagName;return f(t)?!!(r&&t&&t.some(function(e){return e.toLowerCase()===r.toLowerCase()})):!!(r&&t&&!0===t)}var y=function(e,t,n){void 0===n&&(n=!1);var r,o=t.alt,i=t.meta,u=t.mod,l=t.shift,c=t.ctrl,d=t.keys,p=e.key,v=e.code,y=e.ctrlKey,g=e.metaKey,m=e.shiftKey,b=e.altKey,h=a(v),E=p.toLowerCase();if(!n){if(!b===o&&"alt"!==E||!m===l&&"shift"!==E)return!1;if(u){if(!g&&!y)return!1}else if(!g===i&&"meta"!==E&&"os"!==E||!y===c&&"ctrl"!==E&&"control"!==E)return!1}return!!(d&&1===d.length&&(d.includes(E)||d.includes(h)))||(d?(void 0===r&&(r=","),(f(d)?d:d.split(r)).every(function(e){return s.has(e.trim().toLowerCase())})):!d)},g=(0,r.createContext)(void 0),m=(0,r.createContext)({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}}),b=function(e){e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation()},h="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function E(e,t,n,o){var i,u=(0,r.useRef)(null),s=(0,r.useRef)(!1),E=n instanceof Array?o instanceof Array?void 0:o:n,w=f(e)?e.join(null==E?void 0:E.splitKey):e,x=n instanceof Array?n:o instanceof Array?o:void 0,S=(0,r.useCallback)(t,null!=x?x:[]),O=(0,r.useRef)(S);x?O.current=S:O.current=t;var k=(!function e(t,n){return t&&n&&"object"==typeof t&&"object"==typeof n?Object.keys(t).length===Object.keys(n).length&&Object.keys(t).reduce(function(r,o){return r&&e(t[o],n[o])},!0):t===n}((i=(0,r.useRef)(void 0)).current,E)&&(i.current=E),i.current),j=(0,r.useContext)(m).enabledScopes,L=(0,r.useContext)(g);return h(function(){if((null==k?void 0:k.enabled)!==!1&&(e=null==k?void 0:k.scopes,0===j.length&&e?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):!!(!e||j.some(function(t){return e.includes(t)})||j.includes("*")))){var e,t=function(e,t){var n;if(void 0===t&&(t=!1),!(v(e,["input","textarea","select"])&&!v(e,null==k?void 0:k.enableOnFormTags)||null!=k&&null!=k.ignoreEventWhen&&k.ignoreEventWhen(e))){if(null!==u.current&&document.activeElement!==u.current&&!u.current.contains(document.activeElement)){b(e);return}(null==(n=e.target)||!n.isContentEditable||null!=k&&k.enableOnContentEditable)&&l(w,null==k?void 0:k.splitKey).forEach(function(n){var r,o,i,u=c(n,null==k?void 0:k.combinationKey);if(y(e,u,null==k?void 0:k.ignoreModifiers)||null!=(i=u.keys)&&i.includes("*")){if(t&&s.current)return;if(("function"==typeof(r=null==k?void 0:k.preventDefault)&&r(e,u)||!0===r)&&e.preventDefault(),"function"==typeof(o=null==k?void 0:k.enabled)?!o(e,u):!0!==o&&void 0!==o){b(e);return}O.current(e,u),t||(s.current=!0)}})}},n=function(e){void 0!==e.key&&(d(a(e.code)),((null==k?void 0:k.keydown)===void 0&&(null==k?void 0:k.keyup)!==!0||null!=k&&k.keydown)&&t(e))},r=function(e){void 0!==e.key&&(p(a(e.code)),s.current=!1,null!=k&&k.keyup&&t(e,!0))},o=u.current||(null==E?void 0:E.document)||document;return o.addEventListener("keyup",r),o.addEventListener("keydown",n),L&&l(w,null==k?void 0:k.splitKey).forEach(function(e){return L.addHotkey(c(e,null==k?void 0:k.combinationKey,null==k?void 0:k.description))}),function(){o.removeEventListener("keyup",r),o.removeEventListener("keydown",n),L&&l(w,null==k?void 0:k.splitKey).forEach(function(e){return L.removeHotkey(c(e,null==k?void 0:k.combinationKey,null==k?void 0:k.description))})}}},[w,k,j]),u}},1853:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,u=r.useEffect,a=r.useLayoutEffect,l=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var s="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,s=r[1];return a(function(){o.value=n,o.getSnapshot=t,c(o)&&s({inst:o})},[e,n,t]),u(function(){return c(o)&&s({inst:o}),e(function(){c(o)&&s({inst:o})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:s},8704:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=n(6272),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=o.useSyncExternalStore,a=r.useRef,l=r.useEffect,c=r.useMemo,s=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var f=a(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;f=c(function(){function e(e){if(!l){if(l=!0,u=e,e=r(e),void 0!==o&&d.hasValue){var t=d.value;if(o(t,e))return a=t}return a=e}if(t=a,i(u,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(u=e,a=n)}var u,a,l=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,r,o]);var p=u(e,f[0],f[1]);return l(function(){d.hasValue=!0,d.value=p},[p]),s(p),p}},6272:function(e,t,n){"use strict";e.exports=n(1853)},5401:function(e,t,n){"use strict";e.exports=n(8704)},7042:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r}},7865:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2265),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var u=(e,t)=>{let n=(0,r.forwardRef)(({color:n="currentColor",size:u=24,strokeWidth:a=2,absoluteStrokeWidth:l,children:c,...s},f)=>(0,r.createElement)("svg",{ref:f,...o,width:u,height:u,stroke:n,strokeWidth:l?24*Number(a)/Number(u):a,className:`lucide lucide-${i(e)}`,...s},[...t.map(([e,t])=>(0,r.createElement)(e,t)),...(Array.isArray(c)?c:[c])||[]]));return n.displayName=`${e}`,n}},3835:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7865);let o=(0,r.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},4660:function(e,t,n){"use strict";n.d(t,{Ue:function(){return s}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=r?r:"object"!=typeof o)?o:Object.assign({},t,o),n.forEach(n=>n(t,e))}},o=()=>t,i={setState:r,getState:o,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,o,i),i},o=e=>e?r(e):r;var i=n(2265),u=n(5401);let{useSyncExternalStoreWithSelector:a}=u,l=!1,c=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?o(e):e,n=(e,n)=>(function(e,t=e.getState,n){n&&!l&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),l=!0);let r=a(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,i.useDebugValue)(r),r})(t,e,n);return Object.assign(n,t),n},s=e=>e?c(e):c}}]);