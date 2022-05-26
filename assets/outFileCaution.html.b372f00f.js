import{_ as o,r as c,o as t,c as d,b as s,d as i,a,e}from"./app.11072343.js";const p={},r=a(`<h1 id="\u8C28\u614E\u4F7F\u7528-outfile" tabindex="-1"><a class="header-anchor" href="#\u8C28\u614E\u4F7F\u7528-outfile" aria-hidden="true">#</a> \u8C28\u614E\u4F7F\u7528 <code>--outFile</code></h1><p>\u7531\u4E8E\u4EE5\u4E0B\u51E0\u70B9\u539F\u56E0\uFF0C\u4F60\u5E94\u8BE5\u8C28\u614E\u4F7F\u7528 <code>--outFile</code> \u9009\u9879\uFF1A</p><ul><li>\u8FD0\u884C\u65F6\u7684\u9519\u8BEF\uFF1B</li><li>\u5FEB\u901F\u7F16\u8BD1\uFF1B</li><li>\u5168\u5C40\u4F5C\u7528\u57DF\uFF1B</li><li>\u96BE\u4EE5\u5206\u6790\uFF1B</li><li>\u96BE\u4EE5\u6269\u5C55\uFF1B</li><li><code>_references</code>\uFF1B</li><li>\u4EE3\u7801\u91CD\u7528\uFF1B</li><li>\u591A\u76EE\u6807\uFF1B</li><li>\u5355\u72EC\u7F16\u8BD1\uFF1B</li></ul><h2 id="\u8FD0\u884C\u65F6\u7684\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u65F6\u7684\u9519\u8BEF" aria-hidden="true">#</a> \u8FD0\u884C\u65F6\u7684\u9519\u8BEF</h2><p>\u5982\u679C\u4F60\u7684\u4EE3\u7801\u4F9D\u8D56\u4E8E\u4E0A\u6587\u4E2D\u7684 JavaScript\uFF0C\u4F60\u53EF\u80FD\u4F1A\u5728\u8FD0\u884C\u65F6\u5F97\u5230\u9519\u8BEF\uFF1A</p><ul><li>\u7C7B\u7684\u7EE7\u627F\u5728\u8FD0\u884C\u65F6\u4E2D\u65AD\u3002</li></ul><p>\u6709\u5982\u4E0B <code>foo.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4EE5\u53CA <code>bar.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u6CA1\u6709\u6309\u6B63\u786E\u7684\u987A\u5E8F\u7F16\u8BD1\u5B83\uFF08\u4F8B\u5982\uFF1A<code>tsc bar.ts foo.ts</code>\uFF09\uFF0C\u867D\u7136\u5B83\u80FD\u591F\u88AB\u7F16\u8BD1\u6210\u529F\uFF0C\u4F46\u662F\u4F1A\u5728\u8FD0\u884C\u65F6\u629B\u51FA <code>ReferenceError</code> \u7684\u9519\u8BEF\u3002</p><ul><li>\u6A21\u5757\u62C6\u5206\u5728\u8FD0\u884C\u65F6\u4F1A\u5931\u8D25\u3002</li></ul><p><code>foo.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">namespace</span> App <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>bar.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">namespace</span> App <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> bar <span class="token operator">=</span> foo <span class="token operator">+</span> <span class="token number">456</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0E\u4E0A\u6587\u4E2D\u4E00\u81F4\uFF0C\u5F53\u4F60\u6CA1\u6709\u7528\u6B63\u786E\u7684\u987A\u5E8F\u7F16\u8BD1\u5B83\uFF0C\u5B83\u4F1A\u5728\u8FD0\u884C\u65F6\u5C06 <code>NaN</code> \u8D4B\u503C\u7ED9 <code>bar</code>\uFF1B</p><h2 id="\u5FEB\u901F\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u7F16\u8BD1" aria-hidden="true">#</a> \u5FEB\u901F\u7F16\u8BD1</h2><p>\u5982\u679C\u4F60\u4F7F\u7528 <code>--out</code> \u7F16\u8BD1\u9009\u9879\uFF0C\u800C\u6CA1\u6709\u4F7F\u7528\u4E00\u4E9B <code>hacks</code> \u65F6\uFF0C\u5355\u72EC\u7684 <code>.ts</code> \u6587\u4EF6\u662F\u4E0D\u4F1A\u88AB\u7F16\u8BD1\u6210\u5355\u72EC\u7684 <code>.js</code> \u6587\u4EF6\u3002 <code>--out</code> \u9009\u9879\u5B9E\u9645\u4E0A\u4F7F\u7528\u4E86\u8F83\u6162\u7684\u6784\u5EFA\u65B9\u5F0F\u3002</p><p>\u6B64\u5916\uFF0C\u7531\u4E8E source map \u57FA\u4E8E\u957F\u5EA6\u7F16\u7801\uFF0C\u4E14\u5BF9\u4F4D\u7F6E\u4FE1\u606F\u654F\u611F\uFF0C\u56E0\u6B64\uFF0C\u5927\u90E8\u5206 source map \u90FD\u4F1A\u5728\u7F16\u8BD1\u65F6\u91CD\u65B0\u6784\u5EFA\uFF08\u5982\u679C\u4F60\u4F7F\u7528 source map\uFF09\u3002</p><h2 id="\u5168\u5C40\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u5168\u5C40\u4F5C\u7528\u57DF</h2><p>\u5F53\u7136\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u547D\u540D\u7A7A\u95F4\uFF0C\u4F46\u662F\u5B83\u4ECD\u7136\u5728 <code>window</code> \u4E0A\uFF08\u5982\u679C\u4F60\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\uFF09\uFF0C\u547D\u540D\u7A7A\u95F4\u4EC5\u4EC5\u662F\u4E00\u4E2A\u4E34\u65F6\u7684\u89E3\u51B3\u65B9\u5F0F\u3002<code>///&lt;reference</code> \u4E5F\u4E0D\u4F8B\u5916\uFF0C\u5B83\u4F1A\u5F15\u5165\u4E00\u4E2A\u96BE\u4EE5\u7EF4\u62A4\u7684\u5168\u5C40\u4E0A\u4E0B\u6587\u3002</p><p>\u5982\u679C\u4F60\u7684\u516C\u53F8\u6709\u591A\u4E2A\u72EC\u7ACB\u5DE5\u4F5C\u7684\u56E2\u961F\uFF0C\u5F53\u6709\u4EBA\u51B3\u5B9A\u5C1D\u8BD5\u96C6\u6210\u4E24\u4E2A\u7A0B\u5E8F\u7F16\u5199 app \u65F6\uFF0C\u5219\u5F88\u53EF\u80FD\u5B58\u5728\u547D\u540D\u51B2\u7A81\u3002</p><h2 id="\u96BE\u4EE5\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u96BE\u4EE5\u5206\u6790" aria-hidden="true">#</a> \u96BE\u4EE5\u5206\u6790</h2><p>\u5E0C\u671B\u63D0\u4F9B\u66F4\u591A\u4EE3\u7801\u5206\u6790\u5DE5\u5177\u3002\u5982\u679C\u4F60\u63D0\u4F9B\u8C03\u7528\u94FE\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u8FD9\u4E9B\u5C06\u4F1A\u53D8\u5F97\u7B80\u5355\u3002</p><h2 id="\u96BE\u4EE5\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u96BE\u4EE5\u6269\u5C55" aria-hidden="true">#</a> \u96BE\u4EE5\u6269\u5C55</h2><p>\u5B9E\u9645\u4E0A\u8FD9\u662F\u8FD0\u884C\u65F6\u7684\u968F\u673A\u9519\u8BEF + \u7F16\u8BD1\u65F6\u95F4\u65F6\u95F4\u6162 + \u96BE\u4EE5\u7406\u89E3\u7684\u4EE3\u7801\u7684\u7ED3\u679C\u3002</p><h2 id="references-ts" tabindex="-1"><a class="header-anchor" href="#references-ts" aria-hidden="true">#</a> <code>_references.ts</code></h2>`,28),l=e("\u5B83\u5E76\u6CA1\u6709\u88AB "),u=s("code",null,"tsconfig.json",-1),h=e(" \u652F\u6301\uFF1A"),k={href:"https://github.com/Microsoft/TypeScript/issues/2472#issuecomment-85330803",target:"_blank",rel:"noopener noreferrer"},v=e("Comment"),m=e("\uFF0C\u4F60\u9700\u8981\u624B\u52A8\u5BF9\u6587\u4EF6\u6392\u5E8F\u3002"),b=a(`<h2 id="\u4EE3\u7801\u91CD\u7528" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u91CD\u7528" aria-hidden="true">#</a> \u4EE3\u7801\u91CD\u7528</h2><p>\u5982\u679C\u4F60\u60F3\u5728\u53E6\u4E00\u4E2A\u9879\u76EE\u4E2D\u91CD\u7528\u5B58\u5728\u9690\u5F0F\u4F9D\u8D56\u5173\u7CFB\u7684\u4EE3\u7801\uFF0C\u5982\u679C\u6CA1\u6709\u9519\u8BEF\u63D0\u793A\uFF0C\u5F88\u96BE\u79FB\u690D\u5B83\u3002</p><h2 id="\u591A\u76EE\u6807" tabindex="-1"><a class="header-anchor" href="#\u591A\u76EE\u6807" aria-hidden="true">#</a> \u591A\u76EE\u6807</h2><p>\u5982\u679C\u4F60\u60F3\u5728 nodejs \u4E4B\u7C7B\u7684\u73AF\u5883\u4E0B\u91CD\u7528\u5728\u6D4F\u89C8\u5668\u4E2D\u7684\u4EE3\u7801\uFF08\u5982\uFF1Atesting APIS\uFF09\uFF0C\u4F60\u5C06\u4E0D\u5F97\u4E0D\u5C06\u5176\u8F6C\u6362\u5230\u65B0\u7684\u6A21\u5757\u7CFB\u7EDF\u6216\u8005\u4F7F\u7528\u4E0D\u597D\u7684 <code>hacks</code>\uFF0C\u8BA9 nodejs \u7684 <code>global</code> \u6210\u4E3A\u4F60\u7684\u65B0\u7684\u5168\u5C40\u53D8\u91CF\uFF08\u5982\uFF1A<code>window</code>\uFF09\u3002</p><h2 id="\u5355\u72EC\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u5355\u72EC\u7F16\u8BD1" aria-hidden="true">#</a> \u5355\u72EC\u7F16\u8BD1</h2><p>\u6587\u4EF6\u65E0\u6CD5\u88AB\u5355\u72EC\u7F16\u8BD1\uFF0C\u5982 <code>a.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">namespace</span> <span class="token constant">M</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> s <span class="token operator">=</span> t<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6839\u636E\u4E0D\u540C\u7684 <code>b.ts</code> \u7684\u5F62\u5F0F\uFF0C\u5B83\u5C06\u6709\u4E0D\u540C\u7684\u8F93\u51FA\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">namespace</span> <span class="token constant">M</span> <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">var</span> t <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> t <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u56E0\u6B64 <code>a.ts</code> \u4E0D\u80FD\u88AB\u5355\u72EC\u7F16\u8BD1;</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p><code>--out</code> \u505A\u7684\u662F\u4E00\u4E9B\u6784\u5EFA\u5DE5\u5177\u7684\u5DE5\u4F5C\uFF0C\u8FD9\u4E9B\u6784\u5EFA\u5DE5\u5177\u4E5F\u53EF\u4EE5\u53D7\u76CA\u4E8E\u5916\u90E8\u6A21\u5757\u6240\u63D0\u4F9B\u7684\u4F9D\u8D56\uFF0C\u56E0\u6B64\u5982\u679C\u4F60\u613F\u610F\uFF0C\u63A8\u8350\u4F60\u4F7F\u7528\u5916\u90E8\u6A21\u5757\uFF0C\u8BA9\u6784\u5EFA\u5DE5\u5177\u521B\u5EFA\u5355\u6587\u4EF6\u7684 <code>.js</code>\u3002</p>`,14);function f(g,_){const n=c("ExternalLinkIcon");return t(),d("div",null,[r,s("p",null,[l,u,h,s("a",k,[v,i(n)]),m]),b])}var x=o(p,[["render",f],["__file","outFileCaution.html.vue"]]);export{x as default};
