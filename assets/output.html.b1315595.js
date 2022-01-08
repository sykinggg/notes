import{e as s}from"./app.8a201290.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h3 id="\u8F93\u51FA-output" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA-output" aria-hidden="true">#</a> \u8F93\u51FA(output)</h3><p>\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E <code>output</code> \u9009\u9879\uFF0C\u544A\u77E5 webpack \u5982\u4F55\u5411\u786C\u76D8\u5199\u5165\u7F16\u8BD1\u6587\u4EF6\u3002\u6CE8\u610F\uFF0C\u5373\u4F7F\u53EF\u4EE5\u5B58\u5728\u591A\u4E2A <code>entry</code> \u8D77\u70B9\uFF0C\u4F46\u53EA\u80FD\u6307\u5B9A\u4E00\u4E2A <code>output</code> \u914D\u7F6E</p><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> <strong>\u7528\u6CD5</strong></h2><p>\u5728 webpack \u914D\u7F6E\u4E2D\uFF0C<code>output</code> \u5C5E\u6027\u7684\u6700\u4F4E\u8981\u6C42\u662F\uFF0C\u5C06\u5B83\u7684\u503C\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7136\u540E\u4E3A\u5C06\u8F93\u51FA\u6587\u4EF6\u7684\u6587\u4EF6\u540D\u914D\u7F6E\u4E3A\u4E00\u4E2A <code>output.filename</code>\uFF1A</p><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6B64\u914D\u7F6E\u5C06\u4E00\u4E2A\u5355\u72EC\u7684 <code>bundle.js</code> \u6587\u4EF6\u8F93\u51FA\u5230 <code>dist</code> \u76EE\u5F55\u4E2D</p><h2 id="\u591A\u4E2A\u5165\u53E3\u8D77\u70B9" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u5165\u53E3\u8D77\u70B9" aria-hidden="true">#</a> <strong>\u591A\u4E2A\u5165\u53E3\u8D77\u70B9</strong></h2><blockquote><p>\u5982\u679C\u914D\u7F6E\u4E2D\u521B\u5EFA\u51FA\u591A\u4E8E\u4E00\u4E2A &quot;chunk&quot;\uFF08\u4F8B\u5982\uFF0C\u4F7F\u7528\u591A\u4E2A\u5165\u53E3\u8D77\u70B9\u6216\u4F7F\u7528\u50CF CommonsChunkPlugin \u8FD9\u6837\u7684\u63D2\u4EF6\uFF09\uFF0C\u5219\u5E94\u8BE5\u4F7F\u7528 <code>\u5360\u4F4D\u7B26(substitutions)</code> \u6765\u786E\u4FDD\u6BCF\u4E2A\u6587\u4EF6\u5177\u6709\u552F\u4E00\u7684\u540D\u79F0\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">&#39;./src/app.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">&#39;./src/search.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> __dirname <span class="token operator">+</span> <span class="token string">&#39;/dist&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5199\u5165\u5230\u786C\u76D8\uFF1A./dist/app.js, ./dist/search.js</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u9AD8\u7EA7\u8FDB\u9636" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7\u8FDB\u9636" aria-hidden="true">#</a> <strong>\u9AD8\u7EA7\u8FDB\u9636</strong></h2><blockquote><p>config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/home/proj/cdn/notes/assets/[fullhash]&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;https://cdn.example.com/notes/assets/[fullhash]/&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>\u5982\u679C\u5728\u7F16\u8BD1\u65F6\uFF0C\u4E0D\u77E5\u9053\u6700\u7EC8\u8F93\u51FA\u6587\u4EF6\u7684 <code>publicPath</code> \u662F\u4EC0\u4E48\u5730\u5740\uFF0C\u5219\u53EF\u4EE5\u5C06\u5176\u7559\u7A7A\uFF0C\u5E76\u4E14\u5728\u8FD0\u884C\u65F6\u901A\u8FC7\u5165\u53E3\u8D77\u70B9\u6587\u4EF6\u4E2D\u7684 <code>__webpack_public_path__</code> \u52A8\u6001\u8BBE\u7F6E</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>__webpack_public_path__ <span class="token operator">=</span> myRuntimePublicPath<span class="token punctuation">;</span>

<span class="token comment">// \u5E94\u7528\u7A0B\u5E8F\u5165\u53E3\u7684\u5176\u4F59\u90E8\u5206</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,15);function e(t,o){return p}var l=n(a,[["render",e]]);export{l as default};
