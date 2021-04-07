(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(173)),i={title:"Models"},c={unversionedId:"main-components/models",id:"main-components/models",isDocsHomePage:!1,title:"Models",description:"- Definition & Principles",source:"@site/docs/main-components/models.md",slug:"/main-components/models",permalink:"/docs/main-components/models",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/main-components/models.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617626615,formattedLastUpdatedAt:"4/5/2021",sidebar:"docs",previous:{title:"Tasks",permalink:"/docs/main-components/tasks"},next:{title:"Views",permalink:"/docs/main-components/views"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#code-sample"},"Code Sample")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#casts"},"Casts"))),Object(o.b)("a",{name:"definition-principles"}),"### Definition & Principles",Object(o.b)("p",null,"Read from the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Models"},Object(o.b)("strong",{parentName:"a"},"Porto SAP Documentation (#Models)")),"."),Object(o.b)("a",{name:"rules"}),"### Rules",Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"All Models MUST extend from ",Object(o.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Models\\Model"),"."),Object(o.b)("li",{parentName:"ul"},"If the name of a model differs from the Container name you have to set the ",Object(o.b)("inlineCode",{parentName:"li"},"$container")," attribute in the repository - ","[more details]","({{ site.baseurl }}{% link _docs/components/repositories.md %}).")),Object(o.b)("a",{name:"folder-structure"}),"### Folder Structure",Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"}," - App\n    - Containers\n        - {container-name}\n            - Models\n                - User.php\n                - UserId.php\n                - ...\n")),Object(o.b)("a",{name:"code-sample"}),"### Code Sample",Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Demo\\Models;\n\nuse App\\Ship\\Parents\\Models\\Model;\n\nclass Demo extends Model\n{\n    protected $table = 'demos';\n\n    protected $fillable = [\n        'label',\n        'user_id'\n    ];\n\n    protected $hidden = [\n        'token',\n    ];\n\n    protected $casts = [\n        'total_credits'     => 'float',\n    ];\n\n    protected $dates = [\n        'created_at',\n        'updated_at',\n    ];\n\n    public function user()\n    {\n        return $this->belongsTo(\\App\\Containes\\User\\Models\\User::class);\n    }\n}\n")),Object(o.b)("p",null,"Notice the Demo Model has a relationship with User Model, which lives in another Container."),Object(o.b)("a",{name:"casts"}),"### Casts The casts attribute can be used to parse any of the model's attributes to a specific type. In the code sample below we can cast `total_credits` to `float`.",Object(o.b)("p",null,"More information about the applicable cast-types can be found in the laravel ",Object(o.b)("a",{parentName:"p",href:"https://laravel.com/docs/master/eloquent-mutators"},"eloquent-mutators")," documentation."),Object(o.b)("p",null,"You can place any dates inside of the ",Object(o.b)("inlineCode",{parentName:"p"},"$dates")," to parse those automatically."))}p.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);