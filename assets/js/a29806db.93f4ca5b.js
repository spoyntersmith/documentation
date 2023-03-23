"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4365],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const i={title:"Requirements",slug:"/"},o=void 0,l={unversionedId:"getting-started/requirements",id:"version-9.x/getting-started/requirements",title:"Requirements",description:"Requirements",source:"@site/versioned_docs/version-9.x/getting-started/requirements.md",sourceDirName:"getting-started",slug:"/",permalink:"/docs/9.x/",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/getting-started/requirements.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1679580761,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"Requirements",slug:"/"},sidebar:"version-9.x/docs",next:{title:"Installation",permalink:"/docs/9.x/getting-started/installation"}},s={},m=[{value:"Requirements",id:"requirements",level:3}],p={toc:m},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads/"},"GIT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.php.net/"},"PHP")," >= 7.2 ",(0,a.kt)("em",{parentName:"li"},"(7.4 is recommended)")),(0,a.kt)("li",{parentName:"ul"},"PHP Extensions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"OpenSSL PHP Extension"),(0,a.kt)("li",{parentName:"ul"},"PDO PHP Extension"),(0,a.kt)("li",{parentName:"ul"},"Mbstring PHP Extension"),(0,a.kt)("li",{parentName:"ul"},"Tokenizer PHP Extension"),(0,a.kt)("li",{parentName:"ul"},"BCMath PHP Extension ",(0,a.kt)("em",{parentName:"li"},"(required when the Hash ID feature is enabled)")),(0,a.kt)("li",{parentName:"ul"},"Intl Extension ",(0,a.kt)("em",{parentName:"li"},"(required when you use the Localization Container)")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://getcomposer.org/download/"},"Composer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node")," ",(0,a.kt)("em",{parentName:"li"},"(required for the API Docs generator feature)")),(0,a.kt)("li",{parentName:"ul"},"Web Server ",(0,a.kt)("em",{parentName:"li"},"(example: ",(0,a.kt)("a",{parentName:"em",href:"https://www.nginx.com/"},"Nginx"),")")),(0,a.kt)("li",{parentName:"ul"},"Cache Engine ",(0,a.kt)("em",{parentName:"li"},"(example: ",(0,a.kt)("a",{parentName:"em",href:"http://redis.io"},"Redis"),")")),(0,a.kt)("li",{parentName:"ul"},"Database Engine ",(0,a.kt)("em",{parentName:"li"},"(example: ",(0,a.kt)("a",{parentName:"em",href:"https://www.mysql.com/"},"MySQL"),")")),(0,a.kt)("li",{parentName:"ul"},"Queues Engine ",(0,a.kt)("em",{parentName:"li"},"(example: ",(0,a.kt)("a",{parentName:"em",href:"https://beanstalkd.github.io/"},"Beanstalkd"),")"))))}c.isMDXComponent=!0}}]);