import{r as o,o as c,c as r,a as n,b as e,F as l,d as s,e as p}from"./app.5ba8e4fa.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},b=n("h1",{id:"babel-\u7F16\u8BD1\u539F\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#babel-\u7F16\u8BD1\u539F\u7406","aria-hidden":"true"},"#"),s(" babel \u7F16\u8BD1\u539F\u7406")],-1),k=n("h2",{id:"\u57FA\u7840\u539F\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u57FA\u7840\u539F\u7406","aria-hidden":"true"},"#"),s(" \u57FA\u7840\u539F\u7406")],-1),m=n("blockquote",null,[n("p",null,"Babel \u662F\u4E00\u4E2A\u6E90\u5230\u6E90\u7684\u8F6C\u6362\u7F16\u8BD1\u5668\uFF08Transpiler\uFF09\uFF0C\u5B83\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u5C06 JavaScript \u7684\u9AD8\u7248\u672C\u8BED\u6CD5\uFF08\u4F8B\u5982 ES6\uFF09\u8F6C\u6362\u6210\u4F4E\u7248\u672C\u8BED\u6CD5\uFF08\u4F8B\u5982 ES5\uFF09\uFF0C\u4ECE\u800C\u53EF\u4EE5\u9002\u914D\u6D4F\u89C8\u5668\u7684\u517C\u5BB9\u6027\u3002")],-1),d=["src"],h=p("<p>\u4ECE\u4E0A\u56FE\u53EF\u77E5\uFF0CBabel \u7684\u7F16\u8BD1\u8FC7\u7A0B\u4E3B\u8981\u53EF\u4EE5\u5206\u4E3A\u4E09\u4E2A\u9636\u6BB5\uFF1A</p><ul><li><p><code>\u89E3\u6790\uFF08Parse\uFF09</code>\uFF1A\u5305\u62EC\u8BCD\u6CD5\u5206\u6790\u548C\u8BED\u6CD5\u5206\u6790\u3002\u8BCD\u6CD5\u5206\u6790\u4E3B\u8981\u628A\u5B57\u7B26\u6D41\u6E90\u4EE3\u7801\uFF08<code>Char Stream</code>\uFF09\u8F6C\u6362\u6210\u4EE4\u724C\u6D41\uFF08 <code>Token Stream</code>\uFF09\uFF0C\u8BED\u6CD5\u5206\u6790\u4E3B\u8981\u662F\u5C06\u4EE4\u724C\u6D41\u8F6C\u6362\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08<code>Abstract Syntax Tree\uFF0CAST</code>\uFF09\u3002</p></li><li><p><code>\u8F6C\u6362\uFF08Transform\uFF09</code>\uFF1A\u901A\u8FC7 Babel \u7684\u63D2\u4EF6\u80FD\u529B\uFF0C\u5C06\u9AD8\u7248\u672C\u8BED\u6CD5\u7684 AST \u8F6C\u6362\u6210\u652F\u6301\u4F4E\u7248\u672C\u8BED\u6CD5\u7684 AST\u3002\u5F53\u7136\u5728\u6B64\u8FC7\u7A0B\u4E2D\u4E5F\u53EF\u4EE5\u5BF9 AST \u7684 Node \u8282\u70B9\u8FDB\u884C\u4F18\u5316\u64CD\u4F5C\uFF0C\u6BD4\u5982\u6DFB\u52A0\u3001\u66F4\u65B0\u4EE5\u53CA\u79FB\u9664\u8282\u70B9\u7B49\u3002</p></li><li><p><code>\u751F\u6210\uFF08Generate\uFF09</code>\uFF1A\u5C06 AST \u8F6C\u6362\u6210\u5B57\u7B26\u4E32\u5F62\u5F0F\u7684\u4F4E\u7248\u672C\u4EE3\u7801\uFF0C\u540C\u65F6\u4E5F\u80FD\u521B\u5EFA <code>Source Map</code> \u6620\u5C04\u3002</p></li></ul><p>\u5177\u4F53\u7684\u6D41\u7A0B\u5982\u4E0B\u6240\u793A\uFF1A</p>",3),_=["src"],g=p(`<p>\u4E3E\u4E2A\u6817\u5B50\uFF0C\u5982\u679C\u8981\u5C06 TypeScript \u8BED\u6CD5\u8F6C\u6362\u6210 ES5 \u8BED\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6E90\u4EE3\u7801</span>
<span class="token keyword">let</span> <span class="token literal-property property">a</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// \u76EE\u6807\u4EE3\u7801</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_6-1-\u89E3\u6790-parser" tabindex="-1"><a class="header-anchor" href="#_6-1-\u89E3\u6790-parser" aria-hidden="true">#</a> 6.1 \u89E3\u6790\uFF08Parser\uFF09</h3>`,3),F=s("Babel \u7684\u89E3\u6790\u8FC7\u7A0B\uFF08\u6E90\u7801\u5230 AST \u7684\u8F6C\u6362\uFF09\u53EF\u4EE5\u4F7F\u7528 "),f={href:"https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-parser",target:"_blank",rel:"noopener noreferrer"},y=s("@babel/parser"),S=s("\uFF0C\u5B83\u7684\u4E3B\u8981\u7279\u70B9\u5982\u4E0B\uFF1A"),T=n("li",null,[n("p",null,"\u652F\u6301\u89E3\u6790\u6700\u65B0\u7684 ES2020")],-1),w=n("li",null,[n("p",null,"\u652F\u6301\u89E3\u6790 JSX\u3001Flow & TypeScript")],-1),v=s("\u652F\u6301\u89E3\u6790\u5B9E\u9A8C\u6027\u7684\u8BED\u6CD5\u63D0\u6848\uFF08\u652F\u6301\u4EFB\u4F55 "),j={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftc39%2Fproposals%2Fblob%2Fmaster%2Fstage-0-proposals.md",target:"_blank",rel:"noopener noreferrer"},A=s("Stage 0"),E=s(" \u7684 PRS\uFF09"),P=s("@babel/parser \u4E3B\u8981\u662F\u57FA\u4E8E\u8F93\u5165\u7684\u5B57\u7B26\u4E32\u6D41\uFF08\u6E90\u4EE3\u7801\uFF09\u8FDB\u884C\u89E3\u6790\uFF0C\u6700\u540E\u8F6C\u6362\u6210"),x={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmaster%2Fpackages%2Fbabel-parser%2Fast%2Fspec.md",target:"_blank",rel:"noopener noreferrer"},B=s("\u89C4\u8303"),C=s("\uFF08\u57FA\u4E8E "),I={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Festree%2Festree",target:"_blank",rel:"noopener noreferrer"},V=s("ESTree"),M=s(" \u8FDB\u884C\u8C03\u6574\uFF09\u7684 AST\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A"),N=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> parse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@babel/parser&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">let a: string = 1;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">enum</span> ParseSourceTypeEnum <span class="token punctuation">{</span>
  Module <span class="token operator">=</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span>
  Script <span class="token operator">=</span> <span class="token string">&#39;script&#39;</span><span class="token punctuation">,</span>
  Unambiguous <span class="token operator">=</span> <span class="token string">&#39;unambiguous&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> ParsePluginEnum <span class="token punctuation">{</span>
  Flow <span class="token operator">=</span> <span class="token string">&#39;flow&#39;</span><span class="token punctuation">,</span>
  FlowComments <span class="token operator">=</span> <span class="token string">&#39;flowComments&#39;</span><span class="token punctuation">,</span>
  TypeScript <span class="token operator">=</span> <span class="token string">&#39;typescript&#39;</span><span class="token punctuation">,</span>
  Jsx <span class="token operator">=</span> <span class="token string">&#39;jsx&#39;</span><span class="token punctuation">,</span>
  V8intrinsic <span class="token operator">=</span> <span class="token string">&#39;v8intrinsic&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u89E3\u6790\uFF08Parser\uFF09\u9636\u6BB5</span>
