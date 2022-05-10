import{_ as t,r as o,o as c,c as l,b as n,d as e,F as r,e as s,a as p}from"./app.41ff10d5.js";const u={},i=n("h1",{id:"es9\u65B0\u7279\u6027-2018",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#es9\u65B0\u7279\u6027-2018","aria-hidden":"true"},"#"),s(" ES9\u65B0\u7279\u6027\uFF082018\uFF09")],-1),k=n("li",null,[n("p",null,"\u5F02\u6B65\u8FED\u4EE3")],-1),d=n("li",null,[n("p",null,"Promise.finally()")],-1),m=n("li",null,[n("p",null,"Rest/Spread \u5C5E\u6027")],-1),b={href:"http://esnext.justjavac.com/proposal/regexp-named-groups.html",target:"_blank",rel:"noopener noreferrer"},g=s("\u6B63\u5219\u8868\u8FBE\u5F0F\u547D\u540D\u6355\u83B7\u7EC4"),h=s("\uFF08Regular Expression Named Capture Groups\uFF09"),v={href:"https://segmentfault.com/a/1190000006824133",target:"_blank",rel:"noopener noreferrer"},_=s("\u6B63\u5219\u8868\u8FBE\u5F0F\u53CD\u5411\u65AD\u8A00"),x=s("\uFF08lookbehind\uFF09"),f=n("li",null,[n("p",null,"\u6B63\u5219\u8868\u8FBE\u5F0FdotAll\u6A21\u5F0F")],-1),y={href:"https://juejin.im/post/6844903622870827022#heading-1",target:"_blank",rel:"noopener noreferrer"},j=s("\u6B63\u5219\u8868\u8FBE\u5F0F Unicode \u8F6C\u4E49"),w={href:"https://juejin.im/post/6844903622870827022#heading-1",target:"_blank",rel:"noopener noreferrer"},S=s("\u975E\u8F6C\u4E49\u5E8F\u5217\u7684\u6A21\u677F\u5B57\u7B26\u4E32"),F=p(`<h2 id="_1-\u5F02\u6B65\u8FED\u4EE3" tabindex="-1"><a class="header-anchor" href="#_1-\u5F02\u6B65\u8FED\u4EE3" aria-hidden="true">#</a> 1.\u5F02\u6B65\u8FED\u4EE3</h2><p>\u5728<code>async/await</code>\u7684\u67D0\u4E9B\u65F6\u523B\uFF0C\u4F60\u53EF\u80FD\u5C1D\u8BD5\u5728\u540C\u6B65\u5FAA\u73AF\u4E2D\u8C03\u7528\u5F02\u6B65\u51FD\u6570\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">doSomething</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u4E0D\u4F1A\u6B63\u5E38\u8FD0\u884C\uFF0C\u4E0B\u9762\u8FD9\u6BB5\u540C\u6837\u4E5F\u4E0D\u4F1A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  array<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">i</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">doSomething</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u4E2D\uFF0C\u5FAA\u73AF\u672C\u8EAB\u4F9D\u65E7\u4FDD\u6301\u540C\u6B65\uFF0C\u5E76\u5728\u5728\u5185\u90E8\u5F02\u6B65\u51FD\u6570\u4E4B\u524D\u5168\u90E8\u8C03\u7528\u5B8C\u6210\u3002</p><p>ES2018\u5F15\u5165\u5F02\u6B65\u8FED\u4EE3\u5668\uFF08asynchronous iterators\uFF09\uFF0C\u8FD9\u5C31\u50CF\u5E38\u89C4\u8FED\u4EE3\u5668\uFF0C\u9664\u4E86<code>next()</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A<code>Promise</code>\u3002\u56E0\u6B64<code>await</code>\u53EF\u4EE5\u548C<code>for...of</code>\u5FAA\u73AF\u4E00\u8D77\u4F7F\u7528\uFF0C\u4EE5\u4E32\u884C\u7684\u65B9\u5F0F\u8FD0\u884C\u5F02\u6B65\u64CD\u4F5C\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_2-promise-finally" tabindex="-1"><a class="header-anchor" href="#_2-promise-finally" aria-hidden="true">#</a> 2.Promise.finally()</h2><p>\u4E00\u4E2A<code>Promise</code>\u8C03\u7528\u94FE\u8981\u4E48\u6210\u529F\u5230\u8FBE\u6700\u540E\u4E00\u4E2A<code>.then()</code>\uFF0C\u8981\u4E48\u5931\u8D25\u89E6\u53D1<code>.catch()</code>\u3002\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4F60\u60F3\u8981\u5728\u65E0\u8BBA<code>Promise</code>\u8FD0\u884C\u6210\u529F\u8FD8\u662F\u5931\u8D25\uFF0C\u8FD0\u884C\u76F8\u540C\u7684\u4EE3\u7801\uFF0C\u4F8B\u5982\u6E05\u9664\uFF0C\u5220\u9664\u5BF9\u8BDD\uFF0C\u5173\u95ED\u6570\u636E\u5E93\u8FDE\u63A5\u7B49\u3002</p><p><code>.finally()</code>\u5141\u8BB8\u4F60\u6307\u5B9A\u6700\u7EC8\u7684\u903B\u8F91\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">doSomething1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>doSomething2<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>doSomething3<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// finish here!</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_3-rest-spread-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_3-rest-spread-\u5C5E\u6027" aria-hidden="true">#</a> 3.Rest/Spread \u5C5E\u6027</h2>`,13),D=s("ES2015\u5F15\u5165\u4E86"),E={href:"https://link.juejin.im/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FFunctions%2FRest_parameters",target:"_blank",rel:"noopener noreferrer"},N=s("Rest\u53C2\u6570"),R=s("\u548C"),P={href:"https://link.juejin.im/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2FSpread_syntax",target:"_blank",rel:"noopener noreferrer"},z=s("\u6269\u5C55\u8FD0\u7B97\u7B26"),L=s("\u3002\u4E09\u4E2A\u70B9\uFF08...\uFF09\u4EC5\u7528\u4E8E\u6570\u7EC4\u3002Rest\u53C2\u6570\u8BED\u6CD5\u5141\u8BB8\u5C06\u4E00\u4E2A\u4E0D\u5B9A\u6570\u91CF\u7684\u53C2\u6570\u8868\u793A\u4E3A\u4E00\u4E2A\u6570\u7EC4\u3002"),Y=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">restParam</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">restParam</span><span class="token punctuation">(</span><span class="token parameter">p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> <span class="token operator">...</span>p3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// p1 = 1</span>
  <span class="token comment">// p2 = 2</span>
  <span class="token comment">// p3 = [3, 4, 5]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5C55\u5F00\u64CD\u4F5C\u7B26\u4EE5\u76F8\u53CD\u7684\u65B9\u5F0F\u5DE5\u4F5C\uFF0C\u5C06\u6570\u7EC4\u8F6C\u6362\u6210\u53EF\u4F20\u9012\u7ED9\u51FD\u6570\u7684\u5355\u72EC\u53C2\u6570\u3002\u4F8B\u5982<code>Math.max()</code>\u8FD4\u56DE\u7ED9\u5B9A\u6570\u5B57\u4E2D\u7684\u6700\u5927\u503C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> values <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>values<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>ES2018</code>\u4E3A\u5BF9\u8C61\u89E3\u6784\u63D0\u4F9B\u4E86\u548C\u6570\u7EC4\u4E00\u6837\u7684<code>Rest</code>\u53C2\u6570\uFF08\uFF09\u548C\u5C55\u5F00\u64CD\u4F5C\u7B26\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> myObject <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> <span class="token operator">...</span>x <span class="token punctuation">}</span> <span class="token operator">=</span> myObject<span class="token punctuation">;</span>
<span class="token comment">// a = 1</span>
<span class="token comment">// x = { b: 2, c: 3 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6216\u8005\u4F60\u53EF\u4EE5\u4F7F\u7528\u5B83\u7ED9\u51FD\u6570\u4F20\u9012\u53C2\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">restParam</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">restParam</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> a<span class="token punctuation">,</span> <span class="token operator">...</span>x <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// a = 1</span>
  <span class="token comment">// x = { b: 2, c: 3 }</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8DDF\u6570\u7EC4\u4E00\u6837\uFF0C<code>Rest</code>\u53C2\u6570\u53EA\u80FD\u5728\u58F0\u660E\u7684\u7ED3\u5C3E\u5904\u4F7F\u7528\u3002\u6B64\u5916\uFF0C\u5B83\u53EA\u9002\u7528\u4E8E\u6BCF\u4E2A\u5BF9\u8C61\u7684\u9876\u5C42\uFF0C\u5982\u679C\u5BF9\u8C61\u4E2D\u5D4C\u5957\u5BF9\u8C61\u5219\u65E0\u6CD5\u9002\u7528\u3002</p><p>\u6269\u5C55\u8FD0\u7B97\u7B26\u53EF\u4EE5\u5728\u5176\u4ED6\u5BF9\u8C61\u5185\u4F7F\u7528\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>obj1<span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">26</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// obj2 is { a: 1, b: 2, c: 3, z: 26 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u53EF\u4EE5\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u62F7\u8D1D\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u50CF\u662F\u8FD9\u6837<code>obj2 = {...obj1}</code>\uFF0C\u4F46\u662F <strong>\u8FD9\u53EA\u662F\u4E00\u4E2A\u5BF9\u8C61\u7684\u6D45\u62F7\u8D1D</strong>\u3002\u53E6\u5916\uFF0C\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61A\u7684\u5C5E\u6027\u662F\u5BF9\u8C61B\uFF0C\u90A3\u4E48\u5728\u514B\u9686\u540E\u7684\u5BF9\u8C61cloneB\u4E2D\uFF0C\u8BE5\u5C5E\u6027\u6307\u5411\u5BF9\u8C61B\u3002</p><h2 id="_4-\u6B63\u5219\u8868\u8FBE\u5F0F\u547D\u540D\u6355\u83B7\u7EC4" tabindex="-1"><a class="header-anchor" href="#_4-\u6B63\u5219\u8868\u8FBE\u5F0F\u547D\u540D\u6355\u83B7\u7EC4" aria-hidden="true">#</a> 4.\u6B63\u5219\u8868\u8FBE\u5F0F\u547D\u540D\u6355\u83B7\u7EC4</h2><p><code>JavaScript</code>\u6B63\u5219\u8868\u8FBE\u5F0F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5339\u914D\u7684\u5BF9\u8C61\u2014\u2014\u4E00\u4E2A\u5305\u542B\u5339\u914D\u5B57\u7B26\u4E32\u7684\u7C7B\u6570\u7EC4\uFF0C\u4F8B\u5982\uFF1A\u4EE5<code>YYYY-MM-DD</code>\u7684\u683C\u5F0F\u89E3\u6790\u65E5\u671F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span>
  reDate <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([0-9]{4})-([0-9]{2})-([0-9]{2})</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  match  <span class="token operator">=</span> reDate<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;2018-04-30&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  year   <span class="token operator">=</span> match<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 2018</span>
  month  <span class="token operator">=</span> match<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 04</span>
  day    <span class="token operator">=</span> match<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u6837\u7684\u4EE3\u7801\u5F88\u96BE\u8BFB\u61C2\uFF0C\u5E76\u4E14\u6539\u53D8\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u7ED3\u6784\u6709\u53EF\u80FD\u6539\u53D8\u5339\u914D\u5BF9\u8C61\u7684\u7D22\u5F15\u3002</p><p>ES2018\u5141\u8BB8\u547D\u540D\u6355\u83B7\u7EC4\u4F7F\u7528\u7B26\u53F7<code>?&lt;name&gt;</code>\uFF0C\u5728\u6253\u5F00\u6355\u83B7\u62EC\u53F7<code>(</code>\u540E\u7ACB\u5373\u547D\u540D\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span>
  reDate <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;year&gt;[0-9]{4})-(?&lt;month&gt;[0-9]{2})-(?&lt;day&gt;[0-9]{2})</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  match  <span class="token operator">=</span> reDate<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;2018-04-30&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  year   <span class="token operator">=</span> match<span class="token punctuation">.</span>groups<span class="token punctuation">.</span>year<span class="token punctuation">,</span>  <span class="token comment">// 2018</span>
  month  <span class="token operator">=</span> match<span class="token punctuation">.</span>groups<span class="token punctuation">.</span>month<span class="token punctuation">,</span> <span class="token comment">// 04</span>
  day    <span class="token operator">=</span> match<span class="token punctuation">.</span>groups<span class="token punctuation">.</span>day<span class="token punctuation">;</span>   <span class="token comment">// 30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4EFB\u4F55\u5339\u914D\u5931\u8D25\u7684\u547D\u540D\u7EC4\u90FD\u5C06\u8FD4\u56DE<code>undefined</code>\u3002</p><p>\u547D\u540D\u6355\u83B7\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5728<code>replace()</code>\u65B9\u6CD5\u4E2D\u3002\u4F8B\u5982\u5C06\u65E5\u671F\u8F6C\u6362\u4E3A\u7F8E\u56FD\u7684 <code>MM-DD-YYYY</code> \u683C\u5F0F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span>
  reDate <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;year&gt;[0-9]{4})-(?&lt;month&gt;[0-9]{2})-(?&lt;day&gt;[0-9]{2})</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  d      <span class="token operator">=</span> <span class="token string">&#39;2018-04-30&#39;</span><span class="token punctuation">,</span>
  usDate <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reDate<span class="token punctuation">,</span> <span class="token string">&#39;$&lt;month&gt;-$&lt;day&gt;-$&lt;year&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_5-\u6B63\u5219\u8868\u8FBE\u5F0F\u53CD\u5411\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#_5-\u6B63\u5219\u8868\u8FBE\u5F0F\u53CD\u5411\u65AD\u8A00" aria-hidden="true">#</a> 5.\u6B63\u5219\u8868\u8FBE\u5F0F\u53CD\u5411\u65AD\u8A00</h2><p>\u76EE\u524D<code>JavaScript</code>\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u652F\u6301\u5148\u884C\u65AD\u8A00\uFF08<code>lookahead</code>\uFF09\u3002\u8FD9\u610F\u5473\u7740\u5339\u914D\u4F1A\u53D1\u751F\uFF0C\u4F46\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6355\u83B7\uFF0C\u5E76\u4E14\u65AD\u8A00\u6CA1\u6709\u5305\u542B\u5728\u6574\u4E2A\u5339\u914D\u5B57\u6BB5\u4E2D\u3002\u4F8B\u5982\u4ECE\u4EF7\u683C\u4E2D\u6355\u83B7\u8D27\u5E01\u7B26\u53F7\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span>
  reLookahead <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\D(?=\\d+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  match       <span class="token operator">=</span> reLookahead<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;$123.89&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> match<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// $</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>ES2018</code>\u5F15\u5165\u4EE5\u76F8\u540C\u65B9\u5F0F\u5DE5\u4F5C\u4F46\u662F\u5339\u914D\u524D\u9762\u7684\u53CD\u5411\u65AD\u8A00\uFF08<code>lookbehind</code>\uFF09\uFF0C\u8FD9\u6837\u6211\u5C31\u53EF\u4EE5\u5FFD\u7565\u8D27\u5E01\u7B26\u53F7\uFF0C\u5355\u7EAF\u7684\u6355\u83B7\u4EF7\u683C\u7684\u6570\u5B57\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span>
  reLookbehind <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=\\D)\\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  match        <span class="token operator">=</span> reLookbehind<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;$123.89&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> match<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123.89</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4EE5\u4E0A\u662F <strong>\u80AF\u5B9A\u53CD\u5411\u65AD\u8A00</strong>\uFF0C\u975E\u6570\u5B57<code>\\D</code>\u5FC5\u987B\u5B58\u5728\u3002\u540C\u6837\u7684\uFF0C\u8FD8\u5B58\u5728 <strong>\u5426\u5B9A\u53CD\u5411\u65AD\u8A00</strong>\uFF0C\u8868\u793A\u4E00\u4E2A\u503C\u5FC5\u987B\u4E0D\u5B58\u5728\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span>
  reLookbehindNeg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;!\\D)\\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  match           <span class="token operator">=</span> reLookbehind<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;$123.89&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> match<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_6-\u6B63\u5219\u8868\u8FBE\u5F0Fdotall\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_6-\u6B63\u5219\u8868\u8FBE\u5F0Fdotall\u6A21\u5F0F" aria-hidden="true">#</a> 6.\u6B63\u5219\u8868\u8FBE\u5F0FdotAll\u6A21\u5F0F</h2><p>\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u70B9.\u5339\u914D\u9664\u56DE\u8F66\u5916\u7684\u4EFB\u4F55\u5355\u5B57\u7B26\uFF0C\u6807\u8BB0<code>s</code>\u6539\u53D8\u8FD9\u79CD\u884C\u4E3A\uFF0C\u5141\u8BB8\u884C\u7EC8\u6B62\u7B26\u7684\u51FA\u73B0\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">hello.world</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;hello\\nworld&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false</span>
