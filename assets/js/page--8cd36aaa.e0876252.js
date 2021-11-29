(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1006:function(t,s,e){"use strict";e.r(s);var n=e(1),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("不只是域名，这种问题针对的是不同环境的个性化环境变量如何设置的问题。\n解决思路：打包时通过nodejs来设置环境变量")]),t._v(" "),e("p",[t._v("以下为"),e("code",[t._v("create-react-app")]),t._v("中如何处理该问题的示例")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-scripts build"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build:staging"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export REACT_APP_STAGE=dev && npm run build"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in react component")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" stage "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REACT_APP_STAGE")]),t._v("\n")])])]),e("p",[t._v("如果是CRA的项目的话，可以使用"),e("code",[t._v(".env")]),t._v(" "),e("code",[t._v(".env.development")]),t._v(" "),e("code",[t._v(".env.production")]),t._v("文件来区分不同的环境；\n比如生产环境域名"),e("code",[t._v("http://www.prod.com")]),t._v("，开发环境域名"),e("code",[t._v("http://www.deve.com")]),t._v("，\n则可以分别设置"),e("code",[t._v("REACT_APP_BASE_URL = 'http://www.prod.com'")]),t._v("和"),e("code",[t._v("REACT_APP_BASE_URL = 'http://www.deve.com'")]),t._v("，\n然后在程序中使用"),e("code",[t._v("process.env.REACT_APP_BASE_URL")]),t._v("来获取基础路径，此时打包的时候会根据不同的环境打包不同的域名")])])}),[],!1,null,null,null);s.default=a.exports}}]);