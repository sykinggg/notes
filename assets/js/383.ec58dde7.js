(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{751:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("经过五章的学习，终于回到了"),s("code",[t._v("React")]),t._v("应用的起点。")]),t._v(" "),s("p",[t._v("这一节完整的走通"),s("code",[t._v("ReactDOM.render")]),t._v("完成页面渲染的整个流程。")]),t._v(" "),s("h2",{attrs:{id:"创建fiber"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建fiber"}},[t._v("#")]),t._v(" 创建fiber")]),t._v(" "),s("p",[t._v("从"),s("RouterLink",{attrs:{to:"/react/process/doubleBuffer.html#mount时"}},[t._v("双缓存机制一节")]),t._v("知道，首次执行"),s("code",[t._v("ReactDOM.render")]),t._v("会创建"),s("code",[t._v("fiberRootNode")]),t._v("和"),s("code",[t._v("rootFiber")]),t._v("。其中"),s("code",[t._v("fiberRootNode")]),t._v("是整个应用的根节点，"),s("code",[t._v("rootFiber")]),t._v("是要渲染组件所在组件树的"),s("code",[t._v("根节点")]),t._v("。")],1),t._v(" "),s("p",[t._v("这一步发生在调用"),s("code",[t._v("ReactDOM.render")]),t._v("后进入的"),s("code",[t._v("legacyRenderSubtreeIntoContainer")]),t._v("方法中。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// container指ReactDOM.render的第二个参数（即应用挂载的DOM节点）")]),t._v("\nroot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_reactRootContainer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("legacyCreateRootFromDOMContainer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  forceHydrate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfiberRoot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_internalRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("blockquote",[s("p",[t._v("你可以从"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-dom/src/client/ReactDOMLegacy.js#L193",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("看到这一步的代码")])]),t._v(" "),s("p",[s("code",[t._v("legacyCreateRootFromDOMContainer")]),t._v("方法内部会调用"),s("code",[t._v("createFiberRoot")]),t._v("方法完成"),s("code",[t._v("fiberRootNode")]),t._v("和"),s("code",[t._v("rootFiber")]),t._v("的创建以及关联。并初始化"),s("code",[t._v("updateQueue")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createFiberRoot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("containerInfo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RootTag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hydrate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hydrationCallbacks"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" SuspenseHydrationCallbacks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" FiberRoot "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建fiberRootNode")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" FiberRoot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FiberRootNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("containerInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建rootFiber")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" uninitializedFiber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHostRootFiber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 连接rootFiber与fiberRootNode")]),t._v("\n  root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uninitializedFiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  uninitializedFiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stateNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化updateQueue")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initializeUpdateQueue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uninitializedFiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])]),s("p",[t._v("根据以上代码，现在可以在"),s("RouterLink",{attrs:{to:"/react/process/doubleBuffer.html#mount时"}},[t._v("双缓存机制一节")]),t._v("基础上补充上"),s("code",[t._v("rootFiber")]),t._v("到"),s("code",[t._v("fiberRootNode")]),t._v("的引用。")],1),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"fiberRoot",href:"/notes/assets/react/fiberroot.png"}},[s("img",{attrs:{src:"/notes/assets/react/fiberroot.png",alt:"fiberRoot"}})])]),t._v(" "),s("blockquote",[s("p",[t._v("你可以从"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberRoot.new.js#L97",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("看到这一步的代码")])]),t._v(" "),s("h2",{attrs:{id:"创建update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建update"}},[t._v("#")]),t._v(" 创建update")]),t._v(" "),s("p",[t._v("已经做好了组件的初始化工作，接下来就等待创建"),s("code",[t._v("Update")]),t._v("来开启一次更新。")]),t._v(" "),s("p",[t._v("这一步发生在"),s("code",[t._v("updateContainer")]),t._v("方法中。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateContainer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("element"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ReactNodeList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  container"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OpaqueRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  parentComponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("React$Component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  callback"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("Function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Lane "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略与逻辑不相关代码")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建update")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" update "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lane"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" suspenseConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update.payload为需要挂载在根节点的组件")]),t._v("\n  update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// callback为ReactDOM.render的第三个参数 —— 回调函数")]),t._v("\n  callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将生成的update加入updateQueue")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enqueueUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调度更新")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduleUpdateOnFiber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lane"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" eventTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略与逻辑不相关代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br")])]),s("blockquote",[s("p",[t._v("你可以从"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberReconciler.new.js#L255",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("看到"),s("code",[t._v("updateContainer")]),t._v("的代码")])]),t._v(" "),s("p",[t._v("值得注意的是其中"),s("code",[t._v("update.payload = {element};")])]),t._v(" "),s("p",[t._v("这就是在"),s("RouterLink",{attrs:{to:"/react/state/update.html#update的结构"}},[t._v("Update一节")]),t._v("介绍的，对于"),s("code",[t._v("HostRoot")]),t._v("，"),s("code",[t._v("payload")]),t._v("为"),s("code",[t._v("ReactDOM.render")]),t._v("的第一个传参。")],1),t._v(" "),s("h2",{attrs:{id:"流程概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流程概览"}},[t._v("#")]),t._v(" 流程概览")]),t._v(" "),s("p",[t._v("至此，"),s("code",[t._v("ReactDOM.render")]),t._v("的流程就和已知的流程连接上了。")]),t._v(" "),s("p",[t._v("整个流程如下：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("创建fiberRootNode、rootFiber、updateQueue（"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("legacyCreateRootFromDOMContainer"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("）\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v("\n\n创建Update对象（"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("updateContainer"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("）\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v("\n\n从fiber到root（"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("markUpdateLaneFromFiberToRoot"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("）\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v("\n\n调度更新（"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("ensureRootIsScheduled"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("）\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v("\n\nrender阶段（"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("performSyncWorkOnRoot"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" 或 "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("performConcurrentWorkOnRoot"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("）\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v("\n\ncommit阶段（"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("commitRoot"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("）\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br")])]),s("h2",{attrs:{id:"react的其他入口函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react的其他入口函数"}},[t._v("#")]),t._v(" React的其他入口函数")]),t._v(" "),s("p",[t._v("当前"),s("code",[t._v("React")]),t._v("共有三种模式：")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("legacy")]),t._v("，这是当前"),s("code",[t._v("React")]),t._v("使用的方式。当前没有计划删除本模式，但是这个模式可能不支持一些新功能。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("blocking")]),t._v("，开启部分"),s("code",[t._v("concurrent")]),t._v("模式特性的中间模式。目前正在实验中。作为迁移到"),s("code",[t._v("concurrent")]),t._v("模式的第一个步骤。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("concurrent")]),t._v("，面向未来的开发模式。之前讲的"),s("code",[t._v("任务中断/任务优先级")]),t._v("都是针对"),s("code",[t._v("concurrent")]),t._v("模式。")])])]),t._v(" "),s("p",[t._v("你可以从下表看出各种模式对特性的支持：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("legacy 模式")]),t._v(" "),s("th",[t._v("blocking 模式")]),t._v(" "),s("th",[t._v("concurrent 模式")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs",target:"_blank",rel:"noopener noreferrer"}},[t._v("String Refs"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("🚫**")]),t._v(" "),s("td",[t._v("🚫**")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/legacy-context.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Legacy Context"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("🚫**")]),t._v(" "),s("td",[t._v("🚫**")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage",target:"_blank",rel:"noopener noreferrer"}},[t._v("findDOMNode"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("🚫**")]),t._v(" "),s("td",[t._v("🚫**")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly",target:"_blank",rel:"noopener noreferrer"}},[t._v("Suspense"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#suspenselist",target:"_blank",rel:"noopener noreferrer"}},[t._v("SuspenseList"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("Suspense SSR + Hydration")]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("Progressive Hydration")]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("Selective Hydration")]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("Cooperative Multitasking")]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("Automatic batching of multiple setStates")]),t._v(" "),s("td",[t._v("🚫*")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#splitting-high-and-low-priority-state",target:"_blank",rel:"noopener noreferrer"}},[t._v("Priority-based Rendering"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/concurrent-mode-intro.html#interruptible-rendering",target:"_blank",rel:"noopener noreferrer"}},[t._v("Interruptible Prerendering"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#transitions",target:"_blank",rel:"noopener noreferrer"}},[t._v("useTransition"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#deferring-a-value",target:"_blank",rel:"noopener noreferrer"}},[t._v("useDeferredValue"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#suspense-reveal-train",target:"_blank",rel:"noopener noreferrer"}},[t._v('Suspense Reveal "Train"'),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("🚫")]),t._v(" "),s("td",[t._v("✅")])])])]),t._v(" "),s("p",[t._v("*："),s("code",[t._v("legacy")]),t._v("模式在合成事件中有自动批处理的功能，但仅限于一个浏览器任务。非"),s("code",[t._v("React")]),t._v("事件想使用这个功能必须使用 "),s("code",[t._v("unstable_batchedUpdates")]),t._v("。在"),s("code",[t._v("blocking")]),t._v("模式和"),s("code",[t._v("concurrent")]),t._v("模式下，所有的"),s("code",[t._v("setState")]),t._v("在默认情况下都是批处理的。")]),t._v(" "),s("p",[t._v("**：会在开发中发出警告。")]),t._v(" "),s("p",[t._v("模式的变化影响整个应用的工作方式，所以无法只针对某个组件开启不同模式。")]),t._v(" "),s("p",[t._v("基于此原因，可以通过不同的"),s("code",[t._v("入口函数")]),t._v("开启不同模式：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("legacy")]),t._v(" -- "),s("code",[t._v("ReactDOM.render(<App />, rootNode)")])]),t._v(" "),s("li",[s("code",[t._v("blocking")]),t._v(" -- "),s("code",[t._v("ReactDOM.createBlockingRoot(rootNode).render(<App />)")])]),t._v(" "),s("li",[s("code",[t._v("concurrent")]),t._v(" -- "),s("code",[t._v("ReactDOM.createRoot(rootNode).render(<App />)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("你可以在"),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/concurrent-mode-adoption.html#why-so-many-modes",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("看到"),s("code",[t._v("React")]),t._v("团队解释为什么会有这么多模式")])]),t._v(" "),s("p",[t._v("虽然不同模式的"),s("code",[t._v("入口函数")]),t._v("不同，但是他们仅对"),s("code",[t._v("fiber.mode")]),t._v("变量产生影响，对在"),s("RouterLink",{attrs:{to:"/react/state/reactdom.html#流程概览"}},[t._v("流程概览")]),t._v("中描述的流程并无影响。")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);