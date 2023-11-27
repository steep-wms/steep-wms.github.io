"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[551],{8551:function(e,t,n){n.r(t),n.d(t,{RemoveScroll:function(){return S}});var r=n(44),o=n(2265),a=n(5322),l=n(5835),c=(0,n(8427)._)(),nothing=function(){},i=o.forwardRef(function(e,t){var n=o.useRef(null),a=o.useState({onScrollCapture:nothing,onWheelCapture:nothing,onTouchMoveCapture:nothing}),i=a[0],u=a[1],s=e.forwardProps,d=e.children,f=e.className,h=e.removeScrollBar,v=e.enabled,m=e.shards,g=e.sideCar,p=e.noIsolation,w=e.inert,S=e.allowPinchZoom,C=e.as,b=void 0===C?"div":C,E=e.gapMode,R=(0,r._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),y=(0,l.q)([n,t]),k=(0,r.pi)((0,r.pi)({},R),i);return o.createElement(o.Fragment,null,v&&o.createElement(g,{sideCar:c,removeScrollBar:h,shards:m,noIsolation:p,inert:w,setCallbacks:u,allowPinchZoom:!!S,lockRef:n,gapMode:E}),s?o.cloneElement(o.Children.only(d),(0,r.pi)((0,r.pi)({},k),{ref:y})):o.createElement(b,(0,r.pi)({},k,{className:f,ref:y}),d))});i.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},i.classNames={fullWidth:a.zi,zeroRight:a.pF};var u=n(6898),s=n(2776),d=n(8662),f=!1;if("undefined"!=typeof window)try{var h=Object.defineProperty({},"passive",{get:function(){return f=!0,!0}});window.addEventListener("test",h,h),window.removeEventListener("test",h,h)}catch(e){f=!1}var v=!!f&&{passive:!1},elementCanBeScrolled=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},locationCouldBeScrolled=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),elementCouldBeScrolled(e,r)){var o=getScrollVariables(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},elementCouldBeScrolled=function(e,t){return"v"===e?elementCanBeScrolled(t,"overflowY"):elementCanBeScrolled(t,"overflowX")},getScrollVariables=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},handleScroll=function(e,t,n,r,o){var a,l=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),c=l*r,i=n.target,u=t.contains(i),s=!1,d=c>0,f=0,h=0;do{var v=getScrollVariables(e,i),m=v[0],g=v[1]-v[2]-l*m;(m||g)&&elementCouldBeScrolled(e,i)&&(f+=g,h+=m),i=i instanceof ShadowRoot?i.host:i.parentNode}while(!u&&i!==document.body||u&&(t.contains(i)||t===i));return d&&(o&&1>Math.abs(f)||!o&&c>f)?s=!0:!d&&(o&&1>Math.abs(h)||!o&&-c>h)&&(s=!0),s},getTouchXY=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},getDeltaXY=function(e){return[e.deltaX,e.deltaY]},extractRef=function(e){return e&&"current"in e?e.current:e},m=0,g=[];function RemoveScrollSideCar(e){var t=o.useRef([]),n=o.useRef([0,0]),a=o.useRef(),l=o.useState(m++)[0],c=o.useState(d.Ws)[0],i=o.useRef(e);o.useEffect(function(){i.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(l));var t=(0,r.ev)([e.lockRef.current],(e.shards||[]).map(extractRef),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(l))}),function(){document.body.classList.remove("block-interactivity-".concat(l)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(l))})}}},[e.inert,e.lockRef.current,e.shards]);var u=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var r,o=getTouchXY(e),l=n.current,c="deltaX"in e?e.deltaX:l[0]-o[0],u="deltaY"in e?e.deltaY:l[1]-o[1],s=e.target,d=Math.abs(c)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=locationCouldBeScrolled(d,s);if(!f)return!0;if(f?r=d:(r="v"===d?"h":"v",f=locationCouldBeScrolled(d,s)),!f)return!1;if(!a.current&&"changedTouches"in e&&(c||u)&&(a.current=r),!r)return!0;var h=a.current||r;return handleScroll(h,t,e,"h"===h?c:u,!0)},[]),f=o.useCallback(function(e){if(g.length&&g[g.length-1]===c){var n="deltaY"in e?getDeltaXY(e):getTouchXY(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(extractRef).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),h=o.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:getOutermostShadowParent(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),p=o.useCallback(function(e){n.current=getTouchXY(e),a.current=void 0},[]),w=o.useCallback(function(t){h(t.type,getDeltaXY(t),t.target,u(t,e.lockRef.current))},[]),S=o.useCallback(function(t){h(t.type,getTouchXY(t),t.target,u(t,e.lockRef.current))},[]);o.useEffect(function(){return g.push(c),e.setCallbacks({onScrollCapture:w,onWheelCapture:w,onTouchMoveCapture:S}),document.addEventListener("wheel",f,v),document.addEventListener("touchmove",f,v),document.addEventListener("touchstart",p,v),function(){g=g.filter(function(e){return e!==c}),document.removeEventListener("wheel",f,v),document.removeEventListener("touchmove",f,v),document.removeEventListener("touchstart",p,v)}},[]);var C=e.removeScrollBar,b=e.inert;return o.createElement(o.Fragment,null,b?o.createElement(c,{styles:"\n  .block-interactivity-".concat(l," {pointer-events: none;}\n  .allow-interactivity-").concat(l," {pointer-events: all;}\n")}):null,C?o.createElement(s.jp,{gapMode:e.gapMode}):null)}function getOutermostShadowParent(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var p=(0,u.L)(c,RemoveScrollSideCar),w=o.forwardRef(function(e,t){return o.createElement(i,(0,r.pi)({},e,{ref:t,sideCar:p}))});w.classNames=i.classNames;var S=w}}]);