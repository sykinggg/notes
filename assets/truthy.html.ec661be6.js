import{e as n}from"./app.32e15244.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="truthy" tabindex="-1"><a class="header-anchor" href="#truthy" aria-hidden="true">#</a> Truthy</h1><p>JavaScript \u6709\u4E00\u4E2A <code>truthy</code> \u6982\u5FF5\uFF0C\u5373\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u4F1A\u88AB\u63A8\u65AD\u4E3A <code>true</code>\uFF0C\u4F8B\u5982\u9664 <code>0</code> \u4EE5\u5916\u7684\u4EFB\u4F55\u6570\u5B57\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5C06\u4F1A\u88AB\u63A8\u65AD\u51FA \`true\`</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Any number other than 0 is truthy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4F60\u53EF\u4EE5\u7528\u4E0B\u8868\u6765\u505A\u53C2\u8003\uFF1A</p><table><thead><tr><th><strong>Variable Type</strong></th><th><strong>When it is falsy</strong></th><th><strong>When it is truthy</strong></th></tr></thead><tbody><tr><td>boolean</td><td>false</td><td>true</td></tr><tr><td>string</td><td>&#39; &#39; (empty string)</td><td>any other string</td></tr><tr><td>number</td><td>0 NaN</td><td>any other number</td></tr><tr><td>null</td><td>always</td><td>never</td></tr><tr><td>Any other Object including empty ones like {},[]</td><td>never</td><td>always</td></tr></tbody></table><h2 id="\u660E\u786E\u7684" tabindex="-1"><a class="header-anchor" href="#\u660E\u786E\u7684" aria-hidden="true">#</a> \u660E\u786E\u7684</h2><p>\u901A\u8FC7\u64CD\u4F5C\u7B26 <code>!!</code>\uFF0C\u4F60\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u5C06\u67D0\u4E9B\u503C\u8F6C\u5316\u4E3A\u5E03\u5C14\u7C7B\u578B\u7684\u503C\uFF0C\u4F8B\u5982\uFF1A<code>!!foo</code>\uFF0C\u5B83\u4F7F\u7528\u4E86\u4E24\u6B21 <code>!</code>\uFF0C\u7B2C\u4E00\u4E2A <code>!</code> \u7528\u6765\u5C06\u5176\uFF08\u5728\u8FD9\u91CC\u662F <code>foo</code>\uFF09\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C\uFF0C\u4F46\u662F\u8FD9\u4E00\u64CD\u4F5C\u53D6\u5F97\u7684\u662F\u5176\u53D6\u53CD\u540E\u7684\u503C\uFF0C\u7B2C\u4E8C\u4E2A\u53D6\u53CD\u65F6\uFF0C\u80FD\u5F97\u5230\u771F\u6B63\u7684\u5E03\u5C14\u503C\u3002</p><p>\u8FD9\u5728\u5F88\u591A\u5730\u65B9\u90FD\u53EF\u4EE5\u770B\u5230\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Direct variables</span>
<span class="token keyword">const</span> hasName <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>name<span class="token punctuation">;</span>

<span class="token comment">// As members of objects</span>
<span class="token keyword">const</span> someObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  hasName<span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>name
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// ReactJS</span>
<span class="token punctuation">{</span>
  <span class="token operator">!</span><span class="token operator">!</span>someName <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>someName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,9);function e(p,o){return t}var l=s(a,[["render",e]]);export{l as default};
