import{a as n}from"./app.27c025c0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h3 id="umijs-plugin-dva" tabindex="-1"><a class="header-anchor" href="#umijs-plugin-dva" aria-hidden="true">#</a> @umijs/plugin-dva</h3><hr><p>\u6574\u5408 dva \u6570\u636E\u6D41</p><h4 id="\u542F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u542F\u7528\u65B9\u5F0F</h4><p>\u914D\u7F6E\u5F00\u542F</p><h2 id="_1-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-\u4ECB\u7ECD" aria-hidden="true">#</a> <strong>1. \u4ECB\u7ECD</strong></h2><ul><li><p><strong>\u5185\u7F6E dva</strong>\uFF0C\u9ED8\u8BA4\u7248\u672C\u662F <code>^2.6.0-beta.20</code>\uFF0C\u5982\u679C\u9879\u76EE\u4E2D\u6709\u4F9D\u8D56\uFF0C\u4F1A\u4F18\u5148\u4F7F\u7528\u9879\u76EE\u4E2D\u4F9D\u8D56\u7684\u7248\u672C\u3002</p></li><li><p><strong>\u7EA6\u5B9A\u5F0F\u7684 model \u7EC4\u7EC7\u65B9\u5F0F</strong>\uFF0C\u4E0D\u7528\u624B\u52A8\u6CE8\u518C model</p></li><li><p><strong>\u6587\u4EF6\u540D\u5373 namespace</strong>\uFF0Cmodel \u5185\u5982\u679C\u6CA1\u6709\u58F0\u660E namespace\uFF0C\u4F1A\u4EE5\u6587\u4EF6\u540D\u4F5C\u4E3A namespace</p></li><li><p><strong>\u5185\u7F6E dva-loading</strong>\uFF0C\u76F4\u63A5 connect loading \u5B57\u6BB5\u4F7F\u7528\u5373\u53EF</p></li><li><p><strong>\u652F\u6301 immer</strong>\uFF0C\u901A\u8FC7\u914D\u7F6E <code>immer</code> \u5F00\u542F</p></li></ul><h4 id="\u7EA6\u5B9A\u5F0F\u7684-model-\u7EC4\u7EC7\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7EA6\u5B9A\u5F0F\u7684-model-\u7EC4\u7EC7\u65B9\u5F0F" aria-hidden="true">#</a> \u7EA6\u5B9A\u5F0F\u7684 model \u7EC4\u7EC7\u65B9\u5F0F</h4><p>\u7B26\u5408\u4EE5\u4E0B\u89C4\u5219\u7684\u6587\u4EF6\u4F1A\u88AB\u8BA4\u4E3A\u662F model \u6587\u4EF6</p><ul><li><p><code>src/models</code> \u4E0B\u7684\u6587\u4EF6</p></li><li><p><code>src/pages</code> \u4E0B\uFF0C\u5B50\u76EE\u5F55\u4E2D models \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6</p></li><li><p><code>src/pages</code> \u4E0B\uFF0C\u6240\u6709 model.ts \u6587\u4EF6</p></li></ul><p>\u6BD4\u5982\uFF1A</p><div class="language-file ext-file line-numbers-mode"><pre class="language-file"><code>+ src
  + models/a.ts
  + pages
    + foo/models/b.ts
    + bar/model.ts
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5176\u4E2D <code>a.ts</code>\uFF0C<code>b.ts</code> \u548C <code>model.ts</code> \u5982\u679C\u5176\u5185\u5BB9\u662F\u6709\u6548 dva model \u5199\u6CD5\uFF0C\u5219\u4F1A\u88AB\u8BA4\u4E3A\u662F model \u6587\u4EF6</p><h4 id="dva-model-\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#dva-model-\u6821\u9A8C" aria-hidden="true">#</a> dva model \u6821\u9A8C</h4><p>\u9ED8\u8BA4\uFF0C\u4E0A\u4E00\u5C0F\u8282\u7684\u627E\u5230\u7684\u6587\u4EF6\uFF0C\u4F1A\u505A\u4E00\u6B21\u6821\u9A8C\uFF0C\u6821\u9A8C\u901A\u8FC7\u540E\uFF0C\u624D\u4F1A\u88AB\u6DFB\u52A0\u5230\u6700\u7EC8\u5230 dva model \u5217\u8868</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u901A\u8FC7</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u901A\u8FC7</span>
<span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> model<span class="token punctuation">;</span>

