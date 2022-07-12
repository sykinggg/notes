import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.2c5a6db0.js";const t={},p=e(`<h1 id="updateforwardref" tabindex="-1"><a class="header-anchor" href="#updateforwardref" aria-hidden="true">#</a> updateForwardRef</h1><p>ForwardRef\u662F\u901A\u8FC7<code>React.forwardRef</code>\u521B\u5EFA\u7684\uFF0C\u8BE6\u7EC6\u7684\u8BF7\u770B<a href="">forwardRef</a></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateForwardRef</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">nextProps</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> render <span class="token operator">=</span> type<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>ref<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasLegacyContextChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Normally we can bail out on props equality but if context has changed</span>
    <span class="token comment">// we don&#39;t do the bailout and we have to reuse existing props instead.</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>memoizedProps <span class="token operator">===</span> nextProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> currentRef <span class="token operator">=</span> current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> current<span class="token punctuation">.</span>ref <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ref <span class="token operator">===</span> currentRef<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> nextChildren<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ReactCurrentOwner<span class="token punctuation">.</span>current <span class="token operator">=</span> workInProgress<span class="token punctuation">;</span>
    ReactCurrentFiber<span class="token punctuation">.</span><span class="token function">setCurrentPhase</span><span class="token punctuation">(</span><span class="token string">&#39;render&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    nextChildren <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> ref<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ReactCurrentFiber<span class="token punctuation">.</span><span class="token function">setCurrentPhase</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    nextChildren <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> ref<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">reconcileChildren</span><span class="token punctuation">(</span>
    current<span class="token punctuation">,</span>
    workInProgress<span class="token punctuation">,</span>
    nextChildren<span class="token punctuation">,</span>
    renderExpirationTime<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">memoizeProps</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> workInProgress<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(i,r){return s(),a("div",null,o)}var d=n(t,[["render",c],["__file","updateForwardRef.html.vue"]]);export{d as default};
