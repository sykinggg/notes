### 【进阶1-2期】JavaScript深入之执行上下文栈和变量对象

JS是单线程的语言，执行顺序肯定是顺序执行，但是JS 引擎并不是一行一行地分析和执行程序，而是一段一段地分析执行，会先进行编译阶段然后才是执行阶段。

**举例说明**
---

例子一：**变量提升**

```javascript
foo;  // undefined
var foo = function () {
    console.log('foo1');
}

foo();  // foo1，foo赋值

var foo = function () {
    console.log('foo2');
}

foo(); // foo2，foo重新赋值
```

例子二：**函数提升**

```javascript
foo();  // foo2
function foo() {
    console.log('foo1');
}

foo();  // foo2

function foo() {
    console.log('foo2');
}

foo(); // foo2
```

例子三：声明优先级，**函数 > 变量**

```javascript
foo();  // foo2
var foo = function() {
    console.log('foo1');
}

foo();  // foo1，foo重新赋值

function foo() {
    console.log('foo2');
}

foo(); // foo1
```

上面三个例子中，第一个例子是变量提升，第二个例子是函数提升，第三个例子是函数声明优先级高于变量声明。

**需要注意**的是同一作用域下存在多个同名函数声明，后面的会替换前面的函数声明。

**执行上下文**
---

执行上下文总共有三种类型

* **全局执行上下文：**只有一个，浏览器中的全局对象就是 window 对象，this 指向这个全局对象。
* **函数执行上下文：**存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文。
* **Eval 函数执行上下文：** 指的是运行在 eval 函数中的代码，很少用而且不建议使用。

**执行上下文栈**

因为JS引擎创建了很多的执行上下文，所以JS引擎创建了执行上下文**栈**（Execution context stack，ECS）来**管理**执行上下文。

当 JavaScript 初始化的时候会向执行上下文栈压入一个全局执行上下文，用 **globalContext** 表示它，并且只有当整个应用程序结束的时候，执行栈才会被清空，所以程序结束之前， 执行栈最底部永远有个 globalContext。

```javascript
ECStack = [		// 使用数组模拟栈
    globalContext
];
```

具体执行过程如下图所示

![执行流程](https://camo.githubusercontent.com/2b271448ad38e8fde43f28db066af7dbe356cbb3/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323031382f31312f352f313636653235386531643032383161363f696d61676556696577322f302f772f313238302f682f3936302f666f726d61742f776562702f69676e6f72652d6572726f722f31)

**找不同**

有如下两段代码，执行的结果是一样的，但是两段代码究竟有什么不同？

```javascript
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();
```

```javascript
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();
```

答案是 执行上下文栈的变化不一样。

第一段代码：

```javascript
ECStack.push(<checkscope> functionContext);
ECStack.push(<f> functionContext);
ECStack.pop();
ECStack.pop();
```

第二段代码：

```javascript
ECStack.push(<checkscope> functionContext);
ECStack.pop();
ECStack.push(<f> functionContext);
ECStack.pop();
```

**函数上下文**
---

在函数上下文中，用活动对象(activation object, AO)来表示变量对象。

活动对象和变量对象的区别在于

* 1、变量对象（VO）是规范上或者是JS引擎上实现的，并不能在JS环境中直接访问。

* 2、当进入到一个执行上下文后，这个变量对象才会被激活，所以叫活动对象（AO），这时候活动对象上的各种属性才能被访问。

调用函数时，会为其创建一个**Arguments对象**，并自动初始化局部变量arguments，指代该Arguments对象。所有作为参数传入的值都会成为Arguments对象的数组元素。

**执行过程**

执行上下文的代码会分成两个阶段进行处理

* 1、进入执行上下文

* 2、代码执行

<div size=1>**进入执行上下文**</div>

很明显，这个时候还没有执行代码

此时的变量对象会包括（如下顺序初始化）：

* 1、函数的所有形参 (only函数上下文)：没有实参，属性值设为undefined。

* 2、函数声明：如果变量对象已经存在相同名称的属性，则完全替换这个属性。

* 3、变量声明：如果变量名称跟已经声明的形参或函数相同，则变量声明不会干扰已经存在的这类属性。

上代码就直观了

```javascript
function foo(a) {
  var b = 2;
  function c() {}
  var d = function() {};

  b = 3;
}

foo(1);
```

对于上面的代码，这个时候的AO是

```javascript
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: reference to function c(){},
    d: undefined
}
```

形参arguments这时候已经有赋值了，但是变量还是undefined，只是初始化的值

<div size=1>**代码执行**</div>

这个阶段会顺序执行代码，修改变量对象的值，执行完成后AO如下

```javascript
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: reference to function c(){},
    d: reference to FunctionExpression "d"
}
```

**总结如下：**
---

* 1、全局上下文的变量对象初始化是全局对象

* 2、函数上下文的变量对象初始化只包括 Arguments 对象

* 3、在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值

* 4、在代码执行阶段，会再次修改变量对象的属性值