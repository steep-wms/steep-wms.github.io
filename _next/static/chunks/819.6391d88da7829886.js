"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[819],{9516:function(e,t,s){function slug(e){return e.toLowerCase().replaceAll(/[^ \-a-z]/g,"").replaceAll(/ /g,"-")}s.d(t,{g:function(){return r},o:function(){return i}});let l=[{title:"Introduction",pages:[{title:"Get started",slug:"",sections:["What to read next"]},{title:"How does Steep work?",sections:["Workflow scheduling","Software architecture","Processing services"]}]},{title:"Tutorials",pages:[{title:"Your first workflow",sections:[{title:"Step 1: Add service metadata",slug:"add-service-metadata"},{title:"Step 2: Restart Steep",slug:"restart-steep"},{title:"Step 3: Create the workflow",slug:"create-the-workflow"},{title:"Step 4: Submit the workflow",slug:"submit-the-workflow"}]},{title:"Sequential workflows",sections:[{title:"Step 1: Add more service metadata",slug:"add-more-service-metadata"},{title:"Step 2: Create the workflow",slug:"create-sequential-workflow"},{title:"Step 3: Submit the workflow",slug:"submit-sequential-workflow"}]},{title:"Parallelization",sections:[{title:"Step 1: Configure Steep for parallelization",slug:"configure-steep-for-parallelization",subsections:[{title:"Spawn multiple agents (vertical scaling)",slug:"spawn-multiple-agents"},{title:"Launch multiple Steep instances (horizontal scaling)",slug:"launch-multiple-steep-instances"}]},{title:"Step 2: Execute parallel workflows",slug:"execute-parallel-workflows",subsections:[{title:"Option A: Independent actions",slug:"independent-actions"},{title:"Option B: Using a for-each action",slug:"using-a-for-each-action"}]},{title:"Step 3: Submit parallel workflows",slug:"submit-parallel-workflows"}]},{title:"Loops",sections:[{title:"Step 1: Create a countdown service",slug:"create-a-countdown-service"},{title:"Step 2: Make the service executable",slug:"make-the-service-executable"},{title:"Step 3: Add service metadata",slug:"add-countdown-metadata"},{title:"Step 4: Create a workflow with a loop",slug:"create-loop-workflow"},{title:"Step 5: Submit the workflow",slug:"submit-loop-workflow"}]}]},{title:"Advanced tutorials",pages:[{title:"Aerial image segmentation",sections:[{title:"What we are going to do",subsections:["Why tile the image?"]},{title:"Step 1: Download input data",slug:"download-input-data"},{title:"Step 2: Add service metadata",slug:"add-segmentation-metadata"},{title:"Step 3: Configure Steep",slug:"configure-steep",subsections:["Change temporary path and output path","Mount data directory",{title:"Restart Steep",slug:"restart-steep-segment"}]},{title:"Step 4: Create the workflow",slug:"create-segmentation-workflow"},{title:"Step 5: Submit the workflow",slug:"submit-segmentation-workflow"},{title:"Optional: Enable GPU acceleration",slug:"enable-gpu-acceleration"}]},{title:"Bring your own service",sections:[{title:"Write a service from scratch",subsections:[{title:"Make the service executable",slug:"make-the-tiling-service-executable"},{title:"Add service metadata",slug:"add-tiling-service-metadata"}]},{title:"Create a Docker image",subsections:["Build the Docker image","Modify the service metadata"]}]}]},{title:"Data models",pages:[{title:"Workflows",sections:["Variables",{title:"Actions",subsections:["Execute actions","For-each actions","Include actions","Parameters","Output parameters","Include output parameters"]},"Retry policy defaults"]},{title:"Process chains",sections:[{title:"Executables",subsections:["Arguments","Argument variables"]},"Process chain status"]},{title:"Submissions",sections:["Submission status"]},{title:"Service metadata",sections:["Runtime environments","Service parameters","Runtime arguments"]},{title:"Macros",sections:["Macro parameters"]},{title:"Timeouts and retries",sections:["Timeout policies","Retry policies","Durations"]},{title:"Agents"},{title:"VMs",sections:["VM status"]},{title:"Setups",sections:["Volumes","Creation policies"]},{title:"Full-text search",sections:["Query language","Search examples","Search results","Matches"]}]},{title:"Interfaces",pages:[{title:"HTTP endpoints",sections:["GET information","GET health","GET submissions","GET submission by ID","PUT submission","POST workflow","GET process chains","GET process chain by ID","GET process chain logs","GET process chain runs","GET process chain run by run number","HEAD process chain logs","PUT process chain","GET agents","GET agent by ID","GET VMs","GET VM by ID","GET plugins","GET plugin by name","GET services","GET service by ID","GET setups","GET setup by ID","GET search","GET Prometheus metrics"]},{title:"Web-based user interface"}]},{title:"Configuration",pages:[{title:"steep.yaml",sections:["General configuration","Cluster settings","HTTP configuration","Controller configuration","Scheduler configuration","Agent configuration","Runtime settings","Database connection","Cloud connection","OpenStack cloud driver","SSH connection to VMs","Log configuration","Garbage collector configuration","Cache configuration","Agent pool parameters"]},{title:"setups.yaml"},{title:"services/services.yaml"},{title:"macros/macros.yaml"},{title:"plugins/common.yaml"}]},{title:"Advanced configuration topics",pages:[{title:"Provisioning scripts",sections:["Global variables","Environment variables","Configuration values","Read local files","Upload local files to remote"]},{title:"Using YAML anchors"},{title:"Using a template engine"}]},{title:"Extending Steep through plugins",pages:[{title:"Overview",slug:"plugin-overview",sections:["Parameter injection"]},{title:"Initializers"},{title:"Output adapters"},{title:"Process chain adapters"},{title:"Process chain consistency checkers"},{title:"Custom runtime environments"},{title:"Progress estimators"}]}],i=function(){let e=[];for(let r of l){let l=slug(r.title),o=[];for(let e of r.pages){var t,s,i;let r;let n=null!==(t=e.slug)&&void 0!==t?t:slug(e.title);if(void 0!==e.sections)for(let t of(r=[],e.sections)){let e,l,o;if("string"==typeof t)l=slug(e=t);else if(e=t.title,l=null!==(s=t.slug)&&void 0!==s?s:slug(e),void 0!==t.subsections)for(let e of(o=[],t.subsections)){let t,s;"string"==typeof e?s=slug(t=e):(t=e.title,s=null!==(i=e.slug)&&void 0!==i?i:slug(t)),o.push({title:t,type:"subsection",slug:s,page:n,section:l})}r.push({title:e,type:"section",slug:l,page:n,subsections:o})}o.push({...e,type:"page",slug:n,sections:r,chapter:l})}e.push({...r,type:"chapter",slug:l,pages:o})}return e}(),r=function(e){let t={};function add(e){if(void 0!==t[e.slug])throw Error("Duplicate slug: ".concat(e.slug));t[e.slug]=e}for(let t of e){for(let e of t.pages){if(void 0!==e.sections)for(let t of e.sections){if(void 0!==t.subsections)for(let e of t.subsections)add(e);add(t)}add(e)}add(t)}return t}(i)},5819:function(e,t,s){let l;s.r(t),s.d(t,{default:function(){return search_SearchDialog}});var i=s(7437),r=s(292),o=s(9516),n=s(8457),a=s(2265),c=s(1827),search_SearchInputBar=e=>{let{onChangeSearchInput:t,onClose:s,onUp:l,onDown:r,onSubmit:o}=e,u=function(){let e=(0,n.F)(),[t,s]=(0,a.useState)(void 0);return(0,a.useEffect)(()=>{void 0!==e&&s(/Android|iPhone|iPad|Mobile|Tablet/i.test(e))},[e]),t}();return(0,i.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,i.jsx)("div",{className:"flex items-center justify-center pl-4 text-gray-700",children:(0,i.jsx)(c.Z,{})}),(0,i.jsx)("input",{type:"text",className:"flex-1 rounded-lg bg-bg py-4 text-lg outline-none dark:bg-gray-100 md:text-base lg:text-sm min-w-0",placeholder:"Search documentation",onChange:t,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",autoFocus:!0,onKeyDown:e=>{"Enter"===e.key?(o(),e.preventDefault()):"ArrowDown"===e.key?(r(),e.preventDefault()):"ArrowUp"===e.key&&(l(),e.preventDefault())}}),(0,i.jsx)("div",{className:"flex items-center justify-center pr-5",children:(0,i.jsx)("button",{className:"flex h-5 items-center rounded border border-gray-200 px-1 text-xs text-gray-600 hover:border-gray-400",onClick:()=>s(),children:!0===u?"Close":"Esc"})})]})},u=s(2348),g=s(7042),d=s(1291);let p=(0,a.forwardRef)((e,t)=>{let s,l,r,{item:n,active:a,onFocus:c,onClose:p,onMouseMove:f}=e,h=n.slug;"get-started"===h&&(h="");let m=o.g[h];switch("page"===m.type?s=m.chapter:("section"===m.type||"subsection"===m.type)&&(s=m.page),void 0!==s&&(l=o.g[s].title),m.type){case"chapter":throw Error("Cannot link to a chapter");case"page":r=h;break;case"section":case"subsection":r="".concat(m.page,"/#").concat(h)}return(0,i.jsx)(u.Z,{href:"/docs/".concat(r),ref:t,onFocus:c,onClick:()=>p(),onMouseMove:f,children:(0,i.jsxs)("div",{className:(0,g.Z)("rounded-md px-4 py-4",{"active group bg-primary text-bg dark:bg-primary/60 dark:text-gray-900":a,"bg-gray-100 dark:bg-gray-200":!a}),children:[(0,i.jsxs)("div",{className:"mb-2",children:[(0,i.jsx)("span",{className:"font-normal",children:n.title}),void 0!==l?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsxs)("span",{className:"whitespace-nowrap text-xs text-gray-600 group-[.active]:text-gray-400",children:[(0,i.jsx)(d.Z,{size:".8em"})," ",l]})]}):void 0]}),(0,i.jsx)("div",{className:"max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-relaxed",children:n.body})]})})}),f=(0,a.forwardRef)((e,t)=>{let{searchResults:s,searchInput:l,selectedItem:r,setSelectedItem:o,isFavorites:n,onClose:c}=e,u=(0,a.useRef)(null),g=(0,a.useRef)([]),d=(0,a.useRef)(null);return(0,a.useImperativeHandle)(t,()=>({click:()=>{var e;r<0||r>=g.current.length||null===(e=g.current[r])||void 0===e||e.click()}}),[r]),(0,a.useEffect)(()=>{if(null===u.current||r<0||r>=g.current.length)return;let e=g.current[r];if(null===e)return;if(e===d.current){d.current=null;return}d.current=null;let t=e.getBoundingClientRect(),s=u.current.getBoundingClientRect();if(t.bottom>s.bottom){let e=u.current.scrollTop+(t.bottom-s.bottom+16);u.current.scrollTo({top:e})}else if(t.top<s.top){let e=t.top-s.top+u.current.scrollTop-16;u.current.scrollTo({top:e})}},[r]),(0,i.jsx)("div",{className:"flex flex-1 flex-col gap-4 overflow-y-scroll p-4",ref:u,children:0===s.length?(0,i.jsx)("div",{className:"flex h-8 items-center justify-center",children:(0,i.jsxs)("div",{children:["No results for"," ",(0,i.jsxs)("span",{className:"font-normal",children:["“",l.trim(),"”"]})]})}):(0,i.jsxs)(i.Fragment,{children:[n&&(0,i.jsx)("h6",{className:"text-base font-normal",children:"Suggested pages"}),s.map((e,t)=>(0,i.jsx)(p,{item:e,active:t===r,ref:e=>{g.current[t]=e},onFocus:()=>o(t),onClose:c,onMouseMove:()=>{t>=0&&t<g.current.length?d.current=g.current[t]:d.current=null,o(t)}},t))]})})});var h=s(8143),m=s.n(h),b=s(4685);let x=[{slug:"get-started",title:o.g[""].title,body:"Install Steep and start your first workflow"},{slug:"how-does-steep-work",title:o.g["how-does-steep-work"].title,body:"Learn about the basic concepts of Steep and its architecture"},{slug:"workflows",title:o.g.workflows.title,body:"Steep’s main data model"},{slug:"process-chains",title:o.g["process-chains"].title,body:"Workflows are transformed into executable process chains"},{slug:"http-endpoints",title:o.g["http-endpoints"].title,body:"Communicate with Steep through its HTTP API"},{slug:"steepyaml",title:o.g.steepyaml.title,body:"Steep’s main configuration file"}];async function ensureIndex(){if(void 0!==l)return l;let e=await fetch("".concat("","/docs/index.json"),{cache:"no-cache"}),t=(await e.json()).map(e=>{let t=e.slug;return""===t&&(t="get-started"),{id:t,title:o.g[e.slug].title,body:e.body}});return(l=new b.Z({fields:["id","title","body"],storeFields:["body"],searchOptions:{boost:{title:10,id:100},fuzzy:.2,prefix:!0}})).addAll(t),l}function isLetter(e,t){return!!e.substring(t,t+1).match(/[a-z]/i)}function excerpt(e,t,s){if(e.length<=s)return[0,e.length];let l=t[0][0],i=t.length;for(;i>0&&!(t[--i][1]-l<=s););let r=t[i][1];if(r-l>=s)return[l,r];let o=s-(r-l),n=l-Math.ceil(o/2),a=r+Math.floor(o/2);if(n<0?(n=0,a=s):a>e.length&&(a=e.length,n=e.length-s),n=Math.max(0,n),(a=Math.min(e.length,a))<e.length)for(;a>r&&isLetter(e,a);)--a,n>0&&--n;if(n>0)for(;n<l&&isLetter(e,n-1);)++n;return[n,a]}function highlight(e,t){let s=0,l=[];for(let r in t){let o=t[r];o[0]>s&&l.push(e.substring(s,o[0]));let n=e.substring(o[0],o[1]);n.length>0&&l.push((0,i.jsx)("mark",{className:"border-b-2 border-primary bg-bg/0 font-normal text-primary group-[.active]:border-bg group-[.active]:text-bg dark:border-primary-hover dark:text-primary-hover dark:group-[.active]:border-gray-900 dark:group-[.active]:text-gray-900",children:n},r)),s=o[1]}return s<e.length&&l.push(e.substring(s,e.length)),(0,i.jsx)(i.Fragment,{children:l})}function extractPositions(e,t,s){return function(e,t){let s=[];for(let l of t){let t=e.toLowerCase().indexOf(l);t>=0&&s.push([t,t+l.length])}return s}(e,function(e,t){let s=[];for(let l of Object.keys(e.match))-1!==e.match[l].indexOf(t)&&s.push(l);return s}(t,s))}function coalesceAndSortPositions(e){let t;(t=[...e]).sort((e,t)=>e[0]-t[0]),e=t;let s=0;for(let t=1;t<e.length;++t)e[s][1]>=e[t][0]?e[s][1]=Math.max(e[s][1],e[t][1]):e[++s]=e[t];return e.slice(0,s+1)}var search_SearchDialogContent=e=>{let{onClose:t}=e,[s,l]=(0,a.useState)(""),[r,n]=(0,a.useState)(x),[c,u]=(0,a.useState)(-1),g=(0,a.useRef)(null),d=(0,a.useCallback)(()=>{u(e=>(--e<0&&(e=r.length-1),e))},[r]),p=(0,a.useCallback)(()=>{u(e=>(e+1)%r.length)},[r]);(0,a.useEffect)(()=>{ensureIndex().catch(console.error)},[]);let h=m()(e=>{let t=e.target.value;if(l(t),""===t){u(-1),n(x);return}ensureIndex().then(e=>{let s=function(e){let t=[];for(let s of e.slice(0,25)){let e,l,i=s.id;"get-started"===i&&(i="");let r=o.g[i].title,n=s.body,a=coalesceAndSortPositions(extractPositions(r,s,"title"));e=a.length>0?highlight(r,a):r;let c=coalesceAndSortPositions(extractPositions(n,s,"body"));if(c.length>0){let[e,t]=function(e,t){let s=0;for(;s<e.length;){let l=e.indexOf("\n",s);if(-1===l&&(l=e.length),t.some(e=>e[0]>=s&&e[1]<=l))return[s,l];s=l+1}return[0,e.length]}(n,c),s=n.substring(e,t);if(e>0)for(let t of c)t[0]-=e,t[1]-=e;let[i,r]=excerpt(s,c,80),o=s.substring(i,r);if(i>0)for(let e of c)e[0]-=i,e[1]-=i;if(c=c.filter(e=>e[0]>=0&&e[1]>0&&e[0]<o.length&&e[1]<=o.length),i>0)for(let e of(o="… "+o,c))e[0]+=2,e[1]+=2;r<s.length&&(o+=" …"),l=highlight(o,c)}else{let e=function(e){let t=0,s=0,l=0;for(;t<e.length;){let i=e.indexOf("\n",t);-1===i&&(i=e.length),i-t>l-s&&(s=t,l=i),t=i+1}return e.substring(s,l)}(n),t=[[0,Math.min(80,e.length)]],[s,i]=excerpt(e,t,80),r=e.substring(s,i);s>0&&(r="… "+r),i<e.length&&(r+=" …"),l=r}t.push({slug:i,title:e,body:l})}return t}(e.search(t));s.length>0&&u(0),n(s)})},10);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(search_SearchInputBar,{onChangeSearchInput:h,onClose:t,onUp:d,onDown:p,onSubmit:()=>{var e;return null===(e=g.current)||void 0===e?void 0:e.click()}}),(0,i.jsx)("hr",{className:"border-gray-200"}),(0,i.jsx)(f,{searchResults:r,searchInput:s,selectedItem:c,setSelectedItem:u,isFavorites:r===x,onClose:t,ref:g})]})},search_SearchDialog=e=>{let{open:t,onClose:s}=e;return(0,i.jsx)(r.Root,{open:t,onOpenChange:e=>{e&&s()},children:(0,i.jsxs)(r.Portal,{children:[(0,i.jsx)(r.Overlay,{className:"fixed inset-0 z-[90] bg-black/20 backdrop-blur-sm [&[data-state='closed']]:animate-fade-out [&[data-state='open']]:animate-fade-in","aria-hidden":"true"}),(0,i.jsx)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4",children:(0,i.jsx)("div",{className:"h-full w-[40rem] max-w-full lg:h-3/4",children:(0,i.jsx)(r.Content,{className:"flex max-h-full w-full flex-col rounded-lg bg-bg text-sm shadow-[rgba(0,0,0,0.2)_0px_10px_50px] dark:bg-gray-100 [&[data-state='closed']]:animate-dialog-fade-out [&[data-state='open']]:animate-dialog-fade-in",onEscapeKeyDown:()=>s(),onInteractOutside:()=>s(),onPointerDownOutside:()=>s(),children:(0,i.jsx)(search_SearchDialogContent,{onClose:s})})})})]})})}}}]);