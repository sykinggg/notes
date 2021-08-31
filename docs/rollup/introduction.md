# Introduction

## Overview

Rollup 是一个用于 JavaScript 的模块打包器，它将小段代码编译成更大更复杂的东西，比如库或应用程序。它对包含在 JavaScript 的 ES6 修订版中的代码模块使用新的标准化格式，而不是以前的特殊解决方案，例如 CommonJS 和 AMD。 ES 模块让您可以自由无缝地组合您最喜欢的库中最有用的单个功能。这最终在任何地方都可以实现，但是 Rollup 让你今天就可以做到。

## Installation

```sh
npm install --global rollup
```

这将使 Rollup 可用作全局命令行工具。您也可以在本地安装，请参阅在[本地安装 Rollup](https://rollupjs.org/guide/en/#installing-rollup-locally)。

## Quick start

可以通过带有可选配置文件的[命令行界面](https://rollupjs.org/guide/en/#command-line-reference)或通过其 [JavaScript API](https://rollupjs.org/guide/en/#javascript-api) 使用 Rollup。运行 rollup --help 以查看可用选项和参数。

::: danger 警告
请参阅 [rollup-starter-lib](https://github.com/rollup/rollup-starter-lib) 和 [rollup-starter-app](https://github.com/rollup/rollup-starter-app) 以查看使用 Rollup 的示例库和应用程序项目
:::

这些命令假定应用程序的入口点名为 main.js，并且您希望所有导入都编译到一个名为 bundle.js 的文件中。

<CodeGroup>
<CodeGroupItem title="对于浏览器">

```sh
# compile to a <script> containing a self-executing function ('iife')
rollup main.js --file bundle.js --format iife
```

</CodeGroupItem>
<CodeGroupItem title="对于 Node.js：">

```sh
# compile to a CommonJS module ('cjs')
rollup main.js --file bundle.js --format cjs
```

</CodeGroupItem>
<CodeGroupItem title="对于浏览器和 Node.js：">

```sh
# UMD format requires a bundle name
rollup main.js --file bundle.js --format umd --name "myBundle"
```

</CodeGroupItem>
</CodeGroup>

### 产生原因

如果您将项目分成更小的独立部分，开发软件通常会更容易，因为这通常会消除意外的交互并显着降低您需要解决的问题的复杂性，并且首先简单地编写较小的项目不一定是回答。不幸的是，JavaScript 历史上并没有将此功能作为该语言的核心功能。
这最终随着 JavaScript 的 ES6 修订版而改变，其中包括用于导入和导出函数和数据的语法，以便它们可以在不同的脚本之间共享。该规范现已修复，但仅在现代浏览器中实现，并未在 Node.js 中最终确定。 Rollup 允许您使用新的模块系统编写代码，然后将其编译回现有支持的格式，例如 CommonJS 模块、AMD 模块和 IIFE 风格的脚本。这意味着您可以编写面向未来的代码，并且您还可以获得……的巨大好处。

### Tree-Shaking

除了启用 ES 模块的使用外，Rollup 还会静态分析您正在导入的代码，并将排除任何实际未使用的代码。这使您可以在现有工具和模块的基础上进行构建，而无需添加额外的依赖项或增加项目的大小。

例如，对于 CommonJS，必须导入整个工具或库。

```js
// import the entire utils object with CommonJS
const utils = require('./utils');
const query = 'Rollup';
// use the ajax method of the utils object
utils.ajax(`https://api.example.com?search=${query}`).then(handleResponse);
```

使用 ES 模块，我们可以只导入我们需要的一个 ajax 函数，而不是导入整个 utils 对象：

```js
// import the ajax function with an ES6 import statement
import { ajax } from './utils';
const query = 'Rollup';
// call the ajax function
ajax(`https://api.example.com?search=${query}`).then(handleResponse);
```

因为 Rollup 包括最低限度，所以它产生更轻、更快、更简单的库和应用程序。由于这种方法可以使用显式导入和导出语句，因此它比简单地运行自动缩小器来检测编译输出代码中未使用的变量更有效。

### Compatibility

#### 导入 CommonJS

Rollup 可以通过[插件导入](https://github.com/rollup/plugins/tree/master/packages/commonjs)现有的 CommonJS 模块。

#### 发布 ES 模块

为了确保您的 ES 模块可以立即被与 CommonJS 一起使用的工具（例如 Node.js 和 webpack）使用，您可以使用 Rollup 编译为 UMD 或 CommonJS 格式，然后使用包中的 main 属性指向该编译版本。 .json 文件。如果你的 package.json 文件也有 module 字段，ES-module-aware 工具如 Rollup 和 [webpack 2+](https://webpack.js.org/) 将直接[导入 ES 模块版本](https://github.com/rollup/rollup/wiki/pkg.module)。

## Command Line Interface


通常应从命令行使用RollUp。您可以提供一个可选的 Rollup 配置文件来简化命令行使用并启用高级 Rollup 功能。

### Configuration Files

Rollup 配置文件是可选的，但它们功能强大且方便，因此推荐使用。配置文件是一个 ES 模块，它导出具有所需选项的默认对象：

```js
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
```

通常，它称为 rollup.config.js 并位于项目的根目录中。在幕后，Rollup 通常会在需要之前将此文件及其相关依赖项转换并捆绑到 CommonJS。这样做的好处是您可以与 ES 模块代码库共享代码，同时与 Node 生态系统具有完全的互操作性。

如果要使用Require和Module.Exports将Config写为CommonJS模块，则应将文件扩展名更改为.cjs，这将阻止RollUp尝试转换该文件。此外，如果您在节点13+上，将文件扩展名更改为.mjs还将阻止RollUp从转介IT转移，但将文件导入ES模块。有关更多详细信息，请参阅[使用未转换的配置文件](https://rollupjs.org/guide/en/#using-untranspiled-config-files)以及为什么您可能想要执行此操作。

您还可以使用其他语言进行配置文件，如类型键。要执行此操作，请安装相应的rollup插件，如@ rollup / plugin-typescript，并使用[--configplugin](https://rollupjs.org/guide/en/#--configplugin-plugin)选项：

```sh
rollup --config rollup.config.ts --configPlugin typescript
```

另外看看[Config IntelliSense](https://rollupjs.org/guide/en/#config-intellisense)以获取更多方法，以便在CONFIG文件中使用Typescript键入。

配置文件支持下面列出的选项。有关每个选项的详细信息，请咨询[大型选项列表](https://rollupjs.org/guide/en/#big-list-of-options)：

```js
// rollup.config.js

// can be an array (for multiple inputs)
export default {
  // core input options
  external,
  input, // conditionally required
  plugins,

  // advanced input options
  cache,
  onwarn,
  preserveEntrySignatures,
  strictDeprecations,

  // danger zone
  acorn,
  acornInjectPlugins,
  context,
  moduleContext,
  preserveSymlinks,
  shimMissingExports,
  treeshake,

  // experimental
  experimentalCacheExpiry,
  perf,

  // required (can be an array, for multiple outputs)
  output: {
    // core output options
    dir,
    file,
    format, // required
    globals,
    name,
    plugins,

    // advanced output options
    assetFileNames,
    banner,
    chunkFileNames,
    compact,
    entryFileNames,
    extend,
    footer,
    hoistTransitiveImports,
    inlineDynamicImports,
    interop,
    intro,
    manualChunks,
    minifyInternalExports,
    outro,
    paths,
    preserveModules,
    preserveModulesRoot,
    sourcemap,
    sourcemapExcludeSources,
    sourcemapFile,
    sourcemapPathTransform,
    validate,

    // danger zone
    amd,
    esModule,
    exports,
    externalLiveBindings,
    freeze,
    indent,
    namespaceToStringTag,
    noConflict,
    preferConst,
    sanitizeFileName,
    strict,
    systemNullSetters
  },

  watch: {
    buildDelay,
    chokidar,
    clearScreen,
    skipWrite,
    exclude,
    include
  }
};
```

您可以从配置文件中导出数组，即使在Watch模式下，即使在Watch模式下也可以将数组从多个不相关的输入中构建捆绑包。要使用相同的输入构建不同的捆绑包，可以为每个输入提供一系列输出选项：

```js
// rollup.config.js (building more than one bundle)

export default [
  {
    input: 'main-a.js',
    output: {
      file: 'dist/bundle-a.js',
      format: 'cjs'
    }
  },
  {
    input: 'main-b.js',
    output: [
      {
        file: 'dist/bundle-b1.js',
        format: 'cjs'
      },
      {
        file: 'dist/bundle-b2.js',
        format: 'es'
      }
    ]
  }
];
```

如果要异步地创建配置，Rollup还可以处理解析为对象或数组的承诺。

```js
// rollup.config.js
import fetch from 'node-fetch';
export default fetch('/some-remote-service-or-file-which-returns-actual-config');
```

同样，您也可以执行以下操作：

```js
// rollup.config.js (Promise resolving an array)
export default Promise.all([fetch('get-config-1'), fetch('get-config-2')]);
```

要使用配置文件RollUp，请传递--config或-c标志：

```sh
# pass a custom config file location to Rollup
rollup --config my.config.js

# if you do not pass a file name, Rollup will try to load
# configuration files in the following order:
# rollup.config.mjs -> rollup.config.cjs -> rollup.config.js
rollup --config
```

您还可以导出返回任何上述配置格式的函数。此函数将传递当前命令行参数，以便您可以动态地调整配置以尊重例如。 [--silent](https://rollupjs.org/guide/en/#--silent)。如果您使用Config以配置为前缀，您甚至可以定义自己的命令行选项：

```js
// rollup.config.js
import defaultConfig from './rollup.default.config.js';
import debugConfig from './rollup.debug.config.js';

export default commandLineArgs => {
  if (commandLineArgs.configDebug === true) {
    return debugConfig;
  }
  return defaultConfig;
};
```

如果您现在运行`rollup --config --configdebug`，则将使用调试配置。

默认情况下，命令行参数将始终覆盖从配置文件导出的各个值。如果要更改此行为，则可以通过从`commandlineargs`对象删除它们来使rollup忽略命令行参数：

```js
// rollup.config.js
export default commandLineArgs => {
  const inputBase = commandLineArgs.input || 'main.js';

  // this will make Rollup ignore the CLI argument
  delete commandLineArgs.input;
  return {
    input: 'src/entries/' + inputBase,
    output: {...}
  }
}
```

### Config Intellisense

由于Rollup带有TypeScript的类型，你可以利用IDE的Intellisense与JSDoc类型提示。

```js
// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  // ...
};

export default config;
```

或者，你可以使用`defineConfig`助手，它应该提供Intellisense而不需要JSDoc注释。

```js
// rollup.config.js
import { defineConfig } from 'rollup';

export default defineConfig({
  // ...
});
```

除了`RollupOptions`和封装这种类型的`defineConfig`帮助器，以下类型也可以证明是有用的。

* `OutputOptions`: 配置文件的输出部分

* `Plugin`: 一个插件对象，它提供了一个名称和一些钩子。所有的钩子都是完全类型化的，以帮助插件的开发。

* `pluginimpl`：将选项对象映射到插件对象的函数。大多数公共rollup插件遵循此模式。

您还可以通过[--configplugin](https://rollupjs.org/guide/en/#--configplugin-plugin)选项直接在键入版中编写CONFIC。

### Differences to the JavaScript API

虽然配置文件提供了一种配置RollUp的简单方法，但它们还会限制如何调用和配置RollUp。特别是如果您将RollUp到另一个构建工具或想要将其集成到高级构建过程中，则可以更好地从脚本上编程地调用RollUp。

如果要从配置文件切换到在某些时候使用[JavaScript API](https://rollupjs.org/guide/en/#javascript-api)，则会有一些重要的差异：

* 使用JavaScript API时，将传递给Rollup.rollup必须是一个对象，不能以承诺或函数包裹。

* 您无法再使用一系列配置。相反，您应该为每组`InputOptions`运行Rollup.rollup.rollup。

* 输出选项将被忽略。相反，对于每组输出选项，您应该运行`bundle.generate(outputOptions)`或`bundle.write(outputOptions)`。

### Loading a configuration from a Node package

对于互操作性，Rollup还支持从安装到`node_modules`的包中加载配置文件：

```sh
# this will first try to load the package "rollup-config-my-special-config";
# if that fails, it will then try to load "my-special-config"
rollup --config node:my-special-config
```

### Using untranspiled config files

默认情况下，Rollup将期望配置文件是eS模块，并将其发送并转换为它们，并在要求它们之前向CommonJS进行传输。这是一个快速的过程，并且具有易于在配置和ES模块代码库之间共享代码的优点。如果要将配置写入CommonJs，则可以使用`.cjs`扩展名来跳过此过程：

```js
// rollup.config.cjs
module.exports = {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
```

如果您想不仅从命令行使用CONFIC文件，而且可以从以编程方式从您的自定义脚本使用，但可能是相关的。

另一方面，如果你至少使用Node 13并且在`package.json`文件中有 `"type"`: `"模块"`，Rollup的转译会阻止你的配置文件导入本身是ES模块的包。在这种情况下，将你的文件扩展名改为.mjs将指示Rollup将你的配置直接作为ES模块导入。然而，请注意，这是专门针对Node 13+的；在更早的Node版本中，`.mjs`的处理方式与`.js`相同。

在**Node 13+**上使用`.mjs`时，有一些潜在的麻烦。

* 您只能从CommonJS插件获取默认导出

* 你可能无法导入JSON文件，如你的package.json文件。有两种方法可以解决这个问题。

  * 通过以下方式运行Rollup CLI

  ```sh
  node --experimental-json-modules ./node_modules/.bin/rollup --config
  ```

  * 创建一个需要JSON文件的CommonJS包装器：

  ```js
  // load-package.cjs
  module.exports = require('./package.json');

  // rollup.config.mjs
  import pkg from './load-package.cjs';
  ...
  ```

### Command line flags

许多选项都有对应的命令行。在这些情况下，如果你使用的是配置文件，那么这里传递的任何参数都将覆盖配置文件的内容。这是一个所有支持的选项的列表。

```
-c, --config <filename> 使用这个配置文件（如果参数被使用，但值没有指定
未指定，默认为rollup.config.js)
-d, --dir <dirname> 块的目录（如果没有，打印到stdout）。
-e, --external <ids> 逗号分隔的要排除的模块ID列表
-f, --format <format> 输出的类型(amd, cjs, es, iife, umd, system)
-g, --globals <pairs> 逗号分隔的 "moduleID:Global "配对列表
-h, --help 显示此帮助信息
-i, --input <filename> 输入（替代<entry file>）。
-m, --sourcemap 生成源码图（`-m inline`表示内联图
-n, --name <名称> 用于UMD输出的名称
-o, --file <output>单个输出文件（如果没有，则打印到stdout）。
-p, --plugin <plugin> 使用指定的插件（可以重复）。
-v, --version 显示版本号
-w, --watch 观察软件包中的文件，并在发生变化时重新构建
--amd.id <id> AMD模块的ID（默认为匿名）。
--amd.autoId 根据块的名称生成AMD的ID
--amd.basePath <prefix> 在自动生成的AMD ID前加上的路径
--amd.define <name> 用来代替`define`的函数。
--assetFileNames <pattern> 排放资产的名称模式
--banner <text> 在bundle顶部插入代码（在wrapper之外）。
--chunkFileNames <pattern> 排放的二级块的名称模式
--compact 缩减包装器代码
--context <variable> 指定顶层的`this`值
--entryFileNames <pattern> 排放的入口块的名称模式
--environment <values> 传递给配置文件的设置（见示例）。
--no-esModule 不添加__esModule属性
--exports <mode> 指定输出模式（自动、默认、命名、无）。
--extend 扩展由 --name 定义的全局变量
--no-externalLiveBindings 不生成支持实时绑定的代码
--failAfterWarnings 如果构建过程中产生了警告，则以错误退出
--footer <text> 在bundle的末尾插入代码（在wrapper之外）。
--no-freeze 不冻结命名空间对象
--no-hoist TransitiveImports 不把横向导入的内容挂到入口块中。
--no-indent 不要缩进结果。
--no-interop 不包括互操作块
--inlineDynamicImports 当使用动态导入时，创建单个捆绑包。
--intro <text> 在bundle的顶部插入代码（在wrapper里面）。
--minifyInternalExports 强制或禁止对内部导出文件进行最小化处理
--namespaceToStringTag 为命名空间创建适当的`.toString`方法
--noConflict 为UMD globals生成一个noConflict方法
--outro <text> 在bundle的末尾插入代码（在wrapper内）。
--preferConst 使用`const`而不是`var`进行输出
--no-preserveEntrySignatures 避免使用入口点的facade chunks。
--preserveModules 保留模块结构
--preserveModulesRoot 将保留的模块放在根级的这个路径下
--preserveSymlinks 在解析文件时不遵循符号链接。
--no-sanitizeFileName 不替换文件名中的无效字符
--shimMissingExports 为丢失的出口创建shim变量。
--silent 不打印警告信息
--sourcemapExcludeSources 不在源码图中包括源代码
--sourcemapFile <file> 为源码地图指定捆绑位置
--stdin=ext 指定用于stdin输入的文件扩展名
--no-stdin 不要从stdin读取"-"。
--no-strict 不要在生成的模块中发出`"use strict";`。
--strictDeprecations 对已废弃的功能抛出错误
--systemNullSetters 用 "null "替换空的SystemJS设置器。
--no-treeshake 禁用树形抖动优化功能
--no-treeshake.annotations 忽略纯调用注释
--no-treeshake.moduleSideEffects 假设模块没有副作用
--no-treeshake.propertyReadSideEffects 忽略属性访问的副作用
--no-treeshake.tryCatchDeoptimization 不关闭尝试抓取树状结构的功能
--no-treeshake.unknownGlobalSideEffects 假设未知的globals不会抛出
--waitForBundleInput 等待bundle输入文件
--watch.buildDelay <number> 节约手表重建的时间
--no-watch.clearScreen 重建时不清除屏幕
--watch.skipWrite 观察时不写文件到磁盘。
--watch.exclude <files> 排除被监视的文件
--watch.include <files> 限制监视到指定的文件
--validate 验证输出
```

下面列出的标志只能通过命令行界面使用。所有其他标志都对应并覆盖它们的配置文件对应物，详见[选项大列表](https://rollupjs.org/guide/en/#big-list-of-options)。

#### -h/--help

打印帮助文档。

#### -p <plugin>, --plugin <plugin>

使用指定的插件。有几种方法可以在此指定插件：

* 通过相对路径：

```sh
rollup -i input.js -f es -p ./my-plugin.js
```

该文件应导出返回Plugin对象的函数。

* 通过安装在本地或全局`Node_Modules`文件夹中的插件的名称：

```sh
rollup -i input.js -f es -p @rollup/plugin-node-resolve
```

如果插件名称无法以`Rollup-plugin-`or `@rollup / plugin--`，RollUp将自动尝试添加这些前缀：

```sh
rollup -i input.js -f es -p node-resolve
```

* 通过内联实现：

```sh
rollup -i input.js -f es -p '{transform: (c, i) => `/* ${JSON.stringify(i)} */\n${c}`}'
```

如果要加载多个插件，可以重复该选项或提供逗号分隔的名称列表：

```sh
rollup -i input.js -f es -p node-resolve -p commonjs,json
```

默认情况下，将调用插件函数，没有参数来创建插件。但是，您也可以传递自定义参数：

```sh
rollup -i input.js -f es -p 'terser={output: {beautify: true, indent_level: 2}}'
```

#### --configPlugin <plugin>

允许将RollUp插件指定要转换或以其他方式控制配置文件的解析。主要好处是它允许您使用非JavaScript配置文件。例如，以下内容将允许您在输入的类型中编写配置，只要您安装了`@rollup/plugin-typescript`：

```sh
rollup --config rollup.config.ts --configPlugin @rollup/plugin-typescript
```

它支持与[-plugin](https://rollupjs.org/guide/en/#-p-plugin---plugin-plugin)选项相同的语法i.e.，您可以多次指定选项，可以省略@ rollup / plugin-前缀并只需编写打印键，您可以通过= {...}指定插件选项。

#### -v/--version

打印安装的版本号。

#### -w/--watch

当其源文件更改磁盘时重建捆绑包。

注意：在观察模式下，***ROLLUP_WATCH***环境变量将被Rollup的命令行界面设置为 ***"true"***，并且可以被其他进程检查。插件应该检查[this.meta.watchMode](https://rollupjs.org/guide/en/#thismeta-rollupversion-string-watchmode-boolean)，它与命令行界面无关。

#### --silent

不要向控制台打印警告。如果你的配置文件包含一个onwarn处理程序，这个处理程序仍然会被调用。要手动防止这种情况，你可以在配置文件中访问命令行选项，如[配置文件](https://rollupjs.org/guide/en/#configuration-files)末尾所述。

#### --failAfterWarnings

构建完成后，如果发生任何警告，则以错误退出构建。

#### --environment <values>

通过`process.ENV`向配置文件传递额外的设置。

```sh
rollup -c --environment INCLUDE_DEPS,BUILD:production
```

将设置 `process.env.INCLUDE_DEPS === 'true'` 和 `process.env.BUILD === 'production'`。你可以多次使用这个选项。在这种情况下，随后设置的变量将覆盖之前的定义。这使得你可以在`package.json`脚本中覆盖环境变量。

