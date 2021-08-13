---
home: true
lang: zh-CN
heroText: 笔记!
heroImage: /logo.svg

action:
  - text: 数据结构 💡
    type: primary

  - text: ES6

features:
  - title: 复合面试题
    details: 面试题的一部分汇总
    link: /algorithm/interview/baseInterview/
  - title: mozilla-js
    details: mozilla js 文档
    link: /mozillajs/baseObject/symbol/
  - title: mozilla-css
    details: mozilla css 文档
    link: /mozillaCss/reference/universalSelectors/
  - title: js 概念
    details: js 基础概念
    link: /js/stack/executionStack/
  - title: css
    details: css 面试题
    link: /css/interview/baseCss/
  - title: html
    details: html 面试题
    link: /html/interview/linkImport/
  - title: 浏览器 面试题
    details: 浏览器 面试题
    link: /browser/interview/baseInterview/
---

* 复合面试题
    * [第一套综合基础面试题](/algorithm/interview/baseInterview.md)

* mozilla-js
    * 第 1 期：基本对象
        * [symbol](/mozillajs/baseObject/symbol.md)
        * [promise](/mozillajs/baseObject/promise.md)
        * [XMLHttpRequest](/mozillajs/baseObject/xMLHttpRequest.md)

* mozilla-css
    * 第 1 期：CSS API
        * [通配选择器](/mozillaCss/reference/universalSelectors.md)
        * [元素选择器](/mozillaCss/reference/typeSelectors.md)
        * [类选择器](/mozillaCss/reference/classSelectors.md)
        * [ID 选择器](/mozillaCss/reference/iDSelectors.md)
        * [属性选择器](/mozillaCss/reference/attributeSelectors.md)
        * [组合选择器](/mozillaCss/reference/selectorList.md)
        * [相邻兄弟选择器](/mozillaCss/reference/adjacentSiblingCombinator.md)
        * [通用兄弟选择器](/mozillaCss/reference/generalSiblingCombinator.md)
        * [子选择器](/mozillaCss/reference/childCombinator.md)
        * [后代选择器](/mozillaCss/reference/descendantCombinator.md)
        * [伪类](/mozillaCss/reference/pseudoClasses.md)
        * [伪元素](/mozillaCss/reference/pseudoElements.md)

