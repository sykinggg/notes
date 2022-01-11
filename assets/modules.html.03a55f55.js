import{r as o,o as t,c as p,b as e,d as a,F as r,a as c,e as s}from"./app.2f6bbef8.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},d=c(`<h1 id="\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a> \u6A21\u5757</h1><h2 id="\u4E3A\u4EC0\u4E48\u6211\u5BFC\u5165\u7684\u6A21\u5757\u5728\u7F16\u8BD1\u540E\u88AB\u5220\u9664\u4E86" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u6211\u5BFC\u5165\u7684\u6A21\u5757\u5728\u7F16\u8BD1\u540E\u88AB\u5220\u9664\u4E86" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u6211\u5BFC\u5165\u7684\u6A21\u5757\u5728\u7F16\u8BD1\u540E\u88AB\u5220\u9664\u4E86\uFF1F</h2><blockquote><p>\u6211\u5199\u4E86\u4E00\u4E9B\u8FD9\u6837\u7684\u4EE3\u7801</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> someModule <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;./myMod&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> x<span class="token operator">:</span> someModule<span class="token punctuation">.</span>SomeType <span class="token operator">=</span> <span class="token comment">/* something */</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>\u6709\u8FD9\u6837\u7684\u8F93\u51FA</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Expected to see &quot;var someModule = require(&#39;./myMod&#39;);&quot; here!</span>

<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token comment">/* something */</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>TypeScript</code> \u5047\u5B9A\u5BFC\u5165\u7684\u6A21\u5757\u6CA1\u6709\u526F\u4F5C\u7528\uFF0C\u6240\u4EE5\u5B83\u79FB\u9664\u4E86\u4E0D\u7528\u4E8E\u4EFB\u4F55\u8868\u8FBE\u5F0F\u7684\u6A21\u5757\u5BFC\u5165\u3002</p><p>\u4F7F\u7528 <code>import &quot;mod&quot;</code> \u8BED\u6CD5\u6765\u5F3A\u5236\u52A0\u8F7D\u6A21\u5757</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">&#39;./myMod&#39;</span><span class="token punctuation">;</span> <span class="token comment">// For side effects</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F60\u4E5F\u53EF\u4EE5\u7B80\u5355\u8C03\u7528\u6A21\u5757\uFF0C\u8FD9\u662F\u6700\u5E38\u89C1\u7684\u89E3\u51B3\u529E\u6CD5\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> someModule <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;./myMod&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
someModule<span class="token punctuation">;</span> <span class="token comment">// Used for side effects</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u4E3A\u4EC0\u4E48\u4E0D\u8DE8\u6A21\u5757\u6587\u4EF6\u5408\u5E76\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4E0D\u8DE8\u6A21\u5757\u6587\u4EF6\u5408\u5E76\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4E0D\u8DE8\u6A21\u5757\u6587\u4EF6\u5408\u5E76\u547D\u540D\u7A7A\u95F4\uFF1F</h2>`,12),u=s("TODO\uFF1A\u672C\u5C0F\u8282\u5185\u5BB9\u8BF7\u67E5\u770B\uFF1A"),m={href:"https://stackoverflow.com/questions/30357634/how-do-i-use-namespaces-with-typescript-external-modules",target:"_blank",rel:"noopener noreferrer"},k=s("https://stackoverflow.com/questions/30357634/how-do-i-use-namespaces-with-typescript-external-modules"),h=s(" \u6216\u8005 "),b={href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-5.html#namespace-keyword",target:"_blank",rel:"noopener noreferrer"},g=s("https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-5.html#namespace-keyword");function y(_,f){const n=o("ExternalLinkIcon");return t(),p(r,null,[d,e("p",null,[u,e("a",m,[k,a(n)]),h,e("a",b,[g,a(n)])])],64)}var x=l(i,[["render",y]]);export{x as default};
