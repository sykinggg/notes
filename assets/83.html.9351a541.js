import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.b4922828.js";const o={},p=e(`<h1 id="\u7B2C91\u9898-\u3010promise\u3011\u4E0B\u9762\u4EE3\u7801\u7684\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u7B2C91\u9898-\u3010promise\u3011\u4E0B\u9762\u4EE3\u7801\u7684\u8F93\u51FA" aria-hidden="true">#</a> \u7B2C91\u9898\uFF1A\u3010Promise\u3011\u4E0B\u9762\u4EE3\u7801\u7684\u8F93\u51FA</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> promise1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> promise2 <span class="token operator">=</span> promise1<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;error!!!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">,</span> promise1<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise2&#39;</span><span class="token punctuation">,</span> promise2<span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">,</span> promise1<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise2&#39;</span><span class="token punctuation">,</span> promise2<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FC7\u7A0B\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u7A0B\u5206\u6790" aria-hidden="true">#</a> \u8FC7\u7A0B\u5206\u6790</h2><ul><li><p>\u4ECE\u4E0A\u81F3\u4E0B\uFF0C\u5148\u6267\u884C\u7B2C\u4E00\u4E2A<code>new Promise</code>\u4E2D\u7684\u51FD\u6570\uFF0C\u78B0\u5230<code>setTimeout</code>\u5C06\u5B83\u52A0\u5165\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u5217\u8868</p></li><li><p>\u8DF3\u51FA<code>new Promise</code>\uFF0C\u78B0\u5230<code>promise1.then</code>\u8FD9\u4E2A\u5FAE\u4EFB\u52A1\uFF0C\u4F46\u5176\u72B6\u6001\u8FD8\u662F\u4E3A<code>pending</code>\uFF0C\u8FD9\u91CC\u7406\u89E3\u4E3A\u5148\u4E0D\u6267\u884C</p></li><li><p><code>promise2</code>\u662F\u4E00\u4E2A\u65B0\u7684\u72B6\u6001\u4E3A<code>pending</code>\u7684<code>Promise</code></p></li><li><p>\u6267\u884C\u540C\u6B65\u4EE3\u7801<code>console.log(&#39;promise1&#39;)</code>\uFF0C\u4E14\u6253\u5370\u51FA\u7684<code>promise1</code>\u7684\u72B6\u6001\u4E3A<code>pending</code></p></li><li><p>\u6267\u884C\u540C\u6B65\u4EE3\u7801<code>console.log(&#39;promise2&#39;)</code>\uFF0C\u4E14\u6253\u5370\u51FA\u7684<code>promise2</code>\u7684\u72B6\u6001\u4E3A<code>pending</code></p></li><li><p>\u78B0\u5230\u7B2C\u4E8C\u4E2A\u5B9A\u65F6\u5668\uFF0C\u5C06\u5176\u653E\u5165\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u5217\u8868</p></li><li><p>\u7B2C\u4E00\u8F6E\u5B8F\u4EFB\u52A1\u6267\u884C\u7ED3\u675F\uFF0C\u5E76\u4E14\u6CA1\u6709\u5FAE\u4EFB\u52A1\u9700\u8981\u6267\u884C\uFF0C\u56E0\u6B64\u6267\u884C\u7B2C\u4E8C\u8F6E\u5B8F\u4EFB\u52A1</p></li><li><p>\u5148\u6267\u884C\u7B2C\u4E00\u4E2A\u5B9A\u65F6\u5668\u91CC\u7684\u5185\u5BB9\uFF0C\u5C06<code>promise1</code>\u7684\u72B6\u6001\u6539\u4E3A<code>resolved</code>\u4E14\u4FDD\u5B58\u7ED3\u679C\u5E76\u5C06\u4E4B\u524D\u7684<code>promise1.then</code>\u63A8\u5165\u5FAE\u4EFB\u52A1\u961F\u5217</p></li><li><p>\u8BE5\u5B9A\u65F6\u5668\u4E2D\u6CA1\u6709\u5176\u5B83\u7684\u540C\u6B65\u4EE3\u7801\u53EF\u6267\u884C\uFF0C\u56E0\u6B64\u6267\u884C\u672C\u8F6E\u7684\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u4E5F\u5C31\u662F<code>promise1.then</code>\uFF0C\u5B83\u629B\u51FA\u4E86\u4E00\u4E2A\u9519\u8BEF\uFF0C\u4E14\u5C06<code>promise2</code>\u7684\u72B6\u6001\u8BBE\u7F6E\u4E3A\u4E86<code>rejected</code></p></li><li><p>\u7B2C\u4E00\u4E2A\u5B9A\u65F6\u5668\u6267\u884C\u5B8C\u6BD5\uFF0C\u5F00\u59CB\u6267\u884C\u7B2C\u4E8C\u4E2A\u5B9A\u65F6\u5668\u4E2D\u7684\u5185\u5BB9</p></li><li><p>\u6253\u5370\u51FA<code>&#39;promise1&#39;</code>\uFF0C\u4E14\u6B64\u65F6<code>promise1</code>\u7684\u72B6\u6001\u4E3A<code>resolved</code></p></li><li><p>\u6253\u5370\u51FA<code>&#39;promise2&#39;</code>\uFF0C\u4E14\u6B64\u65F6<code>promise2</code>\u7684\u72B6\u6001\u4E3A<code>rejected</code></p></li></ul><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;promise1&#39; Promise{&lt;pending&gt;}
&#39;promise2&#39; Promise{&lt;pending&gt;}
test5.html:102 Uncaught (in promise) Error: error!!! at test.html:102
&#39;promise1&#39; Promise{&lt;resolved&gt;: &quot;success&quot;}
&#39;promise2&#39; Promise{&lt;rejected&gt;: Error: error!!!}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[p];function c(i,l){return s(),a("div",null,t)}var d=n(o,[["render",c],["__file","83.html.vue"]]);export{d as default};
