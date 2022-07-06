import{_ as t,r as s,o as d,c as i,b as e,d as a,w as l,F as p,e as o,a as n}from"./app.adb48220.js";const u={},h=e("h1",{id:"\u6982\u89C8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6982\u89C8","aria-hidden":"true"},"#"),o(" \u6982\u89C8")],-1),m=o("TypeScript \u7F16\u8BD1\u5668\u6E90\u6587\u4EF6\u4F4D\u4E8E "),b={href:"https://github.com/Microsoft/TypeScript/tree/master/src/compiler",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"src/compiler",-1),g=o(" \u76EE\u5F55\u4E0B"),v=n('<blockquote><p>\u8BD1\u6CE8\uFF1ATypescript Deep Dive \u4F7F\u7528\u7684\u6E90\u7801\u5E94\u4E3A 2016 \u5E74\u4EE5\u524D\u7684\u6E90\u7801\u3002\u5B66\u4E60\u65F6\u8BF7\u5BF9\u7167\u73B0\u6709\u7684\u6E90\u7801</p></blockquote><p>\u5B83\u5206\u4E3A\u4EE5\u4E0B\u51E0\u4E2A\u5173\u952E\u90E8\u5206\uFF1A</p><ul><li>Scanner \u626B\u63CF\u5668\uFF08<code>scanner.ts</code>\uFF09</li><li>Parser \u89E3\u6790\u5668\uFF08<code>parser.ts</code>\uFF09</li><li>Binder \u7ED1\u5B9A\u5668\uFF08<code>binder.ts</code>\uFF09</li><li>Checker \u68C0\u67E5\u5668\uFF08<code>checker.ts</code>\uFF09</li><li>Emitter \u53D1\u5C04\u5668\uFF08<code>emitter.ts</code>\uFF09</li></ul><p>\u6BCF\u4E2A\u90E8\u5206\u5728\u6E90\u6587\u4EF6\u4E2D\u5747\u6709\u72EC\u7ACB\u6587\u4EF6\uFF0C\u672C\u7AE0\u7A0D\u540E\u4F1A\u5BF9\u8FD9\u4E9B\u90E8\u5206\u505A\u89E3\u91CA\u3002</p><h3 id="byots" tabindex="-1"><a class="header-anchor" href="#byots" aria-hidden="true">#</a> BYOTS</h3>',5),S=o("\u6709\u4E2A\u540D\u4E3A "),y={href:"https://github.com/basarat/byots",target:"_blank",rel:"noopener noreferrer"},T=o("Bring Your Own TypeScript (BYOTS)"),k=o(" \u7684\u9879\u76EE\uFF0C\u901A\u8FC7\u66B4\u9732\u5185\u90E8\u63A5\u53E3\u8BA9\u7F16\u8BD1\u5668 API \u4F7F\u7528\u8D77\u6765\u66F4\u7B80\u5355\u3002\u4F60\u53EF\u4EE5\u5728\u5168\u5C40\u8303\u56F4\u4E0A\u66B4\u9732\u4F60 TypeScript \u5E94\u7528\u7684\u672C\u5730\u53D8\u91CF\u3002"),x=n(`<h3 id="\u8BED\u6CD5\u548C\u8BED\u4E49" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u548C\u8BED\u4E49" aria-hidden="true">#</a> \u8BED\u6CD5\u548C\u8BED\u4E49</h3><p><em>\u8BED\u6CD5</em>\u6B63\u786E\u5E76\u4E0D\u610F\u5473\u7740<em>\u8BED\u4E49</em>\u4E0A\u4E5F\u6B63\u786E\u3002\u4E0B\u9762\u7684 TypeScript \u4EE3\u7801\uFF0C\u8BED\u6CD5\u5408\u6CD5\uFF0C\u4F46\u662F\u8BED\u4E49\u5374\u4E0D\u6B63\u786E</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> foo<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token string">&#39;not a number&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>\u8BED\u4E49</code> \u4ECE\u81EA\u7136\u8BED\u8A00\u89D2\u5EA6\u610F\u5473\u7740\u6709\u610F\u4E49\uFF0C\u7406\u89E3\u8FD9\u4E2A\u6982\u5FF5\u5BF9\u4F60\u5F88\u6709\u7528\u3002</p><h3 id="\u5904\u7406\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u6982\u89C8" aria-hidden="true">#</a> \u5904\u7406\u6982\u89C8</h3><p>\u4EE5\u4E0B\u6F14\u793A\u7B80\u5355\u8BF4\u660E TypeScript \u7F16\u8BD1\u5668\u5982\u4F55\u5C06\u4E0A\u8FF0\u51E0\u4E2A\u5173\u952E\u90E8\u5206\u7EC4\u5408\u5728\u4E00\u8D77\uFF1A</p><div class="language-code ext-code line-numbers-mode"><pre class="language-code"><code>SourceCode\uFF08\u6E90\u7801\uFF09 ~~ \u626B\u63CF\u5668 ~~&gt; Token \u6D41
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-code ext-code line-numbers-mode"><pre class="language-code"><code>Token \u6D41 ~~ \u89E3\u6790\u5668 ~~&gt; AST\uFF08\u62BD\u8C61\u8BED\u6CD5\u6811\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-code ext-code line-numbers-mode"><pre class="language-code"><code>AST ~~ \u7ED1\u5B9A\u5668 ~~&gt; Symbols\uFF08\u7B26\u53F7\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7B26\u53F7\uFF08<code>Symbol</code>\uFF09\u662F TypeScript <em>\u8BED\u4E49</em>\u7CFB\u7EDF\u7684\u4E3B\u8981\u6784\u9020\u5757\u3002\u5982\u4E0A\u6240\u793A\uFF0C\u7B26\u53F7\u662F\u7ED1\u5B9A\u7684\u7ED3\u679C\u3002\u7B26\u53F7\u5C06 AST \u4E2D\u7684\u58F0\u660E\u8282\u70B9\u4E0E\u76F8\u540C\u5B9E\u4F53\u7684\u5176\u4ED6\u58F0\u660E\u76F8\u8FDE\u3002</p><p>\u7B26\u53F7\u548C AST \u662F\u68C0\u67E5\u5668\u7528\u6765\u9A8C\u8BC1\u6E90\u4EE3\u7801<em>\u8BED\u4E49</em>\u7684</p><div class="language-code ext-code line-numbers-mode"><pre class="language-code"><code>AST + \u7B26\u53F7 ~~ \u68C0\u67E5\u5668 ~~&gt; \u7C7B\u578B\u9A8C\u8BC1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6700\u540E\uFF0C\u9700\u8981\u8F93\u51FA JavaScript \u65F6\uFF1A</p><div class="language-code ext-code line-numbers-mode"><pre class="language-code"><code>AST + \u68C0\u67E5\u5668 ~~ \u53D1\u5C04\u5668 ~~&gt; JavaScript \u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>TypeScript \u7F16\u8BD1\u5668\u4E2D\u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6\u6587\u4EF6\uFF0C\u4E3A\u63A5\u4E0B\u6765\u4ECB\u7ECD\u7684\u5F88\u591A\u5173\u952E\u90E8\u5206\u63D0\u4F9B\u5B9E\u7528\u5DE5\u5177\u3002</p><h2 id="\u6587\u4EF6-utilities" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6-utilities" aria-hidden="true">#</a> \u6587\u4EF6\uFF1AUtilities</h2><p><code>core.ts</code> \uFF1ATypeScript \u7F16\u8BD1\u5668\u4F7F\u7528\u7684\u6838\u5FC3\u5DE5\u5177\u96C6\uFF0C\u91CD\u8981\u7684\u6709\uFF1A</p><ul><li><code>let objectAllocator: ObjectAllocator</code> \u662F\u4E00\u4E2A\u5B9A\u4E49\u4E3A\u5168\u5C40\u5355\u4F8B\u7684\u53D8\u91CF\u3002\u63D0\u4F9B\u4EE5\u4E0B\u5B9A\u4E49\uFF1A <ul><li><code>getNodeConstructor</code>\uFF08\u8282\u70B9\u4F1A\u5728\u89E3\u6790\u5668 / AST \u4E2D\u4ECB\u7ECD\uFF09</li><li><code>getSymbolConstructor</code>\uFF08\u7B26\u53F7\u4F1A\u5728\u7ED1\u5B9A\u5668\u4E2D\u4ECB\u7ECD\uFF09</li><li><code>getTypeConstructor</code>\uFF08\u7C7B\u578B\u4F1A\u5728\u68C0\u67E5\u5668\u4E2D\u4ECB\u7ECD\uFF09</li><li><code>getSignatureConstructor</code>\uFF08\u7B7E\u540D\u662F\u7D22\u5F15\uFF0C\u8C03\u7528\u548C\u6784\u9020\u7B7E\u540D\uFF09</li></ul></li></ul><h2 id="\u6587\u4EF6-\u5173\u952E\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6-\u5173\u952E\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u6587\u4EF6\uFF1A\u5173\u952E\u6570\u636E\u7ED3\u6784</h2><p><code>types.ts</code> \u5305\u542B\u6574\u4E2A\u7F16\u8BD1\u5668\u4E2D\u4F7F\u7528\u7684\u5173\u952E\u6570\u636E\u7ED3\u6784\u548C\u63A5\u53E3\uFF0C\u8FD9\u91CC\u5217\u51FA\u4E00\u4E9B\u5173\u952E\u90E8\u5206\uFF1A</p><ul><li><code>SyntaxKind</code> AST \u8282\u70B9\u7C7B\u578B\u901A\u8FC7 <code>SyntaxKind</code> \u679A\u4E3E\u8FDB\u884C\u8BC6\u522B</li><li><code>TypeChecker</code> \u7C7B\u578B\u68C0\u67E5\u5668\u63D0\u4F9B\u6B64\u63A5\u53E3</li><li><code>CompilerHost</code> \u7528\u4E8E\u7A0B\u5E8F\uFF08<code>Program</code>\uFF09\u548C\u7CFB\u7EDF\u4E4B\u95F4\u7684\u4EA4\u4E92</li><li><code>Node</code> AST \u8282\u70B9</li></ul><h2 id="\u6587\u4EF6-\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6-\u7CFB\u7EDF" aria-hidden="true">#</a> \u6587\u4EF6\uFF1A\u7CFB\u7EDF</h2><p><code>system.ts</code>\uFF0CTypeScript \u7F16\u8BD1\u5668\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u7684\u6240\u6709\u4EA4\u4E92\u5747\u901A\u8FC7 <code>System</code> \u63A5\u53E3\u8FDB\u884C\u3002\u63A5\u53E3\u53CA\u5176\u5B9E\u73B0\uFF08<code>WScript</code> \u548C <code>Node</code>\uFF09 \u5747\u5B9A\u4E49\u5728 <code>system.ts</code> \u4E2D\u3002\u4F60\u53EF\u4EE5\u5C06\u5176\u89C6\u4E3A<em>\u64CD\u4F5C\u73AF\u5883\uFF08OE, Operating Environment\uFF09</em>\u3002</p>`,23),f=o("\u73B0\u5728\u5BF9\u4E3B\u8981\u6587\u4EF6\u6709\u4E00\u4E2A\u6574\u4F53\u4E86\u89E3\u4E86\uFF0C\u7EE7\u7EED\u4ECB\u7ECD\u7A0B\u5E8F\uFF08"),A=e("code",null,"Program",-1),C=o("\uFF09\u7684\u6982\u5FF5");function B(N,w){const c=s("ExternalLinkIcon"),r=s("RouterLink");return d(),i(p,null,[h,e("p",null,[m,e("a",b,[_,a(c)]),g]),v,e("p",null,[S,e("a",y,[T,a(c)]),k]),x,e("p",null,[f,a(r,{to:"/ts/compiler/program.html"},{default:l(()=>[A]),_:1}),C])],64)}var O=t(u,[["render",B],["__file","overview.html.vue"]]);export{O as default};
