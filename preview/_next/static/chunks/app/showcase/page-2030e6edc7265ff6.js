(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21],{3898:function(e,r,t){Promise.resolve().then(t.t.bind(t,6685,23)),Promise.resolve().then(t.bind(t,9818)),Promise.resolve().then(t.bind(t,7180)),Promise.resolve().then(t.t.bind(t,3136,23))},8329:function(e,r,t){"use strict";var s=t(7437),a=t(1396),n=t.n(a),o=t(2265);let c=(0,o.forwardRef)((e,r)=>{var t;let a=null===(t=e.href)||void 0===t?void 0:t.toString();if(void 0!==a&&(a.match(/https?:\/\//)&&!a.startsWith("https://steep-wms.github.io/")&&!a.startsWith("http://localhost")||a.startsWith("mailto:"))){let t=Object.keys(e);for(let e of["as","replace","scroll","shallow","passHref","prefetch","locale","legacyBehavior","onMouseEnter","onTouchStart"])if(t.includes(e))throw Error("Propery '".concat(e,"' is not supported for external link '").concat(a,"'"));return(0,o.createElement)("a",{...e,"data-external":"external",ref:r})}return(0,s.jsx)(n(),{...e,ref:r})});r.Z=c},9818:function(e,r,t){"use strict";t.r(r);var s=t(7437),a=t(8329),n=t(2393),o=t(8868),c=t(2265);r.default=e=>{let{imageBaseName:r,nSlides:t,title:i,speaker:l,link:d,children:u}=e,f=(0,c.useRef)(0),[h,m]=(0,n.H)(),p=(0,o.Y)(h),v=[];for(let e=1;e<=t;++e){let t="".concat(e);t.length<2&&(t="0".concat(t)),v.push("".concat(r,"-").concat(t))}return v.push("".concat(r,"-01")),(0,c.useEffect)(()=>{let e;if(!p)return;let r=!1;function s(){if(null===h.current)return;let e=(f.current+1)%(t+1),s=h.current.querySelectorAll("div")[e],n=s.querySelector("source"),o=s.querySelector("img");n.srcset=n.dataset.srcset;let c=[];null!==o.src&&void 0!==o.src&&""!==o.src&&o.complete||(o.src=o.dataset.src,o.loading="eager",c.push(new Promise(e=>{o.onload=()=>{e()}}))),Promise.all(c).then(()=>{m("div",{x:"-".concat(100*e,"%")},{duration:0===e?0:1,ease:"easeInOut"}).then(()=>{f.current=e,r||a(e)})})}function a(r){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];void 0!==e&&clearTimeout(e),e=window.setTimeout(s,0===r?0:t?1e3+1e3*Math.random():4e3+7e3*Math.random())}return a(1,!0),()=>{void 0!==e&&clearTimeout(e),r=!0}},[m,h,t,p]),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-6 py-12 border-t border-gray-300 [&:first-child]:pt-0 [&:first-child]:border-none [&:last-child]:pb-0",children:[(0,s.jsx)("div",{className:"not-prose flex items-start md:col-span-2",children:(0,s.jsx)(a.Z,{href:d,className:"max-w-sm md:max-w-full border border-gray-200",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("div",{className:"flex overflow-hidden",ref:h,children:v.map((e,r)=>(0,s.jsx)("div",{className:"min-w-full",children:(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{srcSet:r>0?void 0:"".concat("/preview","/images/showcase/presentations/").concat(e,".avif"),"data-srcset":"".concat("/preview","/images/showcase/presentations/").concat(e,".avif"),type:"image/avif",width:720,height:405}),(0,s.jsx)("img",{src:r>0?void 0:"".concat("/preview","/images/showcase/presentations/").concat(e,".jpg"),"data-src":"".concat("/preview","/images/showcase/presentations/").concat(e,".jpg"),alt:"Slides",width:720,height:405,loading:"lazy"})]})},r))})})}),(0,s.jsxs)("div",{className:"prose md:col-span-3",children:[(0,s.jsx)(a.Z,{href:d,target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("h3",{className:"text-lg mt-0 mb-1",children:i})}),(0,s.jsx)("div",{className:"text-gray-600 mb-4",children:l}),(0,s.jsx)("div",{className:"text-sm",children:u}),(0,s.jsx)("div",{className:"mt-6 gap-1 text-sm",children:(0,s.jsx)(a.Z,{href:d,target:"_blank",rel:"noopener noreferrer",children:"See slides ..."})})]})]})}},7180:function(e,r,t){"use strict";t.r(r);var s=t(7437),a=t(8329),n=t(2393),o=t(2265);r.default=e=>{let{previewImages:r,previewImageWidth:t=450,previewImageHeight:c,authors:i,year:l,title:d,citation:u,pdf:f}=e,[h,m]=(0,n.H)(),p=(0,o.useRef)(void 0),v=(0,o.useRef)(void 0),g=(0,o.useRef)(!1),x=(0,o.useCallback)(()=>{if(g.current=!0,void 0!==p.current&&p.current.stop(),void 0===v.current){h.current.querySelectorAll("source").forEach(e=>{e.srcset=e.dataset.srcset});let e=h.current.querySelectorAll("img"),r=[];e.forEach(e=>{null!==e.src&&void 0!==e.src&&""!==e.src&&e.complete||(e.src=e.dataset.src,e.loading="eager",r.push(new Promise(r=>{e.onload=()=>{r()}})))}),v.current=Promise.all(r),v.current.then(()=>{v.current=void 0,g.current&&(p.current=m("div",{y:["0%","-100%","-100%","-200%"]},{duration:1.5,ease:"circOut",times:[0,.4,.6,1]}))})}},[m,h]),b=(0,o.useCallback)(()=>{g.current=!1,void 0!==p.current&&p.current.stop(),p.current=m("div:first-child",{opacity:[0,1],y:[0,0]},{duration:.3,ease:"easeOut",times:[0,1]})},[m]);return(0,s.jsxs)("div",{className:"bg-gray-100 rounded-md pt-8 pb-8 pr-8 pl-8 xs:pl-[8.75rem] relative overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex h-full flex-col",children:[(0,s.jsxs)("div",{className:"flex flex-row text-sm text-gray-700 mb-2 gap-1",children:[(0,s.jsx)("div",{className:"whitespace-nowrap overflow-hidden text-ellipsis",children:i}),(0,s.jsxs)("div",{children:["(",l,")"]})]}),(0,s.jsx)("h3",{className:"text-lg mt-0",children:d}),(0,s.jsx)("div",{className:"text-xs text-gray-600",children:u}),(0,s.jsx)("div",{className:"mt-2 text-gray-700"})]}),(0,s.jsx)("div",{className:"not-prose absolute top-14 -left-20 w-48 hidden xs:block",children:(0,s.jsx)(a.Z,{href:f,target:"_blank",rel:"noopener noreferrer",tabIndex:-1,children:(0,s.jsx)("div",{ref:h,className:"drop-shadow-lg after:absolute after:inset-0 after:bg-[linear-gradient(0.18turn,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0)_100%)] overflow-hidden relative bg-white rounded-sm",onMouseEnter:x,onMouseLeave:b,children:r.map((e,r)=>(0,s.jsx)("div",{className:"relative",style:{zIndex:-r},children:(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{srcSet:r>0?void 0:"".concat("/preview","/images/showcase/publications/").concat(e,".avif"),"data-srcset":"".concat("/preview","/images/showcase/publications/").concat(e,".avif"),type:"image/avif",width:t,height:c}),(0,s.jsx)("img",{alt:"title",src:r>0?void 0:"".concat("/preview","/images/showcase/publications/").concat(e,".jpg"),"data-src":"".concat("/preview","/images/showcase/publications/").concat(e,".jpg"),width:t,height:c,loading:"lazy"})]})},e))})})})]})}},3136:function(e){e.exports={style:{fontFamily:"'__Roboto_6f92d8', '__Roboto_Fallback_6f92d8'",fontWeight:700,fontStyle:"normal"},className:"__className_6f92d8",variable:"__variable_6f92d8"}},622:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=t(2265),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var s,n={},l=null,d=null;for(s in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,s)&&!i.hasOwnProperty(s)&&(n[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===n[s]&&(n[s]=r[s]);return{$$typeof:a,type:e,key:l,ref:d,props:n,_owner:c.current}}r.Fragment=n,r.jsx=l,r.jsxs=l},7437:function(e,r,t){"use strict";e.exports=t(622)},1396:function(e,r,t){e.exports=t(6685)},8868:function(e,r,t){"use strict";t.d(r,{Y:function(){return o}});var s=t(2265),a=t(7636);let n={some:0,all:1};function o(e,{root:r,margin:t,amount:o,once:c=!1}={}){let[i,l]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{if(!e.current||c&&i)return;let s={root:r&&r.current||void 0,margin:t,amount:o};return function(e,r,{root:t,margin:s,amount:o="some"}={}){let c=(0,a.I)(e),i=new WeakMap,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target);if(!!t!==e.isIntersecting){if(e.isIntersecting){let t=r(e);"function"==typeof t?i.set(e.target,t):l.unobserve(e.target)}else t&&(t(e),i.delete(e.target))}})},{root:t,rootMargin:s,threshold:"number"==typeof o?o:n[o]});return c.forEach(e=>l.observe(e)),()=>l.disconnect()}(e.current,()=>(l(!0),c?void 0:()=>l(!1)),s)},[r,e,t,c]),i}}},function(e){e.O(0,[685,393,971,596,744],function(){return e(e.s=3898)}),_N_E=e.O()}]);