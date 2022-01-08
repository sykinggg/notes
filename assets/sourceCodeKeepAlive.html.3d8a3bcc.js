import{r as e,o,c,a as n,d as p,F as l,b as s,e as t}from"./app.8a201290.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=n("h2",{id:"keep-alive",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#keep-alive","aria-hidden":"true"},"#"),s(" keep-alive")],-1),k=n("p",null,"keep-alive\u662FVue.js\u7684\u4E00\u4E2A\u5185\u7F6E\u7EC4\u4EF6\u3002\u5B83\u80FD\u591F\u4E0D\u6D3B\u52A8\u7684\u7EC4\u4EF6\u5B9E\u4F8B\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u5C06\u5176\u9500\u6BC1\uFF0C\u5B83\u662F\u4E00\u4E2A\u62BD\u8C61\u7EC4\u4EF6\uFF0C\u4E0D\u4F1A\u88AB\u6E32\u67D3\u5230\u771F\u5B9EDOM\u4E2D\uFF0C\u4E5F\u4E0D\u4F1A\u51FA\u73B0\u5728\u7236\u7EC4\u4EF6\u94FE\u4E2D\u3002",-1),d=n("p",null,"\u5B83\u63D0\u4F9B\u4E86include\u4E0Eexclude\u4E24\u4E2A\u5C5E\u6027\uFF0C\u5141\u8BB8\u7EC4\u4EF6\u6709\u6761\u4EF6\u5730\u8FDB\u884C\u7F13\u5B58\u3002",-1),m=s("\u5177\u4F53\u5185\u5BB9\u53EF\u4EE5\u53C2\u8003"),b={href:"https://cn.vuejs.org/v2/api/#keep-alive",target:"_blank",rel:"noopener noreferrer"},h=s("\u5B98\u7F51"),g=s("\u3002"),v=t(`<h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u91CC\u7684component\u7EC4\u4EF6\u4F1A\u88AB\u7F13\u5B58\u8D77\u6765\u3002</p><h3 id="\u4E3E\u4E2A\u6817\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4E3E\u4E2A\u6817\u5B50" aria-hidden="true">#</a> \u4E3E\u4E2A\u6817\u5B50</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>coma</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>coma</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comb</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comb</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test=handleClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8BF7\u70B9\u51FB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClick</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>test <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>test<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5728\u70B9\u51FBbutton\u65F6\u5019\uFF0Ccoma\u4E0Ecomb\u4E24\u4E2A\u7EC4\u4EF6\u4F1A\u53D1\u751F\u5207\u6362\uFF0C\u4F46\u662F\u8FD9\u65F6\u5019\u8FD9\u4E24\u4E2A\u7EC4\u4EF6\u7684\u72B6\u6001\u4F1A\u88AB\u7F13\u5B58\u8D77\u6765\uFF0C\u6BD4\u5982\u8BF4coma\u4E0Ecomb\u7EC4\u4EF6\u4E2D\u90FD\u6709\u4E00\u4E2Ainput\u6807\u7B7E\uFF0C\u90A3\u4E48input\u6807\u7B7E\u4E2D\u7684\u5185\u5BB9\u4E0D\u4F1A\u56E0\u4E3A\u7EC4\u4EF6\u7684\u5207\u6362\u800C\u6D88\u5931\u3002</p><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3><p>keep-alive\u7EC4\u4EF6\u63D0\u4F9B\u4E86include\u4E0Eexclude\u4E24\u4E2A\u5C5E\u6027\u6765\u5141\u8BB8\u7EC4\u4EF6\u6709\u6761\u4EF6\u5730\u8FDB\u884C\u7F13\u5B58\uFF0C\u4E8C\u8005\u90FD\u53EF\u4EE5\u7528\u9017\u53F7\u5206\u9694\u5B57\u7B26\u4E32\u3001\u6B63\u5219\u8868\u8FBE\u5F0F\u6216\u4E00\u4E2A\u6570\u7EC4\u6765\u8868\u793A\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span> <span class="token attr-name">include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5C06\u7F13\u5B58name\u4E3Aa\u7684\u7EC4\u4EF6\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span> <span class="token attr-name">exclude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>name\u4E3Aa\u7684\u7EC4\u4EF6\u5C06\u4E0D\u4F1A\u88AB\u7F13\u5B58\u3002</p><h3 id="\u751F\u547D\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u94A9\u5B50" aria-hidden="true">#</a> \u751F\u547D\u94A9\u5B50</h3><p>keep-alive\u63D0\u4F9B\u4E86\u4E24\u4E2A\u751F\u547D\u94A9\u5B50\uFF0C\u5206\u522B\u662Factivated\u4E0Edeactivated\u3002</p><p>\u56E0\u4E3Akeep-alive\u4F1A\u5C06\u7EC4\u4EF6\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u5E76\u4E0D\u4F1A\u9500\u6BC1\u4EE5\u53CA\u91CD\u65B0\u521B\u5EFA\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u91CD\u65B0\u8C03\u7528\u7EC4\u4EF6\u7684created\u7B49\u65B9\u6CD5\uFF0C\u9700\u8981\u7528activated\u4E0Edeactivated\u8FD9\u4E24\u4E2A\u751F\u547D\u94A9\u5B50\u6765\u5F97\u77E5\u5F53\u524D\u7EC4\u4EF6\u662F\u5426\u5904\u4E8E\u6D3B\u52A8\u72B6\u6001\u3002</p><hr><h2 id="\u6DF1\u5165keep-alive\u7EC4\u4EF6\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5165keep-alive\u7EC4\u4EF6\u5B9E\u73B0" aria-hidden="true">#</a> \u6DF1\u5165keep-alive\u7EC4\u4EF6\u5B9E\u73B0</h2><p>\u8BF4\u5B8C\u4E86keep-alive\u7EC4\u4EF6\u7684\u4F7F\u7528\uFF0C\u4ECE\u6E90\u7801\u89D2\u5EA6\u770B\u4E00\u4E0Bkeep-alive\u7EC4\u4EF6\u7A76\u7ADF\u662F\u5982\u4F55\u5B9E\u73B0\u7EC4\u4EF6\u7684\u7F13\u5B58\u7684\u5462\uFF1F</p><h3 id="created\u4E0Edestroyed\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#created\u4E0Edestroyed\u94A9\u5B50" aria-hidden="true">#</a> created\u4E0Edestroyed\u94A9\u5B50</h3><p>created\u94A9\u5B50\u4F1A\u521B\u5EFA\u4E00\u4E2Acache\u5BF9\u8C61\uFF0C\u7528\u6765\u4F5C\u4E3A\u7F13\u5B58\u5BB9\u5668\uFF0C\u4FDD\u5B58vnode\u8282\u70B9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u7F13\u5B58\u5BF9\u8C61 */</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cache <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>destroyed\u94A9\u5B50\u5219\u5728\u7EC4\u4EF6\u88AB\u9500\u6BC1\u7684\u65F6\u5019\u6E05\u9664cache\u7F13\u5B58\u4E2D\u7684\u6240\u6709\u7EC4\u4EF6\u5B9E\u4F8B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* destroyed\u94A9\u5B50\u4E2D\u9500\u6BC1\u6240\u6709cache\u4E2D\u7684\u7EC4\u4EF6\u5B9E\u4F8B */</span>
<span class="token function">destroyed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">pruneCacheEntry</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h3><p>\u63A5\u4E0B\u6765\u662Frender\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u5F97\u5230slot\u63D2\u69FD\u4E2D\u7684\u7B2C\u4E00\u4E2A\u7EC4\u4EF6 */</span>
    <span class="token keyword">const</span> <span class="token literal-property property">vnode</span><span class="token operator">:</span> VNode <span class="token operator">=</span> <span class="token function">getFirstComponentChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token literal-property property">componentOptions</span><span class="token operator">:</span> <span class="token operator">?</span>VNodeComponentOptions <span class="token operator">=</span> vnode <span class="token operator">&amp;&amp;</span> vnode<span class="token punctuation">.</span>componentOptions
    <span class="token keyword">if</span> <span class="token punctuation">(</span>componentOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// check pattern</span>
        <span class="token comment">/* \u83B7\u53D6\u7EC4\u4EF6\u540D\u79F0\uFF0C\u4F18\u5148\u83B7\u53D6\u7EC4\u4EF6\u7684name\u5B57\u6BB5\uFF0C\u5426\u5219\u662F\u7EC4\u4EF6\u7684tag */</span>
        <span class="token keyword">const</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token operator">?</span>string <span class="token operator">=</span> <span class="token function">getComponentName</span><span class="token punctuation">(</span>componentOptions<span class="token punctuation">)</span>
        <span class="token comment">/* name\u4E0D\u5728inlcude\u4E2D\u6216\u8005\u5728exlude\u4E2D\u5219\u76F4\u63A5\u8FD4\u56DEvnode\uFF08\u6CA1\u6709\u53D6\u7F13\u5B58\uFF09 */</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>include <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>include<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>exclude <span class="token operator">&amp;&amp;</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>exclude<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> vnode
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token operator">?</span>string <span class="token operator">=</span> vnode<span class="token punctuation">.</span>key <span class="token operator">==</span> <span class="token keyword">null</span>
        <span class="token comment">// same constructor may get registered as different local components</span>
        <span class="token comment">// so cid alone is not enough (#3269)</span>
        <span class="token operator">?</span> componentOptions<span class="token punctuation">.</span>Ctor<span class="token punctuation">.</span>cid <span class="token operator">+</span> <span class="token punctuation">(</span>componentOptions<span class="token punctuation">.</span>tag <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">::</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>componentOptions<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">:</span> vnode<span class="token punctuation">.</span>key
        <span class="token comment">/* \u5982\u679C\u5DF2\u7ECF\u505A\u8FC7\u7F13\u5B58\u4E86\u5219\u76F4\u63A5\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B\u7ED9vnode\uFF0C\u8FD8\u672A\u7F13\u5B58\u8FC7\u5219\u8FDB\u884C\u7F13\u5B58 */</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>componentInstance
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> vnode
        <span class="token punctuation">}</span>
        <span class="token comment">/* keepAlive\u6807\u8BB0\u4F4D */</span>
        vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>keepAlive <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> vnode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,28),y=s("\u9996\u5148\u901A\u8FC7getFirstComponentChild\u83B7\u53D6\u7B2C\u4E00\u4E2A\u5B50\u7EC4\u4EF6\uFF0C\u83B7\u53D6\u8BE5\u7EC4\u4EF6\u7684name\uFF08\u5B58\u5728\u7EC4\u4EF6\u540D\u5219\u76F4\u63A5\u4F7F\u7528\u7EC4\u4EF6\u540D\uFF0C\u5426\u5219\u4F1A\u4F7F\u7528tag\uFF09\u3002\u63A5\u4E0B\u6765\u4F1A\u5C06\u8FD9\u4E2Aname\u901A\u8FC7include\u4E0Eexclude\u5C5E\u6027\u8FDB\u884C\u5339\u914D\uFF0C\u5339\u914D\u4E0D\u6210\u529F\uFF08\u8BF4\u660E\u4E0D\u9700\u8981\u8FDB\u884C\u7F13\u5B58\uFF09\u5219\u4E0D\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C\u76F4\u63A5\u8FD4\u56DEvnode\uFF0Cvnode\u662F\u4E00\u4E2AVNode\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u4E0D\u4E86\u89E3VNode\u7684\u540C\u5B66\u53EF\u4EE5\u53C2\u8003\u7B14\u8005\u7684\u53E6\u4E00\u7BC7\u6587\u7AE0"),f={href:"https://github.com/answershuto/learnVue/blob/master/docs/VNode%E8%8A%82%E7%82%B9.MarkDown",target:"_blank",rel:"noopener noreferrer"},w=s("\u300AVNode\u8282\u70B9\u300B"),_=s(" ."),x=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* \u68C0\u6D4Bname\u662F\u5426\u5339\u914D */</span>
<span class="token keyword">function</span> <span class="token function">matches</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">pattern</span><span class="token operator">:</span> string <span class="token operator">|</span> RegExp<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> pattern <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u5B57\u7B26\u4E32\u60C5\u51B5\uFF0C\u5982a,b,c */</span>
    <span class="token keyword">return</span> pattern<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isRegExp</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u6B63\u5219 */</span>
    <span class="token keyword">return</span> pattern<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* istanbul ignore next */</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u68C0\u6D4Binclude\u4E0Eexclude\u5C5E\u6027\u5339\u914D\u7684\u51FD\u6570\u5F88\u7B80\u5355\uFF0Cinclude\u4E0Eexclude\u5C5E\u6027\u652F\u6301\u5B57\u7B26\u4E32\u5982&quot;a,b,c&quot;\u8FD9\u6837\u7EC4\u4EF6\u540D\u4EE5\u9017\u53F7\u9694\u5F00\u7684\u60C5\u51B5\u4EE5\u53CA\u6B63\u5219\u8868\u8FBE\u5F0F\u3002matches\u901A\u8FC7\u8FD9\u4E24\u79CD\u65B9\u5F0F\u5206\u522B\u68C0\u6D4B\u662F\u5426\u5339\u914D\u5F53\u524D\u7EC4\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>componentInstance
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> vnode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u63A5\u4E0B\u6765\u7684\u4E8B\u60C5\u5F88\u7B80\u5355\uFF0C\u6839\u636Ekey\u5728this.cache\u4E2D\u67E5\u627E\uFF0C\u5982\u679C\u5B58\u5728\u5219\u8BF4\u660E\u4E4B\u524D\u5DF2\u7ECF\u7F13\u5B58\u8FC7\u4E86\uFF0C\u76F4\u63A5\u5C06\u7F13\u5B58\u7684vnode\u7684componentInstance\uFF08\u7EC4\u4EF6\u5B9E\u4F8B\uFF09\u8986\u76D6\u5230\u76EE\u524D\u7684vnode\u4E0A\u9762\u3002\u5426\u5219\u5C06vnode\u5B58\u50A8\u5728cache\u4E2D\u3002</p><p>\u6700\u540E\u8FD4\u56DEvnode\uFF08\u6709\u7F13\u5B58\u65F6\u8BE5vnode\u7684componentInstance\u5DF2\u7ECF\u88AB\u66FF\u6362\u6210\u7F13\u5B58\u4E2D\u7684\u4E86\uFF09\u3002</p><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h3><p>\u7528watch\u6765\u76D1\u542CpruneCache\u4E0EpruneCache\u8FD9\u4E24\u4E2A\u5C5E\u6027\u7684\u6539\u53D8\uFF0C\u5728\u6539\u53D8\u7684\u65F6\u5019\u4FEE\u6539cache\u7F13\u5B58\u4E2D\u7684\u7F13\u5B58\u6570\u636E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u76D1\u89C6include\u4EE5\u53CAexclude\uFF0C\u5728\u88AB\u4FEE\u6539\u7684\u65F6\u5019\u5BF9cache\u8FDB\u884C\u4FEE\u6B63 */</span>
    <span class="token function">include</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> string <span class="token operator">|</span> RegExp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">pruneCache</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_vnode<span class="token punctuation">,</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token function">matches</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">exclude</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> string <span class="token operator">|</span> RegExp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">pruneCache</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_vnode<span class="token punctuation">,</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token function">matches</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6765\u770B\u4E00\u4E0BpruneCache\u7684\u5B9E\u73B0\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* \u4FEE\u6B63cache */</span>
<span class="token keyword">function</span> <span class="token function">pruneCache</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">cache</span><span class="token operator">:</span> VNodeCache<span class="token punctuation">,</span> <span class="token literal-property property">current</span><span class="token operator">:</span> VNode<span class="token punctuation">,</span> <span class="token literal-property property">filter</span><span class="token operator">:</span> Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> cache<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u53D6\u51FAcache\u4E2D\u7684vnode */</span>
    <span class="token keyword">const</span> <span class="token literal-property property">cachedNode</span><span class="token operator">:</span> <span class="token operator">?</span>VNode <span class="token operator">=</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token operator">?</span>string <span class="token operator">=</span> <span class="token function">getComponentName</span><span class="token punctuation">(</span>cachedNode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">)</span>
      <span class="token comment">/* name\u4E0D\u7B26\u5408filter\u6761\u4EF6\u7684\uFF0C\u540C\u65F6\u4E0D\u662F\u76EE\u524D\u6E32\u67D3\u7684vnode\u65F6\uFF0C\u9500\u6BC1vnode\u5BF9\u5E94\u7684\u7EC4\u4EF6\u5B9E\u4F8B\uFF08Vue\u5B9E\u4F8B\uFF09\uFF0C\u5E76\u4ECEcache\u4E2D\u79FB\u9664 */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">filter</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedNode <span class="token operator">!==</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">pruneCacheEntry</span><span class="token punctuation">(</span>cachedNode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 

<span class="token comment">/* \u9500\u6BC1vnode\u5BF9\u5E94\u7684\u7EC4\u4EF6\u5B9E\u4F8B\uFF08Vue\u5B9E\u4F8B\uFF09 */</span>
<span class="token keyword">function</span> <span class="token function">pruneCacheEntry</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vnode</span><span class="token operator">:</span> <span class="token operator">?</span>VNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u904D\u5386cache\u4E2D\u7684\u6240\u6709\u9879\uFF0C\u5982\u679C\u4E0D\u7B26\u5408filter\u6307\u5B9A\u7684\u89C4\u5219\u7684\u8BDD\uFF0C\u5219\u4F1A\u6267\u884CpruneCacheEntry\u3002pruneCacheEntry\u5219\u4F1A\u8C03\u7528\u7EC4\u4EF6\u5B9E\u4F8B\u7684$destroy\u65B9\u6CD5\u6765\u5C06\u7EC4\u4EF6\u9500\u6BC1\u3002</p><h2 id="\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u6700\u540E" aria-hidden="true">#</a> \u6700\u540E</h2>`,12),j=s("Vue.js\u5185\u90E8\u5C06DOM\u8282\u70B9\u62BD\u8C61\u6210\u4E86\u4E00\u4E2A\u4E2A\u7684"),C={href:"https://github.com/answershuto/learnVue/blob/master/docs/VNode%E8%8A%82%E7%82%B9.MarkDown",target:"_blank",rel:"noopener noreferrer"},N=s("VNode\u8282\u70B9"),V=s("\uFF0Ckeep-alive\u7EC4\u4EF6\u7684\u7F13\u5B58\u4E5F\u662F\u57FA\u4E8EVNode\u8282\u70B9\u7684\u800C\u4E0D\u662F\u76F4\u63A5\u5B58\u50A8DOM\u7ED3\u6784\u3002\u5B83\u5C06\u6EE1\u8DB3\u6761\u4EF6\uFF08pruneCache\u4E0EpruneCache\uFF09\u7684\u7EC4\u4EF6\u5728cache\u5BF9\u8C61\u4E2D\u7F13\u5B58\u8D77\u6765\uFF0C\u5728\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u7684\u65F6\u5019\u518D\u5C06vnode\u8282\u70B9\u4ECEcache\u5BF9\u8C61\u4E2D\u53D6\u51FA\u5E76\u6E32\u67D3\u3002");function E(q,O){const a=e("ExternalLinkIcon");return o(),c(l,null,[i,k,d,n("p",null,[m,n("a",b,[h,p(a)]),g]),v,n("p",null,[y,n("a",f,[w,p(a)]),_]),x,n("p",null,[j,n("a",C,[N,p(a)]),V])],64)}var B=u(r,[["render",E]]);export{B as default};
