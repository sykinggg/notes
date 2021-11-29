(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{1223:function(a,s,t){"use strict";t.r(s);var e=t(1),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[a._v("#")]),a._v(" loader")]),a._v(" "),t("p",[a._v("loader 用于对模块的源代码进行转换。loader 可以使在 "),t("code",[a._v("import")]),a._v(' 或 "load(加载)" 模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的得力方式。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许直接在 JavaScript 模块中 '),t("code",[a._v("import")]),a._v(" CSS文件！")]),a._v(" "),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[a._v("#")]),a._v(" "),t("strong",[a._v("示例")])]),a._v(" "),t("blockquote",[t("p",[a._v("可以使用 loader 告诉 webpack 加载 CSS 文件，或者将 TypeScript 转为 JavaScript。为此，首先安装相对应的 loader：")])]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("npm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("save"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("dev css"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("loader ts"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("loader\n")])])]),t("p",[a._v("然后指示 webpack 对每个 "),t("code",[a._v(".css")]),a._v(" 使用 "),t("code",[a._v("css-loader")]),a._v("，以及对所有 "),t("code",[a._v(".ts")]),a._v(" 文件使用 "),t("code",[a._v("ts-loader")]),a._v("：")]),a._v(" "),t("blockquote",[t("p",[a._v("webpack.config.js")])]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  module"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    rules"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" test"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("\\.css$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" use"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'css-loader'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" test"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("\\.ts$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" use"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'ts-loader'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"使用-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-loader"}},[a._v("#")]),a._v(" "),t("strong",[a._v("使用 loader")])]),a._v(" "),t("p",[a._v("应用程序中，有三种使用 loader 的方式：")]),a._v(" "),t("ul",[t("li",[t("p",[t("code",[a._v("配置方式")]),a._v("（推荐）：在 "),t("strong",[a._v("webpack.config.js")]),a._v(" 文件中指定 loader。")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("内联方式")]),a._v("：在每个 "),t("code",[a._v("import")]),a._v(" 语句中显式指定 loader。")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("CLI 方式")]),a._v("：在 shell 命令中指定它们。")])])]),a._v(" "),t("h2",{attrs:{id:"_1-配置方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置方式"}},[a._v("#")]),a._v(" "),t("strong",[a._v("1. 配置方式")])]),a._v(" "),t("p",[t("code",[a._v("module.rules")]),a._v(" 允许在 webpack 配置中指定多个 loader。 这种方式是展示 loader 的一种简明方式，并且有助于使代码变得简洁和易于维护。同时让对各个 loader 有个全局概览")]),a._v(" "),t("blockquote",[t("p",[a._v("loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)。")])]),a._v(" "),t("p",[a._v("在下面的示例中，从 sass-loader 开始执行，然后继续执行 css-loader，最后以 style-loader 为结束。")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  module"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    rules"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        test"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("\\.css$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        use"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// [style-loader](/loaders/style-loader)")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" loader"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'style-loader'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// [css-loader](/loaders/css-loader)")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            loader"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'css-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            options"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n              modules"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// [sass-loader](/loaders/sass-loader)")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" loader"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'sass-loader'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"_2-内联方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-内联方式"}},[a._v("#")]),a._v(" "),t("strong",[a._v("2. 内联方式")])]),a._v(" "),t("p",[a._v("可以在 "),t("code",[a._v("import")]),a._v(" 语句或任何 与 "),t("strong",[a._v('"import" 方法同等的引用方式')]),a._v(" 中指定 loader。使用 "),t("code",[a._v("!")]),a._v(" 将资源中的 loader 分开。每个部分都会相对于当前目录解析")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Styles "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'style-loader!css-loader?modules!./styles.css'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("通过为内联 "),t("code",[a._v("import")]),a._v(" 语句添加前缀，可以"),t("strong",[a._v("覆盖")]),a._v(" 配置 中的所有 loader, preLoader 和 postLoader：")]),a._v(" "),t("ul",[t("li",[a._v("使用 "),t("code",[a._v("!")]),a._v(" 前缀，将禁用所有已配置的 normal loader(普通 loader)")])]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Styles "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'!style-loader!css-loader?modules!./styles.css'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("ul",[t("li",[a._v("使用 "),t("code",[a._v("!!")]),a._v(" 前缀，将禁用所有已配置的 loader（preLoader, loader, postLoader）")])]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Styles "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'!!style-loader!css-loader?modules!./styles.css'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("ul",[t("li",[a._v("使用 "),t("code",[a._v("-!")]),a._v(" 前缀，将禁用所有已配置的 preLoader 和 loader，但是不禁用 postLoaders")])]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Styles "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'-!style-loader!css-loader?modules!./styles.css'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("选项可以传递查询参数，例如 "),t("code",[a._v("?key=value&foo=bar")]),a._v("，或者一个 JSON 对象，例如 "),t("code",[a._v('?{"key":"value","foo":"bar"}')]),a._v("。")]),a._v(" "),t("blockquote",[t("p",[t("em",[a._v("尽可能使用 "),t("code",[a._v("module.rules")]),a._v("，因为这样可以减少源码中样板文件的代码量，并且可以在出错时，更快地调试和定位 loader 中的问题")])])]),a._v(" "),t("h2",{attrs:{id:"_3-cli-方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-cli-方式"}},[a._v("#")]),a._v(" "),t("strong",[a._v("3. CLI 方式")])]),a._v(" "),t("p",[a._v("还可以通过 CLI 使用 loader：")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("webpack "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("module"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("bind pug"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("loader "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("module"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("bind "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'css=style-loader!css-loader'")]),a._v("\n")])])]),t("p",[a._v("这会对 "),t("code",[a._v(".jade")]),a._v(" 文件使用 "),t("code",[a._v("pug-loader")]),a._v("，以及对 "),t("code",[a._v(".css")]),a._v(" 文件使用 "),t("code",[a._v("style-loader")]),a._v(" 和 "),t("code",[a._v("css-loader")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"loader-特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loader-特性"}},[a._v("#")]),a._v(" "),t("strong",[a._v("loader 特性")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("loader 支持链式调用。链中的每个 loader 会将转换应用在已处理过的资源上。一组链式的 loader 将按照相反的顺序执行。链中的第一个 loader 将其结果（也就是应用过转换后的资源）传递给下一个 loader，依此类推。最后，链中的最后一个 loader，返回 webpack 所期望的 JavaScript。")])]),a._v(" "),t("li",[t("p",[a._v("loader 可以是同步的，也可以是异步的。")])]),a._v(" "),t("li",[t("p",[a._v("loader 运行在 Node.js 中，并且能够执行任何操作。")])]),a._v(" "),t("li",[t("p",[a._v("loader 可以通过 "),t("code",[a._v("options")]),a._v(" 对象配置（仍然支持使用 "),t("code",[a._v("query")]),a._v(" 参数来设置选项，但是这种方式已被废弃）。")])]),a._v(" "),t("li",[t("p",[a._v("除了常见的通过 "),t("code",[a._v("package.json")]),a._v(" 的 "),t("code",[a._v("main")]),a._v(" 来将一个 npm 模块导出为 loader，还可以在 module.rules 中使用 "),t("code",[a._v("loader")]),a._v(" 字段直接引用一个模块。")])]),a._v(" "),t("li",[t("p",[a._v("插件(plugin)可以为 loader 带来更多特性。")])]),a._v(" "),t("li",[t("p",[a._v("loader 能够产生额外的任意文件。")])])]),a._v(" "),t("p",[a._v("可以通过 loader 的预处理函数，为 JavaScript 生态系统提供更多能力。用户现在可以更加灵活地引入细粒度逻辑，例如：压缩、打包、语言翻译")]),a._v(" "),t("h2",{attrs:{id:"解析-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析-loader"}},[a._v("#")]),a._v(" "),t("strong",[a._v("解析 loader")])]),a._v(" "),t("p",[a._v("loader 遵循标准 "),t("code",[a._v("模块解析")]),a._v(" 规则。多数情况下，loader 将从 模块路径 加载（通常是从 "),t("code",[a._v("npm install")]),a._v(", "),t("code",[a._v("node_modules")]),a._v(" 进行加载）")]),a._v(" "),t("p",[a._v("预期 loader 模块导出为一个函数，并且编写为 Node.js 兼容的 JavaScript。通常使用 npm 进行管理 loader，但是也可以将应用程序中的文件作为自定义 loader。按照约定，loader 通常被命名为 "),t("code",[a._v("xxx-loader")]),a._v("（例如 "),t("code",[a._v("json-loader")]),a._v("）")])])}),[],!1,null,null,null);s.default=r.exports}}]);