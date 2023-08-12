"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[288],{4232:function(e,t,s){s.d(t,{g:function(){return o},o:function(){return i}});var r=s(7206);let n=[{title:"Introduction",pages:[{title:"Get started",slug:""},{title:"How does Steep work?",sections:["Workflow scheduling","Software architecture","Processing services"]},{title:"Example workflows",sections:["Running two services in parallel","Chaining two services","Splitting and joining results","Processing a dynamic number of results in parallel","Feeding results back into the workflow (cycles/loops)"]},{title:"Tutorial: Segment aerial images"}]},{title:"Data models",pages:[{title:"Workflows",sections:["Variables",{title:"Actions",subsections:["Execute actions","For-each actions","Parameters","Output parameters"]},"Retry policy defaults"]},{title:"Process chains",sections:[{title:"Executables",subsections:["Arguments","Argument variables"]},"Process chain status"]},{title:"Submissions",sections:["Submission status"]},{title:"Service metadata",sections:["Runtime environments","Service parameters","Runtime arguments"]},{title:"Timeouts and retries",sections:["Timeout policies","Retry policies","Durations"]},{title:"Agents"},{title:"VMs",sections:["VM status"]},{title:"Setups",sections:["Volumes","Creation policies"]},{title:"Full-text search",sections:["Query language","Search examples","Search results","Matches"]}]},{title:"Interfaces",pages:[{title:"HTTP endpoints",sections:["GET information","GET health","GET submissions","GET submission by ID","PUT submission","POST workflow","GET process chains","GET process chain by ID","GET process chain logs","GET process chain runs","GET process chain run by run number","HEAD process chain logs","PUT process chain","GET agents","GET agent by ID","GET VMs","GET VM by ID","GET plugins","GET plugin by name","GET services","GET service by ID","GET setups","GET setup by ID","GET search","GET Prometheus metrics"]},{title:"Web-based user interface"}]},{title:"Configuration",pages:[{title:"steep.yaml",sections:["General configuration","Cluster settings","HTTP configuration","Controller configuration","Scheduler configuration","Agent configuration","Runtime settings","Database connection","Cloud connection","OpenStack cloud driver","SSH connection to VMs","Log configuration","Garbage collector configuration","Cache configuration","Agent pool parameters"]},{title:"setups.yaml"},{title:"services/services.yaml"},{title:"plugins/common.yaml"}]},{title:"Advanced configuration topics",pages:[{title:"Provisioning scripts",sections:["Global variables","Environment variables","Configuration values","Read local files","Upload local files to remote"]},{title:"Using YAML anchors"},{title:"Using a template engine"}]},{title:"Extending Steep through plugins",pages:[{title:"Overview",slug:"plugin-overview",sections:["Parameter injection"]},{title:"Initializers"},{title:"Output adapters"},{title:"Process chain adapters"},{title:"Process chain consistency checkers"},{title:"Custom runtime environments"},{title:"Progress estimators"}]}],i=function(){let e=[];for(let o of n){let n=(0,r.o)(o.title),l=[];for(let e of o.pages){var t,s,i;let o;let a=null!==(t=e.slug)&&void 0!==t?t:(0,r.o)(e.title);if(void 0!==e.sections)for(let t of(o=[],e.sections)){let e,n,l;if("string"==typeof t)e=t,n=(0,r.o)(e);else if(e=t.title,n=null!==(s=t.slug)&&void 0!==s?s:(0,r.o)(e),void 0!==t.subsections)for(let e of(l=[],t.subsections)){let t,s;"string"==typeof e?(t=e,s=(0,r.o)(t)):(t=e.title,s=null!==(i=e.slug)&&void 0!==i?i:(0,r.o)(t)),l.push({title:t,type:"subsection",slug:s,page:a,section:n})}o.push({title:e,type:"section",slug:n,page:a,subsections:l})}l.push({...e,type:"page",slug:a,sections:o,chapter:n})}e.push({...o,type:"chapter",slug:n,pages:l})}return e}(),o=function(e){let t={};function s(e){if(void 0!==t[e.slug])throw Error("Duplicate slug: ".concat(e.slug));t[e.slug]=e}for(let t of e){for(let e of t.pages){if(void 0!==e.sections)for(let t of e.sections){if(void 0!==t.subsections)for(let e of t.subsections)s(e);s(t)}s(e)}s(t)}return t}(i)},5288:function(e,t,s){let r;s.r(t),s.d(t,{default:function(){return C}});var n=s(7437),i=s(2265),o=s(4232),l=s(4685),a=s(8143),c=s.n(a),u=s(6546),g=s(1396),f=s.n(g),p=s(7042);let d=(0,i.forwardRef)((e,t)=>{let s,r,i,{item:l,active:a,onFocus:c,onClose:g,onMouseMove:d}=e,h=l.slug;"get-started"===h&&(h="");let m=o.g[h];switch("page"===m.type?s=m.chapter:("section"===m.type||"subsection"===m.type)&&(s=m.page),void 0!==s&&(r=o.g[s].title),m.type){case"chapter":throw Error("Cannot link to a chapter");case"page":i=h;break;case"section":case"subsection":i="".concat(m.page,"/#").concat(h)}return(0,n.jsx)(f(),{href:"/docs/".concat(i),ref:t,onFocus:c,onClick:()=>g(),onMouseMove:d,children:(0,n.jsxs)("div",{className:(0,p.Z)("rounded-md px-4 py-4",{"active group bg-primary text-bg dark:bg-primary/60 dark:text-gray-900":a,"bg-gray-100 dark:bg-gray-200":!a}),children:[(0,n.jsxs)("div",{className:"mb-2",children:[(0,n.jsx)("span",{className:"font-normal",children:l.title}),void 0!==r?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsxs)("span",{className:"whitespace-nowrap text-xs text-gray-600 group-[.active]:text-gray-400",children:[(0,n.jsx)(u.Z,{size:".8em"})," ",r]})]}):void 0]}),(0,n.jsx)("div",{className:"max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-relaxed",children:l.body})]})})}),h=(0,i.forwardRef)((e,t)=>{let{searchResults:s,searchInput:r,selectedItem:o,setSelectedItem:l,isFavorites:a,onClose:c}=e,u=(0,i.useRef)(null),g=(0,i.useRef)([]),f=(0,i.useRef)(null);return(0,i.useImperativeHandle)(t,()=>({click:()=>{var e;o<0||o>=g.current.length||null===(e=g.current[o])||void 0===e||e.click()}}),[o]),(0,i.useEffect)(()=>{if(null===u.current||o<0||o>=g.current.length)return;let e=g.current[o];if(null===e)return;if(e===f.current){f.current=null;return}f.current=null;let t=e.getBoundingClientRect(),s=u.current.getBoundingClientRect();if(t.bottom>s.bottom){let e=u.current.scrollTop+(t.bottom-s.bottom+16);u.current.scrollTo({top:e})}else if(t.top<s.top){let e=t.top-s.top+u.current.scrollTop-16;u.current.scrollTo({top:e})}},[o]),(0,n.jsx)("div",{className:"flex flex-1 flex-col gap-4 overflow-y-scroll p-4",ref:u,children:0===s.length?(0,n.jsx)("div",{className:"flex h-8 items-center justify-center",children:(0,n.jsxs)("div",{children:["No results for"," ",(0,n.jsxs)("span",{className:"font-normal",children:["“",r.trim(),"”"]})]})}):(0,n.jsxs)(n.Fragment,{children:[a&&(0,n.jsx)("h6",{className:"text-base font-normal",children:"Suggested pages"}),s.map((e,t)=>(0,n.jsx)(d,{item:e,active:t===o,ref:e=>{g.current[t]=e},onFocus:()=>l(t),onClose:c,onMouseMove:()=>{t>=0&&t<g.current.length?f.current=g.current[t]:f.current=null,l(t)}},t))]})})});var m=s(3835),b=s(3505),y=s(3799),v=e=>{let{onChangeSearchInput:t,onClose:s,onUp:r,onDown:o,onSubmit:l}=e,a=function(){let e=(0,y.F)(),[t,s]=(0,i.useState)(void 0);return(0,i.useEffect)(()=>{if(void 0===e)return;let t=new b.M(e).getDevice();s("mobile"===t.type||"tablet"===t.type)},[e]),t}();return(0,n.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,n.jsx)("div",{className:"flex items-center justify-center pl-4 text-gray-700",children:(0,n.jsx)(m.Z,{})}),(0,n.jsx)("input",{type:"text",className:"flex-1 rounded-lg bg-bg py-4 text-lg outline-none dark:bg-gray-100 md:text-base lg:text-sm",placeholder:"Search documentation",onChange:t,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",autoFocus:!0,onKeyDown:e=>{"Enter"===e.key?(l(),e.preventDefault()):"ArrowDown"===e.key?(o(),e.preventDefault()):"ArrowUp"===e.key&&(r(),e.preventDefault())}}),(0,n.jsx)("div",{className:"flex items-center justify-center pr-5",children:(0,n.jsx)("button",{className:"flex h-5 items-center rounded border border-gray-200 px-1 text-xs text-gray-600 hover:border-gray-400",onClick:()=>s(),children:!0===a?"Close":"Esc"})})]})};let x=[{slug:"get-started",title:o.g[""].title,body:"Install Steep and start your first workflow"},{slug:"how-does-steep-work",title:o.g["how-does-steep-work"].title,body:"Learn about the basic concepts of Steep and its architecture"},{slug:"workflows",title:o.g.workflows.title,body:"Steep’s main data model"},{slug:"process-chains",title:o.g["process-chains"].title,body:"Workflows are transformed into executable process chains"},{slug:"http-endpoints",title:o.g["http-endpoints"].title,body:"Communicate with Steep through its HTTP API"},{slug:"steepyaml",title:o.g.steepyaml.title,body:"Steep’s main configuration file"}];async function w(){if(void 0!==r)return r;let e=await fetch("".concat("/preview","/docs/index.json"),{cache:"no-cache"}),t=(await e.json()).map(e=>{let t=e.slug;return""===t&&(t="get-started"),{id:t,title:o.g[e.slug].title,body:e.body}});return(r=new l.Z({fields:["id","title","body"],storeFields:["body"],searchOptions:{boost:{title:10,id:100},fuzzy:.2,prefix:!0}})).addAll(t),r}function k(e,t){return!!e.substring(t,t+1).match(/[a-z]/i)}function T(e,t,s){if(e.length<=s)return[0,e.length];let r=t[0][0],n=t.length;for(;n>0&&!(t[--n][1]-r<=s););let i=t[n][1];if(i-r>=s)return[r,i];let o=s-(i-r),l=r-Math.ceil(o/2),a=i+Math.floor(o/2);if(l<0?(l=0,a=s):a>e.length&&(a=e.length,l=e.length-s),l=Math.max(0,l),(a=Math.min(e.length,a))<e.length)for(;a>i&&k(e,a);)--a,l>0&&--l;if(l>0)for(;l<r&&k(e,l-1);)++l;return[l,a]}function E(e,t){let s=0,r=[];for(let i in t){let o=t[i];o[0]>s&&r.push(e.substring(s,o[0]));let l=e.substring(o[0],o[1]);l.length>0&&r.push((0,n.jsx)("mark",{className:"border-b-2 border-primary bg-bg/0 font-normal text-primary group-[.active]:border-bg group-[.active]:text-bg dark:border-primary-hover dark:text-primary-hover dark:group-[.active]:border-gray-900 dark:group-[.active]:text-gray-900",children:l},i)),s=o[1]}return s<e.length&&r.push(e.substring(s,e.length)),(0,n.jsx)(n.Fragment,{children:r})}function j(e,t,s){return function(e,t){let s=[];for(let r of t){let t=e.toLowerCase().indexOf(r);t>=0&&s.push([t,t+r.length])}return s}(e,function(e,t){let s=[];for(let r of Object.keys(e.match))-1!==e.match[r].indexOf(t)&&s.push(r);return s}(t,s))}function S(e){let t;(t=[...e]).sort((e,t)=>e[0]-t[0]),e=t;let s=0;for(let t=1;t<e.length;++t)e[s][1]>=e[t][0]?e[s][1]=Math.max(e[s][1],e[t][1]):e[++s]=e[t];return e.slice(0,s+1)}var C=e=>{let{onClose:t}=e,[s,r]=(0,i.useState)(""),[l,a]=(0,i.useState)(x),[u,g]=(0,i.useState)(-1),f=(0,i.useRef)(null),p=(0,i.useCallback)(()=>{g(e=>(--e<0&&(e=l.length-1),e))},[l]),d=(0,i.useCallback)(()=>{g(e=>(e+1)%l.length)},[l]);(0,i.useEffect)(()=>{w().catch(console.error)},[]);let m=c()(e=>{let t=e.target.value;if(r(t),""===t){g(-1),a(x);return}w().then(e=>{let s=function(e){let t=[];for(let s of e.slice(0,25)){let e,r,n=s.id;"get-started"===n&&(n="");let i=o.g[n].title,l=s.body,a=S(j(i,s,"title"));e=a.length>0?E(i,a):i;let c=S(j(l,s,"body"));if(c.length>0){let[e,t]=function(e,t){let s=0;for(;s<e.length;){let r=e.indexOf("\n",s);if(-1===r&&(r=e.length),t.some(e=>e[0]>=s&&e[1]<=r))return[s,r];s=r+1}return[0,e.length]}(l,c),s=l.substring(e,t);if(e>0)for(let t of c)t[0]-=e,t[1]-=e;let[n,i]=T(s,c,80),o=s.substring(n,i);if(n>0)for(let e of c)e[0]-=n,e[1]-=n;if(c=c.filter(e=>e[0]>=0&&e[1]>0&&e[0]<o.length&&e[1]<=o.length),n>0)for(let e of(o="… "+o,c))e[0]+=2,e[1]+=2;i<s.length&&(o+=" …"),r=E(o,c)}else{let e=function(e){let t=0,s=0,r=0;for(;t<e.length;){let n=e.indexOf("\n",t);-1===n&&(n=e.length),n-t>r-s&&(s=t,r=n),t=n+1}return e.substring(s,r)}(l),t=[[0,Math.min(80,e.length)]],[s,n]=T(e,t,80),i=e.substring(s,n);s>0&&(i="… "+i),n<e.length&&(i+=" …"),r=i}t.push({slug:n,title:e,body:r})}return t}(e.search(t));s.length>0&&g(0),a(s)})},10);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{onChangeSearchInput:m,onClose:t,onUp:p,onDown:d,onSubmit:()=>{var e;return null===(e=f.current)||void 0===e?void 0:e.click()}}),(0,n.jsx)("hr",{className:"border-gray-200"}),(0,n.jsx)(h,{searchResults:l,searchInput:s,selectedItem:u,setSelectedItem:g,isFavorites:l===x,onClose:t,ref:f})]})}}}]);