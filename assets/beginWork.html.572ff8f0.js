import{_ as l,r as c,o as i,c as d,b as s,d as e,w as t,F as u,e as n,a as o}from"./app.9d3046e8.js";const k={},b=s("p",null,[n("\u4E0A\u4E00\u8282\u4E86\u89E3\u5230"),s("code",null,"render\u9636\u6BB5"),n("\u7684\u5DE5\u4F5C\u53EF\u4EE5\u5206\u4E3A\u201C\u9012\u201D\u9636\u6BB5\u548C\u201C\u5F52\u201D\u9636\u6BB5\u3002\u5176\u4E2D\u201C\u9012\u201D\u9636\u6BB5\u4F1A\u6267\u884C"),s("code",null,"beginWork"),n("\uFF0C\u201C\u5F52\u201D\u9636\u6BB5\u4F1A\u6267\u884C"),s("code",null,"completeWork"),n("\u3002\u8FD9\u4E00\u8282\u770B\u770B\u201C\u9012\u201D\u9636\u6BB5\u7684"),s("code",null,"beginWork"),n("\u65B9\u6CD5\u7A76\u7ADF\u505A\u4E86\u4EC0\u4E48\u3002")],-1),m=s("h2",{id:"\u65B9\u6CD5\u6982\u89C8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u65B9\u6CD5\u6982\u89C8","aria-hidden":"true"},"#"),n(" \u65B9\u6CD5\u6982\u89C8")],-1),_=n("\u53EF\u4EE5\u4ECE"),h={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberBeginWork.new.js#L3075",target:"_blank",rel:"noopener noreferrer"},f=n("\u6E90\u7801\u8FD9\u91CC"),g=n("\u770B\u5230"),y=s("code",null,"beginWork",-1),w=n("\u7684\u5B9A\u4E49\u3002\u6574\u4E2A\u65B9\u6CD5\u5927\u6982\u6709500\u884C\u4EE3\u7801\u3002"),F=o(`<p>\u4ECE\u4E0A\u4E00\u8282\u5DF2\u7ECF\u77E5\u9053\uFF0C<code>beginWork</code>\u7684\u5DE5\u4F5C\u662F\u4F20\u5165<code>\u5F53\u524DFiber\u8282\u70B9</code>\uFF0C\u521B\u5EFA<code>\u5B50Fiber\u8282\u70B9</code>\uFF0C\u4ECE\u4F20\u53C2\u6765\u770B\u770B\u5177\u4F53\u662F\u5982\u4F55\u505A\u7684\u3002</p><h3 id="\u4ECE\u4F20\u53C2\u770B\u65B9\u6CD5\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u4F20\u53C2\u770B\u65B9\u6CD5\u6267\u884C" aria-hidden="true">#</a> \u4ECE\u4F20\u53C2\u770B\u65B9\u6CD5\u6267\u884C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">beginWork</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">renderLanes</span><span class="token operator">:</span> Lanes<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...\u7701\u7565\u51FD\u6570\u4F53</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5176\u4E2D\u4F20\u53C2\uFF1A</p><ul><li>current\uFF1A\u5F53\u524D\u7EC4\u4EF6\u5BF9\u5E94\u7684<code>Fiber\u8282\u70B9</code>\u5728\u4E0A\u4E00\u6B21\u66F4\u65B0\u65F6\u7684<code>Fiber\u8282\u70B9</code>\uFF0C\u5373<code>workInProgress.alternate</code></li><li>workInProgress\uFF1A\u5F53\u524D\u7EC4\u4EF6\u5BF9\u5E94\u7684<code>Fiber\u8282\u70B9</code></li><li>renderLanes\uFF1A\u4F18\u5148\u7EA7\u76F8\u5173\uFF0C\u5728\u8BB2\u89E3<code>Scheduler</code>\u65F6\u518D\u8BB2\u89E3</li></ul>`,5),v=n("\u4ECE"),C=n("\u53CC\u7F13\u5B58\u673A\u5236\u4E00\u8282"),P=n("\u77E5\u9053\uFF0C\u9664"),x=s("code",null,"rootFiber",-1),L=n("\u4EE5\u5916\uFF0C \u7EC4\u4EF6"),W=s("code",null,"mount",-1),I=n("\u65F6\uFF0C\u7531\u4E8E\u662F\u9996\u6B21\u6E32\u67D3\uFF0C\u662F\u4E0D\u5B58\u5728\u5F53\u524D\u7EC4\u4EF6\u5BF9\u5E94\u7684"),j=s("code",null,"Fiber\u8282\u70B9",-1),R=n("\u5728\u4E0A\u4E00\u6B21\u66F4\u65B0\u65F6\u7684"),T=s("code",null,"Fiber\u8282\u70B9",-1),D=n("\uFF0C\u5373"),O=s("code",null,"mount",-1),B=n("\u65F6"),M=s("code",null,"current === null",-1),U=n("\u3002"),N=o(`<p>\u7EC4\u4EF6<code>update</code>\u65F6\uFF0C\u7531\u4E8E\u4E4B\u524D\u5DF2\u7ECF<code>mount</code>\u8FC7\uFF0C\u6240\u4EE5<code>current !== null</code>\u3002</p><p>\u6240\u4EE5\u53EF\u4EE5\u901A\u8FC7<code>current === null ?</code>\u6765\u533A\u5206\u7EC4\u4EF6\u662F\u5904\u4E8E<code>mount</code>\u8FD8\u662F<code>update</code>\u3002</p><p>\u57FA\u4E8E\u6B64\u539F\u56E0\uFF0C<code>beginWork</code>\u7684\u5DE5\u4F5C\u53EF\u4EE5\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A</p><ul><li><p><code>update</code>\u65F6\uFF1A\u5982\u679C<code>current</code>\u5B58\u5728\uFF0C\u5728\u6EE1\u8DB3\u4E00\u5B9A\u6761\u4EF6\u65F6\u53EF\u4EE5\u590D\u7528<code>current</code>\u8282\u70B9\uFF0C\u8FD9\u6837\u5C31\u80FD\u514B\u9686<code>current.child</code>\u4F5C\u4E3A<code>workInProgress.child</code>\uFF0C\u800C\u4E0D\u9700\u8981\u65B0\u5EFA<code>workInProgress.child</code>\u3002</p></li><li><p><code>mount</code>\u65F6\uFF1A\u9664<code>fiberRootNode</code>\u4EE5\u5916\uFF0C<code>current === null</code>\u3002\u4F1A\u6839\u636E<code>fiber.tag</code>\u4E0D\u540C\uFF0C\u521B\u5EFA\u4E0D\u540C\u7C7B\u578B\u7684<code>\u5B50Fiber\u8282\u70B9</code></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">beginWork</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">renderLanes</span><span class="token operator">:</span> Lanes</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>

  <span class="token comment">// update\u65F6\uFF1A\u5982\u679Ccurrent\u5B58\u5728\u53EF\u80FD\u5B58\u5728\u4F18\u5316\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u590D\u7528current\uFF08\u5373\u4E0A\u4E00\u6B21\u66F4\u65B0\u7684Fiber\u8282\u70B9\uFF09</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...\u7701\u7565</span>

    <span class="token comment">// \u590D\u7528current</span>
    <span class="token keyword">return</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>
      current<span class="token punctuation">,</span>
      workInProgress<span class="token punctuation">,</span>
      renderLanes<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    didReceiveUpdate <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// mount\u65F6\uFF1A\u6839\u636Etag\u4E0D\u540C\uFF0C\u521B\u5EFA\u4E0D\u540C\u7684\u5B50Fiber\u8282\u70B9</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">IndeterminateComponent</span><span class="token operator">:</span> 
      <span class="token comment">// ...\u7701\u7565</span>
    <span class="token keyword">case</span> <span class="token literal-property property">LazyComponent</span><span class="token operator">:</span> 
      <span class="token comment">// ...\u7701\u7565</span>
    <span class="token keyword">case</span> <span class="token literal-property property">FunctionComponent</span><span class="token operator">:</span> 
      <span class="token comment">// ...\u7701\u7565</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> 
      <span class="token comment">// ...\u7701\u7565</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span>
      <span class="token comment">// ...\u7701\u7565</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
      <span class="token comment">// ...\u7701\u7565</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostText</span><span class="token operator">:</span>
      <span class="token comment">// ...\u7701\u7565</span>
    <span class="token comment">// ...\u7701\u7565\u5176\u4ED6\u7C7B\u578B</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="update\u65F6" tabindex="-1"><a class="header-anchor" href="#update\u65F6" aria-hidden="true">#</a> update\u65F6</h2><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6EE1\u8DB3\u5982\u4E0B\u60C5\u51B5\u65F6<code>didReceiveUpdate === false</code>\uFF08\u5373\u53EF\u4EE5\u76F4\u63A5\u590D\u7528\u524D\u4E00\u6B21\u66F4\u65B0\u7684<code>\u5B50Fiber</code>\uFF0C\u4E0D\u9700\u8981\u65B0\u5EFA<code>\u5B50Fiber</code>\uFF09</p><ol><li><code>oldProps === newProps &amp;&amp; workInProgress.type === current.type</code>\uFF0C\u5373<code>props</code>\u4E0E<code>fiber.type</code>\u4E0D\u53D8</li><li><code>!includesSomeLane(renderLanes, updateLanes)</code>\uFF0C\u5373\u5F53\u524D<code>Fiber\u8282\u70B9</code>\u4F18\u5148\u7EA7\u4E0D\u591F\uFF0C\u4F1A\u5728\u8BB2\u89E3<code>Scheduler</code>\u65F6\u4ECB\u7ECD</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> oldProps <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedProps<span class="token punctuation">;</span>
    <span class="token keyword">const</span> newProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      oldProps <span class="token operator">!==</span> newProps <span class="token operator">||</span>
      <span class="token function">hasLegacyContextChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span>
      <span class="token punctuation">(</span>__DEV__ <span class="token operator">?</span> workInProgress<span class="token punctuation">.</span>type <span class="token operator">!==</span> current<span class="token punctuation">.</span>type <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      didReceiveUpdate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">includesSomeLane</span><span class="token punctuation">(</span>renderLanes<span class="token punctuation">,</span> updateLanes<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      didReceiveUpdate <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u7701\u7565\u5904\u7406</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">bailoutOnAlreadyFinishedWork</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        renderLanes<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      didReceiveUpdate <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    didReceiveUpdate <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="mount\u65F6" tabindex="-1"><a class="header-anchor" href="#mount\u65F6" aria-hidden="true">#</a> mount\u65F6</h2><p>\u5F53\u4E0D\u6EE1\u8DB3\u4F18\u5316\u8DEF\u5F84\u65F6\uFF0C\u5C31\u8FDB\u5165\u7B2C\u4E8C\u90E8\u5206\uFF0C\u65B0\u5EFA<code>\u5B50Fiber</code>\u3002</p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6839\u636E<code>fiber.tag</code>\u4E0D\u540C\uFF0C\u8FDB\u5165\u4E0D\u540C\u7C7B\u578B<code>Fiber</code>\u7684\u521B\u5EFA\u903B\u8F91\u3002</p>`,12),H=n("\u53EF\u4EE5\u4ECE"),E={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactWorkTags.js",target:"_blank",rel:"noopener noreferrer"},S=n("\u8FD9\u91CC"),q=n("\u770B\u5230"),V=s("code",null,"tag",-1),z=n("\u5BF9\u5E94\u7684\u7EC4\u4EF6\u7C7B\u578B"),A=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// mount\u65F6\uFF1A\u6839\u636Etag\u4E0D\u540C\uFF0C\u521B\u5EFA\u4E0D\u540C\u7684Fiber\u8282\u70B9</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token literal-property property">IndeterminateComponent</span><span class="token operator">:</span> 
    <span class="token comment">// ...\u7701\u7565</span>
  <span class="token keyword">case</span> <span class="token literal-property property">LazyComponent</span><span class="token operator">:</span> 
    <span class="token comment">// ...\u7701\u7565</span>
  <span class="token keyword">case</span> <span class="token literal-property property">FunctionComponent</span><span class="token operator">:</span> 
    <span class="token comment">// ...\u7701\u7565</span>
  <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> 
    <span class="token comment">// ...\u7701\u7565</span>
  <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span>
    <span class="token comment">// ...\u7701\u7565</span>
  <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
    <span class="token comment">// ...\u7701\u7565</span>
  <span class="token keyword">case</span> <span class="token literal-property property">HostText</span><span class="token operator">:</span>
    <span class="token comment">// ...\u7701\u7565</span>
  <span class="token comment">// ...\u7701\u7565\u5176\u4ED6\u7C7B\u578B</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,1),$=n("\u5BF9\u4E8E\u5E38\u89C1\u7684\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u5982\uFF08"),G=s("code",null,"FunctionComponent",-1),J=n("/"),K=s("code",null,"ClassComponent",-1),Q=n("/"),X=s("code",null,"HostComponent",-1),Y=n("\uFF09\uFF0C\u6700\u7EC8\u4F1A\u8FDB\u5165"),Z={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberBeginWork.new.js#L233",target:"_blank",rel:"noopener noreferrer"},nn=n("reconcileChildren"),sn=n("\u65B9\u6CD5\u3002"),en=o(`<h2 id="reconcilechildren" tabindex="-1"><a class="header-anchor" href="#reconcilechildren" aria-hidden="true">#</a> reconcileChildren</h2><p>\u4ECE\u8BE5\u51FD\u6570\u540D\u5C31\u80FD\u770B\u51FA\u8FD9\u662F<code>Reconciler</code>\u6A21\u5757\u7684\u6838\u5FC3\u90E8\u5206\u3002\u90A3\u4E48\u4ED6\u7A76\u7ADF\u505A\u4E86\u4EC0\u4E48\u5462\uFF1F</p><ul><li><p>\u5BF9\u4E8E<code>mount</code>\u7684\u7EC4\u4EF6\uFF0C\u4ED6\u4F1A\u521B\u5EFA\u65B0\u7684<code>\u5B50Fiber\u8282\u70B9</code></p></li><li><p>\u5BF9\u4E8E<code>update</code>\u7684\u7EC4\u4EF6\uFF0C\u4ED6\u4F1A\u5C06\u5F53\u524D\u7EC4\u4EF6\u4E0E\u8BE5\u7EC4\u4EF6\u5728\u4E0A\u6B21\u66F4\u65B0\u65F6\u5BF9\u5E94\u7684<code>Fiber\u8282\u70B9</code>\u6BD4\u8F83\uFF08\u4E5F\u5C31\u662F\u4FD7\u79F0\u7684<code>Diff</code>\u7B97\u6CD5\uFF09\uFF0C\u5C06\u6BD4\u8F83\u7684\u7ED3\u679C\u751F\u6210\u65B0<code>Fiber\u8282\u70B9</code></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reconcileChildren</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">nextChildren</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">renderLanes</span><span class="token operator">:</span> Lanes</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9\u4E8Emount\u7684\u7EC4\u4EF6</span>
    workInProgress<span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token function">mountChildFibers</span><span class="token punctuation">(</span>
      workInProgress<span class="token punctuation">,</span>
      <span class="token keyword">null</span><span class="token punctuation">,</span>
      nextChildren<span class="token punctuation">,</span>
      renderLanes<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9\u4E8Eupdate\u7684\u7EC4\u4EF6</span>
    workInProgress<span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token function">reconcileChildFibers</span><span class="token punctuation">(</span>
      workInProgress<span class="token punctuation">,</span>
      current<span class="token punctuation">.</span>child<span class="token punctuation">,</span>
      nextChildren<span class="token punctuation">,</span>
      renderLanes<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u4ECE\u4EE3\u7801\u53EF\u4EE5\u770B\u51FA\uFF0C\u548C<code>beginWork</code>\u4E00\u6837\uFF0C\u4ED6\u4E5F\u662F\u901A\u8FC7<code>current === null ?</code>\u533A\u5206<code>mount</code>\u4E0E<code>update</code>\u3002</p>`,5),an=n("\u4E0D\u8BBA\u8D70\u54EA\u4E2A\u903B\u8F91\uFF0C\u6700\u7EC8\u4ED6\u4F1A\u751F\u6210\u65B0\u7684\u5B50"),on=s("code",null,"Fiber\u8282\u70B9",-1),pn=n("\u5E76\u8D4B\u503C\u7ED9"),tn=s("code",null,"workInProgress.child",-1),cn=n("\uFF0C\u4F5C\u4E3A\u672C\u6B21"),rn=s("code",null,"beginWork",-1),ln={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberBeginWork.new.js#L1158",target:"_blank",rel:"noopener noreferrer"},dn=n("\u8FD4\u56DE\u503C"),un=n("\uFF0C\u5E76\u4F5C\u4E3A\u4E0B\u6B21"),kn=s("code",null,"performUnitOfWork",-1),bn=n("\u6267\u884C\u65F6"),mn=s("code",null,"workInProgress",-1),_n=n("\u7684"),hn={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1702",target:"_blank",rel:"noopener noreferrer"},fn=n("\u4F20\u53C2"),gn=n("\u3002"),yn=o('<p>warning \u6CE8\u610F \u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF0C<code>mountChildFibers</code>\u4E0E<code>reconcileChildFibers</code>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u7684\u903B\u8F91\u57FA\u672C\u4E00\u81F4\u3002\u552F\u4E00\u7684\u533A\u522B\u662F\uFF1A<code>reconcileChildFibers</code>\u4F1A\u4E3A\u751F\u6210\u7684<code>Fiber\u8282\u70B9</code>\u5E26\u4E0A<code>effectTag</code>\u5C5E\u6027\uFF0C\u800C<code>mountChildFibers</code>\u4E0D\u4F1A\u3002</p><h2 id="effecttag" tabindex="-1"><a class="header-anchor" href="#effecttag" aria-hidden="true">#</a> effectTag</h2><p>\u77E5\u9053\uFF0C<code>render\u9636\u6BB5</code>\u7684\u5DE5\u4F5C\u662F\u5728\u5185\u5B58\u4E2D\u8FDB\u884C\uFF0C\u5F53\u5DE5\u4F5C\u7ED3\u675F\u540E\u4F1A\u901A\u77E5<code>Renderer</code>\u9700\u8981\u6267\u884C\u7684<code>DOM</code>\u64CD\u4F5C\u3002\u8981\u6267\u884C<code>DOM</code>\u64CD\u4F5C\u7684\u5177\u4F53\u7C7B\u578B\u5C31\u4FDD\u5B58\u5728<code>fiber.effectTag</code>\u4E2D\u3002</p>',3),wn=n("\u4F60\u53EF\u4EE5\u4ECE"),Fn={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactSideEffectTags.js",target:"_blank",rel:"noopener noreferrer"},vn=n("\u8FD9\u91CC"),Cn=n("\u770B\u5230"),Pn=s("code",null,"effectTag",-1),xn=n("\u5BF9\u5E94\u7684"),Ln=s("code",null,"DOM",-1),Wn=n("\u64CD\u4F5C"),In=o(`<p>\u6BD4\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// DOM\u9700\u8981\u63D2\u5165\u5230\u9875\u9762\u4E2D</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Placement <span class="token operator">=</span> <span class="token comment">/*                */</span> <span class="token number">0b00000000000010</span><span class="token punctuation">;</span>
<span class="token comment">// DOM\u9700\u8981\u66F4\u65B0</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Update <span class="token operator">=</span> <span class="token comment">/*                   */</span> <span class="token number">0b00000000000100</span><span class="token punctuation">;</span>
<span class="token comment">// DOM\u9700\u8981\u63D2\u5165\u5230\u9875\u9762\u4E2D\u5E76\u66F4\u65B0</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> PlacementAndUpdate <span class="token operator">=</span> <span class="token comment">/*       */</span> <span class="token number">0b00000000000110</span><span class="token punctuation">;</span>
<span class="token comment">// DOM\u9700\u8981\u5220\u9664</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Deletion <span class="token operator">=</span> <span class="token comment">/*                 */</span> <span class="token number">0b00000000001000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>\u901A\u8FC7\u4E8C\u8FDB\u5236\u8868\u793A<code>effectTag</code>\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u4F7F\u7528\u4F4D\u64CD\u4F5C\u4E3A<code>fiber.effectTag</code>\u8D4B\u503C\u591A\u4E2A<code>effect</code>\u3002</p></blockquote><p>\u90A3\u4E48\uFF0C\u5982\u679C\u8981\u901A\u77E5<code>Renderer</code>\u5C06<code>Fiber\u8282\u70B9</code>\u5BF9\u5E94\u7684<code>DOM\u8282\u70B9</code>\u63D2\u5165\u9875\u9762\u4E2D\uFF0C\u9700\u8981\u6EE1\u8DB3\u4E24\u4E2A\u6761\u4EF6\uFF1A</p><ol><li><p><code>fiber.stateNode</code>\u5B58\u5728\uFF0C\u5373<code>Fiber\u8282\u70B9</code>\u4E2D\u4FDD\u5B58\u4E86\u5BF9\u5E94\u7684<code>DOM\u8282\u70B9</code></p></li><li><p><code>(fiber.effectTag &amp; Placement) !== 0</code>\uFF0C\u5373<code>Fiber\u8282\u70B9</code>\u5B58\u5728<code>Placement effectTag</code></p></li></ol><p>\u77E5\u9053\uFF0C<code>mount</code>\u65F6\uFF0C<code>fiber.stateNode === null</code>\uFF0C\u4E14\u5728<code>reconcileChildren</code>\u4E2D\u8C03\u7528\u7684<code>mountChildFibers</code>\u4E0D\u4F1A\u4E3A<code>Fiber\u8282\u70B9</code>\u8D4B\u503C<code>effectTag</code>\u3002\u90A3\u4E48\u9996\u5C4F\u6E32\u67D3\u5982\u4F55\u5B8C\u6210\u5462\uFF1F</p><p>\u9488\u5BF9\u7B2C\u4E00\u4E2A\u95EE\u9898\uFF0C<code>fiber.stateNode</code>\u4F1A\u5728<code>completeWork</code>\u4E2D\u521B\u5EFA\uFF0C\u4F1A\u5728\u4E0B\u4E00\u8282\u4ECB\u7ECD\u3002</p><p>\u7B2C\u4E8C\u4E2A\u95EE\u9898\u7684\u7B54\u6848\u5341\u5206\u5DE7\u5999\uFF1A\u5047\u8BBE<code>mountChildFibers</code>\u4E5F\u4F1A\u8D4B\u503C<code>effectTag</code>\uFF0C\u90A3\u4E48\u53EF\u4EE5\u9884\u89C1<code>mount</code>\u65F6\u6574\u68F5<code>Fiber\u6811</code>\u6240\u6709\u8282\u70B9\u90FD\u4F1A\u6709<code>Placement effectTag</code>\u3002\u90A3\u4E48<code>commit\u9636\u6BB5</code>\u5728\u6267\u884C<code>DOM</code>\u64CD\u4F5C\u65F6\u6BCF\u4E2A\u8282\u70B9\u90FD\u4F1A\u6267\u884C\u4E00\u6B21\u63D2\u5165\u64CD\u4F5C\uFF0C\u8FD9\u6837\u5927\u91CF\u7684<code>DOM</code>\u64CD\u4F5C\u662F\u6781\u4F4E\u6548\u7684\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5728<code>mount</code>\u65F6\u53EA\u6709<code>rootFiber</code>\u4F1A\u8D4B\u503C<code>Placement effectTag</code>\uFF0C\u5728<code>commit\u9636\u6BB5</code>\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\u63D2\u5165\u64CD\u4F5C\u3002</p><p>details \u6839Fiber\u8282\u70B9 Demo \u501F\u7528\u4E0A\u4E00\u8282\u7684Demo\uFF0C\u7B2C\u4E00\u4E2A\u8FDB\u5165<code>beginWork</code>\u65B9\u6CD5\u7684<code>Fiber\u8282\u70B9</code>\u5C31\u662F<code>rootFiber</code>\uFF0C\u4ED6\u7684<code>alternate</code>\u6307\u5411<code>current rootFiber</code>\uFF08\u5373\u4ED6\u5B58\u5728<code>current</code>\uFF09\u3002</p>`,10),jn=n("\u4E3A\u4EC0\u4E48"),Rn=s("code",null,"rootFiber",-1),Tn=n("\u8282\u70B9\u5B58\u5728"),Dn=s("code",null,"current",-1),On=n("\uFF08\u5373"),Bn=s("code",null,"rootFiber.alternate",-1),Mn=n("\uFF09\uFF0C\u5728"),Un=n("\u53CC\u7F13\u5B58\u673A\u5236\u4E00\u8282mount\u65F6\u7684\u7B2C\u4E8C\u6B65"),Nn=n("\u5DF2\u7ECF\u8BB2\u8FC7"),Hn=o("<p>\u7531\u4E8E\u5B58\u5728<code>current</code>\uFF0C<code>rootFiber</code>\u5728<code>reconcileChildren</code>\u65F6\u4F1A\u8D70<code>reconcileChildFibers</code>\u903B\u8F91\u3002</p><p>\u800C\u4E4B\u540E\u901A\u8FC7<code>beginWork</code>\u521B\u5EFA\u7684<code>Fiber\u8282\u70B9</code>\u662F\u4E0D\u5B58\u5728<code>current</code>\u7684\uFF08\u5373 <code>fiber.alternate === null</code>\uFF09\uFF0C\u4F1A\u8D70<code>mountChildFibers</code>\u903B\u8F91</p>",2),En={href:"https://codesandbox.io/s/fiber-root-hxvml",target:"_blank",rel:"noopener noreferrer"},Sn=n("\u6267\u884C\u6D41\u7A0B"),qn=s("h2",{id:"\u53C2\u8003\u8D44\u6599",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u53C2\u8003\u8D44\u6599","aria-hidden":"true"},"#"),n(" \u53C2\u8003\u8D44\u6599")],-1),Vn=s("p",null,[s("code",null,"beginWork"),n("\u6D41\u7A0B\u56FE")],-1),zn=["src"];function An(r,$n){const a=c("ExternalLinkIcon"),p=c("RouterLink");return i(),d(u,null,[b,m,s("p",null,[_,s("a",h,[f,e(a)]),g,y,w]),F,s("p",null,[v,e(p,{to:"/react/process/doubleBuffer.html"},{default:t(()=>[C]),_:1}),P,e(p,{to:"/react/process/doubleBuffer.html#mount%E6%97%B6"},{default:t(()=>[x]),_:1}),L,W,I,j,R,T,D,O,B,M,U]),N,s("blockquote",null,[s("p",null,[H,s("a",E,[S,e(a)]),q,V,z])]),A,s("p",null,[$,G,J,K,Q,X,Y,s("a",Z,[nn,e(a)]),sn]),en,s("p",null,[an,on,pn,tn,cn,rn,s("a",ln,[dn,e(a)]),un,kn,bn,mn,_n,s("a",hn,[fn,e(a)]),gn]),yn,s("blockquote",null,[s("p",null,[wn,s("a",Fn,[vn,e(a)]),Cn,Pn,xn,Ln,Wn])]),In,s("blockquote",null,[s("p",null,[jn,Rn,Tn,Dn,On,Bn,Mn,e(p,{to:"/react/process/doubleBuffer.html"},{default:t(()=>[Un]),_:1}),Nn])]),Hn,s("p",null,[s("a",En,[Sn,e(a)])]),qn,Vn,s("img",{src:r.$withBase("/assets/react/beginWork.png"),alt:"beginWork\u6D41\u7A0B\u56FE"},null,8,zn)],64)}var Jn=l(k,[["render",An],["__file","beginWork.html.vue"]]);export{Jn as default};
