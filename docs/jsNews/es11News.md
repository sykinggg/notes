# 2022 新特性提案

## 1. error.cause

这是一个关于错误捕获的特性，下文代码列举了过去我们常使用的三种捕获错误的方式。

```js
async function doJob() {
  const rawResource = await fetch('/test')
    .catch(err => {
      // 下面三种是过去常用的一些捕获错误的代码方式
      
      // 1. throw new Error('下载资源失败: ' + err.message);
      
      // 2. const wrapErr = new Error('下载资源失败');
      //    wrapErr.cause = err;
      //    throw wrapErr;
      
      // 3. class CustomError extends Error {
      //      constructor(msg, cause) {
      //        super(msg);
      //        this.cause = cause;
      //      }
      //    }
      //    throw new CustomError('下载资源失败', err);
    })
}

await doJob(); // => Uncaught Error: 下载资源失败: Failed to fetch
```

过去的捕获错误的写法比较复杂，而且开发人员对具体使用哪个属性来获取错误的上下文没有达成共识。

新特性是在 `Error` 构造函数上添加一个附加选项参数 `cause`，其值将作为属性分配给错误实例。因此，可以将错误链接起来。

```js
async function doJob() {
  const rawResource = await fetch('/test')
    .catch(err => {
      throw new Error('下载资源失败', { cause: err });
    });
}

try {
  await doJob();
} catch (e) {
  console.log(e);
  console.log('Caused by', e.cause);
}
// Error: 下载资源失败
// Caused by TypeError: Failed to fetch
```

## 2. Top-level await

我们现在可以在模块的顶层使用 `await`， 并且不再需要配合 `async`函数使用。

`Top-level await` 可以在实际生产中有以下用途。

* 动态加载模块

```js
const strings = await import(`/i18n/${navigator.language}`);
```

这允许模块使用运行时值来确定依赖关系。这对于开发/生产拆分、国际化、环境拆分等非常有用。

* 资源初始化

```js
const connection = await dbConnector();
```

允许模块表示资源。

* 依赖回退

```js
let jQuery;
try {
  jQuery = await import('https://cdn-a.com/jQuery');
} catch {
  jQuery = await import('https://cdn-b.com/jQuery');
}
```

依赖发生故障时，可以回退到旧版本，防止程序崩溃。

## 3. Object.hasOwn(obj, propKey)

`Object.hasOwn()` 方法是比 `Object.prototype.hasOwnProperty()` 方法更加 **便捷** 和 **安全** 的策略。

例如 `Object.create(null)` 创建一个不继承自 `Object.prototype` 的对象，使 `hasOwnProperty` 方法无法访问。

```js
Object.create(null).hasOwnProperty("foo")
// Uncaught TypeError: Object.create(...).hasOwnProperty is not a function
```

**Object.hasOwn(obj, propKey)** 使用案例。

```js
let object = { foo: false }
Object.hasOwn(object, "foo") // true

let object2 = Object.create({ foo: true })
Object.hasOwn(object2, "foo") // false

let object3 = Object.create(null)
Object.hasOwn(object3, "foo") // false
```

## 4. RegExp match indices

正则表达式，继 `/i` `/m` `/g` 之后，在匹配模式上新加入了 `/d`,使用 `/d` 之后，当我们再使用`exec()` 方法时，返回值会增加一个新的属性 `indices`。

简单回顾下`exec()` 方法。

相比于常见的 `search()` `test()`而言，`exec()` 匹配字符串的信息更丰富，它返回一个数组，其中存放匹配的结果，如果未找到匹配，则返回值为 null

```js
let regx = /a+(?<Z>z)?/g; 
let string = "xaaaz"
let result = regx.exec(string);
// ['aaaz', 'z', index: 1, input: 'xaaaz', groups: {Z:'z'}]
```

