if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const o={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return o;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-15dd0bab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0d1e87f160df62e8fa10.css",revision:null},{url:"608283b65510fe86b7e7.svg",revision:null},{url:"8b2ae6ef9a6d53f01fdb.js",revision:null},{url:"8b2ae6ef9a6d53f01fdb.js.LICENSE.txt",revision:"ac1d32e2116a66660d06e2f6a5ba9780"},{url:"964effefb12f8cb5e0d0.js",revision:null},{url:"c414590286b21d882f68.js",revision:null},{url:"f3e61cc0016160a5990e.js",revision:null},{url:"favicon.ico",revision:"6cda426c4c8e6728dc66d5e59282a52c"},{url:"index.html",revision:"9d52cf677a1950f050ab6eb6fc77c4cc"},{url:"manifest.json",revision:"3b896b2907d8aa100e3d00eb3a1f3b73"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"}],{})}));
