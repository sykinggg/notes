(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{403:function(s,t,n){"use strict";n.r(t);var a=n(26),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),n("h1",{attrs:{id:"suspense"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#suspense"}},[s._v("#")]),s._v(" suspense")]),s._v(" "),n("p",[s._v("React 中的"),n("code",[s._v("suspendedTime")]),s._v("用来记录的是还没有被提交但是已经被更新的任务，在这里首先要讲解一个概念，那就是"),n("code",[s._v("finishedWork")]),s._v("。一开始以为"),n("code",[s._v("finishedWork")]),s._v("存储的是"),n("code",[s._v("workInProgress")]),s._v("，也就是"),n("code",[s._v("current")]),s._v("的引用，那存的不就是自己么，但是后来弄清楚了。试想从"),n("code",[s._v("renderRoot")]),s._v("开始做的事情都是在"),n("code",[s._v("workInProgress")]),s._v("上操作的，这个对象通过调用")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("nextUnitOfWork "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createWorkInProgress")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  nextRoot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  nextRenderExpirationTime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createWorkInProgress")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("current"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  pendingProps"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" any"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  expirationTime"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ExpirationTime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Fiber "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" workInProgress "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alternate\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("workInProgress "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    workInProgress "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createFiber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      pendingProps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("elementType "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("elementType\n    workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("type "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("type\n    workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stateNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stateNode\n\n    workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alternate "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current\n    current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alternate "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" workInProgress\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pendingProps "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pendingProps\n\n    workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("effectTag "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NoEffect\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// The effect list is no longer valid.")]),s._v("\n    workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nextEffect "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n    workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("firstEffect "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n    workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lastEffect "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("childExpirationTime "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("childExpirationTime\n  workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("expirationTime "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("expirationTime\n\n  workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("child "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("child\n  workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("memoizedProps "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("memoizedProps\n  workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("memoizedState "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("memoizedState\n  workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("updateQueue "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("updateQueue\n  workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("firstContextDependency "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("firstContextDependency\n\n  workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sibling "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sibling\n  workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("index\n  workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ref "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ref\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" workInProgress\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br")])]),n("blockquote",[n("p",[n("strong",[s._v("注意")]),s._v(": 这里返回的是一个新的对象，在更新的过程中对于需要更新的节点都会创建这么一个对象，并对其拷贝属性。对于原始类型的数据那么是值拷贝，对于引用类型是否是引用拷贝呢？答案是：对于在更新过程中需要改变的对象，会创建一个新的对象，这也是创建"),n("code",[s._v("workInProgress")]),s._v("的原因，这里尤其需要注意的是"),n("code",[s._v("updateQueue")]),s._v("，在调用"),n("code",[s._v("processUpdateQueue")]),s._v("的时候，需要调用一个方法")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" ensureWorkInProgressQueueIsAClone"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("State"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  workInProgress"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Fiber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  queue"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" UpdateQueue"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("State"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" UpdateQueue"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("State"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" current "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alternate\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("current "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("queue "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("updateQueue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      queue "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("updateQueue "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cloneUpdateQueue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("queue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" queue\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("也就是说"),n("code",[s._v("updateQueue")]),s._v("也是一个新的对象，所以在更新过程中改变的"),n("code",[s._v("Update")]),s._v("的顺序关系，并不会影响到"),n("code",[s._v("current")]),s._v("上的顺序，需要注意的是新创建的"),n("code",[s._v("update")]),s._v("调用"),n("code",[s._v("enqueueUpdate")]),s._v("会往"),n("code",[s._v("current")]),s._v("和"),n("code",[s._v("workInProgress")]),s._v("都插入。")]),s._v(" "),n("p",[s._v("说了这么多到底要说什么呢？"),n("strong",[s._v("答案就是被挂起的"),n("code",[s._v("work")]),s._v("其实就是不把"),n("code",[s._v("workInProgress")]),s._v("的整棵树进入"),n("code",[s._v("commit")]),s._v("阶段的操作，挂起是专指"),n("code",[s._v("commit")]),s._v("的，只有"),n("code",[s._v("commit")]),s._v("阶段可以被挂起。而被挂起的提交，除了"),n("code",[s._v("timeout")]),s._v("的情况，都可以认为这次更新被抛弃了。")])]),s._v(" "),n("h1",{attrs:{id:"ontimeout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ontimeout"}},[s._v("#")]),s._v(" onTimeout")]),s._v(" "),n("p",[n("code",[s._v("root.timeoutHandler")]),s._v("用来记录子树中需要"),n("code",[s._v("timeout")]),s._v("执行的任务，这类任务被挂起的原因一般是因为抛出了"),n("code",[s._v("promise")]),s._v("，并且自上次提交经过了"),n("code",[s._v("maxDruation")]),s._v("时间的任务，"),n("code",[s._v("nextLatestAbsoluteTimeoutMs")]),s._v("就是用来记录子树中优先级最高的需要提交的被挂起的任务的。被挂起代表了任务已经更新完成，但是因为一些原因不需要立马提交，比如：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("有错误出现，并且有低优先级的更新，那么可以跟低优先级的更新一起被提交")])]),s._v(" "),n("li",[n("p",[s._v("有错误但是没有低优先级的任务，发起一次同步的更新，再次执行被挂起的优先级的任务")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("Suspense")]),s._v("组件接收到异常的情况，根据情况挂起一些时间，最长为优先级最高的任务的过期时间，如果超时会执行"),n("code",[s._v("flushRoot")]),s._v("强制提交")])])]),s._v(" "),n("p",[s._v("需要注意的是，被挂起的任务只有"),n("code",[s._v("Suspense")]),s._v("的情况是设置了"),n("code",[s._v("timeout")]),s._v("的，但是不代表他一定要等到"),n("code",[s._v("timeout")]),s._v("才会被提交，以下情况都会提早提交：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("有任务的"),n("code",[s._v("expirationTime")]),s._v("小于"),n("code",[s._v("timeout")]),s._v("的时长")])]),s._v(" "),n("li",[n("p",[s._v("在"),n("code",[s._v("timeout")]),s._v("期间同一子树产生了新的更新，连同"),n("code",[s._v("Suspense")]),s._v("组件一起更新了")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("Promise")]),s._v("状态改变，调度了新的更新")])])]),s._v(" "),n("p",[s._v("设置了"),n("code",[s._v("timeoutHandler")]),s._v("之后，在下一次开始更新之前会清除"),n("code",[s._v("handler")]),s._v("，如果新的更新改变了"),n("code",[s._v("isExpire")]),s._v("或者"),n("code",[s._v("nextLatestAbsoluteTimeoutMs")]),s._v("，那么会导致"),n("code",[s._v("timeoutHandler")]),s._v("变化，甚至不需要"),n("code",[s._v("timeout")])]),s._v(" "),n("h1",{attrs:{id:"retry"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#retry"}},[s._v("#")]),s._v(" retry")]),s._v(" "),n("p",[n("code",[s._v("retry")]),s._v("只是简单地发起一次新的调度，所以并不关心新的渲染是否还需要这个"),n("code",[s._v("promise")]),s._v("返回的数据。")]),s._v(" "),n("p",[s._v("在"),n("code",[s._v("retry")]),s._v("的时候，如果他处于"),n("code",[s._v("ConcurrentMode")]),s._v("，那么只需要重新设置节点的"),n("code",[s._v("expirationTime")]),s._v("为"),n("code",[s._v("retryTime")]),s._v("即可")]),s._v(" "),n("p",[n("strong",[s._v("这里注意，因为同步模式下"),n("code",[s._v("Suspense")]),s._v("组件直接渲染"),n("code",[s._v("null")]),s._v("，不会像异步模式下一样操作，所以同步模式下他已经没有更新了，所以需要创建新的更新")])]),s._v(" "),n("h1",{attrs:{id:"error"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#error"}},[s._v("#")]),s._v(" error")]),s._v(" "),n("p",[s._v("注意重新发起一次同步请求的条件是比较苛刻的，就是要符合"),n("code",[s._v("!root.didError")]),s._v("和"),n("code",[s._v("!isExpire")]),s._v("，也就是同步任务是不会进入这个分支的，只会直接提交。")])])}),[],!1,null,null,null);t.default=e.exports}}]);