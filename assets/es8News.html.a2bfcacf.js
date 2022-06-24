import{_ as n,o as s,c as a,a as e}from"./app.013e756e.js";const t={},o=e(`<h1 id="es8\u65B0\u7279\u6027-2017" tabindex="-1"><a class="header-anchor" href="#es8\u65B0\u7279\u6027-2017" aria-hidden="true">#</a> ES8\u65B0\u7279\u6027\uFF082017\uFF09</h1><ul><li><p>async/await</p></li><li><p><code>Object.values()</code></p></li><li><p><code>Object.entries()</code></p></li><li><p>String padding: <code>padStart()</code>\u548C<code>padEnd()</code>\uFF0C\u586B\u5145\u5B57\u7B26\u4E32\u8FBE\u5230\u5F53\u524D\u957F\u5EA6</p></li><li><p>\u51FD\u6570\u53C2\u6570\u5217\u8868\u7ED3\u5C3E\u5141\u8BB8\u9017\u53F7</p></li><li><p><code>Object.getOwnPropertyDescriptors()</code></p></li><li><p><code>ShareArrayBuffer</code>\u548C<code>Atomics</code>\u5BF9\u8C61\uFF0C\u7528\u4E8E\u4ECE\u5171\u4EAB\u5185\u5B58\u4F4D\u7F6E\u8BFB\u53D6\u548C\u5199\u5165</p></li></ul><h2 id="_1-async-await" tabindex="-1"><a class="header-anchor" href="#_1-async-await" aria-hidden="true">#</a> 1.async/await</h2><p>ES2018\u5F15\u5165\u5F02\u6B65\u8FED\u4EE3\u5668\uFF08asynchronous iterators\uFF09\uFF0C\u8FD9\u5C31\u50CF\u5E38\u89C4\u8FED\u4EE3\u5668\uFF0C\u9664\u4E86<code>next()</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A<code>Promise</code>\u3002\u56E0\u6B64<code>await</code>\u53EF\u4EE5\u548C<code>for...of</code>\u5FAA\u73AF\u4E00\u8D77\u4F7F\u7528\uFF0C\u4EE5\u4E32\u884C\u7684\u65B9\u5F0F\u8FD0\u884C\u5F02\u6B65\u64CD\u4F5C\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-object-values" tabindex="-1"><a class="header-anchor" href="#_2-object-values" aria-hidden="true">#</a> 2.Object.values()</h2><p><code>Object.values()</code>\u662F\u4E00\u4E2A\u4E0E<code>Object.keys()</code>\u7C7B\u4F3C\u7684\u65B0\u51FD\u6570\uFF0C\u4F46\u8FD4\u56DE\u7684\u662FObject\u81EA\u8EAB\u5C5E\u6027\u7684\u6240\u6709\u503C\uFF0C\u4E0D\u5305\u62EC\u7EE7\u627F\u7684\u503C\u3002</p><p>\u5047\u8BBE\u8981\u904D\u5386\u5982\u4E0B\u5BF9\u8C61<code>obj</code>\u7684\u6240\u6709\u503C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u4E0D\u4F7F\u7528<code>Object.values()</code> :<code>ES7</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> vals<span class="token operator">=</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token operator">=&gt;</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vals<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[1, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F7F\u7528<code>Object.values()</code> :<code>ES8</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> values<span class="token operator">=</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[1, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u51FA<code>Object.values()</code>\u4E3A\u7701\u53BB\u4E86\u904D\u5386key\uFF0C\u5E76\u6839\u636E\u8FD9\u4E9Bkey\u83B7\u53D6value\u7684\u6B65\u9AA4\u3002</p><h2 id="_3-object-entries" tabindex="-1"><a class="header-anchor" href="#_3-object-entries" aria-hidden="true">#</a> 3.Object.entries()</h2><p><code>Object.entries()</code>\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u7ED9\u5B9A\u5BF9\u8C61\u81EA\u8EAB\u53EF\u679A\u4E3E\u5C5E\u6027\u7684\u952E\u503C\u5BF9\u7684\u6570\u7EC4\u3002</p><p>\u63A5\u4E0B\u6765\u6765\u904D\u5386\u4E0A\u6587\u4E2D\u7684<code>obj</code>\u5BF9\u8C61\u7684\u6240\u6709\u5C5E\u6027\u7684<code>key</code>\u548C<code>value</code>\uFF1A</p><blockquote><p>\u4E0D\u4F7F\u7528<code>Object.entries()</code> :<code>ES7</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;key:&#39;</span><span class="token operator">+</span>key<span class="token operator">+</span><span class="token string">&#39; value:&#39;</span><span class="token operator">+</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//key:a value:1</span>
<span class="token comment">//key:b value:2</span>
<span class="token comment">//key:c value:3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F7F\u7528<code>Object.entries()</code> :<code>ES8</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span>value<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">key: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> value:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//key:a value:1</span>
<span class="token comment">//key:b value:2</span>
<span class="token comment">//key:c value:3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-string-padding" tabindex="-1"><a class="header-anchor" href="#_4-string-padding" aria-hidden="true">#</a> 4.String padding</h2><p>\u5728<code>ES8</code>\u4E2D<code>String</code>\u65B0\u589E\u4E86\u4E24\u4E2A\u5B9E\u4F8B\u51FD\u6570<code>String.prototype.padStart</code>\u548C<code>String.prototype.padEnd</code>\uFF0C\u5141\u8BB8\u5C06\u7A7A\u5B57\u7B26\u4E32\u6216\u5176\u4ED6\u5B57\u7B26\u4E32\u6DFB\u52A0\u5230\u539F\u59CB\u5B57\u7B26\u4E32\u7684\u5F00\u5934\u6216\u7ED3\u5C3E\u3002</p><blockquote><p><code>String.padStart(targetLength,[padString])</code></p></blockquote><ul><li><p><code>targetLength</code>:\u5F53\u524D\u5B57\u7B26\u4E32\u9700\u8981\u586B\u5145\u5230\u7684\u76EE\u6807\u957F\u5EA6\u3002\u5982\u679C\u8FD9\u4E2A\u6570\u503C\u5C0F\u4E8E\u5F53\u524D\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u5219\u8FD4\u56DE\u5F53\u524D\u5B57\u7B26\u4E32\u672C\u8EAB\u3002</p></li><li><p><code>padString</code>:(\u53EF\u9009)\u586B\u5145\u5B57\u7B26\u4E32\u3002\u5982\u679C\u5B57\u7B26\u4E32\u592A\u957F\uFF0C\u4F7F\u586B\u5145\u540E\u7684\u5B57\u7B26\u4E32\u957F\u5EA6\u8D85\u8FC7\u4E86\u76EE\u6807\u957F\u5EA6\uFF0C\u5219\u53EA\u4FDD\u7559\u6700\u5DE6\u4FA7\u7684\u90E8\u5206\uFF0C\u5176\u4ED6\u90E8\u5206\u4F1A\u88AB\u622A\u65AD\uFF0C\u6B64\u53C2\u6570\u7684\u7F3A\u7701\u503C\u4E3A &quot; &quot;\u3002</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;0.0&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//10.0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;0.0&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// 0.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>String.padEnd(targetLength,padString])</code></p></blockquote><ul><li><p><code>targetLength</code>:\u5F53\u524D\u5B57\u7B26\u4E32\u9700\u8981\u586B\u5145\u5230\u7684\u76EE\u6807\u957F\u5EA6\u3002\u5982\u679C\u8FD9\u4E2A\u6570\u503C\u5C0F\u4E8E\u5F53\u524D\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u5219\u8FD4\u56DE\u5F53\u524D\u5B57\u7B26\u4E32\u672C\u8EAB\u3002</p></li><li><p><code>padString</code>:(\u53EF\u9009) \u586B\u5145\u5B57\u7B26\u4E32\u3002\u5982\u679C\u5B57\u7B26\u4E32\u592A\u957F\uFF0C\u4F7F\u586B\u5145\u540E\u7684\u5B57\u7B26\u4E32\u957F\u5EA6\u8D85\u8FC7\u4E86\u76EE\u6807\u957F\u5EA6\uFF0C\u5219\u53EA\u4FDD\u7559\u6700\u5DE6\u4FA7\u7684\u90E8\u5206\uFF0C\u5176\u4ED6\u90E8\u5206\u4F1A\u88AB\u622A\u65AD\uFF0C\u6B64\u53C2\u6570\u7684\u7F3A\u7701\u503C\u4E3A &quot; &quot;\uFF1B</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;0.0&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//0.00    </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;0.0&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//0.00000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u51FD\u6570\u53C2\u6570\u5217\u8868\u7ED3\u5C3E\u5141\u8BB8\u9017\u53F7" tabindex="-1"><a class="header-anchor" href="#_5-\u51FD\u6570\u53C2\u6570\u5217\u8868\u7ED3\u5C3E\u5141\u8BB8\u9017\u53F7" aria-hidden="true">#</a> 5.\u51FD\u6570\u53C2\u6570\u5217\u8868\u7ED3\u5C3E\u5141\u8BB8\u9017\u53F7</h2><p>\u4E3B\u8981\u4F5C\u7528\u662F\u65B9\u4FBF\u4F7F\u7528git\u8FDB\u884C\u591A\u4EBA\u534F\u4F5C\u5F00\u53D1\u65F6\u4FEE\u6539\u540C\u4E00\u4E2A\u51FD\u6570\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u884C\u53D8\u66F4\u3002</p><h2 id="_6-object-getownpropertydescriptors" tabindex="-1"><a class="header-anchor" href="#_6-object-getownpropertydescriptors" aria-hidden="true">#</a> 6.Object.getOwnPropertyDescriptors()</h2><p><code>Object.getOwnPropertyDescriptors()</code>\u51FD\u6570\u7528\u6765\u83B7\u53D6\u4E00\u4E2A\u5BF9\u8C61\u7684\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26,\u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u81EA\u8EAB\u5C5E\u6027\uFF0C\u5219\u8FD4\u56DE\u7A7A\u5BF9\u8C61\u3002</p><blockquote><p>\u51FD\u6570\u539F\u578B\uFF1A</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD4\u56DE<code>obj</code>\u5BF9\u8C61\u7684\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26\uFF0C\u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u81EA\u8EAB\u5C5E\u6027\uFF0C\u5219\u8FD4\u56DE\u7A7A\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Jine&#39;</span><span class="token punctuation">,</span>
	<span class="token keyword">get</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">&#39;18&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>
<span class="token comment">// {</span>
<span class="token comment">//   age: {</span>
<span class="token comment">//     configurable: true,</span>
<span class="token comment">//     enumerable: true,</span>
<span class="token comment">//     get: function age(){}, //the getter function</span>
<span class="token comment">//     set: undefined</span>
<span class="token comment">//   },</span>
<span class="token comment">//   name: {</span>
<span class="token comment">//     configurable: true,</span>
<span class="token comment">//     enumerable: true,</span>
<span class="token comment">//		value:&quot;Jine&quot;,</span>
<span class="token comment">//		writable:true</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-sharedarraybuffer\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_7-sharedarraybuffer\u5BF9\u8C61" aria-hidden="true">#</a> 7.SharedArrayBuffer\u5BF9\u8C61</h2><p><code>SharedArrayBuffer</code> \u5BF9\u8C61\u7528\u6765\u8868\u793A\u4E00\u4E2A\u901A\u7528\u7684\uFF0C\u56FA\u5B9A\u957F\u5EA6\u7684\u539F\u59CB\u4E8C\u8FDB\u5236\u6570\u636E\u7F13\u51B2\u533A\uFF0C\u7C7B\u4F3C\u4E8E <code>ArrayBuffer</code> \u5BF9\u8C61\uFF0C\u5B83\u4EEC\u90FD\u53EF\u4EE5\u7528\u6765\u5728\u5171\u4EAB\u5185\u5B58\uFF08<code>shared memory</code>\uFF09\u4E0A\u521B\u5EFA\u89C6\u56FE\u3002\u4E0E <code>ArrayBuffer</code> \u4E0D\u540C\u7684\u662F\uFF0C<code>SharedArrayBuffer</code> \u4E0D\u80FD\u88AB\u5206\u79BB\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">length</span> \u6240\u521B\u5EFA\u7684\u6570\u7EC4\u7F13\u51B2\u533A\u7684\u5927\u5C0F\uFF0C\u4EE5\u5B57\u8282(byte)\u4E3A\u5355\u4F4D\u3002  
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>SharedArrayBuffer<span class="token punctuation">}</span></span> \u4E00\u4E2A\u5927\u5C0F\u6307\u5B9A\u7684\u65B0 SharedArrayBuffer \u5BF9\u8C61\u3002\u5176\u5185\u5BB9\u88AB\u521D\u59CB\u5316\u4E3A 0\u3002
 */</span>
<span class="token keyword">new</span> <span class="token class-name">SharedArrayBuffer</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-atomics\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_8-atomics\u5BF9\u8C61" aria-hidden="true">#</a> 8.Atomics\u5BF9\u8C61</h2><p><code>Atomics</code> \u5BF9\u8C61\u63D0\u4F9B\u4E86\u4E00\u7EC4\u9759\u6001\u65B9\u6CD5\u7528\u6765\u5BF9 <code>SharedArrayBuffer</code> \u5BF9\u8C61\u8FDB\u884C\u539F\u5B50\u64CD\u4F5C\u3002</p><p>\u8FD9\u4E9B\u539F\u5B50\u64CD\u4F5C\u5C5E\u4E8E <code>Atomics</code> \u6A21\u5757\u3002\u4E0E\u4E00\u822C\u7684\u5168\u5C40\u5BF9\u8C61\u4E0D\u540C\uFF0C<code>Atomics</code> \u4E0D\u662F\u6784\u9020\u51FD\u6570\uFF0C\u56E0\u6B64\u4E0D\u80FD\u4F7F\u7528 <code>new</code> <code>\u64CD\u4F5C\u7B26\u8C03\u7528\uFF0C\u4E5F\u4E0D\u80FD\u5C06\u5176\u5F53\u4F5C\u51FD\u6570\u76F4\u63A5\u8C03\u7528\u3002Atomics</code> \u7684\u6240\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\u90FD\u662F\u9759\u6001\u7684\uFF08\u4E0E <code>Math</code> \u5BF9\u8C61\u4E00\u6837\uFF09\u3002</p><p>\u591A\u4E2A\u5171\u4EAB\u5185\u5B58\u7684\u7EBF\u7A0B\u80FD\u591F\u540C\u65F6\u8BFB\u5199\u540C\u4E00\u4F4D\u7F6E\u4E0A\u7684\u6570\u636E\u3002\u539F\u5B50\u64CD\u4F5C\u4F1A\u786E\u4FDD\u6B63\u5728\u8BFB\u6216\u5199\u7684\u6570\u636E\u7684\u503C\u662F\u7B26\u5408\u9884\u671F\u7684\uFF0C\u5373\u4E0B\u4E00\u4E2A\u539F\u5B50\u64CD\u4F5C\u4E00\u5B9A\u4F1A\u5728\u4E0A\u4E00\u4E2A\u539F\u5B50\u64CD\u4F5C\u7ED3\u675F\u540E\u624D\u4F1A\u5F00\u59CB\uFF0C\u5176\u64CD\u4F5C\u8FC7\u7A0B\u4E0D\u4F1A\u4E2D\u65AD\u3002</p><ul><li><code>Atomics.add()</code></li></ul><blockquote><p>\u5C06\u6307\u5B9A\u4F4D\u7F6E\u4E0A\u7684\u6570\u7EC4\u5143\u7D20\u4E0E\u7ED9\u5B9A\u7684\u503C\u76F8\u52A0\uFF0C\u5E76\u8FD4\u56DE\u76F8\u52A0\u524D\u8BE5\u5143\u7D20\u7684\u503C\u3002</p></blockquote><ul><li><code>Atomics.and()</code></li></ul><blockquote><p>\u5C06\u6307\u5B9A\u4F4D\u7F6E\u4E0A\u7684\u6570\u7EC4\u5143\u7D20\u4E0E\u7ED9\u5B9A\u7684\u503C\u76F8\u4E0E\uFF0C\u5E76\u8FD4\u56DE\u4E0E\u64CD\u4F5C\u524D\u8BE5\u5143\u7D20\u7684\u503C\u3002</p></blockquote><ul><li><code>Atomics.compareExchange()</code></li></ul><blockquote><p>\u5982\u679C\u6570\u7EC4\u4E2D\u6307\u5B9A\u7684\u5143\u7D20\u4E0E\u7ED9\u5B9A\u7684\u503C\u76F8\u7B49\uFF0C\u5219\u5C06\u5176\u66F4\u65B0\u4E3A\u65B0\u7684\u503C\uFF0C\u5E76\u8FD4\u56DE\u8BE5\u5143\u7D20\u539F\u5148\u7684\u503C\u3002</p></blockquote><ul><li><code>Atomics.exchange()</code></li></ul><blockquote><p>\u5C06\u6570\u7EC4\u4E2D\u6307\u5B9A\u7684\u5143\u7D20\u66F4\u65B0\u4E3A\u7ED9\u5B9A\u7684\u503C\uFF0C\u5E76\u8FD4\u56DE\u8BE5\u5143\u7D20\u66F4\u65B0\u524D\u7684\u503C\u3002</p></blockquote><ul><li><code>Atomics.load()</code></li></ul><blockquote><p>\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6307\u5B9A\u5143\u7D20\u7684\u503C\u3002</p></blockquote><ul><li><code>Atomics.or()</code></li></ul><blockquote><p>\u5C06\u6307\u5B9A\u4F4D\u7F6E\u4E0A\u7684\u6570\u7EC4\u5143\u7D20\u4E0E\u7ED9\u5B9A\u7684\u503C\u76F8\u6216\uFF0C\u5E76\u8FD4\u56DE\u6216\u64CD\u4F5C\u524D\u8BE5\u5143\u7D20\u7684\u503C\u3002</p></blockquote><ul><li><code>Atomics.store()</code></li></ul><blockquote><p>\u5C06\u6570\u7EC4\u4E2D\u6307\u5B9A\u7684\u5143\u7D20\u8BBE\u7F6E\u4E3A\u7ED9\u5B9A\u7684\u503C\uFF0C\u5E76\u8FD4\u56DE\u8BE5\u503C\u3002</p></blockquote><ul><li><code>Atomics.sub()</code></li></ul><blockquote><p>\u5C06\u6307\u5B9A\u4F4D\u7F6E\u4E0A\u7684\u6570\u7EC4\u5143\u7D20\u4E0E\u7ED9\u5B9A\u7684\u503C\u76F8\u51CF\uFF0C\u5E76\u8FD4\u56DE\u76F8\u51CF\u524D\u8BE5\u5143\u7D20\u7684\u503C\u3002</p></blockquote><ul><li><code>Atomics.xor()</code></li></ul><blockquote><p>\u5C06\u6307\u5B9A\u4F4D\u7F6E\u4E0A\u7684\u6570\u7EC4\u5143\u7D20\u4E0E\u7ED9\u5B9A\u7684\u503C\u76F8\u5F02\u6216\uFF0C\u5E76\u8FD4\u56DE\u5F02\u6216\u64CD\u4F5C\u524D\u8BE5\u5143\u7D20\u7684\u503C\u3002</p></blockquote><p><code>wait()</code> \u548C <code>wake()</code> \u65B9\u6CD5\u91C7\u7528\u7684\u662F <code>Linux</code> \u4E0A\u7684 <code>futexes</code> \u6A21\u578B\uFF08<code>fast user-space mutex</code>\uFF0C\u5FEB\u901F\u7528\u6237\u7A7A\u95F4\u4E92\u65A5\u91CF\uFF09\uFF0C\u53EF\u4EE5\u8BA9\u8FDB\u7A0B\u4E00\u76F4\u7B49\u5F85\u76F4\u5230\u67D0\u4E2A\u7279\u5B9A\u7684\u6761\u4EF6\u4E3A\u771F\uFF0C\u4E3B\u8981\u7528\u4E8E\u5B9E\u73B0\u963B\u585E\u3002</p><ul><li><code>Atomics.wait()</code></li></ul><blockquote><p>\u68C0\u6D4B\u6570\u7EC4\u4E2D\u67D0\u4E2A\u6307\u5B9A\u4F4D\u7F6E\u4E0A\u7684\u503C\u662F\u5426\u4ECD\u7136\u662F\u7ED9\u5B9A\u503C\uFF0C\u662F\u5219\u4FDD\u6301\u6302\u8D77\u76F4\u5230\u88AB\u5524\u9192\u6216\u8D85\u65F6\u3002\u8FD4\u56DE\u503C\u4E3A <code>&quot;ok&quot;</code>\u3001<code>&quot;not-equal&quot;</code> \u6216 <code>&quot;time-out&quot;</code>\u3002\u8C03\u7528\u65F6\uFF0C\u5982\u679C\u5F53\u524D\u7EBF\u7A0B\u4E0D\u5141\u8BB8\u963B\u585E\uFF0C\u5219\u4F1A\u629B\u51FA\u5F02\u5E38\uFF08\u5927\u591A\u6570\u6D4F\u89C8\u5668\u90FD\u4E0D\u5141\u8BB8\u5728\u4E3B\u7EBF\u7A0B\u4E2D\u8C03\u7528 <code>wait()</code>\uFF09\u3002</p></blockquote><ul><li><code>Atomics.wake()</code></li></ul><blockquote><p>\u5524\u9192\u7B49\u5F85\u961F\u5217\u4E2D\u6B63\u5728\u6570\u7EC4\u6307\u5B9A\u4F4D\u7F6E\u7684\u5143\u7D20\u4E0A\u7B49\u5F85\u7684\u7EBF\u7A0B\u3002\u8FD4\u56DE\u503C\u4E3A\u6210\u529F\u5524\u9192\u7684\u7EBF\u7A0B\u6570\u91CF\u3002</p></blockquote><ul><li><code>Atomics.isLockFree(size)</code></li></ul><blockquote><p>\u53EF\u4EE5\u7528\u6765\u68C0\u6D4B\u5F53\u524D\u7CFB\u7EDF\u662F\u5426\u652F\u6301\u786C\u4EF6\u7EA7\u7684\u539F\u5B50\u64CD\u4F5C\u3002\u5BF9\u4E8E\u6307\u5B9A\u5927\u5C0F\u7684\u6570\u7EC4\uFF0C\u5982\u679C\u5F53\u524D\u7CFB\u7EDF\u652F\u6301\u786C\u4EF6\u7EA7\u7684\u539F\u5B50\u64CD\u4F5C\uFF0C\u5219\u8FD4\u56DE <code>true</code>\uFF1B\u5426\u5219\u5C31\u610F\u5473\u7740\u5BF9\u4E8E\u8BE5\u6570\u7EC4\uFF0C<code>Atomics</code> \u5BF9\u8C61\u4E2D\u7684\u5404\u539F\u5B50\u64CD\u4F5C\u90FD\u53EA\u80FD\u7528\u9501\u6765\u5B9E\u73B0\u3002\u6B64\u51FD\u6570\u9762\u5411\u7684\u662F\u6280\u672F\u4E13\u5BB6\u3002</p></blockquote>`,69),c=[o];function p(l,i){return s(),a("div",null,c)}var d=n(t,[["render",p],["__file","es8News.html.vue"]]);export{d as default};
