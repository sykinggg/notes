# 深入TypeScript

## 第一部分 前置内容

* `keyof` 索引查询

对应任何类型`T`,`keyof T`的结果为该类型上所有共有属性key的联合：

```typescript
interface Eg1 {
  name: string,
  readonly age: number,
}
// T1的类型实则是name | age
type T1 = keyof Eg1

class Eg2 {
  private name: string;
  public readonly age: number;
  protected home: string;
}
// T2实则被约束为 age
// 而name和home不是公有属性，所以不能被keyof获取到
type T2 = keyof Eg2
```

* `T[K]` 索引访问

```typescript
interface Eg1 {
  name: string,
  readonly age: number,
}
// string
type V1 = Eg1['name']
// string | number
type V2 = Eg1['name' | 'age']
// any
type V2 = Eg1['name' | 'age2222']
// string | number
type V3 = Eg1[keyof Eg1]
```

`T[keyof T]`的方式，可以获取到`T`所有`key`的类型组成的联合类型；`T[keyof K]`的方式，获取到的是`T`中的`key`且同时存在于`K`时的类型组成的联合类型；注意：如果`[]`中的`key`有不存在`T`中的，则是`any`；因为`ts`也不知道该`key`最终是什么类型，所以是`any`；且也会报错；

* `&` 交叉类型注意点

交叉类型取的多个类型的并集，但是如果相同`key`但是类型不同，则该`key`为`never`。

```typescript
interface Eg1 {
  name: string,
  age: number,
}

interface Eg2 {
  color: string,
  age: string,
}

/**
 * T的类型为 {name: string; age: number; age: never}
 * 注意，age因为Eg1和Eg2中的类型不一致，所以交叉后age的类型是never
 */
type T = Eg1 & Eg2
// 可通过如下示例验证
const val: T = {
  name: '',
  color: '',
  age: (function a() {
    throw Error()
  })(),
}
```

### extends关键词特性（重点）

* 用于接口，表示继承

```typescript
interface T1 {
  name: string,
}

interface T2 {
  sex: number,
}

/**
 * @example
 * T3 = {name: string, sex: number, age: number}
 */
interface T3 extends T1, T2 {
  age: number,
}
```

注意，接口支持多重继承，语法为逗号隔开。如果是`type`实现继承，则可以使用交叉类型`type A = B & C & D`。

* 表示条件类型，可用于条件判断

表示条件判断，如果前面的条件满足，则返回问号后的第一个参数，否则第二个。类似于js的三元运算。

```typescript
/**
 * @example
 * type A1 = 1
 */
type A1 = 'x' extends 'x' ? 1 : 2;

/**
 * @example
 * type A2 = 2
 */
type A2 = 'x' | 'y' extends 'x' ? 1 : 2;

/**
 * @example
 * type A3 = 1 | 2
 */
type P<T> = T extends 'x' ? 1 : 2;
type A3 = P<'x' | 'y'>
```

提问：为什么`A2`和`A3`的值不一样？

* 如果用于简单的条件判断，则是直接判断前面的类型是否可分配给后面的类型

* 若`extends`前面的类型是泛型，且泛型传入的是联合类型时，则会依次判断该联合类型的所有子类型是否可分配给`extends`后面的类型（是一个分发的过程）。

**总结，就是`extends`前面的参数为联合类型时则会分解（依次遍历所有的子类型进行条件判断）联合类型进行判断。然后将最终的结果组成新的联合类型。**

* 阻止`extends`关键词对于联合类型的分发特性

如果不想被分解（分发），做法也很简单，可以通过简单的元组类型包裹以下：

```typescript
type P<T> = [T] extends ['x'] ? 1 : 2;
/**
 * type A4 = 2;
 */
type A4 = P<'x' | 'y'>
```

### 分配条件类型

当条件类型作用于泛型类型时，当给定联合类型时，它们会变成分布式的。例如，采取以下措施：

```ts
type ToArray<Type> = Type extends any ? Type[] : never;
```

如果我们将联合类型插入`ToArray`，则条件类型将应用于该联合的每个成员。

```ts
type ToArray<Type> = Type extends any ? Type[] : never;
 
type StrArrOrNumArr = ToArray<string | number>;

// type StrArrOrNumArr = string[] | number[]
// type ToArray<type> = Type extends any ? Type[] : never
// (type parameter) Type in type ToArray<Type>
```

这里发生的是`StrOrNumArray`分布于：

```ts
string | number;
```

并映射到联合的每个成员类型，有效地：

```ts
ToArray<string> | ToArray<number>;
// type ToArray<type> = Type extends any ? Type[] : never
```

这给我们留下了：

```ts
string[] | number[];
```

通常，分配性是所需的行为。为避免这种行为，您可以`extends`用方括号将关键字的每一侧括起来。

```ts
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
 
// 'StrOrNumArr' is no longer a union.
type StrOrNumArr = ToArrayNonDist<string | number>;

// type StrOrNumArr = (string | number)[]
```

### 类型兼容性

> 集合论中，如果一个集合的所有元素在集合B中都存在，则A是B的子集；
> 类型系统中，如果一个类型的属性更具体，则该类型是子类型。（因为属性更少则说明该类型约束的更宽泛，是父类型）

**因此，我们可以得出基本的结论：子类型比父类型更加具体,父类型比子类型更宽泛。** 下面我们也将基于类型的可复制性（可分配性）、协变、逆变、双向协变等进行进一步的讲解。

* 可赋值性

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  break(): void;
}

let a: Animal;
let b: Dog;

// 可以赋值，子类型更佳具体，可以赋值给更佳宽泛的父类型
a = b;
// 反过来不行
b = a;
```

* 可赋值性在联合类型中的特性

```ts
type A = 1 | 2 | 3;
type B = 2 | 3;
let a: A;
let b: B;

// 不可赋值
b = a;
// 可以赋值
a = b;
```

是不是`A`的类型更多，`A`就是子类型呢？恰恰相反，`A`此处类型更多但是其表达的类型更宽泛，所以`A`是父类型，`B`是子类型。

因此`b = a`不成立（父类型不能赋值给子类型），而`a = b`成立（子类型可以赋值给父类型）。

* 协变
