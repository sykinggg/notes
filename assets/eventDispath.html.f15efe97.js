import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.83201bd9.js";const e={},p=t(`<h1 id="\u4E8B\u4EF6\u89E6\u53D1" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u89E6\u53D1" aria-hidden="true">#</a> \u4E8B\u4EF6\u89E6\u53D1</h1><p>\u4E4B\u524D\u5DF2\u7ECF\u8BB2\u4E86\u4E8B\u4EF6\u662F\u7ED1\u5B9A\u5728<code>container</code>\u4E0A\u7684\uFF0C\u90A3\u4E48\u5177\u4F53\u4E8B\u4EF6\u89E6\u53D1\u7684\u65F6\u5019\u662F\u5982\u4F55\u6D3E\u53D1\u5230\u5177\u4F53\u7684\u76D1\u542C\u8005\u4E0A\u7684\u5462\uFF1F\u8FD9\u91CC\u5C31\u5F80\u4E0B\u770B\uFF0C\u5047\u8BBE\u7ED1\u5B9A\u7684\u662F<code>dispatchInteractiveEvent</code>\u65B9\u6CD5\uFF0C\u90A3\u4E48\u6765\u770B\u770B\u4ED6\u7684\u5B9E\u73B0\u8FC7\u7A0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">dispatchInteractiveEvent</span><span class="token punctuation">(</span><span class="token parameter">topLevelType<span class="token punctuation">,</span> nativeEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">interactiveUpdates</span><span class="token punctuation">(</span>dispatchEvent<span class="token punctuation">,</span> topLevelType<span class="token punctuation">,</span> nativeEvent<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6765\u81EA&#39;events/ReactGenericBatching&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">interactiveUpdates</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">_interactiveUpdatesImpl</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token function-variable function">_interactiveUpdatesImpl</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u8C03\u7528\u4E86<code>dispatchEvent(topLevelType, nativeEvent)</code>\uFF0C<code>topLevelType</code>\u5C31\u662F<code>onClick</code>\u8FD9\u7C7B\u5F97 React \u4E2D\u5F97<code>props</code>\u540D\u5B57\uFF0C<code>nativeEvent</code>\u5C31\u662F DOM \u4E8B\u4EF6\u5BF9\u8C61\u3002\u90A3\u4E48\u6765\u770B<code>dispatchEvent</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">dispatchEvent</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">topLevelType</span><span class="token operator">:</span> DOMTopLevelEventType<span class="token punctuation">,</span>
  <span class="token literal-property property">nativeEvent</span><span class="token operator">:</span> AnyNativeEvent<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nativeEventTarget <span class="token operator">=</span> <span class="token function">getEventTarget</span><span class="token punctuation">(</span>nativeEvent<span class="token punctuation">)</span>
  <span class="token comment">// \u627E\u5230\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1\u7684\u539F\u59CB\u8282\u70B9\u6700\u8FD1\u7684Fiber\u5BF9\u8C61</span>
  <span class="token comment">// \u6839\u636E\u8BBE\u7F6E\u5728DOM\u8282\u70B9\u4E0A\u7684\`internalInstanceKey\`\u6765\u5BFB\u627E</span>
  <span class="token keyword">let</span> targetInst <span class="token operator">=</span> <span class="token function">getClosestInstanceFromNode</span><span class="token punctuation">(</span>nativeEventTarget<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    targetInst <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> targetInst<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span><span class="token function">isFiberMounted</span><span class="token punctuation">(</span>targetInst<span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    targetInst <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// pool</span>
  <span class="token keyword">const</span> bookKeeping <span class="token operator">=</span> <span class="token function">getTopLevelCallbackBookKeeping</span><span class="token punctuation">(</span>
    topLevelType<span class="token punctuation">,</span>
    nativeEvent<span class="token punctuation">,</span>
    targetInst<span class="token punctuation">,</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">batchedUpdates</span><span class="token punctuation">(</span>handleTopLevel<span class="token punctuation">,</span> bookKeeping<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token function">releaseTopLevelCallbackBookKeeping</span><span class="token punctuation">(</span>bookKeeping<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getEventTarget</span><span class="token punctuation">(</span><span class="token parameter">nativeEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> target <span class="token operator">=</span> nativeEvent<span class="token punctuation">.</span>target <span class="token operator">||</span> nativeEvent<span class="token punctuation">.</span>srcElement <span class="token operator">||</span> window

  <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>correspondingUseElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target <span class="token operator">=</span> target<span class="token punctuation">.</span>correspondingUseElement
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> target<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token constant">TEXT_NODE</span> <span class="token operator">?</span> target<span class="token punctuation">.</span>parentNode <span class="token operator">:</span> target
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u4E3B\u8981\u521B\u5EFA\u4E86<code>bookKeeping</code>\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86<strong>\u4E8B\u4EF6\u540D\u79F0\uFF0C\u539F\u59CB\u4E8B\u4EF6\u5BF9\u8C61\uFF0C\u4EE5\u53CA\u6700\u8FD1\u7684<code>Fiber</code>\u5BF9\u8C61</strong>\uFF0C\u7136\u540E\u8C03\u7528<code>batchedUpdates</code>\uFF0C\u6765\u770B\u770B\u8FD9\u4E2A\u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6765\u81EA&#39;events/ReactGenericBatching&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">batchedUpdates</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> bookkeeping</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isBatching<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>bookkeeping<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  isBatching <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">_batchedUpdatesImpl</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> bookkeeping<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    isBatching <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">const</span> controlledComponentsHavePendingUpdates <span class="token operator">=</span> <span class="token function">needsStateRestore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>controlledComponentsHavePendingUpdates<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">_flushInteractiveUpdatesImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">restoreStateIfNeeded</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">_batchedUpdatesImpl</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> bookkeeping</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>bookkeeping<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B9E\u5C31\u662F\u8BBE\u7F6E\u4E86\u4E00\u4E0B<code>isBatching</code>\u8FD9\u4E2A\u516C\u5171\u53D8\u91CF\uFF0C\u7136\u540E\u8C03\u7528<code>handleTopLevel</code>\uFF0C\u63A5\u7740\u770B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">handleTopLevel</span><span class="token punctuation">(</span><span class="token parameter">bookKeeping</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> targetInst <span class="token operator">=</span> bookKeeping<span class="token punctuation">.</span>targetInst

  <span class="token keyword">let</span> ancestor <span class="token operator">=</span> targetInst
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ancestor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      bookKeeping<span class="token punctuation">.</span>ancestors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ancestor<span class="token punctuation">)</span>
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">findRootContainerNode</span><span class="token punctuation">(</span>ancestor<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    bookKeeping<span class="token punctuation">.</span>ancestors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ancestor<span class="token punctuation">)</span>
    ancestor <span class="token operator">=</span> <span class="token function">getClosestInstanceFromNode</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>ancestor<span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> bookKeeping<span class="token punctuation">.</span>ancestors<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    targetInst <span class="token operator">=</span> bookKeeping<span class="token punctuation">.</span>ancestors<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token function">runExtractedEventsInBatch</span><span class="token punctuation">(</span>
      bookKeeping<span class="token punctuation">.</span>topLevelType<span class="token punctuation">,</span>
      targetInst<span class="token punctuation">,</span>
      bookKeeping<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">,</span>
      <span class="token function">getEventTarget</span><span class="token punctuation">(</span>bookKeeping<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">findRootContainerNode</span><span class="token punctuation">(</span><span class="token parameter">inst</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>inst<span class="token punctuation">.</span>return<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    inst <span class="token operator">=</span> inst<span class="token punctuation">.</span>return
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>inst<span class="token punctuation">.</span>tag <span class="token operator">!==</span> HostRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> inst<span class="token punctuation">.</span>stateNode<span class="token punctuation">.</span>containerInfo
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7B80\u5355\u6765\u8BF4\u5982\u679C\u76EE\u6807\u8282\u70B9\u5728<code>portal</code>\u5185\uFF0C\u90A3\u4E48\u9700\u8981\u5305\u62EC<code>portal</code>\u5916\u90E8\u7684\u8282\u70B9\uFF0C\u5BF9\u4E8E\u6BCF\u4E2A<code>ancestor</code>\uFF0C\u8C03\u7528<code>runExtractedEventsInBatch</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">runExtractedEventsInBatch</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">topLevelType</span><span class="token operator">:</span> TopLevelType<span class="token punctuation">,</span>
  <span class="token literal-property property">targetInst</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">nativeEvent</span><span class="token operator">:</span> AnyNativeEvent<span class="token punctuation">,</span>
  <span class="token literal-property property">nativeEventTarget</span><span class="token operator">:</span> EventTarget<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> events <span class="token operator">=</span> <span class="token function">extractEvents</span><span class="token punctuation">(</span>
    topLevelType<span class="token punctuation">,</span>
    targetInst<span class="token punctuation">,</span>
    nativeEvent<span class="token punctuation">,</span>
    nativeEventTarget<span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
  <span class="token function">runEventsInBatch</span><span class="token punctuation">(</span>events<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">extractEvents</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">topLevelType</span><span class="token operator">:</span> TopLevelType<span class="token punctuation">,</span>
  <span class="token literal-property property">targetInst</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">nativeEvent</span><span class="token operator">:</span> AnyNativeEvent<span class="token punctuation">,</span>
  <span class="token literal-property property">nativeEventTarget</span><span class="token operator">:</span> EventTarget<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>ReactSyntheticEvent<span class="token operator">&gt;</span> <span class="token operator">|</span> ReactSyntheticEvent <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> events <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> plugins<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Not every plugin in the ordering may be loaded at runtime.</span>
    <span class="token keyword">const</span> <span class="token literal-property property">possiblePlugin</span><span class="token operator">:</span> PluginModule<span class="token operator">&lt;</span>AnyNativeEvent<span class="token operator">&gt;</span> <span class="token operator">=</span> plugins<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>possiblePlugin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> extractedEvents <span class="token operator">=</span> possiblePlugin<span class="token punctuation">.</span><span class="token function">extractEvents</span><span class="token punctuation">(</span>
        topLevelType<span class="token punctuation">,</span>
        targetInst<span class="token punctuation">,</span>
        nativeEvent<span class="token punctuation">,</span>
        nativeEventTarget<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>extractedEvents<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        events <span class="token operator">=</span> <span class="token function">accumulateInto</span><span class="token punctuation">(</span>events<span class="token punctuation">,</span> extractedEvents<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> events
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u5F00\u59CB\u751F\u6210\u4E8B\u4EF6\uFF0C\u8C03\u7528\u6BCF\u4E2A<code>plugin</code>\u7684<code>extractEvents</code>\u65B9\u6CD5\u6765\u751F\u4EA7\u4E8B\u4EF6\uFF0C\u5E76\u8C03\u7528<code>accumulateInto</code>\u6765\u5408\u5E76\u4E8B\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> accumulateInto<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token operator">?</span><span class="token punctuation">(</span>Array<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> Array<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> Array<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> next
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      current<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
      <span class="token keyword">return</span> current
    <span class="token punctuation">}</span>
    current<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span>
    <span class="token keyword">return</span> current
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>current<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> next<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u4E3B\u8981\u662F\u5224\u65AD\u5F53\u524D\u7684<code>events</code>\u548C<code>next</code>\u5BF9\u5E94\u7684\u521A\u4EA7\u751F\u7684<code>event</code>\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u90FD\u53EF\u80FD\u662F\u5355\u4E2A\u4E8B\u4EF6\u6216\u8005\u662F\u6570\u7EC4\uFF0C\u6700\u7EC8\u76EE\u7684\u662F\u8981\u8FBE\u6210\u6570\u7EC4\u5408\u5E76\uFF0C\u6700\u7EC8\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4E8B\u4EF6\u751F\u4EA7\u597D\u4E4B\u540E\uFF0C\u8C03\u7528<code>runEventsInBatch</code>\uFF0C\u63A5\u4E0B\u53BB\u770B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">runEventsInBatch</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">events</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>ReactSyntheticEvent<span class="token operator">&gt;</span> <span class="token operator">|</span> ReactSyntheticEvent <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">simulated</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>events <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    eventQueue <span class="token operator">=</span> <span class="token function">accumulateInto</span><span class="token punctuation">(</span>eventQueue<span class="token punctuation">,</span> events<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> processingEventQueue <span class="token operator">=</span> eventQueue
  eventQueue <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>processingEventQueue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>simulated<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">forEachAccumulated</span><span class="token punctuation">(</span>
      processingEventQueue<span class="token punctuation">,</span>
      executeDispatchesAndReleaseSimulated<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">forEachAccumulated</span><span class="token punctuation">(</span>
      processingEventQueue<span class="token punctuation">,</span>
      executeDispatchesAndReleaseTopLevel<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">rethrowCaughtError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>simulated</code>\u4F20\u5165\u7684\u662F<code>false</code>\uFF0C\u6240\u4EE5\u8C03\u7528\u7684\u662F<code>executeDispatchesAndReleaseTopLevel</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> forEachAccumulated<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token operator">?</span><span class="token punctuation">(</span>Array<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">cb</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">elem</span><span class="token operator">:</span> <span class="token constant">T</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
  <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token operator">?</span>any<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>cb<span class="token punctuation">,</span> scope<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>scope<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">executeDispatchesAndReleaseTopLevel</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">executeDispatchesAndRelease</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">executeDispatchesAndRelease</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> ReactSyntheticEvent<span class="token punctuation">,</span>
  <span class="token literal-property property">simulated</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">executeDispatchesInOrder</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> simulated<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>event<span class="token punctuation">.</span><span class="token function">isPersistent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      event<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">executeDispatchesInOrder</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> simulated</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dispatchListeners <span class="token operator">=</span> event<span class="token punctuation">.</span>_dispatchListeners
  <span class="token keyword">const</span> dispatchInstances <span class="token operator">=</span> event<span class="token punctuation">.</span>_dispatchInstances
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>dispatchListeners<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> dispatchListeners<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">isPropagationStopped</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// Listeners and Instances are two parallel arrays that are always in sync.</span>
      <span class="token function">executeDispatch</span><span class="token punctuation">(</span>
        event<span class="token punctuation">,</span>
        simulated<span class="token punctuation">,</span>
        dispatchListeners<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>
        dispatchInstances<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>dispatchListeners<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">executeDispatch</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> simulated<span class="token punctuation">,</span> dispatchListeners<span class="token punctuation">,</span> dispatchInstances<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  event<span class="token punctuation">.</span>_dispatchListeners <span class="token operator">=</span> <span class="token keyword">null</span>
  event<span class="token punctuation">.</span>_dispatchInstances <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">executeDispatch</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> simulated<span class="token punctuation">,</span> listener<span class="token punctuation">,</span> inst</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> event<span class="token punctuation">.</span>type <span class="token operator">||</span> <span class="token string">&#39;unknown-event&#39;</span>
  event<span class="token punctuation">.</span>currentTarget <span class="token operator">=</span> <span class="token function">getNodeFromInstance</span><span class="token punctuation">(</span>inst<span class="token punctuation">)</span>
  <span class="token function">invokeGuardedCallbackAndCatchFirstError</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> listener<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span>
  event<span class="token punctuation">.</span>currentTarget <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>_dispatchListeners</code>\u548C<code>_dispatchInstances</code>\u662F\u5728\u751F\u6210\u4E8B\u4EF6\u5BF9\u8C61\u7684\u65F6\u5019\u8D4B\u503C\u7684\uFF0C\u5728<code>executeDispatchesInOrder</code>\u4E2D\u5C31\u6309\u7167\u987A\u5E8F\u6267\u884C\u4E86\u6240\u6709\u76D1\u542C\u7684\u4E8B\u4EF6\u4E86\u3002</p>`,18),o=[p];function c(i,l){return s(),a("div",null,o)}var k=n(e,[["render",c],["__file","eventDispath.html.vue"]]);export{k as default};