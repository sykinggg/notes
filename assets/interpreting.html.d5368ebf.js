import{o as e,c as p,b as n,F as t,a as o,e as s}from"./app.27c025c0.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const c={},l=o(`<h1 id="\u89E3\u8BFB-errors" tabindex="-1"><a class="header-anchor" href="#\u89E3\u8BFB-errors" aria-hidden="true">#</a> \u89E3\u8BFB Errors</h1><p>TypeScript \u662F\u4E00\u79CD\u4E13\u6CE8\u4E8E\u5E2E\u52A9\u5F00\u53D1\u4EBA\u5458\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u5F53\u9519\u8BEF\u51FA\u73B0\u65F6\uFF0C\u5B83\u4F1A\u63D0\u4F9B\u5C3D\u53EF\u80FD\u63D0\u4F9B\u975E\u5E38\u6709\u7528\u7684\u9519\u8BEF\u4FE1\u606F\u3002\u8FD9\u5BF9\u4E8E\u90A3\u4E9B\u4FE1\u4EFB\u4F7F\u7528\u8005\u7684\u7F16\u8BD1\u5668\u6765\u8BF4\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8F7B\u5FAE\u7684\u4FE1\u606F\u91CF\u8FC7\u8F7D\uFF0C\u800C\u4E0D\u4F1A\u90A3\u4E48\u5B9E\u7528\u3002</p><p>\u8BA9\u6765\u770B\u4E00\u4E2A\u5728 IDE \u4E2D\u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">SomethingComplex</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  bar<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">takeSomethingComplex</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> SomethingComplex<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;some bar&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E00\u4E2A\u53EF\u80FD\u4F1A\u51FA\u73B0\u7684\u9519\u8BEF\u4F7F\u7528</span>
<span class="token keyword">const</span> fail <span class="token operator">=</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  bar<span class="token operator">:</span> getBar
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">takeSomethingComplex</span><span class="token punctuation">(</span>fail<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5728\u8FD9\u91CC TypeScript \u4F1A\u62A5\u9519</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u8FD9\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u6F14\u793A\u4E86\u4E00\u4E2A\u5E38\u89C1\u7684\u7A0B\u5E8F\u8BBE\u8BA1\u9519\u8BEF\uFF0C\u5B83\u8C03\u7528\u51FD\u6570\u5931\u8D25\uFF08<code>bar: getBar</code> \u5E94\u8BE5\u662F <code>bar: getBar()</code>\uFF09\u3002\u5E78\u8FD0\u7684\u662F\uFF0C\u4E00\u65E6\u4E0D\u7B26\u5408\u7C7B\u578B\u8981\u6C42\uFF0CTypeScript \u5C06\u4F1A\u6355\u6349\u5230\u8FD9\u4E2A\u9519\u8BEF\u3002</p><h2 id="\u9519\u8BEF\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u5206\u7C7B" aria-hidden="true">#</a> \u9519\u8BEF\u5206\u7C7B</h2><p>TypeScript \u9519\u8BEF\u4FE1\u606F\u5206\u4E3A\u4E24\u7C7B\uFF1A\u7B80\u6D01\u548C\u8BE6\u7EC6\u3002</p><h3 id="\u7B80\u6D01" tabindex="-1"><a class="header-anchor" href="#\u7B80\u6D01" aria-hidden="true">#</a> \u7B80\u6D01</h3><p>\u7B80\u6D01\u7684\u9519\u8BEF\u4FE1\u606F\u662F\u4E3A\u4E86\u63D0\u4F9B\u4E00\u4E2A\u7F16\u8BD1\u5668\u63CF\u8FF0\u7684\u9519\u8BEF\u53F7\u4EE5\u53CA\u4E00\u4E9B\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u4E00\u4E2A\u7B80\u6D01\u7684\u9519\u8BEF\u4FE1\u606F\u7C7B\u4F3C\u4E8E\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token constant">TS2345</span><span class="token operator">:</span> Argument <span class="token keyword">of</span> <span class="token keyword">type</span> <span class="token string">&#39;{ foo: number; bar: () =&gt; string; }&#39;</span> <span class="token keyword">is</span> not assignable to parameter <span class="token keyword">of</span> <span class="token keyword">type</span> <span class="token string">&#39;SomethingComplex&#39;</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u800C\uFF0C\u5B83\u6CA1\u6709\u63D0\u4F9B\u66F4\u6DF1\u5C42\u6B21\u7684\u4FE1\u606F\uFF0C\u5982\u4E3A\u4EC0\u4E48\u8FD9\u4E2A\u9519\u8BEF\u4F1A\u53D1\u751F\u3002\u8FD9\u5C31\u662F\u8BE6\u7EC6\u9519\u8BEF\u6240\u9700\u8981\u7684\u539F\u56E0\u3002</p><h2 id="\u8BE6\u7EC6" tabindex="-1"><a class="header-anchor" href="#\u8BE6\u7EC6" aria-hidden="true">#</a> \u8BE6\u7EC6</h2><p>\u8BE6\u7EC6\u7684\u9519\u8BEF\u4FE1\u606F\u7C7B\u4F3C\u4E8E\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">[</span>ts<span class="token punctuation">]</span>
Argument <span class="token keyword">of</span> <span class="token keyword">type</span> <span class="token string">&#39;{ foo: number; bar: () =&gt; string; }&#39;</span> <span class="token keyword">is</span> not assignable to parameter <span class="token keyword">of</span> <span class="token keyword">type</span> <span class="token string">&#39;SomethingComplex&#39;</span><span class="token punctuation">.</span>
  Types <span class="token keyword">of</span> property <span class="token string">&#39;bar&#39;</span> are incompatible<span class="token punctuation">.</span>
    Type <span class="token string">&#39;() =&gt; string&#39;</span> <span class="token keyword">is</span> not assignable to <span class="token keyword">type</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8BE6\u7EC6\u7684\u9519\u8BEF\u4FE1\u606F\u662F\u4E3A\u4E86\u6307\u5BFC\u4F7F\u7528\u8005\u77E5\u9053\u4E3A\u4EC0\u4E48\u4E00\u4E9B\u9519\u8BEF\uFF08\u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC\u662F\u7C7B\u578B\u4E0D\u517C\u5BB9\uFF09\u4F1A\u53D1\u751F\u3002\u7B2C\u4E00\u884C\u4E0E\u7B80\u6D01\u7684\u9519\u8BEF\u4FE1\u606F\u76F8\u540C\uFF0C\u540E\u8DDF\u4E00\u4E9B\u8BE6\u7EC6\u7684\u4FE1\u606F\u3002\u4F60\u5E94\u8BE5\u9605\u8BFB\u8FD9\u4E9B\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u56E0\u4E3A\u5BF9\u4E8E\u5F00\u53D1\u8005\u7684\u4E00\u4E9B\u7591\u95EE\uFF0C\u5B83\u90FD\u7ED9\u51FA\u4E86\u95EE\u7B54\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token constant">ERROR</span><span class="token operator">:</span> Argument <span class="token keyword">of</span> <span class="token keyword">type</span> <span class="token string">&#39;{ foo: number; bar: () =&gt; string; }&#39;</span> <span class="token keyword">is</span> not assignable to parameter <span class="token keyword">of</span> <span class="token keyword">type</span> <span class="token string">&#39;SomethingComplex&#39;</span><span class="token punctuation">.</span>

