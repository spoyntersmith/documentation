"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={title:"Localization"},o=void 0,r={unversionedId:"core-features/localization",id:"version-9.x/core-features/localization",title:"Localization",description:"- Select Request Language",source:"@site/versioned_docs/version-9.x/core-features/localization.md",sourceDirName:"core-features",slug:"/core-features/localization",permalink:"/docs/9.x/core-features/localization",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/localization.md",tags:[],version:"9.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1691839128,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Localization"},sidebar:"version-9.x/docs",previous:{title:"Hash ID",permalink:"/docs/9.x/core-features/hash-id"},next:{title:"Rate Limiting",permalink:"/docs/9.x/core-features/rate-limiting"}},s={},p=[{value:"Select Request Language",id:"select-request-language",level:2},{value:"Support new languages",id:"support-new-languages",level:2},{value:"Translating Strings",id:"translating-strings",level:2},{value:"Disable Localization",id:"disable-localization",level:2},{value:"Get Available Localizations",id:"get-available-localizations",level:2},{value:"Tests",id:"tests",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#select-request-language"},"Select Request Language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#support-new-languages"},"Support new languages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#translating-strings"},"Translating Strings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-localization"},"Disable Localization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#get-available-localizations"},"Get Available Localizations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tests"},"Tests"))),(0,i.kt)("p",null,"The Localization is provided by the Localization Container."),(0,i.kt)("h2",{id:"select-request-language"},"Select Request Language"),(0,i.kt)("p",null,"You can select the language of the response by adding the header ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Language")," to the request. By default, the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Language")," is set to the language defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"config/app.php")," ",(0,i.kt)("inlineCode",{parentName:"p"},"locale"),". "),(0,i.kt)("p",null,"Please note that ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Language")," only determines, that the client ",(0,i.kt)("em",{parentName:"p"},"would like")," to get the information in this specific\nlanguage. It is not given, that the API responds in this language!"),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header is missing, the default locale will be applied."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Heads up!"),"\nPlease be sure that your client does not send an ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header automatically. Some REST clients\n(e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"POSTMAN"),") automatically add header-fields based on the operating-systems settings. So your ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header\nmay be set automatically without knowing!")),(0,i.kt)("p",null,"The API will answer with the applied language in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Language")," header of the response."),(0,i.kt)("p",null,"If the requested language cannot be resolved (e.g. it is not defined) the API throws an ",(0,i.kt)("inlineCode",{parentName:"p"},"UnsupportedLanguageException")," to tell\nthe client about this."),(0,i.kt)("p",null,"The overall workflow of the Middleware is as follows:\n1) Extract the ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Language")," field from the request header. If none is set, use the default locale from the config file\n2) Build a list of all supported localizations based on the configuration of the respective container. If a language\n(top level) contains regions (sub-level), order them like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"['en-GB', 'en-US', 'en']")," (the regions before languages,\nas regions are more specific)\n3) Check, if the value from 1) is within the list from 2). If the value is within this list, set it as application language,\nif not throw an ",(0,i.kt)("inlineCode",{parentName:"p"},"Exception"),"."),(0,i.kt)("h2",{id:"support-new-languages"},"Support new languages"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"All supported languages must be added to the ",(0,i.kt)("inlineCode",{parentName:"li"},"supported_languages")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"app/Containers/Localization/Configs/localization.php"),"\nto prevent users from requesting unsupported languages, as follows:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n    'supported_languages' => [\n        'ar',\n        'en' => [\n            'en-GB',\n            'en-US',\n        ],\n        'es',\n        'fr',\n    ],\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create new languages files:")),(0,i.kt)("p",null,"Languages file can be placed in any container, not only the Localization Container. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"./localization"},"Localization"),"\npage for more info."),(0,i.kt)("p",null,"Example languages files are included in the Localization Container at ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Containers/Localization/Resources/Languages"),"."),(0,i.kt)("h2",{id:"translating-strings"},"Translating Strings"),(0,i.kt)("p",null,"By default all the Container translation files are namespaced to the Container name."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("p",null,"If a Container named ",(0,i.kt)("inlineCode",{parentName:"p"},"Store")," has ",(0,i.kt)("inlineCode",{parentName:"p"},"en")," translation file called ",(0,i.kt)("inlineCode",{parentName:"p"},"notifications")," that contains translation for ",(0,i.kt)("inlineCode",{parentName:"p"},"welcome"),'\nlike "Welcome to our store :)". You can access this translation as follows ',(0,i.kt)("inlineCode",{parentName:"p"},"trans('store::notifications.welcome')"),". If\nyou remove the namespace (which is the lowercase of the container name) and try to access it like this\n",(0,i.kt)("inlineCode",{parentName:"p"},"trans('notifications.welcome')")," it will not find your translation and will print ",(0,i.kt)("inlineCode",{parentName:"p"},"notifications.welcome")," only."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Heads up!"),"\nIf you try to load a string for a language that is ",(0,i.kt)("strong",{parentName:"p"},"not available")," (e.g., there is no folder for this language), Apiato\nwill stick to the default one that is defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"app.locale")," config file. This is also true, if the requested locale\nis present in the ",(0,i.kt)("inlineCode",{parentName:"p"},"supported_languages")," array from the configuration file.")),(0,i.kt)("h2",{id:"disable-localization"},"Disable Localization"),(0,i.kt)("p",null,"You will need to remove the Localization Middleware, by simply going to ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Containers/Localization/Providers/MainServiceProvider.php"),"\nand removing the ",(0,i.kt)("inlineCode",{parentName:"p"},"MiddlewareServiceProvider")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"$serviceProviders")," property."),(0,i.kt)("h2",{id:"get-available-localizations"},"Get Available Localizations"),(0,i.kt)("p",null,"Apiato provides a convenient way to get all defined localizations. These localizations can be retrieved via ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /localizations"),'\nby default. Note that this route only outputs the "top level" locales, like ',(0,i.kt)("inlineCode",{parentName:"p"},"en")," from the example above. However, if\nspecific regions (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"en-US"),") are defined, these will show up in the result as well."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Transformer")," for the localizations not only provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"language")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"de"),"), but also outputs the name of the\nlanguage in this specific language (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"locale_name => Deutsch"),"). Furthermore, the language name is outputted in the\napplications default name (e.g., configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"app.locale"),"). This would result in ",(0,i.kt)("inlineCode",{parentName:"p"},"default_name => German"),"."),(0,i.kt)("p",null,"The same applies to the regions that are defined (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"de-DE"),"). Consequently, this results in ",(0,i.kt)("inlineCode",{parentName:"p"},"locale_name => Deutschland"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"default_name = Germany"),"."),(0,i.kt)("h2",{id:"tests"},"Tests"),(0,i.kt)("p",null,"To change the default language in your tests requests. You can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," language in the ",(0,i.kt)("inlineCode",{parentName:"p"},"phpunit.xml")," file."))}d.isMDXComponent=!0}}]);