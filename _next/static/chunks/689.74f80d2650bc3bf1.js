"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{8369:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,u=new WeakMap,o={},a=0,i=function(e){return e&&(e.host||i(e.parentNode))},c=function(e,t,n,c){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=i(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});o[n]||(o[n]=new WeakMap);var d=o[n],s=[],f=new Set,v=new Set(l),m=function(e){!e||f.has(e)||(f.add(e),m(e.parentNode))};l.forEach(m);var p=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))p(e);else{var t=e.getAttribute(c),o=null!==t&&"false"!==t,a=(r.get(e)||0)+1,i=(d.get(e)||0)+1;r.set(e,a),d.set(e,i),s.push(e),1===a&&o&&u.set(e,!0),1===i&&e.setAttribute(n,"true"),o||e.setAttribute(c,"true")}})};return p(t),f.clear(),a++,function(){s.forEach(function(e){var t=r.get(e)-1,o=d.get(e)-1;r.set(e,t),d.set(e,o),t||(u.has(e)||e.removeAttribute(c),u.delete(e)),o||e.removeAttribute(n)}),--a||(r=new WeakMap,r=new WeakMap,u=new WeakMap,o={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),u=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return u?(r.push.apply(r,Array.from(u.querySelectorAll("[aria-live]"))),c(r,u,n,"aria-hidden")):function(){return null}}},589:function(e,t,n){n.d(t,{EW:function(){return o}});var r=n(2265),u=0;function o(){r.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:a()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:a()),u++,()=>{1===u&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),u--}},[])}function a(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},467:function(e,t,n){let r;n.d(t,{M:function(){return f}});var u=n(2265),o=n(1584),a=n(5171),i=n(5137),c=n(7437),l="focusScope.autoFocusOnMount",d="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},f=u.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:y,...h}=e,[b,A]=u.useState(null),g=(0,i.W)(f),N=(0,i.W)(y),w=u.useRef(null),S=(0,o.e)(t,e=>A(e)),L=u.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;u.useEffect(()=>{if(r){let e=function(e){if(L.paused||!b)return;let t=e.target;b.contains(t)?w.current=t:p(w.current,{select:!0})},t=function(e){if(L.paused||!b)return;let t=e.relatedTarget;null===t||b.contains(t)||p(w.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&p(b)});return b&&n.observe(b,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,b,L.paused]),u.useEffect(()=>{if(b){E.add(L);let e=document.activeElement;if(!b.contains(e)){let t=new CustomEvent(l,s);b.addEventListener(l,g),b.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(p(r,{select:t}),document.activeElement!==n)return}(v(b).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&p(b))}return()=>{b.removeEventListener(l,g),setTimeout(()=>{let t=new CustomEvent(d,s);b.addEventListener(d,N),b.dispatchEvent(t),t.defaultPrevented||p(null!=e?e:document.body,{select:!0}),b.removeEventListener(d,N),E.remove(L)},0)}}},[b,g,N,L]);let T=u.useCallback(e=>{if(!n&&!r||L.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,u=document.activeElement;if(t&&u){let t=e.currentTarget,[r,o]=function(e){let t=v(e);return[m(t,e),m(t.reverse(),e)]}(t);r&&o?e.shiftKey||u!==o?e.shiftKey&&u===r&&(e.preventDefault(),n&&p(o,{select:!0})):(e.preventDefault(),n&&p(r,{select:!0})):u===t&&e.preventDefault()}},[n,r,L.paused]);return(0,c.jsx)(a.WV.div,{tabIndex:-1,...h,ref:S,onKeyDown:T})});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function m(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function p(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}f.displayName="FocusScope";var E=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=y(r,e)).unshift(e)},remove(e){var t;null===(t=(r=y(r,e))[0])||void 0===t||t.resume()}});function y(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}}}]);