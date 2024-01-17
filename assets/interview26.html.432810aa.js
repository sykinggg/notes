import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as p}from"./app.92084e2a.js";const t={},o=p(`<h1 id="\u7B2C26\u5929-\u8BF4\u8BF4bind\u3001call\u3001apply\u7684\u533A\u522B-\u5E76\u624B\u5199\u5B9E\u73B0\u4E00\u4E2Abind\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C26\u5929-\u8BF4\u8BF4bind\u3001call\u3001apply\u7684\u533A\u522B-\u5E76\u624B\u5199\u5B9E\u73B0\u4E00\u4E2Abind\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u7B2C26\u5929 \u8BF4\u8BF4bind\u3001call\u3001apply\u7684\u533A\u522B\uFF1F\u5E76\u624B\u5199\u5B9E\u73B0\u4E00\u4E2Abind\u7684\u65B9\u6CD5</h1><h2 id="\u601D\u8DEF\u4E00" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E00" aria-hidden="true">#</a> \u601D\u8DEF\u4E00</h2><p><code>call</code>\u548C<code>apply</code>\u90FD\u662F\u4E3A\u4E86\u89E3\u51B3\u6539\u53D8<code>this</code>\u7684\u6307\u5411\u3002\u4F5C\u7528\u90FD\u662F\u76F8\u540C\u7684\uFF0C\u53EA\u662F\u4F20\u53C2\u7684\u65B9\u5F0F\u4E0D\u540C\u3002</p><p>\u9664\u4E86\u7B2C\u4E00\u4E2A\u53C2\u6570\u5916\uFF0C<code>call</code>\u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\u5217\u8868\uFF0C<code>apply</code>\u53EA\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\u6570\u7EC4\u3002 <code>bind</code>\u7ED1\u5B9A\u5B8C\u4E4B\u540E\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\uFF0C\u4E0D\u6267\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context <span class="token operator">=</span> window</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u6267\u884C\u5B8C\u540E\u5E72\u6389</span>
  <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myApply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context <span class="token operator">=</span> window</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> result
  <span class="token comment">// \u5224\u65AD arguments[1] \u662F\u4E0D\u662F undefined</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Error&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u56E0\u4E3A\u8FD4\u56DE\u4E86\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5 new F()\uFF0C\u6240\u4EE5\u9700\u8981\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">F</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">_this</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>arguments<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">_this</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u601D\u8DEF\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E8C" aria-hidden="true">#</a> \u601D\u8DEF\u4E8C</h2><h2 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind</h2><p>bind() \u65B9\u6CD5\u4E0D\u4F1A\u8C03\u7528\u51FD\u6570\uFF0C\u4ED6\u4F1A\u7ED1\u5B9A\u5176\u4ED6\u5143\u7D20\uFF0C\u5F53\u5176\u4ED6\u5143\u7D20\u89E6\u53D1\u4E8B\u4EF6\u65F6\u6539\u53D8 this \u7684\u6307\u5411</p><p>\u8BED\u6CD5\uFF1A<code>fun.bind(thisArg, arg1, arg2, ...)</code> \u53C2\u6570\uFF1A</p><ul><li>thisArg\uFF1A\u5728 fun \u51FD\u6570\u8FD0\u884C\u65F6\u6307\u5B9A\u7684 this \u503C</li><li>arg1\uFF0Carg2\uFF1A\u4F20\u9012\u7684\u5176\u4ED6\u53C2\u6570</li><li>\u53EF\u4EE5\u4F20\u53C2\u6570\uFF0C\u4F46\u662F\u4E0D\u4F1A\u8C03\u7528\uFF0C\u53EF\u4EE5\u8D4B\u503C\u7ED9\u5176\u4ED6\u5143\u7D20</li></ul><p>\u6CE8\u610F\uFF1A</p><ul><li>\u8FD4\u56DE\u503C\u6539\u53D8 this \u7684\u6307\u5411</li><li>\u4ED6\u4E0D\u4F1A\u8C03\u7528\u51FD\u6570\uFF0C\u56E0\u6B64\u5728\u4E0D\u9700\u8981\u7ACB\u5373\u6267\u884C\u7684\u4E8B\u4EF6\u4E0A\u5F88\u597D\u7528</li></ul><p><strong>\u5B9E\u73B0 bind \u65B9\u6CD5</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_bind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
      <span class="token string">&#39;Function.prototype.bind - what is trying to be bound is not callable&#39;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token comment">// \u9700\u8981\u4F20\u5165self\u7684\u53C2\u6570</span>
  <span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>_bind <span class="token operator">=</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>_bind <span class="token operator">||</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="call-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#call-\u65B9\u6CD5" aria-hidden="true">#</a> call() \u65B9\u6CD5</h2><p>call() \u65B9\u6CD5\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\u3002\u7B80\u5355\u7406\u89E3\u4E3A\u8C03\u7528\u51FD\u6570\u7684\u65B9\u5F0F\uFF0C\u4F46\u662F\u5B83\u53EF\u4EE5\u6539\u53D8\u51FD\u6570\u7684 this \u6307\u5411</p><p>\u8BED\u6CD5\uFF1A<code>fun.call(thisArg, arg1, arg2, ...)</code> \u53C2\u6570\uFF1A</p><ul><li>thisArg\uFF1A\u5728 fun \u51FD\u6570\u8FD0\u884C\u65F6\u6307\u5B9A\u7684 this \u503C</li><li>arg1\uFF0Carg2\uFF1A\u4F20\u9012\u7684\u5176\u4ED6\u53C2\u6570</li></ul><p>\u6CE8\u610F\uFF1A</p><ul><li>\u8FD4\u56DE\u503C\u5C31\u662F\u51FD\u6570\u7684\u8FD4\u56DE\u503C\uFF0C\u56E0\u4E3A\u5B83\u5C31\u662F\u8C03\u7528\u51FD\u6570</li><li>\u56E0\u6B64\u5F53\u60F3\u6539\u53D8 this \u6307\u5411\uFF0C\u540C\u65F6\u60F3\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4F7F\u7528 call\uFF0C\u6BD4\u5982\u7EE7\u627F</li><li>call()\u65E0\u53C2\u6570 / call(null) / call(undefined);\u8FD9\u4E09\u79CD this \u90FD\u6307\u5411 window</li></ul><p><strong>\u5B9E\u73B0 call \u65B9\u6CD5</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_call</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
      <span class="token string">&#39;Function.prototype.bind - what is trying to be bound is not callable&#39;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">let</span> pointTo <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> window
  <span class="token comment">// \u9700\u8981\u4F20\u5165self\u7684\u53C2\u6570</span>
  <span class="token keyword">let</span> args <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  pointTo<span class="token punctuation">.</span>fn <span class="token operator">=</span> self
  pointTo<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
  <span class="token comment">// \u9700\u8981\u4F20\u5165self\u7684\u53C2\u6570</span>
<span class="token punctuation">}</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>_call <span class="token operator">=</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>_call <span class="token operator">||</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="apply-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#apply-\u65B9\u6CD5" aria-hidden="true">#</a> apply \u65B9\u6CD5</h2><p>apply() \u65B9\u6CD5\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\u3002\u7B80\u5355\u7406\u89E3\u4E3A\u8C03\u7528\u51FD\u6570\u7684\u65B9\u5F0F\uFF0C\u4F46\u662F\u5B83\u53EF\u4EE5\u6539\u53D8\u51FD\u6570\u7684 this \u6307\u5411\uFF0C\u53C2\u6570\u4E3A\u6570\u7EC4\u5F62\u5F0F</p><p>\u8BED\u6CD5\uFF1A<code>fun.apply(thisArg, [arg1, arg2, ...])</code> \u53C2\u6570\uFF1A</p><ul><li>thisArg\uFF1A\u5728 fun \u51FD\u6570\u8FD0\u884C\u65F6\u6307\u5B9A\u7684 this \u503C</li><li>arg1\uFF0Carg2\uFF1A\u4F20\u9012\u7684\u5176\u4ED6\u53C2\u6570\u653E\u5728\u4E2D\u62EC\u53F7\u5185</li></ul><p>\u6CE8\u610F\uFF1A</p><ul><li>\u56E0\u6B64 apply \u4E3B\u8981\u8DDF\u6570\u7EC4\u6709\u5173\u7CFB\uFF0C\u6BD4\u5982\u4F7F\u7528 Math.max() \u6C42\u6570\u7EC4\u7684\u6700\u5927\u503C</li><li>\u548C call()\u7684\u533A\u522B\u5C31\u662F\uFF0Capply()\u7684\u53C2\u6570\u653E\u5728\u4E2D\u62EC\u53F7\u5185 <strong>\u5B9E\u73B0 call \u65B9\u6CD5</strong></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_apply</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
      <span class="token string">&#39;Function.prototype.bind - what is trying to be bound is not callable&#39;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">let</span> pointTo <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> window
  <span class="token comment">// \u9700\u8981\u4F20\u5165self\u7684\u53C2\u6570</span>
  <span class="token keyword">let</span> <span class="token punctuation">[</span>args<span class="token punctuation">]</span> <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  pointTo<span class="token punctuation">.</span>fn <span class="token operator">=</span> self
  pointTo<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
  <span class="token comment">// \u9700\u8981\u4F20\u5165self\u7684\u53C2\u6570</span>
<span class="token punctuation">}</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>_apply <span class="token operator">=</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>_apply <span class="token operator">||</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u601D\u8DEF\u4E09" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF\u4E09" aria-hidden="true">#</a> \u601D\u8DEF\u4E09</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>z <span class="token punctuation">}</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">run</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">res</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;not funciton&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>context<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">]</span> <span class="token operator">=</span> arguments
  <span class="token keyword">const</span> symbolFn <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;fn&#39;</span><span class="token punctuation">)</span>
  context<span class="token punctuation">.</span>symbolFn <span class="token operator">=</span> <span class="token keyword">this</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">symbolFn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token keyword">delete</span> context<span class="token punctuation">.</span>symbolFn
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>run<span class="token punctuation">.</span><span class="token function">myBind</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">mybind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Error&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">let</span> arg <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5904\u7406\u51FD\u6570\u4F7F\u7528new\u7684\u60C5\u51B5</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">F</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">_this</span><span class="token punctuation">(</span><span class="token operator">...</span>arg<span class="token punctuation">,</span> <span class="token operator">...</span>arguments<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">_this</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> arg<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),e=[o];function c(l,i){return s(),a("div",null,e)}var k=n(t,[["render",c],["__file","interview26.html.vue"]]);export{k as default};