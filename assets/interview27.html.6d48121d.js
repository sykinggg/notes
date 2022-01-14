import{a as s}from"./app.3aebe68d.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<p>\u5982\u679C\u53EA\u8C03\u7528\u4E86<code>super()</code>\uFF0C\u90A3\u4E48<code>this.props</code>\u5728<code>super()</code>\u548C\u6784\u9020\u51FD\u6570\u7ED3\u675F\u4E4B\u95F4\u4ECD\u662F<code>undefined</code>\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6CA1\u6709\u4F20 props</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// {}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined </span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>react \u4E2D\u7684class \u662F\u57FA\u4E8Ees6\u7684\u89C4\u8303\u5B9E\u73B0\u7684, \u7EE7\u627F\u662F\u4F7F\u7528extends\u5173\u952E\u5B57\u5B9E\u73B0\u7EE7\u627F\u7684\uFF0C\u5B50\u7C7B\u5FC5\u987B\u5728constructor()\u4E2D\u8C03\u7528super() \u65B9\u6CD5\u5426\u5219\u65B0\u5EFA\u5B9E\u4F8B\u5C31\u4F1A\u62A5\u9519\uFF0C\u62A5\u9519\u7684\u539F\u56E0\u662F \u5B50\u7C7B\u662F\u6CA1\u6709\u81EA\u5DF1\u7684this\u5BF9\u8C61\u7684\uFF0C\u5B83\u53EA\u80FD\u7EE7\u627F\u7236\u7C7B\u7684this\u5BF9\u8C61\uFF0C\u7136\u540E\u5BF9\u5176\u8FDB\u884C\u52A0\u5DE5\uFF0C\u800Csuper()\u5C31\u662F\u5C06\u7236\u7C7B\u4E2D\u7684this\u5BF9\u8C61\u7EE7\u627F\u7ED9\u5B50\u7C7B\u7684\uFF0C\u6CA1\u6709super() \u5B50\u7C7B\u5C31\u5F97\u4E0D\u5230this\u5BF9\u8C61\u3002</p><ul><li><p>\u5982\u679C\u4F7F\u7528\u4E86<code>constructor</code>\u5C31\u5FC5\u987B\u5199<code>super()</code> \u8FD9\u4E2A\u662F\u7528\u6765\u521D\u59CB\u5316this\u7684\uFF0C\u53EF\u4EE5\u7ED1\u5B9A\u4E8B\u4EF6\u5230this\u4E0A</p></li><li><p>\u5982\u679C\u60F3\u8981\u5728<code>constructor</code>\u4E2D\u4F7F\u7528<code>this.props</code>,\u5C31\u5FC5\u987B\u7ED9<code>super</code>\u6DFB\u52A0\u53C2\u6570 <code>super(props)</code></p></li><li><p>\u6CE8\u610F\uFF0C\u65E0\u8BBA\u6709\u6CA1\u6709 <code>constructor</code>\uFF0C\u5728render\u4E2D\u7684<code>this.props</code>\u90FD\u662F\u53EF\u4EE5\u4F7F\u7528\u7684\uFF0C\u8FD9\u662Freact\u81EA\u52A8\u9644\u5E26\u7684</p></li><li><p>\u5982\u679C\u6CA1\u6709\u7528\u5230<code>constructor</code> \u662F\u53EF\u4EE5\u4E0D\u5199\u7684\uFF0Creact\u4F1A\u9ED8\u8BA4\u6DFB\u52A0\u4E00\u4E2A\u7A7A\u7684<code>constroctor</code>.</p></li></ul>`,4);function e(o,c){return p}var l=n(a,[["render",e]]);export{l as default};
