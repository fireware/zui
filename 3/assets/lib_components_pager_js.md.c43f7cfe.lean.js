import{_ as F,H as g,o as d,c as h,J as o,E as t,C as a,a as y,V as E}from"./chunks/framework.a3326316.js";const u={mounted(){onZUIReady(()=>{new zui.Pager("#pagerExample1",{items:[{type:"info",text:"共 {recTotal} 项"},{type:"size-menu",text:"每页 {recPerPage} 项",dropdown:{placement:"top"}},{type:"link",page:"first",icon:"icon-double-angle-left",hint:"第一页"},{type:"link",page:"prev",icon:"icon-angle-left",hint:"上一页"},{type:"info",text:"{page}/{pageTotal}"},{type:"link",page:"next",icon:"icon-angle-right",hint:"下一页"},{type:"link",page:"last",icon:"icon-double-angle-right",hint:"最后一页"},{type:"goto",text:"跳转"}],page:2,recTotal:101,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}",onClickItem:s=>{console.log("> pagerExample1.onClickItem",s)}}),new zui.Pager("#pagerExample2",{items:[{type:"info",text:"共 {recTotal} 项"},{type:"size-menu",text:"每页 {recPerPage} 项",dropdown:{placement:"top"}},{type:"link",page:"first",icon:"icon-double-angle-left",hint:"第一页"},{type:"link",page:"prev",icon:"icon-angle-left",hint:"上一页"},{type:"nav",count:6},{type:"link",page:"next",icon:"icon-angle-right",hint:"下一页"},{type:"link",page:"last",icon:"icon-double-angle-right",hint:"最后一页"},{type:"goto",text:"跳转"}],page:2,recTotal:51,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}",onClickItem:s=>{if(s.item.type!=="nav")return;s.event.target.closest(".pager").querySelectorAll(".pager-nav").forEach(l=>{l.classList.remove("active")}),s.event.target.classList.add("active")}}),new zui.Pager("#pagerExample3",{items:[{type:"info",text:"共 {recTotal} 项"},{type:"link",page:"prev",icon:"icon-angle-left",hint:"上一页"},{type:"nav"},{type:"link",page:"next",icon:"icon-angle-right",hint:"下一页"}],page:2,recTotal:51,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}",onClickItem:s=>{if(s.item.type!=="nav")return;const p=s.event.target.closest(".pager"),e=["text-canvas","bg-primary"];p.querySelectorAll(".pager-nav").forEach(n=>{n.classList.remove(...e)}),s.event.target.classList.add(...e)}});const c={items:[{type:"link",page:"prev",icon:"icon-angle-left",hint:"上一页"},{type:"nav"},{type:"link",page:"next",icon:"icon-angle-right",hint:"下一页"}],page:2,recTotal:47,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}",onClickItem:s=>{if(s.item.type!=="nav")return;s.event.target.closest(".pager").querySelectorAll(".pager-nav").forEach(l=>{l.classList.remove("active")}),s.event.target.classList.add("active")}};new zui.Pager("#pagerAllCount",{...c});const r=new zui.Pager("#pagerMaxCount",{items:[{type:"link",page:"prev",icon:"icon-angle-left",hint:"上一页"},{type:"nav",count:6},{type:"link",page:"next",icon:"icon-angle-right",hint:"下一页"}],page:1,recTotal:101,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}",onClickItem:s=>{var n;const p=(n=s.event.target.querySelector(".text"))==null?void 0:n.innerText;if(Number(p)&&r.render({page:Number(p)}),s.item.type!=="nav")return;s.event.target.closest(".pager").querySelectorAll(".pager-nav").forEach(i=>{i.classList.remove("active")}),s.event.target.classList.add("active")}});new zui.Pager("#pagerGoto",{items:[{type:"link",page:"prev",icon:"icon-angle-left",hint:"上一页"},{type:"info",text:"{page}/{pageTotal}"},{type:"link",page:"next",icon:"icon-angle-right",hint:"下一页"},{type:"goto",text:"跳转"}],page:1,recTotal:101,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}"}),new zui.Pager("#pagerNav1",{btnProps:{btnType:"border"},...c,onClickItem:s=>{if(s.item.type!=="nav")return;const e=s.event.target.closest(".pager").querySelectorAll(".pager-nav"),l=["text-canvas","bg-primary"];e.forEach(n=>{n.classList.remove(...l)}),s.event.target.classList.add(...l)}})})}},w=JSON.parse('{"title":"分页生成器","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/pager/js.md","filePath":"lib/components/pager/js.md","lastUpdated":null}'),B=a("h1",{id:"分页生成器",tabindex:"-1"},[y("分页生成器 "),a("a",{class:"header-anchor",href:"#分页生成器","aria-label":'Permalink to "分页生成器"'},"​")],-1),m=a("p",null,"当数据量过多时，使用分页生成器动态分解数据。",-1),C=a("h2",{id:"综合用法",tabindex:"-1"},[y("综合用法 "),a("a",{class:"header-anchor",href:"#综合用法","aria-label":'Permalink to "综合用法"'},"​")],-1),P=a("div",{id:"pagerExample1"},null,-1),f=a("div",{id:"pagerExample2"},null,-1),b=a("div",{id:"pagerExample3"},null,-1),v=E("",2),k=a("div",{id:"pagerAllCount"},null,-1),x=a("p",null,"大于 6 页时的效果：",-1),_=a("div",{id:"pagerMaxCount"},null,-1),q=E("",2),T=a("div",{id:"pagerGoto"},null,-1),A=E("",3),I=a("div",{id:"pagerNav1"},null,-1),D=E("",58);function z(c,r,s,p,e,l){const n=g("Example");return d(),h("div",null,[B,m,C,o(n,{class:"col gap-2"},{default:t(()=>[P,f,b]),_:1}),v,o(n,{class:"col gap-2"},{default:t(()=>[k,x,_]),_:1}),q,o(n,null,{default:t(()=>[T]),_:1}),A,o(n,{class:"col gap-2"},{default:t(()=>[I]),_:1}),D])}const L=F(u,[["render",z]]);export{w as __pageData,L as default};