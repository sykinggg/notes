### 【进阶3-4期】深度解析bind原理、使用场景及模拟实现

**bind()**
---

> `bind()` 方法会创建一个新函数，当这个新函数被调用时，它的 `this` 值是传递给 `bind()` 的第一个参数，传入bind方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。bind返回的绑定函数也能使用 `new` 操作符创建对象：这种行为就像把原函数当成构造器，提供的 `this` 值被忽略，同时调用时的参数被提供给模拟函数。

语法：`fun.bind(thisArg[, arg1[, arg2[, ...]]])`

`bind` 方法与 `call / apply` 最大的不同就是前者返回一个绑定上下文的**函数**，而后两者是**直接执行**了函数。

来个例子说明下

```javascript
var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    return {
		value: this.value,
		name: name,
		age: age
    }
};

bar.call(foo, "Jack", 20); // 直接执行了函数
// {value: 1, name: "Jack", age: 20}

var bindFoo1 = bar.bind(foo, "Jack", 20); // 返回一个函数
bindFoo1();
// {value: 1, name: "Jack", age: 20}

var bindFoo2 = bar.bind(foo, "Jack"); // 返回一个函数
bindFoo2(20);
// {value: 1, name: "Jack", age: 20}
```

通过上述代码可以看出bind 有如下特性：

* 1、可以指定this

* 2、返回一个函数

* 3、可以传入参数

* 4、柯里化

**使用场景**
---

***

**1、业务场景**
---

经常有如下的业务场景

```javascript
var nickname = "Kitty";
function Person(name){
    this.nickname = name;
    this.distractedGreeting = function() {

        setTimeout(function(){
            console.log("Hello, my name is " + this.nickname);
        }, 500);
    }
}
 
var person = new Person('jawil');
person.distractedGreeting();
//Hello, my name is Kitty
```

这里输出的`nickname`是全局的，并不是创建 `person` 时传入的参数，因为 `setTimeout` 在全局环境中执行（不理解的查看【进阶3-1期】），所以 `this` 指向的是`window`。

这边把 `setTimeout` 换成异步回调也是一样的，比如接口请求回调。

解决方案有下面两种。

<div size=1>**解决方案1：**</div> 缓存 `this`值

```javascript
var nickname = "Kitty";
function Person(name){
    this.nickname = name;
    this.distractedGreeting = function() {
        
		var self = this; // added
        setTimeout(function(){
            console.log("Hello, my name is " + self.nickname); // changed
        }, 500);
    }
}
 
var person = new Person('jawil');
person.distractedGreeting();
// Hello, my name is jawil
```

<div size=1>**解决方案2：**</div> 使用 `bind`

```javascript
var nickname = "Kitty";
function Person(name){
    this.nickname = name;
    this.distractedGreeting = function() {

        setTimeout(function(){
            console.log("Hello, my name is " + this.nickname);
        }.bind(this), 500);
    }
}
 
var person = new Person('jawil');
person.distractedGreeting();
// Hello, my name is jawil
```

**2、验证是否是数组**
---

【进阶3-3期】介绍了 call 的使用场景，这里重新回顾下。

```javascript
function isArray(obj){ 
    return Object.prototype.toString.call(obj) === '[object Array]';
}
isArray([1, 2, 3]);
// true

// 直接使用 toString()
[1, 2, 3].toString(); 	// "1,2,3"
"123".toString(); 		// "123"
123.toString(); 		// SyntaxError: Invalid or unexpected token
Number(123).toString(); // "123"
Object(123).toString(); // "123"
```

可以通过`toString()` 来获取每个对象的类型，但是不同对象的 `toString()`有不同的实现，所以通过 `Object.prototype.toString()` 来检测，需要以 `call() / apply()` 的形式来调用，传递要检查的对象作为第一个参数。

另一个`验证是否是数组的方法`，这个方案的`优点`是可以直接使用改造后的 `toStr`。

