import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.c0be2e7e.js";const t={},p=e(`<h1 id="commitbeforemutationlifecycles" tabindex="-1"><a class="header-anchor" href="#commitbeforemutationlifecycles" aria-hidden="true">#</a> commitBeforeMutationLifecycles</h1><p>\u8FD9\u91CC\u5728<code>ReactFiberScheduler.js</code>\u91CC\u9762\u58F0\u660E\u4E86\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u4F46\u8FD8\u4ECE<code>ReactFiberCommitWork</code>\u5F15\u5165\u4E86\u4E00\u4E2A\u540C\u540D\u65B9\u6CD5\uFF0C\u55EF~~~</p><p>\u8FD9\u5176\u5B9E\u5C31\u662F\u8C03\u7528<code>getSnapshotBeforeUpdate</code>\uFF0C\u5728\u540E\u9762\u8C03\u7528<code>componentDidUpdate</code>\u58F0\u660E\u5468\u671F\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u4F1A\u4F20\u5165\u8FD9\u91CC\u8BA1\u7B97\u51FA\u6765\u7684\u503C\u3002</p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitBeforeMutationLifecycles</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> effectTag <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>effectTag
    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> Snapshot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">recordEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> current <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>alternate
      <span class="token function">commitBeforeMutationLifeCycles</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> nextEffect<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Don&#39;t cleanup effects yet;</span>
    <span class="token comment">// This will be done by commitAllLifeCycles()</span>
    nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">commitBeforeMutationLifeCycles</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Snapshot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> prevProps <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedProps
          <span class="token keyword">const</span> prevState <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedState
          <span class="token function">startPhaseTimer</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">,</span> <span class="token string">&#39;getSnapshotBeforeUpdate&#39;</span><span class="token punctuation">)</span>
          <span class="token keyword">const</span> instance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>stateNode
          instance<span class="token punctuation">.</span>props <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedProps
          instance<span class="token punctuation">.</span>state <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedState
          <span class="token keyword">const</span> snapshot <span class="token operator">=</span> instance<span class="token punctuation">.</span><span class="token function">getSnapshotBeforeUpdate</span><span class="token punctuation">(</span>
            prevProps<span class="token punctuation">,</span>
            prevState<span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
          instance<span class="token punctuation">.</span>__reactInternalSnapshotBeforeUpdate <span class="token operator">=</span> snapshot
          <span class="token function">stopPhaseTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostText</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">IncompleteClassComponent</span><span class="token operator">:</span>
      <span class="token comment">// Nothing to do for these component types</span>
      <span class="token keyword">return</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string">&#39;This unit of work tag should not have side-effects. This error is &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;likely caused by a bug in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}var d=n(t,[["render",c],["__file","commitBeforeMutationLifecycles.html.vue"]]);export{d as default};
