import{_ as t,r as o,o as c,c as r,b as s,d as e,F as i,a as p,e as n}from"./app.41d9fe5b.js";const l={},d=p(`<h1 id="\u4ECE-javascript-\u8FC1\u79FB" tabindex="-1"><a class="header-anchor" href="#\u4ECE-javascript-\u8FC1\u79FB" aria-hidden="true">#</a> \u4ECE JavaScript \u8FC1\u79FB</h1><p>\u9996\u5148\uFF0C\u5047\u8BBE\u5982\u4E0B\uFF1A</p><ul><li>\u4F60\u4E86\u89E3 JavaScript\uFF1B</li><li>\u4F60\u4E86\u89E3\u5728\u9879\u76EE\u4E2D\u5E38\u7528\u7684\u65B9\u5F0F\u548C\u6784\u5EFA\u5DE5\u5177\uFF08\u5982\uFF1Awebpack\uFF09\u3002</li></ul><p>\u6709\u4E86\u4EE5\u4E0A\u5047\u8BBE\uFF0C\u4E00\u822C\u6765\u8BF4\uFF0C\u5C06 JavaScript \u4EE3\u7801\u8FC1\u79FB\u81F3 TypeScript \u5305\u62EC\u4EE5\u4E0B\u6B65\u9AA4\uFF1A</p><ul><li>\u6DFB\u52A0\u4E00\u4E2A <code>tsconfig.json</code> \u6587\u4EF6\uFF1B</li><li>\u628A\u6587\u4EF6\u6269\u5C55\u540D\u4ECE <code>.js</code> \u6539\u6210 <code>.ts</code>\uFF0C\u5F00\u59CB\u4F7F\u7528 <code>any</code> \u6765\u51CF\u5C11\u9519\u8BEF\uFF1B</li><li>\u5F00\u59CB\u5728 TypeScript \u4E2D\u5199\u4EE3\u7801\uFF0C\u5C3D\u53EF\u80FD\u7684\u51CF\u5C11 <code>any</code> \u7684\u4F7F\u7528\uFF1B</li><li>\u56DE\u5230\u65E7\u4EE3\u7801\uFF0C\u5F00\u59CB\u6DFB\u52A0\u7C7B\u578B\u6CE8\u89E3\uFF0C\u5E76\u4FEE\u590D\u5DF2\u8BC6\u522B\u7684\u9519\u8BEF\uFF1B</li><li>\u4E3A\u7B2C\u4E09\u65B9 JavaScript \u4EE3\u7801\u5B9A\u4E49\u73AF\u5883\u58F0\u660E\u3002</li></ul><p>\u8BA9\u8FDB\u4E00\u6B65\u8BA8\u8BBA\u5176\u4E2D\u7684\u51E0\u4E2A\u5173\u952E\u70B9\u3002</p><p>\u8BB0\u4F4F\uFF1A\u6240\u6709\u7684 JavaScript \u4EE3\u7801\u90FD\u662F\u6709\u6548\u7684 TypeScript \u4EE3\u7801\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u5982\u679C\u8BA9 TypeScript \u7F16\u8BD1\u5668\u7F16\u8BD1 TypeScript \u91CC\u7684 JavaScript \u4EE3\u7801\uFF0C\u7F16\u8BD1\u540E\u7684\u7ED3\u679C\u5C06\u4F1A\u4E0E\u539F\u59CB\u7684 JavaScript \u4EE3\u7801\u4E00\u6A21\u4E00\u6837\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u628A\u6587\u4EF6\u6269\u5C55\u540D\u4ECE <code>.js</code> \u6539\u6210 <code>.ts</code> \u5C06\u4E0D\u4F1A\u9020\u6210\u4EFB\u4F55\u8D1F\u9762\u7684\u5F71\u54CD\u3002</p><h2 id="\u51CF\u5C11\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u51CF\u5C11\u9519\u8BEF" aria-hidden="true">#</a> \u51CF\u5C11\u9519\u8BEF</h2><p>\u4EE3\u7801\u88AB\u8FC1\u79FB\u81F3 TypeScript \u540E\uFF0CTypeScript \u5C06\u4F1A\u7ACB\u5373\u5BF9\u4F60\u7684\u4EE3\u7801\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\uFF0C\u4F60\u7684 JavaScript \u4EE3\u7801\u53EF\u80FD\u5E76\u4E0D\u50CF\u60F3\u8C61\u4E2D\u90A3\u6837\u6574\u9F50\u4E86\uFF0C\u56E0\u6B64\u4F60\u53EF\u80FD\u4F1A\u6536\u5230\u4E00\u4E9B\u62A5\u9519\u4FE1\u606F\u3002\u8FD9\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>any</code> \u6765\u89E3\u51B3\u5927\u90E8\u5206\u7684\u62A5\u9519\u95EE\u9898\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token string">&#39;hey&#39;</span><span class="token punctuation">;</span>

bar <span class="token operator">=</span> foo<span class="token punctuation">;</span> <span class="token comment">// Error: \u4E0D\u80FD\u628A number \u7C7B\u578B\u8D4B\u503C\u7ED9 string \u7C7B\u578B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u867D\u7136\u8FD9\u4E9B\u9519\u8BEF\u662F\u6709\u6548\u7684\uFF0C\u5E76\u4E14\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u6839\u636E\u8FD9\u4E9B\u9519\u8BEF\u6240\u63A8\u65AD\u51FA\u7684\u4FE1\u606F\u6BD4\u4EE3\u7801\u5E93\u7684\u4E0D\u540C\u90E8\u5206\u7684\u539F\u59CB\u4F5C\u8005\u60F3\u8C61\u7684\u66F4\u597D\uFF0C\u4F46\u662F\u4F60\u7684\u91CD\u70B9\u662F\u5728\u9010\u6B65\u66F4\u65B0\u65E7\u4EE3\u7801\u5E93\u7684\u540C\u65F6\uFF0C\u7528 TypeScript \u7F16\u5199\u65B0\u4EE3\u7801\u3002\u5728\u8FD9\u91CC\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\u6765\u51CF\u5C11\u6B64\u9519\u8BEF\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token string">&#39;hey&#39;</span><span class="token punctuation">;</span>

bar <span class="token operator">=</span> foo <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4ECE\u53E6\u4E00\u65B9\u9762\u6765\u8BF4\uFF0C\u4F60\u53EF\u80FD\u60F3\u7528 <code>any</code> \u7528\u4F5C\u7C7B\u578B\u6CE8\u89E3\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token string">&#39;hey&#39;</span><span class="token punctuation">;</span>
bar <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: \u4E0D\u80FD\u628A\u4E00\u4E2A number \u7C7B\u578B\u8D4B\u503C\u7ED9 string \u7C7B\u578B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u51CF\u5C11\u8FD9\u79CD\u9519\u8BEF\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6DFB\u52A0 &#39;any&#39;</span>
  <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token string">&#39;hey&#39;</span><span class="token punctuation">;</span>
bar <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">NOTICE</p><p>\u4F7F\u7528\u6B64\u79CD\u65B9\u5F0F\u6765\u51CF\u5C11\u9519\u8BEF\u662F\u5371\u9669\u7684\uFF0C\u4F46\u662F\u5B83\u5141\u8BB8\u4F60\u5C06\u6CE8\u610F\u529B\u8F6C\u79FB\u5230\u4F60\u7684\u65B0 TypeScript \u4EE3\u7801\u9519\u8BEF\u4E0A\u3002\u5F53\u4F60\u8FDB\u884C\u4E0B\u4E00\u6B65\u524D\uFF0C\u6700\u597D\u8981\u7559\u4E0B <code>// TODO</code> \u7684\u6CE8\u91CA\u3002</p></div><h2 id="\u7B2C\u4E09\u65B9\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u65B9\u4EE3\u7801" aria-hidden="true">#</a> \u7B2C\u4E09\u65B9\u4EE3\u7801</h2><p>\u4F60\u53EF\u4EE5\u5C06\u4F60\u7684 JavaScript \u4EE3\u7801\u6539\u6210 TypeScript \u4EE3\u7801\uFF0C\u4F46\u662F\u4F60\u4E0D\u80FD\u8BA9\u6574\u4E2A\u4E16\u754C\u90FD\u4F7F\u7528 TypeScript\u3002\u8FD9\u6B63\u662F TypeScript \u73AF\u5883\u58F0\u660E\u652F\u6301\u7684\u5730\u65B9\u3002\u6211\u5EFA\u8BAE\u4F60\u4EE5\u521B\u5EFA\u4E00\u4E2A <code>vendor.d.ts</code> \u6587\u4EF6\u4F5C\u4E3A\u5F00\u59CB\uFF08<code>.d.ts</code> \u6587\u4EF6\u6269\u5C55\u540D\u6307\u5B9A\u8FD9\u4E2A\u6587\u4EF6\u662F\u4E00\u4E2A\u58F0\u660E\u6587\u4EF6\uFF09\uFF0C\u7136\u540E\u6211\u5411\u6587\u4EF6\u91CC\u6DFB\u52A0\u4E1C\u897F\u3002\u6216\u8005\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u9488\u5BF9\u4E8E\u7279\u5B9A\u5E93\u7684\u58F0\u660E\u6587\u4EF6\uFF0C\u5982\u4E3A jquery \u521B\u5EFA <code>jquery.d.ts</code> \u6587\u4EF6\u3002</p>`,19),u={class:"custom-container tip"},k=s("p",{class:"custom-container-title"},"NOTICE",-1),b=n("\u51E0\u4E4E\u6392\u540D\u524D 90% \u7684 JavaScript \u5E93\u7684\u58F0\u660E\u6587\u4EF6\u5B58\u5728\u4E8E "),m={href:"https://github.com/borisyankov/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"},y=n("DefinitelyTyped"),h=n(" \u4ED3\u5E93\u91CC\uFF0C\u5728\u521B\u5EFA\u81EA\u5DF1\u5B9A\u4E49\u7684\u58F0\u660E\u6587\u4EF6\u4E4B\u524D\uFF0C\u5EFA\u8BAE\u4F60\u5148\u53BB\u4ED3\u5E93\u4E2D\u5BFB\u627E\u662F\u5426\u6709\u5BF9\u5E94\u7684\u58F0\u660E\u6587\u4EF6\u3002\u5C3D\u7BA1\u5982\u6B64\uFF0C\u521B\u5EFA\u4E00\u4E2A\u58F0\u660E\u6587\u4EF6\u8FD9\u79CD\u5FEB\u901F\u4F46\u4E0D\u597D\u7684\u65B9\u5F0F\u662F\u51CF\u5C0F\u4F7F\u7528 TypeScript \u521D\u59CB\u963B\u529B\u7684\u91CD\u8981\u6B65\u9AA4"),_=p(`<p>\u6839\u636E <code>jquery</code> \u7684\u4F7F\u7528\uFF0C\u4F60\u53EF\u4EE5\u975E\u5E38\u7B80\u5355\u5FEB\u901F\u7684\u4E3A\u5B83\u521B\u5EFA\u4E00\u4E2A\u5B9A\u4E49\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">var</span> $<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6709\u65F6\uFF0C\u4F60\u53EF\u80FD\u60F3\u5728\u67D0\u4E9B\u5185\u5BB9\uFF08\u5982 <code>jQuery</code>\uFF09\u4E0A\u6DFB\u52A0\u663E\u5F0F\u7684\u6CE8\u89E3\uFF0C\u5E76\u4E14\u4F60\u4F1A\u5728\u7C7B\u578B\u58F0\u660E\u7A7A\u95F4\u4E2D\u4F7F\u7528\u5B83\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>type</code> \u5173\u952E\u5B57\u5FEB\u901F\u7684\u5B9E\u73B0\u5B83\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">JQuery</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">var</span> $<span class="token operator">:</span> JQuery<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u63D0\u4F9B\u7ED9\u4F60\u4E00\u4E2A\u66F4\u6E05\u6670\u7684\u4F7F\u7528\u6A21\u5F0F\u3002</p>`,5),v=n("\u4E00\u4E2A\u9AD8\u8D28\u91CF\u7684 "),g=s("code",null,"jquery.d.ts",-1),f=n(" \u5DF2\u7ECF\u5728 "),w={href:"https://github.com/borisyankov/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"},S=n("DefinitelyTyped"),T=n(" \u4E2D\u5B58\u5728\u3002\u73B0\u5728\u4F60\u5DF2\u7ECF\u77E5\u9053\u5982\u4F55\u5728\u4F7F\u7528\u7B2C\u4E09\u65B9 JavaScript \u6A21\u5757\u65F6\uFF0C\u5FEB\u901F\u514B\u670D\u4ECE JavaScript \u81F3 TypeScript \u7684\u963B\u529B\u4E86\u3002\u5728\u63A5\u4E0B\u53BB\u7684\u7AE0\u8282\uFF0C\u5C06\u4F1A\u8BA8\u8BBA\u73AF\u5883\u58F0\u660E\u3002"),x=s("h2",{id:"\u7B2C\u4E09\u65B9\u7684-npm-\u6A21\u5757",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u7B2C\u4E09\u65B9\u7684-npm-\u6A21\u5757","aria-hidden":"true"},"#"),n(" \u7B2C\u4E09\u65B9\u7684 NPM \u6A21\u5757")],-1),j=n("\u4E0E\u5168\u5C40\u53D8\u91CF\u58F0\u660E\u76F8\u4F3C\uFF0C\u4F60\u53EF\u4EE5\u5FEB\u901F\u7684\u5B9A\u4E49\u4E00\u4E2A\u5168\u5C40\u6A21\u5757\uFF0C\u5982\uFF1A\u5BF9\u4E8E "),J=s("code",null,"jquery",-1),q=n("\uFF0C\u5982\u679C\u4F60\u60F3\u628A\u5B83\u4F5C\u4E3A\u4E00\u4E2A\u6A21\u5757\u6765\u4F7F\u7528\uFF08"),N={href:"https://www.npmjs.com/package/jquery",target:"_blank",rel:"noopener noreferrer"},D=n("NPM"),E=n("\uFF09\uFF0C\u53EF\u4EE5\u81EA\u5DF1\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u5B9E\u73B0\uFF1A"),I=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;jquery&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u4F60\u5C31\u53EF\u4EE5\u5728\u5FC5\u8981\u65F6\u5BFC\u5165\u5B83\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> $ <span class="token keyword">from</span> <span class="token string">&#39;jquery&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,3),O={class:"custom-container tip"},V=s("p",{class:"custom-container-title"},"TIP",-1),B=n("\u518D\u4E00\u6B21\u8BF4\u660E\uFF0C\u4E00\u4E2A\u9AD8\u8D28\u91CF\u7684 "),C=s("code",null,"jquery.d.ts",-1),P=n(" \u5DF2\u7ECF\u5728 "),Q={href:"https://github.com/borisyankov/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"},$=n("DefinitelyTyped"),F=n(" \u4E2D\u5B58\u5728\uFF0C\u4F46\u662F\u53EF\u80FD\u5728\u4F60\u7684\u5305\u91CC\u6CA1\u6709\uFF0C\u90A3\u4E48\uFF0C\u4F60\u73B0\u5728\u6709\u4E00\u4E2A\u7B80\u5355\u5FEB\u901F\u7684\u65B9\u5F0F\u6765\u7EE7\u7EED\u8FC1\u79FB\u3002"),L=p(`<h2 id="\u989D\u5916\u7684\u975E-javascript-\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u989D\u5916\u7684\u975E-javascript-\u8D44\u6E90" aria-hidden="true">#</a> \u989D\u5916\u7684\u975E JavaScript \u8D44\u6E90</h2><p>\u5728 TypeScript \u4E2D\uFF0C\u751A\u81F3\u53EF\u4EE5\u5141\u8BB8\u4F60\u5BFC\u5165\u4EFB\u4F55\u6587\u4EF6\uFF0C\u4F8B\u5982 <code>.css</code> \u6587\u4EF6\uFF08\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F webpack \u6837\u5F0F\u52A0\u8F7D\u5668\u6216 css \u6A21\u5757\uFF09\uFF0C\u4F60\u53EA\u8981\u6DFB\u52A0\u5982\u4E0B\u4EE3\u7801\uFF08\u653E\u5728 <code>global.d.ts</code>\uFF09\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;*.css&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u73B0\u5728\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>import * as foo from &#39;./some/file.css&#39;</code>\u3002</p><p>\u4E0E\u6B64\u76F8\u4F3C\uFF0C\u5982\u679C\u4F60\u60F3\u4F7F\u7528 html \u6A21\u7248\uFF08\u4F8B\u5982\uFF1Aangular\uFF09\uFF0C\u4F60\u53EF\u4EE5\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;*.html&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,6);function M(z,A){const a=o("ExternalLinkIcon");return c(),r(i,null,[d,s("div",u,[k,s("p",null,[b,s("a",m,[y,e(a)]),h])]),_,s("p",null,[v,g,f,s("a",w,[S,e(a)]),T]),x,s("p",null,[j,J,q,s("a",N,[D,e(a)]),E]),I,s("div",O,[V,s("p",null,[B,C,P,s("a",Q,[$,e(a)]),F])]),L],64)}var H=t(l,[["render",M],["__file","migrating.html.vue"]]);export{H as default};
