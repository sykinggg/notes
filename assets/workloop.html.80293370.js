import{_ as r,r as s,o as i,c as _,b as e,d as c,w as l,F as a,e as o,a as h}from"./app.9d3046e8.js";const u={},f=e("h1",{id:"react-\u5DE5\u4F5C\u5FAA\u73AF-workloop",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#react-\u5DE5\u4F5C\u5FAA\u73AF-workloop","aria-hidden":"true"},"#"),o(" React \u5DE5\u4F5C\u5FAA\u73AF (workLoop)")],-1),p=o("\u5728\u524D\u6587("),k=o("React \u5E94\u7528\u7684\u5B8F\u89C2\u5305\u7ED3\u6784"),b=o(")\u4E2D, \u4ECB\u7ECD\u4E86"),m=e("code",null,"react",-1),g=o("\u6838\u5FC3\u5305\u4E4B\u95F4\u7684\u4F9D\u8D56\u548C\u8C03\u7528\u5173\u7CFB, \u5E76\u7ED8\u5236\u51FA\u4E86\u6982\u89C8\u56FE. \u5728\u6982\u89C8\u56FE\u4E2D, \u53EF\u4EE5\u770B\u5230\u6709\u4E24\u4E2A\u5927\u7684\u5FAA\u73AF, \u5B83\u4EEC\u5206\u522B\u4F4D\u4E8E"),R=e("code",null,"scheduler",-1),w=o("\u548C"),x=e("code",null,"react-reconciler",-1),L=o("\u5305\u4E2D:"),S=["src"],j=e("p",null,[o("\u672C\u6587\u5C06\u8FD9\u4E24\u4E2A\u5FAA\u73AF\u5206\u522B\u8868\u8FF0\u4E3A"),e("code",null,"\u4EFB\u52A1\u8C03\u5EA6\u5FAA\u73AF"),o("\u548C"),e("code",null,"fiber\u6784\u9020\u5FAA\u73AF"),o(". \u63A5\u4E0B\u6765\u4ECE\u5B8F\u89C2\u89D2\u5EA6\u9610\u8FF0\u8FD9\u4E24\u5927\u5FAA\u73AF\u7684\u4F5C\u7528, \u4EE5\u53CA\u5B83\u4EEC\u4E4B\u95F4\u7684\u533A\u522B\u548C\u8054\u7CFB. \u66F4\u6DF1\u5165\u7684\u6E90\u7801\u5206\u6790\u5206\u522B\u5728"),e("code",null,"scheduler \u8C03\u5EA6\u673A\u5236"),o("\u548C"),e("code",null,"fiber \u6811\u6784\u9020"),o("\u7AE0\u8282\u4E2D\u8BE6\u7EC6\u89E3\u8BFB.")],-1),v=e("ol",null,[e("li",null,[e("code",null,"\u4EFB\u52A1\u8C03\u5EA6\u5FAA\u73AF")])],-1),O=o("\u6E90\u7801\u4F4D\u4E8E"),W={href:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/Scheduler.js",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"Scheduler.js",-1),F=o(", \u5B83\u662F"),N=e("code",null,"react",-1),V=o("\u5E94\u7528\u5F97\u4EE5\u8FD0\u884C\u7684\u4FDD\u8BC1, \u5B83\u9700\u8981\u5FAA\u73AF\u8C03\u7528, \u63A7\u5236\u6240\u6709\u4EFB\u52A1("),C=e("code",null,"task",-1),E=o(")\u7684\u8C03\u5EA6."),y=e("ol",{start:"2"},[e("li",null,[e("code",null,"fiber\u6784\u9020\u5FAA\u73AF")])],-1),D=o("\u6E90\u7801\u4F4D\u4E8E"),I={href:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"ReactFiberWorkLoop.js",-1),T=o(", \u63A7\u5236 fiber \u6811\u7684\u6784\u9020, \u6574\u4E2A\u8FC7\u7A0B\u662F\u4E00\u4E2A"),$=o("\u6DF1\u5EA6\u4F18\u5148\u904D\u5386"),q=o("."),z=e("p",null,[o("\u8FD9\u4E24\u4E2A\u5FAA\u73AF\u5BF9\u5E94\u7684 js \u6E90\u7801\u4E0D\u540C\u4E8E\u5176\u4ED6\u95ED\u5305(\u8FD0\u884C\u65F6\u5C31\u662F\u95ED\u5305), \u5176\u4E2D\u5B9A\u4E49\u7684\u5168\u5C40\u53D8\u91CF, \u4E0D\u4EC5\u662F\u8BE5\u4F5C\u7528\u57DF\u7684\u79C1\u6709\u53D8\u91CF, \u66F4\u7528\u4E8E"),e("code",null,"\u63A7\u5236react\u5E94\u7528\u7684\u6267\u884C\u8FC7\u7A0B"),o(".")],-1),A=e("h2",{id:"\u533A\u522B\u4E0E\u8054\u7CFB",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u533A\u522B\u4E0E\u8054\u7CFB","aria-hidden":"true"},"#"),o(" \u533A\u522B\u4E0E\u8054\u7CFB")],-1),G=e("p",null,"\u533A\u522B",-1),H=e("code",null,"\u4EFB\u52A1\u8C03\u5EA6\u5FAA\u73AF",-1),J=o("\u662F\u4EE5"),K=e("code",null,"\u4E8C\u53C9\u5806",-1),P=o("\u4E3A\u6570\u636E\u7ED3\u6784(\u8BE6\u89C1"),Q=o("react \u7B97\u6CD5\u4E4B\u5806\u6392\u5E8F"),U=o("), \u5FAA\u73AF\u6267\u884C"),X=e("code",null,"\u5806",-1),Y=o("\u7684\u9876\u70B9, \u76F4\u5230"),Z=e("code",null,"\u5806",-1),ee=o("\u88AB\u6E05\u7A7A."),oe=e("li",null,[e("code",null,"\u4EFB\u52A1\u8C03\u5EA6\u5FAA\u73AF"),o("\u7684\u903B\u8F91\u504F\u5411\u5B8F\u89C2, \u5B83\u8C03\u5EA6\u7684\u662F\u6BCF\u4E00\u4E2A\u4EFB\u52A1("),e("code",null,"task"),o("), \u800C\u4E0D\u5173\u5FC3\u8FD9\u4E2A\u4EFB\u52A1\u5177\u4F53\u662F\u5E72\u4EC0\u4E48\u7684(\u751A\u81F3\u53EF\u4EE5\u5C06"),e("code",null,"Scheduler"),o("\u5305\u8131\u79BB"),e("code",null,"react"),o("\u4F7F\u7528), \u5177\u4F53\u4EFB\u52A1\u5176\u5B9E\u5C31\u662F\u6267\u884C\u56DE\u8C03\u51FD\u6570"),e("code",null,"performSyncWorkOnRoot"),o("\u6216"),e("code",null,"performConcurrentWorkOnRoot"),o(".")],-1),ce=e("code",null,"fiber\u6784\u9020\u5FAA\u73AF",-1),te=o("\u662F\u4EE5"),le=e("code",null,"\u6811",-1),de=o("\u4E3A\u6570\u636E\u7ED3\u6784, \u4ECE\u4E0A\u81F3\u4E0B\u6267\u884C\u6DF1\u5EA6\u4F18\u5148\u904D\u5386(\u8BE6\u89C1"),se=o("react \u7B97\u6CD5\u4E4B\u6DF1\u5EA6\u4F18\u5148\u904D\u5386"),ne=o(")."),re=e("li",null,[e("code",null,"fiber\u6784\u9020\u5FAA\u73AF"),o("\u7684\u903B\u8F91\u504F\u5411\u5177\u4F53\u5B9E\u73B0, \u5B83\u53EA\u662F\u4EFB\u52A1("),e("code",null,"task"),o(")\u7684\u4E00\u90E8\u5206(\u5982"),e("code",null,"performSyncWorkOnRoot"),o("\u5305\u62EC: "),e("code",null,"fiber"),o("\u6811\u7684\u6784\u9020, "),e("code",null,"DOM"),o("\u6E32\u67D3, \u8C03\u5EA6\u68C0\u6D4B), \u53EA\u8D1F\u8D23"),e("code",null,"fiber"),o("\u6811\u7684\u6784\u9020.")],-1),ie=e("li",null,[e("p",null,"\u8054\u7CFB"),e("ul",null,[e("li",null,[e("code",null,"fiber\u6784\u9020\u5FAA\u73AF"),o("\u662F"),e("code",null,"\u4EFB\u52A1\u8C03\u5EA6\u5FAA\u73AF"),o("\u4E2D\u7684\u4EFB\u52A1("),e("code",null,"task"),o(")\u7684\u4E00\u90E8\u5206. \u5B83\u4EEC\u662F\u4ECE\u5C5E\u5173\u7CFB, \u6BCF\u4E2A\u4EFB\u52A1\u90FD\u4F1A\u91CD\u65B0\u6784\u9020\u4E00\u4E2A"),e("code",null,"fiber"),o("\u6811.")])])],-1),_e=h('<h2 id="\u4E3B\u5E72\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u5E72\u903B\u8F91" aria-hidden="true">#</a> \u4E3B\u5E72\u903B\u8F91</h2><p>\u901A\u8FC7\u4E0A\u6587\u7684\u63CF\u8FF0, \u4E24\u5927\u5FAA\u73AF\u7684\u5206\u5DE5\u53EF\u4EE5\u603B\u7ED3\u4E3A: \u5927\u5FAA\u73AF(\u4EFB\u52A1\u8C03\u5EA6\u5FAA\u73AF)\u8D1F\u8D23\u8C03\u5EA6<code>task</code>, \u5C0F\u5FAA\u73AF(fiber \u6784\u9020\u5FAA\u73AF)\u8D1F\u8D23\u5B9E\u73B0<code>task</code> .</p><p>react \u8FD0\u884C\u7684\u4E3B\u5E72\u903B\u8F91, \u5373\u5C06<code>\u8F93\u5165\u8F6C\u6362\u4E3A\u8F93\u51FA</code>\u7684\u6838\u5FC3\u6B65\u9AA4, \u5B9E\u9645\u4E0A\u5C31\u662F\u56F4\u7ED5\u8FD9\u4E24\u5927\u5DE5\u4F5C\u5FAA\u73AF\u8FDB\u884C\u5C55\u5F00.</p><p>\u7ED3\u5408\u4E0A\u6587\u7684\u5B8F\u89C2\u6982\u89C8\u56FE(\u5C55\u793A\u6838\u5FC3\u5305\u4E4B\u95F4\u7684\u8C03\u7528\u5173\u7CFB), \u53EF\u4EE5\u5C06 react \u8FD0\u884C\u7684\u4E3B\u5E72\u903B\u8F91\u8FDB\u884C\u6982\u62EC:</p><ol><li>\u8F93\u5165: \u5C06\u6BCF\u4E00\u6B21\u66F4\u65B0(\u5982: \u65B0\u589E, \u5220\u9664, \u4FEE\u6539\u8282\u70B9\u4E4B\u540E)\u89C6\u4E3A\u4E00\u6B21<code>\u66F4\u65B0\u9700\u6C42</code>(\u76EE\u7684\u662F\u8981\u66F4\u65B0<code>DOM</code>\u8282\u70B9).</li><li>\u6CE8\u518C\u8C03\u5EA6\u4EFB\u52A1: <code>react-reconciler</code>\u6536\u5230<code>\u66F4\u65B0\u9700\u6C42</code>\u4E4B\u540E, \u5E76\u4E0D\u4F1A\u7ACB\u5373\u6784\u9020<code>fiber\u6811</code>, \u800C\u662F\u53BB\u8C03\u5EA6\u4E2D\u5FC3<code>scheduler</code>\u6CE8\u518C\u4E00\u4E2A\u65B0\u4EFB\u52A1<code>task</code>, \u5373\u628A<code>\u66F4\u65B0\u9700\u6C42</code>\u8F6C\u6362\u6210\u4E00\u4E2A<code>task</code>.</li><li>\u6267\u884C\u8C03\u5EA6\u4EFB\u52A1(\u8F93\u51FA): \u8C03\u5EA6\u4E2D\u5FC3<code>scheduler</code>\u901A\u8FC7<code>\u4EFB\u52A1\u8C03\u5EA6\u5FAA\u73AF</code>\u6765\u6267\u884C<code>task</code>(<code>task</code>\u7684\u6267\u884C\u8FC7\u7A0B\u53C8\u56DE\u5230\u4E86<code>react-reconciler</code>\u5305\u4E2D). <ul><li><code>fiber\u6784\u9020\u5FAA\u73AF</code>\u662F<code>task</code>\u7684\u5B9E\u73B0\u73AF\u8282\u4E4B\u4E00, \u5FAA\u73AF\u5B8C\u6210\u4E4B\u540E\u4F1A\u6784\u9020\u51FA\u6700\u65B0\u7684 fiber \u6811.</li><li><code>commitRoot</code>\u662F<code>task</code>\u7684\u5B9E\u73B0\u73AF\u8282\u4E4B\u4E8C, \u628A\u6700\u65B0\u7684 fiber \u6811\u6700\u7EC8\u6E32\u67D3\u5230\u9875\u9762\u4E0A, <code>task</code>\u5B8C\u6210.</li></ul></li></ol><p>\u4E3B\u5E72\u903B\u8F91\u5C31\u662F<code>\u8F93\u5165\u5230\u8F93\u51FA</code>\u8FD9\u4E00\u6761\u94FE\u8DEF, \u4E3A\u4E86\u66F4\u597D\u7684\u6027\u80FD(\u5982<code>\u6279\u91CF\u66F4\u65B0</code>, <code>\u53EF\u4E2D\u65AD\u6E32\u67D3</code>\u7B49\u529F\u80FD), <code>react</code>\u5728\u8F93\u5165\u5230\u8F93\u51FA\u7684\u94FE\u8DEF\u4E0A\u505A\u4E86\u5F88\u591A\u4F18\u5316\u7B56\u7565, \u6BD4\u5982\u672C\u6587\u8BB2\u8FF0\u7684<code>\u4EFB\u52A1\u8C03\u5EA6\u5FAA\u73AF</code>\u548C<code>fiber\u6784\u9020\u5FAA\u73AF</code>\u76F8\u4E92\u914D\u5408\u5C31\u53EF\u4EE5\u5B9E\u73B0<code>\u53EF\u4E2D\u65AD\u6E32\u67D3</code>.</p>',6);function ae(n,he){const t=s("RouterLink"),d=s("ExternalLinkIcon");return i(),_(a,null,[f,e("p",null,[p,c(t,{to:"/react-illustration-series/main/macro-structure.html"},{default:l(()=>[k]),_:1}),b,m,g,R,w,x,L]),e("img",{src:n.$withBase("/assets/react-illustration-series/workloop.png"),alt:"demo"},null,8,S),j,v,e("p",null,[O,e("a",W,[B,c(d)]),F,N,V,C,E]),y,e("p",null,[D,e("a",I,[M,c(d)]),T,c(t,{to:"/react-illustration-series/algorithm/dfs.html"},{default:l(()=>[$]),_:1}),q]),z,A,e("ol",null,[e("li",null,[G,e("ul",null,[e("li",null,[H,J,K,P,c(t,{to:"/react-illustration-series/algorithm/heapsort.html"},{default:l(()=>[Q]),_:1}),U,X,Y,Z,ee]),oe,e("li",null,[ce,te,le,de,c(t,{to:"/react-illustration-series/algorithm/dfs.html"},{default:l(()=>[se]),_:1}),ne]),re])]),ie]),_e],64)}var fe=r(u,[["render",ae],["__file","workloop.html.vue"]]);export{fe as default};
