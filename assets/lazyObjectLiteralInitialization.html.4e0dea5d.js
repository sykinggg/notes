import{_ as n,a as s}from"./app.41ff10d5.js";const a={},p=s(`<h1 id="\u5BF9\u8C61\u5B57\u9762\u91CF\u7684\u60F0\u6027\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u5B57\u9762\u91CF\u7684\u60F0\u6027\u521D\u59CB\u5316" aria-hidden="true">#</a> \u5BF9\u8C61\u5B57\u9762\u91CF\u7684\u60F0\u6027\u521D\u59CB\u5316</h1><p>\u5728 JavaScript \u4E2D\uFF0C\u50CF\u8FD9\u6837\u7528\u5B57\u9762\u91CF\u521D\u59CB\u5316\u5BF9\u8C61\u7684\u5199\u6CD5\u5341\u5206\u5E38\u89C1\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bas <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F46\u5728 TypeScript \u4E2D\uFF0C\u540C\u6837\u7684\u5199\u6CD5\u5C31\u4F1A\u62A5\u9519\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// Error: Property &#39;bar&#39; does not exist on type &#39;{}&#39;</span>
foo<span class="token punctuation">.</span>bas <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error: Property &#39;bas&#39; does not exist on type &#39;{}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u662F\u56E0\u4E3A TypeScript \u5728\u89E3\u6790 <code>let foo = {}</code> \u8FD9\u6BB5\u8D4B\u503C\u8BED\u53E5\u65F6\uFF0C\u4F1A\u8FDB\u884C\u201C\u7C7B\u578B\u63A8\u65AD\u201D\uFF1A\u5B83\u4F1A\u8BA4\u4E3A\u7B49\u53F7\u5DE6\u8FB9 <code>foo</code> \u7684\u7C7B\u578B\u5373\u4E3A\u7B49\u53F7\u53F3\u8FB9 <code>{}</code> \u7684\u7C7B\u578B\u3002\u7531\u4E8E <code>{}</code> \u672C\u6CA1\u6709\u4EFB\u4F55\u5C5E\u6027\uFF0C\u56E0\u6B64\uFF0C\u50CF\u4E0A\u9762\u90A3\u6837\u7ED9 <code>foo</code> \u6DFB\u52A0\u5C5E\u6027\u65F6\u5C31\u4F1A\u62A5\u9519\u3002</p><h2 id="\u6700\u597D\u7684\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u6700\u597D\u7684\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u6700\u597D\u7684\u89E3\u51B3\u65B9\u6848</h2><p>\u6700<em>\u597D</em>\u7684\u89E3\u51B3\u65B9\u6848\u5C31\u662F\u5728\u4E3A\u53D8\u91CF\u8D4B\u503C\u7684\u540C\u65F6\uFF0C\u6DFB\u52A0\u5C5E\u6027\u53CA\u5176\u5BF9\u5E94\u7684\u503C\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  bas<span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD9\u79CD\u5199\u6CD5\u4E5F\u6BD4\u8F83\u5BB9\u6613\u901A\u8FC7\u5176\u4ED6\u4EBA\u6216\u5DE5\u5177\u7684\u4EE3\u7801\u5BA1\u6838\uFF0C\u5BF9\u540E\u671F\u7EF4\u62A4\u4E5F\u662F\u6709\u5229\u7684\u3002</p><blockquote><p>\u4EE5\u4E0B\u7684\u5FEB\u901F\u89E3\u51B3\u65B9\u6848\u91C7\u7528<em>\u60F0\u6027</em>\u7684\u601D\u8DEF\uFF0C\u672C\u8D28\u4E0A\u662F<em>\u5728\u521D\u59CB\u5316\u53D8\u91CF\u65F6\u5FD8\u4E86\u6DFB\u52A0\u5C5E\u6027</em>\u7684\u505A\u6CD5\u3002</p></blockquote><h2 id="\u5FEB\u901F\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u5FEB\u901F\u89E3\u51B3\u65B9\u6848</h2><p>\u5982\u679C\u4F60\u7684 JavaScript \u9879\u76EE\u5F88\u5927\uFF0C\u90A3\u4E48\u5728\u8FC1\u79FB\u5230 TypeScript \u7684\u65F6\u5019\uFF0C\u4E0A\u9762\u7684\u505A\u6CD5\u53EF\u80FD\u4F1A\u6BD4\u8F83\u9EBB\u70E6\u3002\u6B64\u65F6\uFF0C\u4F60\u53EF\u4EE5\u5229\u7528 TypeScript \u7684\u201C\u7C7B\u578B\u65AD\u8A00\u201D\u673A\u5236\u8BA9\u4EE3\u7801\u987A\u5229\u901A\u8FC7\u7F16\u8BD1\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bas <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u6298\u4E2D\u7684\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u6298\u4E2D\u7684\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u6298\u4E2D\u7684\u89E3\u51B3\u65B9\u6848</h2><p>\u5F53\u7136\uFF0C\u603B\u662F\u7528 <code>any</code> \u80AF\u5B9A\u662F\u4E0D\u597D\u7684\uFF0C\u56E0\u4E3A\u8FD9\u6837\u505A\u5176\u5B9E\u662F\u5728\u60F3\u529E\u6CD5\u7ED5\u5F00 TypeScript \u7684\u7C7B\u578B\u68C0\u67E5\u3002\u90A3\u4E48\uFF0C\u6298\u4E2D\u7684\u65B9\u6848\u5C31\u662F\u521B\u5EFA <code>interface</code>\uFF0C\u8FD9\u6837\u7684\u597D\u5904\u5728\u4E8E\uFF1A</p><ul><li>\u65B9\u4FBF\u64B0\u5199\u7C7B\u578B\u6587\u6863</li><li>TypeScript \u4F1A\u53C2\u4E0E\u7C7B\u578B\u68C0\u67E5\uFF0C\u786E\u4FDD\u7C7B\u578B\u5B89\u5168</li></ul><p>\u8BF7\u770B\u4EE5\u4E0B\u7684\u793A\u4F8B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  bas<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> Foo<span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bas <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4F7F\u7528 <code>interface</code> \u53EF\u4EE5\u786E\u4FDD\u7C7B\u578B\u5B89\u5168\uFF0C\u6BD4\u5982\u8FD9\u79CD\u60C5\u51B5\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  bas<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> Foo<span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bas <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u7136\u540E\u5C1D\u8BD5\u8FD9\u6837\u505A\uFF1A</span>
foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token string">&#39;Hello Stranger&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u9519\u8BEF\uFF1A\u4F60\u53EF\u80FD\u628A \`bas\` \u5199\u6210\u4E86 \`bar\`\uFF0C\u4E0D\u80FD\u4E3A\u6570\u5B57\u7C7B\u578B\u7684\u5C5E\u6027\u8D4B\u503C\u5B57\u7B26\u4E32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,21);function e(t,o){return p}var l=n(a,[["render",e],["__file","lazyObjectLiteralInitialization.html.vue"]]);export{l as default};
