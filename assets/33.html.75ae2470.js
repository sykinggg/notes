import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.c0be2e7e.js";var p="/notes/assets/jsInterview/jsInterviewQuestion/1658105969263.jpg",e="/notes/assets/jsInterview/jsInterviewQuestion/1658106111633.jpg",o="/notes/assets/jsInterview/jsInterviewQuestion/1658106225172.jpg";const c={},i=t(`<h1 id="\u7B2C33\u9898-es5\u600E\u4E48\u5B9E\u73B0\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7B2C33\u9898-es5\u600E\u4E48\u5B9E\u73B0\u7EE7\u627F" aria-hidden="true">#</a> \u7B2C33\u9898\uFF1AES5\u600E\u4E48\u5B9E\u73B0\u7EE7\u627F</h1><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>javascript\u7684\u7EE7\u627F\u4E3B\u8981\u662F\u4F9D\u6258\u5176\u539F\u578B\u4E0E\u539F\u578B\u94FE\u7684\u6982\u5FF5\u6765\u5B9E\u73B0\u7684\u3002</p><blockquote><p>ECMAscript\u5C06\u539F\u578B\u94FE\u4F5C\u4E3A\u5B9E\u73B0\u7EE7\u627F\u7684\u4E3B\u8981\u65B9\u6CD5\u3002</p></blockquote><h2 id="\u5148\u6765\u770B\u770Bes6\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5148\u6765\u770B\u770Bes6\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u5148\u6765\u770B\u770BES6\u7684\u5B9E\u73B0</h2><p><code>ES6</code>\u63D0\u4F9B\u4E86<code>Class</code>\u5173\u952E\u5B57\u6765\u5B9E\u73B0\u7C7B\u7684\u5B9A\u4E49\uFF0C<code>Class</code> \u53EF\u4EE5\u901A\u8FC7<code>extends</code>\u5173\u952E\u5B57\u5B9E\u73B0\u7EE7\u627F\uFF0C\u8BA9\u5B50\u7C7B\u7EE7\u627F\u7236\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><h2 id="es5\u5B9E\u73B0\u7684\u56DB\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#es5\u5B9E\u73B0\u7684\u56DB\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> ES5\u5B9E\u73B0\u7684\u56DB\u79CD\u65B9\u5F0F</h2><h3 id="_1-\u539F\u578B\u94FE\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_1-\u539F\u578B\u94FE\u7EE7\u627F" aria-hidden="true">#</a> 1. \u539F\u578B\u94FE\u7EE7\u627F</h3><p>\u539F\u578B\u94FE\u7EE7\u627F\u7684\u539F\u7406\u5F88\u7B80\u5355\uFF0C\u76F4\u63A5\u8BA9\u5B50\u7C7B\u7684\u539F\u578B\u5BF9\u8C61\u6307\u5411\u7236\u7C7B\u5B9E\u4F8B\uFF0C\u5F53\u5B50\u7C7B\u5B9E\u4F8B\u627E\u4E0D\u5230\u5BF9\u5E94\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u65F6\uFF0C\u5C31\u4F1A\u5F80\u5B83\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u7236\u7C7B\u5B9E\u4F8B\u4E0A\u627E\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5BF9\u7236\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u7EE7\u627F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Back_kk&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6839\u636E\u539F\u578B\u94FE\u7684\u89C4\u5219,\u987A\u4FBF\u7ED1\u5B9A\u4E00\u4E0Bconstructor, \u8FD9\u4E00\u6B65\u4E0D\u5F71\u54CD\u7EE7\u627F, \u53EA\u662F\u5728\u7528\u5230constructor\u65F6\u4F1A\u9700\u8981</span>
<span class="token comment">// \u539F\u578B\u7684\u5B9E\u4F8B\u7B49\u4E8E\u81EA\u8EAB</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Student<span class="token punctuation">;</span>

<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Back_kk</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Back_kk</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F3A\u9677" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u9677" aria-hidden="true">#</a> \u7F3A\u9677</h3><ol><li>\u7531\u4E8E\u6240\u6709<code>Student</code>\u5B9E\u4F8B\u539F\u578B\u90FD\u6307\u5411\u540C\u4E00\u4E2A<code>Person</code>\u5B9E\u4F8B, \u56E0\u6B64\u5BF9\u67D0\u4E2A<code>Student</code>\u5B9E\u4F8B\u7684\u6765\u81EA\u7236\u7C7B\u7684\u5F15\u7528\u7C7B\u578B\u53D8\u91CF\u4FEE\u6539\u4F1A\u5F71\u54CD\u6240\u6709\u7684<code>Student</code>\u5B9E\u4F8B</li></ol><p>\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Back_kk&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6839\u636E\u539F\u578B\u94FE\u7684\u89C4\u5219,\u987A\u4FBF\u7ED1\u5B9A\u4E00\u4E0Bconstructor, \u8FD9\u4E00\u6B65\u4E0D\u5F71\u54CD\u7EE7\u627F, \u53EA\u662F\u5728\u7528\u5230constructor\u65F6\u4F1A\u9700\u8981</span>
<span class="token comment">// \u539F\u578B\u7684\u5B9E\u4F8B\u7B49\u4E8E\u81EA\u8EAB</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Student<span class="token punctuation">;</span>

