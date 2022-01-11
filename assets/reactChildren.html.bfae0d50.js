import{a as n}from"./app.2f6bbef8.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="reactchildren" tabindex="-1"><a class="header-anchor" href="#reactchildren" aria-hidden="true">#</a> <strong>ReactChildren</strong></h2><hr><blockquote><p><code>React.Children</code>\u4E2D<code>map</code>\u548C<code>forEach</code>\uFF0C\u5C31\u6309\u7167<code>map</code>\u7684\u6D41\u7A0B\u6765\u770B\u4E00\u4E0B\uFF0C<code>forEach</code>\u5176\u5B9E\u5DEE\u4E0D\u591A\uFF0C\u53EA\u662F\u6CA1\u6709\u8FD4\u56DE\u65B0\u7684\u8282\u70B9\u3002</p></blockquote><p>\u5148\u6765\u770B\u4E00\u4E0B\u6D41\u7A0B\u56FE\uFF1A</p><p><img src="https://pozvqg.dm.files.1drv.com/y4mmeXuR-FkgNj-8c2xEInueibhFoYSEdG7un9nWggJFV1nYGsjb6S8m0D776nWAyuXHwKz1kCVMelh96STs4RYe9EVppRjlQyiu7jwrPqH9iM-cR4YPS7UbJkFTZHg62yMg6k8n_c-DMQOoEzZhvmCdR8LAEPFY4JQvypWYj3LF1EpeR5zp6OIfkPOk3qei4Qwz903Q9lxtWpavsva6TceyQ?width=768&amp;height=1152&amp;cropmode=none" alt="React.Children \u6D41\u7A0B\u56FE"></p><p>\u5F53\u7136\u8FD9\u4E48\u770B\u80AF\u5B9A\u4E91\u91CC\u96FE\u91CC\uFF0C\u63A5\u4E0B\u53BB\u4F1A\u5BF9\u5404\u4E2A\u51FD\u6570\u8FDB\u884C\u8BB2\u89E3\uFF0C\u7136\u540E\u518D\u56DE\u8FC7\u5934\u6765\u914D\u5408\u56FE\u7247\u89C2\u770B\u66F4\u597D\u7406\u89E3\u3002</p><h2 id="\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a> <strong>\u5F00\u59CB</strong></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mapChildren</span><span class="token punctuation">(</span><span class="token parameter">children<span class="token punctuation">,</span> func<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>children <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> children
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token function">mapIntoWithKeyPrefixInternal</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> result<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> func<span class="token punctuation">,</span> context<span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">mapIntoWithKeyPrefixInternal</span><span class="token punctuation">(</span><span class="token parameter">children<span class="token punctuation">,</span> array<span class="token punctuation">,</span> prefix<span class="token punctuation">,</span> func<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> escapedPrefix <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prefix <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        escapedPrefix <span class="token operator">=</span> <span class="token function">escapeUserProvidedKey</span><span class="token punctuation">(</span>prefix<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> traverseContext <span class="token operator">=</span> <span class="token function">getPooledTraverseContext</span><span class="token punctuation">(</span>
        array<span class="token punctuation">,</span>
        escapedPrefix<span class="token punctuation">,</span>
        func<span class="token punctuation">,</span>
        context<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token function">traverseAllChildren</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> mapSingleChildIntoContext<span class="token punctuation">,</span> traverseContext<span class="token punctuation">)</span>
    <span class="token function">releaseTraverseContext</span><span class="token punctuation">(</span>traverseContext<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p><code>map</code>\u548C<code>forEach</code>\u7684\u6700\u5927\u533A\u522B\u5C31\u662F\u6709\u6CA1\u6709<code>return result</code>\u3002</p><p><code>getPooledTraverseContext</code>\u5C31\u662F\u4ECE<code>pool</code>\u91CC\u9762\u627E\u4E00\u4E2A\u5BF9\u8C61\uFF0C<code>releaseTraverseContext</code>\u4F1A\u628A\u5F53\u524D\u7684<code>context</code>\u5BF9\u8C61\u6E05\u7A7A\u7136\u540E\u653E\u56DE\u5230<code>pool</code>\u4E2D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">POOL_SIZE</span> <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">const</span> traverseContextPool <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">function</span> <span class="token function">getPooledTraverseContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// args</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>traverseContextPool<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> traverseContext <span class="token operator">=</span> traverseContextPool<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// set attrs</span>
        <span class="token keyword">return</span> traverseContext
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">/* attrs */</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">releaseTraverseContext</span><span class="token punctuation">(</span><span class="token parameter">traverseContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// clear attrs</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>traverseContextPool<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token constant">POOL_SIZE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        traverseContextPool<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>traverseContext<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u90A3\u4E48\u6309\u7167\u8FD9\u4E2A\u6D41\u7A0B\u6765\u770B\uFF0C\u662F\u4E0D\u662F<code>pool</code>\u6C38\u8FDC\u90FD\u53EA\u6709\u4E00\u4E2A\u503C\u5462\uFF0C\u6BD5\u7ADF\u63A8\u51FA\u4E4B\u540E\u64CD\u4F5C\u5B8C\u4E86\u5C31\u63A8\u5165\u4E86\uFF0C\u8FD9\u4E48\u5FAA\u73AF\u7740\u3002\u7B54\u6848\u80AF\u5B9A\u662F\u5426\u7684\uFF0C\u8FD9\u5C31\u8981\u8BB2\u5230<code>React.Children.map</code>\u7684\u4E00\u4E2A\u7279\u6027\u4E86\uFF0C\u90A3\u5C31\u662F\u5BF9\u6BCF\u4E2A\u8282\u70B9\u7684<code>map</code>\u8FD4\u56DE\u7684\u5982\u679C\u662F\u6570\u7EC4\uFF0C\u90A3\u4E48\u8FD8\u4F1A\u7EE7\u7EED\u5C55\u5F00\uFF0C\u8FD9\u662F\u4E00\u4E2A\u9012\u5F52\u7684\u8FC7\u7A0B\u3002\u63A5\u4E0B\u53BB\u5C31\u6765\u770B\u770B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">traverseAllChildren</span><span class="token punctuation">(</span><span class="token parameter">children<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> traverseContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>children <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">traverseAllChildrenImpl</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> callback<span class="token punctuation">,</span> traverseContext<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">traverseAllChildrenImpl</span><span class="token punctuation">(</span>
    <span class="token parameter">children<span class="token punctuation">,</span>
    nameSoFar<span class="token punctuation">,</span>
    callback<span class="token punctuation">,</span>
    traverseContext<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> children

    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">||</span> type <span class="token operator">===</span> <span class="token string">&#39;boolean&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        children <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> invokeCallback <span class="token operator">=</span> <span class="token boolean">false</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>children <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        invokeCallback <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;string&#39;</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token string">&#39;number&#39;</span><span class="token operator">:</span>
            invokeCallback <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token string">&#39;object&#39;</span><span class="token operator">:</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>children<span class="token punctuation">.</span>$$<span class="token keyword">typeof</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token constant">REACT_ELEMENT_TYPE</span><span class="token operator">:</span>
            <span class="token keyword">case</span> <span class="token constant">REACT_PORTAL_TYPE</span><span class="token operator">:</span>
                invokeCallback <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>invokeCallback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span>
        traverseContext<span class="token punctuation">,</span>
        children<span class="token punctuation">,</span>
        nameSoFar <span class="token operator">===</span> <span class="token string">&#39;&#39;</span> <span class="token operator">?</span> <span class="token constant">SEPARATOR</span> <span class="token operator">+</span> <span class="token function">getComponentKey</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">:</span> nameSoFar<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> child
    <span class="token keyword">let</span> nextName
    <span class="token keyword">let</span> subtreeCount <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// Count of children found in the current subtree.</span>
    <span class="token keyword">const</span> nextNamePrefix <span class="token operator">=</span> nameSoFar <span class="token operator">===</span> <span class="token string">&#39;&#39;</span> <span class="token operator">?</span> <span class="token constant">SEPARATOR</span> <span class="token operator">:</span> nameSoFar <span class="token operator">+</span> <span class="token constant">SUBSEPARATOR</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            child <span class="token operator">=</span> children<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            nextName <span class="token operator">=</span> nextNamePrefix <span class="token operator">+</span> <span class="token function">getComponentKey</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
            subtreeCount <span class="token operator">+=</span> <span class="token function">traverseAllChildrenImpl</span><span class="token punctuation">(</span>
                child<span class="token punctuation">,</span>
                nextName<span class="token punctuation">,</span>
                callback<span class="token punctuation">,</span>
                traverseContext<span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> iteratorFn <span class="token operator">=</span> <span class="token function">getIteratorFn</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> iteratorFn <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// iterator\uFF0C\u548Carray\u5DEE\u4E0D\u591A</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u63D0\u9192\u4E0D\u6B63\u786E\u7684children\u7C7B\u578B</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> subtreeCount
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><p>\u8FD9\u91CC\u5C31\u662F\u4E00\u5C42\u9012\u5F52\u4E86\uFF0C\u5BF9\u4E8E\u53EF\u5FAA\u73AF\u7684<code>children</code>\uFF0C\u90FD\u4F1A\u91CD\u590D\u8C03\u7528<code>traverseAllChildrenImpl</code>\uFF0C\u76F4\u5230\u662F\u4E00\u4E2A\u8282\u70B9\u7684\u60C5\u51B5\uFF0C\u7136\u540E\u8C03\u7528<code>callback</code>\uFF0C\u4E5F\u5C31\u662F<code>mapSingleChildIntoContext</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mapSingleChildIntoContext</span><span class="token punctuation">(</span><span class="token parameter">bookKeeping<span class="token punctuation">,</span> child<span class="token punctuation">,</span> childKey</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> result<span class="token punctuation">,</span> keyPrefix<span class="token punctuation">,</span> func<span class="token punctuation">,</span> context <span class="token punctuation">}</span> <span class="token operator">=</span> bookKeeping

    <span class="token keyword">let</span> mappedChild <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> child<span class="token punctuation">,</span> bookKeeping<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>mappedChild<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">mapIntoWithKeyPrefixInternal</span><span class="token punctuation">(</span>mappedChild<span class="token punctuation">,</span> result<span class="token punctuation">,</span> childKey<span class="token punctuation">,</span> <span class="token parameter">c</span> <span class="token operator">=&gt;</span> c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>mappedChild <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isValidElement</span><span class="token punctuation">(</span>mappedChild<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mappedChild <span class="token operator">=</span> <span class="token function">cloneAndReplaceKey</span><span class="token punctuation">(</span>
                mappedChild<span class="token punctuation">,</span>
                keyPrefix <span class="token operator">+</span>
                <span class="token punctuation">(</span>mappedChild<span class="token punctuation">.</span>key <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>child <span class="token operator">||</span> child<span class="token punctuation">.</span>key <span class="token operator">!==</span> mappedChild<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
                    <span class="token operator">?</span> <span class="token function">escapeUserProvidedKey</span><span class="token punctuation">(</span>mappedChild<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span>
                    <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span>
                childKey<span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>mappedChild<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><code>mapSingleChildIntoContext</code>\u8FD9\u4E2A\u65B9\u6CD5\u5176\u5B9E\u5C31\u662F\u8C03\u7528<code>React.Children.map(children, callback)</code>\u8FD9\u91CC\u7684<code>callback</code>\uFF0C\u5C31\u662F\u4F20\u5165\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5E76\u5F97\u5230<code>map</code>\u4E4B\u540E\u7684\u7ED3\u679C\u3002\u6CE8\u610F\u91CD\u70B9\u6765\u4E86\uFF0C<strong>\u5982\u679Cmap\u4E4B\u540E\u7684\u8282\u70B9\u8FD8\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u90A3\u4E48\u518D\u6B21\u8FDB\u5165<code>mapIntoWithKeyPrefixInternal</code>\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u65F6\u5019\u5C31\u4F1A\u518D\u6B21\u4ECE<code>pool</code>\u91CC\u9762\u53BB<code>context</code>\u4E86\uFF0C\u800C<code>pool</code>\u7684\u610F\u4E49\u5927\u6982\u4E5F\u5C31\u662F\u5728\u8FD9\u91CC\u4E86\uFF0C\u5982\u679C\u5FAA\u73AF\u5D4C\u5957\u591A\u4E86\uFF0C\u53EF\u4EE5\u51CF\u5C11\u5F88\u591A\u5BF9\u8C61\u521B\u5EFA\u548C<code>gc</code>\u7684\u635F\u8017\u3002</strong></p><p>\u800C\u5982\u679C\u4E0D\u662F\u6570\u7EC4\u5E76\u4E14\u662F\u4E00\u4E2A\u5408\u89C4\u7684<code>ReactElement</code>\uFF0C\u5C31\u89E6\u8FBE\u9876\u70B9\u4E86\uFF0C\u66FF\u6362\u4E00\u4E0B<code>key</code>\u5C31\u63A8\u5165<code>result</code>\u4E86\u3002</p><p>React \u8FD9\u4E48\u5B9E\u73B0\u4E3B\u8981\u662F\u4E24\u4E2A\u76EE\u7684\uFF1A</p><ol><li><p>\u62C6\u5206<code>map</code>\u51FA\u6765\u7684\u6570\u7EC4</p></li><li><p>\u56E0\u4E3A\u5BF9<code>Children</code>\u7684\u5904\u7406\u4E00\u822C\u5728<code>render</code>\u91CC\u9762\uFF0C\u6240\u4EE5\u4F1A\u6BD4\u8F83\u9891\u7E41\uFF0C\u6240\u4EE5\u8BBE\u7F6E\u4E00\u4E2A<code>pool</code>\u51CF\u5C11\u58F0\u660E\u548C<code>gc</code>\u7684\u5F00\u9500</p></li></ol>`,19);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
