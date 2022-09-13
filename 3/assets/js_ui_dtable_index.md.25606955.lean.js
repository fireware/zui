import{_ as f,r as v,o as T,c as w,a,w as l,g as o,b as s,d as c}from"./app.9001e8fd.js";let i=0;const d=[];function _(r){if(i&&(cancelAnimationFrame(i),i=0),r&&d.push(r),typeof window=="object"&&window.zui){d.forEach(e=>e()),d.length=0;return}i=requestAnimationFrame(()=>_())}const x=[{name:"id",title:"ID",width:60,fixed:"left",checkbox:!0},{name:"project",title:"\u9879\u76EE\u540D\u79F0",width:200,fixed:"left",type:"link",sortType:!1,nestedToggle:!0},{name:"manager",title:"\u8D1F\u8D23\u4EBA",width:60,sortType:!1,flex:1,type:"avatar",avatarKey:"managerAvatar",avatarWithName:!0,avatarClass:"size-xs circle"},{name:"progress",title:"\u8FDB\u5EA6",width:65,align:"center",sortType:!1,type:"circleProgress"},{name:"storyPoints",title:"\u9700\u6C42\u89C4\u6A21",width:80,align:"right",sortType:!1,type:"format",format:{type:"html",format:r=>`${Number(r).toFixed(1)} <small class="text-gray">SP</small>`}},{name:"executionCounts",title:"\u6267\u884C\u6570",width:70,align:"center",sortType:!1,type:"format",format:{type:"html",format:'{0} <small class="text-dark">\u8FED\u4EE3</small>'}},{name:"investedDays",title:"\u5DF2\u6295\u5165",width:70,align:"center",sortType:!1,type:"format",format:{type:"html",format:'{0} <small class="text-dark">\u4EBA\u5929</small>'}},{name:"startDate",title:"\u5F00\u59CB\u65E5\u671F",width:90,align:"center",sortType:!1,type:"format",format:{type:"datetime",format:"yyyy\u5E74MM\u6708dd\u65E5"}},{name:"finishDate",title:"\u5B8C\u6210\u65E5\u671F",width:90,align:"center",sortType:!1,type:"format",format:{type:"datetime",format:"yyyy\u5E74MM\u6708dd\u65E5"}},{name:"actions",title:"\u64CD\u4F5C",width:120,sortType:!1,fixed:"right",onRenderCell(r,{col:e,rowData:p}){return[{html:p[e.name].map(t=>`<a href="#action=${t}">${{start:"\u5F00\u59CB",close:"\u5173\u95ED",edit:"\u7F16\u8F91"}[t]||t}</a>`).join(" ")}]}}],y=["\u7985\u9053\u5F00\u6E90\u7248","\u7985\u9053\u4F01\u4E1A\u7248","\u7985\u9053\u65D7\u8230\u7248","\u7985\u9053\u79FB\u52A8\u7AEF","\u7985\u9053\u81EA\u52A8\u5316\u6D4B\u8BD5\u793E\u533A","ZUI3","ZenDAS","\u6E20\u6210\u4E91\u539F\u751F\u5E94\u7528\u4EA4\u4ED8\u5E73\u53F0","ZTF","ZenData","ZentaoPHP","\u55A7\u55A7","ZSite","ZDOO","ZenTools","ZenShot","ZenPanel","ZBox","MZUI"],b=["\u674E\u5F3A","\u5F20\u5929\u660E","\u5B59\u5C0F\u5FAE","\u738B\u840C","\u5218\u5927\u8F89","\u5468\u7EA2","\u674E\u5170","\u91D1\u661F","\u9B4F\u5C0F\u5A1F","\u5F20\u4EAE","\u9A6C\u5E7F\u6625","\u4E01\u7389\u6D9B"],u=Date.now();function B(r){const e=Math.floor(Math.random()*b.length),p=r+1;return{id:`${p}`,project:`${y[r%y.length]}${Math.floor(r/y.length)||""}`,manager:b[e],managerAvatar:`../../../assets/avatar/avatar-${1+e%10}.png`,storyPoints:Math.floor(Math.random()*1e3),executionCounts:Math.floor(Math.random()*50),investedDays:Math.floor(Math.random()*60),startDate:new Date(u-Math.floor(Math.random()*100*(3600*1e3*24))).toLocaleDateString(),finishDate:new Date(u+Math.floor(Math.random()*100*(3600*1e3*24))).toLocaleDateString(),progress:Math.floor(Math.random()*100),actions:["start","edit","close"],parent:`${["","","",p-1,p-2,p-3,p-3,p-4,"",""][p%10]}`}}const h=Array(100).fill(0).map((r,e)=>B(e)),m={"dtable-advanced":{checkOnClickRow:!0,plugins:["checkable","nested","rich"],striped:!0,colHover:"header",bordered:!0,cols:{id:{sortType:"down",width:70},manager:{width:90,sortType:!0},executionCounts:{align:"right",sortType:!0},investedDays:{align:"right"},startDate:{width:120,sortType:!0},finishDate:{width:120,sortType:!0},actions:{type:"actionButtons",width:100,onRenderCell:null,actionBtnData:{start:{title:"\u5F00\u59CB",icon:"play"},close:{title:"\u5173\u95ED",icon:"off"},edit:{title:"\u7F16\u8F91",icon:"pencil"}},style:{justifyContent:"center"}}}},"dtable-layout-size":{width:"auto",height:{min:200,max:300},data:5,cols:{manager:!1,storyPoints:!1,executionCounts:!1,startDate:!1,finishDate:!1,actions:!1}},"dtable-responsive":{height:"auto",data:5,responsive:!0,cols:{project:{fixed:!1,flex:1,width:"auto"},manager:!1,storyPoints:!1,executionCounts:!1,startDate:!1,finishDate:!1,actions:!1}},"dtable-flex":{height:"auto",data:5,cols:{project:{fixed:!1,flex:3,width:"auto"},investedDays:{flex:2,width:"auto"},progress:{flex:1,width:"auto"},manager:!1,storyPoints:!1,executionCounts:!1,startDate:!1,finishDate:!1,actions:!1}},"dtable-cols-fixed":{height:"auto",data:5,cols:{project:{fixed:!1,flex:3,minWidth:300},investedDays:{flex:2,width:"auto",minWidth:100},progress:{flex:1,width:"auto",minWidth:100},manager:!1,storyPoints:!1,executionCounts:!1,startDate:!1,finishDate:!1}},"dtable-header-height":{height:"auto",data:5,headerHeight:50},"dtable-header-hidden":{height:"auto",data:5,header:!1},"dtable-header-custom":{height:"auto",data:5},"dtable-row-height":{height:"auto",data:5,rowHeight:50},"dtable-sort-type":{height:"auto",data:5,cols:{id:{sortType:"up"},project:{fixed:!1,flex:3,width:"auto",sortType:!1},investedDays:{flex:2,width:"auto",sortType:!0},progress:{flex:1,width:"auto",sortType:!0},manager:!1,storyPoints:!1,executionCounts:!1,startDate:!1,finishDate:!1,actions:!1}},"dtable-hover-effection":{height:"auto",data:5,rowHover:!0,colHover:!0,cellHover:!0},"dtable-hover-effection-custom":{height:"auto",data:5,rowHover:!0,colHover:!0,cellHover:!0},"dtable-striped":{height:"auto",data:5,striped:!0},"dtable-striped-custom":"dtable-striped","dtable-bordered":{height:"auto",data:5,bordered:!0},"dtable-bordered-custom":"dtable-bordered","dtable-scrollbar":{scrollbarHover:!0,scrollbarSize:15,horzScrollbarPos:"inside",data:6,height:200},"dtable-scrollbar-custom":"dtable-scrollbar","dtable-cell-style":{height:"auto",data:5,cols:{id:{style:{color:"var(--color-danger-500)"}},project:{fixed:!1,flex:3,minWidth:300,cellStyle:{fontWeight:"bold",color:"var(--color-primary-500)"}},investedDays:!1,progress:{flex:1,width:"auto",minWidth:100},manager:!1,storyPoints:!1,executionCounts:!1,startDate:!1,finishDate:!1,actions:{align:"center",cellStyle:{justifyContent:"end"}}}},"dtable-checkable":{height:"auto",data:5,checkOnClickRow:!0,plugins:["checkable"]},"dtable-nested":{plugins:["nested"]},"dtable-render-cell":{cols:{actions:{onRenderCell(r,{col:e,rowData:p}){return[{html:p[e.name].map(t=>t==="start"?`<a href="#action=${t}" title="\u5F00\u59CB" class="btn square primary-pale size-sm"><i class="icon icon-play"></i></a>`:t==="edit"?`<a href="#action=${t}" title="\u7F16\u8F91" class="btn square primary-pale size-sm"><i class="icon icon-pencil"></i></a>`:t==="close"?`<a href="#action=${t}" title="\u7F16\u8F91" class="btn square primary-pale size-sm"><i class="icon icon-off"></i></a>`:`<a href="#action=${t}">${t}</a>`).join(" ")}]}}}}};function S(r){let e=m[r]||{};return typeof e=="string"&&(e=m[e]||{}),{height:400,striped:!1,...e,data:typeof e.data=="number"?h.slice(0,e.data):h,cols:x.map(p=>{if(e.cols){const t=e.cols[p.name];if(t)return{...p,...t};if(t===!1)return{...p,hidden:!0}}return p})}}let F=0;function g(){F&&cancelAnimationFrame(F),F=requestAnimationFrame(A)}function A(){const r=document.querySelectorAll('[id^="dtable-"]');let e=0;r.forEach(p=>{if(p.classList.contains("dtable-inited")){e++;return}if(!window.zui.browser.isElementVisible(p))return;const t=p.id,D=S(t),C=new window.zui.DTable(p,D);p.classList.add("dtable-inited"),console.log("> dtable inited",C),e++}),e===r.length&&document.removeEventListener("scroll",g)}var P={mounted(){_(A),document.addEventListener("scroll",g)}};const I=P,Rs=JSON.parse('{"title":"\u6570\u636E\u8868\u683C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":3,"title":"\u57FA\u672C\u529F\u80FD","slug":"\u57FA\u672C\u529F\u80FD"},{"level":3,"title":"\u589E\u5F3A\u529F\u80FD","slug":"\u589E\u5F3A\u529F\u80FD"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u5185\u5BB9","slug":"\u5185\u5BB9"},{"level":3,"title":"\u5B9A\u4E49\u5217","slug":"\u5B9A\u4E49\u5217"},{"level":3,"title":"\u5B9A\u4E49\u6570\u636E","slug":"\u5B9A\u4E49\u6570\u636E"},{"level":3,"title":"\u8FC7\u6EE4","slug":"\u8FC7\u6EE4"},{"level":3,"title":"\u6392\u5E8F","slug":"\u6392\u5E8F"},{"level":2,"title":"\u5E03\u5C40","slug":"\u5E03\u5C40"},{"level":3,"title":"\u5BBD\u548C\u9AD8","slug":"\u5BBD\u548C\u9AD8"},{"level":3,"title":"\u54CD\u5E94\u5F0F","slug":"\u54CD\u5E94\u5F0F"},{"level":3,"title":"\u5217\u5BBD","slug":"\u5217\u5BBD"},{"level":3,"title":"\u56FA\u5B9A\u4E24\u4FA7\u7684\u5217","slug":"\u56FA\u5B9A\u4E24\u4FA7\u7684\u5217"},{"level":3,"title":"\u8868\u5934","slug":"\u8868\u5934"},{"level":3,"title":"\u8868\u5C3E","slug":"\u8868\u5C3E"},{"level":3,"title":"\u884C\u9AD8","slug":"\u884C\u9AD8"},{"level":2,"title":"\u5916\u89C2","slug":"\u5916\u89C2"},{"level":3,"title":"\u6392\u5E8F\u6807\u8BB0","slug":"\u6392\u5E8F\u6807\u8BB0"},{"level":3,"title":"\u9F20\u6807\u60AC\u505C\u6548\u679C","slug":"\u9F20\u6807\u60AC\u505C\u6548\u679C"},{"level":3,"title":"\u9694\u884C\u53D8\u8272","slug":"\u9694\u884C\u53D8\u8272"},{"level":3,"title":"\u5B8C\u6574\u8FB9\u6846","slug":"\u5B8C\u6574\u8FB9\u6846"},{"level":3,"title":"\u6EDA\u52A8\u6761","slug":"\u6EDA\u52A8\u6761"},{"level":3,"title":"\u5355\u5143\u683C\u6837\u5F0F","slug":"\u5355\u5143\u683C\u6837\u5F0F"},{"level":2,"title":"\u884C\u9009\u4E2D\u4EA4\u4E92","slug":"\u884C\u9009\u4E2D\u4EA4\u4E92"},{"level":2,"title":"\u591A\u5C42\u7EA7\u6570\u636E\u7ED3\u6784","slug":"\u591A\u5C42\u7EA7\u6570\u636E\u7ED3\u6784"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u6E32\u67D3","slug":"\u81EA\u5B9A\u4E49\u6E32\u67D3"},{"level":2,"title":"\u5355\u5143\u683C\u7C7B\u578B","slug":"\u5355\u5143\u683C\u7C7B\u578B"},{"level":2,"title":"\u52A8\u6001\u884C\u6570\u636E","slug":"\u52A8\u6001\u884C\u6570\u636E"},{"level":2,"title":"\u52A8\u6001\u66F4\u65B0","slug":"\u52A8\u6001\u66F4\u65B0"},{"level":2,"title":"\u6EDA\u52A8\u4F4D\u7F6E\u63A7\u5236","slug":"\u6EDA\u52A8\u4F4D\u7F6E\u63A7\u5236"},{"level":2,"title":"\u63D2\u4EF6\u673A\u5236","slug":"\u63D2\u4EF6\u673A\u5236"},{"level":2,"title":"CSS \u53D8\u91CF","slug":"css-\u53D8\u91CF"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"\u521D\u59CB\u5316\u9009\u9879","slug":"\u521D\u59CB\u5316\u9009\u9879"},{"level":3,"title":"\u5217\u5B9A\u4E49","slug":"\u5217\u5B9A\u4E49"},{"level":3,"title":"\u884C\u6570\u636E\u5B9A\u4E49","slug":"\u884C\u6570\u636E\u5B9A\u4E49"},{"level":3,"title":"\u63D2\u4EF6\u5B9A\u4E49","slug":"\u63D2\u4EF6\u5B9A\u4E49"},{"level":3,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5"}],"relativePath":"js/ui/dtable/index.md","lastUpdated":null}'),E=o("",6),j=s("div",{id:"dtable-basic"},null,-1),V=s("h3",{id:"\u589E\u5F3A\u529F\u80FD",tabindex:"-1"},[c("\u589E\u5F3A\u529F\u80FD "),s("a",{class:"header-anchor",href:"#\u589E\u5F3A\u529F\u80FD","aria-hidden":"true"},"#")],-1),z=s("p",null,"\u4E0B\u9762\u7684\u793A\u4F8B\u4E2D\u5C55\u793A\u4E86\u901A\u8FC7\u5185\u7F6E\u63D2\u4EF6\u4EE5\u53CA\u5B9A\u5236\u5316\u9009\u9879\u5B9E\u73B0\u7684\u589E\u5F3A\u529F\u80FD\uFF0C\u5305\u62EC\uFF1A",-1),R=s("ul",null,[s("li",null,"\u5728\u8868\u5934\u663E\u793A\u6392\u5E8F\u6807\u8BB0\uFF1B"),s("li",null,"\u884C\u9009\u4E2D\u4EA4\u4E92\uFF1B"),s("li",null,"\u591A\u5C42\u7EA7\u6570\u636E\u7ED3\u6784\uFF0C\u652F\u6301\u5C55\u5F00\u6298\u53E0\uFF1B"),s("li",null,"\u7279\u6B8A\u4EA4\u4E92\u548C\u5916\u89C2\uFF0C\u5305\u62EC\uFF1A\u9F20\u6807\u60AC\u505C\u6548\u679C\u3001\u9694\u884C\u53D8\u8272\u3001\u5B8C\u6574\u8FB9\u6846\u7B49\uFF1B"),s("li",null,"\u4E30\u5BCC\u7684\u5355\u5143\u683C\u6E32\u67D3\u683C\u5F0F\uFF0C\u5305\u62EC\u94FE\u63A5\u3001\u5934\u50CF\u3001\u73AF\u5F62\u8FDB\u5EA6\u6761\uFF0C\u683C\u5F0F\u5316\u6587\u672C\u548C\u64CD\u4F5C\u6309\u94AE\u7B49\u3002")],-1),q=s("div",{id:"dtable-advanced"},null,-1),k=o("",34),N=s("div",{id:"dtable-layout-size"},null,-1),H=s("h3",{id:"\u54CD\u5E94\u5F0F",tabindex:"-1"},[c("\u54CD\u5E94\u5F0F "),s("a",{class:"header-anchor",href:"#\u54CD\u5E94\u5F0F","aria-hidden":"true"},"#")],-1),$=s("p",null,[c("\u901A\u8FC7\u9009\u9879 "),s("code",null,"responsive"),c(" \u6765\u8BA9\u6570\u636E\u8868\u683C\u83B7\u5F97\u54CD\u5E94\u5F0F\u7279\u6027\uFF1A\u5F53\u6570\u636E\u8868\u683C\u6240\u5C5E\u7684\u7236\u7EA7\u5BB9\u5668\u5C3A\u5BF8\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u81EA\u52A8\u6839\u636E\u5C3A\u5BF8\u5B9A\u4E49\u91CD\u65B0\u6E32\u67D3\u3002")],-1),M=s("div",{id:"dtable-responsive"},null,-1),W=o("",7),Z=s("div",{id:"dtable-flex"},null,-1),L=o("",4),O=s("div",{id:"dtable-cols-fixed"},null,-1),U=o("",5),K=s("div",{id:"dtable-header-height"},null,-1),J=o("",3),G=s("div",{id:"dtable-header-hidden"},null,-1),Q=o("",3),X=c(" [\u4F8B\u5B50\u5F85\u5B9A] "),Y=s("p",null,[s("strong",null,"\u5B9A\u5236\u8868\u5934\u80CC\u666F\u8272")],-1),ss=s("p",null,[c("\u901A\u8FC7 CSS \u53D8\u91CF "),s("code",null,"--dtable-header-bg"),c(" \u6765\u8BBE\u7F6E\u8868\u5934\u80CC\u666F\u8272\u3002")],-1),ns=s("div",{id:"dtable-header-custom"},null,-1),as=o("",3),ls=c(" [\u4F8B\u5B50\u5F85\u5B9A] "),es=s("h3",{id:"\u884C\u9AD8",tabindex:"-1"},[c("\u884C\u9AD8 "),s("a",{class:"header-anchor",href:"#\u884C\u9AD8","aria-hidden":"true"},"#")],-1),ps=s("p",null,[c("\u901A\u8FC7\u9009\u9879 "),s("code",null,"rowHeight"),c(" \u6765\u8BBE\u7F6E\u884C\u9AD8\uFF0C\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A "),s("code",null,"35"),c("\u3002")],-1),os=s("div",{id:"dtable-row-height"},null,-1),ts=o("",6),rs=s("div",{id:"dtable-sort-type"},null,-1),cs=o("",4),is=s("div",{id:"dtable-hover-effection"},null,-1),Ds=o("",4),ds=s("div",{id:"dtable-hover-effection-custom"},null,-1),ys=o("",3),Fs=s("div",{id:"dtable-striped"},null,-1),Cs=o("",3),bs=s("div",{id:"dtable-striped-custom"},null,-1),us=o("",3),hs=s("div",{id:"dtable-bordered"},null,-1),ms=o("",3),_s=s("div",{id:"dtable-bordered-custom"},null,-1),gs=o("",4),As=s("div",{id:"dtable-scrollbar"},null,-1),fs=o("",3),vs=s("div",{id:"dtable-scrollbar-custom"},null,-1),Ts=o("",4),ws=s("div",{id:"dtable-cell-style"},null,-1),xs=o("",7),Bs=s("div",{id:"dtable-checkable"},null,-1),Ss=o("",7),Ps=s("div",{id:"dtable-nested"},null,-1),Is=o("",8),Es=s("div",{id:"dtable-render-cell"},null,-1),js=o("",29);function Vs(r,e,p,t,D,C){const n=v("Example");return T(),w("div",null,[E,a(n,null,{default:l(()=>[j]),_:1}),V,z,R,a(n,null,{default:l(()=>[q]),_:1}),k,a(n,null,{default:l(()=>[N]),_:1}),H,$,a(n,null,{default:l(()=>[M]),_:1}),W,a(n,null,{default:l(()=>[Z]),_:1}),L,a(n,null,{default:l(()=>[O]),_:1}),U,a(n,null,{default:l(()=>[K]),_:1}),J,a(n,null,{default:l(()=>[G]),_:1}),Q,a(n,null,{default:l(()=>[X]),_:1}),Y,ss,a(n,null,{default:l(()=>[ns]),_:1}),as,a(n,null,{default:l(()=>[ls]),_:1}),es,ps,a(n,null,{default:l(()=>[os]),_:1}),ts,a(n,null,{default:l(()=>[rs]),_:1}),cs,a(n,null,{default:l(()=>[is]),_:1}),Ds,a(n,null,{default:l(()=>[ds]),_:1}),ys,a(n,null,{default:l(()=>[Fs]),_:1}),Cs,a(n,null,{default:l(()=>[bs]),_:1}),us,a(n,null,{default:l(()=>[hs]),_:1}),ms,a(n,null,{default:l(()=>[_s]),_:1}),gs,a(n,null,{default:l(()=>[As]),_:1}),fs,a(n,null,{default:l(()=>[vs]),_:1}),Ts,a(n,null,{default:l(()=>[ws]),_:1}),xs,a(n,null,{default:l(()=>[Bs]),_:1}),Ss,a(n,null,{default:l(()=>[Ps]),_:1}),Is,a(n,null,{default:l(()=>[Es]),_:1}),js])}var qs=f(I,[["render",Vs]]);export{Rs as __pageData,qs as default};
