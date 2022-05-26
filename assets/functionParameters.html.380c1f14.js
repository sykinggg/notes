import{_ as n,o as s,c as a,a as e}from"./app.11072343.js";const t={},o=e(`<h1 id="\u51FD\u6570\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u53C2\u6570" aria-hidden="true">#</a> \u51FD\u6570\u53C2\u6570</h1><p>\u5982\u679C\u4F60\u6709\u4E00\u4E2A\u542B\u6709\u5F88\u591A\u53C2\u6570\u6216\u8005\u76F8\u540C\u7C7B\u578B\u53C2\u6570\u7684\u51FD\u6570\uFF0C\u90A3\u4E48\u4F60\u53EF\u80FD\u9700\u8981\u8003\u8651\u5C06\u51FD\u6570\u6539\u4E3A\u63A5\u6536\u5BF9\u8C61\u7684\u5F62\u5F0F\uFF1A</p><p>\u5982\u4E0B\u4E00\u4E2A\u51FD\u6570\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>flagA<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> flagB<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u51FD\u6570\u4E3B\u4F53</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u50CF\u8FD9\u6837\u7684\u51FD\u6570\uFF0C\u4F60\u53EF\u80FD\u4F1A\u5F88\u5BB9\u6613\u9519\u8BEF\u7684\u8C03\u7528\u5B83\uFF0C\u5982 <code>foo(flagB, flagA)</code>\uFF0C\u5E76\u4E14\u4F60\u5E76\u4E0D\u4F1A\u4ECE\u7F16\u8BD1\u5668\u5F97\u5230\u60F3\u8981\u7684\u5E2E\u52A9\u3002</p><p>\u4F60\u53EF\u4EE5\u5C06\u51FD\u6570\u53D8\u4E3A\u63A5\u6536\u5BF9\u8C61\u7684\u5F62\u5F0F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>config<span class="token operator">:</span> <span class="token punctuation">{</span> flagA<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> flagB<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> flagA<span class="token punctuation">,</span> flagB <span class="token punctuation">}</span> <span class="token operator">=</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\uFF0C\u51FD\u6570\u5C06\u4F1A\u88AB <code>foo({ flagA, flagB })</code> \u7684\u5F62\u5F0F\u8C03\u7528\uFF0C\u8FD9\u6837\u6709\u5229\u4E8E\u53D1\u73B0\u9519\u8BEF\u53CA\u4EE3\u7801\u5BA1\u67E5\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5982\u679C\u4F60\u7684\u51FD\u6570\u8DB3\u591F\u7B80\u5355\uFF0C\u5E76\u4E14\u4F60\u4E0D\u5E0C\u671B\u589E\u52A0\u4EE3\u7801\uFF0C\u5FFD\u7565\u8FD9\u4E2A\u5EFA\u8BAE\u3002</p></div>`,9),p=[o];function c(l,i){return s(),a("div",null,p)}var r=n(t,[["render",c],["__file","functionParameters.html.vue"]]);export{r as default};
