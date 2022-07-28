import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.83201bd9.js";const t={},p=e(`<h1 id="updatecontextconsumer" tabindex="-1"><a class="header-anchor" href="#updatecontextconsumer" aria-hidden="true">#</a> updateContextConsumer</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">prepareToReadContext</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  currentlyRenderingFiber <span class="token operator">=</span> workInProgress<span class="token punctuation">;</span>
  lastContextDependency <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  lastContextWithAllBitsObserved <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// Reset the work-in-progress list</span>
  workInProgress<span class="token punctuation">.</span>firstContextDependency <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> readContext<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> ReactContext<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">observedBits</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">|</span> number <span class="token operator">|</span> boolean<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>lastContextWithAllBitsObserved <span class="token operator">===</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Nothing to do. We already observe everything in this context.</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>observedBits <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token operator">||</span> observedBits <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do not observe any updates.</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> resolvedObservedBits<span class="token punctuation">;</span> <span class="token comment">// Avoid deopting on observable arguments or heterogeneous types.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token keyword">typeof</span> observedBits <span class="token operator">!==</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">||</span>
      observedBits <span class="token operator">===</span> maxSigned31BitInt
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Observe all updates.</span>
      lastContextWithAllBitsObserved <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>context<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> ReactContext<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      resolvedObservedBits <span class="token operator">=</span> maxSigned31BitInt<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      resolvedObservedBits <span class="token operator">=</span> observedBits<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> contextItem <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">context</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>context<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> ReactContext<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">observedBits</span><span class="token operator">:</span> resolvedObservedBits<span class="token punctuation">,</span>
      <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>lastContextDependency <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        currentlyRenderingFiber <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Context.unstable_read(): Context can only be read while React is &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;rendering, e.g. inside the render method or getDerivedStateFromProps.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// This is the first dependency in the list</span>
      currentlyRenderingFiber<span class="token punctuation">.</span>firstContextDependency <span class="token operator">=</span> lastContextDependency <span class="token operator">=</span> contextItem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// Append a new context item.</span>
      lastContextDependency <span class="token operator">=</span> lastContextDependency<span class="token punctuation">.</span>next <span class="token operator">=</span> contextItem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> isPrimaryRenderer <span class="token operator">?</span> context<span class="token punctuation">.</span>_currentValue <span class="token operator">:</span> context<span class="token punctuation">.</span>_currentValue2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TODO: <code>changedBits</code>\u548C<code>observedBits</code>\u662F\u5E72\u561B\u7684</p><p>\u6700\u540E\u8C03\u7528<code>children</code>\u4F20\u5165\u65B0\u7684<code>value</code>\u5F97\u5230<code>children</code>\u8282\u70B9\u5E76<code>reconcileChildren</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateContextConsumer</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">context</span><span class="token operator">:</span> ReactContext<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
  <span class="token keyword">const</span> newProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
  <span class="token keyword">const</span> render <span class="token operator">=</span> newProps<span class="token punctuation">.</span>children<span class="token punctuation">;</span>

  <span class="token function">prepareToReadContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> newValue <span class="token operator">=</span> <span class="token function">readContext</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> newProps<span class="token punctuation">.</span>unstable_observedBits<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> newChildren<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ReactCurrentOwner<span class="token punctuation">.</span>current <span class="token operator">=</span> workInProgress<span class="token punctuation">;</span>
    ReactCurrentFiber<span class="token punctuation">.</span><span class="token function">setCurrentPhase</span><span class="token punctuation">(</span><span class="token string">&#39;render&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    newChildren <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ReactCurrentFiber<span class="token punctuation">.</span><span class="token function">setCurrentPhase</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    newChildren <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// React DevTools reads this flag.</span>
  workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> PerformedWork<span class="token punctuation">;</span>
  <span class="token function">reconcileChildren</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> newChildren<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
  workInProgress<span class="token punctuation">.</span>memoizedProps <span class="token operator">=</span> newProps<span class="token punctuation">;</span>
  <span class="token keyword">return</span> workInProgress<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(l,i){return s(),a("div",null,o)}var d=n(t,[["render",c],["__file","updateContextConsumer.html.vue"]]);export{d as default};
