import{_ as n,a as s}from"./app.41ff10d5.js";const a={},p=s(`<h1 id="\u4EE3\u7406\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406\u6A21\u5F0F" aria-hidden="true">#</a> \u4EE3\u7406\u6A21\u5F0F</h1><h2 id="\u4EE3\u7406\u6A21\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406\u6A21\u5F0F-1" aria-hidden="true">#</a> \u4EE3\u7406\u6A21\u5F0F</h2><blockquote><p>\u5728\u9700\u8981\u5728\u4E00\u4E2A\u5BF9\u8C61\u540E\u591A\u6B21\u8FDB\u884C\u8BBF\u95EE\u63A7\u5236\u8BBF\u95EE\u548C\u4E0A\u4E0B\u6587\uFF0C\u4EE3\u7406\u6A21\u5F0F\u662F\u975E\u5E38\u6709\u7528\u5904\u7684\u3002</p><p>\u5F53\u5B9E\u4F8B\u5316\u4E00\u4E2A\u5BF9\u8C61\u5F00\u9500\u5F88\u5927\u7684\u65F6\u5019\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9\u63A7\u5236\u6210\u672C\uFF0C\u63D0\u4F9B\u66F4\u9AD8\u7EA7\u7684\u65B9\u5F0F\u53BB\u5173\u8054\u548C\u4FEE\u6539\u5BF9\u8C61\uFF0C\u5C31\u662F\u5728\u4E0A\u4E0B\u6587\u4E2D\u8FD0\u884C\u4E00\u4E2A\u7279\u522B\u7684\u65B9\u6CD5\u3002</p><p>\u5728jQuery\u6838\u5FC3\u4E2D\uFF0C\u4E00\u4E2A<code>jQUery.proxy()</code>\u65B9\u6CD5\u5728\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\u7684\u8F93\u5165\u548C\u8FD4\u56DE\u4E00\u4E2A\u4E00\u76F4\u5177\u6709\u7279\u6B8A\u4E0A\u4E0B\u6587\u7684\u65B0\u7684\u5B9E\u4F53\u65F6\u5B58\u5728\u3002\u8FD9\u786E\u4FDD\u4E86\u5B83\u5728\u51FD\u6570\u4E2D\u7684\u503C\u65F6\u6240\u671F\u5F85\u7684\u7684\u503C\u3002</p></blockquote><p>\u4E00\u4E2A\u4F7F\u7528\u8BE5\u6A21\u5F0F\u7684\u4F8B\u5B50\uFF0C\u5728\u70B9\u51FB\u4E8B\u4EF6\u64CD\u4F5C\u65F6\u5229\u7528\u4E86\u5B9A\u65F6\u5668\u3002\u8BBE\u60F3\u6211\u7528\u4E0B\u9762\u7684\u64CD\u4F5C\u4F18\u5148\u4E8E\u4EFB\u4F55\u6DFB\u52A0\u7684\u5B9A\u65F6\u5668\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">&quot;button&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5728\u8FD9\u4E2A\u51FD\u6570\u4E2D\uFF0C&#39;this&#39;\u4EE3\u8868\u4E86\u88AB\u5F53\u524D\u88AB\u70B9\u51FB\u7684\u90A3\u4E2A\u5143\u7D20\u5BF9\u8C61</span>
  <span class="token function">$</span><span class="token punctuation">(</span> <span class="token keyword">this</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span> <span class="token string">&quot;active&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5982\u679C\u60F3\u8981\u5728<code>addClass</code>\u64CD\u4F5C\u4E4B\u524D\u6DFB\u52A0\u4E00\u4E2A\u5EF6\u8FDF\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>setTiemeout()</code>\u505A\u5230\u3002\u7136\u800C\u4E0D\u5E78\u7684\u662F\u8FD9\u4E48\u64CD\u4F5C\u65F6\u4F1A\u6709\u4E00\u4E2A\u5C0F\u95EE\u9898\uFF1A\u65E0\u8BBA\u8FD9\u4E2A\u51FD\u6570\u6267\u884C\u4E86\u4EC0\u4E48\u5728<code>setTimeout()</code>\u4E2D\u90FD\u4F1A\u6709\u4E2A\u4E00\u4E2A\u4E0D\u540C\u7684\u503C\u5728\u90A3\u4E2A\u51FD\u6570\u4E2D\u3002\u800C\u8FD9\u4E2A\u503C\u5C06\u4F1A\u5173\u8054window\u5BF9\u8C61\u66FF\u4EE3\u6240\u671F\u671B\u7684\u88AB\u89E6\u53D1\u7684\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">&quot;button&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;this&quot; \u65E0\u6CD5\u5173\u8054\u5230\u70B9\u51FB\u7684\u5143\u7D20</span>
    <span class="token comment">// \u800C\u662F\u5173\u8054\u4E86window\u5BF9\u8C61</span>
    <span class="token function">$</span><span class="token punctuation">(</span> <span class="token keyword">this</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span> <span class="token string">&quot;active&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E3A\u89E3\u51B3\u8FD9\u7C7B\u95EE\u9898\uFF0C\u4F7F\u7528<code>jQuery.proxy()</code>\u65B9\u6CD5\u6765\u5B9E\u73B0\u4E00\u79CD\u4EE3\u7406\u6A21\u5F0F\u3002\u901A\u8FC7\u8C03\u7528\u5B83\u5728\u8FD9\u4E2A\u51FD\u6570\u4E2D\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u51FD\u6570\u548C\u60F3\u8981\u5206\u914D\u7ED9\u5B83\u7684<code>this</code>\uFF0C\u5C06\u4F1A\u5F97\u5230\u4E00\u4E2A\u5305\u542B\u4E86\u6240\u671F\u671B\u7684\u4E0A\u4E0B\u6587\u4E2D\u7684\u503C\u3002\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">&quot;button&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span> $<span class="token punctuation">.</span><span class="token function">proxy</span><span class="token punctuation">(</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// &quot;this&quot; \u73B0\u5728\u5173\u8054\u4E86\u60F3\u8981\u7684\u5143\u7D20</span>
        <span class="token function">$</span><span class="token punctuation">(</span> <span class="token keyword">this</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span> <span class="token string">&quot;active&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u6700\u540E\u7684\u53C2\u6570&#39;this&#39;\u4EE3\u8868\u4E86\u7684dom\u5143\u7D20\u5E76\u4E14\u4F20\u9012\u7ED9\u4E86$.proxy()\u65B9\u6CD5</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>jQuery</code>\u4EE3\u7406\u65B9\u6CD5\u7684\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Bind a function to a context, optionally partially applying any</span>
<span class="token comment">// arguments.</span>
<span class="token function-variable function">proxy</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">fn<span class="token punctuation">,</span> context</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token keyword">typeof</span> context <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> tmp <span class="token operator">=</span> fn<span class="token punctuation">[</span> context <span class="token punctuation">]</span><span class="token punctuation">;</span>
    context <span class="token operator">=</span> fn<span class="token punctuation">;</span>
    fn <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Quick check to determine if target is callable, in the spec</span>
<span class="token comment">// this throws a TypeError, but we will just return undefined.</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>jQuery<span class="token punctuation">.</span><span class="token function">isFunction</span><span class="token punctuation">(</span> fn <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Simulated bind</span>
<span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span> arguments<span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function-variable function">proxy</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span> context<span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span> <span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span> arguments <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// Set the guid of unique handler to the same of original handler, so it can be removed</span>
    proxy<span class="token punctuation">.</span>guid <span class="token operator">=</span> fn<span class="token punctuation">.</span>guid <span class="token operator">=</span> fn<span class="token punctuation">.</span>guid <span class="token operator">||</span> proxy<span class="token punctuation">.</span>guid <span class="token operator">||</span> jQuery<span class="token punctuation">.</span>guid<span class="token operator">++</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> proxy<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,11);function t(o,e){return p}var u=n(a,[["render",t],["__file","proxy.html.vue"]]);export{u as default};
