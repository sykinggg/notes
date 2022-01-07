import{e as p}from"./app.f4829677.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const a={},n=p(`<h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h3><p>\u7528 a \u6807\u7B7E\u5C31\u53EF\u4EE5\uFF0C\u539F\u7406\u662F\u4F7F\u7528 deeplink \u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yourapp://page/xxx<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u603B\u7ED3\u6765\u8BF4\uFF0CDeeplink\uFF0C\u53C8\u53EB\u6DF1\u5EA6\u94FE\u63A5\u6280\u672F\uFF0C\u662F\u6307\u5728App/\u77ED\u4FE1/\u5E7F\u544A\u91CC\u70B9\u51FB\u94FE\u63A5\uFF0C\u80FD\u76F4\u63A5\u8DF3\u8F6C\u5230\u76EE\u6807App\u5177\u4F53\u4F4D\u7F6E\u7684\u6280\u672F\uFF0C\u6DF1\u5EA6\u94FE\u63A5\u6253\u7834\u4E86\u7F51\u7AD9\u4E0EApp\u95F4\u7684\u58C1\u5792\uFF0C\u6210\u4E3A\u5B9E\u73B0\u7F51\u7AD9\u4E0EApp\u76F8\u4E92\u8DF3\u8F6C\u7684\u6865\u6881\u3002\u5F00\u53D1\u8005\u4E0D\u4EC5\u53EF\u4EE5\u901A\u8FC7deeplink\u5B9E\u73B0\u7F51\u7AD9\u5230App\u4E92\u76F8\u8DF3\u8F6C\uFF0C\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u4ECE\u591A\u4E2A\u5E73\u53F0\uFF08QQ\u3001\u5FAE\u4FE1\u3001\u5FAE\u535A\u3001Twitter\u3001Facebook\u3001\u77ED\u4FE1\u3001\u5404\u5927\u6D4F\u89C8\u5668\u7B49\uFF09\u5230App\u5185\u6307\u5B9A\u9875\u7684\u8DF3\u8F6C\u3002\u4F8B\u5982\u7528\u6237\u5C06\u7535\u5546App\u5185\u7684\u4E00\u4E2A\u8BE6\u60C5\u9875\u94FE\u63A5\u901A\u8FC7\u77ED\u4FE1\u5F62\u5F0F\u53D1\u9001\u7ED9\u5176\u4ED6\u4EB2\u53CB\uFF0C\u7528\u6237\u70B9\u51FB\u77ED\u4FE1\u5185\u7684\u94FE\u63A5\u5C31\u80FD\u6253\u5F00\u5BF9\u5E94\u7684H5\u9875\u9762\uFF0C\u7136\u540E\u76F4\u63A5\u8DF3\u8F6C\u5230\u7535\u5546App\u5185\u7684\u6307\u5B9A\u8BE6\u60C5\u9875\uFF0C\u800C\u4E0D\u662FApp\u9996\u9875\u3002\u5982\u679C\u7528\u6237\u5E76\u672A\u5B89\u88C5App\uFF0C\u90A3\u4E48\u5C31\u4F1A\u8DF3\u8F6C\u5230App\u4E0B\u8F7D\u9875\u9762\u3002\u7B49\u7528\u6237\u5B89\u88C5\u6253\u5F00App\u540E\u4ECD\u7136\u80FD\u8DF3\u8F6C\u5230\u6307\u5B9A\u9875\u9762\u3002Deeplink\u6280\u672F\u4E0D\u4EC5\u53EF\u4EE5\u5B9E\u73B0\u573A\u666F\u5FEB\u901F\u8FD8\u539F\uFF0C\u7F29\u77ED\u7528\u6237\u4F7F\u7528\u8DEF\u5F84\uFF0C\u66F4\u91CD\u8981\u7684\u662F\u80FD\u591F\u7528\u4E8EApp\u62C9\u65B0\u63A8\u5E7F\u573A\u666F\uFF0C\u964D\u4F4E\u7528\u6237\u6D41\u5931\u7387\u3002</p><ol><li>URL Scheme\u2014\u2014iOS9\u548C\u5B89\u53536\u4EE5\u524D</li></ol><p>\u5728iOS 9\u548C\u5B89\u53536\uFF08M\uFF09\u4E4B\u524D\uFF0C\u79FB\u52A8\u7AEF\u5B9E\u73B0Deeplink\u7684\u65B9\u5F0F\u90FD\u662F\u901A\u8FC7URL Scheme\u3002URL\uFF0C\u90FD\u5F88\u6E05\u695A\uFF0Cweixin://dl/moments\u5C31\u662F\u4E00\u4E2A URL\uFF0C\u4E5F\u53EB\u5B83\u94FE\u63A5\u6216\u7F51\u5740\uFF1BScheme\uFF0C\u8868\u793A\u7684\u662F\u4E00\u4E2A URL \u4E2D\u6700\u521D\u59CB\u7684\u4F4D\u7F6E\uFF0C\u5373 \u{1F615}/\u4E4B\u524D\u7684\u90A3\u6BB5\u5B57\u7B26\uFF0C\u4F8B\u5982\u8FD9\u4E2AURL\u4E2D\u7684Scheme\u5C31\u662Fweixin\u3002\u53EF\u4EE5\u7528Scheme\u6765\u5B9A\u4F4D\u5BF9\u5E94\u7684App\u3002\u4F8B\u5982\u6DD8\u5B9D\u7684Scheme\u5C31\u662Ftaobao\u3001\u652F\u4ED8\u5B9D\u7684Scheme\u5C31\u662Falipay\uFF0C\u65B0\u6D6A\u5FAE\u535A\u7684Scheme\u662Fsinaweibo\u3002</p><ol start="2"><li>URL Scheme \u534F\u8BAE\u683C\u5F0F</li></ol><p>\u4E00\u822C\u6765\u8BF4\u6574\u6BB5\u7684URL Scheme\u662F\u8FD9\u79CD\u7684\u5F62\u5F0F\uFF1AScheme://host:port/path?query=xxxxxxx\u3002\u5176\u4E2Dpath\u4EE3\u8868\u4E86\u60F3\u8981\u8DF3\u8F6C\u7684\u6307\u5B9A\u9875\u9762\uFF0C\u800Cquery\u4EE3\u8868\u4E86\u60F3\u8981\u4F20\u9012\u7684\u53C2\u6570\u3002</p><ol start="3"><li>URL Scheme\u7F3A\u70B9</li></ol><ul><li><p>\u53EA\u80FD\u901A\u8FC7\u56FA\u5B9A\u534F\u8BAE\u683C\u5F0F\u7684\u94FE\u63A5\u6765\u5B9E\u73B0\u8DF3\u8F6C\uFF0C\u800C\u4E14\u6253\u5F00H5\u9875\u9762\u65F6\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u63D0\u793A\u6846\uFF1A\u201C\u662F\u5426\u6253\u5F00XXX\u201D\u3002\u7528\u6237\u786E\u8BA4\u4E86\u624D\u4F1A\u8DF3\u8F6C\u5230App\u4E2D\uFF0C\u589E\u52A0\u4E86\u7528\u6237\u6D41\u7A0B</p></li><li><p>\u5FAE\u4FE1\u3001QQ\u7B49\u628AURL Scheme \u6253\u5F00App\u8FD9\u79CD\u65B9\u5F0F\u7ED9\u7981\u4E86\uFF0C\u4F46\u662F\u5B83\u4EEC\u90FD\u5404\u81EA\u7EF4\u62A4\u7740\u4E00\u4E2A\u767D\u540D\u5355\uFF0C\u5982\u679CScheme\u4E0D\u5728\u8BE5\u767D\u540D\u5355\u5185\uFF0C\u90A3\u4E48\u5C31\u4E0D\u80FD\u5728\u4ED6\u4EEC\u7684App\u5185\u6253\u5F00\u8FD9\u4E2AApp\uFF08\u5982\u679C\u88AB\u5C01\u9501\u4E86\u90A3\u4E48\u7528\u6237\u53EA\u80FD\u901A\u8FC7\u53F3\u4E0A\u89D2\u6D4F\u89C8\u5668\u5185\u6253\u5F00App\uFF09</p></li></ul>`,10);function s(t,l){return n}var i=e(a,[["render",s]]);export{i as default};
