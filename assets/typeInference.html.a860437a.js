import{r as p,o as e,c as t,b as o,d as c,w as l,F as r,a as s,e as n}from"./app.2f6bbef8.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},k=s(`<h1 id="\u7C7B\u578B\u63A8\u65AD" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u63A8\u65AD" aria-hidden="true">#</a> \u7C7B\u578B\u63A8\u65AD</h1><p>TypeScript \u80FD\u6839\u636E\u4E00\u4E9B\u7B80\u5355\u7684\u89C4\u5219\u63A8\u65AD\uFF08\u68C0\u67E5\uFF09\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u5B9E\u8DF5\uFF0C\u5F88\u5FEB\u7684\u4E86\u89E3\u5B83\u4EEC\u3002</p><h2 id="\u5B9A\u4E49\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> \u5B9A\u4E49\u53D8\u91CF</h2><p>\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u7531\u5B9A\u4E49\u63A8\u65AD\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// foo \u662F &#39;number&#39;</span>
<span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span> <span class="token comment">// bar \u662F &#39;string&#39;</span>

foo <span class="token operator">=</span> bar<span class="token punctuation">;</span> <span class="token comment">// Error: \u4E0D\u80FD\u5C06 &#39;string&#39; \u8D4B\u503C\u7ED9 \`number\`</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD9\u662F\u4E00\u4E2A\u4ECE\u53F3\u5411\u5DE6\u6D41\u52A8\u7C7B\u578B\u7684\u793A\u4F8B\u3002</p><h2 id="\u51FD\u6570\u8FD4\u56DE\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u8FD4\u56DE\u7C7B\u578B" aria-hidden="true">#</a> \u51FD\u6570\u8FD4\u56DE\u7C7B\u578B</h2><p>\u8FD4\u56DE\u7C7B\u578B\u80FD\u88AB <code>return</code> \u8BED\u53E5\u63A8\u65AD\uFF0C\u5982\u4E0B\u6240\u793A\uFF0C\u63A8\u65AD\u51FD\u6570\u8FD4\u56DE\u4E3A\u4E00\u4E2A\u6570\u5B57\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u662F\u4E00\u4E2A\u4ECE\u5E95\u90E8\u6D41\u51FA\u7C7B\u578B\u7684\u4F8B\u5B50\u3002</p><h2 id="\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u8D4B\u503C" aria-hidden="true">#</a> \u8D4B\u503C</h2><p>\u51FD\u6570\u53C2\u6570\u7C7B\u578B/\u8FD4\u56DE\u503C\u4E5F\u80FD\u901A\u8FC7\u8D4B\u503C\u6765\u63A8\u65AD\u3002\u5982\u4E0B\u6240\u793A\uFF0C<code>foo</code> \u7684\u7C7B\u578B\u662F <code>Adder</code>\uFF0C\u4ED6\u80FD\u8BA9 <code>foo</code> \u7684\u53C2\u6570 <code>a</code>\u3001<code>b</code> \u662F <code>number</code> \u7C7B\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Adder</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token function-variable function">Adder</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u4E2A\u4E8B\u5B9E\u53EF\u4EE5\u7528\u4E0B\u9762\u7684\u4EE3\u7801\u6765\u8BC1\u660E\uFF0CTypeScript \u4F1A\u53D1\u51FA\u6B63\u5982\u4F60\u671F\u671B\u53D1\u51FA\u7684\u9519\u8BEF\u8B66\u544A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Adder</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token function-variable function">Adder</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  a <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error\uFF1A\u4E0D\u80FD\u628A &#39;string&#39; \u7C7B\u578B\u8D4B\u503C\u7ED9 &#39;number&#39; \u7C7B\u578B</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u662F\u4E00\u4E2A\u4ECE\u5DE6\u5411\u53F3\u6D41\u52A8\u7C7B\u578B\u7684\u793A\u4F8B\u3002</p><p>\u5982\u679C\u4F60\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u4E14\u51FD\u6570\u53C2\u6570\u4E3A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u76F8\u540C\u7684\u8D4B\u503C\u89C4\u5219\u4E5F\u9002\u7528\u4E8E\u5B83\u3002\u4ECE <code>argument</code> \u81F3 <code>parameter</code> \u53EA\u662F\u53D8\u91CF\u8D4B\u503C\u7684\u53E6\u4E00\u79CD\u5F62\u5F0F\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Adder</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">iTakeAnAdder</span><span class="token punctuation">(</span>adder<span class="token operator">:</span> Adder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">adder</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">iTakeAnAdder</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  a <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error: \u4E0D\u80FD\u628A &#39;string&#39; \u7C7B\u578B\u8D4B\u503C\u7ED9 &#39;number&#39; \u7C7B\u578B</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u7ED3\u6784\u5316" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u5316" aria-hidden="true">#</a> \u7ED3\u6784\u5316</h2><p>\u8FD9\u4E9B\u7B80\u5355\u7684\u89C4\u5219\u4E5F\u9002\u7528\u4E8E\u7ED3\u6784\u5316\u7684\u5B58\u5728\uFF08\u5BF9\u8C61\u5B57\u9762\u91CF\uFF09\uFF0C\u4F8B\u5982\u5728\u4E0B\u9762\u8FD9\u79CD\u60C5\u51B5\u4E0B <code>foo</code> \u7684\u7C7B\u578B\u88AB\u63A8\u65AD\u4E3A <code>{ a: number, b: number }</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  b<span class="token operator">:</span> <span class="token number">456</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

