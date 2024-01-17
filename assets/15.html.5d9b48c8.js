import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.92084e2a.js";const p={},e=t(`<h1 id="\u7B2C29\u9898-\u4F7F\u7528\u539F\u751Fjs\u5B9E\u73B0\u4EE5\u4E0B\u6548\u679C-\u70B9\u51FB\u5BB9\u5668\u5185\u7684\u56FE\u6807-\u56FE\u6807\u8FB9\u6846\u53D8\u6210border-1px-solid-red-\u70B9\u51FB\u7A7A\u767D\u5904\u91CD\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7B2C29\u9898-\u4F7F\u7528\u539F\u751Fjs\u5B9E\u73B0\u4EE5\u4E0B\u6548\u679C-\u70B9\u51FB\u5BB9\u5668\u5185\u7684\u56FE\u6807-\u56FE\u6807\u8FB9\u6846\u53D8\u6210border-1px-solid-red-\u70B9\u51FB\u7A7A\u767D\u5904\u91CD\u7F6E" aria-hidden="true">#</a> \u7B2C29\u9898\uFF1A\u4F7F\u7528\u539F\u751Fjs\u5B9E\u73B0\u4EE5\u4E0B\u6548\u679C\uFF1A\u70B9\u51FB\u5BB9\u5668\u5185\u7684\u56FE\u6807\uFF0C\u56FE\u6807\u8FB9\u6846\u53D8\u6210border:1px solid red\uFF0C\u70B9\u51FB\u7A7A\u767D\u5904\u91CD\u7F6E</h1><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">const</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">isIcon</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> target<span class="token punctuation">.</span>className<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;icon&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

box<span class="token punctuation">.</span><span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> target <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isIcon</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   target<span class="token punctuation">.</span>style<span class="token punctuation">.</span>border <span class="token operator">=</span> <span class="token string">&#39;1px solid red&#39;</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> doc <span class="token operator">=</span> document<span class="token punctuation">;</span>

doc<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> children <span class="token operator">=</span> box<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
 <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isIcon</span><span class="token punctuation">(</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>border <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(i,l){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","15.html.vue"]]);export{k as default};