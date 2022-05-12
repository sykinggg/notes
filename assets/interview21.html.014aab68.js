import{_ as t,a}from"./app.2fe08138.js";const d={},n=a(`<h1 id="\u7B2C21\u5929-\u5199\u4E00\u4E2A\u65B9\u6CD5\u9A8C\u8BC1\u662F\u5426\u4E3A\u4E2D\u6587" tabindex="-1"><a class="header-anchor" href="#\u7B2C21\u5929-\u5199\u4E00\u4E2A\u65B9\u6CD5\u9A8C\u8BC1\u662F\u5426\u4E3A\u4E2D\u6587" aria-hidden="true">#</a> \u7B2C21\u5929 \u5199\u4E00\u4E2A\u65B9\u6CD5\u9A8C\u8BC1\u662F\u5426\u4E3A\u4E2D\u6587</h1><h2 id="\u601D\u8DEF-1" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF-1" aria-hidden="true">#</a> \u601D\u8DEF 1</h2><p>\u4F7F\u7528<code>Unicode</code>\u7F16\u7801 <code>4e00</code> \u548C <code>9fa5</code> \u5206\u522B\u8868\u793A\u7B2C\u4E00\u4E2A\u6C49\u5B57\u548C\u6700\u540E\u4E00\u4E2A\u6C49\u5B57\u7684\u7F16\u7801</p><h3 id="\u89E3\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E00" aria-hidden="true">#</a> \u89E3\u6CD5\u4E00</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isChinese</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[\\u4e00-\\u9fa5]+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u601D\u8DEF-2" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF-2" aria-hidden="true">#</a> \u601D\u8DEF 2</h2><p>\u6309\u7167\u4E2D\u6587\u5B57\u7B26\u5BF9\u5E94\u7F16\u5199\u6B63\u5219</p><table><thead><tr><th>\u5B57\u7B26\u96C6</th><th>\u5B57\u6570</th><th>Unicode \u7F16\u7801</th></tr></thead><tbody><tr><td>\u57FA\u672C\u6C49\u5B57</td><td>20902\u5B57</td><td>4E00-9FA5</td></tr><tr><td>\u57FA\u672C\u6C49\u5B57\u8865\u5145</td><td>38\u5B57</td><td>9FA6-9FCB</td></tr><tr><td>\u6269\u5C55A</td><td>6582\u5B57</td><td>3400-4DB5</td></tr><tr><td>\u6269\u5C55B</td><td>42711\u5B57</td><td>20000-2A6D6</td></tr><tr><td>\u6269\u5C55C</td><td>4149\u5B57</td><td>2A700-2B734</td></tr><tr><td>\u6269\u5C55D</td><td>222\u5B57</td><td>2B740-2B81D</td></tr><tr><td>\u5EB7\u7199\u90E8\u9996</td><td>214\u5B57</td><td>2F00-2FD5</td></tr><tr><td>\u90E8\u9996\u6269\u5C55</td><td>115\u5B57</td><td>2E80-2EF3</td></tr><tr><td>\u517C\u5BB9\u6C49\u5B57</td><td>477\u5B57</td><td>F900-FAD9</td></tr><tr><td>\u517C\u5BB9\u6269\u5C55</td><td>542\u5B57</td><td>2F800-2FA1D</td></tr><tr><td>PUA(GBK)\u90E8\u4EF6</td><td>81\u5B57</td><td>E815-E86F</td></tr><tr><td>\u90E8\u4EF6\u6269\u5C55</td><td>452\u5B57</td><td>E400-E5E8</td></tr><tr><td>PUA\u589E\u8865</td><td>207\u5B57</td><td>E600-E6CF</td></tr><tr><td>\u6C49\u5B57\u7B14\u753B</td><td>36\u5B57</td><td>31C0-31E3</td></tr><tr><td>\u6C49\u5B57\u7ED3\u6784</td><td>12\u5B57</td><td>2FF0-2FFB</td></tr><tr><td>\u6C49\u8BED\u6CE8\u97F3</td><td>22\u5B57</td><td>3105-3120</td></tr><tr><td>\u6CE8\u97F3\u6269\u5C55</td><td>22\u5B57</td><td>31A0-31BA</td></tr><tr><td>\u3007</td><td>1\u5B57</td><td>3007</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\u4E00-\\u9FFF\\u3400-\\u4DBF\\uF900-\\uFAFF\\U00020000-U0002EBEF]</span><span class="token regex-delimiter">/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,9);function e(s,r){return n}var p=t(d,[["render",e],["__file","interview21.html.vue"]]);export{p as default};
