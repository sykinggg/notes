import{r as c,o as r,c as l,a as e,d as o,F as p,e as t,b as n}from"./app.32e15244.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=t('<p>\u4E0A\u4E00\u8282\u804A\u5230React15\u67B6\u6784\u4E0D\u80FD\u652F\u6491\u5F02\u6B65\u66F4\u65B0\u4EE5\u81F3\u4E8E\u9700\u8981\u91CD\u6784\u3002\u90A3\u4E48\u8FD9\u4E00\u8282\u6765\u5B66\u4E60\u91CD\u6784\u540E\u7684React16\u662F\u5982\u4F55\u652F\u6301\u5F02\u6B65\u66F4\u65B0\u7684\u3002</p><h2 id="react16\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#react16\u67B6\u6784" aria-hidden="true">#</a> React16\u67B6\u6784</h2><p>React16\u67B6\u6784\u53EF\u4EE5\u5206\u4E3A\u4E09\u5C42\uFF1A</p><ul><li>Scheduler\uFF08\u8C03\u5EA6\u5668\uFF09\u2014\u2014 \u8C03\u5EA6\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\uFF0C\u9AD8\u4F18\u4EFB\u52A1\u4F18\u5148\u8FDB\u5165<strong>Reconciler</strong></li><li>Reconciler\uFF08\u534F\u8C03\u5668\uFF09\u2014\u2014 \u8D1F\u8D23\u627E\u51FA\u53D8\u5316\u7684\u7EC4\u4EF6</li><li>Renderer\uFF08\u6E32\u67D3\u5668\uFF09\u2014\u2014 \u8D1F\u8D23\u5C06\u53D8\u5316\u7684\u7EC4\u4EF6\u6E32\u67D3\u5230\u9875\u9762\u4E0A</li></ul><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u76F8\u8F83\u4E8EReact15\uFF0CReact16\u4E2D\u65B0\u589E\u4E86<strong>Scheduler\uFF08\u8C03\u5EA6\u5668\uFF09</strong>\uFF0C\u8BA9\u6765\u4E86\u89E3\u4E0B\u4ED6\u3002</p><h3 id="scheduler-\u8C03\u5EA6\u5668" tabindex="-1"><a class="header-anchor" href="#scheduler-\u8C03\u5EA6\u5668" aria-hidden="true">#</a> Scheduler\uFF08\u8C03\u5EA6\u5668\uFF09</h3><p>\u65E2\u7136\u4EE5\u6D4F\u89C8\u5668\u662F\u5426\u6709\u5269\u4F59\u65F6\u95F4\u4F5C\u4E3A\u4EFB\u52A1\u4E2D\u65AD\u7684\u6807\u51C6\uFF0C\u90A3\u4E48\u9700\u8981\u4E00\u79CD\u673A\u5236\uFF0C\u5F53\u6D4F\u89C8\u5668\u6709\u5269\u4F59\u65F6\u95F4\u65F6\u901A\u77E5\u3002</p>',7),_=n("\u5176\u5B9E\u90E8\u5206\u6D4F\u89C8\u5668\u5DF2\u7ECF\u5B9E\u73B0\u4E86\u8FD9\u4E2AAPI\uFF0C\u8FD9\u5C31\u662F"),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback",target:"_blank",rel:"noopener noreferrer"},k=n("requestIdleCallback"),b=n("\u3002\u4F46\u662F\u7531\u4E8E\u4EE5\u4E0B\u56E0\u7D20\uFF0C"),m=e("code",null,"React",-1),g=n("\u653E\u5F03\u4F7F\u7528\uFF1A"),f=t("<ul><li>\u6D4F\u89C8\u5668\u517C\u5BB9\u6027</li><li>\u89E6\u53D1\u9891\u7387\u4E0D\u7A33\u5B9A\uFF0C\u53D7\u5F88\u591A\u56E0\u7D20\u5F71\u54CD\u3002\u6BD4\u5982\u5F53\u7684\u6D4F\u89C8\u5668\u5207\u6362tab\u540E\uFF0C\u4E4B\u524Dtab\u6CE8\u518C\u7684<code>requestIdleCallback</code>\u89E6\u53D1\u7684\u9891\u7387\u4F1A\u53D8\u5F97\u5F88\u4F4E</li></ul><p>\u57FA\u4E8E\u4EE5\u4E0A\u539F\u56E0\uFF0C<code>React</code>\u5B9E\u73B0\u4E86\u529F\u80FD\u66F4\u5B8C\u5907\u7684<code>requestIdleCallback</code>polyfill\uFF0C\u8FD9\u5C31\u662F<strong>Scheduler</strong>\u3002\u9664\u4E86\u5728\u7A7A\u95F2\u65F6\u89E6\u53D1\u56DE\u8C03\u7684\u529F\u80FD\u5916\uFF0C<strong>Scheduler</strong>\u8FD8\u63D0\u4F9B\u4E86\u591A\u79CD\u8C03\u5EA6\u4F18\u5148\u7EA7\u4F9B\u4EFB\u52A1\u8BBE\u7F6E\u3002</p>",2),R={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/README.md",target:"_blank",rel:"noopener noreferrer"},w=n("Scheduler"),x=n("\u662F\u72EC\u7ACB\u4E8E"),v=e("code",null,"React",-1),j=n("\u7684\u5E93"),y=e("h3",{id:"reconciler-\u534F\u8C03\u5668",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reconciler-\u534F\u8C03\u5668","aria-hidden":"true"},"#"),n(" Reconciler\uFF08\u534F\u8C03\u5668\uFF09")],-1),D=n("\u77E5\u9053\uFF0C\u5728React15\u4E2D"),S=e("strong",null,"Reconciler",-1),C=n("\u662F\u9012\u5F52\u5904\u7406\u865A\u62DFDOM\u7684\u3002\u8BA9\u770B\u770B"),I={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1673",target:"_blank",rel:"noopener noreferrer"},P=n("React16\u7684Reconciler"),M=n("\u3002"),q=t(`<p>\u53EF\u4EE5\u770B\u89C1\uFF0C\u66F4\u65B0\u5DE5\u4F5C\u4ECE\u9012\u5F52\u53D8\u6210\u4E86\u53EF\u4EE5\u4E2D\u65AD\u7684\u5FAA\u73AF\u8FC7\u7A0B\u3002\u6BCF\u6B21\u5FAA\u73AF\u90FD\u4F1A\u8C03\u7528<code>shouldYield</code>\u5224\u65AD\u5F53\u524D\u662F\u5426\u6709\u5269\u4F59\u65F6\u95F4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@noinline</span> */</span>
<span class="token keyword">function</span> <span class="token function">workLoopConcurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Perform work until Scheduler asks us to yield</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">shouldYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    workInProgress <span class="token operator">=</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u90A3\u4E48React16\u662F\u5982\u4F55\u89E3\u51B3\u4E2D\u65AD\u66F4\u65B0\u65F6DOM\u6E32\u67D3\u4E0D\u5B8C\u5168\u7684\u95EE\u9898\u5462\uFF1F</p><p>\u5728React16\u4E2D\uFF0C<strong>Reconciler</strong>\u4E0E<strong>Renderer</strong>\u4E0D\u518D\u662F\u4EA4\u66FF\u5DE5\u4F5C\u3002\u5F53<strong>Scheduler</strong>\u5C06\u4EFB\u52A1\u4EA4\u7ED9<strong>Reconciler</strong>\u540E\uFF0C<strong>Reconciler</strong>\u4F1A\u4E3A\u53D8\u5316\u7684\u865A\u62DFDOM\u6253\u4E0A\u4EE3\u8868\u589E/\u5220/\u66F4\u65B0\u7684\u6807\u8BB0\uFF0C\u7C7B\u4F3C\u8FD9\u6837\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> Placement <span class="token operator">=</span> <span class="token comment">/*             */</span> <span class="token number">0b0000000000010</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Update <span class="token operator">=</span> <span class="token comment">/*                */</span> <span class="token number">0b0000000000100</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> PlacementAndUpdate <span class="token operator">=</span> <span class="token comment">/*    */</span> <span class="token number">0b0000000000110</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Deletion <span class="token operator">=</span> <span class="token comment">/*              */</span> <span class="token number">0b0000000001000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,5),O=n("\u5168\u90E8\u7684\u6807\u8BB0\u89C1"),L={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactSideEffectTags.js",target:"_blank",rel:"noopener noreferrer"},A=n("\u8FD9\u91CC"),E=e("p",null,[n("\u6574\u4E2A"),e("strong",null,"Scheduler"),n("\u4E0E"),e("strong",null,"Reconciler"),n("\u7684\u5DE5\u4F5C\u90FD\u5728\u5185\u5B58\u4E2D\u8FDB\u884C\u3002\u53EA\u6709\u5F53\u6240\u6709\u7EC4\u4EF6\u90FD\u5B8C\u6210"),e("strong",null,"Reconciler"),n("\u7684\u5DE5\u4F5C\uFF0C\u624D\u4F1A\u7EDF\u4E00\u4EA4\u7ED9"),e("strong",null,"Renderer"),n("\u3002")],-1),N=n("\u4F60\u53EF\u4EE5\u5728"),W={href:"https://zh-hans.reactjs.org/docs/codebase-overview.html#fiber-reconciler",target:"_blank",rel:"noopener noreferrer"},B=n("\u8FD9\u91CC"),F=n("\u770B\u5230"),V=e("code",null,"React",-1),T=n("\u5B98\u65B9\u5BF9React16\u65B0"),z=e("strong",null,"Reconciler",-1),U=n("\u7684\u89E3\u91CA"),G=e("h3",{id:"renderer-\u6E32\u67D3\u5668",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#renderer-\u6E32\u67D3\u5668","aria-hidden":"true"},"#"),n(" Renderer\uFF08\u6E32\u67D3\u5668\uFF09")],-1),H=e("p",null,[e("strong",null,"Renderer"),n("\u6839\u636E"),e("strong",null,"Reconciler"),n("\u4E3A\u865A\u62DFDOM\u6253\u7684\u6807\u8BB0\uFF0C\u540C\u6B65\u6267\u884C\u5BF9\u5E94\u7684DOM\u64CD\u4F5C\u3002")],-1),Y=e("p",null,"\u6240\u4EE5\uFF0C\u5BF9\u4E8E\u5728\u4E0A\u4E00\u8282\u4F7F\u7528\u8FC7\u7684Demo",-1),J=e("p",null,"details \u4E58\u6CD5\u5C0FDemo",-1),Z={href:"https://codesandbox.io/s/morning-wildflower-ohnre?file=/src/App.js:218-234",target:"_blank",rel:"noopener noreferrer"},$=n("demo"),K=e("p",null,[e("code",null,"state.count = 1"),n("\uFF0C\u6BCF\u6B21\u70B9\u51FB\u6309\u94AE"),e("code",null,"state.count++")],-1),Q=e("p",null,[n("\u5217\u8868\u4E2D3\u4E2A\u5143\u7D20\u7684\u503C\u5206\u522B\u4E3A1\uFF0C2\uFF0C3\u4E58\u4EE5"),e("code",null,"state.count"),n("\u7684\u7ED3\u679C")],-1),X=e("p",null,"\u5728React16\u67B6\u6784\u4E2D\u6574\u4E2A\u66F4\u65B0\u6D41\u7A0B\u4E3A\uFF1A",-1),ee=["src"],ne=e("p",null,"\u5176\u4E2D\u7EA2\u6846\u4E2D\u7684\u6B65\u9AA4\u968F\u65F6\u53EF\u80FD\u7531\u4E8E\u4EE5\u4E0B\u539F\u56E0\u88AB\u4E2D\u65AD\uFF1A",-1),se=e("ul",null,[e("li",null,"\u6709\u5176\u4ED6\u66F4\u9AD8\u4F18\u4EFB\u52A1\u9700\u8981\u5148\u66F4\u65B0"),e("li",null,"\u5F53\u524D\u5E27\u6CA1\u6709\u5269\u4F59\u65F6\u95F4")],-1),oe=e("p",null,"\u7531\u4E8E\u7EA2\u6846\u4E2D\u7684\u5DE5\u4F5C\u90FD\u5728\u5185\u5B58\u4E2D\u8FDB\u884C\uFF0C\u4E0D\u4F1A\u66F4\u65B0\u9875\u9762\u4E0A\u7684DOM\uFF0C\u6240\u4EE5\u5373\u4F7F\u53CD\u590D\u4E2D\u65AD\uFF0C\u7528\u6237\u4E5F\u4E0D\u4F1A\u770B\u89C1\u66F4\u65B0\u4E0D\u5B8C\u5168\u7684DOM\uFF08\u5373\u4E0A\u4E00\u8282\u6F14\u793A\u7684\u60C5\u51B5\uFF09\u3002",-1),te=n("\u5B9E\u9645\u4E0A\uFF0C\u7531\u4E8E"),ae=e("strong",null,"Scheduler",-1),ce=n("\u548C"),re=e("strong",null,"Reconciler",-1),le=n("\u90FD\u662F\u5E73\u53F0\u65E0\u5173\u7684\uFF0C\u6240\u4EE5"),pe=e("code",null,"React",-1),de=n("\u4E3A\u4ED6\u4EEC\u5355\u72EC\u53D1\u4E86\u4E00\u4E2A\u5305"),ie={href:"https://www.npmjs.com/package/react-reconciler",target:"_blank",rel:"noopener noreferrer"},ue=n("react-Reconciler"),_e=n("\u3002\u4F60\u53EF\u4EE5\u7528\u8FD9\u4E2A\u5305\u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E2A"),he=e("code",null,"ReactDOM",-1),ke=n("\uFF0C\u5177\u4F53\u89C1"),be=e("strong",null,"\u53C2\u8003\u8D44\u6599",-1),me=t('<h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u901A\u8FC7\u672C\u8282\u77E5\u9053\u4E86<code>React16</code>\u91C7\u7528\u65B0\u7684<code>Reconciler</code>\u3002</p><p><code>Reconciler</code>\u5185\u90E8\u91C7\u7528\u4E86<code>Fiber</code>\u7684\u67B6\u6784\u3002</p><p><code>Fiber</code>\u662F\u4EC0\u4E48\uFF1F\u4ED6\u548C<code>Reconciler</code>\u6216\u8005\u8BF4\u548C<code>React</code>\u4E4B\u95F4\u662F\u4EC0\u4E48\u5173\u7CFB\uFF1F\u4F1A\u5728\u63A5\u4E0B\u6765\u4E09\u8282\u89E3\u7B54\u3002</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>',5),ge={href:"https://www.youtube.com/watch?v=CGpMlWVcHok&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=7",target:"_blank",rel:"noopener noreferrer"},fe=n("\u300C\u82F1\u6587 \u5916\u7F51\u300DBuilding a Custom React Renderer | React\u524D\u7ECF\u7406Sophie Alpert"),Re=e("p",null,"details \u540C\u6B65/Debounce/Throttle/\u5E76\u53D1 \u60C5\u51B5\u4E0B\u6027\u80FD\u5BF9\u6BD4Demo",-1),we={href:"https://codesandbox.io/s/concurrent-forked-ci6jj",target:"_blank",rel:"noopener noreferrer"},xe=n("demo \u5730\u5740");function ve(a,je){const s=c("ExternalLinkIcon");return r(),l(p,null,[u,e("p",null,[_,e("a",h,[k,o(s)]),b,m,g]),f,e("blockquote",null,[e("p",null,[e("a",R,[w,o(s)]),x,v,j])]),y,e("p",null,[D,S,C,e("a",I,[P,o(s)]),M]),q,e("blockquote",null,[e("p",null,[O,e("a",L,[A,o(s)])])]),E,e("blockquote",null,[e("p",null,[N,e("a",W,[B,o(s)]),F,V,T,z,U])]),G,H,Y,J,e("p",null,[e("a",Z,[$,o(s)])]),K,Q,X,e("img",{src:a.$withBase("/assets/react/process.png"),alt:"\u66F4\u65B0\u6D41\u7A0B"},null,8,ee),ne,se,oe,e("blockquote",null,[e("p",null,[te,ae,ce,re,le,pe,de,e("a",ie,[ue,o(s)]),_e,he,ke,be])]),me,e("p",null,[e("a",ge,[fe,o(s)])]),Re,e("p",null,[e("a",we,[xe,o(s)])])],64)}var Se=d(i,[["render",ve]]);export{Se as default};
