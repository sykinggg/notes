import{e as n}from"./app.5ba8e4fa.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="hybrid" tabindex="-1"><a class="header-anchor" href="#hybrid" aria-hidden="true">#</a> Hybrid</h1><hr><p>\u968F\u7740 Web\u6280\u672F \u548C \u79FB\u52A8\u8BBE\u5907 \u7684\u5FEB\u901F\u53D1\u5C55\uFF0C\u5728\u5404\u5BB6\u5927\u5382\u4E2D\uFF0CHybrid \u6280\u672F\u5DF2\u7ECF\u6210\u4E3A\u4E00\u79CD\u6700\u4E3B\u6D41\u6700\u4E0D\u53EF\u53D6\u4EE3\u7684\u67B6\u6784\u65B9\u6848\u4E4B\u4E00\u3002\u4E00\u5957\u597D\u7684 Hybrid \u67B6\u6784\u65B9\u6848\u80FD\u8BA9 App \u65E2\u80FD\u62E5\u6709 <strong>\u6781\u81F4\u7684\u4F53\u9A8C\u548C\u6027\u80FD</strong>\uFF0C\u540C\u65F6\u4E5F\u80FD\u62E5\u6709 Web\u6280\u672F <strong>\u7075\u6D3B\u7684\u5F00\u53D1\u6A21\u5F0F\u3001\u8DE8\u5E73\u53F0\u80FD\u529B\u4EE5\u53CA\u70ED\u66F4\u65B0\u673A\u5236</strong>\u3002\u56E0\u6B64\uFF0C\u76F8\u5173\u7684 Hybrid \u9886\u57DF\u4EBA\u624D\u4E5F\u662F\u5341\u5206\u7684\u5403\u9999\uFF0C\u7CBE\u901AHybrid \u6280\u672F\u548C\u76F8\u5173\u7684\u5B9E\u6218\u7ECF\u9A8C\uFF0C\u4E5F\u662F\u9762\u8BD5\u4E2D\u4E00\u9879\u5927\u5927\u7684\u52A0\u5206\u9879\u3002</p><h2 id="_1-\u6DF7\u5408\u65B9\u6848\u7B80\u6790" tabindex="-1"><a class="header-anchor" href="#_1-\u6DF7\u5408\u65B9\u6848\u7B80\u6790" aria-hidden="true">#</a> <strong>1. \u6DF7\u5408\u65B9\u6848\u7B80\u6790</strong></h2><p>Hybrid App\uFF0C\u4FD7\u79F0 <strong>\u6DF7\u5408\u5E94\u7528</strong>\uFF0C\u5373\u6DF7\u5408\u4E86 Native\u6280\u672F \u4E0E Web\u6280\u672F \u8FDB\u884C\u5F00\u53D1\u7684\u79FB\u52A8\u5E94\u7528\u3002\u73B0\u5728\u6BD4\u8F83\u6D41\u884C\u7684\u6DF7\u5408\u65B9\u6848\u4E3B\u8981\u6709\u4E09\u79CD\uFF0C\u4E3B\u8981\u662F\u5728UI\u6E32\u67D3\u673A\u5236\u4E0A\u7684\u4E0D\u540C:</p><ul><li><p><strong>Webview UI</strong>:</p><ul><li><p>\u901A\u8FC7 <strong>JSBridge</strong> \u5B8C\u6210 H5 \u4E0E Native \u7684\u53CC\u5411\u901A\u8BAF\uFF0C\u5E76 <strong>\u57FA\u4E8E Webview</strong> \u8FDB\u884C\u9875\u9762\u7684\u6E32\u67D3\uFF1B</p></li><li><p><strong>\u4F18\u52BF</strong>: \u7B80\u5355\u6613\u7528\uFF0C\u67B6\u6784\u95E8\u69DB/\u6210\u672C\u8F83\u4F4E\uFF0C\u9002\u7528\u6027\u4E0E\u7075\u6D3B\u6027\u6781\u5F3A\uFF1B</p></li><li><p><strong>\u52A3\u52BF</strong>: Webview \u6027\u80FD\u5C40\u9650\uFF0C\u5728\u590D\u6742\u9875\u9762\u4E2D\uFF0C\u8868\u73B0\u8FDC\u4E0D\u5982\u539F\u751F\u9875\u9762\uFF1B</p></li></ul></li><li><p><strong>Native UI</strong>:</p><ul><li><p>\u901A\u8FC7 <strong>JSBridge</strong> \u8D4B\u4E88 H5 \u539F\u751F\u80FD\u529B\uFF0C\u5E76\u8FDB\u4E00\u6B65\u5C06 JS \u751F\u6210\u7684\u865A\u62DF\u8282\u70B9\u6811(Virtual DOM)\u4F20\u9012\u81F3 Native \u5C42\uFF0C\u5E76\u4F7F\u7528 <strong>\u539F\u751F\u7CFB\u7EDF\u6E32\u67D3</strong>\u3002</p></li><li><p><strong>\u4F18\u52BF</strong>: \u7528\u6237\u4F53\u9A8C\u57FA\u672C\u63A5\u8FD1\u539F\u751F\uFF0C\u4E14\u80FD\u53D1\u6325 Web\u6280\u672F \u5F00\u53D1\u7075\u6D3B\u4E0E\u6613\u66F4\u65B0\u7684\u7279\u6027\uFF1B</p></li><li><p><strong>\u52A3\u52BF</strong>: \u4E0A\u624B/\u6539\u9020\u95E8\u69DB\u8F83\u9AD8\uFF0C\u6700\u597D\u9700\u8981\u638C\u63E1\u4E00\u5B9A\u7A0B\u5EA6\u7684\u5BA2\u6237\u7AEF\u6280\u672F\u3002\u76F8\u6BD4\u4E8E\u5E38\u89C4 Web\u5F00\u53D1\uFF0C\u9700\u8981\u66F4\u9AD8\u7684\u5F00\u53D1\u8C03\u8BD5\u3001\u95EE\u9898\u6392\u67E5\u6210\u672C\uFF1B</p></li></ul></li><li><p><strong>\u5C0F\u7A0B\u5E8F</strong></p><ul><li><p>\u901A\u8FC7\u66F4\u52A0\u5B9A\u5236\u5316\u7684 <strong>JSBridge</strong>\uFF0C\u8D4B\u4E88\u4E86 Web \u66F4\u5927\u7684\u6743\u9650\uFF0C\u5E76\u4F7F\u7528\u53CC <code>WebView</code> \u53CC\u7EBF\u7A0B\u7684\u6A21\u5F0F\u9694\u79BB\u4E86 <code>JS</code>\u903B\u8F91 \u4E0E <code>UI</code>\u6E32\u67D3\uFF0C\u5F62\u6210\u4E86\u7279\u6B8A\u7684\u5F00\u53D1\u6A21\u5F0F\uFF0C\u52A0\u5F3A\u4E86 <code>H5</code> \u4E0E <code>Native</code> \u6DF7\u5408\u7A0B\u5EA6\uFF0C\u5C5E\u4E8E\u7B2C\u4E00\u79CD\u65B9\u6848\u7684\u4F18\u5316\u7248\u672C\uFF1B</p></li><li><p><strong>\u4F18\u52BF</strong>: \u7528\u6237\u4F53\u9A8C\u597D\u4E8E\u5E38\u89C4 <code>Webview</code> \u65B9\u6848\uFF0C\u4E14\u901A\u5E38\u4F9D\u6258\u7684\u5E73\u53F0\u4E5F\u80FD\u63D0\u4F9B\u66F4\u4E3A\u53CB\u597D\u7684\u5F00\u53D1\u8C03\u8BD5\u4F53\u9A8C\u4EE5\u53CA\u529F\u80FD\uFF1B</p></li><li><p><strong>\u52A3\u52BF</strong>: \u9700\u8981\u4F9D\u6258\u4E8E\u7279\u5B9A\u7684\u5E73\u53F0\u7684\u89C4\u8303\u9650\u5B9A</p></li></ul></li></ul><p><strong>2. Webviev</strong></p><p>Webview \u662F Native App \u4E2D\u5185\u7F6E\u7684\u4E00\u6B3E\u57FA\u4E8E Webkit\u5185\u6838 \u7684\u6D4F\u89C8\u5668\uFF0C\u4E3B\u8981\u7531\u4E24\u90E8\u5206\u7EC4\u6210:</p><ul><li><p><strong>WebCore \u6392\u7248\u5F15\u64CE</strong>\uFF1B</p></li><li><p><strong>JSCore \u89E3\u6790\u5F15\u64CE</strong>\uFF1B</p></li></ul><p>\u5728\u539F\u751F\u5F00\u53D1 SDK \u4E2D Webview \u88AB\u5C01\u88C5\u6210\u4E86\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u4F5C\u4E3A Web\u9875\u9762 \u7684\u5BB9\u5668\u3002\u56E0\u6B64\uFF0C\u4F5C\u4E3A\u5BBF\u4E3B\u7684\u5BA2\u6237\u7AEF\u4E2D\u62E5\u6709\u66F4\u9AD8\u7684\u6743\u9650\uFF0C\u53EF\u4EE5\u5BF9 Webview \u4E2D\u7684 Web\u9875\u9762 \u8FDB\u884C\u914D\u7F6E\u548C\u5F00\u53D1\u3002</p><p>Hybrid\u6280\u672F\u4E2D\u53CC\u7AEF\u7684\u4EA4\u4E92\u539F\u7406\uFF0C\u4FBF\u662F\u57FA\u4E8E Webview \u7684\u4E00\u4E9B API \u548C\u7279\u6027\u3002</p><h2 id="_3-\u4EA4\u4E92\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-\u4EA4\u4E92\u539F\u7406" aria-hidden="true">#</a> <strong>3. \u4EA4\u4E92\u539F\u7406</strong></h2><p>Hybrid\u6280\u672F \u4E2D\u6700\u6838\u5FC3\u7684\u70B9\u5C31\u662F Native\u7AEF \u4E0E H5\u7AEF \u4E4B\u95F4\u7684 <strong>\u53CC\u5411\u901A\u8BAF\u5C42</strong>\uFF0C\u5176\u5B9E\u8FD9\u91CC\u4E5F\u53EF\u4EE5\u7406\u89E3\u4E3A\u9700\u8981\u4E00\u5957 <strong>\u8DE8\u8BED\u8A00\u901A\u8BAF\u65B9\u6848</strong>\uFF0C\u4FBF\u662F\u5E38\u542C\u5230\u7684 JSBridge\u3002</p><ul><li><p>JavaScript \u901A\u77E5 Native</p><ul><li><p><strong>API\u6CE8\u5165</strong>\uFF0CNative \u76F4\u63A5\u5728 JS \u4E0A\u4E0B\u6587\u4E2D\u6302\u8F7D\u6570\u636E\u6216\u8005\u65B9\u6CD5</p><ul><li>\u5EF6\u8FDF\u8F83\u4F4E\uFF0C\u5728\u5B89\u53534.1\u4EE5\u4E0B\u5177\u6709\u5B89\u5168\u6027\u95EE\u9898\uFF0C\u98CE\u9669\u8F83\u9AD8</li></ul></li><li><p>WebView <strong>URL Scheme</strong> \u8DF3\u8F6C\u62E6\u622A</p><ul><li>\u517C\u5BB9\u6027\u597D\uFF0C\u4F46\u5EF6\u8FDF\u8F83\u9AD8\uFF0C\u4E14\u6709\u957F\u5EA6\u9650\u5236</li></ul></li><li><p>WebView \u4E2D\u7684 <strong>prompt/console/alert\u62E6\u622A</strong>(\u901A\u5E38\u4F7F\u7528 prompt)</p></li></ul></li><li><p>Native \u901A\u77E5 Javascript:</p><ul><li>IOS: <code>stringByEvaluatingJavaScriptFromString</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Swift</span>
webview<span class="token punctuation">.</span><span class="token function">stringByEvaluatingJavaScriptFromString</span><span class="token punctuation">(</span><span class="token string">&quot;alert(&#39;NativeCall&#39;)&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>Android: <code>loadUrl</code> (4.4-)</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8C03\u7528js\u4E2D\u7684JSBridge.trigger\u65B9\u6CD5</span>
<span class="token comment">// \u8BE5\u65B9\u6CD5\u7684\u5F0A\u7AEF\u662F\u65E0\u6CD5\u83B7\u53D6\u51FD\u6570\u8FD4\u56DE\u503C\uFF1B</span>
webView<span class="token punctuation">.</span><span class="token function">loadUrl</span><span class="token punctuation">(</span><span class="token string">&quot;javascript:JSBridge.trigger(&#39;NativeCall&#39;)&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>Android: <code>evaluateJavascript</code> (4.4+)</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 4.4+\u540E\u4F7F\u7528\u8BE5\u65B9\u6CD5\u4FBF\u53EF\u8C03\u7528\u5E76\u83B7\u53D6\u51FD\u6570\u8FD4\u56DE\u503C\uFF1B</span>
mWebView<span class="token punctuation">.</span>evaluateJavascript\uFF08<span class="token string">&quot;javascript:JSBridge.trigger(&#39;NativeCall&#39;)&quot;</span><span class="token punctuation">,</span> 	 <span class="token keyword">new</span> <span class="token class-name">ValueCallback</span><span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    @Override
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onReceiveValue</span><span class="token punctuation">(</span><span class="token parameter">String value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u6B64\u5904\u4E3A js \u8FD4\u56DE\u7684\u7ED3\u679C</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul><h2 id="_4-\u63A5\u5165\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_4-\u63A5\u5165\u65B9\u6848" aria-hidden="true">#</a> <strong>4. \u63A5\u5165\u65B9\u6848</strong></h2><p>\u6574\u5957\u65B9\u6848\u9700\u8981 Web \u4E0E Native \u4E24\u90E8\u5206\u5171\u540C\u6765\u5B8C\u6210:</p><ul><li><p><strong>Native</strong>: \u8D1F\u8D23\u5B9E\u73B0URL\u62E6\u622A\u4E0E\u89E3\u6790\u3001\u73AF\u5883\u4FE1\u606F\u7684\u6CE8\u5165\u3001\u62D3\u5C55\u529F\u80FD\u7684\u6620\u5C04\u3001\u7248\u672C\u66F4\u65B0\u7B49\u529F\u80FD\uFF1B</p></li><li><p><strong>JavaScirpt</strong>: \u8D1F\u8D23\u5B9E\u73B0\u529F\u80FD\u534F\u8BAE\u7684\u62FC\u88C5\u3001\u534F\u8BAE\u7684\u53D1\u9001\u3001\u53C2\u6570\u7684\u4F20\u9012\u3001\u56DE\u8C03\u7B49\u4E00\u7CFB\u5217\u57FA\u7840\u529F\u80FD\u3002</p></li></ul><p><strong>\u63A5\u5165\u65B9\u5F0F</strong>:</p><ul><li><p><strong>\u5728\u7EBFH5</strong>: \u76F4\u63A5\u5C06\u9879\u76EE\u90E8\u7F72\u4E8E\u7EBF\u4E0A\u670D\u52A1\u5668\uFF0C\u5E76\u7531\u5BA2\u6237\u7AEF\u5728 HTML \u5934\u90E8\u6CE8\u5165\u5BF9\u5E94\u7684 Bridge\u3002</p><ul><li><p><strong>\u4F18\u52BF</strong>: \u63A5\u5165/\u5F00\u53D1\u6210\u672C\u4F4E\uFF0C\u5BF9 App \u7684\u4FB5\u5165\u5C0F\uFF1B</p></li><li><p><strong>\u52A3\u52BF</strong>: \u91CD\u5EA6\u4F9D\u8D56\u7F51\u7EDC\uFF0C\u65E0\u6CD5\u79BB\u7EBF\u4F7F\u7528\uFF0C\u9996\u5C4F\u52A0\u8F7D\u6162\uFF1B</p></li></ul></li><li><p><strong>\u5185\u7F6E\u79BB\u7EBF\u5305</strong>: \u5C06\u4EE3\u7801\u76F4\u63A5\u5185\u7F6E\u4E8E App \u4E2D\uFF0C\u5373\u672C\u5730\u5B58\u50A8\u4E2D\uFF0C\u53EF\u7531 H5 \u6216\u8005 \u5BA2\u6237\u7AEF\u5F15\u7528 Bridge\u3002</p><ul><li><p><strong>\u4F18\u52BF</strong>: \u9996\u5C4F\u52A0\u8F7D\u5FEB\uFF0C\u53EF\u79BB\u7EBF\u5316\u4F7F\u7528\uFF1B</p></li><li><p><strong>\u52A3\u52BF</strong>: \u5F00\u53D1\u3001\u8C03\u8BD5\u6210\u672C\u53D8\u9AD8\uFF0C\u9700\u8981\u591A\u7AEF\u5408\u4F5C\uFF0C\u4E14\u4F1A\u589E\u52A0 App \u5305\u4F53\u79EF</p></li></ul></li></ul><h2 id="_5-\u4F18\u5316\u65B9\u6848\u7B80\u8FF0" tabindex="-1"><a class="header-anchor" href="#_5-\u4F18\u5316\u65B9\u6848\u7B80\u8FF0" aria-hidden="true">#</a> <strong>5. \u4F18\u5316\u65B9\u6848\u7B80\u8FF0</strong></h2><ul><li><p><strong>Webview \u9884\u52A0\u8F7D</strong>: Webview \u7684\u521D\u59CB\u5316\u5176\u5B9E\u633A\u8017\u65F6\u7684\u3002\u6D4B\u8BD5\u8FC7\uFF0C\u5927\u6982\u5728100~200ms\u4E4B\u95F4\uFF0C\u56E0\u6B64\u5982\u679C\u80FD\u524D\u7F6E\u505A\u597D\u521D\u59CB\u5316\u4E8E\u5185\u5B58\u4E2D\uFF0C\u4F1A\u5927\u5927\u52A0\u5FEB\u6E32\u67D3\u901F\u5EA6\u3002</p></li><li><p><strong>\u66F4\u65B0\u673A\u5236</strong>: \u4F7F\u7528\u79BB\u7EBF\u5305\u7684\u65F6\u5019\uFF0C\u4FBF\u4F1A\u6D89\u53CA\u5230\u672C\u5730\u79BB\u7EBF\u4EE3\u7801\u7684\u66F4\u65B0\u95EE\u9898\uFF0C\u56E0\u6B64\u9700\u8981\u5EFA\u7ACB\u4E00\u5957\u4E91\u7AEF\u4E0B\u53D1\u5305\u7684\u673A\u5236\uFF0C\u7531\u5BA2\u6237\u7AEF\u4E0B\u8F7D\u4E91\u7AEF\u6700\u65B0\u4EE3\u7801\u5305 (zip\u5305)\uFF0C\u5E76\u89E3\u538B\u66FF\u6362\u672C\u5730\u4EE3\u7801\u3002</p><ul><li><p><strong>\u589E\u91CF\u66F4\u65B0</strong>: \u7531\u4E8E\u4E0B\u53D1\u5305\u662F\u4E00\u4E2A\u4E0B\u8F7D\u7684\u8FC7\u7A0B\uFF0C\u56E0\u6B64\u5305\u7684\u4F53\u79EF\u8D8A\u5C0F\uFF0C\u4E0B\u8F7D\u901F\u5EA6\u8D8A\u5FEB\uFF0C\u6D41\u91CF\u635F\u8017\u8D8A\u4F4E\u3002\u53EA\u6253\u5305\u6539\u53D8\u7684\u6587\u4EF6\uFF0C\u5BA2\u6237\u7AEF\u4E0B\u8F7D\u540E\u8986\u76D6\u5F0F\u66FF\u6362\uFF0C\u80FD\u5927\u5927\u51CF\u5C0F\u6BCF\u6B21\u66F4\u65B0\u5305\u7684\u4F53\u79EF\u3002</p></li><li><p><strong>\u6761\u4EF6\u5206\u53D1</strong>: \u4E91\u5E73\u53F0\u4E0B\u53D1\u66F4\u65B0\u5305\u65F6\uFF0C\u53EF\u4EE5\u914D\u5408\u5BA2\u6237\u7AEF\u8BBE\u7F6E\u4E00\u7CFB\u5217\u7684\u6761\u4EF6\u4E0E\u89C4\u5219\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4EE3\u7801\u7684\u6761\u4EF6\u66F4\u65B0:</p><ul><li><p>\u5355 <strong>\u5730\u533A</strong> \u66F4\u65B0: \u4F8B\u5982\u4E00\u4E2A\u53EA\u6709\u4E2D\u56FD\u5730\u533A\u624D\u80FD\u66F4\u65B0\u7684\u7248\u672C\uFF1B</p></li><li><p>\u6309 <strong>\u8BED\u8A00</strong> \u66F4\u65B0: \u4F8B\u5982\u53EA\u6709\u4E2D\u6587\u7248\u672C\u4F1A\u66F4\u65B0\uFF1B</p></li><li><p>\u6309 App <strong>\u7248\u672C</strong> \u66F4\u65B0: \u4F8B\u5982\u53EA\u6709\u6700\u65B0\u7248\u672C\u7684 App \u624D\u4F1A\u66F4\u65B0\uFF1B</p></li><li><p><strong>\u7070\u5EA6</strong> \u66F4\u65B0: \u53EA\u6709\u5C0F\u6BD4\u4F8B\u7528\u6237\u4F1A\u66F4\u65B0\uFF1B</p></li><li><p><strong>AB\u6D4B\u8BD5</strong>: \u53EA\u6709\u547D\u4E2D\u7684\u7528\u6237\u4F1A\u66F4\u65B0\uFF1B</p></li></ul></li><li><p><strong>\u964D\u7EA7\u673A\u5236</strong>: \u5F53\u7528\u6237\u4E0B\u8F7D\u6216\u89E3\u538B\u4EE3\u7801\u5305\u5931\u8D25\u65F6\uFF0C\u9700\u8981\u6709\u5957\u964D\u7EA7\u65B9\u6848\uFF0C\u901A\u5E38\u6709\u4E24\u79CD\u505A\u6CD5:</p><ul><li><p><strong>\u672C\u5730\u5185\u7F6E</strong>: \u968F\u7740 App \u6253\u5305\u65F6\u5185\u7F6E\u4E00\u4EFD\u7EBF\u4E0A\u6700\u65B0\u5B8C\u6574\u4EE3\u7801\u5305\uFF0C\u4FDD\u8BC1\u672C\u5730\u4EE3\u7801\u6587\u4EF6\u7684\u5B58\u5728\uFF0C\u8D44\u6E90\u52A0\u8F7D\u5747\u4F7F\u7528\u672C\u5730\u5316\u8DEF\u5F84\uFF1B</p></li><li><p><strong>\u57DF\u540D\u62E6\u622A</strong>: \u8D44\u6E90\u52A0\u8F7D\u4F7F\u7528\u7EBF\u4E0A\u57DF\u540D\uFF0C\u901A\u8FC7\u62E6\u622A\u57DF\u540D\u6620\u5C04\u5230\u672C\u5730\u8DEF\u5F84\u3002\u5F53\u672C\u5730\u4E0D\u5B58\u5728\u65F6\uFF0C\u5219\u8BF7\u6C42\u7EBF\u4E0A\u6587\u4EF6\uFF0C\u5F53\u5B58\u5728\u65F6\uFF0C\u76F4\u63A5\u52A0\u8F7D\uFF1B</p></li></ul></li><li><p><strong>\u8DE8\u5E73\u53F0\u90E8\u7F72</strong>: Bridge\u5C42 \u53EF\u4EE5\u505A\u4E00\u5957\u6D4F\u89C8\u5668\u9002\u914D\uFF0C\u5728\u4E00\u4E9B\u65E0\u6CD5\u9002\u914D\u7684\u529F\u80FD\uFF0C\u505A\u597D\u964D\u7EA7\u5904\u7406\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u4EE3\u7801\u5728\u4EFB\u4F55\u73AF\u5883\u7684\u53EF\u7528\u6027\uFF0C\u4E00\u5957\u4EE3\u7801\u53EF\u540C\u65F6\u8FD0\u884C\u4E8E App\u5185 \u4E0E \u666E\u901A\u6D4F\u89C8\u5668\uFF1B</p></li><li><p><strong>\u73AF\u5883\u7CFB\u7EDF</strong>: \u4E0E\u5BA2\u6237\u7AEF\u8FDB\u884C\u7EDF\u4E00\u914D\u5408\uFF0C\u642D\u5EFA\u51FA <strong>\u6B63\u5F0F</strong> / <strong>\u9884\u4E0A\u7EBF</strong> / <strong>\u6D4B\u8BD5</strong> / <strong>\u5F00\u53D1</strong>\u73AF\u5883\uFF0C\u80FD\u5927\u5927\u63D0\u9AD8\u9879\u76EE\u7A33\u5B9A\u6027\u4E0E\u95EE\u9898\u6392\u67E5\uFF1B</p></li><li><p><strong>\u5F00\u53D1\u6A21\u5F0F</strong>:</p><ul><li><p>\u80FD\u8FDE\u63A5PC Chrome/safari \u8FDB\u884C\u4EE3\u7801\u8C03\u8BD5\uFF1B</p></li><li><p>\u5177\u6709\u5F00\u53D1\u8C03\u8BD5\u5165\u53E3\uFF0C\u53EF\u4EE5\u4F7F\u7528\u540C\u6837\u7684 Webview \u52A0\u8F7D\u5F00\u53D1\u65F6\u7684\u672C\u5730\u4EE3\u7801\uFF1B</p></li><li><p>\u5177\u5907\u65E5\u5FD7\u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u67E5\u770B Log \u4FE1\u606F\uFF1B</p></li></ul></li></ul></li></ul>`,21);function p(e,i){return t}var o=s(a,[["render",p]]);export{o as default};
