import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.064fc37a.js";var p="/notes/assets/css/cssInterview/f6ca20716ef8aa30.png";const e={},c=t(`<h1 id="\u7B2C2\u9898-\u5355\u884C\u6587\u672C\u600E\u4E48\u5B9E\u73B0\u4E24\u7AEF\u5BF9\u9F50" tabindex="-1"><a class="header-anchor" href="#\u7B2C2\u9898-\u5355\u884C\u6587\u672C\u600E\u4E48\u5B9E\u73B0\u4E24\u7AEF\u5BF9\u9F50" aria-hidden="true">#</a> \u7B2C2\u9898\uFF1A\u5355\u884C\u6587\u672C\u600E\u4E48\u5B9E\u73B0\u4E24\u7AEF\u5BF9\u9F50</h1><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><p>\u8BF4\u8D77\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u5927\u5BB6\u9996\u5148\u60F3\u5230\u7684\u53EF\u80FD\u662F <code>text-align: justify;</code>\uFF0C\u4F46justify\u5BF9\u6700\u540E\u4E00\u884C\u65E0\u6548\u3002</p><p>\u901A\u5E38\u8FD9\u6837\u7684\u6392\u7248\u5BF9\u6574\u6BB5\u6587\u5B57\u662F\u6781\u597D\u7684\uFF0C\u6211\u4EEC\u5E76\u4E0D\u5E0C\u671B\u5F53\u6700\u540E\u4E00\u884C\u53EA\u6709\u4E24\u4E2A\u5B57\u65F6\u4E5F\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u6BD5\u7ADF\u8FD9\u662F\u4E0D\u4FBF\u4E8E\u9605\u8BFB\u7684\uFF0C\u90A3\u4E48\u5F53\u6211\u4EEC\u53EA\u6709\u4E00\u884C\u6587\u672C\uFF0C\u4F46\u8981\u5B9E\u73B0\u5355\u884C\u6587\u672C\u4E24\u7AEF\u5BF9\u9F50\u600E\u4E48\u89E3\u51B3\uFF1F</p><h2 id="\u65B9\u6CD5\u4E00-\u6DFB\u52A0\u4E00\u884C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00-\u6DFB\u52A0\u4E00\u884C" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00\uFF1A\u6DFB\u52A0\u4E00\u884C</h2><p>\u6839\u636E<code>justify</code>\u5BF9\u6700\u540E\u4E00\u884C\u65E0\u6548\uFF0C\u6211\u4EEC\u53EF\u4EE5\u65B0\u589E\u4E00\u884C\uFF0C\u4F7F\u8BE5\u884C\u6587\u672C\u4E0D\u662F\u6700\u540E\u4E00\u884C\uFF0C\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>//html
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>{{item.label}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\uFF1A
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{item.value}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">//scss</span>
<span class="token selector">.item </span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token selector">.label </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
    <span class="token selector"><span class="token parent important">&amp;</span>::after </span><span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.value </span><span class="token punctuation">{</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u4E8C-text-align-last" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C-text-align-last" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C\uFF1A text-align-last</h2><p><code>text-align-last</code>\uFF0C\u8BE5\u5C5E\u6027\u5B9A\u4E49\u7684\u662F\u4E00\u6BB5\u6587\u672C\u4E2D\u6700\u540E\u4E00\u884C\u5728\u88AB\u5F3A\u5236\u6362\u884C\u4E4B\u524D\u7684\u5BF9\u9F50\u89C4\u5219\u3002</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">//scss</span>
<span class="token selector">.item </span><span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token selector">.label </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">min-width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span>
    <span class="token property">text-align-last</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.value </span><span class="token punctuation">{</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u7684\u6D4F\u89C8\u5668\u57FA\u672C\u90FD\u652F\u6301\u8BE5\u5C5E\u6027\u3002</p><p><img src="`+p+'" alt="demo"></p>',13),l=[c];function i(o,u){return s(),a("div",null,l)}var k=n(e,[["render",i],["__file","1.html.vue"]]);export{k as default};
