import{_ as n,o as a,c as e,b as t,a as c}from"./app.e9fd9ffa.js";const i={},p=c(`<h1 id="\u9009\u62E9\u5668\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5668\u5217\u8868" aria-hidden="true">#</a> \u9009\u62E9\u5668\u5217\u8868</h1><p>CSS<strong>\u9009\u62E9\u5668\u5217\u8868</strong>\uFF08<code>,</code>\uFF09\u9009\u62E9\u6240\u6709\u5339\u914D\u7684\u8282\u70B9\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Selects all matching elements */</span>
<span class="token selector">span,
div</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> red 2px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u51CF\u5C11\u6837\u5F0F\u8868\u7684\u5927\u5C0F\uFF0C\u53EF\u4EE5\u5C06\u9009\u62E9\u5668\u7EC4\u5408\u5728\u4EE5\u9017\u53F7\u5206\u9694\u7684\u5217\u8868\u4E2D\u3002</p><h1 id="\u53E5\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u53E5\u6CD5" aria-hidden="true">#</a> \u53E5\u6CD5</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>element, element, element { style properties }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h1><h2 id="\u5355\u7EBF\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5355\u7EBF\u5206\u7EC4" aria-hidden="true">#</a> \u5355\u7EBF\u5206\u7EC4</h2><p>\u4F7F\u7528\u9017\u53F7\u5206\u9694\u7684\u5217\u8868\u5C06\u9009\u62E9\u5668\u5206\u7EC4\u5728\u4E00\u884C\u4E2D\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">h1, h2, h3, h4, h5, h6</span> <span class="token punctuation">{</span> <span class="token property">font-family</span><span class="token punctuation">:</span> helvetica<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u591A\u7EBF\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u591A\u7EBF\u5206\u7EC4" aria-hidden="true">#</a> \u591A\u7EBF\u5206\u7EC4</h2><p>\u4F7F\u7528\u9017\u53F7\u5206\u9694\u7684\u5217\u8868\u5C06\u9009\u62E9\u5668\u5206\u4E3A\u591A\u884C\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">#main,
.content,
article</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9009\u62E9\u5668\u5217\u8868\u65E0\u6548" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5668\u5217\u8868\u65E0\u6548" aria-hidden="true">#</a> \u9009\u62E9\u5668\u5217\u8868\u65E0\u6548</h2><p>\u4F7F\u7528\u9009\u62E9\u5668\u5217\u8868\u7684\u4E0D\u5229\u4E4B\u5904\u5728\u4E8E\u4EE5\u4E0B\u5185\u5BB9\u4E0D\u7B49\u6548\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span> <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif <span class="token punctuation">}</span>
<span class="token selector">h2:maybe-unsupported</span> <span class="token punctuation">{</span> <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif <span class="token punctuation">}</span>
<span class="token selector">h3</span> <span class="token punctuation">{</span> <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">h1, h2:maybe-unsupported, h3</span> <span class="token punctuation">{</span> <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u662F\u56E0\u4E3A\u9009\u62E9\u5668\u5217\u8868\u4E2D\u5355\u4E2A\u4E0D\u53D7\u652F\u6301\u7684\u9009\u62E9\u5668\u4F7F\u6574\u4E2A\u89C4\u5219\u65E0\u6548\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>:is()</code>or <code>:where()</code>\u9009\u62E9\u5668\uFF0C\u5B83\u4EEC\u63A5\u53D7\u5BBD\u5BB9\u7684\u9009\u62E9\u5668\u5217\u8868\u3002\u8FD9\u5C06\u5FFD\u7565\u5217\u8868\u4E2D\u7684\u65E0\u6548\u9009\u62E9\u5668\uFF0C\u4F46\u63A5\u53D7\u6709\u6548\u7684\u9009\u62E9\u5668\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span> <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif <span class="token punctuation">}</span>
<span class="token selector">h2:maybe-unsupported</span> <span class="token punctuation">{</span> <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif <span class="token punctuation">}</span>
<span class="token selector">h3</span> <span class="token punctuation">{</span> <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">:is(h1, h2:maybe-unsupported, h3)</span> <span class="token punctuation">{</span> <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="\u6D4F\u89C8\u5668\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u517C\u5BB9\u6027" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u517C\u5BB9\u6027</h1>`,22),l=["src"];function o(s,r){return a(),e("div",null,[p,t("img",{src:s.$withBase("/assets/mozillaCss/1617674781(1).jpg"),alt:"demo"},null,8,l)])}var u=n(i,[["render",o],["__file","selectorList.html.vue"]]);export{u as default};
