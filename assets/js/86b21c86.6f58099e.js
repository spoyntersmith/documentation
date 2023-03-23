"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Data Caching"},i=void 0,c={unversionedId:"core-features/data-caching",id:"version-9.x/core-features/data-caching",title:"Data Caching",description:"- Enable / Disable Eloquent Query Caching",source:"@site/versioned_docs/version-9.x/core-features/data-caching.md",sourceDirName:"core-features",slug:"/core-features/data-caching",permalink:"/docs/9.x/core-features/data-caching",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/data-caching.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1679580761,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"Data Caching"},sidebar:"version-9.x/docs",previous:{title:"Requests Monitor",permalink:"/docs/9.x/core-features/requests-monitor"},next:{title:"Pagination",permalink:"/docs/9.x/core-features/pagination"}},s={},l=[{value:"Enable / Disable Eloquent Query Caching",id:"enable-disable-eloquent-query-caching",level:2},{value:"Change different caching settings",id:"change-different-caching-settings",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#enable-disable-eloquent-query-caching"},"Enable / Disable Eloquent Query Caching")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#change-different-caching-settings"},"Change different caching settings"))),(0,a.kt)("h2",{id:"enable-disable-eloquent-query-caching"},"Enable / Disable Eloquent Query Caching"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By default caching is disabled.")),(0,a.kt)("p",null,"To enable it, go to ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/repository.php")," config file and set ",(0,a.kt)("inlineCode",{parentName:"p"},"cache")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"enabled  => true"),", or set it from the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file using ",(0,a.kt)("inlineCode",{parentName:"p"},"ELOQUENT_QUERY_CACHE"),"."),(0,a.kt)("p",null,"More details can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#cache-config"},"here"),"."),(0,a.kt)("p",null,"Users can skip the query caching and request new data by passing specific parameter to the Endpoint. Checkout the Query parameters page."),(0,a.kt)("h2",{id:"change-different-caching-settings"},"Change different caching settings"),(0,a.kt)("p",null,"You can use different cache setting for each repository."),(0,a.kt)("p",null,"To set cache settings on each repository, first the caching must be enabled, second you need to set some properties on the repository class to override the default values."),(0,a.kt)("p",null,"For an example look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Containers/Countries/Data/Repositories/CountryRepository.php")," class. For more details about all the properties refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#cache-config"},"the L5 repository package documentation"),"."),(0,a.kt)("p",null,"Note: you don't need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"CacheableRepository")," trait or implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"CacheableInterface")," since they both exist on the Abstract repository class (",(0,a.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Repositories\\Repository"),")."))}d.isMDXComponent=!0}}]);