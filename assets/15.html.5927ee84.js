import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.83201bd9.js";const p={},o=t(`<h1 id="\u7B2C15\u9898-async-await-\u600E\u4E48\u8FDB\u884C\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u7B2C15\u9898-async-await-\u600E\u4E48\u8FDB\u884C\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> \u7B2C15\u9898\uFF1Aasync/await \u600E\u4E48\u8FDB\u884C\u9519\u8BEF\u5904\u7406</h1><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><blockquote><p>\u4E00\u822C\u60C5\u51B5\u4E0B <code>async/await</code> \u5728\u9519\u8BEF\u5904\u7406\u65B9\u9762\uFF0C\u4E3B\u8981\u4F7F\u7528 <code>try/catch</code>\uFF0C\u50CF\u8FD9\u6837</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;fetch data is me&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;data is -&gt;&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err is -&gt;&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u4E48\u770B\uFF0C\u611F\u89C9\u5012\u662F\u6CA1\u4EC0\u4E48\u95EE\u9898\uFF0C\u5982\u679C\u662F\u8FD9\u6837\u5462\uFF1F\u6709\u591A\u4E2A\u5F02\u6B65\u64CD\u4F5C\uFF0C\u9700\u8981\u5BF9\u6BCF\u4E2A\u5F02\u6B65\u8FD4\u56DE\u7684 <code>error</code> \u9519\u8BEF\u72B6\u6001\u8FDB\u884C\u4E0D\u540C\u7684\u5904\u7406\uFF0C\u4EE5\u4E0B\u662F\u793A\u4F8B\u4EE3\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fetchDataA</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;fetch data is A&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">fetchDataB</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;fetch data is B&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">fetchDataC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;fetch data is C&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> dataA <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchDataA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;dataA is -&gt;&#39;</span><span class="token punctuation">,</span> dataA<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err is -&gt;&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> dataB <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchDataB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;dataB is -&gt;&#39;</span><span class="token punctuation">,</span> dataB<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err is -&gt;&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> dataC <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchDataC</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;dataC is -&gt;&#39;</span><span class="token punctuation">,</span> dataC<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err is -&gt;&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u6837\u5199\u4EE3\u7801\u91CC\u5145\u65A5\u7740 <code>try/catch</code>\uFF0C\u6709\u4EE3\u7801\u6D01\u7656\u7684\u4F60\u80FD\u5FCD\u53D7\u7684\u4E86\u5417\uFF1F\u8FD9\u65F6\u53EF\u80FD\u4F1A\u60F3\u5230\u53EA\u7528\u4E00\u4E2A <code>try/catch</code>\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ... \u8FD9\u91CC fetch \u51FD\u6570\u7701\u7565</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> dataA <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchDataA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;dataA is -&gt;&#39;</span><span class="token punctuation">,</span> dataA<span class="token punctuation">)</span>
        <span class="token keyword">const</span> dataB <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchDataB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;dataB is -&gt;&#39;</span><span class="token punctuation">,</span> dataB<span class="token punctuation">)</span>
        <span class="token keyword">const</span> dataC <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchDataC</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;dataC is -&gt;&#39;</span><span class="token punctuation">,</span> dataC<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err is -&gt;&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token comment">// \u96BE\u9053\u8981\u5B9A\u4E49 err \u7C7B\u578B\uFF0C\u7136\u540E\u5224\u65AD\u5417\uFF1F\uFF1F</span>
        <span class="token doc-comment comment">/**
         * if (err.type === &#39;dataA&#39;) <span class="token punctuation">{</span>
         *  console.log(&#39;dataA err is&#39;, err)
         * <span class="token punctuation">}</span>
         * ......
         * */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5982\u679C\u662F\u8FD9\u6837\u5199\u53EA\u4F1A\u589E\u52A0\u7F16\u7801\u7684\u590D\u6742\u5EA6\uFF0C\u800C\u4E14\u8981\u591A\u5199\u4EE3\u7801\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u5E94\u8BE5\u60F3\u60F3\u600E\u4E48\u4F18\u96C5\u7684\u89E3\u51B3\uFF0C<code>async/await</code> \u672C\u8D28\u5C31\u662F <code>promise</code> \u7684\u8BED\u6CD5\u7CD6\uFF0C\u65E2\u7136\u662F <code>promise</code> \u90A3\u4E48\u5C31\u53EF\u4EE5\u4F7F\u7528 <code>then</code> \u51FD\u6570\u4E86</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;fetch data is me&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> data <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> err<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5728\u4E0A\u9762\u5199\u6CD5\u4E2D\uFF0C\u5982\u679C <code>fetchData</code> \u8FD4\u56DE <code>resolve</code> \u6B63\u786E\u7ED3\u679C\u65F6\uFF0C<code>data</code> \u662F\u6211\u4EEC\u8981\u7684\u7ED3\u679C\uFF0C\u5982\u679C\u662F <code>reject</code> \u4E86\uFF0C\u53D1\u751F\u9519\u8BEF\u4E86\uFF0C\u90A3\u4E48 <code>data</code> \u662F\u9519\u8BEF\u7ED3\u679C\uFF0C\u8FD9\u663E\u7136\u662F\u884C\u4E0D\u901A\u7684\uFF0C\u518D\u5BF9\u5176\u5B8C\u5584\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;fetch data is me&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token punctuation">[</span>err<span class="token punctuation">,</span> data<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> data<span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>err<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token comment">// err null</span>
    <span class="token comment">// data fetch data is me</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u6837\u662F\u4E0D\u662F\u597D\u5F88\u591A\u4E86\u5462\uFF0C\u4F46\u662F\u95EE\u9898\u53C8\u6765\u4E86\uFF0C\u4E0D\u80FD\u6BCF\u4E2A <code>await</code> \u90FD\u5199\u8FD9\u4E48\u957F\uFF0C\u5199\u7740\u4E5F\u4E0D\u65B9\u4FBF\u4E5F\u4E0D\u4F18\u96C5\uFF0C\u518D\u4F18\u5316\u4E00\u4E0B</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;fetch data is me&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u62BD\u79BB\u6210\u516C\u5171\u65B9\u6CD5</span>
    <span class="token keyword">const</span> <span class="token function-variable function">awaitWrap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">promise</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> promise
            <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> data<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>err<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token punctuation">[</span>err<span class="token punctuation">,</span> data<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">awaitWrap</span><span class="token punctuation">(</span><span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token comment">// err null</span>
    <span class="token comment">// data fetch data is me</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u5BF9 <code>await</code> \u5904\u7406\u7684\u65B9\u6CD5\u62BD\u79BB\u6210\u516C\u5171\u7684\u65B9\u6CD5\uFF0C\u5728\u4F7F\u7528 <code>await</code> \u8C03\u7528 <code>awaitWrap</code> \u8FD9\u6837\u7684\u65B9\u6CD5\u662F\u4E0D\u662F\u66F4\u4F18\u96C5\u4E86\u5462\u3002\u5982\u679C\u4F7F\u7528 <code>typescript</code> \u5B9E\u73B0\u5927\u6982\u662F\u8FD9\u4E2A\u6837\u5B50</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> awaitWrap<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token operator">=</span> any<span class="token operator">&gt;</span><span class="token punctuation">(</span>promise<span class="token operator">:</span> Promise<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token constant">U</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> promise
        <span class="token punctuation">.</span>then<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token constant">T</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> data<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span>catch<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>err<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),e=[o];function c(l,u){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","15.html.vue"]]);export{r as default};