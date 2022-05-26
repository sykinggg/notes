import{_ as p,r as o,o as i,c as l,b as s,d as e,a as t,e as n}from"./app.11072343.js";const c={},d=t(`<h2 id="\u4ECEnew\u4E00\u4E2Avue\u5BF9\u8C61\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u4ECEnew\u4E00\u4E2Avue\u5BF9\u8C61\u5F00\u59CB" aria-hidden="true">#</a> \u4ECEnew\u4E00\u4E2AVue\u5BF9\u8C61\u5F00\u59CB</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">/*some options*/</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F88\u591A\u540C\u5B66\u597D\u5947\uFF0C\u5728new\u4E00\u4E2AVue\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u5185\u90E8\u7A76\u7ADF\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F</p><p>\u7A76\u7ADFVue.js\u662F\u5982\u4F55\u5C06data\u4E2D\u7684\u6570\u636E\u6E32\u67D3\u5230\u771F\u5B9E\u7684\u5BBF\u4E3B\u73AF\u5883\u4E2D\u7684\uFF1F</p><p>\u53C8\u662F\u5982\u4F55\u901A\u8FC7\u201C\u54CD\u5E94\u5F0F\u201D\u4FEE\u6539\u6570\u636E\u7684\uFF1F</p><p>template\u662F\u5982\u4F55\u88AB\u7F16\u8BD1\u6210\u771F\u5B9E\u73AF\u5883\u4E2D\u53EF\u7528\u7684HTML\u7684\uFF1F</p><p>Vue\u6307\u4EE4\u53C8\u662F\u5982\u4F55\u6267\u884C\u7684\uFF1F</p><p>\u5E26\u7740\u8FD9\u4E9B\u7591\u95EE\uFF0C\u4ECEVue\u7684\u6784\u9020\u7C7B\u5F00\u59CB\u770B\u8D77\u3002</p><h2 id="vue\u6784\u9020\u7C7B" tabindex="-1"><a class="header-anchor" href="#vue\u6784\u9020\u7C7B" aria-hidden="true">#</a> Vue\u6784\u9020\u7C7B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Vue</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Vue</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Vue is a constructor and should be called with the \`new\` keyword&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/*\u521D\u59CB\u5316*/</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue\u7684\u6784\u9020\u7C7B\u53EA\u505A\u4E86\u4E00\u4EF6\u4E8B\u60C5\uFF0C\u5C31\u662F\u8C03\u7528_init\u51FD\u6570\u8FDB\u884C\u521D\u59CB\u5316</p><p>\u6765\u770B\u4E00\u4E0Binit\u7684\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token operator">?</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">vm</span><span class="token operator">:</span> Component <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// a uid</span>
    vm<span class="token punctuation">.</span>_uid <span class="token operator">=</span> uid<span class="token operator">++</span>

    <span class="token keyword">let</span> startTag<span class="token punctuation">,</span> endTag
    <span class="token comment">/* istanbul ignore if */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      startTag <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vue-perf-init:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>vm<span class="token punctuation">.</span>_uid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      endTag <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vue-perf-end:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>vm<span class="token punctuation">.</span>_uid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      <span class="token function">mark</span><span class="token punctuation">(</span>startTag<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// a flag to avoid this being observed</span>
    <span class="token comment">/*\u4E00\u4E2A\u9632\u6B62vm\u5B9E\u4F8B\u81EA\u8EAB\u88AB\u89C2\u5BDF\u7684\u6807\u5FD7\u4F4D*/</span>
    vm<span class="token punctuation">.</span>_isVue <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token comment">// merge options</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>_isComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// optimize internal component instantiation</span>
      <span class="token comment">// since dynamic options merging is pretty slow, and none of the</span>
      <span class="token comment">// internal component options needs special treatment.</span>
      <span class="token function">initInternalComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
        <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span>
        options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        vm
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* istanbul ignore else */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">initProxy</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span>_renderProxy <span class="token operator">=</span> vm
    <span class="token punctuation">}</span>
    <span class="token comment">// expose real self</span>
    vm<span class="token punctuation">.</span>_self <span class="token operator">=</span> vm
    <span class="token comment">/*\u521D\u59CB\u5316\u751F\u547D\u5468\u671F*/</span>
    <span class="token function">initLifecycle</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
    <span class="token comment">/*\u521D\u59CB\u5316\u4E8B\u4EF6*/</span>
    <span class="token function">initEvents</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
    <span class="token comment">/*\u521D\u59CB\u5316render*/</span>
    <span class="token function">initRender</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
    <span class="token comment">/*\u8C03\u7528beforeCreate\u94A9\u5B50\u51FD\u6570\u5E76\u4E14\u89E6\u53D1beforeCreate\u94A9\u5B50\u4E8B\u4EF6*/</span>
    <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">)</span>
    <span class="token function">initInjections</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// resolve injections before data/props</span>
    <span class="token comment">/*\u521D\u59CB\u5316props\u3001methods\u3001data\u3001computed\u4E0Ewatch*/</span>
    <span class="token function">initState</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
    <span class="token function">initProvide</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// resolve provide after data/props</span>
    <span class="token comment">/*\u8C03\u7528created\u94A9\u5B50\u51FD\u6570\u5E76\u4E14\u89E6\u53D1created\u94A9\u5B50\u4E8B\u4EF6*/</span>
    <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;created&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">/* istanbul ignore if */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/*\u683C\u5F0F\u5316\u7EC4\u4EF6\u540D*/</span>
      vm<span class="token punctuation">.</span>_name <span class="token operator">=</span> <span class="token function">formatComponentName</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token function">mark</span><span class="token punctuation">(</span>endTag<span class="token punctuation">)</span>
      <span class="token function">measure</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>vm<span class="token punctuation">.</span>_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> init</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> startTag<span class="token punctuation">,</span> endTag<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/*\u6302\u8F7D\u7EC4\u4EF6*/</span>
      vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>_init\u4E3B\u8981\u505A\u4E86\u8FD9\u4E24\u4EF6\u4E8B\uFF1A</p><p>1.\u521D\u59CB\u5316\uFF08\u5305\u62EC\u751F\u547D\u5468\u671F\u3001\u4E8B\u4EF6\u3001render\u51FD\u6570\u3001state\u7B49\uFF09\u3002</p><p>2.$mount\u7EC4\u4EF6\u3002</p>`,16),r=n("\u5728\u751F\u547D\u94A9\u5B50beforeCreate\u4E0Ecreated\u4E4B\u95F4\u4F1A\u521D\u59CB\u5316state\uFF0C\u5728\u6B64\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u4F9D\u6B21\u521D\u59CB\u5316props\u3001methods\u3001data\u3001computed\u4E0Ewatch\uFF0C\u8FD9\u4E5F\u5C31\u662FVue.js\u5BF9options\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u201C\u54CD\u5E94\u5F0F\u5316\u201D\uFF08\u5373\u53CC\u5411\u7ED1\u5B9A\uFF09\u7684\u8FC7\u7A0B\u3002\u5BF9\u4E8EVue.js\u54CD\u5E94\u5F0F\u539F\u7406\u4E0D\u4E86\u89E3\u7684\u540C\u5B66\u53EF\u4EE5\u5148\u770B\u4E00\u4E0B\u7B14\u8005\u7684\u53E6\u4E00\u7247\u6587\u7AE0"),u={href:"https://github.com/answershuto/learnVue/blob/master/docs/%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86.MarkDown",target:"_blank",rel:"noopener noreferrer"},v=n("\u300AVue.js\u54CD\u5E94\u5F0F\u539F\u7406\u300B"),m=n("\u3002"),k=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*\u521D\u59CB\u5316props\u3001methods\u3001data\u3001computed\u4E0Ewatch*/</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initState</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span>_watchers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> opts <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options
  <span class="token comment">/*\u521D\u59CB\u5316props*/</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token function">initProps</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>props<span class="token punctuation">)</span>
  <span class="token comment">/*\u521D\u59CB\u5316\u65B9\u6CD5*/</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>methods<span class="token punctuation">)</span> <span class="token function">initMethods</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>methods<span class="token punctuation">)</span>
  <span class="token comment">/*\u521D\u59CB\u5316data*/</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">initData</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">/*\u8BE5\u7EC4\u4EF6\u6CA1\u6709data\u7684\u65F6\u5019\u7ED1\u5B9A\u4E00\u4E2A\u7A7A\u5BF9\u8C61*/</span>
    <span class="token function">observe</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* asRootData */</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/*\u521D\u59CB\u5316computed*/</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>computed<span class="token punctuation">)</span> <span class="token function">initComputed</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>computed<span class="token punctuation">)</span>
  <span class="token comment">/*\u521D\u59CB\u5316watchers*/</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>watch<span class="token punctuation">)</span> <span class="token function">initWatch</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>watch<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53CC\u5411\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5411\u7ED1\u5B9A" aria-hidden="true">#</a> \u53CC\u5411\u7ED1\u5B9A</h2><p>\u4EE5initData\u4E3A\u4F8B\uFF0C\u5BF9option\u7684data\u7684\u6570\u636E\u8FDB\u884C\u53CC\u5411\u7ED1\u5B9AOberver\uFF0C\u5176\u4ED6option\u53C2\u6570\u53CC\u5411\u7ED1\u5B9A\u7684\u6838\u5FC3\u539F\u7406\u662F\u4E00\u81F4\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">initData</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">/*\u5F97\u5230data\u6570\u636E*/</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>data
  data <span class="token operator">=</span> vm<span class="token punctuation">.</span>_data <span class="token operator">=</span> <span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
    <span class="token operator">?</span> <span class="token function">getData</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
    <span class="token operator">:</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">/*\u5224\u65AD\u662F\u5426\u662F\u5BF9\u8C61*/</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token string">&#39;data functions should return an object:\\n&#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function&#39;</span><span class="token punctuation">,</span>
      vm
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// proxy data on instance</span>
  <span class="token comment">/*\u904D\u5386data\u5BF9\u8C61*/</span>
  <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>props
  <span class="token keyword">let</span> i <span class="token operator">=</span> keys<span class="token punctuation">.</span>length

  <span class="token comment">//\u904D\u5386data\u4E2D\u7684\u6570\u636E</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*\u4FDD\u8BC1data\u4E2D\u7684key\u4E0D\u4E0Eprops\u4E2D\u7684key\u91CD\u590D\uFF0Cprops\u4F18\u5148\uFF0C\u5982\u679C\u6709\u51B2\u7A81\u4F1A\u4EA7\u751Fwarning*/</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>props <span class="token operator">&amp;&amp;</span> <span class="token function">hasOwn</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The data property &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; is already declared as a prop. </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Use prop default value instead.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        vm
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isReserved</span><span class="token punctuation">(</span>keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/*\u5224\u65AD\u662F\u5426\u662F\u4FDD\u7559\u5B57\u6BB5*/</span>

      <span class="token comment">/*\u8FD9\u91CC\u662F\u524D\u9762\u8BB2\u8FC7\u7684\u4EE3\u7406\uFF0C\u5C06data\u4E0A\u9762\u7684\u5C5E\u6027\u4EE3\u7406\u5230\u4E86vm\u5B9E\u4F8B\u4E0A*/</span>
      <span class="token function">proxy</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">_data</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/*Github:https://github.com/answershuto*/</span>
  <span class="token comment">// observe data</span>
  <span class="token comment">/*\u4ECE\u8FD9\u91CC\u5F00\u59CB\u8981observe\u4E86\uFF0C\u5F00\u59CB\u5BF9\u6570\u636E\u8FDB\u884C\u7ED1\u5B9A\uFF0C\u8FD9\u91CC\u6709\u5C24\u5927\u5927\u7684\u6CE8\u91CAasRootData\uFF0C\u8FD9\u6B65\u4F5C\u4E3A\u6839\u6570\u636E\uFF0C\u4E0B\u9762\u4F1A\u8FDB\u884C\u9012\u5F52observe\u8FDB\u884C\u5BF9\u6DF1\u5C42\u5BF9\u8C61\u7684\u7ED1\u5B9A\u3002*/</span>
  <span class="token function">observe</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* asRootData */</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),b=n("observe\u4F1A\u901A\u8FC7defineReactive\u5BF9data\u4E2D\u7684\u5BF9\u8C61\u8FDB\u884C\u53CC\u5411\u7ED1\u5B9A\uFF0C\u6700\u7EC8\u901A\u8FC7Object.defineProperty\u5BF9\u5BF9\u8C61\u8BBE\u7F6Esetter\u4EE5\u53CAgetter\u7684\u65B9\u6CD5\u3002getter\u7684\u65B9\u6CD5\u4E3B\u8981\u7528\u6765\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\uFF0C\u5BF9\u4E8E\u4F9D\u8D56\u6536\u96C6\u4E0D\u4E86\u89E3\u7684\u540C\u5B66\u53EF\u4EE5\u53C2\u8003\u7B14\u8005\u7684\u53E6\u4E00\u7BC7\u6587\u7AE0"),h={href:"https://github.com/answershuto/learnVue/blob/master/docs/%E4%BE%9D%E8%B5%96%E6%94%B6%E9%9B%86.MarkDown",target:"_blank",rel:"noopener noreferrer"},y=n("\u300A\u4F9D\u8D56\u6536\u96C6\u300B"),g=n("\u3002setter\u65B9\u6CD5\u4F1A\u5728\u5BF9\u8C61\u88AB\u4FEE\u6539\u7684\u65F6\u5019\u89E6\u53D1\uFF08\u4E0D\u5B58\u5728\u6DFB\u52A0\u5C5E\u6027\u7684\u60C5\u51B5\uFF0C\u6DFB\u52A0\u5C5E\u6027\u8BF7\u7528Vue.set\uFF09\uFF0C\u8FD9\u65F6\u5019setter\u4F1A\u901A\u77E5\u95ED\u5305\u4E2D\u7684Dep\uFF0CDep\u4E2D\u6709\u4E00\u4E9B\u8BA2\u9605\u4E86\u8FD9\u4E2A\u5BF9\u8C61\u6539\u53D8\u7684Watcher\u89C2\u5BDF\u8005\u5BF9\u8C61\uFF0CDep\u4F1A\u901A\u77E5Watcher\u5BF9\u8C61\u66F4\u65B0\u89C6\u56FE\u3002"),f=n("\u5982\u679C\u662F\u4FEE\u6539\u4E00\u4E2A\u6570\u7EC4\u7684\u6210\u5458\uFF0C\u8BE5\u6210\u5458\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u90A3\u53EA\u9700\u8981\u9012\u5F52\u5BF9\u6570\u7EC4\u7684\u6210\u5458\u8FDB\u884C\u53CC\u5411\u7ED1\u5B9A\u5373\u53EF\u3002\u4F46\u8FD9\u65F6\u5019\u51FA\u73B0\u4E86\u4E00\u4E2A\u95EE\u9898\uFF0C\u5982\u679C\u8FDB\u884Cpop\u3001push\u7B49\u64CD\u4F5C\u7684\u65F6\u5019\uFF0Cpush\u8FDB\u53BB\u7684\u5BF9\u8C61\u6839\u672C\u6CA1\u6709\u8FDB\u884C\u8FC7\u53CC\u5411\u7ED1\u5B9A\uFF0C\u66F4\u522B\u8BF4pop\u4E86\uFF0C\u90A3\u4E48\u5982\u4F55\u76D1\u542C\u6570\u7EC4\u7684\u8FD9\u4E9B\u53D8\u5316\u5462\uFF1F Vue.js\u63D0\u4F9B\u7684\u65B9\u6CD5\u662F\u91CD\u5199push\u3001pop\u3001shift\u3001unshift\u3001splice\u3001sort\u3001reverse\u8FD9\u4E03\u4E2A"),w={href:"http://v1-cn.vuejs.org/guide/list.html#%E5%8F%98%E5%BC%82%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},V=n("\u6570\u7EC4\u65B9\u6CD5"),_=n("\u3002\u4FEE\u6539\u6570\u7EC4\u539F\u578B\u65B9\u6CD5\u7684\u4EE3\u7801\u53EF\u4EE5\u53C2\u8003"),E={href:"https://github.com/vuejs/vue/blob/dev/src/core/observer/array.js",target:"_blank",rel:"noopener noreferrer"},x=n("observer/array.js"),D=n("\u4EE5\u53CA"),S={href:"https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js#L45",target:"_blank",rel:"noopener noreferrer"},O=n("observer/index.js"),N=n("\u3002"),M=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
  <span class="token literal-property property">dep</span><span class="token operator">:</span> Dep<span class="token punctuation">;</span>
  <span class="token literal-property property">vmCount</span><span class="token operator">:</span> number<span class="token punctuation">;</span> <span class="token comment">// number of vms that has this object as root $data</span>

  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//.......</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/*
          \u5982\u679C\u662F\u6570\u7EC4\uFF0C\u5C06\u4FEE\u6539\u540E\u53EF\u4EE5\u622A\u83B7\u54CD\u5E94\u7684\u6570\u7EC4\u65B9\u6CD5\u66FF\u6362\u6389\u8BE5\u6570\u7EC4\u7684\u539F\u578B\u4E2D\u7684\u539F\u751F\u65B9\u6CD5\uFF0C\u8FBE\u5230\u76D1\u542C\u6570\u7EC4\u6570\u636E\u53D8\u5316\u54CD\u5E94\u7684\u6548\u679C\u3002
          \u8FD9\u91CC\u5982\u679C\u5F53\u524D\u6D4F\u89C8\u5668\u652F\u6301__proto__\u5C5E\u6027\uFF0C\u5219\u76F4\u63A5\u8986\u76D6\u5F53\u524D\u6570\u7EC4\u5BF9\u8C61\u539F\u578B\u4E0A\u7684\u539F\u751F\u6570\u7EC4\u65B9\u6CD5\uFF0C\u5982\u679C\u4E0D\u652F\u6301\u8BE5\u5C5E\u6027\uFF0C\u5219\u76F4\u63A5\u8986\u76D6\u6570\u7EC4\u5BF9\u8C61\u7684\u539F\u578B\u3002
      */</span>
      <span class="token keyword">const</span> augment <span class="token operator">=</span> hasProto
        <span class="token operator">?</span> protoAugment  <span class="token comment">/*\u76F4\u63A5\u8986\u76D6\u539F\u578B\u7684\u65B9\u6CD5\u6765\u4FEE\u6539\u76EE\u6807\u5BF9\u8C61*/</span>
        <span class="token operator">:</span> copyAugment   <span class="token comment">/*\u5B9A\u4E49\uFF08\u8986\u76D6\uFF09\u76EE\u6807\u5BF9\u8C61\u6216\u6570\u7EC4\u7684\u67D0\u4E00\u4E2A\u65B9\u6CD5*/</span>
      <span class="token function">augment</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> arrayMethods<span class="token punctuation">,</span> arrayKeys<span class="token punctuation">)</span>

      <span class="token comment">/*\u5982\u679C\u662F\u6570\u7EC4\u5219\u9700\u8981\u904D\u5386\u6570\u7EC4\u7684\u6BCF\u4E00\u4E2A\u6210\u5458\u8FDB\u884Cobserve*/</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">observeArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">/*\u5982\u679C\u662F\u5BF9\u8C61\u5219\u76F4\u63A5walk\u8FDB\u884C\u7ED1\u5B9A*/</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */</span>
 <span class="token comment">/*\u76F4\u63A5\u8986\u76D6\u539F\u578B\u7684\u65B9\u6CD5\u6765\u4FEE\u6539\u76EE\u6807\u5BF9\u8C61\u6216\u6570\u7EC4*/</span>
