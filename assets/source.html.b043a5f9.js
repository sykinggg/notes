import{r as o,o as r,c as l,b as e,d as c,F as t,a as s,e as n}from"./app.78b6d3a3.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const d={},i=s(`<p>\u4E86\u89E3\u4E86\u6E90\u7801\u7684\u6587\u4EF6\u76EE\u5F55\uFF0C\u8FD9\u4E00\u8282\u770B\u770B\u5982\u4F55\u8C03\u8BD5\u6E90\u7801\u3002</p><p>\u5373\u4F7F\u7248\u672C\u53F7\u76F8\u540C\uFF08\u5F53\u524D\u6700\u65B0\u7248\u4E3A<code>17.0.0 RC</code>\uFF09\uFF0C\u4F46\u662F<code>facebook/react</code>\u9879\u76EE<code>master</code>\u5206\u652F\u7684\u4EE3\u7801\u548C\u4F7F\u7528<code>create-react-app</code>\u521B\u5EFA\u7684\u9879\u76EE<code>node_modules</code>\u4E0B\u7684<code>react</code>\u9879\u76EE\u4EE3\u7801\u8FD8\u662F\u6709\u4E9B\u533A\u522B\u3002</p><p>\u56E0\u4E3A<code>React</code>\u7684\u65B0\u4EE3\u7801\u90FD\u662F\u76F4\u63A5\u63D0\u4EA4\u5230<code>master</code>\u5206\u652F\uFF0C\u800C<code>create-react-app</code>\u5185\u7684<code>react</code>\u4F7F\u7528\u7684\u662F\u7A33\u5B9A\u7248\u7684\u5305\u3002</p><p>\u4E3A\u4E86\u59CB\u7EC8\u4F7F\u7528\u6700\u65B0\u7248<code>React</code>\u6559\u5B66\uFF0C\u8C03\u8BD5\u6E90\u7801\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\uFF1A</p><ol><li>\u4ECE<code>facebook/react</code>\u9879\u76EE<code>master</code>\u5206\u652F\u62C9\u53D6\u6700\u65B0\u6E90\u7801</li><li>\u57FA\u4E8E\u6700\u65B0\u6E90\u7801\u6784\u5EFA<code>react</code>\u3001<code>scheduler</code>\u3001<code>react-dom</code>\u4E09\u4E2A\u5305</li><li>\u901A\u8FC7<code>create-react-app</code>\u521B\u5EFA\u6D4B\u8BD5\u9879\u76EE\uFF0C\u5E76\u4F7F\u7528\u6B65\u9AA42\u521B\u5EFA\u7684\u5305\u4F5C\u4E3A\u9879\u76EE\u4F9D\u8D56\u7684\u5305</li></ol><h2 id="\u62C9\u53D6\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u6E90\u7801" aria-hidden="true">#</a> \u62C9\u53D6\u6E90\u7801</h2><p>\u62C9\u53D6<code>facebook/react</code>\u4EE3\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u62C9\u53D6\u4EE3\u7801</span>
<span class="token function">git</span> clone https://github.com/facebook/react.git

<span class="token comment"># \u5982\u679C\u62C9\u53D6\u901F\u5EA6\u5F88\u6162\uFF0C\u53EF\u4EE5\u8003\u8651\u5982\u4E0B2\u4E2A\u65B9\u6848\uFF1A</span>

<span class="token comment"># 1. \u4F7F\u7528cnpm\u4EE3\u7406</span>
<span class="token function">git</span> clone https://github.com.cnpmjs.org/facebook/react

<span class="token comment"># 2. \u4F7F\u7528\u7801\u4E91\u7684\u955C\u50CF\uFF08\u4E00\u5929\u4F1A\u4E0Ereact\u540C\u6B65\u4E00\u6B21\uFF09</span>
<span class="token function">git</span> clone https://gitee.com/mirrors/react.git

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5B89\u88C5\u4F9D\u8D56</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5207\u5165\u5230react\u6E90\u7801\u6240\u5728\u6587\u4EF6\u5939</span>
<span class="token builtin class-name">cd</span> react

