import{_ as n,o as s,c as a,a as t}from"./app.e9fd9ffa.js";const e={},p=t(`<h1 id="\u9002\u914D\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u9002\u914D\u5668\u6A21\u5F0F" aria-hidden="true">#</a> \u9002\u914D\u5668\u6A21\u5F0F</h1><h2 id="\u9002\u914D\u5668\u6A21\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#\u9002\u914D\u5668\u6A21\u5F0F-1" aria-hidden="true">#</a> \u9002\u914D\u5668\u6A21\u5F0F</h2><blockquote><p>\u9002\u914D\u5668\u6A21\u5F0F \u5C06\u4E00\u4E2A\u5BF9\u8C61\u6216\u8005\u7C7B\u7684\u63A5\u53E3\u7FFB\u8BD1\u6210\u67D0\u4E2A\u6307\u5B9A\u7684\u7CFB\u7EDF\u53EF\u4EE5\u4F7F\u7528\u7684\u53E6\u5916\u4E00\u4E2A\u63A5\u53E3\u3002</p><p>\u9002\u914D\u5668\u57FA\u672C\u4E0A\u5141\u8BB8\u672C\u6765\u7531\u4E8E\u63A5\u53E3\u4E0D\u517C\u5BB9\u800C\u4E0D\u80FD\u4E00\u8D77\u6B63\u5E38\u5DE5\u4F5C\u7684\u5BF9\u8C61\u6216\u8005\u7C7B\u80FD\u591F\u5728\u4E00\u8D77\u5DE5\u4F5C.\u9002\u914D\u5668\u5C06\u5BF9\u5B83\u63A5\u53E3\u7684\u8C03\u7528\u7FFB\u8BD1\u6210\u5BF9\u539F\u59CB\u63A5\u53E3\u7684\u8C03\u7528\uFF0C\u800C\u5B9E\u73B0\u8FD9\u6837\u529F\u80FD\u7684\u4EE3\u7801\u901A\u5E38\u662F\u6700\u7B80\u7684\u3002</p><p>\u53EF\u80FD\u5DF2\u7ECF\u7528\u8FC7\u7684\u4E00\u4E2A\u9002\u914D\u5668\u7684\u4F8B\u5B50\u5C31\u662F<code>jQuery</code>\u7684<code>jQuery.fn.css()</code>\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u5E2E\u52A9\u89C4\u8303\u4E86\u4E0D\u540C\u6D4F\u89C8\u5668\u4E4B\u95F4\u6837\u5F0F\u7684\u5E94\u7528\u65B9\u5F0F\uFF0C\u4F7F\u4F7F\u7528\u7B80\u5355\u7684\u8BED\u6CD5\uFF0C\u8FD9\u4E9B\u8BED\u6CD5\u88AB\u9002\u914D\u6210\u4E3A\u6D4F\u89C8\u5668\u80CC\u540E\u771F\u6B63\u652F\u6301\u7684\u8BED\u6CD5\uFF1A</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Cross browser opacity:</span>
<span class="token comment">// opacity: 0.9;  Chrome 4+, FF2+, Saf3.1+, Opera 9+, IE9, iOS 3.2+, Android 2.1+</span>
<span class="token comment">// filter: alpha(opacity=90);  IE6-IE8</span>

<span class="token comment">// Setting opacity</span>
<span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">&quot;.container&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span> <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">.5</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Getting opacity</span>
<span class="token keyword">var</span> currentOpacity <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">&quot;.container&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&#39;opacity&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u4E0A\u9762\u7684\u4EE3\u7801\u53D8\u5F97\u53EF\u884C\u7684\u76F8\u5E94\u7684jQuery\u6838\u5FC3css\u94A9\u5B50\u5728\u4E0B\u9762\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">elem<span class="token punctuation">,</span> computed</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// IE uses filters for opacity</span>
  <span class="token keyword">return</span> ropacity<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>
        computed <span class="token operator">&amp;&amp;</span> elem<span class="token punctuation">.</span>currentStyle <span class="token operator">?</span>
            elem<span class="token punctuation">.</span>currentStyle<span class="token punctuation">.</span>filter <span class="token operator">:</span> elem<span class="token punctuation">.</span>style<span class="token punctuation">.</span>filter<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">)</span> <span class="token operator">?</span>
    <span class="token punctuation">(</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span> RegExp<span class="token punctuation">.</span>$1 <span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">100</span> <span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span> <span class="token operator">:</span>
    computed <span class="token operator">?</span> <span class="token string">&quot;1&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">elem<span class="token punctuation">,</span> value</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> style <span class="token operator">=</span> elem<span class="token punctuation">.</span>style<span class="token punctuation">,</span>
    currentStyle <span class="token operator">=</span> elem<span class="token punctuation">.</span>currentStyle<span class="token punctuation">,</span>
    opacity <span class="token operator">=</span> jQuery<span class="token punctuation">.</span><span class="token function">isNumeric</span><span class="token punctuation">(</span> value <span class="token punctuation">)</span> <span class="token operator">?</span>
          <span class="token string">&quot;alpha(opacity=&quot;</span> <span class="token operator">+</span> value <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    filter <span class="token operator">=</span> currentStyle <span class="token operator">&amp;&amp;</span> currentStyle<span class="token punctuation">.</span>filter <span class="token operator">||</span> style<span class="token punctuation">.</span>filter <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

  <span class="token comment">// IE has trouble with opacity if it does not have layout</span>
  <span class="token comment">// Force it by setting the zoom level</span>
  style<span class="token punctuation">.</span>zoom <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token comment">// if setting opacity to 1, and no other filters</span>
  <span class="token comment">//exist - attempt to remove filter attribute #6652</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> value <span class="token operator">&gt;=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> jQuery<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span> filter<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span> ralpha<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// Setting style.filter to null, &quot;&quot; &amp; &quot; &quot; still leave</span>
    <span class="token comment">// &quot;filter:&quot; in the cssText if &quot;filter:&quot; is present at all,</span>
    <span class="token comment">// clearType is disabled, we want to avoid this style.removeAttribute</span>
    <span class="token comment">// is IE Only, but so apparently is this code path...</span>
    style<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span> <span class="token string">&quot;filter&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// if there there is no filter style applied in a css rule, we are done</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> currentStyle <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>currentStyle<span class="token punctuation">.</span>filter <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// otherwise, set new filter values</span>
  style<span class="token punctuation">.</span>filter <span class="token operator">=</span> ralpha<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span> filter <span class="token punctuation">)</span> <span class="token operator">?</span>
    filter<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span> ralpha<span class="token punctuation">,</span> opacity <span class="token punctuation">)</span> <span class="token operator">:</span>
    filter <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> opacity<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(l,i){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","adapter.html.vue"]]);export{r as default};