<span class="token keyword">function</span> <span class="token function">protoAugment</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> <span class="token literal-property property">src</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* eslint-disable no-proto */</span>
  target<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> src
  <span class="token comment">/* eslint-enable no-proto */</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */</span>
<span class="token comment">/* istanbul ignore next */</span>
<span class="token comment">/*\u5B9A\u4E49\uFF08\u8986\u76D6\uFF09\u76EE\u6807\u5BF9\u8C61\u6216\u6570\u7EC4\u7684\u67D0\u4E00\u4E2A\u65B9\u6CD5*/</span>
<span class="token keyword">function</span> <span class="token function">copyAugment</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">src</span><span class="token operator">:</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">keys</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token function">def</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> src<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * not type checking this file because flow doesn&#39;t play well with
 * dynamically accessing methods on Array prototype
 */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> def <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../util/index&#39;</span>

<span class="token comment">/*\u53D6\u5F97\u539F\u751F\u6570\u7EC4\u7684\u539F\u578B*/</span>
<span class="token keyword">const</span> arrayProto <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype
<span class="token comment">/*\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u5BF9\u8C61\uFF0C\u4FEE\u6539\u8BE5\u5BF9\u8C61\u4E0A\u7684\u6570\u7EC4\u7684\u4E03\u4E2A\u65B9\u6CD5\uFF0C\u9632\u6B62\u6C61\u67D3\u539F\u751F\u6570\u7EC4\u65B9\u6CD5*/</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> arrayMethods <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>arrayProto<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * Intercept mutating methods and emit events
 */</span>
 <span class="token comment">/*\u8FD9\u91CC\u91CD\u5199\u4E86\u6570\u7EC4\u7684\u8FD9\u4E9B\u65B9\u6CD5\uFF0C\u5728\u4FDD\u8BC1\u4E0D\u6C61\u67D3\u539F\u751F\u6570\u7EC4\u539F\u578B\u7684\u60C5\u51B5\u4E0B\u91CD\u5199\u6570\u7EC4\u7684\u8FD9\u4E9B\u65B9\u6CD5\uFF0C\u622A\u83B7\u6570\u7EC4\u7684\u6210\u5458\u53D1\u751F\u7684\u53D8\u5316\uFF0C\u6267\u884C\u539F\u751F\u6570\u7EC4\u64CD\u4F5C\u7684\u540C\u65F6dep\u901A\u77E5\u5173\u8054\u7684\u6240\u6709\u89C2\u5BDF\u8005\u8FDB\u884C\u54CD\u5E94\u5F0F\u5904\u7406*/</span>
