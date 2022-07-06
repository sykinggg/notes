import{_ as e,a}from"./app.816e2a4d.js";const n={},t=a('<h2 id="html5shiv-js\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#html5shiv-js\u5206\u6790" aria-hidden="true">#</a> <strong>html5shiv.js\u5206\u6790</strong></h2><p>\u9996\u5148\uFF0C\u5148\u4E86\u89E3\u4E00\u4E0Bhtml5shiv.js\u662F\u4EC0\u4E48\u3002</p><p>html5shiv.js\u662F\u4E00\u5957\u5B9E\u73B0\u8BA9ie\u4F4E\u7248\u672C\u7B49\u6D4F\u89C8\u5668\u652F\u6301html5\u6807\u7B7E\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><h1 id="\u6E90\u7801\u5B66\u4E60\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u5B66\u4E60\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> \u6E90\u7801\u5B66\u4E60\u77E5\u8BC6\u70B9</h1><h2 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h2><p><code>Function</code>\u7684\u4F7F\u7528\uFF0C\u6CE8\u610F\u8FD9\u91CC\u662F\u9996\u5B57\u6BCD\u5927\u5199\u7684\u3002\u6B64\u5904\u7684\u4F7F\u7528\u8BF7\u67E5\u770BshivMethods\u65B9\u6CD5\u3002Function\u4E3B\u8981\u662F\u7528\u6765\u5B9E\u73B0\u52A8\u6001\u6267\u884C\u3002\u5B83\u53EF\u4EE5\u5B9E\u73B0\u8DDFeval\u4E00\u6837\u7684\u5DE5\u4F5C\uFF0C\u4F46\u7531\u4E8E\u5B83\u5728\u6027\u80FD\u65B9\u9762\u80DC\u8FC7eval\uFF0C\u6240\u4EE5\u5F88\u591A\u4EBA\u90FD\u63A8\u8350\u4F7F\u7528Function\u3002</p><p><code>Function</code>\u7684\u6267\u884C\u5F62\u5F0F\u5982\u4E0B\uFF1A var \u51FD\u6570\u540D = new Function(&#39;argument1&#39;,&#39;argument2&#39;,...,&#39;argumentN&#39;,&#39;\u51FD\u6570\u4F53&#39;); \u6216\u8005 var \u51FD\u6570\u540D = new Function(&#39;argument1,argument2,...,argumentN&#39;,&#39;\u51FD\u6570\u4F53&#39;); \u6216\u8005 new Function(&#39;\u6267\u884C\u4F53&#39;);</p><p>\u7ECF\u6D4B\u8BD5\u53D1\u73B0new\u5173\u952E\u5B57\u53EF\u4EE5\u7701\u7565</p><p><code>Function</code> \u9700\u8981\u6267\u884C\uFF0C\u624D\u80FD\u6267\u884C\u4E2D\u95F4\u7684\u6267\u884C\u4F53\uFF0C\u4E0A\u9762\u7C7B\u4F3C\u4E8E\u58F0\u660E</p><h2 id="createdocumentfragment" tabindex="-1"><a class="header-anchor" href="#createdocumentfragment" aria-hidden="true">#</a> createDocumentFragment</h2><p>createDocumentFragment\u5373\u521B\u5EFA\u6587\u6863\u788E\u7247\u8282\u70B9\u7684\u4F7F\u7528\u3002\u521B\u5EFA\u6587\u6863\u788E\u7247\u8282\u70B9\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u51CF\u5C11\u6D4F\u89C8\u5668\u6E32\u67D3\u7684\u6B21\u6570\u6765\u63D0\u5347\u6027\u80FD\u3002\u6BD4\u5982\uFF0C\u5F53\u8981\u5F80\u9875\u9762\u4E2D\u6DFB\u52A0\u4E00\u7CFB\u5217\u8282\u70B9\u65F6\uFF0C\u5982\u679C\u6BCF\u6B21\u90FD\u5B9E\u65F6\u5411\u9875\u9762\u4F7F\u7528appendChild\u6765\u6DFB\u52A0\u8282\u70B9\u65F6\uFF0C\u90A3\u4E48\u6BCF\u6B21\u6D4F\u89C8\u5668\u90FD\u4F1A\u6E32\u67D3\u4E00\u6B21\uFF0C\u800C\u8FC7\u591A\u6B21\u6570\u7684\u6E32\u67D3\u5C31\u4F1A\u9020\u6210\u6027\u80FD\u95EE\u9898\u3002\u5982\u679C\u5148\u628A\u8981\u6DFB\u52A0\u7684\u8282\u70B9\u90FD\u5148\u52A0\u5230\u6587\u6863\u788E\u7247\u8282\u70B9\u4E2D\u53BB\uFF0C\u5B8C\u6210\u540E\u518D\u4E00\u6B21\u6DFB\u52A0\u5230\u9875\u9762\u4E2D\u53BB\u5C31\u53EA\u6E32\u67D3\u4E00\u6B21</p><h2 id="json\u5C01\u88C5\u5C5E\u6027\u548C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#json\u5C01\u88C5\u5C5E\u6027\u548C\u65B9\u6CD5" aria-hidden="true">#</a> json\u5C01\u88C5\u5C5E\u6027\u548C\u65B9\u6CD5</h2><p>\u901A\u8FC7json\u7684\u65B9\u5F0F\u8FDB\u884C\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u5C01\u88C5\u3002\u53EF\u4EE5\u5927\u5927\u51CF\u5C11\u5168\u5C40\u53D8\u91CF\u7684\u6C61\u67D3</p><h2 id="\u901A\u8FC7\u5C06\u79C1\u6709\u65B9\u6CD5\u6216\u5C5E\u6027\u8D4B\u503C\u7ED9\u5168\u5C40\u5BF9\u8C61\u7684\u5C5E\u6027\u6765\u5C06\u65B9\u6CD5\u516C\u5F00" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u5C06\u79C1\u6709\u65B9\u6CD5\u6216\u5C5E\u6027\u8D4B\u503C\u7ED9\u5168\u5C40\u5BF9\u8C61\u7684\u5C5E\u6027\u6765\u5C06\u65B9\u6CD5\u516C\u5F00" aria-hidden="true">#</a> \u901A\u8FC7\u5C06\u79C1\u6709\u65B9\u6CD5\u6216\u5C5E\u6027\u8D4B\u503C\u7ED9\u5168\u5C40\u5BF9\u8C61\u7684\u5C5E\u6027\u6765\u5C06\u65B9\u6CD5\u516C\u5F00</h2><p>\u901A\u8FC7\u5C06\u79C1\u6709\u65B9\u6CD5\u6216\u5C5E\u6027\u8D4B\u503C\u7ED9\u5168\u5C40\u5BF9\u8C61\u7684\u5C5E\u6027\u6765\u5C06\u65B9\u6CD5\u516C\u5F00\u3002\u6BD4\u5982\u5F53\u5B9A\u4E49\u4E86\u8BB8\u591A\u65B9\u6CD5\u6216\u5C5E\u6027\uFF0C\u4F46\u4E0D\u60F3\u516C\u5F00\u6240\u6709\u65B9\u6CD5\u6216\u5C5E\u6027\uFF0C\u6B64\u65F6\u5C31\u53EF\u4EE5\u901A\u8FC7\u95ED\u5305\u5C06\u65B9\u6CD5\u79C1\u6709\u5316\uFF0C\u7136\u540E\u518D\u901A\u8FC7\u8FD4\u56DE\u8D4B\u503C\u7ED9\u5168\u5C40\u53D8\u91CF\u7684\u65B9\u5F0F\u516C\u5F00\u90E8\u5206\u5C5E\u6027\u548C\u65B9\u6CD5\u3002\u5982\u6B64\u5904\u901A\u8FC7\u540D\u5B57\u53EBhtml5\u7684\u5168\u5C40\u5BF9\u8C61\u7684\u5C5E\u6027\u8FDB\u884C\u516C\u5F00\u3002</p>',15);function r(h,i){return t}var d=e(n,[["render",r],["__file","interview51.html.vue"]]);export{d as default};
