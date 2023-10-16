"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[825],{360:function(e,t,s){var i=s(7437),o=s(7042);t.Z=e=>{let{id:t,className:s,children:l,type:a="2xl"}=e;return(0,i.jsx)("section",{id:t,className:(0,o.Z)("mx-auto flex flex-col px-2 sm:px-4 lg:px-6",{"max-w-screen-2xl":"2xl"===a,"max-w-screen-xl":"xl"===a,"max-w-screen-lg":"lg"===a,"max-w-screen-md":"md"===a,"max-w-screen-sm":"sm"===a},s),children:l})}},1685:function(e,t,s){s.r(t);var i=s(7437),o=s(5331),l=s(9397),a=s(7042),r=s(2265);let ScrollBar=e=>{let{orientation:t,type:s,forceDark:l}=e;return(0,i.jsx)(o.LW,{orientation:t,className:(0,a.Z)("flex select-none touch-none p-0.5 [transition:opacity_160ms_ease-out,width_.25s_ease-in-out,height_.25s_ease-in-out] data-[orientation=vertical]:w-[0.6rem] hover:data-[orientation=vertical]:w-[0.8rem] data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[0.6rem] hover:data-[orientation=horizontal]:h-[0.8rem]",{dark:l,"opacity-0 data-[state=visible]:opacity-60":"always"!==s,"opacity-60":"always"===s}),forceMount:!0,"aria-hidden":!0,children:(0,i.jsx)(o.bU,{className:"flex-1 bg-gray-800 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]"})})},n=(0,r.forwardRef)((e,t)=>{let{className:s,orientation:r="both",nonAppleType:n="hover",forceDark:c=!1,children:u}=e,p=(0,l.x)(),g=void 0===p||!1===p?n:"scroll";return(0,i.jsxs)(o.fC,{className:(0,a.Z)("overflow-hidden",s),scrollHideDelay:void 0===p||!1===p?"scroll"===n?void 0:0:void 0,type:g,children:[(0,i.jsx)(o.l_,{className:"w-full h-full",ref:t,children:u}),"horizontal"!==r?(0,i.jsx)(ScrollBar,{orientation:"vertical",type:g,forceDark:c}):void 0,"vertical"!==r?(0,i.jsx)(ScrollBar,{orientation:"horizontal",type:g,forceDark:c}):void 0]})});t.default=n},9516:function(e,t,s){function slug(e){return e.toLowerCase().replaceAll(/[^ \-a-z]/g,"").replaceAll(/ /g,"-")}s.d(t,{g:function(){return l},o:function(){return o}});let i=[{title:"Introduction",pages:[{title:"Get started",slug:"",sections:["What to read next"]},{title:"How does Steep work?",sections:["Workflow scheduling","Software architecture","Processing services"]}]},{title:"Tutorials",pages:[{title:"Your first workflow",sections:[{title:"Step 1: Add service metadata",slug:"add-service-metadata"},{title:"Step 2: Restart Steep",slug:"restart-steep"},{title:"Step 3: Create the workflow",slug:"create-the-workflow"},{title:"Step 4: Submit the workflow",slug:"submit-the-workflow"}]},{title:"Sequential workflows",sections:[{title:"Step 1: Add more service metadata",slug:"add-more-service-metadata"},{title:"Step 2: Create the workflow",slug:"create-sequential-workflow"},{title:"Step 3: Submit the workflow",slug:"submit-sequential-workflow"}]},{title:"Parallelization",sections:[{title:"Step 1: Configure Steep for parallelization",slug:"configure-steep-for-parallelization",subsections:[{title:"Spawn multiple agents (vertical scaling)",slug:"spawn-multiple-agents"},{title:"Launch multiple Steep instances (horizontal scaling)",slug:"launch-multiple-steep-instances"}]},{title:"Step 2: Execute parallel workflows",slug:"execute-parallel-workflows",subsections:[{title:"Option A: Independent actions",slug:"independent-actions"},{title:"Option B: Using a for-each action",slug:"using-a-for-each-action"}]},{title:"Step 3: Submit parallel workflows",slug:"submit-parallel-workflows"}]},{title:"Loops",sections:[{title:"Step 1: Create a countdown service",slug:"create-a-countdown-service"},{title:"Step 2: Make the service executable",slug:"make-the-service-executable"},{title:"Step 3: Add service metadata",slug:"add-countdown-metadata"},{title:"Step 4: Create a workflow with a loop",slug:"create-loop-workflow"},{title:"Step 5: Submit the workflow",slug:"submit-loop-workflow"}]}]},{title:"Advanced tutorials",pages:[{title:"Aerial image segmentation",sections:[{title:"What we are going to do",subsections:["Why tile the image?"]},{title:"Step 1: Download input data",slug:"download-input-data"},{title:"Step 2: Add service metadata",slug:"add-segmentation-metadata"},{title:"Step 3: Configure Steep",slug:"configure-steep",subsections:["Change temporary path and output path","Mount data directory",{title:"Restart Steep",slug:"restart-steep-segment"}]},{title:"Step 4: Create the workflow",slug:"create-segmentation-workflow"},{title:"Step 5: Submit the workflow",slug:"submit-segmentation-workflow"},{title:"Optional: Enable GPU acceleration",slug:"enable-gpu-acceleration"}]},{title:"Bring your own service",sections:[{title:"Write a service from scratch",subsections:[{title:"Make the service executable",slug:"make-the-tiling-service-executable"},{title:"Add service metadata",slug:"add-tiling-service-metadata"}]},{title:"Create a Docker image",subsections:["Build the Docker image","Modify the service metadata"]}]}]},{title:"Data models",pages:[{title:"Workflows",sections:["Variables",{title:"Actions",subsections:["Execute actions","For-each actions","Parameters","Output parameters"]},"Retry policy defaults"]},{title:"Process chains",sections:[{title:"Executables",subsections:["Arguments","Argument variables"]},"Process chain status"]},{title:"Submissions",sections:["Submission status"]},{title:"Service metadata",sections:["Runtime environments","Service parameters","Runtime arguments"]},{title:"Timeouts and retries",sections:["Timeout policies","Retry policies","Durations"]},{title:"Agents"},{title:"VMs",sections:["VM status"]},{title:"Setups",sections:["Volumes","Creation policies"]},{title:"Full-text search",sections:["Query language","Search examples","Search results","Matches"]}]},{title:"Interfaces",pages:[{title:"HTTP endpoints",sections:["GET information","GET health","GET submissions","GET submission by ID","PUT submission","POST workflow","GET process chains","GET process chain by ID","GET process chain logs","GET process chain runs","GET process chain run by run number","HEAD process chain logs","PUT process chain","GET agents","GET agent by ID","GET VMs","GET VM by ID","GET plugins","GET plugin by name","GET services","GET service by ID","GET setups","GET setup by ID","GET search","GET Prometheus metrics"]},{title:"Web-based user interface"}]},{title:"Configuration",pages:[{title:"steep.yaml",sections:["General configuration","Cluster settings","HTTP configuration","Controller configuration","Scheduler configuration","Agent configuration","Runtime settings","Database connection","Cloud connection","OpenStack cloud driver","SSH connection to VMs","Log configuration","Garbage collector configuration","Cache configuration","Agent pool parameters"]},{title:"setups.yaml"},{title:"services/services.yaml"},{title:"plugins/common.yaml"}]},{title:"Advanced configuration topics",pages:[{title:"Provisioning scripts",sections:["Global variables","Environment variables","Configuration values","Read local files","Upload local files to remote"]},{title:"Using YAML anchors"},{title:"Using a template engine"}]},{title:"Extending Steep through plugins",pages:[{title:"Overview",slug:"plugin-overview",sections:["Parameter injection"]},{title:"Initializers"},{title:"Output adapters"},{title:"Process chain adapters"},{title:"Process chain consistency checkers"},{title:"Custom runtime environments"},{title:"Progress estimators"}]}],o=function(){let e=[];for(let l of i){let i=slug(l.title),a=[];for(let e of l.pages){var t,s,o;let l;let r=null!==(t=e.slug)&&void 0!==t?t:slug(e.title);if(void 0!==e.sections)for(let t of(l=[],e.sections)){let e,i,a;if("string"==typeof t)i=slug(e=t);else if(e=t.title,i=null!==(s=t.slug)&&void 0!==s?s:slug(e),void 0!==t.subsections)for(let e of(a=[],t.subsections)){let t,s;"string"==typeof e?s=slug(t=e):(t=e.title,s=null!==(o=e.slug)&&void 0!==o?o:slug(t)),a.push({title:t,type:"subsection",slug:s,page:r,section:i})}l.push({title:e,type:"section",slug:i,page:r,subsections:a})}a.push({...e,type:"page",slug:r,sections:l,chapter:i})}e.push({...l,type:"chapter",slug:i,pages:a})}return e}(),l=function(e){let t={};function add(e){if(void 0!==t[e.slug])throw Error("Duplicate slug: ".concat(e.slug));t[e.slug]=e}for(let t of e){for(let e of t.pages){if(void 0!==e.sections)for(let t of e.sections){if(void 0!==t.subsections)for(let e of t.subsections)add(e);add(t)}add(e)}add(t)}return t}(o)}}]);