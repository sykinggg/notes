import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,a as t}from"./app.47155ff2.js";const e={},o=t(`<h1 id="\u7B2C50\u9898-canvas\u4E2D\u83B7\u53D6\u8DE8\u57DF\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u7B2C50\u9898-canvas\u4E2D\u83B7\u53D6\u8DE8\u57DF\u56FE\u7247" aria-hidden="true">#</a> \u7B2C50\u9898\uFF1Acanvas\u4E2D\u83B7\u53D6\u8DE8\u57DF\u56FE\u7247</h1><h2 id="\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a> \u80CC\u666F</h2><p>\u5728\u4E00\u5F20\u56FE\u7247\u6DFB\u52A0\u76F8\u5173\u6587\u5B57\uFF0C\u7136\u540E\u8F6C\u5316\u4E3A<code>base64</code>\u6570\u636E\uFF0C\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\u3002\u5F53\u4EE3\u7801\u4E0A\u7EBF\u5199\u5B8C\u90E8\u7F72\u5230\u6D4B\u8BD5\u73AF\u5883\uFF0C\u63A7\u5236\u53F0\u62A5\u51FA\u5982\u4E0B\u9519\u9898\uFF1A</p><p><code>Uncaught (in promise) DOMException: Failed to execute &#39;toDataURL&#39; on &#39;HTMLCanvasElement&#39;: Tainted canvases may not be exported</code></p><p>\u8FD9\u662F\u56E0\u4E3A\u9875\u9762\u5728\u8BF7\u6C42\u56FE\u7247\u65F6\u4EA7\u751F\u8DE8\u57DF\u60C5\u51B5\uFF0C<code>canvas</code>\u8BA4\u4E3A\u8BE5\u56FE\u7247\u6570\u636E\u4E3A\u6C61\u67D3\u7684\u6570\u636E\uFF0C\u662F\u4E0D\u5B89\u5168\u7684\u6570\u636E\uFF0C\u65E0\u6CD5\u5BFC\u51FA<code>base64</code>\u6570\u636E\u3002</p><h2 id="\u4E3A\u4EC0\u4E48-canvas-\u8BA4\u4E3A\u8DE8\u57DF\u56FE\u7247\u6570\u636E\u4E3A-\u6C61\u67D3\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-canvas-\u8BA4\u4E3A\u8DE8\u57DF\u56FE\u7247\u6570\u636E\u4E3A-\u6C61\u67D3\u7684\u6570\u636E" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48 canvas \u8BA4\u4E3A\u8DE8\u57DF\u56FE\u7247\u6570\u636E\u4E3A \u6C61\u67D3\u7684\u6570\u636E</h2><p>\u5F53\u8BF7\u6C42\u8DE8\u57DF\u56FE\u7247\u6570\u636E\uFF0C\u800C\u672A\u6EE1\u8DB3\u8DE8\u57DF\u8BF7\u6C42\u8D44\u6E90\u7684\u6761\u4EF6\u65F6\u3002\u5982\u679C<code>canvas</code>\u4F7F\u7528\u672A\u7ECF\u8DE8\u57DF\u5141\u8BB8\u7684\u56FE\u7247\u7684\u539F\u59CB\u6570\u636E\uFF0C\u8FD9\u4E9B\u662F\u4E0D\u53EF\u4FE1\u7684\u6570\u636E\uFF0C\u53EF\u80FD\u4F1A\u66B4\u9732\u9875\u9762\u7684\u6570\u636E\u3002</p><h3 id="\u8BF7\u6C42\u56FE\u7247\u8D44\u6E90-\u540C\u57DF" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u56FE\u7247\u8D44\u6E90-\u540C\u57DF" aria-hidden="true">#</a> \u8BF7\u6C42\u56FE\u7247\u8D44\u6E90 - \u540C\u57DF</h3><p><code>Request Headers</code>\u5E26\u6709<code>cookie</code>\u3002\u56FE\u7247\u6570\u636E\u662F\u88AB<code>canvas</code>\u4FE1\u4EFB\u7684\u3002</p><h3 id="\u8BF7\u6C42\u56FE\u7247\u8D44\u6E90-\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u56FE\u7247\u8D44\u6E90-\u8DE8\u57DF" aria-hidden="true">#</a> \u8BF7\u6C42\u56FE\u7247\u8D44\u6E90 - \u8DE8\u57DF</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u76F4\u63A5\u8BF7\u6C42\u8DE8\u57DF\u56FE\u7247\u3002\u56E0\u4E3A\u4E0D\u7B26\u5408\u8DE8\u57DF\u8BF7\u6C42\u8D44\u6E90\u7684\u6761\u4EF6\uFF0C\u56FE\u7247\u6570\u636E\u662F\u4E0D\u88AB<code>canvas</code>\u4FE1\u4EFB\u7684\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u56FE\u7247\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\u7684\u95EE\u9898\uFF0C <code>&lt;img&gt;</code> \u5143\u7D20\u63D0\u4F9B\u4E86\u652F\u6301\u7684\u5C5E\u6027\uFF1A<code>crossOrigin</code>\uFF0C\u8BE5\u5C5E\u6027\u4E00\u5171\u6709\u4E24\u4E2A\u503C\u53EF\u9009\uFF1A<code>anonymous</code> \u548C <code>use-credentials</code>\uFF0C\u4E0B\u9762\u5217\u4E3E\u4E86\u4E24\u8005\u7684\u4F7F\u7528\u573A\u666F\uFF0C\u4EE5\u53CA\u6EE1\u8DB3\u7684\u6761\u4EF6\u3002</p><table><thead><tr><th></th><th>anonymous</th><th>use-credentials</th></tr></thead><tbody><tr><td>\u7528\u9014</td><td>\u533F\u540D\u8BF7\u6C42\u8DE8\u57DF\u56FE\u7247\u8D44\u6E90\uFF0C\u4E0D\u4F1A\u53D1\u9001\u8BC1\u4E66\uFF08\u6BD4\u5982<code>cookie</code>\u7B49\uFF09</td><td>\u5177\u540D\u8BF7\u6C42\u8DE8\u57DF\u56FE\u7247\u8D44\u6E90\uFF0C\u4F1A\u643A\u5E26\u8BC1\u4E66\u6570\u636E</td></tr><tr><td>Request Headers</td><td>origin</td><td>origin\u3001cookie</td></tr><tr><td>Response headers</td><td>Access-Control-Allow-Origin</td><td>Access-Control-Allow-Origin\u3001Access-Control-Allow-Credentials</td></tr><tr><td>\u6240\u9700\u6761\u4EF6</td><td>Access-Control-Allow-Origin \u5B57\u6BB5\u503C\u9700\u8981\u5305\u542B\u8BF7\u6C42\u57DF\u3002</td><td>Access-Control-Allow-Origin \u5B57\u6BB5\u503C\u9700\u8981\u5305\u542B\u8BF7\u6C42\u57DF\uFF0C\u4E14\u4E0D\u80FD\u4E3A\u901A\u914D\u7B26 *\u3002Access-Control-Allow-Credentials \u5B57\u6BB5\u503C\u9700\u8981\u4E3A true\uFF0C\u8868\u660E\u5141\u8BB8\u8BF7\u6C42\u53D1\u9001\u8BC1\u4E66\u6570\u636E\u3002</td></tr></tbody></table><h2 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// page origin is https://a.com</span>

<span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> context <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>crossOrigin <span class="token operator">=</span> <span class="token string">&#39;anonymous&#39;</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   context<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   context<span class="token punctuation">.</span><span class="token function">getImageData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> img<span class="token punctuation">.</span>width<span class="token punctuation">,</span> img<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;https://b.com/a.png&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[o];function p(i,d){return a(),s("div",null,c)}var u=n(e,[["render",p],["__file","48.html.vue"]]);export{u as default};
