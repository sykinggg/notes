import{_ as p,r as t,o as c,c as l,b as n,d as e,F as r,e as s,a as o}from"./app.41ff10d5.js";const i={},u=s("\u4E0A\u4E00\u7AE0"),k={href:"/react/process/completeWork.md#%E6%B5%81%E7%A8%8B%E7%BB%93%E5%B0%BE",target:"_blank",rel:"noopener noreferrer"},d=s("\u6700\u540E\u4E00\u8282"),b=s("\u4ECB\u7ECD\u4E86\uFF0C"),m=n("code",null,"commitRoot",-1),f=s("\u65B9\u6CD5\u662F"),h=n("code",null,"commit\u9636\u6BB5",-1),_=s("\u5DE5\u4F5C\u7684\u8D77\u70B9\u3002"),g=n("code",null,"fiberRootNode",-1),y=s("\u4F1A\u4F5C\u4E3A\u4F20\u53C2\u3002"),v=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">commitRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5728<code>rootFiber.firstEffect</code>\u4E0A\u4FDD\u5B58\u4E86\u4E00\u6761\u9700\u8981\u6267\u884C<code>\u526F\u4F5C\u7528</code>\u7684<code>Fiber\u8282\u70B9</code>\u7684\u5355\u5411\u94FE\u8868<code>effectList</code>\uFF0C\u8FD9\u4E9B<code>Fiber\u8282\u70B9</code>\u7684<code>updateQueue</code>\u4E2D\u4FDD\u5B58\u4E86\u53D8\u5316\u7684<code>props</code>\u3002</p><p>\u8FD9\u4E9B<code>\u526F\u4F5C\u7528</code>\u5BF9\u5E94\u7684<code>DOM\u64CD\u4F5C</code>\u5728<code>commit</code>\u9636\u6BB5\u6267\u884C\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u4E00\u4E9B\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF08\u6BD4\u5982<code>componentDidXXX</code>\uFF09\u3001<code>hook</code>\uFF08\u6BD4\u5982<code>useEffect</code>\uFF09\u9700\u8981\u5728<code>commit</code>\u9636\u6BB5\u6267\u884C\u3002</p><p><code>commit</code>\u9636\u6BB5\u7684\u4E3B\u8981\u5DE5\u4F5C\uFF08\u5373<code>Renderer</code>\u7684\u5DE5\u4F5C\u6D41\u7A0B\uFF09\u5206\u4E3A\u4E09\u90E8\u5206\uFF1A</p><ul><li><p>before mutation\u9636\u6BB5\uFF08\u6267\u884C<code>DOM</code>\u64CD\u4F5C\u524D\uFF09</p></li><li><p>mutation\u9636\u6BB5\uFF08\u6267\u884C<code>DOM</code>\u64CD\u4F5C\uFF09</p></li><li><p>layout\u9636\u6BB5\uFF08\u6267\u884C<code>DOM</code>\u64CD\u4F5C\u540E\uFF09</p></li></ul>`,6),w=s("\u4F60\u53EF\u4EE5\u4ECE"),E={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L2001",target:"_blank",rel:"noopener noreferrer"},L=s("\u8FD9\u91CC"),P=s("\u770B\u5230"),W=n("code",null,"commit",-1),D=s("\u9636\u6BB5\u7684\u5B8C\u6574\u4EE3\u7801"),R=o(`<p>\u5728<code>before mutation\u9636\u6BB5</code>\u4E4B\u524D\u548C<code>layout\u9636\u6BB5</code>\u4E4B\u540E\u8FD8\u6709\u4E00\u4E9B\u989D\u5916\u5DE5\u4F5C\uFF0C\u6D89\u53CA\u5230\u6BD4\u5982<code>useEffect</code>\u7684\u89E6\u53D1\u3001<code>\u4F18\u5148\u7EA7\u76F8\u5173</code>\u7684\u91CD\u7F6E\u3001<code>ref</code>\u7684\u7ED1\u5B9A/\u89E3\u7ED1\u3002</p><p>\u8FD9\u4E9B\u5BF9\u5F53\u524D\u5C5E\u4E8E\u8D85\u7EB2\u5185\u5BB9\uFF0C\u4E3A\u4E86\u5185\u5BB9\u5B8C\u6574\u6027\uFF0C\u5728\u8FD9\u8282\u7B80\u5355\u4ECB\u7ECD\u3002</p><h2 id="before-mutation\u4E4B\u524D" tabindex="-1"><a class="header-anchor" href="#before-mutation\u4E4B\u524D" aria-hidden="true">#</a> before mutation\u4E4B\u524D</h2><p><code>commitRootImpl</code>\u65B9\u6CD5\u4E2D\u76F4\u5230\u7B2C\u4E00\u53E5<code>if (firstEffect !== null)</code>\u4E4B\u524D\u5C5E\u4E8E<code>before mutation</code>\u4E4B\u524D\u3002</p><p>\u5927\u4F53\u770B\u4E0B\u4ED6\u505A\u7684\u5DE5\u4F5C\uFF0C\u73B0\u5728\u4F60\u8FD8\u4E0D\u9700\u8981\u7406\u89E3\u4ED6\u4EEC\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u89E6\u53D1useEffect\u56DE\u8C03\u4E0E\u5176\u4ED6\u540C\u6B65\u4EFB\u52A1\u3002\u7531\u4E8E\u8FD9\u4E9B\u4EFB\u52A1\u53EF\u80FD\u89E6\u53D1\u65B0\u7684\u6E32\u67D3\uFF0C\u6240\u4EE5\u8FD9\u91CC\u8981\u4E00\u76F4\u904D\u5386\u6267\u884C\u76F4\u5230\u6CA1\u6709\u4EFB\u52A1</span>
    <span class="token function">flushPassiveEffects</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>rootWithPendingPassiveEffects <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// root\u6307 fiberRootNode</span>
  <span class="token comment">// root.finishedWork\u6307\u5F53\u524D\u5E94\u7528\u7684rootFiber</span>
  <span class="token keyword">const</span> finishedWork <span class="token operator">=</span> root<span class="token punctuation">.</span>finishedWork<span class="token punctuation">;</span>

  <span class="token comment">// \u51E1\u662F\u53D8\u91CF\u540D\u5E26lane\u7684\u90FD\u662F\u4F18\u5148\u7EA7\u76F8\u5173</span>
  <span class="token keyword">const</span> lanes <span class="token operator">=</span> root<span class="token punctuation">.</span>finishedLanes<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>finishedLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span>

  <span class="token comment">// \u91CD\u7F6EScheduler\u7ED1\u5B9A\u7684\u56DE\u8C03\u51FD\u6570</span>
  root<span class="token punctuation">.</span>callbackNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>callbackId <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span>

  <span class="token keyword">let</span> remainingLanes <span class="token operator">=</span> <span class="token function">mergeLanes</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>lanes<span class="token punctuation">,</span> finishedWork<span class="token punctuation">.</span>childLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u91CD\u7F6E\u4F18\u5148\u7EA7\u76F8\u5173\u53D8\u91CF</span>
  <span class="token function">markRootFinished</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> remainingLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u6E05\u9664\u5DF2\u5B8C\u6210\u7684discrete updates\uFF0C\u4F8B\u5982\uFF1A\u7528\u6237\u9F20\u6807\u70B9\u51FB\u89E6\u53D1\u7684\u66F4\u65B0\u3002</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rootsWithPendingDiscreteUpdates <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token operator">!</span><span class="token function">hasDiscreteLanes</span><span class="token punctuation">(</span>remainingLanes<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
      rootsWithPendingDiscreteUpdates<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      rootsWithPendingDiscreteUpdates<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u91CD\u7F6E\u5168\u5C40\u53D8\u91CF</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> workInProgressRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    workInProgressRoot <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    workInProgress <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    workInProgressRootRenderLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5C06effectList\u8D4B\u503C\u7ED9firstEffect</span>
  <span class="token comment">// \u7531\u4E8E\u6BCF\u4E2Afiber\u7684effectList\u53EA\u5305\u542B\u4ED6\u7684\u5B50\u5B59\u8282\u70B9</span>
  <span class="token comment">// \u6240\u4EE5\u6839\u8282\u70B9\u5982\u679C\u6709effectTag\u5219\u4E0D\u4F1A\u88AB\u5305\u542B\u8FDB\u6765</span>
  <span class="token comment">// \u6240\u4EE5\u8FD9\u91CC\u5C06\u6709effectTag\u7684\u6839\u8282\u70B9\u63D2\u5165\u5230effectList\u5C3E\u90E8</span>
  <span class="token comment">// \u8FD9\u6837\u624D\u80FD\u4FDD\u8BC1\u6709effect\u7684fiber\u90FD\u5728effectList\u4E2D</span>
  <span class="token keyword">let</span> firstEffect<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>effectTag <span class="token operator">&gt;</span> PerformedWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>lastEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      finishedWork<span class="token punctuation">.</span>lastEffect<span class="token punctuation">.</span>nextEffect <span class="token operator">=</span> finishedWork<span class="token punctuation">;</span>
      firstEffect <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>firstEffect<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      firstEffect <span class="token operator">=</span> finishedWork<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6839\u8282\u70B9\u6CA1\u6709effectTag</span>
    firstEffect <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>firstEffect<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>before mutation</code>\u4E4B\u524D\u4E3B\u8981\u505A\u4E00\u4E9B\u53D8\u91CF\u8D4B\u503C\uFF0C\u72B6\u6001\u91CD\u7F6E\u7684\u5DE5\u4F5C\u3002</p><p>\u8FD9\u4E00\u957F\u4E32\u4EE3\u7801\u53EA\u9700\u8981\u5173\u6CE8\u6700\u540E\u8D4B\u503C\u7684<code>firstEffect</code>\uFF0C\u5728<code>commit</code>\u7684\u4E09\u4E2A\u5B50\u9636\u6BB5\u90FD\u4F1A\u7528\u5230\u4ED6\u3002</p><h2 id="layout\u4E4B\u540E" tabindex="-1"><a class="header-anchor" href="#layout\u4E4B\u540E" aria-hidden="true">#</a> layout\u4E4B\u540E</h2><p>\u63A5\u4E0B\u6765\u8BA9\u7B80\u5355\u770B\u4E0B<code>layout</code>\u9636\u6BB5\u6267\u884C\u5B8C\u540E\u7684\u4EE3\u7801\uFF0C\u73B0\u5728\u4F60\u8FD8\u4E0D\u9700\u8981\u7406\u89E3\u4ED6\u4EEC\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> rootDidHavePassiveEffects <span class="token operator">=</span> rootDoesHavePassiveEffects<span class="token punctuation">;</span>

<span class="token comment">// useEffect\u76F8\u5173</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>rootDoesHavePassiveEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  rootDoesHavePassiveEffects <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  rootWithPendingPassiveEffects <span class="token operator">=</span> root<span class="token punctuation">;</span>
  pendingPassiveEffectsLanes <span class="token operator">=</span> lanes<span class="token punctuation">;</span>
  pendingPassiveEffectsRenderPriority <span class="token operator">=</span> renderPriorityLevel<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u6027\u80FD\u4F18\u5316\u76F8\u5173</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>remainingLanes <span class="token operator">!==</span> NoLanes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>enableSchedulerTracing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6027\u80FD\u4F18\u5316\u76F8\u5173</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>enableSchedulerTracing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>rootDidHavePassiveEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ...\u68C0\u6D4B\u65E0\u9650\u5FAA\u73AF\u7684\u540C\u6B65\u4EFB\u52A1</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>remainingLanes <span class="token operator">===</span> SyncLane<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span> 

<span class="token comment">// \u5728\u79BB\u5F00commitRoot\u51FD\u6570\u524D\u8C03\u7528\uFF0C\u89E6\u53D1\u4E00\u6B21\u65B0\u7684\u8C03\u5EA6\uFF0C\u786E\u4FDD\u4EFB\u4F55\u9644\u52A0\u7684\u4EFB\u52A1\u88AB\u8C03\u5EA6</span>
<span class="token function">ensureRootIsScheduled</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ...\u5904\u7406\u672A\u6355\u83B7\u9519\u8BEF\u53CA\u8001\u7248\u672C\u9057\u7559\u7684\u8FB9\u754C\u95EE\u9898</span>


<span class="token comment">// \u6267\u884C\u540C\u6B65\u4EFB\u52A1\uFF0C\u8FD9\u6837\u540C\u6B65\u4EFB\u52A1\u4E0D\u9700\u8981\u7B49\u5230\u4E0B\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u518D\u6267\u884C</span>
<span class="token comment">// \u6BD4\u5982\u5728 componentDidMount \u4E2D\u6267\u884C setState \u521B\u5EFA\u7684\u66F4\u65B0\u4F1A\u5728\u8FD9\u91CC\u88AB\u540C\u6B65\u6267\u884C</span>
<span class="token comment">// \u6216useLayoutEffect</span>
<span class="token function">flushSyncCallbackQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>`,11),j=s("\u4F60\u53EF\u4EE5\u5728"),x={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L2195",target:"_blank",rel:"noopener noreferrer"},N=s("\u8FD9\u91CC"),I=s("\u770B\u5230\u8FD9\u6BB5\u4EE3\u7801"),B=n("p",null,"\u4E3B\u8981\u5305\u62EC\u4E09\u70B9\u5185\u5BB9\uFF1A",-1),F=n("ol",null,[n("li",null,[n("code",null,"useEffect"),s("\u76F8\u5173\u7684\u5904\u7406\u3002")])],-1),S=n("p",null,[s("\u4F1A\u5728\u8BB2\u89E3"),n("code",null,"layout\u9636\u6BB5"),s("\u65F6\u8BB2\u89E3\u3002")],-1),T=n("ol",{start:"2"},[n("li",null,"\u6027\u80FD\u8FFD\u8E2A\u76F8\u5173\u3002")],-1),X=s("\u6E90\u7801\u91CC\u6709\u5F88\u591A\u548C"),H=n("code",null,"interaction",-1),M=s("\u76F8\u5173\u7684\u53D8\u91CF\u3002\u4ED6\u4EEC\u90FD\u548C\u8FFD\u8E2A"),C=n("code",null,"React",-1),O=s("\u6E32\u67D3\u65F6\u95F4\u3001\u6027\u80FD\u76F8\u5173\uFF0C\u5728"),V={href:"https://zh-hans.reactjs.org/docs/profiler.html",target:"_blank",rel:"noopener noreferrer"},q=s("Profiler API"),Q=s("\u548C"),U={href:"https://github.com/facebook/react-devtools/pull/1069",target:"_blank",rel:"noopener noreferrer"},A=s("DevTools"),z=s("\u4E2D\u4F7F\u7528\u3002"),G=s("\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u770B\u5230"),J={href:"https://gist.github.com/bvaughn/8de925562903afd2e7a12554adcdda16#overview",target:"_blank",rel:"noopener noreferrer"},K=s("interaction\u7684\u5B9A\u4E49"),Y=o(`<ol start="3"><li>\u5728<code>commit</code>\u9636\u6BB5\u4F1A\u89E6\u53D1\u4E00\u4E9B\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF08\u5982 <code>componentDidXXX</code>\uFF09\u548C<code>hook</code>\uFF08\u5982<code>useLayoutEffect</code>\u3001<code>useEffect</code>\uFF09\u3002</li></ol><p>\u5728\u8FD9\u4E9B\u56DE\u8C03\u65B9\u6CD5\u4E2D\u53EF\u80FD\u89E6\u53D1\u65B0\u7684\u66F4\u65B0\uFF0C\u65B0\u7684\u66F4\u65B0\u4F1A\u5F00\u542F\u65B0\u7684<code>render-commit</code>\u6D41\u7A0B\u3002\u8003\u8651\u5982\u4E0BDemo\uFF1A</p><p>details useLayoutEffect Demo</p><p>\u5728\u8BE5Demo\u4E2D\u70B9\u51FB\u9875\u9762\u4E2D\u7684\u6570\u5B57\uFF0C\u72B6\u6001\u4F1A\u5148\u53D8\u4E3A0\uFF0C\u518D\u5728<code>useLayoutEffect</code>\u56DE\u8C03\u4E2D\u53D8\u4E3A\u968F\u673A\u6570\u3002\u4F46\u5728\u9875\u9762\u4E0A\u6570\u5B57\u4E0D\u4F1A\u53D8\u4E3A0\uFF0C\u800C\u662F\u76F4\u63A5\u53D8\u4E3A\u65B0\u7684\u968F\u673A\u6570\u3002</p><p>\u8FD9\u662F\u56E0\u4E3A<code>useLayoutEffect</code>\u4F1A\u5728<code>layout\u9636\u6BB5</code>\u540C\u6B65\u6267\u884C\u56DE\u8C03\u3002\u56DE\u8C03\u4E2D\u89E6\u53D1\u4E86\u72B6\u6001\u66F4\u65B0<code>setCount(randomNum)</code>\uFF0C\u8FD9\u4F1A\u91CD\u65B0\u8C03\u5EA6\u4E00\u4E2A\u540C\u6B65\u4EFB\u52A1\u3002</p><p>\u8BE5\u4EFB\u52A1\u4F1A\u5728\u5728\u5982\u4E0A<code>commitRoot</code>\u5012\u6570\u7B2C\u4E8C\u884C\u4EE3\u7801\u5904\u88AB\u540C\u6B65\u6267\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">flushSyncCallbackQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6240\u4EE5\u770B\u4E0D\u5230\u9875\u9762\u4E2D\u5143\u7D20\u5148\u53D8\u4E3A0\u3002</p><p>\u5982\u679C\u6362\u6210<code>useEffect</code>\u591A\u70B9\u51FB\u51E0\u6B21\u5C31\u80FD\u770B\u5230\u533A\u522B\u3002</p>`,9),Z={href:"https://codesandbox.io/s/quiet-mountain-t7roh",target:"_blank",rel:"noopener noreferrer"},$=s("useLayoutEffect\u6267\u884C\u6D41\u7A0B");function nn(sn,an){const a=t("ExternalLinkIcon");return c(),l(r,null,[n("p",null,[u,n("a",k,[d,e(a)]),b,m,f,h,_,g,y]),v,n("p",null,[w,n("a",E,[L,e(a)]),P,W,D]),R,n("blockquote",null,[n("p",null,[j,n("a",x,[N,e(a)]),I])]),B,F,S,T,n("p",null,[X,H,M,C,O,n("a",V,[q,e(a)]),Q,n("a",U,[A,e(a)]),z]),n("blockquote",null,[n("p",null,[G,n("a",J,[K,e(a)])])]),Y,n("p",null,[n("a",Z,[$,e(a)])])],64)}var on=p(i,[["render",nn],["__file","prepare.html.vue"]]);export{on as default};
