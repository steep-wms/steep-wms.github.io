"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[551],{8551:function(e,t,n){n.r(t),n.d(t,{RemoveScroll:function(){return M}});var r=n(44),o=n(2265),a=n(5322),c=n(5835),l=(0,n(8427)._)(),i=function(){},u=o.forwardRef(function(e,t){var n=o.useRef(null),a=o.useState({onScrollCapture:i,onWheelCapture:i,onTouchMoveCapture:i}),u=a[0],s=a[1],d=e.forwardProps,f=e.children,h=e.className,v=e.removeScrollBar,m=e.enabled,p=e.shards,w=e.sideCar,g=e.noIsolation,b=e.inert,E=e.allowPinchZoom,C=e.as,y=e.gapMode,k=(0,r._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),R=(0,c.q)([n,t]),S=(0,r.pi)((0,r.pi)({},k),u);return o.createElement(o.Fragment,null,m&&o.createElement(w,{sideCar:l,removeScrollBar:v,shards:p,noIsolation:g,inert:b,setCallbacks:s,allowPinchZoom:!!E,lockRef:n,gapMode:y}),d?o.cloneElement(o.Children.only(f),(0,r.pi)((0,r.pi)({},S),{ref:R})):o.createElement(void 0===C?"div":C,(0,r.pi)({},S,{className:h,ref:R}),f))});u.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},u.classNames={fullWidth:a.zi,zeroRight:a.pF};var s=n(6898),d=n(2776),f=n(8662),h=!1;if("undefined"!=typeof window)try{var v=Object.defineProperty({},"passive",{get:function(){return h=!0,!0}});window.addEventListener("test",v,v),window.removeEventListener("test",v,v)}catch(e){h=!1}var m=!!h&&{passive:!1},p=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},w=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),g(e,r)){var o=b(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},g=function(e,t){return"v"===e?p(t,"overflowY"):p(t,"overflowX")},b=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},E=function(e,t,n,r,o){var a,c=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),l=c*r,i=n.target,u=t.contains(i),s=!1,d=l>0,f=0,h=0;do{var v=b(e,i),m=v[0],p=v[1]-v[2]-c*m;(m||p)&&g(e,i)&&(f+=p,h+=m),i=i instanceof ShadowRoot?i.host:i.parentNode}while(!u&&i!==document.body||u&&(t.contains(i)||t===i));return d&&(o&&1>Math.abs(f)||!o&&l>f)?s=!0:!d&&(o&&1>Math.abs(h)||!o&&-l>h)&&(s=!0),s},C=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},y=function(e){return[e.deltaX,e.deltaY]},k=function(e){return e&&"current"in e?e.current:e},R=0,S=[],L=(0,s.L)(l,function(e){var t=o.useRef([]),n=o.useRef([0,0]),a=o.useRef(),c=o.useState(R++)[0],l=o.useState(f.Ws)[0],i=o.useRef(e);o.useEffect(function(){i.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(c));var t=(0,r.ev)([e.lockRef.current],(e.shards||[]).map(k),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(c))})}}},[e.inert,e.lockRef.current,e.shards]);var u=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var r,o=C(e),c=n.current,l="deltaX"in e?e.deltaX:c[0]-o[0],u="deltaY"in e?e.deltaY:c[1]-o[1],s=e.target,d=Math.abs(l)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=w(d,s);if(!f)return!0;if(f?r=d:(r="v"===d?"h":"v",f=w(d,s)),!f)return!1;if(!a.current&&"changedTouches"in e&&(l||u)&&(a.current=r),!r)return!0;var h=a.current||r;return E(h,t,e,"h"===h?l:u,!0)},[]),s=o.useCallback(function(e){if(S.length&&S[S.length-1]===l){var n="deltaY"in e?y(e):C(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(k).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),h=o.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),v=o.useCallback(function(e){n.current=C(e),a.current=void 0},[]),p=o.useCallback(function(t){h(t.type,y(t),t.target,u(t,e.lockRef.current))},[]),g=o.useCallback(function(t){h(t.type,C(t),t.target,u(t,e.lockRef.current))},[]);o.useEffect(function(){return S.push(l),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:g}),document.addEventListener("wheel",s,m),document.addEventListener("touchmove",s,m),document.addEventListener("touchstart",v,m),function(){S=S.filter(function(e){return e!==l}),document.removeEventListener("wheel",s,m),document.removeEventListener("touchmove",s,m),document.removeEventListener("touchstart",v,m)}},[]);var b=e.removeScrollBar,L=e.inert;return o.createElement(o.Fragment,null,L?o.createElement(l,{styles:"\n  .block-interactivity-".concat(c," {pointer-events: none;}\n  .allow-interactivity-").concat(c," {pointer-events: all;}\n")}):null,b?o.createElement(d.jp,{gapMode:e.gapMode}):null)}),N=o.forwardRef(function(e,t){return o.createElement(u,(0,r.pi)({},e,{ref:t,sideCar:L}))});N.classNames=u.classNames;var M=N}}]);