import{a as s}from"./app.3aebe68d.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},e=s(`<h1 id="\u58F0\u660E\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u7A7A\u95F4" aria-hidden="true">#</a> \u58F0\u660E\u7A7A\u95F4</h1><p>\u5728 TypeScript \u91CC\u5B58\u5728\u4E24\u79CD\u58F0\u660E\u7A7A\u95F4\uFF1A\u7C7B\u578B\u58F0\u660E\u7A7A\u95F4\u4E0E\u53D8\u91CF\u58F0\u660E\u7A7A\u95F4\u3002\u4E0B\u6587\u5C06\u5206\u522B\u8BA8\u8BBA\u8FD9\u4E24\u4E2A\u6982\u5FF5\u3002</p><h2 id="\u7C7B\u578B\u58F0\u660E\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u58F0\u660E\u7A7A\u95F4" aria-hidden="true">#</a> \u7C7B\u578B\u58F0\u660E\u7A7A\u95F4</h2><p>\u7C7B\u578B\u58F0\u660E\u7A7A\u95F4\u5305\u542B\u7528\u6765\u5F53\u505A\u7C7B\u578B\u6CE8\u89E3\u7684\u5185\u5BB9\uFF0C\u4F8B\u5982\u4E0B\u9762\u7684\u7C7B\u578B\u58F0\u660E\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Bas</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F60\u53EF\u4EE5\u5C06 <code>Foo</code>, <code>Bar</code>, <code>Bas</code> \u4F5C\u4E3A\u7C7B\u578B\u6CE8\u89E3\u4F7F\u7528\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo<span class="token operator">:</span> Foo<span class="token punctuation">;</span>
<span class="token keyword">let</span> bar<span class="token operator">:</span> Bar<span class="token punctuation">;</span>
<span class="token keyword">let</span> bas<span class="token operator">:</span> Bas<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6CE8\u610F\uFF0C\u5C3D\u7BA1\u4F60\u5B9A\u4E49\u4E86 <code>interface Bar</code>\uFF0C\u5374\u5E76\u4E0D\u80FD\u591F\u628A\u5B83\u4F5C\u4E3A\u4E00\u4E2A\u53D8\u91CF\u6765\u4F7F\u7528\uFF0C\u56E0\u4E3A\u5B83\u6CA1\u6709\u5B9A\u4E49\u5728\u53D8\u91CF\u58F0\u660E\u7A7A\u95F4\u4E2D\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> Bar<span class="token punctuation">;</span> <span class="token comment">// Error: &quot;cannot find name &#39;Bar&#39;&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u51FA\u73B0\u9519\u8BEF\u63D0\u793A\u63D0\u793A\uFF1A <code>cannot find name &#39;Bar&#39;</code> \u7684\u539F\u56E0\u662F\u540D\u79F0 <code>Bar</code> \u5E76\u672A\u5B9A\u4E49\u5728\u53D8\u91CF\u58F0\u660E\u7A7A\u95F4\u3002\u8FD9\u5C06\u5E26\u9886\u8FDB\u5165\u4E0B\u4E00\u4E2A\u4E3B\u9898 -- \u53D8\u91CF\u58F0\u660E\u7A7A\u95F4\u3002</p><h2 id="\u53D8\u91CF\u58F0\u660E\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u58F0\u660E\u7A7A\u95F4" aria-hidden="true">#</a> \u53D8\u91CF\u58F0\u660E\u7A7A\u95F4</h2><p>\u53D8\u91CF\u58F0\u660E\u7A7A\u95F4\u5305\u542B\u53EF\u7528\u4F5C\u53D8\u91CF\u7684\u5185\u5BB9\uFF0C\u5728\u4E0A\u6587\u4E2D <code>Class Foo</code> \u63D0\u4F9B\u4E86\u4E00\u4E2A\u7C7B\u578B <code>Foo</code> \u5230\u7C7B\u578B\u58F0\u660E\u7A7A\u95F4\uFF0C\u6B64\u5916\u5B83\u540C\u6837\u63D0\u4F9B\u4E86\u4E00\u4E2A\u53D8\u91CF <code>Foo</code> \u5230\u53D8\u91CF\u58F0\u660E\u7A7A\u95F4\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> someVar <span class="token operator">=</span> Foo<span class="token punctuation">;</span>
<span class="token keyword">const</span> someOtherVar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u5F88\u68D2\uFF0C\u5C24\u5176\u662F\u5F53\u4F60\u60F3\u628A\u4E00\u4E2A\u7C7B\u6765\u5F53\u505A\u53D8\u91CF\u4F20\u9012\u65F6\u3002</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u5E76\u4E0D\u80FD\u628A\u4E00\u4E9B\u5982 <code>interface</code> \u5B9A\u4E49\u7684\u5185\u5BB9\u5F53\u4F5C\u53D8\u91CF\u4F7F\u7528\u3002</p></div><p>\u4E0E\u6B64\u76F8\u4F3C\uFF0C\u4E00\u4E9B\u7528 <code>var</code> \u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u4E5F\u53EA\u80FD\u5728\u53D8\u91CF\u58F0\u660E\u7A7A\u95F4\u4F7F\u7528\uFF0C\u4E0D\u80FD\u7528\u4F5C\u7C7B\u578B\u6CE8\u89E3\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> foo<span class="token punctuation">;</span> <span class="token comment">// ERROR: &quot;cannot find name &#39;foo&#39;&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u63D0\u793A <code>ERROR: &quot;cannot find name &#39;foo&#39;&quot;</code> \u539F\u56E0\u662F\uFF0C\u540D\u79F0 foo \u6CA1\u6709\u5B9A\u4E49\u5728\u7C7B\u578B\u58F0\u660E\u7A7A\u95F4\u91CC\u3002</p>`,18);function p(o,c){return e}var l=a(n,[["render",p]]);export{l as default};
