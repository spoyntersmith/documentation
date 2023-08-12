"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Exceptions"},o=void 0,l={unversionedId:"main-components/exceptions",id:"version-10.x/main-components/exceptions",title:"Exceptions",description:"* Definition & Principles",source:"@site/versioned_docs/version-10.x/main-components/exceptions.md",sourceDirName:"main-components",slug:"/main-components/exceptions",permalink:"/docs/10.x/main-components/exceptions",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/main-components/exceptions.md",tags:[],version:"10.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1691839128,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Exceptions"},sidebar:"version-10.x/docs",previous:{title:"Transformers",permalink:"/docs/10.x/main-components/transformers"},next:{title:"Sub Actions",permalink:"/docs/10.x/main-components/subactions"}},p={},s=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Demo Exception",id:"demo-exception",level:4},{value:"Usage from anywhere",id:"usage-from-anywhere",level:4},{value:"Usage with errors",id:"usage-with-errors",level:4},{value:"Usage with errors and localization",id:"usage-with-errors-and-localization",level:4},{value:"Usage with Log for Debugging",id:"usage-with-log-for-debugging",level:4},{value:"Usage and overriding the default",id:"usage-and-overriding-the-default",level:4}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples"))),(0,a.kt)("h3",{id:"definition-principles"},"Definition & Principles"),(0,a.kt)("p",null,"Read ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Exceptions"},(0,a.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Exceptions)")),"."),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All Exceptions MUST extend ",(0,a.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Exceptions\\Exception"),"."),(0,a.kt)("li",{parentName:"ul"},"Shared (general) Exceptions between all Containers SHOULD be created in the ",(0,a.kt)("strong",{parentName:"li"},"Exceptions Ship")," folder (",(0,a.kt)("inlineCode",{parentName:"li"},"app/Ship/Exceptions/*"),")."),(0,a.kt)("li",{parentName:"ul"},"Every Exception SHOULD have two properties ",(0,a.kt)("inlineCode",{parentName:"li"},"code")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"message"),". You can override those values while throwing the error.")),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - App\n    - Containers\n        - {section-name}\n            - {container-name}\n                - Exceptions\n                    - AccountFailedException.php\n                    - ...\n\n    - Ship\n        - Exceptions\n            - CreateResourceFailedException.php\n            - NotFoundException.php\n            - ...\n")),(0,a.kt)("h3",{id:"code-samples"},"Code Samples"),(0,a.kt)("h4",{id:"demo-exception"},"Demo Exception"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class DemoException extends Exception\n{\n    public $code = Response::HTTP_CONFLICT;\n    public $message = 'This is a demo exception.';\n}\n")),(0,a.kt)("h4",{id:"usage-from-anywhere"},"Usage from anywhere"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"throw new AccountFailedException();\n")),(0,a.kt)("h4",{id:"usage-with-errors"},"Usage with errors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"throw (new AccountFailedException())->withErrors(['email' => 'Email already in use']);\nthrow (new AccountFailedException())->withErrors(['email' => ['Email already in use', 'Another message']]);\n")),(0,a.kt)("h4",{id:"usage-with-errors-and-localization"},"Usage with errors and localization"),(0,a.kt)("p",null,"For localization, you can use the ",(0,a.kt)("a",{parentName:"p",href:"../additional-features/apiato-containers/localization"},"Localization Container")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// translation strings are automatically translated if the translations are found.\nthrow (new AccountFailedException())->withErrors(['email' => 'appSection@user::exceptions.email-taken']);\n")),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "The exception error message.",\n  "errors": {\n    "email": [\n      "The email has already been taken."\n    ]\n  }\n}\n')),(0,a.kt)("h4",{id:"usage-with-log-for-debugging"},"Usage with Log for Debugging"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"throw (new AccountFailedException())->debug($e); // debug() accepts string or \\Exception instance\n")),(0,a.kt)("h4",{id:"usage-and-overriding-the-default"},"Usage and overriding the default"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"throw new AccountFailedException('I am the message to be displayed to the user');\n")))}d.isMDXComponent=!0}}]);