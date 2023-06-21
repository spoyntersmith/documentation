"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,p=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return n?a.createElement(p,i(i({ref:t},d),{},{components:n})):a.createElement(p,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9821:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>d,assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"Markdown Features"},i=void 0,c={unversionedId:"getting-started/markdown-features",id:"version-11.x/getting-started/markdown-features",title:"Markdown Features",description:"Docusaurus supports the Markdown syntax and has some additional features.",source:"@site/versioned_docs/version-11.x/getting-started/markdown-features.mdx",sourceDirName:"getting-started",slug:"/getting-started/markdown-features",permalink:"/docs/getting-started/markdown-features",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/getting-started/markdown-features.mdx",tags:[],version:"11.x",lastUpdatedBy:"Mehrdad Amini",lastUpdatedAt:1687327943,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"Markdown Features"}},s={},l=[{value:"Front Matter",id:"front-matter",level:2},{value:"Markdown links",id:"markdown-links",level:2},{value:"Markdown images",id:"markdown-images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"React components",id:"react-components",level:2}],d=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:l,Highlight:d},m="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Docusaurus supports the ",(0,r.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown")," syntax and has some additional features."),(0,r.kt)("h2",{id:"front-matter"},"Front Matter"),(0,r.kt)("p",null,"Markdown documents can have associated metadata at the top called ",(0,r.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"---\nid: my-doc\ntitle: My document title\ndescription: My document description\nsidebar_label: My doc\n---\n\nMarkdown content\n")),(0,r.kt)("h2",{id:"markdown-links"},"Markdown links"),(0,r.kt)("p",null,"Regular Markdown links are supported using url paths or relative file paths."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page].\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page].\n")),(0,r.kt)("p",null,"Let's see how to ","[Create a page]","."),(0,r.kt)("h2",{id:"markdown-images"},"Markdown images"),(0,r.kt)("p",null,"Regular Markdown images are supported."),(0,r.kt)("p",null,"Add an image at ",(0,r.kt)("inlineCode",{parentName:"p"},"static/img/logo.png")," and use this Markdown declaration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](/img/logo.png)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus logo",src:n(749).Z,width:"200",height:"200"})),(0,r.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,r.kt)("p",null,"Markdown code blocks are supported with Syntax highlighting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),(0,r.kt)("h2",{id:"admonitions"},"Admonitions"),(0,r.kt)("p",null,"Docusaurus has a special syntax to create admonitions and callouts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},":::tip My tip\n\nUse this awesome feature option\n\n:::\n\n:::danger Take care\n\nThis action is dangerous\n\n:::\n")),(0,r.kt)("admonition",{title:"My tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use this awesome feature option")),(0,r.kt)("admonition",{title:"Take care",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This action is dangerous")),(0,r.kt)("h2",{id:"react-components"},"React components"),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),", you can make your doc more interactive and use React components inside Markdown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: 'red',\n      padding: '0.2rem',\n    }}>\n    {children}\n  </span>\n);\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight> and <Highlight color=\"#1877F2\">Facebook blue</Highlight> are my favorite colors.\n")),(0,r.kt)(d,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",(0,r.kt)(d,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.")}g.isMDXComponent=!0},749:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMzMwNjgzMi1hMmY4LTQ5MGItOGNmMS04YjIxOWMyNGZkYTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjI1ODMyODhCODZBMTFFNzgzMkVBNjIxMzI2MzY1MUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjI1ODMyODdCODZBMTFFNzgzMkVBNjIxMzI2MzY1MUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjIyMTA0Mi1kODQ5LTQ4MmMtOGViMi1kZDhlODMyYmFjMDgiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MzkwZjIzMS0wMGNlLTExN2ItOGUyOS1iN2U0MjZkZWJlZWQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5msRA5AAADAFBMVEWtueSdqt5abcZdccjM2PE+VL2irN/Byenp7fjR1+9VasU+Urz8/f68xehIXcGaptxNYsLS2PDJ0e3p7PZAVL2Nm9hhdMmLmddFW8A4Trttgc87ULxyhdCttuKWotu1wObj6ffO1e6ptOHv8vn1+Pw5Truirt/U2vG9yes8Ubw0S7qBkdR9jNL7/P3e5vX5+v3w9PuFldY8UrxsfMx9kdW7wui1veXV3PG5wubc4PNldsn9/v7x9vylsOFpfc1KYMJFXMFmeMt6idGQntjFzOqToNmJltZxgc1SZsSWpdxRZMJEVr7d4vT2+PxgcslAVb5CWL7t8Pmnst/z9PqNndnl6PZab8h1idKyv+bFzuxoectleczG0e3a4vR1hs+5xOmJmdiEktXa3vJpesw6ULva4PNBVr5SZ8WereDi5vTk6vfu8vqBkNLs8Pn09vymtOLr8Pm1wuhVZ8Vjes309fr7+/3n6vdGWr/Bzuzr7vgvRrg3TLre4/N9j9R6jNNAUrzn7PhrgM/M0+3f5PXIzuz4+f2AlNY6T7vR1u+wuuRSZcR6jdRQZsSAjtNCVb5GWb9EWr9XbMZtfsvX3vKwuuLh5/bY3PLJ1O+gsOHW4PPs8fr1+f1OZcRdb8iRotxBVL3CzOt4iM+Dl9hFWb+XqN5IXMDs9Pvc5PRQY8OGmdh8i9Dg5PNBVr1QZMTk6PXi5/b6+/6PoNvy9vvg5fVDWb9tg8/T2/Fke81pe8ru8fn///+KnNlAVb3d4fKpt+SmtuRid8v8/P1gcsfu8Po8Ubu/xumptODv9/zm6/dOY8ODktPI0OyYpNqTpd1UaMRGXL5EWL9FWL9CVr5DV75DV789UbxDVr7m6fb+//9CV75EWb////5GWL/k5/b+/v5FV75EWL5EWb79/v9HWb9CV7/m6fVTZ8T5+/3m6vXZ3vFFWb7+//60vuRCVr9zg86Hl9f2+v6GlNREWb3g6Pc7T7s5TbuyvOTz9/z1+PujteMqQLV3h9Dx9fvDy+nb3/L///92ab77AAABAHRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/cHJQAAG/JJREFUeNrUnX9AVFW+wAfwDDIXR7BhEG6ghiPcADHwF+yTEX8Auslgmj8wMWQa0SyN0nkuauqqJ0n5Ybvaj2W1vc1bKists7iNJW62Wca7M3cGGFErt6j2tZYv2PZtFm/uzL137gwzMDP3gnL+KWHm3PPhnnO+3/M93x+SngFp2cm7Y2Njq3Gc5BqO4wdiY/clJ2cMyBMlYnd4OXrGyKysRgMFrCiEGAAKndmsMwKQqbX/EwF6Q05W/ozw05tuYZBN2QlleQYzQCGwqcNyty8OeXrfqvBR0cnJybuOjli2ISQxNV5ZWGfUQsRIFhVII5puRZC1CWVFFEBRXeGKsglHf1mXQXhtkRu3jnt3dnxoHQIRc6UdZtOtBLIpIjHPoEAxedFdkuSNhB/t4btHzM1qBBBQRWXnmm4NEDtFEYVA3ZK7Vr2RTgTShn88r9yAYuZKMViEgqyVFpEI1GdVRC8ggmlv/DPtPEazRDTfRJDmc2VyI7xYPiGbENC2jNkehSJkVkLTTQJpSsiiMKw+8al2QmgbLsm1QV1l4qGbANIkrTTDutIRD/c/zMjI/j/THvHOfqgwlB0aZBA7hgaq75/ma1wZX6+e84H0wkcFb5eU5CiVeSVvH3w+ZuSEbyO2Jl3x+VpmLMGQoFEkQWN0jnzN63g+fCJh9sGwKBsCVRBFANsQu6BXYUZ9izItZET2Y16/+uO3K5BgUYIAaZ5aqYPVIV7kRfrWMTElUUYUIgrKoVz1aiSpAZgKKa7/SfrxFi8o6avyMGCIaRoMkDlZFDw/cnivMTwUPlupx+zaiVcCDx6N/YPzS+/5ZlOvbr4ao0SNldLmgQa5XEZiJ2Paes3vMbPmIxD4wcA1kxmDn52dO66XLpOR0AKp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"}}]);