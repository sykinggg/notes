import{r as n,o as r,c as a,b as e,d,F as i,e as o,a as t}from"./app.3aebe68d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const l={},_=e("h1",{id:"\u534F\u53D8\u4E0E\u9006\u53D8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u534F\u53D8\u4E0E\u9006\u53D8","aria-hidden":"true"},"#"),o(" \u534F\u53D8\u4E0E\u9006\u53D8")],-1),p={href:"https://www.stephanboyer.com/post/132/what-are-covariance-and-contravariance",target:"_blank",rel:"noopener noreferrer"},h=o("\u539F\u6587\u94FE\u63A5: what are covariance and contravariance"),g={href:"https://en.wikipedia.org/wiki/Subtyping",target:"_blank",rel:"noopener noreferrer"},u=o("\u5B50\u7C7B\u578B"),m=o(" \u5728\u7F16\u7A0B\u7406\u8BBA\u4E0A\u662F\u4E00\u4E2A\u590D\u6742\u7684\u8BDD\u9898\uFF0C\u800C\u4ED6\u7684\u590D\u6742\u4E4B\u5904\u6765\u81EA\u4E8E\u4E00\u5BF9\u7ECF\u5E38\u4F1A\u88AB\u6DF7\u6DC6\u7684\u73B0\u8C61\uFF0C\u79F0\u4E4B\u4E3A"),f=e("em",null,"\u534F\u53D8",-1),A=o("\u4E0E"),b=e("em",null,"\u9006\u53D8",-1),y=o("\u3002\u8FD9\u7BC7\u6587\u7AE0\u5C06\u4F1A\u89E3\u91CA\u4E0A\u8FF0\u4E24\u4E2A\u6982\u5FF5\u3002"),k=t('<p>\u5F00\u59CB\u6587\u7AE0\u4E4B\u524D\u5148\u7EA6\u5B9A\u5982\u4E0B\u7684\u6807\u8BB0\uFF1A</p><ul><li><code>A \u227C B</code> \u610F\u5473\u7740 <code>A</code> \u662F <code>B</code> \u7684\u5B50\u7C7B\u578B\u3002</li><li><code>A \u2192 B</code> \u6307\u7684\u662F\u4EE5 <code>A</code> \u4E3A\u53C2\u6570\u7C7B\u578B\uFF0C\u4EE5 <code>B</code> \u4E3A\u8FD4\u56DE\u503C\u7C7B\u578B\u7684\u51FD\u6570\u7C7B\u578B\u3002</li><li><code>x : A</code> \u610F\u5473\u7740 <code>x</code> \u7684\u7C7B\u578B\u4E3A <code>A</code>\u3002</li></ul><h2 id="\u4E00\u4E2A\u6709\u8DA3\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u6709\u8DA3\u7684\u95EE\u9898" aria-hidden="true">#</a> \u4E00\u4E2A\u6709\u8DA3\u7684\u95EE\u9898</h2><p>\u5047\u8BBE\u6211\u6709\u5982\u4E0B\u4E09\u79CD\u7C7B\u578B\uFF1A</p><blockquote><p><code>Greyhound \u227C Dog \u227C Animal</code></p></blockquote><p><code>Greyhound</code> \uFF08\u7070\u72D7\uFF09\u662F <code>Dog</code> \uFF08\u72D7\uFF09\u7684\u5B50\u7C7B\u578B\uFF0C\u800C <code>Dog</code> \u5219\u662F <code>Animal</code> \uFF08\u52A8\u7269\uFF09\u7684\u5B50\u7C7B\u578B\u3002\u7531\u4E8E\u5B50\u7C7B\u578B\u901A\u5E38\u662F\u53EF\u4F20\u9012\u7684\uFF0C\u56E0\u6B64\u4E5F\u79F0 <code>Greyhound</code> \u662F <code>Animal</code> \u7684\u5B50\u7C7B\u578B\u3002</p><p><strong>\u95EE\u9898</strong>\uFF1A\u4EE5\u4E0B\u54EA\u79CD\u7C7B\u578B\u662F <code>Dog \u2192 Dog</code> \u7684\u5B50\u7C7B\u578B\u5462\uFF1F</p><ol><li><code>Greyhound \u2192 Greyhound</code></li><li><code>Greyhound \u2192 Animal</code></li><li><code>Animal \u2192 Animal</code></li><li><code>Animal \u2192 Greyhound</code></li></ol><p>\u8BA9\u6765\u601D\u8003\u4E00\u4E0B\u5982\u4F55\u89E3\u7B54\u8FD9\u4E2A\u95EE\u9898\u3002\u9996\u5148\u5047\u8BBE <code>f</code> \u662F\u4E00\u4E2A\u4EE5 <code>Dog \u2192 Dog</code> \u4E3A\u53C2\u6570\u7684\u51FD\u6570\u3002\u5B83\u7684\u8FD4\u56DE\u503C\u5E76\u4E0D\u91CD\u8981\uFF0C\u4E3A\u4E86\u5177\u4F53\u63CF\u8FF0\u95EE\u9898\uFF0C\u5047\u8BBE\u51FD\u6570\u7ED3\u6784\u4F53\u662F\u8FD9\u6837\u7684\uFF1A <code>f : (Dog \u2192 Dog) \u2192 String</code>\u3002</p><p>\u73B0\u5728\u6211\u60F3\u7ED9\u51FD\u6570 <code>f</code> \u4F20\u5165\u67D0\u4E2A\u51FD\u6570 <code>g</code> \u6765\u8C03\u7528\u3002\u6765\u77A7\u77A7\u5F53 <code>g</code> \u4E3A\u4EE5\u4E0A\u56DB\u79CD\u7C7B\u578B\u65F6\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\u60C5\u51B5\u3002</p><p><strong>1. \u5047\u8BBE <code>g : Greyhound \u2192 Greyhound</code>\uFF0C <code>f(g)</code> \u7684\u7C7B\u578B\u662F\u5426\u5B89\u5168\uFF1F</strong></p><p>\u4E0D\u5B89\u5168\uFF0C\u56E0\u4E3A\u5728f\u5185\u8C03\u7528\u5B83\u7684\u53C2\u6570<code>(g)</code>\u51FD\u6570\u65F6\uFF0C\u4F7F\u7528\u7684\u53C2\u6570\u53EF\u80FD\u662F\u4E00\u4E2A\u4E0D\u540C\u4E8E\u7070\u72D7\u4F46\u53C8\u662F\u72D7\u7684\u5B50\u7C7B\u578B\uFF0C\u4F8B\u5982 <code>GermanShepherd</code> \uFF08\u7267\u7F8A\u72AC\uFF09\u3002</p><p><strong>2. \u5047\u8BBE <code>g : Greyhound \u2192 Animal</code>\uFF0C <code>f(g)</code> \u7684\u7C7B\u578B\u662F\u5426\u5B89\u5168\uFF1F</strong></p><p>\u4E0D\u5B89\u5168\u3002\u7406\u7531\u540C(1)\u3002</p><p><strong>3. \u5047\u8BBE <code>g : Animal \u2192 Animal</code>\uFF0C <code>f(g)</code> \u7684\u7C7B\u578B\u662F\u5426\u5B89\u5168\uFF1F</strong></p><p>\u4E0D\u5B89\u5168\u3002\u56E0\u4E3A <code>f</code> \u6709\u53EF\u80FD\u5728\u8C03\u7528\u5B8C\u53C2\u6570\u4E4B\u540E\uFF0C\u8BA9\u8FD4\u56DE\u503C\uFF0C\u4E5F\u5C31\u662F <code>Animal</code> \uFF08\u52A8\u7269\uFF09\u72D7\u53EB\u3002\u5E76\u975E\u6240\u6709\u52A8\u7269\u90FD\u4F1A\u72D7\u53EB\u3002</p><p><strong>4. \u5047\u8BBE <code>g : Animal \u2192 Greyhound</code>\uFF0C <code>f(g)</code> \u7684\u7C7B\u578B\u662F\u5426\u5B89\u5168\uFF1F</strong></p><p>\u662F\u7684\uFF0C\u5B83\u7684\u7C7B\u578B\u662F\u5B89\u5168\u7684\u3002\u9996\u5148\uFF0C<code>f</code> \u53EF\u80FD\u4F1A\u4EE5\u4EFB\u4F55\u72D7\u7684\u54C1\u79CD\u6765\u4F5C\u4E3A\u53C2\u6570\u8C03\u7528\uFF0C\u800C\u6240\u6709\u7684\u72D7\u90FD\u662F\u52A8\u7269\u3002\u5176\u6B21\uFF0C\u5B83\u53EF\u80FD\u4F1A\u5047\u8BBE\u7ED3\u679C\u662F\u4E00\u6761\u72D7\uFF0C\u800C\u6240\u6709\u7684\u7070\u72D7\u90FD\u662F\u72D7\u3002</p><h2 id="\u5C55\u5F00\u8BB2\u8BB2" tabindex="-1"><a class="header-anchor" href="#\u5C55\u5F00\u8BB2\u8BB2" aria-hidden="true">#</a> \u5C55\u5F00\u8BB2\u8BB2\uFF1F</h2><p>\u5982\u4E0A\u6240\u8FF0\uFF0C\u5F97\u51FA\u7ED3\u8BBA\uFF1A</p><blockquote><p><code>(Animal \u2192 Greyhound) \u227C (Dog \u2192 Dog)</code></p></blockquote><p>\u8FD4\u56DE\u503C\u7C7B\u578B\u5F88\u5BB9\u6613\u7406\u89E3\uFF1A\u7070\u72D7\u662F\u72D7\u7684\u5B50\u7C7B\u578B\u3002\u4F46\u53C2\u6570\u7C7B\u578B\u5219\u662F\u76F8\u53CD\u7684\uFF1A\u52A8\u7269\u662F\u72D7\u7684<em>\u7236\u7C7B</em>\uFF01</p><p>\u7528\u5408\u9002\u7684\u672F\u8BED\u6765\u63CF\u8FF0\u8FD9\u4E2A\u5947\u602A\u7684\u8868\u73B0\uFF0C\u53EF\u4EE5\u8BF4\u5141\u8BB8\u4E00\u4E2A\u51FD\u6570\u7C7B\u578B\u4E2D\uFF0C\u8FD4\u56DE\u503C\u7C7B\u578B\u662F<em>\u534F\u53D8</em>\u7684\uFF0C\u800C\u53C2\u6570\u7C7B\u578B\u662F<em>\u9006\u53D8</em>\u7684\u3002\u8FD4\u56DE\u503C\u7C7B\u578B\u662F\u534F\u53D8\u7684\uFF0C\u610F\u601D\u662F <code>A \u227C B</code> \u5C31\u610F\u5473\u7740 <code>(T \u2192 A) \u227C (T \u2192 B)</code> \u3002\u53C2\u6570\u7C7B\u578B\u662F\u9006\u53D8\u7684\uFF0C\u610F\u601D\u662F <code>A \u227C B</code> \u5C31\u610F\u5473\u7740 <code>(B \u2192 T) \u227C (A \u2192 T)</code> \uFF08 <code>A</code> \u548C <code>B</code> \u7684\u4F4D\u7F6E\u98A0\u5012\u8FC7\u6765\u4E86\uFF09\u3002</p>',23),v=e("strong",null,"\u4E00\u4E2A\u6709\u8DA3\u7684\u73B0\u8C61",-1),w=o("\uFF1A\u5728 "),D=e("code",null,"TypeScript",-1),x=o(" \u4E2D\uFF0C "),G={href:"https://github.com/Microsoft/TypeScript/wiki/FAQ#why-are-function-parameters-bivariant",target:"_blank",rel:"noopener noreferrer"},B=o("\u53C2\u6570\u7C7B\u578B\u662F\u53CC\u5411\u534F\u53D8\u7684"),T=o(" \uFF0C\u4E5F\u5C31\u662F\u8BF4\u65E2\u662F\u534F\u53D8\u53C8\u662F\u9006\u53D8\u7684\uFF0C\u800C\u8FD9\u5E76\u4E0D\u5B89\u5168\u3002\u4F46\u662F\u73B0\u5728\u4F60\u53EF\u4EE5\u5728 "),L={href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-6.html",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"TypeScript 2.6",-1),C=o(" \u7248\u672C\u4E2D\u901A\u8FC7 "),q=e("code",null,"--strictFunctionTypes",-1),F=o(" \u6216 "),N=e("code",null,"--strict",-1),V=o(" \u6807\u8BB0\u6765\u4FEE\u590D\u8FD9\u4E2A\u95EE\u9898\u3002"),E=t('<h2 id="\u90A3\u5176\u4ED6\u7C7B\u578B\u5462" tabindex="-1"><a class="header-anchor" href="#\u90A3\u5176\u4ED6\u7C7B\u578B\u5462" aria-hidden="true">#</a> \u90A3\u5176\u4ED6\u7C7B\u578B\u5462\uFF1F</h2><p><strong>\u95EE\u9898</strong>\uFF1A<code>List&lt;Dog&gt;</code> \u80FD\u5426\u4E3A <code>List&lt;Animal&gt;</code> \u7684\u5B50\u7C7B\u578B\uFF1F</p><p>\u7B54\u6848\u6709\u70B9\u5FAE\u5999\u3002\u5982\u679C\u5217\u8868\u662F\u4E0D\u53EF\u53D8\u7684\uFF08immutable\uFF09\uFF0C\u90A3\u4E48\u7B54\u6848\u662F\u80AF\u5B9A\u7684\uFF0C\u56E0\u4E3A\u7C7B\u578B\u5F88\u5B89\u5168\u3002\u4F46\u662F\u5047\u5982\u5217\u8868\u662F\u53EF\u53D8\u7684\uFF0C\u90A3\u4E48\u7B54\u6848\u7EDD\u5BF9\u662F\u5426\u5B9A\u7684\uFF01</p><p>\u539F\u56E0\u662F\uFF0C\u5047\u8BBE\u6211\u9700\u8981\u4E00\u4E32 <code>List&lt;Animal&gt;</code> \u800C\u4F60\u4F20\u7ED9\u6211\u4E00\u4E32 <code>List&lt;Dog&gt;</code>\u3002\u7531\u4E8E\u6211\u8BA4\u4E3A\u6211\u62E5\u6709\u7684\u662F\u4E00\u4E32 <code>List&lt;Animal&gt;</code> \uFF0C\u6211\u53EF\u80FD\u4F1A\u5C1D\u8BD5\u5F80\u5217\u8868\u63D2\u5165\u4E00\u53EA <code>Cat</code>\u3002\u90A3\u4E48\u4F60\u7684 <code>List&lt;Dog&gt;</code> \u91CC\u9762\u5C31\u4F1A\u6709\u4E00\u53EA\u732B\uFF01\u7C7B\u578B\u7CFB\u7EDF\u4E0D\u5E94\u8BE5\u5141\u8BB8\u8FD9\u79CD\u60C5\u51B5\u53D1\u751F\u3002</p><p>\u603B\u7ED3\u4E00\u4E0B\uFF0C\u53EF\u4EE5\u5141\u8BB8\u4E0D\u53D8\u7684\u5217\u8868\uFF08immutable\uFF09\u5728\u5B83\u7684\u53C2\u6570\u7C7B\u578B\u4E0A\u662F\u534F\u53D8\u7684\uFF0C\u4F46\u662F\u5BF9\u4E8E\u53EF\u53D8\u7684\u5217\u8868\uFF08mutable\uFF09\uFF0C\u5176\u53C2\u6570\u7C7B\u578B\u5219\u5FC5\u987B\u662F\u4E0D\u53D8\u7684\uFF08invariant\uFF09\uFF0C\u65E2\u4E0D\u662F\u534F\u53D8\u4E5F\u4E0D\u662F\u9006\u53D8\u3002</p>',5),j=e("strong",null,"\u4E00\u4E2A\u6709\u8DA3\u7684\u73B0\u8C61",-1),I=o("\uFF1A\u5728 "),J=e("code",null,"Java",-1),M=o(" \u4E2D\uFF0C\u6570\u7EC4"),Q={href:"https://en.wikipedia.org/wiki/Covariance_and_contravariance_%28computer_science%29#Covariant_arrays_in_Java_and_C.23",target:"_blank",rel:"noopener noreferrer"},z=o("\u65E2\u662F\u53EF\u53D8\u7684\uFF0C\u53C8\u662F\u534F\u53D8\u7684"),H=o("\u3002\u5F53\u7136\uFF0C\u8FD9\u5E76\u4E0D\u5B89\u5168\u3002");function K(O,P){const c=n("ExternalLinkIcon");return r(),a(i,null,[_,e("blockquote",null,[e("p",null,[e("a",p,[h,d(c)])])]),e("p",null,[e("a",g,[u,d(c)]),m,f,A,b,y]),k,e("p",null,[v,w,D,x,e("a",G,[B,d(c)]),T,e("a",L,[S,d(c)]),C,q,F,N,V]),E,e("p",null,[j,I,J,M,e("a",Q,[z,d(c)]),H])],64)}var W=s(l,[["render",K]]);export{W as default};