<span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E25\u683C\u6A21\u5F0F\u4E0B\u89E3\u6790\u5E76\u4E14\u5141\u8BB8\u6A21\u5757\u5B9A\u4E49</span>
  sourceType<span class="token operator">:</span> ParseSourceTypeEnum<span class="token punctuation">.</span>Module<span class="token punctuation">,</span>
  <span class="token comment">// \u652F\u6301\u89E3\u6790 TypeScript \u8BED\u6CD5\uFF08\u6CE8\u610F\uFF0C\u8FD9\u91CC\u53EA\u662F\u652F\u6301\u89E3\u6790\uFF0C\u5E76\u4E0D\u662F\u8F6C\u6362 TypeScript\uFF09</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>ParsePluginEnum<span class="token punctuation">.</span>TypeScript<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u9700\u8981\u6CE8\u610F\uFF0C\u5728 Parser \u9636\u6BB5\u4E3B\u8981\u662F\u8FDB\u884C\u8BCD\u6CD5\u548C\u8BED\u6CD5\u5206\u6790\uFF0C\u5982\u679C\u8BCD\u6CD5\u6216\u8005\u8BED\u6CD5\u5206\u6790\u9519\u8BEF\uFF0C\u90A3\u4E48\u4F1A\u5728\u8BE5\u9636\u6BB5\u88AB\u68C0\u6D4B\u51FA\u6765\u3002\u5982\u679C\u68C0\u6D4B\u6B63\u786E\uFF0C\u5219\u53EF\u4EE5\u8FDB\u5165\u8BED\u6CD5\u7684\u8F6C\u6362\u9636\u6BB5\u3002</p><h3 id="_6-2-\u8F6C\u6362-transform" tabindex="-1"><a class="header-anchor" href="#_6-2-\u8F6C\u6362-transform" aria-hidden="true">#</a> 6.2 \u8F6C\u6362\uFF08Transform\uFF09</h3>`,3),J=s("Babel \u7684\u8F6C\u6362\u8FC7\u7A0B\uFF08AST \u5230 AST \u7684\u8F6C\u6362\uFF09\u4E3B\u8981\u4F7F\u7528 "),D={href:"https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-traverse",target:"_blank",rel:"noopener noreferrer"},q=s("@babel/traverse"),z=s("\uFF0C\u8BE5\u5E93\u5305\u53EF\u4EE5\u901A\u8FC7"),G={href:"https://link.juejin.cn/?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%25E8%25AE%25BF%25E9%2597%25AE%25E8%2580%2585%25E6%25A8%25A1%25E5%25BC%258F",target:"_blank",rel:"noopener noreferrer"},U=s("\u8BBF\u95EE\u8005\u6A21\u5F0F"),$=s("\u81EA\u52A8\u904D\u5386\u5E76\u8BBF\u95EE AST \u6811\u7684\u6BCF\u4E00\u4E2A Node \u8282\u70B9\u4FE1\u606F\uFF0C\u4ECE\u800C\u5B9E\u73B0\u8282\u70B9\u7684\u66FF\u6362\u3001\u79FB\u9664\u548C\u6DFB\u52A0\u64CD\u4F5C\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A"),H=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> parse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@babel/parser&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> traverse <span class="token keyword">from</span> <span class="token string">&#39;@babel/traverse&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">enum</span> ParseSourceTypeEnum <span class="token punctuation">{</span>
  Module <span class="token operator">=</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span>
  Script <span class="token operator">=</span> <span class="token string">&#39;script&#39;</span><span class="token punctuation">,</span>
  Unambiguous <span class="token operator">=</span> <span class="token string">&#39;unambiguous&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> ParsePluginEnum <span class="token punctuation">{</span>
  Flow <span class="token operator">=</span> <span class="token string">&#39;flow&#39;</span><span class="token punctuation">,</span>
  FlowComments <span class="token operator">=</span> <span class="token string">&#39;flowComments&#39;</span><span class="token punctuation">,</span>
  TypeScript <span class="token operator">=</span> <span class="token string">&#39;typescript&#39;</span><span class="token punctuation">,</span>
  Jsx <span class="token operator">=</span> <span class="token string">&#39;jsx&#39;</span><span class="token punctuation">,</span>
  V8intrinsic <span class="token operator">=</span> <span class="token string">&#39;v8intrinsic&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">let a: string = 1;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token comment">// \u89E3\u6790\uFF08Parser\uFF09\u9636\u6BB5</span>
