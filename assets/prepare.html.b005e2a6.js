import{r as p,o as r,c,b as n,d as e,F as t,a as o,e as s}from"./app.78b6d3a3.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},d=o('<p>\u7ECF\u8FC7\u524D\u51E0\u7AE0\u7684\u5B66\u4E60\uFF0C\u7EC8\u4E8E\u6709\u8DB3\u591F\u7684\u524D\u7F6E\u77E5\u8BC6\u7406\u89E3<strong>\u72B6\u6001\u66F4\u65B0</strong>\u7684\u6574\u4E2A\u6D41\u7A0B\u3002</p><p>\u8FD9\u4E00\u7AE0\u770B\u770B\u51E0\u79CD\u5E38\u89C1\u7684\u89E6\u53D1<strong>\u72B6\u6001\u66F4\u65B0</strong>\u7684\u65B9\u6CD5\u662F\u5982\u4F55\u5B8C\u6210\u5DE5\u4F5C\u7684\u3002</p><h2 id="\u51E0\u4E2A\u5173\u952E\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u51E0\u4E2A\u5173\u952E\u8282\u70B9" aria-hidden="true">#</a> \u51E0\u4E2A\u5173\u952E\u8282\u70B9</h2><p>\u5728\u5F00\u59CB\u5B66\u4E60\u524D\uFF0C\u5148\u4E86\u89E3\u6E90\u7801\u4E2D\u51E0\u4E2A\u5173\u952E\u8282\u70B9\uFF08\u5373\u51E0\u4E2A\u5173\u952E\u51FD\u6570\u7684\u8C03\u7528\uFF09\u3002\u901A\u8FC7\u8FD9\u7AE0\u7684\u5B66\u4E60\uFF0C\u4F1A\u5C06\u8FD9\u4E9B\u5173\u952E\u8282\u70B9\u7684\u8C03\u7528\u8DEF\u5F84\u4E32\u8D77\u6765\u3002</p><p>\u5148\u4ECE\u6240\u719F\u77E5\u7684\u6982\u5FF5\u5F00\u59CB\u3002</p><h3 id="render\u9636\u6BB5\u7684\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#render\u9636\u6BB5\u7684\u5F00\u59CB" aria-hidden="true">#</a> render\u9636\u6BB5\u7684\u5F00\u59CB</h3>',6),b=s("\u5728"),u={href:"/react/process/reconciler.md",target:"_blank",rel:"noopener noreferrer"},k=s("render\u9636\u6BB5\u6D41\u7A0B\u6982\u89C8\u4E00\u8282"),m=s("\u8BB2\u5230\uFF0C"),h=n("p",null,[n("code",null,"render\u9636\u6BB5"),s("\u5F00\u59CB\u4E8E"),n("code",null,"performSyncWorkOnRoot"),s("\u6216"),n("code",null,"performConcurrentWorkOnRoot"),s("\u65B9\u6CD5\u7684\u8C03\u7528\u3002\u8FD9\u53D6\u51B3\u4E8E\u672C\u6B21\u66F4\u65B0\u662F\u540C\u6B65\u66F4\u65B0\u8FD8\u662F\u5F02\u6B65\u66F4\u65B0\u3002")],-1),f=n("h3",{id:"commit\u9636\u6BB5\u7684\u5F00\u59CB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#commit\u9636\u6BB5\u7684\u5F00\u59CB","aria-hidden":"true"},"#"),s(" commit\u9636\u6BB5\u7684\u5F00\u59CB")],-1),_=s("\u5728"),v={href:"/react/renderer/prepare.md",target:"_blank",rel:"noopener noreferrer"},g=s("commit\u9636\u6BB5\u6D41\u7A0B\u6982\u89C8\u4E00\u8282"),R=s("\u8BB2\u5230\uFF0C"),y=o(`<p><code>commit\u9636\u6BB5</code>\u5F00\u59CB\u4E8E<code>commitRoot</code>\u65B9\u6CD5\u7684\u8C03\u7528\u3002\u5176\u4E2D<code>rootFiber</code>\u4F1A\u4F5C\u4E3A\u4F20\u53C2\u3002</p><p>\u5DF2\u7ECF\u77E5\u9053\uFF0C<code>render\u9636\u6BB5</code>\u5B8C\u6210\u540E\u4F1A\u8FDB\u5165<code>commit\u9636\u6BB5</code>\u3002\u8BA9\u7EE7\u7EED\u8865\u5168\u4ECE<code>\u89E6\u53D1\u72B6\u6001\u66F4\u65B0</code>\u5230<code>render\u9636\u6BB5</code>\u7684\u8DEF\u5F84\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u89E6\u53D1\u72B6\u6001\u66F4\u65B0\uFF08\u6839\u636E\u573A\u666F\u8C03\u7528\u4E0D\u540C\u65B9\u6CD5\uFF09

    <span class="token operator">|</span>
    <span class="token operator">|</span>
    <span class="token function">v</span>

    \uFF1F

    <span class="token operator">|</span>
    <span class="token operator">|</span>
    <span class="token function">v</span>

