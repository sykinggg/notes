# useEvent

## 问题产生

`Hooks`使用时存在所谓的 **「闭包陷阱」**

```tsx
function Chat() {
  const [text, setText] = useState('');

  const onClick = useCallback(() => {
    sendMessage(text);
  }, []);

  return <SendButton onClick={onClick} />;
}
```

然而实际上，由于回调函数被`useCallback`缓存，形成闭包，所以点击的效果始终是`sendMessage('')`

这就是 **「闭包陷阱」**

以上代码的一种解决方式是 **「为useCallback增加依赖项」**：

```tsx
const onClick = useCallback(() => {
  sendMessage(text);
}, [text]);
```

但是这么做了后，每当依赖项（`text`）变化，`useCallback`会返回一个全新的`onClick`引用，这就失去了`useCallback` **「缓存函数引用」**的作用。

**「闭包陷阱」**的出现，加大了Hooks的上手门槛，也让开发者更容易写出有`bug`的代码。

## 解决方案 useEvent

解决方式是引入一个新的原生`Hook` —— `useEvent`。

他用于定义一个函数，这个函数有2个特性：

1. 在组件多次`render`时保持引用一致

2. 函数内始终能获取到最新的`props`与`state`

> 上面的例子使用`useEvent`改造后：

```tsx
function Chat() {
  const [text, setText] = useState('');

  const onClick = useEvent(() => {
    sendMessage(text);
  });

  return <SendButton onClick={onClick} />;
}
```

在`Chat`组件多次`render`时，`onClick`始终指向同一个引用。

并且`onClick`触发时始终能获取到`text`的最新值。

之所以叫`useEvent`，是因为`React`团队认为这个`Hook`的主要应用场景是：**「封装事件处理函数」**。

## useEvent的实现

> `useEvent`的实现并不困难，代码类似如下：

```tsx
function useEvent(handler) {
  const handlerRef = useRef(null);

  // 视图渲染完成后更新`handlerRef.current`指向
  useLayoutEffect(() => {
    handlerRef.current = handler;
  });

  // 用useCallback包裹，使得render时返回的函数引用一致
  return useCallback((...args) => {
    const fn = handlerRef.current;
    return fn(...args);
  }, []);
}
```

### 代码详解

整体包括两部分：

1. 返回一个没有依赖项的`useCallback`，使得每次`render`时函数的引用一致

```tsx
useCallback((...args) => {
  const fn = handlerRef.current;
  return fn(...args);
}, []);
```

2. 在合适的时机更新`handlerRef.current`，使得实际执行的函数始终是最新的引用

## 与开源Hooks的差异

很多开源`Hooks`库已经实现类似功能（比如`ahooks`中的`useMemoizedFn`）

`useEvent`与这些开源实现的差异主要体现在：

`useEvent`定位于 **「处理事件回调函数」**这一单一场景，而`useMemoizedFn`定位于 **「缓存各种函数」**。

那么问题来了，既然功能类似，那`useEvent`为什么要限制自己的使用场景呢？

答案是：为了更稳定。

`useEvent`能否获取到最新的`state`与`props`取决于`handlerRef.current`更新的时机。

在上面模拟实现中，`useEvent`更新`handlerRef.current`的逻辑放在`useLayoutEffect`回调中进行。

这就保证了`handlerRef.current`始终在 **「视图完成渲染」**后再更新：

```tsx
useLayoutEffect(() => {
  handlerRef.current = handler;
});
```

而 **「事件回调」**触发的时机显然在 **「视图完成渲染」**之后，所以能够稳定获取到最新的`state`与`props`。

再来看看`ahooks`中的`useMemoizedFn`，`fnRef.current`的更新时机是 **「useMemoizedFn执行时」**（即 **「组件render时」**）：

```tsx
function useMemoizedFn<T extends noop>(fn: T) {
  const fnRef = useRef<T>(fn);

  // 更新fnRef.current
  fnRef.current = useMemo(() => fn, [fn]);

  // ...省略代码
}
```

当`React18`启用 **「并发更新」**后，组件`render`的次数、时机并不确定。

所以`useMemoizedFn`中`fnRef.current`的更新时机也是不确定的。

这就增加了在 **「并发更新」**下使用时潜在的风险。

可以说，`useEvent`通过限制`handlerRef.current`更新时机，进而限制应用场景，最终达到稳定的目的。

## 总结

`useEvent`当前还处于**RFC（Request For Comments）**[1]阶段。