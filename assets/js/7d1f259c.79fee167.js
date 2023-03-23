"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Architecture"},i=void 0,l={unversionedId:"getting-started/software-architectural-patterns",id:"version-11.x/getting-started/software-architectural-patterns",title:"Architecture",description:"* Porto Introduction",source:"@site/versioned_docs/version-11.x/getting-started/software-architectural-patterns.md",sourceDirName:"getting-started",slug:"/getting-started/software-architectural-patterns",permalink:"/docs/getting-started/software-architectural-patterns",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/getting-started/software-architectural-patterns.md",tags:[],version:"11.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1679580761,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"Architecture"},sidebar:"version-11.x/docs",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Samples",permalink:"/docs/getting-started/samples"}},s={},c=[{value:"Porto SAP",id:"porto",level:2},{value:"Introduction",id:"introduction",level:3},{value:"About Porto",id:"porto",level:3},{value:"Create a custom Container",id:"porto-new-container",level:3},{value:"Using the Code Generator:",id:"porto-new-container-code-generator",level:4},{value:"Container Conventions",id:"containter-conventions",level:4}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#introduction"},"Porto Introduction"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#introduction"},"The Containers Layer"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#porto"},"Container")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#porto"},"Section")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#introduction"},"The Ship Layer")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#porto-new-container"},"Create a custom Container"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#porto-new-container-code-generator"},"Using the Code Generator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#containter-conventions"},"Container Conventions"))))),(0,a.kt)("h2",{id:"porto"},"Porto SAP"),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto"},"Porto")," is the default and recommended architecture for building apps on Apiato."),(0,a.kt)("p",null,"Apiato also supports the popular MVC architecture (with a little modifications). The Apiato features are written using Porto, but can be used by any architecture."),(0,a.kt)("h3",{id:"porto"},"About Porto"),(0,a.kt)("p",null,"Porto is an architecture that consists of 2 layers the ",(0,a.kt)("strong",{parentName:"p"},"Containers")," layer and ",(0,a.kt)("strong",{parentName:"p"},"Ship")," layer."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Mahmoudz/Porto#2-containers-layer"},(0,a.kt)("strong",{parentName:"a"},"The Containers layer"))," holds all your application business logic code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Mahmoudz/Porto#1-ship-layer"},(0,a.kt)("strong",{parentName:"a"},"The Ship layer"))," holds the infrastructure code (your shared code between all Containers).")),(0,a.kt)("p",null,"The Containers layer consists of ",(0,a.kt)("strong",{parentName:"p"},"Containers"),". These containers are grouped into isolated ",(0,a.kt)("strong",{parentName:"p"},"Sections"),", to easily move them around."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Mahmoudz/Porto#Containers"},(0,a.kt)("strong",{parentName:"a"},"A Container"))," can be a ",(0,a.kt)("strong",{parentName:"li"},"feature"),", or can be a wrapper around a RESTful API resource, or anything else. A container is allowed to depend on other containers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Mahmoudz/Porto#Sections"},(0,a.kt)("strong",{parentName:"a"},"A Section"))," (is a group of related containers), it can be ",(0,a.kt)("strong",{parentName:"li"},"service")," ",(0,a.kt)("em",{parentName:"li"},"(micro or bigger)"),", or a sub-system within the main system, or antyhing else. A Section is not allowed to directly communicate with another service, except via Events or Commands.")),(0,a.kt)("p",null,"The default Apiato Sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The App Section"),": is the only default section Apiato provides, it contains all the default containers. You can create additional sections anytime, and rename them to anything you want. (ex: Inventory Section, Shipping Section, Order Section, Payment Section...)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The Vendor"),": is a special Section, it only contains installed and reusable Containers. Similar to the vendor directory at the root. Any Section is allowed to depend on the Vendor Section.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Spending 30 minutes, reading the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto"},"Porto Document")," before getting started, is a great\ninvestment of time."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"porto-new-container"},"Create a custom Container"),(0,a.kt)("h4",{id:"porto-new-container-code-generator"},"Using the Code Generator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"php artisan apiato:generate:container\n")),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"../core-features/code-generator"},"code generator")," page for more details."),(0,a.kt)("h4",{id:"containter-conventions"},"Container Conventions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Containers name SHOULD start with Capital. Use CamelCase to rename Containers."),(0,a.kt)("li",{parentName:"ul"},'Namespace should be the same as the container name, (if container name is "Printer" the namespace should be\n',(0,a.kt)("inlineCode",{parentName:"li"},"App\\Containers\\SectionName\\Printer"),")."),(0,a.kt)("li",{parentName:"ul"},"Container MAY be named anything, however a good practice is to name it to its most important Model name.\n",(0,a.kt)("em",{parentName:"li"},"Example: If the User Story is (User can create a Store and Store can have Items) then we you could have 3\nContainers (User, Store and Item)."))))}m.isMDXComponent=!0}}]);