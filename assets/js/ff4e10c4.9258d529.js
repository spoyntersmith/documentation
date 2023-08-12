"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Routes"},i=void 0,l={unversionedId:"main-components/routes",id:"version-11.x/main-components/routes",title:"Routes",description:"- Definition & Principles",source:"@site/versioned_docs/version-11.x/main-components/routes.md",sourceDirName:"main-components",slug:"/main-components/routes",permalink:"/docs/main-components/routes",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/main-components/routes.md",tags:[],version:"11.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1691839128,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Routes"},sidebar:"version-11.x/docs",previous:{title:"Localization",permalink:"/docs/additional-features/localization"},next:{title:"Controllers",permalink:"/docs/main-components/controllers"}},p={},u=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-sample",level:3},{value:"Web &amp; API route",id:"web--api-route",level:4},{value:"Protected Route (API)",id:"protected-route-api",level:4},{value:"Protect your Endpoints:",id:"protect-your-endpoints",level:2},{value:"Difference between Public &amp; Private routes files",id:"difference-between-public-private-route-files",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code-sample"},"Code Sample")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#protect-your-endpoints"},"Protect your Endpoints")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#difference-between-public-private-route-files"},"Difference between Public & Private routes files"))),(0,o.kt)("h3",{id:"definition-principles"},"Definition & Principles"),(0,o.kt)("p",null,"Read ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Routes"},(0,o.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Routes)")),"."),(0,o.kt)("h3",{id:"rules"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"API Route files MUST be named according to their API's version, exposure and functionality. e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateOrder.v1.public.php"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"FulfillOrder.v2.public.php"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelOrder.v1.private.php"),"...")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Web Route files are pretty similar to API web files, but they can be named anything."))),(0,o.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - UI\n                    - API\n                       - Routes\n                          - CreateItem.v1.public.php\n                          - DeleteItem.v1.public.php\n                          - CreateItem.v2.public.php\n                          - DeleteItem.v1.private.php\n                          - ApproveItem.v1.private.php\n                          - ...\n                    - WEB\n                       - Routes\n                          - main.php\n                          - ...\n")),(0,o.kt)("h3",{id:"code-sample"},"Code Sample"),(0,o.kt)("h4",{id:"web--api-route"},"Web & API route"),(0,o.kt)("p",null,"Routes are defined exactly like the way you defined them in Laravel."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"Route::post('hello', [Controller::class, 'sayHello']);\n")),(0,o.kt)("h4",{id:"protected-route-api"},"Protected Route (API)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"Route::get('users', [Controller::class, 'listAllUsers'])\n    ->middleware(['auth:api']);\n")),(0,o.kt)("h2",{id:"protect-your-endpoints"},"Protect your Endpoints:"),(0,o.kt)("p",null,"Checkout the ",(0,o.kt)("a",{parentName:"p",href:"../core-features/authorization"},"Authorization")," Page."),(0,o.kt)("h2",{id:"difference-between-public-private-route-files"},"Difference between Public & Private routes files"),(0,o.kt)("p",null,"Apiato has 2 types of endpoint, Public (External) mainly for third parties clients, and Private (Internal) for your own Apps. This will help to generate separate documentations for each and keep your internal API private."))}d.isMDXComponent=!0}}]);