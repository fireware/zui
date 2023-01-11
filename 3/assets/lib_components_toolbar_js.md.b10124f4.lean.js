import{_ as o,r,o as c,c as t,d as l,w as p,g as s,a as n}from"./app.bdadd8d5.js";const i={mounted(){onZUIReady(()=>{new zui.Toolbar("#toolbarExp",{items:[{type:"dropdown",icon:"icon-ellipsis-h",caret:!1,hint:"更多",dropdown:{items:[{text:"取消置顶"},{text:"开启免打扰"},{text:"取消订阅"}]}},{icon:"icon-phone",hint:"发起会议",className:"text-secondary"},{icon:"icon-chat-dot",hint:"消息记录",className:"text-warning"},{icon:"icon-step-forward",hint:"打开侧边栏",className:"text-important"}],onClickItem:e=>{console.log("> toolbar.onClickItem",e)}}),new zui.Toolbar("#toolbarExp2",{items:[{text:"全部"},{text:"未关闭",active:!0,className:"primary-pale font-bold"},{text:"未开始"},{text:"进行中"},{text:"已挂起"},{text:"已关闭"},{text:"搜索",icon:"icon-search"}]}),new zui.Toolbar("#editToolbar",{items:[{type:"dropdown",icon:"icon-header",caret:!0,hint:"段落",dropdown:{items:[{text:"标题1"},{text:"标题2"},{text:"标题3"},{text:"正文"}]}},{type:"dropdown",icon:"icon-font",caret:!0,hint:"字体",dropdown:{items:[{text:"宋体"},{text:"新宋体"},{text:"仿宋体"},{text:"黑体"}]}},{icon:"icon-bold",hint:"粗体"},{icon:"icon-italic",hint:"斜体"},{icon:"icon-underline",hint:"下划线"},{icon:"icon-strikethrough",hint:"消除线"},{icon:"icon-eraser",hint:"清楚格式"},{icon:"icon-align-justify",hint:"全屏"},{icon:"icon-align-left",hint:"左对齐"},{icon:"icon-list",hint:"项目符号"},{icon:"icon-smile",hint:"插入表情"},{icon:"icon-picture",hint:"图片"},{icon:"icon-link",hint:"超级链接"},{icon:"icon-reply",hint:"后退"},{icon:"icon-share-alt",hint:"前进"},{icon:"icon-resize",hint:"全屏"}]}),new zui.Toolbar("#dividerToolbar",{items:[{icon:"icon-smile",hint:"表情"},{icon:"icon-picture",hint:"图片"},{icon:"icon-cut",hint:"截取屏幕"},{type:"divider"},{icon:"icon-folder-close-alt",hint:"文件"},{icon:"icon-code",hint:"代码"},{icon:"icon-question-sign",hint:"技巧"}]}),new zui.Toolbar("#spaceToolbar1",{items:[{icon:"icon-ellipsis-v",hint:"菜单"},{type:"space",space:10},{icon:"icon-check-plus",hint:"添加"}]}),new zui.Toolbar("#disabledToolbar",{btnProps:{className:"text-primary"},items:[{icon:"icon-smile",hint:"表情"},{icon:"icon-picture",hint:"图片"},{icon:"icon-code",hint:"代码",disabled:!0},{icon:"icon-question-sign",hint:"技巧"}],onClickItem:e=>{console.log("> disabledToolbar.onClickItem",e)}})})}},B=JSON.parse('{"title":"工具栏生成器","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"结合编辑器使用","slug":"结合编辑器使用","link":"#结合编辑器使用","children":[]},{"level":2,"title":"展示分割线","slug":"展示分割线","link":"#展示分割线","children":[]},{"level":2,"title":"展示间距","slug":"展示间距","link":"#展示间距","children":[]},{"level":2,"title":"禁用","slug":"禁用","link":"#禁用","children":[]},{"level":2,"title":"引入","slug":"引入","link":"#引入","children":[{"level":3,"title":"通过 npm","slug":"通过-npm","link":"#通过-npm","children":[]},{"level":3,"title":"通过全局对象 zui","slug":"通过全局对象-zui","link":"#通过全局对象-zui","children":[]},{"level":3,"title":"使用 React 组件","slug":"使用-react-组件","link":"#使用-react-组件","children":[]},{"level":3,"title":"使用 jQuery 扩展","slug":"使用-jquery-扩展","link":"#使用-jquery-扩展","children":[]}]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[{"level":3,"title":"wrap","slug":"wrap","link":"#wrap","children":[]},{"level":3,"title":"gap","slug":"gap","link":"#gap","children":[]},{"level":3,"title":"items","slug":"items","link":"#items","children":[]},{"level":3,"title":"btnProps","slug":"btnprops","link":"#btnprops","children":[]},{"level":3,"title":"itemRender","slug":"itemrender","link":"#itemrender","children":[]},{"level":3,"title":"beforeRender","slug":"beforerender","link":"#beforerender","children":[]},{"level":3,"title":"afterRender","slug":"afterrender","link":"#afterrender","children":[]},{"level":3,"title":"beforeDestroy","slug":"beforedestroy","link":"#beforedestroy","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"ToolbarItemOptions","slug":"toolbaritemoptions","link":"#toolbaritemoptions","children":[]}]}],"relativePath":"lib/components/toolbar/js.md","lastUpdated":null}'),D=s("",3),d=n("div",{id:"toolbarExp"},null,-1),y=n("div",{id:"toolbarExp2"},null,-1),b=s("",2),u=n("div",{id:"editToolbar"},null,-1),h=s("",3),C=n("div",{id:"dividerToolbar"},null,-1),F=s("",3),m=n("div",{id:"spaceToolbar1"},null,-1),A=s("",2),g=n("div",{id:"disabledToolbar"},null,-1),_=s("",71);function x(e,f,v,T,k,w){const a=r("Example");return c(),t("div",null,[D,l(a,{class:"col gap-2"},{default:p(()=>[d,y]),_:1}),b,l(a,null,{default:p(()=>[u]),_:1}),h,l(a,null,{default:p(()=>[C]),_:1}),F,l(a,null,{default:p(()=>[m]),_:1}),A,l(a,{class:"col gap-2"},{default:p(()=>[g]),_:1}),_])}const z=o(i,[["render",x]]);export{B as __pageData,z as default};