<span class="token keyword">const</span> student1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
student1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;\u4F69\u5947&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> student2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student2<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F69\u5947</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5728\u521B\u5EFA\u5B50\u7C7B\u5B9E\u4F8B\u65F6\u65E0\u6CD5\u5411\u7236\u7C7B\u6784\u9020\u4F20\u53C2, \u5373\u6CA1\u6709\u5B9E\u73B0<code>super()</code>\u7684\u529F\u80FD</li></ol><h3 id="_2-\u6784\u9020\u51FD\u6570\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_2-\u6784\u9020\u51FD\u6570\u7EE7\u627F" aria-hidden="true">#</a> 2. \u6784\u9020\u51FD\u6570\u7EE7\u627F</h3><p>\u6784\u9020\u51FD\u6570\u7EE7\u627F\uFF0C\u5373\u5728\u5B50\u7C7B\u7684\u6784\u9020\u51FD\u6570\u4E2D\u6267\u884C\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\uFF0C\u5E76\u4E3A\u5176\u7ED1\u5B9A\u5B50\u7C7B\u7684<code>this</code>\uFF0C\u8BA9\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\u628A\u6210\u5458\u5C5E\u6027\u548C\u65B9\u6CD5\u90FD\u6302\u5230\u5B50\u7C7B\u7684<code>this</code>\u4E0A\u53BB\uFF0C\u8FD9\u6837\u65E2\u80FD\u907F\u514D\u5B9E\u4F8B\u4E4B\u95F4\u5171\u4EAB\u4E00\u4E2A\u539F\u578B\u5B9E\u4F8B\uFF0C\u53C8\u80FD\u5411\u7236\u7C7B\u6784\u9020\u65B9\u6CD5\u4F20\u53C2\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;Back_kk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Back_kk</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F3A\u9677-1" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u9677-1" aria-hidden="true">#</a> \u7F3A\u9677</h3><ul><li><p>\u7EE7\u627F\u4E0D\u5230\u7236\u7C7B\u539F\u578B\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</p><p><code>Students</code>\u7C7B\u5B9E\u9645\u4E0A\u662F\u8C03\u7528<code>Person</code>\u7C7B\u6765\u751F\u6210\u7684\u5B9E\u4F8B</p></li></ul><p><img src="`+p+`" alt="demo"></p><p>\u80FD\u5426\u4EA4\u52A0\u4FEE\u6539\u8BA9\u5176\u83B7\u53D6\u5230<code>Person</code>\u539F\u578B\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u5462\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u5077\u5077\u7528\u4E86ES6\u7684\u89E3\u6784\uFF0C\u4E0D\u5F71\u54CD\u5927\u5C40\u4E0D\u8981\u5728\u610F\u54C8</span>
   <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;Back_kk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Back_kk</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u8FD9\u6837\u987E\u6B64\u5931\u5F7C\uFF0C<code>student</code>\u7684\u6784\u9020\u65B9\u6CD5\u53D8\u6210\u4E86<code>Person</code>,\u8FD9\u663E\u7136\u8FDD\u80CC\u4E86\u6211\u4EEC\u7684\u521D\u8877\u3002</p><p><img src="`+e+`" alt="demo"></p><h3 id="_3-\u7EC4\u5408\u5F0F\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_3-\u7EC4\u5408\u5F0F\u7EE7\u627F" aria-hidden="true">#</a> 3. \u7EC4\u5408\u5F0F\u7EE7\u627F</h3><p>\u7EC4\u5408\u662F\u7EE7\u627F\u7ED3\u5408\u4E86\u539F\u578B\u96C6\u6210\u548C\u6784\u9020\u51FD\u6570\u7EE7\u627F\u7684\u7279\u70B9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6784\u9020\u51FD\u6570\u7EE7\u627F</span>
    <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u539F\u578B\u5F0F\u7EE7\u627F</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u539F\u578B\u7684\u5B9E\u4F8B\u7B49\u4E8E\u81EA\u8EAB</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Student<span class="token punctuation">;</span>

