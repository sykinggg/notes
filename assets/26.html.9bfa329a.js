import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.594e1059.js";const t={},p=e(`<h1 id="\u7B2C26\u9898-\u4EE5\u4E0B\u4EE3\u7801\u7684\u8F93\u51FA\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u7B2C26\u9898-\u4EE5\u4E0B\u4EE3\u7801\u7684\u8F93\u51FA\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u7B2C26\u9898\uFF1A\u4EE5\u4E0B\u4EE3\u7801\u7684\u8F93\u51FA\u662F\u4EC0\u4E48</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;window&#39;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">sayName</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span><span class="token function-variable function">sayMyName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fn1 <span class="token operator">=</span> obj<span class="token punctuation">.</span>sayName
<span class="token keyword">const</span> fn2 <span class="token operator">=</span> obj<span class="token punctuation">.</span>sayMyName
<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
obj<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
obj<span class="token punctuation">.</span><span class="token function">sayMyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F9D\u6B21\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>window
obj
window
window
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(i,l){return s(),a("div",null,o)}var d=n(t,[["render",c],["__file","26.html.vue"]]);export{d as default};
