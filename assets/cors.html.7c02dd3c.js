import{_ as e,a as o}from"./app.adb48220.js";const n={},s=o(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="\u4E00\u3001\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u7B80\u4ECB" aria-hidden="true">#</a> \u4E00\u3001\u7B80\u4ECB</h1><hr><p>CORS\u9700\u8981\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u540C\u65F6\u652F\u6301\u3002\u76EE\u524D\uFF0C\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u8BE5\u529F\u80FD\uFF0CIE\u6D4F\u89C8\u5668\u4E0D\u80FD\u4F4E\u4E8EIE10\u3002</p><p>\u6574\u4E2ACORS\u901A\u4FE1\u8FC7\u7A0B\uFF0C\u90FD\u662F\u6D4F\u89C8\u5668\u81EA\u52A8\u5B8C\u6210\uFF0C\u4E0D\u9700\u8981\u7528\u6237\u53C2\u4E0E\u3002\u5BF9\u4E8E\u5F00\u53D1\u8005\u6765\u8BF4\uFF0CCORS\u901A\u4FE1\u4E0E\u540C\u6E90\u7684AJAX\u901A\u4FE1\u6CA1\u6709\u5DEE\u522B\uFF0C\u4EE3\u7801\u5B8C\u5168\u4E00\u6837\u3002\u6D4F\u89C8\u5668\u4E00\u65E6\u53D1\u73B0AJAX\u8BF7\u6C42\u8DE8\u6E90\uFF0C\u5C31\u4F1A\u81EA\u52A8\u6DFB\u52A0\u4E00\u4E9B\u9644\u52A0\u7684\u5934\u4FE1\u606F\uFF0C\u6709\u65F6\u8FD8\u4F1A\u591A\u51FA\u4E00\u6B21\u9644\u52A0\u7684\u8BF7\u6C42\uFF0C\u4F46\u7528\u6237\u4E0D\u4F1A\u6709\u611F\u89C9\u3002</p><p>\u56E0\u6B64\uFF0C\u5B9E\u73B0CORS\u901A\u4FE1\u7684\u5173\u952E\u662F\u670D\u52A1\u5668\u3002\u53EA\u8981\u670D\u52A1\u5668\u5B9E\u73B0\u4E86CORS\u63A5\u53E3\uFF0C\u5C31\u53EF\u4EE5\u8DE8\u6E90\u901A\u4FE1\u3002</p><h1 id="\u4E8C\u3001\u4E24\u79CD\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4E24\u79CD\u8BF7\u6C42" aria-hidden="true">#</a> \u4E8C\u3001\u4E24\u79CD\u8BF7\u6C42</h1><hr><p>\u6D4F\u89C8\u5668\u5C06CORS\u8BF7\u6C42\u5206\u6210\u4E24\u7C7B\uFF1A\u7B80\u5355\u8BF7\u6C42\uFF08simple request\uFF09\u548C\u975E\u7B80\u5355\u8BF7\u6C42\uFF08not-so-simple request\uFF09\u3002</p><p>\u53EA\u8981\u540C\u65F6\u6EE1\u8DB3\u4EE5\u4E0B\u4E24\u5927\u6761\u4EF6\uFF0C\u5C31\u5C5E\u4E8E\u7B80\u5355\u8BF7\u6C42\u3002</p><p>\uFF081) \u8BF7\u6C42\u65B9\u6CD5\u662F\u4EE5\u4E0B\u4E09\u79CD\u65B9\u6CD5\u4E4B\u4E00\uFF1A</p><ul><li><p>HEAD</p></li><li><p>GET</p></li><li><p>POST</p></li></ul><p>\uFF082\uFF09HTTP\u7684\u5934\u4FE1\u606F\u4E0D\u8D85\u51FA\u4EE5\u4E0B\u51E0\u79CD\u5B57\u6BB5\uFF1A</p><ul><li><p>Accept</p></li><li><p>Accept-Language</p></li><li><p>Content-Language</p></li><li><p>Last-Event-ID</p></li><li><p>Content-Type\uFF1A\u53EA\u9650\u4E8E\u4E09\u4E2A\u503Capplication/x-www-form-urlencoded\u3001multipart/form-data\u3001text/plain</p></li></ul><p>\u8FD9\u662F\u4E3A\u4E86\u517C\u5BB9\u8868\u5355\uFF08form\uFF09\uFF0C\u56E0\u4E3A\u5386\u53F2\u4E0A\u8868\u5355\u4E00\u76F4\u53EF\u4EE5\u53D1\u51FA\u8DE8\u57DF\u8BF7\u6C42\u3002AJAX \u7684\u8DE8\u57DF\u8BBE\u8BA1\u5C31\u662F\uFF0C\u53EA\u8981\u8868\u5355\u53EF\u4EE5\u53D1\uFF0CAJAX \u5C31\u53EF\u4EE5\u76F4\u63A5\u53D1\u3002</p><p>\u51E1\u662F\u4E0D\u540C\u65F6\u6EE1\u8DB3\u4E0A\u9762\u4E24\u4E2A\u6761\u4EF6\uFF0C\u5C31\u5C5E\u4E8E\u975E\u7B80\u5355\u8BF7\u6C42\u3002</p><p>\u6D4F\u89C8\u5668\u5BF9\u8FD9\u4E24\u79CD\u8BF7\u6C42\u7684\u5904\u7406\uFF0C\u662F\u4E0D\u4E00\u6837\u7684\u3002</p><h1 id="\u4E09\u3001\u7B80\u5355\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u7B80\u5355\u8BF7\u6C42" aria-hidden="true">#</a> \u4E09\u3001\u7B80\u5355\u8BF7\u6C42</h1><hr><h2 id="_3-1-\u57FA\u672C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-1-\u57FA\u672C\u6D41\u7A0B" aria-hidden="true">#</a> 3.1 \u57FA\u672C\u6D41\u7A0B</h2><hr><p>\u5BF9\u4E8E\u7B80\u5355\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u76F4\u63A5\u53D1\u51FACORS\u8BF7\u6C42\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\u5C31\u662F\u5728\u5934\u4FE1\u606F\u4E4B\u4E2D\uFF0C\u589E\u52A0\u4E00\u4E2A<code>Origin</code>\u5B57\u6BB5\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u6D4F\u89C8\u5668\u53D1\u73B0\u8FD9\u6B21\u8DE8\u6E90AJAX\u8BF7\u6C42\u662F\u7B80\u5355\u8BF7\u6C42\uFF0C\u5C31\u81EA\u52A8\u5728\u5934\u4FE1\u606F\u4E4B\u4E2D\uFF0C\u6DFB\u52A0\u4E00\u4E2A<code>Origin</code>\u5B57\u6BB5\u3002</p><pre><code>GET /cors HTTP/1.1
Origin: http://api.bob.com
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
</code></pre><p>\u4E0A\u9762\u7684\u5934\u4FE1\u606F\u4E2D\uFF0C<code>Origin</code>\u5B57\u6BB5\u7528\u6765\u8BF4\u660E\uFF0C\u672C\u6B21\u8BF7\u6C42\u6765\u81EA\u54EA\u4E2A\u6E90\uFF08\u534F\u8BAE + \u57DF\u540D + \u7AEF\u53E3\uFF09\u3002\u670D\u52A1\u5668\u6839\u636E\u8FD9\u4E2A\u503C\uFF0C\u51B3\u5B9A\u662F\u5426\u540C\u610F\u8FD9\u6B21\u8BF7\u6C42\u3002</p><p>\u5982\u679C<code>Origin</code>\u6307\u5B9A\u7684\u6E90\uFF0C\u4E0D\u5728\u8BB8\u53EF\u8303\u56F4\u5185\uFF0C\u670D\u52A1\u5668\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u6B63\u5E38\u7684HTTP\u56DE\u5E94\u3002\u6D4F\u89C8\u5668\u53D1\u73B0\uFF0C\u8FD9\u4E2A\u56DE\u5E94\u7684\u5934\u4FE1\u606F\u6CA1\u6709\u5305\u542B<code>Access-Control-Allow-Origin</code>\u5B57\u6BB5\uFF08\u8BE6\u89C1\u4E0B\u6587\uFF09\uFF0C\u5C31\u77E5\u9053\u51FA\u9519\u4E86\uFF0C\u4ECE\u800C\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\uFF0C\u88AB<code>XMLHttpRequest</code>\u7684<code>onerror</code>\u56DE\u8C03\u51FD\u6570\u6355\u83B7\u3002\u6CE8\u610F\uFF0C\u8FD9\u79CD\u9519\u8BEF\u65E0\u6CD5\u901A\u8FC7\u72B6\u6001\u7801\u8BC6\u522B\uFF0C\u56E0\u4E3AHTTP\u56DE\u5E94\u7684\u72B6\u6001\u7801\u6709\u53EF\u80FD\u662F200\u3002</p><p>\u5982<code>\u679COrigin</code>\u6307\u5B9A\u7684\u57DF\u540D\u5728\u8BB8\u53EF\u8303\u56F4\u5185\uFF0C\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u54CD\u5E94\uFF0C\u4F1A\u591A\u51FA\u51E0\u4E2A\u5934\u4FE1\u606F\u5B57\u6BB5\u3002</p><pre><code>Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: FooBar
Content-Type: text/html; charset=utf-8
</code></pre><p>\u4E0A\u9762\u7684\u5934\u4FE1\u606F\u4E4B\u4E2D\uFF0C\u6709\u4E09\u4E2A\u4E0ECORS\u8BF7\u6C42\u76F8\u5173\u7684\u5B57\u6BB5\uFF0C\u90FD\u4EE5<code>Access-Control-</code>\u5F00\u5934\u3002</p><p><strong>\uFF081\uFF09Access-Control-Allow-Origin</strong></p><p>\u8BE5\u5B57\u6BB5\u662F\u5FC5\u987B\u7684\u3002\u5B83\u7684\u503C\u8981\u4E48\u662F\u8BF7\u6C42\u65F6<code>Origin</code>\u5B57\u6BB5\u7684\u503C\uFF0C\u8981\u4E48\u662F\u4E00\u4E2A<code>*</code>\uFF0C\u8868\u793A\u63A5\u53D7\u4EFB\u610F\u57DF\u540D\u7684\u8BF7\u6C42\u3002</p><p><strong>\uFF082\uFF09Access-Control-Allow-Credentials</strong></p><p>\u8BE5\u5B57\u6BB5\u53EF\u9009\u3002\u5B83\u7684\u503C\u662F\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u662F\u5426\u5141\u8BB8\u53D1\u9001Cookie\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CCookie\u4E0D\u5305\u62EC\u5728CORS\u8BF7\u6C42\u4E4B\u4E2D\u3002\u8BBE\u4E3A<code>true</code>\uFF0C\u5373\u8868\u793A\u670D\u52A1\u5668\u660E\u786E\u8BB8\u53EF\uFF0CCookie\u53EF\u4EE5\u5305\u542B\u5728\u8BF7\u6C42\u4E2D\uFF0C\u4E00\u8D77\u53D1\u7ED9\u670D\u52A1\u5668\u3002\u8FD9\u4E2A\u503C\u4E5F\u53EA\u80FD\u8BBE\u4E3A<code>true</code>\uFF0C\u5982\u679C\u670D\u52A1\u5668\u4E0D\u8981\u6D4F\u89C8\u5668\u53D1\u9001Cookie\uFF0C\u5220\u9664\u8BE5\u5B57\u6BB5\u5373\u53EF\u3002</p><p><strong>\uFF083\uFF09Access-Control-Expose-Headers</strong></p><p>\u8BE5\u5B57\u6BB5\u53EF\u9009\u3002CORS\u8BF7\u6C42\u65F6\uFF0C<code>XMLHttpRequest</code>\u5BF9\u8C61\u7684<code>getResponseHeader()</code>\u65B9\u6CD5\u53EA\u80FD\u62FF\u52306\u4E2A\u57FA\u672C\u5B57\u6BB5\uFF1A<code>Cache-Control</code>\u3001<code>Content-Language</code>\u3001<code>Content-Type</code>\u3001<code>Expires</code>\u3001<code>Last-Modified</code>\u3001<code>Pragma</code>\u3002\u5982\u679C\u60F3\u62FF\u5230\u5176\u4ED6\u5B57\u6BB5\uFF0C\u5C31\u5FC5\u987B\u5728<code>Access-Control-Expose-Headers</code>\u91CC\u9762\u6307\u5B9A\u3002\u4E0A\u9762\u7684\u4F8B\u5B50\u6307\u5B9A\uFF0C<code>getResponseHeader(&#39;FooBar&#39;)</code>\u53EF\u4EE5\u8FD4\u56DE<code>FooBar</code>\u5B57\u6BB5\u7684\u503C\u3002</p><h2 id="_3-2-withcredentials-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_3-2-withcredentials-\u5C5E\u6027" aria-hidden="true">#</a> 3.2 withCredentials \u5C5E\u6027</h2><hr><p>\u4E0A\u9762\u8BF4\u5230\uFF0CCORS\u8BF7\u6C42\u9ED8\u8BA4\u4E0D\u53D1\u9001Cookie\u548CHTTP\u8BA4\u8BC1\u4FE1\u606F\u3002\u5982\u679C\u8981\u628ACookie\u53D1\u5230\u670D\u52A1\u5668\uFF0C\u4E00\u65B9\u9762\u8981\u670D\u52A1\u5668\u540C\u610F\uFF0C\u6307\u5B9A<code>Access-Control-Allow-Credentials</code>\u5B57\u6BB5\u3002</p><pre><code>Access-Control-Allow-Credentials: true
</code></pre><p>\u53E6\u4E00\u65B9\u9762\uFF0C\u5F00\u53D1\u8005\u5FC5\u987B\u5728AJAX\u8BF7\u6C42\u4E2D\u6253\u5F00<code>withCredentials</code>\u5C5E\u6027\u3002</p><pre><code>var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
</code></pre><p>\u5426\u5219\uFF0C\u5373\u4F7F\u670D\u52A1\u5668\u540C\u610F\u53D1\u9001Cookie\uFF0C\u6D4F\u89C8\u5668\u4E5F\u4E0D\u4F1A\u53D1\u9001\u3002\u6216\u8005\uFF0C\u670D\u52A1\u5668\u8981\u6C42\u8BBE\u7F6ECookie\uFF0C\u6D4F\u89C8\u5668\u4E5F\u4E0D\u4F1A\u5904\u7406\u3002</p><p>\u4F46\u662F\uFF0C\u5982\u679C\u7701\u7565<code>withCredentials</code>\u8BBE\u7F6E\uFF0C\u6709\u7684\u6D4F\u89C8\u5668\u8FD8\u662F\u4F1A\u4E00\u8D77\u53D1\u9001Cookie\u3002\u8FD9\u65F6\uFF0C\u53EF\u4EE5\u663E\u5F0F\u5173\u95ED<code>withCredentials</code>\u3002</p><pre><code>xhr.withCredentials = false;
</code></pre><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u8981\u53D1\u9001Cookie\uFF0C<code>Access-Control-Allow-Origin</code>\u5C31\u4E0D\u80FD\u8BBE\u4E3A\u661F\u53F7\uFF0C\u5FC5\u987B\u6307\u5B9A\u660E\u786E\u7684\u3001\u4E0E\u8BF7\u6C42\u7F51\u9875\u4E00\u81F4\u7684\u57DF\u540D\u3002\u540C\u65F6\uFF0CCookie\u4F9D\u7136\u9075\u5FAA\u540C\u6E90\u653F\u7B56\uFF0C\u53EA\u6709\u7528\u670D\u52A1\u5668\u57DF\u540D\u8BBE\u7F6E\u7684Cookie\u624D\u4F1A\u4E0A\u4F20\uFF0C\u5176\u4ED6\u57DF\u540D\u7684Cookie\u5E76\u4E0D\u4F1A\u4E0A\u4F20\uFF0C\u4E14\uFF08\u8DE8\u6E90\uFF09\u539F\u7F51\u9875\u4EE3\u7801\u4E2D\u7684<code>document.cookie</code>\u4E5F\u65E0\u6CD5\u8BFB\u53D6\u670D\u52A1\u5668\u57DF\u540D\u4E0B\u7684Cookie\u3002</p><h1 id="\u56DB\u3001\u975E\u7B80\u5355\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u975E\u7B80\u5355\u8BF7\u6C42" aria-hidden="true">#</a> \u56DB\u3001\u975E\u7B80\u5355\u8BF7\u6C42</h1><hr><h2 id="_4-1-\u9884\u68C0\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_4-1-\u9884\u68C0\u8BF7\u6C42" aria-hidden="true">#</a> 4.1 \u9884\u68C0\u8BF7\u6C42</h2><hr><p>\u975E\u7B80\u5355\u8BF7\u6C42\u662F\u90A3\u79CD\u5BF9\u670D\u52A1\u5668\u6709\u7279\u6B8A\u8981\u6C42\u7684\u8BF7\u6C42\uFF0C\u6BD4\u5982\u8BF7\u6C42\u65B9\u6CD5\u662F<code>PUT</code>\u6216<code>DELETE</code>\uFF0C\u6216\u8005<code>Content-Type</code>\u5B57\u6BB5\u7684\u7C7B\u578B\u662F<code>application/json</code>\u3002</p><p>\u975E\u7B80\u5355\u8BF7\u6C42\u7684CORS\u8BF7\u6C42\uFF0C\u4F1A\u5728\u6B63\u5F0F\u901A\u4FE1\u4E4B\u524D\uFF0C\u589E\u52A0\u4E00\u6B21HTTP\u67E5\u8BE2\u8BF7\u6C42\uFF0C\u79F0\u4E3A&quot;\u9884\u68C0&quot;\u8BF7\u6C42\uFF08preflight\uFF09\u3002</p><p>\u6D4F\u89C8\u5668\u5148\u8BE2\u95EE\u670D\u52A1\u5668\uFF0C\u5F53\u524D\u7F51\u9875\u6240\u5728\u7684\u57DF\u540D\u662F\u5426\u5728\u670D\u52A1\u5668\u7684\u8BB8\u53EF\u540D\u5355\u4E4B\u4E2D\uFF0C\u4EE5\u53CA\u53EF\u4EE5\u4F7F\u7528\u54EA\u4E9BHTTP\u52A8\u8BCD\u548C\u5934\u4FE1\u606F\u5B57\u6BB5\u3002\u53EA\u6709\u5F97\u5230\u80AF\u5B9A\u7B54\u590D\uFF0C\u6D4F\u89C8\u5668\u624D\u4F1A\u53D1\u51FA\u6B63\u5F0F\u7684<code>XMLHttpRequest</code>\u8BF7\u6C42\uFF0C\u5426\u5219\u5C31\u62A5\u9519\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u6BB5\u6D4F\u89C8\u5668\u7684JavaScript\u811A\u672C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">&#39;http://api.alice.com/cors&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;PUT&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&#39;X-Custom-Header&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0CHTTP\u8BF7\u6C42\u7684\u65B9\u6CD5\u662F<code>PUT</code>\uFF0C\u5E76\u4E14\u53D1\u9001\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5934\u4FE1\u606F<code>X-Custom-Header</code>\u3002</p><p>\u6D4F\u89C8\u5668\u53D1\u73B0\uFF0C\u8FD9\u662F\u4E00\u4E2A\u975E\u7B80\u5355\u8BF7\u6C42\uFF0C\u5C31\u81EA\u52A8\u53D1\u51FA\u4E00\u4E2A&quot;\u9884\u68C0&quot;\u8BF7\u6C42\uFF0C\u8981\u6C42\u670D\u52A1\u5668\u786E\u8BA4\u53EF\u4EE5\u8FD9\u6837\u8BF7\u6C42\u3002\u4E0B\u9762\u662F\u8FD9\u4E2A&quot;\u9884\u68C0&quot;\u8BF7\u6C42\u7684HTTP\u5934\u4FE1\u606F\u3002</p><pre><code>OPTIONS /cors HTTP/1.1
Origin: http://api.bob.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: X-Custom-Header
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
</code></pre><p>&quot;\u9884\u68C0&quot;\u8BF7\u6C42\u7528\u7684\u8BF7\u6C42\u65B9\u6CD5\u662F<code>OPTIONS</code>\uFF0C\u8868\u793A\u8FD9\u4E2A\u8BF7\u6C42\u662F\u7528\u6765\u8BE2\u95EE\u7684\u3002\u5934\u4FE1\u606F\u91CC\u9762\uFF0C\u5173\u952E\u5B57\u6BB5\u662F<code>Origin</code>\uFF0C\u8868\u793A\u8BF7\u6C42\u6765\u81EA\u54EA\u4E2A\u6E90\u3002</p><p>\u9664\u4E86<code>Origin</code>\u5B57\u6BB5\uFF0C&quot;\u9884\u68C0&quot;\u8BF7\u6C42\u7684\u5934\u4FE1\u606F\u5305\u62EC\u4E24\u4E2A\u7279\u6B8A\u5B57\u6BB5\u3002</p><p><strong>\uFF081\uFF09Access-Control-Request-Method</strong></p><p>\u8BE5\u5B57\u6BB5\u662F\u5FC5\u987B\u7684\uFF0C\u7528\u6765\u5217\u51FA\u6D4F\u89C8\u5668\u7684CORS\u8BF7\u6C42\u4F1A\u7528\u5230\u54EA\u4E9BHTTP\u65B9\u6CD5\uFF0C\u4E0A\u4F8B\u662F<code>PUT</code>\u3002</p><p><strong>\uFF082\uFF09Access-Control-Request-Headers</strong></p><p>\u8BE5\u5B57\u6BB5\u662F\u4E00\u4E2A\u9017\u53F7\u5206\u9694\u7684\u5B57\u7B26\u4E32\uFF0C\u6307\u5B9A\u6D4F\u89C8\u5668CORS\u8BF7\u6C42\u4F1A\u989D\u5916\u53D1\u9001\u7684\u5934\u4FE1\u606F\u5B57\u6BB5\uFF0C\u4E0A\u4F8B\u662F<code>X-Custom-Header</code>\u3002</p><h2 id="_4-2-\u9884\u68C0\u8BF7\u6C42\u7684\u56DE\u5E94" tabindex="-1"><a class="header-anchor" href="#_4-2-\u9884\u68C0\u8BF7\u6C42\u7684\u56DE\u5E94" aria-hidden="true">#</a> 4.2 \u9884\u68C0\u8BF7\u6C42\u7684\u56DE\u5E94</h2><hr><p>\u670D\u52A1\u5668\u6536\u5230&quot;\u9884\u68C0&quot;\u8BF7\u6C42\u4EE5\u540E\uFF0C\u68C0\u67E5\u4E86<code>Origin</code>\u3001<code>Access-Control-Request-Method</code>\u548C<code>Access-Control-Request-Headers</code>\u5B57\u6BB5\u4EE5\u540E\uFF0C\u786E\u8BA4\u5141\u8BB8\u8DE8\u6E90\u8BF7\u6C42\uFF0C\u5C31\u53EF\u4EE5\u505A\u51FA\u56DE\u5E94\u3002</p><pre><code>HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: X-Custom-Header
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain
</code></pre><p>\u4E0A\u9762\u7684HTTP\u56DE\u5E94\u4E2D\uFF0C\u5173\u952E\u7684\u662F<code>Access-Control-Allow-Origin</code>\u5B57\u6BB5\uFF0C\u8868\u793A<code>http://api.bob.com</code>\u53EF\u4EE5\u8BF7\u6C42\u6570\u636E\u3002\u8BE5\u5B57\u6BB5\u4E5F\u53EF\u4EE5\u8BBE\u4E3A\u661F\u53F7\uFF0C\u8868\u793A\u540C\u610F\u4EFB\u610F\u8DE8\u6E90\u8BF7\u6C42\u3002</p><pre><code>Access-Control-Allow-Origin: *
</code></pre><p>\u5982\u679C\u670D\u52A1\u5668\u5426\u5B9A\u4E86&quot;\u9884\u68C0&quot;\u8BF7\u6C42\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u6B63\u5E38\u7684HTTP\u56DE\u5E94\uFF0C\u4F46\u662F\u6CA1\u6709\u4EFB\u4F55CORS\u76F8\u5173\u7684\u5934\u4FE1\u606F\u5B57\u6BB5\u3002\u8FD9\u65F6\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u8BA4\u5B9A\uFF0C\u670D\u52A1\u5668\u4E0D\u540C\u610F\u9884\u68C0\u8BF7\u6C42\uFF0C\u56E0\u6B64\u89E6\u53D1\u4E00\u4E2A\u9519\u8BEF\uFF0C\u88AB<code>XMLHttpRequest</code>\u5BF9\u8C61\u7684<code>onerror</code>\u56DE\u8C03\u51FD\u6570\u6355\u83B7\u3002\u63A7\u5236\u53F0\u4F1A\u6253\u5370\u51FA\u5982\u4E0B\u7684\u62A5\u9519\u4FE1\u606F\u3002</p><pre><code>XMLHttpRequest cannot load http://api.alice.com.
Origin http://api.bob.com is not allowed by Access-Control-Allow-Origin.
</code></pre><p>\u670D\u52A1\u5668\u56DE\u5E94\u7684\u5176\u4ED6CORS\u76F8\u5173\u5B57\u6BB5\u5982\u4E0B\u3002</p><pre><code>Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: X-Custom-Header
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 1728000
</code></pre><p><strong>\uFF081\uFF09Access-Control-Allow-Methods</strong></p><p>\u8BE5\u5B57\u6BB5\u5FC5\u9700\uFF0C\u5B83\u7684\u503C\u662F\u9017\u53F7\u5206\u9694\u7684\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8868\u660E\u670D\u52A1\u5668\u652F\u6301\u7684\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\u7684\u65B9\u6CD5\u3002\u6CE8\u610F\uFF0C\u8FD4\u56DE\u7684\u662F\u6240\u6709\u652F\u6301\u7684\u65B9\u6CD5\uFF0C\u800C\u4E0D\u5355\u662F\u6D4F\u89C8\u5668\u8BF7\u6C42\u7684\u90A3\u4E2A\u65B9\u6CD5\u3002\u8FD9\u662F\u4E3A\u4E86\u907F\u514D\u591A\u6B21&quot;\u9884\u68C0&quot;\u8BF7\u6C42\u3002</p><p><strong>\uFF082\uFF09Access-Control-Allow-Headers</strong></p><p>\u5982\u679C\u6D4F\u89C8\u5668\u8BF7\u6C42\u5305\u62EC<code>Access-Control-Request-Headers</code>\u5B57\u6BB5\uFF0C\u5219<code>Access-Control-Allow-Headers</code>\u5B57\u6BB5\u662F\u5FC5\u9700\u7684\u3002\u5B83\u4E5F\u662F\u4E00\u4E2A\u9017\u53F7\u5206\u9694\u7684\u5B57\u7B26\u4E32\uFF0C\u8868\u660E\u670D\u52A1\u5668\u652F\u6301\u7684\u6240\u6709\u5934\u4FE1\u606F\u5B57\u6BB5\uFF0C\u4E0D\u9650\u4E8E\u6D4F\u89C8\u5668\u5728&quot;\u9884\u68C0&quot;\u4E2D\u8BF7\u6C42\u7684\u5B57\u6BB5\u3002</p><p><strong>\uFF083\uFF09Access-Control-Allow-Credentials</strong></p><p>\u8BE5\u5B57\u6BB5\u4E0E\u7B80\u5355\u8BF7\u6C42\u65F6\u7684\u542B\u4E49\u76F8\u540C\u3002</p><p><strong>\uFF084\uFF09Access-Control-Max-Age</strong></p><p>\u8BE5\u5B57\u6BB5\u53EF\u9009\uFF0C\u7528\u6765\u6307\u5B9A\u672C\u6B21\u9884\u68C0\u8BF7\u6C42\u7684\u6709\u6548\u671F\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002\u4E0A\u9762\u7ED3\u679C\u4E2D\uFF0C\u6709\u6548\u671F\u662F20\u5929\uFF081728000\u79D2\uFF09\uFF0C\u5373\u5141\u8BB8\u7F13\u5B58\u8BE5\u6761\u56DE\u5E941728000\u79D2\uFF08\u537320\u5929\uFF09\uFF0C\u5728\u6B64\u671F\u95F4\uFF0C\u4E0D\u7528\u53D1\u51FA\u53E6\u4E00\u6761\u9884\u68C0\u8BF7\u6C42\u3002</p><h2 id="_4-3-\u6D4F\u89C8\u5668\u7684\u6B63\u5E38\u8BF7\u6C42\u548C\u56DE\u5E94" tabindex="-1"><a class="header-anchor" href="#_4-3-\u6D4F\u89C8\u5668\u7684\u6B63\u5E38\u8BF7\u6C42\u548C\u56DE\u5E94" aria-hidden="true">#</a> 4.3 \u6D4F\u89C8\u5668\u7684\u6B63\u5E38\u8BF7\u6C42\u548C\u56DE\u5E94</h2><hr><p>\u4E00\u65E6\u670D\u52A1\u5668\u901A\u8FC7\u4E86&quot;\u9884\u68C0&quot;\u8BF7\u6C42\uFF0C\u4EE5\u540E\u6BCF\u6B21\u6D4F\u89C8\u5668\u6B63\u5E38\u7684CORS\u8BF7\u6C42\uFF0C\u5C31\u90FD\u8DDF\u7B80\u5355\u8BF7\u6C42\u4E00\u6837\uFF0C\u4F1A\u6709\u4E00\u4E2A<code>Origin</code>\u5934\u4FE1\u606F\u5B57\u6BB5\u3002\u670D\u52A1\u5668\u7684\u56DE\u5E94\uFF0C\u4E5F\u90FD\u4F1A\u6709\u4E00\u4E2A<code>Access-Control-Allow-Origin</code>\u5934\u4FE1\u606F\u5B57\u6BB5\u3002</p><p>\u4E0B\u9762\u662F&quot;\u9884\u68C0&quot;\u8BF7\u6C42\u4E4B\u540E\uFF0C\u6D4F\u89C8\u5668\u7684\u6B63\u5E38CORS\u8BF7\u6C42\u3002</p><pre><code>PUT /cors HTTP/1.1
Origin: http://api.bob.com
Host: api.alice.com
X-Custom-Header: value
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
</code></pre><p>\u4E0A\u9762\u5934\u4FE1\u606F\u7684<code>Origin</code>\u5B57\u6BB5\u662F\u6D4F\u89C8\u5668\u81EA\u52A8\u6DFB\u52A0\u7684\u3002</p><p>\u4E0B\u9762\u662F\u670D\u52A1\u5668\u6B63\u5E38\u7684\u56DE\u5E94\u3002</p><pre><code>Access-Control-Allow-Origin: http://api.bob.com
Content-Type: text/html; charset=utf-8
</code></pre><p>\u4E0A\u9762\u5934\u4FE1\u606F\u4E2D\uFF0C<code>Access-Control-Allow-Origin</code>\u5B57\u6BB5\u662F\u6BCF\u6B21\u56DE\u5E94\u90FD\u5FC5\u5B9A\u5305\u542B\u7684\u3002</p><h1 id="\u4E94\u3001\u4E0Ejsonp\u7684\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u4E0Ejsonp\u7684\u6BD4\u8F83" aria-hidden="true">#</a> \u4E94\u3001\u4E0EJSONP\u7684\u6BD4\u8F83</h1><hr><p>CORS\u4E0EJSONP\u7684\u4F7F\u7528\u76EE\u7684\u76F8\u540C\uFF0C\u4F46\u662F\u6BD4JSONP\u66F4\u5F3A\u5927\u3002</p><p>JSONP\u53EA\u652F\u6301<code>GET</code>\u8BF7\u6C42\uFF0CCORS\u652F\u6301\u6240\u6709\u7C7B\u578B\u7684HTTP\u8BF7\u6C42\u3002JSONP\u7684\u4F18\u52BF\u5728\u4E8E\u652F\u6301\u8001\u5F0F\u6D4F\u89C8\u5668\uFF0C\u4EE5\u53CA\u53EF\u4EE5\u5411\u4E0D\u652F\u6301CORS\u7684\u7F51\u7AD9\u8BF7\u6C42\u6570\u636E\u3002</p>`,94);function t(c,a){return s}var r=e(n,[["render",t],["__file","cors.html.vue"]]);export{r as default};
