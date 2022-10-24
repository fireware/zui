import{_ as s,o as e,c as n,g as a}from"./app.d7239529.js";const m=JSON.parse('{"title":"\u7EC4\u4EF6\u5E93\u6269\u5C55","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49\u6269\u5C55\u5E93","slug":"\u5B9A\u4E49\u6269\u5C55\u5E93","link":"#\u5B9A\u4E49\u6269\u5C55\u5E93","children":[]},{"level":2,"title":"\u6DFB\u52A0\u6269\u5C55\u5E93","slug":"\u6DFB\u52A0\u6269\u5C55\u5E93","link":"#\u6DFB\u52A0\u6269\u5C55\u5E93","children":[]},{"level":2,"title":"\u542F\u52A8\u5F00\u53D1\u670D\u52A1","slug":"\u542F\u52A8\u5F00\u53D1\u670D\u52A1","link":"#\u542F\u52A8\u5F00\u53D1\u670D\u52A1","children":[]},{"level":2,"title":"\u542F\u52A8\u6587\u6863\u670D\u52A1\u5668","slug":"\u542F\u52A8\u6587\u6863\u670D\u52A1\u5668","link":"#\u542F\u52A8\u6587\u6863\u670D\u52A1\u5668","children":[]},{"level":2,"title":"\u76D1\u542C\u6269\u5C55\u5E93\u6587\u4EF6\u53D8\u66F4","slug":"\u76D1\u542C\u6269\u5C55\u5E93\u6587\u4EF6\u53D8\u66F4","link":"#\u76D1\u542C\u6269\u5C55\u5E93\u6587\u4EF6\u53D8\u66F4","children":[]},{"level":2,"title":"\u6253\u5305","slug":"\u6253\u5305","link":"#\u6253\u5305","children":[]}],"relativePath":"guide/customize/exts-lib.md","lastUpdated":null}'),l={name:"guide/customize/exts-lib.md"},p=a(`<h1 id="\u7EC4\u4EF6\u5E93\u6269\u5C55" tabindex="-1">\u7EC4\u4EF6\u5E93\u6269\u5C55 <a class="header-anchor" href="#\u7EC4\u4EF6\u5E93\u6269\u5C55" aria-hidden="true">#</a></h1><p>ZUI3 \u7EC4\u4EF6\u5E93\u5185\u7F6E\u4E86\u5927\u91CF\u7EC4\u4EF6\uFF0C\u5E76\u652F\u6301\u96C6\u4E2D\u5F00\u53D1\u3001\u8C03\u8BD5\u548C\u6253\u5305\uFF0C\u5176\u4E2D\u6253\u5305\u8FD8\u652F\u6301\u53EA\u9009\u62E9\u6307\u5B9A\u7684\u7EC4\u4EF6\u8FDB\u884C\u4E2A\u6027\u5316\u5B9A\u5236\uFF0C\u540C\u6B65\u8F93\u51FA\u7EC4\u4EF6\u5E93\u6587\u6863\u3002\u4F46\u5F53\u9700\u6C42\u6269\u5C55\u5230\u7EC4\u4EF6\u5E93\u4E4B\u5916\u65F6\uFF0C\u5C31\u9700\u8981\u7528\u5230\u6269\u5C55\u7EC4\u4EF6\u5E93\u4E86\u3002ZUI3 \u652F\u6301\u6269\u5C55\u7EC4\u4EF6\u5E93\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u4ECE\u5176\u4ED6\u4F4D\u7F6E\u5F15\u5165\u4E00\u4E2A\u6216\u591A\u4E2A\u7EC4\u4EF6\u5E93\u76EE\u5F55\uFF0C\u4EAB\u53D7\u96C6\u4E2D\u5F00\u53D1\u3001\u8C03\u8BD5\u548C\u6253\u5305\u3002\u4E0B\u9762\u4ECB\u7ECD\u6269\u5C55\u7EC4\u4EF6\u5E93\u7684\u4F7F\u7528\u65B9\u6CD5\u3002</p><h2 id="\u5B9A\u4E49\u6269\u5C55\u5E93" tabindex="-1">\u5B9A\u4E49\u6269\u5C55\u5E93 <a class="header-anchor" href="#\u5B9A\u4E49\u6269\u5C55\u5E93" aria-hidden="true">#</a></h2><p>\u6269\u5C55\u7EC4\u4EF6\u5E93\u53EF\u4EE5\u6765\u81EA\u672C\u5730\u7CFB\u7EDF\u7684\u4EFB\u610F\u4F4D\u7F6E\uFF0C\u53EA\u9700\u8981\u63D0\u4F9B\u4E00\u4E2A\u8DEF\u5F84\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#c9d1d9;">/Users/TaiJi/Projects/zui3_exts/lib/</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6269\u5C55\u7EC4\u4EF6\u5E93\u7684\u76EE\u5F55\u7ED3\u6784\u4E0E ZUI3 <code>/lib/</code> \u4E0B\u7684\u76EE\u5F55\u7ED3\u6784\u4E00\u81F4\uFF0C\u4E0B\u9762\u7684\u6BCF\u4E2A\u5B50\u76EE\u5F55\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684\u7EC4\u4EF6\uFF0C\u8BE6\u7EC6\u5B9A\u4E49\u53C2\u8003 <a href="/zui/3/guide/customize/dev.html">\u5F00\u53D1\u6587\u6863</a>\u3002</p><h2 id="\u6DFB\u52A0\u6269\u5C55\u5E93" tabindex="-1">\u6DFB\u52A0\u6269\u5C55\u5E93 <a class="header-anchor" href="#\u6DFB\u52A0\u6269\u5C55\u5E93" aria-hidden="true">#</a></h2><p>\u5728 <code>zui3</code> \u9879\u76EE\u6839\u76EE\u5F55\u6267\u884C\uFF1A</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">$ pnpm extend-lib -- </span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;">ext_lib_path</span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;">lib_name</span><span style="color:#FF7B72;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5176\u4E2D\u53C2\u6570 <code>ext_lib_path</code> \u4E3A\u6269\u5C55\u7EC4\u4EF6\u5E93\u8DEF\u5F84\uFF0C<code>&lt;lib_name&gt;</code> \u4E3A\u6269\u5C55\u7EC4\u4EF6\u5E93\u540D\u79F0\u3002\u4F8B\u5982\uFF1A</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">$ pnpm extend-lib -- /Users/TaiJi/Projects/zui3_exts/lib/ zentao</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6267\u884C\u4E0A\u8FF0\u547D\u4EE4\u4E4B\u540E\uFF0C\u4F1A\u5C06\u7EC4\u4EF6\u5E93\u76EE\u5F55\u6587\u4EF6\u62F7\u8D1D\u5230 <code>zui3/lib_name</code> \u76EE\u5F55\u4E0B\uFF0C\u540C\u65F6\u4F1A\u5728 <code>zui3/exts/libs.json</code> \u6587\u4EF6\u4E2D\u8BB0\u5F55\u6B64\u6269\u5C55\u5E93\u7684\u540D\u79F0\u548C\u8DEF\u5F84\u3002</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#C9D1D9;">{</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#7EE787;">&quot;zentao&quot;</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">&quot;/Users/TaiJi/Projects/zui3_exts/lib/&quot;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5B9E\u9645\u4E0A\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u81EA\u5DF1\u7F16\u8F91\u8FD9\u4E2A\u6587\u4EF6\u6765\u6DFB\u52A0\u6269\u5C55\u5E93\u3002</p><h2 id="\u542F\u52A8\u5F00\u53D1\u670D\u52A1" tabindex="-1">\u542F\u52A8\u5F00\u53D1\u670D\u52A1 <a class="header-anchor" href="#\u542F\u52A8\u5F00\u53D1\u670D\u52A1" aria-hidden="true">#</a></h2><p>\u8981\u5728\u5F00\u53D1\u6A21\u5F0F\u4E2D\u5305\u542B\u5BF9\u6269\u5C55\u7EC4\u4EF6\u5E93\u7684\u5F00\u53D1\u8C03\u8BD5\uFF0C\u53EA\u9700\u8981\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u4EE3\u66FF <code>pnpm dev</code> \u547D\u4EE4\u5373\u53EF\uFF1A</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">$ pnpm dev:exts</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u542F\u52A8\u6587\u6863\u670D\u52A1\u5668" tabindex="-1">\u542F\u52A8\u6587\u6863\u670D\u52A1\u5668 <a class="header-anchor" href="#\u542F\u52A8\u6587\u6863\u670D\u52A1\u5668" aria-hidden="true">#</a></h2><p>\u8981\u5728\u6587\u6863\u7F51\u7AD9\u670D\u52A1\u6A21\u5F0F\u4E2D\u5305\u542B\u5BF9\u6269\u5C55\u7EC4\u4EF6\u5E93\u7684\u6587\u6863\u652F\u6301\uFF0C\u53EA\u9700\u8981\u5982\u4E0B\u547D\u4EE4\u4EE3\u66FF <code>pnpm docs:dev</code> \u547D\u4EE4\u5373\u53EF\uFF1A</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">$ pnpm docs:dev:exts</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u76D1\u542C\u6269\u5C55\u5E93\u6587\u4EF6\u53D8\u66F4" tabindex="-1">\u76D1\u542C\u6269\u5C55\u5E93\u6587\u4EF6\u53D8\u66F4 <a class="header-anchor" href="#\u76D1\u542C\u6269\u5C55\u5E93\u6587\u4EF6\u53D8\u66F4" aria-hidden="true">#</a></h2><p>\u5728\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u548C\u6587\u6863\u670D\u52A1\u5668\u65F6\uFF0C\u901A\u5E38\u9700\u8981\u5BF9\u6269\u5C55\u7EC4\u4EF6\u5E93\u539F\u59CB\u76EE\u5F55\u8FDB\u884C\u76D1\u542C\uFF0C\u5E76\u5C06\u53D8\u66F4\u540C\u6B65\u5230 ZUI3 \u7684\u6269\u5C55\u5E93\u76EE\u5F55\uFF0C\u8FD9\u65F6\u9700\u8981\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u5373\u53EF\uFF1A</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">$ pnpm watch-exts</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4E0A\u8FF0\u547D\u4EE4\u9700\u8981\u4E00\u76F4\u4FDD\u6301\u8FD0\u884C\u624D\u80FD\u8BA9\u76D1\u542C\u548C\u540C\u6B65\u751F\u6548\uFF0C\u5F53\u6269\u5C55\u5E93\u539F\u59CB\u76EE\u5F55\u6587\u4EF6\u53D8\u66F4\u65F6\u4F1A\u81EA\u52A8\u540C\u6B65\u5230 <code>zui3/exts/</code> \u76EE\u5F55\uFF0C\u5982\u679C\u540C\u65F6\u6709\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\u548C\u6587\u6863\u670D\u52A1\u5668\u65F6\uFF0C\u70ED\u66F4\u65B0\u529F\u80FD\u5C06\u4F1A\u5BF9\u6269\u5C55\u7EC4\u4EF6\u5E93\u751F\u6548\u3002</p><h2 id="\u6253\u5305" tabindex="-1">\u6253\u5305 <a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a></h2><p>\u6253\u5305\u65F6\u5982\u679C\u9700\u8981\u5C06\u6269\u5C55\u5E93\u4E2D\u7684\u7EC4\u4EF6\u4E5F\u8FDB\u884C\u6253\u5305\uFF0C\u5219\u9700\u8981\u6DFB\u52A0 <code>--exts</code> \u53C2\u6570\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u5728\u9700\u8981\u6253\u5305\u7684\u7EC4\u4EF6\u6E05\u5355\u4E2D\u6307\u5B9A\u6269\u5C55\u5E93\u4E2D\u7684\u7EC4\u4EF6\u540D\u79F0\uFF1A</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">$ pnpm build -- --exts label status-label</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u4E0D\u6307\u5B9A\u540D\u79F0\uFF0C\u5219\u9ED8\u8BA4\u6253\u5305\u4ECD\u7136\u53EA\u6253\u5305\u5185\u7F6E\u7EC4\u4EF6\u5E93\u7684\u7EC4\u4EF6\uFF0C\u4F8B\u5982\u4E0B\u9762\u7684\u547D\u4EE4\u4ECD\u7136\u76F8\u5F53\u4E8E <code>pnpm build</code>\uFF1A</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">$ pnpm build -- --exts</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u9700\u8981\u5C06\u6240\u6709\u5185\u7F6E\u7EC4\u4EF6\u5E93\u548C\u6269\u5C55\u5E93\u4E2D\u7684\u6240\u6709\u7EC4\u4EF6\u4E00\u5E76\u6253\u5305\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">$ pnpm build -- --exts zui+exts</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,31),i=[p];function c(o,t,d,r,u,b){return e(),n("div",null,i)}const v=s(l,[["render",c]]);export{m as __pageData,v as default};