import{_ as n,a as s}from"./app.41d9fe5b.js";const a={},e=s(`<h1 id="\u7B2C6\u5929-\u5199\u4E00\u4E2A\u53BB\u9664\u5236\u8868\u7B26\u548C\u6362\u884C\u7B26\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C6\u5929-\u5199\u4E00\u4E2A\u53BB\u9664\u5236\u8868\u7B26\u548C\u6362\u884C\u7B26\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u7B2C6\u5929 \u5199\u4E00\u4E2A\u53BB\u9664\u5236\u8868\u7B26\u548C\u6362\u884C\u7B26\u7684\u65B9\u6CD5</h1><hr><h2 id="\u601D\u8DEF\u4E00" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E00" aria-hidden="true">#</a> \u601D\u8DEF\u4E00</h2><p>\u4F7F\u7528\u6B63\u5219\u8FDB\u884C\u5339\u914D</p><h3 id="\u89E3\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E00" aria-hidden="true">#</a> \u89E3\u6CD5\u4E00</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \\f  \u5339\u914D\u6362\u9875\u5B57\u7B26\u3002
 * \\n  \u5339\u914D\u6362\u884C\u5B57\u7B26\u3002
 * \\r  \u5339\u914D\u56DE\u8F66\u7B26\u5B57\u7B26\u3002
 * \\t  \u5339\u914D\u5236\u8868\u5B57\u7B26\u3002
 * \\v  \u5339\u914D\u5782\u76F4\u5236\u8868\u7B26\u3002
 * \\b \u9000\u683C\u7B26 backspace
 * <span class="token keyword">@param</span> <span class="token parameter">str</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span> <span class="token operator">|</span> string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">removeEmpty</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\t\\n\\v\\r\\f\\b]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">removeEmpty</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">|
  
   
|</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,6);function p(t,r){return e}var o=n(a,[["render",p],["__file","interview6.html.vue"]]);export{o as default};
