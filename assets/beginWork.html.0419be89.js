import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.b4922828.js";const p={},o=e(`<h1 id="beginwork" tabindex="-1"><a class="header-anchor" href="#beginwork" aria-hidden="true">#</a> beginWork</h1><p>\u8FD9\u4E2A\u7248\u672C React \u4F18\u5316\u4E86\u662F\u5426\u9700\u8981\u66F4\u65B0\u7684\u9A8C\u8BC1\uFF0C\u76F4\u63A5\u653E\u5728<code>beginWork</code>\u7684\u9876\u90E8</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>
  oldProps <span class="token operator">===</span> newProps <span class="token operator">&amp;&amp;</span>
  <span class="token operator">!</span><span class="token function">hasLegacyContextChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
  <span class="token punctuation">(</span>updateExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
    updateExpirationTime <span class="token operator">&gt;</span> renderExpirationTime<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u5224\u65AD\u4E86\uFF1A</p><ul><li><p>\u524D\u540E<code>props</code>\u662F\u5426\u76F8\u7B49</p></li><li><p><code>hasLegacyContextChanged</code>\u5224\u65AD\u4E86\u662F\u5426\u6709\u8001\u7248\u672C<code>context</code>\u4F7F\u7528\u5E76\u4E14\u53D1\u751F\u53D8\u5316</p></li><li><p>\u5F53\u524D\u8282\u70B9\u662F\u5426\u9700\u8981\u66F4\u65B0\u4EE5\u53CA\u4ED6\u7684\u66F4\u65B0\u4F18\u5148\u7EA7\u662F\u5426\u5728\u5F53\u524D\u66F4\u65B0\u4F18\u5148\u7EA7\u4E4B\u524D</p></li></ul><p>\u53EA\u8981\u6EE1\u8DB3\u8FD9\u4E09\u4E2A\u6761\u4EF6\u90FD\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48 React \u5224\u65AD\u5F53\u524D\u8282\u70B9\u662F\u4E0D\u9700\u8981\u66F4\u65B0\u7684\uFF0C\u6267\u884C\u4E00\u4E9B\u5FC5\u8981\u64CD\u4F5C\u4E4B\u540E\u5C31\u53EF\u4EE5\u8DF3\u8FC7\u4E86\u3002</p><p>\u5FC5\u8981\u64CD\u4F5C\u65E0\u975E\u5C31\u662F\uFF1A</p><ul><li><p>\u5982\u679C\u63D0\u9AD8\u8001\u7248\u672C<code>context</code>\uFF0C\u8981\u5165\u6808</p></li><li><p>\u5982\u679C\u662F<code>host container</code>\u4E5F\u8981\u5982\u6808</p></li><li><p>\u7279\u6B8A\u7EC4\u4EF6\u5982<code>Suspense</code>\u7684\u7279\u6B8A\u5904\u7406</p></li></ul><p><strong>bailoutOnAlreadyFinishedWork</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> childExpirationTime <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>childExpirationTime
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    childExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
    childExpirationTime <span class="token operator">&gt;</span> renderExpirationTime
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">cloneChildFibers</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>
    <span class="token keyword">return</span> workInProgress<span class="token punctuation">.</span>child
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6839\u636E\u4E4B\u524D\u8BBE\u7F6E\u7684<code>childExpirationTime</code>\u6765\u5224\u65AD\u5B50\u6811\u662F\u5426\u9700\u8981\u66F4\u65B0\uFF0C\u5982\u679C\u5B50\u6811\u4E5F\u4E0D\u9700\u8981\u66F4\u65B0\u5219\u5C31\u76F4\u63A5<code>return null</code>\u4E86\uFF0C\u4EE3\u8868\u53EF\u4EE5\u76F4\u63A5<code>complete</code>\u4E86\u3002\u5982\u679C\u6709\u66F4\u65B0\u8FD8\u662F\u9700\u8981\u8C03\u548C\u5B50\u8282\u70B9\u3002</p><p>\u5982\u679C\u4E0D\u80FD\u8DF3\u8FC7\uFF0C\u90A3\u4E48\u5C31\u6839\u636E\u8282\u70B9\u7C7B\u578B\u8FDB\u884C\u66F4\u65B0\u4E86\uFF1A</p><ul><li><p><a href="">mountIndeterminateComponent</a></p></li><li><p><a href="">mountLazyComponent</a></p></li><li><p><a href="">updateFunctionComponent</a></p></li><li><p><a href="">updateClassComponent</a></p></li><li><p><a href="">updateHostRoot</a></p></li><li><p><a href="">updateHostComponent</a></p></li><li><p><a href="">updateHostText</a></p></li><li><p><a href="">updateSuspenseComponent</a></p></li><li><p><a href="">updatePortalComponent</a></p></li><li><p><a href="">updateForwardRef</a></p></li><li><p><a href="">updateFragment</a></p></li><li><p><a href="">updateMode</a></p></li><li><p><a href="">updateProfiler</a></p></li><li><p><a href="">updateContextProvider</a></p></li><li><p><a href="">updateContextConsumer</a></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">beginWork</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> updateExpirationTime <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>expirationTime

  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> oldProps <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedProps
    <span class="token keyword">const</span> newProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      oldProps <span class="token operator">===</span> newProps <span class="token operator">&amp;&amp;</span>
      <span class="token operator">!</span><span class="token function">hasLegacyContextChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
      <span class="token punctuation">(</span>updateExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
        updateExpirationTime <span class="token operator">&gt;</span> renderExpirationTime<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// This fiber does not have any pending work. Bailout without entering</span>
      <span class="token comment">// the begin phase. There&#39;s still some bookkeeping we that needs to be done</span>
      <span class="token comment">// in this optimized path, mostly pushing stuff onto the stack.</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span>
          <span class="token function">pushHostRootContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span>
          <span class="token function">resetHydrationState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
          <span class="token function">pushHostContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> Component <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isLegacyContextProvider</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">pushLegacyContextProvider</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span>
          <span class="token function">pushHostContainer</span><span class="token punctuation">(</span>
            workInProgress<span class="token punctuation">,</span>
            workInProgress<span class="token punctuation">.</span>stateNode<span class="token punctuation">.</span>containerInfo<span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token literal-property property">ContextProvider</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> newValue <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedProps<span class="token punctuation">.</span>value
          <span class="token function">pushProvider</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
          <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token literal-property property">Profiler</span><span class="token operator">:</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>enableProfilerTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> Update
          <span class="token punctuation">}</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token literal-property property">SuspenseComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token literal-property property">state</span><span class="token operator">:</span> SuspenseState <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState
          <span class="token keyword">const</span> didTimeout <span class="token operator">=</span> state <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> state<span class="token punctuation">.</span>didTimeout
          <span class="token keyword">if</span> <span class="token punctuation">(</span>didTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token literal-property property">primaryChildFragment</span><span class="token operator">:</span> Fiber <span class="token operator">=</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>child<span class="token operator">:</span> any<span class="token punctuation">)</span>
            <span class="token keyword">const</span> primaryChildExpirationTime <span class="token operator">=</span>
              primaryChildFragment<span class="token punctuation">.</span>childExpirationTime
            <span class="token keyword">if</span> <span class="token punctuation">(</span>
              primaryChildExpirationTime <span class="token operator">!==</span> NoWork <span class="token operator">&amp;&amp;</span>
              primaryChildExpirationTime <span class="token operator">&lt;=</span> renderExpirationTime
            <span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token function">updateSuspenseComponent</span><span class="token punctuation">(</span>
                current<span class="token punctuation">,</span>
                workInProgress<span class="token punctuation">,</span>
                renderExpirationTime<span class="token punctuation">,</span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              <span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>
                current<span class="token punctuation">,</span>
                workInProgress<span class="token punctuation">,</span>
                renderExpirationTime<span class="token punctuation">,</span>
              <span class="token punctuation">)</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> child<span class="token punctuation">.</span>sibling
              <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">null</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Before entering the begin phase, clear the expiration time.</span>
  workInProgress<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> NoWork

  <span class="token keyword">switch</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">IndeterminateComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> elementType <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>elementType
      <span class="token keyword">return</span> <span class="token function">mountIndeterminateComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        elementType<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">LazyComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> elementType <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>elementType
      <span class="token keyword">return</span> <span class="token function">mountLazyComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        elementType<span class="token punctuation">,</span>
        updateExpirationTime<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">FunctionComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> Component <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type
      <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps
      <span class="token keyword">const</span> resolvedProps <span class="token operator">=</span>
        workInProgress<span class="token punctuation">.</span>elementType <span class="token operator">===</span> Component
          <span class="token operator">?</span> unresolvedProps
          <span class="token operator">:</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span> unresolvedProps<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">updateFunctionComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        Component<span class="token punctuation">,</span>
        resolvedProps<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> Component <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type
      <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps
      <span class="token keyword">const</span> resolvedProps <span class="token operator">=</span>
        workInProgress<span class="token punctuation">.</span>elementType <span class="token operator">===</span> Component
          <span class="token operator">?</span> unresolvedProps
          <span class="token operator">:</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span> unresolvedProps<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">updateClassComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        Component<span class="token punctuation">,</span>
        resolvedProps<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateHostRoot</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateHostComponent</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostText</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateHostText</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">SuspenseComponent</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateSuspenseComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updatePortalComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ForwardRef</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> type <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type
      <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps
      <span class="token keyword">const</span> resolvedProps <span class="token operator">=</span>
        workInProgress<span class="token punctuation">.</span>elementType <span class="token operator">===</span> type
          <span class="token operator">?</span> unresolvedProps
          <span class="token operator">:</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> unresolvedProps<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">updateForwardRef</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        type<span class="token punctuation">,</span>
        resolvedProps<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Fragment</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateFragment</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Mode</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateMode</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Profiler</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateProfiler</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ContextProvider</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateContextProvider</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ContextConsumer</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateContextConsumer</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token literal-property property">MemoComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> type <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type
      <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps
      <span class="token keyword">const</span> resolvedProps <span class="token operator">=</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>type<span class="token punctuation">.</span>type<span class="token punctuation">,</span> unresolvedProps<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">updateMemoComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        type<span class="token punctuation">,</span>
        resolvedProps<span class="token punctuation">,</span>
        updateExpirationTime<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">SimpleMemoComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">updateSimpleMemoComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">,</span>
        updateExpirationTime<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">IncompleteClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> Component <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type
      <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps
      <span class="token keyword">const</span> resolvedProps <span class="token operator">=</span>
        workInProgress<span class="token punctuation">.</span>elementType <span class="token operator">===</span> Component
          <span class="token operator">?</span> unresolvedProps
          <span class="token operator">:</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span> unresolvedProps<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">mountIncompleteClassComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        Component<span class="token punctuation">,</span>
        resolvedProps<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Unknown unit of work tag. This error is likely caused by a bug in &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),t=[o];function i(l,r){return s(),a("div",null,t)}var d=n(p,[["render",i],["__file","beginWork.html.vue"]]);export{d as default};