foo<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error\uFF1A\u4E0D\u80FD\u628A &#39;string&#39; \u7C7B\u578B\u8D4B\u503C\u7ED9 &#39;number&#39; \u7C7B\u578B</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6570\u7EC4\u4E5F\u4E00\u6837\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
bar<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error\uFF1A\u4E0D\u80FD\u628A &#39;string&#39; \u7C7B\u578B\u8D4B\u503C\u7ED9 &#39;number&#39; \u7C7B\u578B</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u89E3\u6784" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6784" aria-hidden="true">#</a> \u89E3\u6784</h2><p>\u8FD9\u4E9B\u4E5F\u9002\u7528\u4E8E\u89E3\u6784\u4E2D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  b<span class="token operator">:</span> <span class="token number">456</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> a <span class="token punctuation">}</span> <span class="token operator">=</span> foo<span class="token punctuation">;</span>

a <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error\uFF1A\u4E0D\u80FD\u628A &#39;string&#39; \u7C7B\u578B\u8D4B\u503C\u7ED9 &#39;number&#39; \u7C7B\u578B</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6570\u7EC4\u4E2D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> bar<span class="token punctuation">;</span>

a <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error\uFF1A\u4E0D\u80FD\u628A &#39;string&#39; \u7C7B\u578B\u8D4B\u503C\u7ED9 &#39;number&#39; \u7C7B\u578B</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5982\u679C\u51FD\u6570\u53C2\u6570\u80FD\u591F\u88AB\u63A8\u65AD\u51FA\u6765\uFF0C\u90A3\u4E48\u89E3\u6784\u4EA6\u662F\u5982\u6B64\u3002\u5728\u5982\u4E0B\u4F8B\u5B50\u4E2D\uFF0C\u51FD\u6570\u53C2\u6570\u80FD\u591F\u88AB\u89E3\u6784\u4E3A <code>a/b</code> \u6210\u5458\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Adder</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">number</span><span class="token operator">:</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> b<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">iTakeAnAdder</span><span class="token punctuation">(</span>adder<span class="token operator">:</span> Adder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">adder</span><span class="token punctuation">(</span><span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">iTakeAnAdder</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> a<span class="token punctuation">,</span> b <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// a, b \u7684\u7C7B\u578B\u80FD\u88AB\u63A8\u65AD\u51FA\u6765</span>
  a <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error\uFF1A\u4E0D\u80FD\u628A &#39;string&#39; \u7C7B\u578B\u8D4B\u503C\u7ED9 &#39;number&#39; \u7C7B\u578B</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u7C7B\u578B\u4FDD\u62A4" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u4FDD\u62A4" aria-hidden="true">#</a> \u7C7B\u578B\u4FDD\u62A4</h2>`,31),d=n("\u5728\u524D\u9762\u7AE0\u8282"),b=n("\u7C7B\u578B\u4FDD\u62A4"),m=n("\u4E2D\uFF0C\u5DF2\u7ECF\u77E5\u9053\u5B83\u5982\u4F55\u5E2E\u52A9\u6539\u53D8\u548C\u7F29\u5C0F\u7C7B\u578B\u8303\u56F4\uFF08\u7279\u522B\u662F\u5728\u8054\u5408\u7C7B\u578B\u4E0B\uFF09\u3002\u7C7B\u578B\u4FDD\u62A4\u53EA\u662F\u4E00\u4E2A\u5757\u4E2D\u53D8\u91CF\u53E6\u4E00\u79CD\u63A8\u65AD\u5F62\u5F0F\u3002"),g=s(`<h2 id="\u8B66\u544A" tabindex="-1"><a class="header-anchor" href="#\u8B66\u544A" aria-hidden="true">#</a> \u8B66\u544A</h2><h3 id="\u5C0F\u5FC3\u4F7F\u7528\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u5FC3\u4F7F\u7528\u53C2\u6570" aria-hidden="true">#</a> \u5C0F\u5FC3\u4F7F\u7528\u53C2\u6570</h3><p>\u5982\u679C\u7C7B\u578B\u4E0D\u80FD\u88AB\u8D4B\u503C\u63A8\u65AD\u51FA\u6765\uFF0C\u7C7B\u578B\u4E5F\u5C06\u4E0D\u4F1A\u6D41\u5165\u51FD\u6570\u53C2\u6570\u4E2D\u3002\u4F8B\u5982\u5982\u4E0B\u7684\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u7F16\u8BD1\u5668\u5E76\u4E0D\u77E5\u9053 <code>foo</code> \u7684\u7C7B\u578B\uFF0C\u6240\u5B83\u4E5F\u5C31\u4E0D\u80FD\u63A8\u65AD\u51FA <code>a</code> \u6216\u8005 <code>b</code> \u7684\u7C7B\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">/* do something */</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7136\u800C\uFF0C\u5982\u679C <code>foo</code> \u6DFB\u52A0\u4E86\u7C7B\u578B\u6CE8\u89E3\uFF0C\u51FD\u6570\u53C2\u6570\u4E5F\u5C31\u80FD\u88AB\u63A8\u65AD\uFF08<code>a</code>\uFF0C<code>b</code> \u90FD\u80FD\u88AB\u63A8\u65AD\u4E3A <code>number</code> \u7C7B\u578B\uFF09\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TwoNumberFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token function-variable function">TwoNumberFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">/* do something */</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u5C0F\u5FC3\u4F7F\u7528\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u5FC3\u4F7F\u7528\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u5C0F\u5FC3\u4F7F\u7528\u8FD4\u56DE\u503C</h3><p>\u5C3D\u7BA1 TypeScript \u4E00\u822C\u60C5\u51B5\u4E0B\u80FD\u63A8\u65AD\u51FD\u6570\u7684\u8FD4\u56DE\u503C\uFF0C\u4F46\u662F\u5B83\u53EF\u80FD\u5E76\u4E0D\u662F\u4F60\u60F3\u8981\u7684\u3002\u4F8B\u5982\u5982\u4E0B\u7684 <code>foo</code> \u51FD\u6570\uFF0C\u5B83\u7684\u8FD4\u56DE\u503C\u4E3A <code>any</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> <span class="token function">addOne</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E00\u4E9B\u4F7F\u7528 JavaScript \u5E93\u7684\u7279\u6B8A\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">addOne</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8FD9\u662F\u56E0\u4E3A\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u88AB\u4E00\u4E2A\u7F3A\u5C11\u7C7B\u578B\u5B9A\u4E49\u7684 <code>addOne</code> \u51FD\u6570\u6240\u5F71\u54CD\uFF08<code>a</code> \u662F <code>any</code>\uFF0C\u6240\u4EE5 <code>addOne</code> \u8FD4\u56DE\u503C\u4E3A <code>any</code>\uFF0C<code>foo</code> \u7684\u8FD4\u56DE\u503C\u662F\u4E5F\u662F <code>any</code>\uFF09\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6211\u53D1\u73B0\u6700\u7B80\u5355\u7684\u65B9\u5F0F\u662F\u660E\u786E\u7684\u5199\u4E0A\u51FD\u6570\u8FD4\u56DE\u503C\uFF0C\u6BD5\u7ADF\u8FD9\u4E9B\u6CE8\u89E3\u662F\u4E00\u4E2A\u5B9A\u7406\uFF0C\u800C\u51FD\u6570\u662F\u6CE8\u89E3\u7684\u4E00\u4E2A\u8BC1\u636E\u3002</p></div><p>\u8FD9\u91CC\u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6\u53EF\u4EE5\u60F3\u8C61\u7684\u60C5\u666F\uFF0C\u4F46\u662F\u6709\u4E00\u4E2A\u597D\u6D88\u606F\u662F\u6709\u7F16\u8BD1\u5668\u9009\u9879 <code>noImplicitAny</code> \u53EF\u4EE5\u6355\u83B7\u8FD9\u4E9B bug\u3002</p><h3 id="noimplicitany" tabindex="-1"><a class="header-anchor" href="#noimplicitany" aria-hidden="true">#</a> <code>noImplicitAny</code></h3><p>\u9009\u9879 <code>noImplicitAny</code> \u7528\u6765\u544A\u8BC9\u7F16\u8BD1\u5668\uFF0C\u5F53\u65E0\u6CD5\u63A8\u65AD\u4E00\u4E2A\u53D8\u91CF\u65F6\u53D1\u51FA\u4E00\u4E2A\u9519\u8BEF\uFF08\u6216\u8005\u53EA\u80FD\u63A8\u65AD\u4E3A\u4E00\u4E2A\u9690\u5F0F\u7684 <code>any</code> \u7C7B\u578B\uFF09\uFF0C\u4F60\u53EF\u4EE5\uFF1A</p><ul><li>\u901A\u8FC7\u663E\u5F0F\u6DFB\u52A0 <code>:any</code> \u7684\u7C7B\u578B\u6CE8\u89E3\uFF0C\u6765\u8BA9\u5B83\u6210\u4E3A\u4E00\u4E2A <code>any</code> \u7C7B\u578B\uFF1B</li><li>\u901A\u8FC7\u4E00\u4E9B\u66F4\u6B63\u786E\u7684\u7C7B\u578B\u6CE8\u89E3\u6765\u5E2E\u52A9 TypeScript \u63A8\u65AD\u7C7B\u578B\u3002</li></ul>`,15);function h(y,f){const a=p("RouterLink");return e(),t(r,null,[k,o("p",null,[d,c(a,{to:"/ts/typings/typeGuard.html"},{default:l(()=>[b]),_:1}),m]),g],64)}var x=u(i,[["render",h]]);export{x as default};
