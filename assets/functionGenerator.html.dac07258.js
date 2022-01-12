import{r as t,o as e,c as o,b as n,d as c,F as l,e as s,a as u}from"./app.b1cf3273.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const r={},k=n("h1",{id:"function",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#function","aria-hidden":"true"},"#"),s(" function*")],-1),d=n("code",null,"**function**",-1),b=s(" \u8FD9\u79CD\u58F0\u660E\u65B9\u5F0F("),m=n("code",null,"function",-1),f=s("\u5173\u952E\u5B57\u540E\u8DDF\u4E00\u4E2A\u661F\u53F7\uFF09\u4F1A\u5B9A\u4E49\u4E00\u4E2A"),g=n("strong",null,"\u751F\u6210\u5668\u51FD\u6570",-1),h=s(" (generator function)\uFF0C\u5B83\u8FD4\u56DE\u4E00\u4E2A "),v={href:"/mozillajs/baseObject/generator.md",target:"_blank",rel:"noopener noreferrer"},y=s("Generator"),x=s(" \u5BF9\u8C61\u3002"),w=u(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> i<span class="token punctuation">;</span>
  <span class="token keyword">yield</span> i <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: 10</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: 20</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6784\u9020\u51FD\u6570 <code>GeneratorFunction</code> \u6216 <code>function* expression</code> \u5B9A\u4E49<strong>\u751F\u6210\u5668\u51FD\u6570</strong> \u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><blockquote><p>function* name([param[, param[, ... param]]]) { statements }</p></blockquote><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><pre><code>\u51FD\u6570\u540D
</code></pre><h3 id="param" tabindex="-1"><a class="header-anchor" href="#param" aria-hidden="true">#</a> param</h3><pre><code>\u8981\u4F20\u9012\u7ED9\u51FD\u6570\u7684\u4E00\u4E2A\u53C2\u6570\u7684\u540D\u79F0\uFF0C\u4E00\u4E2A\u51FD\u6570\u6700\u591A\u53EF\u4EE5\u6709255\u4E2A\u53C2\u6570\u3002
</code></pre><h3 id="statements" tabindex="-1"><a class="header-anchor" href="#statements" aria-hidden="true">#</a> statements</h3><pre><code>\u666E\u901AJS\u8BED\u53E5\u3002
</code></pre><h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p><strong>\u751F\u6210\u5668\u51FD\u6570</strong>\u5728\u6267\u884C\u65F6\u80FD\u6682\u505C\uFF0C\u540E\u9762\u53C8\u80FD\u4ECE\u6682\u505C\u5904\u7EE7\u7EED\u6267\u884C\u3002</p><p>\u8C03\u7528\u4E00\u4E2A<strong>\u751F\u6210\u5668\u51FD\u6570</strong>\u5E76\u4E0D\u4F1A\u9A6C\u4E0A\u6267\u884C\u5B83\u91CC\u9762\u7684\u8BED\u53E5\uFF0C\u800C\u662F\u8FD4\u56DE\u4E00\u4E2A\u8FD9\u4E2A\u751F\u6210\u5668\u7684 <strong>\u8FED\u4EE3\u5668 \uFF08 <code>iterator</code> \uFF09\u5BF9\u8C61</strong>\u3002\u5F53\u8FD9\u4E2A\u8FED\u4EE3\u5668\u7684 <code>next()</code> \u65B9\u6CD5\u88AB\u9996\u6B21\uFF08\u540E\u7EED\uFF09\u8C03\u7528\u65F6\uFF0C\u5176\u5185\u7684\u8BED\u53E5\u4F1A\u6267\u884C\u5230\u7B2C\u4E00\u4E2A\uFF08\u540E\u7EED\uFF09\u51FA\u73B0<code>yield</code>\u7684\u4F4D\u7F6E\u4E3A\u6B62\uFF0C<code>yield</code> \u540E\u7D27\u8DDF\u8FED\u4EE3\u5668\u8981\u8FD4\u56DE\u7684\u503C\u3002\u6216\u8005\u5982\u679C\u7528\u7684\u662F <code>yield*</code>\uFF08\u591A\u4E86\u4E2A\u661F\u53F7\uFF09\uFF0C\u5219\u8868\u793A\u5C06\u6267\u884C\u6743\u79FB\u4EA4\u7ED9\u53E6\u4E00\u4E2A\u751F\u6210\u5668\u51FD\u6570\uFF08\u5F53\u524D\u751F\u6210\u5668\u6682\u505C\u6267\u884C\uFF09\u3002</p><p><code>next()</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5305\u542B\u4E24\u4E2A\u5C5E\u6027\uFF1Avalue \u548C done\uFF0Cvalue \u5C5E\u6027\u8868\u793A\u672C\u6B21 <code>yield</code> \u8868\u8FBE\u5F0F\u7684\u8FD4\u56DE\u503C\uFF0Cdone \u5C5E\u6027\u4E3A\u5E03\u5C14\u7C7B\u578B\uFF0C\u8868\u793A\u751F\u6210\u5668\u540E\u7EED\u662F\u5426\u8FD8\u6709 <code>yield</code> \u8BED\u53E5\uFF0C\u5373\u751F\u6210\u5668\u51FD\u6570\u662F\u5426\u5DF2\u7ECF\u6267\u884C\u5B8C\u6BD5\u5E76\u8FD4\u56DE\u3002</p><p>\u8C03\u7528 <code>next()</code>\u65B9\u6CD5\u65F6\uFF0C\u5982\u679C\u4F20\u5165\u4E86\u53C2\u6570\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u53C2\u6570\u4F1A\u4F20\u7ED9<strong>\u4E0A\u4E00\u6761\u6267\u884C\u7684 yield\u8BED\u53E5\u5DE6\u8FB9\u7684\u53D8\u91CF</strong>\uFF0C\u4F8B\u5982\u4E0B\u9762\u4F8B\u5B50\u4E2D\u7684 <code>x</code> \uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token operator">*</span><span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token number">10</span><span class="token punctuation">;</span>
    x<span class="token operator">=</span><span class="token keyword">yield</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">yield</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> gen_obj<span class="token operator">=</span><span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen_obj<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u6267\u884C yield 10\uFF0C\u8FD4\u56DE 10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen_obj<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u6267\u884C yield &#39;foo&#39;\uFF0C\u8FD4\u56DE &#39;foo&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen_obj<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u5C06 100 \u8D4B\u7ED9\u4E0A\u4E00\u6761 yield &#39;foo&#39; \u7684\u5DE6\u503C\uFF0C\u5373\u6267\u884C x=100\uFF0C\u8FD4\u56DE 100</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen_obj<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u6267\u884C\u5B8C\u6BD5\uFF0Cvalue \u4E3A undefined\uFF0Cdone \u4E3A true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5F53\u5728\u751F\u6210\u5668\u51FD\u6570\u4E2D\u663E\u5F0F <code>return</code> \u65F6\uFF0C\u4F1A\u5BFC\u81F4\u751F\u6210\u5668\u7ACB\u5373\u53D8\u4E3A\u5B8C\u6210\u72B6\u6001\uFF0C\u5373\u8C03\u7528 <code>next()</code> \u65B9\u6CD5\u8FD4\u56DE\u7684\u5BF9\u8C61\u7684 <code>done</code> \u4E3A <code>true</code>\u3002\u5982\u679C <code>return</code> \u540E\u9762\u8DDF\u4E86\u4E00\u4E2A\u503C\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u503C\u4F1A\u4F5C\u4E3A<strong>\u5F53\u524D</strong>\u8C03\u7528 <code>next()</code> \u65B9\u6CD5\u8FD4\u56DE\u7684 <code>value</code> \u503C\u3002</p><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><h3 id="\u7B80\u5355\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u793A\u4F8B" aria-hidden="true">#</a> \u7B80\u5355\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">idMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>index<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span> index<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> gen <span class="token operator">=</span> <span class="token function">idMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u751F\u6210\u5668\u4E5F\u53EF\u4EE5\u63A5\u6536\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u5668\u4E5F\u53EF\u4EE5\u63A5\u6536\u53C2\u6570" aria-hidden="true">#</a> \u751F\u6210\u5668\u4E5F\u53EF\u4EE5\u63A5\u6536\u53C2\u6570</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">idMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> index <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token keyword">yield</span> index<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> gen <span class="token operator">=</span> <span class="token function">idMaker</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="yield-\u7684\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#yield-\u7684\u793A\u4F8B" aria-hidden="true">#</a> yield*\u7684\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">anotherGenerator</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> i <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">yield</span> i<span class="token punctuation">;</span>
  <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">anotherGenerator</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u79FB\u4EA4\u6267\u884C\u6743</span>
  <span class="token keyword">yield</span> i <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> gen <span class="token operator">=</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 13</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u4F20\u9012\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a> \u4F20\u9012\u53C2\u6570</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token operator">*</span><span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> first <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token keyword">yield</span> first <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 4 + 2</span>
                                  <span class="token comment">// first =4 \u662Fnext(4)\u5C06\u53C2\u6570\u8D4B\u7ED9\u4E0A\u4E00\u6761\u7684</span>
    <span class="token keyword">yield</span> second <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span>             <span class="token comment">// 5 + 3</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> iterator <span class="token operator">=</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// &quot;{ value: 1, done: false }&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// &quot;{ value: 6, done: false }&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// &quot;{ value: 8, done: false }&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// &quot;{ value: undefined, done: true }&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u663E\u5F0F\u8FD4\u56DE" tabindex="-1"><a class="header-anchor" href="#\u663E\u5F0F\u8FD4\u56DE" aria-hidden="true">#</a> \u663E\u5F0F\u8FD4\u56DE</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">yieldAndReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token string">&quot;Y&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">&quot;R&quot;</span><span class="token punctuation">;</span><span class="token comment">//\u663E\u5F0F\u8FD4\u56DE\u5904\uFF0C\u53EF\u4EE5\u89C2\u5BDF\u5230 done \u4E5F\u7ACB\u5373\u53D8\u4E3A\u4E86 true</span>
  <span class="token keyword">yield</span> <span class="token string">&quot;unreachable&quot;</span><span class="token punctuation">;</span><span class="token comment">// \u4E0D\u4F1A\u88AB\u6267\u884C\u4E86</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> gen <span class="token operator">=</span> <span class="token function">yieldAndReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: &quot;Y&quot;, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: &quot;R&quot;, done: true }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: undefined, done: true }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u751F\u6210\u5668\u51FD\u6570\u4E0D\u80FD\u5F53\u6784\u9020\u5668\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u5668\u51FD\u6570\u4E0D\u80FD\u5F53\u6784\u9020\u5668\u4F7F\u7528" aria-hidden="true">#</a> \u751F\u6210\u5668\u51FD\u6570\u4E0D\u80FD\u5F53\u6784\u9020\u5668\u4F7F\u7528</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">f</span><span class="token punctuation">;</span> <span class="token comment">// throws &quot;TypeError: f is not a constructor&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u4F7F\u7528\u8FED\u4EE3\u5668\u904D\u5386\u4E8C\u7EF4\u6570\u7EC4\u5E76\u8F6C\u6362\u6210\u4E00\u7EF4\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8FED\u4EE3\u5668\u904D\u5386\u4E8C\u7EF4\u6570\u7EC4\u5E76\u8F6C\u6362\u6210\u4E00\u7EF4\u6570\u7EC4" aria-hidden="true">#</a> \u4F7F\u7528\u8FED\u4EE3\u5668\u904D\u5386\u4E8C\u7EF4\u6570\u7EC4\u5E76\u8F6C\u6362\u6210\u4E00\u7EF4\u6570\u7EC4</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">iterArr</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>            <span class="token comment">//\u8FED\u4EE3\u5668\u8FD4\u56DE\u4E00\u4E2A\u8FED\u4EE3\u5668\u5BF9\u8C61</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>         <span class="token comment">// \u5185\u8282\u70B9</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">iterArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// (*)\u9012\u5F52</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>                          <span class="token comment">// \u79BB\u5F00</span>
      <span class="token keyword">yield</span> arr<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4F7F\u7528 for-of \u904D\u5386:</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> x <span class="token keyword">of</span> <span class="token function">iterArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">// a  b  c  d  e</span>
 <span class="token punctuation">}</span>

<span class="token comment">// \u6216\u8005\u76F4\u63A5\u5C06\u8FED\u4EE3\u5668\u5C55\u5F00:</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> gen <span class="token operator">=</span> <span class="token function">iterArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>gen<span class="token punctuation">]</span><span class="token punctuation">;</span>                        <span class="token comment">// [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u6D4F\u89C8\u5668\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u517C\u5BB9\u6027" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u517C\u5BB9\u6027</h2>`,33),_=["src"];function j(a,q){const p=t("ExternalLinkIcon");return e(),o(l,null,[k,n("p",null,[d,b,m,f,g,h,n("a",v,[y,c(p)]),x]),w,n("img",{src:a.$withBase("/assets/mozillaJs/1624584571(1).jpg"),alt:"demo"},null,8,_)],64)}var B=i(r,[["render",j]]);export{B as default};
