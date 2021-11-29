(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{625:function(t,n,s){"use strict";s.r(n);var a=s(1),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"updateportalcomponent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updateportalcomponent"}},[t._v("#")]),t._v(" updatePortalComponent")]),t._v(" "),s("p",[s("code",[t._v("portal")]),t._v("是一个特殊的"),s("code",[t._v("React Type")]),t._v("，他会包含一个"),s("code",[t._v("container")]),t._v("。")]),t._v(" "),s("p",[t._v("portal本身没有什么功能，所以不需要怎么处理，直接"),s("code",[t._v("reconcileChildren")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updatePortalComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" renderExpirationTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushHostContainer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stateNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("containerInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nextChildren "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pendingProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasLegacyContextChanged")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Normally we can bail out on props equality but if context has changed")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we don't do the bailout and we have to reuse existing props instead.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("memoizedProps "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" nextChildren"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bailoutOnAlreadyFinishedWork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Portals are special because we don't append the children during mount")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// but at commit. Therefore we need to track insertions which the normal")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// flow doesn't do during mount. This doesn't happen at the root because")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// the root always starts with a "current" with a null child.')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO: Consider unifying this with how the root works.")]),t._v("\n    workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reconcileChildFibers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      nextChildren"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      renderExpirationTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("memoizeProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextChildren"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reconcileChildren")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextChildren"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("memoizeProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextChildren"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);