(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{AduJ:function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=r("q1tI"),o=r.n(a),i=r("9mAs"),c=o.a.createElement;function l(e,t){for(;e.length>t+1;){var r=e.pop(),a=e.length;a>0&&(e[a-1]=o.a.cloneElement(e[a-1],{children:[].concat(n(e[a-1].props.children||[]),[r])}))}}t.a=function(e){var t=e.children,r=[],a=[],s=t.map((function(e){var t=-1;if("h3"===e.props.mdxType?t=0:"h4"===e.props.mdxType?t=1:"h5"===e.props.mdxType&&(t=2),t>=0){for(;a.length<=t;)a.push(0);a[t]++,a.splice(t+1);var s=e.props.children,p=a.join(".")+"\u2002"+s;for(e=o.a.cloneElement(e,{children:p,key:e.props.id});r.length<=t;)r.push(c("ol",{key:"toc-list-".concat(e.props.id)}));l(r,t);var u=c("li",{key:"toc-item-".concat(e.props.id)},c(i.a,{href:"#"+e.props.id},s)),f=r.length;r[f-1]=o.a.cloneElement(r[f-1],{children:[].concat(n(r[f-1].props.children||[]),[u])})}return e}));return l(r,0),s=s.map((function(e){return"div"===e.props.mdxType&&"table-of-contents"===e.props.className&&(e=o.a.cloneElement(e,{children:r[0],key:"table-of-contents"})),e})),c("section",{className:"docs"},s)}},MuE9:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("xEgi")}])},Sp2p:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("TSYQ"),i=r.n(o),c=r("wrRx"),l=r("lNPj"),s=r("envo"),p=(r("wL3L"),a.a.createElement);function u(e,t){a.a.Children.forEach(e,(function(e){return function(e,t){"pre"===e.props.mdxType?t.push(e):u(e.props.children,t)}(e,t)}))}t.a=function(e){var t=e.children,r=a.a.useContext(l.a.Dispatch),n=a.a.useContext(s.a.Dispatch),o=a.a.useContext(s.a.State),f=a.a.useRef(),h=[];u(t,h);var m=[],d=[];return h.forEach((function(e,t){var l,s=(l=e,a.a.Children.toArray(l.props.children)[0].props.className.match(/language-(.+)/)[1]),u={active:o===s},h=i()("code-example-title",u),b=p("div",{className:h,onClick:function(){return function(e){if(o!==e){var t=f.current.offsetTop-Object(c.a)(),a=new MutationObserver((function(e){document.body.scrollTop=document.documentElement.scrollTop=f.current.offsetTop-t;var n=!0,o=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){c.value.target.parentNode===f.current&&(a.disconnect(),r(!1))}}catch(s){o=!0,i=s}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}}));a.observe(document,{attributes:!0,attributeFilter:["class"],subtree:!0}),r(!0),n(e)}}(s)},key:"title-".concat(s)},s.toUpperCase());m.push(b);var y=i()("code-example-page",u),g=p("div",{className:y,key:"page-".concat(s)},e);d.push(g)})),p("div",{className:"code-example",ref:f},m,d)}},envo:function(e,t,r){"use strict";var n=r("ODXe"),a=r("q1tI"),o=r.n(a),i=o.a.createElement,c=o.a.createContext(),l=o.a.createContext(),s=function(e,t){return t};t.a={State:c,Dispatch:l,Provider:function(e){var t=e.children,r=o.a.useReducer(s,"json"),a=Object(n.a)(r,2),p=a[0],u=a[1];return i(c.Provider,{value:p},i(l.Provider,{value:u},t))}}},l4zb:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=o(r("q1tI")),a=o(r("17x9"));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c=function(e){var t=e.color,r=e.size,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["color","size"]);return n.default.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:t,viewBox:"0 0 24 24"},a),n.default.createElement("path",{d:"M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"}))};c.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},c.defaultProps={color:"currentColor",size:"24"};var l=c;t.default=l},xEgi:function(e,t,r){"use strict";r.r(t),r.d(t,"meta",(function(){return Ke})),r.d(t,"default",(function(){return Qe}));var n=r("wx14"),a=r("Ff2n"),o=r("q1tI"),i=r.n(o),c=r("7ljp"),l=r("Cgje"),s=r("naWs"),p=i.a.createElement,u=function(e){return p("main",null,p(l.a,{title:e.meta.title}),e.children,p(s.a,null))},f=(r("MRKW"),r("17x9")),h=r.n(f);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=function(e){var t=e.color,r=e.size,n=d(e,["color","size"]);return i.a.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),i.a.createElement("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),i.a.createElement("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}))};b.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},b.defaultProps={color:"currentColor",size:"24"};var y=b,g=r("9mAs"),O=i.a.createElement,v=function(){return O("div",{id:"welcome",className:"welcome"},O("div",{className:"container"},O("div",{className:"welcome-row"},O("div",{className:"welcome-left"},O("div",{className:"slogan"},"Steep is a Scientific Workflow Management System made for the Cloud"),O("div",{className:"buttons"},O(g.a,{href:"/#download-and-get-started",className:"btn btn-primary"},O(y,{className:"feather"})," Get started ..."))),O("div",{className:"welcome-right"},O("img",{src:"/images/workflow.svg"})))))},w=(r("7KLz"),i.a.createElement),j=function(e){var t=e.icon,r=e.title,n=e.children;return w("div",{className:"feature"},w("h6",null,w("span",{className:"feature-icon"},t)," ",r),n)},x=(r("OexR"),i.a.createElement),k=function(e){var t=e.children,r=e.title;return x("div",{id:"features",className:"container"},x("h2",{id:"key-features"},r),x("div",{className:"features-grid"},t))};function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var P=function(e){var t=e.color,r=e.size,n=T(e,["color","size"]);return i.a.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),i.a.createElement("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}))};P.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},P.defaultProps={color:"currentColor",size:"24"};var S=P;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var C=function(e){var t=e.color,r=e.size,n=N(e,["color","size"]);return i.a.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),i.a.createElement("polyline",{points:"23 4 23 10 17 10"}),i.a.createElement("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}))};C.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},C.defaultProps={color:"currentColor",size:"24"};var I=C;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var D=function(e){var t=e.color,r=e.size,n=M(e,["color","size"]);return i.a.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),i.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),i.a.createElement("polyline",{points:"12 6 12 12 16 14"}))};D.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},D.defaultProps={color:"currentColor",size:"24"};var A=D;function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var W=function(e){var t=e.color,r=e.size,n=F(e,["color","size"]);return i.a.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),i.a.createElement("polyline",{points:"17 1 21 5 17 9"}),i.a.createElement("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),i.a.createElement("polyline",{points:"7 23 3 19 7 15"}),i.a.createElement("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"}))};W.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},W.defaultProps={color:"currentColor",size:"24"};var R=W;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var X=function(e){var t=e.color,r=e.size,n=G(e,["color","size"]);return i.a.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),i.a.createElement("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}),i.a.createElement("rect",{x:"9",y:"9",width:"6",height:"6"}),i.a.createElement("line",{x1:"9",y1:"1",x2:"9",y2:"4"}),i.a.createElement("line",{x1:"15",y1:"1",x2:"15",y2:"4"}),i.a.createElement("line",{x1:"9",y1:"20",x2:"9",y2:"23"}),i.a.createElement("line",{x1:"15",y1:"20",x2:"15",y2:"23"}),i.a.createElement("line",{x1:"20",y1:"9",x2:"23",y2:"9"}),i.a.createElement("line",{x1:"20",y1:"14",x2:"23",y2:"14"}),i.a.createElement("line",{x1:"1",y1:"9",x2:"4",y2:"9"}),i.a.createElement("line",{x1:"1",y1:"14",x2:"4",y2:"14"}))};X.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},X.defaultProps={color:"currentColor",size:"24"};var _=X;function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var q=function(e){var t=e.color,r=e.size,n=K(e,["color","size"]);return i.a.createElement("svg",V({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),i.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),i.a.createElement("circle",{cx:"12",cy:"12",r:"6"}),i.a.createElement("circle",{cx:"12",cy:"12",r:"2"}))};q.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},q.defaultProps={color:"currentColor",size:"24"};var J=q;function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var Y=function(e){var t=e.color,r=e.size,n=U(e,["color","size"]);return i.a.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),i.a.createElement("line",{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"}),i.a.createElement("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),i.a.createElement("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),i.a.createElement("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"}))};Y.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},Y.defaultProps={color:"currentColor",size:"24"};var Z=Y;function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var te=function(e){var t=e.color,r=e.size,n=ee(e,["color","size"]);return i.a.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),i.a.createElement("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),i.a.createElement("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),i.a.createElement("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}))};te.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},te.defaultProps={color:"currentColor",size:"24"};var re=te;function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var oe=function(e){var t=e.color,r=e.size,n=ae(e,["color","size"]);return i.a.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),i.a.createElement("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),i.a.createElement("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),i.a.createElement("line",{x1:"12",y1:"17",x2:"12",y2:"21"}))};oe.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},oe.defaultProps={color:"currentColor",size:"24"};var ie=oe;function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var se=function(e){var t=e.color,r=e.size,n=le(e,["color","size"]);return i.a.createElement("svg",ce({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),i.a.createElement("rect",{x:"3",y:"3",width:"7",height:"7"}),i.a.createElement("rect",{x:"14",y:"3",width:"7",height:"7"}),i.a.createElement("rect",{x:"14",y:"14",width:"7",height:"7"}),i.a.createElement("rect",{x:"3",y:"14",width:"7",height:"7"}))};se.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},se.defaultProps={color:"currentColor",size:"24"};var pe=se;function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var he=function(e){var t=e.color,r=e.size,n=fe(e,["color","size"]);return i.a.createElement("svg",ue({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),i.a.createElement("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"}),i.a.createElement("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"}),i.a.createElement("line",{x1:"6",y1:"6",x2:"6",y2:"6"}),i.a.createElement("line",{x1:"6",y1:"18",x2:"6",y2:"18"}))};he.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},he.defaultProps={color:"currentColor",size:"24"};var me=he;function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function be(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var ye=function(e){var t=e.color,r=e.size,n=be(e,["color","size"]);return i.a.createElement("svg",de({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),i.a.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),i.a.createElement("polyline",{points:"17 6 23 6 23 12"}))};ye.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},ye.defaultProps={color:"currentColor",size:"24"};var ge=ye;function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var we=function(e){var t=e.color,r=e.size,n=ve(e,["color","size"]);return i.a.createElement("svg",Oe({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),i.a.createElement("rect",{x:"1",y:"3",width:"15",height:"13"}),i.a.createElement("polygon",{points:"16 8 20 8 23 11 23 16 16 16 16 8"}),i.a.createElement("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),i.a.createElement("circle",{cx:"18.5",cy:"18.5",r:"2.5"}))};we.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},we.defaultProps={color:"currentColor",size:"24"};var je=we,xe=r("NZY8"),ke=(i.a.createElement,{}),Ee="wrapper";function Te(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.a)(Ee,Object(n.a)({},ke,r,{components:t,mdxType:"MDXLayout"}),Object(c.a)(k,{title:"Key features",mdxType:"Features"},Object(c.a)(j,{icon:Object(c.a)(S,null),title:"Distributed",mdxType:"Feature"},Object(c.a)("p",null,"Dy\xadnam\xadic and s\xadcal\xadable ex\xade\xadcu\xadtion of data-\u200bdriven work\xadflows in a dis\xadtrib\xaduted\nen\xadvi\xadron\xadmen\xadt such as the Cloud.")),Object(c.a)(j,{icon:Object(c.a)(I,null),title:"Cyclic workflow graphs",mdxType:"Feature"},Object(c.a)("p",null,"Sup\xadport\xad for cyclic work\xadflow graph\xads with\xadout a pri\xador\xadi run\xadtime knowl\xadedge.\nWork\xadflows are con\xadvert\xaded in\xadcre\xadmen\xadtal\xadly and on-\u200bdemand to so-\u200bcalled process\nchains.")),Object(c.a)(j,{icon:Object(c.a)(A,null),title:"Capability-based scheduling",mdxType:"Feature"},Object(c.a)("p",null,"Op\xadti\xadmized, capability-\u200bbased process chain sched\xadul\xading through\npar\xadal\xadleliza\xadtion and dis\xadtri\xadb\xadu\xadtion to mul\xadti\xadple a\xadgents (i.e. Steep in\xadstances\nrun\xadning in the Cloud or in a clus\xadter).")),Object(c.a)(j,{icon:Object(c.a)(R,null),title:"Automatic failover",mdxType:"Feature"},Object(c.a)("p",null,"Crashed work\xadflows can be re\xadsumed with\xadout loss of in\xadfor\xadma\xadtion (even with\xadout\na data\xadbase).")),Object(c.a)(j,{icon:Object(c.a)(_,null),title:"Microservice integration",mdxType:"Feature"},Object(c.a)("p",null,"Ser\xadvice meta\xadda\xadta al\xadlows mi\xadcroser\xadvices (also called pro\xadcess\xading ser\xadvices)\nwith al\xadmost ar\xadbi\xadtrary in\xadter\xadfaces to be in\xadte\xadgrat\xaded/ex\xade\xadcut\xaded.")),Object(c.a)(j,{icon:Object(c.a)(J,null),title:"Runtime environments",mdxType:"Feature"},Object(c.a)("p",null,"Built-\u200bin run\xadtime en\xadvi\xadron\xadments for ex\xade\xadcutable mi\xadcroser\xadvices that are\npro\xadvid\xaded as bi\xadna\xadries or Dock\xader im\xadages.")),Object(c.a)(j,{icon:Object(c.a)(Z,null),title:"Plugins",mdxType:"Feature"},Object(c.a)("p",null,"Plu\xadg\xadin\xads let you mod\xadi\xadfy gen\xader\xadat\xaded process chain\xads, the way a\xadgents col\xadlec\xadt\nre\xadsult\xads, or add cus\xadtom run\xadtime en\xadvi\xadron\xadments (e.g. Python, AWS Lamb\xadda, Web\nPro\xadcess\xading Ser\xadvices).")),Object(c.a)(j,{icon:Object(c.a)(re,null),title:"Optional databases",mdxType:"Feature"},Object(c.a)("p",null,"If you want your work\xadflows to be per\xadsist\xaded in a data\xadbase over a long\npe\xadri\xadod of time, Steep of\xadfer\xads sup\xadport\xad for ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.mongodb.com/"}),"Mon\xadgoDB"),"\nand ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org/"}),"Post\xadgreSQL"),".")),Object(c.a)(j,{icon:Object(c.a)(ie,null),title:"HTTP and web interfaces",mdxType:"Feature"},Object(c.a)("p",null,"Steep has a REST-\u200blike HTTP in\xadter\xadface, a web-\u200bbased user in\xadter\xadface for\nmon\xadi\xadtor\xading, and can pro\xadvide met\xadric\xads to ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://prometheus.io/"}),"Prometheus"),".")),Object(c.a)(j,{icon:Object(c.a)(pe,null),title:"Kubernetes",mdxType:"Feature"},Object(c.a)("p",null,"Tight in\xadte\xadgra\xadtion with ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/"}),"Ku\xadber\xadnetes")," en\xadables op\xadti\xadmized\nre\xadsource usage through auto-\u200bscaling.")),Object(c.a)(j,{icon:Object(c.a)(me,null),title:"OpenStack",mdxType:"Feature"},Object(c.a)("p",null,"The ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.openstack.org/"}),"Open\xadStack")," Cloud Con\xadnec\xadtor al\xadlows vir\xadtu\xadal\nma\xadchines host\xading ad\xaddi\xadtion\xadal Steep a\xadgents to be cre\xadat\xaded on de\xadmand.")),Object(c.a)(j,{icon:Object(c.a)(ge,null),title:"Scalability",mdxType:"Feature"},Object(c.a)("p",null,"Its a\xadsyn\xadchro\xadnous event-\u200bdriven ar\xadchi\xadtec\xadture al\xadlows Steep to scale\nhor\xadi\xadzon\xadtal\xadly across mul\xadti\xadple ma\xadchines in your clus\xadter and to sup\xadport\xad\ncom\xadplex dy\xadnam\xadic work\xadflows with t\xadhou\xadsand\xads of tasks.")),Object(c.a)(j,{icon:Object(c.a)(je,null),title:"Production-ready",mdxType:"Feature"},Object(c.a)("p",null,"Steep is very re\xadli\xadable and has been used in pro\xadduc\xadtion for many years to\nex\xade\xadcute work\xadflows from var\xadi\xadous do\xadmain\xads. The source code has a very high\ntest cov\xader\xadage.")),Object(c.a)(j,{icon:Object(c.a)(xe.a,null),title:"Open-Source",mdxType:"Feature"},Object(c.a)("p",null,"Steep is free and open-\u200bsource. It is re\xadleased under the\n",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"http://www.apache.org/licenses/LICENSE-2.0"}),"A\xadpache Li\xadcense, Ver\xadsion 2.0"),". The\ncode can be found on ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/steep-wms/steep"}),"GitHub"),"."))))}function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Se(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}Te.isMDXComponent=!0;var ze=function(e){var t=e.color,r=e.size,n=Se(e,["color","size"]);return i.a.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),i.a.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),i.a.createElement("polyline",{points:"7 10 12 15 17 10"}),i.a.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"3"}))};ze.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},ze.defaultProps={color:"currentColor",size:"24"};var Ne=ze,Ce=r("l4zb"),Ie=r.n(Ce),Le=(r("X84d"),i.a.createElement),Me=function(){return Le("div",{className:"download-btns"},Le("a",{href:"https://github.com/steep-wms/steep/releases/download/v5.0.1/steep-5.0.1.zip",className:"btn btn-primary"},Le(Ne,{className:"feather"})," Download Steep 5.0.1 (binaries)"),Le("a",{href:"https://hub.docker.com/r/steep/steep/",className:"btn"},Le(Ie.a,{className:"simple-icon"})," Docker image"),Le("a",{href:"https://github.com/steep-wms/steep",className:"btn"},Le(xe.a,{className:"feather"})," Source code"))},De=(i.a.createElement,{}),Ae="wrapper";function Be(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.a)(Ae,Object(n.a)({},De,r,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h2",{id:"download-and-get-started"},"Download and get started"),Object(c.a)("p",null,"Choose from one of the fol\xadlow\xading op\xadtion\xads to down\xadload\xad Steep:"),Object(c.a)(Me,{mdxType:"DownloadButtons"}),Object(c.a)("p",null,"If you down\xadloaded the bi\xadna\xadry pack\xadage of Steep, ex\xadtrac\xadt the ZIP file and run the\nstart script:"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"hljs language-bash"}),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-built_in"}),"cd")," steep-5.0.1\nbin/steep\n")),Object(c.a)("p",null,"Or, start the ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/orgs/steep/steep"}),"Dock\xader image")," as\nfol\xadlows:"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"hljs language-bash"}),"docker run --name steep -d --rm -p 8080:8080 \\\n    -e STEEP_HTTP_HOST=0.0.0.0 steep/steep:unstable\n")),Object(c.a)("p",null,"After a few sec\xadond\xads, you can ac\xadcess Steep\u2019s web in\xadter\xadface on\n",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:8080/"}),"http://lo\xadcal\xadhost:8080/"),"."),Object(c.a)("p",null,"We will now sub\xadmit a sim\xadple work\xadflow to test if Steep is run\xadning cor\xadrect\xadly. The\nwork\xadflow con\xadsist\xads of a s\xadin\xadgle ex\xade\xadcute ac\xadtion that sleep\xads for 10 sec\xadond\xads and\nthen quits. Ex\xade\xadcute the fol\xadlow\xading com\xadmand:"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"hljs language-bash"}),"curl -X POST http://localhost:8080/workflows -d ",Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),"'api: 4.0.0\nvars:\n  - id: sleep_seconds\n    value: 10\nactions:\n  - type: execute\n    service: sleep\n    parameters:\n      - id: seconds\n        var: sleep_seconds'"),"\n")),Object(c.a)("p",null,"The com\xadmand will re\xadturn the ID of the sub\xadmit\xadted work\xadflow. You can mon\xadi\xadtor the\nex\xade\xadcu\xadtion in the web in\xadter\xadface or by is\xadsu\xading the fol\xadlow\xading com\xadmand:"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"hljs language-bash"}),"curl http://localhost:8080/workflows/<workflow-id>\n")),Object(c.a)("p",null,"Re\xadplace ",Object(c.a)("inlineCode",{parentName:"p"},"<workflow-id>")," with the re\xadturned ID."),Object(c.a)("p",null,Object(c.a)("em",{parentName:"p"},"Con\xadgrat\xadu\xadla\xadtion\xads! You suc\xadcess\xadful\xadly in\xadstalled Steep and ran your first work\xadflow.")))}Be.isMDXComponent=!0;var Fe=r("BtHs"),We=(r("z1Ft"),i.a.createElement),Re=function(e){var t=e.children;return We("div",{className:"research"},t)},He=i.a.createElement,Ge=function(e){var t=e.image,r=e.pdf,n=e.children,a=He("img",{src:t,className:"img-fluid"});return He("div",{className:"research-item"},He("div",{className:"research-image"},r?He("a",{href:r},a):a),He("div",{className:"research-body"},He("div",{className:"csl-bib-body"},He("div",{className:"csl-entry"},n,r&&He(i.a.Fragment,null,He("br",null),He("span",{className:"bib-links"},"[ ",He("a",{href:r},"PDF")," ]"))))))},Xe=(i.a.createElement,{}),_e="wrapper";function Ve(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.a)(_e,Object(n.a)({},Xe,r,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h2",{id:"about"},"About"),Object(c.a)("p",null,"Steep\u2019s de\xadvel\xadop\xadmen\xadt is led by the com\xadpe\xadtence cen\xadter for\n",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://igd.fraunhofer.de/en/competences/technologies/spatial-information-management"}),"S\xadpa\xadtial In\xadfor\xadma\xadtion Man\xadage\xadment"),"\nof the ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://igd.fraunhofer.de/"}),"Fraun\xadhofer\xad In\xadsti\xadtute for Com\xadput\xader Graph\xadic\xads Re\xadsearch IGD"),"\nin Darm\xadstadt, Ger\xadmany. ",Object(c.a)("em",{parentName:"p"},"Fraun\xadhofer\xad IGD")," is the in\xadter\xadna\xadtion\xadal lead\xading re\xadsearch\nin\xadsti\xadtu\xadtion for ap\xadplied vi\xadsu\xadal com\xadput\xading. The com\xadpe\xadtence cen\xadter for ",Object(c.a)("em",{parentName:"p"},"S\xadpa\xadtial\nIn\xadfor\xadma\xadtion Man\xadage\xadment")," of\xadfer\xads ex\xadper\xadtise and in\xadno\xadv\xada\xadtive tech\xadnolo\xadgies that\nen\xadable suc\xadcess\xadful com\xadmu\xadni\xadca\xadtion and ef\xadfi\xadcien\xadt co\xadop\xader\xada\xadtion with the help of\nge\xado\xadgraph\xadic in\xadfor\xadma\xadtion."),Object(c.a)("p",null,Object(c.a)("em",{parentName:"p"},"Steep")," was ini\xadtial\xadly de\xadvelope\xadd with\xadin the re\xadsearch pro\xadject \u201cIQmu\xadlus\u201d (A\nHigh-\u200bvolume Fu\xadsion and Ana\xadlysis Plat\xadform for Geo\xadspa\xadtial Point Cloud\xads, Cov\xader\xadages\nand Volu\xadmet\xadric Data Sets) fun\xadded from the 7",Object(c.a)("sup",null,"th")," Frame\xadwork Pro\xadgramme of the\nEu\xadro\xadpean Com\xadmis\xadsion, call iden\xadti\xadfier FP7-ICT-2011-8, un\xadder the Grant agree\xadment\nno. 318787 from 2012 to 2016. It was pre\xadvi\xadously called the \u2018IQmu\xadlus Job\xadMan\xadager\u2019\nor just the \u2018Job\xadMan\xadager\u2019."),Object(c.a)("h4",{id:"publications"},"Publications"),Object(c.a)("p",null,"Steep and its pre\xadde\xadces\xadsor Job\xadMan\xadag\xader have ap\xadpeared in at least the fol\xadlow\xading\npub\xadlic\xada\xadtions:"),Object(c.a)(Re,{mdxType:"Research"},Object(c.a)(Ge,{image:"https://michelkraemer.com/images/research/18-01.jpg",pdf:"https://michelkraemer.com/publications/2018/Kraemer,%20M.%20(2018).%20A%20Microservice%20Architecture%20for%20the%20Processing%20of%20Large%20Geospatial%20Data%20in%20the%20Cloud.pdf",mdxType:"ResearchItem"},"Kr\xe4mer, M. (2018). ",Object(c.a)("i",null,"A Mi\xadcroservice Ar\xadchi\xadtec\xadture for the Pro\xadcessing of Large Geo\xadspa\xadtial Data in the Cloud")," (Doc\xadtoral dis\xadser\xadta\xadtion). Tech\xadnis\xadche Uni\xadversit\xe4t Darm\xadstadt. ",Object(c.a)("a",{href:"https://doi.org/10.13140/RG.2.2.30034.66248"},"ht\xadtps://\u200bdoi.org/\u200b10.13140/\u200bRG.2.2.30034.66248")),Object(c.a)(Ge,{image:"https://michelkraemer.com/images/research/16-01.jpg",pdf:"https://michelkraemer.com/publications/2016/Boehm,%20Bredif,%20Gierlinger,%20Kraemer,%20Lindenbergh,%20Liu,%20Michel,%20Sirmacek%20-%20The%20IQmulus%20Urban%20Showcase%20-%20Automatic%20Tree%20Classification%20and%20Identification%20in%20Huge%20Mobile%20Mapping%20Point%20Clouds.pdf",mdxType:"ResearchItem"},"B\xf6hm, J., Bredif, M., Gi\xader\xadlinger, T., Kr\xe4mer, M., Linden\xadbergh, R., Liu, K., \u2026 Sir\xadma\xadcek, B. (2016). The IQmu\xadlus Urban Show\xadcase: Auto\xadmatic Tree Clas\xadsi\xadfic\xada\xadtion and Iden\xadti\xadfic\xada\xadtion in Huge Mo\xadbile Map\xadping Point Clouds. ",Object(c.a)("i",null,"IS\xadPRS - In\xadter\xadna\xadtional Archives of the Pho\xadto\xadgram\xadmetry, Re\xadmote Sens\xading and Spa\xadtial In\xadform\xada\xadtion Sci\xadences"),", ",Object(c.a)("i",null,"XLI"),"-",Object(c.a)("i",null,"B3"),", 301\u2013307. ",Object(c.a)("a",{href:"https://doi.org/10.5194/isprs-archives-XLI-B3-301-2016"},"ht\xadtps://\u200bdoi.org/\u200b10.5194/\u200bis\xadprs-archives-XLI-B3-301-2016")),Object(c.a)(Ge,{image:"https://michelkraemer.com/images/research/15-04.jpg",mdxType:"ResearchItem"},"Kr\xe4mer, M., & Sen\xadner, I. (2015). A mod\xadu\xadlar soft\xadware ar\xadchi\xadtec\xadture for pro\xadcessing of big geo\xadspa\xadtial data in the cloud. ",Object(c.a)("i",null,"Com\xadputers & Graph\xadics"),", ",Object(c.a)("i",null,"49"),", 69\u201381. ",Object(c.a)("a",{href:"https://doi.org/10.1016/j.cag.2015.02.005"},"ht\xadtps://\u200bdoi.org/\u200b10.1016/\u200bj.cag.2015.02.005"))))}Ve.isMDXComponent=!0;i.a.createElement;var Ke={title:"Steep Workflow Management System"},qe={meta:Ke},Je=u;function Qe(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.a)(Je,Object(n.a)({},qe,r,{components:t,mdxType:"MDXLayout"}),Object(c.a)(v,{mdxType:"Welcome"}),Object(c.a)(Te,{mdxType:"Features"}),Object(c.a)("div",{className:"container container-smaller main-content"},Object(c.a)(Be,{mdxType:"GetStarted"}),Object(c.a)(Fe.a,{mdxType:"Docs"}),Object(c.a)(Ve,{mdxType:"About"})))}Qe.isMDXComponent=!0}},[["MuE9",0,2,5,1,4,3]]]);