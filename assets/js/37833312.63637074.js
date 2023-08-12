"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={title:"Requests"},i=void 0,o={unversionedId:"main-components/requests",id:"version-9.x/main-components/requests",title:"Requests",description:"* Definition & Principles",source:"@site/versioned_docs/version-9.x/main-components/requests.md",sourceDirName:"main-components",slug:"/main-components/requests",permalink:"/docs/9.x/main-components/requests",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/main-components/requests.md",tags:[],version:"9.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1691839128,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Requests"},sidebar:"version-9.x/docs",previous:{title:"Controllers",permalink:"/docs/9.x/main-components/controllers"},next:{title:"Transporters",permalink:"/docs/9.x/main-components/transporters"}},l={},p=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Request Properties",id:"request-properties",level:2},{value:"<strong>decode</strong>",id:"decode",level:3},{value:"<strong>urlParameters</strong>",id:"urlparameters",level:3},{value:"<strong>access</strong>",id:"access",level:3},{value:"How the authorize function work",id:"how-the-authorize-function-work",level:2},{value:"Add Custom Authorize Functions",id:"custom-authorize-functions",level:3},{value:"Allow a Role to access every endpoint",id:"allow-a-role-to-access-every-endpoint",level:2},{value:"Request Helper Functions",id:"request-helper-functions",level:2},{value:"<strong>hasAccess</strong>",id:"hasaccess",level:3},{value:"<strong>isOwner</strong>",id:"isowner",level:3},{value:"<strong>getInputByKey</strong>",id:"getinputbykey",level:3},{value:"<strong>sanitizeInput</strong>",id:"sanitizeinput",level:3},{value:"<strong>mapInput</strong>",id:"mapinput",level:3},{value:"Storing Data on the Request",id:"storing-data-on-the-request",level:2},{value:"Unit Testing for Actions (Request)",id:"unit-testing-for-actions-request",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#request-properties"},"Request Properties"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#decode"},"decode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#urlparameters"},"urlParameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#access"},"access")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-the-authorize-function-work"},"How the authorize function work"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-authorize-functions"},"Add Custom Authorize Functions")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#allow-a-role-to-access-every-endpoint"},"Allow a Role to access every endpoint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#request-helper-functions"},"Request Helper Functions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#hasaccess"},"hasAccess")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#isowner"},"isOwner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getinputbykey"},"getInputByKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sanitizeinput"},"sanitizeInput")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mapinput"},"mapInput")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#storing-data-on-the-request"},"Storing Data on the Request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#unit-testing-for-actions-request"},"Unit Testing for Actions (Request)"))),(0,r.kt)("h3",{id:"definition-principles"},"Definition & Principles"),(0,r.kt)("p",null,"Read from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Requests"},(0,r.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Requests)")),"."),(0,r.kt)("h3",{id:"rules"},"Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All Requests MUST extend from ",(0,r.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Requests\\Request"),"."),(0,r.kt)("li",{parentName:"ul"},"A Request MUST have a ",(0,r.kt)("inlineCode",{parentName:"li"},"rules()")," function, returning an array and ",(0,r.kt)("inlineCode",{parentName:"li"},"authorize()")," function to check for authorization (can return true when no authorization required).")),(0,r.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - UI\n                - API\n                    - Requests\n                        - UpdateUserRequest.php\n                        - DeleteUserRequest.php\n                        - ...\n                - WEB\n                    - Requests\n                        - UpdateUserRequest.php\n                        - DeleteUserRequest.php\n                        - ...\n")),(0,r.kt)("h3",{id:"code-samples"},"Code Samples"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example: Update User Requests")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\UI\\API\\Requests;\n\nuse App\\Ship\\Parents\\Requests\\Request;\n\nclass UpdateUserRequest extends Request\n{\n\n    protected $access = [\n        'permission' => '',\n        'roles'      => 'admin',\n    ];\n\n    protected $decode = [\n\n    ];\n\n    protected $urlParameters = [\n\n    ];\n\n    public function rules()\n    {\n        return [\n            'email'    => 'email|unique:users,email',\n            'password' => 'min:100|max:200',\n            'name'     => 'min:300|max:400',\n        ];\n    }\n\n    public function authorize()\n    {\n        return $this->check([\n            'hasAccess|isOwner',\n        ]);\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"If you are wondering what are those properties doing on the request! keep reading")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage from Controller:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\npublic function handle(UpdateUserRequest $updateUserRequest)\n{\n    $data = $updateUserRequest->all();\n    // or\n    $name = $updateUserRequest->name;\n    // or\n    $name = $updateUserRequest['name'];\n}\n")),(0,r.kt)("p",null,"By just injecting the request class you already applied the validation and authorization rules."),(0,r.kt)("p",null,"When you need to pass data to the Action, you should pass the request Object as it is to the Action parameter."),(0,r.kt)("h2",{id:"request-properties"},"Request Properties"),(0,r.kt)("p",null,"apiato adds some new properties to the Request Class. Each of these properties is very useful for some situations, and let you achieve your goals faster and cleaner. Below we'll see description for each property:"),(0,r.kt)("h3",{id:"decode"},(0,r.kt)("strong",{parentName:"h3"},"decode")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"$decode")," property is used for decoding Hashed ID's from any Request on the fly"),(0,r.kt)("p",null,"If you have enabled the HashID feature, that apiato provide out of the box. Most probably you are passing or allowing your users to pass Hashed (encoded) ID's into your application."),(0,r.kt)("p",null,"Thus, these IDs need to be Decoded somewhere, apiato has a property on its Requests Components where you can specify those Hashed ID's in order to decode them before applying the validation rules."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Authorization\\UI\\API\\Requests;\n\nuse App\\Ship\\Parents\\Requests\\Request;\n\nclass AssignUserToRoleRequest extends Request\n{\n\n    protected $decode = [\n        'user_id',\n        'item_id',\n    ];\n\n    public function rules()\n    {\n        return [\n\n        ];\n    }\n\n    public function authorize()\n    {\n        return $this->check([\n            // ..\n        ]);\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," validations rules that relies on your ID like (",(0,r.kt)("inlineCode",{parentName:"p"},"exists:users,id"),") will not work unless you decode your ID before passing it to the validation."),(0,r.kt)("h3",{id:"urlparameters"},(0,r.kt)("strong",{parentName:"h3"},"urlParameters")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"$urlParameters")," property is used for applying validation rules on the URL parameters:"),(0,r.kt)("p",null,"Laravel by default does not allow validating the URL parameters (",(0,r.kt)("inlineCode",{parentName:"p"},"/stores/999/items"),"). In order to be able to apply validation rules on URL parameters you can simply define your URL parameters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"$urlParameters")," property. This will also allow you to access those parameters form the Controller in the same way you access the Request data."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Email\\UI\\API\\Requests;\n\nuse App\\Ship\\Parents\\Requests\\Request;\n\nclass ConfirmUserEmailRequest extends Request\n{\n\n    /**\n     * Defining the URL parameters (`/stores/999/items`) allows applying\n     * validation rules on them and allows accessing them like request data.\n     *\n     * @var  array\n     */\n    protected $urlParameters = [\n        'id',\n        'code',\n    ];\n\n    public function rules()\n    {\n        return [\n            'id'   => 'required|integer', // url parameter\n            'code' => 'required|min:35|max:45', // url parameter\n        ];\n    }\n\n    public function authorize()\n    {\n        return $this->check([\n            // nothing! this is open endpoint.\n        ]);\n    }\n}\n")),(0,r.kt)("h3",{id:"access"},(0,r.kt)("strong",{parentName:"h3"},"access")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"$access")," property, allows the user to define set of Roles and Permissions than can access this endpoint."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"$access")," property is used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"hasAccess")," function defined below in the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorize")," function, to check if the user has the necessary Roles & Permissions to call this endpoint (basically access the controller function where this request object is injected)."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\UI\\API\\Requests;\n\nuse App\\Ship\\Parents\\Requests\\Request;\n\nclass DeleteUserRequest extends Request\n{\n    /**\n     * Define which Roles and/or Permissions has access to this request.\n     *\n     * @var  array\n     */\n    protected $access = [\n        'permission' => 'delete-users|another-permissions',\n        'roles' => 'manager'\n    ];\n\n    public function authorize()\n    {\n        return $this->check([\n            'hasAccess|isOwner',\n            'isKing',\n        ]);\n    }\n}\n")),(0,r.kt)("p",null,"If you do not like the ",(0,r.kt)("inlineCode",{parentName:"p"},"laravelish")," style with ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," in order to separate the different ",(0,r.kt)("inlineCode",{parentName:"p"},"roles")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"permissions")," (e.g., see the example above),\nyou can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"array notation"),". The example from above would look like this (only part that changes):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    protected $access = [\n            'permission' => ['delete-users', 'another-permissions'],\n            'roles' => ['manager'],\n    ];\n")),(0,r.kt)("h2",{id:"how-the-authorize-function-work"},"How the authorize function work"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"authorize")," function is calling a ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," function which accepts an array of functions names. Each of those functions returns boolean."),(0,r.kt)("p",null,"In the example above we are calling three functions ",(0,r.kt)("inlineCode",{parentName:"p"},"hasAccess"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isOwner")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isKing"),"."),(0,r.kt)("p",null,"The separator ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," between the functions indicates an ",(0,r.kt)("inlineCode",{parentName:"p"},"OR")," operation, so if any of the functions ",(0,r.kt)("inlineCode",{parentName:"p"},"hasAccess")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"isOwner")," returns true the user will gain access and only when both return false the user will be prevented from accessing this endpoint."),(0,r.kt)("p",null,"On the other side if ",(0,r.kt)("inlineCode",{parentName:"p"},"isKing")," ",(0,r.kt)("em",{parentName:"p"},"(a custom function could be written by you anywhere)")," returned false no matter what all other functions returns, the user will be prevented from accessing this endpoint, because the default operation between all functions in the array is ",(0,r.kt)("inlineCode",{parentName:"p"},"AND"),"."),(0,r.kt)("p",null,"Checkout the ",(0,r.kt)("a",{parentName:"p",href:"https://apiato.readme.io/docs/requests#section-hasaccess"},"hasAccess")," below."),(0,r.kt)("h3",{id:"custom-authorize-functions"},"Add Custom Authorize Functions"),(0,r.kt)("p",null,"The best way to add a custom authorize function is through a Trait, which can be added to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," classes. In the example below we create a Trait named ",(0,r.kt)("inlineCode",{parentName:"p"},"IsAuthorPermissionTrait")," with a single method called ",(0,r.kt)("inlineCode",{parentName:"p"},"isAuthor"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"isAuthor()")," method, in turn, calls a Task to verify that the current user is an author (e.g., if the user has the proper ",(0,r.kt)("inlineCode",{parentName:"p"},"Role")," assigned)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<?php\nnamespace App\\Containers\\User\\Traits;\n\nuse Apiato\\Core\\Foundation\\Facades\\Apiato;\n\ntrait IsAuthorPermissionTrait\n{\n    public function isAuthor()\n    {\n        // The task needs to be implemented properly!\n        return Apiato::call('User@CheckIfUserHasProperRoleTask', [$this->user(), ['author']]);\n    }\n}\n")),(0,r.kt)("p",null,"Now, add the newly created Trait to the Request to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"isAuthor")," function in the authorization check."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<?php\n\nnamespace App\\Containers\\User\\UI\\API\\Requests;\n\nuse App\\Containers\\User\\Traits\\IsAuthorPermissionTrait;\nuse App\\Ship\\Parents\\Requests\\Request;\n\nclass FindUserByIdRequest extends Request\n{\n\n    use IsAuthorPermissionTrait;\n\n    // ...\n\n    public function authorize()\n    {\n        return $this->check([\n            'isAuthor',\n        ]);\n    }\n}\n")),(0,r.kt)("p",null,"Now, the Request uses the newly created ",(0,r.kt)("inlineCode",{parentName:"p"},"isAuthor")," method to check the proper access rights."),(0,r.kt)("h2",{id:"allow-a-role-to-access-every-endpoint"},"Allow a Role to access every endpoint"),(0,r.kt)("p",null,"You can allow some Roles to access every endpoint in the system without having to define that role in each Request object."),(0,r.kt)("p",null,"This is useful you want to let users with ",(0,r.kt)("inlineCode",{parentName:"p"},"Admin")," role access everything."),(0,r.kt)("p",null,"To do this, define those roles in ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'requests' => [\n    'allow-roles-to-access-all-routes' => ['admin',],\n],\n")),(0,r.kt)("p",null,"This will append the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," role to all roles access in every request object. Example: this ",(0,r.kt)("inlineCode",{parentName:"p"},"'roles' => 'manager'")," becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"'roles' => 'manager|admin'"),' (if the user is manager or admin "has any of the roles", will be allowed to access the endpoint function).'),(0,r.kt)("h2",{id:"request-helper-functions"},"Request Helper Functions"),(0,r.kt)("p",null,"apiato also provides some helpful functions by default, so you can use them whenever you need them."),(0,r.kt)("h3",{id:"hasaccess"},(0,r.kt)("strong",{parentName:"h3"},"hasAccess")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hasAccess")," function, decides if user has Access or not based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"$access")," property."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the user has any roles or permissions he will be given access.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you need more or less roles/permissions just add ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," between each permission.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you do not need to set a roles/permissions just set ",(0,r.kt)("inlineCode",{parentName:"p"},"'permission' => ''")," or  ",(0,r.kt)("inlineCode",{parentName:"p"},"'permission' => null"),"."))),(0,r.kt)("h3",{id:"isowner"},(0,r.kt)("strong",{parentName:"h3"},"isOwner")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"isOwner")," function, checks if the passed URL ID is the same as the User ID of the request."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,"Let's say we have an endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"www.api.apiato.test/v1/users/{ID}/delete")," that deletes a user, and we only need users to delete their own user accounts."),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"isOwner"),", user of ID 1 can only call ",(0,r.kt)("inlineCode",{parentName:"p"},"/users/1/delete")," and won't be able to call ",(0,r.kt)("inlineCode",{parentName:"p"},"/users/2/delete")," or any other ID."),(0,r.kt)("h3",{id:"getinputbykey"},(0,r.kt)("strong",{parentName:"h3"},"getInputByKey")),(0,r.kt)("p",null,"Get the data from within the ",(0,r.kt)("inlineCode",{parentName:"p"},"$request")," by entering the name of the field. This function behaves like ",(0,r.kt)("inlineCode",{parentName:"p"},"$request->input('key.here')"),",\nhowever, it works on the ",(0,r.kt)("strong",{parentName:"p"},"decoded")," values instead of the original data."),(0,r.kt)("p",null,"Consider the following Request data in case you are passing ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")," data instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"x-www-form-urlencoded"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data" : {\n    "name"  : "foo",\n    "description" : "bar"\n  },\n  "id" : "a2423nadabada0"\n}\n')),(0,r.kt)("p",null,"Calling ",(0,r.kt)("inlineCode",{parentName:"p"},"$request->input('id')")," would return ",(0,r.kt)("inlineCode",{parentName:"p"},'"a2423nadabada0"'),", however ",(0,r.kt)("inlineCode",{parentName:"p"},"$request->getInputByKey('id')")," would return the\ndecoded value (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),")."),(0,r.kt)("p",null,"Furthermore, one can define a ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," value to be returned, if the key is not present (or not set), like so:\n",(0,r.kt)("inlineCode",{parentName:"p"},"$request->getInputByKey('data.name', 'Undefined')")),(0,r.kt)("h3",{id:"sanitizeinput"},(0,r.kt)("strong",{parentName:"h3"},"sanitizeInput")),(0,r.kt)("p",null,"Especially for ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," requests, if you like to submit only the fields, to be changed to the API in order to:"),(0,r.kt)("p",null,"a) minimize the traffic\nb) partially update the respective resource"),(0,r.kt)("p",null,"Checking for the presence (or absence) of specific keys in the request typically results in huge ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," blocks, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n// ...\nif($request->has('data.name')) {\n   $data['name'] = $request->input('data.name'); // or use getInputByKey()\n}\nif($request->has('data.description')) {\n   $data['description'] = $request->input('data.description'); // or use getInputByKey()\n}\n// ...\n")),(0,r.kt)("p",null,"So to avoid those ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," blocks, use ",(0,r.kt)("inlineCode",{parentName:"p"},"array_filter($data)")," in order to remove ",(0,r.kt)("inlineCode",{parentName:"p"},"empty")," fields from the request."),(0,r.kt)("p",null,"However, in PHP ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"''")," ",(0,r.kt)("em",{parentName:"p"},"(empty string)")," are also considered as ",(0,r.kt)("inlineCode",{parentName:"p"},"empty")," (which is clearly not what you want)."),(0,r.kt)("p",null,"You can read more about this problem ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apiato/apiato/issues/186"},"here"),"."),(0,r.kt)("p",null,"In order to simplify sanitizing ",(0,r.kt)("inlineCode",{parentName:"p"},"Request Data")," when using ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"x-www-form-urlencoded"),",\napiato offers a convenient ",(0,r.kt)("inlineCode",{parentName:"p"},"sanitizeInput($fields)")," method."),(0,r.kt)("p",null,"Consider the following Request data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data" : {\n        "is_private" : false,\n        "description" : "this is a rather long description text",\n        "a" : null,\n        "b" : 3453,\n        "foo" : {\n            "a" : "a",\n            "b" : "b",\n            "c" : 1234\n        },\n        "bar" : [\n            "a", "b", "c"\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"The method lets you specify a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"$fields")," to be accessed and extracted from the ",(0,r.kt)("inlineCode",{parentName:"p"},"$request"),". This is done using the\nDOT notation. Finally, call the ",(0,r.kt)("inlineCode",{parentName:"p"},"sanitizeInput()")," method on the ",(0,r.kt)("inlineCode",{parentName:"p"},"$request"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$fields = ['data.name', 'data.description', 'data.is_private', 'data.blabla', 'data.foo.c'];\n$data = $request->sanitizeInput($fields);\n")),(0,r.kt)("p",null,"The extracted ",(0,r.kt)("inlineCode",{parentName:"p"},"$data")," looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'[\n  "data" => [\n    "is_private" => false\n    "description" => "this is a rather long description text"\n    "foo" => [\n      "c" => 1234\n    ]\n  ]\n]\n')),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"data.blabla")," is not within the ",(0,r.kt)("inlineCode",{parentName:"p"},"$data")," array, as it was not present within the ",(0,r.kt)("inlineCode",{parentName:"p"},"$request"),". Furthermore, all\nother fields from the ",(0,r.kt)("inlineCode",{parentName:"p"},"$request")," are omitted as they are not specified. So basically, the method creates some kind of\n",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"$request"),", only passing the defined values. Furthermore, the DOT Notation allows you to easily specify\nthe fields to would like to pass through. This makes partially updating a resource quite easy!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Heads Up:")),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"fillable fields")," of an entity can be easily obtained with ",(0,r.kt)("inlineCode",{parentName:"p"},"$entity->getFillable()"),"!"),(0,r.kt)("h3",{id:"mapinput"},(0,r.kt)("strong",{parentName:"h3"},"mapInput")),(0,r.kt)("p",null,"Sometimes you might want to map input from the request to other fields in order to automatically pass it to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Action"),"\nor ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),". Of course, you can manually map those fields, but you can also rely on the ",(0,r.kt)("inlineCode",{parentName:"p"},"mapInput(array $fields)")," helper\nfunction."),(0,r.kt)("p",null,'This helper, in turn, allows to "redefine" keys in the request for subsequent processing. Consider the following\nexample request:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data" : {\n        "name" : "John Doe"\n    }\n}\n')),(0,r.kt)("p",null,"Your Task to process this data, however, requests the field ",(0,r.kt)("inlineCode",{parentName:"p"},"data.name")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"data.username"),". You can call the helper\nlike this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$request->mapInput([\n    'data.name' => 'data.username',\n]);\n")),(0,r.kt)("p",null,"The resulting structure would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data" : {\n        "username" : "John Doe"\n    }\n}\n')),(0,r.kt)("h2",{id:"storing-data-on-the-request"},"Storing Data on the Request"),(0,r.kt)("p",null,"During the Request life-cycle you may want to store some data on the request object and pass it to other SubActions (or Tasks)."),(0,r.kt)("p",null,"To store some data on the request use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$request->keep(['someKey' => $someValue]);\n")),(0,r.kt)("p",null,"To retrieve the data back at any time during the request life-cycle use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$someValue = $request->retrieve('someKey')\n")),(0,r.kt)("h2",{id:"unit-testing-for-actions-request"},"Unit Testing for Actions (Request)"),(0,r.kt)("p",null,"Since we're passing Request objects to Actions. When writing unit tests we need to create fake Request just to pass it to the Action with some fake data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// creating\n$request = RegisterUserRequest::injectData($data);\n")),(0,r.kt)("p",null,"Example One:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$data = [\n    'email'    => 'Mahmoud@test.test',\n    'name'     => 'Mahmoud',\n    'password' => 'so-secret',\n];\n\n// create request object with some data\n$request = RegisterUserRequest::injectData($data);\n\n// create instance of the Action\n$action = App::make(RegisterUserAction::class)->run($request);\n\n// do any kind of assertions..\n$this->assertInstanceOf(User::class, $user);\n\n// ...\n\n")),(0,r.kt)("p",null,"Example Two (With Authenticated User):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$data = [\n   'store_id'  => $this->encode($store->id),\n   'items'     => $orderItems,\n   'recipient' => $receipient,\n];\n\n$user = factory(User::class)->create();\n\n$request = MakeOrderRequest::injectData($data, $user);\n\n$order = App::make(MakeOrderAction::class)->run($request);\n\n// ...\n\n")))}c.isMDXComponent=!0}}]);