<span class="token constant">WHY</span><span class="token operator">?</span>
<span class="token constant">CAUSE</span> <span class="token constant">ERROR</span><span class="token operator">:</span> Types <span class="token keyword">of</span> property <span class="token string">&#39;bar&#39;</span> are incompatible<span class="token punctuation">.</span>

<span class="token constant">WHY</span><span class="token operator">?</span>
<span class="token constant">CAUSE</span> <span class="token constant">ERROR</span><span class="token operator">:</span> Type <span class="token string">&#39;() =&gt; string&#39;</span> <span class="token keyword">is</span> not assignable to <span class="token keyword">type</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6240\u4EE5\uFF0C\u6700\u6839\u672C\u7684\u539F\u56E0\u662F\uFF1A</p><ul><li>\u5728\u5C5E\u6027 <code>bar</code></li><li>\u51FD\u6570 <code>() =&gt; string</code> \u5B83\u5E94\u8BE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002</li></ul><p>\u8FD9\u80FD\u591F\u5E2E\u52A9\u5F00\u53D1\u8005\u4FEE\u590D bar \u5C5E\u6027\u7684 bug\uFF08\u5B83\u4EEC\u5FD8\u8BB0\u4E86\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\uFF09\u3002</p><h2 id="\u5728-ide-\u4E2D\u600E\u4E48\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#\u5728-ide-\u4E2D\u600E\u4E48\u63D0\u793A" aria-hidden="true">#</a> \u5728 IDE \u4E2D\u600E\u4E48\u63D0\u793A</h2><p>IDE \u901A\u5E38\u4F1A\u5728\u8BE6\u7EC6\u7684\u9519\u8BEF\u63D0\u793A\u4E4B\u540E\u663E\u793A\u7B80\u6D01\u7248\u672C\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p>`,21),i=["src"],u=n("ul",null,[n("li",null,"\u4F60\u901A\u5E38\u53EF\u80FD\u53EA\u4F1A\u9605\u8BFB\u300C\u4E3A\u4EC0\u4E48\u300D\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF1B"),n("li",null,[s("\u5F53\u4F60\u60F3\u5BFB\u627E\u76F8\u540C\u7684\u9519\u8BEF\u65F6\uFF08\u4F7F\u7528 "),n("code",null,"TSXXX"),s(" \u9519\u8BEF\u7F16\u53F7\uFF0C\u6216\u8005\u90E8\u5206\u9519\u8BEF\u4FE1\u606F\uFF09\uFF0C\u4F7F\u7528\u7B80\u6D01\u7684\u7248\u672C\u3002")])],-1);function k(a,d){return e(),p(t,null,[l,n("img",{src:a.$withBase("/ide.png"),alt:"ide"},null,8,i),u],64)}var g=r(c,[["render",k]]);export{g as default};
