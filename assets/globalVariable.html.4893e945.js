import{_ as n,a as s}from"./app.9d3046e8.js";const a={},e=s(`<h2 id="\u5728-fiberscheduler-\u4E2D\u7684\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5728-fiberscheduler-\u4E2D\u7684\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> <strong>\u5728 FiberScheduler \u4E2D\u7684\u5168\u5C40\u53D8\u91CF</strong></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Used to ensure computeUniqueAsyncExpiration is monotonically increasing.</span>
<span class="token comment">// \u7528\u4E8E\u786E\u4FDDcomputeUniqueAsyncExpiration\u5355\u8C03\u589E\u52A0\u3002</span>
<span class="token keyword">let</span> <span class="token literal-property property">lastUniqueAsyncExpiration</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0</span>

<span class="token comment">// Represents the expiration time that incoming updates should use. (If this</span>
<span class="token comment">// is NoWork, use the default strategy: async updates in async mode, sync</span>
<span class="token comment">// updates in sync mode.)</span>
<span class="token comment">// \u8868\u793A\u4F20\u5165\u66F4\u65B0\u5E94\u4F7F\u7528\u7684\u5230\u671F\u65F6\u95F4\u3002 \uFF08\u5982\u679C\u8FD9\u662FNoWork\uFF0C\u8BF7\u4F7F\u7528\u9ED8\u8BA4\u7B56\u7565\uFF1A\u5728\u5F02\u6B65\u6A21\u5F0F\u4E0B\u8FDB\u884C\u5F02\u6B65\u66F4\u65B0\uFF0C\u540C\u6B65\u4EE5\u540C\u6B65\u6A21\u5F0F\u66F4\u65B0\u3002\uFF09</span>
<span class="token keyword">let</span> <span class="token literal-property property">expirationContext</span><span class="token operator">:</span> ExpirationTime <span class="token operator">=</span> NoWork

<span class="token keyword">let</span> <span class="token literal-property property">isWorking</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment">// The next work in progress fiber that we&#39;re currently working on.</span>
<span class="token comment">// \u5F53\u524D\u6B63\u5728\u7814\u7A76\u7684\u4E0B\u4E00\u4E2A\u6B63\u5728\u8FDB\u884C\u7684fiber\u3002</span>
<span class="token keyword">let</span> <span class="token literal-property property">nextUnitOfWork</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">let</span> <span class="token literal-property property">nextRoot</span><span class="token operator">:</span> FiberRoot <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token comment">// The time at which we&#39;re currently rendering work.</span>
<span class="token comment">// \u76EE\u524D\u6B63\u5728\u6E32\u67D3\u5DE5\u4F5C\u7684\u65F6\u95F4\u3002</span>
<span class="token keyword">let</span> <span class="token literal-property property">nextRenderExpirationTime</span><span class="token operator">:</span> ExpirationTime <span class="token operator">=</span> NoWork
<span class="token keyword">let</span> <span class="token literal-property property">nextLatestAbsoluteTimeoutMs</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token keyword">let</span> <span class="token literal-property property">nextRenderDidError</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment">// The next fiber with an effect that we&#39;re currently committing.</span>
<span class="token comment">// \u5177\u6709\u5F53\u524D\u627F\u8BFA\u4F5C\u7528\u7684\u4E0B\u4E00\u4E2Afiber\u3002</span>
<span class="token keyword">let</span> <span class="token literal-property property">nextEffect</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">let</span> <span class="token literal-property property">isCommitting</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">let</span> <span class="token literal-property property">legacyErrorBoundariesThatAlreadyFailed</span><span class="token operator">:</span> Set<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token comment">// Used for performance tracking.</span>
<span class="token comment">// \u7528\u4E8E\u6027\u80FD\u8DDF\u8E2A\u3002</span>
<span class="token keyword">let</span> <span class="token literal-property property">interruptedBy</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="lastuniqueasyncexpiration" tabindex="-1"><a class="header-anchor" href="#lastuniqueasyncexpiration" aria-hidden="true">#</a> <strong>lastUniqueAsyncExpiration</strong></h2><p>\u5728<code>createBatch</code>\u4E2D\u6709\u8C03\u7528\uFF0C\u4F46\u662F\u6CA1\u53D1\u73B0<code>createBatch</code>\u5728\u54EA\u91CC\u88AB\u8C03\u7528\uFF0C\u6240\u4EE5\uFF0C\u76EE\u524D\u6CA1\u53D1\u73B0\u4EC0\u4E48\u4F5C\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">computeUniqueAsyncExpiration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ExpirationTime <span class="token punctuation">{</span>
    <span class="token keyword">const</span> currentTime <span class="token operator">=</span> <span class="token function">requestCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">computeAsyncExpiration</span><span class="token punctuation">(</span>currentTime<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">&lt;=</span> lastUniqueAsyncExpiration<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> lastUniqueAsyncExpiration <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    lastUniqueAsyncExpiration <span class="token operator">=</span> result
    <span class="token keyword">return</span> lastUniqueAsyncExpiration
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="expirationcontext" tabindex="-1"><a class="header-anchor" href="#expirationcontext" aria-hidden="true">#</a> <strong>expirationContext</strong></h2><p>\u4FDD\u5B58\u521B\u5EFA<code>expirationTime</code>\u7684\u4E0A\u4E0B\u6587\uFF0C\u5728<code>syncUpdates</code>\u548C<code>deferredUpdates</code>\u4E2D\u5206\u522B\u88AB\u8BBE\u7F6E\u4E3A<code>Sync</code>\u548C<code>AsyncExpirationTime</code>\uFF0C\u5728\u6709\u8FD9\u4E2A\u4E0A\u4E0B\u6587\u7684\u65F6\u5019\u4EFB\u4F55\u66F4\u65B0\u8BA1\u7B97\u51FA\u6765\u7684\u8FC7\u671F\u65F6\u95F4\u90FD\u7B49\u4E8E<code>expirationContext</code>\u3002</p><p>\u6BD4\u5982\u8C03\u7528<code>ReactDOM.flushSync</code>\u7684\u65F6\u5019\uFF0C\u4ED6\u63A5\u53D7\u7684\u56DE\u8C03\u4E2D\u7684<code>setState</code></p><h2 id="isworking" tabindex="-1"><a class="header-anchor" href="#isworking" aria-hidden="true">#</a> <strong>isWorking</strong></h2><p><code>commitRoot</code>\u548C<code>renderRoot</code>\u5F00\u59CB\u90FD\u4F1A\u8BBE\u7F6E\u4E3A<code>true</code>\uFF0C\u7136\u540E\u5728\u4ED6\u4EEC\u5404\u81EA\u9636\u6BB5\u7ED3\u675F\u7684\u65F6\u5019\u90FD\u91CD\u7F6E\u4E3A<code>false</code></p><p><strong>\u7528\u6765\u6807\u5FD7\u662F\u5426\u5F53\u524D\u6709\u66F4\u65B0\u6B63\u5728\u8FDB\u884C\uFF0C\u4E0D\u533A\u5206\u9636\u6BB5</strong></p><h2 id="iscommitting" tabindex="-1"><a class="header-anchor" href="#iscommitting" aria-hidden="true">#</a> <strong>isCommitting</strong></h2><p><code>commitRoot</code>\u5F00\u5934\u8BBE\u7F6E\u4E3A<code>true</code>\uFF0C\u7ED3\u675F\u4E4B\u540E\u8BBE\u7F6E\u4E3A<code>false</code></p><p><strong>\u7528\u6765\u6807\u5FD7\u662F\u5426\u5904\u4E8E<code>commit</code>\u9636\u6BB5</strong></p><h2 id="nextunitofwork" tabindex="-1"><a class="header-anchor" href="#nextunitofwork" aria-hidden="true">#</a> <strong>nextUnitOfWork</strong></h2><p>\u7528\u4E8E\u8BB0\u5F55<code>render</code>\u9636\u6BB5<code>Fiber</code>\u6811\u904D\u5386\u8FC7\u7A0B\u4E2D\u4E0B\u4E00\u4E2A\u9700\u8981\u6267\u884C\u7684\u8282\u70B9\u3002</p><p>\u5728<code>resetStack</code>\u4E2D\u5206\u522B\u88AB\u91CD\u7F6E</p><p>\u4ED6\u53EA\u4F1A\u6307\u5411<code>workInProgress</code></p><h2 id="nextroot-nextrenderexpirationtime" tabindex="-1"><a class="header-anchor" href="#nextroot-nextrenderexpirationtime" aria-hidden="true">#</a> <strong>nextRoot &amp; nextRenderExpirationTime</strong></h2><p>\u7528\u4E8E\u8BB0\u5F55<strong>\u4E0B\u4E00\u4E2A\u5C06\u8981\u6E32\u67D3\u7684root\u8282\u70B9</strong>\u548C<strong>\u4E0B\u4E00\u4E2A\u8981\u6E32\u67D3\u7684\u4EFB\u52A1</strong></p><p>\u5728<code>renderRoot</code>\u5F00\u59CB\u7684\u65F6\u5019\u8D4B\u503C\uFF0C\u9700\u8981\u7B26\u5408\u5982\u4E0B\u6761\u4EF6\u624D\u4F1A\u91CD\u65B0\u8D4B\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>
    expirationTime <span class="token operator">!==</span> nextRenderExpirationTime <span class="token operator">||</span>
    root <span class="token operator">!==</span> nextRoot <span class="token operator">||</span>
    nextUnitOfWork <span class="token operator">===</span> <span class="token keyword">null</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resetStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    nextRoot <span class="token operator">=</span> root
    nextRenderExpirationTime <span class="token operator">=</span> expirationTime
    nextUnitOfWork <span class="token operator">=</span> <span class="token function">createWorkInProgress</span><span class="token punctuation">(</span>
        nextRoot<span class="token punctuation">.</span>current<span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        nextRenderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u89E3\u91CA\u4E00\u4E0B\u5C31\u662F\u8BF4\uFF0C\u53EA\u6709\u8FD9\u4E00\u6B21\u8C03\u7528<code>renderRoot</code>\u7684\u65F6\u5019\uFF0C\u6709</p><ul><li><p>\u65B0\u7684<code>root</code>\u8981\u6E32\u67D3</p></li><li><p>\u76F8\u540C\u7684<code>root</code>\u4F46\u662F\u4EFB\u52A1\u6709\u4E0D\u540C\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\u8981\u6E32\u67D3</p></li><li><p>\u6216\u8005\u5728\u8001\u7684\u4EFB\u52A1\u4E0A\u6CA1\u6709\u4E0B\u4E00\u4E2A\u8282\u70B9\u9700\u8981\u6E32\u67D3\u4E86</p></li></ul><h2 id="nextlatestabsolutetimeoutms" tabindex="-1"><a class="header-anchor" href="#nextlatestabsolutetimeoutms" aria-hidden="true">#</a> <strong>nextLatestAbsoluteTimeoutMs</strong></h2><p>\u7528\u6765\u8BB0\u5F55<code>Suspense</code>\u7EC4\u4EF6\u4F55\u65F6\u91CD\u65B0\u5C1D\u8BD5\u6E32\u67D3\uFF0C\u6D89\u53CA\u590D\u6742\u7684\u516C\u5F0F</p><h2 id="nextrenderdiderror" tabindex="-1"><a class="header-anchor" href="#nextrenderdiderror" aria-hidden="true">#</a> <strong>nextRenderDidError</strong></h2><p>\u7528\u4E8E\u8BB0\u5F55\u5F53\u524D<code>render</code>\u6D41\u7A0B\u662F\u5426\u6709\u9519\u8BEF\u4EA7\u751F</p><p><code>resetStack</code>\u91CD\u7F6E\u4E3A<code>false</code></p><p>\u5728<code>throwException</code>\u4E2D\u5982\u679C\u53D1\u73B0\u4E86\u4E0D\u80FD\u76F4\u63A5\u5904\u7406\u7684\u9519\u8BEF\uFF08\u9664\u4E86 Promise \u4E4B\u5916\uFF09\uFF0C\u90A3\u4E48\u5C31\u8C03\u7528<code>renderDidError</code>\u8BBE\u7F6E\u4E3A<code>true</code></p><h2 id="nexteffect" tabindex="-1"><a class="header-anchor" href="#nexteffect" aria-hidden="true">#</a> <strong>nextEffect</strong></h2><p>\u7528\u4E8E<code>commit</code>\u9636\u6BB5\u8BB0\u5F55<code>firstEffect</code> -&gt; <code>lastEffect</code>\u94FE\u904D\u5386\u8FC7\u7A0B\u4E2D\u7684\u6BCF\u4E00\u4E2A<code>Fiber</code></p><h2 id="interruptedby" tabindex="-1"><a class="header-anchor" href="#interruptedby" aria-hidden="true">#</a> <strong>interruptedBy</strong></h2><p>\u7ED9\u5F00\u53D1\u5DE5\u5177\u7528\u7684\uFF0C\u7528\u6765\u5C55\u793A\u88AB\u54EA\u4E2A\u8282\u70B9\u6253\u65AD\u4E86\u5F02\u6B65\u4EFB\u52A1</p><h2 id="\u8DDF\u8C03\u5EA6\u6709\u5173\u7684\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u8DDF\u8C03\u5EA6\u6709\u5173\u7684\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> <strong>\u8DDF\u8C03\u5EA6\u6709\u5173\u7684\u5168\u5C40\u53D8\u91CF</strong></h2><blockquote><p>ReactFiberScheduler.js 1797-1826</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Linked-list of roots</span>
<span class="token comment">// \u6839\u94FE\u63A5\u5217\u8868</span>
<span class="token keyword">let</span> <span class="token literal-property property">firstScheduledRoot</span><span class="token operator">:</span> FiberRoot <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">let</span> <span class="token literal-property property">lastScheduledRoot</span><span class="token operator">:</span> FiberRoot <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">let</span> <span class="token literal-property property">callbackExpirationTime</span><span class="token operator">:</span> ExpirationTime <span class="token operator">=</span> NoWork
<span class="token keyword">let</span> <span class="token literal-property property">callbackID</span><span class="token operator">:</span> <span class="token operator">*</span>
<span class="token keyword">let</span> <span class="token literal-property property">isRendering</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token keyword">let</span> <span class="token literal-property property">nextFlushedRoot</span><span class="token operator">:</span> FiberRoot <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">let</span> <span class="token literal-property property">nextFlushedExpirationTime</span><span class="token operator">:</span> ExpirationTime <span class="token operator">=</span> NoWork
<span class="token keyword">let</span> <span class="token literal-property property">lowestPriorityPendingInteractiveExpirationTime</span><span class="token operator">:</span> ExpirationTime <span class="token operator">=</span> NoWork
<span class="token keyword">let</span> <span class="token literal-property property">deadlineDidExpire</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token keyword">let</span> <span class="token literal-property property">hasUnhandledError</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token keyword">let</span> <span class="token literal-property property">unhandledError</span><span class="token operator">:</span> mixed <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">let</span> <span class="token literal-property property">deadline</span><span class="token operator">:</span> Deadline <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">let</span> <span class="token literal-property property">isBatchingUpdates</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token keyword">let</span> <span class="token literal-property property">isUnbatchingUpdates</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token keyword">let</span> <span class="token literal-property property">isBatchingInteractiveUpdates</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">let</span> <span class="token literal-property property">completedBatches</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>Batch<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">let</span> <span class="token literal-property property">originalStartTimeMs</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> <span class="token literal-property property">currentRendererTime</span><span class="token operator">:</span> ExpirationTime <span class="token operator">=</span> <span class="token function">msToExpirationTime</span><span class="token punctuation">(</span>
    originalStartTimeMs<span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token keyword">let</span> <span class="token literal-property property">currentSchedulerTime</span><span class="token operator">:</span> ExpirationTime <span class="token operator">=</span> currentRendererTime

<span class="token comment">// Use these to prevent an infinite loop of nested updates</span>
<span class="token comment">// \u4F7F\u7528\u8FD9\u4E9B\u6765\u9632\u6B62\u5D4C\u5957\u66F4\u65B0\u7684\u65E0\u9650\u5FAA\u73AF</span>
<span class="token keyword">const</span> <span class="token constant">NESTED_UPDATE_LIMIT</span> <span class="token operator">=</span> <span class="token number">50</span>
<span class="token keyword">let</span> <span class="token literal-property property">nestedUpdateCount</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">let</span> <span class="token literal-property property">lastCommittedRootDuringThisBatch</span><span class="token operator">:</span> FiberRoot <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="firstscheduledroot-lastscheduledroot" tabindex="-1"><a class="header-anchor" href="#firstscheduledroot-lastscheduledroot" aria-hidden="true">#</a> <strong>firstScheduledRoot &amp; lastScheduledRoot</strong></h2><p>\u7528\u4E8E\u5B58\u653E\u6709\u4EFB\u52A1\u7684\u6240\u6709<code>root</code>\u7684\u5355\u5217\u8868\u7ED3\u6784</p><ul><li><p>\u5728<code>findHighestPriorityRoot</code>\u7528\u6765\u68C0\u7D22\u4F18\u5148\u7EA7\u6700\u9AD8\u7684<code>root</code></p></li><li><p>\u5728<code>addRootToSchedule</code>\u4E2D\u4F1A\u4FEE\u6539</p></li></ul><p>\u5728<code>findHighestPriorityRoot</code>\u4E2D\u4F1A\u5224\u65AD<code>root</code>\u7684<code>expirationTime</code>\uFF0C\u5E76\u4E0D\u4F1A\u76F4\u63A5\u5220\u9664<code>root</code></p><h2 id="callbackexpirationtime-callbackid" tabindex="-1"><a class="header-anchor" href="#callbackexpirationtime-callbackid" aria-hidden="true">#</a> <strong>callbackExpirationTime &amp; callbackID</strong></h2><p>\u8BB0\u5F55\u8BF7\u6C42<code>ReactScheduler</code>\u7684\u65F6\u5019\u7528\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5982\u679C\u5728\u4E00\u6B21\u8C03\u5EA6\u671F\u95F4\u6709\u65B0\u7684\u8C03\u5EA6\u8BF7\u6C42\u8FDB\u6765\u4E86\uFF0C\u800C\u4E14\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF0C\u90A3\u4E48\u9700\u8981\u53D6\u6D88\u4E0A\u4E00\u6B21\u8BF7\u6C42\uFF0C\u5982\u679C\u66F4\u4F4E\u5219\u65E0\u9700\u518D\u6B21\u8BF7\u6C42\u8C03\u5EA6\u3002</p><p><code>callbackID</code>\u662F<code>ReactScheduler</code>\u8FD4\u56DE\u7684\u7528\u4E8E\u53D6\u6D88\u8C03\u5EA6\u7684 ID</p><h2 id="isrendering" tabindex="-1"><a class="header-anchor" href="#isrendering" aria-hidden="true">#</a> <strong>isRendering</strong></h2><p><code>performWorkOnRoot</code>\u5F00\u59CB\u8BBE\u7F6E\u4E3A<code>true</code>\uFF0C\u7ED3\u675F\u7684\u65F6\u5019\u8BBE\u7F6E\u4E3A<code>false</code>\uFF0C\u8868\u793A\u8FDB\u5165\u6E32\u67D3\u9636\u6BB5\uFF0C\u8FD9\u662F\u5305\u542B<code>render</code>\u548C<code>commit</code>\u9636\u6BB5\u7684\u3002</p><h2 id="nextflushedroot-nextflushedexpirationtime" tabindex="-1"><a class="header-anchor" href="#nextflushedroot-nextflushedexpirationtime" aria-hidden="true">#</a> <strong>nextFlushedRoot &amp; nextFlushedExpirationTime</strong></h2><p>\u7528\u6765\u6807\u5FD7\u4E0B\u4E00\u4E2A\u9700\u8981\u6E32\u67D3\u7684<code>root</code>\u548C\u5BF9\u5E94\u7684<code>expirtaionTime</code>\uFF0C\u6CE8\u610F\uFF1A</p><ul><li><p>\u901A\u8FC7<code>findHighestPriorityRoot</code>\u627E\u5230\u6700\u9AD8\u4F18\u5148\u7EA7\u7684</p></li><li><p>\u901A\u8FC7<code>flushRoot</code>\u4F1A\u76F4\u63A5\u8BBE\u7F6E\u6307\u5B9A\u7684\uFF0C\u4E0D\u8FDB\u884C\u7B5B\u9009</p></li></ul><h2 id="lowestprioritypendinginteractiveexpirationtime" tabindex="-1"><a class="header-anchor" href="#lowestprioritypendinginteractiveexpirationtime" aria-hidden="true">#</a> <strong>lowestPriorityPendingInteractiveExpirationTime</strong></h2><p>\u7C7B\u4F3C<code>expirationContext</code>\uFF0C\u7528\u6765\u5B58\u50A8<code>interactiveUpdates</code>\u4EA7\u751F\u7684\u6700\u5C0F\u7684<code>expirationTime</code>\uFF0C\u5728\u4E0B\u4E00\u6B21\u5916\u90E8\u6307\u5B9A\u7684<code>interactiveUpdates</code>\u60C5\u51B5\u4E0B\u4F1A\u5F3A\u5236\u8F93\u51FA\u4E0A\u4E00\u6B21\u7684<code>interactiveUpdates</code>\uFF0C<strong>\u56E0\u4E3A<code>interactiveUpdates</code>\u4E3B\u8981\u662F\u7528\u6237\u8F93\u5165\u4E4B\u7C7B\u7684\u64CD\u4F5C\uFF0C\u5982\u679C\u4E0D\u53CA\u65F6\u8F93\u51FA\u4F1A\u7ED9\u7528\u6237\u9020\u6210\u65AD\u5C42\u611F</strong></p><p>\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528<code>ReactDOM.unstable_interactiveUpdates</code>\u6765\u5B9E\u73B0\u4EE5\u4E0A\u76EE\u7684</p><h2 id="deadline-deadlinedidexpire" tabindex="-1"><a class="header-anchor" href="#deadline-deadlinedidexpire" aria-hidden="true">#</a> <strong>deadline &amp; deadlineDidExpire</strong></h2><p><code>deadline</code>\u662F<code>ReactScheduler</code>\u4E2D\u8FD4\u56DE\u7684\u65F6\u95F4\u7247\u8C03\u5EA6\u4FE1\u606F\u5BF9\u8C61</p><p>\u7528\u4E8E\u8BB0\u5F55\u662F\u5426\u65F6\u95F4\u7247\u8C03\u5EA6\u662F\u5426\u8FC7\u671F\uFF0C\u5728<code>shouldYield</code>\u6839\u636E<code>deadline</code>\u662F\u5426\u8FC7\u671F\u6765\u8BBE\u7F6E</p><h2 id="hasunhandlederror-unhandlederror" tabindex="-1"><a class="header-anchor" href="#hasunhandlederror-unhandlederror" aria-hidden="true">#</a> <strong>hasUnhandledError &amp; unhandledError</strong></h2><p><code>Profiler</code>\u8C03\u8BD5\u76F8\u5173</p><h2 id="isbatchingupdates-isunbatchingupdates-isbatchinginteractiveupdates" tabindex="-1"><a class="header-anchor" href="#isbatchingupdates-isunbatchingupdates-isbatchinginteractiveupdates" aria-hidden="true">#</a> <strong>isBatchingUpdates &amp; isUnbatchingUpdates &amp; isBatchingInteractiveUpdates</strong></h2><p><code>batchedUpdates</code>\u3001<code>unBatchedUpdates</code>\uFF0C<code>deferredUpdates</code>\u3001<code>interactiveUpdates</code>\u7B49\u8FD9\u4E9B\u65B9\u6CD5\u7528\u6765\u5B58\u50A8\u66F4\u65B0\u4EA7\u751F\u7684\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF</p><h2 id="originalstarttimems" tabindex="-1"><a class="header-anchor" href="#originalstarttimems" aria-hidden="true">#</a> <strong>originalStartTimeMs</strong></h2><p>\u56FA\u5B9A\u503C\uFF0Cjs \u52A0\u8F7D\u5B8C\u4E00\u5F00\u59CB\u8BA1\u7B97\u7684\u7ED3\u679C</p><h2 id="currentrenderertime-currentschedulertime" tabindex="-1"><a class="header-anchor" href="#currentrenderertime-currentschedulertime" aria-hidden="true">#</a> <strong>currentRendererTime &amp; currentSchedulerTime</strong></h2><p>\u8BA1\u7B97\u4ECE\u9875\u9762\u52A0\u8F7D\u5230\u73B0\u5728\u4E3A\u6B62\u7684\u6BEB\u79D2\u6570\uFF0C\u540E\u8005\u4F1A\u5728<code>isRendering === true</code>\u7684\u65F6\u5019\u7528\u4F5C\u56FA\u5B9A\u503C\u8FD4\u56DE\uFF0C\u4E0D\u7136\u6BCF\u6B21<code>requestCurrentTime</code>\u90FD\u4F1A\u91CD\u65B0\u8BA1\u7B97\u65B0\u7684\u65F6\u95F4\u3002</p><h2 id="nestedupdatecount-lastcommittedrootduringthisbatch" tabindex="-1"><a class="header-anchor" href="#nestedupdatecount-lastcommittedrootduringthisbatch" aria-hidden="true">#</a> <strong>nestedUpdateCount &amp; lastCommittedRootDuringThisBatch</strong></h2><p>\u7528\u6765\u8BB0\u5F55\u662F\u5426\u6709\u5D4C\u5957\u5F97\u518D\u751F\u547D\u5468\u671F\u65B9\u6CD5\u4E2D\u4EA7\u751F\u66F4\u65B0\u5BFC\u81F4\u5E94\u7528\u65E0\u9650\u5FAA\u73AF\u66F4\u65B0\u5F97\u8BA1\u6570\u5668\uFF0C\u7528\u4E8E\u63D0\u9192\u7528\u6237\u4E66\u5199\u7684\u4E0D\u6B63\u786E\u7684\u4EE3\u7801\u3002</p>`,65);function o(r,p){return e}var l=n(a,[["render",o],["__file","globalVariable.html.vue"]]);export{l as default};
