# plugins

插件 API 是新的，仍然是实验性的。随着新用例的发现，它可能会在 esbuild 1.0.0 版本之前发生变化。您可以关注跟踪问题以获取有关此功能的[更新](https://github.com/evanw/esbuild/issues/111)。

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

[待学习](https://esbuild.github.io/plugins/#namespaces)