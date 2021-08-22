# Transform & Build Api

## Transform Api

转换 API 调用对单个字符串进行操作，而无需访问文件系统。这使其非常适合在没有文件系统的环境（例如浏览器）中使用或作为其他工具链的一部分使用。下面是一个简单的转换：

```
// cli
echo 'let x: number = 1' | esbuild --loader=ts
let x = 1;
```

```js
// js
require('esbuild').transformSync('let x: number = 1', {
  loader: 'ts',
})
{
  code: 'let x = 1;\n',
  map: '',
  warnings: []
}
```

```go
// go
package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  result := api.Transform("let x: number = 1", api.TransformOptions{
    Loader: api.LoaderTS,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

如果未提供输入文件且不存在 --bundle 标志，则命令行界面将使用此 API 调用。在这种情况下，输入字符串来自标准输入，输出字符串进入标准输出。转换 API 可以采用以下选项：

### 基础配置
[Define](/esbuild/api/transform.md#define)
[Format](/esbuild/api/transform.md#format)
[Loader](/esbuild/api/transform.md#loader)
[Minify](/esbuild/api/transform.md#minify)
[SourceMap](/esbuild/api/transform.md#sourceMap)
[Target](/esbuild/api/transform.md#target)
### 高级配置
[Banner](/esbuild/api/transform.md#banner)
[Charset](/esbuild/api/transform.md#charset)
[Color](/esbuild/api/transform.md#color)
[Footer](/esbuild/api/transform.md#footer)
[Global name](/esbuild/api/transform.md#global-name)
[JSX](/esbuild/api/transform.md#)
[JSX factory](/esbuild/api/transform.md#)
[JSX fragment](/esbuild/api/transform.md#)
[Keep names](/esbuild/api/transform.md#)
[Legal comments](/esbuild/api/transform.md#)
[Log level](/esbuild/api/transform.md#)
[Log limit](/esbuild/api/transform.md#)
[Pure](/esbuild/api/transform.md#)
[Source Root](/esbuild/api/transform.md#)
[Sourcefile](/esbuild/api/transform.md#)
[Sources Content](/esbuild/api/transform.md#)
[Tree shaking](/esbuild/api/transform.md#)
[Tsconfig raw](/esbuild/api/transform.md#)

## Build API

构建 API 调用对文件系统中的一个或多个文件进行操作。这允许文件相互引用并捆绑在一起。下面是一个简单的构建

```
// cli

echo 'let x: number = 1' > in.ts
esbuild in.ts --outfile=out.js
cat out.js
let x = 1;
```

```js
// js

require('fs').writeFileSync('in.ts', 'let x: number = 1')
require('esbuild').buildSync({
  entryPoints: ['in.ts'],
  outfile: 'out.js',
})
{ errors: [], warnings: [] }
require('fs').readFileSync('out.js', 'utf8')
'let x = 1;\n'
```

```go
// go

package main

import "io/ioutil"
import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  ioutil.WriteFile("in.ts", []byte("let x: number = 1"), 0644)

  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"in.ts"},
    Outfile:     "out.js",
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

如果提供了至少一个输入文件或存在 --bundle 标志，则命令行界面将使用此 API 调用。请注意，默认情况下 esbuild 不捆绑。您必须显式传递 --bundle 标志以启用捆绑。如果未提供输入文件，则从标准输入读取单个输入文件。构建 API 可以采用以下选项：

