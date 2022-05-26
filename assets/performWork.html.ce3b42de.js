import{_ as n,o as s,c as a,a as e}from"./app.11072343.js";const o={},t=e(`<h2 id="performwork" tabindex="-1"><a class="header-anchor" href="#performwork" aria-hidden="true">#</a> <strong>performWork</strong></h2><p><code>performWork</code>\u901A\u8FC7\u4E24\u79CD\u65B9\u5F0F\u8C03\u7528</p><ul><li><strong>performAsyncWork \u5F02\u6B65\u65B9\u5F0F</strong></li></ul><p>\u5F02\u6B65\u60C5\u51B5\u7ED9<code>performWork</code>\u8BBE\u7F6E\u7684<code>minExpirationTime</code>\u662F<code>NoWork</code>\uFF0C\u5E76\u4E14\u4F1A\u5224\u65AD<code>dl.didTimeout</code>\uFF0C\u8FD9\u4E2A\u503C\u662F\u6307\u4EFB\u52A1\u7684<code>expirationTime</code>\u662F\u5426\u5DF2\u7ECF\u8D85\u65F6\uFF0C\u5982\u679C\u8D85\u65F6\u4E86\uFF0C\u5219\u76F4\u63A5\u8BBE\u7F6E<code>newExpirationTimeToWorkOn</code>\u4E3A\u5F53\u524D\u65F6\u95F4\uFF0C\u8868\u793A\u8FD9\u4E2A\u4EFB\u52A1\u76F4\u63A5\u6267\u884C\u5C31\u884C\u4E86\uFF0C\u4E0D\u9700\u8981\u5224\u65AD\u662F\u5426\u8D85\u8FC7\u4E86\u5E27\u65F6\u95F4</p><ul><li><strong>performSyncWork \u540C\u6B65\u65B9\u5F0F</strong></li></ul><p>\u540C\u6B65\u65B9\u5F0F\u5C31\u6BD4\u8F83\u7B80\u5355\u4E86\uFF0C\u8BBE\u7F6E<code>minExpirationTime</code>\u4E3A<code>Sync</code>\u4E5F\u5C31\u662F1</p><ul><li><strong>\u5177\u4F53 performWork</strong></li></ul><p>\u9996\u5148\u8981\u901A\u8FC7<code>findHighestPriorityRoot</code>\u627E\u5230\u4E0B\u4E00\u4E2A\u9700\u8981\u64CD\u4F5C\u7684<code>root</code>\uFF0C\u4F1A\u8BBE\u7F6E\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF</p><p>\u8FD9\u91CC\u5224\u65AD\u662F\u5426\u6709<code>deadline</code>\u6765\u5206\u6210\u4E24\u79CD\u6E32\u67D3\u65B9\u5F0F\uFF0C\u4F46\u6700\u5927\u7684\u5DEE\u8DDD\u5176\u5B9E\u662F<code>while</code>\u5FAA\u73AF\u7684\u5224\u65AD\u6761\u4EF6\uFF0C\u6709<code>deadline</code>\u7684\u591A\u4E86\u4E00\u4E2A\u6761\u4EF6(<code>!deadlineDidExpire || currentRendererTime &gt;= nextFlushedExpirationTime</code>)</p><p>\u5148\u6765\u770B\u76F8\u540C\u7684\u90E8\u5206</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>nextFlushedRoot <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
    nextFlushedExpirationTime <span class="token operator">!==</span> NoWork <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span>minExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
        minExpirationTime <span class="token operator">&gt;=</span> nextFlushedExpirationTime<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u4E00\u4E2A\u8F93\u51FA\u8282\u70B9\u4E0D\u662F<code>null</code>\uFF0C\u5E76\u4E14\u8FC7\u671F\u65F6\u95F4\u4E0D\u662F<code>NoWork</code>\uFF0C\u540C\u65F6\u8D85\u65F6\u65F6\u95F4\u662F<code>NoWork</code>\uFF0C\u6216\u8005\u8D85\u65F6\u65F6\u95F4\u5927\u4E8E\u4E0B\u4E2A\u8282\u70B9\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u4E00\u822C\u6765\u8BF4<code>minExpirationTime</code>\u5E94\u8BE5\u5C31\u7B49\u4E8E<code>nextFlushedExpirationTime</code>\u56E0\u4E3A\u4ED6\u4EEC\u6765\u81EA\u540C\u4E00\u4E2A root\uFF0C<code>nextFlushedExpirationTime</code>\u662F\u5728<code>findHighestPriorityRoot</code>\u9636\u6BB5\u8BFB\u53D6\u51FA\u6765\u7684<code>root.expirationTime</code></p><p>\u5728\u975E\u5F02\u6B65\u7684\u60C5\u51B5\u4E0B\uFF0C\u63A5\u4E0B\u53BB\u5C31\u662F\u5FAA\u73AF\u6267\u884C<code>performWorkOnRoot</code>\u7136\u540E\u518D\u627E\u4E0B\u4E00\u4E2A\u4F18\u5148\u7EA7\u7684<code>root</code>\u6267\u884C</p><p>\u800C\u5728\u5F02\u6B65\u7684\u60C5\u51B5\u4E0B\u591A\u4E86\u4E00\u4E2A\u5224\u65AD(<code>!deadlineDidExpire || currentRendererTime &gt;= nextFlushedExpirationTime</code>)\uFF0C\u4EC0\u4E48\u610F\u601D\u5462\uFF1F</p><p><code>deadlineDidExpire</code>\u662F\u7528\u6765\u5224\u65AD\u65F6\u95F4\u7247\u662F\u5426\u5230\u671F\u7684\uFF0C\u4E5F\u5C31\u662F<code>deadline</code>\u4E2D\u8BBE\u7F6E\u7684\uFF0C\u800C\u7B2C\u4E8C\u4E2A\u6761\u4EF6\u662F\u5F53\u524D\u6E32\u67D3\u65F6\u95F4\u662F\u5426\u5927\u4E8E<code>nextFlushedExpirationTime</code>\uFF0C\u4E5F\u5C31\u662F\u5224\u65AD\u4EFB\u52A1\u662F\u5426\u5DF2\u7ECF\u8D85\u65F6\u4E86\u4E86\uFF0C\u5982\u679C\u8D85\u65F6\u4E86\uFF0C\u6839\u636E\u4E0B\u9762\u8C03\u7528<code>performWorkOnRoot</code>\u7684\u53C2\u6570\u4E2D\u6709\u4E00\u4E2A<code>currentRendererTime &gt;= nextFlushedExpirationTime</code>\uFF0C\u4E5F\u5C31\u662F\u8FD9\u79CD\u60C5\u51B5\u4E0B\u4E3A<code>true</code>\uFF0C\u4EE3\u8868\u7684\u610F\u601D\u662F\u540C\u6B65\u6267\u884C\u4EFB\u52A1\u4E0D\u518D\u5224\u65AD\u662F\u5426\u65F6\u95F4\u7247\u5230\u671F\u3002</p><ul><li><strong>\u6536\u5C3E</strong></li></ul><p>\u6700\u540E\u5982\u679C\u8DF3\u51FA\u5FAA\u73AF\uFF0C\u6709\u4E24\u79CD\u53EF\u80FD\uFF0C\u4E00\u662F\u4EFB\u52A1\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u4E00\u662F\u65F6\u95F4\u7247\u7528\u5B8C\u4E86\u5E76\u4E14\u4EFB\u52A1\u6CA1\u8FC7\u671F\u3002\u5BF9\u4E8E\u7B2C\u4E8C\u79CD\u60C5\u51B5\u4F1A\u91CD\u65B0\u53D1\u8D77\u4E00\u6B21\u5F02\u6B65\u8C03\u5EA6\uFF0C\u7B49<code>requestIdleCallback</code>\u6709\u7A7A\u4E86\u518D\u56DE\u6765\u7EE7\u7EED\u6267\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">performAsyncWork</span><span class="token punctuation">(</span><span class="token parameter">dl</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dl<span class="token punctuation">.</span>didTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>firstScheduledRoot <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">recomputeCurrentRendererTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">let</span> <span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot <span class="token operator">=</span> firstScheduledRoot
            <span class="token keyword">do</span> <span class="token punctuation">{</span>
                <span class="token function">didExpireAtExpirationTime</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> currentRendererTime<span class="token punctuation">)</span>
                <span class="token comment">// The root schedule is circular, so this is never null.</span>
                <span class="token comment">// \u6839\u8BA1\u5212\u662F\u5FAA\u73AF\u7684\uFF0C\u56E0\u6B64\u6C38\u8FDC\u4E0D\u4F1A\u4E3A\u7A7A\u3002</span>
                root <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>nextScheduledRoot<span class="token operator">:</span> any<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> firstScheduledRoot<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">performWork</span><span class="token punctuation">(</span>NoWork<span class="token punctuation">,</span> dl<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">performSyncWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">performWork</span><span class="token punctuation">(</span>Sync<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">performWork</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">minExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span> <span class="token literal-property property">dl</span><span class="token operator">:</span> Deadline <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    deadline <span class="token operator">=</span> dl

    <span class="token comment">// Keep working on roots until there&#39;s no more work, or until we reach</span>
    <span class="token comment">// the deadline.</span>
    <span class="token comment">// \u7EE7\u7EED\u624E\u6839\uFF0C\u76F4\u5230\u6CA1\u6709\u66F4\u591A\u7684\u5DE5\u4F5C\u6216\u76F4\u5230\u622A\u6B62\u65E5\u671F\u4E3A\u6B62\u3002</span>
    <span class="token function">findHighestPriorityRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>deadline <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">recomputeCurrentRendererTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        currentSchedulerTime <span class="token operator">=</span> currentRendererTime

        <span class="token keyword">if</span> <span class="token punctuation">(</span>enableUserTimingAPI<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> didExpire <span class="token operator">=</span> nextFlushedExpirationTime <span class="token operator">&lt;</span> currentRendererTime
            <span class="token keyword">const</span> timeout <span class="token operator">=</span> <span class="token function">expirationTimeToMs</span><span class="token punctuation">(</span>nextFlushedExpirationTime<span class="token punctuation">)</span>
            <span class="token function">stopRequestCallbackTimer</span><span class="token punctuation">(</span>didExpire<span class="token punctuation">,</span> timeout<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>
            nextFlushedRoot <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
            nextFlushedExpirationTime <span class="token operator">!==</span> NoWork <span class="token operator">&amp;&amp;</span>
            <span class="token punctuation">(</span>minExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
                minExpirationTime <span class="token operator">&gt;=</span> nextFlushedExpirationTime<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
            <span class="token punctuation">(</span><span class="token operator">!</span>deadlineDidExpire <span class="token operator">||</span> currentRendererTime <span class="token operator">&gt;=</span> nextFlushedExpirationTime<span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">performWorkOnRoot</span><span class="token punctuation">(</span>
                nextFlushedRoot<span class="token punctuation">,</span>
                nextFlushedExpirationTime<span class="token punctuation">,</span>
                currentRendererTime <span class="token operator">&gt;=</span> nextFlushedExpirationTime<span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
            <span class="token function">findHighestPriorityRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token function">recomputeCurrentRendererTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            currentSchedulerTime <span class="token operator">=</span> currentRendererTime
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>
            nextFlushedRoot <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
            nextFlushedExpirationTime <span class="token operator">!==</span> NoWork <span class="token operator">&amp;&amp;</span>
            <span class="token punctuation">(</span>minExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
                minExpirationTime <span class="token operator">&gt;=</span> nextFlushedExpirationTime<span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">performWorkOnRoot</span><span class="token punctuation">(</span>nextFlushedRoot<span class="token punctuation">,</span> nextFlushedExpirationTime<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
            <span class="token function">findHighestPriorityRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// We&#39;re done flushing work. Either we ran out of time in this callback,</span>
    <span class="token comment">// or there&#39;s no more work left with sufficient priority.</span>
    <span class="token comment">// \u5B8C\u6210\u4E86\u51B2\u6D17\u5DE5\u4F5C\u3002 \u5728\u6B64\u56DE\u8C03\u4E2D\u8981\u4E48\u65F6\u95F4\u7528\u5C3D\uFF0C\u5426\u5219\u5C31\u6CA1\u6709\u8DB3\u591F\u7684\u5DE5\u4F5C\u8981\u505A\u4E86\u3002</span>

    <span class="token comment">// If we&#39;re inside a callback, set this to false since we just completed it.</span>
    <span class="token comment">// \u5982\u679C\u5728\u56DE\u8C03\u5185\u90E8\uFF0C\u5219\u5C06\u5176\u8BBE\u7F6E\u4E3Afalse\uFF0C\u56E0\u4E3A\u521A\u521A\u5B8C\u6210\u4E86\u5B83\u3002</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>deadline <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        callbackExpirationTime <span class="token operator">=</span> NoWork
        callbackID <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// If there&#39;s work left over, schedule a new callback.</span>
    <span class="token comment">// \u5982\u679C\u8FD8\u6709\u5DE5\u4F5C\uFF0C\u8BF7\u5B89\u6392\u65B0\u7684\u56DE\u8C03\u3002</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextFlushedExpirationTime <span class="token operator">!==</span> NoWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">scheduleCallbackWithExpirationTime</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span><span class="token punctuation">(</span>nextFlushedRoot<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">)</span><span class="token punctuation">,</span>
            nextFlushedExpirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Clean-up.</span>
    <span class="token comment">// \u6E05\u9664</span>
    deadline <span class="token operator">=</span> <span class="token keyword">null</span>
    deadlineDidExpire <span class="token operator">=</span> <span class="token boolean">false</span>

    <span class="token function">finishRendering</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="performworkonroot" tabindex="-1"><a class="header-anchor" href="#performworkonroot" aria-hidden="true">#</a> <strong>performWorkOnRoot</strong></h2><p>\u8FD9\u91CC\u4E5F\u5206\u4E3A\u540C\u6B65\u548C\u5F02\u6B65\u4E24\u79CD\u60C5\u51B5\uFF0C\u4F46\u662F\u8FD9\u4E24\u79CD\u60C5\u51B5\u7684\u533A\u522B\u5176\u5B9E\u975E\u5E38\u5C0F\u3002</p><p>\u9996\u5148\u662F\u4E00\u4E2A\u53C2\u6570\u7684\u533A\u522B\uFF0C<code>isYieldy</code>\u5728\u540C\u6B65\u7684\u60C5\u51B5\u4E0B\u662F<code>false</code>\uFF0C\u800C\u5728\u5F02\u6B65\u60C5\u51B5\u4E0B\u662F<code>true</code>\u3002\u8FD9\u4E2A\u53C2\u6570\u987E\u540D\u601D\u4E49\u5C31\u662F\u662F\u5426\u53EF\u4EE5\u4E2D\u65AD\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u533A\u522B\u4E5F\u5C31\u5F88\u597D\u7406\u89E3\u4E86\u3002</p><p>\u7B2C\u4E8C\u4E2A\u533A\u522B\u5C31\u662F\u5728<code>renderRoot</code>\u4E4B\u540E\u5224\u65AD\u4E00\u4E0B<code>shouldYeild</code>\uFF0C\u5982\u679C\u65F6\u95F4\u7247\u5DF2\u7ECF\u7528\u5B8C\uFF0C\u5219\u4E0D\u76F4\u63A5<code>completeRoot</code>\uFF0C\u800C\u662F\u7B49\u5230\u4E00\u4E0B\u6B21<code>requestIdleCallback</code>\u4E4B\u540E\u518D\u6267\u884C\u3002</p><p><code>renderRoot</code>\u548C<code>completeRoot</code>\u5206\u522B\u5BF9\u5E94\u4E24\u4E2A\u9636\u6BB5\uFF1A</p><ul><li><p><strong>\u6E32\u67D3\u9636\u6BB5</strong></p></li><li><p><strong>\u63D0\u4EA4\u9636\u6BB5</strong></p></li></ul><p><strong>\u6E32\u67D3\u9636\u6BB5\u53EF\u4EE5\u88AB\u6253\u65AD\uFF0C\u800C\u63D0\u4EA4\u9636\u6BB5\u4E0D\u80FD</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">performWorkOnRoot</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span>
    <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
    <span class="token literal-property property">isExpired</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    isRendering <span class="token operator">=</span> <span class="token boolean">true</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>deadline <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> isExpired<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> finishedWork <span class="token operator">=</span> root<span class="token punctuation">.</span>finishedWork
        <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// This root is already complete. We can commit it.</span>
            <span class="token comment">// \u8BE5\u6839\u76EE\u5F55\u5DF2\u7ECF\u5B8C\u6210\u3002 \u53EF\u4EE5\u63D0\u4EA4\u3002</span>
            <span class="token function">completeRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> finishedWork<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> <span class="token keyword">null</span>
            <span class="token keyword">const</span> timeoutHandle <span class="token operator">=</span> root<span class="token punctuation">.</span>timeoutHandle
            <span class="token keyword">if</span> <span class="token punctuation">(</span>enableSuspense <span class="token operator">&amp;&amp;</span> timeoutHandle <span class="token operator">!==</span> noTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                root<span class="token punctuation">.</span>timeoutHandle <span class="token operator">=</span> noTimeout
                <span class="token function">cancelTimeout</span><span class="token punctuation">(</span>timeoutHandle<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">const</span> isYieldy <span class="token operator">=</span> <span class="token boolean">false</span>
            <span class="token function">renderRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> isYieldy<span class="token punctuation">,</span> isExpired<span class="token punctuation">)</span>
            finishedWork <span class="token operator">=</span> root<span class="token punctuation">.</span>finishedWork
            <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// We&#39;ve completed the root. Commit it.</span>
                <span class="token comment">// \u5DF2\u7ECF\u5B8C\u6210\u4E86\u6839\u3002 \u63D0\u4EA4\u3002</span>
                <span class="token function">completeRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> finishedWork<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// Flush async work.</span>
        <span class="token comment">// \u5237\u65B0\u5F02\u6B65\u5DE5\u4F5C\u3002</span>
        <span class="token keyword">let</span> finishedWork <span class="token operator">=</span> root<span class="token punctuation">.</span>finishedWork
        <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// This root is already complete. We can commit it.</span>
            <span class="token comment">// \u8BE5\u6839\u76EE\u5F55\u5DF2\u7ECF\u5B8C\u6210\u3002 \u53EF\u4EE5\u63D0\u4EA4\u3002</span>
            <span class="token function">completeRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> finishedWork<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> <span class="token keyword">null</span>
            <span class="token comment">// If this root previously suspended, clear its existing timeout, since we&#39;re about to try rendering again.</span>
            <span class="token comment">// \u5982\u679C\u8BE5\u6839\u76EE\u5F55\u5148\u524D\u5DF2\u6682\u505C\uFF0C\u8BF7\u6E05\u9664\u5176\u73B0\u6709\u7684\u8D85\u65F6\uFF0C\u56E0\u4E3A\u5C06\u5C1D\u8BD5\u518D\u6B21\u6E32\u67D3\u3002</span>
            <span class="token keyword">const</span> timeoutHandle <span class="token operator">=</span> root<span class="token punctuation">.</span>timeoutHandle
            <span class="token keyword">if</span> <span class="token punctuation">(</span>enableSuspense <span class="token operator">&amp;&amp;</span> timeoutHandle <span class="token operator">!==</span> noTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                root<span class="token punctuation">.</span>timeoutHandle <span class="token operator">=</span> noTimeout
                <span class="token comment">// $FlowFixMe Complains noTimeout is not a TimeoutID, despite the check above</span>
                <span class="token function">cancelTimeout</span><span class="token punctuation">(</span>timeoutHandle<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">const</span> isYieldy <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token function">renderRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> isYieldy<span class="token punctuation">,</span> isExpired<span class="token punctuation">)</span>
            finishedWork <span class="token operator">=</span> root<span class="token punctuation">.</span>finishedWork
            <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">shouldYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Still time left. Commit the root.</span>
                <span class="token comment">// \u5269\u4F59\u65F6\u95F4\u63D0\u4EA4\u6839</span>
                <span class="token function">completeRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> finishedWork<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> finishedWork
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    isRendering <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="findhighestpriorityroot" tabindex="-1"><a class="header-anchor" href="#findhighestpriorityroot" aria-hidden="true">#</a> <strong>findHighestPriorityRoot</strong></h2><p>\u4E00\u822C\u60C5\u51B5\u4E0B\u7684 React \u5E94\u7528\u53EA\u4F1A\u6709\u4E00\u4E2A<code>root</code>\uFF0C\u6240\u4EE5\u8FD9\u91CC\u7684\u5927\u90E8\u5206\u903B\u8F91\u5176\u5B9E\u90FD\u4E0D\u662F\u5E38\u89C1\u60C5\u51B5</p><p>\u5FAA\u73AF<code>firstScheduledRoot =&gt; lastScheduledRoot</code>\uFF0C<code>remainingExpirationTime</code>\u662F<code>root.expirationTime</code>\uFF0C\u4E5F\u5C31\u662F\u6700\u65E9\u7684\u8FC7\u671F\u65F6\u95F4\u3002</p><p>\u5982\u679C\u4ED6\u662F<code>NoWork</code>\u8BF4\u660E\u4ED6\u5DF2\u7ECF\u6CA1\u6709\u4EFB\u52A1\u4E86\uFF0C\u4ECE\u94FE\u8868\u4E2D\u5220\u9664\u3002</p><p>\u4ECE\u5269\u4E0B\u7684\u4E2D\u627E\u5230<code>expirationTime</code>\u6700\u5C0F\u7684\u4E5F\u5C31\u662F\u4F18\u5148\u7EA7\u6700\u9AD8\u7684<code>root</code>\u7136\u540E\u628A\u4ED6\u8D4B\u503C\u7ED9<code>nextFlushedRoot</code>\u5E76\u628A\u4ED6\u7684<code>expirationTime</code>\u8D4B\u503C\u7ED9<code>nextFlushedExpirationTime</code>\u8FD9\u4E24\u4E2A\u516C\u5171\u53D8\u91CF\u3002</p><p>\u4E00\u822C\u6765\u8BF4\u4F1A\u76F4\u63A5\u6267\u884C\u4E0B\u9762\u8FD9\u4E2A\u903B\u8F91</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> root<span class="token punctuation">.</span>nextScheduledRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This is the only root in the list.</span>
    <span class="token comment">// \u8FD9\u662F\u5217\u8868\u4E2D\u7684\u552F\u4E00\u6839\u3002</span>
    root<span class="token punctuation">.</span>nextScheduledRoot <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    firstScheduledRoot <span class="token operator">=</span> lastScheduledRoot <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E90\u7801</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">findHighestPriorityRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> highestPriorityWork <span class="token operator">=</span> NoWork
    <span class="token keyword">let</span> highestPriorityRoot <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>lastScheduledRoot <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> previousScheduledRoot <span class="token operator">=</span> lastScheduledRoot
        <span class="token keyword">let</span> root <span class="token operator">=</span> firstScheduledRoot
        <span class="token keyword">while</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> remainingExpirationTime <span class="token operator">=</span> root<span class="token punctuation">.</span>expirationTime
            <span class="token keyword">if</span> <span class="token punctuation">(</span>remainingExpirationTime <span class="token operator">===</span> NoWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// This root no longer has work. Remove it from the scheduler.</span>
                <span class="token comment">// \u8BE5\u6839\u4E0D\u518D\u8D77\u4F5C\u7528\u3002 \u4ECE\u8C03\u5EA6\u7A0B\u5E8F\u4E2D\u5220\u9664\u5B83\u3002</span>

                <span class="token comment">// TODO: This check is redudant, but Flow is confused by the branch</span>
                <span class="token comment">// below where we set lastScheduledRoot to null, even though we break</span>
                <span class="token comment">// from the loop right after.</span>
                <span class="token comment">// \u5F85\u529E\u4E8B\u9879\uFF1A\u6B64\u68C0\u67E5\u662F\u591A\u4F59\u7684\uFF0C\u4F46Flow\u88AB\u4E0B\u9762\u7684\u5206\u652F\u6240\u6DF7\u6DC6\uFF0C\u5728\u8BE5\u5206\u652F\u4E2D\uFF0C\u5C06lastScheduledRoot\u8BBE\u7F6E\u4E3Anull\uFF0C\u5373\u4F7F\u7D27\u63A5\u7740\u4ECE\u5FAA\u73AF\u4E2D\u4E2D\u65AD\u4E86\u3002</span>
                <span class="token function">invariant</span><span class="token punctuation">(</span>
                    previousScheduledRoot <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> lastScheduledRoot <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;Should have a previous and last root. This error is likely &#39;</span> <span class="token operator">+</span>
                        <span class="token string">&#39;caused by a bug in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> root<span class="token punctuation">.</span>nextScheduledRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// This is the only root in the list.</span>
                    <span class="token comment">// \u8FD9\u662F\u5217\u8868\u4E2D\u7684\u552F\u4E00\u6839\u3002</span>
                    root<span class="token punctuation">.</span>nextScheduledRoot <span class="token operator">=</span> <span class="token keyword">null</span>
                    firstScheduledRoot <span class="token operator">=</span> lastScheduledRoot <span class="token operator">=</span> <span class="token keyword">null</span>
                    <span class="token keyword">break</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> firstScheduledRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// This is the first root in the list.</span>
                    <span class="token comment">// \u8FD9\u662F\u5217\u8868\u4E2D\u7684\u7B2C\u4E00\u4E2A\u6839\u3002</span>
                    <span class="token keyword">const</span> next <span class="token operator">=</span> root<span class="token punctuation">.</span>nextScheduledRoot
                    firstScheduledRoot <span class="token operator">=</span> next
                    lastScheduledRoot<span class="token punctuation">.</span>nextScheduledRoot <span class="token operator">=</span> next
                    root<span class="token punctuation">.</span>nextScheduledRoot <span class="token operator">=</span> <span class="token keyword">null</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> lastScheduledRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// This is the last root in the list.</span>
                    <span class="token comment">// \u8FD9\u662F\u5217\u8868\u4E2D\u7684\u6700\u540E\u4E00\u4E2A\u6839\u3002</span>
                    lastScheduledRoot <span class="token operator">=</span> previousScheduledRoot
                    lastScheduledRoot<span class="token punctuation">.</span>nextScheduledRoot <span class="token operator">=</span> firstScheduledRoot
                    root<span class="token punctuation">.</span>nextScheduledRoot <span class="token operator">=</span> <span class="token keyword">null</span>
                    <span class="token keyword">break</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    previousScheduledRoot<span class="token punctuation">.</span>nextScheduledRoot <span class="token operator">=</span> root<span class="token punctuation">.</span>nextScheduledRoot
                    root<span class="token punctuation">.</span>nextScheduledRoot <span class="token operator">=</span> <span class="token keyword">null</span>
                <span class="token punctuation">}</span>
                root <span class="token operator">=</span> previousScheduledRoot<span class="token punctuation">.</span>nextScheduledRoot
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>
                    highestPriorityWork <span class="token operator">===</span> NoWork <span class="token operator">||</span>
                    remainingExpirationTime <span class="token operator">&lt;</span> highestPriorityWork
                <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// Update the priority, if it&#39;s higher</span>
                    <span class="token comment">// \u66F4\u65B0\u4F18\u5148\u7EA7\uFF08\u5982\u679C\u66F4\u9AD8\uFF09</span>
                    highestPriorityWork <span class="token operator">=</span> remainingExpirationTime
                    highestPriorityRoot <span class="token operator">=</span> root
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> lastScheduledRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>highestPriorityWork <span class="token operator">===</span> Sync<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// Sync is highest priority by definition so</span>
                    <span class="token comment">// we can stop searching.</span>
                    <span class="token comment">// \u6839\u636E\u5B9A\u4E49\uFF0C\u540C\u6B65\u662F\u6700\u9AD8\u4F18\u5148\u7EA7\uFF0C\u56E0\u6B64\u53EF\u4EE5\u505C\u6B62\u641C\u7D22\u3002</span>
                    <span class="token keyword">break</span>
                <span class="token punctuation">}</span>
                previousScheduledRoot <span class="token operator">=</span> root
                root <span class="token operator">=</span> root<span class="token punctuation">.</span>nextScheduledRoot
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    nextFlushedRoot <span class="token operator">=</span> highestPriorityRoot
    nextFlushedExpirationTime <span class="token operator">=</span> highestPriorityWork
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),p=[t];function i(c,l){return s(),a("div",null,p)}var u=n(o,[["render",i],["__file","performWork.html.vue"]]);export{u as default};
