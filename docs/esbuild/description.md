# 基本概念

## 编译速度

![demo](/notes/assets/design/1629444255384.jpg)

### 1.它是用Go语言编写的，编译成可执行代码

JavaScript必须基于解释器的node环境才能执行，所以当webpack等工具解释完本身的代码后，可能esbuild已经完成编译工作了，而这时候webpack才开始执行编译。

此外，Go的核心设计是并行的，而JavaScript不是。

Go有线程之间的共享内存，而JavaScript则必须在线程之间进行数据序列化。

Go和JavaScript都有并行的垃圾收集器，但Go的堆是在所有线程之间共享的，而JavaScript的每个线程都有一个独立的堆。JavaScript工作线程并行量减少了一半，因为还有一半CPU核心正忙于为另一半收集垃圾。

### 2.并行被大量使用

esbuild内部的算法是经过精心设计的，以尽可能使所有可用的CPU核心完全饱和。

大致有三个阶段：解析、连接和代码生成。解析和代码生成是大部分的工作，并且是完全可并行的。

由于所有线程都共享内存，在编译导入相同的JavaScript库的不同入口点时，工作可以很容易地被分享。大多数现代计算机都有很多内核，所以并行化是一个很大的性能提升。

### 3.esbuild中的所有内容都是从头开始编写的

自己编写而不是使用第三方库有很多性能上的好处。可以从一开始就考虑到性能问题，以确保所有的东西都使用一致的数据结构，避免昂贵的转换，而且在必要时可进行广泛的架构变更。当然，缺点是这是一个很大的工作量。

### 4.内存得到有效利用

编译器在理想情况下大多是输入长度的O(n)复杂性。因此，如果你正在处理大量的数据，内存访问速度可能会严重影响性能。你需要对数据处理的越少，编译器速度就越快。

## Api

可以通过以下三种方式之一访问 API：在命令行上、在 JavaScript 中和在 Go 中。三种语言的概念和参数在很大程度上是相同的

esbuild 的 API 中有两个主要的 API 调用：transform 和 build。

<CodeGroup>
<CodeGroupItem title="cli">
</CodeGroupItem>
<CodeGroupItem title="js">
</CodeGroupItem>
<CodeGroupItem title="go">
</CodeGroupItem>
</CodeGroup>