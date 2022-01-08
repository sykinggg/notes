import{e as n}from"./app.5ba8e4fa.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a> \u5F00\u59CB</h1><p>\u5728<code>React.js</code>\u4E2D\u53EF\u4EE5\u770B\u5230Hooks\u5BFC\u5165\u7684\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  useCallback<span class="token punctuation">,</span>
  useContext<span class="token punctuation">,</span>
  useEffect<span class="token punctuation">,</span>
  useImperativeMethods<span class="token punctuation">,</span>
  useLayoutEffect<span class="token punctuation">,</span>
  useMemo<span class="token punctuation">,</span>
  useReducer<span class="token punctuation">,</span>
  useRef<span class="token punctuation">,</span>
  useState<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactHooks&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5177\u4F53\u7684\u4EE3\u7801\u662F\u600E\u6837\u7684\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">resolveDispatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dispatcher <span class="token operator">=</span> ReactCurrentOwner<span class="token punctuation">.</span>currentDispatcher<span class="token punctuation">;</span>
  <span class="token keyword">return</span> dispatcher<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> useState<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>initialState<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">S</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token constant">S</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dispatcher <span class="token operator">=</span> <span class="token function">resolveDispatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> dispatcher<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span>initialState<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useEffect</span><span class="token punctuation">(</span>
  <span class="token function-variable function">create</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> mixed<span class="token punctuation">,</span>
  <span class="token literal-property property">inputs</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dispatcher <span class="token operator">=</span> <span class="token function">resolveDispatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> dispatcher<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span>create<span class="token punctuation">,</span> inputs<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> useContext<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">Context</span><span class="token operator">:</span> ReactContext<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">observedBits</span><span class="token operator">:</span> number <span class="token operator">|</span> boolean <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dispatcher <span class="token operator">=</span> <span class="token function">resolveDispatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// dev code</span>
  <span class="token keyword">return</span> dispatcher<span class="token punctuation">.</span><span class="token function">useContext</span><span class="token punctuation">(</span>Context<span class="token punctuation">,</span> observedBits<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u4EE5\u4E0A\u5C31\u662F\u4E09\u4E2A\u6700\u5E38\u7528\u7684<code>Hooks</code>\u5728<code>React</code>\u4E2D\u7684\u6E90\u7801\uFF0C\u53EF\u89C1\u4ED6\u4EEC\u4E5F\u8DDF\u5176\u4ED6React\u7684API\u4E00\u6837\uFF0C\u53EA\u7BA1\u5B9A\u4E49\uFF0C\u4E0D\u7BA1\u5B9E\u73B0\u3002\u4ED6\u4EEC\u90FD\u8C03\u7528\u4E86<code>ReactCurrentOwner.currentDispatcher.xxx</code>\u5BF9\u5E94\u7684\u65B9\u6CD5\u3002\u90A3\u4E48\u8FD9\u4E2A<code>ReactCurrentOwner.currentDispatcher</code>\u662F\u5565\u5462\uFF1F</p><p>\u5728\u6267\u884C<code>renderRoot</code>\u5F00\u59CB\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u4F1A\u8BBE\u7F6E\u8FD9\u4E2A\u503C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Dispatcher<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactFiberDispatcher&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>enableHooks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ReactCurrentOwner<span class="token punctuation">.</span>currentDispatcher <span class="token operator">=</span> Dispatcher<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5E76\u4E14\u5728\u79BB\u5F00<code>renderRoot</code>\u7684\u65F6\u5019\u8BBE\u7F6E\u4E3A<code>null</code>\u3002\u90A3\u4E48\u8FD9\u4E2A<code>Dispatcher</code>\u53C8\u662F\u5565\u5462\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ReactFiberDispatcher.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>readContext<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactFiberNewContext&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  useCallback<span class="token punctuation">,</span>
  useContext<span class="token punctuation">,</span>
  useEffect<span class="token punctuation">,</span>
  useImperativeMethods<span class="token punctuation">,</span>
  useLayoutEffect<span class="token punctuation">,</span>
  useMemo<span class="token punctuation">,</span>
  useReducer<span class="token punctuation">,</span>
  useRef<span class="token punctuation">,</span>
  useState<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ReactFiberHooks&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Dispatcher <span class="token operator">=</span> <span class="token punctuation">{</span>
  readContext<span class="token punctuation">,</span>
  useCallback<span class="token punctuation">,</span>
  useContext<span class="token punctuation">,</span>
  useEffect<span class="token punctuation">,</span>
  useImperativeMethods<span class="token punctuation">,</span>
  useLayoutEffect<span class="token punctuation">,</span>
  useMemo<span class="token punctuation">,</span>
  useReducer<span class="token punctuation">,</span>
  useRef<span class="token punctuation">,</span>
  useState<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>OK\uFF0CHooks\u65B9\u6CD5\u7684\u6E90\u5934\u4EE3\u7801\u627E\u5230\u4E86\u3002\u9700\u8981\u6CE8\u610F\u7684\u662FHooks\u53EA\u6709<code>FunctionalComponent</code>\u88AB\u66F4\u65B0\u7684\u65F6\u5019\u624D\u4F1A\u88AB\u8C03\u7528\uFF0C\u6240\u4EE5\u80AF\u5B9A\u9700\u8981\u5173\u5FC3\u4E00\u4E0B<code>FunctionalComponent</code>\u7684\u66F4\u65B0\u8FC7\u7A0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateFunctionComponent</span><span class="token punctuation">(</span>
  <span class="token parameter">current<span class="token punctuation">,</span>
  workInProgress<span class="token punctuation">,</span>
  Component<span class="token punctuation">,</span>
  <span class="token literal-property property">nextProps</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  renderExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> unmaskedContext <span class="token operator">=</span> <span class="token function">getUnmaskedContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> Component<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">getMaskedContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> unmaskedContext<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> nextChildren<span class="token punctuation">;</span>
  <span class="token function">prepareToReadContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">prepareToUseHooks</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
  nextChildren <span class="token operator">=</span> <span class="token function">Component</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
  nextChildren <span class="token operator">=</span> <span class="token function">finishHooks</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span> nextProps<span class="token punctuation">,</span> nextChildren<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// React DevTools reads this flag.</span>
  workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">|=</span> PerformedWork<span class="token punctuation">;</span>
  <span class="token function">reconcileChildren</span><span class="token punctuation">(</span>
    current<span class="token punctuation">,</span>
    workInProgress<span class="token punctuation">,</span>
    nextChildren<span class="token punctuation">,</span>
    renderExpirationTime<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> workInProgress<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u8FD9\u91CC\u589E\u52A0\u4E86\u4E09\u4E2A\u65B9\u6CD5\u8C03\u7528\uFF1A<code>prepareToReadContext</code>\uFF0C<code>prepareToUseHooks</code>\uFF0C<code>finishHooks</code>\u3002\u540E\u4E24\u4E2A\u90FD\u660E\u663E\u8DDFHooks\u6709\u5173\uFF0C\u800C\u7B2C\u4E00\u4E2A\u662F\u8BFB\u53D6\u65B0\u7684<code>Context API</code>\u7684\uFF0C\u56E0\u4E3A\u5728Hooks\u4E2D\u6709\u8BFB\u53D6<code>Context</code>\u7684\u64CD\u4F5C\uFF0C\u6240\u4EE5\u589E\u52A0\u8FD9\u4E2A\u5C31\u65E0\u53EF\u539A\u975E\u4E86\u3002\u770B\u4E00\u4E0B<code>prepareToUseHooks</code>\u548C<code>finishHooks</code>\u5206\u522B\u505A\u4E86\u4EC0\u4E48\u3002</p><h2 id="preparetousehooks" tabindex="-1"><a class="header-anchor" href="#preparetousehooks" aria-hidden="true">#</a> prepareToUseHooks</h2><p>\u8FD9\u4E2A\u65B9\u6CD5\u6765\u81EA<code>ReactFiberHooks.js</code>\uFF0C\u660E\u663E\u53EA\u662F\u521D\u59CB\u5316\u4E00\u4E9B\u6A21\u5757\u5185\u7684\u5168\u5C40\u53D8\u91CF\u3002</p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">prepareToUseHooks</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">nextRenderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  renderExpirationTime <span class="token operator">=</span> nextRenderExpirationTime<span class="token punctuation">;</span>
  currentlyRenderingFiber <span class="token operator">=</span> workInProgress<span class="token punctuation">;</span>
  firstCurrentHook <span class="token operator">=</span> current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> current<span class="token punctuation">.</span>memoizedState <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="finishhooks" tabindex="-1"><a class="header-anchor" href="#finishhooks" aria-hidden="true">#</a> finishHooks</h2><p>\u76F8\u6BD4\u4E4B\u4E0B<code>finishHooks</code>\u5219\u590D\u6742\u5F88\u591A\uFF0C\u4E00\u8FDB\u6765\u5C31\u6709\u4E00\u4E2A<code>while</code>\u5FAA\u73AF\uFF0C\u8FD9\u4E2A\u5FAA\u73AF\u662F\u56E0\u4E3AHooks\u63D0\u4F9B\u4E86\u4E00\u4E2A\u529F\u80FD\uFF1A**\u5982\u679C\u5728\u4E00\u6B21\u66F4\u65B0\u4E2D\uFF08\u4E5F\u5C31\u662F\u8C03\u7528<code>FunctionalComponent</code>\u7684\u8FC7\u7A0B\u4E2D\uFF09\u5982\u679C\u76F4\u63A5\u8C03\u7528\u4E86\u7C7B\u4F3C<code>setState</code>\u7684Hooks API\u4EA7\u751F\u4E86\u65B0\u7684\u66F4\u65B0\uFF0C\u5219\u4F1A\u5728\u5F53\u524D\u7684\u6E32\u67D3\u5468\u671F\u4E2D\u76F4\u63A5\u6267\u884C\u66F4\u65B0\u3002**\u8FD9\u4E2A\u5927\u5BB6\u53EF\u4EE5\u5148\u4E86\u89E3\u4E00\u4E0B\uFF0C\u540E\u9762\u5177\u4F53\u8BB2Hooks\u7684\u5B9E\u73B0\u4F1A\u518D\u5177\u4F53\u8BB2\u5230\u3002</p><p>\u540E\u9762\u8BBE\u7F6E\u4E86<code>renderedWork.updateQueue</code>\uFF0C\u5C31\u975E\u5E38\u7C7B\u4F3C\u4E8E<code>HostComponent</code>\u548C<code>ClassComponent</code>\u4E86\uFF0C\u672C\u6765<code>FunctionalComponent</code>\u5728<code>commit</code>\u9636\u6BB5\u662F\u5B8C\u5168\u6CA1\u6709\u66F4\u65B0\u7684\uFF0C\u4F46\u662F\u73B0\u5728Hooks\u7ED9\u4E86\u4ED6\u4EA7\u751F<code>side effect</code>\u7684\u80FD\u529B\uFF0C\u6240\u4EE5\u8FD9\u5C31\u662F\u8BB0\u5F55\u8FD9\u4E9B<code>side effect</code>\u7684<code>queue</code>\u3002</p><p>\u540E\u9762\u5C31\u662F\u521D\u59CB\u5316\u5168\u5C40\u53D8\u91CF\u4E86\uFF0C\u5C31\u5148\u4E0D\u591A\u8BB2\u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">finishHooks</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">Component</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">refOrContext</span><span class="token operator">:</span> any<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>didScheduleRenderPhaseUpdate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    didScheduleRenderPhaseUpdate <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    numberOfReRenders <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">// Start over from the beginning of the list</span>
    currentHook <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    workInProgressHook <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    componentUpdateQueue <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    children <span class="token operator">=</span> <span class="token function">Component</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> refOrContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  renderPhaseUpdates <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  numberOfReRenders <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token literal-property property">renderedWork</span><span class="token operator">:</span> Fiber <span class="token operator">=</span> <span class="token punctuation">(</span>currentlyRenderingFiber<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>

  renderedWork<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> firstWorkInProgressHook<span class="token punctuation">;</span>
  renderedWork<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> remainingExpirationTime<span class="token punctuation">;</span>
  renderedWork<span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> <span class="token punctuation">(</span>componentUpdateQueue<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> didRenderTooFewHooks <span class="token operator">=</span>
    currentHook <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> currentHook<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  renderExpirationTime <span class="token operator">=</span> NoWork<span class="token punctuation">;</span>
  currentlyRenderingFiber <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  firstCurrentHook <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  currentHook <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  firstWorkInProgressHook <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  workInProgressHook <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  remainingExpirationTime <span class="token operator">=</span> NoWork<span class="token punctuation">;</span>
  componentUpdateQueue <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> children<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div>`,23);function e(t,o){return p}var l=s(a,[["render",e]]);export{l as default};
