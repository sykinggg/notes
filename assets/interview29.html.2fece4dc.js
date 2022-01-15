import{r as a,o as p,c as t,b as n,d as e,F as o,a as c,e as l}from"./app.78b6d3a3.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=c(`<h1 id="\u7B2C29\u5929-\u5199\u4E00\u4E2A\u83B7\u53D6\u6570\u7EC4\u7684\u6700\u5927\u503C\u3001\u6700\u5C0F\u503C\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C29\u5929-\u5199\u4E00\u4E2A\u83B7\u53D6\u6570\u7EC4\u7684\u6700\u5927\u503C\u3001\u6700\u5C0F\u503C\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u7B2C29\u5929 \u5199\u4E00\u4E2A\u83B7\u53D6\u6570\u7EC4\u7684\u6700\u5927\u503C\u3001\u6700\u5C0F\u503C\u7684\u65B9\u6CD5</h1><h2 id="\u601D\u8DEF\u4E00" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E00" aria-hidden="true">#</a> \u601D\u8DEF\u4E00</h2><p>es6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>Array<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">62</span><span class="token punctuation">,</span><span class="token number">91</span><span class="token punctuation">,</span><span class="token number">78</span><span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">62</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//  91</span>
Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>Array<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">27</span><span class="token punctuation">,</span><span class="token number">64</span><span class="token punctuation">,</span><span class="token number">90</span><span class="token punctuation">,</span><span class="token number">78</span><span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">62</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 27</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li>ES5</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> array<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>array<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> max <span class="token operator">=</span> array<span class="token punctuation">[</span>array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      min <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>ES6</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>prev<span class="token punctuation">,</span> cur<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> prev <span class="token operator">=</span> prev <span class="token operator">&gt;</span> cur <span class="token operator">?</span> prev <span class="token operator">:</span> cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u601D\u8DEF\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E8C" aria-hidden="true">#</a> \u601D\u8DEF\u4E8C</h2><h1 id="_1-\u6392\u5E8F\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-\u6392\u5E8F\u6CD5" aria-hidden="true">#</a> 1. \u6392\u5E8F\u6CD5</h1><p>\u9996\u5148\u5BF9\u6570\u7EC4\u8FDB\u884C\u6392\u5E8F\uFF0C\u53EF\u4EE5\u6309\u7167\u5347\u5E8F\u6392\u5E8F\uFF0C\u4E5F\u53EF\u4EE5\u6309\u7167\u964D\u5E8F\u6392\u5E8F\u3002\u6392\u5E8F\u4E4B\u540E\u7684\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u5C31\u662F\u9700\u8981\u7684\u6700\u5927\u503C\u6216\u6700\u5C0F\u503C\u3002</p><p>\u6392\u5E8F\u53EF\u4EE5\u4F7F\u7528<code>sort()</code>\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u65B9\u6CD5\u4E00:\u6392\u5E8F\u6CD5</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5347\u5E8F\u6392\u5E8F</span>
    <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

maxValue <span class="token operator">=</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
minValue <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6700\u5927\u503C\u4E3A:&#39;</span><span class="token punctuation">,</span> maxValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 91</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6700\u5C0F\u503C\u4E3A:&#39;</span><span class="token punctuation">,</span> minValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h1 id="_2-\u5047\u8BBE\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u5047\u8BBE\u6CD5" aria-hidden="true">#</a> 2. \u5047\u8BBE\u6CD5</h1><p>\u53EF\u4EE5\u5047\u8BBE\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E00\u4E2A\u503C\u662F\u6700\u5927\u503C\uFF0C\u7136\u540E\u62FF\u8FD9\u4E2A\u6700\u5927\u503C\u548C\u6570\u7EC4\u4E2D\u7684\u5176\u4ED6\u5143\u7D20\u9010\u4E00\u6BD4\u8F83\uFF0C\u5982\u679C\u540E\u9762\u7684\u67D0\u4E00\u4E2A\u503C\u6BD4\u5047\u8BBE\u7684\u503C\u8FD8\u5927\uFF0C\u8BF4\u660E\u5047\u8BBE\u9519\u4E86\uFF0C\u628A\u5047\u8BBE\u7684\u503C\u8FDB\u884C\u66FF\u6362\uFF0C\u5C06\u8FD9\u4E2A\u503C\u8D4B\u5047\u8BBE\u4E3A\u65B0\u7684\u6700\u5927\u503C\u3002\u5FAA\u73AF\u7ED3\u675F\u540E\uFF0C\u62FF\u5230\u7684\u7ED3\u679C\u5C31\u662F\u60F3\u8981\u7684\u3002\u6700\u5C0F\u503C\u53CD\u4E4B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5047\u8BBE\u7B2C\u4E00\u4E2A\u6570\u7EC4\u5143\u7D20\u5C31\u662F\u6570\u7EC4\u4E2D\u7684\u6700\u5927\u503C</span>
maxValue <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5982\u679C\u5F53\u524D\u5143\u7D20\u7684\u503C\u6BD4\u5047\u8BBE\u7684\u6700\u5927\u503C\u5927\uFF0C\u5C31\u8BBE\u7F6E\u5F53\u524D\u503C\u4E3A\u6700\u5927\u503C\uFF0C\u7EE7\u7EED\u548C\u540E\u9762\u5143\u7D20\u6BD4\u8F83</span>
    maxValue <span class="token operator">=</span> cur <span class="token operator">&gt;</span> maxValue <span class="token operator">?</span> cur <span class="token operator">:</span> maxValue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6700\u5927\u503C\u4E3A:&#39;</span><span class="token punctuation">,</span> maxValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5047\u8BBE\u7B2C\u4E00\u4E2A\u6570\u7EC4\u5143\u7D20\u5C31\u662F\u6570\u7EC4\u4E2D\u7684\u6700\u5C0F\u503C</span>
minValue <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
     <span class="token comment">// \u5982\u679C\u5F53\u524D\u5143\u7D20\u7684\u503C\u6BD4\u5047\u8BBE\u7684\u6700\u5C0F\u503C\u5C0F\uFF0C\u5C31\u8BBE\u7F6E\u5F53\u524D\u503C\u4E3A\u6700\u5C0F\u503C\uFF0C\u7EE7\u7EED\u548C\u540E\u9762\u5143\u7D20\u6BD4\u8F83</span>
    minValue <span class="token operator">=</span> cur <span class="token operator">&lt;</span> minValue <span class="token operator">?</span> cur <span class="token operator">:</span> minValue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6700\u5C0F\u503C\u4E3A:&#39;</span><span class="token punctuation">,</span> minValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h1 id="_3-\u4F7F\u7528math\u5BF9\u8C61\u4E2D\u7684max-min\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528math\u5BF9\u8C61\u4E2D\u7684max-min\u65B9\u6CD5" aria-hidden="true">#</a> 3. \u4F7F\u7528<code>Math</code>\u5BF9\u8C61\u4E2D\u7684<code>max/min</code>\u65B9\u6CD5</h1><p><code>Math.max()</code>\u51FD\u6570\u8FD4\u56DE\u4E00\u7EC4\u6570\u4E2D\u7684\u6700\u5927\u503C\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F46\u662F\u8FD9\u4E2A\u51FD\u6570\u5E76\u4E0D\u63A5\u53D7\u6570\u7EC4\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4E14\u8FD9\u4E2A\u51FD\u6570\u4E5F\u4E0D\u662F\u6570\u7EC4\u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5\uFF0C\u65E0\u6CD5\u901A\u8FC7\u6570\u7EC4\u76F4\u63A5\u8C03\u7528\u3002\u8FD9\u91CC\u53EF\u4EE5\u4F7F\u7528<code>apply</code>\u6765\u5B9E\u73B0\u6C42\u6570\u7EC4\u4E2D\u7684\u6700\u503C\uFF0C\u56E0\u4E3A<code>apply()</code>\u65B9\u6CD5\u63A5\u6536\u7684\u51FD\u6570\u53C2\u6570\u521A\u597D\u662F\u4EE5\u6570\u7EC4\u65B9\u5F0F\u8FDB\u884C\u4F20\u5165\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4F7F\u7528apply\u65B9\u6CD5,\u53EF\u4EE5\u76F4\u63A5\u5C06\u6570\u7EC4\u4F5C\u7528\u53C2\u6570\u4F20\u5165</span>
maxValue <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
minValue <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6700\u5927\u503C\u4E3A:&#39;</span><span class="token punctuation">,</span> maxValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 91</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6700\u5C0F\u503C\u4E3A:&#39;</span><span class="token punctuation">,</span> minValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E00\u4E2A\u5C0F\u95EE\u9898\uFF1A</p><p>\u4E3A\u4EC0\u4E48\u901A\u8FC7<code>apply</code>\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6570\u7EC4\u6C42\u6700\u503C\u4E86\u5462\uFF1F</p><p>\u770B\u4E00\u4E0B<code>apply</code>\u7684<code>this</code>\u53C2\u6570\uFF0C\u4E0A\u9762\u4EE3\u7801\u4E2D\u4F20\u9012\u4E86\u4E00\u4E2Anull\uFF0C\u4E5F\u5C31\u662F\u5E76\u6CA1\u6709\u5C06<code>Math.max()</code>\u65B9\u6CD5\u7ED1\u5B9A\u5230\u5176\u4ED6\u5BF9\u8C61\u4E0A\u3002\u8FD9\u91CC\u53EA\u6D89\u53CA\u5230\u4E86\u4E24\u70B9\uFF1A</p><ul><li><code>Math.max()</code>\u9700\u8981\u4F20\u5165\u7684\u662F\u591A\u4E2A\u6570\u503C</li><li><code>apply()</code>\u53EA\u9700\u8981\u628A\u63A5\u6536\u5230\u7684\u591A\u4E2A\u53C2\u6570\u4F20\u9012\u7ED9<code>Math.max()</code>\uFF0C\u53EA\u4E0D\u8FC7\u63A5\u6536\u7684\u591A\u4E2A\u53C2\u6570\u662F\u4EE5\u6570\u7EC4\u5F62\u5F0F\u63A5\u6536\u7684\uFF0C\u521A\u597D\u53EF\u4EE5\u628A\u6570\u7EC4\u4F20\u5165\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6570\u7EC4\u6C42\u6700\u503C\u3002\u5728<code>apply()</code>\u65B9\u6CD5\u5185\u90E8\u518D\u5C06\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u62C6\u5206\u6210\u4E00\u4E2A\u4E00\u4E2A\u7684\u53C2\u6570\u503C\uFF0C\u4F20\u9012\u7ED9<code>Math.max()</code>\u5373\u53EF\u3002</li></ul><h1 id="_4-\u4F7F\u7528es6\u7684\u6269\u5C55\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_4-\u4F7F\u7528es6\u7684\u6269\u5C55\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 4. \u4F7F\u7528ES6\u7684\u6269\u5C55\u8FD0\u7B97\u7B26</h1><p>\u6269\u5C55\u8FD0\u7B97\u7B26\u53EF\u4EE5\u5C55\u5F00\u6570\u7EC4\uFF0C\u4EE3\u66FF<code>apply()</code>\u5C06\u6570\u7EC4\u8F6C\u5316\u6210\u51FD\u6570\u53C2\u6570\u7684\u9700\u6C42\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token operator">...</span>numbers<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u90A3\u4E48\u6B63\u597D\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u8FD0\u7B97\u7B26\u5C06\u6570\u7EC4\u5C55\u5F00\uFF0C\u5C55\u5F00\u6210\u591A\u4E2A\u6570\u503C\uFF0C\u7136\u540E\u4F5C\u4E3A\u591A\u4E2A\u53C2\u6570\u5411<code>Math.max()</code>\u4F20\u5165\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6700\u5927\u503C\u4E3A:&#39;</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 91</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6700\u5C0F\u503C\u4E3A:&#39;</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,34),k={href:"https://www.cnblogs.com/zhouyangla/p/8482010.html",target:"_blank",rel:"noopener noreferrer"},m=l("\u53C2\u8003\u6587\u7AE0");function d(b,h){const s=a("ExternalLinkIcon");return p(),t(o,null,[i,n("p",null,[n("a",k,[m,e(s)])])],64)}var x=u(r,[["render",d]]);export{x as default};