`(?<name>)`是 **ES 2018** 加入的正则语法，允许我们把部分正则内容进行 `命名` 并且 `分组`，上述例子中，`/a+(?<Z>z)?/g`表示匹配至少一个 **a** 以及 **0** 个或者 **1** 个 **z** ，其中包含一个命名为 **Z** 的捕获组，配合 `exec()` 方法使用时，我们可以直接获取到捕获组的信息：`result.groups`，如果正则中没用使用捕获组的正则语法，则 **groups** 为 **undefined**

尽管 `exec()` 返回值提供了 **index 属性** 来展示首次匹配的索引位置，**groups 属性** 提供了捕获组的信息，但在一些更高级的场景中，这些信息可能并不足够。例如，**语法高亮显示** 的实现不仅需要匹配的索引，还需要单个捕获组的开始和结束索引，即上述例子中 `Z` 捕获组的索引信息。

新特性中，使用 `/d`匹配模式时，`exec()` 方法的返回值会增加一个新的属性 `indices`。

```js
const re = /a+(?<Z>z)?/d;
const s = "xaaaz";
console.log("匹配结果：", re.exec(s));
//['aaaz', 'z', index: 1, input: 'xaaaz', groups: {Z:'z'}, indices: [[1,5],[4,5]]
```

`indices`属性包含了捕获组的信息，其中，**[ 1 , 5 ]** 为 `aaaz` 全部字符串的匹配信息，**[ 4 , 5 ]** 为 `Z` 捕获组的匹配索引信息。

## 5. New members of classes

* 简易变量声明

**class** 支持在 `constructor` 外部直接声明变量，过去我们必须在内部声明。

```js
class Cat {
  gender = 'female'
}
let cat = new Cat()
cat.gender // female
```

* 私有变量和私有方法

封装是面向对象编程的核心原则之一。它通常使用可见性修饰符来实现，例如 `private` or `public`。

**class** 的最近改动里加入了 `#`，用来将类中的变量、方法或访问器标记为私有，从外部访问私有化的内容，会直接报错。

```js
class Cat {
  #name = 'kitty'
  gender = 'female'

  setName = () => {
    this.#name = 'jack'
      console.log(this.#name)
  }

  #setGender = () => {
    this.gender= 'male'
  }
}
let cat = new Cat()
cat.#name // SyntaxError
cat.gender // 'female'
cat.setName() // 'jack'
cat.#setGender // SyntaxError
```

* 私有字段的存在性检查

由于尝试访问对象上不存在的私有字段会报错从而引发程序异常，因此需要能够检查对象是否具有给定的私有字段。

**class** 引入了关键词 `in` 来解决访问私有变量直接报错的问题。

```js
class Example {
  #field

  static isExampleInstance(object) {
    return #field in object;
  }
}
const ex = new Example()
Example.isExampleInstance(ex) // true
Example.isExampleInstance({}) // false
```

`isExampleInstance` 方法可以判断 `object` 是否包含 `#field`。

## 6. at（）

`.at()`支持我们读取给定索引处的元素。它可以接受`负索引`来从给定数据类型的`末尾`读取元素。

过去我们需要这样来获取数组末尾元素：

```js
const arr = [1,2,3,4,5]; 
arr[arr.length-1] // 5
```

现在 `at()` 可以轻松完成任务：

```js
const arr = [1,2,3,4,5]; 
arr.at(-1) // 5
```

代码的语义会更直观更清爽，非常的方便！

支持类型：

* String

* Array

* Typed Array

## 7. Array Group

> 用于数组元素分类

给数组Array的原型上添加了两个方法，`groupBy`和`groupByToMap`。内容比较简单，直接看使用案例就可以看懂，这里不再赘述。

* groupBy

使用案例：

将数组中的元素，按照数字 ‘40’ 来进行分类

```js
let array = [23, 56, 78, 42, 11, 49]
array.groupBy((item,index) => {
    return item > 40 ? '比40大' : "比40小"
})
// {'比40大': [56, 78, 42, 49] , '比40小': [23,11]}
```

`groupBy`方法返回了一个新的匿名对象，其中对象的键key为`groupBy`的回调函数的返回值。

