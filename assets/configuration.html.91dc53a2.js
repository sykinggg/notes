import{_ as n,o as s,c as a,a as e}from"./app.e9fd9ffa.js";const p={},t=e(`<h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p><strong>webpack \u7684\u914D\u7F6E\u6587\u4EF6\u662F JavaScript \u6587\u4EF6\uFF0C\u6587\u4EF6\u5185\u5BFC\u51FA\u4E86\u4E00\u4E2A webpack <code>\u914D\u7F6E\u7684\u5BF9\u8C61</code></strong>\u3002 webpack \u4F1A\u6839\u636E\u8BE5\u914D\u7F6E\u5B9A\u4E49\u7684\u5C5E\u6027\u8FDB\u884C\u5904\u7406\u3002</p><p>\u7531\u4E8E webpack \u9075\u5FAA CommonJS \u6A21\u5757\u89C4\u8303\uFF0C\u56E0\u6B64\uFF0C\u53EF\u4EE5\u5728\u914D\u7F6E\u4E2D\u4F7F\u7528\uFF1A</p><ul><li><p>\u901A\u8FC7 <code>require(...)</code> \u5F15\u5165\u5176\u4ED6\u6587\u4EF6</p></li><li><p>\u901A\u8FC7 <code>require(...)</code> \u4F7F\u7528 npm \u4E0B\u8F7D\u7684\u5DE5\u5177\u51FD\u6570</p></li><li><p>\u4F7F\u7528 JavaScript \u63A7\u5236\u6D41\u8868\u8FBE\u5F0F\uFF0C\u4F8B\u5982 <code>?:</code> \u64CD\u4F5C\u7B26</p></li><li><p>\u5BF9 value \u4F7F\u7528\u5E38\u91CF\u6216\u53D8\u91CF\u8D4B\u503C</p></li><li><p>\u7F16\u5199\u5E76\u6267\u884C\u51FD\u6570\uFF0C\u751F\u6210\u90E8\u5206\u914D\u7F6E</p></li></ul><p><strong>\u4F46\u8FD8\u662F\u5E94\u907F\u514D\u5982\u4E0B\u64CD\u4F5C\uFF1A</strong></p><ul><li><p>\u5F53\u4F7F\u7528 webpack CLI \u5DE5\u5177\u65F6\uFF0C\u8BBF\u95EE CLI \u53C2\u6570</p></li><li><p>\u5BFC\u51FA\u4E0D\u786E\u5B9A\u7684\u7ED3\u679C\uFF08\u4E24\u6B21\u8C03\u7528 webpack \u5E94\u4EA7\u751F\u76F8\u540C\u7684\u8F93\u51FA\u6587\u4EF6\uFF09</p></li><li><p>\u7F16\u5199\u8D85\u957F\u7684\u914D\u7F6E\uFF08\u5E94\u5C06\u914D\u7F6E\u6587\u4EF6\u62C6\u5206\u6210\u591A\u4E2A\uFF09</p></li></ul><h2 id="\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> <strong>\u57FA\u672C\u914D\u7F6E</strong></h2><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./foo.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;foo.bundle.js&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u4E0D\u540C\u7684\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E0D\u540C\u7684\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> <strong>\u4F7F\u7528\u4E0D\u540C\u7684\u914D\u7F6E\u6587\u4EF6</strong></h2><p>\u5982\u679C\u51FA\u4E8E\u67D0\u4E9B\u539F\u56E0\uFF0C\u9700\u8981\u6839\u636E\u7279\u5B9A\u60C5\u51B5\u4F7F\u7528\u4E0D\u540C\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7\u5728\u547D\u4EE4\u884C\u4E2D\u4F7F\u7528 <code>--config flag</code> \u4FEE\u6539\u6B64\u914D\u7F6E\u6587\u4EF6\u540D\u79F0\u3002</p><blockquote><p>package.json</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config prod.config.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> <strong>\u9009\u9879</strong></h2><blockquote><p><em>\u6CE8\u610F\u6574\u4E2A\u914D\u7F6E\u4E2D\u4F7F\u7528 Node \u5185\u7F6E\u7684 <code>path \u6A21\u5757</code>\uFF0C\u5E76\u5728\u5B83\u524D\u9762\u52A0\u4E0A <code>__dirname</code>\u8FD9\u4E2A\u5168\u5C40\u53D8\u91CF\u3002\u53EF\u4EE5\u9632\u6B62\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\u4E4B\u95F4\u7684\u6587\u4EF6\u8DEF\u5F84\u95EE\u9898\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4F7F\u76F8\u5BF9\u8DEF\u5F84\u6309\u7167\u9884\u671F\u5DE5\u4F5C\u3002</em></p></blockquote><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">,</span> <span class="token comment">// &quot;production&quot; | &quot;development&quot; | &quot;none&quot;</span>
  <span class="token comment">// \u9009\u62E9\u6A21\u5F0F\u544A\u8BC9webpack\u76F8\u5E94\u5730\u4F7F\u7528\u5176\u5185\u7F6E\u4F18\u5316\u3002</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./app/entry&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string | object | array</span>
  <span class="token comment">// \u9ED8\u8BA4\u4E3A ./src</span>
  <span class="token comment">// \u8FD9\u91CC\u5E94\u7528\u7A0B\u5E8F\u5F00\u59CB\u6267\u884C</span>
  <span class="token comment">// webpack \u5F00\u59CB\u6253\u5305</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// webpack \u5982\u4F55\u8F93\u51FA\u7ED3\u679C\u7684\u76F8\u5173\u9009\u9879</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// string (default)</span>
    <span class="token comment">// \u6240\u6709\u8F93\u51FA\u6587\u4EF6\u7684\u76EE\u6807\u8DEF\u5F84</span>
    <span class="token comment">// \u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF08\u4F7F\u7528 Node.js \u7684 path \u6A21\u5757\uFF09</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[name].js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string (default)</span>
    <span class="token comment">// entry chunk \u7684\u6587\u4EF6\u540D\u6A21\u677F</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;/notes/assets/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
    <span class="token comment">// \u8F93\u51FA\u89E3\u6790\u6587\u4EF6\u7684\u76EE\u5F55\uFF0Curl \u76F8\u5BF9\u4E8E HTML \u9875\u9762</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u8FD9\u91CC\u6709\u4E00\u79CD\u65E7\u7684\u8BED\u6CD5\u5F62\u5F0F\u53EF\u4EE5\u4F7F\u7528\uFF08\u70B9\u51FB\u663E\u793A\uFF09</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;umd&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u901A\u7528\u6A21\u5757\u5B9A\u4E49</span>
      <span class="token comment">// \u5BFC\u51FA\u5E93\u7684\u7C7B\u578B</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;MyLibrary&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string | string[]</span>
      <span class="token comment">// \u5BFC\u51FA\u5E93\u7684\u540D\u79F0</span>

      <span class="token comment">/* \u9AD8\u7EA7\u8F93\u51FA\u5E93\u914D\u7F6E */</span>
      <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&quot;[name].js&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&quot;[id].js&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&quot;[contenthash].js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u957F\u6548\u7F13\u5B58</span>
      <span class="token comment">// \u5176\u4ED6\u5757\u7684\u6587\u4EF6\u540D\u6A21\u677F</span>
      <span class="token literal-property property">assetModuleFilename</span><span class="token operator">:</span> <span class="token string">&quot;[hash][ext][query]&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
      <span class="token comment">// \u8D44\u4EA7\u6A21\u5757\u7684\u6587\u4EF6\u540D\u6A21\u677F</span>
      <span class="token literal-property property">webassemblyModuleFilename</span><span class="token operator">:</span> <span class="token string">&quot;[hash].module.wasm&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
      <span class="token comment">// wasm\u6A21\u5757\u7684\u6587\u4EF6\u540D\u6A21\u677F</span>
      <span class="token literal-property property">sourceMapFilename</span><span class="token operator">:</span> <span class="token string">&quot;[file].map&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
      <span class="token literal-property property">sourceMapFilename</span><span class="token operator">:</span> <span class="token string">&quot;sourcemaps/[file].map&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
      <span class="token comment">// source map location \u7684\u6587\u4EF6\u540D\u6A21\u677F</span>
      <span class="token literal-property property">devtoolModuleFilenameTemplate</span><span class="token operator">:</span> <span class="token string">&quot;webpack:///[resource-path]&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
      <span class="token comment">// devtool \u6A21\u5757\u7684\u6587\u4EF6\u540D\u6A21\u677F</span>
      <span class="token literal-property property">devtoolFallbackModuleFilenameTemplate</span><span class="token operator">:</span> <span class="token string">&quot;webpack:///[resource-path]?[hash]&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
      <span class="token comment">// devtool \u6A21\u5757\u7684\u6587\u4EF6\u540D\u6A21\u677F\uFF08\u7528\u4E8E\u51B2\u7A81\uFF09</span>
      <span class="token literal-property property">crossOriginLoading</span><span class="token operator">:</span> <span class="token string">&quot;use-credentials&quot;</span><span class="token punctuation">,</span> <span class="token comment">// enum</span>
      <span class="token literal-property property">crossOriginLoading</span><span class="token operator">:</span> <span class="token string">&quot;anonymous&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">crossOriginLoading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6307\u5B9A\u8FD0\u884C\u65F6\u5982\u4F55\u53D1\u51FA\u8DE8\u6E90\u8BF7\u6C42</span>
      <span class="token literal-property property">importFunctionName</span><span class="token operator">:</span> <span class="token string">&quot;import&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string (default)</span>
      <span class="token comment">// \u4F7F\u7528import\uFF08\uFF09\u65F6\u8C03\u7528\u7684\u8868\u8FBE\u5F0F</span>
      <span class="token comment">// \u53EF\u4EE5\u66F4\u6362\u4EE5\u4F7F\u7528polyfills</span>
      <span class="token literal-property property">importMetaName</span><span class="token operator">:</span> <span class="token string">&quot;i<wbr>mport.meta&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string (default)</span>
      <span class="token comment">// \u4F7F\u7528i<wbr>mport.meta\u65F6\u4F7F\u7528\u7684\u8868\u8FBE\u5F0F</span>
      <span class="token comment">// \u53EF\u4EE5\u66F4\u6362\u4EE5\u4F7F\u7528polyfills</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">uniqueName</span><span class="token operator">:</span> <span class="token string">&quot;my-application&quot;</span><span class="token punctuation">,</span> <span class="token comment">// (\u9ED8\u8BA4\u4E3Apackage.json\u201C name\u201D)</span>
    <span class="token comment">// \u6B64\u7248\u672C\u7684\u552F\u4E00\u540D\u79F0\uFF0C\u4EE5\u907F\u514D\u4E0E\u540C\u4E00HTML\u4E2D\u7684\u5176\u4ED6\u7248\u672C\u51B2\u7A81</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;my-config&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u914D\u7F6E\u540D\u79F0\uFF0C\u663E\u793A\u5728\u8F93\u51FA\u4E2D</span>

    <span class="token comment">/* \u9AD8\u7EA7\u8F93\u51FA\u914D\u7F6E */</span>
     <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&quot;[name].js&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&quot;[id].js&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&quot;[contenthash].js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u957F\u6548\u7F13\u5B58</span>
      <span class="token comment">// \u5176\u4ED6\u5757\u7684\u6587\u4EF6\u540D\u6A21\u677F</span>
      <span class="token literal-property property">assetModuleFilename</span><span class="token operator">:</span> <span class="token string">&quot;[hash][ext][query]&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
      <span class="token comment">// \u8D44\u4EA7\u6A21\u5757\u7684\u6587\u4EF6\u540D\u6A21\u677F</span>
      <span class="token literal-property property">webassemblyModuleFilename</span><span class="token operator">:</span> <span class="token string">&quot;[hash].module.wasm&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
      <span class="token comment">// wasm\u6A21\u5757\u7684\u6587\u4EF6\u540D\u6A21\u677F</span>
      <span class="token literal-property property">sourceMapFilename</span><span class="token operator">:</span> <span class="token string">&quot;[file].map&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
      <span class="token literal-property property">sourceMapFilename</span><span class="token operator">:</span> <span class="token string">&quot;sourcemaps/[file].map&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
      <span class="token comment">// source map location \u7684\u6587\u4EF6\u540D\u6A21\u677F</span>
      <span class="token literal-property property">devtoolModuleFilenameTemplate</span><span class="token operator">:</span> <span class="token string">&quot;webpack:///[resource-path]&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
      <span class="token comment">// devtool \u6A21\u5757\u7684\u6587\u4EF6\u540D\u6A21\u677F</span>
      <span class="token literal-property property">devtoolFallbackModuleFilenameTemplate</span><span class="token operator">:</span> <span class="token string">&quot;webpack:///[resource-path]?[hash]&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
      <span class="token comment">// devtool \u6A21\u5757\u7684\u6587\u4EF6\u540D\u6A21\u677F\uFF08\u7528\u4E8E\u51B2\u7A81\uFF09</span>
      <span class="token literal-property property">crossOriginLoading</span><span class="token operator">:</span> <span class="token string">&quot;use-credentials&quot;</span><span class="token punctuation">,</span> <span class="token comment">// enum</span>
      <span class="token literal-property property">crossOriginLoading</span><span class="token operator">:</span> <span class="token string">&quot;anonymous&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">crossOriginLoading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6307\u5B9A\u8FD0\u884C\u65F6\u5982\u4F55\u53D1\u51FA\u8DE8\u6E90\u8BF7\u6C42</span>
      <span class="token literal-property property">importFunctionName</span><span class="token operator">:</span> <span class="token string">&quot;import&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string (default)</span>
      <span class="token comment">// \u4F7F\u7528import\uFF08\uFF09\u65F6\u8C03\u7528\u7684\u8868\u8FBE\u5F0F</span>
      <span class="token comment">// \u53EF\u4EE5\u66F4\u6362\u4EE5\u4F7F\u7528polyfills</span>
      <span class="token literal-property property">importMetaName</span><span class="token operator">:</span> <span class="token string">&quot;i<wbr>mport.meta&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string (default)</span>
      <span class="token comment">// \u4F7F\u7528i<wbr>mport.meta\u65F6\u4F7F\u7528\u7684\u8868\u8FBE\u5F0F</span>
      <span class="token comment">// \u53EF\u4EE5\u66F4\u6362\u4EE5\u4F7F\u7528polyfills</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6A21\u5757\u914D\u7F6E\u76F8\u5173</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// \u6A21\u5757\u89C4\u5219\uFF08\u914D\u7F6E loader\u3001\u89E3\u6790\u5668\u7B49\u9009\u9879\uFF09</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// Conditions \u6761\u4EF6:</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.jsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app/demo-files&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">//\u8FD9\u4E9B\u662F\u5339\u914D\u6761\u4EF6\uFF0C\u6BCF\u4E2A\u6761\u4EF6\u90FD\u63A5\u53D7\u6B63\u5219\u8868\u8FBE\u5F0F\u6216\u5B57\u7B26\u4E32</span>
        <span class="token comment">//\u6D4B\u8BD5\u548C\u5305\u542B\u884C\u4E3A\u76F8\u540C\uFF0C\u4E24\u8005\u5FC5\u987B\u5339\u914D</span>
        <span class="token comment">//\u6392\u9664\u9879\u4E0D\u5F97\u5339\u914D\uFF08\u4F18\u5148\u4E8E\u6D4B\u8BD5\u5E76\u5305\u542B\uFF09</span>
        <span class="token comment">//\u6700\u4F73\u505A\u6CD5\uFF1A</span>
        <span class="token comment">//-\u4EC5\u5728\u6D4B\u8BD5\u4E2D\u548C\u6587\u4EF6\u540D\u5339\u914D\u4E2D\u4F7F\u7528RegExp</span>
        <span class="token comment">//-\u5728include\u548Cexclude\u4E2D\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u6570\u7EC4\u4EE5\u5339\u914D\u5B8C\u6574\u8DEF\u5F84</span>
        <span class="token comment">//-\u5C3D\u91CF\u907F\u514D\u6392\u9664\uFF0C\u800C\u5E0C\u671B\u5305\u62EC</span>
        <span class="token comment">//\u6BCF\u4E2A\u6761\u4EF6\u8FD8\u53EF\u4EE5\u63A5\u6536\u5177\u6709\u201C and\u201D\uFF0C\u201C or\u201D\u6216\u201C not\u201D\u5C5E\u6027\u7684\u5BF9\u8C61</span>
        <span class="token comment">//\u8FD9\u662F\u6761\u4EF6\u6570\u7EC4\u3002</span>
        <span class="token literal-property property">issuer</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">issuer</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">issuer</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">and</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">issuer</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">or</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">issuer</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">not</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">issuer</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// like &quot;or&quot;</span>
        <span class="token comment">// \u53D1\u884C\u4EBA\u7684\u6761\u4EF6\uFF08\u8FDB\u53E3\u6765\u6E90\uFF09</span>
        <span class="token comment">/* \u9AD8\u7EA7\u6761\u4EF6 */</span>
        <span class="token comment">// https://webpack.docschina.org/configuration/#</span>

        <span class="token comment">// Actions \u64CD\u4F5C:</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5E94\u8BE5\u5E94\u7528\u7684 loader\uFF0C\u5B83\u76F8\u5BF9\u4E0A\u4E0B\u6587\u89E3\u6790</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;es2015&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// options for the loader \u88C5\u8F7D\u673A\u7684\u9009\u9879</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// \u5E94\u7528\u591A\u4E2A\u52A0\u8F7D\u7A0B\u5E8F\u548C\u9009\u9879</span>
          <span class="token string">&quot;htmllint-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;html-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// ...</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;javascript/auto&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6307\u5B9A\u6A21\u5757\u7C7B\u578B</span>

        <span class="token comment">/* Advanced actions  */</span>
        <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&quot;pre&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6807\u8BB0\u4EE5\u5E94\u7528\u8FD9\u4E9B\u89C4\u5219\uFF0C\u5373\u4F7F\u5B83\u4EEC\u88AB\u8986\u76D6</span>
        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u751F\u6210\u5668\u7684\u9009\u9879\uFF08\u53D6\u51B3\u4E8E\u6A21\u5757\u7C7B\u578B\uFF09</span>
        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u89E3\u6790\u5668\u7684\u9009\u9879\uFF08\u53D6\u51B3\u4E8E\u6A21\u5757\u7C7B\u578B\uFF09</span>
        <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u89E3\u51B3\u9009\u9879\uFF08\u4E0E\u914D\u7F6E\u4E2D\u7684\u201Cresolve\u201D\u76F8\u540C\uFF09</span>
        <span class="token literal-property property">sideEffects</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// boolean</span>
        <span class="token comment">// \u8986\u76D6package.json\u4E2D\u7684\u201CsideEffects\u201D</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">oneOf</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// ... (rules)</span>
        <span class="token punctuation">]</span>
        <span class="token comment">// \u4EC5\u4F7F\u7528\u8FD9\u4E9B\u5D4C\u5957\u89C4\u5219\u4E4B\u4E00</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// ... (conditions)</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// ... (rules)</span>
        <span class="token punctuation">]</span>
        <span class="token comment">// \u4F7F\u7528\u6240\u6709\u8FD9\u4E9B\u5D4C\u5957\u89C4\u5219\uFF08\u4E0E\u6761\u4EF6\u7ED3\u5408\u4F7F\u7528\uFF09</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>


    <span class="token comment">/* \u9AD8\u7EA7\u6A21\u5757\u914D\u7F6E */</span>
    <span class="token literal-property property">noParse</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">special-library\\.js$</span><span class="token regex-delimiter">/</span></span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u89E3\u6790\u8FD9\u91CC\u7684\u6A21\u5757</span>
    <span class="token literal-property property">unknownContextRequest</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">unknownContextRecursive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">unknownContextRegExp</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\.\\/.*$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">unknownContextCritical</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">exprContextRequest</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">exprContextRegExp</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\.\\/.*$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">exprContextRecursive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">exprContextCritical</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wrappedContextRegExp</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">wrappedContextRecursive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wrappedContextCritical</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6307\u5B9A\u52A8\u6001\u8BF7\u6C42\u7684\u9ED8\u8BA4\u884C\u4E3A</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u89E3\u51B3\u6A21\u5757\u8BF7\u6C42\u7684\u9009\u9879</span>
    <span class="token comment">// (\u4E0D\u9002\u7528\u4E8E\u88C5\u8F7D\u673A\u7684\u89E3\u51B3)</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u67E5\u627E\u6A21\u5757\u7684\u76EE\u5F55\uFF08\u6309\u987A\u5E8F\uFF09</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.jsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.css&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4F7F\u7528\u7684\u6269\u5C55\u540D</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6A21\u5757\u540D\u79F0\u522B\u540D\u5217\u8868</span>
      <span class="token comment">// \u76F8\u5BF9\u4E8E\u5F53\u524D\u4E0A\u4E0B\u6587\u5BFC\u5165\u522B\u540D</span>
      <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;new-module&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u522B\u540D\uFF1A&quot;module&quot; -&gt; &quot;new-module&quot; \u548C &quot;module/path/file&quot; -&gt; &quot;new-module/path/file&quot;</span>
      <span class="token string-property property">&quot;only-module$&quot;</span><span class="token operator">:</span> <span class="token string">&quot;new-module&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u522B\u540D &quot;only-module&quot; -&gt; &quot;new-module&quot;\uFF0C\u4F46\u4E0D\u5339\u914D &quot;only-module/path/file&quot; -&gt; &quot;new-module/path/file&quot;</span>
      <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app/third/module.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// alias &quot;module&quot; -&gt; &quot;./app/third/module.js&quot; and &quot;module/file&quot; results in error</span>
      <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app/third&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// alias &quot;module&quot; -&gt; &quot;./app/third&quot; and &quot;module/file&quot; -&gt; &quot;./app/third/file&quot;</span>
      <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app/module.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app/alternative-module.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// alias &quot;./app/module.js&quot; -&gt; &quot;./app/alternative-module.js&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">/* \u53EF\u4F9B\u9009\u62E9\u7684\u522B\u540D\u8BED\u6CD5\uFF08\u70B9\u51FB\u5C55\u793A\uFF09 */</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u65E7\u7684 request</span>
        <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">&quot;new-module&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u65B0\u7684 request</span>
        <span class="token literal-property property">onlyModule</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token comment">// \u5982\u679C\u4E3A true\uFF0C\u53EA\u6709 &quot;module&quot; \u662F\u522B\u540D</span>
        <span class="token comment">// \u5982\u679C\u4E3A false\uFF0C&quot;module/inner/path&quot; \u4E5F\u662F\u522B\u540D</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">/* \u9AD8\u7EA7\u89E3\u6790\u9009\u9879\uFF08\u70B9\u51FB\u5C55\u793A\uFF09 */</span>
    <span class="token literal-property property">conditionNames</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;myCompanyCondition&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u63CF\u8FF0\u6587\u4EF6\u4E2D\u7528\u4E8E\u201C\u5BFC\u51FA\u201D\u548C\u201C\u5BFC\u5165\u201D\u5B57\u6BB5\u7684\u6761\u4EF6</span>
    <span class="token literal-property property">roots</span><span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app/root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u89E3\u51B3\u670D\u52A1\u5668\u76F8\u5BF9\u8BF7\u6C42\u7684\u4F4D\u7F6E\uFF08\u4EE5\u201C /\u201D\u5F00\u5934\uFF09</span>
    <span class="token comment">// \u4EC5\u5F53\u8BF7\u6C42\u4E0D\u80FD\u89E3\u6790\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\u65F6\uFF0C\u624D\u5E94\u7528\u6B64\u884C\u4E3A</span>
    <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;events&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;events.js&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0E\u522B\u540D\u76F8\u4F3C\uFF0C\u4F46\u4EC5\u5728\u6B63\u5E38\u89E3\u6790\u5931\u8D25\u65F6\u9002\u7528</span>
    <span class="token literal-property property">mainFields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4ECE\u63CF\u8FF0\u6587\u4EF6\u8BFB\u53D6\u7684\u5C5E\u6027</span>
    <span class="token comment">// \u5F53\u8BF7\u6C42\u6587\u4EF6\u5939\u65F6</span>
    <span class="token literal-property property">restrictions</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u6210\u529F\u89E3\u51B3\uFF0C\u7ED3\u679C\u5FC5\u987B\u7B26\u5408\u8FD9\u4E9B\u6761\u4EF6</span>
    <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// boolean</span>
    <span class="token comment">// \u542F\u7528\u5B89\u5168\u7684\u89E3\u6790\u7F13\u5B58</span>
    <span class="token comment">// \u8FD9\u662F\u5B89\u5168\u7684\uFF0C\u56E0\u4E3A\u5B83\u53EF\u4EE5\u8DDF\u8E2A\u5E76\u9A8C\u8BC1\u6240\u6709\u89E3\u51B3\u7684\u4F9D\u8D56\u5173\u7CFB</span>
    <span class="token literal-property property">unsafeCache</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">unsafeCache</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5BF9\u5DF2\u89E3\u51B3\u7684\u8BF7\u6C42\u542F\u7528\u4E0D\u5B89\u5168\u7684\u7F13\u5B58</span>
    <span class="token comment">// \u8FD9\u662F\u4E0D\u5B89\u5168\u7684\uFF0C\u56E0\u4E3A\u6CA1\u6709\u9A8C\u8BC1</span>
    <span class="token comment">// \u4F46\u662F\u6027\u80FD\u63D0\u5347\u786E\u5B9E\u5F88\u5927</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5E94\u7528\u4E8E\u89E3\u6790\u5668\u7684\u5176\u4ED6\u63D2\u4EF6</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">performance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">hints</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u679A\u4E3E</span>
    <span class="token literal-property property">maxAssetSize</span><span class="token operator">:</span> <span class="token number">200000</span><span class="token punctuation">,</span> <span class="token comment">// \u6574\u6570\u7C7B\u578B\uFF08\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF09</span>
    <span class="token literal-property property">maxEntrypointSize</span><span class="token operator">:</span> <span class="token number">400000</span><span class="token punctuation">,</span> <span class="token comment">// \u6574\u6570\u7C7B\u578B\uFF08\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF09</span>
    <span class="token function-variable function">assetFilter</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">assetFilename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u63D0\u4F9B\u8D44\u6E90\u6587\u4EF6\u540D\u7684\u65AD\u8A00\u51FD\u6570</span>
      <span class="token keyword">return</span> assetFilename<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;.css&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> assetFilename<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&quot;source-map&quot;</span><span class="token punctuation">,</span> <span class="token comment">// enum</span>
  <span class="token comment">// \u901A\u8FC7\u4E3A\u6D4F\u89C8\u5668\u8C03\u8BD5\u5DE5\u5177\u63D0\u4F9B\u6781\u5176\u8BE6\u7EC6\u7684\u6E90\u6620\u5C04\u7684\u5143\u4FE1\u606F\u6765\u589E\u5F3A\u8C03\u8BD5\u80FD\u529B\uFF0C</span>
  <span class="token comment">// \u4F46\u4F1A\u727A\u7272\u6784\u5EFA\u901F\u5EA6\u3002</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> __dirname<span class="token punctuation">,</span> <span class="token comment">// string\uFF08\u7EDD\u5BF9\u8DEF\u5F84\uFF01\uFF09</span>
  <span class="token comment">// webpack \u7684\u4E3B\u76EE\u5F55</span>
  <span class="token comment">// entry \u548C module.rules.loader \u9009\u9879</span>
  <span class="token comment">// \u90FD\u76F8\u5BF9\u4E8E\u6B64\u76EE\u5F55\u89E3\u6790</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;web&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u679A\u4E3E</span>
  <span class="token comment">// \u6346\u7ED1\u8F6F\u4EF6\u5E94\u5728\u5176\u4E2D\u8FD0\u884C\u7684\u73AF\u5883</span>
  <span class="token comment">// \u66F4\u6539\u5757\u52A0\u8F7D\u884C\u4E3A\uFF0C\u53EF\u7528\u7684\u5916\u90E8\u6A21\u5757</span>
  <span class="token comment">// \u5E76\u751F\u6210\u4EE3\u7801\u6837\u5F0F</span>
  <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^@angular</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E0D\u8981\u5173\u6CE8/\u6346\u7ED1\u8FD9\u4E9B\u6A21\u5757\uFF0C\u800C\u662F\u5728\u8FD0\u884C\u65F6\u4ECE\u73AF\u5883\u4E2D\u8BF7\u6C42\u5B83\u4EEC</span>
  <span class="token literal-property property">externalsType</span><span class="token operator">:</span> <span class="token string">&quot;var&quot;</span><span class="token punctuation">,</span> <span class="token comment">// (\u9ED8\u8BA4\u4E3Aoutput.library.type)</span>
  <span class="token comment">// \u5916\u90E8\u7C7B\u578B\uFF0C\u672A\u5728\u5916\u90E8\u4E2D\u5185\u8054\u6307\u5B9A\u65F6</span>
  <span class="token literal-property property">externalsPresets</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5916\u90E8\u9884\u8BBE</span>
  <span class="token literal-property property">ignoreWarnings</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">warning</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">stats</span><span class="token operator">:</span> <span class="token string">&quot;errors-only&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">stats</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4F7F\u60A8\u53EF\u4EE5\u7CBE\u786E\u63A7\u5236\u663E\u793A\u54EA\u4E9B\u6346\u7ED1\u8F6F\u4EF6\u4FE1\u606F</span>
    <span class="token literal-property property">preset</span><span class="token operator">:</span> <span class="token string">&quot;errors-only&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7EDF\u8BA1\u9884\u8BBE</span>

    <span class="token comment">/* \u9AD8\u7EA7\u5168\u5C40\u8BBE\u7F6E */</span>
    <span class="token literal-property property">all</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F00\u542F\u6216\u5173\u95ED\u6240\u6709\u6807\u5FD7</span>
    <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F00\u542F\u548C\u5173\u95ED\u989C\u8272</span>
    <span class="token literal-property property">context</span><span class="token operator">:</span> __dirname<span class="token punctuation">,</span>
    <span class="token comment">// \u6240\u6709\u8DEF\u5F84\u90FD\u5C06\u76F8\u5BF9\u4E8E\u6B64\u76EE\u5F55</span>
    <span class="token literal-property property">ids</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u8F93\u51FA\u4E2D\u5305\u542B\u6A21\u5757ID\u548C\u5757ID</span>

    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u8F93\u51FA\u4E2D\u5305\u62EC--env\u7684\u503C</span>
    <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u8F93\u51FA\u4E2D\u5305\u62EC\u7EDD\u5BF9\u8F93\u51FA\u8DEF\u5F84</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u8F93\u51FA\u4E2D\u5305\u542B\u516C\u5171\u8DEF\u5F84</span>

    <span class="token literal-property property">assets</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u8F93\u51FA\u4E2D\u7684\u8D44\u4EA7\u6E05\u5355</span>
    
    <span class="token comment">/* Advanced assets settings */</span>

    <span class="token literal-property property">entrypoints</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u5165\u53E3\u70B9\u5217\u8868</span>
    <span class="token literal-property property">chunkGroups</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u547D\u540D\u5757\u7EC4\u5217\u8868</span>

    <span class="token comment">/* \u9AD8\u7EA7\u5757\u7EC4\u8BBE\u7F6E */</span>
    <span class="token literal-property property">chunkGroupAuxiliary</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u5165\u53E3\u70B9/\u7EC4\u7684\u8F85\u52A9\u8D44\u4EA7</span>
    chunkGroupChildren
    <span class="token comment">// \u663E\u793A\u5165\u53E3\u70B9/\u5757\u7EC4\u7684\u5B50\u5757\u7EC4</span>
    <span class="token literal-property property">chunkGroupMaxAssets</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8FBE\u5230\u6B64\u9650\u5236\u65F6\uFF0C\u6298\u53E0\u7EC4\u5757\u8D44\u4EA7\u5217\u8868</span>

    <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u8F93\u51FA\u4E2D\u7684\u5757\u5217\u8868</span>

    <span class="token comment">/* \u9AD8\u7EA7\u5757\u7EC4\u8BBE\u7F6E */</span>
    <span class="token literal-property property">chunksSort</span><span class="token operator">:</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6392\u5E8F\u5757\u5217\u8868</span>
    <span class="token literal-property property">chunkModules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u6BCF\u4E2A\u5757\u4E2D\u5305\u542B\u7684\u6A21\u5757</span>
    <span class="token literal-property property">chunkOrigins</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u5757\u7684\u6765\u6E90\uFF08\u4E3A\u4EC0\u4E48\u521B\u5EFA\u4E86\u8BE5\u5757\uFF09</span>
    <span class="token literal-property property">chunkRelations</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u4E0E\u5176\u4ED6\u90E8\u5206\u7684\u5173\u7CFB\uFF08\u7236\u6BCD\uFF0C\u5B69\u5B50\uFF0C\u5144\u5F1F\u59D0\u59B9\uFF09</span>
    <span class="token literal-property property">dependentModules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u5C5E\u4E8E\u8BE5\u5757\u4E2D\u5176\u4ED6\u6A21\u5757\u7684\u6A21\u5757</span>

    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u8F93\u51FA\u4E2D\u7684\u6A21\u5757\u5217\u8868</span>

    <span class="token comment">/* \u9AD8\u7EA7\u6A21\u5757\u8BBE\u7F6E */</span>
    <span class="token literal-property property">modulesSpace</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8981\u663E\u793A\u7684\u6A21\u5757\u884C\u6570</span>
    <span class="token literal-property property">nestedModules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u5D4C\u5957\u7684\u6A21\u5757\uFF08\u4E32\u8054\u65F6\uFF09</span>
    <span class="token literal-property property">cachedModules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u5DF2\u7F13\u5B58\u7684\u6A21\u5757</span>
    <span class="token literal-property property">orphanModules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u5728\u4F18\u5316\u56FE\u4E2D\u4E0D\u518D\u5F15\u7528\u7684\u6A21\u5757</span>
    <span class="token literal-property property">excludeModules</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token comment">// \u9690\u85CF\u4E00\u4E9B\u6A21\u5757</span>
    <span class="token literal-property property">reasons</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u4E3A\u4EC0\u4E48\u5305\u542B\u6A21\u5757\u7684\u539F\u56E0</span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5305\u62EC\u6A21\u5757\u7684\u6E90\u4EE3\u7801\uFF08\u4EC5\u5728JSON\u4E2D\uFF09</span>

    <span class="token comment">/* Expert module settings */</span>
     <span class="token literal-property property">modulesSort</span><span class="token operator">:</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6392\u5E8F\u6A21\u5757\u5217\u8868</span>
    <span class="token literal-property property">groupModulesByPath</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6309\u8D44\u6E90\u8DEF\u5F84\u5BF9\u6A21\u5757\u8FDB\u884C\u5206\u7EC4</span>
    <span class="token literal-property property">groupModulesByExtension</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token comment">// \u901A\u8FC7\u6269\u5C55\u5C06\u6A21\u5757\u5206\u7EC4</span>
    <span class="token literal-property property">groupModulesByAttributes</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token comment">// \u6309\u5C5E\u6027\u5206\u7EC4\u6A21\u5757\uFF0C\u4F8B\u5982\u662F\u5426\u5177\u6709\u9519\u8BEF/\u8B66\u544A/\u8D44\u4EA7</span>
    <span class="token comment">// \u6216\u662F\u53EF\u9009\u7684</span>
    <span class="token literal-property property">groupModulesByCacheStatus</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5BF9\u6A21\u5757\u8FDB\u884C\u5206\u7EC4\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u5B83\u4EEC\u662F\u6784\u5EFA\u7684\uFF0C\u751F\u6210\u7684\u4EE3\u7801\u8FD8\u662F</span>
    <span class="token comment">// \u5B83\u4EEC\u901A\u5E38\u662F\u53EF\u7F13\u5B58\u7684</span>
    <span class="token literal-property property">depth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u6A21\u5757\u7684\u6A21\u5757\u56FE\u4E2D\u663E\u793A\u6DF1\u5EA6</span>
    <span class="token literal-property property">moduleAssets</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u6A21\u5757\u5217\u8868\u4E2D\u663E\u793A\u6A21\u5757\u53D1\u51FA\u7684\u8D44\u4EA7</span>
    <span class="token literal-property property">runtimeModules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u6A21\u5757\u5217\u8868\u4E2D\u663E\u793A\u8FD0\u884C\u65F6\u6A21\u5757</span>

    <span class="token comment">/* \u9AD8\u7EA7\u4F18\u5316\u8BBE\u7F6E */</span>
    <span class="token literal-property property">providedExports</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u6A21\u5757\u63D0\u4F9B\u7684\u5BFC\u51FA</span>
    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u6A21\u5757\u4F7F\u7528\u54EA\u4E9B\u5BFC\u51FA</span>
    <span class="token literal-property property">optimizationBailout</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u4FE1\u606F\u4E3A\u4EC0\u4E48\u5BF9\u6A21\u5757\u8FDB\u884C\u4F18\u5316</span>

    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token comment">// \u663E\u793A\u5B50\u7F16\u8BD1\u7684\u7EDF\u8BA1\u4FE1\u606F</span>

    <span class="token literal-property property">logging</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u8F93\u51FA\u65E5\u5FD7</span>
    <span class="token literal-property property">loggingDebug</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">webpack</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u67D0\u4E9B\u8BB0\u5F55\u5668\u7684\u8C03\u8BD5\u7C7B\u578B\u8BB0\u5F55</span>
    <span class="token literal-property property">loggingTrace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u5806\u6808\u8DDF\u8E2A\u4EE5\u8BB0\u5F55\u65E5\u5FD7\u8F93\u51FA\u4E2D\u7684\u8B66\u544A\u548C\u9519\u8BEF</span>

    <span class="token literal-property property">warnings</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token comment">// \u663E\u793A\u8B66\u544A</span>

    <span class="token literal-property property">errors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u9519\u8BEF</span>
    <span class="token literal-property property">errorDetails</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u9519\u8BEF\u7684\u8BE6\u7EC6\u4FE1\u606F</span>
    <span class="token literal-property property">errorStack</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u5185\u90E8\u5806\u6808\u8DDF\u8E2A\u4EE5\u67E5\u627E\u9519\u8BEF</span>
    <span class="token literal-property property">moduleTrace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u6A21\u5757\u8DDF\u8E2A\u4EE5\u67E5\u627E\u9519\u8BEF</span>
    <span class="token comment">// (\u4E3A\u4EC0\u4E48\u5BFC\u81F4\u6A21\u5757\u88AB\u5F15\u7528)</span>

    <span class="token literal-property property">builtAt</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u6458\u8981\u4E2D\u663E\u793A\u65F6\u95F4\u6233</span>
    <span class="token literal-property property">errorsCount</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u6458\u8981\u4E2D\u663E\u793A\u9519\u8BEF\u8BA1\u6570</span>
    <span class="token literal-property property">warningsCount</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u8B66\u544A\u6458\u8981</span>
    <span class="token literal-property property">timings</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6C47\u603B\u663E\u793A\u6784\u5EFA\u65F6\u95F4</span>
    <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u6458\u8981\u4E2D\u7684webpack\u7248\u672C</span>
    <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u6458\u8981\u4E2D\u663E\u793A\u6784\u5EFA\u54C8\u5E0C</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u4EE3\u7406URL\u5230\u540E\u7AEF\u5F00\u53D1\u670D\u52A1\u5668</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// boolean | string | array, \u9759\u6001\u6587\u4EF6\u4F4D\u7F6E</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u7528gzip\u538B\u7F29</span>
    <span class="token literal-property property">historyApiFallback</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5BF9\u4E8E404\u65F6index.html\u4E3Atrue\uFF0C\u591A\u4E2A\u8DEF\u5F84\u4E3A\u5BF9\u8C61</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u70ED\u6A21\u5757\u66F4\u6362\u3002 \u53D6\u51B3\u4E8EHotModuleReplacementPlugin</span>
    <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u81EA\u7B7E\u540D\u4E3Atrue\uFF0C\u8BC1\u4E66\u9881\u53D1\u673A\u6784\u4E3A\u5BF9\u8C61</span>
    <span class="token literal-property property">noInfo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4EC5\u9519\u8BEF\u5E76\u5728\u70ED\u88C5\u65F6\u53D1\u51FA\u8B66\u544A</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">experiments</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">asyncWebAssembly</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// WebAssembly\u4F5C\u4E3A\u5F02\u6B65\u6A21\u5757\uFF08\u5EFA\u8BAE\uFF09</span>
    <span class="token literal-property property">syncWebAssembly</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// WebAssembly\u4F5C\u4E3A\u540C\u6B65\u6A21\u5757\uFF08\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF09</span>
    <span class="token literal-property property">outputModule</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5141\u8BB8\u8F93\u51FAESM</span>
    <span class="token literal-property property">topLevelAwait</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5141\u8BB8\u5728\u6A21\u5757\u8BC4\u4F30\u4E2D\u4F7F\u7528\u7B49\u5F85\uFF08\u5EFA\u8BAE\uFF09</span>
  <span class="token punctuation">}</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5176\u4ED6\u63D2\u4EF6\u5217\u8868</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">chunkIds</span><span class="token operator">:</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E3A\u5757\u751F\u6210ID\u7684\u65B9\u6CD5</span>
    <span class="token literal-property property">moduleIds</span><span class="token operator">:</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E3A\u6A21\u5757\u751F\u6210ID\u7684\u65B9\u6CD5</span>
    <span class="token literal-property property">mangleExports</span><span class="token operator">:</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u91CD\u547D\u540D\u5BFC\u51FA\u540D\u79F0\u4E3A\u77ED\u540D\u79F0</span>
    <span class="token literal-property property">minimize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6700\u5C0F\u5316\u8F93\u51FA\u6587\u4EF6</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">CssMinimizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7528\u4E8E\u8F93\u51FA\u6587\u4EF6\u7684\u6700\u5C0F\u5316\u5668</span>

    <span class="token comment">/* \u9AD8\u7EA7\u4F18\u5316 */</span>
    <span class="token literal-property property">concatenateModules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5C06\u591A\u4E2A\u6A21\u5757\u5408\u5E76\u4E3A\u4E00\u4E2A\u6A21\u5757</span>
    <span class="token literal-property property">emitOnErrors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u53D1\u51FA\u8F93\u51FA\u6587\u4EF6\uFF0C\u5373\u4F7F\u6709\u6784\u5EFA\u9519\u8BEF</span>
    <span class="token literal-property property">flagIncludedChunks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5982\u679C\u5757\u5B8C\u5168\u5305\u542B\u5728\u5176\u4E2D\uFF0C\u8BF7\u907F\u514D\u4E0B\u8F7D</span>
    <span class="token comment">// \u4E00\u4E2A\u5DF2\u7ECF\u52A0\u8F7D\u7684\u5757</span>
    <span class="token literal-property property">innerGraph</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u786E\u5B9A\u7B26\u53F7\u4E4B\u95F4\u6CA1\u6709\u6A21\u5757\u7684\u5F15\u7528</span>
    <span class="token literal-property property">mergeDuplicateChunks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5982\u679C\u76F8\u7B49\u5219\u5408\u5E76\u5757</span>
    <span class="token literal-property property">nodeEnv</span><span class="token operator">:</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6A21\u5757\u5185\u90E8\u7684p<wbr>rocess.env.NODE_ENV\u7684\u503C</span>
    <span class="token literal-property property">portableRecords</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u8BB0\u5F55\u4E2D\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84</span>
    <span class="token literal-property property">providedExports</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u786E\u5B9A\u54EA\u4E9B\u51FA\u53E3\u7531\u6A21\u5757\u627F\u62C5</span>
    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u786E\u5B9A\u6A21\u5757\u4F7F\u7528\u54EA\u4E9B\u5BFC\u51FA\uFF0C\u5E76</span>
    <span class="token comment">// \u5220\u9664\u672A\u4F7F\u7528\u7684</span>
    <span class="token literal-property property">realContentHash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6839\u636E\u5185\u5BB9\u8BA1\u7B97\u8D44\u4EA7\u7684\u5185\u5BB9\u54C8\u5E0C</span>
    <span class="token literal-property property">removeAvailableModules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8FD0\u884C\u989D\u5916\u7684\u901A\u884C\u8BC1\u4EE5\u786E\u5B9A\u5DF2\u7ECF\u5B58\u5728\u7684\u6A21\u5757</span>
    <span class="token comment">// \u7236\u5757\u5E76\u5C06\u5176\u5220\u9664</span>
    <span class="token literal-property property">removeEmptyChunks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5220\u9664\u7A7A\u7684\u5757</span>
    <span class="token literal-property property">runtimeChunk</span><span class="token operator">:</span> <span class="token string">&quot;single&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u66F4\u6539\u8FD0\u884C\u65F6\u4EE3\u7801\u7684\u4F4D\u7F6E</span>
    <span class="token literal-property property">sideEffects</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8DF3\u8FC7\u4F7F\u7528\u91CD\u65B0\u5BFC\u51FA\u65F6\u65E0\u526F\u4F5C\u7528\u7684\u6A21\u5757</span>

    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;my-name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u7528\u7279\u5B9A\u7684\u5B9A\u4E49\u6A21\u5757\u7EC4</span>
          <span class="token comment">// \u7F13\u5B58\u884C\u4E3A</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.sass$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;css/mini-extract&quot;</span><span class="token punctuation">,</span>

          <span class="token comment">/* \u9AD8\u7EA7\u9009\u62E9\u5668 */</span>
          <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&quot;async&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">enforceSizeThreshold</span><span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
          <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">minRemainingSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">maxAsyncRequests</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token literal-property property">maxInitialRequests</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>

          <span class="token comment">/* \u8FDB\u9636\u6548\u679C */</span>
          <span class="token literal-property property">maxAsyncSize</span><span class="token operator">:</span> <span class="token number">200000</span><span class="token punctuation">,</span>
          <span class="token literal-property property">maxInitialSize</span><span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
          <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">200000</span><span class="token punctuation">,</span>
          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;my-name-[contenthash].js&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">idHint</span><span class="token operator">:</span> <span class="token string">&quot;my-name&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">hidePathInfo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">automaticNameDelimiter</span><span class="token operator">:</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token literal-property property">fallbackCacheGroup</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">automaticNameDelimiter</span><span class="token operator">:</span> <span class="token string">&quot;-&quot;</span>
        <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxAsyncSize</span><span class="token operator">:</span> <span class="token number">200000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxInitialSize</span><span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">200000</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>

      <span class="token comment">/* \u9AD8\u7EA7\u9009\u62E9\u5668 */</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u9009\u62E9\u5E94\u8BE5\u4F18\u5316\u7684\u5757</span>
      <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// \u4EC5\u5F53\u4F7F\u7528\u7684\u51FA\u53E3\u76F8\u7B49\u65F6\u624D\u5C06\u6A21\u5757\u89C6\u4E3A\u76F8\u7B49</span>
      <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6A21\u5757\u5FC5\u987B\u4F4D\u4E8E\u7684\u6700\u5C0F\u5757\u6570</span>
      <span class="token literal-property property">enforceSizeThreshold</span><span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
      <span class="token comment">// \u5F53\u6A21\u5757\u7684\u5927\u5C0F\u9075\u5FAA\u6807\u51C6\u65F6\u5FFD\u7565</span>
      <span class="token comment">// \u9AD8\u4E8E\u6B64\u9608\u503C</span>
      <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6A21\u5757\u7684\u5927\u5C0F\u5FC5\u987B\u9AD8\u4E8E\u6B64\u9608\u503C</span>
      <span class="token literal-property property">minRemainingSize</span><span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span>
      <span class="token comment">// \u4ECE\u5355\u4E2A\u5757\u4E2D\u5220\u9664\u6A21\u5757\u65F6</span>
      <span class="token comment">// \u5269\u4F59\u6A21\u5757\u7684\u5927\u5C0F</span>
      <span class="token comment">// \u5FC5\u987B\u9AD8\u4E8E\u6B64\u9608\u503C</span>
      <span class="token literal-property property">maxAsyncRequests</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
      <span class="token literal-property property">maxInitialRequests</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
      <span class="token comment">// \u5355\u4E2A\u6309\u9700\u52A0\u8F7D\u7684\u5E76\u884C\u8BF7\u6C42\u6570</span>
      <span class="token comment">// \u5206\u522B \u5165\u53E3\u70B9\uFF0C\u4F46\u9AD8\u4E8E\u6B64\u9608\u503C</span>

      <span class="token comment">/* \u8FDB\u9636\u6548\u679C */</span>
      <span class="token literal-property property">maxAsyncSize</span><span class="token operator">:</span> <span class="token number">200000</span><span class="token punctuation">,</span>
      <span class="token literal-property property">maxInitialSize</span><span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
      <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">200000</span><span class="token punctuation">,</span>
      <span class="token comment">// \u5F53\u65B0\u5757\u4E2D\u7684\u6A21\u5757\u5927\u5C0F\u5927\u4E8E\u6B64\u503C\u65F6</span>
      <span class="token comment">// \u95E8\u69DB\uFF0C\u8FDB\u4E00\u6B65\u5206\u5272</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[contenthash].js&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u7ED9\u65B0\u5757\u4E00\u4E2A\u4E0D\u540C\u7684\u6587\u4EF6\u540D</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// false | string | (module, chunks, key) =&gt; string</span>
      <span class="token comment">// \u7ED9\u65B0\u5757\u8D77\u4E00\u4E2A\u4E0D\u540C\u7684\u540D\u5B57</span>
      <span class="token comment">// \u4F7F\u7528\u73B0\u6709\u540D\u79F0\u65F6\uFF0C\u5C06\u5408\u5E76\u5757</span>
      <span class="token comment">// non-splitChunks\u5757\u53EA\u80FD\u5728</span>
      <span class="token comment">// \u6240\u6709\u9009\u5B9A\u6A21\u5757\u7684\u7236\u7EA7\u6216\u540C\u7EA7\u5757</span>
      <span class="token literal-property property">hidePathInfo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// \u901A\u8FC7\u201C maxSize\u201D\u5206\u5272\u65F6\u9690\u85CF\u8DEF\u5F84\u4FE1\u606F</span>
      <span class="token literal-property property">automaticNameDelimiter</span><span class="token operator">:</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u4F7F\u7528\u6B64\u5206\u9694\u7B26\u5C06\u539F\u59CB\u540D\u79F0\u4E0E\u8DEF\u5F84\u4FE1\u606F\u5206\u5F00</span>
      <span class="token comment">// \u901A\u8FC7\u201C maxSize\u201D\u62C6\u5206\u65F6</span>

      <span class="token comment">/* \u4E13\u5BB6\u8BBE\u5B9A */</span>
      <span class="token literal-property property">defaultSizeTypes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">]</span>
      <span class="token comment">// \u4F7F\u7528\u6570\u5B57\u8868\u793A\u5C3A\u5BF8\u65F6\uFF0C\u8BF7\u6D4B\u91CF\u4EE5\u4E0B\u5C3A\u5BF8\u7C7B\u578B</span>
      <span class="token comment">// minSize: { javascript: 10000 } \u5141\u8BB8\u66F4\u5177\u4F53</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">/* \u9AD8\u7EA7\u914D\u7F6E */</span>
  <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5411\u52A0\u8F7D\u7A0B\u5E8F\u4E0A\u4E0B\u6587\u6DFB\u52A0\u81EA\u5B9A\u4E49API\u6216\u5C5E\u6027</span>
  <span class="token literal-property property">resolveLoader</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* same as resolve */</span> <span class="token punctuation">}</span>
  <span class="token comment">// \u88C5\u8F7D\u673A\u7684\u5355\u72EC\u89E3\u51B3\u9009\u9879</span>
  <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Polyfill\u548C\u6A21\u62DF\u7A0B\u5E8F\u53EF\u8FD0\u884CNode.js</span>
    <span class="token comment">// \u975E\u8282\u70B9\u73AF\u5883\u4E2D\u7684\u73AF\u5883\u4EE3\u7801\u3002</span>
    <span class="token literal-property property">global</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// boolean</span>
    <span class="token comment">// \u7528output.globalObject\u66FF\u6362\u201C global\u201D</span>
    <span class="token literal-property property">__filename</span><span class="token operator">:</span> <span class="token string">&quot;mock&quot;</span><span class="token punctuation">,</span> <span class="token comment">// boolean | &quot;mock&quot; | &quot;eval-only&quot;</span>
    <span class="token literal-property property">__dirname</span><span class="token operator">:</span> <span class="token string">&quot;mock&quot;</span><span class="token punctuation">,</span> <span class="token comment">// boolean | &quot;mock&quot; | &quot;eval-only&quot;</span>
    <span class="token comment">// true\uFF1A\u5305\u542B\u771F\u5B9E\u8DEF\u5F84</span>
    <span class="token comment">// &quot;mock&quot;: \u5305\u542B\u4F2A\u9020\u8DEF\u5F84</span>
    <span class="token comment">// &quot;eval-only&quot;: \u4EC5\u5728\u7F16\u8BD1\u65F6\u5B9A\u4E49</span>
    <span class="token comment">// false: \u7981\u7528\u6240\u6709\u5904\u7406</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">recordsPath</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;build/records.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">recordsInputPath</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;build/records.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">recordsOutputPath</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;build/records.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5C06ID\u5B58\u50A8\u5230\u6587\u4EF6\u4E2D\uFF0C\u4EE5\u4F7F\u6784\u5EFA\u66F4\u5177\u786E\u5B9A\u6027</span>

  <span class="token comment">/* \u9AD8\u7EA7\u7F13\u5B58\u914D\u7F6E */</span>
  <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// boolean</span>
  <span class="token comment">// \u7981\u7528/\u542F\u7528\u7F13\u5B58</span>
  <span class="token literal-property property">snapshot</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">managedPaths</span><span class="token operator">:</span> <span class="token punctuation">[</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4EC5\u4F7F\u7528package.json\u540D\u79F0\u548C\u7248\u672C\u4F5C\u4E3A\u5FEB\u7167\u7684\u8DEF\u5F84</span>
    <span class="token literal-property property">immutablePaths</span><span class="token operator">:</span> <span class="token punctuation">[</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;.yarn/cache&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8DEF\u5F84\u4E0D\u9700\u8981\u66F4\u6539\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u662F\u4E0D\u53EF\u53D8\u7684</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resolveBuildDependencies</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">buildDependencies</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u540C\u64CD\u4F5C\u7684\u5FEB\u7167\u65B9\u6CD5</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// boolean</span>
  <span class="token comment">// \u542F\u7528 watch \u6A21\u5F0F</span>
  <span class="token literal-property property">watchOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">aggregateTimeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// \u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D</span>
    <span class="token comment">// \u5C06\u591A\u4E2A\u4FEE\u6539\u805A\u5408\u5230\u5355\u4E2A rebuild</span>
    <span class="token literal-property property">poll</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">poll</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// \u4EE5\u6BEB\u79D2\u4E3A\u95F4\u9694\u5355\u4F4D</span>
    <span class="token comment">// \u5728 watch \u6A21\u5F0F\u4E2D\u542F\u7528\u8F6E\u8BE2</span>
    <span class="token comment">// \u5FC5\u987B\u7528\u5728\u4E0D\u901A\u77E5\u66F4\u6539\u7684\u6587\u4EF6\u7CFB\u7EDF\u4E2D</span>
    <span class="token comment">// \u5373 nfs shares</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">/* \u9AD8\u7EA7\u6784\u5EFA\u914D\u7F6E */</span>
  <span class="token literal-property property">infrastructureLogging</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span> <span class="token comment">// (default)</span>
    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">&quot;log&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">&quot;verbose&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">webpack</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;MyPlugin&quot;</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">webpack</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parallelism</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// number</span>
  <span class="token comment">// \u9650\u5236\u5E76\u884C\u5904\u7406\u6A21\u5757\u7684\u6570\u91CF</span>
  <span class="token literal-property property">profile</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// boolean</span>
  <span class="token comment">// \u6355\u83B7\u5B9A\u65F6\u4FE1\u606F</span>
  <span class="token literal-property property">bail</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//boolean</span>
  <span class="token comment">// \u5728\u7B2C\u4E00\u4E2A\u9519\u8BEF\u4E0A\u5931\u8D25\u800C\u4E0D\u662F\u8DF3\u8FC7\u5B83\u3002</span>
  <span class="token literal-property property">dependencies</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5F53\u4F7F\u7528\u914D\u7F6E\u6570\u7EC4\u65F6\uFF0C\u53EF\u4EE5\u7528\u6765\u5F15\u7528\u5176\u4ED6</span>
  <span class="token comment">// \u914D\u7F6E\uFF0C\u5E76\u5728\u521D\u59CB\u6784\u5EFA\u65F6\u8BA9\u6B64\u914D\u7F6E\u5728\u5176\u4ED6\u914D\u7F6E\u4E4B\u540E\u8FD0\u884C</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[t];function l(c,r){return s(),a("div",null,o)}var u=n(p,[["render",l],["__file","configuration.html.vue"]]);export{u as default};
