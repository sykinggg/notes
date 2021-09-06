# 虚拟DOM和DOM-diff

## 虚拟DOM

**虚拟DOM**简而言之就是，用JS去按照DOM结构来实现的树形结构对象，你也可以叫做**DOM对象**

当然，这里还有整个项目的[地址](https://github.com/chenhongdong/article/tree/develop/%E8%99%9A%E6%8B%9Fdom/dom-diff)方便查看

### 实现一下虚拟DOM

![demo](/notes/assets/react/1699a54e3737e10c.png)


## 总结

整个**DOM-diff**的过程

1. 用`JS`对象模拟`DOM`（**虚拟DOM**）

1. 把此`虚拟DOM`转成`真实DOM`并插入页面中（**render**）

1. 如果有事件发生修改了`虚拟DOM`，比较两棵`虚拟DOM树`的差异，得到差异对象（**diff**）

1. 把差异对象应用到真正的`DOM树`上（**patch**）