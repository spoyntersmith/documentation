"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Controllers"},l=void 0,i={unversionedId:"main-components/controllers",id:"main-components/controllers",title:"Controllers",description:"- Definition & Principles",source:"@site/docs/main-components/controllers.md",sourceDirName:"main-components",slug:"/main-components/controllers",permalink:"/docs/next/main-components/controllers",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/main-components/controllers.md",tags:[],version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1679580761,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"Controllers"},sidebar:"tutorialSidebar",previous:{title:"Routes",permalink:"/docs/next/main-components/routes"},next:{title:"Requests",permalink:"/docs/next/main-components/requests"}},s={},p=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-sample",level:3},{value:"Web Controller",id:"web-controller",level:4},{value:"API Controller",id:"api-controller",level:4},{value:"Usage from Routes Endpoint",id:"usage-from-routes-endpoint",level:4},{value:"Controller response builder helper functions",id:"controller-response-builder-helper-functions",level:3},{value:"Some functions",id:"some-of-the-functions",level:4}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code-sample"},"Code Sample")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#controller-response-builder-helper-functions"},"Controller response builder helper functions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#some-of-the-functions"},"Some of the functions"))))),(0,o.kt)("h3",{id:"definition-principles"},"Definition & Principles"),(0,o.kt)("p",null,"Read ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Controllers"},(0,o.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Controllers)")),"."),(0,o.kt)("h3",{id:"rules"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All API Controller MUST extend from ",(0,o.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Controllers\\ApiController"),"."),(0,o.kt)("li",{parentName:"ul"},"All Web Controller MUST extend from ",(0,o.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Controllers\\WebController"),"."),(0,o.kt)("li",{parentName:"ul"},"Controllers should only call the the ",(0,o.kt)("inlineCode",{parentName:"li"},"run")," method of Actions."),(0,o.kt)("li",{parentName:"ul"},"Controllers should pass the Request object to the Action instead of passing data from the request.")),(0,o.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - UI\n                    - API\n                        - Controllers\n                            - Controller.php\n                    - WEB\n                        - Controllers\n                            - Controller.php\n")),(0,o.kt)("h3",{id:"code-sample"},"Code Sample"),(0,o.kt)("h4",{id:"web-controller"},"Web Controller"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class Controller extends WebController\n{\n    public function sayWelcome()\n    {\n        return view('welcome');\n    }\n}\n")),(0,o.kt)("h4",{id:"api-controller"},"API Controller"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class Controller extends ApiController\n{\n    public function registerUser(RegisterUserRequest $request)\n    {\n        $user = app(RegisterUserAction::class)->run($request);\n        return $this->transform($user, UserTransformer::class);\n    }\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In case you want to handle the same Action differently based on the UI type (e.g. API, Web, CLI) you can set the\nUI on Action with ",(0,o.kt)("inlineCode",{parentName:"p"},"setUI()")," method."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-php"},"    app(WebLogoutAction::class)->setUI('Web')->run();\n")),(0,o.kt)("p",{parentName:"admonition"},"and get the UI in your Action with ",(0,o.kt)("inlineCode",{parentName:"p"},"getUI()")," method."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-php"},"    $this->getUI();\n"))),(0,o.kt)("h4",{id:"usage-from-routes-endpoint"},"Usage from Routes Endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"Route::post('login', [Controller::class, 'loginUser']);\n")),(0,o.kt)("h3",{id:"controller-response-builder-helper-functions"},"Controller response builder helper functions"),(0,o.kt)("p",null,"Many helper function are there to help you build your response faster, those helpers exist in\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"vendor/apiato/core/Traits/ResponseTrait.php"),"."),(0,o.kt)("h4",{id:"some-of-the-functions"},"Some functions"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"transform"),"\nThis is the most useful function which you will be using in most cases."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First required parameter accepts data as object or Collection of objects."),(0,o.kt)("li",{parentName:"ul"},"Second required parameter is the transformer object"),(0,o.kt)("li",{parentName:"ul"},"Third optional parameter take the includes that should be returned by the response, ",(0,o.kt)("em",{parentName:"li"},"($availableIncludes and\n$defaultIncludes in the transformer class)"),"."),(0,o.kt)("li",{parentName:"ul"},"Fourth optional parameter accepts metadata to be injected in the response.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// $user is a User Object\nreturn $this->transform($user, UserTransformer::class);\n\n// $orders is a Collection of Order Objects\nreturn $this->transform($orders, OrderTransformer::class, ['products', 'recipients', 'store', 'invoice']);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"withMeta"),"\nThis function allows including metadata in the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$metaData = ['total_credits', 10000];\n\nreturn $this->withMeta($metaData)->transform($receipt, ReceiptTransformer::class);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"json"),"\nThis function allows passing array data to be represented as json."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"return $this->json([\n    'foo': 'bar'\n])\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Other functions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"accepted"),(0,o.kt)("li",{parentName:"ul"},"deleted"),(0,o.kt)("li",{parentName:"ul"},"noContent"),(0,o.kt)("li",{parentName:"ul"},"// Some functions might not be documented, so refer to the ",(0,o.kt)("inlineCode",{parentName:"li"},"vendor/apiato/core/Traits/ResponseTrait.php")," and see the\npublic functions.")))}m.isMDXComponent=!0}}]);