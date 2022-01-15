import{a as n}from"./app.78b6d3a3.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<p>\u5728\u4E86\u89E3\u5176\u4ED6<code>hook</code>\u7684\u5B9E\u73B0\u540E\uFF0C\u7406\u89E3<code>useMemo</code>\u4E0E<code>useCallback</code>\u7684\u5B9E\u73B0\u975E\u5E38\u5BB9\u6613\u3002</p><p>\u672C\u8282\u4EE5<code>mount</code>\u4E0E<code>update</code>\u4E24\u79CD\u60C5\u51B5\u5206\u522B\u8BA8\u8BBA\u8FD9\u4E24\u4E2A<code>hook</code>\u3002</p><h2 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> mount</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> mountMemo<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token function-variable function">nextCreate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  <span class="token literal-property property">deps</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521B\u5EFA\u5E76\u8FD4\u56DE\u5F53\u524Dhook</span>
  <span class="token keyword">const</span> hook <span class="token operator">=</span> <span class="token function">mountWorkInProgressHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> nextDeps <span class="token operator">=</span> deps <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> deps<span class="token punctuation">;</span>
  <span class="token comment">// \u8BA1\u7B97value</span>
  <span class="token keyword">const</span> nextValue <span class="token operator">=</span> <span class="token function">nextCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5C06value\u4E0Edeps\u4FDD\u5B58\u5728hook.memoizedState</span>
  hook<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> <span class="token punctuation">[</span>nextValue<span class="token punctuation">,</span> nextDeps<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> nextValue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> mountCallback<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>callback<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">deps</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521B\u5EFA\u5E76\u8FD4\u56DE\u5F53\u524Dhook</span>
  <span class="token keyword">const</span> hook <span class="token operator">=</span> <span class="token function">mountWorkInProgressHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> nextDeps <span class="token operator">=</span> deps <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> deps<span class="token punctuation">;</span>
  <span class="token comment">// \u5C06value\u4E0Edeps\u4FDD\u5B58\u5728hook.memoizedState</span>
  hook<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> <span class="token punctuation">[</span>callback<span class="token punctuation">,</span> nextDeps<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> callback<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4E0E<code>mountCallback</code>\u8FD9\u4E24\u4E2A\u552F\u4E00\u7684\u533A\u522B\u662F</p><ul><li><p><code>mountMemo</code>\u4F1A\u5C06<code>\u56DE\u8C03\u51FD\u6570</code>(nextCreate)\u7684\u6267\u884C\u7ED3\u679C\u4F5C\u4E3A<code>value</code>\u4FDD\u5B58</p></li><li><p><code>mountCallback</code>\u4F1A\u4FDD\u5B58<code>\u56DE\u8C03\u51FD\u6570</code>\u679C\u4F5C\u4E3A<code>value</code>\u4FDD\u5B58</p></li></ul><h2 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> updateMemo<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token function-variable function">nextCreate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  <span class="token literal-property property">deps</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD4\u56DE\u5F53\u524Dhook</span>
  <span class="token keyword">const</span> hook <span class="token operator">=</span> <span class="token function">updateWorkInProgressHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> nextDeps <span class="token operator">=</span> deps <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> deps<span class="token punctuation">;</span>
  <span class="token keyword">const</span> prevState <span class="token operator">=</span> hook<span class="token punctuation">.</span>memoizedState<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>prevState <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextDeps <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">prevDeps</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> prevState<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// \u5224\u65ADupdate\u524D\u540Evalue\u662F\u5426\u53D8\u5316</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">areHookInputsEqual</span><span class="token punctuation">(</span>nextDeps<span class="token punctuation">,</span> prevDeps<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u672A\u53D8\u5316</span>
        <span class="token keyword">return</span> prevState<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u53D8\u5316\uFF0C\u91CD\u65B0\u8BA1\u7B97value</span>
  <span class="token keyword">const</span> nextValue <span class="token operator">=</span> <span class="token function">nextCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hook<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> <span class="token punctuation">[</span>nextValue<span class="token punctuation">,</span> nextDeps<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> nextValue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> updateCallback<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>callback<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">deps</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD4\u56DE\u5F53\u524Dhook</span>
  <span class="token keyword">const</span> hook <span class="token operator">=</span> <span class="token function">updateWorkInProgressHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> nextDeps <span class="token operator">=</span> deps <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> deps<span class="token punctuation">;</span>
  <span class="token keyword">const</span> prevState <span class="token operator">=</span> hook<span class="token punctuation">.</span>memoizedState<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>prevState <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextDeps <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">prevDeps</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> prevState<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// \u5224\u65ADupdate\u524D\u540Evalue\u662F\u5426\u53D8\u5316</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">areHookInputsEqual</span><span class="token punctuation">(</span>nextDeps<span class="token punctuation">,</span> prevDeps<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u672A\u53D8\u5316</span>
        <span class="token keyword">return</span> prevState<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u53D8\u5316\uFF0C\u5C06\u65B0\u7684callback\u4F5C\u4E3Avalue</span>
  hook<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> <span class="token punctuation">[</span>callback<span class="token punctuation">,</span> nextDeps<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> callback<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>\u53EF\u89C1\uFF0C\u5BF9\u4E8E<code>update</code>\uFF0C\u8FD9\u4E24\u4E2A<code>hook</code>\u7684\u552F\u4E00\u533A\u522B\u4E5F\u662F<strong>\u662F\u56DE\u8C03\u51FD\u6570\u672C\u8EAB\u8FD8\u662F\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\u7ED3\u679C\u4F5C\u4E3Avalue</strong>\u3002</p>`,9);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
