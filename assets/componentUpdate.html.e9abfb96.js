import{o as a,c as p,a as e,F as t,e as n}from"./app.f4829677.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const c={},l=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="setstate-\u80CC\u540E\u7684\u6279\u91CF\u66F4\u65B0\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#setstate-\u80CC\u540E\u7684\u6279\u91CF\u66F4\u65B0\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> setState \u80CC\u540E\u7684\u6279\u91CF\u66F4\u65B0\u5982\u4F55\u5B9E\u73B0</h1><hr><p>\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u591A\u6B21 <code>setState</code> \u4E0D\u4F1A\u89E6\u53D1\u591A\u6B21\u6E32\u67D3\uFF0C\u5E76\u4E14 <code>state</code> \u7684\u503C\u4E5F\u4E0D\u662F\u5B9E\u65F6\u7684\uFF0C\u8FD9\u6837\u7684\u505A\u6CD5\u80FD\u591F\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u6027\u80FD\u6D88\u8017\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">handleClick</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521D\u59CB\u5316 \`count\` \u4E3A 0</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// -&gt; 0</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// -&gt; 0</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// -&gt; 0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u90A3\u4E48\u8FD9\u4E2A\u884C\u4E3A\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u5462\uFF1F\u7B54\u6848\u662F\u6279\u91CF\u66F4\u65B0\u3002\u63A5\u4E0B\u6765\u5C31\u6765\u5B66\u4E60\u6279\u91CF\u66F4\u65B0\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u3002</p><p>\u5176\u5B9E\u8FD9\u4E2A\u80CC\u540E\u7684\u539F\u7406\u76F8\u5F53\u4E4B\u7B80\u5355\u3002\u5047\u5982 <code>handleClick</code> \u662F\u901A\u8FC7\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1\u7684\uFF0C\u90A3\u4E48 <code>handleClick</code> \u5176\u5B9E\u5DEE\u4E0D\u591A\u4F1A\u88AB\u5305\u88C5\u6210\u8FD9\u6837\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>isBatchingUpdates <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
  isBatchingUpdates <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token comment">// \u7136\u540E\u53BB\u66F4\u65B0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5728\u6267\u884C <code>handleClick</code> \u4E4B\u524D\uFF0C\u5176\u5B9E React \u5C31\u4F1A\u9ED8\u8BA4\u8FD9\u6B21\u89E6\u53D1\u4E8B\u4EF6\u7684\u8FC7\u7A0B\u4E2D\u5982\u679C\u6709 <code>setState</code> \u7684\u8BDD\u5C31\u5E94\u8BE5\u6279\u91CF\u66F4\u65B0\u3002</p><p>\u5F53\u5728 <code>handleClick</code> \u5185\u90E8\u6267\u884C <code>setState</code> \u65F6\uFF0C\u66F4\u65B0\u72B6\u6001\u7684\u8FD9\u90E8\u5206\u4EE3\u7801\u9996\u5148\u4F1A\u88AB\u4E22\u8FDB\u4E00\u4E2A\u961F\u5217\u4E2D\u7B49\u5F85\u540E\u7EED\u7684\u4F7F\u7528\u3002\u7136\u540E\u7EE7\u7EED\u5904\u7406\u66F4\u65B0\u7684\u903B\u8F91\uFF0C\u6BD5\u7ADF\u89E6\u53D1 <code>setState</code> \u80AF\u5B9A\u4F1A\u89E6\u53D1\u4E00\u7CFB\u5217\u7EC4\u4EF6\u66F4\u65B0\u7684\u6D41\u7A0B\u3002\u4F46\u662F\u5728\u8FD9\u4E2A\u6D41\u7A0B\u4E2D\u5982\u679C React \u53D1\u73B0\u9700\u8981\u6279\u91CF\u66F4\u65B0 state \u7684\u8BDD\uFF0C\u5C31\u4F1A\u7ACB\u5373\u4E2D\u65AD\u66F4\u65B0\u6D41\u7A0B\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u867D\u7136\u5728 <code>handleClick</code> \u4E2D\u8C03\u7528\u4E86\u4E09\u6B21 <code>setState</code>\uFF0C\u4F46\u662F\u5E76\u4E0D\u4F1A\u8D70\u5B8C\u4E09\u6B21\u7684\u7EC4\u4EF6\u66F4\u65B0\u6D41\u7A0B\uFF0C\u53EA\u662F\u628A\u66F4\u65B0\u72B6\u6001\u7684\u903B\u8F91\u4E22\u5230\u4E86\u4E00\u4E2A\u961F\u5217\u4E2D\u3002\u5F53 <code>handleClick</code> \u6267\u884C\u5B8C\u6BD5\u4E4B\u540E\u4F1A\u518D\u6267\u884C\u4E00\u6B21\u7EC4\u4EF6\u66F4\u65B0\u7684\u6D41\u7A0B\u3002</p><h1 id="fiber" tabindex="-1"><a class="header-anchor" href="#fiber" aria-hidden="true">#</a> Fiber</h1><hr><p>\u5728 React 15 \u7248\u672C\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6709\u7EC4\u4EF6\u9700\u8981\u66F4\u65B0\u7684\u8BDD\uFF0C\u90A3\u4E48\u5C31\u4F1A<strong>\u9012\u5F52\u5411\u4E0B\u904D\u5386\u6574\u4E2A\u865A\u62DF DOM \u6811</strong>\u6765\u5224\u65AD\u9700\u8981\u66F4\u65B0\u7684\u5730\u65B9\u3002\u8FD9\u79CD\u9012\u5F52\u7684\u65B9\u5F0F<code>\u5F0A\u7AEF\u5728\u4E8E\u65E0\u6CD5\u4E2D\u65AD\uFF0C\u5FC5\u987B\u66F4\u65B0\u5B8C\u6240\u6709\u7EC4\u4EF6\u624D\u4F1A\u505C\u6B62</code>\u3002\u8FD9\u6837\u7684\u5F0A\u7AEF\u4F1A\u9020\u6210\u5982\u679C\u9700\u8981\u66F4\u65B0\u4E00\u4E9B\u5E9E\u5927\u7684\u7EC4\u4EF6\uFF0C\u90A3\u4E48\u5728\u66F4\u65B0\u7684\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u5C31\u4F1A\u957F\u65F6\u95F4\u963B\u585E\u4E3B\u7EBF\u7A0B\uFF0C\u4ECE\u800C\u9020\u6210\u7528\u6237\u7684\u4EA4\u4E92\u3001\u52A8\u753B\u7684\u66F4\u65B0\u7B49\u7B49\u90FD\u4E0D\u80FD\u53CA\u65F6\u54CD\u5E94\u3002</p><p>React \u7684\u7EC4\u4EF6\u66F4\u65B0\u8FC7\u7A0B\u7B80\u800C\u8A00\u4E4B\u5C31\u662F\u5728\u6301\u7EED\u8C03\u7528\u51FD\u6570\u7684\u4E00\u4E2A\u8FC7\u7A0B\uFF0C\u8FD9\u6837\u7684\u4E00\u4E2A\u8FC7\u7A0B\u4F1A\u5F62\u6210\u4E00\u4E2A\u865A\u62DF\u7684\u8C03\u7528\u6808\u3002\u5047\u5982\u63A7\u5236\u8FD9\u4E2A\u8C03\u7528\u6808\u7684\u6267\u884C\uFF0C\u628A\u6574\u4E2A\u66F4\u65B0\u4EFB\u52A1\u62C6\u89E3\u5F00\u6765\uFF0C\u5C3D\u53EF\u80FD\u5730\u5C06\u66F4\u65B0\u4EFB\u52A1\u653E\u5230\u6D4F\u89C8\u5668\u7A7A\u95F2\u7684\u65F6\u5019\u53BB\u6267\u884C\uFF0C\u90A3\u4E48\u5C31\u80FD\u89E3\u51B3\u4EE5\u4E0A\u7684\u95EE\u9898\u3002</p><p>\u90A3\u4E48\u73B0\u5728\u662F\u65F6\u5019\u4ECB\u7ECD Fiber \u4E86\u3002Fiber \u91CD\u65B0\u5B9E\u73B0\u4E86 React \u7684\u6838\u5FC3\u7B97\u6CD5\uFF0C\u5E26\u6765\u4E86\u6740\u624B\u950F\u589E\u91CF\u66F4\u65B0\u529F\u80FD\u3002\u5B83\u6709\u80FD\u529B\u5C06\u6574\u4E2A\u66F4\u65B0\u4EFB\u52A1\u62C6\u5206\u4E3A\u4E00\u4E2A\u4E2A\u5C0F\u7684\u4EFB\u52A1\uFF0C\u5E76\u4E14\u80FD\u63A7\u5236\u8FD9\u4E9B\u4EFB\u52A1\u7684\u6267\u884C\u3002</p><p>\u4E24\u4E2A\u6838\u5FC3\u7684\u6280\u672F:</p><ul><li><p>\u65B0\u7684\u6570\u636E\u7ED3\u6784 fiber</p></li><li><p>\u8C03\u5EA6\u5668</p></li></ul><h2 id="\u65B0\u7684\u6570\u636E\u7ED3\u6784-fiber" tabindex="-1"><a class="header-anchor" href="#\u65B0\u7684\u6570\u636E\u7ED3\u6784-fiber" aria-hidden="true">#</a> \u65B0\u7684\u6570\u636E\u7ED3\u6784 fiber</h2><p>\u53EF\u4EE5\u628A\u6BCF\u4E2A fiber \u8BA4\u4E3A\u662F\u4E00\u4E2A\u5DE5\u4F5C\u5355\u5143\uFF0C\u6267\u884C\u66F4\u65B0\u4EFB\u52A1\u7684\u6574\u4E2A\u6D41\u7A0B\uFF08\u4E0D\u5305\u62EC\u6E32\u67D3\uFF09\u5C31\u662F\u5728\u53CD\u590D\u5BFB\u627E\u5DE5\u4F5C\u5355\u5143\u5E76\u8FD0\u884C\u5B83\u4EEC\uFF0C\u8FD9\u6837\u7684\u65B9\u5F0F\u5C31\u5B9E\u73B0\u4E86\u62C6\u5206\u4EFB\u52A1\u7684\u529F\u80FD\u3002</p><p>\u62C6\u5206\u6210\u5DE5\u4F5C\u5355\u5143\u7684\u76EE\u7684\u5C31\u662F\u4E3A\u4E86\u8BA9\u80FD\u63A7\u5236 stack frame\uFF08\u8C03\u7528\u6808\u4E2D\u7684\u5185\u5BB9\uFF09\uFF0C\u53EF\u4EE5\u968F\u65F6\u968F\u5730\u53BB\u6267\u884C\u5B83\u4EEC\u3002\u7531\u6B64\u4F7F\u5F97\u5728\u6BCF\u8FD0\u884C\u4E00\u4E2A\u5DE5\u4F5C\u5355\u5143\u540E\u90FD\u53EF\u4EE5\u6309\u60C5\u51B5\u7EE7\u7EED\u6267\u884C\u6216\u8005\u4E2D\u65AD\u5DE5\u4F5C\uFF08\u4E2D\u65AD\u7684\u51B3\u5B9A\u6743\u5728\u4E8E\u8C03\u5EA6\u7B97\u6CD5\uFF09\u3002</p><p>\u90A3\u4E48 fiber \u8FD9\u4E2A\u6570\u636E\u7ED3\u6784\u5230\u5E95\u957F\u4EC0\u4E48\u6837\u5462\uFF1F\u73B0\u5728\u5C31\u8BA9\u6765\u4E00\u7AA5\u7A76\u7ADF\u3002</p><p>fiber \u5185\u90E8\u5176\u5B9E\u5B58\u50A8\u4E86\u5F88\u591A\u4E0A\u4E0B\u6587\u4FE1\u606F\uFF0C\u53EF\u4EE5\u628A\u5B83\u8BA4\u4E3A\u662F\u6539\u8FDB\u7248\u7684\u865A\u62DF DOM\uFF0C\u5B83\u540C\u6837\u4E5F\u5BF9\u5E94\u4E86\u7EC4\u4EF6\u5B9E\u4F8B\u53CA DOM \u5143\u7D20\u3002\u540C\u65F6 fiber \u4E5F\u4F1A\u7EC4\u6210 fiber tree\uFF0C\u4F46\u662F\u5B83\u7684\u7ED3\u6784\u4E0D\u518D\u662F\u4E00\u4E2A\u6811\u5F62\uFF0C\u800C\u662F\u4E00\u4E2A\u94FE\u8868\u7684\u7ED3\u6784\u3002</p>`,23),r=["src"],i=n(`<blockquote><p>\u4EE5\u4E0B\u662F <code>fiber</code> \u4E2D\u7684\u4E00\u4E9B\u91CD\u8981\u5C5E\u6027\uFF1A</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token comment">// \u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u6307 DOM \u8282\u70B9</span>
  <span class="token literal-property property">stateNode</span><span class="token operator">:</span> any<span class="token punctuation">,</span>

  <span class="token comment">// \u5F62\u6210\u5217\u8868\u7ED3\u6784</span>
  <span class="token keyword">return</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">child</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sibling</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

  <span class="token comment">// \u66F4\u65B0\u76F8\u5173</span>
  <span class="token literal-property property">pendingProps</span><span class="token operator">:</span> any<span class="token punctuation">,</span>  <span class="token comment">// \u65B0\u7684 props</span>
  <span class="token literal-property property">memoizedProps</span><span class="token operator">:</span> any<span class="token punctuation">,</span>  <span class="token comment">// \u65E7\u7684 props</span>
  <span class="token comment">// \u5B58\u50A8 setState \u4E2D\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570</span>
  <span class="token literal-property property">updateQueue</span><span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">memoizedState</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token comment">// \u65E7\u7684 state</span>

  <span class="token comment">// \u8C03\u5EA6\u76F8\u5173</span>
  <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>  <span class="token comment">// \u4EFB\u52A1\u8FC7\u671F\u65F6\u95F4</span>

  <span class="token comment">// \u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u6BCF\u4E2A fiber \u90FD\u6709\u4E00\u4E2A\u66FF\u8EAB fiber</span>
  <span class="token comment">// \u5728\u66F4\u65B0\u8FC7\u7A0B\u4E2D\uFF0C\u6240\u6709\u7684\u64CD\u4F5C\u90FD\u4F1A\u5728\u66FF\u8EAB\u4E0A\u5B8C\u6210\uFF0C\u5F53\u6E32\u67D3\u5B8C\u6210\u540E\uFF0C</span>
  <span class="token comment">// \u66FF\u8EAB\u4F1A\u4EE3\u66FF\u672C\u8EAB</span>
  <span class="token literal-property property">alternate</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

  <span class="token comment">// \u5148\u7B80\u5355\u8BA4\u4E3A\u662F\u66F4\u65B0 DOM \u76F8\u5173\u7684\u5185\u5BB9</span>
  <span class="token literal-property property">effectTag</span><span class="token operator">:</span> SideEffectTag<span class="token punctuation">,</span> <span class="token comment">// \u6307\u8FD9\u4E2A\u8282\u70B9\u9700\u8981\u8FDB\u884C\u7684 DOM \u64CD\u4F5C</span>
  <span class="token comment">// \u4EE5\u4E0B\u4E09\u4E2A\u5C5E\u6027\u4E5F\u4F1A\u5F62\u6210\u4E00\u4E2A\u94FE\u8868</span>
  <span class="token literal-property property">nextEffect</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0B\u4E00\u4E2A\u9700\u8981\u8FDB\u884C DOM \u64CD\u4F5C\u7684\u8282\u70B9</span>
  <span class="token literal-property property">firstEffect</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// \u7B2C\u4E00\u4E2A\u9700\u8981\u8FDB\u884C DOM \u64CD\u4F5C\u7684\u8282\u70B9</span>
  <span class="token literal-property property">lastEffect</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u540E\u4E00\u4E2A\u9700\u8981\u8FDB\u884C DOM \u64CD\u4F5C\u7684\u8282\u70B9\uFF0C\u540C\u65F6\u4E5F\u53EF\u7528\u4E8E\u6062\u590D\u4EFB\u52A1</span>
  <span class="token operator">...</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u603B\u7684\u6765\u8BF4\uFF0C\u53EF\u4EE5\u8BA4\u4E3A <code>fiber</code> \u5C31\u662F\u4E00\u4E2A\u5DE5\u4F5C\u5355\u5143\u7684\u6570\u636E\u7ED3\u6784\u8868\u73B0\uFF0C\u5F53\u7136\u5B83\u540C\u6837\u4E5F\u662F\u8C03\u7528\u6808\u4E2D\u7684\u4E00\u4E2A\u91CD\u8981\u7EC4\u6210\u90E8\u5206\u3002</p><blockquote><p>Fiber \u548C fiber \u4E0D\u662F\u540C\u4E00\u4E2A\u6982\u5FF5\u3002\u524D\u8005\u4EE3\u8868\u65B0\u7684\u8C03\u548C\u5668\uFF0C\u540E\u8005\u4EE3\u8868 fiber node\uFF0C\u4E5F\u53EF\u4EE5\u8BA4\u4E3A\u662F\u6539\u8FDB\u540E\u7684\u865A\u62DF DOM\u3002</p></blockquote><h2 id="\u8C03\u5EA6\u5668" tabindex="-1"><a class="header-anchor" href="#\u8C03\u5EA6\u5668" aria-hidden="true">#</a> \u8C03\u5EA6\u5668</h2><p>\u6BCF\u6B21\u6709\u65B0\u7684\u66F4\u65B0\u4EFB\u52A1\u53D1\u751F\u7684\u65F6\u5019\uFF0C\u8C03\u5EA6\u5668\u90FD\u4F1A\u6309\u7167\u7B56\u7565\u7ED9\u8FD9\u4E9B\u4EFB\u52A1\u5206\u914D\u4E00\u4E2A\u4F18\u5148\u7EA7\u3002\u6BD4\u5982\u8BF4\u52A8\u753B\u7684\u66F4\u65B0\u4F18\u5148\u7EA7\u4F1A\u9AD8\u70B9\uFF0C\u79BB\u5C4F\u5143\u7D20\u7684\u66F4\u65B0\u4F18\u5148\u7EA7\u4F1A\u4F4E\u70B9\u3002</p><p>\u901A\u8FC7\u8FD9\u4E2A\u4F18\u5148\u7EA7\u53EF\u4EE5\u83B7\u53D6\u4E00\u4E2A\u8BE5\u66F4\u65B0\u4EFB\u52A1\u5FC5\u987B\u6267\u884C\u7684\u622A\u6B62\u65F6\u95F4\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8\u90A3\u4E48\u622A\u6B62\u65F6\u95F4\u5C31\u8D8A\u8FD1\uFF0C\u53CD\u4E4B\u4EA6\u7136\u3002\u8FD9\u4E2A\u622A\u6B62\u65F6\u95F4\u662F\u7528\u6765\u5224\u65AD\u8BE5\u4EFB\u52A1\u662F\u5426\u5DF2\u7ECF\u8FC7\u671F\uFF0C\u5982\u679C\u8FC7\u671F\u7684\u8BDD\u5C31\u4F1A\u9A6C\u4E0A\u6267\u884C\u8BE5\u4EFB\u52A1\u3002</p><p>\u7136\u540E\u8C03\u5EA6\u5668\u901A\u8FC7\u5B9E\u73B0 <code>requestIdleCallback</code> \u51FD\u6570\u6765\u505A\u5230\u5728\u6D4F\u89C8\u5668\u7A7A\u95F2\u7684\u65F6\u5019\u53BB\u6267\u884C\u8FD9\u4E9B\u66F4\u65B0\u4EFB\u52A1\u3002</p><p>\u8FD9\u5176\u4E2D\u7684\u5B9E\u73B0\u539F\u7406\u7565\u5FAE\u590D\u6742\u3002\u7B80\u5355\u6765\u8BF4\uFF0C\u5C31\u662F\u901A\u8FC7\u5B9A\u65F6\u5668\u7684\u65B9\u5F0F\uFF0C\u6765\u83B7\u53D6\u6BCF\u4E00\u5E27\u7684\u7ED3\u675F\u65F6\u95F4\u3002\u5F97\u5230\u6BCF\u4E00\u5E27\u7684\u7ED3\u675F\u65F6\u95F4\u4EE5\u540E\u5C31\u80FD\u5224\u65AD\u5F53\u4E0B\u8DDD\u79BB\u7ED3\u675F\u65F6\u95F4\u7684\u4E00\u4E2A\u5DEE\u503C\u3002</p><p>\u5982\u679C\u8FD8\u672A\u5230\u7ED3\u675F\u65F6\u95F4\uFF0C\u90A3\u4E48\u4E5F\u5C31\u610F\u5473\u7740\u53EF\u4EE5\u7EE7\u7EED\u6267\u884C\u66F4\u65B0\u4EFB\u52A1\uFF1B\u5982\u679C\u5DF2\u7ECF\u8FC7\u4E86\u7ED3\u675F\u65F6\u95F4\uFF0C\u90A3\u4E48\u5C31\u610F\u5473\u7740\u5F53\u524D\u5E27\u5DF2\u7ECF\u6CA1\u6709\u65F6\u95F4\u7ED9\u6267\u884C\u4EFB\u52A1\u4E86\uFF0C\u5FC5\u987B\u628A\u6267\u884C\u6743\u4EA4\u8FD8\u7ED9\u6D4F\u89C8\u5668\uFF0C\u4E5F\u5C31\u662F\u6253\u65AD\u4EFB\u52A1\u7684\u6267\u884C\u3002</p><p>\u53E6\u5916\u5F53\u5F00\u59CB\u6267\u884C\u66F4\u65B0\u4EFB\u52A1\uFF08\u4E5F\u5C31\u662F\u5BFB\u627E\u5DE5\u4F5C\u5355\u5143\u5E76\u6267\u884C\u7684\u8FC7\u7A0B\uFF09\u65F6\uFF0C\u5982\u679C\u6709\u65B0\u7684\u66F4\u65B0\u4EFB\u52A1\u8FDB\u6765\uFF0C\u90A3\u4E48\u8C03\u5EA6\u5668\u5C31\u4F1A\u6309\u7167\u4E24\u8005\u7684\u4F18\u5148\u7EA7\u5927\u5C0F\u6765\u8FDB\u884C\u51B3\u7B56\u3002\u5982\u679C\u65B0\u7684\u4EFB\u52A1\u4F18\u5148\u7EA7\u5C0F\uFF0C\u90A3\u4E48\u5F53\u7136\u7EE7\u7EED\u5F53\u4E0B\u7684\u4EFB\u52A1\uFF1B\u5982\u679C\u65B0\u7684\u4EFB\u52A1\u4F18\u5148\u7EA7\u5927\uFF0C\u90A3\u4E48\u4F1A\u6253\u65AD\u4EFB\u52A1\u5E76\u5F00\u59CB\u65B0\u7684\u4EFB\u52A1\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u5F53\u4EA4\u4E92\u4E8B\u4EF6\u8C03\u7528 <code>setState</code> \u540E\uFF0C\u4F1A\u89E6\u53D1\u6279\u91CF\u66F4\u65B0\uFF0C\u5728\u6574\u4E2A\u4EA4\u4E92\u4E8B\u4EF6\u56DE\u8C03\u6267\u884C\u5B8C\u4E4B\u524D <code>state</code> \u90FD\u4E0D\u4F1A\u53D1\u751F\u53D8\u66F4\u3002</p><p>\u56DE\u8C03\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u5F00\u59CB\u66F4\u65B0\u4EFB\u52A1\uFF0C\u5E76\u89E6\u53D1\u8C03\u5EA6\u3002\u8C03\u5EA6\u5668\u4F1A\u7ED9\u8FD9\u4E9B\u66F4\u65B0\u4EFB\u52A1\u4E00\u4E00\u8BBE\u7F6E\u4F18\u5148\u7EA7\uFF0C\u5E76\u4E14\u5728\u6D4F\u89C8\u5668\u7A7A\u95F2\u7684\u65F6\u5019\u53BB\u6267\u884C\u4ED6\u4EEC\uFF0C\u5F53\u7136\u4EFB\u52A1\u8FC7\u671F\u9664\u5916\uFF08\u4F1A\u7ACB\u523B\u89E6\u53D1\u66F4\u65B0\uFF0C\u4E0D\u518D\u7B49\u5F85\uFF09\u3002</p><p>\u5982\u679C\u5728\u6267\u884C\u66F4\u65B0\u4EFB\u52A1\u7684\u65F6\u5019\uFF0C\u6709\u65B0\u7684\u4EFB\u52A1\u8FDB\u6765\uFF0C\u4F1A\u5224\u65AD\u4E24\u4E2A\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u9AD8\u4F4E\u3002\u5047\u5982\u65B0\u4EFB\u52A1\u4F18\u5148\u7EA7\u9AD8\uFF0C\u90A3\u4E48\u6253\u65AD\u65E7\u7684\u4EFB\u52A1\uFF0C\u91CD\u65B0\u5F00\u59CB\uFF0C\u5426\u5219\u7EE7\u7EED\u6267\u884C\u4EFB\u52A1\u3002</p>`,15);function u(s,k){return a(),p(t,null,[l,e("img",{src:s.$withBase("/assets/reactIloveDeveplo/16c14ea212e58566.png"),alt:"demo"},null,8,r),i],64)}var m=o(c,[["render",u]]);export{m as default};
