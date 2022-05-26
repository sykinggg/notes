import{_ as l,r,o as c,c as p,b as s,d as o,e,a as t}from"./app.e9fd9ffa.js";const i={},d=s("h1",{id:"symbol",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#symbol","aria-hidden":"true"},"#"),e(" Symbol")],-1),u=s("strong",null,"symbol",-1),_=e(" \u662F\u4E00\u79CD\u57FA\u672C\u6570\u636E\u7C7B\u578B \uFF08"),b={href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive",target:"_blank",rel:"noopener noreferrer"},h=e("primitive data type"),m=e("\uFF09\u3002"),k=s("code",null,"Symbol()",-1),y=e("\u51FD\u6570\u4F1A\u8FD4\u56DE"),v=s("strong",null,"symbol\u7C7B\u578B",-1),f=e('\u7684\u503C\uFF0C\u8BE5\u7C7B\u578B\u5177\u6709\u9759\u6001\u5C5E\u6027\u548C\u9759\u6001\u65B9\u6CD5\u3002\u5B83\u7684\u9759\u6001\u5C5E\u6027\u4F1A\u66B4\u9732\u51E0\u4E2A\u5185\u5EFA\u7684\u6210\u5458\u5BF9\u8C61\uFF1B\u5B83\u7684\u9759\u6001\u65B9\u6CD5\u4F1A\u66B4\u9732\u5168\u5C40\u7684symbol\u6CE8\u518C\uFF0C\u4E14\u7C7B\u4F3C\u4E8E\u5185\u5EFA\u5BF9\u8C61\u7C7B\uFF0C\u4F46\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u6765\u8BF4\u5B83\u5E76\u4E0D\u5B8C\u6574\uFF0C\u56E0\u4E3A\u5B83\u4E0D\u652F\u6301\u8BED\u6CD5\uFF1A"'),g=s("code",null,"new Symbol()",-1),S=e('"\u3002'),j=t(`<p>\u6BCF\u4E2A\u4ECE<code>Symbol()</code>\u8FD4\u56DE\u7684symbol\u503C\u90FD\u662F\u552F\u4E00\u7684\u3002\u4E00\u4E2Asymbol\u503C\u80FD\u4F5C\u4E3A\u5BF9\u8C61\u5C5E\u6027\u7684\u6807\u8BC6\u7B26\uFF1B\u8FD9\u662F\u8BE5\u6570\u636E\u7C7B\u578B\u4EC5\u6709\u7684\u76EE\u7684</p><blockquote><p>\u793A\u4F8B\u4EE3\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> symbol1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> symbol2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> symbol3 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> symbol1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: &quot;symbol&quot;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>symbol2 <span class="token operator">===</span> <span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: false</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>symbol3<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: &quot;Symbol(foo)&quot;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><blockquote><p>Symbol([description])</p></blockquote><p><strong>\u53C2\u6570</strong></p><p><strong>description \u53EF\u9009</strong></p><p>\u53EF\u9009\u7684\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\u3002\u5BF9symbol\u7684\u63CF\u8FF0\uFF0C\u53EF\u7528\u4E8E\u8C03\u8BD5\u4F46\u4E0D\u662F\u8BBF\u95EEsymbol\u672C\u8EAB\u3002</p><h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p>\u76F4\u63A5\u4F7F\u7528<code>Symbol()</code>\u521B\u5EFA\u65B0\u7684symbol\u7C7B\u578B\uFF0C\u5E76\u7528\u4E00\u4E2A\u53EF\u9009\u7684\u5B57\u7B26\u4E32\u4F5C\u4E3A\u5176\u63CF\u8FF0\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> sym1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> sym2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> sym3 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u521B\u5EFA\u4E86\u4E09\u4E2A\u65B0\u7684symbol\u7C7B\u578B\u3002 \u6CE8\u610F\uFF0C<code>Symbol(&quot;foo&quot;)</code> \u4E0D\u4F1A\u5F3A\u5236\u5C06\u5B57\u7B26\u4E32 \u201Cfoo\u201D \u8F6C\u6362\u6210symbol\u7C7B\u578B\u3002\u5B83\u6BCF\u6B21\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 symbol\u7C7B\u578B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u9762\u5E26\u6709 <code>new</code> \u8FD0\u7B97\u7B26\u7684\u8BED\u6CD5\u5C06\u629B\u51FA <code>TypeError</code> \u9519\u8BEF\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> sym <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeError</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4F1A\u963B\u6B62\u521B\u5EFA\u4E00\u4E2A\u663E\u5F0F\u7684 <code>Symbol</code> \u5305\u88C5\u5668\u5BF9\u8C61\u800C\u4E0D\u662F\u4E00\u4E2A <code>Symbol</code> \u503C\u3002\u56F4\u7ED5\u539F\u59CB\u6570\u636E\u7C7B\u578B\u521B\u5EFA\u4E00\u4E2A\u663E\u5F0F\u5305\u88C5\u5668\u5BF9\u8C61\u4ECE <code>ECMAScript 6</code> \u5F00\u59CB\u4E0D\u518D\u88AB\u652F\u6301\u3002 \u7136\u800C\uFF0C\u73B0\u6709\u7684\u539F\u59CB\u5305\u88C5\u5668\u5BF9\u8C61\uFF0C\u5982 <code>new Boolean</code>\u3001<code>new String</code>\u4EE5\u53CA<code>new Number</code>\uFF0C\u56E0\u4E3A\u9057\u7559\u539F\u56E0\u4ECD\u53EF\u88AB\u521B\u5EFA\u3002</p><p>\u521B\u5EFA\u4E00\u4E2A <code>Symbol \u5305\u88C5\u5668\u5BF9\u8C61 (Symbol wrapper object)</code>\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>Object()</code> \u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> sym <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> sym<span class="token punctuation">;</span>     <span class="token comment">// &quot;symbol&quot;</span>
<span class="token keyword">var</span> symObj <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>sym<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> symObj<span class="token punctuation">;</span>  <span class="token comment">// &quot;object&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5168\u5C40\u5171\u4EAB\u7684-symbol" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5171\u4EAB\u7684-symbol" aria-hidden="true">#</a> \u5168\u5C40\u5171\u4EAB\u7684 <code>Symbol</code></h2>`,19),z=e("\u4E0A\u9762\u4F7F\u7528"),O=s("code",null,"Symbol()",-1),N=e(" \u51FD\u6570\u7684\u8BED\u6CD5\uFF0C\u4E0D\u4F1A\u5728\u4F60\u7684\u6574\u4E2A\u4EE3\u7801\u5E93\u4E2D\u521B\u5EFA\u4E00\u4E2A\u53EF\u7528\u7684\u5168\u5C40\u7684"),J=s("code",null,"symbol",-1),C=e("\u7C7B\u578B\u3002 \u8981\u521B\u5EFA\u8DE8\u6587\u4EF6\u53EF\u7528\u7684"),R=s("code",null,"symbol",-1),W=e("\uFF0C\u751A\u81F3\u8DE8\u57DF\uFF08\u6BCF\u4E2A\u90FD\u6709\u5B83\u81EA\u5DF1\u7684\u5168\u5C40\u4F5C\u7528\u57DF\uFF09 , \u4F7F\u7528 "),q={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for",target:"_blank",rel:"noopener noreferrer"},G=e("Symbol.for()"),w=e(" \u65B9\u6CD5\u548C "),x={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor",target:"_blank",rel:"noopener noreferrer"},E=e("Symbol.keyFor()"),P=e(" \u65B9\u6CD5\u4ECE\u5168\u5C40\u7684"),T=s("code",null,"symbol",-1),I=e("\u6CE8\u518C\u8868\u8BBE\u7F6E\u548C\u53D6\u5F97"),B=s("code",null,"symbol",-1),U=e("\u3002"),A=s("h2",{id:"\u5728\u5BF9\u8C61\u4E2D\u67E5\u627E-symbol-\u5C5E\u6027",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5728\u5BF9\u8C61\u4E2D\u67E5\u627E-symbol-\u5C5E\u6027","aria-hidden":"true"},"#"),e(" \u5728\u5BF9\u8C61\u4E2D\u67E5\u627E "),s("code",null,"Symbol"),e(" \u5C5E\u6027")],-1),F={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols",target:"_blank",rel:"noopener noreferrer"},V=e("Object.getOwnPropertySymbols()"),L=e(" \u65B9\u6CD5\u8BA9\u4F60\u5728\u67E5\u627E\u4E00\u4E2A\u7ED9\u5B9A\u5BF9\u8C61\u7684\u7B26\u53F7\u5C5E\u6027\u65F6\u8FD4\u56DE\u4E00\u4E2Asymbol\u7C7B\u578B\u7684\u6570\u7EC4\u3002"),M=s("code",null,"\u6CE8\u610F\uFF0C\u6BCF\u4E2A\u521D\u59CB\u5316\u7684\u5BF9\u8C61\u90FD\u662F\u6CA1\u6709\u81EA\u5DF1\u7684symbol\u5C5E\u6027\u7684\uFF0C\u56E0\u6B64\u8FD9\u4E2A\u6570\u7EC4\u53EF\u80FD\u4E3A\u7A7A\uFF0C\u9664\u975E\u4F60\u5DF2\u7ECF\u5728\u5BF9\u8C61\u4E0A\u8BBE\u7F6E\u4E86symbol\u5C5E\u6027\u3002",-1),$=s("h2",{id:"\u5C5E\u6027",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5C5E\u6027","aria-hidden":"true"},"#"),e(" \u5C5E\u6027")],-1),D=s("p",null,[s("code",null,"Symbol.length")],-1),H=s("p",null,"\u957F\u5EA6\u5C5E\u6027\uFF0C\u503C\u4E3A0\u3002",-1),K={href:"https://developer.mozilla.org/zh-CN/docs/conflicting/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"},Q=e("Symbol.prototype"),X=s("p",null,[s("code",null,"symbol"),e("\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u3002")],-1),Y=s("h1",{id:"\u5185\u7F6E\u7684-symbols",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5185\u7F6E\u7684-symbols","aria-hidden":"true"},"#"),e(" \u5185\u7F6E\u7684 symbols")],-1),Z=s("p",null,"JavaScript\u8FD8\u5185\u5EFA\u4E86\u4E00\u4E9B\u5728ECMAScript 5 \u4E4B\u524D\u6CA1\u6709\u66B4\u9732\u7ED9\u5F00\u53D1\u8005\u7684symbol\uFF0C\u5B83\u4EEC\u4EE3\u8868\u4E86\u5185\u90E8\u8BED\u8A00\u884C\u4E3A",-1),ss=s("h2",{id:"\u8FED\u4EE3-symbols",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u8FED\u4EE3-symbols","aria-hidden":"true"},"#"),e(" \u8FED\u4EE3 symbols")],-1),es={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator",target:"_blank",rel:"noopener noreferrer"},ns=e("Symbol.iterator"),os=e("\u4E00\u4E2A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u9ED8\u8BA4\u8FED\u4EE3\u5668\u7684\u65B9\u6CD5\u3002\u88AB "),ts={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of",target:"_blank",rel:"noopener noreferrer"},as=e("for...of"),ls=e(" \u4F7F\u7528\u3002"),rs={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator",target:"_blank",rel:"noopener noreferrer"},cs=e("Symbol.asyncIterator"),ps=e("\u4E00\u4E2A\u8FD4\u56DE\u5BF9\u8C61\u9ED8\u8BA4\u7684\u5F02\u6B65\u8FED\u4EE3\u5668\u7684\u65B9\u6CD5\u3002\u88AB "),is={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of",target:"_blank",rel:"noopener noreferrer"},ds=e("for await of"),us=e(" \u4F7F\u7528\u3002"),_s=s("h2",{id:"\u6B63\u5219\u8868\u8FBE\u5F0F-symbols",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6B63\u5219\u8868\u8FBE\u5F0F-symbols","aria-hidden":"true"},"#"),e(" \u6B63\u5219\u8868\u8FBE\u5F0F symbols")],-1),bs={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match",target:"_blank",rel:"noopener noreferrer"},hs=e("Symbol.match"),ms=e("\u4E00\u4E2A\u7528\u4E8E\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u5339\u914D\u7684\u65B9\u6CD5\uFF0C\u4E5F\u7528\u4E8E\u786E\u5B9A\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u53EF\u4EE5\u4F5C\u4E3A\u6B63\u5219\u8868\u8FBE\u5F0F\u4F7F\u7528\u3002\u88AB "),ks={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match",target:"_blank",rel:"noopener noreferrer"},ys=e("String.prototype.match()"),vs=e(" \u4F7F\u7528\u3002"),fs={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace",target:"_blank",rel:"noopener noreferrer"},gs=e("Symbol.replace"),Ss=e("\u4E00\u4E2A\u66FF\u6362\u5339\u914D\u5B57\u7B26\u4E32\u7684\u5B50\u4E32\u7684\u65B9\u6CD5. \u88AB "),js={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace",target:"_blank",rel:"noopener noreferrer"},zs=e("String.prototype.replace()"),Os=e(" \u4F7F\u7528\u3002"),Ns={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search",target:"_blank",rel:"noopener noreferrer"},Js=e("Symbol.search"),Cs=e("\u4E00\u4E2A\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u4E0E\u6B63\u5219\u8868\u8FBE\u5F0F\u76F8\u5339\u914D\u7684\u7D22\u5F15\u7684\u65B9\u6CD5\u3002\u88AB"),Rs={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search",target:"_blank",rel:"noopener noreferrer"},Ws=e("String.prototype.search()"),qs=e(" \u4F7F\u7528\u3002"),Gs={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split",target:"_blank",rel:"noopener noreferrer"},ws=e("Symbol.split"),xs=e("\u4E00\u4E2A\u5728\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u7D22\u5F15\u5904\u62C6\u5206\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5.\u3002\u88AB "),Es={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split",target:"_blank",rel:"noopener noreferrer"},Ps=e("String.prototype.split()"),Ts=e(" \u4F7F\u7528\u3002"),Is=s("h2",{id:"\u5176\u4ED6-symbols",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5176\u4ED6-symbols","aria-hidden":"true"},"#"),e(" \u5176\u4ED6 symbols")],-1),Bs={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance",target:"_blank",rel:"noopener noreferrer"},Us=e("Symbol.hasInstance"),As=e("\u4E00\u4E2A\u786E\u5B9A\u4E00\u4E2A\u6784\u9020\u5668\u5BF9\u8C61\u8BC6\u522B\u7684\u5BF9\u8C61\u662F\u5426\u4E3A\u5B83\u7684\u5B9E\u4F8B\u7684\u65B9\u6CD5\u3002\u88AB "),Fs={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof",target:"_blank",rel:"noopener noreferrer"},Vs=e("instanceof"),Ls=e(" \u4F7F\u7528\u3002"),Ms={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable",target:"_blank",rel:"noopener noreferrer"},$s=e("Symbol.isConcatSpreadable"),Ds=e("\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u660E\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u5E94\u8BE5flattened\u4E3A\u5B83\u7684\u6570\u7EC4\u5143\u7D20\u3002\u88AB "),Hs={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat",target:"_blank",rel:"noopener noreferrer"},Ks=e("Array.prototype.concat()"),Qs=e(" \u4F7F\u7528\u3002"),Xs={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables",target:"_blank",rel:"noopener noreferrer"},Ys=e("Symbol.unscopables"),Zs=s("p",null,"\u62E5\u6709\u548C\u7EE7\u627F\u5C5E\u6027\u540D\u7684\u4E00\u4E2A\u5BF9\u8C61\u7684\u503C\u88AB\u6392\u9664\u5728\u4E0E\u73AF\u5883\u7ED1\u5B9A\u7684\u76F8\u5173\u5BF9\u8C61\u5916\u3002",-1),se={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species",target:"_blank",rel:"noopener noreferrer"},ee=e("Symbol.species"),ne=s("p",null,"\u4E00\u4E2A\u7528\u4E8E\u521B\u5EFA\u6D3E\u751F\u5BF9\u8C61\u7684\u6784\u9020\u5668\u51FD\u6570\u3002",-1),oe={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive",target:"_blank",rel:"noopener noreferrer"},te=e("Symbol.toPrimitive"),ae=s("p",null,"\u4E00\u4E2A\u5C06\u5BF9\u8C61\u8F6C\u5316\u4E3A\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u65B9\u6CD5\u3002",-1),le={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag",target:"_blank",rel:"noopener noreferrer"},re=e("Symbol.toStringTag"),ce=e("\u7528\u4E8E\u5BF9\u8C61\u7684\u9ED8\u8BA4\u63CF\u8FF0\u7684\u5B57\u7B26\u4E32\u503C\u3002\u88AB "),pe={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString",target:"_blank",rel:"noopener noreferrer"},ie=e("Object.prototype.toString()"),de=e(" \u4F7F\u7528\u3002"),ue=s("h2",{id:"\u65B9\u6CD5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u65B9\u6CD5","aria-hidden":"true"},"#"),e(" \u65B9\u6CD5")],-1),_e={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for",target:"_blank",rel:"noopener noreferrer"},be=e("Symbol.for(key)"),he=s("p",null,"\u4F7F\u7528\u7ED9\u5B9A\u7684key\u641C\u7D22\u73B0\u6709\u7684symbol\uFF0C\u5982\u679C\u627E\u5230\u5219\u8FD4\u56DE\u8BE5symbol\u3002\u5426\u5219\u5C06\u4F7F\u7528\u7ED9\u5B9A\u7684key\u5728\u5168\u5C40symbol\u6CE8\u518C\u8868\u4E2D\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684symbol\u3002",-1),me={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor",target:"_blank",rel:"noopener noreferrer"},ke=e("Symbol.keyFor(sym)"),ye=s("p",null,"\u4ECE\u5168\u5C40symbol\u6CE8\u518C\u8868\u4E2D\uFF0C\u4E3A\u7ED9\u5B9A\u7684symbol\u68C0\u7D22\u4E00\u4E2A\u5171\u4EAB\u7684?symbol key\u3002",-1),ve=s("h1",{id:"symbol-\u539F\u578B",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#symbol-\u539F\u578B","aria-hidden":"true"},"#"),e(" Symbol \u539F\u578B")],-1),fe=e("\u6240\u6709 Symbols \u7EE7\u627F\u81EA "),ge={href:"https://developer.mozilla.org/zh-CN/docs/conflicting/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"},Se=e("Symbol.prototype"),je=e("."),ze=s("h2",{id:"\u5C5E\u6027-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5C5E\u6027-1","aria-hidden":"true"},"#"),e(" \u5C5E\u6027")],-1),Oe=s("p",null,[s("code",null,"Symbol.prototype.constructor")],-1),Ne=e("\u8FD4\u56DE\u521B\u5EFA\u5B9E\u4F8B\u539F\u578B\u7684\u51FD\u6570. \u9ED8\u8BA4\u4E3A "),Je={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"},Ce=e("Symbol"),Re=e(" \u51FD\u6570\u3002"),We={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description",target:"_blank",rel:"noopener noreferrer"},qe=e("Symbol.prototype.description"),Ge=s("p",null,"\u4E00\u4E2A\u5305\u542Bsymbol\u63CF\u8FF0\u7684\u53EA\u8BFB\u5B57\u7B26\u4E32\u3002",-1),we=s("h2",{id:"\u65B9\u6CD5-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u65B9\u6CD5-1","aria-hidden":"true"},"#"),e(" \u65B9\u6CD5")],-1),xe={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toSource",target:"_blank",rel:"noopener noreferrer"},Ee=e("Symbol.prototype.toSource()"),Pe=e("\u8FD4\u56DE\u5305\u542B"),Te={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"},Ie=e("Symbol"),Be=e(" \u5BF9\u8C61\u6E90\u7801\u7684\u5B57\u7B26\u4E32\u3002\u8986\u76D6"),Ue={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource",target:"_blank",rel:"noopener noreferrer"},Ae=e("Object.prototype.toSource()"),Fe=e(" \u65B9\u6CD5\u3002"),Ve={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString",target:"_blank",rel:"noopener noreferrer"},Le=e("Symbol.prototype.toString()"),Me=e("\u8FD4\u56DE\u5305\u542BSymbol\u63CF\u8FF0\u7B26\u7684\u5B57\u7B26\u4E32\u3002 \u8986\u76D6"),$e={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString",target:"_blank",rel:"noopener noreferrer"},De=e("Object.prototype.toString()"),He=e(" \u65B9\u6CD5\u3002"),Ke={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/valueOf",target:"_blank",rel:"noopener noreferrer"},Qe=e("Symbol.prototype.valueOf()"),Xe=e("\u8FD4\u56DE "),Ye={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"},Ze=e("Symbol"),sn=e(" \u5BF9\u8C61\u7684\u521D\u59CB\u503C.\u3002\u8986\u76D6 "),en={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf",target:"_blank",rel:"noopener noreferrer"},nn=e("Object.prototype.valueOf()"),on=e(" \u65B9\u6CD5\u3002"),tn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive",target:"_blank",rel:"noopener noreferrer"},an=e("Symbol.prototype[@@toPrimitive]"),ln=e("\u8FD4\u56DE"),rn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"},cn=e("Symbol"),pn=e("\u5BF9\u8C61\u7684\u521D\u59CB\u503C\u3002"),dn=s("h1",{id:"\u793A\u4F8B",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#"),e(" \u793A\u4F8B")],-1),un=s("h2",{id:"\u5BF9-symbol-\u4F7F\u7528-typeof-\u8FD0\u7B97\u7B26",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5BF9-symbol-\u4F7F\u7528-typeof-\u8FD0\u7B97\u7B26","aria-hidden":"true"},"#"),e(" \u5BF9 symbol \u4F7F\u7528 typeof \u8FD0\u7B97\u7B26")],-1),_n={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof",target:"_blank",rel:"noopener noreferrer"},bn=e("typeof"),hn=e("\u8FD0\u7B97\u7B26\u80FD\u5E2E\u52A9\u4F60\u8BC6\u522B symbol \u7C7B\u578B"),mn=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;symbol&#39;</span>
<span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;symbol&#39;</span>
<span class="token keyword">typeof</span> Symbol<span class="token punctuation">.</span>iterator <span class="token operator">===</span> <span class="token string">&#39;symbol&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="symbol-\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#symbol-\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> Symbol \u7C7B\u578B\u8F6C\u6362</h2><p>\u5F53\u4F7F\u7528 symbol \u503C\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\u65F6\u9700\u8981\u6CE8\u610F\u4E00\u4E9B\u4E8B\u60C5\uFF1A</p>`,3),kn=e("\u5C1D\u8BD5\u5C06\u4E00\u4E2A symbol \u503C\u8F6C\u6362\u4E3A\u4E00\u4E2A number \u503C\u65F6\uFF0C\u4F1A\u629B\u51FA\u4E00\u4E2A "),yn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError",target:"_blank",rel:"noopener noreferrer"},vn=e("TypeError"),fn=e(" \u9519\u8BEF (e.g. "),gn=s("code",null,"+sym",-1),Sn=e(" or "),jn=s("code",null,"sym | 0",-1),zn=e(")."),On=s("li",null,[s("p",null,[e("\u4F7F\u7528\u5BBD\u677E\u76F8\u7B49\u65F6\uFF0C "),s("code",null,"Object(sym) == sym"),e(" returns "),s("code",null,"true"),e(".")])],-1),Nn=e("\u8FD9\u4F1A\u963B\u6B62\u4F60\u4ECE\u4E00\u4E2A symbol \u503C\u9690\u5F0F\u5730\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 string \u7C7B\u578B\u7684\u5C5E\u6027\u540D\u3002\u4F8B\u5982\uFF0C"),Jn=s("code",null,'Symbol("foo") + "bar" \u5C06\u629B\u51FA\u4E00\u4E2A',-1),Cn=e(),Rn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError",target:"_blank",rel:"noopener noreferrer"},Wn=e("TypeError"),qn=e(" (can't convert symbol to string)."),Gn={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_conversion",target:"_blank",rel:"noopener noreferrer"},wn=e('"safer" String(sym) conversion'),xn=e(" \u7684\u4F5C\u7528\u4F1A\u50CFsymbol\u7C7B\u578B\u8C03\u7528 "),En={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString",target:"_blank",rel:"noopener noreferrer"},Pn=e("Symbol.prototype.toString()"),Tn=e(" \u4E00\u6837\uFF0C\u4F46\u662F\u6CE8\u610F "),In=s("code",null,"new String(sym)",-1),Bn=e(" \u5C06\u629B\u51FA\u5F02\u5E38\u3002"),Un=s("h2",{id:"symbols-\u4E0E-for-in-\u8FED\u4EE3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#symbols-\u4E0E-for-in-\u8FED\u4EE3","aria-hidden":"true"},"#"),e(" Symbols \u4E0E for...in \u8FED\u4EE3")],-1),An=e("Symbols \u5728 "),Fn={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in",target:"_blank",rel:"noopener noreferrer"},Vn=e("for...in"),Ln=e(" \u8FED\u4EE3\u4E2D\u4E0D\u53EF\u679A\u4E3E\u3002\u53E6\u5916\uFF0C"),Mn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames",target:"_blank",rel:"noopener noreferrer"},$n=e("Object.getOwnPropertyNames()"),Dn=e(" \u4E0D\u4F1A\u8FD4\u56DE symbol \u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u4F46\u662F\u4F60\u80FD\u4F7F\u7528 "),Hn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols",target:"_blank",rel:"noopener noreferrer"},Kn=e("Object.getOwnPropertySymbols()"),Qn=e(" \u5F97\u5230\u5B83\u4EEC\u3002"),Xn=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>d <span class="token operator">=</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs &quot;c&quot; and &quot;d&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="symbols-\u4E0E-json-stringify" tabindex="-1"><a class="header-anchor" href="#symbols-\u4E0E-json-stringify" aria-hidden="true">#</a> Symbols \u4E0E JSON.stringify()</h2><p>\u5F53\u4F7F\u7528 JSON.stringify() \u65F6\uFF0C\u4EE5 symbol \u503C\u4F5C\u4E3A\u952E\u7684\u5C5E\u6027\u4F1A\u88AB\u5B8C\u5168\u5FFD\u7565\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &#39;{}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="symbol-\u5305\u88C5\u5668\u5BF9\u8C61\u4F5C\u4E3A\u5C5E\u6027\u7684\u952E" tabindex="-1"><a class="header-anchor" href="#symbol-\u5305\u88C5\u5668\u5BF9\u8C61\u4F5C\u4E3A\u5C5E\u6027\u7684\u952E" aria-hidden="true">#</a> Symbol \u5305\u88C5\u5668\u5BF9\u8C61\u4F5C\u4E3A\u5C5E\u6027\u7684\u952E</h2><p>\u5F53\u4E00\u4E2A Symbol \u5305\u88C5\u5668\u5BF9\u8C61\u4F5C\u4E3A\u4E00\u4E2A\u5C5E\u6027\u7684\u952E\u65F6\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5C06\u88AB\u5F3A\u5236\u8F6C\u6362\u4E3A\u5B83\u5305\u88C5\u8FC7\u7684 symbol \u503C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> sym <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>sym<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span>sym<span class="token punctuation">]</span><span class="token punctuation">;</span>            <span class="token comment">// 1</span>
obj<span class="token punctuation">[</span><span class="token function">Object</span><span class="token punctuation">(</span>sym<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">// still 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es6-\u4E2D-symbol-\u6570\u7EC4\u7684\u904D\u5386\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#es6-\u4E2D-symbol-\u6570\u7EC4\u7684\u904D\u5386\u63A5\u53E3" aria-hidden="true">#</a> es6 \u4E2D Symbol \u6570\u7EC4\u7684\u904D\u5386\u63A5\u53E3</h2>`,8),Yn=["src"];function Zn(a,so){const n=r("ExternalLinkIcon");return c(),p("div",null,[d,s("p",null,[u,_,s("a",b,[h,o(n)]),m,k,y,v,f,g,S]),j,s("p",null,[z,O,N,J,C,R,W,s("a",q,[G,o(n)]),w,s("a",x,[E,o(n)]),P,T,I,B,U]),A,s("p",null,[s("a",F,[V,o(n)]),L,M]),$,D,H,s("p",null,[s("a",K,[Q,o(n)])]),X,Y,Z,ss,s("p",null,[s("a",es,[ns,o(n)])]),s("p",null,[os,s("a",ts,[as,o(n)]),ls]),s("p",null,[s("a",rs,[cs,o(n)])]),s("p",null,[ps,s("a",is,[ds,o(n)]),us]),_s,s("p",null,[s("a",bs,[hs,o(n)])]),s("p",null,[ms,s("a",ks,[ys,o(n)]),vs]),s("p",null,[s("a",fs,[gs,o(n)])]),s("p",null,[Ss,s("a",js,[zs,o(n)]),Os]),s("p",null,[s("a",Ns,[Js,o(n)])]),s("p",null,[Cs,s("a",Rs,[Ws,o(n)]),qs]),s("p",null,[s("a",Gs,[ws,o(n)])]),s("p",null,[xs,s("a",Es,[Ps,o(n)]),Ts]),Is,s("p",null,[s("a",Bs,[Us,o(n)])]),s("p",null,[As,s("a",Fs,[Vs,o(n)]),Ls]),s("p",null,[s("a",Ms,[$s,o(n)])]),s("p",null,[Ds,s("a",Hs,[Ks,o(n)]),Qs]),s("p",null,[s("a",Xs,[Ys,o(n)])]),Zs,s("p",null,[s("a",se,[ee,o(n)])]),ne,s("p",null,[s("a",oe,[te,o(n)])]),ae,s("p",null,[s("a",le,[re,o(n)])]),s("p",null,[ce,s("a",pe,[ie,o(n)]),de]),ue,s("p",null,[s("a",_e,[be,o(n)])]),he,s("p",null,[s("a",me,[ke,o(n)])]),ye,ve,s("p",null,[fe,s("a",ge,[Se,o(n)]),je]),ze,Oe,s("p",null,[Ne,s("a",Je,[Ce,o(n)]),Re]),s("p",null,[s("a",We,[qe,o(n)])]),Ge,we,s("p",null,[s("a",xe,[Ee,o(n)])]),s("p",null,[Pe,s("a",Te,[Ie,o(n)]),Be,s("a",Ue,[Ae,o(n)]),Fe]),s("p",null,[s("a",Ve,[Le,o(n)])]),s("p",null,[Me,s("a",$e,[De,o(n)]),He]),s("p",null,[s("a",Ke,[Qe,o(n)])]),s("p",null,[Xe,s("a",Ye,[Ze,o(n)]),sn,s("a",en,[nn,o(n)]),on]),s("p",null,[s("a",tn,[an,o(n)])]),s("p",null,[ln,s("a",rn,[cn,o(n)]),pn]),dn,un,s("p",null,[s("a",_n,[bn,o(n)]),hn]),mn,s("ul",null,[s("li",null,[s("p",null,[kn,s("a",yn,[vn,o(n)]),fn,gn,Sn,jn,zn])]),On,s("li",null,[s("p",null,[Nn,Jn,Cn,s("a",Rn,[Wn,o(n)]),qn])]),s("li",null,[s("p",null,[s("a",Gn,[wn,o(n)]),xn,s("a",En,[Pn,o(n)]),Tn,In,Bn])])]),Un,s("p",null,[An,s("a",Fn,[Vn,o(n)]),Ln,s("a",Mn,[$n,o(n)]),Dn,s("a",Hn,[Kn,o(n)]),Qn]),Xn,s("img",{src:a.$withBase("/assets/1616482376(1).jpg"),alt:"\u6570\u7EC4\u9ED8\u8BA4Symbol.iterator"},null,8,Yn)])}var no=l(i,[["render",Zn],["__file","symbol.html.vue"]]);export{no as default};
