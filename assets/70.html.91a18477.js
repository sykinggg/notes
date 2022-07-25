import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.b4922828.js";const o={},p=e(`<h1 id="\u7B2C78\u9898-\u3010promise\u3011\u4E0B\u9762\u4EE3\u7801\u7684\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u7B2C78\u9898-\u3010promise\u3011\u4E0B\u9762\u4EE3\u7801\u7684\u8F93\u51FA" aria-hidden="true">#</a> \u7B2C78\u9898\uFF1A\u3010Promise\u3011\u4E0B\u9762\u4EE3\u7801\u7684\u8F93\u51FA</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">promise1</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">promise2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">promise1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;finally1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token function">promise2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;finally2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6267\u884C\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u8FC7\u7A0B" aria-hidden="true">#</a> \u6267\u884C\u8FC7\u7A0B</h2><ul><li><p>\u9996\u5148\u5B9A\u4E49\u4E86\u4E24\u4E2A\u51FD\u6570<code>promise1</code>\u548C<code>promise2</code>\uFF0C\u5148\u4E0D\u7BA1\u63A5\u7740\u5F80\u4E0B\u770B\u3002</p></li><li><p><code>promise1</code>\u51FD\u6570\u5148\u88AB\u8C03\u7528\u4E86\uFF0C\u7136\u540E\u6267\u884C\u91CC\u9762<code>new Promise</code>\u7684\u540C\u6B65\u4EE3\u7801\u6253\u5370\u51FA<code>promise1</code></p></li><li><p>\u4E4B\u540E\u9047\u5230\u4E86<code>resolve(1)</code>\uFF0C\u5C06<code>p</code>\u7684\u72B6\u6001\u6539\u4E3A\u4E86<code>resolved</code>\u5E76\u5C06\u7ED3\u679C\u4FDD\u5B58\u4E0B\u6765\u3002</p></li><li><p>\u6B64\u65F6<code>promise1</code>\u5185\u7684\u51FD\u6570\u5185\u5BB9\u5DF2\u7ECF\u6267\u884C\u5B8C\u4E86\uFF0C\u8DF3\u51FA\u8BE5\u51FD\u6570</p></li><li><p>\u78B0\u5230\u4E86<code>promise1().then()</code>\uFF0C\u7531\u4E8E<code>promise1</code>\u7684\u72B6\u6001\u5DF2\u7ECF\u53D1\u751F\u4E86\u6539\u53D8\u4E14\u4E3A<code>resolved</code>\u3002\u56E0\u6B64\u5C06<code>\xB7promise1().then()\xB7</code>\u8FD9\u6761\u5FAE\u4EFB\u52A1\u52A0\u5165\u672C\u8F6E\u7684\u5FAE\u4EFB\u52A1\u5217\u8868(\u8FD9\u662F\u7B2C\u4E00\u4E2A\u5FAE\u4EFB\u52A1)</p></li><li><p>\u8FD9\u65F6\u5019\u8981\u6CE8\u610F\u4E86\uFF0C\u4EE3\u7801\u5E76\u4E0D\u4F1A\u63A5\u7740\u5F80\u94FE\u5F0F\u8C03\u7528\u7684\u4E0B\u9762\u8D70\uFF0C\u4E5F\u5C31\u662F\u4E0D\u4F1A\u5148\u5C06<code>.finally</code>\u52A0\u5165\u5FAE\u4EFB\u52A1\u5217\u8868\uFF0C\u90A3\u662F\u56E0\u4E3A<code>.then</code>\u672C\u8EAB\u5C31\u662F\u4E00\u4E2A\u5FAE\u4EFB\u52A1\uFF0C\u5B83\u94FE\u5F0F\u540E\u9762\u7684\u5185\u5BB9\u5FC5\u987B\u5F97\u7B49\u5F53\u524D\u8FD9\u4E2A\u5FAE\u4EFB\u52A1\u6267\u884C\u5B8C\u624D\u4F1A\u6267\u884C\uFF0C\u56E0\u6B64\u8FD9\u91CC\u6211\u4EEC\u5148\u4E0D\u7BA1<code>.finally()</code></p></li><li><p>\u518D\u5F80\u4E0B\u8D70\u78B0\u5230\u4E86<code>promise2()</code>\u51FD\u6570\uFF0C\u5176\u4E2D\u8FD4\u56DE\u7684<code>new Promise</code>\u4E2D\u5E76\u6CA1\u6709\u540C\u6B65\u4EE3\u7801\u9700\u8981\u6267\u884C\uFF0C\u6240\u4EE5\u6267\u884C<code>reject(&#39;error&#39;)</code>\u7684\u65F6\u5019\u5C06<code>promise2</code>\u51FD\u6570\u4E2D\u7684<code>Promise</code>\u7684\u72B6\u6001\u53D8\u4E3A\u4E86<code>rejected</code></p></li><li><p>\u8DF3\u51FA<code>promise2</code>\u51FD\u6570\uFF0C\u9047\u5230\u4E86<code>promise2().catch()</code>\uFF0C\u5C06\u5176\u52A0\u5165\u5F53\u524D\u7684\u5FAE\u4EFB\u52A1\u961F\u5217(\u8FD9\u662F\u7B2C\u4E8C\u4E2A\u5FAE\u4EFB\u52A1)\uFF0C\u4E14\u94FE\u5F0F\u8C03\u7528\u540E\u9762\u7684\u5185\u5BB9\u5F97\u7B49\u8BE5\u4EFB\u52A1\u6267\u884C\u5B8C\u540E\u624D\u6267\u884C\uFF0C\u548C<code>.then()</code>\u4E00\u6837\u3002</p></li><li><p>\u672C\u8F6E\u7684\u5B8F\u4EFB\u52A1\u5168\u90E8\u6267\u884C\u5B8C\u4E86\uFF0C\u6765\u770B\u770B\u5FAE\u4EFB\u52A1\u5217\u8868\uFF0C\u5B58\u5728<code>promise1().then()</code>\uFF0C\u6267\u884C\u5B83\uFF0C\u6253\u5370\u51FA1\uFF0C\u7136\u540E\u9047\u5230\u4E86<code>.finally()</code>\u8FD9\u4E2A\u5FAE\u4EFB\u52A1\u5C06\u5B83\u52A0\u5165\u5FAE\u4EFB\u52A1\u5217\u8868(\u8FD9\u662F\u7B2C\u4E09\u4E2A\u5FAE\u4EFB\u52A1)\u7B49\u5F85\u6267\u884C</p></li><li><p>\u518D\u6267\u884C<code>promise2().catch()</code>\u6253\u5370\u51FA<code>error</code>\uFF0C\u6267\u884C\u5B8C\u540E\u5C06<code>finally2</code>\u52A0\u5165\u5FAE\u4EFB\u52A1\u52A0\u5165\u5FAE\u4EFB\u52A1\u5217\u8868(\u8FD9\u662F\u7B2C\u56DB\u4E2A\u5FAE\u4EFB\u52A1)</p></li><li><p>\u672C\u8F6E\u53C8\u5168\u90E8\u6267\u884C\u5B8C\u4E86\uFF0C\u4F46\u662F\u5FAE\u4EFB\u52A1\u5217\u8868\u8FD8\u6709\u4E24\u4E2A\u65B0\u7684\u5FAE\u4EFB\u52A1\u6CA1\u6709\u6267\u884C\u5B8C\uFF0C\u56E0\u6B64\u4F9D\u6B21\u6267\u884C<code>finally1</code>\u548C<code>finally2</code>\u3002</p></li></ul><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;promise1&#39;
&#39;1&#39;
&#39;error&#39;
&#39;finally1&#39;
&#39;finally2&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[p];function c(i,l){return s(),a("div",null,t)}var d=n(o,[["render",c],["__file","70.html.vue"]]);export{d as default};
