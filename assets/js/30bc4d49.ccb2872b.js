(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{173:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(d,s(s({ref:t},c),{},{components:n})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(173)),l={title:"Controllers"},s={unversionedId:"main-components/controllers",id:"main-components/controllers",isDocsHomePage:!1,title:"Controllers",description:"- Definition & Principles",source:"@site/docs/main-components/controllers.md",slug:"/main-components/controllers",permalink:"/docs/main-components/controllers",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/main-components/controllers.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617626615,formattedLastUpdatedAt:"4/5/2021",sidebar:"docs",previous:{title:"Routes",permalink:"/docs/main-components/routes"},next:{title:"Requests",permalink:"/docs/main-components/requests"}},i=[{value:"Definition &amp; Principles",id:"definition--principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Sample",id:"code-sample",children:[]},{value:"Controller response builder helper functions",id:"controller-response-builder-helper-functions",children:[]}],c={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#code-sample"},"Code Sample")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#controller-response-builder-helper-functions"},"Controller response builder helper functions"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#some-of-the-functions"},"Some of the functions"))))),Object(a.b)("a",{name:"definition-principles"}),Object(a.b)("h3",{id:"definition--principles"},"Definition & Principles"),Object(a.b)("p",null,"Read from the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Controllers"},Object(a.b)("strong",{parentName:"a"},"Porto SAP Documentation (#Controllers)")),"."),Object(a.b)("a",{name:"rules"}),Object(a.b)("h3",{id:"rules"},"Rules"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"All API Controller MUST extend from ",Object(a.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Controllers\\ApiController"),"."),Object(a.b)("li",{parentName:"ul"},"All Web Controller MUST extend from ",Object(a.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Controllers\\WebController"),"."),Object(a.b)("li",{parentName:"ul"},"Controllers should use the function ",Object(a.b)("inlineCode",{parentName:"li"},"call")," to call Actions. (do not manually inject the Action and invoke the ",Object(a.b)("inlineCode",{parentName:"li"},"run"),")."),Object(a.b)("li",{parentName:"ul"},"Controllers should pass the Request object to the Action instead of passing data from the request. The Request object is the best class to store the state of the Request during its life cycle.")),Object(a.b)("a",{name:"folder-structure"}),Object(a.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - UI\n                - API\n                    - Controllers\n                        - Controller.php\n                - WEB\n                    - Controllers\n                        - Controller.php\n")),Object(a.b)("a",{name:"code-sample"}),Object(a.b)("h3",{id:"code-sample"},"Code Sample"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"User Web Welcome Controller:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nclass Controller extends PortWebController\n{\n\n    public function sayWelcome()\n    {\n        return view('welcome');\n    }\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"User API Login Controller:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nclass Controller extends ApiController\n{\n\n    /**\n     * @param \\App\\Containers\\User\\UI\\API\\Requests\\RegisterUserRequest $request\n     *\n     * @return  mixed\n     */\n    public function registerUser(RegisterUserRequest $request)\n    {\n        $user = Apiato::call(RegisterUserAction::class, [$request]);\n\n        return $this->transform($user, UserTransformer::class);\n    }\n\n    /**\n     * @param \\App\\Containers\\User\\UI\\API\\Requests\\DeleteUserRequest $request\n     *\n     * @return  \\Illuminate\\Http\\JsonResponse\n     */\n    public function deleteUser(DeleteUserRequest $request)\n    {\n        $user = Apiato::call(DeleteUserAction::class, [$request]);\n\n        return $this->deleted($user);\n    }\n\n    // ...\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Notice")," we call the Action using ",Object(a.b)("inlineCode",{parentName:"p"},"Apiato::call()")," which triggers the ",Object(a.b)("inlineCode",{parentName:"p"},"run")," function in the Action as well inform the action which UI called it, (",Object(a.b)("inlineCode",{parentName:"p"},"$this->getUI()"),") in case you wanna handle the same Action differently based on the UI type."),Object(a.b)("p",null,"The second parameter of the ",Object(a.b)("inlineCode",{parentName:"p"},"call")," function is an array of the Action parameters in order. When you need to pass data to the Action, it's recommended to pass the Request Object as it should be the place that holds the state of your current request."),Object(a.b)("p",null,"Refer to the ",Object(a.b)("strong",{parentName:"p"},"Magical Call")," page for more info and examples on how to use the call function."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example: Usage from Routes Endpoint:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$router->post('login', [\n    'uses' => 'Controller@loginUser',\n]);\n\n$router->post('logout', [\n    'uses'       => 'Controller@logoutUser',\n    'middleware' => [\n        'api.auth',\n    ],\n]);\n")),Object(a.b)("a",{name:"controller-response-builder-helper-functions"}),Object(a.b)("h3",{id:"controller-response-builder-helper-functions"},"Controller response builder helper functions"),Object(a.b)("p",null,"Many helper function are there to help you build your response faster, those helpers exist in the ",Object(a.b)("inlineCode",{parentName:"p"},"vendor/apiato/core/Traits/ResponseTrait.php"),"."),Object(a.b)("a",{name:"some-of-the-functions"}),Object(a.b)("h4",{id:"some-functions"},"Some functions"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"transform"),"\nThis is the most useful function which you will be using in most cases."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"First required parameter accepts data as object or Collection of objects."),Object(a.b)("li",{parentName:"ul"},"Second required parameter is the transformer object"),Object(a.b)("li",{parentName:"ul"},"Third optional parameter take the includes that should be returned by the response, ",Object(a.b)("em",{parentName:"li"},"($availableIncludes and $defaultIncludes in the transformer class)"),".  "),Object(a.b)("li",{parentName:"ul"},"Fourth optional parameter accepts meta data to be injected in the response.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"// $user is a User Object\nreturn $this->transform($user, UserTransformer::class);\n\n// $orders is a Collection of Order Objects\nreturn $this->transform($orders, OrderTransformer::class, ['products', 'recipients', 'store', 'invoice']);\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"withMeta"),"\nThis function allows including meta data in the response."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"$metaData = ['total_credits', 10000];\n\nreturn $this->withMeta($metaData)->transform($receipt, ReceiptTransformer::class);\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"json"),"\nThis function allows passing array data to be represented as json."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"return $this->json([\n    'foo': 'bar'\n]);\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Other functions")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"accepted"),Object(a.b)("li",{parentName:"ul"},"deleted"),Object(a.b)("li",{parentName:"ul"},"noContent"),Object(a.b)("li",{parentName:"ul"},"// Some functions might not be documented, so refer to the ",Object(a.b)("inlineCode",{parentName:"li"},"vendor/apiato/core/Traits/ResponseTrait.php")," and see the public functions.")))}p.isMDXComponent=!0}}]);