import{_ as e,r as t,o,c as p,b as n,d as c,a as l,e as s}from"./app.013e756e.js";const i={},r=l(`<h1 id="\u6CDB\u578B\u7684\u5B9E\u4F8B\u5316\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u7684\u5B9E\u4F8B\u5316\u7C7B\u578B" aria-hidden="true">#</a> \u6CDB\u578B\u7684\u5B9E\u4F8B\u5316\u7C7B\u578B</h1><p>\u5047\u5982\u4F60\u6709\u4E00\u4E2A\u5177\u6709\u6CDB\u578B\u53C2\u6570\u7684\u7C7B\u578B\uFF0C\u5982\u4E00\u4E2A\u7C7B <code>Foo</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u60F3\u4E3A\u4E00\u4E2A\u7279\u5B9A\u7684\u7C7B\u578B\u521B\u5EFA\u5355\u72EC\u7684\u7248\u672C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5C06\u5B83\u62F7\u8D1D\u5230\u4E00\u4E2A\u65B0\u53D8\u91CF\u91CC\uFF0C\u5E76\u4E14\u7528\u5177\u4F53\u7C7B\u578B\u4EE3\u66FF\u6CDB\u578B\u7684\u7C7B\u578B\u6CE8\u89E3\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u60F3\u6709\u4E00\u4E2A\u7C7B\uFF1A<code>Foo&lt;number&gt;</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> FooNumber <span class="token operator">=</span> Foo <span class="token keyword">as</span> <span class="token punctuation">{</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Foo<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// ref 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 <code>ref 1</code> \u4E2D\uFF0C\u4F60\u8BF4 <code>FooNumber</code> \u4E0E <code>Foo</code> \u76F8\u540C\uFF0C\u4F46\u662F\uFF0C\u53EA\u662F\u5C06\u5176\u770B\u4F5C\u4F7F\u7528 <code>new</code> \u8FD0\u7B97\u7B26\u8C03\u7528\u65F6\u7684\u4E00\u4E2A <code>Foo&lt;Number&gt;</code> \u5B9E\u4F8B\u3002</p><h2 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h2><p>\u7C7B\u578B\u65AD\u8A00\u6A21\u5F0F\u662F\u4E0D\u5B89\u5168\u7684\uFF0C\u56E0\u4E3A\u7F16\u8BD1\u5668\u76F8\u4FE1\u4F60\u5728\u505A\u6B63\u786E\u7684\u4E8B\u60C5\u3002\u5728\u5176\u4ED6\u8BED\u8A00\u4E2D\u7528\u4E8E\u7C7B\u7684\u5E38\u89C1\u6A21\u5F0F\u662F\u4F7F\u7528\u7EE7\u627F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">FooNumber</span> <span class="token keyword">extends</span> <span class="token class-name">Foo<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u4E00\u70B9\uFF0C\u5982\u679C\u4F60\u5728\u57FA\u7C7B\u4E0A\u4F7F\u7528\u4FEE\u9970\u5668\uFF0C\u7EE7\u627F\u7C7B\u53EF\u80FD\u6CA1\u6709\u4E0E\u57FA\u7C7B\u76F8\u540C\u7684\u884C\u4E3A\uFF08\u5B83\u4E0D\u518D\u88AB\u4FEE\u9970\u5668\u5305\u88F9\uFF09\u3002</p></div><p>\u5F53\u7136\uFF0C\u5982\u679C\u4F60\u4E0D\u9700\u8981\u4E00\u4E2A\u5355\u72EC\u7684\u7C7B\uFF0C\u4F60\u4ECD\u7136\u5199\u51FA\u4E00\u4E2A\u6709\u6548\u7684\u5F3A\u5236/\u65AD\u8A00\u6A21\u5F0F\uFF0C\u56E0\u6B64\u5728\u5F00\u59CB\u65F6\uFF0C\u4FBF\u5C55\u793A\u51FA\u4E86\u666E\u901A\u7684\u65AD\u8A00\u6A21\u5F0F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">id</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> idNum <span class="token operator">=</span> id <span class="token keyword">as</span> <span class="token punctuation">{</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=s("\u7075\u611F\u6765\u6E90\u4E8E\uFF1A"),u={href:"https://stackoverflow.com/questions/34859911/instantiated-polymorphic-function-as-argument-in-typescript/34864705#34864705",target:"_blank",rel:"noopener noreferrer"},k=s("stackoverflow question");function m(v,b){const a=t("ExternalLinkIcon");return o(),p("div",null,[r,n("blockquote",null,[n("p",null,[d,n("a",u,[k,c(a)])])])])}var h=e(i,[["render",m],["__file","typeInstantiation.html.vue"]]);export{h as default};
