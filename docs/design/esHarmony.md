# es6 module

## ES Harmony

TC39，负责讨论ECMAScript语法和语义定义问题和其未来迭代的标准机构，它是由许多的非常聪明的开发者组成的。这些开发者中的一些人（比如Alex Russell）对Javascript在大规模开发中的用例场景在过去几年一直保持者密切的关注，并且敏锐的意识到了人们对于能够使用其编写更加模块化JS的优良的语言特性的需求。 出于这个原因，目前已经有大量激动人心的，包括在客户端和服务器上都能起作用的弹性模块，一个模块加载器以及更多的对语言的改进提议。

> 注意：尽管Harmony仍然处于建设性阶段，我们也已经可以尝试ES.next的（部分）特性了，而这得感谢Google的Traceur编译器为模块化的Javascript提供的原生支持。为了在短时间内使Traceur启动和运作起来，读一读这份初学指导吧。如果对更深入的了解这个项目感兴趣的话，一个关于它JSConf展示就值得看一看。

## 使用导入和导出的模块

> 已经通读过`AMD`和`CommonJS`章节的话，你也许熟悉模块依赖（导入）和模块导出（或者说是我们允许其它模块使用的公共API/变量）这两个概念。在`ES.next`中，这些概念已经使用一种同我们预期没太大不同，而开发者将可以在代码示例中往下看到并且能瞬间抓住的用一个`export`关键字指定依赖的稍微更简洁的方式，被提供了出来。

* `import`声明绑定了一个以本地变量身份导出的模块，而且可能被重命名以避免名称重复或冲突。

* `export`声明声明了模块本地绑定的外部可见性，那样其他模块就可能读取到导出但不能修改它们。有趣的是，模块可能导出子模块但不能够导出已经在另外一个地方定义的模块。我们也可以对导出进行重命名以便它们的外部名称同本地名称有所不同。

```js
module staff{
    // specify (public) exports that can be consumed by
    // other modules
    export var baker = {
        bake: function( item ){
            console.log( "Woo! I just baked " + item );
        }
    }  
}

module skills{
    export var specialty = "baking";
    export var experience = "5 years";
}

module cakeFactory{

    // specify dependencies
    import baker from staff;

    // import everything with wildcards
    import * from skills;

    export var oven = {
        makeCupcake: function( toppings ){
            baker.bake( "cupcake", toppings );
        },
        makeMuffin: function( mSize ){
            baker.bake( "muffin", size );
        }
    }
}
```

## 从远程来源加载的模块

> 模块的提案也支持基于远程来源的模块（例如，一个第三方库），这简化了从外部位置载入模块的操作。这里有一个在模块中抽取并使用它的示例：

```js
module cakeFactory from "http://addyosmani.com/factory/cakes.js";
cakeFactory.oven.makeCupcake( "sprinkles" );
cakeFactory.oven.makeMuffin( "large" );
```

## 模块加载API

> 被提出来的模块加载器描述了一个用于在一个被高度控制的环境中加载模块的动态`API`。加载器上支持的签名包含`load(url, moduleInstance, error)`用于加载模块，`createModule(object, globalModuleReferences)`以及其他的操作。
>
> 这里是另外一个我们最初定义的在模块中进行动态加载的示例。注意，并不像我们最近的一个从远程来源拉入一个模块的示例，模块加载器API更加适合于动态环境。

```js
Loader.load( "http://addyosmani.com/factory/cakes.js" ,
    function( cakeFactory ){
        cakeFactory.oven.makeCupcake( "chocolate" );
    }
);
```

## 针对服务器的CommonJS类似模块

对于那些对服务器环境更加感兴趣的开发者，`ES.next`提供的模块系统并不仅仅限制只在浏览器中寻找模块。例如在下面，我们能够看到一个`CommonJS`类似的模块被提供给在服务器上使用。

```js
// io/File.js
export function open( path ) { ... };
export function close( hnd ) { ... };
```

```js
// compiler/LexicalHandler.js
module file from "io/File";

import { open, close } from file;
export function scan( in ) {
    try {
        var h = open( in ) ...
    }
    finally { close( h ) }
}
```

```js
module lexer from "compiler/LexicalHandler";
module stdlib from "@std";

//... scan(cmdline[0]) ...
```

## 带有构造器，Get和Set方法的类

> 类的概念一直都是带有纯粹主义色彩的有争议的问题，而我们目前相对已经回落到关于Javascript原型性质的问题上来，或者通过使用提供在一个表单中使用类定义能力的框架或者抽象，其具有相同原型行为的语法糖。
>
> 在Harmony中，为这种语言类已经同构造器和一些（最终）具有某种意义的真正隐晦的东西一起，被提了出来。在下面的示例中，其中的注释提供了用于帮助解释类是如何被构造的问题。
>
> 通过阅读，人们也许也会意识到这里“function“世界的缺失。这并不是一个笔误：TC39已经做出有目的的尝试，降低我们在任何事物上对function关键字的滥用，而这其实是希望能够简化我们编写代码的工作。

```js
class Cake{

    // We can define the body of a class" constructor
    // function by using the keyword "constructor" followed
    // by an argument list of public and private declarations.
    constructor( name, toppings, price, cakeSize ){
        public name = name;
        public cakeSize = cakeSize;
        public toppings = toppings;
        private price = price;

    }

    // As a part of ES.next's efforts to decrease the unnecessary
    // use of "function" for everything, you'll notice that it's
    // dropped for cases such as the following. Here an identifier
    // followed by an argument list and a body defines a new method

    addTopping( topping ){
        public( this ).toppings.push( topping );
    }

    // Getters can be defined by declaring get before
    // an identifier/method name and a curly body.
    get allToppings(){
        return public( this ).toppings;
    }

    get qualifiesForDiscount(){
        return private( this ).price > 5;
    }

    // Similar to getters, setters can be defined by using
    // the "set" keyword before an identifier
    set cakeSize( cSize ){
        if( cSize < 0 ){
            throw new Error( "Cake must be a valid size - either small, medium or large" );
        }
        public( this ).cakeSize = cSize;
    }

}
```