import{_ as o,h as n,p as i,o as c,c as d,C as l}from"./chunks/framework.a3326316.js";const m={};async function f(t,e){const a=window.frameElement;if(!a)throw new Error("[whyframe] page is not within an iframe");const r=a.dataset.whyId;if(!r)throw new Error("[whyframe] iframe does not have an id");const s=m[r];if(!s)throw new Error("[whyframe] no app found");return await(await s()).createApp(t,e)}function p(){let t=null;window.addEventListener("storage",()=>{let e=localStorage.getItem("vitepress-theme-appearance");e!==t&&(t=e,e==="auto"&&(e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),e==="light"?document.documentElement.classList.remove("dark"):e==="dark"&&document.documentElement.classList.add("dark"))})}const k=JSON.parse('{"title":"","description":"","frontmatter":{"layout":false,"head":[["link",{"rel":"stylesheet","href":"/zui.css"}],["script",{"src":"/zui.umd.cjs"}]]},"headers":[],"relativePath":"frames/zui.md","filePath":"frames/zui.md","lastUpdated":null}'),u={name:"frames/zui.md"},h=Object.assign(u,{setup(t){const e=n();return i(()=>{p(),f(e.value)}),(a,r)=>(c(),d("div",null,[l("div",{id:"vp-app",ref_key:"el",ref:e},null,512)]))}}),y=o(h,[["__scopeId","data-v-430f22fe"]]);export{k as __pageData,y as default};