<span class="token comment">// \u901A\u8FC7\uFF0C\u652F\u6301 dva-model-extend</span>
<span class="token keyword">import</span> dvaModelExtend <span class="token keyword">from</span> <span class="token string">&#39;dva-model-extend&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">dvaModelExtend</span><span class="token punctuation">(</span>baseModel<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u901A\u8FC7</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token operator">&lt;</span>Model<span class="token operator">&gt;</span><span class="token punctuation">{</span> <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E0D\u901A\u8FC7</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="_2-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E" aria-hidden="true">#</a> <strong>2. \u914D\u7F6E</strong></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dva</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">immer</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hmr</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="skipmodelvalidate" tabindex="-1"><a class="header-anchor" href="#skipmodelvalidate" aria-hidden="true">#</a> skipModelValidate</h4><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>false</code></p></li></ul><p>\u662F\u5426\u8DF3\u8FC7 model \u9A8C\u8BC1</p><h4 id="extramodels" tabindex="-1"><a class="header-anchor" href="#extramodels" aria-hidden="true">#</a> extraModels</h4><ul><li><p>Type: <code>string[]</code></p></li><li><p>Default: <code>[]</code></p></li></ul><p>\u914D\u7F6E\u989D\u5916\u5230 dva model</p><h4 id="immer" tabindex="-1"><a class="header-anchor" href="#immer" aria-hidden="true">#</a> immer</h4><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>false</code></p></li></ul><p>\u8868\u793A\u662F\u5426\u542F\u7528 immer \u4EE5\u65B9\u4FBF\u4FEE\u6539 reducer</p><h4 id="hmr" tabindex="-1"><a class="header-anchor" href="#hmr" aria-hidden="true">#</a> hmr</h4><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>false</code></p></li></ul><p>\u8868\u793A\u662F\u5426\u542F\u7528 dva model \u7684\u70ED\u66F4\u65B0</p><p><strong>3. dva \u8FD0\u884C\u65F6\u914D\u7F6E</strong></p><p>\u901A\u8FC7 <code>src/app.tsx</code> \u6587\u4EF6\u914D\u7F6E dva \u521B\u5EFA\u65F6\u7684\u53C2\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createLogger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-logger&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> dva <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">onAction</span><span class="token operator">:</span> <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> Error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>4. umi \u63A5\u53E3</strong></p><p>\u5E38\u7528\u65B9\u6CD5\u53EF\u4ECE umi \u76F4\u63A5 import</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;umi&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="connect" tabindex="-1"><a class="header-anchor" href="#connect" aria-hidden="true">#</a> connect</h4><p>\u7ED1\u5B9A\u6570\u636E\u5230\u7EC4\u4EF6</p><h4 id="getdvaapp" tabindex="-1"><a class="header-anchor" href="#getdvaapp" aria-hidden="true">#</a> getDvaApp</h4><p>\u83B7\u53D6 <code>dva</code> \u5B9E\u4F8B\uFF0C\u5373\u4E4B\u524D\u7684 <code>window.g_app</code></p><h4 id="usedispatch" tabindex="-1"><a class="header-anchor" href="#usedispatch" aria-hidden="true">#</a> useDispatch</h4><p>hooks \u7684\u65B9\u5F0F\u83B7\u53D6 <code>dispatch</code>\uFF0Cdva \u4E3A 2.6.x \u65F6\u6709\u6548</p><h4 id="useselector" tabindex="-1"><a class="header-anchor" href="#useselector" aria-hidden="true">#</a> useSelector</h4><p>hooks \u7684\u65B9\u5F0F\u83B7\u53D6\u90E8\u5206\u6570\u636E\uFF0Cdva \u4E3A 2.6.x \u65F6\u6709\u6548</p><h4 id="usestore" tabindex="-1"><a class="header-anchor" href="#usestore" aria-hidden="true">#</a> useStore</h4><p>hooks \u7684\u65B9\u5F0F\u83B7\u53D6 store\uFF0Cdva \u4E3A 2.6.x \u65F6\u6709\u6548</p><p><strong>3. \u547D\u4EE4</strong></p><h4 id="umi-dva-list-model" tabindex="-1"><a class="header-anchor" href="#umi-dva-list-model" aria-hidden="true">#</a> umi dva list model</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>umi dva list model
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>4. \u7C7B\u578B</strong></p><p>\u901A\u8FC7 umi \u5BFC\u51FA\u7C7B\u578B\uFF1A<code>ConnectRC</code>\uFF0C<code>ConnectProps</code>\uFF0C<code>Dispatch</code>\uFF0C<code>Action</code>\uFF0C<code>Reducer</code>\uFF0C<code>ImmerReducer</code>\uFF0C<code>Effect</code>\uFF0C<code>Subscription</code>\uFF0C\u548C\u6240\u6709 <code>model</code> \u6587\u4EF6\u4E2D\u5BFC\u51FA\u7684\u7C7B\u578B</p><h4 id="model-\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#model-\u7528\u4F8B" aria-hidden="true">#</a> model \u7528\u4F8B</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Effect<span class="token punctuation">,</span> ImmerReducer<span class="token punctuation">,</span> Reducer<span class="token punctuation">,</span> Subscription <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;umi&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IndexModelState</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IndexModelType</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">;</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> IndexModelState<span class="token punctuation">;</span>
  <span class="token literal-property property">effects</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">query</span><span class="token operator">:</span> Effect<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">save</span><span class="token operator">:</span> Reducer<span class="token operator">&lt;</span>IndexModelState<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token comment">// \u542F\u7528 immer \u4E4B\u540E</span>
    <span class="token comment">// save: ImmerReducer&lt;IndexModelState&gt;;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token literal-property property">subscriptions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">setup</span><span class="token operator">:</span> Subscription <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">IndexModel</span><span class="token operator">:</span> IndexModelType <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">effects</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> payload <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> call<span class="token punctuation">,</span> put <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">save</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>state<span class="token punctuation">,</span>
        <span class="token operator">...</span>action<span class="token punctuation">.</span>payload<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u542F\u7528 immer \u4E4B\u540E</span>
    <span class="token comment">// save(state, action) {</span>
    <span class="token comment">//   state.name = action.payload;</span>
    <span class="token comment">// },</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subscriptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> dispatch<span class="token punctuation">,</span> history <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> history<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> pathname <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pathname <span class="token operator">===</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;query&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> IndexModel<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><h4 id="page-\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#page-\u7528\u4F8B" aria-hidden="true">#</a> page \u7528\u4F8B</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IndexModelState<span class="token punctuation">,</span> ConnectProps<span class="token punctuation">,</span> Loading<span class="token punctuation">,</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;umi&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">PageProps</span> <span class="token keyword">extends</span> <span class="token class-name">ConnectProps</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">index</span><span class="token operator">:</span> IndexModelState<span class="token punctuation">;</span>
  <span class="token literal-property property">loading</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">IndexPage</span><span class="token operator">:</span> <span class="token constant">FC</span><span class="token operator">&lt;</span>PageProps<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> index<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> index<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div <span class="token operator">&gt;</span>Hello <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> index<span class="token punctuation">,</span> loading <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">index</span><span class="token operator">:</span> IndexModelState<span class="token punctuation">;</span> loading<span class="token operator">:</span> Loading <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  index<span class="token punctuation">,</span>
  <span class="token literal-property property">loading</span><span class="token operator">:</span> loading<span class="token punctuation">.</span>models<span class="token punctuation">.</span>index<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span>IndexPage<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u6216\u8005</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IndexModelState<span class="token punctuation">,</span> ConnectRC<span class="token punctuation">,</span> Loading<span class="token punctuation">,</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;umi&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">PageProps</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">index</span><span class="token operator">:</span> IndexModelState<span class="token punctuation">;</span>
  <span class="token literal-property property">loading</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">IndexPage</span><span class="token operator">:</span> ConnectRC<span class="token operator">&lt;</span>PageProps<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> index<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> index<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div <span class="token operator">&gt;</span>Hello <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> index<span class="token punctuation">,</span> loading <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">index</span><span class="token operator">:</span> IndexModelState<span class="token punctuation">;</span> loading<span class="token operator">:</span> Loading <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  index<span class="token punctuation">,</span>
  <span class="token literal-property property">loading</span><span class="token operator">:</span> loading<span class="token punctuation">.</span>models<span class="token punctuation">.</span>index<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span>IndexPage<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,57);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