* js 概念
    * 第 1 期：调用堆栈
        * [【进阶1-1期】理解JavaScript 中的执行上下文和执行栈](/js/stack/executionStack.md)
        * [【进阶1-2期】JavaScript深入之执行上下文栈和变量对象](/js/stack/variableObject.md)
        * [【进阶1-3期】JavaScript深入之内存空间详细图解](/js/stack/memorySpace.md)
        * [【进阶1-4期】JavaScript深入之带走进内存机制](/js/stack/memoryMechanism.md)
        * [【进阶1-5期】JavaScript深入之4类常见内存泄漏及如何避免](/js/stack/memoryLeak.md)
    * 第 2 期：作用域闭包
        * [【进阶2-1期】深入浅出图解作用域链和闭包](/js/scope/scopeChain.md)
        * [【进阶2-2期】JavaScript深入之从作用域链理解闭包](/js/scope/understandingClosures.md)
        * [【进阶2-3期】JavaScript深入之闭包面试题解](/js/scope/closureInterview.md)
    * 第 3 期：this 全面解析
        * [【进阶3-1期】JavaScript深入之史上最全--5种this绑定全面解析](/js/this/thisBind.md)
        * [【进阶3-2期】JavaScript深入之重新认识箭头函数的this](/js/this/arrowFunctionThis.md)
        * [【进阶3-3期】深度广度解析 call 和 apply 原理、使用场景及实现](/js/this/callApply.md)
        * [【进阶3-4期】深度解析bind原理、使用场景及模拟实现](/js/this/bindSimulation.md)
        * [【进阶3-5期】深度解析 new 原理及模拟实现](/js/this/newSimulation.md)
    * 第 4 期：深浅拷贝原理
        * [【进阶4-1期】详细解析赋值、浅拷贝和深拷贝的区别](/js/clone/cloneIntroduction.md)
        * [【进阶4-2期】Object.assign 原理及其实现](/js/clone/objectAssign.md)
        * [【进阶4-3期】面试题之如何实现一个深拷贝](/js/clone/deepClone.md)
        * [【进阶4-4期】Lodash是如何实现深拷贝的](/js/clone/lodashDeepClone.md)
    * 第 5 期：原型Prototype
        * [【进阶5-1期】重新认识构造函数、原型和原型链](/js/prototype/baseProyotype.md)
        * [【进阶5-2期】图解原型链及其继承优缺点](/js/prototype/prototypeInherit.md)
        * [【进阶5-3期】深入探究 Function & Object 鸡蛋问题](/js/prototype/functionObjectResource.md)
    * 第 6 期：高阶函数
        * [【进阶6-1期】JavaScript 高阶函数浅析](/js/high/baseHigh.md)
        * [【进阶6-2期】深入高阶函数应用之柯里化](/js/high/currying.md)
        * [【进阶6-3期】Array 原型方法源码实现大解密](/js/high/arraySourceCode.md)
    * 第 7 期：防抖节流
        * [【进阶7-1期】深入浅出节流函数 throttle](/js/antiShakeThrottling/throttle.md)
        * [【进阶7-2期】深入浅出防抖函数 debounce](/js/antiShakeThrottling/debounce.md)
        * [【进阶7-3期】Throttle 和 Debounce 在 React 中的应用](/js/antiShakeThrottling/throttleDebounceReact.md)
        * [【进阶7-4期】深入篇 | 阿里 P6 必会 Lodash 防抖节流函数实现原理](/js/antiShakeThrottling/lodashPrinciple.md)
        * [【进阶7-5期】浅出篇 | 7 个角度吃透 Lodash 防抖节流原理](/js/antiShakeThrottling/lodashThrottleDebounce.md)
    * 第 8 期：框架用到的js API
        * [【进阶8-1期】Object.is（）](/js/interview/interview1.md)
    * js知识碎片
        * [js 兼容性](/js/interview/jsCompatible.md)
        * [event loop](/js/interview/eventLoop.md)
        * [Object.is](/js/interview/interview1.md)
        * [js 细节整理](/js/interview/baseInterview.md)
    * js零碎题目
        * [用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值](/js/scattered/interview50/interview1.md)
        * [写一个方法去掉字符串中的空格](/js/scattered/interview50/interview2.md)

* css
    * 面试题整理
        * [css基础面试](/css/interview/baseCss.md)
        * [css单位](/css/interview/units.md)
        * [css属性继承有哪些？css中可继承的属性和不可继承属性](/css/interview/cssTutorial.md)
        * [link 和 @import](/css/interview/linkImport.md)
        * [css hack](/css/interview/cssHack.md)
        * [css box modal](/css/interview/cssBoxModal.md)
        * [css Selector](/css/interview/cssSelector.md)
        * [css before after](/css/interview/cssBeforeAfter.md)
        * [css 优先级](/css/interview/cssPriority.md)
        * [css 外边距重叠](/css/interview/cssCollapsing.md)
        * [css 布局和包含块](/css/interview/containingBlock.md)
        * [css 层叠上下文](/css/interview/stackingContext.md)
        * [css 块格式化上下文(BFC)](/css/interview/blockFormattingContext.md)
        * [css 伪类和伪元素](/css/interview/cssPseudo.md)
        * [css Grid 网格布局教程](/css/interview/cssGridLayout.md)
        * [css flex布局](/css/interview/cssFlexLayout.md)
        * [css flex布局demo](/css/interview/cssFlexDemo.md)
        * [css 新伪类](/css/interview/cssPseudoClass.md)
        * [css inline-block元素间间距](/css/interview/cssInlineBlock.md)
        * [css 兼容性](/css/interview/cssCompatible.md)
        * [代码题目-span width|height](/css/code/spanWidthHeight.md)

