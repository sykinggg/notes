import{a as n}from"./app.27c025c0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h1><p>\u51FD\u6570\u7C7B\u578B\u5728 TypeScript \u7C7B\u578B\u7CFB\u7EDF\u4E2D\u626E\u6F14\u7740\u975E\u5E38\u91CD\u8981\u7684\u89D2\u8272\uFF0C\u5B83\u4EEC\u662F\u53EF\u7EC4\u5408\u7CFB\u7EDF\u7684\u6838\u5FC3\u6784\u5EFA\u5757\u3002</p><h2 id="\u53C2\u6570\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u6CE8\u89E3" aria-hidden="true">#</a> \u53C2\u6570\u6CE8\u89E3</h2><p>\u4F60\u53EF\u4EE5\u6CE8\u89E3\u51FD\u6570\u53C2\u6570\uFF0C\u5C31\u50CF\u4F60\u53EF\u4EE5\u6CE8\u89E3\u5176\u4ED6\u53D8\u91CF\u4E00\u6837:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// variable annotation</span>
<span class="token keyword">let</span> sampleVariable<span class="token operator">:</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// function parameter annotation</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>sampleParameter<span class="token operator">:</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u91CC\u4F7F\u7528\u4E86\u5185\u8054\u7C7B\u578B\u6CE8\u89E3\uFF0C\u9664\u6B64\u4E4B\u5916\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u4F7F\u7528\u63A5\u53E3\u7B49\u5176\u4ED6\u65B9\u5F0F\u3002</p><h3 id="\u8FD4\u56DE\u7C7B\u578B\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7C7B\u578B\u6CE8\u89E3" aria-hidden="true">#</a> \u8FD4\u56DE\u7C7B\u578B\u6CE8\u89E3</h3><p>\u4F60\u53EF\u4EE5\u5728\u51FD\u6570\u53C2\u6570\u5217\u8868\u4E4B\u540E\u4F7F\u7528\u4E0E\u53D8\u91CF\u76F8\u540C\u7684\u6837\u5F0F\u6765\u6CE8\u89E3\u8FD4\u56DE\u7C7B\u578B\uFF0C\u5982\u4F8B\u5B50\u4E2D <code>\uFF1AFoo</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Return type annotated as \`: Foo\`</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>sample<span class="token operator">:</span> Foo<span class="token punctuation">)</span><span class="token operator">:</span> Foo <span class="token punctuation">{</span>
  <span class="token keyword">return</span> sample<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5728\u8FD9\u91CC\u4F7F\u7528\u4E86\u4E00\u4E2A <code>interface</code>\uFF0C\u4F46\u4F60\u53EF\u4EE5\u81EA\u7531\u5730\u4F7F\u7528\u5176\u4ED6\u6CE8\u89E3\u65B9\u5F0F\uFF0C\u4F8B\u5982\u5185\u8054\u6CE8\u89E3\u3002</p><p>\u901A\u5E38\uFF0C\u4F60\u4E0D<em>\u9700\u8981</em>\u6CE8\u89E3\u51FD\u6570\u7684\u8FD4\u56DE\u7C7B\u578B\uFF0C\u56E0\u4E3A\u5B83\u53EF\u4EE5\u7531\u7F16\u8BD1\u5668\u63A8\u65AD\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>sample<span class="token operator">:</span> Foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> sample<span class="token punctuation">;</span> <span class="token comment">// inferred return type &#39;Foo&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4F46\u662F\uFF0C\u6DFB\u52A0\u8FD9\u4E9B\u6CE8\u89E3\u4EE5\u5E2E\u52A9\u89E3\u51B3\u9519\u8BEF\u63D0\u793A\u901A\u5E38\u662F\u4E00\u4E2A\u597D\u4E3B\u610F\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> fou<span class="token operator">:</span> <span class="token string">&#39;John Doe&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// You might not find this misspelling of \`foo\` till it&#39;s too late</span>
