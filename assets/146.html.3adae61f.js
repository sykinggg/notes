import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as p}from"./app.83201bd9.js";const t={},e=p(`<h1 id="\u7B2C155\u9898-bind-\u8FDE\u7EED\u8C03\u7528-this\u7684\u7ED1\u5B9A\u503C" tabindex="-1"><a class="header-anchor" href="#\u7B2C155\u9898-bind-\u8FDE\u7EED\u8C03\u7528-this\u7684\u7ED1\u5B9A\u503C" aria-hidden="true">#</a> \u7B2C155\u9898\uFF1Abind() \u8FDE\u7EED\u8C03\u7528\uFF0Cthis\u7684\u7ED1\u5B9A\u503C</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">bar</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">3</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> sed <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">4</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> func <span class="token operator">=</span> <span class="token function">bar</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>sed<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//?</span>
  
<span class="token keyword">var</span> fiv <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">5</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> func <span class="token operator">=</span> <span class="token function">bar</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>sed<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>fiv<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><p>\u7B54\u6848\u662F\uFF0C\u4E24\u6B21\u90FD\u4ECD\u5C06\u8F93\u51FA 3 \uFF0C\u800C\u975E\u671F\u5F85\u4E2D\u7684 4 \u548C 5 \u3002</p><p>\u539F\u56E0\u662F\uFF0C\u5728Javascript\u4E2D\uFF0C\u591A\u6B21 <code>bind()</code> \u662F\u65E0\u6548\u7684\u3002</p><p>\u66F4\u6DF1\u5C42\u6B21\u7684\u539F\u56E0\uFF0C <code>bind()</code> \u7684\u5B9E\u73B0\uFF0C\u76F8\u5F53\u4E8E\u4F7F\u7528\u51FD\u6570\u5728\u5185\u90E8\u5305\u4E86\u4E00\u4E2A <code>call / apply</code> \uFF0C\u7B2C\u4E8C\u6B21 <code>bind()</code> \u76F8\u5F53\u4E8E\u518D\u5305\u4F4F\u7B2C\u4E00\u6B21 <code>bind()</code> ,\u6545\u7B2C\u4E8C\u6B21\u4EE5\u540E\u7684 <code>bind</code> \u662F\u65E0\u6CD5\u751F\u6548\u7684\u3002</p>`,6),o=[e];function c(i,l){return s(),a("div",null,o)}var d=n(t,[["render",c],["__file","146.html.vue"]]);export{d as default};
