(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{480:function(t,e,s){"use strict";s.r(e);var a=s(26),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-rebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[t._v("#")]),t._v(" git rebase")]),t._v(" "),s("blockquote",[s("p",[t._v("前提：不要通过rebase对任何已经提交到公共仓库中的commit进行修改")])]),t._v(" "),s("h2",{attrs:{id:"合并多个commit为一个完整commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并多个commit为一个完整commit"}},[t._v("#")]),t._v(" 合并多个commit为一个完整commit")]),t._v(" "),s("p",[t._v("当我们在本地仓库中提交了多次，在我们把本地提交push到公共仓库中之前，为了让提交记录更简洁明了，我们希望把如下分支B、C、D三个提交记录合并为一个完整的提交，然后再push到公共仓库。")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"示例",href:"/notes/assets/git/2147642-42195cacced56729.webp"}},[s("img",{attrs:{src:"/notes/assets/git/2147642-42195cacced56729.webp",alt:"示例"}})])]),t._v(" "),s("p",[t._v("现在我们在测试分支上添加了四次提交，我们的目标是把最后三个提交合并为一个提交：")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"示例",href:"/notes/assets/git/2147642-ce849c4eab3d803b.webp"}},[s("img",{attrs:{src:"/notes/assets/git/2147642-ce849c4eab3d803b.webp",alt:"示例"}})])]),t._v(" "),s("p",[t._v("这里我们使用命令:")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("startpoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("endpoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("其中"),s("code",[t._v("-i")]),t._v("的意思是"),s("code",[t._v("--interactive")]),t._v("，即弹出交互式的界面让用户编辑完成合并操作，"),s("code",[t._v("[startpoint]")]),t._v(" "),s("code",[t._v("[endpoint]")]),t._v("则指定了一个编辑区间，如果不指定"),s("code",[t._v("[endpoint]")]),t._v("，则该区间的终点默认是当前分支"),s("code",[t._v("HEAD")]),t._v("所指向的"),s("code",[t._v("commit")]),t._v("(注：该区间指定的是一个前开后闭的区间)。")]),t._v(" "),s("p",[t._v("在查看到了log日志后，我们运行以下命令：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i 36224db\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("或:")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i HEAD~3 \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("然后我们会看到如下界面:")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"demo",href:"/notes/assets/git/2147642-03d48aa767efb307.webp"}},[s("img",{attrs:{src:"/notes/assets/git/2147642-03d48aa767efb307.webp",alt:"demo"}})])]),t._v(" "),s("p",[t._v("上面未被注释的部分列出的是我们本次rebase操作包含的所有提交，下面注释部分是git为我们提供的命令说明。每一个"),s("code",[t._v("commit id")]),t._v(" 前面的"),s("code",[t._v("pick")]),t._v("表示指令类型，"),s("code",[t._v("git")]),t._v(" 为我们提供了以下几个命令:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("p，选择"),s("code",[t._v("<commit>")]),t._v(" =使用提交")])]),t._v(" "),s("li",[s("p",[t._v("r，改写"),s("code",[t._v("<commit>")]),t._v(" =使用提交，但编辑提交消息")])]),t._v(" "),s("li",[s("p",[t._v("e，编辑"),s("code",[t._v("<commit>")]),t._v(" =使用提交，但停止进行修改")])]),t._v(" "),s("li",[s("p",[t._v("s，squash "),s("code",[t._v("<commit>")]),t._v(" =使用提交，但可以合并到先前的提交中")])]),t._v(" "),s("li",[s("p",[t._v("f，fixup "),s("code",[t._v("<commit>")]),t._v(" =类似于“ squash”，但丢弃此提交的日志消息")])]),t._v(" "),s("li",[s("p",[t._v("x，exec <命令> =使用shell运行命令（该行的其余部分）")])]),t._v(" "),s("li",[s("p",[t._v("b，break =在这里停止（稍后继续使用'git rebase --continue'进行重新设置）")])]),t._v(" "),s("li",[s("p",[t._v("d，删除"),s("code",[t._v("<commit>")]),t._v(" =删除提交")])]),t._v(" "),s("li",[s("p",[t._v("l，label "),s("code",[t._v("<label>")]),t._v(" =用名称标记当前HEAD")])]),t._v(" "),s("li",[s("p",[t._v("t，重置"),s("code",[t._v("<label>")]),t._v(" =将HEAD重置为标签")])]),t._v(" "),s("li",[s("p",[t._v("m，合并"),s("code",[t._v("[-C <commit> | -c <commit>] <label> [＃<oneline>]")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用原始合并提交的创建合并提交")])]),t._v(" "),s("li",[s("p",[t._v("消息（如果没有原始合并提交，则返回单行）")])]),t._v(" "),s("li",[s("p",[t._v("指定的）。 使用-c "),s("code",[t._v("<commit>")]),t._v("改写提交消息。")])])])])]),t._v(" "),s("p",[t._v("这些行可以重新排序； 它们从上到下执行。\n如果您在此处删除一行，那将丢失。\n但是，如果删除所有内容，则重新定位将中止。")]),t._v(" "),s("p",[t._v("根据我们的需求，我们将commit内容编辑如下:")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"demo",href:"/notes/assets/git/2147642-a651234e62ed20a5.webp"}},[s("img",{attrs:{src:"/notes/assets/git/2147642-a651234e62ed20a5.webp",alt:"demo"}})])]),t._v(" "),s("p",[t._v("然后是注释修改界面:")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"demo",href:"/notes/assets/git/2147642-44bbd784dcadfb31.webp"}},[s("img",{attrs:{src:"/notes/assets/git/2147642-44bbd784dcadfb31.webp",alt:"demo"}})])]),t._v(" "),s("p",[t._v("编辑完保存即可完成commit的合并了：")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"demo",href:"/notes/assets/git/2147642-334e0a5c47a24f87.webp"}},[s("img",{attrs:{src:"/notes/assets/git/2147642-334e0a5c47a24f87.webp",alt:"demo"}})])]),t._v(" "),s("h2",{attrs:{id:"_2-将某一段commit粘贴到另一个分支上"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-将某一段commit粘贴到另一个分支上"}},[t._v("#")]),t._v(" 2.将某一段commit粘贴到另一个分支上")]),t._v(" "),s("p",[t._v("当我们项目中存在多个分支，有时候我们需要将某一个分支中的一段提交同时应用到其他分支中，就像下图：")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"demo",href:"/notes/assets/git/2147642-0de010746cb78401.webp"}},[s("img",{attrs:{src:"/notes/assets/git/2147642-0de010746cb78401.webp",alt:"demo"}})])]),t._v(" "),s("p",[t._v("希望将"),s("code",[t._v("develop")]),t._v("分支中的C~E部分复制到"),s("code",[t._v("master")]),t._v("分支中，这时我们就可以通过"),s("code",[t._v("rebase")]),t._v("命令来实现（如果只是复制某一两个提交到其他分支，建议使用更简单的命令:"),s("code",[t._v("git cherry-pick")]),t._v("）。")]),t._v(" "),s("p",[t._v("在实际模拟中，我们创建了"),s("code",[t._v("master")]),t._v("和"),s("code",[t._v("develop")]),t._v("两个分支:")]),t._v(" "),s("p",[s("strong",[t._v("master分支:")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"demo",href:"/notes/assets/git/2147642-c41f60d26b00cdfc.webp"}},[s("img",{attrs:{src:"/notes/assets/git/2147642-c41f60d26b00cdfc.webp",alt:"demo"}})])]),t._v(" "),s("p",[s("strong",[t._v("develop分支:")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"demo",href:"/notes/assets/git/2147642-8519a024c88129c5.webp"}},[s("img",{attrs:{src:"/notes/assets/git/2147642-8519a024c88129c5.webp",alt:"demo"}})])]),t._v(" "),s("p",[t._v("我们使用命令的形式为:")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("startpoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("endpoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --onto "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branchName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("其中，"),s("code",[t._v("[startpoint]")]),t._v(" "),s("code",[t._v("[endpoint]")]),t._v("仍然和上一个命令一样指定了一个编辑区间(前开后闭)，"),s("code",[t._v("--onto")]),t._v("的意思是要将该指定的提交复制到哪个分支上。")]),t._v(" "),s("p",[t._v("所以，在找到C("),s("code",[t._v("90bc0045b")]),t._v(")和E("),s("code",[t._v("5de0da9f2")]),t._v(")的提交id后，我们运行以下命令：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase 90bc0045b 5de0da9f2 --onto master\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("注:因为"),s("code",[t._v("[startpoint]")]),t._v(" "),s("code",[t._v("[endpoint]")]),t._v("指定的是一个前开后闭的区间，为了让这个区间包含C提交，我们将区间起始点向后退了一步。")]),t._v(" "),s("p",[t._v("运行完成后查看当前分支的日志:")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"demo",href:"/notes/assets/git/2147642-de397671caac1966.webp"}},[s("img",{attrs:{src:"/notes/assets/git/2147642-de397671caac1966.webp",alt:"demo"}})])]),t._v(" "),s("p",[t._v("可以看到，C~E部分的提交内容已经复制到了G的后面了，大功告成？NO！我们看一下当前分支的状态:")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"demo",href:"/notes/assets/git/2147642-cfd21fdb1e4038bc.webp"}},[s("img",{attrs:{src:"/notes/assets/git/2147642-cfd21fdb1e4038bc.webp",alt:"demo"}})])]),t._v(" "),s("p",[t._v("当前HEAD处于游离状态，实际上，此时所有分支的状态应该是这样:")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"/notes/assets/git/2147642-a3bbfea6d760f64a.webp"}},[s("img",{attrs:{src:"/notes/assets/git/2147642-a3bbfea6d760f64a.webp",alt:""}})])]),t._v(" "),s("p",[t._v("所以，虽然此时HEAD所指向的内容正是我们所需要的，但是master分支是没有任何变化的，git只是将C~E部分的提交内容复制一份粘贴到了master所指向的提交后面，我们需要做的就是将master所指向的提交id设置为当前HEAD所指向的提交id就可以了，即:")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard  0c72e64\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("img",{attrs:{src:"/notes/assets/git/2147642-003361cb0305c094.webp",alt:""}})])])}),[],!1,null,null,null);e.default=v.exports}}]);