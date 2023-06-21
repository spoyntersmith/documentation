"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={title:"Jobs"},i=void 0,l={unversionedId:"optional-components/jobs",id:"optional-components/jobs",title:"Jobs",description:"* Definition",source:"@site/docs/optional-components/jobs.md",sourceDirName:"optional-components",slug:"/optional-components/jobs",permalink:"/docs/next/optional-components/jobs",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/optional-components/jobs.md",tags:[],version:"current",lastUpdatedBy:"Mehrdad Amini",lastUpdatedAt:1687327943,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"Jobs"},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/docs/next/optional-components/commands"},next:{title:"Languages",permalink:"/docs/next/optional-components/languages"}},s={},u=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"DemoJob",id:"demojob",level:4},{value:"Execute Jobs Execution",id:"execute-jobs-execution",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#execute-jobs-execution"},"Execute Jobs Execution"))),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jobs are simple classes that can do one thing or multiple related things. "),(0,a.kt)("li",{parentName:"ul"},"Job is a name given to a class that is usually created to be queued (it's execution is usually deferred for later, after the execution of previous Jobs are completed)."),(0,a.kt)("li",{parentName:"ul"},"Jobs can be scheduled to be executed later by a queuing mechanism (a queue system like beanstalkd)."),(0,a.kt)("li",{parentName:"ul"},"When a Job class is dispatched, it performs its specific job and dies."),(0,a.kt)("li",{parentName:"ul"},"Laravel's queue worker will process every Job as it's pushed onto the queue.")),(0,a.kt)("h3",{id:"principles"},"Principles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Container MAY have more than one Job.")),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All Jobs MUST extend from ",(0,a.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Jobs\\Job"),".")),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- app\n  - Containers\n    - {section-name}\n      - {container-name}\n        - Jobs\n          - DoSomethingJob.php\n          - DoSomethingElseJob.php\n")),(0,a.kt)("h3",{id:"code-samples"},"Code Samples"),(0,a.kt)("h4",{id:"demojob"},"DemoJob"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class DemoJob extends Job\n{\n    private $something;\n\n    public function __construct(array $someData)\n    {\n        $this->something = $someData;\n    }\n\n    public function handle()\n    {\n        foreach ($this->something as $thing) {\n            // do whatever you like\n        }\n    }\n}\n")),(0,a.kt)("p",null,"Check the parent Job class."),(0,a.kt)("h1",{id:"usage-from-action"},"Usage from Action"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// using helper function\ndispatch(new DemoJob($someData));\n\n// manually\napp(\\Illuminate\\Contracts\\Bus\\Dispatcher\\Dispatcher::class)->dispatch(New DemoJob($someData));\n")),(0,a.kt)("h3",{id:"execute-jobs-execution"},"Execute Jobs Execution"),(0,a.kt)("p",null,"For running your Jobs checkout the ",(0,a.kt)("a",{parentName:"p",href:"../miscellaneous/tasks-queuing"},"Tasks Queuing")," page."),(0,a.kt)("admonition",{title:"Further reading",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"More info at ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/queues"},"Laravel Docs"),".")))}m.isMDXComponent=!0}}]);