* html
    * [第1天 使用link和@import有什么区别？](/html/interview/linkImport.md)
    * [第2天 html的元素？](/html/interview/htmlElement.md)
    * [第3天 HTML全局属性(global attribute)？](/html/interview/globalAttr.md)
    * [第4天 HTML5的文件离线储存？](/html/interview/offlineStorage.md)
    * [第5天 简述超链接target属性？](/html/interview/interview5.md)
    * [第6天 label都有哪些作用？](/html/interview/interview6.md)
    * [第7天 iframe框架都有哪些优缺点？](/html/interview/interview7.md)
    * [第9天 浏览器内多个标签页之间的通信方式？](/html/interview/interview8.md)
    * [第10天 viewport常见设置？](/html/interview/interview9.md)
    * [第12天 常见的浏览器内核？](/html/interview/interview10.md)
    * [第13天 html5中的form怎么关闭自动完成？](/html/interview/interview11.md)
    * [第14天 为什么HTML5只需要写<!DOCTYPE HTML>？](/html/interview/interview12.md)
    * [第15天 title与h1的区别、b与strong的区别、i与em的区别？](/html/interview/interview13.md)
    * [第16天 元素的alt和title有什么区别？](/html/interview/interview14.md)
    * [第17天 认为table的作用和优缺点？](/html/interview/interview15.md)
    * [第18天 怎样在页面上实现一个圆形的可点击区域？](/html/interview/interview16.md)
    * [第19天 html中的置换元素和非置换元素的理解？](/html/interview/interview17.md)
    * [第20天 请描述HTML元素的显示优先级？](/html/interview/interview18.md)
    * [第21天 input元素中readonly和disabled？](/html/interview/interview19.md)
    * [第22天 js放在html的`<body>`和`<head>`有什么区别？](/html/interview/interview20.md)
    * [第23天 关于`<form>`标签的enctype属性？](/html/interview/interview21.md)
    * [第24天 属性data-？](/html/interview/interview22.md)
    * [第26天 GBK和UTF-8，页面上产生乱码？](/html/interview/interview23.md)
    * [第27天 影子(Shadow)DOM？](/html/interview/interview24.md)
    * [第28天 `<meta>`标签？](/html/interview/interview25.md)
    * [第30天 网页上的验证码？](/html/interview/interview26.md)
    * [第31天 DOM和BOM？](/html/interview/interview27.md)
    * [第33天 html和html5？](/html/interview/interview28.md)
    * [第34天 Standards模式和Quirks模式？](/html/interview/interview29.md)
    * [第35天 用一个div模拟textarea的实现？](/html/interview/interview30.md)
    * [第37天 html5哪些标签可以优化SEO？](/html/interview/interview31.md)
    * [第38天 cookie和session？](/html/interview/interview32.md)
    * [第39天 title与h1、b与strong、i与em？](/html/interview/interview33.md)
    * [第43天 元素固定在页面底部？](/html/interview/interview34.md)
    * [第44天 video标签中预加载视频用到的属性？](/html/interview/interview35.md)
    * [第49天 target="_blank"安全性问题？](/html/interview/interview36.md)
    * [第51天 Form表单上传文件？](/html/interview/interview37.md)
    * [第53天 web workers？](/html/interview/interview38.md)
    * [第54天 HTML5的地理定位？](/html/interview/interview39.md)
    * [第55天 HTML5中新添加的表单属性？](/html/interview/interview40.md)
    * [第59天 WebGL？](/html/interview/interview41.md)
    * [第60天 src、href、link的区别？](/html/interview/interview42.md)
    * [第61天 HTML 拖放 API？](/html/interview/interview43.md)
    * [第64天 空格实体（5种以上）？](/html/interview/interview44.md)
    * [第65天 html直接输入多个空格为什么只能显示一个空格？](/html/interview/interview45.md)
    * [第66天 HTML5如果不写`<! DOCTYPE html>` ，页面还会正常工作么？](/html/interview/interview46.md)
    * [第67天 请写出唤醒拔打电话、发送邮件、发送短信的例子？](/html/interview/interview47.md)
    * [第68天 写个例子说明HTML5在移动端如何打开APP？](/html/interview/interview48.md)
    * [第69天 怎样禁止表单记住密码自动填充？](/html/interview/interview49.md)
    * [第70天 html的a标签属性rel='nofollow'有什么作用？](/html/interview/interview50.md)
    * [第71天 怎么在IE8及以下实现HTML5的兼容？](/html/interview/interview51.md)
    * [第72天 video和audio分别支持哪些格式？](/html/interview/interview52.md)
    * [第73天 favicon.ico有什么作用？怎么在页面中引用？常用尺寸有哪些？可以修改后缀名吗？](/html/interview/interview53.md)
    * [第74天 在a标签上的四个伪类执行顺序是什么？](/html/interview/interview54.md)
    * [第75天 web页面 标签优化？](/html/interview/interview55.md)
    * [第76天 HTML5如何识别语音读出的内容和朗读指定的内容？](/html/interview/interview56.md)
    * [第77天 HTML5的img标签属性srcset和sizes的理解？](/html/interview/interview57.md)
    * [第78天 HTML5中的datalist标签吗？](/html/interview/interview58.md)
    * [第79天 HTML5的应用程序缓存与浏览器缓存有什么不同？](/html/interview/interview59.md)
    * [第80天 Canvas和SVG区别？](/html/interview/canvasSvg.md)
    * [第81天 html5 datalist？](/html/interview/htmlDatalist.md)

