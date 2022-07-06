import{_ as n,a}from"./app.41d9fe5b.js";const s={},p=a(`<h2 id="\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#\u4F20\u53C2" aria-hidden="true">#</a> \u4F20\u53C2</h2><p>\u5982\u679C\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u58F0\u660E\u51FD\u6570\uFF0C\u8C03\u7528\u65B9\u5F0F\uFF1A \u4E0D\u4F20\u53C2\uFF1Athis.func1\uFF0C\u5982\u679C\u4E0D\u4F20\u53C2\uFF0C\u4E8B\u4EF6\u53C2\u6570\u9ED8\u8BA4\u4F1A\u81EA\u5DF1\u6DFB\u52A0\u4E0A \u4F20\u53C2\uFF1A (e) =&gt; {this.func1(e,&#39;param1&#39;, &#39;param2&#39;)}\uFF0C\u5982\u679C\u4F20\u53C2\uFF0C\u4E8B\u4EF6\u53C2\u6570\u9700\u8981\u624B\u52A8\u4F20\u9012\u8FC7\u6765</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token function-variable function">func1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> param1<span class="token punctuation">,</span> param2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>param1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>param2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5982\u679C\u4E0D\u7528\u7BAD\u5934\u51FD\u6570\u58F0\u660E\u51FD\u6570\uFF0C\u90A3\u4E48\u8C03\u7528\u7684\u65F6\u5019\u9700\u8981\u4F7F\u7528this.func2.bind(this) \u4E0D\u4F20\u53C2\uFF1Athis.func2.bind(this) \u4F20\u53C2\uFF1Athis.func2.bind(this, &#39;param1&#39;, &#39;param2&#39;) \u4E8B\u4EF6\u5BF9\u8C61\u9690\u5F0F\u7684\u6DFB\u52A0\u5230\u6700\u540E\u4E00\u4E2A\u5F62\u53C2\u4E0A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token function">func2</span> <span class="token punctuation">(</span><span class="token parameter">param1<span class="token punctuation">,</span> param2<span class="token punctuation">,</span> e<span class="token punctuation">,</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>param1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>param2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="react\u7684\u4E8B\u4EF6\u548C\u666E\u901A\u7684html\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#react\u7684\u4E8B\u4EF6\u548C\u666E\u901A\u7684html\u4E8B\u4EF6" aria-hidden="true">#</a> React\u7684\u4E8B\u4EF6\u548C\u666E\u901A\u7684HTML\u4E8B\u4EF6</h2><p>\u533A\u522B\uFF1A</p><ol><li><p>\u5BF9\u4E8E\u4E8B\u4EF6\u540D\u79F0\u547D\u540D\u65B9\u5F0F\uFF0C\u539F\u751F\u4E8B\u4EF6\u4E3A\u5168\u5C0F\u5199\uFF0Creact \u4E8B\u4EF6\u91C7\u7528\u5C0F\u9A7C\u5CF0</p></li><li><p>\u5BF9\u4E8E\u4E8B\u4EF6\u51FD\u6570\u5904\u7406\u8BED\u6CD5\uFF0C\u539F\u751F\u4E8B\u4EF6\u4E3A\u5B57\u7B26\u4E32\uFF0Creact \u4E8B\u4EF6\u4E3A\u51FD\u6570</p></li><li><p>react \u4E8B\u4EF6\u4E0D\u80FD\u91C7\u7528 return false \u7684\u65B9\u5F0F\u6765\u963B\u6B62\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u884C\u4E3A</p></li><li><p>\u5408\u6210\u4E8B\u4EF6\u662F react \u6A21\u62DF\u539F\u751F DOM \u4E8B\u4EF6\u6240\u6709\u80FD\u529B\u7684\u4E00\u4E2A\u4E8B\u4EF6\u5BF9\u8C61</p></li></ol><p>\u4F18\u70B9\uFF1A</p><ol><li><p>\u517C\u5BB9\u6240\u6709\u6D4F\u89C8\u5668\uFF0C\u66F4\u597D\u7684\u8DE8\u5E73\u53F0</p></li><li><p>\u5C06\u4E8B\u4EF6\u7EDF\u4E00\u5B58\u653E\u5728\u4E00\u4E2A\u6570\u7EC4\uFF0C\u907F\u514D\u9891\u7E41\u7684\u65B0\u589E\u4E0E\u5220\u9664\uFF08\u5783\u573E\u56DE\u6536\uFF09</p></li><li><p>\u65B9\u4FBF react \u7EDF\u4E00\u7BA1\u7406\u548C\u4E8B\u52A1\u673A\u5236</p></li></ol><p>\u4E8B\u4EF6\u7684\u6267\u884C\u987A\u5E8F\u4E3A\u539F\u751F\u4E8B\u4EF6\u5148\u6267\u884C\uFF0C\u5408\u6210\u4E8B\u4EF6\u540E\u6267\u884C\uFF0C\u5408\u6210\u4E8B\u4EF6\u4F1A\u5192\u6CE1\u7ED1\u5B9A\u5230 document \u4E0A\uFF0C\u6240\u4EE5\u5C3D\u91CF\u907F\u514D\u539F\u751F\u4E8B\u4EF6\u4E0E\u5408\u6210\u4E8B\u4EF6\u6DF7\u7528\uFF0C\u5982\u679C\u539F\u751F\u4E8B\u4EF6\u963B\u6B62\u5192\u6CE1\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5408\u6210\u4E8B\u4EF6\u4E0D\u6267\u884C\uFF0C\u56E0\u4E3A\u9700\u8981\u5192\u6CE1\u5230document \u4E0A\u5408\u6210\u4E8B\u4EF6\u624D\u4F1A\u6267\u884C</p><h2 id="\u963B\u6B62\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A" tabindex="-1"><a class="header-anchor" href="#\u963B\u6B62\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A" aria-hidden="true">#</a> \u963B\u6B62\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A</h2><ul><li><p>event.preventDefault();\u963B\u6B62\u6D4F\u89C8\u5668\u9ED8\u8BA4\u884C\u4E3A\uFF0C \u4F8B\u5982\u6807\u7B7E\u4E0D\u8DF3\u8F6C</p></li><li><p>event.stopPropagation();\u963B\u6B62\u5192\u6CE1\uFF1B \u4F8B\u5982\u4E0A\u7EA7\u70B9\u51FB\u4E8B\u4EF6\u4E0D\u751F\u6548</p></li></ul>`,13);function t(e,c){return p}var l=n(s,[["render",t],["__file","interview42.html.vue"]]);export{l as default};
