import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,a as t}from"./app.92084e2a.js";var e="/notes/assets/jsInterview/jsInterviewQuestion/1657591789196.jpg";const p={},o=t(`<h1 id="\u7B2C20\u9898-e-target-\u548C-e-currenttarget-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u7B2C20\u9898-e-target-\u548C-e-currenttarget-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> \u7B2C20\u9898\uFF1Ae.target \u548C e.currentTarget \u6709\u4EC0\u4E48\u533A\u522B</h1><h2 id="\u5192\u6CE1-\u6355\u83B7" tabindex="-1"><a class="header-anchor" href="#\u5192\u6CE1-\u6355\u83B7" aria-hidden="true">#</a> \u5192\u6CE1 &amp; \u6355\u83B7</h2><p>\u5F53\u4F60\u89E6\u53D1\u4E00\u4E2A\u5143\u7D20\u7684\u4E8B\u4EF6\u7684\u65F6\u5019\uFF0C\u8BE5\u4E8B\u4EF6\u4ECE\u8BE5\u5143\u7D20\u7684\u7956\u5148\u5143\u7D20\u4F20\u9012\u4E0B\u53BB\uFF0C\u6B64\u8FC7\u7A0B\u4E3A<code>\u6355\u83B7</code>\uFF0C\u800C\u5230\u8FBE\u6B64\u5143\u7D20\u4E4B\u540E\uFF0C\u53C8\u4F1A\u5411\u5176\u7956\u5148\u5143\u7D20\u4F20\u64AD\u4E0A\u53BB\uFF0C\u6B64\u8FC7\u7A0B\u4E3A<code>\u5192\u6CE1</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u54C8\u54C8\u54C8\u54C8\u54C8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+`" alt="demo"></p><h2 id="addeventlistener" tabindex="-1"><a class="header-anchor" href="#addeventlistener" aria-hidden="true">#</a> addEventListener</h2><p><code>addEventListener</code>\u662F\u4E3A\u5143\u7D20\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u65B9\u6CD5\uFF0C\u4ED6\u63A5\u6536\u4E09\u4E2A\u53C2\u6570\uFF1A</p><ul><li><p>\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1A\u7ED1\u5B9A\u7684\u4E8B\u4EF6\u540D</p></li><li><p>\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF1A\u6267\u884C\u7684\u51FD\u6570</p></li><li><p>\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF1A</p><ul><li><p><code>false</code>\uFF1A\u9ED8\u8BA4\uFF0C\u4EE3\u8868\u5192\u6CE1\u65F6\u7ED1\u5B9A</p></li><li><p><code>true</code>\uFF1A\u4EE3\u8868\u6355\u83B7\u65F6\u7ED1\u5B9A</p></li></ul></li></ul><h2 id="target-currenttarget" tabindex="-1"><a class="header-anchor" href="#target-currenttarget" aria-hidden="true">#</a> target &amp; currentTarget</h2><h3 id="false" tabindex="-1"><a class="header-anchor" href="#false" aria-hidden="true">#</a> false</h3><p>\u6211\u4EEC\u7ED9\u56DB\u4E2Adiv\u5143\u7D20\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u4E14<code>addEventListener</code>\u7B2C\u4E09\u4E2A\u53C2\u6570\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A<code>false</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> d <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">,</span>
    currentTarget
  <span class="token punctuation">}</span> <span class="token operator">=</span> e
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">target\u662F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>target<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">currentTarget\u662F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>currentTarget<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
b<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">,</span>
    currentTarget
  <span class="token punctuation">}</span> <span class="token operator">=</span> e
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">target\u662F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>target<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">currentTarget\u662F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>currentTarget<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">,</span>
    currentTarget
  <span class="token punctuation">}</span> <span class="token operator">=</span> e
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">target\u662F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>target<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">currentTarget\u662F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>currentTarget<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
d<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">,</span>
    currentTarget
  <span class="token punctuation">}</span> <span class="token operator">=</span> e
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">target\u662F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>target<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">currentTarget\u662F</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>currentTarget<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u73B0\u5728\u6211\u4EEC\u70B9\u51FB\uFF0C\u770B\u770B\u8F93\u51FA\u7684\u4E1C\u897F\uFF0C\u53EF\u4EE5\u770B\u51FA\u89E6\u53D1\u7684\u662F<code>d</code>\uFF0C\u800C\u6267\u884C\u7684\u5143\u7D20\u662F\u5192\u6CE1\u7684\u987A\u5E8F</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>target\u662Fd currentTarget\u662Fd
target\u662Fd currentTarget\u662Fc
target\u662Fd currentTarget\u662Fb
target\u662Fd currentTarget\u662Fa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="true" tabindex="-1"><a class="header-anchor" href="#true" aria-hidden="true">#</a> true</h3><p>\u6211\u4EEC\u628A\u56DB\u4E2A\u4E8B\u4EF6\u7B2C\u4E09\u4E2A\u53C2\u6570\u90FD\u8BBE\u7F6E\u4E3A<code>true</code>\uFF0C\u6211\u4EEC\u770B\u770B\u8F93\u51FA\u7ED3\u679C\uFF0C\u53EF\u4EE5\u770B\u51FA\u89E6\u53D1\u7684\u662F<code>d</code>\uFF0C\u800C\u6267\u884C\u7684\u5143\u7D20\u662F\u6355\u83B7\u7684\u987A\u5E8F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>target\u662Fd currentTarget\u662Fa
target\u662Fd currentTarget\u662Fb
target\u662Fd currentTarget\u662Fc
target\u662Fd currentTarget\u662Fd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u533A\u522B" aria-hidden="true">#</a> \u533A\u522B</h3><ul><li><p><code>e.target</code>\uFF1A<strong>\u89E6\u53D1</strong>\u4E8B\u4EF6\u7684\u5143\u7D20</p></li><li><p><code>e.currentTarget</code>\uFF1A<strong>\u7ED1\u5B9A</strong>\u4E8B\u4EF6\u7684\u5143\u7D20</p></li></ul>`,19),c=[o];function i(l,u){return a(),s("div",null,c)}var k=n(p,[["render",i],["__file","20.html.vue"]]);export{k as default};