* 浏览器 面试题 
    * 第 1 期：基础浏览器面试题
        * [第一套浏览器综合基础面试题](/browser/interview/baseInterview.md)
        * [Quirks模式是什么？它和Standards模式有什么区别?](/browser/interview/quirksStandards.md)
        * [获取localStorage和sessionStorage当前已存储大小?](/browser/interview/storageSpace.md)

* 服务端与网络 面试题
    * 第 1 期：http基础面试题
        * [第一套http综合基础面试题](/http/interview/baseInterview.md)
        * [Fetch API 教程](/http/interview/fetch.md)
        * [跨域资源共享 CORS 详解](/http/interview/cors.md)

* react 源码解析
    * [react 总结](/ILoveDevelop/react/index.md)
    * 概念 
        * [基础](/ILoveDevelop/react/principle/base.md)
        * [流程](/ILoveDevelop/react/principle/renderProcess.md)
        * [调度](/ILoveDevelop/react/principle/schedulingPrinciple.md)
        * [组件更新](/ILoveDevelop/react/principle/componentUpdate.md)
        * [diff 策略](/ILoveDevelop/react/principle/commpontDiff.md)
    * 基础
        * [react api](/ILoveDevelop/react/basic/reactApi.md)
        * [ReactElement api](/ILoveDevelop/react/basic/reactElement.md)
        * [ReactChildren api](/ILoveDevelop/react/basic/reactChildren.md)
        * [React 中的数据结构](/ILoveDevelop/react/basic/reactFiber.md)
    * 创建更新
        * [ReactDOM.render](/ILoveDevelop/react/createUpdate/reactDomRender.md)
        * [setState & forceUpdate](/ILoveDevelop/react/createUpdate/setStateForceUpdate.md)
        * [expirationTime 时间](/ILoveDevelop/react/createUpdate/expirationTime.md)
    * 任务调度
        * [全局变量](/ILoveDevelop/react/taskScheduling/globalVariable.md)
        * [scheduleWork](/ILoveDevelop/react/taskScheduling/scheduleWork.md)
        * [reactScheduler](/ILoveDevelop/react/taskScheduling/reactScheduler.md)
        * [performWork](/ILoveDevelop/react/taskScheduling/performWork.md)
        * [performUnitOfWork](/ILoveDevelop/react/taskScheduling/performUnitOfWork.md)
        * [renderRoot](/ILoveDevelop/react/taskScheduling/renderRoot.md)
        * [throwException](/ILoveDevelop/react/taskScheduling/throwException.md)
        * [beginWork](/ILoveDevelop/react/taskScheduling/beginWork.md)
        * [mountIndeterminateComponent](/ILoveDevelop/react/taskScheduling/mountIndeterminateComponent.md)
        * [mountLazyCompont](/ILoveDevelop/react/taskScheduling/mountLazyCompont.md)
        * [updateFunctionalComponent](/ILoveDevelop/react/taskScheduling/updateFunctionalComponent.md)
        * [updateClassComponent](/ILoveDevelop/react/taskScheduling/updateClassComponent.md)
        * [updateHostRoot](/ILoveDevelop/react/taskScheduling/updateHostRoot.md)
        * [updateHostComponent](/ILoveDevelop/react/taskScheduling/updateHostComponent.md)
        * [updateHostText](/ILoveDevelop/react/taskScheduling/updateHostText.md)
        * [updateSuspenseComponent](/ILoveDevelop/react/taskScheduling/updateSuspenseComponent.md)
        * [updatePortalComponent](/ILoveDevelop/react/taskScheduling/updatePortalComponent.md)
        * [updateForwardRef](/ILoveDevelop/react/taskScheduling/updateForwardRef.md)
        * [updateFragment](/ILoveDevelop/react/taskScheduling/updateFragment.md)
        * [updateMode](/ILoveDevelop/react/taskScheduling/updateMode.md)
        * [updateProfiler](/ILoveDevelop/react/taskScheduling/updateProfiler.md)
        * [updateContextProvider](/ILoveDevelop/react/taskScheduling/updateContextProvider.md)
        * [updateContextConsumer](/ILoveDevelop/react/taskScheduling/updateContextConsumer.md)
        * [reconcileChildren](/ILoveDevelop/react/taskScheduling/reconcileChildren.md)
        * [reconcileSingleElement](/ILoveDevelop/react/taskScheduling/reconcileSingleElement.md)
        * [reconcileChildrenArray](/ILoveDevelop/react/taskScheduling/reconcileChildrenArray.md)
    * commit 阶段 
        * [commitRoot](/ILoveDevelop/react/commit/commitRoot.md)
        * [invokeGuardedCallback](/ILoveDevelop/react/commit/invokeGuardedCallback.md)
        * [commitBeforeMutationLifecycles](/ILoveDevelop/react/commit/commitBeforeMutationLifecycles.md)
        * [commitAllHostEffects](/ILoveDevelop/react/commit/commitAllHostEffects.md)
        * [commitPlacement](/ILoveDevelop/react/commit/commitPlacement.md)
        * [commitWork](/ILoveDevelop/react/commit/commitWork.md)
        * [commitDeletion](/ILoveDevelop/react/commit/commitDeletion.md)
        * [commitAllLifeCycles](/ILoveDevelop/react/commit/commitAllLifeCycles.md)
    * 功能
        * [context](/ILoveDevelop/react/features/context.md)
        * [hydrate](/ILoveDevelop/react/features/hydrate.md)
        * [ref](/ILoveDevelop/react/features/ref.md)
        * [事件系统初始化](/ILoveDevelop/react/features/evenInit.md)
        * [事件绑定](/ILoveDevelop/react/features/eventBind.md)
        * [事件触发](/ILoveDevelop/react/features/eventDispath.md)
        * [事件对象生成](/ILoveDevelop/react/features/eventCreateEventObject.md)
        * [suspense](/ILoveDevelop/react/features/suspense.md)
        * [挂起任务](/ILoveDevelop/react/features/suspenseWork.md)
        * [lazy 组件](/ILoveDevelop/react/features/suspenseLazy.md)
    * Hooks 
        * [基础](/ILoveDevelop/react/hooks/start.md)
        * [useState](/ILoveDevelop/react/hooks/useState.md)
        * [useEffect](/ILoveDevelop/react/hooks/useEffect.md)
        * [其他API](/ILoveDevelop/react/hooks/hooksOther.md)
        * [通用API](/ILoveDevelop/react/hooks/hooksCommon.md)

