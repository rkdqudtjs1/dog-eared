if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let o={};const _=e=>i(e,c),r={module:{uri:c},exports:o,require:_};a[c]=Promise.all(n.map((e=>r[e]||_(e)))).then((e=>(s(...e),o)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/154-539d3d9bf657b776.js",revision:"539d3d9bf657b776"},{url:"/_next/static/chunks/90-d5788161fa4fb248.js",revision:"d5788161fa4fb248"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-1cb174da82364de6.js",revision:"1cb174da82364de6"},{url:"/_next/static/chunks/pages/_app-7376191880a927f9.js",revision:"7376191880a927f9"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/books/search-ffd7d9044d4858b4.js",revision:"ffd7d9044d4858b4"},{url:"/_next/static/chunks/pages/calendar-a545d34efe6c48ef.js",revision:"a545d34efe6c48ef"},{url:"/_next/static/chunks/pages/index-accdb7cdebe8a9db.js",revision:"accdb7cdebe8a9db"},{url:"/_next/static/chunks/pages/test-a331c4181ba2704b.js",revision:"a331c4181ba2704b"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-59c5c889f52620d6.js",revision:"59c5c889f52620d6"},{url:"/_next/static/css/458790a0d499dbdb.css",revision:"458790a0d499dbdb"},{url:"/_next/static/rHSI9M3TPcQlg6-d0SIZx/_buildManifest.js",revision:"2529e323e15e4d1cd9431344051512d7"},{url:"/_next/static/rHSI9M3TPcQlg6-d0SIZx/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/apple-splash/10.2__iPad_landscape.png",revision:"9ac775b385ed7842b065785d115a74f3"},{url:"/apple-splash/10.2__iPad_portrait.png",revision:"cba96c9504266b2d69d437f804ba8c9c"},{url:"/apple-splash/10.5__iPad_Air_landscape.png",revision:"54506591178e174e2d7e12e3b16bf737"},{url:"/apple-splash/10.5__iPad_Air_portrait.png",revision:"612f05b3419093fbeffc0a0c364ed6df"},{url:"/apple-splash/10.9__iPad_Air_landscape.png",revision:"22fb4fdf2b15127c94837d11fd606c1f"},{url:"/apple-splash/10.9__iPad_Air_portrait.png",revision:"9a73375f00bbecb595eba5d1dc0e5284"},{url:"/apple-splash/11__iPad_Pro__10.5__iPad_Pro_landscape.png",revision:"a9bfd81537f6cf2d40ab9e59b192b89c"},{url:"/apple-splash/11__iPad_Pro__10.5__iPad_Pro_portrait.png",revision:"89830689a7671f8149f108a6c188a296"},{url:"/apple-splash/12.9__iPad_Pro_landscape.png",revision:"5b484c6feee6967a7e6ca03a2124c0ee"},{url:"/apple-splash/12.9__iPad_Pro_portrait.png",revision:"57ca0fc37828d589683bd53f8fbe04c0"},{url:"/apple-splash/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",revision:"f91ac4f20d8d8f80f2ba088d2c20ba1e"},{url:"/apple-splash/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",revision:"343b4dde46986742f778002156d945b2"},{url:"/apple-splash/8.3__iPad_Mini_landscape.png",revision:"d8219a05427fd0fa08a77fe6caf45d5e"},{url:"/apple-splash/8.3__iPad_Mini_portrait.png",revision:"7f6a0d3409a3d80ad8c0eae838f46587"},{url:"/apple-splash/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",revision:"1da351ffd3a8dbfd8c4b5bf83194e063"},{url:"/apple-splash/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",revision:"567118dd750e11068eb95f3a143d45a2"},{url:"/apple-splash/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",revision:"a51f406e478ff3cdf42c47bf19b13ea9"},{url:"/apple-splash/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",revision:"256dbecfb503d587051675f058b32998"},{url:"/apple-splash/iPhone_11__iPhone_XR_landscape.png",revision:"d5cecf3322cb297dddd825df4f1aa2df"},{url:"/apple-splash/iPhone_11__iPhone_XR_portrait.png",revision:"83103ea70093c690778337960710dbeb"},{url:"/apple-splash/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",revision:"05ca4fc029c6eb045cb8e5c2f3e89efc"},{url:"/apple-splash/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",revision:"2a438c40bacaa37ec338dad14eb29f57"},{url:"/apple-splash/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",revision:"cd81e7a1a40ff788a2954167e4b4e833"},{url:"/apple-splash/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",revision:"d4357c3c5070b70d3f709c72943de732"},{url:"/apple-splash/iPhone_14_Pro_Max_landscape.png",revision:"6392712fa5ddce180f7ea0ec49a0ed30"},{url:"/apple-splash/iPhone_14_Pro_Max_portrait.png",revision:"11d120f865c67ee7c29d5c0874e03d1e"},{url:"/apple-splash/iPhone_14_Pro_landscape.png",revision:"39819f142c325bfcd269af135e637826"},{url:"/apple-splash/iPhone_14_Pro_portrait.png",revision:"24b5bc78726741c9d9c592d92033febe"},{url:"/apple-splash/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",revision:"120538e9741fbcdc3e2c87956826c876"},{url:"/apple-splash/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",revision:"37582f99118265d15c051efd3900dea2"},{url:"/apple-splash/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",revision:"c7a7c7eb737e33b9ab024fd83b2f45c3"},{url:"/apple-splash/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",revision:"42be6e5dc3f96ace837d445685e1ea43"},{url:"/apple-splash/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",revision:"f11b2acae2f546ed48fe9cf749c45ddb"},{url:"/apple-splash/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",revision:"afc8fdfa8a4fd34062bed2026e64409a"},{url:"/apple-splash/icon.png",revision:"9afc66f6d294ee8d0938d9a1e0a868e8"},{url:"/dog-eared-white.png",revision:"67e784e19e90111d079bec4f1cbca6e0"},{url:"/dog-eared.png",revision:"6d15ace5b2fe7299fd6ee37052135b70"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/favicon/android-icon-144x144.png",revision:"2f7f3cab8b0585344e9b32baa8dc0131"},{url:"/favicon/android-icon-192x192.png",revision:"73f990f37682620d492e5138b50e8e2b"},{url:"/favicon/android-icon-36x36.png",revision:"4a89bd2e8214288c742e6ec85a5e8ec3"},{url:"/favicon/android-icon-48x48.png",revision:"0c45f1a5aaf498ebbdbc2804a3aa376e"},{url:"/favicon/android-icon-72x72.png",revision:"7a37a94ae71743f50e0c9bb42463a77e"},{url:"/favicon/android-icon-96x96.png",revision:"acf37854ea43dc8c6645e2c6d2a17da4"},{url:"/favicon/apple-icon-114x114.png",revision:"33efbc19d4705e481c61eecc7e698471"},{url:"/favicon/apple-icon-120x120.png",revision:"2bb604360160c20a52e5aca206ac792b"},{url:"/favicon/apple-icon-144x144.png",revision:"2f7f3cab8b0585344e9b32baa8dc0131"},{url:"/favicon/apple-icon-152x152.png",revision:"59c787178503b89d826e211f237a77a3"},{url:"/favicon/apple-icon-180x180.png",revision:"d64533290d8550221a20bf1811cb662e"},{url:"/favicon/apple-icon-57x57.png",revision:"db75fe72d490ee35b4f8ff72a651f4ea"},{url:"/favicon/apple-icon-60x60.png",revision:"745134c5b092a916a85ce73becc7f8a1"},{url:"/favicon/apple-icon-72x72.png",revision:"7a37a94ae71743f50e0c9bb42463a77e"},{url:"/favicon/apple-icon-76x76.png",revision:"ff74e620083a2ad1d25bfd9cc91f1acc"},{url:"/favicon/apple-icon-precomposed.png",revision:"28835c59d2dc70100f7877805b135009"},{url:"/favicon/apple-icon.png",revision:"28835c59d2dc70100f7877805b135009"},{url:"/favicon/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon/favicon-16x16.png",revision:"c32149f5f9d1a3f6069e829dffc112e0"},{url:"/favicon/favicon-32x32.png",revision:"345086e655aeb74053013232724db3c7"},{url:"/favicon/favicon-96x96.png",revision:"acf37854ea43dc8c6645e2c6d2a17da4"},{url:"/favicon/favicon.ico",revision:"c8e030c54762e80ddf9b6c2de1598e2d"},{url:"/favicon/ms-icon-144x144.png",revision:"2f7f3cab8b0585344e9b32baa8dc0131"},{url:"/favicon/ms-icon-150x150.png",revision:"2f8a263e40c77bd3413e677229641239"},{url:"/favicon/ms-icon-310x310.png",revision:"1fb3105a4a5b24cee2e7a3f70482c026"},{url:"/favicon/ms-icon-70x70.png",revision:"ec69d295412ef7884f3284bca6a23403"},{url:"/manifest.json",revision:"1467f5919bd5f550b372e391f8130192"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
