import{_ as n,a}from"./app.41ff10d5.js";const s={},e=a(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment" aria-hidden="true">#</a> Fragment</h1><p>\u4E3A\u4E00\u4E2A\u7EC4\u4EF6\u6DFB\u52A0\u591A\u4E2A\u5143\u7D20,\u53EF\u4EE5\u8BB2\u4F60\u7684\u5B50\u7EC4\u4EF6\u5217\u8868\u6DFB\u52A0\u5230\u4E00\u4E2A\u5206\u7EC4\u4E2D(&lt;&gt;&lt;/&gt;),\u5E76\u4E14\u4E0D\u4F1A\u518DDOM\u589E\u52A0\u989D\u5916\u8282\u70B9</p><h1 id="dom-\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#dom-\u5143\u7D20" aria-hidden="true">#</a> DOM \u5143\u7D20</h1><p>\u5728 React \u4E2D\uFF0C\u6240\u6709\u7684 DOM \u7279\u6027\u548C\u5C5E\u6027\uFF08\u5305\u62EC\u4E8B\u4EF6\u5904\u7406\uFF09\u90FD\u5E94\u8BE5\u662F\u5C0F\u9A7C\u5CF0\u547D\u540D\u7684\u65B9\u5F0F\u3002\u4F8B\u5982\uFF0C\u4E0E HTML \u4E2D\u7684 <code>tabindex</code> \u5C5E\u6027\u5BF9\u5E94\u7684 React \u7684\u5C5E\u6027\u662F <code>tabIndex</code>\u3002\u4F8B\u5916\u7684\u60C5\u51B5\u662F <code>aria-*</code> \u4EE5\u53CA <code>data-*</code> \u5C5E\u6027\uFF0C\u4E00\u5F8B\u4F7F\u7528\u5C0F\u5199\u5B57\u6BCD\u547D\u540D\u3002\u6BD4\u5982, \u4F60\u4F9D\u7136\u53EF\u4EE5\u7528 <code>aria-label</code> \u4F5C\u4E3A <code>aria-label</code>\u3002</p><h1 id="\u5C5E\u6027\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u5DEE\u5F02" aria-hidden="true">#</a> \u5C5E\u6027\u5DEE\u5F02</h1><p>React \u4E0E HTML \u4E4B\u95F4\u6709\u5F88\u591A\u5C5E\u6027\u5B58\u5728\u5DEE\u5F02\uFF1A</p><h2 id="checked" tabindex="-1"><a class="header-anchor" href="#checked" aria-hidden="true">#</a> checked</h2><p>\u5F53 <code>&lt;input&gt;</code> \u7EC4\u4EF6\u7684 type \u7C7B\u578B\u4E3A <code>checkbox</code> \u6216 <code>radio</code> \u65F6\uFF0C\u7EC4\u4EF6\u652F\u6301 <code>checked</code> \u5C5E\u6027\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u5B83\u6765\u8BBE\u7F6E\u7EC4\u4EF6\u662F\u5426\u88AB\u9009\u4E2D\u3002\u8FD9\u5BF9\u4E8E\u6784\u5EFA\u53D7\u63A7\u7EC4\u4EF6\uFF08controlled components\uFF09\u5F88\u6709\u5E2E\u52A9\u3002\u800C <code>defaultChecked</code> \u5219\u662F\u975E\u53D7\u63A7\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u7EC4\u4EF6\u9996\u6B21\u6302\u8F7D\u65F6\u662F\u5426\u88AB\u9009\u4E2D\u3002</p><h2 id="classname" tabindex="-1"><a class="header-anchor" href="#classname" aria-hidden="true">#</a> className</h2><p><code>className</code> \u5C5E\u6027\u7528\u4E8E\u6307\u5B9A CSS \u7684 class\uFF0C\u6B64\u7279\u6027\u9002\u7528\u4E8E\u6240\u6709\u5E38\u89C4 DOM \u8282\u70B9\u548C SVG \u5143\u7D20\uFF0C\u5982 <code>&lt;div&gt;</code>\uFF0C<code>&lt;a&gt;</code> \u53CA\u5176\u5B83\u6807\u7B7E\u3002</p><h2 id="dangerouslysetinnerhtml" tabindex="-1"><a class="header-anchor" href="#dangerouslysetinnerhtml" aria-hidden="true">#</a> dangerouslySetInnerHTML</h2><p><code>dangerouslySetInnerHTML</code> \u662F React \u4E3A\u6D4F\u89C8\u5668 DOM \u63D0\u4F9B <code>innerHTML</code> \u7684\u66FF\u6362\u65B9\u6848\u3002\u901A\u5E38\u6765\u8BB2\uFF0C\u4F7F\u7528\u4EE3\u7801\u76F4\u63A5\u8BBE\u7F6E HTML \u5B58\u5728\u98CE\u9669\uFF0C\u56E0\u4E3A\u5F88\u5BB9\u6613\u65E0\u610F\u4E2D\u4F7F\u7528\u6237\u66B4\u9732\u4E8E\u8DE8\u7AD9\u811A\u672C\uFF08XSS\uFF09\u7684\u653B\u51FB\u3002\u56E0\u6B64\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728 React \u4E2D\u8BBE\u7F6E HTML\uFF0C\u4F46\u5F53\u4F60\u60F3\u8BBE\u7F6E <code>dangerouslySetInnerHTML</code> \u65F6\uFF0C\u9700\u8981\u5411\u5176\u4F20\u9012\u5305\u542B key \u4E3A <code>__html</code> \u7684\u5BF9\u8C61\uFF0C\u4EE5\u6B64\u6765\u8B66\u793A\u4F60\u3002\u4F8B\u5982\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">createMarkup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">__html</span><span class="token operator">:</span> <span class="token string">&#39;First &amp;middot; Second&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">createMarkup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="htmlfor" tabindex="-1"><a class="header-anchor" href="#htmlfor" aria-hidden="true">#</a> htmlFor</h2><p>\u7531\u4E8E <code>for</code> \u5728 JavaScript \u4E2D\u662F\u4FDD\u7559\u5B57\uFF0C\u6240\u4EE5 React \u5143\u7D20\u4E2D\u4F7F\u7528\u4E86 <code>htmlFor</code> \u6765\u4EE3\u66FF\u3002</p><h2 id="onchange" tabindex="-1"><a class="header-anchor" href="#onchange" aria-hidden="true">#</a> onChange</h2><p><code>onChange</code> \u4E8B\u4EF6\u4E0E\u9884\u671F\u884C\u4E3A\u4E00\u81F4\uFF1A\u6BCF\u5F53\u8868\u5355\u5B57\u6BB5\u53D8\u5316\u65F6\uFF0C\u8BE5\u4E8B\u4EF6\u90FD\u4F1A\u88AB\u89E6\u53D1\u3002\u6545\u610F\u6CA1\u6709\u4F7F\u7528\u6D4F\u89C8\u5668\u5DF2\u6709\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u662F\u56E0\u4E3A <code>onChange</code> \u5728\u6D4F\u89C8\u5668\u4E2D\u7684\u884C\u4E3A\u548C\u540D\u79F0\u4E0D\u5BF9\u5E94\uFF0C\u5E76\u4E14 React \u4F9D\u9760\u4E86\u8BE5\u4E8B\u4EF6\u5B9E\u65F6\u5904\u7406\u7528\u6237\u8F93\u5165\u3002</p><h2 id="selected" tabindex="-1"><a class="header-anchor" href="#selected" aria-hidden="true">#</a> selected</h2><p>\u5982\u679C\u8981\u5C06 <code>&lt;option&gt;</code> \u6807\u8BB0\u4E3A\u5DF2\u9009\u4E2D\u72B6\u6001\uFF0C\u8BF7\u5728 <code>select</code> \u7684 <code>value</code> \u4E2D\u5F15\u7528\u8BE5\u9009\u9879\u7684\u503C\u3002</p><h2 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style</h2><blockquote><p><strong>\u6CE8\u610F</strong></p><p>\u5728\u6587\u6863\u4E2D\uFF0C\u90E8\u5206\u4F8B\u5B50\u4E3A\u4E86\u65B9\u4FBF\uFF0C\u76F4\u63A5\u4F7F\u7528\u4E86 <code>style</code>\uFF0C\u4F46\u662F<strong>\u901A\u5E38\u4E0D\u63A8\u8350\u5C06 style \u5C5E\u6027\u4F5C\u4E3A\u8BBE\u7F6E\u5143\u7D20\u6837\u5F0F\u7684\u4E3B\u8981\u65B9\u5F0F</strong>\u3002\u5728\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u5E94\u4F7F\u7528 <code>className</code> \u5C5E\u6027\u6765\u5F15\u7528\u5916\u90E8 CSS \u6837\u5F0F\u8868\u4E2D\u5B9A\u4E49\u7684 class\u3002style \u5728 React \u5E94\u7528\u4E2D\u591A\u7528\u4E8E\u5728\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u6DFB\u52A0\u52A8\u6001\u8BA1\u7B97\u7684\u6837\u5F0F\u3002</p></blockquote><p><code>style</code> \u63A5\u53D7\u4E00\u4E2A\u91C7\u7528\u5C0F\u9A7C\u5CF0\u547D\u540D\u5C5E\u6027\u7684 JavaScript \u5BF9\u8C61\uFF0C\u800C\u4E0D\u662F CSS \u5B57\u7B26\u4E32\u3002\u8FD9\u4E0E DOM \u4E2D <code>style</code> \u7684 JavaScript \u5C5E\u6027\u662F\u4E00\u81F4\u7684\uFF0C\u540C\u65F6\u4F1A\u66F4\u9AD8\u6548\u7684\uFF0C\u4E14\u80FD\u9884\u9632\u8DE8\u7AD9\u811A\u672C\uFF08XSS\uFF09\u7684\u5B89\u5168\u6F0F\u6D1E\u3002\u4F8B\u5982\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> divStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">backgroundImage</span><span class="token operator">:</span> <span class="token string">&#39;url(&#39;</span> <span class="token operator">+</span> imgUrl <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">HelloWorldComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>divStyle<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello World!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>\u6CE8\u610F\uFF1A\u6837\u5F0F\u4E0D\u4F1A\u81EA\u52A8\u8865\u9F50\u524D\u7F00\u3002\u5982\u9700\u652F\u6301\u65E7\u7248\u6D4F\u89C8\u5668\uFF0C\u8BF7\u624B\u52A8\u8865\u5145\u5BF9\u5E94\u7684\u6837\u5F0F\u5C5E\u6027\uFF1A</p></blockquote><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> divStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">WebkitTransition</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token comment">// note the capital &#39;W&#39; here</span>
  <span class="token literal-property property">msTransition</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span> <span class="token comment">// &#39;ms&#39; is the only lowercase vendor prefix</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ComponentWithTransition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>divStyle<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">This should work cross-browser</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Style \u4E2D\u7684 key \u91C7\u7528\u5C0F\u9A7C\u5CF0\u547D\u540D\u662F\u4E3A\u4E86\u4E0E JS \u8BBF\u95EE DOM \u8282\u70B9\u7684\u5C5E\u6027\u4FDD\u6301\u4E00\u81F4\uFF08\u4F8B\u5982\uFF1A<code>node.style.backgroundImage</code> \uFF09\u3002\u6D4F\u89C8\u5668\u5F15\u64CE\u524D\u7F00\u90FD\u5E94\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934\uFF0C\u9664\u4E86 ms\u3002\u56E0\u6B64\uFF0C<code>WebkitTransition</code> \u9996\u5B57\u6BCD\u4E3A \u201DW\u201D\u3002</p><p>React \u4F1A\u81EA\u52A8\u6DFB\u52A0 \u201Dpx\u201D \u540E\u7F00\u5230\u5185\u8054\u6837\u5F0F\u4E3A\u6570\u5B57\u7684\u5C5E\u6027\u540E\u3002\u5982\u9700\u4F7F\u7528 \u201Dpx\u201D \u4EE5\u5916\u7684\u5355\u4F4D\uFF0C\u8BF7\u5C06\u6B64\u503C\u8BBE\u4E3A\u6570\u5B57\u4E0E\u6240\u9700\u5355\u4F4D\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\u3002\u4F8B\u5982\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// Result style: &#39;10px&#39;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  Hello World!
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">// Result style: &#39;10%&#39;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  Hello World!
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4F46\u5E76\u975E\u6240\u6709\u6837\u5F0F\u5C5E\u6027\u90FD\u8F6C\u6362\u4E3A\u50CF\u7D20\u5B57\u7B26\u4E32\u3002\u6709\u4E9B\u6837\u5F0F\u5C5E\u6027\u662F\u6CA1\u6709\u5355\u4F4D\u7684(\u4F8B\u5982 <code>zoom</code>\uFF0C<code>order</code>\uFF0C<code>flex</code>)\u3002</p><h2 id="suppresscontenteditablewarning" tabindex="-1"><a class="header-anchor" href="#suppresscontenteditablewarning" aria-hidden="true">#</a> suppressContentEditableWarning</h2><p>\u901A\u5E38\uFF0C\u5F53\u62E5\u6709\u5B50\u8282\u70B9\u7684\u5143\u7D20\u88AB\u6807\u8BB0\u4E3A <code>contentEditable</code> \u65F6\uFF0CReact \u4F1A\u53D1\u51FA\u4E00\u4E2A\u8B66\u544A\uFF0C\u56E0\u4E3A\u8FD9\u4E0D\u4F1A\u751F\u6548\u3002\u8BE5\u5C5E\u6027\u5C06\u7981\u6B62\u6B64\u8B66\u544A\u3002\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528\u8BE5\u5C5E\u6027\uFF0C\u9664\u975E\u4F60\u8981\u6784\u5EFA\u4E00\u4E2A\u7C7B\u4F3C Draft.js \u7684\u624B\u52A8\u7BA1\u7406 <code>contentEditable</code> \u5C5E\u6027\u7684\u5E93\u3002</p><h2 id="suppresshydrationwarning" tabindex="-1"><a class="header-anchor" href="#suppresshydrationwarning" aria-hidden="true">#</a> suppressHydrationWarning</h2><p>\u5982\u679C\u4F60\u4F7F\u7528 React \u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u901A\u5E38\u4F1A\u5728\u5F53\u670D\u52A1\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u6E32\u67D3\u4E0D\u540C\u7684\u5185\u5BB9\u65F6\u53D1\u51FA\u8B66\u544A\u3002\u4F46\u662F\uFF0C\u5728\u4E00\u4E9B\u6781\u5C11\u6570\u7684\u60C5\u51B5\u4E0B\uFF0C\u5F88\u96BE\u751A\u81F3\u4E8E\u4E0D\u53EF\u80FD\u4FDD\u8BC1\u5185\u5BB9\u7684\u4E00\u81F4\u6027\u3002\u4F8B\u5982\uFF0C\u5728\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u4E0A\uFF0C\u65F6\u95F4\u6233\u901A\u5E38\u662F\u4E0D\u540C\u7684\u3002</p><p>\u5982\u679C\u8BBE\u7F6E <code>suppressHydrationWarning</code> \u4E3A <code>true</code>\uFF0CReact \u5C06\u4E0D\u4F1A\u8B66\u544A\u4F60\u5C5E\u6027\u4E0E\u5143\u7D20\u5185\u5BB9\u4E0D\u4E00\u81F4\u3002\u5B83\u53EA\u4F1A\u5BF9\u5143\u7D20\u4E00\u7EA7\u6DF1\u5EA6\u6709\u6548\uFF0C\u5E76\u4E14\u6253\u7B97\u4F5C\u4E3A\u5E94\u6025\u65B9\u6848\u3002\u56E0\u6B64\u4E0D\u8981\u8FC7\u5EA6\u4F7F\u7528\u5B83\u3002</p><h2 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> value</h2><p><code>&lt;input&gt;</code>\u3001<code>&lt;select&gt;</code> \u548C <code>&lt;textarea&gt;</code> \u7EC4\u4EF6\u652F\u6301 <code>value</code> \u5C5E\u6027\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u5B83\u4E3A\u7EC4\u4EF6\u8BBE\u7F6E value\u3002\u8FD9\u5BF9\u4E8E\u6784\u5EFA\u53D7\u63A7\u7EC4\u4EF6\u662F\u975E\u5E38\u6709\u5E2E\u52A9\u3002<code>defaultValue</code> \u5C5E\u6027\u5BF9\u5E94\u7684\u662F\u975E\u53D7\u63A7\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u7EC4\u4EF6\u7B2C\u4E00\u6B21\u6302\u8F7D\u65F6\u7684 value\u3002</p><h2 id="all-supported-html-attributes" tabindex="-1"><a class="header-anchor" href="#all-supported-html-attributes" aria-hidden="true">#</a> All Supported HTML Attributes</h2><p>React \u4E3A DOM \u63D0\u4F9B\u4E86\u4E00\u5957\u4EE5 JavaScript \u4E3A\u4E2D\u5FC3\u7684 API\u3002\u7531\u4E8E React \u7EC4\u4EF6\u7ECF\u5E38\u91C7\u7528\u81EA\u5B9A\u4E49\u6216\u548C DOM \u76F8\u5173\u7684 props \u7684\u5173\u7CFB\uFF0CReact \u91C7\u7528\u4E86<code>\u5C0F\u9A7C\u5CF0\u547D\u540D</code>\u7684\u65B9\u5F0F\uFF0C\u6B63\u5982 DOM APIs \u90A3\u6837\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabIndex</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>      <span class="token comment">// Just like node.tabIndex DOM API</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Button<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> <span class="token comment">// Just like node.className DOM API</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">readOnly</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>  <span class="token comment">// Just like node.readOnly DOM API</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>\u6240\u6709\u7684 SVG \u5C5E\u6027\u4E5F\u5B8C\u5168\u5F97\u5230\u4E86\u652F\u6301\uFF1A</p></blockquote><blockquote><p>\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u4F46\u8981\u6CE8\u610F\u5C5E\u6027\u540D\u5168\u90FD\u4E3A\u5C0F\u5199\u3002</p></blockquote>`,42);function t(p,c){return e}var l=n(s,[["render",t],["__file","interview44.html.vue"]]);export{l as default};