<span class="token punctuation">[</span>
  <span class="token string">&#39;push&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;pop&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;shift&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;unshift&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;splice&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;sort&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;reverse&#39;</span>
<span class="token punctuation">]</span>
<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// cache original method</span>
  <span class="token comment">/*\u5C06\u6570\u7EC4\u7684\u539F\u751F\u65B9\u6CD5\u7F13\u5B58\u8D77\u6765\uFF0C\u540E\u9762\u8981\u8C03\u7528*/</span>
  <span class="token keyword">const</span> original <span class="token operator">=</span> arrayProto<span class="token punctuation">[</span>method<span class="token punctuation">]</span>
  <span class="token function">def</span><span class="token punctuation">(</span>arrayMethods<span class="token punctuation">,</span> method<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">mutator</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// avoid leaking arguments:</span>
    <span class="token comment">// http://jsperf.com/closure-with-arguments</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      args<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*\u8C03\u7528\u539F\u751F\u7684\u6570\u7EC4\u65B9\u6CD5*/</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">original</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>

    <span class="token comment">/*\u6570\u7EC4\u65B0\u63D2\u5165\u7684\u5143\u7D20\u9700\u8981\u91CD\u65B0\u8FDB\u884Cobserve\u624D\u80FD\u54CD\u5E94\u5F0F*/</span>
    <span class="token keyword">const</span> ob <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__ob__
    <span class="token keyword">let</span> inserted
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>method<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&#39;push&#39;</span><span class="token operator">:</span>
        inserted <span class="token operator">=</span> args
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;unshift&#39;</span><span class="token operator">:</span>
        inserted <span class="token operator">=</span> args
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;splice&#39;</span><span class="token operator">:</span>
        inserted <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>inserted<span class="token punctuation">)</span> ob<span class="token punctuation">.</span><span class="token function">observeArray</span><span class="token punctuation">(</span>inserted<span class="token punctuation">)</span>
      
    <span class="token comment">// notify change</span>
    <span class="token comment">/*dep\u901A\u77E5\u6240\u6709\u6CE8\u518C\u7684\u89C2\u5BDF\u8005\u8FDB\u884C\u54CD\u5E94\u5F0F\u5904\u7406*/</span>
    ob<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u6570\u7EC4\u7684\u539F\u578B\u65B0\u5EFA\u4E00\u4E2AObject.create(arrayProto)\u5BF9\u8C61\uFF0C\u901A\u8FC7\u4FEE\u6539\u6B64\u539F\u578B\u53EF\u4EE5\u4FDD\u8BC1\u539F\u751F\u6570\u7EC4\u65B9\u6CD5\u4E0D\u88AB\u6C61\u67D3\u3002\u5982\u679C\u5F53\u524D\u6D4F\u89C8\u5668\u652F\u6301__proto__\u8FD9\u4E2A\u5C5E\u6027\u7684\u8BDD\u5C31\u53EF\u4EE5\u76F4\u63A5\u8986\u76D6\u8BE5\u5C5E\u6027\u4F7F\u6570\u7EC4\u5BF9\u8C61\u5177\u6709\u4E86\u91CD\u5199\u540E\u7684\u6570\u7EC4\u65B9\u6CD5\u3002\u5982\u679C\u6D4F\u89C8\u5668\u6CA1\u6709\u8BE5\u5C5E\u6027\uFF0C\u5219\u5FC5\u987B\u901A\u8FC7\u904D\u5386def\u6240\u6709\u9700\u8981\u91CD\u5199\u7684\u6570\u7EC4\u65B9\u6CD5\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u6548\u7387\u8F83\u4F4E\uFF0C\u6240\u4EE5\u4F18\u5148\u4F7F\u7528\u7B2C\u4E00\u79CD\u3002</p><p>\u5728\u4FDD\u8BC1\u4E0D\u6C61\u67D3\u4E0D\u8986\u76D6\u6570\u7EC4\u539F\u751F\u65B9\u6CD5\u6DFB\u52A0\u76D1\u542C\uFF0C\u4E3B\u8981\u505A\u4E86\u4E24\u4E2A\u64CD\u4F5C\uFF0C\u7B2C\u4E00\u662F\u901A\u77E5\u6240\u6709\u6CE8\u518C\u7684\u89C2\u5BDF\u8005\u8FDB\u884C\u54CD\u5E94\u5F0F\u5904\u7406\uFF0C\u7B2C\u4E8C\u662F\u5982\u679C\u662F\u6DFB\u52A0\u6210\u5458\u7684\u64CD\u4F5C\uFF0C\u9700\u8981\u5BF9\u65B0\u6210\u5458\u8FDB\u884Cobserve\u3002</p>`,4),C=n("\u4F46\u662F\u4FEE\u6539\u4E86\u6570\u7EC4\u7684\u539F\u751F\u65B9\u6CD5\u4EE5\u540E\u8FD8\u662F\u6CA1\u6CD5\u50CF\u539F\u751F\u6570\u7EC4\u4E00\u6837\u76F4\u63A5\u901A\u8FC7\u6570\u7EC4\u7684\u4E0B\u6807\u6216\u8005\u8BBE\u7F6Elength\u6765\u4FEE\u6539\u6570\u7EC4\uFF0C\u53EF\u4EE5\u901A\u8FC7"),I={href:"https://cn.vuejs.org/v2/guide/list.html#%E6%9B%BF%E6%8D%A2%E6%95%B0%E7%BB%84",target:"_blank",rel:"noopener noreferrer"},A=n("Vue.set\u4EE5\u53CAsplice\u65B9\u6CD5"),j=n("\u3002"),B=n("\u5BF9\u4E8E\u66F4\u5177\u4F53\u7684\u8BB2\u89E3\u6570\u636E\u53CC\u5411\u7ED1\u5B9A\u4EE5\u53CADep\u3001Watcher\u7684\u5B9E\u73B0\u53EF\u4EE5\u53C2\u8003\u7B14\u8005\u7684\u6587\u7AE0"),T={href:"https://github.com/answershuto/learnVue/blob/master/docs/%E4%BB%8E%E6%BA%90%E7%A0%81%E8%A7%92%E5%BA%A6%E5%86%8D%E7%9C%8B%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A.MarkDown",target:"_blank",rel:"noopener noreferrer"},F=n("\u300A\u4ECE\u6E90\u7801\u89D2\u5EA6\u518D\u770B\u6570\u636E\u7ED1\u5B9A\u300B"),J=n("\u3002"),R=s("h2",{id:"template\u7F16\u8BD1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#template\u7F16\u8BD1","aria-hidden":"true"},"#"),n(" template\u7F16\u8BD1")],-1),P=n("\u5728$mount\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u662F\u4F7F\u7528\u72EC\u7ACB\u6784\u5EFA\uFF0C\u5219\u4F1A\u5728\u6B64\u8FC7\u7A0B\u4E2D\u5C06template\u7F16\u8BD1\u6210render function\u3002\u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u91C7\u7528\u8FD0\u884C\u65F6\u6784\u5EFA\u3002\u5177\u4F53\u53C2\u8003"),L={href:"https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6",target:"_blank",rel:"noopener noreferrer"},$=n("\u8FD0\u884C\u65F6-\u7F16\u8BD1\u5668-vs-\u53EA\u5305\u542B\u8FD0\u884C\u65F6"),W=n("\u3002"),H=t(`<p>template\u662F\u5982\u4F55\u88AB\u7F16\u8BD1\u6210render function\u7684\u5462\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">baseCompile</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">template</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> CompilerOptions</span>
