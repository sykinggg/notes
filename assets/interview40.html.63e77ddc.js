import{_ as a,o as n,c as s,a as t}from"./app.e9fd9ffa.js";const p={},e=t(`<p>\u65B0\u7684form\u5C5E\u6027</p><ul><li><p>autocomplete</p></li><li><p>novalidate</p></li></ul><p>\u65B0\u7684input\u5C5E\u6027</p><ul><li><p>\u65B0\u7C7B\u578B\uFF1Acolor\uFF0Cdate\uFF0Cemail\uFF0Cmonth\uFF0Cnumber\uFF0Crange\uFF0Csearch\uFF0Ctel\uFF0Ctime\uFF0Cweek\u3002</p></li><li><p>\u65B0\u5C5E\u6027\uFF1Aautocomplate\uFF0Cautofocus\uFF0Clist\uFF0Cplaceholder</p></li></ul><h2 id="autocomplete-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#autocomplete-\u5C5E\u6027" aria-hidden="true">#</a> <strong>autocomplete \u5C5E\u6027</strong></h2><p><code>autocomplete</code> \u5C5E\u6027\u89C4\u5B9A form \u6216 input \u57DF\u5E94\u8BE5\u62E5\u6709\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\u3002</p><p><strong>\u6CE8\u91CA</strong>\uFF1Aautocomplete \u9002\u7528\u4E8E <code>&lt;form&gt;</code> \u6807\u7B7E\uFF0C\u4EE5\u53CA\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1A<code>text</code>, <code>search</code>, <code>url</code>, <code>telephone</code>, <code>email</code>, <code>password</code>, <code>datepickers</code>, <code>range</code> \u4EE5\u53CA <code>color</code>\u3002</p><p>\u5F53\u7528\u6237\u5728\u81EA\u52A8\u5B8C\u6210\u57DF\u4E2D\u5F00\u59CB\u8F93\u5165\u65F6\uFF0C\u6D4F\u89C8\u5668\u5E94\u8BE5\u5728\u8BE5\u57DF\u4E2D\u663E\u793A\u586B\u5199\u7684\u9009\u9879\uFF1A</p><p><strong>\u5B9E\u4F8B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo_form.asp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>get<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    First name: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fname<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    Last name: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lname<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    E-mail: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u91CA</strong>\uFF1A\u5728\u67D0\u4E9B\u6D4F\u89C8\u5668\u4E2D\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u542F\u7528\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\uFF0C\u4EE5\u4F7F\u8BE5\u5C5E\u6027\u751F\u6548\u3002</p><h2 id="autofocus-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#autofocus-\u5C5E\u6027" aria-hidden="true">#</a> <strong>autofocus \u5C5E\u6027</strong></h2><p><code>autofocus</code> \u5C5E\u6027\u89C4\u5B9A\u5728\u9875\u9762\u52A0\u8F7D\u65F6\uFF0C\u57DF\u81EA\u52A8\u5730\u83B7\u5F97\u7126\u70B9\u3002</p><p><strong>\u6CE8\u91CA</strong>\uFF1Aautofocus \u5C5E\u6027\u9002\u7528\u4E8E\u6240\u6709 <code>&lt;input&gt;</code> \u6807\u7B7E\u7684\u7C7B\u578B\u3002</p><p><strong>\u5B9E\u4F8B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>User name: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_name<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">autofocus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>autofocus<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="form-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#form-\u5C5E\u6027" aria-hidden="true">#</a> <strong>form \u5C5E\u6027</strong></h2><p><code>form</code> \u5C5E\u6027\u89C4\u5B9A\u8F93\u5165\u57DF\u6240\u5C5E\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u8868\u5355\u3002</p><p><strong>\u6CE8\u91CA</strong>\uFF1Aform \u5C5E\u6027\u9002\u7528\u4E8E\u6240\u6709 <code>&lt;input&gt;</code> \u6807\u7B7E\u7684\u7C7B\u578B\u3002</p><p>form \u5C5E\u6027\u5FC5\u987B\u5F15\u7528\u6240\u5C5E\u8868\u5355\u7684 id\uFF1A</p><p><strong>\u5B9E\u4F8B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo_form.asp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>get<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_form<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    First name:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fname<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
Last name: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lname<span class="token punctuation">&quot;</span></span> <span class="token attr-name">form</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_form<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u91CA</strong>\uFF1A\u5982\u9700\u5F15\u7528\u4E00\u4E2A\u4EE5\u4E0A\u7684\u8868\u5355\uFF0C\u8BF7\u4F7F\u7528\u7A7A\u683C\u5206\u9694\u7684\u5217\u8868\u3002</p><h2 id="\u8868\u5355\u91CD\u5199\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355\u91CD\u5199\u5C5E\u6027" aria-hidden="true">#</a> <strong>\u8868\u5355\u91CD\u5199\u5C5E\u6027</strong></h2><p>\u8868\u5355\u91CD\u5199\u5C5E\u6027\uFF08form override attributes\uFF09\u5141\u8BB8\u60A8\u91CD\u5199 form \u5143\u7D20\u7684\u67D0\u4E9B\u5C5E\u6027\u8BBE\u5B9A\u3002</p><p>\u8868\u5355\u91CD\u5199\u5C5E\u6027\u6709\uFF1A</p><ul><li><p><code>formaction</code> - \u91CD\u5199\u8868\u5355\u7684 action \u5C5E\u6027</p></li><li><p><code>formenctype</code> - \u91CD\u5199\u8868\u5355\u7684 enctype \u5C5E\u6027</p></li><li><p><code>formmethod</code> - \u91CD\u5199\u8868\u5355\u7684 method \u5C5E\u6027</p></li><li><p><code>formnovalidate</code> - \u91CD\u5199\u8868\u5355\u7684 novalidate \u5C5E\u6027</p></li><li><p><code>formtarget</code> - \u91CD\u5199\u8868\u5355\u7684 target \u5C5E\u6027</p></li></ul><p><strong>\u6CE8\u91CA</strong>\uFF1A\u8868\u5355\u91CD\u5199\u5C5E\u6027\u9002\u7528\u4E8E\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1A<code>submit</code> \u548C <code>image</code>\u3002</p><p><strong>\u5B9E\u4F8B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo_form.asp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>get<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_form<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
E-mail: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userid<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Submit<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">formaction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo_admin.asp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Submit as admin<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">formnovalidate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Submit without validation<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u91CA</strong>\uFF1A\u8FD9\u4E9B\u5C5E\u6027\u5BF9\u4E8E\u521B\u5EFA\u4E0D\u540C\u7684\u63D0\u4EA4\u6309\u94AE\u5F88\u6709\u5E2E\u52A9\u3002</p><h2 id="height-\u548C-width-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#height-\u548C-width-\u5C5E\u6027" aria-hidden="true">#</a> <strong>height \u548C width \u5C5E\u6027</strong></h2><p>height \u548C width \u5C5E\u6027\u89C4\u5B9A\u7528\u4E8E image \u7C7B\u578B\u7684 input \u6807\u7B7E\u7684\u56FE\u50CF\u9AD8\u5EA6\u548C\u5BBD\u5EA6\u3002</p><p><strong>\u6CE8\u91CA</strong>\uFF1Aheight \u548C width \u5C5E\u6027\u53EA\u9002\u7528\u4E8E <code>image</code> \u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\u3002</p><p><strong>\u5B9E\u4F8B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img_submit.gif<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>99<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>99<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="list-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#list-\u5C5E\u6027" aria-hidden="true">#</a> <strong>list \u5C5E\u6027</strong></h2><p><code>list</code> \u5C5E\u6027\u89C4\u5B9A\u8F93\u5165\u57DF\u7684 datalist\u3002datalist \u662F\u8F93\u5165\u57DF\u7684\u9009\u9879\u5217\u8868\u3002</p><p><strong>\u6CE8\u91CA</strong>\uFF1A<code>list</code> \u5C5E\u6027\u9002\u7528\u4E8E\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1A<code>text</code>, <code>search</code>, <code>url</code>, <code>telephone</code>, <code>email</code>, <code>date pickers</code>, <code>number</code>, <code>range</code> \u4EE5\u53CA <code>color</code>\u3002</p><p><strong>\u5B9E\u4F8B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>Webpage: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url_list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>link<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datalist</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url_list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>W3Schools<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3school.com.cn<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Google<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.google.com<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Microsoft<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.microsoft.com<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>datalist</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="min\u3001max-\u548C-step-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#min\u3001max-\u548C-step-\u5C5E\u6027" aria-hidden="true">#</a> <strong>min\u3001max \u548C step \u5C5E\u6027</strong></h2><p>min\u3001max \u548C step \u5C5E\u6027\u7528\u4E8E\u4E3A\u5305\u542B\u6570\u5B57\u6216\u65E5\u671F\u7684 input \u7C7B\u578B\u89C4\u5B9A\u9650\u5B9A\uFF08\u7EA6\u675F\uFF09\u3002</p><p><code>max</code> \u5C5E\u6027\u89C4\u5B9A\u8F93\u5165\u57DF\u6240\u5141\u8BB8\u7684\u6700\u5927\u503C\u3002</p><p><code>min</code> \u5C5E\u6027\u89C4\u5B9A\u8F93\u5165\u57DF\u6240\u5141\u8BB8\u7684\u6700\u5C0F\u503C\u3002</p><p><code>step</code> \u5C5E\u6027\u4E3A\u8F93\u5165\u57DF\u89C4\u5B9A\u5408\u6CD5\u7684\u6570\u5B57\u95F4\u9694\uFF08\u5982\u679C step=&quot;3&quot;\uFF0C\u5219\u5408\u6CD5\u7684\u6570\u662F -3,0,3,6 \u7B49\uFF09\u3002</p><p><strong>\u6CE8\u91CA</strong>\uFF1Amin\u3001max \u548C step \u5C5E\u6027\u9002\u7528\u4E8E\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1A<code>date pickers</code>\u3001<code>number</code> \u4EE5\u53CA <code>range</code>\u3002</p><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u663E\u793A\u4E00\u4E2A\u6570\u5B57\u57DF\uFF0C\u8BE5\u57DF\u63A5\u53D7\u4ECB\u4E8E 0 \u5230 10 \u4E4B\u95F4\u7684\u503C\uFF0C\u4E14\u6B65\u8FDB\u4E3A 3\uFF08\u5373\u5408\u6CD5\u7684\u503C\u4E3A 0\u30013\u30016 \u548C 9\uFF09\uFF1A</p><p><strong>\u5B9E\u4F8B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>Points: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>points<span class="token punctuation">&quot;</span></span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="multiple-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#multiple-\u5C5E\u6027" aria-hidden="true">#</a> <strong>multiple \u5C5E\u6027</strong></h2><p><code>multiple</code> \u5C5E\u6027\u89C4\u5B9A\u8F93\u5165\u57DF\u4E2D\u53EF\u9009\u62E9\u591A\u4E2A\u503C\u3002</p><p><strong>\u6CE8\u91CA</strong>\uFF1Amultiple \u5C5E\u6027\u9002\u7528\u4E8E\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1A<code>email</code> \u548C <code>file</code>\u3002</p><p><strong>\u5B9E\u4F8B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>Select images: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">multiple</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multiple<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="novalidate-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#novalidate-\u5C5E\u6027" aria-hidden="true">#</a> <strong>novalidate \u5C5E\u6027</strong></h2><p><code>novalidate</code> \u5C5E\u6027\u89C4\u5B9A\u5728\u63D0\u4EA4\u8868\u5355\u65F6\u4E0D\u5E94\u8BE5\u9A8C\u8BC1 form \u6216 input \u57DF\u3002</p><p>\u6CE8\u91CA\uFF1Anovalidate \u5C5E\u6027\u9002\u7528\u4E8E <code>&lt;form&gt;</code> \u4EE5\u53CA\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1A<code>text</code>, <code>search</code>, <code>url</code>, <code>telephone</code>, <code>email</code>, <code>password</code>, <code>date pickers</code>, <code>range</code> \u4EE5\u53CA <code>color</code>.</p><p><strong>\u5B9E\u4F8B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo_form.asp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>get<span class="token punctuation">&quot;</span></span> <span class="token attr-name">novalidate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
E-mail: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_email<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pattern-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#pattern-\u5C5E\u6027" aria-hidden="true">#</a> <strong>pattern \u5C5E\u6027</strong></h2><p><code>pattern</code> \u5C5E\u6027\u89C4\u5B9A\u7528\u4E8E\u9A8C\u8BC1 input \u57DF\u7684\u6A21\u5F0F\uFF08pattern\uFF09\u3002</p><p>\u6A21\u5F0F\uFF08pattern\uFF09 \u662F\u6B63\u5219\u8868\u8FBE\u5F0F\u3002</p><p><strong>\u6CE8\u91CA</strong>\uFF1Apattern \u5C5E\u6027\u9002\u7528\u4E8E\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1A<code>text</code>, <code>search</code>, <code>url</code>, <code>telephone</code>, <code>email</code> \u4EE5\u53CA <code>password</code>\u3002</p><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u663E\u793A\u4E86\u4E00\u4E2A\u53EA\u80FD\u5305\u542B\u4E09\u4E2A\u5B57\u6BCD\u7684\u6587\u672C\u57DF\uFF08\u4E0D\u542B\u6570\u5B57\u53CA\u7279\u6B8A\u5B57\u7B26\uFF09\uFF1A</p><p><strong>\u5B9E\u4F8B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>Country code: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>country_code<span class="token punctuation">&quot;</span></span>
<span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[A-z]{3}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Three letter country code<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="placeholder-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#placeholder-\u5C5E\u6027" aria-hidden="true">#</a> <strong>placeholder \u5C5E\u6027</strong></h2><p><code>placeholder</code> \u5C5E\u6027\u63D0\u4F9B\u4E00\u79CD\u63D0\u793A\uFF08hint\uFF09\uFF0C\u63CF\u8FF0\u8F93\u5165\u57DF\u6240\u671F\u5F85\u7684\u503C\u3002</p><p><strong>\u6CE8\u91CA</strong>\uFF1Aplaceholder \u5C5E\u6027\u9002\u7528\u4E8E\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1A<code>text</code>, <code>search</code>, <code>url</code>, <code>telephone</code>, <code>email</code> \u4EE5\u53CA <code>password</code>\u3002</p><p>\u63D0\u793A\uFF08hint\uFF09\u4F1A\u5728\u8F93\u5165\u57DF\u4E3A\u7A7A\u65F6\u663E\u793A\u51FA\u73B0\uFF0C\u4F1A\u5728\u8F93\u5165\u57DF\u83B7\u5F97\u7126\u70B9\u65F6\u6D88\u5931\uFF1A</p><p><strong>\u5B9E\u4F8B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_search<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Search W3School<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="required-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#required-\u5C5E\u6027" aria-hidden="true">#</a> <strong>required \u5C5E\u6027</strong></h2><p><code>required</code> \u5C5E\u6027\u89C4\u5B9A\u5FC5\u987B\u5728\u63D0\u4EA4\u4E4B\u524D\u586B\u5199\u8F93\u5165\u57DF\uFF08\u4E0D\u80FD\u4E3A\u7A7A\uFF09\u3002</p><p><strong>\u6CE8\u91CA</strong>\uFF1Arequired \u5C5E\u6027\u9002\u7528\u4E8E\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1A<code>text</code>, <code>search</code>, <code>url</code>, <code>telephone</code>, <code>email</code>, <code>password</code>, <code>date pickers</code>, <code>number</code>, <code>checkbox</code>, <code>radio</code> \u4EE5\u53CA <code>file</code>\u3002</p><p><strong>\u5B9E\u4F8B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>Name: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>usr_name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>required<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,78),o=[e];function c(u,l){return n(),s("div",null,o)}var r=a(p,[["render",c],["__file","interview40.html.vue"]]);export{r as default};