<span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E25\u683C\u6A21\u5F0F\u4E0B\u89E3\u6790\u5E76\u4E14\u5141\u8BB8\u6A21\u5757\u5B9A\u4E49</span>
  sourceType<span class="token operator">:</span> ParseSourceTypeEnum<span class="token punctuation">.</span>Module<span class="token punctuation">,</span>
  <span class="token comment">// \u652F\u6301\u89E3\u6790 TypeScript \u8BED\u6CD5\uFF08\u6CE8\u610F\uFF0C\u8FD9\u91CC\u53EA\u662F\u53EF\u4EE5\u89E3\u6790\uFF0C\u5E76\u4E0D\u662F\u8F6C\u6362 TypeScript\uFF09</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>ParsePluginEnum<span class="token punctuation">.</span>TypeScript<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8F6C\u6362\uFF08Transform) \u9636\u6BB5</span>
<span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8BBF\u95EE\u53D8\u91CF\u58F0\u660E\u6807\u8BC6\u7B26</span>
  <span class="token function">VariableDeclaration</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06 const \u548C let \u8F6C\u6362\u4E3A var</span>
    path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>kind <span class="token operator">=</span> <span class="token string">&#39;var&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8BBF\u95EE TypeScript \u7C7B\u578B\u58F0\u660E\u6807\u8BC6\u7B26</span>
  <span class="token function">TSTypeAnnotation</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u79FB\u9664 TypeScript \u7684\u58F0\u660E\u7C7B\u578B</span>
    path<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div>`,1),L=s("\u5173\u4E8E Babel \u4E2D\u7684\u8BBF\u95EE\u5668 API\uFF0C\u8FD9\u91CC\u4E0D\u518D\u8FC7\u591A\u8BF4\u660E\uFF0C\u5982\u679C\u60F3\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\uFF0C\u53EF\u4EE5\u67E5\u770B "),R={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjamiebuilds%2Fbabel-handbook%2Fblob%2Fmaster%2Ftranslations%2Fzh-Hans%2Fplugin-handbook.md",target:"_blank",rel:"noopener noreferrer"},Z=s("Babel \u63D2\u4EF6\u624B\u518C"),O=s("\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u4F60\u53EF\u80FD\u5DF2\u7ECF\u6CE8\u610F\u5230\u8FD9\u91CC\u7684\u8F6C\u6362\u903B\u8F91\u5176\u5B9E\u53EF\u4EE5\u7406\u89E3\u4E3A\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 Babel \u63D2\u4EF6\uFF0C\u53EA\u662F\u6CA1\u6709\u5C01\u88C5\u6210 Npm \u5305\u3002\u5F53\u7136\uFF0C\u5728\u771F\u6B63\u7684\u63D2\u4EF6\u5F00\u53D1\u5F00\u53D1\u4E2D\uFF0C\u8FD8\u53EF\u4EE5\u914D\u5408 "),X={href:"https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-types",target:"_blank",rel:"noopener noreferrer"},K=s("@babel/types"),Q=s(" \u5DE5\u5177\u5305\u8FDB\u884C\u8282\u70B9\u4FE1\u606F\u7684\u5224\u65AD\u5904\u7406\u3002"),W=s("\u6E29\u99A8\u63D0\u793A\uFF1A\u8FD9\u91CC\u53EA\u662F\u7B80\u5355\u7684\u4E00\u4E2A Demo \u793A\u4F8B\uFF0C\u5728\u771F\u6B63\u8F6C\u6362 let\u3001const \u7B49\u53D8\u91CF\u58F0\u660E\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u8FD8\u4F1A\u9047\u5230\u5904\u7406\u6682\u65F6\u6027\u6B7B\u533A\uFF08Temporal Dead Zone\uFF0C TDZ\uFF09\u7684\u60C5\u51B5\uFF0C\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\u53EF\u4EE5\u67E5\u770B\u5B98\u65B9\u7684\u63D2\u4EF6 "),Y={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmain%2Fpackages%2Fbabel-plugin-transform-block-scoping%2Fsrc%2Findex.js",target:"_blank",rel:"noopener noreferrer"},nn=s("babel-plugin-transform-block-scoping"),sn=s("\u3002"),an=n("h3",{id:"_6-3-\u751F\u6210-generate",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-3-\u751F\u6210-generate","aria-hidden":"true"},"#"),s(" 6.3 \u751F\u6210\uFF08Generate\uFF09")],-1),en=s("Babel \u7684\u4EE3\u7801\u751F\u6210\u8FC7\u7A0B\uFF08AST \u5230\u76EE\u6807\u4EE3\u7801\u7684\u8F6C\u6362\uFF09\u4E3B\u8981\u4F7F\u7528 "),pn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-generator",target:"_blank",rel:"noopener noreferrer"},tn=s("@babel/generator"),on=s("\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A"),cn=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> parse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@babel/parser&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> traverse <span class="token keyword">from</span> <span class="token string">&#39;@babel/traverse&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> generate <span class="token keyword">from</span> <span class="token string">&#39;@babel/generator&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">enum</span> ParseSourceTypeEnum <span class="token punctuation">{</span>
  Module <span class="token operator">=</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span>
  Script <span class="token operator">=</span> <span class="token string">&#39;script&#39;</span><span class="token punctuation">,</span>
  Unambiguous <span class="token operator">=</span> <span class="token string">&#39;unambiguous&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> ParsePluginEnum <span class="token punctuation">{</span>
  Flow <span class="token operator">=</span> <span class="token string">&#39;flow&#39;</span><span class="token punctuation">,</span>
  FlowComments <span class="token operator">=</span> <span class="token string">&#39;flowComments&#39;</span><span class="token punctuation">,</span>
  TypeScript <span class="token operator">=</span> <span class="token string">&#39;typescript&#39;</span><span class="token punctuation">,</span>
  Jsx <span class="token operator">=</span> <span class="token string">&#39;jsx&#39;</span><span class="token punctuation">,</span>
  V8intrinsic <span class="token operator">=</span> <span class="token string">&#39;v8intrinsic&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">let a: string = 1;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token comment">// \u89E3\u6790\uFF08Parser\uFF09\u9636\u6BB5</span>
<span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E25\u683C\u6A21\u5F0F\u4E0B\u89E3\u6790\u5E76\u4E14\u5141\u8BB8\u6A21\u5757\u5B9A\u4E49</span>
  sourceType<span class="token operator">:</span> ParseSourceTypeEnum<span class="token punctuation">.</span>Module<span class="token punctuation">,</span>
  <span class="token comment">// \u652F\u6301\u89E3\u6790 TypeScript \u8BED\u6CD5\uFF08\u6CE8\u610F\uFF0C\u8FD9\u91CC\u53EA\u662F\u53EF\u4EE5\u89E3\u6790\uFF0C\u5E76\u4E0D\u662F\u8F6C\u6362 TypeScript\uFF09</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>ParsePluginEnum<span class="token punctuation">.</span>TypeScript<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8F6C\u6362\uFF08Transform) \u9636\u6BB5</span>
<span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8BBF\u95EE\u8BCD\u6CD5\u89C4\u5219</span>
  <span class="token function">VariableDeclaration</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>kind <span class="token operator">=</span> <span class="token string">&#39;var&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
	
  <span class="token comment">// \u8BBF\u95EE\u8BCD\u6CD5\u89C4\u5219</span>
  <span class="token function">TSTypeAnnotation</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u79FB\u9664 TypeScript \u7684\u58F0\u660E\u7C7B\u578B</span>
    path<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u751F\u6210\uFF08Generate\uFF09\u9636\u6BB5</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">generate</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// code:  var a = 1;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;code: &#39;</span><span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>`,1),rn=s("\u5982\u679C\u4F60\u60F3\u4E86\u89E3\u4E0A\u8FF0\u8F93\u5165\u6E90\u5BF9\u5E94\u7684 AST \u6570\u636E\u6216\u8005\u5C1D\u8BD5\u81EA\u5DF1\u7F16\u8BD1\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5DE5\u5177 "),ln={href:"https://link.juejin.cn/?target=https%3A%2F%2Fastexplorer.net%2F",target:"_blank",rel:"noopener noreferrer"},un=s("AST Explorer"),bn=s(" \uFF08\u4E5F\u53EF\u4EE5\u4F7F\u7528 Babel \u5B98\u7F51\u81EA\u5E26\u7684 "),kn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Frepl",target:"_blank",rel:"noopener noreferrer"},mn=s("Try It Out"),dn=s(" \uFF09\uFF0C\u5177\u4F53\u5982\u4E0B\u6240\u793A\uFF1A"),hn=["src"],_n=s("\u6E29\u99A8\u63D0\u793A\uFF1A\u4E0A\u8FF0\u7B2C\u4E09\u4E2A\u6846\u662F\u4EE5\u63D2\u4EF6\u7684 API \u5F62\u5F0F\u8FDB\u884C\u8C03\u7528\uFF0C\u5982\u679C\u60F3\u4E86\u89E3 Babel \u7684\u63D2\u4EF6\u5F00\u53D1\uFF0C\u53EF\u4EE5\u67E5\u770B "),gn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjamiebuilds%2Fbabel-handbook%2Fblob%2Fmaster%2Ftranslations%2Fzh-Hans%2Fplugin-handbook.md%23toc-writing-your-first-babel-plugin",target:"_blank",rel:"noopener noreferrer"},Fn=s("Babel \u63D2\u4EF6\u624B\u518C / \u7F16\u5199\u4F60\u7684\u7B2C\u4E00\u4E2A Babel \u63D2\u4EF6"),fn=s("\u3002"),yn=s("\u5982\u679C\u4F60\u89C9\u5F97 Babel \u7684\u7F16\u8BD1\u8FC7\u7A0B\u592A\u8FC7\u4E8E\u7B80\u5355\uFF0C\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u66F4\u9AD8\u9636\u7684\u73A9\u6CD5\uFF0C\u6BD4\u5982\u81EA\u5DF1\u8BBE\u8BA1\u8BCD\u6CD5\u548C\u8BED\u6CD5\u89C4\u5219\u4ECE\u800C\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684\u7F16\u8BD1\u5668\uFF08Babel \u5185\u7F6E\u4E86\u8FD9\u4E9B\u89C4\u5219\uFF09\uFF0C\u4F60\u5B8C\u5168\u53EF\u4EE5\u4E0D\u53EA\u662F\u505A\u51FA\u4E00\u4E2A\u6E90\u5230\u6E90\u7684\u8F6C\u6362\u7F16\u8BD1\u5668\uFF0C\u800C\u662F\u5B9E\u73B0\u4E00\u4E2A\u771F\u6B63\u7684\u4ECE JavaScript \uFF08TypeScript\uFF09 \u5230\u673A\u5668\u4EE3\u7801\u7684\u5B8C\u6574\u7F16\u8BD1\u5668\uFF0C\u5305\u62EC\u5B9E\u73B0\u4E2D\u95F4\u4EE3\u7801 IR \u4EE5\u53CA\u63D0\u4F9B\u673A\u5668\u7684\u8FD0\u884C\u73AF\u5883\u7B49\uFF0C\u8FD9\u91CC\u7ED9\u51FA\u4E00\u4E2A\u53EF\u4EE5\u5C1D\u8BD5\u8FD9\u79CD\u9AD8\u9636\u73A9\u6CD5\u7684\u5E93\u5305 "),Sn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftunnelvisionlabs%2Fantlr4ts",target:"_blank",rel:"noopener noreferrer"},Tn=s("antlr4ts"),wn=s("\uFF08\u53EF\u4EE5\u914D\u5408\u4EA4\u53C9\u7F16\u8BD1\u5DE5\u5177\u94FE "),vn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Friscv%2Friscv-gnu-toolchain",target:"_blank",rel:"noopener noreferrer"},jn=s("riscv-gnu-toolchain"),An=s("\uFF0Cgcc\u7F16\u8BD1\u5DE5\u5177\u7684\u5236\u4F5C\u8FD8\u662F\u975E\u5E38\u8017\u65F6\u7684\uFF09\u3002");function En(t,Pn){const a=o("ExternalLinkIcon");return c(),r(l,null,[b,k,m,n("img",{src:t.$withBase("/assets/jsInterview/c88916e811d348938f248080125a09b0_tplv-k3u1fbpfcp-watermark.awebp"),alt:"demo"},null,8,d),h,n("img",{src:t.$withBase("/assets/jsInterview/deploy.awebp"),alt:"demo"},null,8,_),g,n("p",null,[F,n("a",f,[y,e(a)]),S]),n("ul",null,[T,w,n("li",null,[n("p",null,[v,n("a",j,[A,e(a)]),E])])]),n("p",null,[P,n("a",x,[B,e(a)]),C,n("a",I,[V,e(a)]),M]),N,n("p",null,[J,n("a",D,[q,e(a)]),z,n("a",G,[U,e(a)]),$]),H,n("p",null,[L,n("a",R,[Z,e(a)]),O,n("a",X,[K,e(a)]),Q]),n("blockquote",null,[n("p",null,[W,n("a",Y,[nn,e(a)]),sn])]),an,n("p",null,[en,n("a",pn,[tn,e(a)]),on]),cn,n("p",null,[rn,n("a",ln,[un,e(a)]),bn,n("a",kn,[mn,e(a)]),dn]),n("img",{src:t.$withBase("/assets/jsInterview/d20e49a8926d406bba93a6b0769572e6_tplv-k3u1fbpfcp-watermark.awebp"),alt:"demo"},null,8,hn),n("blockquote",null,[n("p",null,[_n,n("a",gn,[Fn,e(a)]),fn])]),n("p",null,[yn,n("a",Sn,[Tn,e(a)]),wn,n("a",vn,[jn,e(a)]),An])],64)}var Cn=i(u,[["render",En]]);export{Cn as default};
