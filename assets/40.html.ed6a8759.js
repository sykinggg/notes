import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.83201bd9.js";const p={},e=t(`<h1 id="\u7B2C40\u9898-flexible-js\u5B9E\u73B0\u79FB\u52A8\u7AEF\u9002\u914D\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u7B2C40\u9898-flexible-js\u5B9E\u73B0\u79FB\u52A8\u7AEF\u9002\u914D\u7684\u539F\u7406" aria-hidden="true">#</a> \u7B2C40\u9898\uFF1Aflexible.js\u5B9E\u73B0\u79FB\u52A8\u7AEF\u9002\u914D\u7684\u539F\u7406</h1><blockquote><p><code>flexible.js</code> \u5B98\u65B9\u5DF2\u4E0D\u518D\u7EF4\u62A4\uFF0C\u76EE\u524D\u63A8\u884C <code>vw</code> \u9002\u914D\u65B9\u6848\uFF0C\u672C\u7B54\u6848\u53EA\u662F\u4E3A\u4E86\u5206\u6790\u5B83\u7684\u539F\u7406\u3002</p></blockquote><p><code>flexible.js</code>\u5B58\u5728\u7684\u76EE\u7684\uFF0C\u662F\u4E3A\u4E86\u8BA9\u7F51\u9875\u5728\u5404\u7EC8\u7AEF\u4E0A\u7684\u5C55\u793A\u6548\u679C\u5C31\u50CF\u7F29\u653E\u8BBE\u8BA1\u7A3F\u56FE\u7247\u4E00\u6837\uFF0C\u5728\u4E0D\u540C\u5C4F\u5E55\u4E0A\u7B49\u6BD4\u7F29\u653E\uFF0C\u6BCF\u4E00\u4E2A\u5143\u7D20\u4E0E\u6574\u4F53\u6BD4\u4F8B\u4FDD\u6301\u4E0D\u53D8\uFF0C\u771F\u5B9E\u8FD8\u539F\u8BBE\u8BA1\u7A3F\u3002</p><h2 id="\u57FA\u672C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u539F\u7406" aria-hidden="true">#</a> \u57FA\u672C\u539F\u7406</h2><p>\u8BBE\u9875\u9762\u5BBD\u5EA6\u4E3A<code>P\uFF08\u5355\u4F4Dpx\uFF09</code></p><p>\u8BBE\u8BA1\u7A3F\u5BBD\u5EA6\u4E3A<code>750px</code></p><p>\u8BBE<code>html</code>\u57FA\u51C6\u503C\u4E3A<code>X\uFF08\u5355\u4F4Dpx\uFF09</code></p><p>\u9996\u5148\u5C06\u9875\u9762\u5206\u4E3A100\u4EFD\uFF0C\u4EFD\u7684\u5355\u4F4D\u4E3AF</p><p>\u8BBE1F\u7684\u50CF\u7D20\u503C\u4E3AA\uFF08\u5355\u4F4Dpx/F\uFF09</p><p>\u90A3\u4E48\uFF1A</p><p>P = 100F * A</p><p>A = P/100F</p><p>\u5F53P\u4E3A750\u65F6\uFF0CA=7.5px/F\uFF0C\u5373\u4E00\u4EFD\u4E3A7.5px</p><p>\u6709\u6CA1\u6709\u611F\u89C9\u8FD9\u4E2AA\u6709\u70B9\u719F\u6089\uFF0C\u6CA1\u9519\u5B83\u5C31\u662FX\uFF0C\u4E0A\u9762\u4EFD\u7684\u5355\u4F4DF\u5176\u5B9E\u5C31\u662Frem\u3002</p><p>\uFF08<code>html font-size</code>\u7684\u57FA\u51C6\u503C\u5355\u4F4D\u867D\u7136\u5199\u4E3Apx\uFF0C\u4F46\u5176\u5B9E\u662Fpx/F\uFF0C\u8FD9\u70B9\u4F60\u77E5\u9053\u5C31\u53EF\u4EE5\u4E86\uFF09</p><p><code>rem</code>\u7684\u539F\u7406\u5C31\u662F\u4EFD\uFF0C\u6211\u4EEC\u6839\u636E\u8BBE\u8BA1\u7A3F\u5F97\u5230\u5143\u7D20\u7684\u4EFD\uFF0C\u5199\u5230\u4EE3\u7801\u4E2D\u7684\u4E5F\u662F\u4EFD\uFF0C\u73B0\u5728\u53EA\u8981\u52A8\u6001\u6539\u53D8<code>html</code>\u7684\u57FA\u51C6\u503C\uFF0C\u5C31\u80FD\u591F\u5728\u4E0D\u540C\u5C4F\u5E55\u4E0B\u9002\u914D\uFF0C\u4ECE\u800C\u8FD8\u539F\u8BBE\u8BA1\u7A3F\u5C3A\u5BF8\u4E86\u3002</p><p>\u6240\u4EE5<code>flexible.js</code>\u7684\u539F\u7406\u4E3B\u8981\u662F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> html<span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token constant">P</span><span class="token operator">/</span><span class="token number">100</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53\u7136\u9488\u5BF9\u9AD8\u6E05\u5C4F\uFF0C\u5B83\u8FD8\u4F1A\u8BBE\u7F6E\u201C<code>viewport scale</code>\u201D\uFF0C\u4EE5\u7F29\u653E\u9875\u9762\uFF0C\u89E3\u51B3\u7C7B\u4F3C\u9AD8\u6E05\u5C4F\u4E0B\u65E0\u6CD5\u5B9E\u73B01px\u8FB9\u6846\u7B49\u95EE\u9898\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u57FA\u51C6\u503C\u5176\u5B9E\u662F\u4E2A\u52A8\u6001\u503C\uFF0C\u53EA\u662F\u5728\u5199\u4EE3\u7801\u65F6\uFF0C\u6211\u4EEC\u662F\u6309\u7167\u8BBE\u8BA1\u7A3F\u5BBD\u5EA6\u8BA1\u7B97\u7684\u57FA\u51C6\u503C\u5199\u7684<code>rem</code>\uFF0C\u5373\u4EE5\u8BBE\u8BA1\u7A3F\u4E3A\u6807\u51C6\u8FDB\u884C\u5C4F\u5E55\u9002\u914D\u7684\uFF08\u5C06\u8BBE\u8BA1\u7A3F\u7528\u4EE3\u7801\u8FD8\u539F\u6210UI\u754C\u9762\uFF09\uFF0C\u4F46\u5728\u5B9E\u9645\u8FD0\u884C\u65F6\uFF0C\u9875\u9762\u5BBD\u5EA6\u662F\u52A8\u6001\u7684\uFF0C\u6240\u4EE5\u57FA\u51C6\u503C\u4E5F\u662F\u52A8\u6001\u7684\u54E6\u3002</p><h2 id="\u6E90\u7801\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a> \u6E90\u7801\u89E3\u6790</h2><p><code>flexible.js</code> \u7684\u6E90\u7801\u5E76\u4E0D\u591A\uFF0C\u603B\u5171\u4E0D\u5230 <code>50</code> \u884C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9996\u5148\u662F\u4E00\u4E2A\u7ACB\u5373\u6267\u884C\u51FD\u6570\uFF0C\u6267\u884C\u65F6\u4F20\u5165\u7684\u53C2\u6570\u662Fwindow\u548Cdocument</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">flexible</span> <span class="token punctuation">(</span><span class="token parameter">window<span class="token punctuation">,</span> document</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> docEl <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement <span class="token comment">// \u8FD4\u56DE\u6587\u6863\u7684root\u5143\u7D20</span>
  <span class="token keyword">var</span> dpr <span class="token operator">=</span> window<span class="token punctuation">.</span>devicePixelRatio <span class="token operator">||</span> <span class="token number">1</span> 
  <span class="token comment">// \u83B7\u53D6\u8BBE\u5907\u7684dpr\uFF0C\u5373\u5F53\u524D\u8BBE\u7F6E\u4E0B\u7269\u7406\u50CF\u7D20\u4E0E\u865A\u62DF\u50CF\u7D20\u7684\u6BD4\u503C</span>

  <span class="token comment">// \u8C03\u6574body\u6807\u7B7E\u7684fontSize\uFF0CfontSize = (12 * dpr) + &#39;px&#39;</span>
  <span class="token comment">// \u8BBE\u7F6E\u9ED8\u8BA4\u5B57\u4F53\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u7684\u5B57\u4F53\u5927\u5C0F\u7EE7\u627F\u81EAbody</span>
  <span class="token keyword">function</span> <span class="token function">setBodyFontSize</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">12</span> <span class="token operator">*</span> dpr<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> setBodyFontSize<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">setBodyFontSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// set 1rem = viewWidth / 10</span>
  <span class="token comment">// \u8BBE\u7F6Eroot\u5143\u7D20\u7684fontSize = \u5176clientWidth / 10 + \u2018px\u2019</span>
  <span class="token keyword">function</span> <span class="token function">setRemUnit</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> rem <span class="token operator">=</span> docEl<span class="token punctuation">.</span>clientWidth <span class="token operator">/</span> <span class="token number">10</span>
    docEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> rem <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setRemUnit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// \u5F53\u9875\u9762\u5C55\u793A\u6216\u91CD\u65B0\u8BBE\u7F6E\u5927\u5C0F\u7684\u65F6\u5019\uFF0C\u89E6\u53D1\u91CD\u65B0</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> setRemUnit<span class="token punctuation">)</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;pageshow&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>persisted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setRemUnit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// \u68C0\u6D4B0.5px\u7684\u652F\u6301\uFF0C\u652F\u6301\u5219root\u5143\u7D20\u7684class\u4E2D\u6709hairlines</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>dpr <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> fakeBody <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> testElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
    testElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>border <span class="token operator">=</span> <span class="token string">&#39;.5px solid transparent&#39;</span>
    fakeBody<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>testElement<span class="token punctuation">)</span>
    docEl<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>fakeBody<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>testElement<span class="token punctuation">.</span>offsetHeight <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      docEl<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;hairlines&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    docEl<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>fakeBody<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","40.html.vue"]]);export{r as default};