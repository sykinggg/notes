import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as i,a as o}from"./app.92084e2a.js";const r={},s=o('<h1 id="\u7B2C186\u9898-async-await-\u548C-promise" tabindex="-1"><a class="header-anchor" href="#\u7B2C186\u9898-async-await-\u548C-promise" aria-hidden="true">#</a> \u7B2C186\u9898\uFF1Aasync/await \u548C Promise</h1><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2><blockquote><p><code>Promise</code> \u5BF9\u8C61\u662F\u4E00\u4E2A\u4EE3\u7406\u5BF9\u8C61\uFF08\u4EE3\u7406\u4E00\u4E2A\u503C\uFF09\uFF0C\u88AB\u4EE3\u7406\u7684\u503C\u5728Promise\u5BF9\u8C61\u521B\u5EFA\u65F6\u53EF\u80FD\u662F\u672A\u77E5\u7684\u3002\u5B83\u5141\u8BB8\u4F60\u4E3A\u5F02\u6B65\u64CD\u4F5C\u7684\u6210\u529F\u548C\u5931\u8D25\u5206\u522B\u7ED1\u5B9A\u76F8\u5E94\u7684\u5904\u7406\u65B9\u6CD5\uFF08handlers\uFF09\u3002 \u8FD9\u8BA9\u5F02\u6B65\u65B9\u6CD5\u53EF\u4EE5\u50CF\u540C\u6B65\u65B9\u6CD5\u90A3\u6837\u8FD4\u56DE\u503C\uFF0C\u4F46\u5E76\u4E0D\u662F\u7ACB\u5373\u8FD4\u56DE\u6700\u7EC8\u6267\u884C\u7ED3\u679C\uFF0C\u800C\u662F\u4E00\u4E2A\u80FD\u4EE3\u8868\u672A\u6765\u51FA\u73B0\u7684\u7ED3\u679C\u7684promise\u5BF9\u8C61</p></blockquote><h2 id="async-await" tabindex="-1"><a class="header-anchor" href="#async-await" aria-hidden="true">#</a> async/await</h2><p>es2017\u7684\u65B0\u8BED\u6CD5\uFF0C<code>async/await</code>\u5C31\u662F<code>generator + promise</code>\u7684\u8BED\u6CD5\u7CD6</p><p><code>async/await</code> \u548C <code>Promise</code> \u7684\u5173\u7CFB\u975E\u5E38\u7684\u5DE7\u5999\uFF0Cawait\u5FC5\u987B\u5728async\u5185\u4F7F\u7528\uFF0C\u5E76\u88C5\u9970\u4E00\u4E2APromise\u5BF9\u8C61\uFF0Casync\u8FD4\u56DE\u7684\u4E5F\u662F\u4E00\u4E2APromise\u5BF9\u8C61\u3002</p><p><code>async/await</code>\u4E2D\u7684<code>return/throw</code>\u4F1A\u4EE3\u7406\u81EA\u5DF1\u8FD4\u56DE\u7684Promise\u7684resolve/reject\uFF0C\u800C\u4E00\u4E2APromise\u7684resolve/reject\u4F1A\u4F7F\u5F97await\u5F97\u5230\u8FD4\u56DE\u503C\u6216\u629B\u51FA\u5F02\u5E38\u3002</p><ul><li><p>\u5982\u679C\u65B9\u6CD5\u5185\u65E0await\u8282\u70B9</p><ul><li><p><code>return</code> \u4E00\u4E2A\u5B57\u9762\u91CF\u5219\u4F1A\u5F97\u5230\u4E00\u4E2A{PromiseStatus: resolved}\u7684Promise\u3002</p></li><li><p><code>throw</code> \u4E00\u4E2AError\u5219\u4F1A\u5F97\u5230\u4E00\u4E2A{PromiseStatus: rejected}\u7684Promise\u3002</p></li></ul></li><li><p>\u5982\u679C\u65B9\u6CD5\u5185\u6709await\u8282\u70B9</p><ul><li><p>async\u4F1A\u8FD4\u56DE\u4E00\u4E2A{PromiseStatus: pending}\u7684Promise\uFF08\u53D1\u751F\u5207\u6362\uFF0C\u5F02\u6B65\u7B49\u5F85Promise\u7684\u6267\u884C\u7ED3\u679C\uFF09\u3002</p></li><li><p>Promise\u7684resolve\u4F1A\u4F7F\u5F97await\u7684\u4EE3\u7801\u8282\u70B9\u83B7\u5F97\u76F8\u5E94\u7684\u8FD4\u56DE\u7ED3\u679C\uFF0C\u5E76\u7EE7\u7EED\u5411\u4E0B\u6267\u884C\u3002</p></li><li><p>Promise\u7684reject \u4F1A\u4F7F\u5F97await\u7684\u4EE3\u7801\u8282\u70B9\u81EA\u52A8\u629B\u51FA\u76F8\u5E94\u7684\u5F02\u5E38\uFF0C\u7EC8\u6B62\u5411\u4E0B\u7EE7\u7EED\u6267\u884C\u3002</p></li></ul></li></ul>',8),c=[s];function t(d,l){return a(),i("div",null,c)}var m=e(r,[["render",t],["__file","173.html.vue"]]);export{m as default};