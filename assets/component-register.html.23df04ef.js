import{a as n}from"./app.78b6d3a3.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u7EC4\u4EF6\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u6CE8\u518C" aria-hidden="true">#</a> \u7EC4\u4EF6\u6CE8\u518C</h1><p>\u5728 Vue.js \u4E2D\uFF0C\u9664\u4E86\u5B83\u5185\u7F6E\u7684\u7EC4\u4EF6\u5982 <code>keep-alive</code>\u3001<code>component</code>\u3001<code>transition</code>\u3001<code>transition-group</code> \u7B49\uFF0C\u5176\u5B83\u7528\u6237\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5728\u4F7F\u7528\u524D\u5FC5\u987B\u6CE8\u518C\u3002\u5F88\u591A\u540C\u5B66\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u9047\u5230\u5982\u4E0B\u62A5\u9519\u4FE1\u606F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;Unknown custom element: &lt;xxx&gt; - did you register the component correctly?
 For recursive components, make sure to provide the &quot;name&quot; option.&#39;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E00\u822C\u62A5\u8FD9\u4E2A\u9519\u7684\u539F\u56E0\u90FD\u662F\u4F7F\u7528\u4E86\u672A\u6CE8\u518C\u7684\u7EC4\u4EF6\u3002Vue.js \u63D0\u4F9B\u4E86 2 \u79CD\u7EC4\u4EF6\u7684\u6CE8\u518C\u65B9\u5F0F\uFF0C\u5168\u5C40\u6CE8\u518C\u548C\u5C40\u90E8\u6CE8\u518C\u3002\u63A5\u4E0B\u6765\u4ECE\u6E90\u7801\u5206\u6790\u7684\u89D2\u5EA6\u6765\u5206\u6790\u8FD9\u4E24\u79CD\u6CE8\u518C\u65B9\u5F0F\u3002</p><h2 id="\u5168\u5C40\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u6CE8\u518C" aria-hidden="true">#</a> \u5168\u5C40\u6CE8\u518C</h2><p>\u8981\u6CE8\u518C\u4E00\u4E2A\u5168\u5C40\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Vue.component(tagName, options)</code>\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;my-component&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9009\u9879</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u90A3\u4E48\uFF0C<code>Vue.component</code> \u51FD\u6570\u662F\u5728\u4EC0\u4E48\u65F6\u5019\u5B9A\u4E49\u7684\u5462\uFF0C\u5B83\u7684\u5B9A\u4E49\u8FC7\u7A0B\u53D1\u751F\u5728\u6700\u5F00\u59CB\u521D\u59CB\u5316 Vue \u7684\u5168\u5C40\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u4EE3\u7801\u5728 <code>src/core/global-api/assets.js</code> \u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ASSET_TYPES</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;shared/constants&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isPlainObject<span class="token punctuation">,</span> validateComponentName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../util/index&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initAssetRegisters</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">Vue</span><span class="token operator">:</span> GlobalAPI</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Create asset registration methods.
   */</span>
  <span class="token constant">ASSET_TYPES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">type</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Vue<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
      <span class="token parameter"><span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
      <span class="token literal-property property">definition</span><span class="token operator">:</span> Function <span class="token operator">|</span> Object</span>
    <span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token operator">|</span> Object <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>definition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">[</span>type <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>id<span class="token punctuation">]</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">/* istanbul ignore if */</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> type <span class="token operator">===</span> <span class="token string">&#39;component&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">validateComponentName</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;component&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isPlainObject</span><span class="token punctuation">(</span>definition<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          definition<span class="token punctuation">.</span>name <span class="token operator">=</span> definition<span class="token punctuation">.</span>name <span class="token operator">||</span> id
          definition <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>_base<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>definition<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;directive&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> definition <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          definition <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">bind</span><span class="token operator">:</span> definition<span class="token punctuation">,</span> <span class="token literal-property property">update</span><span class="token operator">:</span> definition <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">[</span>type <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> definition
        <span class="token keyword">return</span> definition
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u51FD\u6570\u9996\u5148\u904D\u5386 <code>ASSET_TYPES</code>\uFF0C\u5F97\u5230 <code>type</code> \u540E\u6302\u8F7D\u5230 Vue \u4E0A \u3002<code>ASSET_TYPES</code> \u7684\u5B9A\u4E49\u5728 <code>src/shared/constants.js</code> \u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ASSET_TYPES</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;component&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;directive&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;filter&#39;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6240\u4EE5\u5B9E\u9645\u4E0A Vue \u662F\u521D\u59CB\u5316\u4E86 3 \u4E2A\u5168\u5C40\u51FD\u6570\uFF0C\u5E76\u4E14\u5982\u679C <code>type</code> \u662F <code>component</code> \u4E14 <code>definition</code> \u662F\u4E00\u4E2A\u5BF9\u8C61\u7684\u8BDD\uFF0C\u901A\u8FC7 <code>this.opitons._base.extend</code>\uFF0C \u76F8\u5F53\u4E8E <code>Vue.extend</code> \u628A\u8FD9\u4E2A\u5BF9\u8C61\u8F6C\u6362\u6210\u4E00\u4E2A\u7EE7\u627F\u4E8E Vue \u7684\u6784\u9020\u51FD\u6570\uFF0C\u6700\u540E\u901A\u8FC7 <code>this.options[type + &#39;s&#39;][id] = definition</code> \u628A\u5B83\u6302\u8F7D\u5230 <code>Vue.options.components</code> \u4E0A\u3002</p><p>\u7531\u4E8E\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u521B\u5EFA\u90FD\u662F\u901A\u8FC7 <code>Vue.extend</code> \u7EE7\u627F\u800C\u6765\uFF0C\u4E4B\u524D\u5206\u6790\u8FC7\u5728\u7EE7\u627F\u7684\u8FC7\u7A0B\u4E2D\u6709\u8FD9\u4E48\u4E00\u6BB5\u903B\u8F91\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Sub<span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
  Super<span class="token punctuation">.</span>options<span class="token punctuation">,</span>
  extendOptions
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E5F\u5C31\u662F\u8BF4\u5B83\u4F1A\u628A <code>Vue.options</code> \u5408\u5E76\u5230 <code>Sub.options</code>\uFF0C\u4E5F\u5C31\u662F\u7EC4\u4EF6\u7684 <code>options</code> \u4E0A\uFF0C \u7136\u540E\u5728\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u5316\u9636\u6BB5\uFF0C\u4F1A\u6267\u884C <code>merge options</code> \u903B\u8F91\uFF0C\u628A <code>Sub.options.components</code> \u5408\u5E76\u5230 <code>vm.$options.components</code> \u4E0A\u3002</p><p>\u7136\u540E\u5728\u521B\u5EFA <code>vnode</code> \u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u6267\u884C <code>_createElement</code> \u65B9\u6CD5\uFF0C\u518D\u6765\u56DE\u987E\u4E00\u4E0B\u8FD9\u90E8\u5206\u7684\u903B\u8F91\uFF0C\u5B83\u7684\u5B9A\u4E49\u5728 <code>src/core/vdom/create-element.js</code> \u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">_createElement</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">context</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>
  tag<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> Class<span class="token operator">&lt;</span>Component<span class="token operator">&gt;</span> <span class="token operator">|</span> Function <span class="token operator">|</span> Object<span class="token punctuation">,</span>
  data<span class="token operator">?</span><span class="token operator">:</span> VNodeData<span class="token punctuation">,</span>
  children<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  normalizationType<span class="token operator">?</span><span class="token operator">:</span> number</span>
<span class="token punctuation">)</span><span class="token operator">:</span> VNode <span class="token operator">|</span> Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">let</span> vnode<span class="token punctuation">,</span> ns
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> tag <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> Ctor
    ns <span class="token operator">=</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>$vnode <span class="token operator">&amp;&amp;</span> context<span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>ns<span class="token punctuation">)</span> <span class="token operator">||</span> config<span class="token punctuation">.</span><span class="token function">getTagNamespace</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">isReservedTag</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// platform built-in elements</span>
      vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
        config<span class="token punctuation">.</span><span class="token function">parsePlatformTagName</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">,</span>
        <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>Ctor <span class="token operator">=</span> <span class="token function">resolveAsset</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>$options<span class="token punctuation">,</span> <span class="token string">&#39;components&#39;</span><span class="token punctuation">,</span> tag<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// component</span>
      vnode <span class="token operator">=</span> <span class="token function">createComponent</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">,</span> tag<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// unknown or unlisted namespaced elements</span>
      <span class="token comment">// check at runtime because it may get assigned a namespace when its</span>
      <span class="token comment">// parent normalizes children</span>
      vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
        tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">,</span>
        <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// direct component options / constructor</span>
    vnode <span class="token operator">=</span> <span class="token function">createComponent</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u8FD9\u91CC\u6709\u4E00\u4E2A\u5224\u65AD\u903B\u8F91 <code>isDef(Ctor = resolveAsset(context.$options, &#39;components&#39;, tag))</code>\uFF0C\u5148\u6765\u770B\u4E00\u4E0B <code>resolveAsset</code> \u7684\u5B9A\u4E49\uFF0C\u5728 <code>src/core/utils/options.js</code> \u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">resolveAsset</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  warnMissing<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
<span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>
  <span class="token comment">/* istanbul ignore if */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> id <span class="token operator">!==</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> assets <span class="token operator">=</span> options<span class="token punctuation">[</span>type<span class="token punctuation">]</span>
  <span class="token comment">// check local registration variations first</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>assets<span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> assets<span class="token punctuation">[</span>id<span class="token punctuation">]</span>
  <span class="token keyword">const</span> camelizedId <span class="token operator">=</span> <span class="token function">camelize</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>assets<span class="token punctuation">,</span> camelizedId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> assets<span class="token punctuation">[</span>camelizedId<span class="token punctuation">]</span>
  <span class="token keyword">const</span> PascalCaseId <span class="token operator">=</span> <span class="token function">capitalize</span><span class="token punctuation">(</span>camelizedId<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>assets<span class="token punctuation">,</span> PascalCaseId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> assets<span class="token punctuation">[</span>PascalCaseId<span class="token punctuation">]</span>
  <span class="token comment">// fallback to prototype chain</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> assets<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">||</span> assets<span class="token punctuation">[</span>camelizedId<span class="token punctuation">]</span> <span class="token operator">||</span> assets<span class="token punctuation">[</span>PascalCaseId<span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> warnMissing <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token string">&#39;Failed to resolve &#39;</span> <span class="token operator">+</span> type<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;: &#39;</span> <span class="token operator">+</span> id<span class="token punctuation">,</span>
      options
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u8FD9\u6BB5\u903B\u8F91\u5F88\u7B80\u5355\uFF0C\u5148\u901A\u8FC7 <code>const assets = options[type]</code> \u62FF\u5230 <code>assets</code>\uFF0C\u7136\u540E\u518D\u5C1D\u8BD5\u62FF <code>assets[id]</code>\uFF0C\u8FD9\u91CC\u6709\u4E2A\u987A\u5E8F\uFF0C\u5148\u76F4\u63A5\u4F7F\u7528 <code>id</code> \u62FF\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u628A <code>id</code> \u53D8\u6210\u9A7C\u5CF0\u7684\u5F62\u5F0F\u518D\u62FF\uFF0C\u5982\u679C\u4ECD\u7136\u4E0D\u5B58\u5728\u5219\u5728\u9A7C\u5CF0\u7684\u57FA\u7840\u4E0A\u628A\u9996\u5B57\u6BCD\u518D\u53D8\u6210\u5927\u5199\u7684\u5F62\u5F0F\u518D\u62FF\uFF0C\u5982\u679C\u4ECD\u7136\u62FF\u4E0D\u5230\u5219\u62A5\u9519\u3002\u8FD9\u6837\u8BF4\u660E\u4E86\u5728\u4F7F\u7528 <code>Vue.component(id, definition)</code> \u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0Cid \u53EF\u4EE5\u662F\u8FDE\u5B57\u7B26\u3001\u9A7C\u5CF0\u6216\u9996\u5B57\u6BCD\u5927\u5199\u7684\u5F62\u5F0F\u3002</p><p>\u90A3\u4E48\u56DE\u5230\u7684\u8C03\u7528 <code>resolveAsset(context.$options, &#39;components&#39;, tag)</code>\uFF0C\u5373\u62FF <code>vm.$options.components[tag]</code>\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5728 <code>resolveAsset</code> \u7684\u65F6\u5019\u62FF\u5230\u8FD9\u4E2A\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570\uFF0C\u5E76\u4F5C\u4E3A <code>createComponent</code> \u7684\u94A9\u5B50\u7684\u53C2\u6570\u3002</p><h2 id="\u5C40\u90E8\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u6CE8\u518C" aria-hidden="true">#</a> \u5C40\u90E8\u6CE8\u518C</h2><p>Vue.js \u4E5F\u540C\u6837\u652F\u6301\u5C40\u90E8\u6CE8\u518C\uFF0C\u53EF\u4EE5\u5728\u4E00\u4E2A\u7EC4\u4EF6\u5185\u90E8\u4F7F\u7528 <code>components</code> \u9009\u9879\u505A\u7EC4\u4EF6\u7684\u5C40\u90E8\u6CE8\u518C\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;./components/HelloWorld&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    HelloWorld
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5176\u5B9E\u7406\u89E3\u4E86\u5168\u5C40\u6CE8\u518C\u7684\u8FC7\u7A0B\uFF0C\u5C40\u90E8\u6CE8\u518C\u662F\u975E\u5E38\u7B80\u5355\u7684\u3002\u5728\u7EC4\u4EF6\u7684 Vue \u7684\u5B9E\u4F8B\u5316\u9636\u6BB5\u6709\u4E00\u4E2A\u5408\u5E76 <code>option</code> \u7684\u903B\u8F91\uFF0C\u4E4B\u524D\u4E5F\u5206\u6790\u8FC7\uFF0C\u6240\u4EE5\u5C31\u628A <code>components</code> \u5408\u5E76\u5230 <code>vm.$options.components</code> \u4E0A\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5728 <code>resolveAsset</code> \u7684\u65F6\u5019\u62FF\u5230\u8FD9\u4E2A\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570\uFF0C\u5E76\u4F5C\u4E3A <code>createComponent</code> \u7684\u94A9\u5B50\u7684\u53C2\u6570\u3002</p><p>\u6CE8\u610F\uFF0C\u5C40\u90E8\u6CE8\u518C\u548C\u5168\u5C40\u6CE8\u518C\u4E0D\u540C\u7684\u662F\uFF0C\u53EA\u6709\u8BE5\u7C7B\u578B\u7684\u7EC4\u4EF6\u624D\u53EF\u4EE5\u8BBF\u95EE\u5C40\u90E8\u6CE8\u518C\u7684\u5B50\u7EC4\u4EF6\uFF0C\u800C\u5168\u5C40\u6CE8\u518C\u662F\u6269\u5C55\u5230 <code>Vue.options</code> \u4E0B\uFF0C\u6240\u4EE5\u5728\u6240\u6709\u7EC4\u4EF6\u521B\u5EFA\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u90FD\u4F1A\u4ECE\u5168\u5C40\u7684 <code>Vue.options.components</code> \u6269\u5C55\u5230\u5F53\u524D\u7EC4\u4EF6\u7684 <code>vm.$options.components</code> \u4E0B\uFF0C\u8FD9\u5C31\u662F\u5168\u5C40\u6CE8\u518C\u7684\u7EC4\u4EF6\u80FD\u88AB\u4EFB\u610F\u4F7F\u7528\u7684\u539F\u56E0\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u901A\u8FC7\u8FD9\u4E00\u5C0F\u8282\u7684\u5206\u6790\uFF0C\u5BF9\u7EC4\u4EF6\u7684\u6CE8\u518C\u8FC7\u7A0B\u6709\u4E86\u8BA4\u8BC6\uFF0C\u5E76\u7406\u89E3\u4E86\u5168\u5C40\u6CE8\u518C\u548C\u5C40\u90E8\u6CE8\u518C\u7684\u5DEE\u5F02\u3002\u5176\u5B9E\u5728\u5E73\u65F6\u7684\u5DE5\u4F5C\u4E2D\uFF0C\u5F53\u4F7F\u7528\u5230\u7EC4\u4EF6\u5E93\u7684\u65F6\u5019\uFF0C\u5F80\u5F80\u66F4\u901A\u7528\u57FA\u7840\u7EC4\u4EF6\u90FD\u662F\u5168\u5C40\u6CE8\u518C\u7684\uFF0C\u800C\u7F16\u5199\u7684\u7279\u4F8B\u573A\u666F\u7684\u4E1A\u52A1\u7EC4\u4EF6\u90FD\u662F\u5C40\u90E8\u6CE8\u518C\u7684\u3002\u4E86\u89E3\u4E86\u5B83\u4EEC\u7684\u539F\u7406\uFF0C\u5BF9\u5728\u5DE5\u4F5C\u4E2D\u5230\u5E95\u4F7F\u7528\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u8FD8\u662F\u5C40\u90E8\u6CE8\u518C\u7EC4\u4EF6\u662F\u6709\u8FD9\u975E\u5E38\u597D\u7684\u6307\u5BFC\u610F\u4E49\u7684\u3002</p>`,28);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};