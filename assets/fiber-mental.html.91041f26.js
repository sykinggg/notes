import{r as c,o as p,c as t,b as n,d as e,F as r,e as s,a as o}from"./app.2f6bbef8.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=s("React\u6838\u5FC3\u56E2\u961F\u6210\u5458"),i={href:"https://github.com/sebmarkbage/",target:"_blank",rel:"noopener noreferrer"},k=s("Sebastian Markb\xE5ge"),m=s("\uFF08"),b=n("code",null,"React Hooks",-1),h=s("\u7684\u53D1\u660E\u8005\uFF09\u66FE\u8BF4\uFF1A\u5728"),g=n("code",null,"React",-1),f=s("\u4E2D\u505A\u7684\u5C31\u662F\u8DF5\u884C"),y=n("code",null,"\u4EE3\u6570\u6548\u5E94",-1),_=s("\uFF08Algebraic Effects\uFF09\u3002"),w=o(`<p>\u90A3\u4E48\uFF0C<code>\u4EE3\u6570\u6548\u5E94</code>\u662F\u4EC0\u4E48\u5462\uFF1F\u4ED6\u548C<code>React</code>\u6709\u4EC0\u4E48\u5173\u7CFB\u5462\u3002</p><h2 id="\u4EC0\u4E48\u662F\u4EE3\u6570\u6548\u5E94" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u4EE3\u6570\u6548\u5E94" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u4EE3\u6570\u6548\u5E94</h2><p><code>\u4EE3\u6570\u6548\u5E94</code>\u662F<code>\u51FD\u6570\u5F0F\u7F16\u7A0B</code>\u4E2D\u7684\u4E00\u4E2A\u6982\u5FF5\uFF0C\u7528\u4E8E\u5C06<code>\u526F\u4F5C\u7528</code>\u4ECE<code>\u51FD\u6570</code>\u8C03\u7528\u4E2D\u5206\u79BB\u3002</p><p>\u63A5\u4E0B\u6765\u7528<code>\u865A\u6784\u7684\u8BED\u6CD5</code>\u6765\u89E3\u91CA\u3002</p><p>\u5047\u8BBE\u6709\u4E00\u4E2A\u51FD\u6570<code>getTotalPicNum</code>\uFF0C\u4F20\u51652\u4E2A<code>\u7528\u6237\u540D\u79F0</code>\u540E\uFF0C\u5206\u522B\u67E5\u627E\u8BE5\u7528\u6237\u5728\u5E73\u53F0\u4FDD\u5B58\u7684\u56FE\u7247\u6570\u91CF\uFF0C\u6700\u540E\u5C06\u56FE\u7247\u6570\u91CF\u76F8\u52A0\u540E\u8FD4\u56DE\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getTotalPicNum</span><span class="token punctuation">(</span><span class="token parameter">user1<span class="token punctuation">,</span> user2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> num1 <span class="token operator">=</span> <span class="token function">getPicNum</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> num2 <span class="token operator">=</span> <span class="token function">getPicNum</span><span class="token punctuation">(</span>user2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> picNum1 <span class="token operator">+</span> picNum2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5728<code>getTotalPicNum</code>\u4E2D\uFF0C\u4E0D\u5173\u6CE8<code>getPicNum</code>\u7684\u5B9E\u73B0\uFF0C\u53EA\u5728\u4E4E\u201C\u83B7\u53D6\u5230\u4E24\u4E2A\u6570\u5B57\u540E\u5C06\u4ED6\u4EEC\u76F8\u52A0\u7684\u7ED3\u679C\u8FD4\u56DE\u201D\u8FD9\u4E00\u8FC7\u7A0B\u3002</p><p>\u63A5\u4E0B\u6765\u6765\u5B9E\u73B0<code>getPicNum</code>\u3002</p><p>&quot;\u7528\u6237\u5728\u5E73\u53F0\u4FDD\u5B58\u7684\u56FE\u7247\u6570\u91CF&quot;\u662F\u4FDD\u5B58\u5728\u670D\u52A1\u5668\u4E2D\u7684\u3002\u6240\u4EE5\uFF0C\u4E3A\u4E86\u83B7\u53D6\u8BE5\u503C\uFF0C\u9700\u8981\u53D1\u8D77\u5F02\u6B65\u8BF7\u6C42\u3002</p><p>\u4E3A\u4E86\u5C3D\u91CF\u4FDD\u6301<code>getTotalPicNum</code>\u7684\u8C03\u7528\u65B9\u5F0F\u4E0D\u53D8\uFF0C\u9996\u5148\u60F3\u5230\u4E86\u4F7F\u7528<code>async await</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getTotalPicNum</span><span class="token punctuation">(</span><span class="token parameter">user1<span class="token punctuation">,</span> user2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> num1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getPicNum</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> num2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getPicNum</span><span class="token punctuation">(</span>user2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> picNum1 <span class="token operator">+</span> picNum2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4F46\u662F\uFF0C<code>async await</code>\u662F\u6709<code>\u4F20\u67D3\u6027</code>\u7684 \u2014\u2014 \u5F53\u4E00\u4E2A\u51FD\u6570\u53D8\u4E3A<code>async</code>\u540E\uFF0C\u8FD9\u610F\u5473\u7740\u8C03\u7528\u4ED6\u7684\u51FD\u6570\u4E5F\u9700\u8981\u662F<code>async</code>\uFF0C\u8FD9\u7834\u574F\u4E86<code>getTotalPicNum</code>\u7684\u540C\u6B65\u7279\u6027\u3002</p><p>\u6709\u6CA1\u6709\u4EC0\u4E48\u529E\u6CD5\u80FD\u4FDD\u6301<code>getTotalPicNum</code>\u4FDD\u6301\u73B0\u6709\u8C03\u7528\u65B9\u5F0F\u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\u5B9E\u73B0\u5F02\u6B65\u8BF7\u6C42\u5462\uFF1F</p><p>\u6CA1\u6709\u3002\u4E0D\u8FC7\u53EF\u4EE5<code>\u865A\u6784</code>\u4E00\u4E2A\u3002</p><p>\u865A\u6784\u4E00\u4E2A\u7C7B\u4F3C<code>try...catch</code>\u7684\u8BED\u6CD5 \u2014\u2014 <code>try...handle</code>\u4E0E\u4E24\u4E2A\u64CD\u4F5C\u7B26<code>perform</code>\u3001<code>resume</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getPicNum</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> picNum <span class="token operator">=</span> perform name<span class="token punctuation">;</span>
  <span class="token keyword">return</span> picNum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">getTotalPicNum</span><span class="token punctuation">(</span><span class="token string">&#39;kaSong&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xiaoMing&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token function">handle</span> <span class="token punctuation">(</span><span class="token parameter">who</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>who<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;kaSong&#39;</span><span class="token operator">:</span>
      resume <span class="token keyword">with</span> <span class="token number">230</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;xiaoMing&#39;</span><span class="token operator">:</span>
      resume <span class="token keyword">with</span> <span class="token number">122</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      resume <span class="token keyword">with</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u5F53\u6267\u884C\u5230<code>getTotalPicNum</code>\u5185\u90E8\u7684<code>getPicNum</code>\u65B9\u6CD5\u65F6\uFF0C\u4F1A\u6267\u884C<code>perform name</code>\u3002</p><p>\u6B64\u65F6\u51FD\u6570\u8C03\u7528\u6808\u4F1A\u4ECE<code>getPicNum</code>\u65B9\u6CD5\u5185\u8DF3\u51FA\uFF0C\u88AB\u6700\u8FD1\u4E00\u4E2A<code>try...handle</code>\u6355\u83B7\u3002\u7C7B\u4F3C<code>throw Error</code>\u540E\u88AB\u6700\u8FD1\u4E00\u4E2A<code>try...catch</code>\u6355\u83B7\u3002</p><p>\u7C7B\u4F3C<code>throw Error</code>\u540E<code>Error</code>\u4F1A\u4F5C\u4E3A<code>catch</code>\u7684\u53C2\u6570\uFF0C<code>perform name</code>\u540E<code>name</code>\u4F1A\u4F5C\u4E3A<code>handle</code>\u7684\u53C2\u6570\u3002</p><p>\u4E0E<code>try...catch</code>\u6700\u5927\u7684\u4E0D\u540C\u5728\u4E8E\uFF1A\u5F53<code>Error</code>\u88AB<code>catch</code>\u6355\u83B7\u540E\uFF0C\u4E4B\u524D\u7684\u8C03\u7528\u6808\u5C31\u9500\u6BC1\u4E86\u3002\u800C<code>handle</code>\u6267\u884C<code>resume</code>\u540E\u4F1A\u56DE\u5230\u4E4B\u524D<code>perform</code>\u7684\u8C03\u7528\u6808\u3002</p><p>\u5BF9\u4E8E<code>case &#39;kaSong&#39;</code>\uFF0C\u6267\u884C\u5B8C<code>resume with 230;</code>\u540E\u8C03\u7528\u6808\u4F1A\u56DE\u5230<code>getPicNum</code>\uFF0C\u6B64\u65F6<code>picNum === 230</code></p><p>warning \u6CE8\u610F</p><p>\u518D\u6B21\u7533\u660E\uFF0C<code>try...handle</code>\u7684\u8BED\u6CD5\u662F\u865A\u6784\u7684\uFF0C\u53EA\u662F\u4E3A\u4E86\u6F14\u793A<code>\u4EE3\u6570\u6548\u5E94</code>\u7684\u601D\u60F3\u3002</p><p>\u603B\u7ED3\u4E00\u4E0B\uFF1A<code>\u4EE3\u6570\u6548\u5E94</code>\u80FD\u591F\u5C06<code>\u526F\u4F5C\u7528</code>\uFF08\u4F8B\u5B50\u4E2D\u4E3A<code>\u8BF7\u6C42\u56FE\u7247\u6570\u91CF</code>\uFF09\u4ECE\u51FD\u6570\u903B\u8F91\u4E2D\u5206\u79BB\uFF0C\u4F7F\u51FD\u6570\u5173\u6CE8\u70B9\u4FDD\u6301\u7EAF\u7CB9\u3002</p><p>\u5E76\u4E14\uFF0C\u4ECE\u4F8B\u5B50\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C<code>perform resume</code>\u4E0D\u9700\u8981\u533A\u5206\u540C\u6B65\u5F02\u6B65\u3002</p><h2 id="\u4EE3\u6570\u6548\u5E94\u5728react\u4E2D\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u6570\u6548\u5E94\u5728react\u4E2D\u7684\u5E94\u7528" aria-hidden="true">#</a> \u4EE3\u6570\u6548\u5E94\u5728React\u4E2D\u7684\u5E94\u7528</h2><p>\u90A3\u4E48<code>\u4EE3\u6570\u6548\u5E94</code>\u4E0E<code>React</code>\u6709\u4EC0\u4E48\u5173\u7CFB\u5462\uFF1F\u6700\u660E\u663E\u7684\u4F8B\u5B50\u5C31\u662F<code>Hooks</code>\u3002</p><p>\u5BF9\u4E8E\u7C7B\u4F3C<code>useState</code>\u3001<code>useReducer</code>\u3001<code>useRef</code>\u8FD9\u6837\u7684<code>Hook</code>\uFF0C\u4E0D\u9700\u8981\u5173\u6CE8<code>FunctionComponent</code>\u7684<code>state</code>\u5728<code>Hook</code>\u4E2D\u662F\u5982\u4F55\u4FDD\u5B58\u7684\uFF0C<code>React</code>\u4F1A\u4E3A\u5904\u7406\u3002</p><p>\u53EA\u9700\u8981\u5047\u8BBE<code>useState</code>\u8FD4\u56DE\u7684\u662F\u60F3\u8981\u7684<code>state</code>\uFF0C\u5E76\u7F16\u5199\u4E1A\u52A1\u903B\u8F91\u5C31\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> updateNum<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">updateNum</span><span class="token punctuation">(</span><span class="token parameter">num</span> <span class="token operator">=&gt;</span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>  
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,30),v=s("\u5982\u679C\u8FD9\u4E2A\u4F8B\u5B50\u8FD8\u4E0D\u591F\u660E\u663E\uFF0C\u53EF\u4EE5\u770B\u770B\u5B98\u65B9\u7684"),N={href:"https://codesandbox.io/s/frosty-hermann-bztrp?file=/src/index.js:152-160",target:"_blank",rel:"noopener noreferrer"},x=s("Suspense Demo"),P=o(`<p>\u5728<code>Demo</code>\u4E2D<code>ProfileDetails</code>\u7528\u4E8E\u5C55\u793A<code>\u7528\u6237\u540D\u79F0</code>\u3002\u800C<code>\u7528\u6237\u540D\u79F0</code>\u662F<code>\u5F02\u6B65\u8BF7\u6C42</code>\u7684\u3002</p><p>\u4F46\u662F<code>Demo</code>\u4E2D\u5B8C\u5168\u662F<code>\u540C\u6B65</code>\u7684\u5199\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ProfileDetails</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> resource<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u4EE3\u6570\u6548\u5E94\u4E0Egenerator" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u6570\u6548\u5E94\u4E0Egenerator" aria-hidden="true">#</a> \u4EE3\u6570\u6548\u5E94\u4E0EGenerator</h2><p>\u4ECE<code>React15</code>\u5230<code>React16</code>\uFF0C\u534F\u8C03\u5668\uFF08<code>Reconciler</code>\uFF09\u91CD\u6784\u7684\u4E00\u5927\u76EE\u7684\u662F\uFF1A\u5C06\u8001\u7684<code>\u540C\u6B65\u66F4\u65B0</code>\u7684\u67B6\u6784\u53D8\u4E3A<code>\u5F02\u6B65\u53EF\u4E2D\u65AD\u66F4\u65B0</code>\u3002</p><p><code>\u5F02\u6B65\u53EF\u4E2D\u65AD\u66F4\u65B0</code>\u53EF\u4EE5\u7406\u89E3\u4E3A\uFF1A<code>\u66F4\u65B0</code>\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u88AB\u6253\u65AD\uFF08\u6D4F\u89C8\u5668\u65F6\u95F4\u5206\u7247\u7528\u5C3D\u6216\u6709\u66F4\u9AD8\u4F18\u4EFB\u52A1\u63D2\u961F\uFF09\uFF0C\u5F53\u53EF\u4EE5\u7EE7\u7EED\u6267\u884C\u65F6\u6062\u590D\u4E4B\u524D\u6267\u884C\u7684\u4E2D\u95F4\u72B6\u6001\u3002</p><p>\u8FD9\u5C31\u662F<code>\u4EE3\u6570\u6548\u5E94</code>\u4E2D<code>try...handle</code>\u7684\u4F5C\u7528\u3002</p><p>\u5176\u5B9E\uFF0C\u6D4F\u89C8\u5668\u539F\u751F\u5C31\u652F\u6301\u7C7B\u4F3C\u7684\u5B9E\u73B0\uFF0C\u8FD9\u5C31\u662F<code>Generator</code>\u3002</p><p>\u4F46\u662F<code>Generator</code>\u7684\u4E00\u4E9B\u7F3A\u9677\u4F7F<code>React</code>\u56E2\u961F\u653E\u5F03\u4E86\u4ED6\uFF1A</p><ul><li><p>\u7C7B\u4F3C<code>async</code>\uFF0C<code>Generator</code>\u4E5F\u662F<code>\u4F20\u67D3\u6027</code>\u7684\uFF0C\u4F7F\u7528\u4E86<code>Generator</code>\u5219\u4E0A\u4E0B\u6587\u7684\u5176\u4ED6\u51FD\u6570\u4E5F\u9700\u8981\u4F5C\u51FA\u6539\u53D8\u3002\u8FD9\u6837\u5FC3\u667A\u8D1F\u62C5\u6BD4\u8F83\u91CD\u3002</p></li><li><p><code>Generator</code>\u6267\u884C\u7684<code>\u4E2D\u95F4\u72B6\u6001</code>\u662F\u4E0A\u4E0B\u6587\u5173\u8054\u7684\u3002</p></li></ul><p>\u8003\u8651\u5982\u4E0B\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">doWork</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">,</span> <span class="token constant">C</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token function">doExpensiveWorkA</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token function">doExpensiveWorkB</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> z <span class="token operator">=</span> y <span class="token operator">+</span> <span class="token function">doExpensiveWorkC</span><span class="token punctuation">(</span><span class="token constant">C</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> z<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6BCF\u5F53\u6D4F\u89C8\u5668\u6709\u7A7A\u95F2\u65F6\u95F4\u90FD\u4F1A\u4F9D\u6B21\u6267\u884C\u5176\u4E2D\u4E00\u4E2A<code>doExpensiveWork</code>\uFF0C\u5F53\u65F6\u95F4\u7528\u5C3D\u5219\u4F1A\u4E2D\u65AD\uFF0C\u5F53\u518D\u6B21\u6062\u590D\u65F6\u4F1A\u4ECE\u4E2D\u65AD\u4F4D\u7F6E\u7EE7\u7EED\u6267\u884C\u3002</p><p>\u53EA\u8003\u8651\u201C\u5355\u4E00\u4F18\u5148\u7EA7\u4EFB\u52A1\u7684\u4E2D\u65AD\u4E0E\u7EE7\u7EED\u201D\u60C5\u51B5\u4E0B<code>Generator</code>\u53EF\u4EE5\u5F88\u597D\u7684\u5B9E\u73B0<code>\u5F02\u6B65\u53EF\u4E2D\u65AD\u66F4\u65B0</code>\u3002</p><p>\u4F46\u662F\u5F53\u8003\u8651\u201C\u9AD8\u4F18\u5148\u7EA7\u4EFB\u52A1\u63D2\u961F\u201D\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u6B64\u65F6\u5DF2\u7ECF\u5B8C\u6210<code>doExpensiveWorkA</code>\u4E0E<code>doExpensiveWorkB</code>\u8BA1\u7B97\u51FA<code>x</code>\u4E0E<code>y</code>\u3002</p><p>\u6B64\u65F6<code>B</code>\u7EC4\u4EF6\u63A5\u6536\u5230\u4E00\u4E2A<code>\u9AD8\u4F18\u66F4\u65B0</code>\uFF0C\u7531\u4E8E<code>Generator</code>\u6267\u884C\u7684<code>\u4E2D\u95F4\u72B6\u6001</code>\u662F\u4E0A\u4E0B\u6587\u5173\u8054\u7684\uFF0C\u6240\u4EE5\u8BA1\u7B97<code>y</code>\u65F6\u65E0\u6CD5\u590D\u7528\u4E4B\u524D\u5DF2\u7ECF\u8BA1\u7B97\u51FA\u7684<code>x</code>\uFF0C\u9700\u8981\u91CD\u65B0\u8BA1\u7B97\u3002</p><p>\u5982\u679C\u901A\u8FC7<code>\u5168\u5C40\u53D8\u91CF</code>\u4FDD\u5B58\u4E4B\u524D\u6267\u884C\u7684<code>\u4E2D\u95F4\u72B6\u6001</code>\uFF0C\u53C8\u4F1A\u5F15\u5165\u65B0\u7684\u590D\u6742\u5EA6\u3002</p>`,17),j=s("\u66F4\u8BE6\u7EC6\u7684\u89E3\u91CA\u53EF\u4EE5\u53C2\u8003"),R={href:"https://github.com/facebook/react/issues/7942#issuecomment-254987818",target:"_blank",rel:"noopener noreferrer"},E=s("\u8FD9\u4E2Aissue"),G=o('<p>\u57FA\u4E8E\u8FD9\u4E9B\u539F\u56E0\uFF0C<code>React</code>\u6CA1\u6709\u91C7\u7528<code>Generator</code>\u5B9E\u73B0<code>\u534F\u8C03\u5668</code>\u3002</p><h2 id="\u4EE3\u6570\u6548\u5E94\u4E0Efiber" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u6570\u6548\u5E94\u4E0Efiber" aria-hidden="true">#</a> \u4EE3\u6570\u6548\u5E94\u4E0EFiber</h2><p><code>Fiber</code>\u5E76\u4E0D\u662F\u8BA1\u7B97\u673A\u672F\u8BED\u4E2D\u7684\u65B0\u540D\u8BCD\uFF0C\u4ED6\u7684\u4E2D\u6587\u7FFB\u8BD1\u53EB\u505A<code>\u7EA4\u7A0B</code>\uFF0C\u4E0E\u8FDB\u7A0B\uFF08Process\uFF09\u3001\u7EBF\u7A0B\uFF08Thread\uFF09\u3001\u534F\u7A0B\uFF08Coroutine\uFF09\u540C\u4E3A\u7A0B\u5E8F\u6267\u884C\u8FC7\u7A0B\u3002</p><p>\u5728\u5F88\u591A\u6587\u7AE0\u4E2D\u5C06<code>\u7EA4\u7A0B</code>\u7406\u89E3\u4E3A<code>\u534F\u7A0B</code>\u7684\u4E00\u79CD\u5B9E\u73B0\u3002\u5728<code>JS</code>\u4E2D\uFF0C<code>\u534F\u7A0B</code>\u7684\u5B9E\u73B0\u4FBF\u662F<code>Generator</code>\u3002</p><p>\u6240\u4EE5\uFF0C\u53EF\u4EE5\u5C06<code>\u7EA4\u7A0B</code>(Fiber)\u3001<code>\u534F\u7A0B</code>(Generator)\u7406\u89E3\u4E3A<code>\u4EE3\u6570\u6548\u5E94</code>\u601D\u60F3\u5728<code>JS</code>\u4E2D\u7684\u4F53\u73B0\u3002</p><p><code>React Fiber</code>\u53EF\u4EE5\u7406\u89E3\u4E3A\uFF1A</p><p><code>React</code>\u5185\u90E8\u5B9E\u73B0\u7684\u4E00\u5957\u72B6\u6001\u66F4\u65B0\u673A\u5236\u3002\u652F\u6301\u4EFB\u52A1\u4E0D\u540C<code>\u4F18\u5148\u7EA7</code>\uFF0C\u53EF\u4E2D\u65AD\u4E0E\u6062\u590D\uFF0C\u5E76\u4E14\u6062\u590D\u540E\u53EF\u4EE5\u590D\u7528\u4E4B\u524D\u7684<code>\u4E2D\u95F4\u72B6\u6001</code>\u3002</p><p>\u5176\u4E2D\u6BCF\u4E2A\u4EFB\u52A1\u66F4\u65B0\u5355\u5143\u4E3A<code>React Element</code>\u5BF9\u5E94\u7684<code>Fiber\u8282\u70B9</code>\u3002</p><p>\u4E0B\u4E00\u8282\uFF0C\u5177\u4F53\u8BB2\u89E3<code>Fiber\u67B6\u6784</code>\u7684\u5B9E\u73B0\u3002</p>',9);function S(T,F){const a=c("ExternalLinkIcon");return p(),t(r,null,[n("p",null,[u,n("a",i,[k,e(a)]),m,b,h,g,f,y,_]),w,n("p",null,[v,n("a",N,[x,e(a)])]),P,n("blockquote",null,[n("p",null,[j,n("a",R,[E,e(a)])])]),G],64)}var W=l(d,[["render",S]]);export{W as default};
