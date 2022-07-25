import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.b4922828.js";const e={},p=t(`<h1 id="\u7B2C89\u9898-\u3010promise\u3011\u4E0B\u9762\u4EE3\u7801\u7684\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u7B2C89\u9898-\u3010promise\u3011\u4E0B\u9762\u4EE3\u7801\u7684\u8F93\u51FA" aria-hidden="true">#</a> \u7B2C89\u9898\uFF1A\u3010Promise\u3011\u4E0B\u9762\u4EE3\u7801\u7684\u8F93\u51FA</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;success1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;success2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
promise
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;then: &quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;catch: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790" aria-hidden="true">#</a> \u89E3\u6790</h2><p>\u6784\u9020\u51FD\u6570\u4E2D\u7684 <code>resolve</code> \u6216 <code>reject</code> \u53EA\u6709\u7B2C\u4E00\u6B21\u6267\u884C\u6709\u6548\uFF0C\u591A\u6B21\u8C03\u7528\u6CA1\u6709\u4EFB\u4F55\u4F5C\u7528 \uFF0C<code>Promise</code>\u7684\u72B6\u6001\u4E00\u7ECF\u6539\u53D8\u5C31\u4E0D\u80FD\u518D\u6539\u53D8\u3002</p><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;then: success1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),o=[p];function c(i,u){return s(),a("div",null,o)}var d=n(e,[["render",c],["__file","81.html.vue"]]);export{d as default};
