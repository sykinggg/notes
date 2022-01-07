import{e as n}from"./app.32e15244.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6784\u9020\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u5668\u6A21\u5F0F" aria-hidden="true">#</a> \u6784\u9020\u5668\u6A21\u5F0F</h1><h2 id="\u6784\u9020\u5668\u6A21\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u5668\u6A21\u5F0F-1" aria-hidden="true">#</a> \u6784\u9020\u5668\u6A21\u5F0F</h2><blockquote><p>\u5728\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u4E2D\uFF0C\u6784\u9020\u5668\u662F\u4E00\u4E2A\u5F53\u65B0\u5EFA\u5BF9\u8C61\u7684\u5185\u5B58\u88AB\u5206\u914D\u540E\uFF0C\u7528\u6765\u521D\u59CB\u5316\u8BE5\u5BF9\u8C61\u7684\u4E00\u4E2A\u7279\u6B8A\u51FD\u6570\u3002\u5728JavaScript\u4E2D\u51E0\u4E4E\u6240\u6709\u7684\u4E1C\u897F\u90FD\u662F\u5BF9\u8C61\uFF0C\u7ECF\u5E38\u4F1A\u5BF9\u5BF9\u8C61\u7684\u6784\u9020\u5668\u5341\u5206\u611F\u5174\u8DA3\u3002</p><p>\u5BF9\u8C61\u6784\u9020\u5668\u662F\u88AB\u7528\u6765\u521B\u5EFA\u7279\u6B8A\u7C7B\u578B\u7684\u5BF9\u8C61\u7684\uFF0C\u9996\u5148\u5B83\u8981\u51C6\u5907\u4F7F\u7528\u7684\u5BF9\u8C61\uFF0C\u5176\u6B21\u5728\u5BF9\u8C61\u521D\u6B21\u88AB\u521B\u5EFA\u65F6\uFF0C\u901A\u8FC7\u63A5\u6536\u53C2\u6570\uFF0C\u6784\u9020\u5668\u8981\u7528\u6765\u5BF9\u6210\u5458\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u8FDB\u884C\u8D4B\u503C\u3002</p></blockquote><h2 id="\u5BF9\u8C61\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u521B\u5EFA" aria-hidden="true">#</a> \u5BF9\u8C61\u521B\u5EFA</h2><p>\u4E0B\u9762\u662F\u521B\u5EFA\u5BF9\u8C61\u7684\u4E09\u79CD\u57FA\u672C\u65B9\u5F0F:</p><p>\u4E0B\u9762\u7684\u6BCF\u4E00\u79CD\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> newObject <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// or</span>
<span class="token keyword">var</span> newObject <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span> <span class="token keyword">null</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// or</span>
<span class="token keyword">var</span> newObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6700\u540E\u4E00\u4E2A\u4F8B\u5B50\u4E2D<code>&quot;Object&quot;</code>\u6784\u9020\u5668\u521B\u5EFA\u4E86\u4E00\u4E2A\u9488\u5BF9\u7279\u6B8A\u503C\u7684\u5BF9\u8C61\u5305\u88C5\uFF0C\u53EA\u4E0D\u8FC7\u8FD9\u91CC\u6CA1\u6709\u4F20\u503C\u7ED9\u5B83\uFF0C\u6240\u4EE5\u5B83\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u3002</p><blockquote><p>\u6709\u56DB\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5C06\u4E00\u4E2A\u952E\u503C\u5BF9\u8D4B\u7ED9\u4E00\u4E2A\u5BF9\u8C61:</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ECMAScript 3 \u517C\u5BB9\u5F62\u5F0F</span>

<span class="token comment">// 1\\. \u201C\u70B9\u53F7\u201D\u6CD5</span>

