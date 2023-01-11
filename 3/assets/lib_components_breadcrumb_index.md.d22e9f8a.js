import{_ as t,r as e,o as n,c as o,d as r,w as p,a as s,b as a,g as c}from"./app.bdadd8d5.js";const F=JSON.parse('{"title":"面包屑","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"CSS 类","slug":"css-类","link":"#css-类","children":[]},{"level":2,"title":"CSS 变量","slug":"css-变量","link":"#css-变量","children":[]}],"relativePath":"lib/components/breadcrumb/index.md","lastUpdated":null}'),d={name:"lib/components/breadcrumb/index.md"},i=s("h1",{id:"面包屑",tabindex:"-1"},[a("面包屑 "),s("a",{class:"header-anchor",href:"#面包屑","aria-hidden":"true"},"#")],-1),u=s("h2",{id:"基本用法",tabindex:"-1"},[a("基本用法 "),s("a",{class:"header-anchor",href:"#基本用法","aria-hidden":"true"},"#")],-1),h=s("p",null,[a("使用类 "),s("code",null,".breadcrumb"),a(" 来实现面包屑，通常搭配 "),s("code",null,"<ol>"),a("、"),s("code",null,"<li>"),a(" 元素使用。")],-1),y=s("ol",{class:"breadcrumb"},[s("li",null,[s("a",{href:"your/url/"},"首页")]),s("li",null,[s("a",{href:"your/url/"},"图书馆")]),s("li",{class:"active"},"数据")],-1),D=c(`<div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">ol</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">class</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;breadcrumb&quot;</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#7EE787;">li</span><span style="color:#C9D1D9;">&gt;&lt;</span><span style="color:#7EE787;">a</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">href</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;your/url/&quot;</span><span style="color:#C9D1D9;">&gt;首页&lt;/</span><span style="color:#7EE787;">a</span><span style="color:#C9D1D9;">&gt;&lt;/</span><span style="color:#7EE787;">li</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#7EE787;">li</span><span style="color:#C9D1D9;">&gt;&lt;</span><span style="color:#7EE787;">a</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">href</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;your/url/&quot;</span><span style="color:#C9D1D9;">&gt;图书馆&lt;/</span><span style="color:#7EE787;">a</span><span style="color:#C9D1D9;">&gt;&lt;/</span><span style="color:#7EE787;">li</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#7EE787;">li</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">class</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;active&quot;</span><span style="color:#C9D1D9;">&gt;数据&lt;/</span><span style="color:#7EE787;">li</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">ol</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="css-类" tabindex="-1">CSS 类 <a class="header-anchor" href="#css-类" aria-hidden="true">#</a></h2><p>面包屑提供了如下CSS类</p><table><thead><tr><th>类</th><th style="text-align:center;">类型</th><th>作用</th></tr></thead><tbody><tr><td><code>breadcrumb</code></td><td style="text-align:center;">实体类</td><td>元素作为面包屑组件</td></tr></tbody></table><h2 id="css-变量" tabindex="-1">CSS 变量 <a class="header-anchor" href="#css-变量" aria-hidden="true">#</a></h2><table><thead><tr><th>变量名称</th><th>变量含义</th></tr></thead><tbody><tr><td>--breadcrumb-divider</td><td>面包屑分割元素标签类型</td></tr><tr><td>--breadcrumb-divider-color</td><td>面包屑分割元素颜色</td></tr><tr><td>--breadcrumb-color-active</td><td>面包屑选中态元素颜色</td></tr></tbody></table>`,6);function b(C,_,m,E,g,f){const l=e("Example");return n(),o("div",null,[i,u,h,r(l,null,{default:p(()=>[y]),_:1}),D])}const v=t(d,[["render",b]]);export{F as __pageData,v as default};
