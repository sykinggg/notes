import{_ as n,a as s}from"./app.41ff10d5.js";const a={},p=s(`<h1 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> readonly</h1><p>TypeScript \u7C7B\u578B\u7CFB\u7EDF\u5141\u8BB8\u4F60\u5728\u4E00\u4E2A\u63A5\u53E3\u91CC\u4F7F\u7528 <code>readonly</code> \u6765\u6807\u8BB0\u5C5E\u6027\u3002\u5B83\u80FD\u8BA9\u4F60\u4EE5\u4E00\u79CD\u66F4\u5B89\u5168\u7684\u65B9\u5F0F\u5DE5\u4F5C\uFF08\u4E0D\u53EF\u9884\u671F\u7684\u6539\u53D8\u662F\u5F88\u7CDF\u7CD5\u7684\uFF09\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>config<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">readonly</span> bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token keyword">readonly</span> bas<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ..</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> bas<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u73B0\u5728\u4F60\u80FD\u591F\u786E\u4FDD &#39;config&#39; \u4E0D\u80FD\u591F\u88AB\u6539\u53D8\u4E86</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5728 <code>interface</code> \u548C <code>type</code> \u91CC\u4F7F\u7528 <code>readonly</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Foo</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">readonly</span> bas<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u521D\u59CB\u5316</span>
<span class="token keyword">const</span> foo<span class="token operator">:</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> bas<span class="token operator">:</span> <span class="token number">456</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E0D\u80FD\u88AB\u6539\u53D8</span>
foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span> <span class="token comment">// Error: foo.bar \u4E3A\u4EC5\u8BFB\u5C5E\u6027</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4F60\u4E5F\u80FD\u6307\u5B9A\u4E00\u4E2A\u7C7B\u7684\u5C5E\u6027\u4E3A\u53EA\u8BFB\uFF0C\u7136\u540E\u5728\u58F0\u660E\u65F6\u6216\u8005\u6784\u9020\u51FD\u6570\u4E2D\u521D\u59CB\u5316\u5B83\u4EEC\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> bar <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
  <span class="token keyword">readonly</span> baz<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>baz <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="readonly-1" tabindex="-1"><a class="header-anchor" href="#readonly-1" aria-hidden="true">#</a> Readonly</h2><p>\u8FD9\u6709\u4E00\u4E2A <code>Readonly</code> \u7684\u6620\u5C04\u7C7B\u578B\uFF0C\u5B83\u63A5\u6536\u4E00\u4E2A\u6CDB\u578B <code>T</code>\uFF0C\u7528\u6765\u628A\u5B83\u7684\u6240\u6709\u5C5E\u6027\u6807\u8BB0\u4E3A\u53EA\u8BFB\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Foo</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  bas<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">FooReadonly</span> <span class="token operator">=</span> Readonly<span class="token operator">&lt;</span>Foo<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> foo<span class="token operator">:</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> bas<span class="token operator">:</span> <span class="token number">456</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fooReadonly<span class="token operator">:</span> FooReadonly <span class="token operator">=</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> bas<span class="token operator">:</span> <span class="token number">456</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
fooReadonly<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span> <span class="token comment">// Error: bar \u5C5E\u6027\u53EA\u8BFB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u5176\u4ED6\u7684\u4F7F\u7528\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u7684\u4F7F\u7528\u7528\u4F8B" aria-hidden="true">#</a> \u5176\u4ED6\u7684\u4F7F\u7528\u7528\u4F8B</h2><h3 id="reactjs" tabindex="-1"><a class="header-anchor" href="#reactjs" aria-hidden="true">#</a> ReactJS</h3><p><code>ReactJS</code> \u662F\u4E00\u4E2A\u559C\u6B22\u7528\u4E0D\u53D8\u6570\u636E\u7684\u5E93\uFF0C\u4F60\u53EF\u4EE5\u6807\u8BB0\u4F60\u7684 <code>Props</code> \u548C <code>State</code> \u4E3A\u4E0D\u53EF\u53D8\u6570\u636E\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Something</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component<span class="token operator">&lt;</span>Props<span class="token punctuation">,</span> State<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4F60\u53EF\u4EE5\u653E\u5FC3\uFF0C\u6CA1\u6709\u4EBA\u4F1A\u50CF\u4E0B\u9762\u8FD9\u4E48\u505A</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// Error: props \u662F\u4E0D\u53EF\u53D8\u7684</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>baz <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span> <span class="token comment">// Error: \u4F60\u5E94\u8BE5\u4F7F\u7528 this.setState()</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u7136\u800C\uFF0C\u4F60\u5E76\u6CA1\u6709\u5FC5\u8981\u8FD9\u4E48\u505A\uFF0C<code>React</code> \u7684\u58F0\u660E\u6587\u4EF6\u5DF2\u7ECF\u6807\u8BB0\u8FD9\u4E9B\u4E3A <code>readonly</code>\uFF08\u901A\u8FC7\u4F20\u5165\u6CDB\u578B\u53C2\u6570\u81F3\u4E00\u4E2A\u5185\u90E8\u5305\u88C5\uFF0C\u6765\u628A\u6BCF\u4E2A\u5C5E\u6027\u6807\u8BB0\u4E3A <code>readonly</code>\uFF0C\u5982\u4E0A\u4F8B\u5B50\u6240\u793A\uFF09\uFF0C</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Something</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component<span class="token operator">&lt;</span><span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> baz<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// Error: props \u662F\u4E0D\u53EF\u53D8\u7684</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>baz <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span> <span class="token comment">// Error: \u4F60\u5E94\u8BE5\u4F7F\u7528 this.setState()</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u7EDD\u5BF9\u7684\u4E0D\u53EF\u53D8" tabindex="-1"><a class="header-anchor" href="#\u7EDD\u5BF9\u7684\u4E0D\u53EF\u53D8" aria-hidden="true">#</a> \u7EDD\u5BF9\u7684\u4E0D\u53EF\u53D8</h3><p>\u4F60\u751A\u81F3\u53EF\u4EE5\u628A\u7D22\u5F15\u7B7E\u540D\u6807\u8BB0\u4E3A\u53EA\u8BFB\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> <span class="token punctuation">[</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528</span>

<span class="token keyword">const</span> foo<span class="token operator">:</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token number">345</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok\uFF08\u8BFB\u53D6\uFF09</span>
foo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span> <span class="token comment">// Error: \u5C5E\u6027\u53EA\u8BFB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5982\u679C\u4F60\u60F3\u4EE5\u4E0D\u53D8\u7684\u65B9\u5F0F\u4F7F\u7528\u539F\u751F JavaScript \u6570\u7EC4\uFF0C\u53EF\u4EE5\u4F7F\u7528 TypeScript \u63D0\u4F9B\u7684 <code>ReadonlyArray&lt;T&gt;</code> \u63A5\u53E3\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
foo<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: ReadonlyArray \u4E0A\u4E0D\u5B58\u5728 \`push\`\uFF0C\u56E0\u4E3A\u4ED6\u4F1A\u6539\u53D8\u6570\u7EC4</span>
foo <span class="token operator">=</span> foo<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok, \u521B\u5EFA\u4E86\u4E00\u4E2A\u590D\u5236</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u81EA\u52A8\u63A8\u65AD" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u63A8\u65AD" aria-hidden="true">#</a> \u81EA\u52A8\u63A8\u65AD</h3><p>\u5728\u4E00\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u7F16\u8BD1\u5668\u80FD\u628A\u4E00\u4E9B\u7279\u5B9A\u7684\u5C5E\u6027\u63A8\u65AD\u4E3A <code>readonly</code>\uFF0C\u4F8B\u5982\u5728\u4E00\u4E2A <code>class</code> \u4E2D\uFF0C\u5982\u679C\u4F60\u6709\u4E00\u4E2A\u53EA\u542B\u6709 <code>getter</code> \u4F46\u662F\u6CA1\u6709 <code>setter</code> \u7684\u5C5E\u6027\uFF0C\u4ED6\u80FD\u88AB\u63A8\u65AD\u4E3A\u53EA\u8BFB\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">;</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;Doe&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">get</span> <span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>fullName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// John Doe</span>
person<span class="token punctuation">.</span>fullName <span class="token operator">=</span> <span class="token string">&#39;Dear Reader&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error, fullName \u53EA\u8BFB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u4E0E-const-\u7684\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u4E0E-const-\u7684\u4E0D\u540C" aria-hidden="true">#</a> \u4E0E <code>const</code> \u7684\u4E0D\u540C</h2><p><code>const</code></p><ul><li>\u7528\u4E8E\u53D8\u91CF\uFF1B</li><li>\u53D8\u91CF\u4E0D\u80FD\u91CD\u65B0\u8D4B\u503C\u7ED9\u5176\u4ED6\u4EFB\u4F55\u4E8B\u7269\u3002</li></ul><p><code>readonly</code></p><ul><li>\u7528\u4E8E\u5C5E\u6027\uFF1B</li><li>\u7528\u4E8E\u522B\u540D\uFF0C\u53EF\u4EE5\u4FEE\u6539\u5C5E\u6027\uFF1B</li></ul><p>\u7B80\u5355\u7684\u4F8B\u5B50 1\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// \u53D8\u91CF</span>
<span class="token keyword">let</span> bar<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// \u5C5E\u6027</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7B80\u5355\u7684\u4F8B\u5B50 2\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token number">123</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">iMutateFoo</span><span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">iMutateFoo</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>readonly</code> \u80FD\u786E\u4FDD\u201C\u6211\u201D\u4E0D\u80FD\u4FEE\u6539\u5C5E\u6027\uFF0C\u4F46\u662F\u5F53\u4F60\u628A\u8FD9\u4E2A\u5C5E\u6027\u4EA4\u7ED9\u5176\u4ED6\u5E76\u6CA1\u6709\u8FD9\u79CD\u4FDD\u8BC1\u7684\u4F7F\u7528\u8005\uFF08\u5141\u8BB8\u51FA\u4E8E\u7C7B\u578B\u517C\u5BB9\u6027\u7684\u539F\u56E0\uFF09\uFF0C\u4ED6\u4EEC\u80FD\u6539\u53D8\u5B83\u3002\u5F53\u7136\uFF0C\u5982\u679C <code>iMutateFoo</code> \u660E\u786E\u7684\u8868\u793A\uFF0C\u4ED6\u4EEC\u7684\u53C2\u6570\u4E0D\u53EF\u4FEE\u6539\uFF0C\u90A3\u4E48\u7F16\u8BD1\u5668\u4F1A\u53D1\u51FA\u9519\u8BEF\u8B66\u544A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> foo<span class="token operator">:</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token number">123</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">iTakeFoo</span><span class="token punctuation">(</span>foo<span class="token operator">:</span> Foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span> <span class="token comment">// Error: bar \u5C5E\u6027\u53EA\u8BFB</span>
<span class="token punctuation">}</span>

<span class="token function">iTakeFoo</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,35);function e(o,t){return p}var l=n(a,[["render",e],["__file","readonly.html.vue"]]);export{l as default};
