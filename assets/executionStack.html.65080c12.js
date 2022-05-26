import{_ as n,o as s,c as a,a as p}from"./app.e9fd9ffa.js";const t={},e=p(`<h3 id="\u3010\u8FDB\u96361-1\u671F\u3011\u7406\u89E3javascript-\u4E2D\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u548C\u6267\u884C\u6808" tabindex="-1"><a class="header-anchor" href="#\u3010\u8FDB\u96361-1\u671F\u3011\u7406\u89E3javascript-\u4E2D\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u548C\u6267\u884C\u6808" aria-hidden="true">#</a> \u3010\u8FDB\u96361-1\u671F\u3011\u7406\u89E3JavaScript \u4E2D\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u548C\u6267\u884C\u6808</h3><p>\u6267\u884C\u4E0A\u4E0B\u6587\u662F\u5F53\u524D JavaScript \u4EE3\u7801\u88AB\u89E3\u6790\u548C\u6267\u884C\u65F6\u6240\u5728\u73AF\u5883\u7684\u62BD\u8C61\u6982\u5FF5\u3002</p><h2 id="\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u7C7B\u578B" aria-hidden="true">#</a> <strong>\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u7C7B\u578B</strong></h2><p>\u6267\u884C\u4E0A\u4E0B\u6587\u603B\u5171\u6709\u4E09\u79CD\u7C7B\u578B</p><ul><li><p><strong>\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587</strong>: \u53EA\u6709\u4E00\u4E2A\uFF0C\u6D4F\u89C8\u5668\u4E2D\u7684\u5168\u5C40\u5BF9\u8C61\u5C31\u662F window \u5BF9\u8C61\uFF0Cthis \u6307\u5411\u8FD9\u4E2A\u5168\u5C40\u5BF9\u8C61\u3002</p></li><li><p><strong>\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587</strong>: \u5B58\u5728\u65E0\u6570\u4E2A\uFF0C\u53EA\u6709\u5728\u51FD\u6570\u88AB\u8C03\u7528\u7684\u65F6\u5019\u624D\u4F1A\u88AB\u521B\u5EFA\uFF0C\u6BCF\u6B21\u8C03\u7528\u51FD\u6570\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u3002</p></li><li><p><strong>Eval \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587</strong>: \u6307\u7684\u662F\u8FD0\u884C\u5728 eval \u51FD\u6570\u4E2D\u7684\u4EE3\u7801\uFF0C\u5F88\u5C11\u7528\u800C\u4E14\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u3002</p></li></ul><p><strong>\u6267\u884C\u6808</strong></p><p>\u6267\u884C\u6808\uFF0C\u4E5F\u53EB\u8C03\u7528\u6808\uFF0C\u5177\u6709 LIFO\uFF08\u540E\u8FDB\u5148\u51FA\uFF09\u7ED3\u6784\uFF0C\u7528\u4E8E\u5B58\u50A8\u5728\u4EE3\u7801\u6267\u884C\u671F\u95F4\u521B\u5EFA\u7684\u6240\u6709\u6267\u884C\u4E0A\u4E0B\u6587\u3002</p><p>\u9996\u6B21\u8FD0\u884CJS\u4EE3\u7801\u65F6\uFF0C\u4F1A\u521B\u5EFA\u4E00\u4E2A<strong>\u5168\u5C40</strong>\u6267\u884C\u4E0A\u4E0B\u6587\u5E76Push\u5230\u5F53\u524D\u7684\u6267\u884C\u6808\u4E2D\u3002\u6BCF\u5F53\u53D1\u751F\u51FD\u6570\u8C03\u7528\uFF0C\u5F15\u64CE\u90FD\u4F1A\u4E3A\u8BE5\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A<strong>\u65B0\u7684\u51FD\u6570</strong>\u6267\u884C\u4E0A\u4E0B\u6587\u5E76Push\u5230\u5F53\u524D\u6267\u884C\u6808\u7684\u6808\u9876\u3002</p><p>\u6839\u636E\u6267\u884C\u6808LIFO\u89C4\u5219\uFF0C\u5F53\u6808\u9876\u51FD\u6570\u8FD0\u884C\u5B8C\u6210\u540E\uFF0C\u5176\u5BF9\u5E94\u7684<strong>\u51FD\u6570</strong>\u6267\u884C\u4E0A\u4E0B\u6587\u5C06\u4F1A\u4ECE\u6267\u884C\u6808\u4E2DPop\u51FA\uFF0C\u4E0A\u4E0B\u6587\u63A7\u5236\u6743\u5C06\u79FB\u5230\u5F53\u524D\u6267\u884C\u6808\u7684<strong>\u4E0B\u4E00\u4E2A</strong>\u6267\u884C\u4E0A\u4E0B\u6587\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Inside first function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token function">second</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Again inside first function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">second</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Inside second function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>

<span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Inside Global Execution Context&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Inside first function</span>
<span class="token comment">// Inside second function</span>
<span class="token comment">// Again inside first function</span>
<span class="token comment">// Inside Global Execution Context</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u521B\u5EFA" aria-hidden="true">#</a> <strong>\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u521B\u5EFA</strong></h2><p>\u6267\u884C\u4E0A\u4E0B\u6587\u5206\u4E24\u4E2A\u9636\u6BB5\u521B\u5EFA\uFF1A<strong>1\uFF09\u521B\u5EFA\u9636\u6BB5\uFF1B</strong> <strong>2\uFF09\u6267\u884C\u9636\u6BB5</strong></p><p><strong>\u521B\u5EFA\u9636\u6BB5</strong></p><ul><li><p>1\u3001\u786E\u5B9A this \u7684\u503C\uFF0C\u4E5F\u88AB\u79F0\u4E3A This Binding\u3002</p></li><li><p>2\u3001<strong>LexicalEnvironment\uFF08\u8BCD\u6CD5\u73AF\u5883\uFF09</strong> \u7EC4\u4EF6\u88AB\u521B\u5EFA\u3002</p></li><li><p>3\u3001<strong>VariableEnvironment\uFF08\u53D8\u91CF\u73AF\u5883\uFF09</strong> \u7EC4\u4EF6\u88AB\u521B\u5EFA\u3002</p></li></ul><p>\u76F4\u63A5\u770B\u4F2A\u4EE3\u7801\u53EF\u80FD\u66F4\u52A0\u76F4\u89C2</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ExecutionContext <span class="token operator">=</span> <span class="token punctuation">{</span>  
    ThisBinding <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token keyword">this</span> value<span class="token operator">&gt;</span><span class="token punctuation">,</span>     <span class="token comment">// \u786E\u5B9Athis </span>
    LexicalEnvironment <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>   <span class="token comment">// \u8BCD\u6CD5\u73AF\u5883</span>
    VariableEnvironment <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// \u53D8\u91CF\u73AF\u5883</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div size="1">**\u662F\u5C3A\u5BF8**</div><ul><li><p><strong>\u5168\u5C40</strong>\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\uFF0Cthis \u7684\u503C\u6307\u5411\u5168\u5C40\u5BF9\u8C61\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2Dthis \u7684\u503C\u6307\u5411 window \u5BF9\u8C61\uFF0C\u800C\u5728nodejs\u4E2D\u6307\u5411\u8FD9\u4E2A\u6587\u4EF6\u7684module\u5BF9\u8C61\u3002</p></li><li><p><strong>\u51FD\u6570</strong>\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\uFF0Cthis \u7684\u503C\u53D6\u51B3\u4E8E\u51FD\u6570\u7684\u8C03\u7528\u65B9\u5F0F\u3002\u5177\u4F53\u6709\uFF1A\u9ED8\u8BA4\u7ED1\u5B9A\u3001\u9690\u5F0F\u7ED1\u5B9A\u3001\u663E\u5F0F\u7ED1\u5B9A\uFF08\u786C\u7ED1\u5B9A\uFF09\u3001new\u7ED1\u5B9A\u3001\u7BAD\u5934\u51FD\u6570\uFF0C\u5177\u4F53\u5185\u5BB9\u4F1A\u5728\u3010this\u5168\u9762\u89E3\u6790\u3011\u90E8\u5206\u8BE6\u89E3\u3002</p></li></ul><div size="1">**\u8BCD\u6CD5\u73AF\u5883\uFF08Lexical Environment\uFF09**</div><p>\u8BCD\u6CD5\u73AF\u5883\u6709\u4E24\u4E2A<strong>\u7EC4\u6210\u90E8\u5206</strong></p><ul><li><p>1\u3001<strong>\u73AF\u5883\u8BB0\u5F55</strong>\uFF1A\u5B58\u50A8\u53D8\u91CF\u548C\u51FD\u6570\u58F0\u660E\u7684\u5B9E\u9645\u4F4D\u7F6E</p></li><li><p>2\u3001<strong>\u5BF9\u5916\u90E8\u73AF\u5883\u7684\u5F15\u7528</strong>\uFF1A\u53EF\u4EE5\u8BBF\u95EE\u5176\u5916\u90E8\u8BCD\u6CD5\u73AF\u5883</p></li></ul><p>\u8BCD\u6CD5\u73AF\u5883\u6709\u4E24\u79CD<strong>\u7C7B\u578B</strong></p><ul><li><p>1\u3001<strong>\u5168\u5C40\u73AF\u5883</strong>\uFF1A\u662F\u4E00\u4E2A\u6CA1\u6709\u5916\u90E8\u73AF\u5883\u7684\u8BCD\u6CD5\u73AF\u5883\uFF0C\u5176\u5916\u90E8\u73AF\u5883\u5F15\u7528\u4E3A null\u3002\u62E5\u6709\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61\uFF08window \u5BF9\u8C61\uFF09\u53CA\u5176\u5173\u8054\u7684\u65B9\u6CD5\u548C\u5C5E\u6027\uFF08\u4F8B\u5982\u6570\u7EC4\u65B9\u6CD5\uFF09\u4EE5\u53CA\u4EFB\u4F55\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u5168\u5C40\u53D8\u91CF\uFF0Cthis \u7684\u503C\u6307\u5411\u8FD9\u4E2A\u5168\u5C40\u5BF9\u8C61\u3002</p></li><li><p>2\u3001<strong>\u51FD\u6570\u73AF\u5883</strong>\uFF1A\u7528\u6237\u5728\u51FD\u6570\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u88AB\u5B58\u50A8\u5728\u73AF\u5883\u8BB0\u5F55\u4E2D\uFF0C\u5305\u542B\u4E86arguments \u5BF9\u8C61\u3002\u5BF9\u5916\u90E8\u73AF\u5883\u7684\u5F15\u7528\u53EF\u4EE5\u662F\u5168\u5C40\u73AF\u5883\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5305\u542B\u5185\u90E8\u51FD\u6570\u7684\u5916\u90E8\u51FD\u6570\u73AF\u5883\u3002</p></li></ul><p>\u76F4\u63A5\u770B\u4F2A\u4EE3\u7801\u53EF\u80FD\u66F4\u52A0\u76F4\u89C2</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>GlobalExectionContext <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token comment">// \u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587</span>
    <span class="token literal-property property">LexicalEnvironment</span><span class="token operator">:</span> <span class="token punctuation">{</span>    	  <span class="token comment">// \u8BCD\u6CD5\u73AF\u5883</span>
        <span class="token literal-property property">EnvironmentRecord</span><span class="token operator">:</span> <span class="token punctuation">{</span>   		<span class="token comment">// \u73AF\u5883\u8BB0\u5F55</span>
            <span class="token literal-property property">Type</span><span class="token operator">:</span> <span class="token string">&quot;Object&quot;</span><span class="token punctuation">,</span>      		   <span class="token comment">// \u5168\u5C40\u73AF\u5883</span>
            <span class="token comment">// \u6807\u8BC6\u7B26\u7ED1\u5B9A\u5728\u8FD9\u91CC </span>
            <span class="token literal-property property">outer</span><span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token keyword">null</span><span class="token operator">&gt;</span>  	   		   <span class="token comment">// \u5BF9\u5916\u90E8\u73AF\u5883\u7684\u5F15\u7528</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>

FunctionExectionContext <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">// \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587</span>
    <span class="token literal-property property">LexicalEnvironment</span><span class="token operator">:</span> <span class="token punctuation">{</span>  	  <span class="token comment">// \u8BCD\u6CD5\u73AF\u5883</span>
        <span class="token literal-property property">EnvironmentRecord</span><span class="token operator">:</span> <span class="token punctuation">{</span>  		<span class="token comment">// \u73AF\u5883\u8BB0\u5F55</span>
            <span class="token literal-property property">Type</span><span class="token operator">:</span> <span class="token string">&quot;Declarative&quot;</span><span class="token punctuation">,</span>  	   <span class="token comment">// \u51FD\u6570\u73AF\u5883</span>
            <span class="token comment">// \u6807\u8BC6\u7B26\u7ED1\u5B9A\u5728\u8FD9\u91CC 			  // \u5BF9\u5916\u90E8\u73AF\u5883\u7684\u5F15\u7528</span>
            <span class="token literal-property property">outer</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Global or outer <span class="token keyword">function</span> environment reference<span class="token operator">&gt;</span>  
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div size="1">**\u53D8\u91CF\u73AF\u5883**</div><p>\u53D8\u91CF\u73AF\u5883\u4E5F\u662F\u4E00\u4E2A\u8BCD\u6CD5\u73AF\u5883\uFF0C\u56E0\u6B64\u5B83\u5177\u6709\u4E0A\u9762\u5B9A\u4E49\u7684\u8BCD\u6CD5\u73AF\u5883\u7684\u6240\u6709\u5C5E\u6027\u3002</p><p>\u5728 ES6 \u4E2D\uFF0C<strong>\u8BCD\u6CD5</strong> \u73AF\u5883\u548C <strong>\u53D8\u91CF</strong> \u73AF\u5883\u7684\u533A\u522B\u5728\u4E8E\u524D\u8005\u7528\u4E8E\u5B58\u50A8**\u51FD\u6570\u58F0\u660E\u548C\u53D8\u91CF\uFF08 let \u548C const \uFF09\u7ED1\u5B9A\uFF0C\u800C\u540E\u8005\u4EC5\u7528\u4E8E\u5B58\u50A8\u53D8\u91CF\uFF08 var \uFF09**\u7ED1\u5B9A\u3002</p><p>\u4F7F\u7528\u4F8B\u5B50\u8FDB\u884C\u4ECB\u7ECD</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>  
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>  
<span class="token keyword">var</span> c<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>  
    <span class="token keyword">return</span> e <span class="token operator">*</span> f <span class="token operator">*</span> g<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>

c <span class="token operator">=</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u4E0A\u4E0B\u6587\u5982\u4E0B\u6240\u793A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>GlobalExectionContext <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">ThisBinding</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Global Object<span class="token operator">&gt;</span><span class="token punctuation">,</span>

    <span class="token literal-property property">LexicalEnvironment</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
        <span class="token literal-property property">EnvironmentRecord</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
            <span class="token literal-property property">Type</span><span class="token operator">:</span> <span class="token string">&quot;Object&quot;</span><span class="token punctuation">,</span>  
            <span class="token comment">// \u6807\u8BC6\u7B26\u7ED1\u5B9A\u5728\u8FD9\u91CC  </span>
            <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token operator">&lt;</span> uninitialized <span class="token operator">&gt;</span><span class="token punctuation">,</span>  
            <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token operator">&lt;</span> uninitialized <span class="token operator">&gt;</span><span class="token punctuation">,</span>  
            <span class="token literal-property property">multiply</span><span class="token operator">:</span> <span class="token operator">&lt;</span> func <span class="token operator">&gt;</span>  
        <span class="token punctuation">}</span>  
        <span class="token literal-property property">outer</span><span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token keyword">null</span><span class="token operator">&gt;</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">VariableEnvironment</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
        <span class="token literal-property property">EnvironmentRecord</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
            <span class="token literal-property property">Type</span><span class="token operator">:</span> <span class="token string">&quot;Object&quot;</span><span class="token punctuation">,</span>  
            <span class="token comment">// \u6807\u8BC6\u7B26\u7ED1\u5B9A\u5728\u8FD9\u91CC  </span>
            <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>  
        <span class="token punctuation">}</span>  
        <span class="token literal-property property">outer</span><span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token keyword">null</span><span class="token operator">&gt;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>

FunctionExectionContext <span class="token operator">=</span> <span class="token punctuation">{</span>  
   
    <span class="token literal-property property">ThisBinding</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Global Object<span class="token operator">&gt;</span><span class="token punctuation">,</span>

    <span class="token literal-property property">LexicalEnvironment</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
        <span class="token literal-property property">EnvironmentRecord</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
            <span class="token literal-property property">Type</span><span class="token operator">:</span> <span class="token string">&quot;Declarative&quot;</span><span class="token punctuation">,</span>  
            <span class="token comment">// \u6807\u8BC6\u7B26\u7ED1\u5B9A\u5728\u8FD9\u91CC  </span>
            <span class="token literal-property property">Arguments</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  
        <span class="token punctuation">}</span><span class="token punctuation">,</span>  
        <span class="token literal-property property">outer</span><span class="token operator">:</span> <span class="token operator">&lt;</span>GlobalLexicalEnvironment<span class="token operator">&gt;</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">VariableEnvironment</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
        <span class="token literal-property property">EnvironmentRecord</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
            <span class="token literal-property property">Type</span><span class="token operator">:</span> <span class="token string">&quot;Declarative&quot;</span><span class="token punctuation">,</span>  
            <span class="token comment">// \u6807\u8BC6\u7B26\u7ED1\u5B9A\u5728\u8FD9\u91CC  </span>
            <span class="token literal-property property">g</span><span class="token operator">:</span> <span class="token keyword">undefined</span>  
        <span class="token punctuation">}</span><span class="token punctuation">,</span>  
        <span class="token literal-property property">outer</span><span class="token operator">:</span> <span class="token operator">&lt;</span>GlobalLexicalEnvironment<span class="token operator">&gt;</span>  
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u53D8\u91CF\u63D0\u5347</strong>\u7684\u539F\u56E0\uFF1A\u5728\u521B\u5EFA\u9636\u6BB5\uFF0C\u51FD\u6570\u58F0\u660E\u5B58\u50A8\u5728\u73AF\u5883\u4E2D\uFF0C\u800C\u53D8\u91CF\u4F1A\u88AB\u8BBE\u7F6E\u4E3A undefined\uFF08\u5728 var \u7684\u60C5\u51B5\u4E0B\uFF09\u6216\u4FDD\u6301\u672A\u521D\u59CB\u5316\uFF08\u5728 let \u548C const \u7684\u60C5\u51B5\u4E0B\uFF09\u3002\u6240\u4EE5\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u5728\u58F0\u660E\u4E4B\u524D\u8BBF\u95EE var \u5B9A\u4E49\u7684\u53D8\u91CF\uFF08\u5C3D\u7BA1\u662F undefined \uFF09\uFF0C\u4F46\u5982\u679C\u5728\u58F0\u660E\u4E4B\u524D\u8BBF\u95EE let \u548C const \u5B9A\u4E49\u7684\u53D8\u91CF\u5C31\u4F1A\u63D0\u793A\u5F15\u7528\u9519\u8BEF\u7684\u539F\u56E0\u3002\u8FD9\u5C31\u662F\u6240\u8C13\u7684\u53D8\u91CF\u63D0\u5347\u3002</p><h2 id="\u6267\u884C\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u9636\u6BB5" aria-hidden="true">#</a> <strong>\u6267\u884C\u9636\u6BB5</strong></h2><p>\u6B64\u9636\u6BB5\uFF0C\u5B8C\u6210\u5BF9\u6240\u6709\u53D8\u91CF\u7684\u5206\u914D\uFF0C\u6700\u540E\u6267\u884C\u4EE3\u7801\u3002</p><p>\u5982\u679C Javascript \u5F15\u64CE\u5728\u6E90\u4EE3\u7801\u4E2D\u58F0\u660E\u7684\u5B9E\u9645\u4F4D\u7F6E\u627E\u4E0D\u5230 let \u53D8\u91CF\u7684\u503C\uFF0C\u90A3\u4E48\u5C06\u4E3A\u5176\u5206\u914D undefined \u503C\u3002</p>`,36),o=[e];function l(i,c){return s(),a("div",null,o)}var u=n(t,[["render",l],["__file","executionStack.html.vue"]]);export{u as default};