### 基础配置
[Bundle](/esbuild/api/transform.md#bundle)
[Define](/esbuild/api/transform.md#define)
[Entry points](/esbuild/api/transform.md#entry-points)
[External](/esbuild/api/transform.md#external)
[Format](/esbuild/api/transform.md#format)
[Inject](/esbuild/api/transform.md#inject)
[Loader](/esbuild/api/transform.md#loader)
[Minify](/esbuild/api/transform.md#minify)
[Outdir](/esbuild/api/transform.md#outdir)
[Outfile](/esbuild/api/transform.md#outfile)
[Platform](/esbuild/api/transform.md#platform)
[Serve](/esbuild/api/transform.md#serve)
[Sourcemap](/esbuild/api/transform.md#sourcemap)
[Splitting](/esbuild/api/transform.md#splitting)
[Target](/esbuild/api/transform.md#target)
[Watch](/esbuild/api/transform.md#watch)
[Write](/esbuild/api/transform.md#write)

### 高级配置

[Allow overwrite](/esbuild/api/transform.md#allow-overwrite)
[Asset names](/esbuild/api/transform.md#asset-names)
[Banner](/esbuild/api/transform.md#banner)
[Charset](/esbuild/api/transform.md#charset)
[Chunk names](/esbuild/api/transform.md#chunk-names)
[Color](/esbuild/api/transform.md#color)
[Conditions](/esbuild/api/transform.md#conditions)
[Entry names](/esbuild/api/transform.md#entry-names)
[Footer](/esbuild/api/transform.md#footer)
[Global name](/esbuild/api/transform.md#global-name)
[Incremental](/esbuild/api/transform.md#incremental)
[JSX](/esbuild/api/transform.md#)
[JSX factory](/esbuild/api/transform.md#)
[JSX fragment](/esbuild/api/transform.md#)
[Keep names](/esbuild/api/transform.md#)
[Legal comments](/esbuild/api/transform.md#)
[Log level](/esbuild/api/transform.md#)
[Log limit](/esbuild/api/transform.md#)
[Main fields](/esbuild/api/transform.md#)
[Metafile](/esbuild/api/transform.md#)
[Node paths](/esbuild/api/transform.md#)
[Out extension](/esbuild/api/transform.md#)
[Outbase](/esbuild/api/transform.md#)
[Preserve symlinks](/esbuild/api/transform.md#)
[Public path](/esbuild/api/transform.md#)
[Pure](/esbuild/api/transform.md#)
[Resolve extensions](/esbuild/api/transform.md#)
[Source Root](/esbuild/api/transform.md#)
[Sourcefile](/esbuild/api/transform.md#)
[Sources Content](/esbuild/api/transform.md#)
[Stdin](/esbuild/api/transform.md#)
[Tree shaking](/esbuild/api/transform.md#)
[Tsconfig](/esbuild/api/transform.md#)
[Working directory](/esbuild/api/transform.md#)

## Simple options

### Bundle

支持: Build

捆绑文件意味着将任何导入的依赖项内联到文件本身中。此过程是递归的，因此依赖项（等等）的依赖项也将被内联。默认情况下，esbuild 不会捆绑输入文件。必须像这样显式启用捆绑：

```
// cli

esbuild in.js --bundle
```

```js
// js

require('esbuild').buildSync({
  entryPoints: ['in.js'],
  bundle: true,
  outfile: 'out.js',
})
{ errors: [], warnings: [] }
```

```go
// go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"in.js"},
    Bundle:      true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

请注意，捆绑与文件串联不同。在启用捆绑的情况下传递 esbuild 多个输入文件将创建多个单独的捆绑包，而不是将输入文件连接在一起。要将一组文件与 esbuild 连接在一起，请将它们全部导入到一个单一的入口点文件中，并将该文件与 esbuild 捆绑在一起。

另请注意，捆绑仅适用于静态定义的导入（即当导入路径是字符串文字时）。在运行时定义的导入（即依赖于运行时代码评估的导入）不会被捆绑，因为捆绑是一个编译时操作。如果您需要捆绑执行此操作的代码，您可能需要使用另一个捆绑器而不是 esbuild。例如：

```js
// Static imports (will be bundled by esbuild)
import 'pkg';
import('pkg');
require('pkg');

// Dynamic imports (will not be bundled by esbuild)
import(`pkg/${foo}`);
require(`pkg/${foo}`);
['pkg'].map(require);
```

### Define

支持: Transform | Build

此功能提供了一种用常量表达式替换全局标识符的方法。它可以是一种在构建之间更改某些代码行为而不更改代码本身的方法：

```
// cli

echo 'DEBUG && require("hooks")' | esbuild --define:DEBUG=true
require("hooks");
echo 'DEBUG && require("hooks")' | esbuild --define:DEBUG=false
false;
```

```js
// js

let js = 'DEBUG && require("hooks")'
require('esbuild').transformSync(js, {
  define: { DEBUG: 'true' },
})
{
  code: 'require("hooks");\n',
  map: '',
  warnings: []
}
require('esbuild').transformSync(js, {
  define: { DEBUG: 'false' },
})
{
  code: 'false;\n',
  map: '',
  warnings: []
}
```

```go
// go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "DEBUG && require('hooks')"

  result1 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "true"},
  })

  if len(result1.Errors) == 0 {
    fmt.Printf("%s", result1.Code)
  }

  result2 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "false"},
  })

  if len(result2.Errors) == 0 {
    fmt.Printf("%s", result2.Code)
  }
}
```

替换表达式必须是 JSON 对象（空值、布尔值、数字、字符串、数组或对象）或单个标识符。数组和对象以外的替换表达式是内联替换的，这意味着它们可以参与常量折叠。数组和对象替换表达式存储在变量中，然后使用标识符引用而不是内联替换，这避免了替换值的重复副本，但意味着值不参与常量折叠。

如果您想用字符串文字替换某些内容，请记住传递给 esbuild 的替换值本身必须包含引号。省略引号意味着替换值是一个标识符：

```
// cli

echo 'id, str' | esbuild --define:id=text --define:str=\"text\"
text, "text";
```

```js
// js

let js = 'DEBUG && require("hooks")'
require('esbuild').transformSync(js, {
  define: { DEBUG: 'true' },
})
{
  code: 'require("hooks");\n',
  map: '',
  warnings: []
}
require('esbuild').transformSync(js, {
  define: { DEBUG: 'false' },
})
{
  code: 'false;\n',
  map: '',
  warnings: []
}
```

```go
// go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "DEBUG && require('hooks')"

  result1 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "true"},
  })

  if len(result1.Errors) == 0 {
    fmt.Printf("%s", result1.Code)
  }

  result2 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "false"},
  })

  if len(result2.Errors) == 0 {
    fmt.Printf("%s", result2.Code)
  }
}
```

替换表达式必须是 JSON 对象（空值、布尔值、数字、字符串、数组或对象）或单个标识符。数组和对象以外的替换表达式是内联替换的，这意味着它们可以参与常量折叠。数组和对象替换表达式存储在变量中，然后使用标识符引用而不是内联替换，这避免了替换值的重复副本，但意味着值不参与常量折叠。

如果您想用字符串文字替换某些内容，请记住传递给 esbuild 的替换值本身必须包含引号。省略引号意味着替换值是一个标识符：

```
// cli

echo 'id, str' | esbuild --define:id=text --define:str=\"text\"
text, "text";
```

```js
// js

let js = 'DEBUG && require("hooks")'
require('esbuild').transformSync(js, {
  define: { DEBUG: 'true' },
})
{
  code: 'require("hooks");\n',
  map: '',
  warnings: []
}
require('esbuild').transformSync(js, {
  define: { DEBUG: 'false' },
})
{
  code: 'false;\n',
  map: '',
  warnings: []
}
```

```go
// go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "DEBUG && require('hooks')"

  result1 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "true"},
  })

  if len(result1.Errors) == 0 {
    fmt.Printf("%s", result1.Code)
  }

  result2 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "false"},
  })

  if len(result2.Errors) == 0 {
    fmt.Printf("%s", result2.Code)
  }
}
```

替换表达式必须是 JSON 对象（空值、布尔值、数字、字符串、数组或对象）或单个标识符。数组和对象以外的替换表达式是内联替换的，这意味着它们可以参与常量折叠。数组和对象替换表达式存储在变量中，然后使用标识符引用而不是内联替换，这避免了替换值的重复副本，但意味着值不参与常量折叠。

如果您想用字符串文字替换某些内容，请记住传递给 esbuild 的替换值本身必须包含引号。省略引号意味着替换值是一个标识符：

```cli
// cli

echo 'id, str' | esbuild --define:id=text --define:str=\"text\"
text, "text";
```

```js
// js

let js = 'DEBUG && require("hooks")'
require('esbuild').transformSync(js, {
  define: { DEBUG: 'true' },
})
{
  code: 'require("hooks");\n',
  map: '',
  warnings: []
}
require('esbuild').transformSync(js, {
  define: { DEBUG: 'false' },
})
{
  code: 'false;\n',
  map: '',
  warnings: []
}
```

```go
// go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "DEBUG && require('hooks')"

  result1 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "true"},
  })

  if len(result1.Errors) == 0 {
    fmt.Printf("%s", result1.Code)
  }

  result2 := api.Transform(js, api.TransformOptions{
    Define: map[string]string{"DEBUG": "false"},
  })

  if len(result2.Errors) == 0 {
    fmt.Printf("%s", result2.Code)
  }
}
```

替换表达式必须是 JSON 对象（空值、布尔值、数字、字符串、数组或对象）或单个标识符。数组和对象以外的替换表达式是内联替换的，这意味着它们可以参与常量折叠。数组和对象替换表达式存储在变量中，然后使用标识符引用而不是内联替换，这避免了替换值的重复副本，但意味着值不参与常量折叠。

如果您想用字符串文字替换某些内容，请记住传递给 esbuild 的替换值本身必须包含引号。省略引号意味着替换值是一个标识符：

```
// cli

echo 'id, str' | esbuild --define:id=text --define:str=\"text\"
text, "text";
```

```js
// js

require('esbuild').transformSync('id, str', {
  define: { id: 'text', str: '"text"' },
})
{
  code: 'text, "text";\n',
  map: '',
  warnings: []
}
```

```go
// go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  result := api.Transform("id, text", api.TransformOptions{
    Define: map[string]string{
      "id":  "text",
      "str": "\"text\"",
    },
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

如果您使用的是 CLI，请记住，不同的 shell 对如何转义双引号字符（当替换值是字符串时这是必需的）有不同的规则。使用 \" 反斜杠转义，因为它适用于 bash 和 Windows 命令提示符。在 bash 中工作的其他转义双引号的方法（例如用单引号将它们括起来）在 Windows 上不起作用，因为 Windows 命令提示符不会删除单引号. 当在 package.json 文件中使用 npm 脚本中的 CLI 时，这是相关的，人们希望它可以在所有平台上工作：

```json
{
  "scripts": {
    "build": "esbuild --define:process.env.NODE_ENV=\\\"production\\\" app.js"
  }
}
```

如果您仍然遇到使用不同 shell 的跨平台报价转义问题，您可能希望改用 JavaScript API。在那里您可以使用常规 JavaScript 语法来消除跨平台差异。


### Entry points

支持: Build

这是一个文件数组，每个文件都用作捆绑算法的输入。它们被称为“入口点”，因为每个入口点都是被评估的初始脚本，然后加载它所代表的代码的所有其他方面。不是使用 `<script>` 标签在页面中加载许多库，而是使用 `import` 语句将它们导入到您的入口点（或另一个文件，然后导入到您的入口点）。

简单的应用程序只需要一个入口点，但如果有多个逻辑上独立的代码组（例如主线程和工作线程），或者应用程序具有独立的相对不相关的区域（例如着陆页、编辑器），则附加入口点会很有用页面和设置页面。单独的入口点有助于引入关注点分离，并有助于减少浏览器需要下载的不必要代码量。如果适用，在浏览到第二个页面时，启用代码拆分可以进一步减少下载大小，第二个页面的入口点与已经访问过的第一个页面共享一些已下载的代码。

指定入口点的简单方法是只传递一个文件路径数组：

```
// cli

esbuild home.ts settings.ts --bundle --outdir=out
```

```js
// js

require('esbuild').buildSync({
  entryPoints: ['home.ts', 'settings.ts'],
  bundle: true,
  write: true,
  outdir: 'out',
})
```

```go
// go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"home.ts", "settings.ts"},
    Bundle:      true,
    Write:       true,
    Outdir:      "out",
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

这将生成两个输出文件，`out/home.js` 和 `out/settings.js`，分别对应两个入口点 `home.ts` 和 `settings.ts`。

为了进一步控制如何从相应的输入入口点派生输出文件的路径，您应该查看以下选项：

* [Entry names]()

* [Out extension]()

* [Outbase]()

* [Outdir]()

* [Outfile]()

此外，您还可以使用替代入口点语法为每个单独的入口点指定完全自定义的输出路径：

```
// cli

esbuild out1=home.js out2=settings.js --bundle --outdir=out
```

```js
// js

require('esbuild').buildSync({
  entryPoints: {
    out1: 'home.js',
    out2: 'settings.js',
  },
  bundle: true,
  write: true,
  outdir: 'out',
})
```

```go
// go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPointsAdvanced: []api.EntryPoint{{
      OutputPath: "out1",
      InputPath:  "home.js",
    }, {
      OutputPath: "out2",
      InputPath:  "settings.js",
    }},
    Bundle: true,
    Write:  true,
    Outdir: "out",
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

这将生成两个输出文件，`out/out1.js` 和 `out/out2.j`s，分别对应两个入口点 `home.ts` 和 `settings.ts`。

### External

支持: Build

您可以将文件或包标记为外部以将其从构建中排除。导入不会被捆绑，而是被保留（对 `iife` 和 `cjs` 格式使用 `require`，对 `esm` 格式使用 `import`）并将在运行时进行评估。

这有多种用途。首先，它可用于从您的包中修剪不必要的代码，以便您知道永远不会执行的代码路径。例如，一个包可能包含只在 `node` 中运行的代码，但你只能在浏览器中使用该包。它还可以用于在运行时从无法捆绑的包中导入 `node` 中的代码。例如，`fsevents` 包包含一个原生扩展，`esbuild` 不支持该扩展。将某些内容标记为外部内容如下所示：

```
// cli

echo 'require("fsevents")' > app.js
esbuild app.js --bundle --external:fsevents --platform=node
// app.js
require("fsevents");
```

```js
// js

require('fs').writeFileSync('app.js', 'require("fsevents")')
require('esbuild').buildSync({
  entryPoints: ['app.js'],
  outfile: 'out.js',
  bundle: true,
  platform: 'node',
  external: ['fsevents'],
})
{ errors: [], warnings: [] }
```

```go
// go

package main

import "io/ioutil"
import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  ioutil.WriteFile("app.js", []byte("require(\"fsevents\")"), 0644)

  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Outfile:     "out.js",
    Bundle:      true,
    Write:       true,
    Platform:    api.PlatformNode,
    External:    []string{"fsevents"},
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

您还可以在外部路径中使用 `*` 通配符将匹配该模式的所有文件标记为外部。例如，您可以使用 `*.png` 删除所有 `.png` 文件或使用 `/images/*` 删除所有以 `/images`/ 开头的路径。当外部路径中存在 `*` 通配符时，该模式将应用于源代码中的原始路径，而不是解析为实际文件系统路径后的路径。这使您可以匹配不是真实文件系统路径的路径。

### Format

支持: Transform | Build

这将设置生成的 JavaScript 文件的输出格式。目前有三个可能的值：`iife`、`cjs` 和 `esm`。

#### IIFE

`iife` 格式代表“立即调用的函数表达式”，旨在在浏览器中运行。将代码包装在函数表达式中可确保代码中的任何变量不会意外地与全局范围内的变量发生冲突。如果您的入口点具有要在浏览器中公开为全局的导出，您可以使用全局名称设置来配置该全局的名称。 `iife` 格式是默认格式，除非您将平台设置为节点。使用它看起来像这样：

```
// cli

echo 'alert("test")' | esbuild --format=iife
(() => {
  alert("test");
})();
```

```js
// js

let js = 'alert("test")'
let out = require('esbuild').transformSync(js, {
  format: 'iife',
})
process.stdout.write(out.code)
```

```go
// go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "alert(\"test\")"

  result := api.Transform(js, api.TransformOptions{
    Format: api.FormatIIFE,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

#### CommonJS

`cjs` 格式代表“CommonJS”，旨在在 `node.js` 中运行。它假设环境包含`exports`, `require`, 和 `module`。使用 `ECMAScript` 模块语法导出的入口点将被转换为一个模块，每个导出名称的导出都有一个 `getter`。当您将 [platform](https://esbuild.github.io/api/#platform)设置为`node`时，`cjs` 格式是默认格式。使用它看起来像这样：

```
// cli

echo 'export default "test"' | esbuild --format=cjs
...
__export(exports, {
  default: () => stdin_default
});
var stdin_default = "test";
```

```js
// js

let js = 'export default "test"'
let out = require('esbuild').transformSync(js, {
  format: 'cjs',
})
process.stdout.write(out.code)
```

```go
// go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "export default 'test'"

  result := api.Transform(js, api.TransformOptions{
    Format: api.FormatCommonJS,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

#### ESM

`esm` 格式代表“ECMAScript 模块”。它假定环境支持`import`和`export`语法。 `CommonJS` 模块语法中带有导出的入口点将被转换为 `module.exports` 值的单个默认导出。使用它看起来像这样：

```
// cli

echo 'module.exports = "test"' | esbuild --format=esm
...
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
    module.exports = "test";
  }
});
export default require_stdin();
```

```js
// js

let js = 'module.exports = "test"'
let out = require('esbuild').transformSync(js, {
  format: 'esm',
})
process.stdout.write(out.code)
```

```go
// go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "module.exports = 'test'"

  result := api.Transform(js, api.TransformOptions{
    Format: api.FormatESModule,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

`esm` 格式既可以在浏览器中使用，也可以在node中使用，但是您必须将其作为模块显式加载。如果您从另一个模块`import`它，这会自动发生。否则：

* 在浏览器中，您可以使用 `<script src="file.js" type="module"></script>` 加载模块。

* 在 `node` 中，您可以使用 `node --experimental-modules file.mjs` 加载模块。请注意，节点需要 `.mjs` 扩展名，除非您在 package.json 文件中配置了 `"type": "module"`。您可以使用 `esbuild` 中的 `out` 扩展设置来自定义 `esbuild` 生成的文件的输出扩展。您可以在此处阅读有关在节点中使用 [ECMAScript 模块](https://nodejs.org/api/esm.html)的更多信息。

### Inject

支持：Build

此选项允许您使用来自另一个文件的导入自动替换全局变量。这可能是一个有用的工具，可以将您无法控制的代码适应新环境。例如，假设您有一个名为 `process-shim.js` 的文件，它导出名为 `process` 的变量：

```js
// process-shim.js
export let process = {
  cwd: () => ''
}
```

```js
// entry.js
console.log(process.cwd())
```

这旨在替换 `node` 的 `process.cwd()` 函数的使用，以防止调用它的包在浏览器中运行时崩溃。您可以使用注入功能将全局标识符过程的所有使用替换为对该文件的导入：

```
// cli

esbuild entry.js --bundle --inject:./process-shim.js --outfile=out.js
```

```js
// js

require('esbuild').buildSync({
  entryPoints: ['entry.js'],
  bundle: true,
  inject: ['./process-shim.js'],
  outfile: 'out.js',
})
```

```go
// go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"entry.js"},
    Bundle:      true,
    Inject:      []string{"./process-shim.js"},
    Outfile:     "out.js",
    Write:       true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

结果是这样的：

```js
// out.js
let process = {cwd: () => ""};
console.log(process.cwd());
```

* **使用带定义的[注入](https://esbuild.github.io/api/#define)**

您还可以将其与定义[功能](https://esbuild.github.io/api/#define)结合起来，以便对您导入的内容更具选择性。例如：

```js
// process-shim.js
export function dummy_process_cwd() {
  return ''
}
```

```js
// entry.js
console.log(process.cwd())
```

您可以使用定义功能将 `process.cwd` 映射到 `dummy_process_cwd`，然后使用注入功能从 `process-shim.js` 注入 `dummy_process_cwd`：

```
// cli

esbuild entry.js --bundle --define:process.cwd=dummy_process_cwd --inject:./process-shim.js --outfile=out.js
```

```js
// js

require('esbuild').buildSync({
  entryPoints: ['entry.js'],
  bundle: true,
  define: { 'process.cwd': 'dummy_process_cwd' },
  inject: ['./process-shim.js'],
  outfile: 'out.js',
})
```

```go
// go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"entry.js"},
    Bundle:      true,
    Define: map[string]string{
      "process.cwd": "dummy_process_cwd",
    },
    Inject:  []string{"./process-shim.js"},
    Outfile: "out.js",
    Write:   true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

这导致以下输出：

```js
// out.js
function dummy_process_cwd() {
  return "";
}
console.log(dummy_process_cwd());
```

* **[JSX](https://esbuild.github.io/content-types/#jsx) 的自动导入**

您可以使用注入功能自动提供 `JSX` 表达式的实现。比如你可以自动导入`react`包来提供`React.createElement`等功能。有关详细信息，[请参阅 JSX 文档](https://esbuild.github.io/content-types/#auto-import-for-jsx)。

* **在没有导入的情况下注入文件**

您还可以将此功能用于没有导出的文件。在这种情况下，注入的文件只是在输出的其余部分之前出现，就好像每个输入文件都包含导入`“./file.js”`。由于 ECMAScript 模块的工作方式，这种注入仍然是“hygienic”，因为不同文件中具有相同名称的符号被重命名，因此它们不会相互冲突。

* **有条件地注入文件**

如果您只想在实际使用导出时有条件地导入文件，您应该将注入的文件标记为没有副作用，将其放入包中并在该包的 `package.json` 文件中添加 `"sideEffects": false` 。此设置是[来自 Webpack 的约定](https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free)，esbuild 尊重任何导入的文件，而不仅仅是用于注入的文件。

### Loader

支持：Transform | Build

此选项更改给定输入文件的解释方式。例如，`js` 加载器将文件解释为 JavaScript，而 `css` 加载器将文件解释为 CSS。有关所有内置加载器的完整列表，[请参阅内容类型页面](https://esbuild.github.io/content-types/)。

为给定的文件类型配置加载器允许您使用`import` 语句或 `require` 调用加载该文件类型。例如，将 `.png` 文件扩展名配置为使用[数据 URL](https://esbuild.github.io/content-types/#data-url) 加载器意味着导入 `.png` 文件会为您提供一个包含该图像内容的数据 URL：

```js
import url from './example.png'
let image = new Image
image.src = url
document.body.appendChild(image)

import svg from './example.svg'
let doc = new DOMParser().parseFromString(svg, 'application/xml')
let node = document.importNode(doc.documentElement, true)
document.body.appendChild(node)
```

上面的代码可以使用构建 API 调用进行[捆绑](https://esbuild.github.io/api/#build-api)，如下所示：

```
// cli

esbuild app.js --bundle --loader:.png=dataurl --loader:.svg=text
```

```js
// js

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  loader: {
    '.png': 'dataurl',
    '.svg': 'text',
  },
  outfile: 'out.js',
})
```

```go
// go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Loader: map[string]api.Loader{
      ".png": api.LoaderDataURL,
      ".svg": api.LoaderText,
    },
    Write: true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

如果您将构建 API 与来自 stdin 的输入一起使用，则此选项的指定方式不同，因为 [stdin](https://esbuild.github.io/api/#stdin) 没有文件扩展名。使用构建 API 为 stdin 配置加载器如下所示：

```
// cli

echo 'let x: number = 1' | esbuild --loader=ts
let x = 1;
```

```js
// js

require('esbuild').buildSync({
  stdin: {
    contents: 'import pkg = require("./pkg")',
    loader: 'ts',
    resolveDir: __dirname,
  },
  bundle: true,
  outfile: 'out.js',
})
```

```go
// go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Loader: map[string]api.Loader{
      ".png": api.LoaderDataURL,
      ".svg": api.LoaderText,
    },
    Write: true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

如果您将构建 API 与来自 [stdin](https://esbuild.github.io/api/#stdin) 的输入一起使用，则此选项的指定方式不同，因为 stdin 没有文件扩展名。使用构建 API 为 stdin 配置加载器如下所示：

```
// cli

echo 'import pkg = require("./pkg")' | esbuild --loader=ts --bundle
```

```js
// js

require('esbuild').buildSync({
  stdin: {
    contents: 'import pkg = require("./pkg")',
    loader: 'ts',
    resolveDir: __dirname,
  },
  bundle: true,
  outfile: 'out.js',
})
```

```go
// go

package main

import "github.com/evanw/esbuild/pkg/api"
import "os"

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"app.js"},
    Bundle:      true,
    Loader: map[string]api.Loader{
      ".png": api.LoaderDataURL,
      ".svg": api.LoaderText,
    },
    Write: true,
  })

  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
```

[转换 API](https://esbuild.github.io/api/#transform-api) 调用只需要一个加载器，因为它不涉及与文件系统的交互，因此不处理文件扩展名。为转换 API 配置加载器（在本例中为 `ts` 加载器）如下所示：

```
// cli

echo 'let x: number = 1' | esbuild --loader=ts
let x = 1;
```

```js
// js

let ts = 'let x: number = 1'
require('esbuild').transformSync(ts, {
  loader: 'ts',
})
{
  code: 'let x = 1;\n',
  map: '',
  warnings: []
}
```

```go
// go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  ts := "let x: number = 1"

  result := api.Transform(ts, api.TransformOptions{
    Loader: api.LoaderTS,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```

### Minify

支持：Transform | Build

启用后，生成的代码将被缩小而不是漂亮的打印。压缩代码通常等同于非压缩代码，但更小，这意味着它下载速度更快但更难调试。通常你会在生产中而不是在开发中缩小代码。

在 esbuild 中启用缩小如下所示：

```
// cli

echo 'fn = obj => { return obj.x }' | esbuild --minify
fn=n=>n.x;
```

```js
// js

var js = 'fn = obj => { return obj.x }'
require('esbuild').transformSync(js, {
  minify: true,
})
{
  code: 'fn=n=>n.x;\n',
  map: '',
  warnings: []
}
```

```go
// go

package main

import "fmt"
import "github.com/evanw/esbuild/pkg/api"

func main() {
  js := "fn = obj => { return obj.x }"

  result := api.Transform(js, api.TransformOptions{
    MinifyWhitespace:  true,
    MinifyIdentifiers: true,
    MinifySyntax:      true,
  })

  if len(result.Errors) == 0 {
    fmt.Printf("%s", result.Code)
  }
}
```