# babel 编译原理

## 基础原理

> Babel 是一个源到源的转换编译器（Transpiler），它的主要作用是将 JavaScript 的高版本语法（例如 ES6）转换成低版本语法（例如 ES5），从而可以适配浏览器的兼容性。

![demo](/notes/assets/jsInterview/c88916e811d348938f248080125a09b0_tplv-k3u1fbpfcp-watermark.awebp)

从上图可知，Babel 的编译过程主要可以分为三个阶段：

* `解析（Parse）`：包括词法分析和语法分析。词法分析主要把字符流源代码（`Char Stream`）转换成令牌流（ `Token Stream`），语法分析主要是将令牌流转换成抽象语法树（`Abstract Syntax Tree，AST`）。

* `转换（Transform）`：通过 Babel 的插件能力，将高版本语法的 AST 转换成支持低版本语法的 AST。当然在此过程中也可以对 AST 的 Node 节点进行优化操作，比如添加、更新以及移除节点等。

* `生成（Generate）`：将 AST 转换成字符串形式的低版本代码，同时也能创建 `Source Map` 映射。

具体的流程如下所示：

![demo](/notes/assets/jsInterview/deploy.awebp)

举个栗子，如果要将 TypeScript 语法转换成 ES5 语法：

```js
// 源代码
let a: string = 1;
// 目标代码
var a = 1;
```

### 6.1 解析（Parser）

Babel 的解析过程（源码到 AST 的转换）可以使用 [@babel/parser](https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-parser)，它的主要特点如下：

* 支持解析最新的 ES2020

* 支持解析 JSX、Flow & TypeScript

* 支持解析实验性的语法提案（支持任何 [Stage 0](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftc39%2Fproposals%2Fblob%2Fmaster%2Fstage-0-proposals.md) 的 PRS）
