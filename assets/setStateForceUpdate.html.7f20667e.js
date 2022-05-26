import{_ as t,r as p,o,c,b as n,d as i,w as l,a as s,e as a}from"./app.11072343.js";const u={},r=s('<h3 id="setstate" tabindex="-1"><a class="header-anchor" href="#setstate" aria-hidden="true">#</a> setState</h3><p><code>setState</code>\u8C03\u7528<code>updater.enqueueSetState</code>\uFF0C\u5148\u4E0D\u7BA1\u8FD9\u4E2A\u5BF9\u8C61\u4EC0\u4E48\u65F6\u5019\u8BBE\u7F6E\u8FDB\u6765\u7684\uFF0C\u5148\u6765\u770B\u4E00\u4E0B\u4EE3\u7801</p><p><code>setState</code>\u548C<code>forceUpdate</code>\u7684\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\uFF0C\u51E0\u4E4E\u662F\u4E00\u6A21\u4E00\u6837\u7684\u3002\u552F\u4E00\u7684\u533A\u522B\u662F<code>Update.tag</code></p>',3),d=n("code",null,"Update",-1),k=a("\u548C"),v=n("code",null,"UpdateQueue",-1),m=a("\u7684\u6570\u636E\u7ED3\u6784"),b=s(`<p>\u5728\u5F53\u524D\u8282\u70B9\u5BF9\u5E94\u7684<code>Fiber</code>\u5BF9\u8C61\u4E0A\u521B\u5EFA\u4E86<code>Update</code>\u4E4B\u540E\uFF0C\u8FDB\u5C31\u5982<code>scheduleWork</code>\u8C03\u5EA6\u9636\u6BB5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> classComponentUpdater <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// isMounted</span>
    <span class="token function">enqueueSetState</span><span class="token punctuation">(</span><span class="token parameter">inst<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> fiber <span class="token operator">=</span> ReactInstanceMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>inst<span class="token punctuation">)</span>
        <span class="token keyword">const</span> currentTime <span class="token operator">=</span> <span class="token function">requestCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> expirationTime <span class="token operator">=</span> <span class="token function">computeExpirationForFiber</span><span class="token punctuation">(</span>currentTime<span class="token punctuation">,</span> fiber<span class="token punctuation">)</span>

        <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">createUpdate</span><span class="token punctuation">(</span>expirationTime<span class="token punctuation">)</span>
        update<span class="token punctuation">.</span>payload <span class="token operator">=</span> payload
        <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> callback <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            update<span class="token punctuation">.</span>callback <span class="token operator">=</span> callback
        <span class="token punctuation">}</span>

        <span class="token function">enqueueUpdate</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> update<span class="token punctuation">)</span>
        <span class="token function">scheduleWork</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// replaceState</span>
    <span class="token function">enqueueForceUpdate</span><span class="token punctuation">(</span><span class="token parameter">inst<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> fiber <span class="token operator">=</span> ReactInstanceMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>inst<span class="token punctuation">)</span>
        <span class="token keyword">const</span> currentTime <span class="token operator">=</span> <span class="token function">requestCurrentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> expirationTime <span class="token operator">=</span> <span class="token function">computeExpirationForFiber</span><span class="token punctuation">(</span>currentTime<span class="token punctuation">,</span> fiber<span class="token punctuation">)</span>

        <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">createUpdate</span><span class="token punctuation">(</span>expirationTime<span class="token punctuation">)</span>
        update<span class="token punctuation">.</span>tag <span class="token operator">=</span> ForceUpdate

        <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> callback <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            update<span class="token punctuation">.</span>callback <span class="token operator">=</span> callback
        <span class="token punctuation">}</span>

        <span class="token function">enqueueUpdate</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> update<span class="token punctuation">)</span>
        <span class="token function">scheduleWork</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function f(_,h){const e=p("RouterLink");return o(),c("div",null,[r,n("p",null,[i(e,{to:"/ILoveDevelop/react/basic/reactFiber.html"},{default:l(()=>[d,k,v,m]),_:1})]),b])}var w=t(u,[["render",f],["__file","setStateForceUpdate.html.vue"]]);export{w as default};
