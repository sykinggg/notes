import{_ as t,r as o,o as c,c as l,b as s,d as p,e as n,a as e}from"./app.013e756e.js";const i={},r=s("h1",{id:"vue-js-\u6E90\u7801\u6784\u5EFA",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vue-js-\u6E90\u7801\u6784\u5EFA","aria-hidden":"true"},"#"),n(" Vue.js \u6E90\u7801\u6784\u5EFA")],-1),u=n("Vue.js \u6E90\u7801\u662F\u57FA\u4E8E "),k={href:"https://github.com/rollup/rollup",target:"_blank",rel:"noopener noreferrer"},d=n("Rollup"),v=n(" \u6784\u5EFA\u7684\uFF0C\u5B83\u7684\u6784\u5EFA\u76F8\u5173\u914D\u7F6E\u90FD\u5728 scripts \u76EE\u5F55\u4E0B\u3002"),m=e(`<h2 id="\u6784\u5EFA\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u811A\u672C" aria-hidden="true">#</a> \u6784\u5EFA\u811A\u672C</h2><p>\u901A\u5E38\u4E00\u4E2A\u57FA\u4E8E NPM \u6258\u7BA1\u7684\u9879\u76EE\u90FD\u4F1A\u6709\u4E00\u4E2A package.json \u6587\u4EF6\uFF0C\u5B83\u662F\u5BF9\u9879\u76EE\u7684\u63CF\u8FF0\u6587\u4EF6\uFF0C\u5B83\u7684\u5185\u5BB9\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u6807\u51C6\u7684 JSON \u5BF9\u8C61\u3002</p><p>\u901A\u5E38\u4F1A\u914D\u7F6E <code>script</code> \u5B57\u6BB5\u4F5C\u4E3A NPM \u7684\u6267\u884C\u811A\u672C\uFF0CVue.js \u6E90\u7801\u6784\u5EFA\u7684\u811A\u672C\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node scripts/build.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build:ssr&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run build -- web-runtime-cjs,web-server-renderer&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build:weex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run build -- weex&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u603B\u5171\u6709 3 \u6761\u547D\u4EE4\uFF0C\u4F5C\u7528\u90FD\u662F\u6784\u5EFA Vue.js\uFF0C\u540E\u9762 2 \u6761\u662F\u5728\u7B2C\u4E00\u6761\u547D\u4EE4\u7684\u57FA\u7840\u4E0A\uFF0C\u6DFB\u52A0\u4E00\u4E9B\u73AF\u5883\u53C2\u6570\u3002</p><p>\u5F53\u5728\u547D\u4EE4\u884C\u8FD0\u884C <code>npm run build</code> \u7684\u65F6\u5019\uFF0C\u5B9E\u9645\u4E0A\u5C31\u4F1A\u6267\u884C <code>node scripts/build.js</code>\uFF0C\u63A5\u4E0B\u6765\u6765\u770B\u770B\u5B83\u5B9E\u9645\u662F\u600E\u4E48\u6784\u5EFA\u7684\u3002</p><h2 id="\u6784\u5EFA\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u8FC7\u7A0B" aria-hidden="true">#</a> \u6784\u5EFA\u8FC7\u7A0B</h2><p>\u5BF9\u4E8E\u6784\u5EFA\u8FC7\u7A0B\u5206\u6790\u662F\u57FA\u4E8E\u6E90\u7801\u7684\uFF0C\u5148\u6253\u5F00\u6784\u5EFA\u7684\u5165\u53E3 JS \u6587\u4EF6\uFF0C\u5728 <code>scripts/build.js</code> \u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> builds <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./config&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAllBuilds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// filter builds via command line arg</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> filters <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
  builds <span class="token operator">=</span> builds<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">b</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> filters<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">f</span> <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>output<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> b<span class="token punctuation">.</span>_name<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// filter out weex builds by default</span>
  builds <span class="token operator">=</span> builds<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">b</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> b<span class="token punctuation">.</span>output<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;weex&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">build</span><span class="token punctuation">(</span>builds<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u903B\u8F91\u975E\u5E38\u7B80\u5355\uFF0C\u5148\u4ECE\u914D\u7F6E\u6587\u4EF6\u8BFB\u53D6\u914D\u7F6E\uFF0C\u518D\u901A\u8FC7\u547D\u4EE4\u884C\u53C2\u6570\u5BF9\u6784\u5EFA\u914D\u7F6E\u505A\u8FC7\u6EE4\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u6784\u5EFA\u51FA\u4E0D\u540C\u7528\u9014\u7684 Vue.js \u4E86\u3002\u63A5\u4E0B\u6765\u770B\u4E00\u4E0B\u914D\u7F6E\u6587\u4EF6\uFF0C\u5728 <code>scripts/config.js</code> \u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> builds <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// Runtime only (CommonJS). Used by bundlers e.g. Webpack &amp; Browserify</span>
  <span class="token string-property property">&#39;web-runtime-cjs&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;web/entry-runtime.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;dist/vue.runtime.common.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span><span class="token punctuation">,</span>
    banner
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// Runtime+compiler CommonJS build (CommonJS)</span>
  <span class="token string-property property">&#39;web-full-cjs&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;web/entry-runtime-with-compiler.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;dist/vue.common.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">he</span><span class="token operator">:</span> <span class="token string">&#39;./entity-decoder&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    banner
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// Runtime only (ES Modules). Used by bundlers that support ES Modules,</span>
  <span class="token comment">// e.g. Rollup &amp; Webpack 2</span>
  <span class="token string-property property">&#39;web-runtime-esm&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;web/entry-runtime.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;dist/vue.runtime.esm.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;es&#39;</span><span class="token punctuation">,</span>
    banner
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// Runtime+compiler CommonJS build (ES Modules)</span>
  <span class="token string-property property">&#39;web-full-esm&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;web/entry-runtime-with-compiler.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;dist/vue.esm.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;es&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">he</span><span class="token operator">:</span> <span class="token string">&#39;./entity-decoder&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    banner
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// runtime-only build (Browser)</span>
  <span class="token string-property property">&#39;web-runtime-dev&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;web/entry-runtime.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;dist/vue.runtime.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
    banner
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// runtime-only production build (Browser)</span>
  <span class="token string-property property">&#39;web-runtime-prod&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;web/entry-runtime.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;dist/vue.runtime.min.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
    banner
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// Runtime+compiler development build (Browser)</span>
  <span class="token string-property property">&#39;web-full-dev&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;web/entry-runtime-with-compiler.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;dist/vue.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">he</span><span class="token operator">:</span> <span class="token string">&#39;./entity-decoder&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    banner
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// Runtime+compiler production build  (Browser)</span>
  <span class="token string-property property">&#39;web-full-prod&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;web/entry-runtime-with-compiler.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;dist/vue.min.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">he</span><span class="token operator">:</span> <span class="token string">&#39;./entity-decoder&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    banner
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u5217\u4E3E\u4E86\u4E00\u4E9B Vue.js \u6784\u5EFA\u7684\u914D\u7F6E\uFF0C\u5173\u4E8E\u8FD8\u6709\u4E00\u4E9B\u670D\u52A1\u7AEF\u6E32\u67D3 webpack \u63D2\u4EF6\u4EE5\u53CA weex \u7684\u6253\u5305\u914D\u7F6E\u5C31\u4E0D\u5217\u4E3E\u4E86\u3002</p>`,12),b=n("\u5BF9\u4E8E\u5355\u4E2A\u914D\u7F6E\uFF0C\u5B83\u662F\u9075\u5FAA Rollup \u7684\u6784\u5EFA\u89C4\u5219\u7684\u3002\u5176\u4E2D "),y=s("code",null,"entry",-1),g=n(" \u5C5E\u6027\u8868\u793A\u6784\u5EFA\u7684\u5165\u53E3 JS \u6587\u4EF6\u5730\u5740\uFF0C"),h=s("code",null,"dest",-1),f=n(" \u5C5E\u6027\u8868\u793A\u6784\u5EFA\u540E\u7684 JS \u6587\u4EF6\u5730\u5740\u3002"),_=s("code",null,"format",-1),j=n(" \u5C5E\u6027\u8868\u793A\u6784\u5EFA\u7684\u683C\u5F0F\uFF0C"),w=s("code",null,"cjs",-1),x=n(" \u8868\u793A\u6784\u5EFA\u51FA\u6765\u7684\u6587\u4EF6\u9075\u5FAA "),V={href:"http://wiki.commonjs.org/wiki/Modules/1.1",target:"_blank",rel:"noopener noreferrer"},R=n("CommonJS"),q=n(" \u89C4\u8303\uFF0C"),S=s("code",null,"es",-1),J=n(" \u8868\u793A\u6784\u5EFA\u51FA\u6765\u7684\u6587\u4EF6\u9075\u5FAA "),C={href:"http://exploringjs.com/es6/ch_modules.html",target:"_blank",rel:"noopener noreferrer"},O=n("ES Module"),B=n(" \u89C4\u8303\u3002 "),M=s("code",null,"umd",-1),E=n(" \u8868\u793A\u6784\u5EFA\u51FA\u6765\u7684\u6587\u4EF6\u9075\u5FAA "),N={href:"https://github.com/umdjs/umd",target:"_blank",rel:"noopener noreferrer"},U=n("UMD"),I=n(" \u89C4\u8303\u3002"),L=e(`<p>\u4EE5 <code>web-runtime-cjs</code> \u914D\u7F6E\u4E3A\u4F8B\uFF0C\u5B83\u7684 <code>entry</code> \u662F <code>resolve(&#39;web/entry-runtime.js&#39;)</code>\uFF0C\u5148\u6765\u770B\u4E00\u4E0B <code>resolve</code> \u51FD\u6570\u7684\u5B9A\u4E49\u3002</p><p>\u6E90\u7801\u76EE\u5F55\uFF1A<code>scripts/config.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> aliases <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./alias&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token parameter">p</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> base <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>aliases<span class="token punctuation">[</span>base<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>aliases<span class="token punctuation">[</span>base<span class="token punctuation">]</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>base<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../&#39;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7684 <code>resolve</code> \u51FD\u6570\u5B9E\u73B0\u975E\u5E38\u7B80\u5355\uFF0C\u5B83\u5148\u628A <code>resolve</code> \u51FD\u6570\u4F20\u5165\u7684\u53C2\u6570 <code>p</code> \u901A\u8FC7 <code>/</code> \u505A\u4E86\u5206\u5272\u6210\u6570\u7EC4\uFF0C\u7136\u540E\u53D6\u6570\u7EC4\u7B2C\u4E00\u4E2A\u5143\u7D20\u8BBE\u7F6E\u4E3A <code>base</code>\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u53C2\u6570 <code>p</code> \u662F <code>web/entry-runtime.js</code>\uFF0C\u90A3\u4E48 <code>base</code> \u5219\u4E3A <code>web</code>\u3002<code>base</code> \u5E76\u4E0D\u662F\u5B9E\u9645\u7684\u8DEF\u5F84\uFF0C\u5B83\u7684\u771F\u5B9E\u8DEF\u5F84\u501F\u52A9\u4E86\u522B\u540D\u7684\u914D\u7F6E\uFF0C\u6765\u770B\u4E00\u4E0B\u522B\u540D\u914D\u7F6E\u7684\u4EE3\u7801\uFF0C\u5728 <code>scripts/alias</code> \u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">vue</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src/platforms/web/entry-runtime-with-compiler&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">compiler</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src/compiler&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">core</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src/core&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">shared</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src/shared&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">web</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src/platforms/web&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">weex</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src/platforms/weex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src/server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entries</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src/entries&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sfc</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src/sfc&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F88\u663E\u7136\uFF0C\u8FD9\u91CC <code>web</code> \u5BF9\u5E94\u7684\u771F\u5B9E\u7684\u8DEF\u5F84\u662F <code>path.resolve(__dirname, &#39;../src/platforms/web&#39;)</code>\uFF0C\u8FD9\u4E2A\u8DEF\u5F84\u5C31\u627E\u5230\u4E86 Vue.js \u6E90\u7801\u7684 web \u76EE\u5F55\u3002\u7136\u540E <code>resolve</code> \u51FD\u6570\u901A\u8FC7 <code>path.resolve(aliases[base], p.slice(base.length + 1))</code> \u627E\u5230\u4E86\u6700\u7EC8\u8DEF\u5F84\uFF0C\u5B83\u5C31\u662F Vue.js \u6E90\u7801 web \u76EE\u5F55\u4E0B\u7684 <code>entry-runtime.js</code>\u3002\u56E0\u6B64\uFF0C<code>web-runtime-cjs</code> \u914D\u7F6E\u5BF9\u5E94\u7684\u5165\u53E3\u6587\u4EF6\u5C31\u627E\u5230\u4E86\u3002</p><p>\u5B83\u7ECF\u8FC7 Rollup \u7684\u6784\u5EFA\u6253\u5305\u540E\uFF0C\u6700\u7EC8\u4F1A\u5728 dist \u76EE\u5F55\u4E0B\u751F\u6210 <code>vue.runtime.common.js</code>\u3002</p><h2 id="runtime-only-vs-runtime-compiler" tabindex="-1"><a class="header-anchor" href="#runtime-only-vs-runtime-compiler" aria-hidden="true">#</a> Runtime Only VS Runtime + Compiler</h2><p>\u901A\u5E38\u5229\u7528 vue-cli \u53BB\u521D\u59CB\u5316\u7684 Vue.js \u9879\u76EE\u7684\u65F6\u5019\u4F1A\u8BE2\u95EE\u7528 Runtime Only \u7248\u672C\u7684\u8FD8\u662F Runtime + Compiler \u7248\u672C\u3002\u4E0B\u9762\u6765\u5BF9\u6BD4\u8FD9\u4E24\u4E2A\u7248\u672C\u3002</p><ul><li>Runtime Only</li></ul><p>\u5728\u4F7F\u7528 Runtime Only \u7248\u672C\u7684 Vue.js \u7684\u65F6\u5019\uFF0C\u901A\u5E38\u9700\u8981\u501F\u52A9\u5982 webpack \u7684 vue-loader \u5DE5\u5177\u628A .vue \u6587\u4EF6\u7F16\u8BD1\u6210 JavaScript\uFF0C\u56E0\u4E3A\u662F\u5728\u7F16\u8BD1\u9636\u6BB5\u505A\u7684\uFF0C\u6240\u4EE5\u5B83\u53EA\u5305\u542B\u8FD0\u884C\u65F6\u7684 Vue.js \u4EE3\u7801\uFF0C\u56E0\u6B64\u4EE3\u7801\u4F53\u79EF\u4E5F\u4F1A\u66F4\u8F7B\u91CF\u3002</p><ul><li>Runtime + Compiler</li></ul><p>\u5982\u679C\u6CA1\u6709\u5BF9\u4EE3\u7801\u505A\u9884\u7F16\u8BD1\uFF0C\u4F46\u53C8\u4F7F\u7528\u4E86 Vue \u7684 template \u5C5E\u6027\u5E76\u4F20\u5165\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5219\u9700\u8981\u5728\u5BA2\u6237\u7AEF\u7F16\u8BD1\u6A21\u677F\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9700\u8981\u7F16\u8BD1\u5668\u7684\u7248\u672C</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;{{ hi }}&lt;/div&gt;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD9\u79CD\u60C5\u51B5\u4E0D\u9700\u8981</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>hi<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A\u5728 Vue.js 2.0 \u4E2D\uFF0C\u6700\u7EC8\u6E32\u67D3\u90FD\u662F\u901A\u8FC7 <code>render</code> \u51FD\u6570\uFF0C\u5982\u679C\u5199 <code>template</code> \u5C5E\u6027\uFF0C\u5219\u9700\u8981\u7F16\u8BD1\u6210 <code>render</code> \u51FD\u6570\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7F16\u8BD1\u8FC7\u7A0B\u4F1A\u53D1\u751F\u8FD0\u884C\u65F6\uFF0C\u6240\u4EE5\u9700\u8981\u5E26\u6709\u7F16\u8BD1\u5668\u7684\u7248\u672C\u3002</p><p>\u5F88\u663E\u7136\uFF0C\u8FD9\u4E2A\u7F16\u8BD1\u8FC7\u7A0B\u5BF9\u6027\u80FD\u4F1A\u6709\u4E00\u5B9A\u635F\u8017\uFF0C\u6240\u4EE5\u901A\u5E38\u66F4\u63A8\u8350\u4F7F\u7528 Runtime-Only \u7684 Vue.js\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u901A\u8FC7\u8FD9\u4E00\u8282\u7684\u5206\u6790\uFF0C\u53EF\u4EE5\u4E86\u89E3\u5230 Vue.js \u7684\u6784\u5EFA\u6253\u5305\u8FC7\u7A0B\uFF0C\u4E5F\u77E5\u9053\u4E86\u4E0D\u540C\u4F5C\u7528\u548C\u529F\u80FD\u7684 Vue.js \u5B83\u4EEC\u5BF9\u5E94\u7684\u5165\u53E3\u4EE5\u53CA\u6700\u7EC8\u7F16\u8BD1\u751F\u6210\u7684 JS \u6587\u4EF6\u3002\u5C3D\u7BA1\u5728\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u4F1A\u7528 Runtime Only \u7248\u672C\u5F00\u53D1\u6BD4\u8F83\u591A\uFF0C\u4F46\u4E3A\u4E86\u5206\u6790 Vue \u7684\u7F16\u8BD1\u8FC7\u7A0B\uFF0C\u8FD9\u95E8\u8BFE\u91CD\u70B9\u5206\u6790\u7684\u6E90\u7801\u662F Runtime + Compiler \u7684 Vue.js\u3002</p>`,18);function P(W,A){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,s("p",null,[u,s("a",k,[d,p(a)]),v]),m,s("p",null,[b,y,g,h,f,_,j,w,x,s("a",V,[R,p(a)]),q,S,J,s("a",C,[O,p(a)]),B,M,E,s("a",N,[U,p(a)]),I]),L])}var T=t(i,[["render",P],["__file","build.html.vue"]]);export{T as default};
