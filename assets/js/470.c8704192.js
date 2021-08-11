(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{838:function(s,t,e){"use strict";e.r(t);var a=e(26),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[s._v("#")]),s._v(" @types")]),s._v(" "),e("p",[s._v("毫无疑问，"),e("a",{attrs:{href:"https://github.com/borisyankov/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[s._v("DefinitelyTyped"),e("OutboundLink")],1),s._v(" 是 TypeScript 最大的优势之一，社区已经记录了 90% 的顶级 JavaScript 库。")]),s._v(" "),e("p",[s._v("这意味着，你可以非常高效地使用这些库，而无须在单独的窗口打开相应文档以确保输入的正确性。")]),s._v(" "),e("h2",{attrs:{id:"使用-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-types"}},[s._v("#")]),s._v(" 使用 "),e("code",[s._v("@types")])]),s._v(" "),e("p",[s._v("你可以通过 "),e("code",[s._v("npm")]),s._v(" 来安装使用 "),e("code",[s._v("@types")]),s._v("，例如为 "),e("code",[s._v("jquery")]),s._v(" 添加声明文件：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @types/jquery --save-dev\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v("@types")]),s._v(" 支持全局和模块类型定义。")]),s._v(" "),e("h3",{attrs:{id:"全局-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局-types"}},[s._v("#")]),s._v(" 全局 "),e("code",[s._v("@types")])]),s._v(" "),e("p",[s._v("默认情况下，TypeScript 会自动包含支持全局使用的任何声明定义。例如，对于 jquery，你应该能够在项目中开始全局使用 "),e("code",[s._v("$")]),s._v("。")]),s._v(" "),e("h3",{attrs:{id:"模块-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块-types"}},[s._v("#")]),s._v(" 模块 "),e("code",[s._v("@types")])]),s._v(" "),e("p",[s._v("安装完之后，不需要特别的配置，你就可以像使用模块一样使用它：")]),s._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" $ "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jquery'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 现在你可以此模块中任意使用$了 :)")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"控制全局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控制全局"}},[s._v("#")]),s._v(" 控制全局")]),s._v(" "),e("p",[s._v("可以看出，对于某些团队而言，拥有允许全局使用的定义是一个问题。因此，你可以通过配置 "),e("code",[s._v("tsconfig.json")]),s._v(" 的 "),e("code",[s._v("compilerOptions.types")]),s._v(" 选项，引入有意义的类型：")]),s._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"types"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jquery"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("如上例所示，通过配置 "),e("code",[s._v('compilerOptions.types: [ "jquery" ]')]),s._v(" 后，只允许使用 "),e("code",[s._v("jquery")]),s._v(" 的 "),e("code",[s._v("@types")]),s._v(" 包，即使这个人安装了另一个声明文件，比如 "),e("code",[s._v("npm install @types/node")]),s._v("，它的全局变量（例如 "),e("code",[s._v("process")]),s._v("）也不会泄漏到你的代码中，直到你将它们添加到 tsconfig.json 类型选项。")])])}),[],!1,null,null,null);t.default=n.exports}}]);