(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{5276:function(e,t,r){Promise.resolve().then(r.t.bind(r,6685,23)),Promise.resolve().then(r.t.bind(r,7571,23)),Promise.resolve().then(r.bind(r,501)),Promise.resolve().then(r.bind(r,3739)),Promise.resolve().then(r.bind(r,5990)),Promise.resolve().then(r.t.bind(r,3136,23))},3739:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(7437),a=r(8329),l=r(2777),i=r(2724),s=r(2898);let o=(0,s.Z)("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),c=(0,s.Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);var d=r(7279),u=r(8391),f=e=>{let{imageUrl:t,imageWidth:r,imageHeight:s,name:f,role:p,mail:h,githubUser:_,website:m}=e;return(0,n.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,n.jsx)("img",{src:t,alt:f,width:r,height:s,loading:"lazy",className:"w-36 rounded-full"}),(0,n.jsx)("h4",{className:"mb-2 mt-5 text-xl font-normal",children:f}),(0,n.jsx)(d.SA,{children:p}),(0,n.jsxs)("div",{className:"mt-3 flex gap-3",children:[(0,n.jsx)(i.u,{content:"Email",children:(0,n.jsx)(a.Z,{href:"mailto:".concat(h),children:(0,n.jsx)(c,{className:"transition-colors hover:stroke-gray-600"})})}),void 0!==_?(0,n.jsx)(i.u,{content:"GitHub",children:(0,n.jsx)(a.Z,{href:"https://github.com/".concat(_),children:(0,n.jsx)(l.Z,{icon:u.E5W,className:"transition-colors hover:fill-gray-600",title:""})})}):void 0,void 0!==m?(0,n.jsx)(i.u,{content:"Website",children:(0,n.jsx)(a.Z,{href:m,children:(0,n.jsx)(o,{className:"transition-colors hover:stroke-gray-600"})})}):void 0]})]})}},5990:function(e,t,r){"use strict";r.r(t);var n=r(7437),a=r(8329),l=r(2777),i=r(2724);t.default=e=>{let{icon:t,title:r,href:s}=e;return(0,n.jsx)(i.u,{content:(0,n.jsx)("span",{className:"text-base",children:r}),delay:0,children:(0,n.jsx)(a.Z,{href:s,className:"text-gray-700 transition-colors hover:text-gray-800 group-hover:[&:not(:hover)]:text-opacity-50","aria-label":r,children:(0,n.jsx)(l.Z,{icon:t,size:42,title:""})})})}},3136:function(e){e.exports={style:{fontFamily:"'__Roboto_6f92d8', '__Roboto_Fallback_6f92d8'",fontWeight:700,fontStyle:"normal"},className:"__className_6f92d8",variable:"__variable_6f92d8"}},7571:function(e,t,r){var n=Object.create,a=Object.defineProperty,l=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of i(t))o.call(e,s)||s===r||a(e,s,{get:()=>t[s],enumerable:!(n=l(t,s))||n.enumerable});return e},d=(e,t,r)=>(r=null!=e?n(s(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)),u={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(u,{Balancer:()=>E,Provider:()=>S,default:()=>P}),e.exports=c(a({},"__esModule",{value:!0}),u);var f=d(r(2265)),p=d(r(2265)),h="undefined"==typeof window?p.default.useEffect:p.default.useLayoutEffect,_=0,m=()=>++_,v=!1;function b(){let[e,t]=p.default.useState(v?m:void 0);return h(()=>{void 0===e&&t(m()),v=!0},[]),void 0===e?e:`rwb-${e.toString(32)}`}var x="__wrap_b",y="__wrap_n",g="__wrap_o",w=(e,t,r)=>{let n=(r=r||document.querySelector(`[data-br="${e}"]`)).parentElement,a=e=>r.style.maxWidth=e+"px";r.style.maxWidth="";let l=n.clientWidth,i=n.clientHeight,s=l/2-.25,o=l+.5,c;if(l){for(a(s),s=Math.max(r.scrollWidth,s);s+1<o;)a(c=Math.round((s+o)/2)),n.clientHeight===i?o=c:s=c;a(o*t+l*(1-t))}r.__wrap_o||"undefined"!=typeof ResizeObserver&&(r.__wrap_o=new ResizeObserver(()=>{self.__wrap_b(0,+r.dataset.brr,r)})).observe(n)},j=w.toString(),N=(e,t,r="")=>(r&&(r=`self.${y}!=1&&${r}`),f.default.createElement("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:(e?"":`self.${y}=self.${y}||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);self.${x}=${j};`)+r},nonce:t})),$=f.default.createContext({preferNative:!0,hasProvider:!1}),S=({preferNative:e=!0,nonce:t,children:r})=>{let n=f.default.useMemo(()=>({preferNative:e,hasProvider:!0}),[e]);return f.default.createElement($.Provider,{value:n},N(!1,t),r)},E=({ratio:e=1,preferNative:t,nonce:r,children:n,...a})=>{let l=p.default.useMemo(()=>"useId"in p.default?p.default.useId:b,[])(),i=f.default.useRef(),s=f.default.useContext($),o=null!=t?t:s.preferNative,c=a.as||"span";return h(()=>{o&&1===self[y]||i.current&&(self[x]=w)(0,e,i.current)},[n,o,e]),h(()=>{if(!(o&&1===self[y]))return()=>{if(!i.current)return;let e=i.current[g];e&&(e.disconnect(),delete i.current[g])}},[o]),f.default.createElement(f.default.Fragment,null,f.default.createElement(c,{...a,"data-br":l,"data-brr":e,ref:i,style:{display:"inline-block",verticalAlign:"top",textDecoration:"inherit",textWrap:o?"balance":"initial"},suppressHydrationWarning:!0},n),N(s.hasProvider,r,`self.${x}("${l}",${e})`))},P=E},7279:function(e,t,r){"use strict";r.d(t,{SA:function(){return f}});var n=r(2265),a="undefined"==typeof window?n.useEffect:n.useLayoutEffect,l="__wrap_b",i="__wrap_n",s="__wrap_o",o=(e,t,r)=>{let n=(r=r||document.querySelector(`[data-br="${e}"]`)).parentElement,a=e=>r.style.maxWidth=e+"px";r.style.maxWidth="";let l=n.clientWidth,i=n.clientHeight,s=l/2-.25,o=l+.5,c;if(l){for(a(s),s=Math.max(r.scrollWidth,s);s+1<o;)a(c=Math.round((s+o)/2)),n.clientHeight===i?o=c:s=c;a(o*t+l*(1-t))}r.__wrap_o||"undefined"!=typeof ResizeObserver&&(r.__wrap_o=new ResizeObserver(()=>{self.__wrap_b(0,+r.dataset.brr,r)})).observe(n)},c=o.toString(),d=(e,t,r="")=>(r&&(r=`self.${i}!=1&&${r}`),n.createElement("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:(e?"":`self.${i}=self.${i}||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);self.${l}=${c};`)+r},nonce:t})),u=n.createContext({preferNative:!0,hasProvider:!1}),f=({ratio:e=1,preferNative:t,nonce:r,children:c,...f})=>{let p=n.useMemo(()=>n.useId,[])(),h=n.useRef(),_=n.useContext(u),m=null!=t?t:_.preferNative,v=f.as||"span";return a(()=>{m&&1===self[i]||h.current&&(self[l]=o)(0,e,h.current)},[c,m,e]),a(()=>{if(!(m&&1===self[i]))return()=>{if(!h.current)return;let e=h.current[s];e&&(e.disconnect(),delete h.current[s])}},[m]),n.createElement(n.Fragment,null,n.createElement(v,{...f,"data-br":p,"data-brr":e,ref:h,style:{display:"inline-block",verticalAlign:"top",textDecoration:"inherit",textWrap:m?"balance":"initial"},suppressHydrationWarning:!0},c),d(_.hasProvider,r,`self.${l}("${p}",${e})`))}}},function(e){e.O(0,[68,791,685,904,501,971,596,744],function(){return e(e.s=5276)}),_N_E=e.O()}]);