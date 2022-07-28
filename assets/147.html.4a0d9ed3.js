import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.83201bd9.js";const o={},t=e(`<h1 id="\u7B2C156\u9898-tree-shaking" tabindex="-1"><a class="header-anchor" href="#\u7B2C156\u9898-tree-shaking" aria-hidden="true">#</a> \u7B2C156\u9898\uFF1Atree shaking</h1><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><blockquote><p><code>Tree shaking</code> \u662F\u4E00\u79CD\u901A\u8FC7\u6E05\u9664\u591A\u4F59\u4EE3\u7801\u65B9\u5F0F\u6765\u4F18\u5316\u9879\u76EE\u6253\u5305\u4F53\u79EF\u7684\u6280\u672F\uFF0C\u4E13\u4E1A\u672F\u8BED\u53EB <code>Dead code elimination</code>\u3002</p></blockquote><h3 id="work" tabindex="-1"><a class="header-anchor" href="#work" aria-hidden="true">#</a> work</h3><p>\u867D\u7136 tree shaking \u7684\u6982\u5FF5\u5728 1990 \u5C31\u63D0\u51FA\u4E86\uFF0C\u4F46\u76F4\u5230 ES6 \u7684 <code>ES6-style</code> \u6A21\u5757\u51FA\u73B0\u540E\u624D\u771F\u6B63\u88AB\u5229\u7528\u8D77\u6765\u3002</p><p>\u5728ES6\u4EE5\u524D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528CommonJS\u5F15\u5165\u6A21\u5757\uFF1A<code>require()</code>\uFF0C\u8FD9\u79CD\u5F15\u5165\u662F\u52A8\u6001\u7684\uFF0C\u4E5F\u610F\u5473\u7740\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8E\u6761\u4EF6\u6765\u5BFC\u5165\u9700\u8981\u7684\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> dynamicModule<span class="token punctuation">;</span>
<span class="token comment">// \u52A8\u6001\u5BFC\u5165</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  myDynamicModule <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  myDynamicModule <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F<code>CommonJS</code>\u89C4\u8303\u65E0\u6CD5\u786E\u5B9A\u5728\u5B9E\u9645\u8FD0\u884C\u524D\u9700\u8981\u6216\u8005\u4E0D\u9700\u8981\u67D0\u4E9B\u6A21\u5757\uFF0C\u6240\u4EE5<code>CommonJS</code>\u4E0D\u9002\u5408<code>tree-shaking</code>\u673A\u5236\u3002\u5728 <code>ES6</code> \u4E2D\uFF0C\u5F15\u5165\u4E86\u5B8C\u5168\u9759\u6001\u7684\u5BFC\u5165\u8BED\u6CD5\uFF1A<code>import</code>\u3002\u8FD9\u4E5F\u610F\u5473\u7740\u4E0B\u9762\u7684\u5BFC\u5165\u662F\u4E0D\u53EF\u884C\u7684\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4E0D\u53EF\u884C\uFF0CES6 \u7684import\u662F\u5B8C\u5168\u9759\u6001\u7684</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  myDynamicModule <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  myDynamicModule <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EA\u80FD\u901A\u8FC7\u5BFC\u5165\u6240\u6709\u7684\u5305\u540E\u518D\u8FDB\u884C\u6761\u4EF6\u83B7\u53D6\u3002\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> bar <span class="token keyword">from</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// foo.xxxx</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// bar.xxx</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6\u7684<code>import</code>\u8BED\u6CD5\u53EF\u4EE5\u5B8C\u7F8E\u4F7F\u7528<code>tree shaking</code>\uFF0C\u56E0\u4E3A\u53EF\u4EE5\u5728\u4EE3\u7801\u4E0D\u8FD0\u884C\u7684\u60C5\u51B5\u4E0B\u5C31\u80FD\u5206\u6790\u51FA\u4E0D\u9700\u8981\u7684\u4EE3\u7801\u3002</p><p>\u770B\u5B8C\u4E0A\u9762\u7684\u5206\u6790\uFF0C\u4F60\u53EF\u80FD\u8FD8\u662F\u6709\u70B9\u61F5\uFF0C\u8FD9\u91CC\u6211\u7B80\u5355\u505A\u4E0B\u603B\u7ED3\uFF1A\u56E0\u4E3A<code>tree shaking</code>\u53EA\u80FD\u5728\u9759\u6001<code>modules</code>\u4E0B\u5DE5\u4F5C\u3002ECMAScript 6 \u6A21\u5757\u52A0\u8F7D\u662F\u9759\u6001\u7684,\u56E0\u6B64\u6574\u4E2A\u4F9D\u8D56\u6811\u53EF\u4EE5\u88AB\u9759\u6001\u5730\u63A8\u5BFC\u51FA\u89E3\u6790\u8BED\u6CD5\u6811\u3002\u6240\u4EE5\u5728 ES6 \u4E2D\u4F7F\u7528 <code>tree shaking</code> \u662F\u975E\u5E38\u5BB9\u6613\u7684\u3002</p><h2 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h2><p>\u770B\u5B8C\u4E0A\u9762\u7684\u5206\u6790\uFF0C\u76F8\u4FE1\u8FD9\u91CC\u4F60\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u5F97\u51FA\u9898\u76EE\u7684\u7B54\u6848\u4E86\uFF1A</p><ul><li><p><code>ES6 Module</code>\u5F15\u5165\u8FDB\u884C\u9759\u6001\u5206\u6790\uFF0C\u6545\u800C\u7F16\u8BD1\u7684\u65F6\u5019\u6B63\u786E\u5224\u65AD\u5230\u5E95\u52A0\u8F7D\u4E86\u90A3\u4E9B\u6A21\u5757</p></li><li><p><code>\u9759\u6001\u5206\u6790\u7A0B\u5E8F\u6D41</code>\uFF0C\u5224\u65AD\u90A3\u4E9B\u6A21\u5757\u548C\u53D8\u91CF\u672A\u88AB\u4F7F\u7528\u6216\u8005\u5F15\u7528\uFF0C\u8FDB\u800C\u5220\u9664\u5BF9\u5E94\u4EE3\u7801</p></li></ul>`,16),c=[t];function p(i,l){return s(),a("div",null,c)}var r=n(o,[["render",p],["__file","147.html.vue"]]);export{r as default};
