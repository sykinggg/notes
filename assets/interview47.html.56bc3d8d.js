import{_ as e,a as c}from"./app.c9ab80ba.js";const t={},a=c('<h1 id="setstate-\u6267\u884C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#setstate-\u6267\u884C\u6D41\u7A0B" aria-hidden="true">#</a> setState \u6267\u884C\u6D41\u7A0B</h1><p>\u6709\u65F6\u8868\u73B0\u51FA\u5F02\u6B65,\u6709\u65F6\u8868\u73B0\u51FA\u540C\u6B65</p><ol><li><p>\u5728\u5408\u6210\u4E8B\u4EF6\u548C\u94A9\u5B50\u51FD\u6570\u5F53\u4E2D\u662F\u5F02\u6B65\u7684\uFF0C\u5728\u539F\u751F\u4E8B\u4EF6\u548C<code>setTimeout</code>\u5F53\u4E2D\u662F\u540C\u6B65\u7684</p></li><li><p>\u5F02\u6B65\u5E76\u4E0D\u662F\u8BF4\u5185\u90E8\u662F\u7531\u5F02\u6B65\u4EE3\u7801\u7EC4\u6210\uFF0C\u672C\u8EAB\u7684\u6267\u884C\u8FC7\u7A0B\u548C\u4EE3\u7801\u90FD\u662F\u540C\u6B65\u7684\uFF0C\u53EA\u662F\u5408\u6210\u4E8B\u4EF6\u548C\u94A9\u5B50\u51FD\u6570\u7684\u8C03\u7528\u5728\u66F4\u65B0\u4E4B\u524D\uFF0C\u5BFC\u81F4\u62FF\u4E0D\u5230\u6570\u636E\u5F62\u6210\u6240\u8C13\u7684\u5F02\u6B65\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>setState</code>\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570(\u662F\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u62FF\u5230\u66F4\u65B0\u6570\u636E)</p></li><li><p>\u6279\u91CF\u4F18\u5316\u4E5F\u662F\u5EFA\u7ACB\u5728\u5F02\u6B65\u4E0A\u9762\uFF0C\u5728\u539F\u751F\u4E8B\u4EF6\u548C\u5B9A\u65F6\u4E8B\u4EF6\u4E2D\u4E0D\u4F1A\u6279\u91CF\u66F4\u65B0\uFF0C</p></li><li><p>\u5408\u6210\u4E8B\u4EF6(\u5C31\u662F\u7ED9\u90A3\u4E9B\u5143\u7D20\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6\u7B49\u7B49\u90FD\u5C5E\u4E8E\u5408\u6210\u4E8B\u4EF6)</p></li></ol><h1 id="setstate-\u6267\u884C\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#setstate-\u6267\u884C\u539F\u56E0" aria-hidden="true">#</a> setState \u6267\u884C\u539F\u56E0</h1><p>\u8FD9\u6837\u4F1A\u7834\u574F\u6389 <code>props</code> \u548C <code>state</code> \u4E4B\u95F4\u7684\u4E00\u81F4\u6027\uFF0C\u9020\u6210\u4E00\u4E9B\u96BE\u4EE5 debug \u7684\u95EE\u9898\u3002</p><p>\u8FD9\u6837\u4F1A\u8BA9\u4E00\u4E9B\u6B63\u5728\u5B9E\u73B0\u7684\u65B0\u529F\u80FD\u53D8\u5F97\u65E0\u6CD5\u5B9E\u73B0\u3002</p><h1 id="react-fiber\u5B83\u7684\u76EE\u7684\u662F\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#react-fiber\u5B83\u7684\u76EE\u7684\u662F\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898" aria-hidden="true">#</a> React Fiber\u5B83\u7684\u76EE\u7684\u662F\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898</h1><p>React\u7684<code>Reconciler</code> \u5C42\u8D1F\u8D23\u7EC4\u5EFA\u7684\u751F\u547D\u5468\u671F\u8FD0\u7B97\uFF0Cdiff\u8FD0\u7B97\u7B49\uFF0C React15\u4E2D\u88AB\u547D\u540D\u4E3A<code>Stack Reconciler</code>\uFF0C\u8FD0\u884C\u8FC7\u7A0B\u4E0D\u80FD\u4E2D\u65AD\uFF0C\u5F53\u9875\u9762\u5143\u7D20\u8F83\u591A\uFF0C\u6267\u884C\u65F6\u95F4\u8FC7\u957F\uFF0C\u8D85\u8FC716ms\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u51FA\u73B0\u6389\u5E27\u7684\u73B0\u8C61\u3002</p><p>\u5728React16\u4E2D\uFF0CReconciler\u6539\u6210\u4E86Fiber Reconciler\uFF0C\u4F7F\u7528\u4E86\u6D4F\u89C8\u5668\u7684<code>requestIdleCallback</code>\u8FD9\u4E00API\uFF0C\u7528\u94FE\u8868\u7684\u5F62\u5F0F\u6765\u904D\u5386\u7EC4\u5EFA\u6811\uFF0C\u80FD\u7075\u6D3B\u7684\u6682\u505C\u3001\u7EE7\u7EED\u548C\u4E22\u5F03\u6267\u884C\u7684\u4EFB\u52A1\u3002\u4F7F\u7528fiber\u5C06\u4EFB\u52A1\u5206\u5272\u6267\u884C\uFF0C\u4ECE\u6846\u67B6\u5C42\u9762\u964D\u4F4E\u4E86\u6389\u5E27\u7684\u6982\u7387\u3002</p><blockquote><p>\u5386\u53F2\u539F\u56E0</p></blockquote><p>React 15 \u7684 StackReconciler \u65B9\u6848\u7531\u4E8E\u9012\u5F52\u4E0D\u53EF\u4E2D\u65AD\u95EE\u9898\uFF0C\u5982\u679C Diff \u65F6\u95F4\u8FC7\u957F\uFF08JS\u8BA1\u7B97\u65F6\u95F4\uFF09\uFF0C\u4F1A\u9020\u6210\u9875\u9762 UI \u7684\u65E0\u54CD\u5E94\uFF08\u6BD4\u5982\u8F93\u5165\u6846\uFF09\u7684\u8868\u73B0\uFF0Cvdom \u65E0\u6CD5\u5E94\u7528\u5230 dom \u4E2D\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CReact 16 \u5B9E\u73B0\u4E86\u65B0\u7684\u57FA\u4E8E <code>requestIdleCallback</code> \u7684\u8C03\u5EA6\u5668\uFF08\u56E0\u4E3A <code>requestIdleCallback</code> \u517C\u5BB9\u6027\u548C\u7A33\u5B9A\u6027\u95EE\u9898\uFF0C\u81EA\u5DF1\u5B9E\u73B0\u4E86 polyfill\uFF09\uFF0C\u901A\u8FC7\u4EFB\u52A1\u4F18\u5148\u7EA7\u7684\u601D\u60F3\uFF0C\u5728\u9AD8\u4F18\u5148\u7EA7\u4EFB\u52A1\u8FDB\u5165\u7684\u65F6\u5019\uFF0C\u4E2D\u65AD reconciler\u3002</p><p>\u4E3A\u4E86\u9002\u914D\u8FD9\u79CD\u65B0\u7684\u8C03\u5EA6\u5668\uFF0C\u63A8\u51FA\u4E86 FiberReconciler\uFF0C\u5C06\u539F\u6765\u7684\u6811\u5F62\u7ED3\u6784\uFF08vdom\uFF09\u8F6C\u6362\u6210 Fiber \u94FE\u8868\u7684\u5F62\u5F0F\uFF08child/sibling/return\uFF09\uFF0C\u6574\u4E2A Fiber \u7684\u904D\u5386\u662F\u57FA\u4E8E\u5FAA\u73AF\u800C\u975E\u9012\u5F52\uFF0C\u53EF\u4EE5\u968F\u65F6\u4E2D\u65AD\u3002</p><p>\u66F4\u52A0\u6838\u5FC3\u7684\u662F\uFF0C\u57FA\u4E8E Fiber \u7684\u94FE\u8868\u7ED3\u6784\uFF0C\u5BF9\u4E8E\u540E\u7EED\uFF08React 17 lane \u67B6\u6784\uFF09\u7684\u5F02\u6B65\u6E32\u67D3\u548C \uFF08\u53EF\u80FD\u5B58\u5728\u7684\uFF09worker \u8BA1\u7B97\u90FD\u6709\u975E\u5E38\u597D\u7684\u5E94\u7528\u57FA\u7840</p>',14);function r(i,o){return a}var l=e(t,[["render",r],["__file","interview47.html.vue"]]);export{l as default};
