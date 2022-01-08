import{e as n}from"./app.8a201290.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="\u5E8F\u8A00" tabindex="-1"><a class="header-anchor" href="#\u5E8F\u8A00" aria-hidden="true">#</a> <strong>\u5E8F\u8A00</strong></h2><hr><blockquote><p>\u867D\u7136\u5E73\u65F6\u90FD\u559C\u6B22\u8BF4\u7528<code>React</code>\u4F5C\u4E3A\u7684\u6838\u5FC3\u6846\u67B6\uFF0C\u4F46\u5176\u5B9E\u5927\u90E8\u5206\u4EBA\u90FD\u4E0D\u77E5\u9053<code>React</code>\u5230\u5E95\u662F\u4E2A\u4EC0\u4E48\u4E1C\u4E1C\u3002\u4E8B\u5B9E\u4E0A\u81EA\u4ECEFacebook\u628A<code>React</code>\u548C<code>ReactDOM</code>\u5206\u5305\u53D1\u5E03\u4E4B\u540E\uFF0C<code>React</code>\u5C31\u4E0D\u4EC5\u4EC5\u662F\u4E00\u5F00\u59CB\u7684\u524D\u7AEF\u6846\u67B6\u4E86\uFF0C\u5982\u679C\u572815\u7248\u672C\u4E4B\u540E\u53BB\u770B\u4E00\u4E0B<code>react</code>\u548C<code>react-dom</code>\u7684\u6E90\u7801\u5927\u5C0F\uFF0C\u5C31\u4F1A\u53D1\u73B0\uFF0C<code>react</code>\u4EC5\u4EC51000\u591A\u884C\u4EE3\u7801\uFF0C\u800C<code>react-dom</code>\u5374\u5C06\u8FD12w\u884C\u3002\u662F\u7684\u6CA1\u770B\u9519\uFF0C\u800C\u4E14\u5F88\u53EF\u80FD\u4E5F\u6CA1\u6709\u60F3\u9519\uFF0C\u5176\u5B9E\u5927\u90E8\u5206\u7684\u6846\u67B6\u903B\u8F91\u90FD\u5728<code>react-dom</code>\u5F53\u4E2D\uFF0C\u90A3\u4E48<code>react</code>\u5230\u5E95\u662F\u4E2A\u4EC0\u4E48\u4E1C\u4E1C\u5462\uFF1F</p></blockquote><p>React\u66B4\u9732\u51FA\u6765\u7684API</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> React <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Children</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        map<span class="token punctuation">,</span>
        forEach<span class="token punctuation">,</span>
        count<span class="token punctuation">,</span>
        toArray<span class="token punctuation">,</span>
        only<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    createRef<span class="token punctuation">,</span>
    Component<span class="token punctuation">,</span>
    PureComponent<span class="token punctuation">,</span>

    createContext<span class="token punctuation">,</span>
    forwardRef<span class="token punctuation">,</span>

    <span class="token literal-property property">Fragment</span><span class="token operator">:</span> <span class="token constant">REACT_FRAGMENT_TYPE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">StrictMode</span><span class="token operator">:</span> <span class="token constant">REACT_STRICT_MODE_TYPE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">unstable_AsyncMode</span><span class="token operator">:</span> <span class="token constant">REACT_ASYNC_MODE_TYPE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">unstable_Profiler</span><span class="token operator">:</span> <span class="token constant">REACT_PROFILER_TYPE</span><span class="token punctuation">,</span>

    <span class="token literal-property property">createElement</span><span class="token operator">:</span> __DEV__ <span class="token operator">?</span> createElementWithValidation <span class="token operator">:</span> createElement<span class="token punctuation">,</span>
    <span class="token literal-property property">cloneElement</span><span class="token operator">:</span> __DEV__ <span class="token operator">?</span> cloneElementWithValidation <span class="token operator">:</span> cloneElement<span class="token punctuation">,</span>
    <span class="token literal-property property">createFactory</span><span class="token operator">:</span> __DEV__ <span class="token operator">?</span> createFactoryWithValidation <span class="token operator">:</span> createFactory<span class="token punctuation">,</span>
    <span class="token literal-property property">isValidElement</span><span class="token operator">:</span> isValidElement<span class="token punctuation">,</span>

    <span class="token literal-property property">version</span><span class="token operator">:</span> ReactVersion<span class="token punctuation">,</span>

    <span class="token literal-property property">__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED</span><span class="token operator">:</span> ReactSharedInternals<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u6682\u65F6\u5FFD\u7565<code>__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED</code></p><h2 id="children" tabindex="-1"><a class="header-anchor" href="#children" aria-hidden="true">#</a> <strong>Children</strong></h2><p>\u8FD9\u4E2A\u5BF9\u8C61\u63D0\u4F9B\u4E86\u4E00\u5806\u5E2E\u5904\u7406<code>props.children</code>\u7684\u65B9\u6CD5\uFF0C\u56E0\u4E3A<code>children</code>\u662F\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u4F46\u662F\u4E0D\u662F\u6570\u7EC4\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5982\u679C\u8981\u5BF9\u5176\u8FDB\u884C\u5904\u7406\u53EF\u4EE5\u7528<code>React.Children</code>\u5916\u6302\u7684\u65B9\u6CD5\u3002</p><h2 id="createref" tabindex="-1"><a class="header-anchor" href="#createref" aria-hidden="true">#</a> <strong>createRef</strong></h2><p>\u65B0\u7684<code>ref</code>\u7528\u6CD5\uFF0CReact\u5373\u5C06\u629B\u5F03<code>&lt;div ref=&quot;myDiv&quot; /&gt;</code>\u8FD9\u79CD<code>string ref</code>\u7684\u7528\u6CD5\uFF0C\u5C06\u6765\u53EA\u80FD\u4F7F\u7528\u4E24\u79CD\u65B9\u5F0F\u6765\u4F7F\u7528<code>ref</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ref <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ref<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token comment">// or</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>funRef <span class="token operator">=</span> node<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="component-purecomponent" tabindex="-1"><a class="header-anchor" href="#component-purecomponent" aria-hidden="true">#</a> <strong>Component &amp; PureComponent</strong></h2><p>\u8FD9\u4E24\u4E2A\u7C7B\u57FA\u672C\u76F8\u540C\uFF0C\u552F\u4E00\u7684\u533A\u522B\u662F<code>PureComponent</code>\u7684\u539F\u578B\u4E0A\u591A\u4E86\u4E00\u4E2A\u6807\u8BC6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>ctor<span class="token punctuation">.</span>prototype <span class="token operator">&amp;&amp;</span> ctor<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>isPureReactComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">!</span><span class="token function">shallowEqual</span><span class="token punctuation">(</span>oldProps<span class="token punctuation">,</span> newProps<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">shallowEqual</span><span class="token punctuation">(</span>oldState<span class="token punctuation">,</span> newState<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u662F\u68C0\u67E5\u7EC4\u4EF6\u662F\u5426\u9700\u8981\u66F4\u65B0\u7684\u4E00\u4E2A\u5224\u65AD\uFF0C<code>ctor</code>\u5C31\u662F\u58F0\u660E\u7684\u7EE7\u627F\u81EA<code>Component</code> or <code>PureComponent</code>\u7684\u7C7B\uFF0C\u4ED6\u4F1A\u5224\u65AD\u662F\u5426\u7EE7\u627F\u81EA<code>PureComponent</code>\uFF0C\u5982\u679C\u662F\u7684\u8BDD\u5C31<code>shallowEqual</code>\u6BD4\u8F83<code>state</code>\u548C<code>props</code>\u3002</p><p>\u987A\u4FBF\u8BF4\u4E00\u4E0B\uFF1A<strong>React\u4E2D\u5BF9\u6BD4\u4E00\u4E2AClassComponent\u662F\u5426\u9700\u8981\u66F4\u65B0\uFF0C\u53EA\u6709\u4E24\u4E2A\u5730\u65B9\u3002\u4E00\u662F\u770B\u6709\u6CA1\u6709<code>shouldComponentUpdate</code>\u65B9\u6CD5\uFF0C\u4E8C\u5C31\u662F\u8FD9\u91CC\u7684<code>PureComponent</code>\u5224\u65AD</strong></p><h2 id="createcontext" tabindex="-1"><a class="header-anchor" href="#createcontext" aria-hidden="true">#</a> <strong>createContext</strong></h2><p><code>createContext</code>\u662F\u5B98\u65B9\u5B9A\u7A3F\u7684<code>context</code>\u65B9\u6848\uFF0C\u5728\u8FD9\u4E4B\u524D\u4E00\u76F4\u5728\u7528\u7684\u8001\u7684<code>context API</code>\u90FD\u662FReact\u4E0D\u63A8\u8350\u7684API\uFF0C\u73B0\u5728\u65B0\u7684API\u91CA\u51FA\uFF0C\u5B98\u65B9\u4E5F\u5DF2\u7ECF\u786E\u5B9A\u572817\u5927\u7248\u672C\u4F1A\u628A\u8001<code>API</code>\u53BB\u9664\u3002</p><p>\u65B0API\u7684\u4F7F\u7528\u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Provider<span class="token punctuation">,</span> Consumer <span class="token punctuation">}</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">&#39;defaultValue&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">ProviderComp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;realValue&#39;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">ConsumerComp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Consumer<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Consumber<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u540E\u9762\u8BB2<code>context</code>\u4F1A\u4E13\u95E8\u6BD4\u8F83\u65B0\u8001\u7684API\u7684\u5DEE\u5F02\uFF0C\u63D0\u524D\u8BF4\u4E00\u53E5\uFF0C\u8001API\u7684\u6027\u80FD\u4E0D\u662F\u4E00\u822C\u7684\u5DEE</p><h2 id="forwardref" tabindex="-1"><a class="header-anchor" href="#forwardref" aria-hidden="true">#</a> <strong>forwardRef</strong></h2><p><code>forwardRef</code>\u662F\u7528\u6765\u89E3\u51B3HOC\u7EC4\u4EF6\u4F20\u9012<code>ref</code>\u7684\u95EE\u9898\u7684\uFF0C\u6240\u8C13HOC\u5C31\u662F<code>Higher Order Component</code>\uFF0C\u6BD4\u5982\u4F7F\u7528<code>redux</code>\u7684\u65F6\u5019\uFF0C\u7528<code>connect</code>\u6765\u7ED9\u7EC4\u4EF6\u7ED1\u5B9A\u9700\u8981\u7684<code>state</code>\uFF0C\u8FD9\u5176\u4E2D\u5176\u5B9E\u5C31\u662F\u7ED9\u7684\u7EC4\u4EF6\u5728\u5916\u90E8\u5305\u4E86\u4E00\u5C42\u7EC4\u4EF6\uFF0C\u7136\u540E\u901A\u8FC7<code>...props</code>\u7684\u65B9\u5F0F\u628A\u5916\u90E8\u7684<code>props</code>\u4F20\u5165\u5230\u5B9E\u9645\u7EC4\u4EF6\u3002<code>forwardRef</code>\u7684\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> TargetComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>TargetComponent ref<span class="token operator">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u8981\u63D0\u4F9B<code>createRef</code>\u4F5C\u4E3A\u65B0\u7684<code>ref</code>\u4F7F\u7528\u65B9\u6CD5\u7684\u539F\u56E0\uFF0C\u5982\u679C\u7528<code>string ref</code>\u5C31\u6CA1\u6CD5\u5F53\u4F5C\u53C2\u6570\u4F20\u9012\u4E86\u3002</p><p>\u8FD9\u91CC\u53EA\u662F\u7B80\u5355\u8BF4\u4E00\u4E0B\u4F7F\u7528\u65B9\u6CD5\uFF0C\u540E\u9762\u8BB2<code>ref</code>\u7684\u65F6\u5019\u4F1A\u8BE6\u7EC6\u5206\u6790\u3002</p><h2 id="\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a> <strong>\u7C7B\u578B</strong></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">Fragment</span><span class="token operator">:</span> <span class="token constant">REACT_FRAGMENT_TYPE</span><span class="token punctuation">,</span>
