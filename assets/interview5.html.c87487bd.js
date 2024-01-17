import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.92084e2a.js";const p={},e=t(`<h1 id="\u7B2C5\u5929-\u5199\u4E00\u4E2A\u628A\u5B57\u7B26\u4E32\u5927\u5C0F\u5199\u5207\u6362\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C5\u5929-\u5199\u4E00\u4E2A\u628A\u5B57\u7B26\u4E32\u5927\u5C0F\u5199\u5207\u6362\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u7B2C5\u5929 \u5199\u4E00\u4E2A\u628A\u5B57\u7B26\u4E32\u5927\u5C0F\u5199\u5207\u6362\u7684\u65B9\u6CD5</h1><hr><h2 id="\u601D\u8DEF\u4E00" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E00" aria-hidden="true">#</a> \u601D\u8DEF\u4E00</h2><p>\u5B57\u6BCD\u5927\u5C0F\u5199\u5728Unicode \u4E2D\u76F8\u5DEE32\u4F4D\u6765\u8BA1\u7B97</p><h3 id="\u89E3\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E00" aria-hidden="true">#</a> \u89E3\u6CD5\u4E00</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">caseConvert</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">s</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> code <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">&lt;</span> <span class="token number">65</span> <span class="token operator">||</span> code <span class="token operator">&gt;</span> <span class="token number">122</span> <span class="token operator">||</span> code <span class="token operator">&gt;</span> <span class="token number">90</span> <span class="token operator">&amp;&amp;</span> code <span class="token operator">&lt;</span> <span class="token number">97</span><span class="token punctuation">)</span> <span class="token keyword">return</span> s<span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">&lt;=</span> <span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>code <span class="token operator">+</span> <span class="token number">32</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>code <span class="token operator">-</span> <span class="token number">32</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">caseConvert</span><span class="token punctuation">(</span><span class="token string">&#39;AbCdE&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// aBcDe </span>

<span class="token keyword">function</span> <span class="token function">caseConvertEasy</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">s</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">caseConvertEasy</span><span class="token punctuation">(</span><span class="token string">&#39;AbCxYz&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// aBcXyZ </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u601D\u8DEF\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E8C" aria-hidden="true">#</a> \u601D\u8DEF\u4E8C</h2><p>\u6B63\u5219\u5224\u65AD</p><h3 id="\u89E3\u6CD5\u4E00-1" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E00-1" aria-hidden="true">#</a> \u89E3\u6CD5\u4E00</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">caseConvert</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([a-z]*)([A-Z]*)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>s1<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>s2<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">caseConvert</span><span class="token punctuation">(</span><span class="token string">&#39;AsA33322A2aa&#39;</span><span class="token punctuation">)</span> <span class="token comment">//aSa33322a2AA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[e];function c(i,u){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","interview5.html.vue"]]);export{k as default};