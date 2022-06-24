import{_ as n,a as s}from"./app.c9ab80ba.js";const a={},p=s(`<h1 id="portals" tabindex="-1"><a class="header-anchor" href="#portals" aria-hidden="true">#</a> Portals</h1><p>Portal \u63D0\u4F9B\u4E86\u4E00\u79CD\u5C06\u5B50\u8282\u70B9\u6E32\u67D3\u5230\u5B58\u5728\u4E8E\u7236\u7EC4\u4EF6\u4EE5\u5916\u7684 DOM \u8282\u70B9\u7684\u4F18\u79C0\u7684\u65B9\u6848\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">createPortal</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF08<code>child</code>\uFF09\u662F\u4EFB\u4F55<code>\u53EF\u6E32\u67D3\u7684 React \u5B50\u5143\u7D20</code>\uFF0C\u4F8B\u5982\u4E00\u4E2A\u5143\u7D20\uFF0C\u5B57\u7B26\u4E32\u6216 fragment\u3002\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF08<code>container</code>\uFF09\u662F\u4E00\u4E2A DOM \u5143\u7D20\u3002</p><h1 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h1><p>\u901A\u5E38\u6765\u8BB2\uFF0C\u5F53\u4ECE\u7EC4\u4EF6\u7684 render \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5143\u7D20\u65F6\uFF0C\u8BE5\u5143\u7D20\u5C06\u88AB\u6302\u8F7D\u5230 DOM \u8282\u70B9\u4E2D\u79BB\u5176\u6700\u8FD1\u7684\u7236\u8282\u70B9\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// React \u6302\u8F7D\u4E86\u4E00\u4E2A\u65B0\u7684 div\uFF0C\u5E76\u4E14\u628A\u5B50\u5143\u7D20\u6E32\u67D3\u5176\u4E2D</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u7136\u800C\uFF0C\u6709\u65F6\u5019\u5C06\u5B50\u5143\u7D20\u63D2\u5165\u5230 DOM \u8282\u70B9\u4E2D\u7684\u4E0D\u540C\u4F4D\u7F6E\u4E5F\u662F\u6709\u597D\u5904\u7684\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// React \u5E76*\u6CA1\u6709*\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 div\u3002\u5B83\u53EA\u662F\u628A\u5B50\u5143\u7D20\u6E32\u67D3\u5230 \`domNode\` \u4E2D\u3002</span>
  <span class="token comment">// \`domNode\` \u662F\u4E00\u4E2A\u53EF\u4EE5\u5728\u4EFB\u4F55\u4F4D\u7F6E\u7684\u6709\u6548 DOM \u8282\u70B9\u3002</span>
  <span class="token keyword">return</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createPortal</span><span class="token punctuation">(</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span>
    domNode
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E00\u4E2A portal \u7684\u5178\u578B\u7528\u4F8B\u662F\u5F53\u7236\u7EC4\u4EF6\u6709 <code>overflow: hidden</code> \u6216 <code>z-index</code> \u6837\u5F0F\u65F6\uFF0C\u4F46\u9700\u8981\u5B50\u7EC4\u4EF6\u80FD\u591F\u5728\u89C6\u89C9\u4E0A\u201C\u8DF3\u51FA\u201D\u5176\u5BB9\u5668\u3002\u4F8B\u5982\uFF0C\u5BF9\u8BDD\u6846\u3001\u60AC\u6D6E\u5361\u4EE5\u53CA\u63D0\u793A\u6846\uFF1A</p><blockquote><p><strong>\u6CE8\u610F</strong>:</p><p>\u5F53\u5728\u4F7F\u7528 <code>portal</code> \u65F6, \u8BB0\u4F4F\u7BA1\u7406<code>\u952E\u76D8\u7126\u70B9</code>\u5C31\u53D8\u5F97\u5C24\u4E3A\u91CD\u8981\u3002</p><p>\u5BF9\u4E8E\u6A21\u6001\u5BF9\u8BDD\u6846\uFF0C\u901A\u8FC7\u9075\u5FAA <code>WAI-ARIA \u6A21\u6001\u5F00\u53D1\u5B9E\u8DF5</code>\uFF0C\u6765\u786E\u4FDD\u6BCF\u4E2A\u4EBA\u90FD\u80FD\u591F\u8FD0\u7528\u5B83\u3002</p></blockquote><h1 id="\u901A\u8FC7-portal-\u8FDB\u884C\u4E8B\u4EF6\u5192\u6CE1" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7-portal-\u8FDB\u884C\u4E8B\u4EF6\u5192\u6CE1" aria-hidden="true">#</a> \u901A\u8FC7 Portal \u8FDB\u884C\u4E8B\u4EF6\u5192\u6CE1</h1><p>\u5C3D\u7BA1 portal \u53EF\u4EE5\u88AB\u653E\u7F6E\u5728 DOM \u6811\u4E2D\u7684\u4EFB\u4F55\u5730\u65B9\uFF0C\u4F46\u5728\u4EFB\u4F55\u5176\u4ED6\u65B9\u9762\uFF0C\u5176\u884C\u4E3A\u548C\u666E\u901A\u7684 React \u5B50\u8282\u70B9\u884C\u4E3A\u4E00\u81F4\u3002\u7531\u4E8E portal \u4ECD\u5B58\u5728\u4E8E React \u6811\uFF0C \u4E14\u4E0E DOM \u6811 \u4E2D\u7684\u4F4D\u7F6E\u65E0\u5173\uFF0C\u90A3\u4E48\u65E0\u8BBA\u5176\u5B50\u8282\u70B9\u662F\u5426\u662F portal\uFF0C\u50CF context \u8FD9\u6837\u7684\u529F\u80FD\u7279\u6027\u90FD\u662F\u4E0D\u53D8\u7684\u3002</p><p>\u8FD9\u5305\u542B\u4E8B\u4EF6\u5192\u6CE1\u3002\u4E00\u4E2A\u4ECE portal \u5185\u90E8\u89E6\u53D1\u7684\u4E8B\u4EF6\u4F1A\u4E00\u76F4\u5192\u6CE1\u81F3\u5305\u542B React \u6811\u7684\u7956\u5148\uFF0C\u5373\u4FBF\u8FD9\u4E9B\u5143\u7D20\u5E76\u4E0D\u662F DOM \u6811 \u4E2D\u7684\u7956\u5148\u3002\u5047\u8BBE\u5B58\u5728\u5982\u4E0B HTML \u7ED3\u6784\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app-root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modal-root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5728 <code>#app-root</code> \u91CC\u7684 <code>Parent</code> \u7EC4\u4EF6\u80FD\u591F\u6355\u83B7\u5230\u672A\u88AB\u6355\u83B7\u7684\u4ECE\u5144\u5F1F\u8282\u70B9 <code>#modal-root</code> \u5192\u6CE1\u4E0A\u6765\u7684\u4E8B\u4EF6\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// \u5728 DOM \u4E2D\u6709\u4E24\u4E2A\u5BB9\u5668\u662F\u5144\u5F1F\u7EA7 \uFF08siblings\uFF09</span>
<span class="token keyword">const</span> appRoot <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;app-root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> modalRoot <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;modal-root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Modal</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728 Modal \u7684\u6240\u6709\u5B50\u5143\u7D20\u88AB\u6302\u8F7D\u540E\uFF0C</span>
    <span class="token comment">// \u8FD9\u4E2A portal \u5143\u7D20\u4F1A\u88AB\u5D4C\u5165\u5230 DOM \u6811\u4E2D\uFF0C</span>
    <span class="token comment">// \u8FD9\u610F\u5473\u7740\u5B50\u5143\u7D20\u5C06\u88AB\u6302\u8F7D\u5230\u4E00\u4E2A\u5206\u79BB\u7684 DOM \u8282\u70B9\u4E2D\u3002</span>
    <span class="token comment">// \u5982\u679C\u8981\u6C42\u5B50\u7EC4\u4EF6\u5728\u6302\u8F7D\u65F6\u53EF\u4EE5\u7ACB\u523B\u63A5\u5165 DOM \u6811\uFF0C</span>
    <span class="token comment">// \u4F8B\u5982\u8861\u91CF\u4E00\u4E2A DOM \u8282\u70B9\uFF0C</span>
    <span class="token comment">// \u6216\u8005\u5728\u540E\u4EE3\u8282\u70B9\u4E2D\u4F7F\u7528 \u2018autoFocus\u2019\uFF0C</span>
    <span class="token comment">// \u5219\u9700\u6DFB\u52A0 state \u5230 Modal \u4E2D\uFF0C</span>
    <span class="token comment">// \u4EC5\u5F53 Modal \u88AB\u63D2\u5165 DOM \u6811\u4E2D\u624D\u80FD\u6E32\u67D3\u5B50\u5143\u7D20\u3002</span>
    modalRoot<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    modalRoot<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createPortal</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>el
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">clicks</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F53\u5B50\u5143\u7D20\u91CC\u7684\u6309\u94AE\u88AB\u70B9\u51FB\u65F6\uFF0C</span>
    <span class="token comment">// \u8FD9\u4E2A\u5C06\u4F1A\u88AB\u89E6\u53D1\u66F4\u65B0\u7236\u5143\u7D20\u7684 state\uFF0C</span>
    <span class="token comment">// \u5373\u4F7F\u8FD9\u4E2A\u6309\u94AE\u5728 DOM \u4E2D\u4E0D\u662F\u76F4\u63A5\u5173\u8054\u7684\u540E\u4EE3</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">clicks</span><span class="token operator">:</span> state<span class="token punctuation">.</span>clicks <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Number of clicks: </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>clicks<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Modal</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Child</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Modal</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u4E2A\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u4F1A\u5192\u6CE1\u5230\u7236\u5143\u7D20</span>
  <span class="token comment">// \u56E0\u4E3A\u8FD9\u91CC\u6CA1\u6709\u5B9A\u4E49 &#39;onClick&#39; \u5C5E\u6027</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Click</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Parent</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span> appRoot<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div>`,17);function t(e,c){return p}var l=n(a,[["render",t],["__file","interview18.html.vue"]]);export{l as default};
