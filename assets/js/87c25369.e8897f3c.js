"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={title:"Documentation"},r=void 0,l={unversionedId:"additional-features/documentation",id:"additional-features/documentation",title:"Documentation",description:"- Requirements",source:"@site/docs/additional-features/documentation.md",sourceDirName:"additional-features",slug:"/additional-features/documentation",permalink:"/docs/next/additional-features/documentation",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/additional-features/documentation.md",tags:[],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1691839128,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Documentation"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/additional-features/overview"},next:{title:"Social Authentication",permalink:"/docs/next/additional-features/social-authentication"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Write PHP <strong>docblock</strong>",id:"write-php-docblock",level:3},{value:"Run Documentation Generator",id:"run-documentation-generator",level:3},{value:"Error: ApiDoc not found !!",id:"error-apidoc-not-found-",level:4},{value:"Visit Documentation URL&#39;s",id:"visit-docs-urls",level:3},{value:"Shared Response",id:"shared-response",level:3},{value:"Documentation Container Customization",id:"documentation-customization",level:2},{value:"Publishing configs",id:"publish-configs",level:3},{value:"Modifying the source code",id:"modify-code",level:3},{value:"Change the Documentations URL&#39;s",id:"change-the-documentations-urls",level:3},{value:"Private Documentation Protection",id:"private-docs-protection",level:3},{value:"Edit Default Generated Values in Templates",id:"edit-default-generated-values-in-templates",level:3},{value:"Edit the Documentation Header",id:"edit-the-documentation-header",level:3},{value:"Localization for Documentation Header",id:"localization-for-documentation-header",level:3}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#usage"},"Usage"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#write-php-docblock"},"Write PHP ",(0,i.kt)("strong",{parentName:"a"},"docblock"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#run-documentation-generator"},"Run Documentation Generator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#visit-docs-urls"},"Visit Documentation URL's")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#shared-response"},"Shared Response")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#documentation-customization"},"Documentation Container Customization"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#publish-configs"},"Publishing Configs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#modify-code"},"Modifying the source code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#change-the-documentations-urls"},"Change the Documentations URL's")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#private-docs-protection"},"Private Documentation Protection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#edit-default-generated-values-in-templates"},"Edit Default Generated Values in Templates")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#edit-the-documentation-header"},"Edit the Documentation Header")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#localization-for-documentation-header"},"Localization for Documentation Header"))))),(0,i.kt)("p",null,"Every great API needs a great Documentation."),(0,i.kt)("p",null,"Apiato make writing and generating documentations very easy with the ",(0,i.kt)("inlineCode",{parentName:"p"},"php artisan apiato:apidoc")," command."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("a",{parentName:"p",href:"http://apidocjs.com/"},"ApiDocJs")," in the project directory"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"(",(0,i.kt)("inlineCode",{parentName:"li"},"npm install apidoc"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"(Recommended) read the ",(0,i.kt)("a",{parentName:"p",href:"../main-components/routes"},"Routes")," page first."))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"composer require apiato/documentation-generator-container\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This container is installed by default with an Apiato fresh installation.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"write-php-docblock"},"Write PHP ",(0,i.kt)("strong",{parentName:"h3"},"docblock")),(0,i.kt)("p",null,"Write a PHP ",(0,i.kt)("strong",{parentName:"p"},"docblock")," on top of your endpoint like this:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"For more info about the parameters check out ",(0,i.kt)("a",{parentName:"em",href:"http://apidocjs.com/#install"},"ApiDocJs")," documentation")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @apiGroup           Authentication\n * @apiName            UserLogin\n * @api                {post} /clients/web/login User Login\n * @apiDescription     Description Here....\n * @apiVersion         1.0.0\n * @apiPermission      none\n *\n * @apiHeader          Accept application/json\n *\n * @apiParam           {String}     email\n * @apiParam           {String}     password\n *\n * @apiSuccessExample  {json}       Success-Response:\n *   HTTP/1.1 200 OK\n *   {\n *     "data": {\n *       "id": "XbPW7awNkzl83LD6",\n *       "name": "Super Admin",\n *       "email": "admin@admin.com"\n *       ...\n *   }\n *\n * @apiErrorExample  {json}       Error-Response:\n *   {\n *      "message":"401 Credentials Incorrect.",\n *      "status_code":401\n *   }\n *\n * @apiErrorExample  {json}       Error-Response:\n *   {\n *      "message":"Invalid Input.",\n *      "errors":{\n *         "email":[\n *            "The email field is required."\n *         ]\n *      },\n *      "status_code":422\n *   }\n */\n\nuse App\\Containers\\AppSection\\Authentication\\UI\\API\\Controllers\\Controller;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::post(\'clients/web/login\', [Controller::class, \'proxyLoginForWebClient\']);\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"All the Endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"DocBlocks")," MUST be written inside Routes files, otherwise they won't be loaded.  ")),(0,i.kt)("h3",{id:"run-documentation-generator"},"Run Documentation Generator"),(0,i.kt)("p",null,"Run the documentation generator command from the root directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\nphp artisan apiato:apidoc\n\n")),(0,i.kt)("h4",{id:"error-apidoc-not-found-"},"Error: ApiDoc not found !!"),(0,i.kt)("p",null,"If you get an error (",(0,i.kt)("inlineCode",{parentName:"p"},"apidoc not found"),"),"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#publish-configs"},"Publish the configs"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"executable")," path to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"$(npm bin)/apidoc"))," or to however you access the ",(0,i.kt)("inlineCode",{parentName:"p"},"apidoc")," tool on your machine."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    /*\n    |--------------------------------------------------------------------------\n    | Executable\n    |--------------------------------------------------------------------------\n    |\n    | Specify how you run or access the `apidoc` tool on your machine.\n    |\n    */\n\n    'executable' => 'node_modules/.bin/apidoc',\n    // 'executable' => 'apidoc',\n")),(0,i.kt)("h3",{id:"visit-docs-urls"},"Visit Documentation URL's"),(0,i.kt)("p",null,"Visit documentation URL's as shown in your terminal:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Public (external) API at ",(0,i.kt)("a",{parentName:"li",href:"http://apiato.test/docs"},"http://apiato.test/docs"),"."),(0,i.kt)("li",{parentName:"ul"},"Private (internal) API at ",(0,i.kt)("a",{parentName:"li",href:"http://apiato.test/docs/private"},"http://apiato.test/docs/private"),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Every time you change the DocBlock of a Route file you need to run the ",(0,i.kt)("inlineCode",{parentName:"p"},"apiato:apidoc")," command, to regenerate.  ")),(0,i.kt)("h3",{id:"shared-response"},"Shared Response"),(0,i.kt)("p",null,"You can use shared responses to update the documentation faster, with less outdated responses and prevent duplicating the responses between routes.  "),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"_user.v1.public.php")," will contain all responses (single, multiple...) of the User:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @apiDefine UserSuccessSingleResponse\n * @apiSuccessExample {json} Success-Response:\nHTTP/1.1 200 OK\n{\n   "data":{\n      "object":"User",\n      "id":eqwja3vw94kzmxr0,\n   },\n   "meta":{\n      "include":[],\n      "custom":[]\n   }\n}\n */\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage of the shared User response from any endpoint:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"* @apiUse UserSuccessSingleResponse\n")),(0,i.kt)("h2",{id:"documentation-customization"},"Documentation Container Customization"),(0,i.kt)("p",null,"There are 2 ways you can customize this container: Using its configs or by modifying the source code."),(0,i.kt)("h3",{id:"publish-configs"},"Publishing configs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan vendor:publish\n")),(0,i.kt)("p",null,"Config file will be copied to ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/vendor-documentation.php")),(0,i.kt)("h3",{id:"modify-code"},"Modifying the source code"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy the container from ",(0,i.kt)("inlineCode",{parentName:"li"},"Vendor")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"AppSection")," (or any of your custom sections) of your project  "),(0,i.kt)("li",{parentName:"ol"},"Fix the namespaces  "),(0,i.kt)("li",{parentName:"ol"},"Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"apiato/documentation-generator-container")," dependency from project root composer.json  "),(0,i.kt)("li",{parentName:"ol"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"section_name")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"html_files")," in container configs  "),(0,i.kt)("li",{parentName:"ol"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"apidoc.json")," files in ",(0,i.kt)("inlineCode",{parentName:"li"},"ApiDocJs/private")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"public")," folders and fix the ",(0,i.kt)("inlineCode",{parentName:"li"},"filename"),"  ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "header": {\n        "filename": "Containers/NEW_SECTION_NAME/Documentation/UI/WEB/Views/documentation/header.md"\n    }\n}\n')),(0,i.kt)("h3",{id:"change-the-documentations-urls"},"Change the Documentations URL's"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#publish-configs"},"Publish the configs")," and change ",(0,i.kt)("inlineCode",{parentName:"p"},"types.public.url")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"types.private.url"),"."),(0,i.kt)("h3",{id:"private-docs-protection"},"Private Documentation Protection"),(0,i.kt)("p",null,"By default, this feature is ",(0,i.kt)("strong",{parentName:"p"},"disabled")," in local environment and ",(0,i.kt)("strong",{parentName:"p"},"enabled")," in production.",(0,i.kt)("br",{parentName:"p"}),"\n","To change this behaviour ",(0,i.kt)("a",{parentName:"p",href:"#publish-configs"},"Publish the configs")," and change ",(0,i.kt)("inlineCode",{parentName:"p"},"protect-private-docs"),"."),(0,i.kt)("p",null,"Private documentations route is protected with the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth:web")," middleware.\nYou can grant users access to the protected docs by updating ",(0,i.kt)("inlineCode",{parentName:"p"},"access-private-docs-roles")," &\n",(0,i.kt)("inlineCode",{parentName:"p"},"access-private-docs-permission")," values in documentation config.\nBy default, users need ",(0,i.kt)("inlineCode",{parentName:"p"},"access-private-docs")," permission to access private docs."),(0,i.kt)("h3",{id:"edit-default-generated-values-in-templates"},"Edit Default Generated Values in Templates"),(0,i.kt)("p",null,"Apiato by defaults generates 2 API documentations, each one has its own ",(0,i.kt)("inlineCode",{parentName:"p"},"apidoc.json")," file. Both can be modified from\nthe Documentation Container in ",(0,i.kt)("inlineCode",{parentName:"p"},"Containers/Vendor/Documentation/ApiDocJs/")," and need ",(0,i.kt)("a",{parentName:"p",href:"#modify-code"},"Source code modification"),"."),(0,i.kt)("h3",{id:"edit-the-documentation-header"},"Edit the Documentation Header"),(0,i.kt)("p",null,"The header is usually the Overview of your API. It contains Info about authenticating users, making requests, responses, potential errors, rate limiting, pagination, query parameters and anything you want."),(0,i.kt)("p",null,"All this information is written in ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Documentation/ApiDocJs/shared/header.template.en.md")," file, and the same file is used as header for both private and public documentations."),(0,i.kt)("p",null,"To edit its content you need to ",(0,i.kt)("a",{parentName:"p",href:"#modify-code"},"modify its source code")," and open the markdown file in any markdown editor and edit it."),(0,i.kt)("p",null,"You will notice some variables like ",(0,i.kt)("inlineCode",{parentName:"p"},"{{rate-limit}}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"{{token-expires}}"),". Those are replaced when running ",(0,i.kt)("inlineCode",{parentName:"p"},"apiato:apidoc")," with real values from your application configuration files."),(0,i.kt)("p",null,"Feel free to extend them to include more info about your API from the ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Documentation/Tasks/RenderTemplatesTask.php")," class."),(0,i.kt)("h3",{id:"localization-for-documentation-header"},"Localization for Documentation Header"),(0,i.kt)("p",null,"Default, the documentation title is in English ",(0,i.kt)("inlineCode",{parentName:"p"},"en")," localization."),(0,i.kt)("p",null,"See which locales are supported by going in ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Documentation/ApiDocJs/shared/")),(0,i.kt)("p",null,"There will be some ",(0,i.kt)("inlineCode",{parentName:"p"},"header.template.{locale}.md")," files in the folder."),(0,i.kt)("p",null,"You can change the language by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"APIDOC_LOCALE=ru")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("p",null,"If you didn't find a file with your locale, you can create it. You need to ",(0,i.kt)("a",{parentName:"p",href:"#modify-code"},"modify its source code")," and create new file like ",(0,i.kt)("inlineCode",{parentName:"p"},"header.template.cn.md")))}u.isMDXComponent=!0}}]);