<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;Back_kk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Back_kk</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Back_kk</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F3A\u9677-2" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u9677-2" aria-hidden="true">#</a> \u7F3A\u9677</h3><ul><li>\u6BCF\u6B21\u521B\u5EFA\u5B50\u7C7B\u5B9E\u4F8B\u90FD\u6267\u884C\u4E86\u4E24\u6B21\u6784\u9020\u51FD\u6570(<code>Person.apply</code>\u548C<code>new Person()</code>)\uFF0C\u867D\u7136\u8FD9\u5E76\u4E0D\u5F71\u54CD\u5BF9\u7236\u7C7B\u7684\u7EE7\u627F\uFF0C\u4F46\u5B50\u7C7B\u521B\u5EFA\u5B9E\u4F8B\u65F6\uFF0C\u539F\u578B\u4E2D\u4F1A\u5B58\u5728\u4E24\u4EFD\u76F8\u540C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u8FD9\u5E76\u4E0D\u4F18\u96C5\u3002</li></ul><p><img src="`+o+`" alt="demo"></p><h3 id="_4-\u5BC4\u751F\u5F0F\u7EC4\u5408\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_4-\u5BC4\u751F\u5F0F\u7EC4\u5408\u7EE7\u627F" aria-hidden="true">#</a> 4. \u5BC4\u751F\u5F0F\u7EC4\u5408\u7EE7\u627F</h3><p>\u89E3\u51B3\u6784\u9020\u51FD\u6570\u88AB\u6267\u884C\u4E24\u6B21\u7684\u95EE\u9898, \u6211\u4EEC\u5C06\u6307\u5411\u7236\u7C7B\u5B9E\u4F8B\u6539\u4E3A\u6307\u5411\u7236\u7C7B\u539F\u578B, \u51CF\u53BB\u4E00\u6B21\u6784\u9020\u51FD\u6570\u7684\u6267\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6784\u9020\u51FD\u6570\u7EE7\u627F</span>
    <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u539F\u578B\u5F0F\u7EE7\u627F</span>
<span class="token comment">// Student.prototype = new Person();</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u539F\u578B\u7684\u5B9E\u4F8B\u7B49\u4E8E\u81EA\u8EAB</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Student<span class="token punctuation">;</span>

<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;Back_kk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Back_kk</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Back_kk</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u76EE\u524DES5\u4E2D\u6BD4\u8F83\u6210\u719F\u7684\u7EE7\u627F\u65B9\u5F0F\u4E86\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li><p>\u8BF4\u5230<code>js</code>\u7EE7\u627F\uFF0C\u6700\u5F00\u59CB\u60F3\u5230\u7684\u5E94\u8BE5\u662F\u662F\u539F\u578B\u94FE\u7EE7\u627F\uFF0C\u901A\u8FC7\u628A\u5B50\u7C7B\u5B9E\u4F8B\u7684\u539F\u578B\u6307\u5411\u7236\u7C7B\u5B9E\u4F8B\u6765\u7EE7\u627F\u7236\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F46\u539F\u578B\u94FE\u7EE7\u627F\u7684\u7F3A\u9677\u5728\u4E8E\u5BF9\u5B50\u7C7B\u5B9E\u4F8B\u7EE7\u627F\u7684\u5F15\u7528\u7C7B\u578B\u7684\u4FEE\u6539\u4F1A\u5F71\u54CD\u5230\u6240\u6709\u7684\u5B9E\u4F8B\u5BF9\u8C61\u4EE5\u53CA\u65E0\u6CD5\u5411\u7236\u7C7B\u7684\u6784\u9020\u65B9\u6CD5\u4F20\u53C2\u3002</p></li><li><p>\u6784\u9020\u51FD\u6570\u7EE7\u627F, \u901A\u8FC7\u5728\u5B50\u7C7B\u6784\u9020\u51FD\u6570\u4E2D\u8C03\u7528\u7236\u7C7B\u6784\u9020\u51FD\u6570\u5E76\u4F20\u5165\u5B50\u7C7B<code>this</code>\u6765\u83B7\u53D6\u7236\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F46\u6784\u9020\u51FD\u6570\u7EE7\u627F\u4E5F\u5B58\u5728\u7F3A\u9677\uFF0C\u6784\u9020\u51FD\u6570\u7EE7\u627F\u4E0D\u80FD\u7EE7\u627F\u5230\u7236\u7C7B\u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p></li><li><p>\u540E\u9762\u6709\u4E86\u7EC4\u5408\u5F0F\u7EE7\u627F\uFF0C\u4F46\u4E5F\u6709\u4E86\u65B0\u7684\u95EE\u9898\uFF0C\u6BCF\u6B21\u90FD\u4F1A\u6267\u884C\u4E24\u6B21\u7236\u7C7B\u7684\u6784\u9020\u65B9\u6CD5\uFF0C\u6700\u7EC8\u6709\u4E86\u5BC4\u751F\u5F0F\u7EC4\u5408\u5F0F\u7EE7\u627F\u3002</p></li></ul>`,37),l=[i];function u(k,d){return s(),a("div",null,l)}var m=n(c,[["render",u],["__file","33.html.vue"]]);export{m as default};