<span class="token punctuation">)</span><span class="token operator">:</span> CompiledResult <span class="token punctuation">{</span>
  <span class="token comment">/*parse\u89E3\u6790\u5F97\u5230ast\u6811*/</span>
  <span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>template<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token comment">/*
    \u5C06AST\u6811\u8FDB\u884C\u4F18\u5316
    \u4F18\u5316\u7684\u76EE\u6807\uFF1A\u751F\u6210\u6A21\u677FAST\u6811\uFF0C\u68C0\u6D4B\u4E0D\u9700\u8981\u8FDB\u884CDOM\u6539\u53D8\u7684\u9759\u6001\u5B50\u6811\u3002
    \u4E00\u65E6\u68C0\u6D4B\u5230\u8FD9\u4E9B\u9759\u6001\u6811\uFF0C\u5C31\u80FD\u505A\u4EE5\u4E0B\u8FD9\u4E9B\u4E8B\u60C5\uFF1A
    1.\u628A\u5B83\u4EEC\u53D8\u6210\u5E38\u6570\uFF0C\u8FD9\u6837\u5C31\u518D\u4E5F\u4E0D\u9700\u8981\u6BCF\u6B21\u91CD\u65B0\u6E32\u67D3\u65F6\u521B\u5EFA\u65B0\u7684\u8282\u70B9\u4E86\u3002
    2.\u5728patch\u7684\u8FC7\u7A0B\u4E2D\u76F4\u63A5\u8DF3\u8FC7\u3002
 */</span>
  <span class="token function">optimize</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token comment">/*\u6839\u636East\u6811\u751F\u6210\u6240\u9700\u7684code\uFF08\u5185\u90E8\u5305\u542Brender\u4E0EstaticRenderFns\uFF09*/</span>
  <span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token function">generate</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    ast<span class="token punctuation">,</span>
    <span class="token literal-property property">render</span><span class="token operator">:</span> code<span class="token punctuation">.</span>render<span class="token punctuation">,</span>
    <span class="token literal-property property">staticRenderFns</span><span class="token operator">:</span> code<span class="token punctuation">.</span>staticRenderFns
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>baseCompile\u9996\u5148\u4F1A\u5C06\u6A21\u677Ftemplate\u8FDB\u884Cparse\u5F97\u5230\u4E00\u4E2AAST\u8BED\u6CD5\u6811\uFF0C\u518D\u901A\u8FC7optimize\u505A\u4E00\u4E9B\u4F18\u5316\uFF0C\u6700\u540E\u901A\u8FC7generate\u5F97\u5230render\u4EE5\u53CAstaticRenderFns\u3002</p><h3 id="parse" tabindex="-1"><a class="header-anchor" href="#parse" aria-hidden="true">#</a> parse</h3>`,4),U=n("parse\u7684\u6E90\u7801\u53EF\u4EE5\u53C2\u89C1"),q={href:"https://github.com/answershuto/learnVue/blob/master/vue-src/compiler/parser/index.js#L53",target:"_blank",rel:"noopener noreferrer"},Q=n("https://github.com/answershuto/learnVue/blob/master/vue-src/compiler/parser/index.js#L53"),K=n("\u3002"),z=s("p",null,"parse\u4F1A\u7528\u6B63\u5219\u7B49\u65B9\u5F0F\u89E3\u6790template\u6A21\u677F\u4E2D\u7684\u6307\u4EE4\u3001class\u3001style\u7B49\u6570\u636E\uFF0C\u5F62\u6210AST\u8BED\u6CD5\u6811\u3002",-1),X=s("h3",{id:"optimize",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#optimize","aria-hidden":"true"},"#"),n(" optimize")],-1),G=s("p",null,"optimize\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u6807\u8BB0static\u9759\u6001\u8282\u70B9\uFF0C\u8FD9\u662FVue\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u7684\u4E00\u5904\u4F18\u5316\uFF0C\u540E\u9762\u5F53update\u66F4\u65B0\u754C\u9762\u65F6\uFF0C\u4F1A\u6709\u4E00\u4E2Apatch\u7684\u8FC7\u7A0B\uFF0Cdiff\u7B97\u6CD5\u4F1A\u76F4\u63A5\u8DF3\u8FC7\u9759\u6001\u8282\u70B9\uFF0C\u4ECE\u800C\u51CF\u5C11\u4E86\u6BD4\u8F83\u7684\u8FC7\u7A0B\uFF0C\u4F18\u5316\u4E86patch\u7684\u6027\u80FD\u3002",-1),Y=s("h3",{id:"generate",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#generate","aria-hidden":"true"},"#"),n(" generate")],-1),Z=s("p",null,"generate\u662F\u5C06AST\u8BED\u6CD5\u6811\u8F6C\u5316\u6210render funtion\u5B57\u7B26\u4E32\u7684\u8FC7\u7A0B\uFF0C\u5F97\u5230\u7ED3\u679C\u662Frender\u7684\u5B57\u7B26\u4E32\u4EE5\u53CAstaticRenderFns\u5B57\u7B26\u4E32\u3002",-1),nn=n("\u5177\u4F53\u7684template\u7F16\u8BD1\u5B9E\u73B0\u8BF7\u53C2\u8003"),sn={href:"https://github.com/answershuto/learnVue/blob/master/docs/%E8%81%8A%E8%81%8AVue%E7%9A%84template%E7%BC%96%E8%AF%91.MarkDown",target:"_blank",rel:"noopener noreferrer"},an=n("\u300A\u804A\u804AVue.js\u7684template\u7F16\u8BD1\u300B"),en=n("\u3002"),tn=s("h2",{id:"watcher\u5230\u89C6\u56FE",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#watcher\u5230\u89C6\u56FE","aria-hidden":"true"},"#"),n(" Watcher\u5230\u89C6\u56FE")],-1),pn=n("Watcher\u5BF9\u8C61\u4F1A\u901A\u8FC7\u8C03\u7528updateComponent\u65B9\u6CD5\u6765\u8FBE\u5230\u66F4\u65B0\u89C6\u56FE\u7684\u76EE\u7684\u3002\u8FD9\u91CC\u63D0\u4E00\u4E0B\uFF0C\u5176\u5B9EWatcher\u5E76\u4E0D\u662F\u5B9E\u65F6\u66F4\u65B0\u89C6\u56FE\u7684\uFF0CVue.js\u9ED8\u8BA4\u4F1A\u5C06Watcher\u5BF9\u8C61\u5B58\u5728\u4E00\u4E2A\u961F\u5217\u4E2D\uFF0C\u5728\u4E0B\u4E00\u4E2Atick\u65F6\u66F4\u65B0\u5F02\u6B65\u66F4\u65B0\u89C6\u56FE\uFF0C\u5B8C\u6210\u4E86\u6027\u80FD\u4F18\u5316\u3002\u5173\u4E8EnextTick\u611F\u5174\u8DA3\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5\u53C2\u8003"),on={href:"https://github.com/answershuto/learnVue/blob/master/docs/Vue.js%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0DOM%E7%AD%96%E7%95%A5%E5%8F%8AnextTick.MarkDown",target:"_blank",rel:"noopener noreferrer"},ln=n("\u300AVue.js\u5F02\u6B65\u66F4\u65B0DOM\u7B56\u7565\u53CAnextTick\u300B"),cn=n("\u3002"),dn=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>updateComponent\u5C31\u6267\u884C\u4E00\u53E5\u8BDD\uFF0C_render\u51FD\u6570\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684Vnode\u8282\u70B9\uFF0C\u4F20\u5165_update\u4E2D\u4E0E\u65E7\u7684VNode\u5BF9\u8C61\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u7ECF\u8FC7\u4E00\u4E2Apatch\u7684\u8FC7\u7A0B\u5F97\u5230\u4E24\u4E2AVNode\u8282\u70B9\u7684\u5DEE\u5F02\uFF0C\u6700\u540E\u5C06\u8FD9\u4E9B\u5DEE\u5F02\u6E32\u67D3\u5230\u771F\u5B9E\u73AF\u5883\u5F62\u6210\u89C6\u56FE\u3002</p><p>\u4EC0\u4E48\u662FVNode\uFF1F</p><h2 id="vnode" tabindex="-1"><a class="header-anchor" href="#vnode" aria-hidden="true">#</a> VNode</h2><p>\u5728\u5200\u8015\u706B\u79CD\u7684\u5E74\u4EE3\uFF0C\u9700\u8981\u5728\u5404\u4E2A\u4E8B\u4EF6\u65B9\u6CD5\u4E2D\u76F4\u63A5\u64CD\u4F5CDOM\u6765\u8FBE\u5230\u4FEE\u6539\u89C6\u56FE\u7684\u76EE\u7684\u3002\u4F46\u662F\u5F53\u5E94\u7528\u4E00\u5927\u5C31\u4F1A\u53D8\u5F97\u96BE\u4EE5\u7EF4\u62A4\u3002</p><p>\u90A3\u662F\u4E0D\u662F\u53EF\u4EE5\u628A\u771F\u5B9EDOM\u6811\u62BD\u8C61\u6210\u4E00\u68F5\u4EE5JavaScript\u5BF9\u8C61\u6784\u6210\u7684\u62BD\u8C61\u6811\uFF0C\u5728\u4FEE\u6539\u62BD\u8C61\u6811\u6570\u636E\u540E\u5C06\u62BD\u8C61\u6811\u8F6C\u5316\u6210\u771F\u5B9EDOM\u91CD\u7ED8\u5230\u9875\u9762\u4E0A\u5462\uFF1F\u4E8E\u662F\u865A\u62DFDOM\u51FA\u73B0\u4E86\uFF0C\u5B83\u662F\u771F\u5B9EDOM\u7684\u4E00\u5C42\u62BD\u8C61\uFF0C\u7528\u5C5E\u6027\u63CF\u8FF0\u771F\u5B9EDOM\u7684\u5404\u4E2A\u7279\u6027\u3002\u5F53\u5B83\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u53BB\u4FEE\u6539\u89C6\u56FE\u3002</p><p>\u53EF\u4EE5\u60F3\u8C61\uFF0C\u6700\u7B80\u5355\u7C97\u66B4\u7684\u65B9\u6CD5\u5C31\u662F\u5C06\u6574\u4E2ADOM\u7ED3\u6784\u7528innerHTML\u4FEE\u6539\u5230\u9875\u9762\u4E0A\uFF0C\u4F46\u662F\u8FD9\u6837\u8FDB\u884C\u91CD\u7ED8\u6574\u4E2A\u89C6\u56FE\u5C42\u662F\u76F8\u5F53\u6D88\u8017\u6027\u80FD\u7684\uFF0C\u662F\u4E0D\u662F\u53EF\u4EE5\u6BCF\u6B21\u53EA\u66F4\u65B0\u5B83\u7684\u4FEE\u6539\u5462\uFF1F\u6240\u4EE5Vue.js\u5C06DOM\u62BD\u8C61\u6210\u4E00\u4E2A\u4EE5JavaScript\u5BF9\u8C61\u4E3A\u8282\u70B9\u7684\u865A\u62DFDOM\u6811\uFF0C\u4EE5VNode\u8282\u70B9\u6A21\u62DF\u771F\u5B9EDOM\uFF0C\u53EF\u4EE5\u5BF9\u8FD9\u9897\u62BD\u8C61\u6811\u8FDB\u884C\u521B\u5EFA\u8282\u70B9\u3001\u5220\u9664\u8282\u70B9\u4EE5\u53CA\u4FEE\u6539\u8282\u70B9\u7B49\u64CD\u4F5C\uFF0C\u5728\u8FD9\u8FC7\u7A0B\u4E2D\u90FD\u4E0D\u9700\u8981\u64CD\u4F5C\u771F\u5B9EDOM\uFF0C\u53EA\u9700\u8981\u64CD\u4F5CJavaScript\u5BF9\u8C61\u540E\u53EA\u5BF9\u5DEE\u5F02\u4FEE\u6539\uFF0C\u76F8\u5BF9\u4E8E\u6574\u5757\u7684innerHTML\u7684\u7C97\u66B4\u5F0F\u4FEE\u6539\uFF0C\u5927\u5927\u63D0\u5347\u4E86\u6027\u80FD\u3002\u4FEE\u6539\u4EE5\u540E\u7ECF\u8FC7diff\u7B97\u6CD5\u5F97\u51FA\u4E00\u4E9B\u9700\u8981\u4FEE\u6539\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u518D\u5C06\u8FD9\u4E9B\u5C0F\u5355\u4F4D\u7684\u89C6\u56FE\u8FDB\u884C\u66F4\u65B0\u3002\u8FD9\u6837\u505A\u51CF\u5C11\u4E86\u5F88\u591A\u4E0D\u9700\u8981\u7684DOM\u64CD\u4F5C\uFF0C\u5927\u5927\u63D0\u9AD8\u4E86\u6027\u80FD\u3002</p><p>Vue\u5C31\u4F7F\u7528\u4E86\u8FD9\u6837\u7684\u62BD\u8C61\u8282\u70B9VNode\uFF0C\u5B83\u662F\u5BF9\u771F\u5B9EDOM\u7684\u4E00\u5C42\u62BD\u8C61\uFF0C\u800C\u4E0D\u4F9D\u8D56\u67D0\u4E2A\u5E73\u53F0\uFF0C\u5B83\u53EF\u4EE5\u662F\u6D4F\u89C8\u5668\u5E73\u53F0\uFF0C\u4E5F\u53EF\u4EE5\u662Fweex\uFF0C\u751A\u81F3\u662Fnode\u5E73\u53F0\u4E5F\u53EF\u4EE5\u5BF9\u8FD9\u6837\u4E00\u68F5\u62BD\u8C61DOM\u6811\u8FDB\u884C\u521B\u5EFA\u5220\u9664\u4FEE\u6539\u7B49\u64CD\u4F5C\uFF0C\u8FD9\u4E5F\u4E3A\u524D\u540E\u7AEF\u540C\u6784\u63D0\u4F9B\u4E86\u53EF\u80FD\u3002</p><p>\u5148\u6765\u770B\u4E00\u4E0BVue.js\u6E90\u7801\u4E2D\u5BF9VNode\u7C7B\u7684\u5B9A\u4E49\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">VNode</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> VNodeData <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">elm</span><span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">ns</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// rendered in this component&#39;s scope</span>
  <span class="token literal-property property">functionalContext</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// only for functional component root nodes</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> string <span class="token operator">|</span> number <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">componentOptions</span><span class="token operator">:</span> VNodeComponentOptions <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">componentInstance</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// component instance</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> VNode <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// component placeholder node</span>
  <span class="token literal-property property">raw</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// contains raw HTML? (server only)</span>
  <span class="token literal-property property">isStatic</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// hoisted static node</span>
  <span class="token literal-property property">isRootInsert</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// necessary for enter transition check</span>
  <span class="token literal-property property">isComment</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// empty comment placeholder?</span>
  <span class="token literal-property property">isCloned</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// is a cloned node?</span>
  <span class="token literal-property property">isOnce</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// is a v-once node?</span>

  <span class="token function">constructor</span> <span class="token punctuation">(</span>
    <span class="token parameter">tag<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    data<span class="token operator">?</span><span class="token operator">:</span> VNodeData<span class="token punctuation">,</span>
    children<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    text<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    elm<span class="token operator">?</span><span class="token operator">:</span> Node<span class="token punctuation">,</span>
    context<span class="token operator">?</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>
    componentOptions<span class="token operator">?</span><span class="token operator">:</span> VNodeComponentOptions</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*\u5F53\u524D\u8282\u70B9\u7684\u6807\u7B7E\u540D*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">=</span> tag
    <span class="token comment">/*\u5F53\u524D\u8282\u70B9\u5BF9\u5E94\u7684\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u5177\u4F53\u7684\u4E00\u4E9B\u6570\u636E\u4FE1\u606F\uFF0C\u662F\u4E00\u4E2AVNodeData\u7C7B\u578B\uFF0C\u53EF\u4EE5\u53C2\u8003VNodeData\u7C7B\u578B\u4E2D\u7684\u6570\u636E\u4FE1\u606F*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data
    <span class="token comment">/*\u5F53\u524D\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u662F\u4E00\u4E2A\u6570\u7EC4*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> children
    <span class="token comment">/*\u5F53\u524D\u8282\u70B9\u7684\u6587\u672C*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text
    <span class="token comment">/*\u5F53\u524D\u865A\u62DF\u8282\u70B9\u5BF9\u5E94\u7684\u771F\u5B9Edom\u8282\u70B9*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>elm <span class="token operator">=</span> elm
    <span class="token comment">/*\u5F53\u524D\u8282\u70B9\u7684\u540D\u5B57\u7A7A\u95F4*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ns <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token comment">/*\u7F16\u8BD1\u4F5C\u7528\u57DF*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> context
    <span class="token comment">/*\u51FD\u6570\u5316\u7EC4\u4EF6\u4F5C\u7528\u57DF*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>functionalContext <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token comment">/*\u8282\u70B9\u7684key\u5C5E\u6027\uFF0C\u88AB\u5F53\u4F5C\u8282\u70B9\u7684\u6807\u5FD7\uFF0C\u7528\u4EE5\u4F18\u5316*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>key
    <span class="token comment">/*\u7EC4\u4EF6\u7684option\u9009\u9879*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>componentOptions <span class="token operator">=</span> componentOptions
    <span class="token comment">/*\u5F53\u524D\u8282\u70B9\u5BF9\u5E94\u7684\u7EC4\u4EF6\u7684\u5B9E\u4F8B*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token comment">/*\u5F53\u524D\u8282\u70B9\u7684\u7236\u8282\u70B9*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token comment">/*\u7B80\u800C\u8A00\u4E4B\u5C31\u662F\u662F\u5426\u4E3A\u539F\u751FHTML\u6216\u53EA\u662F\u666E\u901A\u6587\u672C\uFF0CinnerHTML\u7684\u65F6\u5019\u4E3Atrue\uFF0CtextContent\u7684\u65F6\u5019\u4E3Afalse*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>raw <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token comment">/*\u9759\u6001\u8282\u70B9\u6807\u5FD7*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isStatic <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token comment">/*\u662F\u5426\u4F5C\u4E3A\u8DDF\u8282\u70B9\u63D2\u5165*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isRootInsert <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token comment">/*\u662F\u5426\u4E3A\u6CE8\u91CA\u8282\u70B9*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isComment <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token comment">/*\u662F\u5426\u4E3A\u514B\u9686\u8282\u70B9*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isCloned <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token comment">/*\u662F\u5426\u6709v-once\u6307\u4EE4*/</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isOnce <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// DEPRECATED: alias for componentInstance for backwards compat.</span>
  <span class="token comment">/* istanbul ignore next */</span>
  <span class="token keyword">get</span> <span class="token function">child</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>componentInstance
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u4E00\u4E2A\u6700\u57FA\u7840\u7684VNode\u8282\u70B9\uFF0C\u4F5C\u4E3A\u5176\u4ED6\u6D3E\u751FVNode\u7C7B\u7684\u57FA\u7C7B\uFF0C\u91CC\u9762\u5B9A\u4E49\u4E86\u4E0B\u9762\u8FD9\u4E9B\u6570\u636E\u3002</p><p>tag: \u5F53\u524D\u8282\u70B9\u7684\u6807\u7B7E\u540D</p><p>data: \u5F53\u524D\u8282\u70B9\u5BF9\u5E94\u7684\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u5177\u4F53\u7684\u4E00\u4E9B\u6570\u636E\u4FE1\u606F\uFF0C\u662F\u4E00\u4E2AVNodeData\u7C7B\u578B\uFF0C\u53EF\u4EE5\u53C2\u8003VNodeData\u7C7B\u578B\u4E2D\u7684\u6570\u636E\u4FE1\u606F</p><p>children: \u5F53\u524D\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u662F\u4E00\u4E2A\u6570\u7EC4</p><p>text: \u5F53\u524D\u8282\u70B9\u7684\u6587\u672C</p><p>elm: \u5F53\u524D\u865A\u62DF\u8282\u70B9\u5BF9\u5E94\u7684\u771F\u5B9Edom\u8282\u70B9</p><p>ns: \u5F53\u524D\u8282\u70B9\u7684\u540D\u5B57\u7A7A\u95F4</p><p>context: \u5F53\u524D\u8282\u70B9\u7684\u7F16\u8BD1\u4F5C\u7528\u57DF</p><p>functionalContext: \u51FD\u6570\u5316\u7EC4\u4EF6\u4F5C\u7528\u57DF</p><p>key: \u8282\u70B9\u7684key\u5C5E\u6027\uFF0C\u88AB\u5F53\u4F5C\u8282\u70B9\u7684\u6807\u5FD7\uFF0C\u7528\u4EE5\u4F18\u5316</p><p>componentOptions: \u7EC4\u4EF6\u7684option\u9009\u9879</p><p>componentInstance: \u5F53\u524D\u8282\u70B9\u5BF9\u5E94\u7684\u7EC4\u4EF6\u7684\u5B9E\u4F8B</p><p>parent: \u5F53\u524D\u8282\u70B9\u7684\u7236\u8282\u70B9</p><p>raw: \u7B80\u800C\u8A00\u4E4B\u5C31\u662F\u662F\u5426\u4E3A\u539F\u751FHTML\u6216\u53EA\u662F\u666E\u901A\u6587\u672C\uFF0CinnerHTML\u7684\u65F6\u5019\u4E3Atrue\uFF0CtextContent\u7684\u65F6\u5019\u4E3Afalse</p><p>isStatic: \u662F\u5426\u4E3A\u9759\u6001\u8282\u70B9</p><p>isRootInsert: \u662F\u5426\u4F5C\u4E3A\u8DDF\u8282\u70B9\u63D2\u5165</p><p>isComment: \u662F\u5426\u4E3A\u6CE8\u91CA\u8282\u70B9</p><p>isCloned: \u662F\u5426\u4E3A\u514B\u9686\u8282\u70B9</p><p>isOnce: \u662F\u5426\u6709v-once\u6307\u4EE4</p><hr><p>\u6253\u4E2A\u6BD4\u65B9\uFF0C\u6BD4\u5982\u8BF4\u73B0\u5728\u6709\u8FD9\u4E48\u4E00\u4E2AVNode\u6811</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>{
    tag: &#39;div&#39;
    data: {
        class: &#39;test&#39;
    },
    children: [
        {
            tag: &#39;span&#39;,
            data: {
                class: &#39;demo&#39;
            }
            text: &#39;hello,VNode&#39;
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6E32\u67D3\u4E4B\u540E\u7684\u7ED3\u679C\u5C31\u662F\u8FD9\u6837\u7684</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello,VNode<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),rn=n("\u66F4\u591A\u64CD\u4F5CVNode\u7684\u65B9\u6CD5\uFF0C\u8BF7\u53C2\u8003"),un={href:"https://github.com/answershuto/learnVue/blob/master/docs/VNode%E8%8A%82%E7%82%B9.MarkDown",target:"_blank",rel:"noopener noreferrer"},vn=n("\u300AVNode\u8282\u70B9\u300B"),mn=n("\u3002"),kn=t(`<h2 id="patch" tabindex="-1"><a class="header-anchor" href="#patch" aria-hidden="true">#</a> patch</h2><p>\u6700\u540E_update\u4F1A\u5C06\u65B0\u65E7\u4E24\u4E2AVNode\u8FDB\u884C\u4E00\u6B21patch\u7684\u8FC7\u7A0B\uFF0C\u5F97\u51FA\u4E24\u4E2AVNode\u6700\u5C0F\u7684\u5DEE\u5F02\uFF0C\u7136\u540E\u5C06\u8FD9\u4E9B\u5DEE\u5F02\u6E32\u67D3\u5230\u89C6\u56FE\u4E0A\u3002</p><p>\u9996\u5148\u8BF4\u4E00\u4E0Bpatch\u7684\u6838\u5FC3diff\u7B97\u6CD5\uFF0Cdiff\u7B97\u6CD5\u662F\u901A\u8FC7\u540C\u5C42\u7684\u6811\u8282\u70B9\u8FDB\u884C\u6BD4\u8F83\u800C\u975E\u5BF9\u6811\u8FDB\u884C\u9010\u5C42\u641C\u7D22\u904D\u5386\u7684\u65B9\u5F0F\uFF0C\u6240\u4EE5\u65F6\u95F4\u590D\u6742\u5EA6\u53EA\u6709O(n)\uFF0C\u662F\u4E00\u79CD\u76F8\u5F53\u9AD8\u6548\u7684\u7B97\u6CD5\u3002</p><p><img src="https://i.loli.net/2017/08/27/59a23cfca50f3.png" alt="img"></p><p><img src="https://i.loli.net/2017/08/27/59a2419a3c617.png" alt="img"></p><p>\u8FD9\u4E24\u5F20\u56FE\u4EE3\u8868\u65E7\u7684VNode\u4E0E\u65B0VNode\u8FDB\u884Cpatch\u7684\u8FC7\u7A0B\uFF0C\u4ED6\u4EEC\u53EA\u662F\u5728\u540C\u5C42\u7EA7\u7684VNode\u4E4B\u95F4\u8FDB\u884C\u6BD4\u8F83\u5F97\u5230\u53D8\u5316\uFF08\u7B2C\u4E8C\u5F20\u56FE\u4E2D\u76F8\u540C\u989C\u8272\u7684\u65B9\u5757\u4EE3\u8868\u4E92\u76F8\u8FDB\u884C\u6BD4\u8F83\u7684VNode\u8282\u70B9\uFF09\uFF0C\u7136\u540E\u4FEE\u6539\u53D8\u5316\u7684\u89C6\u56FE\uFF0C\u6240\u4EE5\u5341\u5206\u9AD8\u6548\u3002</p><p>\u5728patch\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u4E24\u4E2AVNode\u88AB\u8BA4\u4E3A\u662F\u540C\u4E00\u4E2AVNode\uFF08sameVnode\uFF09\uFF0C\u5219\u4F1A\u8FDB\u884C\u6DF1\u5EA6\u7684\u6BD4\u8F83\uFF0C\u5F97\u51FA\u6700\u5C0F\u5DEE\u5F02\uFF0C\u5426\u5219\u76F4\u63A5\u5220\u9664\u65E7\u6709DOM\u8282\u70B9\uFF0C\u521B\u5EFA\u65B0\u7684DOM\u8282\u70B9\u3002</p><p>\u4EC0\u4E48\u662FsameVnode\uFF1F</p><p>\u6765\u770B\u4E00\u4E0BsameVnode\u7684\u5B9E\u73B0\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/*
  \u5224\u65AD\u4E24\u4E2AVNode\u8282\u70B9\u662F\u5426\u662F\u540C\u4E00\u4E2A\u8282\u70B9\uFF0C\u9700\u8981\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6
  key\u76F8\u540C
  tag\uFF08\u5F53\u524D\u8282\u70B9\u7684\u6807\u7B7E\u540D\uFF09\u76F8\u540C
  isComment\uFF08\u662F\u5426\u4E3A\u6CE8\u91CA\u8282\u70B9\uFF09\u76F8\u540C
  \u662F\u5426data\uFF08\u5F53\u524D\u8282\u70B9\u5BF9\u5E94\u7684\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u5177\u4F53\u7684\u4E00\u4E9B\u6570\u636E\u4FE1\u606F\uFF0C\u662F\u4E00\u4E2AVNodeData\u7C7B\u578B\uFF0C\u53EF\u4EE5\u53C2\u8003VNodeData\u7C7B\u578B\u4E2D\u7684\u6570\u636E\u4FE1\u606F\uFF09\u90FD\u6709\u5B9A\u4E49
  \u5F53\u6807\u7B7E\u662F&lt;input&gt;\u7684\u65F6\u5019\uFF0Ctype\u5FC5\u987B\u76F8\u540C
*/
function sameVnode (a, b) {
  return (
    a.key === b.key &amp;&amp;
    a.tag === b.tag &amp;&amp;
    a.isComment === b.isComment &amp;&amp;
    isDef(a.data) === isDef(b.data) &amp;&amp;
    sameInputType(a, b)
  )
}

// Some browsers do not support dynamically changing type for &lt;input&gt;
// so they need to be treated as different nodes
/*
  \u5224\u65AD\u5F53\u6807\u7B7E\u662F&lt;input&gt;\u7684\u65F6\u5019\uFF0Ctype\u662F\u5426\u76F8\u540C
  \u67D0\u4E9B\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u52A8\u6001\u4FEE\u6539&lt;input&gt;\u7C7B\u578B\uFF0C\u6240\u4EE5\u4ED6\u4EEC\u88AB\u89C6\u4E3A\u4E0D\u540C\u7C7B\u578B
*/
function sameInputType (a, b) {
  if (a.tag !== &#39;input&#39;) return true
  let i
  const typeA = isDef(i = a.data) &amp;&amp; isDef(i = i.attrs) &amp;&amp; i.type
  const typeB = isDef(i = b.data) &amp;&amp; isDef(i = i.attrs) &amp;&amp; i.type
  return typeA === typeB
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4E24\u4E2AVNode\u7684tag\u3001key\u3001isComment\u90FD\u76F8\u540C\uFF0C\u5E76\u4E14\u540C\u65F6\u5B9A\u4E49\u6216\u672A\u5B9A\u4E49data\u7684\u65F6\u5019\uFF0C\u4E14\u5982\u679C\u6807\u7B7E\u4E3Ainput\u5219type\u5FC5\u987B\u76F8\u540C\u3002\u8FD9\u65F6\u5019\u8FD9\u4E24\u4E2AVNode\u5219\u7B97sameVnode\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8FDB\u884CpatchVnode\u64CD\u4F5C\u3002</p><p>patchVnode\u7684\u89C4\u5219\u662F\u8FD9\u6837\u7684\uFF1A</p><p>1.\u5982\u679C\u65B0\u65E7VNode\u90FD\u662F\u9759\u6001\u7684\uFF0C\u540C\u65F6\u5B83\u4EEC\u7684key\u76F8\u540C\uFF08\u4EE3\u8868\u540C\u4E00\u8282\u70B9\uFF09\uFF0C\u5E76\u4E14\u65B0\u7684VNode\u662Fclone\u6216\u8005\u662F\u6807\u8BB0\u4E86once\uFF08\u6807\u8BB0v-once\u5C5E\u6027\uFF0C\u53EA\u6E32\u67D3\u4E00\u6B21\uFF09\uFF0C\u90A3\u4E48\u53EA\u9700\u8981\u66FF\u6362elm\u4EE5\u53CAcomponentInstance\u5373\u53EF\u3002</p><p>2.\u65B0\u8001\u8282\u70B9\u5747\u6709children\u5B50\u8282\u70B9\uFF0C\u5219\u5BF9\u5B50\u8282\u70B9\u8FDB\u884Cdiff\u64CD\u4F5C\uFF0C\u8C03\u7528updateChildren\uFF0C\u8FD9\u4E2AupdateChildren\u4E5F\u662Fdiff\u7684\u6838\u5FC3\u3002</p><p>3.\u5982\u679C\u8001\u8282\u70B9\u6CA1\u6709\u5B50\u8282\u70B9\u800C\u65B0\u8282\u70B9\u5B58\u5728\u5B50\u8282\u70B9\uFF0C\u5148\u6E05\u7A7A\u8001\u8282\u70B9DOM\u7684\u6587\u672C\u5185\u5BB9\uFF0C\u7136\u540E\u4E3A\u5F53\u524DDOM\u8282\u70B9\u52A0\u5165\u5B50\u8282\u70B9\u3002</p><p>4.\u5F53\u65B0\u8282\u70B9\u6CA1\u6709\u5B50\u8282\u70B9\u800C\u8001\u8282\u70B9\u6709\u5B50\u8282\u70B9\u7684\u65F6\u5019\uFF0C\u5219\u79FB\u9664\u8BE5DOM\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9\u3002</p><p>5.\u5F53\u65B0\u8001\u8282\u70B9\u90FD\u65E0\u5B50\u8282\u70B9\u7684\u65F6\u5019\uFF0C\u53EA\u662F\u6587\u672C\u7684\u66FF\u6362\u3002</p><h2 id="updatechildren" tabindex="-1"><a class="header-anchor" href="#updatechildren" aria-hidden="true">#</a> updateChildren</h2><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    let oldStartIdx = 0
    let newStartIdx = 0
    let oldEndIdx = oldCh.length - 1
    let oldStartVnode = oldCh[0]
    let oldEndVnode = oldCh[oldEndIdx]
    let newEndIdx = newCh.length - 1
    let newStartVnode = newCh[0]
    let newEndVnode = newCh[newEndIdx]
    let oldKeyToIdx, idxInOld, elmToMove, refElm

    // removeOnly is a special flag used only by &lt;transition-group&gt;
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    const canMove = !removeOnly

    while (oldStartIdx &lt;= oldEndIdx &amp;&amp; newStartIdx &lt;= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx]
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        /*\u524D\u56DB\u79CD\u60C5\u51B5\u5176\u5B9E\u662F\u6307\u5B9Akey\u7684\u65F6\u5019\uFF0C\u5224\u5B9A\u4E3A\u540C\u4E00\u4E2AVNode\uFF0C\u5219\u76F4\u63A5patchVnode\u5373\u53EF\uFF0C\u5206\u522B\u6BD4\u8F83oldCh\u4EE5\u53CAnewCh\u7684\u4E24\u5934\u8282\u70B92*2=4\u79CD\u60C5\u51B5*/
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
        oldStartVnode = oldCh[++oldStartIdx]
        newStartVnode = newCh[++newStartIdx]
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
        oldEndVnode = oldCh[--oldEndIdx]
        newEndVnode = newCh[--newEndIdx]
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
        canMove &amp;&amp; nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
        oldStartVnode = oldCh[++oldStartIdx]
        newEndVnode = newCh[--newEndIdx]
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
        canMove &amp;&amp; nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
        oldEndVnode = oldCh[--oldEndIdx]
        newStartVnode = newCh[++newStartIdx]
      } else {
        /*
          \u751F\u6210\u4E00\u4E2Akey\u4E0E\u65E7VNode\u7684key\u5BF9\u5E94\u7684\u54C8\u5E0C\u8868\uFF08\u53EA\u6709\u7B2C\u4E00\u6B21\u8FDB\u6765undefined\u7684\u65F6\u5019\u4F1A\u751F\u6210\uFF0C\u4E5F\u4E3A\u540E\u9762\u68C0\u6D4B\u91CD\u590D\u7684key\u503C\u505A\u94FA\u57AB\uFF09
          \u6BD4\u5982childre\u662F\u8FD9\u6837\u7684 [{xx: xx, key: &#39;key0&#39;}, {xx: xx, key: &#39;key1&#39;}, {xx: xx, key: &#39;key2&#39;}]  beginIdx = 0   endIdx = 2  
          \u7ED3\u679C\u751F\u6210{key0: 0, key1: 1, key2: 2}
        */
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
        /*\u5982\u679CnewStartVnode\u65B0\u7684VNode\u8282\u70B9\u5B58\u5728key\u5E76\u4E14\u8FD9\u4E2Akey\u5728oldVnode\u4E2D\u80FD\u627E\u5230\u5219\u8FD4\u56DE\u8FD9\u4E2A\u8282\u70B9\u7684idxInOld\uFF08\u5373\u7B2C\u51E0\u4E2A\u8282\u70B9\uFF0C\u4E0B\u6807\uFF09*/
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null
        if (isUndef(idxInOld)) { // New element
          /*newStartVnode\u6CA1\u6709key\u6216\u8005\u662F\u8BE5key\u6CA1\u6709\u5728\u8001\u8282\u70B9\u4E2D\u627E\u5230\u5219\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8282\u70B9*/
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)
          newStartVnode = newCh[++newStartIdx]
        } else {
          /*\u83B7\u53D6\u540Ckey\u7684\u8001\u8282\u70B9*/
          elmToMove = oldCh[idxInOld]
          /* istanbul ignore if */
          if (p<wbr>rocess.env.NODE_ENV !== &#39;production&#39; &amp;&amp; !elmToMove) {
            /*\u5982\u679CelmToMove\u4E0D\u5B58\u5728\u8BF4\u660E\u4E4B\u524D\u5DF2\u7ECF\u6709\u65B0\u8282\u70B9\u653E\u5165\u8FC7\u8FD9\u4E2Akey\u7684DOM\u4E2D\uFF0C\u63D0\u793A\u53EF\u80FD\u5B58\u5728\u91CD\u590D\u7684key\uFF0C\u786E\u4FDDv-for\u7684\u65F6\u5019item\u6709\u552F\u4E00\u7684key\u503C*/
            warn(
              &#39;It seems there are duplicate keys that is causing an update error. &#39; +
              &#39;Make sure each v-for item has a unique key.&#39;
            )
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            /*Github:https://github.com/answershuto*/
            /*\u5982\u679C\u65B0VNode\u4E0E\u5F97\u5230\u7684\u6709\u76F8\u540Ckey\u7684\u8282\u70B9\u662F\u540C\u4E00\u4E2AVNode\u5219\u8FDB\u884CpatchVnode*/
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)
            /*\u56E0\u4E3A\u5DF2\u7ECFpatchVnode\u8FDB\u53BB\u4E86\uFF0C\u6240\u4EE5\u5C06\u8FD9\u4E2A\u8001\u8282\u70B9\u8D4B\u503Cundefined\uFF0C\u4E4B\u540E\u5982\u679C\u8FD8\u6709\u65B0\u8282\u70B9\u4E0E\u8BE5\u8282\u70B9key\u76F8\u540C\u53EF\u4EE5\u68C0\u6D4B\u51FA\u6765\u63D0\u793A\u5DF2\u6709\u91CD\u590D\u7684key*/
            oldCh[idxInOld] = undefined
            /*\u5F53\u6709\u6807\u8BC6\u4F4DcanMove\u5B9E\u53EF\u4EE5\u76F4\u63A5\u63D2\u5165oldStartVnode\u5BF9\u5E94\u7684\u771F\u5B9EDOM\u8282\u70B9\u524D\u9762*/
            canMove &amp;&amp; nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm)
            newStartVnode = newCh[++newStartIdx]
          } else {
            // same key but different element. treat as new element
            /*\u5F53\u65B0\u7684VNode\u4E0E\u627E\u5230\u7684\u540C\u6837key\u7684VNode\u4E0D\u662FsameVNode\u7684\u65F6\u5019\uFF08\u6BD4\u5982\u8BF4tag\u4E0D\u4E00\u6837\u6216\u8005\u662F\u6709\u4E0D\u4E00\u6837type\u7684input\u6807\u7B7E\uFF09\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8282\u70B9*/
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)
            newStartVnode = newCh[++newStartIdx]
          }
        }
      }
    }
    if (oldStartIdx &gt; oldEndIdx) {
      /*\u5168\u90E8\u6BD4\u8F83\u5B8C\u6210\u4EE5\u540E\uFF0C\u53D1\u73B0oldStartIdx &gt; oldEndIdx\u7684\u8BDD\uFF0C\u8BF4\u660E\u8001\u8282\u70B9\u5DF2\u7ECF\u904D\u5386\u5B8C\u4E86\uFF0C\u65B0\u8282\u70B9\u6BD4\u8001\u8282\u70B9\u591A\uFF0C\u6240\u4EE5\u8FD9\u65F6\u5019\u591A\u51FA\u6765\u7684\u65B0\u8282\u70B9\u9700\u8981\u4E00\u4E2A\u4E00\u4E2A\u521B\u5EFA\u51FA\u6765\u52A0\u5165\u5230\u771F\u5B9EDOM\u4E2D*/
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
    } else if (newStartIdx &gt; newEndIdx) {
      /*\u5982\u679C\u5168\u90E8\u6BD4\u8F83\u5B8C\u6210\u4EE5\u540E\u53D1\u73B0newStartIdx &gt; newEndIdx\uFF0C\u5219\u8BF4\u660E\u65B0\u8282\u70B9\u5DF2\u7ECF\u904D\u5386\u5B8C\u4E86\uFF0C\u8001\u8282\u70B9\u591A\u4F59\u65B0\u8282\u70B9\uFF0C\u8FD9\u4E2A\u65F6\u5019\u9700\u8981\u5C06\u591A\u4F59\u7684\u8001\u8282\u70B9\u4ECE\u771F\u5B9EDOM\u4E2D\u79FB\u9664*/
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76F4\u63A5\u770B\u6E90\u7801\u53EF\u80FD\u6BD4\u8F83\u96BE\u4EE5\u634B\u6E05\u5176\u4E2D\u7684\u5173\u7CFB\uFF0C\u901A\u8FC7\u56FE\u6765\u770B\u4E00\u4E0B\u3002</p><p><img src="https://i.loli.net/2017/08/28/59a4015bb2765.png" alt="img"></p><p>\u9996\u5148\uFF0C\u5728\u65B0\u8001\u4E24\u4E2AVNode\u8282\u70B9\u7684\u5DE6\u53F3\u5934\u5C3E\u4E24\u4FA7\u90FD\u6709\u4E00\u4E2A\u53D8\u91CF\u6807\u8BB0\uFF0C\u5728\u904D\u5386\u8FC7\u7A0B\u4E2D\u8FD9\u51E0\u4E2A\u53D8\u91CF\u90FD\u4F1A\u5411\u4E2D\u95F4\u9760\u62E2\u3002\u5F53oldStartIdx &gt; oldEndIdx\u6216\u8005newStartIdx &gt; newEndIdx\u65F6\u7ED3\u675F\u5FAA\u73AF\u3002</p><p>\u7D22\u5F15\u4E0EVNode\u8282\u70B9\u7684\u5BF9\u5E94\u5173\u7CFB\uFF1A oldStartIdx =&gt; oldStartVnode oldEndIdx =&gt; oldEndVnode newStartIdx =&gt; newStartVnode newEndIdx =&gt; newEndVnode</p><p>\u5728\u904D\u5386\u4E2D\uFF0C\u5982\u679C\u5B58\u5728key\uFF0C\u5E76\u4E14\u6EE1\u8DB3sameVnode\uFF0C\u4F1A\u5C06\u8BE5DOM\u8282\u70B9\u8FDB\u884C\u590D\u7528\uFF0C\u5426\u5219\u5219\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684DOM\u8282\u70B9\u3002</p><p>\u9996\u5148\uFF0ColdStartVnode\u3001oldEndVnode\u4E0EnewStartVnode\u3001newEndVnode\u4E24\u4E24\u6BD4\u8F83\u4E00\u5171\u67092*2=4\u79CD\u6BD4\u8F83\u65B9\u6CD5\u3002</p><p>\u5F53\u65B0\u8001VNode\u8282\u70B9\u7684start\u6216\u8005end\u6EE1\u8DB3sameVnode\u65F6\uFF0C\u4E5F\u5C31\u662FsameVnode(oldStartVnode, newStartVnode)\u6216\u8005sameVnode(oldEndVnode, newEndVnode)\uFF0C\u76F4\u63A5\u5C06\u8BE5VNode\u8282\u70B9\u8FDB\u884CpatchVnode\u5373\u53EF\u3002</p><p><img src="https://i.loli.net/2017/08/28/59a40c12c1655.png" alt="img"></p><p>\u5982\u679ColdStartVnode\u4E0EnewEndVnode\u6EE1\u8DB3sameVnode\uFF0C\u5373sameVnode(oldStartVnode, newEndVnode)\u3002</p><p>\u8FD9\u65F6\u5019\u8BF4\u660EoldStartVnode\u5DF2\u7ECF\u8DD1\u5230\u4E86oldEndVnode\u540E\u9762\u53BB\u4E86\uFF0C\u8FDB\u884CpatchVnode\u7684\u540C\u65F6\u8FD8\u9700\u8981\u5C06\u771F\u5B9EDOM\u8282\u70B9\u79FB\u52A8\u5230oldEndVnode\u7684\u540E\u9762\u3002</p><p><img src="https://ooo.0o0.ooo/2017/08/28/59a4214784979.png" alt="img"></p><p>\u5982\u679ColdEndVnode\u4E0EnewStartVnode\u6EE1\u8DB3sameVnode\uFF0C\u5373sameVnode(oldEndVnode, newStartVnode)\u3002</p><p>\u8FD9\u8BF4\u660EoldEndVnode\u8DD1\u5230\u4E86oldStartVnode\u7684\u524D\u9762\uFF0C\u8FDB\u884CpatchVnode\u7684\u540C\u65F6\u771F\u5B9E\u7684DOM\u8282\u70B9\u79FB\u52A8\u5230\u4E86oldStartVnode\u7684\u524D\u9762\u3002</p><p><img src="https://i.loli.net/2017/08/29/59a4c70685d12.png" alt="img"></p><p>\u5982\u679C\u4EE5\u4E0A\u60C5\u51B5\u5747\u4E0D\u7B26\u5408\uFF0C\u5219\u901A\u8FC7createKeyToOldIdx\u4F1A\u5F97\u5230\u4E00\u4E2AoldKeyToIdx\uFF0C\u91CC\u9762\u5B58\u653E\u4E86\u4E00\u4E2Akey\u4E3A\u65E7\u7684VNode\uFF0Cvalue\u4E3A\u5BF9\u5E94index\u5E8F\u5217\u7684\u54C8\u5E0C\u8868\u3002\u4ECE\u8FD9\u4E2A\u54C8\u5E0C\u8868\u4E2D\u53EF\u4EE5\u627E\u5230\u662F\u5426\u6709\u4E0EnewStartVnode\u4E00\u81F4key\u7684\u65E7\u7684VNode\u8282\u70B9\uFF0C\u5982\u679C\u540C\u65F6\u6EE1\u8DB3sameVnode\uFF0CpatchVnode\u7684\u540C\u65F6\u4F1A\u5C06\u8FD9\u4E2A\u771F\u5B9EDOM\uFF08elmToMove\uFF09\u79FB\u52A8\u5230oldStartVnode\u5BF9\u5E94\u7684\u771F\u5B9EDOM\u7684\u524D\u9762\u3002</p><p><img src="https://i.loli.net/2017/08/29/59a4d7552d299.png" alt="img"></p><p>\u5F53\u7136\u4E5F\u6709\u53EF\u80FDnewStartVnode\u5728\u65E7\u7684VNode\u8282\u70B9\u627E\u4E0D\u5230\u4E00\u81F4\u7684key\uFF0C\u6216\u8005\u662F\u5373\u4FBFkey\u76F8\u540C\u5374\u4E0D\u662FsameVnode\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F1A\u8C03\u7528createElm\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684DOM\u8282\u70B9\u3002</p><p><img src="https://i.loli.net/2017/08/29/59a4de0fa4dba.png" alt="img"></p><p>\u5230\u8FD9\u91CC\u5FAA\u73AF\u5DF2\u7ECF\u7ED3\u675F\u4E86\uFF0C\u90A3\u4E48\u5269\u4E0B\u8FD8\u9700\u8981\u5904\u7406\u591A\u4F59\u6216\u8005\u4E0D\u591F\u7684\u771F\u5B9EDOM\u8282\u70B9\u3002</p><p>1.\u5F53\u7ED3\u675F\u65F6oldStartIdx &gt; oldEndIdx\uFF0C\u8FD9\u4E2A\u65F6\u5019\u8001\u7684VNode\u8282\u70B9\u5DF2\u7ECF\u904D\u5386\u5B8C\u4E86\uFF0C\u4F46\u662F\u65B0\u7684\u8282\u70B9\u8FD8\u6CA1\u6709\u3002\u8BF4\u660E\u4E86\u65B0\u7684VNode\u8282\u70B9\u5B9E\u9645\u4E0A\u6BD4\u8001\u7684VNode\u8282\u70B9\u591A\uFF0C\u4E5F\u5C31\u662F\u6BD4\u771F\u5B9EDOM\u591A\uFF0C\u9700\u8981\u5C06\u5269\u4E0B\u7684\uFF08\u4E5F\u5C31\u662F\u65B0\u589E\u7684\uFF09VNode\u8282\u70B9\u63D2\u5165\u5230\u771F\u5B9EDOM\u8282\u70B9\u4E2D\u53BB\uFF0C\u6B64\u65F6\u8C03\u7528addVnodes\uFF08\u6279\u91CF\u8C03\u7528createElm\u7684\u63A5\u53E3\u5C06\u8FD9\u4E9B\u8282\u70B9\u52A0\u5165\u5230\u771F\u5B9EDOM\u4E2D\u53BB\uFF09\u3002</p><p><img src="https://i.loli.net/2017/08/29/59a509f0d1788.png" alt="img"></p><p>2\u3002\u540C\u7406\uFF0C\u5F53newStartIdx &gt; newEndIdx\u65F6\uFF0C\u65B0\u7684VNode\u8282\u70B9\u5DF2\u7ECF\u904D\u5386\u5B8C\u4E86\uFF0C\u4F46\u662F\u8001\u7684\u8282\u70B9\u8FD8\u6709\u5269\u4F59\uFF0C\u8BF4\u660E\u771F\u5B9EDOM\u8282\u70B9\u591A\u4F59\u4E86\uFF0C\u9700\u8981\u4ECE\u6587\u6863\u4E2D\u5220\u9664\uFF0C\u8FD9\u65F6\u5019\u8C03\u7528removeVnodes\u5C06\u8FD9\u4E9B\u591A\u4F59\u7684\u771F\u5B9EDOM\u5220\u9664\u3002</p><p><img src="https://i.loli.net/2017/08/29/59a4f389b98cb.png" alt="img"></p>`,42),bn=n("\u66F4\u8BE6\u7EC6\u7684diff\u5B9E\u73B0\u53C2\u8003\u7B14\u8005\u7684\u6587\u7AE0"),hn={href:"https://github.com/answershuto/learnVue/blob/master/docs/VirtualDOM%E4%B8%8Ediff(Vue%E5%AE%9E%E7%8E%B0).MarkDown",target:"_blank",rel:"noopener noreferrer"},yn=n("VirtualDOM\u4E0Ediff(Vue.js\u5B9E\u73B0)"),gn=n("\u3002"),fn=s("h2",{id:"\u6620\u5C04\u5230\u771F\u5B9Edom",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6620\u5C04\u5230\u771F\u5B9Edom","aria-hidden":"true"},"#"),n(" \u6620\u5C04\u5230\u771F\u5B9EDOM")],-1),wn=s("p",null,"\u7531\u4E8EVue\u4F7F\u7528\u4E86\u865A\u62DFDOM\uFF0C\u6240\u4EE5\u865A\u62DFDOM\u53EF\u4EE5\u5728\u4EFB\u4F55\u652F\u6301JavaScript\u8BED\u8A00\u7684\u5E73\u53F0\u4E0A\u64CD\u4F5C\uFF0C\u8B6C\u5982\u8BF4\u76EE\u524DVue\u652F\u6301\u7684\u6D4F\u89C8\u5668\u5E73\u53F0\u6216\u662Fweex\uFF0C\u5728\u865A\u62DFDOM\u7684\u5B9E\u73B0\u4E0A\u662F\u4E00\u81F4\u7684\u3002\u90A3\u4E48\u6700\u540E\u865A\u62DFDOM\u5982\u4F55\u6620\u5C04\u5230\u771F\u5B9E\u7684DOM\u8282\u70B9\u4E0A\u5462\uFF1F",-1),Vn=n("Vue\u4E3A\u5E73\u53F0\u505A\u4E86\u4E00\u5C42\u9002\u914D\u5C42\uFF0C\u6D4F\u89C8\u5668\u5E73\u53F0\u89C1"),_n={href:"https://github.com/answershuto/learnVue/blob/master/vue-src/platforms/web/runtime/node-ops.js",target:"_blank",rel:"noopener noreferrer"},En=n("/platforms/web/runtime/node-ops.js"),xn=n("\u4EE5\u53CAweex\u5E73\u53F0\u89C1"),Dn={href:"https://github.com/answershuto/learnVue/blob/master/vue-src/platforms/weex/runtime/node-ops.js",target:"_blank",rel:"noopener noreferrer"},Sn=n("/platforms/weex/runtime/node-ops.js"),On=n("\u3002\u4E0D\u540C\u5E73\u53F0\u4E4B\u95F4\u901A\u8FC7\u9002\u914D\u5C42\u5BF9\u5916\u63D0\u4F9B\u76F8\u540C\u7684\u63A5\u53E3\uFF0C\u865A\u62DFDOM\u8FDB\u884C\u64CD\u4F5C\u771F\u5B9EDOM\u8282\u70B9\u7684\u65F6\u5019\uFF0C\u53EA\u9700\u8981\u8C03\u7528\u8FD9\u4E9B\u9002\u914D\u5C42\u7684\u63A5\u53E3\u5373\u53EF\uFF0C\u800C\u5185\u90E8\u5B9E\u73B0\u5219\u4E0D\u9700\u8981\u5173\u5FC3\uFF0C\u5B83\u4F1A\u6839\u636E\u5E73\u53F0\u7684\u6539\u53D8\u800C\u6539\u53D8\u3002"),Nn=t(`<p>\u73B0\u5728\u53C8\u51FA\u73B0\u4E86\u4E00\u4E2A\u95EE\u9898\uFF0C\u53EA\u662F\u5C06\u865A\u62DFDOM\u6620\u5C04\u6210\u4E86\u771F\u5B9E\u7684DOM\u3002\u90A3\u5982\u4F55\u7ED9\u8FD9\u4E9BDOM\u52A0\u5165attr\u3001class\u3001style\u7B49DOM\u5C5E\u6027\u5462\uFF1F</p><p>\u8FD9\u8981\u4F9D\u8D56\u4E8E\u865A\u62DFDOM\u7684\u751F\u547D\u94A9\u5B50\u3002\u865A\u62DFDOM\u63D0\u4F9B\u4E86\u5982\u4E0B\u7684\u94A9\u5B50\u51FD\u6570\uFF0C\u5206\u522B\u5728\u4E0D\u540C\u7684\u65F6\u671F\u4F1A\u8FDB\u884C\u8C03\u7528\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>const hooks = [&#39;create&#39;, &#39;activate&#39;, &#39;update&#39;, &#39;remove&#39;, &#39;destroy&#39;]

/*\u6784\u5EFAcbs\u56DE\u8C03\u51FD\u6570\uFF0Cweb\u5E73\u53F0\u4E0A\u89C1/platforms/web/runtime/modules*/
  for (i = 0; i &lt; hooks.length; ++i) {
    cbs[hooks[i]] = []
    for (j = 0; j &lt; modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]])
      }
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Mn=n("\u540C\u7406\uFF0C\u4E5F\u4F1A\u6839\u636E\u4E0D\u540C\u5E73\u53F0\u6709\u81EA\u5DF1\u4E0D\u540C\u7684\u5B9E\u73B0\uFF0C\u8FD9\u91CC\u4EE5Web\u5E73\u53F0\u4E3A\u4F8B\u3002Web\u5E73\u53F0\u7684\u94A9\u5B50\u51FD\u6570\u89C1"),Cn={href:"https://github.com/answershuto/learnVue/tree/master/vue-src/platforms/web/runtime/modules",target:"_blank",rel:"noopener noreferrer"},In=n("/platforms/web/runtime/modules"),An=n("\u3002\u91CC\u9762\u6709\u5BF9attr\u3001class\u3001props\u3001events\u3001style\u4EE5\u53CAtransition\uFF08\u8FC7\u6E21\u72B6\u6001\uFF09\u7684DOM\u5C5E\u6027\u8FDB\u884C\u64CD\u4F5C\u3002"),jn=t(`<p>\u4EE5attr\u4E3A\u4F8B\uFF0C\u4EE3\u7801\u5F88\u7B80\u5355\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/* @flow */

import { isIE9 } from &#39;core/util/env&#39;

import {
  extend,
  isDef,
  isUndef
} from &#39;shared/util&#39;

import {
  isXlink,
  xlinkNS,
  getXlinkProp,
  isBooleanAttr,
  isEnumeratedAttr,
  isFalsyAttrValue
} from &#39;web/util/index&#39;

/*\u66F4\u65B0attr*/
function updateAttrs (oldVnode: VNodeWithData, vnode: VNodeWithData) {
  /*\u5982\u679C\u65E7\u7684\u4EE5\u53CA\u65B0\u7684VNode\u8282\u70B9\u5747\u6CA1\u6709attr\u5C5E\u6027\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE*/
  if (isUndef(oldVnode.data.attrs) &amp;&amp; isUndef(vnode.data.attrs)) {
    return
  }
  let key, cur, old
  /*VNode\u8282\u70B9\u5BF9\u5E94\u7684Dom\u5B9E\u4F8B*/
  const elm = vnode.elm
  /*\u65E7VNode\u8282\u70B9\u7684attr*/
  const oldAttrs = oldVnode.data.attrs || {}
  /*\u65B0VNode\u8282\u70B9\u7684attr*/
  let attrs: any = vnode.data.attrs || {}
  // clone observed objects, as the user probably wants to mutate it
  /*\u5982\u679C\u65B0\u7684VNode\u7684attr\u5DF2\u7ECF\u6709__ob__\uFF08\u4EE3\u8868\u5DF2\u7ECF\u88ABObserve\u5904\u7406\u8FC7\u4E86\uFF09\uFF0C \u8FDB\u884C\u6DF1\u62F7\u8D1D*/
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs)
  }

  /*\u904D\u5386attr\uFF0C\u4E0D\u4E00\u81F4\u5219\u66FF\u6362*/
  for (key in attrs) {
    cur = attrs[key]
    old = oldAttrs[key]
    if (old !== cur) {
      setAttr(elm, key, cur)
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 &amp;&amp; attrs.value !== oldAttrs.value) {
    setAttr(elm, &#39;value&#39;, attrs.value)
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key))
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key)
      }
    }
  }
}

/*\u8BBE\u7F6Eattr*/
function setAttr (el: Element, key: string, value: any) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. &lt;option disabled&gt;Select one&lt;/option&gt;
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key)
    } else {
      el.setAttribute(key, key)
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === &#39;false&#39; ? &#39;false&#39; : &#39;true&#39;)
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key))
    } else {
      el.setAttributeNS(xlinkNS, key, value)
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key)
    } else {
      el.setAttribute(key, value)
    }
  }
}

export default {
  create: updateAttrs,
  update: updateAttrs
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>attr\u53EA\u9700\u8981\u5728create\u4EE5\u53CAupdate\u94A9\u5B50\u88AB\u8C03\u7528\u65F6\u66F4\u65B0DOM\u7684attr\u5C5E\u6027\u5373\u53EF\u3002</p><h2 id="\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u6700\u540E" aria-hidden="true">#</a> \u6700\u540E</h2><p>\u81F3\u6B64\uFF0C\u5DF2\u7ECF\u4ECEtemplate\u5230\u771F\u5B9EDOM\u7684\u6574\u4E2A\u8FC7\u7A0B\u68B3\u7406\u5B8C\u4E86\u3002\u73B0\u5728\u518D\u53BB\u770B\u8FD9\u5F20\u56FE\uFF0C\u662F\u4E0D\u662F\u66F4\u6E05\u6670\u4E86\u5462\uFF1F</p><p><img src="https://cn.vuejs.org/images/data.png" alt=""></p>`,6);function Bn(Tn,Fn){const a=o("ExternalLinkIcon");return i(),l("div",null,[d,s("p",null,[r,s("a",u,[v,e(a)]),m]),k,s("p",null,[b,s("a",h,[y,e(a)]),g]),s("p",null,[f,s("a",w,[V,e(a)]),_,s("a",E,[x,e(a)]),D,s("a",S,[O,e(a)]),N]),M,s("p",null,[C,s("a",I,[A,e(a)]),j]),s("p",null,[B,s("a",T,[F,e(a)]),J]),R,s("p",null,[P,s("a",L,[$,e(a)]),W]),H,s("p",null,[U,s("a",q,[Q,e(a)]),K]),z,X,G,Y,Z,s("p",null,[nn,s("a",sn,[an,e(a)]),en]),tn,s("p",null,[pn,s("a",on,[ln,e(a)]),cn]),dn,s("p",null,[rn,s("a",un,[vn,e(a)]),mn]),kn,s("p",null,[bn,s("a",hn,[yn,e(a)]),gn]),fn,wn,s("p",null,[Vn,s("a",_n,[En,e(a)]),xn,s("a",Dn,[Sn,e(a)]),On]),Nn,s("p",null,[Mn,s("a",Cn,[In,e(a)]),An]),jn])}var Rn=p(c,[["render",Bn],["__file","sourceCodeTemplateDom.html.vue"]]);export{Rn as default};
