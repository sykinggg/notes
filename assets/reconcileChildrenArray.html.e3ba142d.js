import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.492d0a9d.js";const p={},t=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="reconcilechildrenarray" tabindex="-1"><a class="header-anchor" href="#reconcilechildrenarray" aria-hidden="true">#</a> reconcileChildrenArray</h1><p>\u5728<code>beginWork</code>\u9636\u6BB5\uFF0C<code>updateHostComponent</code>\u7684\u65F6\u5019\u4F1A\u6267\u884C<code>reconcileChildFibers</code>\u6216\u8005<code>mountChildFibers</code>(\u521D\u59CB\u5316\u7684\u65F6\u5019)\uFF0C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5176\u5B9E\u662F\u4E00\u6837\u7684\uFF0C\u552F\u4E00\u4E0D\u540C\u662F\u53C8\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u4E0D\u4E00\u6837\uFF1A<code>shouldTrackSideEffects</code>\u3002</p><ul><li><p><code>reconcileChildFibers</code>\u7684\u65F6\u5019\u662F<code>true</code></p></li><li><p><code>mountChildFibers</code>\u7684\u65F6\u5019\u662F<code>false</code></p></li></ul><p>\u7136\u540E\u5982\u679C\u53D1\u73B0<code>newChild</code>\u662F\u6570\u7EC4\uFF0C\u90A3\u4E48\u5C31\u662F\u6267\u884C<code>reconcileChildrenArray</code>\uFF0C\u90A3\u4E48\u8FD9\u65F6\u5019<code>key</code>\u5C31\u53EF\u4EE5\u53D1\u6325\u4F5C\u7528\u3002\u63A5\u4E0B\u53BB\u5C31\u6765\u89E3\u6790\u4E00\u4E0B\u8FD9\u4E2A\u51FD\u6570</p><p>\u9996\u5148\u8FDB\u884C\u4E0D\u6B63\u786E\u7684<code>key</code>\u7684\u8B66\u544A\uFF0C\u7136\u540E\u58F0\u660E\u4E86\u4E00\u5806\u53D8\u91CF\uFF0C\u770B\u540D\u5B57\u5C31\u5927\u81F4\u80FD\u77E5\u9053\u610F\u601D\uFF0C\u7136\u540E\u8FDB\u5165\u4E00\u4E2A\u5FAA\u73AF\uFF0C\u5728\u5FAA\u73AF\u91CC\u9762\u8C03\u7528\u4E86<code>updateSlot</code>\uFF0C\u4E0B\u4E00\u4E2A\u533A\u5757\u4F1A\u8BE6\u7EC6\u8BB2\u89E3\u8FD9\u4E2A\u51FD\u6570\uFF0C\u8FD9\u91CC\u53EA\u9700\u8981\u77E5\u9053\u8FD9\u4E2A\u51FD\u6570\u5BF9\u6BD4\u65B0\u65E7<code>children</code>\u76F8\u540C<code>index</code>\u7684\u5BF9\u8C61\u7684<code>key</code>\u662F\u5426\u76F8\u7B49\uFF0C\u5982\u679C\u662F\uFF0C\u8FD4\u56DE\u8BE5\u5BF9\u8C61\uFF0C\u5982\u679C\u4E0D\u662F\uFF0C\u8FD4\u56DE<code>null</code>\u3002\u4E5F\u5C31\u662F\u9010\u4E2A\u5BF9\u6BD4\u4E24\u4E2A\u6570\u7EC4\uFF0C\u5982\u679C\u76F8\u7B49\u5219\u7EE7\u7EED\uFF0C\u5982\u679C\u6709\u4EFB\u4F55\u4E00\u4E2A\u4E0D\u7B49\uFF0C\u90A3\u4E48\u8DF3\u51FA\u5FAA\u73AF\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\u8FD9\u4E2A\u5FAA\u73AF\u627E\u5230\u4E86\u7B2C\u4E00\u4E2A\u4E0D\u60F3\u7B49\u7684\u4F4D\u5B50\uFF0C\u8FD9\u4E2A\u65F6\u5019<code>oldFiber</code>\u5C31\u662F\u90A3\u4E2A\u4E0D\u7B49\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>newIdx <span class="token operator">===</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> oldFiber<span class="token punctuation">)</span>
  <span class="token keyword">return</span> resultingFirstChild
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5FAA\u73AF\u4E4B\u540E\uFF0C\u5FAA\u73AF\u957F\u5EA6\u548C\u65B0\u7684<code>children</code>\u7684\u957F\u5EA6\u76F8\u7B49\uFF0C\u8BF4\u660E\u65B0\u7684\u6570\u7EC4\u53EF\u80FD<strong>\u5C0F\u4E8E\u7B49\u4E8E</strong>\u8001\u6570\u7EC4\uFF0C\u90A3\u4E48\u6709\u53EF\u80FD\u8001\u6570\u7EC4\u540E\u9762\u6709\u5269\u4F59\u7684\uFF0C\u6240\u4EE5\u8981\u5220\u9664\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>oldFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> newIdx <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> newIdx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newFiber <span class="token operator">=</span> <span class="token function">createChild</span><span class="token punctuation">(</span>
      returnFiber<span class="token punctuation">,</span>
      newChildren<span class="token punctuation">[</span>newIdx<span class="token punctuation">]</span><span class="token punctuation">,</span>
      expirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>newFiber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span>
    lastPlacedIndex <span class="token operator">=</span> <span class="token function">placeChild</span><span class="token punctuation">(</span>newFiber<span class="token punctuation">,</span> lastPlacedIndex<span class="token punctuation">,</span> newIdx<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>previousNewFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      resultingFirstChild <span class="token operator">=</span> newFiber
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      previousNewFiber<span class="token punctuation">.</span>sibling <span class="token operator">=</span> newFiber
    <span class="token punctuation">}</span>
    previousNewFiber <span class="token operator">=</span> newFiber
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> resultingFirstChild
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5FAA\u73AF\u4E4B\u540E\u6CA1\u6709<code>oldFiber</code>\u4E5F\u5C31\u662F\u6240\u6709\u8001\u7684\u6570\u7EC4\u90FD\u53EF\u4EE5\u590D\u7528\uFF0C\u800C\u5269\u4F59\u7684\u65B0\u6570\u7EC4\u7684\u9879\u5C31\u53EF\u4EE5\u4F5C\u4E3A\u65B0\u7684\u9879\u76F4\u63A5\u63D2\u5165\u8FDB\u53BB\u4E86\u3002</p><p>\u6700\u540E\u5982\u679C\u4E0A\u9762\u4E24\u79CD\u60C5\u51B5\u90FD\u4E0D\u7B26\u5408\uFF0C\u5219\u4EE3\u8868\u6709\u53EF\u80FD\u987A\u5E8F\u6362\u4E86\u6216\u8005\u6709\u65B0\u589E\u6216\u5220\u51CF\uFF0C\u6240\u4EE5\u5C31\u521B\u5EFA\u4E00\u4E2A<code>existingChildren</code>\u4EE3\u8868\u6240\u6709\u5269\u4F59\u6CA1\u6709\u5339\u914D\u6389\u7684\u8282\u70B9\uFF0C\u7136\u540E\u65B0\u7684\u6570\u7EC4\u6839\u636E<code>key</code>\u4ECE\u8FD9\u4E2A map \u91CC\u9762\u67E5\u627E\uFF0C\u5982\u679C\u6709\u5219\u590D\u7528\uFF0C\u6CA1\u6709\u5219\u65B0\u5EFA\u3002</p><p>\u6700\u540E\u8001\u7684\u6CA1\u6709\u5339\u914D\u5230\u7684\u90FD\u8981\u5220\u9664\u3002</p><p><strong>\u53EF\u4EE5\u770B\u5230<code>key</code>\u7684\u4F5C\u7528\u4E3B\u8981\u5C31\u662F\u590D\u7528\u4E4B\u524D\u7684\u8282\u70B9\u7684\uFF0C\u6CA1\u6709<code>key</code>\u7684\u8BDD\uFF0C\u6570\u7EC4\u5C31\u8981\u6BCF\u6B21\u5168\u90E8\u5220\u9664\u7136\u540E\u91CD\u65B0\u521B\u5EFA\uFF0C\u5F00\u9500\u5C31\u975E\u5E38\u5927</strong></p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reconcileChildrenArray</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">currentFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">newChildren</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// First, validate keys.</span>
    <span class="token keyword">let</span> knownKeys <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> child <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      knownKeys <span class="token operator">=</span> <span class="token function">warnOnInvalidKey</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> knownKeys<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> <span class="token literal-property property">resultingFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">let</span> <span class="token literal-property property">previousNewFiber</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token keyword">let</span> oldFiber <span class="token operator">=</span> currentFirstChild
  <span class="token keyword">let</span> lastPlacedIndex <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> newIdx <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> nextOldFiber <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> oldFiber <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> newIdx <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> newIdx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldFiber<span class="token punctuation">.</span>index <span class="token operator">&gt;</span> newIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nextOldFiber <span class="token operator">=</span> oldFiber
      oldFiber <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      nextOldFiber <span class="token operator">=</span> oldFiber<span class="token punctuation">.</span>sibling
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> newFiber <span class="token operator">=</span> <span class="token function">updateSlot</span><span class="token punctuation">(</span>
      returnFiber<span class="token punctuation">,</span>
      oldFiber<span class="token punctuation">,</span>
      newChildren<span class="token punctuation">[</span>newIdx<span class="token punctuation">]</span><span class="token punctuation">,</span>
      expirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>oldFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        oldFiber <span class="token operator">=</span> nextOldFiber
      <span class="token punctuation">}</span>
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>shouldTrackSideEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>oldFiber <span class="token operator">&amp;&amp;</span> newFiber<span class="token punctuation">.</span>alternate <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">deleteChild</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> oldFiber<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    lastPlacedIndex <span class="token operator">=</span> <span class="token function">placeChild</span><span class="token punctuation">(</span>newFiber<span class="token punctuation">,</span> lastPlacedIndex<span class="token punctuation">,</span> newIdx<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>previousNewFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      resultingFirstChild <span class="token operator">=</span> newFiber
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      previousNewFiber<span class="token punctuation">.</span>sibling <span class="token operator">=</span> newFiber
    <span class="token punctuation">}</span>
    previousNewFiber <span class="token operator">=</span> newFiber
    oldFiber <span class="token operator">=</span> nextOldFiber
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>newIdx <span class="token operator">===</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> oldFiber<span class="token punctuation">)</span>
    <span class="token keyword">return</span> resultingFirstChild
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>oldFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> newIdx <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> newIdx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newFiber <span class="token operator">=</span> <span class="token function">createChild</span><span class="token punctuation">(</span>
        returnFiber<span class="token punctuation">,</span>
        newChildren<span class="token punctuation">[</span>newIdx<span class="token punctuation">]</span><span class="token punctuation">,</span>
        expirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>newFiber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span>
      <span class="token punctuation">}</span>
      lastPlacedIndex <span class="token operator">=</span> <span class="token function">placeChild</span><span class="token punctuation">(</span>newFiber<span class="token punctuation">,</span> lastPlacedIndex<span class="token punctuation">,</span> newIdx<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>previousNewFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        resultingFirstChild <span class="token operator">=</span> newFiber
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        previousNewFiber<span class="token punctuation">.</span>sibling <span class="token operator">=</span> newFiber
      <span class="token punctuation">}</span>
      previousNewFiber <span class="token operator">=</span> newFiber
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resultingFirstChild
  <span class="token punctuation">}</span>

  <span class="token comment">// Add all children to a key map for quick lookups.</span>
  <span class="token keyword">const</span> existingChildren <span class="token operator">=</span> <span class="token function">mapRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> oldFiber<span class="token punctuation">)</span>

  <span class="token comment">// Keep scanning and use the map to restore deleted items as moves.</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> newIdx <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> newIdx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newFiber <span class="token operator">=</span> <span class="token function">updateFromMap</span><span class="token punctuation">(</span>
      existingChildren<span class="token punctuation">,</span>
      returnFiber<span class="token punctuation">,</span>
      newIdx<span class="token punctuation">,</span>
      newChildren<span class="token punctuation">[</span>newIdx<span class="token punctuation">]</span><span class="token punctuation">,</span>
      expirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newFiber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>shouldTrackSideEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newFiber<span class="token punctuation">.</span>alternate <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          existingChildren<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>newFiber<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> newIdx <span class="token operator">:</span> newFiber<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      lastPlacedIndex <span class="token operator">=</span> <span class="token function">placeChild</span><span class="token punctuation">(</span>newFiber<span class="token punctuation">,</span> lastPlacedIndex<span class="token punctuation">,</span> newIdx<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>previousNewFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        resultingFirstChild <span class="token operator">=</span> newFiber
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        previousNewFiber<span class="token punctuation">.</span>sibling <span class="token operator">=</span> newFiber
      <span class="token punctuation">}</span>
      previousNewFiber <span class="token operator">=</span> newFiber
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>shouldTrackSideEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    existingChildren<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=&gt;</span> <span class="token function">deleteChild</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> resultingFirstChild
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="updateslot" tabindex="-1"><a class="header-anchor" href="#updateslot" aria-hidden="true">#</a> updateSlot</h1><p>\u5982\u679C\u662F\u6587\u5B57\u8282\u70B9\u5C31\u6CA1\u5565\u597D\u8BF4\u7684\uFF0C\u6BD5\u7ADF\u6587\u5B57\u8282\u70B9\u4E0D\u5B58\u5728<code>key</code></p><p>\u5982\u679C\u662F\u5BF9\u8C61\uFF0C\u5C31\u662F\u6839\u636E\u4E0D\u540C\u7684\u7C7B\u578B\u6267\u884C\u4E0D\u540C\u7684<code>update</code></p><p>\u5982\u679C\u662F\u6570\u7EC4\uFF0C\u5219\u4F5C\u4E3A<code>fragment</code>\u6765\u5904\u7406</p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateSlot</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">oldFiber</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">newChild</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token comment">// Update the fiber if the keys match, otherwise return null.</span>

  <span class="token keyword">const</span> key <span class="token operator">=</span> oldFiber <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> oldFiber<span class="token punctuation">.</span>key <span class="token operator">:</span> <span class="token keyword">null</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Text nodes don&#39;t have keys. If the previous node is implicitly keyed</span>
    <span class="token comment">// we can continue to replace it without aborting even if it is not a text</span>
    <span class="token comment">// node.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">updateTextNode</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> oldFiber<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> newChild<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> newChild <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>newChild<span class="token punctuation">.</span>$$<span class="token keyword">typeof</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token constant">REACT_ELEMENT_TYPE</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newChild<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>newChild<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token constant">REACT_FRAGMENT_TYPE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">updateFragment</span><span class="token punctuation">(</span>
              returnFiber<span class="token punctuation">,</span>
              oldFiber<span class="token punctuation">,</span>
              newChild<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span>
              expirationTime<span class="token punctuation">,</span>
              key<span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> <span class="token function">updateElement</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> oldFiber<span class="token punctuation">,</span> newChild<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">case</span> <span class="token constant">REACT_PORTAL_TYPE</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newChild<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">updatePortal</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> oldFiber<span class="token punctuation">,</span> newChild<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>newChild<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">getIteratorFn</span><span class="token punctuation">(</span>newChild<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token function">updateFragment</span><span class="token punctuation">(</span>
        returnFiber<span class="token punctuation">,</span>
        oldFiber<span class="token punctuation">,</span>
        newChild<span class="token punctuation">,</span>
        expirationTime<span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">throwOnInvalidObjectType</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> newChild<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),o=[t];function i(l,c){return s(),a("div",null,o)}var d=n(p,[["render",i],["__file","reconcileChildrenArray.html.vue"]]);export{d as default};
