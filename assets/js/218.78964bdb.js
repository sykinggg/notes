(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{585:function(s,t,n){"use strict";n.r(t);var a=n(26),v=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"服务器基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务器基础"}},[s._v("#")]),s._v(" 服务器基础")]),s._v(" "),n("hr"),s._v(" "),n("h2",{attrs:{id:"nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" "),n("strong",[s._v("Nginx")])]),s._v(" "),n("p",[s._v("轻量级、高性能的 Web 服务器，在现今的大型应用、网站基本都离不开 Nginx，已经成为了一项必选的技术；其实可以把它理解成 入口网关，这里举个例子可能更好理解:")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"nginx 示例图",href:"/notes/assets/16a578069b43eb7c.png"}},[n("img",{attrs:{src:"/notes/assets/16a578069b43eb7c.png",alt:"nginx 示例图"}})])]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("特点")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("轻量级，配置方便灵活，无侵入性；")])]),s._v(" "),n("li",[n("p",[s._v("占用内存少，启动快，性能好；")])]),s._v(" "),n("li",[n("p",[s._v("高并发，事件驱动，异步；")])]),s._v(" "),n("li",[n("p",[s._v("热部署，修改配置热生效；")])])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("架构模型")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("基于 "),n("code",[s._v("socket")]),s._v(" 与 "),n("code",[s._v("Linux epoll (I/O 事件通知机制)")]),s._v("，实现了 "),n("code",[s._v("高并发")]),s._v("；")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("使用模块化、事件通知、回调函数、计时器、轮询实现非阻塞的异步模式；")])]),s._v(" "),n("li",[n("p",[s._v("磁盘不足的情况，可能会导致阻塞；")])])])]),s._v(" "),n("li",[n("p",[n("strong",[n("code",[s._v("Master-worker")]),s._v(" 进程模式")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Nginx 启动时会在内存中常驻一个 "),n("strong",[n("code",[s._v("Master")]),s._v(" 主进程")]),s._v("，功能:")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("读取配置文件；")])]),s._v(" "),n("li",[n("p",[s._v("创建、绑定、关闭 socket；")])]),s._v(" "),n("li",[n("p",[s._v("启动、维护、配置 worker 进程；")])]),s._v(" "),n("li",[n("p",[s._v("编译脚本、打开日志；")])])])]),s._v(" "),n("li",[n("p",[s._v("master 进程会开启配置数量的 "),n("strong",[n("code",[s._v("worker")]),s._v(" 进程")]),s._v("，比如根据 CPU 核数等:")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("利用 socket 监听连接，不会新开进程或线程，节约了创建与销毁进程的成本；")])]),s._v(" "),n("li",[n("p",[s._v("检查网络、存储，把新连接加入到轮询队列中，异步处理；")])]),s._v(" "),n("li",[n("p",[s._v("能有效利用 cpu 多核，并避免了线程切换和锁等待；")])])])])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("热部署模式")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("当修改配置热重启后，master 进程会以新的配置新创建 worker 进程，新连接会全部交给新进程处理；")])]),s._v(" "),n("li",[n("p",[s._v("老的 worker 进程会在处理完之前的连接后被 kill 掉，逐步全替换成新配置的 worker 进程；")])])])])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("配置")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("官网下载；")])]),s._v(" "),n("li",[n("p",[s._v("配置文件路径： "),n("code",[s._v("/usr/local/etc/nginx/nginx.conf")]),s._v("；")])]),s._v(" "),n("li",[n("p",[s._v("启动: 终端输入 "),n("code",[s._v("nginx")]),s._v("，访问 "),n("code",[s._v("localhost:8080")]),s._v(" 就能看到 "),n("code",[s._v("Welcome...")]),s._v("；")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("nginx -s stop")]),s._v(": 停止服务；")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("nginx -s reload")]),s._v(": 热重启服务；")])]),s._v(" "),n("li",[n("p",[s._v("配置代理: "),n("code",[s._v("proxy_pass")])]),s._v(" "),n("ul",[n("li",[s._v("在配置文件中配置即可完成；")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xx"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("常用场景")]),s._v(":")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("代理")]),s._v(":")]),s._v(" "),n("ul",[n("li",[s._v("其实 Nginx 可以算一层 "),n("strong",[s._v("代理服务器")]),s._v("，将客户端的请求处理一层后，再转发到业务服务器，这里可以分成两种类型，其实实质就是 "),n("strong",[s._v("请求的转发")]),s._v("，使用 Nginx 非常合适、高效；")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("正向代理")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("即用户通过访问这层正向代理服务器，再由代理服务器去到原始服务器请求内容后，再返回给用户；")])]),s._v(" "),n("li",[n("p",[s._v("例如常使用的 VPN 就是一种常见的正向代理模式。通常无法直接访问谷歌服务器，但是通过访问一台国外的服务器，再由这台服务器去请求谷歌返回给用户，用户即可访问谷歌；")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("特点")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("代理服务器属于 "),n("strong",[s._v("客户端层")]),s._v("，称之为正向代理；")])]),s._v(" "),n("li",[n("p",[s._v("代理服务器是 "),n("strong",[s._v("为用户服务")]),s._v("，对于用户是透明的，用户知道自己访问代理服务器；")])]),s._v(" "),n("li",[n("p",[s._v("对内容服务器来说是 "),n("strong",[s._v("隐藏")]),s._v(" 的，内容服务器并无法分清访问是来自用户或者代理；")])])])])])])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"正向代理示意图",href:"/notes/assets/16a57809b1887b38.png"}},[n("img",{attrs:{src:"/notes/assets/16a57809b1887b38.png",alt:"正向代理示意图"}})])]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("反向代理")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("用户访问头条的反向代理网关，通过网关的一层处理和调度后，再由网关将访问转发到内部的服务器上，返回内容给用户；")])]),s._v(" "),n("li",[n("p",[s._v("特点:")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("代理服务器属于 "),n("strong",[s._v("服务端层")]),s._v("，因此称为反向代理。通常代理服务器与内部内容服务器会隶属于同一内网或者集群；")])]),s._v(" "),n("li",[n("p",[s._v("代理服务器是 "),n("strong",[s._v("为内容服务器服务")]),s._v(" 的，对用户是隐藏的，用户不清楚自己访问的具体是哪台内部服务器；")])]),s._v(" "),n("li",[n("p",[s._v("能有效保证内部服务器的 "),n("strong",[s._v("稳定与安全")]),s._v("；")])])])])])])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"反向代理示意图",href:"/notes/assets/16a5780e66c024ca.png"}},[n("img",{attrs:{src:"/notes/assets/16a5780e66c024ca.png",alt:"反向代理示意图"}})])]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("反向代理的好处")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("安全与权限")]),s._v(":")]),s._v(" "),n("ul",[n("li",[s._v("用户访问必须通过反向代理服务器，也就是便可以在做这层做统一的请求校验，过滤拦截不合法、危险的请求，从而就能更好的保证服务器的安全与稳定；")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("负载均衡")]),s._v(": 能有效分配流量，最大化集群的稳定性，保证用户的访问质量；")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("负载均衡是基于反向代理下实现的一种 "),n("strong",[s._v("流量分配")]),s._v(" 功能，目的是为了达到服务器资源的充分利用，以及更快的访问响应；")])]),s._v(" "),n("li",[n("p",[s._v("其实很好理解，还是以上面银行的例子来看: "),n("strong",[s._v("通过门口的取号器，系统就可以根据每个柜台的业务排队情况进行用户的分，使每个柜台都保持在一个比较高效的运作状态，避免出现分配不均的情况")]),s._v("；")])]),s._v(" "),n("li",[n("p",[s._v("由于用户并不知道内部服务器中的队列情况，而反向代理服务器是清楚的，因此通过 Nginx，便能很简单地实现流量的均衡分配；")])]),s._v(" "),n("li",[n("p",[s._v("Nginx 实现: "),n("code",[s._v("Upstream")]),s._v("模块， 这样当用户访问 "),n("code",[s._v("http://xxx")]),s._v(" 时，流量便会被按照一定的规则分配到"),n("code",[s._v("upstream")]),s._v("中的3台服务器上；")])])])])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("http "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    upstream xxx "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3001")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.2")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3001")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.3")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3001")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("分配策略")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("服务器权重")]),s._v("(weight):")]),s._v(" "),n("ul",[n("li",[s._v("可以为每台服务器配置访问权重，传入参数weight，例如:")])])])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v(" upstream xxx "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3001")]),s._v(" weight"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.2")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3001")]),s._v(" weight"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.3")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3001")]),s._v(" weight"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[n("p",[n("strong",[s._v("时间顺序(默认)")]),s._v(": 按用户的访问的顺序逐一的分配到正常运行的服务器上；")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("连接数优先("),n("code",[s._v("least_conn")]),s._v(")")]),s._v(": 优先将访问分配到列表中连接数队列最短的服务器上；")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("响应时间优先("),n("code",[s._v("fair")]),s._v(")")]),s._v(": 优先将访问分配到列表中访问响应时间最短的服务器上；")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("ip_hash")]),s._v(": 通过 ip_hash 指定，使每个 ip 用户都访问固定的服务器上，有利于用户特异性数据的缓存，例如本地 session 服务等；")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("url_hash")]),s._v(": 通过 url_hash 指定，使每个 url 都分配到固定的服务器上，有利于缓存；")])])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("Nginx 对于前端的作用")]),s._v(":")]),s._v(" "),n("ol",[n("li",[n("strong",[s._v("快速配置静态服务器")]),s._v("，当访问 "),n("code",[s._v("localhost:80")]),s._v(" 时，就会默认访问到 "),n("code",[s._v("/Users/files/index.html")]),s._v("；")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                                                         \n    server_name localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                                               \n        \n    location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root   /Users/files"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        index  index.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[n("strong",[s._v("访问限制")]),s._v(": 可以制定一系列的规则进行访问的控制，例如直接通过 ip 限制:")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 屏蔽 192.168.1.1 的访问；")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许 192.168.1.2 ~ 10 的访问；")]),s._v("\nlocation / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    deny  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    allow "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.2/10"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    deny  all"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[n("strong",[s._v("解决跨域")]),s._v(": 其实跨域是 "),n("strong",[s._v("浏览器的安全策略")]),s._v("，这意味着只要不是通过浏览器，就可以绕开跨域的问题。所以只要通过在同域下启动一个 Nginx 服务，转发请求即可；")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("location ^~/api/ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重写请求并代理到对应域名下")]),s._v("\n    rewrite ^/api/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ /"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_pass https://www.cross-target.com/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[n("strong",[s._v("图片处理")]),s._v(": 通过 "),n("strong",[s._v("ngx_http_image_filter_module")]),s._v(" 这个模块，可以作为一层图片服务器的代理，在访问的时候 "),n("strong",[s._v("对图片进行特定的操作，例如裁剪，旋转，压缩等")]),s._v("；")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("本地代理，绕过白名单限制")]),s._v(": 例如在接入一些第三方服务时经常会有一些域名白名单的限制，如果在本地通过"),n("code",[s._v("localhost")]),s._v("进行开发，便无法完成功能。这里可以做一层本地代理，便可以直接通过指定域名访问本地开发环境；")])])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name www.toutiao.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        proxy_pass http://localhost:3000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" "),n("strong",[s._v("Docker")])]),s._v(" "),n("p",[s._v("Docker，是一款现在最流行的 "),n("strong",[s._v("软件容器平台")]),s._v("，提供了软件运行时所依赖的环境。")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("物理机")]),s._v(":")]),s._v(" "),n("ul",[n("li",[s._v("硬件环境，真实的 "),n("strong",[s._v("计算机实体")]),s._v("，包含了例如物理内存，硬盘等等硬件；")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("虚拟机")]),s._v(":")]),s._v(" "),n("ul",[n("li",[s._v("在物理机上 "),n("strong",[s._v("模拟出一套硬件环境和操作系统")]),s._v("，应用软件可以运行于其中，并且毫无感知，是一套"),n("strong",[s._v("隔离的完整环境")]),s._v("。本质上，它只是物理机上的一份 "),n("strong",[s._v("运行文件")]),s._v("。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("为什么需要虚拟机")]),s._v("？")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("环境配置与迁移:")]),s._v(" "),n("ul",[n("li",[s._v("在软件开发和运行中，环境依赖一直是一个很头疼的难题，比如想运行 node 应用，那至少环境得安装 node 吧，而且不同版本，不同系统都会影响运行。"),n("strong",[s._v("解决的办法")]),s._v("，就是的包装包中直接包含运行环境的安装，让同一份环境可以快速复制到任意一台物理机上。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("资源利用率与隔离")]),s._v(":")]),s._v(" "),n("ul",[n("li",[s._v("通过硬件模拟，并包含一套完整的操作系统，应用可以独立运行在虚拟机中，与外界隔离。并且可以在同一台物理机上，开启多个不同的虚拟机启动服务，即一台服务器，提供多套服务，且资源完全相互隔离，互不影响。不仅能更好提高资源利用率率，降低成本，而且也有利于服务的稳定性。")])])])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("传统虚拟机的缺点")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("资源占用大")]),s._v(":")]),s._v(" "),n("ul",[n("li",[s._v("由于虚拟机是模拟出一套 "),n("strong",[s._v("完整系统")]),s._v("，包含众多系统级别的文件和库，运行也需要占用一部分资源，单单启动一个空的虚拟机，可能就要占用 100+MB 的内存了。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("启动缓慢")]),s._v(":")]),s._v(" "),n("ul",[n("li",[s._v("同样是由于完整系统，在启动过程中就需要运行各种系统应用和步骤，也就是跟平时启动电脑一样的耗时。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("冗余步骤多")]),s._v(":")]),s._v(" "),n("ul",[n("li",[s._v("系统有许多内置的系统操作，例如用户登录，系统检查等等，有些场景其实要的只是一个隔离的环境，其实也就是说，虚拟机对部分需求痛点来说，其实是有点过重的。")])])])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("Linux 容器")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Linux 中的一项虚拟化技术，称为 Linux 容器技术(LXC)。")])]),s._v(" "),n("li",[n("p",[s._v("它在 "),n("strong",[s._v("进程层面")]),s._v(" 模拟出一套隔离的环境配置，但并没有模拟硬件和完整的操作系统。因此它完全规避了传统虚拟机的缺点，在启动速度，资源利用上远远优于虚拟机；")])])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("Docker")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Docker 就是基于 Linux 容器的一种上层封装，提供了更为简单易用的 API 用于操作 Docker，属于一种 "),n("strong",[s._v("容器解决方案")]),s._v("。")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("基本概念")]),s._v(": 在 Docker 中，有三个核心的概念:")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("镜像 ("),n("code",[s._v("Image")]),s._v(")")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("从原理上说，镜像属于一种 "),n("strong",[s._v("root 文件系统")]),s._v("，包含了一些系统文件和环境配置等，可以将其理解成一套 "),n("strong",[s._v("最小操作系统")]),s._v("。为了让镜像轻量化和可移植，Docker 采用了 "),n("strong",[s._v("Union FS 的分层存储模式")]),s._v("。将文件系统分成一层一层的结构，逐步从底层往上层构建，每层文件都可以进行继承和定制。这里从前端的角度来理解: "),n("strong",[s._v("镜像就类似于代码中的 class，可以通过继承与上层封装进行复用")]),s._v("。")])]),s._v(" "),n("li",[n("p",[s._v("从外层系统看来，一个镜像就是一个 "),n("code",[s._v("Image")]),s._v(" "),n("strong",[s._v("二进制文件")]),s._v("，可以任意迁移，删除，添加；")])])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("容器 ("),n("code",[s._v("Container")]),s._v(")")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("镜像是一份静态文件系统，无法进行运行时操作，就如"),n("code",[s._v("class")]),s._v("，如果不进行实例化时，便无法进行操作和使用。因此 "),n("strong",[s._v("容器可以理解成镜像的实例")]),s._v("，即 "),n("code",[s._v("new 镜像()")]),s._v("，这样便可以创建、修改、操作容器；一旦创建后，就可以简单理解成一个轻量级的操作系统，可以在内部进行各种操作，例如运行 node 应用，拉取 git 等；")])]),s._v(" "),n("li",[n("p",[s._v("基于镜像的分层结构，容器是 "),n("strong",[s._v("以镜像为基础底层")]),s._v("，在上面封装了一层 "),n("strong",[s._v("容器的存储层")]),s._v("；")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("存储空间的生命周期与容器一致；")])]),s._v(" "),n("li",[n("p",[s._v("该层存储层会随着容器的销毁而销毁；")])]),s._v(" "),n("li",[n("p",[s._v("尽量避免往容器层写入数据；")])])])]),s._v(" "),n("li",[n("p",[s._v("容器中的数据的持久化管理主要由两种方式:")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("数据卷 ("),n("code",[s._v("Volume")]),s._v(")")]),s._v(": 一种可以在多个容器间共享的特殊目录，其处于容器外层，并不会随着容器销毁而删除；")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("挂载主机目录")]),s._v(": 直接将一个主机目录挂载到容器中进行写入；")])])])])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("仓库 ("),n("code",[s._v("Repository")]),s._v(")")]),s._v(":")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("为了便于镜像的使用，Docker 提供了类似于 git 的仓库机制，在仓库中包含着各种各样版本的镜像。官方服务是 Docker Hub；")])]),s._v(" "),n("li",[n("p",[s._v("可以快速地从仓库中拉取各种类型的镜像，也可以基于某些镜像进行自定义，甚至发布到仓库供社区使用；")])])])])])])])])])])}),[],!1,null,null,null);t.default=v.exports}}]);