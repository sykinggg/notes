import{e as n}from"./app.f4829677.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u7EC4\u4EF6\u5316" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5316" aria-hidden="true">#</a> \u7EC4\u4EF6\u5316</h1><p>Vue.js \u53E6\u4E00\u4E2A\u6838\u5FC3\u601D\u60F3\u662F\u7EC4\u4EF6\u5316\u3002\u6240\u8C13\u7EC4\u4EF6\u5316\uFF0C\u5C31\u662F\u628A\u9875\u9762\u62C6\u5206\u6210\u591A\u4E2A\u7EC4\u4EF6 (component)\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u4F9D\u8D56\u7684 CSS\u3001JavaScript\u3001\u6A21\u677F\u3001\u56FE\u7247\u7B49\u8D44\u6E90\u653E\u5728\u4E00\u8D77\u5F00\u53D1\u548C\u7EF4\u62A4\u3002\u7EC4\u4EF6\u662F\u8D44\u6E90\u72EC\u7ACB\u7684\uFF0C\u7EC4\u4EF6\u5728\u7CFB\u7EDF\u5185\u90E8\u53EF\u590D\u7528\uFF0C\u7EC4\u4EF6\u548C\u7EC4\u4EF6\u4E4B\u95F4\u53EF\u4EE5\u5D4C\u5957\u3002</p><p>\u5728\u7528 Vue.js \u5F00\u53D1\u5B9E\u9645\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u5C31\u662F\u50CF\u642D\u79EF\u6728\u4E00\u6837\uFF0C\u7F16\u5199\u4E00\u5806\u7EC4\u4EF6\u62FC\u88C5\u751F\u6210\u9875\u9762\u3002\u5728 Vue.js \u7684\u5B98\u7F51\u4E2D\uFF0C\u4E5F\u662F\u82B1\u4E86\u5927\u7BC7\u5E45\u6765\u4ECB\u7ECD\u4EC0\u4E48\u662F\u7EC4\u4EF6\uFF0C\u5982\u4F55\u7F16\u5199\u7EC4\u4EF6\u4EE5\u53CA\u7EC4\u4EF6\u62E5\u6709\u7684\u5C5E\u6027\u548C\u7279\u6027\u3002</p><p>\u90A3\u4E48\u5728\u8FD9\u4E00\u7AE0\u8282\uFF0C\u5C06\u4ECE\u6E90\u7801\u7684\u89D2\u5EA6\u6765\u5206\u6790 Vue \u7684\u7EC4\u4EF6\u5185\u90E8\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF0C\u53EA\u6709\u4E86\u89E3\u4E86\u5185\u90E8\u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u624D\u80FD\u8BA9\u4F7F\u7528\u5B83\u7684\u65F6\u5019\u66F4\u52A0\u5F97\u5FC3\u5E94\u624B\u3002</p><p>\u63A5\u4E0B\u6765\u4F1A\u7528 Vue-cli \u521D\u59CB\u5316\u7684\u4EE3\u7801\u4E3A\u4F8B\uFF0C\u6765\u5206\u6790\u4E00\u4E0B Vue \u7EC4\u4EF6\u521D\u59CB\u5316\u7684\u4E00\u4E2A\u8FC7\u7A0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8FD9\u91CC\u7684 h \u662F createElement \u65B9\u6CD5</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u76F8\u4FE1\u5F88\u591A\u540C\u5B66\u90FD\u5F88\u719F\u6089\uFF0C\u5B83\u548C\u4E0A\u4E00\u7AE0\u76F8\u540C\u7684\u70B9\u4E5F\u662F\u901A\u8FC7 <code>render</code> \u51FD\u6570\u53BB\u6E32\u67D3\u7684\uFF0C\u4E0D\u540C\u7684\u8FD9\u6B21\u901A\u8FC7 <code>createElement</code> \u4F20\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u7EC4\u4EF6\u800C\u4E0D\u662F\u4E00\u4E2A\u539F\u751F\u7684\u6807\u7B7E\uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\u5C31\u5F00\u59CB\u5206\u6790\u8FD9\u4E00\u8FC7\u7A0B\u3002</p>`,7);function p(t,o){return e}var l=s(a,[["render",p]]);export{l as default};
