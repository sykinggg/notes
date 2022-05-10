import{_ as n,a as s}from"./app.41ff10d5.js";const a={},e=s(`<h1 id="updatemode" tabindex="-1"><a class="header-anchor" href="#updatemode" aria-hidden="true">#</a> updateMode</h1><p>\u5728react16\u4E4B\u540E\uFF0C\u52A0\u5165\u4E86\u4E00\u4E9B\u6A21\u5F0F\uFF0C\u6BD4\u5982<code>AsyncMode</code>\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>React.unstable_AsyncMode</code>\u6765\u8FDB\u884C\u8C03\u7528\uFF0C\u4F7F\u7528\u65B9\u5F0F\u7C7B\u4F3C\u7EC4\u4EF6\uFF0C\u5728\u5E94\u7528\u7684\u6700\u5916\u5C42\u5305\u88F9</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AsyncMode</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">AsyncMode</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u4E2A\u610F\u601D\u5C31\u662F\u4ED6\u5BF9\u4E8E\u6240\u6709\u7684\u5B50\u5143\u7D20\u90FD\u542F\u7528\u4E86\u5F02\u6B65\u6E32\u67D3\u3002</p><p><code>React.unstable_AsyncMode</code>\u672C\u8EAB\u53EA\u662F\u4E00\u4E2A<code>Symbol</code>\uFF0C\u5728\u9047\u5230\u8BE5\u5143\u7D20\u65F6\uFF0C<code>performUnitOfWork</code>\u4F1A\u505A\u5BF9\u5E94\u7684\u5904\u7406</p><p>\u5BF9\u4E8E<code>mode</code>\u8282\u70B9\uFF0C\u4ED6\u7684<code>mode</code>\u4F1A\u9057\u4F20\u7ED9\u4ED6\u7684\u6240\u6709\u5B50\u8282\u70B9\uFF0C\u6240\u4EE5<code>AsyncMode</code>\u7684\u5B50\u8282\u70B9\u90FD\u662F<code>AsyncMode</code>\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateMode</span><span class="token punctuation">(</span><span class="token parameter">current<span class="token punctuation">,</span> workInProgress</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> nextChildren <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasContextChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Normally we can bail out on props equality but if context has changed</span>
    <span class="token comment">// we don&#39;t do the bailout and we have to reuse existing props instead.</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nextChildren <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> workInProgress<span class="token punctuation">.</span>memoizedProps <span class="token operator">===</span> nextChildren<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">reconcileChildren</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> nextChildren<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">memoizeProps</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> nextChildren<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> workInProgress<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,7);function p(t,o){return e}var l=n(a,[["render",p],["__file","updateMode.html.vue"]]);export{l as default};
