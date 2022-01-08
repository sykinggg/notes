import{r as i,o,c as l,a as e,b as r,F as c,e as d,d as t}from"./app.5ba8e4fa.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},h=d('<h1 id="\u7B2C18\u5929-\u4F60\u7406\u89E3\u7684-use-strict-\u662F\u4EC0\u4E48-\u4F7F\u7528\u5B83\u6709\u4EC0\u4E48\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7B2C18\u5929-\u4F60\u7406\u89E3\u7684-use-strict-\u662F\u4EC0\u4E48-\u4F7F\u7528\u5B83\u6709\u4EC0\u4E48\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> \u7B2C18\u5929 \u4F60\u7406\u89E3\u7684&quot;use strict&quot;;\u662F\u4EC0\u4E48?\u4F7F\u7528\u5B83\u6709\u4EC0\u4E48\u4F18\u7F3A\u70B9\uFF1F</h1><h2 id="use-strict-\u4E25\u683C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#use-strict-\u4E25\u683C\u6A21\u5F0F" aria-hidden="true">#</a> use strict\uFF1A\u4E25\u683C\u6A21\u5F0F</h2><h3 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E\uFF1A</h3><ol><li><p><code>\u4F7F\u8C03\u8BD5\u66F4\u52A0\u5BB9\u6613</code>\u3002\u90A3\u4E9B\u88AB\u5FFD\u7565\u6216\u9ED8\u9ED8\u5931\u8D25\u4E86\u7684\u4EE3\u7801\u9519\u8BEF\uFF0C\u4F1A\u4EA7\u751F\u9519\u8BEF\u6216\u629B\u51FA\u5F02\u5E38\uFF0C\u56E0\u6B64\u5C3D\u65E9\u63D0\u9192\u4F60\u4EE3\u7801\u4E2D\u7684\u95EE\u9898\uFF0C\u4F60\u624D\u80FD\u66F4\u5FEB\u5730\u6307\u5F15\u5230\u5B83\u4EEC\u7684\u6E90\u4EE3\u7801\u3002</p></li><li><p><code>\u53D8\u91CF\u5728\u8D4B\u503C\u4E4B\u524D\u5FC5\u987B\u58F0\u660E,\u9632\u6B62\u610F\u5916\u7684\u5168\u5C40\u53D8\u91CF</code>\u3002\u5982\u679C\u6CA1\u6709\u4E25\u683C\u6A21\u5F0F\uFF0C\u5C06\u503C\u5206\u914D\u7ED9\u4E00\u4E2A\u672A\u58F0\u660E\u7684\u53D8\u91CF\u4F1A\u81EA\u52A8\u521B\u5EFA\u8BE5\u540D\u79F0\u7684\u5168\u5C40\u53D8\u91CF\u3002\u8FD9\u662F JavaScript \u4E2D\u6700\u5E38\u89C1\u7684\u9519\u8BEF\u4E4B\u4E00\u3002\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u8FD9\u6837\u505A\u7684\u8BDD\u4F1A\u629B\u51FA\u9519\u8BEF\u3002</p></li><li><p><code>\u53D6\u6D88this\u503C\u7684\u5F3A\u5236\u8F6C\u6362</code>\u3002\u5982\u679C\u6CA1\u6709\u4E25\u683C\u6A21\u5F0F\uFF0C\u5F15\u7528 null \u6216\u672A\u5B9A\u4E49\u7684\u503C\u5230 this \u503C\u4F1A\u81EA\u52A8\u5F3A\u5236\u5230\u5168\u5C40\u53D8\u91CF\u3002\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u5F15\u7528 null \u6216\u672A\u5B9A\u4E49\u7684 this \u503C\u4F1A\u629B\u51FA\u9519\u8BEF\u3002\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C<code>\u5168\u5C40\u4E2D\u7684this \u662Fundefined \u4E0D\u662Fwindow</code></p></li><li><p><code>\u4E0D\u5141\u8BB8\u91CD\u590D\u7684\u5C5E\u6027\u540D\u79F0\u6216\u53C2\u6570\u503C</code>\u3002</p></li><li><p><code>\u4F7F eval() \u66F4\u5B89\u5168</code>\u3002\u5728\u4E25\u683C\u6A21\u5F0F\u548C\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C eval() \u7684\u884C\u4E3A\u65B9\u5F0F\u6709\u6240\u4E0D\u540C\u3002\u6700\u663E\u800C\u6613\u89C1\u7684\u662F\uFF0C\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u53D8\u91CF\u548C\u58F0\u660E\u5728 eval() \u8BED\u53E5\u5185\u90E8\u7684\u51FD\u6570\u4E0D\u4F1A\u5728\u5305\u542B\u8303\u56F4\u5185\u521B\u5EFA\uFF08\u5B83\u4EEC\u4F1A\u5728\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\u7684\u5305\u542B\u8303\u56F4\u4E2D\u88AB\u521B\u5EFA\uFF0C\u8FD9\u4E5F\u662F\u4E00\u4E2A\u5E38\u89C1\u7684\u95EE\u9898\u6E90\uFF09\u3002</p></li><li><p><code>\u5728 delete \u4F7F\u7528\u65E0\u6548\u65F6\u629B\u51FA\u9519\u8BEF\u3002</code> delete \u64CD\u4F5C\u7B26\uFF08\u7528\u4E8E\u4ECE\u5BF9\u8C61\u4E2D\u5220\u9664\u5C5E\u6027\uFF09\u4E0D\u80FD\u7528\u5728\u5BF9\u8C61\u4E0D\u53EF\u914D\u7F6E\u7684\u5C5E\u6027\u4E0A\u3002\u5F53\u8BD5\u56FE\u5220\u9664\u4E00\u4E2A\u4E0D\u53EF\u914D\u7F6E\u7684\u5C5E\u6027\u65F6\uFF0C\u975E\u4E25\u683C\u4EE3\u7801\u5C06\u9ED8\u9ED8\u5730\u5931\u8D25\uFF0C\u800C\u4E25\u683C\u6A21\u5F0F\u5C06\u5728\u8FD9\u6837\u7684\u60C5\u51B5\u4E0B\u629B\u51FA\u5F02\u5E38\u3002</p></li><li><p><code>\u4E25\u683C\u6A21\u5F0F\u53BB\u9664\u4E86with\u8BED\u53E5</code></p></li><li><p><code>\u4E0D\u80FD\u4FEE\u6539arguments \uFF0C\u4E0D\u80FD\u5728\u51FD\u6570\u5185\u5B9A\u4E49arguments\u53D8\u91CF \uFF0C\u4E0D\u80FD\u4F7F\u7528arugment.caller\u548Cargument.callee\u3002</code>\u56E0\u6B64\u5982\u679C\u4F60\u8981\u5F15\u7528\u533F\u540D\u51FD\u6570\uFF0C\u9700\u8981\u5BF9\u533F\u540D</p></li></ol><p>\u51FD\u6570\u547D\u540D</p><h3 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> \u4F18\u70B9\uFF1A</h3><ol><li><p>\u6D88\u9664 Javascript \u8BED\u6CD5\u7684\u4E00\u4E9B\u4E0D\u5408\u7406\u3001\u4E0D\u4E25\u8C28\u4E4B\u5904\uFF0C\u51CF\u5C11\u4E00\u4E9B\u602A\u5F02\u884C\u4E3A;</p></li><li><p>\u6D88\u9664\u4EE3\u7801\u8FD0\u884C\u7684\u4E00\u4E9B\u4E0D\u5B89\u5168\u4E4B\u5904\uFF0C\u4FDD\u8BC1\u4EE3\u7801\u8FD0\u884C\u7684\u5B89\u5168\uFF1B</p></li><li><p>\u63D0\u9AD8\u7F16\u8BD1\u5668\u6548\u7387\uFF0C\u589E\u52A0\u8FD0\u884C\u901F\u5EA6\uFF1B</p></li><li><p>\u4E3A\u672A\u6765\u65B0\u7248\u672C\u7684 Javascript \u505A\u597D\u94FA\u57AB\u3002</p></li></ol><h3 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> \u7F3A\u70B9\uFF1A</h3><ul><li>\u73B0\u5728\u7F51\u7AD9\u7684 JS \u90FD\u4F1A\u8FDB\u884C\u538B\u7F29\uFF0C\u4E00\u4E9B\u6587\u4EF6\u7528\u4E86\u4E25\u683C\u6A21\u5F0F\uFF0C\u800C\u53E6\u4E00\u4E9B\u6CA1\u6709\u3002\u8FD9\u65F6\u8FD9\u4E9B\u672C\u6765\u662F\u4E25\u683C\u6A21\u5F0F\u7684\u6587\u4EF6\uFF0C\u88AB merge \u540E\uFF0C\u8FD9\u4E2A\u4E32\u5C31\u5230\u4E86\u6587\u4EF6\u7684\u4E2D\u95F4\uFF0C\u4E0D\u4EC5\u6CA1\u6709\u6307\u793A\u4E25\u683C\u6A21\u5F0F\uFF0C\u53CD\u800C\u5728\u538B\u7F29\u540E\u6D6A\u8D39\u4E86\u5B57\u8282\u3002</li></ul>',9),p={href:"/mozillajs/reference/strictMode.md",target:"_blank",rel:"noopener noreferrer"},u=t("mozilla-\u4E25\u683C\u6A21\u5F0F"),_={href:"http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html",target:"_blank",rel:"noopener noreferrer"},m=t("\u962E\u4E00\u5CF0-\u4E25\u683C\u6A21\u5F0F");function f(x,g){const a=i("ExternalLinkIcon");return o(),l(c,null,[h,e("p",null,[e("a",p,[u,r(a)])]),e("p",null,[e("a",_,[m,r(a)])])],64)}var w=n(s,[["render",f]]);export{w as default};
