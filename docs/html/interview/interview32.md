因为`http`是一种无状态请求，默认情况下第一次请求和下一次没什么关系，这种无状态的的好处是快速。

`cookie`是一种基于客户端（浏览器）的会话技术

特点：

* cookie存储数据在客户端浏览器。
* 浏览器对于单个cookie的大小有限制(4kb) ，对同一个域名下的总cookie数量也有限制(20个)。

作用：

* cookie一般用于存出少量的不太敏感的数据。
* 在不登录的情况下，完成服务器对客户端的身份识别。

`session`是服务端的会话技术，在一次会话的多次请求间共享数据，`Session`是保存在服务端的，有一个唯一标识，在服务端保存`Session`的方法很多，可以通过内存、数据库、文件都有，集群的时候也要考虑`Session`的转移，在大型的网站，一般会有专门的`Session`服务器集群。

特点：

* session用于存储一次会话的多次请求的数据，存在服务器端。
* session可以存储任意类型，任意大小的数据。

区别session与Cookie：

* session存储数据在服务器端，Cookie在客户端。
* session没有数据大小限制，Cookie有。
* session数据安全，Cookie相对于不安全

