"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?o.createElement(h,r(r({ref:t},m),{},{components:n})):o.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={title:"Postman Environment"},r=void 0,l={unversionedId:"miscellaneous/postman",id:"version-9.x/miscellaneous/postman",title:"Postman Environment",description:"- Apiato Postman API & Environment",source:"@site/versioned_docs/version-9.x/miscellaneous/postman.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/postman",permalink:"/docs/9.x/miscellaneous/postman",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/miscellaneous/postman.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1679580761,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"Postman Environment"},sidebar:"version-9.x/docs",previous:{title:"Containers Installer",permalink:"/docs/9.x/miscellaneous/container-installer"},next:{title:"Upgrade Guide",permalink:"/docs/9.x/upgrade-guide"}},s={},p=[{value:"Apiato Postman API &amp; Environment",id:"apiato-postman-api--environment",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Configure Apiato",id:"configure-apiato",level:4},{value:"Download &amp; Install Postman",id:"download--install-postman",level:4},{value:"Add Apiato Environment &amp; Collection to Postman",id:"add-apiato-environment--collection-to-postman",level:3},{value:"Using the Postman Apiato API Collection",id:"using-the-postman-apiato-api-collection",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#apiato-postman-api--environment"},"Apiato Postman API & Environment"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#add-apiato-environment--collection-to-postman"},"Add Apiato Environment & Collection to Postman ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#using-the-postman-apiato-api-collection"},"Using the Postman Apiato API Collection"))))),(0,a.kt)("h2",{id:"apiato-postman-api--environment"},"Apiato Postman API & Environment"),(0,a.kt)("p",null,"If you use Postman to build and explore your API's you will find this predefined Apiato Postman collection a great\nstart to your new Apiato project. Simply download both the Environment and Collection to Postman to get started."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h4",{id:"configure-apiato"},"Configure Apiato"),(0,a.kt)("p",null,"It's important that you run the following shell commands to migrate and seed your database. The next command configures\na Laravel Passport client. Finally, you need to run the last command to grant the Admin user with full permission to\naccess all routes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan migrate:refresh --seed\nphp artisan passport:client --password\nphp artisan apiato:permissions:toRole admin\n")),(0,a.kt)("p",null,"Be sure to copy and paste your new ",(0,a.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"client_secret")," into the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file. Like so..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"CLIENT_WEB_ADMIN_ID={CLIENT_ID}\nCLIENT_WEB_ADMIN_SECRET={CLIENT_SECRET}\n\nCLIENT_MOBILE_ADMIN_ID={CLIENT_ID}\nCLIENT_MOBILE_ADMIN_SECRET={CLIENT_SECRET}\n")),(0,a.kt)("p",null,"The above steps will ensure you have a functioning Apiato API environment to explore with Postman."),(0,a.kt)("h4",{id:"download--install-postman"},"Download & Install Postman"),(0,a.kt)("p",null,"Visit the Postman website and download the application."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/downloads/"},"Download Postman")),(0,a.kt)("h3",{id:"add-apiato-environment--collection-to-postman"},"Add Apiato Environment & Collection to Postman"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(306).Z},"Download Apiato Environment & Collection")),(0,a.kt)("p",null,"Steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open Postman"),(0,a.kt)("li",{parentName:"ul"},'Click on "',(0,a.kt)("strong",{parentName:"li"},"import"),'" button ',(0,a.kt)("strong",{parentName:"li"},"top left")," of Postman application."),(0,a.kt)("li",{parentName:"ul"},'Click on "',(0,a.kt)("strong",{parentName:"li"},"Choose files"),'". Select both the Environment and Collection JSON files and click add.'),(0,a.kt)("li",{parentName:"ul"},'Select "',(0,a.kt)("strong",{parentName:"li"},"Apiato Environment"),'" from the Environment dropdown list on the ',(0,a.kt)("strong",{parentName:"li"},"top right")," of the Postman Application.")),(0,a.kt)("h3",{id:"using-the-postman-apiato-api-collection"},"Using the Postman Apiato API Collection"),(0,a.kt)("p",null,"The first thing you need to do to use the Apiato endpoints is to log in to your Apiato API."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"Apiato API Collection")," in the left menu."),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Authentication")," folder."),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Login")," endpoint."),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Send")," button.")),(0,a.kt)("p",null,"The response will return a body with the API access token. Normally you would have to manually add this in a header\nwith each request using ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer TOKEN"),". This however is automatically done for you."),(0,a.kt)("p",null,"From this point you can now access all endpoints using the ",(0,a.kt)("strong",{parentName:"p"},"Super Admin")," role."),(0,a.kt)("p",null,"If you would like to test logging into your application with different users then switch to the ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," tab on the\n",(0,a.kt)("inlineCode",{parentName:"p"},"login")," endpoint and update the credentials."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "email": "admin@admin.com",\n    "password": "admin"\n}\n')))}c.isMDXComponent=!0},306:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/Apiato_API.postman-a6b8790494b2c6f970740ef981206e5d.zip"}}]);