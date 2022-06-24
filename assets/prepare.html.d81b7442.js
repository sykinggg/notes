import{_ as p,r as a,o as r,c as i,b as o,d as n,w as d,e,a as c}from"./app.013e756e.js";const l={},u=e("\u5728"),h=e("ReactDOM.render"),_=e("\u4E00\u8282\u4ECB\u7ECD\u4E86"),k=o("code",null,"React",-1),b=e("\u5F53\u524D\u7684\u4E09\u79CD\u5165\u53E3\u51FD\u6570\u3002\u65E5\u5E38\u5F00\u53D1\u4E3B\u8981\u4F7F\u7528\u7684\u662F"),f=o("code",null,"Legacy Mode",-1),m=e("\uFF08\u901A\u8FC7"),v=o("code",null,"ReactDOM.render",-1),g=e("\u521B\u5EFA\uFF09\u3002"),x=e("\u4ECE"),M={href:"https://mp.weixin.qq.com/s/zrrqldzRbcPApga_Cp2b8A",target:"_blank",rel:"noopener noreferrer"},C=e("React v17.0 \u6B63\u5F0F\u53D1\u5E03\uFF01"),R=e("\u4E00\u6587\u53EF\u4EE5\u770B\u5230\uFF0C"),y=o("code",null,"v17.0",-1),V=e("\u6CA1\u6709\u5305\u542B\u65B0\u7279\u6027\u3002\u7A76\u5176\u539F\u56E0\uFF0C"),D=o("code",null,"v17.0",-1),E=e("\u4E3B\u8981\u7684\u5DE5\u4F5C\u5728\u4E8E\u6E90\u7801\u5185\u90E8\u5BF9"),j=o("code",null,"Concurrent Mode",-1),B=e("\u7684\u652F\u6301\u3002\u6240\u4EE5"),F=o("code",null,"v17",-1),S=e("\u7248\u672C\u4E5F\u88AB\u79F0\u4E3A\u201C\u57AB\u811A\u77F3\u201D\u7248\u672C\u3002"),A=e("\u4F60\u53EF\u4EE5\u4ECE\u5B98\u7F51"),q={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-intro.html",target:"_blank",rel:"noopener noreferrer"},w=e("Concurrent \u6A21\u5F0F\u4ECB\u7ECD"),z=e("\u4E86\u89E3\u5176\u57FA\u672C\u6982\u5FF5\u3002"),L=c('<p>\u4E00\u53E5\u8BDD\u6982\u62EC\uFF1A</p><blockquote><p>Concurrent \u6A21\u5F0F\u662F\u4E00\u7EC4 React \u7684\u65B0\u529F\u80FD\uFF0C\u53EF\u5E2E\u52A9\u5E94\u7528\u4FDD\u6301\u54CD\u5E94\uFF0C\u5E76\u6839\u636E\u7528\u6237\u7684\u8BBE\u5907\u6027\u80FD\u548C\u7F51\u901F\u8FDB\u884C\u9002\u5F53\u7684\u8C03\u6574\u3002</p></blockquote><p><code>Concurrent Mode</code>\u662F<code>React</code>\u8FC7\u53BB2\u5E74\u91CD\u6784<code>Fiber\u67B6\u6784</code>\u7684\u6E90\u52A8\u529B\uFF0C\u4E5F\u662F<code>React</code>\u672A\u6765\u7684\u53D1\u5C55\u65B9\u5411\u3002</p><p>\u53EF\u4EE5\u9884\u89C1\uFF0C\u5F53<code>v17</code>\u5B8C\u7F8E\u652F\u6301<code>Concurrent Mode</code>\u540E\uFF0C<code>v18</code>\u4F1A\u8FCE\u6765\u4E00\u5927\u6CE2\u57FA\u4E8E<code>Concurrent Mode</code>\u7684\u5E93\u3002</p><p>\u5E95\u5C42\u57FA\u7840\u51B3\u5B9A\u4E86\u4E0A\u5C42<code>API</code>\u7684\u5B9E\u73B0\uFF0C\u63A5\u4E0B\u6765\u8BA9\u4E86\u89E3\u4E0B\uFF0C<code>Concurrent Mode</code>\u81EA\u5E95\u5411\u4E0A\u90FD\u5305\u542B\u54EA\u4E9B\u7EC4\u6210\u90E8\u5206\uFF0C\u80FD\u591F\u53D1\u6325\u54EA\u4E9B\u80FD\u529B\uFF1F</p><h2 id="\u5E95\u5C42\u67B6\u6784-\u2014\u2014-fiber\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#\u5E95\u5C42\u67B6\u6784-\u2014\u2014-fiber\u67B6\u6784" aria-hidden="true">#</a> \u5E95\u5C42\u67B6\u6784 \u2014\u2014 Fiber\u67B6\u6784</h2>',6),N=e("\u4ECE"),I=e("\u8BBE\u8BA1\u7406\u5FF5"),O=e("\u4E86\u89E3\u5230\u8981\u5B9E\u73B0"),U=o("code",null,"Concurrent Mode",-1),P=e("\uFF0C\u6700\u5173\u952E\u7684\u4E00\u70B9\u662F\uFF1A\u5B9E\u73B0\u5F02\u6B65\u53EF\u4E2D\u65AD\u7684\u66F4\u65B0\u3002"),T=c('<p>\u57FA\u4E8E\u8FD9\u4E2A\u524D\u63D0\uFF0C<code>React</code>\u82B1\u8D392\u5E74\u65F6\u95F4\u91CD\u6784\u5B8C\u6210\u4E86<code>Fiber</code>\u67B6\u6784\u3002</p><p><code>Fiber</code>\u673A\u6784\u7684\u610F\u4E49\u5728\u4E8E\uFF0C\u4ED6\u5C06\u5355\u4E2A<code>\u7EC4\u4EF6</code>\u4F5C\u4E3A<code>\u5DE5\u4F5C\u5355\u5143</code>\uFF0C\u4F7F\u4EE5<code>\u7EC4\u4EF6</code>\u4E3A\u7C92\u5EA6\u7684\u201C\u5F02\u6B65\u53EF\u4E2D\u65AD\u7684\u66F4\u65B0\u201D\u6210\u4E3A\u53EF\u80FD\u3002</p><h2 id="\u67B6\u6784\u7684\u9A71\u52A8\u529B-\u2014\u2014-scheduler" tabindex="-1"><a class="header-anchor" href="#\u67B6\u6784\u7684\u9A71\u52A8\u529B-\u2014\u2014-scheduler" aria-hidden="true">#</a> \u67B6\u6784\u7684\u9A71\u52A8\u529B \u2014\u2014 Scheduler</h2><p>\u5982\u679C\u540C\u6B65\u8FD0\u884C<code>Fiber</code>\u67B6\u6784\uFF08\u901A\u8FC7<code>ReactDOM.render</code>\uFF09\uFF0C\u5219<code>Fiber</code>\u67B6\u6784\u4E0E\u91CD\u6784\u524D\u5E76\u65E0\u533A\u522B\u3002</p><p>\u4F46\u662F\u5F53\u914D\u5408<code>\u65F6\u95F4\u5207\u7247</code>\uFF0C\u5C31\u80FD\u6839\u636E\u5BBF\u4E3B\u73AF\u5883\u6027\u80FD\uFF0C\u4E3A\u6BCF\u4E2A<code>\u5DE5\u4F5C\u5355\u5143</code>\u5206\u914D\u4E00\u4E2A<code>\u53EF\u8FD0\u884C\u65F6\u95F4</code>\uFF0C\u5B9E\u73B0\u201C\u5F02\u6B65\u53EF\u4E2D\u65AD\u7684\u66F4\u65B0\u201D\u3002</p>',5),G=e("\u4E8E\u662F\uFF0C"),H={href:"https://github.com/facebook/react/tree/master/packages/scheduler",target:"_blank",rel:"noopener noreferrer"},J=e("scheduler"),K=e("\uFF08\u8C03\u5EA6\u5668\uFF09\u4EA7\u751F\u4E86\u3002"),Q=c(`<h2 id="\u67B6\u6784\u8FD0\u884C\u7B56\u7565-\u2014\u2014-lane\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u67B6\u6784\u8FD0\u884C\u7B56\u7565-\u2014\u2014-lane\u6A21\u578B" aria-hidden="true">#</a> \u67B6\u6784\u8FD0\u884C\u7B56\u7565 \u2014\u2014 lane\u6A21\u578B</h2><p>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C<code>React</code>\u53EF\u4EE5\u63A7\u5236<code>\u66F4\u65B0</code>\u5728<code>Fiber</code>\u67B6\u6784\u4E2D\u8FD0\u884C/\u4E2D\u65AD/\u7EE7\u7EED\u8FD0\u884C\u3002</p><p>\u57FA\u4E8E\u5F53\u524D\u7684\u67B6\u6784\uFF0C\u5F53\u4E00\u6B21<code>\u66F4\u65B0</code>\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u88AB\u4E2D\u65AD\uFF0C\u8FC7\u6BB5\u65F6\u95F4\u518D\u7EE7\u7EED\u8FD0\u884C\uFF0C\u8FD9\u5C31\u662F\u201C\u5F02\u6B65\u53EF\u4E2D\u65AD\u7684\u66F4\u65B0\u201D\u3002</p><p>\u5F53\u4E00\u6B21<code>\u66F4\u65B0</code>\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u88AB\u4E2D\u65AD\uFF0C\u8F6C\u800C\u91CD\u65B0\u5F00\u59CB\u4E00\u6B21\u65B0\u7684<code>\u66F4\u65B0</code>\uFF0C\u53EF\u4EE5\u8BF4\uFF1A\u540E\u4E00\u6B21<code>\u66F4\u65B0</code>\u6253\u65AD\u4E86\u524D\u4E00\u6B21<code>\u66F4\u65B0</code>\u3002</p><p>\u8FD9\u5C31\u662F<code>\u4F18\u5148\u7EA7</code>\u7684\u6982\u5FF5\uFF1A\u540E\u4E00\u6B21<code>\u66F4\u65B0</code>\u7684<code>\u4F18\u5148\u7EA7</code>\u66F4\u9AD8\uFF0C\u4ED6\u6253\u65AD\u4E86\u6B63\u5728\u8FDB\u884C\u7684\u524D\u4E00\u6B21<code>\u66F4\u65B0</code>\u3002</p><p>\u591A\u4E2A<code>\u4F18\u5148\u7EA7</code>\u4E4B\u95F4\u5982\u4F55\u4E92\u76F8\u6253\u65AD\uFF1F<code>\u4F18\u5148\u7EA7</code>\u80FD\u5426\u5347\u964D\uFF1F\u672C\u6B21<code>\u66F4\u65B0</code>\u5E94\u8BE5\u8D4B\u4E88\u4EC0\u4E48<code>\u4F18\u5148\u7EA7</code>\uFF1F</p><p>\u8FD9\u5C31\u9700\u8981\u4E00\u4E2A\u6A21\u578B\u63A7\u5236\u4E0D\u540C<code>\u4F18\u5148\u7EA7</code>\u4E4B\u95F4\u7684\u5173\u7CFB\u4E0E\u884C\u4E3A\uFF0C\u4E8E\u662F<code>lane</code>\u6A21\u578B\u8BDE\u751F\u4E86\u3002</p><h2 id="\u4E0A\u5C42\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u5C42\u5B9E\u73B0" aria-hidden="true">#</a> \u4E0A\u5C42\u5B9E\u73B0</h2><p>\u73B0\u5728\uFF0C\u53EF\u4EE5\u8BF4\uFF1A</p><blockquote><p>\u4ECE\u6E90\u7801\u5C42\u9762\u8BB2\uFF0CConcurrent Mode\u662F\u4E00\u5957\u53EF\u63A7\u7684\u201C\u591A\u4F18\u5148\u7EA7\u66F4\u65B0\u67B6\u6784\u201D\u3002</p></blockquote><p>\u90A3\u4E48\u57FA\u4E8E\u8BE5\u67B6\u6784\u4E4B\u4E0A\u53EF\u4EE5\u5B9E\u73B0\u54EA\u4E9B\u6709\u610F\u601D\u7684\u529F\u80FD\uFF1F\u4E3E\u51E0\u4E2A\u4F8B\u5B50\uFF1A</p><h3 id="batchedupdates" tabindex="-1"><a class="header-anchor" href="#batchedupdates" aria-hidden="true">#</a> batchedUpdates</h3><p>\u5982\u679C\u5728\u4E00\u6B21\u4E8B\u4EF6\u56DE\u8C03\u4E2D\u89E6\u53D1\u591A\u6B21<code>\u66F4\u65B0</code>\uFF0C\u4ED6\u4EEC\u4F1A\u88AB\u5408\u5E76\u4E3A\u4E00\u6B21<code>\u66F4\u65B0</code>\u8FDB\u884C\u5904\u7406\u3002</p><p>\u5982\u4E0B\u4EE3\u7801\u6267\u884C\u53EA\u4F1A\u89E6\u53D1\u4E00\u6B21<code>\u66F4\u65B0</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">stateA</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">stateB</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">stateA</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u5408\u5E76\u591A\u4E2A<code>\u66F4\u65B0</code>\u7684\u4F18\u5316\u65B9\u5F0F\u88AB\u79F0\u4E3A<code>batchedUpdates</code>\u3002</p><p><code>batchedUpdates</code>\u5728\u5F88\u65E9\u7684\u7248\u672C\u5C31\u5B58\u5728\u4E86\uFF0C\u4E0D\u8FC7\u4E4B\u524D\u7684\u5B9E\u73B0\u5C40\u9650\u5F88\u591A\uFF08\u8131\u79BB\u5F53\u524D\u4E0A\u4E0B\u6587\u73AF\u5883\u7684<code>\u66F4\u65B0</code>\u4E0D\u4F1A\u88AB\u5408\u5E76\uFF09\u3002</p><p>\u5728<code>Concurrent Mode</code>\u4E2D\uFF0C\u662F\u4EE5<code>\u4F18\u5148\u7EA7</code>\u4E3A\u4F9D\u636E\u5BF9\u66F4\u65B0\u8FDB\u884C\u5408\u5E76\u7684\uFF0C\u4F7F\u7528\u8303\u56F4\u66F4\u5E7F\u3002</p><h3 id="suspense" tabindex="-1"><a class="header-anchor" href="#suspense" aria-hidden="true">#</a> Suspense</h3>`,19),W={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-suspense.html",target:"_blank",rel:"noopener noreferrer"},X=e("Suspense"),Y=e("\u53EF\u4EE5\u5728\u7EC4\u4EF6\u8BF7\u6C42\u6570\u636E\u65F6\u5C55\u793A\u4E00\u4E2A"),Z=o("code",null,"pending",-1),$=e("\u72B6\u6001\u3002\u8BF7\u6C42\u6210\u529F\u540E\u6E32\u67D3\u6570\u636E\u3002"),ee=o("p",null,[e("\u672C\u8D28\u4E0A\u8BB2"),o("code",null,"Suspense"),e("\u5185\u7684\u7EC4\u4EF6\u5B50\u6811\u6BD4\u7EC4\u4EF6\u6811\u7684\u5176\u4ED6\u90E8\u5206\u62E5\u6709\u66F4\u4F4E\u7684"),o("code",null,"\u4F18\u5148\u7EA7"),e("\u3002")],-1),oe=o("h3",{id:"usedeferredvalue",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#usedeferredvalue","aria-hidden":"true"},"#"),e(" useDeferredValue")],-1),ne={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-reference.html#usedeferredvalue",target:"_blank",rel:"noopener noreferrer"},se=e("useDeferredValue"),ce=e("\u8FD4\u56DE\u4E00\u4E2A\u5EF6\u8FDF\u54CD\u5E94\u7684\u503C\uFF0C\u8BE5\u503C\u53EF\u80FD\u201C\u5EF6\u540E\u201D\u7684\u6700\u957F\u65F6\u95F4\u4E3A"),te=o("code",null,"timeoutMs",-1),ae=e("\u3002"),de=c(`<p>\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> deferredValue <span class="token operator">=</span> <span class="token function">useDeferredValue</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">timeoutMs</span><span class="token operator">:</span> <span class="token number">2000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728<code>useDeferredValue</code>\u5185\u90E8\u4F1A\u8C03\u7528<code>useState</code>\u5E76\u89E6\u53D1\u4E00\u6B21<code>\u66F4\u65B0</code>\u3002</p><p>\u8FD9\u6B21<code>\u66F4\u65B0</code>\u7684<code>\u4F18\u5148\u7EA7</code>\u5F88\u4F4E\uFF0C\u6240\u4EE5\u5F53\u524D\u5982\u679C\u6709\u6B63\u5728\u8FDB\u884C\u4E2D\u7684<code>\u66F4\u65B0</code>\uFF0C\u4E0D\u4F1A\u53D7<code>useDeferredValue</code>\u4EA7\u751F\u7684<code>\u66F4\u65B0</code>\u5F71\u54CD\u3002\u6240\u4EE5<code>useDeferredValue</code>\u80FD\u591F\u8FD4\u56DE\u5EF6\u8FDF\u7684\u503C\u3002</p><p>\u5F53\u8D85\u8FC7<code>timeoutMs</code>\u540E<code>useDeferredValue</code>\u4EA7\u751F\u7684<code>\u66F4\u65B0</code>\u8FD8\u6CA1\u8FDB\u884C\uFF08\u7531\u4E8E<code>\u4F18\u5148\u7EA7</code>\u592A\u4F4E\u4E00\u76F4\u88AB\u6253\u65AD\uFF09\uFF0C\u5219\u4F1A\u518D\u89E6\u53D1\u4E00\u6B21\u9AD8\u4F18\u5148\u7EA7<code>\u66F4\u65B0</code>\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u9664\u4E86\u4EE5\u4E0A\u4ECB\u7ECD\u7684\u5B9E\u73B0\uFF0C\u76F8\u4FE1\u672A\u6765<code>React</code>\u8FD8\u4F1A\u5F00\u53D1\u66F4\u591A\u57FA\u4E8E<code>Concurrent Mode</code>\u7684\u73A9\u6CD5\u3002</p><p><code>Fiber</code>\u67B6\u6784\u5728\u4E4B\u524D\u7684\u7AE0\u8282\u5DF2\u7ECF\u5B66\u4E60\u4E86\u3002\u6240\u4EE5\uFF0C\u5728\u672C\u7AE0\u63A5\u4E0B\u6765\u7684\u90E8\u5206\uFF0C\u4F1A\u6309\u7167\u4E0A\u6587\u7684\u8109\u7EDC\uFF0C\u81EA\u5E95\u5411\u4E0A\uFF0C\u4ECE\u67B6\u6784\u5230\u5B9E\u73B0\u8BB2\u89E3<code>Concurrent Mode</code>\u3002</p>`,8);function pe(re,ie){const t=a("RouterLink"),s=a("ExternalLinkIcon");return r(),i("div",null,[o("p",null,[u,n(t,{to:"/react/state/reactdom.html#react%E7%9A%84%E5%85%B6%E4%BB%96%E5%85%A5%E5%8F%A3%E5%87%BD%E6%95%B0"},{default:d(()=>[h]),_:1}),_,k,b,f,m,v,g]),o("p",null,[x,o("a",M,[C,n(s)]),R,y,V,D,E,j,B,F,S]),o("p",null,[A,o("a",q,[w,n(s)]),z]),L,o("p",null,[N,n(t,{to:"/react/preparation/idea.html"},{default:d(()=>[I]),_:1}),O,U,P]),T,o("p",null,[G,o("a",H,[J,n(s)]),K]),Q,o("p",null,[o("a",W,[X,n(s)]),Y,Z,$]),ee,oe,o("p",null,[o("a",ne,[se,n(s)]),ce,te,ae]),de])}var ue=p(l,[["render",pe],["__file","prepare.html.vue"]]);export{ue as default};
