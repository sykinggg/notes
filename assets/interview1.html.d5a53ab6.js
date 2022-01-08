import{e as n}from"./app.5ba8e4fa.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u7B2C1\u5929-\u7528\u9012\u5F52\u7B97\u6CD5\u5B9E\u73B0-\u6570\u7EC4\u957F\u5EA6\u4E3A5\u4E14\u5143\u7D20\u7684\u968F\u673A\u6570\u57282-32\u95F4\u4E0D\u91CD\u590D\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u7B2C1\u5929-\u7528\u9012\u5F52\u7B97\u6CD5\u5B9E\u73B0-\u6570\u7EC4\u957F\u5EA6\u4E3A5\u4E14\u5143\u7D20\u7684\u968F\u673A\u6570\u57282-32\u95F4\u4E0D\u91CD\u590D\u7684\u503C" aria-hidden="true">#</a> \u7B2C1\u5929 \u7528\u9012\u5F52\u7B97\u6CD5\u5B9E\u73B0\uFF0C\u6570\u7EC4\u957F\u5EA6\u4E3A5\u4E14\u5143\u7D20\u7684\u968F\u673A\u6570\u57282-32\u95F4\u4E0D\u91CD\u590D\u7684\u503C</h1><hr><p>\u8FD9\u4E00\u9898\u662F\u8D77\u6E90\u9898 \u63CF\u8FF0\uFF1A</p><ol><li>\u8FD9\u662F\u4E00\u9053\u5927\u9898\u76EE\uFF0C\u628A\u8003\u70B9\u62C6\u6210\u4E864\u4E2A\u5C0F\u9879\uFF1B\u9700\u8981\u4FAF\u9009\u4EBA\u7528\u9012\u5F52\u7B97\u6CD5\u5B9E\u73B0\uFF08\u9650\u523615\u884C\u4EE3\u7801\u4EE5\u5185\u5B9E\u73B0\uFF1B\u9650\u5236\u65F6\u95F410\u5206\u949F\u5185\u5B8C\u6210\uFF09\uFF1A a) \u751F\u6210\u4E00\u4E2A\u957F\u5EA6\u4E3A5\u7684\u7A7A\u6570\u7EC4arr\u3002 b) \u751F\u6210\u4E00\u4E2A\uFF082\uFF0D32\uFF09\u4E4B\u95F4\u7684\u968F\u673A\u6574\u6570rand\u3002 c) \u628A\u968F\u673A\u6570rand\u63D2\u5165\u5230\u6570\u7EC4arr\u5185\uFF0C\u5982\u679C\u6570\u7EC4arr\u5185\u5DF2\u5B58\u5728\u4E0Erand\u76F8\u540C\u7684\u6570\u5B57\uFF0C\u5219\u91CD\u65B0\u751F\u6210\u968F\u673A\u6570rand\u5E76\u63D2\u5165\u5230arr\u5185[\u9700\u8981\u4F7F\u7528\u9012\u5F52\u5B9E\u73B0\uFF0C\u4E0D\u80FD\u4F7F\u7528for/while\u7B49\u5FAA\u73AF] d) \u6700\u7EC8\u8F93\u51FA\u4E00\u4E2A\u957F\u5EA6\u4E3A5\uFF0C\u4E14\u5185\u5BB9\u4E0D\u91CD\u590D\u7684\u6570\u7EC4arr\u3002</li></ol><h2 id="\u89E3\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E00" aria-hidden="true">#</a> \u89E3\u6CD5\u4E00</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u89E3\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E8C" aria-hidden="true">#</a> \u89E3\u6CD5\u4E8C</h2><p>\u8003\u8651\u4E00\u4E0B\u6269\u5C55\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">insertArr</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> min <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">32</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u8FD9\u91CC\u7684\u968F\u673A\u6570\u7B97\u6CD5\u662F\u6709\u95EE\u9898\u7684\uFF0C\u53E6\u5916\u7528\u56DB\u820D\u4E94\u5165\u4E5F\u662F\u4E0D\u5BF9\u7684\uFF0C\u56E0\u4E3A\u6700\u5C0F\u503C\u548C\u6700\u5927\u503C\u53EA\u6709\u5176\u5B83\u503C\u6982\u7387\u7684\u4E00\u534A\u3002</p><p>\u4ED4\u7EC6\u4E00\u770B\uFF0C\u867D\u7136\u81EA\u5B9A\u4E49\u4E86\u6700\u5927\u6700\u5C0F\u53C2\u6570\uFF0C\u4F46\u662F\u9012\u5F52\u7684\u65F6\u5019\u6CA1\u6709\u4F20\u5165\uFF0C\u6240\u4EE5\u5E76\u6CA1\u6709\u5375\u7528\u3002i \u53C2\u6570\u7684\u521D\u8877\u662F\u81EA\u5B9A\u4E49\u4ECE\u54EA\u91CC\u5F00\u59CB\u63D2\u5165\uFF0C\u5B9E\u7528\u6027\u4E5F\u4E0D\u7B97\u597D\u3002</p><h2 id="\u89E3\u6CD5\u4E09" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E09" aria-hidden="true">#</a> \u89E3\u6CD5\u4E09</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">insertRandom</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">let</span> tmp <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">31</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">insertRandom</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  arr<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> tmp
  <span class="token keyword">return</span> <span class="token function">insertRandom</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">insertRandom</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u89E3\u6CD5\u56DB" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u56DB" aria-hidden="true">#</a> \u89E3\u6CD5\u56DB</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 6 \u884C\u5199\u5B8C</span>
