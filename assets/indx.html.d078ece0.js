import{_ as t,a as d}from"./app.2fe08138.js";const r={},a=d('<h3 id="git\u9762\u8BD5\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#git\u9762\u8BD5\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> Git\u9762\u8BD5\u77E5\u8BC6\u70B9</h3><hr><h2 id="_1-git\u548Csvn\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1-git\u548Csvn\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> <strong>1. Git\u548CSVN\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</strong></h2><table><thead><tr><th>Git</th><th>SVN</th></tr></thead><tbody><tr><td>1. Git\u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u7684\u7248\u672C\u63A7\u5236\u5DE5\u5177</td><td>1. SVN \u662F\u96C6\u4E2D\u7248\u672C\u63A7\u5236\u5DE5\u5177</td></tr><tr><td>2.\u5B83\u5C5E\u4E8E\u7B2C3\u4EE3\u7248\u672C\u63A7\u5236\u5DE5\u5177</td><td>2.\u5B83\u5C5E\u4E8E\u7B2C2\u4EE3\u7248\u672C\u63A7\u5236\u5DE5\u5177</td></tr><tr><td>3.\u5BA2\u6237\u7AEF\u53EF\u4EE5\u5728\u5176\u672C\u5730\u7CFB\u7EDF\u4E0A\u514B\u9686\u6574\u4E2A\u5B58\u50A8\u5E93</td><td>3.\u7248\u672C\u5386\u53F2\u8BB0\u5F55\u5B58\u50A8\u5728\u670D\u52A1\u5668\u7AEF\u5B58\u50A8\u5E93\u4E2D</td></tr><tr><td>4.\u5373\u4F7F\u79BB\u7EBF\u4E5F\u53EF\u4EE5\u63D0\u4EA4</td><td>4.\u53EA\u5141\u8BB8\u5728\u7EBF\u63D0\u4EA4</td></tr><tr><td>5.Push/pull \u64CD\u4F5C\u66F4\u5FEB</td><td>5.Push/pull \u64CD\u4F5C\u8F83\u6162</td></tr><tr><td>6.\u5DE5\u7A0B\u53EF\u4EE5\u7528 commit \u81EA\u52A8\u5171\u4EAB</td><td>6.\u6CA1\u6709\u4EFB\u4F55\u4E1C\u897F\u81EA\u52A8\u5171\u4EAB</td></tr></tbody></table><h2 id="_2-\u4EC0\u4E48\u662Fgit" tabindex="-1"><a class="header-anchor" href="#_2-\u4EC0\u4E48\u662Fgit" aria-hidden="true">#</a> <strong>2. \u4EC0\u4E48\u662FGit\uFF1F</strong></h2><p>\u25CF\u3000Git \u662F\u5206\u5E03\u5F0F\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\uFF08DVCS\uFF09\u3002\u5B83\u53EF\u4EE5\u8DDF\u8E2A\u6587\u4EF6\u7684\u66F4\u6539\uFF0C\u5E76\u5141\u8BB8\u6062\u590D\u5230\u4EFB\u4F55\u7279\u5B9A\u7248\u672C\u7684\u66F4\u6539\u3002</p><p>\u25CF\u3000\u4E0E SVN \u7B49\u5176\u4ED6\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\uFF08VCS\uFF09\u76F8\u6BD4\uFF0C\u5176\u5206\u5E03\u5F0F\u67B6\u6784\u5177\u6709\u8BB8\u591A\u4F18\u52BF\uFF0C\u4E00\u4E2A\u4E3B\u8981\u4F18\u70B9\u662F\u5B83\u4E0D\u4F9D\u8D56\u4E8E\u4E2D\u592E\u670D\u52A1\u5668\u6765\u5B58\u50A8\u9879\u76EE\u6587\u4EF6\u7684\u6240\u6709\u7248\u672C\u3002</p><p>\u25CF\u3000\u8FD8\u6709\u4E00\u4E2A\u4E2D\u592E\u4E91\u5B58\u50A8\u5E93\uFF0C\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u5411\u5176\u63D0\u4EA4\u66F4\u6539\uFF0C\u5E76\u4E0E\u5176\u4ED6\u56E2\u961F\u6210\u5458\u8FDB\u884C\u5171\u4EAB\uFF0C\u5982\u56FE\u6240\u793A\uFF0C\u6240\u6709\u534F\u4F5C\u8005\u90FD\u5728\u63D0\u4EA4\u66F4\u6539\u201C\u8FDC\u7A0B\u5B58\u50A8\u5E93\u201D\u3002</p><p>\u25CF\u3000\u6BCF\u4E2A\u5F00\u53D1\u4EBA\u5458\u90FD\u53EF\u4EE5\u201C\u514B\u9686\u201D\u5728\u56FE\u4E2D\u7528\u201CLocal repository\u201D\u6807\u6CE8\u7684\u5B58\u50A8\u5E93\u7684\u526F\u672C\uFF0C\u5E76\u4E14\u5728\u4ED6\u7684\u786C\u76D8\u9A71\u52A8\u5668\u4E0A\u5177\u6709\u9879\u76EE\u7684\u5B8C\u6574\u5386\u53F2\u8BB0\u5F55\uFF0C\u56E0\u6B64\u5F53\u670D\u52A1\u5668\u4E2D\u65AD\u65F6\uFF0C\u9700\u8981\u7684\u6240\u6709\u6062\u590D\u6570\u636E\u90FD\u5728\u961F\u53CB\u7684\u672C\u5730 Git \u5B58\u50A8\u5E93\u4E2D\u3002</p><p>\u25CF\u3000\u8FD8\u6709\u4E00\u4E2A\u4E2D\u592E\u4E91\u5B58\u50A8\u5E93\uFF0C\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u5411\u5176\u63D0\u4EA4\u66F4\u6539\uFF0C\u5E76\u4E0E\u5176\u4ED6\u56E2\u961F\u6210\u5458\u8FDB\u884C\u5171\u4EAB\uFF0C\u5982\u56FE\u6240\u793A\uFF0C\u6240\u6709\u534F\u4F5C\u8005\u90FD\u5728\u63D0\u4EA4\u66F4\u6539\u201C\u8FDC\u7A0B\u5B58\u50A8\u5E93\u201D\u3002</p><p><img src="https://img.php.cn/upload/image/991/937/107/1578101551904065.jpg" alt="git\u6D41"></p><h2 id="_3-\u5728-git-\u4E2D\u63D0\u4EA4\u7684\u547D\u4EE4\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_3-\u5728-git-\u4E2D\u63D0\u4EA4\u7684\u547D\u4EE4\u662F\u4EC0\u4E48" aria-hidden="true">#</a> <strong>3. \u5728 Git \u4E2D\u63D0\u4EA4\u7684\u547D\u4EE4\u662F\u4EC0\u4E48\uFF1F</strong></h2><p><code>git commit -a</code></p><p>\u73B0\u5728\u89E3\u91CA\u4E00\u4E0B <code>-a</code> \u6807\u5FD7\uFF0C \u901A\u8FC7\u5728\u547D\u4EE4\u884C\u4E0A\u52A0 <code>-a</code> \u6307\u793A git \u63D0\u4EA4\u5DF2\u4FEE\u6539\u7684\u6240\u6709\u88AB\u8DDF\u8E2A\u6587\u4EF6\u7684\u65B0\u5185\u5BB9\u3002\u8FD8\u8981\u63D0\u4E00\u4E0B\uFF0C\u5982\u679C\u662F\u7B2C\u4E00\u6B21\u9700\u8981\u63D0\u4EA4\u65B0\u6587\u4EF6\uFF0C\u53EF\u4EE5\u5728\u5728 <code>git commit -a</code> \u4E4B\u524D\u5148 <code>git add</code> \u3002</p>',14);function e(i,h){return a}var c=t(r,[["render",e],["__file","indx.html.vue"]]);export{c as default};