* webpack
    * 第 1 期：基础概念笔记
        * [整理 1](/webpack/interview/webpackInterview.md)
        * [基本概念](/webpack/interview/baseInterview.md)
        * [配置](/webpack/interview/configuration.md)
        * [入口起点(entry points)](/webpack/interview/entryPoints.md)
        * [输出(output)](/webpack/interview/output.md)
        * [loader](/webpack/interview/loader.md)
        * [plugin](/webpack/interview/plugin.md)

* rollup
    * 第 1 期：rollUp 描述
        * [介绍](/rollup/baseApi/Introduction.md)
        * [命令行界面](/rollup/baseApi/CommandLineInterface.md)
        * [JavaScript API](/rollup/baseApi/JsApi.md)
        * [ES模块语法](/rollup/baseApi/EsModal.md)
        * [demo 示例](/rollup/baseApi/DemoRollup.md)
        * [插件开发](/rollup/baseApi/PluginDevelopment.md)
        
* GIT
    * [git基础面试](/git/index.md)

* umi
    * 第 1 期：umi基础知识点
        * [@umijs/plugin-dva](/umi/interview/pluginDva.md)
        * [@umijs/plugin-qiankun](/umi/interview/pluginQiankun.md)

* vue
    * 第 1 期：源码解读-准备工作
        * [flow](/vue/prepare/flow.md)
        * [源码目录](/vue/prepare/directory.md)
        * [源码构建](/vue/prepare/build.md)
        * [入口](/vue/prepare/entrance.md)
    * 第 2 期：源码解读-数据驱动
        * [概述](/vue/data-driven/index.md)
        * [new Vue](/vue/data-driven/new-vue.md)
        * [挂载实现](/vue/data-driven/mounted.md)
        * [render](/vue/data-driven/render.md)
        * [Virtual DOM](/vue/data-driven/virtual-dom.md)
        * [createElement](/vue/data-driven/create-element.md)
        * [update](/vue/data-driven/update.md)
    * 第 3 期：源码解读-组件化
        * [概述](/vue/components/index.md)
        * [createComponent](/vue/components/create-component.md)
        * [patch](/vue/components/patch.md)
        * [合并配置](/vue/components/merge-option.md)
        * [生命周期](/vue/components/lifecycle.md)
        * [组件注册](/vue/components/component-register.md)
        * [异步组件](/vue/components/async-component.md)
    * 第 4 期：源码解读-深入响应式原理
        * [概述](/vue/reactive/index.md)
        * [响应式对象](/vue/reactive/reactive-object.md)
        * [依赖收集](/vue/reactive/getters.md)
        * [派发更新](/vue/reactive/setters.md)
        * [nextTick](/vue/reactive/next-tick.md)
        * [检测变化的注意事项](/vue/reactive/questions.md)
        * [计算属性 VS 侦听属性](/vue/reactive/computed-watcher.md)
        * [组件更新](/vue/reactive/component-update.md)
        * [Props (v2.6.11)](/vue/reactive/props.md)
        * [原理图](/vue/reactive/summary.md)
    * 第 5 期：源码解读-编译
        * [概述](/vue/compile/index.md)
        * [编译入口](/vue/compile/entrance.md)
        * [parse](/vue/compile/parse.md)
        * [optimize](/vue/compile/optimize.md)
        * [codegen](/vue/compile/codegen.md)
    * 第 6 期：源码解读-扩展
        * [概述](/vue/extend/index.md)
        * [event](/vue/extend/event.md)
        * [v-model](/vue/extend/v-model.md)
        * [slot](/vue/extend/slot.md)
        * [keep-alive](/vue/extend/keep-alive.md)
        * [transition](/vue/extend/tansition.md)
        * [transition-group](/vue/extend/tansition-group.md)
    * 第 7 期：源码解读-Vue Router
        * [概述](/vue/vue-router/index.md)
        * [路由注册](/vue/vue-router/install.md)
        * [VueRouter 对象](/vue/vue-router/router.md)
        * [matcher](/vue/vue-router/matcher.md)
        * [路径切换](/vue/vue-router/transition-to.md)
    * 第 8 期：源码解读-Vuex
        * [概述](/vue/vuex/idex.md)
        * [Vuex 初始化](/vue/vuex/init.md)
        * [API](/vue/vuex/api.md)
        * [插件](/vue/vuex/plugin.md)
    * 第 9 期：基础面试题
        * [整理1](/vue/interview/baseInterview.md)
        * [整理2](/vue/interview/baseInterviewSecond.md)
        * [知识体系](/vue/interview/knowledgeSystem.md)
        * [响应式详解](/vue/interview/detailedResponsiveness.md)
        * [组件间通信](/vue/interview/componentCommunication.md)
        * [事件绑定](/vue/interview/eventBinding.md)
        * [slot插槽](/vue/interview/slot.md)
        * [模板编译](/vue/interview/templateCompilation.md)
        * [diff算法](/vue/interview/diff.md)
        * [key作用](/vue/interview/key.md)

