"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={title:"Validation"},o=void 0,i={unversionedId:"core-features/validation",id:"version-11.x/core-features/validation",title:"Validation",description:"Apiato uses the powerful Laravel validation system.",source:"@site/versioned_docs/version-11.x/core-features/validation.md",sourceDirName:"core-features",slug:"/core-features/validation",permalink:"/docs/core-features/validation",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/core-features/validation.md",tags:[],version:"11.x",lastUpdatedBy:"Mehrdad Amini",lastUpdatedAt:1687327943,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"Validation"},sidebar:"version-11.x/docs",previous:{title:"API Versioning",permalink:"/docs/core-features/api-versioning"},next:{title:"ETag",permalink:"/docs/core-features/etag"}},l={},p=[{value:"Responses",id:"responses",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apiato uses the powerful ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/validation"},"Laravel validation")," system."),(0,a.kt)("p",null,"In Apiato, validation must be defined in ",(0,a.kt)("a",{parentName:"p",href:"../main-components/requests"},"Request")," component, since every request might have different rules."),(0,a.kt)("p",null,"Validation rules are automatically applied, once injecting the Request in the Controller."),(0,a.kt)("p",null,"Requests help validating User data, accessibility, ownership and more."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example Request with Validation rules:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Containers\\AppSection\\User\\UI\\API\\Requests;\n\nuse App\\Ship\\Parents\\Requests\\Request;\n\nclass RegisterUserRequest extends Request\n{\n    /**\n     * @return  array\n     */\n    public function rules()\n    {\n        return [\n            'email'    => 'required|email|max:200|unique:users,email',\n            'password' => 'required|min:20|max:300',\n            'name'     => 'required|min:2|max:400',\n        ];\n    }\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage from Controller Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"    public function registerUser(RegisterUserRequest $request)\n    {\n        $user = app(RegisterUserAction::class)->run($request);\n        return $this->transform($user, UserTransformer::class);\n    }\n")),(0,a.kt)("h2",{id:"responses"},"Responses"),(0,a.kt)("p",null,"Validation Error response format:"),(0,a.kt)("p",null,"Single Field:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "The given data was invalid.",\n  "errors": {\n    "email": [\n      "The email has already been taken."\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"Multiple Fields:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "The given data was invalid.",\n  "errors": {\n    "email": [\n      "The email has already been taken."\n    ],\n    "password": [\n      "The password field is required."\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"More details about requests in the ",(0,a.kt)("a",{parentName:"p",href:"../main-components/requests"},"Requests")," Page."))}d.isMDXComponent=!0}}]);