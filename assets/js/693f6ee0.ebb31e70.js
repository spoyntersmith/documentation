"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1024],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(r),c=n,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||a;return r?o.createElement(h,i(i({ref:t},m),{},{components:r})):o.createElement(h,i({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={title:"Repositories"},i=void 0,l={unversionedId:"optional-components/repositories",id:"version-10.x/optional-components/repositories",title:"Repositories",description:"* Definition",source:"@site/versioned_docs/version-10.x/optional-components/repositories.md",sourceDirName:"optional-components",slug:"/optional-components/repositories",permalink:"/docs/10.x/optional-components/repositories",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/optional-components/repositories.md",tags:[],version:"10.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1691839128,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Repositories"},sidebar:"version-10.x/docs",previous:{title:"Providers",permalink:"/docs/10.x/optional-components/providers"},next:{title:"Criterias",permalink:"/docs/10.x/optional-components/criterias"}},p={},s=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Demo Repository",id:"demo-repository",level:4},{value:"Usage",id:"usage",level:4},{value:"Different Model and Container Name",id:"model-method-example",level:4},{value:"Other Properties:",id:"other-properties",level:3},{value:"API Query Parameters Property",id:"api-query-parameters-property",level:4},{value:"All other Properties",id:"all-other-properties",level:4}],m={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#other-properties"},"Other Properties"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#api-query-parameters-property"},"API Query Parameters Property")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#all-other-properties"},"All other Properties"))))),(0,n.kt)("h3",{id:"definition"},"Definition"),(0,n.kt)("p",null,"The Repository classes are an implementation of the Repository Design Pattern."),(0,n.kt)("p",null,"Their major roles are separating the business logic from the data (or the data access Task)."),(0,n.kt)("p",null,"Repositories save and retrieves Models to/from the underlying storage mechanism."),(0,n.kt)("p",null,"The Repository is used to separate the logic that retrieves the data and maps it to a Model, from the business logic that acts on the Model."),(0,n.kt)("h3",{id:"principles"},"Principles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Every Model SHOULD have a Repository.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A Model SHOULD always get accessed through its Repository. (Never accessed directly)."))),(0,n.kt)("h3",{id:"rules"},"Rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All Repositories MUST extend from ",(0,n.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Repositories\\Repository"),". Extending from this class will give you access to methods like (",(0,n.kt)("inlineCode",{parentName:"p"},"find"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"update")," and much more).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Repository name should be same as it's model name (model: ",(0,n.kt)("inlineCode",{parentName:"p"},"Foo")," -> repository: ",(0,n.kt)("inlineCode",{parentName:"p"},"FooRepository"),").")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If a Repository belongs to a Model whose name is not equal to its Container name, then the Repository implement ",(0,n.kt)("inlineCode",{parentName:"p"},"model()")," method like ",(0,n.kt)("a",{parentName:"p",href:"#model-method-example"},"this"),"."))),(0,n.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - Data\n                - Repositories\n                    - UserRepository.php\n                    - ...\n")),(0,n.kt)("h3",{id:"code-samples"},"Code Samples"),(0,n.kt)("h4",{id:"demo-repository"},"Demo Repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"class DemoRepository extends Repository\n{\n    protected $fieldSearchable = [\n        'name'  => 'like',\n        'email' => '=',\n    ];\n}\n")),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"// paginate the data by 10\n$users = $userRepository->paginate(10);\n\n// search by 1 field\n$cars = $carRepository->findByField('colour', $colour);\n\n// searching multiple fields\n$offer = $offerRepository->findWhere([\n    'offer_id' => $offer_id,\n    'user_id'  => $user_id,\n])->first();\n\n//....\n")),(0,n.kt)("h4",{id:"model-method-example"},"Different Model and Container Name"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"model()")," method must be implemented when the model has different name than the container."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"class DemoRepository extends Repository\n{\n    // ...\n    \n    public function model(): string\n    {\n        return Demo::class;\n    }\n}\n")),(0,n.kt)("h3",{id:"other-properties"},"Other Properties:"),(0,n.kt)("h4",{id:"api-query-parameters-property"},"API Query Parameters Property"),(0,n.kt)("p",null,"To enable query parameters (",(0,n.kt)("inlineCode",{parentName:"p"},"?search=text"),",...) in your API you need to set the property ",(0,n.kt)("inlineCode",{parentName:"p"},"$fieldSearchable")," on the Repository class, to instruct the querying on your model. More ",(0,n.kt)("a",{parentName:"p",href:"../core-features/query-parameters##using-the-request-criteria"},"details"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"    protected $fieldSearchable = [\n      'name'  => 'like',\n      'email' => '=',\n    ];\n")),(0,n.kt)("h4",{id:"all-other-properties"},"All other Properties"),(0,n.kt)("p",null,"Apiato uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"l5-repository")," package, to provide a lot of powerful features to the repository class.  "),(0,n.kt)("admonition",{title:"Further reading",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To learn more about all the properties you can use, visit the ",(0,n.kt)("inlineCode",{parentName:"p"},"andersao/l5-repository")," package ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository"},"documentation"),".")))}u.isMDXComponent=!0}}]);