* react
    * 第 1 期：React理念
        * [React理念](/react/preparation/idea.md)
        * [老的React架构](/react/preparation/oldConstructure.md)
        * [新的React架构](/react/preparation/newConstructure.md)
        * [Fiber架构的心智模型](/react/process/fiber-mental.md)
        * [Fiber架构的实现原理](/react/process/fiber.md)
        * [Fiber架构的工作原理](/react/process/doubleBuffer.md)
        * [总结](/react/preparation/summary.md)
    * 第 2 期：前置知识
        * [源码的文件结构](/react/preparation/file.md)
        * [调试源码](/react/preparation/source.md)
        * [深入理解JSX](/react/preparation/jsx.md)
    * 第 3 期：render阶段
        * [流程概览](/react/process/reconciler.md)
        * [beginWork](/react/process/beginWork.md)
        * [completeWork](/react/process/completeWork.md)
    * 第 4 期：commit阶段
        * [流程概览](/react/renderer/prepare.md)
        * [before mutation阶段](/react/renderer/beforeMutation.md)
        * [mutation阶段](/react/renderer/mutation.md)
        * [layout阶段](/react/renderer/layout.md)
    * 第 5 期：Diff算法
        * [概览](/react/diff/prepare.md)
        * [单节点Diff](/react/diff/one.md)
        * [多节点Diff](/react/diff/multi.md)
    * 第 6 期：状态更新
        * [流程概览](/react/state/prepare.md)
        * [心智模型](/react/state/mental.md)
        * [Update](/react/state/update.md)
        * [深入理解优先级](/react/state/priority.md)
        * [ReactDOM.render](/react/state/reactdom.md)
        * [this.setState](/react/state/setstate.md)
    * 第 7 期：Hooks
        * [Hooks理念](/react/hooks/prepare.md)
        * [极简Hooks实现](/react/hooks/create.md)
        * [Hooks数据结构](/react/hooks/structure.md)
        * [useState与useReducer](/react/hooks/usestate.md)
        * [useEffect](/react/hooks/useeffect.md)
        * [useRef](/react/hooks/useref.md)
        * [useMemo与useCallback](/react/hooks/usememo.md)
    * 第 8 期：Concurrent Mode
        * [概览](/react/concurrent/prepare.md)
        * [Scheduler的原理与实现](/react/concurrent/scheduler.md)
        * [lane模型](/react/concurrent/lane.md)
        <!-- * [异步可中断更新](/react/concurrent/disrupt.md) -->
        * [深入源码剖析componentWillXXX为什么UNSAFE](/react/concurrent/componentWillXXX.md)
    * 第 9 期：基础概念
        * [概述](/react/principle/basePrinciple.md)
        * [组件类-api](/react/principle/componentApi.md)
        * [工具类-api](/react/principle/toolApi.md)
        * [hooks-api](/react/principle/hookApi.md)
        * [react-dom-api](/react/principle/domApi.md)
        * [react-hook 使用](/react/principle/hookUse.md)
        * [react-hook 自定义](/react/principle/hookCustom.md)
        * [react-hook 原理](/react/principle/hookPrinciple.md)
        * [深入 hoc](/react/principle/hoc.md)
        * [React-redux 源码](/react/principle/reactRedux.md)
        * [react缓存页面](/react/principle/reactKeeplive.md)
        * [react-router路由原理](/react/principle/reactRouter.md)
    * 第 10 期：基础面试题
        * [什么时候使用状态管理器?](/react/interview/50/interview1.md)
        * [render函数中return如果没有使用()会有什么问题?](/react/interview/50/interview2.md)
        * [componentWillUpdate可以直接修改state的值吗?](/react/interview/50/interview3.md)
        * [说说对React的渲染原理的理解?](/react/interview/50/interview4.md)
        * [什么渲染劫持？](/react/interview/50/interview5.md)
        * [React Intl？](/react/interview/50/interview6.md)
        * [Context？](/react/interview/50/interview7.md)
        * [Context 实例？](/react/interview/50/interview12.md)
        * [Render Props？](/react/interview/50/interview8.md)
        * [高阶组件？](/react/interview/50/interview9.md)
        * [Refs 转发？](/react/interview/50/interview10.md)
        * [React 顶层 API？](/react/interview/50/interview11.md)
        * [contextType？](/react/interview/50/interview13.md)
        * [除了实例的属性可以获取Context外哪些地方还能直接获取Context？](/react/interview/50/interview14.md)
        * [Consumer？](/react/interview/50/interview15.md)
        * [windowing？](/react/interview/50/interview16.md)
        * [ReactDOM-React的插槽(Portals)？](/react/interview/50/interview17.md)
        * [React的插槽(Portals)？](/react/interview/50/interview18.md)
        * [构造函数？](/react/interview/50/interview19.md)
        * [React 拆分组件？](/react/interview/50/interview20.md)
        * [React 的严格模式？](/react/interview/50/interview21.md)
        * [relay？](/react/interview/50/interview22.md)
        * [捕获错误？](/react/interview/50/interview23.md)
        * [如果组件的属性没有传值，那么它的默认值是什么？？](/react/interview/50/interview24?id=props-默认值为-true)
        * [React的表单库？](/react/interview/50/interview25.md)
        * [suspense组件？](/react/interview/50/interview26.md)
        * [`super()`和`super(props)`？](/react/interview/50/interview27.md)
        * [动态导入组件？](/react/interview/50/interview28.md)
        * [给非控组件设置默认的值？](/react/interview/50/interview29.md)
        * [使用Hooks获取服务端数据？](/react/interview/50/interview30.md)
        * [render方法的原理？](/react/interview/50/interview31.md)
        * [使用Hooks？](/react/interview/50/interview32.md)
        * [useEffect和useLayoutEffect？](/react/interview/50/interview33.md)
        * [自定义组件时render是否为可选的？](/react/interview/50/interview34.md)
        * [React必须使用JSX？](/react/interview/50/interview35.md)
        * [需要把keys设置为全局唯一？](/react/interview/50/interview36.md)
        * [怎么定时更新一个组件？](/react/interview/50/interview37.md)
        * [使用webpack打包React项目优化？](/react/interview/50/interview38.md)
        * [React根据不同的环境打包？](/react/interview/50/interview39.md)
        * [遍React的源码](/react/interview/50/interview40.md)
        * [React.forwardRef](/react/interview/50/interview41.md)
        * [React事件](/react/interview/50/interview42.md)
        * [React的reconciliation（一致化算法）](/react/interview/50/interview43.md)
        * [Fragment|DOM 元素|安全注入](/react/interview/50/interview44.md)
        * [React中如何监听state](/react/interview/50/interview45.md)
        * [为什么 props 复制给 state 会产生 bug](/react/interview/50/interview46.md)
        * [React为什么不要直接修改state|React Fiber](/react/interview/50/interview47.md)
        * [装饰器(Decorator)React](/react/interview/50/interview48.md)
        * [react 手动清除|for和htmlFor](/react/interview/50/interview49.md)
        * [React 状态管理](/react/interview/50/interview50.md)
        * [React 新特性](/react/interview/100/interview51.md)
        * [React 事件引用](/react/interview/100/interview52.md)
        * [constructor和getInitialState|引入本地图片](/react/interview/100/interview53.md)
        * [Immutable Data](/react/interview/100/interview54.md)
        * [提高组件的渲染效率](/react/interview/100/interview55.md)
        * [react 推行函数式组件](/react/interview/100/interview56.md)

