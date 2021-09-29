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

## React 15-半自动批处理

我们先来看看 `React 15` ，`React` 应该就是在这个版本之后开始火起来的，也是在这个版本之后，`React` 的更新也变得越来越慢。

### 架构

这一版的架构，还比较简单，主要就是分 `Reconciler` 和 `Renderer` 两个部分。

![/notes/assets/performance/react/1d1558020ccf4de7a3505f32be45fddd_tplv-k3u1fbpfcp-watermark.awebp]

* `Reconciler`（协调器）—— 负责调用 `render` 生成虚拟 Dom 进行 Diff，找出变化后的虚拟 Dom

* `Renderer`（渲染器）—— 负责接到 `Reconciler` 通知，将变化的组件渲染在当前宿主环境，比如浏览器，不同的宿主环境会有不同的 `Renderer`。

### 批处理

下面我们来回顾一下，`React 15` 引入的一项优化：批处理，一道 `React` 的经典面试题：「setState 到底是同步的还是异步的」就是来源于此，我面试的时候也会经常问，具体的我在两年前的一篇文章中有介绍过：`由实际问题探究 setState 的执行机制` 。

比如下面的代码，在一个生命周期里调用了四次 `setState`，其中最后两次在 `setTimeout` 的回调中。

```js
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);   
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);   

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val); 
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  
    }, 0);
  }

  render() {
    return null;
  }
};
```

我们来考虑一下两种情况：

* 假设 `React` 完全没有批处理机制，那么执行一个 `setState` 就会立即触发一次页面渲染，打印顺序应该是 `1、2、3、4`

* 假设 `React` 有一个完美的批处理机制，那么应该等整个函数执行完了之后再统一处理所有渲染，打印顺序应该是 `0、0、0、0`

实际上，在这个版本上面代码的打印顺序是 `0、0、2、3`，从 `setTimeout` 回调里的打印结果我们就可以看出，`setState` 调用本身就是同步的，而外面之所以不能立即拿到结果就是因为 React 的批处理机制。

正是因为 `setState` 是同步的，当同时触发多次 `setState` 时浏览器会一直被JS线程阻塞，那么那么浏览器就会掉帧，导致页面卡顿，所以 `React` 才引入了批处理的机制，主要是为了将同一上下文中触发的更新合并为一个更新。

我们可以来看下源码中 `_processPendingState` 这个函数，这个函数是用来合并 `state` 暂存队列的，最后返回一个合并后的 `state`。

```js
 _processPendingState: function (props, context) {
  var inst = this._instance;
  var queue = this._pendingStateQueue;
  var replace = this._pendingReplaceState;
  this._pendingReplaceState = false;
  this._pendingStateQueue = null;

  if (!queue) {
   return inst.state;
  }

  if (replace && queue.length === 1) {
   return queue[0];
  }

  var nextState = _assign({}, replace ? queue[0] : inst.state);
  for (var i = replace ? 1 : 0; i < queue.length; i++) {
   var partial = queue[i];
   _assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
  }

  return nextState;
 },
```

我们只需要关注下面这段代码：

```js
_assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
```

如果传入的是对象，很明显会被合并成一次：

```js
Object.assign(
 nextState,
 {index: state.index+ 1},
 {index: state.index+ 1}
)
```

如果传入的是函数，函数的参数 `preState` 是前一次合并后的结果，所以计算结果是准确的。

如果在需要处理批处理的环境中（`React`生命周期、合成事件中）无论调用多少次 `setState`，都会不会执行更新，而是将要更新的 `state` 存入 `_pendingStateQueue`，将要更新的组件存入 `dirtyComponent`。当上一次更新机制执行完毕，以生命周期为例，所有组件，即最顶层组件 `didmount` 后会将 `isBranchUpdate` 设置为false。这时将执行之前累积的 `setState`。

`React` 内部会通过一个 `batchedUpdates` 函数去调用所有需要批处理的函数，执行逻辑大概如下：

```js
batchedUpdates(onClick, e);

export function batchedUpdates<A, R>(fn: A => R, a: A): R {
  // ...
  try {
    return fn(a);
  } finally {
    // ....
  }
}
```

因为 `batchedUpdates` 本身是同步调用的，如果 fn 内部有异步执行，这时批处理早已执行完，所以这个版本的批处理无法处理异步函数，也被称作是半自动批处理。

所以呢，`React` 给我们提供了 `unstable batchedUpdates` 这样的函数支持我们手动执行批处理。

### React 15 的缺陷

![](/notes/assets/performance/react/c5593d41ca9c4ca4b5c5fb0dc24c0e33_tplv-k3u1fbpfcp-watermark.awebp)

虽然在 `React 15` 中引入批处理这样的优化逻辑，但是由于 `React 15` 本身的架构是递归同步更新的，如果节点非常多，即使只有一次 `state` 变更，`React` 也需要进行复杂的递归更新，更新一旦开始，中途就无法中断，直到遍历完整颗树，才能释放主线程。

![](/notes/assets/performance/react/780b09e9503346eaa39dad7146917879_tplv-k3u1fbpfcp-watermark.awebp)

