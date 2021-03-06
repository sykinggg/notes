### 【进阶1-5期】JavaScript深入之4类常见内存泄漏及如何避免

**垃圾回收算法**
---

常用垃圾回收算法叫做**标记清除 （Mark-and-sweep） **，算法由以下几步组成：

* 1、垃圾回收器创建了一个“roots”列表。roots 通常是代码中全局变量的引用。JavaScript 中，“window” 对象是一个全局变量，被当作 root 。window 对象总是存在，因此垃圾回收器可以检查它和它的所有子对象是否存在（即不是垃圾）；

* 2、所有的 roots 被检查和标记为激活（即不是垃圾）。所有的子对象也被递归地检查。从 root 开始的所有对象如果是可达的，它就不被当作垃圾。

* 3、所有未被标记的内存会被当做垃圾，收集器现在可以释放内存，归还给操作系统了。

现代的垃圾回收器改良了算法，但是本质是相同的：可达内存被标记，其余的被当作垃圾回收。

**四种常见的JS内存泄漏**
---

<div size=1>**1、意外的全局变量**</div>

未定义的变量会在全局对象创建一个新变量，如下。

```javascript
function foo(arg) {
    bar = "this is a hidden global variable";
}
```

函数 ```foo``` 内部忘记使用 ```var``` ，实际上JS会把bar挂载到全局对象上，意外创建一个全局变量。

```javascript
function foo(arg) {
    window.bar = "this is an explicit global variable";
}
```

另一个意外的全局变量可能由 ```this``` 创建。

```javascript
function foo() {
    this.variable = "potential accidental global";
}

// Foo 调用自己，this 指向了全局对象（window）
// 而不是 undefined
foo();
```

<div size=1>**解决方法：**</div>

在 JavaScript 文件头部加上 ```'use strict'```，使用严格模式避免意外的全局变量，此时**上例中的this指向undefined**。如果必须使用全局变量存储大量数据时，确保用完以后把它设置为 null 或者重新定义。

<div size=1>**2、被遗忘的计时器或回调函数**</div>

计时器```setInterval```代码很常见

```javascript
var someResource = getData();
setInterval(function() {
    var node = document.getElementById('Node');
    if(node) {
        // 处理 node 和 someResource
        node.innerHTML = JSON.stringify(someResource));
    }
}, 1000);
```

上面的例子表明，在节点node或者数据不再需要时，定时器依旧指向这些数据。所以哪怕当node节点被移除后，interval 仍旧存活并且垃圾回收器没办法回收，它的依赖也没办法被回收，除非终止定时器。

```javascript
var element = document.getElementById('button');
function onClick(event) {
    element.innerHTML = 'text';
}

element.addEventListener('click', onClick);
```

对于上面观察者的例子，一旦它们不再需要（或者关联的对象变成不可达），明确地移除它们非常重要。老的 IE 6 是无法处理循环引用的。因为老版本的 IE 是无法检测 DOM 节点与 JavaScript 代码之间的循环引用，会导致内存泄漏。

**但是**，现代的浏览器（包括 IE 和 Microsoft Edge）使用了更先进的垃圾回收算法（标记清除），已经可以正确检测和处理循环引用了。即回收节点内存时，不必非要调用 ```removeEventListener``` 了。

<div size=1>**3、脱离 DOM 的引用**</div>

如果把DOM 存成字典（JSON 键值对）或者数组，此时，同样的 DOM 元素存在两个引用：一个在 DOM 树中，另一个在字典中。那么将来需要把两个引用都清除。

```javascript
var elements = {
    button: document.getElementById('button'),
    image: document.getElementById('image'),
    text: document.getElementById('text')
};
function doStuff() {
    image.src = 'http://some.url/image';
    button.click();
    console.log(text.innerHTML);
    // 更多逻辑
}
function removeButton() {
    // 按钮是 body 的后代元素
    document.body.removeChild(document.getElementById('button'));
    // 此时，仍旧存在一个全局的 #button 的引用
    // elements 字典。button 元素仍旧在内存中，不能被 GC 回收。
}
```

如果代码中保存了表格某一个 ```<td>``` 的引用。将来决定删除整个表格的时候，直觉认为 GC 会回收除了已保存的 ```<td>``` 以外的其它节点。实际情况并非如此：此 ```<td>``` 是表格的子节点，子元素与父元素是引用关系。由于代码**保留了 ```<td>``` 的引用**，导致整个表格仍待在内存中。所以保存 DOM 元素引用的时候，要小心谨慎。

