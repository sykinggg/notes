import{r as o,o as l,c as r,a as s,d as a,w as i,F as u,b as n,e as p}from"./app.f4829677.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";const d={},b=n("\u5728"),m={href:"/react/preparation/newConstructure.md",target:"_blank",rel:"noopener noreferrer"},h=n("\u65B0\u7684React\u67B6\u6784\u4E00\u8282"),_=n("\u4E2D\uFF0C\u63D0\u5230\u7684"),y=s("strong",null,"\u865A\u62DFDOM",-1),w=n("\u5728"),f=s("code",null,"React",-1),g=n("\u4E2D\u6709\u4E2A\u6B63\u5F0F\u7684\u79F0\u547C\u2014\u2014"),v=s("code",null,"Fiber",-1),F=n("\u3002\u5728\u4E4B\u540E\u7684\u5B66\u4E60\u4E2D\uFF0C\u4F1A\u9010\u6E10\u7528"),x=s("code",null,"Fiber",-1),R=n("\u6765\u53D6\u4EE3"),j=s("strong",null,"React16\u865A\u62DFDOM",-1),N=n("\u8FD9\u4E00\u79F0\u547C\u3002"),C=s("p",null,[n("\u63A5\u4E0B\u6765\u8BA9\u4E86\u89E3\u4E0B"),s("code",null,"Fiber"),n("\u56E0\u4F55\u800C\u6765\uFF1F\u4ED6\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F")],-1),L=s("h2",{id:"fiber\u7684\u8D77\u6E90",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#fiber\u7684\u8D77\u6E90","aria-hidden":"true"},"#"),n(" Fiber\u7684\u8D77\u6E90")],-1),E=n("\u6700\u65E9\u7684"),M=s("code",null,"Fiber",-1),O=n("\u5B98\u65B9\u89E3\u91CA\u6765\u6E90\u4E8E"),D={href:"https://github.com/acdlite/react-fiber-architecture",target:"_blank",rel:"noopener noreferrer"},T=n("2016\u5E74React\u56E2\u961F\u6210\u5458Acdlite\u7684\u4E00\u7BC7\u4ECB\u7ECD"),P=n("\u3002"),B=p('<p>\u4ECE\u4E0A\u4E00\u7AE0\u7684\u5B66\u4E60\u77E5\u9053\uFF1A</p><p>\u5728<code>React15</code>\u53CA\u4EE5\u524D\uFF0C<code>Reconciler</code>\u91C7\u7528\u9012\u5F52\u7684\u65B9\u5F0F\u521B\u5EFA\u865A\u62DFDOM\uFF0C\u9012\u5F52\u8FC7\u7A0B\u662F\u4E0D\u80FD\u4E2D\u65AD\u7684\u3002\u5982\u679C\u7EC4\u4EF6\u6811\u7684\u5C42\u7EA7\u5F88\u6DF1\uFF0C\u9012\u5F52\u4F1A\u5360\u7528\u7EBF\u7A0B\u5F88\u591A\u65F6\u95F4\uFF0C\u9020\u6210\u5361\u987F\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C<code>React16</code>\u5C06<strong>\u9012\u5F52\u7684\u65E0\u6CD5\u4E2D\u65AD\u7684\u66F4\u65B0</strong>\u91CD\u6784\u4E3A<strong>\u5F02\u6B65\u7684\u53EF\u4E2D\u65AD\u66F4\u65B0</strong>\uFF0C\u7531\u4E8E\u66FE\u7ECF\u7528\u4E8E\u9012\u5F52\u7684<strong>\u865A\u62DFDOM</strong>\u6570\u636E\u7ED3\u6784\u5DF2\u7ECF\u65E0\u6CD5\u6EE1\u8DB3\u9700\u8981\u3002\u4E8E\u662F\uFF0C\u5168\u65B0\u7684<code>Fiber</code>\u67B6\u6784\u5E94\u8FD0\u800C\u751F\u3002</p><h2 id="fiber\u7684\u542B\u4E49" tabindex="-1"><a class="header-anchor" href="#fiber\u7684\u542B\u4E49" aria-hidden="true">#</a> Fiber\u7684\u542B\u4E49</h2><p><code>Fiber</code>\u5305\u542B\u4E09\u5C42\u542B\u4E49\uFF1A</p><ol><li><p>\u4F5C\u4E3A\u67B6\u6784\u6765\u8BF4\uFF0C\u4E4B\u524D<code>React15</code>\u7684<code>Reconciler</code>\u91C7\u7528\u9012\u5F52\u7684\u65B9\u5F0F\u6267\u884C\uFF0C\u6570\u636E\u4FDD\u5B58\u5728\u9012\u5F52\u8C03\u7528\u6808\u4E2D\uFF0C\u6240\u4EE5\u88AB\u79F0\u4E3A<code>stack Reconciler</code>\u3002<code>React16</code>\u7684<code>Reconciler</code>\u57FA\u4E8E<code>Fiber\u8282\u70B9</code>\u5B9E\u73B0\uFF0C\u88AB\u79F0\u4E3A<code>Fiber Reconciler</code>\u3002</p></li><li><p>\u4F5C\u4E3A\u9759\u6001\u7684\u6570\u636E\u7ED3\u6784\u6765\u8BF4\uFF0C\u6BCF\u4E2A<code>Fiber\u8282\u70B9</code>\u5BF9\u5E94\u4E00\u4E2A<code>React element</code>\uFF0C\u4FDD\u5B58\u4E86\u8BE5\u7EC4\u4EF6\u7684\u7C7B\u578B\uFF08\u51FD\u6570\u7EC4\u4EF6/\u7C7B\u7EC4\u4EF6/\u539F\u751F\u7EC4\u4EF6...\uFF09\u3001\u5BF9\u5E94\u7684DOM\u8282\u70B9\u7B49\u4FE1\u606F\u3002</p></li><li><p>\u4F5C\u4E3A\u52A8\u6001\u7684\u5DE5\u4F5C\u5355\u5143\u6765\u8BF4\uFF0C\u6BCF\u4E2A<code>Fiber\u8282\u70B9</code>\u4FDD\u5B58\u4E86\u672C\u6B21\u66F4\u65B0\u4E2D\u8BE5\u7EC4\u4EF6\u6539\u53D8\u7684\u72B6\u6001\u3001\u8981\u6267\u884C\u7684\u5DE5\u4F5C\uFF08\u9700\u8981\u88AB\u5220\u9664/\u88AB\u63D2\u5165\u9875\u9762\u4E2D/\u88AB\u66F4\u65B0...\uFF09\u3002</p></li></ol><h2 id="fiber\u7684\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#fiber\u7684\u7ED3\u6784" aria-hidden="true">#</a> Fiber\u7684\u7ED3\u6784</h2>',7),S=n("\u4F60\u53EF\u4EE5\u4ECE\u8FD9\u91CC\u770B\u5230"),V={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiber.new.js#L117",target:"_blank",rel:"noopener noreferrer"},z=n("Fiber\u8282\u70B9\u7684\u5C5E\u6027\u5B9A\u4E49"),q=n("\u3002\u867D\u7136\u5C5E\u6027\u5F88\u591A\uFF0C\u4F46\u53EF\u4EE5\u6309\u4E09\u5C42\u542B\u4E49\u5C06\u4ED6\u4EEC\u5206\u7C7B\u6765\u770B"),A=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">FiberNode</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">tag</span><span class="token operator">:</span> WorkTag<span class="token punctuation">,</span>
  <span class="token literal-property property">pendingProps</span><span class="token operator">:</span> mixed<span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> TypeOfMode<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4F5C\u4E3A\u9759\u6001\u6570\u636E\u7ED3\u6784\u7684\u5C5E\u6027</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">=</span> tag<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>elementType <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>stateNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7528\u4E8E\u8FDE\u63A5\u5176\u4ED6Fiber\u8282\u70B9\u5F62\u6210Fiber\u6811</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>return <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>sibling <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>ref <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// \u4F5C\u4E3A\u52A8\u6001\u7684\u5DE5\u4F5C\u5355\u5143\u7684\u5C5E\u6027</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>pendingProps <span class="token operator">=</span> pendingProps<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>memoizedProps <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>dependencies <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>mode <span class="token operator">=</span> mode<span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>effectTag <span class="token operator">=</span> NoEffect<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>nextEffect <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>firstEffect <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>lastEffect <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// \u8C03\u5EA6\u4F18\u5148\u7EA7\u76F8\u5173</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>lanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>childLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span>

  <span class="token comment">// \u6307\u5411\u8BE5fiber\u5728\u53E6\u4E00\u6B21\u66F4\u65B0\u65F6\u5BF9\u5E94\u7684fiber</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>alternate <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="\u4F5C\u4E3A\u67B6\u6784\u6765\u8BF4" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E3A\u67B6\u6784\u6765\u8BF4" aria-hidden="true">#</a> \u4F5C\u4E3A\u67B6\u6784\u6765\u8BF4</h3><p>\u6BCF\u4E2AFiber\u8282\u70B9\u6709\u4E2A\u5BF9\u5E94\u7684<code>React element</code>\uFF0C\u591A\u4E2A<code>Fiber\u8282\u70B9</code>\u662F\u5982\u4F55\u8FDE\u63A5\u5F62\u6210\u6811\u5462\uFF1F\u9760\u5982\u4E0B\u4E09\u4E2A\u5C5E\u6027\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6307\u5411\u7236\u7EA7Fiber\u8282\u70B9</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>return <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// \u6307\u5411\u5B50Fiber\u8282\u70B9</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// \u6307\u5411\u53F3\u8FB9\u7B2C\u4E00\u4E2A\u5144\u5F1FFiber\u8282\u70B9</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>sibling <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5982\u4E0B\u7684\u7EC4\u4EF6\u7ED3\u6784\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      i am
      <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>KaSong<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5BF9\u5E94\u7684<code>Fiber\u6811</code>\u7ED3\u6784\uFF1A</p>`,7),I=["src"],H=p(`<blockquote><p>\u8FD9\u91CC\u9700\u8981\u63D0\u4E00\u4E0B\uFF0C\u4E3A\u4EC0\u4E48\u7236\u7EA7\u6307\u9488\u53EB\u505A<code>return</code>\u800C\u4E0D\u662F<code>parent</code>\u6216\u8005<code>father</code>\u5462\uFF1F\u56E0\u4E3A\u4F5C\u4E3A\u4E00\u4E2A\u5DE5\u4F5C\u5355\u5143\uFF0C<code>return</code>\u6307\u8282\u70B9\u6267\u884C\u5B8C<code>completeWork</code>\uFF08\u672C\u7AE0\u540E\u9762\u4F1A\u4ECB\u7ECD\uFF09\u540E\u4F1A\u8FD4\u56DE\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\u3002\u5B50<code>Fiber\u8282\u70B9</code>\u53CA\u5176\u5144\u5F1F\u8282\u70B9\u5B8C\u6210\u5DE5\u4F5C\u540E\u4F1A\u8FD4\u56DE\u5176\u7236\u7EA7\u8282\u70B9\uFF0C\u6240\u4EE5\u7528<code>return</code>\u6307\u4EE3\u7236\u7EA7\u8282\u70B9\u3002</p></blockquote><h3 id="\u4F5C\u4E3A\u9759\u6001\u7684\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E3A\u9759\u6001\u7684\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u4F5C\u4E3A\u9759\u6001\u7684\u6570\u636E\u7ED3\u6784</h3><p>\u4F5C\u4E3A\u4E00\u79CD\u9759\u6001\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u4FDD\u5B58\u4E86\u7EC4\u4EF6\u76F8\u5173\u7684\u4FE1\u606F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Fiber\u5BF9\u5E94\u7EC4\u4EF6\u7684\u7C7B\u578B Function/Class/Host...</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">=</span> tag<span class="token punctuation">;</span>
<span class="token comment">// key\u5C5E\u6027</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span>
<span class="token comment">// \u5927\u90E8\u5206\u60C5\u51B5\u540Ctype\uFF0C\u67D0\u4E9B\u60C5\u51B5\u4E0D\u540C\uFF0C\u6BD4\u5982FunctionComponent\u4F7F\u7528React.memo\u5305\u88F9</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>elementType <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// \u5BF9\u4E8E FunctionComponent\uFF0C\u6307\u51FD\u6570\u672C\u8EAB\uFF0C\u5BF9\u4E8EClassComponent\uFF0C\u6307class\uFF0C\u5BF9\u4E8EHostComponent\uFF0C\u6307DOM\u8282\u70B9tagName</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// Fiber\u5BF9\u5E94\u7684\u771F\u5B9EDOM\u8282\u70B9</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>stateNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u4F5C\u4E3A\u52A8\u6001\u7684\u5DE5\u4F5C\u5355\u5143" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E3A\u52A8\u6001\u7684\u5DE5\u4F5C\u5355\u5143" aria-hidden="true">#</a> \u4F5C\u4E3A\u52A8\u6001\u7684\u5DE5\u4F5C\u5355\u5143</h3><p>\u4F5C\u4E3A\u52A8\u6001\u7684\u5DE5\u4F5C\u5355\u5143\uFF0C<code>Fiber</code>\u4E2D\u5982\u4E0B\u53C2\u6570\u4FDD\u5B58\u4E86\u672C\u6B21\u66F4\u65B0\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u4F1A\u5728\u540E\u7EED\u7684\u66F4\u65B0\u6D41\u7A0B\u4E2D\u4F7F\u7528\u5230\u5177\u4F53\u5C5E\u6027\u65F6\u518D\u8BE6\u7EC6\u4ECB\u7ECD</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token comment">// \u4FDD\u5B58\u672C\u6B21\u66F4\u65B0\u9020\u6210\u7684\u72B6\u6001\u6539\u53D8\u76F8\u5173\u4FE1\u606F</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>pendingProps <span class="token operator">=</span> pendingProps<span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>memoizedProps <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>dependencies <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>mode <span class="token operator">=</span> mode<span class="token punctuation">;</span>

<span class="token comment">// \u4FDD\u5B58\u672C\u6B21\u66F4\u65B0\u4F1A\u9020\u6210\u7684DOM\u64CD\u4F5C</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>effectTag <span class="token operator">=</span> NoEffect<span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>nextEffect <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>firstEffect <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>lastEffect <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5982\u4E0B\u4E24\u4E2A\u5B57\u6BB5\u4FDD\u5B58\u8C03\u5EA6\u4F18\u5148\u7EA7\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u4F1A\u5728\u8BB2\u89E3<code>Scheduler</code>\u65F6\u4ECB\u7ECD\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8C03\u5EA6\u4F18\u5148\u7EA7\u76F8\u5173</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>lanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>childLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,9),Q=n("warning \u6CE8\u610F \u57282020\u5E745\u6708\uFF0C\u8C03\u5EA6\u4F18\u5148\u7EA7\u7B56\u7565\u7ECF\u5386\u4E86\u6BD4\u8F83\u5927\u7684\u91CD\u6784\u3002\u4EE5"),W=s("code",null,"expirationTime",-1),K=n("\u5C5E\u6027\u4E3A\u4EE3\u8868\u7684\u4F18\u5148\u7EA7\u6A21\u578B\u88AB"),$=s("code",null,"lane",-1),G=n("\u53D6\u4EE3\u3002\u8BE6\u89C1"),J={href:"https://github.com/facebook/react/pull/18796",target:"_blank",rel:"noopener noreferrer"},U=n("\u8FD9\u4E2APR"),X=n("\u5982\u679C\u4F60\u7684\u6E90\u7801\u4E2D"),Y=s("code",null,"fiber.expirationTime",-1),Z=n("\u4ECD\u5B58\u5728\uFF0C\u8BF7\u53C2\u7167"),nn=n("\u8C03\u8BD5\u6E90\u7801"),sn=n("\u7AE0\u8282\u83B7\u53D6\u6700\u65B0\u4EE3\u7801\u3002"),an=p('<h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u672C\u8282\u4E86\u89E3\u4E86<code>Fiber</code>\u7684\u8D77\u6E90\u4E0E\u67B6\u6784\uFF0C\u5176\u4E2D<code>Fiber\u8282\u70B9</code>\u53EF\u4EE5\u6784\u6210<code>Fiber\u6811</code>\u3002\u90A3\u4E48<code>Fiber\u6811</code>\u548C\u9875\u9762\u5448\u73B0\u7684<code>DOM\u6811</code>\u6709\u4EC0\u4E48\u5173\u7CFB\uFF0C<code>React</code>\u53C8\u662F\u5982\u4F55\u66F4\u65B0<code>DOM</code>\u7684\u5462\uFF1F</p><p>\u4F1A\u5728\u4E0B\u4E00\u8282\u8BB2\u89E3\u3002</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>',4),en={href:"https://www.bilibili.com/video/BV1it411p7v6?from=search&seid=3508901752524570226",target:"_blank",rel:"noopener noreferrer"},pn=n("Lin Clark - A Cartoon Intro to Fiber - React Conf 2017");function on(t,tn){const e=o("ExternalLinkIcon"),c=o("RouterLink");return l(),r(u,null,[s("p",null,[b,s("a",m,[h,a(e)]),_,y,w,f,g,v,F,x,R,j,N]),C,L,s("blockquote",null,[s("p",null,[E,M,O,s("a",D,[T,a(e)]),P])]),B,s("p",null,[S,s("a",V,[z,a(e)]),q]),A,s("img",{src:t.$withBase("/assets/react/fiber.png"),alt:"Fiber\u67B6\u6784"},null,8,I),H,s("p",null,[Q,W,K,$,G,s("a",J,[U,a(e)])]),s("p",null,[X,Y,Z,a(c,{to:"/react/process/react/preparation/source.html"},{default:i(()=>[nn]),_:1}),sn]),an,s("p",null,[s("a",en,[pn,a(e)])])],64)}var rn=k(d,[["render",on]]);export{rn as default};
