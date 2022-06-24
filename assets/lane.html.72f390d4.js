import{_ as t,r as c,o as r,c as l,b as s,d as o,a,e as n}from"./app.013e756e.js";const d={},i=a('<p>\u4E0A\u4E00\u8282\u63D0\u5230<code>Scheduler</code>\u4E0E<code>React</code>\u662F\u4E24\u5957<code>\u4F18\u5148\u7EA7</code>\u673A\u5236\u3002\u5728<code>React</code>\u4E2D\uFF0C\u5B58\u5728\u591A\u79CD\u4F7F\u7528\u4E0D\u540C<code>\u4F18\u5148\u7EA7</code>\u7684\u60C5\u51B5\uFF0C\u6BD4\u5982\uFF1A</p><p>\u6CE8\uFF1A\u4EE5\u4E0B\u4F8B\u5B50\u7686\u4E3A<code>Concurrent Mode</code>\u5F00\u542F\u60C5\u51B5</p><ul><li><p>\u8FC7\u671F\u4EFB\u52A1\u6216\u8005\u540C\u6B65\u4EFB\u52A1\u4F7F\u7528<code>\u540C\u6B65</code>\u4F18\u5148\u7EA7</p></li><li><p>\u7528\u6237\u4EA4\u4E92\u4EA7\u751F\u7684\u66F4\u65B0\uFF08\u6BD4\u5982\u70B9\u51FB\u4E8B\u4EF6\uFF09\u4F7F\u7528\u9AD8\u4F18\u5148\u7EA7</p></li><li><p>\u7F51\u7EDC\u8BF7\u6C42\u4EA7\u751F\u7684\u66F4\u65B0\u4F7F\u7528\u4E00\u822C\u4F18\u5148\u7EA7</p></li><li><p><code>Suspense</code>\u4F7F\u7528\u4F4E\u4F18\u5148\u7EA7</p></li></ul><p><code>React</code>\u9700\u8981\u8BBE\u8BA1\u4E00\u5957\u6EE1\u8DB3\u5982\u4E0B\u9700\u8981\u7684<code>\u4F18\u5148\u7EA7</code>\u673A\u5236\uFF1A</p><ul><li><p>\u53EF\u4EE5\u8868\u793A<code>\u4F18\u5148\u7EA7</code>\u7684\u4E0D\u540C</p></li><li><p>\u53EF\u80FD\u540C\u65F6\u5B58\u5728\u51E0\u4E2A\u540C<code>\u4F18\u5148\u7EA7</code>\u7684<code>\u66F4\u65B0</code>\uFF0C\u6240\u4EE5\u8FD8\u5F97\u80FD\u8868\u793A<code>\u6279</code>\u7684\u6982\u5FF5</p></li><li><p>\u65B9\u4FBF\u8FDB\u884C<code>\u4F18\u5148\u7EA7</code>\u76F8\u5173\u8BA1\u7B97</p></li></ul><p>\u4E3A\u4E86\u6EE1\u8DB3\u5982\u4E0A\u9700\u6C42\uFF0C<code>React</code>\u8BBE\u8BA1\u4E86<code>lane</code>\u6A21\u578B\u3002\u63A5\u4E0B\u6765\u6765\u770B<code>lane</code>\u6A21\u578B\u5982\u4F55\u6EE1\u8DB3\u4EE5\u4E0A3\u4E2A\u6761\u4EF6\u3002</p><h2 id="\u8868\u793A\u4F18\u5148\u7EA7\u7684\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u8868\u793A\u4F18\u5148\u7EA7\u7684\u4E0D\u540C" aria-hidden="true">#</a> \u8868\u793A\u4F18\u5148\u7EA7\u7684\u4E0D\u540C</h2><p>\u60F3\u8C61\u4F60\u8EAB\u5904\u8D5B\u8F66\u573A\u3002</p>',8),k=["src"],u=a(`<p>\u4E0D\u540C\u7684\u8D5B\u8F66\u75BE\u9A70\u5728\u4E0D\u540C\u7684\u8D5B\u9053\u3002\u5185\u5708\u7684\u8D5B\u9053\u603B\u957F\u5EA6\u66F4\u77ED\uFF0C\u5916\u5708\u66F4\u957F\u3002\u67D0\u51E0\u4E2A\u4E34\u8FD1\u7684\u8D5B\u9053\u7684\u957F\u5EA6\u53EF\u4EE5\u770B\u4F5C\u5DEE\u4E0D\u591A\u957F\u3002</p><p><code>lane</code>\u6A21\u578B\u501F\u9274\u4E86\u540C\u6837\u7684\u6982\u5FF5\uFF0C\u4F7F\u752831\u4F4D\u7684\u4E8C\u8FDB\u5236\u8868\u793A31\u6761\u8D5B\u9053\uFF0C\u4F4D\u6570\u8D8A\u5C0F\u7684\u8D5B\u9053<code>\u4F18\u5148\u7EA7</code>\u8D8A\u9AD8\uFF0C\u67D0\u4E9B\u76F8\u90BB\u7684\u8D5B\u9053\u62E5\u6709\u76F8\u540C<code>\u4F18\u5148\u7EA7</code>\u3002</p><p>\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">NoLanes</span><span class="token operator">:</span> Lanes <span class="token operator">=</span> <span class="token comment">/*                        */</span> <span class="token number">0b0000000000000000000000000000000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">NoLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*                          */</span> <span class="token number">0b0000000000000000000000000000000</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">SyncLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*                        */</span> <span class="token number">0b0000000000000000000000000000001</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">SyncBatchedLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*                 */</span> <span class="token number">0b0000000000000000000000000000010</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">InputDiscreteHydrationLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*      */</span> <span class="token number">0b0000000000000000000000000000100</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">InputDiscreteLanes</span><span class="token operator">:</span> Lanes <span class="token operator">=</span> <span class="token comment">/*                    */</span> <span class="token number">0b0000000000000000000000000011000</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">InputContinuousHydrationLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*           */</span> <span class="token number">0b0000000000000000000000000100000</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">InputContinuousLanes</span><span class="token operator">:</span> Lanes <span class="token operator">=</span> <span class="token comment">/*                  */</span> <span class="token number">0b0000000000000000000000011000000</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">DefaultHydrationLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*            */</span> <span class="token number">0b0000000000000000000000100000000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">DefaultLanes</span><span class="token operator">:</span> Lanes <span class="token operator">=</span> <span class="token comment">/*                   */</span> <span class="token number">0b0000000000000000000111000000000</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">TransitionHydrationLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*                */</span> <span class="token number">0b0000000000000000001000000000000</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">TransitionLanes</span><span class="token operator">:</span> Lanes <span class="token operator">=</span> <span class="token comment">/*                       */</span> <span class="token number">0b0000000001111111110000000000000</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">RetryLanes</span><span class="token operator">:</span> Lanes <span class="token operator">=</span> <span class="token comment">/*                            */</span> <span class="token number">0b0000011110000000000000000000000</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">SomeRetryLane</span><span class="token operator">:</span> Lanes <span class="token operator">=</span> <span class="token comment">/*                  */</span> <span class="token number">0b0000010000000000000000000000000</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">SelectiveHydrationLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*          */</span> <span class="token number">0b0000100000000000000000000000000</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> NonIdleLanes <span class="token operator">=</span> <span class="token comment">/*                                 */</span> <span class="token number">0b0000111111111111111111111111111</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">IdleHydrationLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*               */</span> <span class="token number">0b0001000000000000000000000000000</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">IdleLanes</span><span class="token operator">:</span> Lanes <span class="token operator">=</span> <span class="token comment">/*                             */</span> <span class="token number">0b0110000000000000000000000000000</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">OffscreenLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*                   */</span> <span class="token number">0b1000000000000000000000000000000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m=n("\u4F60\u53EF\u4EE5\u5728"),v={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberLane.js#L77-L107",target:"_blank",rel:"noopener noreferrer"},b=n("\u8FD9\u91CC"),y=n("\u770B\u5230"),L=s("code",null,"lane",-1),h=n("\u7684\u5B9A\u4E49"),w=a(`<p>\u5176\u4E2D\uFF0C\u540C\u6B65\u4F18\u5148\u7EA7\u5360\u7528\u7684\u8D5B\u9053\u4E3A\u7B2C\u4E00\u4F4D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">SyncLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*                        */</span> <span class="token number">0b0000000000000000000000000000001</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4ECE<code>SyncLane</code>\u5F80\u4E0B\u4E00\u76F4\u5230<code>SelectiveHydrationLane</code>\uFF0C\u8D5B\u9053\u7684<code>\u4F18\u5148\u7EA7</code>\u9010\u6B65\u964D\u4F4E\u3002</p><h2 id="\u8868\u793A-\u6279-\u7684\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u8868\u793A-\u6279-\u7684\u6982\u5FF5" aria-hidden="true">#</a> \u8868\u793A\u201C\u6279\u201D\u7684\u6982\u5FF5</h2><p>\u53EF\u4EE5\u770B\u5230\u5176\u4E2D\u6709\u51E0\u4E2A\u53D8\u91CF\u5360\u7528\u4E86\u51E0\u6761\u8D5B\u9053\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">InputDiscreteLanes</span><span class="token operator">:</span> Lanes <span class="token operator">=</span> <span class="token comment">/*                    */</span> <span class="token number">0b0000000000000000000000000011000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">DefaultLanes</span><span class="token operator">:</span> Lanes <span class="token operator">=</span> <span class="token comment">/*                   */</span> <span class="token number">0b0000000000000000000111000000000</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">TransitionLanes</span><span class="token operator">:</span> Lanes <span class="token operator">=</span> <span class="token comment">/*                       */</span> <span class="token number">0b0000000001111111110000000000000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5C31\u662F<code>\u6279</code>\u7684\u6982\u5FF5\uFF0C\u88AB\u79F0\u4F5C<code>lanes</code>\uFF08\u533A\u522B\u4E8E<code>\u4F18\u5148\u7EA7</code>\u7684<code>lane</code>\uFF09\u3002</p><p>\u5176\u4E2D<code>InputDiscreteLanes</code>\u662F\u201C\u7528\u6237\u4EA4\u4E92\u201D\u89E6\u53D1\u66F4\u65B0\u4F1A\u62E5\u6709\u7684<code>\u4F18\u5148\u7EA7</code>\u8303\u56F4\u3002</p><p><code>DefaultLanes</code>\u662F\u201C\u8BF7\u6C42\u6570\u636E\u8FD4\u56DE\u540E\u89E6\u53D1\u66F4\u65B0\u201D\u62E5\u6709\u7684<code>\u4F18\u5148\u7EA7</code>\u8303\u56F4\u3002</p><p><code>TransitionLanes</code>\u662F<code>Suspense</code>\u3001<code>useTransition</code>\u3001<code>useDeferredValue</code>\u62E5\u6709\u7684<code>\u4F18\u5148\u7EA7</code>\u8303\u56F4\u3002</p><p>\u8FD9\u5176\u4E2D\u6709\u4E2A\u7EC6\u8282\uFF0C\u8D8A\u4F4E<code>\u4F18\u5148\u7EA7</code>\u7684<code>lanes</code>\u5360\u7528\u7684\u4F4D\u8D8A\u591A\u3002\u6BD4\u5982<code>InputDiscreteLanes</code>\u5360\u4E862\u4E2A\u4F4D\uFF0C<code>TransitionLanes</code>\u5360\u4E869\u4E2A\u4F4D\u3002</p><p>\u539F\u56E0\u5728\u4E8E\uFF1A\u8D8A\u4F4E<code>\u4F18\u5148\u7EA7</code>\u7684<code>\u66F4\u65B0</code>\u8D8A\u5BB9\u6613\u88AB\u6253\u65AD\uFF0C\u5BFC\u81F4\u79EF\u538B\u4E0B\u6765\uFF0C\u6240\u4EE5\u9700\u8981\u66F4\u591A\u7684\u4F4D\u3002\u76F8\u53CD\uFF0C\u6700\u9AD8\u4F18\u7684\u540C\u6B65\u66F4\u65B0\u7684<code>SyncLane</code>\u4E0D\u9700\u8981\u591A\u4F59\u7684<code>lanes</code>\u3002</p><h2 id="\u65B9\u4FBF\u8FDB\u884C\u4F18\u5148\u7EA7\u76F8\u5173\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#\u65B9\u4FBF\u8FDB\u884C\u4F18\u5148\u7EA7\u76F8\u5173\u8BA1\u7B97" aria-hidden="true">#</a> \u65B9\u4FBF\u8FDB\u884C\u4F18\u5148\u7EA7\u76F8\u5173\u8BA1\u7B97</h2><p>\u65E2\u7136<code>lane</code>\u5BF9\u5E94\u4E86\u4E8C\u8FDB\u5236\u7684\u4F4D\uFF0C\u90A3\u4E48<code>\u4F18\u5148\u7EA7</code>\u76F8\u5173\u8BA1\u7B97\u5176\u5B9E\u5C31\u662F\u4F4D\u8FD0\u7B97\u3002</p><p>\u6BD4\u5982\uFF1A</p><p>\u8BA1\u7B97<code>a</code>\u3001<code>b</code>\u4E24\u4E2A<code>lane</code>\u662F\u5426\u5B58\u5728\u4EA4\u96C6\uFF0C\u53EA\u9700\u8981\u5224\u65AD<code>a</code>\u4E0E<code>b</code>\u6309\u4F4D\u4E0E\u7684\u7ED3\u679C\u662F\u5426\u4E3A<code>0</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">includesSomeLane</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> Lanes <span class="token operator">|</span> Lane<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> Lanes <span class="token operator">|</span> Lane</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;</span> b<span class="token punctuation">)</span> <span class="token operator">!==</span> NoLanes<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BA1\u7B97<code>b</code>\u8FD9\u4E2A<code>lanes</code>\u662F\u5426\u662F<code>a</code>\u5BF9\u5E94\u7684<code>lanes</code>\u7684\u5B50\u96C6\uFF0C\u53EA\u9700\u8981\u5224\u65AD<code>a</code>\u4E0E<code>b</code>\u6309\u4F4D\u4E0E\u7684\u7ED3\u679C\u662F\u5426\u4E3A<code>b</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isSubsetOfLanes</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">set</span><span class="token operator">:</span> Lanes<span class="token punctuation">,</span> <span class="token literal-property property">subset</span><span class="token operator">:</span> Lanes <span class="token operator">|</span> Lane</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>set <span class="token operator">&amp;</span> subset<span class="token punctuation">)</span> <span class="token operator">===</span> subset<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u4E24\u4E2A<code>lane</code>\u6216<code>lanes</code>\u7684\u4F4D\u5408\u5E76\u53EA\u9700\u8981\u6267\u884C\u6309\u4F4D\u6216\u64CD\u4F5C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mergeLanes</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> Lanes <span class="token operator">|</span> Lane<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> Lanes <span class="token operator">|</span> Lane</span><span class="token punctuation">)</span><span class="token operator">:</span> Lanes <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">|</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE<code>set</code>\u5BF9\u5E94<code>lanes</code>\u4E2D\u79FB\u9664<code>subset</code>\u5BF9\u5E94<code>lane</code>\uFF08\u6216<code>lanes</code>\uFF09\uFF0C\u53EA\u9700\u8981\u5BF9<code>subset</code>\u7684<code>lane</code>\uFF08\u6216<code>lanes</code>\uFF09\u6267\u884C\u6309\u4F4D\u975E\uFF0C\u7ED3\u679C\u518D\u5BF9<code>set</code>\u6267\u884C\u6309\u4F4D\u4E0E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">removeLanes</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">set</span><span class="token operator">:</span> Lanes<span class="token punctuation">,</span> <span class="token literal-property property">subset</span><span class="token operator">:</span> Lanes <span class="token operator">|</span> Lane</span><span class="token punctuation">)</span><span class="token operator">:</span> Lanes <span class="token punctuation">{</span>
  <span class="token keyword">return</span> set <span class="token operator">&amp;</span> <span class="token operator">~</span>subset<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),_=n("\u66F4\u591A\u4F4D\u8FD0\u7B97\u53C2\u8003"),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators",target:"_blank",rel:"noopener noreferrer"},f=n("MDN"),x=a('<h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u8FD9\u5C31\u662F<code>React</code>\u7684\u4F18\u5148\u7EA7\u6A21\u578B<code>lane</code>\u6A21\u578B\u3002</p><p>\u81F3\u6B64\uFF0C\u5DF2\u7ECF\u4E86\u89E3<code>Fiber</code>\u67B6\u6784\u3001<code>\u66F4\u65B0</code>\u7684<code>\u4F18\u5148\u7EA7</code>\u3001<code>Scheduler</code>\u7684\u5B9E\u73B0\u3001<code>lane</code>\u6A21\u578B\u3002\u4ECE\u4E0B\u4E00\u8282\u5F00\u59CB\uFF0C\u4F1A\u9010\u6B65\u8BB2\u89E3<code>Concurrent Mode</code>\u7684\u5404\u79CD\u5E94\u7528\u3002</p>',3);function j(p,S){const e=c("ExternalLinkIcon");return r(),l("div",null,[i,s("img",{src:p.$withBase("/assets/react/lane.jpeg"),alt:"30sec"},null,8,k),u,s("blockquote",null,[s("p",null,[m,s("a",v,[b,o(e)]),y,L,h])]),w,s("blockquote",null,[s("p",null,[_,s("a",g,[f,o(e)])])]),x])}var D=t(d,[["render",j],["__file","lane.html.vue"]]);export{D as default};
