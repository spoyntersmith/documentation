"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8132],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Data Caching"},o=void 0,c={unversionedId:"core-features/data-caching",id:"core-features/data-caching",title:"Data Caching",description:"- Enable / Disable Eloquent Query Caching",source:"@site/docs/core-features/data-caching.md",sourceDirName:"core-features",slug:"/core-features/data-caching",permalink:"/docs/next/core-features/data-caching",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/core-features/data-caching.md",tags:[],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1691839128,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Data Caching"},sidebar:"tutorialSidebar",previous:{title:"Rate Limiting",permalink:"/docs/next/core-features/rate-limiting"},next:{title:"Pagination",permalink:"/docs/next/core-features/pagination"}},l={},s=[{value:"Enable / Disable Eloquent Query Caching",id:"enable-disable-eloquent-query-caching",level:3},{value:"Change different caching settings",id:"change-different-caching-settings",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enable-disable-eloquent-query-caching"},"Enable / Disable Eloquent Query Caching")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#change-different-caching-settings"},"Change different caching settings"))),(0,r.kt)("h3",{id:"enable-disable-eloquent-query-caching"},"Enable / Disable Eloquent Query Caching"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This feature is ",(0,r.kt)("strong",{parentName:"p"},"disabled")," By default. ")),(0,r.kt)("p",null,"To enable it, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/repository.php")," config file and set ",(0,r.kt)("inlineCode",{parentName:"p"},"cache")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled  => true"),", or set it from the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file using ",(0,r.kt)("inlineCode",{parentName:"p"},"ELOQUENT_QUERY_CACHE"),"."),(0,r.kt)("p",null,"More details can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#cache-config"},"here"),"."),(0,r.kt)("p",null,"Users can skip the query caching and request new data by passing specific parameter to the Endpoint. Checkout its documentation ",(0,r.kt)("a",{parentName:"p",href:"../core-features/query-parameters#skip-caching"},"here"),"."),(0,r.kt)("h3",{id:"change-different-caching-settings"},"Change different caching settings"),(0,r.kt)("p",null,"You can use different cache setting for each repository."),(0,r.kt)("p",null,"To set cache settings on each repository, first the caching must be enabled, second you need to set some properties on the repository class to override the default values."),(0,r.kt)("p",null,"For more details about all the properties refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#cache-config"},"the L5 repository package documentation"),"."),(0,r.kt)("p",null,"Note: you don't need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheableRepository")," trait or implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheableInterface")," since they both exist on the Abstract repository class (",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Repositories\\Repository"),")."))}d.isMDXComponent=!0}}]);