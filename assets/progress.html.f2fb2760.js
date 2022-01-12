import{r as p,o as r,c,b as n,d as a,F as l,a as t,e as s}from"./app.b1cf3273.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=t(`<h1 id="progressevent" tabindex="-1"><a class="header-anchor" href="#progressevent" aria-hidden="true">#</a> ProgressEvent</h1><p><strong>ProgressEvent</strong>\u63A5\u53E3\u8868\u793A\u8861\u91CF\u5E95\u5C42\u8FDB\u7A0B\u8FDB\u5EA6\u7684\u4E8B\u4EF6\uFF0C\u6BD4\u5982HTTP\u8BF7\u6C42\uFF08\u5BF9\u4E8E<code>XMLHttpRequest</code>\uFF0C\u6216\u8005\u52A0\u8F7D<code>&lt;img&gt;</code>\u3001<code>&lt;audio&gt;</code>\u3001<code>&lt;video&gt;</code>\u3001<code>&lt;style&gt;</code>\u6216<code>&lt;link&gt;</code>\u7684\u5E95\u5C42\u8D44\u6E90\uFF09\u3002</p><div class="language-flow ext-flow line-numbers-mode"><pre class="language-flow"><code>para<span class="token operator">=&gt;</span>parallel<span class="token operator">:</span> ProgressEvent
process<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> Event

