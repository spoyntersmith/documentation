"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4993],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=o,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(k,r(r({ref:t},m),{},{components:a})):n.createElement(k,r({ref:t},m))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6577:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const i={title:"Installation"},r=void 0,l={unversionedId:"getting-started/installation",id:"version-9.x/getting-started/installation",title:"Installation",description:"* A) Apiato Installation",source:"@site/versioned_docs/version-9.x/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/9.x/getting-started/installation",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/getting-started/installation.md",tags:[],version:"9.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1691839128,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Installation"},sidebar:"version-9.x/docs",previous:{title:"Requirements",permalink:"/docs/9.x/"},next:{title:"Overview",permalink:"/docs/9.x/getting-started/overview"}},p={},s=[{value:"A) Apiato Application Installation",id:"App",level:2},{value:"1) Project Setup",id:"Project-Setup",level:3},{value:"1.A) Automatically via Composer",id:"App-Composer",level:4},{value:"1.B) Manually",id:"App-Git",level:4},{value:"2) Database Setup",id:"Setup-Database",level:3},{value:"3) OAuth 2.0 Setup",id:"Prepare-OAuth",level:3},{value:"4) Documentation Setup",id:"Documentation",level:3},{value:"Visit API Docs Generator for more details.",id:"visit-api-docs-generator-for-more-details",level:5},{value:"5) Testing Setup",id:"Testing",level:3},{value:"B) Development Environment Setup",id:"Development-Environment",level:2},{value:"A.1) Using Docker (with Laradock)",id:"Using-Docker-With-Laradock",level:3},{value:"A.2) Using Vagrant (with Laravel Homestead)",id:"Using-Vagrant-Using-Homestead",level:3},{value:"A.3) Using anything else",id:"Using-anything-else",level:3},{value:"C) Let&#39;s Play",id:"Play",level:2}],m={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#App"},"A) Apiato Installation"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#Project-Setup"},"Project Setup"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#App-Composer"},"Option 1: Automatically via Composer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#App-Git"},"Option 2: Manually")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#Setup-Database"},"2) Database Setup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#Prepare-OAuth"},"3) OAuth Setup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#Documentation"},"4) Documentation Setup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#Testing"},"5) Testing Setup")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#Development-Environment"},"B) Environment Setup"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#Using-Docker-With-Laradock"},"Option 1: Using Docker and Laradock")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#Using-Vagrant-Using-Homestead"},"Option 2: Using Vagrant and Homestead")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#Using-anything-else"},"Option 3: Using MAMP/WAMP or something else")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#Play"},"C) Play"))),(0,o.kt)("h2",{id:"App"},"A) Apiato Application Installation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Apiato")," can be installed automatically with Composer (recommended) or manually (with Git or direct download):"),(0,o.kt)("h3",{id:"Project-Setup"},"1) Project Setup"),(0,o.kt)("h4",{id:"App-Composer"},"1.A) Automatically via Composer"),(0,o.kt)("p",null,"1) Clone the repo, install dependencies and setup the project:"),(0,o.kt)("p",null,"Option 1: Latest ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apiato/apiato/releases/latest"},"stable"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"composer create-project apiato/apiato my-api\n")),(0,o.kt)("p",null,"Option 2: On going ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apiato/apiato/commits/master"},"development"),' branch "dev master" ',(0,o.kt)("em",{parentName:"p"},"(unstable)"),":\n",(0,o.kt)("em",{parentName:"p"},"This gives you features from the upcoming releases. But you need to keep syncing your project with the upstream master\nbranch and running ",(0,o.kt)("inlineCode",{parentName:"em"},"composer install")," when changes occurs.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"composer create-project apiato/apiato my-api dev-master\n")),(0,o.kt)("p",null,"2) Edit your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," variables to match with your environment (Set Database credentials, App URL, ...)."),(0,o.kt)("p",null,"3) Continue from ",(0,o.kt)("a",{parentName:"p",href:"#Setup-Database"},"2) Database Setup")," below."),(0,o.kt)("h4",{id:"App-Git"},"1.B) Manually"),(0,o.kt)("p",null,"You can download the Code directly from the repository as ",(0,o.kt)("inlineCode",{parentName:"p"},".ZIP")," file or clone the repository using ",(0,o.kt)("inlineCode",{parentName:"p"},"Git")," (recommended):"),(0,o.kt)("p",null,"1) Clone the repository using ",(0,o.kt)("inlineCode",{parentName:"p"},"Git"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apiato/apiato.git\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Hint")," ",(0,o.kt)("br",null),"\nIf using ",(0,o.kt)("a",{parentName:"p",href:"http://laradock.io/"},"Laradock"),", you can run all the commands below from the ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace")," Container. ",(0,o.kt)("br",null),"\nFirst you need to run the required tools by running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up -d nginx mysql php-fpm workspace redis")," from the Laradock folder ",(0,o.kt)("em",{parentName:"p"},"(of course you can add any other tools you need)"),". ",(0,o.kt)("br",null),"\nThen enter the  ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace")," Container by running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose exec workspace bash"),". ",(0,o.kt)("br",null),"\nFor more details see the section ",(0,o.kt)("strong",{parentName:"p"},"Using Docker (with Laradock)")," below.")),(0,o.kt)("p",null,"2) Install all dependency packages (including Containers dependencies):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"composer install\n")),(0,o.kt)("p",null,"3) Create ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file and copy the content of ",(0,o.kt)("inlineCode",{parentName:"p"},".env.example")," inside it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cp .env.example .env\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Check all the variables and edit whatever you want.")),(0,o.kt)("p",null,"4) Generate a random key ",(0,o.kt)("inlineCode",{parentName:"p"},"APP_KEY")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan key:generate\n")),(0,o.kt)("p",null,"5) delete the ",(0,o.kt)("inlineCode",{parentName:"p"},".git")," folder from the root directory and initialize your own with ",(0,o.kt)("inlineCode",{parentName:"p"},"git init"),"."),(0,o.kt)("h3",{id:"Setup-Database"},"2) Database Setup"),(0,o.kt)("p",null,"1) Migrate the Database:"),(0,o.kt)("p",null,"Run the migration artisan command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan migrate\n")),(0,o.kt)("p",null,"2) Seed the database with the artisan command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan db:seed\n")),(0,o.kt)("p",null,'3) Optional. By default. Apiato seeds a "Super User", given the default ',(0,o.kt)("inlineCode",{parentName:"p"},"admin")," role (the role has no Permissions set\nto it)."),(0,o.kt)("p",null,"To give the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," role, access to all the seeded permissions in the system, run the following command, at any time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"php artisan apiato:permissions:toRole admin\n")),(0,o.kt)("h3",{id:"Prepare-OAuth"},"3) OAuth 2.0 Setup"),(0,o.kt)("p",null,'1) Create encryption keys to generate secure access tokens and create "personal access" and "password grant" clients\nwhich will be used to generate access tokens:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan passport:install\n")),(0,o.kt)("h3",{id:"Documentation"},"4) Documentation Setup"),(0,o.kt)("p",null,"If you are planning to use ApiDoc JS then proceed with this setup, else skip this and use whatever you prefer:"),(0,o.kt)("p",null,"1) Install ",(0,o.kt)("a",{parentName:"p",href:"http://apidocjs.com/"},"ApiDocJs")," using NPM or your favorite dependencies manager:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\n")),(0,o.kt)("p",null,"Or install it alone by just running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install apidoc")," on the root of the project, after checking the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file on the root."),(0,o.kt)("p",null,"2) Run ",(0,o.kt)("inlineCode",{parentName:"p"},"php artisan apiato:apidoc")),(0,o.kt)("p",null,"Behind the scene ",(0,o.kt)("inlineCode",{parentName:"p"},"apiato:apidoc")," is executing a command like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apidoc -c app/Containers/Documentation/ApiDocJs/public -f public.php -i app -o public/api/documentation\n")),(0,o.kt)("p",null,"Alternatively you can generate a swagger doc from the apidoc comments, to do so run ",(0,o.kt)("inlineCode",{parentName:"p"},"php artisan apiato:swagger"),"."),(0,o.kt)("h5",{id:"visit-api-docs-generator-for-more-details"},"Visit ",(0,o.kt)("a",{parentName:"h5",href:"../core-features/api-docs-generator"},"API Docs Generator")," for more details."),(0,o.kt)("h3",{id:"Testing"},"5) Testing Setup"),(0,o.kt)("p",null,"1) Open ",(0,o.kt)("inlineCode",{parentName:"p"},"phpunit.xml")," and make sure the environments are correct for your domain."),(0,o.kt)("p",null,"2) run the tests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vendor/bin/phpunit\n")),(0,o.kt)("h2",{id:"Development-Environment"},"B) Development Environment Setup"),(0,o.kt)("p",null,"You can run ",(0,o.kt)("strong",{parentName:"p"},"Apiato")," on your favorite environment. Below you'll see how you can run it on top of\n",(0,o.kt)("a",{parentName:"p",href:"https://www.vagrantup.com/"},"Vagrant")," (using ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/master/homestead"},"Laravel Homestead"),") or\n",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," (using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Laradock/laradock"},"Laradock"),")."),(0,o.kt)("p",null,"We'll see how to use both tools and you can pick one, or you can use other options like\n",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/valet"},"Laravel Valet"),", ",(0,o.kt)("a",{parentName:"p",href:"https://laragon.org/"},"Laragon")," or even run it directly on your machine."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Heads up!")," ",(0,o.kt)("br",null),"\nThe ICANN has now officially approved ",(0,o.kt)("inlineCode",{parentName:"p"},".dev")," as a generic top level domain (gTLD). Therefore, it is ",(0,o.kt)("strong",{parentName:"p"},"not")," recommended\nto use ",(0,o.kt)("inlineCode",{parentName:"p"},".dev")," domains anymore in your local development setup! Our docs have been changed to use ",(0,o.kt)("inlineCode",{parentName:"p"},".test"),"\ninstead of ",(0,o.kt)("inlineCode",{parentName:"p"},".dev"),", however, you may change it to ",(0,o.kt)("inlineCode",{parentName:"p"},".example"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},".localhost")," or whatever suits your needs. ",(0,o.kt)("a",{parentName:"p",href:"http://www.faqs.org/rfcs/rfc2606.html"},"Read more"),".")),(0,o.kt)("h3",{id:"Using-Docker-With-Laradock"},"A.1) Using Docker (with Laradock)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Laradock")," is a Docker PHP development environment. It facilitates running PHP Apps on Docker."),(0,o.kt)("p",null,"1) Install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LaraDock/laradock#installation"},"Laradock"),"."),(0,o.kt)("p",null,"2) Navigate into the ",(0,o.kt)("inlineCode",{parentName:"p"},"laradock")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd laradock\n")),(0,o.kt)("p",null,"This directory contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file. (From the LaraDock project)."),(0,o.kt)("p",null,"2.1) If you haven't done so, rename ",(0,o.kt)("inlineCode",{parentName:"p"},"env-example")," to ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cp env-example .env\n")),(0,o.kt)("p",null,"3) Run the Docker containers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up -d nginx mysql redis beanstalkd\n")),(0,o.kt)("p",null,"4) Make sure you are setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker IP")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"Host")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"DB")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Redis"),"  in your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("p",null,"5) Add the domain to the Hosts file:"),(0,o.kt)("p",null,"5.1) Open the hosts file on your local machine ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/hosts"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"We'll be using ",(0,o.kt)("inlineCode",{parentName:"em"},"apiato.test")," as local domain (you can change it if you want).")),(0,o.kt)("p",null,"5.2) Map the domain and its subdomains to 127.0.0.1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"127.0.0.1  apiato.test\n127.0.0.1  api.apiato.test\n127.0.0.1  admin.apiato.test\n")),(0,o.kt)("p",null,"If you're using NGINX or Apache, make sure the ",(0,o.kt)("strong",{parentName:"p"},"server_name")," (in case of NGINX) or ",(0,o.kt)("strong",{parentName:"p"},"ServerName")," (in case of Apache)\nin your server config file, is set to the following ",(0,o.kt)("inlineCode",{parentName:"p"},"apiato.test api.apiato.test admin.apiato.test"),".\n",(0,o.kt)("em",{parentName:"p"},"(Also don't forget to point the ",(0,o.kt)("strong",{parentName:"em"},"Root")," or ",(0,o.kt)("strong",{parentName:"em"},"DocumentRoot")," to the public directory inside apiato ",(0,o.kt)("inlineCode",{parentName:"em"},"apiato/public"),")"),"."),(0,o.kt)("h3",{id:"Using-Vagrant-Using-Homestead"},"A.2) Using Vagrant (with Laravel Homestead)"),(0,o.kt)("p",null,"1) Configure Homestead:"),(0,o.kt)("p",null,"1.1) Open the Homestead config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"homestead edit\n")),(0,o.kt)("p",null,"1.2) Map the ",(0,o.kt)("inlineCode",{parentName:"p"},"api.apiato.test")," domain to the project public directory - Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"sites:\n    - map: api.apiato.test\n      to: /{full-path-to}/apiato/public\n")),(0,o.kt)("p",null,"1.3) You can also map other domains like ",(0,o.kt)("inlineCode",{parentName:"p"},"apiato.test")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"admin.apiato.test")," to other web apps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"    - map: apiato.test\n      to: /{full-path-to}/clients/web/user\n    - map: admin.apiato.test\n      to: /{full-path-to}/clients/web/admin\n")),(0,o.kt)("p",null,"Note: in the example above the ",(0,o.kt)("inlineCode",{parentName:"p"},"/{full-path-to}/clients/web/***")," are separate apps, who live on their own repositories\nand in different folder then the Apiato one. If your Admins, Users or other type of Apps are within Apiato, then you\nmust point them all to the Apiato project folder ",(0,o.kt)("inlineCode",{parentName:"p"},"/{full-path-to}/apiato/public"),". So in that case you would have\nsomething like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"    - map: api.apiato.test\n      to: /{full-path-to}/apiato/public\n    - map: apiato.test\n      to: /{full-path-to}/apiato/public\n    - map: admin.apiato.test\n      to: /{full-path-to}/apiato/public\n")),(0,o.kt)("p",null,"2) Add the domain to the Hosts file:"),(0,o.kt)("p",null,"2.1) Open the hosts file on your local machine ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/hosts"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"We'll be using ",(0,o.kt)("inlineCode",{parentName:"em"},"apiato.test")," as local domain (you can change it if you want).")),(0,o.kt)("p",null,"2.2) Map the domain and its subdomains to the Vagrant IP Address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"192.168.10.10   apiato.test\n192.168.10.10   api.apiato.test\n192.168.10.10   admin.apiato.test\n")),(0,o.kt)("p",null,"If you're using NGINX or Apache, make sure the ",(0,o.kt)("strong",{parentName:"p"},"server_name")," (in case of NGINX) or ",(0,o.kt)("strong",{parentName:"p"},"ServerName")," (in case of Apache)\nin your server config file, is set to the following ",(0,o.kt)("inlineCode",{parentName:"p"},"apiato.test api.apiato.test admin.apiato.test"),".\n",(0,o.kt)("em",{parentName:"p"},"(Also don't forget to set your ",(0,o.kt)("strong",{parentName:"em"},"root")," or ",(0,o.kt)("strong",{parentName:"em"},"DocumentRoot")," to the public directory inside apiato ",(0,o.kt)("inlineCode",{parentName:"em"},"apiato/public"),")"),"."),(0,o.kt)("p",null,"2.3) Run the Virtual Machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"homestead up --provision\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you see ",(0,o.kt)("inlineCode",{parentName:"em"},"No input file specified")," on the sub-domains!\ntry running this command ",(0,o.kt)("inlineCode",{parentName:"em"},"homestead halt && homestead up --provision"),".")),(0,o.kt)("h3",{id:"Using-anything-else"},"A.3) Using anything else"),(0,o.kt)("p",null,"If you're not into virtualization solutions, you can set up your environment directly on your machine. Check the\n",(0,o.kt)("a",{parentName:"p",href:".././"},"software's requirements list"),"."),(0,o.kt)("h2",{id:"Play"},"C) Let's Play"),(0,o.kt)("p",null,"Now let's see it in action"),(0,o.kt)("p",null,"1.a. Open your web browser and visit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://apiato.test")," You should see an HTML page, with ",(0,o.kt)("inlineCode",{parentName:"li"},"Apiato")," in the middle."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://admin.apiato.test")," You should see an HTML Login page.")),(0,o.kt)("p",null,"1.b. Open your HTTP client and call:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://api.apiato.test/")," You should see a JSON response with message: ",(0,o.kt)("inlineCode",{parentName:"li"},'"Welcome to apiato."'),","),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://api.apiato.test/v1")," You should see a JSON response with message: ",(0,o.kt)("inlineCode",{parentName:"li"},'"Welcome to apiato (API V1)."'),",")),(0,o.kt)("p",null,"2) Make some HTTP calls to the API:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"To make the calls you can use ",(0,o.kt)("a",{parentName:"em",href:"https://www.getpostman.com/"},"Postman"),", ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/jkbrzt/httpie"},"HTTPIE")," or\nany other tool you prefer.")),(0,o.kt)("p",null,"Let's test the (user registration) endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/register ")," with ",(0,o.kt)("strong",{parentName:"p"},"cURL"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Accept: application/json" -H "Cache-Control: no-cache" -F "email=mahmoud@zalt.me" -F "password=so-secret" -F "name=Mahmoud Zalt" "http://api.apiato.test/v1/register"\n')),(0,o.kt)("p",null,"You should get response like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'Access-Control-Allow-Origin \u2192 ...\nCache-Control \u2192 ...\nConnection \u2192 keep-alive\nContent-Language \u2192 en\nContent-Type \u2192 application/json\nDate \u2192 Wed, 11 Apr 2000 22:55:88 GMT\nServer \u2192 nginx\nTransfer-Encoding \u2192 chunked\nVary \u2192 Origin\nX-Powered-By \u2192 PHP/7.7.7\nX-RateLimit-Limit \u2192 30\nX-RateLimit-Remaining \u2192 29\n\n{\n  "data": {\n    "object": "User",\n    "id": 77,\n    "name": "Mahmoud Zalt",\n    "email": "apiato@mail.com",\n    "confirmed": null,\n    "nickname": "Mega",\n    "gender": "male",\n    "birth": null,\n    "social_auth_provider": null,\n    "social_id": null,\n    "social_avatar": {\n      "avatar": null,\n      "original": null\n    },\n    "created_at": {\n      "date": "2017-04-05 16:17:26.000000",\n      "timezone_type": 3,\n      "timezone": "UTC"\n    },\n    "updated_at": {\n      "date": "2017-04-05 16:17:26.000000",\n      "timezone_type": 3,\n      "timezone": "UTC"\n    },\n    "roles": {\n      "data": []\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);