如果没有`groupBy`提案，我们过去是这么实现：

```js
Array.prototype.groupBy = function(callback) {
    const object = {};
    for(let i =0; i < this.length; i++) {
        let key = callback(this[i],i,this);
        if(object[key]) {
            object[key].push(this[i])
        } else {
            object[key] = [this[i]]
        }
    }
    return object;
}
```

* groupByToMap

`groupByToMap`方法返回了一个常规的Map，其中Map的键key为`groupBy`的回调函数的返回值。

使用案例：

```js
const array = [1, 2, 3, 4, 5];
const odd  = { odd: true };
const even = { even: true };
array.groupByToMap((num, index, array) => {
  return num % 2 === 0 ? even: odd;
});

// =>  Map { {odd: true}: [1, 3, 5], {even: true}: [2, 4] }
```

如果没有`groupByToMap`提案，我们过去是这么实现：

```js
Array.prototype.groupByToMap = function(callback) {
    const mapObject = new Map();
    for(let i =0; i < this.length; i++) {
        let key = callback(this[i],i,this);
        if(mapObject.get(key)) {
            mapObject.get(key).push(this[i])
        } else {
            mapObject.set(key,[this[i]])
        }
    }
    return mapObject;
}
```

**评价**：实际开发中，类似这样的数组 `[ 1 , 2 , 3 , 4 , 5 ]`，如果要分奇数偶数的话，需要重新声明一个对象来存储。

```js
const obj = { odd: [1, 3, 5], even: [2, 4] }
```

而`groupBy`提案返回的是一个`null-prototype`对象，`{ odd: [1, 3, 5], even: [2, 4] }`,不需要再声明一个具名对象。`groupByToMap`返回的是一个常规Map对象，总体来说比较实用。

## 8. Array find from last

> 从数组的最后一个到第一个查找元素的方法

使用案例：

按照以前的js写法，要想倒叙查询数组元素。

先进行一次反转`reverse`，反转一次数组，再使用`find`进行查询。

```js
const array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];

[...array].reverse().find(n => n.value % 2 === 1); 
// { value: 3 }
```

或者在原型上挂一个方法来实现：

```js
Array.prototype.findLast = function(callback) {
    const len = this.length;
    for(let i = len - 1; i > 0; i--) {
        if(callback(this[i],i,this)) {
            return this[i]
        }
    }
    return -1
}
```

`Array find from last` 提案方案：

通过提案提供的方法`findLast`，支持了直接逆向查询数组。

```js
array.findLast(n => n.value % 2 === 1); // { value: 3 }
```

**评价**：从性能看，减少了一次数组反转，确实有看的见的优化。从语义上来说，有正向查询就应该有反向查询，符合人们的思维习惯，总体来说比较实用。

## 9. Resizable and growable Array Buffer

> 扩展`ArrayBuffer`构造函数，采用额外的最大长度，以允许就地增长和缩小缓冲区。

在介绍提案之前，需要提前了解下什么是`ArrayBuffer`，它是解决什么问题的，怎么用，在哪里用。这样会方便理解该提案。以下介绍ArrayBuffer的内容我已经过滤了很多细枝末节的理论，希望能做到之前没有这方面基础的同学也可以一次性读懂`ArrayBuffer`。

`Array Buffer`这个概念，大家在日常开发中几乎不会直接接触这个概念，但和我们关系却很密切。

简单理解`Array Buffer`，可以说它让ECMAScript操作内存空间成为可能。它的诞生是因为一个项目，WebGL，这个项目里需要浏览器与显卡进行频繁的通信，而以往的文本传输，需要把文本'hello wrold'，翻译01010111...类似这样的机器语言，非常消耗性能，而直接以二进制的形式通信就非常有必要了，Array Buffer也就此诞生；

```js
const buffer = new ArrayBuffer(32);
```

