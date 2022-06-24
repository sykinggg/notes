import{_ as c,r as t,o as l,c as i,b as s,d as a,w as r,e as n,a as e}from"./app.013e756e.js";const d={},u=s("h1",{id:"\u540D\u4E49\u5316\u7C7B\u578B",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u540D\u4E49\u5316\u7C7B\u578B","aria-hidden":"true"},"#"),n(" \u540D\u4E49\u5316\u7C7B\u578B")],-1),k=n("TypeScript \u7684\u7C7B\u578B\u7CFB\u7EDF\u662F\u7ED3\u6784\u5316\u7684\uFF0C"),v={href:"https://basarat.gitbooks.io/typescript/content/docs/why-typescript.html",target:"_blank",rel:"noopener noreferrer"},m=n("\u8FD9\u4E5F\u662F\u5176\u4E3B\u8981\u7684\u4F18\u70B9\u4E4B\u4E00"),b=n("\u3002\u7136\u800C\uFF0C\u5728\u5B9E\u9645\u7684\u7279\u5B9A\u7528\u4F8B\u4E2D\uFF0C\u6709\u65F6\u5C3D\u7BA1\u53D8\u91CF\u5177\u6709\u76F8\u540C\u7684\u7ED3\u6784\uFF0C\u4F60\u4E5F\u60F3\u5C06\u4ED6\u4EEC\u89C6\u4E3A\u4E0D\u540C\u7C7B\u578B\u3002\u4E00\u4E2A\u975E\u5E38\u5E38\u89C1\u7684\u7528\u4F8B\u662F\u8EAB\u4EFD\u7C7B\u578B\u7ED3\u6784\uFF08\u5B83\u4EEC\u53EF\u80FD\u53EA\u662F\u5728 C# \u6216\u8005 Java \u4E2D\u8868\u793A\u4E00\u4E2A\u5B83\u4EEC\u8BED\u4E49\u5316\u540D\u5B57\u7684\u5B57\u7B26\u4E32\uFF09\u3002"),_=e(`<p>\u8FD9\u6709\u4E00\u4E9B\u793E\u533A\u4F7F\u7528\u7684\u65B9\u5F0F\uFF0C\u6211\u6309\u7167\u4E2A\u4EBA\u559C\u597D\u964D\u5E8F\u6392\u5217\uFF1A</p><h2 id="\u4F7F\u7528\u5B57\u9762\u91CF\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5B57\u9762\u91CF\u7C7B\u578B" aria-hidden="true">#</a> \u4F7F\u7528\u5B57\u9762\u91CF\u7C7B\u578B</h2><p>\u8FD9\u79CD\u6A21\u5F0F\u4F7F\u7528\u6CDB\u578B\u548C\u5B57\u9762\u91CF\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u6CDB\u578B Id \u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">Id<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u7279\u6B8A\u7684 Id \u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">FooId</span> <span class="token operator">=</span> Id<span class="token operator">&lt;</span><span class="token string">&#39;foo&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">BarId</span> <span class="token operator">=</span> Id<span class="token operator">&lt;</span><span class="token string">&#39;bar&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// \u53EF\u9009\uFF1A\u6784\u9020\u51FD\u6570</span>
<span class="token keyword">const</span> createFoo <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> FooId <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> createBar <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> BarId <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token function">createFoo</span><span class="token punctuation">(</span><span class="token string">&#39;sample&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token function">createBar</span><span class="token punctuation">(</span><span class="token string">&#39;sample&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

foo <span class="token operator">=</span> bar<span class="token punctuation">;</span> <span class="token comment">// Error</span>
foo <span class="token operator">=</span> foo<span class="token punctuation">;</span> <span class="token comment">// Okey</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F18\u70B9 <ul><li>\u4E0D\u9700\u8981\u7C7B\u578B\u65AD\u8A00\u3002</li></ul></li><li>\u7F3A\u70B9 <ul><li>\u5982\u4E0A\u7ED3\u6784 <code>{type,value}</code> \u53EF\u80FD\u4E0D\u90A3\u4E48\u5C3D\u5982\u4EBA\u610F\uFF0C\u800C\u4E14\u9700\u8981\u670D\u52A1\u5668\u5E8F\u5217\u5316\u652F\u6301\u3002</li></ul></li></ul><h2 id="\u4F7F\u7528\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u679A\u4E3E" aria-hidden="true">#</a> \u4F7F\u7528\u679A\u4E3E</h2>`,6),y=n("TypeScript \u4E2D"),h=n("\u679A\u4E3E"),I=n(" \u63D0\u4F9B\u4E00\u5B9A\u7A0B\u5EA6\u7684\u540D\u4E49\u5316\u7C7B\u578B\u3002\u5982\u679C\u4E24\u4E2A\u679A\u4E3E\u7684\u547D\u540D\u4E0D\u76F8\u540C\uFF0C\u5219\u5B83\u4EEC\u7C7B\u578B\u4E0D\u76F8\u7B49\u3002\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u4E8B\u5B9E\u6765\u4E3A\u7ED3\u6784\u4E0A\u517C\u5BB9\u7684\u7C7B\u578B\uFF0C\u63D0\u4F9B\u540D\u4E49\u5316\u7C7B\u578B\u3002"),g=e(`<p>\u89E3\u51B3\u529E\u6CD5\u5305\u62EC\uFF1A</p><ul><li>\u521B\u5EFA\u4E00\u4E2A\u53EA\u6709\u540D\u5B57\u7684\u679A\u4E3E\uFF1B</li><li>\u5229\u7528\u8FD9\u4E2A\u679A\u4E3E\u4E0E\u5B9E\u9645\u7ED3\u6784\u4F53\u521B\u5EFA\u4E00\u4E2A\u4EA4\u53C9\u7C7B\u578B\uFF08<code>&amp;</code>\uFF09\u3002</li></ul><p>\u5982\u4E0B\u6240\u793A\uFF0C\u5F53\u5B9E\u9645\u7ED3\u6784\u4F53\u4EC5\u4EC5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u65F6\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// FOO</span>
<span class="token keyword">enum</span> FooIdBrand <span class="token punctuation">{</span>
  _ <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">FooId</span> <span class="token operator">=</span> FooIdBrand <span class="token operator">&amp;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token comment">// BAR</span>
<span class="token keyword">enum</span> BarIdBrand <span class="token punctuation">{</span>
  _ <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">BarId</span> <span class="token operator">=</span> BarIdBrand <span class="token operator">&amp;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token comment">// user</span>

<span class="token keyword">let</span> fooId<span class="token operator">:</span> FooId<span class="token punctuation">;</span>
<span class="token keyword">let</span> barId<span class="token operator">:</span> BarId<span class="token punctuation">;</span>

<span class="token comment">// \u7C7B\u578B\u5B89\u5168</span>
fooId <span class="token operator">=</span> barId<span class="token punctuation">;</span> <span class="token comment">// error</span>
barId <span class="token operator">=</span> fooId<span class="token punctuation">;</span> <span class="token comment">// error</span>

<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684</span>
fooId <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span> <span class="token keyword">as</span> FooId<span class="token punctuation">;</span>
barId <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span> <span class="token keyword">as</span> BarId<span class="token punctuation">;</span>

<span class="token comment">// \u4E24\u79CD\u7C7B\u578B\u90FD\u4E0E\u57FA\u7840\u517C\u5BB9</span>
<span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
str <span class="token operator">=</span> fooId<span class="token punctuation">;</span>
str <span class="token operator">=</span> barId<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF7\u6CE8\u610F\u4E0A\u6587\u4E2D\u7684 <code>FooIdBrand</code> \u4E0E <code>BarIdBrand</code>\uFF0C\u5B83\u4EEC\u90FD\u6709\u4E00\u4E2A <code>_</code> \u6620\u5C04\u5230\u7A7A\u5B57\u7B26\u4E32\u7684\u6210\u5458\uFF0C\u5373 <code>{ _ = &#39;&#39; }</code>\u3002\u8FD9\u53EF\u4EE5\u5F3A\u5236 TypeScript \u63A8\u65AD\u51FA\u8FD9\u662F\u4E00\u4E2A\u57FA\u4E8E\u5B57\u7B26\u4E32\u7684\u679A\u4E3E\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u6570\u5B57\u7C7B\u578B\u7684\u679A\u4E3E\u3002\u8FD9\u662F\u5F88\u91CD\u8981\u7684\uFF0C\u56E0\u4E3A TypeScript \u4F1A\u628A\u4E00\u4E2A\u7A7A\u7684\u679A\u4E3E\u7C7B\u578B\uFF08<code>{}</code>\uFF09\u63A8\u65AD\u4E3A\u4E00\u4E2A\u6570\u5B57\u7C7B\u578B\u7684\u679A\u4E3E\uFF0C\u5728 TypeScript 3.6.2 \u7248\u672C\u53CA\u5176\u4EE5\u4E0A\u65F6\uFF0C\u6570\u5B57\u7C7B\u578B\u7684\u679A\u4E3E\u4E0E <code>string</code> \u7684\u4EA4\u53C9\u7C7B\u578B\u662F <code>never</code>\u3002</p><h2 id="\u4F7F\u7528\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u63A5\u53E3" aria-hidden="true">#</a> \u4F7F\u7528\u63A5\u53E3</h2>`,6),f=n("\u56E0\u4E3A "),w=s("code",null,"number",-1),B=n(" \u7C7B\u578B\u4E0E "),x=s("code",null,"enum",-1),F=n(" \u7C7B\u578B\u5728\u7C7B\u578B\u4E0A\u662F\u517C\u5BB9\u7684\uFF0C\u56E0\u6B64\u4E0D\u80FD\u4F7F\u7528\u4E0A\u8FF0\u63D0\u5230\u7684\u65B9\u6CD5\u6765\u5904\u7406\u5B83\u4EEC\u3002\u53D6\u800C\u4EE3\u4E4B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u63A5\u53E3\u6253\u7834\u8FD9\u79CD\u7C7B\u578B\u7684\u517C\u5BB9\u6027\u3002TypeScript \u7F16\u8BD1\u56E2\u961F\u4ECD\u7136\u5728\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\uFF0C\u56E0\u6B64\u5B83\u503C\u5F97\u4E00\u63D0\u3002\u4F7F\u7528 "),T=s("code",null,"_",-1),S=n(" \u524D\u7F00\u548C "),L=s("code",null,"Brand",-1),O=n(" \u540E\u7F00\u662F\u4E00\u79CD\u6211\u5F3A\u70C8\u63A8\u8350\u7684\u60EF\u4F8B\u65B9\u6CD5\uFF08"),E={href:"https://github.com/Microsoft/TypeScript/blob/7b48a182c05ea4dea81bab73ecbbe9e013a79e99/src/compiler/types.ts#L693-L698",target:"_blank",rel:"noopener noreferrer"},N=n("TypeScript \u4E5F\u8FD9\u4E48\u63A8\u8350"),R=n("\uFF09\u3002"),V=e(`<p>\u89E3\u51B3\u529E\u6CD5\u5305\u62EC\uFF1A</p><ul><li>\u5728\u7C7B\u578B\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u4E0D\u7528\u7684\u5C5E\u6027\uFF0C\u7528\u6765\u6253\u7834\u7C7B\u578B\u517C\u5BB9\u6027\uFF1B</li><li>\u5728\u65B0\u5EFA\u6216\u5411\u4E0B\u8F6C\u6362\u7C7B\u578B\u7684\u65F6\u5019\u4F7F\u7528\u65AD\u8A00\u3002</li></ul><p>\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// FOO</span>
<span class="token keyword">interface</span> <span class="token class-name">FooId</span> <span class="token keyword">extends</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
  _fooIdBrand<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// \u9632\u6B62\u7C7B\u578B\u9519\u8BEF</span>
<span class="token punctuation">}</span>

<span class="token comment">// BAR</span>
<span class="token keyword">interface</span> <span class="token class-name">BarId</span> <span class="token keyword">extends</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
  _barIdBrand<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// \u9632\u6B62\u7C7B\u578B\u9519\u8BEF</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528</span>
<span class="token keyword">let</span> fooId<span class="token operator">:</span> FooId<span class="token punctuation">;</span>
<span class="token keyword">let</span> barId<span class="token operator">:</span> BarId<span class="token punctuation">;</span>

<span class="token comment">// \u7C7B\u578B\u5B89\u5168</span>
fooId <span class="token operator">=</span> barId<span class="token punctuation">;</span> <span class="token comment">// error</span>
barId <span class="token operator">=</span> fooId<span class="token punctuation">;</span> <span class="token comment">// error</span>
fooId <span class="token operator">=</span> <span class="token operator">&lt;</span>FooId<span class="token operator">&gt;</span>barId<span class="token punctuation">;</span> <span class="token comment">// error</span>
barId <span class="token operator">=</span> <span class="token operator">&lt;</span>BarId<span class="token operator">&gt;</span>fooId<span class="token punctuation">;</span> <span class="token comment">// error</span>

<span class="token comment">// \u521B\u5EFA\u65B0\u7684</span>
fooId <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span> <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
barId <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span> <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

<span class="token comment">// \u5982\u679C\u4F60\u9700\u8981\u4EE5\u5B57\u7B26\u4E32\u4F5C\u4E3A\u57FA\u7840</span>
<span class="token keyword">var</span> str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
str <span class="token operator">=</span> fooId <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
str <span class="token operator">=</span> barId <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function C(A,J){const o=t("ExternalLinkIcon"),p=t("RouterLink");return l(),i("div",null,[u,s("p",null,[k,s("a",v,[m,a(o)]),b]),_,s("p",null,[y,a(p,{to:"/ts/typings/enums.html"},{default:r(()=>[h]),_:1}),I]),g,s("p",null,[f,w,B,x,F,T,S,L,O,s("a",E,[N,a(o)]),R]),V])}var j=c(d,[["render",C],["__file","nominalTyping.html.vue"]]);export{j as default};