* 算法
    * 第 1 期：基础面试题
        * [第一套综合基础面试题](/algorithm/interview/baseInterview.md)

```yml
action 暂存

login-gittee:
    runs-on: ubuntu-latest
    steps:
    - name: Sync to Gitee
      uses: Yikun/gitee-mirror-action@v1.1
      with:
        # 必选，需要同步的Github用户（源）
        src: github/sykinggg
        # 必选，需要同步到的Gitee的用户（目的）
        dst: gitee/systudy
        # 必选，Gitee公钥对应的私钥，https://gitee.com/profile/sshkeys
        dst_key: ${{ secrets.GITEE_PRIVATE_KEY }}
        # 必选，Gitee对应的用于创建仓库的token，https://gitee.com/profile/personal_access_tokens
        dst_token:  ${{ secrets.GITEE_TOKEN }}
        static_list: "notes"
  reload-pages:
    needs: login-gittee
    runs-on: ubuntu-latest
    steps:
      - name: Build Gitee Pages
        uses: yanglbme/gitee-pages-action@main
        with:
          # 注意替换为你的 Gitee 用户名
          gitee-username: systudy
          # 注意在 Settings->Secrets 配置 GITEE_PASSWORD
          gitee-password: ${{ secrets.GITEE_PASSWORD }}
          # 注意替换为你的 Gitee 仓库，仓库名严格区分大小写，请准确填写，否则会出错
          gitee-repo: systudy/notes
          # 要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）
          branch: gh_pages
```