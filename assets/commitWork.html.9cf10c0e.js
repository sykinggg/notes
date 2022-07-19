import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.594e1059.js";const p={},t=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="commitwork" tabindex="-1"><a class="header-anchor" href="#commitwork" aria-hidden="true">#</a> commitWork</h1><h2 id="commitupdate" tabindex="-1"><a class="header-anchor" href="#commitupdate" aria-hidden="true">#</a> commitUpdate</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">commitUpdate</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">domElement</span><span class="token operator">:</span> Instance<span class="token punctuation">,</span>
  <span class="token literal-property property">updatePayload</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">oldProps</span><span class="token operator">:</span> Props<span class="token punctuation">,</span>
  <span class="token literal-property property">newProps</span><span class="token operator">:</span> Props<span class="token punctuation">,</span>
  <span class="token literal-property property">internalInstanceHandle</span><span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token function">updateFiberProps</span><span class="token punctuation">(</span>domElement<span class="token punctuation">,</span> newProps<span class="token punctuation">)</span>
  <span class="token function">updateProperties</span><span class="token punctuation">(</span>domElement<span class="token punctuation">,</span> updatePayload<span class="token punctuation">,</span> type<span class="token punctuation">,</span> oldProps<span class="token punctuation">,</span> newProps<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6839\u636E\u4E4B\u524D\u5728<code>diffProperties</code>\u8BA1\u7B97\u51FA\u6765\u7684<code>updatePayloads</code>\u6570\u7EC4\u8FDB\u884C DOM \u66F4\u65B0</p><h2 id="committextupdate" tabindex="-1"><a class="header-anchor" href="#committextupdate" aria-hidden="true">#</a> commitTextUpdate</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">commitTextUpdate</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">textInstance</span><span class="token operator">:</span> TextInstance<span class="token punctuation">,</span>
  <span class="token literal-property property">oldText</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">newText</span><span class="token operator">:</span> string<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  textInstance<span class="token punctuation">.</span>nodeValue <span class="token operator">=</span> newText
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitWork</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>supportsMutation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">commitContainer</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">switch</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">instance</span><span class="token operator">:</span> Instance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>stateNode
      <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Commit the work prepared earlier.</span>
        <span class="token keyword">const</span> newProps <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedProps
        <span class="token comment">// For hydration we reuse the update path but we treat the oldProps</span>
        <span class="token comment">// as the newProps. The updatePayload will contain the real change in</span>
        <span class="token comment">// this case.</span>
        <span class="token keyword">const</span> oldProps <span class="token operator">=</span> current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> current<span class="token punctuation">.</span>memoizedProps <span class="token operator">:</span> newProps
        <span class="token keyword">const</span> type <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>type
        <span class="token comment">// TODO: Type the updateQueue to be specific to host components.</span>
        <span class="token keyword">const</span> <span class="token literal-property property">updatePayload</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> UpdatePayload <span class="token operator">=</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>updateQueue<span class="token operator">:</span> any<span class="token punctuation">)</span>
        finishedWork<span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>updatePayload <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">commitUpdate</span><span class="token punctuation">(</span>
            instance<span class="token punctuation">,</span>
            updatePayload<span class="token punctuation">,</span>
            type<span class="token punctuation">,</span>
            oldProps<span class="token punctuation">,</span>
            newProps<span class="token punctuation">,</span>
            finishedWork<span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        finishedWork<span class="token punctuation">.</span>stateNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string">&#39;This should have a text node initialized. This error is likely &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;caused by a bug in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">const</span> <span class="token literal-property property">textInstance</span><span class="token operator">:</span> TextInstance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>stateNode
      <span class="token keyword">const</span> <span class="token literal-property property">newText</span><span class="token operator">:</span> string <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedProps
      <span class="token comment">// For hydration we reuse the update path but we treat the oldProps</span>
      <span class="token comment">// as the newProps. The updatePayload will contain the real change in</span>
      <span class="token comment">// this case.</span>
      <span class="token keyword">const</span> <span class="token literal-property property">oldText</span><span class="token operator">:</span> string <span class="token operator">=</span> current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> current<span class="token punctuation">.</span>memoizedProps <span class="token operator">:</span> newText
      <span class="token function">commitTextUpdate</span><span class="token punctuation">(</span>textInstance<span class="token punctuation">,</span> oldText<span class="token punctuation">,</span> newText<span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Profiler</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">SuspenseComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">IncompleteClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string">&#39;This unit of work tag should not have side-effects. This error is &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;likely caused by a bug in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[t];function l(c,i){return s(),a("div",null,o)}var d=n(p,[["render",l],["__file","commitWork.html.vue"]]);export{d as default};
