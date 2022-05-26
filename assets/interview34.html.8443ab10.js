import{_ as n,o as s,c as a,a as t}from"./app.e9fd9ffa.js";const e={},p=t(`<h2 id="sticky-footer-\u5B8C\u7F8E\u7684\u7EDD\u5BF9\u5E95\u90E8" tabindex="-1"><a class="header-anchor" href="#sticky-footer-\u5B8C\u7F8E\u7684\u7EDD\u5BF9\u5E95\u90E8" aria-hidden="true">#</a> Sticky Footer\uFF0C\u5B8C\u7F8E\u7684\u7EDD\u5BF9\u5E95\u90E8</h2><h2 id="\u4EC0\u4E48\u662F-sticky-footer" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-sticky-footer" aria-hidden="true">#</a> \u4EC0\u4E48\u662F \u201CSticky Footer\u201D</h2><p>\u5B83\u6307\u7684\u5C31\u662F\u4E00\u79CD\u7F51\u9875\u6548\u679C\uFF1A</p><p>\u5982\u679C\u9875\u9762\u5185\u5BB9\u4E0D\u8DB3\u591F\u957F\u65F6\uFF0C\u9875\u811A\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5E95\u90E8\uFF1B\u5982\u679C\u5185\u5BB9\u8DB3\u591F\u957F\u65F6\uFF0C\u9875\u811A\u56FA\u5B9A\u5728\u9875\u9762\u7684\u6700\u5E95\u90E8\u3002 \u603B\u800C\u8A00\u4E4B\uFF0C\u5C31\u662F\u9875\u811A\u4E00\u76F4\u5904\u4E8E\u6700\u5E95\uFF0C\u6548\u679C\u5927\u81F4\u5982\u56FE\u6240\u793A\uFF1A</p><p><img src="https://misc.aotu.io/liqinuo/sticky_02.png" alt="\u56FE\u7247\u5730\u5740"></p><h1 id="html-\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#html-\u7ED3\u6784" aria-hidden="true">#</a> html \u7ED3\u6784</h1><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!-- \u9875\u9762\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF --&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!-- \u9700\u8981\u505A\u5230 Sticky Footer \u6548\u679C\u7684\u9875\u811A --&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0\u65B9\u6848\u4E00-absolute" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u6848\u4E00-absolute" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u6848\u4E00\uFF1Aabsolute</h2><p>\u901A\u8FC7\u7EDD\u5BF9\u5B9A\u4F4D\u5904\u7406\u5E94\u8BE5\u662F\u5E38\u89C1\u7684\u65B9\u6848\uFF0C\u53EA\u8981\u4F7F\u5F97\u9875\u811A\u4E00\u76F4\u5B9A\u4F4D\u5728\u4E3B\u5BB9\u5668\u9884\u7559\u5360\u4F4D\u4F4D\u7F6E\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html, body</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">min-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.footer</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65B9\u6848\u9700\u6307\u5B9A html\u3001body 100% \u7684\u9AD8\u5EA6\uFF0C\u4E14 content \u7684 padding-bottom \u9700\u8981\u4E0E footer \u7684 height \u4E00\u81F4\u3002</p><h2 id="\u5B9E\u73B0\u65B9\u6848\u4E8C-calc" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u6848\u4E8C-calc" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u6848\u4E8C\uFF1Acalc</h2><p>\u901A\u8FC7\u8BA1\u7B97\u51FD\u6570 calc \u8BA1\u7B97\uFF08\u89C6\u7A97\u9AD8\u5EA6 - \u9875\u811A\u9AD8\u5EA6\uFF09\u8D4B\u4E88\u5185\u5BB9\u533A\u6700\u5C0F\u9AD8\u5EA6\uFF0C\u4E0D\u9700\u8981\u4EFB\u4F55\u989D\u5916\u6837\u5F0F\u5904\u7406\uFF0C\u4EE3\u7801\u91CF\u6700\u5C11\u3001\u6700\u7B80\u5355\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">min-height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.footer</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u9700\u8003\u8651 calc() \u4EE5\u53CA vh \u5355\u4F4D\u7684\u517C\u5BB9\u60C5\u51B5\uFF0C\u8FD9\u662F\u4E2A\u5F88\u7406\u60F3\u7684\u5B9E\u73B0\u65B9\u6848\u3002</p><p>\u540C\u6837\u7684\u95EE\u9898\u662F footer \u7684\u9AD8\u5EA6\u503C\u9700\u8981\u4E0E content \u5176\u4E2D\u7684\u8BA1\u7B97\u503C\u4E00\u81F4\u3002</p><h2 id="\u5B9E\u73B0\u65B9\u6848\u4E09-table" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u6848\u4E09-table" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u6848\u4E09\uFF1Atable</h2><p>\u901A\u8FC7 table \u5C5E\u6027\u4F7F\u5F97\u9875\u9762\u4EE5\u8868\u683C\u7684\u5F62\u6001\u5448\u73B0</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html, body</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">min-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table-row<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 table \u65B9\u6848\u5B58\u5728\u4E00\u4E2A\u6BD4\u8F83\u5E38\u89C1\u7684\u6837\u5F0F\u9650\u5236\uFF0C\u901A\u5E38 margin\u3001padding\u3001border \u7B49\u5C5E\u6027\u4F1A\u4E0D\u7B26\u5408\u9884\u671F</p><h2 id="\u5B9E\u73B0\u65B9\u6848\u56DB-flexbox" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u6848\u56DB-flexbox" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u6848\u56DB\uFF1AFlexbox</h2><p>Flexbox \u662F\u975E\u5E38\u9002\u5408\u5B9E\u73B0\u8FD9\u79CD\u6548\u679C\u7684\uFF0C\u4F7F\u7528 Flexbox \u5B9E\u73B0\u4E0D\u4EC5\u4E0D\u9700\u8981\u4EFB\u4F55\u989D\u5916\u7684\u5143\u7D20\uFF0C\u800C\u4E14\u5141\u8BB8\u9875\u811A\u7684\u9AD8\u5EA6\u662F\u53EF\u53D8\u7684\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">min-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),c=[p];function o(i,l){return s(),a("div",null,c)}var r=n(e,[["render",o],["__file","interview34.html.vue"]]);export{r as default};
