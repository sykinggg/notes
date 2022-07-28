import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.83201bd9.js";const p={},t=e(`<h1 id="\u7B2C146\u9898-object-assign\u548C\u6269\u5C55\u8FD0\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C146\u9898-object-assign\u548C\u6269\u5C55\u8FD0\u7B97\u6CD5" aria-hidden="true">#</a> \u7B2C146\u9898\uFF1Aobject.assign\u548C\u6269\u5C55\u8FD0\u7B97\u6CD5</h1><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><ul><li>\u6269\u5C55\u8FD0\u7B97\u7B26</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> outObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inObj</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> newObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>outObj<span class="token punctuation">}</span>
newObj<span class="token punctuation">.</span>inObj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>outObj<span class="token punctuation">)</span> <span class="token comment">// {inObj: {a: 2, b: 2}}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Object.assign()</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> outObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inObj</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> newObj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> outObj<span class="token punctuation">)</span>
newObj<span class="token punctuation">.</span>inObj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>outObj<span class="token punctuation">)</span> <span class="token comment">// {inObj: {a: 2, b: 2}}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4E24\u8005\u90FD\u662F\u6D45\u62F7\u8D1D\u3002</p><p><code>Object.assign()</code>\u65B9\u6CD5\u63A5\u6536\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F5C\u4E3A\u76EE\u6807\u5BF9\u8C61\uFF0C\u540E\u9762\u7684\u6240\u6709\u53C2\u6570\u4F5C\u4E3A\u6E90\u5BF9\u8C61\u3002\u7136\u540E\u628A\u6240\u6709\u7684\u6E90\u5BF9\u8C61\u5408\u5E76\u5230\u76EE\u6807\u5BF9\u8C61\u4E2D\u3002\u5B83\u4F1A\u4FEE\u6539\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u56E0\u6B64\u4F1A\u89E6\u53D1 <code>ES6 setter</code>\u3002</p><p><code>\u6269\u5C55\u64CD\u4F5C\u7B26\uFF08\u2026\uFF09</code>\u4F7F\u7528\u5B83\u65F6\uFF0C\u6570\u7EC4\u6216\u5BF9\u8C61\u4E2D\u7684\u6BCF\u4E00\u4E2A\u503C\u90FD\u4F1A\u88AB\u62F7\u8D1D\u5230\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u6216\u5BF9\u8C61\u4E2D\u3002\u5B83\u4E0D\u590D\u5236\u7EE7\u627F\u7684\u5C5E\u6027\u6216\u7C7B\u7684\u5C5E\u6027\uFF0C\u4F46\u662F\u5B83\u4F1A\u590D\u5236<code>ES6\u7684 symbols \u5C5E\u6027</code>\u3002</p>`,9),o=[t];function c(l,i){return s(),a("div",null,o)}var d=n(p,[["render",c],["__file","137.html.vue"]]);export{d as default};