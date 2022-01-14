import{r as s,o as e,c as t,b as n,d as o,F as p,a as c,e as l}from"./app.3aebe68d.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=c(`<h1 id="\u7B2C28\u5929-\u89E3\u91CA\u4E0B\u8FD9\u6BB5\u4EE3\u7801\u7684\u610F\u601D" tabindex="-1"><a class="header-anchor" href="#\u7B2C28\u5929-\u89E3\u91CA\u4E0B\u8FD9\u6BB5\u4EE3\u7801\u7684\u610F\u601D" aria-hidden="true">#</a> \u7B2C28\u5929 \u89E3\u91CA\u4E0B\u8FD9\u6BB5\u4EE3\u7801\u7684\u610F\u601D\uFF01</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token function">$$</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span><span class="token punctuation">{</span> a<span class="token punctuation">.</span>style<span class="token punctuation">.</span>outline<span class="token operator">=</span><span class="token string">&quot;1px solid #&quot;</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token operator">~</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528" aria-hidden="true">#</a> \u4F5C\u7528</h2><blockquote><p>\u5728\u4F60\u7684Chrome\u6D4F\u89C8\u5668\u7684\u63A7\u5236\u53F0\u4E2D\u8F93\u5165\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F60\u4F1A\u53D1\u73B0\u4E0D\u540CHTML\u5C42\u90FD\u88AB\u4F7F\u7528\u4E0D\u540C\u7684\u989C\u8272\u6DFB\u52A0\u4E86\u4E00\u4E2A\u9AD8\u4EAE\u7684\u8FB9\u6846\u3002\u662F\u4E0D\u662F\u975E\u5E38\u9177\uFF1F\u4F46\u662F\uFF0C\u7B80\u5355\u6765\u8BF4\uFF0C\u8FD9\u6BB5\u4EE3\u7801\u53EA\u662F\u9996\u5148\u83B7\u53D6\u4E86\u6240\u6709\u7684\u9875\u9762\u5143\u7D20\uFF0C\u7136\u540E\u4F7F\u7528\u4E00\u4E2A\u4E0D\u540C\u7684\u989C\u8272\u4E3A\u5B83\u4EEC\u6DFB\u52A0\u4E86\u4E00\u4E2A1px\u7684\u8FB9\u6846\u3002</p></blockquote><h2 id="\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790" aria-hidden="true">#</a> \u89E3\u6790</h2><ul><li><code>[].forEach.call() </code>=&gt; \u8C03\u7528\u5F15\u7528\u6570\u7EC4\u7684forEach\u65B9\u6CD5</li><li><code>$$(&#39;*&#39;) </code> =&gt; <code>document.querySelectorAll(&#39;*&#39;) </code></li><li><code>~~a</code> =&gt; <code>parseInt(a)</code></li><li><code>1&lt;&lt;24</code> =&gt; \u5BF9\u4E8C\u8FDB\u65701\u5C0F\u6570\u70B9\u53F3\u79FB24\u4F4D</li><li><code>(parseInt(Math.random()*(1&lt;&lt;24)).toString(16))</code> =&gt; \u83B7\u5F97\u4E86\u4E00\u4E2A\u4F4D\u4E8E<code>0-16777216</code>\u4E4B\u95F4\u7684\u968F\u673A\u6574\u6570\uFF0C\u4E5F\u5C31\u662F\u968F\u673A\u989C\u8272\uFF0C\u518D\u4F7F\u7528<code>toString(16)</code>\u5C06\u5B83\u8F6C\u5316\u4E3A\u5341\u516D\u8FDB\u5236\u6570\u3002</li></ul><h2 id="\u624B\u5199\u7B80\u7248" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199\u7B80\u7248" aria-hidden="true">#</a> \u624B\u5199\u7B80\u7248</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[].forEach.call(
        document.querySelectorAll(&#39;*&#39;),
        function(a){
            a.style.outline=&quot;1px solid #&quot; + 
            (parseInt(Math.random()*(1&lt;&lt;24)).toString(16))
        }
    )
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003\uFF1A</h2>`,9),d={href:"https://my.oschina.net/l3ve/blog/330358",target:"_blank",rel:"noopener noreferrer"},k=l("\u4ECE\u4E00\u884C\u4EE3\u7801\u91CC\u9762\u5B66\u70B9JavaScript");function h(m,b){const a=s("ExternalLinkIcon");return e(),t(p,null,[u,n("ul",null,[n("li",null,[n("a",d,[k,o(a)])])])],64)}var x=r(i,[["render",h]]);export{x as default};
