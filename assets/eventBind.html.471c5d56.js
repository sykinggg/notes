import{_ as n,a as s}from"./app.c9ab80ba.js";const a={},p=s(`<h1 id="\u4E8B\u4EF6\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u7ED1\u5B9A" aria-hidden="true">#</a> \u4E8B\u4EF6\u7ED1\u5B9A</h1><p>\u4E8B\u4EF6\u7ED1\u5B9A\u4E3B\u8981\u662F\u5728\u521D\u59CB\u5316 DOM \u7684\u4E8B\u4EF6\uFF0C\u5F53\u7136\u5728 DOM \u66F4\u65B0\u8FC7\u7A0B\u4E2D\u4E5F\u4F1A\u51FA\u73B0\uFF0C\u4E0D\u8FC7\u8F83\u5C11\uFF0C\u6240\u4EE5\u5C31\u4ECE\u521D\u59CB\u5316 DOM \u7684\u65F6\u5019\u5165\u624B\u6765\u8BB2\u3002\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\u4F1A\u8C03\u7528\u4E00\u4E2A\u65B9\u6CD5\u53EB\u505A<code>setInitialProperties</code>\uFF0C\u8FD9\u91CC\u4E00\u5F00\u59CB\u5C31\u5BF9\u4E00\u4E9B\u7C7B\u578B\u7684\u8282\u70B9\u6267\u884C\u4E86\u4E00\u4E9B\u4E8B\u4EF6\u7ED1\u5B9A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">&#39;iframe&#39;</span><span class="token operator">:</span>
  <span class="token keyword">case</span> <span class="token string">&#39;object&#39;</span><span class="token operator">:</span>
    <span class="token function">trapBubbledEvent</span><span class="token punctuation">(</span><span class="token constant">TOP_LOAD</span><span class="token punctuation">,</span> domElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
    props <span class="token operator">=</span> rawProps<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">&#39;video&#39;</span><span class="token operator">:</span>
  <span class="token keyword">case</span> <span class="token string">&#39;audio&#39;</span><span class="token operator">:</span>
    <span class="token comment">// Create listener for each media event</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> mediaEventTypes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">trapBubbledEvent</span><span class="token punctuation">(</span>mediaEventTypes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> domElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    props <span class="token operator">=</span> rawProps<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token comment">// ... others</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u8FD9\u91CC\u8C03\u7528\u7684\u65B9\u6CD5\u662F<code>trapBubbledEvent</code></p><p>\u800C\u540E\u9762\u8C03\u7528\u4E86\u65B9\u6CD5<code>setInitialDOMProperties</code>\u6765\u771F\u6B63\u5F97\u521D\u59CB\u5316 DOM \u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>registrationNameModules<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>propKey<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nextProp <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> nextProp <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warnForInvalidEventListener</span><span class="token punctuation">(</span>propKey<span class="token punctuation">,</span> nextProp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">ensureListeningTo</span><span class="token punctuation">(</span>rootContainerElement<span class="token punctuation">,</span> propKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8FD9\u91CC\u5224\u65AD\u4E86\u67D0\u4E2A<code>propKey</code>\u662F\u5426\u5728<code>registrationNameModules</code>\u4E2D\uFF0C\u800C<code>registrationNameModules</code>\u662F\u5728\u521D\u59CB\u5316\u4E8B\u4EF6\u7CFB\u7EDF\u4E2D\u6CE8\u518C\u7684\u4E8B\u4EF6\u540D\u5BF9\u5E94\u7684\u6A21\u5757\u7684\u5BF9\u8C61\uFF0C\u8FD9\u5C31\u8054\u7CFB\u8D77\u6765\u4E86\u3002</p><p>\u8FD9\u91CC\u8C03\u7528\u4E86<code>ensureListeningTo</code>\uFF0C\u6765\u770B\u4E00\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ensureListeningTo</span><span class="token punctuation">(</span><span class="token parameter">rootContainerElement<span class="token punctuation">,</span> registrationName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isDocumentOrFragment <span class="token operator">=</span>
    rootContainerElement<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token constant">DOCUMENT_NODE</span> <span class="token operator">||</span>
    rootContainerElement<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token constant">DOCUMENT_FRAGMENT_NODE</span>
  <span class="token keyword">const</span> doc <span class="token operator">=</span> isDocumentOrFragment
    <span class="token operator">?</span> rootContainerElement
    <span class="token operator">:</span> rootContainerElement<span class="token punctuation">.</span>ownerDocument
  <span class="token function">listenTo</span><span class="token punctuation">(</span>registrationName<span class="token punctuation">,</span> doc<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>rootContainerElement</code>\u662F React \u5E94\u7528\u7684\u6302\u8F7D\u70B9\uFF0C\u6216\u8005\u662F<code>HostPortal</code>\u7684<code>container</code>\uFF0C\u6240\u4EE5\u8FD9\u4E9B\u4E8B\u4EF6\u5176\u5B9E\u90FD\u662F\u901A\u8FC7\u4E8B\u4EF6\u4EE3\u7406\u6765\u5B9E\u73B0\u7684\u3002\u7EE7\u7EED\u770B<code>listenTo</code>\u7684\u4EE3\u7801\uFF0C\u4ED6\u6765\u81EA<code>ReactBrowserEventEmitter.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">listenTo</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">registrationName</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">mountAt</span><span class="token operator">:</span> Document <span class="token operator">|</span> Element<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isListening <span class="token operator">=</span> <span class="token function">getListeningForDocument</span><span class="token punctuation">(</span>mountAt<span class="token punctuation">)</span>
  <span class="token keyword">const</span> dependencies <span class="token operator">=</span> registrationNameDependencies<span class="token punctuation">[</span>registrationName<span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> dependencies<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dependency <span class="token operator">=</span> dependencies<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>isListening<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>dependency<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> isListening<span class="token punctuation">[</span>dependency<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>dependency<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token constant">TOP_SCROLL</span><span class="token operator">:</span>
          <span class="token function">trapCapturedEvent</span><span class="token punctuation">(</span><span class="token constant">TOP_SCROLL</span><span class="token punctuation">,</span> mountAt<span class="token punctuation">)</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token constant">TOP_FOCUS</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token constant">TOP_BLUR</span><span class="token operator">:</span>
          <span class="token function">trapCapturedEvent</span><span class="token punctuation">(</span><span class="token constant">TOP_FOCUS</span><span class="token punctuation">,</span> mountAt<span class="token punctuation">)</span>
          <span class="token function">trapCapturedEvent</span><span class="token punctuation">(</span><span class="token constant">TOP_BLUR</span><span class="token punctuation">,</span> mountAt<span class="token punctuation">)</span>
          <span class="token comment">// We set the flag for a single dependency later in this function,</span>
          <span class="token comment">// but this ensures we mark both as attached rather than just one.</span>
          isListening<span class="token punctuation">[</span><span class="token constant">TOP_BLUR</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
          isListening<span class="token punctuation">[</span><span class="token constant">TOP_FOCUS</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token constant">TOP_CANCEL</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token constant">TOP_CLOSE</span><span class="token operator">:</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEventSupported</span><span class="token punctuation">(</span><span class="token function">getRawEventName</span><span class="token punctuation">(</span>dependency<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">trapCapturedEvent</span><span class="token punctuation">(</span>dependency<span class="token punctuation">,</span> mountAt<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token constant">TOP_INVALID</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token constant">TOP_SUBMIT</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token constant">TOP_RESET</span><span class="token operator">:</span>
          <span class="token comment">// We listen to them on the target DOM elements.</span>
          <span class="token comment">// Some of them bubble so we don&#39;t want them to fire twice.</span>
          <span class="token keyword">break</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
          <span class="token comment">// By default, listen on the top level to all non-media events.</span>
          <span class="token comment">// Media events don&#39;t bubble so adding the listener wouldn&#39;t do anything.</span>
          <span class="token keyword">const</span> isMediaEvent <span class="token operator">=</span> mediaEventTypes<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>dependency<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isMediaEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">trapBubbledEvent</span><span class="token punctuation">(</span>dependency<span class="token punctuation">,</span> mountAt<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
      isListening<span class="token punctuation">[</span>dependency<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u9664\u4E86\u4E00\u4E9B\u7279\u5B9A\u7684\u4E8B\u4EF6\u8C03\u7528<code>trapCapturedEvent</code>\u4E4B\u5916\uFF0C\u5176\u4ED6\u90FD\u7ED1\u5B9A<code>trapBubbledEvent</code>\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u7ED1\u5B9A\u7684\u65F6\u5019\u9700\u8981\u83B7\u53D6\u67D0\u4E2A\u4E8B\u4EF6\u7684<code>dependencies</code>\uFF0C\u6765\u81EA<code>registrationNameDependencies</code>\u3002\u5176\u5B9E\u770B\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u7684\u540D\u5B57\u5C31\u53EF\u4EE5\u77E5\u9053\uFF0C\u4ED6\u4EEC\u5206\u522B\u76D1\u542C\u7684\u662F\u6355\u83B7\u548C\u5192\u6CE1\u9636\u6BB5\u3002\u63A5\u4E0B\u53BB\u5C31\u6765\u770B\u770B\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u505A\u4E86\u4EC0\u4E48\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">trapBubbledEvent</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">topLevelType</span><span class="token operator">:</span> DOMTopLevelEventType<span class="token punctuation">,</span>
  <span class="token literal-property property">element</span><span class="token operator">:</span> Document <span class="token operator">|</span> Element<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">isInteractiveTopLevelEventType</span><span class="token punctuation">(</span>topLevelType<span class="token punctuation">)</span>
    <span class="token operator">?</span> dispatchInteractiveEvent
    <span class="token operator">:</span> dispatchEvent

  <span class="token function">addEventBubbleListener</span><span class="token punctuation">(</span>
    element<span class="token punctuation">,</span>
    <span class="token function">getRawEventName</span><span class="token punctuation">(</span>topLevelType<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// Check if interactive and wrap in interactiveUpdates</span>
    <span class="token function">dispatch</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> topLevelType<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">trapCapturedEvent</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">topLevelType</span><span class="token operator">:</span> DOMTopLevelEventType<span class="token punctuation">,</span>
  <span class="token literal-property property">element</span><span class="token operator">:</span> Document <span class="token operator">|</span> Element<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">isInteractiveTopLevelEventType</span><span class="token punctuation">(</span>topLevelType<span class="token punctuation">)</span>
    <span class="token operator">?</span> dispatchInteractiveEvent
    <span class="token operator">:</span> dispatchEvent

  <span class="token function">addEventCaptureListener</span><span class="token punctuation">(</span>
    element<span class="token punctuation">,</span>
    <span class="token function">getRawEventName</span><span class="token punctuation">(</span>topLevelType<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// Check if interactive and wrap in interactiveUpdates</span>
    <span class="token function">dispatch</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> topLevelType<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p><code>dispatchInteractiveEvent</code>\u548C<code>dispatchEvent</code>\u5206\u522B\u5BF9\u5E94\u4E0D\u540C\u4F18\u5148\u7EA7\u7684\u4E8B\u4EF6\uFF0C\u524D\u8005\u4F18\u5148\u7EA7\u8F83\u9AD8\uFF0C\u5982\u679C\u5904\u4E8E<code>ConcurrentMode</code>\u4EA7\u751F\u7684<code>expirationTime</code>\u4F1A\u8F83\u5C0F\u3002\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5230\u8BB2\u89E3<a href="">\u4E8B\u4EF6\u89E6\u53D1\u8FC7\u7A0B</a>\u4E2D\u53BB\u8BB2\u89E3\u3002</p><p>\u800C<code>addEventBubbleListener</code>\u548C<code>addEventCaptureListener</code>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5C31\u5F88\u7B80\u5355\u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">addEventBubbleListener</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">element</span><span class="token operator">:</span> Document <span class="token operator">|</span> Element<span class="token punctuation">,</span>
  <span class="token literal-property property">eventType</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">listener</span><span class="token operator">:</span> Function<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> listener<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">addEventCaptureListener</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">element</span><span class="token operator">:</span> Document <span class="token operator">|</span> Element<span class="token punctuation">,</span>
  <span class="token literal-property property">eventType</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">listener</span><span class="token operator">:</span> Function<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> listener<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u4E8B\u4EF6\u901A\u8FC7\u4E8B\u4EF6\u4EE3\u7406\u7684\u65B9\u5F0F\u7ED1\u5B9A\u5230\u4E86<code>container</code>\u5BF9\u8C61\u4E0A\u3002\u5F53\u7136\u5BF9\u4E8E\u7279\u6B8A\u7684\u8282\u70B9\u7684\u4E0D\u4F1A\u5192\u6CE1\u7684\u4E8B\u4EF6\uFF0C\u5728<code>setInitialProperties</code>\u4E2D\u5DF2\u7ECF\u4E8B\u5148\u76F4\u63A5\u7ED1\u5B9A\u5230\u8282\u70B9\u4E0A\u4E86\u3002</p>`,17);function e(t,o){return p}var l=n(a,[["render",e],["__file","eventBind.html.vue"]]);export{l as default};
