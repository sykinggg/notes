import{_ as t,r as o,o as e,c,b as n,d as l,F as u,a as s,e as a}from"./app.41d9fe5b.js";const r={},k=s(`<h1 id="\u7B2C20\u5929-\u5199\u4E00\u4E2A\u9A8C\u8BC1\u8EAB\u4EFD\u8BC1\u53F7\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C20\u5929-\u5199\u4E00\u4E2A\u9A8C\u8BC1\u8EAB\u4EFD\u8BC1\u53F7\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u7B2C20\u5929 \u5199\u4E00\u4E2A\u9A8C\u8BC1\u8EAB\u4EFD\u8BC1\u53F7\u7684\u65B9\u6CD5</h1><h2 id="\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a> \u5206\u6790</h2><ul><li>\u8EAB\u4EFD\u8BC1\u53F7\u7801\u7684\u7EC4\u6210\uFF1A\u5730\u5740\u78016\u4F4D+\u5E74\u4EFD\u78014\u4F4D+\u6708\u4EFD\u78012\u4F4D+\u65E5\u671F\u78012\u4F4D+\u987A\u5E8F\u78013\u4F4D+\u6821\u9A8C\u78011\u4F4D</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> reg<span class="token operator">=</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[1-9]\\d{5}(19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|(10|20|30|31))\\d{3}[0-9Xx]$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
     <span class="token keyword">return</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u68C0\u6D4B\u7701\u4EFD\u7801</span>
<span class="token keyword">function</span> <span class="token function">checkProvice</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">var</span> patten<span class="token operator">=</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[1-9][0-9]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>patten<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">var</span> prov<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">11</span><span class="token operator">:</span><span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token operator">:</span><span class="token string">&quot;\u5929\u6D25&quot;</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token operator">:</span><span class="token string">&quot;\u6CB3\u5317&quot;</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token operator">:</span><span class="token string">&quot;\u5C71\u897F&quot;</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token operator">:</span><span class="token string">&quot;\u5185\u8499\u53E4&quot;</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token operator">:</span><span class="token string">&quot;\u8FBD\u5B81&quot;</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token operator">:</span><span class="token string">&quot;\u5409\u6797&quot;</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token operator">:</span><span class="token string">&quot;\u9ED1\u9F99\u6C5F&quot;</span><span class="token punctuation">,</span><span class="token number">31</span><span class="token operator">:</span><span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">,</span><span class="token number">32</span><span class="token operator">:</span><span class="token string">&quot;\u6C5F\u82CF&quot;</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token operator">:</span><span class="token string">&quot;\u6D59\u6C5F&quot;</span><span class="token punctuation">,</span><span class="token number">34</span><span class="token operator">:</span><span class="token string">&quot;\u5B89\u5FBD&quot;</span><span class="token punctuation">,</span><span class="token number">35</span><span class="token operator">:</span><span class="token string">&quot;\u798F\u5EFA&quot;</span><span class="token punctuation">,</span><span class="token number">36</span><span class="token operator">:</span><span class="token string">&quot;\u6C5F\u897F&quot;</span><span class="token punctuation">,</span><span class="token number">37</span><span class="token operator">:</span><span class="token string">&quot;\u5C71\u4E1C&quot;</span><span class="token punctuation">,</span><span class="token number">41</span><span class="token operator">:</span><span class="token string">&quot;\u6CB3\u5357&quot;</span><span class="token punctuation">,</span><span class="token number">42</span><span class="token operator">:</span><span class="token string">&quot;\u6E56\u5317&quot;</span><span class="token punctuation">,</span><span class="token number">43</span><span class="token operator">:</span><span class="token string">&quot;\u6E56\u5357&quot;</span><span class="token punctuation">,</span><span class="token number">44</span><span class="token operator">:</span><span class="token string">&quot;\u5E7F\u4E1C&quot;</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token operator">:</span><span class="token string">&quot;\u5E7F\u897F&quot;</span><span class="token punctuation">,</span><span class="token number">46</span><span class="token operator">:</span><span class="token string">&quot;\u6D77\u5357&quot;</span><span class="token punctuation">,</span><span class="token number">51</span><span class="token operator">:</span><span class="token string">&quot;\u56DB\u5DDD&quot;</span><span class="token punctuation">,</span><span class="token number">52</span><span class="token operator">:</span><span class="token string">&quot;\u8D35\u5DDE&quot;</span><span class="token punctuation">,</span><span class="token number">53</span><span class="token operator">:</span><span class="token string">&quot;\u4E91\u5357&quot;</span><span class="token punctuation">,</span><span class="token number">54</span><span class="token operator">:</span><span class="token string">&quot;\u897F\u85CF&quot;</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token operator">:</span><span class="token string">&quot;\u91CD\u5E86&quot;</span><span class="token punctuation">,</span><span class="token number">61</span><span class="token operator">:</span><span class="token string">&quot;\u9655\u897F&quot;</span><span class="token punctuation">,</span><span class="token number">62</span><span class="token operator">:</span><span class="token string">&quot;\u7518\u8083&quot;</span><span class="token punctuation">,</span><span class="token number">63</span><span class="token operator">:</span><span class="token string">&quot;\u9752\u6D77&quot;</span><span class="token punctuation">,</span><span class="token number">64</span><span class="token operator">:</span><span class="token string">&quot;\u5B81\u590F&quot;</span><span class="token punctuation">,</span><span class="token number">65</span><span class="token operator">:</span><span class="token string">&quot;\u65B0\u7586&quot;</span><span class="token punctuation">,</span><span class="token number">81</span><span class="token operator">:</span><span class="token string">&quot;\u9999\u6E2F&quot;</span><span class="token punctuation">,</span><span class="token number">82</span><span class="token operator">:</span><span class="token string">&quot;\u6FB3\u95E8&quot;</span><span class="token punctuation">,</span><span class="token number">83</span><span class="token operator">:</span><span class="token string">&quot;\u53F0\u6E7E&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>prov<span class="token punctuation">[</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


   <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// \u68C0\u6D4B\u51FA\u751F\u65E5\u671F</span>
<span class="token keyword">function</span> <span class="token function">checkBirthDay</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">var</span> patten<span class="token operator">=</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(19|20)\\d{2}((0[1-9])|1[0-2])(([0-2][1-9])|(10|20|30|31))</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>patten<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">var</span> year<span class="token operator">=</span>val<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> month<span class="token operator">=</span>val<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> day<span class="token operator">=</span>val<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         
        <span class="token keyword">var</span> date<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>year<span class="token operator">+</span><span class="token string">&quot;-&quot;</span><span class="token operator">+</span>month<span class="token operator">+</span><span class="token string">&quot;-&quot;</span><span class="token operator">+</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>date<span class="token operator">&amp;&amp;</span>date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>month<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u68C0\u6D4B\u6821\u9A8C\u7801</span>
<span class="token keyword">function</span> <span class="token function">checkVerifyCode</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">var</span> patten<span class="token operator">=</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[1-9]\\d{5}(19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|(10|20|30|31))\\d{3}[0-9X]$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ratio<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> codeArr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> code<span class="token operator">=</span>val<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>patten<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">var</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">17</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            sum<span class="token operator">+=</span>val<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">*</span>ratio<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>
        <span class="token keyword">var</span> remainder<span class="token operator">=</span>sum<span class="token operator">%</span><span class="token number">11</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>codeArr<span class="token punctuation">[</span>remainder<span class="token punctuation">]</span><span class="token operator">==</span>code<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">checkIndetityCardNo</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> province<span class="token operator">=</span>val<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">checkProvice</span><span class="token punctuation">(</span>province<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
         <span class="token keyword">var</span> date<span class="token operator">=</span>val<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">checkBirthDay</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">)</span>
         <span class="token punctuation">{</span> 
             <span class="token keyword">return</span> <span class="token function">checkVerifyCode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div><h2 id="\u6B63\u5219\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u5224\u65AD" aria-hidden="true">#</a> \u6B63\u5219\u5224\u65AD</h2><ol><li><p>\u7C97\u66B4\u578B: \u53EA\u8003\u8651\u4F4D\u6570\u3001\u6700\u540E\u7684 x \\d{17}[\\dXx]</p></li><li><p>\u4E00\u822C\u578B:</p></li></ol>`,7),i=n("li",null,[n("p",null,"\u524D 6 \u4F4D\u533A\u53F7 \\d{6}")],-1),b=n("li",null,[n("p",null,"\u4E2D\u95F4\u5E74\u4EFD \\d{4} \u53EF\u4EE5\u589E\u52A0\u5E74\u4EFD\u5224\u65AD")],-1),m=n("li",null,[n("p",null,"\u6708\u4EFD 01-12 \u6708 0[1-9]|1[0-2]")],-1),d=n("li",null,[n("p",null,"\u65E5\u671F 01-31 \u65E5 0[1-9]|[12][0-9]|3[01]")],-1),g=n("li",null,[n("p",null,"\u987A\u5E8F\u7801 \\d{3}")],-1),q=a("\u6821\u9A8C\u7801 [\\dXx] \u5176\u5B9E\u6709\u6821\u9A8C\u7B97\u6CD5\uFF0C\u53EF\u4EE5\u6839\u636E\u7B97\u6CD5\u518D\u505A\u4E00\u6B21\u68C0\u67E5 "),f={href:"https://zhuanlan.zhihu.com/p/21286417",target:"_blank",rel:"noopener noreferrer"},v=a("https://zhuanlan.zhihu.com/p/21286417"),y=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isValidIdentity</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\d{6}\\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])\\d{3}[\\dXx]$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValidIdentity</span><span class="token punctuation">(</span><span class="token string">&#39;123456789012345678&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValidIdentity</span><span class="token punctuation">(</span><span class="token string">&#39;123456190011301234&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValidIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;123456190013301234&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValidIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;123456190010321234&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValidIdentity</span><span class="token punctuation">(</span><span class="token string">&#39;12345619001130123x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValidIdentity</span><span class="token punctuation">(</span><span class="token string">&#39;12345619001130123X&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,1);function h(w,x){const p=o("ExternalLinkIcon");return e(),c(u,null,[k,n("ul",null,[i,b,m,d,g,n("li",null,[n("p",null,[q,n("a",f,[v,l(p)])])])]),y],64)}var V=t(r,[["render",h],["__file","interview20.html.vue"]]);export{V as default};
