import{_ as n,o as s,c as a,a as e}from"./app.e9fd9ffa.js";const o={},p=e(`<h1 id="\u89E3\u6790\u5668" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790\u5668" aria-hidden="true">#</a> \u89E3\u6790\u5668</h1><p>TypeScript \u89E3\u6790\u5668\u4EE3\u7801\u5747\u4F4D\u4E8E <code>parser.ts</code> \u4E2D\u3002\u5728\u5185\u90E8\uFF0C\u7531\u89E3\u6790\u5668\u63A7\u5236\u626B\u63CF\u5668\u5C06\u6E90\u7801\u8F6C\u5316\u4E3A AST\u3002\u5176\u671F\u671B\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6E90\u7801 ~~ \u626B\u63CF\u5668 ~~&gt; Token \u6D41 ~~ \u89E3\u6790\u5668 ~~&gt; AST
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u89E3\u6790\u5668\u5B9E\u73B0\u539F\u7406\u662F\u5355\u4F8B\u6A21\u5F0F\uFF08\u5176\u539F\u56E0\u7C7B\u4F3C\u626B\u63CF\u5668\uFF0C\u5982\u679C\u80FD\u91CD\u65B0\u521D\u59CB\u5316\u5C31\u4E0D\u91CD\u65B0\u6784\u5EFA\uFF09\u3002\u5B9E\u9645\u5B9E\u73B0\u6210 <code>namespace Parser</code>\uFF0C\u5305\u542B\u89E3\u6790\u5668\u7684\u5404\u79CD<em>\u72B6\u6001</em>\u53D8\u91CF\u548C\u5355\u4F8B\u626B\u63CF\u5668\uFF08<code>const scanner</code>\uFF09\u3002\u8BE5\u626B\u63CF\u5668\u7531\u89E3\u6790\u5668\u51FD\u6570\u7BA1\u7406\u3002</p><h3 id="\u7A0B\u5E8F\u5BF9\u89E3\u6790\u5668\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7A0B\u5E8F\u5BF9\u89E3\u6790\u5668\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u7A0B\u5E8F\u5BF9\u89E3\u6790\u5668\u7684\u4F7F\u7528</h3><p>\u89E3\u6790\u5668\u7531\u7A0B\u5E8F\u95F4\u63A5\u9A71\u52A8\uFF08\u901A\u8FC7\u4E4B\u524D\u63D0\u5230\u8FC7\u7684 <code>CompilerHost</code>\uFF09\u3002\u57FA\u672C\u4E0A\uFF0C\u7B80\u5316\u7684\u8C03\u7528\u6808\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7A0B\u5E8F -&gt;
    CompilerHost.getSourceFile -&gt;
        (\u5168\u5C40\u51FD\u6570 parser.ts).createSourceFile -&gt;
            Parser.parseSourceFile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>parseSourceFile</code> \u4E0D\u4EC5\u51C6\u5907\u597D\u89E3\u6790\u5668\u7684\u72B6\u6001\uFF0C\u8FD8\u8C03\u7528 <code>initializeState</code> \u51C6\u5907\u597D\u626B\u63CF\u5668\u7684\u72B6\u6001\u3002\u7136\u540E\u4F7F\u7528 <code>parseSourceFileWorker</code> \u7EE7\u7EED\u89E3\u6790\u6E90\u4EE3\u7801\u3002</p><h3 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h3><p>\u6DF1\u5165\u89E3\u6790\u5668\u7684\u5185\u90E8\u4E4B\u524D\uFF0C\u8FD9\u91CC\u6709\u4E2A\u4F7F\u7528 TypeScript \u89E3\u6790\u5668\u7684\u793A\u4F8B\uFF0C\uFF08\u4F7F\u7528 <code>ts.createSourceFile</code>\uFF09\u83B7\u53D6\u4E00\u4E2A\u6E90\u6587\u4EF6\u7684 AST \u5E76\u6253\u5370\u5B83\u3002</p><p><code>code/compiler/parser/runParser.ts</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ts <span class="token keyword">from</span> <span class="token string">&#39;ntypescript&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">printAllChildren</span><span class="token punctuation">(</span>node<span class="token operator">:</span> ts<span class="token punctuation">.</span>Node<span class="token punctuation">,</span> depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;----&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ts<span class="token punctuation">.</span><span class="token function">formatSyntaxKind</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>kind<span class="token punctuation">)</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>pos<span class="token punctuation">,</span> node<span class="token punctuation">.</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>
  depth<span class="token operator">++</span><span class="token punctuation">;</span>
  node<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> <span class="token function">printAllChildren</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> depth<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> sourceCode <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
var foo = 123;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> sourceFile <span class="token operator">=</span> ts<span class="token punctuation">.</span><span class="token function">createSourceFile</span><span class="token punctuation">(</span><span class="token string">&#39;foo.ts&#39;</span><span class="token punctuation">,</span> sourceCode<span class="token punctuation">,</span> ts<span class="token punctuation">.</span>ScriptTarget<span class="token punctuation">.</span><span class="token constant">ES5</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printAllChildren</span><span class="token punctuation">(</span>sourceFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u6BB5\u4EE3\u7801\u4F1A\u6253\u5370\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>SourceFile <span class="token number">0</span> <span class="token number">14</span>
<span class="token operator">--</span><span class="token operator">--</span> SyntaxList <span class="token number">0</span> <span class="token number">14</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> VariableStatement <span class="token number">0</span> <span class="token number">14</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> VariableDeclarationList <span class="token number">0</span> <span class="token number">13</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> VarKeyword <span class="token number">0</span> <span class="token number">3</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> SyntaxList <span class="token number">3</span> <span class="token number">13</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> VariableDeclaration <span class="token number">3</span> <span class="token number">13</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> Identifier <span class="token number">3</span> <span class="token number">7</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> FirstAssignment <span class="token number">7</span> <span class="token number">9</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> FirstLiteralToken <span class="token number">9</span> <span class="token number">13</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> SemicolonToken <span class="token number">13</span> <span class="token number">14</span>
<span class="token operator">--</span><span class="token operator">--</span> EndOfFileToken <span class="token number">14</span> <span class="token number">14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u628A\u5934\u5411\u5DE6\u503E\uFF0C\u8FD9\u4E2A\u770B\u8D77\u6765\u50CF\u68F5\uFF08\u53F3\u4FA7\uFF09\u6811</p><h2 id="\u89E3\u6790\u5668\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790\u5668\u51FD\u6570" aria-hidden="true">#</a> \u89E3\u6790\u5668\u51FD\u6570</h2><p>\u5982\u524D\u6240\u8FF0\uFF0C<code>parseSourceFile</code> \u8BBE\u7F6E\u521D\u59CB\u72B6\u6001\u5E76\u5C06\u5DE5\u4F5C\u4EA4\u7ED9 <code>parseSourceFileWorker</code> \u51FD\u6570\u3002</p><h3 id="parsesourcefileworker" tabindex="-1"><a class="header-anchor" href="#parsesourcefileworker" aria-hidden="true">#</a> <code>parseSourceFileWorker</code></h3><p>\u8BE5\u51FD\u6570\u5148\u521B\u5EFA\u4E00\u4E2A <code>SourceFile</code> AST \u8282\u70B9\uFF0C\u7136\u540E\u4ECE <code>parseStatements</code> \u51FD\u6570\u5F00\u59CB\u89E3\u6790\u6E90\u4EE3\u7801\u3002\u4E00\u65E6\u8FD4\u56DE\u7ED3\u679C\uFF0C\u5C31\u7528\u989D\u5916\u4FE1\u606F\uFF08\u4F8B\u5982 <code>nodeCount</code>, <code>identifierCount</code>\u7B49\uFF09 \u5B8C\u5584 <code>SourceFile</code> \u8282\u70B9\u3002</p><h3 id="parsestatements" tabindex="-1"><a class="header-anchor" href="#parsestatements" aria-hidden="true">#</a> <code>parseStatements</code></h3><p>\u662F\u6700\u91CD\u8981\u7684 <code>parseXXX</code> \u7CFB\u51FD\u6570\u4E4B\u4E00\uFF08\u6982\u5FF5\u63A5\u4E0B\u6765\u4ECB\u7ECD\uFF09\u3002\u5B83\u6839\u636E\u626B\u63CF\u5668\u8FD4\u56DE\u7684\u5F53\u524D token \u6765\u5207\u6362\uFF08\u8C03\u7528\u76F8\u5E94\u7684 <code>parseXXX</code> \u51FD\u6570\uFF09\uFF0C\u4F8B\u5982\uFF1A\u5982\u679C\u5F53\u524D token \u662F\u4E00\u4E2A <code>SemicolonToken</code>\uFF08\u5206\u53F7\u6807\u8BB0\uFF09\uFF0C\u5C31\u4F1A\u8C03\u7528 <code>paserEmptyStatement</code> \u4E3A\u7A7A\u8BED\u53E5\u521B\u5EFA\u4E00\u4E2A AST \u8282\u70B9\u3002</p><h3 id="\u8282\u70B9\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u521B\u5EFA" aria-hidden="true">#</a> \u8282\u70B9\u521B\u5EFA</h3><p>\u89E3\u6790\u5668\u6709\u4E00\u7CFB\u5217 <code>parseXXX</code> \u51FD\u6570\u7528\u6765\u521B\u5EFA\u76F8\u5E94\u7C7B\u578B\u4E3A<code>XXX</code>\u7684\u8282\u70B9\uFF0C\u901A\u5E38\u5728\u76F8\u5E94\u7C7B\u578B\u7684\u8282\u70B9\u51FA\u73B0\u65F6\u88AB\uFF08\u5176\u4ED6\u89E3\u6790\u5668\u51FD\u6570\uFF09\u8C03\u7528\u3002\u8BE5\u8FC7\u7A0B\u7684\u5178\u578B\u793A\u4F8B\u662F\u89E3\u6790\u7A7A\u8BED\u53E5\uFF08\u4F8B\u5982 <code>;;;;;;</code>\uFF09\u65F6\u8981\u7528\u7684 <code>parseEmptyStatement()</code> \u51FD\u6570\u3002\u4E0B\u9762\u662F\u5176\u5168\u90E8\u4EE3\u7801\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">parseEmptyStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Statement <span class="token punctuation">{</span>
  <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token operator">&lt;</span>Statement<span class="token operator">&gt;</span><span class="token function">createNode</span><span class="token punctuation">(</span>SyntaxKind<span class="token punctuation">.</span>EmptyStatement<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">parseExpected</span><span class="token punctuation">(</span>SyntaxKind<span class="token punctuation">.</span>SemicolonToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">finishNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B83\u5C55\u793A\u4E86 3 \u4E2A\u5173\u952E\u51FD\u6570 <code>createNode</code>, <code>parseExpected</code> \u548C <code>finishNode</code>.</p><h4 id="createnode" tabindex="-1"><a class="header-anchor" href="#createnode" aria-hidden="true">#</a> <code>createNode</code></h4><p>\u89E3\u6790\u5668\u51FD\u6570 <code>function createNode(kind: SyntaxKind, pos?: number): Node</code> \u8D1F\u8D23\u521B\u5EFA\u8282\u70B9\uFF0C\u8BBE\u7F6E\u4F20\u5165\u7684 <code>SyntaxKind</code>\uFF08\u8BED\u6CD5\u7C7B\u522B\uFF09\uFF0C\u548C\u521D\u59CB\u4F4D\u7F6E\uFF08\u9ED8\u8BA4\u4F7F\u7528\u5F53\u524D\u626B\u63CF\u5668\u72B6\u6001\u63D0\u4F9B\u7684\u4F4D\u7F6E\u4FE1\u606F\uFF09\u3002</p><h4 id="parseexpected" tabindex="-1"><a class="header-anchor" href="#parseexpected" aria-hidden="true">#</a> <code>parseExpected</code></h4><p>\u89E3\u6790\u5668\u7684 <code>parseExpected</code> \u51FD\u6570 <code>function parseExpected(kind: SyntaxKind, diagnosticMessage?: DiagnosticMessage): boolean</code> \u4F1A\u68C0\u67E5\u89E3\u6790\u5668\u72B6\u6001\u4E2D\u7684\u5F53\u524D token \u662F\u5426\u4E0E\u6307\u5B9A\u7684 <code>SyntaxKind</code> \u5339\u914D\u3002\u5982\u679C\u4E0D\u5339\u914D\uFF0C\u5219\u4F1A\u5411\u4F20\u5165\u7684 <code>diagnosticMessage</code>\uFF08\u8BCA\u65AD\u6D88\u606F\uFF09\u62A5\u544A\uFF0C\u672A\u4F20\u5165\u5219\u521B\u5EFA\u67D0\u79CD\u901A\u7528\u5F62\u5F0F <code>xxx expected</code>\u3002\u8BE5\u51FD\u6570\u5185\u90E8\u7528 <code>parseErrorAtPosition</code> \u51FD\u6570\uFF08\u4F7F\u7528\u626B\u63CF\u4F4D\u7F6E\uFF09\u63D0\u4F9B\u826F\u597D\u7684\u9519\u8BEF\u62A5\u544A\u3002</p><h4 id="finishnode" tabindex="-1"><a class="header-anchor" href="#finishnode" aria-hidden="true">#</a> <code>finishNode</code></h4><p>\u89E3\u6790\u5668\u7684 <code>finishNode</code> \u51FD\u6570 <code>function finishNode&lt;T extends Node&gt;(node: T, end?: number): T</code> \u8BBE\u7F6E\u8282\u70B9\u7684 <code>end</code> \u4F4D\u7F6E\uFF0C\u5E76\u6DFB\u52A0\u4E00\u4E9B\u6709\u7528\u7684\u4FE1\u606F\uFF0C\u4F8B\u5982\u4E0A\u4E0B\u6587\u6807\u5FD7\uFF08<code>parserContextFlags</code>\uFF09\u4EE5\u53CA\u89E3\u6790\u8BE5\u8282\u70B9\u524D\u51FA\u73B0\u7684\u9519\u8BEF\uFF08\u5982\u679C\u6709\u9519\u7684\u8BDD\uFF0C\u5C31\u4E0D\u80FD\u5728\u589E\u91CF\u89E3\u6790\u4E2D\u91CD\u7528\u6B64 AST \u8282\u70B9\uFF09\u3002</p>`,31),t=[p];function c(r,l){return s(),a("div",null,t)}var d=n(o,[["render",c],["__file","parser.html.vue"]]);export{d as default};
