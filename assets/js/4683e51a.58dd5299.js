"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={title:"Localization"},l=void 0,r={unversionedId:"additional-features/apiato-containers/localization",id:"version-10.x/additional-features/apiato-containers/localization",title:"Localization",description:"- Installation",source:"@site/versioned_docs/version-10.x/additional-features/apiato-containers/localization.md",sourceDirName:"additional-features/apiato-containers",slug:"/additional-features/apiato-containers/localization",permalink:"/docs/10.x/additional-features/apiato-containers/localization",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/additional-features/apiato-containers/localization.md",tags:[],version:"10.x",lastUpdatedBy:"Mehrdad Amini",lastUpdatedAt:1687327943,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"Localization"},sidebar:"version-10.x/docs",previous:{title:"Social Authentication",permalink:"/docs/10.x/additional-features/apiato-containers/social-authentication"},next:{title:"Payments",permalink:"/docs/10.x/additional-features/apiato-containers/payments"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Creating new languages files",id:"create-new-languages-files",level:2},{value:"Support new languages",id:"support-new-languages",level:2},{value:"Select Request Language",id:"select-request-language",level:2},{value:"Translating Strings",id:"translating-strings",level:2},{value:"Example",id:"example",level:4},{value:"Disable Localization",id:"disable-localization",level:2},{value:"Get Available Localizations",id:"get-available-localizations",level:2},{value:"Tests",id:"tests",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-new-languages-files"},"Creating new languages files")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#support-new-languages"},"Support new languages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#select-request-language"},"Select Request Language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#translating-strings"},"Translating Strings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-localization"},"Disable Localization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#get-available-localizations"},"Get Available Localizations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tests"},"Tests"))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"composer require apiato/localization-container\n")),(0,i.kt)("h2",{id:"create-new-languages-files"},"Creating new languages files"),(0,i.kt)("p",null,"Languages file can be placed in any container, not only the Localization Container.",(0,i.kt)("br",{parentName:"p"}),"\n","Place language files inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"/Resources/Languages")," folder of your container. For example\n",(0,i.kt)("inlineCode",{parentName:"p"},"app/Containers/SectionName/ContainerName/Resources/Languages"),". You can also place general language files inside the\n",(0,i.kt)("inlineCode",{parentName:"p"},"/Resources/Languages")," folder of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ship"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Just create the ",(0,i.kt)("inlineCode",{parentName:"p"},"/Resources/Languages")," folder if it does not exist.  ")),(0,i.kt)("p",null,"Example languages files are included in the Localization Container at ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Localization/Resources/Languages"),"."),(0,i.kt)("h2",{id:"support-new-languages"},"Support new languages"),(0,i.kt)("admonition",{title:"Instructions",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This container works out of the box perfectly but if you want to change its configs or modify the codes you MUST follow these steps:"),(0,i.kt)("p",{parentName:"admonition"},"1- Copy the container from ",(0,i.kt)("inlineCode",{parentName:"p"},"Vendor")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"AppSection")," (or any of your custom sections) of your project",(0,i.kt)("br",{parentName:"p"}),"\n","2- Fix the namespaces",(0,i.kt)("br",{parentName:"p"}),"\n","3- Remove ",(0,i.kt)("inlineCode",{parentName:"p"},"apiato/localization-container")," dependency from project root composer.json  ")),(0,i.kt)("p",null,"All supported languages must be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"supported_languages")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Localization/Configs/vendor-localization.php"),"\nto prevent users from requesting unsupported languages, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    'supported_languages' => [\n        'ar',\n        'en' => [\n            'en-GB',\n            'en-US',\n        ],\n        'es',\n        'fr',\n        'fa',\n    ],\n")),(0,i.kt)("h2",{id:"select-request-language"},"Select Request Language"),(0,i.kt)("p",null,"You can select the language of the response by adding the header ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Language")," to the request. By default, the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Language")," is set to the language defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"config/app.php")," ",(0,i.kt)("inlineCode",{parentName:"p"},"locale"),"."),(0,i.kt)("p",null,"Please note that ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Language")," only determines, that the client ",(0,i.kt)("em",{parentName:"p"},"would like")," to get the information in this specific\nlanguage. It is not given, that the API responds in this language!"),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header is missing, the default locale will be applied."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please be sure that your client does not send an ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header automatically. Some REST clients\n(e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"POSTMAN"),") automatically add header-fields based on the operating-systems settings. So your ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header\nmay be set automatically without you knowing!")),(0,i.kt)("p",null,"The API will answer with the applied language in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Language")," header of the response."),(0,i.kt)("p",null,"If the requested language cannot be resolved (e.g. it is not defined) the API throws an ",(0,i.kt)("inlineCode",{parentName:"p"},"UnsupportedLanguageException")," to tell\nthe client about this."),(0,i.kt)("p",null,"The overall workflow of the Middleware is as follows:\n1) Extract the ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Language")," field from the request header. If none is set, use the default locale from the config file\n2) Build a list of all supported localizations based on the configuration of the respective container. If a language\n(top level) contains regions (sub-level), order them like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"['en-GB', 'en-US', 'en']")," (the regions before languages,\nas regions are more specific)\n3) Check, if the value from 1) is within the list from 2). If the value is within this list, set it as application language,\nif not throw an ",(0,i.kt)("inlineCode",{parentName:"p"},"Exception"),"."),(0,i.kt)("h2",{id:"translating-strings"},"Translating Strings"),(0,i.kt)("p",null,"By default, all the Container translation files are namespaced as the camelCase of its Section name + ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," + camelCase of its Container name."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Translation files in ",(0,i.kt)("strong",{parentName:"p"},"Ship"),' folder are exception to this and will be namespaced with the word "',(0,i.kt)("strong",{parentName:"p"},"ship"),'" instead of section name, e.g. ',(0,i.kt)("inlineCode",{parentName:"p"},"__('ship::notifications.welcome')"))),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,"If a translation file called ",(0,i.kt)("inlineCode",{parentName:"p"},"notifications")," is inside ",(0,i.kt)("inlineCode",{parentName:"p"},"MySection")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"MyContainer")," that contains translation for ",(0,i.kt)("inlineCode",{parentName:"p"},"welcome"),'\nlike "Welcome to our store :)". You can access this translation as follows ',(0,i.kt)("inlineCode",{parentName:"p"},"__('mySection@myContainer::notifications.welcome')"),". If\nyou remove the namespace (part before ",(0,i.kt)("inlineCode",{parentName:"p"},"::"),") and try to access it like this\n",(0,i.kt)("inlineCode",{parentName:"p"},"__('notifications.welcome')")," it will not find your translation and will print ",(0,i.kt)("inlineCode",{parentName:"p"},"notifications.welcome")," only."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you try to load a string for a language that is ",(0,i.kt)("strong",{parentName:"p"},"not available")," (e.g., there is no folder for this language), Apiato\nwill stick to the default one that is defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"app.locale")," config file. This is also true, if the requested locale\nis present in the ",(0,i.kt)("inlineCode",{parentName:"p"},"supported_languages")," array from the configuration file.")),(0,i.kt)("h2",{id:"disable-localization"},"Disable Localization"),(0,i.kt)("p",null,"You will need to remove the Localization Middleware, by simply going to ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Localization/Providers/MainServiceProvider.php"),"\nand remove/comment the ",(0,i.kt)("inlineCode",{parentName:"p"},"MiddlewareServiceProvider")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"$serviceProviders")," property. Or you can just completely remove the container."),(0,i.kt)("h2",{id:"get-available-localizations"},"Get Available Localizations"),(0,i.kt)("p",null,"This container provides a convenient way to get all defined localizations. These localizations can be retrieved via ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /localizations"),'\nby default. Note that this route only outputs the "top level" locales, like ',(0,i.kt)("inlineCode",{parentName:"p"},"en")," from the example above. However, if\nspecific regions (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"en-US"),") are defined, these will show up in the result as well."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Transformer")," for the localizations not only provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"language")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"de"),"), but also outputs the name of the\nlanguage in this specific language (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"locale_name => Deutsch"),"). Furthermore, the language name is outputted in the\napplications default name (e.g., configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"app.locale"),"). This would result in ",(0,i.kt)("inlineCode",{parentName:"p"},"default_name => German"),"."),(0,i.kt)("p",null,"The same applies to the regions that are defined (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"de-DE"),"). Consequently, this results in ",(0,i.kt)("inlineCode",{parentName:"p"},"locale_name => Deutschland"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"default_name = Germany"),"."),(0,i.kt)("h2",{id:"tests"},"Tests"),(0,i.kt)("p",null,"To change the default language in your tests requests. You can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," language in the ",(0,i.kt)("inlineCode",{parentName:"p"},"phpunit.xml")," file."))}d.isMDXComponent=!0}}]);