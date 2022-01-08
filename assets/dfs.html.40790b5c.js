import{r as o,o as c,c as l,a as n,b as t,F as r,e as a,d as s}from"./app.5ba8e4fa.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},k=a(`<h1 id="react-\u7B97\u6CD5\u4E4B\u6DF1\u5EA6\u4F18\u5148\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#react-\u7B97\u6CD5\u4E4B\u6DF1\u5EA6\u4F18\u5148\u904D\u5386" aria-hidden="true">#</a> React \u7B97\u6CD5\u4E4B\u6DF1\u5EA6\u4F18\u5148\u904D\u5386</h1><p>\u5BF9\u4E8E\u6811\u6216\u56FE\u7ED3\u6784\u7684\u641C\u7D22(\u6216\u904D\u5386)\u6765\u8BB2, \u5206\u4E3A\u6DF1\u5EA6\u4F18\u5148(DFS)\u548C\u5E7F\u5EA6\u4F18\u5148(BFS).</p><h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h2><p>\u6DF1\u5EA6\u4F18\u5148\u904D\u5386: DFS(\u82F1\u8BED:Depth-First-Search,DFS)\u662F\u4E00\u79CD\u7528\u4E8E\u904D\u5386\u6216\u641C\u7D22\u6811\u6216\u56FE\u7684\u7B97\u6CD5.</p><p>\u6765\u81EA wiki \u4E0A\u7684\u89E3\u91CA(\u66F4\u6743\u5A01): \u5F53<code>\u8282\u70B9v</code>\u7684\u6240\u5728\u8FB9\u90FD\u5DF1\u88AB\u63A2\u5BFB\u8FC7, \u641C\u7D22\u5C06\u56DE\u6EAF\u5230\u53D1\u73B0<code>\u8282\u70B9v</code>\u7684\u90A3\u6761\u8FB9\u7684\u8D77\u59CB\u8282\u70B9. \u8FD9\u4E00\u8FC7\u7A0B\u4E00\u76F4\u8FDB\u884C\u5230\u5DF2\u53D1\u73B0\u4ECE\u6E90\u8282\u70B9\u53EF\u8FBE\u7684\u6240\u6709\u8282\u70B9\u4E3A\u6B62. \u5982\u679C\u8FD8\u5B58\u5728\u672A\u88AB\u53D1\u73B0\u7684\u8282\u70B9, \u5219\u9009\u62E9\u5176\u4E2D\u4E00\u4E2A\u4F5C\u4E3A\u6E90\u8282\u70B9\u5E76\u91CD\u590D\u4EE5\u4E0A\u8FC7\u7A0B, \u6574\u4E2A\u8FDB\u7A0B\u53CD\u590D\u8FDB\u884C\u76F4\u5230\u6240\u6709\u8282\u70B9\u90FD\u88AB\u8BBF\u95EE\u4E3A\u6B62.</p><h2 id="\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u5F0F</h2><p>DFS \u7684\u4E3B\u6D41\u5B9E\u73B0\u65B9\u5F0F\u6709 2 \u79CD.</p><ol><li>\u9012\u5F52(\u7B80\u5355\u7C97\u66B4)</li><li>\u5229\u7528<code>\u6808</code>\u5B58\u50A8\u904D\u5386\u8DEF\u5F84</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u63A2\u5BFB\u9636\u6BB5: &#39;</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  node<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u56DE\u6EAF\u9636\u6BB5: &#39;</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="2"><li>\u4F7F\u7528\u6808</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// \u56E0\u4E3A\u8981\u5206\u8FA8\u63A2\u5BFB\u9636\u6BB5\u548C\u56DE\u6EAF\u9636\u6BB5, \u6240\u4EE5\u5FC5\u987B\u8981\u4E00\u4E2A\u5C5E\u6027\u6765\u8BB0\u5F55\u662F\u5426\u5DF2\u7ECF\u8BBF\u95EE\u8FC7\u8BE5\u8282\u70B9</span>
  <span class="token comment">// \u5982\u679C\u4E0D\u6253\u5370\u63A2\u5BFB\u548C\u56DE\u6EAF, \u5C31\u4E0D\u9700\u8981\u6B64\u5C5E\u6027</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>visited <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u6808\u9876\u5143\u7D20\u8FD8\u5B58\u5728, \u5C31\u7EE7\u7EED\u5FAA\u73AF</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>node <span class="token operator">=</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>visited<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u56DE\u6EAF\u9636\u6BB5: &#39;</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u56DE\u6EAF\u5B8C\u6210, \u5F39\u51FA\u8BE5\u5143\u7D20</span>
      stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u63A2\u5BFB\u9636\u6BB5: &#39;</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      node<span class="token punctuation">.</span>visited <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token comment">// \u5229\u7528\u6808\u7684\u5148\u8FDB\u540E\u51FA\u7684\u7279\u6027, \u5012\u5E8F\u5C06\u8282\u70B9\u9001\u5165\u6808\u4E2D</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> node<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="react-\u5F53\u4E2D\u7684\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#react-\u5F53\u4E2D\u7684\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> React \u5F53\u4E2D\u7684\u4F7F\u7528\u573A\u666F</h2><p>\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u5728<code>react</code>\u5F53\u4E2D\u7684\u4F7F\u7528\u975E\u5E38\u5178\u578B, \u6700\u4E3B\u8981\u7684\u4F7F\u7528\u65F6\u5728<code>ReactElement</code>\u548C<code>fiber</code>\u6811\u7684\u6784\u9020\u8FC7\u7A0B. \u5176\u6B21\u662F\u5728\u4F7F\u7528<code>context</code>\u65F6, \u9700\u8981\u6DF1\u5EA6\u4F18\u5148\u5730\u67E5\u627E\u6D88\u8D39<code>context</code>\u7684\u8282\u70B9.</p><h3 id="reactelement-\u6811-\u7684\u6784\u9020" tabindex="-1"><a class="header-anchor" href="#reactelement-\u6811-\u7684\u6784\u9020" aria-hidden="true">#</a> ReactElement &quot;\u6811&quot;\u7684\u6784\u9020</h3><p><code>ReactElement</code>\u4E0D\u80FD\u7B97\u662F\u4E25\u683C\u7684\u6811\u7ED3\u6784, \u4E3A\u4E86\u65B9\u4FBF\u8868\u8FF0, \u540E\u6587\u90FD\u79F0\u4E4B\u4E3A\u6811.</p><p>\u5728<code>react-reconciler</code>\u5305\u4E2D, <code>ReactElement</code>\u7684\u6784\u9020\u8FC7\u7A0B\u5B9E\u9645\u4E0A\u662F\u5D4C\u5957\u5728<code>fiber\u6811\u6784\u9020\u5FAA\u73AF</code>\u8FC7\u7A0B\u4E2D\u7684, \u4E0E<code>fiber</code>\u6811\u7684\u6784\u9020\u662F\u76F8\u4E92\u4EA4\u66FF\u8FDB\u884C\u7684(\u5728<code>fiber \u6811\u6784\u5EFA</code>\u7AE0\u8282\u4E2D\u8BE6\u7EC6\u89E3\u8BFB, \u672C\u8282\u53EA\u4ECB\u7ECD\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u7684\u4F7F\u7528\u573A\u666F).</p><p><code>ReactElement</code>\u6811\u7684\u6784\u9020, \u5B9E\u9645\u4E0A\u5C31\u662F\u5404\u7EA7\u7EC4\u4EF6<code>render</code>\u4E4B\u540E\u7684\u603B\u548C. \u6574\u4E2A\u8FC7\u7A0B\u4F53\u73B0\u5728<code>reconciler</code>\u5DE5\u4F5C\u5FAA\u73AF\u4E4B\u4E2D.</p>`,17),b=s("\u6E90\u7801\u4F4D\u4E8E"),d={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L1558",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"ReactFiberWorkLoop.js",-1),h=s("\u4E2D, \u6B64\u5904\u4E3A\u4E86\u7B80\u660E, \u5DF2\u7ECF\u5C06\u6E90\u7801\u4E2D\u4E0E dfs \u65E0\u5173\u7684\u65C1\u652F\u903B\u8F91\u53BB\u6389."),g=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">workLoopSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. \u6700\u5916\u5C42\u5FAA\u73AF, \u4FDD\u8BC1\u6BCF\u4E00\u4E2A\u8282\u70B9\u90FD\u80FD\u904D\u5386, \u4E0D\u4F1A\u9057\u6F0F</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">unitOfWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> current <span class="token operator">=</span> unitOfWork<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
  <span class="token keyword">let</span> next<span class="token punctuation">;</span>
  <span class="token comment">// 2. beginWork\u662F\u5411\u4E0B\u63A2\u5BFB\u9636\u6BB5</span>
  next <span class="token operator">=</span> <span class="token function">beginWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> unitOfWork<span class="token punctuation">,</span> subtreeRenderLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 3. completeUnitOfWork \u662F\u56DE\u6EAF\u9636\u6BB5</span>
    <span class="token function">completeUnitOfWork</span><span class="token punctuation">(</span>unitOfWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    workInProgress <span class="token operator">=</span> next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">completeUnitOfWork</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">unitOfWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> completedWork <span class="token operator">=</span> unitOfWork<span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> current <span class="token operator">=</span> completedWork<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
    <span class="token keyword">const</span> returnFiber <span class="token operator">=</span> completedWork<span class="token punctuation">.</span>return<span class="token punctuation">;</span>
    <span class="token keyword">let</span> next<span class="token punctuation">;</span>
    <span class="token comment">// 3.1 \u56DE\u6EAF\u5E76\u5904\u7406\u8282\u70B9</span>
    next <span class="token operator">=</span> <span class="token function">completeWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> completedWork<span class="token punctuation">,</span> subtreeRenderLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5224\u65AD\u5728\u5904\u7406\u8282\u70B9\u7684\u8FC7\u7A0B\u4E2D, \u662F\u5426\u6D3E\u751F\u51FA\u65B0\u7684\u8282\u70B9</span>
      workInProgress <span class="token operator">=</span> next<span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> siblingFiber <span class="token operator">=</span> completedWork<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
    <span class="token comment">// 3.2 \u5224\u65AD\u662F\u5426\u6709\u65C1\u652F</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>siblingFiber <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      workInProgress <span class="token operator">=</span> siblingFiber<span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 3.3 \u6CA1\u6709\u65C1\u652F \u7EE7\u7EED\u56DE\u6EAF</span>
    completedWork <span class="token operator">=</span> returnFiber<span class="token punctuation">;</span>
    workInProgress <span class="token operator">=</span> completedWork<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>completedWork <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>\u4EE5\u4E0A\u6E90\u7801\u672C\u8D28\u4E0A\u662F\u91C7\u7528\u9012\u5F52\u7684\u65B9\u5F0F\u8FDB\u884C dfs, \u5047\u8BBE\u6709\u4EE5\u4E0B\u7EC4\u4EF6\u7ED3\u6784:</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">header</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">footer</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Content</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,3),f=s("\u5219\u53EF\u4EE5\u7ED8\u5236\u51FA\u904D\u5386\u8DEF\u5F84\u5982\u4E0B: "),w=["src"],y=a('<p>\u6CE8\u610F:</p><ul><li><code>ReactElement</code>\u6811\u662F\u5728\u5927\u5FAA\u73AF\u4E2D\u7684<code>beginWork</code>\u9636\u6BB5&quot;\u9010\u7EA7&quot;\u751F\u6210\u7684.</li><li>&quot;\u9010\u7EA7&quot;\u4E2D\u7684\u6BCF\u4E00\u7EA7\u662F\u503C\u4E00\u4E2A<code>class</code>\u6216<code>function</code>\u7C7B\u578B\u7684\u7EC4\u4EF6, \u6BCF\u8C03\u7528\u4E00\u6B21<code>render</code>\u6216\u6267\u884C\u4E00\u6B21<code>function</code>\u8C03\u7528, \u5C31\u4F1A\u751F\u6210\u4E00\u6279<code>ReactElement</code>\u8282\u70B9.</li><li><code>ReactElement</code>\u6811\u7684\u6784\u9020, \u5B9E\u9645\u4E0A\u5C31\u662F\u5404\u7EA7\u7EC4\u4EF6<code>render</code>\u4E4B\u540E\u7684\u603B\u548C.</li></ul><h3 id="fiber-\u6811\u7684\u6784\u9020" tabindex="-1"><a class="header-anchor" href="#fiber-\u6811\u7684\u6784\u9020" aria-hidden="true">#</a> fiber \u6811\u7684\u6784\u9020</h3><p>\u5728<code>ReactElement</code>\u7684\u6784\u9020\u8FC7\u7A0B\u4E2D, \u540C\u65F6\u4F34\u968F\u7740<code>fiber</code>\u6811\u7684\u6784\u9020, <code>fiber</code>\u6811\u540C\u6837\u4E5F\u662F\u5728<code>beginWork</code>\u9636\u6BB5\u751F\u6210\u7684.</p><p>\u7ED8\u5236\u51FA\u904D\u5386\u8DEF\u5F84\u5982\u4E0B:</p>',5),_=["src"],x=n("h3",{id:"\u67E5\u627E-context-\u7684\u6D88\u8D39\u8282\u70B9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u67E5\u627E-context-\u7684\u6D88\u8D39\u8282\u70B9","aria-hidden":"true"},"#"),s(" \u67E5\u627E context \u7684\u6D88\u8D39\u8282\u70B9")],-1),v=s("\u5F53"),F=n("code",null,"context",-1),W=s("\u6539\u53D8\u4E4B\u540E, \u9700\u8981\u627E\u51FA\u4F9D\u8D56\u8BE5"),R=n("code",null,"context",-1),j=s("\u7684\u6240\u6709\u5B50\u8282\u70B9(\u8BE6\u7EC6\u5206\u6790\u4F1A\u5728"),E=n("code",null,"context\u539F\u7406",-1),B=s("\u7AE0\u8282\u6DF1\u5165\u89E3\u8BFB), \u8FD9\u91CC\u540C\u6837\u4E5F\u662F\u4E00\u4E2A"),C=n("code",null,"DFS",-1),L=s(", \u5177\u4F53\u6E90\u7801\u5728"),S={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberNewContext.old.js#L182-L295",target:"_blank",rel:"noopener noreferrer"},O=s("ReactFiberNewContext.js"),I=s("."),q=a(`<p>\u5C06\u5176\u4E3B\u6746\u903B\u8F91\u5265\u79BB\u51FA\u6765, \u53EF\u4EE5\u6E05\u6670\u7684\u770B\u51FA\u91C7\u7528\u5FAA\u73AF\u9012\u5F52\u7684\u65B9\u5F0F\u8FDB\u884C\u904D\u5386:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">propagateContextChange</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> ReactContext<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">changedBits</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token literal-property property">renderLanes</span><span class="token operator">:</span> Lanes<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> fiber <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fiber <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> nextFiber<span class="token punctuation">;</span>
    <span class="token comment">// Visit this fiber.</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> fiber<span class="token punctuation">.</span>dependencies<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5339\u914Dcontext\u7B49\u903B\u8F91, \u548Cdfs\u65E0\u5173, \u6B64\u5904\u53EF\u4EE5\u6682\u65F6\u5FFD\u7565</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5411\u4E0B\u63A2\u5BFB</span>
      nextFiber <span class="token operator">=</span> fiber<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    fiber <span class="token operator">=</span> nextFiber<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u7531\u4E8E<code>react</code>\u5185\u90E8\u4F7F\u7528\u4E86<code>ReactElement</code>\u548C<code>fiber</code>\u4E24\u5927\u6811\u5F62\u7ED3\u6784, \u6240\u4EE5\u6709\u4E0D\u5C11\u5173\u4E8E\u8282\u70B9\u8BBF\u95EE\u7684\u903B\u8F91.</p><p>\u672C\u8282\u4E3B\u8981\u4ECB\u7ECD\u4E86<code>DFS</code>\u7684\u6982\u5FF5\u548C\u5B83\u5728<code>react</code>\u6E90\u7801\u4E2D\u7684\u4F7F\u7528\u60C5\u51B5. \u5176\u4E2D<code>fiber</code>\u6811\u7684<code>DFS</code>\u904D\u5386, \u6D89\u53CA\u5230\u7684\u4EE3\u7801\u591A, \u5206\u5E03\u5E7F, \u6DB5\u76D6\u4E86<code>reconciler</code>\u9636\u6BB5\u7684\u5927\u90E8\u5206\u5DE5\u4F5C, \u662F<code>reconciler</code>\u9636\u6BB5\u5DE5\u4F5C\u5FAA\u73AF\u7684\u6838\u5FC3\u6D41\u7A0B.</p><p>\u9664\u4E86<code>DFS</code>\u4E4B\u5916, \u6E90\u7801\u4E2D\u8FD8\u6709\u5F88\u591A\u903B\u8F91\u90FD\u662F\u67E5\u627E\u6811\u4E2D\u7684\u8282\u70B9(\u5982: \u5411\u4E0A\u67E5\u627E\u7236\u8282\u70B9\u7B49). \u5BF9\u6811\u5F62\u7ED3\u6784\u7684\u904D\u5386\u5728\u6E90\u7801\u4E2D\u7684\u6BD4\u4F8B\u5F88\u9AD8, \u4E86\u89E3\u8FD9\u4E9B\u7B97\u6CD5\u6280\u5DE7\u80FD\u591F\u66F4\u597D\u7684\u7406\u89E3<code>react</code>\u6E90\u7801.</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,7),D={href:"https://zh.wikipedia.org/wiki/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2",target:"_blank",rel:"noopener noreferrer"},N=s("\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22");function P(e,A){const p=o("ExternalLinkIcon");return c(),l(r,null,[k,n("p",null,[b,n("a",d,[m,t(p)]),h]),g,n("p",null,[f,n("img",{src:e.$withBase("/assets/react-illustration-series/dfs-reactelement.png"),alt:"demo"},null,8,w)]),y,n("img",{src:e.$withBase("/assets/react-illustration-series/dfs-fibertree.png"),alt:"demo"},null,8,_),x,n("p",null,[v,F,W,R,j,E,B,C,L,n("a",S,[O,t(p)]),I]),q,n("p",null,[n("a",D,[N,t(p)])])],64)}var $=u(i,[["render",P]]);export{$ as default};
