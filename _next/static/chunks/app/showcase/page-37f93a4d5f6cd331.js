(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[518],{48264:(e,r,t)=>{Promise.resolve().then(t.bind(t,42146)),Promise.resolve().then(t.bind(t,28996)),Promise.resolve().then(t.t.bind(t,48173,23)),Promise.resolve().then(t.t.bind(t,44799,23))},42146:(e,r,t)=>{"use strict";t.d(r,{default:()=>d});var s=t(95155),a=t(51220),c=t(12115),l=t(29889);let n={some:0,all:1};var i=t(48173),o=t.n(i);let d=e=>{let{imageBaseName:r,nSlides:t,title:i,speaker:d,link:u,children:h}=e,m=(0,c.useRef)(0),[f,g]=(0,a.l)(),v=function(e,{root:r,margin:t,amount:s,once:a=!1}={}){let[i,o]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{if(!e.current||a&&i)return;let c={root:r&&r.current||void 0,margin:t,amount:s};return function(e,r,{root:t,margin:s,amount:a="some"}={}){let c=(0,l.KJ)(e),i=new WeakMap,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target);if(!!t!==e.isIntersecting){if(e.isIntersecting){let t=r(e);"function"==typeof t?i.set(e.target,t):o.unobserve(e.target)}else t&&(t(e),i.delete(e.target))}})},{root:t,rootMargin:s,threshold:"number"==typeof a?a:n[a]});return c.forEach(e=>o.observe(e)),()=>o.disconnect()}(e.current,()=>(o(!0),a?void 0:()=>o(!1)),c)},[r,e,t,a,s]),i}(f),x=[];for(let e=1;e<=t;++e){let t="".concat(e);t.length<2&&(t="0".concat(t)),x.push("".concat(r,"-").concat(t))}return x.push("".concat(r,"-01")),(0,c.useEffect)(()=>{let e;if(!v)return;let r=!1;function s(){if(null===f.current)return;let e=(m.current+1)%(t+1),s=f.current.querySelectorAll("div")[e],c=s.querySelector("source"),l=s.querySelector("img");c.srcset=c.dataset.srcset;let n=[];null!==l.src&&void 0!==l.src&&""!==l.src&&l.complete||(l.src=l.dataset.src,l.loading="eager",n.push(new Promise(e=>{l.onload=()=>{e()}}))),Promise.all(n).then(()=>{g("div",{x:"-".concat(100*e,"%")},{duration:0===e?0:1,ease:"easeInOut"}).then(()=>{m.current=e,r||a(e)})})}function a(r){let t,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];void 0!==e&&clearTimeout(e),t=0===r?0:a?1e3+1e3*Math.random():4e3+7e3*Math.random(),e=window.setTimeout(s,t)}return a(1,!0),()=>{void 0!==e&&clearTimeout(e),r=!0}},[g,f,t,v]),(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-6 border-t border-gray-300 py-12 md:grid-cols-5 [&:first-child]:border-none [&:first-child]:pt-0 [&:last-child]:pb-0",children:[(0,s.jsx)("div",{className:"flex items-start md:col-span-2",children:(0,s.jsx)(o(),{href:u,className:"mx-auto max-w-full border border-gray-200 xs:max-w-sm md:max-w-full",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("div",{className:"flex overflow-hidden",ref:f,children:x.map((e,r)=>(0,s.jsx)("div",{className:"min-w-full",children:(0,s.jsxs)("picture",{className:"m-0",children:[(0,s.jsx)("source",{srcSet:r>0?void 0:"".concat("","/images/showcase/presentations/").concat(e,".avif"),"data-srcset":"".concat("","/images/showcase/presentations/").concat(e,".avif"),type:"image/avif",width:720,height:405}),(0,s.jsx)("img",{src:r>0?void 0:"".concat("","/images/showcase/presentations/").concat(e,".jpg"),"data-src":"".concat("","/images/showcase/presentations/").concat(e,".jpg"),alt:"Slides",width:720,height:405,loading:"lazy"})]})},r))})})}),(0,s.jsxs)("div",{className:"prose md:col-span-3",children:[(0,s.jsx)(o(),{href:u,target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("h3",{className:"mb-1 mt-0 text-lg",children:i})}),(0,s.jsx)("div",{className:"mb-4 text-gray-600",children:d}),(0,s.jsx)("div",{className:"text-sm",children:h}),(0,s.jsx)("div",{className:"mt-6 gap-1 text-sm",children:(0,s.jsx)(o(),{href:u,target:"_blank",rel:"noopener noreferrer",children:"See slides ..."})})]})]})}},28996:(e,r,t)=>{"use strict";t.d(r,{default:()=>i});var s=t(95155),a=t(51220),c=t(48173),l=t.n(c),n=t(12115);let i=e=>{let{previewImages:r,previewImageWidth:t=450,previewImageHeight:c,authors:i,year:o,title:d,citation:u,pdf:h}=e,[m,f]=(0,a.l)(),g=(0,n.useRef)(void 0),v=(0,n.useRef)(void 0),x=(0,n.useRef)(!1),p=(0,n.useCallback)(()=>{if(x.current=!0,void 0!==g.current&&g.current.stop(),void 0===v.current){m.current.querySelectorAll("source").forEach(e=>{e.srcset=e.dataset.srcset});let e=m.current.querySelectorAll("img"),r=[];e.forEach(e=>{null!==e.src&&void 0!==e.src&&""!==e.src&&e.complete||(e.src=e.dataset.src,e.loading="eager",r.push(new Promise(r=>{e.onload=()=>{r()}})))}),v.current=Promise.all(r),v.current.then(()=>{v.current=void 0,x.current&&(g.current=f("div",{y:["0%","-100%","-100%","-200%"]},{duration:1.5,ease:"circOut",times:[0,.4,.6,1]}))})}},[f,m]),b=(0,n.useCallback)(()=>{x.current=!1,void 0!==g.current&&g.current.stop(),g.current=f("div:first-child",{opacity:[0,1],y:[0,0]},{duration:.3,ease:"easeOut",times:[0,1]})},[f]);return(0,s.jsxs)("div",{className:"relative overflow-hidden rounded-md bg-gray-100 pb-8 pl-8 pr-8 pt-8 xs:pl-[8.75rem]",children:[(0,s.jsxs)("div",{className:"flex h-full flex-col",children:[(0,s.jsxs)("div",{className:"mb-2 flex flex-row gap-1 text-sm text-gray-700",children:[(0,s.jsx)("div",{className:"overflow-hidden text-ellipsis whitespace-nowrap",children:i}),(0,s.jsxs)("div",{children:["(",o,")"]})]}),(0,s.jsx)("h3",{className:"mt-0 text-lg",children:d}),(0,s.jsx)("div",{className:"text-xs text-gray-600",children:u}),(0,s.jsx)("div",{className:"mt-2 text-gray-700"})]}),(0,s.jsx)("div",{className:"absolute -left-20 top-14 hidden w-48 xs:block",children:(0,s.jsx)(l(),{href:h,target:"_blank",rel:"noopener noreferrer",tabIndex:-1,children:(0,s.jsx)("div",{ref:m,className:"relative overflow-hidden rounded-sm bg-white drop-shadow-lg after:absolute after:inset-0 after:bg-[linear-gradient(0.18turn,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0)_100%)]",onMouseEnter:p,onMouseLeave:b,children:r.map((e,r)=>(0,s.jsx)("div",{className:"relative",style:{zIndex:-r},children:(0,s.jsxs)("picture",{className:"m-0",children:[(0,s.jsx)("source",{srcSet:r>0?void 0:"".concat("","/images/showcase/publications/").concat(e,".avif"),"data-srcset":"".concat("","/images/showcase/publications/").concat(e,".avif"),type:"image/avif",width:t,height:c}),(0,s.jsx)("img",{alt:"title",src:r>0?void 0:"".concat("","/images/showcase/publications/").concat(e,".jpg"),"data-src":"".concat("","/images/showcase/publications/").concat(e,".jpg"),width:t,height:c,loading:"lazy"})]})},e))})})})]})}},44799:e=>{e.exports={style:{fontFamily:"'Roboto', 'Roboto Fallback'",fontWeight:700,fontStyle:"normal"},className:"__className_235b28",variable:"__variable_235b28"}}},e=>{var r=r=>e(e.s=r);e.O(0,[746,173,839,441,517,358],()=>r(48264)),_N_E=e.O()}]);