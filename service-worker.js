if(!self.define){let n,i={};const l=(l,s)=>(l=new URL(l+".js",s).href,i[l]||new Promise((i=>{if("document"in self){const n=document.createElement("script");n.src=l,n.onload=i,document.head.appendChild(n)}else n=l,importScripts(l),i()})).then((()=>{let n=i[l];if(!n)throw new Error(`Module ${l} didn’t register its module`);return n})));self.define=(s,o)=>{const e=n||("document"in self?document.currentScript.src:"")||location.href;if(i[e])return;let r={};const a=n=>l(n,e),u={module:{uri:e},exports:r,require:a};i[e]=Promise.all(s.map((n=>u[n]||a(n)))).then((n=>(o(...n),r)))}}define(["./workbox-4f586afe"],(function(n){"use strict";n.setCacheNameDetails({prefix:"test"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"/nano/css/app.360c443c.css",revision:null},{url:"/nano/img/android.2c3a4b3a.svg",revision:null},{url:"/nano/img/apple.75b324b2.svg",revision:null},{url:"/nano/img/apple.e2aa8727.svg",revision:null},{url:"/nano/img/battery.b5034e95.svg",revision:null},{url:"/nano/img/bg-header.8cafd43c.png",revision:null},{url:"/nano/img/board.547c962e.svg",revision:null},{url:"/nano/img/glass.a8de4ca9.svg",revision:null},{url:"/nano/img/huawei.4c188c7c.svg",revision:null},{url:"/nano/img/ipad.5ccf4626.svg",revision:null},{url:"/nano/img/kosmonavtov.1baddecc.png",revision:null},{url:"/nano/img/location.5ce3264f.svg",revision:null},{url:"/nano/img/logo.5382233b.svg",revision:null},{url:"/nano/img/macbook.cc1722d6.svg",revision:null},{url:"/nano/img/manage.932f548c.svg",revision:null},{url:"/nano/img/samsung.23587fc6.svg",revision:null},{url:"/nano/img/shevchenko.b9dacc98.png",revision:null},{url:"/nano/img/starosennaya.33522965.png",revision:null},{url:"/nano/img/viliamsa.97ae961b.png",revision:null},{url:"/nano/img/volume.3745a40c.svg",revision:null},{url:"/nano/img/water.119e61d5.svg",revision:null},{url:"/nano/img/wifi.4f6341a9.svg",revision:null},{url:"/nano/img/xiaomi.7c21dd2a.svg",revision:null},{url:"/nano/index.html",revision:"7cd4bdda35b19f4589c48b53c9d426ef"},{url:"/nano/js/139.d352ed05.js",revision:null},{url:"/nano/js/210.1c84a0b4.js",revision:null},{url:"/nano/js/232.a33df702.js",revision:null},{url:"/nano/js/248.866c76b9.js",revision:null},{url:"/nano/js/252.367be91d.js",revision:null},{url:"/nano/js/365.57b3ed65.js",revision:null},{url:"/nano/js/55.0c7abbfb.js",revision:null},{url:"/nano/js/626.59953356.js",revision:null},{url:"/nano/js/658.c8b47ea8.js",revision:null},{url:"/nano/js/800.b6fa91bc.js",revision:null},{url:"/nano/js/956.571c8e25.js",revision:null},{url:"/nano/js/app.3b41cc4f.js",revision:null},{url:"/nano/js/chunk-vendors.007f82df.js",revision:null},{url:"/nano/manifest.json",revision:"4dd2751dfa44c648270334e74aa5aa10"},{url:"/nano/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
