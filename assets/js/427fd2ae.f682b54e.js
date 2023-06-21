"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Overview"},l=void 0,i={unversionedId:"getting-started/overview",id:"version-9.x/getting-started/overview",title:"Overview",description:"* The basic flow",source:"@site/versioned_docs/version-9.x/getting-started/overview.md",sourceDirName:"getting-started",slug:"/getting-started/overview",permalink:"/docs/9.x/getting-started/overview",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/getting-started/overview.md",tags:[],version:"9.x",lastUpdatedBy:"Mehrdad Amini",lastUpdatedAt:1687327943,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"Overview"},sidebar:"version-9.x/docs",previous:{title:"Installation",permalink:"/docs/9.x/getting-started/installation"},next:{title:"Requests",permalink:"/docs/9.x/getting-started/requests"}},s={},p=[{value:"The basic flow",id:"basic-flow",level:2},{value:"Sample Route Endpoint",id:"sample-route-endpoint",level:3},{value:"Sample Controller Function",id:"controller-function",level:3},{value:"Sample Action",id:"sample-action",level:3},{value:"Sample User Response",id:"sample-user-response",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#basic-flow"},"The basic flow"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sample-route-endpoint"},"Sample Route Endpoint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#controller-function"},"Controller Function")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sample-action"},"Sample Action")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sample-user-response"},"Sample User Response"))))),(0,o.kt)("h2",{id:"basic-flow"},"The basic flow"),(0,o.kt)("p",null,"When an HTTP request is received, it first hits your predefined Endpoint (each endpoint live in its own Route file)."),(0,o.kt)("h3",{id:"sample-route-endpoint"},"Sample Route Endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$router->get('hello', [\n    'uses' => 'Controller@sayHello',\n]);\n")),(0,o.kt)("p",null,"After the user makes a request to the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"[GET] www.api.apiato.com/v1/hello")," it calls the defined controller\nfunction (",(0,o.kt)("inlineCode",{parentName:"p"},"sayHello"),")."),(0,o.kt)("h3",{id:"controller-function"},"Sample Controller Function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nclass Controller extends ApiController\n{\n    public function sayHello(SayHelloRequest $request)\n    {\n            $helloMessage = Apiato::call(SayHelloAction::class);\n\n            $this->json([\n                $helloMessage\n            ]);\n    }\n}\n")),(0,o.kt)("p",null,"This function takes a Request class ",(0,o.kt)("inlineCode",{parentName:"p"},"SayHelloRequest")," to automatically checks if the user has the right access to this\nendpoint. ",(0,o.kt)("em",{parentName:"p"},"Only if the user has access, it proceeds to the function body.")),(0,o.kt)("p",null,"Then the function calls an Action (",(0,o.kt)("inlineCode",{parentName:"p"},"SayHelloAction"),") to perform the business logic."),(0,o.kt)("h3",{id:"sample-action"},"Sample Action"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nclass SayHelloAction extends Action\n{\n    public function run()\n    {\n        return 'Hello World!';\n    }\n}\n")),(0,o.kt)("p",null,"The Action can do anything then return a result (could be an Object, a String or anything)."),(0,o.kt)("p",null,"When the Action finishes its job, the controller function gets ready to build a response."),(0,o.kt)("p",null,"Json responses can be built using the helper function ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," (",(0,o.kt)("inlineCode",{parentName:"p"},"$this->json(['foo' => 'bar']);"),")."),(0,o.kt)("h3",{id:"sample-user-response"},"Sample User Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    "Hello World!"\n]\n')))}d.isMDXComponent=!0}}]);