import{a as s}from"./app.2f6bbef8.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},e=s(`<h3 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> loader</h3><p>loader \u7528\u4E8E\u5BF9\u6A21\u5757\u7684\u6E90\u4EE3\u7801\u8FDB\u884C\u8F6C\u6362\u3002loader \u53EF\u4EE5\u4F7F\u5728 <code>import</code> \u6216 &quot;load(\u52A0\u8F7D)&quot; \u6A21\u5757\u65F6\u9884\u5904\u7406\u6587\u4EF6\u3002\u56E0\u6B64\uFF0Cloader \u7C7B\u4F3C\u4E8E\u5176\u4ED6\u6784\u5EFA\u5DE5\u5177\u4E2D\u201C\u4EFB\u52A1(task)\u201D\uFF0C\u5E76\u63D0\u4F9B\u4E86\u5904\u7406\u524D\u7AEF\u6784\u5EFA\u6B65\u9AA4\u7684\u5F97\u529B\u65B9\u5F0F\u3002loader \u53EF\u4EE5\u5C06\u6587\u4EF6\u4ECE\u4E0D\u540C\u7684\u8BED\u8A00\uFF08\u5982 TypeScript\uFF09\u8F6C\u6362\u4E3A JavaScript \u6216\u5C06\u5185\u8054\u56FE\u50CF\u8F6C\u6362\u4E3A data URL\u3002loader \u751A\u81F3\u5141\u8BB8\u76F4\u63A5\u5728 JavaScript \u6A21\u5757\u4E2D <code>import</code> CSS\u6587\u4EF6\uFF01</p><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> <strong>\u793A\u4F8B</strong></h2><blockquote><p>\u53EF\u4EE5\u4F7F\u7528 loader \u544A\u8BC9 webpack \u52A0\u8F7D CSS \u6587\u4EF6\uFF0C\u6216\u8005\u5C06 TypeScript \u8F6C\u4E3A JavaScript\u3002\u4E3A\u6B64\uFF0C\u9996\u5148\u5B89\u88C5\u76F8\u5BF9\u5E94\u7684 loader\uFF1A</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev css<span class="token operator">-</span>loader ts<span class="token operator">-</span>loader
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u6307\u793A webpack \u5BF9\u6BCF\u4E2A <code>.css</code> \u4F7F\u7528 <code>css-loader</code>\uFF0C\u4EE5\u53CA\u5BF9\u6240\u6709 <code>.ts</code> \u6587\u4EF6\u4F7F\u7528 <code>ts-loader</code>\uFF1A</p><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;ts-loader&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u4F7F\u7528-loader" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-loader" aria-hidden="true">#</a> <strong>\u4F7F\u7528 loader</strong></h2><p>\u5E94\u7528\u7A0B\u5E8F\u4E2D\uFF0C\u6709\u4E09\u79CD\u4F7F\u7528 loader \u7684\u65B9\u5F0F\uFF1A</p><ul><li><p><code>\u914D\u7F6E\u65B9\u5F0F</code>\uFF08\u63A8\u8350\uFF09\uFF1A\u5728 <strong>webpack.config.js</strong> \u6587\u4EF6\u4E2D\u6307\u5B9A loader\u3002</p></li><li><p><code>\u5185\u8054\u65B9\u5F0F</code>\uFF1A\u5728\u6BCF\u4E2A <code>import</code> \u8BED\u53E5\u4E2D\u663E\u5F0F\u6307\u5B9A loader\u3002</p></li><li><p><code>CLI \u65B9\u5F0F</code>\uFF1A\u5728 shell \u547D\u4EE4\u4E2D\u6307\u5B9A\u5B83\u4EEC\u3002</p></li></ul><h2 id="_1-\u914D\u7F6E\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u914D\u7F6E\u65B9\u5F0F" aria-hidden="true">#</a> <strong>1. \u914D\u7F6E\u65B9\u5F0F</strong></h2><p><code>module.rules</code> \u5141\u8BB8\u5728 webpack \u914D\u7F6E\u4E2D\u6307\u5B9A\u591A\u4E2A loader\u3002 \u8FD9\u79CD\u65B9\u5F0F\u662F\u5C55\u793A loader \u7684\u4E00\u79CD\u7B80\u660E\u65B9\u5F0F\uFF0C\u5E76\u4E14\u6709\u52A9\u4E8E\u4F7F\u4EE3\u7801\u53D8\u5F97\u7B80\u6D01\u548C\u6613\u4E8E\u7EF4\u62A4\u3002\u540C\u65F6\u8BA9\u5BF9\u5404\u4E2A loader \u6709\u4E2A\u5168\u5C40\u6982\u89C8</p><blockquote><p>loader \u4ECE\u53F3\u5230\u5DE6\uFF08\u6216\u4ECE\u4E0B\u5230\u4E0A\uFF09\u5730\u53D6\u503C(evaluate)/\u6267\u884C(execute)\u3002</p></blockquote><p>\u5728\u4E0B\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u4ECE sass-loader \u5F00\u59CB\u6267\u884C\uFF0C\u7136\u540E\u7EE7\u7EED\u6267\u884C css-loader\uFF0C\u6700\u540E\u4EE5 style-loader \u4E3A\u7ED3\u675F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// [style-loader](/loaders/style-loader)</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;style-loader&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// [css-loader](/loaders/css-loader)</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// [sass-loader](/loaders/sass-loader)</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;sass-loader&#39;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="_2-\u5185\u8054\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u5185\u8054\u65B9\u5F0F" aria-hidden="true">#</a> <strong>2. \u5185\u8054\u65B9\u5F0F</strong></h2><p>\u53EF\u4EE5\u5728 <code>import</code> \u8BED\u53E5\u6216\u4EFB\u4F55 \u4E0E <strong>&quot;import&quot; \u65B9\u6CD5\u540C\u7B49\u7684\u5F15\u7528\u65B9\u5F0F</strong> \u4E2D\u6307\u5B9A loader\u3002\u4F7F\u7528 <code>!</code> \u5C06\u8D44\u6E90\u4E2D\u7684 loader \u5206\u5F00\u3002\u6BCF\u4E2A\u90E8\u5206\u90FD\u4F1A\u76F8\u5BF9\u4E8E\u5F53\u524D\u76EE\u5F55\u89E3\u6790</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Styles <span class="token keyword">from</span> <span class="token string">&#39;style-loader!css-loader?modules!./styles.css&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u901A\u8FC7\u4E3A\u5185\u8054 <code>import</code> \u8BED\u53E5\u6DFB\u52A0\u524D\u7F00\uFF0C\u53EF\u4EE5<strong>\u8986\u76D6</strong> \u914D\u7F6E \u4E2D\u7684\u6240\u6709 loader, preLoader \u548C postLoader\uFF1A</p><ul><li>\u4F7F\u7528 <code>!</code> \u524D\u7F00\uFF0C\u5C06\u7981\u7528\u6240\u6709\u5DF2\u914D\u7F6E\u7684 normal loader(\u666E\u901A loader)</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Styles <span class="token keyword">from</span> <span class="token string">&#39;!style-loader!css-loader?modules!./styles.css&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u4F7F\u7528 <code>!!</code> \u524D\u7F00\uFF0C\u5C06\u7981\u7528\u6240\u6709\u5DF2\u914D\u7F6E\u7684 loader\uFF08preLoader, loader, postLoader\uFF09</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Styles <span class="token keyword">from</span> <span class="token string">&#39;!!style-loader!css-loader?modules!./styles.css&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u4F7F\u7528 <code>-!</code> \u524D\u7F00\uFF0C\u5C06\u7981\u7528\u6240\u6709\u5DF2\u914D\u7F6E\u7684 preLoader \u548C loader\uFF0C\u4F46\u662F\u4E0D\u7981\u7528 postLoaders</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Styles <span class="token keyword">from</span> <span class="token string">&#39;-!style-loader!css-loader?modules!./styles.css&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u9009\u9879\u53EF\u4EE5\u4F20\u9012\u67E5\u8BE2\u53C2\u6570\uFF0C\u4F8B\u5982 <code>?key=value&amp;foo=bar</code>\uFF0C\u6216\u8005\u4E00\u4E2A JSON \u5BF9\u8C61\uFF0C\u4F8B\u5982 <code>?{&quot;key&quot;:&quot;value&quot;,&quot;foo&quot;:&quot;bar&quot;}</code>\u3002</p><blockquote><p><em>\u5C3D\u53EF\u80FD\u4F7F\u7528 <code>module.rules</code>\uFF0C\u56E0\u4E3A\u8FD9\u6837\u53EF\u4EE5\u51CF\u5C11\u6E90\u7801\u4E2D\u6837\u677F\u6587\u4EF6\u7684\u4EE3\u7801\u91CF\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5728\u51FA\u9519\u65F6\uFF0C\u66F4\u5FEB\u5730\u8C03\u8BD5\u548C\u5B9A\u4F4D loader \u4E2D\u7684\u95EE\u9898</em></p></blockquote><h2 id="_3-cli-\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-cli-\u65B9\u5F0F" aria-hidden="true">#</a> <strong>3. CLI \u65B9\u5F0F</strong></h2><p>\u8FD8\u53EF\u4EE5\u901A\u8FC7 CLI \u4F7F\u7528 loader\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>webpack <span class="token operator">--</span>module<span class="token operator">-</span>bind pug<span class="token operator">-</span>loader <span class="token operator">--</span>module<span class="token operator">-</span>bind <span class="token string">&#39;css=style-loader!css-loader&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4F1A\u5BF9 <code>.jade</code> \u6587\u4EF6\u4F7F\u7528 <code>pug-loader</code>\uFF0C\u4EE5\u53CA\u5BF9 <code>.css</code> \u6587\u4EF6\u4F7F\u7528 <code>style-loader</code> \u548C <code>css-loader</code>\u3002</p><h2 id="loader-\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#loader-\u7279\u6027" aria-hidden="true">#</a> <strong>loader \u7279\u6027</strong></h2><ul><li><p>loader \u652F\u6301\u94FE\u5F0F\u8C03\u7528\u3002\u94FE\u4E2D\u7684\u6BCF\u4E2A loader \u4F1A\u5C06\u8F6C\u6362\u5E94\u7528\u5728\u5DF2\u5904\u7406\u8FC7\u7684\u8D44\u6E90\u4E0A\u3002\u4E00\u7EC4\u94FE\u5F0F\u7684 loader \u5C06\u6309\u7167\u76F8\u53CD\u7684\u987A\u5E8F\u6267\u884C\u3002\u94FE\u4E2D\u7684\u7B2C\u4E00\u4E2A loader \u5C06\u5176\u7ED3\u679C\uFF08\u4E5F\u5C31\u662F\u5E94\u7528\u8FC7\u8F6C\u6362\u540E\u7684\u8D44\u6E90\uFF09\u4F20\u9012\u7ED9\u4E0B\u4E00\u4E2A loader\uFF0C\u4F9D\u6B64\u7C7B\u63A8\u3002\u6700\u540E\uFF0C\u94FE\u4E2D\u7684\u6700\u540E\u4E00\u4E2A loader\uFF0C\u8FD4\u56DE webpack \u6240\u671F\u671B\u7684 JavaScript\u3002</p></li><li><p>loader \u53EF\u4EE5\u662F\u540C\u6B65\u7684\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5F02\u6B65\u7684\u3002</p></li><li><p>loader \u8FD0\u884C\u5728 Node.js \u4E2D\uFF0C\u5E76\u4E14\u80FD\u591F\u6267\u884C\u4EFB\u4F55\u64CD\u4F5C\u3002</p></li><li><p>loader \u53EF\u4EE5\u901A\u8FC7 <code>options</code> \u5BF9\u8C61\u914D\u7F6E\uFF08\u4ECD\u7136\u652F\u6301\u4F7F\u7528 <code>query</code> \u53C2\u6570\u6765\u8BBE\u7F6E\u9009\u9879\uFF0C\u4F46\u662F\u8FD9\u79CD\u65B9\u5F0F\u5DF2\u88AB\u5E9F\u5F03\uFF09\u3002</p></li><li><p>\u9664\u4E86\u5E38\u89C1\u7684\u901A\u8FC7 <code>package.json</code> \u7684 <code>main</code> \u6765\u5C06\u4E00\u4E2A npm \u6A21\u5757\u5BFC\u51FA\u4E3A loader\uFF0C\u8FD8\u53EF\u4EE5\u5728 module.rules \u4E2D\u4F7F\u7528 <code>loader</code> \u5B57\u6BB5\u76F4\u63A5\u5F15\u7528\u4E00\u4E2A\u6A21\u5757\u3002</p></li><li><p>\u63D2\u4EF6(plugin)\u53EF\u4EE5\u4E3A loader \u5E26\u6765\u66F4\u591A\u7279\u6027\u3002</p></li><li><p>loader \u80FD\u591F\u4EA7\u751F\u989D\u5916\u7684\u4EFB\u610F\u6587\u4EF6\u3002</p></li></ul><p>\u53EF\u4EE5\u901A\u8FC7 loader \u7684\u9884\u5904\u7406\u51FD\u6570\uFF0C\u4E3A JavaScript \u751F\u6001\u7CFB\u7EDF\u63D0\u4F9B\u66F4\u591A\u80FD\u529B\u3002\u7528\u6237\u73B0\u5728\u53EF\u4EE5\u66F4\u52A0\u7075\u6D3B\u5730\u5F15\u5165\u7EC6\u7C92\u5EA6\u903B\u8F91\uFF0C\u4F8B\u5982\uFF1A\u538B\u7F29\u3001\u6253\u5305\u3001\u8BED\u8A00\u7FFB\u8BD1</p><h2 id="\u89E3\u6790-loader" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790-loader" aria-hidden="true">#</a> <strong>\u89E3\u6790 loader</strong></h2><p>loader \u9075\u5FAA\u6807\u51C6 <code>\u6A21\u5757\u89E3\u6790</code> \u89C4\u5219\u3002\u591A\u6570\u60C5\u51B5\u4E0B\uFF0Cloader \u5C06\u4ECE \u6A21\u5757\u8DEF\u5F84 \u52A0\u8F7D\uFF08\u901A\u5E38\u662F\u4ECE <code>npm install</code>, <code>node_modules</code> \u8FDB\u884C\u52A0\u8F7D\uFF09</p><p>\u9884\u671F loader \u6A21\u5757\u5BFC\u51FA\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u4E14\u7F16\u5199\u4E3A Node.js \u517C\u5BB9\u7684 JavaScript\u3002\u901A\u5E38\u4F7F\u7528 npm \u8FDB\u884C\u7BA1\u7406 loader\uFF0C\u4F46\u662F\u4E5F\u53EF\u4EE5\u5C06\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u6587\u4EF6\u4F5C\u4E3A\u81EA\u5B9A\u4E49 loader\u3002\u6309\u7167\u7EA6\u5B9A\uFF0Cloader \u901A\u5E38\u88AB\u547D\u540D\u4E3A <code>xxx-loader</code>\uFF08\u4F8B\u5982 <code>json-loader</code>\uFF09</p>`,38);function p(o,r){return e}var c=a(n,[["render",p]]);export{c as default};
