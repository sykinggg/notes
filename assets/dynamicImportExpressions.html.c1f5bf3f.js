import{r as p,o,c as e,a as n,d as t,F as c,b as s,e as r}from"./app.8a201290.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"\u52A8\u6001\u5BFC\u5165\u8868\u8FBE\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u52A8\u6001\u5BFC\u5165\u8868\u8FBE\u5F0F","aria-hidden":"true"},"#"),s(" \u52A8\u6001\u5BFC\u5165\u8868\u8FBE\u5F0F")],-1),k=s("\u52A8\u6001\u5BFC\u5165\u8868\u8FBE\u5F0F\u662F ECMAScript \u7684\u4E00\u4E2A\u65B0\u529F\u80FD\uFF0C\u5B83\u5141\u8BB8\u4F60\u5728\u7A0B\u5E8F\u7684\u4EFB\u610F\u4F4D\u7F6E\u5F02\u6B65\u52A0\u8F7D\u4E00\u4E2A\u6A21\u5757\uFF0CTC39 JavaScript \u59D4\u5458\u4F1A\u6709\u4E00\u4E2A\u63D0\u6848\uFF0C\u76EE\u524D\u5904\u4E8E\u7B2C\u56DB\u9636\u6BB5\uFF0C\u5B83\u88AB\u79F0\u4E3A "),m={href:"https://github.com/tc39/proposal-dynamic-import",target:"_blank",rel:"noopener noreferrer"},b=s("import() proposal for JavaScript"),d=s("\u3002"),_=s("\u6B64\u5916\uFF0C"),g=n("strong",null,"webpack",-1),q=s(" bundler \u6709\u4E00\u4E2A "),h={href:"https://webpack.js.org/guides/code-splitting/",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"Code Splitting",-1),f=s(" \u529F\u80FD\uFF0C\u5B83\u80FD\u5141\u8BB8\u4F60\u5C06\u4EE3\u7801\u62C6\u5206\u4E3A\u8BB8\u591A\u5757\uFF0C\u8FD9\u4E9B\u5757\u5728\u5C06\u6765\u53EF\u88AB\u5F02\u6B65\u4E0B\u8F7D\u3002\u56E0\u6B64\uFF0C\u4F60\u53EF\u4EE5\u5728\u7A0B\u5E8F\u4E2D\u9996\u5148\u63D0\u4F9B\u4E00\u4E2A\u6700\u5C0F\u7684\u7A0B\u5E8F\u542F\u52A8\u5305\uFF0C\u5E76\u5728\u5C06\u6765\u5F02\u6B65\u52A0\u8F7D\u5176\u4ED6\u6A21\u5757\u3002"),v=s("\u8FD9\u5F88\u81EA\u7136\u5C31\u4F1A\u8BA9\u4EBA\u60F3\u5230\uFF08\u5982\u679C\u5DE5\u4F5C\u5728 webpack dev \u7684\u5DE5\u4F5C\u6D41\u7A0B\u4E2D\uFF09"),x={href:"https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#dynamic-import-expressions",target:"_blank",rel:"noopener noreferrer"},S=s("TypeScript 2.4 dynamic import expressions"),w=s(" \u5C06\u4F1A\u628A\u4F60\u6700\u7EC8\u751F\u6210\u7684 JavaScript \u4EE3\u7801\u81EA\u52A8\u5206\u5272\u6210\u5F88\u591A\u5757\u3002\u4F46\u662F\u8FD9\u4F3C\u4E4E\u5E76\u4E0D\u5BB9\u6613\u5B9E\u73B0\uFF0C\u56E0\u4E3A\u5B83\u4F9D\u8D56\u4E8E\u6B63\u5728\u4F7F\u7528\u7684 "),j=n("code",null,"tsconfig.json",-1),T=s(" \u914D\u7F6E\u6587\u4EF6\u3002"),C=r(`<p>webpack \u5B9E\u73B0\u4EE3\u7801\u5206\u5272\u7684\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A\u4F7F\u7528 <code>import()</code> \uFF08\u9996\u9009\uFF0CECMAScript \u7684\u63D0\u6848\uFF09\u548C <code>require.ensure()</code> \uFF08\u6700\u540E\u8003\u8651\uFF0Cwebpack \u5177\u4F53\u5B9E\u73B0\uFF09\u3002\u56E0\u6B64\uFF0C\u671F\u671B TypeScript \u7684\u8F93\u51FA\u662F\u4FDD\u7559 <code>import()</code> \u8BED\u53E5\uFF0C\u800C\u4E0D\u662F\u5C06\u5176\u8F6C\u5316\u4E3A\u5176\u4ED6\u4EFB\u4F55\u4EE3\u7801\u3002</p><p>\u8BA9\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6F14\u793A\u4E86\u5982\u4F55\u914D\u7F6E webpack \u548C TypeScript 2.4 +\u3002</p><p>\u5728\u4E0B\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u6211\u5E0C\u671B\u61D2\u52A0\u8F7D <code>moment</code> \u5E93\uFF0C\u540C\u65F6\u6211\u4E5F\u5E0C\u671B\u4F7F\u7528\u4EE3\u7801\u5206\u5272\u7684\u529F\u80FD\uFF0C\u8FD9\u610F\u5473 <code>moment</code> \u4F1A\u88AB\u5206\u5272\u5230\u4E00\u4E2A\u5355\u72EC\u7684 JavaScript \u6587\u4EF6\uFF0C\u5F53\u5B83\u88AB\u4F7F\u7528\u65F6\uFF0C\u4F1A\u88AB\u5F02\u6B65\u52A0\u8F7D\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;momentjs&quot; */</span> <span class="token string">&#39;moment&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>moment <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u61D2\u52A0\u8F7D\u7684\u6A21\u5757\u62E5\u6709\u6240\u6709\u7684\u7C7B\u578B\uFF0C\u5E76\u4E14\u80FD\u591F\u6309\u671F\u5DE5\u4F5C</span>
    <span class="token comment">// \u7C7B\u578B\u68C0\u67E5\u4F1A\u5DE5\u4F5C\uFF0C\u4EE3\u7801\u5F15\u7528\u4E5F\u4F1A\u5DE5\u4F5C  :100:</span>
    <span class="token keyword">const</span> time <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;TypeScript &gt;= 2.4.0 Dynamic Import Expression:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>err <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Failed to load moment&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8FD9\u662F <code>tsconfig.json</code> \u7684\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;dom&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;scripthost&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;es2015.promise&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/js&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;./node_modules/@types&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;react-dom&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,6),E={class:"custom-container danger"},I=n("p",{class:"custom-container-title"},"\u91CD\u8981\u7684\u63D0\u793A",-1),N=n("li",null,[s("\u4F7F\u7528 "),n("code",null,'"module": "esnext"'),s(" \u9009\u9879\uFF1ATypeScript \u4FDD\u7559 "),n("code",null,"import()"),s(" \u8BED\u53E5\uFF0C\u8BE5\u8BED\u53E5\u7528\u4E8E Webpack Code Splitting\u3002")],-1),J=s("\u8FDB\u4E00\u6B65\u4E86\u89E3\u6709\u5173\u4FE1\u606F\uFF0C\u63A8\u8350\u9605\u8BFB\u8FD9\u7BC7\u6587\u7AE0\uFF1A"),M={href:"https://blog.josequinto.com/2017/06/29/dynamic-import-expressions-and-webpack-code-splitting-integration-with-typescript-2-4/",target:"_blank",rel:"noopener noreferrer"},V=s("Dynamic Import Expressions and webpack 2 Code Splitting integration with TypeScript 2.4.");function B(D,F){const a=p("ExternalLinkIcon");return o(),e(c,null,[u,n("p",null,[k,n("a",m,[b,t(a)]),d]),n("p",null,[_,g,q,n("a",h,[y,t(a)]),f]),n("p",null,[v,n("a",x,[S,t(a)]),w,j,T]),C,n("div",E,[I,n("ul",null,[N,n("li",null,[J,n("a",M,[V,t(a)])])])])],64)}var R=l(i,[["render",B]]);export{R as default};
