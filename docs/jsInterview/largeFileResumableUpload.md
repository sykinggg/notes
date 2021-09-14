# 大文件上传和断点续传

前端：`vue` `element-ui`

服务端：`nodejs`

## 大文件上传

### 整体思路

#### 前端

前端大文件上传网上的大部分文章已经给出了解决方案，核心是利用 `Blob.prototype.slice` 方法，和数组的 `slice` 方法相似，调用的 `slice` 方法可以返回原文件的某个切片

这样我们就可以根据预先设置好的切片最大数量将文件切分为一个个切片，然后借助 http 的可并发性，`同时`上传多个切片，这样从原本传一个大文件，变成了同时传多个小的文件切片，可以大大减少上传时间

另外由于是并发，传输到服务端的顺序可能会发生变化，所以我们还需要给每个切片记录顺序

#### 服务端

服务端需要负责接受这些切片，并在接收到所有切片后`合并`切片

这里又引伸出两个问题

1. 何时合并切片，即切片什么时候传输完成

2. 如何合并切片

第一个问题需要前端进行配合，前端在每个切片中都携带切片最大数量的信息，当服务端接受到这个数量的切片时自动合并，也可以额外发一个请求主动通知服务端进行切片的合并

第二个问题，具体如何合并切片呢？这里可以使用 nodejs 的 读写流（readStream/writeStream），将所有切片的流传输到最终文件的流里

## 前端部分

前端使用 Vue 作为开发框架，对界面没有太大要求，原生也可以，考虑到美观使用 element-ui 作为 UI 框架

### 上传控件

首先创建选择文件的控件，监听 change 事件以及上传按钮

```html
<template>
   <div>
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload">上传</el-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    container: {
      file: null
    }
  }),
  methods: {
     handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) return;
      Object.assign(this.$data, this.$options.data());
      this.container.file = file;
    },
    async handleUpload() {}
  }
};
</script>
```

![demo](/notes/assets/jsInterview/16f7ff98adb6bcdd_tplv-t2oaga2asx-watermark.awebp)

### 请求逻辑

考虑到通用性，这里没有用第三方的请求库，而是用原生 XMLHttpRequest 做一层简单的封装来发请求

```js
request({
      url,
      method = "post",
      data,
      headers = {},
      requestList
    }) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        Object.keys(headers).forEach(key =>
          xhr.setRequestHeader(key, headers[key])
        );
        xhr.send(data);
        xhr.onload = e => {
          resolve({
            data: e.target.response
          });
        };
      });
    }
```

### 上传切片

接着实现比较重要的上传功能，上传需要做两件事

* 对文件进行切片

* 将切片传输给服务端

```html
<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload">上传</el-button>
  </div>
</template>

<script>
+ const SIZE = 10 * 1024 * 1024; // 切片大小

export default {
  data: () => ({
    container: {
      file: null
    }，
+   data: []
  }),
  methods: {
    request() {},
    handleFileChange() {},
+    // 生成文件切片
+    createFileChunk(file, size = SIZE) {
+     const fileChunkList = [];
+      let cur = 0;
+      while (cur < file.size) {
+        fileChunkList.push({ file: file.slice(cur, cur + size) });
+        cur += size;
+      }
+      return fileChunkList;
+    },
+   // 上传切片
+    async uploadChunks() {
+      const requestList = this.data
+        .map(({ chunk，hash }) => {
+          const formData = new FormData();
+          formData.append("chunk", chunk);
+          formData.append("hash", hash);
+          formData.append("filename", this.container.file.name);
+          return { formData };
+        })
+        .map(async ({ formData }) =>
+          this.request({
+            url: "http://localhost:3000",
+            data: formData
+          })
+        );
+      await Promise.all(requestList); // 并发切片
+    },
+    async handleUpload() {
+      if (!this.container.file) return;
+      const fileChunkList = this.createFileChunk(this.container.file);
+      this.data = fileChunkList.map(({ file }，index) => ({
+        chunk: file,
+        hash: this.container.file.name + "-" + index // 文件名 + 数组下标
+      }));
+      await this.uploadChunks();
+    }
  }
};
</script>
```

当点击上传按钮时，调用 `createFileChunk` 将文件切片，切片数量通过文件大小控制，这里设置 10MB，也就是说 100 MB 的文件会被分成 10 个切片

createFileChunk 内使用 while 循环和 slice 方法将切片放入 `fileChunkList` 数组中返回

在生成文件切片时，需要给每个切片一个标识作为 hash，这里暂时使用`文件名 + 下标`，这样后端可以知道当前切片是第几个切片，用于之后的合并切片

随后调用 `uploadChunks` 上传所有的文件切片，将文件切片，切片 hash，以及文件名放入 FormData 中，再调用上一步的 `request` 函数返回一个 proimise，最后调用 Promise.all 并发上传所有的切片

### 发送合并请求

这里使用整体思路中提到的第二种合并切片的方式，即前端主动通知服务端进行合并，所以前端还需要额外发请求，服务端接受到这个请求时主动合并切片

