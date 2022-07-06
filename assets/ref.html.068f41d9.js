import{_ as n,a as s}from"./app.41d9fe5b.js";const a={},e=s(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="coerceref" tabindex="-1"><a class="header-anchor" href="#coerceref" aria-hidden="true">#</a> coerceRef</h1><p>\u5728\u8C03\u548C\u5B50\u8282\u70B9\u5F97\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u5BF9<code>ReactElement</code>\u4E2D\u5F97<code>ref</code>\u8FDB\u884C\u5904\u7406\uFF0C\u4E3B\u8981\u662F\u5904\u7406<code>string ref</code>\uFF0C\u628A\u4ED6\u8F6C\u6362\u6210\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4E3B\u8981\u505A\u7684\u4E8B\u60C5\u5C31\u662F\u8BBE\u7F6E<code>instance.refs[stringRef] = element</code>\uFF0C\u76F8\u5F53\u4E8E\u628A\u4ED6\u8F6C\u6362\u6210\u4E86<code>function ref</code></p><p>\u5BF9\u4E8E\u66F4\u65B0\u5F97\u8FC7\u7A0B\u4E2D<code>string ref</code>\u662F\u5426\u53D8\u5316\u9700\u8981\u5BF9\u6BD4\u5F97\u662F<code>current.ref._stringRef</code>\uFF0C\u8FD9\u91CC\u8BB0\u5F55\u4E86\u4E0A\u4E00\u6B21\u6E32\u67D3\u5F97\u65F6\u5019\u5982\u679C\u4F7F\u7528\u5F97\u662F<code>string ref</code>\u4ED6\u7684\u503C\u662F\u4EC0\u4E48</p><p><code>owner</code>\u662F\u5728\u8C03\u7528<code>createElement</code>\u7684\u65F6\u5019\u83B7\u53D6\u7684\uFF0C\u901A\u8FC7<code>ReactCurrentOwner.current</code>\u83B7\u53D6\uFF0C\u8FD9\u4E2A\u503C\u5728\u66F4\u65B0\u4E00\u4E2A\u7EC4\u4EF6\u524D\u4F1A\u88AB\u8BBE\u7F6E\uFF0C\u6BD4\u5982\u66F4\u65B0<code>ClassComponent</code>\u7684\u65F6\u5019\uFF0C\u8C03\u7528<code>render</code>\u65B9\u6CD5\u4E4B\u524D\u4F1A\u8BBE\u7F6E\uFF0C\u7136\u540E\u8C03\u7528<code>render</code>\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u83B7\u53D6\u5BF9\u5E94\u7684<code>owner</code>\u4E86\u3002</p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8C03\u7528</span>
existing<span class="token punctuation">.</span>ref <span class="token operator">=</span> <span class="token function">coerceRef</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> current<span class="token punctuation">,</span> element<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">coerceRef</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">element</span><span class="token operator">:</span> ReactElement<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> mixedRef <span class="token operator">=</span> element<span class="token punctuation">.</span>ref
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    mixedRef <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> mixedRef <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> mixedRef <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// dev code</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>_owner<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">owner</span><span class="token operator">:</span> <span class="token operator">?</span>Fiber <span class="token operator">=</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>_owner<span class="token operator">:</span> any<span class="token punctuation">)</span>
      <span class="token keyword">let</span> inst
      <span class="token keyword">if</span> <span class="token punctuation">(</span>owner<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> ownerFiber <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>owner<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> Fiber<span class="token punctuation">)</span>
        <span class="token comment">// \u63D0\u9192</span>
        inst <span class="token operator">=</span> ownerFiber<span class="token punctuation">.</span>stateNode
      <span class="token punctuation">}</span>
      <span class="token comment">// \u63D0\u9192</span>
      <span class="token keyword">const</span> stringRef <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> mixedRef
      <span class="token comment">// Check if previous string ref matches new string ref</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
        current<span class="token punctuation">.</span>ref <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
        <span class="token keyword">typeof</span> current<span class="token punctuation">.</span>ref <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span>
        current<span class="token punctuation">.</span>ref<span class="token punctuation">.</span>_stringRef <span class="token operator">===</span> stringRef
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> current<span class="token punctuation">.</span>ref
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> <span class="token function-variable function">ref</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> refs <span class="token operator">=</span> inst<span class="token punctuation">.</span>refs
        <span class="token keyword">if</span> <span class="token punctuation">(</span>refs <span class="token operator">===</span> emptyRefsObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// This is a lazy pooled frozen object, so we need to initialize.</span>
          refs <span class="token operator">=</span> inst<span class="token punctuation">.</span>refs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">delete</span> refs<span class="token punctuation">[</span>stringRef<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          refs<span class="token punctuation">[</span>stringRef<span class="token punctuation">]</span> <span class="token operator">=</span> value
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      ref<span class="token punctuation">.</span>_stringRef <span class="token operator">=</span> stringRef
      <span class="token keyword">return</span> ref
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u63D0\u9192</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> mixedRef
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h1 id="commitattachref" tabindex="-1"><a class="header-anchor" href="#commitattachref" aria-hidden="true">#</a> commitAttachRef</h1><p>\u5728<code>commitRoot</code>\u6700\u540E\u9636\u6BB5\uFF0C<code>commitAllLifecycle</code>\u7684\u65F6\u5019\uFF0C\u5982\u679C\u53C8<code>Ref</code>\u5F97<code>side effect</code>\uFF0C\u5219\u4F1A\u8C03\u7528\u8BE5\u65B9\u6CD5</p><p>\u8BE5\u65B9\u6CD5\u5F88\u7B80\u5355\uFF0C\u83B7\u53D6<code>ref</code>\u4F5C\u7528\u5F97\u8282\u70B9\uFF0C\u5E76\u6839\u636E<code>ref</code>\u7684\u7C7B\u578B\uFF0C\u8C03\u7528\u65B9\u6CD5\uFF0C\u6216\u8005\u8D4B\u503C<code>ref.current</code>\uFF0C\u56E0\u4E3A<code>ref</code>\u5DF2\u7ECF\u5728<code>coerceRef</code>\u5904\u7406\u8FC7\u4E86\uFF0C\u4E0D\u4F1A\u5B58\u5728\u8FD8\u662F<code>string</code>\u5F97\u60C5\u51B5\u3002</p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitAttachRef</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>ref
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ref <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> instance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>stateNode
    <span class="token keyword">let</span> instanceToUse
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
        instanceToUse <span class="token operator">=</span> <span class="token function">getPublicInstance</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        instanceToUse <span class="token operator">=</span> instance
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> ref <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">ref</span><span class="token punctuation">(</span>instanceToUse<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      ref<span class="token punctuation">.</span>current <span class="token operator">=</span> instanceToUse
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h1 id="commitdetachref" tabindex="-1"><a class="header-anchor" href="#commitdetachref" aria-hidden="true">#</a> commitDetachRef</h1><p>\u5378\u8F7D<code>ref</code>\uFF0C\u8BBE\u7F6E\u4E3A<code>null</code></p><p>\u5728<code>commitAllHostEffects</code>\u7684\u65F6\u5019\u4F1A\u7EDF\u4E00\u5BF9\u6240\u6709\u6709<code>ref</code>\u7684<code>side effect</code>\u7684\u8282\u70B9\u5148\u5378\u8F7D<code>ref</code>\uFF0C\u540E\u7EED\u4F1A\u7EDF\u4E00\u518D\u8BBE\u7F6E\u3002</p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitDetachRef</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> currentRef <span class="token operator">=</span> current<span class="token punctuation">.</span>ref
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentRef <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> currentRef <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">currentRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      currentRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,17);function p(t,o){return e}var r=n(a,[["render",p],["__file","ref.html.vue"]]);export{r as default};
