(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[658],{3806:function(e,t,r){Promise.resolve().then(r.bind(r,2430)),Promise.resolve().then(r.t.bind(r,5250,23)),Promise.resolve().then(r.t.bind(r,3671,23))},9280:function(e,t,r){"use strict";var s=r(7437),a=r(8792),i=r(2265);let o=(0,i.forwardRef)((e,t)=>{var r;let o=null===(r=e.href)||void 0===r?void 0:r.toString();if(void 0!==o&&(o.match(/https?:\/\//)&&!o.startsWith("https://steep-wms.github.io/")&&!o.startsWith("http://localhost")||o.startsWith("mailto:"))){let r=Object.keys(e);for(let e of["as","replace","scroll","shallow","passHref","prefetch","locale","legacyBehavior","onMouseEnter","onTouchStart"])if(r.includes(e))throw Error("Propery '".concat(e,"' is not supported for external link '").concat(o,"'"));return(0,i.createElement)("a",{...e,"data-external":"external",ref:t})}return(0,s.jsx)(a.default,{...e,ref:t})});t.Z=o},2430:function(e,t,r){"use strict";r.r(t);var s=r(7437),a=r(9280),i=r(3176),o=r(2265);t.default=e=>{let{previewImages:t,previewImageWidth:r=450,previewImageHeight:c,authors:l,year:n,title:d,citation:u,pdf:h}=e,[f,v]=(0,i.H)(),m=(0,o.useRef)(void 0),p=(0,o.useRef)(void 0),x=(0,o.useRef)(!1),g=(0,o.useCallback)(()=>{if(x.current=!0,void 0!==m.current&&m.current.stop(),void 0===p.current){f.current.querySelectorAll("source").forEach(e=>{e.srcset=e.dataset.srcset});let e=f.current.querySelectorAll("img"),t=[];e.forEach(e=>{null!==e.src&&void 0!==e.src&&""!==e.src&&e.complete||(e.src=e.dataset.src,e.loading="eager",t.push(new Promise(t=>{e.onload=()=>{t()}})))}),p.current=Promise.all(t),p.current.then(()=>{p.current=void 0,x.current&&(m.current=v("div",{y:["0%","-100%","-100%","-200%"]},{duration:1.5,ease:"circOut",times:[0,.4,.6,1]}))})}},[v,f]),b=(0,o.useCallback)(()=>{x.current=!1,void 0!==m.current&&m.current.stop(),m.current=v("div:first-child",{opacity:[0,1],y:[0,0]},{duration:.3,ease:"easeOut",times:[0,1]})},[v]);return(0,s.jsxs)("div",{className:"bg-gray-100 rounded-md pt-8 pb-8 pr-8 pl-8 xs:pl-[8.75rem] relative overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex h-full flex-col",children:[(0,s.jsxs)("div",{className:"flex flex-row text-sm text-gray-700 mb-2 gap-1",children:[(0,s.jsx)("div",{className:"whitespace-nowrap overflow-hidden text-ellipsis",children:l}),(0,s.jsxs)("div",{children:["(",n,")"]})]}),(0,s.jsx)("h3",{className:"text-lg mt-0",children:d}),(0,s.jsx)("div",{className:"text-xs text-gray-600",children:u}),(0,s.jsx)("div",{className:"mt-2 text-gray-700"})]}),(0,s.jsx)("div",{className:"not-prose absolute top-14 -left-20 w-48 hidden xs:block",children:(0,s.jsx)(a.Z,{href:h,target:"_blank",rel:"noopener noreferrer",tabIndex:-1,children:(0,s.jsx)("div",{ref:f,className:"drop-shadow-lg after:absolute after:inset-0 after:bg-[linear-gradient(0.18turn,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0)_100%)] overflow-hidden relative bg-white rounded-sm",onMouseEnter:g,onMouseLeave:b,children:t.map((e,t)=>(0,s.jsx)("div",{className:"relative",style:{zIndex:-t},children:(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{srcSet:t>0?void 0:"".concat("","/images/showcase/publications/").concat(e,".avif"),"data-srcset":"".concat("","/images/showcase/publications/").concat(e,".avif"),type:"image/avif",width:r,height:c}),(0,s.jsx)("img",{alt:"title",src:t>0?void 0:"".concat("","/images/showcase/publications/").concat(e,".jpg"),"data-src":"".concat("","/images/showcase/publications/").concat(e,".jpg"),width:r,height:c,loading:"lazy"})]})},e))})})})]})}},8792:function(e,t,r){"use strict";r.d(t,{default:function(){return a.a}});var s=r(5250),a=r.n(s)},3671:function(e){e.exports={style:{fontFamily:"'__Roboto_ae1819', '__Roboto_Fallback_ae1819'",fontWeight:700,fontStyle:"normal"},className:"__className_ae1819",variable:"__variable_ae1819"}}},function(e){e.O(0,[250,176,971,69,744],function(){return e(e.s=3806)}),_N_E=e.O()}]);