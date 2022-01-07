import{e as n}from"./app.32e15244.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="mixin\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#mixin\u6A21\u5F0F" aria-hidden="true">#</a> Mixin\u6A21\u5F0F</h1><h2 id="mixin-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#mixin-\u6A21\u5F0F" aria-hidden="true">#</a> Mixin \u6A21\u5F0F</h2><p>\u5728\u8BF8\u5982C++\u6216\u8005List\u7740\u8FD9\u6837\u7684\u4F20\u7EDF\u8BED\u8A00\u4E2D,\u7EC7\u5165\u6A21\u5F0F\u5C31\u662F\u4E00\u4E9B\u63D0\u4F9B\u80FD\u591F\u88AB\u4E00\u4E2A\u6216\u8005\u4E00\u7EC4\u5B50\u7C7B\u7B80\u5355\u7EE7\u627F\u529F\u80FD\u7684\u7C7B,\u610F\u5728\u91CD\u7528\u5176\u529F\u80FD\u3002</p><h2 id="\u5B50\u7C7B\u5212\u5206" tabindex="-1"><a class="header-anchor" href="#\u5B50\u7C7B\u5212\u5206" aria-hidden="true">#</a> \u5B50\u7C7B\u5212\u5206</h2><blockquote><p>\u5BF9\u4E8E\u4E0D\u719F\u6089\u5B50\u7C7B\u5212\u5206\u7684\u5F00\u53D1\u8005,\u5728\u6DF1\u5165\u7EC7\u5165\u6A21\u5F0F\u548C\u88C5\u9970\u5668\u6A21\u5F0F\u4E4B\u524D,\u5C06\u5BF9\u4ED6\u4EEC\u8FDB\u884C\u4E00\u4E2A\u7B80\u77ED\u7684\u521D\u5B66\u8005\u5165\u95E8\u6307\u5F15\u3002</p><p>\u5B50\u7C7B\u5212\u5206\u662F\u4E00\u4E2A\u53C2\u8003\u4E86\u4E3A\u4E00\u4E2A\u65B0\u5BF9\u8C61\u7EE7\u627F\u6765\u81EA\u4E00\u4E2A\u57FA\u7C7B\u6216\u8005\u8D85\u7C7B\u5BF9\u8C61\u7684\u5C5E\u6027\u7684\u672F\u8BED.\u5728\u4F20\u7EDF\u7684\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u4E2D,\u7C7BB\u80FD\u591F\u4ECE\u53E6\u5916\u4E00\u4E2A\u7C7BA\u5904\u6269\u5C55.\u8FD9\u91CC\u5C06A\u770B\u505A\u662F\u8D85\u7C7B,\u800C\u5C06B\u770B\u505A\u662FA\u7684\u5B50\u7C7B.\u5982\u6B64,\u6240\u6709B\u7684\u5B9E\u4F53\u90FD\u4ECEA\u5904\u7EE7\u627F\u4E86\u5176A\u7684\u65B9\u6CD5.\u7136\u800CB\u4ECD\u7136\u80FD\u591F\u5B9A\u4E49\u5B83\u81EA\u5DF1\u7684\u65B9\u6CD5,\u5305\u62EC\u90A3\u4E9B\u91CD\u8F7D\u7684\u539F\u672C\u5728A\u4E2D\u7684\u5B9A\u4E49\u7684\u65B9\u6CD5\u3002</p><p>B\u662F\u5426\u5E94\u8BE5\u8C03\u7528\u5DF2\u7ECF\u88AB\u91CD\u8F7D\u7684A\u4E2D\u7684\u65B9\u6CD5,\u5C06\u8FD9\u4E2A\u5F15\u8FF0\u4E3A\u65B9\u6CD5\u94FE.B\u662F\u5426\u5E94\u8BE5\u8C03\u7528A(\u8D85\u7C7B)\u7684\u6784\u9020\u5668,\u5C06\u8FD9\u79F0\u4E3A\u6784\u9020\u5668\u94FE\u3002</p></blockquote><p>\u4E3A\u4E86\u6F14\u793A\u5B50\u7C7B\u5212\u5206,\u9996\u5148\u9700\u8981\u4E00\u4E2A\u80FD\u591F\u521B\u5EFA\u81EA\u8EAB\u65B0\u5B9E\u4F53\u7684\u57FA\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span>  <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">firstName <span class="token punctuation">,</span> lastName</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> firstName<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span>  lastName<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u63A5\u4E0B\u6765,\u5C06\u5236\u5B9A\u4E00\u4E2A\u65B0\u7684\u7C7B(\u5BF9\u8C61),\u5B83\u662F\u4E00\u4E2A\u73B0\u6709\u7684<code>Person</code>\u5BF9\u8C61\u7684\u5B50\u7C7B.\u8BA9\u60F3\u8C61\u60F3\u8981\u52A0\u5165\u4E00\u4E2A\u4E0D\u540C\u5C5E\u6027\u7528\u6765\u5206\u8FA8\u4E00\u4E2A<code>Person</code>\u548C\u4E00\u4E2A\u7EE7\u627F\u4E86<code>Person</code>&quot;\u8D85\u7C7B&quot;\u5C5E\u6027\u7684<code>Superhero</code>.\u7531\u4E8E\u8D85\u7EA7\u82F1\u96C4\u5206\u4EAB\u4E86\u4E00\u822C\u4EBA\u7C7B\u8BB8\u591A\u5171\u6709\u7684\u7279\u5F81(\u4F8B\u5982:<code>name</code>,<code>gender</code>),\u56E0\u6B64\u8FD9\u5E94\u8BE5\u5F88\u6709\u5E0C\u671B\u5145\u5206\u5C55\u793A\u51FA\u5B50\u7C7B\u5212\u5206\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// a new instance of Person can then easily be created as follows:</span>
<span class="token keyword">var</span> clark <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span> <span class="token string">&quot;Clark&quot;</span> <span class="token punctuation">,</span> <span class="token string">&quot;Kent&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Define a subclass constructor for for &quot;Superhero&quot;:</span>
<span class="token keyword">var</span> <span class="token function-variable function">Superhero</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">,</span> powers</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">// Invoke the superclass constructor on the new object</span>
    <span class="token comment">// then use .call() to invoke the constructor as a method of</span>
    <span class="token comment">// the object to be initialized.</span>

    <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">,</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Finally, store their powers, a new array of traits not found in a normal &quot;Person&quot;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>powers <span class="token operator">=</span> powers<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">SuperHero</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> superman <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Superhero</span><span class="token punctuation">(</span> <span class="token string">&quot;Clark&quot;</span> <span class="token punctuation">,</span><span class="token string">&quot;Kent&quot;</span> <span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;flight&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;heat-vision&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> superman <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Outputs Person attributes as well as powers</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><code>Superhero</code>\u6784\u9020\u5668\u521B\u5EFA\u4E86\u4E00\u4E2A\u81EA<code>Peroson</code>\u4E0B\u964D\u7684\u5BF9\u8C61\u3002\u8FD9\u79CD\u7C7B\u578B\u7684\u5BF9\u8C61\u62E5\u6709\u94FE\u4E2D\u4F4D\u4E8E\u5B83\u4E4B\u4E0A\u7684\u5BF9\u8C61\u7684\u5C5E\u6027,\u800C\u4E14\u5982\u679C\u5728<code>Person</code>\u5BF9\u8C61\u4E2D\u8BBE\u7F6E\u4E86\u9ED8\u8BA4\u7684\u503C,<code>Superhero</code>\u80FD\u591F\u4F7F\u7528\u7279\u5B9A\u4E8E\u5B83\u7684\u5BF9\u8C61\u7684\u503C\u8986\u76D6\u4EFB\u4F55\u7EE7\u627F\u7684\u503C\u3002</p><h2 id="mixin-\u7EC7\u5165\u76EE\u6807\u7C7B" tabindex="-1"><a class="header-anchor" href="#mixin-\u7EC7\u5165\u76EE\u6807\u7C7B" aria-hidden="true">#</a> Mixin(\u7EC7\u5165\u76EE\u6807\u7C7B)</h2><blockquote><p>\u5728Javascript\u4E2D,\u4F1A\u5C06\u4ECE<code>Mixin</code>\u7EE7\u627F\u770B\u4F5C\u662F\u901A\u8FC7\u6269\u5C55\u6536\u96C6\u529F\u80FD\u7684\u4E00\u79CD\u9014\u5F84.\u5B9A\u4E49\u7684\u6BCF\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u90FD\u6709\u4E00\u4E2A\u539F\u578B,\u4ECE\u5176\u4E2D\u5B83\u53EF\u4EE5\u7EE7\u627F\u66F4\u591A\u7684\u5C5E\u6027.\u539F\u578B\u53EF\u4EE5\u4ECE\u5176\u4ED6\u5BF9\u8C61\u7EE7\u627F\u800C\u6765,\u4F46\u662F\u66F4\u91CD\u8981\u7684\u662F,\u80FD\u591F\u4E3A\u4EFB\u610F\u6570\u91CF\u7684\u5BF9\u8C61\u5B9A\u4E49\u5C5E\u6027.\u53EF\u4EE5\u5229\u7528\u8FD9\u4E00\u4E8B\u5B9E\u6765\u4FC3\u8FDB\u529F\u80FD\u91CD\u7528\u3002</p><p><code>Mix</code>\u5141\u8BB8\u5BF9\u8C61\u4EE5\u6700\u5C0F\u91CF\u7684\u590D\u6742\u6027\u4ECE\u5B83\u4EEC\u90A3\u91CC\u501F\u7528(\u6216\u8005\u8BF4\u7EE7\u627F)\u529F\u80FD.\u4F5C\u4E3A\u4E00\u79CD\u5229\u7528Javascript\u5BF9\u8C61\u539F\u578B\u5DE5\u4F5C\u5F97\u5F88\u597D\u7684\u6A21\u5F0F,\u5B83\u4E3A\u63D0\u4F9B\u4E86\u4ECE\u4E0D\u6B62\u4E00\u4E2A<code>Mix</code>\u5904\u5206\u4EAB\u529F\u80FD\u7684\u76F8\u5F53\u7075\u6D3B,\u4F46\u6BD4\u591A\u7EE7\u627F\u6709\u6548\u5F97\u591A\u5F97\u591A\u7684\u65B9\u5F0F\u3002</p></blockquote><p>\u5B83\u4EEC\u53EF\u4EE5\u88AB\u770B\u505A\u662F\u5176\u5C5E\u6027\u548C\u65B9\u6CD5\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u5728\u5176\u5B83\u5927\u91CF\u5BF9\u8C61\u539F\u578B\u5171\u4EAB\u7684\u5BF9\u8C61.\u60F3\u8C61\u4E00\u4E0B\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5728\u4E00\u4E2A\u6807\u51C6\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u542B\u6709\u5B9E\u7528\u529F\u80FD\u7684Mixin,\u5982\u4E0B\u6240\u793A:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myMixins <span class="token operator">=</span> <span class="token punctuation">{</span>

  <span class="token function-variable function">moveUp</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;move up&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">moveDown</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;move down&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">stop</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;stop! in the name of love!&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u7136\u540E\u53EF\u4EE5\u65B9\u4FBF\u7684\u6269\u5C55\u73B0\u6709\u6784\u9020\u5668\u529F\u80FD\u7684\u539F\u578B,\u4F7F\u5176\u5305\u542B\u8FD9\u79CD\u4F7F\u7528\u4E00\u4E2A \u5982\u4E0B\u9762\u7684<code>score.js_.extends()</code>\u65B9\u6CD5\u8F85\u52A9\u5668\u7684\u884C\u4E3A:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// A skeleton carAnimator constructor</span>
<span class="token keyword">function</span> <span class="token function">carAnimator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">moveLeft</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;move left&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// A skeleton personAnimator constructor</span>
<span class="token keyword">function</span> <span class="token function">personAnimator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">moveRandomly</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/*..*/</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Extend both constructors with our Mixin</span>
_<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span> carAnimator<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> myMixins <span class="token punctuation">)</span><span class="token punctuation">;</span>
_<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span> personAnimator<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> myMixins <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Create a new instance of carAnimator</span>
<span class="token keyword">var</span> myAnimator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">carAnimator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myAnimator<span class="token punctuation">.</span><span class="token function">moveLeft</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myAnimator<span class="token punctuation">.</span><span class="token function">moveDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myAnimator<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Outputs:</span>
<span class="token comment">// move left</span>
<span class="token comment">// move down</span>
<span class="token comment">// stop! in the name of love!</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><blockquote><p>\u5982\u6240\u89C1,\u8FD9\u5141\u8BB8\u5C06\u901A\u7528\u7684\u884C\u4E3A\u8F7B\u6613\u7684&quot;\u6DF7&quot;\u5165\u76F8\u5F53\u666E\u901A\u5BF9\u8C61\u6784\u9020\u5668\u4E2D\u3002</p><p>\u5728\u63A5\u4E0B\u6765\u7684\u793A\u4F8B\u4E2D,\u6709\u4E24\u4E2A\u6784\u9020\u5668:\u4E00\u4E2A<code>Car</code>\u548C\u4E00\u4E2A<code>Mixin</code>.\u5C06\u8981\u505A\u7684\u662F\u9759<code>Car</code>\u53C2\u6570\u5316(\u53E6\u5916\u4E00\u79CD\u8BF4\u6CD5\u662F\u6269\u5C55),\u4EE5\u4FBF\u5B83\u80FD\u591F\u7EE7\u627F<code>Mixin</code>\u4E2D\u7684\u7279\u5B9A\u65B9\u6CD5,\u540D\u53EB<code>driveForwar()</code>\u548C<code>driveBackward()</code>.\u8FD9\u4E00\u6B21\u4E0D\u4F1A\u4F7F\u7528<code>Underscore.js</code>\u3002</p></blockquote><p>\u53D6\u800C\u4EE3\u4E4B\uFF0C\u8FD9\u4E2A\u793A\u4F8B\u5C06\u6F14\u793A\u5982\u4F55\u5C06\u4E00\u4E2A\u6784\u9020\u5668\u53C2\u6570\u5316\uFF0C\u4EE5\u4FBF\u5728\u65E0\u9700\u91CD\u590D\u6BCF\u4E00\u4E2A\u6784\u9020\u5668\u51FD\u6570\u8FC7\u7A0B\u7684\u524D\u63D0\u4E0B\u5305\u542B\u5176\u529F\u80FD\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Define a simple Car constructor</span>
<span class="token keyword">var</span> <span class="token function-variable function">Car</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span> <span class="token parameter">settings</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> settings<span class="token punctuation">.</span>model <span class="token operator">||</span> <span class="token string">&quot;no model provided&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> settings<span class="token punctuation">.</span>color <span class="token operator">||</span> <span class="token string">&quot;no colour provided&quot;</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Mixin</span>
<span class="token keyword">var</span> <span class="token function-variable function">Mixin</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Mixin</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token function-variable function">driveForward</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;drive forward&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">driveBackward</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;drive backward&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">driveSideways</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;drive sideways&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Extend an existing object with a method from another</span>
<span class="token keyword">function</span> <span class="token function">augment</span><span class="token punctuation">(</span> <span class="token parameter">receivingClass<span class="token punctuation">,</span> givingClass</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// only provide certain methods</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> arguments<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> len <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            receivingClass<span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> givingClass<span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// provide all methods</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">var</span> methodName <span class="token keyword">in</span> givingClass<span class="token punctuation">.</span>prototype <span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token comment">// check to make sure the receiving class doesn&#39;t</span>
            <span class="token comment">// have a method of the same name as the one currently</span>
            <span class="token comment">// being processed</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>receivingClass<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> methodName<span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                receivingClass<span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span> <span class="token operator">=</span> givingClass<span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// Alternatively:</span>
            <span class="token comment">// if ( !receivingClass.prototype[methodName] ) {</span>
            <span class="token comment">//  receivingClass.prototype[methodName] = givingClass.prototype[methodName];</span>
            <span class="token comment">// }</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Augment the Car constructor to include &quot;driveForward&quot; and &quot;driveBackward&quot;</span>
<span class="token function">augment</span><span class="token punctuation">(</span> Car<span class="token punctuation">,</span> Mixin<span class="token punctuation">,</span> <span class="token string">&quot;driveForward&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;driveBackward&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Create a new Car</span>
<span class="token keyword">var</span> myCar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&quot;Ford Escort&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Test to make sure we now have access to the methods</span>
myCar<span class="token punctuation">.</span><span class="token function">driveForward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myCar<span class="token punctuation">.</span><span class="token function">driveBackward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Outputs:</span>
<span class="token comment">// drive forward</span>
<span class="token comment">// drive backward</span>

<span class="token comment">// We can also augment Car to include all functions from our mixin</span>
<span class="token comment">// by not explicitly listing a selection of them</span>
<span class="token function">augment</span><span class="token punctuation">(</span> Car<span class="token punctuation">,</span> Mixin <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> mySportsCar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&quot;Porsche&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mySportsCar<span class="token punctuation">.</span><span class="token function">driveSideways</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Outputs:</span>
<span class="token comment">// drive sideways</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br></div></div><h2 id="\u4F18\u70B9-\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9-\u7F3A\u70B9" aria-hidden="true">#</a> \u4F18\u70B9&amp;\u7F3A\u70B9</h2><blockquote><p><code>Mixin</code>\u652F\u6301\u5728\u4E00\u4E2A\u7CFB\u7EDF\u4E2D\u964D\u89E3\u529F\u80FD\u7684\u91CD\u590D\u6027,\u589E\u52A0\u529F\u80FD\u7684\u91CD\u7528\u6027.\u5728\u4E00\u4E9B\u5E94\u7528\u7A0B\u5E8F\u4E5F\u8BB8\u9700\u8981\u5728\u6240\u6709\u7684\u5BF9\u8C61\u5B9E\u4F53\u5171\u4EAB\u884C\u4E3A\u7684\u5730\u65B9,\u80FD\u591F\u901A\u8FC7\u5728\u4E00\u4E2A<code>Mixin</code>\u4E2D\u7EF4\u62A4\u8FD9\u4E2A\u5171\u4EAB\u7684\u529F\u80FD,\u6765\u5F88\u5BB9\u6613\u7684\u907F\u514D\u4EFB\u4F55\u91CD\u590D,\u800C\u56E0\u6B64\u4E13\u6CE8\u4E8E\u53EA\u5B9E\u73B0\u7CFB\u7EDF\u4E2D\u771F\u6B63\u5F7C\u6B64\u4E0D\u540C\u7684\u529F\u80FD\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4,\u5BF9<code>Mixin</code>\u7684\u526F\u4F5C\u7528\u662F\u503C\u5F97\u5546\u69B7\u7684.\u4E00\u4E9B\u5F00\u53D1\u8005\u611F\u89C9\u5C06\u529F\u80FD\u6CE8\u5165\u5230\u5BF9\u8C61\u7684\u539F\u578B\u4E2D\u662F\u4E00\u4E2A\u574F\u70B9\u5B50,\u56E0\u4E3A\u5B83\u4F1A\u540C\u65F6\u5BFC\u81F4\u539F\u578B\u6C61\u67D3\u548C\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u7684\u5BF9\u539F\u6709\u529F\u80FD\u7684\u4E0D\u786E\u5B9A\u6027.\u5728\u5927\u578B\u7684\u7CFB\u7EDF\u4E2D,\u5F88\u53EF\u80FD\u662F\u6709\u8FD9\u79CD\u60C5\u51B5\u7684\u3002</p></blockquote>`,21);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
