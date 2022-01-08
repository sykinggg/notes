import{r as p,o as t,c as d,a as e,b as o,F as l,e as n,d as s}from"./app.5ba8e4fa.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n(`<h1 id="\u6DF1\u5165\u6E90\u7801\u5256\u6790componentwillxxx\u4E3A\u4EC0\u4E48unsafe" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5165\u6E90\u7801\u5256\u6790componentwillxxx\u4E3A\u4EC0\u4E48unsafe" aria-hidden="true">#</a> \u6DF1\u5165\u6E90\u7801\u5256\u6790componentWillXXX\u4E3A\u4EC0\u4E48UNSAFE</h1><p>\u4ECE<code>v16.3.0</code>\u5F00\u59CB\u5982\u4E0B\u4E09\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u88AB\u6807\u8BB0\u4E3A<code>UNSAFE</code>\u3002</p><ul><li><p>componentWillMount</p></li><li><p>componentWillRecieveProps</p></li><li><p>componentWillUpdate</p></li></ul><p>\u7A76\u5176\u539F\u56E0\uFF0C\u6709\u5982\u4E0B\u4E24\u70B9\uFF1A</p><ul><li><p>\u8FD9\u4E09\u4E2A\u94A9\u5B50\u7ECF\u5E38\u88AB\u9519\u8BEF\u4F7F\u7528\uFF0C\u5E76\u4E14\u73B0\u5728\u51FA\u73B0\u4E86\u66F4\u597D\u7684\u66FF\u4EE3\u65B9\u6848\uFF08\u8FD9\u91CC\u6307\u65B0\u589E\u7684<code>getDerivedStateFromProps</code>\u4E0E<code>getSnapshotBeforeUpdate</code>\uFF09\u3002</p></li><li><p><code>React</code>\u4ECE<code>Legacy</code>\u6A21\u5F0F\u8FC1\u79FB\u5230<code>Concurrent</code>\u6A21\u5F0F\u540E\uFF0C\u8FD9\u4E9B\u94A9\u5B50\u7684\u8868\u73B0\u4F1A\u548C\u4E4B\u524D\u4E0D\u4E00\u81F4\u3002</p></li></ul><h2 id="\u88AB\u8BEF\u7528\u7684\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u88AB\u8BEF\u7528\u7684\u94A9\u5B50" aria-hidden="true">#</a> \u88AB\u8BEF\u7528\u7684\u94A9\u5B50</h2><hr><p>\u5148\u6765\u63A2\u8BA8\u7B2C\u4E00\u70B9\uFF0C\u8FD9\u91CC\u4EE5<code>componentWillRecieveProps</code>\u4E3E\u4F8B\u3002</p><p>\u7ECF\u5E38\u5728<code>componentWillRecieveProps</code>\u5185\u5904\u7406<code>props</code>\u6539\u53D8\u5E26\u6765\u7684\u5F71\u54CD\u3002\u6709\u4E9B\u540C\u5B66\u8BA4\u4E3A\u8FD9\u4E2A\u94A9\u5B50\u4F1A\u5728\u6BCF\u6B21<code>props</code>\u53D8\u5316\u540E\u89E6\u53D1\u3002</p><p>\u771F\u7684\u662F\u8FD9\u6837\u4E48\uFF1F\u8BA9\u770B\u770B\u6E90\u7801\u3002</p><p>\u8FD9\u6BB5\u4EE3\u7801\u51FA\u81EA<code>updateClassInstance</code>\u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>
  unresolvedOldProps <span class="token operator">!==</span> unresolvedNewProps <span class="token operator">||</span>
  oldContext <span class="token operator">!==</span> nextContext
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">callComponentWillReceiveProps</span><span class="token punctuation">(</span>
    workInProgress<span class="token punctuation">,</span>
    instance<span class="token punctuation">,</span>
    newProps<span class="token punctuation">,</span>
    nextContext<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,12),k=s("\u4F60\u53EF\u4EE5\u4ECE"),b={href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberClassComponent.new.js#L1034",target:"_blank",rel:"noopener noreferrer"},m=s("\u8FD9\u91CC"),h=s("\u770B\u5230\u8FD9\u6BB5\u6E90\u7801"),g=n('<p>\u5176\u4E2D<code>callComponentWillReceiveProps</code>\u65B9\u6CD5\u4F1A\u8C03\u7528<code>componentWillRecieveProps</code>\u3002</p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u662F\u5426\u8C03\u7528\u7684\u5173\u952E\u662F\u6BD4\u8F83<code>unresolvedOldProps</code>\u4E0E <code>unresolvedNewProps</code>\u662F\u5426\u5168\u7B49\uFF0C\u4EE5\u53CA<code>context</code>\u662F\u5426\u53D8\u5316\u3002</p><p>\u5176\u4E2D<code>unresolvedOldProps</code>\u4E3A\u7EC4\u4EF6\u4E0A\u6B21\u66F4\u65B0\u65F6\u7684<code>props</code>\uFF0C\u800C<code>unresolvedNewProps</code>\u5219\u6765\u81EA<code>ClassComponent</code>\u8C03\u7528<code>this.render</code>\u8FD4\u56DE\u7684<code>JSX</code>\u4E2D\u7684<code>props</code>\u53C2\u6570\u3002</p><p>\u53EF\u89C1\u4ED6\u4EEC\u7684<code>\u5F15\u7528</code>\u662F\u4E0D\u540C\u7684\u3002\u6240\u4EE5\u4ED6\u4EEC<code>\u5168\u7B49\u6BD4\u8F83</code>\u4E3A<code>false</code>\u3002</p><p>\u57FA\u4E8E\u6B64\u539F\u56E0\uFF0C<strong>\u6BCF\u6B21\u7236\u7EC4\u4EF6\u66F4\u65B0\u90FD\u4F1A\u89E6\u53D1\u5F53\u524D\u7EC4\u4EF6\u7684<code>componentWillRecieveProps</code>\u3002</strong></p><p>\u60F3\u60F3\u4F60\u662F\u5426\u4E5F\u66FE\u8BEF\u7528\u8FC7\uFF1F</p><h2 id="\u6A21\u5F0F\u8FC1\u79FB" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5F0F\u8FC1\u79FB" aria-hidden="true">#</a> \u6A21\u5F0F\u8FC1\u79FB</h2><hr><p>\u8BA9\u518D\u770B\u7B2C\u4E8C\u4E2A\u539F\u56E0\uFF1A</p><blockquote><p><code>React</code>\u4ECE<code>Legacy</code>\u6A21\u5F0F\u8FC1\u79FB\u5230<code>Concurrent</code>\u6A21\u5F0F\u540E\uFF0C\u8FD9\u4E9B\u94A9\u5B50\u7684\u8868\u73B0\u4F1A\u548C\u4E4B\u524D\u4E0D\u4E00\u81F4\u3002</p></blockquote><p>\u5148\u4E86\u89E3\u4E0B\u4EC0\u4E48\u662F\u6A21\u5F0F\uFF1F\u4E0D\u540C\u6A21\u5F0F\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</p><h3 id="\u4ECElegacy\u5230concurrent" tabindex="-1"><a class="header-anchor" href="#\u4ECElegacy\u5230concurrent" aria-hidden="true">#</a> \u4ECELegacy\u5230Concurrent</h3><p>\u4ECE<code>React15</code>\u5347\u7EA7\u4E3A<code>React16</code>\u540E\uFF0C\u6E90\u7801\u6539\u52A8\u5982\u6B64\u4E4B\u5927\uFF0C\u8BF4<code>React</code>\u88AB\u91CD\u6784\u53EF\u80FD\u66F4\u8D34\u5207\u4E9B\u3002</p><p>\u6B63\u662F\u7531\u4E8E\u53D8\u52A8\u5982\u6B64\u4E4B\u5927\uFF0C\u4F7F\u5F97\u4E00\u4E9B\u7279\u6027\u5728\u65B0\u65E7\u7248\u672C<code>React</code>\u4E2D\u8868\u73B0\u4E0D\u4E00\u81F4\uFF0C\u8FD9\u91CC\u5C31\u5305\u62EC\u4E0A\u6587\u8C08\u5230\u7684\u4E09\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u3002</p><p>\u4E3A\u4E86\u8BA9\u5F00\u53D1\u8005\u80FD\u5E73\u7A33\u4ECE\u65E7\u7248\u672C\u8FC1\u79FB\u5230\u65B0\u7248\u672C\uFF0C<code>React</code>\u63A8\u51FA\u4E86\u4E09\u4E2A\u6A21\u5F0F\uFF1A</p><ul><li><p><code>legacy\u6A21\u5F0F</code> -- \u901A\u8FC7<code>ReactDOM.render</code>\u521B\u5EFA\u7684\u5E94\u7528\u4F1A\u5F00\u542F\u8BE5\u6A21\u5F0F\u3002\u8FD9\u662F\u5F53\u524D<code>React</code>\u4F7F\u7528\u7684\u65B9\u5F0F\u3002\u8FD9\u4E2A\u6A21\u5F0F\u53EF\u80FD\u4E0D\u652F\u6301\u4E00\u4E9B\u65B0\u529F\u80FD\u3002</p></li><li><p><code>blocking\u6A21\u5F0F</code> -- \u901A\u8FC7<code>ReactDOM.createBlockingRoot</code>\u521B\u5EFA\u7684\u5E94\u7528\u4F1A\u5F00\u542F\u8BE5\u6A21\u5F0F\u3002\u5F00\u542F\u90E8\u5206<code>concurrent</code>\u6A21\u5F0F\u7279\u6027\uFF0C\u4F5C\u4E3A\u8FC1\u79FB\u5230<code>concurrent</code>\u6A21\u5F0F\u7684\u7B2C\u4E00\u6B65\u3002</p></li><li><p><code>concurrent\u6A21\u5F0F</code> -- \u901A\u8FC7<code>ReactDOM.createRoot</code>\u521B\u5EFA\u7684\u5E94\u7528\u4F1A\u5F00\u542F\u8BE5\u6A21\u5F0F\u3002\u9762\u5411\u672A\u6765\u7684\u5F00\u53D1\u6A21\u5F0F\u3002</p></li></ul>',16),_=s("\u4F60\u53EF\u4EE5\u4ECE"),v={href:"https://zh-hans.reactjs.org/docs/concurrent-mode-adoption.html#why-so-many-modes",target:"_blank",rel:"noopener noreferrer"},y=s("\u8FD9\u91CC"),f=s("\u770B\u5230\u4E0D\u540C\u6A21\u5F0F\u7684\u7279\u6027\u652F\u6301\u60C5\u51B5"),U=n('<p><code>concurrent\u6A21\u5F0F</code>\u76F8\u8F83\u5F53\u524D\u4F7F\u7528\u7684<code>legacy\u6A21\u5F0F</code>\u6700\u4E3B\u8981\u7684\u533A\u522B\u662F<strong>\u5C06\u540C\u6B65\u7684\u66F4\u65B0\u673A\u5236\u91CD\u6784\u4E3A\u5F02\u6B65\u53EF\u4E2D\u65AD\u7684\u66F4\u65B0\u3002</strong></p><p>\u63A5\u4E0B\u6765\u6765\u63A2\u8BA8<code>React</code>\u5982\u4F55\u5B9E\u73B0<code>\u5F02\u6B65\u66F4\u65B0</code>\uFF0C\u4EE5\u53CA\u4E3A\u4EC0\u4E48<code>\u5F02\u6B65\u66F4\u65B0</code>\u60C5\u51B5\u4E0B\u94A9\u5B50\u7684\u8868\u73B0\u548C<code>\u540C\u6B65\u66F4\u65B0</code>\u4E0D\u540C\u3002</p><h2 id="\u540C\u6B65\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65\u66F4\u65B0" aria-hidden="true">#</a> \u540C\u6B65\u66F4\u65B0</h2><hr><p>\u53EF\u4EE5\u7528<code>\u4EE3\u7801\u7248\u672C\u63A7\u5236</code>\u7C7B\u6BD4<code>\u66F4\u65B0\u673A\u5236</code>\u3002</p><p>\u5728\u6CA1\u6709<code>\u4EE3\u7801\u7248\u672C\u63A7\u5236</code>\u524D\uFF0C\u5728\u4EE3\u7801\u4E2D\u9010\u6B65\u53E0\u52A0\u529F\u80FD\u3002\u4E00\u5207\u770B\u8D77\u6765\u4E95\u7136\u6709\u5E8F\uFF0C\u76F4\u5230\u9047\u5230\u4E86\u4E00\u4E2A\u7D27\u6025\u7EBF\u4E0Abug\uFF08\u7EA2\u8272\u8282\u70B9\uFF09\u3002</p>',6),R=["src"],x=n('<p>\u4E3A\u4E86\u4FEE\u590D\u8FD9\u4E2Abug\uFF0C\u9700\u8981\u9996\u5148\u5C06\u4E4B\u524D\u7684\u4EE3\u7801\u63D0\u4EA4\u3002</p><p>\u5728<code>Reac</code>t\u4E2D\uFF0C\u6240\u6709\u901A\u8FC7<code>ReactDOM.render</code>\u521B\u5EFA\u7684\u5E94\u7528\u90FD\u662F\u901A\u8FC7\u7C7B\u4F3C\u7684\u65B9\u5F0F\u66F4\u65B0\u72B6\u6001\u3002</p><p>\u5373\u6240\u6709<code>\u66F4\u65B0</code>\u540C\u6B65\u6267\u884C\uFF0C\u6CA1\u6709<code>\u4F18\u5148\u7EA7</code>\u6982\u5FF5\uFF0C\u65B0\u6765\u7684<code>\u9AD8\u4F18\u66F4\u65B0</code>\uFF08\u7EA2\u8272\u8282\u70B9\uFF09\u4E5F\u9700\u8981\u6392\u5728\u5176\u4ED6<code>\u66F4\u65B0</code>\u540E\u9762\u6267\u884C\u3002</p><h1 id="\u5F02\u6B65\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u66F4\u65B0" aria-hidden="true">#</a> \u5F02\u6B65\u66F4\u65B0</h1><p>\u5F53\u6709\u4E86<code>\u4EE3\u7801\u7248\u672C\u63A7\u5236</code>\uFF0C\u6709\u7D27\u6025\u7EBF\u4E0Abug\u9700\u8981\u4FEE\u590D\u65F6\uFF0C\u6682\u5B58\u5F53\u524D\u5206\u652F\u7684\u4FEE\u6539\uFF0C\u5728<code>master\u5206\u652F</code>\u4FEE\u590Dbug\u5E76\u7D27\u6025\u4E0A\u7EBF\u3002</p>',5),j=["src"],C=e("p",null,[s("bug\u4FEE\u590D\u4E0A\u7EBF\u540E\u901A\u8FC7"),e("code",null,"git rebase"),s("\u547D\u4EE4\u548C"),e("code",null,"\u5F00\u53D1\u5206\u652F"),s("\u8FDE\u63A5\u4E0A\u3002"),e("code",null,"\u5F00\u53D1\u5206\u652F"),s("\u57FA\u4E8E\u4FEE\u590Dbug\u7684\u7248\u672C\u7EE7\u7EED\u5F00\u53D1\u3002")],-1),B=["src"],w=n(`<p>\u5728<code>React</code>\u4E2D\uFF0C\u901A\u8FC7<code>ReactDOM.createBlockingRoot</code>\u548C<code>ReactDOM.createRoot</code>\u521B\u5EFA\u7684\u5E94\u7528\u5728\u4EFB\u52A1\u672A\u8FC7\u671F\u60C5\u51B5\u4E0B\u4F1A\u91C7\u7528\u5F02\u6B65\u7684\u65B9\u5F0F\u66F4\u65B0\u72B6\u6001\u3002</p><p><code>\u9AD8\u4F18\u66F4\u65B0</code>\uFF08\u7EA2\u8272\u8282\u70B9\uFF09\u4E2D\u65AD\u6B63\u5728\u8FDB\u884C\u4E2D\u7684<code>\u4F4E\u4F18\u66F4\u65B0</code>\uFF08\u84DD\u8272\u8282\u70B9\uFF09\uFF0C\u5148\u5B8C\u6210\u6E32\u67D3\u6D41\u7A0B\u3002</p><p>\u5F85<code>\u9AD8\u4F18\u66F4\u65B0</code>\u5B8C\u6210\u540E\uFF0C<code>\u4F4E\u4F18\u66F4\u65B0</code>\u57FA\u4E8E<code>\u9AD8\u4F18\u66F4\u65B0</code>\u7684<code>\u90E8\u5206</code>\u6216\u8005<code>\u5B8C\u6574</code>\u7ED3\u679C\u91CD\u65B0\u66F4\u65B0\u3002</p><h2 id="\u6DF1\u5165\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5165\u6E90\u7801" aria-hidden="true">#</a> \u6DF1\u5165\u6E90\u7801</h2><hr><p>\u5728<code>React</code>\u6E90\u7801\u4E2D\uFF0C\u6BCF\u6B21\u53D1\u8D77<code>\u66F4\u65B0</code>\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A<code>Update</code>\u5BF9\u8C61\uFF0C\u540C\u4E00\u7EC4\u4EF6\u7684\u591A\u4E2A<code>Update</code>\uFF08\u5982\u4E0A\u56FE\u6240\u793A\u7684A -&gt; B -&gt; C\uFF09\u4F1A\u4EE5<code>\u94FE\u8868</code>\u7684\u5F62\u5F0F\u4FDD\u5B58\u5728<code>updateQueue</code>\u4E2D\u3002</p><p>\u9996\u5148\u4E86\u89E3\u4E0B\u4ED6\u4EEC\u7684<code>\u6570\u636E\u7ED3\u6784</code>\u3002</p><p><code>Update</code>\u6709\u5F88\u591A\u5B57\u6BB5\uFF0C\u5F53\u524D\u5173\u6CE8\u5982\u4E0B\u4E09\u4E2A\u5B57\u6BB5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">update</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...\u7701\u7565\u5F53\u524D\u4E0D\u9700\u8981\u5173\u6CE8\u7684\u5B57\u6BB5</span>
    lane<span class="token punctuation">,</span>
    <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,9),S=e("code",null,"Update",-1),P=s("\u7531"),W=e("code",null,"createUpdate",-1),A=s("\u65B9\u6CD5\u8FD4\u56DE\uFF0C\u4F60\u53EF\u4EE5\u4ECE"),X={href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactUpdateQueue.old.js#L189",target:"_blank",rel:"noopener noreferrer"},D=s("\u8FD9\u91CC"),N=s("\u770B\u5230"),O=e("code",null,"createUpdate",-1),Q=s("\u7684\u6E90\u7801"),F=n(`<ul><li><p><strong>lane</strong>\uFF1A\u4EE3\u8868\u4F18\u5148\u7EA7\u3002\u5373\u56FE\u4E2D<code>\u7EA2\u8272</code>\u8282\u70B9\u4E0E<code>\u84DD\u8272</code>\u8282\u70B9\u7684\u533A\u522B\u3002</p></li><li><p><strong>payload</strong>\uFF1A\u66F4\u65B0\u6302\u8F7D\u7684\u6570\u636E\u3002\u5BF9\u4E8E<code>this.setState</code>\u521B\u5EFA\u7684<code>\u66F4\u65B0</code>\uFF0C<code>payload</code>\u4E3A<code>this.setState</code>\u7684\u4F20\u53C2\u3002</p></li><li><p><strong>next</strong>\uFF1A\u4E0E\u5176\u4ED6<code>Update</code>\u8FDE\u63A5\u5F62\u6210\u94FE\u8868\u3002</p></li></ul><p><code>updateQueue</code>\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">queue</span><span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">baseState</span><span class="token operator">:</span> fiber<span class="token punctuation">.</span>memoizedState<span class="token punctuation">,</span>
    <span class="token literal-property property">firstBaseUpdate</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastBaseUpdate</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">pending</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5176\u4ED6\u53C2\u6570\u7701\u7565...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,3),L=e("code",null,"UpdateQueue",-1),q=s("\u7531"),E=e("code",null,"initializeUpdateQueue",-1),M=s("\u65B9\u6CD5\u8FD4\u56DE\uFF0C\u4F60\u53EF\u4EE5\u4ECE"),z={href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactUpdateQueue.new.js#L157",target:"_blank",rel:"noopener noreferrer"},I=s("\u8FD9\u91CC"),V=s("\u770B\u5230"),$=e("code",null,"initializeUpdateQueue",-1),J=s("\u7684\u6E90\u7801"),T=n(`<ul><li><p><code>baseState</code>\uFF1A<code>\u66F4\u65B0</code>\u57FA\u4E8E\u54EA\u4E2A<code>state</code>\u5F00\u59CB\u3002\u4E0A\u56FE\u4E2D<code>\u7248\u672C\u63A7\u5236</code>\u7684\u4F8B\u5B50\u4E2D\uFF0C\u9AD8\u4F18bug\u4FEE\u590D\u540E\u63D0\u4EA4<code>master</code>\uFF0C\u5176\u4ED6<code>commit</code>\u57FA\u4E8E<code>master</code>\u5206\u652F\u7EE7\u7EED\u5F00\u53D1\u3002\u8FD9\u91CC\u7684<code>master</code>\u5206\u652F\u5C31\u662F<code>baseState</code>\u3002</p></li><li><p><code>firstBaseUpdate</code>\u4E0E<code>lastBaseUpdate</code>\uFF1A<code>\u66F4\u65B0</code>\u57FA\u4E8E\u54EA\u4E2A<code>Update</code>\u5F00\u59CB\uFF0C\u7531<code>firstBaseUpdate</code>\u5F00\u59CB\u5230<code>lastBaseUpdate</code>\u7ED3\u675F\u5F62\u6210\u94FE\u8868\u3002\u8FD9\u4E9B<code>Update</code>\u662F\u5728\u4E0A\u6B21<code>\u66F4\u65B0</code>\u4E2D\u7531\u4E8E<code>\u4F18\u5148\u7EA7</code>\u4E0D\u591F\u88AB\u7559\u4E0B\u7684\uFF0C\u5982\u56FE\u4E2D<code>A B C</code>\u3002</p></li><li><p><code>shared.pending</code>\uFF1A\u672C\u6B21\u66F4\u65B0\u7684\u5355\u6216\u591A\u4E2A<code>Update</code>\u5F62\u6210\u7684\u94FE\u8868\u3002</p></li></ul><p>\u5176\u4E2D<code>baseUpdate</code> + <code>shared.pending</code>\u4F1A\u4F5C\u4E3A\u672C\u6B21\u66F4\u65B0\u9700\u8981\u6267\u884C\u7684<code>Update</code>\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h2><hr><p>\u4E86\u89E3\u4E86<code>\u6570\u636E\u7ED3\u6784</code>\uFF0C\u63A5\u4E0B\u6765\u6A21\u62DF\u4E00\u6B21<code>\u5F02\u6B65\u4E2D\u65AD\u66F4\u65B0</code>\uFF0C\u6765\u63ED\u793A\u672C\u6587\u63A2\u5BFB\u7684\u79D8\u5BC6 \u2014\u2014 <code>componentWillXXX</code>\u4E3A\u4EC0\u4E48<code>UNSAFE</code>\u3002</p><p>\u5728\u67D0\u4E2A\u7EC4\u4EF6<code>updateQueue</code>\u4E2D\u5B58\u5728\u56DB\u4E2A<code>Update</code>\uFF0C\u5176\u4E2D<code>\u5B57\u6BCD</code>\u4EE3\u8868\u8BE5<code>Update</code>\u8981\u66F4\u65B0\u7684\u5B57\u6BCD\uFF0C<code>\u6570\u5B57</code>\u4EE3\u8868\u8BE5<code>Update</code>\u7684\u4F18\u5148\u7EA7\uFF0C\u6570\u5B57\u8D8A\u5C0F<code>\u4F18\u5148\u7EA7</code>\u8D8A\u9AD8\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>baseState <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

<span class="token constant">A1</span> <span class="token operator">-</span> <span class="token constant">B2</span> <span class="token operator">-</span> <span class="token constant">C1</span> <span class="token operator">-</span> <span class="token constant">D2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u9996\u6B21\u6E32\u67D3\u65F6\uFF0C<code>\u4F18\u5148\u7EA7</code>1\u3002<code>B D</code>\u4F18\u5148\u7EA7\u4E0D\u591F\u88AB\u8DF3\u8FC7\u3002</p><p>\u4E3A\u4E86\u4FDD\u8BC1<code>\u66F4\u65B0</code>\u7684\u8FDE\u8D2F\u6027\uFF0C\u7B2C\u4E00\u4E2A\u88AB\u8DF3\u8FC7\u7684<code>Update</code>\uFF08<code>B</code>\uFF09\u53CA\u5176\u540E\u9762\u6240\u6709<code>Update</code>\u4F1A\u4F5C\u4E3A\u7B2C\u4E8C\u6B21\u6E32\u67D3\u7684<code>baseUpdate</code>\uFF0C\u65E0\u8BBA\u4ED6\u4EEC\u7684<code>\u4F18\u5148\u7EA7</code>\u9AD8\u4F4E\uFF0C\u8FD9\u91CC\u4E3A<code>B C D</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">baseState</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token literal-property property">Updates</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">A1</span><span class="token punctuation">,</span> <span class="token constant">C1</span><span class="token punctuation">]</span>
Result state<span class="token operator">:</span> <span class="token string">&#39;AC&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u63A5\u7740\u7B2C\u4E8C\u6B21\u6E32\u67D3\uFF0C<code>\u4F18\u5148\u7EA7</code>2\u3002</p><p>\u7531\u4E8E<code>B</code>\u5728\u7B2C\u4E00\u6B21\u6E32\u67D3\u65F6\u88AB\u8DF3\u8FC7\uFF0C\u6240\u4EE5\u5728\u4ED6\u4E4B\u540E\u7684<code>C</code>\u9020\u6210\u7684\u6E32\u67D3\u7ED3\u679C\u4E0D\u4F1A\u4F53\u73B0\u5728\u7B2C\u4E8C\u6B21\u6E32\u67D3\u7684<code>baseState</code>\u4E2D\u3002\u6240\u4EE5<code>baseState</code>\u4E3A<code>A</code>\u800C\u4E0D\u662F\u4E0A\u6B21\u6E32\u67D3\u7684<code>Result state AC</code>\u3002\u8FD9\u4E5F\u662F\u4E3A\u4E86\u4FDD\u8BC1<code>\u66F4\u65B0</code>\u7684\u8FDE\u8D2F\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">baseState</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span>          
<span class="token literal-property property">Updates</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">B2</span><span class="token punctuation">,</span> <span class="token constant">C1</span><span class="token punctuation">,</span> <span class="token constant">D2</span><span class="token punctuation">]</span>  
Result state<span class="token operator">:</span> <span class="token string">&#39;ABCD&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u53D1\u73B0\uFF0C<code>C</code>\u540C\u65F6\u51FA\u73B0\u5728\u4E24\u6B21\u6E32\u67D3\u7684<code>Updates</code>\u4E2D\uFF0C\u4ED6\u4EE3\u8868\u7684<code>\u72B6\u6001</code>\u4F1A\u88AB\u66F4\u65B0\u4E24\u6B21\u3002</p><p>\u5982\u679C\u6709\u7C7B\u4F3C\u7684\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span><span class="token parameter">nextProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> nextProps<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...do something</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5219\u5F88\u6709\u53EF\u80FD\u88AB\u8C03\u7528\u4E24\u6B21\uFF0C\u8FD9\u4E0E<code>\u540C\u6B65\u66F4\u65B0</code>\u7684<code>React</code>\u8868\u73B0\u4E0D\u4E00\u81F4\uFF01</p><p>\u57FA\u4E8E\u4EE5\u4E0A\u539F\u56E0\uFF0C<code>componentWillXXX</code>\u88AB\u6807\u8BB0\u4E3A<code>UNSAFE</code>\u3002</p>`,18);function G(c,H){const a=p("ExternalLinkIcon");return t(),d(l,null,[u,e("blockquote",null,[e("p",null,[k,e("a",b,[m,o(a)]),h])]),g,e("blockquote",null,[e("p",null,[_,e("a",v,[y,o(a)]),f])]),U,e("img",{src:c.$withBase("/assets/react/1733205a461f6f92.png"),alt:"demo"},null,8,R),x,e("img",{src:c.$withBase("/assets/react/173320743bcd3794.png"),alt:"demo"},null,8,j),C,e("img",{src:c.$withBase("/assets/react/1733207d00f2307e.png"),alt:"demo"},null,8,B),w,e("blockquote",null,[e("p",null,[S,P,W,A,e("a",X,[D,o(a)]),N,O,Q])]),F,e("blockquote",null,[e("p",null,[L,q,E,M,e("a",z,[I,o(a)]),V,$,J])]),T],64)}var Z=r(i,[["render",G]]);export{Z as default};
