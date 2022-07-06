import{_ as p,r as c,o as r,c as l,b as n,d as a,F as i,a as o,e as s}from"./app.41d9fe5b.js";const u={},d=o(`<p>\u672C\u7AE0\u4F1A\u8BB2\u89E3<code>Fiber\u8282\u70B9</code>\u662F\u5982\u4F55\u88AB\u521B\u5EFA\u5E76\u6784\u5EFA<code>Fiber\u6811</code>\u7684\u3002</p><p><code>render\u9636\u6BB5</code>\u5F00\u59CB\u4E8E<code>performSyncWorkOnRoot</code>\u6216<code>performConcurrentWorkOnRoot</code>\u65B9\u6CD5\u7684\u8C03\u7528\u3002\u8FD9\u53D6\u51B3\u4E8E\u672C\u6B21\u66F4\u65B0\u662F\u540C\u6B65\u66F4\u65B0\u8FD8\u662F\u5F02\u6B65\u66F4\u65B0\u3002</p><p>\u73B0\u5728\u8FD8\u4E0D\u9700\u8981\u5B66\u4E60\u8FD9\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u53EA\u9700\u8981\u77E5\u9053\u5728\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u4E2D\u4F1A\u8C03\u7528\u5982\u4E0B\u4E24\u4E2A\u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// performSyncWorkOnRoot\u4F1A\u8C03\u7528\u8BE5\u65B9\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">workLoopSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// performConcurrentWorkOnRoot\u4F1A\u8C03\u7528\u8BE5\u65B9\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">workLoopConcurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">shouldYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4ED6\u4EEC\u552F\u4E00\u7684\u533A\u522B\u662F\u662F\u5426\u8C03\u7528<code>shouldYield</code>\u3002\u5982\u679C\u5F53\u524D\u6D4F\u89C8\u5668\u5E27\u6CA1\u6709\u5269\u4F59\u65F6\u95F4\uFF0C<code>shouldYield</code>\u4F1A\u4E2D\u6B62\u5FAA\u73AF\uFF0C\u76F4\u5230\u6D4F\u89C8\u5668\u6709\u7A7A\u95F2\u65F6\u95F4\u540E\u518D\u7EE7\u7EED\u904D\u5386\u3002</p><p><code>workInProgress</code>\u4EE3\u8868\u5F53\u524D\u5DF2\u521B\u5EFA\u7684<code>workInProgress fiber</code>\u3002</p><p><code>performUnitOfWork</code>\u65B9\u6CD5\u4F1A\u521B\u5EFA\u4E0B\u4E00\u4E2A<code>Fiber\u8282\u70B9</code>\u5E76\u8D4B\u503C\u7ED9<code>workInProgress</code>\uFF0C\u5E76\u5C06<code>workInProgress</code>\u4E0E\u5DF2\u521B\u5EFA\u7684<code>Fiber\u8282\u70B9</code>\u8FDE\u63A5\u8D77\u6765\u6784\u6210<code>Fiber\u6811</code>\u3002</p>`,7),b=s("\u4F60\u53EF\u4EE5\u4ECE"),k={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1599",target:"_blank",rel:"noopener noreferrer"},m=s("\u8FD9\u91CC"),h=s("\u770B\u5230"),_=n("code",null,"workLoopConcurrent",-1),f=s("\u7684\u6E90\u7801"),g=n("p",null,[s("\u77E5\u9053"),n("code",null,"Fiber Reconciler"),s("\u662F\u4ECE"),n("code",null,"Stack Reconciler"),s("\u91CD\u6784\u800C\u6765\uFF0C\u901A\u8FC7\u904D\u5386\u7684\u65B9\u5F0F\u5B9E\u73B0\u53EF\u4E2D\u65AD\u7684\u9012\u5F52\uFF0C\u6240\u4EE5"),n("code",null,"performUnitOfWork"),s("\u7684\u5DE5\u4F5C\u53EF\u4EE5\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A\u201C\u9012\u201D\u548C\u201C\u5F52\u201D\u3002")],-1),w=n("h2",{id:"\u9012-\u9636\u6BB5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9012-\u9636\u6BB5","aria-hidden":"true"},"#"),s(" \u201C\u9012\u201D\u9636\u6BB5")],-1),F=s("\u9996\u5148\u4ECE"),W=n("code",null,"rootFiber",-1),v=s("\u5F00\u59CB\u5411\u4E0B\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u3002\u4E3A\u904D\u5386\u5230\u7684\u6BCF\u4E2A"),y=n("code",null,"Fiber\u8282\u70B9",-1),x=s("\u8C03\u7528"),R={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberBeginWork.new.js#L3058",target:"_blank",rel:"noopener noreferrer"},j=s("beginWork\u65B9\u6CD5"),O=s("\u3002"),I=n("p",null,[s("\u8BE5\u65B9\u6CD5\u4F1A\u6839\u636E\u4F20\u5165\u7684"),n("code",null,"Fiber\u8282\u70B9"),s("\u521B\u5EFA"),n("code",null,"\u5B50Fiber\u8282\u70B9"),s("\uFF0C\u5E76\u5C06\u8FD9\u4E24\u4E2A"),n("code",null,"Fiber\u8282\u70B9"),s("\u8FDE\u63A5\u8D77\u6765\u3002")],-1),L=n("p",null,"\u5F53\u904D\u5386\u5230\u53F6\u5B50\u8282\u70B9\uFF08\u5373\u6CA1\u6709\u5B50\u7EC4\u4EF6\u7684\u7EC4\u4EF6\uFF09\u65F6\u5C31\u4F1A\u8FDB\u5165\u201C\u5F52\u201D\u9636\u6BB5\u3002",-1),U=n("h2",{id:"\u5F52-\u9636\u6BB5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5F52-\u9636\u6BB5","aria-hidden":"true"},"#"),s(" \u201C\u5F52\u201D\u9636\u6BB5")],-1),P=s("\u5728\u201C\u5F52\u201D\u9636\u6BB5\u4F1A\u8C03\u7528"),q={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberCompleteWork.new.js#L652",target:"_blank",rel:"noopener noreferrer"},S=s("completeWork"),B=s("\u5904\u7406"),C=n("code",null,"Fiber\u8282\u70B9",-1),A=s("\u3002"),E=o(`<p>\u5F53\u67D0\u4E2A<code>Fiber\u8282\u70B9</code>\u6267\u884C\u5B8C<code>completeWork</code>\uFF0C\u5982\u679C\u5176\u5B58\u5728<code>\u5144\u5F1FFiber\u8282\u70B9</code>\uFF08\u5373<code>fiber.sibling !== null</code>\uFF09\uFF0C\u4F1A\u8FDB\u5165\u5176<code>\u5144\u5F1FFiber</code>\u7684\u201C\u9012\u201D\u9636\u6BB5\u3002</p><p>\u5982\u679C\u4E0D\u5B58\u5728<code>\u5144\u5F1FFiber</code>\uFF0C\u4F1A\u8FDB\u5165<code>\u7236\u7EA7Fiber</code>\u7684\u201C\u5F52\u201D\u9636\u6BB5\u3002</p><p>\u201C\u9012\u201D\u548C\u201C\u5F52\u201D\u9636\u6BB5\u4F1A\u4EA4\u9519\u6267\u884C\u76F4\u5230\u201C\u5F52\u201D\u5230<code>rootFiber</code>\u3002\u81F3\u6B64\uFF0C<code>render\u9636\u6BB5</code>\u7684\u5DE5\u4F5C\u5C31\u7ED3\u675F\u4E86\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h2><p>\u4EE5\u4E0A\u4E00\u8282\u7684\u4F8B\u5B50\u4E3E\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      i am
      <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>KaSong<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5BF9\u5E94\u7684<code>Fiber\u6811</code>\u7ED3\u6784\uFF1A</p>`,7),N=["src"],T=o(`<p><code>render\u9636\u6BB5</code>\u4F1A\u4F9D\u6B21\u6267\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>. rootFiber beginWork
<span class="token number">2</span>. App Fiber beginWork
<span class="token number">3</span>. div Fiber beginWork
<span class="token number">4</span>. <span class="token string">&quot;i am&quot;</span> Fiber beginWork
<span class="token number">5</span>. <span class="token string">&quot;i am&quot;</span> Fiber completeWork
<span class="token number">6</span>. span Fiber beginWork
<span class="token number">7</span>. span Fiber completeWork
<span class="token number">8</span>. div Fiber completeWork
<span class="token number">9</span>. App Fiber completeWork
<span class="token number">10</span>. rootFiber completeWork
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>warning \u6CE8\u610F \u4E4B\u6240\u4EE5\u6CA1\u6709 \u201CKaSong\u201D Fiber \u7684 beginWork/completeWork\uFF0C\u662F\u56E0\u4E3A\u4F5C\u4E3A\u4E00\u79CD\u6027\u80FD\u4F18\u5316\u624B\u6BB5\uFF0C\u9488\u5BF9\u53EA\u6709\u5355\u4E00\u6587\u672C\u5B50\u8282\u70B9\u7684<code>Fiber</code>\uFF0C<code>React</code>\u4F1A\u7279\u6B8A\u5904\u7406\u3002</p><p>details \u81EA\u5DF1\u8BD5\u4E00\u8BD5 Demo \u5728<code>beginWork</code>\u548C<code>completeWork</code>\u8C03\u7528\u65F6\u6253\u5370<code>fiber.tag</code>\u548C<code>fiber.type</code>\u3002</p>`,4),V=s("\u4F60\u53EF\u4EE5\u4ECE"),Y={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactWorkTags.js",target:"_blank",rel:"noopener noreferrer"},D=s("ReactWorkTags.js"),K=s("\u770B\u5230"),M=n("code",null,"Fiber\u8282\u70B9",-1),$=s("\u7684\u6240\u6709"),z=n("code",null,"tag",-1),G=s("\u5B9A\u4E49\u3002"),H=n("p",null,"\u76F8\u4FE1\u591A\u8C03\u8BD5\u51E0\u6B21\uFF0C\u4F60\u4E00\u5B9A\u80FD\u660E\u767D\u65B9\u6CD5\u7684\u8C03\u7528\u987A\u5E8F",-1),J={href:"https://codesandbox.io/s/beginwork-completework-forked-m317y",target:"_blank",rel:"noopener noreferrer"},Q=s("\u9012\u5F52\u8C03\u7528\u7684\u987A\u5E8F"),X=o(`<p>details performUnitOfWork \u7684\u9012\u5F52\u7248\u672C</p><p>\u5982\u679C\u5C06<code>performUnitOfWork</code>\u8F6C\u5316\u4E3A\u9012\u5F52\u7248\u672C\uFF0C\u5927\u4F53\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span><span class="token parameter">fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6267\u884CbeginWork</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>fiber<span class="token punctuation">.</span>child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>fiber<span class="token punctuation">.</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6267\u884CcompleteWork</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>fiber<span class="token punctuation">.</span>sibling<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>fiber<span class="token punctuation">.</span>sibling<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u672C\u8282\u4ECB\u7ECD\u4E86<code>render\u9636\u6BB5</code>\u4F1A\u8C03\u7528\u7684\u65B9\u6CD5\u3002\u5728\u63A5\u4E0B\u6765\u4E24\u8282\u4E2D\uFF0C\u4F1A\u8BB2\u89E3<code>beginWork</code>\u548C<code>completeWork</code>\u505A\u7684\u5177\u4F53\u5DE5\u4F5C\u3002</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,6),Z={href:"https://indepth.dev/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-to-walk-the-components-tree/",target:"_blank",rel:"noopener noreferrer"},nn=s("The how and why on React\u2019s usage of linked list in Fiber to walk the component\u2019s tree"),sn={href:"https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/",target:"_blank",rel:"noopener noreferrer"},en=s("Inside Fiber: in-depth overview of the new reconciliation algorithm in React");function an(t,on){const e=c("ExternalLinkIcon");return r(),l(i,null,[d,n("blockquote",null,[n("p",null,[b,n("a",k,[m,a(e)]),h,_,f])]),g,w,n("p",null,[F,W,v,y,x,n("a",R,[j,a(e)]),O]),I,L,U,n("p",null,[P,n("a",q,[S,a(e)]),B,C,A]),E,n("img",{src:t.$withBase("/assets/react/fiber.png"),alt:"Fiber\u67B6\u6784"},null,8,N),T,n("p",null,[V,n("a",Y,[D,a(e)]),K,M,$,z,G]),H,n("p",null,[n("a",J,[Q,a(e)])]),X,n("p",null,[n("a",Z,[nn,a(e)])]),n("p",null,[n("a",sn,[en,a(e)])])],64)}var pn=p(u,[["render",an],["__file","reconciler.html.vue"]]);export{pn as default};
