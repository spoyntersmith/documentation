"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:s,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),s=(n(7294),n(3905));const r={title:"Tests Helpers"},i=void 0,l={unversionedId:"miscellaneous/tests-helpers",id:"version-10.x/miscellaneous/tests-helpers",title:"Tests Helpers",description:"- Tests properties",source:"@site/versioned_docs/version-10.x/miscellaneous/tests-helpers.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/tests-helpers",permalink:"/docs/10.x/miscellaneous/tests-helpers",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/miscellaneous/tests-helpers.md",tags:[],version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1679580761,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"Tests Helpers"},sidebar:"version-10.x/docs",previous:{title:"Values",permalink:"/docs/10.x/optional-components/values"},next:{title:"Tasks Scheduling",permalink:"/docs/10.x/miscellaneous/tasks-scheduling"}},o={},p=[{value:"Tests properties",id:"tests-properties",level:2},{value:"$endpoint",id:"endpoint",level:3},{value:"Override the <code>endpoint</code> property value in some test functions",id:"override-the-endpoint-property-value-in-some-test-functions",level:4},{value:"$auth",id:"auth",level:3},{value:"Override the <code>auth</code> property value in some test functions",id:"override-the-auth-property-value-in-some-test-functions",level:4},{value:"$access",id:"access",level:3},{value:"Override the <code>access</code> property value in some test functions",id:"override-the-access-property-value-in-some-test-functions",level:4},{value:"Tests functions",id:"tests-functions",level:2},{value:"makeCall",id:"make-call",level:3},{value:"Usage",id:"usage",level:4},{value:"getTestingUser",id:"get-testing-user",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Faker",id:"faker",level:2},{value:"Create live Testing Data",id:"create-live-testing-data",level:2},{value:"Debugging with PsySH",id:"debugging-with-PsySH",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#tests-properties"},"Tests properties"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#endpoint"},"$endpoint")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#auth"},"$auth")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#access"},"$access")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#tests-functions"},"Tests functions"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#make-call"},"makeCall")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#get-testing-user"},"getTestingUser")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#faker"},"Faker")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#create-live-testing-data"},"Create live Testing Data")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#debugging-with-PsySH"},"Debugging with PsySH"))),(0,s.kt)("p",null,"Apiato provides additional helper functions, on top of\nthe ",(0,s.kt)("a",{parentName:"p",href:"https://laravel.com/docs/http-tests"},"Laravel's default Tests"),", to make testing your API much faster and fun."),(0,s.kt)("p",null,"Writing functional tests, makes implementing, debugging and modifying a feature faster."),(0,s.kt)("p",null,"With Apiato you just prepare the data you want to send for your POST request, call the ",(0,s.kt)("inlineCode",{parentName:"p"},"makeCall()")," function and start\nasserting the response. Everything else is set for you. There are helper functions to create and prepare a testing user\nwith the right authorization (roles and permissions) for each request."),(0,s.kt)("h2",{id:"tests-properties"},"Tests properties"),(0,s.kt)("p",null,"Some test helper functions read your test class properties, to perform their jobs. below we will see those properties\nand who uses them:"),(0,s.kt)("h3",{id:"endpoint"},"$endpoint"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"$endpoint = 'verb@uri';")," property is where you define the endpoints you are trying to access when calling\n",(0,s.kt)("inlineCode",{parentName:"p"},"$this->makeCall()"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"class RegisterUserTest extends ApiTestCase\n{\n    protected string $endpoint = 'post@register';\n    protected bool $auth = false;\n    protected array $access = [\n        'roles'       => '',\n        'permissions' => '',\n    ];\n\n    public function testRegisterNewUserWithCredentials()\n    {\n        // prepare your post data\n        $data = [\n            'email'    => 'john@doe.test',\n            'name'     => 'John Doe',\n            'password' => 'secret',\n        ];\n\n        // send the HTTP request\n        $response = $this->makeCall($data);\n\n        // assert response status is correct\n        $this->assertEquals('200', $response->getStatusCode());\n\n        // ... add all your assertions\n    }\n}\n")),(0,s.kt)("h4",{id:"override-the-endpoint-property-value-in-some-test-functions"},"Override the ",(0,s.kt)("inlineCode",{parentName:"h4"},"endpoint")," property value in some test functions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$this->endpoint('get@myEndpoint')->makeCall();\n")),(0,s.kt)("h3",{id:"auth"},"$auth"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"$auth = false;")," property defines if the endpoint you are trying to call requires authentication or not. By default\n",(0,s.kt)("inlineCode",{parentName:"p"},"$auth")," is equal to true, also when not defined on your test class it will be defaulted to true."),(0,s.kt)("p",null,"When ",(0,s.kt)("inlineCode",{parentName:"p"},"$auth")," is true, the ",(0,s.kt)("inlineCode",{parentName:"p"},"makeCall()")," will create a testing user if none already found, and it will inject his access\ntoken in the headers, before making the call."),(0,s.kt)("p",null,"So only use this property when your endpoint is not protected, for example the register and login tests."),(0,s.kt)("h4",{id:"override-the-auth-property-value-in-some-test-functions"},"Override the ",(0,s.kt)("inlineCode",{parentName:"h4"},"auth")," property value in some test functions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$response = $this->auth(false)->makeCall();\n")),(0,s.kt)("h3",{id:"access"},"$access"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"$access")," property is where you define the permissions/roles that you need to give to your testing users in that\ntest class. So when using ",(0,s.kt)("inlineCode",{parentName:"p"},"$user = $this->getTestingUser();")," it will automatically take all the roles and permissions\nyou gave him."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"protected $access = [\n    'roles'         => 'admin', // or   ['client', 'admin']\n    'permissions'   => 'delete-users',\n];\n")),(0,s.kt)("h4",{id:"override-the-access-property-value-in-some-test-functions"},"Override the ",(0,s.kt)("inlineCode",{parentName:"h4"},"access")," property value in some test functions"),(0,s.kt)("p",null,"Call the ",(0,s.kt)("inlineCode",{parentName:"p"},"getTestingUser")," and pass roles and permissions as the second argument."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$this->getTestingUser(null, ['permissions' => 'jump', 'roles' => 'jumper']);\n")),(0,s.kt)("p",null,"Or you can call ",(0,s.kt)("inlineCode",{parentName:"p"},"getTestingUserWithoutAccess()")," to get user without permissions and roles."),(0,s.kt)("h2",{id:"tests-functions"},"Tests functions"),(0,s.kt)("p",null,"All the test helper functions are provided by traits are living inside ",(0,s.kt)("inlineCode",{parentName:"p"},"vendor/apiato/core/Traits/TestsTraits/PhpUnit/*")," folder,and they are all\navailable for usage from every test class in your application."),(0,s.kt)("h3",{id:"make-call"},"makeCall"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"makeCall(array $data = [], array $headers = [])")," is one of the most important helper functions for an API."),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$response = $this->makeCall();\n\n$response = $this->makeCall([\n    'email'    => $userDetails['email'],\n    'password' => $userDetails['password'],\n]);\n\n$response = $this->makeCall($data, $headers);\n\n$response = $this->endpoint('get@register')->makeCall($data);\n\n$response = $this->auth(false)->makeCall();\n\n$response = $this->endpoint('get@item/{id}')->injectId($user->id)->makeCall();\n")),(0,s.kt)("h3",{id:"get-testing-user"},"getTestingUser"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"getTestingUser($userDetails = null, $access = null)")," is another very important helper function:"),(0,s.kt)("h4",{id:"usage-1"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$user = $this->getTestingUser();\n\n$user = $this->getTestingUser([\n    'email'    => 'hello@mail.test',\n    'name'     => 'Hello',\n    'password' => 'secret',\n]);\n\n")),(0,s.kt)("h2",{id:"faker"},"Faker"),(0,s.kt)("p",null,"Just use it from any test: ",(0,s.kt)("inlineCode",{parentName:"p"},"$this->faker->name;")),(0,s.kt)("p",null,"There's an instance of faker in every class."),(0,s.kt)("p",null,"Just use it: ",(0,s.kt)("inlineCode",{parentName:"p"},"$this->faker->name;")),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"../optional-components/tests"},"Tests")," Page, for more details about the Tests components."),(0,s.kt)("h2",{id:"create-live-testing-data"},"Create live Testing Data"),(0,s.kt)("p",null,"To test your app with some live testing data (like creating items in an inventory) you can use this feature to\nautomatically generate those data. This is also helpful for staging when real people are testing your app with some\ntesting data."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Go to ",(0,s.kt)("inlineCode",{parentName:"p"},"app/Ship/Seeder/SeedTestingData.php")," seeder class, and create your live testing data.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Run this command ",(0,s.kt)("inlineCode",{parentName:"p"},"php artisan apiato:seed-test")))),(0,s.kt)("h2",{id:"debugging-with-PsySH"},"Debugging with PsySH"),(0,s.kt)("p",null,"For better debugging and development, you can open a runtime developer console while executing your test."),(0,s.kt)("p",null,"Using ",(0,s.kt)("a",{parentName:"p",href:"http://psysh.org/"},"PsySH"),' (interactive debugger and REPL "read-eval-print loop" for PHP). ',(0,s.kt)("em",{parentName:"p"},"The package is\nrequired by the Laravel Tinker Package.")),(0,s.kt)("p",null,"To use it set the breakpoint ",(0,s.kt)("inlineCode",{parentName:"p"},"eval(\\Psy\\sh());")," anywhere you want in any Actions, Controllers, Tasks... and run your\ntest normally."))}c.isMDXComponent=!0}}]);