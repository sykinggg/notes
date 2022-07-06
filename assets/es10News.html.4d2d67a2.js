import{_ as t,r as e,o,c,b as s,d as l,F as u,a,e as n}from"./app.816e2a4d.js";const r={},i=a('<h1 id="es10\u65B0\u7279\u6027-2019" tabindex="-1"><a class="header-anchor" href="#es10\u65B0\u7279\u6027-2019" aria-hidden="true">#</a> ES10\u65B0\u7279\u6027\uFF082019\uFF09</h1><ul><li><p>\u884C\u5206\u9694\u7B26\uFF08U + 2028\uFF09\u548C\u6BB5\u5206\u9694\u7B26\uFF08U + 2029\uFF09\u7B26\u53F7\u73B0\u5728\u5141\u8BB8\u5728\u5B57\u7B26\u4E32\u6587\u5B57\u4E2D\uFF0C\u4E0EJSON\u5339\u914D</p></li><li><p>\u66F4\u52A0\u53CB\u597D\u7684 JSON.stringify</p></li><li><p>\u65B0\u589E\u4E86Array\u7684<code>flat()</code>\u65B9\u6CD5\u548C<code>flatMap()</code>\u65B9\u6CD5</p></li><li><p>\u65B0\u589E\u4E86String\u7684<code>trimStart()</code>\u65B9\u6CD5\u548C<code>trimEnd()</code>\u65B9\u6CD5</p></li><li><p><code>Object.fromEntries()</code></p></li><li><p><code>Symbol.prototype.description</code></p></li><li><p><code>String.prototype.matchAll</code></p></li><li><p><code>Function.prototype.toString()</code>\u73B0\u5728\u8FD4\u56DE\u7CBE\u786E\u5B57\u7B26\uFF0C\u5305\u62EC\u7A7A\u683C\u548C\u6CE8\u91CA</p></li><li><p>\u7B80\u5316<code>try {} catch {}</code>,\u4FEE\u6539 <code>catch</code> \u7ED1\u5B9A</p></li><li><p>\u65B0\u7684\u57FA\u672C\u6570\u636E\u7C7B\u578B<code>BigInt</code></p></li><li><p>globalThis</p></li><li><p>import()</p></li><li><p>Legacy RegEx</p></li><li><p>\u79C1\u6709\u7684\u5B9E\u4F8B\u65B9\u6CD5\u548C\u8BBF\u95EE\u5668</p></li></ul><h2 id="_1-\u884C\u5206\u9694\u7B26-u-2028-\u548C\u6BB5\u5206\u9694\u7B26-u-2029-\u7B26\u53F7\u73B0\u5728\u5141\u8BB8\u5728\u5B57\u7B26\u4E32\u6587\u5B57\u4E2D-\u4E0Ejson\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#_1-\u884C\u5206\u9694\u7B26-u-2028-\u548C\u6BB5\u5206\u9694\u7B26-u-2029-\u7B26\u53F7\u73B0\u5728\u5141\u8BB8\u5728\u5B57\u7B26\u4E32\u6587\u5B57\u4E2D-\u4E0Ejson\u5339\u914D" aria-hidden="true">#</a> 1.\u884C\u5206\u9694\u7B26\uFF08U + 2028\uFF09\u548C\u6BB5\u5206\u9694\u7B26\uFF08U + 2029\uFF09\u7B26\u53F7\u73B0\u5728\u5141\u8BB8\u5728\u5B57\u7B26\u4E32\u6587\u5B57\u4E2D\uFF0C\u4E0EJSON\u5339\u914D</h2><p>\u4EE5\u524D\uFF0C\u8FD9\u4E9B\u7B26\u53F7\u5728\u5B57\u7B26\u4E32\u6587\u5B57\u4E2D\u88AB\u89C6\u4E3A\u884C\u7EC8\u6B62\u7B26\uFF0C\u56E0\u6B64\u4F7F\u7528\u5B83\u4EEC\u4F1A\u5BFC\u81F4<code>SyntaxError</code>\u5F02\u5E38\u3002</p><h2 id="_2-\u66F4\u52A0\u53CB\u597D\u7684-json-stringify" tabindex="-1"><a class="header-anchor" href="#_2-\u66F4\u52A0\u53CB\u597D\u7684-json-stringify" aria-hidden="true">#</a> 2.\u66F4\u52A0\u53CB\u597D\u7684 JSON.stringify</h2>',5),k=n("\u5982\u679C\u8F93\u5165 Unicode \u683C\u5F0F\u4F46\u662F\u8D85\u51FA\u8303\u56F4\u7684\u5B57\u7B26\uFF0C\u5728\u539F\u5148JSON.stringify\u8FD4\u56DE\u683C\u5F0F\u9519\u8BEF\u7684Unicode\u5B57\u7B26\u4E32\u3002\u73B0\u5728\u5B9E\u73B0\u4E86\u4E00\u4E2A\u6539\u53D8JSON.stringify\u7684"),d={href:"https://github.com/tc39/proposal-well-formed-stringify",target:"_blank",rel:"noopener noreferrer"},m=n("\u7B2C3\u9636\u6BB5"),b=n("\u63D0\u6848\uFF0C\u56E0\u6B64\u5B83\u4E3A\u5176\u8F93\u51FA\u8F6C\u4E49\u5E8F\u5217\uFF0C\u4F7F\u5176\u6210\u4E3A\u6709\u6548Unicode\uFF08\u5E76\u4EE5UTF-8\u8868\u793A\uFF09"),g=a(`<h2 id="_3-\u65B0\u589E\u4E86array\u7684flat-\u65B9\u6CD5\u548Cflatmap-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u65B0\u589E\u4E86array\u7684flat-\u65B9\u6CD5\u548Cflatmap-\u65B9\u6CD5" aria-hidden="true">#</a> 3.\u65B0\u589E\u4E86Array\u7684flat()\u65B9\u6CD5\u548CflatMap()\u65B9\u6CD5</h2><p><code>flat()</code>\u548C<code>flatMap()</code>\u672C\u8D28\u4E0A\u5C31\u662F\u662F\u5F52\u7EB3\uFF08reduce\uFF09 \u4E0E \u5408\u5E76\uFF08concat\uFF09\u7684\u64CD\u4F5C\u3002</p><h3 id="array-prototype-flat" tabindex="-1"><a class="header-anchor" href="#array-prototype-flat" aria-hidden="true">#</a> Array.prototype.flat()</h3><p><code>flat()</code> \u65B9\u6CD5\u4F1A\u6309\u7167\u4E00\u4E2A\u53EF\u6307\u5B9A\u7684\u6DF1\u5EA6\u9012\u5F52\u904D\u5386\u6570\u7EC4\uFF0C\u5E76\u5C06\u6240\u6709\u5143\u7D20\u4E0E\u904D\u5386\u5230\u7684\u5B50\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u5408\u5E76\u4E3A\u4E00\u4E2A\u65B0\u6570\u7EC4\u8FD4\u56DE\u3002</p><ul><li><code>flat()</code>\u65B9\u6CD5\u6700\u57FA\u672C\u7684\u4F5C\u7528\u5C31\u662F\u6570\u7EC4\u964D\u7EF4</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr1<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// [1, 2, 3, 4]</span>

<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr2<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [1, 2, 3, 4, [5, 6]]</span>

<span class="token keyword">var</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr3<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [1, 2, 3, 4, 5, 6]</span>

<span class="token comment">//\u4F7F\u7528 Infinity \u4F5C\u4E3A\u6DF1\u5EA6\uFF0C\u5C55\u5F00\u4EFB\u610F\u6DF1\u5EA6\u7684\u5D4C\u5957\u6570\u7EC4</span>
arr3<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// [1, 2, 3, 4, 5, 6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>\u5176\u6B21\uFF0C\u8FD8\u53EF\u4EE5\u5229\u7528<code>flat()</code>\u65B9\u6CD5\u7684\u7279\u6027\u6765\u53BB\u9664\u6570\u7EC4\u7684\u7A7A\u9879</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr4<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [1, 2, 4, 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="array-prototype-flatmap" tabindex="-1"><a class="header-anchor" href="#array-prototype-flatmap" aria-hidden="true">#</a> Array.prototype.flatMap()</h3><p><code>flatMap()</code> \u65B9\u6CD5\u9996\u5148\u4F7F\u7528\u6620\u5C04\u51FD\u6570\u6620\u5C04\u6BCF\u4E2A\u5143\u7D20\uFF0C\u7136\u540E\u5C06\u7ED3\u679C\u538B\u7F29\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\u3002\u5B83\u4E0E <code>map</code> \u548C <code>\u6DF1\u5EA6\u503C1\u7684 flat \u51E0\u4E4E\u76F8\u540C</code>\uFF0C\u4F46 <code>flatMap</code> \u901A\u5E38\u5728\u5408\u5E76\u6210\u4E00\u79CD\u65B9\u6CD5\u7684\u6548\u7387\u7A0D\u5FAE\u9AD8\u4E00\u4E9B\u3002 \u8FD9\u91CC\u62FF<code>map</code>\u65B9\u6CD5\u4E0E<code>flatMap</code>\u65B9\u6CD5\u505A\u4E00\u4E2A\u6BD4\u8F83\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr1<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// [[2], [4], [6], [8]]</span>

arr1<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [2, 4, 6, 8]</span>

<span class="token comment">// \u53EA\u4F1A\u5C06 flatMap \u4E2D\u7684\u51FD\u6570\u8FD4\u56DE\u7684\u6570\u7EC4 \u201C\u538B\u5E73\u201D \u4E00\u5C42</span>
arr1<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [[2], [4], [6], [8]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_4-\u65B0\u589E\u4E86string\u7684trimstart-\u65B9\u6CD5\u548Ctrimend-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-\u65B0\u589E\u4E86string\u7684trimstart-\u65B9\u6CD5\u548Ctrimend-\u65B9\u6CD5" aria-hidden="true">#</a> 4.\u65B0\u589E\u4E86String\u7684trimStart()\u65B9\u6CD5\u548CtrimEnd()\u65B9\u6CD5</h2><p>\u65B0\u589E\u7684\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5F88\u597D\u7406\u89E3\uFF0C\u5206\u522B\u53BB\u9664\u5B57\u7B26\u4E32\u9996\u5C3E\u7A7A\u767D\u5B57\u7B26\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u7528\u4F8B\u5B50\u8BF4\u58F0\u660E\u4E86\u3002</p><h2 id="_5-object-fromentries" tabindex="-1"><a class="header-anchor" href="#_5-object-fromentries" aria-hidden="true">#</a> 5.Object.fromEntries()</h2><p><code>Object.entries()</code>\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u8FD4\u56DE\u4E00\u4E2A\u7ED9\u5B9A\u5BF9\u8C61\u81EA\u8EAB\u53EF\u679A\u4E3E\u5C5E\u6027\u7684\u952E\u503C\u5BF9\u6570\u7EC4\uFF0C\u5176\u6392\u5217\u4E0E\u4F7F\u7528 <code>for...in</code> \u5FAA\u73AF\u904D\u5386\u8BE5\u5BF9\u8C61\u65F6\u8FD4\u56DE\u7684\u987A\u5E8F\u4E00\u81F4\uFF08\u533A\u522B\u5728\u4E8E <code>for-in</code> \u5FAA\u73AF\u4E5F\u679A\u4E3E\u539F\u578B\u94FE\u4E2D\u7684\u5C5E\u6027\uFF09\u3002</p><p><strong>\u800C<code>Object.fromEntries()</code> \u5219\u662F <code>Object.entries()</code> \u7684\u53CD\u8F6C</strong>\u3002</p><p><code>Object.fromEntries()</code> \u51FD\u6570\u4F20\u5165\u4E00\u4E2A\u952E\u503C\u5BF9\u7684\u5217\u8868\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u5E26\u6709\u8FD9\u4E9B\u952E\u503C\u5BF9\u7684\u65B0\u5BF9\u8C61\u3002\u8FD9\u4E2A\u8FED\u4EE3\u53C2\u6570\u5E94\u8BE5\u662F\u4E00\u4E2A\u80FD\u591F\u5B9E\u73B0<code>@iterator</code>\u65B9\u6CD5\u7684\u7684\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u8FED\u4EE3\u5668\u5BF9\u8C61\u3002\u5B83\u751F\u6210\u4E00\u4E2A\u5177\u6709\u4E24\u4E2A\u5143\u7D20\u7684\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u662F\u5C06\u7528\u4F5C\u5C5E\u6027\u952E\u7684\u503C\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u662F\u4E0E\u8BE5\u5C5E\u6027\u952E\u5173\u8054\u7684\u503C\u3002</p><ul><li>\u901A\u8FC7 <code>Object.fromEntries</code>\uFF0C \u53EF\u4EE5\u5C06 <code>Map</code> \u8F6C\u5316\u4E3A <code>Object</code>:</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;baz&#39;</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">]</span> <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { foo: &quot;bar&quot;, baz: 42 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u901A\u8FC7 <code>Object.fromEntries</code>\uFF0C \u53EF\u4EE5\u5C06 <code>Array</code> \u8F6C\u5316\u4E3A <code>Object</code>:</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token punctuation">[</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { 0: &quot;a&quot;, 1: &quot;b&quot;, 2: &quot;c&quot; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_6-symbol-prototype-description" tabindex="-1"><a class="header-anchor" href="#_6-symbol-prototype-description" aria-hidden="true">#</a> 6.Symbol.prototype.description</h2><p>\u901A\u8FC7\u5DE5\u5382\u51FD\u6570<code>Symbol\uFF08\uFF09</code>\u521B\u5EFA\u7B26\u53F7\u65F6\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u901A\u8FC7\u53C2\u6570\u63D0\u4F9B\u5B57\u7B26\u4E32\u4F5C\u4E3A\u63CF\u8FF0\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> sym <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;The description&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4EE5\u524D\uFF0C\u8BBF\u95EE\u63CF\u8FF0\u7684\u552F\u4E00\u65B9\u6CD5\u662F\u5C06\u7B26\u53F7\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>assert<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>sym<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;Symbol(The description)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u73B0\u5728\u5F15\u5165\u4E86<code>getter</code> <code>Symbol.prototype.description</code>\u4EE5\u76F4\u63A5\u8BBF\u95EE\u63CF\u8FF0\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>assert<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>sym<span class="token punctuation">.</span>description<span class="token punctuation">,</span> <span class="token string">&#39;The description&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_7-string-prototype-matchall" tabindex="-1"><a class="header-anchor" href="#_7-string-prototype-matchall" aria-hidden="true">#</a> 7.String.prototype.matchAll</h2><p><code>matchAll() </code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u6240\u6709\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F\u53CA\u5206\u7EC4\u6355\u83B7\u7ED3\u679C\u7684\u8FED\u4EE3\u5668\u3002 \u5728 <code>matchAll</code> \u51FA\u73B0\u4E4B\u524D\uFF0C\u901A\u8FC7\u5728\u5FAA\u73AF\u4E2D\u8C03\u7528<code>regexp.exec</code>\u6765\u83B7\u53D6\u6240\u6709\u5339\u914D\u9879\u4FE1\u606F\uFF08<code>regexp</code>\u9700\u4F7F\u7528<code>/g</code>\u6807\u5FD7\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> regexp <span class="token operator">=</span> <span class="token function">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;foo*&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;table football, foosball&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>matches <span class="token operator">=</span> regexp<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Found </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>matches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. Next starts at </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>regexp<span class="token punctuation">.</span>lastIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// expected output: &quot;Found foo. Next starts at 9.&quot;</span>
  <span class="token comment">// expected output: &quot;Found foo. Next starts at 19.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5982\u679C\u4F7F\u7528<code>matchAll</code> \uFF0C\u5C31\u53EF\u4EE5\u4E0D\u5FC5\u4F7F\u7528<code>while</code>\u5FAA\u73AF\u52A0<code>exec</code>\u65B9\u5F0F\uFF08\u4E14\u6B63\u5219\u8868\u8FBE\u5F0F\u9700\u4F7F\u7528<code>\uFF0Fg</code>\u6807\u5FD7\uFF09\u3002\u4F7F\u7528<code>matchAll</code> \u4F1A\u5F97\u5230\u4E00\u4E2A\u8FED\u4EE3\u5668\u7684\u8FD4\u56DE\u503C\uFF0C\u914D\u5408 <code>for...of</code>, <code>array spread</code>, or <code>Array.from()</code> \u53EF\u4EE5\u66F4\u65B9\u4FBF\u5B9E\u73B0\u529F\u80FD\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> regexp <span class="token operator">=</span> <span class="token function">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;foo*&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;table football, foosball&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> matches <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>regexp<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> match <span class="token keyword">of</span> matches<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>match<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Array [ &quot;foo&quot; ]</span>
<span class="token comment">// Array [ &quot;foo&quot; ]</span>

<span class="token comment">// matches iterator is exhausted after the for..of iteration</span>
<span class="token comment">// Call matchAll again to create a new iterator</span>
matches <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>regexp<span class="token punctuation">)</span><span class="token punctuation">;</span>

Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>matches<span class="token punctuation">,</span> <span class="token parameter">m</span> <span class="token operator">=&gt;</span> m<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Array [ &quot;foo&quot;, &quot;foo&quot; ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="matchall\u53EF\u4EE5\u66F4\u597D\u7684\u7528\u4E8E\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#matchall\u53EF\u4EE5\u66F4\u597D\u7684\u7528\u4E8E\u5206\u7EC4" aria-hidden="true">#</a> matchAll\u53EF\u4EE5\u66F4\u597D\u7684\u7528\u4E8E\u5206\u7EC4</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> regexp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">t(e)(st(\\d?))</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;test1test2&#39;</span><span class="token punctuation">;</span>

str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>regexp<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// Array [&#39;test1&#39;, &#39;test2&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>regexp<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// [&#39;test1&#39;, &#39;e&#39;, &#39;st1&#39;, &#39;1&#39;, index: 0, input: &#39;test1test2&#39;, length: 4]</span>
array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// [&#39;test2&#39;, &#39;e&#39;, &#39;st2&#39;, &#39;2&#39;, index: 5, input: &#39;test1test2&#39;, length: 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_8-function-prototype-tostring-\u73B0\u5728\u8FD4\u56DE\u7CBE\u786E\u5B57\u7B26-\u5305\u62EC\u7A7A\u683C\u548C\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_8-function-prototype-tostring-\u73B0\u5728\u8FD4\u56DE\u7CBE\u786E\u5B57\u7B26-\u5305\u62EC\u7A7A\u683C\u548C\u6CE8\u91CA" aria-hidden="true">#</a> 8.Function.prototype.toString()\u73B0\u5728\u8FD4\u56DE\u7CBE\u786E\u5B57\u7B26\uFF0C\u5305\u62EC\u7A7A\u683C\u548C\u6CE8\u91CA</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token comment">/* comment */</span> foo <span class="token comment">/* another comment */</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u4E4B\u524D\u4E0D\u4F1A\u6253\u5370\u6CE8\u91CA\u90E8\u5206</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// function foo(){}</span>

<span class="token comment">// ES2019 \u4F1A\u628A\u6CE8\u91CA\u4E00\u540C\u6253\u5370</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// function /* comment */ foo /* another comment */ (){}</span>

<span class="token comment">// \u7BAD\u5934\u51FD\u6570</span>
<span class="token keyword">const</span> bar <span class="token comment">/* comment */</span> <span class="token operator">=</span> <span class="token comment">/* another comment */</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// () =&gt; {}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_9-\u4FEE\u6539-catch-\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#_9-\u4FEE\u6539-catch-\u7ED1\u5B9A" aria-hidden="true">#</a> 9.\u4FEE\u6539 catch \u7ED1\u5B9A</h2><p>\u5728 <code>ES10</code> \u4E4B\u524D\uFF0C\u5FC5\u987B\u901A\u8FC7\u8BED\u6CD5\u4E3A <code>catch</code> \u5B50\u53E5\u7ED1\u5B9A\u5F02\u5E38\u53D8\u91CF\uFF0C\u65E0\u8BBA\u662F\u5426\u6709\u5FC5\u8981\u3002\u5F88\u591A\u65F6\u5019 <code>catch</code> \u5757\u662F\u591A\u4F59\u7684\u3002 <code>ES10</code> \u63D0\u6848\u4F7F\u80FD\u591F\u7B80\u5355\u7684\u628A\u53D8\u91CF\u7701\u7565\u6389\u3002</p><p>\u4E0D\u7B97\u5927\u7684\u6539\u52A8\u3002</p><blockquote><p>\u4E4B\u524D\u662F</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u73B0\u5728\u662F</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_10-\u65B0\u7684\u57FA\u672C\u6570\u636E\u7C7B\u578Bbigint" tabindex="-1"><a class="header-anchor" href="#_10-\u65B0\u7684\u57FA\u672C\u6570\u636E\u7C7B\u578Bbigint" aria-hidden="true">#</a> 10.\u65B0\u7684\u57FA\u672C\u6570\u636E\u7C7B\u578BBigInt</h2><p>\u73B0\u5728\u7684\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF08\u503C\u7C7B\u578B\uFF09\u4E0D\u6B625\u79CD\uFF08ES6\u4E4B\u540E\u662F\u516D\u79CD\uFF09\u4E86\u54E6\uFF01\u52A0\u4E0ABigInt\u4E00\u5171\u6709\u4E03\u79CD\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u5206\u522B\u662F\uFF1A <code>String</code>\u3001<code>Number</code>\u3001<code>Boolean</code>\u3001<code>Null</code>\u3001<code>Undefined</code>\u3001<code>Symbol</code>\u3001<code>BigInt</code></p>`,47);function h(f,v){const p=e("ExternalLinkIcon");return o(),c(u,null,[i,s("p",null,[k,s("a",d,[m,l(p)]),b]),g],64)}var x=t(r,[["render",h],["__file","es10News.html.vue"]]);export{x as default};