这样创建了一段32字节的内存空间，buffer。有一些约定好的特性，比如生成的`ArrayBuffer`，不能被直接修改，需要通过
TypedArray视图和DataView视图修改，TypedArray就是一系列更改内存的构造函数统称，比如`Uint8Array`，`Uint16Array`，`Uint32Array`，DataView是更灵活的操作`ArrayBuffer`的视图。大概是因为最开始设计是为了解决图像绘制的问题，所以就起名叫各种视图，记住就ok了。

以下是`TypedArray`视图支持的一些数据类型

<table>
  <thead>
    <tr>
      <th>数据类型</th>
      <th>字节长度</th>
      <th>含义</th>
      <th>对应的 C 语言类型</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Int8</td>
      <td>1</td>
      <td>8 位带符号整数</td>
      <td>signed char</td>
    </tr>
    <tr>
      <td>Int16</td>
      <td>2</td>
      <td>16 位带符号整数</td>
      <td>short</td>
    </tr>
    <tr>
      <td>Int32</td>
      <td>4</td>
      <td>32 位带符号整数</td>
      <td>int</td>
    </tr>
  </tbody>
</table>

```js
//生成12字节的内存空间
const buffer = new ArrayBuffer(12);
//用Int32Array视图读取这个内存空间
const x1 = new Int32Array(buffer);
//直接修改
x1[0] = 1;//1
//用Int8Array视图读取这个内存空间
const x2 = new Uint8Array(buffer);
x2[0]  = 2;//2
//x1的值发生变化
x1[0] // 2
```

上面代码对同一段内存，分别建立两种视图：32 位带符号整数（`Int32Array`构造函数）和 8 位不带符号整数（`Uint8Array`构造函数）。由于两个视图对应的是同一段内存，一个视图修改底层内存，会影响到另一个视图。

### ArrayBuffer 的一些理解

`Array Buffer`是一个二进制数组，也可以说是一个构造函数，但本质上是一个由一堆 **0 1** 组成的缓存空间，他在内存中主要发挥数据缓冲的作用。简单理解就是计算机要运行，就是cpu要处理 **0 1** 组成的二进制数据，但有时二进制数据来的又快又多，cpu还在处理其他任务，那这些数据就得原地等待，如果cpu处理任务很快，但是数据传输的慢了，就得让cpu空闲等待数据，造成资源浪费，ArrayBuffer就是充当一个缓冲内存空间。让这个内存空间随时数据存在，不会让数据和cpu等待。

### ArrayBuffer 遇到的瓶颈

现有的`ArrayBuffer`存在一个问题，当你正在的`ArrayBuffer`空间不够需要增加空间时，需要调用ArrayBuffer原型上的一个方法，ArrayBuffer.prototype.slice()，使用如下

```js
const buffer = new ArrayBuffer(8);
const newBuffer = buffer.slice(0, 3);
```

上面代码拷贝buffer对象的前 3 个字节（从 0 开始，到第 3 个字节前面结束），生成一个新的ArrayBuffer对象。

slice方法其实包含两步，第一步是先`分配一段新内存`，第二步是将原来那个ArrayBuffer对象`拷贝`过去。

### 改造 ArrayBuffer

以上就介绍完了ArrayBuffer，和它目前面临的瓶颈。下面讲一下本次进入stage3的提案。

本提案拓展了ArrayBuffer的构造函数，增加最大和最小伸缩长度的配置---`maximumByteLength`。 重写了`transfer`方法，可以用来直接转移内存空间，不必再复制一份内存再挪动。

改造之后的`ArrayBuffer`构造函数

```js
class ArrayBuffer {
    //options为配置项 
    //maximumByteLength 配置内存伸缩长度
    constructor(byteLength,[ options ]);
    
    //挪动内存
    transfer(newByteLength);
    
    //更改内存长度
    resize(newByteLength);
    
    //分离出一个不可调整大小的ArrayBuffer
    slice(start, end);
    
    //判断是否可以伸缩
    resizable();
    
    //获取配置的最大内存长度
    maximumByteLength();
    
    //获取当前内存长度
    byteLength();
}
```