<span class="token comment">// \u8BBE\u7F6E\u5C5E\u6027</span>
newObject<span class="token punctuation">.</span>someKey <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u83B7\u53D6\u5C5E\u6027</span>
<span class="token keyword">var</span> key <span class="token operator">=</span> newObject<span class="token punctuation">.</span>someKey<span class="token punctuation">;</span>

<span class="token comment">// 2\\. \u201C\u65B9\u62EC\u53F7\u201D\u6CD5</span>

<span class="token comment">// \u8BBE\u7F6E\u5C5E\u6027</span>
newObject<span class="token punctuation">[</span><span class="token string">&quot;someKey&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u83B7\u53D6\u5C5E\u6027</span>
<span class="token keyword">var</span> key <span class="token operator">=</span> newObject<span class="token punctuation">[</span><span class="token string">&quot;someKey&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// ECMAScript 5 \u4EC5\u517C\u5BB9\u6027\u5F62\u5F0F</span>
<span class="token comment">// For more information see: http://kangax.github.com/es5-compat-table/</span>

<span class="token comment">// 3\\. Object.defineProperty\u65B9\u5F0F</span>

<span class="token comment">// \u8BBE\u7F6E\u5C5E\u6027</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span> newObject<span class="token punctuation">,</span> <span class="token string">&quot;someKey&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;for more control of the property&#39;s behavior&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5982\u679C\u4E0A\u9762\u7684\u65B9\u5F0F\u4F60\u611F\u5230\u96BE\u4EE5\u9605\u8BFB\uFF0C\u53EF\u4EE5\u7B80\u77ED\u7684\u5199\u6210\u4E0B\u9762\u8FD9\u6837\uFF1A</span>

<span class="token keyword">var</span> <span class="token function-variable function">defineProp</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span> <span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
  config<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span> obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> config <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E3A\u4E86\u4F7F\u7528\u5B83\uFF0C\u8981\u521B\u5EFA\u4E00\u4E2A\u201Cperson\u201D\u5BF9\u8C61</span>
<span class="token keyword">var</span> person <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span> <span class="token keyword">null</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7528\u5C5E\u6027\u6784\u9020\u5BF9\u8C61</span>
<span class="token function">defineProp</span><span class="token punctuation">(</span> person<span class="token punctuation">,</span> <span class="token string">&quot;car&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;Delorean&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">defineProp</span><span class="token punctuation">(</span> person<span class="token punctuation">,</span> <span class="token string">&quot;dateOfBirth&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1981&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">defineProp</span><span class="token punctuation">(</span> person<span class="token punctuation">,</span> <span class="token string">&quot;hasBeard&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4\\. Object.defineProperties\u65B9\u5F0F</span>

<span class="token comment">// \u8BBE\u7F6E\u5C5E\u6027</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span> newObject<span class="token punctuation">,</span> <span class="token punctuation">{</span>

  <span class="token string-property property">&quot;someKey&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span> 
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token string-property property">&quot;anotherKey&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;Foo bar&quot;</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span> 
  <span class="token punctuation">}</span> 

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3\u548C4\u4E2D\u7684\u8BFB\u53D6\u5C5E\u884C\u53EF\u75281\u548C2\u4E2D\u7684\u4EFB\u610F\u4E00\u79CD</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><blockquote><p>\u5728\u8FD9\u672C\u4E66\u7684\u540E\u9762\u4E00\u70B9\uFF0C\u8FD9\u4E9B\u65B9\u6CD5\u4F1A\u88AB\u7528\u4E8E\u7EE7\u627F\uFF0C\u5982\u4E0B\uFF1A</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4F7F\u7528:</span>

<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u7EE7\u627F\u4E0EPerson\u7684\u8D5B\u8F66\u53F8\u673A</span>
<span class="token keyword">var</span> driver <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span> person <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8BBE\u7F6E\u53F8\u673A\u7684\u5C5E\u6027</span>
<span class="token function">defineProp</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">&quot;topSpeed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100mph&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u83B7\u53D6\u7EE7\u627F\u7684\u5C5E\u6027 (1981)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> driver<span class="token punctuation">.</span>dateOfBirth <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u83B7\u53D6\u8BBE\u7F6E\u7684\u5C5E\u6027 (100mph)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> driver<span class="token punctuation">.</span>topSpeed <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u57FA\u7840\u6784\u9020\u5668" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u6784\u9020\u5668" aria-hidden="true">#</a> \u57FA\u7840\u6784\u9020\u5668</h2><blockquote><p>\u6B63\u5982\u5148\u524D\u6240\u770B\u5230\u7684\uFF0CJavascript\u4E0D\u652F\u6301\u7C7B\u7684\u6982\u5FF5\uFF0C\u4F46\u5B83\u6709\u4E00\u79CD\u4E0E\u5BF9\u8C61\u4E00\u8D77\u5DE5\u4F5C\u7684\u6784\u9020\u5668\u51FD\u6570\u3002\u4F7F\u7528new\u5173\u952E\u5B57\u6765\u8C03\u7528\u8BE5\u51FD\u6570\uFF0C\u53EF\u4EE5\u544A\u8BC9Javascript\u628A\u8FD9\u4E2A\u51FD\u6570\u5F53\u505A\u4E00\u4E2A\u6784\u9020\u5668\u6765\u7528,\u5B83\u53EF\u4EE5\u7528\u81EA\u5DF1\u6240\u5B9A\u4E49\u7684\u6210\u5458\u6765\u521D\u59CB\u5316\u4E00\u4E2A\u5BF9\u8C61\u3002</p><p>\u5728\u8FD9\u4E2A\u6784\u9020\u5668\u5185\u90E8\uFF0C\u5173\u952E\u5B57this\u5F15\u7528\u5230\u521A\u88AB\u521B\u5EFA\u7684\u5BF9\u8C61\u3002\u56DE\u5230\u5BF9\u8C61\u521B\u5EFA\uFF0C\u4E00\u4E2A\u57FA\u672C\u7684\u6784\u9020\u51FD\u6570\u770B\u8D77\u6765\u50CF\u8FD9\u6837:</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span> <span class="token parameter">model<span class="token punctuation">,</span> year<span class="token punctuation">,</span> miles</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> model<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>year <span class="token operator">=</span> year<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>miles <span class="token operator">=</span> miles<span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">+</span> <span class="token string">&quot; has done &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>miles <span class="token operator">+</span> <span class="token string">&quot; miles&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528:</span>

<span class="token comment">// \u53EF\u4EE5\u793A\u4F8B\u5316\u4E00\u4E2ACar</span>
<span class="token keyword">var</span> civic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span> <span class="token string">&quot;Honda Civic&quot;</span><span class="token punctuation">,</span> <span class="token number">2009</span><span class="token punctuation">,</span> <span class="token number">20000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> mondeo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span> <span class="token string">&quot;Ford Mondeo&quot;</span><span class="token punctuation">,</span> <span class="token number">2010</span><span class="token punctuation">,</span> <span class="token number">5000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6253\u5F00\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u67E5\u770B\u8FD9\u4E9B\u5BF9\u8C61toString()\u65B9\u6CD5\u7684\u8F93\u51FA\u503C</span>
<span class="token comment">// output of the toString() method being called on</span>
<span class="token comment">// these objects</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> civic<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> mondeo<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u4E0A\u9762\u8FD9\u662F\u4E2A\u7B80\u5355\u7248\u672C\u7684\u6784\u9020\u5668\u6A21\u5F0F\uFF0C\u4F46\u5B83\u8FD8\u662F\u6709\u4E9B\u95EE\u9898\u3002\u4E00\u4E2A\u662F\u96BE\u4EE5\u7EE7\u627F\uFF0C\u53E6\u4E00\u4E2A\u662F\u6BCF\u4E2ACar\u6784\u9020\u51FD\u6570\u521B\u5EFA\u7684\u5BF9\u8C61\u4E2D\uFF0CtoString()\u4E4B\u7C7B\u7684\u51FD\u6570\u90FD\u88AB\u91CD\u65B0\u5B9A\u4E49\u3002\u8FD9\u4E0D\u662F\u975E\u5E38\u597D\uFF0C\u7406\u60F3\u7684\u60C5\u51B5\u662F\u6240\u6709Car\u7C7B\u578B\u7684\u5BF9\u8C61\u90FD\u5E94\u8BE5\u5F15\u7528\u540C\u4E00\u4E2A\u51FD\u6570\u3002 \u8FD9\u8981\u8C22\u8C22 ECMAScript3\u548CECMAScript5-\u517C\u5BB9\u7248\uFF0C\u5BF9\u4E8E\u6784\u9020\u5BF9\u8C61\u4ED6\u4EEC\u63D0\u4F9B\u4E86\u53E6\u5916\u4E00\u4E9B\u9009\u62E9\uFF0C\u89E3\u51B3\u9650\u5236\u5C0F\u83DC\u4E00\u789F\u3002</p><h2 id="\u4F7F\u7528-\u539F\u578B-\u7684\u6784\u9020\u5668" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-\u539F\u578B-\u7684\u6784\u9020\u5668" aria-hidden="true">#</a> \u4F7F\u7528\u201C\u539F\u578B\u201D\u7684\u6784\u9020\u5668</h2><p>\u5728Javascript\u4E2D\u51FD\u6570\u6709\u4E00\u4E2Aprototype\u7684\u5C5E\u6027\u3002\u5F53\u8C03\u7528Javascript\u7684\u6784\u9020\u5668\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u6784\u9020\u51FD\u6570prototype\u4E0A\u7684\u5C5E\u6027\u5BF9\u4E8E\u6240\u521B\u5EFA\u7684\u5BF9\u8C61\u6765\u8BF4\u90FD\u770B\u89C1\u3002\u7167\u8FD9\u6837\uFF0C\u5C31\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A\u8BBF\u95EE\u76F8\u540Cprototype\u7684Car\u5BF9\u8C61\u4E86\u3002\u4E0B\u9762\uFF0C\u6765\u6269\u5C55\u4E00\u4E0B\u539F\u6765\u7684\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span> <span class="token parameter">model<span class="token punctuation">,</span> year<span class="token punctuation">,</span> miles</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> model<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>year <span class="token operator">=</span> year<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>miles <span class="token operator">=</span> miles<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token comment">// \u6CE8\u610F\u8FD9\u91CC\u4F7F\u7528Note here that we are using Object.prototype.newMethod \u800C\u4E0D\u662F</span>
<span class="token comment">// Object.prototype \uFF0C\u4EE5\u907F\u514D\u91CD\u65B0\u5B9A\u4E49\u539F\u578B\u5BF9\u8C61</span>
<span class="token class-name">Car</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">+</span> <span class="token string">&quot; has done &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>miles <span class="token operator">+</span> <span class="token string">&quot; miles&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528:</span>

<span class="token keyword">var</span> civic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span> <span class="token string">&quot;Honda Civic&quot;</span><span class="token punctuation">,</span> <span class="token number">2009</span><span class="token punctuation">,</span> <span class="token number">20000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> mondeo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span> <span class="token string">&quot;Ford Mondeo&quot;</span><span class="token punctuation">,</span> <span class="token number">2010</span><span class="token punctuation">,</span> <span class="token number">5000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> civic<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> mondeo<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u901A\u8FC7\u4E0A\u9762\u4EE3\u7801\uFF0C\u5355\u4E2A<code>toString()</code>\u5B9E\u4F8B\u88AB\u6240\u6709\u7684Car\u5BF9\u8C61\u6240\u5171\u4EAB\u4E86\u3002</p>`,20);function t(e,o){return p}var r=s(a,[["render",t]]);export{r as default};
