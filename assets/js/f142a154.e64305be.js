(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(147)),i={id:"data-management-retention",title:"Data Retention"},c={unversionedId:"features/data-management/data-management-retention",id:"features/data-management/data-management-retention",isDocsHomePage:!1,title:"Data Retention",description:"This section is a work in progress.",source:"@site/docs/features/data-management/data-retention.md",slug:"/features/data-management/data-management-retention",permalink:"/talawa-docs/docs/features/data-management/data-management-retention",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/features/data-management/data-retention.md",version:"current",sidebar:"someSidebar",previous:{title:"Data Compression",permalink:"/talawa-docs/docs/features/data-management/data-management-compression"},next:{title:"Data Storage",permalink:"/talawa-docs/docs/features/data-management/data-management-storage"}},s=[{value:"Code: DAT-001",id:"code-dat-001",children:[]},{value:"Overview",id:"overview",children:[{value:"Problem",id:"problem",children:[]},{value:"Goals",id:"goals",children:[]},{value:"Out of Scope",id:"out-of-scope",children:[]},{value:"People and Roles",id:"people-and-roles",children:[]}]},{value:"Context",id:"context",children:[{value:"Use Cases",id:"use-cases",children:[]}]},{value:"Proposal/Solution",id:"proposalsolution",children:[{value:"User Experience",id:"user-experience",children:[]},{value:"Important Details To Capture",id:"important-details-to-capture",children:[]},{value:"Future Work",id:"future-work",children:[]}]},{value:"Tasks and Timeline",id:"tasks-and-timeline",children:[]}],l={toc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This section is a work in progress."))),Object(o.b)("h2",{id:"code-dat-001"},"Code: DAT-001"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Authored by",Object(o.b)("strong",{parentName:"em"}," ",Object(o.b)("strong",{parentName:"strong"},"Shannika Jackson")," "),". Last updated on")," ",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("strong",{parentName:"em"},"March 31,2021")," ")),Object(o.b)("p",null,"This feature aims to ",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("strong",{parentName:"em"},"enforce data retention strategy")," ")," by ",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("strong",{parentName:"em"}," detailing the requirements around how long and in what form data is retained in  the database ")," "),"."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("h3",{id:"problem"},"Problem"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Data is currently stored in the database without a retention strategy:")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"There should exist a data retention strategy for each data artefact that the app produces.")))),Object(o.b)("h3",{id:"goals"},"Goals"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Specify and enforce a data retention strategy from the admin portal:")," This more closely manages the data being stored by the application and facilitates the need for customers to move their data more easily.")),Object(o.b)("h3",{id:"out-of-scope"},"Out of Scope"),Object(o.b)("p",null,"N/A"),Object(o.b)("h3",{id:"people-and-roles"},"People and Roles"),Object(o.b)("p",null,"The following are the primary roles foreseen in the development of this feature"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Feature Lead")," : will review proposed solutions, acceptance and close feature")),Object(o.b)("h2",{id:"context"},"Context"),Object(o.b)("p",null,"NA"),Object(o.b)("h3",{id:"use-cases"},"Use Cases"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Administrator wants to:"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Specify the duration that each data artefact is stored in the database")," For instance (s)he may want to indicate that video files are retained for x days etc.")))),Object(o.b)("h2",{id:"proposalsolution"},"Proposal/Solution"),Object(o.b)("h3",{id:"user-experience"},"User Experience"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"From the Administrator Portal an admin must be presented with a data management menu item. "),Object(o.b)("li",{parentName:"ol"},"When this menu item is selected the admin is then presented with a list of the different file types supported by the application. "),Object(o.b)("li",{parentName:"ol"},"For each file type a (numeric) retention duration field must be presented."),Object(o.b)("li",{parentName:"ol"},"The admin should be able to enter the number of days that each data type is retained in the database."),Object(o.b)("li",{parentName:"ol"},"This number must then trigger database actions to purge/ archive those artefacts from the database once their age reaches that number of days."),Object(o.b)("li",{parentName:"ol"},"The age of artefacts must be from the date that the item was added to the database.")),Object(o.b)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),Object(o.b)("p",null,"NA"),Object(o.b)("h3",{id:"future-work"},"Future Work"),Object(o.b)("p",null,"Items mentioned in the Out of scope section will form the basis for future work to be done on this feature"),Object(o.b)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),Object(o.b)("p",null,"TBD"))}d.isMDXComponent=!0},147:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(a),p=n,u=b["".concat(i,".").concat(p)]||b[p]||m[p]||o;return a?r.a.createElement(u,c(c({ref:t},l),{},{components:a})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);