<span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
<span class="token function">yarn</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6253\u5305<code>react</code>\u3001<code>scheduler</code>\u3001<code>react-dom</code>\u4E09\u4E2A\u5305\u4E3Adev\u73AF\u5883\u53EF\u4EE5\u4F7F\u7528\u7684<code>cjs</code>\u5305\u3002</p>`,11),m=n("\u7684\u6B65\u9AA4\u53EA\u5305\u542B\u5177\u4F53\u505A\u6CD5\uFF0C\u5BF9\u6BCF\u4E00\u6B65\u66F4\u8BE6\u7EC6\u7684\u4ECB\u7ECD\u53EF\u4EE5\u53C2\u8003"),b=e("code",null,"React",-1),u=n("\u6587\u6863"),h={href:"https://zh-hans.reactjs.org/docs/how-to-contribute.html#development-workflow",target:"_blank",rel:"noopener noreferrer"},k=n("\u6E90\u7801\u8D21\u732E\u7AE0\u8282"),g=s(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u6267\u884C\u6253\u5305\u547D\u4EE4</span>
<span class="token function">yarn</span> build react/index,react/jsx,react-dom/index,scheduler --type<span class="token operator">=</span>NODE


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>details \u7F51\u7EDC\u4E0D\u597D\u7684\u540C\u5B66\u770B\u8FD9\u91CC</p><p>\u5982\u679C\u7F51\u7EDC\u4E0D\u597D\uFF0C\u6267\u884C<code>yarn</code>\u547D\u4EE4\u65E0\u6CD5\u5B8C\u6210\u4F9D\u8D56\u5B89\u88C5\uFF0C\u6216\u8005\u6267\u884C<code>yarn build</code>\u65E0\u6CD5\u5B8C\u6210\u6253\u5305\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6253\u597D\u7684\u5305\u3002</p><p>\u7248\u672C\u4E3A<code>17.0.0-alpha.0</code></p>`,4),_={href:"https://gitee.com/kasong/react",target:"_blank",rel:"noopener noreferrer"},f=n("\u5730\u5740"),v=s(`<p>\u73B0\u5728\u6E90\u7801\u76EE\u5F55<code>build/node_modules</code>\u4E0B\u4F1A\u751F\u6210\u6700\u65B0\u4EE3\u7801\u7684\u5305\u3002\u4E3A<code>react</code>\u3001<code>react-dom</code>\u521B\u5EFA<code>yarn link</code>\u3002</p><blockquote><p>\u901A\u8FC7<code>yarn link</code>\u53EF\u4EE5\u6539\u53D8\u9879\u76EE\u4E2D\u4F9D\u8D56\u5305\u7684\u76EE\u5F55\u6307\u5411</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> build/node_modules/react
<span class="token comment"># \u7533\u660Ereact\u6307\u5411</span>
<span class="token function">yarn</span> <span class="token function">link</span>
<span class="token builtin class-name">cd</span> build/node_modules/react-dom
<span class="token comment"># \u7533\u660Ereact-dom\u6307\u5411</span>
<span class="token function">yarn</span> <span class="token function">link</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h2><p>\u63A5\u4E0B\u6765\u901A\u8FC7<code>create-react-app</code>\u5728\u5176\u4ED6\u5730\u65B9\u521B\u5EFA\u65B0\u9879\u76EE\u3002\u8FD9\u91CC\u968F\u610F\u8D77\u540D\uFF0C\u6BD4\u5982\u201Ca-react-demo\u201D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx create-react-app a-react-demo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5728\u65B0\u9879\u76EE\u4E2D\uFF0C\u5C06<code>react</code>\u4E0E<code>react-dom</code>2\u4E2A\u5305\u6307\u5411<code>facebook/react</code>\u4E0B\u521A\u624D\u751F\u6210\u7684\u5305\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06\u9879\u76EE\u5185\u7684react react-dom\u6307\u5411\u4E4B\u524D\u7533\u660E\u7684\u5305</span>
<span class="token function">yarn</span> <span class="token function">link</span> react react-dom
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u73B0\u5728\u8BD5\u8BD5\u5728<code>react/build/node_modules/react-dom/cjs/react-dom.development.js</code>\u4E2D\u968F\u610F\u6253\u5370\u4E9B\u4E1C\u897F\u3002</p><p>\u5728<code>a-react-demo</code>\u9879\u76EE\u4E0B\u6267\u884C<code>yarn start</code>\u3002\u73B0\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u5DF2\u7ECF\u53EF\u4EE5\u6253\u5370\u51FA\u8F93\u5165\u7684\u4E1C\u897F\u4E86\u3002</p><p>\u901A\u8FC7\u4EE5\u4E0A\u65B9\u6CD5\uFF0C\u7684\u8FD0\u884C\u65F6\u4EE3\u7801\u5C31\u548C<code>React</code>\u6700\u65B0\u4EE3\u7801\u4E00\u81F4\u4E86\u3002</p>`,11);function x(y,j){const a=o("ExternalLinkIcon");return r(),l(t,null,[i,e("blockquote",null,[e("p",null,[m,b,u,e("a",h,[k,c(a)])])]),g,e("p",null,[e("a",_,[f,c(a)])]),v],64)}var E=p(d,[["render",x]]);export{E as default};