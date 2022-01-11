import{r as o,o as t,c as p,b as e,d as s,F as r,e as a,a as c}from"./app.2f6bbef8.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const l={},d=e("h1",{id:"\u5F15\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5F15\u7528","aria-hidden":"true"},"#"),a(" \u5F15\u7528")],-1),u={href:"https://zh-hans.reactjs.org/docs/codebase-overview.html",target:"_blank",rel:"noopener noreferrer"},h=a("\u5B98\u7F51"),k=c(`<h1 id="\u6E90\u7801\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u6982\u89C8" aria-hidden="true">#</a> \u6E90\u7801\u6982\u89C8</h1><h2 id="\u9879\u76EE\u6839\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u6839\u76EE\u5F55" aria-hidden="true">#</a> \u9879\u76EE\u6839\u76EE\u5F55</h2><p>\u5F53\u514B\u9686 <code>React</code> \u4ED3\u5E93\u4E4B\u540E\uFF0C\u5C06\u770B\u5230\u9879\u76EE\u6839\u76EE\u5F55\u7684\u4FE1\u606F</p><ul><li><p><code>packages</code> \u5305\u542B\u5143\u6570\u636E\uFF08\u6BD4\u5982 <code>package.json</code>\uFF09\u548C React \u4ED3\u5E93\u4E2D\u6240\u6709 package \u7684\u6E90\u7801\uFF08\u5B50\u76EE\u5F55 <code>src</code>\uFF09\u3002<strong>\u5982\u679C\u9700\u8981\u4FEE\u6539\u6E90\u4EE3\u7801, \u90A3\u4E48\u6BCF\u4E2A\u5305\u7684 src \u5B50\u76EE\u5F55\u662F\u6700\u9700\u8981\u82B1\u8D39\u7CBE\u529B\u7684\u5730\u65B9</strong>\u3002</p></li><li><p><code>fixtures</code> \u5305\u542B\u4E00\u4E9B\u7ED9\u8D21\u732E\u8005\u51C6\u5907\u7684\u5C0F\u578B React \u6D4B\u8BD5\u9879\u76EE\u3002</p></li><li><p><code>build</code> \u662F React \u7684\u8F93\u51FA\u76EE\u5F55\u3002\u6E90\u7801\u4ED3\u5E93\u4E2D\u5E76\u6CA1\u6709\u8FD9\u4E2A\u76EE\u5F55\uFF0C\u4F46\u662F\u5B83\u4F1A\u5728\u514B\u9686 React \u5E76\u4E14\u7B2C\u4E00\u6B21\u6784\u5EFA\u5B83\u4E4B\u540E\u51FA\u73B0\u3002</p></li></ul><h2 id="\u5171\u7F6E\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5171\u7F6E\u6D4B\u8BD5" aria-hidden="true">#</a> \u5171\u7F6E\u6D4B\u8BD5</h2><p>\u6CA1\u6709\u5355\u5143\u6D4B\u8BD5\u7684\u9876\u5C42\u76EE\u5F55\u3002\u800C\u662F\u5C06\u5B83\u4EEC\u653E\u7F6E\u5728\u6240\u9700\u6D4B\u8BD5\u6587\u4EF6\u7684\u76F8\u540C\u76EE\u5F55\u4E0B\u7684 <code>__tests__</code> \u7684\u76EE\u5F55\u4E4B\u4E2D\u3002</p><p>\u6BD4\u5982\uFF0C\u4E00\u4E2A\u7528\u4E8E <code>setInnerHTML.js</code> \u7684\u6D4B\u8BD5\u6587\u4EF6\uFF0C\u4F1A\u5B58\u653E\u5728 <code>__tests__/setInnerHTML-test.js</code>\uFF0C\u5C31\u5728\u5B83\u540C\u7EA7\u76EE\u5F55\u4E0B\u3002</p><h2 id="warning-\u548C-invariant" tabindex="-1"><a class="header-anchor" href="#warning-\u548C-invariant" aria-hidden="true">#</a> warning \u548C invariant</h2><p>React \u4EE3\u7801\u5E93\u76F4\u63A5\u4F7F\u7528 <code>console.error</code> \u6765\u5C55\u793A warnings\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Something is wrong.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>warning \u4EC5\u5728\u5F00\u53D1\u73AF\u5883\u4E2D\u542F\u7528\u3002\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u4ED6\u4EEC\u4F1A\u88AB\u5B8C\u5168\u5254\u9664\u6389\u3002\u5982\u679C\u9700\u8981\u5728\u751F\u4EA7\u73AF\u5883\u7981\u6B62\u6267\u884C\u67D0\u4E9B\u4EE3\u7801\uFF0C\u8BF7\u4F7F\u7528 <code>invariant</code> \u6A21\u5757\u4EE3\u66FF <code>warning</code>\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">var</span> invariant <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;invariant&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">invariant</span><span class="token punctuation">(</span>
  <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token string">&#39;You shall not pass!&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>\u5F53 invariant \u5224\u522B\u6761\u4EF6\u4E3A false \u65F6\uFF0C\u4F1A\u5C06 invariant \u7684\u4FE1\u606F\u4F5C\u4E3A\u9519\u8BEF\u629B\u51FA</strong></p><p>\u201CInvariant\u201D \u7528\u4E8E\u58F0\u660E \u201C\u8FD9\u4E2A\u6761\u4EF6\u5E94\u603B\u4E3A true\u201D\u3002\u53EF\u4EE5\u628A\u5B83\u5F53\u6210\u4E00\u79CD\u65AD\u8A00\u3002</p><p>\u4FDD\u6301\u5F00\u53D1\u548C\u751F\u4EA7\u73AF\u5883\u7684\u884C\u4E3A\u76F8\u4F3C\u662F\u5341\u5206\u91CD\u8981\u7684\uFF0C\u56E0\u6B64 <code>invariant</code> \u5728\u5F00\u53D1\u548C\u751F\u4EA7\u73AF\u5883\u4E0B\u90FD\u4F1A\u629B\u51FA\u9519\u8BEF\u3002\u4E0D\u540C\u70B9\u5728\u4E8E\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u8FD9\u4E9B\u9519\u8BEF\u4FE1\u606F\u4F1A\u88AB\u81EA\u52A8\u66FF\u6362\u6210\u9519\u8BEF\u4EE3\u7801\uFF0C\u8FD9\u6837\u53EF\u4EE5\u8BA9\u8F93\u51FA\u5E93\u6587\u4EF6\u53D8\u5F97\u66F4\u5C0F\u3002</p><h2 id="\u5F00\u53D1\u73AF\u5883\u4E0E\u751F\u4EA7\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883\u4E0E\u751F\u4EA7\u73AF\u5883" aria-hidden="true">#</a> \u5F00\u53D1\u73AF\u5883\u4E0E\u751F\u4EA7\u73AF\u5883</h2><p>\u53EF\u4EE5\u5728\u4EE3\u7801\u5E93\u4E2D\u4F7F\u7528 <code>__DEV__</code> \u8FD9\u4E2A\u4F2A\u5168\u5C40\u53D8\u91CF\uFF0C\u7528\u4E8E\u7BA1\u7406\u5F00\u53D1\u73AF\u5883\u4E2D\u9700\u8FD0\u884C\u7684\u4EE3\u7801\u5757</p><p>\u8FD9\u5728\u7F16\u8BD1\u9636\u6BB5\u4F1A\u88AB\u5185\u8054\uFF0C\u5728 CommonJS \u6784\u5EFA\u4E2D\uFF0C\u8F6C\u5316\u6210 <code>p<wbr>rocess.env.NODE_ENV !== &#39;production&#39;</code> \u8FD9\u6837\u7684\u5224\u65AD\u3002</p><p>\u5BF9\u4E8E\u72EC\u7ACB\u6784\u5EFA\u6765\u8BF4\uFF0C\u5728\u6CA1\u6709 minify \u7684\u6784\u5EFA\u4E2D\uFF0C\u5B83\u4F1A\u53D8\u6210 <code>true</code>\uFF0C\u540C\u65F6\u5728 minify \u7684\u6784\u5EFA\u4E2D\uFF0C\u68C0\u6D4B\u5230\u7684 <code>if</code> \u4EE3\u7801\u5757\u4F1A\u88AB\u5B8C\u5168\u5254\u9664\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4EC5\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u6267\u884C\u7684\u4EE3\u7801</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="flow" tabindex="-1"><a class="header-anchor" href="#flow" aria-hidden="true">#</a> Flow</h2><p>\u6700\u8FD1\u5C06 <code>Flow</code> \u5F15\u5165\u6E90\u7801\uFF0C\u7528\u4E8E\u7C7B\u578B\u68C0\u67E5\u3002\u5728\u8BB8\u53EF\u8BC1\u5934\u90E8\u7684\u6CE8\u91CA\u4E2D\uFF0C\u6807\u8BB0\u4E3A <code>@flow</code> \u6CE8\u91CA\u7684\u6587\u4EF6\u662F\u5DF2\u7ECF\u7ECF\u8FC7\u7C7B\u578B\u68C0\u67E5\u7684\u3002</p><p>\u63A5\u53D7<code>\u6DFB\u52A0 Flow \u6CE8\u91CA\u5230\u73B0\u6709\u4EE3\u7801</code>\u3002Flow \u6CE8\u91CA\u770B\u4E0A\u53BB\u50CF\u8FD9\u6837\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>ReactRef<span class="token punctuation">.</span><span class="token function-variable function">detachRefs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">instance</span><span class="token operator">:</span> ReactInstance<span class="token punctuation">,</span>
  <span class="token literal-property property">element</span><span class="token operator">:</span> ReactElement <span class="token operator">|</span> string <span class="token operator">|</span> number <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5982\u679C\u53EF\u4EE5\u7684\u8BDD\uFF0C\u65B0\u4EE3\u7801\u5E94\u5C3D\u91CF\u4F7F\u7528 Flow \u6CE8\u91CA\u3002 \u53EF\u4EE5\u8FD0\u884C <code>yarn flow</code>\uFF0C\u7528 Flow \u672C\u5730\u68C0\u67E5\u7684\u4EE3\u7801\u3002</p><h2 id="multiple-packages" tabindex="-1"><a class="header-anchor" href="#multiple-packages" aria-hidden="true">#</a> Multiple Packages</h2>`,26),b=a("React \u91C7\u7528 "),m={href:"https://danluu.com/monorepo/",target:"_blank",rel:"noopener noreferrer"},_=a("monorepo"),g=a(" \u7684\u7BA1\u7406\u65B9\u5F0F\u3002\u4ED3\u5E93\u4E2D\u5305\u542B\u591A\u4E2A\u72EC\u7ACB\u7684\u5305\uFF0C\u4EE5\u4FBF\u4E8E\u66F4\u6539\u53EF\u4EE5\u4E00\u8D77\u8054\u8C03\uFF0C\u5E76\u4E14\u95EE\u9898\u53EA\u4F1A\u51FA\u73B0\u5728\u540C\u4E00\u5730\u65B9\u3002"),R=c('<h2 id="react-core" tabindex="-1"><a class="header-anchor" href="#react-core" aria-hidden="true">#</a> React Core</h2><p>React \u201CCore\u201D \u4E2D\u5305\u542B\u6240\u6709<code>\u5168\u5C40 React API</code>\uFF0C\u6BD4\u5982\uFF1A</p><ul><li><p>React.createElement()</p></li><li><p>React.Component</p></li><li><p>React.Children</p></li></ul><p><strong>React \u6838\u5FC3\u53EA\u5305\u542B\u5B9A\u4E49\u7EC4\u4EF6\u5FC5\u8981\u7684 API</strong>\u3002\u5B83\u4E0D\u5305\u542B\u534F\u8C03\u7B97\u6CD5\u6216\u8005\u5176\u4ED6\u5E73\u53F0\u7279\u5B9A\u7684\u4EE3\u7801\u3002\u5B83\u540C\u65F6\u9002\u7528\u4E8E React DOM \u548C React Native \u7EC4\u4EF6\u3002</p><p>React \u6838\u5FC3\u4EE3\u7801\u5728\u6E90\u7801\u7684 <code>packages/react</code> \u76EE\u5F55\u4E2D\u3002\u5728 npm \u4E0A\u53D1\u5E03\u4E3A <code>react</code> \u5305\u3002\u76F8\u5E94\u7684\u72EC\u7ACB\u6D4F\u89C8\u5668\u6784\u5EFA\u7248\u672C\u79F0\u4E3A <code>react.js</code>\uFF0C\u5B83\u4F1A\u5BFC\u51FA\u4E00\u4E2A\u79F0\u4E3A <code>React</code> \u7684\u5168\u5C40\u5BF9\u8C61\u3002</p><h2 id="\u6E32\u67D3\u5668" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3\u5668" aria-hidden="true">#</a> \u6E32\u67D3\u5668</h2><p>React \u6700\u521D\u53EA\u662F\u670D\u52A1\u4E8E DOM\uFF0C\u4F46\u662F\u8FD9\u4E4B\u540E\u88AB\u6539\u7F16\u6210\u4E5F\u80FD\u540C\u65F6\u652F\u6301\u539F\u751F\u5E73\u53F0\u7684 React Native\u3002\u56E0\u6B64\uFF0C\u5728 React \u5185\u90E8\u673A\u5236\u4E2D\u5F15\u5165\u4E86\u201C\u6E32\u67D3\u5668\u201D\u8FD9\u4E2A\u6982\u5FF5\u3002</p><p><strong>\u6E32\u67D3\u5668\u7528\u4E8E\u7BA1\u7406\u4E00\u68F5 React \u6811\uFF0C\u4F7F\u5176\u6839\u636E\u5E95\u5C42\u5E73\u53F0\u8FDB\u884C\u4E0D\u540C\u7684\u8C03\u7528</strong>\u3002</p><p>\u6E32\u67D3\u5668\u540C\u6837\u4F4D\u4E8E <code>packages/</code> \u76EE\u5F55\u4E0B\uFF1A</p><ul><li><p><code>React DOM Renderer</code> \u5C06 React \u7EC4\u4EF6\u6E32\u67D3\u6210 DOM\u3002\u5B83\u5B9E\u73B0\u4E86\u5168\u5C40 <code>ReactDOMAPI</code>\uFF0C\u8FD9\u5728npm\u4E0A\u4F5C\u4E3A <code>react-dom</code> \u5305\u3002\u8FD9\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u5355\u72EC\u6D4F\u89C8\u5668\u7248\u672C\u4F7F\u7528\uFF0C\u79F0\u4E3A <code>react-dom.js</code>\uFF0C\u5BFC\u51FA\u4E00\u4E2A <code>ReactDOM</code> \u7684\u5168\u5C40\u5BF9\u8C61.</p></li><li><p><code>React Native Renderer</code> \u5C06 React \u7EC4\u4EF6\u6E32\u67D3\u4E3A Native \u89C6\u56FE\u3002\u6B64\u6E32\u67D3\u5668\u5728 React Native \u5185\u90E8\u4F7F\u7528\u3002</p></li><li><p><code>React Test Renderer</code> \u5C06 React \u7EC4\u4EF6\u6E32\u67D3\u4E3A JSON \u6811\u3002\u8FD9\u7528\u4E8E <code>Jest</code> \u7684<code>\u5FEB\u7167\u6D4B\u8BD5</code>\u7279\u6027\u3002\u5728 npm \u4E0A\u4F5C\u4E3A <code>react-test-renderer</code> \u5305\u53D1\u5E03\u3002</p></li></ul><p>\u53E6\u5916\u4E00\u4E2A\u5B98\u65B9\u652F\u6301\u7684\u6E32\u67D3\u5668\u7684\u662F <code>react-art</code>\u3002\u5B83\u66FE\u7ECF\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684 <code>GitHub \u4ED3\u5E93</code>\uFF0C\u4F46\u662F\u73B0\u5728\u5C06\u6B64\u52A0\u5165\u4E86\u4E3B\u6E90\u4EE3\u7801\u6811\u3002</p><blockquote><p><strong>\u6CE8\u610F</strong>:</p><p>\u4E25\u683C\u8BF4\u6765\uFF0C<code>react-native-renderer</code> \u5B9E\u73B0\u4E86 React \u548C React Native \u7684\u8FDE\u63A5\u3002\u771F\u6B63\u6E32\u67D3 Native \u89C6\u56FE\u7684\u5E73\u53F0\u7279\u5B9A\u4EE3\u7801\u53CA\u7EC4\u4EF6\u90FD\u5B58\u50A8\u5728 <code>React Native \u4ED3\u5E93</code>\u4E2D\u3002</p></blockquote><h2 id="reconcilers" tabindex="-1"><a class="header-anchor" href="#reconcilers" aria-hidden="true">#</a> reconcilers</h2><p>\u5373\u4FBF React DOM \u548C React Native \u6E32\u67D3\u5668\u7684\u533A\u522B\u5F88\u5927\uFF0C\u4F46\u4E5F\u9700\u8981\u5171\u4EAB\u4E00\u4E9B\u903B\u8F91\u3002\u7279\u522B\u662F\u534F\u8C03\u7B97\u6CD5\u9700\u8981\u5C3D\u53EF\u80FD\u76F8\u4F3C\uFF0C\u8FD9\u6837\u53EF\u4EE5\u8BA9\u58F0\u660E\u5F0F\u6E32\u67D3\uFF0C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0Cstate\uFF0C\u751F\u547D\u5468\u671F\u65B9\u6CD5\u548C refs \u7B49\u7279\u6027\uFF0C\u4FDD\u6301\u8DE8\u5E73\u53F0\u5DE5\u4F5C\u4E00\u81F4\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4E0D\u540C\u7684\u6E32\u67D3\u5668\u5F7C\u6B64\u5171\u4EAB\u4E00\u4E9B\u4EE3\u7801\u3002\u79F0 React \u7684\u8FD9\u4E00\u90E8\u5206\u4E3A \u201Creconciler\u201D\u3002\u5F53\u5904\u7406\u7C7B\u4F3C\u4E8E <code>setState()</code> \u8FD9\u6837\u7684\u66F4\u65B0\u65F6\uFF0Creconciler \u4F1A\u8C03\u7528\u6811\u4E2D\u7EC4\u4EF6\u4E0A\u7684 <code>render()</code>\uFF0C\u7136\u540E\u51B3\u5B9A\u662F\u5426\u8FDB\u884C\u6302\u8F7D\uFF0C\u66F4\u65B0\u6216\u662F\u5378\u8F7D\u64CD\u4F5C\u3002</p><p>Reconciler \u6CA1\u6709\u5355\u72EC\u7684\u5305\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u6682\u65F6\u6CA1\u6709\u516C\u5171 API\u3002\u76F8\u53CD\uFF0C\u5B83\u4EEC\u88AB\u5982 React DOM \u548C React Native \u7684\u6E32\u67D3\u5668\u6392\u9664\u5728\u5916\u3002</p><h2 id="fiber-reconciler" tabindex="-1"><a class="header-anchor" href="#fiber-reconciler" aria-hidden="true">#</a> Fiber reconciler</h2><p>\u201Cfiber\u201D reconciler \u662F\u4E00\u4E2A\u65B0\u5C1D\u8BD5\uFF0C\u81F4\u529B\u4E8E\u89E3\u51B3 stack reconciler \u4E2D\u56FA\u6709\u7684\u95EE\u9898\uFF0C\u540C\u65F6\u89E3\u51B3\u4E00\u4E9B\u5386\u53F2\u9057\u7559\u95EE\u9898\u3002Fiber \u4ECE React 16 \u5F00\u59CB\u53D8\u6210\u4E86\u9ED8\u8BA4\u7684 reconciler\u3002</p><p>\u5B83\u7684\u4E3B\u8981\u76EE\u6807\u662F\uFF1A</p><ul><li><p>\u80FD\u591F\u628A\u53EF\u4E2D\u65AD\u7684\u4EFB\u52A1\u5207\u7247\u5904\u7406\u3002</p></li><li><p>\u80FD\u591F\u8C03\u6574\u4F18\u5148\u7EA7\uFF0C\u91CD\u7F6E\u5E76\u590D\u7528\u4EFB\u52A1\u3002</p></li><li><p>\u80FD\u591F\u5728\u7236\u5143\u7D20\u4E0E\u5B50\u5143\u7D20\u4E4B\u95F4\u4EA4\u9519\u5904\u7406\uFF0C\u4EE5\u652F\u6301 React \u4E2D\u7684\u5E03\u5C40\u3002</p></li><li><p>\u80FD\u591F\u5728 render() \u4E2D\u8FD4\u56DE\u591A\u4E2A\u5143\u7D20\u3002</p></li><li><p>\u66F4\u597D\u5730\u652F\u6301\u9519\u8BEF\u8FB9\u754C\u3002</p></li></ul><p>\u6E90\u4EE3\u7801\u5728 <code>packages/react-reconciler</code> \u76EE\u5F55\u4E0B</p><h2 id="\u4E8B\u4EF6\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u7CFB\u7EDF" aria-hidden="true">#</a> \u4E8B\u4EF6\u7CFB\u7EDF</h2><p>React \u5728\u539F\u751F\u4E8B\u4EF6\u57FA\u7840\u4E0A\u8FDB\u884C\u4E86\u5C01\u88C5\uFF0C\u4EE5\u62B9\u5E73\u6D4F\u89C8\u5668\u95F4\u5DEE\u5F02\u3002\u5176\u6E90\u7801\u5728 <code>packages/react-dom/src/events</code> \u76EE\u5F55\u4E0B</p>',23);function f(v,x){const n=o("ExternalLinkIcon");return t(),p(r,null,[d,e("p",null,[e("a",u,[h,s(n)])]),k,e("p",null,[b,e("a",m,[_,s(n)]),g]),R],64)}var N=i(l,[["render",f]]);export{N as default};