我们可以参考图中的这个例子，当层级很深时，递归更新时间超过了 `16ms` ，如果这时有用户操作或动画渲染等，就会表现为卡顿。

## React 16 - 让 Concurrent Mode 成为可能

### 架构

下面，我们再来看看 `React 16` 这个版本，相比 `React 15`，我们可以看到新的架构中多了一层 `Scheduler`，也就是调度器，然后在 `Reconciler` 这一层，使用 `Fiber` 架构进行了重构。具体的细节我们会在后面的章节进介绍。

![](/notes/assets/performance/react/a8434bf032094c1aaba7af6e8f2f24ed_tplv-k3u1fbpfcp-watermark.awebp)

* `Scheduler`（调度器）—— 调度任务的优先级，高优任务优先进入 `Reconciler`

* `Reconciler`（协调器）—— 负责找出变化的组件（使用 `Fiber` 重构）

* `Renderer`（渲染器）—— 负责将变化的组件渲染到页面上

`React` ，也在后续的几个大版本中，都沿用了这个架构。

除了架构上的变化，`React` 在这个版本提出了一个非常重要的概念，`Concurrent Mode`。

### Concurrent Mode

`React` 官方的描述，是这样的：

::: tip
Concurrent 模式是一组 React 的新功能，可帮助应用保持响应，并根据用户的设备性能和网速进行适当的调整。
:::

为了让应用保持响应，我们需要先了解是什么在制约应用保持响应？

里面比较重点的就是，让应用保持响应，我们可以先想一下到底是啥在限制应用保持响应呢？

在 `CPU` 上，我们的主要问题是，在 JS 执行超过 `16.6 ms` 时，页面就会产生卡顿，那么 `React`  的解决思路，就是在浏览器每一帧的时间中预留一些时间给 JS 线程，`React` 利用这部分时间更新组件。当预留的时间不够用时，`React` 将线程控制权交还给浏览器让他有时间渲染UI，`React` 则等待下一帧再继续被中断的工作。

其实，上面我们提到的，这种将长任务分拆到每一帧中，每一帧执行一小段任务的操作，就是我们常说的时间切片。

那么在 IO 上面，需要解决的是发送网络请求后，由于需要等待数据返回才能进一步操作导致不能快速响应的问题。`React` 希望通过控制组件渲染的优先级去解决这个问题。

实际上，`Concurrent Mode` 就是为了解决以上两个问题而设计的一套新的架构，重点就是，让组件的渲染 “可中断” 并且具有 “优先级”，其中包括几个不同的模块，他们各自负责不同的工作。 首先，我们先来看看，如何让组件的渲染 “可中断” 呢？

### 底层架构 - Fiber

在上面的章节我们讲到 `React15` 的 `Reconciler` 采用递归的方式执行，数据保存在递归调用栈中，这种递归的遍历方式肯定是无法中断的。

所以，`React` 花费2年时间重构完成了Fiber架构，`React16` 的 `Reconciler` 基于 `Fiber` 节点实现。每个 `Fiber` 节点对应一个 `React elemen`t，注意一下，这里是对应，而不是等于。我们调用 `render` 函数产生的结果是 `React element`，而 `Fiber` 节点，由 `React Element` 创建而来。

![](/notes/assets/performance/react/d581d9b5a3f74050a600d24c528c3e3b_tplv-k3u1fbpfcp-watermark.awebp)

下面是一个 `Fiber` 节点的示例，除了包含 组件的类型，组件对应的 `DOM` 信息之外，`Fiber` 节点还保存了本次更新中该组件改变的状态、要执行的工作，需要被删除，被插入页面中，还是被更新。

```js
function FiberNode(
  tag: WorkTag,
  pendingProps: mixed,
  key: null | string,
  mode: TypeOfMode,
) {
  // 作为静态数据结构的属性
  this.tag = tag;
  this.key = key;
  this.elementType = null;
  this.type = null;
  this.stateNode = null;

  // 用于连接其他Fiber节点形成Fiber树
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;
  this.ref = null;

  // 动态工作单元的属性
  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;
  this.dependencies = null;

  this.mode = mode;
  this.effectTag = NoEffect;
  this.nextEffect = null;
  this.firstEffect = null;
  this.lastEffect = null;

  // 调度优先级相关
  this.lanes = NoLanes;
  this.childLanes = NoLanes;

  // 指向该fiber在另一次更新时对应的fiber
  this.alternate = null;
}
```

另外，我们还可以看到当前节点与其他节点的链接关系，一个 `Fiber` 节点包括了他的 `child`（第一个子节点）、`sibling`（兄弟节点）、`return`（父节点）等属性。

#### 双缓存

![](/notes/assets/performance/react/97ccd97a30fa422fa7ffa1efc71326bd_tplv-k3u1fbpfcp-watermark.awebp)

在 `React` 中最多会同时存在两棵Fiber树。当前屏幕上显示内容对应的Fiber树叫做 `current Fiber` 树，正在内存中构建的Fiber树叫做 `workInProgress Fiber`树，他们通过一个 `alternate` 属性连接。