render\u9636\u6BB5\uFF08<span class="token variable"><span class="token variable">\`</span>performSyncWorkOnRoot<span class="token variable">\`</span></span> \u6216 <span class="token variable"><span class="token variable">\`</span>performConcurrentWorkOnRoot<span class="token variable">\`</span></span>\uFF09

    <span class="token operator">|</span>
    <span class="token operator">|</span>
    <span class="token function">v</span>

commit\u9636\u6BB5\uFF08<span class="token variable"><span class="token variable">\`</span>commitRoot<span class="token variable">\`</span></span>\uFF09
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u521B\u5EFAupdate\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAupdate\u5BF9\u8C61" aria-hidden="true">#</a> \u521B\u5EFAUpdate\u5BF9\u8C61</h3><p>\u5728<code>React</code>\u4E2D\uFF0C\u6709\u5982\u4E0B\u65B9\u6CD5\u53EF\u4EE5\u89E6\u53D1\u72B6\u6001\u66F4\u65B0\uFF08\u6392\u9664<code>SSR</code>\u76F8\u5173\uFF09\uFF1A</p><ul><li><p>ReactDOM.render</p></li><li><p>this.setState</p></li><li><p>this.forceUpdate</p></li><li><p>useState</p></li><li><p>useReducer</p></li></ul><p>\u8FD9\u4E9B\u65B9\u6CD5\u8C03\u7528\u7684\u573A\u666F\u5404\u4E0D\u76F8\u540C\uFF0C\u4ED6\u4EEC\u662F\u5982\u4F55\u63A5\u5165\u540C\u4E00\u5957<strong>\u72B6\u6001\u66F4\u65B0\u673A\u5236</strong>\u5462\uFF1F</p><p>\u7B54\u6848\u662F\uFF1A\u6BCF\u6B21<code>\u72B6\u6001\u66F4\u65B0</code>\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u4FDD\u5B58<strong>\u66F4\u65B0\u72B6\u6001\u76F8\u5173\u5185\u5BB9</strong>\u7684\u5BF9\u8C61\uFF0C\u53EB\u4ED6<code>Update</code>\u3002\u5728<code>render\u9636\u6BB5</code>\u7684<code>beginWork</code>\u4E2D\u4F1A\u6839\u636E<code>Update</code>\u8BA1\u7B97\u65B0\u7684<code>state</code>\u3002</p><p>\u4F1A\u5728\u4E0B\u4E00\u8282\u8BE6\u7EC6\u8BB2\u89E3<code>Update</code>\u3002</p><h3 id="\u4ECEfiber\u5230root" tabindex="-1"><a class="header-anchor" href="#\u4ECEfiber\u5230root" aria-hidden="true">#</a> \u4ECEfiber\u5230root</h3><p>\u73B0\u5728<code>\u89E6\u53D1\u72B6\u6001\u66F4\u65B0\u7684fiber</code>\u4E0A\u5DF2\u7ECF\u5305\u542B<code>Update</code>\u5BF9\u8C61\u3002</p><p>\u77E5\u9053\uFF0C<code>render\u9636\u6BB5</code>\u662F\u4ECE<code>rootFiber</code>\u5F00\u59CB\u5411\u4E0B\u904D\u5386\u3002\u90A3\u4E48\u5982\u4F55\u4ECE<code>\u89E6\u53D1\u72B6\u6001\u66F4\u65B0\u7684fiber</code>\u5F97\u5230<code>rootFiber</code>\u5462\uFF1F</p><p>\u7B54\u6848\u662F\uFF1A\u8C03\u7528<code>markUpdateLaneFromFiberToRoot</code>\u65B9\u6CD5\u3002</p>`,13),S=s("\u4F60\u53EF\u4EE5\u4ECE"),x={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L636",target:"_blank",rel:"noopener noreferrer"},F=s("\u8FD9\u91CC"),C=s("\u770B\u5230"),w=n("code",null,"markUpdateLaneFromFiberToRoot",-1),W=s("\u7684\u6E90\u7801"),L=o(`<p>\u8BE5\u65B9\u6CD5\u505A\u7684\u5DE5\u4F5C\u53EF\u4EE5\u6982\u62EC\u4E3A\uFF1A\u4ECE<code>\u89E6\u53D1\u72B6\u6001\u66F4\u65B0\u7684fiber</code>\u4E00\u76F4\u5411\u4E0A\u904D\u5386\u5230<code>rootFiber</code>\uFF0C\u5E76\u8FD4\u56DE<code>rootFiber</code>\u3002</p><p>\u7531\u4E8E\u4E0D\u540C\u66F4\u65B0\u4F18\u5148\u7EA7\u4E0D\u5C3D\u76F8\u540C\uFF0C\u6240\u4EE5\u8FC7\u7A0B\u4E2D\u8FD8\u4F1A\u66F4\u65B0\u904D\u5386\u5230\u7684<code>fiber</code>\u7684\u4F18\u5148\u7EA7\u3002\u8FD9\u5BF9\u4E8E\u5F53\u524D\u5C5E\u4E8E\u8D85\u7EB2\u5185\u5BB9\u3002</p><h3 id="\u8C03\u5EA6\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u8C03\u5EA6\u66F4\u65B0" aria-hidden="true">#</a> \u8C03\u5EA6\u66F4\u65B0</h3><p>\u73B0\u5728\u62E5\u6709\u4E00\u4E2A<code>rootFiber</code>\uFF0C\u8BE5<code>rootFiber</code>\u5BF9\u5E94\u7684<code>Fiber\u6811</code>\u4E2D\u67D0\u4E2A<code>Fiber\u8282\u70B9</code>\u5305\u542B\u4E00\u4E2A<code>Update</code>\u3002</p><p>\u63A5\u4E0B\u6765\u901A\u77E5<code>Scheduler</code>\u6839\u636E<strong>\u66F4\u65B0</strong>\u7684\u4F18\u5148\u7EA7\uFF0C\u51B3\u5B9A\u4EE5<strong>\u540C\u6B65</strong>\u8FD8\u662F<strong>\u5F02\u6B65</strong>\u7684\u65B9\u5F0F\u8C03\u5EA6\u672C\u6B21\u66F4\u65B0\u3002</p><p>\u8FD9\u91CC\u8C03\u7528\u7684\u65B9\u6CD5\u662F<code>ensureRootIsScheduled</code>\u3002</p><p>\u4EE5\u4E0B\u662F<code>ensureRootIsScheduled</code>\u6700\u6838\u5FC3\u7684\u4E00\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>newCallbackPriority <span class="token operator">===</span> SyncLanePriority<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4EFB\u52A1\u5DF2\u7ECF\u8FC7\u671F\uFF0C\u9700\u8981\u540C\u6B65\u6267\u884Crender\u9636\u6BB5</span>
  newCallbackNode <span class="token operator">=</span> <span class="token function">scheduleSyncCallback</span><span class="token punctuation">(</span>
    <span class="token function">performSyncWorkOnRoot</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6839\u636E\u4EFB\u52A1\u4F18\u5148\u7EA7\u5F02\u6B65\u6267\u884Crender\u9636\u6BB5</span>
  <span class="token keyword">var</span> schedulerPriorityLevel <span class="token operator">=</span> <span class="token function">lanePriorityToSchedulerPriority</span><span class="token punctuation">(</span>
    newCallbackPriority
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  newCallbackNode <span class="token operator">=</span> <span class="token function">scheduleCallback</span><span class="token punctuation">(</span>
    schedulerPriorityLevel<span class="token punctuation">,</span>
    <span class="token function">performConcurrentWorkOnRoot</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,8),U=s("\u4F60\u53EF\u4EE5\u4ECE"),O={href:"https://github.com/facebook/react/blob/b6df4417c79c11cfb44f965fab55b573882b1d54/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L602",target:"_blank",rel:"noopener noreferrer"},j=s("\u8FD9\u91CC"),P=s("\u770B\u5230"),I=n("code",null,"ensureRootIsScheduled",-1),N=s("\u7684\u6E90\u7801"),T=o(`<p>\u5176\u4E2D\uFF0C<code>scheduleCallback</code>\u548C<code>scheduleSyncCallback</code>\u4F1A\u8C03\u7528<code>Scheduler</code>\u63D0\u4F9B\u7684\u8C03\u5EA6\u65B9\u6CD5\u6839\u636E<code>\u4F18\u5148\u7EA7</code>\u8C03\u5EA6\u56DE\u8C03\u51FD\u6570\u6267\u884C\u3002</p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u91CC\u8C03\u5EA6\u7684\u56DE\u8C03\u51FD\u6570\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">performSyncWorkOnRoot</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">performConcurrentWorkOnRoot</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5373<code>render\u9636\u6BB5</code>\u7684\u5165\u53E3\u51FD\u6570\u3002</p><p>\u81F3\u6B64\uFF0C<code>\u72B6\u6001\u66F4\u65B0</code>\u5C31\u548C\u6240\u719F\u77E5\u7684<code>render\u9636\u6BB5</code>\u8FDE\u63A5\u4E0A\u4E86\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u8BA9\u68B3\u7406\u4E0B<code>\u72B6\u6001\u66F4\u65B0</code>\u7684\u6574\u4E2A\u8C03\u7528\u8DEF\u5F84\u7684\u5173\u952E\u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u89E6\u53D1\u72B6\u6001\u66F4\u65B0\uFF08\u6839\u636E\u573A\u666F\u8C03\u7528\u4E0D\u540C\u65B9\u6CD5\uFF09

    <span class="token operator">|</span>
    <span class="token operator">|</span>
    <span class="token function">v</span>

\u521B\u5EFAUpdate\u5BF9\u8C61\uFF08\u63A5\u4E0B\u6765\u4E09\u8282\u8BE6\u89E3\uFF09

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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="\u603B\u7ED3-1" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3-1" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u672C\u8282\u4E86\u89E3\u4E86<strong>\u72B6\u6001\u66F4\u65B0</strong>\u7684\u6574\u4E2A\u6D41\u7A0B\u3002</p><p>\u5728\u63A5\u4E0B\u6765\u4E09\u8282\u4E2D\uFF0C\u4F1A\u82B1\u5927\u91CF\u7BC7\u5E45\u8BB2\u89E3<code>Update</code>\u7684\u5DE5\u4F5C\u673A\u5236\uFF0C\u56E0\u4E3A\u4ED6\u662F\u6784\u6210<code>React concurrent mode</code>\u7684\u6838\u5FC3\u673A\u5236\u4E4B\u4E00\u3002</p>`,11);function V(B,E){const a=p("ExternalLinkIcon");return r(),c(t,null,[d,n("p",null,[b,n("a",u,[k,e(a)]),m]),h,f,n("p",null,[_,n("a",v,[g,e(a)]),R]),y,n("blockquote",null,[n("p",null,[S,n("a",x,[F,e(a)]),C,w,W])]),L,n("blockquote",null,[n("p",null,[U,n("a",O,[j,e(a)]),P,I,N])]),T],64)}var M=l(i,[["render",V]]);export{M as default};
