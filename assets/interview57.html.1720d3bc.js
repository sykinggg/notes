import{_ as n,a as s}from"./app.816e2a4d.js";const a={},p=s(`<h2 id="\u54CD\u5E94\u5F0F\u56FE\u7247\u7684\u51E0\u79CD\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u56FE\u7247\u7684\u51E0\u79CD\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> <strong>\u54CD\u5E94\u5F0F\u56FE\u7247\u7684\u51E0\u79CD\u89E3\u51B3\u65B9\u6848</strong></h2><p>\u63D0\u8D77\u54CD\u5E94\u5F0F\uFF1A \u5F39\u6027\u5E03\u5C40\uFF0C \u5F39\u6027\u56FE\u7247\uFF0C \u5A92\u4F53\u67E5\u8BE2\u3002</p><ol><li>js\u548C\u670D\u52A1\u7AEF\u63A7\u5236</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">makeImageResponsive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.cotent img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> width <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>width <span class="token operator">&lt;=</span> <span class="token number">480</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            img<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;480.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>width <span class="token operator">&lt;=</span> <span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            img<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;800.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            img<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1600.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;resize load&#39;</span><span class="token punctuation">,</span> makeImageResponsive<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol start="2"><li>srcset\u5C5E\u6027</li></ol><p>\u73B0\u5728HTML5\u4E2D\u5BF9\u4E8Eimg\u6807\u7B7E\u65B0\u589E\u4E86\u4E00\u4E2Asrcset\u5C5E\u6027\u3002 \u5C5E\u6027\u503C\u4E3A\u4EE5\u9017\u53F7\u5206\u9694\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u5B57\u7B26\u4E32\u3002\u6BCF\u4E2A\u5B57\u7B26\u4E32\u7531\u4EE5\u4E0B\u7EC4\u6210\uFF1A a. \u4E00\u4E2A\u56FE\u50CF\u7684URL\u3002 b. \u53EF\u9009\u7684\uFF0C \u7A7A\u683C\u540E\u8DDF\u4EE5\u4E0B\u7684\u5176\u4E2D\u4E00\u4E2A</p><ul><li>~ \u4E00\u4E2A\u5BBD\u5EA6\u63CF\u8FF0\u7B26\uFF0C\u540E\u9762\u7D27\u8DDF\u2019w\u2019\u7B26\u53F7\u3002</li><li>~ \u4E00\u4E2A\u50CF\u7D20\u63CF\u8FF0\u7B26\uFF0C\u540E\u9762\u7D27\u8DDF\u2019x\u2019\u7B26\u53F7\u3002</li></ul><p>\u5F53\u7136\u8FD9\u4E2A\u5C5E\u6027\u53EF\u4EE5\u914D\u5408sizes\u5C5E\u6027\u7ED3\u5408\u4F7F\u7528\u3002</p><p>sizes\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E9B\u7C7B\u4F3C\u5A92\u4F53\u67E5\u8BE2\u7684\u89C4\u5219\u3002</p><p>\u4F8B\u5982\uFF1A</p><blockquote><p>sizes=&#39;(max-width:300px) 200px, 400px&#39;</p></blockquote><p>\u8FD9\u8868\u793A\uFF0C\u5982\u679C\u6EE1\u8DB3\u5C0F\u4E8E300px\u7684\u65F6\u5019\uFF0C\u56FE\u7247\u5BBD\u5EA6\u4E3A200px\uFF0C\u5426\u5219\u5BBD\u5EA6\u4E3A400px\u3002 \u5F53\u7136\uFF0C\u8FD9\u91CC\u7528\u53EF\u4EE5\u4F7F\u7528\u2019x\u2019 \u2018calc\u2019, \u2018vw\u2019\u7B49\u7B26\u53F7\u3002</p><ol start="3"><li>picture\u5C5E\u6027\u3002</li></ol><p>\u8FD9\u4E2A\u4E5F\u662FHTML5\u7684\u65B0\u5C5E\u6027\u3002 \u53EF\u4EE5\u653E\u7F6E\u591A\u4E2Asource\u6807\u7B7E\uFF0C\u4EE5\u6307\u5B9A\u4E0D\u540C\u7684\u56FE\u50CF\u6587\u4EF6\u540D\uFF0C\u8FDB\u800C\u6839\u636E\u4E0D\u540C\u7684\u6761\u4EF6\u8FDB\u884C\u52A0\u8F7D\u3002</p><p>\u7528\u6CD5\uFF1A</p><ul><li><p>\u521B\u5EFA\u6807\u7B7E\u3002</p></li><li><p>\u91CC\u9762\u653E\u7F6E\u6807\u7B7E\u7528\u6765\u5C55\u793A\u53EF\u80FD\u7528\u5230\u7684\u56FE\u50CF</p></li><li><p>\u5BF9source\u6DFB\u52A0srcset\u5C5E\u6027\u6765\u6307\u5B9A\u56FE\u7247URL\uFF0C\u6DFB\u52A0media\u5C5E\u6027\uFF0C\u6765\u89C4\u5B9A\u5A92\u4F53\u67E5\u8BE2\u3002</p></li><li><p>\u6DFB\u52A0\u4E00\u4E2A\u56DE\u9000\u7684\u5143\u7D20</p></li></ul><p>\u8FD9\u4E2A\u4F8B\u5B50\u8868\u793A\u5728\u5927\u4E8E800px\u7684\u65F6\u5019\uFF0C\u5C55\u793Aad002-l\u8FD9\u4E2Alarge\u56FE\u7247\u3002 \u5728\u5927\u4E8E480px\u7684\u65F6\u5019\uFF0C\u5C55\u793Aad002-m\u8FD9\u4E2Amedium\u56FE\u7247\u3002 \u5426\u5219\uFF0C\u5C55\u793Aad002\u5C0F\u56FE\u7247\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>src/img/ad002-l.png<span class="token punctuation">&#39;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>(min-width: 50em)<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>src/img/ad002-m.png<span class="token punctuation">&#39;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>(min-width: 30em)<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>src/img/ad002.png<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u73B0\u5728\u5F88\u591A\u6D4F\u89C8\u5668\u5BF9\u4E8Epicture\u8FD9\u4E2A\u6807\u7B7E\u8FD8\u4E0D\u652F\u6301\uFF0C\u6240\u4EE5\u9700\u8981\u7528\u5230picturefill.js\u6765\u89E3\u51B3\u3002</p><ol start="4"><li>svg\u56FE\u7247</li></ol><p>SVG\u56FE\u7247\u4E0D\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u56FE\u50CF\uFF0C\u800C\u662F\u4E00\u4E2A\u89C4\u5219\u3002\u6240\u4EE5\u53EF\u662F\u5F88\u597D\u7684\u54CD\u5E94\u5F0F\uFF0C\u4E0D\u8FC7\u56E0\u4E3A\u6BD4\u8F83\u590D\u6742\uFF0C\u6240\u4EE5\u4E00\u822C\u90FD\u662F\u5BF9\u4E8E\u4E00\u4E9B\u7B80\u5355\u7684\u56FE\u50CF\u4F7F\u7528svg\uFF0C\u5BF9\u4E8E\u590D\u6742\uFF0C\u989C\u8272\u591A\u7684\u56FE\u7247\uFF0C\u4E0D\u91C7\u7528SVG\u3002</p><h2 id="srcset\u3001sizes\u5C5E\u6027-w\u63CF\u8FF0\u7B26" tabindex="-1"><a class="header-anchor" href="#srcset\u3001sizes\u5C5E\u6027-w\u63CF\u8FF0\u7B26" aria-hidden="true">#</a> <strong>srcset\u3001sizes\u5C5E\u6027, w\u63CF\u8FF0\u7B26</strong></h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>128px.jpg<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>128px.jpg 128w, 256px.jpg 256w, 512px.jpg 512w<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(max-width: 360px) 340px, 128px<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>128px.jpg<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>128px.jpg 128w, 256px.jpg 256w, 512px.jpg 512w<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(max-width: 360px) calc(100vw - 20px), 128px<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u63CF\u8FF0\uFF1A</p><pre><code>\u5F53\`&lt;img&gt;\`\u5143\u7D20\u7684\u5BBD\u5EA6\u89C4\u683C\u4E3A128\u7684\u65F6\u5019\uFF0C\u52A0\u8F7D128px.jpg\uFF0C\u5BBD\u5EA6\u89C4\u683C\u4E3A256\u7684\u65F6\u5019\uFF0C\u52A0\u8F7D256px.jpg\uFF0C \u5BBD\u5EA6\u89C4\u683C\u4E3A512\u7684\u65F6\u5019\uFF0C\u52A0\u8F7D512px.jpg\u3002

\u8FD9\u91CC\u7684\u5BBD\u5EA6\u89C4\u683C\u5C31\u662Fw\u63CF\u8FF0\u7B26\u7684\u53E6\u5916\u4E00\u79CD\u7406\u89E3\uFF0C\u5176\u4E0E\`sizes\`\u5C5E\u6027\u8BBE\u5B9A\u548C\u5C4F\u5E55\u5BC6\u5EA6\u5BC6\u5207\u76F8\u5173\u3002

\u4E0A\u9762\u7684&lt;img&gt;\u5143\u7D20\u8BBE\u7F6E\u7684\`sizes\`\u5C5E\u6027\u503C(max-width: 360px) 340px, 128px\u8868\u793A\u5F53\u89C6\u533A\u5BBD\u5EA6\u4E0D\u5927\u4E8E360\u50CF\u7D20\u65F6\u5019\uFF0C\u56FE\u7247\u7684\u5BBD\u5EA6\u9650\u5236\u4E3A340\u50CF\u7D20\uFF1B\u5176\u4ED6\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528128\u50CF\u7D20\u3002

\u4E0B\u9762\u7684&lt;img&gt;\u5143\u7D20\u8BBE\u7F6E\u7684\`sizes\`\u5C5E\u6027\u503C(max-width: 360px) calc(100vw - 20px), 128px\u8868\u793A\u5F53\u89C6\u533A\u5BBD\u5EA6\u4E0D\u5927\u4E8E360\u50CF\u7D20\u65F6\u5019\uFF0C\u56FE\u7247\u7684\u5BBD\u5EA6\u9650\u5236\u4E3A\u5C4F\u5E55\u5BBD\u5EA6\u51CF20\u50CF\u7D20\uFF1B\u5176\u4ED6\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528128\u50CF\u7D20\u3002
</code></pre>`,25);function t(e,c){return p}var l=n(a,[["render",t],["__file","interview57.html.vue"]]);export{l as default};
