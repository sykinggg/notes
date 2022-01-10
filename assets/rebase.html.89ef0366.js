import{o as c,c as o,b as e,F as n,e as a,a as t}from"./app.27c025c0.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const l={},d=e("h1",{id:"git-rebase",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-rebase","aria-hidden":"true"},"#"),a(" git rebase")],-1),p=e("blockquote",null,[e("p",null,"\u524D\u63D0\uFF1A\u4E0D\u8981\u901A\u8FC7rebase\u5BF9\u4EFB\u4F55\u5DF2\u7ECF\u63D0\u4EA4\u5230\u516C\u5171\u4ED3\u5E93\u4E2D\u7684commit\u8FDB\u884C\u4FEE\u6539")],-1),r=e("h2",{id:"\u5408\u5E76\u591A\u4E2Acommit\u4E3A\u4E00\u4E2A\u5B8C\u6574commit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5408\u5E76\u591A\u4E2Acommit\u4E3A\u4E00\u4E2A\u5B8C\u6574commit","aria-hidden":"true"},"#"),a(" \u5408\u5E76\u591A\u4E2Acommit\u4E3A\u4E00\u4E2A\u5B8C\u6574commit")],-1),m=e("p",null,"\u5F53\u5728\u672C\u5730\u4ED3\u5E93\u4E2D\u63D0\u4EA4\u4E86\u591A\u6B21\uFF0C\u5728\u628A\u672C\u5730\u63D0\u4EA4push\u5230\u516C\u5171\u4ED3\u5E93\u4E2D\u4E4B\u524D\uFF0C\u4E3A\u4E86\u8BA9\u63D0\u4EA4\u8BB0\u5F55\u66F4\u7B80\u6D01\u660E\u4E86\uFF0C\u5E0C\u671B\u628A\u5982\u4E0B\u5206\u652FB\u3001C\u3001D\u4E09\u4E2A\u63D0\u4EA4\u8BB0\u5F55\u5408\u5E76\u4E3A\u4E00\u4E2A\u5B8C\u6574\u7684\u63D0\u4EA4\uFF0C\u7136\u540E\u518Dpush\u5230\u516C\u5171\u4ED3\u5E93\u3002",-1),u=["src"],b=e("p",null,"\u73B0\u5728\u5728\u6D4B\u8BD5\u5206\u652F\u4E0A\u6DFB\u52A0\u4E86\u56DB\u6B21\u63D0\u4EA4\uFF0C\u7684\u76EE\u6807\u662F\u628A\u6700\u540E\u4E09\u4E2A\u63D0\u4EA4\u5408\u5E76\u4E3A\u4E00\u4E2A\u63D0\u4EA4\uFF1A",-1),h=["src"],g=t(`<p>\u8FD9\u91CC\u4F7F\u7528\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> rebase -i  <span class="token punctuation">[</span>startpoint<span class="token punctuation">]</span>  <span class="token punctuation">[</span>endpoint<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5176\u4E2D<code>-i</code>\u7684\u610F\u601D\u662F<code>--interactive</code>\uFF0C\u5373\u5F39\u51FA\u4EA4\u4E92\u5F0F\u7684\u754C\u9762\u8BA9\u7528\u6237\u7F16\u8F91\u5B8C\u6210\u5408\u5E76\u64CD\u4F5C\uFF0C<code>[startpoint]</code> <code>[endpoint]</code>\u5219\u6307\u5B9A\u4E86\u4E00\u4E2A\u7F16\u8F91\u533A\u95F4\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A<code>[endpoint]</code>\uFF0C\u5219\u8BE5\u533A\u95F4\u7684\u7EC8\u70B9\u9ED8\u8BA4\u662F\u5F53\u524D\u5206\u652F<code>HEAD</code>\u6240\u6307\u5411\u7684<code>commit</code>(\u6CE8\uFF1A\u8BE5\u533A\u95F4\u6307\u5B9A\u7684\u662F\u4E00\u4E2A\u524D\u5F00\u540E\u95ED\u7684\u533A\u95F4)\u3002</p><p>\u5728\u67E5\u770B\u5230\u4E86log\u65E5\u5FD7\u540E\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> rebase -i 36224db
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6216:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> rebase -i HEAD~3 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u4F1A\u770B\u5230\u5982\u4E0B\u754C\u9762:</p>`,8),_=["src"],f=t("<p>\u4E0A\u9762\u672A\u88AB\u6CE8\u91CA\u7684\u90E8\u5206\u5217\u51FA\u7684\u662F\u672C\u6B21rebase\u64CD\u4F5C\u5305\u542B\u7684\u6240\u6709\u63D0\u4EA4\uFF0C\u4E0B\u9762\u6CE8\u91CA\u90E8\u5206\u662Fgit\u4E3A\u63D0\u4F9B\u7684\u547D\u4EE4\u8BF4\u660E\u3002\u6BCF\u4E00\u4E2A<code>commit id</code> \u524D\u9762\u7684<code>pick</code>\u8868\u793A\u6307\u4EE4\u7C7B\u578B\uFF0C<code>git</code> \u4E3A\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u51E0\u4E2A\u547D\u4EE4:</p><ul><li><p>p\uFF0C\u9009\u62E9<code>&lt;commit&gt;</code> =\u4F7F\u7528\u63D0\u4EA4</p></li><li><p>r\uFF0C\u6539\u5199<code>&lt;commit&gt;</code> =\u4F7F\u7528\u63D0\u4EA4\uFF0C\u4F46\u7F16\u8F91\u63D0\u4EA4\u6D88\u606F</p></li><li><p>e\uFF0C\u7F16\u8F91<code>&lt;commit&gt;</code> =\u4F7F\u7528\u63D0\u4EA4\uFF0C\u4F46\u505C\u6B62\u8FDB\u884C\u4FEE\u6539</p></li><li><p>s\uFF0Csquash <code>&lt;commit&gt;</code> =\u4F7F\u7528\u63D0\u4EA4\uFF0C\u4F46\u53EF\u4EE5\u5408\u5E76\u5230\u5148\u524D\u7684\u63D0\u4EA4\u4E2D</p></li><li><p>f\uFF0Cfixup <code>&lt;commit&gt;</code> =\u7C7B\u4F3C\u4E8E\u201C squash\u201D\uFF0C\u4F46\u4E22\u5F03\u6B64\u63D0\u4EA4\u7684\u65E5\u5FD7\u6D88\u606F</p></li><li><p>x\uFF0Cexec &lt;\u547D\u4EE4&gt; =\u4F7F\u7528shell\u8FD0\u884C\u547D\u4EE4\uFF08\u8BE5\u884C\u7684\u5176\u4F59\u90E8\u5206\uFF09</p></li><li><p>b\uFF0Cbreak =\u5728\u8FD9\u91CC\u505C\u6B62\uFF08\u7A0D\u540E\u7EE7\u7EED\u4F7F\u7528&#39;git rebase --continue&#39;\u8FDB\u884C\u91CD\u65B0\u8BBE\u7F6E\uFF09</p></li><li><p>d\uFF0C\u5220\u9664<code>&lt;commit&gt;</code> =\u5220\u9664\u63D0\u4EA4</p></li><li><p>l\uFF0Clabel <code>&lt;label&gt;</code> =\u7528\u540D\u79F0\u6807\u8BB0\u5F53\u524DHEAD</p></li><li><p>t\uFF0C\u91CD\u7F6E<code>&lt;label&gt;</code> =\u5C06HEAD\u91CD\u7F6E\u4E3A\u6807\u7B7E</p></li><li><p>m\uFF0C\u5408\u5E76<code>[-C &lt;commit&gt; | -c &lt;commit&gt;] &lt;label&gt; [\uFF03&lt;oneline&gt;]</code></p><ul><li><p>\u4F7F\u7528\u539F\u59CB\u5408\u5E76\u63D0\u4EA4\u7684\u521B\u5EFA\u5408\u5E76\u63D0\u4EA4</p></li><li><p>\u6D88\u606F\uFF08\u5982\u679C\u6CA1\u6709\u539F\u59CB\u5408\u5E76\u63D0\u4EA4\uFF0C\u5219\u8FD4\u56DE\u5355\u884C\uFF09</p></li><li><p>\u6307\u5B9A\u7684\uFF09\u3002 \u4F7F\u7528-c <code>&lt;commit&gt;</code>\u6539\u5199\u63D0\u4EA4\u6D88\u606F\u3002</p></li></ul></li></ul><p>\u8FD9\u4E9B\u884C\u53EF\u4EE5\u91CD\u65B0\u6392\u5E8F\uFF1B \u5B83\u4EEC\u4ECE\u4E0A\u5230\u4E0B\u6267\u884C\u3002 \u5982\u679C\u60A8\u5728\u6B64\u5904\u5220\u9664\u4E00\u884C\uFF0C\u90A3\u5C06\u4E22\u5931\u3002 \u4F46\u662F\uFF0C\u5982\u679C\u5220\u9664\u6240\u6709\u5185\u5BB9\uFF0C\u5219\u91CD\u65B0\u5B9A\u4F4D\u5C06\u4E2D\u6B62\u3002</p><p>\u6839\u636E\u7684\u9700\u6C42\uFF0C\u5C06commit\u5185\u5BB9\u7F16\u8F91\u5982\u4E0B:</p>",4),v=["src"],w=e("p",null,"\u7136\u540E\u662F\u6CE8\u91CA\u4FEE\u6539\u754C\u9762:",-1),k=["src"],B=e("p",null,"\u7F16\u8F91\u5B8C\u4FDD\u5B58\u5373\u53EF\u5B8C\u6210commit\u7684\u5408\u5E76\u4E86\uFF1A",-1),$=["src"],E=e("h2",{id:"_2-\u5C06\u67D0\u4E00\u6BB5commit\u7C98\u8D34\u5230\u53E6\u4E00\u4E2A\u5206\u652F\u4E0A",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-\u5C06\u67D0\u4E00\u6BB5commit\u7C98\u8D34\u5230\u53E6\u4E00\u4E2A\u5206\u652F\u4E0A","aria-hidden":"true"},"#"),a(" 2.\u5C06\u67D0\u4E00\u6BB5commit\u7C98\u8D34\u5230\u53E6\u4E00\u4E2A\u5206\u652F\u4E0A")],-1),D=e("p",null,"\u5F53\u9879\u76EE\u4E2D\u5B58\u5728\u591A\u4E2A\u5206\u652F\uFF0C\u6709\u65F6\u5019\u9700\u8981\u5C06\u67D0\u4E00\u4E2A\u5206\u652F\u4E2D\u7684\u4E00\u6BB5\u63D0\u4EA4\u540C\u65F6\u5E94\u7528\u5230\u5176\u4ED6\u5206\u652F\u4E2D\uFF0C\u5C31\u50CF\u4E0B\u56FE\uFF1A",-1),A=["src"],C=t("<p>\u5E0C\u671B\u5C06<code>develop</code>\u5206\u652F\u4E2D\u7684C~E\u90E8\u5206\u590D\u5236\u5230<code>master</code>\u5206\u652F\u4E2D\uFF0C\u8FD9\u65F6\u5C31\u53EF\u4EE5\u901A\u8FC7<code>rebase</code>\u547D\u4EE4\u6765\u5B9E\u73B0\uFF08\u5982\u679C\u53EA\u662F\u590D\u5236\u67D0\u4E00\u4E24\u4E2A\u63D0\u4EA4\u5230\u5176\u4ED6\u5206\u652F\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u66F4\u7B80\u5355\u7684\u547D\u4EE4:<code>git cherry-pick</code>\uFF09\u3002</p><p>\u5728\u5B9E\u9645\u6A21\u62DF\u4E2D\uFF0C\u521B\u5EFA\u4E86<code>master</code>\u548C<code>develop</code>\u4E24\u4E2A\u5206\u652F:</p><p><strong>master\u5206\u652F:</strong></p>",3),H=["src"],N=e("p",null,[e("strong",null,"develop\u5206\u652F:")],-1),x=["src"],q=t(`<p>\u4F7F\u7528\u547D\u4EE4\u7684\u5F62\u5F0F\u4E3A:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> rebase <span class="token punctuation">[</span>startpoint<span class="token punctuation">]</span> <span class="token punctuation">[</span>endpoint<span class="token punctuation">]</span> --onto <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5176\u4E2D\uFF0C<code>[startpoint]</code> <code>[endpoint]</code>\u4ECD\u7136\u548C\u4E0A\u4E00\u4E2A\u547D\u4EE4\u4E00\u6837\u6307\u5B9A\u4E86\u4E00\u4E2A\u7F16\u8F91\u533A\u95F4(\u524D\u5F00\u540E\u95ED)\uFF0C<code>--onto</code>\u7684\u610F\u601D\u662F\u8981\u5C06\u8BE5\u6307\u5B9A\u7684\u63D0\u4EA4\u590D\u5236\u5230\u54EA\u4E2A\u5206\u652F\u4E0A\u3002</p><p>\u6240\u4EE5\uFF0C\u5728\u627E\u5230C(<code>90bc0045b</code>)\u548CE(<code>5de0da9f2</code>)\u7684\u63D0\u4EA4id\u540E\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> rebase 90bc0045b 5de0da9f2 --onto master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6CE8:\u56E0\u4E3A<code>[startpoint]</code> <code>[endpoint]</code>\u6307\u5B9A\u7684\u662F\u4E00\u4E2A\u524D\u5F00\u540E\u95ED\u7684\u533A\u95F4\uFF0C\u4E3A\u4E86\u8BA9\u8FD9\u4E2A\u533A\u95F4\u5305\u542BC\u63D0\u4EA4\uFF0C\u5C06\u533A\u95F4\u8D77\u59CB\u70B9\u5411\u540E\u9000\u4E86\u4E00\u6B65\u3002</p><p>\u8FD0\u884C\u5B8C\u6210\u540E\u67E5\u770B\u5F53\u524D\u5206\u652F\u7684\u65E5\u5FD7:</p>`,7),V=["src"],j=e("p",null,"\u53EF\u4EE5\u770B\u5230\uFF0CC~E\u90E8\u5206\u7684\u63D0\u4EA4\u5185\u5BB9\u5DF2\u7ECF\u590D\u5236\u5230\u4E86G\u7684\u540E\u9762\u4E86\uFF0C\u5927\u529F\u544A\u6210\uFF1FNO\uFF01\u770B\u4E00\u4E0B\u5F53\u524D\u5206\u652F\u7684\u72B6\u6001:",-1),F=["src"],y=e("p",null,"\u5F53\u524DHEAD\u5904\u4E8E\u6E38\u79BB\u72B6\u6001\uFF0C\u5B9E\u9645\u4E0A\uFF0C\u6B64\u65F6\u6240\u6709\u5206\u652F\u7684\u72B6\u6001\u5E94\u8BE5\u662F\u8FD9\u6837:",-1),G=["src"],O=t(`<p>\u6240\u4EE5\uFF0C\u867D\u7136\u6B64\u65F6HEAD\u6240\u6307\u5411\u7684\u5185\u5BB9\u6B63\u662F\u6240\u9700\u8981\u7684\uFF0C\u4F46\u662Fmaster\u5206\u652F\u662F\u6CA1\u6709\u4EFB\u4F55\u53D8\u5316\u7684\uFF0Cgit\u53EA\u662F\u5C06C~E\u90E8\u5206\u7684\u63D0\u4EA4\u5185\u5BB9\u590D\u5236\u4E00\u4EFD\u7C98\u8D34\u5230\u4E86master\u6240\u6307\u5411\u7684\u63D0\u4EA4\u540E\u9762\uFF0C\u9700\u8981\u505A\u7684\u5C31\u662F\u5C06master\u6240\u6307\u5411\u7684\u63D0\u4EA4id\u8BBE\u7F6E\u4E3A\u5F53\u524DHEAD\u6240\u6307\u5411\u7684\u63D0\u4EA4id\u5C31\u53EF\u4EE5\u4E86\uFF0C\u5373:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout master
<span class="token function">git</span> reset --hard  0c72e64
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,2),S=["src"];function T(s,z){return c(),o(n,null,[d,p,r,m,e("img",{src:s.$withBase("/assets/git/2147642-42195cacced56729.webp"),alt:"demo"},null,8,u),b,e("img",{src:s.$withBase("/assets/git/2147642-ce849c4eab3d803b.webp"),alt:"demo"},null,8,h),g,e("img",{src:s.$withBase("/assets/git/2147642-03d48aa767efb307.webp"),alt:"demo"},null,8,_),f,e("img",{src:s.$withBase("/assets/git/2147642-a651234e62ed20a5.webp"),alt:"demo"},null,8,v),w,e("img",{src:s.$withBase("/assets/git/2147642-44bbd784dcadfb31.webp"),alt:"demo"},null,8,k),B,e("img",{src:s.$withBase("/assets/git/2147642-334e0a5c47a24f87.webp"),alt:"demo"},null,8,$),E,D,e("img",{src:s.$withBase("/assets/git/2147642-0de010746cb78401.webp"),alt:"demo"},null,8,A),C,e("img",{src:s.$withBase("/assets/git/2147642-c41f60d26b00cdfc.webp"),alt:"demo"},null,8,H),N,e("img",{src:s.$withBase("/assets/git/2147642-8519a024c88129c5.webp"),alt:"demo"},null,8,x),q,e("img",{src:s.$withBase("/assets/git/2147642-de397671caac1966.webp"),alt:"demo"},null,8,V),j,e("img",{src:s.$withBase("/assets/git/2147642-cfd21fdb1e4038bc.webp"),alt:"demo"},null,8,F),y,e("img",{src:s.$withBase("/assets/git/2147642-a3bbfea6d760f64a.webp"),alt:"demo"},null,8,G),O,e("img",{src:s.$withBase("/assets/git/2147642-003361cb0305c094.webp"),alt:"demo"},null,8,S)],64)}var K=i(l,[["render",T]]);export{K as default};
