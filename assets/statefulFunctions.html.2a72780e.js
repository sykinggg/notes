import{a as n}from"./app.3aebe68d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u72B6\u6001\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u51FD\u6570" aria-hidden="true">#</a> \u72B6\u6001\u51FD\u6570</h1><p>\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u6709\u4E00\u4E2A\u5171\u540C\u7279\u5F81\uFF0C\u5B83\u4EEC\u4F7F\u7528 <code>static</code> \u5173\u952E\u5B57\u6765\u589E\u52A0\u51FD\u6570\u53D8\u91CF\u7684\u751F\u547D\u5468\u671F\uFF08\u4E0D\u662F\u8303\u56F4\uFF09\uFF0C\u4F7F\u5176\u8D85\u51FA\u51FD\u6570\u7684\u8C03\u7528\u8303\u56F4\uFF0C\u5982 C \u8BED\u8A00\u4E2D\u7684\u5B9E\u73B0\uFF1A</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">called</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Called : %d&quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">called</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Called : 1</span>
    <span class="token function">called</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Called : 2</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u7531\u4E8E JavaScript\uFF08TypeScript\uFF09\u5E76\u6CA1\u6709\u9759\u6001\u51FD\u6570\u7684\u529F\u80FD\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u5305\u88F9\u7740\u672C\u5730\u53D8\u91CF\u7684\u62BD\u8C61\u53D8\u91CF\uFF0C\u5982\u4F7F\u7528 <code>class</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> called <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token keyword">class</span></span> <span class="token punctuation">{</span>
  count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token function-variable function">called</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Called : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">called</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Called : 1</span>
<span class="token function">called</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Called : 2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,5);function t(e,c){return p}var u=s(a,[["render",t]]);export{u as default};
