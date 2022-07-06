import{_ as n,a as s}from"./app.816e2a4d.js";const a={},e=s(`<h2 id="reactelement" tabindex="-1"><a class="header-anchor" href="#reactelement" aria-hidden="true">#</a> <strong>ReactElement</strong></h2><hr><p><code>ReactElement</code>\u901A\u8FC7<code>createElement</code>\u521B\u5EFA\uFF0C\u8C03\u7528\u8BE5\u65B9\u6CD5\u9700\u8981\u4F20\u5165\u4E09\u4E2A\u53C2\u6570\uFF1A</p><ul><li><p>type</p></li><li><p>config</p></li><li><p>children</p></li></ul><p><code>type</code>\u6307\u4EE3\u8FD9\u4E2A<code>ReactElement</code>\u7684\u7C7B\u578B</p><ul><li><p>\u5B57\u7B26\u4E32\u6BD4\u5982<code>div</code>\uFF0C<code>p</code>\u4EE3\u8868\u539F\u751FDOM\uFF0C\u79F0\u4E3A<code>HostComponent</code></p></li><li><p>Class\u7C7B\u578B\u662F\u7EE7\u627F\u81EA<code>Component</code>\u6216\u8005<code>PureComponent</code>\u7684\u7EC4\u4EF6\uFF0C\u79F0\u4E3A<code>ClassComponent</code></p></li><li><p>\u65B9\u6CD5\u5C31\u662F<code>functional</code> <code>Component</code></p></li><li><p>\u539F\u751F\u63D0\u4F9B\u7684<code>Fragment</code>\u3001<code>AsyncMode</code>\u7B49\u662FSymbol\uFF0C\u4F1A\u88AB\u7279\u6B8A\u5904\u7406</p></li><li><p>TODO: \u662F\u5426\u6709\u5176\u4ED6\u7684</p></li></ul><p>\u4ECE\u6E90\u7801\u53EF\u4EE5\u770B\u51FA\u867D\u7136\u521B\u5EFA\u7684\u65F6\u5019\u90FD\u662F\u901A\u8FC7<code>config</code>\u4F20\u5165\u7684\uFF0C\u4F46\u662F<code>key</code>\u548C<code>ref</code>\u4E0D\u4F1A\u8DDF\u5176\u4ED6<code>config</code>\u4E2D\u7684\u53D8\u91CF\u4E00\u8D77\u88AB\u5904\u7406\uFF0C\u800C\u662F\u5355\u72EC\u4F5C\u4E3A\u53D8\u91CF\u51FA\u73B0\u5728<code>ReactElement</code>\u4E0A\u3002</p><p>\u5728\u6700\u540E\u521B\u5EFA<code>ReactElement</code>\u770B\u5230\u4E86\u8FD9\u4E48\u4E00\u4E2A\u53D8\u91CF<code>$$typeof</code>\uFF0C\u8FD9\u662F\u4E2A\u5565\u5462\uFF0C\u5728\u8FD9\u91CC\u53EF\u4EE5\u770B\u51FA\u6765\u4ED6\u662F\u4E00\u4E2A\u5E38\u91CF\uFF1A<code>REACT_ELEMENT_TYPE</code>\uFF0C\u4F46\u6709\u4E00\u4E2A\u7279\u4F8B\uFF1A<code>ReactDOM.createPortal</code>\u7684\u65F6\u5019\u662F<code>REACT_PORTAL_TYPE</code>\uFF0C\u4E0D\u8FC7\u4ED6\u4E0D\u662F\u901A\u8FC7<code>createElement</code>\u521B\u5EFA\u7684\uFF0C\u6240\u4EE5\u4ED6\u5E94\u8BE5\u4E5F\u4E0D\u5C5E\u4E8E<code>ReactElement</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> config<span class="token punctuation">,</span> children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5904\u7406\u53C2\u6570</span>

    <span class="token keyword">return</span> <span class="token function">ReactElement</span><span class="token punctuation">(</span>
        type<span class="token punctuation">,</span>
        key<span class="token punctuation">,</span>
        ref<span class="token punctuation">,</span>
        self<span class="token punctuation">,</span>
        source<span class="token punctuation">,</span>
        ReactCurrentOwner<span class="token punctuation">.</span>current<span class="token punctuation">,</span>
        props<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">ReactElement</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> key<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> self<span class="token punctuation">,</span> source<span class="token punctuation">,</span> owner<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token comment">// This tag allows us to uniquely identify this as a React Element</span>
        $$<span class="token keyword">typeof</span><span class="token operator">:</span> <span class="token constant">REACT_ELEMENT_TYPE</span><span class="token punctuation">,</span>

        <span class="token comment">// Built-in properties that belong on the element</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> type<span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> key<span class="token punctuation">,</span>
        <span class="token literal-property property">ref</span><span class="token operator">:</span> ref<span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> props<span class="token punctuation">,</span>

        <span class="token comment">// Record the component responsible for creating this element.</span>
        <span class="token literal-property property">_owner</span><span class="token operator">:</span> owner<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> element
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p><code>ReactElement</code>\u53EA\u662F\u4E00\u4E2A\u7528\u6765\u627F\u8F7D\u4FE1\u606F\u7684\u5BB9\u5668\uFF0C\u4ED6\u4F1A\u544A\u8BC9\u540E\u7EED\u7684\u64CD\u4F5C\u8FD9\u4E2A\u8282\u70B9\u7684\u4EE5\u4E0B\u4FE1\u606F\uFF1A</p><ol><li><p><code>type</code>\u7C7B\u578B\uFF0C\u7528\u4E8E\u5224\u65AD\u5982\u4F55\u521B\u5EFA\u8282\u70B9</p></li><li><p><code>key</code>\u548C<code>ref</code>\u8FD9\u4E9B\u7279\u6B8A\u4FE1\u606F</p></li><li><p><code>props</code>\u65B0\u7684\u5C5E\u6027\u5185\u5BB9</p></li><li><p><code>$$typeof</code>\u7528\u4E8E\u786E\u5B9A\u662F\u5426\u5C5E\u4E8E<code>ReactElement</code></p></li></ol><p>\u8FD9\u4E9B\u4FE1\u606F\u5BF9\u4E8E\u540E\u671F\u6784\u5EFA\u5E94\u7528\u7684\u6811\u7ED3\u6784\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u800C<strong>React\u901A\u8FC7\u63D0\u4F9B\u8FD9\u79CD\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u6765\u8131\u79BB\u5E73\u53F0\u7684\u9650\u5236</strong></p>`,12);function p(t,o){return e}var l=n(a,[["render",p],["__file","reactElement.html.vue"]]);export{l as default};
