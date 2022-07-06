import{_ as p,r,o as l,c,b as n,d as e,F as i,e as s,a as t}from"./app.816e2a4d.js";const u={},d=n("p",null,[s("\u7ECF\u8FC7\u4E94\u7AE0\u7684\u5B66\u4E60\uFF0C\u7EC8\u4E8E\u56DE\u5230\u4E86"),n("code",null,"React"),s("\u5E94\u7528\u7684\u8D77\u70B9\u3002")],-1),b=n("p",null,[s("\u8FD9\u4E00\u8282\u5B8C\u6574\u7684\u8D70\u901A"),n("code",null,"ReactDOM.render"),s("\u5B8C\u6210\u9875\u9762\u6E32\u67D3\u7684\u6574\u4E2A\u6D41\u7A0B\u3002")],-1),_=n("h2",{id:"\u521B\u5EFAfiber",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u521B\u5EFAfiber","aria-hidden":"true"},"#"),s(" \u521B\u5EFAfiber")],-1),h=s("\u4ECE"),k={href:"/react/process/doubleBuffer.md#mount%E6%97%B6",target:"_blank",rel:"noopener noreferrer"},m=s("\u53CC\u7F13\u5B58\u673A\u5236\u4E00\u8282"),f=s("\u77E5\u9053\uFF0C\u9996\u6B21\u6267\u884C"),g=n("code",null,"ReactDOM.render",-1),y=s("\u4F1A\u521B\u5EFA"),v=n("code",null,"fiberRootNode",-1),R=s("\u548C"),F=n("code",null,"rootFiber",-1),j=s("\u3002\u5176\u4E2D"),w=n("code",null,"fiberRootNode",-1),C=s("\u662F\u6574\u4E2A\u5E94\u7528\u7684\u6839\u8282\u70B9\uFF0C"),O=n("code",null,"rootFiber",-1),x=s("\u662F\u8981\u6E32\u67D3\u7EC4\u4EF6\u6240\u5728\u7EC4\u4EF6\u6811\u7684"),N=n("code",null,"\u6839\u8282\u70B9",-1),D=s("\u3002"),M=t(`<p>\u8FD9\u4E00\u6B65\u53D1\u751F\u5728\u8C03\u7528<code>ReactDOM.render</code>\u540E\u8FDB\u5165\u7684<code>legacyRenderSubtreeIntoContainer</code>\u65B9\u6CD5\u4E2D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// container\u6307ReactDOM.render\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF08\u5373\u5E94\u7528\u6302\u8F7D\u7684DOM\u8282\u70B9\uFF09</span>
root <span class="token operator">=</span> container<span class="token punctuation">.</span>_reactRootContainer <span class="token operator">=</span> <span class="token function">legacyCreateRootFromDOMContainer</span><span class="token punctuation">(</span>
  container<span class="token punctuation">,</span>
  forceHydrate<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
fiberRoot <span class="token operator">=</span> root<span class="token punctuation">.</span>_internalRoot<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,2),z=s("\u4F60\u53EF\u4EE5\u4ECE"),S={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-dom/src/client/ReactDOMLegacy.js#L193",target:"_blank",rel:"noopener noreferrer"},B=s("\u8FD9\u91CC"),E=s("\u770B\u5230\u8FD9\u4E00\u6B65\u7684\u4EE3\u7801"),L=t(`<p><code>legacyCreateRootFromDOMContainer</code>\u65B9\u6CD5\u5185\u90E8\u4F1A\u8C03\u7528<code>createFiberRoot</code>\u65B9\u6CD5\u5B8C\u6210<code>fiberRootNode</code>\u548C<code>rootFiber</code>\u7684\u521B\u5EFA\u4EE5\u53CA\u5173\u8054\u3002\u5E76\u521D\u59CB\u5316<code>updateQueue</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createFiberRoot</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">containerInfo</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> RootTag<span class="token punctuation">,</span>
  <span class="token literal-property property">hydrate</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">hydrationCallbacks</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> SuspenseHydrationCallbacks<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> FiberRoot <span class="token punctuation">{</span>
  <span class="token comment">// \u521B\u5EFAfiberRootNode</span>
  <span class="token keyword">const</span> <span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FiberRootNode</span><span class="token punctuation">(</span>containerInfo<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> hydrate<span class="token punctuation">)</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// \u521B\u5EFArootFiber</span>
  <span class="token keyword">const</span> uninitializedFiber <span class="token operator">=</span> <span class="token function">createHostRootFiber</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u8FDE\u63A5rootFiber\u4E0EfiberRootNode</span>
  root<span class="token punctuation">.</span>current <span class="token operator">=</span> uninitializedFiber<span class="token punctuation">;</span>
  uninitializedFiber<span class="token punctuation">.</span>stateNode <span class="token operator">=</span> root<span class="token punctuation">;</span>

  <span class="token comment">// \u521D\u59CB\u5316updateQueue</span>
  <span class="token function">initializeUpdateQueue</span><span class="token punctuation">(</span>uninitializedFiber<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,2),U=s("\u6839\u636E\u4EE5\u4E0A\u4EE3\u7801\uFF0C\u73B0\u5728\u53EF\u4EE5\u5728"),A={href:"/react/process/doubleBuffer.md#mount%E6%97%B6",target:"_blank",rel:"noopener noreferrer"},H=s("\u53CC\u7F13\u5B58\u673A\u5236\u4E00\u8282"),I=s("\u57FA\u7840\u4E0A\u8865\u5145\u4E0A"),T=n("code",null,"rootFiber",-1),q=s("\u5230"),Q=n("code",null,"fiberRootNode",-1),V=s("\u7684\u5F15\u7528\u3002"),P=["src"],W=s("\u4F60\u53EF\u4EE5\u4ECE"),$={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberRoot.new.js#L97",target:"_blank",rel:"noopener noreferrer"},G=s("\u8FD9\u91CC"),J=s("\u770B\u5230\u8FD9\u4E00\u6B65\u7684\u4EE3\u7801"),K=t(`<h2 id="\u521B\u5EFAupdate" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAupdate" aria-hidden="true">#</a> \u521B\u5EFAupdate</h2><p>\u5DF2\u7ECF\u505A\u597D\u4E86\u7EC4\u4EF6\u7684\u521D\u59CB\u5316\u5DE5\u4F5C\uFF0C\u63A5\u4E0B\u6765\u5C31\u7B49\u5F85\u521B\u5EFA<code>Update</code>\u6765\u5F00\u542F\u4E00\u6B21\u66F4\u65B0\u3002</p><p>\u8FD9\u4E00\u6B65\u53D1\u751F\u5728<code>updateContainer</code>\u65B9\u6CD5\u4E2D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">updateContainer</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">element</span><span class="token operator">:</span> ReactNodeList<span class="token punctuation">,</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> OpaqueRoot<span class="token punctuation">,</span>
  <span class="token literal-property property">parentComponent</span><span class="token operator">:</span> <span class="token operator">?</span>React$Component<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> any<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Lane <span class="token punctuation">{</span>
  <span class="token comment">// ...\u7701\u7565\u4E0E\u903B\u8F91\u4E0D\u76F8\u5173\u4EE3\u7801</span>

  <span class="token comment">// \u521B\u5EFAupdate</span>
  <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">createUpdate</span><span class="token punctuation">(</span>eventTime<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> suspenseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// update.payload\u4E3A\u9700\u8981\u6302\u8F7D\u5728\u6839\u8282\u70B9\u7684\u7EC4\u4EF6</span>
  update<span class="token punctuation">.</span>payload <span class="token operator">=</span> <span class="token punctuation">{</span>element<span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// callback\u4E3AReactDOM.render\u7684\u7B2C\u4E09\u4E2A\u53C2\u6570 \u2014\u2014 \u56DE\u8C03\u51FD\u6570</span>
  callback <span class="token operator">=</span> callback <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> callback<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    update<span class="token punctuation">.</span>callback <span class="token operator">=</span> callback<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5C06\u751F\u6210\u7684update\u52A0\u5165updateQueue</span>
  <span class="token function">enqueueUpdate</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8C03\u5EA6\u66F4\u65B0</span>
  <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ...\u7701\u7565\u4E0E\u903B\u8F91\u4E0D\u76F8\u5173\u4EE3\u7801</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,4),X=s("\u4F60\u53EF\u4EE5\u4ECE"),Y={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberReconciler.new.js#L255",target:"_blank",rel:"noopener noreferrer"},Z=s("\u8FD9\u91CC"),nn=s("\u770B\u5230"),sn=n("code",null,"updateContainer",-1),an=s("\u7684\u4EE3\u7801"),en=n("p",null,[s("\u503C\u5F97\u6CE8\u610F\u7684\u662F\u5176\u4E2D"),n("code",null,"update.payload = {element};")],-1),tn=s("\u8FD9\u5C31\u662F\u5728"),on={href:"/react/state/update.md#update%E7%9A%84%E7%BB%93%E6%9E%84",target:"_blank",rel:"noopener noreferrer"},pn=s("Update\u4E00\u8282"),rn=s("\u4ECB\u7ECD\u7684\uFF0C\u5BF9\u4E8E"),ln=n("code",null,"HostRoot",-1),cn=s("\uFF0C"),un=n("code",null,"payload",-1),dn=s("\u4E3A"),bn=n("code",null,"ReactDOM.render",-1),_n=s("\u7684\u7B2C\u4E00\u4E2A\u4F20\u53C2\u3002"),hn=t(`<h2 id="\u6D41\u7A0B\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u6982\u89C8" aria-hidden="true">#</a> \u6D41\u7A0B\u6982\u89C8</h2><p>\u81F3\u6B64\uFF0C<code>ReactDOM.render</code>\u7684\u6D41\u7A0B\u5C31\u548C\u5DF2\u77E5\u7684\u6D41\u7A0B\u8FDE\u63A5\u4E0A\u4E86\u3002</p><p>\u6574\u4E2A\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u521B\u5EFAfiberRootNode\u3001rootFiber\u3001updateQueue\uFF08<span class="token variable"><span class="token variable">\`</span>legacyCreateRootFromDOMContainer<span class="token variable">\`</span></span>\uFF09

    <span class="token operator">|</span>
    <span class="token operator">|</span>
    <span class="token function">v</span>

\u521B\u5EFAUpdate\u5BF9\u8C61\uFF08<span class="token variable"><span class="token variable">\`</span>updateContainer<span class="token variable">\`</span></span>\uFF09

    <span class="token operator">|</span>
    <span class="token operator">|</span>
    <span class="token function">v</span>

\u4ECEfiber\u5230root\uFF08<span class="token variable"><span class="token variable">\`</span>markUpdateLaneFromFiberToRoot<span class="token variable">\`</span></span>\uFF09

    <span class="token operator">|</span>
    <span class="token operator">|</span>
    <span class="token function">v</span>

\u8C03\u5EA6\u66F4\u65B0\uFF08<span class="token variable"><span class="token variable">\`</span>ensureRootIsScheduled<span class="token variable">\`</span></span>\uFF09

    <span class="token operator">|</span>
    <span class="token operator">|</span>
    <span class="token function">v</span>

render\u9636\u6BB5\uFF08<span class="token variable"><span class="token variable">\`</span>performSyncWorkOnRoot<span class="token variable">\`</span></span> \u6216 <span class="token variable"><span class="token variable">\`</span>performConcurrentWorkOnRoot<span class="token variable">\`</span></span>\uFF09

    <span class="token operator">|</span>
    <span class="token operator">|</span>
    <span class="token function">v</span>

commit\u9636\u6BB5\uFF08<span class="token variable"><span class="token variable">\`</span>commitRoot<span class="token variable">\`</span></span>\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="react\u7684\u5176\u4ED6\u5165\u53E3\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#react\u7684\u5176\u4ED6\u5165\u53E3\u51FD\u6570" aria-hidden="true">#</a> React\u7684\u5176\u4ED6\u5165\u53E3\u51FD\u6570</h2><p>\u5F53\u524D<code>React</code>\u5171\u6709\u4E09\u79CD\u6A21\u5F0F\uFF1A</p><ul><li><p><code>legacy</code>\uFF0C\u8FD9\u662F\u5F53\u524D<code>React</code>\u4F7F\u7528\u7684\u65B9\u5F0F\u3002\u5F53\u524D\u6CA1\u6709\u8BA1\u5212\u5220\u9664\u672C\u6A21\u5F0F\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6A21\u5F0F\u53EF\u80FD\u4E0D\u652F\u6301\u4E00\u4E9B\u65B0\u529F\u80FD\u3002</p></li><li><p><code>blocking</code>\uFF0C\u5F00\u542F\u90E8\u5206<code>concurrent</code>\u6A21\u5F0F\u7279\u6027\u7684\u4E2D\u95F4\u6A21\u5F0F\u3002\u76EE\u524D\u6B63\u5728\u5B9E\u9A8C\u4E2D\u3002\u4F5C\u4E3A\u8FC1\u79FB\u5230<code>concurrent</code>\u6A21\u5F0F\u7684\u7B2C\u4E00\u4E2A\u6B65\u9AA4\u3002</p></li><li><p><code>concurrent</code>\uFF0C\u9762\u5411\u672A\u6765\u7684\u5F00\u53D1\u6A21\u5F0F\u3002\u4E4B\u524D\u8BB2\u7684<code>\u4EFB\u52A1\u4E2D\u65AD/\u4EFB\u52A1\u4F18\u5148\u7EA7</code>\u90FD\u662F\u9488\u5BF9<code>concurrent</code>\u6A21\u5F0F\u3002</p></li></ul><p>\u4F60\u53EF\u4EE5\u4ECE\u4E0B\u8868\u770B\u51FA\u5404\u79CD\u6A21\u5F0F\u5BF9\u7279\u6027\u7684\u652F\u6301\uFF1A</p>`,8),kn=n("thead",null,[n("tr",null,[n("th"),n("th",null,"legacy \u6A21\u5F0F"),n("th",null,"blocking \u6A21\u5F0F"),n("th",null,"concurrent \u6A21\u5F0F")])],-1),mn={href:"https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs",target:"_blank",rel:"noopener noreferrer"},fn=s("String Refs"),gn=n("td",null,"\u2705",-1),yn=n("td",null,"\u{1F6AB}**",-1),vn=n("td",null,"\u{1F6AB}**",-1),Rn={href:"https://zh-hans.reactjs.org/docs/legacy-context.html",target:"_blank",rel:"noopener noreferrer"},Fn=s("Legacy Context"),jn=n("td",null,"\u2705",-1),wn=n("td",null,"\u{1F6AB}**",-1),Cn=n("td",null,"\u{1F6AB}**",-1),On={href:"https://zh-hans.reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage",target:"_blank",rel:"noopener noreferrer"},xn=s("findDOMNode"),Nn=n("td",null,"\u2705",-1),Dn=n("td",null,"\u{1F6AB}**",-1),Mn=n("td",null,"\u{1F6AB}**",-1),zn={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly",target:"_blank",rel:"noopener noreferrer"},Sn=s("Suspense"),Bn=n("td",null,"\u2705",-1),En=n("td",null,"\u2705",-1),Ln=n("td",null,"\u2705",-1),Un={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#suspenselist",target:"_blank",rel:"noopener noreferrer"},An=s("SuspenseList"),Hn=n("td",null,"\u{1F6AB}",-1),In=n("td",null,"\u2705",-1),Tn=n("td",null,"\u2705",-1),qn=n("tr",null,[n("td",null,"Suspense SSR + Hydration"),n("td",null,"\u{1F6AB}"),n("td",null,"\u2705"),n("td",null,"\u2705")],-1),Qn=n("tr",null,[n("td",null,"Progressive Hydration"),n("td",null,"\u{1F6AB}"),n("td",null,"\u2705"),n("td",null,"\u2705")],-1),Vn=n("tr",null,[n("td",null,"Selective Hydration"),n("td",null,"\u{1F6AB}"),n("td",null,"\u{1F6AB}"),n("td",null,"\u2705")],-1),Pn=n("tr",null,[n("td",null,"Cooperative Multitasking"),n("td",null,"\u{1F6AB}"),n("td",null,"\u{1F6AB}"),n("td",null,"\u2705")],-1),Wn=n("tr",null,[n("td",null,"Automatic batching of multiple setStates"),n("td",null,"\u{1F6AB}*"),n("td",null,"\u2705"),n("td",null,"\u2705")],-1),$n={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#splitting-high-and-low-priority-state",target:"_blank",rel:"noopener noreferrer"},Gn=s("Priority-based Rendering"),Jn=n("td",null,"\u{1F6AB}",-1),Kn=n("td",null,"\u{1F6AB}",-1),Xn=n("td",null,"\u2705",-1),Yn={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-intro.html#interruptible-rendering",target:"_blank",rel:"noopener noreferrer"},Zn=s("Interruptible Prerendering"),ns=n("td",null,"\u{1F6AB}",-1),ss=n("td",null,"\u{1F6AB}",-1),as=n("td",null,"\u2705",-1),es={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#transitions",target:"_blank",rel:"noopener noreferrer"},ts=s("useTransition"),os=n("td",null,"\u{1F6AB}",-1),ps=n("td",null,"\u{1F6AB}",-1),rs=n("td",null,"\u2705",-1),ls={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#deferring-a-value",target:"_blank",rel:"noopener noreferrer"},cs=s("useDeferredValue"),is=n("td",null,"\u{1F6AB}",-1),us=n("td",null,"\u{1F6AB}",-1),ds=n("td",null,"\u2705",-1),bs={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#suspense-reveal-train",target:"_blank",rel:"noopener noreferrer"},_s=s('Suspense Reveal "Train"'),hs=n("td",null,"\u{1F6AB}",-1),ks=n("td",null,"\u{1F6AB}",-1),ms=n("td",null,"\u2705",-1),fs=t("<p>*\uFF1A<code>legacy</code>\u6A21\u5F0F\u5728\u5408\u6210\u4E8B\u4EF6\u4E2D\u6709\u81EA\u52A8\u6279\u5904\u7406\u7684\u529F\u80FD\uFF0C\u4F46\u4EC5\u9650\u4E8E\u4E00\u4E2A\u6D4F\u89C8\u5668\u4EFB\u52A1\u3002\u975E<code>React</code>\u4E8B\u4EF6\u60F3\u4F7F\u7528\u8FD9\u4E2A\u529F\u80FD\u5FC5\u987B\u4F7F\u7528 <code>unstable_batchedUpdates</code>\u3002\u5728<code>blocking</code>\u6A21\u5F0F\u548C<code>concurrent</code>\u6A21\u5F0F\u4E0B\uFF0C\u6240\u6709\u7684<code>setState</code>\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u90FD\u662F\u6279\u5904\u7406\u7684\u3002</p><p>**\uFF1A\u4F1A\u5728\u5F00\u53D1\u4E2D\u53D1\u51FA\u8B66\u544A\u3002</p><p>\u6A21\u5F0F\u7684\u53D8\u5316\u5F71\u54CD\u6574\u4E2A\u5E94\u7528\u7684\u5DE5\u4F5C\u65B9\u5F0F\uFF0C\u6240\u4EE5\u65E0\u6CD5\u53EA\u9488\u5BF9\u67D0\u4E2A\u7EC4\u4EF6\u5F00\u542F\u4E0D\u540C\u6A21\u5F0F\u3002</p><p>\u57FA\u4E8E\u6B64\u539F\u56E0\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0D\u540C\u7684<code>\u5165\u53E3\u51FD\u6570</code>\u5F00\u542F\u4E0D\u540C\u6A21\u5F0F\uFF1A</p><ul><li><code>legacy</code> -- <code>ReactDOM.render(&lt;App /&gt;, rootNode)</code></li><li><code>blocking</code> -- <code>ReactDOM.createBlockingRoot(rootNode).render(&lt;App /&gt;)</code></li><li><code>concurrent</code> -- <code>ReactDOM.createRoot(rootNode).render(&lt;App /&gt;)</code></li></ul>",5),gs=s("\u4F60\u53EF\u4EE5\u5728"),ys={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-adoption.html#why-so-many-modes",target:"_blank",rel:"noopener noreferrer"},vs=s("\u8FD9\u91CC"),Rs=s("\u770B\u5230"),Fs=n("code",null,"React",-1),js=s("\u56E2\u961F\u89E3\u91CA\u4E3A\u4EC0\u4E48\u4F1A\u6709\u8FD9\u4E48\u591A\u6A21\u5F0F"),ws=s("\u867D\u7136\u4E0D\u540C\u6A21\u5F0F\u7684"),Cs=n("code",null,"\u5165\u53E3\u51FD\u6570",-1),Os=s("\u4E0D\u540C\uFF0C\u4F46\u662F\u4ED6\u4EEC\u4EC5\u5BF9"),xs=n("code",null,"fiber.mode",-1),Ns=s("\u53D8\u91CF\u4EA7\u751F\u5F71\u54CD\uFF0C\u5BF9\u5728"),Ds={href:"/react/state/reactdom.md#%E6%B5%81%E7%A8%8B%E6%A6%82%E8%A7%88",target:"_blank",rel:"noopener noreferrer"},Ms=s("\u6D41\u7A0B\u6982\u89C8"),zs=s("\u4E2D\u63CF\u8FF0\u7684\u6D41\u7A0B\u5E76\u65E0\u5F71\u54CD\u3002");function Ss(o,Bs){const a=r("ExternalLinkIcon");return l(),c(i,null,[d,b,_,n("p",null,[h,n("a",k,[m,e(a)]),f,g,y,v,R,F,j,w,C,O,x,N,D]),M,n("blockquote",null,[n("p",null,[z,n("a",S,[B,e(a)]),E])]),L,n("p",null,[U,n("a",A,[H,e(a)]),I,T,q,Q,V]),n("img",{src:o.$withBase("/assets/react/fiberroot.png"),alt:"fiberRoot"},null,8,P),n("blockquote",null,[n("p",null,[W,n("a",$,[G,e(a)]),J])]),K,n("blockquote",null,[n("p",null,[X,n("a",Y,[Z,e(a)]),nn,sn,an])]),en,n("p",null,[tn,n("a",on,[pn,e(a)]),rn,ln,cn,un,dn,bn,_n]),hn,n("table",null,[kn,n("tbody",null,[n("tr",null,[n("td",null,[n("a",mn,[fn,e(a)])]),gn,yn,vn]),n("tr",null,[n("td",null,[n("a",Rn,[Fn,e(a)])]),jn,wn,Cn]),n("tr",null,[n("td",null,[n("a",On,[xn,e(a)])]),Nn,Dn,Mn]),n("tr",null,[n("td",null,[n("a",zn,[Sn,e(a)])]),Bn,En,Ln]),n("tr",null,[n("td",null,[n("a",Un,[An,e(a)])]),Hn,In,Tn]),qn,Qn,Vn,Pn,Wn,n("tr",null,[n("td",null,[n("a",$n,[Gn,e(a)])]),Jn,Kn,Xn]),n("tr",null,[n("td",null,[n("a",Yn,[Zn,e(a)])]),ns,ss,as]),n("tr",null,[n("td",null,[n("a",es,[ts,e(a)])]),os,ps,rs]),n("tr",null,[n("td",null,[n("a",ls,[cs,e(a)])]),is,us,ds]),n("tr",null,[n("td",null,[n("a",bs,[_s,e(a)])]),hs,ks,ms])])]),fs,n("blockquote",null,[n("p",null,[gs,n("a",ys,[vs,e(a)]),Rs,Fs,js])]),n("p",null,[ws,Cs,Os,xs,Ns,n("a",Ds,[Ms,e(a)]),zs])],64)}var Ls=p(u,[["render",Ss],["__file","reactdom.html.vue"]]);export{Ls as default};
