import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.92084e2a.js";const p={},e=t(`<h1 id="\u7B2C76\u9898-\u3010promise\u3011\u4E0B\u9762\u4EE3\u7801\u7684\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u7B2C76\u9898-\u3010promise\u3011\u4E0B\u9762\u4EE3\u7801\u7684\u8F93\u51FA" aria-hidden="true">#</a> \u7B2C76\u9898\uFF1A\u3010Promise\u3011\u4E0B\u9762\u4EE3\u7801\u7684\u8F93\u51FA</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">runAsync</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">r</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">r</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> p
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">runReject</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span> rej</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">rej</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Error: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> p
<span class="token punctuation">}</span>
Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">runAsync</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">runReject</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">runAsync</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">runReject</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790" aria-hidden="true">#</a> \u89E3\u6790</h2><p><code>.catch</code>\u662F\u4F1A\u6355\u83B7\u6700\u5148\u7684\u90A3\u4E2A\u5F02\u5E38\uFF0C\u5728\u8FD9\u9053\u9898\u76EE\u4E2D\u6700\u5148\u7684\u5F02\u5E38\u5C31\u662F<code>runReject(2)</code>\u7684\u7ED3\u679C\u3002</p><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 1s\u540E\u8F93\u51FA
1
3
// 2s\u540E\u8F93\u51FA
2
Error: 2
// 4s\u540E\u8F93\u51FA
4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[e];function c(u,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","68.html.vue"]]);export{k as default};