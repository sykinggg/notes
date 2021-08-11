(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{409:function(t,s,e){"use strict";e.r(s);var a=e(26),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"react-源码解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-源码解析"}},[t._v("#")]),t._v(" React 源码解析")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://react.jokcy.me/book/flow/render-root.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("学习链接"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("React Fiber")]),t._v("中关于"),e("code",[t._v("TypeOfMode")]),t._v("的设计的时候")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" NoContext "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" AsyncMode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b001")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" StrictMode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b010")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ProfileMode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h2",{attrs:{id:"react-的调度过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-的调度过程"}},[t._v("#")]),t._v(" "),e("strong",[t._v("React 的调度过程")]),t._v("：")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"React 的调度过程",href:"https://k2facq.dm.files.1drv.com/y4moYVQixfYY02TZJM_jIqaj5ynq3-40CaJedwTfjeVz3H19UKoFIhbFI5ws8RJhCE4KJk73oF_EpFnR56ylk6KI6NYxA0UBIWGNfYceY0hm06ITSqniDIRBF-7LUiut5TUfEMiFvNzepHsF7PAQR4n3uWCsofOouwaIVXuiSlA1YisHyb70dffwYh64SaeYqYC4ENuEWYqm_qjg9KDjCnoTw?width=1763&height=1694&cropmode=none"}},[e("img",{attrs:{src:"https://k2facq.dm.files.1drv.com/y4moYVQixfYY02TZJM_jIqaj5ynq3-40CaJedwTfjeVz3H19UKoFIhbFI5ws8RJhCE4KJk73oF_EpFnR56ylk6KI6NYxA0UBIWGNfYceY0hm06ITSqniDIRBF-7LUiut5TUfEMiFvNzepHsF7PAQR4n3uWCsofOouwaIVXuiSlA1YisHyb70dffwYh64SaeYqYC4ENuEWYqm_qjg9KDjCnoTw?width=1763&height=1694&cropmode=none",alt:"React 的调度过程"}})])]),t._v(" "),e("h2",{attrs:{id:"渲染更新的过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染更新的过程"}},[t._v("#")]),t._v(" "),e("strong",[t._v("渲染更新的过程")]),t._v(":")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"渲染更新的过程",href:"https://jgfacq.dm.files.1drv.com/y4mlappMlJu85m_1P4H0wcoQBX_N8AyZoYJxw5JT19hm1sJ6dsblS5ZQOmdtHtFklf3l-lRtmX1nGaw31EUda8tOy9116LJPQlOpjHMOssHTq4Xue4eIiG7MSyp5MZ0KOeWP8fxvJCOsoStnEw8rbSlDjxjdO-I9faPAUQtIklI1zA-qvENd8J8D8y8fiks23W2j3Ur-KoxYu__6fsgCbXzHA?width=1923&height=1793&cropmode=none"}},[e("img",{attrs:{src:"https://jgfacq.dm.files.1drv.com/y4mlappMlJu85m_1P4H0wcoQBX_N8AyZoYJxw5JT19hm1sJ6dsblS5ZQOmdtHtFklf3l-lRtmX1nGaw31EUda8tOy9116LJPQlOpjHMOssHTq4Xue4eIiG7MSyp5MZ0KOeWP8fxvJCOsoStnEw8rbSlDjxjdO-I9faPAUQtIklI1zA-qvENd8J8D8y8fiks23W2j3Ur-KoxYu__6fsgCbXzHA?width=1923&height=1793&cropmode=none",alt:"渲染更新的过程"}})])])])}),[],!1,null,null,null);s.default=r.exports}}]);