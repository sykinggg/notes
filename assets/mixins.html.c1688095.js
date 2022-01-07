import{e as n}from"./app.32e15244.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6DF7\u5408" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5408" aria-hidden="true">#</a> \u6DF7\u5408</h1><p>TypeScript (\u548C JavaScript) \u7C7B\u53EA\u80FD\u4E25\u683C\u7684\u5355\u7EE7\u627F\uFF0C\u56E0\u6B64\u4F60\u4E0D\u80FD\u505A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Tagged</span><span class="token punctuation">,</span> Timestamped <span class="token punctuation">{</span> <span class="token comment">// ERROR : \u4E0D\u80FD\u591A\u91CD\u7EE7\u627F</span>
  <span class="token comment">// ..</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4ECE\u53EF\u91CD\u7528\u7EC4\u4EF6\u6784\u5EFA\u7C7B\u7684\u53E6\u4E00\u79CD\u65B9\u5F0F\u662F\u901A\u8FC7\u57FA\u7C7B\u6765\u6784\u5EFA\u5B83\u4EEC\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u79F0\u4E3A\u6DF7\u5408\u3002</p><p>\u8FD9\u4E2A\u4E3B\u610F\u662F\u7B80\u5355\u7684\uFF0C\u91C7\u7528\u51FD\u6570 B \u63A5\u53D7\u4E00\u4E2A\u7C7B A\uFF0C\u5E76\u4E14\u8FD4\u56DE\u4E00\u4E2A\u5E26\u6709\u65B0\u529F\u80FD\u7684\u7C7B\u7684\u65B9\u5F0F\u6765\u66FF\u4EE3 A \u7C7B\u6269\u5C55 B \u6765\u83B7\u53D6 B \u4E0A\u7684\u529F\u80FD\uFF0C\u524D\u8005\u4E2D\u7684 B \u5373\u662F\u6DF7\u5408\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u300C\u6DF7\u5408\u300D\u662F\u4E00\u4E2A\u51FD\u6570\uFF1A</p><ul><li>\u4F20\u5165\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF1B</li><li>\u521B\u5EFA\u4E00\u4E2A\u5E26\u6709\u65B0\u529F\u80FD\uFF0C\u5E76\u4E14\u6269\u5C55\u6784\u9020\u51FD\u6570\u7684\u65B0\u7C7B\uFF1B</li><li>\u8FD4\u56DE\u8FD9\u4E2A\u65B0\u7C7B\u3002</li></ul></div><p>\u4E00\u4E2A\u5B8C\u6574\u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u6240\u6709 mixins \u90FD\u9700\u8981</span>
<span class="token keyword">type</span> <span class="token class-name">Constructor<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">;</span>

<span class="token comment">/////////////</span>
<span class="token comment">// mixins \u4F8B\u5B50</span>
<span class="token comment">////////////</span>

<span class="token comment">// \u6DFB\u52A0\u5C5E\u6027\u7684\u6DF7\u5408\u4F8B\u5B50</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">TimesTamped</span><span class="token generic class-name"><span class="token operator">&lt;</span>TBase <span class="token keyword">extends</span> Constructor<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>Base<span class="token operator">:</span> TBase<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">extends</span></span> Base <span class="token punctuation">{</span>
    timestamp <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u6DF7\u5408\u4F8B\u5B50</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">Activatable</span><span class="token generic class-name"><span class="token operator">&lt;</span>TBase <span class="token keyword">extends</span> Constructor<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>Base<span class="token operator">:</span> TBase<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">extends</span></span> Base <span class="token punctuation">{</span>
    isActivated <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token function">activate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>isActivated <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>isActivated <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">///////////</span>
<span class="token comment">// \u7EC4\u5408\u7C7B</span>
<span class="token comment">///////////</span>

<span class="token comment">// \u7B80\u5355\u7684\u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6DFB\u52A0 TimesTamped \u7684 User</span>
<span class="token keyword">const</span> TimestampedUser <span class="token operator">=</span> <span class="token function">TimesTamped</span><span class="token punctuation">(</span>User<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Tina TimesTamped \u548C Activatable \u7684\u7C7B</span>
<span class="token keyword">const</span> TimestampedActivatableUser <span class="token operator">=</span> <span class="token function">TimesTamped</span><span class="token punctuation">(</span><span class="token function">Activatable</span><span class="token punctuation">(</span>User<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//////////</span>
<span class="token comment">// \u4F7F\u7528\u7EC4\u5408\u7C7B</span>
<span class="token comment">//////////</span>

<span class="token keyword">const</span> timestampedUserExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TimestampedUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timestampedUserExample<span class="token punctuation">.</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> timestampedActivatableUserExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TimestampedActivatableUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timestampedActivatableUserExample<span class="token punctuation">.</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timestampedActivatableUserExample<span class="token punctuation">.</span>isActivated<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><p>\u8BA9\u5206\u89E3\u8FD9\u4E2A\u4F8B\u5B50\u3002</p><h2 id="\u521B\u5EFA\u4E00\u4E2A\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A\u6784\u9020\u51FD\u6570</h2><p>\u6DF7\u5408\u63A5\u53D7\u4E00\u4E2A\u7C7B\uFF0C\u5E76\u4E14\u4F7F\u7528\u65B0\u529F\u80FD\u6269\u5C55\u5B83\u3002\u56E0\u6B64\uFF0C\u9700\u8981\u5B9A\u4E49\u6784\u9020\u51FD\u6570\u7684\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Constructor<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u6269\u5C55\u4E00\u4E2A\u7C7B\u5E76\u4E14\u8FD4\u56DE\u5B83" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u4E00\u4E2A\u7C7B\u5E76\u4E14\u8FD4\u56DE\u5B83" aria-hidden="true">#</a> \u6269\u5C55\u4E00\u4E2A\u7C7B\u5E76\u4E14\u8FD4\u56DE\u5B83</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u6DFB\u52A0\u5C5E\u6027\u7684\u6DF7\u5408\u4F8B\u5B50</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">TimesTamped</span><span class="token generic class-name"><span class="token operator">&lt;</span>TBase <span class="token keyword">extends</span> Constructor<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>Base<span class="token operator">:</span> TBase<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">extends</span></span> Base <span class="token punctuation">{</span>
    timestamp <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,14);function e(t,c){return p}var r=s(a,[["render",e]]);export{r as default};
