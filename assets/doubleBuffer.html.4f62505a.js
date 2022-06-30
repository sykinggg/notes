import{_ as d,r,o as p,c as i,b as e,d as c,w as l,F as u,a as n,e as o}from"./app.dce02100.js";const b={},k=n('<p>\u901A\u8FC7\u4E0A\u4E00\u8282\u7684\u5B66\u4E60\uFF0C\u4E86\u89E3\u4E86<code>Fiber</code>\u662F\u4EC0\u4E48\uFF0C\u77E5\u9053<code>Fiber\u8282\u70B9</code>\u53EF\u4EE5\u4FDD\u5B58\u5BF9\u5E94\u7684<code>DOM\u8282\u70B9</code>\u3002</p><p>\u76F8\u5E94\u7684\uFF0C<code>Fiber\u8282\u70B9</code>\u6784\u6210\u7684<code>Fiber\u6811</code>\u5C31\u5BF9\u5E94<code>DOM\u6811</code>\u3002</p><p>\u90A3\u4E48\u5982\u4F55\u66F4\u65B0<code>DOM</code>\u5462\uFF1F\u8FD9\u9700\u8981\u7528\u5230\u88AB\u79F0\u4E3A\u201C\u53CC\u7F13\u5B58\u201D\u7684\u6280\u672F\u3002</p><h2 id="\u4EC0\u4E48\u662F-\u53CC\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-\u53CC\u7F13\u5B58" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u201C\u53CC\u7F13\u5B58\u201D</h2><p>\u5F53\u7528<code>canvas</code>\u7ED8\u5236\u52A8\u753B\uFF0C\u6BCF\u4E00\u5E27\u7ED8\u5236\u524D\u90FD\u4F1A\u8C03\u7528<code>ctx.clearRect</code>\u6E05\u9664\u4E0A\u4E00\u5E27\u7684\u753B\u9762\u3002</p><p>\u5982\u679C\u5F53\u524D\u5E27\u753B\u9762\u8BA1\u7B97\u91CF\u6BD4\u8F83\u5927\uFF0C\u5BFC\u81F4\u6E05\u9664\u4E0A\u4E00\u5E27\u753B\u9762\u5230\u7ED8\u5236\u5F53\u524D\u5E27\u753B\u9762\u4E4B\u95F4\u6709\u8F83\u957F\u95F4\u9699\uFF0C\u5C31\u4F1A\u51FA\u73B0\u767D\u5C4F\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u53EF\u4EE5\u5728\u5185\u5B58\u4E2D\u7ED8\u5236\u5F53\u524D\u5E27\u52A8\u753B\uFF0C\u7ED8\u5236\u5B8C\u6BD5\u540E\u76F4\u63A5\u7528\u5F53\u524D\u5E27\u66FF\u6362\u4E0A\u4E00\u5E27\u753B\u9762\uFF0C\u7531\u4E8E\u7701\u53BB\u4E86\u4E24\u5E27\u66FF\u6362\u95F4\u7684\u8BA1\u7B97\u65F6\u95F4\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u4ECE\u767D\u5C4F\u5230\u51FA\u73B0\u753B\u9762\u7684\u95EA\u70C1\u60C5\u51B5\u3002</p>',7),h=o("\u8FD9\u79CD"),_=e("strong",null,"\u5728\u5185\u5B58\u4E2D\u6784\u5EFA\u5E76\u76F4\u63A5\u66FF\u6362",-1),F=o("\u7684\u6280\u672F\u53EB\u505A"),m={href:"https://baike.baidu.com/item/%E5%8F%8C%E7%BC%93%E5%86%B2",target:"_blank",rel:"noopener noreferrer"},g=o("\u53CC\u7F13\u5B58"),f=o("\u3002"),w=n(`<p><code>React</code>\u4F7F\u7528\u201C\u53CC\u7F13\u5B58\u201D\u6765\u5B8C\u6210<code>Fiber\u6811</code>\u7684\u6784\u5EFA\u4E0E\u66FF\u6362\u2014\u2014\u5BF9\u5E94\u7740<code>DOM\u6811</code>\u7684\u521B\u5EFA\u4E0E\u66F4\u65B0\u3002</p><h2 id="\u53CC\u7F13\u5B58fiber\u6811" tabindex="-1"><a class="header-anchor" href="#\u53CC\u7F13\u5B58fiber\u6811" aria-hidden="true">#</a> \u53CC\u7F13\u5B58Fiber\u6811</h2><p>\u5728<code>React</code>\u4E2D\u6700\u591A\u4F1A\u540C\u65F6\u5B58\u5728\u4E24\u68F5<code>Fiber\u6811</code>\u3002\u5F53\u524D\u5C4F\u5E55\u4E0A\u663E\u793A\u5185\u5BB9\u5BF9\u5E94\u7684<code>Fiber\u6811</code>\u79F0\u4E3A<code>current Fiber\u6811</code>\uFF0C\u6B63\u5728\u5185\u5B58\u4E2D\u6784\u5EFA\u7684<code>Fiber\u6811</code>\u79F0\u4E3A<code>workInProgress Fiber\u6811</code>\u3002</p><p><code>current Fiber\u6811</code>\u4E2D\u7684<code>Fiber\u8282\u70B9</code>\u88AB\u79F0\u4E3A<code>current fiber</code>\uFF0C<code>workInProgress Fiber\u6811</code>\u4E2D\u7684<code>Fiber\u8282\u70B9</code>\u88AB\u79F0\u4E3A<code>workInProgress fiber</code>\uFF0C\u4ED6\u4EEC\u901A\u8FC7<code>alternate</code>\u5C5E\u6027\u8FDE\u63A5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>currentFiber<span class="token punctuation">.</span>alternate <span class="token operator">===</span> workInProgressFiber<span class="token punctuation">;</span>
workInProgressFiber<span class="token punctuation">.</span>alternate <span class="token operator">===</span> currentFiber<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>React</code>\u5E94\u7528\u7684\u6839\u8282\u70B9\u901A\u8FC7\u4F7F<code>current</code>\u6307\u9488\u5728\u4E0D\u540C<code>Fiber\u6811</code>\u7684<code>rootFiber</code>\u95F4\u5207\u6362\u6765\u5B8C\u6210<code>current Fiber</code>\u6811\u6307\u5411\u7684\u5207\u6362\u3002</p><p>\u5373\u5F53<code>workInProgress Fiber\u6811</code>\u6784\u5EFA\u5B8C\u6210\u4EA4\u7ED9<code>Renderer</code>\u6E32\u67D3\u5728\u9875\u9762\u4E0A\u540E\uFF0C\u5E94\u7528\u6839\u8282\u70B9\u7684<code>current</code>\u6307\u9488\u6307\u5411<code>workInProgress Fiber\u6811</code>\uFF0C\u6B64\u65F6<code>workInProgress Fiber\u6811</code>\u5C31\u53D8\u4E3A<code>current Fiber\u6811</code>\u3002</p><p>\u6BCF\u6B21\u72B6\u6001\u66F4\u65B0\u90FD\u4F1A\u4EA7\u751F\u65B0\u7684<code>workInProgress Fiber\u6811</code>\uFF0C\u901A\u8FC7<code>current</code>\u4E0E<code>workInProgress</code>\u7684\u66FF\u6362\uFF0C\u5B8C\u6210<code>DOM</code>\u66F4\u65B0\u3002</p><p>\u63A5\u4E0B\u6765\u4EE5\u5177\u4F53\u4F8B\u5B50\u8BB2\u89E3<code>mount\u65F6</code>\u3001<code>update\u65F6</code>\u7684\u6784\u5EFA/\u66FF\u6362\u6D41\u7A0B\u3002</p><h2 id="mount\u65F6" tabindex="-1"><a class="header-anchor" href="#mount\u65F6" aria-hidden="true">#</a> mount\u65F6</h2><p>\u8003\u8651\u5982\u4E0B\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> add<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>p onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">add</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol><li>\u9996\u6B21\u6267\u884C<code>ReactDOM.render</code>\u4F1A\u521B\u5EFA<code>fiberRootNode</code>\uFF08\u6E90\u7801\u4E2D\u53EB<code>fiberRoot</code>\uFF09\u548C<code>rootFiber</code>\u3002\u5176\u4E2D<code>fiberRootNode</code>\u662F\u6574\u4E2A\u5E94\u7528\u7684\u6839\u8282\u70B9\uFF0C<code>rootFiber</code>\u662F<code>&lt;App/&gt;</code>\u6240\u5728\u7EC4\u4EF6\u6811\u7684\u6839\u8282\u70B9\u3002</li></ol><p>\u4E4B\u6240\u4EE5\u8981\u533A\u5206<code>fiberRootNode</code>\u4E0E<code>rootFiber</code>\uFF0C\u662F\u56E0\u4E3A\u5728\u5E94\u7528\u4E2D\u53EF\u4EE5\u591A\u6B21\u8C03\u7528<code>ReactDOM.render</code>\u6E32\u67D3\u4E0D\u540C\u7684\u7EC4\u4EF6\u6811\uFF0C\u4ED6\u4EEC\u4F1A\u62E5\u6709\u4E0D\u540C\u7684<code>rootFiber</code>\u3002\u4F46\u662F\u6574\u4E2A\u5E94\u7528\u7684\u6839\u8282\u70B9\u53EA\u6709\u4E00\u4E2A\uFF0C\u90A3\u5C31\u662F<code>fiberRootNode</code>\u3002</p><p><code>fiberRootNode</code>\u7684<code>current</code>\u4F1A\u6307\u5411\u5F53\u524D\u9875\u9762\u4E0A\u5DF2\u6E32\u67D3\u5185\u5BB9\u5BF9\u5E94<code>Fiber\u6811</code>\uFF0C\u5373<code>current Fiber\u6811</code>\u3002</p>`,15),I=["src"],P=n(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fiberRootNode<span class="token punctuation">.</span>current <span class="token operator">=</span> rootFiber<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7531\u4E8E\u662F\u9996\u5C4F\u6E32\u67D3\uFF0C\u9875\u9762\u4E2D\u8FD8\u6CA1\u6709\u6302\u8F7D\u4EFB\u4F55<code>DOM</code>\uFF0C\u6240\u4EE5<code>fiberRootNode.current</code>\u6307\u5411\u7684<code>rootFiber</code>\u6CA1\u6709\u4EFB\u4F55<code>\u5B50Fiber\u8282\u70B9</code>\uFF08\u5373<code>current Fiber\u6811</code>\u4E3A\u7A7A\uFF09\u3002</p><ol><li>\u63A5\u4E0B\u6765\u8FDB\u5165<code>render\u9636\u6BB5</code>\uFF0C\u6839\u636E\u7EC4\u4EF6\u8FD4\u56DE\u7684<code>JSX</code>\u5728\u5185\u5B58\u4E2D\u4F9D\u6B21\u521B\u5EFA<code>Fiber\u8282\u70B9</code>\u5E76\u8FDE\u63A5\u5728\u4E00\u8D77\u6784\u5EFA<code>Fiber\u6811</code>\uFF0C\u88AB\u79F0\u4E3A<code>workInProgress Fiber\u6811</code>\u3002\uFF08\u4E0B\u56FE\u4E2D\u53F3\u4FA7\u4E3A\u5185\u5B58\u4E2D\u6784\u5EFA\u7684\u6811\uFF0C\u5DE6\u4FA7\u4E3A\u9875\u9762\u663E\u793A\u7684\u6811\uFF09</li></ol><p>\u5728\u6784\u5EFA<code>workInProgress Fiber\u6811</code>\u65F6\u4F1A\u5C1D\u8BD5\u590D\u7528<code>current Fiber\u6811</code>\u4E2D\u5DF2\u6709\u7684<code>Fiber\u8282\u70B9</code>\u5185\u7684\u5C5E\u6027\uFF0C\u5728<code>\u9996\u5C4F\u6E32\u67D3</code>\u65F6\u53EA\u6709<code>rootFiber</code>\u5B58\u5728\u5BF9\u5E94\u7684<code>current fiber</code>\uFF08\u5373<code>rootFiber.alternate</code>\uFF09\u3002</p>`,4),v=["src"],R=n("<ol><li>\u56FE\u4E2D\u53F3\u4FA7\u5DF2\u6784\u5EFA\u5B8C\u7684<code>workInProgress Fiber\u6811</code>\u5728<code>commit\u9636\u6BB5</code>\u6E32\u67D3\u5230\u9875\u9762\u3002</li></ol><p>\u6B64\u65F6<code>DOM</code>\u66F4\u65B0\u4E3A\u53F3\u4FA7\u6811\u5BF9\u5E94\u7684\u6837\u5B50\u3002<code>fiberRootNode</code>\u7684<code>current</code>\u6307\u9488\u6307\u5411<code>workInProgress Fiber\u6811</code>\u4F7F\u5176\u53D8\u4E3A<code>current Fiber \u6811</code>\u3002</p>",2),D=["src"],x=e("h2",{id:"update\u65F6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#update\u65F6","aria-hidden":"true"},"#"),o(" update\u65F6")],-1),B=e("ol",null,[e("li",null,[o("\u63A5\u4E0B\u6765\u70B9\u51FB"),e("code",null,"p\u8282\u70B9"),o("\u89E6\u53D1\u72B6\u6001\u6539\u53D8\uFF0C\u8FD9\u4F1A\u5F00\u542F\u4E00\u6B21\u65B0\u7684"),e("code",null,"render\u9636\u6BB5"),o("\u5E76\u6784\u5EFA\u4E00\u68F5\u65B0\u7684"),e("code",null,"workInProgress Fiber \u6811"),o("\u3002")])],-1),N=["src"],M=n("<p>\u548C<code>mount</code>\u65F6\u4E00\u6837\uFF0C<code>workInProgress fiber</code>\u7684\u521B\u5EFA\u53EF\u4EE5\u590D\u7528<code>current Fiber\u6811</code>\u5BF9\u5E94\u7684\u8282\u70B9\u6570\u636E\u3002</p><blockquote><p>\u8FD9\u4E2A\u51B3\u5B9A\u662F\u5426\u590D\u7528\u7684\u8FC7\u7A0B\u5C31\u662FDiff\u7B97\u6CD5\uFF0C\u540E\u9762\u7AE0\u8282\u4F1A\u8BE6\u7EC6\u8BB2\u89E3</p></blockquote><ol><li><code>workInProgress Fiber \u6811</code>\u5728<code>render\u9636\u6BB5</code>\u5B8C\u6210\u6784\u5EFA\u540E\u8FDB\u5165<code>commit\u9636\u6BB5</code>\u6E32\u67D3\u5230\u9875\u9762\u4E0A\u3002\u6E32\u67D3\u5B8C\u6BD5\u540E\uFF0C<code>workInProgress Fiber \u6811</code>\u53D8\u4E3A<code>current Fiber \u6811</code>\u3002</li></ol>",3),O=["src"],j=e("h2",{id:"\u603B\u7ED3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u603B\u7ED3","aria-hidden":"true"},"#"),o(" \u603B\u7ED3")],-1),E=e("p",null,[o("\u672C\u6587\u4ECB\u7ECD\u4E86"),e("code",null,"Fiber\u6811"),o("\u7684\u6784\u5EFA\u4E0E\u66FF\u6362\u8FC7\u7A0B\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u4F34\u968F\u7740"),e("code",null,"DOM"),o("\u7684\u66F4\u65B0\u3002")],-1),T=o("\u90A3\u4E48\u5728\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u6BCF\u4E2A"),C=e("code",null,"Fiber\u8282\u70B9",-1),$=o("\u5177\u4F53\u662F\u5982\u4F55\u521B\u5EFA\u7684\u5462\uFF1F\u4F1A\u5728"),y=e("code",null,"\u67B6\u6784\u7BC7",-1),L=o("\u7684"),U=o("render\u9636\u6BB5"),V=o("\u8BB2\u89E3\u3002"),q=n('<h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2><p>details Fiber\u6811\u7684\u521B\u5EFA\u4E0E\u5207\u6362Demo</p><p>\u6B64<code>Demo</code>\u4F1A\u5728\u5982\u4E0B\u65F6\u673A\u5728\u63A7\u5236\u53F0\u6253\u5370\u4FE1\u606F\uFF1A</p><ul><li><p>\u6784\u5EFA<code>WorkInProgrss Fiber</code>\u65F6</p></li><li><p>\u5728\u6E32\u67D3\u5B8C\u6BD5\u540E\uFF0C<code>workInProgress Fiber \u6811</code>\u53D8\u4E3A<code>current Fiber \u6811</code>\u65F6</p></li></ul>',4),A={href:"https://codesandbox.io/s/fiber-switch-forked-qbn9r",target:"_blank",rel:"noopener noreferrer"},S=o("demo");function J(s,W){const a=r("ExternalLinkIcon"),t=r("RouterLink");return p(),i(u,null,[k,e("p",null,[h,_,F,e("a",m,[g,c(a)]),f]),w,e("img",{src:s.$withBase("/assets/react/rootfiber.png"),alt:"rootFiber"},null,8,I),P,e("img",{src:s.$withBase("/assets/react/workInProgressFiber.png"),alt:"workInProgressFiber"},null,8,v),R,e("img",{src:s.$withBase("/assets/react/wipTreeFinish.png"),alt:"workInProgressFiberFinish"},null,8,D),x,B,e("img",{src:s.$withBase("/assets/react/wipTreeUpdate.png"),alt:"wipTreeUpdate"},null,8,N),M,e("img",{src:s.$withBase("/assets/react/currentTreeUpdate.png"),alt:"currentTreeUpdate"},null,8,O),j,E,e("p",null,[T,C,$,y,L,c(t,{to:"/react/process/react/process/reconciler.html"},{default:l(()=>[U]),_:1}),V]),q,e("p",null,[e("a",A,[S,c(a)])])],64)}var z=d(b,[["render",J],["__file","doubleBuffer.html.vue"]]);export{z as default};
