import{_ as e,r as l,o as t,c as o,a as p,w as r,b as s,d as a,g as c}from"./app.d1f77f5c.js";const S=JSON.parse('{"title":"\u73AF\u5F62\u8FDB\u5EA6\u6761","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":2,"title":"CSS \u7C7B","slug":"css-\u7C7B"},{"level":2,"title":"CSS\u53D8\u91CF","slug":"css\u53D8\u91CF"}],"relativePath":"lib/components/progress-circle/index.md","lastUpdated":null}'),i={name:"lib/components/progress-circle/index.md"},D=s("h1",{id:"\u73AF\u5F62\u8FDB\u5EA6\u6761",tabindex:"-1"},[a("\u73AF\u5F62\u8FDB\u5EA6\u6761 "),s("a",{class:"header-anchor",href:"#\u73AF\u5F62\u8FDB\u5EA6\u6761","aria-hidden":"true"},"#")],-1),d=s("h2",{id:"\u57FA\u672C\u7528\u6CD5",tabindex:"-1"},[a("\u57FA\u672C\u7528\u6CD5 "),s("a",{class:"header-anchor",href:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true"},"#")],-1),y=s("p",null,[a("\u6DFB\u52A0"),s("code",null,".progress-circle"),a("\u7C7B\u5230svg\u5143\u7D20\u4E0A\uFF0C\u53EF\u83B7\u5F97\u73AF\u5F62\u8FDB\u5EA6\u6761\u7684\u57FA\u672C\u6837\u5F0F\u3002")],-1),C=s("svg",{class:"progress-circle",percent:"40",circleSize:"24",BorderSize:"2",height:"24"},[s("circle",{cx:"12",cy:"12",r:"10"}),s("circle",{cx:"12",cy:"12",r:"10","stroke-dasharray":"69.09","stroke-dashoffset":"41.45"}),s("text",{x:"12",y:"14","dominant-baseline":"middle"},"40")],-1),u=c(`<div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">  const percent=40 ,circleSize=24 ,BorderSize=2,</span></span>
<span class="line"><span style="color:#C9D1D9;">  const radius = (circleSize - borderSize)/2; // 11</span></span>
<span class="line"><span style="color:#C9D1D9;">  const dashoffset = (percent/100) * 2 * Math.PI * (radius); // 41.45</span></span>
<span class="line"><span style="color:#C9D1D9;">  const dasharray = ((100 - percent)/100) * 2 * Math.PI * (radius); // 69.09</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#7EE787;">svg</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">class</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;progress-circle&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">height</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;24&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">width</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;24&quot;</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">     &lt;</span><span style="color:#7EE787;">circle</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">cx</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;12&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">cy</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;12&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">r</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;11&quot;</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">     &lt;</span><span style="color:#7EE787;">circle</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">cx</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;12&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">cy</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;12&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">r</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;11&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">stroke-dasharray</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;69.09&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">troke-dashoffset</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;41.45&quot;</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">     &lt;</span><span style="color:#7EE787;">text</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">x</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;12&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">y</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;14&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">dominant-baseline</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;middle&quot;</span><span style="color:#C9D1D9;"> &gt;40&lt;/</span><span style="color:#7EE787;">text</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;/</span><span style="color:#7EE787;">svg</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="css-\u7C7B" tabindex="-1">CSS \u7C7B <a class="header-anchor" href="#css-\u7C7B" aria-hidden="true">#</a></h2><p>\u8FDB\u5EA6\u6761\u63D0\u4F9B\u4E86\u5982\u4E0B CSS \u7C7B</p><table><thead><tr><th>\u7C7B</th><th style="text-align:center;">\u7C7B\u578B</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td><code>progress-circle</code></td><td style="text-align:center;">\u5B9E\u4F53\u7C7B</td><td>\u5143\u7D20\u4F5C\u4E3A\u8FDB\u5EA6\u6761\u7EC4\u4EF6</td></tr></tbody></table><h2 id="css\u53D8\u91CF" tabindex="-1">CSS\u53D8\u91CF <a class="header-anchor" href="#css\u53D8\u91CF" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53D8\u91CF\u540D\u79F0</th><th>\u53D8\u91CF\u542B\u4E49</th></tr></thead><tbody><tr><td>--progress-circle-bg</td><td>\u73AF\u5F62\u8FDB\u5EA6\u6761\u7EC4\u4EF6\u80CC\u666F\u989C\u8272</td></tr><tr><td>--progress-circle-bar-color</td><td>\u73AF\u5F62\u8FDB\u5EA6\u6761\u7EC4\u4EF6\u989C\u8272</td></tr></tbody></table>`,6);function h(F,b,_,m,g,q){const n=l("Example");return t(),o("div",null,[D,d,y,p(n,null,{default:r(()=>[C]),_:1}),u])}var f=e(i,[["render",h]]);export{S as __pageData,f as default};