import{_ as a,r as l,o as t,c as p,d as o,w as r,g as s,a as n}from"./app.bdadd8d5.js";const x=JSON.parse('{"title":"浏览器工具方法","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]},{"level":2,"title":"selectText func","slug":"selecttext-func","link":"#selecttext-func","children":[]}],"relativePath":"lib/helpers/browser-helpers/index.md","lastUpdated":null}'),c={name:"lib/helpers/browser-helpers/index.md"},i=s(`<h1 id="浏览器工具方法" tabindex="-1">浏览器工具方法 <a class="header-anchor" href="#浏览器工具方法" aria-hidden="true">#</a></h1><p>提供了在浏览器环境下的一些工具方法。</p><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> {browserHelpers} </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;zui&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>browserHelpers</code> 对象上将拥有所有可用的浏览器工具方法。</p><h2 id="selecttext-func" tabindex="-1"><code>selectText</code> <span class="text-blue-500 text-sm font-mono bg-blue-100 p-1 rounded">func</span> <a class="header-anchor" href="#selecttext-func" aria-hidden="true">#</a></h2><p>选择界面上某个可编辑元素上的文本。可编辑元素包括输入框和 <code>contenteditable</code> 属性为 <code>true</code> 的 HTML 元素。</p><p><strong>定义</strong></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#8B949E;">/** 指定元素实例执行选择文本操作 */</span></span>
<span class="line"><span style="color:#D2A8FF;">selectText</span><span style="color:#C9D1D9;">(element: HTMLElement) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> boolean;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">/** 指定元素选择器例执行选择文本操作 */</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">*/</span></span>
<span class="line"><span style="color:#D2A8FF;">selectText</span><span style="color:#C9D1D9;">(selector: string) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> boolean;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>参数</strong></p><table><thead><tr><th>参数</th><th style="text-align:center;">类型</th><th>定义</th></tr></thead><tbody><tr><td><code>element</code></td><td style="text-align:center;"><code>Element</code></td><td>要执行操作的元素</td></tr><tr><td><code>selector</code></td><td style="text-align:center;"><code>string</code></td><td>要执行操作的元素选择器文本</td></tr></tbody></table><p><strong>返回值</strong></p><table><thead><tr><th style="text-align:center;">类型</th><th>定义</th></tr></thead><tbody><tr><td style="text-align:center;"><code>boolean</code></td><td>如果操作成功返回 <code>true</code>，否则返回 <code>false</code></td></tr></tbody></table><p><strong>示例</strong></p>`,14),d=n("input",{type:"text",id:"selectTextInput",value:"鹅，鹅，鹅",class:"form-control"},null,-1),u=n("button",{id:"selectTextBtn",class:"btn",onclick:"zui.selectText('#selectTextInput')"},"点击选中文本框文本",-1),D=s(`<div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">input</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">type</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;text&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">id</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;input&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">value</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;鹅，鹅，鹅&quot;</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">button</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">id</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;button&quot;</span><span style="color:#C9D1D9;">&gt;点击选中文本框文本&lt;/</span><span style="color:#7EE787;">button</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> {selectText} </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;zui/browserHelpers&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">button.</span><span style="color:#D2A8FF;">addEventListener</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;click&#39;</span><span style="color:#C9D1D9;">, () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">selectText</span><span style="color:#C9D1D9;">(input);</span></span>
<span class="line"><span style="color:#C9D1D9;">});</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,1);function y(b,h,m,C,F,_){const e=l("Example");return t(),p("div",null,[i,o(e,{class:"flex flex-col gap-2 items-start"},{default:r(()=>[d,u]),_:1}),D])}const f=a(c,[["render",y]]);export{x as __pageData,f as default};
