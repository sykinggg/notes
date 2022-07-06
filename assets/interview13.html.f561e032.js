import{_ as e,r as t,o as p,c as o,b as n,d as c,F as l,e as s,a as r}from"./app.adb48220.js";const u={},i=n("h1",{id:"\u6982\u5FF5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6982\u5FF5","aria-hidden":"true"},"#"),s(" \u6982\u5FF5")],-1),k={href:"/react/interview/interview7?id=classcontexttype",target:"_blank",rel:"noopener noreferrer"},d=s("Class.contextType"),b=r(`<p>\u5B9A\u4E49\u5F53\u524D\u7EC4\u4EF6\u8981\u4F7F\u7528\u54EA\u4E00\u4E2Acontext</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> MyContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span>defaultValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">;</span>
    <span class="token comment">/* perform a side-effect at mount using the value of MyContext */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
MyClass<span class="token punctuation">.</span>contextType <span class="token operator">=</span> MyContext<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h1 id="childcontexttypes" tabindex="-1"><a class="header-anchor" href="#childcontexttypes" aria-hidden="true">#</a> childContextTypes</h1><p>childContextTypes\u7528\u6765\u5B9A\u4E49context\u6570\u636E\u7C7B\u578B\uFF0C\u8BE5api\u4ECE16.3\u5F00\u59CB\u5DF2\u88AB\u5E9F\u5F03</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MessageList</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">getChildContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;purple&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">MessageList</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

MessageList<span class="token punctuation">.</span>childContextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,5);function m(x,h){const a=t("ExternalLinkIcon");return p(),o(l,null,[i,n("p",null,[n("a",k,[d,c(a)])]),b],64)}var g=e(u,[["render",m],["__file","interview13.html.vue"]]);export{g as default};
