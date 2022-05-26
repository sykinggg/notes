import{_ as p,r as i,o as c,c as l,b as s,d as a,w as e,a as o,e as t}from"./app.11072343.js";const r={},d=o(`<h2 id="schedulework" tabindex="-1"><a class="header-anchor" href="#schedulework" aria-hidden="true">#</a> <strong>scheduleWork</strong></h2><p>\u8FD9\u91CC\u5148<code>scheduleWorkToRoot</code>\uFF0C\u8FD9\u4E00\u6B65\u975E\u5E38\u91CD\u8981\uFF0C\u4ED6\u4E3B\u8981\u505A\u4E86\u4E00\u4E0B\u51E0\u4E2A\u4EFB\u52A1</p><ul><li><p>\u627E\u5230\u5F53\u524D<code>Fiber</code>\u7684 root</p></li><li><p>\u7ED9\u66F4\u65B0\u8282\u70B9\u7684\u7236\u8282\u70B9\u94FE\u4E0A\u7684\u6BCF\u4E2A\u8282\u70B9\u7684<code>expirationTime</code>\u8BBE\u7F6E\u4E3A\u8FD9\u4E2A<code>update</code>\u7684<code>expirationTime</code>\uFF0C\u9664\u975E\u4ED6\u672C\u8EAB\u65F6\u95F4\u8981\u5C0F\u4E8E<code>expirationTime</code></p></li><li><p>\u7ED9\u66F4\u65B0\u8282\u70B9\u7684\u7236\u8282\u70B9\u94FE\u4E0A\u7684\u6BCF\u4E2A\u8282\u70B9\u7684<code>childExpirationTime</code>\u8BBE\u7F6E\u4E3A\u8FD9\u4E2A<code>update</code>\u7684<code>expirationTime</code>\uFF0C\u9664\u975E\u4ED6\u672C\u8EAB\u65F6\u95F4\u8981\u5C0F\u4E8E<code>expirationTime</code></p></li></ul><p>\u6700\u7EC8\u8FD4\u56DE root \u8282\u70B9\u7684<code>Fiber</code>\u5BF9\u8C61</p><p>\u7136\u540E\u8FDB\u5165\u4E00\u4E2A\u5224\u65AD\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token operator">!</span>isWorking <span class="token operator">&amp;&amp;</span>
    nextRenderExpirationTime <span class="token operator">!==</span> NoWork <span class="token operator">&amp;&amp;</span>
    expirationTime <span class="token operator">&lt;</span> nextRenderExpirationTime
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6765\u89E3\u91CA\u4E00\u4E0B\u8FD9\u51E0\u4E2A\u53D8\u91CF\u7684\u610F\u601D</p><ol><li><p><code>isWorking</code>\u4EE3\u8868\u662F\u5426\u6B63\u5728\u5DE5\u4F5C\uFF0C\u5728\u5F00\u59CB<code>renderRoot</code>\u548C<code>commitRoot</code>\u7684\u65F6\u5019\u4F1A\u8BBE\u7F6E\u4E3A true\uFF0C\u4E5F\u5C31\u662F\u5728<code>render</code>\u548C<code>commit</code>\u4E24\u4E2A\u9636\u6BB5\u90FD\u4F1A\u4E3A<code>true</code></p></li><li><p><code>nextRenderExpirationTime</code>\u5728\u662F\u65B0\u7684<code>renderRoot</code>\u7684\u65F6\u5019\u4F1A\u88AB\u8BBE\u7F6E\u4E3A\u5F53\u524D\u4EFB\u52A1\u7684<code>expirationTime</code>\uFF0C\u800C\u4E14\u4E00\u65E6\u4ED6\u88AB\uFF0C\u53EA\u6709\u5F53\u4E0B\u6B21\u4EFB\u52A1\u662F<code>NoWork</code>\u7684\u65F6\u5019\u4ED6\u624D\u4F1A\u88AB\u518D\u6B21\u8BBE\u7F6E\u4E3A<code>NoWork</code>\uFF0C\u5F53\u7136\u6700\u5F00\u59CB\u4E5F\u662F<code>NoWork</code></p></li></ol><p>\u90A3\u4E48\u8FD9\u4E2A\u6761\u4EF6\u5C31\u5F88\u660E\u663E\u4E86\uFF1A<strong>\u76EE\u524D\u6CA1\u6709\u4EFB\u4F55\u4EFB\u52A1\u5728\u6267\u884C\uFF0C\u5E76\u4E14\u4E4B\u524D\u6709\u6267\u884C\u8FC7\u4EFB\u52A1\uFF0C\u540C\u65F6\u5F53\u524D\u7684\u4EFB\u52A1\u6BD4\u4E4B\u524D\u6267\u884C\u7684\u4EFB\u52A1\u8FC7\u671F\u65F6\u95F4\u8981\u65E9\uFF08\u4E5F\u5C31\u662F\u4F18\u5148\u7EA7\u8981\u9AD8\uFF09</strong></p><p>\u90A3\u4E48\u8FD9\u79CD\u60C5\u51B5\u4F1A\u51FA\u73B0\u5728\u4EC0\u4E48\u65F6\u5019\u5462\uFF1F\u7B54\u6848\u5C31\u662F\uFF1A<strong>\u4E0A\u4E00\u4E2A\u4EFB\u52A1\u662F\u5F02\u6B65\u4EFB\u52A1\uFF08\u4F18\u5148\u7EA7\u5F88\u4F4E\uFF0C\u8D85\u65F6\u65F6\u95F4\u662F 502ms\uFF09\uFF0C\u5E76\u4E14\u5728\u4E0A\u4E00\u4E2A\u65F6\u95F4\u7247\uFF08\u521D\u59CB\u662F 33ms\uFF09\u4EFB\u52A1\u6CA1\u6709\u6267\u884C\u5B8C\uFF0C\u800C\u4E14\u7B49\u5F85\u4E0B\u4E00\u6B21requestIdleCallback\u7684\u65F6\u5019\u65B0\u7684\u4EFB\u52A1\u8FDB\u6765\u4E86\uFF0C\u5E76\u4E14\u8D85\u65F6\u65F6\u95F4\u5F88\u77ED\uFF0852ms \u6216\u8005 22ms \u751A\u81F3\u662F Sync\uFF09\uFF0C\u90A3\u4E48\u4F18\u5148\u7EA7\u5C31\u53D8\u6210\u4E86\u5148\u6267\u884C\u5F53\u524D\u4EFB\u52A1\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u4E0A\u4E00\u4E2A\u4EFB\u52A1\u88AB\u6253\u65AD\u4E86\uFF08interrupted\uFF09</strong></p><p>\u88AB\u6253\u65AD\u7684\u4EFB\u52A1\u4F1A\u4ECE\u5F53\u524D\u8282\u70B9\u5F00\u59CB\u5F80\u4E0A\u63A8\u51FA<code>context</code>\uFF0C\u56E0\u4E3A\u5728 React \u53EA\u6709\u4E00\u4E2A<code>stack</code>\uFF0C\u800C\u4E0B\u4E00\u4E2A\u4EFB\u52A1\u4F1A\u4ECE\u5934\u5F00\u59CB\u7684\uFF0C\u6240\u4EE5\u5728\u5F00\u59CB\u4E4B\u524D\u9700\u8981\u6E05\u7A7A\u4E4B\u524D\u4EFB\u52A1\u7684\u7684<code>stack</code>\u3002</p><p>\u7136\u540E\u91CD\u7F6E\u6240\u6709\u7684\u516C\u5171\u53D8\u91CF\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>nextRoot <span class="token operator">=</span> <span class="token keyword">null</span>
nextRenderExpirationTime <span class="token operator">=</span> NoWork
nextLatestAbsoluteTimeoutMs <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
nextRenderDidError <span class="token operator">=</span> <span class="token boolean">false</span>
nextUnitOfWork <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>markPendingPriorityLevel</strong></p><p>\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u8BB0\u5F55\u5F53\u524D\u7684<code>expirationTime</code>\u5230<code>pendingTime</code>\uFF0C\u8BA9<code>expirationTime</code>\u5904\u4E8E<code>earliestPendingTime</code>\u548C<code>latestPendingTime</code>\u4E4B\u95F4</p><p>\u5E76\u4E14\u4F1A\u8BBE\u7F6E<code>root.nextExpirationTimeToWorkOn</code>\u548C<code>root.expirationTime = expirationTime</code>\u5206\u522B\u662F\uFF1A</p><ul><li><p>\u6700\u65E9\u7684<code>pendingTime</code>\u6216\u8005<code>pingedTime</code>\uFF0C\u5982\u679C\u90FD\u6CA1\u6709\u5219\u662F<code>lastestSuspendTime</code></p></li><li><p><code>suspendedTime</code>\u548C<code>nextExpirationTimeToWorkOn</code>\u4E2D\u8F83\u65E9\u7684\u4E00\u4E2A</p></li></ul><p><strong>\u8C03\u7528 requestWork</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token operator">!</span>isWorking <span class="token operator">||</span>
    isCommitting <span class="token operator">||</span>
    nextRoot <span class="token operator">!==</span> root
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u5224\u65AD\u6761\u4EF6\u5C31\u6BD4\u8F83\u7B80\u5355\u4E86\uFF0C<code>!isWorking || isCommitting</code>\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u8981\u4E48\u5904\u4E8E\u6CA1\u6709 work \u7684\u72B6\u6001\uFF0C\u8981\u4E48\u53EA\u80FD\u5728 render \u9636\u6BB5\uFF0C\u4E0D\u80FD\u5904\u4E8E commit \u9636\u6BB5\uFF08\u6BD4\u8F83\u597D\u5947\u4EC0\u4E48\u65F6\u5019\u4F1A\u5728 commit \u9636\u6BB5\u6709\u65B0\u7684\u4EFB\u52A1\u8FDB\u6765\uFF0Ccommit \u90FD\u662F\u540C\u6B65\u7684\u65E0\u6CD5\u6253\u65AD\uFF09\u3002\u8FD8\u6709\u4E00\u4E2A\u9009\u9879<code>nextRoot !== root</code>\uFF0C\u8FD9\u4E2A\u7684\u610F\u601D\u5C31\u662F\u7684 APP \u5982\u679C\u6709\u4E24\u4E2A\u4E0D\u540C\u7684 root\uFF0C\u8FD9\u65F6\u5019\u4E5F\u7B26\u5408\u6761\u4EF6\u3002</p><p>\u5728\u7B26\u5408\u6761\u4EF6\u4E4B\u540E\u5C31<code>requestWork</code>\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">scheduleWork</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span> <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">scheduleWorkToRoot</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>enableSchedulerTracing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">storeInteractionsForExpirationTime</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> expirationTime<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token operator">!</span>isWorking <span class="token operator">&amp;&amp;</span>
        nextRenderExpirationTime <span class="token operator">!==</span> NoWork <span class="token operator">&amp;&amp;</span>
        expirationTime <span class="token operator">&lt;</span> nextRenderExpirationTime
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// This is an interruption. (Used for performance tracking.)</span>
        <span class="token comment">// \u8FD9\u662F\u4E00\u4E2A\u4E2D\u65AD\u3002 \uFF08\u7528\u4E8E\u6027\u80FD\u8DDF\u8E2A\u3002\uFF09</span>
        interruptedBy <span class="token operator">=</span> fiber
        <span class="token function">resetStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">markPendingPriorityLevel</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token comment">// If we&#39;re in the render phase, we don&#39;t need to schedule this root</span>
        <span class="token comment">// \u5982\u679C\u5904\u4E8E\u6E32\u67D3\u9636\u6BB5\uFF0C\u5219\u65E0\u9700\u5B89\u6392\u6B64\u6839\u76EE\u5F55</span>
        <span class="token comment">// for an update, because we&#39;ll do it before we exit...</span>
        <span class="token comment">// \u8FDB\u884C\u66F4\u65B0\uFF0C\u56E0\u4E3A\u4F1A\u5728\u9000\u51FA\u4E4B\u524D\u8FDB\u884C...</span>
        <span class="token operator">!</span>isWorking <span class="token operator">||</span>
        isCommitting <span class="token operator">||</span>
        <span class="token comment">// ...unless this is a different root than the one we&#39;re rendering.</span>
        <span class="token comment">// ...\u9664\u975E\u8FD9\u4E0E\u8981\u6E32\u67D3\u7684\u6839\u4E0D\u540C\u3002</span>
        nextRoot <span class="token operator">!==</span> root
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> rootExpirationTime <span class="token operator">=</span> root<span class="token punctuation">.</span>expirationTime
        <span class="token function">requestWork</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> rootExpirationTime<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">scheduleWorkToRoot</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span> expirationTime</span><span class="token punctuation">)</span><span class="token operator">:</span> FiberRoot <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token comment">// Update the source fiber&#39;s expiration time</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
        fiber<span class="token punctuation">.</span>expirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
        fiber<span class="token punctuation">.</span>expirationTime <span class="token operator">&gt;</span> expirationTime
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fiber<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> expirationTime
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> alternate <span class="token operator">=</span> fiber<span class="token punctuation">.</span>alternate
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
        alternate <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
        <span class="token punctuation">(</span>alternate<span class="token punctuation">.</span>expirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
        alternate<span class="token punctuation">.</span>expirationTime <span class="token operator">&gt;</span> expirationTime<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        alternate<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> expirationTime
    <span class="token punctuation">}</span>
    <span class="token comment">// Walk the parent path to the root and update the child expiration time.</span>
    <span class="token keyword">let</span> node <span class="token operator">=</span> fiber<span class="token punctuation">.</span>return
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fiber<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> fiber<span class="token punctuation">.</span>stateNode
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        alternate <span class="token operator">=</span> node<span class="token punctuation">.</span>alternate
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
            node<span class="token punctuation">.</span>childExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
            node<span class="token punctuation">.</span>childExpirationTime <span class="token operator">&gt;</span> expirationTime
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>childExpirationTime <span class="token operator">=</span> expirationTime
            <span class="token keyword">if</span> <span class="token punctuation">(</span>
                alternate <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
                <span class="token punctuation">(</span>alternate<span class="token punctuation">.</span>childExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
                alternate<span class="token punctuation">.</span>childExpirationTime <span class="token operator">&gt;</span> expirationTime<span class="token punctuation">)</span>
            <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                alternate<span class="token punctuation">.</span>childExpirationTime <span class="token operator">=</span> expirationTime
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
            alternate <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
            <span class="token punctuation">(</span>alternate<span class="token punctuation">.</span>childExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
                alternate<span class="token punctuation">.</span>childExpirationTime <span class="token operator">&gt;</span> expirationTime<span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            alternate<span class="token punctuation">.</span>childExpirationTime <span class="token operator">=</span> expirationTime
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>return <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> node<span class="token punctuation">.</span>stateNode
        <span class="token punctuation">}</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>return
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">resetStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextUnitOfWork <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> interruptedWork <span class="token operator">=</span> nextUnitOfWork<span class="token punctuation">.</span>return
        <span class="token keyword">while</span> <span class="token punctuation">(</span>interruptedWork <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">unwindInterruptedWork</span><span class="token punctuation">(</span>interruptedWork<span class="token punctuation">)</span>
            interruptedWork <span class="token operator">=</span> interruptedWork<span class="token punctuation">.</span>return
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    nextRoot <span class="token operator">=</span> <span class="token keyword">null</span>
    nextRenderExpirationTime <span class="token operator">=</span> NoWork
    nextLatestAbsoluteTimeoutMs <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
    nextRenderDidError <span class="token operator">=</span> <span class="token boolean">false</span>
    nextUnitOfWork <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="requestwork" tabindex="-1"><a class="header-anchor" href="#requestwork" aria-hidden="true">#</a> <strong>requestWork</strong></h2><p><code>addRootToSchedule</code>\u628A root \u52A0\u5165\u5230\u8C03\u5EA6\u961F\u5217\uFF0C\u4F46\u662F\u8981\u6CE8\u610F\u4E00\u70B9\uFF0C\u4E0D\u4F1A\u5B58\u5728\u4E24\u4E2A\u76F8\u540C\u7684 root \u524D\u540E\u51FA\u73B0\u5728\u961F\u5217\u4E2D</p><p>\u53EF\u4EE5\u770B\u51FA\u6765\uFF0C\u5982\u679C\u7B2C\u4E00\u6B21\u8C03\u7528<code>addRootToSchedule</code>\u7684\u65F6\u5019\uFF0C<code>nextScheduledRoot</code>\u662F<code>null</code>\uFF0C\u8FD9\u65F6\u5019\u516C\u5171\u53D8\u91CF<code>firstScheduledRoot</code>\u548C<code>lastScheduledRoot</code>\u4E5F\u662F<code>null</code>\uFF0C\u6240\u4EE5\u4F1A\u628A\u4ED6\u4EEC\u90FD\u8D4B\u503C\u6210<code>root</code>\uFF0C\u540C\u65F6<code>root.nextScheduledRoot = root</code>\u3002\u7136\u540E\u7B2C\u4E8C\u6B21\u8FDB\u6765\u7684\u65F6\u5019\uFF0C\u5982\u679C\u524D\u540E<code>root</code>\u662F\u540C\u4E00\u4E2A\uFF0C\u90A3\u4E48\u4E4B\u524D\u7684<code>firstScheduledRoot</code>\u548C<code>lastScheduledRoot</code>\u90FD\u662F <code>root</code>\uFF0C\u6240\u4EE5<code>lastScheduledRoot.nextScheduledRoot = root</code>\u5C31\u7B49\u4E8E<code>root.nextScheduledRoot = root</code></p><p>\u8FD9\u4E48\u505A\u662F\u56E0\u4E3A\u540C\u4E00\u4E2A<code>root</code>\u4E0D\u9700\u8981\u5B58\u5728\u4E24\u4E2A\uFF0C\u56E0\u4E3A\u524D\u4E00\u6B21\u8C03\u5EA6\u5982\u679C\u4E2D\u9014\u88AB\u6253\u65AD\uFF0C\u4E0B\u4E00\u6B21\u8C03\u5EA6\u8FDB\u5165\u8FD8\u662F\u4ECE\u540C\u4E00\u4E2A<code>root</code>\u5F00\u59CB\uFF0C\u5C31\u4F1A\u628A\u65B0\u7684\u4EFB\u52A1\u4E00\u8D77\u6267\u884C\u4E86\u3002</p><p>\u4E4B\u540E\u6839\u636E<code>expirationTime</code>\u8C03\u7528<code>performSyncWork</code>\u8FD8\u662F<code>scheduleCallbackWithExpirationTime</code></p><p><code>scheduleCallbackWithExpirationTime</code>\u662F\u6839\u636E\u65F6\u95F4\u7247\u6765\u6267\u884C\u4EFB\u52A1\u7684\uFF0C\u4F1A\u6D89\u53CA\u5230<code>requestIdleCallback</code></p><p><code>isBatchingUpdates</code>\u548C<code>isUnbatchingUpdates</code>\u6D89\u53CA\u5230\u4E8B\u4EF6\u7CFB\u7EDF</p><p>\u4ED6\u4EEC\u6700\u7EC8\u90FD\u8981\u8C03\u7528<code>performWork</code></p>`,30),u=t("\u5173\u4E8EscheduleCallbackWithExpirationTime\u7684\u770B"),k=t("performWork\u9636\u6BB5"),m=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">requestWork</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span> <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">addRootToSchedule</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isRendering<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Prevent reentrancy. Remaining work will be scheduled at the end of</span>
        <span class="token comment">// the currently rendering batch.</span>
        <span class="token comment">// \u9632\u6B62\u91CD\u5165\u3002 \u5269\u4F59\u7684\u5DE5\u4F5C\u5C06\u5B89\u6392\u5728\u5F53\u524D\u6E32\u67D3\u7684\u6279\u6B21\u3002</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>isBatchingUpdates<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Flush work at the end of the batch.</span>
        <span class="token comment">// \u5728\u6279\u5904\u7406\u7ED3\u675F\u65F6\u51B2\u6D17\u5DE5\u4F5C\u3002</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isUnbatchingUpdates<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            nextFlushedRoot <span class="token operator">=</span> root
            nextFlushedExpirationTime <span class="token operator">=</span> Sync
            <span class="token function">performWorkOnRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> Sync<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>expirationTime <span class="token operator">===</span> Sync<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">performSyncWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">scheduleCallbackWithExpirationTime</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">addRootToSchedule</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span> <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Add the root to the schedule.</span>
    <span class="token comment">// \u5C06\u6839\u76EE\u5F55\u6DFB\u52A0\u5230\u8BA1\u5212\u4E2D\u3002</span>
    <span class="token comment">// Check if this root is already part of the schedule.</span>
    <span class="token comment">// \u68C0\u67E5\u6B64\u6839\u76EE\u5F55\u662F\u5426\u5DF2\u5305\u542B\u5728\u8BA1\u5212\u4E2D\u3002</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>nextScheduledRoot <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// This root is not already scheduled. Add it.</span>
        <span class="token comment">// \u6B64\u6839\u5C1A\u672A\u9884\u5B9A\u3002 \u6DFB\u52A0\u5B83\u3002</span>
        root<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> expirationTime
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lastScheduledRoot <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            firstScheduledRoot <span class="token operator">=</span> lastScheduledRoot <span class="token operator">=</span> root
            root<span class="token punctuation">.</span>nextScheduledRoot <span class="token operator">=</span> root
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            lastScheduledRoot<span class="token punctuation">.</span>nextScheduledRoot <span class="token operator">=</span> root
            lastScheduledRoot <span class="token operator">=</span> root
            lastScheduledRoot<span class="token punctuation">.</span>nextScheduledRoot <span class="token operator">=</span> firstScheduledRoot
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// This root is already scheduled, but its priority may have increased.</span>
        <span class="token comment">// \u8BE5\u6839\u76EE\u5F55\u5DF2\u88AB\u8C03\u5EA6\uFF0C\u4F46\u662F\u5176\u4F18\u5148\u7EA7\u53EF\u80FD\u5DF2\u63D0\u9AD8\u3002</span>
        <span class="token keyword">const</span> remainingExpirationTime <span class="token operator">=</span> root<span class="token punctuation">.</span>expirationTime
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
            remainingExpirationTime <span class="token operator">===</span> NoWork <span class="token operator">||</span>
            expirationTime <span class="token operator">&lt;</span> remainingExpirationTime
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Update the priority.</span>
            <span class="token comment">// \u66F4\u65B0\u4F18\u5148\u7EA7\u3002</span>
            root<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> expirationTime
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(b,x){const n=i("RouterLink");return c(),l("div",null,[d,s("p",null,[a(n,{to:"/ILoveDevelop/react/taskScheduling/reactScheduler.html"},{default:e(()=>[u]),_:1})]),s("p",null,[a(n,{to:"/ILoveDevelop/react/taskScheduling/performWork.html"},{default:e(()=>[k]),_:1})]),m])}var T=p(r,[["render",v],["__file","scheduleWork.html.vue"]]);export{T as default};