使用案例：

声明一个**1024字节**的内存，并把最大内存长度设置为**1024的平方**

```js
//增加配置项，maximumByteLength，最大内存长度允许到1024的平方
let rab = new ArrayBuffer(1024, { maximumByteLength: 1024 ** 2 });

//当前内存长度 1024字节
assert(rab.byteLength === 1024);

//最大长度 1024平方字节
assert(rab.maximumByteLength === 1024 ** 2);

//可以就地更改长度
assert(rab.resizable);

//更改内存长度
rab.resize(rab.byteLength * 2);

//内存长度发生变化
assert(rab.byteLength === 1024 * 2);
```

`transfer`是对内存进行挪动

```js
let ab = rab.transfer(1024);
```

上面是挪动从0开始的1024字节

```js
assert(rab.byteLength === 0);
assert(rab.maximumByteLength === 0);
```

上面是原来的内存（rab）被分离，并清除内存。

```js
// 内存被转移到ab
assert(!ab.resizable);
assert(ab.byteLength === 1024);
```

内存成功被转移到ab

### SharedArrayBuffer

> `SharedArrayBuffer` 顾名思义就是可以共享的ArrayBuffer

`ArrayBuffer`提案里，将`SharedArrayBuffer`也进行了改动，让他支持可以增长内存。

先简单介绍下什么是`SharedArrayBuffer`。

在ECMAScript里有一些计算任务通常会让在worker线程里，每个worker线程都是互相隔离的，他们之间的通信需要通过postMessage来完成。

除了可以进行字符串数外，也可以进行二进制数据通信，但需要将二进制数据复制一份再用过postMessage传递给另一个线程，数据量很大时效率会变低，所以在 **es2017** 时有人提出了可以共享的`SharedArrayBuffer`，js的主线程和worker线程可以共享这块内存空间，同时进行数据读写，避免了复制二进制数据带来的性能损耗。

实际场景里，在主线程创建了一个`SharedArrayBuffer`,并把内存地址通过`postMessage`发给`worker线程`

```js
// 主线程
// 新建 1KB 共享内存
const sharedBuffer = new SharedArrayBuffer(1024);
// 主线程将共享内存的地址发送出去
w.postMessage(sharedBuffer);
```

`worker线程`接受来自主线程的`共享地址` ---- `SharedArrayBuffer`，不必再复制同一份二进制地址进行传递。通过`共享地址`提高了性能。

```js
// Worker 线程
onmessage = function (ev) {
  // 主线程共享的数据，就是 1KB 的共享内存
  const sharedBuffer = ev.data;
  // 在共享内存上建立视图，方便读写
  const sharedArray = new Int32Array(sharedBuffer);
  // ...
};
```

`ArrayBuffer`提案对`SharedArrayBuffer`也进行了拓展，允许`SharedArrayBuffer`支持增加内存，但与`ArrayBuffer`不同的是，不支持减少内存，很显然，如果减少内存的话，很有可能影响到正在`共享`这块内存的其他程序。

下面是`SharedArrayBuffer`的构造函数。在`ArrayBuffer`构造函数里的**resize**，这里命名是**grow**，也能体现出两者的差异了。

```js
class SharedArrayBuffer {
    //和ArrayBuffer一样配置maximumByteLength
    constructor(byteLength, [ options ]);
    
    //只能增加内存，而不能缩短内存
    grow(newByteLength);
    
    //分离出一份不可增长的 SharedArrayBuffer。
    slice(start, end);

    //判断是否可以扩充内存
    growable();
    
    //获取最大内存长度
    maximumByteLength();
    
    //获取当前内存长度
    byteLength();
  }
```

目前 `ArrayBuffer` 提案遇到一个阻碍，真实场景中，可能存在多个线程需要扩大内存，按照现在的设计是需要先占用内存，再扩大或缩小至目标内存，但真实场景里，可能存在内存不够的情况，那么会造成资源抢夺。所以如何分配内存资源的问题仍需解决。

