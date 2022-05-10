import{_ as n,a as s}from"./app.41ff10d5.js";const a={},p=s(`<h1 id="\u53EF\u8C03\u7528\u7684" tabindex="-1"><a class="header-anchor" href="#\u53EF\u8C03\u7528\u7684" aria-hidden="true">#</a> \u53EF\u8C03\u7528\u7684</h1><p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u522B\u540D\u6216\u8005\u63A5\u53E3\u6765\u8868\u793A\u4E00\u4E2A\u53EF\u88AB\u8C03\u7528\u7684\u7C7B\u578B\u6CE8\u89E3\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ReturnString</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5B83\u53EF\u4EE5\u8868\u793A\u4E00\u4E2A\u8FD4\u56DE\u503C\u4E3A <code>string</code> \u7684\u51FD\u6570\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">const</span> foo<span class="token operator">:</span> ReturnString<span class="token punctuation">;</span>

<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bar \u88AB\u63A8\u65AD\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u4E00\u4E2A\u5B9E\u9645\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u5B9E\u9645\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u4E00\u4E2A\u5B9E\u9645\u7684\u4F8B\u5B50</h2><p>\u5F53\u7136\uFF0C\u50CF\u8FD9\u6837\u4E00\u4E2A\u53EF\u88AB\u8C03\u7528\u7684\u7C7B\u578B\u6CE8\u89E3\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u6765\u4F20\u9012\u4EFB\u4F55\u53C2\u6570\u3001\u53EF\u9009\u53C2\u6570\u4EE5\u53CA rest \u53C2\u6570\uFF0C\u8FD9\u6709\u4E00\u4E2A\u7A0D\u5FAE\u590D\u6742\u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Complex</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> bar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token operator">...</span>others<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E00\u4E2A\u63A5\u53E3\u53EF\u63D0\u4F9B\u591A\u79CD\u8C03\u7528\u7B7E\u540D\uFF0C\u7528\u4EE5\u7279\u6B8A\u7684\u51FD\u6570\u91CD\u8F7D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Overloaded</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9E\u73B0\u63A5\u53E3\u7684\u4E00\u4E2A\u4F8B\u5B50\uFF1A</span>
<span class="token keyword">function</span> <span class="token function">stringOrNumber</span><span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">stringOrNumber</span><span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">stringOrNumber</span><span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> foo <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> foo <span class="token operator">*</span> foo<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> foo <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>foo<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> overloaded<span class="token operator">:</span> Overloaded <span class="token operator">=</span> stringOrNumber<span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token function">overloaded</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// str \u88AB\u63A8\u65AD\u4E3A &#39;string&#39;</span>
<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token function">overloaded</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// num \u88AB\u63A8\u65AD\u4E3A &#39;number&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u8FD9\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5185\u8054\u6CE8\u89E3\u4E2D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> overloaded<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u7BAD\u5934\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a> \u7BAD\u5934\u51FD\u6570</h2><p>\u4E3A\u4E86\u4F7F\u6307\u5B9A\u53EF\u8C03\u7528\u7684\u7C7B\u578B\u7B7E\u540D\u66F4\u5BB9\u6613\uFF0CTypeScript \u4E5F\u5141\u8BB8\u4F60\u4F7F\u7528\u7B80\u5355\u7684\u7BAD\u5934\u51FD\u6570\u7C7B\u578B\u6CE8\u89E3\u3002\u4F8B\u5982\uFF0C\u5728\u4E00\u4E2A\u4EE5 number \u7C7B\u578B\u4E3A\u53C2\u6570\uFF0C\u4EE5 string \u7C7B\u578B\u4E3A\u8FD4\u56DE\u503C\u7684\u51FD\u6570\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u4E48\u5199\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">simple</span><span class="token operator">:</span> <span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function-variable function">string</span> <span class="token operator">=</span> foo <span class="token operator">=&gt;</span> foo<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5B83\u4EC5\u4EC5\u53EA\u80FD\u4F5C\u4E3A\u7B80\u5355\u7684\u7BAD\u5934\u51FD\u6570\uFF0C\u4F60\u65E0\u6CD5\u4F7F\u7528\u91CD\u8F7D\u3002\u5982\u679C\u60F3\u4F7F\u7528\u91CD\u8F7D\uFF0C\u4F60\u5FC5\u987B\u4F7F\u7528\u5B8C\u6574\u7684 <code>{ (someArgs): someReturn }</code> \u7684\u8BED\u6CD5</p></div><h2 id="\u53EF\u5B9E\u4F8B\u5316" tabindex="-1"><a class="header-anchor" href="#\u53EF\u5B9E\u4F8B\u5316" aria-hidden="true">#</a> \u53EF\u5B9E\u4F8B\u5316</h2><p>\u53EF\u5B9E\u4F8B\u5316\u4EC5\u4EC5\u662F\u53EF\u8C03\u7528\u7684\u4E00\u79CD\u7279\u6B8A\u60C5\u51B5\uFF0C\u5B83\u4F7F\u7528 <code>new</code> \u4F5C\u4E3A\u524D\u7F00\u3002\u5B83\u610F\u5473\u7740\u4F60\u9700\u8981\u4F7F\u7528 <code>new</code> \u5173\u952E\u5B57\u53BB\u8C03\u7528\u5B83\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CallMeWithNewToGetString</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> Foo<span class="token operator">:</span> CallMeWithNewToGetString<span class="token punctuation">;</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bar \u88AB\u63A8\u65AD\u4E3A string \u7C7B\u578B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,19);function e(t,o){return p}var l=n(a,[["render",e],["__file","callable.html.vue"]]);export{l as default};
