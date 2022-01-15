import{a as n}from"./app.78b6d3a3.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="commitdeletion" tabindex="-1"><a class="header-anchor" href="#commitdeletion" aria-hidden="true">#</a> commitDeletion</h1><p><code>unmountHostComponents</code>\u662F\u4E00\u4E2A\u5927\u7684\u904D\u5386</p><p>\u6CE8\u610F\u8FD9\u91CC\u53EA\u4F1A\u5BF9\u975E<code>HostComponent</code>\u7684\u8282\u70B9\u67E5\u627E\u5B50\u6811\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostPortal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  currentParent <span class="token operator">=</span> node<span class="token punctuation">.</span>stateNode<span class="token punctuation">.</span>containerInfo<span class="token punctuation">;</span>
  currentParentIsContainer <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token comment">// Visit children because portals might contain host components.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>child<span class="token punctuation">.</span>return <span class="token operator">=</span> node<span class="token punctuation">;</span>
    node <span class="token operator">=</span> node<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
    <span class="token keyword">continue</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">commitUnmount</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Visit children because we may find more host components below.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>child<span class="token punctuation">.</span>return <span class="token operator">=</span> node<span class="token punctuation">;</span>
    node <span class="token operator">=</span> node<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
    <span class="token keyword">continue</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u5BF9\u4E8E<code>HostComponent</code>\u53EA\u4F1A\u627E\u5144\u5F1F\u8282\u70B9\uFF0C\u800C\u4ED6\u7684\u904D\u5386\u653E\u5728\u4E86<code>commitNestedUnmounts</code>\u3002\u6CE8\u610F\u8FD9\u662F\u4E00\u4E2A\u9012\u5F52\u7684\u8FC7\u7A0B\uFF0C\u5728<code>commitNestedUnmounts</code>\u4F1A\u5BF9\u6BCF\u4E2A\u5B50\u8282\u70B9\u8C03\u7528<code>commitUnmount</code>\uFF0C\u5185\u90E8\u4F1A\u5BF9<code>HostPortal</code>\u7C7B\u578B\u9012\u5F52\u8C03\u7528<code>unmountHostComponents</code>\u3002\u540C\u6837\u7684\u5728\u8FD9\u91CC\u4E5F\u4F1A\u8C03\u7528<code>commitUnmount</code>\uFF0C\u6240\u4EE5\u4E5F\u4F1A\u9012\u5F52\u3002</p><p>\u8FD9\u91CC\u771F\u6B63\u9700\u8981\u4ECE DOM \u4E2D\u5220\u9664\u7684\u53EA\u6709<code>HostComponent</code>\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u65B9\u6CD5\u7684\u4E3B\u903B\u8F91\u662F\u627E\u5230<code>HostComponent</code>\u5E76\u6839\u636E\u7236\u8282\u70B9\u7684\u7C7B\u578B\u6267\u884C\u4E0D\u540C\u7684\u5220\u9664\u64CD\u4F5C\u3002</p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitDeletion</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>supportsMutation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">unmountHostComponents</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">commitNestedUnmounts</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">detachFiber</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">unmountHostComponents</span><span class="token punctuation">(</span><span class="token parameter">current</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token literal-property property">node</span><span class="token operator">:</span> Fiber <span class="token operator">=</span> current

  <span class="token keyword">let</span> currentParentIsValid <span class="token operator">=</span> <span class="token boolean">false</span>

  <span class="token comment">// Note: these two variables *must* always be updated together.</span>
  <span class="token keyword">let</span> currentParent
  <span class="token keyword">let</span> currentParentIsContainer

  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>currentParentIsValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> parent <span class="token operator">=</span> node<span class="token punctuation">.</span>return
      <span class="token literal-property property">findParent</span><span class="token operator">:</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">invariant</span><span class="token punctuation">(</span>
          parent <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
          <span class="token string">&#39;Expected to find a host parent. This error is likely caused by &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;a bug in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>parent<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
            currentParent <span class="token operator">=</span> parent<span class="token punctuation">.</span>stateNode
            currentParentIsContainer <span class="token operator">=</span> <span class="token boolean">false</span>
            <span class="token keyword">break</span> findParent
          <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span>
            currentParent <span class="token operator">=</span> parent<span class="token punctuation">.</span>stateNode<span class="token punctuation">.</span>containerInfo
            currentParentIsContainer <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token keyword">break</span> findParent
          <span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span>
            currentParent <span class="token operator">=</span> parent<span class="token punctuation">.</span>stateNode<span class="token punctuation">.</span>containerInfo
            currentParentIsContainer <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token keyword">break</span> findParent
        <span class="token punctuation">}</span>
        parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>return
      <span class="token punctuation">}</span>
      currentParentIsValid <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostComponent <span class="token operator">||</span> node<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostText<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">commitNestedUnmounts</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentParentIsContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">removeChildFromContainer</span><span class="token punctuation">(</span><span class="token punctuation">(</span>currentParent<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>stateNode<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token punctuation">(</span>currentParent<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>stateNode<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// Don&#39;t visit children because we already visited them.</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostPortal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentParent <span class="token operator">=</span> node<span class="token punctuation">.</span>stateNode<span class="token punctuation">.</span>containerInfo
      currentParentIsContainer <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token comment">// Visit children because portals might contain host components.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>child<span class="token punctuation">.</span>return <span class="token operator">=</span> node
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>child
        <span class="token keyword">continue</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">commitUnmount</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
      <span class="token comment">// Visit children because we may find more host components below.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>child<span class="token punctuation">.</span>return <span class="token operator">=</span> node
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>child
        <span class="token keyword">continue</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>sibling <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>return <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> node<span class="token punctuation">.</span>return <span class="token operator">===</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>return
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostPortal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentParentIsValid <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    node<span class="token punctuation">.</span>sibling<span class="token punctuation">.</span>return <span class="token operator">=</span> node<span class="token punctuation">.</span>return
    node <span class="token operator">=</span> node<span class="token punctuation">.</span>sibling
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div><h1 id="commitnestedunmounts" tabindex="-1"><a class="header-anchor" href="#commitnestedunmounts" aria-hidden="true">#</a> commitNestedUnmounts</h1><p>\u8FD9\u4E2A\u65B9\u6CD5\u662F\u5728\u53D1\u73B0\u9700\u8981\u5220\u9664\u7684\u8282\u70B9\u662F<code>HostComponent</code>\u7684\u65F6\u5019\u8C03\u7528\u7684</p><p>\u904D\u5386\u5B50\u6811\uFF0C\u5BF9\u6BCF\u4E2A\u8282\u70B9\u8C03\u7528<code>commitUnmount</code>\uFF0C\u904D\u5386\u8FC7\u7A0B\u8DDF<code>workLoop</code>\u5DEE\u4E0D\u591A\uFF0C\u9075\u5FAA\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u89C4\u5219</p><p>\u5728\u8FD9\u4E2A\u904D\u5386\u8FC7\u7A0B\u4E2D\uFF0C\u56E0\u4E3A\u5BF9\u4E8E\u6BCF\u4E2A\u8282\u70B9\u90FD\u4F1A\u8C03\u7528<code>commitUnmount</code>\uFF0C\u6240\u4EE5\u5982\u679C\u53D1\u73B0\u6709<code>portal</code>\u8282\u70B9\uFF0C\u5219\u4F1A\u9012\u5F52\u8C03\u7528<code>unmountHostComponents</code></p><blockquote><p>\u6E90\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitNestedUnmounts</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token literal-property property">node</span><span class="token operator">:</span> Fiber <span class="token operator">=</span> root
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">commitUnmount</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>child <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>supportsMutation <span class="token operator">||</span> node<span class="token punctuation">.</span>tag <span class="token operator">!==</span> HostPortal<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node<span class="token punctuation">.</span>child<span class="token punctuation">.</span>return <span class="token operator">=</span> node
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>child
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>sibling <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>return <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> node<span class="token punctuation">.</span>return <span class="token operator">===</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>return
    <span class="token punctuation">}</span>
    node<span class="token punctuation">.</span>sibling<span class="token punctuation">.</span>return <span class="token operator">=</span> node<span class="token punctuation">.</span>return
    node <span class="token operator">=</span> node<span class="token punctuation">.</span>sibling
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h1 id="commitunmount" tabindex="-1"><a class="header-anchor" href="#commitunmount" aria-hidden="true">#</a> commitUnmount</h1><p>\u8FD9\u4E2A\u65B9\u6CD5\u662F\u771F\u6B63\u7684\u5BF9\u6BCF\u4E2A\u8282\u70B9\u6267\u884C\u5220\u9664\u524D\u7684\u64CD\u4F5C\u7684\uFF0C\u5BF9\u4E8E</p><p><strong><code>HostComponent</code></strong></p><p>\u5982\u679C\u6709<code>ref</code>\u5219\u8981\u5378\u8F7D</p><p><strong><code>ClassComponent</code></strong></p><p>\u5982\u679C\u6709<code>ref</code>\u5219\u8981\u5378\u8F7D</p><p>\u5982\u679C\u6709<code>componentWillUnmount</code>\u751F\u547D\u5468\u671F\u65B9\u6CD5\uFF0C\u5219\u8C03\u7528\u4E4B</p><p><strong><code>HostPortal</code></strong></p><p>\u7EE7\u7EED\u8C03\u7528<code>unmountHostComponents</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitUnmount</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token function">onCommitUnmount</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>

  <span class="token keyword">switch</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">safelyDetachRef</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>
      <span class="token keyword">const</span> instance <span class="token operator">=</span> current<span class="token punctuation">.</span>stateNode
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> instance<span class="token punctuation">.</span>componentWillUnmount <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">safelyCallComponentWillUnmount</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">safelyDetachRef</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>supportsMutation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">unmountHostComponents</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>supportsPersistence<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">emptyPortalContainer</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,25);function t(e,o){return p}var r=s(a,[["render",t]]);export{r as default};