<span class="token punctuation">}</span>

<span class="token function">sendAsJSON</span><span class="token punctuation">(</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5982\u679C\u4F60\u4E0D\u6253\u7B97\u4ECE\u51FD\u6570\u8FD4\u56DE\u4EFB\u4F55\u5185\u5BB9\uFF0C\u5219\u53EF\u4EE5\u5C06\u5176\u6807\u6CE8\u4E3A\uFF1A<code>void</code> \u3002\u4F60\u901A\u5E38\u53EF\u4EE5\u5220\u9664 <code>void</code>\uFF0C TypeScript \u80FD\u63A8\u5BFC\u51FA\u6765\uFF1A</p><h3 id="\u53EF\u9009\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u53C2\u6570" aria-hidden="true">#</a> \u53EF\u9009\u53C2\u6570</h3><p>\u4F60\u53EF\u4EE5\u5C06\u53C2\u6570\u6807\u8BB0\u4E3A\u53EF\u9009:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> bas<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// ..</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6216\u8005\uFF0C\u5F53\u8C03\u7528\u8005\u6CA1\u6709\u63D0\u4F9B\u8BE5\u53C2\u6570\u65F6\uFF0C\u4F60\u53EF\u4EE5\u63D0\u4F9B\u4E00\u4E2A\u9ED8\u8BA4\u503C\uFF08\u5728\u53C2\u6570\u58F0\u660E\u540E\u4F7F\u7528 <code>= someValue</code> \uFF09\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> bas<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">,</span> bas<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123, hello</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123, world</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u91CD\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8F7D" aria-hidden="true">#</a> \u91CD\u8F7D</h3><p>TypeScript \u5141\u8BB8\u4F60\u58F0\u660E\u51FD\u6570\u91CD\u8F7D\u3002\u8FD9\u5BF9\u4E8E\u6587\u6863 + \u7C7B\u578B\u5B89\u5168\u6765\u8BF4\u5F88\u5B9E\u7528\u3002\u8BF7\u601D\u8003\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">padding</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> c<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> d<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> c <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> d <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    b <span class="token operator">=</span> c <span class="token operator">=</span> d <span class="token operator">=</span> a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> d <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">=</span> a<span class="token punctuation">;</span>
    d <span class="token operator">=</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    top<span class="token operator">:</span> a<span class="token punctuation">,</span>
    right<span class="token operator">:</span> b<span class="token punctuation">,</span>
    bottom<span class="token operator">:</span> c<span class="token punctuation">,</span>
    left<span class="token operator">:</span> d
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5982\u679C\u4ED4\u7EC6\u67E5\u770B\u4EE3\u7801\uFF0C\u5C31\u4F1A\u53D1\u73B0 a\uFF0Cb\uFF0Cc\uFF0Cd \u7684\u503C\u4F1A\u6839\u636E\u4F20\u5165\u7684\u53C2\u6570\u6570\u91CF\u800C\u53D8\u5316\u3002\u6B64\u51FD\u6570\u4E5F\u53EA\u9700\u8981 1 \u4E2A\uFF0C2 \u4E2A\u6216 4 \u4E2A\u53C2\u6570\u3002\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u91CD\u8F7D\u6765<em>\u5F3A\u5236</em>\u548C<em>\u8BB0\u5F55</em>\u8FD9\u4E9B\u7EA6\u675F\u3002\u4F60\u53EA\u9700\u591A\u6B21\u58F0\u660E\u51FD\u6570\u5934\u3002\u6700\u540E\u4E00\u4E2A\u51FD\u6570\u5934\u662F\u5728\u51FD\u6570\u4F53\u5185\u5B9E\u9645\u5904\u4E8E\u6D3B\u52A8\u72B6\u6001\u4F46\u4E0D\u53EF\u7528\u4E8E\u5916\u90E8\u3002</p><p>\u5982\u4E0B\u6240\u793A:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u91CD\u8F7D</span>
<span class="token keyword">function</span> <span class="token function">padding</span><span class="token punctuation">(</span>all<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">padding</span><span class="token punctuation">(</span>topAndBottom<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> leftAndRight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">padding</span><span class="token punctuation">(</span>top<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> bottom<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> left<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Actual implementation that is a true representation of all the cases the function body needs to handle</span>
<span class="token keyword">function</span> <span class="token function">padding</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> c<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> d<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> c <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> d <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    b <span class="token operator">=</span> c <span class="token operator">=</span> d <span class="token operator">=</span> a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> d <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">=</span> a<span class="token punctuation">;</span>
    d <span class="token operator">=</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    top<span class="token operator">:</span> a<span class="token punctuation">,</span>
    right<span class="token operator">:</span> b<span class="token punctuation">,</span>
    bottom<span class="token operator">:</span> c<span class="token punctuation">,</span>
    left<span class="token operator">:</span> d
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u8FD9\u91CC\u524D\u4E09\u4E2A\u51FD\u6570\u5934\u53EF\u6709\u6548\u8C03\u7528 <code>padding</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Okay: all</span>
<span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Okay: topAndBottom, leftAndRight</span>
<span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Okay: top, right, bottom, left</span>

<span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: Not a part of the available overloads</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5F53\u7136\uFF0C\u6700\u7EC8\u58F0\u660E\uFF08\u4ECE\u51FD\u6570\u5185\u90E8\u770B\u5230\u7684\u771F\u6B63\u58F0\u660E\uFF09\u4E0E\u6240\u6709\u91CD\u8F7D\u517C\u5BB9\u662F\u5F88\u91CD\u8981\u7684\u3002\u8FD9\u662F\u56E0\u4E3A\u8FD9\u662F\u51FD\u6570\u4F53\u9700\u8981\u8003\u8651\u7684\u51FD\u6570\u8C03\u7528\u7684\u771F\u5B9E\u6027\u8D28\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>TypeScript \u4E2D\u7684\u51FD\u6570\u91CD\u8F7D\u6CA1\u6709\u4EFB\u4F55\u8FD0\u884C\u65F6\u5F00\u9500\u3002\u5B83\u53EA\u5141\u8BB8\u4F60\u8BB0\u5F55\u5E0C\u671B\u8C03\u7528\u51FD\u6570\u7684\u65B9\u5F0F\uFF0C\u5E76\u4E14\u7F16\u8BD1\u5668\u4F1A\u68C0\u67E5\u5176\u4F59\u4EE3\u7801\u3002</p></div><h3 id="\u51FD\u6570\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u58F0\u660E" aria-hidden="true">#</a> \u51FD\u6570\u58F0\u660E</h3><blockquote><p>\u5FEB\u901F\u5F00\u59CB\uFF1A\u7C7B\u578B\u6CE8\u89E3\u662F\u4F60\u63CF\u8FF0\u73B0\u6709\u5B9E\u73B0\u7C7B\u578B\u7684\u4E00\u79CD\u65B9\u5F0F</p></blockquote><p>\u5728\u6CA1\u6709\u63D0\u4F9B\u51FD\u6570\u5B9E\u73B0\u7684\u60C5\u51B5\u4E0B\uFF0C\u6709\u4E24\u79CD\u58F0\u660E\u51FD\u6570\u7C7B\u578B\u7684\u65B9\u5F0F:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">LongHand</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">ShortHand</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\u7684\u4E24\u4E2A\u4F8B\u5B50\u5B8C\u5168\u76F8\u540C\u3002\u4F46\u662F\uFF0C\u5F53\u4F60\u60F3\u4F7F\u7528\u51FD\u6570\u91CD\u8F7D\u65F6\uFF0C\u53EA\u80FD\u7528\u7B2C\u4E00\u79CD\u65B9\u5F0F:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">LongHandAllowsOverloadDeclarations</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,36);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
