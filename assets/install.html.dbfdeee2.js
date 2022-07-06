import{_ as n,a as s}from"./app.9d3046e8.js";const a={},p=s(`<h1 id="\u8DEF\u7531\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u6CE8\u518C" aria-hidden="true">#</a> \u8DEF\u7531\u6CE8\u518C</h1><p>Vue \u4ECE\u5B83\u7684\u8BBE\u8BA1\u4E0A\u5C31\u662F\u4E00\u4E2A\u6E10\u8FDB\u5F0F JavaScript \u6846\u67B6\uFF0C\u5B83\u672C\u8EAB\u7684\u6838\u5FC3\u662F\u89E3\u51B3\u89C6\u56FE\u6E32\u67D3\u7684\u95EE\u9898\uFF0C\u5176\u5B83\u7684\u80FD\u529B\u5C31\u901A\u8FC7\u63D2\u4EF6\u7684\u65B9\u5F0F\u6765\u89E3\u51B3\u3002Vue-Router \u5C31\u662F\u5B98\u65B9\u7EF4\u62A4\u7684\u8DEF\u7531\u63D2\u4EF6\uFF0C\u5728\u4ECB\u7ECD\u5B83\u7684\u6CE8\u518C\u5B9E\u73B0\u4E4B\u524D\uFF0C\u5148\u6765\u5206\u6790\u4E00\u4E0B Vue \u901A\u7528\u7684\u63D2\u4EF6\u6CE8\u518C\u539F\u7406\u3002</p><h2 id="vue-use" tabindex="-1"><a class="header-anchor" href="#vue-use" aria-hidden="true">#</a> <code>Vue.use</code></h2><p>Vue \u63D0\u4F9B\u4E86 <code>Vue.use</code> \u7684\u5168\u5C40 API \u6765\u6CE8\u518C\u8FD9\u4E9B\u63D2\u4EF6\uFF0C\u6240\u4EE5\u5148\u6765\u5206\u6790\u4E00\u4E0B\u5B83\u7684\u5B9E\u73B0\u539F\u7406\uFF0C\u5B9A\u4E49\u5728 <code>vue/src/core/global-api/use.js</code> \u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initUse</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">Vue</span><span class="token operator">:</span> GlobalAPI</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function-variable function">use</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">plugin</span><span class="token operator">:</span> Function <span class="token operator">|</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> installedPlugins <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_installedPlugins <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_installedPlugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>installedPlugins<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token function">toArray</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    args<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> plugin<span class="token punctuation">.</span>install <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      plugin<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>plugin<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> plugin <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">plugin</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    installedPlugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><code>Vue.use</code> \u63A5\u53D7\u4E00\u4E2A <code>plugin</code> \u53C2\u6570\uFF0C\u5E76\u4E14\u7EF4\u62A4\u4E86\u4E00\u4E2A <code>_installedPlugins</code> \u6570\u7EC4\uFF0C\u5B83\u5B58\u50A8\u6240\u6709\u6CE8\u518C\u8FC7\u7684 <code>plugin</code>\uFF1B\u63A5\u7740\u53C8\u4F1A\u5224\u65AD <code>plugin</code> \u6709\u6CA1\u6709\u5B9A\u4E49 <code>install</code> \u65B9\u6CD5\uFF0C\u5982\u679C\u6709\u7684\u8BDD\u5219\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF0C\u5E76\u4E14\u8BE5\u65B9\u6CD5\u6267\u884C\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F <code>Vue</code>\uFF1B\u6700\u540E\u628A <code>plugin</code> \u5B58\u50A8\u5230 <code>installedPlugins</code> \u4E2D\u3002</p><p>\u53EF\u4EE5\u770B\u5230 Vue \u63D0\u4F9B\u7684\u63D2\u4EF6\u6CE8\u518C\u673A\u5236\u5F88\u7B80\u5355\uFF0C\u6BCF\u4E2A\u63D2\u4EF6\u90FD\u9700\u8981\u5B9E\u73B0\u4E00\u4E2A\u9759\u6001\u7684 <code>install</code> \u65B9\u6CD5\uFF0C\u5F53\u6267\u884C <code>Vue.use</code> \u6CE8\u518C\u63D2\u4EF6\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u6267\u884C\u8FD9\u4E2A <code>install</code> \u65B9\u6CD5\uFF0C\u5E76\u4E14\u5728\u8FD9\u4E2A <code>install</code> \u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u53EF\u4EE5\u62FF\u5230 <code>Vue</code> \u5BF9\u8C61\uFF0C\u8FD9\u6837\u7684\u597D\u5904\u5C31\u662F\u4F5C\u4E3A\u63D2\u4EF6\u7684\u7F16\u5199\u65B9\u4E0D\u9700\u8981\u518D\u989D\u5916\u53BB<code>import Vue</code> \u4E86\u3002</p><h2 id="\u8DEF\u7531\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5B89\u88C5" aria-hidden="true">#</a> \u8DEF\u7531\u5B89\u88C5</h2><p>Vue-Router \u7684\u5165\u53E3\u6587\u4EF6\u662F <code>src/index.js</code>\uFF0C\u5176\u4E2D\u5B9A\u4E49\u4E86 <code>VueRouter</code> \u7C7B\uFF0C\u4E5F\u5B9E\u73B0\u4E86 <code>install</code> \u7684\u9759\u6001\u65B9\u6CD5\uFF1A<code>VueRouter.install = install</code>\uFF0C\u5B83\u7684\u5B9A\u4E49\u5728 <code>src/install.js</code> \u4E2D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">let</span> _Vue
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">install</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>install<span class="token punctuation">.</span>installed <span class="token operator">&amp;&amp;</span> _Vue <span class="token operator">===</span> Vue<span class="token punctuation">)</span> <span class="token keyword">return</span>
  install<span class="token punctuation">.</span>installed <span class="token operator">=</span> <span class="token boolean">true</span>

  _Vue <span class="token operator">=</span> Vue

  <span class="token keyword">const</span> <span class="token function-variable function">isDef</span> <span class="token operator">=</span> <span class="token parameter">v</span> <span class="token operator">=&gt;</span> v <span class="token operator">!==</span> <span class="token keyword">undefined</span>

  <span class="token keyword">const</span> <span class="token function-variable function">registerInstance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> callVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_parentVnode
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>registerRouteInstance<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">i</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> callVal<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">beforeCreate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>router<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_routerRoot <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_router <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>router
        <span class="token keyword">this</span><span class="token punctuation">.</span>_router<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        Vue<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;_route&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_router<span class="token punctuation">.</span>history<span class="token punctuation">.</span>current<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_routerRoot <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$parent <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$parent<span class="token punctuation">.</span>_routerRoot<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span>
      <span class="token punctuation">}</span>
      <span class="token function">registerInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">destroyed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">registerInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;$router&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_routerRoot<span class="token punctuation">.</span>_router <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;$route&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_routerRoot<span class="token punctuation">.</span>_route <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;RouterView&#39;</span><span class="token punctuation">,</span> View<span class="token punctuation">)</span>
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;RouterLink&#39;</span><span class="token punctuation">,</span> Link<span class="token punctuation">)</span>

  <span class="token keyword">const</span> strats <span class="token operator">=</span> Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>optionMergeStrategies
  strats<span class="token punctuation">.</span>beforeRouteEnter <span class="token operator">=</span> strats<span class="token punctuation">.</span>beforeRouteLeave <span class="token operator">=</span> strats<span class="token punctuation">.</span>beforeRouteUpdate <span class="token operator">=</span> strats<span class="token punctuation">.</span>created
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><p>\u5F53\u7528\u6237\u6267\u884C <code>Vue.use(VueRouter)</code> \u7684\u65F6\u5019\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u5728\u6267\u884C <code>install</code> \u51FD\u6570\uFF0C\u4E3A\u4E86\u786E\u4FDD <code>install</code> \u903B\u8F91\u53EA\u6267\u884C\u4E00\u6B21\uFF0C\u7528\u4E86 <code>install.installed</code> \u53D8\u91CF\u505A\u5DF2\u5B89\u88C5\u7684\u6807\u5FD7\u4F4D\u3002\u53E6\u5916\u7528\u4E00\u4E2A\u5168\u5C40\u7684 <code>_Vue</code> \u6765\u63A5\u6536\u53C2\u6570 <code>Vue</code>\uFF0C\u56E0\u4E3A\u4F5C\u4E3A Vue \u7684\u63D2\u4EF6\u5BF9 <code>Vue</code> \u5BF9\u8C61\u662F\u6709\u4F9D\u8D56\u7684\uFF0C\u4F46\u53C8\u4E0D\u80FD\u53BB\u5355\u72EC\u53BB <code>import Vue</code>\uFF0C\u56E0\u4E3A\u90A3\u6837\u4F1A\u589E\u52A0\u5305\u4F53\u79EF\uFF0C\u6240\u4EE5\u5C31\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u62FF\u5230 <code>Vue</code> \u5BF9\u8C61\u3002</p><p>Vue-Router \u5B89\u88C5\u6700\u91CD\u8981\u7684\u4E00\u6B65\u5C31\u662F\u5229\u7528 <code>Vue.mixin</code> \u53BB\u628A <code>beforeCreate</code> \u548C <code>destroyed</code> \u94A9\u5B50\u51FD\u6570\u6CE8\u5165\u5230\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u4E2D\u3002<code>Vue.mixin</code> \u7684\u5B9A\u4E49\uFF0C\u5728 <code>vue/src/core/global-api/mixin.js</code> \u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initMixin</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">Vue</span><span class="token operator">:</span> GlobalAPI</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function-variable function">mixin</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">mixin</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">,</span> mixin<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5B83\u7684\u5B9E\u73B0\u5B9E\u9645\u4E0A\u975E\u5E38\u7B80\u5355\uFF0C\u5C31\u662F\u628A\u8981\u6DF7\u5165\u7684\u5BF9\u8C61\u901A\u8FC7 <code>mergeOptions</code> \u5408\u5E76\u5230 <code>Vue</code> \u7684 <code>options</code> \u4E2D\uFF0C\u7531\u4E8E\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570\u90FD\u4F1A\u5728 <code>extend</code> \u9636\u6BB5\u5408\u5E76 <code>Vue.options</code> \u5230\u81EA\u8EAB\u7684 <code>options</code> \u4E2D\uFF0C\u6240\u4EE5\u4E5F\u5C31\u76F8\u5F53\u4E8E\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u5B9A\u4E49\u4E86 <code>mixin</code> \u5B9A\u4E49\u7684\u9009\u9879\u3002</p><p>\u56DE\u5230 <code>Vue-Router</code> \u7684 <code>install</code> \u65B9\u6CD5\uFF0C\u5148\u770B\u6DF7\u5165\u7684 <code>beforeCreate</code> \u94A9\u5B50\u51FD\u6570\uFF0C\u5BF9\u4E8E\u6839 <code>Vue</code> \u5B9E\u4F8B\u800C\u8A00\uFF0C\u6267\u884C\u8BE5\u94A9\u5B50\u51FD\u6570\u65F6\u5B9A\u4E49\u4E86 <code>this._routerRoot</code> \u8868\u793A\u5B83\u81EA\u8EAB\uFF1B<code>this._router</code> \u8868\u793A <code>VueRouter</code> \u7684\u5B9E\u4F8B <code>router</code>\uFF0C\u5B83\u662F\u5728 <code>new Vue</code> \u7684\u65F6\u5019\u4F20\u5165\u7684\uFF1B\u53E6\u5916\u6267\u884C\u4E86 <code>this._router.init()</code> \u65B9\u6CD5\u521D\u59CB\u5316 <code>router</code>\uFF0C\u8FD9\u4E2A\u903B\u8F91\u4E4B\u540E\u4ECB\u7ECD\uFF0C\u7136\u540E\u7528 <code>defineReactive</code> \u65B9\u6CD5\u628A <code>this._route</code> \u53D8\u6210\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u4F5C\u7528\u4E4B\u540E\u4F1A\u4ECB\u7ECD\u3002\u800C\u5BF9\u4E8E\u5B50\u7EC4\u4EF6\u800C\u8A00\uFF0C\u7531\u4E8E\u7EC4\u4EF6\u662F\u6811\u72B6\u7ED3\u6784\uFF0C\u5728\u904D\u5386\u7EC4\u4EF6\u6811\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5B83\u4EEC\u5728\u6267\u884C\u8BE5\u94A9\u5B50\u51FD\u6570\u7684\u65F6\u5019 <code>this._routerRoot</code> \u59CB\u7EC8\u6307\u5411\u7684\u79BB\u5B83\u6700\u8FD1\u7684\u4F20\u5165\u4E86 <code>router</code> \u5BF9\u8C61\u4F5C\u4E3A\u914D\u7F6E\u800C\u5B9E\u4F8B\u5316\u7684\u7236\u5B9E\u4F8B\u3002</p><p>\u5BF9\u4E8E <code>beforeCreate</code> \u548C <code>destroyed</code> \u94A9\u5B50\u51FD\u6570\uFF0C\u5B83\u4EEC\u90FD\u4F1A\u6267\u884C <code>registerInstance</code> \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u7684\u4F5C\u7528\u4E5F\u662F\u4E4B\u540E\u4F1A\u4ECB\u7ECD\u3002</p><p>\u63A5\u7740\u7ED9 Vue \u539F\u578B\u4E0A\u5B9A\u4E49\u4E86 <code>$router</code> \u548C <code>$route</code> 2 \u4E2A\u5C5E\u6027\u7684 get \u65B9\u6CD5\uFF0C\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u5728\u7EC4\u4EF6\u5B9E\u4F8B\u4E0A\u53EF\u4EE5\u8BBF\u95EE <code>this.$router</code> \u4EE5\u53CA <code>this.$route</code>\uFF0C\u5B83\u4EEC\u7684\u4F5C\u7528\u4E4B\u540E\u4ECB\u7ECD\u3002</p><p>\u63A5\u7740\u53C8\u901A\u8FC7 <code>Vue.component</code> \u65B9\u6CD5\u5B9A\u4E49\u4E86\u5168\u5C40\u7684 <code>&lt;router-link&gt;</code> \u548C <code>&lt;router-view&gt;</code> 2 \u4E2A\u7EC4\u4EF6\uFF0C\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u5728\u5199\u6A21\u677F\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E24\u4E2A\u6807\u7B7E\uFF0C\u5B83\u4EEC\u7684\u4F5C\u7528\u4E5F\u662F\u4E4B\u540E\u4ECB\u7ECD\u3002</p><p>\u6700\u540E\u5B9A\u4E49\u4E86\u8DEF\u7531\u4E2D\u7684\u94A9\u5B50\u51FD\u6570\u7684\u5408\u5E76\u7B56\u7565\uFF0C\u548C\u666E\u901A\u7684\u94A9\u5B50\u51FD\u6570\u4E00\u6837\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u90A3\u4E48\u5230\u6B64\u4E3A\u6B62\uFF0C\u5206\u6790\u4E86 Vue-Router \u7684\u5B89\u88C5\u8FC7\u7A0B\uFF0CVue \u7F16\u5199\u63D2\u4EF6\u7684\u65F6\u5019\u901A\u5E38\u8981\u63D0\u4F9B\u9759\u6001\u7684 <code>install</code> \u65B9\u6CD5\uFF0C\u901A\u8FC7 <code>Vue.use(plugin)</code> \u65F6\u5019\uFF0C\u5C31\u662F\u5728\u6267\u884C <code>install</code> \u65B9\u6CD5\u3002<code>Vue-Router</code> \u7684 <code>install</code> \u65B9\u6CD5\u4F1A\u7ED9\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u6CE8\u5165 <code>beforeCreate</code> \u548C <code>destoryed</code> \u94A9\u5B50\u51FD\u6570\uFF0C\u5728 <code>beforeCreate</code> \u505A\u4E00\u4E9B\u79C1\u6709\u5C5E\u6027\u5B9A\u4E49\u548C\u8DEF\u7531\u521D\u59CB\u5316\u5DE5\u4F5C\uFF0C\u4E0B\u4E00\u8282\u5C31\u6765\u5206\u6790\u4E00\u4E0B <code>VueRouter</code> \u5BF9\u8C61\u7684\u5B9E\u73B0\u548C\u5B83\u7684\u521D\u59CB\u5316\u5DE5\u4F5C\u3002</p>`,21);function e(t,o){return p}var u=n(a,[["render",e],["__file","install.html.vue"]]);export{u as default};
