(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(8),s=(n(0),n(173)),i={title:"Tests Helpers"},l={unversionedId:"miscellaneous/tests-helpers",id:"miscellaneous/tests-helpers",isDocsHomePage:!1,title:"Tests Helpers",description:"- Tests properties",source:"@site/docs/miscellaneous/tests-helpers.md",slug:"/miscellaneous/tests-helpers",permalink:"/docs/miscellaneous/tests-helpers",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/miscellaneous/tests-helpers.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617626615,formattedLastUpdatedAt:"4/5/2021",sidebar:"docs",previous:{title:"Magical Call",permalink:"/docs/miscellaneous/magical-call"},next:{title:"Tasks Scheduling",permalink:"/docs/miscellaneous/tasks-scheduling"}},o=[],p={toc:o};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#tests-properties"},"Tests properties"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#endpoint"},"$endpoint")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#auth"},"$auth")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#access"},"$access")))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#tests-functions"},"Tests functions"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#makecall"},"makeCall")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#gettestinguser"},"getTestingUser")))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#faker"},"Faker")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#create-live-testing-data"},"Create live Testing Data")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#Debugging-with-PsySH"},"Debugging with PsySH"))),Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("p",null,"Apiato provides additional helper functions, on top of the ",Object(s.b)("a",{parentName:"p",href:"https://laravel.com/docs/master/http-tests"},"Laravel's default Tests"),",\nto make testing your API much faster and fun."),Object(s.b)("p",null,"Writing functional tests, makes implementing, debugging and modifying a feature faster."),Object(s.b)("p",null,"With apiato you just prepare the data you want to send for your POST request, call the ",Object(s.b)("inlineCode",{parentName:"p"},"call()")," function and start\nasserting the response. Everything else is set for you. There are helper functions to create and prepare a testing user\nwith the right authorization (roles and permissions) for each request."),Object(s.b)("a",{name:"tests-properties"}),"## Tests properties",Object(s.b)("p",null,"Some of the test helper functions reads your test class properties, to perform their jobs. below we will see those\nproperties and who uses them:"),Object(s.b)("a",{name:"endpoint"}),"### **$endpoint**:",Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"$endpoint = 'verb@uri';")," property is where you define the endpoints you are trying to access when calling\n",Object(s.b)("inlineCode",{parentName:"p"},"$this->makeCall()"),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example:")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\UI\\API\\Tests\\Functional;\n\nuse App\\Containers\\User\\Tests\\TestCase;\n\nclass RegisterUserTest extends TestCase\n{\n\n    protected $endpoint = 'post@register';\n\n    protected $auth = false;\n\n    protected $access = [\n        'roles'       => '',\n        'permissions' => '',\n    ];\n\n    public function testRegisterNewUserWithCredentials_()\n    {\n        // prepare your post data\n        $data = [\n            'email'    => 'hello@mail.test',\n            'name'     => 'Mahmoud',\n            'password' => 'secret',\n        ];\n\n        // send the HTTP request\n        $response = $this->makeCall($data);\n\n        // assert response status is correct\n        $this->assertEquals('200', $response->getStatusCode());\n\n        // ... add all your assertions\n    }\n\n}\n")),Object(s.b)("a",{name:"override-the-property-value-in-some-test-functions"}),"#### Override the property value in some test functions",Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"\n$response = $this->endpoint('get@myEndpoint')->makeCall();\n\n")),Object(s.b)("a",{name:"auth"}),"### **$auth**:",Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"$auth = false;")," property defines if the endpoint you are trying to call requires authentication or not. By default\n",Object(s.b)("inlineCode",{parentName:"p"},"$auth")," is equal to true, also when not defined on your test class it will be default to true."),Object(s.b)("p",null,"When ",Object(s.b)("inlineCode",{parentName:"p"},"$auth")," is true, the ",Object(s.b)("inlineCode",{parentName:"p"},"makeCall()")," will create a testing user if no one already found, and it will inject his\naccess token in the headers, before making the call."),Object(s.b)("p",null,"So only use this property when your endpoint is not protected, example for the register and login tests."),Object(s.b)("a",{name:"override-the-property-value-in-some-test-functions-1"}),"#### Override the property value in some test functions",Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"$response = $this->auth(false)->makeCall();\n")),Object(s.b)("a",{name:"access"}),"### **$access**:",Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"$access")," property is where you define the permissions/roles that you need to give to your testing users in that\ntest class. So when using ",Object(s.b)("inlineCode",{parentName:"p"},"$user = $this->getTestingUser();")," it will automatically takes all the roles and permissions\nyou gave him."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n    protected $access = [\n        'roles'         => 'admin', // or   ['client', 'admin']\n        'permissions'   => 'delete-users',\n    ];\n")),Object(s.b)("a",{name:"override-the-property-value-in-some-test-functions-2"}),"#### Override the property value in some test functions",Object(s.b)("p",null,"Call the ",Object(s.b)("inlineCode",{parentName:"p"},"getTestingUser")," and pass whichever roles and permissions to him."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"$this->getTestingUser(['permissions' => 'jump', 'roles' => 'jumper']);\n")),Object(s.b)("p",null,"Or you can call ",Object(s.b)("inlineCode",{parentName:"p"},"getTestingUserWithoutAccess()")," to get user without permissions and roles."),Object(s.b)("a",{name:"tests-functions"}),"## Tests functions",Object(s.b)("p",null,"All the test helper functions are provided by traits classes living inside ",Object(s.b)("inlineCode",{parentName:"p"},"app/Ship/Tests/*")," folder. And they are all\navailable for usage from every test class in your application."),Object(s.b)("a",{name:"makeCall"}),"#### makeCall",Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"makeCall(array $data = [], array $headers = [])")," is one of the most important helper functions for an API."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Usage:")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$response = $this->makeCall();\n\n$response = $this->makeCall([\n    'email'    => $userDetails['email'],\n    'password' => $userDetails['password'],\n]);\n\n$response = $this->makeCall($data, $headers);\n\n$response = $this->endpoint('get@register')->makeCall($data);\n\n$response = $this->auth(false)->makeCall();\n\n$response = $this->endpoint('get@item/{id}')->injectId($user->id)->makeCall();\n")),Object(s.b)("a",{name:"gettestinguser"}),"#### getTestingUser",Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"getTestingUser($userDetails = null, $access = null)")," is another very important helper function:"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Usage:")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$user = $this->getTestingUser();\n\n$user = $this->getTestingUser([\n    'email'    => 'hello@mail.test',\n    'name'     => 'Hello',\n    'password' => 'secret',\n]);\n\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"NOTE:")," Later all the test helper functions will be documented, meanwhile to see all the available functions\ncheck all the public functions in all the traits in this directory ",Object(s.b)("inlineCode",{parentName:"p"},"vendor/apiato/core/Traits/TestsTraits/PhpUnit/*"),".")),Object(s.b)("a",{name:"faker"}),"## Faker",Object(s.b)("p",null,"Just use it from any test: ",Object(s.b)("inlineCode",{parentName:"p"},"$this->faker->name;")),Object(s.b)("p",null,"There's an instance of faker in every class."),Object(s.b)("p",null,"Just use it: ",Object(s.b)("inlineCode",{parentName:"p"},"$this->faker->name;")),Object(s.b)("p",null,"See the ","[Tests]","({{ site.baseurl }}{% link _docs/components/tests.md %}) Page, for more details about the Tests components."),Object(s.b)("a",{name:"create-live-testing-data"}),"## Create live Testing Data",Object(s.b)("p",null,"To test your app with some live testing data (like creating items in an inventory) you can use this feature to\nautomatically generate those data. This is also helpful for staging when real people are testing your app with some\ntesting data."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Go to ",Object(s.b)("inlineCode",{parentName:"p"},"Seeder/SeedTestingData.php")," seeder class, and create your live testing data.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Run this command ",Object(s.b)("inlineCode",{parentName:"p"},"php artisan apiato:seed-test")))),Object(s.b)("a",{name:"Debugging-with-PsySH"}),"## Debugging with PsySH",Object(s.b)("p",null,"For better debugging and development, you can open a runtime developer console while executing your test."),Object(s.b)("p",null,"Using ",Object(s.b)("a",{parentName:"p",href:"http://psysh.org/"},"PsySH"),' (interactive debugger and REPL "read-eval-print loop" for PHP). ',Object(s.b)("em",{parentName:"p"},"The package is\nrequired by the Laravel Tinker Package.")),Object(s.b)("p",null,"To use it set the breakpoint ",Object(s.b)("inlineCode",{parentName:"p"},"eval(\\Psy\\sh());")," anywhere you want in any Actions, Controllers, Tasks... and run your\ntest normally."))}c.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=c(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||s;return n?r.a.createElement(d,l(l({ref:t},p),{},{components:n})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);