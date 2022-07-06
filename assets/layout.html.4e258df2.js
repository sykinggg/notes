import{_ as p,r as o,o as l,c as r,b as n,d as a,w as u,F as i,a as t,e as s}from"./app.9d3046e8.js";const d={},k=t(`<p>\u8BE5\u9636\u6BB5\u4E4B\u6240\u4EE5\u79F0\u4E3A<code>layout</code>\uFF0C\u56E0\u4E3A\u8BE5\u9636\u6BB5\u7684\u4EE3\u7801\u90FD\u662F\u5728<code>DOM</code>\u6E32\u67D3\u5B8C\u6210\uFF08<code>mutation\u9636\u6BB5</code>\u5B8C\u6210\uFF09\u540E\u6267\u884C\u7684\u3002</p><p>\u8BE5\u9636\u6BB5\u89E6\u53D1\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\u548C<code>hook</code>\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u5230\u5DF2\u7ECF\u6539\u53D8\u540E\u7684<code>DOM</code>\uFF0C\u5373\u8BE5\u9636\u6BB5\u662F\u53EF\u4EE5\u53C2\u4E0E<code>DOM layout</code>\u7684\u9636\u6BB5\u3002</p><h2 id="\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u6982\u89C8" aria-hidden="true">#</a> \u6982\u89C8</h2><p>\u4E0E\u524D\u4E24\u4E2A\u9636\u6BB5\u7C7B\u4F3C\uFF0C<code>layout\u9636\u6BB5</code>\u4E5F\u662F\u904D\u5386<code>effectList</code>\uFF0C\u6267\u884C\u51FD\u6570\u3002</p><p>\u5177\u4F53\u6267\u884C\u7684\u51FD\u6570\u662F<code>commitLayoutEffects</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>root<span class="token punctuation">.</span>current <span class="token operator">=</span> finishedWork<span class="token punctuation">;</span>

nextEffect <span class="token operator">=</span> firstEffect<span class="token punctuation">;</span>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">commitLayoutEffects</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">invariant</span><span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;Should be working on an effect.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">captureCommitPhaseError</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

nextEffect <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="commitlayouteffects" tabindex="-1"><a class="header-anchor" href="#commitlayouteffects" aria-hidden="true">#</a> commitLayoutEffects</h2><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p>`,8),b=s("\u4F60\u53EF\u4EE5\u5728"),f={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L2302",target:"_blank",rel:"noopener noreferrer"},m=s("\u8FD9\u91CC"),h=s("\u770B\u5230"),_=n("code",null,"commitLayoutEffects",-1),y=s("\u6E90\u7801"),g=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitLayoutEffects</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span> <span class="token literal-property property">committedLanes</span><span class="token operator">:</span> Lanes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> effectTag <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>effectTag<span class="token punctuation">;</span>

    <span class="token comment">// \u8C03\u7528\u751F\u547D\u5468\u671F\u94A9\u5B50\u548Chook</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> <span class="token punctuation">(</span>Update <span class="token operator">|</span> Callback<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> current <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
      <span class="token function">commitLayoutEffectOnFiber</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> current<span class="token punctuation">,</span> nextEffect<span class="token punctuation">,</span> committedLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u8D4B\u503Cref</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> Ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">commitAttachRef</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><code>commitLayoutEffects</code>\u4E00\u5171\u505A\u4E86\u4E24\u4EF6\u4E8B\uFF1A</p><ol><li><p>commitLayoutEffectOnFiber\uFF08\u8C03\u7528<code>\u751F\u547D\u5468\u671F\u94A9\u5B50</code>\u548C<code>hook</code>\u76F8\u5173\u64CD\u4F5C\uFF09</p></li><li><p>commitAttachRef\uFF08\u8D4B\u503C ref\uFF09</p></li></ol><h2 id="commitlayouteffectonfiber" tabindex="-1"><a class="header-anchor" href="#commitlayouteffectonfiber" aria-hidden="true">#</a> commitLayoutEffectOnFiber</h2><p><code>commitLayoutEffectOnFiber</code>\u65B9\u6CD5\u4F1A\u6839\u636E<code>fiber.tag</code>\u5BF9\u4E0D\u540C\u7C7B\u578B\u7684\u8282\u70B9\u5206\u522B\u5904\u7406\u3002</p>`,5),E=s("\u4F60\u53EF\u4EE5\u5728"),w={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberCommitWork.new.js#L459",target:"_blank",rel:"noopener noreferrer"},v=s("\u8FD9\u91CC"),L=s("\u770B\u5230"),x=n("code",null,"commitLayoutEffectOnFiber",-1),F=s("\u6E90\u7801\uFF08"),j=n("code",null,"commitLayoutEffectOnFiber",-1),R=s("\u4E3A\u522B\u540D\uFF0C\u65B9\u6CD5\u539F\u540D\u4E3A"),C=n("code",null,"commitLifeCycles",-1),q=s("\uFF09"),W=s("\u5BF9\u4E8E"),O=n("code",null,"ClassComponent",-1),D=s("\uFF0C\u4ED6\u4F1A\u901A\u8FC7"),M=n("code",null,"current === null?",-1),T=s("\u533A\u5206\u662F"),U=n("code",null,"mount",-1),A=s("\u8FD8\u662F"),B=n("code",null,"update",-1),H=s("\uFF0C\u8C03\u7528"),N={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberCommitWork.new.js#L538",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"componentDidMount",-1),I=s("\u6216"),P={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberCommitWork.new.js#L592",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"componentDidUpdate",-1),z=s("\u3002"),G=t(`<p>\u89E6\u53D1<code>\u72B6\u6001\u66F4\u65B0</code>\u7684<code>this.setState</code>\u5982\u679C\u8D4B\u503C\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570<code>\u56DE\u8C03\u51FD\u6570</code>\uFF0C\u4E5F\u4F1A\u5728\u6B64\u65F6\u8C03\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">xxx</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;i am update~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u5BF9\u4E8E<code>FunctionComponent</code>\u53CA\u76F8\u5173\u7C7B\u578B\uFF0C\u4ED6\u4F1A\u8C03\u7528<code>useLayoutEffect hook</code>\u7684<code>\u56DE\u8C03\u51FD\u6570</code>\uFF0C\u8C03\u5EA6<code>useEffect</code>\u7684<code>\u9500\u6BC1</code>\u4E0E<code>\u56DE\u8C03</code>\u51FD\u6570</li></ul><blockquote><p><code>\u76F8\u5173\u7C7B\u578B</code>\u6307\u7279\u6B8A\u5904\u7406\u540E\u7684<code>FunctionComponent</code>\uFF0C\u6BD4\u5982<code>ForwardRef</code>\u3001<code>React.memo</code>\u5305\u88F9\u7684<code>FunctionComponent</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">switch</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4EE5\u4E0B\u90FD\u662FFunctionComponent\u53CA\u76F8\u5173\u7C7B\u578B</span>
    <span class="token keyword">case</span> <span class="token literal-property property">FunctionComponent</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ForwardRef</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">SimpleMemoComponent</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Block</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6267\u884CuseLayoutEffect\u7684\u56DE\u8C03\u51FD\u6570</span>
      <span class="token function">commitHookEffectListMount</span><span class="token punctuation">(</span>HookLayout <span class="token operator">|</span> HookHasEffect<span class="token punctuation">,</span> finishedWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u8C03\u5EA6useEffect\u7684\u9500\u6BC1\u51FD\u6570\u4E0E\u56DE\u8C03\u51FD\u6570</span>
      <span class="token function">schedulePassiveEffects</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,5),J=s("\u4F60\u53EF\u4EE5\u4ECE"),K={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L465-L491",target:"_blank",rel:"noopener noreferrer"},Q=s("\u8FD9\u91CC"),X=s("\u770B\u5230\u8FD9\u6BB5\u4EE3\u7801"),Y=s("\u5728\u4E0A\u4E00\u8282\u4ECB\u7ECD"),Z=s("Update effect"),$=s("\u65F6\u4ECB\u7ECD\u8FC7\uFF0C"),nn=n("code",null,"mutation\u9636\u6BB5",-1),sn=s("\u4F1A\u6267\u884C"),an=n("code",null,"useLayoutEffect hook",-1),en=s("\u7684"),tn=n("code",null,"\u9500\u6BC1\u51FD\u6570",-1),on=s("\u3002"),cn=t(`<p>\u7ED3\u5408\u8FD9\u91CC\u53EF\u4EE5\u53D1\u73B0\uFF0C<code>useLayoutEffect hook</code>\u4ECE\u4E0A\u4E00\u6B21\u66F4\u65B0\u7684<code>\u9500\u6BC1\u51FD\u6570</code>\u8C03\u7528\u5230\u672C\u6B21\u66F4\u65B0\u7684<code>\u56DE\u8C03\u51FD\u6570</code>\u8C03\u7528\u662F\u540C\u6B65\u6267\u884C\u7684\u3002</p><p>\u800C<code>useEffect</code>\u5219\u9700\u8981\u5148\u8C03\u5EA6\uFF0C\u5728<code>Layout\u9636\u6BB5</code>\u5B8C\u6210\u540E\u518D\u5F02\u6B65\u6267\u884C\u3002</p><p>\u8FD9\u5C31\u662F<code>useLayoutEffect</code>\u4E0E<code>useEffect</code>\u7684\u533A\u522B\u3002</p><ul><li>\u5BF9\u4E8E<code>HostRoot</code>\uFF0C\u5373<code>rootFiber</code>\uFF0C\u5982\u679C\u8D4B\u503C\u4E86\u7B2C\u4E09\u4E2A\u53C2\u6570<code>\u56DE\u8C03\u51FD\u6570</code>\uFF0C\u4E5F\u4F1A\u5728\u6B64\u65F6\u8C03\u7528\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;i am mount~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="commitattachref" tabindex="-1"><a class="header-anchor" href="#commitattachref" aria-hidden="true">#</a> commitAttachRef</h2><p><code>commitLayoutEffects</code>\u4F1A\u505A\u7684\u7B2C\u4E8C\u4EF6\u4E8B\u662F<code>commitAttachRef</code>\u3002</p>`,7),pn=s("\u4F60\u53EF\u4EE5\u5728"),ln={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberCommitWork.new.js#L823",target:"_blank",rel:"noopener noreferrer"},rn=s("\u8FD9\u91CC"),un=s("\u770B\u5230"),dn=n("code",null,"commitAttachRef",-1),kn=s("\u6E90\u7801"),bn=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitAttachRef</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>ref<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ref <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> instance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>stateNode<span class="token punctuation">;</span>

    <span class="token comment">// \u83B7\u53D6DOM\u5B9E\u4F8B</span>
    <span class="token keyword">let</span> instanceToUse<span class="token punctuation">;</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
        instanceToUse <span class="token operator">=</span> <span class="token function">getPublicInstance</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        instanceToUse <span class="token operator">=</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> ref <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679Cref\u662F\u51FD\u6570\u5F62\u5F0F\uFF0C\u8C03\u7528\u56DE\u8C03\u51FD\u6570</span>
      <span class="token function">ref</span><span class="token punctuation">(</span>instanceToUse<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679Cref\u662Fref\u5B9E\u4F8B\u5F62\u5F0F\uFF0C\u8D4B\u503Cref.current</span>
      ref<span class="token punctuation">.</span>current <span class="token operator">=</span> instanceToUse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u4EE3\u7801\u903B\u8F91\u5F88\u7B80\u5355\uFF1A\u83B7\u53D6<code>DOM</code>\u5B9E\u4F8B\uFF0C\u66F4\u65B0<code>ref</code>\u3002</p><h2 id="current-fiber\u6811\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#current-fiber\u6811\u5207\u6362" aria-hidden="true">#</a> current Fiber\u6811\u5207\u6362</h2><p>\u81F3\u6B64\uFF0C\u6574\u4E2A<code>layout\u9636\u6BB5</code>\u5C31\u7ED3\u675F\u4E86\u3002</p><p>\u5728\u7ED3\u675F\u672C\u8282\u7684\u5B66\u4E60\u524D\uFF0C\u5173\u6CE8\u4E0B\u8FD9\u884C\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>root<span class="token punctuation">.</span>current <span class="token operator">=</span> finishedWork<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,6),fn=s("\u4F60\u53EF\u4EE5\u5728"),mn={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L2022",target:"_blank",rel:"noopener noreferrer"},hn=s("\u8FD9\u91CC"),_n=s("\u770B\u5230\u8FD9\u884C\u4EE3\u7801"),yn=s("\u5728"),gn={href:"/react/process/doubleBuffer.md#%E4%BB%80%E4%B9%88%E6%98%AF-%E5%8F%8C%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},En=s("\u53CC\u7F13\u5B58\u673A\u5236\u4E00\u8282"),wn=s("\u4ECB\u7ECD\u8FC7\uFF0C"),vn=n("code",null,"workInProgress Fiber\u6811",-1),Ln=s("\u5728"),xn=n("code",null,"commit\u9636\u6BB5",-1),Fn=s("\u5B8C\u6210\u6E32\u67D3\u540E\u4F1A\u53D8\u4E3A"),jn=n("code",null,"current Fiber\u6811",-1),Rn=s("\u3002\u8FD9\u884C\u4EE3\u7801\u7684\u4F5C\u7528\u5C31\u662F\u5207\u6362"),Cn=n("code",null,"fiberRootNode",-1),qn=s("\u6307\u5411\u7684"),Wn=n("code",null,"current Fiber\u6811",-1),On=s("\u3002"),Dn=t('<p>\u90A3\u4E48\u8FD9\u884C\u4EE3\u7801\u4E3A\u4EC0\u4E48\u5728\u8FD9\u91CC\u5462\uFF1F\uFF08\u5728<code>mutation\u9636\u6BB5</code>\u7ED3\u675F\u540E\uFF0C<code>layout\u9636\u6BB5</code>\u5F00\u59CB\u524D\u3002\uFF09</p><p>\u77E5\u9053<code>componentWillUnmount</code>\u4F1A\u5728<code>mutation\u9636\u6BB5</code>\u6267\u884C\u3002\u6B64\u65F6<code>current Fiber\u6811</code>\u8FD8\u6307\u5411\u524D\u4E00\u6B21\u66F4\u65B0\u7684<code>Fiber\u6811</code>\uFF0C\u5728\u751F\u547D\u5468\u671F\u94A9\u5B50\u5185\u83B7\u53D6\u7684<code>DOM</code>\u8FD8\u662F\u66F4\u65B0\u524D\u7684\u3002</p><p><code>componentDidMount</code>\u548C<code>componentDidUpdate</code>\u4F1A\u5728<code>layout\u9636\u6BB5</code>\u6267\u884C\u3002\u6B64\u65F6<code>current Fiber\u6811</code>\u5DF2\u7ECF\u6307\u5411\u66F4\u65B0\u540E\u7684<code>Fiber\u6811</code>\uFF0C\u5728\u751F\u547D\u5468\u671F\u94A9\u5B50\u5185\u83B7\u53D6\u7684<code>DOM</code>\u5C31\u662F\u66F4\u65B0\u540E\u7684\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4ECE\u8FD9\u8282\u5B66\u5230\uFF0C<code>layout\u9636\u6BB5</code>\u4F1A\u904D\u5386<code>effectList</code>\uFF0C\u4F9D\u6B21\u6267\u884C<code>commitLayoutEffects</code>\u3002\u8BE5\u65B9\u6CD5\u7684\u4E3B\u8981\u5DE5\u4F5C\u4E3A\u201C\u6839\u636E<code>effectTag</code>\u8C03\u7528\u4E0D\u540C\u7684\u5904\u7406\u51FD\u6570\u5904\u7406<code>Fiber</code>\u5E76\u66F4\u65B0<code>ref</code>\u3002</p>',5);function Mn(Tn,Un){const e=o("ExternalLinkIcon"),c=o("RouterLink");return l(),r(i,null,[k,n("blockquote",null,[n("p",null,[b,n("a",f,[m,a(e)]),h,_,y])]),g,n("blockquote",null,[n("p",null,[E,n("a",w,[v,a(e)]),L,x,F,j,R,C,q])]),n("ul",null,[n("li",null,[W,O,D,M,T,U,A,B,H,n("a",N,[S,a(e)]),I,n("a",P,[V,a(e)]),z])]),G,n("blockquote",null,[n("p",null,[J,n("a",K,[Q,a(e)]),X])]),n("p",null,[Y,a(c,{to:"/react/renderer/mutation.html#update-effect"},{default:u(()=>[Z]),_:1}),$,nn,sn,an,en,tn,on]),cn,n("blockquote",null,[n("p",null,[pn,n("a",ln,[rn,a(e)]),un,dn,kn])]),bn,n("blockquote",null,[n("p",null,[fn,n("a",mn,[hn,a(e)]),_n])]),n("p",null,[yn,n("a",gn,[En,a(e)]),wn,vn,Ln,xn,Fn,jn,Rn,Cn,qn,Wn,On]),Dn],64)}var Bn=p(d,[["render",Mn],["__file","layout.html.vue"]]);export{Bn as default};
