import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.83201bd9.js";const t={},p=e(`<h1 id="\u7B2C159\u9898-window-requestanimationframe" tabindex="-1"><a class="header-anchor" href="#\u7B2C159\u9898-window-requestanimationframe" aria-hidden="true">#</a> \u7B2C159\u9898\uFF1Awindow.requestAnimationFrame</h1><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><p><code>window.requestAnimationFrame()</code> \u544A\u8BC9\u6D4F\u89C8\u5668\u2014\u2014\u4F60\u5E0C\u671B\u6267\u884C\u4E00\u4E2A\u52A8\u753B\uFF0C\u5E76\u4E14\u8981\u6C42\u6D4F\u89C8\u5668\u5728\u4E0B\u6B21\u91CD\u7ED8\u4E4B\u524D\u8C03\u7528\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u66F4\u65B0\u52A8\u753B\u3002\u8BE5\u65B9\u6CD5\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8BE5\u56DE\u8C03\u51FD\u6570\u4F1A\u5728\u6D4F\u89C8\u5668\u4E0B\u4E00\u6B21\u91CD\u7ED8\u4E4B\u524D\u6267\u884C\u3002</p><p>\u4E0EsetTimeout\u76F8\u6BD4\uFF0C<code>requestAnimationFrame</code>\u6700\u5927\u7684\u4F18\u52BF\u662F\u7531\u7CFB\u7EDF\u6765\u51B3\u5B9A\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\u65F6\u673A\u3002\u5177\u4F53\u4E00\u70B9\u8BB2\uFF0C\u5982\u679C\u5C4F\u5E55\u5237\u65B0\u7387\u662F60Hz,\u90A3\u4E48\u56DE\u8C03\u51FD\u6570\u5C31\u6BCF16.7ms\u88AB\u6267\u884C\u4E00\u6B21\uFF0C\u5982\u679C\u5237\u65B0\u7387\u662F75Hz\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u65F6\u95F4\u95F4\u9694\u5C31\u53D8\u6210\u4E861000/75=13.3ms\uFF0C\u6362\u53E5\u8BDD\u8BF4\u5C31\u662F\uFF0C<code>requestAnimationFrame</code>\u7684\u6B65\u4F10\u8DDF\u7740\u7CFB\u7EDF\u7684\u5237\u65B0\u6B65\u4F10\u8D70\u3002\u5B83\u80FD\u4FDD\u8BC1\u56DE\u8C03\u51FD\u6570\u5728\u5C4F\u5E55\u6BCF\u4E00\u6B21\u7684\u5237\u65B0\u95F4\u9694\u4E2D\u53EA\u88AB\u6267\u884C\u4E00\u6B21\uFF0C\u8FD9\u6837\u5C31\u4E0D\u4F1A\u5F15\u8D77\u4E22\u5E27\u73B0\u8C61\uFF0C\u4E5F\u4E0D\u4F1A\u5BFC\u81F4\u52A8\u753B\u51FA\u73B0\u5361\u987F\u7684\u95EE\u9898\u3002</p><p>\u8FD9\u4E2AAPI\u7684\u8C03\u7528\u5F88\u7B80\u5355\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;some-element-you-want-to-animate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> start<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">step</span><span class="token punctuation">(</span><span class="token parameter">timestamp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
    start <span class="token operator">=</span> timestamp<span class="token punctuation">;</span>
  <span class="token keyword">const</span> elapsed <span class="token operator">=</span> timestamp <span class="token operator">-</span> start<span class="token punctuation">;</span>

  <span class="token comment">//\u8FD9\u91CC\u4F7F\u7528\`Math.min()\`\u786E\u4FDD\u5143\u7D20\u521A\u597D\u505C\u5728200px\u7684\u4F4D\u7F6E\u3002</span>
  element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token string">&#39;translateX(&#39;</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">*</span> elapsed<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px)&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>elapsed <span class="token operator">&lt;</span> <span class="token number">2000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5728\u4E24\u79D2\u540E\u505C\u6B62\u52A8\u753B</span>
    window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9664\u6B64\u4E4B\u5916\uFF0C<code>requestAnimationFrame</code>\u8FD8\u6709\u4EE5\u4E0B\u4E24\u4E2A\u4F18\u52BF\uFF1A</p><ul><li><p><code>CPU\u8282\u80FD</code>\uFF1A\u4F7F\u7528setTimeout\u5B9E\u73B0\u7684\u52A8\u753B\uFF0C\u5F53\u9875\u9762\u88AB\u9690\u85CF\u6216\u6700\u5C0F\u5316\u65F6\uFF0CsetTimeout \u4ECD\u7136\u5728\u540E\u53F0\u6267\u884C\u52A8\u753B\u4EFB\u52A1\uFF0C\u7531\u4E8E\u6B64\u65F6\u9875\u9762\u5904\u4E8E\u4E0D\u53EF\u89C1\u6216\u4E0D\u53EF\u7528\u72B6\u6001\uFF0C\u5237\u65B0\u52A8\u753B\u662F\u6CA1\u6709\u610F\u4E49\u7684\uFF0C\u5B8C\u5168\u662F\u6D6A\u8D39CPU\u8D44\u6E90\u3002\u800CrequestAnimationFrame\u5219\u5B8C\u5168\u4E0D\u540C\uFF0C\u5F53\u9875\u9762\u5904\u7406\u672A\u6FC0\u6D3B\u7684\u72B6\u6001\u4E0B\uFF0C\u8BE5\u9875\u9762\u7684\u5C4F\u5E55\u5237\u65B0\u4EFB\u52A1\u4E5F\u4F1A\u88AB\u7CFB\u7EDF\u6682\u505C\uFF0C\u56E0\u6B64\u8DDF\u7740\u7CFB\u7EDF\u6B65\u4F10\u8D70\u7684requestAnimationFrame\u4E5F\u4F1A\u505C\u6B62\u6E32\u67D3\uFF0C\u5F53\u9875\u9762\u88AB\u6FC0\u6D3B\u65F6\uFF0C\u52A8\u753B\u5C31\u4ECE\u4E0A\u6B21\u505C\u7559\u7684\u5730\u65B9\u7EE7\u7EED\u6267\u884C\uFF0C\u6709\u6548\u8282\u7701\u4E86CPU\u5F00\u9500\u3002</p></li><li><p><code>\u51FD\u6570\u8282\u6D41</code>\uFF1A\u5728\u9AD8\u9891\u7387\u4E8B\u4EF6(resize,scroll\u7B49)\u4E2D\uFF0C\u4E3A\u4E86\u9632\u6B62\u5728\u4E00\u4E2A\u5237\u65B0\u95F4\u9694\u5185\u53D1\u751F\u591A\u6B21\u51FD\u6570\u6267\u884C\uFF0C\u4F7F\u7528requestAnimationFrame\u53EF\u4FDD\u8BC1\u6BCF\u4E2A\u5237\u65B0\u95F4\u9694\u5185\uFF0C\u51FD\u6570\u53EA\u88AB\u6267\u884C\u4E00\u6B21\uFF0C\u8FD9\u6837\u65E2\u80FD\u4FDD\u8BC1\u6D41\u7545\u6027\uFF0C\u4E5F\u80FD\u66F4\u597D\u7684\u8282\u7701\u51FD\u6570\u6267\u884C\u7684\u5F00\u9500\u3002\u4E00\u4E2A\u5237\u65B0\u95F4\u9694\u5185\u51FD\u6570\u6267\u884C\u591A\u6B21\u65F6\u6CA1\u6709\u610F\u4E49\u7684\uFF0C\u56E0\u4E3A\u663E\u793A\u5668\u6BCF16.7ms\u5237\u65B0\u4E00\u6B21\uFF0C\u591A\u6B21\u7ED8\u5236\u5E76\u4E0D\u4F1A\u5728\u5C4F\u5E55\u4E0A\u4F53\u73B0\u51FA\u6765\u3002</p></li></ul>`,8),o=[p];function i(c,l){return s(),a("div",null,o)}var d=n(t,[["render",i],["__file","150.html.vue"]]);export{d as default};