```javascript
var toStr = Function.prototype.call.bind(Object.prototype.toString);
function isArray(obj){ 
    return toStr(obj) === '[object Array]';
}
isArray([1, 2, 3]);
// true

// 使用改造后的 toStr
toStr([1, 2, 3]); 	// "[object Array]"
toStr("123"); 		// "[object String]"
toStr(123); 		// "[object Number]"
toStr(Object(123)); // "[object Number]"
```

上面方法首先使用 `Function.prototype.call`函数指定一个 `this` 值，然后 `.bind` 返回一个新的函数，始终将 `Object.prototype.toString` 设置为传入参数。其实等价于 `Object.prototype.toString.call()` 。

这里有一个**前提**是`toString()`方法**没有被覆盖**

```javascript
Object.prototype.toString = function() {
    return '';
}
isArray([1, 2, 3]);
// false
```

**3、柯里化（curry）**
---

> 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。
> 可以一次性地调用柯里化函数，也可以每次只传一个参数分多次调用。

```javascript
var add = function(x) {
  return function(y) {
    return x + y;
  };
};

var increment = add(1);
var addTen = add(10);

increment(2);
// 3

addTen(2);
// 12

add(1)(2);
// 3
```

这里定义了一个 `add` 函数，它接受一个参数并返回一个新的函数。调用 `add` 之后，返回的函数就通过闭包的方式记住了 `add` 的第一个参数。所以说 `bind` 本身也是闭包的一种使用场景。

**模拟实现**
---
***

`bind（）` 函数在 ES5 才被加入，所以并不是所有浏览器都支持，`IE8`及以下的版本中不被支持，如果需要兼容可以使用 Polyfill 来实现。

首先来实现以下四点特性：

* 1、可以指定`this`

* 2、返回一个函数

* 3、可以传入参数

* 4、柯里化

**模拟实现第一步**
---

对于第 1 点，使用 `call / apply` 指定 `this` 。

对于第 2 点，使用 return 返回一个函数。

结合前面 2 点，可以写出第一版，代码如下：

```javascript
// 第一版
Function.prototype.bind2 = function(context) {
    var self = this; // this 指向调用者
    return function () { // 实现第 2点
        return self.apply(context); // 实现第 1 点
    }
}
```

测试一下

```javascript
// 测试用例
var value = 2;
var foo = {
    value: 1
};

function bar() {
	return this.value;
}

var bindFoo = bar.bind2(foo);

bindFoo(); // 1
```

**模拟实现第二步**

对于第 3 点，使用 `arguments` 获取参数数组并作为 `self.apply()` 的第二个参数。

对于第 4 点，获取返回函数的参数，然后同第3点的参数合并成一个参数数组，并作为 `self.apply()` 的第二个参数。

```javascript
// 第二版
Function.prototype.bind2 = function (context) {

    var self = this;
    // 实现第3点，因为第1个参数是指定的this,所以只截取第1个之后的参数
	// arr.slice(begin); 即 [begin, end]
    var args = Array.prototype.slice.call(arguments, 1); 

    return function () {
        // 实现第4点，这时的arguments是指bind返回的函数传入的参数
        // 即 return function 的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply( context, args.concat(bindArgs) );
    }
}
```

测试一下：

```javascript
// 测试用例
var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    return {
		value: this.value,
		name: name,
		age: age
    }
};

var bindFoo = bar.bind2(foo, "Jack");
bindFoo(20);
// {value: 1, name: "Jack", age: 20}
```

**模拟实现第三步**
---

还有一个难点，bind 有以下一个特性

> 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器，提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。

来个例子说明下：

```javascript
var value = 2;
var foo = {
    value: 1
};
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'Jack');
var obj = new bindFoo(20);
// undefined
// Jack
// 20

obj.habit;
// shopping

obj.friend;
// kevin
```

上面例子中，运行结果`this.value` 输出为 `undefined`，这不是全局`value` 也不是`foo`对象中的`value`，这说明 `bind` 的 `this` 对象失效了，`new` 的实现中生成一个新的对象，这个时候的 `this`指向的是 `obj`。（【进阶3-1期】有介绍new的实现原理，下一期也会重点介绍）

