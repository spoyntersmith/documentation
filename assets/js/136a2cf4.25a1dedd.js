"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1367],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3795:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Hash ID"},i=void 0,l={unversionedId:"core-features/hash-id",id:"version-9.x/core-features/hash-id",title:"Hash ID",description:"- Enable Hash ID",source:"@site/versioned_docs/version-9.x/core-features/hash-id.md",sourceDirName:"core-features",slug:"/core-features/hash-id",permalink:"/docs/9.x/core-features/hash-id",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/hash-id.md",tags:[],version:"9.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1691839128,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Hash ID"},sidebar:"version-9.x/docs",previous:{title:"Default Endpoints",permalink:"/docs/9.x/core-features/default-endpoints"},next:{title:"Localization",permalink:"/docs/9.x/core-features/localization"}},s={},p=[{value:"Enable Hash ID",id:"enable-hash-id",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"From Apiato Version 7.4.*",id:"from-apiato-version-74",level:3},{value:"Testing",id:"testing",level:2},{value:"for Parameter ID&#39;s",id:"for-parameter-ids",level:3},{value:"for URL ID&#39;s",id:"for-url-ids",level:3},{value:"Availability",id:"availability",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enable-hash-id"},"Enable Hash ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#testing"},"Testing"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#for-parameter-ids"},"for Parameter ID's")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#for-url-ids"},"for URL ID's")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#availability"},"Availability"))),(0,r.kt)("p",null,"Hashing your internal ID's, is a very helpful feature for security reasons (to prevent some hack attacks) and business reasons (to hide the real total records from your competitors)."),(0,r.kt)("h2",{id:"enable-hash-id"},"Enable Hash ID"),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"HASH_ID=true")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("p",null,"Also, with the feature make sure to always use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getHashedKey()")," on any model, whenever you need to return an ID (mainly from transformers) weather hashed ID or not."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"\n'id' => $user->getHashedKey(),\n\n")),(0,r.kt)("p",null,"Note: if the feature is set to false ",(0,r.kt)("inlineCode",{parentName:"p"},"HASH_ID=false")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"getHashedKey()")," will return the normal ID."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"There are 2 ways an ID's can be passed to your system via the API:"),(0,r.kt)("p",null,"In URL example: ",(0,r.kt)("inlineCode",{parentName:"p"},"www.apiato.test/items/abcdef"),"."),(0,r.kt)("p",null,"In parameters example: ","[GET]"," or ","[POST]"," ",(0,r.kt)("inlineCode",{parentName:"p"},"www.apiato.test/items?id=abcdef"),"."),(0,r.kt)("p",null,"in both cases you will need to inform your API about what's coming form the Request class."),(0,r.kt)("p",null,"Checkout the ",(0,r.kt)("a",{parentName:"p",href:".././main-components/requests"},"Requests")," page. After setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"$decode")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"$urlParameters")," properties on your Request class, the ID will be automatically decoded for you, to apply validation rules on it or/and use it from your controller (",(0,r.kt)("inlineCode",{parentName:"p"},"$request->id")," will return the decoded ID)."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You can change the default length and characters used in the ID from the config file ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/hashids.php"),"or in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file by editing the ",(0,r.kt)("inlineCode",{parentName:"p"},"HASH_ID_LENGTH")," value."),(0,r.kt)("h3",{id:"from-apiato-version-74"},"From Apiato Version 7.4.*"),(0,r.kt)("p",null,"You can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"HASH_ID_KEY")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file to any random string. You can generate this from any of the online random string generators, or run ",(0,r.kt)("inlineCode",{parentName:"p"},"head /dev/urandom | tr -dc 'A-Za-z0-9!\"#$%&'\\''()*+,-./:;<=>?@[\\]^_{|}~' | head -c 32  ; echo")," on the linux commandline. Apiato defaults to the ",(0,r.kt)("inlineCode",{parentName:"p"},"APP_KEY")," should this not be set."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"HASH_ID_KEY")," acts as the salt during hashing of the ID. This should never be changed in production as it renders all previously generated IDs quite difficult to decode and recover."),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"In your tests you must hash the ID's before making the calls, because if you tell your Request class to decode an ID for you, it will throw an exception when the ID is not encoded."),(0,r.kt)("h3",{id:"for-parameter-ids"},"for Parameter ID's"),(0,r.kt)("p",null,"Always use ",(0,r.kt)("inlineCode",{parentName:"p"},"getHashedKey()")," on your models when you want to get the ID"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$data = [\n    'roles_ids' => [\n        $role1->getHashedKey(),\n        $role2->getHashedKey(),\n    ],\n    'user_id'   => $randomUser->getHashedKey(),\n];\n$response = $this->makeCall($data);\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Or you can do this manually ",(0,r.kt)("inlineCode",{parentName:"em"},"Hashids::encode($id);"),". ")),(0,r.kt)("h3",{id:"for-url-ids"},"for URL ID's"),(0,r.kt)("p",null,"You can use this helper function ",(0,r.kt)("inlineCode",{parentName:"p"},"injectId($id, $skipEncoding = false, $replace = '{id}')"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$response = $this->injectId($admin->id)->makeCall();\n")),(0,r.kt)("p",null,"More details on the ",(0,r.kt)("a",{parentName:"p",href:".././miscellaneous/tests-helpers"},"Tests Helpers")," page."),(0,r.kt)("h2",{id:"availability"},"Availability"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apiato\\Core\\Traits\\HashIdTrait")," to any model or class, in order to have the ",(0,r.kt)("inlineCode",{parentName:"p"},"encode")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"decode")," functions."),(0,r.kt)("p",null,"By default, you have access to these functions ",(0,r.kt)("inlineCode",{parentName:"p"},"$this->encode($id)")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"$this->decode($id)")," from all your Tests class and Controllers."))}c.isMDXComponent=!0}}]);