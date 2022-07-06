import{_ as c,r as a,o as l,c as u,b as n,d as p,w as i,F as r,e as s,a as t}from"./app.adb48220.js";const k={},d=n("h1",{id:"bind-\u662F\u6709\u5BB3\u7684",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bind-\u662F\u6709\u5BB3\u7684","aria-hidden":"true"},"#"),s(" Bind \u662F\u6709\u5BB3\u7684")],-1),b={class:"custom-container tip"},m=n("p",{class:"custom-container-title"},"TIP",-1),_=s("\u8BD1\u8005\u6CE8\uFF1A\u5728\u8FD9\u4E2A "),y={href:"https://github.com/Microsoft/TypeScript/pull/27028?from=timeline&isappinstalled=0",target:"_blank",rel:"noopener noreferrer"},h=s("PR"),f=s(" \u4E0B\uFF0C\u5DF2\u7ECF\u89E3\u51B3 "),g=n("code",null,"bind",-1),v=s("\u3001"),w=n("code",null,"call",-1),x=s("\u3001"),A=n("code",null,"apply",-1),O=s(" \u7C7B\u578B\u6B63\u786E\u63A8\u5BFC\u7684\u95EE\u9898\uFF0C\u9884\u8BA1\u5728 3.2 \u7248\u672C\u4E2D\u53D1\u5E03\u3002"),P=t(`<p>\u8FD9\u662F\u5728 <code>lib.d.ts</code> \u4E2D <code>bind</code> \u7684\u5B9A\u4E49\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">bind</span><span class="token punctuation">(</span>thisArg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token operator">...</span>argArray<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F60\u53EF\u4EE5\u770B\u5230\u4ED6\u7684\u8FD4\u56DE\u503C\u662F <code>any</code>\uFF0C\u8FD9\u610F\u5473\u7740\u5728\u51FD\u6570\u4E0A\u8C03\u7528 <code>bind</code> \u4F1A\u5BFC\u81F4\u4F60\u5728\u539F\u59CB\u51FD\u6570\u8C03\u7528\u7B7E\u540D\u4E0A\u5C06\u4F1A\u5B8C\u5168\u5931\u53BB\u7C7B\u578B\u7684\u5B89\u5168\u68C0\u67E5\u3002</p><p>\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">twoParams</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> curryOne <span class="token operator">=</span> <span class="token function">twoParams</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">curryOne</span><span class="token punctuation">(</span><span class="token number">456</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
<span class="token function">curryOne</span><span class="token punctuation">(</span><span class="token string">&#39;456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E00\u4E2A\u66F4\u597D\u7684\u65B9\u5F0F\u7684\u662F\u4F7F\u7528\u7C7B\u578B\u6CE8\u89E3\u7684\u7BAD\u5934\u51FD\u6570\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">twoParams</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">curryOne</span> <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">twoParams</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">curryOne</span><span class="token punctuation">(</span><span class="token number">456</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
<span class="token function">curryOne</span><span class="token punctuation">(</span><span class="token string">&#39;456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,7),E=s("\u5982\u679C\u4F60\u60F3\u7528\u4E00\u4E2A\u67EF\u91CC\u5316\u7684\u51FD\u6570\uFF0C\u4F60\u53EF\u4EE5\u770B\u770B"),B=s("\u6B64\u7AE0\u8282"),L=s("\uFF1A"),N=t(`<h2 id="\u7C7B\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u6210\u5458" aria-hidden="true">#</a> \u7C7B\u6210\u5458</h2><p>\u53E6\u4E00\u4E2A\u5E38\u89C1\u7528\u9014\u662F\u5728\u4F20\u9012\u7C7B\u51FD\u6570\u65F6\u4F7F\u7528 <code>bind</code> \u6765\u786E\u4FDD <code>this</code> \u7684\u6B63\u786E\u503C\uFF0C\u4E0D\u8981\u8FD9\u4E48\u505A\u3002</p><p>\u5728\u63A5\u4E0B\u6765\u7684\u793A\u4F8B\u4E2D\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u4E86 <code>bind</code>\uFF0C\u4F60\u5C06\u4F1A\u5931\u53BB\u51FD\u6570\u53C2\u6570\u7684\u7C7B\u578B\u5B89\u5168\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Adder</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">add</span><span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">+</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">useAdd</span><span class="token punctuation">(</span><span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> adder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Adder</span><span class="token punctuation">(</span><span class="token string">&#39;mary had a little \u{1F411}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">useAdd</span><span class="token punctuation">(</span>adder<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>adder<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6CA1\u6709\u7F16\u8BD1\u7684\u9519\u8BEF</span>
<span class="token function">useAdd</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> adder<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: number \u4E0D\u80FD\u5206\u914D\u7ED9 string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5982\u679C\u4F60\u60F3\u4F20\u9012\u4E00\u4E2A\u7C7B\u6210\u5458\u7684\u51FD\u6570\uFF0C\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u3002\u4F8B\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Adder</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// \u6B64\u65F6\uFF0C\u8FD9\u4E2A\u51FD\u6570\u53EF\u4EE5\u5B89\u5168\u4F20\u9012</span>
  add <span class="token operator">=</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">+</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u53E6\u4E00\u79CD\u65B9\u6CD5\u662F\u624B\u52A8\u6307\u5B9A\u8981\u7ED1\u5B9A\u7684\u53D8\u91CF\u7684\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> add<span class="token operator">:</span> <span class="token keyword">typeof</span> adder<span class="token punctuation">.</span>add <span class="token operator">=</span> adder<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>adder<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,8);function V(I,R){const e=a("ExternalLinkIcon"),o=a("RouterLink");return l(),u(r,null,[d,n("div",b,[m,n("p",null,[_,n("a",y,[h,p(e)]),f,g,v,w,x,A,O])]),P,n("p",null,[E,p(o,{to:"/ts/tips/curry.html"},{default:i(()=>[B]),_:1}),L]),N],64)}var C=c(k,[["render",V],["__file","bind.html.vue"]]);export{C as default};
