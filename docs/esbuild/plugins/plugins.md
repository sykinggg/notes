# plugins

## 概述

::: warning
插件 API 是新的，仍然是实验性的。随着新用例的发现，它可能会在 esbuild 1.0.0 版本之前发生变化。您可以关注跟踪问题以获取有关此功能的[更新](https://github.com/evanw/esbuild/issues/111)。
:::

插件 API 允许您将代码注入构建过程的各个部分。与 API 的其余部分不同，它不能从命令行使用。您必须编写 JavaScript 或 Go 代码才能使用插件 API。插件也只能与构建 API 一起使用，不能与转换 API 一起使用。

## 寻找插件

如果您正在寻找现有的 esbuild 插件，您应该查看[现有的 esbuild 插件列表](https://github.com/esbuild/community-plugins)。此列表中的插件是作者有意添加的，旨在供 esbuild 社区中的其他人使用。

如果你想分享你的 esbuild 插件，你应该：

1. 将它[发布到 npm](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages) 以便其他人可以安装它。

2. 将其添加到[现有 esbuild 插件列表](https://github.com/esbuild/community-plugins)中，以便其他人可以找到它。

## 使用插件

esbuild 插件是一个具有`名称`和`设置`功能的对象。它们以数组形式传递给[构建 API](https://esbuild.github.io/api/#build) 调用。 `setup` 函数为每个构建 API 调用运行一次。

这是一个简单的插件示例，允许您在构建时导入当前环境变量：

<CodeGroup>
<CodeGroupItem title="js">

```js
let envPlugin = {
  name: 'env',
  setup(build) {
    // Intercept import paths called "env" so esbuild doesn't attempt
    // to map them to a file system location. Tag them with the "env-ns"
    // namespace to reserve them for this plugin.
    build.onResolve({ filter: /^env$/ }, args => ({
      path: args.path,
      namespace: 'env-ns',
    }))

    // Load paths tagged with the "env-ns" namespace and behave as if
    // they point to a JSON file containing the environment variables.
    build.onLoad({ filter: /.*/, namespace: 'env-ns' }, () => ({
      contents: JSON.stringify(process.env),
      loader: 'json',
    }))
  },
}

require('esbuild').build({
  entryPoints: ['app.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [envPlugin],
}).catch(() => process.exit(1))
```

</CodeGroupItem>
<CodeGroupItem title="go">

```go
package main

import "encoding/json"
import "os"
import "strings"
import "github.com/evanw/esbuild/pkg/api"

var envPlugin = api.Plugin{
  Name: "env",
  Setup: func(build api.PluginBuild) {
    // Intercept import paths called "env" so esbuild doesn't attempt
    // to map them to a file system location. Tag them with the "env-ns"
    // namespace to reserve them for this plugin.
    build.OnResolve(api.OnResolveOptions{Filter: `^env$`},
      func(args api.OnResolveArgs) (api.OnResolveResult, error) {
        return api.OnResolveResult{
          Path:      args.Path,
          Namespace: "env-ns",
        }, nil
      })

    // Load paths tagged with the "env-ns" namespace and behave as if
    // they point to a JSON file containing the environment variables.
    build.OnLoad(api.OnLoadOptions{Filter: `.*`, Namespace: "env-ns"},
      func(args api.OnLoadArgs) (api.OnLoadResult, error) {
        mappings := make(map[string]string)
        for _, item := range os.Environ() {
          if equals := strings.IndexByte(item, '='); equals != -1 {
            mappings[item[:equals]] = item[equals+1:]
          }
        }
        bytes, err := json.Marshal(mappings)
        if err != nil {
          return api.OnLoadResult{}, err
        }
        contents := string(bytes)
        return api.OnLoadResult{
          Contents: &contents,
          Loader:   api.LoaderJSON,
        }, nil
      })
  },
}

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Outfile:     "out.js",
    Plugins:     []api.Plugin{envPlugin},
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</CodeGroupItem>
</CodeGroup>

你会像这样使用它：

```js
import { PATH } from 'env'
console.log(`PATH is ${PATH}`)
```

## 概念

为 esbuild 编写插件与为其他打包器编写插件的工作方式略有不同。在开发插件之前了解以下概念很重要：

### 命名空间

每个模块都有一个关联的命名空间。默认情况下，esbuild 在文件命名空间中运行，该命名空间对应于文件系统上的`文件`。但是 esbuild 也可以处理在文件系统上没有相应位置的“虚拟”模块。发生这种情况的一种情况是使用 [stdin](https://esbuild.github.io/api/#stdin) 提供模块。

插件可用于创建虚拟模块。虚拟模块通常使用文件以外的命名空间来区分它们与`文件`系统模块。通常命名空间特定于创建它们的插件。例如，下面的示例 [HTTP 插件](https://esbuild.github.io/plugins/#http-plugin)使用 `http-url` 命名空间来下载文件。

### Filters

每个回调都必须提供一个正则表达式作为过滤器。当路径与其过滤器不匹配时，esbuild 使用它来跳过调用回调，这是为了性能而完成的。从 esbuild 的高度并行内部调用到单线程 JavaScript 代码是昂贵的，应尽可能避免以获得最大速度。

您应该尽可能尝试使用过滤器正则表达式而不是使用 JavaScript 代码进行过滤。这更快，因为正则表达式是在 esbuild 内部计算的，根本不需要调用 JavaScript。例如，下面的示例 HTTP 插件使用了 `^https?://` 过滤器，以确保运行插件的性能开销仅对以 `http://` 或 `https://` 开头的路径产生。

允许的正则表达式语法是 Go 的[正则表达式引擎](https://golang.org/pkg/regexp/)支持的语法。这与 JavaScript 略有不同。具体来说，不支持前瞻、后视和反向引用。 Go 的正则表达式引擎旨在避免可能影响 JavaScript 正则表达式的灾难性指数时间最坏情况性能问题。

请注意，命名空间也可用于过滤。回调必须提供过滤器正则表达式，但也可以选择提供命名空间以进一步限制匹配的路径。这对于“记住”虚拟模块的来源很有用。请记住，命名空间使用精确的字符串相等性测试而不是正则表达式进行匹配，因此与模块路径不同，它们不用于存储任意数据。

## Resolve callbacks

使用 `onResolve` 添加的回调将在 esbuild 构建的每个模块中的每个导入路径上运行。回调可以自定义 esbuild 如何进行路径解析。例如，它可以拦截导入路径并将它们重定向到其他地方。它还可以将路径标记为外部路径。下面是一个例子：

<CodeGroup>
<CodeGroupItem title="js">

```js
let exampleOnResolvePlugin = {
  name: 'example',
  setup(build) {
    let path = require('path')

    // Redirect all paths starting with "images/" to "./public/images/"
    build.onResolve({ filter: /^images\// }, args => {
      return { path: path.join(args.resolveDir, 'public', args.path) }
    })

    // Mark all paths starting with "http://" or "https://" as external
    build.onResolve({ filter: /^https?:\/\// }, args => {
      return { path: args.path, external: true }
    })
  },
}

require('esbuild').build({
  entryPoints: ['app.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [exampleOnResolvePlugin],
  loader: { '.png': 'binary' },
}).catch(() => process.exit(1))
```

</CodeGroupItem>
<CodeGroupItem title="go">

```go
package main

import "os"
import "path/filepath"
import "github.com/evanw/esbuild/pkg/api"

var exampleOnResolvePlugin = api.Plugin{
  Name: "example",
  Setup: func(build api.PluginBuild) {
    // Redirect all paths starting with "images/" to "./public/images/"
    build.OnResolve(api.OnResolveOptions{Filter: `^images/`},
      func(args api.OnResolveArgs) (api.OnResolveResult, error) {
        return api.OnResolveResult{
          Path: filepath.Join(args.ResolveDir, "public", args.Path),
        }, nil
      })

    // Mark all paths starting with "http://" or "https://" as external
    build.OnResolve(api.OnResolveOptions{Filter: `^https?://`},
      func(args api.OnResolveArgs) (api.OnResolveResult, error) {
        return api.OnResolveResult{
          Path:     args.Path,
          External: true,
        }, nil
      })
  },
}

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Outfile:     "out.js",
    Plugins:     []api.Plugin{exampleOnResolvePlugin},
    Write:       true,
    Loader: map[string]api.Loader{
      ".png": api.LoaderBinary,
    },
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</CodeGroupItem>
</CodeGroup>

回调可以在不提供路径的情况下返回，以将路径解析的责任传递给下一个回调。对于给定的导入路径，来自所有插件的所有 `onResolve` 回调将按照它们注册的顺序运行，直到有人负责路径解析。如果没有回调返回路径，esbuild 将运行其默认路径解析逻辑。

请记住，许多回调可能同时运行。在 JavaScript 中，如果您的回调执行可以在另一个线程上运行的昂贵工作，例如 `fs.existsSync()`，您应该使回调`异步`并使用 `await`（在这种情况下使用 `fs.promises.exists()`）以允许其他代码在此期间运行。在 Go 中，每个回调都可以在单独的 goroutine 上运行。如果您的插件使用任何共享数据结构，请确保您有适当的同步。

### Resolve options

`onResolve` API 旨在在 `setup` 函数中调用，并注册在某些情况下要触发的回调。它需要几个选项：

<CodeGroup>
<CodeGroupItem title="js">

```js
interface OnResolveOptions {
  filter: RegExp;
  namespace?: string;
}
```

</CodeGroupItem>
<CodeGroupItem title="go">

```go
type OnResolveOptions struct {
  Filter    string
  Namespace string
}
```

</CodeGroupItem>
</CodeGroup>

* `filter`

每个回调都必须提供一个过滤器，它是一个正则表达式。当路径与此过滤器不匹配时，将跳过注册的回调。您可以[在此处阅读有关过滤器的更多信息](https://esbuild.github.io/plugins/#filters)。

* `namespace`

这是可选的。如果提供，则回调仅在提供的命名空间中的模块内的路径上运行。您可以在[此处阅读有关命名空间的更多信息](https://esbuild.github.io/plugins/#namespaces)。

### Resolve arguments

当eSbuild调用`onresolve`注册的回调时，它将提供这些参数，其中包含有关导入路径的信息：

<CodeGroup>
<CodeGroupItem title="js">

```js
interface OnResolveArgs {
  path: string;
  importer: string;
  namespace: string;
  resolveDir: string;
  kind: ResolveKind;
  pluginData: any;
}

type ResolveKind =
  | 'entry-point'
  | 'import-statement'
  | 'require-call'
  | 'dynamic-import'
  | 'require-resolve'
  | 'import-rule'
  | 'url-token'
```

</CodeGroupItem>
<CodeGroupItem title="go">

```go
type OnResolveArgs struct {
  Path       string
  Importer   string
  Namespace  string
  ResolveDir string
  Kind       ResolveKind
  PluginData interface{}
}

const (
  ResolveEntryPoint        ResolveKind
  ResolveJSImportStatement ResolveKind
  ResolveJSRequireCall     ResolveKind
  ResolveJSDynamicImport   ResolveKind
  ResolveJSRequireResolve  ResolveKind
  ResolveCSSImportRule     ResolveKind
  ResolveCSSURLToken       ResolveKind
)
```

</CodeGroupItem>
</CodeGroup>

* `path`

这是来自底层模块的源代码的逐字未解决的路径。它可以采取任何形式。虽然eSbuild的默认行为是将导入路径解释为相对路径或包名称，但是可用于引入新的路径表单。例如，下面的示例[HTTP插件](https://esbuild.github.io/plugins/#http-plugin)对以`HTTP：//`开始的路径提供了特殊含义。

* `importer`

这是包含要解决此导入的模块的路径。请注意，如果命名空间是`文件`，则仅保证此路径是文件系统路径。如果要解析相对于包含导入器模块的目录的路径，则应使用`Resolvedir`，因为它也适用于虚拟模块。

* `namespace`

这是包含此导入的模块的命名空间，如加载此文件的[负载回调](https://esbuild.github.io/plugins/#load-callbacks)所设置的。这默认为包含eSbuild默认行为的模块的`文件`命名空间。您可以在[此处阅读更多关于命名空间的信息](https://esbuild.github.io/plugins/#namespaces)。

* `resolveDir`

这是在解析文件系统上的实际路径的导入路径时要使用的文件系统目录。对于`文件`命名空间中的模块，此值默认为模块路径的目录部分。对于虚拟模块，此值默认为空，但[负载回调](https://esbuild.github.io/plugins/#load-callbacks)可以选择为虚拟模块提供一个解析目录。如果发生这种情况，将提供用于解析该文件中未解决的路径的回调。

* `kind`

这表示如何导入要解决的路径。例如，`entry-point`表示将路径提供给API作为入口点路径，`import-statement`表示路径来自JavaScript`import`或`export`语句，并且`import-rule`表示路径是来自一个CSS `@Import`规则。

* `pluginData`

此属性从上一个插件传递，如加载此文件的[负载回调](https://esbuild.github.io/plugins/#load-callbacks)所设置。

### Resolve results

这是可以通过`onresolve`添加的回调来提供自定义路径分辨率的对象。如果您想从回调返回而不提供路径，只需返回默认值（在JavaScript和`OnResolveresult {}`中拒绝）。以下是可以返回的可选属性：

<CodeGroup>
<CodeGroupItem title="js">

```js
interface OnResolveResult {
  errors?: Message[];
  external?: boolean;
  namespace?: string;
  path?: string;
  pluginData?: any;
  pluginName?: string;
  warnings?: Message[];
  watchDirs?: string[];
  watchFiles?: string[];
}

interface Message {
  text: string;
  location: Location | null;
  detail: any; // The original error from a JavaScript plugin, if applicable
}

interface Location {
  file: string;
  namespace: string;
  line: number; // 1-based
  column: number; // 0-based, in bytes
  length: number; // in bytes
  lineText: string;
}
```

</CodeGroupItem>
<CodeGroupItem title="go">

```go
type OnResolveResult struct {
  Errors     []Message
  External   bool
  Namespace  string
  Path       string
  PluginData interface{}
  PluginName string
  Warnings   []Message
  WatchDirs  []string
  WatchFiles []string
}

type Message struct {
  Text     string
  Location *Location
  Detail   interface{} // The original error from a Go plugin, if applicable
}

type Location struct {
  File      string
  Namespace string
  Line      int // 1-based
  Column    int // 0-based, in bytes
  Length    int // in bytes
  LineText  string
}
```

</CodeGroupItem>
</CodeGroup>

* `path`

将其设置为非空字符串以将导入解析为特定路径。如果设置了这一点，则不会在此模块中为此导入路径运行更多的on-destve回调。如果未设置为此，eSbuild将继续运行在当前一个后注册的on-Desclude回调。然后，如果路径仍未解决，eSBuild将默认为相对于当前模块的解析目录解析路径。

* `external`

将此设置为`true`以将模块标记为[外部](https://esbuild.github.io/api/#external)，这意味着它不会包含在捆绑包中，而是将在运行时导入。

* `namespace`

这是与已解析路径关联的命名空间。如果留空，则将默认为非外部路径的`文件`命名空间。文件命名空间中的路径必须是当前文件系统的绝对路径（因此在UNIX上的正斜杠开始，并且在Windows上使用驱动器号）。

如果要解析为非文件系统路径的路径，则应将命名空间设置为`文件`以外的内容或空字符串。这告诉esbuild不将路径视为指向文件系统上的某些东西。

* `errors` and `warnings`

这些属性允许您通过路径分辨率期间生成的任何日志消息，以根据当前[日志级别](https://esbuild.github.io/api/#log-level)显示在终端中的eSBuild，并最终在最终构建结果中结束。例如，如果您正在调用库，并且该库可以返回错误和/或警告，您将希望使用这些属性转发它们。

如果您只有单个错误返回，则不必通过错误传递它。您可以简单地将`错误`丢弃在JavaScript中，或者将`错误`对象返回到Go中的第二个返回值。

* `watchFiles` and `watchDirs`

这些属性允许您返回eSbuild[watch mode](https://esbuild.github.io/api/#watch)的其他文件系统路径以扫描。默认情况下，eSBuild将仅扫描提供给`onload`插件的路径，并且仅当命名空间是`文件`时。如果您的插件需要对文件系统的其他更改作出反应，则需要使用其中一个属性。

如果`WatchFiles`数组的任何文件已自上次构建以来已更改任何文件，则将触发重建。更改检测有点复杂，可以检查文件内容和/或文件的元数据。

如果从上次构建以来，如果`WatchDirs`数组中的任何目录列表列表已更改以来，则还将触发重建。请注意，这不会检查这些目录中的任何文件内容的内容，它也不会检查任何子目录。考虑一下它作为检查UNIX `LS`命令的输出。

对于稳健性，您应该包括在评估插件期间使用的所有文件系统路径。例如，如果您的插件相当于`Require.Resolve（）`，则需要包含所有“执行此文件存在”的路径，而不仅仅是最终路径。否则，可以创建一个新文件，这会导致构建变得过时，但eSbuild不会检测到它，因为未列出该路径。

* `pluginName`

此属性允许您使用此路径解析操作的另一个名称替换此插件的名称。通过这个插件代理另一个插件很有用。例如，它允许您将单个插件转发到包含多个插件的子进程。您可能不需要使用它。

* `pluginData`

此属性将传递到在插件链中运行的下一个插件。如果从`onload`插件返回它，它将传递给`onresolve`插件，以获取该文件中的任何导入的插件，如果从`onresolve`插件返回它，则在加载文件时将传递给`onload`插件（由于关系多对一，这是随意的）。这对于在不同插件之间传递数据是有用的，而无需直接坐标。

## Load callbacks

使用`onload`添加的回调将为尚未标记为外部的唯一路径/命名空间对运行。它的工作是返回模块的内容并告诉esbuild如何解释它。这是一个示例插件，它将`.txt`文件转换为单词数组：

<CodeGroup>
<CodeGroupItem title="js">

```js
let exampleOnLoadPlugin = {
  name: 'example',
  setup(build) {
    let fs = require('fs')

    // Load ".txt" files and return an array of words
    build.onLoad({ filter: /\.txt$/ }, async (args) => {
      let text = await fs.promises.readFile(args.path, 'utf8')
      return {
        contents: JSON.stringify(text.split(/\s+/)),
        loader: 'json',
      }
    })
  },
}

require('esbuild').build({
  entryPoints: ['app.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [exampleOnLoadPlugin],
}).catch(() => process.exit(1))
```

</CodeGroupItem>
<CodeGroupItem title="go">

```go
package main

import "encoding/json"
import "io/ioutil"
import "os"
import "strings"
import "github.com/evanw/esbuild/pkg/api"

var exampleOnLoadPlugin = api.Plugin{
  Name: "example",
  Setup: func(build api.PluginBuild) {
    // Load ".txt" files and return an array of words
    build.OnLoad(api.OnLoadOptions{Filter: `\.txt$`},
      func(args api.OnLoadArgs) (api.OnLoadResult, error) {
        text, err := ioutil.ReadFile(args.Path)
        if err != nil {
          return api.OnLoadResult{}, err
        }
        bytes, err := json.Marshal(strings.Fields(string(text)))
        if err != nil {
          return api.OnLoadResult{}, err
        }
        contents := string(bytes)
        return api.OnLoadResult{
          Contents: &contents,
          Loader:   api.LoaderJSON,
        }, nil
      })
  },
}

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Outfile:     "out.js",
    Plugins:     []api.Plugin{exampleOnLoadPlugin},
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

</CodeGroupItem>
</CodeGroup>

回调可以在不提供模块内容的情况下返回。在这种情况下，加载模块的责任将传递到下一个注册的回调。对于给定的模块，所有插件的所有`onload`回调将按其注册的顺序运行，直到一个负责加载模块。如果没有回调返回模块的内容，则eSbuild将运行其默认模块加载逻辑。

请记住，许多回调可能同时运行。在JavaScript中，如果您的回调执行昂贵的工作，可以在其他线程中运行，例如`fs.readfilesync（）`，您应该使回调`async`和使用`await`（在这种情况下使用`fs.promises.readfile（）`）来允许其他代码与此同时运行。在Go中，每个回调可能在单独的goroutine上运行。如果您的插件使用任何共享数据结构，请确保在适当的同步时进行同步。

### Load options
