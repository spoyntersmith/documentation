"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Samples"},l=void 0,i={unversionedId:"getting-started/samples",id:"version-10.x/getting-started/samples",title:"Samples",description:"* The basic flow",source:"@site/versioned_docs/version-10.x/getting-started/samples.md",sourceDirName:"getting-started",slug:"/getting-started/samples",permalink:"/docs/10.x/getting-started/samples",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/getting-started/samples.md",tags:[],version:"10.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1691839128,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Samples"},sidebar:"version-10.x/docs",previous:{title:"Architecture",permalink:"/docs/10.x/getting-started/software-architectural-patterns"},next:{title:"Requests",permalink:"/docs/10.x/getting-started/requests"}},s={},p=[{value:"The basic flow",id:"basic-flow",level:3},{value:"Sample Route Endpoint",id:"sample-route-endpoint",level:3},{value:"Sample Controller Function",id:"controller-function",level:3},{value:"Sample Action",id:"sample-action",level:3},{value:"Sample User Response",id:"sample-user-response",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#basic-flow"},"The basic flow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#sample-route-endpoint"},"Sample Route Endpoint")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#controller-function"},"Controller Function")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#sample-action"},"Sample Action")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#sample-user-response"},"Sample User Response"))),(0,a.kt)("h3",{id:"basic-flow"},"The basic flow"),(0,a.kt)("p",null,"When an HTTP request is received, it first hits your predefined Endpoint (each endpoint live in its own Route file)."),(0,a.kt)("h3",{id:"sample-route-endpoint"},"Sample Route Endpoint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"Route::get('/hello', [Controller::class, 'sayHello']);\n")),(0,a.kt)("p",null,"After the user makes a request to the endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"[GET] www.api.apiato.com/v1/hello")," it calls the defined controller\nfunction (",(0,a.kt)("inlineCode",{parentName:"p"},"sayHello"),")."),(0,a.kt)("h3",{id:"controller-function"},"Sample Controller Function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class Controller extends ApiController\n{\n    public function sayHello(SayHelloRequest $request)\n    {\n            $helloMessage = app(SayHelloAction::class)->run();\n\n            $this->json([\n                $helloMessage\n            ]);\n    }\n}\n")),(0,a.kt)("p",null,"This function takes a Request class ",(0,a.kt)("inlineCode",{parentName:"p"},"SayHelloRequest")," to automatically checks if the user has the right access to this\nendpoint. ",(0,a.kt)("em",{parentName:"p"},"Only if the user has access, it proceeds to the function body.")),(0,a.kt)("p",null,"Then the function calls an Action (",(0,a.kt)("inlineCode",{parentName:"p"},"SayHelloAction"),") to perform the business logic."),(0,a.kt)("h3",{id:"sample-action"},"Sample Action"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class SayHelloAction extends Action\n{\n    public function run()\n    {\n        return 'Hello World!';\n    }\n}\n")),(0,a.kt)("p",null,"The Action can do anything then return a result (could be an Object, a String or anything)."),(0,a.kt)("p",null,"When the Action finishes its job, the controller function gets ready to build a response."),(0,a.kt)("p",null,"Json responses can be built using the helper function ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," (",(0,a.kt)("inlineCode",{parentName:"p"},"$this->json(['foo' => 'bar']);"),")."),(0,a.kt)("h3",{id:"sample-user-response"},"Sample User Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    "Hello World!"\n]\n')))}d.isMDXComponent=!0}}]);