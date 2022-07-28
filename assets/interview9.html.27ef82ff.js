import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as e,a as n}from"./app.83201bd9.js";const s={},d=n(`<p><code>viewport</code> \u5C31\u662F\u89C6\u533A\u7A97\u53E3\uFF0C\u4E5F\u5C31\u662F\u6D4F\u89C8\u5668\u4E2D\u663E\u793A\u7F51\u9875\u7684\u90E8\u5206\u3002PC \u7AEF\u4E0A\u57FA\u672C\u7B49\u4E8E\u8BBE\u5907\u663E\u793A\u533A\u57DF\uFF0C\u4F46\u5728\u79FB\u52A8\u7AEF\u4E0A viewport \u4F1A\u8D85\u51FA\u8BBE\u5907\u7684\u663E\u793A\u533A\u57DF\uFF08\u5373\u4F1A\u6709\u6A2A\u5411\u6EDA\u52A8\u6761\u51FA\u73B0\uFF09\u3002 \u8BBE\u5907\u9ED8\u8BA4\u7684 <code>viewport</code> \u5728 980 - 1024 \u4E4B\u95F4\u3002</p><p>\u4E3A\u4E86\u8BA9\u79FB\u52A8\u7AEF\u53EF\u4EE5\u5F88\u597D\u5730\u663E\u793A\u9875\u9762\uFF0C\u56E0\u6B64\u9700\u8981\u5BF9 viewport \u8FDB\u884C\u8BBE\u7F6E\u3002\u76F8\u5173\u7684\u8BBE\u7F6E\u503C\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u53D6\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>width</td><td>\u6B63\u6574\u6570 &amp; device-width</td><td>\u5B9A\u4E49\u89C6\u53E3\u7684\u5BBD\u5EA6\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20</td></tr><tr><td>height</td><td>\u6B63\u6574\u6570 &amp; device-height</td><td>\u5B9A\u4E49\u89C6\u53E3\u7684\u9AD8\u5EA6\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20\uFF0C\u4E00\u822C\u4E0D\u7528</td></tr><tr><td>initial-scale</td><td>[0.0-10.0]</td><td>\u5B9A\u4E49\u521D\u59CB\u7F29\u653E\u503C</td></tr><tr><td>minimum-scale</td><td>[0.0-10.0]</td><td>\u5B9A\u4E49\u7F29\u5C0F\u6700\u5C0F\u6BD4\u4F8B\uFF0C\u5B83\u5FC5\u987B\u5C0F\u4E8E\u6216\u7B49\u4E8Emaximum-scale\u8BBE\u7F6E</td></tr><tr><td>maximum-scale</td><td>[0.0-10.0]</td><td>\u5B9A\u4E49\u653E\u5927\u6700\u5927\u6BD4\u4F8B\uFF0C\u5B83\u5FC5\u987B\u5927\u4E8E\u6216\u7B49\u4E8Eminimum-scale\u8BBE\u7F6E</td></tr><tr><td>user-scalable</td><td>yes &amp; no</td><td>\u5B9A\u4E49\u662F\u5426\u5141\u8BB8\u7528\u6237\u624B\u52A8\u7F29\u653E\u9875\u9762\uFF0C\u9ED8\u8BA4\u503Cyes</td></tr></tbody></table><p><code>viewport</code> \u662F\u5728 <code>meta</code> \u6807\u7B7E\u5185\u8FDB\u884C\u63A7\u5236\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>// width=device-width, initial-scale=1.0 \u662F\u4E3A\u4E86\u517C\u5BB9\u4E0D\u540C\u6D4F\u89C8\u5668
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76F8\u5173\u7684\u884D\u751F\u77E5\u8BC6\uFF1A dpr \u4E0E CSS \u50CF\u7D20\u3002CSS \u50CF\u7D20\u7684 1px \u5728 PC \u7AEF\u4E0A\u4E0E\u8BBE\u5907\u7684\u7269\u7406\u50CF\u7D20\u57FA\u672C\u4E00\u81F4\uFF0C\u800C\u5230\u624B\u673A\u7AEF\u5C31\u4F1A\u6709\u4E24\u4E2A\u7269\u7406\u50CF\u7D20\u5BF9\u5E94\u4E00\u4E2A CSS \u50CF\u7D20\u7684\u60C5\u51B5\u51FA\u73B0\uFF08\u5982 iPhone \u7684\u89C6\u7F51\u819C\u5C4F\uFF09\u3002 \u6240\u4EE5 iPhone \u4E0A\u7684 dpr = 2 \u5373 2 \u4E2A\u7269\u7406\u50CF\u7D20 / \u4E00\u4E2A CSS \u50CF\u7D20\uFF08\u72EC\u7ACB\u50CF\u7D20\uFF09</p>`,6),i=[d];function c(o,l){return a(),e("div",null,i)}var u=t(s,[["render",c],["__file","interview9.html.vue"]]);export{u as default};