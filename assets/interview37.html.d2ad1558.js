import{a as n}from"./app.b1cf3273.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u5177\u4F53\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5177\u4F53\u4F7F\u7528" aria-hidden="true">#</a> \u5177\u4F53\u4F7F\u7528</h1><p>\u4F7F\u7528\u7EAF HTML Form \u4E0A\u4F20\u6587\u4EF6\uFF1A</p><p>name \u5C5E\u6027\u662F\u4E0E\u540E\u7AEF\u7EA6\u5B9A\u7684\u6587\u4EF6\u4E0A\u4F20\u5B57\u6BB5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;form action=&quot;http://localhost:3001/api/tools/upload&quot; method=&quot;POST&quot; enctype=&quot;multipart/form-data&quot;&gt;
    &lt;input type=&quot;file&quot; name=&quot;fileToUpload&quot;&gt;
    &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Node.js + express + multer \u5B9E\u73B0\u540E\u7AEF\u6587\u4EF6\u63A5\u6536\u5904\u7406</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> multer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;multer&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u56FE\u7247\u4E0A\u4F20\u6A21\u5757</span>

<span class="token keyword">var</span> upload <span class="token operator">=</span> <span class="token function">multer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">dest</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../public/upload/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">// \u5B9A\u4E49\u56FE\u7247\u4E0A\u4F20\u7684\u4E34\u65F6\u76EE\u5F55</span>
router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/tools/upload&#39;</span><span class="token punctuation">,</span> authLogin<span class="token punctuation">,</span> upload<span class="token punctuation">.</span><span class="token function">single</span><span class="token punctuation">(</span><span class="token string">&#39;fileToUpload&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> file <span class="token operator">=</span> req<span class="token punctuation">.</span>file
    <span class="token comment">// \u5904\u7406\u6587\u4EF6</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p>\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u628A\u6587\u4EF6\u8F6C\u5316\u6210\u5B57\u8282\u6D41\uFF0C\u7136\u540E\u4F7F\u7528http\u8FDB\u884C\u4F20\u8F93\uFF0C\u540E\u7AEF\u63A5\u53D7\u540E\u5728\u628A\u4E8C\u8FDB\u5236\u8F6C\u5316\u6210\u539F\u5148\u7684\u6587\u4EF6\u683C\u5F0F\u3002</p><p>\u5728HTML\u8868\u5355\u4E2D\uFF0C\u53EF\u4EE5\u4E0A\u4F20\u6587\u4EF6\u7684\u552F\u4E00\u63A7\u4EF6\u5C31\u662F<code>&lt;input type=&quot;file&quot;&gt;</code>\u3002 \u5F53\u4E00\u4E2A\u8868\u5355\u5305\u542B<code>&lt;input type=&quot;file&quot;&gt;</code>\u65F6\uFF0C\u8868\u5355\u7684enctype\u5FC5\u987B\u6307\u5B9A\u4E3Amultipart/form-data\uFF08\u8868\u660E\u8868\u5355\u9700\u8981\u4E0A\u4F20\u4E8C\u8FDB\u5236\u6570\u636E\uFF09\uFF0Cmethod\u5FC5\u987B\u6307\u5B9A\u4E3A&gt; post\uFF0C\u6D4F\u89C8\u5668\u624D\u80FD\u6B63\u786E\u7F16\u7801\u5E76\u4EE5multipart/form-data\u683C\u5F0F\u53D1\u9001\u8868\u5355\u7684\u6570\u636E\u3002multiple=&quot;multiple&quot;\u8BF4\u660E\u53EF\u4EE5\u540C\u65F6\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6</p><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6587\u4EF6\u7F16\u7801\u4F20\u8F93\uFF0C\u53EF\u4EE5\u628A\u56FE\u7247\u8F6C\u5316\u6210base64\u683C\u5F0F\u7136\u540E\u8FDB\u884C\u4F20\u8F93\uFF0C\u5230\u4E86\u670D\u52A1\u5668\u4E4B\u540E\u76F4\u63A5\u89E3\u7801base64\uFF0C</p></blockquote><h1 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h1><h2 id="http\u62A5\u6587" tabindex="-1"><a class="header-anchor" href="#http\u62A5\u6587" aria-hidden="true">#</a> HTTP\u62A5\u6587</h2><ul><li><p>\u8D77\u59CB\u884C - \u5BF9\u62A5\u6587\u7684\u63CF\u8FF0\uFF0C\u6240\u6709\u7684HTTP\u62A5\u6587\u90FD\u4EE5\u4E00\u4E2A\u8D77\u59CB\u884C\u4F5C\u4E3A\u5F00\u59CB\uFF0C\u5373\u62A5\u6587\u7684\u7B2C\u4E00\u884C\u5C31\u662F\u8D77\u59CB\u884C</p></li><li><p>\u9996\u90E8 - \u53EF\u4EE5\u67090\u6216\u591A\u4E2A\u9996\u90E8\u5B57\u6BB5\uFF0C\u6BCF\u4E2A\u9996\u90E8 \u5B57\u6BB5\u90FD\u5305\u542B\u4E00\u4E2A\u540D\u5B57\u548C\u4E00\u4E2A\u503C\uFF0C\u9996\u90E8\u5B57\u6BB5\u540E\u662F\\r\\n\uFF0C\u9996\u90E8\u4EE5\u4E00\u4E2A\u7A7A\u884C\\r\\n\u7ED3\u675F</p></li><li><p>\u5B9E\u4F53\u7684\u4E3B\u4F53\u90E8\u5206 - \u9996\u90E8\u4E4B\u540E\u5C31\u662F\u53EF\u9009\u7684\u62A5\u6587\u5B9E\u4F53\uFF0C\u5B9E\u4F53\u7684\u4E3B\u4F53\u662FHTTP\u62A5\u6587\u7684\u8D1F\u8377\uFF0C\u4F20\u8F93\u7684\u5185\u5BB9\u5C31\u5728\u5B9E\u4F53\u7684\u4E3B\u4F53\u4E2D</p></li></ul><h2 id="\u5B9E\u4F53" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F53" aria-hidden="true">#</a> \u5B9E\u4F53</h2><ol><li><p>\u9996\u90E8\u4E2DContent-Type\u5B9A\u4E49\u4E86\u5206\u9694\u7B26boundary\uFF0C\u4EE54\u4E2A\u7834\u6298\u53F7\u5F00\u5934</p></li><li><p>\u5B9E\u4F53\u4E2D\u5206\u9694\u7B26 = &quot;\\r\\n--&quot; + \u9996\u90E8\u4E2D\u5206\u9694\u7B26boundary</p></li><li><p>\u5B9E\u4F53\u9996\u90E8Content_Disposition\u4E2D\u5B9A\u4E49\u4E86filename\u8868\u793A\u4E0A\u4F20\u6587\u4EF6\u540D\uFF08name=\u201CfileName\u201D\u8868\u793Ainput\u57DF\u5C5E\u6027\uFF09\uFF0C\u7531\u4E8E\u8FD9\u91CC\u662F\u4E00\u4E2Ainput\u6846\u4E2D\u4E0A\u4F20\u4E24\u4E2AExcel1. \u6587\u4EF6\uFF0C\u6240\u4EE5\u8FD9\u91CC\u76842\u4E2A\u5B9E\u4F53\u9996\u90E8\u4E2D\u7684Content_Disposition\u7684name\u5C5E\u6027\u90FD\u4E3AfileName</p></li><li><p>\u5B9E\u4F53\u9996\u90E8Content-Type\u63CF\u8FF0\u4E86\u4E0A\u4F20\u6587\u4EF6\u7684\u7C7B\u578B\uFF0C\u8FD9\u91CC\u8868\u793ASheet\u5DE5\u4F5C\u8868\uFF0C\u5373Excel</p></li><li><p>\u5B9E\u4F53\u9996\u90E8\u4E2D\u591A\u884C\u662F\u4EE5CRLF\u5206\u9694\u7684\uFF0C\u5373\\r\\n</p></li><li><p>\u5B9E\u4F53\u4E2D\u53EF\u80FD\u5B58\u5728\u591A\u90E8\u5206\uFF0C\u6BCF\u4E00\u90E8\u5206\u4E4B\u95F4\u4EE5\u5206\u9694\u7B26boundary\u5206\u9694\uFF0C\u6BCF\u4E2A\u90E8\u5206\u7684\u5B9E\u4F53\u9996\u90E8\u4E0E\u4E3B\u4F53\u4E4B\u95F4\u4EE5CRLFCRLF\u5206\u9694\uFF0C\u5373\\r\\n\\r\\n</p></li><li><p>\u7B26\u53F7 - \u6807\u5FD7 - \u5341\u516D\u8FDB\u5236 - \u5B57\u8282\u7801 \uFF0C \u56DE\u8F66\uFF1A \\r - CR - 0d - 13, \u6362\u884C\uFF1A\\n - LF - oa - 10</p></li></ol>`,12);function p(e,o){return t}var u=s(a,[["render",p]]);export{u as default};
