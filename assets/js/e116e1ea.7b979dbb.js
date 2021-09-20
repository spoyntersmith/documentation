(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{258:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(8),i=(a(0),a(282)),r={title:"Social Authentication"},c={unversionedId:"additional-features/apiato-containers/social-authentication",id:"additional-features/apiato-containers/social-authentication",isDocsHomePage:!1,title:"Social Authentication",description:"- Installation",source:"@site/docs/additional-features/apiato-containers/social-authentication.md",sourceDirName:"additional-features/apiato-containers",slug:"/additional-features/apiato-containers/social-authentication",permalink:"/docs/next/additional-features/apiato-containers/social-authentication",editUrl:"https://github.com/apiato/documentation/tree/master/docs/additional-features/apiato-containers/social-authentication.md",version:"current",lastUpdatedBy:"mohammad-alavi",lastUpdatedAt:1632132839,formattedLastUpdatedAt:"9/20/2021",frontMatter:{title:"Social Authentication"},sidebar:"docs",previous:{title:"Documentation",permalink:"/docs/next/additional-features/apiato-containers/documentation"},next:{title:"Localization",permalink:"/docs/next/additional-features/apiato-containers/localization"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Default Supported Auth Provide",id:"default-supported-auth-provide",children:[]},{value:"How Social Authentication Works",id:"how-social-authentication-works",children:[]},{value:"Setup Social Authentication",id:"Setup-Social-Authentication",children:[]},{value:"Social Authentication Container Customization",id:"social-auth-customization",children:[{value:"Support new Auth Provider",id:"support-new-auth-provide",children:[]},{value:"Changing default used Repository, Transformer &amp; DB user table name",id:"changing-defaults",children:[]}]}],p={toc:l};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#installation"},"Installation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#default-supported-auth-provide"},"Default Supported Auth Provide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-social-authentication-works"},"How Social Authentication Works")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Setup-Social-Authentication"},"Setup Social Authentication")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#social-auth-customization"},"Social Authentication Container Customization"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#support-new-auth-provide"},"Support new Auth Provider")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#changing-defaults"},"Changing default used Repository, Transformer & DB user table name"))))),Object(i.b)("p",null,"Under the hood this container uses ",Object(i.b)("a",{parentName:"p",href:"https://github.com/laravel/socialite"},"Laravel Socialite"),"."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"In the following instructions we assume we have a fresh ",Object(i.b)("strong",{parentName:"p"},"Apiato")," installation."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"composer require apiato/social-auth-container\n")),Object(i.b)("p",null,"Now run ",Object(i.b)("inlineCode",{parentName:"p"},"php artisan migrate")),Object(i.b)("p",null,"Add this values to $fillable array in your ",Object(i.b)("inlineCode",{parentName:"p"},"User")," model"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    protected $fillable = [\n        ...\n        'social_provider',\n        'social_nickname',\n        'social_id',\n        'social_token',\n        'social_token_secret',\n        'social_refresh_token',\n        'social_expires_in',\n        'social_avatar',\n        'social_avatar_original',\n        ...\n    ];\n")),Object(i.b)("p",null,"Optionally add this to your user transformer to add social auth fields to your user repsonses:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"'social_auth_provider' => $user->social_provider,\n    'social_nickname' => $user->social_nickname,\n    'social_id' => $user->social_id,\n    'social_avatar' => [\n        'avatar' => $user->social_avatar,\n        'original' => $user->social_avatar_original,\n    ]\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"It is recommended to have 2 separate transformers (private & public) for the User e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"UserPrivateProfileTransformer"),"\n& ",Object(i.b)("inlineCode",{parentName:"p"},"UserTransformer")," and add above data to the private transformer not the public one. By doing it this way you can hide\nyour User's personal data.  "))),Object(i.b)("h2",{id:"default-supported-auth-provide"},"Default Supported Auth Provide"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Google"),Object(i.b)("li",{parentName:"ul"},"Facebook"),Object(i.b)("li",{parentName:"ul"},"Twitter")),Object(i.b)("h2",{id:"how-social-authentication-works"},"How Social Authentication Works"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The Client (Mobile or Web) sends a request to the Social Auth Provider (Facebook, Twitter...)."),Object(i.b)("li",{parentName:"ol"},"The Social Auth Provider returns a Token."),Object(i.b)("li",{parentName:"ol"},"The Client makes a call to the server (our server) and passes the Token."),Object(i.b)("li",{parentName:"ol"},"The Server fetches the user data from the Social Auth Provider using Token."),Object(i.b)("li",{parentName:"ol"},"The Server create new User from the collected social data and return the Authenticated User (If the user already\ncreated then it just returns it).")),Object(i.b)("h2",{id:"Setup-Social-Authentication"},"Setup Social Authentication"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create an App on the supported Social Auth provider.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For Facebook: ",Object(i.b)("a",{parentName:"li",href:"https://developers.facebook.com/apps"},"https://developers.facebook.com/apps")),Object(i.b)("li",{parentName:"ul"},"For Twitter: ",Object(i.b)("a",{parentName:"li",href:"https://apps.twitter.com/app"},"https://apps.twitter.com/app")),Object(i.b)("li",{parentName:"ul"},"For\nGoogle: ",Object(i.b)("a",{parentName:"li",href:"https://console.developers.google.com/apis/credentials"},"https://console.developers.google.com/apis/credentials"))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"For any supported provider you want to use, add their credentials to ",Object(i.b)("inlineCode",{parentName:"p"},"config/services.php"),". ",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/socialite#configuration"},"read more"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make a request from your client to get the ",Object(i.b)("inlineCode",{parentName:"p"},"oauth")," info. (Each Social provider returns different response and keys)."))),Object(i.b)("p",null,"Example Twitter Response:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "User": {\n    "tokentoken": "1212",\n    "tokentokenSecret": "3434",\n    "tokenid": "777",\n    "tokennickname": "John_Doe",\n    "tokenname": "John Doe",\n    "tokenemail": null,\n    "tokenavatar": "http://pbs.twimg.com/images/888/PENrcePC.jpg",\n    "tokenuser": "token",\n    "avatar_original": "http://pbs.twimg.com/images/999/PENrcePC.jpg"\n  }\n}\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This step should be done by your client App, which could be a Web, Mobile or other kind of client Apps.  "))),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("inlineCode",{parentName:"p"},"auth/{provider}")," route and the ",Object(i.b)("inlineCode",{parentName:"p"},"oauth")," info to make a call from your server to the Social Provider in order to\nget the User info. For more details about the ",Object(i.b)("inlineCode",{parentName:"p"},"auth/{provider}")," route parameters checkout the generated documentation or\nvisit ",Object(i.b)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Socialauth/UI/API/Routes/AuthenticateAll.v1.private.php"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The endpoint above should return the User and his Personal Access Token."))),Object(i.b)("p",null,"Example Google Response:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        // user data\n        .\n        .\n        .\n        // additional social data if you have updated your transformer as mentioned above\n        "social_auth_provider": "google",\n        "social_id": "113834952367767922133",\n        "social_avatar": {\n            "avatar": "https:\\/\\/lh6.googleusercontent.com\\/-OSItz6IHbSw\\/AAA\\/AMZuucltEs\\/s96-c\\/photo.jpg",\n            "original": "https:\\/\\/lh6.googleusercontent.com\\/-OSItz6IHbSw\\/AAA\\/AMZuucltEs\\/s96-c\\/photo.jpg"\n        }\n    },\n    "meta": {\n        "include": [\n            "roles"\n        ],\n        "custom": {\n            "token_type": "personal",\n            "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...."\n        }\n    }\n}\n')),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"For testing purposes Apiato provides two web endpoints"),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"http://apiato.test/auth/{provider}/redirect")," which act as a client (step 3 above)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"http://apiato.test/auth/{provider}/callback")," which you can use in your provider's developer dashboard for callback url.",Object(i.b)("br",{parentName:"li"}),"Use those endpoints from your browser ",Object(i.b)("em",{parentName:"li"},"(replace the provider with any of the supported providers ",Object(i.b)("inlineCode",{parentName:"em"},"facebook"),", ",Object(i.b)("inlineCode",{parentName:"em"},"twitter"),",...)"),"\nto get the ",Object(i.b)("inlineCode",{parentName:"li"},"oauth")," info and user data respectively.  ")))),Object(i.b)("h2",{id:"social-auth-customization"},"Social Authentication Container Customization"),Object(i.b)("p",null,"You can customize this container by publishing its config and modifying its values"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"php artisan vendor:publish\n")),Object(i.b)("p",null,"Config file will be copied to ",Object(i.b)("inlineCode",{parentName:"p"},"app/Ship/Configs/vendor-socialAuth.php")),Object(i.b)("h3",{id:"support-new-auth-provide"},"Support new Auth Provider"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Publish the configs"),Object(i.b)("li",{parentName:"ol"},"Create your new auth provider by implementing ",Object(i.b)("inlineCode",{parentName:"li"},"App\\Containers\\Vendor\\SocialAuth\\Contracts\\SocialAuthProvider")," interface.",Object(i.b)("br",{parentName:"li"}),"To get an idea about how to implement your own provider you can check out supported providers here ",Object(i.b)("inlineCode",{parentName:"li"},"App\\Containers\\Vendor\\SocialAuth\\SocialAuthProviders"),"."),Object(i.b)("li",{parentName:"ol"},"Add your new provider to ",Object(i.b)("inlineCode",{parentName:"li"},"providers")," array in the ",Object(i.b)("inlineCode",{parentName:"li"},"vendor-socialAuth")," config.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"    'providers' => [\n        ...\n        'something' => Location\\Of\\Your\\Provider\\SomthingSocialAuthProvider::class,\n    ],\n")),Object(i.b)("h3",{id:"changing-defaults"},"Changing default used Repository, Transformer & DB user table name"),Object(i.b)("p",null,"This container depends on Apiato's default user repository, transformer & database user table name.\nIf you changed those defaults you can update and provide them in the configs."))}s.isMDXComponent=!0},282:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||i;return a?o.a.createElement(m,c(c({ref:t},p),{},{components:a})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var p=2;p<i;p++)r[p]=a[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);