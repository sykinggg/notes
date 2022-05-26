import{_ as n,o as e,c as s,a}from"./app.11072343.js";const c={},o=a(`<h1 id="\u7C7B\u578B\u5B88\u536B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u5B88\u536B" aria-hidden="true">#</a> \u7C7B\u578B\u5B88\u536B</h1><h2 id="\u4E3A\u4EC0\u4E48-x-instanceof-foo-\u4E0D\u80FD\u5C06-x-\u7684\u7C7B\u578B\u7F29\u5C0F\u81F3-foo" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-x-instanceof-foo-\u4E0D\u80FD\u5C06-x-\u7684\u7C7B\u578B\u7F29\u5C0F\u81F3-foo" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48 <code>x instanceof Foo</code> \u4E0D\u80FD\u5C06 <code>x</code> \u7684\u7C7B\u578B\u7F29\u5C0F\u81F3 <code>Foo</code>\uFF1F</h2><p>\u8FD9\u53D6\u51B3\u4E8E <code>x</code> \u662F\u4EC0\u4E48\uFF1F\u5982\u679C <code>x</code> \u7684\u7C7B\u578B\u4E0D\u4E0E <code>Foo</code> \u517C\u5BB9\uFF0C\u90A3\u4E48\u7F29\u5C0F <code>x</code> \u7684\u7C7B\u578B\u5C31\u6BEB\u65E0\u610F\u4E49\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u8FD9\u4E48\u505A\u3002</p><p>\u5F53\u4F60\u53D1\u73B0 <code>x</code> \u5177\u6709\u4EFB\u4F55\u7C7B\u578B\u65F6\uFF0C\u5BF9\u6B64\u63A8\u8350\u7684\u505A\u6CD5\u662F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">doIt</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Assume &#39;x&#39; is a well-known object which</span>
    <span class="token comment">// we know how to handle specifically</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Treat &#39;x&#39; as a primitive</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u5C06\u5728 TypeScript \u4E2D\u770B\u5230\u8FD9\u4E9B\u4EE3\u7801\uFF08\u5B83\u4EEC\u53EF\u80FD\u65E9\u4E8E\u8054\u5408\u7C7B\u578B\u88AB\u53D1\u73B0\uFF09\uFF0C\u6216\u8005\u662F\u4E00\u4E9B\u4ECE JavaScript \u79FB\u690D\u5230 TypeScript \u7684\u4EE3\u7801\uFF0C\u5982\u679C\u628A <code>x</code> \u7F29\u5C0F\u81F3 <code>Object</code>\uFF0C\u90A3\u4E48\u4F60\u5C06\u53EA\u80FD\u505A\u66F4\u5C11\u7684\u4E8B\u60C5\u3002\u4F7F\u7528\u4EFB\u4F55\u4E0D\u5728 <code>Object</code> \u4E2D\u7684\u5C5E\u6027\u90FD\u5C06\u5BFC\u81F4\u9519\u8BEF\u3002\u8FD9\u4E0D\u4EC5\u9002\u7528\u4E8E <code>Object</code>\uFF0C\u5BF9\u4E8E\u5177\u6709\u5DF2\u5B9A\u4E49\u5C5E\u6027\u96C6\u7684\u4EFB\u4F55\u5176\u4ED6\u7C7B\u578B\u90FD\u662F\u5982\u6B64\u3002</p>`,6),t=[o];function i(d,p){return e(),s("div",null,t)}var r=n(c,[["render",i],["__file","type-guards.html.vue"]]);export{r as default};
