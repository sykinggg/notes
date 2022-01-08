import{r as p,o,c,a as n,b as t,F as l,e as a,d as s}from"./app.5ba8e4fa.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=a(`<p>\u5F53\u6709\u4E86\u524D\u9762\u77E5\u8BC6\u7684\u94FA\u57AB\uFF0C\u5C31\u5F88\u5BB9\u6613\u7406\u89E3<code>this.setState</code>\u7684\u5DE5\u4F5C\u6D41\u7A0B\u3002</p><h2 id="\u6D41\u7A0B\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u6982\u89C8" aria-hidden="true">#</a> \u6D41\u7A0B\u6982\u89C8</h2><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>this.setState</code>\u5185\u4F1A\u8C03\u7528<code>this.updater.enqueueSetState</code>\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Component</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setState</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">partialState<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> partialState <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> partialState <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">||</span> partialState <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span> <span class="token string">&quot;setState(...): takes an object of state variables to update or a function which returns an object of state variables.&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>updater<span class="token punctuation">.</span><span class="token function">enqueueSetState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> partialState<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> <span class="token string">&#39;setState&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,4),d=s("\u4F60\u53EF\u4EE5\u5728"),k={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react/src/ReactBaseClasses.js#L57",target:"_blank",rel:"noopener noreferrer"},b=s("\u8FD9\u91CC"),m=s("\u770B\u5230\u8FD9\u6BB5\u4EE3\u7801"),h=a(`<p>\u5728<code>enqueueSetState</code>\u65B9\u6CD5\u4E2D\u5C31\u662F\u719F\u6089\u7684\u4ECE<code>\u521B\u5EFAupdate</code>\u5230<code>\u8C03\u5EA6update</code>\u7684\u6D41\u7A0B\u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">enqueueSetState</span><span class="token punctuation">(</span><span class="token parameter">inst<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u901A\u8FC7\u7EC4\u4EF6\u5B9E\u4F8B\u83B7\u53D6\u5BF9\u5E94fiber</span>
  <span class="token keyword">const</span> fiber <span class="token operator">=</span> <span class="token function">getInstance</span><span class="token punctuation">(</span>inst<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> eventTime <span class="token operator">=</span> <span class="token function">requestEventTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> suspenseConfig <span class="token operator">=</span> <span class="token function">requestCurrentSuspenseConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u83B7\u53D6\u4F18\u5148\u7EA7</span>
  <span class="token keyword">const</span> lane <span class="token operator">=</span> <span class="token function">requestUpdateLane</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> suspenseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u521B\u5EFAupdate</span>
  <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">createUpdate</span><span class="token punctuation">(</span>eventTime<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> suspenseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

  update<span class="token punctuation">.</span>payload <span class="token operator">=</span> payload<span class="token punctuation">;</span>

  <span class="token comment">// \u8D4B\u503C\u56DE\u8C03\u51FD\u6570</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> callback <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    update<span class="token punctuation">.</span>callback <span class="token operator">=</span> callback<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5C06update\u63D2\u5165updateQueue</span>
  <span class="token function">enqueueUpdate</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8C03\u5EA6update</span>
  <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,2),f=s("\u4F60\u53EF\u4EE5\u5728"),_={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberClassComponent.old.js#L196",target:"_blank",rel:"noopener noreferrer"},g=s("\u8FD9\u91CC"),C=s("\u770B\u5230"),v=n("code",null,"enqueueSetState",-1),U=s("\u4EE3\u7801"),y=a(`<p>\u8FD9\u91CC\u503C\u5F97\u6CE8\u610F\u7684\u662F\u5BF9\u4E8E<code>ClassComponent</code>\uFF0C<code>update.payload</code>\u4E3A<code>this.setState</code>\u7684\u7B2C\u4E00\u4E2A\u4F20\u53C2\uFF08\u5373\u8981\u6539\u53D8\u7684<code>state</code>\uFF09\u3002</p><h2 id="this-forceupdate" tabindex="-1"><a class="header-anchor" href="#this-forceupdate" aria-hidden="true">#</a> this.forceUpdate</h2><p>\u5728<code>this.updater</code>\u4E0A\uFF0C\u9664\u4E86<code>enqueueSetState</code>\u5916\uFF0C\u8FD8\u5B58\u5728<code>enqueueForceUpdate</code>\uFF0C\u5F53\u8C03\u7528<code>this.forceUpdate</code>\u65F6\u4F1A\u8C03\u7528\u4ED6\u3002</p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u9664\u4E86\u8D4B\u503C<code>update.tag = ForceUpdate;</code>\u4EE5\u53CA\u6CA1\u6709<code>payload</code>\u5916\uFF0C\u5176\u4ED6\u903B\u8F91\u4E0E<code>this.setState</code>\u4E00\u81F4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">enqueueForceUpdate</span><span class="token punctuation">(</span><span class="token parameter">inst<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fiber <span class="token operator">=</span> <span class="token function">getInstance</span><span class="token punctuation">(</span>inst<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> eventTime <span class="token operator">=</span> <span class="token function">requestEventTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> suspenseConfig <span class="token operator">=</span> <span class="token function">requestCurrentSuspenseConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> lane <span class="token operator">=</span> <span class="token function">requestUpdateLane</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> suspenseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">createUpdate</span><span class="token punctuation">(</span>eventTime<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> suspenseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8D4B\u503Ctag\u4E3AForceUpdate</span>
    update<span class="token punctuation">.</span>tag <span class="token operator">=</span> ForceUpdate<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> callback <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      update<span class="token punctuation">.</span>callback <span class="token operator">=</span> callback<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">enqueueUpdate</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,5),S=s("\u4F60\u53EF\u4EE5\u5728"),w={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberClassComponent.old.js#L260",target:"_blank",rel:"noopener noreferrer"},q=s("\u8FD9\u91CC"),j=s("\u770B\u5230"),F=n("code",null,"enqueueForceUpdate",-1),x=s("\u4EE3\u7801"),L=a(`<p>\u90A3\u4E48\u8D4B\u503C<code>update.tag = ForceUpdate;</code>\u6709\u4F55\u4F5C\u7528\u5462\uFF1F</p><p>\u5728\u5224\u65AD<code>ClassComponent</code>\u662F\u5426\u9700\u8981\u66F4\u65B0\u65F6\u6709\u4E24\u4E2A\u6761\u4EF6\u9700\u8981\u6EE1\u8DB3\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token keyword">const</span> shouldUpdate <span class="token operator">=</span>
  <span class="token function">checkHasForceUpdateAfterProcessing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span>
  <span class="token function">checkShouldComponentUpdate</span><span class="token punctuation">(</span>
    workInProgress<span class="token punctuation">,</span>
    ctor<span class="token punctuation">,</span>
    oldProps<span class="token punctuation">,</span>
    newProps<span class="token punctuation">,</span>
    oldState<span class="token punctuation">,</span>
    newState<span class="token punctuation">,</span>
    nextContext<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,3),T=s("\u4F60\u53EF\u4EE5\u5728"),P={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberClassComponent.old.js#L1137",target:"_blank",rel:"noopener noreferrer"},E=s("\u8FD9\u91CC"),R=s("\u770B\u5230\u8FD9\u6BB5\u4EE3\u7801"),I=a("<ul><li><p>checkHasForceUpdateAfterProcessing\uFF1A\u5185\u90E8\u4F1A\u5224\u65AD\u672C\u6B21\u66F4\u65B0\u7684<code>Update</code>\u662F\u5426\u4E3A<code>ForceUpdate</code>\u3002\u5373\u5982\u679C\u672C\u6B21\u66F4\u65B0\u7684<code>Update</code>\u4E2D\u5B58\u5728<code>tag</code>\u4E3A<code>ForceUpdate</code>\uFF0C\u5219\u8FD4\u56DE<code>true</code>\u3002</p></li><li><p>checkShouldComponentUpdate\uFF1A\u5185\u90E8\u4F1A\u8C03\u7528<code>shouldComponentUpdate</code>\u65B9\u6CD5\u3002\u4EE5\u53CA\u5F53\u8BE5<code>ClassComponent</code>\u4E3A<code>PureComponent</code>\u65F6\u4F1A\u6D45\u6BD4\u8F83<code>state</code>\u4E0E<code>props</code>\u3002</p></li></ul>",1),B=s("\u4F60\u53EF\u4EE5\u5728"),H={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberClassComponent.old.js#L294",target:"_blank",rel:"noopener noreferrer"},N=s("\u8FD9\u91CC"),V=s("\u770B\u5230"),A=n("code",null,"checkShouldComponentUpdate",-1),O=s("\u4EE3\u7801"),Q=a('<p>\u6240\u4EE5\uFF0C\u5F53\u67D0\u6B21\u66F4\u65B0\u542B\u6709<code>tag</code>\u4E3A<code>ForceUpdate</code>\u7684<code>Update</code>\uFF0C\u90A3\u4E48\u5F53\u524D<code>ClassComponent</code>\u4E0D\u4F1A\u53D7\u5176\u4ED6<code>\u6027\u80FD\u4F18\u5316\u624B\u6BB5</code>\uFF08<code>shouldComponentUpdate</code>|<code>PureComponent</code>\uFF09\u5F71\u54CD\uFF0C\u4E00\u5B9A\u4F1A\u66F4\u65B0\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u81F3\u6B64\uFF0C\u5B66\u4E60\u5B8C\u4E86<code>HostRoot | ClassComponent</code>\u6240\u4F7F\u7528\u7684<code>Update</code>\u7684\u66F4\u65B0\u6D41\u7A0B\u3002</p><p>\u5728\u4E0B\u4E00\u7AE0\u4F1A\u5B66\u4E60\u53E6\u4E00\u79CD\u6570\u636E\u7ED3\u6784\u7684<code>Update</code> \u2014\u2014 \u7528\u4E8E<code>Hooks</code>\u7684<code>Update</code>\u3002</p>',4);function z(D,G){const e=p("ExternalLinkIcon");return o(),c(l,null,[i,n("blockquote",null,[n("p",null,[d,n("a",k,[b,t(e)]),m])]),h,n("blockquote",null,[n("p",null,[f,n("a",_,[g,t(e)]),C,v,U])]),y,n("blockquote",null,[n("p",null,[S,n("a",w,[q,t(e)]),j,F,x])]),L,n("blockquote",null,[n("p",null,[T,n("a",P,[E,t(e)]),R])]),I,n("blockquote",null,[n("p",null,[B,n("a",H,[N,t(e)]),V,A,O])]),Q],64)}var M=u(r,[["render",z]]);export{M as default};
