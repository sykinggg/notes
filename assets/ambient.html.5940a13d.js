import{_ as t,r as o,o as c,c as i,b as s,d as e,F as r,e as n,a as p}from"./app.adb48220.js";const l={},u=s("h1",{id:"\u73AF\u5883\u58F0\u660E",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u73AF\u5883\u58F0\u660E","aria-hidden":"true"},"#"),n(" \u73AF\u5883\u58F0\u660E")],-1),d=n("\u6B63\u5982\u5728\u4E3A\u4EC0\u4E48\u4F7F\u7528 "),k={href:"https://basarat.gitbooks.io/typescript/content/docs/why-typescript.html",target:"_blank",rel:"noopener noreferrer"},b=n("TypeScript"),m=n(" \u4E2D\u6240\u8BF4\uFF1A"),h=p(`<blockquote><p>TypeScript \u7684\u8BBE\u8BA1\u76EE\u6807\u4E4B\u4E00\u662F\u8BA9\u4F60\u5728 TypeScript \u4E2D\u5B89\u5168\u3001\u8F7B\u677E\u5730\u4F7F\u7528\u73B0\u6709\u7684 JavaScript \u5E93\uFF0CTypeScript \u901A\u8FC7\u58F0\u660E\u6587\u4EF6\u6765\u505A\u5230\u8FD9\u4E00\u70B9</p></blockquote><p>\u73AF\u5883\u58F0\u660E\u5141\u8BB8\u4F60\u5B89\u5168\u5730\u4F7F\u7528\u73B0\u6709\u7684 JavaScript \u5E93\uFF0C\u5E76\u4E14\u80FD\u8BA9\u4F60\u7684 JavaScript\u3001CoffeeScript \u6216\u8005\u5176\u4ED6\u9700\u8981\u7F16\u8BD1\u6210 JavaScript \u7684\u8BED\u8A00\u9010\u6B65\u8FC1\u79FB\u81F3 TypeScript\u3002</p><p>\u5B66\u4E60\u4E3A\u7B2C\u4E09\u65B9 JavaScript \u5E93\u7F16\u5199\u73AF\u5883\u58F0\u660E\uFF0C\u662F\u4E00\u79CD\u4E3A TypeScript \u5199\u6CE8\u89E3\u6BD4\u8F83\u597D\u7684\u5B9E\u8DF5\u65B9\u5F0F\u3002</p><h2 id="\u58F0\u660E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a> \u58F0\u660E\u6587\u4EF6</h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>declare</code> \u5173\u952E\u5B57\u6765\u544A\u8BC9 TypeScript\uFF0C\u4F60\u6B63\u5728\u8BD5\u56FE\u8868\u8FF0\u4E00\u4E2A\u5176\u4ED6\u5730\u65B9\u5DF2\u7ECF\u5B58\u5728\u7684\u4EE3\u7801\uFF0C\u5982\uFF1A\u5199\u5728 JavaScript\u3001CoffeeScript \u6216\u8005\u662F\u50CF\u6D4F\u89C8\u5668\u548C Node.js \u8FD0\u884C\u73AF\u5883\u91CC\u7684\u4EE3\u7801\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// Error: &#39;foo&#39; is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u548C\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">var</span> foo<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// allow</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F60\u53EF\u4EE5\u9009\u62E9\u628A\u8FD9\u4E9B\u58F0\u660E\u653E\u5165 <code>.ts</code> \u6216\u8005 <code>.d.ts</code> \u91CC\u3002\u5728\u4F60\u5B9E\u9645\u7684\u9879\u76EE\u91CC\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u4F60\u5E94\u8BE5\u628A\u58F0\u660E\u653E\u5165\u72EC\u7ACB\u7684 <code>.d.ts</code> \u91CC\uFF08\u53EF\u4EE5\u4ECE\u4E00\u4E2A\u547D\u540D\u4E3A <code>global.d.ts</code> \u6216\u8005 <code>vendor.d.ts</code> \u6587\u4EF6\u5F00\u59CB\uFF09\u3002</p><p>\u5982\u679C\u4E00\u4E2A\u6587\u4EF6\u6709\u6269\u5C55\u540D <code>.d.ts</code>\uFF0C\u8FD9\u610F\u5473\u7740\u6BCF\u4E2A\u6839\u7EA7\u522B\u7684\u58F0\u660E\u90FD\u5FC5\u987B\u4EE5 <code>declare</code> \u5173\u952E\u5B57\u4F5C\u4E3A\u524D\u7F00\u3002\u8FD9\u6709\u5229\u4E8E\u8BA9\u5F00\u53D1\u8005\u6E05\u695A\u7684\u77E5\u9053\uFF0C\u5728\u8FD9\u91CC TypeScript \u5C06\u4E0D\u4F1A\u628A\u5B83\u7F16\u8BD1\u6210\u4EFB\u4F55\u4EE3\u7801\uFF0C\u540C\u65F6\u5F00\u53D1\u8005\u9700\u8981\u786E\u4FDD\u8FD9\u4E9B\u5728\u7F16\u8BD1\u65F6\u5B58\u5728\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>\u73AF\u5883\u58F0\u660E\u5C31\u597D\u50CF\u4F60\u4E0E\u7F16\u8BD1\u5668\u4E4B\u95F4\u7684\u4E00\u4E2A\u7EA6\u5B9A\uFF0C\u5982\u679C\u5728\u7F16\u8BD1\u65F6\u5B83\u4EEC\u4E0D\u5B58\u5728\uFF0C\u4F46\u662F\u4F60\u5374\u4F7F\u7528\u4E86\u5B83\u4EEC\uFF0C\u7A0B\u5E8F\u5C06\u4F1A\u5728\u6CA1\u6709\u8B66\u544A\u7684\u60C5\u51B5\u4E0B\u4E2D\u65AD\u3002</li><li>\u73AF\u5883\u58F0\u660E\u5C31\u597D\u50CF\u662F\u4E00\u4E2A\u6587\u6863\u3002\u5982\u679C\u6E90\u6587\u4EF6\u66F4\u65B0\u4E86\uFF0C\u4F60\u5E94\u8BE5\u540C\u6B65\u66F4\u65B0\u3002\u6240\u4EE5\uFF0C\u5F53\u4F60\u5728\u8FD0\u884C\u65F6\u6709\u65B0\u7684\u884C\u4E3A\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u53BB\u66F4\u65B0\u73AF\u5883\u58F0\u660E\uFF0C\u7F16\u8BD1\u5668\u5C06\u4F1A\u62A5\u9519\u3002</li></ul></div><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><p>\u5F53\u4F60\u60F3\u544A\u8BC9 TypeScript \u7F16\u8F91\u5668\u5173\u4E8E <code>process</code> \u53D8\u91CF\u65F6\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u4E48\u505A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">let</span> process<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,14),y={class:"custom-container tip"},_=s("p",{class:"custom-container-title"},"TIP",-1),g=n("\u4F60\u5E76\u4E0D\u9700\u8981\u4E3A "),v=s("code",null,"process",-1),f=n(" \u505A\u8FD9\u4E9B\uFF0C\u56E0\u4E3A\u8FD9\u5DF2\u7ECF\u5B58\u5728\u4E8E\u793E\u533A\u7EF4\u62A4\u7684 "),x={href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/index.d.ts",target:"_blank",rel:"noopener noreferrer"},S=s("code",null,"node.d.ts",-1),T=p(`<p>\u8FD9\u5141\u8BB8\u4F60\u4F7F\u7528 <code>process</code>\uFF0C\u5E76\u80FD\u6210\u529F\u901A\u8FC7 TypeScript \u7684\u7F16\u8BD1\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u63A8\u8350\u5C3D\u53EF\u80FD\u7684\u4F7F\u7528\u63A5\u53E3\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Process</span> <span class="token punctuation">{</span>
  <span class="token function">exit</span><span class="token punctuation">(</span>code<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">let</span> process<span class="token operator">:</span> Process<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u56E0\u4E3A\u8FD9\u5141\u8BB8\u5176\u4ED6\u4EBA\u6269\u5145\u8FD9\u4E9B\u5168\u5C40\u53D8\u91CF\uFF0C\u5E76\u4E14\u4F1A\u544A\u8BC9 TypeScript \u6709\u5173\u4E8E\u8FD9\u4E9B\u58F0\u660E\u7684\u4FEE\u6539\u3002\u4F8B\u5982\uFF1A\u8003\u8651\u5230\u4EE5\u4E0B\u60C5\u51B5\uFF0C\u6DFB\u52A0\u4E00\u4E2A <code>exitWithLogging</code> \u51FD\u6570\u81F3 <code>process</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Process</span> <span class="token punctuation">{</span>
  <span class="token function">exitWithLogging</span><span class="token punctuation">(</span>code<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

process<span class="token punctuation">.</span><span class="token function-variable function">exitWithLogging</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;exiting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>process<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u63A5\u4E0B\u6765\uFF0C\u8BA9\u66F4\u8BE6\u7EC6\u7684\u4E86\u89E3\u63A5\u53E3\u3002</p>`,7);function w(J,L){const a=o("ExternalLinkIcon");return c(),i(r,null,[u,s("p",null,[d,s("a",k,[b,e(a)]),m]),h,s("div",y,[_,s("p",null,[g,v,f,s("a",x,[S,e(a)])])]),T],64)}var P=t(l,[["render",w],["__file","ambient.html.vue"]]);export{P as default};