这里可以通过修改返回函数的原型来实现，代码如下：

```javascript
// 第三版
Function.prototype.bind2 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        
        // 注释1
        return self.apply(
            this instanceof fBound ? this : context, 
            args.concat(bindArgs)
        );
    }
    // 注释2
    fBound.prototype = this.prototype;
    return fBound;
}
```

* 注释1：

    - * 当作为构造函数时，this 指向实例，此时 `this instanceof fBound` 结果为 `true`，可以让实例获得来自绑定函数的值，即上例中实例会具有 `habit` 属性。
    
    - * 当作为普通函数时，this 指向 `window`，此时结果为 `false`，将绑定函数的 this 指向 `context`

* 注释2： 修改返回函数的 `prototype` 为绑定函数的 `prototype`，实例就可以继承绑定函数的原型中的值，即上例中 `obj` 可以获取到 `bar` 原型上的 `friend`。

**模拟实现第四步**
---

上面实现中 `fBound.prototype = this.prototype`有一个缺点，直接修改 `fBound.prototype` 的时候，也会直接修改 `this.prototype`。

来个代码测试下：

```javascript
// 测试用例
var value = 2;
var foo = {
    value: 1
};
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';

var bindFoo = bar.bind2(foo, 'Jack'); // bind2
var obj = new bindFoo(20); // 返回正确
// undefined
// Jack
// 20

obj.habit; // 返回正确
// shopping

obj.friend; // 返回正确
// kevin

obj.__proto__.friend = "Kitty"; // 修改原型

bar.prototype.friend; // 返回错误，这里被修改了
// Kitty
```

解决方案是用一个空对象作为中介，把 `fBound.prototype` 赋值为空对象的实例（原型式继承）。

```javascript
var fNOP = function () {};			// 创建一个空对象
fNOP.prototype = this.prototype; 	// 空对象的原型指向绑定函数的原型
fBound.prototype = new fNOP();		// 空对象的实例赋值给 fBound.prototype
```

这边可以直接使用ES5的 `Object.create()`方法生成一个新对象

```javascript
fBound.prototype = Object.create(this.prototype);
```

不过 `bind` 和 `Object.create()`都是ES5方法，部分IE浏览器（IE < 9）并不支持，Polyfill中不能用 `Object.create()`实现 `bind`，不过原理是一样的。

第四版目前OK啦，代码如下：

```javascript
// 第四版，已通过测试用例
Function.prototype.bind2 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(
            this instanceof fNOP ? this : context, 
            args.concat(bindArgs)
        );
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}
```

**模拟实现第五步**
---

到这里其实已经差不多了，但有一个问题是调用 bind 的不是函数，这时候需要抛出异常。

```javascript
if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
}
```

所以完整版模拟实现代码如下：

```javascript
// 第五版
Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}
```

**【进阶3-2期】思考题解**

```javascript
// 1、赋值语句是右执行的,此时会先执行右侧的对象
var obj = {
    // 2、say 是立即执行函数
    say: function() {
        function _say() {
            // 5、输出 window
            console.log(this);
        }
        // 3、编译阶段 obj 赋值为 undefined
        console.log(obj);
        // 4、obj是 undefined，bind 本身是 call实现，
        // 【进阶3-3期】：call 接收 undefined 会绑定到 window。
        return _say.bind(obj);
    }(),
};
obj.say();
```

**【进阶3-3期】思考题解**

`call` 的模拟实现如下，那有没有什么问题呢？

```javascript
Function.prototype.call = function (context) {
    context = context ? Object(context) : window; 
    context.fn = this;

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    var result = eval('context.fn(' + args +')');

    delete context.fn;
    return result;
}
```

当然是有问题的，其实这里假设 `context` 对象本身没有 `fn` 属性，这样肯定不行，必须保证 `fn`属性的唯一性。

**ES3下模拟实现**
---

解决方法也很简单，首先判断 `context`中是否存在属性 `fn`，如果存在那就随机生成一个属性`fnxx`，然后循环查询 `context` 对象中是否存在属性 `fnxx`。如果不存在则返回最终值。

