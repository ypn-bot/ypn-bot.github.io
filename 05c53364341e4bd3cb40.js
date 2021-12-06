(()=>{"use strict";var e={191:(e,r,t)=>{t.d(r,{Z:()=>p});var i=t(156),a=t(375),n=t(697),c=t.n(n),o=t(252),_=t(893),l=["children","isExternalLink","isSameTab","to"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var s=function Link(e){var r=e.children,t=e.isExternalLink,i=e.isSameTab,n=e.to,c=(0,a.Z)(e,l);return t?(0,_.jsx)("a",_objectSpread(_objectSpread({href:n,target:"_blank",rel:"noopener noreferrer"},c),{},{children:r})):i?(0,_.jsx)("a",_objectSpread(_objectSpread({href:n},c),{},{children:r})):(0,_.jsx)(o.rU,_objectSpread(_objectSpread({to:n},c),{},{children:r}))};s.propTypes={children:c().node.isRequired,className:c().string,isExternalLink:c().bool.isRequired,isSameTab:c().bool,to:c().string.isRequired};const p=s},530:(e,r,t)=>{t.d(r,{Z:()=>n});var i=t(391),a=t(294);const n=function useCheckMobileScreen(){var e=(0,a.useState)(window.innerWidth),r=(0,i.Z)(e,2),t=r[0],n=r[1],c=function handleWindowSizeChange(){n(window.innerWidth)};return(0,a.useEffect)((function(){return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}}),[]),t<=768}},454:(e,r,t)=>{var i=t(935),a=t(294),n=t(381),c=t(191),o=t(530),_=t(10),l=t(434),s=t(583),p=t(750),u=t(585),d=t(893),b=[{text:"Privacy",path:"privacy",icon:l.CJb},{text:"FAQ",path:"faq",icon:s.g_g},{text:"Support",path:"https://discord.gg/PkfXzyhgTx",external:!0,icon:p.KpZ},{text:"Random",path:"random",icon:u.F0o}];const x=function Navbar(){var e=(0,o.Z)();return(0,d.jsxs)("nav",{className:"flex items-center justify-evenly py-3 bg-gray-900",children:[(0,d.jsx)("div",{className:(0,_.Z)("text-white font-semibold",{flex:e,"space-x-5":!e}),children:b.slice(0,b.length/2).map((function(r){return e?(0,d.jsx)(c.Z,{className:"px-5 py-2 text-lg hover:bg-gray-600 rounded-xl",to:r.path,isExternalLink:!!r.external,"aria-label":r.text,children:(0,d.jsx)(r.icon,{})},r.text):(0,d.jsx)(c.Z,{className:"px-10 py-2 text-lg hover:bg-gray-600 rounded-xl",to:r.path,isExternalLink:!!r.external,"aria-label":r.text,children:r.text},r.text)}))}),(0,d.jsx)(c.Z,{to:"/",isExternalLink:!1,children:(0,d.jsx)("img",{src:n,alt:"YPN_LOGO",width:e?30:40,height:e?30:40})}),(0,d.jsx)("div",{className:(0,_.Z)("text-white font-semibold",{flex:e,"space-x-5":!e}),children:b.slice(b.length/2,b.length).map((function(r){return e?(0,d.jsx)(c.Z,{className:"px-5 py-2 text-lg hover:bg-gray-600 rounded-xl",to:r.path,isExternalLink:!!r.external,"aria-label":r.text,children:(0,d.jsx)(r.icon,{})},r.text):(0,d.jsx)(c.Z,{className:"px-10 py-2 text-lg hover:bg-gray-600 rounded-xl",to:r.path,isExternalLink:!!r.external,"aria-label":r.text,children:r.text},r.text)}))})]})};var f=[{title:"About",links:[{label:"Home",to:"/"},{label:"Privacy",to:"privacy"},{label:"faq",to:"faq"}]},{title:"Community",links:[{label:"Support' server",to:"https://discord.gg/PkfXzyhgTx",external:!0},{label:"Invite",to:"https://discord.com/oauth2/authorize?client_id=815662828253347881&scope=bot%20applications.commands&permissions=2684365824",external:!0}]}];const h=function Footer(){return(0,d.jsxs)("div",{className:"flex flex-col justify-around px-10 py-16 bg-ebony-500 lg:flex-row",children:[(0,d.jsxs)("div",{className:"flex flex-col mb-10",children:[(0,d.jsx)("p",{className:"max-w-xs text-conifer text-4xl font-black opacity-95",children:"Imagine having nitro"}),(0,d.jsx)("p",{className:"mt-2 text-white text-lg opacity-90",children:"@YPN Inc."})]}),f.map((function(e){return(0,d.jsxs)("div",{className:"flex flex-col mb-10",children:[(0,d.jsx)("h2",{className:"mb-2 text-conifer text-2xl font-semibold",children:e.title}),(0,d.jsx)("div",{className:"flex flex-col items-start justify-start space-y-2",children:e.links.map((function(e){return(0,d.jsx)(c.Z,{className:"text-white hover:underline text-sm font-medium",isExternalLink:!!e.external,to:e.to,children:e.label},e.label)}))})]},e.title)}))]})};var m=t(252),w=t(990);const v=function Loading(){return(0,d.jsx)("div",{className:"flex items-center justify-center min-h-screen text-white",children:(0,d.jsx)(w.IDg,{className:"w-16 h-16 animate-spin"})})};var g=(0,a.lazy)((function(){return Promise.all([t.e(709),t.e(723)]).then(t.bind(t,179))}));const k=function App(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(a.Suspense,{fallback:(0,d.jsx)(v,{}),children:[(0,d.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,d.jsx)(x,{}),(0,d.jsx)(m.F0,{children:(0,d.jsx)(g,{path:"/"})})]}),(0,d.jsx)(h,{})]})})};i.render((0,d.jsx)(a.StrictMode,{children:(0,d.jsx)(k,{})}),document.getElementById("root"))},381:(e,r,t)=>{e.exports=t.p+"608283b65510fe86b7e7.svg"}},r={};function __webpack_require__(t){var i=r[t];if(void 0!==i)return i.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,__webpack_require__),a.exports}__webpack_require__.m=e,(()=>{var e=[];__webpack_require__.O=(r,t,i,a)=>{if(!t){var n=1/0;for(l=0;l<e.length;l++){for(var[t,i,a]=e[l],c=!0,o=0;o<t.length;o++)(!1&a||n>=a)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](t[o])))?t.splice(o--,1):(c=!1,a<n&&(n=a));if(c){e.splice(l--,1);var _=i();void 0!==_&&(r=_)}}return r}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[t,i,a]}})(),__webpack_require__.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(r,{a:r}),r},__webpack_require__.d=(e,r)=>{for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,t)=>(__webpack_require__.f[t](e,r),r)),[])),__webpack_require__.u=e=>({709:"964effefb12f8cb5e0d0",723:"8923d39db69093d6163d"}[e]+".js"),__webpack_require__.miniCssF=e=>{},__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="YPN:";__webpack_require__.l=(t,i,a,n)=>{if(e[t])e[t].push(i);else{var c,o;if(void 0!==a)for(var _=document.getElementsByTagName("script"),l=0;l<_.length;l++){var s=_[l];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+a){c=s;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,__webpack_require__.nc&&c.setAttribute("nonce",__webpack_require__.nc),c.setAttribute("data-webpack",r+a),c.src=t),e[t]=[i];var onScriptComplete=(r,i)=>{c.onerror=c.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((e=>e(i))),r)return r(i)},p=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=onScriptComplete.bind(null,c.onerror),c.onload=onScriptComplete.bind(null,c.onload),o&&document.head.appendChild(c)}}})(),__webpack_require__.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={179:0};__webpack_require__.f.j=(r,t)=>{var i=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==i)if(i)t.push(i[2]);else{var a=new Promise(((t,a)=>i=e[r]=[t,a]));t.push(i[2]=a);var n=__webpack_require__.p+__webpack_require__.u(r),c=new Error;__webpack_require__.l(n,(t=>{if(__webpack_require__.o(e,r)&&(0!==(i=e[r])&&(e[r]=void 0),i)){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,i[1](c)}}),"chunk-"+r,r)}},__webpack_require__.O.j=r=>0===e[r];var webpackJsonpCallback=(r,t)=>{var i,a,[n,c,o]=t,_=0;for(i in c)__webpack_require__.o(c,i)&&(__webpack_require__.m[i]=c[i]);if(o)var l=o(__webpack_require__);for(r&&r(t);_<n.length;_++)a=n[_],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[n[_]]=0;return __webpack_require__.O(l)},r=self.webpackChunkYPN=self.webpackChunkYPN||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))})();var t=__webpack_require__.O(void 0,[973],(()=>__webpack_require__(454)));t=__webpack_require__.O(t)})();