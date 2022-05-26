import{_ as n,o as s,c as a,a as e}from"./app.e9fd9ffa.js";const p={},t=e(`<h1 id="es7\u65B0\u7279\u6027-2016" tabindex="-1"><a class="header-anchor" href="#es7\u65B0\u7279\u6027-2016" aria-hidden="true">#</a> ES7\u65B0\u7279\u6027\uFF082016\uFF09</h1><p><code>ES2016</code>\u6DFB\u52A0\u4E86\u4E24\u4E2A\u5C0F\u7684\u7279\u6027\u6765\u8BF4\u660E\u6807\u51C6\u5316\u8FC7\u7A0B\uFF1A</p><ul><li><p>\u6570\u7EC4<code>includes()</code>\u65B9\u6CD5\uFF0C\u7528\u6765\u5224\u65AD\u4E00\u4E2A\u6570\u7EC4\u662F\u5426\u5305\u542B\u4E00\u4E2A\u6307\u5B9A\u7684\u503C\uFF0C\u6839\u636E\u60C5\u51B5\uFF0C\u5982\u679C\u5305\u542B\u5219\u8FD4\u56DE<code>true</code>\uFF0C\u5426\u5219\u8FD4\u56DE<code>false</code>\u3002</p></li><li><p><code>a ** b</code>\u6307\u6570\u8FD0\u7B97\u7B26\uFF0C\u5B83\u4E0E <code>Math.pow(a, b)</code>\u76F8\u540C\u3002</p></li></ul><h2 id="_1-array-prototype-includes" tabindex="-1"><a class="header-anchor" href="#_1-array-prototype-includes" aria-hidden="true">#</a> 1.Array.prototype.includes()</h2><p><code>includes()</code> \u51FD\u6570\u7528\u6765\u5224\u65AD\u4E00\u4E2A\u6570\u7EC4\u662F\u5426\u5305\u542B\u4E00\u4E2A\u6307\u5B9A\u7684\u503C\uFF0C\u5982\u679C\u5305\u542B\u5219\u8FD4\u56DE <code>true</code>\uFF0C\u5426\u5219\u8FD4\u56DE<code>false</code>\u3002</p><p><code>includes</code> \u51FD\u6570\u4E0E <code>indexOf</code> \u51FD\u6570\u5F88\u76F8\u4F3C\uFF0C\u4E0B\u9762\u4E24\u4E2A\u8868\u8FBE\u5F0F\u662F\u7B49\u4EF7\u7684\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u6765\u5224\u65AD\u6570\u5B57\u4E2D\u662F\u5426\u5305\u542B\u67D0\u4E2A\u5143\u7D20\uFF1A</p><blockquote><p>\u5728<code>ES7</code>\u4E4B\u524D\u7684\u505A\u6CD5</p></blockquote><p>\u4F7F\u7528<code>indexOf()</code>\u9A8C\u8BC1\u6570\u7EC4\u4E2D\u662F\u5426\u5B58\u5728\u67D0\u4E2A\u5143\u7D20\uFF0C\u8FD9\u65F6\u9700\u8981\u6839\u636E\u8FD4\u56DE\u503C\u662F\u5426\u4E3A-1\u6765\u5224\u65AD\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;react&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;angular&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;react&#39;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;react\u5B58\u5728&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F7F\u7528<code>ES7</code>\u7684<code>includes()</code></p></blockquote><p>\u4F7F\u7528<code>includes()</code>\u9A8C\u8BC1\u6570\u7EC4\u4E2D\u662F\u5426\u5B58\u5728\u67D0\u4E2A\u5143\u7D20\uFF0C\u8FD9\u6837\u66F4\u52A0\u76F4\u89C2\u7B80\u5355\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;react&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;angular&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;react&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;react\u5B58\u5728&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u6307\u6570\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#_2-\u6307\u6570\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> 2.\u6307\u6570\u64CD\u4F5C\u7B26</h2><p>\u5728<code>ES7</code>\u4E2D\u5F15\u5165\u4E86\u6307\u6570\u8FD0\u7B97\u7B26<code>**</code>\uFF0C<code>**</code>\u5177\u6709\u4E0E<code>Math.pow(..)</code>\u7B49\u6548\u7684\u8BA1\u7B97\u7ED3\u679C\u3002</p><blockquote><p>\u4E0D\u4F7F\u7528\u6307\u6570\u64CD\u4F5C\u7B26</p></blockquote><p>\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u9012\u5F52\u51FD\u6570<code>calculateExponent</code>\u6216\u8005<code>Math.pow()</code>\u8FDB\u884C\u6307\u6570\u8FD0\u7B97\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">calculateExponent</span><span class="token punctuation">(</span><span class="token parameter">base<span class="token punctuation">,</span> exponent</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>exponent <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> base<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> base <span class="token operator">*</span> <span class="token function">calculateExponent</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> exponent <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">calculateExponent</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8F93\u51FA1024</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8F93\u51FA1024</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F7F\u7528\u6307\u6570\u64CD\u4F5C\u7B26</p></blockquote><p>\u4F7F\u7528\u6307\u6570\u8FD0\u7B97\u7B26<code>**</code>\uFF0C\u5C31\u50CF<code>+</code>\u3001<code>-</code>\u7B49\u64CD\u4F5C\u7B26\u4E00\u6837\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">**</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u8F93\u51FA1024</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22),c=[t];function o(l,i){return s(),a("div",null,c)}var d=n(p,[["render",o],["__file","es7News.html.vue"]]);export{d as default};
