import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as n,a as t}from"./app.064fc37a.js";const p={},e=t(`<h1 id="\u7B2C25\u9898-js\u548Ccss\u662F\u5982\u4F55\u5F71\u54CDdom\u6811\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u7B2C25\u9898-js\u548Ccss\u662F\u5982\u4F55\u5F71\u54CDdom\u6811\u6784\u5EFA" aria-hidden="true">#</a> \u7B2C25\u9898\uFF1Ajs\u548Ccss\u662F\u5982\u4F55\u5F71\u54CDDOM\u6811\u6784\u5EFA</h1><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><p>\u5148\u505A\u4E2A\u603B\u7ED3\uFF0C\u7136\u540E\u518D\u8FDB\u884C\u5177\u4F53\u7684\u5206\u6790\uFF1A</p><p>CSS\u4E0D\u4F1A\u963B\u585EDOM\u7684\u89E3\u6790\uFF0C\u4F46\u662F\u4F1A\u5F71\u54CDJAVAScript\u7684\u8FD0\u884C\uFF0CjavaSscript\u4F1A\u963B\u6B62DOM\u6811\u7684\u89E3\u6790\uFF0C\u6700\u7EC8css\uFF08CSSOM\uFF09\u4F1A\u5F71\u54CDDOM\u6811\u7684\u6E32\u67D3\uFF0C\u4E5F\u53EF\u4EE5\u8BF4\u6700\u7EC8\u4F1A\u5F71\u54CD\u6E32\u67D3\u6811\u7684\u751F\u6210\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5148\u770Bjavascript\u5BF9DOM\u6811\u6784\u5EFA\u548C\u6E32\u67D3\u662F\u5982\u4F55\u9020\u6210\u5F71\u54CD\u7684\uFF0C\u5206\u6210\u4E09\u79CD\u7C7B\u578B\u6765\u8BB2\u89E3\uFF1A</p><h2 id="javascript\u811A\u672C\u5728html\u9875\u9762\u4E2D" tabindex="-1"><a class="header-anchor" href="#javascript\u811A\u672C\u5728html\u9875\u9762\u4E2D" aria-hidden="true">#</a> JavaScript\u811A\u672C\u5728html\u9875\u9762\u4E2D</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">let</span> div1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      div1<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;time.geekbang&#39;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E24\u6BB5div\u4E2D\u95F4\u63D2\u5165\u4E00\u6BB5JavaScript\u811A\u672C\uFF0C\u8FD9\u6BB5\u811A\u672C\u7684\u89E3\u6790\u8FC7\u7A0B\u5C31\u6709\u70B9\u4E0D\u4E00\u6837\u4E86\u3002</p><p>\u5F53\u89E3\u6790\u5230script\u811A\u672C\u6807\u7B7E\u65F6\uFF0CHTML\u89E3\u6790\u5668\u6682\u505C\u5DE5\u4F5C\uFF0Cjavascript\u5F15\u64CE\u4ECB\u5165\uFF0C\u5E76\u6267\u884Cscript\u6807\u7B7E\u4E2D\u7684\u8FD9\u6BB5\u811A\u672C\u3002</p><p>\u56E0\u4E3A\u8FD9\u6BB5javascript\u811A\u672C\u4FEE\u6539\u4E86DOM\u4E2D\u7B2C\u4E00\u4E2Adiv\u4E2D\u7684\u5185\u5BB9\uFF0C\u6240\u4EE5\u6267\u884C\u8FD9\u6BB5\u811A\u672C\u4E4B\u540E\uFF0Cdiv\u8282\u70B9\u5185\u5BB9\u5DF2\u7ECF\u4FEE\u6539\u4E3A<code>time.geekbang</code>\u4E86\u3002\u811A\u672C\u6267\u884C\u5B8C\u6210\u4E4B\u540E\uFF0CHTML\u89E3\u6790\u5668\u56DE\u590D\u89E3\u6790\u8FC7\u7A0B\uFF0C\u7EE7\u7EED\u89E3\u6790\u540E\u7EED\u7684\u5185\u5BB9\uFF0C\u76F4\u81F3\u751F\u6210\u6700\u7EC8\u7684DOM\u3002</p><h2 id="html\u9875\u9762\u4E2D\u5F15\u5165javascript\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#html\u9875\u9762\u4E2D\u5F15\u5165javascript\u6587\u4EF6" aria-hidden="true">#</a> html\u9875\u9762\u4E2D\u5F15\u5165javaScript\u6587\u4EF6</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//foo.js</span>
<span class="token keyword">let</span> div1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
div1<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;time.geekbang&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>foo.js<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u7684\u529F\u80FD\u8FD8\u662F\u548C\u524D\u9762\u90A3\u6BB5\u4EE3\u7801\u662F\u4E00\u6837\u7684\uFF0C\u53EA\u662F\u628A\u5185\u5D4CJavaScript\u811A\u672C\u4FEE\u6539\u6210\u4E86\u901A\u8FC7javaScript\u6587\u4EF6\u52A0\u8F7D\u3002</p><p>\u5176\u6574\u4E2A\u6267\u884C\u6D41\u7A0B\u8FD8\u662F\u4E00\u6837\u7684\uFF0C\u6267\u884C\u5230JAVAScript\u6807\u7B7E\u65F6\uFF0C\u6682\u505C\u6574\u4E2ADOM\u7684\u89E3\u6790\uFF0C\u6267\u884Cjavascript\u4EE3\u7801\uFF0C\u4E0D\u8FC7\u8FD9\u91CC\u6267\u884Cjavascript\u65F6\uFF0C\u9700\u8981\u73B0\u5728\u5728\u8FD9\u6BB5\u4EE3\u7801\u3002\u8FD9\u91CC\u9700\u8981\u91CD\u70B9\u5173\u6CE8\u4E0B\u8F7D\u73AF\u5883\uFF0C\u56E0\u4E3Ajavascript\u6587\u4EF6\u7684\u4E0B\u8F7D\u8FC7\u7A0B\u4F1A\u963B\u585EDOM\u89E3\u6790\uFF0C\u800C\u901A\u5E38\u4E0B\u8F7D\u53C8\u662F\u975E\u5E38\u8017\u65F6\u7684\uFF0C\u4F1A\u53D7\u5230\u7F51\u7EDC\u73AF\u5883\u3001javascript\u6587\u4EF6\u5927\u5C0F\u7B49\u56E0\u7D20\u7684\u5F71\u54CD\u3002</p><ul><li>\u4F18\u5316\u673A\u5236\uFF1A</li></ul><p>\u8C37\u6B4C\u6D4F\u89C8\u5668\u505A\u4E86\u5F88\u591A\u4F18\u5316\uFF0C\u5176\u4E2D\u4E00\u4E2A\u4E3B\u8981\u7684\u4F18\u5316\u5C31\u662F\u9884\u89E3\u6790\u64CD\u4F5C\u3002\u5F53\u6E32\u67D3\u5F15\u64CE\u6536\u5230\u5B57\u8282\u6D41\u4E4B\u540E\uFF0C\u4F1A\u5F00\u542F\u4E00\u4E2A\u9884\u89E3\u6790\u7EBF\u7A0B\uFF0C\u7528\u6765\u5206\u6790HTML\u6587\u4EF6\u4E2D\u5305\u542B\u7684JavaScript\u3001CSS\u7B49\u76F8\u5173\u6587\u4EF6\uFF0C\u89E3\u6790\u5230\u76F8\u5173\u6587\u4EF6\u4E4B\u540E\uFF0C\u4F1A\u5F00\u542F\u4E00\u4E2A\u9884\u89E3\u6790\u7EBF\u7A0B\uFF0C\u7528\u6765\u5206\u6790HTML\u6587\u4EF6\u4E2D\u5305\u542B\u7684javascprit\u3001css\u7B49\u76F8\u5173\u6587\u4EF6\u3001\u89E3\u6790\u5230\u76F8\u5173\u6587\u4EF6\u4E4B\u540E\uFF0C\u9884\u89E3\u6790\u7EBF\u7A0B\u4F1A\u63D0\u524D\u4E0B\u8F7D\u8FD9\u4E9B\u6587\u4EF6\u3002</p><p>\u518D\u56DE\u5230 DOM \u89E3\u6790\u4E0A\uFF0C\u6211\u4EEC\u77E5\u9053\u5F15\u5165 JavaScript \u7EBF\u7A0B\u4F1A\u963B\u585E DOM\uFF0C\u4E0D\u8FC7\u4E5F\u6709\u4E00\u4E9B\u76F8\u5173\u7684\u7B56\u7565\u6765\u89C4\u907F\uFF0C\u6BD4\u5982\u4F7F\u7528 CDN \u6765\u52A0\u901F JavaScript \u6587\u4EF6\u7684\u52A0\u8F7D\uFF0C\u538B\u7F29 JavaScript \u6587\u4EF6\u7684\u4F53\u79EF\u3002</p><p>\u53E6\u5916\uFF0C\u5982\u679C JavaScript \u6587\u4EF6\u4E2D\u6CA1\u6709\u64CD\u4F5C DOM \u76F8\u5173\u4EE3\u7801\uFF0C\u5C31\u53EF\u4EE5\u5C06\u8BE5 JavaScript \u811A\u672C\u8BBE\u7F6E\u4E3A\u5F02\u6B65\u52A0\u8F7D\uFF0C\u901A\u8FC7 async \u6216 defer \u6765\u6807\u8BB0\u4EE3\u7801\uFF0C\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">async</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>foo.js<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>foo.js<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>async\u548Cdefer\u533A\u522B\uFF1A</p></blockquote><ul><li><p><strong>async</strong>\uFF1A\u811A\u672C\u5E76\u884C\u52A0\u8F7D\uFF0C\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\u7ACB\u5373\u6267\u884C\uFF0C\u6267\u884C\u65F6\u673A\u4E0D\u786E\u5B9A\uFF0C\u4ECD\u6709\u53EF\u80FD\u963B\u585E<code>HTML</code>\u89E3\u6790\uFF0C\u6267\u884C\u65F6\u673A\u5728<code>load</code>\u4E8B\u4EF6\u6D3E\u53D1\u4E4B\u524D\u3002</p></li><li><p><strong>defer</strong>\uFF1A\u811A\u672C\u5E76\u884C\u52A0\u8F7D\uFF0C\u7B49\u5F85HTML\u89E3\u6790\u5B8C\u6210\u4E4B\u540E\uFF0C\u6309\u7167\u52A0\u8F7D\u987A\u5E8F\u6267\u884C\u811A\u672C\uFF0C\u6267\u884C\u65F6\u673A<code>DOMContentLoaded</code>\u4E8B\u4EF6\u6D3E\u53D1\u4E4B\u524D\u3002</p></li></ul><h2 id="html\u9875\u9762\u4E2D\u6709css\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#html\u9875\u9762\u4E2D\u6709css\u6837\u5F0F" aria-hidden="true">#</a> html\u9875\u9762\u4E2D\u6709css\u6837\u5F0F</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">//theme.css
div</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>blue<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>theme.css<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">let</span> div1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      div1<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;time.geekbang&#39;</span> <span class="token comment">// \u9700\u8981 DOM</span>
      div1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span> <span class="token comment">// \u9700\u8981 CSSOM</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u793A\u4F8B\u4E2D\uFF0C<code>JavaScript</code> \u4EE3\u7801\u51FA\u73B0\u4E86 <code>div1.style.color = \u2018red\u2019</code> \u7684\u8BED\u53E5\uFF0C\u5B83\u662F\u7528\u6765\u64CD\u7EB5 CSSOM \u7684\uFF0C\u6240\u4EE5\u5728\u6267\u884C <code>JavaScript</code> \u4E4B\u524D\uFF0C\u9700\u8981\u5148\u89E3\u6790 <code>JavaScript</code> \u8BED\u53E5\u4E4B\u4E0A\u6240\u6709\u7684CSS \u6837\u5F0F\u3002\u6240\u4EE5\u5982\u679C\u4EE3\u7801\u91CC\u5F15\u7528\u4E86\u5916\u90E8\u7684 CSS \u6587\u4EF6\uFF0C\u90A3\u4E48\u5728\u6267\u884C <code>JavaScript</code> \u4E4B\u524D\uFF0C\u8FD8\u9700\u8981\u7B49\u5F85\u5916\u90E8\u7684 CSS \u6587\u4EF6\u4E0B\u8F7D\u5B8C\u6210\uFF0C\u5E76\u89E3\u6790\u751F\u6210 CSSOM \u5BF9\u8C61\u4E4B\u540E\uFF0C\u624D\u80FD\u6267\u884C <code>JavaScript</code> \u811A\u672C\u3002</p><p>\u800C <code>JavaScript</code> \u5F15\u64CE\u5728\u89E3\u6790 <code>JavaScript</code> \u4E4B\u524D\uFF0C\u662F\u4E0D\u77E5\u9053 <code>JavaScript</code> \u662F\u5426\u64CD\u7EB5\u4E86 CSSOM\u7684\uFF0C\u6240\u4EE5\u6E32\u67D3\u5F15\u64CE\u5728\u9047\u5230 <code>JavaScript</code> \u811A\u672C\u65F6\uFF0C\u4E0D\u7BA1\u8BE5\u811A\u672C\u662F\u5426\u64CD\u7EB5\u4E86 CSSOM\uFF0C\u90FD\u4F1A\u6267\u884CCSS \u6587\u4EF6\u4E0B\u8F7D\uFF0C\u89E3\u6790\u64CD\u4F5C\uFF0C\u518D\u6267\u884C <code>JavaScript</code> \u811A\u672C\u3002\u6240\u4EE5\u8BF4 <code>JavaScript</code> \u811A\u672C\u662F\u4F9D\u8D56\u6837\u5F0F\u8868\u7684\uFF0C\u8FD9\u53C8\u591A\u4E86\u4E00\u4E2A\u963B\u585E\u8FC7\u7A0B\u3002</p><blockquote><p>\u603B\u7ED3\uFF1A\u901A\u8FC7\u4E0A\u9762\u4E09\u70B9\u7684\u5206\u6790\uFF0C\u6211\u4EEC\u77E5\u9053\u4E86 JavaScript \u4F1A\u963B\u585E DOM \u751F\u6210\uFF0C\u800C\u6837\u5F0F\u6587\u4EF6\u53C8\u4F1A\u963B\u585Ejs\u7684\u6267\u884C\u3002</p></blockquote>`,28),c=[e];function o(l,i){return a(),n("div",null,c)}var r=s(p,[["render",o],["__file","13.html.vue"]]);export{r as default};
