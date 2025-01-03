"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47],{8705:function(e,t,s){function l(e){return e.toLowerCase().replaceAll(/[^ \-a-z]/g,"").replaceAll(/ /g,"-")}s.d(t,{g:function(){return n},o:function(){return r}});let i=[{title:"Introduction",pages:[{title:"Get started",slug:"",sections:["What to read next"]},{title:"How does Steep work?",sections:["Workflow scheduling","Software architecture","Processing services"]}]},{title:"Tutorials",pages:[{title:"Your first workflow",sections:[{title:"Step 1: Add service metadata",slug:"add-service-metadata"},{title:"Step 2: Restart Steep",slug:"restart-steep"},{title:"Step 3: Create the workflow",slug:"create-the-workflow"},{title:"Step 4: Submit the workflow",slug:"submit-the-workflow"}]},{title:"Sequential workflows",sections:[{title:"Step 1: Add more service metadata",slug:"add-more-service-metadata"},{title:"Step 2: Create the workflow",slug:"create-sequential-workflow"},{title:"Step 3: Submit the workflow",slug:"submit-sequential-workflow"}]},{title:"Parallelization",sections:[{title:"Step 1: Configure Steep for parallelization",slug:"configure-steep-for-parallelization",subsections:[{title:"Spawn multiple agents (vertical scaling)",slug:"spawn-multiple-agents"},{title:"Launch multiple Steep instances (horizontal scaling)",slug:"launch-multiple-steep-instances"}]},{title:"Step 2: Execute parallel workflows",slug:"execute-parallel-workflows",subsections:[{title:"Option A: Independent actions",slug:"independent-actions"},{title:"Option B: Using a for-each action",slug:"using-a-for-each-action"}]},{title:"Step 3: Submit parallel workflows",slug:"submit-parallel-workflows"}]},{title:"Loops",sections:[{title:"Step 1: Create a countdown service",slug:"create-a-countdown-service"},{title:"Step 2: Make the service executable",slug:"make-the-service-executable"},{title:"Step 3: Add service metadata",slug:"add-countdown-metadata"},{title:"Step 4: Create a workflow with a loop",slug:"create-loop-workflow"},{title:"Step 5: Submit the workflow",slug:"submit-loop-workflow"}]}]},{title:"Advanced tutorials",pages:[{title:"Aerial image segmentation",sections:[{title:"What we are going to do",subsections:["Why tile the image?"]},{title:"Step 1: Download input data",slug:"download-input-data"},{title:"Step 2: Add service metadata",slug:"add-segmentation-metadata"},{title:"Step 3: Configure Steep",slug:"configure-steep",subsections:["Change temporary path and output path","Mount data directory",{title:"Restart Steep",slug:"restart-steep-segment"}]},{title:"Step 4: Create the workflow",slug:"create-segmentation-workflow"},{title:"Step 5: Submit the workflow",slug:"submit-segmentation-workflow"},{title:"Optional: Enable GPU acceleration",slug:"enable-gpu-acceleration"}]},{title:"Bring your own service",sections:[{title:"Write a service from scratch",subsections:[{title:"Make the service executable",slug:"make-the-tiling-service-executable"},{title:"Add service metadata",slug:"add-tiling-service-metadata"}]},{title:"Create a Docker image",subsections:["Build the Docker image","Modify the service metadata"]}]}]},{title:"Data models",pages:[{title:"Workflows",sections:["Variables",{title:"Actions",subsections:["Execute actions","For-each actions","Include actions","Parameters","Output parameters","Include output parameters"]},"Retry policy defaults"]},{title:"Process chains",sections:[{title:"Executables",subsections:["Arguments","Argument variables"]},"Process chain status"]},{title:"Submissions",sections:["Submission status"]},{title:"Service metadata",sections:["Service parameters","Runtime arguments",{title:"Runtimes",subsections:["Other runtime","Docker runtime","Kubernetes runtime"]}]},{title:"Macros",sections:["Macro parameters"]},{title:"Timeouts and retries",sections:["Timeout policies","Retry policies","Durations"]},{title:"Agents"},{title:"VMs",sections:["VM status"]},{title:"Setups",sections:["Volumes","Creation policies"]},{title:"Full-text search",sections:["Query language","Search examples","Search results","Matches"]}]},{title:"Interfaces",pages:[{title:"HTTP endpoints",sections:["GET information","GET health","GET submissions","GET submission by ID","PUT submission","POST workflow","GET process chains","GET process chain by ID","GET process chain logs","GET process chain runs","GET process chain run by run number","HEAD process chain logs","PUT process chain","GET agents","GET agent by ID","HEAD agents","GET VMs","GET VM by ID","GET plugins","GET plugin by name","GET services","GET service by ID","GET setups","GET setup by ID","GET search","GET Prometheus metrics"]},{title:"Web-based user interface"}]},{title:"Configuration",pages:[{title:"steep.yaml",sections:["General configuration","Cluster settings","HTTP configuration","Controller configuration","Scheduler configuration","Agent configuration","Runtime settings","Database connection","Cloud connection","OpenStack cloud driver","SSH connection to VMs","Log configuration","Garbage collector configuration","Cache configuration","Agent pool parameters"]},{title:"setups.yaml"},{title:"services/services.yaml"},{title:"macros/macros.yaml"},{title:"plugins/common.yaml"}]},{title:"Advanced configuration topics",pages:[{title:"Provisioning scripts",sections:["Global variables","Environment variables","Configuration values","Read local files","Upload local files to remote"]},{title:"Using YAML anchors"},{title:"Using a template engine"}]},{title:"Extending Steep through plugins",pages:[{title:"Overview",slug:"plugin-overview",sections:["Parameter injection"]},{title:"Initializers"},{title:"Output adapters"},{title:"Process chain adapters"},{title:"Process chain consistency checkers"},{title:"Custom runtimes"},{title:"Progress estimators"}]}],r=function(){let e=[];for(let n of i){let i=l(n.title),o=[];for(let e of n.pages){var t,s,r;let n;let a=null!==(t=e.slug)&&void 0!==t?t:l(e.title);if(void 0!==e.sections)for(let t of(n=[],e.sections)){let e,i,o;if("string"==typeof t)i=l(e=t);else if(e=t.title,i=null!==(s=t.slug)&&void 0!==s?s:l(e),void 0!==t.subsections)for(let e of(o=[],t.subsections)){let t,s;"string"==typeof e?s=l(t=e):(t=e.title,s=null!==(r=e.slug)&&void 0!==r?r:l(t)),o.push({title:t,type:"subsection",slug:s,page:a,section:i})}n.push({title:e,type:"section",slug:i,page:a,subsections:o})}o.push({...e,type:"page",slug:a,sections:n,chapter:i})}e.push({...n,type:"chapter",slug:i,pages:o})}return e}(),n=function(e){let t={};function s(e){if(void 0!==t[e.slug])throw Error("Duplicate slug: ".concat(e.slug));t[e.slug]=e}for(let t of e){for(let e of t.pages){if(void 0!==e.sections)for(let t of e.sections){if(void 0!==t.subsections)for(let e of t.subsections)s(e);s(t)}s(e)}s(t)}return t}(r)},6688:function(e,t,s){let l;s.r(t),s.d(t,{default:function(){return A}});var i=s(7437),r=s(8705),n=s(428),o=s(2265),a=s(4817),c=e=>{let{onChangeSearchInput:t,onClose:s,onUp:l,onDown:r,onSubmit:c}=e,u=function(){let e=(0,n.F)(),[t,s]=(0,o.useState)(void 0);return(0,o.useEffect)(()=>{void 0!==e&&s(/Android|iPhone|iPad|Mobile|Tablet/i.test(e))},[e]),t}();return(0,i.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,i.jsx)("div",{className:"flex items-center justify-center pl-4 text-gray-700",children:(0,i.jsx)(a.Z,{})}),(0,i.jsx)("input",{type:"text",className:"flex-1 rounded-lg bg-bg py-4 text-lg outline-none dark:bg-gray-100 md:text-base lg:text-sm min-w-0",placeholder:"Search documentation",onChange:t,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",autoFocus:!0,onKeyDown:e=>{"Enter"===e.key?(c(),e.preventDefault()):"ArrowDown"===e.key?(r(),e.preventDefault()):"ArrowUp"===e.key&&(l(),e.preventDefault())}}),(0,i.jsx)("div",{className:"flex items-center justify-center pr-5",children:(0,i.jsx)("button",{className:"flex h-5 items-center rounded border border-gray-200 px-1 text-xs text-gray-600 hover:border-gray-400",onClick:()=>s(),children:!0===u?"Close":"Esc"})})]})},u=s(30),g=s(518),d=s(7138);let p=(0,o.forwardRef)((e,t)=>{let s,l,n,{item:o,active:a,onFocus:c,onClose:p,onMouseMove:f}=e,h=o.slug;"get-started"===h&&(h="");let m=r.g[h];switch("page"===m.type?s=m.chapter:("section"===m.type||"subsection"===m.type)&&(s=m.page),void 0!==s&&(l=r.g[s].title),m.type){case"chapter":throw Error("Cannot link to a chapter");case"page":n=h;break;case"section":case"subsection":n="".concat(m.page,"/#").concat(h)}return(0,i.jsx)(d.default,{href:"/docs/".concat(n),ref:t,onFocus:c,onClick:()=>p(),onMouseMove:f,children:(0,i.jsxs)("div",{className:(0,u.Z)("rounded-md px-4 py-4",{"active group bg-primary text-bg dark:bg-primary/60 dark:text-gray-900":a,"bg-gray-100 dark:bg-gray-200":!a}),children:[(0,i.jsxs)("div",{className:"mb-2",children:[(0,i.jsx)("span",{className:"font-normal",children:o.title}),void 0!==l?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsxs)("span",{className:"whitespace-nowrap text-xs text-gray-600 group-[.active]:text-gray-400",children:[(0,i.jsx)(g.Z,{size:".8em"})," ",l]})]}):void 0]}),(0,i.jsx)("div",{className:"max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-relaxed",children:o.body})]})})}),f=(0,o.forwardRef)((e,t)=>{let{searchResults:s,searchInput:l,selectedItem:r,setSelectedItem:n,isFavorites:a,onClose:c}=e,u=(0,o.useRef)(null),g=(0,o.useRef)([]),d=(0,o.useRef)(null);return(0,o.useImperativeHandle)(t,()=>({click:()=>{var e;r<0||r>=g.current.length||null===(e=g.current[r])||void 0===e||e.click()}}),[r]),(0,o.useEffect)(()=>{if(null===u.current||r<0||r>=g.current.length)return;let e=g.current[r];if(null===e)return;if(e===d.current){d.current=null;return}d.current=null;let t=e.getBoundingClientRect(),s=u.current.getBoundingClientRect();if(t.bottom>s.bottom){let e=u.current.scrollTop+(t.bottom-s.bottom+16);u.current.scrollTo({top:e})}else if(t.top<s.top){let e=t.top-s.top+u.current.scrollTop-16;u.current.scrollTo({top:e})}},[r]),(0,i.jsx)("div",{className:"flex flex-1 flex-col gap-4 overflow-y-scroll p-4",ref:u,children:0===s.length?(0,i.jsx)("div",{className:"flex h-8 items-center justify-center",children:(0,i.jsxs)("div",{children:["No results for"," ",(0,i.jsxs)("span",{className:"font-normal",children:["“",l.trim(),"”"]})]})}):(0,i.jsxs)(i.Fragment,{children:[a&&(0,i.jsx)("h6",{className:"text-base font-normal",children:"Suggested pages"}),s.map((e,t)=>(0,i.jsx)(p,{item:e,active:t===r,ref:e=>{g.current[t]=e},onFocus:()=>n(t),onClose:c,onMouseMove:()=>{t>=0&&t<g.current.length?d.current=g.current[t]:d.current=null,n(t)}},t))]})})});var h=s(2170),m=s.n(h),b=s(3479);let w=[{slug:"get-started",title:r.g[""].title,body:"Install Steep and start your first workflow"},{slug:"how-does-steep-work",title:r.g["how-does-steep-work"].title,body:"Learn about the basic concepts of Steep and its architecture"},{slug:"workflows",title:r.g.workflows.title,body:"Steep’s main data model"},{slug:"process-chains",title:r.g["process-chains"].title,body:"Workflows are transformed into executable process chains"},{slug:"http-endpoints",title:r.g["http-endpoints"].title,body:"Communicate with Steep through its HTTP API"},{slug:"steepyaml",title:r.g.steepyaml.title,body:"Steep’s main configuration file"}];async function x(){if(void 0!==l)return l;let e=await fetch("".concat("","/docs/index.json"),{cache:"no-cache"}),t=(await e.json()).map(e=>{let t=e.slug;return""===t&&(t="get-started"),{id:t,title:r.g[e.slug].title,body:e.body}});return(l=new b.Z({fields:["id","title","body"],storeFields:["body"],searchOptions:{boost:{title:10,id:100},fuzzy:.2,prefix:!0}})).addAll(t),l}function v(e,t){return!!e.substring(t,t+1).match(/[a-z]/i)}function y(e,t,s){if(e.length<=s)return[0,e.length];let l=t[0][0],i=t.length;for(;i>0&&!(t[--i][1]-l<=s););let r=t[i][1];if(r-l>=s)return[l,r];let n=s-(r-l),o=l-Math.ceil(n/2),a=r+Math.floor(n/2);if(o<0?(o=0,a=s):a>e.length&&(a=e.length,o=e.length-s),o=Math.max(0,o),(a=Math.min(e.length,a))<e.length)for(;a>r&&v(e,a);)--a,o>0&&--o;if(o>0)for(;o<l&&v(e,o-1);)++o;return[o,a]}function k(e,t){let s=0,l=[];for(let r in t){let n=t[r];n[0]>s&&l.push(e.substring(s,n[0]));let o=e.substring(n[0],n[1]);o.length>0&&l.push((0,i.jsx)("mark",{className:"border-b-2 border-primary bg-bg/0 font-normal text-primary group-[.active]:border-bg group-[.active]:text-bg dark:border-primary-hover dark:text-primary-hover dark:group-[.active]:border-gray-900 dark:group-[.active]:text-gray-900",children:o},r)),s=n[1]}return s<e.length&&l.push(e.substring(s,e.length)),(0,i.jsx)(i.Fragment,{children:l})}function S(e,t,s){return function(e,t){let s=[];for(let l of t){let t=e.toLowerCase().indexOf(l);t>=0&&s.push([t,t+l.length])}return s}(e,function(e,t){let s=[];for(let l of Object.keys(e.match))-1!==e.match[l].indexOf(t)&&s.push(l);return s}(t,s))}function C(e){let t;(t=[...e]).sort((e,t)=>e[0]-t[0]),e=t;let s=0;for(let t=1;t<e.length;++t)e[s][1]>=e[t][0]?e[s][1]=Math.max(e[s][1],e[t][1]):e[++s]=e[t];return e.slice(0,s+1)}var j=e=>{let{onClose:t}=e,[s,l]=(0,o.useState)(""),[n,a]=(0,o.useState)(w),[u,g]=(0,o.useState)(-1),d=(0,o.useRef)(null),p=(0,o.useCallback)(()=>{g(e=>(--e<0&&(e=n.length-1),e))},[n]),h=(0,o.useCallback)(()=>{g(e=>(e+1)%n.length)},[n]);(0,o.useEffect)(()=>{x().catch(console.error)},[]);let b=m()(e=>{let t=e.target.value;if(l(t),""===t){g(-1),a(w);return}x().then(e=>{let s=function(e){let t=[];for(let s of e.slice(0,25)){let e,l,i=s.id;"get-started"===i&&(i="");let n=r.g[i].title,o=s.body,a=C(S(n,s,"title"));e=a.length>0?k(n,a):n;let c=C(S(o,s,"body"));if(c.length>0){let[e,t]=function(e,t){let s=0;for(;s<e.length;){let l=e.indexOf("\n",s);if(-1===l&&(l=e.length),t.some(e=>e[0]>=s&&e[1]<=l))return[s,l];s=l+1}return[0,e.length]}(o,c),s=o.substring(e,t);if(e>0)for(let t of c)t[0]-=e,t[1]-=e;let[i,r]=y(s,c,80),n=s.substring(i,r);if(i>0)for(let e of c)e[0]-=i,e[1]-=i;if(c=c.filter(e=>e[0]>=0&&e[1]>0&&e[0]<n.length&&e[1]<=n.length),i>0)for(let e of(n="… "+n,c))e[0]+=2,e[1]+=2;r<s.length&&(n+=" …"),l=k(n,c)}else{let e=function(e){let t=0,s=0,l=0;for(;t<e.length;){let i=e.indexOf("\n",t);-1===i&&(i=e.length),i-t>l-s&&(s=t,l=i),t=i+1}return e.substring(s,l)}(o),t=[[0,Math.min(80,e.length)]],[s,i]=y(e,t,80),r=e.substring(s,i);s>0&&(r="… "+r),i<e.length&&(r+=" …"),l=r}t.push({slug:i,title:e,body:l})}return t}(e.search(t));s.length>0&&g(0),a(s)})},10);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{onChangeSearchInput:b,onClose:t,onUp:p,onDown:h,onSubmit:()=>{var e;return null===(e=d.current)||void 0===e?void 0:e.click()}}),(0,i.jsx)("hr",{className:"border-gray-200"}),(0,i.jsx)(f,{searchResults:n,searchInput:s,selectedItem:u,setSelectedItem:g,isFavorites:n===w,onClose:t,ref:d})]})},E=s(8931),T=s(4525),A=e=>{let{open:t,onClose:s}=e;return(0,i.jsx)(E.ZA,{isOpen:t,isDismissable:!0,onOpenChange:e=>{e||s()},className:"fixed inset-0 z-[90] flex items-start justify-center bg-black/20 backdrop-blur-sm data-[entering]:animate-fade-in data-[exiting]:animate-fade-out dark:bg-black/50",children:(0,i.jsx)(E.u_,{className:"mx-4 my-4 flex max-h-[calc(100%-2rem)] w-[40rem] max-w-[calc(100%-2rem)] flex-col rounded-lg bg-bg text-sm shadow-[rgba(0,0,0,0.2)_0px_10px_50px] data-[entering]:animate-dialog-fade-in data-[exiting]:animate-dialog-fade-out dark:bg-gray-100 lg:my-32 lg:max-h-[calc(100%-16rem)]",children:(0,i.jsx)(T.Vq,{"aria-label":"Search documentation ...",className:"flex flex-col overflow-hidden",children:(0,i.jsx)(j,{onClose:s})})})})}}}]);