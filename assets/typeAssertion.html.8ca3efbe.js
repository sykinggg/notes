import{_ as n,o as s,c as a,a as e}from"./app.e9fd9ffa.js";const p={},t=e(`<h1 id="\u7C7B\u578B\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00" aria-hidden="true">#</a> \u7C7B\u578B\u65AD\u8A00</h1><p>TypeScript \u5141\u8BB8\u4F60\u8986\u76D6\u5B83\u7684\u63A8\u65AD\uFF0C\u5E76\u4E14\u80FD\u4EE5\u4F60\u4EFB\u4F55\u4F60\u60F3\u8981\u7684\u65B9\u5F0F\u5206\u6790\u5B83\uFF0C\u8FD9\u79CD\u673A\u5236\u88AB\u79F0\u4E3A\u300C\u7C7B\u578B\u65AD\u8A00\u300D\u3002TypeScript \u7C7B\u578B\u65AD\u8A00\u7528\u6765\u544A\u8BC9\u7F16\u8BD1\u5668\u4F60\u6BD4\u5B83\u66F4\u4E86\u89E3\u8FD9\u4E2A\u7C7B\u578B\uFF0C\u5E76\u4E14\u5B83\u4E0D\u5E94\u8BE5\u518D\u53D1\u51FA\u9519\u8BEF\u3002</p><p>\u7C7B\u578B\u65AD\u8A00\u7684\u4E00\u4E2A\u5E38\u89C1\u7528\u4F8B\u662F\u5F53\u4F60\u4ECE JavaScript \u8FC1\u79FB\u5230 TypeScript \u65F6\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// Error: &#39;bar&#39; \u5C5E\u6027\u4E0D\u5B58\u5728\u4E8E \u2018{}\u2019</span>
foo<span class="token punctuation">.</span>bas <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error: &#39;bas&#39; \u5C5E\u6027\u4E0D\u5B58\u5728\u4E8E &#39;{}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7684\u4EE3\u7801\u53D1\u51FA\u4E86\u9519\u8BEF\u8B66\u544A\uFF0C\u56E0\u4E3A <code>foo</code> \u7684\u7C7B\u578B\u63A8\u65AD\u4E3A <code>{}</code>\uFF0C\u5373\u6CA1\u6709\u5C5E\u6027\u7684\u5BF9\u8C61\u3002\u56E0\u6B64\uFF0C\u4F60\u4E0D\u80FD\u5728\u5B83\u7684\u5C5E\u6027\u4E0A\u6DFB\u52A0 <code>bar</code> \u6216 <code>bas</code>\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u7C7B\u578B\u65AD\u8A00\u6765\u907F\u514D\u6B64\u95EE\u9898\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  bas<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> Foo<span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bas <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="as-foo-\u4E0E-foo" tabindex="-1"><a class="header-anchor" href="#as-foo-\u4E0E-foo" aria-hidden="true">#</a> <code>as foo</code> \u4E0E <code>&lt;foo&gt;</code></h2><p>\u6700\u521D\u7684\u65AD\u8A00\u8BED\u6CD5\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>foo<span class="token punctuation">;</span> <span class="token comment">// \u73B0\u5728 bar \u7684\u7C7B\u578B\u662F &#39;string&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u800C\uFF0C\u5F53\u4F60\u5728 JSX \u4E2D\u4F7F\u7528 <code>&lt;foo&gt;</code> \u7684\u65AD\u8A00\u8BED\u6CD5\u65F6\uFF0C\u8FD9\u4F1A\u4E0E JSX \u7684\u8BED\u6CD5\u5B58\u5728\u6B67\u4E49\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>bar<span class="token punctuation">;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u56E0\u6B64\uFF0C\u4E3A\u4E86\u4E00\u81F4\u6027\uFF0C\u5EFA\u8BAE\u4F60\u4F7F\u7528 <code>as foo</code> \u7684\u8BED\u6CD5\u6765\u4E3A\u7C7B\u578B\u65AD\u8A00\u3002</p><h2 id="\u7C7B\u578B\u65AD\u8A00\u4E0E\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00\u4E0E\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u7C7B\u578B\u65AD\u8A00\u4E0E\u7C7B\u578B\u8F6C\u6362</h2><p>\u5B83\u4E4B\u6240\u4EE5\u4E0D\u88AB\u79F0\u4E3A\u300C\u7C7B\u578B\u8F6C\u6362\u300D\uFF0C\u662F\u56E0\u4E3A\u8F6C\u6362\u901A\u5E38\u610F\u5473\u7740\u67D0\u79CD\u8FD0\u884C\u65F6\u7684\u652F\u6301\u3002\u4F46\u662F\uFF0C\u7C7B\u578B\u65AD\u8A00\u7EAF\u7CB9\u662F\u4E00\u4E2A\u7F16\u8BD1\u65F6\u8BED\u6CD5\uFF0C\u540C\u65F6\uFF0C\u5B83\u4E5F\u662F\u4E00\u79CD\u4E3A\u7F16\u8BD1\u5668\u63D0\u4F9B\u5173\u4E8E\u5982\u4F55\u5206\u6790\u4EE3\u7801\u7684\u65B9\u6CD5\u3002</p><h2 id="\u7C7B\u578B\u65AD\u8A00\u88AB\u8BA4\u4E3A\u662F\u6709\u5BB3\u7684" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00\u88AB\u8BA4\u4E3A\u662F\u6709\u5BB3\u7684" aria-hidden="true">#</a> \u7C7B\u578B\u65AD\u8A00\u88AB\u8BA4\u4E3A\u662F\u6709\u5BB3\u7684</h2><p>\u5728\u5F88\u591A\u60C5\u666F\u4E0B\uFF0C\u65AD\u8A00\u80FD\u8BA9\u4F60\u66F4\u5BB9\u6613\u7684\u4ECE\u9057\u7559\u9879\u76EE\u4E2D\u8FC1\u79FB\uFF08\u751A\u81F3\u5C06\u5176\u4ED6\u4EE3\u7801\u7C98\u8D34\u590D\u5236\u5230\u4F60\u7684\u9879\u76EE\u4E2D\uFF09\uFF0C\u7136\u800C\uFF0C\u4F60\u5E94\u8BE5\u5C0F\u5FC3\u8C28\u614E\u7684\u4F7F\u7528\u65AD\u8A00\u3002\u8BA9\u7528\u6700\u521D\u7684\u4EE3\u7801\u4F5C\u4E3A\u793A\u4F8B\uFF0C\u5982\u679C\u4F60\u6CA1\u6709\u6309\u7EA6\u5B9A\u6DFB\u52A0\u5C5E\u6027\uFF0CTypeScript \u7F16\u8BD1\u5668\u5E76\u4E0D\u4F1A\u5BF9\u6B64\u53D1\u51FA\u9519\u8BEF\u8B66\u544A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  bas<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> Foo<span class="token punctuation">;</span>

<span class="token comment">// ahhh, \u5FD8\u8BB0\u4E86\u4EC0\u4E48\uFF1F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u5916\u4E00\u4E2A\u5E38\u89C1\u7684\u60F3\u6CD5\u662F\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\u6765\u63D0\u4F9B\u4EE3\u7801\u7684\u63D0\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  bas<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token operator">&lt;</span>Foo<span class="token operator">&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">// \u7F16\u8BD1\u5668\u5C06\u4F1A\u63D0\u4F9B\u5173\u4E8E Foo \u5C5E\u6027\u7684\u4EE3\u7801\u63D0\u793A</span>
  <span class="token comment">// \u4F46\u662F\u5F00\u53D1\u4EBA\u5458\u4E5F\u5F88\u5BB9\u6613\u5FD8\u8BB0\u6DFB\u52A0\u6240\u6709\u7684\u5C5E\u6027</span>
  <span class="token comment">// \u540C\u6837\uFF0C\u5982\u679C Foo \u88AB\u91CD\u6784\uFF0C\u8FD9\u6BB5\u4EE3\u7801\u4E5F\u53EF\u80FD\u88AB\u7834\u574F\uFF08\u4F8B\u5982\uFF0C\u4E00\u4E2A\u65B0\u7684\u5C5E\u6027\u88AB\u6DFB\u52A0\uFF09\u3002</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E5F\u4F1A\u5B58\u5728\u4E00\u4E2A\u540C\u6837\u7684\u95EE\u9898\uFF0C\u5982\u679C\u4F60\u5FD8\u8BB0\u4E86\u67D0\u4E2A\u5C5E\u6027\uFF0C\u7F16\u8BD1\u5668\u540C\u6837\u4E5F\u4E0D\u4F1A\u53D1\u51FA\u9519\u8BEF\u8B66\u544A\u3002\u4F7F\u7528\u4E00\u79CD\u66F4\u597D\u7684\u65B9\u5F0F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  bas<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> foo<span class="token operator">:</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7F16\u8BD1\u5668\u5C06\u4F1A\u63D0\u4F9B Foo \u5C5E\u6027\u7684\u4EE3\u7801\u63D0\u793A</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u67D0\u4E9B\u60C5\u666F\u4E0B\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u7684\u53D8\u91CF\uFF0C\u4F46\u81F3\u5C11\uFF0C\u4F60\u4E0D\u4F1A\u4F7F\u7528\u4E00\u4E2A\u627F\u8BFA\uFF08\u53EF\u80FD\u662F\u5047\u7684\uFF09\uFF0C\u800C\u662F\u4F9D\u9760\u7C7B\u578B\u63A8\u65AD\u6765\u68C0\u67E5\u4F60\u7684\u4EE3\u7801\u3002</p><h2 id="\u53CC\u91CD\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u53CC\u91CD\u65AD\u8A00" aria-hidden="true">#</a> \u53CC\u91CD\u65AD\u8A00</h2><p>\u7C7B\u578B\u65AD\u8A00\uFF0C\u5C3D\u7BA1\u5DF2\u7ECF\u8BC1\u660E\u4E86\u5B83\u5E76\u4E0D\u662F\u90A3\u4E48\u5B89\u5168\uFF0C\u4F46\u5B83\u4E5F\u8FD8\u662F\u6709\u7528\u6B66\u4E4B\u5730\u3002\u5982\u4E0B\u4E00\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\u4F8B\u5B50\u6240\u793A\uFF0C\u5F53\u4F7F\u7528\u8005\u4E86\u89E3\u4F20\u5165\u53C2\u6570\u66F4\u5177\u4F53\u7684\u7C7B\u578B\u65F6\uFF0C\u7C7B\u578B\u65AD\u8A00\u80FD\u6309\u9884\u671F\u5DE5\u4F5C\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> mouseEvent <span class="token operator">=</span> event <span class="token keyword">as</span> MouseEvent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u800C\uFF0C\u5982\u4E0B\u4F8B\u5B50\u4E2D\u7684\u4EE3\u7801\u5C06\u4F1A\u62A5\u9519\uFF0C\u5C3D\u7BA1\u4F7F\u7528\u8005\u5DF2\u7ECF\u4F7F\u7528\u4E86\u7C7B\u578B\u65AD\u8A00\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> element <span class="token operator">=</span> event <span class="token keyword">as</span> HTMLElement<span class="token punctuation">;</span> <span class="token comment">// Error: &#39;Event&#39; \u548C &#39;HTMLElement&#39; \u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\u90FD\u4E0D\u80FD\u8D4B\u503C\u7ED9\u53E6\u5916\u4E00\u4E2A</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u4ECD\u7136\u60F3\u4F7F\u7528\u90A3\u4E2A\u7C7B\u578B\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u53CC\u91CD\u65AD\u8A00\u3002\u9996\u5148\u65AD\u8A00\u6210\u517C\u5BB9\u6240\u6709\u7C7B\u578B\u7684 <code>any</code>\uFF0C\u7F16\u8BD1\u5668\u5C06\u4E0D\u4F1A\u62A5\u9519\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>event <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLElement<span class="token punctuation">;</span> <span class="token comment">// ok</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript-\u662F\u600E\u4E48\u786E\u5B9A\u5355\u4E2A\u65AD\u8A00\u662F\u5426\u8DB3\u591F" tabindex="-1"><a class="header-anchor" href="#typescript-\u662F\u600E\u4E48\u786E\u5B9A\u5355\u4E2A\u65AD\u8A00\u662F\u5426\u8DB3\u591F" aria-hidden="true">#</a> TypeScript \u662F\u600E\u4E48\u786E\u5B9A\u5355\u4E2A\u65AD\u8A00\u662F\u5426\u8DB3\u591F</h3><p>\u5F53 <code>S</code> \u7C7B\u578B\u662F <code>T</code> \u7C7B\u578B\u7684\u5B50\u96C6\uFF0C\u6216\u8005 <code>T</code> \u7C7B\u578B\u662F <code>S</code> \u7C7B\u578B\u7684\u5B50\u96C6\u65F6\uFF0C<code>S</code> \u80FD\u88AB\u6210\u529F\u65AD\u8A00\u6210 <code>T</code>\u3002\u8FD9\u662F\u4E3A\u4E86\u5728\u8FDB\u884C\u7C7B\u578B\u65AD\u8A00\u65F6\u63D0\u4F9B\u989D\u5916\u7684\u5B89\u5168\u6027\uFF0C\u5B8C\u5168\u6BEB\u65E0\u6839\u636E\u7684\u65AD\u8A00\u662F\u5371\u9669\u7684\uFF0C\u5982\u679C\u4F60\u60F3\u8FD9\u4E48\u505A\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>any</code>\u3002</p>`,31),o=[t];function c(i,l){return s(),a("div",null,o)}var d=n(p,[["render",c],["__file","typeAssertion.html.vue"]]);export{d as default};
