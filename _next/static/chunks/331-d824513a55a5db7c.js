"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[331],{760:function(e,r,t){t.d(r,{u:function(){return $ae6933e535247d3d$export$7d15b64cf5a3a4c4}});function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(e,[r,t]){return Math.min(t,Math.max(r,e))}},5400:function(e,r,t){t.d(r,{gm:function(){return $f631663db3294ace$export$b39126d51d94e6f3}});var o=t(2265);let n=(0,o.createContext)(void 0);function $f631663db3294ace$export$b39126d51d94e6f3(e){let r=(0,o.useContext)(n);return e||r||"ltr"}},5331:function(e,r,t){t.d(r,{LW:function(){return k},bU:function(){return H},fC:function(){return O},l_:function(){return M}});var o=t(3428),n=t(2265),l=t(9381),a=t(5606),i=t(6989),c=t(2210),s=t(6459),d=t(5400),u=t(1030),h=t(760),b=t(5744);let f="ScrollArea",[v,p]=(0,i.b)(f),[w,m]=v(f),$=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,type:a="hover",dir:i,scrollHideDelay:s=600,...u}=e,[h,b]=(0,n.useState)(null),[f,v]=(0,n.useState)(null),[p,m]=(0,n.useState)(null),[$,g]=(0,n.useState)(null),[S,E]=(0,n.useState)(null),[T,C]=(0,n.useState)(0),[R,y]=(0,n.useState)(0),[P,L]=(0,n.useState)(!1),[z,_]=(0,n.useState)(!1),D=(0,c.e)(r,e=>b(e)),W=(0,d.gm)(i);return(0,n.createElement)(w,{scope:t,type:a,dir:W,scrollHideDelay:s,scrollArea:h,viewport:f,onViewportChange:v,content:p,onContentChange:m,scrollbarX:$,onScrollbarXChange:g,scrollbarXEnabled:P,onScrollbarXEnabledChange:L,scrollbarY:S,onScrollbarYChange:E,scrollbarYEnabled:z,onScrollbarYEnabledChange:_,onCornerWidthChange:C,onCornerHeightChange:y},(0,n.createElement)(l.WV.div,(0,o.Z)({dir:W},u,{ref:D,style:{position:"relative","--radix-scroll-area-corner-width":T+"px","--radix-scroll-area-corner-height":R+"px",...e.style}})))}),g=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,children:a,...i}=e,s=m("ScrollAreaViewport",t),d=(0,n.useRef)(null),u=(0,c.e)(r,d,s.onViewportChange);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,n.createElement)(l.WV.div,(0,o.Z)({"data-radix-scroll-area-viewport":""},i,{ref:u,style:{overflowX:s.scrollbarXEnabled?"scroll":"hidden",overflowY:s.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,n.createElement)("div",{ref:s.onContentChange,style:{minWidth:"100%",display:"table"}},a)))}),S="ScrollAreaScrollbar",E=(0,n.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,a=m(S,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:c}=a,s="horizontal"===e.orientation;return(0,n.useEffect)(()=>(s?i(!0):c(!0),()=>{s?i(!1):c(!1)}),[s,i,c]),"hover"===a.type?(0,n.createElement)(T,(0,o.Z)({},l,{ref:r,forceMount:t})):"scroll"===a.type?(0,n.createElement)(C,(0,o.Z)({},l,{ref:r,forceMount:t})):"auto"===a.type?(0,n.createElement)(R,(0,o.Z)({},l,{ref:r,forceMount:t})):"always"===a.type?(0,n.createElement)(y,(0,o.Z)({},l,{ref:r})):null}),T=(0,n.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,i=m(S,e.__scopeScrollArea),[c,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=i.scrollArea,r=0;if(e){let handlePointerEnter=()=>{window.clearTimeout(r),s(!0)},handlePointerLeave=()=>{r=window.setTimeout(()=>s(!1),i.scrollHideDelay)};return e.addEventListener("pointerenter",handlePointerEnter),e.addEventListener("pointerleave",handlePointerLeave),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",handlePointerEnter),e.removeEventListener("pointerleave",handlePointerLeave)}}},[i.scrollArea,i.scrollHideDelay]),(0,n.createElement)(a.z,{present:t||c},(0,n.createElement)(R,(0,o.Z)({"data-state":c?"visible":"hidden"},l,{ref:r})))}),C=(0,n.forwardRef)((e,r)=>{var t;let{forceMount:l,...i}=e,c=m(S,e.__scopeScrollArea),s="horizontal"===e.orientation,d=$57acba87d6e25586$var$useDebounceCallback(()=>h("SCROLL_END"),100),[u,h]=(t={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},(0,n.useReducer)((e,r)=>{let o=t[e][r];return null!=o?o:e},"hidden"));return(0,n.useEffect)(()=>{if("idle"===u){let e=window.setTimeout(()=>h("HIDE"),c.scrollHideDelay);return()=>window.clearTimeout(e)}},[u,c.scrollHideDelay,h]),(0,n.useEffect)(()=>{let e=c.viewport,r=s?"scrollLeft":"scrollTop";if(e){let t=e[r],handleScroll=()=>{let o=e[r],n=t!==o;n&&(h("SCROLL"),d()),t=o};return e.addEventListener("scroll",handleScroll),()=>e.removeEventListener("scroll",handleScroll)}},[c.viewport,s,h,d]),(0,n.createElement)(a.z,{present:l||"hidden"!==u},(0,n.createElement)(y,(0,o.Z)({"data-state":"hidden"===u?"hidden":"visible"},i,{ref:r,onPointerEnter:(0,b.M)(e.onPointerEnter,()=>h("POINTER_ENTER")),onPointerLeave:(0,b.M)(e.onPointerLeave,()=>h("POINTER_LEAVE"))})))}),R=(0,n.forwardRef)((e,r)=>{let t=m(S,e.__scopeScrollArea),{forceMount:l,...i}=e,[c,s]=(0,n.useState)(!1),d="horizontal"===e.orientation,u=$57acba87d6e25586$var$useDebounceCallback(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;s(d?e:r)}},10);return $57acba87d6e25586$var$useResizeObserver(t.viewport,u),$57acba87d6e25586$var$useResizeObserver(t.content,u),(0,n.createElement)(a.z,{present:l||c},(0,n.createElement)(y,(0,o.Z)({"data-state":c?"visible":"hidden"},i,{ref:r})))}),y=(0,n.forwardRef)((e,r)=>{let{orientation:t="vertical",...l}=e,a=m(S,e.__scopeScrollArea),i=(0,n.useRef)(null),c=(0,n.useRef)(0),[s,d]=(0,n.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=$57acba87d6e25586$var$getThumbRatio(s.viewport,s.content),h={...l,sizes:s,onSizesChange:d,hasThumb:!!(u>0&&u<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>c.current=0,onThumbPointerDown:e=>c.current=e};function getScrollPosition(e,r){return function(e,r,t,o="ltr"){let n=$57acba87d6e25586$var$getThumbSize(t),l=r||n/2,a=t.scrollbar.paddingStart+l,i=t.scrollbar.size-t.scrollbar.paddingEnd-(n-l),c=t.content-t.viewport,s=$57acba87d6e25586$var$linearScale([a,i],"ltr"===o?[0,c]:[-1*c,0]);return s(e)}(e,c.current,s,r)}return"horizontal"===t?(0,n.createElement)(P,(0,o.Z)({},h,{ref:r,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollLeft,r=$57acba87d6e25586$var$getThumbOffsetFromScroll(e,s,a.dir);i.current.style.transform=`translate3d(${r}px, 0, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollLeft=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollLeft=getScrollPosition(e,a.dir))}})):"vertical"===t?(0,n.createElement)(L,(0,o.Z)({},h,{ref:r,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollTop,r=$57acba87d6e25586$var$getThumbOffsetFromScroll(e,s);i.current.style.transform=`translate3d(0, ${r}px, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollTop=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollTop=getScrollPosition(e))}})):null}),P=(0,n.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:l,...a}=e,i=m(S,e.__scopeScrollArea),[s,d]=(0,n.useState)(),u=(0,n.useRef)(null),h=(0,c.e)(r,u,i.onScrollbarXChange);return(0,n.useEffect)(()=>{u.current&&d(getComputedStyle(u.current))},[u]),(0,n.createElement)(D,(0,o.Z)({"data-orientation":"horizontal"},a,{ref:h,sizes:t,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":$57acba87d6e25586$var$getThumbSize(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(i.viewport){let o=i.viewport.scrollLeft+r.deltaX;e.onWheelScroll(o),o>0&&o<t&&r.preventDefault()}},onResize:()=>{u.current&&i.viewport&&s&&l({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:$57acba87d6e25586$var$toInt(s.paddingLeft),paddingEnd:$57acba87d6e25586$var$toInt(s.paddingRight)}})}}))}),L=(0,n.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:l,...a}=e,i=m(S,e.__scopeScrollArea),[s,d]=(0,n.useState)(),u=(0,n.useRef)(null),h=(0,c.e)(r,u,i.onScrollbarYChange);return(0,n.useEffect)(()=>{u.current&&d(getComputedStyle(u.current))},[u]),(0,n.createElement)(D,(0,o.Z)({"data-orientation":"vertical"},a,{ref:h,sizes:t,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":$57acba87d6e25586$var$getThumbSize(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(i.viewport){let o=i.viewport.scrollTop+r.deltaY;e.onWheelScroll(o),o>0&&o<t&&r.preventDefault()}},onResize:()=>{u.current&&i.viewport&&s&&l({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:$57acba87d6e25586$var$toInt(s.paddingTop),paddingEnd:$57acba87d6e25586$var$toInt(s.paddingBottom)}})}}))}),[z,_]=v(S),D=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,sizes:a,hasThumb:i,onThumbChange:d,onThumbPointerUp:u,onThumbPointerDown:h,onThumbPositionChange:f,onDragScroll:v,onWheelScroll:p,onResize:w,...$}=e,g=m(S,t),[E,T]=(0,n.useState)(null),C=(0,c.e)(r,e=>T(e)),R=(0,n.useRef)(null),y=(0,n.useRef)(""),P=g.viewport,L=a.content-a.viewport,_=(0,s.W)(p),D=(0,s.W)(f),W=$57acba87d6e25586$var$useDebounceCallback(w,10);function handleDragScroll(e){if(R.current){let r=e.clientX-R.current.left,t=e.clientY-R.current.top;v({x:r,y:t})}}return(0,n.useEffect)(()=>{let handleWheel=e=>{let r=e.target,t=null==E?void 0:E.contains(r);t&&_(e,L)};return document.addEventListener("wheel",handleWheel,{passive:!1}),()=>document.removeEventListener("wheel",handleWheel,{passive:!1})},[P,E,L,_]),(0,n.useEffect)(D,[a,D]),$57acba87d6e25586$var$useResizeObserver(E,W),$57acba87d6e25586$var$useResizeObserver(g.content,W),(0,n.createElement)(z,{scope:t,scrollbar:E,hasThumb:i,onThumbChange:(0,s.W)(d),onThumbPointerUp:(0,s.W)(u),onThumbPositionChange:D,onThumbPointerDown:(0,s.W)(h)},(0,n.createElement)(l.WV.div,(0,o.Z)({},$,{ref:C,style:{position:"absolute",...$.style},onPointerDown:(0,b.M)(e.onPointerDown,e=>{if(0===e.button){let r=e.target;r.setPointerCapture(e.pointerId),R.current=E.getBoundingClientRect(),y.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",g.viewport&&(g.viewport.style.scrollBehavior="auto"),handleDragScroll(e)}}),onPointerMove:(0,b.M)(e.onPointerMove,handleDragScroll),onPointerUp:(0,b.M)(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=y.current,g.viewport&&(g.viewport.style.scrollBehavior=""),R.current=null})})))}),W="ScrollAreaThumb",x=(0,n.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,i=_(W,e.__scopeScrollArea);return(0,n.createElement)(a.z,{present:t||i.hasThumb},(0,n.createElement)(A,(0,o.Z)({ref:r},l)))}),A=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,style:a,...i}=e,s=m(W,t),d=_(W,t),{onThumbPositionChange:u}=d,h=(0,c.e)(r,e=>d.onThumbChange(e)),f=(0,n.useRef)(),v=$57acba87d6e25586$var$useDebounceCallback(()=>{f.current&&(f.current(),f.current=void 0)},100);return(0,n.useEffect)(()=>{let e=s.viewport;if(e){let handleScroll=()=>{if(v(),!f.current){let r=$57acba87d6e25586$var$addUnlinkedScrollListener(e,u);f.current=r,u()}};return u(),e.addEventListener("scroll",handleScroll),()=>e.removeEventListener("scroll",handleScroll)}},[s.viewport,v,u]),(0,n.createElement)(l.WV.div,(0,o.Z)({"data-state":d.hasThumb?"visible":"hidden"},i,{ref:h,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:(0,b.M)(e.onPointerDownCapture,e=>{let r=e.target,t=r.getBoundingClientRect(),o=e.clientX-t.left,n=e.clientY-t.top;d.onThumbPointerDown({x:o,y:n})}),onPointerUp:(0,b.M)(e.onPointerUp,d.onThumbPointerUp)}))});function $57acba87d6e25586$var$toInt(e){return e?parseInt(e,10):0}function $57acba87d6e25586$var$getThumbRatio(e,r){let t=e/r;return isNaN(t)?0:t}function $57acba87d6e25586$var$getThumbSize(e){let r=$57acba87d6e25586$var$getThumbRatio(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,o=(e.scrollbar.size-t)*r;return Math.max(o,18)}function $57acba87d6e25586$var$getThumbOffsetFromScroll(e,r,t="ltr"){let o=$57acba87d6e25586$var$getThumbSize(r),n=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-n,a=r.content-r.viewport,i="ltr"===t?[0,a]:[-1*a,0],c=(0,h.u)(e,i),s=$57acba87d6e25586$var$linearScale([0,a],[0,l-o]);return s(c)}function $57acba87d6e25586$var$linearScale(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let o=(r[1]-r[0])/(e[1]-e[0]);return r[0]+o*(t-e[0])}}(e,r)=>{let{__scopeScrollArea:t,...a}=e,i=m("ScrollAreaCorner",t),[c,s]=(0,n.useState)(0),[d,u]=(0,n.useState)(0);return $57acba87d6e25586$var$useResizeObserver(i.scrollbarX,()=>{var e;let r=(null===(e=i.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;i.onCornerHeightChange(r),u(r)}),$57acba87d6e25586$var$useResizeObserver(i.scrollbarY,()=>{var e;let r=(null===(e=i.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;i.onCornerWidthChange(r),s(r)}),c&&d?(0,n.createElement)(l.WV.div,(0,o.Z)({},a,{ref:r,style:{width:c,height:d,position:"absolute",right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:0,...e.style}})):null};let $57acba87d6e25586$var$addUnlinkedScrollListener=(e,r=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},o=0;return!function loop(){let n={left:e.scrollLeft,top:e.scrollTop},l=t.left!==n.left,a=t.top!==n.top;(l||a)&&r(),t=n,o=window.requestAnimationFrame(loop)}(),()=>window.cancelAnimationFrame(o)};function $57acba87d6e25586$var$useDebounceCallback(e,r){let t=(0,s.W)(e),o=(0,n.useRef)(0);return(0,n.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,n.useCallback)(()=>{window.clearTimeout(o.current),o.current=window.setTimeout(t,r)},[t,r])}function $57acba87d6e25586$var$useResizeObserver(e,r){let t=(0,s.W)(r);(0,u.b)(()=>{let r=0;if(e){let o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,t])}let O=$,M=g,k=E,H=x}}]);