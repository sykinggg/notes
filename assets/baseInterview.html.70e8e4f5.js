import{_ as e,r as a,o as t,c as o,b as l,d as i,a as n,e as p}from"./app.11072343.js";const c={},r=n('<h2 id="_1-http-https-\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#_1-http-https-\u534F\u8BAE" aria-hidden="true">#</a> <strong>1. http/https \u534F\u8BAE</strong></h2><ul><li><p>1.0 \u534F\u8BAE\u7F3A\u9677:</p><ul><li><p>\u65E0\u6CD5\u590D\u7528\u94FE\u63A5\uFF0C\u5B8C\u6210\u5373\u65AD\u5F00\uFF0C<strong>\u91CD\u65B0\u6162\u542F\u52A8\u548C TCP 3\u6B21\u63E1\u624B</strong></p></li><li><p>head of line blocking: <strong>\u7EBF\u5934\u963B\u585E</strong>\uFF0C\u5BFC\u81F4\u8BF7\u6C42\u4E4B\u95F4\u4E92\u76F8\u5F71\u54CD</p></li></ul></li><li><p>1.1 \u6539\u8FDB:</p><ul><li><p><strong>\u957F\u8FDE\u63A5</strong>(\u9ED8\u8BA4 keep-alive)\uFF0C\u590D\u7528</p></li><li><p>host \u5B57\u6BB5\u6307\u5B9A\u5BF9\u5E94\u7684\u865A\u62DF\u7AD9\u70B9</p></li><li><p>\u65B0\u589E\u529F\u80FD:</p><ul><li><p>\u65AD\u70B9\u7EED\u4F20</p></li><li><p>\u8EAB\u4EFD\u8BA4\u8BC1</p></li><li><p>\u72B6\u6001\u7BA1\u7406</p></li><li><p>cache \u7F13\u5B58</p><ul><li><p>Cache-Control</p></li><li><p>Expires</p></li><li><p>Last-Modified</p></li><li><p>Etag</p></li></ul></li></ul></li></ul></li><li><p>2.0:</p><ul><li><p>\u591A\u8DEF\u590D\u7528</p></li><li><p>\u4E8C\u8FDB\u5236\u5206\u5E27\u5C42: \u5E94\u7528\u5C42\u548C\u4F20\u8F93\u5C42\u4E4B\u95F4</p></li><li><p>\u9996\u90E8\u538B\u7F29</p></li><li><p>\u670D\u52A1\u7AEF\u63A8\u9001</p></li></ul></li><li><p>https: \u8F83\u4E3A\u5B89\u5168\u7684\u7F51\u7EDC\u4F20\u8F93\u534F\u8BAE</p><ul><li><p>\u8BC1\u4E66(\u516C\u94A5)</p></li><li><p>SSL \u52A0\u5BC6</p></li><li><p>\u7AEF\u53E3 443</p></li></ul></li><li><p>TCP:</p><ul><li><p>\u4E09\u6B21\u63E1\u624B</p></li><li><p>\u56DB\u6B21\u6325\u624B</p></li><li><p>\u6ED1\u52A8\u7A97\u53E3: \u6D41\u91CF\u63A7\u5236</p></li><li><p>\u62E5\u585E\u5904\u7406</p><ul><li><p>\u6162\u5F00\u59CB</p></li><li><p>\u62E5\u585E\u907F\u514D</p></li><li><p>\u5FEB\u901F\u91CD\u4F20</p></li><li><p>\u5FEB\u901F\u6062\u590D</p></li></ul></li></ul></li><li><p>\u7F13\u5B58\u7B56\u7565: \u53EF\u5206\u4E3A <strong>\u5F3A\u7F13\u5B58</strong> \u548C <strong>\u534F\u5546\u7F13\u5B58</strong></p><ul><li><p>Cache-Control/Expires: \u6D4F\u89C8\u5668\u5224\u65AD\u7F13\u5B58\u662F\u5426\u8FC7\u671F\uFF0C\u672A\u8FC7\u671F\u65F6\uFF0C\u76F4\u63A5\u4F7F\u7528\u5F3A\u7F13\u5B58\uFF0C<strong>Cache-Control\u7684 max-age \u4F18\u5148\u7EA7\u9AD8\u4E8E Expires</strong></p></li><li><p>\u5F53\u7F13\u5B58\u5DF2\u7ECF\u8FC7\u671F\u65F6\uFF0C\u4F7F\u7528\u534F\u5546\u7F13\u5B58</p><ul><li><p>\u552F\u4E00\u6807\u8BC6\u65B9\u6848: Etag(response \u643A\u5E26) &amp; If-None-Match(request\u643A\u5E26\uFF0C\u4E0A\u4E00\u6B21\u8FD4\u56DE\u7684 Etag): \u670D\u52A1\u5668\u5224\u65AD\u8D44\u6E90\u662F\u5426\u88AB\u4FEE\u6539\uFF0C</p></li><li><p>\u6700\u540E\u4E00\u6B21\u4FEE\u6539\u65F6\u95F4: Last-Modified(response) &amp; If-Modified-Since (request\uFF0C\u4E0A\u4E00\u6B21\u8FD4\u56DE\u7684Last-Modified)</p><ul><li><p>\u5982\u679C\u4E00\u81F4\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE 304 \u901A\u77E5\u6D4F\u89C8\u5668\u4F7F\u7528\u7F13\u5B58</p></li><li><p>\u5982\u4E0D\u4E00\u81F4\uFF0C\u5219\u670D\u52A1\u7AEF\u8FD4\u56DE\u65B0\u7684\u8D44\u6E90</p></li></ul></li></ul></li></ul></li></ul><h2 id="_2-\u5E38\u89C1\u72B6\u6001\u7801" tabindex="-1"><a class="header-anchor" href="#_2-\u5E38\u89C1\u72B6\u6001\u7801" aria-hidden="true">#</a> <strong>2. \u5E38\u89C1\u72B6\u6001\u7801</strong></h2><ul><li><p>1xx: \u63A5\u53D7\uFF0C\u7EE7\u7EED\u5904\u7406</p></li><li><p>200: \u6210\u529F\uFF0C\u5E76\u8FD4\u56DE\u6570\u636E</p></li><li><p>201: \u5DF2\u521B\u5EFA</p></li><li><p>202: \u5DF2\u63A5\u53D7</p></li><li><p>203: \u6210\u4E3A\uFF0C\u4F46\u672A\u6388\u6743</p></li><li><p>204: \u6210\u529F\uFF0C\u65E0\u5185\u5BB9</p></li><li><p>205: \u6210\u529F\uFF0C\u91CD\u7F6E\u5185\u5BB9</p></li><li><p>206: \u6210\u529F\uFF0C\u90E8\u5206\u5185\u5BB9</p></li><li><p>301: \u6C38\u4E45\u79FB\u52A8\uFF0C\u91CD\u5B9A\u5411</p></li><li><p>302: \u4E34\u65F6\u79FB\u52A8\uFF0C\u53EF\u4F7F\u7528\u539F\u6709URI</p></li><li><p>304: \u8D44\u6E90\u672A\u4FEE\u6539\uFF0C\u53EF\u4F7F\u7528\u7F13\u5B58</p></li><li><p>305: \u9700\u4EE3\u7406\u8BBF\u95EE</p></li><li><p>400: \u8BF7\u6C42\u8BED\u6CD5\u9519\u8BEF</p></li><li><p>401: \u8981\u6C42\u8EAB\u4EFD\u8BA4\u8BC1</p></li><li><p>403: \u62D2\u7EDD\u8BF7\u6C42</p></li><li><p>404: \u8D44\u6E90\u4E0D\u5B58\u5728</p></li><li><p>500: \u670D\u52A1\u5668\u9519\u8BEF</p></li></ul><h2 id="_3-get-post" tabindex="-1"><a class="header-anchor" href="#_3-get-post" aria-hidden="true">#</a> <strong>3. get / post</strong></h2><ul><li><p>get: \u7F13\u5B58\u3001\u8BF7\u6C42\u957F\u5EA6\u53D7\u9650\u3001\u4F1A\u88AB\u5386\u53F2\u4FDD\u5B58\u8BB0\u5F55</p><ul><li>\u65E0\u526F\u4F5C\u7528(\u4E0D\u4FEE\u6539\u8D44\u6E90)\uFF0C\u5E42\u7B49(\u8BF7\u6C42\u6B21\u6570\u4E0E\u8D44\u6E90\u65E0\u5173)\u7684\u573A\u666F</li></ul></li><li><p>post: \u5B89\u5168\u3001\u5927\u6570\u636E\u3001\u66F4\u591A\u7F16\u7801\u7C7B\u578B</p></li></ul><p>\u4E24\u8005\u8BE6\u7EC6\u5BF9\u6BD4\u5982\u4E0B\u56FE:</p><p><img src="https://user-gold-cdn.xitu.io/2019/2/14/168e9d9050b9d08a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="get&amp;post\u5BF9\u6BD4"></p>',8),u={href:"https://user-gold-cdn.xitu.io/2019/2/14/168e9d9050b9d08a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",target:"_blank",rel:"noopener noreferrer"},d=p("get&post\u5BF9\u6BD4"),h=n('<h2 id="_4-websocket" tabindex="-1"><a class="header-anchor" href="#_4-websocket" aria-hidden="true">#</a> <strong>4. Websocket</strong></h2><p>Websocket \u662F\u4E00\u4E2A <strong>\u6301\u4E45\u5316\u7684\u534F\u8BAE</strong>\uFF0C \u57FA\u4E8E http \uFF0C \u670D\u52A1\u7AEF\u53EF\u4EE5 <strong>\u4E3B\u52A8 push</strong></p><ul><li><p>\u517C\u5BB9\uFF1A</p><ul><li><p>FLASH Socket</p></li><li><p>\u957F\u8F6E\u8BE2\uFF1A \u5B9A\u65F6\u53D1\u9001 ajax</p></li><li><p>long poll\uFF1A \u53D1\u9001 --&gt; \u6709\u6D88\u606F\u65F6\u518D response</p></li></ul></li><li><p><code>new WebSocket(url)</code></p></li><li><p><code>ws.onerror = fn</code></p></li><li><p><code>ws.onclose = fn</code></p></li><li><p><code>ws.onopen = fn</code></p></li><li><p><code>ws.onmessage = fn</code></p></li><li><p><code>ws.send()</code></p></li></ul><p><strong>\u5F15\u7533\u7684\u95EE\u9898\uFF1A</strong></p><blockquote><p>\u5BF9\u4E8E\u4F4E\u7AEF\u4E0D\u652F\u6301websocket\u7684\u6D4F\u89C8\u5668\uFF0C\u4E00\u822C\u6709\u51E0\u4E2A\u89E3\u51B3\u65B9\u6848</p></blockquote>',5),k=l("li",null,[l("p",null,[p("\u4F7F\u7528\u8F6E\u8BE2\u6216\u957F\u8FDE\u63A5\u7684\u65B9\u5F0F\u5B9E\u73B0\u4F2A"),l("code",null,"websocket"),p("\u7684\u901A\u4FE1")])],-1),g=p("\u4F7F\u7528flash\u6216\u5176\u4ED6\u65B9\u6CD5\u5B9E\u73B0\u4E00\u4E2A"),_={href:"https://segmentfault.com/q/1010000005000671/a-1020000005003936",target:"_blank",rel:"noopener noreferrer"},b=l("code",null,"websocket",-1),m=p("\u5BA2\u6237\u7AEF"),v=l("li",null,[l("p",null,[p("\u5F15\u5165"),l("code",null,"SockJS"),p("\u5E93\uFF0C\u4ED6\u662FJavaScript\u7684\u4E00\u4E2A\u5E93\uFF0C\u652F\u6301"),l("code",null,"websocket"),p("\u7684\u6D4F\u89C8\u5668\u4F1A\u4F18\u5148\u4F7F\u7528\u539F\u751F\u7684websorcket\uFF0C\u5982\u679C\u4E0D\u652F\u6301\uFF0C\u5219\u4F1A\u4F7F\u7528\u5F15\u7528\u7684\u5E93\u6587\u4EF6\u3002")])],-1),f=l("li",null,[l("p",null,[p("\u5F15\u7528"),l("code",null,"socket.IO"),p("\u7684\u5E93\u6587\u4EF6\uFF0C\u8FD9\u540C\u6837\u662F\u57FA\u4E8E\u65F6\u95F4\u7684\u53CC\u5411\u901A\u4FE1\uFF0C\u5982\u4F55\u4E0D\u652F\u6301\u5219\u4F1A\u4F7F\u7528\u66FF\u4EE3\u7684\u65B9\u6848\u3002")])],-1),w=n(`<h2 id="_5-tcp\u4E09\u6B21\u63E1\u624B" tabindex="-1"><a class="header-anchor" href="#_5-tcp\u4E09\u6B21\u63E1\u624B" aria-hidden="true">#</a> <strong>5. TCP\u4E09\u6B21\u63E1\u624B</strong></h2><p>\u5EFA\u7ACB\u8FDE\u63A5\u524D\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u9700\u8981\u901A\u8FC7\u63E1\u624B\u6765\u786E\u8BA4\u5BF9\u65B9:</p><ul><li><p>\u5BA2\u6237\u7AEF\u53D1\u9001 syn(\u540C\u6B65\u5E8F\u5217\u7F16\u53F7) \u8BF7\u6C42\uFF0C\u8FDB\u5165 syn_send \u72B6\u6001\uFF0C\u7B49\u5F85\u786E\u8BA4</p></li><li><p>\u670D\u52A1\u7AEF\u63A5\u6536\u5E76\u786E\u8BA4 syn \u5305\u540E\u53D1\u9001 syn+ack \u5305\uFF0C\u8FDB\u5165 syn_recv \u72B6\u6001</p></li><li><p>\u5BA2\u6237\u7AEF\u63A5\u6536 syn+ack \u5305\u540E\uFF0C\u53D1\u9001 ack \u5305\uFF0C\u53CC\u65B9\u8FDB\u5165 established \u72B6\u6001</p></li></ul><h2 id="_6-tcp\u56DB\u6B21\u6325\u624B" tabindex="-1"><a class="header-anchor" href="#_6-tcp\u56DB\u6B21\u6325\u624B" aria-hidden="true">#</a> <strong>6. TCP\u56DB\u6B21\u6325\u624B</strong></h2><ul><li><p>\u5BA2\u6237\u7AEF -- FIN --&gt; \u670D\u52A1\u7AEF\uFF0C FIN\u2014WAIT</p></li><li><p>\u670D\u52A1\u7AEF -- ACK --&gt; \u5BA2\u6237\u7AEF\uFF0C CLOSE-WAIT</p></li><li><p>\u670D\u52A1\u7AEF -- ACK,FIN --&gt; \u5BA2\u6237\u7AEF\uFF0C LAST-ACK</p></li><li><p>\u5BA2\u6237\u7AEF -- ACK --&gt; \u670D\u52A1\u7AEF\uFF0CCLOSED</p></li></ul><h2 id="_7-node-\u7684-event-loop-6\u4E2A\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_7-node-\u7684-event-loop-6\u4E2A\u9636\u6BB5" aria-hidden="true">#</a> <strong>7. Node \u7684 Event Loop: 6\u4E2A\u9636\u6BB5</strong></h2><ul><li><p>timer \u9636\u6BB5: \u6267\u884C\u5230\u671F\u7684<code>setTimeout / setInterval</code>\u961F\u5217\u56DE\u8C03</p></li><li><p>I/O \u9636\u6BB5: \u6267\u884C\u4E0A\u8F6E\u5FAA\u73AF\u6B8B\u6D41\u7684<code>callback </code></p></li><li><p>idle, prepare</p></li><li><p>poll: \u7B49\u5F85\u56DE\u8C03</p><ol><li><p>\u6267\u884C\u56DE\u8C03</p></li><li><p>\u6267\u884C\u5B9A\u65F6\u5668</p><ul><li><p>\u5982\u6709\u5230\u671F\u7684<code>setTimeout / setInterval</code>\uFF0C \u5219\u8FD4\u56DE timer \u9636\u6BB5</p></li><li><p>\u5982\u6709<code>setImmediate</code>\uFF0C\u5219\u524D\u5F80 check \u9636\u6BB5</p></li></ul></li></ol></li><li><p>check</p><ul><li>\u6267\u884C<code>setImmediate</code></li></ul></li><li><p>close callbacks</p></li></ul><h2 id="_8-\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#_8-\u8DE8\u57DF" aria-hidden="true">#</a> <strong>8.\u8DE8\u57DF</strong></h2><ul><li>JSONP: \u5229\u7528<code>&lt;script&gt;</code>\u6807\u7B7E\u4E0D\u53D7\u8DE8\u57DF\u9650\u5236\u7684\u7279\u70B9\uFF0C\u7F3A\u70B9\u662F\u53EA\u80FD\u652F\u6301 get \u8BF7\u6C42</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> jsonpCallback<span class="token punctuation">,</span> success</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span>
    script<span class="token punctuation">.</span>src <span class="token operator">=</span> url
    script<span class="token punctuation">.</span>async <span class="token operator">=</span> <span class="token boolean">true</span>
    script<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;text/javascript&#39;</span>
    window<span class="token punctuation">[</span>jsonpCallback<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        success <span class="token operator">&amp;&amp;</span> <span class="token function">success</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u8BBE\u7F6E <code>CORS: Access-Control-Allow-Origin\uFF1A*</code></p></li><li><p>postMessage</p></li></ul><p><strong>9.\u5B89\u5168</strong></p><ul><li><p>XSS\u653B\u51FB: \u6CE8\u5165\u6076\u610F\u4EE3\u7801</p><ul><li><p>cookie \u8BBE\u7F6E httpOnly</p></li><li><p>\u8F6C\u4E49\u9875\u9762\u4E0A\u7684\u8F93\u5165\u5185\u5BB9\u548C\u8F93\u51FA\u5185\u5BB9</p></li></ul></li><li><p>CSRF: \u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020\uFF0C\u9632\u62A4:</p><ul><li><p>get \u4E0D\u4FEE\u6539\u6570\u636E</p></li><li><p>\u4E0D\u88AB\u7B2C\u4E09\u65B9\u7F51\u7AD9\u8BBF\u95EE\u5230\u7528\u6237\u7684 cookie</p></li><li><p>\u8BBE\u7F6E\u767D\u540D\u5355\uFF0C\u4E0D\u88AB\u7B2C\u4E09\u65B9\u7F51\u7AD9\u8BF7\u6C42</p></li><li><p>\u8BF7\u6C42\u6821\u9A8C</p></li></ul></li></ul>`,13);function x(C,I){const s=a("ExternalLinkIcon");return t(),o("div",null,[r,l("p",null,[l("a",u,[d,i(s)])]),h,l("ol",null,[k,l("li",null,[l("p",null,[g,l("a",_,[b,m,i(s)])])]),v,f]),w])}var y=e(c,[["render",x],["__file","baseInterview.html.vue"]]);export{y as default};
