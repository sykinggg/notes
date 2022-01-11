import{r as e,o,c,b as n,d as l,F as u,a as s,e as p}from"./app.2f6bbef8.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const r={},k=s(`<h1 id="vue\u83B7\u53D6\u9875\u9762\u5143\u7D20\u7684\u76F8\u5BF9\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#vue\u83B7\u53D6\u9875\u9762\u5143\u7D20\u7684\u76F8\u5BF9\u4F4D\u7F6E" aria-hidden="true">#</a> Vue\u83B7\u53D6\u9875\u9762\u5143\u7D20\u7684\u76F8\u5BF9\u4F4D\u7F6E</h1><h2 id="\u53D1\u73B0\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u53D1\u73B0\u95EE\u9898" aria-hidden="true">#</a> \u53D1\u73B0\u95EE\u9898</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>// html \u7ED3\u6784
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>source-subnav<span class="token punctuation">&#39;</span>, isFixed ? <span class="token punctuation">&#39;</span>tab-nav-fixed<span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>subnav<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript:;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9996\u9875\u63A8\u8350<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript:;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6700\u65B0\u53D1\u5E03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">isFixed</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>	
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>subnav<span class="token punctuation">.</span>getBoundingClientRect<span class="token punctuation">)</span><span class="token punctuation">{</span>
	    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">scrollTop</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>subnav<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
	<span class="token comment">// \u8FD9\u662F\u5C01\u88C5\u7684\u4E00\u4E2A\u65B9\u6CD5</span>
        <span class="token function">scrollTop</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">scrollTop</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>isFixed <span class="token operator">=</span> res<span class="token punctuation">.</span>scrollH <span class="token operator">&gt;</span> h <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><blockquote><p>utils.js</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8BE5\u51FD\u6570\u4E3B\u8981\u529F\u80FD\u8FD4\u56DE\uFF0C\u6EDA\u52A8\u7684\u9AD8\u5EA6\u4EE5\u53CA\u6587\u6863\u5360\u6BD4\u7A97\u53E3\u9AD8\u5EA6\u7684\u767E\u5206\u6BD4</span>
utils<span class="token punctuation">.</span><span class="token function-variable function">scrollTop</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u9875\u9762\u603B\u9AD8</span>
    <span class="token keyword">var</span> totalH <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">;</span>
    <span class="token comment">// \u53EF\u89C6\u9AD8</span>
    <span class="token keyword">var</span> clientH <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// \u8BA1\u7B97\u6709\u6548\u9AD8</span>
        <span class="token keyword">var</span> validH <span class="token operator">=</span> totalH <span class="token operator">-</span> clientH
        <span class="token comment">// \u6EDA\u52A8\u6761\u5377\u53BB\u9AD8\u5EA6</span>
        <span class="token keyword">var</span> scrollH <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop
        <span class="token comment">// \u767E\u5206\u6BD4</span>
        result<span class="token punctuation">.</span>percentage <span class="token operator">=</span> <span class="token punctuation">(</span>scrollH<span class="token operator">/</span>validH<span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        result<span class="token punctuation">.</span>scrollH <span class="token operator">=</span> scrollH<span class="token punctuation">;</span>
        callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,6),d=["src"],b=n("p",null,[p("\u53EF\u4EE5\u770B\u5230\u8BE5\u5143\u7D20\u7684\u8DDD\u79BB\u9876\u90E8595px\uFF0C\u6B63\u5E38\u663E\u793A \u5F53\u6211\u5148\u6EDA\u52A8\u4E00\u6BB5\u8DDD\u79BB\u540E\uFF0C\u7136\u540E\u518D\u6B21\u5237\u65B0\uFF0C\u6EDA\u52A8\u6761\u4F4D\u7F6E\u8FD8\u4F1A\u8BB0\u5F55\u4E4B\u524D\u7684\u4F4D\u7F6E\uFF0C\u8FD9\u662Ftop\u4E3A195px\uFF0C\u8FD9\u4E5F\u662F\u6B63\u5E38\u7684\uFF0C\u56E0\u4E3A"),n("code",null,"getBoundingClientRect"),p("\u662F\u6839\u636E\u6D4F\u89C8\u5668\u7A97\u53E3\u8FDB\u884C\u5B9A\u4F4D\u7F6E\u7684 \u800C\u6211\u60F3\u8981\u7684\u662F\u60F3\u8981\u4E0D\u7BA1\u6D4F\u89C8\u5668\u6EDA\u52A8\u6761\u4F4D\u7F6E\u5728\u4F55\u5904\u65F6\u5237\u65B0\u6D4F\u89C8\u5668\uFF0C\u6211\u6240\u7ED1\u5B9A\u7684dom\u5143\u7D20\u90FD\u662F\u6839\u636E\u6587\u6863\u5DE6\u4E0A\u89D2\u8FDB\u884C\u5B9A\u4F4D\u7684")],-1),m=["src"],g=s(`<h3 id="offsettop" tabindex="-1"><a class="header-anchor" href="#offsettop" aria-hidden="true">#</a> offsetTop</h3><p>\u7F51\u4E0A\u6709\u4EBA\u8BF4\u7528<code>offsetTop</code>\uFF0C\u5176\u5B9E<code>offsetTop</code>\u662F\u5BF9\u5F53\u524D\u5BF9\u8C61\u5230\u5176\u4E0A\u7EA7\u5C42\u9876\u90E8\u7684\u8DDD\u79BB\u3002\u4E0D\u80FD\u5BF9\u5176\u8FDB\u884C\u8D4B\u503C.\u8BBE\u7F6E\u5BF9\u8C61\u5230\u9875\u9762\u9876\u90E8\u7684\u8DDD\u79BB\u8BF7\u7528<code>style.top</code>\u5C5E\u6027</p><h2 id="\u83B7\u53D6\u5143\u7D20\u8DDD\u79BB\u6587\u6863\u9876\u90E8\u8DDD\u79BB" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5143\u7D20\u8DDD\u79BB\u6587\u6863\u9876\u90E8\u8DDD\u79BB" aria-hidden="true">#</a> \u83B7\u53D6\u5143\u7D20\u8DDD\u79BB\u6587\u6863\u9876\u90E8\u8DDD\u79BB</h2><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A DOMRect \u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u662F\u7531\u8BE5\u5143\u7D20\u7684 getClientRects() \u65B9\u6CD5\u8FD4\u56DE\u7684\u4E00\u7EC4\u77E9\u5F62\u7684\u96C6\u5408, \u5373\uFF1A\u662F\u4E0E\u8BE5\u5143\u7D20\u76F8\u5173\u7684 CSS \u8FB9\u6846\u96C6\u5408\u3002 DOMRect \u5BF9\u8C61\u5305\u542B\u4E86\u4E00\u7EC4\u7528\u4E8E\u63CF\u8FF0\u8FB9\u6846\u7684\u53EA\u8BFB\u5C5E\u6027: left\u3001top\u3001right \u548C bottom\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20\u3002\u9664\u4E86 width \u548C height \u5916\u7684\u5C5E\u6027\u90FD\u662F\u76F8\u5BF9\u4E8E\u89C6\u53E3\u7684\u5DE6\u4E0A\u89D2\u4F4D\u7F6E\u800C\u8A00\u7684\u3002 getBoundingClientRect\u8FD4\u56DE\u503C top: \u5143\u7D20\u4E0A\u8FB9\u6846\u8DDD\u79BB\u89C6\u7A97\u9876\u90E8\u7684\u8DDD\u79BB bottom: \u5143\u7D20\u4E0B\u8FB9\u6846\u8DDD\u79BB\u89C6\u7A97\u9876\u90E8\u7684\u8DDD\u79BB left: \u5143\u7D20\u5DE6\u8FB9\u6846\u8DDD\u79BB\u89C6\u7A97\u5DE6\u4FA7\u7684\u8DDD\u79BB right: \u5143\u7D20\u53F3\u8FB9\u6846\u8DDD\u79BB\u89C6\u7A97\u5DE6\u4FA7\u7684\u8DDD\u79BB</p></div><p>\u7531\u4E8E<code>getBoundingClientRect</code>\u5B83\u4EEC\u4F1A\u968F\u7740\u89C6\u7A97\u7684\u6EDA\u52A8\u800C\u76F8\u5E94\u7684\u6539\u53D8\uFF0C\u90A3\u4E48\u5143\u7D20\u8DDD\u79BB\u9875\u9762\u9876\u90E8\u7684\u8DDD\u79BB\u5C31\u662F,\u518D\u52A0\u4E0A\u6EDA\u52A8\u8DDD\u79BB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>subnav<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top <span class="token operator">+</span> window<span class="token punctuation">.</span>scrollY<span class="token punctuation">;</span> 
<span class="token comment">// \u6216\u8005</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>subnav<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top<span class="token operator">+</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,6),f=p("window.scrollY\u4E0D\u517C\u5BB9ie9\uFF0C\u5982\u9700\u517C\u5BB9\u8BF7\u770B"),h={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FWindow%2FscrollY",target:"_blank",rel:"noopener noreferrer"},v=p("Window.scrollY"),w=s(`<blockquote><p>\u4FEE\u6539\u4E0A\u65B9\u4EE3\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>subnav<span class="token punctuation">.</span>getBoundingClientRect<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> top1 <span class="token operator">=</span>  <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>subnav<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top <span class="token operator">+</span> window<span class="token punctuation">.</span>scrollY
    <span class="token keyword">var</span> top2 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>subnav<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top<span class="token operator">+</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>top1<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>top2<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">scrollTop</span><span class="token punctuation">(</span>top<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6548\u679C\u5982\u4E0B\uFF0C\u4E0D\u7BA1\u6EDA\u52A8\u6761\u4F55\u5904\u4F4D\u7F6E\u90FD\u662F\u4E00\u4E2A\u76F8\u5BF9\u6587\u6863\u6700\u4E0A\u9762\u7684\u5DE6\u4E0A\u89D2</p>`,3),y=["src"],_=s(`<h2 id="\u962E\u4E00\u5CF0" tabindex="-1"><a class="header-anchor" href="#\u962E\u4E00\u5CF0" aria-hidden="true">#</a> \u962E\u4E00\u5CF0</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getElementTop</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> actualTop <span class="token operator">=</span> element<span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
    <span class="token keyword">var</span> current <span class="token operator">=</span> element<span class="token punctuation">.</span>offsetParent<span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        actualTop <span class="token operator">+=</span> current<span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
        current <span class="token operator">=</span> current<span class="token punctuation">.</span>offsetParent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> actualTop<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> \u5B9E\u73B0\u539F\u7406</h3><p>offsetTop\u53EF\u4EE5\u8FD4\u56DE\u5143\u7D20\u8DDD\u79BBoffsetParent\u5C5E\u6027\u8FD4\u56DE\u5143\u7D20\u9876\u90E8\u7684\u8DDD\u79BB\uFF08\u5982\u679C\u7236\u5143\u7D20\u6709\u5B9A\u4F4D\u7684\uFF0C\u90A3\u4E48\u5C06\u8FD4\u56DE\u8DDD\u79BB\u6700\u8FD1\u7684\u5B9A\u4F4D\u5143\u7D20\uFF0C\u5426\u5219\u8FD4\u56DEbody\u5143\u7D20\uFF0C\u5143\u7D20\u53EF\u80FD\u6709\u591A\u4E2A\u5B9A\u4F4D\u5143\u7D20\uFF0C\u9700\u8981\u901A\u8FC7\u9012\u5F52\u7684\u65B9\u5F0F\u5C42\u5C42\u83B7\u53D6\u8DDD\u79BB\uFF0C\u7136\u540E\u76F8\u52A0</p><p><strong>\u7279\u522B\u8BF4\u660E</strong>\uFF1A \u9700\u8981\u5C06body\u7684\u5916\u8FB9\u8DDD\u8BBE\u7F6E\u4E3A0\uFF0C\u8FD9\u6837\u5143\u7D20\u8DDD\u79BBbody\u9876\u90E8\u7684\u8DDD\u79BB\u5C31\u7B49\u540C\u4E8E\u8DDD\u79BB\u6587\u6863\u9876\u90E8\u7684\u8DDD\u79BB</p><h3 id="\u4FEE\u6539\u4E0A\u65B9\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u4E0A\u65B9\u4EE3\u7801" aria-hidden="true">#</a> \u4FEE\u6539\u4E0A\u65B9\u4EE3\u7801</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>subnav<span class="token punctuation">.</span>getBoundingClientRect<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> top1 <span class="token operator">=</span>  <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>subnav<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top <span class="token operator">+</span> window<span class="token punctuation">.</span>scrollY
    <span class="token keyword">var</span> top2 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>subnav<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top<span class="token operator">+</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
    <span class="token comment">// getElementTop\u5728\u4E0A\u65B9 </span>
    <span class="token keyword">var</span> top3 <span class="token operator">=</span>  <span class="token function">getElementTop</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>subnav<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>top1<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>top2<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>top3<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">scrollTop</span><span class="token punctuation">(</span>top<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6548\u679C\u5982\u4E0B</p>`,8),T=["src"],x=s(`<h2 id="\u603B\u7ED3\u4E09\u79CD\u65B9\u6CD5\u83B7\u53D6\u5143\u7D20\u8DDD\u79BB\u6587\u6863\u9876\u90E8\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3\u4E09\u79CD\u65B9\u6CD5\u83B7\u53D6\u5143\u7D20\u8DDD\u79BB\u6587\u6863\u9876\u90E8\u4F4D\u7F6E" aria-hidden="true">#</a> \u603B\u7ED3\u4E09\u79CD\u65B9\u6CD5\u83B7\u53D6\u5143\u7D20\u8DDD\u79BB\u6587\u6863\u9876\u90E8\u4F4D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>dom<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top <span class="token operator">+</span> window<span class="token punctuation">.</span>scrollY<span class="token punctuation">;</span> 
<span class="token comment">// \u6216\u8005</span>
dom<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top<span class="token operator">+</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
<span class="token comment">// \u6216\u8005</span>
<span class="token keyword">function</span> <span class="token function">getElementTop</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> actualTop <span class="token operator">=</span> element<span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
    <span class="token keyword">var</span> current <span class="token operator">=</span> element<span class="token punctuation">.</span>offsetParent<span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        actualTop <span class="token operator">+=</span> current<span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
        current <span class="token operator">=</span> current<span class="token punctuation">.</span>offsetParent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> actualTop<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,2);function j(a,B){const t=e("ExternalLinkIcon");return o(),c(u,null,[k,n("img",{src:a.$withBase("/assets/cli/17013dfdf76aa8c2_tplv-t2oaga2asx-watermark.awebp"),alt:"demo"},null,8,d),b,n("img",{src:a.$withBase("/assets/performance/vue/17013dfe141e75c3_tplv-t2oaga2asx-watermark.awebp"),alt:"demo"},null,8,m),g,n("p",null,[f,n("a",h,[v,l(t)])]),w,n("img",{src:a.$withBase("/assets/performance/vue/17013dfe05de5eab_tplv-t2oaga2asx-watermark.awebp"),alt:"demo"},null,8,y),_,n("img",{src:a.$withBase("/assets/performance/vue/17013dfe0422450c_tplv-t2oaga2asx-watermark.awebp"),alt:"demo"},null,8,T),x],64)}var R=i(r,[["render",j]]);export{R as default};