<span class="token function">para</span><span class="token punctuation">(</span>path1<span class="token punctuation">,</span> left<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>process
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h2><p><code>ProgressEvent()</code></p>`,5),_=s("\u4F7F\u7528\u7ED9\u5B9A\u7684\u53C2\u6570\u521B\u5EFA\u4E00\u4E2A "),h=n("code",null,"ProgressEvent",-1),k=s(),g={href:"https://developer.mozilla.org/en-US/docs/Web/API/Event",target:"_blank",rel:"noopener noreferrer"},b=s("\u4E8B\u4EF6"),m=s("\u3002"),v=n("h2",{id:"properties",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),s(" Properties")],-1),f=n("p",null,"\u4ECE\u5176\u7236\u7EA7\u4E8B\u4EF6\u4E2D\u7EE7\u627F\u5C5E\u6027\u3002",-1),P={href:"https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/lengthComputable",target:"_blank",rel:"noopener noreferrer"},E=s("ProgressEvent.lengthComputable"),x=s(),T=n("code",null,"Read only",-1),w=n("p",null,"\u4E00\u4E2A\u5E03\u5C14\u6807\u5FD7\uFF0C\u8868\u793A\u5E95\u5C42\u8FC7\u7A0B\u8981\u505A\u7684\u603B\u5DE5\u4F5C\u548C\u5DF2\u7ECF\u5B8C\u6210\u7684\u5DE5\u4F5C\u91CF\u662F\u5426\u53EF\u4EE5\u8BA1\u7B97\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5B83\u544A\u8BC9\u4EBA\u4EEC\u8FDB\u5EA6\u662F\u5426\u53EF\u4EE5\u6D4B\u91CF\u3002",-1),I={href:"https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/loaded",target:"_blank",rel:"noopener noreferrer"},q=s("ProgressEvent.loaded"),y=s(),B=n("code",null,"Read only",-1),S=n("p",null,"\u4E00\u4E2A64\u4F4D\u65E0\u7B26\u53F7\u6574\u6570\u503C\uFF0C\u8868\u793A\u5E95\u5C42\u8FDB\u7A0B\u5DF2\u7ECF\u5B8C\u6210\u7684\u5DE5\u4F5C\u91CF\u3002\u6240\u505A\u5DE5\u4F5C\u7684\u6BD4\u4F8B\u53EF\u4EE5\u901A\u8FC7\u7528\u603B\u6570\u9664\u4EE5\u8BE5\u5C5E\u6027\u7684\u503C\u6765\u8BA1\u7B97\u3002\u5F53\u4F7F\u7528HTTP\u4E0B\u8F7D\u8D44\u6E90\u65F6\uFF0C\u8FD9\u53EA\u8BA1\u7B97HTTP\u6D88\u606F\u7684\u4E3B\u4F53\uFF0C\u800C\u4E0D\u5305\u62EC\u5934\u6587\u4EF6\u548C\u5176\u4ED6\u5F00\u9500\u3002",-1),z={href:"https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/total",target:"_blank",rel:"noopener noreferrer"},A=s("ProgressEvent.total"),H=s(),U=n("code",null,"Read only",-1),W=n("p",null,[s("\u4E00\u4E2A 64 \u4F4D\u65E0\u7B26\u53F7\u6574\u6570\uFF0C\u8868\u793A\u5E95\u5C42\u8FDB\u7A0B\u6B63\u5728\u6267\u884C\u7684\u5DE5\u4F5C\u603B\u91CF\u3002\u4F7F\u7528 HTTP \u4E0B\u8F7D\u8D44\u6E90\u65F6\uFF0C\u8FD9\u662F "),n("code",null,"Content-Length"),s("\uFF08\u6D88\u606F\u6B63\u6587\u7684\u5927\u5C0F\uFF09\uFF0C\u4E0D\u5305\u62EC\u6807\u5934\u548C\u5176\u4ED6\u5F00\u9500\u3002")],-1),L=n("h2",{id:"methods",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),s(" Methods")],-1),R=s("\u7EE7\u627F\u4E86\u5176\u7236\u7EA7"),j={href:"https://developer.mozilla.org/en-US/docs/Web/API/Event",target:"_blank",rel:"noopener noreferrer"},C=s("\u4E8B\u4EF6"),M=s("\u7684\u65B9\u6CD5"),N={href:"https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/initProgressEvent",target:"_blank",rel:"noopener noreferrer"},V=s("ProgressEvent.initProgressEvent()"),X=s("\u521D\u59CB\u5316\u4F7F\u7528\u5DF2\u5F03\u7528\u7684 "),D={href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/createEvent",target:"_blank",rel:"noopener noreferrer"},F=s('Document.createEvent("ProgressEvent")'),G=s(" \u65B9\u6CD5\u521B\u5EFA\u7684 "),$=n("code",null,"ProgressEvent",-1),J=s("\u3002"),K=n("h2",{id:"examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),s(" Examples")],-1),O=s("\u4E0B\u9762\u7684\u793A\u4F8B\u5C06\u4E00\u4E2A "),Q=n("code",null,"ProgressEvent",-1),Y=s(" \u6DFB\u52A0\u5230\u4E00\u4E2A\u65B0\u7684 "),Z={href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"},nn=s("XMLHTTPRequest"),sn=s(" \u5E76\u4F7F\u7528\u5B83\u6765\u663E\u793A\u8BF7\u6C42\u7684\u72B6\u6001\u3002"),en=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> progressBar <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
client<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;magical-unicorns&quot;</span><span class="token punctuation">)</span>
client<span class="token punctuation">.</span><span class="token function-variable function">onprogress</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">pe</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>pe<span class="token punctuation">.</span>lengthComputable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    progressBar<span class="token punctuation">.</span>max <span class="token operator">=</span> pe<span class="token punctuation">.</span>total
    progressBar<span class="token punctuation">.</span>value <span class="token operator">=</span> pe<span class="token punctuation">.</span>loaded
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
client<span class="token punctuation">.</span><span class="token function-variable function">onloadend</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">pe</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  progressBar<span class="token punctuation">.</span>value <span class="token operator">=</span> pe<span class="token punctuation">.</span>loaded
<span class="token punctuation">}</span>
client<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u6D4F\u89C8\u5668\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u517C\u5BB9\u6027" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u517C\u5BB9\u6027</h2>`,2),an=["src"];function tn(o,on){const e=p("ExternalLinkIcon");return r(),c(l,null,[u,n("p",null,[_,h,k,n("a",g,[b,a(e)]),m]),v,f,n("p",null,[n("a",P,[E,a(e)]),x,T]),w,n("p",null,[n("a",I,[q,a(e)]),y,B]),S,n("p",null,[n("a",z,[A,a(e)]),H,U]),W,L,n("p",null,[R,n("a",j,[C,a(e)]),M]),n("p",null,[n("a",N,[V,a(e)])]),n("p",null,[X,n("a",D,[F,a(e)]),G,$,J]),K,n("p",null,[O,Q,Y,n("a",Z,[nn,a(e)]),sn]),en,n("img",{src:o.$withBase("/assets/browser/1631583052792.jpg"),alt:"demo"},null,8,an)],64)}var cn=i(d,[["render",tn]]);export{cn as default};
