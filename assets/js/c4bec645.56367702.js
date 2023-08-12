"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Seeders"},o=void 0,l={unversionedId:"optional-components/seeders",id:"optional-components/seeders",title:"Seeders",description:"* Definition",source:"@site/docs/optional-components/seeders.md",sourceDirName:"optional-components",slug:"/optional-components/seeders",permalink:"/docs/next/optional-components/seeders",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/optional-components/seeders.md",tags:[],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1691839128,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Seeders"},sidebar:"tutorialSidebar",previous:{title:"Migrations",permalink:"/docs/next/optional-components/migrations"},next:{title:"Factories",permalink:"/docs/next/optional-components/factories"}},s={},p=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Demo Seeder",id:"demo-seeder",level:4},{value:"Run the Seeders",id:"run-the-seeders",level:3},{value:"Testing Seeder Command",id:"apiato-testing-seeder-command",level:3}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-the-seeders"},"Run the Seeders")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#apiato-testing-seeder-command"},"Testing seeder command"))),(0,r.kt)("h3",{id:"definition"},"Definition"),(0,r.kt)("p",null,"Seeders (are a short name for Database Seeders)."),(0,r.kt)("p",null,"Seeders are classes made to seed the database with real data, this data usually should exist in the Application after the installation (Example: the default Users Roles and Permissions or the list of Countries)."),(0,r.kt)("h3",{id:"principles"},"Principles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Seeders SHOULD be created in the Containers. (If the container is using a package that publishes a Seeder class, this class should be manually placed in the Container that make use of it. Do not rely on the package to place it in its right location).")),(0,r.kt)("h3",{id:"rules"},"Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Seeders should be in the right directory inside the container to be loaded.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To avoid any conflict between containers seeders classes, you SHOULD always prepend the Seeders of each container with the container name. (Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"UserPermissionsSeeder"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemPermissionsSeeder"),")."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If 2 seeders classes have the same name but live in different containers, one of them will not be loaded. In these situations you can also prepend the seeder name with the section name"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you wish to order the seeding of the classes, you can just append ",(0,r.kt)("inlineCode",{parentName:"p"},"_1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_2")," to your classes."))),(0,r.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," - App\n    - Containers\n        - {section-name}\n            - {container-name}\n                 - Data\n                    - Seeders\n                        - ContainerNameRolesSeeder_1.php\n                        - ContainerNamePermissionsSeeder_2.php\n                        - ...\n")),(0,r.kt)("h3",{id:"code-samples"},"Code Samples"),(0,r.kt)("h4",{id:"demo-seeder"},"Demo Seeder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class DemoSeeder_1 extends Seeder\n{\n    public function run()\n    {\n        app(CreateRoleTask::class)->run('admin', 'Administrator', 'Administrator Role', 999);\n        // ...\n    }\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Same Seeder class is allowed to contain seeding for multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"Models"),".")),(0,r.kt)("h3",{id:"run-the-seeders"},"Run the Seeders"),(0,r.kt)("p",null,"After registering the ",(0,r.kt)("inlineCode",{parentName:"p"},"Seeders")," you can run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan db:seed\n")),(0,r.kt)("p",null,"Migrate & seed at the same time"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan migrate --seed\n")),(0,r.kt)("h3",{id:"apiato-testing-seeder-command"},"Testing Seeder Command"),(0,r.kt)("p",null,"It's useful sometimes to create a big set of testing data. apiato facilitates this task:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"app/Ship/Seeders/SeedTestingData.php")," and write your testing data here."),(0,r.kt)("li",{parentName:"ol"},"Run this command any time you want this data available (example at staging servers):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan apiato:seed-test\n")),(0,r.kt)("admonition",{title:"Further reading",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"More info at ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/seeding"},"Laravel Docs"),".")))}c.isMDXComponent=!0}}]);