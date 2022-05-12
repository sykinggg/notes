import{_ as t,o as p,c as e,b as n,F as o,a}from"./app.2fe08138.js";const l={},c=a(`<h1 id="\u5C5E\u6027\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u9009\u62E9\u5668" aria-hidden="true">#</a> \u5C5E\u6027\u9009\u62E9\u5668</h1><p>CSS <strong>\u5C5E\u6027\u9009\u62E9\u5668</strong>\u901A\u8FC7\u5DF2\u7ECF\u5B58\u5728\u7684\u5C5E\u6027\u540D\u6216\u5C5E\u6027\u503C\u5339\u914D\u5143\u7D20\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u5B58\u5728title\u5C5E\u6027\u7684&lt;a&gt; \u5143\u7D20 */</span>
<span class="token selector">a[title]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u5B58\u5728href\u5C5E\u6027\u5E76\u4E14\u5C5E\u6027\u503C\u5339\u914D&quot;https://example.org&quot;\u7684&lt;a&gt; \u5143\u7D20 */</span>
<span class="token selector">a[href=&quot;https://example.org&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u5B58\u5728href\u5C5E\u6027\u5E76\u4E14\u5C5E\u6027\u503C\u5305\u542B&quot;example&quot;\u7684&lt;a&gt; \u5143\u7D20 */</span>
<span class="token selector">a[href*=&quot;example&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u5B58\u5728href\u5C5E\u6027\u5E76\u4E14\u5C5E\u6027\u503C\u7ED3\u5C3E\u662F&quot;.org&quot;\u7684&lt;a&gt; \u5143\u7D20 */</span>
<span class="token selector">a[href$=&quot;.org&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u5B58\u5728class\u5C5E\u6027\u5E76\u4E14\u5C5E\u6027\u503C\u5305\u542B\u4EE5\u7A7A\u683C\u5206\u9694\u7684&quot;logo&quot;\u7684&lt;a&gt;\u5143\u7D20 */</span>
<span class="token selector">a[class~=&quot;logo&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h1 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h1><p><code>[attr]</code> \u8868\u793A\u5E26\u6709\u4EE5 attr \u547D\u540D\u7684\u5C5E\u6027\u7684\u5143\u7D20\u3002</p><p><code>[attr=value]</code> \u8868\u793A\u5E26\u6709\u4EE5 attr \u547D\u540D\u7684\u5C5E\u6027\uFF0C\u4E14\u5C5E\u6027\u503C\u4E3A value \u7684\u5143\u7D20\u3002</p><p><code>[attr~=value]</code> \u8868\u793A\u5E26\u6709\u4EE5 attr \u547D\u540D\u7684\u5C5E\u6027\u7684\u5143\u7D20\uFF0C\u5E76\u4E14\u8BE5\u5C5E\u6027\u662F\u4E00\u4E2A\u4EE5\u7A7A\u683C\u4F5C\u4E3A\u5206\u9694\u7684\u503C\u5217\u8868\uFF0C\u5176\u4E2D\u81F3\u5C11\u6709\u4E00\u4E2A\u503C\u4E3A value\u3002</p><p><code>[attr|=value]</code> \u8868\u793A\u5E26\u6709\u4EE5 attr \u547D\u540D\u7684\u5C5E\u6027\u7684\u5143\u7D20\uFF0C\u5C5E\u6027\u503C\u4E3A\u201Cvalue\u201D\u6216\u662F\u4EE5\u201Cvalue-\u201D\u4E3A\u524D\u7F00\uFF08&quot;<code>-</code>&quot;\u4E3A\u8FDE\u5B57\u7B26\uFF0CUnicode \u7F16\u7801\u4E3A U+002D\uFF09\u5F00\u5934\u3002\u5178\u578B\u7684\u5E94\u7528\u573A\u666F\u662F\u7528\u6765\u5339\u914D\u8BED\u8A00\u7B80\u5199\u4EE3\u7801\uFF08\u5982 zh-CN\uFF0Czh-TW \u53EF\u4EE5\u7528 zh \u4F5C\u4E3A value\uFF09\u3002</p><p><code>[attr^=value]</code> \u8868\u793A\u5E26\u6709\u4EE5 attr \u547D\u540D\u7684\u5C5E\u6027\uFF0C\u4E14\u5C5E\u6027\u503C\u662F\u4EE5 value \u5F00\u5934\u7684\u5143\u7D20\u3002</p><p><code>[attr$=value]</code> \u8868\u793A\u5E26\u6709\u4EE5 attr \u547D\u540D\u7684\u5C5E\u6027\uFF0C\u4E14\u5C5E\u6027\u503C\u662F\u4EE5 value \u7ED3\u5C3E\u7684\u5143\u7D20\u3002</p><p><code>[attr*=value]</code> \u8868\u793A\u5E26\u6709\u4EE5 attr \u547D\u540D\u7684\u5C5E\u6027\uFF0C\u4E14\u5C5E\u6027\u503C\u81F3\u5C11\u5305\u542B\u4E00\u4E2A value \u503C\u7684\u5143\u7D20\u3002</p><p><code>[attr operator value i]</code> \u5728\u5C5E\u6027\u9009\u62E9\u5668\u7684\u53F3\u65B9\u62EC\u53F7\u524D\u6DFB\u52A0\u4E00\u4E2A\u7528\u7A7A\u683C\u9694\u5F00\u7684\u5B57\u6BCD <code>i</code>\uFF08\u6216 <code>I</code>\uFF09\uFF0C\u53EF\u4EE5\u5728\u5339\u914D\u5C5E\u6027\u503C\u65F6\u5FFD\u7565\u5927\u5C0F\u5199\uFF08\u652F\u6301 ASCII \u5B57\u7B26\u8303\u56F4\u4E4B\u5185\u7684\u5B57\u6BCD\uFF09\u3002</p><p><code>[attr operator value s] </code> \u5728\u5C5E\u6027\u9009\u62E9\u5668\u7684\u53F3\u65B9\u62EC\u53F7\u524D\u6DFB\u52A0\u4E00\u4E2A\u7528\u7A7A\u683C\u9694\u5F00\u7684\u5B57\u6BCD <code>s</code>\uFF08\u6216 <code>S</code>\uFF09\uFF0C\u53EF\u4EE5\u5728\u5339\u914D\u5C5E\u6027\u503C\u65F6\u533A\u5206\u5927\u5C0F\u5199\uFF08\u652F\u6301 ASCII \u5B57\u7B26\u8303\u56F4\u4E4B\u5185\u7684\u5B57\u6BCD\uFF09\u3002</p><h1 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h1><blockquote><p>CSS</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u4EE5 &quot;#&quot; \u5F00\u5934\u7684\u9875\u9762\u672C\u5730\u94FE\u63A5 */</span>
<span class="token selector">a[href^=&quot;#&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u5305\u542B &quot;example&quot; \u7684\u94FE\u63A5 */</span>
<span class="token selector">a[href*=&quot;example&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> silver<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u5305\u542B &quot;insensitive&quot; \u7684\u94FE\u63A5,\u4E0D\u533A\u5206\u5927\u5C0F\u5199 */</span>
<span class="token selector">a[href*=&quot;insensitive&quot; i]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> cyan<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u5305\u542B &quot;cAsE&quot; \u7684\u94FE\u63A5\uFF0C\u533A\u5206\u5927\u5C0F\u5199 */</span>
<span class="token selector">a[href*=&quot;cAsE&quot; s]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u4EE5 &quot;.org&quot; \u7ED3\u5C3E\u7684\u94FE\u63A5 */</span>
<span class="token selector">a[href$=&quot;.org&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><blockquote><p>HTML</p></blockquote><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#internal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Internal link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://example.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Example link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#InSensitive<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Insensitive internal link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://example.org<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Example org link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong><code>\u7ED3\u679C</code></strong></p>`,19),u=["src"],r=a(`<p><strong><code>\u591A\u8BED\u8A00</code></strong></p><blockquote><p>CSS</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u5C06\u6240\u6709\u5305\u542B \`lang\` \u5C5E\u6027\u7684 &lt;div&gt; \u5143\u7D20\u7684\u5B57\u91CD\u8BBE\u4E3A bold */</span>
<span class="token selector">div[lang]</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u5C06\u6240\u6709\u8BED\u8A00\u4E3A\u7F8E\u56FD\u82F1\u8BED\u7684 &lt;div&gt; \u5143\u7D20\u7684\u6587\u672C\u989C\u8272\u8BBE\u4E3A\u84DD\u8272 */</span>
<span class="token selector">div[lang~=&quot;en-us&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u5C06\u6240\u6709\u8BED\u8A00\u4E3A\u8461\u8404\u7259\u8BED\u7684 &lt;div&gt; \u5143\u7D20\u7684\u6587\u672C\u989C\u8272\u8BBE\u4E3A\u7EFF\u8272 */</span>
<span class="token selector">div[lang=&quot;pt&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u5C06\u6240\u6709\u8BED\u8A00\u4E3A\u4E2D\u6587\u7684 &lt;div&gt; \u5143\u7D20\u7684\u6587\u672C\u989C\u8272\u8BBE\u4E3A\u7EA2\u8272
   \u65E0\u8BBA\u662F\u7B80\u4F53\u4E2D\u6587\uFF08zh-CN\uFF09\u8FD8\u662F\u7E41\u4F53\u4E2D\u6587\uFF08zh-TW\uFF09 */</span>
<span class="token selector">div[lang|=&quot;zh&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u5C06\u6240\u6709 \`data-lang\` \u5C5E\u6027\u7684\u503C\u4E3A &quot;zh-TW&quot; \u7684 &lt;div&gt; \u5143\u7D20\u7684\u6587\u672C\u989C\u8272\u8BBE\u4E3A\u7D2B\u8272 */</span>
<span class="token comment">/* \u5907\u6CE8: \u548C JS \u4E0D\u540C\uFF0CCSS \u53EF\u4EE5\u5728\u4E0D\u4F7F\u7528\u53CC\u5F15\u53F7\u7684\u60C5\u51B5\u4E0B\u76F4\u63A5\u4F7F\u7528\u5E26\u8FDE\u5B57\u7B26\u7684\u5C5E\u6027\u540D */</span>
<span class="token selector">div[data-lang=&quot;zh-TW&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><blockquote><p>HTML</p></blockquote><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en-us en-gb en-au en-nz<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello World!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Ol\xE1 Mundo!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E16\u754C\u60A8\u597D\uFF01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-TW<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E16\u754C\u60A8\u597D\uFF01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-TW<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E16\u754C\u60A8\u597D\uFF01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong><code>\u7ED3\u679C</code></strong></p>`,6),i=["src"],k=a(`<p><strong><code>HTML \u6709\u5E8F\u5217\u8868</code></strong></p><p>\u7531\u4E8E <code>type</code> \u5C5E\u6027\u4E3B\u8981\u7528\u4E8E <code>&lt;input&gt;</code> \u5143\u7D20\uFF0C\u56E0\u6B64 HTML \u89C4\u8303\u8981\u6C42 <code>type</code> \u5C5E\u6027\u7684\u5339\u914D\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u5982\u679C\u4F7F\u7528\u5C5E\u6027\u9009\u62E9\u5668\u4E14\u6DFB\u52A0\u4E86 <code>\u5927\u5C0F\u5199\u654F\u611F</code> \u7684\u4FEE\u9970\u7B26\uFF0C\u90A3\u4E48\u5C06\u65E0\u6CD5\u4E0E <code>\u6709\u5E8F\u5217\u8868</code> \u7684 <code>type</code> \u5C5E\u6027\u8FDB\u884C\u5339\u914D\u3002</p><blockquote><p>CSS</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u5217\u8868\u7C7B\u578B\u4E0D\u9700\u8981\u5927\u5C0F\u5199\u654F\u611F\u6807\u5FD7\uFF0C\u8FD9\u662F\u7531\u4E8E HTML \u5904\u7406 type \u5C5E\u6027\u7684\u4E00\u4E2A\u602A\u7656\u3002 */</span>
<span class="token selector">ol[type=&quot;a&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> lower-alpha<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ol[type=&quot;a&quot; s]</span> <span class="token punctuation">{</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> lower-alpha<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> lime<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ol[type=&quot;A&quot; s]</span> <span class="token punctuation">{</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> upper-alpha<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> lime<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p>HTML</p></blockquote><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>A<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Example list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong><code>\u7ED3\u679C</code></strong></p>`,7),b=["src"],m=n("p",null,[n("strong",null,[n("code",null,"\u6D4F\u89C8\u5668\u517C\u5BB9\u6027")])],-1),g=["src"];function d(s,q){return p(),e(o,null,[c,n("img",{src:s.$withBase("/assets/mozillaCss/1617673832(1).jpg"),alt:"demo"},null,8,u),r,n("img",{src:s.$withBase("/assets/mozillaCss/1617673970(1).jpg"),alt:"demo"},null,8,i),k,n("img",{src:s.$withBase("/assets/mozillaCss/1617674240(1).jpg"),alt:"demo"},null,8,b),m,n("img",{src:s.$withBase("/assets/mozillaCss/1617674311(1).jpg"),alt:"demo"},null,8,g)],64)}var v=t(l,[["render",d],["__file","attributeSelectors.html.vue"]]);export{v as default};
