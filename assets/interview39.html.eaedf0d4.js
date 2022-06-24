import{_ as n,o as s,c as a,a as t}from"./app.013e756e.js";const o={},e=t(`<p><code>navigator.geolocation.getCurrentPosition(success, error, options)</code></p><p>\u652F\u6301IE9+</p><h2 id="geolocation-getcurrentposition" tabindex="-1"><a class="header-anchor" href="#geolocation-getcurrentposition" aria-hidden="true">#</a> Geolocation.getCurrentPosition()</h2><p><code>Geolocation.getCurrentPosition()</code> \u65B9\u6CD5\u7528\u6765\u83B7\u53D6\u8BBE\u5907\u5F53\u524D\u4F4D\u7F6E\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> <strong>\u8BED\u6CD5</strong></h2><blockquote><p>navigator.geolocation.getCurrentPosition(success, error, options)</p></blockquote><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> <strong>\u53C2\u6570</strong></h2><ul><li><p>success</p><p>\u6210\u529F\u5F97\u5230\u4F4D\u7F6E\u4FE1\u606F\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u4F7F\u7528<code>Position</code> \u5BF9\u8C61\u4F5C\u4E3A\u552F\u4E00\u7684\u53C2\u6570\u3002</p></li><li><p>error \u53EF\u9009</p><p>\u83B7\u53D6\u4F4D\u7F6E\u4FE1\u606F\u5931\u8D25\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u4F7F\u7528 <code>PositionError</code> \u5BF9\u8C61\u4F5C\u4E3A\u552F\u4E00\u7684\u53C2\u6570\uFF0C\u8FD9\u662F\u4E00\u4E2A\u53EF\u9009\u9879\u3002</p></li><li><p>options \u53EF\u9009</p><p>\u4E00\u4E2A\u53EF\u9009\u7684<code>PositionOptions</code> \u5BF9\u8C61\u3002</p></li></ul><h2 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> <strong>\u5B9E\u4F8B</strong></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enableHighAccuracy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maximumAge</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">pos</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> crd <span class="token operator">=</span> pos<span class="token punctuation">.</span>coords<span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Your current position is:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Latitude : &#39;</span> <span class="token operator">+</span> crd<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Longitude: &#39;</span> <span class="token operator">+</span> crd<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;More or less &#39;</span> <span class="token operator">+</span> crd<span class="token punctuation">.</span>accuracy <span class="token operator">+</span> <span class="token string">&#39; meters.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;ERROR(&#39;</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>code <span class="token operator">+</span> <span class="token string">&#39;): &#39;</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> error<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[e];function c(i,l){return s(),a("div",null,p)}var u=n(o,[["render",c],["__file","interview39.html.vue"]]);export{u as default};
