import{_ as c,r as i,o as p,c as r,b as a,d,F as l,a as n,e as o}from"./app.adb48220.js";const t={},u=n(`<h1 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h1><h2 id="\u7C7B\u4F3C-github-\u7684-star" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u4F3C-github-\u7684-star" aria-hidden="true">#</a> \u7C7B\u4F3C github \u7684 star</h2><h3 id="\u589E\u52A0" tabindex="-1"><a class="header-anchor" href="#\u589E\u52A0" aria-hidden="true">#</a> \u589E\u52A0</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> star <span class="token punctuation">[</span>package-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u53D6\u6D88" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88" aria-hidden="true">#</a> \u53D6\u6D88</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> unstar <span class="token punctuation">[</span>package-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B" aria-hidden="true">#</a> \u67E5\u770B</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> stars
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u767B\u5F55npm" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55npm" aria-hidden="true">#</a> \u767B\u5F55npm</h2><blockquote><p>\u63A8\u8350\u4F7F\u7528 yrm \u955C\u50CF\u6E90\u7BA1\u7406</p></blockquote><h3 id="\u624B\u52A8-npm-\u5207\u6362\u4E3A\u9ED8\u8BA4\u6E90" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8-npm-\u5207\u6362\u4E3A\u9ED8\u8BA4\u6E90" aria-hidden="true">#</a> \u624B\u52A8 npm \u5207\u6362\u4E3A\u9ED8\u8BA4\u6E90</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55" aria-hidden="true">#</a> \u767B\u5F55</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> adduser
<span class="token comment"># or</span>
<span class="token function">npm</span> login
<span class="token comment"># login\u662Fadduser\u7684\u4E00\u4E2A\u522B\u540D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u67E5\u770B\u5F53\u524D-npm-\u7684\u767B\u9646\u4EBA" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5F53\u524D-npm-\u7684\u767B\u9646\u4EBA" aria-hidden="true">#</a> \u67E5\u770B\u5F53\u524D npm \u7684\u767B\u9646\u4EBA</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">whoami</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u67E5\u770B\u67D0\u4E2A\u5305\u7684\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u67D0\u4E2A\u5305\u7684\u6587\u6863" aria-hidden="true">#</a> \u67E5\u770B\u67D0\u4E2A\u5305\u7684\u6587\u6863</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6B64\u547D\u4EE4\u4F1A\u5C1D\u8BD5\u731C\u6D4B\u5305\u6587\u6863 URL \u7684\u53EF\u80FD\u4F4D\u7F6E\uFF0C\u4E00\u822C\u6CA1\u6709\u81EA\u5B9A\u4E49\u7684\u8BDD\uFF0C\u5C31\u4F1A\u6253\u5F00\u5305\u7684github\u5730\u5740\u3002</span>
<span class="token function">npm</span> docs <span class="token punctuation">[</span>package-name<span class="token punctuation">]</span>
<span class="token comment"># or</span>
<span class="token function">npm</span> home <span class="token punctuation">[</span>package-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u4E3E\u4E2A\u6817\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4E3E\u4E2A\u6817\u5B50" aria-hidden="true">#</a> \u4E3E\u4E2A\u6817\u5B50</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> docs lodash
<span class="token comment"># or</span>
<span class="token function">npm</span> home lodash
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>npm docs</code>\u6216\u8005<code>npm home</code>\u547D\u4EE4\u5728\u4E0D\u63A5\u53C2\u6570\u65F6\uFF0C\u4F1A\u5728\u5F53\u524D\u9879\u76EE\u4E2D\uFF0C\u901A\u8FC7 <code>package.json</code> \u6587\u4EF6\u4E2D\u7684<code>homepage</code>\u914D\u7F6E\uFF0C\u6765\u6253\u5F00\u5BF9\u5E94\u7684\u5730\u5740\u3002</p>`,21),h=["src"],b=n("\u5176\u539F\u7406\u5C31\u662F\uFF1A\u5F53\u4F60\u8981\u67E5\u770B\u7684\u9879\u76EE\u4E2D\u7684 <code>package.json</code> \u6587\u4EF6\u4E2D\uFF0C\u8BBE\u7F6E\u4E86<code>homepage</code>\u5C5E\u6027\uFF0C\u901A\u8FC7<code>npm docs/home</code>\u5C31\u80FD\u6253\u5F00\u5BF9\u5E94\u7684\u4E3B\u9875\uFF0C\u6CA1\u6709\u8BBE\u7F6E<code>homepage</code>\u5C5E\u6027\u65F6\uFF0Cnpm \u4F1A\u7EE7\u7EED\u5BFB\u627E\u5176\u4E2D\u7684<code>repository</code>\u5C5E\u6027\uFF0C\u8FD9\u65F6\u5019\u6253\u5F00\u7684\u5C31\u662F\u9879\u76EE\u5728 <code>github</code> \u4E2D\u7684\u6258\u7BA1\u5730\u5740 <code>url</code> npm \u5B98\u7F51\u4E2D\u5305\u7684\u6240\u5728\u5730\u5740\uFF0C\uFF08\u4F8B\u5982\uFF1A",15),m={href:"https://www.npmjs.com/package/npm",target:"_blank",rel:"noopener noreferrer"},g=o("www.npmjs.com/package/npm\u2026"),k=n(`<h2 id="\u67E5\u770B\u67D0\u4E2A\u5305\u7684\u4EE3\u7801\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u67D0\u4E2A\u5305\u7684\u4EE3\u7801\u4ED3\u5E93" aria-hidden="true">#</a> \u67E5\u770B\u67D0\u4E2A\u5305\u7684\u4EE3\u7801\u4ED3\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6B64\u547D\u4EE4\u5C1D\u8BD5\u731C\u6D4B\u5305\u7684\u5B58\u50A8\u5E93 URL \u7684\u53EF\u80FD\u4F4D\u7F6E</span>
<span class="token function">npm</span> repo <span class="token punctuation">[</span>package-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>\u5B83\u662F\u6839\u636E\u9879\u76EE\u4E2D\u7684 <code>package.json</code> \u6587\u4EF6\u4E2D\uFF0C\u8BBE\u7F6E\u7684<code>repository</code>\u5C5E\u6027\uFF0C\u6765\u6253\u5F00\u5BF9\u5E94\u7684 <code>url</code>\u3002</p></blockquote><h2 id="\u5FEB\u901F\u7ED9\u4E00\u4E2A\u5305\u63D0-issues" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u7ED9\u4E00\u4E2A\u5305\u63D0-issues" aria-hidden="true">#</a> \u5FEB\u901F\u7ED9\u4E00\u4E2A\u5305\u63D0 issues</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> bugs <span class="token punctuation">[</span>package-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5B83\u662F\u6839\u636E\u9879\u76EE\u4E2D\u7684 <code>package.json</code> \u6587\u4EF6\u4E2D\uFF0C\u8BBE\u7F6E\u7684<code>bugs</code>\u5C5E\u6027\uFF0C\u6765\u6253\u5F00\u5BF9\u5E94\u7684 url\u3002</p><h2 id="\u67E5\u770B\u67D0\u4E2A\u5305\u7684\u8BE6\u7EC6\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u67D0\u4E2A\u5305\u7684\u8BE6\u7EC6\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u67D0\u4E2A\u5305\u7684\u8BE6\u7EC6\u4FE1\u606F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">v</span> <span class="token punctuation">[</span>package-name<span class="token punctuation">]</span>
<span class="token comment"># or</span>
<span class="token function">npm</span> view <span class="token punctuation">[</span>package-name<span class="token punctuation">]</span>
<span class="token function">npm</span> info <span class="token punctuation">[</span>package-name<span class="token punctuation">]</span>
<span class="token function">npm</span> show <span class="token punctuation">[</span>package-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u67E5\u770B\u67D0\u4E2A\u5305\u7684\u6240\u6709\u5386\u53F2\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u67D0\u4E2A\u5305\u7684\u6240\u6709\u5386\u53F2\u7248\u672C" aria-hidden="true">#</a> \u67E5\u770B\u67D0\u4E2A\u5305\u7684\u6240\u6709\u5386\u53F2\u7248\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">v</span> <span class="token punctuation">[</span>package-name<span class="token punctuation">]</span> versions
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u672C\u5730\u5F00\u53D1\u7684-npm-\u5305\u5982\u4F55\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u5F00\u53D1\u7684-npm-\u5305\u5982\u4F55\u8C03\u8BD5" aria-hidden="true">#</a> \u672C\u5730\u5F00\u53D1\u7684 npm \u5305\u5982\u4F55\u8C03\u8BD5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token builtin class-name">.</span> -g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u67D0\u4E2A\u9879\u76EE\u4E2D\u5B89\u88C5\u672C\u5730\u5305</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token punctuation">..</span>/Path/xxPackageName
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>\u4E5F\u53EF\u4EE5\u505A\u4E00\u4E2A\u8F6F\u94FE\u6307\u5411\u5F53\u524D\u9700\u8981\u8C03\u8BD5\u7684\u9879\u76EE(\u5168\u5C40)</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">link</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u5C06\u8C03\u8BD5\u5305\u94FE\u63A5\u5230\u5F53\u524D\u9879\u76EE\u4E2D\uFF08\u5148\u505A\u4E00\u4E2A\u8F6F\u94FE\u6307\u5411\u5F53\u524D\u9700\u8981\u8C03\u8BD5\u7684\u9879\u76EE\uFF09</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5148\u5728\u672C\u5730\u5F00\u53D1\u7684 npm \u5305\u4E2D\u6267\u884C\u{1F447}</span>
<span class="token function">npm</span> <span class="token function">link</span>
<span class="token comment"># \u7136\u540E\u5207\u6362\u5230\u4F60\u8981\u5B89\u88C5\u672C\u5730\u8C03\u8BD5\u5305\u7684\u9879\u76EE\u4E2D\uFF0C\u6267\u884C\u{1F447}\uFF0C\u5373\u53EF\u5C06\u672C\u5730\u5305\u5B89\u88C5\u5230\u9879\u76EE\u4F9D\u8D56\u4E2D</span>
<span class="token function">npm</span> <span class="token function">link</span> <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span>

<span class="token comment"># \u9879\u76EE\u4E2D\u53D6\u6D88\u5B89\u88C5\u672C\u5730\u7684\u8C03\u8BD5\u5305\u{1F447}</span>
<span class="token function">npm</span> unlink <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="npm-\u53D1\u5E03\u5305" tabindex="-1"><a class="header-anchor" href="#npm-\u53D1\u5E03\u5305" aria-hidden="true">#</a> npm \u53D1\u5E03\u5305</h2><blockquote><p>\u6CE8\u610F:\u4F7F\u7528\u6DD8\u5B9D\u6E90\u4F1A\u62A5\u9519\uFF0C\u8981\u6539\u56DE\u9ED8\u8BA4\u6E90</p></blockquote><h3 id="\u4FEE\u6539\u4E0B\u7248\u672C\u53F7" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u4E0B\u7248\u672C\u53F7" aria-hidden="true">#</a> \u4FEE\u6539\u4E0B\u7248\u672C\u53F7</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> version <span class="token punctuation">[</span>\u7248\u672C\u53F7<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u5F53\u524D\u76EE\u5F55\u6267\u884Cnpm-publish" tabindex="-1"><a class="header-anchor" href="#\u5F53\u524D\u76EE\u5F55\u6267\u884Cnpm-publish" aria-hidden="true">#</a> \u5F53\u524D\u76EE\u5F55\u6267\u884Cnpm publish</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> publish
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u5F03\u7528\u5305\u7684\u76F8\u5173\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5F03\u7528\u5305\u7684\u76F8\u5173\u64CD\u4F5C" aria-hidden="true">#</a> \u5F03\u7528\u5305\u7684\u76F8\u5173\u64CD\u4F5C</h2><blockquote><p>\u6CE8\u610F\uFF1A\u5F3A\u70C8\u5EFA\u8BAE\u5F03\u7528\u5305\u6216\u5305\u7248\u672C\u800C\u4E0D\u662F\u53D6\u6D88\u53D1\u5E03\u5B83\u4EEC\uFF0C\u56E0\u4E3A\u53D6\u6D88\u53D1\u5E03\u4F1A\u4ECE\u6CE8\u518C\u8868\u4E2D\u5B8C\u5168\u5220\u9664\u4E00\u4E2A\u5305\uFF0C\u8FD9\u610F\u5473\u7740\u4EFB\u4F55\u4F9D\u8D56\u5B83\u7684\u4EBA\u90FD\u5C06\u65E0\u6CD5\u518D\u4F7F\u7528\u5B83\uFF0C\u800C\u4E0D\u4F1A\u53D1\u51FA\u8B66\u544A\u3002</p></blockquote><h3 id="\u5F03\u7528\u6574\u4E2A\u5305" tabindex="-1"><a class="header-anchor" href="#\u5F03\u7528\u6574\u4E2A\u5305" aria-hidden="true">#</a> \u5F03\u7528\u6574\u4E2A\u5305</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> deprecate package-name <span class="token string">&quot;\u5F03\u7528\u4FE1\u606F&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u5F03\u7528\u5305\u7684\u5355\u4E2A\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u5F03\u7528\u5305\u7684\u5355\u4E2A\u7248\u672C" aria-hidden="true">#</a> \u5F03\u7528\u5305\u7684\u5355\u4E2A\u7248\u672C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> deprecate package-name@version <span class="token string">&quot;\u5F03\u7528\u4FE1\u606F&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u53D6\u6D88\u5F03\u7528\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88\u5F03\u7528\u64CD\u4F5C" aria-hidden="true">#</a> \u53D6\u6D88\u5F03\u7528\u64CD\u4F5C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06\u5F03\u7528\u6D88\u606F\u6539\u4E3A\u7A7A\u5B57\u7B26\u4E32\u5373\u53EF</span>
<span class="token function">npm</span> deprecate package-name <span class="token string">&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u53D6\u6D88\u53D1\u5E03\u6574\u4E2A\u5305" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88\u53D1\u5E03\u6574\u4E2A\u5305" aria-hidden="true">#</a> \u53D6\u6D88\u53D1\u5E03\u6574\u4E2A\u5305</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> unpublish <span class="token punctuation">[</span>package-name<span class="token punctuation">]</span> -f
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u53D6\u6D88\u53D1\u5E03\u5305\u7684\u6307\u5B9A\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88\u53D1\u5E03\u5305\u7684\u6307\u5B9A\u7248\u672C" aria-hidden="true">#</a> \u53D6\u6D88\u53D1\u5E03\u5305\u7684\u6307\u5B9A\u7248\u672C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> unpublish <span class="token punctuation">[</span>package-name<span class="token punctuation">]</span>@<span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E00\u4E9B\u597D\u7528\u7684\u5176\u4ED6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u597D\u7528\u7684\u5176\u4ED6\u64CD\u4F5C" aria-hidden="true">#</a> \u4E00\u4E9B\u597D\u7528\u7684\u5176\u4ED6\u64CD\u4F5C</h2><h3 id="\u5305\u7684\u91CD\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u5305\u7684\u91CD\u547D\u540D" aria-hidden="true">#</a> \u5305\u7684\u91CD\u547D\u540D</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \uFF08\u91CD\u547D\u540D\u5305\u7684\u552F\u4E00\u65B9\u6CD5\u662F\u4EE5\u65B0\u540D\u79F0\u91CD\u65B0\u53D1\u5E03\u5B83\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u67E5\u770B\u5F53\u524D\u9879\u76EE\u4E2D\u6709\u54EA\u4E9B\u5305\u8FC7\u65F6\u4E86" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5F53\u524D\u9879\u76EE\u4E2D\u6709\u54EA\u4E9B\u5305\u8FC7\u65F6\u4E86" aria-hidden="true">#</a> \u67E5\u770B\u5F53\u524D\u9879\u76EE\u4E2D\u6709\u54EA\u4E9B\u5305\u8FC7\u65F6\u4E86</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> outdated
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u67E5\u770B\u672C\u5730\u5168\u5C40\u73AF\u5883\u7684\u5305\u6709\u54EA\u4E9B\u8FC7\u65F6\u4E86" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u672C\u5730\u5168\u5C40\u73AF\u5883\u7684\u5305\u6709\u54EA\u4E9B\u8FC7\u65F6\u4E86" aria-hidden="true">#</a> \u67E5\u770B\u672C\u5730\u5168\u5C40\u73AF\u5883\u7684\u5305\u6709\u54EA\u4E9B\u8FC7\u65F6\u4E86</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> outdated -g --depth<span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u5217\u51FA-node-modules-\u4E2D\u7684\u6240\u6709\u5305" tabindex="-1"><a class="header-anchor" href="#\u5217\u51FA-node-modules-\u4E2D\u7684\u6240\u6709\u5305" aria-hidden="true">#</a> \u5217\u51FA node_modules \u4E2D\u7684\u6240\u6709\u5305</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> node_modules
<span class="token comment"># or</span>
<span class="token function">dir</span> node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5BA1\u8BA1\u9879\u76EE\u4E2D\u6240\u6709\u5305\u7684\u5B89\u5168\u6F0F\u6D1E" tabindex="-1"><a class="header-anchor" href="#\u5BA1\u8BA1\u9879\u76EE\u4E2D\u6240\u6709\u5305\u7684\u5B89\u5168\u6F0F\u6D1E" aria-hidden="true">#</a> \u5BA1\u8BA1\u9879\u76EE\u4E2D\u6240\u6709\u5305\u7684\u5B89\u5168\u6F0F\u6D1E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> audit
<span class="token comment"># \u8FD9\u4E2A\u547D\u4EE4\u4F9D\u8D56 package-lock.json \u6587\u4EF6,\u6240\u4EE5\u5982\u679C\u4F60\u7528\u7684\u662Fyarn\u9700\u8981\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4</span>
<span class="token function">yarn</span> audit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>\u6267\u884C\u540E\u4F1A\u5217\u51FA\u6709\u95EE\u9898\u7684\u5305</p></blockquote><table><thead><tr><th>hahh</th><th>hah</th></tr></thead><tbody><tr><td>Critical</td><td>\u9700\u8981\u7ACB\u5373\u89E3\u51B3\u7684!</td></tr><tr><td>High</td><td>\u9700\u8981\u5C3D\u5FEB\u89E3\u51B3!</td></tr><tr><td>Moderate</td><td>\u5728\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\u89E3\u51B3</td></tr><tr><td>Low</td><td>\u4E0D\u614C\u4E0D\u71E5\u4E0D\u6025\u4E0D\u5FD9</td></tr></tbody></table><blockquote><p>\u62A5\u544A\u4E2D\u4F1A\u7ED9\u51FA\u5B83\u95EE\u9898\u7684\u4E25\u91CD\u6027,\u4F60\u5C31\u53EF\u4EE5\u6839\u636E\u5177\u4F53\u60C5\u51B5\u6765\u8FDB\u884C\u7248\u672C\u66F4\u65B0\u6216\u662F\u8C03\u6574\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> token list
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u68C0\u6D4B\u4E00\u4E0B\u5F53\u524D\u955C\u50CF\u6E90\u7684\u5EF6\u8FDF" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u4E00\u4E0B\u5F53\u524D\u955C\u50CF\u6E90\u7684\u5EF6\u8FDF" aria-hidden="true">#</a> \u68C0\u6D4B\u4E00\u4E0B\u5F53\u524D\u955C\u50CF\u6E90\u7684\u5EF6\u8FDF</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">ping</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u68C0\u6D4B\u5F53\u524D-node-\u548C-npm-\u5B58\u5728\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u5F53\u524D-node-\u548C-npm-\u5B58\u5728\u7684\u95EE\u9898" aria-hidden="true">#</a> \u68C0\u6D4B\u5F53\u524D node \u548C npm \u5B58\u5728\u7684\u95EE\u9898</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> doctor
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,54);function v(s,f){const e=i("ExternalLinkIcon");return p(),r(l,null,[u,a("img",{src:s.$withBase("/assets/npm/0cd80a0991274197ae71d518f39cc59f_tplv-k3u1fbpfcp-zoom-in-crop-mark_1304_0_0_0.awebp"),alt:"demo"},null,8,h),a("p",null,[b,a("a",m,[g,d(e)])]),k],64)}var _=c(t,[["render",v],["__file","commonlyUsed.html.vue"]]);export{_ as default};
