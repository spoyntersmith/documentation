"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={title:"Criterias"},o=void 0,s={unversionedId:"optional-components/criterias",id:"version-9.x/optional-components/criterias",title:"Criterias",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/criterias.md",sourceDirName:"optional-components",slug:"/optional-components/criterias",permalink:"/docs/9.x/optional-components/criterias",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/optional-components/criterias.md",tags:[],version:"9.x",lastUpdatedBy:"Mehrdad Amini",lastUpdatedAt:1687327943,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"Criterias"},sidebar:"version-9.x/docs",previous:{title:"Exceptions",permalink:"/docs/9.x/optional-components/exceptions"},next:{title:"Tests",permalink:"/docs/9.x/optional-components/tests"}},p={},l=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3}],u={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples"))),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Criterias are classes used to hold and apply query condition when retrieving data from the database through a Repository."),(0,a.kt)("p",null,"Without using a Criteria class, you can add your query conditions to a Repository or to a Model as scope, but with Criterias, your query conditions can be shared across multiple Models and Repositories. It allows you to define the query condition once and use it anywhere in the App."),(0,a.kt)("h3",{id:"principles"},"Principles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Every Container MAY have its own Criterias. However, shared Criterias SHOULD be created in the Ship layer.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A Criteria MUST not contain any extra code, if it needs data, the data SHOULD be passed to it from the Actions or the Task. It SHOULD not run (call) any Task for data."))),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All Criterias MUST extend from ",(0,a.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Criterias\\Criteria"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Every Criteria SHOULD have an ",(0,a.kt)("inlineCode",{parentName:"p"},"apply()")," function.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A simple query condition example ",(0,a.kt)("inlineCode",{parentName:"p"},'"where user_id = $id"'),', this can be named "This User Criteria", and used with all Models which have relations with the User Model.'))),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Data\n                - Criterias\n                  - ColourRedCriteria.php\n                  - RaceCarsCriteria.php\n                  - ...\n    - Ship\n        - Features\n            - Criterias\n               - Eloquent\n                  - CreatedTodayCriteria.php\n                  - NotNullCriteria.php\n                  - ...\n")),(0,a.kt)("h3",{id:"code-samples"},"Code Samples"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example: a shared Criteria")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Ship\\Features\\Criterias\\Eloquent;\n\nuse App\\Ship\\Parents\\Criterias\\Criteria;\nuse Prettus\\Repository\\Contracts\\RepositoryInterface as PrettusRepositoryInterface;\n\nclass OrderByCreationDateDescendingCriteria extends Criteria\n{\n    public function apply($model, PrettusRepositoryInterface $repository)\n    {\n        return $model->orderBy('created_at', 'desc');\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage from ",(0,a.kt)("inlineCode",{parentName:"strong"},"Task"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\npublic function run()\n{\n    $this->userRepository->pushCriteria(new OrderByCreationDateDescendingCriteria);\n\n    $users = $this->userRepository->paginate();\n\n    return $users;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example: ",(0,a.kt)("inlineCode",{parentName:"strong"},"Criteria")," accepting data input:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Ship\\Features\\Criterias\\Eloquent;\n\nuse App\\Ship\\Parents\\Criterias\\Criteria;\nuse Prettus\\Repository\\Contracts\\RepositoryInterface as PrettusRepositoryInterface;\n\nclass ThisUserCriteria extends Criteria\n{\n\n    private $userId;\n\n    public function __construct($userId)\n    {\n        $this->userId = $userId;\n    }\n\n    public function apply($model, PrettusRepositoryInterface $repository)\n    {\n        return $model->where('user_id', '=', $this->userId);\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example: Passing data from ",(0,a.kt)("inlineCode",{parentName:"strong"},"Task")," to ",(0,a.kt)("inlineCode",{parentName:"strong"},"Criteria"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\npublic function run($user)\n{\n    $this->accountRepository->pushCriteria(new ThisUserCriteria($user->id));\n\n    $accounts = $this->accountRepository->paginate();\n\n    return $accounts;\n}\n\n")),(0,a.kt)("p",null,"For more information about the Criteria read ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#create-a-criteria"},"this"),"."))}d.isMDXComponent=!0}}]);