import{_ as n,a as s}from"./app.41d9fe5b.js";const a={},p=s(`<h1 id="\u8FED\u4EE3\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3\u5668\u6A21\u5F0F" aria-hidden="true">#</a> \u8FED\u4EE3\u5668\u6A21\u5F0F</h1><h2 id="\u8FED\u4EE3\u5668\u6A21\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3\u5668\u6A21\u5F0F-1" aria-hidden="true">#</a> \u8FED\u4EE3\u5668\u6A21\u5F0F</h2><blockquote><p>\u8FED\u4EE3\u5668\u6A21\u5F0F\u4E2D\uFF0C\u8FED\u4EE3\u5668\uFF08\u5141\u8BB8\u904D\u5386\u96C6\u5408\u4E2D\u6240\u6709\u5143\u7D20\u7684\u5BF9\u8C61\uFF09\u987A\u5E8F\u8FED\u4EE3\u4E00\u4E2A\u96C6\u5408\u5BF9\u8C61\u4E2D\u7684\u5143\u7D20\u800C\u65E0\u9700\u66B4\u6F0F\u5176\u5E95\u5C42\u5F62\u5F0F\u3002</p><p>\u8FED\u4EE3\u5668\u5C01\u88C5\u4E86\u8FD9\u79CD\u7279\u522B\u7684\u8FED\u4EE3\u64CD\u4F5C\u7684\u5185\u90E8\u7ED3\u6784\uFF0C\u5C31<code>jQuery</code>\u7684<code>jQuery.fn.each()</code>\u8FED\u4EE3\u5668\u6765\u8BF4\uFF0C\u5B9E\u9645\u4E0A\u53EF\u4EE5\u4F7F\u7528<code>jQuery.each()</code>\u5E95\u5C42\u7684\u4EE3\u7801\u6765\u8FED\u4EE3\u4E00\u4E2A\u96C6\u5408\uFF0C\u800C\u65E0\u9700\u77E5\u9053\u6216\u8005\u7406\u89E3\u540E\u53F0\u63D0\u4F9B\u8FD9\u79CD\u529F\u80FD\u7684\u4EE3\u7801\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u3002</p><p>\u8FD9\u79CD\u6A21\u5F0F\u53EF\u4EE5\u88AB\u7406\u89E3\u4E3A\u95E8\u9762\u6A21\u5F0F\u7684\u4E00\u79CD\u7279\u4F8B\uFF0C\u5728\u8FD9\u91CC\u53EA\u5904\u7406\u4E0E\u8FED\u4EE3\u6709\u5173\u7684\u95EE\u9898\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span> <span class="token punctuation">[</span><span class="token string">&quot;john&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;dave&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;rick&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;julian&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">index<span class="token punctuation">,</span> value</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> index <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span>&quot; <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">&quot;li&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span> <span class="token keyword">function</span> <span class="token punctuation">(</span> <span class="token parameter">index</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> index <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> <span class="token function">$</span><span class="token punctuation">(</span> <span class="token keyword">this</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230<code>jQuery.fn.each()</code>\u7684\u4EE3\u7801:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Execute a callback for every element in the matched set.</span>
<span class="token function-variable function">each</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">callback<span class="token punctuation">,</span> args</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> jQuery<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">,</span> callback<span class="token punctuation">,</span> args <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5728<code>jQuery.each()</code>\u65B9\u6CD5\u540E\u9762\u7684\u4EE3\u7801\u63D0\u4F9B\u4E86\u4E24\u79CD\u8FED\u4EE3\u5BF9\u8C61\u7684\u65B9\u6CD5:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">each</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">object<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> args</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name<span class="token punctuation">,</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    length <span class="token operator">=</span> object<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
    isObj <span class="token operator">=</span> length <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> jQuery<span class="token punctuation">.</span><span class="token function">isFunction</span><span class="token punctuation">(</span> object <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span> args <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> isObj <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span> name <span class="token keyword">in</span> object <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span> object<span class="token punctuation">[</span> name <span class="token punctuation">]</span><span class="token punctuation">,</span> args <span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span> object<span class="token punctuation">[</span> i<span class="token operator">++</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> args <span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

  <span class="token comment">// A special, fast, case for the most common use of each</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> isObj <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span> name <span class="token keyword">in</span> object <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span> object<span class="token punctuation">[</span> name <span class="token punctuation">]</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> object<span class="token punctuation">[</span> name <span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span> object<span class="token punctuation">[</span> i <span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> object<span class="token punctuation">[</span> i<span class="token operator">++</span> <span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> object<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div>`,8);function t(o,e){return p}var u=n(a,[["render",t],["__file","iterator.html.vue"]]);export{u as default};
