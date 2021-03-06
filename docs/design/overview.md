# JavaScript 设计模式的分类

## 设计原则

### 单一职责原则（SRP）

一个对象或方法只做一件事情。如果一个方法承担了过多的职责，那么在需求的变迁过程中，需要改写这个方法的可能性就越大。

应该把对象或方法划分成较小的粒度

### 最少知识原则（LKP）

一个软件实体应当 尽可能少地与其他实体发生相互作用 

应当尽量减少对象之间的交互。如果两个对象之间不必彼此直接通信，那么这两个对象就不要发生直接的 相互联系，可以转交给第三方进行处理

### 开放-封闭原则（OCP）

软件实体（类、模块、函数）等应该是可以 扩展的，但是不可修改

当需要改变一个程序的功能或者给这个程序增加新功能的时候，可以使用增加代码的方式，尽量避免改动程序的源代码，防止影响原系统的稳定

## 创建型设计模式

> 创建型设计模式关注于对象创建的机制方法，通过该方法,对象以适应工作环境的方式被创建。基本的对象创建方法可能会给项目增加额外的复杂性，而这些模式的目的就是为了通过控制创建过程解决这个问题。

* 构造器模式（Constructor）

* 工厂模式（Factory）

* 抽象工厂模式 （Abstract）

* 原型模式 （Prototype）

* 单例模式 （Singleton）

* 建造者模式（Builder）

## 结构设计模式

> 结构模式关注于对象组成和通常识别的方式实现不同对象之间的关系。该模式有助于在系统的某一部分发生改变的时候，整个系统结构不需要改变。该模式同样有助于对系统中某部分没有达到某一目的的部分进行重组。

* 装饰模式

* 外观模式

* 享元模式

* 适配器模式

* 代理模式

## 行为设计模式

> 行为模式关注改善或精简在系统中不同对象间通信。

* 迭代模式

* 中介者模式

* 观察者模式

* 访问者模式

| SN | 描述 |
| ---- | ---- |
| Creational | 根据创建对象的概念分成下面几类 |
| Class | |
| Factory Method(工厂方法) | 通过将数据和事件接口化来构建若干个子类。|
| Object | |
| Abstract Factory(抽象工厂) | 建立若干族类的一个实例，这个实例不需要具体类的细节信息。（抽象类） |
| Builder (建造者) | 将对象的构建方法和其表现形式分离开来，总是构建相同类型的对象。|
| Prototype(原型) | 一个完全初始化的实例，用于拷贝或者克隆。|
| Singleton(单例) | 一个类只有唯一的一个实例，这个实例在整个程序中有一个全局的访问点。|
| Structural | 根据构建对象块的方法分成下面几类。|
| Class | |
| Adapter(适配器) | 将不同类的接口进行匹配，调整，这样尽管内部接口不兼容但是不同的类还是可以协同工作的。|
| Bridge(桥接模式) | 将对象的接口从其实现中分离出来，这样对象的实现和接口可以独立的变化。|
| Composite(组合模式) | 通过将简单可组合的对象组合起来，构成一个完整的对象，这个对象的能力将会超过这些组成部分的能力的总和，即会有新的能力产生。|
| Decorator(装饰器)	| 动态给对象增加一些可替换的处理流程。|
| Facada(外观模式) | 一个类隐藏了内部子系统的复杂度，只暴露出一些简单的接口。|
| Flyweight(享元模式) | 一个细粒度对象，用于将包含在其它地方的信息 在不同对象之间高效地共享。|
| Proxy(代理模式) | 一个充当占位符的对象用来代表一个真实的对象。|
| Behavioral | 基于对象间作用方式来分类。 |
| Class | |
| Interpreter(解释器) | 将语言元素包含在一个应用中的一种方式，用于匹配目标语言的语法。|
| Template Method(模板方法)	| 在一个方法中为某个算法建立一层外壳，将算法的具体步骤交付给子类去做。|
| Object | |
| Chain of Responsibility(响应链) | 一种将请求在一串对象中传递的方式，寻找可以处理这个请求的对象。|
| Command(命令)	| 封装命令请求为一个对象，从而使记录日志，队列缓存请求，未处理请求进行错误处理 这些功能称为可能。|
| Iterator(迭代器) | 在不需要直到集合内部工作原理的情况下，顺序访问一个集合里面的元素。|
| Mediator(中介者模式) | 在类之间定义简化的通信方式，用于避免类之间显式的持有彼此的引用。|
| Observer(观察者模式) | 用于将变化通知给多个类的方式，可以保证类之间的一致性。|
| State(状态) | 当对象状态改变时，改变对象的行为。|
| Strategy(策略) | 将算法封装到类中，将选择和实现分离开来。|
| Visitor(访问者) | 为类增加新的操作而不改变类本身。|