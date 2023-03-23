"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6050],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,f=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:n,i[1]=d;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9493:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"Admin Dashboard"},i=void 0,d={unversionedId:"core-features/admin-dashboard",id:"version-9.x/core-features/admin-dashboard",title:"Admin Dashboard",description:"- The provided Admin route",source:"@site/versioned_docs/version-9.x/core-features/admin-dashboard.md",sourceDirName:"core-features",slug:"/core-features/admin-dashboard",permalink:"/docs/9.x/core-features/admin-dashboard",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/admin-dashboard.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1679580761,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"Admin Dashboard"},sidebar:"version-9.x/docs",previous:{title:"Useful Commands",permalink:"/docs/9.x/core-features/useful-commands"},next:{title:"Profiler",permalink:"/docs/9.x/core-features/profiler"}},l={},p=[{value:"The provided Admin route",id:"the-provided-admin-route",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Change default Admin credentials",id:"change-default-admin-credentials",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-provided-admin-route"},"The provided Admin route")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-it-works"},"How it works")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#change-default-admin-credentials"},"Change default Admin credentials"))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Apiato does not recommend serving HTML pages. Instead, you should build your own Frontend App completely isolated from the Backend code.")),(0,n.kt)("h2",{id:"the-provided-admin-route"},"The provided Admin route"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://admin.apiato.test/dashboard"},"http://admin.apiato.test/dashboard"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://admin.apiato.test/login"},"http://admin.apiato.test/login"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://admin.apiato.test/logout"},"http://admin.apiato.test/logout")))),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"Visiting ",(0,n.kt)("a",{parentName:"p",href:"http://admin.apiato.test/dashboard"},"http://admin.apiato.test/dashboard")," will redirect you to a login page for admins."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"the default credentials are:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"email: ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"mailto:admin@admin.com"},"admin@admin.com")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"password: ",(0,n.kt)("strong",{parentName:"p"},"admin"))))),(0,n.kt)("p",null,"It is up to you to build and customize your admin dashboard however you prefer."),(0,n.kt)("h2",{id:"change-default-admin-credentials"},"Change default Admin credentials"),(0,n.kt)("p",null,"you can change these default values from the seeder class in the Authorization container: ",(0,n.kt)("inlineCode",{parentName:"p"},"app/Containers/Authorization/Data/Seeders/RolesAndPermissionsSeeder.php"),"."))}m.isMDXComponent=!0}}]);