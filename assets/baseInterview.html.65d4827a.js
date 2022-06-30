import{_ as p,o as e,c as o,b as a,F as t,a as n}from"./app.dce02100.js";const l={},i=n(`<h2 id="_1-\u8DE8\u6807\u7B7E\u9875\u901A\u8BAF" tabindex="-1"><a class="header-anchor" href="#_1-\u8DE8\u6807\u7B7E\u9875\u901A\u8BAF" aria-hidden="true">#</a> <strong>1. \u8DE8\u6807\u7B7E\u9875\u901A\u8BAF</strong></h2><p>\u4E0D\u540C\u6807\u7B7E\u9875\u95F4\u7684\u901A\u8BAF\uFF0C\u672C\u8D28\u539F\u7406\u5C31\u662F\u53BB\u8FD0\u7528\u4E00\u4E9B\u53EF\u4EE5 <strong>\u5171\u4EAB\u7684\u4E2D\u95F4\u4ECB\u8D28</strong>\uFF0C\u56E0\u6B64\u6BD4\u8F83\u5E38\u7528\u7684\u6709\u4EE5\u4E0B\u65B9\u6CD5:</p><ul><li><p>\u901A\u8FC7\u7236\u9875\u9762<code>window.open()</code>\u548C\u5B50\u9875\u9762<code>postMessage</code></p><ul><li>\u5F02\u6B65\u4E0B\uFF0C\u901A\u8FC7 <code>window.open(&#39;about: blank&#39;)</code> \u548C <code>tab.location.href = &#39;*&#39;</code></li></ul></li><li><p>\u8BBE\u7F6E\u540C\u57DF\u4E0B\u5171\u4EAB\u7684<code>localStorage</code>\u4E0E\u76D1\u542C<code>window.onstorage</code></p><ul><li><p>\u91CD\u590D\u5199\u5165\u76F8\u540C\u7684\u503C\u65E0\u6CD5\u89E6\u53D1</p></li><li><p>\u4F1A\u53D7\u5230\u6D4F\u89C8\u5668\u9690\u8EAB\u6A21\u5F0F\u7B49\u7684\u9650\u5236</p></li></ul></li><li><p>\u76D1\u542ClocalStorage\u53D8\u5316</p></li></ul><p><strong>\u5F53\u540C\u6E90\u9875\u9762\u7684\u67D0\u4E2A\u9875\u9762\u4FEE\u6539\u4E86<code>localStorage</code>\uFF0C\u5176\u4F59\u7684\u540C\u6E90\u9875\u9762\u53EA\u8981\u6CE8\u518C\u4E86storage\u4E8B\u4EF6\uFF0C\u5C31\u4F1A\u89E6\u53D1</strong></p><p>\u6240\u4EE5\uFF0C<code>localStorage</code> \u7684\u4F8B\u5B50\u8FD0\u884C\u9700\u8981\u5982\u4E0B\u6761\u4EF6\uFF1A</p><ul><li><p>\u540C\u4E00\u6D4F\u89C8\u5668\u6253\u5F00\u4E86\u4E24\u4E2A\u540C\u6E90\u9875\u9762</p></li><li><p>\u5176\u4E2D\u4E00\u4E2A\u7F51\u9875\u4FEE\u6539\u4E86 <code>localStorage</code></p></li><li><p>\u53E6\u4E00\u7F51\u9875\u6CE8\u518C\u4E86 <code>storage</code> \u4E8B\u4EF6</p></li></ul><blockquote><p><strong>\u5F88\u5BB9\u6613\u72AF\u7684\u9519\u8BEF\u662F\uFF0C\u5728\u540C\u4E00\u4E2A\u7F51\u9875\u4FEE\u6539\u672C\u5730\u5B58\u50A8\uFF0C\u53C8\u5728\u540C\u4E00\u4E2A\u7F51\u9875\u76D1\u542C\uFF0C\u8FD9\u6837\u662F\u6CA1\u6709\u6548\u679C\u7684\u3002</strong></p></blockquote><ol><li>\u5728\u540C\u6E90\u7684\u4E24\u4E2A\u9875\u9762\u4E2D\uFF0C\u53EF\u4EE5\u76D1\u542C <code>storage</code> \u4E8B\u4EF6</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;storage&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,9),c=["src"],r=n(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> orignalSetItem <span class="token operator">=</span> localStorage<span class="token punctuation">.</span>setItem<span class="token punctuation">;</span>
localStorage<span class="token punctuation">.</span><span class="token function-variable function">setItem</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span>newValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">var</span> setItemEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&quot;setItemEvent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      setItemEvent<span class="token punctuation">.</span>newValue <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
      window<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>setItemEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">orignalSetItem</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;setItemEvent&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,1),u=["src"],d=n(`<ol><li>\u5728\u540C\u4E00\u4E2A\u9875\u9762\u4E2D\uFF0C\u5BF9 <code>localStorage</code> \u7684 <code>setItem</code> \u65B9\u6CD5\u8FDB\u884C\u91CD\u5199</li></ol><ul><li><p>\u8BBE\u7F6E\u5171\u4EAB<code>cookie</code>\u4E0E\u4E0D\u65AD\u8F6E\u8BE2\u810F\u68C0\u67E5(<code>setInterval</code>)</p></li><li><p>\u501F\u52A9\u670D\u52A1\u7AEF\u6216\u8005\u4E2D\u95F4\u5C42\u5B9E\u73B0</p></li></ul><h2 id="_2-\u6D4F\u89C8\u5668\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#_2-\u6D4F\u89C8\u5668\u67B6\u6784" aria-hidden="true">#</a> <strong>2. \u6D4F\u89C8\u5668\u67B6\u6784</strong></h2><ul><li><p>\u7528\u6237\u754C\u9762</p></li><li><p>\u4E3B\u8FDB\u7A0B</p></li><li><p>\u5185\u6838</p><ul><li><p>\u6E32\u67D3\u5F15\u64CE</p></li><li><p>JS \u5F15\u64CE</p><ul><li>\u6267\u884C\u6808</li></ul></li><li><p>\u4E8B\u4EF6\u89E6\u53D1\u7EBF\u7A0B</p><ul><li><p>\u6D88\u606F\u961F\u5217</p><ul><li><p>\u5FAE\u4EFB\u52A1</p></li><li><p>\u5B8F\u4EFB\u52A1</p></li></ul></li></ul></li><li><p>\u7F51\u7EDC\u5F02\u6B65\u7EBF\u7A0B</p></li><li><p>\u5B9A\u65F6\u5668\u7EBF\u7A0B</p></li></ul></li></ul><h2 id="_3-\u6D4F\u89C8\u5668\u4E0B\u4E8B\u4EF6\u5FAA\u73AF-event-loop" tabindex="-1"><a class="header-anchor" href="#_3-\u6D4F\u89C8\u5668\u4E0B\u4E8B\u4EF6\u5FAA\u73AF-event-loop" aria-hidden="true">#</a> <strong>3. \u6D4F\u89C8\u5668\u4E0B\u4E8B\u4EF6\u5FAA\u73AF(Event Loop)</strong></h2><p>\u4E8B\u4EF6\u5FAA\u73AF\u662F\u6307: \u6267\u884C\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u7136\u540E\u6267\u884C\u6E05\u7A7A\u5FAE\u4EFB\u52A1\u5217\u8868\uFF0C\u5FAA\u73AF\u518D\u6267\u884C\u5B8F\u4EFB\u52A1\uFF0C\u518D\u6E05\u5FAE\u4EFB\u52A1\u5217\u8868</p><ul><li><p>\u5FAE\u4EFB\u52A1 <code>microtask(jobs)</code>: <code>promise</code> / <code>ajax</code> / <code>Object.observe(\u8BE5\u65B9\u6CD5\u5DF2\u5E9F\u5F03)</code></p></li><li><p>\u5B8F\u4EFB\u52A1 <code>macrotask(task)</code>: <code>setTimout</code> / <code>script</code> / <code>IO</code> / <code>UI Rendering</code></p></li></ul><h2 id="_4-\u4ECE\u8F93\u5165-url-\u5230\u5C55\u793A\u7684\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-\u4ECE\u8F93\u5165-url-\u5230\u5C55\u793A\u7684\u8FC7\u7A0B" aria-hidden="true">#</a> <strong>4. \u4ECE\u8F93\u5165 url \u5230\u5C55\u793A\u7684\u8FC7\u7A0B</strong></h2><ul><li><p>DNS \u89E3\u6790</p></li><li><p>TCP \u4E09\u6B21\u63E1\u624B</p></li><li><p>\u53D1\u9001\u8BF7\u6C42\uFF0C\u5206\u6790 url\uFF0C\u8BBE\u7F6E\u8BF7\u6C42\u62A5\u6587(\u5934\uFF0C\u4E3B\u4F53)</p></li><li><p>\u670D\u52A1\u5668\u8FD4\u56DE\u8BF7\u6C42\u7684\u6587\u4EF6 (html)</p></li><li><p>\u6D4F\u89C8\u5668\u6E32\u67D3</p><ul><li><p>HTML parser --&gt; DOM Tree</p><ul><li><p>\u6807\u8BB0\u5316\u7B97\u6CD5\uFF0C\u8FDB\u884C\u5143\u7D20\u72B6\u6001\u7684\u6807\u8BB0</p></li><li><p>dom \u6811\u6784\u5EFA</p></li></ul></li><li><p>CSS parser --&gt; Style Tree</p><ul><li>\u89E3\u6790 css \u4EE3\u7801\uFF0C\u751F\u6210\u6837\u5F0F\u6811</li></ul></li><li><p>attachment --&gt; Render Tree</p><ul><li>\u7ED3\u5408 dom\u6811 \u4E0E style\u6811\uFF0C\u751F\u6210\u6E32\u67D3\u6811</li></ul></li><li><p>layout: \u5E03\u5C40</p></li><li><p>GPU painting: \u50CF\u7D20\u7ED8\u5236\u9875\u9762</p></li></ul></li></ul><h2 id="_5-\u91CD\u7ED8\u4E0E\u56DE\u6D41" tabindex="-1"><a class="header-anchor" href="#_5-\u91CD\u7ED8\u4E0E\u56DE\u6D41" aria-hidden="true">#</a> <strong>5. \u91CD\u7ED8\u4E0E\u56DE\u6D41</strong></h2><p>\u5F53\u5143\u7D20\u7684\u6837\u5F0F\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u6D4F\u89C8\u5668\u9700\u8981\u89E6\u53D1\u66F4\u65B0\uFF0C\u91CD\u65B0\u7ED8\u5236\u5143\u7D20\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u6709\u4E24\u79CD\u7C7B\u578B\u7684\u64CD\u4F5C\uFF0C\u5373\u91CD\u7ED8\u4E0E\u56DE\u6D41\u3002</p><ul><li><p><strong>\u91CD\u7ED8(repaint)</strong>: \u5F53\u5143\u7D20\u6837\u5F0F\u7684\u6539\u53D8\u4E0D\u5F71\u54CD\u5E03\u5C40\u65F6\uFF0C\u6D4F\u89C8\u5668\u5C06\u4F7F\u7528\u91CD\u7ED8\u5BF9\u5143\u7D20\u8FDB\u884C\u66F4\u65B0\uFF0C\u6B64\u65F6\u7531\u4E8E\u53EA\u9700\u8981UI\u5C42\u9762\u7684\u91CD\u65B0\u50CF\u7D20\u7ED8\u5236\uFF0C\u56E0\u6B64 <strong>\u635F\u8017\u8F83\u5C11</strong></p></li><li><p><strong>\u56DE\u6D41(reflow)</strong>: \u5F53\u5143\u7D20\u7684\u5C3A\u5BF8\u3001\u7ED3\u6784\u6216\u89E6\u53D1\u67D0\u4E9B\u5C5E\u6027\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u91CD\u65B0\u6E32\u67D3\u9875\u9762\uFF0C\u79F0\u4E3A\u56DE\u6D41\u3002\u6B64\u65F6\uFF0C\u6D4F\u89C8\u5668\u9700\u8981\u91CD\u65B0\u7ECF\u8FC7\u8BA1\u7B97\uFF0C\u8BA1\u7B97\u540E\u8FD8\u9700\u8981\u91CD\u65B0\u9875\u9762\u5E03\u5C40\uFF0C\u56E0\u6B64\u662F\u8F83\u91CD\u7684\u64CD\u4F5C\u3002\u4F1A\u89E6\u53D1\u56DE\u6D41\u7684\u64CD\u4F5C:</p><ul><li><p>\u9875\u9762\u521D\u6B21\u6E32\u67D3</p></li><li><p>\u6D4F\u89C8\u5668\u7A97\u53E3\u5927\u5C0F\u6539\u53D8</p></li><li><p>\u5143\u7D20\u5C3A\u5BF8\u3001\u4F4D\u7F6E\u3001\u5185\u5BB9\u53D1\u751F\u6539\u53D8</p></li><li><p>\u5143\u7D20\u5B57\u4F53\u5927\u5C0F\u53D8\u5316</p></li><li><p>\u6DFB\u52A0\u6216\u8005\u5220\u9664\u53EF\u89C1\u7684 dom \u5143\u7D20</p></li><li><p>\u6FC0\u6D3B CSS \u4F2A\u7C7B\uFF08\u4F8B\u5982\uFF1A:hover\uFF09</p></li><li><p>\u67E5\u8BE2\u67D0\u4E9B\u5C5E\u6027\u6216\u8C03\u7528\u67D0\u4E9B\u65B9\u6CD5</p><ul><li><p>clientWidth\u3001clientHeight\u3001clientTop\u3001clientLeft</p></li><li><p>offsetWidth\u3001offsetHeight\u3001offsetTop\u3001offsetLeft</p></li><li><p>scrollWidth\u3001scrollHeight\u3001scrollTop\u3001scrollLeft</p></li><li><p>getComputedStyle()</p></li><li><p>getBoundingClientRect()</p></li><li><p>scrollTo()</p></li></ul></li></ul></li></ul><p><strong>\u56DE\u6D41\u5FC5\u5B9A\u89E6\u53D1\u91CD\u7ED8\uFF0C\u91CD\u7ED8\u4E0D\u4E00\u5B9A\u89E6\u53D1\u56DE\u6D41\u3002\u91CD\u7ED8\u7684\u5F00\u9500\u8F83\u5C0F\uFF0C\u56DE\u6D41\u7684\u4EE3\u4EF7\u8F83\u9AD8\u3002</strong></p><p><strong>\u6837\u5F0F\u603B\u7ED3\uFF1A</strong></p><ul><li><p>CSS</p><ul><li><p>\u907F\u514D\u4F7F\u7528<code>table</code>\u5E03\u5C40</p></li><li><p>\u5C06\u52A8\u753B\u6548\u679C\u5E94\u7528\u5230<code>position</code>\u5C5E\u6027\u4E3A<code>absolute</code>\u6216<code>fixed</code>\u7684\u5143\u7D20\u4E0A</p></li></ul></li><li><p>javascript</p><ul><li><p>\u907F\u514D\u9891\u7E41\u64CD\u4F5C\u6837\u5F0F\uFF0C\u53EF\u6C47\u603B\u540E\u7EDF\u4E00 <strong>\u4E00\u6B21\u4FEE\u6539</strong></p></li><li><p>\u5C3D\u91CF\u4F7F\u7528<code>class</code>\u8FDB\u884C\u6837\u5F0F\u4FEE\u6539</p></li><li><p>\u51CF\u5C11<code>dom</code>\u7684\u589E\u5220\u6B21\u6570\uFF0C\u53EF\u4F7F\u7528 <strong>\u5B57\u7B26\u4E32</strong> \u6216\u8005 <code>documentFragment</code> \u4E00\u6B21\u6027\u63D2\u5165</p></li><li><p>\u6781\u9650\u4F18\u5316\u65F6\uFF0C\u4FEE\u6539\u6837\u5F0F\u53EF\u5C06\u5176<code>display: none</code>\u540E\u4FEE\u6539</p></li><li><p>\u907F\u514D\u591A\u6B21\u89E6\u53D1\u4E0A\u9762\u63D0\u5230\u7684\u90A3\u4E9B\u4F1A\u89E6\u53D1\u56DE\u6D41\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7684\u8BDD\u5C3D\u91CF\u7528 <strong>\u53D8\u91CF\u5B58\u4F4F</strong></p></li></ul></li></ul><h2 id="_6-\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#_6-\u5B58\u50A8" aria-hidden="true">#</a> <strong>6. \u5B58\u50A8</strong></h2><p>\u7ECF\u5E38\u9700\u8981\u5BF9\u4E1A\u52A1\u4E2D\u7684\u4E00\u4E9B\u6570\u636E\u8FDB\u884C\u5B58\u50A8\uFF0C\u901A\u5E38\u53EF\u4EE5\u5206\u4E3A \u77ED\u6682\u6027\u5B58\u50A8 \u548C \u6301\u4E45\u6027\u50A8\u5B58\u3002</p><ul><li><p>\u77ED\u6682\u6027\u7684\u65F6\u5019\uFF0C\u53EA\u9700\u8981\u5C06\u6570\u636E\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u53EA\u5728\u8FD0\u884C\u65F6\u53EF\u7528</p></li><li><p>\u6301\u4E45\u6027\u5B58\u50A8\uFF0C\u53EF\u4EE5\u5206\u4E3A \u6D4F\u89C8\u5668\u7AEF \u4E0E \u670D\u52A1\u5668\u7AEF</p><ul><li><p>\u6D4F\u89C8\u5668:</p><ul><li><p><code>cookie</code>: \u901A\u5E38\u7528\u4E8E\u5B58\u50A8\u7528\u6237\u8EAB\u4EFD\uFF0C\u767B\u5F55\u72B6\u6001\u7B49</p><ul><li><strong>http</strong> \u4E2D\u81EA\u52A8\u643A\u5E26\uFF0C \u4F53\u79EF\u4E0A\u9650\u4E3A 4K\uFF0C \u53EF\u81EA\u884C\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4</li></ul></li><li><p><code>localStorage / sessionStorage</code>: \u957F\u4E45\u50A8\u5B58/\u7A97\u53E3\u5173\u95ED\u5220\u9664\uFF0C \u4F53\u79EF\u9650\u5236\u4E3A <strong>4~5M</strong></p></li><li><p><code>indexDB</code></p></li></ul></li><li><p>\u670D\u52A1\u5668:</p><ul><li><p>\u5206\u5E03\u5F0F\u7F13\u5B58 redis</p></li><li><p>\u6570\u636E\u5E93</p></li></ul></li></ul></li></ul><h2 id="_7-web-worker" tabindex="-1"><a class="header-anchor" href="#_7-web-worker" aria-hidden="true">#</a> <strong>7. Web Worker</strong></h2><p>\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E3A<code>JavaScript</code>\u521B\u9020\u7684 <strong>\u591A\u7EBF\u7A0B\u73AF\u5883</strong>\u3002\u53EF\u4EE5\u65B0\u5EFA\u5E76\u5C06\u90E8\u5206\u4EFB\u52A1\u5206\u914D\u5230<code>worker</code>\u7EBF\u7A0B\u5E76\u884C\u8FD0\u884C\uFF0C\u4E24\u4E2A\u7EBF\u7A0B\u53EF <strong>\u72EC\u7ACB\u8FD0\u884C</strong>\uFF0C<strong>\u4E92\u4E0D\u5E72\u6270</strong>\uFF0C\u53EF\u901A\u8FC7\u81EA\u5E26\u7684 <strong>\u6D88\u606F\u673A\u5236</strong> \u76F8\u4E92\u901A\u4FE1\u3002</p><p><strong>\u57FA\u672C\u7528\u6CD5:</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u521B\u5EFA worker</span>
<span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">&#39;work.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5411 worker \u7EBF\u7A0B\u63A8\u9001\u6D88\u606F</span>
worker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u76D1\u542C worker \u7EBF\u7A0B\u53D1\u9001\u8FC7\u6765\u7684\u6D88\u606F</span>
worker<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Received message &#39;</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>\u9650\u5236:</strong></p><ul><li><p>\u540C\u6E90\u9650\u5236</p></li><li><p>\u65E0\u6CD5\u4F7F\u7528 <code>document</code> / <code>window</code> / <code>alert</code> / <code>confirm</code></p></li><li><p>\u65E0\u6CD5\u52A0\u8F7D\u672C\u5730\u8D44\u6E90</p></li></ul><h2 id="_8-v8\u5783\u573E\u56DE\u6536\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_8-v8\u5783\u573E\u56DE\u6536\u673A\u5236" aria-hidden="true">#</a> <strong>8. V8\u5783\u573E\u56DE\u6536\u673A\u5236</strong></h2><p>\u5783\u573E\u56DE\u6536: \u5C06\u5185\u5B58\u4E2D\u4E0D\u518D\u4F7F\u7528\u7684\u6570\u636E\u8FDB\u884C\u6E05\u7406\uFF0C\u91CA\u653E\u51FA\u5185\u5B58\u7A7A\u95F4\u3002V8 \u5C06\u5185\u5B58\u5206\u6210 <strong>\u65B0\u751F\u4EE3\u7A7A\u95F4</strong> \u548C <strong>\u8001\u751F\u4EE3\u7A7A\u95F4</strong>\u3002</p><ul><li><p><strong>\u65B0\u751F\u4EE3\u7A7A\u95F4</strong>: \u7528\u4E8E\u5B58\u6D3B\u8F83\u77ED\u7684\u5BF9\u8C61</p><ul><li><p>\u53C8\u5206\u6210\u4E24\u4E2A\u7A7A\u95F4: from \u7A7A\u95F4 \u4E0E to \u7A7A\u95F4</p></li><li><p>Scavenge GC\u7B97\u6CD5: \u5F53 from \u7A7A\u95F4\u88AB\u5360\u6EE1\u65F6\uFF0C\u542F\u52A8 GC \u7B97\u6CD5</p><ul><li><p>\u5B58\u6D3B\u7684\u5BF9\u8C61\u4ECE from space \u8F6C\u79FB\u5230 to space</p></li><li><p>\u6E05\u7A7A from space</p></li><li><p>from space \u4E0E to space \u4E92\u6362</p></li><li><p>\u5B8C\u6210\u4E00\u6B21\u65B0\u751F\u4EE3GC</p></li></ul></li></ul></li><li><p><strong>\u8001\u751F\u4EE3\u7A7A\u95F4</strong>: \u7528\u4E8E\u5B58\u6D3B\u65F6\u95F4\u8F83\u957F\u7684\u5BF9\u8C61</p><ul><li><p>\u4ECE \u65B0\u751F\u4EE3\u7A7A\u95F4 \u8F6C\u79FB\u5230 \u8001\u751F\u4EE3\u7A7A\u95F4 \u7684\u6761\u4EF6</p><ul><li><p>\u7ECF\u5386\u8FC7\u4E00\u6B21\u4EE5\u4E0A Scavenge GC \u7684\u5BF9\u8C61</p></li><li><p>\u5F53 to space \u4F53\u79EF\u8D85\u8FC725%</p></li></ul></li><li><p><strong>\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5</strong>: \u6807\u8BB0\u5B58\u6D3B\u7684\u5BF9\u8C61\uFF0C\u672A\u88AB\u6807\u8BB0\u7684\u5219\u88AB\u91CA\u653E</p><ul><li><p>\u589E\u91CF\u6807\u8BB0: \u5C0F\u6A21\u5757\u6807\u8BB0\uFF0C\u5728\u4EE3\u7801\u6267\u884C\u95F4\u9699\u6267\uFF0CGC \u4F1A\u5F71\u54CD\u6027\u80FD</p></li><li><p>\u5E76\u53D1\u6807\u8BB0(\u6700\u65B0\u6280\u672F): \u4E0D\u963B\u585E js \u6267\u884C</p></li></ul></li><li><p><strong>\u538B\u7F29\u7B97\u6CD5</strong>: \u5C06\u5185\u5B58\u4E2D\u6E05\u9664\u540E\u5BFC\u81F4\u7684\u788E\u7247\u5316\u5BF9\u8C61\u5F80\u5185\u5B58\u5806\u7684\u4E00\u7AEF\u79FB\u52A8\uFF0C\u89E3\u51B3 <strong>\u5185\u5B58\u7684\u788E\u7247\u5316</strong></p></li></ul></li></ul><p><strong>9. \u5185\u5B58\u6CC4\u9732</strong></p><ul><li><p>\u610F\u5916\u7684<strong>\u5168\u5C40\u53D8\u91CF</strong>: \u65E0\u6CD5\u88AB\u56DE\u6536</p></li><li><p><strong>\u5B9A\u65F6\u5668</strong>: \u672A\u88AB\u6B63\u786E\u5173\u95ED\uFF0C\u5BFC\u81F4\u6240\u5F15\u7528\u7684\u5916\u90E8\u53D8\u91CF\u65E0\u6CD5\u88AB\u91CA\u653E</p></li><li><p><strong>\u4E8B\u4EF6\u76D1\u542C</strong>: \u6CA1\u6709\u6B63\u786E\u9500\u6BC1 (\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u53EF\u80FD\u51FA\u73B0)</p></li><li><p><strong>\u95ED\u5305</strong>: \u4F1A\u5BFC\u81F4\u7236\u7EA7\u4E2D\u7684\u53D8\u91CF\u65E0\u6CD5\u88AB\u91CA\u653E</p></li><li><p><strong>dom \u5F15\u7528</strong>: dom \u5143\u7D20\u88AB\u5220\u9664\u65F6\uFF0C\u5185\u5B58\u4E2D\u7684\u5F15\u7528\u672A\u88AB\u6B63\u786E\u6E05\u7A7A</p></li></ul><p>\u53EF\u7528 chrome \u4E2D\u7684 timeline \u8FDB\u884C\u5185\u5B58\u6807\u8BB0\uFF0C\u53EF\u89C6\u5316\u67E5\u770B\u5185\u5B58\u7684\u53D8\u5316\u60C5\u51B5\uFF0C\u627E\u51FA\u5F02\u5E38\u70B9\u3002</p>`,30);function k(s,g){return e(),o(t,null,[i,a("img",{src:s.$withBase("/assets/browser/1616484269(1).jpg"),alt:"demo"},null,8,c),r,a("img",{src:s.$withBase("/assets/browser/1616484377(1).jpg"),alt:"demo"},null,8,u),d],64)}var b=p(l,[["render",k],["__file","baseInterview.html.vue"]]);export{b as default};
