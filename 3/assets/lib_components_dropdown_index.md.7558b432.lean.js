import{r as u,o as r,c,a as l,w as o,b as s,d as n,g as e,F as i,e as y,t as d}from"./app.476f05cb.js";const C=s("h1",{id:"下拉菜单",tabindex:"-1"},[n("下拉菜单 "),s("a",{class:"header-anchor",href:"#下拉菜单","aria-hidden":"true"},"#")],-1),b=s("p",null,"将动作或菜单折叠到下拉菜单中。",-1),m=s("h2",{id:"基本用法",tabindex:"-1"},[n("基本用法 "),s("a",{class:"header-anchor",href:"#基本用法","aria-hidden":"true"},"#")],-1),F=s("p",null,[n("点击按钮，展开更多操作。如需默认展开，可在 "),s("code",null,".dropdown"),n(" 类上添加 "),s("code",null,".open"),n(" 类")],-1),g=s("button",{class:"btn",type:"button","data-toggle":"dropdown"},[n("菜单按钮 "),s("span",{class:"caret"})],-1),E=s("menu",{class:"dropdown-menu menu"},[s("li",{class:"menu-item"},[s("a",null,"操作")]),s("li",{class:"menu-item"},[s("a",null,"另一个操作")]),s("li",{class:"menu-item"},[s("a",null,"更多操作")])],-1),h=e("",3),_=s("button",{class:"btn",type:"button","data-toggle":"dropdown","data-arrow":"true"},[n("菜单按钮 "),s("span",{class:"caret"})],-1),w=s("menu",{class:"dropdown-menu menu"},[s("li",{class:"menu-item"},[s("a",null,"操作")]),s("li",{class:"menu-item"},[s("a",null,"另一个操作")]),s("li",{class:"menu-item"},[s("a",null,"更多操作")])],-1),q=e("",3),f={class:"flex-1"},A={class:"font-bold pb-4"},x=["data-arrow"],v=n("菜单按钮 "),T=s("span",{class:"caret"},null,-1),S=[v,T],k=s("menu",{class:"dropdown-menu menu"},[s("li",{class:"menu-item"},[s("a",null,"操作")]),s("li",{class:"menu-item"},[s("a",null,"另一个操作")]),s("li",{class:"menu-item"},[s("a",null,"更多操作")])],-1),j=e("",3),I=s("button",{class:"btn",type:"button","data-toggle":"dropdown","data-trigger":"hover"},[n("菜单按钮 "),s("span",{class:"caret"})],-1),P=s("menu",{class:"dropdown-menu menu"},[s("li",{class:"menu-item"},[s("a",null,"操作")]),s("li",{class:"menu-item"},[s("a",null,"另一个操作")]),s("li",{class:"menu-item"},[s("a",null,"更多操作")])],-1),V=e("",3),N=["data-placement"],R=s("span",{class:"caret"},null,-1),B=s("menu",{class:"dropdown-menu menu"},[s("li",{class:"menu-item"},[s("a",null,"操作")]),s("li",{class:"menu-item"},[s("a",null,"另一个操作")]),s("li",{class:"menu-item"},[s("a",null,"更多操作")])],-1),z={class:"w-48 py-2 font-bold text-sm"},O=e("",3),U=s("button",{class:"btn",type:"button","data-toggle":"dropdown",id:"dropdownToggle"}," 多级菜单按钮 ",-1),J=e("",3),L=s("button",{class:"btn",type:"button","data-toggle":"dropdown"},[n("自定义下拉菜单 "),s("span",{class:"caret"})],-1),Z=s("menu",{class:"dropdown-menu custom flex-1 flex-wrap bg-canvas"},[s("span",{class:"w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex"},"5"),s("span",{class:"w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex"},"10"),s("span",{class:"w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex"},"15"),s("span",{class:"w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex"},"20"),s("span",{class:"w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex"},"25"),s("span",{class:"w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex"},"30"),s("span",{class:"w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex"},"35"),s("span",{class:"w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex"},"40"),s("span",{class:"w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex"},"45"),s("span",{class:"w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex"},"50"),s("span",{class:"w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex"},"55"),s("span",{class:"w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex"},"60")],-1),G=e("",3),H=s("button",{class:"btn",type:"button","data-toggle":"dropdown"},[n("菜单按钮 "),s("span",{class:"caret"})],-1),K=s("menu",{class:"dropdown-menu menu"},[s("li",{class:"menu-item"},[s("a",null,"操作")]),s("li",{class:"menu-item disabled"},[s("a",null,"被禁用的操作")])],-1),M=e("",3),Q=s("button",{class:"btn",type:"button","data-toggle":"dropdown"},[n("菜单按钮 "),s("span",{class:"caret"})],-1),W=s("menu",{class:"dropdown-menu menu"},[s("li",{class:"menu-heading"},"下拉菜单标题"),s("li",{class:"menu-item"},[s("a",null,"操作")]),s("li",{class:"menu-item"},[s("a",null,"另一个操作")]),s("li",{class:"menu-divider"}),s("li",{class:"menu-heading"},"更多操作"),s("li",{class:"menu-item"},[s("a",null,"修改")])],-1),X=e("",21),Y={mounted(){onZUIReady(()=>{const D=new zui.Dropdown("#dropdownToggle",{arrow:!0,menu:{items:[{text:"复制",icon:"icon-copy"},{text:"粘贴",icon:"icon-paste"},{text:"剪切"},{text:"更多操作",items:[{text:"导入",icon:"icon-upload-alt"},{text:"导出",icon:"icon-download-alt"},{text:"保存",icon:"icon-save",onClick:p=>console.log("> menuItem.clicked",p)},{text:"点击此项不关闭菜单",className:"not-hide-menu"}]}]}});console.log(D,"dropdown")})}},as=JSON.parse('{"title":"下拉菜单","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"显示箭头","slug":"显示箭头","link":"#显示箭头","children":[{"level":3,"title":"改变箭头大小","slug":"改变箭头大小","link":"#改变箭头大小","children":[]}]},{"level":2,"title":"鼠标悬停展开菜单","slug":"鼠标悬停展开菜单","link":"#鼠标悬停展开菜单","children":[]},{"level":2,"title":"浮动方向","slug":"浮动方向","link":"#浮动方向","children":[]},{"level":2,"title":"多级子菜单","slug":"多级子菜单","link":"#多级子菜单","children":[]},{"level":2,"title":"自定义菜单","slug":"自定义菜单","link":"#自定义菜单","children":[]},{"level":2,"title":"禁用的菜单项","slug":"禁用的菜单项","link":"#禁用的菜单项","children":[]},{"level":2,"title":"标题和分割线","slug":"标题和分割线","link":"#标题和分割线","children":[]},{"level":2,"title":"CSS 类","slug":"css-类","link":"#css-类","children":[]},{"level":2,"title":"CSS 变量","slug":"css-变量","link":"#css-变量","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"DropdownOptions","slug":"dropdownoptions","link":"#dropdownoptions","children":[]}]}],"relativePath":"lib/components/dropdown/index.md","lastUpdated":null}'),ls=Object.assign(Y,{__name:"index",setup(D){const p=[{placement:"top-start",name:"上方左侧对齐"},{placement:"top",name:"上方居中对齐"},{placement:"top-end",name:"上方右侧对齐"},{placement:"bottom-start",name:"下方左侧对齐"},{placement:"bottom",name:"下方居中对齐"},{placement:"bottom-end",name:"下方右侧对齐"},{placement:"left-start",name:"左侧上方对齐"},{placement:"left",name:"左侧居中对齐"},{placement:"left-end",name:"左侧下方对齐"},{placement:"right-start",name:"右侧上方对齐"},{placement:"right",name:"右侧居中对齐"},{placement:"right-end",name:"右侧下方对齐"}];return($,ss)=>{const a=u("Example");return r(),c("div",null,[C,b,m,F,l(a,{class:"flex gap-4"},{default:o(()=>[g,E]),_:1}),h,l(a,null,{default:o(()=>[_,w]),_:1}),q,l(a,{class:"flex"},{default:o(()=>[(r(),c(i,null,y(4,t=>s("div",f,[s("div",A,d("data-arrow = "+4*t),1),s("button",{class:"btn",type:"button","data-toggle":"dropdown","data-arrow":4*t},S,8,x),k])),64))]),_:1}),j,l(a,null,{default:o(()=>[I,P]),_:1}),V,l(a,{class:"flex flex-wrap gap-4"},{default:o(()=>[(r(),c(i,null,y(p,t=>s("div",null,[s("button",{class:"btn",type:"button","data-toggle":"dropdown","data-placement":t.placement,"data-arrow":"true"},[n(d(t.name),1),R],8,N),B,s("div",z,d("data-placement = "+t.placement),1)])),64))]),_:1}),O,l(a,null,{default:o(()=>[U]),_:1}),J,l(a,{class:"flex gap-4"},{default:o(()=>[L,Z]),_:1}),G,l(a,{class:"flex gap-4"},{default:o(()=>[H,K]),_:1}),M,l(a,{class:"flex gap-4"},{default:o(()=>[Q,W]),_:1}),X])}}});export{as as __pageData,ls as default};