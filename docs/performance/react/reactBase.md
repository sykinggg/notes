# React 运行时优化方案

## 几大 JS 框架的设计思路

![](/notes/assets/performance/react/ab64f152daea4ac7b135f65cb1ed180e_tplv-k3u1fbpfcp-watermark.awebp)

首先，是 `React`，`React` 是一个重运行时的框架，在数据发生变化后，并没有直接去操作 `dom`，而是生成一个新的所谓的虚拟 `dom`，它可以帮助我们解决跨平台和兼容性问题，并且通过 `diff` 算法得出最小的操作行为，这些全部都是在运行时来做的。

最近很火的 `Svelte` ，就是一个典型的重编译的框架，作为开发者我们只需要去写模版和数据，经过 `Svelte` 的编译和预处理，代码基本全部会解析成原生的 `DOM` 操作，`Svelte` 的性能也是最接近原生 `js` 的。

![](/notes/assets/performance/react/981d005ce5c349ba873894cd7947e57b_tplv-k3u1fbpfcp-watermark.awebp)

那么，`Vue` 这个框架，在运行时和预编译取了一个很好地权衡，它保留了虚拟 `dom`，但是会通过响应式去控制虚拟 `dom` 的颗粒度，在预编译里面，又做了足够多的性能优化，做到了按需更新。

## 什么是编译时优化

`Vue` 使用的是模版语法，模版 的特点，就是语法受限，我们可以使用 `v-if` `v-for` 这些指定的语法去编码，虽然这不够动态，但是由于语法是可枚举的，所以它可以在预编译层面做更多的预判，让 `Vue` 在运行时有更好的性能。下面我们可以看一个 `Vue 3.0` 具体在编译时所做的优化。

![](/notes/assets/performance/react/7097ad04c8c34b369780fa4d5a7d6980_tplv-k3u1fbpfcp-watermark.awebp)

传统 `vdom` 的 `Diff` 算法总归要按照 `vdom` 树的层级结构一层一层的遍历，所以 `diff` 性能会和模版的大小正相关，跟动态节点的数量无关。在一些组件整个模版内只有少量动态节点的情况下，这些遍历都是性能的浪费。

![](/notes/assets/performance/react/ba0b551523ad4ac39bb814bd2b87f283_tplv-k3u1fbpfcp-watermark.awebp)

比如说，上面的这个代码示例，这几个静态的节点在组件更新阶段，是不可能发生变化的。如果能在 `diff` 阶段跳过静态内容，那我们就可以避免无用的 dom 树的遍历和比对。

![](/notes/assets/performance/react/c78481a690bf426bbaf3f5efad3423be_tplv-k3u1fbpfcp-watermark.awebp)

在 `Vue3.0` 里面，就有这样一条类似的优化策略，它的 `compiler` 可以根据节点的动态属性，为每个 虚拟 `dom` 创建不同的 `patchflag`，比如说，节点具有动态的 `text`，或者具有动态的 `class`，都会被打上不同的 `patchflag`。

![](/notes/assets/performance/react/7ce4f6ed6ec9494491698a13392531b8_tplv-k3u1fbpfcp-watermark.awebp)

然后 `patchflag` 再配合 `block tree`，就可以做到对不同节点的靶向更新。

## 死磕运行时

![](/notes/assets/performance/react/4278c601cfad453eaf3afedd209b1cd5_tplv-k3u1fbpfcp-watermark.awebp)

我们再回来看 `React` ，它本身的思路是纯 `JS` 写法，这种方式非常灵活，但是，这也使它在编译时很难做太多的事情，像上面这样的编译时优化是很难实现的。所以，我们可以看到 `React` 几个大版本的的优化主要都在运行时。

那么，运行时我们主要关注什么问题呢？

![](/notes/assets/performance/react/c71fb7966f8e43348cb8f79735063425_tplv-k3u1fbpfcp-watermark.awebp)

首先，就是 CPU 的问题，主流浏览器的刷新频率一般是 `60Hz`，也就是每秒刷新 `60` 次，大概 `16.6ms` 浏览器刷新一次。由于 `GUI` 渲染线程和 `JS` 线程是互斥的，所以 `JS` 脚本执行和浏览器布局、绘制不能同时执行。

在这 `16.6ms` 的时间里，浏览器既需要完成 `JS` 的执行，也需要完成样式的重排和重绘，如果 `JS` 执行的时间过长，超出了 `16.6ms`，这次刷新就没有时间执行样式布局和样式绘制了，于是在页面上就会表现为卡顿。

`IO` 的问题就比较好理解了，很多组件需要等待一些网络延迟，那么怎么样才能在网络延迟存在的情况下，减少用户对网络延迟的感知呢？就是我们需要解决的问题。

好，刚才我们聊完了为什么 `React` 主要的优化策略都在运行时，以及运行时主要解决的问题，下面我们就来具体看一下，`React` 最近的这几个大的版本都有什么更新和变化。

