import{_ as n,o as s,c as a,a as e}from"./app.e9fd9ffa.js";const p={},o=e(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h1><hr><h2 id="_1-\u539F\u7406\u7B80\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-\u539F\u7406\u7B80\u8FF0" aria-hidden="true">#</a> <strong>1. \u539F\u7406\u7B80\u8FF0</strong></h2><p>Webpack \u5DF2\u7ECF\u6210\u4E3A\u4E86\u73B0\u5728\u524D\u7AEF\u5DE5\u7A0B\u5316\u4E2D\u6700\u91CD\u8981\u7684\u4E00\u73AF\uFF0C\u901A\u8FC7<code>Webpack</code>\u4E0E<code>Node</code>\u7684\u914D\u5408\uFF0C\u524D\u7AEF\u9886\u57DF\u5B8C\u6210\u4E86\u4E0D\u53EF\u601D\u8BAE\u7684\u8FDB\u6B65\u3002\u901A\u8FC7\u9884\u7F16\u8BD1\uFF0C\u5C06\u8F6F\u4EF6\u7F16\u7A0B\u4E2D\u5148\u8FDB\u7684\u601D\u60F3\u548C\u7406\u5FF5\u80FD\u591F\u771F\u6B63\u8FD0\u7528\u4E8E\u751F\u4EA7\uFF0C\u8BA9\u524D\u7AEF\u5F00\u53D1\u9886\u57DF\u544A\u522B\u539F\u59CB\u7684\u86EE\u8352\u9636\u6BB5\u3002\u6DF1\u5165\u7406\u89E3<code>Webpack</code>\uFF0C\u53EF\u4EE5\u8BA9\u5728\u7F16\u7A0B\u601D\u7EF4\u53CA\u6280\u672F\u9886\u57DF\u4E0A\u4EA7\u751F\u8D28\u7684\u6210\u957F\uFF0C\u6781\u5927\u62D3\u5C55\u6280\u672F\u8FB9\u754C\u3002\u8FD9\u4E5F\u662F\u5728\u9762\u8BD5\u4E2D\u5FC5\u4E0D\u53EF\u5C11\u7684\u4E00\u4E2A\u5185\u5BB9</p><ul><li><p><strong>\u6838\u5FC3\u6982\u5FF5</strong></p><ul><li><p>JavaScript \u7684 <strong>\u6A21\u5757\u6253\u5305\u5DE5\u5177</strong> (module bundler)\u3002\u901A\u8FC7\u5206\u6790\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\uFF0C\u6700\u7EC8\u5C06\u6240\u6709\u6A21\u5757\u6253\u5305\u6210\u4E00\u4EFD\u6216\u8005\u591A\u4EFD\u4EE3\u7801\u5305 (bundler)\uFF0C\u4F9B HTML \u76F4\u63A5\u5F15\u7528\u3002\u5B9E\u8D28\u4E0A\uFF0CWebpack \u4EC5\u4EC5\u63D0\u4F9B\u4E86 <strong>\u6253\u5305\u529F\u80FD</strong> \u548C\u4E00\u5957 <strong>\u6587\u4EF6\u5904\u7406\u673A\u5236</strong>\uFF0C\u7136\u540E\u901A\u8FC7\u751F\u6001\u4E2D\u7684\u5404\u79CD Loader \u548C Plugin \u5BF9\u4EE3\u7801\u8FDB\u884C\u9884\u7F16\u8BD1\u548C\u6253\u5305\u3002\u56E0\u6B64 Webpack \u5177\u6709\u9AD8\u5EA6\u7684\u53EF\u62D3\u5C55\u6027\uFF0C\u80FD\u66F4\u597D\u7684\u53D1\u6325\u793E\u533A\u751F\u6001\u7684\u529B\u91CF\u3002</p><ul><li><p><code>Entry</code>: \u5165\u53E3\u6587\u4EF6\uFF0CWebpack \u4F1A\u4ECE\u8BE5\u6587\u4EF6\u5F00\u59CB\u8FDB\u884C\u5206\u6790\u4E0E\u7F16\u8BD1\uFF1B</p></li><li><p><code>Output</code>: \u51FA\u53E3\u8DEF\u5F84\uFF0C\u6253\u5305\u540E\u521B\u5EFA bundler \u7684\u6587\u4EF6\u8DEF\u5F84\u4EE5\u53CA\u6587\u4EF6\u540D\uFF1B</p></li><li><p><code>Module</code>: \u6A21\u5757\uFF0C\u5728 Webpack \u4E2D\u4EFB\u4F55\u6587\u4EF6\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u6A21\u5757\uFF0C\u4F1A\u6839\u636E\u914D\u7F6E\u7684\u4E0D\u540C\u7684 Loader \u8FDB\u884C\u52A0\u8F7D\u548C\u6253\u5305\uFF1B</p></li><li><p><code>Chunk</code>: \u4EE3\u7801\u5757\uFF0C\u53EF\u4EE5\u6839\u636E\u914D\u7F6E\uFF0C\u5C06\u6240\u6709\u6A21\u5757\u4EE3\u7801\u5408\u5E76\u6210\u4E00\u4E2A\u6216\u591A\u4E2A\u4EE3\u7801\u5757\uFF0C\u4EE5\u4FBF\u6309\u9700\u52A0\u8F7D\uFF0C\u63D0\u9AD8\u6027\u80FD\uFF1B</p></li><li><p><code>Loader</code>: \u6A21\u5757\u52A0\u8F7D\u5668\uFF0C\u8FDB\u884C\u5404\u79CD\u6587\u4EF6\u7C7B\u578B\u7684\u52A0\u8F7D\u4E0E\u8F6C\u6362\uFF1B</p></li><li><p><code>Plugin</code>: \u62D3\u5C55\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7 Webpack \u76F8\u5E94\u7684\u4E8B\u4EF6\u94A9\u5B50\uFF0C\u4ECB\u5165\u5230\u6253\u5305\u8FC7\u7A0B\u4E2D\u7684\u4EFB\u610F\u73AF\u8282\uFF0C\u4ECE\u800C\u5BF9\u4EE3\u7801\u6309\u9700\u4FEE\u6539\uFF1B</p></li></ul></li></ul></li><li><p><strong>\u5DE5\u4F5C\u6D41\u7A0B</strong> (\u52A0\u8F7D - \u7F16\u8BD1 - \u8F93\u51FA)</p><ul><li><p>1\u3001\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\uFF0C\u6309\u547D\u4EE4 <strong>\u521D\u59CB\u5316</strong> \u914D\u7F6E\u53C2\u6570\uFF0C\u521B\u5EFA Compiler \u5BF9\u8C61\uFF1B</p></li><li><p>2\u3001\u8C03\u7528\u63D2\u4EF6\u7684 apply \u65B9\u6CD5 <strong>\u6302\u8F7D\u63D2\u4EF6</strong> \u76D1\u542C\uFF0C\u7136\u540E\u4ECE\u5165\u53E3\u6587\u4EF6\u5F00\u59CB\u6267\u884C\u7F16\u8BD1\uFF1B</p></li><li><p>3\u3001\u6309\u6587\u4EF6\u7C7B\u578B\uFF0C\u8C03\u7528\u76F8\u5E94\u7684 Loader \u5BF9\u6A21\u5757\u8FDB\u884C <strong>\u7F16\u8BD1</strong>\uFF0C\u5E76\u5728\u5408\u9002\u7684\u65F6\u673A\u70B9\u89E6\u53D1\u5BF9\u5E94\u7684\u4E8B\u4EF6\uFF0C\u8C03\u7528 Plugin \u6267\u884C\uFF0C\u6700\u540E\u518D\u6839\u636E\u6A21\u5757 <strong>\u4F9D\u8D56\u67E5\u627E</strong> \u5230\u6240\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u9012\u5F52\u6267\u884C\u7B2C\u4E09\u6B65\uFF1B</p></li><li><p>4\u3001\u5C06\u7F16\u8BD1\u540E\u7684\u6240\u6709\u4EE3\u7801\u5305\u88C5\u6210\u4E00\u4E2A\u4E2A\u4EE3\u7801\u5757 (Chuck)\uFF0C \u5E76\u6309\u4F9D\u8D56\u548C\u914D\u7F6E\u786E\u5B9A <strong>\u8F93\u51FA\u5185\u5BB9</strong>\u3002\u8FD9\u4E2A\u6B65\u9AA4\uFF0C\u4ECD\u7136\u53EF\u4EE5\u901A\u8FC7 Plugin \u8FDB\u884C\u6587\u4EF6\u7684\u4FEE\u6539;</p></li><li><p>5\u3001\u6700\u540E\uFF0C\u6839\u636E Output \u628A\u6587\u4EF6\u5185\u5BB9\u4E00\u4E00\u5199\u5165\u5230\u6307\u5B9A\u7684\u6587\u4EF6\u5939\u4E2D\uFF0C\u5B8C\u6210\u6574\u4E2A\u8FC7\u7A0B\uFF1B</p></li></ul></li><li><p><strong>\u6A21\u5757\u5305\u88C5</strong>:</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">modules</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6A21\u62DF require \u51FD\u6570\uFF0C\u4ECE\u5185\u5B58\u4E2D\u52A0\u8F7D\u6A21\u5757\uFF1B</span>
    <span class="token keyword">function</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token parameter">moduleId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u7F13\u5B58\u6A21\u5757</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">var</span> module <span class="token operator">=</span> installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">i</span><span class="token operator">:</span> moduleId<span class="token punctuation">,</span>
            <span class="token literal-property property">l</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        
        <span class="token comment">// \u6267\u884C\u4EE3\u7801\uFF1B</span>
        modules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> module<span class="token punctuation">,</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> __webpack_require__<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Flag: \u6807\u8BB0\u662F\u5426\u52A0\u8F7D\u5B8C\u6210\uFF1B</span>
        module<span class="token punctuation">.</span>l <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// ...</span>
    
    <span class="token comment">// \u5F00\u59CB\u6267\u884C\u52A0\u8F7D\u5165\u53E3\u6587\u4EF6\uFF1B</span>
    <span class="token keyword">return</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span>__webpack_require__<span class="token punctuation">.</span>s <span class="token operator">=</span> <span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;./src/index.js&quot;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> __webpack_exports__<span class="token punctuation">,</span> __webpack_require__</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4F7F\u7528 eval \u6267\u884C\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\uFF1B</span>
        <span class="token comment">// \u7EE7\u7EED\u9012\u5F52\u5F15\u7528\u6A21\u5757\u5185\u90E8\u4F9D\u8D56\uFF1B</span>
        <span class="token comment">// \u5B9E\u9645\u60C5\u51B5\u5E76\u4E0D\u662F\u4F7F\u7528\u6A21\u677F\u5B57\u7B26\u4E32\uFF0C\u8FD9\u91CC\u662F\u4E3A\u4E86\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\uFF1B</span>
        <span class="token function">eval</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
            __webpack_require__.r(__webpack_exports__);
            //
            var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(&quot;test&quot;, ./src/test.js&quot;);
        </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;./src/test.js&quot;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> __webpack_exports__<span class="token punctuation">,</span> __webpack_require__</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>\u603B\u7ED3</strong>:</p><ul><li><p><code>\u6A21\u5757\u673A\u5236</code>: webpack \u81EA\u5DF1\u5B9E\u73B0\u4E86\u4E00\u5957\u6A21\u62DF\u6A21\u5757\u7684\u673A\u5236\uFF0C\u5C06\u5176\u5305\u88F9\u4E8E\u4E1A\u52A1\u4EE3\u7801\u7684\u5916\u90E8\uFF0C\u4ECE\u800C\u63D0\u4F9B\u4E86\u4E00\u5957\u6A21\u5757\u673A\u5236\uFF1B</p></li><li><p><code>\u6587\u4EF6\u7F16\u8BD1</code>: webpack \u89C4\u5B9A\u4E86\u4E00\u5957\u7F16\u8BD1\u89C4\u5219\uFF0C\u901A\u8FC7 Loader \u548C Plugin\uFF0C\u4EE5\u7BA1\u9053\u7684\u5F62\u5F0F\u5BF9\u6587\u4EF6\u5B57\u7B26\u4E32\u8FDB\u884C\u5904\u7406\uFF1B</p></li></ul></li></ul><h2 id="_2-loader" tabindex="-1"><a class="header-anchor" href="#_2-loader" aria-hidden="true">#</a> <strong>2. Loader</strong></h2><p>\u7531\u4E8E Webpack \u662F\u57FA\u4E8E Node\uFF0C\u56E0\u6B64 Webpack \u5176\u5B9E\u662F\u53EA\u80FD\u8BC6\u522B js \u6A21\u5757\uFF0C\u6BD4\u5982 css / html / \u56FE\u7247\u7B49\u7C7B\u578B\u7684\u6587\u4EF6\u5E76\u65E0\u6CD5\u52A0\u8F7D\uFF0C\u56E0\u6B64\u5C31\u9700\u8981\u4E00\u4E2A\u5BF9 <strong>\u4E0D\u540C\u683C\u5F0F\u6587\u4EF6\u8F6C\u6362\u5668</strong>\u3002\u5176\u5B9E Loader \u505A\u7684\u4E8B\uFF0C\u4E5F\u5E76\u4E0D\u96BE\u7406\u89E3: <strong>\u5BF9 Webpack \u4F20\u5165\u7684\u5B57\u7B26\u4E32\u8FDB\u884C\u6309\u9700\u4FEE\u6539</strong>\u3002\u4F8B\u5982\u4E00\u4E2A\u6700\u7B80\u5355\u7684 Loader:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// html-loader/index.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">htmlSource</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8FD4\u56DE\u5904\u7406\u540E\u7684\u4EE3\u7801\u5B57\u7B26\u4E32</span>
	<span class="token comment">// \u5220\u9664 html \u6587\u4EF6\u4E2D\u7684\u6240\u6709\u6CE8\u91CA</span>
	<span class="token keyword">return</span> htmlSource<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;!--[\\w\\W]*?--&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u5B9E\u9645\u7684 Loader \u4E0D\u4F1A\u8FD9\u4E48\u7B80\u5355\uFF0C\u901A\u5E38\u662F\u9700\u8981\u5C06\u4EE3\u7801\u8FDB\u884C\u5206\u6790\uFF0C\u6784\u5EFA <strong>AST (\u62BD\u8C61\u8BED\u6CD5\u6811)</strong>\uFF0C \u904D\u5386\u8FDB\u884C\u5B9A\u5411\u7684\u4FEE\u6539\u540E\uFF0C\u518D\u91CD\u65B0\u751F\u6210\u65B0\u7684\u4EE3\u7801\u5B57\u7B26\u4E32\u3002\u5982\u5E38\u7528\u7684 Babel-loader \u4F1A\u6267\u884C\u4EE5\u4E0B\u6B65\u9AA4:</p><ul><li><p><code>babel-parser</code> \u5C06 ES6/ES7 \u4EE3\u7801\u89E3\u6790\u6210 AST</p></li><li><p><code>babel-traverse</code> \u5BF9 AST \u8FDB\u884C\u904D\u5386\u8F6C\u8BD1\uFF0C\u5F97\u5230\u65B0\u7684 AST</p></li><li><p>\u65B0 AST \u901A\u8FC7 <code>babel-generator</code> \u8F6C\u6362\u6210 ES5</p></li></ul><p><strong>Loader \u7279\u6027</strong>:</p><ul><li><p><code>\u94FE\u5F0F\u4F20\u9012</code>\uFF0C\u6309\u7167\u914D\u7F6E\u65F6\u76F8\u53CD\u7684\u987A\u5E8F\u94FE\u5F0F\u6267\u884C\uFF1B</p></li><li><p>\u57FA\u4E8E Node \u73AF\u5883\uFF0C\u62E5\u6709 <code>\u8F83\u9AD8\u6743\u9650</code>\uFF0C\u6BD4\u5982\u6587\u4EF6\u7684\u589E\u5220\u67E5\u6539\uFF1B</p></li><li><p>\u53EF\u540C\u6B65\u4E5F\u53EF\u5F02\u6B65\uFF1B</p></li></ul><p><strong>\u5E38\u7528 Loader</strong>:</p><ul><li><p><code>file-loader</code>: \u52A0\u8F7D\u6587\u4EF6\u8D44\u6E90\uFF0C\u5982 <strong>\u5B57\u4F53</strong> / <strong>\u56FE\u7247</strong> \u7B49\uFF0C\u5177\u6709<code>\u79FB\u52A8</code>/<code>\u590D\u5236</code>/<code>\u547D\u540D</code>\u7B49\u529F\u80FD\uFF1B</p></li><li><p><code>url-loader</code>: \u901A\u5E38\u7528\u4E8E<strong>\u52A0\u8F7D\u56FE\u7247</strong>\uFF0C\u53EF\u4EE5\u5C06\u5C0F\u56FE\u7247\u76F4\u63A5\u8F6C\u6362\u4E3A <code>DataURL</code>\uFF0C\u51CF\u5C11\u8BF7\u6C42\uFF1B</p></li><li><p><code>babel-loader</code>: \u52A0\u8F7D <strong>js</strong> / <strong>jsx</strong> \u6587\u4EF6\uFF0C \u5C06 <code>ES6</code> / <code>ES7</code> \u4EE3\u7801\u8F6C\u6362\u6210 <code>ES5</code>\uFF0C<code>\u62B9\u5E73\u517C\u5BB9\u6027\u95EE\u9898</code>\uFF1B</p></li><li><p><code>ts-loader</code>: \u52A0\u8F7D <strong>ts</strong> / <strong>tsx</strong> \u6587\u4EF6\uFF0C\u7F16\u8BD1 <code>TypeScript</code>\uFF1B</p></li><li><p><code>style-loader</code>: \u5C06 <strong>css</strong> \u4EE3\u7801\u4EE5<code>&lt;style&gt;</code>\u6807\u7B7E\u7684\u5F62\u5F0F\u63D2\u5165\u5230 <code>html</code> \u4E2D\uFF1B</p></li><li><p><code>css-loader</code>: \u5206\u6790<code>@impor</code>t\u548C<code>url()</code>\uFF0C\u5F15\u7528 <strong>css</strong> \u6587\u4EF6\u4E0E\u5BF9\u5E94\u7684\u8D44\u6E90\uFF1B</p></li><li><p><code>postcss-loader</code>: \u7528\u4E8E <strong>css \u7684\u517C\u5BB9\u6027\u5904\u7406</strong>\uFF0C\u5177\u6709\u4F17\u591A\u529F\u80FD\uFF0C\u4F8B\u5982 \u6DFB\u52A0<code>\u524D\u7F00</code>\uFF0C<code>\u5355\u4F4D\u8F6C\u6362</code> \u7B49\uFF1B</p></li><li><p><code>less-loader</code> / <code>sass-loader</code>: <strong>css</strong><code>\u9884\u5904\u7406\u5668</code>\uFF0C\u5728 css \u4E2D\u65B0\u589E\u4E86\u8BB8\u591A\u8BED\u6CD5\uFF0C\u63D0\u9AD8\u4E86\u5F00\u53D1\u6548\u7387\uFF1B</p></li></ul><p><strong>\u7F16\u5199\u539F\u5219:</strong></p><ul><li><p><strong>\u5355\u4E00\u539F\u5219</strong>: \u6BCF\u4E2A Loader \u53EA\u505A\u4E00\u4EF6\u4E8B\uFF1B</p></li><li><p><strong>\u94FE\u5F0F\u8C03\u7528</strong>: Webpack \u4F1A\u6309\u987A\u5E8F\u94FE\u5F0F\u8C03\u7528\u6BCF\u4E2A Loader\uFF1B</p></li><li><p><strong>\u7EDF\u4E00\u539F\u5219</strong>: \u9075\u5FAA Webpack \u5236\u5B9A\u7684\u8BBE\u8BA1\u89C4\u5219\u548C\u7ED3\u6784\uFF0C\u8F93\u5165\u4E0E\u8F93\u51FA\u5747\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5404\u4E2A Loader \u5B8C\u5168\u72EC\u7ACB\uFF0C\u5373\u63D2\u5373\u7528\uFF1B</p></li></ul><h2 id="_3-plugin" tabindex="-1"><a class="header-anchor" href="#_3-plugin" aria-hidden="true">#</a> <strong>3. Plugin</strong></h2><p>\u63D2\u4EF6\u7CFB\u7EDF\u662F Webpack \u6210\u529F\u7684\u4E00\u4E2A\u5173\u952E\u6027\u56E0\u7D20\u3002\u5728\u7F16\u8BD1\u7684\u6574\u4E2A\u751F\u547D\u5468\u671F\u4E2D\uFF0CWebpack \u4F1A\u89E6\u53D1\u8BB8\u591A\u4E8B\u4EF6\u94A9\u5B50\uFF0CPlugin \u53EF\u4EE5\u76D1\u542C\u8FD9\u4E9B\u4E8B\u4EF6\uFF0C\u6839\u636E\u9700\u6C42\u5728\u76F8\u5E94\u7684\u65F6\u95F4\u70B9\u5BF9\u6253\u5305\u5185\u5BB9\u8FDB\u884C\u5B9A\u5411\u7684\u4FEE\u6539\u3002</p><ul><li>\u4E00\u4E2A\u6700\u7B80\u5355\u7684 plugin \u662F\u8FD9\u6837\u7684:</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Plugin</span><span class="token punctuation">{</span>
  	<span class="token comment">// \u6CE8\u518C\u63D2\u4EF6\u65F6\uFF0C\u4F1A\u8C03\u7528 apply \u65B9\u6CD5</span>
  	<span class="token comment">// apply \u65B9\u6CD5\u63A5\u6536 compiler \u5BF9\u8C61</span>
  	<span class="token comment">// \u901A\u8FC7 compiler \u4E0A\u63D0\u4F9B\u7684 Api\uFF0C\u53EF\u4EE5\u5BF9\u4E8B\u4EF6\u8FDB\u884C\u76D1\u542C\uFF0C\u6267\u884C\u76F8\u5E94\u7684\u64CD\u4F5C</span>
  	<span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  		<span class="token comment">// compilation \u662F\u76D1\u542C\u6BCF\u6B21\u7F16\u8BD1\u5FAA\u73AF</span>
  		<span class="token comment">// \u6BCF\u6B21\u6587\u4EF6\u53D8\u5316\uFF0C\u90FD\u4F1A\u751F\u6210\u65B0\u7684 compilation \u5BF9\u8C61\u5E76\u89E6\u53D1\u8BE5\u4E8B\u4EF6</span>
    	compiler<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">&#39;compilation&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u6CE8\u518C\u63D2\u4EF6</strong>:</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>export <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
		<span class="token keyword">new</span> <span class="token class-name">Plugin</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u4E8B\u4EF6\u6D41\u673A\u5236</strong>:</li></ul><p>Webpack \u5C31\u50CF\u5DE5\u5382\u4E2D\u7684\u4E00\u6761\u4EA7\u54C1\u6D41\u6C34\u7EBF\u3002\u539F\u6750\u6599\u7ECF\u8FC7 <strong>Loader</strong> \u4E0E <strong>Plugin</strong> \u7684\u4E00\u9053\u9053\u5904\u7406\uFF0C\u6700\u540E\u8F93\u51FA\u7ED3\u679C\u3002</p><ul><li><p>\u901A\u8FC7\u94FE\u5F0F\u8C03\u7528\uFF0C\u6309\u987A\u5E8F\u4E32\u8D77\u4E00\u4E2A\u4E2A <code>Loader</code>\uFF1B</p></li><li><p>\u901A\u8FC7\u4E8B\u4EF6\u6D41\u673A\u5236\uFF0C\u8BA9 <code>Plugin</code> \u53EF\u4EE5\u63D2\u5165\u5230\u6574\u4E2A\u751F\u4EA7\u8FC7\u7A0B\u4E2D\u7684\u6BCF\u4E2A\u6B65\u9AA4\u4E2D\uFF1B</p></li></ul><p>Webpack \u4E8B\u4EF6\u6D41\u7F16\u7A0B\u8303\u5F0F\u7684\u6838\u5FC3\u662F\u57FA\u7840\u7C7B <strong>Tapable</strong>\uFF0C\u662F\u4E00\u79CD <strong>\u89C2\u5BDF\u8005\u6A21\u5F0F</strong> \u7684\u5B9E\u73B0\u4E8B\u4EF6\u7684\u8BA2\u9605\u4E0E\u5E7F\u64AD\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> SyncHook <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;tapable&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> hook <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;arg&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// \u8BA2\u9605</span>
hook<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">// &#39;event-hook&#39;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5E7F\u64AD</span>
<span class="token function">hook</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;event-hook&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Webpack \u4E2D\u4E24\u4E2A\u6700\u91CD\u8981\u7684\u7C7B <code>Compiler</code> \u4E0E <code>Compilation</code> \u4FBF\u662F\u7EE7\u627F\u4E8E Tapable\uFF0C\u4E5F\u62E5\u6709\u8FD9\u6837\u7684\u4E8B\u4EF6\u6D41\u673A\u5236\u3002</p><ul><li><p><strong>Compiler</strong>: \u53EF\u4EE5\u7B80\u5355\u7684\u7406\u89E3\u4E3A <strong>Webpack \u5B9E\u4F8B</strong>\uFF0C\u5B83\u5305\u542B\u4E86\u5F53\u524D Webpack \u4E2D\u7684\u6240\u6709\u914D\u7F6E\u4FE1\u606F\uFF0C\u5982 options\uFF0C loaders, plugins \u7B49\u4FE1\u606F\uFF0C\u5168\u5C40\u552F\u4E00\uFF0C\u53EA\u5728\u542F\u52A8\u65F6\u5B8C\u6210\u521D\u59CB\u5316\u521B\u5EFA\uFF0C\u968F\u7740\u751F\u547D\u5468\u671F\u9010\u4E00\u4F20\u9012\uFF1B</p></li><li><p><strong>Compilation</strong>: \u53EF\u4EE5\u79F0\u4E3A <strong>\u7F16\u8BD1\u5B9E\u4F8B</strong>\u3002\u5F53\u76D1\u542C\u5230\u6587\u4EF6\u53D1\u751F\u6539\u53D8\u65F6\uFF0CWebpack \u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Compilation \u5BF9\u8C61\uFF0C\u5F00\u59CB\u4E00\u6B21\u65B0\u7684\u7F16\u8BD1\u3002\u5B83\u5305\u542B\u4E86\u5F53\u524D\u7684\u8F93\u5165\u8D44\u6E90\uFF0C\u8F93\u51FA\u8D44\u6E90\uFF0C\u53D8\u5316\u7684\u6587\u4EF6\u7B49\uFF0C\u540C\u65F6\u901A\u8FC7\u5B83\u63D0\u4F9B\u7684 api\uFF0C\u53EF\u4EE5\u76D1\u542C\u6BCF\u6B21\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u89E6\u53D1\u7684\u4E8B\u4EF6\u94A9\u5B50\uFF1B</p></li><li><p><strong>\u533A\u522B</strong>:</p><ul><li><p><code>Compiler</code> \u5168\u5C40\u552F\u4E00\uFF0C\u4E14\u4ECE\u542F\u52A8\u751F\u5B58\u5230\u7ED3\u675F\uFF1B</p></li><li><p><code>Compilation</code> \u5BF9\u5E94\u6BCF\u6B21\u7F16\u8BD1\uFF0C\u6BCF\u8F6E\u7F16\u8BD1\u5FAA\u73AF\u5747\u4F1A\u91CD\u65B0\u521B\u5EFA\uFF1B</p></li></ul></li><li><p><strong>\u5E38\u7528 Plugin</strong>:</p><ul><li><p><code>UglifyJsPlugin</code>: \u538B\u7F29\u3001\u6DF7\u6DC6\u4EE3\u7801\uFF1B</p></li><li><p><code>CommonsChunkPlugin</code>: \u4EE3\u7801\u5206\u5272\uFF1B</p></li><li><p><code>ProvidePlugin</code>: \u81EA\u52A8\u52A0\u8F7D\u6A21\u5757\uFF1B</p></li><li><p><code>html-webpack-plugin</code>: \u52A0\u8F7D html \u6587\u4EF6\uFF0C\u5E76\u5F15\u5165 css / js \u6587\u4EF6\uFF1B</p></li><li><p><code>extract-text-webpack-plugin</code> / <code>mini-css-extract-plugin</code>: \u62BD\u79BB\u6837\u5F0F\uFF0C\u751F\u6210 css \u6587\u4EF6\uFF1B</p></li><li><p><code>DefinePlugin</code>: \u5B9A\u4E49\u5168\u5C40\u53D8\u91CF\uFF1B</p></li><li><p><code>optimize-css-assets-webpack-plugin</code>: CSS \u4EE3\u7801\u53BB\u91CD\uFF1B</p></li><li><p><code>webpack-bundle-analyzer</code>: \u4EE3\u7801\u5206\u6790\uFF1B</p></li><li><p><code>compression-webpack-plugin</code>: \u4F7F\u7528 gzip \u538B\u7F29 js \u548C css\uFF1B</p></li><li><p><code>happypack</code>: \u4F7F\u7528\u591A\u8FDB\u7A0B\uFF0C\u52A0\u901F\u4EE3\u7801\u6784\u5EFA\uFF1B</p></li><li><p><code>EnvironmentPlugin</code>: \u5B9A\u4E49\u73AF\u5883\u53D8\u91CF\uFF1B</p></li></ul></li></ul><h2 id="_4-\u7F16\u8BD1\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_4-\u7F16\u8BD1\u4F18\u5316" aria-hidden="true">#</a> <strong>4. \u7F16\u8BD1\u4F18\u5316</strong></h2><ul><li><p><strong>\u4EE3\u7801\u4F18\u5316</strong>:</p><ul><li><p><strong>\u65E0\u7528\u4EE3\u7801\u6D88\u9664</strong>\uFF0C\u662F\u8BB8\u591A\u7F16\u7A0B\u8BED\u8A00\u90FD\u5177\u6709\u7684\u4F18\u5316\u624B\u6BB5\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u79F0\u4E3A DCE (dead code elimination)\uFF0C\u5373 <strong>\u5220\u9664\u4E0D\u53EF\u80FD\u6267\u884C\u7684\u4EE3\u7801</strong>\uFF1B</p><ul><li>\u4F8B\u5982\u7684 <code>UglifyJs</code>\uFF0C\u5B83\u5C31\u4F1A\u5E2E\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u5220\u9664\u4E0D\u53EF\u80FD\u88AB\u6267\u884C\u7684\u4EE3\u7801\uFF0C\u4F8B\u5982:</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4E0B\u9762\u4EE3\u7801\u4FBF\u5C5E\u4E8E \u4E0D\u53EF\u80FD\u6267\u884C\u7684\u4EE3\u7801\uFF1B</span>
    <span class="token comment">// \u901A\u8FC7 UglifyJs (Webpack4+ \u5DF2\u5185\u7F6E) \u4FBF\u4F1A\u8FDB\u884C DCE\uFF1B</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u6447\u6811\u4F18\u5316</strong> (<code>Tree-shaking</code>)\uFF0C\u8FD9\u662F\u4E00\u79CD\u5F62\u8C61\u6BD4\u55BB\u3002\u628A\u6253\u5305\u540E\u7684\u4EE3\u7801\u6BD4\u55BB\u6210\u4E00\u68F5\u6811\uFF0C\u8FD9\u91CC\u5176\u5B9E\u8868\u793A\u7684\u5C31\u662F\uFF0C\u901A\u8FC7\u5DE5\u5177 &quot;\u6447&quot; \u6253\u5305\u540E\u7684 js \u4EE3\u7801\uFF0C\u5C06\u6CA1\u6709\u4F7F\u7528\u5230\u7684\u65E0\u7528\u4EE3\u7801 &quot;\u6447&quot; \u4E0B\u6765 (\u5220\u9664)\u3002\u5373 \u6D88\u9664\u90A3\u4E9B\u88AB <strong>\u5F15\u7528\u4E86\u4F46\u672A\u88AB\u4F7F\u7528</strong> \u7684\u6A21\u5757\u4EE3\u7801\u3002</p><ul><li><p><strong>\u539F\u7406</strong>: \u7531\u4E8E\u662F\u5728\u7F16\u8BD1\u65F6\u4F18\u5316\uFF0C\u56E0\u6B64\u6700\u57FA\u672C\u7684\u524D\u63D0\u5C31\u662F\u8BED\u6CD5\u7684\u9759\u6001\u5206\u6790\uFF0C<strong>ES6\u7684\u6A21\u5757\u673A\u5236</strong> \u63D0\u4F9B\u4E86\u8FD9\u79CD\u53EF\u80FD\u6027\u3002\u4E0D\u9700\u8981\u8FD0\u884C\u65F6\uFF0C\u4FBF\u53EF\u8FDB\u884C\u4EE3\u7801\u5B57\u9762\u4E0A\u7684\u9759\u6001\u5206\u6790\uFF0C\u786E\u5B9A\u76F8\u5E94\u7684\u4F9D\u8D56\u5173\u7CFB\u3002</p></li><li><p><strong>\u95EE\u9898</strong>: \u5177\u6709 <strong>\u526F\u4F5C\u7528</strong> \u7684\u51FD\u6570\u65E0\u6CD5\u88AB <code>tree-shaking</code>\u3002</p><ul><li><p>\u5728\u5F15\u7528\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5E93\uFF0C\u9700\u8981\u53BB\u89C2\u5BDF\u5176\u5F15\u5165\u7684\u4EE3\u7801\u91CF\u662F\u4E0D\u662F\u7B26\u5408\u9884\u671F\uFF1B</p></li><li><p>\u5C3D\u91CF\u5199<code>\u7EAF\u51FD\u6570</code>\uFF0C\u51CF\u5C11<code>\u51FD\u6570\u7684\u526F\u4F5C\u7528</code>\uFF1B</p></li><li><p>\u53EF\u4F7F\u7528 <code>webpack-deep-scope-plugin</code>\uFF0C\u53EF\u4EE5\u8FDB\u884C\u4F5C\u7528\u57DF\u5206\u6790\uFF0C\u51CF\u5C11\u6B64\u7C7B\u60C5\u51B5\u7684\u53D1\u751F\uFF0C\u4F46\u4ECD\u9700\u8981\u6CE8\u610F\uFF1B</p></li></ul></li></ul></li></ul></li><li><p><strong>code-spliting: \u4EE3\u7801\u5206\u5272</strong></p><p>\u5C06\u4EE3\u7801\u5206\u5272\u6210\u591A\u4EFD\u8FDB\u884C <code>\u61D2\u52A0\u8F7D</code> \u6216 <code>\u5F02\u6B65\u52A0\u8F7D</code>\uFF0C\u907F\u514D\u6253\u5305\u6210\u4E00\u4EFD\u540E\u5BFC\u81F4\u4F53\u79EF\u8FC7\u5927\uFF0C\u5F71\u54CD\u9875\u9762\u7684\u9996\u5C4F\u52A0\u8F7D\uFF1B</p><ul><li><p><code>Webpack</code> \u4E2D\u4F7F\u7528 <code>SplitChunksPlugin</code> \u8FDB\u884C\u62C6\u5206\uFF1B</p></li><li><p>\u6309 <strong>\u9875\u9762</strong> \u62C6\u5206: \u4E0D\u540C\u9875\u9762\u6253\u5305\u6210\u4E0D\u540C\u7684\u6587\u4EF6\uFF1B</p></li><li><p>\u6309 <strong>\u529F\u80FD</strong> \u62C6\u5206:</p><ul><li><p>\u5C06\u7C7B\u4F3C\u4E8E\u64AD\u653E\u5668\uFF0C\u8BA1\u7B97\u5E93\u7B49\u5927\u6A21\u5757\u8FDB\u884C\u62C6\u5206\u540E\u518D\u61D2\u52A0\u8F7D\u5F15\u5165\uFF1B</p></li><li><p>\u63D0\u53D6\u590D\u7528\u7684\u4E1A\u52A1\u4EE3\u7801\uFF0C\u51CF\u5C11\u5197\u4F59\u4EE3\u7801\uFF1B</p></li></ul></li><li><p>\u6309 <strong>\u6587\u4EF6\u4FEE\u6539\u9891\u7387</strong> \u62C6\u5206: \u5C06\u7B2C\u4E09\u65B9\u5E93\u7B49\u4E0D\u5E38\u4FEE\u6539\u7684\u4EE3\u7801\u5355\u72EC\u6253\u5305\uFF0C\u800C\u4E14\u4E0D\u6539\u53D8\u5176\u6587\u4EF6 hash \u503C\uFF0C\u80FD\u6700\u5927\u5316\u8FD0\u7528\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\uFF1B</p></li></ul></li><li><p><strong>scope hoisting: \u4F5C\u7528\u57DF\u63D0\u5347</strong></p><p>\u5C06\u5206\u6563\u7684\u6A21\u5757\u5212\u5206\u5230\u540C\u4E00\u4E2A\u4F5C\u7528\u57DF\u4E2D\uFF0C\u907F\u514D\u4E86\u4EE3\u7801\u7684\u91CD\u590D\u5F15\u5165\uFF0C\u6709\u6548\u51CF\u5C11\u6253\u5305\u540E\u7684\u4EE3\u7801\u4F53\u79EF\u548C\u8FD0\u884C\u65F6\u7684\u5185\u5B58\u635F\u8017\uFF1B</p></li><li><p><strong>\u7F16\u8BD1\u6027\u80FD\u4F18\u5316</strong>:</p><ul><li><p>\u5347\u7EA7\u81F3 <code>\u6700\u65B0</code> \u7248\u672C\u7684 webpack\uFF0C\u80FD\u6709\u6548\u63D0\u5347\u7F16\u8BD1\u6027\u80FD\uFF1B</p></li><li><p>\u4F7F\u7528 <code>dev-server</code> / <code>\u6A21\u5757\u70ED\u66FF\u6362 (HMR)</code> \u63D0\u5347\u5F00\u53D1\u4F53\u9A8C\uFF1B</p><ul><li>\u76D1\u542C\u6587\u4EF6\u53D8\u52A8 <code>\u5FFD\u7565</code> <strong>node_modules</strong> \u76EE\u5F55\u80FD\u6709\u6548\u63D0\u9AD8\u76D1\u542C\u65F6\u7684\u7F16\u8BD1\u6548\u7387\uFF1B</li></ul></li><li><p><strong>\u7F29\u5C0F\u7F16\u8BD1\u8303\u56F4</strong>:</p><ul><li><p><code>modules</code>: \u6307\u5B9A\u6A21\u5757\u8DEF\u5F84\uFF0C\u51CF\u5C11\u9012\u5F52\u641C\u7D22\uFF1B</p></li><li><p><code>mainFields</code>: \u6307\u5B9A\u5165\u53E3\u6587\u4EF6\u63CF\u8FF0\u5B57\u6BB5\uFF0C\u51CF\u5C11\u641C\u7D22\uFF1B</p></li><li><p><code>noParse</code>: \u907F\u514D\u5BF9\u975E\u6A21\u5757\u5316\u6587\u4EF6\u7684\u52A0\u8F7D\uFF1B</p></li><li><p><code>includes</code>/<code>exclude</code>: \u6307\u5B9A\u641C\u7D22\u8303\u56F4/\u6392\u9664\u4E0D\u5FC5\u8981\u7684\u641C\u7D22\u8303\u56F4\uFF1B</p></li><li><p><code>alias</code>: \u7F13\u5B58\u76EE\u5F55\uFF0C\u907F\u514D\u91CD\u590D\u5BFB\u5740\uFF1B</p></li></ul></li><li><p><code>babel-loader</code>:</p><ul><li><p><code>\u5FFD\u7565node_moudles</code>\uFF0C\u907F\u514D\u7F16\u8BD1\u7B2C\u4E09\u65B9\u5E93\u4E2D\u5DF2\u7ECF\u88AB\u7F16\u8BD1\u8FC7\u7684\u4EE3\u7801\uFF1B</p></li><li><p><code>\u4F7F\u7528cacheDirectory</code>\uFF0C\u53EF\u4EE5\u7F13\u5B58\u7F16\u8BD1\u7ED3\u679C\uFF0C\u907F\u514D\u591A\u6B21\u91CD\u590D\u7F16\u8BD1\uFF1B</p></li></ul></li><li><p><strong>\u591A\u8FDB\u7A0B\u5E76\u53D1</strong>:</p><ul><li><p><code>webpack-parallel-uglify-plugin</code>: \u53EF\u591A\u8FDB\u7A0B\u5E76\u53D1<code>\u538B\u7F29</code> js \u6587\u4EF6\uFF0C\u63D0\u9AD8\u538B\u7F29\u901F\u5EA6\uFF1B</p></li><li><p><code>HappyPack</code>: \u591A\u8FDB\u7A0B\u5E76\u53D1\u6587\u4EF6\u7684 <code>Loader</code> \u89E3\u6790\uFF1B</p></li></ul></li><li><p><strong>\u7B2C\u4E09\u65B9\u5E93\u6A21\u5757\u7F13\u5B58</strong>:</p><ul><li><code>DLLPlugin</code> \u548C <code>DLLReferencePlugin</code> \u53EF\u4EE5\u63D0\u524D\u8FDB\u884C\u6253\u5305\u5E76\u7F13\u5B58\uFF0C\u907F\u514D\u6BCF\u6B21\u90FD\u91CD\u65B0\u7F16\u8BD1\uFF1B</li></ul></li><li><p><strong>\u4F7F\u7528\u5206\u6790</strong>:</p><ul><li><p><code>Webpack Analyse</code> / <code>webpack-bundle-analyzer</code> \u5BF9\u6253\u5305\u540E\u7684\u6587\u4EF6\u8FDB\u884C\u5206\u6790\uFF0C\u5BFB\u627E\u53EF\u4F18\u5316\u7684\u5730\u65B9\uFF1B</p></li><li><p>\u914D\u7F6E<code>profile\uFF1Atrue</code>\uFF0C\u5BF9\u5404\u4E2A\u7F16\u8BD1\u9636\u6BB5\u8017\u65F6\u8FDB\u884C\u76D1\u63A7\uFF0C\u5BFB\u627E\u8017\u65F6\u6700\u591A\u7684\u5730\u65B9\uFF1B</p></li></ul></li><li><p><strong>source-map</strong>:</p><ul><li><p>\u5F00\u53D1: <code>cheap-module-eval-source-map</code>\uFF1B</p></li><li><p>\u751F\u4EA7: <code>hidden-source-map</code>\uFF1B</p></li></ul></li></ul></li></ul>`,33),t=[o];function l(c,i){return s(),a("div",null,t)}var r=n(p,[["render",l],["__file","baseWebpack.html.vue"]]);export{r as default};
