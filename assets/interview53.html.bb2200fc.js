import{_ as n,o as s,c as a,a as t}from"./app.013e756e.js";const e={},p=t(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="constructor\u548Cgetinitialstate" tabindex="-1"><a class="header-anchor" href="#constructor\u548Cgetinitialstate" aria-hidden="true">#</a> constructor\u548CgetInitialState</h1><ul><li><p>constructor</p><ul><li>\u7528\u4E8Eclass\u4E2D\u7684state\u521D\u59CB\u5316</li><li>\u53EA\u80FD\u7528\u4E8Ees6</li></ul></li><li><p>getInitialState</p><ul><li>\u7528\u4E8Ees5\u4E2D\u7684state\u521D\u59CB\u5316</li><li>\u7B97\u662F\u517C\u5BB9\u6027\u5199\u6CD5\u9700\u8981\u5F15\u7528createReactClass</li></ul></li></ul><h1 id="\u5F15\u5165\u672C\u5730\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u672C\u5730\u56FE\u7247" aria-hidden="true">#</a> \u5F15\u5165\u672C\u5730\u56FE\u7247</h1><h2 id="\u65B9\u5F0F\u4E00\u3001\u975E\u80CC\u666F\u56FE\u7247\u5F15\u5165\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E00\u3001\u975E\u80CC\u666F\u56FE\u7247\u5F15\u5165\u65B9\u5F0F" aria-hidden="true">#</a> \u65B9\u5F0F\u4E00\u3001\u975E\u80CC\u666F\u56FE\u7247\u5F15\u5165\u65B9\u5F0F</h2><ul><li>\u76F4\u63A5\u5728img\u6807\u7B7E\u5185\u90E8src\u4E2D\u4F7F\u7528</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;\u56FE\u7247\u8DEF\u5F84&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>import\u5BFC\u5165</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> imgSrc <span class="token keyword">from</span> <span class="token string">&#39;\u56FE\u7247\u8DEF\u5F84&#39;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>imgSrc<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u5F0F\u4E8C\u3001\u56FE\u7247\u4F5C\u4E3A\u80CC\u666F\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E8C\u3001\u56FE\u7247\u4F5C\u4E3A\u80CC\u666F\u5F15\u5165" aria-hidden="true">#</a> \u65B9\u5F0F\u4E8C\u3001\u56FE\u7247\u4F5C\u4E3A\u80CC\u666F\u5F15\u5165</h2><ul><li>render()\u65B9\u6CD5\u5185\u5B9A\u4E49\u4E3A\u5BF9\u8C61</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> bgGround <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">&#39;inline-block&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;40px&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;40px&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;\u56FE\u7247\u8DEF\u5F84&quot;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5728return\u4E2D\u4F7F\u7528</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>bgGround<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">xxxxx</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>import\u5F15\u5165</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> imgUrl <span class="token keyword">from</span> <span class="token string">&#39;\u56FE\u7247\u8DEF\u5F84&#39;</span>

<span class="token comment">// render()\u4E2D\u5B9A\u4E49\u4E3A\u5BF9\u8C61</span>

<span class="token keyword">const</span> bgGround <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">&#39;inline-block&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;40px&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;40px&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundImage</span><span class="token operator">:</span> <span class="token string">&#39;url(&#39;</span> <span class="token operator">+</span> imgUrl <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5728return\u4E2D\u4F7F\u7528</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>bgGround<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">xxxxx</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),i=[p];function l(o,c){return s(),a("div",null,i)}var u=n(e,[["render",l],["__file","interview53.html.vue"]]);export{u as default};
