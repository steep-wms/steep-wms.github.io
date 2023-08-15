(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[294],{2910:function(e,t,r){Promise.resolve().then(r.t.bind(r,6685,23)),Promise.resolve().then(r.bind(r,3383)),Promise.resolve().then(r.bind(r,1224)),Promise.resolve().then(r.bind(r,1587))},3383:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var o=r(7437),n=r(2265),i=r(1688),s=r(3408),l=r(4457),a=e=>{let{languages:t,current:r,onChange:n}=e;return(0,o.jsxs)(i.fC,{value:r,onValueChange:n,children:[(0,o.jsxs)(i.xz,{"aria-label":"Language",className:"flex h-full items-center justify-center gap-[.1em] rounded-sm px-2 py-1 outline-none hover:bg-gray-700 dark:hover:bg-gray-200",children:[(0,o.jsx)("div",{className:"uppercase",children:(0,o.jsx)(i.B4,{})}),(0,o.jsx)(i.JO,{children:(0,o.jsx)("div",{className:"flex",children:(0,o.jsx)(l.Z,{size:"1.2em"})})})]}),(0,o.jsx)(i.h_,{children:(0,o.jsx)(i.VY,{className:"rounded bg-bg-secondary p-1 text-sm text-text drop-shadow-lg",children:(0,o.jsx)(i.l_,{children:t.map(e=>(0,o.jsxs)(i.ck,{value:e,className:"relative select-none rounded-sm py-1 pl-5 uppercase data-[highlighted]:bg-gray-700 data-[highlighted]:text-code-container-header data-[highlighted]:outline-none dark:data-[highlighted]:bg-gray-200",children:[(0,o.jsx)(i.eT,{children:e}),(0,o.jsx)(i.wU,{className:"absolute left-0 inline-flex h-5 w-5 select-none items-center justify-center",children:(0,o.jsx)(s.Z,{size:".9em"})})]},e))})})})]})},d=r(1869),c=r(2724),u=r(4660),f=r(4810),h=r(7173);let k=(0,u.Ue)()((0,f.tJ)(e=>({preferredLanguages:{},setPreferredLanguage:(t,r)=>e((0,h.Uy)(e=>{e.preferredLanguages[t]=r}))}),{name:"steep-preferred-language"}));var p=r(1224);let m="Copy to clipboard";var v=e=>{let t,{title:r,children:i}=e,s=(0,n.useRef)(null),[l,u]=(0,n.useState)(!1),[f,h]=(0,n.useState)(m),{languages:v,pages:y,unrecognizedChildren:g}=(0,n.useMemo)(()=>{let e=[],t=[];!function e(t,r){n.Children.forEach(t,t=>{(0,n.isValidElement)(t)&&("pre"===t.type?r.push(t):e(t.props.children,r))})}(i,t);let r={},s=[];for(let n of t){var l;let t=null===(l=n.props)||void 0===l?void 0:l["data-language"];if(void 0===t){s.push(n);continue}e.push(t),r[t]=(0,o.jsx)("div",{"data-rehype-pretty-code-fragment":!0,children:(0,o.jsx)(p.default,{nonAppleType:"always",forceDark:!0,children:n})},"page-".concat(t))}return{languages:e,pages:r,unrecognizedChildren:s}},[i]),x=((t=[...v]).sort(),t.join("-")),w=k(e=>e.preferredLanguages[x]),j=k(e=>t=>e.setPreferredLanguage(x,t)),[b,z]=(0,n.useState)(v[0]);return(0,n.useEffect)(()=>{v.length>0&&void 0!==w&&v.includes(w)&&z(w)},[w,v]),(0,o.jsxs)(o.Fragment,{children:[v.length>0?(0,o.jsxs)("div",{className:"my-5 rounded-md bg-bg-code text-code-container-header",children:[(0,o.jsxs)("div",{className:"flex justify-between gap-2 border-b border-gray-600 px-4 py-1 text-sm dark:border-gray-300",children:[(0,o.jsx)("div",{className:"py-1",children:r}),(0,o.jsxs)("div",{className:"flex items-center gap-2",children:[v.length>1?(0,o.jsx)(a,{languages:v,current:b,onChange:function(e){z(e),j(e)}}):(0,o.jsx)("div",{className:"mr-2 uppercase opacity-60",children:v[0]}),(0,o.jsx)(c.u,{content:f,open:l,onOpenChange:function(e){e&&h(m),u(e)},children:(0,o.jsxs)("div",{className:"flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm hover:bg-gray-700 dark:hover:bg-gray-200",onClick:()=>(function(){if(null===s.current)return;let e=s.current.innerText;navigator.clipboard.writeText(e).then(()=>{u(!0),h("Copied!")})})(),children:[(0,o.jsx)(d.Z,{size:"1em"}),"​"]})})]})]}),(0,o.jsx)("div",{ref:s,children:y[b]})]}):void 0,g]})}},1224:function(e,t,r){"use strict";r.r(t);var o=r(7437),n=r(5331),i=r(2265),s=r(7042),l=r(9132);let a=e=>{let{orientation:t,type:r,forceDark:i}=e;return(0,o.jsx)(n.LW,{orientation:t,className:(0,s.Z)("flex select-none touch-none p-0.5 [transition:opacity_160ms_ease-out,width_.25s_ease-in-out,height_.25s_ease-in-out] data-[orientation=vertical]:w-[0.6rem] hover:data-[orientation=vertical]:w-[0.8rem] data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[0.6rem] hover:data-[orientation=horizontal]:h-[0.8rem]",{dark:i,"opacity-0 data-[state=visible]:opacity-60":"always"!==r,"opacity-60":"always"===r}),forceMount:!0,"aria-hidden":!0,children:(0,o.jsx)(n.bU,{className:"flex-1 bg-gray-800 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]"})})},d=(0,i.forwardRef)((e,t)=>{let{className:r,orientation:i="both",nonAppleType:d="hover",forceDark:c=!1,children:u}=e,f=(0,l.x)(),h=void 0===f||!1===f?d:"scroll";return(0,o.jsxs)(n.fC,{className:(0,s.Z)("overflow-hidden",r),scrollHideDelay:void 0===f||!1===f?"scroll"===d?void 0:0:void 0,type:h,children:[(0,o.jsx)(n.l_,{className:"w-full h-full",ref:t,children:u}),"horizontal"!==i?(0,o.jsx)(a,{orientation:"vertical",type:h,forceDark:c}):void 0,"vertical"!==i?(0,o.jsx)(a,{orientation:"horizontal",type:h,forceDark:c}):void 0]})});t.default=d},2724:function(e,t,r){"use strict";r.d(t,{u:function(){return i}});var o=r(7437),n=r(8567);function i(e){let{children:t,content:r,open:i,defaultOpen:s,onOpenChange:l,delay:a,...d}=e;return(0,o.jsxs)(n.fC,{open:i,defaultOpen:s,onOpenChange:l,delayDuration:a,children:[(0,o.jsx)(n.xz,{asChild:!0,children:t}),(0,o.jsxs)(n.VY,{side:"top",align:"center",className:"select-none rounded-sm bg-gray-800 px-2 py-1 text-sm text-gray-100 [&[data-state='closed']]:animate-fade-out [&[data-state='delayed-open']]:animate-fade-in",collisionPadding:5,...d,children:[r,(0,o.jsx)(n.Eh,{width:13,height:7,className:"fill-gray-800"})]})]})}},1587:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var o=r(7437),n=r(2265),i=r(2393),s=r(7042),l=e=>{let{animated:t=!1}=e,[r,l]=(0,i.H)();return(0,n.useEffect)(()=>{l(".docs-image-generate-process-chains-box1",{opacity:0},{duration:0}),l(".docs-image-generate-process-chains-box2",{opacity:0},{duration:0}),l(".docs-image-generate-process-chains-box3",{opacity:0},{duration:0}),l(".docs-image-generate-process-chains-box4",{opacity:0},{duration:0}),t&&l([[".docs-image-generate-process-chains-box1",{opacity:1},{at:1}],[".docs-image-generate-process-chains-box2",{opacity:1},{at:2}],[".docs-image-generate-process-chains-box3",{opacity:1},{at:2}],[".docs-image-generate-process-chains-box4",{opacity:1},{at:3}],[".docs-image-generate-process-chains-box1",{opacity:0},{at:4.5}],[".docs-image-generate-process-chains-box2",{opacity:0},{at:4.5}],[".docs-image-generate-process-chains-box3",{opacity:0},{at:4.5}],[".docs-image-generate-process-chains-box4",{opacity:0},{at:4.5}]],{repeat:1/0})},[t,l]),(0,o.jsxs)("div",{className:(0,s.Z)("mx-auto my-10 max-w-[10rem]",{"[&_.docs-image-generate-process-chains-box1]:hidden [&_.docs-image-generate-process-chains-box2]:hidden [&_.docs-image-generate-process-chains-box3]:hidden [&_.docs-image-generate-process-chains-box4]:hidden":!t}),ref:r,children:[(0,o.jsx)("div",{className:"dark:hidden",dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.7 278.9" style="enable-background:new 0 0 101.7 278.9" xml:space="preserve"><path style="fill:none;stroke:#000;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M33.5 26.7h34V55h-34z"/><text transform="translate(47.5 41.82)" style="font-size:9.775px;font-weight:400">A</text><path style="fill:none;stroke:#000;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M20 100.4h24.1v22.7H20z"/><text transform="translate(28.9 115.05)" style="font-size:9.775px;font-weight:400">B</text><path style="fill:none;stroke:#000;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M57.6 100.4h24.1v22.7H57.6z"/><text transform="translate(66.525 115.05)" style="font-size:9.775px;font-weight:400">D</text><path style="fill:none;stroke:#000;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M33.5 225.1h34v28.1h-34z"/><text transform="translate(47.5 245.85)" style="font-size:9.775px;font-weight:400">E</text><path d="M50.5 276.3c3.1 0 5.7-2.5 5.7-5.7 0-3.1-2.5-5.7-5.7-5.7s-5.7 2.6-5.7 5.7 2.6 5.7 5.7 5.7z" style="fill:none;stroke:#000;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path style="fill:none;stroke:#000;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M50.5 253.3v6.7"/><path d="m50.5 264.9-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd"/><circle cx="32" cy="140.1" r="5.7" style="fill:none;stroke:#000;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path style="fill:none;stroke:#000;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M32 123.1v6.4"/><path d="m32 134.4-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd"/><path d="M69.6 71.6V71c0-3-2.5-5.5-5.5-5.5h-2.7c-2.9 0-5.3-2.4-5.3-5.3v-5.3" style="fill:none;stroke:#000;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path d="M69.6 76.5 66.4 70c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd"/><path d="M32.1 71.6v-.5c0-3 2.4-5.4 5.4-5.4h2c3 0 5.4-2.4 5.4-5.4v-5.4" style="fill:none;stroke:#000;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path d="m32.1 76.5-3.3-6.4c2 1 4.4 1 6.5 0l-3.2 6.4z" style="fill-rule:evenodd;clip-rule:evenodd"/><path d="M56.2 220v-1.3c0-3.5 2.8-6.3 6.3-6.3 4 0 7.2-3.2 7.2-7.2v-59.4" style="fill:none;stroke:#000;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path d="m56.2 224.9-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd"/><path d="M44.8 220v-1.5c0-3.5-2.9-6.4-6.4-6.4h-1.6c-2.7 0-4.8-2.2-4.8-4.8v-4.8" style="fill:none;stroke:#000;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path d="m44.8 224.9-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd"/><path d="M50.6 4c-3.1 0-5.7 2.5-5.7 5.7 0 3.1 2.5 5.7 5.7 5.7 3.1 0 5.7-2.5 5.7-5.7 0-3.1-2.5-5.7-5.7-5.7z" style="fill:none;stroke:#000;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path d="M50.6 7.1c-1.4 0-2.6 1.1-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6 1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6z" style="fill-rule:evenodd;clip-rule:evenodd"/><path d="M50.6 7.1c-1.4 0-2.6 1.1-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6 1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6zm0 14.7v-6.4" style="fill:none;stroke:#000;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path d="m50.6 26.7-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd"/><circle cx="69.6" cy="140.1" r="5.7" style="fill:none;stroke:#000;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path style="fill:none;stroke:#000;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M69.6 123.1v6.4"/><path d="m69.6 134.4-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd"/><circle cx="32.1" cy="82.2" r="5.7" style="fill:none;stroke:#000;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path style="fill:none;stroke:#000;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M32.1 95.5v-7.6"/><path d="m32.1 100.4-3.3-6.5c2 1 4.4 1 6.5 0l-3.2 6.5z" style="fill-rule:evenodd;clip-rule:evenodd"/><circle cx="69.6" cy="82.2" r="5.7" style="fill:none;stroke:#000;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path style="fill:none;stroke:#000;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M69.6 95.5v-7.6"/><path d="m69.6 100.4-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd"/><path style="fill:none;stroke:#000;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="m67.5 224.9-17 5.4-17-5.4zm-34 5.9h34m-34-176 17-5.4 17 5.4zm34-5.8h-34"/><path style="fill:none;stroke:#000;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M20 157.1h24.1v22.7H20z"/><text transform="translate(28.625 171.9)" style="font-size:9.775px;font-weight:400">C</text><path style="fill:none;stroke:#000;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M32 152.2v-6.4"/><path d="m32 157.1-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5zm0 34-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd"/><path style="fill:none;stroke:#000;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M32 179.8v6.4"/><path d="M32 202.5c3.1 0 5.7-2.5 5.7-5.7s-2.5-5.7-5.7-5.7c-3.1 0-5.7 2.5-5.7 5.7s2.6 5.7 5.7 5.7z" style="fill:none;stroke:#000;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path class="docs-image-generate-process-chains-box1" d="M11 90.8h79.7c5.5 0 10-3.5 10-7.8V8.8c0-4.3-4.5-7.8-10-7.8H11C5.5 1 1 4.5 1 8.8v74.1c0 4.4 4.5 7.9 10 7.9z" style="fill:none;stroke:#d31216;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:7.9123,5.6516"/><path class="docs-image-generate-process-chains-box2" d="M18.1 205.7h27.2c1.9 0 3.4-1.5 3.4-3.4V70.8c0-1.9-1.5-3.4-3.4-3.4H18.1c-1.9 0-3.4 1.5-3.4 3.4v131.6c0 1.8 1.5 3.3 3.4 3.3z" style="fill:none;stroke:#4c5aa4;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:7,5"/><path class="docs-image-generate-process-chains-box3" d="M55.3 149.6h27.2c1.9 0 3.4-1.5 3.4-3.4V70.8c0-1.9-1.5-3.4-3.4-3.4H55.3c-1.9 0-3.4 1.5-3.4 3.4v75.4c0 1.9 1.5 3.4 3.4 3.4z" style="fill:none;stroke:#4c5aa4;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:7,5"/><path class="docs-image-generate-process-chains-box4" d="M91.2 125.4H59.9c-5.2 0-9.4 4.2-9.4 9.4v38.7c0 5.2-4.2 9.4-9.4 9.4H10.4c-5.2 0-9.4 4.2-9.4 9.4v76.2c0 5.2 4.2 9.4 9.4 9.4h80.8c5.2 0 9.4-4.2 9.4-9.4V134.8c0-5.2-4.2-9.4-9.4-9.4z" style="fill:none;stroke:#1ca538;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:7.9123,5.6516"/></svg>'}}),(0,o.jsx)("div",{className:"hidden dark:block",dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.7 278.9" style="enable-background:new 0 0 101.7 278.9" xml:space="preserve"><path style="fill:none;stroke:#fff;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M33.5 26.7h34V55h-34z"/><text transform="translate(47.5 41.82)" style="font-size:9.775px;font-weight:400;fill:#fff">A</text><path style="fill:none;stroke:#fff;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M20 100.4h24.1v22.7H20z"/><text transform="translate(28.9 115.05)" style="font-size:9.775px;font-weight:400;fill:#fff">B</text><path style="fill:none;stroke:#fff;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M57.6 100.4h24.1v22.7H57.6z"/><text transform="translate(66.525 115.05)" style="font-size:9.775px;font-weight:400;fill:#fff">D</text><path style="fill:none;stroke:#fff;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M33.5 225.1h34v28.1h-34z"/><text transform="translate(47.5 245.85)" style="font-size:9.775px;font-weight:400;fill:#fff">E</text><path d="M50.5 276.3c3.1 0 5.7-2.5 5.7-5.7 0-3.1-2.5-5.7-5.7-5.7s-5.7 2.6-5.7 5.7 2.6 5.7 5.7 5.7z" style="fill:none;stroke:#fff;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path style="fill:none;stroke:#fff;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M50.5 253.3v6.7"/><path d="m50.5 264.9-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/><circle cx="32" cy="140.1" r="5.7" style="fill:none;stroke:#fff;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path style="fill:none;stroke:#fff;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M32 123.1v6.4"/><path d="m32 134.4-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/><path d="M69.6 71.6V71c0-3-2.5-5.5-5.5-5.5h-2.7c-2.9 0-5.3-2.4-5.3-5.3v-5.3" style="fill:none;stroke:#fff;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path d="M69.6 76.5 66.4 70c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/><path d="M32.1 71.6v-.5c0-3 2.4-5.4 5.4-5.4h2c3 0 5.4-2.4 5.4-5.4v-5.4" style="fill:none;stroke:#fff;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path d="m32.1 76.5-3.3-6.4c2 1 4.4 1 6.5 0l-3.2 6.4z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/><path d="M56.2 220v-1.3c0-3.5 2.8-6.3 6.3-6.3 4 0 7.2-3.2 7.2-7.2v-59.4" style="fill:none;stroke:#fff;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path d="m56.2 224.9-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/><path d="M44.8 220v-1.5c0-3.5-2.9-6.4-6.4-6.4h-1.6c-2.7 0-4.8-2.2-4.8-4.8v-4.8" style="fill:none;stroke:#fff;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path d="m44.8 224.9-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/><path d="M50.6 4c-3.1 0-5.7 2.5-5.7 5.7 0 3.1 2.5 5.7 5.7 5.7 3.1 0 5.7-2.5 5.7-5.7 0-3.1-2.5-5.7-5.7-5.7z" style="fill:none;stroke:#fff;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path d="M50.6 7.1c-1.4 0-2.6 1.1-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6 1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/><path d="M50.6 7.1c-1.4 0-2.6 1.1-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6 1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6zm0 14.7v-6.4" style="fill:none;stroke:#fff;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path d="m50.6 26.7-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/><circle cx="69.6" cy="140.1" r="5.7" style="fill:none;stroke:#fff;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path style="fill:none;stroke:#fff;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M69.6 123.1v6.4"/><path d="m69.6 134.4-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/><circle cx="32.1" cy="82.2" r="5.7" style="fill:none;stroke:#fff;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path style="fill:none;stroke:#fff;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M32.1 95.5v-7.6"/><path d="m32.1 100.4-3.3-6.5c2 1 4.4 1 6.5 0l-3.2 6.5z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/><circle cx="69.6" cy="82.2" r="5.7" style="fill:none;stroke:#fff;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path style="fill:none;stroke:#fff;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M69.6 95.5v-7.6"/><path d="m69.6 100.4-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/><path style="fill:none;stroke:#fff;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="m67.5 224.9-17 5.4-17-5.4zm-34 5.9h34m-34-176 17-5.4 17 5.4zm34-5.8h-34"/><path style="fill:none;stroke:#fff;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M20 157.1h24.1v22.7H20z"/><text transform="translate(28.625 171.9)" style="font-size:9.775px;font-weight:400;fill:#fff">C</text><path style="fill:none;stroke:#fff;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M32 152.2v-6.4"/><path d="m32 157.1-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5zm0 34-3.2-6.5c2 1 4.4 1 6.5 0l-3.3 6.5z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/><path style="fill:none;stroke:#fff;stroke-width:.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M32 179.8v6.4"/><path d="M32 202.5c3.1 0 5.7-2.5 5.7-5.7s-2.5-5.7-5.7-5.7c-3.1 0-5.7 2.5-5.7 5.7s2.6 5.7 5.7 5.7z" style="fill:none;stroke:#fff;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path class="docs-image-generate-process-chains-box1" d="M11 90.8h79.7c5.5 0 10-3.5 10-7.8V8.8c0-4.3-4.5-7.8-10-7.8H11C5.5 1 1 4.5 1 8.8v74.1c0 4.4 4.5 7.9 10 7.9z" style="fill:none;stroke:#d31216;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:7.9123,5.6516"/><path class="docs-image-generate-process-chains-box2" d="M18.1 205.7h27.2c1.9 0 3.4-1.5 3.4-3.4V70.8c0-1.9-1.5-3.4-3.4-3.4H18.1c-1.9 0-3.4 1.5-3.4 3.4v131.6c0 1.8 1.5 3.3 3.4 3.3z" style="fill:none;stroke:#4c5aa4;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:7,5"/><path class="docs-image-generate-process-chains-box3" d="M55.3 149.6h27.2c1.9 0 3.4-1.5 3.4-3.4V70.8c0-1.9-1.5-3.4-3.4-3.4H55.3c-1.9 0-3.4 1.5-3.4 3.4v75.4c0 1.9 1.5 3.4 3.4 3.4z" style="fill:none;stroke:#4c5aa4;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:7,5"/><path class="docs-image-generate-process-chains-box4" d="M91.2 125.4H59.9c-5.2 0-9.4 4.2-9.4 9.4v38.7c0 5.2-4.2 9.4-9.4 9.4H10.4c-5.2 0-9.4 4.2-9.4 9.4v76.2c0 5.2 4.2 9.4 9.4 9.4h80.8c5.2 0 9.4-4.2 9.4-9.4V134.8c0-5.2-4.2-9.4-9.4-9.4z" style="fill:none;stroke:#1ca538;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:7.9123,5.6516"/></svg>'}})]})}},9132:function(e,t,r){"use strict";r.d(t,{x:function(){return i}});var o=r(2265),n=r(3799);function i(){let e=(0,n.F)(),[t,r]=(0,o.useState)(void 0);return(0,o.useEffect)(()=>{void 0!==e&&r(/Mac|iPhone|iPad/i.test(e))},[e]),t}},3799:function(e,t,r){"use strict";r.d(t,{F:function(){return n}});var o=r(2265);function n(){let[e,t]=(0,o.useState)(void 0);return(0,o.useEffect)(()=>{t(window.navigator.userAgent)},[]),e}},1853:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=r(2265),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=o.useState,s=o.useEffect,l=o.useLayoutEffect,a=o.useDebugValue;function d(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!n(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),o=i({inst:{value:r,getSnapshot:t}}),n=o[0].inst,c=o[1];return l(function(){n.value=r,n.getSnapshot=t,d(n)&&c({inst:n})},[e,r,t]),s(function(){return d(n)&&c({inst:n}),e(function(){d(n)&&c({inst:n})})},[e]),a(r),r};t.useSyncExternalStore=void 0!==o.useSyncExternalStore?o.useSyncExternalStore:c},8704:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=r(2265),n=r(6272),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=n.useSyncExternalStore,l=o.useRef,a=o.useEffect,d=o.useMemo,c=o.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,o,n){var u=l(null);if(null===u.current){var f={hasValue:!1,value:null};u.current=f}else f=u.current;u=d(function(){function e(e){if(!a){if(a=!0,s=e,e=o(e),void 0!==n&&f.hasValue){var t=f.value;if(n(t,e))return l=t}return l=e}if(t=l,i(s,e))return t;var r=o(e);return void 0!==n&&n(t,r)?t:(s=e,l=r)}var s,l,a=!1,d=void 0===r?null:r;return[function(){return e(t())},null===d?void 0:function(){return e(d())}]},[t,r,o,n]);var h=s(e,u[0],u[1]);return a(function(){f.hasValue=!0,f.value=h},[h]),c(h),h}},6272:function(e,t,r){"use strict";e.exports=r(1853)},5401:function(e,t,r){"use strict";e.exports=r(8704)},7042:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o);else for(r in t)t[r]&&(n&&(n+=" "),n+=r)}return n}(e))&&(o&&(o+=" "),o+=t);return o}},7865:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var o=r(2265),n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var s=(e,t)=>{let r=(0,o.forwardRef)(({color:r="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:a,children:d,...c},u)=>(0,o.createElement)("svg",{ref:u,...n,width:s,height:s,stroke:r,strokeWidth:a?24*Number(l)/Number(s):l,className:`lucide lucide-${i(e)}`,...c},[...t.map(([e,t])=>(0,o.createElement)(e,t)),...(Array.isArray(d)?d:[d])||[]]));return r.displayName=`${e}`,r}},4660:function(e,t,r){"use strict";r.d(t,{Ue:function(){return c}});let o=e=>{let t;let r=new Set,o=(e,o)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=o?o:"object"!=typeof n)?n:Object.assign({},t,n),r.forEach(r=>r(t,e))}},n=()=>t,i={setState:o,getState:n,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(o,n,i),i},n=e=>e?o(e):o;var i=r(2265),s=r(5401);let{useSyncExternalStoreWithSelector:l}=s,a=!1,d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?n(e):e,r=(e,r)=>(function(e,t=e.getState,r){r&&!a&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),a=!0);let o=l(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return(0,i.useDebugValue)(o),o})(t,e,r);return Object.assign(r,t),r},c=e=>e?d(e):d}},function(e){e.O(0,[791,685,930,552,331,465,971,596,744],function(){return e(e.s=2910)}),_N_E=e.O()}]);