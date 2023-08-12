"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8136],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(h,l(l({ref:n},p),{},{components:t})):r.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5374:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={title:"Middlewares"},l=void 0,o={unversionedId:"optional-components/middlewares",id:"version-9.x/optional-components/middlewares",title:"Middlewares",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/middlewares.md",sourceDirName:"optional-components",slug:"/optional-components/middlewares",permalink:"/docs/9.x/optional-components/middlewares",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/optional-components/middlewares.md",tags:[],version:"9.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1691839128,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Middlewares"},sidebar:"version-9.x/docs",previous:{title:"Factories",permalink:"/docs/9.x/optional-components/factories"},next:{title:"Configs",permalink:"/docs/9.x/optional-components/configs"}},s={},d=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-sample",level:3}],p={toc:d},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Middleware provide a convenient mechanism for filtering HTTP requests entering your application. More about them ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/middleware"},"here"),"."),(0,a.kt)("p",null,"You can enable and disable Middlewares as you wish."),(0,a.kt)("h3",{id:"principles"},"Principles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There are two types of Middlewares, General (applied on all the Routes by default) and Endpoints Middlewares (applied on some Endpoints).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Middlewares CAN be placed in Ship layer or Container layer depending on its roles."))),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If a Middleware is written inside a Container it MUST be registered inside that Container.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To register Middlewares in a Container the container needs to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"MiddlewareServiceProvider"),", and like all other Container Providers it MUST be registered in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MainServiceProvider")," of that Container.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"General Middlewares (like some default Laravel Middlewares) SHOULD live in the Ship layer ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Ship/Middlewares/*")," and are registered in the Ship Main Provider.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Third Party packages Middleware CAN be registered in Containers or on the Ship layer (wherever they make more sense).\n",(0,a.kt)("em",{parentName:"p"},"Example: the ",(0,a.kt)("inlineCode",{parentName:"em"},"jwt.auth"),' middleware "provided by the JWT package" is registered in the Authentication Container (',(0,a.kt)("inlineCode",{parentName:"em"},"Containers/Authentication/Providers/MiddlewareServiceProvider.php"),")"),".\n"))),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - App\n   - Containers\n       - {container-name}\n           - Middlewares\n              - WebAuthentication.php\n   - Ship\n       - Middleware\n          - Http\n             - EncryptCookies.php\n             - VerifyCsrfToken.php\n")),(0,a.kt)("h3",{id:"code-sample"},"Code Sample"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Middleware Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Authentication\\Middlewares;\n\nuse App\\Ship\\Engine\\Butlers\\Facades\\ContainersButler;\nuse App\\Ship\\Parents\\Middlewares\\Middleware;\nuse Closure;\nuse Illuminate\\Contracts\\Auth\\Guard;\nuse Illuminate\\Http\\Request;\n\n/**\n * Class WebAuthentication\n *\n * @author  Mahmoud Zalt  <mahmoud@zalt.me>\n */\nclass WebAuthentication extends Middleware\n{\n\n    protected $auth;\n\n    public function __construct(Guard $auth)\n    {\n        $this->auth = $auth;\n    }\n\n    public function handle(Request $request, Closure $next)\n    {\n        if ($this->auth->guest()) {\n            return response()->view(ContainersButler::getLoginWebPageName(), [\n                'errorMessage' => 'Credentials Incorrect.'\n            ]);\n        }\n\n        return $next($request);\n    }\n}\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Middleware registration inside the Container Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Authentication\\Providers;\n\nuse App\\Containers\\Authentication\\Middlewares\\WebAuthentication;\nuse App\\Ship\\Parents\\Providers\\MiddlewareProvider;\nuse Tymon\\JWTAuth\\Middleware\\GetUserFromToken;\nuse Tymon\\JWTAuth\\Middleware\\RefreshToken;\n\nclass MiddlewareServiceProvider extends MiddlewareProvider\n{\n\n    protected $middleware = [\n\n    ];\n\n    protected $middlewareGroups = [\n        'web' => [\n\n        ],\n        'api' => [\n\n        ],\n    ];\n\n    protected $routeMiddleware = [\n        'jwt.auth'         => GetUserFromToken::class,\n        'jwt.refresh'      => RefreshToken::class,\n        'auth:web'         => WebAuthentication::class,\n    ];\n\n    public function boot()\n    {\n        $this->loadContainersInternalMiddlewares();\n    }\n\n    public function register()\n    {\n\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Middleware registration inside the Ship layer (HTTP Kernel) Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Ship\\Kernels;\n\nuse App\\Ship\\Middlewares\\Http\\ProcessETagHeadersMiddleware;\nuse App\\Ship\\Middlewares\\Http\\ProfilerMiddleware;\nuse App\\Ship\\Middlewares\\Http\\ValidateJsonContent;\nuse Illuminate\\Foundation\\Http\\Kernel as LaravelHttpKernel;\n\n/**\n * Class HttpKernel\n *\n * A.K.A (app/Http/Kernel.php)\n *\n * @author  Mahmoud Zalt  <mahmoud@zalt.me>\n */\nclass HttpKernel extends LaravelHttpKernel\n{\n\n    /**\n     * The application's global HTTP middleware stack.\n     *\n     * These middleware are run during every request to your application.\n     *\n     * @var array\n     */\n    protected $middleware = [\n        // Laravel middleware's\n        \\Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode::class,\n        \\Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize::class,\n        \\Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull::class,\n        \\App\\Ship\\Middlewares\\Http\\TrimStrings::class,\n        \\App\\Ship\\Middlewares\\Http\\TrustProxies::class,\n\n        // CORS package middleware\n        \\Barryvdh\\Cors\\HandleCors::class,\n    ];\n\n    /**\n     * The application's route middleware groups.\n     *\n     * @var array\n     */\n    protected $middlewareGroups = [\n        'web' => [\n            \\App\\Ship\\Middlewares\\Http\\EncryptCookies::class,\n            \\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse::class,\n            \\Illuminate\\Session\\Middleware\\StartSession::class,\n            \\Illuminate\\View\\Middleware\\ShareErrorsFromSession::class,\n            \\App\\Ship\\Middlewares\\Http\\VerifyCsrfToken::class,\n            \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,\n        ],\n\n        'api' => [\n            ValidateJsonContent::class,\n            'bindings',\n            ProcessETagHeadersMiddleware::class,\n            ProfilerMiddleware::class,\n            // The throttle Middleware is registered by the RoutesLoaderTrait in the Core\n        ],\n    ];\n\n    /**\n     * The application's route middleware.\n     *\n     * These middleware may be assigned to groups or used individually.\n     *\n     * @var array\n     */\n    protected $routeMiddleware = [\n        'bindings' => \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,\n        'throttle' => \\Illuminate\\Routing\\Middleware\\ThrottleRequests::class,\n        'can'      => \\Illuminate\\Auth\\Middleware\\Authorize::class,\n        'auth'     => \\Illuminate\\Auth\\Middleware\\Authenticate::class,\n    ];\n\n}\n")))}c.isMDXComponent=!0}}]);