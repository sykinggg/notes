import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.594e1059.js";const t={},o=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="commitroot" tabindex="-1"><a class="header-anchor" href="#commitroot" aria-hidden="true">#</a> commitRoot</h1><p>\u9996\u5148\u8981\u6807\u8BB0\u4F18\u5148\u7EA7\uFF0C\u56E0\u4E3A\u6709\u4E00\u90E8\u5206\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\u5DF2\u7ECF\u88AB\u63D0\u4EA4\u4E86\uFF0C\u6240\u4EE5\u9700\u8981\u6E05\u695A\u4E00\u4E9B\u76F8\u5173\u7684\u4F18\u5148\u7EA7\u3002\u88AB\u63D0\u4EA4\u7684\u4EFB\u52A1\u5E94\u8BE5\u662F\uFF1A</p><ul><li><p>\u5B50\u6811\u4E2D\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u4EFB\u52A1</p></li><li><p>\u6216\u8005\u5916\u90E8\u6307\u5B9A\u7684\u4F18\u5148\u7EA7\uFF08<code>flushSync</code>\u6216\u8005<code>retry</code>\uFF09</p></li></ul><p>\u5982\u679C<code>RootFiber</code>\u672C\u8EAB\u4E5F\u6709\u526F\u4F5C\u7528\uFF08\u4E00\u822C\u53EA\u6709\u7B2C\u4E00\u6B21\uFF09\uFF0C\u90A3\u4E48\u4ED6\u672C\u8EAB\u4E5F\u8981\u52A0\u5230<code>effect</code>\u94FE\u4E0A\uFF0C\u653E\u5728\u6700\u540E\u3002</p><p>\u63A5\u4E0B\u53BB\u662F\u4E09\u4E2A\u63D0\u4EA4\u64CD\u4F5C\uFF0C\u5206\u522B\u662F\uFF1A</p><ul><li><p><a href="">\u63D0\u4EA4Snapshot</a></p></li><li><p><a href="">\u63D0\u4EA4HostComponent\u7684 side effect\`</a></p></li><li><p><a href="">\u63D0\u4EA4\u6240\u6709\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F</a></p></li></ul><p>\u6CE8\u610F\u8FD9\u91CC\u7528\u5230\u4E86\u4E00\u4E2A\u65B9\u6CD5<code>invokeGuardedCallback</code>\uFF0C\u53EA\u6709\u5728\u5F00\u53D1\u73AF\u5883\u624D\u4F1A\u4F7F\u7528\uFF0C\u90A3\u4E48\u4ED6\u662F\u5E72\u561B\u7684\u5462\uFF1F<a href="">\u770B\u8FD9\u91CC</a></p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitRoot</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span> <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  isWorking <span class="token operator">=</span> <span class="token boolean">true</span>
  isCommitting <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token function">startCommitTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">invariant</span><span class="token punctuation">(</span>
    root<span class="token punctuation">.</span>current <span class="token operator">!==</span> finishedWork<span class="token punctuation">,</span>
    <span class="token string">&#39;Cannot commit the same tree as before. This is probably a bug &#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;related to the return field. This error is likely caused by a bug &#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
  <span class="token keyword">const</span> committedExpirationTime <span class="token operator">=</span> root<span class="token punctuation">.</span>pendingCommitExpirationTime
  <span class="token function">invariant</span><span class="token punctuation">(</span>
    committedExpirationTime <span class="token operator">!==</span> NoWork<span class="token punctuation">,</span>
    <span class="token string">&#39;Cannot commit an incomplete root. This error is likely caused by a &#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;bug in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
  root<span class="token punctuation">.</span>pendingCommitExpirationTime <span class="token operator">=</span> NoWork

  <span class="token keyword">const</span> updateExpirationTimeBeforeCommit <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>expirationTime
  <span class="token keyword">const</span> childExpirationTimeBeforeCommit <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>childExpirationTime
  <span class="token keyword">const</span> earliestRemainingTimeBeforeCommit <span class="token operator">=</span>
    updateExpirationTimeBeforeCommit <span class="token operator">===</span> NoWork <span class="token operator">||</span>
    <span class="token punctuation">(</span>childExpirationTimeBeforeCommit <span class="token operator">!==</span> NoWork <span class="token operator">&amp;&amp;</span>
      childExpirationTimeBeforeCommit <span class="token operator">&lt;</span> updateExpirationTimeBeforeCommit<span class="token punctuation">)</span>
      <span class="token operator">?</span> childExpirationTimeBeforeCommit
      <span class="token operator">:</span> updateExpirationTimeBeforeCommit
  <span class="token function">markCommittedPriorityLevels</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> earliestRemainingTimeBeforeCommit<span class="token punctuation">)</span>

  <span class="token keyword">let</span> <span class="token literal-property property">prevInteractions</span><span class="token operator">:</span> Set<span class="token operator">&lt;</span>Interaction<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">null</span><span class="token operator">:</span> any<span class="token punctuation">)</span>

  <span class="token comment">// Reset this to null before calling lifecycles</span>
  ReactCurrentOwner<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token keyword">let</span> firstEffect
  <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>effectTag <span class="token operator">&gt;</span> PerformedWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// A fiber&#39;s effect list consists only of its children, not itself. So if</span>
    <span class="token comment">// the root has an effect, we need to add it to the end of the list. The</span>
    <span class="token comment">// resulting list is the set that would belong to the root&#39;s parent, if</span>
    <span class="token comment">// it had one; that is, all the effects in the tree including the root.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>lastEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      finishedWork<span class="token punctuation">.</span>lastEffect<span class="token punctuation">.</span>nextEffect <span class="token operator">=</span> finishedWork
      firstEffect <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>firstEffect
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      firstEffect <span class="token operator">=</span> finishedWork
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// There is no effect on the root.</span>
    firstEffect <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>firstEffect
  <span class="token punctuation">}</span>

  <span class="token function">prepareForCommit</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>containerInfo<span class="token punctuation">)</span>

  <span class="token comment">// Invoke instances of getSnapshotBeforeUpdate before mutation.</span>
  nextEffect <span class="token operator">=</span> firstEffect
  <span class="token function">startCommitSnapshotEffectsTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> didError <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> error
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invokeGuardedCallback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> commitBeforeMutationLifecycles<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasCaughtError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        didError <span class="token operator">=</span> <span class="token boolean">true</span>
        error <span class="token operator">=</span> <span class="token function">clearCaughtError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">commitBeforeMutationLifecycles</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        didError <span class="token operator">=</span> <span class="token boolean">true</span>
        error <span class="token operator">=</span> e
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>didError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Should have next effect. This error is likely caused by a bug &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token function">captureCommitPhaseError</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">,</span> error<span class="token punctuation">)</span>
      <span class="token comment">// Clean-up</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">stopCommitSnapshotEffectsTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  nextEffect <span class="token operator">=</span> firstEffect
  <span class="token function">startCommitHostEffectsTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> didError <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> error
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invokeGuardedCallback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> commitAllHostEffects<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasCaughtError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        didError <span class="token operator">=</span> <span class="token boolean">true</span>
        error <span class="token operator">=</span> <span class="token function">clearCaughtError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">commitAllHostEffects</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        didError <span class="token operator">=</span> <span class="token boolean">true</span>
        error <span class="token operator">=</span> e
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>didError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Should have next effect. This error is likely caused by a bug &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token function">captureCommitPhaseError</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">,</span> error<span class="token punctuation">)</span>
      <span class="token comment">// Clean-up</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">stopCommitHostEffectsTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">resetAfterCommit</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>containerInfo<span class="token punctuation">)</span>

  root<span class="token punctuation">.</span>current <span class="token operator">=</span> finishedWork

  nextEffect <span class="token operator">=</span> firstEffect
  <span class="token function">startCommitLifeCyclesTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> didError <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> error
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invokeGuardedCallback</span><span class="token punctuation">(</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        commitAllLifeCycles<span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        root<span class="token punctuation">,</span>
        committedExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasCaughtError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        didError <span class="token operator">=</span> <span class="token boolean">true</span>
        error <span class="token operator">=</span> <span class="token function">clearCaughtError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">commitAllLifeCycles</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> committedExpirationTime<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        didError <span class="token operator">=</span> <span class="token boolean">true</span>
        error <span class="token operator">=</span> e
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>didError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Should have next effect. This error is likely caused by a bug &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token function">captureCommitPhaseError</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">,</span> error<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  isCommitting <span class="token operator">=</span> <span class="token boolean">false</span>
  isWorking <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token function">stopCommitLifeCyclesTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">stopCommitTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">onCommitRoot</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>stateNode<span class="token punctuation">)</span>

  <span class="token keyword">const</span> updateExpirationTimeAfterCommit <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>expirationTime
  <span class="token keyword">const</span> childExpirationTimeAfterCommit <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>childExpirationTime
  <span class="token keyword">const</span> earliestRemainingTimeAfterCommit <span class="token operator">=</span>
    updateExpirationTimeAfterCommit <span class="token operator">===</span> NoWork <span class="token operator">||</span>
    <span class="token punctuation">(</span>childExpirationTimeAfterCommit <span class="token operator">!==</span> NoWork <span class="token operator">&amp;&amp;</span>
      childExpirationTimeAfterCommit <span class="token operator">&lt;</span> updateExpirationTimeAfterCommit<span class="token punctuation">)</span>
      <span class="token operator">?</span> childExpirationTimeAfterCommit
      <span class="token operator">:</span> updateExpirationTimeAfterCommit
  <span class="token keyword">if</span> <span class="token punctuation">(</span>earliestRemainingTimeAfterCommit <span class="token operator">===</span> NoWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// If there&#39;s no remaining work, we can clear the set of already failed</span>
    <span class="token comment">// error boundaries.</span>
    legacyErrorBoundariesThatAlreadyFailed <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token function">onCommit</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> earliestRemainingTimeAfterCommit<span class="token punctuation">)</span>

  <span class="token comment">// profiler \u76F8\u5173</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[o];function i(c,l){return s(),a("div",null,p)}var d=n(t,[["render",i],["__file","commitRoot.html.vue"]]);export{d as default};
