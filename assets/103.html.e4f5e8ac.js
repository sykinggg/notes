import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.92084e2a.js";const t={},c=e(`<h1 id="\u7B2C112\u9898-\u4F7F\u7528-settimeout-\u5B9E\u73B0-setinterval" tabindex="-1"><a class="header-anchor" href="#\u7B2C112\u9898-\u4F7F\u7528-settimeout-\u5B9E\u73B0-setinterval" aria-hidden="true">#</a> \u7B2C112\u9898\uFF1A\u4F7F\u7528 setTimeout \u5B9E\u73B0 setInterval</h1><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><p><code>setInterval</code> \u7684\u4F5C\u7528\u662F\u6BCF\u9694\u4E00\u6BB5\u6307\u5B9A\u65F6\u95F4\u6267\u884C\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6267\u884C\u4E0D\u662F\u771F\u7684\u5230\u4E86\u65F6\u95F4\u7ACB\u5373\u6267\u884C\uFF0C\u5B83\u771F\u6B63\u7684\u4F5C\u7528\u662F\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u5C06\u4E8B\u4EF6\u52A0\u5165\u4E8B\u4EF6\u961F\u5217\u4E2D\u53BB\uFF0C\u53EA\u6709\u5F53\u5F53\u524D\u7684\u6267\u884C\u6808\u4E3A\u7A7A\u7684\u65F6\u5019\uFF0C\u624D\u80FD\u53BB\u4ECE\u4E8B\u4EF6\u961F\u5217\u4E2D\u53D6\u51FA\u4E8B\u4EF6\u6267\u884C\u3002\u6240\u4EE5\u53EF\u80FD\u4F1A\u51FA\u73B0\u8FD9\u6837\u7684\u60C5\u51B5\uFF0C\u5C31\u662F\u5F53\u524D\u6267\u884C\u6808\u6267\u884C\u7684\u65F6\u95F4\u5F88\u957F\uFF0C\u5BFC\u81F4\u4E8B\u4EF6\u961F\u5217\u91CC\u8FB9\u79EF\u7D2F\u591A\u4E2A\u5B9A\u65F6\u5668\u52A0\u5165\u7684\u4E8B\u4EF6\uFF0C\u5F53\u6267\u884C\u6808\u7ED3\u675F\u7684\u65F6\u5019\uFF0C\u8FD9\u4E9B\u4E8B\u4EF6\u4F1A\u4F9D\u6B21\u6267\u884C\uFF0C\u56E0\u6B64\u5C31\u4E0D\u80FD\u5230\u95F4\u9694\u4E00\u6BB5\u65F6\u95F4\u6267\u884C\u7684\u6548\u679C\u3002</p><p>\u9488\u5BF9 <code>setInterval</code> \u7684\u8FD9\u4E2A\u7F3A\u70B9\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>setTimeout</code> \u9012\u5F52\u8C03\u7528\u6765\u6A21\u62DF <code>setInterval</code>\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u786E\u4FDD\u4E86\u53EA\u6709\u4E00\u4E2A\u4E8B\u4EF6\u7ED3\u675F\u4E86\uFF0C\u6211\u4EEC\u624D\u4F1A\u89E6\u53D1\u4E0B\u4E00\u4E2A\u5B9A\u65F6\u5668\u4E8B\u4EF6\uFF0C\u8FD9\u6837\u89E3\u51B3\u4E86 <code>setInterval</code> \u7684\u95EE\u9898\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u601D\u8DEF\u662F\u4F7F\u7528\u9012\u5F52\u51FD\u6570\uFF0C\u4E0D\u65AD\u5730\u53BB\u6267\u884C setTimeout \u4ECE\u800C\u8FBE\u5230 setInterval \u7684\u6548\u679C</span>

<span class="token keyword">function</span> <span class="token function">mySetInterval</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> timeout</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u63A7\u5236\u5668\uFF0C\u63A7\u5236\u5B9A\u65F6\u5668\u662F\u5426\u7EE7\u7EED\u6267\u884C</span>
  <span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u8BBE\u7F6E\u9012\u5F52\u51FD\u6570\uFF0C\u6A21\u62DF\u5B9A\u65F6\u5668\u6267\u884C\u3002</span>
  <span class="token keyword">function</span> <span class="token function">interval</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">.</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span>interval<span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u542F\u52A8\u5B9A\u65F6\u5668</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>interval<span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u8FD4\u56DE\u63A7\u5236\u5668</span>
  <span class="token keyword">return</span> timer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[c];function p(o,l){return s(),a("div",null,i)}var d=n(t,[["render",p],["__file","103.html.vue"]]);export{d as default};