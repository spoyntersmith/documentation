"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8375],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4964:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={title:"Tasks"},s=void 0,o={unversionedId:"main-components/tasks",id:"version-9.x/main-components/tasks",title:"Tasks",description:"- Definition & Principles",source:"@site/versioned_docs/version-9.x/main-components/tasks.md",sourceDirName:"main-components",slug:"/main-components/tasks",permalink:"/docs/9.x/main-components/tasks",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/main-components/tasks.md",tags:[],version:"9.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1691839128,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Tasks"},sidebar:"version-9.x/docs",previous:{title:"Actions",permalink:"/docs/9.x/main-components/actions"},next:{title:"Models",permalink:"/docs/9.x/main-components/models"}},p={},l=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-sample",level:3}],c={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),(0,a.kt)("h3",{id:"definition-principles"},"Definition & Principles"),(0,a.kt)("p",null,"Read from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Tasks"},(0,a.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Tasks)")),"."),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All Tasks MUST extend from ",(0,a.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Tasks\\Task"),".")),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Tasks\n                - ConfirmUserEmailTask.php\n                - GenerateEmailConfirmationUrlTask.php\n                - SendConfirmationEmailTask.php\n                - ValidateConfirmationCodeTask.php\n                - SetUserEmailTask.php\n                - ...\n")),(0,a.kt)("h3",{id:"code-sample"},"Code Sample"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Find User Task by ID:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Tasks;\n\nuse App\\Containers\\User\\Contracts\\UserRepositoryInterface;\nuse App\\Ship\\Parents\\Tasks\\Task;\nuse Exception;\n\nclass FindUserByIdTask extends Task\n{\n    private $userRepository;\n\n    public function __construct(UserRepositoryInterface $userRepository)\n    {\n        $this->userRepository = $userRepository;\n    }\n\n    public function run($id)\n    {\n        try {\n            $user = $this->userRepository->find($id);\n        } catch (Exception $e) {\n            throw new UserNotFoundException();\n        }\n\n        return $user;\n    }\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tasks usage from an Action:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Email\\Actions;\n\nuse App\\Containers\\Email\\Tasks\\ConfirmUserEmailTask;\nuse App\\Containers\\Email\\Tasks\\ValidateConfirmationCodeTask;\nuse App\\Containers\\User\\Tasks\\FindUserByIdTask;\nuse App\\Ship\\Parents\\Actions\\Action;\n\nclass ValidateUserEmailByConfirmationCodeAction extends Action\n{\n    private $validateConfirmationCodeTask;\n\n    private $findUserByIdTask;\n\n    private $confirmUserEmailTask;\n\n    public function __construct(\n        ValidateConfirmationCodeTask $validateConfirmationCodeTask,\n        FindUserByIdTask $findUserByIdTask,\n        ConfirmUserEmailTask $confirmUserEmailTask\n    ) {\n        $this->validateConfirmationCodeTask = $validateConfirmationCodeTask;\n        $this->findUserByIdTask = $findUserByIdTask;\n        $this->confirmUserEmailTask = $confirmUserEmailTask;\n    }\n\n    public function run($userId, $code)\n    {\n        $this->validateConfirmationCodeTask->run($userId, $code);\n        $user = $this->findUserByIdTask->run($userId);\n        $this->confirmUserEmailTask->run($user);\n        ...\n    }\n}\n\n")))}m.isMDXComponent=!0}}]);