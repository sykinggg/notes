import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.5da1017a.js";const t={},p=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="commitalllifecycles" tabindex="-1"><a class="header-anchor" href="#commitalllifecycles" aria-hidden="true">#</a> commitAllLifeCycles</h1><h2 id="commitupdatequeue" tabindex="-1"><a class="header-anchor" href="#commitupdatequeue" aria-hidden="true">#</a> commitUpdateQueue</h2><p>\u5BF9\u4E8E<code>ClassComponent</code>\uFF0C\u9700\u8981\u8C03\u7528\u751F\u547D\u5468\u671F\u65B9\u6CD5\u3002\u540C\u65F6\u5BF9\u4E8E\u521B\u5EFA\u4E86\u66F4\u65B0\u7684<code>ClassComponent</code>\uFF0C\u9700\u8981\u5224\u65AD\u8C03\u7528\u7684<code>setState</code>\u662F\u5426\u6709\u56DE\u8C03\u51FD\u6570\uFF0C\u5982\u679C\u6709\u7684\u8BDD\u9700\u8981\u5728\u8FD9\u91CC\u4E00\u8D77\u8C03\u7528\u3002\u6CE8\u610F\u8FD9\u91CC\u628A<code>capturedUpdates</code>\u6302\u5230\u4E86<code>updates</code>\u4E0A\uFF0CReact \u4F1A\u5C1D\u8BD5\u628A\u6355\u83B7\u4EA7\u751F\u7684\u66F4\u65B0\u653E\u5230\u4E0B\u4E00\u6B21\u6E32\u67D3\u4E0A\uFF08\u5982\u679C\u6709\u7684\u8BDD\uFF09\uFF0C\u4F46\u662F\u5982\u679C\u672C\u8EAB\u5DF2\u7ECF\u6CA1\u6709\u66F4\u65B0\u4E86\uFF0C\u5219\u4F1A\u76F4\u63A5\u5220\u9664\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> commitUpdateQueue<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">finishedQueue</span><span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">instance</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5982\u679C\u6709\u4F4E\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\uFF0C\u5219\u8BA9\u672C\u6B21\u6E32\u67D3\u6355\u83B7\u7684\u66F4\u65B0\u653E\u5230\u4F4E\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\u4E0A\u6E32\u67D3</span>
  <span class="token comment">// \u8FD9\u91CC\u7684\u5047\u8BBE\u662F\u5F53\u524D\u8282\u70B9\u4E0A\u4F4E\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\u53EF\u80FD\u53EF\u4EE5\u5904\u7406\u6355\u83B7\u7684\u4EFB\u52A1</span>
  <span class="token comment">// \u5982\u679C\u6CA1\u6709\u4F4E\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\uFF0C\u5219\u6E05\u9664\u672C\u6B21\u6355\u83B7\u7684\u66F4\u65B0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedQueue<span class="token punctuation">.</span>firstCapturedUpdate <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Join the captured update list to the end of the normal list.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedQueue<span class="token punctuation">.</span>lastUpdate <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      finishedQueue<span class="token punctuation">.</span>lastUpdate<span class="token punctuation">.</span>next <span class="token operator">=</span> finishedQueue<span class="token punctuation">.</span>firstCapturedUpdate
      finishedQueue<span class="token punctuation">.</span>lastUpdate <span class="token operator">=</span> finishedQueue<span class="token punctuation">.</span>lastCapturedUpdate
    <span class="token punctuation">}</span>
    <span class="token comment">// Clear the list of captured updates.</span>
    finishedQueue<span class="token punctuation">.</span>firstCapturedUpdate <span class="token operator">=</span> finishedQueue<span class="token punctuation">.</span>lastCapturedUpdate <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Commit the effects</span>
  <span class="token function">commitUpdateEffects</span><span class="token punctuation">(</span>finishedQueue<span class="token punctuation">.</span>firstEffect<span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
  finishedQueue<span class="token punctuation">.</span>firstEffect <span class="token operator">=</span> finishedQueue<span class="token punctuation">.</span>lastEffect <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token function">commitUpdateEffects</span><span class="token punctuation">(</span>finishedQueue<span class="token punctuation">.</span>firstCapturedEffect<span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
  finishedQueue<span class="token punctuation">.</span>firstCapturedEffect <span class="token operator">=</span> finishedQueue<span class="token punctuation">.</span>lastCapturedEffect <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> commitUpdateEffects<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">effect</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">instance</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>effect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> callback <span class="token operator">=</span> effect<span class="token punctuation">.</span>callback
    <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      effect<span class="token punctuation">.</span>callback <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token function">callCallback</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    effect <span class="token operator">=</span> effect<span class="token punctuation">.</span>nextEffect
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitAllLifeCycles</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">finishedRoot</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span>
  <span class="token literal-property property">committedExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> effectTag <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>effectTag

    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> <span class="token punctuation">(</span>Update <span class="token operator">|</span> Callback<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">recordEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> current <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>alternate
      <span class="token function">commitLifeCycles</span><span class="token punctuation">(</span>
        finishedRoot<span class="token punctuation">,</span>
        current<span class="token punctuation">,</span>
        nextEffect<span class="token punctuation">,</span>
        committedExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> Ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">recordEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">commitAttachRef</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> next <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect
    nextEffect<span class="token punctuation">.</span>nextEffect <span class="token operator">=</span> <span class="token keyword">null</span>
    nextEffect <span class="token operator">=</span> next
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">commitLifeCycles</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">finishedRoot</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span>
  <span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">committedExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> instance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>stateNode
      <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">startPhaseTimer</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">,</span> <span class="token string">&#39;componentDidMount&#39;</span><span class="token punctuation">)</span>
          instance<span class="token punctuation">.</span>props <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedProps
          instance<span class="token punctuation">.</span>state <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedState
          instance<span class="token punctuation">.</span><span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token function">stopPhaseTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> prevProps <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedProps
          <span class="token keyword">const</span> prevState <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedState
          <span class="token function">startPhaseTimer</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">,</span> <span class="token string">&#39;componentDidUpdate&#39;</span><span class="token punctuation">)</span>
          instance<span class="token punctuation">.</span>props <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedProps
          instance<span class="token punctuation">.</span>state <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedState
          instance<span class="token punctuation">.</span><span class="token function">componentDidUpdate</span><span class="token punctuation">(</span>
            prevProps<span class="token punctuation">,</span>
            prevState<span class="token punctuation">,</span>
            instance<span class="token punctuation">.</span>__reactInternalSnapshotBeforeUpdate<span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
          <span class="token function">stopPhaseTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> updateQueue <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>updateQueue
      <span class="token keyword">if</span> <span class="token punctuation">(</span>updateQueue <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        instance<span class="token punctuation">.</span>props <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedProps
        instance<span class="token punctuation">.</span>state <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedState
        <span class="token function">commitUpdateQueue</span><span class="token punctuation">(</span>
          finishedWork<span class="token punctuation">,</span>
          updateQueue<span class="token punctuation">,</span>
          instance<span class="token punctuation">,</span>
          committedExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> updateQueue <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>updateQueue
      <span class="token keyword">if</span> <span class="token punctuation">(</span>updateQueue <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">switch</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>child<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
              instance <span class="token operator">=</span> <span class="token function">getPublicInstance</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>child<span class="token punctuation">.</span>stateNode<span class="token punctuation">)</span>
              <span class="token keyword">break</span>
            <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span>
              instance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>child<span class="token punctuation">.</span>stateNode
              <span class="token keyword">break</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">commitUpdateQueue</span><span class="token punctuation">(</span>
          finishedWork<span class="token punctuation">,</span>
          updateQueue<span class="token punctuation">,</span>
          instance<span class="token punctuation">,</span>
          committedExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">instance</span><span class="token operator">:</span> Instance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>stateNode
      <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> finishedWork<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> type <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>type
        <span class="token keyword">const</span> props <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedProps
        <span class="token function">commitMount</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> type<span class="token punctuation">,</span> props<span class="token punctuation">,</span> finishedWork<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// We have no life-cycles associated with text.</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// We have no life-cycles associated with portals.</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Profiler</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>enableProfilerTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> onRender <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedProps<span class="token punctuation">.</span>onRender

        <span class="token keyword">if</span> <span class="token punctuation">(</span>enableSchedulerTracing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">onRender</span><span class="token punctuation">(</span>
            finishedWork<span class="token punctuation">.</span>memoizedProps<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
            current <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">&#39;mount&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span>
            finishedWork<span class="token punctuation">.</span>actualDuration<span class="token punctuation">,</span>
            finishedWork<span class="token punctuation">.</span>treeBaseDuration<span class="token punctuation">,</span>
            finishedWork<span class="token punctuation">.</span>actualStartTime<span class="token punctuation">,</span>
            <span class="token function">getCommitTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            finishedRoot<span class="token punctuation">.</span>memoizedInteractions<span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">onRender</span><span class="token punctuation">(</span>
            finishedWork<span class="token punctuation">.</span>memoizedProps<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
            current <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">&#39;mount&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span>
            finishedWork<span class="token punctuation">.</span>actualDuration<span class="token punctuation">,</span>
            finishedWork<span class="token punctuation">.</span>treeBaseDuration<span class="token punctuation">,</span>
            finishedWork<span class="token punctuation">.</span>actualStartTime<span class="token punctuation">,</span>
            <span class="token function">getCommitTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">SuspenseComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token literal-property property">newState</span><span class="token operator">:</span> SuspenseState <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">alreadyCaptured</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">didTimeout</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">timedOutAt</span><span class="token operator">:</span> NoWork<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        finishedWork<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> newState
        <span class="token function">scheduleWork</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">,</span> Sync<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> <span class="token literal-property property">oldState</span><span class="token operator">:</span> SuspenseState <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span>
        current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> current<span class="token punctuation">.</span>memoizedState <span class="token operator">:</span> <span class="token keyword">null</span>
      <span class="token keyword">let</span> <span class="token literal-property property">newState</span><span class="token operator">:</span> SuspenseState <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>memoizedState
      <span class="token keyword">let</span> oldDidTimeout <span class="token operator">=</span> oldState <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> oldState<span class="token punctuation">.</span>didTimeout <span class="token operator">:</span> <span class="token boolean">false</span>

      <span class="token keyword">let</span> newDidTimeout
      <span class="token keyword">let</span> primaryChildParent <span class="token operator">=</span> finishedWork
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newState <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newDidTimeout <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        newDidTimeout <span class="token operator">=</span> newState<span class="token punctuation">.</span>didTimeout
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newDidTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          primaryChildParent <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>child
          newState<span class="token punctuation">.</span>alreadyCaptured <span class="token operator">=</span> <span class="token boolean">false</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>newState<span class="token punctuation">.</span>timedOutAt <span class="token operator">===</span> NoWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newState<span class="token punctuation">.</span>timedOutAt <span class="token operator">=</span> <span class="token function">requestCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>newDidTimeout <span class="token operator">!==</span> oldDidTimeout <span class="token operator">&amp;&amp;</span> primaryChildParent <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">hideOrUnhideAllChildren</span><span class="token punctuation">(</span>primaryChildParent<span class="token punctuation">,</span> newDidTimeout<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">IncompleteClassComponent</span><span class="token operator">:</span>
      <span class="token keyword">break</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string">&#39;This unit of work tag should not have side-effects. This error is &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;likely caused by a bug in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function i(c,l){return s(),a("div",null,o)}var d=n(t,[["render",i],["__file","commitAllLifeCycles.html.vue"]]);export{d as default};
