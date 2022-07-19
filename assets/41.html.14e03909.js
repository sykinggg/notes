import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as e,c,b as s,d as l,a,e as n}from"./app.594e1059.js";const u={},i=a(`<h1 id="\u7B2C42\u9898-javascript\u4E2D\u7684-sort-\u65B9\u6CD5-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u7B2C42\u9898-javascript\u4E2D\u7684-sort-\u65B9\u6CD5-\u5B9E\u73B0" aria-hidden="true">#</a> \u7B2C42\u9898\uFF1AJavaScript\u4E2D\u7684 sort \u65B9\u6CD5 \u5B9E\u73B0</h1><h2 id="js\u4E2D\u7684sort\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#js\u4E2D\u7684sort\u65B9\u6CD5" aria-hidden="true">#</a> js\u4E2D\u7684sort\u65B9\u6CD5</h2><h3 id="sort\u65B9\u6CD5\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#sort\u65B9\u6CD5\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> sort\u65B9\u6CD5\u57FA\u672C\u4F7F\u7528</h3><blockquote><p>arr.sort([compareFunction])</p></blockquote><p>\u5982\u679C\u4E0D\u4F20\u5165 <code>compareFunction</code>\uFF0C\u5219\u5143\u7D20\u6309\u7167\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u7684\u5404\u4E2A\u5B57\u7B26\u7684 <code>Unicode</code> \u4F4D\u70B9\u8FDB\u884C\u6392\u5E8F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jesse&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jack&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
names<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;jack&quot;, &quot;jesse&quot;, &quot;tom&quot;]</span>

<span class="token keyword">const</span> array1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">100000</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
array1<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [1, 100000, 21, 30, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6307\u660E\u4E86 <code>compareFunction</code> \u53C2\u6570 \uFF0C\u90A3\u4E48\u6570\u7EC4\u4F1A\u6309\u7167\u8C03\u7528\u8BE5\u51FD\u6570\u7684<code>\u8FD4\u56DE\u503C\u6392\u5E8F</code>\uFF0C\u5373 <code>a</code> \u548C <code>b</code> \u662F\u4E24\u4E2A\u5C06\u8981\u88AB\u6BD4\u8F83\u7684\u5143\u7D20\uFF1A</p><ul><li><p><code>compareFunction\uFF08a, b\uFF09&lt; 0</code>\uFF0Ca \u4F1A\u88AB\u6392\u5217\u5230 b \u4E4B\u524D</p></li><li><p><code>compareFunction\uFF08a, b\uFF09=== 0</code>\uFF0Ca \u548C b \u7684\u76F8\u5BF9\u4F4D\u7F6E\u4E0D\u53D8</p></li><li><p><code>compareFunction\uFF08a, b\uFF09&gt; 0</code>\uFF0Cb \u4F1A\u88AB\u6392\u5217\u5230 a \u4E4B\u524D</p></li></ul><h3 id="sort\u6E90\u7801\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#sort\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a> sort\u6E90\u7801\u5206\u6790</h3>`,9),r=n("\u67E5\u9605 "),k={href:"https://github.com/v8/v8/blob/98d735069d0937f367852ed968a33210ceb527c2/src/js/array.js#L709",target:"_blank",rel:"noopener noreferrer"},d=n("v8\u6E90\u7801sort\u90E8\u5206"),v=n(" \u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u5BF9\u4E8E\u9700\u8981\u6392\u5E8F\u7684\u5143\u7D20\u4E2A\u6570n\uFF0C\u5177\u4F53\u6392\u5E8F\u7B56\u7565\u6709\u51E0\u4E0B\u4E2D\u60C5\u5F62\uFF1A"),m=a(`<ul><li><p>\u5F53 n&lt;=10 \u65F6\uFF0C\u91C7\u7528<code>\u63D2\u5165\u6392\u5E8F</code>\uFF1B</p></li><li><p>\u5F53 n&gt;10 \u65F6\uFF0C\u91C7\u7528<code>\u4E09\u8DEF\u5FEB\u901F\u6392\u5E8F</code>\uFF1B</p></li><li><p>10&lt; n &lt;=1000\uFF0C\u91C7\u7528<code>\u4E2D\u4F4D\u6570\u4F5C\u4E3A\u54E8\u5175\u5143\u7D20</code>\uFF1B</p></li><li><p>n&gt;1000\uFF0C\u6BCF\u9694 200~215 \u4E2A\u5143\u7D20\u6311\u51FA\u4E00\u4E2A\u5143\u7D20\uFF0C\u653E\u5230\u4E00\u4E2A\u65B0\u6570\u7EC4\u4E2D\uFF0C\u7136\u540E\u5BF9\u5B83\u6392\u5E8F\uFF0C\u627E\u5230\u4E2D\u95F4\u4F4D\u7F6E\u7684\u6570\uFF0C\u4EE5\u6B64\u4F5C\u4E3A\u4E2D\u4F4D\u6570\u3002</p></li></ul><h4 id="_1\u3001\u4E3A\u4F55\u5143\u7D20\u8F83\u5C11\u7684\u65F6\u5019\u8981\u7528\u5FEB\u6392" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u4E3A\u4F55\u5143\u7D20\u8F83\u5C11\u7684\u65F6\u5019\u8981\u7528\u5FEB\u6392" aria-hidden="true">#</a> 1\u3001\u4E3A\u4F55\u5143\u7D20\u8F83\u5C11\u7684\u65F6\u5019\u8981\u7528\u5FEB\u6392</h4><p>\u5176\u5B9E\u4ED4\u7EC6\u5206\u6790\u4E00\u4E0B\u4E0D\u96BE\u7A76\u5176\u539F\u56E0\u3002\u5BF9\u4E8E\u63D2\u6392\u548C\u5FEB\u6392\uFF0C\u7406\u8BBA\u4E0A\u7684\u5E73\u5747\u65F6\u95F4\u590D\u6742\u5EA6\u5206\u522B\u4E3A<code>O(n^2)</code>\u548C<code>O(nlogn)</code>\uFF0C\u5176\u4E2D\u63D2\u6392\u5728\u6700\u597D\u60C5\u51B5\u4E0B\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F <code>O(n)</code>\u3002\u5BF9\u6BD4\u4E0D\u96BE\u5F97\u51FA\u7ED3\u8BBA\uFF0C\u5F53<code>n</code>\u8DB3\u591F\u5C0F\u7684\u65F6\u5019\uFF0C\u5FEB\u6392\u4F18\u52BF\u53D8\u5C0F\u3002\u4E8B\u5B9E\u4E0A\u63D2\u6392\u7ECF\u4F18\u5316\u540E\u5BF9\u4E8E\u5C0F\u6570\u636E\u96C6\u7684\u6392\u5E8F\u6027\u80FD\u53EF\u4EE5\u8D85\u8FC7\u5FEB\u6392\u3002</p><h4 id="_2\u3001\u4E3A\u4F55\u8981\u9009\u62E9\u54E8\u5175\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4E3A\u4F55\u8981\u9009\u62E9\u54E8\u5175\u5143\u7D20" aria-hidden="true">#</a> 2\u3001\u4E3A\u4F55\u8981\u9009\u62E9\u54E8\u5175\u5143\u7D20</h4><p>\u56E0\u4E3A\u5FEB\u901F\u6392\u5E8F\u7684\u6027\u80FD\u74F6\u9888\u5728\u4E8E<code>\u9012\u5F52\u7684\u6DF1\u5EA6</code>\uFF0C\u6700\u574F\u7684\u60C5\u51B5\u662F\u6BCF\u6B21\u7684\u54E8\u5175\u90FD\u662F\u6700\u5C0F\u5143\u7D20\u6216\u8005\u6700\u5927\u5143\u7D20\uFF0C\u90A3\u4E48\u8FDB\u884C partition\uFF08\u4E00\u8FB9\u662F\u5C0F\u4E8E\u54E8\u5175\u7684\u5143\u7D20\uFF0C\u53E6\u4E00\u8FB9\u662F\u5927\u4E8E\u54E8\u5175\u7684\u5143\u7D20\uFF09\u65F6\uFF0C\u5C31\u4F1A\u6709\u4E00\u8FB9\u662F\u7A7A\u7684\u3002\u5982\u679C\u8FD9\u4E48\u6392\u4E0B\u53BB\uFF0C\u9012\u5F52\u7684\u5C42\u6570\u5C31\u8FBE\u5230\u4E86<code>n</code>, \u800C\u6BCF\u4E00\u5C42\u7684\u590D\u6742\u5EA6\u662F <code>O(n)</code>\uFF0C\u56E0\u6B64\u5FEB\u6392\u8FD9\u65F6\u5019\u4F1A<code>\u9000\u5316</code>\u6210<code>O(n^2)</code>\u7EA7\u522B\u3002</p><p>\u6E90\u7801\u4E2D\u7684sort\u7684\u57FA\u672C\u7ED3\u6784</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ArraySort</span><span class="token punctuation">(</span><span class="token parameter">comparefn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token constant">CHECK_OBJECT_COERCIBLE</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token string">&quot;Array.prototype.sort&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token constant">TO_OBJECT</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> length <span class="token operator">=</span> <span class="token constant">TO_LENGTH</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">InnerArraySort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> length<span class="token punctuation">,</span> comparefn<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">InnerArraySort</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> length<span class="token punctuation">,</span> comparefn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// \u6BD4\u8F83\u51FD\u6570\u672A\u4F20\u5165</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">IS_CALLABLE</span><span class="token punctuation">(</span>comparefn<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">comparefn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">%</span><span class="token function">_IsSmi</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">%</span><span class="token function">_IsSmi</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token operator">%</span><span class="token function">SmiLexicographicCompare</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        x <span class="token operator">=</span> <span class="token constant">TO_STRING</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        y <span class="token operator">=</span> <span class="token constant">TO_STRING</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> y<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">return</span> x <span class="token operator">&lt;</span> y <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">InsertionSort</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> from<span class="token punctuation">,</span> to</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u63D2\u5165\u6392\u5E8F</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> from <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> to<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> element <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> from<span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> tmp <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">var</span> order <span class="token operator">=</span> <span class="token function">comparefn</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>order <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            a<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      a<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">GetThirdIndex</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> from<span class="token punctuation">,</span> to</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// \u5143\u7D20\u4E2A\u6570\u5927\u4E8E1000\u65F6\u5BFB\u627E\u54E8\u5175\u5143\u7D20</span>
  <span class="token keyword">var</span> t_array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InternalArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> increment <span class="token operator">=</span> <span class="token number">200</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>to <span class="token operator">-</span> from<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  from <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  to <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> from<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> to<span class="token punctuation">;</span> i <span class="token operator">+=</span> increment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     t_array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
     j<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  t_array<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token function">comparefn</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> third_index <span class="token operator">=</span> t_array<span class="token punctuation">[</span>t_array<span class="token punctuation">.</span>length <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> third_index<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">QuickSort</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> from<span class="token punctuation">,</span> to</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u5FEB\u901F\u6392\u5E8F\u5B9E\u73B0</span>
      <span class="token comment">//\u54E8\u5175\u4F4D\u7F6E</span>
      <span class="token keyword">var</span> third_index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">-</span> from <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">InsertionSort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> from<span class="token punctuation">,</span> to<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6570\u636E\u91CF\u5C0F\uFF0C\u4F7F\u7528\u63D2\u5165\u6392\u5E8F\uFF0C\u901F\u5EA6\u8F83\u5FEB</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">-</span> from <span class="token operator">&gt;</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          third_index <span class="token operator">=</span> <span class="token function">GetThirdIndex</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> from<span class="token punctuation">,</span> to<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5C0F\u4E8E1000 \u76F4\u63A5\u53D6\u4E2D\u70B9</span>
          third_index <span class="token operator">=</span> from <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>to <span class="token operator">-</span> from<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u4E0B\u9762\u5F00\u59CB\u5FEB\u6392</span>
        <span class="token keyword">var</span> v0 <span class="token operator">=</span> a<span class="token punctuation">[</span>from<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> v1 <span class="token operator">=</span> a<span class="token punctuation">[</span>to <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> v2 <span class="token operator">=</span> a<span class="token punctuation">[</span>third_index<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> c01 <span class="token operator">=</span> <span class="token function">comparefn</span><span class="token punctuation">(</span>v0<span class="token punctuation">,</span> v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>c01 <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> tmp <span class="token operator">=</span> v0<span class="token punctuation">;</span>
          v0 <span class="token operator">=</span> v1<span class="token punctuation">;</span>
          v1 <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">var</span> c02 <span class="token operator">=</span> <span class="token function">comparefn</span><span class="token punctuation">(</span>v0<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>c02 <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> tmp <span class="token operator">=</span> v0<span class="token punctuation">;</span>
          v0 <span class="token operator">=</span> v2<span class="token punctuation">;</span>
          v2 <span class="token operator">=</span> v1<span class="token punctuation">;</span>
          v1 <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> c12 <span class="token operator">=</span> <span class="token function">comparefn</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>c12 <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> tmp <span class="token operator">=</span> v1<span class="token punctuation">;</span>
            v1 <span class="token operator">=</span> v2<span class="token punctuation">;</span>
            v2 <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        a<span class="token punctuation">[</span>from<span class="token punctuation">]</span> <span class="token operator">=</span> v0<span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>to <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> v2<span class="token punctuation">;</span>
        <span class="token keyword">var</span> pivot <span class="token operator">=</span> v1<span class="token punctuation">;</span>
        <span class="token keyword">var</span> low_end <span class="token operator">=</span> from <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> 
        <span class="token keyword">var</span> high_start <span class="token operator">=</span> to <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>third_index<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>low_end<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>low_end<span class="token punctuation">]</span> <span class="token operator">=</span> pivot<span class="token punctuation">;</span>
        <span class="token literal-property property">partition</span><span class="token operator">:</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> low_end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> high_start<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> element <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">var</span> order <span class="token operator">=</span> <span class="token function">comparefn</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> pivot<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>order <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>low_end<span class="token punctuation">]</span><span class="token punctuation">;</span>
            a<span class="token punctuation">[</span>low_end<span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
            low_end<span class="token operator">++</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>order <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">do</span> <span class="token punctuation">{</span>
              high_start<span class="token operator">--</span><span class="token punctuation">;</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>high_start <span class="token operator">==</span> i<span class="token punctuation">)</span> <span class="token keyword">break</span> partition<span class="token punctuation">;</span>
              <span class="token keyword">var</span> top_elem <span class="token operator">=</span> a<span class="token punctuation">[</span>high_start<span class="token punctuation">]</span><span class="token punctuation">;</span>
              order <span class="token operator">=</span> <span class="token function">comparefn</span><span class="token punctuation">(</span>top_elem<span class="token punctuation">,</span> pivot<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>order <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>high_start<span class="token punctuation">]</span><span class="token punctuation">;</span>
            a<span class="token punctuation">[</span>high_start<span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>order <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              element <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
              a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>low_end<span class="token punctuation">]</span><span class="token punctuation">;</span>
              a<span class="token punctuation">[</span>low_end<span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
              low_end<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5FEB\u6392\u7684\u6838\u5FC3\u601D\u8DEF\uFF0C\u9012\u5F52\u8C03\u7528\u5FEB\u901F\u6392\u5E8F\u65B9\u6CD5</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">-</span> high_start <span class="token operator">&lt;</span> low_end <span class="token operator">-</span> from<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">QuickSort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> high_start<span class="token punctuation">,</span> to<span class="token punctuation">)</span><span class="token punctuation">;</span>
          to <span class="token operator">=</span> low_end<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">QuickSort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> from<span class="token punctuation">,</span> low_end<span class="token punctuation">)</span><span class="token punctuation">;</span>
          from <span class="token operator">=</span> high_start<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function b(y,f){const p=o("ExternalLinkIcon");return e(),c("div",null,[i,s("p",null,[r,s("a",k,[d,l(p)]),v]),m])}var _=t(u,[["render",b],["__file","41.html.vue"]]);export{_ as default};