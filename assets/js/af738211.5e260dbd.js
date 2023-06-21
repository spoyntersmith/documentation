"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3426],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9072:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Code Generator"},i=void 0,l={unversionedId:"core-features/code-generator",id:"version-9.x/core-features/code-generator",title:"Code Generator",description:"- Introduction",source:"@site/versioned_docs/version-9.x/core-features/code-generator.md",sourceDirName:"core-features",slug:"/core-features/code-generator",permalink:"/docs/9.x/core-features/code-generator",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/code-generator.md",tags:[],version:"9.x",lastUpdatedBy:"Mehrdad Amini",lastUpdatedAt:1687327943,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"Code Generator"},sidebar:"version-9.x/docs",previous:{title:"Conventions and Principles",permalink:"/docs/9.x/getting-started/conventions-and-principles"},next:{title:"API Docs Generator",permalink:"/docs/9.x/core-features/api-docs-generator"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Available Code Generator Commands",id:"available-code-generator-commands",level:2},{value:"Demo",id:"demo",level:2},{value:"Generating a Route (endpoint) file:",id:"generating-a-route-endpoint-file",level:4},{value:"Result",id:"result",level:4},{value:"Custom Code Stubs (aka. Customizing the Generator)",id:"custom-code-stubs",level:2},{value:"Contributing",id:"contributing",level:2},{value:"For AngularJS 2 Users",id:"for-angularjs-users",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#available-code-generator-commands"},"Available Code Generator Commands")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#demo"},"Demo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-code-stubs"},"Custom Code Stubs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#contributing"},"Contributing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#for-angularjs-users"},"For AngularJS 2 Users"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Code Generators are a nice way to speed up development by creating boiler-plate code based on your inputs. You may\nalready be familiar with the Laravel code generators (",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan make:controller"),"). "),(0,r.kt)("p",null,"Apiato code generator works the same way. In addition, it can generate a full Container with fully working CRUD operations, including routes, requests, controller, Actions, Repositories, Models, Migrations, documentation.... and much more)"),(0,r.kt)("h2",{id:"available-code-generator-commands"},"Available Code Generator Commands"),(0,r.kt)("p",null,"To see the list of code generators type ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  apiato:generate:container        Create a Container for apiato from scratch\n  apiato:generate:action           Create a Action file for a Container\n  apiato:generate:configuration    Create a Configuration file for a Container\n  apiato:generate:controller       Create a controller for a container\n  apiato:generate:exception        Create a new Exception class\n  apiato:generate:job              Create a new Job class\n  apiato:generate:mail             Create a new Mail class\n  apiato:generate:migration        Create an "empty" migration file for a Container\n  apiato:generate:model            Create a new Model class\n  apiato:generate:notification     Create a new Notification class\n  apiato:generate:repository       Create a new Repository class\n  apiato:generate:request          Create a new Request class\n  apiato:generate:route            Create a new Route class\n  apiato:generate:seeder           Create a new Seeder class\n  apiato:generate:serviceprovider  Create a ServiceProvider for a Container\n  apiato:generate:subaction        Create a new SubAction class\n  apiato:generate:task             Create a Task file for a Container\n  apiato:generate:transformer      Create a new Transformer class for a given Model\n\n')),(0,r.kt)("p",null,"To get more info about each command, add ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," to the command. Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan apiato:generate:route --help"),". The help page shows all options, which can be directly passed to the command."),(0,r.kt)("p",null,"If you do not provide respective information via the command line options, a wizard will be displayed to guide you through."),(0,r.kt)("p",null,"For example, you can directly call ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan apiato:generate:controller --file=UserController")," to directly specify the class\nto be generated. The wizard, however, will ask you for the ",(0,r.kt)("inlineCode",{parentName:"p"},"--container")," as well."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("strong",{parentName:"p"},"all")," generators automatically inherit the options ",(0,r.kt)("inlineCode",{parentName:"p"},"--container")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--file")," (these are documented\nas well in the help page). Furthermore, a generator may have specific options as well (e.g., the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ui")," (user-interface)\nto generate something for)."),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("h4",{id:"generating-a-route-endpoint-file"},"Generating a Route (endpoint) file:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4570).Z,width:"1758",height:"1456"})),(0,r.kt)("h4",{id:"result"},"Result"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(505).Z,width:"1916",height:"1740"})),(0,r.kt)("h2",{id:"custom-code-stubs"},"Custom Code Stubs (aka. Customizing the Generator)"),(0,r.kt)("p",null,"If you don't like the automatically generated code (or would like to adapt it to your specific needs) you can do this quite easily."),(0,r.kt)("p",null,"The existing ",(0,r.kt)("inlineCode",{parentName:"p"},"Generators")," allow to read ",(0,r.kt)("inlineCode",{parentName:"p"},"custom stubs")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/Generators/CustomStubs")," folder. The name of\nfile needs to be the same as in ",(0,r.kt)("inlineCode",{parentName:"p"},"vendor/apiato/core/Generator/Stubs"),"."),(0,r.kt)("p",null,"Say, if you like to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.stub"),", simply copy the file to ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/Generators/CustomStubs/config.stub")," and\nstart adapting it to your needs. "),(0,r.kt)("p",null,"If you run the respective command (e.g., in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan apiato:generate:configuration"),")\nthis would read your specific ",(0,r.kt)("inlineCode",{parentName:"p"},"config.stub")," file instead the pre-defined one!"),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"If you would like to add your own generators, please check out the ",(0,r.kt)("a",{parentName:"p",href:"../contribution-guide"},"Contribution Guide"),"."),(0,r.kt)("h2",{id:"for-angularjs-users"},"For AngularJS 2 Users"),(0,r.kt)("p",null,"Checkout this awesome ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/llstarscreamll/Crud"},"CRUD Containers generator package")," for Angular 2.4+."))}d.isMDXComponent=!0},4570:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/generate-route-demo-3e24df4e81b181bef31816e0ae972132.png"},505:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/generated-route-demo-cebd1728f0bd428168804cc7d7cde276.png"}}]);