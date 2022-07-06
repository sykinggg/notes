import{_ as n,a as s}from"./app.adb48220.js";const a={},e=s(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> Stack</h1><p>\u5728 React \u7684\u66F4\u65B0\u8FC7\u7A0B\u4E2D\u6709\u4E00\u4E2A<code>Stack</code>\u6A21\u5757\uFF0C\u5728\u904D\u5386\u6BCF\u4E2A\u8282\u70B9\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u626E\u6F14\u5B58\u50A8\u4E0A\u4E0B\u6587\u7684\u4E00\u4E2A\u89D2\u8272\uFF0C\u4ED6\u4F1A\u5B58\u50A8\u5F88\u591A\u4FE1\u606F\uFF0C\u8BA9\u6765\u4E00\u4E00\u5206\u89E3\u8BB2\u89E3\u3002</p><p>\u9996\u5148\u6765\u8BB2\u4E00\u4E0B<code>Stack</code>\u7684\u6784\u6210</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">valueStack</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>

<span class="token keyword">function</span> createCursor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>defaultValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> StackCursor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">current</span><span class="token operator">:</span> defaultValue<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token keyword">return</span> index <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> pop<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>cursor<span class="token operator">:</span> StackCursor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  cursor<span class="token punctuation">.</span>current <span class="token operator">=</span> valueStack<span class="token punctuation">[</span>index<span class="token punctuation">]</span>

  valueStack<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span>

  index<span class="token operator">--</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> push<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>cursor<span class="token operator">:</span> StackCursor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  index<span class="token operator">++</span>

  valueStack<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> cursor<span class="token punctuation">.</span>current

  cursor<span class="token punctuation">.</span>current <span class="token operator">=</span> value
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u7CBE\u7B80\u4E4B\u540E\u7684\u6838\u5FC3\u6A21\u5757\u4EE3\u7801\u5982\u4E0A\uFF0C\u6240\u6709\u5185\u5BB9\u4F1A\u5B58\u50A8\u5728<code>valueStack</code>\u8FD9\u4E2A\u6570\u7EC4\u4E0A\uFF0C\u603B\u4F53\u7684\u64CD\u4F5C\u90FD\u975E\u5E38\u7B80\u5355\uFF0C\u76F8\u4FE1\u5927\u5BB6\u554A\u90FD\u80FD\u770B\u5F97\u61C2\u3002</p><p>\u800C\u5728\u8FD9\u4E2A\u552F\u4E00\u7684\u6570\u7EC4\u4E0A\u8981\u5B58\u50A8\u4EE5\u4E0B\u4E0D\u600E\u4E48\u76F8\u5173\u7684\u6570\u636E\uFF1A</p><ul><li><p><code>childContext</code></p></li><li><p><code>NewContext</code></p></li><li><p><code>HostContext</code></p></li><li><p><code>HostContainer</code></p></li></ul><p>\u4E3A\u4E86\u80FD\u591F\u5728\u540C\u4E00\u4E2A\u6808\u4E2D\u533A\u5206\u4E0D\u540C\u7684\u529F\u80FD\uFF0CReact \u8BBE\u8BA1\u4E86\u4E00\u4E2A<code>StackCursor</code>\u7C7B\u578B\uFF0C\u7528\u6765\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B\u7684\u6570\u636E\u7684\u5F53\u524D\u503C\u3002\u5BF9\u4E8E<code>cursor</code>\u7684\u64CD\u4F5C\u5F88\u7B80\u5355\uFF0C\u5165\u6808\u7684\u65F6\u5019\u8BBE\u7F6E<code>cursor.current</code>\u4E3A\u65B0\u7684\u503C\uFF0C\u51FA\u6808\u7684\u65F6\u5019\u8BBE\u7F6E<code>cursor.current</code>\u4E3A\u4E0A\u4E00\u4E2A\u503C</p><p>\u4F46\u662F\u8FD9\u91CC\u8FD8\u5B58\u5728\u4E00\u4E2A\u95EE\u9898\uFF0C\u90A3\u5C31\u662F\u6570\u636E\u5165\u6808\u7684\u987A\u5E8F\uFF0C\u5982\u679C\u5165\u6808\u4F4D\u7F6E\u51FA\u6808\u7684\u65F6\u5019\u7528\u7684<code>cursor</code>\u4E0D\u540C\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u6570\u636E\u9519\u4E71\u3002React \u4E2D\u9632\u6B62\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\u7684\u65B9\u5F0F\uFF0C\u662F\u901A\u8FC7<strong>\u6BCF\u4E2A\u8282\u70B9\u5728 beginWork \u7684\u65F6\u5019\u5165\u6808\uFF0C\u5728 completeUnitOfWork \u7684\u65F6\u5019\u51FA\u6808\uFF0C\u4E25\u683C\u6309\u7167\u904D\u5386\u6811\u7684\u987A\u5E8F</strong></p><h1 id="childcontext" tabindex="-1"><a class="header-anchor" href="#childcontext" aria-hidden="true">#</a> childContext</h1><p><code>childContext</code>\u662F React \u7684\u9057\u7559 API\uFF0C\u5728 17 \u7248\u672C\u4E2D\u4F1A\u88AB\u79FB\u9664\uFF0C\u8BE5 API \u5BF9\u4E8E React \u6E32\u67D3\u7684\u6548\u7387\u5F71\u54CD\u5F88\u5927\uFF0C\u4E0D\u63A8\u8350\u7EE7\u7EED\u4F7F\u7528\u3002\u76EE\u524D React \u6E90\u7801\u4E2D\u8C03\u7528\u8BE5 API \u76F8\u5173\u7684\u65B9\u6CD5\u4F1A\u52A0\u4E0A<code>Legacy</code>\u5B57\u6837\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">contextStackCursor</span><span class="token operator">:</span> StackCursor<span class="token operator">&lt;</span>Object<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">createCursor</span><span class="token punctuation">(</span>emptyContextObject<span class="token punctuation">)</span>
<span class="token keyword">let</span> <span class="token literal-property property">didPerformWorkStackCursor</span><span class="token operator">:</span> StackCursor<span class="token operator">&lt;</span>boolean<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">createCursor</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u91CC\u5B58\u5728\u4E09\u4E2A<code>cursor</code></p><h2 id="contextstackcursor" tabindex="-1"><a class="header-anchor" href="#contextstackcursor" aria-hidden="true">#</a> contextStackCursor</h2><p>\u8BB0\u5F55\u5F53\u524D\u7EC4\u4EF6\u548C\u4ED6\u7684\u7236\u6811\u4E00\u8D77\u63D0\u4F9B\u7ED9\u5B50\u6811\u7684<code>childContext</code>\u5BF9\u8C61\uFF0C\u521D\u59CB\u9ED8\u8BA4\u662F<code>emptyContextObject {}</code>\u3002</p><p>\u5BF9<code>FiberRoot</code>\u4F1A\u6267\u884C\u7B2C\u4E00\u6B21<code>push</code>\uFF0C\u9664\u975E\u81EA\u884C\u8C03\u7528<code>renderSubtreeIntoContainer</code>\uFF0C\u4E0D\u7136<code>root</code>\u7684<code>context</code>\u90FD\u662F<code>{}</code>\uFF0C\u9664\u4E86\u521D\u6B21\u6E32\u67D3\uFF0C<code>push</code>\u7684\u503C\u90FD\u662F<code>false</code>\uFF0C\u8868\u660E\u76EE\u524D<code>context</code>\u6CA1\u6709\u53D8\u5316\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// updateHostRoot\u7684\u65F6\u5019\u4F1A\u8C03\u7528</span>
<span class="token keyword">function</span> <span class="token function">pushTopLevelContextObject</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
  <span class="token literal-property property">didChange</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token function">push</span><span class="token punctuation">(</span>contextStackCursor<span class="token punctuation">,</span> context<span class="token punctuation">,</span> fiber<span class="token punctuation">)</span>
  <span class="token function">push</span><span class="token punctuation">(</span>didPerformWorkStackCursor<span class="token punctuation">,</span> didChange<span class="token punctuation">,</span> fiber<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4E4B\u540E\u53EA\u6709<code>ClassComponent</code>\u80FD\u591F\u63D0\u4F9B<code>childContext</code>\uFF0C\u5728<code>updateClassComponent</code>\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u8C03\u7528<code>pushContextProvider</code>\u6765\u63A8\u5165\u65B0\u7684\u5B50\u6811<code>context</code>\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">pushContextProvider</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token keyword">const</span> instance <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>stateNode
  <span class="token keyword">const</span> memoizedMergedChildContext <span class="token operator">=</span>
    <span class="token punctuation">(</span>instance <span class="token operator">&amp;&amp;</span> instance<span class="token punctuation">.</span>__reactInternalMemoizedMergedChildContext<span class="token punctuation">)</span> <span class="token operator">||</span>
    emptyContextObject

  previousContext <span class="token operator">=</span> contextStackCursor<span class="token punctuation">.</span>current
  <span class="token function">push</span><span class="token punctuation">(</span>contextStackCursor<span class="token punctuation">,</span> memoizedMergedChildContext<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>
  <span class="token function">push</span><span class="token punctuation">(</span>
    didPerformWorkStackCursor<span class="token punctuation">,</span>
    didPerformWorkStackCursor<span class="token punctuation">.</span>current<span class="token punctuation">,</span>
    workInProgress<span class="token punctuation">,</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u8FD9\u91CC\u53EA\u662F\u4ECE<code>instance.__reactInternalMemoizedMergedChildContext</code>\u8BFB\u53D6\u5BF9\u8C61\uFF0C\u4F46\u662F\u5728<code>updateClassComponent</code>\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u7684\u65F6\u5019\u5E76\u6CA1\u6709\u8BA1\u7B97\u51FA\u65B0\u7684<code>state</code>\uFF0C\u6240\u4EE5\u662F\u5426\u6709\u65B0\u7684<code>context</code>\u4E5F\u662F\u672A\u77E5\u3002**\u6CE8\u610F\u8FD9\u91CC\u7ED9\u5168\u5C40\u53D8\u91CF<code>previousContext</code>\u8D4B\u503C\u4E86<code>contextStackCursor.current</code>\uFF0C\u6240\u4EE5\u4ED6\u662F\u5F53\u524D\u7EC4\u4EF6\u7684\u7236\u6811\u63D0\u4F9B\u7684<code>context</code>\u7684\u96C6\u5408\u3002**\u5728\u540E\u7EED<code>finishClassComponent</code>\u7684\u65F6\u5019\u5982\u679C<code>state</code>\u6216\u8005<code>props</code>\u6709\u66F4\u65B0\uFF0C\u90A3\u4E48\u9700\u8981\u91CD\u65B0\u8BA1\u7B97<code>context</code>\uFF0C\u4F1A\u6267\u884C<code>invalidateContextProvider</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">invalidateContextProvider</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">didChange</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> instance <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>stateNode

  <span class="token keyword">if</span> <span class="token punctuation">(</span>didChange<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mergedContext <span class="token operator">=</span> <span class="token function">processChildContext</span><span class="token punctuation">(</span>
      workInProgress<span class="token punctuation">,</span>
      type<span class="token punctuation">,</span>
      previousContext<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    instance<span class="token punctuation">.</span>__reactInternalMemoizedMergedChildContext <span class="token operator">=</span> mergedContext

    <span class="token function">pop</span><span class="token punctuation">(</span>didPerformWorkStackCursor<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>
    <span class="token function">pop</span><span class="token punctuation">(</span>contextStackCursor<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>
    <span class="token function">push</span><span class="token punctuation">(</span>contextStackCursor<span class="token punctuation">,</span> mergedContext<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>
    <span class="token function">push</span><span class="token punctuation">(</span>didPerformWorkStackCursor<span class="token punctuation">,</span> didChange<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">pop</span><span class="token punctuation">(</span>didPerformWorkStackCursor<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>
    <span class="token function">push</span><span class="token punctuation">(</span>didPerformWorkStackCursor<span class="token punctuation">,</span> didChange<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p><code>processChildContext</code>\u4F1A\u8BA1\u7B97\u51FA\u65B0\u7684<code>childContext</code>\uFF0C\u7136\u540E\u8D4B\u503C\u7ED9<code>__reactInternalMemoizedMergedChildContext</code>\uFF0C\u5E76\u4E14\u4E4B\u524D\u5BF9\u4E8E\u5F53\u524D\u7EC4\u4EF6\u5DF2\u7ECF<code>push</code>\u8FC7\u4E00\u6B21\u4E86\uFF0C\u6240\u4EE5\u8FD9\u91CC\u8981\u5148<code>pop</code>\u518D<code>push</code>\uFF0C\u800C\u4E14\u4E24\u4E2A<code>cursor</code>\u7684\u987A\u5E8F\u8981\u8C03\u6362\u3002\u800C\u5982\u679C\u65B0\u8001<code>context</code>\u90FD\u6CA1\u6709\u53D8\u5316\uFF0C\u4F1A\u8BBE\u7F6E<code>didPerformWorkStackCursor</code>\u4E3A<code>false</code>\uFF0C\u53EF\u4EE5\u4F18\u5316\u5B50\u6811\uFF0C\u4E0D\u9700\u8981\u6267\u884C\u4E0D\u5FC5\u8981\u7684\u66F4\u65B0\u3002<strong>\u6CE8\u610F\u8FD9\u91CC\u7684<code>didChange</code>\u8DDF<code>shouldComponentUpdate</code>\u6709\u5173\uFF0C\u53E6\u5916\u9700\u8981\u6CE8\u610F<code>PureComponent</code>\u4E0D\u4F1A\u5224\u65AD<code>context</code>\u662F\u5426\u53D8\u5316\u3002</strong></p><h2 id="didperformworkstackcursor" tabindex="-1"><a class="header-anchor" href="#didperformworkstackcursor" aria-hidden="true">#</a> didPerformWorkStackCursor</h2><p>\u8FD9\u4E2A\u5C31\u662F\u7528\u6765\u6807\u8BB0\u5B50\u6811\u7684<code>context</code>\u662F\u5426\u53D8\u5316\u7684\uFF0C\u5728\u4EE5\u4E0A\u7684\u4EE3\u7801\u4E2D\u5DF2\u7ECF\u5F88\u660E\u663E\u4E86\uFF0C\u6240\u4EE5\u5C31\u4E0D\u518D\u5206\u6790\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hasContextChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token keyword">return</span> didPerformWorkStackCursor<span class="token punctuation">.</span>current
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="newcontext" tabindex="-1"><a class="header-anchor" href="#newcontext" aria-hidden="true">#</a> NewContext</h1><p>\u8FD9\u4E2A\u662F\u65B0\u7684<code>Context API</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">valueCursor</span><span class="token operator">:</span> StackCursor<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">createCursor</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u76F8\u5BF9\u6765\u8BF4\u4ED6\u7684\u903B\u8F91\u4F1A\u7B80\u5355\u633A\u591A\uFF0C<code>Provider</code>\u5904\u7406\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> pushProvider<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>providerFiber<span class="token operator">:</span> Fiber<span class="token punctuation">,</span> <span class="token literal-property property">nextValue</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">context</span><span class="token operator">:</span> ReactContext<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> providerFiber<span class="token punctuation">.</span>type<span class="token punctuation">.</span>_context
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isPrimaryRenderer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">push</span><span class="token punctuation">(</span>valueCursor<span class="token punctuation">,</span> context<span class="token punctuation">.</span>_currentValue<span class="token punctuation">,</span> providerFiber<span class="token punctuation">)</span>
    context<span class="token punctuation">.</span>_currentValue <span class="token operator">=</span> nextValue
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">push</span><span class="token punctuation">(</span>valueCursor<span class="token punctuation">,</span> context<span class="token punctuation">.</span>_currentValue2<span class="token punctuation">,</span> providerFiber<span class="token punctuation">)</span>
    context<span class="token punctuation">.</span>_currentValue2 <span class="token operator">=</span> nextValue
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">popProvider</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">providerFiber</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> currentValue <span class="token operator">=</span> valueCursor<span class="token punctuation">.</span>current
  <span class="token function">pop</span><span class="token punctuation">(</span>valueCursor<span class="token punctuation">,</span> providerFiber<span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token literal-property property">context</span><span class="token operator">:</span> ReactContext<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">=</span> providerFiber<span class="token punctuation">.</span>type<span class="token punctuation">.</span>_context
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isPrimaryRenderer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context<span class="token punctuation">.</span>_currentValue <span class="token operator">=</span> currentValue
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    context<span class="token punctuation">.</span>_currentValue2 <span class="token operator">=</span> currentValue
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>ReactDOM \u4E2D<code>isPrimaryRenderer</code>\u4E3A<code>true</code>\uFF0C\u6CE8\u610F\u8FD9\u91CC\u8BBE\u7F6E\u4E86<code>context._currentValue</code>\uFF0C\u5728\u540E\u7EED\u8981\u7528\u5230<code>context</code>\u7684\u65F6\u5019\uFF0C\u6BD4\u5982\u901A\u8FC7<code>Consumer</code>\u8BFB\u53D6\u503C\uFF0C\u90A3\u4E48\u53EA\u9700\u8981\u8BFB\u53D6\u8FD9\u4E2A\u503C\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u5728<code>React16.6</code>\u4E4B\u540E\u5462\u589E\u52A0\u4E86<code>ClassComponent.contextType</code>\u5FEB\u901F\u8BA2\u9605\u65B0 API \u7684\u65B9\u5F0F\uFF0C\u8FD8\u6709<code>hooks</code>\u4E2D<code>functionalComponent</code>\u53EF\u4EE5\u4F7F\u7528<code>useContext</code>\u8BA2\u9605\u65B0 API\uFF0C\u6240\u4EE5\u5462\u8FD9\u91CC\u6709\u4E24\u4E2A\u65B9\u6CD5\u6765\u5904\u7406\u8FD9\u4E2A\u903B\u8F91\uFF1A</p><ul><li><p><code>propagateContextChange</code></p></li><li><p><code>readContext</code></p></li></ul><p>\u4EE3\u7801\u6709\u70B9\u957F\uFF0C\u7528\u4E2A gist \u6765\u65B9\u5427</p><p><code>propagateContextChange</code>\u5728<code>ContextProvider</code>\u68C0\u6D4B\u5230<code>context</code>\u7684\u503C\u6709\u53D8\u5316\u7684\u60C5\u51B5\u4E0B\u8C03\u7528\uFF0C\u4ED6\u4F1A\u904D\u5386\u4ED6\u7684\u5B50\u6811\uFF0C\u627E\u6709<code>firstContextDependency</code>\u5C5E\u6027\u7684<code>fiber</code>\uFF0C\u5E76\u68C0\u6D4B\u4ED6\u662F\u5426\u6709\u4EE5\u6765\u5F53\u524D\u7684<code>ContextProvider</code>\uFF0C\u5982\u679C\u6709\u7684\u8BDD\u4F1A\u5728\u8FD9\u4E2A\u7EC4\u4EF6\u4E0A\u521B\u5EFA\u4E00\u4E2A\u66F4\u65B0\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u66F4\u65B0\u7684<code>expirationTime</code>\u662F\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u66F4\u65B0\u7684<code>expirationTime</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5728\u8FD9\u4E2A\u6E32\u67D3\u5468\u671F\u80AF\u5B9A\u4F1A\u88AB\u6E32\u67D3\uFF0C\u56E0\u4E3A\u521B\u5EFA\u4E86\u66F4\u65B0\uFF0C\u6240\u4EE5\u80AF\u5B9A\u8981\u66F4\u65B0<code>expirationTime</code>\u540C\u65F6\u8FD8\u8981\u66F4\u65B0\u7236\u94FE\u4E0A\u7684<code>childExpirationTime</code>\u3002</p><p>\u90A3\u4E48<code>firstContextDependency</code>\u54EA\u91CC\u6765\u7684\u5462\uFF1F\u5C31\u662F\u5728\u7EC4\u4EF6\u5728\u8C03\u7528<code>readContext</code>\u7684\u65F6\u5019\uFF0C\u76EE\u524D\u80FD\u770B\u7684\u6E90\u7801\uFF0816.6\uFF09\u8FD8\u6CA1\u6709<code>hooks</code>\u7684\u6E90\u7801\uFF0C\u6240\u4EE5\u76EE\u524D\u80FD\u770B\u5230\u7684\u662F<code>ClassCompnent.contextType</code>\uFF0C\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\u4ED6\u7684\u4F9D\u8D56\u53EA\u4F1A\u6709\u4E00\u4E2A\uFF0C\u800C<code>hooks</code>\u662F\u53EF\u4EE5\u8BFB\u53D6\u591A\u4E2A\u7684\u3002</p><p><code>observedBits</code>\u5728\u76EE\u524D\u7684\u6E90\u7801\u4E2D\u6CA1\u770B\u5230\u4EC0\u4E48\u4F5C\u7528\uFF0C\u867D\u7136\u6E90\u7801\u4E2D<code>ContentConsumer</code>\u4E2D\u53EF\u4EE5\u4F7F\u7528<code>unstable_observedBits</code>\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u4F46\u662F\u76EE\u524D\u6CA1\u6709\u4EFB\u4F55\u8BF4\u660E\u8FD9\u662F\u7528\u6765\u5E72\u561B\u7684\u3002\u731C\u6D4B\u8DDF<code>hooks</code>\u6709\u5173\uFF1F</p><h1 id="hostcontext-hostcontainer" tabindex="-1"><a class="header-anchor" href="#hostcontext-hostcontainer" aria-hidden="true">#</a> HostContext &amp; HostContainer</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">contextStackCursor</span><span class="token operator">:</span> StackCursor<span class="token operator">&lt;</span>HostContext <span class="token operator">|</span> NoContextT<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">createCursor</span><span class="token punctuation">(</span>
  <span class="token constant">NO_CONTEXT</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token keyword">let</span> <span class="token literal-property property">contextFiberStackCursor</span><span class="token operator">:</span> StackCursor<span class="token operator">&lt;</span>Fiber <span class="token operator">|</span> NoContextT<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">createCursor</span><span class="token punctuation">(</span>
  <span class="token constant">NO_CONTEXT</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token keyword">let</span> <span class="token literal-property property">rootInstanceStackCursor</span><span class="token operator">:</span> StackCursor<span class="token operator">&lt;</span>Container <span class="token operator">|</span> NoContextT<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">createCursor</span><span class="token punctuation">(</span>
  <span class="token constant">NO_CONTEXT</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5185\u5BB9\u6709\uFF1A</p><h2 id="pushhostcontainer" tabindex="-1"><a class="header-anchor" href="#pushhostcontainer" aria-hidden="true">#</a> pushHostContainer</h2><p>\u5BF9\u4E8E<code>HostRoot</code>\u548C<code>Proatl</code>\u4ED6\u4EEC\u4F1A\u6709\u6302\u8F7D\u8282\u70B9\uFF0C\u6240\u4EE5\u4F1A\u6709<code>container</code></p><h2 id="pushhostcontext" tabindex="-1"><a class="header-anchor" href="#pushhostcontext" aria-hidden="true">#</a> pushHostContext</h2><p>\u8FD9\u4E2A\u662F\u7528\u6765\u5BF9\u539F\u751F\u8282\u70B9\u8FDB\u884C\u5165\u6808\u7684\u64CD\u4F5C\uFF0C\u4E3B\u8981\u8BB0\u5F55\u7684\u662F<code>NameSpace</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">HTML_NAMESPACE</span> <span class="token operator">=</span> <span class="token string">&#39;http://www.w3.org/1999/xhtml&#39;</span>
<span class="token keyword">const</span> <span class="token constant">MATH_NAMESPACE</span> <span class="token operator">=</span> <span class="token string">&#39;http://www.w3.org/1998/Math/MathML&#39;</span>
<span class="token keyword">const</span> <span class="token constant">SVG_NAMESPACE</span> <span class="token operator">=</span> <span class="token string">&#39;http://www.w3.org/2000/svg&#39;</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">&#39;svg&#39;</span><span class="token operator">:</span>
    <span class="token keyword">return</span> <span class="token constant">SVG_NAMESPACE</span>
  <span class="token keyword">case</span> <span class="token string">&#39;math&#39;</span><span class="token operator">:</span>
    <span class="token keyword">return</span> <span class="token constant">MATH_NAMESPACE</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token keyword">return</span> <span class="token constant">HTML_NAMESPACE</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,46);function p(o,t){return e}var r=n(a,[["render",p],["__file","context.html.vue"]]);export{r as default};
