import{a as n}from"./app.3aebe68d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> Vue-Router</h1><p>\u8DEF\u7531\u7684\u6982\u5FF5\u76F8\u4FE1\u5927\u90E8\u5206\u540C\u5B66\u5E76\u4E0D\u964C\u751F\uFF0C\u5B83\u7684\u4F5C\u7528\u5C31\u662F\u6839\u636E\u4E0D\u540C\u7684\u8DEF\u5F84\u6620\u5C04\u5230\u4E0D\u540C\u7684\u89C6\u56FE\u3002\u5728\u7528 Vue \u5F00\u53D1\u8FC7\u5B9E\u9645\u9879\u76EE\u7684\u65F6\u5019\u90FD\u4F1A\u7528\u5230 Vue-Router \u8FD9\u4E2A\u5B98\u65B9\u63D2\u4EF6\u6765\u5E2E\u89E3\u51B3\u8DEF\u7531\u7684\u95EE\u9898\u3002Vue-Router \u7684\u80FD\u529B\u5341\u5206\u5F3A\u5927\uFF0C\u5B83\u652F\u6301 <code>hash</code>\u3001<code>history</code>\u3001<code>abstract</code> 3 \u79CD\u8DEF\u7531\u65B9\u5F0F\uFF0C\u63D0\u4F9B\u4E86 <code>&lt;router-link&gt;</code> \u548C <code>&lt;router-view&gt;</code> 2 \u79CD\u7EC4\u4EF6\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u7B80\u5355\u7684\u8DEF\u7531\u914D\u7F6E\u548C\u4E00\u7CFB\u5217\u597D\u7528\u7684 API\u3002</p><p>\u5927\u90E8\u5206\u540C\u5B66\u5DF2\u7ECF\u638C\u63E1\u4E86\u8DEF\u7531\u7684\u57FA\u672C\u4F7F\u7528\uFF0C\u4F46\u4F7F\u7528\u7684\u8FC7\u7A0B\u4E2D\u4E5F\u96BE\u514D\u4F1A\u9047\u5230\u4E00\u4E9B\u5751\uFF0C\u90A3\u4E48\u8FD9\u4E00\u7AE0\u5C31\u6765\u6DF1\u6316 Vue-Router \u7684\u5B9E\u73B0\u7EC6\u8282\uFF0C\u4E00\u65E6\u638C\u63E1\u4E86\u5B83\u7684\u5B9E\u73B0\u539F\u7406\uFF0C\u90A3\u4E48\u5C31\u80FD\u5728\u5F00\u53D1\u4E2D\u5BF9\u8DEF\u7531\u7684\u4F7F\u7528\u66F4\u52A0\u6E38\u5203\u6709\u4F59\u3002</p><p>\u540C\u6837\u4E5F\u4F1A\u901A\u8FC7\u4E00\u4E9B\u5177\u4F53\u7684\u793A\u4F8B\u6765\u914D\u5408\u8BB2\u89E3\uFF0C\u5148\u6765\u770B\u4E00\u4E2A\u6700\u57FA\u672C\u4F7F\u7528\u4F8B\u5B50\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello App!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u4F7F\u7528 router-link \u7EC4\u4EF6\u6765\u5BFC\u822A. --&gt;</span>
    <span class="token comment">&lt;!-- \u901A\u8FC7\u4F20\u5165 \`to\` \u5C5E\u6027\u6307\u5B9A\u94FE\u63A5. --&gt;</span>
    <span class="token comment">&lt;!-- &lt;router-link&gt; \u9ED8\u8BA4\u4F1A\u88AB\u6E32\u67D3\u6210\u4E00\u4E2A \`&lt;a&gt;\` \u6807\u7B7E --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/foo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Go to Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Go to Bar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u8DEF\u7531\u51FA\u53E3 --&gt;</span>
  <span class="token comment">&lt;!-- \u8DEF\u7531\u5339\u914D\u5230\u7684\u7EC4\u4EF6\u5C06\u6E32\u67D3\u5728\u8FD9\u91CC --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>

<span class="token comment">// 1. \u5B9A\u4E49\uFF08\u8DEF\u7531\uFF09\u7EC4\u4EF6\u3002</span>
<span class="token comment">// \u53EF\u4EE5\u4ECE\u5176\u4ED6\u6587\u4EF6 import \u8FDB\u6765</span>
<span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;foo&lt;/div&gt;&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> Bar <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;bar&lt;/div&gt;&#39;</span> <span class="token punctuation">}</span>

<span class="token comment">// 2. \u5B9A\u4E49\u8DEF\u7531</span>
<span class="token comment">// \u6BCF\u4E2A\u8DEF\u7531\u5E94\u8BE5\u6620\u5C04\u4E00\u4E2A\u7EC4\u4EF6\u3002 \u5176\u4E2D&quot;component&quot; \u53EF\u4EE5\u662F</span>
<span class="token comment">// \u901A\u8FC7 Vue.extend() \u521B\u5EFA\u7684\u7EC4\u4EF6\u6784\u9020\u5668\uFF0C</span>
<span class="token comment">// \u6216\u8005\uFF0C\u53EA\u662F\u4E00\u4E2A\u7EC4\u4EF6\u914D\u7F6E\u5BF9\u8C61\u3002</span>
<span class="token comment">// \u665A\u70B9\u518D\u8BA8\u8BBA\u5D4C\u5957\u8DEF\u7531\u3002</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Foo <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/bar&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Bar <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// 3. \u521B\u5EFA router \u5B9E\u4F8B\uFF0C\u7136\u540E\u4F20 \`routes\` \u914D\u7F6E</span>
<span class="token comment">// \u4F60\u8FD8\u53EF\u4EE5\u4F20\u522B\u7684\u914D\u7F6E\u53C2\u6570, \u4E0D\u8FC7\u5148\u8FD9\u4E48\u7B80\u5355\u7740\u5427\u3002</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes <span class="token comment">// \uFF08\u7F29\u5199\uFF09\u76F8\u5F53\u4E8E routes: routes</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 4. \u521B\u5EFA\u548C\u6302\u8F7D\u6839\u5B9E\u4F8B\u3002</span>
<span class="token comment">// \u8BB0\u5F97\u8981\u901A\u8FC7 router \u914D\u7F6E\u53C2\u6570\u6CE8\u5165\u8DEF\u7531\uFF0C</span>
<span class="token comment">// \u4ECE\u800C\u8BA9\u6574\u4E2A\u5E94\u7528\u90FD\u6709\u8DEF\u7531\u529F\u80FD</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  router
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>\u8FD9\u662F\u4E00\u4E2A\u975E\u5E38\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u63A5\u4E0B\u6765\u5148\u4ECE <code>Vue.use(VueRouter)</code> \u8BF4\u8D77\u3002</p>`,7);function t(e,o){return p}var r=s(a,[["render",t]]);export{r as default};
