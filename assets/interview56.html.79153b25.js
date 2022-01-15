import{a as e}from"./app.78b6d3a3.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},o=e('<h2 id="web-speech-\u7684\u6982\u5FF5\u53CA\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#web-speech-\u7684\u6982\u5FF5\u53CA\u7528\u6CD5" aria-hidden="true">#</a> <strong>Web Speech \u7684\u6982\u5FF5\u53CA\u7528\u6CD5</strong></h2><ul><li><p>\u8BED\u97F3\u8BC6\u522B\u901A\u8FC7 <code>SpeechRecognition</code> \u63A5\u53E3\u8FDB\u884C\u8BBF\u95EE\uFF0C\u5B83\u63D0\u4F9B\u4E86\u8BC6\u522B\u4ECE\u97F3\u9891\u8F93\u5165\uFF08\u901A\u5E38\u662F\u8BBE\u5907\u9ED8\u8BA4\u7684\u8BED\u97F3\u8BC6\u522B\u670D\u52A1\uFF09\u4E2D\u8BC6\u522B\u8BED\u97F3\u60C5\u666F\u7684\u80FD\u529B\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u5C06\u4F7F\u7528\u8BE5\u63A5\u53E3\u7684\u6784\u9020\u51FD\u6570\u6765\u6784\u9020\u4E00\u4E2A\u65B0\u7684 <code>SpeechRecognition</code> \u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5305\u542B\u4E86\u4E00\u4E9B\u5217\u6709\u6548\u7684\u5BF9\u8C61\u5904\u7406\u51FD\u6570\u6765\u68C0\u6D4B\u8BC6\u522B\u8BBE\u5907\u9EA6\u514B\u98CE\u4E2D\u7684\u8BED\u97F3\u8F93\u5165\u3002<code>SpeechGrammar</code> \u63A5\u53E3\u5219\u8868\u793A\u4E86\u5E94\u7528\u4E2D\u60F3\u8981\u8BC6\u522B\u7684\u7279\u5B9A\u6587\u6CD5\u3002\u6587\u6CD5\u5219\u901A\u8FC7 JSpeech Grammar Format (JSGF.) \u6765\u5B9A\u4E49\u3002</p></li><li><p>\u8BED\u97F3\u5408\u6210\u901A\u8FC7 <code>SpeechSynthesis</code> \u63A5\u53E3\u8FDB\u884C\u8BBF\u95EE\uFF0C\u5B83\u63D0\u4F9B\u4E86\u6587\u5B57\u5230\u8BED\u97F3\uFF08TTS\uFF09\u7684\u80FD\u529B\uFF0C\u8FD9\u4F7F\u5F97\u7A0B\u5E8F\u80FD\u591F\u8BFB\u51FA\u5B83\u4EEC\u7684\u6587\u5B57\u5185\u5BB9\uFF08\u901A\u5E38\u4F7F\u7528\u8BBE\u5907\u9ED8\u8BA4\u7684\u8BED\u97F3\u5408\u6210\u5668\uFF09\u3002\u4E0D\u540C\u7684\u58F0\u97F3\u7C7B\u7C7B\u578B\u901A\u8FC7 <code>SpeechSynthesisVoice</code> \u5BF9\u8C61\u8FDB\u884C\u8868\u793A\uFF0C\u4E0D\u540C\u90E8\u5206\u7684\u6587\u5B57\u5219\u7531 <code>SpeechSynthesisUtterance</code> \u5BF9\u8C61\u6765\u8868\u793A\u3002\u53EF\u4EE5\u5C06\u5B83\u4EEC\u4F20\u9012\u7ED9 <code>SpeechSynthesis.speak()</code> \u65B9\u6CD5\u6765\u4EA7\u751F\u8BED\u97F3\u3002</p></li></ul><h1 id="web-speech-\u7684-api-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#web-speech-\u7684-api-\u63A5\u53E3" aria-hidden="true">#</a> Web Speech \u7684 API \u63A5\u53E3</h1><h2 id="\u8BED\u97F3\u8BC6\u522B" tabindex="-1"><a class="header-anchor" href="#\u8BED\u97F3\u8BC6\u522B" aria-hidden="true">#</a> \u8BED\u97F3\u8BC6\u522B</h2><p><code>SpeechRecognition</code></p><ul><li>\u8BED\u97F3\u8BC6\u522B\u670D\u52A1\u7684\u63A7\u5236\u5668\u63A5\u53E3\uFF1B\u5B83\u4E5F\u5904\u7406\u7531\u8BED\u97F3\u8BC6\u522B\u670D\u52A1\u53D1\u6765\u7684 <code>SpeechRecognitionEvent</code> \u4E8B\u4EF6\u3002</li></ul><p><code>SpeechRecognitionAlternative</code></p><ul><li>\u8868\u793A\u7531\u8BED\u97F3\u8BC6\u522B\u670D\u52A1\u8BC6\u522B\u51FA\u7684\u4E00\u4E2A\u8BCD\u6C47\u3002</li></ul><p><code>SpeechRecognitionError</code></p><ul><li>\u8868\u793A\u8BED\u97F3\u8BC6\u522B\u670D\u52A1\u53D1\u51FA\u7684\u62A5\u9519\u4FE1\u606F\u3002</li></ul><p><code>SpeechRecognitionEvent</code></p><ul><li>result \u548C nomatch \u7684\u4E8B\u4EF6\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u4E0E\u8BED\u97F3\u8BC6\u522B\u8FC7\u7A0B\u4E2D\u95F4\u6216\u6700\u7EC8\u7ED3\u679C\u76F8\u5173\u7684\u5168\u90E8\u6570\u636E\u3002</li></ul><p><code>SpeechGrammar</code></p><ul><li>\u5C06\u8981\u4EA4\u7531\u8BED\u97F3\u8BC6\u522B\u670D\u52A1\u8FDB\u884C\u8BC6\u522B\u7684\u8BCD\u6C47\u6216\u8005\u8BCD\u6C47\u7684\u6A21\u5F0F\u3002</li></ul><p><code>SpeechGrammarList</code></p><ul><li>\u8868\u793A\u4E00\u4E2A\u7531 <code>SpeechGrammar</code> \u5BF9\u8C61\u6784\u6210\u7684\u5217\u8868\u3002</li></ul><p><code>SpeechRecognitionResult</code></p><ul><li>\u8868\u793A\u4E00\u6B21\u8BC6\u522B\u4E2D\u7684\u5339\u914D\u9879\uFF0C\u5176\u4E2D\u53EF\u80FD\u5305\u542B\u591A\u4E2A <code>SpeechRecognitionAlternative</code> \u5BF9\u8C61\u3002</li></ul><p><code>SpeechRecognitionResultList</code></p><ul><li>\u8868\u793A\u5305\u542B <code>SpeechRecognitionResult</code> \u5BF9\u8C61\u7684\u4E00\u4E2A\u5217\u8868\uFF0C\u5982\u679C\u662F\u4EE5 <code>continuous</code> \u6A21\u5F0F\u6355\u83B7\u7684\u7ED3\u679C\uFF0C\u5219\u662F\u5355\u4E2A\u5BF9\u8C61\u3002</li></ul><h2 id="\u8BED\u97F3\u5408\u6210" tabindex="-1"><a class="header-anchor" href="#\u8BED\u97F3\u5408\u6210" aria-hidden="true">#</a> \u8BED\u97F3\u5408\u6210</h2><p><code>SpeechSynthesis</code></p><ul><li>\u8BED\u97F3\u5408\u6210\u670D\u52A1\u7684\u63A7\u5236\u5668\u63A5\u53E3\uFF0C\u53EF\u7528\u4E8E\u83B7\u53D6\u8BBE\u5907\u4E0A\u53EF\u7528\u7684\u5408\u6210\u8BED\u97F3\uFF0C\u5F00\u59CB\u3001\u6682\u505C\u4EE5\u53CA\u5176\u5B83\u76F8\u5173\u547D\u4EE4\u7684\u4FE1\u606F\u3002</li></ul><p><code>SpeechSynthesisErrorEvent</code></p><ul><li>\u5305\u542B\u4E86\u5728\u53D1\u97F3\u670D\u52A1\u5904\u7406 SpeechSynthesisUtterance \u5BF9\u8C61\u8FC7\u7A0B\u4E2D\u7684\u4FE1\u606F\u53CA\u62A5\u9519\u4FE1\u606F\u3002</li></ul><p><code>SpeechSynthesisEvent</code></p><ul><li>\u5305\u542B\u4E86\u7ECF\u7531\u53D1\u97F3\u670D\u52A1\u5904\u7406\u8FC7\u7684 SpeechSynthesisUtterance \u5BF9\u8C61\u5F53\u524D\u72B6\u6001\u7684\u4FE1\u606F\u3002</li></ul><p><code>SpeechSynthesisUtterance</code></p><ul><li>\u8868\u793A\u4E00\u6B21\u53D1\u97F3\u8BF7\u6C42\u3002\u5176\u4E2D\u5305\u542B\u4E86\u5C06\u7531\u8BED\u97F3\u670D\u52A1\u6717\u8BFB\u7684\u5185\u5BB9\uFF0C\u4EE5\u53CA\u5982\u4F55\u6717\u8BFB\u5B83\uFF08\u4F8B\u5982\uFF1A\u8BED\u79CD\u3001\u97F3\u9AD8\u3001\u97F3\u91CF\uFF09\u3002</li></ul><p><code>SpeechSynthesisVoice</code></p><ul><li>\u8868\u793A\u7CFB\u7EDF\u63D0\u4F9B\u7684\u4E00\u4E2A\u58F0\u97F3\u3002\u6BCF\u4E2A SpeechSynthesisVoice \u90FD\u6709\u4E0E\u4E4B\u76F8\u5173\u7684\u53D1\u97F3\u670D\u52A1\uFF0C\u5305\u62EC\u4E86\u8BED\u79CD\u3001\u540D\u79F0 \u548C URI \u7B49\u4FE1\u606F\u3002</li></ul><p><code>Window.speechSynthesis</code></p><ul><li>\u7531\u89C4\u683C\u6587\u6863\u6307\u5B9A\u7684\uFF0C\u88AB\u79F0\u4E3A SpeechSynthesisGetter \u7684 [NoInterfaceObject] \u63A5\u53E3\u7684\u4E00\u90E8\u5206\uFF0C\u5728 Window \u5BF9\u8C61\u4E2D\u5B9E\u73B0\uFF0CspeechSynthesis \u5C5E\u6027\u53EF\u7528\u4E8E\u8BBF\u95EE SpeechSynthesis \u63A7\u5236\u5668\uFF0C\u4ECE\u800C\u83B7\u53D6\u8BED\u97F3\u5408\u6210\u529F\u80FD\u7684\u5165\u53E3\u3002</li></ul>',33);function h(t,d){return o}var l=c(i,[["render",h]]);export{l as default};
