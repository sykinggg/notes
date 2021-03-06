#
# setState 背后的批量更新如何实现
---

大部分情况下多次 `setState` 不会触发多次渲染，并且 `state` 的值也不是实时的，这样的做法能够减少不必要的性能消耗。

```js
handleClick () {
  // 初始化 `count` 为 0
  console.log(this.state.count) // -> 0
  this.setState({ count: this.state.count + 1 })
  this.setState({ count: this.state.count + 1 })
  console.log(this.state.count) // -> 0
  this.setState({ count: this.state.count + 1 })
  console.log(this.state.count) // -> 0
}
```

那么这个行为是如何实现的呢？答案是批量更新。接下来就来学习批量更新是如何实现的。

其实这个背后的原理相当之简单。假如 `handleClick` 是通过点击事件触发的，那么 `handleClick` 其实差不多会被包装成这样：

```js
isBatchingUpdates = true
try {
  handleClick()
} finally {
  isBatchingUpdates = false
  // 然后去更新
}
```

在执行 `handleClick` 之前，其实 React 就会默认这次触发事件的过程中如果有 `setState` 的话就应该批量更新。

当在 `handleClick` 内部执行 `setState` 时，更新状态的这部分代码首先会被丢进一个队列中等待后续的使用。然后继续处理更新的逻辑，毕竟触发 `setState` 肯定会触发一系列组件更新的流程。但是在这个流程中如果 React 发现需要批量更新 state 的话，就会立即中断更新流程。

也就是说，虽然在 `handleClick` 中调用了三次 `setState`，但是并不会走完三次的组件更新流程，只是把更新状态的逻辑丢到了一个队列中。当 `handleClick` 执行完毕之后会再执行一次组件更新的流程。

# Fiber
---

在 React 15 版本的时候，如果有组件需要更新的话，那么就会**递归向下遍历整个虚拟 DOM 树**来判断需要更新的地方。这种递归的方式`弊端在于无法中断，必须更新完所有组件才会停止`。这样的弊端会造成如果需要更新一些庞大的组件，那么在更新的过程中可能就会长时间阻塞主线程，从而造成用户的交互、动画的更新等等都不能及时响应。

React 的组件更新过程简而言之就是在持续调用函数的一个过程，这样的一个过程会形成一个虚拟的调用栈。假如控制这个调用栈的执行，把整个更新任务拆解开来，尽可能地将更新任务放到浏览器空闲的时候去执行，那么就能解决以上的问题。

那么现在是时候介绍 Fiber 了。Fiber 重新实现了 React 的核心算法，带来了杀手锏增量更新功能。它有能力将整个更新任务拆分为一个个小的任务，并且能控制这些任务的执行。

两个核心的技术:

* 新的数据结构 fiber

* 调度器

## 新的数据结构 fiber

可以把每个 fiber 认为是一个工作单元，执行更新任务的整个流程（不包括渲染）就是在反复寻找工作单元并运行它们，这样的方式就实现了拆分任务的功能。

拆分成工作单元的目的就是为了让能控制 stack frame（调用栈中的内容），可以随时随地去执行它们。由此使得在每运行一个工作单元后都可以按情况继续执行或者中断工作（中断的决定权在于调度算法）。

那么 fiber 这个数据结构到底长什么样呢？现在就让来一窥究竟。

fiber 内部其实存储了很多上下文信息，可以把它认为是改进版的虚拟 DOM，它同样也对应了组件实例及 DOM 元素。同时 fiber 也会组成 fiber tree，但是它的结构不再是一个树形，而是一个链表的结构。

<img :src="$withBase('/assets/reactIloveDeveplo/16c14ea212e58566.png')" alt="demo" />

> 以下是 `fiber` 中的一些重要属性：

```js
{
  ...
  // 浏览器环境下指 DOM 节点
  stateNode: any,

  // 形成列表结构
  return: Fiber | null,
  child: Fiber | null,
  sibling: Fiber | null,

  // 更新相关
  pendingProps: any,  // 新的 props
  memoizedProps: any,  // 旧的 props
  // 存储 setState 中的第一个参数
  updateQueue: UpdateQueue<any> | null,
  memoizedState: any, // 旧的 state

  // 调度相关
  expirationTime: ExpirationTime,  // 任务过期时间

  // 大部分情况下每个 fiber 都有一个替身 fiber
  // 在更新过程中，所有的操作都会在替身上完成，当渲染完成后，
  // 替身会代替本身
  alternate: Fiber | null,

  // 先简单认为是更新 DOM 相关的内容
  effectTag: SideEffectTag, // 指这个节点需要进行的 DOM 操作
  // 以下三个属性也会形成一个链表
  nextEffect: Fiber | null, // 下一个需要进行 DOM 操作的节点
  firstEffect: Fiber | null, // 第一个需要进行 DOM 操作的节点
  lastEffect: Fiber | null, // 最后一个需要进行 DOM 操作的节点，同时也可用于恢复任务
  ....
}
```

总的来说，可以认为 `fiber` 就是一个工作单元的数据结构表现，当然它同样也是调用栈中的一个重要组成部分。

> Fiber 和 fiber 不是同一个概念。前者代表新的调和器，后者代表 fiber node，也可以认为是改进后的虚拟 DOM。

## 调度器

每次有新的更新任务发生的时候，调度器都会按照策略给这些任务分配一个优先级。比如说动画的更新优先级会高点，离屏元素的更新优先级会低点。

通过这个优先级可以获取一个该更新任务必须执行的截止时间，优先级越高那么截止时间就越近，反之亦然。这个截止时间是用来判断该任务是否已经过期，如果过期的话就会马上执行该任务。

然后调度器通过实现 `requestIdleCallback` 函数来做到在浏览器空闲的时候去执行这些更新任务。

这其中的实现原理略微复杂。简单来说，就是通过定时器的方式，来获取每一帧的结束时间。得到每一帧的结束时间以后就能判断当下距离结束时间的一个差值。

如果还未到结束时间，那么也就意味着可以继续执行更新任务；如果已经过了结束时间，那么就意味着当前帧已经没有时间给执行任务了，必须把执行权交还给浏览器，也就是打断任务的执行。

另外当开始执行更新任务（也就是寻找工作单元并执行的过程）时，如果有新的更新任务进来，那么调度器就会按照两者的优先级大小来进行决策。如果新的任务优先级小，那么当然继续当下的任务；如果新的任务优先级大，那么会打断任务并开始新的任务。

## 总结

当交互事件调用 `setState` 后，会触发批量更新，在整个交互事件回调执行完之前 `state` 都不会发生变更。

回调执行完毕后，开始更新任务，并触发调度。调度器会给这些更新任务一一设置优先级，并且在浏览器空闲的时候去执行他们，当然任务过期除外（会立刻触发更新，不再等待）。

如果在执行更新任务的时候，有新的任务进来，会判断两个任务的优先级高低。假如新任务优先级高，那么打断旧的任务，重新开始，否则继续执行任务。