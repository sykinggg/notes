import{_ as n,a as s}from"./app.2fe08138.js";const a={},p=s(`<h1 id="thistype" tabindex="-1"><a class="header-anchor" href="#thistype" aria-hidden="true">#</a> ThisType</h1><p>\u901A\u8FC7 <code>ThisType</code> \u53EF\u4EE5\u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u952E\u5165 <code>this</code>\uFF0C\u5E76\u63D0\u4F9B\u901A\u8FC7\u4E0A\u4E0B\u6587\u7C7B\u578B\u63A7\u5236 <code>this</code> \u7C7B\u578B\u7684\u4FBF\u6377\u65B9\u5F0F\u3002\u5B83\u53EA\u6709\u5728 <code>--noImplicitThis</code> \u7684\u9009\u9879\u4E0B\u624D\u6709\u6548\u3002</p><p>\u73B0\u5728\uFF0C\u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u65B9\u6CD5\u4E2D\u7684 <code>this</code> \u7C7B\u578B\uFF0C\u5C06\u7531\u4EE5\u4E0B\u51B3\u5B9A\uFF1A</p><ul><li>\u5982\u679C\u8FD9\u4E2A\u65B9\u6CD5\u663E\u5F0F\u6307\u5B9A\u4E86 <code>this</code> \u53C2\u6570\uFF0C\u90A3\u4E48 <code>this</code> \u5177\u6709\u8BE5\u53C2\u6570\u7684\u7C7B\u578B\u3002\uFF08\u4E0B\u4F8B\u5B50\u4E2D <code>bar</code>\uFF09</li><li>\u5426\u5219\uFF0C\u5982\u679C\u65B9\u6CD5\u7531\u5E26 <code>this</code> \u53C2\u6570\u7684\u7B7E\u540D\u8FDB\u884C\u4E0A\u4E0B\u6587\u952E\u5165\uFF0C\u90A3\u4E48 <code>this</code> \u5177\u6709\u8BE5\u53C2\u6570\u7684\u7C7B\u578B\u3002\uFF08\u4E0B\u4F8B\u5B50\u4E2D <code>foo</code>\uFF09</li><li>\u5426\u5219\uFF0C\u5982\u679C <code>--noImplicitThis</code> \u9009\u9879\u5DF2\u7ECF\u542F\u7528\uFF0C\u5E76\u4E14\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u5305\u542B\u7531 <code>ThisType&lt;T&gt;</code> \u952E\u5165\u7684\u4E0A\u4E0B\u6587\u7C7B\u578B\uFF0C\u90A3\u4E48 <code>this</code> \u7684\u7C7B\u578B\u4E3A <code>T</code>\u3002</li><li>\u5426\u5219\uFF0C\u5982\u679C <code>--noImplicitThis</code> \u9009\u9879\u5DF2\u7ECF\u542F\u7528\uFF0C\u5E76\u4E14\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u4E0D\u5305\u542B\u7531 <code>ThisType&lt;T&gt;</code> \u952E\u5165\u7684\u4E0A\u4E0B\u6587\u7C7B\u578B\uFF0C\u90A3\u4E48 <code>this</code> \u7684\u7C7B\u578B\u4E3A\u8BE5\u4E0A\u4E0B\u6587\u7C7B\u578B\u3002</li><li>\u5426\u5219\uFF0C\u5982\u679C <code>--noImplicitThis</code> \u9009\u9879\u5DF2\u7ECF\u542F\u7528\uFF0C<code>this</code> \u5177\u6709\u8BE5\u5BF9\u8C61\u5B57\u9762\u91CF\u7684\u7C7B\u578B\u3002</li><li>\u5426\u5219\uFF0C<code>this</code> \u7684\u7C7B\u578B\u4E3A <code>any</code>\u3002</li></ul><p>\u4E00\u4E9B\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Compile with --noImplicitThis</span>

<span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">moveBy</span><span class="token punctuation">(</span>dx<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> dy<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> p<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token function">moveBy</span><span class="token punctuation">(</span>dx<span class="token punctuation">,</span> dy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+=</span> dx<span class="token punctuation">;</span> <span class="token comment">// this has type Point</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+=</span> dy<span class="token punctuation">;</span> <span class="token comment">// this has type Point</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  <span class="token function">f</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// { x: string, f(n: number): void }</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// { message: string }</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u7C7B\u4F3C\u7684\u65B9\u5F0F\uFF0C\u5F53\u4F7F\u7528 <code>--noImplicitThis</code> \u65F6\uFF0C\u51FD\u6570\u8868\u8FBE\u5F0F\u8D4B\u503C\u7ED9 <code>obj.xxx</code> \u6216\u8005 <code>obj[xxx]</code> \u7684\u76EE\u6807\u65F6\uFF0C\u5728\u51FD\u6570\u4E2D <code>this</code> \u7684\u7C7B\u578B\u5C06\u4F1A\u662F <code>obj</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Compile with --noImplicitThis</span>

obj<span class="token punctuation">.</span><span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">-</span> n<span class="token punctuation">;</span> <span class="token comment">// &#39;this&#39; has same type as &#39;obj&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">[</span><span class="token string">&#39;f&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">-</span> n<span class="token punctuation">;</span> <span class="token comment">// &#39;this&#39; has same type as &#39;obj&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u901A\u8FC7 API \u8F6C\u6362\u53C2\u6570\u7684\u5F62\u5F0F\u6765\u751F\u6210 <code>this</code> \u7684\u503C\u7684\u60C5\u666F\u4E0B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 <code>ThisType&lt;T&gt;</code> \u6807\u8BB0\u63A5\u53E3\uFF0C\u53EF\u7528\u4E8E\u5728\u4E0A\u4E0B\u6587\u4E2D\u8868\u660E\u8F6C\u6362\u540E\u7684\u7C7B\u578B\u3002\u5C24\u5176\u662F\u5F53\u5B57\u9762\u91CF\u4E2D\u7684\u4E0A\u4E0B\u6587\u7C7B\u578B\u4E3A <code>ThisType&lt;T&gt;</code> \u6216\u8005\u662F\u5305\u542B <code>ThisType&lt;T&gt;</code> \u7684\u4EA4\u96C6\u65F6\uFF0C\u663E\u5F97\u5C24\u4E3A\u6709\u6548\uFF0C\u5BF9\u8C61\u5B57\u9762\u91CF\u65B9\u6CD5\u4E2D <code>this</code> \u7684\u7C7B\u578B\u5373\u4E3A <code>T</code>\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Compile with --noImplicitThis</span>

<span class="token keyword">type</span> <span class="token class-name">ObjectDescriptor<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token punctuation">,</span> <span class="token constant">M</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  data<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">D</span><span class="token punctuation">;</span>
  methods<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">M</span> <span class="token operator">&amp;</span> ThisType<span class="token operator">&lt;</span><span class="token constant">D</span> <span class="token operator">&amp;</span> <span class="token constant">M</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// Type of &#39;this&#39; in methods is D &amp; M</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">makeObject</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">D</span><span class="token punctuation">,</span> <span class="token constant">M</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>desc<span class="token operator">:</span> ObjectDescriptor<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token punctuation">,</span> <span class="token constant">M</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">D</span> <span class="token operator">&amp;</span> <span class="token constant">M</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data<span class="token operator">:</span> object <span class="token operator">=</span> desc<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> methods<span class="token operator">:</span> object <span class="token operator">=</span> desc<span class="token punctuation">.</span>methods <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>data<span class="token punctuation">,</span> <span class="token operator">...</span>methods <span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token constant">D</span> <span class="token operator">&amp;</span> <span class="token constant">M</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">makeObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">moveBy</span><span class="token punctuation">(</span>dx<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> dy<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+=</span> dx<span class="token punctuation">;</span> <span class="token comment">// Strongly typed this</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+=</span> dy<span class="token punctuation">;</span> <span class="token comment">// Strongly typed this</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">moveBy</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C<code>makeObject</code> \u53C2\u6570\u4E2D\u7684\u5BF9\u8C61\u5C5E\u6027 <code>methods</code> \u5177\u6709\u5305\u542B <code>ThisType&lt;D &amp; M&gt;</code> \u7684\u4E0A\u4E0B\u6587\u7C7B\u578B\uFF0C\u56E0\u6B64\u5BF9\u8C61\u4E2D <code>methods</code> \u5C5E\u6027\u4E0B\u7684\u65B9\u6CD5\u7684 <code>this</code> \u7C7B\u578B\u4E3A <code>{ x: number, y: number } &amp; { moveBy(dx: number, dy: number): number }</code>\u3002</p><p><code>ThisType&lt;T&gt;</code> \u7684\u63A5\u53E3\uFF0C\u5728 <code>lib.d.ts</code> \u53EA\u662F\u88AB\u58F0\u660E\u4E3A\u7A7A\u7684\u63A5\u53E3\uFF0C\u9664\u4E86\u53EF\u4EE5\u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u4E0A\u4E0B\u6587\u4E2D\u53EF\u4EE5\u88AB\u8BC6\u522B\u4EE5\u5916\uFF0C\u8BE5\u63A5\u53E3\u7684\u4F5C\u7528\u7B49\u540C\u4E8E\u4EFB\u610F\u7A7A\u63A5\u53E3\u3002</p>`,12);function t(e,o){return p}var l=n(a,[["render",t],["__file","thisType.html.vue"]]);export{l as default};
