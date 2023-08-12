"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Models"},l=void 0,i={unversionedId:"main-components/models",id:"version-9.x/main-components/models",title:"Models",description:"- Definition & Principles",source:"@site/versioned_docs/version-9.x/main-components/models.md",sourceDirName:"main-components",slug:"/main-components/models",permalink:"/docs/9.x/main-components/models",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/main-components/models.md",tags:[],version:"9.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1691839128,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Models"},sidebar:"version-9.x/docs",previous:{title:"Tasks",permalink:"/docs/9.x/main-components/tasks"},next:{title:"Views",permalink:"/docs/9.x/main-components/views"}},s={},p=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-sample",level:3},{value:"Casts",id:"casts",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-sample"},"Code Sample")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#casts"},"Casts"))),(0,a.kt)("h3",{id:"definition-principles"},"Definition & Principles"),(0,a.kt)("p",null,"Read from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Models"},(0,a.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Models)")),"."),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All Models MUST extend from ",(0,a.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Models\\Model"),"."),(0,a.kt)("li",{parentName:"ul"},"If the name of a model differs from the Container name you have to set the ",(0,a.kt)("inlineCode",{parentName:"li"},"$container")," attribute in the repository - ",(0,a.kt)("a",{parentName:"li",href:".././optional-components/repositories"},"more details"),".")),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - App\n    - Containers\n        - {container-name}\n            - Models\n                - User.php\n                - UserId.php\n                - ...\n")),(0,a.kt)("h3",{id:"code-sample"},"Code Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Demo\\Models;\n\nuse App\\Ship\\Parents\\Models\\Model;\n\nclass Demo extends Model\n{\n    protected $table = 'demos';\n\n    protected $fillable = [\n        'label',\n        'user_id'\n    ];\n\n    protected $hidden = [\n        'token',\n    ];\n\n    protected $casts = [\n        'total_credits'     => 'float',\n    ];\n\n    protected $dates = [\n        'created_at',\n        'updated_at',\n    ];\n\n    public function user()\n    {\n        return $this->belongsTo(\\App\\Containes\\User\\Models\\User::class);\n    }\n}\n")),(0,a.kt)("p",null,"Notice the Demo Model has a relationship with User Model, which lives in another Container."),(0,a.kt)("h3",{id:"casts"},"Casts"),(0,a.kt)("p",null,"The casts attribute can be used to parse any of the model's attributes to a specific type. In the code sample below we can cast ",(0,a.kt)("inlineCode",{parentName:"p"},"total_credits")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),"."),(0,a.kt)("p",null,"More information about the applicable cast-types can be found in the laravel ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/master/eloquent-mutators"},"eloquent-mutators")," documentation."),(0,a.kt)("p",null,"You can place any dates inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"$dates")," to parse those automatically."))}m.isMDXComponent=!0}}]);