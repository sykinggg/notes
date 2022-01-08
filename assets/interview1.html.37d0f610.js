import{r as t,o,c as e,a as n,d as c,F as l,e as u,b as s}from"./app.8a201290.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},k=u(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="\u7528\u9012\u5F52\u7B97\u6CD5\u5B9E\u73B0-\u6570\u7EC4\u957F\u5EA6\u4E3A5\u4E14\u5143\u7D20\u7684\u968F\u673A\u6570\u57282-32\u95F4\u4E0D\u91CD\u590D\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u7528\u9012\u5F52\u7B97\u6CD5\u5B9E\u73B0-\u6570\u7EC4\u957F\u5EA6\u4E3A5\u4E14\u5143\u7D20\u7684\u968F\u673A\u6570\u57282-32\u95F4\u4E0D\u91CD\u590D\u7684\u503C" aria-hidden="true">#</a> \u7528\u9012\u5F52\u7B97\u6CD5\u5B9E\u73B0\uFF0C\u6570\u7EC4\u957F\u5EA6\u4E3A5\u4E14\u5143\u7D20\u7684\u968F\u673A\u6570\u57282-32\u95F4\u4E0D\u91CD\u590D\u7684\u503C</h1><p><strong>\u8FD9\u4E00\u9898\u662F\u8D77\u6E90\u9898</strong></p><h2 id="\u8FD9\u4E00\u9898\u662F\u8D77\u6E90\u9898" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u4E00\u9898\u662F\u8D77\u6E90\u9898" aria-hidden="true">#</a> \u8FD9\u4E00\u9898\u662F\u8D77\u6E90\u9898</h2><p>\u63CF\u8FF0\uFF1A</p><ol><li>\u8FD9\u662F\u4E00\u9053\u5927\u9898\u76EE\uFF0C\u628A\u8003\u70B9\u62C6\u6210\u4E864\u4E2A\u5C0F\u9879\uFF1B\u9700\u8981\u4FAF\u9009\u4EBA\u7528\u9012\u5F52\u7B97\u6CD5\u5B9E\u73B0\uFF08\u9650\u523615\u884C\u4EE3\u7801\u4EE5\u5185\u5B9E\u73B0\uFF1B\u9650\u5236\u65F6\u95F410\u5206\u949F\u5185\u5B8C\u6210\uFF09\uFF1A a) \u751F\u6210\u4E00\u4E2A\u957F\u5EA6\u4E3A5\u7684\u7A7A\u6570\u7EC4arr\u3002 b) \u751F\u6210\u4E00\u4E2A\uFF082\uFF0D32\uFF09\u4E4B\u95F4\u7684\u968F\u673A\u6574\u6570rand\u3002 c) \u628A\u968F\u673A\u6570rand\u63D2\u5165\u5230\u6570\u7EC4arr\u5185\uFF0C\u5982\u679C\u6570\u7EC4arr\u5185\u5DF2\u5B58\u5728\u4E0Erand\u76F8\u540C\u7684\u6570\u5B57\uFF0C\u5219\u91CD\u65B0\u751F\u6210\u968F\u673A\u6570rand\u5E76\u63D2\u5165\u5230arr\u5185[\u9700\u8981\u4F7F\u7528\u9012\u5F52\u5B9E\u73B0\uFF0C\u4E0D\u80FD\u4F7F\u7528for/while\u7B49\u5FAA\u73AF] d) \u6700\u7EC8\u8F93\u51FA\u4E00\u4E2A\u957F\u5EA6\u4E3A5\uFF0C\u4E14\u5185\u5BB9\u4E0D\u91CD\u590D\u7684\u6570\u7EC4arr\u3002</li></ol><h2 id="\u7B2C\u4E00\u79CD\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u79CD\u89E3\u6CD5" aria-hidden="true">#</a> \u7B2C\u4E00\u79CD\u89E3\u6CD5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token function">randomNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token function">randomArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">randomArr</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span>num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> num<span class="token punctuation">;</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        num <span class="token operator">=</span> <span class="token function">randomNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token operator">&gt;=</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token function">randomArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>num<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">randomNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">31</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u4F46\u662F\u6709\u4E2A\u95EE\u9898\u4E3B\u8981\u5728\u4E8E\u968F\u673A\u6570\uFF0C\u800C\u4E14\u6CA1\u6709\u6269\u5C55</p><h2 id="\u7B2C\u4E8C\u79CD\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u79CD\u89E3\u6CD5" aria-hidden="true">#</a> \u7B2C\u4E8C\u79CD\u89E3\u6CD5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">insertArr</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> min <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">32</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> max<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      arr<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> num
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">insertArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">)</span> 
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr 
<span class="token punctuation">}</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">insertArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4F46\u662F\u8FD8\u662F\u5B58\u5728\u968F\u673A\u6570\u7684\u95EE\u9898</p><ul><li><p>\u53E6\u5916\u7528\u56DB\u820D\u4E94\u5165\u4E5F\u662F\u4E0D\u5BF9\u7684\uFF0C\u56E0\u4E3A\u6700\u5C0F\u503C\u548C\u6700\u5927\u503C\u53EA\u6709\u5176\u5B83\u503C\u6982\u7387\u7684\u4E00\u534A\u3002</p></li><li><p>\u4ED4\u7EC6\u4E00\u770B\uFF0C\u867D\u7136\u81EA\u5B9A\u4E49\u4E86\u6700\u5927\u6700\u5C0F\u53C2\u6570\uFF0C\u4F46\u662F\u9012\u5F52\u7684\u65F6\u5019\u6CA1\u6709\u4F20\u5165\uFF0C\u6240\u4EE5\u5E76\u6CA1\u6709\u5375\u7528\u3002i \u53C2\u6570\u7684\u521D\u8877\u662F\u81EA\u5B9A\u4E49\u4ECE\u54EA\u91CC\u5F00\u59CB\u63D2\u5165\uFF0C\u5B9E\u7528\u6027\u4E5F\u6CA1\u6709</p></li></ul><h2 id="\u7B2C\u4E09\u79CD\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u79CD\u89E3\u6CD5" aria-hidden="true">#</a> \u7B2C\u4E09\u79CD\u89E3\u6CD5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">buildArray</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> length<span class="token punctuation">,</span> min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span>length <span class="token operator">===</span> length <span class="token operator">?</span> arr <span class="token operator">:</span> <span class="token function">buildArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> length<span class="token punctuation">,</span> min<span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">buildArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u8865\u5145</strong>\uFF1A</p><p>\u9898\u76EE\u8981\u6C42\u201D\u751F\u6210\u4E00\u4E2A\uFF082\uFF0D32\uFF09\u4E4B\u95F4\u7684\u968F\u673A\u6574\u6570rand\u201C\uFF0C\u65E2\u7136\u662F\u968F\u673A\uFF0C\u89C9\u5F97\u610F\u4E3A\u53D6\u503C\u5230\u533A\u95F4\u5185\u5404\u6570\u7684\u6982\u7387\u5E94\u8BE5\u662F\u76F8\u7B49\u7684\u3002\u6240\u4EE5\u50CF\u8FD9\u6837\u7684\u5199\u6CD5\u662F\u4E0D\u4E25\u8C28\u7684\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5728 2 - 5 \u533A\u95F4\u5185\u751F\u6210\u968F\u673A\u6570</span>
<span class="token keyword">var</span> min <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> max<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u53C2\u6570\u4E00 param1 \u6052\u7B49\u4E8E 2</span>
<span class="token comment">// \u53C2\u6570\u4E8C param2 \u5728 [0, 5] \u4E4B\u95F4\u7B49\u6982\u53D6\u503C</span>
<span class="token comment">// \u53EF\u80FD\u6027\u89C1\u4E0B</span>
<span class="token comment">// param1 2 2 2 2 2 2</span>
<span class="token comment">// param2 0 1 2 3 4 5</span>
<span class="token comment">// result 2 2 2 3 4 5</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u53EF\u89C1 result \u53D6\u5230 2 \u7684\u6982\u7387\u5927\u4E8E 3/4/5</p><p>\u89E3\u51B3\u4E86\u968F\u673A\u6570\u7684\u95EE\u9898</p><h2 id="\u7B2C\u56DB\u79CD\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u56DB\u79CD\u89E3\u6CD5" aria-hidden="true">#</a> \u7B2C\u56DB\u79CD\u89E3\u6CD5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getFiveRamdomSet</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">return</span> arr
    <span class="token keyword">const</span> randomNumber  <span class="token operator">=</span> <span class="token operator">~</span><span class="token operator">~</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">30</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> newArr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>randomNumber<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">getFiveRamdomSet</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">getFiveRamdomSet</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u8BE5\u79CD\u89E3\u6CD5\u5728\u4E8E\u6CA1\u6709\u751F\u6210\u4E00\u4E2A5\u4F4D\u7684\u7A7A\u6570\u7EC4</strong></p><ul><li><p>a\u6B65\u9AA4\u5E76\u4E0D\u662F\u591A\u4F59\u7684, \u5176\u4E2D\u5F71\u85CF\u4E00\u4E2A\u8003\u70B9\u662F\u4E0D\u4F7F\u7528for,\u7B49\u5FAA\u73AF\u8BED\u53E5, \u6765\u5224\u65AD\u662F\u5426\u8FBE\u52305\u4E2A\u6B63\u786E\u7684\u503C\u4E86, \u4EE5\u53CA\u5F53\u524D\u4EA7\u751F\u7684\u6570\u5B57\u8981\u653E\u5230\u6570\u7EC4\u7684\u90A3\u4E2A\u4F4D\u7F6E, \u4E5F\u8FD8\u6709\u5C31\u662F\u751F\u6210 \u7A7A\u6570\u7EC4\u7684\u6280\u5DE7.</p><ul><li><p>const arr = Array(5);</p></li><li><p>const arr = new Array(5);</p></li><li><p>const arr = [];</p></li><li><p>arr.length = 5;</p></li></ul></li></ul><p>\u8FD9\u51E0\u79CD\u65B9\u5F0F\u90FD\u80FD\u751F\u6210\u7A7A\u7684, \u957F\u5EA6\u4E3A5\u7684\u6570\u7EC4.</p><h2 id="\u7B2C\u4E94\u79CD\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E94\u79CD\u89E3\u6CD5" aria-hidden="true">#</a> \u7B2C\u4E94\u79CD\u89E3\u6CD5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> len <span class="token operator">=</span> <span class="token number">100000</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;Array.includes&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;Array.includes&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;Obnject.keys&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>Number<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;Obnject.keys&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>\u7ED3\u679C</strong></p>`,28),m=["src"],b={href:"https://www.ecma-international.org/ecma-262/7.0/#sec-array.prototype.includes",target:"_blank",rel:"noopener noreferrer"},d=s("Array.prototype.includes"),h=s(" \u89C4\u8303\uFF0C\u53EF\u4EE5\u770B\u51FA includes \u662F\u901A\u8FC7\u904D\u5386\u53BB\u67E5\u8BE2\u662F\u5426\u5B58\u5728 searchElement \u5143\u7D20\u7684\uFF0C\u8FD9\u4E5F\u662F\u5176\u901F\u5EA6\u4E0D\u53CA \u5BF9\u8C61\u7D22\u5F15 \u5FEB\u7684\u539F\u56E0\u4E86");function f(a,y){const p=t("ExternalLinkIcon");return o(),e(l,null,[k,n("img",{src:a.$withBase("/assets/js/1618194838(1).jpg"),alt:"demo"},null,8,m),n("p",null,[n("a",b,[d,c(p)]),h])],64)}var v=r(i,[["render",f]]);export{v as default};
