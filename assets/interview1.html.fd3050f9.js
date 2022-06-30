import{_ as n,a as s}from"./app.dce02100.js";const a={},p=s(`<h1 id="object-is" tabindex="-1"><a class="header-anchor" href="#object-is" aria-hidden="true">#</a> Object.is\uFF08\uFF09</h1><p>\u8BE5<code>Object.is()</code>\u65B9\u6CD5\u786E\u5B9A\u4E24\u4E2A\u503C\u662F\u5426 \u76F8\u540C</p><h2 id="\u53E5\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u53E5\u6CD5" aria-hidden="true">#</a> \u53E5\u6CD5</h2><blockquote><p>Object.is(value1, value2);</p></blockquote><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p><code>value1</code> \u8981\u6BD4\u8F83\u7684\u7B2C\u4E00\u4E2A\u503C\u3002</p><p><code>value2</code> \u8981\u6BD4\u8F83\u7684\u7B2C\u4E8C\u4E2A\u503C\u3002</p><h2 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h2><p><code>Boolean</code> \u8868\u793A\u4E24\u4E2A\u53C2\u6570\u662F\u5426\u662F\u76F8\u540C\u7684\u503C\u3002</p><h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p><code>Object.is()</code>\u786E\u5B9A\u4E24\u4E2A\u503C\u662F\u5426\u76F8\u540C\u3002\u5982\u679C\u4E0B\u5217\u6761\u4EF6\u4E4B\u4E00\u6210\u7ACB\uFF0C\u5219\u4E24\u4E2A\u503C\u76F8\u540C\uFF1A</p><ul><li><p>\u4E24\u4E2A\u90FD undefined</p></li><li><p>\u4E24\u4E2A\u90FD null</p></li><li><p>\u4E24\u8005true\u6216\u4E24\u8005false</p></li><li><p>\u4E24\u4E2A\u957F\u5EA6\u76F8\u540C\u4E14\u5B57\u7B26\u76F8\u540C\u4E14\u987A\u5E8F\u76F8\u540C\u7684\u5B57\u7B26\u4E32</p></li><li><p>\u4E24\u8005\u90FD\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\uFF08\u610F\u5473\u7740\u4E24\u4E2A\u503C\u90FD\u5F15\u7528\u5185\u5B58\u4E2D\u7684\u76F8\u540C\u5BF9\u8C61\uFF09</p></li><li><p>\u90FD\u662F\u6570\u5B57\u5219\uFF1A</p><ul><li><p>\u4E24\u4E2A\u90FD +0</p></li><li><p>\u4E24\u4E2A\u90FD -0</p></li><li><p>\u4E24\u4E2A\u90FD NaN</p></li><li><p>\u6216\u4E24\u8005\u90FD\u4E0D\u4E3A\u96F6\u4E14\u4E24\u8005\u5747\u4E0DNaN\u76F8\u540C\uFF0C\u4E14\u4E24\u8005\u90FD\u5177\u6709\u76F8\u540C\u7684\u503C</p></li></ul></li></ul><p>\u8FD9\u5E76\u4E0D\u76F8\u540C ==\u3002\u8BE5 ==\u8FD0\u8425\u5546\u5E94\u7528\u5404\u79CD\u5F3A\u5236\u8F6C\u6362\u53CC\u65B9\uFF08\u5982\u679C\u5B83\u4EEC\u4E0D\u662F\u540C\u4E00\u7C7B\u578B\uFF09\u6D4B\u8BD5\u76F8\u7B49\uFF08\u5BFC\u81F4\u8FD9\u79CD\u884C\u4E3A\u50CF\u4EE5\u524D\u4E00\u6837 &quot;&quot; == false\u662Ftrue\uFF09\uFF0C\u4F46Object.is\u4E0D\u5F3A\u8FEB\u4EFB\u4F55\u4E00\u4E2A\u503C</p><p>\u8FD9\u4E5F\u4E0D\u76F8\u540C ===\u3002\u7684 ===\u64CD\u4F5C\u8005\uFF08\u548C==\u64CD\u4F5C\u5458\u4EE5\u53CA\uFF09\u5BF9\u5F85\u6570\u503C-0\u548C+0\u4E3A\u76F8\u7B49\u548C\u5E76\u89E3\u51B3Number.NaN \u4E3A\u4E0D\u7B49\u4E8ENaN\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// true</span>

Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// false</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// false</span>

<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> foo<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// false</span>

Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// true</span>

<span class="token comment">// Special Cases</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">// false</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">0n</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0n</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><blockquote><p>Polyfill</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Object<span class="token punctuation">.</span>is<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>Object<span class="token punctuation">,</span> <span class="token string">&quot;is&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// SameValue algorithm</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Steps 1-5, 7-10</span>
        <span class="token comment">// Steps 6.b-6.e: +0 != -0</span>
        <span class="token keyword">return</span> x <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token number">1</span> <span class="token operator">/</span> x <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">/</span> y<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// Step 6.a: NaN == NaN</span>
        <span class="token keyword">return</span> x <span class="token operator">!==</span> x <span class="token operator">&amp;&amp;</span> y <span class="token operator">!==</span> y<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,18);function t(e,o){return p}var l=n(a,[["render",t],["__file","interview1.html.vue"]]);export{l as default};