<span class="token operator">/</span>hello<span class="token punctuation">.</span>world<span class="token operator">/</span>s<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;hello\\nworld&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_7-\u6B63\u5219\u8868\u8FBE\u5F0F-unicode-\u8F6C\u4E49" tabindex="-1"><a class="header-anchor" href="#_7-\u6B63\u5219\u8868\u8FBE\u5F0F-unicode-\u8F6C\u4E49" aria-hidden="true">#</a> 7.\u6B63\u5219\u8868\u8FBE\u5F0F Unicode \u8F6C\u4E49</h2><p>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u672C\u5730\u8BBF\u95EE <code>Unicode</code> \u5B57\u7B26\u5C5E\u6027\u662F\u4E0D\u88AB\u5141\u8BB8\u7684\u3002<code>ES2018</code>\u6DFB\u52A0\u4E86 <code>Unicode</code> \u5C5E\u6027\u8F6C\u4E49\u2014\u2014\u5F62\u5F0F\u4E3A<code>\\p{...}</code>\u548C<code>\\P{...}</code>\uFF0C\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u6807\u8BB0 <code>u</code> (unicode) \u8BBE\u7F6E\uFF0C\u5728<code>\\p</code>\u5757\u513F\u5185\uFF0C\u53EF\u4EE5\u4EE5\u952E\u503C\u5BF9\u7684\u65B9\u5F0F\u8BBE\u7F6E\u9700\u8981\u5339\u914D\u7684\u5C5E\u6027\u800C\u975E\u5177\u4F53\u5185\u5BB9\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reGreekSymbol <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\p{Script=Greek}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">u</span></span><span class="token punctuation">;</span>
reGreekSymbol<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;\u03C0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6B64\u7279\u6027\u53EF\u4EE5\u907F\u514D\u4F7F\u7528\u7279\u5B9A <code>Unicode</code> \u533A\u95F4\u6765\u8FDB\u884C\u5185\u5BB9\u7C7B\u578B\u5224\u65AD\uFF0C\u63D0\u5347\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002</p><h2 id="_8-\u975E\u8F6C\u4E49\u5E8F\u5217\u7684\u6A21\u677F\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_8-\u975E\u8F6C\u4E49\u5E8F\u5217\u7684\u6A21\u677F\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 8.\u975E\u8F6C\u4E49\u5E8F\u5217\u7684\u6A21\u677F\u5B57\u7B26\u4E32</h2>`,35),$=s("\u4E4B\u524D\uFF0C"),B=n("code",null,"\\u",-1),C=s("\u5F00\u59CB\u4E00\u4E2A unicode \u8F6C\u4E49\uFF0C"),M=n("code",null,"\\x",-1),A=s("\u5F00\u59CB\u4E00\u4E2A\u5341\u516D\u8FDB\u5236\u8F6C\u4E49\uFF0C"),J=n("code",null,"\\",-1),U=s("\u540E\u8DDF\u4E00\u4E2A\u6570\u5B57\u5F00\u59CB\u4E00\u4E2A\u516B\u8FDB\u5236\u8F6C\u4E49\u3002\u8FD9\u4F7F\u5F97\u521B\u5EFA\u7279\u5B9A\u7684\u5B57\u7B26\u4E32\u53D8\u5F97\u4E0D\u53EF\u80FD\uFF0C\u4F8B\u5982Windows\u6587\u4EF6\u8DEF\u5F84 "),G=n("code",null,"C:\\uuu\\xxx\\111",-1),V=s("\u3002\u66F4\u591A\u7EC6\u8282\u53C2\u8003"),W={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings",target:"_blank",rel:"noopener noreferrer"},O=s("\u6A21\u677F\u5B57\u7B26\u4E32"),I=s("\u3002");function T(q,H){const a=o("ExternalLinkIcon");return c(),l(r,null,[i,n("ul",null,[k,d,m,n("li",null,[n("p",null,[n("a",b,[g,e(a)]),h])]),n("li",null,[n("p",null,[n("a",v,[_,e(a)]),x])]),f,n("li",null,[n("p",null,[n("a",y,[j,e(a)])])]),n("li",null,[n("p",null,[n("a",w,[S,e(a)])])])]),F,n("p",null,[D,n("a",E,[N,e(a)]),R,n("a",P,[z,e(a)]),L]),Y,n("p",null,[$,B,C,M,A,J,U,G,V,n("a",W,[O,e(a)]),I])],64)}var Q=t(u,[["render",T],["__file","es9News.html.vue"]]);export{Q as default};
