"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={title:"API Versioning"},o=void 0,l={unversionedId:"core-features/api-versioning",id:"version-9.x/core-features/api-versioning",title:"API Versioning",description:"- How it works",source:"@site/versioned_docs/version-9.x/core-features/api-versioning.md",sourceDirName:"core-features",slug:"/core-features/api-versioning",permalink:"/docs/9.x/core-features/api-versioning",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/api-versioning.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1679580761,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"API Versioning"},sidebar:"version-9.x/docs",previous:{title:"System Settings",permalink:"/docs/9.x/core-features/system-settings"},next:{title:"Validation",permalink:"/docs/9.x/core-features/validation"}},p={},s=[{value:"How it works",id:"how-it-works",level:3},{value:"Version the API in header instead of URL",id:"version-the-api-in-header-instead-of-url",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-it-works"},"How it works")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-the-api-in-header-instead-of-url"},"Versioning API in header instead of URL"))),(0,i.kt)("p",null,"Since Laravel does not support API versioning, ",(0,i.kt)("strong",{parentName:"p"},"apiato")," provide a very easy way to implement versioning for your API."),(0,i.kt)("h3",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Create:")),(0,i.kt)("p",null,"When creating a new API endpoint, specify the version number in the route file name following this naming format ",(0,i.kt)("inlineCode",{parentName:"p"},"{endpoint-name}.{version-number}.{documentation-name}.php"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MakeOrder.v1.public.php")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MakeOrder.v2.public.php")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ListOrders.v1.private.php"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Use:")),(0,i.kt)("p",null,"Automatically the endpoint inside that route file will be accessible by adding the version number to the URL."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http://api.apiato.test/v1/register")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http://api.apiato.test/v1/orders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http://api.apiato.test/v2/stores/123"))),(0,i.kt)("h2",{id:"version-the-api-in-header-instead-of-url"},"Version the API in header instead of URL"),(0,i.kt)("p",null,"First remove the URL version prefix:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Edit ",(0,i.kt)("inlineCode",{parentName:"li"},"app/Ship/Configs/apiato.php"),", set prefix to ",(0,i.kt)("inlineCode",{parentName:"li"},"'enable_version_prefix' => 'false',"),"."),(0,i.kt)("li",{parentName:"ol"},"Implement the Header versioning anyway you prefer. (this is not implemented in Apiato yet. ",(0,i.kt)("em",{parentName:"li"},"Consider a contribution"),").")))}d.isMDXComponent=!0}}]);