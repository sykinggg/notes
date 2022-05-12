import{_ as l,r,o as i,c,b as e,d as n,F as p,e as t,a as o}from"./app.2fe08138.js";const d={},h=e("h1",{id:"_2022-\u6700\u65B0\u6280\u672F\u8D8B\u52BF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2022-\u6700\u65B0\u6280\u672F\u8D8B\u52BF","aria-hidden":"true"},"#"),t(" 2022 \u6700\u65B0\u6280\u672F\u8D8B\u52BF")],-1),u=e("h2",{id:"zx-\u4F7F\u7528js\u7F16\u5199\u66F4\u4FBF\u6377shell\u811A\u672C",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#zx-\u4F7F\u7528js\u7F16\u5199\u66F4\u4FBF\u6377shell\u811A\u672C","aria-hidden":"true"},"#"),t(" ZX\uFF1A \u4F7F\u7528js\u7F16\u5199\u66F4\u4FBF\u6377shell\u811A\u672C")],-1),_=e("blockquote",null,[e("p",null,"ZX.js 2021\u5E74 star \u589E\u91CF +24.3K")],-1),b=["src"],g={href:"https://github.com/google/zx",target:"_blank",rel:"noopener noreferrer"},m=t("https://github.com/google/zx"),k=o('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token hashbang comment">#!/usr/bin/env zx</span>\n\n<span class="token keyword">await</span> $<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">cat package.json | grep name</span><span class="token template-punctuation string">`</span></span>\n\n<span class="token keyword">let</span> branch <span class="token operator">=</span> <span class="token keyword">await</span> $<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">git branch --show-current</span><span class="token template-punctuation string">`</span></span>\n<span class="token keyword">await</span> $<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">dep deploy --branch=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>branch<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n\n<span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  $<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">sleep 1; echo 1</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  $<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">sleep 2; echo 2</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  $<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">sleep 3; echo 3</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="react-next-js-\u4E92\u76F8\u6210\u5C31\u7684\u597D\u57FA\u53CB" tabindex="-1"><a class="header-anchor" href="#react-next-js-\u4E92\u76F8\u6210\u5C31\u7684\u597D\u57FA\u53CB" aria-hidden="true">#</a> React &amp; Next.js\uFF1A \u4E92\u76F8\u6210\u5C31\u7684\u597D\u57FA\u53CB</h2>',2),f=["src"],w=o("<blockquote><p>React 2021\u5E74 <code>star</code> \u589E\u91CF +18.5K</p></blockquote><blockquote><p>Next.js 2021\u5E74 <code>star</code> \u589E\u91CF +19.7K</p></blockquote><p><code>Next.js</code> \u5219\u662F\u57FA\u4E8E <code>React</code> \u7684\u4E00\u6B3E\u5E94\u7528\u6846\u67B6\uFF0C\u57FA\u4E8E <code>Next.js</code> \u4F60\u53EF\u4EE5\u66F4\u4FBF\u6377\u5730\u4E0A\u624B\u5F00\u53D1 <code>React</code> \u5E94\u7528</p>",3),v={href:"https://www.nextjs.cn/",target:"_blank",rel:"noopener noreferrer"},T=t("https://www.nextjs.cn/"),C=e("h2",{id:"tauri-\u6784\u5EFA\u66F4\u5C0F\u66F4\u5FEB\u7684\u8DE8\u5E73\u53F0\u684C\u9762\u5E94\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tauri-\u6784\u5EFA\u66F4\u5C0F\u66F4\u5FEB\u7684\u8DE8\u5E73\u53F0\u684C\u9762\u5E94\u7528","aria-hidden":"true"},"#"),t(" Tauri\uFF1A \u6784\u5EFA\u66F4\u5C0F\u66F4\u5FEB\u7684\u8DE8\u5E73\u53F0\u684C\u9762\u5E94\u7528")],-1),x=e("blockquote",null,[e("p",null,[t("Tauri 2021\u5E74 "),e("code",null,"star"),t(" \u589E\u91CF +18.0K")])],-1),j=["src"],P=e("blockquote",null,[e("p",null,[t("Tauri \u662F\u4E00\u4E2A\u4E3A\u6240\u6709\u4E3B\u6D41\u684C\u9762\u5E73\u53F0\u6784\u5EFA\u5C0F\u578B\u3001\u5FEB\u901F\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u6846\u67B6\u3002\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u96C6\u6210\u4EFB\u4F55\u7F16\u8BD1\u6210 HTML\u3001 JS \u548C CSS \u7684\u524D\u7AEF\u6846\u67B6\u6765\u6784\u5EFA\u4ED6\u4EEC\u7684\u7528\u6237\u754C\u9762\u3002\u5E94\u7528\u7A0B\u5E8F\u7684\u540E\u7AEF\u662F\u4E00\u4E2A "),e("code",null,"Rust"),t(" \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u5177\u6709\u524D\u7AEF\u53EF\u4EE5\u4E0E\u4E4B\u4EA4\u4E92\u7684 API\u3002")])],-1),R={href:"https://tauri.studio/en/docs/getting-started/intro",target:"_blank",rel:"noopener noreferrer"},V=t("https://tauri.studio/en/docs/getting-started/intro"),S={href:"https://github.com/tauri-apps/tauri",target:"_blank",rel:"noopener noreferrer"},q=t("https://github.com/tauri-apps/tauri"),W=e("h2",{id:"slidev-\u57FA\u4E8Emarkdown\u7684\u6F14\u793A\u5E7B\u706F\u7247",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#slidev-\u57FA\u4E8Emarkdown\u7684\u6F14\u793A\u5E7B\u706F\u7247","aria-hidden":"true"},"#"),t(" Slidev\uFF1A \u57FA\u4E8Emarkdown\u7684\u6F14\u793A\u5E7B\u706F\u7247")],-1),y=e("blockquote",null,[e("p",null,[t("Slidev 2021\u5E74 "),e("code",null,"star"),t(" \u589E\u91CF +16.9K")])],-1),$=["src"],B={href:"https://sli.dev/",target:"_blank",rel:"noopener noreferrer"},I=t("https://sli.dev/"),N={href:"https://github.com/slidevjs/slidev",target:"_blank",rel:"noopener noreferrer"},E=t("https://github.com/slidevjs/slidev"),z=o('<h2 id="\u4EE5vite\u4E3A\u4EE3\u8868\u7684\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u4EE5vite\u4E3A\u4EE3\u8868\u7684\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177" aria-hidden="true">#</a> \u4EE5Vite\u4E3A\u4EE3\u8868\u7684\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177</h2><p><strong>\u6838\u5FC3\u539F\u7406</strong></p><ul><li><p>\u5F00\u53D1\u73AF\u5883\u4E0B\uFF0C\u6A21\u5757\u4EE5\u539F\u751F <code>esm</code> \u7684\u5F62\u5F0F\u88AB\u6D4F\u89C8\u5668\u52A0\u8F7D\u3002</p></li><li><p>\u751F\u4EA7\u73AF\u5883\u4E0B\uFF0C\u6A21\u5757\u88AB <code>Rollup</code> \u4EE5\u4F20\u7EDF\u65B9\u5F0F\u6253\u5305\uFF0C\u800C\u4E14\u505A\u4E86\u5F88\u591A\u9ED8\u8BA4\u4F18\u5316\u3002</p></li><li><p>\u5F00\u53D1\u548C\u751F\u4EA7\u73AF\u5883\u4E0B\u5171\u4EAB\u540C\u4E00\u5957 <code>Rollup</code> \u63D2\u4EF6\u673A\u5236\uFF0C\u6240\u4EE5\u5355\u4E2A\u6A21\u5757\u7684\u7F16\u8BD1\u5728\u5F00\u53D1\u548C\u751F\u4EA7\u73AF\u5883\u4E0B\u662F\u4E00\u81F4\u7684\u3002</p></li></ul>',3),H=["src"],L=["src"],U=o('<p><strong>\u6846\u67B6\u4F18\u52BF</strong></p><ul><li><p>\u5FEB\uFF0C\u6781\u901F\uFF0C\u4F7F\u7528\u539F\u751FESM\u6587\u4EF6</p></li><li><p>\u8D85\u5FEB\u7684HMR(\u70ED\u91CD\u8F7D)</p></li><li><p><code>Rollup</code> \u63D2\u4EF6\u673A\u5236</p></li><li><p>\u5929\u7136\u4F18\u5148\u652F\u6301<code>Vue3</code></p></li></ul><h2 id="vue3-ts-vite-pinia\u7EC4\u5408" tabindex="-1"><a class="header-anchor" href="#vue3-ts-vite-pinia\u7EC4\u5408" aria-hidden="true">#</a> Vue3+Ts+Vite+Pinia\u7EC4\u5408</h2>',3),D=t("\u4E0A\u9762\u5DF2\u63D0\u5230Vite\u57FA\u4E8ETs\u8BED\u6CD5\uFF0C\u5E76\u4E14\u5BF9Vue3\u5929\u7136\u7684\u652F\u6301\uFF0C\u52A0\u4E0A\u5C24\u5927\u4E3B\u63A8\u7684"),K={href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},M=t("Pinia"),F=t("\u4F5C\u4E3Avuex\u7684\u6700\u4F73\u66FF\u4EE3\u54C1\u3002\u6B64\u5957\u7EC4\u5408\u6216\u6210\u4E3A22\u5E74Vue\u5F00\u53D1\u7684\u6700\u4F73\u9009\u62E9"),G=e("h2",{id:"pnpm",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pnpm","aria-hidden":"true"},"#"),t(" pnpm")],-1),Q=e("blockquote",null,[e("p",null,[e("code",null,"pnpm"),t(" \u8282\u7701\u4F60\u7684\u78C1\u76D8\u7A7A\u95F4\uFF0C\u8BA9\u4F9D\u8D56\u5305\u4E5F\u80FD\u7EDF\u4E00\u7BA1\u7406\uFF0C\u6309\u9700\u66F4\u65B0")])],-1),O={href:"https://pnpm.io/zh/",target:"_blank",rel:"noopener noreferrer"},X=t("pnpm"),Z=e("h2",{id:"tailwindcss",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tailwindcss","aria-hidden":"true"},"#"),t(" tailwindcss")],-1),A=e("blockquote",null,[e("p",null,"\u4E0D\u9002\u5408\u521D\u4E2D\u7EA7\u524D\u7AEF")],-1),J={href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer"},Y=t("tailwindcss"),ee=["src"],te=e("h2",{id:"vue-\u5DE5\u5177\u5305",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-\u5DE5\u5177\u5305","aria-hidden":"true"},"#"),t(" vue \u5DE5\u5177\u5305")],-1),se=e("h3",{id:"vue-i18n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-i18n","aria-hidden":"true"},"#"),t(" Vue I18n")],-1),ne=e("blockquote",null,[e("p",null,"Vue.js \u7684\u56FD\u9645\u5316\u63D2\u4EF6")],-1),ae={href:"https://vue-i18n.intlify.dev/",target:"_blank",rel:"noopener noreferrer"},oe=t("Vue I18n"),le=e("h3",{id:"vitessg",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vitessg","aria-hidden":"true"},"#"),t(" ViteSSG")],-1),re=e("blockquote",null,[e("p",null,"ViteSSG\uFF0CSEO\u4F18\u5316 \u53EF\u4EE5\u76F4\u63A5\u5728Vue3\u7684\u670D\u52A1\u5668\u4E0A\u751F\u6210")],-1),ie={href:"https://github.com/antfu/vite-ssg",target:"_blank",rel:"noopener noreferrer"},ce=t("ViteSSG"),pe=e("h3",{id:"vitest",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vitest","aria-hidden":"true"},"#"),t(" Vitest")],-1),de=e("blockquote",null,[e("p",null,"Vitest \u57FA\u4E8EVite\u7684\u5355\u5143\u6D4B\u8BD5\u5DE5\u5177")],-1),he={href:"https://github.com/vitest-dev/vitest",target:"_blank",rel:"noopener noreferrer"},ue=t("Vitest"),_e=e("h2",{id:"web3d\u56FE\u5F62\u6280\u672F",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#web3d\u56FE\u5F62\u6280\u672F","aria-hidden":"true"},"#"),t(" Web3D\u56FE\u5F62\u6280\u672F")],-1),be=e("blockquote",null,[e("p",null,"oasisengine \u8840\u8350")],-1),ge={href:"https://oasisengine.cn/",target:"_blank",rel:"noopener noreferrer"},me=t("oasisengine"),ke=e("h2",{id:"_5g\u5728\u52A0\u901Fweb\u901A\u4FE1\u7684\u589E\u5F3A",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5g\u5728\u52A0\u901Fweb\u901A\u4FE1\u7684\u589E\u5F3A","aria-hidden":"true"},"#"),t(" 5G\u5728\u52A0\u901FWeb\u901A\u4FE1\u7684\u589E\u5F3A")],-1),fe=e("h3",{id:"webrtc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webrtc","aria-hidden":"true"},"#"),t(" WebRTC")],-1),we=e("blockquote",null,[e("p",null,[e("strong",null,"WebRTC"),t(" (Web Real-Time Communications) \u662F\u4E00\u9879\u5B9E\u65F6\u901A\u8BAF\u6280\u672F\uFF0C\u5B83\u5141\u8BB8\u7F51\u7EDC\u5E94\u7528\u6216\u8005\u7AD9\u70B9\uFF0C\u5728\u4E0D\u501F\u52A9\u4E2D\u95F4\u5A92\u4ECB\u7684\u60C5\u51B5\u4E0B\uFF0C\u5EFA\u7ACB\u6D4F\u89C8\u5668\u4E4B\u95F4\u70B9\u5BF9\u70B9\uFF08Peer-to-Peer\uFF09\u7684\u8FDE\u63A5\uFF0C\u5B9E\u73B0\u89C6\u9891\u6D41\u548C\uFF08\u6216\uFF09\u97F3\u9891\u6D41\u6216\u8005\u5176\u4ED6\u4EFB\u610F\u6570\u636E\u7684\u4F20\u8F93\u3002WebRTC\u5305\u542B\u7684\u8FD9\u4E9B\u6807\u51C6\u4F7F\u7528\u6237\u5728\u65E0\u9700\u5B89\u88C5\u4EFB\u4F55\u63D2\u4EF6\u6216\u8005\u7B2C\u4E09\u65B9\u7684\u8F6F\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF0C\u521B\u5EFA\u70B9\u5BF9\u70B9\uFF08Peer-to-Peer\uFF09\u7684\u6570\u636E\u5206\u4EAB\u548C\u7535\u8BDD\u4F1A\u8BAE\u6210\u4E3A\u53EF\u80FD\u3002\u2014\u2014\u51FA\u81EAMDN")])],-1),ve=e("li",null,[e("p",null,[e("strong",null,"2012\u5E74"),t("\uFF1A \u8C37\u6B4C\u5DF2\u7ECF\u628A\u8FD9\u6B3E\u8F6F\u4EF6\u96C6\u6210\u5230Chrome\u6D4F\u89C8\u5668\u4E2D\uFF0COpera\u521D\u6B65\u96C6\u6210WebRTC\u3002")])],-1),Te=e("li",null,[e("p",null,[e("strong",null,"2013\u5E74 6\u6708"),t("\uFF1A Mozilla Firefox[5]\u53D1\u5E0322.0\u7248\u672C\u6B63\u5F0F\u96C6\u6210\u53CA\u652F\u6301WebRTC\u3002")])],-1),Ce=e("li",null,[e("p",null,[e("strong",null,"2017\u5E7411\u6708"),t("\uFF1A W3C WebRTC 1.0 \u8349\u6848\u6B63\u5F0F\u5B9A\u7A3F\u3002")])],-1),xe=e("strong",null,"2021\u5E741\u6708",-1),je=t("\uFF1A WebRTC \u88AB W3C \u548C IETF \u53D1\u5E03\u4E3A\u6B63\u5F0F\u6807\u51C6\uFF08\u89C1\u300A"),Pe={href:"https://www.w3.org/TR/2021/REC-webrtc-20210126/",target:"_blank",rel:"noopener noreferrer"},Re=t("WebRTC 1.0: Real-Time Communication Between Browsers"),Ve=t("\u300B\uFF09\u3002"),Se=["src"],qe=o('<h2 id="chrome97\u53D1\u5E03-quic\u534F\u8BAE\u5230\u6765" tabindex="-1"><a class="header-anchor" href="#chrome97\u53D1\u5E03-quic\u534F\u8BAE\u5230\u6765" aria-hidden="true">#</a> Chrome97\u53D1\u5E03\uFF0CQUIC\u534F\u8BAE\u5230\u6765</h2><p>\u4E00\u5468\u524D\uFF0CChrome 97\u53D1\u5E03\uFF0C\u6700\u5927\u7684\u4EAE\u70B9\u662F<code>WebTransport</code>\uFF0C\u5F97\u76CA\u4E8E\u5F3A\u5927\u7684<code>QUIC</code>\u534F\u8BAE\uFF0C<code>WebTranport</code>\u53EF\u4EE5\u63D0\u4F9B\u66F4\u5F3A\u66F4\u5FEB\u7684\u53CC\u5411\u901A\u4FE1\u80FD\u529B\uFF0C\u6709\u671B\u7528\u4E8E\u6E38\u620F\u3001\u76F4\u64AD\u3001\u89C6\u9891\u4F1A\u8BAE\u7B49\u4F4E\u5EF6\u65F6\u573A\u666F\u3002</p><table><thead><tr><th><strong>\u53CC\u5411\u901A\u4FE1\u534F\u8BAE</strong></th><th><strong>\u5E95\u5C42\u534F\u8BAE</strong></th><th><strong>\u4F18\u70B9</strong></th><th><strong>\u7F3A\u70B9</strong></th></tr></thead><tbody><tr><td>WebSocket</td><td>TCP/TLS</td><td>\u6280\u672F\u6210\u719F\uFF0C\u4F7F\u7528\u7B80\u5355</td><td>TCP\u5934\u90E8\u963B\u585E\uFF0C\u4E0D\u652F\u6301\u4E0D\u53EF\u9760\u65E0\u5E8F\u901A\u4FE1\uFF0C\u4E0D\u9002\u7528\u4E8E\u4F4E\u5EF6\u65F6\u573A\u666F</td></tr><tr><td>WebRTC data channels</td><td>SCTP/DTLS/ICE/UDP</td><td>\u53EF\u4EE5\u7528\u4E8E\u9002\u5408P2P\u573A\u666F</td><td>\u4F7F\u7528\u96BE\u5EA6\u5927\uFF0C\u4E0D\u9002\u7528\u4E8EClient/Server\u901A\u4FE1</td></tr><tr><td>WebTransport</td><td>HTTP/3\uFF08QUIC/UDP\uFF09\u6216\u8005HTTP/2\uFF08TLS/TCP\uFF09</td><td>\u5EF6\u65F6\u66F4\u4F4E\uFF0C\u6CA1\u6709\u5934\u90E8\u963B\u585E\u95EE\u9898\uFF0C\u9002\u7528\u573A\u666F\u66F4\u591A</td><td>\u5C1A\u672A\u6210\u4E3A\u6B63\u5F0F\u6807\u51C6</td></tr></tbody></table><blockquote><p><code>WebTransport</code>\u9ED8\u8BA4\u4F7F\u7528<code>HTTP/3</code>\uFF0C\u540C\u65F6\u4F7F\u7528<code>HTTP/2</code>\u4F5C\u4E3A\u5907\u80CE\u3002</p></blockquote>',4),We=["src"],ye=e("ul",null,[e("li",null,[e("p",null,"\u63D0\u4F9B\u7C7B\u4F3C\u4E8ETCP\u7684\u53EF\u9760\u901A\u4FE1\uFF0C\u5904\u7406\u4E22\u5305\u3001\u62E5\u585E\u7B49\u7F51\u7EDC\u5F02\u5E38\u60C5\u51B5\uFF1B")]),e("li",null,[e("p",null,"\u57FA\u4E8ETLS/1.3\u8FDB\u884C\u52A0\u5BC6\uFF0C\u4FDD\u8BC1\u901A\u4FE1\u7684\u5B89\u5168\u6027\uFF0C\u540C\u65F6\u907F\u514D\u4E2D\u95F4\u8282\u70B9\u5E72\u6270\u5BFC\u81F4\u534F\u8BAE\u50F5\u5316\uFF1B")]),e("li",null,[e("p",null,"\u63D0\u4F9B\u7C7B\u4F3C\u4E8EHTTP/2\u7684\u591A\u8DEF\u590D\u7528\u80FD\u529B\uFF0C\u5728\u7F51\u7EDC\u4F20\u8F93\u5C42\u589E\u52A0\u4E86\u6D41\u7684\u6982\u5FF5\uFF0C\u89E3\u51B3\u4E86TCP\u534F\u8BAE\u7684\u5934\u90E8\u963B\u585E\u95EE\u9898\uFF1B")])],-1),$e={href:"https://support.google.com/chrome/a/answer/7679408?hl=en",target:"_blank",rel:"noopener noreferrer"},Be=t("QUIC");function Ie(a,Ne){const s=r("ExternalLinkIcon");return i(),c(p,null,[h,u,_,e("img",{src:a.$withBase("/assets/technology/base/1642034948613.jpg"),alt:"demo"},null,8,b),e("p",null,[e("a",g,[m,n(s)])]),k,e("img",{src:a.$withBase("/assets/technology/base/1642035447880.jpg"),alt:"demo"},null,8,f),w,e("p",null,[e("a",v,[T,n(s)])]),C,x,e("img",{src:a.$withBase("/assets/technology/base/1642035615780.jpg"),alt:"demo"},null,8,j),P,e("p",null,[e("a",R,[V,n(s)])]),e("p",null,[e("a",S,[q,n(s)])]),W,y,e("img",{src:a.$withBase("/assets/technology/base/1642036003611.jpg"),alt:"demo"},null,8,$),e("p",null,[e("a",B,[I,n(s)])]),e("p",null,[e("a",N,[E,n(s)])]),z,e("img",{src:a.$withBase("/assets/technology/base/5f3d9ee833174df881e7a76a1a17e05a_tplv-k3u1fbpfcp-watermark.awebp"),alt:"demo"},null,8,H),e("img",{src:a.$withBase("/assets/technology/base/c549367d994a4af694e339770f8be521_tplv-k3u1fbpfcp-watermark.awebp"),alt:"demo"},null,8,L),U,e("p",null,[D,e("a",K,[M,n(s)]),F]),G,Q,e("p",null,[e("a",O,[X,n(s)])]),Z,A,e("p",null,[e("a",J,[Y,n(s)])]),e("img",{src:a.$withBase("/assets/technology/base/tailwindcss-1.gif"),alt:"demo"},null,8,ee),te,se,ne,e("p",null,[e("a",ae,[oe,n(s)])]),le,re,e("p",null,[e("a",ie,[ce,n(s)])]),pe,de,e("p",null,[e("a",he,[ue,n(s)])]),_e,be,e("p",null,[e("a",ge,[me,n(s)])]),ke,fe,we,e("ul",null,[ve,Te,Ce,e("li",null,[e("p",null,[xe,je,e("a",Pe,[Re,n(s)]),Ve])])]),e("img",{src:a.$withBase("/assets/technology/base/426fd4d6cca54b9ebf8f12593d6fcb40_tplv-k3u1fbpfcp-watermark.awebp"),alt:"demo"},null,8,Se),qe,e("img",{src:a.$withBase("/assets/technology/base/8f8f4dec3d064b8b890d50d976fb8849_tplv-k3u1fbpfcp-watermark.awebp"),alt:"demo"},null,8,We),ye,e("p",null,[e("a",$e,[Be,n(s)])])],64)}var ze=l(d,[["render",Ie],["__file","base.html.vue"]]);export{ze as default};