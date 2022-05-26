import{_ as n,o as s,c as a,a as p}from"./app.e9fd9ffa.js";const t={},e=p(`<h1 id="\u7B2C12\u5929-\u5199\u4E00\u4E2A\u83B7\u53D6\u5F53\u524Durl\u67E5\u8BE2\u5B57\u7B26\u4E32\u4E2D\u7684\u53C2\u6570\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C12\u5929-\u5199\u4E00\u4E2A\u83B7\u53D6\u5F53\u524Durl\u67E5\u8BE2\u5B57\u7B26\u4E32\u4E2D\u7684\u53C2\u6570\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u7B2C12\u5929 \u5199\u4E00\u4E2A\u83B7\u53D6\u5F53\u524Durl\u67E5\u8BE2\u5B57\u7B26\u4E32\u4E2D\u7684\u53C2\u6570\u7684\u65B9\u6CD5</h1><h2 id="\u601D\u8DEF\u4E00" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E00" aria-hidden="true">#</a> \u601D\u8DEF\u4E00</h2><p>\u4F7F\u7528js\u65B9\u6CD5\u6216\u8005\u6B63\u5219\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u5207\u5272\u5E76\u53D6\u5F97\u6570\u636E</p><h3 id="\u89E3\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E00" aria-hidden="true">#</a> \u89E3\u6CD5\u4E00</h3><p>\u4F7F\u7528js\u8FDB\u884C\u5B57\u7B26\u4E32\u5206\u5272\u4EE5\u53CAurl\u7F16\u7801\u9006\u8F6C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">params</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> search <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>search<span class="token punctuation">;</span>
  search <span class="token operator">=</span> search<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> search<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>search<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  search<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u89E3\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E8C" aria-hidden="true">#</a> \u89E3\u6CD5\u4E8C</h3><p>\u4F7F\u7528\u6B63\u5219\u8FDB\u884C\u5339\u914D\u64CD\u4F5C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">urlParam</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> param <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    location<span class="token punctuation">.</span>search<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([^&amp;=?]+)=([^&amp;]+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span>$1<span class="token punctuation">,</span>$2</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> param<span class="token punctuation">[</span>$1<span class="token punctuation">]</span> <span class="token operator">=</span> $2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> param<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u89E3\u6CD5\u4E09" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E09" aria-hidden="true">#</a> \u89E3\u6CD5\u4E09</h3><p>\u8FDB\u884C\u7ED3\u6784\u7684\u5F62\u5F0F\u8FDB\u884C\u62C6\u5206</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u7B2C12\u5929 \u5199\u4E00\u4E2A\u83B7\u53D6\u5F53\u524Durl\u67E5\u8BE2\u5B57\u7B26\u4E32\u4E2D\u7684\u53C2\u6570\u7684\u65B9\u6CD5</span>

<span class="token keyword">function</span> <span class="token function">params</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> kvs <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;?&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&amp;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  kvs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">param</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> param<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;=&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> url <span class="token operator">=</span>
  <span class="token string">&quot;https://s.taobao.com/search?q=%E7%83%AD%E6%B0%B4%E5%A3%B6&amp;imgfile=&amp;commend=all&amp;ssid=s5-e&amp;search_type=item&amp;sourceId=tb.index&amp;spm=a21bo.2017.201856-taobao-item.1&amp;ie=utf8&amp;initiative_id=tbindexz_20170306&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">params</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>ie<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u89E3\u6CD5\u56DB" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u56DB" aria-hidden="true">#</a> \u89E3\u6CD5\u56DB</h3><p>\u4F7F\u7528\u6B63\u5219\u53D6\u53CD\u7684\u5F62\u5F0F\u89E3\u6790\u53C2\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getURLParams</span><span class="token punctuation">(</span>search <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    search<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([^&amp;=?]+)=([^&amp;]+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> $1<span class="token punctuation">,</span> $2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> $1<span class="token punctuation">,</span> $2<span class="token punctuation">)</span>
        params<span class="token punctuation">[</span>$1<span class="token punctuation">]</span> <span class="token operator">=</span> $2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> params<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getURLParams</span><span class="token punctuation">(</span><span class="token string">&#39;?name=name&amp;age=3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getURLParams</span><span class="token punctuation">(</span><span class="token string">&#39;?name=name&amp;&amp;age=3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getURLParams</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getURLParams</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>\u6CE8\u610F</strong>\uFF1A<code>[^&amp;=?]</code>\u4E2D\u7684<code>^</code>\u8868\u793A\u53D6\u53CD\uFF0C\u610F\u601D\u662F\u9664\u4E86<code>&amp;=?</code>\u5916\u7684\u5176\u4ED6\u5B57\u7B26</p></blockquote>`,16),o=[e];function c(u,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","interview12.html.vue"]]);export{r as default};
