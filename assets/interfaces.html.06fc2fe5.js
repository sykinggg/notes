import{a as n}from"./app.3aebe68d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a> \u63A5\u53E3</h1><p>\u63A5\u53E3\u8FD0\u884C\u65F6\u7684\u5F71\u54CD\u4E3A 0\u3002\u5728 TypeScript \u63A5\u53E3\u4E2D\u6709\u5F88\u591A\u65B9\u5F0F\u6765\u58F0\u660E\u53D8\u91CF\u7684\u7ED3\u6784\u3002</p><p>\u4E0B\u9762\u4E24\u4E2A\u662F\u7B49\u6548\u7684\u58F0\u660E, \u793A\u4F8B A \u4F7F\u7528\u5185\u8054\u6CE8\u89E3\uFF0C\u793A\u4F8B B \u4F7F\u7528\u63A5\u53E3\u5F62\u5F0F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u793A\u4F8B A</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> myPoint<span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u793A\u4F8B B</span>
<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> myPoint<span class="token operator">:</span> Point<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u793A\u4F8B B \u7684\u597D\u5904\u5728\u4E8E\uFF0C\u5982\u679C\u6709\u4EBA\u521B\u5EFA\u4E86\u4E00\u4E2A\u57FA\u4E8E <code>myPoint</code> \u7684\u5E93\u6765\u6DFB\u52A0\u65B0\u6210\u5458, \u90A3\u4E48\u4ED6\u53EF\u4EE5\u8F7B\u677E\u5C06\u6B64\u6210\u5458\u6DFB\u52A0\u5230 <code>myPoint</code> \u7684\u73B0\u6709\u58F0\u660E\u4E2D:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Lib a.d.ts</span>
<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> myPoint<span class="token operator">:</span> Point

<span class="token comment">// Lib b.d.ts</span>
<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  z<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// Your code</span>
myPoint<span class="token punctuation">.</span>z <span class="token comment">// Allowed!</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>TypeScript \u63A5\u53E3\u662F\u5F00\u653E\u5F0F\u7684\uFF0C\u8FD9\u662F TypeScript \u7684\u4E00\u4E2A\u91CD\u8981\u539F\u5219\uFF0C\u5B83\u5141\u8BB8\u4F60\u4F7F\u7528\u63A5\u53E3\u6765\u6A21\u4EFF JavaScript \u7684\u53EF\u6269\u5C55\u6027\u3002</p><h2 id="\u7C7B\u53EF\u4EE5\u5B9E\u73B0\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u53EF\u4EE5\u5B9E\u73B0\u63A5\u53E3" aria-hidden="true">#</a> \u7C7B\u53EF\u4EE5\u5B9E\u73B0\u63A5\u53E3</h2><p>\u5982\u679C\u4F60\u5E0C\u671B\u5728\u7C7B\u4E2D\u4F7F\u7528\u5FC5\u987B\u8981\u88AB\u9075\u5FAA\u7684\u63A5\u53E3\uFF08\u7C7B\uFF09\u6216\u522B\u4EBA\u5B9A\u4E49\u7684\u5BF9\u8C61\u7ED3\u6784\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>implements</code> \u5173\u952E\u5B57\u6765\u786E\u4FDD\u5176\u517C\u5BB9\u6027\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyPoint</span> <span class="token keyword">implements</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// Same as Point</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u57FA\u672C\u4E0A\uFF0C\u5728 <code>implements\uFF08\u5B9E\u73B0\uFF09</code> \u5B58\u5728\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u5916\u90E8 <code>Point</code> \u63A5\u53E3\u7684\u4EFB\u4F55\u66F4\u6539\u90FD\u5C06\u5BFC\u81F4\u4EE3\u7801\u5E93\u4E2D\u7684\u7F16\u8BD1\u9519\u8BEF\uFF0C\u56E0\u6B64\u53EF\u4EE5\u8F7B\u677E\u5730\u4F7F\u5176\u4FDD\u6301\u540C\u6B65\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// New member</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyPoint</span> <span class="token keyword">implements</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token comment">// ERROR : missing member \`z\`</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u6CE8\u610F\uFF0C<code>implements</code> \u9650\u5236\u4E86\u7C7B\u5B9E\u4F8B\u7684\u7ED3\u6784\uFF0C\u5982\u4E0B\u6240\u793A:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F46\u50CF <code>foo: Point = MyPoint</code> \u8FD9\u6837\u7684\u4EE3\u7801\uFF0C\u4E0E\u5176\u5E76\u4E0D\u662F\u4E00\u56DE\u4E8B\u3002</p><h2 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h2><h3 id="\u5E76\u975E\u6BCF\u4E2A\u63A5\u53E3\u90FD\u662F\u5F88\u5BB9\u6613\u5B9E\u73B0\u7684" tabindex="-1"><a class="header-anchor" href="#\u5E76\u975E\u6BCF\u4E2A\u63A5\u53E3\u90FD\u662F\u5F88\u5BB9\u6613\u5B9E\u73B0\u7684" aria-hidden="true">#</a> \u5E76\u975E\u6BCF\u4E2A\u63A5\u53E3\u90FD\u662F\u5F88\u5BB9\u6613\u5B9E\u73B0\u7684</h3><p>\u63A5\u53E3\u65E8\u5728\u58F0\u660E JavaScript \u4E2D\u53EF\u80FD\u5B58\u5728\u7684\u4EFB\u610F\u7ED3\u6784\u3002</p><p>\u601D\u8003\u4EE5\u4E0B\u4F8B\u5B50\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>new</code> \u8C03\u7528\u67D0\u4E9B\u5185\u5BB9\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Crazy</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    hello<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F60\u53EF\u80FD\u4F1A\u6709\u4E0B\u9762\u8FD9\u6837\u7684\u4EE3\u7801\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">CrazyClass</span> <span class="token keyword">implements</span> <span class="token class-name">Crazy</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Because</span>
<span class="token keyword">const</span> crazy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CrazyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// crazy would be { hello:123 }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u63A5\u53E3\u58F0\u660E\u6240\u6709\u201C\u75AF\u72C2\u7684\u201D\u7684 JavaScript \u4EE3\u7801\uFF0C\u751A\u81F3\u53EF\u4EE5\u5B89\u5168\u5730\u5728 TypeScript \u4E2D\u4F7F\u7528\u5B83\u4EEC\u3002\u4F46\u8FD9\u5E76\u4E0D\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u4F7F\u7528 TypeScript \u7C7B\u6765\u5B9E\u73B0\u5B83\u4EEC\u3002</p>`,23);function e(t,c){return p}var r=s(a,[["render",e]]);export{r as default};
