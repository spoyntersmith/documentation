"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Social Authentication"},i=void 0,l={unversionedId:"core-features/social-authentication",id:"version-9.x/core-features/social-authentication",title:"Social Authentication",description:"- Default Supported Auth Provide",source:"@site/versioned_docs/version-9.x/core-features/social-authentication.md",sourceDirName:"core-features",slug:"/core-features/social-authentication",permalink:"/docs/9.x/core-features/social-authentication",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/social-authentication.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1679580761,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"Social Authentication"},sidebar:"version-9.x/docs",previous:{title:"User Registration",permalink:"/docs/9.x/core-features/user-registration"},next:{title:"Query Parameters",permalink:"/docs/9.x/core-features/query-parameters"}},p={},s=[{value:"Default Supported Auth Provide",id:"default-supported-auth-provide",level:2},{value:"How Social Authentication Works",id:"how-social-authentication-works",level:2},{value:"Setup Social Authentication",id:"setup-social-authentication",level:2},{value:"Support new Auth Provider",id:"support-new-auth-provide",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#default-supported-auth-provide"},"Default Supported Auth Provide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-social-authentication-works"},"How Social Authentication Works")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#setup-social-authentication"},"Setup Social Authentication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#support-new-auth-provide"},"Support new Auth Provide"))),(0,a.kt)("p",null,"For Social Authentication Apiato uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/laravel/socialite"},"Socialite"),"."),(0,a.kt)("h2",{id:"default-supported-auth-provide"},"Default Supported Auth Provide"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Facebook"),(0,a.kt)("li",{parentName:"ul"},"Twitter")),(0,a.kt)("h2",{id:"how-social-authentication-works"},"How Social Authentication Works"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The Client (Mobile or Web) sends a request to the Social Auth Provider (Facebook, Twitter..)."),(0,a.kt)("li",{parentName:"ol"},"The Social Auth Provider returns a Code (Tokens)."),(0,a.kt)("li",{parentName:"ol"},"The Client makes a call to the server (our server) and passes the Code (Tokens) retrieved from the Provider."),(0,a.kt)("li",{parentName:"ol"},"The Server fetches the user data from the Social Auth Provider using the received Code (Tokens)."),(0,a.kt)("li",{parentName:"ol"},"The Server create new User from the collected social data and return the Authenticated User (If the user already created then it just returns it).")),(0,a.kt)("h2",{id:"setup-social-authentication"},"Setup Social Authentication"),(0,a.kt)("p",null,"1) Create an App on the supported Social Auth provider."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For Facebook: ",(0,a.kt)("a",{parentName:"li",href:"https://developers.facebook.com/apps"},"https://developers.facebook.com/apps")),(0,a.kt)("li",{parentName:"ul"},"For Twitter: ",(0,a.kt)("a",{parentName:"li",href:"https://apps.twitter.com/app"},"https://apps.twitter.com/app")),(0,a.kt)("li",{parentName:"ul"},"For Google: ",(0,a.kt)("a",{parentName:"li",href:"https://console.developers.google.com/apis/credentials"},"https://console.developers.google.com/apis/credentials"))),(0,a.kt)("p",null,"For the callback URL you can use this Apiato web endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"http://apiato.test/auth/{provider}/callback")," ",(0,a.kt)("em",{parentName:"p"},"(replace the provider with any of the supported providers ",(0,a.kt)("inlineCode",{parentName:"em"},"facebook"),", ",(0,a.kt)("inlineCode",{parentName:"em"},"twitter"),",..)"),"."),(0,a.kt)("p",null,"2) Set the Tokens and Secrets in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"    'facebook' => [\n        'client_id'     => env('AUTH_FACEBOOK_CLIENT_ID'), // App ID\n        'client_secret' => env('AUTH_FACEBOOK_CLIENT_SECRET'), // App Secret\n        'redirect'      => env('AUTH_FACEBOOK_CLIENT_REDIRECT'),\n    ],\n\n    'twitter' => [\n        'client_id'     => env('AUTH_TWITTER_CLIENT_ID'), // Consumer Key (API Key)\n        'client_secret' => env('AUTH_TWITTER_CLIENT_SECRET'), // Consumer Secret (API Secret)\n        'redirect'      => env('AUTH_TWITTER_CLIENT_REDIRECT'),\n    ],\n\n    'google' => [\n        'client_id'     => env('AUTH_GOOGLE_CLIENT_ID'), // Client ID\n        'client_secret' => env('AUTH_GOOGLE_CLIENT_SECRET'), // Client secret\n        'redirect'      => env('AUTH_GOOGLE_CLIENT_REDIRECT'),\n    ],\n")),(0,a.kt)("p",null,"3) Make a request from your client to get the ",(0,a.kt)("inlineCode",{parentName:"p"},"oauth")," info. ",(0,a.kt)("strong",{parentName:"p"},"Each Social provider returns different response and keys")),(0,a.kt)("p",null,"For testing purposes Apiato provides a web endpoint (",(0,a.kt)("inlineCode",{parentName:"p"},"http://apiato.test/auth/{provider}")," ) to act as a client."),(0,a.kt)("p",null,"Use that endpoint from your browser ",(0,a.kt)("em",{parentName:"p"},"(replace the provider with any of the supported providers ",(0,a.kt)("inlineCode",{parentName:"em"},"facebook"),", ",(0,a.kt)("inlineCode",{parentName:"em"},"twitter"),",..)")," to get the ",(0,a.kt)("inlineCode",{parentName:"p"},"oauth")," info."),(0,a.kt)("p",null,"Example Twitter Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'User {\n  tokentoken: "121212121-121212121"\n  tokentokenSecret: "34343434343434343343434343"\n  tokenid: "777777777"\n  tokennickname: "Mahmoud_Zalt"\n  tokenname: "Mahmoud Zalt"\n  tokenemail: null\n  tokenavatar: "http://pbs.twimg.com/profile_images/88888888/PENrcePC_normal.jpg"\n  tokenuser:\n  token"avatar_original": "http://pbs.twimg.com/profile_images/9999999/PENrcePC.jpg"\n}\n')),(0,a.kt)("p",null,"NOTE: This step should be done by your client App, which could be a Web, Mobile or other kind of client Apps."),(0,a.kt)("p",null,"4) Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"oauth")," info to make a call from your server to the Social Provider in order to get the User info."),(0,a.kt)("p",null,"Example Getting Twitter User: ",(0,a.kt)("strong",{parentName:"p"},"Twitter requires the ",(0,a.kt)("inlineCode",{parentName:"strong"},"oauth_token")," and ",(0,a.kt)("inlineCode",{parentName:"strong"},"oauth_secret"),", other Providers might only require the ",(0,a.kt)("inlineCode",{parentName:"strong"},"oauth_token"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"POST /v1/auth/twitter HTTP/1.1\nHost: api.apiato.test\nContent-Type: application/x-www-form-urlencoded\nAccept: application/json\n\noauth_token=121212121-121212121&oauth_secret=34343434343434343343434343\n")),(0,a.kt)("p",null,"Note: For Facebook only send ",(0,a.kt)("inlineCode",{parentName:"p"},"oauth_token")," which is named as ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," in facebook response.\nFor more details about parameters checkout the generated documentation or visit ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Containers/Socialauth/UI/API/Routes/AuthenticateAll.v1.private.php")),(0,a.kt)("p",null,"5) The endpoint above should return the User and his Personal Access Token."),(0,a.kt)("p",null,"Example Twitter Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "object": "User",\n        "id": "eqwja3vw94kzmxr0",\n        "name": "Mahmoud Zalt",\n        "email": null,\n        "confirmed": false,\n        "nickname": null,\n        "gender": null,\n        "birth": null,\n        "social_auth_provider": "twitter",\n        "social_id": "42719726",\n        "social_avatar": {\n            "avatar": "http://pbs.twimg.com/profile_images/1111111111/PENrcePC_normal.jpg",\n            "original": null\n        },\n        "created_at": {\n            "date": "2017-10-20 21:45:03.000000",\n            "timezone_type": 3,\n            "timezone": "UTC"\n        },\n        "updated_at": {\n            "date": "2017-10-20 21:45:03.000000",\n            "timezone_type": 3,\n            "timezone": "UTC"\n        },\n        "readable_created_at": "48 minutes ago",\n        "readable_updated_at": "48 minutes ago"\n    },\n    "meta": {\n        "include": [\n            "roles"\n        ],\n        "custom": {\n            "token_type": "personal",\n            "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI..."\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"support-new-auth-provide"},"Support new Auth Provider"),(0,a.kt)("p",null,"1) Pick an Auth Provider from the supported providers by ",(0,a.kt)("a",{parentName:"p",href:"https://socialiteproviders.github.io/"},"Socialite"),"."),(0,a.kt)("p",null,"2) Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Containers/Socialauth/Tasks/FindUserSocialProfileTask.php")," and support your provider."))}d.isMDXComponent=!0}}]);