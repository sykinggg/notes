import{_ as p,r as t,o as i,c as l,b as e,d as s,w as d,a,e as n}from"./app.e9fd9ffa.js";const u={},r=a('<p>\u5728\u672C\u8282\u6B63\u5F0F\u5F00\u59CB\u524D\uFF0C\u8BA9\u590D\u4E60\u4E0B\u8FD9\u4E00\u7AE0\u5230\u76EE\u524D\u4E3A\u6B62\u6240\u5B66\u7684\u3002</p><p><code>Renderer</code>\u5DE5\u4F5C\u7684\u9636\u6BB5\u88AB\u79F0\u4E3A<code>commit</code>\u9636\u6BB5\u3002<code>commit</code>\u9636\u6BB5\u53EF\u4EE5\u5206\u4E3A\u4E09\u4E2A\u5B50\u9636\u6BB5\uFF1A</p><ul><li><p>before mutation\u9636\u6BB5\uFF08\u6267\u884C<code>DOM</code>\u64CD\u4F5C\u524D\uFF09</p></li><li><p>mutation\u9636\u6BB5\uFF08\u6267\u884C<code>DOM</code>\u64CD\u4F5C\uFF09</p></li><li><p>layout\u9636\u6BB5\uFF08\u6267\u884C<code>DOM</code>\u64CD\u4F5C\u540E\uFF09</p></li></ul><p>\u672C\u8282\u770B\u770B<code>before mutation\u9636\u6BB5</code>\uFF08\u6267\u884C<code>DOM</code>\u64CD\u4F5C\u524D\uFF09\u90FD\u505A\u4E86\u4EC0\u4E48\u3002</p><h2 id="\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u6982\u89C8" aria-hidden="true">#</a> \u6982\u89C8</h2><p><code>before mutation\u9636\u6BB5</code>\u7684\u4EE3\u7801\u5F88\u77ED\uFF0C\u6574\u4E2A\u8FC7\u7A0B\u5C31\u662F\u904D\u5386<code>effectList</code>\u5E76\u8C03\u7528<code>commitBeforeMutationEffects</code>\u51FD\u6570\u5904\u7406\u3002</p>',6),f=n("\u8FD9\u90E8\u5206"),k={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L2104-L2127",target:"_blank",rel:"noopener noreferrer"},v=n("\u6E90\u7801\u5728\u8FD9\u91CC"),m=n("\u3002\u4E3A\u4E86\u589E\u52A0\u53EF\u8BFB\u6027\uFF0C\u793A\u4F8B\u4EE3\u7801\u4E2D\u5220\u9664\u4E86\u4E0D\u76F8\u5173\u7684\u903B\u8F91"),h=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4FDD\u5B58\u4E4B\u524D\u7684\u4F18\u5148\u7EA7\uFF0C\u4EE5\u540C\u6B65\u4F18\u5148\u7EA7\u6267\u884C\uFF0C\u6267\u884C\u5B8C\u6BD5\u540E\u6062\u590D\u4E4B\u524D\u4F18\u5148\u7EA7</span>
<span class="token keyword">const</span> previousLanePriority <span class="token operator">=</span> <span class="token function">getCurrentUpdateLanePriority</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setCurrentUpdateLanePriority</span><span class="token punctuation">(</span>SyncLanePriority<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5C06\u5F53\u524D\u4E0A\u4E0B\u6587\u6807\u8BB0\u4E3ACommitContext\uFF0C\u4F5C\u4E3Acommit\u9636\u6BB5\u7684\u6807\u5FD7</span>
<span class="token keyword">const</span> prevExecutionContext <span class="token operator">=</span> executionContext<span class="token punctuation">;</span>
executionContext <span class="token operator">|=</span> CommitContext<span class="token punctuation">;</span>

<span class="token comment">// \u5904\u7406focus\u72B6\u6001</span>
focusedInstanceHandle <span class="token operator">=</span> <span class="token function">prepareForCommit</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>containerInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
shouldFireAfterActiveInstanceBlur <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">// beforeMutation\u9636\u6BB5\u7684\u4E3B\u51FD\u6570</span>
<span class="token function">commitBeforeMutationEffects</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">)</span><span class="token punctuation">;</span>

focusedInstanceHandle <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u70B9\u5173\u6CE8<code>beforeMutation</code>\u9636\u6BB5\u7684\u4E3B\u51FD\u6570<code>commitBeforeMutationEffects</code>\u505A\u4E86\u4EC0\u4E48\u3002</p><h2 id="commitbeforemutationeffects" tabindex="-1"><a class="header-anchor" href="#commitbeforemutationeffects" aria-hidden="true">#</a> commitBeforeMutationEffects</h2><p>\u5927\u4F53\u4EE3\u7801\u903B\u8F91\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitBeforeMutationEffects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> current <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>shouldFireAfterActiveInstanceBlur <span class="token operator">&amp;&amp;</span> focusedInstanceHandle <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...focus blur\u76F8\u5173</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> effectTag <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>effectTag<span class="token punctuation">;</span>

    <span class="token comment">// \u8C03\u7528getSnapshotBeforeUpdate</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> Snapshot<span class="token punctuation">)</span> <span class="token operator">!==</span> NoEffect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">commitBeforeMutationEffectOnFiber</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> nextEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u8C03\u5EA6useEffect</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> Passive<span class="token punctuation">)</span> <span class="token operator">!==</span> NoEffect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>rootDoesHavePassiveEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rootDoesHavePassiveEffects <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token function">scheduleCallback</span><span class="token punctuation">(</span>NormalSchedulerPriority<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">flushPassiveEffects</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6574\u4F53\u53EF\u4EE5\u5206\u4E3A\u4E09\u90E8\u5206\uFF1A</p><ol><li><p>\u5904\u7406<code>DOM\u8282\u70B9</code>\u6E32\u67D3/\u5220\u9664\u540E\u7684 <code>autoFocus</code>\u3001<code>blur</code> \u903B\u8F91\u3002</p></li><li><p>\u8C03\u7528<code>getSnapshotBeforeUpdate</code>\u751F\u547D\u5468\u671F\u94A9\u5B50\u3002</p></li><li><p>\u8C03\u5EA6<code>useEffect</code>\u3002</p></li></ol><p>\u8BB2\u89E3\u4E0B2\u30013\u4E24\u70B9\u3002</p><h2 id="\u8C03\u7528getsnapshotbeforeupdate" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528getsnapshotbeforeupdate" aria-hidden="true">#</a> \u8C03\u7528getSnapshotBeforeUpdate</h2><p><code>commitBeforeMutationEffectOnFiber</code>\u662F<code>commitBeforeMutationLifeCycles</code>\u7684\u522B\u540D\u3002</p><p>\u5728\u8BE5\u65B9\u6CD5\u5185\u4F1A\u8C03\u7528<code>getSnapshotBeforeUpdate</code>\u3002</p>`,11),b=n("\u4F60\u53EF\u4EE5\u5728"),_={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L222",target:"_blank",rel:"noopener noreferrer"},E=n("\u8FD9\u91CC"),g=n("\u770B\u5230\u8FD9\u6BB5\u903B\u8F91"),P=a("<p>\u4ECE<code>React</code>v16\u5F00\u59CB\uFF0C<code>componentWillXXX</code>\u94A9\u5B50\u524D\u589E\u52A0\u4E86<code>UNSAFE_</code>\u524D\u7F00\u3002</p><p>\u7A76\u5176\u539F\u56E0\uFF0C\u662F\u56E0\u4E3A<code>Stack Reconciler</code>\u91CD\u6784\u4E3A<code>Fiber Reconciler</code>\u540E\uFF0C<code>render\u9636\u6BB5</code>\u7684\u4EFB\u52A1\u53EF\u80FD\u4E2D\u65AD/\u91CD\u65B0\u5F00\u59CB\uFF0C\u5BF9\u5E94\u7684\u7EC4\u4EF6\u5728<code>render\u9636\u6BB5</code>\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF08\u5373<code>componentWillXXX</code>\uFF09\u53EF\u80FD\u89E6\u53D1\u591A\u6B21\u3002</p><p>\u8FD9\u79CD\u884C\u4E3A\u548C<code>React</code>v15\u4E0D\u4E00\u81F4\uFF0C\u6240\u4EE5\u6807\u8BB0\u4E3A<code>UNSAFE_</code>\u3002</p>",3),y=n("\u66F4\u8BE6\u7EC6\u7684\u89E3\u91CA\u53C2\u7167"),x={href:"https://juejin.im/post/6847902224287285255#comment",target:"_blank",rel:"noopener noreferrer"},w=n("\u8FD9\u91CC"),L=a(`<p>\u4E3A\u6B64\uFF0C<code>React</code>\u63D0\u4F9B\u4E86\u66FF\u4EE3\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50<code>getSnapshotBeforeUpdate</code>\u3002</p><p>\u53EF\u4EE5\u770B\u89C1\uFF0C<code>getSnapshotBeforeUpdate</code>\u662F\u5728<code>commit\u9636\u6BB5</code>\u5185\u7684<code>before mutation\u9636\u6BB5</code>\u8C03\u7528\u7684\uFF0C\u7531\u4E8E<code>commit\u9636\u6BB5</code>\u662F\u540C\u6B65\u7684\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u9047\u5230\u591A\u6B21\u8C03\u7528\u7684\u95EE\u9898\u3002</p><h2 id="\u8C03\u5EA6useeffect" tabindex="-1"><a class="header-anchor" href="#\u8C03\u5EA6useeffect" aria-hidden="true">#</a> \u8C03\u5EA6<code>useEffect</code></h2><p>\u5728\u8FD9\u51E0\u884C\u4EE3\u7801\u5185\uFF0C<code>scheduleCallback</code>\u65B9\u6CD5\u7531<code>Scheduler</code>\u6A21\u5757\u63D0\u4F9B\uFF0C\u7528\u4E8E\u4EE5\u67D0\u4E2A\u4F18\u5148\u7EA7\u5F02\u6B65\u8C03\u5EA6\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8C03\u5EA6useEffect</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> Passive<span class="token punctuation">)</span> <span class="token operator">!==</span> NoEffect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>rootDoesHavePassiveEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rootDoesHavePassiveEffects <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token function">scheduleCallback</span><span class="token punctuation">(</span>NormalSchedulerPriority<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u89E6\u53D1useEffect</span>
      <span class="token function">flushPassiveEffects</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6B64\u5904\uFF0C\u88AB\u5F02\u6B65\u8C03\u5EA6\u7684\u56DE\u8C03\u51FD\u6570\u5C31\u662F\u89E6\u53D1<code>useEffect</code>\u7684\u65B9\u6CD5<code>flushPassiveEffects</code>\u3002</p><p>\u63A5\u4E0B\u6765\u8BA8\u8BBA<code>useEffect</code>\u5982\u4F55\u88AB\u5F02\u6B65\u8C03\u5EA6\uFF0C\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u8981\u5F02\u6B65\uFF08\u800C\u4E0D\u662F\u540C\u6B65\uFF09\u8C03\u5EA6\u3002</p><h3 id="\u5982\u4F55\u5F02\u6B65\u8C03\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5F02\u6B65\u8C03\u5EA6" aria-hidden="true">#</a> \u5982\u4F55\u5F02\u6B65\u8C03\u5EA6</h3><p>\u5728<code>flushPassiveEffects</code>\u65B9\u6CD5\u5185\u90E8\u4F1A\u4ECE\u5168\u5C40\u53D8\u91CF<code>rootWithPendingPassiveEffects</code>\u83B7\u53D6<code>effectList</code>\u3002</p>`,9),M=n("\u5173\u4E8E"),D=e("code",null,"flushPassiveEffects",-1),B=n("\u7684\u5177\u4F53\u8BB2\u89E3\u53C2\u7167"),C=n("useEffect\u4E0EuseLayoutEffect\u4E00\u8282"),j=n("\u5728"),S={href:"/react/process/completeWork.md#effectlist",target:"_blank",rel:"noopener noreferrer"},F=n("completeWork\u4E00\u8282"),W=n("\u8BB2\u5230\uFF0C"),H=e("code",null,"effectList",-1),R=n("\u4E2D\u4FDD\u5B58\u4E86\u9700\u8981\u6267\u884C\u526F\u4F5C\u7528\u7684"),U=e("code",null,"Fiber\u8282\u70B9",-1),N=n("\u3002\u5176\u4E2D\u526F\u4F5C\u7528\u5305\u62EC"),O=a("<ul><li>\u63D2\u5165<code>DOM\u8282\u70B9</code>\uFF08Placement\uFF09</li><li>\u66F4\u65B0<code>DOM\u8282\u70B9</code>\uFF08Update\uFF09</li><li>\u5220\u9664<code>DOM\u8282\u70B9</code>\uFF08Deletion\uFF09</li></ul><p>\u9664\u6B64\u5916\uFF0C\u5F53\u4E00\u4E2A<code>FunctionComponent</code>\u542B\u6709<code>useEffect</code>\u6216<code>useLayoutEffect</code>\uFF0C\u4ED6\u5BF9\u5E94\u7684<code>Fiber\u8282\u70B9</code>\u4E5F\u4F1A\u88AB\u8D4B\u503C<code>effectTag</code>\u3002</p>",2),T=n("\u4F60\u53EF\u4EE5\u4ECE"),I={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactHookEffectTags.js",target:"_blank",rel:"noopener noreferrer"},q=n("\u8FD9\u91CC"),A=n("\u770B\u5230"),X=e("code",null,"hook",-1),V=n("\u76F8\u5173\u7684"),z=e("code",null,"effectTag",-1),G=a(`<p>\u5728<code>flushPassiveEffects</code>\u65B9\u6CD5\u5185\u90E8\u4F1A\u904D\u5386<code>rootWithPendingPassiveEffects</code>\uFF08\u5373<code>effectList</code>\uFF09\u6267\u884C<code>effect</code>\u56DE\u8C03\u51FD\u6570\u3002</p><p>\u5982\u679C\u5728\u6B64\u65F6\u76F4\u63A5\u6267\u884C\uFF0C<code>rootWithPendingPassiveEffects === null</code>\u3002</p><p>\u90A3\u4E48<code>rootWithPendingPassiveEffects</code>\u4F1A\u5728\u4F55\u65F6\u8D4B\u503C\u5462\uFF1F</p><p>\u5728\u4E0A\u4E00\u8282<code>layout\u4E4B\u540E</code>\u7684\u4EE3\u7801\u7247\u6BB5\u4E2D\u4F1A\u6839\u636E<code>rootDoesHavePassiveEffects === true?</code>\u51B3\u5B9A\u662F\u5426\u8D4B\u503C<code>rootWithPendingPassiveEffects</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> rootDidHavePassiveEffects <span class="token operator">=</span> rootDoesHavePassiveEffects<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>rootDoesHavePassiveEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  rootDoesHavePassiveEffects <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  rootWithPendingPassiveEffects <span class="token operator">=</span> root<span class="token punctuation">;</span>
  pendingPassiveEffectsLanes <span class="token operator">=</span> lanes<span class="token punctuation">;</span>
  pendingPassiveEffectsRenderPriority <span class="token operator">=</span> renderPriorityLevel<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\u6574\u4E2A<code>useEffect</code>\u5F02\u6B65\u8C03\u7528\u5206\u4E3A\u4E09\u6B65\uFF1A</p><ol><li><code>before mutation\u9636\u6BB5</code>\u5728<code>scheduleCallback</code>\u4E2D\u8C03\u5EA6<code>flushPassiveEffects</code></li><li><code>layout\u9636\u6BB5</code>\u4E4B\u540E\u5C06<code>effectList</code>\u8D4B\u503C\u7ED9<code>rootWithPendingPassiveEffects</code></li><li><code>scheduleCallback</code>\u89E6\u53D1<code>flushPassiveEffects</code>\uFF0C<code>flushPassiveEffects</code>\u5185\u90E8\u904D\u5386<code>rootWithPendingPassiveEffects</code></li></ol><h3 id="\u4E3A\u4EC0\u4E48\u9700\u8981\u5F02\u6B65\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981\u5F02\u6B65\u8C03\u7528" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u9700\u8981\u5F02\u6B65\u8C03\u7528</h3>`,8),J=n("\u6458\u5F55\u81EA"),K=e("code",null,"React",-1),Q=n("\u6587\u6863"),Y={href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#timing-of-effects",target:"_blank",rel:"noopener noreferrer"},Z=n("effect \u7684\u6267\u884C\u65F6\u673A"),$=n("\uFF1A"),nn=a('<blockquote><p>\u4E0E componentDidMount\u3001componentDidUpdate \u4E0D\u540C\u7684\u662F\uFF0C\u5728\u6D4F\u89C8\u5668\u5B8C\u6210\u5E03\u5C40\u4E0E\u7ED8\u5236\u4E4B\u540E\uFF0C\u4F20\u7ED9 useEffect \u7684\u51FD\u6570\u4F1A\u5EF6\u8FDF\u8C03\u7528\u3002\u8FD9\u4F7F\u5F97\u5B83\u9002\u7528\u4E8E\u8BB8\u591A\u5E38\u89C1\u7684\u526F\u4F5C\u7528\u573A\u666F\uFF0C\u6BD4\u5982\u8BBE\u7F6E\u8BA2\u9605\u548C\u4E8B\u4EF6\u5904\u7406\u7B49\u60C5\u51B5\uFF0C\u56E0\u6B64\u4E0D\u5E94\u5728\u51FD\u6570\u4E2D\u6267\u884C\u963B\u585E\u6D4F\u89C8\u5668\u66F4\u65B0\u5C4F\u5E55\u7684\u64CD\u4F5C\u3002</p></blockquote><p>\u53EF\u89C1\uFF0C<code>useEffect</code>\u5F02\u6B65\u6267\u884C\u7684\u539F\u56E0\u4E3B\u8981\u662F\u9632\u6B62\u540C\u6B65\u6267\u884C\u65F6\u963B\u585E\u6D4F\u89C8\u5668\u6E32\u67D3\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u7ECF\u8FC7\u672C\u8282\u5B66\u4E60\uFF0C\u77E5\u9053\u4E86\u5728<code>before mutation\u9636\u6BB5</code>\uFF0C\u4F1A\u904D\u5386<code>effectList</code>\uFF0C\u4F9D\u6B21\u6267\u884C\uFF1A</p><ol><li><p>\u5904\u7406<code>DOM\u8282\u70B9</code>\u6E32\u67D3/\u5220\u9664\u540E\u7684 <code>autoFocus</code>\u3001<code>blur</code>\u903B\u8F91</p></li><li><p>\u8C03\u7528<code>getSnapshotBeforeUpdate</code>\u751F\u547D\u5468\u671F\u94A9\u5B50</p></li><li><p>\u8C03\u5EA6<code>useEffect</code></p></li></ol>',5);function en(sn,an){const o=t("ExternalLinkIcon"),c=t("RouterLink");return i(),l("div",null,[r,e("blockquote",null,[e("p",null,[f,e("a",k,[v,s(o)]),m])]),h,e("blockquote",null,[e("p",null,[b,e("a",_,[E,s(o)]),g])]),P,e("blockquote",null,[e("p",null,[y,e("a",x,[w,s(o)])])]),L,e("p",null,[M,D,B,s(c,{to:"/react/hooks/useeffect.html"},{default:d(()=>[C]),_:1})]),e("p",null,[j,e("a",S,[F,s(o)]),W,H,R,U,N]),O,e("blockquote",null,[e("p",null,[T,e("a",I,[q,s(o)]),A,X,V,z])]),G,e("p",null,[J,K,Q,e("a",Y,[Z,s(o)]),$]),nn])}var tn=p(u,[["render",en],["__file","beforeMutation.html.vue"]]);export{tn as default};
