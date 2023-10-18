"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[132],{2348:function(e,t,r){var s=r(7437),a=r(1396),l=r.n(a),n=r(2265);let o=(0,n.forwardRef)((e,t)=>{var r;let a=null===(r=e.href)||void 0===r?void 0:r.toString();if(void 0!==a&&(a.match(/https?:\/\//)&&!a.startsWith("https://steep-wms.github.io/")&&!a.startsWith("http://localhost")||a.startsWith("mailto:"))){let r=Object.keys(e);for(let e of["as","replace","scroll","shallow","passHref","prefetch","locale","legacyBehavior","onMouseEnter","onTouchStart"])if(r.includes(e))throw Error("Propery '".concat(e,"' is not supported for external link '").concat(a,"'"));return(0,n.createElement)("a",{...e,"data-external":"external",ref:t})}return(0,s.jsx)(l(),{...e,ref:t})});t.Z=o},3132:function(e,t,r){r.r(t),r.d(t,{default:function(){return components_NavBar}});var s=r(7437),a=r(4660);let l=(0,a.Ue)()(e=>({theme:void 0,setTheme:t=>e(e=>({theme:t}))}));var n=r(2265),components_DarkModeToggle=e=>{let{id:t}=e,{theme:r,setTheme:a}=l();(0,n.useEffect)(()=>{let e=window.matchMedia("(prefers-color-scheme: dark)");function onStorage(e){"theme"===e.key&&(null===e.newValue?a(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):a(e.newValue))}return void 0!==localStorage.theme?a(localStorage.theme):a(e.matches?"dark":"light"),e.addEventListener("change",e=>{a(e.matches?"dark":"light")}),window.addEventListener("storage",onStorage),()=>{window.removeEventListener("storage",onStorage)}},[a]),(0,n.useEffect)(()=>{"dark"===r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[r]);let o=(0,n.useCallback)(()=>{"dark"===r?(localStorage.theme="light",a("light")):(localStorage.theme="dark",a("dark"))},[r,a]);return(0,s.jsx)("button",{"aria-label":"dark"===r?"Activate light mode":"Activate dark mode","aria-live":"polite",onClick:()=>o(),className:"aspect-square cursor-pointer touch-manipulation rounded-full text-gray-600 outline-offset-[5px] transition-colors hover:text-gray-800",style:{inlineSize:"1.1rem",blockSize:"1.1rem",WebkitTapHighlightColor:"transparent"},children:(0,s.jsxs)("svg",{"aria-hidden":"true",width:"24",height:"24",viewBox:"0 0 24 24",style:{strokeWidth:"2px",inlineSize:"100%",blockSize:"100%",strokeLinecap:"round"},children:[(0,s.jsxs)("mask",{className:"moon origin-center",id:"moon-mask-".concat(t),children:[(0,s.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"white"}),(0,s.jsx)("circle",{cx:"dark"===r?"15":"24",cy:"9",r:"5",fill:"black",className:"transition-[cx] duration-500 ease-[cubic-bezier(0.5,0.75,0.75,1.25)]"})]}),(0,s.jsx)("circle",{className:"origin-center transition-transform duration-500 ease-[cubic-bezier(0.5,1.25,0.75,1.25)] dark:scale-[1.75] dark:duration-[250ms] dark:ease-[cubic-bezier(0.25,0,0.3,1)]",cx:"12",cy:"12",r:"6",mask:"url(#moon-mask-".concat(t,")"),fill:"currentColor"}),(0,s.jsxs)("g",{className:"origin-center [transition:transform_0.5s_cubic-bezier(0.5,1.5,0.75,1.25),opacity_0.5s_cubic-bezier(0.25,0,0.3,1)] dark:opacity-0 dark:duration-150 dark:[transform:rotateZ(-25deg)]",stroke:"currentColor",children:[(0,s.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),(0,s.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),(0,s.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),(0,s.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),(0,s.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),(0,s.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),(0,s.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),(0,s.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})]})})},o=r(2348),i=r(9685),c=r(4846),d=r(9397),h=r(1827),u=r(415),x=r.n(u),m=r(9299);let g=x()(()=>Promise.all([r.e(930),r.e(552),r.e(292),r.e(346),r.e(819)]).then(r.bind(r,5819)),{loadableGenerated:{webpack:()=>[5819]},ssr:!1});var search_QuickSearch=e=>{let{onClick:t}=e,r=(0,d.x)(),[a,l]=(0,n.useState)(!1);return(0,m.y1)("mod+k",()=>{l(!0)},{preventDefault:!0}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:"lg:hidden",onClick:()=>{null==t||t(),l(!0)},"aria-label":"Search docs ...",children:(0,s.jsx)(h.Z,{size:"1.75rem"})}),(0,s.jsxs)("button",{className:"hidden h-8 w-56 cursor-pointer select-none items-center justify-between rounded border border-gray-200/0 bg-gray-200/60 pl-3 pr-2 text-sm text-gray-600 transition-colors hover:border-gray-400 lg:flex",onClick:()=>l(!0),children:["Search docs ...",void 0!==r?(0,s.jsxs)("div",{className:"flex h-5 items-center rounded border border-gray-200 px-1 text-xs text-gray-600",children:[r?"⌘":"Ctrl+","K"]}):void 0]}),(0,s.jsx)(g,{open:a,onClose:()=>{null==t||t(),l(!1)}})]})},f=r(7256),p=r(7042),b=r(8265),v=r(7269),w=r.n(v),j=r(4033),k=r(8391);let y=x()(()=>Promise.all([r.e(930),r.e(552),r.e(292)]).then(r.bind(r,292)).then(e=>e.Root),{loadableGenerated:{webpack:()=>[null]},ssr:!1}),N=x()(()=>Promise.all([r.e(930),r.e(552),r.e(292)]).then(r.bind(r,292)).then(e=>e.Portal),{loadableGenerated:{webpack:()=>[null]},ssr:!1}),S=x()(()=>Promise.all([r.e(930),r.e(552),r.e(292)]).then(r.bind(r,292)).then(e=>e.Content),{loadableGenerated:{webpack:()=>[null]},ssr:!1}),C=x()(()=>Promise.all([r.e(930),r.e(551)]).then(r.bind(r,8551)).then(e=>e.RemoveScroll),{loadableGenerated:{webpack:()=>[8551]},ssr:!1}),ResizeObserver=e=>{let{onResize:t}=e;return(0,n.useEffect)(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[t]),(0,s.jsx)(s.Fragment,{})},Logo=e=>{let{onClick:t}=e;return(0,s.jsxs)(o.Z,{href:"/",className:"flex items-center gap-1 text-xl text-black text-opacity-90 dark:text-white",onClick:()=>null==t?void 0:t(),children:[(0,s.jsx)("img",{src:"".concat("","/images/steep-logo.svg"),className:"h-10 w-fit dark:hidden",width:1706.4,height:532.9,alt:"Logo"}),(0,s.jsx)("img",{src:"".concat("","/images/steep-logo-white.svg"),className:"hidden h-10 w-fit dark:block",width:1706.4,height:532.9,alt:"Logo"})]})};var components_NavBar=e=>{let{fixed:t=!0}=e,r=(0,n.useRef)(-1),[a,d]=(0,n.useState)(!0),[h,u]=(0,n.useState)(!1),[x,m]=(0,n.useState)(!1),[g,v]=(0,n.useState)(!1),[E,z]=(0,n.useState)(!0),{theme:_}=l(),L=(0,j.usePathname)();(0,n.useEffect)(()=>{function onScroll(){let e=window.scrollY-r.current;window.scrollY>100?(e<=-15?(r.current=window.scrollY,m(!0)):e>=15&&(r.current=window.scrollY,m(!1)),d(!1)):window.scrollY>80?e<=-15&&(r.current=window.scrollY,m(!0)):0===window.scrollY&&(r.current=window.scrollY,m(!1),d(!0)),z(window.scrollY<5)}-1===r.current&&(r.current=window.scrollY),onScroll();let e=w()(onScroll,100);return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}},[]),(0,n.useEffect)(()=>{setTimeout(()=>{u(!a)},100)},[a]),(0,n.useEffect)(()=>{v(!1)},[L]);let Z=[{href:"/showcase/",label:"Showcase"},{href:"/docs/",label:"Docs"},{href:"/about/",label:"About"}];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"absolute top-0 h-0",id:"__top-before-navbar"}),(0,s.jsxs)("nav",{className:(0,p.Z)("left-0 right-0 top-0 z-50 flex flex-col",{fixed:t,sticky:!t&&!a,relative:!t,"-translate-y-16":!a&&!t&&!x,"translate-y-0":g||a||!t&&x,"transition-transform":h,"duration-200":h}),children:[(0,s.jsx)("div",{className:(0,p.Z)("top-0 flex h-16 w-full items-center justify-center border-b border-gray-200 transition-all",g?"bg-gray-100":"bg-bg bg-opacity-80 backdrop-blur-sm",g||E||!t&&!x?"border-opacity-0 backdrop-blur-none":"border-opacity-100"),children:(0,s.jsxs)("div",{className:"flex max-w-screen-2xl flex-1 items-center justify-between px-2 sm:px-4 lg:px-6",children:[(0,s.jsxs)("div",{className:"flex flex-1 items-center justify-between lg:hidden",children:[(0,s.jsx)("div",{className:"mb-1",children:(0,s.jsx)(Logo,{onClick:()=>v(!1)})}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsx)(search_QuickSearch,{onClick:()=>v(!1)}),(0,s.jsx)("button",{id:"navbar-toggle-menu-button",className:"inline-flex select-none items-center justify-center text-gray-800",onClick:()=>v(!g),"aria-label":g?"Close menu":"Open menu",children:(0,s.jsx)(b.y,{toggled:g,label:g?"Close menu":"Open menu"})})]})]}),(0,s.jsxs)("div",{className:"hidden flex-1 items-center justify-between gap-8 lg:flex",children:[(0,s.jsx)("div",{className:"mb-1",children:(0,s.jsx)(Logo,{onClick:()=>v(!1)})}),(0,s.jsx)("div",{className:"mt-1 flex gap-6",children:Z.map(e=>(0,s.jsx)(o.Z,{href:e.href,className:"text-gray-600 hover:text-gray-900",children:e.label},e.label))}),(0,s.jsx)("div",{className:"flex-1"}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsx)("div",{className:"border-r border-gray-200 pr-4",children:(0,s.jsx)(search_QuickSearch,{})}),(0,s.jsx)(c.u,{content:"dark"===_?"Light mode":"Dark mode",children:(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)(components_DarkModeToggle,{id:"dark-mode-toggle1"})})}),(0,s.jsx)(c.u,{content:"GitHub",children:(0,s.jsx)(o.Z,{href:"https://github.com/steep-wms/steep",className:"group","aria-label":"GitHub",children:(0,s.jsx)(i.Z,{icon:k.E5W,className:"fill-gray-600 transition-colors group-hover:fill-gray-800",title:""})})})]})]})]})}),(0,s.jsx)(y,{open:g,onOpenChange:v,modal:!1,children:(0,s.jsx)(N,{children:(0,s.jsx)(C,{as:f.g7,children:(0,s.jsxs)(S,{className:"fixed top-16 z-50 h-[calc(100vh-4rem)] w-screen overflow-scroll bg-gray-100 lg:hidden [&[data-state='closed']]:animate-fade-out [&[data-state='open']]:animate-fade-in",onInteractOutside:e=>e.preventDefault(),onCloseAutoFocus:e=>e.preventDefault(),onPointerDownOutside:e=>e.preventDefault(),children:[(0,s.jsx)("div",{className:"flex flex-col divide-y divide-gray-500 px-2",children:Z.map(e=>(0,s.jsx)(o.Z,{href:e.href,className:(0,p.Z)("text-gray-800 hover:text-gray-500","block px-2 py-3"),onClick:()=>v(!1),children:e.label},e.label))}),(0,s.jsxs)("div",{className:"mt-8 flex items-center justify-end gap-4 px-4",children:[(0,s.jsx)(components_DarkModeToggle,{id:"dark-mode-toggle2"}),(0,s.jsx)(o.Z,{href:"https://github.com/steep-wms/steep",className:"group",children:(0,s.jsx)(i.Z,{icon:k.E5W,className:"fill-gray-600 transition-colors group-hover:fill-gray-800"})})]}),(0,s.jsx)(ResizeObserver,{onResize:()=>v(!1)})]})})})})]})]})}},9685:function(e,t,r){var s=r(7437);t.Z=e=>{let{icon:t,color:r="currentColor",size:a=24,title:l=t.title,...n}=e;return(0,s.jsxs)("svg",{role:"img",width:a,height:a,viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...n,children:[(0,s.jsx)("title",{children:l||""}),(0,s.jsx)("path",{d:t.path})]})}},4846:function(e,t,r){r.d(t,{u:function(){return Tooltip}});var s=r(7437),a=r(8567);function Tooltip(e){let{children:t,content:r,open:l,defaultOpen:n,onOpenChange:o,delay:i,...c}=e;return(0,s.jsxs)(a.fC,{open:l,defaultOpen:n,onOpenChange:o,delayDuration:i,children:[(0,s.jsx)(a.xz,{asChild:!0,children:t}),(0,s.jsxs)(a.VY,{side:"top",align:"center",className:"select-none rounded-sm bg-gray-800 px-2 py-1 text-sm text-gray-100 [&[data-state='closed']]:animate-fade-out [&[data-state='delayed-open']]:animate-fade-in",collisionPadding:5,...c,children:[r,(0,s.jsx)(a.Eh,{width:13,height:7,className:"fill-gray-800"})]})]})}},9397:function(e,t,r){r.d(t,{x:function(){return useIsApple}});var s=r(8457),a=r(2265);function useIsApple(){let e=(0,s.F)(),[t,r]=(0,a.useState)(void 0);return(0,a.useEffect)(()=>{void 0!==e&&r(/Mac|iPhone|iPad/i.test(e))},[e]),t}},8457:function(e,t,r){r.d(t,{F:function(){return useUserAgent}});var s=r(2265);function useUserAgent(){let[e,t]=(0,s.useState)(void 0);return(0,s.useEffect)(()=>{t(window.navigator.userAgent)},[]),e}}}]);