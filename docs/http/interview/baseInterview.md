**1. http/https 协议**
---

* 1.0 协议缺陷:

    * 无法复用链接，完成即断开，**重新慢启动和 TCP 3次握手**

    * head of line blocking: **线头阻塞**，导致请求之间互相影响

* 1.1 改进:

    * **长连接**(默认 keep-alive)，复用

    * host 字段指定对应的虚拟站点

    * 新增功能:
        
        * 断点续传
        
        * 身份认证
        
        * 状态管理
        
        * cache 缓存

            * Cache-Control

            * Expires

            * Last-Modified

            * Etag

* 2.0:

    * 多路复用

    * 二进制分帧层: 应用层和传输层之间

    * 首部压缩

    * 服务端推送

* https: 较为安全的网络传输协议

    * 证书(公钥)

    * SSL 加密

    * 端口 443

* TCP:

    * 三次握手

    * 四次挥手

    * 滑动窗口: 流量控制

    * 拥塞处理

        * 慢开始

        * 拥塞避免

        * 快速重传

        * 快速恢复

* 缓存策略: 可分为 **强缓存** 和 **协商缓存**

    * Cache-Control/Expires: 浏览器判断缓存是否过期，未过期时，直接使用强缓存，**Cache-Control的 max-age 优先级高于 Expires**

    * 当缓存已经过期时，使用协商缓存

        * 唯一标识方案: Etag(response 携带) & If-None-Match(request携带，上一次返回的 Etag): 服务器判断资源是否被修改，

        * 最后一次修改时间: Last-Modified(response) & If-Modified-Since (request，上一次返回的Last-Modified)

            * 如果一致，则直接返回 304 通知浏览器使用缓存

            * 如不一致，则服务端返回新的资源

**2. 常见状态码**
---

* 1xx: 接受，继续处理

* 200: 成功，并返回数据

* 201: 已创建

* 202: 已接受

* 203: 成为，但未授权

* 204: 成功，无内容

* 205: 成功，重置内容

* 206: 成功，部分内容

* 301: 永久移动，重定向

* 302: 临时移动，可使用原有URI

* 304: 资源未修改，可使用缓存

* 305: 需代理访问

* 400: 请求语法错误

* 401: 要求身份认证

* 403: 拒绝请求

* 404: 资源不存在

* 500: 服务器错误

**3. get / post**
---

* get: 缓存、请求长度受限、会被历史保存记录

    * 无副作用(不修改资源)，幂等(请求次数与资源无关)的场景

* post: 安全、大数据、更多编码类型

两者详细对比如下图:

![get&post对比](https://user-gold-cdn.xitu.io/2019/2/14/168e9d9050b9d08a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

[get&post对比](https://user-gold-cdn.xitu.io/2019/2/14/168e9d9050b9d08a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

**4. Websocket**
---

Websocket 是一个 **持久化的协议**， 基于 http ， 服务端可以 **主动 push**

* 兼容：

    * FLASH Socket

    * 长轮询： 定时发送 ajax

    * long poll： 发送 --> 有消息时再 response

* `new WebSocket(url)`

* `ws.onerror = fn`

* `ws.onclose = fn`

* `ws.onopen = fn`

* `ws.onmessage = fn`

* `ws.send()`

**引申的问题：**

> 对于低端不支持websocket的浏览器，一般有几个解决方案

1. 使用轮询或长连接的方式实现伪`websocket`的通信

2. 使用flash或其他方法实现一个[`websocket`客户端](https://segmentfault.com/q/1010000005000671/a-1020000005003936)

3. 引入`SockJS`库，他是JavaScript的一个库，支持`websocket`的浏览器会优先使用原生的websorcket，如果不支持，则会使用引用的库文件。

4. 引用`socket.IO`的库文件，这同样是基于时间的双向通信，如何不支持则会使用替代的方案。

**5. TCP三次握手**
---

建立连接前，客户端和服务端需要通过握手来确认对方:

* 客户端发送 syn(同步序列编号) 请求，进入 syn_send 状态，等待确认

* 服务端接收并确认 syn 包后发送 syn+ack 包，进入 syn_recv 状态

* 客户端接收 syn+ack 包后，发送 ack 包，双方进入 established 状态

**6. TCP四次挥手**
---

* 客户端 -- FIN --> 服务端， FIN—WAIT

* 服务端 -- ACK --> 客户端， CLOSE-WAIT

* 服务端 -- ACK,FIN --> 客户端， LAST-ACK

* 客户端 -- ACK --> 服务端，CLOSED

**7. Node 的 Event Loop: 6个阶段**
---

* timer 阶段: 执行到期的`setTimeout / setInterval`队列回调

* I/O 阶段: 执行上轮循环残流的`callback `

* idle, prepare

* poll: 等待回调

    1. 执行回调

    2. 执行定时器

        * 如有到期的`setTimeout / setInterval`， 则返回 timer 阶段

        * 如有`setImmediate`，则前往 check 阶段

* check

    * 执行`setImmediate`

* close callbacks

**8.跨域**
---

* JSONP: 利用`<script>`标签不受跨域限制的特点，缺点是只能支持 get 请求

```javascript
function jsonp(url, jsonpCallback, success) {
    const script = document.createElement('script')
    script.src = url
    script.async = true
    script.type = 'text/javascript'
    window[jsonpCallback] = function(data) {
        success && success(data)
    }
    document.body.appendChild(script)
}
```

* 设置 `CORS: Access-Control-Allow-Origin：*`

* postMessage

**9.安全**

* XSS攻击: 注入恶意代码

    * cookie 设置 httpOnly

    * 转义页面上的输入内容和输出内容

* CSRF: 跨站请求伪造，防护:

    * get 不修改数据

    * 不被第三方网站访问到用户的 cookie

    * 设置白名单，不被第三方网站请求

    * 请求校验