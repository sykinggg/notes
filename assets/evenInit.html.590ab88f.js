import{_ as n,o as s,c as e,a}from"./app.11072343.js";const t={},p=a(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="\u4E8B\u4EF6\u6A21\u5757\u7684\u6CE8\u5165\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u6A21\u5757\u7684\u6CE8\u5165\u6A21\u5F0F" aria-hidden="true">#</a> \u4E8B\u4EF6\u6A21\u5757\u7684\u6CE8\u5165\u6A21\u5F0F</h1><p>React \u4E3A\u4E86\u8DE8\u5E73\u53F0\uFF0C\u5BF9\u4E8E\u4E8B\u4EF6\u4F53\u7CFB\u7684\u4EE3\u7801\u505A\u51FA\u4E86\u4E00\u4E9B\u59A5\u534F\uFF0C\u91C7\u7528\u52A8\u6001\u6CE8\u5165\u7684\u65B9\u5F0F\u8BA9\u4E0D\u540C\u7684\u5E73\u53F0\u5BF9\u4E8B\u4EF6\u6838\u5FC3\u6A21\u5757\u8FDB\u884C\u63D2\u4EF6\u6CE8\u5165\u3002\u5148\u6765\u770B<code>ReactDOM</code>\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u91CC\u9762\u6709\u8FD9\u4E48\u4E00\u53E5\u4EE3\u7801\uFF1A<code>import &#39;./ReactDOMClientInjection&#39;;</code>\uFF0C\u8FD9\u5C31\u662F\u6CE8\u5165\u7684\u5F00\u59CB\uFF0C\u8FD9\u4E2A js \u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> EventPluginHub <span class="token keyword">from</span> <span class="token string">&#39;events/EventPluginHub&#39;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> EventPluginUtils <span class="token keyword">from</span> <span class="token string">&#39;events/EventPluginUtils&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  getFiberCurrentPropsFromNode<span class="token punctuation">,</span>
  getInstanceFromNode<span class="token punctuation">,</span>
  getNodeFromInstance<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactDOMComponentTree&#39;</span>
<span class="token keyword">import</span> BeforeInputEventPlugin <span class="token keyword">from</span> <span class="token string">&#39;../events/BeforeInputEventPlugin&#39;</span>
<span class="token keyword">import</span> ChangeEventPlugin <span class="token keyword">from</span> <span class="token string">&#39;../events/ChangeEventPlugin&#39;</span>
<span class="token keyword">import</span> DOMEventPluginOrder <span class="token keyword">from</span> <span class="token string">&#39;../events/DOMEventPluginOrder&#39;</span>
<span class="token keyword">import</span> EnterLeaveEventPlugin <span class="token keyword">from</span> <span class="token string">&#39;../events/EnterLeaveEventPlugin&#39;</span>
<span class="token keyword">import</span> SelectEventPlugin <span class="token keyword">from</span> <span class="token string">&#39;../events/SelectEventPlugin&#39;</span>
<span class="token keyword">import</span> SimpleEventPlugin <span class="token keyword">from</span> <span class="token string">&#39;../events/SimpleEventPlugin&#39;</span>

EventPluginHub<span class="token punctuation">.</span>injection<span class="token punctuation">.</span><span class="token function">injectEventPluginOrder</span><span class="token punctuation">(</span>DOMEventPluginOrder<span class="token punctuation">)</span>
EventPluginUtils<span class="token punctuation">.</span><span class="token function">setComponentTree</span><span class="token punctuation">(</span>
  getFiberCurrentPropsFromNode<span class="token punctuation">,</span>
  getInstanceFromNode<span class="token punctuation">,</span>
  getNodeFromInstance<span class="token punctuation">,</span>
<span class="token punctuation">)</span>

EventPluginHub<span class="token punctuation">.</span>injection<span class="token punctuation">.</span><span class="token function">injectEventPluginsByName</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">SimpleEventPlugin</span><span class="token operator">:</span> SimpleEventPlugin<span class="token punctuation">,</span>
  <span class="token literal-property property">EnterLeaveEventPlugin</span><span class="token operator">:</span> EnterLeaveEventPlugin<span class="token punctuation">,</span>
  <span class="token literal-property property">ChangeEventPlugin</span><span class="token operator">:</span> ChangeEventPlugin<span class="token punctuation">,</span>
  <span class="token literal-property property">SelectEventPlugin</span><span class="token operator">:</span> SelectEventPlugin<span class="token punctuation">,</span>
  <span class="token literal-property property">BeforeInputEventPlugin</span><span class="token operator">:</span> BeforeInputEventPlugin<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5411\u4E8B\u4EF6\u7CFB\u7EDF\u6CE8\u5165\u4E86\u5E73\u53F0\u76F8\u5173\u7684\u4E8B\u4EF6\u4EE3\u7801\uFF0C\u540C\u65F6\u786E\u5B9A\u4E8B\u4EF6\u7684\u8C03\u7528\u987A\u5E8F\u3002</p><h1 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> plugin</h1><p>\u5148\u6765\u770B\u4E00\u4E0B\u4E00\u4E2A<code>plugin</code>\u5E94\u8BE5\u957F\u548B\u6837\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> ChangeEventPlugin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">eventTypes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">change</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">phasedRegistrationNames</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">bubbled</span><span class="token operator">:</span> <span class="token string">&#39;onChange&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">captured</span><span class="token operator">:</span> <span class="token string">&#39;onChangeCapture&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">isInteractive</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span> <span class="token comment">// \u6807\u5FD7\u662F\u5426\u9AD8\u4F18\u5148\u7EA7\u53CD\u9988</span>
      <span class="token literal-property property">registrationName</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
      <span class="token literal-property property">dependencies</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token constant">TOP_BLUR</span><span class="token punctuation">,</span>
        <span class="token constant">TOP_CHANGE</span><span class="token punctuation">,</span>
        <span class="token constant">TOP_CLICK</span><span class="token punctuation">,</span>
        <span class="token constant">TOP_FOCUS</span><span class="token punctuation">,</span>
        <span class="token constant">TOP_INPUT</span><span class="token punctuation">,</span>
        <span class="token constant">TOP_KEY_DOWN</span><span class="token punctuation">,</span>
        <span class="token constant">TOP_KEY_UP</span><span class="token punctuation">,</span>
        <span class="token constant">TOP_SELECTION_CHANGE</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">_isInputEventSupported</span><span class="token operator">:</span> isInputEventSupported<span class="token punctuation">,</span>

  <span class="token function-variable function">extractEvents</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>
    <span class="token parameter">topLevelType<span class="token punctuation">,</span>
    targetInst<span class="token punctuation">,</span>
    nativeEvent<span class="token punctuation">,</span>
    nativeEventTarget<span class="token punctuation">,</span></span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFAevent\u5BF9\u8C61\u5E76return</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>eventTypes</code>\u662F\u4EE5\u5177\u4F53\u4E8B\u4EF6\u4E3A<code>key</code>\u7684 <strong>map</strong> \u5BF9\u8C61\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u4E8B\u4EF6\u7684<code>phasedRegistrationNames</code>\u662F\u6307\u5B9A<code>props</code>\u7684\u540D\u5B57\uFF0C<code>dependencies</code>\u662F\u5982\u679C\u9700\u8981\u7ED1\u5B9A<code>change</code>\u4E8B\u4EF6\u9700\u8981\u540C\u65F6\u7ED1\u5B9A\u54EA\u4E9B\u4E8B\u4EF6</p><p><code>extractEvents</code>\u662F\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u7528\u6765\u6839\u636E\u5177\u4F53\u771F\u5B9E\u89E6\u53D1\u7684\u4E8B\u4EF6\u7C7B\u578B\u7B49\u53C2\u6570\uFF0C\u8FD4\u56DE\u5BF9\u5E94\u7684\u4E8B\u4EF6\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u8FD4\u56DE<code>null</code>\u8868\u793A\u5F53\u524D\u4E8B\u4EF6\u8DDF\u8FD9\u4E2A\u63D2\u4EF6\u6CA1\u6709\u5173\u7CFB\u3002</p><h1 id="\u6CE8\u518C\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u63D2\u4EF6" aria-hidden="true">#</a> \u6CE8\u518C\u63D2\u4EF6</h1><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td><code>eventPluginOrder</code></td><td>\u8BB0\u5F55\u63D2\u4EF6\u7684\u8C03\u7528\u987A\u5E8F</td></tr><tr><td><code>namesToPlugins</code></td><td>\u4EE5\u63D2\u4EF6\u540D\u4E3Akey\u7684\u63D2\u4EF6 map</td></tr><tr><td><code>plugins</code></td><td>\u6309\u7167<code>eventPluginOrder</code>\u987A\u5E8F\u5B58\u50A8\u7684\u63D2\u4EF6\u6A21\u5757\u6570\u7EC4</td></tr><tr><td><code>eventNameDispatchConfigs</code></td><td>\u6309\u7167\u6BCF\u4E2A\u63D2\u4EF6\u4E2D\u7684<code>eventTypes</code>\u4E2D\u7684\u6BCF\u4E00\u9879\u4E3A<code>key</code>\uFF0C\u5176\u5BF9\u5E94\u7684\u5BF9\u8C61\u4E3A<code>value</code>\u7684\u5BF9\u8C61</td></tr><tr><td><code>registrationNameModules</code></td><td>\u5B58\u50A8\u6709<code>phasedRegistrationNames</code>\u6216\u8005<code>registrationName</code>\u7684\u63D2\u4EF6\u7684\u4E8B\u4EF6\u5BF9\u5E94\u7684\u6A21\u5757</td></tr></tbody></table><ol><li><p>\u9996\u5148\u8C03\u7528<code>injectEventPluginOrder</code>\uFF0C\u8BBE\u7F6E<code>eventPluginOrder</code></p></li><li><p>\u7136\u540E\u8C03\u7528<code>injectEventPluginsByName</code>\uFF0C\u628A\u6240\u6709\u63D2\u4EF6\u52A0\u5165\u5230<code>namesToPlugins</code>\u5BF9\u8C61\u4E2D\uFF0C\u5E76\u4EE5\u63D2\u4EF6\u540D\u4E3A<code>key</code></p></li><li><p>\u7136\u540E\u8C03\u7528<code>recomputePluginOrdering</code>\u628A\u6240\u6709\u63D2\u4EF6\u5B89\u987A\u5E8F\u63D2\u5165\u5230<code>plugins</code>\u6570\u7EC4\u4E2D\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u63D2\u4EF6\u4E2D\u7684<code>eventTypes</code>\u4E2D\u7684\u6BCF\u4E2A\u4E8B\u4EF6\u7C7B\u578B\u8C03\u7528<code>publishEventForPlugin</code>\uFF0C\u8BBE\u7F6E<code>eventNameDispatchConfigs</code>\u5BF9\u8C61\uFF0C\u4EE5\u4E8B\u4EF6\u540D\u4E3A<code>key</code>\u5B58\u50A8<code>dispatchConfig</code>\uFF0C\u4E5F\u5C31\u662F\u4E0A\u9762\u63D2\u4EF6\u4E2D\u7684<code>eventTypes.change</code>\u5BF9\u5E94\u7684\u5BF9\u8C61</p></li><li><p>\u7136\u540E\u8FD8\u9700\u8981\u5BF9\u6BCF\u4E00\u4E2A<code>phasedRegistrationNames</code>\u91CC\u9762\u7684\u9879\u6267\u884C<code>publishRegistrationName</code>\uFF0C\u8BBE\u7F6E<code>registrationNameModules</code>\uFF0C\u4EE5\u4E8B\u4EF6\u540D\u4E3A<code>key</code>\u5B58\u50A8\u6A21\u5757\uFF0C\u540C\u65F6\u8BBE\u7F6E<code>registrationNameDependencies</code>\uFF0C\u4EE5\u4E8B\u4EF6\u540D\u4E3A<code>key</code>\u5B58\u50A8\u4E8B\u4EF6\u7684<code>dependencies</code></p></li></ol><p><code>registrationNameModules</code>\u5728\u66F4\u65B0 DOM \u8282\u70B9\u7684\u65F6\u5019\u4F1A\u88AB\u7528\u5230\uFF0C<code>registrationNameDependencies</code>\u5728\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u4F7F\u7528\u4F1A\u88AB\u7528\u5230\u3002</p><p>\u6574\u4E2A\u6CE8\u518C\u8FC7\u7A0B\u5C31\u662F\u4E3A\u4E86\u521D\u59CB\u5316\u8BBE\u7F6E\u8FD9\u4E9B\u53D8\u91CF\uFF0C\u8FD9\u4E9B\u53D8\u91CF\u5728\u540E\u7EED\u7684 DOM \u64CD\u4F5C\u4E2D\u4F1A\u626E\u6F14\u6BD4\u8F83\u91CD\u8981\u7684\u89D2\u8272\u3002</p><h1 id="\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784" aria-hidden="true">#</a> \u7ED3\u6784</h1><p><strong>eventNameDispatchConfigs</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">change</span><span class="token operator">:</span> ChangePlugin<span class="token punctuation">.</span>eventTypes<span class="token punctuation">.</span>change<span class="token punctuation">,</span>
  <span class="token comment">// ...other plugins</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>registrationNameModules</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">onChange</span><span class="token operator">:</span> ChangePlugin<span class="token punctuation">,</span>
  <span class="token literal-property property">onChangeCapture</span><span class="token operator">:</span> ChangePlugin
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>registrationNameDependencies</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">onChange</span><span class="token operator">:</span> ChangePlugin<span class="token punctuation">.</span>eventTypes<span class="token punctuation">.</span>change<span class="token punctuation">.</span>dependencies<span class="token punctuation">,</span>
  <span class="token literal-property property">onChangeCapture</span><span class="token operator">:</span> ChangePlugin<span class="token punctuation">.</span>eventTypes<span class="token punctuation">.</span>change<span class="token punctuation">.</span>dependencies
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),o=[p];function i(c,l){return s(),e("div",null,o)}var d=n(t,[["render",i],["__file","evenInit.html.vue"]]);export{d as default};
