import{_ as p,r as e,o as t,c as o,b as n,d as c,F as l,e as s,a as r}from"./app.41ff10d5.js";const u={},i=n("h1",{id:"\u7B2C30\u5929-\u5199\u4E00\u4E2A\u65B9\u6CD5\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u4E3A\u56DE\u6587\u5B57\u7B26\u4E32",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C30\u5929-\u5199\u4E00\u4E2A\u65B9\u6CD5\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u4E3A\u56DE\u6587\u5B57\u7B26\u4E32","aria-hidden":"true"},"#"),s(" \u7B2C30\u5929 \u5199\u4E00\u4E2A\u65B9\u6CD5\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u4E3A\u56DE\u6587\u5B57\u7B26\u4E32")],-1),k=n("p",null,"\u628A\u4E0A\u8FB9\u5404\u4F4D\u7684\u7B54\u6848\u505A\u4E86\u4E00\u4E0B\u603B\u7ED3",-1),b={href:"https://leetcode-cn.com/problems/valid-palindrome/",target:"_blank",rel:"noopener noreferrer"},d=s("\u9898\u76EE\u94FE\u63A5"),m=r(`<blockquote><p>\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u9A8C\u8BC1\u5B83\u662F\u5426\u662F\u56DE\u6587\u4E32\uFF0C\u53EA\u8003\u8651\u5B57\u6BCD\u548C\u6570\u5B57\u5B57\u7B26\uFF0C\u53EF\u4EE5\u5FFD\u7565\u5B57\u6BCD\u7684\u5927\u5C0F\u5199\u3002 \u8BF4\u660E\uFF1A\u672C\u9898\u4E2D\uFF0C\u5C06\u7A7A\u5B57\u7B26\u4E32\u5B9A\u4E49\u4E3A\u6709\u6548\u7684\u56DE\u6587\u4E32\u3002</p><p>\u793A\u4F8B 1:</p><p>\u8F93\u5165: &quot;A man, a plan, a canal: Panama&quot; \u8F93\u51FA: true \u793A\u4F8B 2:</p><p>\u8F93\u5165: &quot;race a car&quot; \u8F93\u51FA: false</p></blockquote><p>\u8FD9\u4E2A\u9898\u7684\u5173\u952E\u70B9\u5728\u4E8E\u5224\u65AD\u5B57\u7B26\u4E32\uFF08\u957F\u5EA6\u4E3A<code>n</code>\uFF09\u7684\u7B2C<code>i</code>\u4E2A\u5B57\u7B26\u548C\u7B2C<code>(n - 1) - i</code>\u5B57\u7B26\u662F\u5426\u76F8\u7B49</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;1 2 3 4 3 2 1 &#39;  =&gt;  length -&gt; 7
 0 1 2 3 4 5 6
 str[0] == str[6]
 str[1] == str[5]
 str[2] == str[4]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="\u65B9\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00</h4><p>\u4F7F\u7528for\u5FAA\u73AF\u8FDB\u884C\u904D\u5386</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: \u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u662F\u56DE\u6587\u5B57\u7B26\u4E32
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">str</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^a-zA-Z0-9]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> str<span class="token punctuation">[</span>str<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="\u65B9\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C</h4><p>\u901A\u8FC7\u6570\u7EC4\u53CD\u8F6C\u5B57\u7B26\uFF0C\u7136\u540E\u518D\u548C\u539F\u5B57\u7B26\u4E32\u8FDB\u884C\u6BD4\u8F83</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: \u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u662F\u56DE\u6587\u5B57\u7B26\u4E32
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">str</span> 
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^a-zA-Z0-9]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> strReverse <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> str <span class="token operator">==</span> strReverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="\u65B9\u6CD5\u4E09" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E09" aria-hidden="true">#</a> \u65B9\u6CD5\u4E09</h4><p>\u53CC\u6307\u9488\u904D\u5386\uFF0C\u4ECE\u4E24\u8FB9\u5411\u4E2D\u95F4\u8FDB\u884C\u904D\u5386\u3002\u5176\u5B9E\u548C\u7B2C\u4E00\u79CD\u65B9\u6CD5\u4E2D\u7684for\u5FAA\u73AF\u4E2Dif\u8BED\u53E5\u7684\u5224\u65AD\u6761\u4EF6\u7C7B\u4F3C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^a-zA-Z0-9]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> lp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
        rp <span class="token operator">=</span> str<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>lp <span class="token operator">&lt;=</span> rp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8FD9\u91CClp\u518D\u8FDB\u884Cstr[lp]\u8FD0\u7B97,\u7136\u540E\u518D\u81EA\u589E</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>lp<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">!=</span> str<span class="token punctuation">[</span>rp<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,12);function g(h,f){const a=e("ExternalLinkIcon");return t(),o(l,null,[i,k,n("p",null,[n("a",b,[d,c(a)])]),m],64)}var w=p(u,[["render",g],["__file","interview30.html.vue"]]);export{w as default};
