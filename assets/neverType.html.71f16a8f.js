import{_ as c,r as a,o as r,c as l,b as n,d as e,w as i,F as u,e as s,a as p}from"./app.9d3046e8.js";const d={},k=n("h1",{id:"never",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#never","aria-hidden":"true"},"#"),s(" Never")],-1),b={class:"custom-container tip"},m=n("p",{class:"custom-container-title"},"TIP",-1),h={href:"https://egghead.io/lessons/typescript-use-the-never-type-to-avoid-code-with-dead-ends-using-typescript",target:"_blank",rel:"noopener noreferrer"},v=s("\u4E00\u4E2A\u5173\u4E8E never \u7684\u4ECB\u7ECD\u89C6\u9891"),_=p(`<p>\u7A0B\u5E8F\u8BED\u8A00\u7684\u8BBE\u8BA1\u786E\u5B9E\u5E94\u8BE5\u5B58\u5728\u4E00\u4E2A\u5E95\u90E8\u7C7B\u578B\u7684\u6982\u5FF5\uFF0C\u5F53\u4F60\u5728\u5206\u6790\u4EE3\u7801\u6D41\u7684\u65F6\u5019\uFF0C\u8FD9\u4F1A\u662F\u4E00\u4E2A\u7406\u6240\u5F53\u7136\u5B58\u5728\u7684\u7C7B\u578B\u3002TypeScript \u5C31\u662F\u8FD9\u6837\u4E00\u79CD\u5206\u6790\u4EE3\u7801\u6D41\u7684\u8BED\u8A00\uFF08\u{1F60E}\uFF09\uFF0C\u56E0\u6B64\u5B83\u9700\u8981\u4E00\u4E2A\u53EF\u9760\u7684\uFF0C\u4EE3\u8868\u6C38\u8FDC\u4E0D\u4F1A\u53D1\u751F\u7684\u7C7B\u578B\u3002</p><p><code>never</code> \u7C7B\u578B\u662F TypeScript \u4E2D\u7684\u5E95\u5C42\u7C7B\u578B\u3002\u5B83\u81EA\u7136\u88AB\u5206\u914D\u7684\u4E00\u4E9B\u4F8B\u5B50\uFF1A</p><ul><li>\u4E00\u4E2A\u4ECE\u6765\u4E0D\u4F1A\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570\uFF08\u5982\uFF1A\u5982\u679C\u51FD\u6570\u5185\u542B\u6709 <code>while(true) {}</code>\uFF09\uFF1B</li><li>\u4E00\u4E2A\u603B\u662F\u4F1A\u629B\u51FA\u9519\u8BEF\u7684\u51FD\u6570\uFF08\u5982\uFF1A<code>function foo() { throw new Error(&#39;Not Implemented&#39;) }</code>\uFF0C<code>foo</code> \u7684\u8FD4\u56DE\u7C7B\u578B\u662F <code>never</code>\uFF09\uFF1B</li></ul><p>\u4F60\u4E5F\u53EF\u4EE5\u5C06\u5B83\u7528\u505A\u7C7B\u578B\u6CE8\u89E3\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F46\u662F\uFF0C<code>never</code> \u7C7B\u578B\u4EC5\u80FD\u88AB\u8D4B\u503C\u7ED9\u53E6\u5916\u4E00\u4E2A <code>never</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// Error: number \u7C7B\u578B\u4E0D\u80FD\u8D4B\u503C\u7ED9 never \u7C7B\u578B</span>

<span class="token comment">// ok, \u4F5C\u4E3A\u51FD\u6570\u8FD4\u56DE\u7C7B\u578B\u7684 never</span>
<span class="token keyword">let</span> bar<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Throw my hands in the air like I just dont care&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5F88\u68D2\uFF0C\u73B0\u5728\u8BA9\u770B\u770B\u5B83\u7684\u5173\u952E\u7528\u4F8B\u3002</p><h2 id="\u7528\u4F8B-\u8BE6\u7EC6\u7684\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u7528\u4F8B-\u8BE6\u7EC6\u7684\u68C0\u67E5" aria-hidden="true">#</a> \u7528\u4F8B\uFF1A\u8BE6\u7EC6\u7684\u68C0\u67E5</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5982\u679C\u4E0D\u662F\u4E00\u4E2A never \u7C7B\u578B\uFF0C\u8FD9\u4F1A\u62A5\u9519\uFF1A</span>
  <span class="token comment">// - \u4E0D\u662F\u6240\u6709\u6761\u4EF6\u90FD\u6709\u8FD4\u56DE\u503C \uFF08\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF09</span>
  <span class="token comment">// - \u6216\u8005\u68C0\u67E5\u5230\u65E0\u6CD5\u8BBF\u95EE\u7684\u4EE3\u7801</span>
  <span class="token comment">// \u4F46\u662F\u7531\u4E8E TypeScript \u7406\u89E3 \`fail\` \u51FD\u6570\u8FD4\u56DE\u4E3A \`never\` \u7C7B\u578B</span>
  <span class="token comment">// \u5B83\u53EF\u4EE5\u8BA9\u4F60\u8C03\u7528\u5B83\uFF0C\u56E0\u4E3A\u4F60\u53EF\u80FD\u4F1A\u5728\u8FD0\u884C\u65F6\u7528\u5B83\u6765\u505A\u5B89\u5168\u6216\u8005\u8BE6\u7EC6\u7684\u68C0\u67E5\u3002</span>
  <span class="token keyword">return</span> <span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">&#39;Unexhaustive&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fail</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,10),y=n("code",null,"never",-1),f=s(" \u4EC5\u80FD\u88AB\u8D4B\u503C\u7ED9\u53E6\u5916\u4E00\u4E2A "),g=n("code",null,"never",-1),w=s(" \u7C7B\u578B\uFF0C\u56E0\u6B64\u4F60\u53EF\u4EE5\u7528\u5B83\u6765\u8FDB\u884C\u7F16\u8BD1\u65F6\u7684\u5168\u9762\u7684\u68C0\u67E5\uFF0C\u5C06\u4F1A\u5728"),x=s("\u8FA8\u6790\u8054\u5408\u7C7B\u578B"),T=s("\u4E2D\u8BB2\u89E3\u5B83\u3002"),E=p('<h2 id="\u4E0E-void-\u7684\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#\u4E0E-void-\u7684\u5DEE\u5F02" aria-hidden="true">#</a> \u4E0E <code>void</code> \u7684\u5DEE\u5F02</h2><p>\u4E00\u65E6\u6709\u4EBA\u544A\u8BC9\u4F60\uFF0C<code>never</code> \u8868\u793A\u4E00\u4E2A\u4ECE\u6765\u4E0D\u4F1A\u4F18\u96C5\u7684\u8FD4\u56DE\u7684\u51FD\u6570\u65F6\uFF0C\u4F60\u53EF\u80FD\u9A6C\u4E0A\u5C31\u4F1A\u60F3\u5230\u4E0E\u6B64\u7C7B\u4F3C\u7684 <code>void</code>\uFF0C\u7136\u800C\u5B9E\u9645\u4E0A\uFF0C<code>void</code> \u8868\u793A\u6CA1\u6709\u4EFB\u4F55\u7C7B\u578B\uFF0C<code>never</code> \u8868\u793A\u6C38\u8FDC\u4E0D\u5B58\u5728\u7684\u503C\u7684\u7C7B\u578B\u3002</p><p>\u5F53\u4E00\u4E2A\u51FD\u6570\u8FD4\u56DE\u7A7A\u503C\u65F6\uFF0C\u5B83\u7684\u8FD4\u56DE\u503C\u4E3A void \u7C7B\u578B\uFF0C\u4F46\u662F\uFF0C\u5F53\u4E00\u4E2A\u51FD\u6570\u6C38\u4E0D\u8FD4\u56DE\u65F6\uFF08\u6216\u8005\u603B\u662F\u629B\u51FA\u9519\u8BEF\uFF09\uFF0C\u5B83\u7684\u8FD4\u56DE\u503C\u4E3A never \u7C7B\u578B\u3002void \u7C7B\u578B\u53EF\u4EE5\u88AB\u8D4B\u503C\uFF08\u5728 strictNullChecking \u4E3A false \u65F6\uFF09\uFF0C\u4F46\u662F\u9664\u4E86 never \u672C\u8EAB\u4EE5\u5916\uFF0C\u5176\u4ED6\u4EFB\u4F55\u7C7B\u578B\u4E0D\u80FD\u8D4B\u503C\u7ED9 never\u3002</p>',3);function N(I,L){const t=a("ExternalLinkIcon"),o=a("RouterLink");return r(),l(u,null,[k,n("div",b,[m,n("p",null,[n("a",h,[v,e(t)])])]),_,n("p",null,[y,f,g,w,e(o,{to:"/ts/typings/discrominatedUnion.html"},{default:i(()=>[x]),_:1}),T]),E],64)}var V=c(d,[["render",N],["__file","neverType.html.vue"]]);export{V as default};
