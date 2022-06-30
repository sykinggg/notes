import{_ as s,a as n}from"./app.dce02100.js";const a={},e=n(`<h1 id="barrel" tabindex="-1"><a class="header-anchor" href="#barrel" aria-hidden="true">#</a> Barrel</h1><p>Barrel \u5C31\u50CF\u662F\u4E00\u4E2A\u5BB9\u5668\uFF0C\u5B83\u7684\u4F5C\u7528\u662F\u628A\u5206\u6563\u5728\u591A\u4E2A\u6A21\u5757\u7684\u5BFC\u51FA\u5408\u5E76\u5230\u4E00\u4E2A\u6A21\u5757\u91CC\u5BFC\u51FA\u3002\u4E00\u822C\u6765\u8BF4\uFF0Cbarrel \u672C\u8EAB\u5C31\u662F\u4E00\u4E2A\u5305\u542B\u6A21\u5757\u7684\u6587\u4EF6\uFF0C\u8FD9\u4E2A\u6A21\u5757\u505A\u7684\u5C31\u662F\u91CD\u65B0\u5BFC\u51FA\u5176\u4ED6\uFF08\u591A\u4E2A\uFF09\u6A21\u5757\u5BFC\u51FA\u7684\u4E1C\u897F\u3002</p><p>\u60F3\u8C61\u4E00\u4E0B\uFF0C\u5728\u4E00\u4E2A\u5E93\u4E2D\uFF0C\u5177\u6709\u5982\u4E0B\u7ED3\u6784\u7684\u7C7B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// demo/foo.ts</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// demo/bar.ts</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// demo/baz.ts</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Baz</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5982\u679C\u4E0D\u7528 barrel\uFF0C\u90A3\u4E48\u7528\u6237\u5728\u5F15\u5165\u65F6\u5C31\u9700\u8981\u4E09\u6761 <code>import</code> \u8BED\u53E5\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../demo/foo&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../demo/bar&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Baz <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../demo/baz&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F46\u5982\u679C\u5728\u540C\u7EA7\u6DFB\u52A0 barrel \u6587\u4EF6 <code>demo/index.ts</code>\uFF0C\u7136\u540E\u8FD9\u6837\u5B9A\u4E49\u5B83\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// demo/index.ts</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./foo&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u91CD\u65B0\u5BFC\u51FA foo \u5BFC\u51FA\u7684\u4E1C\u897F</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./bar&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u91CD\u65B0\u5BFC\u51FA bar \u5BFC\u51FA\u7684\u4E1C\u897F</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./baz&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u91CD\u65B0\u5BFC\u51FA baz \u5BFC\u51FA\u7684\u4E1C\u897F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u73B0\u5728\uFF0C\u7528\u6237\u5C31\u53EF\u4EE5\u76F4\u63A5\u7528\u4E00\u6761 <code>import</code> \u8BED\u53E5\u4ECE barrel file \u5BFC\u5165\u6240\u6709\u4E1C\u897F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Foo<span class="token punctuation">,</span> Bar<span class="token punctuation">,</span> Baz <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../demo&#39;</span><span class="token punctuation">;</span> <span class="token comment">// ../demo\uFF0C\u4F1A\u81EA\u52A8\u89E3\u6790\u6210 ../demo/index.ts</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u547D\u540D\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u5BFC\u51FA" aria-hidden="true">#</a> \u547D\u540D\u5BFC\u51FA</h2><p>\u9664\u4E86\u4F7F\u7528\u901A\u914D\u7B26 <code>*</code> \u5BFC\u51FA\u6A21\u5757\u4E2D\u7684\u6240\u6709\u4E1C\u897F\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u8981\u5BFC\u51FA\u4EC0\u4E48\u4EE5\u53CA\u5982\u4F55\u5BFC\u51FA\u3002\u8BD5\u60F3\u4E00\u4E2A\u5B58\u5728\u591A\u4E2A\u51FD\u6570\u7684 <code>baz.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// demo/foo.ts</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// demo/bar.ts</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// demo/baz.ts</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getBaz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">setBaz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5982\u679C\u4E0D\u60F3\u5728 <code>demo</code> \u6A21\u5757\u4E0A\u76F4\u63A5\u63D0\u4F9B <code>getBaz</code> \u548C <code>setBaz</code> \u63A5\u53E3\uFF0C\u4F60\u53EF\u4EE5\u628A\u5B83\u4EEC\u6302\u8F7D\u5230\u4E00\u4E2A\u53D8\u91CF\u4E0B\u3002\u4F60\u9700\u8981\u505A\u7684\u53EA\u662F\u5728 barrel file \u91CC\u5BFC\u5165\u5168\u90E8\u5E76\u547D\u540D\uFF0C\u7136\u540E\u5BFC\u51FA\u547D\u540D\u540E\u7684\u540D\u79F0\u5373\u53EF\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// demo/index.ts</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./foo&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u91CD\u65B0\u5BFC\u51FA foo \u5BFC\u51FA\u7684\u4E1C\u897F</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./bar&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u91CD\u65B0\u5BFC\u51FA bar \u5BFC\u51FA\u7684\u4E1C\u897F</span>

<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> baz <span class="token keyword">from</span> <span class="token string">&#39;./baz&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u5BFC\u5165 baz \u4E2D\u6240\u6709\u7684\u4E1C\u897F\uFF0C\u5E76\u547D\u540D\u4E3A baz</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> baz <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// \u5BFC\u51FA\u547D\u540D\u540E\u7684\u540D\u79F0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u73B0\u5728\uFF0C\u7528\u6237\u9700\u8981\u8FD9\u6837\u8C03\u7528\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Foo<span class="token punctuation">,</span> Bar<span class="token punctuation">,</span> baz <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../demo&#39;</span><span class="token punctuation">;</span> <span class="token comment">// ../demo\uFF0C\u4F1A\u81EA\u52A8\u89E3\u6790\u6210 ../demo/index.ts</span>

<span class="token comment">// \u4F7F\u7528</span>
baz<span class="token punctuation">.</span><span class="token function">getBaz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
baz<span class="token punctuation">.</span><span class="token function">setBaz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u2026\u2026</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,17);function p(t,o){return e}var l=s(a,[["render",p],["__file","barrel.html.vue"]]);export{l as default};