```html
<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload">上传</el-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    container: {
      file: null
    },
    data: []
  }),
  methods: {
    request() {},
    handleFileChange() {},
    createFileChunk() {},
    // 上传切片，同时过滤已上传的切片
    async uploadChunks() {
      const requestList = this.data
        .map(({ chunk，hash }) => {
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("filename", this.container.file.name);
          return { formData };
        })
        .map(async ({ formData }) =>
          this.request({
            url: "http://localhost:3000",
            data: formData
          })
        );
      await Promise.all(requestList);
+      // 合并切片
+     await this.mergeRequest();
    },
+    async mergeRequest() {
+      await this.request({
+        url: "http://localhost:3000/merge",
+        headers: {
+          "content-type": "application/json"
+        },
+        data: JSON.stringify({
+          filename: this.container.file.name
+        })
+      });
+    },    
    async handleUpload() {}
  }
};
</script>
```

## 服务端部分

简单使用 http 模块搭建服务端

```js
const http = require("http");
const server = http.createServer();

server.on("request", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.status = 200;
    res.end();
    return;
  }
});

server.listen(3000, () => console.log("正在监听 3000 端口"));
```

### 接受切片

使用 `multiparty` 包处理前端传来的 FormData

在 multiparty.parse 的回调中，files 参数保存了 FormData 中文件，fields 参数保存了 FormData 中非文件的字段

```js
const http = require("http");
const path = require("path");
const fse = require("fs-extra");
const multiparty = require("multiparty");

const server = http.createServer();
+ const UPLOAD_DIR = path.resolve(__dirname, "..", "target"); // 大文件存储目录

server.on("request", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.status = 200;
    res.end();
    return;
  }

+  const multipart = new multiparty.Form();

+  multipart.parse(req, async (err, fields, files) => {
+    if (err) {
+      return;
+    }
+    const [chunk] = files.chunk;
+    const [hash] = fields.hash;
+    const [filename] = fields.filename;
+    const chunkDir = path.resolve(UPLOAD_DIR, filename);

+   // 切片目录不存在，创建切片目录
+    if (!fse.existsSync(chunkDir)) {
+      await fse.mkdirs(chunkDir);
+    }

+      // fs-extra 专用方法，类似 fs.rename 并且跨平台
+      // fs-extra 的 rename 方法 windows 平台会有权限问题
+      // https://github.com/meteor/meteor/issues/7852#issuecomment-255767835
+      await fse.move(chunk.path, `${chunkDir}/${hash}`);
+    res.end("received file chunk");
+  });
});

server.listen(3000, () => console.log("正在监听 3000 端口"));
```

![demo](/notes/assets/jsInterview/16f905fb6a626f47_tplv-t2oaga2asx-watermark.awebp)

查看 multiparty 处理后的 chunk 对象，path 是存储临时文件的路径，size 是临时文件大小，在 multiparty 文档中提到可以使用 fs.rename(由于我用的是 fs-extra，它的 rename 方法 windows 平台权限问题，所以换成了 fse.move) 移动临时文件，即移动文件切片

在接受文件切片时，需要先创建存储切片的文件夹，由于前端在发送每个切片时额外携带了唯一值 hash，所以以 hash 作为文件名，将切片从临时路径移动切片文件夹中，最后的结果如下

![demo](/notes/assets/jsInterview/16f83c3caac8eb65_tplv-t2oaga2asx-watermark.awebp)

### 合并切片

在接收到前端发送的合并请求后，服务端将文件夹下的所有切片进行合并

```js
const http = require("http");
const path = require("path");
const fse = require("fs-extra");

const server = http.createServer();
const UPLOAD_DIR = path.resolve(__dirname, "..", "target"); // 大文件存储目录

+ const resolvePost = req =>
+   new Promise(resolve => {
+     let chunk = "";
+     req.on("data", data => {
+       chunk += data;
+     });
+     req.on("end", () => {
+       resolve(JSON.parse(chunk));
+     });
+   });

+ const pipeStream = (path, writeStream) =>
+  new Promise(resolve => {
+    const readStream = fse.createReadStream(path);
+    readStream.on("end", () => {
+      fse.unlinkSync(path);
+      resolve();
+    });
+    readStream.pipe(writeStream);
+  });

// 合并切片
+ const mergeFileChunk = async (filePath, filename, size) => {
+  const chunkDir = path.resolve(UPLOAD_DIR, filename);
+  const chunkPaths = await fse.readdir(chunkDir);
+  // 根据切片下标进行排序
+  // 否则直接读取目录的获得的顺序可能会错乱
+  chunkPaths.sort((a, b) => a.split("-")[1] - b.split("-")[1]);
+  await Promise.all(
+    chunkPaths.map((chunkPath, index) =>
+      pipeStream(
+        path.resolve(chunkDir, chunkPath),
+        // 指定位置创建可写流
+        fse.createWriteStream(filePath, {
+          start: index * size,
+          end: (index + 1) * size
+        })
+      )
+    )
+  );
+  fse.rmdirSync(chunkDir); // 合并后删除保存切片的目录
+};

server.on("request", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.status = 200;
    res.end();
    return;
  }

+   if (req.url === "/merge") {
+     const data = await resolvePost(req);
+     const { filename,size } = data;
+     const filePath = path.resolve(UPLOAD_DIR, `${filename}`);
+     await mergeFileChunk(filePath, filename);
+     res.end(
+       JSON.stringify({
+         code: 0,
+         message: "file merged success"
+       })
+     );
+   }

});

server.listen(3000, () => console.log("正在监听 3000 端口"));
```