一种**循环方案**实现代码如下：

```javascript
function fnFactory(context) {
	var unique_fn = "fn";
    while (context.hasOwnProperty(unique_fn)) {
    	unique_fn = "fn" + Math.random(); // 循环判断并重新赋值
    }
    
    return unique_fn;
}
```

一种**递归方案**实现代码如下：

```javascript
function fnFactory(context) {
	var unique_fn = "fn" + Math.random();
    if(context.hasOwnProperty(unique_fn)) {
        // return arguments.callee(context); ES5 开始禁止使用
        return fnFactory(context); // 必须 return
    } else {
        return unique_fn;
    }
}
```

**模拟实现**完整代码如下：

```javascript
function fnFactory(context) {
	var unique_fn = "fn";
    while (context.hasOwnProperty(unique_fn)) {
    	unique_fn = "fn" + Math.random(); // 循环判断并重新赋值
    }
    
    return unique_fn;
}

Function.prototype.call = function (context) {
    context = context ? Object(context) : window; 
    var fn = fnFactory(context); // added
    context[fn] = this; // changed

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    var result = eval('context[fn](' + args +')'); // changed

    delete context[fn]; // changed
    return result;
}

// 测试用例在下面
```

**ES6下模拟实现**
---

ES6有一个新的基本类型`Symbol`，表示**独一无二**的值，用法如下。

```javascript
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1); // "symbol"
console.log(symbol3.toString()); // "Symbol(foo)"
console.log(Symbol('foo') === Symbol('foo')); // false
```

**不能使用** `new` 命令，因为这是基本类型的值，不然会报错。

```javascript
new Symbol();
// TypeError: Symbol is not a constructor
```

**模拟实现**完整代码如下：

```javascript
Function.prototype.call = function (context) {
  context = context ? Object(context) : window; 
  var fn = Symbol(); // added
  context[fn] = this; // changed

  let args = [...arguments].slice(1);
  let result = context[fn](...args); // changed

  delete context[fn]; // changed
  return result;
}
// 测试用例在下面
```

测试用例在这里：

```javascript
// 测试用例
var value = 2;
var obj = {
    value: 1,
    fn: 123
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call(null); 
// 2

console.log(bar.call(obj, 'kevin', 18));
// 1
// {value: 1, name: "kevin", age: 18}

console.log(obj);
// {value: 1, fn: 123}
```

**扩展一下**

有两种方案可以判断对象中是否存在某个属性。

```javascript
var obj = {
     a: 2
};
Object.prototype.b = function() {
    return "hello b";
}
```

* 1、`in` 操作符

`in` 操作符会检查属性是否存在对象及其 `[[Prototype]]` 原型链中。

```javascript
("a" in obj);     // true
("b" in obj);     // true
```

* 2、`Object.hasOwnProperty(...)`方法

`hasOwnProperty(...)`只会检查属性是否存在对象中，**不会**向上检查其原型链。

```javascript
obj.hasOwnProperty("a");     //true
obj.hasOwnProperty("b");     //false
```

**注意**以下几点：

* 1、看起来 `in` 操作符可以检查容器内是否有某个值，实际上检查的是某个**属性名**是否存在。对于数组来说，`4 in [2, 4, 6]` 结果返回 `false`，因为 `[2, 4, 6]` 这个数组中包含的属性名是`0，1，2` ，没有`4`。

* 2、所有普通对象都可以通过 `Object.prototype` 的委托来访问 `hasOwnProperty(...)`，但是对于一些特殊对象（ `Object.create(null)` 创建）没有连接到 `Object.prototype`，这种情况必须使用 `Object.prototype.hasOwnProperty.call(obj, "a")`，显示绑定到 `obj` 上。**又是一个 call 的用法**。

**本期思考题**
---

用 JS 实现一个无限累加的函数 add，示例如下：

```javascript
add(1); // 1
add(1)(2);  // 3
add(1)(2)(3)； // 6
add(1)(2)(3)(4)； // 10 

// 以此类推
```