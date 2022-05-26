import{_ as a,o as e,c as n,b as t,a as c}from"./app.e9fd9ffa.js";const l={},r=c(`<h1 id="charset" tabindex="-1"><a class="header-anchor" href="#charset" aria-hidden="true">#</a> @charset</h1><h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><p><code>@charset</code> <u>CSS @\u89C4\u5219</u> \u6307\u5B9A\u6837\u5F0F\u8868\u4E2D\u4F7F\u7528\u7684\u5B57\u7B26\u7F16\u7801\u3002\u5B83\u5FC5\u987B\u662F\u6837\u5F0F\u8868\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u800C\u524D\u9762\u4E0D\u5F97\u6709\u4EFB\u4F55\u5B57\u7B26\u3002\u56E0\u4E3A\u5B83\u4E0D\u662F\u4E00\u4E2A<u>\u5D4C\u5957\u8BED\u53E5</u>\uFF0C\u6240\u4EE5\u4E0D\u80FD\u5728<u>@\u89C4\u5219\u6761\u4EF6\u7EC4</u>\u4E2D\u4F7F\u7528\u3002\u5982\u679C\u6709\u591A\u4E2A <code>@charset</code> <u>@\u89C4\u5219</u>\u88AB\u58F0\u660E\uFF0C\u53EA\u6709\u7B2C\u4E00\u4E2A\u4F1A\u88AB\u4F7F\u7528\uFF0C\u800C\u4E14\u4E0D\u80FD\u5728HTML\u5143\u7D20\u6216HTML\u9875\u9762\u7684\u5B57\u7B26\u96C6\u76F8\u5173 <code>&lt;style&gt;</code> \u5143\u7D20\u5185\u7684\u6837\u5F0F\u5C5E\u6027\u5185\u4F7F\u7528\u3002</p><ol><li><p>\u6587\u4EF6\u7684\u5F00\u5934\u7684 <code>Unicode byte-order</code> \u5B57\u7B26\u503C\u3002</p></li><li><p>\u7531Content-Type\uFF1AHTTP header \u4E2D\u7684 charset \u5C5E\u6027\u7ED9\u51FA\u7684\u503C\u6216\u7528\u4E8E\u63D0\u4F9B\u6837\u5F0F\u8868\u7684\u534F\u8BAE\u4E2D\u7684\u7B49\u6548\u503C\u3002</p></li><li><p><code>CSS</code> <u>@\u89C4\u5219</u> <code>@charset</code>\u3002</p></li><li><p>\u4F7F\u7528\u53C2\u8003\u6587\u6863\u5B9A\u4E49\u7684\u5B57\u7B26\u7F16\u7801\uFF1A <code>&lt;link&gt;</code> \u5143\u7D20\u7684 charset \u5C5E\u6027\u3002 \u8BE5\u65B9\u6CD5\u5728 HTML5 \u6807\u51C6\u4E2D\u5DF2\u5E9F\u9664\uFF0C\u65E0\u6CD5\u4F7F\u7528\u3002</p></li><li><p>\u5047\u8BBE\u6587\u6863\u662F UTF-8\u3002</p></li></ol><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@charset &quot;UTF-8&quot;;
@charset &quot;iso-8859-15&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>charset</strong></p><p>\u5B83\u662F\u4E00\u4E2A <code>&lt;string&gt;</code> \u8868\u793A\u5B57\u7B26\u7F16\u7801\u88AB\u4F7F\u7528\u3002\u5B83\u5FC5\u987B\u662F\u5728\u88AB <u>IANA-registry</u> \u58F0\u660E\u8FC7\u7684 web-safe \u5B57\u7B26\u7F16\u7801\u4E2D\u7684\u4E00\u4E2A, \u8FD8\u5FC5\u987B\u88AB\u53CC\u5F15\u53F7\u5305\u56F4, \u9075\u5FAA\u4E00\u4E2A\u7A7A\u683C\u5B57\u7B26 (U+0020)\uFF0C\u5E76\u4E14\u7ACB\u5373\u4EE5\u5206\u53F7\u7ED3\u675F\u3002 \u5982\u679C\u6709\u591A\u4E2A\u76F8\u5173\u7684\u7F16\u7801\u540D\u5B57\uFF0C\u53EA\u6709\u88AB\u6807\u8BB0\u4E3A preferred \u7684\u90A3\u4E2A\u624D\u4F1A\u88AB\u4F7F\u7528\u3002</p><p><strong>\u8BED\u6CD5\u683C\u5F0F</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@charset &quot;&lt;charset&gt;&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@charset</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@charset</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">;</span></span> <span class="token comment">/*\u5927\u5C0F\u5199\u4E0D\u654F\u611F*/</span>
<span class="token comment">/* \u8BBE\u7F6Ecss\u7684\u7F16\u7801\u683C\u5F0F\u4E3AUnicode UTF-8 */</span>
<span class="token atrule"><span class="token rule">@charset</span> <span class="token string">&#39;iso-8859-15&#39;</span><span class="token punctuation">;</span></span> <span class="token comment">/* \u65E0\u6548\u7684, \u4F7F\u7528\u4E86\u9519\u8BEF\u7684\u5F15\u53F7 */</span>
<span class="token atrule"><span class="token rule">@charset</span> <span class="token string">&#39;UTF-8&#39;</span><span class="token punctuation">;</span></span>       <span class="token comment">/* \u65E0\u6548\u7684, \u4F7F\u7528\u4E86\u9519\u8BEF\u7684\u5F15\u53F7 */</span>
<span class="token atrule"><span class="token rule">@charset</span>  <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">;</span></span>      <span class="token comment">/* \u65E0\u6548\u7684, \u591A\u4E8E\u4E00\u4E2A\u7A7A\u683C */</span>
 <span class="token atrule"><span class="token rule">@charset</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">;</span></span>      <span class="token comment">/* \u65E0\u6548\u7684, \u5728at-rule\u4E4B\u524D\u591A\u4E86\u4E00\u4E2A\u7A7A\u683C */</span>
<span class="token atrule"><span class="token rule">@charset</span> UTF-8<span class="token punctuation">;</span></span>         <span class="token comment">/* Invalid, without &#39; or &quot;, the charset is not a CSS &lt;string&gt; */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4F\u89C8\u5668\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u517C\u5BB9\u6027" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u517C\u5BB9\u6027</h2>`,13),o=["src"];function i(s,p){return e(),n("div",null,[r,t("img",{src:s.$withBase("/assets/mozillaCss/1617783332(1).jpg"),alt:"demo"},null,8,o)])}var u=a(l,[["render",i],["__file","charset.html.vue"]]);export{u as default};