由于前端在发送合并请求时会携带文件名，服务端根据文件名可以找到上一步创建的切片文件夹

接着使用 `fs.createWriteStream` 创建一个可写流，可写流文件名就是**切片文件夹名 + 后缀**名组合而成

随后遍历整个切片文件夹，将切片通过 `fs.createReadStream` 创建可读流，传输合并到目标文件中

值得注意的是每次可读流都会传输到可写流的指定位置，这是通过 `createWriteStream` 的第二个参数 `start/end` 控制的，目的是能够并发合并多个可读流到可写流中，这样即使流的顺序不同也能传输到正确的位置，所以这里还需要让前端在请求的时候多提供一个 `size` 参数

```js
   async mergeRequest() {
      await this.request({
        url: "http://localhost:3000/merge",
        headers: {
          "content-type": "application/json"
        },
        data: JSON.stringify({
+         size: SIZE,
          filename: this.container.file.name
        })
      });
    },
```

![demo](/notes/asstes/jsInterview/16fccc5d950c2275_tplv-t2oaga2asx-watermark.awebp)

其实也可以等上一个切片合并完后再合并下个切片，这样就不需要指定位置，但传输速度会降低，所以使用了并发合并的手段，接着只要保证每次合并完成后删除这个切片，等所有切片都合并完毕后最后删除切片文件夹即可

![demo](/notes/assets/jsInterview/16f8414c7fae1c1f_tplv-t2oaga2asx-watermark.awebp)

至此一个简单的大文件上传就完成了，接下来我们再此基础上扩展一些额外的功能

## 显示上传进度条

上传进度分两种，一个是每个切片的上传进度，另一个是整个文件的上传进度，而整个文件的上传进度是基于每个切片上传进度计算而来，所以我们先实现切片的上传进度

### 切片进度条

`XMLHttpRequest` 原生支持上传进度的监听，只需要监听 `upload.onprogress` 即可，我们在原来的 `request` 基础上传入 `onProgress` 参数，给 `XMLHttpRequest` 注册监听事件

```js
 // xhr
    request({
      url,
      method = "post",
      data,
      headers = {},
+      onProgress = e => e,
      requestList
    }) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
+       xhr.upload.onprogress = onProgress;
        xhr.open(method, url);
        Object.keys(headers).forEach(key =>
          xhr.setRequestHeader(key, headers[key])
        );
        xhr.send(data);
        xhr.onload = e => {
          resolve({
            data: e.target.response
          });
        };
      });
    }
```

由于每个切片都需要触发独立的监听事件，所以还需要一个工厂函数，根据传入的切片返回不同的监听函数

在原先的前端上传逻辑中新增监听函数部分

```js
    // 上传切片，同时过滤已上传的切片
    async uploadChunks(uploadedList = []) {
      const requestList = this.data
+       .map(({ chunk,hash,index }) => {
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("filename", this.container.file.name);
+         return { formData,index };
        })
+       .map(async ({ formData,index }) =>
          this.request({
            url: "http://localhost:3000",
            data: formData，
+           onProgress: this.createProgressHandler(this.data[index]),
          })
        );
      await Promise.all(requestList);
       // 合并切片
      await this.mergeRequest();
    },
    async handleUpload() {
      if (!this.container.file) return;
      const fileChunkList = this.createFileChunk(this.container.file);
      this.data = fileChunkList.map(({ file }，index) => ({
        chunk: file,
+       index,
        hash: this.container.file.name + "-" + index
+       percentage:0
      }));
      await this.uploadChunks();
    }    
+   createProgressHandler(item) {
+      return e => {
+        item.percentage = parseInt(String((e.loaded / e.total) * 100));
+      };
+    }
```

每个切片在上传时都会通过监听函数更新 `data` 数组对应元素的 `percentage` 属性，之后把将 `data` 数组放到视图中展示即可

### 文件进度条

将每个切片已上传的部分累加，除以整个文件的大小，就能得出当前文件的上传进度，所以这里使用 `Vue` 计算属性

```js
  computed: {
       uploadPercentage() {
          if (!this.container.file || !this.data.length) return 0;
          const loaded = this.data
            .map(item => item.size * item.percentage)
            .reduce((acc, cur) => acc + cur);
          return parseInt((loaded / this.container.file.size).toFixed(2));
        }
 }
```

最终视图如下

![demo](/notes/assets/jsInterview/16f84ad6b4848423_tplv-t2oaga2asx-watermark.awebp)