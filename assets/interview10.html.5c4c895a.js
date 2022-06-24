import{_ as n,o as s,c as a,a as t}from"./app.013e756e.js";const p={},e=t(`<h1 id="\u7B2C10\u5929-\u7B80\u8981\u63CF\u8FF0\u4E0B\u4EC0\u4E48\u662F\u56DE\u8C03\u51FD\u6570\u5E76\u5199\u4E00\u4E2A\u4F8B\u5B50\u51FA\u6765" tabindex="-1"><a class="header-anchor" href="#\u7B2C10\u5929-\u7B80\u8981\u63CF\u8FF0\u4E0B\u4EC0\u4E48\u662F\u56DE\u8C03\u51FD\u6570\u5E76\u5199\u4E00\u4E2A\u4F8B\u5B50\u51FA\u6765" aria-hidden="true">#</a> \u7B2C10\u5929 \u7B80\u8981\u63CF\u8FF0\u4E0B\u4EC0\u4E48\u662F\u56DE\u8C03\u51FD\u6570\u5E76\u5199\u4E00\u4E2A\u4F8B\u5B50\u51FA\u6765</h1><hr><h2 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h2><blockquote><p>\u901A\u5E38\u5BF9\u4E8E\u67D0\u4E00\u4E2A\u5177\u4F53\u5F62\u5F0F\u7684\u5B9A\u4E49\u4ECE\u5176\u4F8B\u5B50\u5165\u624B</p></blockquote><h3 id="demo1" tabindex="-1"><a class="header-anchor" href="#demo1" aria-hidden="true">#</a> demo1</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>dom<span class="token punctuation">.</span><span class="token function">addEventerlisten</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// do something</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="demo2" tabindex="-1"><a class="header-anchor" href="#demo2" aria-hidden="true">#</a> demo2</h3><p>\u56DE\u8C03\u51FD\u6570\u9996\u5148\u4F5C\u4E3A\u4E00\u4E2A\u51FD\u6570\u7684\u53C2\u6570\u4F20\u5165\uFF0C\u5F53\u8FD9\u4E2A\u51FD\u6570\u6267\u884C\u540E\u518D\u6267\u884C\u7684\u51FD\u6570\uFF0C\u5F80\u5F80\u4F1A\u4F9D\u8D56\u524D\u4E00\u4E2A\u51FD\u6570\u6267\u884C\u7684\u7ED3\u679C\u3002 \u5728 <code>javascript</code> \u4E2D\uFF0C\u5BF9\u4E8E <code>I/O</code>\u3001<code>HTTP</code> \u8BF7\u6C42\u7B49\u5F02\u6B65\u64CD\u4F5C\uFF0C\u4E3A\u4E86\u63A7\u5236\u6267\u884C\u7684\u987A\u5E8F\u5C31\u9700\u8981\u4F7F\u7528\u56DE\u8C03\u7684\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7B2C\u4E09\u4E2A\u53C2\u6570\u5C31\u662F\u56DE\u8C03\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token parameter">param1<span class="token punctuation">,</span> param2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// To do some action</span>
  <span class="token comment">// \u5F80\u5F80\u4F1A\u5728\u6700\u540E\u8C03\u7528 callback \u5E76\u4E14\u4F20\u5165\u64CD\u4F5C\u8FC7\u7684\u53C2\u6570</span>
  <span class="token function">callback</span><span class="token punctuation">(</span>cbParam1<span class="token punctuation">,</span> cbParam2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9E\u9645\u8C03\u7528\u7684\u65F6\u5019</span>
<span class="token function">func1</span><span class="token punctuation">(</span>param1<span class="token punctuation">,</span> param2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">cbParam1<span class="token punctuation">,</span> cbParam2<span class="token punctuation">,</span> <span class="token operator">...</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// To do some action</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6709\u8FC7\u4E2A\u4EFB\u52A1\u9700\u8981\u987A\u5E8F\u6267\u884C\u65F6\uFF0C\u5982\u679C\u91C7\u7528\u56DE\u8C03\u51FD\u6570\u7684\u5F62\u5F0F\u5C31\u4F1A\u51FA\u73B0\u719F\u6089\u7684\u201C\u56DE\u8C03\u5730\u72F1\u201D\u7684\u60C5\u51B5\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5728 ES6 \u4E2D\u5C31\u6709\u4E86 <code>Promise</code> \u548C <code>async</code>/<code>await</code> \u65B9\u6CD5\u3002 \u76EE\u524D\u770B\u6765 <code>async</code>/<code>await</code> \u5728\u5F02\u6B65\u5199\u6CD5\u4E0A\u8F83\u4E3A\u4F18\u96C5\u3002</p><h3 id="demo3" tabindex="-1"><a class="header-anchor" href="#demo3" aria-hidden="true">#</a> demo3</h3><blockquote><p>\u56DE\u8C03\u662F\u628A\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u53E6\u4E00\u4E2A\u51FD\u6570\uFF0C\u5F53\u8BE5\u51FD\u6570\u6EE1\u8DB3\u67D0\u4E2A\u6761\u4EF6\u65F6\u89E6\u53D1\u8BE5\u53C2\u6570\u51FD\u6570\u3002 \u4E3B\u8981\u7528\u4E8E\u5F02\u6B65\u64CD\u4F5C \u4F8B\u5982\u7F51\u7EDC\u8BF7\u6C42 \u9632\u6B62\u9875\u9762\u540C\u6B65\u4EE3\u7801\u963B\u585E\u5BFC\u81F4\u6E32\u67D3\u7EBF\u7A0B\u505C\u6B62</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">longTask</span><span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span>timeout</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span>timeout<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">longTask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u56DE\u8C03\u4EFB\u52A1\u88AB\u6267\u884C\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u662F\u540C\u6B65\u4EE3\u7801 \u4E0D\u4F1A\u963B\u585E\u6211&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="demo4" tabindex="-1"><a class="header-anchor" href="#demo4" aria-hidden="true">#</a> demo4</h3><p>\u56DE\u8C03\u51FD\u6570\u4E00\u822C\u7528\u6765\u89E3\u51B3\u5F02\u6B65\u8BF7\u6C42\uFF1A</p><blockquote><p>\u7ED9\u6BCF\u4E00\u4E2A\u4EFB\u52A1\uFF08\u51FD\u6570\uFF09\u4F20\u5165\u4E00\u4E2A\u6216\u591A\u4E2A\u56DE\u8C03\u51FD\u6570\uFF08callback\uFF09\uFF0C\u524D\u4E00\u4E2A\u4EFB\u52A1\u7ED3\u675F\u540E\uFF08\u6BD4\u5982\u8BF7\u6C42\u63A5\u53E3\uFF09\uFF0C\u4E0D\u662F\u6267\u884C\u540E\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u800C\u662F\u6267\u884C\u56DE\u8C03\u51FD\u6570\uFF0C\u540E\u4E00\u4E2A\u4EFB\u52A1\u5219\u662F\u4E0D\u7B49\u524D\u4E00\u4E2A\u4EFB\u52A1\u7ED3\u675F\u5C31\u6267\u884C\uFF0C\u6240\u4EE5\u7A0B\u5E8F\u7684\u6267\u884C\u987A\u5E8F\u4E0E\u4EFB\u52A1\u7684\u6392\u5217\u987A\u5E8F\u662F\u4E0D\u4E00\u81F4\u7684\u3001\u5F02\u6B65\u7684\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u666E\u901A\u8BED\u6CD5
 * <span class="token keyword">@param</span> scr:\u56FE\u7247\u7684url\u5730\u5740
 * <span class="token keyword">@param</span> <span class="token parameter">callback\uFF1A\u56FE\u7247\u52A0\u8F7D\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</span>
 * <span class="token keyword">@param</span> <span class="token parameter">fail\uFF1A\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">loadImg</span><span class="token punctuation">(</span><span class="token parameter">scr<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> fail</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// onload \u4E8B\u4EF6\u5728\u56FE\u7247\u52A0\u8F7D\u5B8C\u6210\u540E\u7ACB\u5373\u6267\u884C,\u6210\u529F\u540E\u6267\u884Ccallback\u51FD\u6570,\u76F8\u5F53\u4E8E\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002</span>
    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span> <span class="token comment">// \u56FE\u7247\u52A0\u8F7D\u6210\u529F\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570,\u4F20\u5165img</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// \u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u6267\u884C\u8FD9\u4E2A\u51FD\u6570</span>
    img<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// \u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570,\u4F20\u5165img</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> scr
<span class="token punctuation">}</span>

<span class="token keyword">var</span> src <span class="token operator">=</span> <span class="token string">&#39;https://cdn.segmentfault.com/sponsor/20200202.png&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u8C03\u7528\u51FD\u6570\uFF0C\u4F20\u51652\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u7B2C\u4E00\u4E2A\u662F\u6210\u529F\u7684\u56DE\u8C03\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u5931\u8D25\u7684\u56DE\u8C03\u3002</span>
<span class="token function">loadImg</span><span class="token punctuation">(</span>src<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">img</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>img<span class="token punctuation">.</span>width<span class="token punctuation">)</span>  <span class="token comment">// \u56DE\u8C03\u51FD\u6570\u91CC\u6253\u5370\u56FE\u7247\u7684\u5BBD</span>

<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;failed&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8FD9\u4E2A\u662F\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><blockquote><p>\u56DE\u8C03\u51FD\u6570\u5C31\u662F\u4E00\u4E2A\u901A\u8FC7\u51FD\u6570\u6307\u9488\u8C03\u7528\u7684\u51FD\u6570\u3002\u5982\u679C\u4F60\u628A\u51FD\u6570\u7684\u6307\u9488\uFF08\u5730\u5740\uFF09\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u53E6\u4E00\u4E2A\u51FD\u6570\uFF0C\u5F53\u8FD9\u4E2A\u6307\u9488\u88AB\u7528\u6765\u8C03\u7528\u5176\u6240\u6307\u5411\u7684\u51FD\u6570\u65F6\uFF0C\u5C31\u8BF4\u8FD9\u662F\u56DE\u8C03\u51FD\u6570\u3002\u56DE\u8C03\u51FD\u6570\u4E0D\u662F\u7531\u8BE5\u51FD\u6570\u7684\u5B9E\u73B0\u65B9\u76F4\u63A5\u8C03\u7528\uFF0C\u800C\u662F\u5728\u7279\u5B9A\u7684\u4E8B\u4EF6\u6216\u6761\u4EF6\u53D1\u751F\u65F6\u7531\u53E6\u5916\u7684\u4E00\u65B9\u8C03\u7528\u7684\uFF0C\u7528\u4E8E\u5BF9\u8BE5\u4E8B\u4EF6\u6216\u6761\u4EF6\u8FDB\u884C\u54CD\u5E94\u3002</p></blockquote><blockquote><p>\u56DE\u8C03\u65B9\u6CD5 \u662F \u4EFB\u4F55\u4E00\u4E2A \u88AB \u4EE5\u8BE5\u56DE\u8C03\u65B9\u6CD5\u4E3A\u5176\u7B2C\u4E00\u4E2A\u53C2\u6570 \u7684 \u5176\u5B83\u65B9\u6CD5 \u8C03\u7528 \u7684\u65B9\u6CD5\u3002\u5F88\u591A\u65F6\u5019\uFF0C\u56DE\u8C03\u662F\u4E00\u4E2A\u5F53\u67D0\u4E9B\u4E8B\u4EF6\u53D1\u751F\u65F6\u88AB\u8C03\u7528\u7684\u65B9\u6CD5\u3002</p></blockquote>`,20),c=[e];function o(i,l){return s(),a("div",null,c)}var d=n(p,[["render",o],["__file","interview10.html.vue"]]);export{d as default};
