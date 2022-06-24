import{_ as n,o as s,c as a,a as e}from"./app.013e756e.js";const o={},t=e(`<h2 id="vue-\u7684-diff-\u7B97\u6CD5\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#vue-\u7684-diff-\u7B97\u6CD5\u89E3\u6790" aria-hidden="true">#</a> <strong>Vue \u7684 diff \u7B97\u6CD5\u89E3\u6790</strong></h2><hr><h2 id="_1-\u5E8F\u8A00" tabindex="-1"><a class="header-anchor" href="#_1-\u5E8F\u8A00" aria-hidden="true">#</a> <strong>1.\u5E8F\u8A00</strong></h2><p>diff \u7B97\u6CD5\u662F\u4E00\u79CD\u901A\u8FC7\u540C\u5C42\u7684\u6811\u8282\u70B9\u8FDB\u884C\u6BD4\u8F83\u7684\u9AD8\u6548\u7B97\u6CD5\uFF0C\u907F\u514D\u4E86\u5BF9\u6811\u8FDB\u884C\u9010\u5C42\u641C\u7D22\u904D\u5386\uFF0C\u6240\u4EE5\u65F6\u95F4\u590D\u6742\u5EA6\u53EA\u6709 O(n)\u3002diff \u7B97\u6CD5\u7684\u5728\u5F88\u591A\u573A\u666F\u4E0B\u90FD\u6709\u5E94\u7528\uFF0C\u4F8B\u5982\u5728 vue \u865A\u62DF dom \u6E32\u67D3\u6210\u771F\u5B9E dom \u7684\u65B0\u65E7 VNode \u8282\u70B9\u6BD4\u8F83\u66F4\u65B0\u65F6\uFF0C\u5C31\u7528\u5230\u4E86\u8BE5\u7B97\u6CD5\u3002</p><p><strong>diff \u7B97\u6CD5\u6709\u4E24\u4E2A\u6BD4\u8F83\u663E\u8457\u7684\u7279\u70B9\uFF1A</strong></p><ul><li><em><strong>\u6BD4\u8F83\u53EA\u4F1A\u5728\u540C\u5C42\u7EA7\u8FDB\u884C, \u4E0D\u4F1A\u8DE8\u5C42\u7EA7\u6BD4\u8F83\u3002</strong></em></li></ul><p><img src="https://static001.infoq.cn/resource/image/91/54/91e9c9519a11caa0c5bf70714383f054.png" alt="diff\u5C42\u7EA7\u793A\u4F8B\u56FE"></p><ul><li><em><strong>\u5728 diff \u6BD4\u8F83\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5FAA\u73AF\u4ECE\u4E24\u8FB9\u5411\u4E2D\u95F4\u6536\u62E2\u3002</strong></em></li></ul><p><img src="https://static001.infoq.cn/resource/image/2d/ec/2dcd6ad5cf82c65b9cfc43a27ba1e4ec.png" alt="diff\u7B97\u6CD5\u65B9\u5411\u793A\u4F8B\u56FE"></p><h2 id="_2-diff-\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-diff-\u6D41\u7A0B" aria-hidden="true">#</a> <strong>2. diff \u6D41\u7A0B</strong></h2><p>\u4E0B\u9762\u628A\u6574\u4E2A diff \u6D41\u7A0B\u62C6\u6210\u4E09\u6B65\u6765\u5177\u4F53\u5206\u6790\uFF1A</p><ul><li><em><strong>\u7B2C\u4E00\u6B65</strong></em></li></ul><p>vue \u7684\u865A\u62DF dom \u6E32\u67D3\u771F\u5B9E dom \u7684\u8FC7\u7A0B\u4E2D\u9996\u5148\u4F1A\u5BF9\u65B0\u8001 VNode \u7684\u5F00\u59CB\u548C\u7ED3\u675F\u4F4D\u7F6E\u8FDB\u884C\u6807\u8BB0\uFF1A<code>oldStartIdx</code>\u3001<code>oldEndIdx</code>\u3001<code>newStartIdx</code>\u3001<code>newEndIdx</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> oldStartIdx <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u65E7\u8282\u70B9\u5F00\u59CB\u4E0B\u6807</span>
<span class="token keyword">let</span> newStartIdx <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u65B0\u8282\u70B9\u5F00\u59CB\u4E0B\u6807</span>
<span class="token keyword">let</span> oldEndIdx <span class="token operator">=</span> oldCh<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// \u65E7\u8282\u70B9\u7ED3\u675F\u4E0B\u6807</span>
<span class="token keyword">let</span> oldStartVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment">// \u65E7\u8282\u70B9\u5F00\u59CB vnode</span>
<span class="token keyword">let</span> oldEndVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span>oldEndIdx<span class="token punctuation">]</span> <span class="token comment">// \u65E7\u8282\u70B9\u7ED3\u675F vnode</span>
<span class="token keyword">let</span> newEndIdx <span class="token operator">=</span> newCh<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// \u65B0\u8282\u70B9\u7ED3\u675F\u4E0B\u6807</span>
<span class="token keyword">let</span> newStartVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// \u65B0\u8282\u70B9\u5F00\u59CB vnode</span>
<span class="token keyword">let</span> newEndVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span>newEndIdx<span class="token punctuation">]</span> <span class="token comment">// \u65B0\u8282\u70B9\u7ED3\u675F vnode</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ECF\u8FC7\u7B2C\u4E00\u6B65\u4E4B\u540E\uFF0C\u521D\u59CB\u7684\u65B0\u65E7 VNode \u8282\u70B9\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static001.infoq.cn/resource/image/80/6d/80dc339f73b186479e6d1fc18bfbf66d.png" alt="VNode\u793A\u4F8B\u56FE"></p><ul><li><p><em><strong>\u7B2C\u4E8C\u6B65</strong></em></p><p>\u6807\u8BB0\u597D\u8282\u70B9\u4F4D\u7F6E\u4E4B\u540E\uFF0C\u5C31\u5F00\u59CB\u8FDB\u5165\u5230\u7684 <code>while</code> \u5FAA\u73AF\u5904\u7406\u4E2D\uFF0C\u8FD9\u91CC\u662F <code>diff</code> \u7B97\u6CD5\u7684\u6838\u5FC3\u6D41\u7A0B\uFF0C\u5206\u60C5\u51B5\u8FDB\u884C\u4E86\u65B0\u8001\u8282\u70B9\u7684\u6BD4\u8F83\u5E76\u79FB\u52A8\u5BF9\u5E94\u7684 <code>VNode</code> \u8282\u70B9\u3002<code>while \u5FAA\u73AF\u7684\u9000\u51FA\u6761\u4EF6\u662F\u76F4\u5230\u8001\u8282\u70B9\u6216\u8005\u65B0\u8282\u70B9\u7684\u5F00\u59CB\u4F4D\u7F6E\u5927\u4E8E\u7ED3\u675F\u4F4D\u7F6E\u3002</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>oldStartIdx <span class="token operator">&lt;=</span> oldEndIdx <span class="token operator">&amp;&amp;</span> newStartIdx <span class="token operator">&lt;=</span> newEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token punctuation">.</span><span class="token comment">// \u5904\u7406\u903B\u8F91</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u5177\u4F53\u4ECB\u7ECD <code>while</code> \u5FAA\u73AF\u4E2D\u7684\u5904\u7406\u903B\u8F91\uFF0C \u5FAA\u73AF\u8FC7\u7A0B\u4E2D\u9996\u5148\u5BF9\u65B0\u8001 <code>VNode</code> \u8282\u70B9\u7684\u5934\u5C3E\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5BFB\u627E\u76F8\u540C\u8282\u70B9\uFF0C\u5982\u679C\u6709\u76F8\u540C\u8282\u70B9\u6EE1\u8DB3 <code>sameVnode</code>\uFF08\u53EF\u4EE5\u590D\u7528\u7684\u76F8\u540C\u8282\u70B9\uFF09 \u5219\u76F4\u63A5\u8FDB\u884C <code>patchVnode</code> (\u8BE5\u65B9\u6CD5\u8FDB\u884C\u8282\u70B9\u590D\u7528\u5904\u7406)\uFF0C\u5E76\u4E14\u6839\u636E\u5177\u4F53\u60C5\u5F62\uFF0C\u79FB\u52A8\u65B0\u8001\u8282\u70B9\u7684 <code>VNode</code> \u7D22\u5F15\uFF0C\u4EE5\u4FBF\u8FDB\u5165\u4E0B\u4E00\u6B21\u5FAA\u73AF\u5904\u7406\uFF0C\u4E00\u5171\u6709 2 * 2 = 4 \u79CD\u60C5\u5F62\u3002\u4E0B\u9762\u6839\u636E\u4EE3\u7801\u5C55\u5F00\u5206\u6790:</p><ul><li><em><strong>\u60C5\u5F62\u4E00</strong></em>\uFF1A\u5F53\u65B0\u8001 <code>VNode</code> \u8282\u70B9\u7684 <code>start</code> \u6EE1\u8DB3 <code>sameVnode</code> \u65F6\uFF0C\u76F4\u63A5 <code>patchVnode</code> \u5373\u53EF\uFF0C\u540C\u65F6\u65B0\u8001 <code>VNode</code> \u8282\u70B9\u7684\u5F00\u59CB\u7D22\u5F15\u90FD\u52A0 1\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sameVnode</span><span class="token punctuation">(</span>oldStartVnode<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldStartVnode<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newStartIdx<span class="token punctuation">)</span>
    oldStartVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">++</span>oldStartIdx<span class="token punctuation">]</span>
    newStartVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">++</span>newStartIdx<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><em><strong>\u60C5\u5F62\u4E8C</strong></em>\uFF1A\u5F53\u65B0\u8001 <code>VNode</code> \u8282\u70B9\u7684 end \u6EE1\u8DB3 <code>sameVnode</code> \u65F6\uFF0C\u540C\u6837\u76F4\u63A5 <code>patchVnode</code> \u5373\u53EF\uFF0C\u540C\u65F6\u65B0\u8001 <code>VNode</code> \u8282\u70B9\u7684\u7ED3\u675F\u7D22\u5F15\u90FD\u51CF 1\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sameVnode</span><span class="token punctuation">(</span>oldEndVnode<span class="token punctuation">,</span> newEndVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldEndVnode<span class="token punctuation">,</span> newEndVnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newEndIdx<span class="token punctuation">)</span>
    oldEndVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">--</span>oldEndIdx<span class="token punctuation">]</span>
    newEndVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">--</span>newEndIdx<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><em><strong>\u60C5\u5F62\u4E09</strong></em>\uFF1A\u5F53\u8001 <code>VNode</code> \u8282\u70B9\u7684 <code>start</code> \u548C\u65B0 <code>VNode</code> \u8282\u70B9\u7684 <code>end</code> \u6EE1\u8DB3 <code>sameVnode</code> \u65F6\uFF0C\u8FD9\u8BF4\u660E\u8FD9\u6B21\u6570\u636E\u66F4\u65B0\u540E <code>oldStartVnode</code> \u5DF2\u7ECF\u8DD1\u5230\u4E86 <code>oldEndVnode</code> \u540E\u9762\u53BB\u4E86\u3002\u8FD9\u65F6\u5019\u5728 <code>patchVnode</code> \u540E\uFF0C\u8FD8\u9700\u8981\u5C06\u5F53\u524D\u771F\u5B9E <code>dom</code> \u8282\u70B9\u79FB\u52A8\u5230 <code>oldEndVnode</code> \u7684\u540E\u9762\uFF0C\u540C\u65F6\u8001 <code>VNode</code> \u8282\u70B9\u5F00\u59CB\u7D22\u5F15\u52A0 1\uFF0C\u65B0 <code>VNode</code> \u8282\u70B9\u7684\u7ED3\u675F\u7D22\u5F15\u51CF 1\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sameVnode</span><span class="token punctuation">(</span>oldStartVnode<span class="token punctuation">,</span> newEndVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Vnode moved right</span>
    <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldStartVnode<span class="token punctuation">,</span> newEndVnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newEndIdx<span class="token punctuation">)</span>
    canMove <span class="token operator">&amp;&amp;</span> nodeOps<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> oldStartVnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> nodeOps<span class="token punctuation">.</span><span class="token function">nextSibling</span><span class="token punctuation">(</span>oldEndVnode<span class="token punctuation">.</span>elm<span class="token punctuation">)</span><span class="token punctuation">)</span>
    oldStartVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">++</span>oldStartIdx<span class="token punctuation">]</span>
    newEndVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">--</span>newEndIdx<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><em><strong>\u60C5\u5F62\u56DB</strong></em>\uFF1A\u5F53\u8001 <code>VNode</code> \u8282\u70B9\u7684 <code>end</code> \u548C\u65B0 <code>VNode</code> \u8282\u70B9\u7684 <code>start</code> \u6EE1\u8DB3 <code>sameVnode</code> \u65F6\uFF0C\u8FD9\u8BF4\u660E\u8FD9\u6B21\u6570\u636E\u66F4\u65B0\u540E <code>oldEndVnode</code> \u8DD1\u5230\u4E86 <code>oldStartVnode</code> \u7684\u524D\u9762\u53BB\u4E86\u3002\u8FD9\u65F6\u5019\u5728 <code>patchVnode</code> \u540E\uFF0C\u8FD8\u9700\u8981\u5C06\u5F53\u524D\u771F\u5B9E <code>dom</code> \u8282\u70B9\u79FB\u52A8\u5230 <code>oldStartVnode</code> \u7684\u524D\u9762\uFF0C\u540C\u65F6\u8001 <code>VNode</code> \u8282\u70B9\u7ED3\u675F\u7D22\u5F15\u51CF 1\uFF0C\u65B0 <code>VNode</code> \u8282\u70B9\u7684\u5F00\u59CB\u7D22\u5F15\u52A0 1\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">patchVnode</span><span class="token punctuation">(</span>oldEndVnode<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newStartIdx<span class="token punctuation">)</span>
    canMove <span class="token operator">&amp;&amp;</span> nodeOps<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> oldEndVnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> oldStartVnode<span class="token punctuation">.</span>elm<span class="token punctuation">)</span>
    oldEndVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">--</span>oldEndIdx<span class="token punctuation">]</span>
    newStartVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">++</span>newStartIdx<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>**\u5982\u679C\u90FD\u4E0D\u6EE1\u8DB3\u4EE5\u4E0A\u56DB\u79CD\u60C5\u5F62\uFF0C\u90A3\u8BF4\u660E\u6CA1\u6709\u76F8\u540C\u7684\u8282\u70B9\u53EF\u4EE5\u590D\u7528\u3002**\u4E8E\u662F\u5219\u901A\u8FC7\u67E5\u627E\u4E8B\u5148\u5EFA\u7ACB\u597D\u7684\u4EE5\u65E7\u7684 <code>VNode</code> \u4E3A <code>key</code> \u503C\uFF0C\u5BF9\u5E94 <code>index</code> \u5E8F\u5217\u4E3A <code>value</code> \u503C\u7684\u54C8\u5E0C\u8868\u3002\u4ECE\u8FD9\u4E2A\u54C8\u5E0C\u8868\u4E2D\u627E\u5230\u4E0E <code>newStartVnode</code> \u4E00\u81F4 <code>key</code> \u7684\u65E7\u7684 <code>VNode</code> \u8282\u70B9\uFF0C\u5982\u679C\u4E24\u8005\u6EE1\u8DB3 <code>sameVnode</code> \u7684\u6761\u4EF6\uFF0C\u5728\u8FDB\u884C <code>patchVnode</code> \u7684\u540C\u65F6\u4F1A\u5C06\u8FD9\u4E2A\u771F\u5B9E <code>dom</code> \u79FB\u52A8\u5230 <code>oldStartVnode</code> \u5BF9\u5E94\u7684\u771F\u5B9E <code>dom</code> \u7684\u524D\u9762\uFF1B\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u5219\u8BF4\u660E\u5F53\u524D\u7D22\u5F15\u4E0B\u7684\u65B0\u7684 <code>VNode</code> \u8282\u70B9\u5728\u65E7\u7684 <code>VNode</code> \u961F\u5217\u4E2D\u4E0D\u5B58\u5728\uFF0C\u65E0\u6CD5\u8FDB\u884C\u8282\u70B9\u7684\u590D\u7528\uFF0C\u90A3\u4E48\u5C31\u53EA\u80FD\u8C03\u7528 <code>createElm</code> \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 <code>dom</code> \u8282\u70B9\u653E\u5230\u5F53\u524D <code>newStartIdx</code> \u7684\u4F4D\u7F6E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">// \u6CA1\u6709\u627E\u5230\u76F8\u540C\u7684\u53EF\u4EE5\u590D\u7528\u7684\u8282\u70B9\uFF0C\u5219\u65B0\u5EFA\u8282\u70B9\u5904\u7406</span>
    <span class="token comment">/* \u751F\u6210\u4E00\u4E2A key \u4E0E\u65E7 VNode \u7684 key \u5BF9\u5E94\u7684\u54C8\u5E0C\u8868\uFF08\u53EA\u6709\u7B2C\u4E00\u6B21\u8FDB\u6765 undefined \u7684\u65F6\u5019\u4F1A\u751F\u6210\uFF0C\u4E5F\u4E3A\u540E\u9762\u68C0\u6D4B\u91CD\u590D\u7684 key \u503C\u505A\u94FA\u57AB\uFF09 \u6BD4\u5982 childre \u662F\u8FD9\u6837\u7684 [{xx: xx, key: &#39;key0&#39;}, {xx: xx, key: &#39;key1&#39;}, {xx: xx, key: &#39;key2&#39;}] beginIdx = 0 endIdx = 2 \u7ED3\u679C\u751F\u6210{key0: 0, key1: 1, key2: 2} */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>oldKeyToIdx<span class="token punctuation">)</span><span class="token punctuation">)</span> oldKeyToIdx <span class="token operator">=</span> <span class="token function">createKeyToOldIdx</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">,</span> oldStartIdx<span class="token punctuation">,</span> oldEndIdx<span class="token punctuation">)</span>
    <span class="token comment">/* \u5982\u679C newStartVnode \u65B0\u7684 VNode \u8282\u70B9\u5B58\u5728 key \u5E76\u4E14\u8FD9\u4E2A key \u5728 oldVnode \u4E2D\u80FD\u627E\u5230\u5219\u8FD4\u56DE\u8FD9\u4E2A\u8282\u70B9\u7684 idxInOld\uFF08\u5373\u7B2C\u51E0\u4E2A\u8282\u70B9\uFF0C\u4E0B\u6807\uFF09*/</span>
    idxInOld <span class="token operator">=</span> <span class="token function">isDef</span><span class="token punctuation">(</span>newStartVnode<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
        <span class="token operator">?</span> oldKeyToIdx<span class="token punctuation">[</span>newStartVnode<span class="token punctuation">.</span>key<span class="token punctuation">]</span>
        <span class="token operator">:</span> <span class="token function">findIdxInOld</span><span class="token punctuation">(</span>newStartVnode<span class="token punctuation">,</span> oldCh<span class="token punctuation">,</span> oldStartIdx<span class="token punctuation">,</span> oldEndIdx<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>idxInOld<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// New element</span>
        <span class="token comment">/*newStartVnode \u6CA1\u6709 key \u6216\u8005\u662F\u8BE5 key \u6CA1\u6709\u5728\u8001\u8282\u70B9\u4E2D\u627E\u5230\u5219\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8282\u70B9 */</span>
        <span class="token function">createElm</span><span class="token punctuation">(</span>newStartVnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> oldStartVnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newStartIdx<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">/* \u83B7\u53D6\u540C key \u7684\u8001\u8282\u70B9 */</span>
        vnodeToMove <span class="token operator">=</span> oldCh<span class="token punctuation">[</span>idxInOld<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sameVnode</span><span class="token punctuation">(</span>vnodeToMove<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">/* \u5982\u679C\u65B0 VNode \u4E0E\u5F97\u5230\u7684\u6709\u76F8\u540C key \u7684\u8282\u70B9\u662F\u540C\u4E00\u4E2A VNode \u5219\u8FDB\u884C patchVnode*/</span>
            <span class="token function">patchVnode</span><span class="token punctuation">(</span>vnodeToMove<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newStartIdx<span class="token punctuation">)</span>
            <span class="token comment">// \u56E0\u4E3A\u5DF2\u7ECF patchVnode \u8FDB\u53BB\u4E86\uFF0C\u6240\u4EE5\u5C06\u8FD9\u4E2A\u8001\u8282\u70B9\u8D4B\u503C undefined</span>
            oldCh<span class="token punctuation">[</span>idxInOld<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
            <span class="token comment">/* \u5F53\u6709\u6807\u8BC6\u4F4D canMove \u5B9E\u53EF\u4EE5\u76F4\u63A5\u63D2\u5165 oldStartVnode \u5BF9\u5E94\u7684\u771F\u5B9E Dom \u8282\u70B9\u524D\u9762 */</span>
            canMove <span class="token operator">&amp;&amp;</span> nodeOps<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnodeToMove<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> oldStartVnode<span class="token punctuation">.</span>elm<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// same key but different element. treat as new element</span>
            <span class="token comment">/* \u5F53\u65B0\u7684 VNode \u4E0E\u627E\u5230\u7684\u540C\u6837 key \u7684 VNode \u4E0D\u662F sameVNode \u7684\u65F6\u5019\uFF08\u6BD4\u5982\u8BF4 tag \u4E0D\u4E00\u6837\u6216\u8005\u662F\u6709\u4E0D\u4E00\u6837 type \u7684 input \u6807\u7B7E\uFF09\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8282\u70B9 */</span>
            <span class="token function">createElm</span><span class="token punctuation">(</span>newStartVnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> oldStartVnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newStartIdx<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    newStartVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">++</span>newStartIdx<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u6765\u770B\u7684\u5B9E\u4F8B\uFF0C<strong>\u7B2C\u4E00\u6B21\u5FAA\u73AF</strong>\u540E\uFF0C\u627E\u5230\u4E86\u65E7\u8282\u70B9\u7684\u672B\u5C3E\u548C\u65B0\u8282\u70B9\u7684\u5F00\u5934 (\u90FD\u662F D) \u76F8\u540C\uFF0C\u4E8E\u662F\u76F4\u63A5\u590D\u7528 D \u8282\u70B9\u4F5C\u4E3A diff \u540E\u521B\u5EFA\u7684\u7B2C\u4E00\u4E2A\u771F\u5B9E\u8282\u70B9\u3002\u540C\u65F6\u65E7\u8282\u70B9\u7684 <code>endIndex</code> \u79FB\u52A8\u5230\u4E86 C\uFF0C\u65B0\u8282\u70B9\u7684 <code>startIndex</code> \u79FB\u52A8\u5230\u4E86 C\u3002</p><p><img src="https://static001.infoq.cn/resource/image/76/54/76032c78c8ef74047efd42c070e48854.png" alt="\u7B2C\u4E00\u6B21\u793A\u4F8B\u56FE"></p><p>\u7D27\u63A5\u7740\u5F00\u59CB\u7B2C\u4E8C\u6B21\u5FAA\u73AF\uFF0C<strong>\u7B2C\u4E8C\u6B21\u5FAA\u73AF</strong>\u540E\uFF0C\u540C\u6837\u662F\u65E7\u8282\u70B9\u7684\u672B\u5C3E\u548C\u65B0\u8282\u70B9\u7684\u5F00\u5934 (\u90FD\u662F C) \u76F8\u540C\uFF0C\u540C\u7406\uFF0Cdiff \u540E\u521B\u5EFA\u4E86 C \u7684\u771F\u5B9E\u8282\u70B9\u63D2\u5165\u5230\u7B2C\u4E00\u6B21\u521B\u5EFA\u7684 B \u8282\u70B9\u540E\u9762\u3002\u540C\u65F6\u65E7\u8282\u70B9\u7684 <code>endIndex</code> \u79FB\u52A8\u5230\u4E86 B\uFF0C\u65B0\u8282\u70B9\u7684 <code>startIndex</code> \u79FB\u52A8\u5230\u4E86 E\u3002</p><p><img src="https://static001.infoq.cn/resource/image/1c/d7/1c76e7489660188d35f0a38ea8c8ecd7.png" alt="\u7B2C\u4E8C\u6B21\u793A\u4F8B\u56FE"></p><p>\u63A5\u4E0B\u6765<strong>\u7B2C\u4E09\u6B21\u5FAA\u73AF</strong>\u4E2D\uFF0C\u53D1\u73B0 patchVnode \u7684 4 \u79CD\u60C5\u5F62\u90FD\u4E0D\u7B26\u5408\uFF0C\u4E8E\u662F\u5728\u65E7\u8282\u70B9\u961F\u5217\u4E2D\u67E5\u627E\u5F53\u524D\u7684\u65B0\u8282\u70B9 E\uFF0C\u7ED3\u679C\u53D1\u73B0\u6CA1\u6709\u627E\u5230\uFF0C\u8FD9\u65F6\u5019\u53EA\u80FD\u76F4\u63A5\u521B\u5EFA\u65B0\u7684\u771F\u5B9E\u8282\u70B9 E\uFF0C\u63D2\u5165\u5230\u7B2C\u4E8C\u6B21\u521B\u5EFA\u7684 C \u8282\u70B9\u4E4B\u540E\u3002\u540C\u65F6\u65B0\u8282\u70B9\u7684 <code>startIndex</code> \u79FB\u52A8\u5230\u4E86 A\u3002\u65E7\u8282\u70B9\u7684 <code>startIndex</code> \u548C <code>endIndex</code> \u90FD\u4FDD\u6301\u4E0D\u52A8\u3002</p><p><img src="https://static001.infoq.cn/resource/image/4b/08/4b622c0d61673ec5474465d82305d308.png" alt="\u7B2C\u4E09\u6B21\u793A\u4F8B\u56FE"></p><p><strong>\u7B2C\u56DB\u6B21\u5FAA\u73AF</strong>\u4E2D\uFF0C\u53D1\u73B0\u4E86\u65B0\u65E7\u8282\u70B9\u7684\u5F00\u5934 (\u90FD\u662F A) \u76F8\u540C\uFF0C\u4E8E\u662F diff \u540E\u521B\u5EFA\u4E86 A \u7684\u771F\u5B9E\u8282\u70B9\uFF0C\u63D2\u5165\u5230\u524D\u4E00\u6B21\u521B\u5EFA\u7684 E \u8282\u70B9\u540E\u9762\u3002\u540C\u65F6\u65E7\u8282\u70B9\u7684 <code>startIndex</code> \u79FB\u52A8\u5230\u4E86 B\uFF0C\u65B0\u8282\u70B9\u7684 <code>startIndex</code> \u79FB\u52A8\u5230\u4E86 B\u3002</p><p><img src="https://static001.infoq.cn/resource/image/59/b4/5982417c3e0b2fa9ae940354a0e67ab4.png" alt="\u7B2C\u56DB\u6B21\u793A\u4F8B\u56FE"></p><p><strong>\u7B2C\u4E94\u6B21\u5FAA\u73AF</strong>\u4E2D\uFF0C\u60C5\u5F62\u540C\u7B2C\u56DB\u6B21\u5FAA\u73AF\u4E00\u6837\uFF0C\u56E0\u6B64 diff \u540E\u521B\u5EFA\u4E86 B \u771F\u5B9E\u8282\u70B9 \u63D2\u5165\u5230\u524D\u4E00\u6B21\u521B\u5EFA\u7684 A \u8282\u70B9\u540E\u9762\u3002\u540C\u65F6\u65E7\u8282\u70B9\u7684 <code>startIndex</code> \u79FB\u52A8\u5230\u4E86 C\uFF0C\u65B0\u8282\u70B9\u7684 <code>startIndex</code> \u79FB\u52A8\u5230\u4E86 F\u3002</p><p><img src="https://static001.infoq.cn/resource/image/16/86/16cf0ef90f6e19d26c0ddffeca067e86.png" alt="\u7B2C\u4E94\u6B21\u793A\u4F8B\u56FE"></p><p>\u8FD9\u65F6\u5019\u53D1\u73B0\u65B0\u8282\u70B9\u7684 <code>startIndex</code> \u5DF2\u7ECF\u5927\u4E8E <code>endIndex</code> \u4E86\u3002\u4E0D\u518D\u6EE1\u8DB3\u5FAA\u73AF\u7684\u6761\u4EF6\u4E86\u3002\u56E0\u6B64\u7ED3\u675F\u5FAA\u73AF\uFF0C\u63A5\u4E0B\u6765\u8D70\u540E\u9762\u7684\u903B\u8F91\u3002</p><ul><li><em><strong>\u7B2C\u4E09\u6B65</strong></em></li></ul><p><code>\u5F53 while \u5FAA\u73AF\u7ED3\u675F\u540E\uFF0C\u6839\u636E\u65B0\u8001\u8282\u70B9\u7684\u6570\u76EE\u4E0D\u540C\uFF0C\u505A\u76F8\u5E94\u7684\u8282\u70B9\u6DFB\u52A0\u6216\u8005\u5220\u9664\u3002\u82E5\u65B0\u8282\u70B9\u6570\u76EE\u5927\u4E8E\u8001\u8282\u70B9\u5219\u9700\u8981\u628A\u591A\u51FA\u6765\u7684\u8282\u70B9\u521B\u5EFA\u51FA\u6765\u52A0\u5165\u5230\u771F\u5B9E dom \u4E2D\uFF0C\u53CD\u4E4B\u82E5\u8001\u8282\u70B9\u6570\u76EE\u5927\u4E8E\u65B0\u8282\u70B9\u5219\u9700\u8981\u628A\u591A\u51FA\u6765\u7684\u8001\u8282\u70B9\u4ECE\u771F\u5B9E dom \u4E2D\u5220\u9664\u3002</code>\u81F3\u6B64\u6574\u4E2A diff \u8FC7\u7A0B\u5C31\u5DF2\u7ECF\u5168\u90E8\u5B8C\u6210\u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldStartIdx <span class="token operator">&gt;</span> oldEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u5168\u90E8\u6BD4\u8F83\u5B8C\u6210\u4EE5\u540E\uFF0C\u53D1\u73B0 oldStartIdx &gt; oldEndIdx \u7684\u8BDD\uFF0C\u8BF4\u660E\u8001\u8282\u70B9\u5DF2\u7ECF\u904D\u5386\u5B8C\u4E86\uFF0C\u65B0\u8282\u70B9\u6BD4\u8001\u8282\u70B9\u591A\uFF0C \u6240\u4EE5\u8FD9\u65F6\u5019\u591A\u51FA\u6765\u7684\u65B0\u8282\u70B9\u9700\u8981\u4E00\u4E2A\u4E00\u4E2A\u521B\u5EFA\u51FA\u6765\u52A0\u5165\u5230\u771F\u5B9E Dom \u4E2D */</span>
    refElm <span class="token operator">=</span> <span class="token function">isUndef</span><span class="token punctuation">(</span>newCh<span class="token punctuation">[</span>newEndIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> newCh<span class="token punctuation">[</span>newEndIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>elm
    <span class="token function">addVnodes</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> refElm<span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newStartIdx<span class="token punctuation">,</span> newEndIdx<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span> <span class="token comment">// \u521B\u5EFA newStartIdx - newEndIdx \u4E4B\u95F4\u7684\u6240\u6709\u8282\u70B9</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>newStartIdx <span class="token operator">&gt;</span> newEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u5982\u679C\u5168\u90E8\u6BD4\u8F83\u5B8C\u6210\u4EE5\u540E\u53D1\u73B0 newStartIdx &gt; newEndIdx\uFF0C\u5219\u8BF4\u660E\u65B0\u8282\u70B9\u5DF2\u7ECF\u904D\u5386\u5B8C\u4E86\uFF0C\u8001\u8282\u70B9\u591A\u4E8E\u65B0\u8282\u70B9\uFF0C\u8FD9\u4E2A\u65F6\u5019\u9700\u8981\u5C06\u591A\u4F59\u7684\u8001\u8282\u70B9\u4ECE\u771F\u5B9E Dom \u4E2D\u79FB\u9664 */</span>
    <span class="token function">removeVnodes</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">,</span> oldStartIdx<span class="token punctuation">,</span> oldEndIdx<span class="token punctuation">)</span> <span class="token comment">// \u79FB\u9664 oldStartIdx - oldEndIdx \u4E4B\u95F4\u7684\u6240\u6709\u8282\u70B9</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u56DE\u8FC7\u5934\u770B\u7684\u5B9E\u4F8B\uFF0C\u65B0\u8282\u70B9\u7684\u6570\u76EE\u5927\u4E8E\u65E7\u8282\u70B9\uFF0C\u9700\u8981\u521B\u5EFA <code>newStartIdx</code> \u548C <code>newEndIdx</code> \u4E4B\u95F4\u7684\u6240\u6709\u8282\u70B9\u3002\u5728\u7684\u5B9E\u4F8B\u4E2D\u5C31\u662F\u8282\u70B9 F\uFF0C\u56E0\u6B64\u76F4\u63A5\u521B\u5EFA F \u8282\u70B9\u5BF9\u5E94\u7684\u771F\u5B9E\u8282\u70B9\u653E\u5230 B \u8282\u70B9\u540E\u9762\u5373\u53EF\u3002</p><p><img src="https://static001.infoq.cn/resource/image/dc/ad/dc215b45682cf6c9cc4700a5425673ad.png" alt="\u7B2C\u516D\u6B21\u793A\u4F8B\u56FE"></p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> <strong>\u603B\u7ED3</strong></h2><ul><li><p>\u9996\u5148\uFF0C\u5BF9\u6BD4\u8282\u70B9\u672C\u8EAB\uFF0C\u5224\u65AD\u662F\u5426\u4E3A\u540C\u4E00\u8282\u70B9\uFF0C\u5982\u679C\u4E0D\u4E3A\u76F8\u540C\u8282\u70B9\uFF0C\u5219\u5220\u9664\u8BE5\u8282\u70B9\u91CD\u65B0\u521B\u5EFA\u8282\u70B9\u8FDB\u884C\u66FF\u6362</p></li><li><p>\u5982\u679C\u4E3A\u76F8\u540C\u8282\u70B9\uFF0C\u8FDB\u884C<code>patchVnode</code>\uFF0C\u5224\u65AD\u5982\u4F55\u5BF9\u8BE5\u8282\u70B9\u7684\u5B50\u8282\u70B9\u8FDB\u884C\u5904\u7406\uFF0C\u5148\u5224\u65AD\u4E00\u65B9\u6709\u5B50\u8282\u70B9\u4E00\u65B9\u6CA1\u6709\u5B50\u8282\u70B9\u7684\u60C5\u51B5(\u5982\u679C\u65B0\u7684<code>children</code>\u6CA1\u6709\u5B50\u8282\u70B9\uFF0C\u5C06\u65E7\u7684\u5B50\u8282\u70B9\u79FB\u9664)</p></li><li><p>\u6BD4\u8F83\u5982\u679C\u90FD\u6709\u5B50\u8282\u70B9\uFF0C\u5219\u8FDB\u884C<code>updateChildren</code>\uFF0C\u5224\u65AD\u5982\u4F55\u5BF9\u8FD9\u4E9B\u65B0\u8001\u8282\u70B9\u7684\u5B50\u8282\u70B9\u8FDB\u884C\u64CD\u4F5C\uFF08<code>diff</code>\u6838\u5FC3\uFF09\u3002</p></li><li><p>\u5339\u914D\u65F6\uFF0C\u627E\u5230\u76F8\u540C\u7684\u5B50\u8282\u70B9\uFF0C\u9012\u5F52\u6BD4\u8F83\u5B50\u8282\u70B9</p></li></ul><p>\u5728<code>diff</code>\u4E2D\uFF0C\u53EA\u5BF9\u540C\u5C42\u7684\u5B50\u8282\u70B9\u8FDB\u884C\u6BD4\u8F83\uFF0C\u653E\u5F03\u8DE8\u7EA7\u7684\u8282\u70B9\u6BD4\u8F83\uFF0C\u4F7F\u5F97\u65F6\u95F4\u590D\u6742\u4ECE<code>O(n^3)</code>\u964D\u4F4E\u503C<code>O(n)</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53EA\u6709\u5F53\u65B0\u65E7<code>children</code>\u90FD\u4E3A\u591A\u4E2A\u5B50\u8282\u70B9\u65F6\u624D\u9700\u8981\u7528\u6838\u5FC3\u7684<code>Diff</code>\u7B97\u6CD5\u8FDB\u884C\u540C\u5C42\u7EA7\u6BD4\u8F83\u3002</p>`,38),p=[t];function c(d,l){return s(),a("div",null,p)}var u=n(o,[["render",c],["__file","diff.html.vue"]]);export{u as default};
