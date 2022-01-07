import{o as t,c as p,a as n,F as e,e as a}from"./app.f4829677.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const o={},r=a(`<h1 id="css-\u5355\u4F4D" tabindex="-1"><a class="header-anchor" href="#css-\u5355\u4F4D" aria-hidden="true">#</a> Css \u5355\u4F4D</h1><p>CSS \u6709\u51E0\u79CD\u8868\u793A\u957F\u5EA6\u7684\u4E0D\u540C\u5355\u4F4D\u3002</p><p>\u8BB8\u591A CSS \u5C5E\u6027\u63A5\u53D7\u201C\u957F\u5EA6\u201D\u503C\uFF0C\u8BF8\u5982 <code>width</code>\u3001<code>margin</code>\u3001<code>padding</code>\u3001<code>font-size</code> \u7B49\u3002</p><p>\u957F\u5EA6\u662F\u4E00\u4E2A\u540E\u9762\u8DDF\u7740\u957F\u5EA6\u5355\u4F4D\u7684\u6570\u5B57\uFF0C\u8BF8\u5982 <code>10px</code>\u3001<code>2em</code> \u7B49\u3002</p><p><strong>\u5B9E\u4F8B</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6570\u5B57\u548C\u5355\u4F4D\u4E4B\u95F4\u4E0D\u80FD\u51FA\u73B0\u7A7A\u683C\u3002\u4F46\u662F\uFF0C\u5982\u679C\u503C\u4E3A 0\uFF0C\u5219\u53EF\u4EE5\u7701\u7565\u5355\u4F4D\u3002</p><p>\u5BF9\u4E8E\u67D0\u4E9B CSS \u5C5E\u6027\uFF0C\u5141\u8BB8\u4F7F\u7528\u8D1F\u7684\u957F\u5EA6\u3002</p><h2 id="\u957F\u5EA6\u5355\u4F4D\u6709\u4E24\u79CD\u7C7B\u578B-\u7EDD\u5BF9\u5355\u4F4D\u548C\u76F8\u5BF9\u5355\u4F4D\u3002" tabindex="-1"><a class="header-anchor" href="#\u957F\u5EA6\u5355\u4F4D\u6709\u4E24\u79CD\u7C7B\u578B-\u7EDD\u5BF9\u5355\u4F4D\u548C\u76F8\u5BF9\u5355\u4F4D\u3002" aria-hidden="true">#</a> \u957F\u5EA6\u5355\u4F4D\u6709\u4E24\u79CD\u7C7B\u578B\uFF1A<strong>\u7EDD\u5BF9\u5355\u4F4D</strong>\u548C<strong>\u76F8\u5BF9\u5355\u4F4D</strong>\u3002</h2><h2 id="\u7EDD\u5BF9\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u7EDD\u5BF9\u957F\u5EA6" aria-hidden="true">#</a> \u7EDD\u5BF9\u957F\u5EA6</h2><p>\u7EDD\u5BF9\u957F\u5EA6\u5355\u4F4D\u662F\u56FA\u5B9A\u7684\uFF0C\u7528\u4EFB\u4F55\u4E00\u4E2A\u7EDD\u5BF9\u957F\u5EA6\u8868\u793A\u7684\u957F\u5EA6\u90FD\u5C06\u6070\u597D\u663E\u793A\u4E3A\u8FD9\u4E2A\u5C3A\u5BF8\u3002</p><p>\u4E0D\u5EFA\u8BAE\u5728\u5C4F\u5E55\u4E0A\u4F7F\u7528\u7EDD\u5BF9\u957F\u5EA6\u5355\u4F4D\uFF0C\u56E0\u4E3A\u5C4F\u5E55\u5C3A\u5BF8\u53D8\u5316\u5F88\u5927\u3002\u4F46\u662F\uFF0C\u5982\u679C\u5DF2\u77E5\u8F93\u51FA\u4ECB\u8D28\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u5B83\u4EEC\uFF0C\u4F8B\u5982\u7528\u4E8E\u6253\u5370\u5E03\u5C40\uFF08print layout\uFF09\u3002</p><table><thead><tr><th>\u5355\u4F4D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>cm</td><td>\u5398\u7C73</td></tr><tr><td>mm</td><td>\u6BEB\u7C73</td></tr><tr><td>in</td><td>\u82F1\u5BF8 (1in = 96px = 2.54cm)</td></tr><tr><td>px *</td><td>\u50CF\u7D20 (1px = 1/96th of 1in)</td></tr><tr><td>pt</td><td>\u70B9 (1pt = 1/72 of 1in)</td></tr><tr><td>pc</td><td>\u6D3E\u5361 (1pc = 12 pt)</td></tr></tbody></table><ul><li>\u50CF\u7D20\uFF08px\uFF09\u662F\u76F8\u5BF9\u4E8E\u89C2\u770B\u8BBE\u5907\u7684\u3002\u5BF9\u4E8E\u4F4E dpi \u7684\u8BBE\u5907\uFF0C1px \u662F\u663E\u793A\u5668\u7684\u4E00\u4E2A\u8BBE\u5907\u50CF\u7D20\uFF08\u70B9\uFF09\u3002\u5BF9\u4E8E\u6253\u5370\u673A\u548C\u9AD8\u5206\u8FA8\u7387\u5C4F\u5E55\uFF0C1px \u8868\u793A\u591A\u4E2A\u8BBE\u5907\u50CF\u7D20\u3002</li></ul><hr><h2 id="\u76F8\u5BF9\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5BF9\u957F\u5EA6" aria-hidden="true">#</a> \u76F8\u5BF9\u957F\u5EA6</h2><p>\u76F8\u5BF9\u957F\u5EA6\u5355\u4F4D\u89C4\u5B9A\u76F8\u5BF9\u4E8E\u53E6\u4E00\u4E2A\u957F\u5EA6\u5C5E\u6027\u7684\u957F\u5EA6\u3002\u76F8\u5BF9\u957F\u5EA6\u5355\u4F4D\u5728\u4E0D\u540C\u6E32\u67D3\u4ECB\u8D28\u4E4B\u95F4\u7F29\u653E\u8868\u73B0\u5F97\u66F4\u597D\u3002</p><table><thead><tr><th>\u5355\u4F4D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>em</td><td>\u76F8\u5BF9\u4E8E\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\uFF08font-size\uFF09\uFF082em \u8868\u793A\u5F53\u524D\u5B57\u4F53\u5927\u5C0F\u7684 2 \u500D\uFF09</td></tr><tr><td>ex</td><td>\u76F8\u5BF9\u4E8E\u5F53\u524D\u5B57\u4F53\u7684 x-height(\u6781\u5C11\u4F7F\u7528)</td></tr><tr><td>ch</td><td>\u76F8\u5BF9\u4E8E &quot;0&quot;\uFF08\u96F6\uFF09\u7684\u5BBD\u5EA6</td></tr><tr><td>rem</td><td>\u76F8\u5BF9\u4E8E\u6839\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\uFF08font-size\uFF09</td></tr><tr><td>vw</td><td>\u76F8\u5BF9\u4E8E\u89C6\u53E3*\u5BBD\u5EA6\u7684 1%</td></tr><tr><td>vh</td><td>\u76F8\u5BF9\u4E8E\u89C6\u53E3*\u9AD8\u5EA6\u7684 1%</td></tr><tr><td>vmin</td><td>\u76F8\u5BF9\u4E8E\u89C6\u53E3*\u8F83\u5C0F\u5C3A\u5BF8\u7684 1\uFF05</td></tr><tr><td>vmax</td><td>\u76F8\u5BF9\u4E8E\u89C6\u53E3*\u8F83\u5927\u5C3A\u5BF8\u7684 1\uFF05</td></tr><tr><td>%</td><td>\u76F8\u5BF9\u4E8E\u7236\u5143\u7D20</td></tr></tbody></table><blockquote><p><strong>\u63D0\u793A</strong>\uFF1Aem \u548C rem \u5355\u5143\u53EF\u7528\u4E8E\u521B\u5EFA\u5B8C\u7F8E\u7684\u53EF\u6269\u5C55\u5E03\u5C40\uFF01</p><ul><li>\u89C6\u53E3\uFF08Viewport\uFF09= \u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5C3A\u5BF8\u3002\u5982\u679C\u89C6\u53E3\u5BBD 50 \u91CC\u9762\uFF0C\u5219 1vw = 0.5cm\u3002</li></ul></blockquote><h2 id="\u6D4F\u89C8\u5668\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u652F\u6301" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u652F\u6301</h2>`,20),l=["src"],i=a(`<blockquote><p><strong>\u62D3\u5C55\u95EE\u9898</strong>\uFF1A <strong>fr</strong>\uFF1A\u5269\u4F59\u7A7A\u95F4\u5206\u914D\u6570 fr\u5355\u4F4D\u88AB\u7528\u4E8E\u5728\u4E00\u7CFB\u5217\u957F\u5EA6\u503C\u4E2D\u5206\u914D\u5269\u4F59\u7A7A\u95F4\uFF0C\u5982\u679C\u591A\u4E2A\u5DF2\u6307\u5B9A\u4E86\u591A\u4E2A\u90E8\u5206\uFF0C\u5219\u5269\u4E0B\u7684\u7A7A\u95F4\u6839\u636E\u5404\u81EA\u7684\u6570\u5B57\u6309\u6BD4\u4F8B\u5206\u914D\u3002</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">border-parts</span><span class="token punctuation">:</span>10px 1fr 10px<span class="token punctuation">;</span>
<span class="token property">border-parts</span><span class="token punctuation">:</span>10px 1fr 10px 1fr 10px<span class="token punctuation">;</span>
<span class="token property">border-parts</span><span class="token punctuation">:</span>10px 2fr 10px 2fr 10px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><strong>\u62D3\u5C55\u95EE\u9898</strong>\uFF1A <strong>gr</strong>\uFF1A\u7F51\u683C\u6570 gr\u5355\u4F4D\u88AB\u7528\u4E8E\u5728\u4E00\u7CFB\u5217\u957F\u5EA6\u503C\u4E2D\u7F51\u683C\u6570\uFF0C\u5982\u679C\u591A\u4E2A\u5DF2\u6307\u5B9A\u4E86\u591A\u4E2A\u90E8\u5206\uFF0C\u7F51\u683C\u7A7A\u95F4\u6839\u636E\u5404\u81EA\u7684\u6570\u5B57\u6309\u6BD4\u4F8B\u5206\u914D\u3002</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">img</span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span>top left multicol<span class="token punctuation">;</span>
  <span class="token property">float-offset</span><span class="token punctuation">:</span>2gr<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>1gr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u6309\u9700\u5B9A\u5236" tabindex="-1"><a class="header-anchor" href="#\u6309\u9700\u5B9A\u5236" aria-hidden="true">#</a> \u6309\u9700\u5B9A\u5236</h2><hr><p><code>CSS Grid</code> \u5173\u952E \u7684\u5730\u65B9\u662F <code>grid-gap</code> \u53EA\u5728\u9700\u8981\u7684\u65F6\u5019\u624D\u4F1A\u88AB\u5E94\u7528\u3002</p>`,7),u=["src"],d=a(`<blockquote><p>\u6CA1\u6709CSS\u7F51\u683C\uFF0C\u5C31\u4E0D\u53EF\u80FD\u62E5\u6709\u8FD9\u79CD\u7075\u6D3B\u6027</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.card:not(:last-child)</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span>700px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.card:not(:last-child)</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>\u4F18\u5316</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.card-wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr<span class="token punctuation">;</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span>700px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.card-wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u5904\u7406\u5E95\u90E8margin" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u5E95\u90E8margin" aria-hidden="true">#</a> \u5904\u7406\u5E95\u90E8margin</h2><hr><blockquote><p>\u5047\u8BBE\u4EE5\u4E0B\u7EC4\u4EF6\u5806\u53E0\u5728\u4E00\u8D77\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\u5E95\u8FB9\u8DDD\u3002</p></blockquote>`,7),b=["src"],m=a(`<p>\u6CE8\u610F\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u6709\u4E00\u4E2A\u7A7A\u767D\uFF0C\u8FD9\u662F\u4E0D\u6B63\u786E\u7684\uFF0C\u56E0\u4E3A\u8FB9\u8DDD\u53EA\u80FD\u5728\u5143\u7D20\u4E4B\u95F4\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u89E3\u51B3\u65B9\u6848\u4E4B\u4E00\u89E3\u51B3\u6B64\u95EE\u9898\uFF1A</p><p><strong>\u89E3\u51B3\u65B9\u68481-CSS <code>:not</code> \u9009\u62E9\u5668</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.element:not(:last-child)</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>\u89E3\u51B3\u65B9\u68482\uFF1A\u76F8\u90BB\u5144\u5F1F\u7EC4\u5408\u5668</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.element + .element</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u867D\u7136\u89E3\u51B3\u65B9\u68481\u5177\u6709\u5438\u5F15\u529B\uFF0C\u4F46\u5B83\u5177\u6709\u4EE5\u4E0B\u7F3A\u70B9\uFF1A</p><ul><li><p>\u5B83\u4F1A\u5BFC\u81F4CSS\u7684\u7279\u5F02\u6027\u95EE\u9898\u3002\u5728\u4F7F\u7528 <code>:not</code> \u9009\u62E9\u5668\u4E4B\u524D\u4E0D\u53EF\u80FD\u8986\u76D6\u5B83\u3002</p></li><li><p>\u4E07\u4E00\u8BBE\u8BA1\u4E2D\u6709\u4E0D\u6B62\u4E00\u5217\uFF0C\u5B83\u5C06\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u3002\u53C2\u89C1\u4E0B\u56FE\u3002</p></li></ul>`,8),k=["src"];function h(s,g){return t(),p(e,null,[r,n("img",{src:s.$withBase("/assets/css/1616469359(1).jpg"),alt:"demo"},null,8,l),i,n("img",{src:s.$withBase("/assets/css/1591002715973015.jpg"),alt:"demo"},null,8,u),d,n("img",{src:s.$withBase("/assets/css/1591002732984697.jpg"),alt:"demo"},null,8,b),m,n("img",{src:s.$withBase("/assets/css/1591002770894622.jpg"),alt:"demo"},null,8,k)],64)}var v=c(o,[["render",h]]);export{v as default};