<div size=1>**4、闭包**</div>

闭包的关键是匿名函数可以访问父级作用域的变量。

```javascript
var theThing = null;
var replaceThing = function () {
    var originalThing = theThing;
    var unused = function () {
        if (originalThing)
        console.log("hi");
    };
        
    theThing = {
        longStr: new Array(1000000).join('*'),
            someMethod: function () {
            console.log(someMessage);
        }
    };
};

setInterval(replaceThing, 1000);
```

每次调用 ```replaceThing``` ，```theThing``` 得到一个包含一个大数组和一个新闭包（```someMethod```）的新对象。同时，变量 ```unused``` 是一个引用 ```originalThing``` 的闭包（先前的 ```replaceThing``` 又调用了 ```theThing``` ）。```someMethod``` 可以通过 ```theThing``` 使用，```someMethod``` 与 ``unused`` 分享闭包作用域，尽管 `unused` 从未使用，它引用的 `originalThing` 迫使它保留在内存中（防止被回收）。

<div size=1>**解决方法：**</div> 

在 `replaceThing` 的最后添加 `originalThing = null `。

**昨日思考题解答**
---

<div size=1>**问题一：**</div>

从内存来看 null 和 undefined 本质的区别是什么？

<div size=1>**解答：**</div>

给一个全局变量赋值为null，相当于将这个变量的指针对象以及值清空，如果是给对象的属性 赋值为null，或者局部变量赋值为null,相当于给这个属性分配了一块空的内存，然后值为null， JS会回收全局变量为null的对象。

给一个全局变量赋值为undefined，相当于将这个对象的值清空，但是这个对象依旧存在,如果是给对象的属性赋值 为undefined，说明这个值为空值

<div size=1>**扩展下：**</div>

声明了一个变量，但未对其初始化时，这个变量的值就是undefined，它是 JavaScript 基本类型 之一。

```javascript
var data;
console.log(data === undefined); //true
```

对于尚未声明过的变量，只能执行一项操作，即使用typeof操作符检测其数据类型，使用其他的操作都会报错。

```javascript
//data变量未定义
console.log(typeof data); // "undefined"
console.log(data === undefined); //报错
```

值 `null` 特指对象的值未设置，它是 JavaScript 基本类型 之一。

值 `null` 是一个字面量，它不像`undefined` 是全局对象的一个属性。`null` 是表示缺少的标识，指示变量未指向任何对象。

```javascript
// foo不存在，它从来没有被定义过或者是初始化过：
foo;
"ReferenceError: foo is not defined"

// foo现在已经是知存在的，但是它没有类型或者是值：
var foo = null; 
console.log(foo);	// null
```

<div size=1>**问题二：**</div>

ES6语法中的 const 声明一个只读的常量，那为什么下面可以修改const的值？

```javascript
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```

<div size=1>**解答：**</div>

`const`实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

**今日思考题**
---

```html
<script>
    console.log(fun)

    console.log(person)
</script>

<script>
    console.log(person)

    console.log(fun)

    var person = "Eric";

    console.log(person)

    function fun() {
        console.log(person)
        var person = "Tom";
        console.log(person)
    }

    fun()

    console.log(person)
</script>
```

上面代码的执行结果是什么？先自己分析，然后再到浏览器中执行。

第一个 script ：

```html
<script>
    console.log(fun)
    console.log(person)
</script>
```

当前全局作用域中并没有定义 **fun** 和 **person**，那么执行 `console.log(fun)` 会导致报错提示 fun 没有定义，并且会阻断代码继续执行，也就不会执行 `console.log(person)` 。

第二个 script：

```html
<script>
    console.log(person)     // (1)
    console.log(fun)           // (2)

    var person = "Eric";
    console.log(person)     // (3)

    function fun() {
        console.log(person)  // (4)
        var person = "Tom";
        console.log(person)  // (5)
    }

    fun()
    console.log(person)      // (6)
</script>
```

虽然变量 **person** 和函数 **fun** 是在下方定义的，但是会发生变量提升和函数提升，因此：
(1) 处打印 **undefined**
(2) 处打印 **function fun() { ... }**

随后变量 **person** 被赋值为”Eric“
(3) 处打印 **Eric**

由于在函数 **fun** 中，重新定义了一个 **person** 变量
(4) 处打印 **undefined**
(5) 处打印 **Tom**

全局作用域中存在一个**变量 person**
(6) 处打印 **Eric**