import{_ as n,a as s}from"./app.dce02100.js";const a={},p=s(`<h1 id="\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u547D\u540D\u7A7A\u95F4</h1><p>\u5728 JavaScript \u4F7F\u7528\u547D\u540D\u7A7A\u95F4\u65F6\uFF0C \u8FD9\u6709\u4E00\u4E2A\u5E38\u7528\u7684\u3001\u65B9\u4FBF\u7684\u8BED\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">something</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  something<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>something <span class="token operator">||</span> <span class="token punctuation">(</span>something <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>something || (something = {})</code> \u5141\u8BB8\u533F\u540D\u51FD\u6570 <code>function (something) {}</code> \u5411\u73B0\u6709\u5BF9\u8C61\u6DFB\u52A0\u5185\u5BB9\uFF0C\u6216\u8005\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u7136\u540E\u5411\u8BE5\u5BF9\u8C61\u6DFB\u52A0\u5185\u5BB9\u3002\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u62E5\u6709\u4E24\u4E2A\u7531\u67D0\u4E9B\u8FB9\u754C\u62C6\u6210\u7684\u5757\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">something</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  something<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>something <span class="token operator">||</span> <span class="token punctuation">(</span>something <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>something<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// { foo: 123 }</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">something</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  something<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>something <span class="token operator">||</span> <span class="token punctuation">(</span>something <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>something<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { foo: 123, bar: 456 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5728\u786E\u4FDD\u521B\u5EFA\u7684\u53D8\u91CF\u4E0D\u4F1A\u6CC4\u6F0F\u81F3\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u65F6\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5728 JavaScript \u4E2D\u5F88\u5E38\u89C1\u3002\u5F53\u57FA\u4E8E\u6587\u4EF6\u6A21\u5757\u4F7F\u7528\u65F6\uFF0C\u4F60\u65E0\u987B\u62C5\u5FC3\u8FD9\u70B9\uFF0C\u4F46\u662F\u8BE5\u6A21\u5F0F\u4ECD\u7136\u9002\u7528\u4E8E\u4E00\u7EC4\u51FD\u6570\u7684\u903B\u8F91\u5206\u7EC4\u3002\u56E0\u6B64 TypeScript \u63D0\u4F9B\u4E86 <code>namespace</code> \u5173\u952E\u5B57\u6765\u63CF\u8FF0\u8FD9\u79CD\u5206\u7EC4\uFF0C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">namespace</span> Utility <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// usage</span>
Utility<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Call me&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Utility<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;maybe&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>namespace</code> \u5173\u952E\u5B57\u7F16\u8BD1\u540E\u7684 JavaScript \u4EE3\u7801\uFF0C\u4E0E\u65E9\u4E9B\u65F6\u5019\u770B\u5230\u7684 JavaScript \u4EE3\u7801\u4E00\u6837\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Utility</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6DFB\u52A0\u5C5E\u6027\u81F3 Utility</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Utility <span class="token operator">||</span> Utility <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u503C\u5F97\u6CE8\u610F\u7684\u4E00\u70B9\u662F\uFF0C\u547D\u540D\u7A7A\u95F4\u662F\u652F\u6301\u5D4C\u5957\u7684\u3002\u56E0\u6B64\uFF0C\u4F60\u53EF\u4EE5\u505A\u4E00\u4E9B\u7C7B\u4F3C\u4E8E\u5728 <code>Utility</code> \u547D\u540D\u7A7A\u95F4\u4E0B\u5D4C\u5957\u4E00\u4E2A\u547D\u540D\u7A7A\u95F4 <code>Messaging</code> \u7684\u4E8B\u60C5\u3002</p><p>\u5BF9\u4E8E\u5927\u591A\u6570\u9879\u76EE\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u5916\u90E8\u6A21\u5757\u548C\u547D\u540D\u7A7A\u95F4\uFF0C\u6765\u5FEB\u901F\u6F14\u793A\u548C\u79FB\u690D\u65E7\u7684 JavaScript \u4EE3\u7801\u3002</p>`,11);function t(e,o){return p}var u=n(a,[["render",t],["__file","namespaces.html.vue"]]);export{u as default};
