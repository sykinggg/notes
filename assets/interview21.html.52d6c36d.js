import{a}from"./app.3aebe68d.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const t={},s=a(`<h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p><code>enctype</code>\u5C5E\u6027\u89C4\u5B9A\u5728\u5C06\u8868\u5355\u6570\u636E\u53D1\u9001\u5230\u670D\u52A1\u5668\u4E4B\u524D\u5982\u4F55\u5BF9\u5176\u8FDB\u884C\u7F16\u7801</p><p>\u6CE8\u610F\uFF1A\u53EA\u6709<code>method = &quot;post&quot;</code>\u65F6\u624D\u4F7F\u7528<code>enctype</code>\u5C5E\u6027\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u5C5E\u6027\u503C" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u503C" aria-hidden="true">#</a> \u5C5E\u6027\u503C</h2><table><thead><tr><th>\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>application/x-www-form-urlencoded</td><td>\u9ED8\u8BA4\u3002\u5728\u53D1\u9001\u524D\u5BF9\u6240\u6709\u5B57\u7B26\u8FDB\u884C\u7F16\u7801\uFF08\u5C06\u7A7A\u683C\u8F6C\u6362\u4E3A &quot;+&quot; \u7B26\u53F7\uFF0C\u7279\u6B8A\u5B57\u7B26\u8F6C\u6362\u4E3A ASCII HEX \u503C\uFF09\u3002</td></tr><tr><td>multipart/form-data</td><td>\u4E0D\u5BF9\u5B57\u7B26\u7F16\u7801\u3002\u5F53\u4F7F\u7528\u6709\u6587\u4EF6\u4E0A\u4F20\u63A7\u4EF6\u7684\u8868\u5355\u65F6\uFF0C\u8BE5\u503C\u662F\u5FC5\u9700\u7684\u3002</td></tr><tr><td>text/plain</td><td>\u5C06\u7A7A\u683C\u8F6C\u6362\u4E3A &quot;+&quot; \u7B26\u53F7\uFF0C\u4F46\u4E0D\u7F16\u7801\u7279\u6B8A\u5B57\u7B26\u3002</td></tr></tbody></table><ol><li><p>\u5F53\u6307\u5B9A\u4E86<code>method = &quot;post&quot;</code>\u65F6\uFF0C\u5C31\u4F1A\u7528\u5230<code>enctype</code>\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u4E09 \u79CD\u7C7B\u578B\u7684\u503C\u3002\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E<code>enctyp</code>\u7684\u503C\uFF0C\u90A3\u4E48\u5B83\u5C06\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u503C<code>application/x-www-form-urlencoded</code></p></li><li><p><code>application/x-www-form-urlencoded</code>\u7F16\u7801\u7C7B\u578B\uFF1A</p><ul><li><p>\u5728\u4E0D\u6307\u5B9A <code>enctype</code> \u5C5E\u6027\u65F6 <code>application/x-www-form-urlencoded</code> \u662F\u9ED8\u8BA4\u5C5E\u6027\u3002</p></li><li><p>\u4F1A\u5C06\u8868\u5355\u4E2D\u53D1\u9001\u5230\u670D\u52A1\u5668\u4E4B\u524D\u90FD\u4F1A\u8FDB\u884C\u7F16\u7801(\u7A7A\u683C\u8F6C\u6362\u4E3A <code>&quot;+&quot;</code> \u52A0\u53F7\uFF0C\u7279\u6B8A\u7B26\u53F7\u8F6C\u6362\u4E3A ASCII HEX \u503C)\uFF0C\u6570\u636E\u7F16\u7801\u6210\u952E\u503C\u5BF9\u7684\u5F62\u5F0F</p></li><li><p>\u5F53\u8868\u5355\u7684<code>action</code>\u4E3A<code>post</code>\u65F6\uFF0C\u5B83\u4F1A\u628A<code>form</code>\u6570\u636E\u5C01\u88C5\u5230 <code>http body</code> \u4E2D\uFF0C\u7136\u540E\u53D1\u9001\u5230\u670D\u52A1\u5668\uFF1B</p></li><li><p>\u5F53\u8868\u5355\u7684<code>action</code>\u4E3A<code>get</code>\u65F6\uFF0C\u5B83\u4F1A\u628A\u8868\u5355\u4E2D\u53D1\u9001\u7684\u6570\u636E\u8F6C\u6362\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32(\u5982\uFF1A<code>a=1&amp;b=2&amp;c=3</code>)\u5E76\u4F7F\u7528<code>?</code>\u8FDE\u63A5\u5230 <code>url</code> \u540E\u9762\u3002</p></li></ul></li><li><p><code>multipart/form-data</code>\uFF1A\u5B83\u4E0D\u5BF9\u5B57\u7B26\u8FDB\u884C\u7F16\u7801\uFF0C\u5728\u4F7F\u7528\u5305\u542B\u6587\u4EF6(\u5982\u56FE\u7247\u3001mp4\u7B49\u6587\u4EF6)\u4E0A\u4F20\u63A7\u4EF6\u7684\u8868\u5355\u65F6\u5FC5\u987B\u4F7F\u7528\u8BE5\u503C</p></li><li><p><code>text/plain</code>\uFF1A\u6570\u636E\u4EE5\u7EAF\u6587\u672C\u683C\u5F0F\u8FDB\u884C\u7F16\u7801\uFF0C\u7A7A\u683C\u8F6C\u6362\u4E3A<code>&#39;+&#39;</code>\u53F7\uFF0C\u4F46\u4E0D\u5BF9\u7279\u6B8A\u5B57\u7B26\u7F16\u7801</p></li></ol><p><strong>\u793A\u4F8B</strong></p><p>HTML\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>application/x-www-form-urlencoded<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        First name: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fname<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Last name: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lname<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u63D0\u4EA4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6CE8\u610F\uFF1A</p><ol><li><p><code>form</code>\u7684\u63D0\u4EA4\u884C\u4E3A\u9700\u8981\u901A\u8FC7<code>type=submit</code>\u5B9E\u73B0</p></li><li><p><code>form</code>\u4E2D\u7684<code>method</code>\u5C5E\u6027\u4E0D\u6307\u5B9A\u65F6\uFF0C\u9ED8\u8BA4\u7684\u63D0\u4EA4\u65B9\u5F0F\u4E3A<code>get</code>\u8BF7\u6C42\uFF0C\u90A3\u4E48\u4E5F\u5C31\u662F\u8BF4\u5982\u679C\u4E0D\u6307\u5B9A<code>method</code>\u4E3A<code>post</code>\uFF0C\u90A3\u4E48\u662F\u4E0D\u4F1A\u4F7F\u7528<code>enctype</code>\u5C5E\u6027\u7684\u3002</p></li><li><p><code>form</code>\u8868\u5355\u7684<code>enctype</code>\u5C5E\u6027\u662F<code>application/x-www-form-urlencoded</code></p></li></ol><p>\u63D0\u4EA4\uFF1A</p><ul><li><p>\u8868\u5355\u4E2D\u542B\u6709\u7684\u7A7A\u683C\u88AB\u8F6C\u6362\u6210\u4E86<code>+</code>\u53F7</p></li><li><p>\u5F53\u8868\u5355\u7684<code>action</code>\u4E3A<code>get</code>\u65F6\uFF0C\u8868\u5355\u4E2D\u53D1\u9001\u7684\u6570\u636E\u88AB\u901A\u8FC7<code>?</code>\u8FDE\u63A5\uFF0C\u8FDE\u63A5\u5230\u539F<code>url</code>\u540E\u9762</p></li></ul>`,15);function e(p,o){return s}var u=n(t,[["render",e]]);export{u as default};