<span class="token literal-property property">StrictMode</span><span class="token operator">:</span> <span class="token constant">REACT_STRICT_MODE_TYPE</span><span class="token punctuation">,</span>
<span class="token literal-property property">unstable_AsyncMode</span><span class="token operator">:</span> <span class="token constant">REACT_ASYNC_MODE_TYPE</span><span class="token punctuation">,</span>
<span class="token literal-property property">unstable_Profiler</span><span class="token operator">:</span> <span class="token constant">REACT_PROFILER_TYPE</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD9\u56DB\u4E2A\u90FD\u662FReact\u63D0\u4F9B\u7684\u7EC4\u4EF6\uFF0C\u4F46\u4ED6\u4EEC\u5462\u5176\u5B9E\u90FD\u53EA\u662F\u5360\u4F4D\u7B26\uFF0C\u90FD\u662F\u4E00\u4E2A<code>Symbol</code>\uFF0C\u5728React\u5B9E\u9645\u68C0\u6D4B\u5230\u4ED6\u4EEC\u7684\u65F6\u5019\u4F1A\u505A\u4E00\u4E9B\u7279\u6B8A\u7684\u5904\u7406\uFF0C\u6BD4\u5982<code>StrictMode</code>\u548C<code>AsyncMode</code>\u4F1A\u8BA9\u4ED6\u4EEC\u7684\u5B50\u8282\u70B9\u5BF9\u5E94\u7684Fiber\u7684<code>mode</code>\u90FD\u53D8\u6210\u548C\u4ED6\u4EEC\u4E00\u6837\u7684<code>mode</code></p><h2 id="createelement-cloneelement-createfactory-isvalidelement" tabindex="-1"><a class="header-anchor" href="#createelement-cloneelement-createfactory-isvalidelement" aria-hidden="true">#</a> <strong>createElement &amp; cloneElement &amp; createFactory &amp; isValidElement</strong></h2><p><code>createElement</code>\u53EF\u8C13\u662FReact\u4E2D\u6700\u91CD\u8981\u7684API\u4E86\uFF0C\u4ED6\u662F\u7528\u6765\u521B\u5EFA<code>ReactElement</code>\u7684\uFF0C\u4F46\u662F\u5F88\u591A\u540C\u5B66\u5374\u4ECE\u6CA1\u89C1\u8FC7\u4E5F\u6CA1\u7528\u8FC7\uFF0C\u8FD9\u662F\u4E3A\u5565\u5462\uFF1F\u56E0\u4E3A\u7528\u4E86JSX\uFF0CJSX\u5E76\u4E0D\u662F\u6807\u51C6\u7684js\uFF0C\u6240\u4EE5\u8981\u7ECF\u8FC7\u7F16\u8BD1\u624D\u80FD\u53D8\u6210\u53EF\u8FD0\u884C\u7684js\uFF0C\u800C\u7F16\u8BD1\u4E4B\u540E\uFF0C<code>createElement</code>\u5C31\u51FA\u73B0\u4E86\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// jsx</span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>content<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token comment">// js</span>
React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;app&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;content&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>cloneElement</code>\u5C31\u5F88\u660E\u663E\u4E86\uFF0C\u662F\u7528\u6765\u514B\u9686\u4E00\u4E2A<code>ReactElement</code>\u7684</p><p><code>createFactory</code>\u662F\u7528\u6765\u521B\u5EFA\u4E13\u95E8\u7528\u6765\u521B\u5EFA\u67D0\u4E00\u7C7B<code>ReactElement</code>\u7684\u5DE5\u5382\u7684\uFF0C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createFactory</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> factory <span class="token operator">=</span> <span class="token function">createElement</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    factory<span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>
    <span class="token keyword">return</span> factory<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4ED6\u5176\u5B9E\u5C31\u662F\u7ED1\u5B9A\u4E86\u7B2C\u4E00\u4E2A\u53C2\u6570\u7684<code>createElement</code>\uFF0C\u4E00\u822C\u7528JSX\u8FDB\u884C\u7F16\u7A0B\u7684\u65F6\u5019\u4E0D\u4F1A\u7528\u5230\u8FD9\u4E2AAPI</p><p><code>isValidElement</code>\u987E\u540D\u601D\u4E49\u5C31\u662F\u7528\u6765\u9A8C\u8BC1\u662F\u5426\u662F\u4E00\u4E2A<code>ReactElement</code>\u7684\uFF0C\u57FA\u672C\u4E5F\u7528\u4E0D\u592A\u5230</p>`,37);function p(t,o){return e}var l=s(a,[["render",p]]);export{l as default};
