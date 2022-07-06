import{_ as n,a as s}from"./app.adb48220.js";const a={},e=s(`<h1 id="useevent" tabindex="-1"><a class="header-anchor" href="#useevent" aria-hidden="true">#</a> useEvent</h1><h2 id="\u95EE\u9898\u4EA7\u751F" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u4EA7\u751F" aria-hidden="true">#</a> \u95EE\u9898\u4EA7\u751F</h2><p><code>Hooks</code>\u4F7F\u7528\u65F6\u5B58\u5728\u6240\u8C13\u7684 <strong>\u300C\u95ED\u5305\u9677\u9631\u300D</strong></p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">Chat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onClick <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">sendMessage</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SendButton</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u7136\u800C\u5B9E\u9645\u4E0A\uFF0C\u7531\u4E8E\u56DE\u8C03\u51FD\u6570\u88AB<code>useCallback</code>\u7F13\u5B58\uFF0C\u5F62\u6210\u95ED\u5305\uFF0C\u6240\u4EE5\u70B9\u51FB\u7684\u6548\u679C\u59CB\u7EC8\u662F<code>sendMessage(&#39;&#39;)</code></p><p>\u8FD9\u5C31\u662F <strong>\u300C\u95ED\u5305\u9677\u9631\u300D</strong></p><p>\u4EE5\u4E0A\u4EE3\u7801\u7684\u4E00\u79CD\u89E3\u51B3\u65B9\u5F0F\u662F <strong>\u300C\u4E3AuseCallback\u589E\u52A0\u4F9D\u8D56\u9879\u300D</strong>\uFF1A</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">const</span> onClick <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">sendMessage</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>text<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F46\u662F\u8FD9\u4E48\u505A\u4E86\u540E\uFF0C\u6BCF\u5F53\u4F9D\u8D56\u9879\uFF08<code>text</code>\uFF09\u53D8\u5316\uFF0C<code>useCallback</code>\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5168\u65B0\u7684<code>onClick</code>\u5F15\u7528\uFF0C\u8FD9\u5C31\u5931\u53BB\u4E86<code>useCallback</code> **\u300C\u7F13\u5B58\u51FD\u6570\u5F15\u7528\u300D**\u7684\u4F5C\u7528\u3002</p><p>**\u300C\u95ED\u5305\u9677\u9631\u300D**\u7684\u51FA\u73B0\uFF0C\u52A0\u5927\u4E86Hooks\u7684\u4E0A\u624B\u95E8\u69DB\uFF0C\u4E5F\u8BA9\u5F00\u53D1\u8005\u66F4\u5BB9\u6613\u5199\u51FA\u6709<code>bug</code>\u7684\u4EE3\u7801\u3002</p><h2 id="\u89E3\u51B3\u65B9\u6848-useevent" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848-useevent" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848 useEvent</h2><p>\u89E3\u51B3\u65B9\u5F0F\u662F\u5F15\u5165\u4E00\u4E2A\u65B0\u7684\u539F\u751F<code>Hook</code> \u2014\u2014 <code>useEvent</code>\u3002</p><p>\u4ED6\u7528\u4E8E\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u67092\u4E2A\u7279\u6027\uFF1A</p><ol><li><p>\u5728\u7EC4\u4EF6\u591A\u6B21<code>render</code>\u65F6\u4FDD\u6301\u5F15\u7528\u4E00\u81F4</p></li><li><p>\u51FD\u6570\u5185\u59CB\u7EC8\u80FD\u83B7\u53D6\u5230\u6700\u65B0\u7684<code>props</code>\u4E0E<code>state</code></p></li></ol><blockquote><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4F7F\u7528<code>useEvent</code>\u6539\u9020\u540E\uFF1A</p></blockquote><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">Chat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onClick <span class="token operator">=</span> <span class="token function">useEvent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">sendMessage</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SendButton</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728<code>Chat</code>\u7EC4\u4EF6\u591A\u6B21<code>render</code>\u65F6\uFF0C<code>onClick</code>\u59CB\u7EC8\u6307\u5411\u540C\u4E00\u4E2A\u5F15\u7528\u3002</p><p>\u5E76\u4E14<code>onClick</code>\u89E6\u53D1\u65F6\u59CB\u7EC8\u80FD\u83B7\u53D6\u5230<code>text</code>\u7684\u6700\u65B0\u503C\u3002</p><p>\u4E4B\u6240\u4EE5\u53EB<code>useEvent</code>\uFF0C\u662F\u56E0\u4E3A<code>React</code>\u56E2\u961F\u8BA4\u4E3A\u8FD9\u4E2A<code>Hook</code>\u7684\u4E3B\u8981\u5E94\u7528\u573A\u666F\u662F\uFF1A<strong>\u300C\u5C01\u88C5\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u300D</strong>\u3002</p><h2 id="useevent\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#useevent\u7684\u5B9E\u73B0" aria-hidden="true">#</a> useEvent\u7684\u5B9E\u73B0</h2><blockquote><p><code>useEvent</code>\u7684\u5B9E\u73B0\u5E76\u4E0D\u56F0\u96BE\uFF0C\u4EE3\u7801\u7C7B\u4F3C\u5982\u4E0B\uFF1A</p></blockquote><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">useEvent</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> handlerRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u89C6\u56FE\u6E32\u67D3\u5B8C\u6210\u540E\u66F4\u65B0\`handlerRef.current\`\u6307\u5411</span>
  <span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    handlerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> handler<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7528useCallback\u5305\u88F9\uFF0C\u4F7F\u5F97render\u65F6\u8FD4\u56DE\u7684\u51FD\u6570\u5F15\u7528\u4E00\u81F4</span>
  <span class="token keyword">return</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fn <span class="token operator">=</span> handlerRef<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="\u4EE3\u7801\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u8BE6\u89E3" aria-hidden="true">#</a> \u4EE3\u7801\u8BE6\u89E3</h3><p>\u6574\u4F53\u5305\u62EC\u4E24\u90E8\u5206\uFF1A</p><ol><li>\u8FD4\u56DE\u4E00\u4E2A\u6CA1\u6709\u4F9D\u8D56\u9879\u7684<code>useCallback</code>\uFF0C\u4F7F\u5F97\u6BCF\u6B21<code>render</code>\u65F6\u51FD\u6570\u7684\u5F15\u7528\u4E00\u81F4</li></ol><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> fn <span class="token operator">=</span> handlerRef<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>\u5728\u5408\u9002\u7684\u65F6\u673A\u66F4\u65B0<code>handlerRef.current</code>\uFF0C\u4F7F\u5F97\u5B9E\u9645\u6267\u884C\u7684\u51FD\u6570\u59CB\u7EC8\u662F\u6700\u65B0\u7684\u5F15\u7528</li></ol><h2 id="\u4E0E\u5F00\u6E90hooks\u7684\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u5F00\u6E90hooks\u7684\u5DEE\u5F02" aria-hidden="true">#</a> \u4E0E\u5F00\u6E90Hooks\u7684\u5DEE\u5F02</h2><p>\u5F88\u591A\u5F00\u6E90<code>Hooks</code>\u5E93\u5DF2\u7ECF\u5B9E\u73B0\u7C7B\u4F3C\u529F\u80FD\uFF08\u6BD4\u5982<code>ahooks</code>\u4E2D\u7684<code>useMemoizedFn</code>\uFF09</p><p><code>useEvent</code>\u4E0E\u8FD9\u4E9B\u5F00\u6E90\u5B9E\u73B0\u7684\u5DEE\u5F02\u4E3B\u8981\u4F53\u73B0\u5728\uFF1A</p><p><code>useEvent</code>\u5B9A\u4F4D\u4E8E **\u300C\u5904\u7406\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u300D**\u8FD9\u4E00\u5355\u4E00\u573A\u666F\uFF0C\u800C<code>useMemoizedFn</code>\u5B9A\u4F4D\u4E8E <strong>\u300C\u7F13\u5B58\u5404\u79CD\u51FD\u6570\u300D</strong>\u3002</p><p>\u90A3\u4E48\u95EE\u9898\u6765\u4E86\uFF0C\u65E2\u7136\u529F\u80FD\u7C7B\u4F3C\uFF0C\u90A3<code>useEvent</code>\u4E3A\u4EC0\u4E48\u8981\u9650\u5236\u81EA\u5DF1\u7684\u4F7F\u7528\u573A\u666F\u5462\uFF1F</p><p>\u7B54\u6848\u662F\uFF1A\u4E3A\u4E86\u66F4\u7A33\u5B9A\u3002</p><p><code>useEvent</code>\u80FD\u5426\u83B7\u53D6\u5230\u6700\u65B0\u7684<code>state</code>\u4E0E<code>props</code>\u53D6\u51B3\u4E8E<code>handlerRef.current</code>\u66F4\u65B0\u7684\u65F6\u673A\u3002</p><p>\u5728\u4E0A\u9762\u6A21\u62DF\u5B9E\u73B0\u4E2D\uFF0C<code>useEvent</code>\u66F4\u65B0<code>handlerRef.current</code>\u7684\u903B\u8F91\u653E\u5728<code>useLayoutEffect</code>\u56DE\u8C03\u4E2D\u8FDB\u884C\u3002</p><p>\u8FD9\u5C31\u4FDD\u8BC1\u4E86<code>handlerRef.current</code>\u59CB\u7EC8\u5728 **\u300C\u89C6\u56FE\u5B8C\u6210\u6E32\u67D3\u300D**\u540E\u518D\u66F4\u65B0\uFF1A</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  handlerRef<span class="token punctuation">.</span>current <span class="token operator">=</span> handler<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u800C **\u300C\u4E8B\u4EF6\u56DE\u8C03\u300D**\u89E6\u53D1\u7684\u65F6\u673A\u663E\u7136\u5728 **\u300C\u89C6\u56FE\u5B8C\u6210\u6E32\u67D3\u300D**\u4E4B\u540E\uFF0C\u6240\u4EE5\u80FD\u591F\u7A33\u5B9A\u83B7\u53D6\u5230\u6700\u65B0\u7684<code>state</code>\u4E0E<code>props</code>\u3002</p><p>\u518D\u6765\u770B\u770B<code>ahooks</code>\u4E2D\u7684<code>useMemoizedFn</code>\uFF0C<code>fnRef.current</code>\u7684\u66F4\u65B0\u65F6\u673A\u662F <strong>\u300CuseMemoizedFn\u6267\u884C\u65F6\u300D</strong>\uFF08\u5373 <strong>\u300C\u7EC4\u4EF6render\u65F6\u300D</strong>\uFF09\uFF1A</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">useMemoizedFn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> noop<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>fn<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> fnRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u66F4\u65B0fnRef.current</span>
  fnRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> fn<span class="token punctuation">,</span> <span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ...\u7701\u7565\u4EE3\u7801</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5F53<code>React18</code>\u542F\u7528 **\u300C\u5E76\u53D1\u66F4\u65B0\u300D**\u540E\uFF0C\u7EC4\u4EF6<code>render</code>\u7684\u6B21\u6570\u3001\u65F6\u673A\u5E76\u4E0D\u786E\u5B9A\u3002</p><p>\u6240\u4EE5<code>useMemoizedFn</code>\u4E2D<code>fnRef.current</code>\u7684\u66F4\u65B0\u65F6\u673A\u4E5F\u662F\u4E0D\u786E\u5B9A\u7684\u3002</p><p>\u8FD9\u5C31\u589E\u52A0\u4E86\u5728 **\u300C\u5E76\u53D1\u66F4\u65B0\u300D**\u4E0B\u4F7F\u7528\u65F6\u6F5C\u5728\u7684\u98CE\u9669\u3002</p><p>\u53EF\u4EE5\u8BF4\uFF0C<code>useEvent</code>\u901A\u8FC7\u9650\u5236<code>handlerRef.current</code>\u66F4\u65B0\u65F6\u673A\uFF0C\u8FDB\u800C\u9650\u5236\u5E94\u7528\u573A\u666F\uFF0C\u6700\u7EC8\u8FBE\u5230\u7A33\u5B9A\u7684\u76EE\u7684\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p><code>useEvent</code>\u5F53\u524D\u8FD8\u5904\u4E8E<strong>RFC\uFF08Request For Comments\uFF09</strong>[1]\u9636\u6BB5\u3002</p>`,46);function p(t,o){return e}var u=n(a,[["render",p],["__file","interview4.html.vue"]]);export{u as default};
