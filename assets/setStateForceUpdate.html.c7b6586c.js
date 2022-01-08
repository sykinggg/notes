import{r as p,o as t,c as o,a as n,b as c,F as l,e as s,d as a}from"./app.5ba8e4fa.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=s('<h3 id="setstate" tabindex="-1"><a class="header-anchor" href="#setstate" aria-hidden="true">#</a> setState</h3><p><code>setState</code>\u8C03\u7528<code>updater.enqueueSetState</code>\uFF0C\u5148\u4E0D\u7BA1\u8FD9\u4E2A\u5BF9\u8C61\u4EC0\u4E48\u65F6\u5019\u8BBE\u7F6E\u8FDB\u6765\u7684\uFF0C\u5148\u6765\u770B\u4E00\u4E0B\u4EE3\u7801</p><p><code>setState</code>\u548C<code>forceUpdate</code>\u7684\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\uFF0C\u51E0\u4E4E\u662F\u4E00\u6A21\u4E00\u6837\u7684\u3002\u552F\u4E00\u7684\u533A\u522B\u662F<code>Update.tag</code></p>',3),k={href:"/ILoveDevelop/react/basic/reactFiber.md",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"Update",-1),b=a("\u548C"),m=n("code",null,"UpdateQueue",-1),f=a("\u7684\u6570\u636E\u7ED3\u6784"),_=s(`<p>\u5728\u5F53\u524D\u8282\u70B9\u5BF9\u5E94\u7684<code>Fiber</code>\u5BF9\u8C61\u4E0A\u521B\u5EFA\u4E86<code>Update</code>\u4E4B\u540E\uFF0C\u8FDB\u5C31\u5982<code>scheduleWork</code>\u8C03\u5EA6\u9636\u6BB5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> classComponentUpdater <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,2);function h(y,x){const e=p("ExternalLinkIcon");return t(),o(l,null,[i,n("p",null,[n("a",k,[d,b,m,f,c(e)])]),_],64)}var U=u(r,[["render",h]]);export{U as default};
