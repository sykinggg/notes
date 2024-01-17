import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.92084e2a.js";const t={},p=e(`<h1 id="\u7B2C81\u9898-\u3010promise\u3011\u4E0B\u9762\u4EE3\u7801\u7684\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u7B2C81\u9898-\u3010promise\u3011\u4E0B\u9762\u4EE3\u7801\u7684\u8F93\u51FA" aria-hidden="true">#</a> \u7B2C81\u9898\uFF1A\u3010Promise\u3011\u4E0B\u9762\u4EE3\u7801\u7684\u8F93\u51FA</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;err!!!&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;catch&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790" aria-hidden="true">#</a> \u89E3\u6790</h2><p><code>.then</code>\u51FD\u6570\u4E2D\u7684\u4E24\u4E2A\u53C2\u6570\u3002</p><p>\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u7528\u6765\u5904\u7406<code>Promise</code>\u6210\u529F\u7684\u51FD\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u5219\u662F\u5904\u7406\u5931\u8D25\u7684\u51FD\u6570\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4<code>Promise.resolve(&#39;1&#39;)</code>\u7684\u503C\u4F1A\u8FDB\u5165\u6210\u529F\u7684\u51FD\u6570\uFF0C<code>Promise.reject(&#39;2&#39;)</code>\u7684\u503C\u4F1A\u8FDB\u5165\u5931\u8D25\u7684\u51FD\u6570\u3002</p><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;error&#39; &#39;error!!!&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),c=[p];function o(i,r){return s(),a("div",null,c)}var d=n(t,[["render",o],["__file","73.html.vue"]]);export{d as default};