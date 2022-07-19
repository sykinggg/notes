import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.594e1059.js";const p={},e=t(`<h2 id="react-\u5F15\u7528\u4F20\u9012-forwarding-refs" tabindex="-1"><a class="header-anchor" href="#react-\u5F15\u7528\u4F20\u9012-forwarding-refs" aria-hidden="true">#</a> React \u5F15\u7528\u4F20\u9012 Forwarding Refs</h2><p>\u5F15\u7528\u4F20\u9012\uFF08Ref forwading\uFF09\u662F\u4E00\u79CD\u901A\u8FC7\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u81EA\u52A8\u4F20\u9012 \u5F15\u7528<code>ref</code> \u7684\u6280\u672F\u3002\u5BF9\u4E8E\u5E94\u7528\u8005\u7684\u5927\u591A\u6570\u7EC4\u4EF6\u6765\u8BF4\u6CA1\u4EC0\u4E48\u4F5C\u7528\u3002\u4F46\u662F\u5BF9\u4E8E\u6709\u4E9B\u91CD\u590D\u4F7F\u7528\u7684\u7EC4\u4EF6\uFF0C\u53EF\u80FD\u6709\u7528\u3002\u4F8B\u5982\u67D0\u4E9Binput\u7EC4\u4EF6\uFF0C\u9700\u8981\u63A7\u5236\u5176focus\uFF0C\u672C\u6765\u662F\u53EF\u4EE5\u4F7F\u7528<code>ref</code>\u6765\u63A7\u5236\uFF0C\u4F46\u662F\u56E0\u4E3A\u8BE5input\u5DF2\u88AB\u5305\u88F9\u5728\u7EC4\u4EF6\u4E2D\uFF0C\u8FD9\u65F6\u5C31\u9700\u8981\u4F7F\u7528Ref forward\u6765\u900F\u8FC7\u7EC4\u4EF6\u83B7\u5F97\u8BE5input\u7684\u5F15\u7528\u3002</p><h2 id="_1-\u57FA\u672C\u7684\u4F7F\u7528-\u901A\u8FC7\u7EC4\u4EF6\u83B7\u5F97input\u7684\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u672C\u7684\u4F7F\u7528-\u901A\u8FC7\u7EC4\u4EF6\u83B7\u5F97input\u7684\u5F15\u7528" aria-hidden="true">#</a> 1.\u57FA\u672C\u7684\u4F7F\u7528\uFF1A\u901A\u8FC7\u7EC4\u4EF6\u83B7\u5F97input\u7684\u5F15\u7528</h2><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> createRef<span class="token punctuation">,</span> forwardRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> FocusInput <span class="token operator">=</span> <span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> ref<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ForwardRef</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ref <span class="token operator">=</span> <span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> current <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ref<span class="token punctuation">;</span>
        current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">forward ref</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FocusInput</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ref<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> ForwardRef<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6838\u5FC3\u65B9\u6CD5\u662F<code>React.forwardRef</code>,\u8BE5\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u6709\u989D\u5916<code>ref</code>\u53C2\u6570\u7684react\u7EC4\u4EF6\u51FD\u6570\uFF0C\u4E0D\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF0C\u666E\u901A\u7684\u7EC4\u4EF6\u51FD\u6570\u662F\u4E0D\u4F1A\u83B7\u5F97\u8BE5\u53C2\u6570\u7684\u3002</p><p>\u5982\u679C\u5B50\u7EC4\u4EF6\u4E2D\u7528\u5230\u4E86\u8BE5\u65B9\u6CD5\uFF0C\u90A3\u4E48\u5BF9\u5E94\u7684\u9AD8\u9636\u7EC4\u4EF6\u4E2D\u4E5F\u9700\u8981\u4F7F\u7528<code>React.forwardRef</code>\u65B9\u6CD5</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> createRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> FocusInput <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> ref<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">bindRef</span> <span class="token operator">=</span> <span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">ConvertRef</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> forwardedRef<span class="token punctuation">,</span> <span class="token operator">...</span>other <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>forwardedRef<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">WrappedComponent</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>other<span class="token punctuation">}</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>forwardedRef<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// \u201Cref\u201D\u662F\u4FDD\u7559\u5B57\u6BB5\u9700\u8981\u7528\u666E\u901A\u7684\u5B57\u6BB5\u6765\u4EE3\u66FF\uFF0C\u4F20\u9012\u7ED9\u4F20\u5165\u7684\u7EC4\u4EF6</span>
    <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> ref<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ref<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConvertRef</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token attr-name">forwardedRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> FocusInputWithRef <span class="token operator">=</span> <span class="token function">bindRef</span><span class="token punctuation">(</span>FocusInput<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ForwardRef</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ref <span class="token operator">=</span> <span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> current <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ref<span class="token punctuation">;</span>
        current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">forward ref</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FocusInputWithRef</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ref<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> ForwardRef<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refs-\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#refs-\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> Refs \u4F7F\u7528\u573A\u666F</h2><ul><li><p>\u5904\u7406\u7126\u70B9\u3001\u6587\u672C\u9009\u62E9\u6216\u8005\u5A92\u4F53\u7684\u63A7\u5236</p></li><li><p>\u89E6\u53D1\u5FC5\u8981\u7684\u52A8\u753B</p></li><li><p>\u96C6\u6210\u7B2C\u4E09\u65B9 DOM \u5E93</p></li></ul>`,9),o=[e];function c(u,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","interview41.html.vue"]]);export{r as default};