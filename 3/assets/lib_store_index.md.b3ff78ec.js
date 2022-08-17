import{_ as s,c as e,o as a,e as n}from"./app.7e286c46.js";const h=JSON.parse('{"title":"\u672C\u5730\u5B58\u50A8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165"},{"level":2,"title":"\u7EFC\u5408\u793A\u4F8B","slug":"\u7EFC\u5408\u793A\u4F8B"},{"level":2,"title":"\u5B58\u50A8\u6570\u636E","slug":"\u5B58\u50A8\u6570\u636E"},{"level":2,"title":"\u8BFB\u53D6\u6570\u636E","slug":"\u8BFB\u53D6\u6570\u636E"},{"level":2,"title":"\u79FB\u9664\u6570\u636E","slug":"\u79FB\u9664\u6570\u636E"},{"level":2,"title":"\u904D\u5386\u6570\u636E","slug":"\u904D\u5386\u6570\u636E"},{"level":2,"title":"\u83B7\u53D6\u6240\u6709\u6570\u636E","slug":"\u83B7\u53D6\u6240\u6709\u6570\u636E"},{"level":2,"title":"\u64CD\u4F5C\u672C\u5730\u4F1A\u8BDD\u6570\u636E","slug":"\u64CD\u4F5C\u672C\u5730\u4F1A\u8BDD\u6570\u636E"},{"level":2,"title":"\u521B\u5EFA\u72EC\u7ACB\u7684\u8BFB\u5199\u5B9E\u4F8B","slug":"\u521B\u5EFA\u72EC\u7ACB\u7684\u8BFB\u5199\u5B9E\u4F8B"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"","slug":"c-store"},{"level":3,"title":"","slug":"f-store-set-key-value"},{"level":3,"title":"","slug":"f-store-get-key-defaultvalue"},{"level":3,"title":"","slug":"f-store-remove-key"},{"level":3,"title":"","slug":"f-store-each-callback"},{"level":3,"title":"","slug":"f-store-getall"},{"level":3,"title":"","slug":"t-storetype"},{"level":3,"title":"","slug":"v-store"},{"level":3,"title":"","slug":"f-storecreatefunc"}],"relativePath":"lib/store/index.md","lastUpdated":null}'),t={name:"lib/store/index.md"},l=n(`<h1 id="\u672C\u5730\u5B58\u50A8" tabindex="-1">\u672C\u5730\u5B58\u50A8 <a class="header-anchor" href="#\u672C\u5730\u5B58\u50A8" aria-hidden="true">#</a></h1><p>\u672C\u5730\u5B58\u50A8\uFF08Local storage\uFF09\u662F\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B58\u50A8\u5E94\u7528\u6570\u636E\u7684\u597D\u9014\u5F84\u3002\u76F8\u6BD4\u8F83 cookie \u62E5\u6709\u66F4\u5927\u7684\u5B58\u50A8\u7A7A\u95F4\uFF08\u76F8\u540C\u57DF\u4E0B\u4E00\u822C\u8FBE\u5230 5M \u4EE5\u4E0A\u5B58\u50A8\u7A7A\u95F4\uFF09\uFF0C\u4F7F\u7528\u66F4\u7075\u6D3B\uFF0C\u800C\u4E14\u4E0D\u4F1A\u5728\u6BCF\u6B21\u63D0\u4EA4\u4E2D\u53D1\u9001\u5230\u670D\u52A1\u5668\u3002\u51E0\u4E4E\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u672C\u5730\u5B58\u50A8\uFF0C\u751A\u81F3\u5305\u62EC IE\u3002</p><p>\u672C\u5730\u5B58\u50A8\u5305\u62EC\u5C3A\u5BF8\u5B58\u50A8\u548C\u4F1A\u8BDD\u5B58\u50A8\uFF0C\u5BF9\u5E94\u7684\u662F\u6D4F\u89C8\u5668\u5185\u7F6E\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage" target="_blank" rel="noopener noreferrer"><code>localStorage</code></a> \u548C <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage" target="_blank" rel="noopener noreferrer"><code>sessionStorage</code></a>\u3002</p><p>\u6B64 JS \u63D2\u4EF6\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u65B9\u6CD5\u7528\u4E8E\u8BFB\u5199\u672C\u5730\u5B58\u50A8\u6570\u636E\u3002\u76F8\u6BD4\u8F83\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E9B\u6D4F\u89C8\u5668\u539F\u751F\u63A5\u53E3\uFF0C<code>Store</code> \u7C7B\u5728\u8BFB\u5199\u6570\u636E\u65F6\u4F1A\u81EA\u52A8\u8FDB\u884C\u8F6C\u6362\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u5B58\u50A8\u4EFB\u4F55\u53EF\u4EE5\u88AB\u7CFB\u5217\u5316\u4E3A JSON \u7684\u6570\u636E\uFF0C\u4F8B\u5982\u6570\u503C\u3001\u6570\u7EC4\u548C\u590D\u6742\u5BF9\u8C61\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u5B57\u7B26\u4E32\u3002</p><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> {store} </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;zui/store&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>store</code> \u4E3A\u9ED8\u8BA4\u7684\u6301\u4E45\u5B58\u50A8\u7BA1\u7406\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4E0A\u9762\u7684\u5404\u79CD\u65B9\u6CD5\u8FDB\u884C\u6570\u636E\u64CD\u4F5C\u3002\u5982\u9700\u4F7F\u7528\u4F1A\u8BDD\u5B58\u50A8\u6570\u636E\uFF0C\u5219\u53EA\u9700\u8981\u901A\u8FC7 <code>store.session</code> \u8BBF\u95EE\u4F1A\u8BDD\u5B58\u50A8\u7C7B\u578B\u7684\u7BA1\u7406\u5B9E\u4F8B\u5373\u53EF\u3002</p><h2 id="\u7EFC\u5408\u793A\u4F8B" tabindex="-1">\u7EFC\u5408\u793A\u4F8B <a class="header-anchor" href="#\u7EFC\u5408\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\uFF08\u5F85\u5B9A\uFF1A\u63D0\u4F9B\u4E00\u4E2A\u4F8B\u5B50\u8BFB\u53D6\u793A\u4F8B\u6570\u636E\uFF0C\u5E76\u63D0\u4F9B\u64CD\u4F5C\u6309\u94AE\u8BA9\u7528\u6237\u624B\u52A8\u6DFB\u52A0\u6570\u636E\u8FDB\u884C\u5B58\u50A8\uFF09</p><h2 id="\u5B58\u50A8\u6570\u636E" tabindex="-1">\u5B58\u50A8\u6570\u636E <a class="header-anchor" href="#\u5B58\u50A8\u6570\u636E" aria-hidden="true">#</a></h2><p>\u5B58\u50A8\u6570\u636E\u4F7F\u7528 <code>Store</code> \u5B9E\u4F8B\u4E0A\u7684 <code>set</code> \u65B9\u6CD5\u3002</p><p><strong>\u793A\u4F8B</strong></p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">store.</span><span style="color:#D2A8FF;">set</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;mySecretCode&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">1314520</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u8BFB\u53D6\u6570\u636E" tabindex="-1">\u8BFB\u53D6\u6570\u636E <a class="header-anchor" href="#\u8BFB\u53D6\u6570\u636E" aria-hidden="true">#</a></h2><p>\u8BFB\u53D6\u6570\u636E\u4F7F\u7528 <code>Store</code> \u5B9E\u4F8B\u4E0A\u7684 <code>get</code> \u65B9\u6CD5\u3002</p><p><strong>\u793A\u4F8B</strong></p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">store.</span><span style="color:#D2A8FF;">get</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;mySecretCode&#39;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// \u57FA\u4E8E\u5B58\u50A8\u6570\u636E\u7684\u4F8B\u5B50\u5E94\u8BE5\u8FD4\u56DE 1314520</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u79FB\u9664\u6570\u636E" tabindex="-1">\u79FB\u9664\u6570\u636E <a class="header-anchor" href="#\u79FB\u9664\u6570\u636E" aria-hidden="true">#</a></h2><p>\u8BFB\u53D6\u6570\u636E\u4F7F\u7528 <code>Store</code> \u5B9E\u4F8B\u4E0A\u7684 <code>remove</code> \u65B9\u6CD5\u3002</p><p><strong>\u793A\u4F8B</strong></p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">store.</span><span style="color:#D2A8FF;">remove</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;mySecretCode&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u904D\u5386\u6570\u636E" tabindex="-1">\u904D\u5386\u6570\u636E <a class="header-anchor" href="#\u904D\u5386\u6570\u636E" aria-hidden="true">#</a></h2><p>\u904D\u5386\u6570\u636E\u4F7F\u7528 <code>Store</code> \u5B9E\u4F8B\u4E0A\u7684 <code>each</code> \u65B9\u6CD5\u3002</p><p><strong>\u793A\u4F8B</strong></p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">store.</span><span style="color:#D2A8FF;">each</span><span style="color:#C9D1D9;">((</span><span style="color:#FFA657;">name</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">value</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(name, </span><span style="color:#A5D6FF;">&#39;=&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;value&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u83B7\u53D6\u6240\u6709\u6570\u636E" tabindex="-1">\u83B7\u53D6\u6240\u6709\u6570\u636E <a class="header-anchor" href="#\u83B7\u53D6\u6240\u6709\u6570\u636E" aria-hidden="true">#</a></h2><p>\u83B7\u53D6\u6240\u6709\u6570\u636E\u4F7F\u7528 <code>Store</code> \u5B9E\u4F8B\u4E0A\u7684 <code>getAll</code> \u65B9\u6CD5\u3002</p><p><strong>\u793A\u4F8B</strong></p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">store.</span><span style="color:#D2A8FF;">set</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;mySecretCode&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">1314520</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">store.</span><span style="color:#D2A8FF;">set</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;myName&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;Jue&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">store.</span><span style="color:#D2A8FF;">getAll</span><span style="color:#C9D1D9;">(); </span><span style="color:#8B949E;">// \u8FD4\u56DE {mySecretCode: 1314520, myName: &#39;Jue&#39;}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u64CD\u4F5C\u672C\u5730\u4F1A\u8BDD\u6570\u636E" tabindex="-1">\u64CD\u4F5C\u672C\u5730\u4F1A\u8BDD\u6570\u636E <a class="header-anchor" href="#\u64CD\u4F5C\u672C\u5730\u4F1A\u8BDD\u6570\u636E" aria-hidden="true">#</a></h2><p>\u8981\u64CD\u4F5C\u6B64\u6B21\u4F1A\u8BDD\u5728\u672C\u5730\u7684\u6570\u636E\u53EF\u4EE5\u901A\u8FC7 <code>store.session</code> \u5B9E\u4F8B\u4E0A\u7684\u65B9\u6CD5\u3002</p><p><strong>\u793A\u4F8B</strong></p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">store.session.</span><span style="color:#D2A8FF;">set</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;mySecretCode&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">1314520</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">store.session.</span><span style="color:#D2A8FF;">set</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;myName&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;Jue&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">store.session.</span><span style="color:#D2A8FF;">getAll</span><span style="color:#C9D1D9;">(); </span><span style="color:#8B949E;">// \u8FD4\u56DE {mySecretCode: 1314520, myName: &#39;Jue&#39;}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u76F8\u6BD4\u8F83\u672C\u5730\u5B58\u50A8\uFF0C\u4F1A\u8BDD\u5B58\u50A8\u7684\u6570\u636E\u4F1A\u5728\u6D4F\u89C8\u5668\u4F1A\u8BDD\u7ED3\u675F\u65F6\uFF08\u4F8B\u5982\u6D4F\u89C8\u5668\u88AB\u5173\u95ED\uFF09\u88AB\u6E05\u9664\u3002\u5728\u4F1A\u8BDD\u671F\u95F4\uFF0C\u6570\u636E\u4ECD\u7136\u53EF\u4EE5\u8DE8\u9875\u9762\u8BBF\u95EE\u3002</p></div><h2 id="\u521B\u5EFA\u72EC\u7ACB\u7684\u8BFB\u5199\u5B9E\u4F8B" tabindex="-1">\u521B\u5EFA\u72EC\u7ACB\u7684\u8BFB\u5199\u5B9E\u4F8B <a class="header-anchor" href="#\u521B\u5EFA\u72EC\u7ACB\u7684\u8BFB\u5199\u5B9E\u4F8B" aria-hidden="true">#</a></h2><p>\u901A\u5E38\u4F7F\u7528 <code>Store</code> \u7684\u9ED8\u8BA4\u5B9E\u4F8B <code>store</code> \u5373\u53EF\u8BFB\u5199\u6570\u636E\uFF0C\u4F46\u6709\u65F6\u9700\u8981\u4E00\u4E2A\u72EC\u7ACB\u7684\u5B58\u50A8\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>store.create</code> \u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A <code>Store</code> \u5B9E\u4F8B\u5B9E\u73B0\u3002</p><p><strong>\u793A\u4F8B</strong></p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">/* \u5206\u522B\u521B\u5EFA\u4E00\u4E2A\u672C\u5730\u5B58\u50A8\u548C\u4F1A\u8BDD\u5B58\u50A8\u5B9E\u4F8B */</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">myStore</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> store.</span><span style="color:#D2A8FF;">create</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;myStore&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">mySessionStore</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> store.</span><span style="color:#D2A8FF;">create</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;mySessionStore&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">/* \u5206\u522B\u8BBE\u7F6E\u540C\u540D\u7684\u5B58\u50A8\u7684\u503C */</span></span>
<span class="line"><span style="color:#C9D1D9;">store.</span><span style="color:#D2A8FF;">set</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;mySecretCode&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">myStore.</span><span style="color:#D2A8FF;">set</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;mySecretCode&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">2</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">mySessionStore.</span><span style="color:#D2A8FF;">set</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;mySecretCode&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">3</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">/* \u4ED6\u4EEC\u53EF\u4EE5\u8BFB\u53D6\u5230\u540C\u540D\u7684\u5404\u81EA\u7684\u503C */</span></span>
<span class="line"><span style="color:#C9D1D9;">store.</span><span style="color:#D2A8FF;">get</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;mySecretCode&#39;</span><span style="color:#C9D1D9;">);          </span><span style="color:#8B949E;">// \u8FD4\u56DE 1</span></span>
<span class="line"><span style="color:#C9D1D9;">myStore.</span><span style="color:#D2A8FF;">get</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;mySecretCode&#39;</span><span style="color:#C9D1D9;">);        </span><span style="color:#8B949E;">// \u8FD4\u56DE 2</span></span>
<span class="line"><span style="color:#C9D1D9;">mySessionStore.</span><span style="color:#D2A8FF;">get</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;mySecretCode&#39;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// \u8FD4\u56DE 3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="c-store" tabindex="-1"><span class="text-purple-500 font-mono bg-purple-100 px-2 rounded">C</span> <span class="text-purple-500 font-mono">Store</span> <a class="header-anchor" href="#c-store" aria-hidden="true">#</a></h3><p><code>Store</code> \u7C7B\u3002</p><p><strong>\u5C5E\u6027</strong></p><table><thead><tr><th>\u540D\u79F0</th><th style="text-align:center;">\u7C7B\u578B</th><th>\u5B9A\u4E49</th></tr></thead><tbody><tr><td><code>type</code></td><td style="text-align:center;"><code>StoreType</code></td><td>\u5B58\u50A8\u7C7B\u578B</td></tr><tr><td><code>session</code></td><td style="text-align:center;"><code>Store</code></td><td>\u4E0E\u5F53\u524D\u5B58\u50A8\u540C\u540D\u7684\u4F1A\u8BDD\u5B58\u50A8\u5B9E\u4F8B</td></tr></tbody></table><p><strong>\u65B9\u6CD5</strong></p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u5B9A\u4E49</th></tr></thead><tbody><tr><td><code>get</code></td><td>\u83B7\u53D6\u6570\u636E</td></tr><tr><td><code>set</code></td><td>\u5B58\u50A8\u6570\u636E</td></tr><tr><td><code>remove</code></td><td>\u79FB\u9664\u6570\u636E</td></tr><tr><td><code>each</code></td><td>\u904D\u5386\u6570\u636E</td></tr><tr><td><code>getAll</code></td><td>\u83B7\u53D6\u6240\u6709\u6570\u636E</td></tr></tbody></table><h3 id="f-store-set-key-value" tabindex="-1"><span class="text-blue-500 font-mono bg-blue-100 px-2 rounded">F</span> <span class="text-blue-500 font-mono">Store.set(key, value)</span> <a class="header-anchor" href="#f-store-set-key-value" aria-hidden="true">#</a></h3><p>\u5B58\u50A8\u6570\u636E\u3002</p><p><strong>\u5B9A\u4E49</strong></p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#D2A8FF;">set</span><span style="color:#C9D1D9;">(key: string, value: any) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>\u53C2\u6570</strong></p><table><thead><tr><th>\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th>\u5B9A\u4E49</th></tr></thead><tbody><tr><td><code>key</code></td><td style="text-align:center;"><code>string</code></td><td>\u5B58\u50A8\u7684\u6570\u636E\u540D\u79F0</td></tr><tr><td><code>value</code></td><td style="text-align:center;"><code>any</code></td><td>\u8981\u5B58\u50A8\u7684\u6570\u636E</td></tr></tbody></table><p><strong>\u65B9\u6CD5</strong></p><h3 id="f-store-get-key-defaultvalue" tabindex="-1"><span class="text-blue-500 font-mono bg-blue-100 px-2 rounded">F</span> <span class="text-blue-500 font-mono">Store.get(key, defaultValue)</span> <a class="header-anchor" href="#f-store-get-key-defaultvalue" aria-hidden="true">#</a></h3><p>\u8BFB\u53D6\u6570\u636E\u3002</p><p><strong>\u5B9A\u4E49</strong></p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#D2A8FF;">get</span><span style="color:#C9D1D9;">(key: string, defaultValue</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> any) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> any;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>\u53C2\u6570</strong></p><table><thead><tr><th>\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th>\u5B9A\u4E49</th></tr></thead><tbody><tr><td><code>key</code></td><td style="text-align:center;"><code>string</code></td><td>\u8BFB\u53D6\u7684\u6570\u636E\u540D\u79F0</td></tr><tr><td><code>defaultValue</code></td><td style="text-align:center;"><code>any</code></td><td>\u5F53\u6CA1\u6709\u8BFB\u53D6\u6570\u636E\u65F6\u8FD4\u56DE\u6B64\u9ED8\u8BA4\u503C</td></tr></tbody></table><p><strong>\u8FD4\u56DE\u503C</strong></p><table><thead><tr><th style="text-align:center;">\u7C7B\u578B</th><th>\u5B9A\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;"><code>any</code></td><td>\u8BFB\u53D6\u5230\u7684\u6570\u636E</td></tr></tbody></table><h3 id="f-store-remove-key" tabindex="-1"><span class="text-blue-500 font-mono bg-blue-100 px-2 rounded">F</span> <span class="text-blue-500 font-mono">Store.remove(key)</span> <a class="header-anchor" href="#f-store-remove-key" aria-hidden="true">#</a></h3><p>\u79FB\u9664\u6570\u636E</p><p><strong>\u5B9A\u4E49</strong></p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#D2A8FF;">remove</span><span style="color:#C9D1D9;">(key: string) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>\u53C2\u6570</strong></p><table><thead><tr><th>\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th>\u5B9A\u4E49</th></tr></thead><tbody><tr><td><code>key</code></td><td style="text-align:center;"><code>string</code></td><td>\u8981\u79FB\u9664\u7684\u6570\u636E\u540D\u79F0</td></tr></tbody></table><h3 id="f-store-each-callback" tabindex="-1"><span class="text-blue-500 font-mono bg-blue-100 px-2 rounded">F</span> <span class="text-blue-500 font-mono">Store.each(callback)</span> <a class="header-anchor" href="#f-store-each-callback" aria-hidden="true">#</a></h3><p>\u904D\u5386\u6570\u636E\u3002</p><p><strong>\u5B9A\u4E49</strong></p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#D2A8FF;">each</span><span style="color:#C9D1D9;">(callback: (</span><span style="color:#FFA657;">name</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">value</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">any</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>\u53C2\u6570</strong></p><table><thead><tr><th>\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th>\u5B9A\u4E49</th></tr></thead><tbody><tr><td><code>callback</code></td><td style="text-align:center;"><code>function</code></td><td>\u904D\u5386\u56DE\u8C03\u51FD\u6570</td></tr></tbody></table><p>\u5176\u4E2D <code>callback</code> \u53C2\u6570\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th>\u5B9A\u4E49</th></tr></thead><tbody><tr><td><code>name</code></td><td style="text-align:center;"><code>string</code></td><td>\u672C\u6B21\u904D\u5386\u5B58\u50A8\u7684\u540D\u79F0</td></tr><tr><td><code>value</code></td><td style="text-align:center;"><code>any</code></td><td>\u672C\u6B21\u904D\u5386\u5B58\u50A8\u7684\u503C</td></tr></tbody></table><h3 id="f-store-getall" tabindex="-1"><span class="text-blue-500 font-mono bg-blue-100 px-2 rounded">F</span> <span class="text-blue-500 font-mono">Store.getAll()</span> <a class="header-anchor" href="#f-store-getall" aria-hidden="true">#</a></h3><p>\u83B7\u53D6\u6240\u6709\u5B58\u50A8\u7684\u6570\u636E\u3002</p><p><strong>\u5B9A\u4E49</strong></p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#D2A8FF;">getAll</span><span style="color:#C9D1D9;">() </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> Record</span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;">string, any</span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>\u8FD4\u56DE\u503C</strong></p><table><thead><tr><th style="text-align:center;">\u7C7B\u578B</th><th>\u5B9A\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;"><code>Record&lt;string, any&gt;</code></td><td>\u901A\u8FC7\u4E00\u4E2A\u5BF9\u8C61\u8FD4\u56DE\u6240\u6709\u5B58\u50A8\u7684\u6570\u636E\uFF0C\u5BF9\u8C61\u7684\u5C5E\u6027\u540D\u548C\u503C\u5206\u522B\u5BF9\u5E94\u5B58\u50A8\u7684\u540D\u79F0\u548C\u503C</td></tr></tbody></table><h3 id="t-storetype" tabindex="-1"><span class="text-green-500 font-mono bg-green-100 px-2 rounded">T</span> <span class="text-green-500 font-mono">StoreType</span> <a class="header-anchor" href="#t-storetype" aria-hidden="true">#</a></h3><p>\u672C\u5730\u5B58\u50A8\u7C7B\u578B\u3002</p><p><strong>\u5B9A\u4E49</strong></p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#FF7B72;">type</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">StoreType</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;local&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;session&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>\u5E38\u91CF\u5B9A\u4E49</strong></p><table><thead><tr><th>\u503C</th><th>\u5B9A\u4E49</th></tr></thead><tbody><tr><td><code>&#39;local&#39;</code></td><td>\u672C\u5730\u6301\u4E45\u5B58\u50A8</td></tr><tr><td><code>&#39;session&#39;</code></td><td>\u672C\u5730\u4F1A\u8BDD\u5B58\u50A8</td></tr></tbody></table><h3 id="v-store" tabindex="-1"><span class="text-yellow-500 font-mono bg-yellow-100 px-2 rounded">V</span> <span class="text-yellow-500 font-mono">store</span> <a class="header-anchor" href="#v-store" aria-hidden="true">#</a></h3><p>\u9ED8\u8BA4\u7684 store \u5B9E\u4F8B\uFF0C\u5E76\u5305\u542B\u7528\u4E8E\u521B\u5EFA\u65B0\u7684 <code>Store</code> \u5B9E\u4F8B\u7684\u5FEB\u6377\u65B9\u6CD5\u3002</p><p><strong>\u5B9A\u4E49</strong></p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> store</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Store</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&amp;</span><span style="color:#C9D1D9;"> {</span><span style="color:#FFA657;">create</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">StoreCreateFunc</span><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5176\u4E2D <code>create</code> \u6210\u5458\u4E3A\u521B\u5EFA <code>Store</code> \u5B9E\u4F8B\u7684\u5FEB\u6377\u65B9\u6CD5\u3002</p><h3 id="f-storecreatefunc" tabindex="-1"><span class="text-blue-500 font-mono bg-blue-100 px-2 rounded">F</span> <span class="text-blue-500 font-mono">StoreCreateFunc</span> <a class="header-anchor" href="#f-storecreatefunc" aria-hidden="true">#</a></h3><p><code>Store</code> \u5B9E\u4F8B\u521B\u5EFA\u65B9\u6CD5\u3002</p><p><strong>\u5B9A\u4E49</strong></p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#FF7B72;">type</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">StoreCreateFunc</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> (</span><span style="color:#FFA657;">name</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">type</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">StoreType</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;local&#39;</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Store</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>\u53C2\u6570</strong></p><table><thead><tr><th>\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th>\u5B9A\u4E49</th></tr></thead><tbody><tr><td><code>name</code></td><td style="text-align:center;"><code>string</code></td><td>\u672C\u5730\u5B58\u50A8\u5B9E\u4F8B\u540D\u79F0</td></tr><tr><td><code>type</code></td><td style="text-align:center;"><code>StoreType</code></td><td>\u5B58\u50A8\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A <code>&#39;local&#39;</code></td></tr></tbody></table>`,97),o=[l];function p(r,c,d,i,y,D){return a(),e("div",null,o)}var b=s(t,[["render",p]]);export{h as __pageData,b as default};