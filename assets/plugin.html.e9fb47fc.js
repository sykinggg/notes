import{e as n}from"./app.f4829677.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h3 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> plugin</h3><p><strong>\u63D2\u4EF6</strong>\u662F webpack \u7684 <code>\u652F\u67F1</code> \u529F\u80FD\u3002webpack \u81EA\u8EAB\u4E5F\u662F\u6784\u5EFA\u4E8E\u5728 webpack \u914D\u7F6E\u4E2D\u7528\u5230\u7684<strong>\u76F8\u540C\u7684\u63D2\u4EF6\u7CFB\u7EDF</strong>\u4E4B\u4E0A</p><p>\u63D2\u4EF6\u76EE\u7684\u5728\u4E8E\u89E3\u51B3 <code>loader</code> \u65E0\u6CD5\u5B9E\u73B0\u7684<strong>\u5176\u4ED6\u4E8B</strong></p><blockquote><p>\u5982\u679C\u5728\u63D2\u4EF6\u4E2D\u4F7F\u7528\u4E86 <code>webpack-sources</code> \u7684 package\uFF0C\u8BF7\u4F7F\u7528 <code>require(&#39;webpack&#39;).sources</code> \u66FF\u4EE3 <code>require(&#39;webpack-sources&#39;)</code>\uFF0C\u4EE5\u907F\u514D\u6301\u4E45\u7F13\u5B58\u7684\u7248\u672C\u51B2\u7A81\u3002</p></blockquote><h2 id="\u5256\u6790" tabindex="-1"><a class="header-anchor" href="#\u5256\u6790" aria-hidden="true">#</a> <strong>\u5256\u6790</strong></h2><p>webpack <strong>\u63D2\u4EF6</strong>\u662F\u4E00\u4E2A\u5177\u6709 <code>apply</code> \u65B9\u6CD5\u7684 JavaScript \u5BF9\u8C61\u3002<code>apply</code> \u65B9\u6CD5\u4F1A\u88AB webpack compiler \u8C03\u7528\uFF0C\u5E76\u4E14\u5728<strong>\u6574\u4E2A</strong>\u7F16\u8BD1\u751F\u547D\u5468\u671F\u90FD\u53EF\u4EE5\u8BBF\u95EE <code>compiler</code> \u5BF9\u8C61\u3002</p><blockquote><p>ConsoleLogOnBuildWebpackPlugin.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> pluginName <span class="token operator">=</span> <span class="token string">&#39;ConsoleLogOnBuildWebpackPlugin&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ConsoleLogOnBuildWebpackPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>run<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span>pluginName<span class="token punctuation">,</span> <span class="token parameter">compilation</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;webpack \u6784\u5EFA\u8FC7\u7A0B\u5F00\u59CB\uFF01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> ConsoleLogOnBuildWebpackPlugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>compiler hook</code> \u7684 <code>tap</code> \u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5E94\u8BE5\u662F\u9A7C\u5CF0\u5F0F\u547D\u540D\u7684\u63D2\u4EF6\u540D\u79F0\u3002\u5EFA\u8BAE\u4E3A\u6B64\u4F7F\u7528\u4E00\u4E2A\u5E38\u91CF\uFF0C\u4EE5\u4FBF\u5B83\u53EF\u4EE5\u5728\u6240\u6709 hook \u4E2D\u91CD\u590D\u4F7F\u7528\u3002</p><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> <strong>\u7528\u6CD5</strong></h2><p>\u7531\u4E8E<strong>\u63D2\u4EF6</strong>\u53EF\u4EE5\u643A\u5E26\u53C2\u6570/\u9009\u9879\uFF0C\u5FC5\u987B\u5728 webpack \u914D\u7F6E\u4E2D\uFF0C\u5411 <code>plugins</code> \u5C5E\u6027\u4F20\u5165\u4E00\u4E2A <code>new</code> \u5B9E\u4F8B\u3002</p><p>\u53D6\u51B3\u4E8E webpack \u7528\u6CD5\uFF0C\u5BF9\u5E94\u6709\u591A\u79CD\u4F7F\u7528\u63D2\u4EF6\u7684\u65B9\u5F0F\u3002</p><h2 id="\u914D\u7F6E\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u65B9\u5F0F" aria-hidden="true">#</a> <strong>\u914D\u7F6E\u65B9\u5F0F</strong></h2><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u901A\u8FC7 npm \u5B89\u88C5</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBF\u95EE\u5185\u7F6E\u7684\u63D2\u4EF6</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./path/to/my/entry/file.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;my-first-webpack.bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(js|jsx)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProgressPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p><code>ProgressPlugin</code> \u7528\u4E8E\u81EA\u5B9A\u4E49\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u7684\u8FDB\u5EA6\u62A5\u544A\uFF0C<code>HtmlWebpackPlugin</code> \u5C06\u751F\u6210\u4E00\u4E2A <code>HTML</code> \u6587\u4EF6\uFF0C\u5E76\u5728\u5176\u4E2D\u4F7F\u7528 <code>script</code> \u5F15\u5165\u4E00\u4E2A\u540D\u4E3A <code>my-first-webpack.bundle.js</code> \u7684 JS \u6587\u4EF6</p><h2 id="node-api-\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#node-api-\u65B9\u5F0F" aria-hidden="true">#</a> <strong>Node API \u65B9\u5F0F</strong></h2><p>\u5728\u4F7F\u7528 Node API \u65F6\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u4E2D\u7684 <code>plugins</code> \u5C5E\u6027\u4F20\u5165\u63D2\u4EF6</p><blockquote><p>some-node-script.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBF\u95EE webpack \u8FD0\u884C\u65F6(runtime)</span>
<span class="token keyword">const</span> configuration <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.config.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> compiler <span class="token operator">=</span> <span class="token function">webpack</span><span class="token punctuation">(</span>configuration<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProgressPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>compiler<span class="token punctuation">)</span><span class="token punctuation">;</span>

compiler<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> stats</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,20);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