<span class="token keyword">function</span> <span class="token function">buildArray</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> length<span class="token punctuation">,</span> min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span>length <span class="token operator">===</span> length <span class="token operator">?</span> arr <span class="token operator">:</span> <span class="token function">buildArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> length<span class="token punctuation">,</span> min<span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">buildArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8865\u5145\uFF1A \u9898\u76EE\u8981\u6C42\u201D\u751F\u6210\u4E00\u4E2A\uFF082\uFF0D32\uFF09\u4E4B\u95F4\u7684\u968F\u673A\u6574\u6570rand\u201C\uFF0C\u65E2\u7136\u662F\u968F\u673A\uFF0C\u6211\u89C9\u5F97\u610F\u4E3A\u53D6\u503C\u5230\u533A\u95F4\u5185\u5404\u6570\u7684\u6982\u7387\u5E94\u8BE5\u662F\u76F8\u7B49\u7684\u3002\u6240\u4EE5\u50CF\u8FD9\u6837\u7684\u5199\u6CD5\u662F\u4E0D\u4E25\u8C28\u7684\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5728 2 - 5 \u533A\u95F4\u5185\u751F\u6210\u968F\u673A\u6570</span>
<span class="token keyword">var</span> min <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> max<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u53C2\u6570\u4E00 param1 \u6052\u7B49\u4E8E 2</span>
<span class="token comment">// \u53C2\u6570\u4E8C param2 \u5728 [0, 5] \u4E4B\u95F4\u7B49\u6982\u53D6\u503C</span>
<span class="token comment">// \u53EF\u80FD\u6027\u89C1\u4E0B</span>
<span class="token comment">// param1 2 2 2 2 2 2</span>
<span class="token comment">// param2 0 1 2 3 4 5</span>
<span class="token comment">// result 2 2 2 3 4 5</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u53EF\u89C1 result \u53D6\u5230 2 \u7684\u6982\u7387\u5927\u4E8E 3/4/5</p><h2 id="\u89E3\u6CD5\u4E94" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E94" aria-hidden="true">#</a> \u89E3\u6CD5\u4E94</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/***
 * \u6027\u80FD\u8FBE\u5230\u6700\u4F18\u300B\u8003\u8651\u65F6\u95F4\u590D\u6742\u5EA6\uFF08\u907F\u514D\u4F7F\u7528Math.random\u53BB\u968F\u673A\u5230\u4E0D\u91CD\u590D\u6570\u5B57\uFF09
 * \u6700\u7EC8\u4F18\u5316,\u5F53\u5982\u679C\u53D6\u968F\u673A\u6570\u4E3A30\u4E2A\u7684\u65F6\u5019\uFF0C\u90A3\u4E48\u6700\u540E\u9762\u51E0\u4E2A\u6570\u4F1A\u5F88\u5C0F\u51E0\u7387\u968F\u673A\u5230\uFF0C\u4F18\u5316\u601D\u8DEF\uFF0C\u5C06\u968F\u673A 
 * \u6570\u521D\u59CB\u65F6\u653E\u7F6E\u6570\u7EC4\uFF0C\u53D6\u503C\u540E\u5254\u9664
 */</span>
<span class="token keyword">function</span> <span class="token function">getRandom1</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> min <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">32</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5982\u679C\u53D6\u503C\u6570\u91CF\u5927\u4E8E\u6700\u5927\u968F\u673A\u6570\uFF0C\u5C06\u6700\u968F\u673A\u6570\u6700\u5927\u503C\u63D0\u9AD8</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    max <span class="token operator">+=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u4F7F\u7528\u521B\u5EFA\u7684\u6307\u5B9A\u6570\u91CF\u7A7A\u6570\u7EC4 keys \u4E0B\u6807\u76F4\u63A5\u586B\u5145\uFF0C\u907F\u514D for\u5FAA\u73AF\u586B\u5145</span>
    <span class="token keyword">var</span> initArray <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">resArrayRandom</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>resArrayRandom<span class="token punctuation">.</span>length <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> resArrayRandom<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u83B7\u53D6\u5269\u4F59\u6570\u7EC4\u968F\u673A\u4E0B\u6807</span>
    <span class="token keyword">var</span> indexRandom <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> initArray<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    resArrayRandom<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>initArray<span class="token punctuation">[</span>indexRandom<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    initArray<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>indexRandom<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">insert</span><span class="token punctuation">(</span>resArrayRandom<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> beginTime2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getRandom1</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F18\u5316\u53D6\u968F\u673A\u6570 \u540E\u8017\u65F6\uFF1A&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> beginTime2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,20);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
