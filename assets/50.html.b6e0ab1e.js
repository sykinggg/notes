import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.92084e2a.js";const p={},e=t(`<h1 id="\u7B2C54\u9898-\u5199\u4E00\u4E2A-repeat-\u65B9\u6CD5-\u5B9E\u73B0\u5B57\u7B26\u4E32\u7684\u590D\u5236\u62FC\u63A5" tabindex="-1"><a class="header-anchor" href="#\u7B2C54\u9898-\u5199\u4E00\u4E2A-repeat-\u65B9\u6CD5-\u5B9E\u73B0\u5B57\u7B26\u4E32\u7684\u590D\u5236\u62FC\u63A5" aria-hidden="true">#</a> \u7B2C54\u9898\uFF1A\u5199\u4E00\u4E2A repeat \u65B9\u6CD5\uFF0C\u5B9E\u73B0\u5B57\u7B26\u4E32\u7684\u590D\u5236\u62FC\u63A5</h1><h2 id="\u65B9\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00</h2><blockquote><p>\u7A7A\u6570\u7EC4 <code>join</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C</h2><blockquote><p>\u6539\u826F\u65B9\u6CD51\uFF0C\u7701\u53BB\u521B\u5EFA\u6570\u7EC4\u8FD9\u4E00\u6B65\uFF0C\u63D0\u9AD8\u6027\u80FD\u3002\u4E4B\u6240\u4EE5\u521B\u5EFA\u4E00\u4E2A\u5E26 <code>length</code> \u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u662F\u56E0\u4E3A\u8981\u8C03\u7528\u6570\u7EC4\u7684\u539F\u578B\u65B9\u6CD5\uFF0C\u9700\u8981\u6307\u5B9A <code>call</code> \u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u7C7B\u6570\u7EC4\u5BF9\u8C61\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">length</span><span class="token operator">:</span> n <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u4E09" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E09" aria-hidden="true">#</a> \u65B9\u6CD5\u4E09</h2><blockquote><p>\u6539\u826F\u65B9\u6CD5 2\uFF0C\u5229\u7528\u95ED\u5305\u7F13\u5B58 <code>join</code>\uFF0C\u907F\u514D\u91CD\u590D\u521B\u5EFA\u5BF9\u8C61\u3001\u5BFB\u627E\u65B9\u6CD5\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> repeat <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> join <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>join<span class="token punctuation">,</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    obj<span class="token punctuation">.</span>length <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">join</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u56DB" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u56DB" aria-hidden="true">#</a> \u65B9\u6CD5\u56DB</h2><blockquote><p>\u4F7F\u7528\u4E8C\u5206\u6CD5\uFF0C\u51CF\u5C11\u64CD\u4F5C\u6B21\u6570</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> s <span class="token operator">=</span> target<span class="token punctuation">,</span> total <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      total<span class="token punctuation">[</span>total<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    s <span class="token operator">+=</span> s<span class="token punctuation">;</span>
    n <span class="token operator">=</span> n <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// Math.floor(n / 2);</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> total<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u4E94" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E94" aria-hidden="true">#</a> \u65B9\u6CD5\u4E94</h2><blockquote><p>\u65B9\u6CD5 4 \u7684\u53D8\u79CD\uFF0C\u514D\u53BB\u521B\u5EFA\u6570\u7EC4\u4E0E\u4F7F\u7528 <code>join</code>\u3002\u7F3A\u70B9\u662F\u5FAA\u73AF\u4E2D\u521B\u5EFA\u7684\u5B57\u7B26\u4E32\u6BD4\u8981\u6C42\u7684\u957F\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> s <span class="token operator">=</span> target<span class="token punctuation">,</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">*</span> n<span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    s <span class="token operator">+=</span> s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">=</span> n <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
  s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u516D" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u516D" aria-hidden="true">#</a> \u65B9\u6CD5\u516D</h2><blockquote><p>\u65B9\u6CD5 <code>4</code> \u7684\u6539\u826F\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> s <span class="token operator">=</span> target<span class="token punctuation">,</span> total <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      total <span class="token operator">+=</span> s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    s <span class="token operator">+=</span> s<span class="token punctuation">;</span>
    n <span class="token operator">=</span> n <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> total<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u4E03" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E03" aria-hidden="true">#</a> \u65B9\u6CD5\u4E03</h2><blockquote><p>\u4E0E <code>6</code> \u76F8\u8FD1\uFF0C\u4E0D\u8FC7\u9012\u5F52\u5728\u6D4F\u89C8\u5668\u4E2D\u6709\u4F18\u5316\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token function">repeat</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  s <span class="token operator">+=</span> s<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s <span class="token operator">+=</span> target<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u516B" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u516B" aria-hidden="true">#</a> \u65B9\u6CD5\u516B</h2><blockquote><p>\u4E00\u5219\u53CD\u4F8B\uFF0C\u5F88\u6162\uFF0C\u4F46\u662F\u53EF\u884C\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;&quot;</span> <span class="token operator">:</span> target<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">repeat</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token operator">--</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6700\u540E\u7ED9\u51FA MDN \u4E2D\u7684<code>String.prototype.repeat</code>\u7684 <code>polyfill</code> \u65B9\u6CD5\uFF0C\u5927\u5BB6\u4E5F\u53EF\u4EE5\u8FDB\u884C\u53C2\u8003\uFF1A</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>repeat<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">repeat</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;can\\&#39;t convert &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span> <span class="token operator">+</span> <span class="token string">&#39; to object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token comment">// To convert string to integer.</span>
    count <span class="token operator">=</span> <span class="token operator">+</span>count<span class="token punctuation">;</span>
    <span class="token comment">// Check NaN</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">!=</span> count<span class="token punctuation">)</span>
      count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RangeError</span><span class="token punctuation">(</span><span class="token string">&#39;repeat count must be non-negative&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">Infinity</span><span class="token punctuation">)</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RangeError</span><span class="token punctuation">(</span><span class="token string">&#39;repeat count must be less than infinity&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    count <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// Ensuring count is a 31-bit integer allows us to heavily optimize the</span>
    <span class="token comment">// main part. But anyway, most current (August 2014) browsers can&#39;t handle</span>
    <span class="token comment">// strings 1 &lt;&lt; 28 chars or longer, so:</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">*</span> count <span class="token operator">&gt;=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">28</span><span class="token punctuation">)</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RangeError</span><span class="token punctuation">(</span><span class="token string">&#39;repeat count must not overflow maximum string size&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> maxCount <span class="token operator">=</span> str<span class="token punctuation">.</span>length <span class="token operator">*</span> count<span class="token punctuation">;</span>
    count <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       str <span class="token operator">+=</span> str<span class="token punctuation">;</span>
       count<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    str <span class="token operator">+=</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> maxCount <span class="token operator">-</span> str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> str<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","50.html.vue"]]);export{k as default};