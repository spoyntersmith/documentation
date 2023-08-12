"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4948],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"Repositories"},i=void 0,p={unversionedId:"optional-components/repositories",id:"version-9.x/optional-components/repositories",title:"Repositories",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/repositories.md",sourceDirName:"optional-components",slug:"/optional-components/repositories",permalink:"/docs/9.x/optional-components/repositories",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/optional-components/repositories.md",tags:[],version:"9.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1691839128,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Repositories"},sidebar:"version-9.x/docs",previous:{title:"Providers",permalink:"/docs/9.x/optional-components/providers"},next:{title:"Exceptions",permalink:"/docs/9.x/optional-components/exceptions"}},l={},s=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Other Properties:",id:"other-properties",level:3},{value:"API Query Parameters Property",id:"api-query-parameters-property",level:3},{value:"All other Properties",id:"all-other-properties",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#other-properties"},"Other Properties:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#api-query-parameters-property"},"API Query Parameters Property")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#all-other-properties"},"All other Properties"))),(0,o.kt)("h3",{id:"definition"},"Definition"),(0,o.kt)("p",null,"The Repository classes are an implementation of the Repository Design Pattern."),(0,o.kt)("p",null,"Their major roles are separating the business logic from the data (or the data access Task)."),(0,o.kt)("p",null,"Repositories save and retrieves Models to/from the underlying storage mechanism."),(0,o.kt)("p",null,"The Repository is used to separate the logic that retrieves the data and maps it to a Model, from the business logic that acts on the Model."),(0,o.kt)("h3",{id:"principles"},"Principles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Every Model SHOULD have a Repository.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Model SHOULD always get accessed through its Repository. (Never direct access to Model)."))),(0,o.kt)("h3",{id:"rules"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"All Repositories MUST extend from ",(0,o.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Repositories\\Repository"),". Extending from this class will give access to functions like (",(0,o.kt)("inlineCode",{parentName:"p"},"find"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," and much more).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Repository name should be same like it's model name (model: ",(0,o.kt)("inlineCode",{parentName:"p"},"Foo")," -> repository: ",(0,o.kt)("inlineCode",{parentName:"p"},"FooRepository"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If a Repository belongs to a Model whose name is not equal to its Container name, then the Repository must set the ",(0,o.kt)("inlineCode",{parentName:"p"},"$container")," property like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"$container='ContainerName'"),". ",(0,o.kt)("em",{parentName:"p"},"See an example below")))),(0,o.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n                - Data\n                - Repositories\n                    - UserRepository.php\n                    - ...\n")),(0,o.kt)("h3",{id:"code-samples"},"Code Samples"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"User ",(0,o.kt)("inlineCode",{parentName:"strong"},"Repository"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Data\\Repositories;\n\nuse App\\Containers\\User\\Contracts\\UserRepositoryInterface;\nuse App\\Containers\\User\\Models\\User;\nuse App\\Ship\\Parents\\Repositories\\Repository;\n\nclass UserRepository extends Repository implements UserRepositoryInterface\n{\n    protected $fieldSearchable = [\n        'name'  => 'like',\n        'email' => '=',\n    ];\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// paginate the data by 10\n$users = $userRepository->paginate(10);\n\n// search by 1 field\n$cars = $carRepository->findByField('colour', $colour);\n\n// searching multiple fields\n$offer = $offerRepository->findWhere([\n    'offer_id' => $offer_id,\n    'user_id'  => $user_id,\n])->first();\n\n//....\n")),(0,o.kt)("p",null,"Note: If the Repository belongs to Model with a name different from its Container name, the Repository class of that Model must set the property ",(0,o.kt)("inlineCode",{parentName:"p"},"$container")," and define the Container name."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Authorization\\Data\\Repositories;\n\nuse App\\Ship\\Parents\\Repositories\\Repository;\n\nclass RoleRepository extends Repository\n{\n    protected $container = 'Authorization'; // the container name. Must be set when the model has different name than the container\n\n    protected $fieldSearchable = [\n\n    ];\n\n}\n")),(0,o.kt)("h3",{id:"other-properties"},"Other Properties:"),(0,o.kt)("h3",{id:"api-query-parameters-property"},"API Query Parameters Property"),(0,o.kt)("p",null,"To enable query parameters (",(0,o.kt)("inlineCode",{parentName:"p"},"?search=text"),",...) in your API you need to set the property ",(0,o.kt)("inlineCode",{parentName:"p"},"$fieldSearchable")," on the Repository class, to instruct the querying on your model."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example ",(0,o.kt)("inlineCode",{parentName:"strong"},"$fieldSearchable")," of a ",(0,o.kt)("inlineCode",{parentName:"strong"},"Repository"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"     <?php\n\n    protected $fieldSearchable = [\n      'name'  => 'like',\n      'email' => '=',\n    ];\n")),(0,o.kt)("p",null,"Continue reading to find more about those properties and what they do."),(0,o.kt)("h3",{id:"all-other-properties"},"All other Properties"),(0,o.kt)("p",null,"apiato uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"andersao/l5-repository")," package, to provide a lot of powerful features to the repository class. such as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n     // ...\n\n    protected $cacheMinutes = 1440; // 1 day\n\n    protected $cacheOnly = ['all'];\n\n")),(0,o.kt)("p",null,"To learn more about all the properties you can use, visit the ",(0,o.kt)("inlineCode",{parentName:"p"},"andersao/l5-repository")," package ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository"},"documentation"),"."))}m.isMDXComponent=!0}}]);