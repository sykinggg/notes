(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1033:function(e,v,_){"use strict";_.r(v);var t=_(1),c=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("在深入源码前，让先建立"),_("code",[e._v("更新机制")]),e._v("的"),_("code",[e._v("心智模型")]),e._v("。")]),e._v(" "),_("p",[e._v("在后面两节讲解源码时，会将代码与"),_("code",[e._v("心智模型")]),e._v("联系上，方便你更好理解。")]),e._v(" "),_("h2",{attrs:{id:"同步更新的react"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#同步更新的react"}},[e._v("#")]),e._v(" 同步更新的React")]),e._v(" "),_("p",[e._v("可以将"),_("code",[e._v("更新机制")]),e._v("类比"),_("code",[e._v("代码版本控制")]),e._v("。")]),e._v(" "),_("p",[e._v("在没有"),_("code",[e._v("代码版本控制")]),e._v("前，在代码中逐步叠加功能。一切看起来井然有序，直到遇到了一个紧急线上bug（红色节点）。")]),e._v(" "),_("p",[_("img",{attrs:{src:"/notes/assets/react/git1.png",alt:"流程1"}})]),e._v(" "),_("p",[e._v("为了修复这个bug，需要首先将之前的代码提交。")]),e._v(" "),_("p",[e._v("在"),_("code",[e._v("React")]),e._v("中，所有通过"),_("code",[e._v("ReactDOM.render")]),e._v("创建的应用（其他创建应用的方式参考"),_("RouterLink",{attrs:{to:"/react/state/reactdom.html#react的其他入口函数"}},[e._v("ReactDOM.render一节")]),e._v("）都是通过类似的方式"),_("code",[e._v("更新状态")]),e._v("。")],1),e._v(" "),_("p",[e._v("即没有"),_("code",[e._v("优先级")]),e._v("概念，"),_("code",[e._v("高优更新")]),e._v("（红色节点）需要排在其他"),_("code",[e._v("更新")]),e._v("后面执行。")]),e._v(" "),_("h2",{attrs:{id:"并发更新的react"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#并发更新的react"}},[e._v("#")]),e._v(" 并发更新的React")]),e._v(" "),_("p",[e._v("当有了"),_("code",[e._v("代码版本控制")]),e._v("，有紧急线上bug需要修复时，暂存当前分支的修改，在"),_("code",[e._v("master分支")]),e._v("修复bug并紧急上线。")]),e._v(" "),_("p",[_("img",{attrs:{src:"/notes/assets/react/git2.png",alt:"流程2"}})]),e._v(" "),_("p",[e._v("bug修复上线后通过"),_("code",[e._v("git rebase")]),e._v("命令和"),_("code",[e._v("开发分支")]),e._v("连接上。"),_("code",[e._v("开发分支")]),e._v("基于"),_("code",[e._v("修复bug的版本")]),e._v("继续开发。")]),e._v(" "),_("p",[_("img",{attrs:{src:"/notes/assets/react/git3.png",alt:"流程3"}})]),e._v(" "),_("p",[e._v("在"),_("code",[e._v("React")]),e._v("中，通过"),_("code",[e._v("ReactDOM.createBlockingRoot")]),e._v("和"),_("code",[e._v("ReactDOM.createRoot")]),e._v("创建的应用会采用"),_("code",[e._v("并发")]),e._v("的方式"),_("code",[e._v("更新状态")]),e._v("。")]),e._v(" "),_("p",[_("code",[e._v("高优更新")]),e._v("（红色节点）中断正在进行中的"),_("code",[e._v("低优更新")]),e._v("（蓝色节点），先完成"),_("code",[e._v("render - commit流程")]),e._v("。")]),e._v(" "),_("p",[e._v("待"),_("code",[e._v("高优更新")]),e._v("完成后，"),_("code",[e._v("低优更新")]),e._v("基于"),_("code",[e._v("高优更新")]),e._v("的结果"),_("code",[e._v("重新更新")]),e._v("。")]),e._v(" "),_("p",[e._v("接下来两节会从源码角度讲解这套"),_("code",[e._v("并发更新")]),e._v("是如何实现的。")]),e._v(" "),_("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),_("p",[_("a",{attrs:{href:"https://www.youtube.com/watch?v=v6iR3Zk4oDY",target:"_blank",rel:"noopener noreferrer"}},[_("code",[e._v("外网")]),e._v(" "),_("code",[e._v("英文")]),e._v(" React Core Team Dan介绍React未来发展方向"),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=c.exports}}]);