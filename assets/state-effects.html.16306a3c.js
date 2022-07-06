import{_ as l,r as c,o as r,c as i,b as n,d as a,w as p,F as u,a as o,e as s}from"./app.adb48220.js";const d={},k=o('<h1 id="\u72B6\u6001\u4E0E\u526F\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u4E0E\u526F\u4F5C\u7528" aria-hidden="true">#</a> \u72B6\u6001\u4E0E\u526F\u4F5C\u7528</h1><p>\u5728\u524D\u6587\u6211\u4EEC\u5DF2\u7ECF\u5206\u6790\u4E86<code>fiber\u6811</code>\u4ECE<code>\u6784\u9020</code>\u5230<code>\u6E32\u67D3</code>\u7684\u5173\u952E\u8FC7\u7A0B. \u672C\u8282\u6211\u4EEC\u7AD9\u5728<code>fiber</code>\u5BF9\u8C61\u7684\u89C6\u89D2, \u8003\u8651\u4E00\u4E2A\u5177\u4F53\u7684<code>fiber</code>\u8282\u70B9\u5982\u4F55\u5F71\u54CD\u6700\u7EC8\u7684\u6E32\u67D3.</p>',2),b=s("\u56DE\u987E"),_={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactInternalTypes.js#L47-L174",target:"_blank",rel:"noopener noreferrer"},m=s("fiber \u6570\u636E\u7ED3\u6784"),h=s(", \u5E76\u7ED3\u5408\u524D\u6587"),f=n("code",null,"fiber\u6811\u6784\u9020",-1),g=s("\u7CFB\u5217\u7684\u89E3\u8BFB, \u6211\u4EEC\u6CE8\u610F\u5230"),y=n("code",null,"fiber",-1),v=s("\u4F17\u591A\u5C5E\u6027\u4E2D, \u6709 2 \u7C7B\u5C5E\u6027\u5341\u5206\u5173\u952E:"),E=o(`<ol><li><p><code>fiber</code>\u8282\u70B9\u7684\u81EA\u8EAB\u72B6\u6001: \u5728<code>renderRootSync[Concurrent]</code>\u9636\u6BB5, \u4E3A\u5B50\u8282\u70B9\u63D0\u4F9B\u786E\u5B9A\u7684\u8F93\u5165\u6570\u636E, \u76F4\u63A5\u5F71\u54CD\u5B50\u8282\u70B9\u7684\u751F\u6210.</p></li><li><p><code>fiber</code>\u8282\u70B9\u7684\u526F\u4F5C\u7528: \u5728<code>commitRoot</code>\u9636\u6BB5, \u5982\u679C<code>fiber</code>\u88AB\u6807\u8BB0\u6709\u526F\u4F5C\u7528, \u5219\u526F\u4F5C\u7528\u76F8\u5173\u51FD\u6570\u4F1A\u88AB(\u540C\u6B65/\u5F02\u6B65)\u8C03\u7528.</p></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> type Fiber <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">|</span>
  <span class="token comment">// 1. fiber\u8282\u70B9\u81EA\u8EAB\u72B6\u6001\u76F8\u5173</span>
  <span class="token literal-property property">pendingProps</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">memoizedProps</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">updateQueue</span><span class="token operator">:</span> mixed<span class="token punctuation">,</span>
  <span class="token literal-property property">memoizedState</span><span class="token operator">:</span> any<span class="token punctuation">,</span>

  <span class="token comment">// 2. fiber\u8282\u70B9\u526F\u4F5C\u7528(Effect)\u76F8\u5173</span>
  <span class="token literal-property property">flags</span><span class="token operator">:</span> Flags<span class="token punctuation">,</span>
  <span class="token literal-property property">subtreeFlags</span><span class="token operator">:</span> Flags<span class="token punctuation">,</span> <span class="token comment">// v17.0.2\u672A\u542F\u7528</span>
  <span class="token literal-property property">deletions</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>Fiber<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// v17.0.2\u672A\u542F\u7528</span>
  <span class="token literal-property property">nextEffect</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">firstEffect</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastEffect</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token operator">|</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001" aria-hidden="true">#</a> \u72B6\u6001</h2><p>\u4E0E<code>\u72B6\u6001</code>\u76F8\u5173\u6709 4 \u4E2A\u5C5E\u6027:</p><ol><li><code>fiber.pendingProps</code>: \u8F93\u5165\u5C5E\u6027, \u4ECE<code>ReactElement</code>\u5BF9\u8C61\u4F20\u5165\u7684 props. \u5B83\u548C<code>fiber.memoizedProps</code>\u6BD4\u8F83\u53EF\u4EE5\u5F97\u51FA\u5C5E\u6027\u662F\u5426\u53D8\u52A8.</li><li><code>fiber.memoizedProps</code>: \u4E0A\u4E00\u6B21\u751F\u6210\u5B50\u8282\u70B9\u65F6\u7528\u5230\u7684\u5C5E\u6027, \u751F\u6210\u5B50\u8282\u70B9\u4E4B\u540E\u4FDD\u6301\u5728\u5185\u5B58\u4E2D. \u5411\u4E0B\u751F\u6210\u5B50\u8282\u70B9\u4E4B\u524D\u53EB\u505A<code>pendingProps</code>, \u751F\u6210\u5B50\u8282\u70B9\u4E4B\u540E\u4F1A\u628A<code>pendingProps</code>\u8D4B\u503C\u7ED9<code>memoizedProps</code>\u7528\u4E8E\u4E0B\u4E00\u6B21\u6BD4\u8F83.<code>pendingProps</code>\u548C<code>memoizedProps</code>\u6BD4\u8F83\u53EF\u4EE5\u5F97\u51FA\u5C5E\u6027\u662F\u5426\u53D8\u52A8.</li><li><code>fiber.updateQueue</code>: \u5B58\u50A8<code>update\u66F4\u65B0\u5BF9\u8C61</code>\u7684\u961F\u5217, \u6BCF\u4E00\u6B21\u53D1\u8D77\u66F4\u65B0, \u90FD\u9700\u8981\u5728\u8BE5\u961F\u5217\u4E0A\u521B\u5EFA\u4E00\u4E2A<code>update\u5BF9\u8C61</code>.</li><li><code>fiber.memoizedState</code>: \u4E0A\u4E00\u6B21\u751F\u6210\u5B50\u8282\u70B9\u4E4B\u540E\u4FDD\u6301\u5728\u5185\u5B58\u4E2D\u7684\u5C40\u90E8\u72B6\u6001.</li></ol><p>\u5B83\u4EEC\u7684\u4F5C\u7528\u53EA\u5C40\u9650\u4E8E<code>fiber\u6811\u6784\u9020</code>\u9636\u6BB5, \u76F4\u63A5\u5F71\u54CD\u5B50\u8282\u70B9\u7684\u751F\u6210.</p><h2 id="\u526F\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u526F\u4F5C\u7528" aria-hidden="true">#</a> \u526F\u4F5C\u7528</h2><p>\u4E0E<code>\u526F\u4F5C\u7528</code>\u76F8\u5173\u6709 4 \u4E2A\u5C5E\u6027:</p>`,8),L=n("code",null,"fiber.flags",-1),F=s(": \u6807\u5FD7\u4F4D, \u8868\u660E\u8BE5"),R=n("code",null,"fiber",-1),x=s("\u8282\u70B9\u6709\u526F\u4F5C\u7528(\u5728 v17.0.2 \u4E2D\u5171\u5B9A\u4E49\u4E86"),S={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberFlags.js#L13",target:"_blank",rel:"noopener noreferrer"},w=s("28 \u79CD\u526F\u4F5C\u7528"),C=s(")."),j=o("<li><code>fiber.nextEffect</code>: \u5355\u5411\u94FE\u8868, \u6307\u5411\u4E0B\u4E00\u4E2A\u526F\u4F5C\u7528 <code>fiber</code>\u8282\u70B9.</li><li><code>fiber.firstEffect</code>: \u5355\u5411\u94FE\u8868, \u6307\u5411\u7B2C\u4E00\u4E2A\u526F\u4F5C\u7528 <code>fiber</code> \u8282\u70B9.</li><li><code>fiber.lastEffect</code>: \u5355\u5411\u94FE\u8868, \u6307\u5411\u6700\u540E\u4E00\u4E2A\u526F\u4F5C\u7528 <code>fiber</code> \u8282\u70B9.</li>",3),P=s("\u901A\u8FC7\u524D\u6587"),D=n("code",null,"fiber\u6811\u6784\u9020",-1),U=s("\u6211\u4EEC\u77E5\u9053, \u5355\u4E2A"),B=n("code",null,"fiber",-1),M=s("\u8282\u70B9\u7684\u526F\u4F5C\u7528\u961F\u5217\u6700\u540E\u90FD\u4F1A\u4E0A\u79FB\u5230\u6839\u8282\u70B9\u4E0A. \u6240\u4EE5\u5728"),H=n("code",null,"commitRoot",-1),z=s("\u9636\u6BB5\u4E2D, "),O=n("code",null,"react",-1),W=s("\u63D0\u4F9B\u4E86 3 \u79CD\u5904\u7406\u526F\u4F5C\u7528\u7684\u65B9\u5F0F(\u8BE6\u89C1"),A=s("fiber \u6811\u6E32\u67D3"),N=s(")."),V=o(`<p>\u53E6\u5916, <code>\u526F\u4F5C\u7528</code>\u7684\u8BBE\u8BA1\u53EF\u4EE5\u7406\u89E3\u4E3A\u5BF9<code>\u72B6\u6001</code>\u529F\u80FD\u4E0D\u8DB3\u7684\u8865\u5145.</p><ul><li><code>\u72B6\u6001</code>\u662F\u4E00\u4E2A<code>\u9759\u6001</code>\u7684\u529F\u80FD, \u5B83\u53EA\u80FD\u4E3A\u5B50\u8282\u70B9\u63D0\u4F9B\u6570\u636E\u6E90.</li><li>\u800C<code>\u526F\u4F5C\u7528</code>\u662F\u4E00\u4E2A<code>\u52A8\u6001</code>\u529F\u80FD, \u7531\u4E8E\u5B83\u7684\u8C03\u7528\u65F6\u673A\u662F\u5728<code>fiber\u6811\u6E32\u67D3\u9636\u6BB5</code>, \u6545\u5B83\u62E5\u6709\u66F4\u591A\u7684\u80FD\u529B, \u80FD\u8F7B\u677E\u83B7\u53D6<code>\u7A81\u53D8\u524D\u5FEB\u7167, \u7A81\u53D8\u540E\u7684DOM\u8282\u70B9\u7B49</code>. \u751A\u81F3\u901A\u8FC7<code>\u8C03\u7528api</code>\u53D1\u8D77\u65B0\u7684\u4E00\u8F6E<code>fiber\u6811\u6784\u9020</code>, \u8FDB\u800C\u6539\u53D8\u66F4\u591A\u7684<code>\u72B6\u6001</code>, \u5F15\u53D1\u66F4\u591A\u7684<code>\u526F\u4F5C\u7528</code>.</li></ul><h2 id="\u5916\u90E8-api" tabindex="-1"><a class="header-anchor" href="#\u5916\u90E8-api" aria-hidden="true">#</a> \u5916\u90E8 api</h2><p><code>fiber</code>\u5BF9\u8C61\u7684\u8FD9 2 \u7C7B\u5C5E\u6027, \u53EF\u4EE5\u5F71\u54CD\u5230\u6E32\u67D3\u7ED3\u679C, \u4F46\u662F<code>fiber</code>\u7ED3\u6784\u59CB\u7EC8\u662F\u4E00\u4E2A\u5185\u6838\u4E2D\u7684\u7ED3\u6784, \u5BF9\u4E8E\u5916\u90E8\u6765\u8BB2\u662F\u65E0\u611F\u77E5\u7684, \u5BF9\u4E8E\u8C03\u7528\u65B9\u6765\u8BB2, \u751A\u81F3\u90FD\u65E0\u9700\u77E5\u9053<code>fiber</code>\u7ED3\u6784\u7684\u5B58\u5728. \u6240\u4EE5\u6B63\u5E38\u53EA\u6709\u901A\u8FC7\u66B4\u9732<code>api</code>\u6765\u76F4\u63A5\u6216\u95F4\u63A5\u7684\u4FEE\u6539\u8FD9 2 \u7C7B\u5C5E\u6027.</p><p>\u4ECE<code>react</code>\u5305\u66B4\u9732\u51FA\u7684<code>api</code>\u6765\u5F52\u7EB3, \u53EA\u6709 2 \u7C7B\u7EC4\u4EF6\u652F\u6301\u4FEE\u6539:</p><blockquote><p>\u672C\u8282\u53EA\u8BA8\u8BBA\u4F7F\u7528<code>api</code>\u7684\u76EE\u7684\u662F\u4FEE\u6539<code>fiber</code>\u7684<code>\u72B6\u6001</code>\u548C<code>\u526F\u4F5C\u7528</code>, \u8FDB\u800C\u53EF\u4EE5\u6539\u53D8\u6574\u4E2A\u6E32\u67D3\u7ED3\u679C. \u672C\u8282\u5148\u4ECB\u7ECD api \u4E0E<code>\u72B6\u6001</code>\u548C<code>\u526F\u4F5C\u7528</code>\u7684\u8054\u7CFB, \u6709\u5173<code>api</code>\u7684\u5177\u4F53\u5B9E\u73B0\u4F1A\u5728<code>class\u7EC4\u4EF6</code>,<code>Hook\u539F\u7406</code>\u7AE0\u8282\u4E2D\u8BE6\u7EC6\u5206\u6790.</p></blockquote><h3 id="class-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#class-\u7EC4\u4EF6" aria-hidden="true">#</a> class \u7EC4\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u521D\u59CB\u72B6\u6001</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">changeState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token operator">++</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>a <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FDB\u5165reconciler\u6D41\u7A0B</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u751F\u547D\u5468\u671F\u51FD\u6570: \u72B6\u6001\u76F8\u5173</span>
  <span class="token keyword">static</span> <span class="token function">getDerivedStateFromProps</span><span class="token punctuation">(</span><span class="token parameter">nextProps<span class="token punctuation">,</span> prevState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;getDerivedStateFromProps&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> prevState<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u751F\u547D\u5468\u671F\u51FD\u6570: \u72B6\u6001\u76F8\u5173</span>
  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token parameter">newProps<span class="token punctuation">,</span> newState<span class="token punctuation">,</span> nextContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;shouldComponentUpdate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u751F\u547D\u5468\u671F\u51FD\u6570: \u526F\u4F5C\u7528\u76F8\u5173 fiber.flags |= Update</span>
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;componentDidMount&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u751F\u547D\u5468\u671F\u51FD\u6570: \u526F\u4F5C\u7528\u76F8\u5173 fiber.flags |= Snapshot</span>
  <span class="token function">getSnapshotBeforeUpdate</span><span class="token punctuation">(</span><span class="token parameter">prevProps<span class="token punctuation">,</span> prevState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;getSnapshotBeforeUpdate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u751F\u547D\u5468\u671F\u51FD\u6570: \u526F\u4F5C\u7528\u76F8\u5173 fiber.flags |= Update</span>
  <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;componentDidUpdate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD4\u56DE\u4E0B\u7EA7ReactElement\u5BF9\u8C61</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeState<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>a<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>`,8),I=n("p",null,[s("\u72B6\u6001\u76F8\u5173: "),n("code",null,"fiber\u6811\u6784\u9020"),s("\u9636\u6BB5.")],-1),q=n("li",null,[s("\u6784\u9020\u51FD\u6570: "),n("code",null,"constructor"),s("\u5B9E\u4F8B\u5316\u65F6\u6267\u884C, \u53EF\u4EE5\u8BBE\u7F6E\u521D\u59CB state, \u53EA\u6267\u884C\u4E00\u6B21.")],-1),Q=s("\u751F\u547D\u5468\u671F: "),T=n("code",null,"getDerivedStateFromProps",-1),G=s("\u5728"),J=n("code",null,"fiber\u6811\u6784\u9020",-1),K=s("\u9636\u6BB5("),X=n("code",null,"renderRootSync[Concurrent]",-1),Y=s(")\u6267\u884C, \u53EF\u4EE5\u4FEE\u6539 state("),Z={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberClassComponent.old.js#L867-L875",target:"_blank",rel:"noopener noreferrer"},$=s("\u94FE\u63A5"),nn=s(")."),sn=s("\u751F\u547D\u5468\u671F: "),an=n("code",null,"shouldComponentUpdate",-1),en=s("\u5728, "),on=n("code",null,"fiber\u6811\u6784\u9020",-1),tn=s("\u9636\u6BB5("),cn=n("code",null,"renderRootSync[Concurrent]",-1),pn=s(")\u6267\u884C, \u8FD4\u56DE\u503C\u51B3\u5B9A\u662F\u5426\u6267\u884C render("),ln={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberClassComponent.old.js#L1135-L1143",target:"_blank",rel:"noopener noreferrer"},rn=s("\u94FE\u63A5"),un=s(")."),dn=n("p",null,[s("\u526F\u4F5C\u7528\u76F8\u5173: "),n("code",null,"fiber\u6811\u6E32\u67D3"),s("\u9636\u6BB5.")],-1),kn=s("\u751F\u547D\u5468\u671F: "),bn=n("code",null,"getSnapshotBeforeUpdate",-1),_n=s("\u5728"),mn=n("code",null,"fiber\u6811\u6E32\u67D3",-1),hn=s("\u9636\u6BB5("),fn=n("code",null,"commitRoot->commitBeforeMutationEffects->commitBeforeMutationEffectOnFiber",-1),gn=s(")\u6267\u884C("),yn={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L264",target:"_blank",rel:"noopener noreferrer"},vn=s("\u94FE\u63A5"),En=s(")."),Ln=s("\u751F\u547D\u5468\u671F: "),Fn=n("code",null,"componentDidMount",-1),Rn=s("\u5728"),xn=n("code",null,"fiber\u6811\u6E32\u67D3",-1),Sn=s("\u9636\u6BB5("),wn=n("code",null,"commitRoot->commitLayoutEffects->commitLayoutEffectOnFiber",-1),Cn=s(")\u6267\u884C("),jn={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L533",target:"_blank",rel:"noopener noreferrer"},Pn=s("\u94FE\u63A5"),Dn=s(")."),Un=s("\u751F\u547D\u5468\u671F: "),Bn=n("code",null,"componentDidUpdate",-1),Mn=s("\u5728"),Hn=n("code",null,"fiber\u6811\u6E32\u67D3",-1),zn=s("\u9636\u6BB5("),On=n("code",null,"commitRoot->commitLayoutEffects->commitLayoutEffectOnFiber",-1),Wn=s(")\u6267\u884C("),An={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L587",target:"_blank",rel:"noopener noreferrer"},Nn=s("\u94FE\u63A5"),Vn=s(")."),In=o('<p>\u53EF\u4EE5\u770B\u5230, \u5B98\u65B9<code>api</code>\u63D0\u4F9B\u7684<code>class\u7EC4\u4EF6</code>\u751F\u547D\u5468\u671F\u51FD\u6570\u5B9E\u9645\u4E0A\u4E5F\u662F\u56F4\u7ED5<code>fiber\u6811\u6784\u9020</code>\u548C<code>fiber\u6811\u6E32\u67D3</code>\u6765\u63D0\u4F9B\u7684.</p><h3 id="function-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#function-\u7EC4\u4EF6" aria-hidden="true">#</a> function \u7EC4\u4EF6</h3><p>\u6CE8: <code>function\u7EC4\u4EF6</code>\u4E0E<code>class\u7EC4\u4EF6</code>\u6700\u5927\u7684\u4E0D\u540C\u662F: <code>class\u7EC4\u4EF6</code>\u4F1A\u5B9E\u4F8B\u5316\u4E00\u4E2A<code>instance</code>\u6240\u4EE5\u62E5\u6709\u72EC\u7ACB\u7684\u5C40\u90E8\u72B6\u6001; \u800C<code>function\u7EC4\u4EF6</code>\u4E0D\u4F1A\u5B9E\u4F8B\u5316, \u5B83\u53EA\u662F\u88AB\u76F4\u63A5\u8C03\u7528, \u6545\u65E0\u6CD5\u7EF4\u62A4\u4E00\u4EFD\u72EC\u7ACB\u7684\u5C40\u90E8\u72B6\u6001, \u53EA\u80FD\u4F9D\u9760<code>Hook</code>\u5BF9\u8C61\u95F4\u63A5\u5B9E\u73B0\u5C40\u90E8\u72B6\u6001(\u6709\u5173\u66F4\u591A<code>Hook</code>\u5B9E\u73B0\u7EC6\u8282, \u5728<code>Hook\u539F\u7406</code>\u7AE0\u8282\u4E2D\u8BE6\u7EC6\u8BA8\u8BBA).</p>',3),qn=s("\u5728"),Qn=n("code",null,"v17.0.2",-1),Tn=s("\u4E2D\u5171\u5B9A\u4E49\u4E86"),Gn={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L111-L125",target:"_blank",rel:"noopener noreferrer"},Jn=s("14 \u79CD Hook"),Kn=s(", \u5176\u4E2D\u6700\u5E38\u7528\u7684"),Xn=n("code",null,"useState, useEffect, useLayoutEffect\u7B49",-1),Yn=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u72B6\u6001\u76F8\u5173: \u521D\u59CB\u72B6\u6001</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> setA<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">changeState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setA</span><span class="token punctuation">(</span><span class="token operator">++</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FDB\u5165reconciler\u6D41\u7A0B</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u526F\u4F5C\u7528\u76F8\u5173: fiber.flags |= Update | Passive;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">useEffect</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u526F\u4F5C\u7528\u76F8\u5173: fiber.flags |= Update;</span>
  <span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">useLayoutEffect</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u8FD4\u56DE\u4E0B\u7EA7ReactElement\u5BF9\u8C61</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>changeState<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>a<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,1),Zn=n("li",null,[s("\u72B6\u6001\u76F8\u5173: "),n("code",null,"fiber\u6811\u6784\u9020"),s("\u9636\u6BB5. "),n("ol",null,[n("li",null,[n("code",null,"useState"),s("\u5728"),n("code",null,"fiber\u6811\u6784\u9020"),s("\u9636\u6BB5("),n("code",null,"renderRootSync[Concurrent]"),s(")\u6267\u884C, \u53EF\u4EE5\u4FEE\u6539"),n("code",null,"Hook.memoizedState"),s(".")])])],-1),$n=s("\u526F\u4F5C\u7528\u76F8\u5173: "),ns=n("code",null,"fiber\u6811\u6E32\u67D3",-1),ss=s("\u9636\u6BB5. "),as=n("code",null,"useEffect",-1),es=s("\u5728"),os=n("code",null,"fiber\u6811\u6E32\u67D3",-1),ts=s("\u9636\u6BB5("),cs=n("code",null,"commitRoot->commitBeforeMutationEffects->commitBeforeMutationEffectOnFiber",-1),ps=s(")\u6267\u884C(\u6CE8\u610F\u662F\u5F02\u6B65\u6267\u884C, "),ls={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L2290-L2295",target:"_blank",rel:"noopener noreferrer"},rs=s("\u94FE\u63A5"),is=s(")."),us=n("code",null,"useLayoutEffect",-1),ds=s("\u5728"),ks=n("code",null,"fiber\u6811\u6E32\u67D3",-1),bs=s("\u9636\u6BB5("),_s=n("code",null,"commitRoot->commitLayoutEffects->commitLayoutEffectOnFiber->commitHookEffectListMount",-1),ms=s(")\u6267\u884C(\u540C\u6B65\u6267\u884C, "),hs={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L481",target:"_blank",rel:"noopener noreferrer"},fs=s("\u94FE\u63A5"),gs=s(")."),ys=n("h3",{id:"\u7EC6\u8282\u4E0E\u8BEF\u533A",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EC6\u8282\u4E0E\u8BEF\u533A","aria-hidden":"true"},"#"),s(" \u7EC6\u8282\u4E0E\u8BEF\u533A")],-1),vs=n("p",null,"\u8FD9\u91CC\u6709 2 \u4E2A\u7EC6\u8282:",-1),Es=n("code",null,"useEffect(function(){}, [])",-1),Ls=s("\u4E2D\u7684\u51FD\u6570\u662F"),Fs={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L2290-L2295",target:"_blank",rel:"noopener noreferrer"},Rs=s("\u5F02\u6B65\u6267\u884C"),xs=s(", \u56E0\u4E3A\u5B83\u7ECF\u8FC7\u4E86\u8C03\u5EA6\u4E2D\u5FC3(\u5177\u4F53\u5B9E\u73B0\u53EF\u4EE5\u56DE\u987E"),Ss=s("\u8C03\u5EA6\u539F\u7406"),ws=s(")."),Cs=o("<li><code>useLayoutEffect</code>\u548C<code>Class\u7EC4\u4EF6</code>\u4E2D\u7684<code>componentDidMount,componentDidUpdate</code>\u4ECE\u8C03\u7528\u65F6\u673A\u4E0A\u6765\u8BB2\u662F\u7B49\u4EF7\u7684, \u56E0\u4E3A\u4ED6\u4EEC\u90FD\u5728<code>commitRoot-&gt;commitLayoutEffects</code>\u51FD\u6570\u4E2D\u88AB\u8C03\u7528. <ul><li>\u8BEF\u533A: \u867D\u7136\u5B98\u7F51\u6587\u6863\u63A8\u8350\u5C3D\u53EF\u80FD\u4F7F\u7528\u6807\u51C6\u7684 <code>useEffect</code> \u4EE5\u907F\u514D\u963B\u585E\u89C6\u89C9\u66F4\u65B0 , \u6240\u4EE5\u5F88\u591A\u5F00\u53D1\u8005\u4F7F\u7528<code>useEffect</code>\u6765\u4EE3\u66FF<code>componentDidMount,componentDidUpdate</code>\u662F\u4E0D\u51C6\u786E\u7684, \u5982\u679C\u5B8C\u5168\u7C7B\u6BD4, <code>useLayoutEffect</code>\u6BD4<code>useEffect</code>\u66F4\u7B26\u5408<code>componentDidMount,componentDidUpdate</code>\u7684\u5B9A\u4E49.</li></ul></li>",1),js=s("\u4E3A\u4E86\u9A8C\u8BC1\u4E0A\u8FF0\u7ED3\u8BBA, \u53EF\u4EE5\u67E5\u770B"),Ps={href:"https://codesandbox.io/s/fervent-napier-1ysb5",target:"_blank",rel:"noopener noreferrer"},Ds=s("codesandbox \u4E2D\u7684\u4F8B\u5B50"),Us=s("."),Bs=o('<h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u672C\u8282\u4ECE<code>fiber</code>\u89C6\u89D2\u51FA\u53D1, \u603B\u7ED3\u4E86<code>fiber</code>\u8282\u70B9\u4E2D\u53EF\u4EE5\u5F71\u54CD\u6700\u7EC8\u6E32\u67D3\u7ED3\u679C\u7684 2 \u7C7B\u5C5E\u6027(<code>\u72B6\u6001</code>\u548C<code>\u526F\u4F5C\u7528</code>).\u5E76\u4E14\u5F52\u7EB3\u4E86<code>class</code>\u548C<code>function</code>\u7EC4\u4EF6\u4E2D, \u76F4\u63A5\u6216\u95F4\u63A5\u66F4\u6539<code>fiber</code>\u5C5E\u6027\u7684\u5E38\u7528\u65B9\u5F0F. \u6700\u540E\u4ECE<code>fiber\u6811\u6784\u9020\u548C\u6E32\u67D3</code>\u7684\u89D2\u5EA6\u5BF9<code>class\u7684\u751F\u547D\u5468\u671F\u51FD\u6570</code>\u4E0E<code>function\u7684Hooks\u51FD\u6570</code>\u8FDB\u884C\u4E86\u6BD4\u8F83.</p>',2);function Ms(Hs,zs){const e=c("ExternalLinkIcon"),t=c("RouterLink");return r(),i(u,null,[k,n("p",null,[b,n("a",_,[m,a(e)]),h,f,g,y,v]),E,n("ol",null,[n("li",null,[L,F,R,x,n("a",S,[w,a(e)]),C]),j]),n("p",null,[P,D,U,B,M,H,z,O,W,a(t,{to:"/react-illustration-series/main/fibertree-commit.html#%E6%B8%B2%E6%9F%93"},{default:p(()=>[A]),_:1}),N]),V,n("ol",null,[n("li",null,[I,n("ol",null,[q,n("li",null,[Q,T,G,J,K,X,Y,n("a",Z,[$,a(e)]),nn]),n("li",null,[sn,an,en,on,tn,cn,pn,n("a",ln,[rn,a(e)]),un])])]),n("li",null,[dn,n("ol",null,[n("li",null,[kn,bn,_n,mn,hn,fn,gn,n("a",yn,[vn,a(e)]),En]),n("li",null,[Ln,Fn,Rn,xn,Sn,wn,Cn,n("a",jn,[Pn,a(e)]),Dn]),n("li",null,[Un,Bn,Mn,Hn,zn,On,Wn,n("a",An,[Nn,a(e)]),Vn])])])]),In,n("p",null,[qn,Qn,Tn,n("a",Gn,[Jn,a(e)]),Kn,Xn]),Yn,n("ol",null,[Zn,n("li",null,[$n,ns,ss,n("ol",null,[n("li",null,[as,es,os,ts,cs,ps,n("a",ls,[rs,a(e)]),is]),n("li",null,[us,ds,ks,bs,_s,ms,n("a",hs,[fs,a(e)]),gs])])])]),ys,vs,n("ol",null,[n("li",null,[Es,Ls,n("a",Fs,[Rs,a(e)]),xs,a(t,{to:"/react-illustration-series/main/scheduler.html"},{default:p(()=>[Ss]),_:1}),ws]),Cs]),n("p",null,[js,n("a",Ps,[Ds,a(e)]),Us]),Bs],64)}var Ws=l(d,[["render",Ms],["__file","state-effects.html.vue"]]);export{Ws as default};
