import{h as y,j as V,O as b,C as w,o as d,b as x,w as H,k as o,H as M,l as _,c as g,a as A,_ as N,r as k,x as Z,s as f,a3 as $,a4 as P,a5 as E,a6 as S,a7 as I,a8 as T,a9 as R,aa as O,ab as B,ac as D,X as j,d as q,u as F,y as U,ad as z,ae as G,af as W,ag as X}from"./chunks/framework.71efb94b.js";import{t as L}from"./chunks/theme.c1ecc50c.js";const J="https://github.com/southern-aurora/bao-docs",c=["zh","en"],m=y("none"),h=y(!0);const K={class:"doc-before-container"},Q={key:0,class:"language-selector"},Y=o("div",{class:"message"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[o("path",{fill:"var(--vp-c-text-1)",d:"M5 15V17C5 18.0544 5.81588 18.9182 6.85074 18.9945L7 19H10V21H7C4.79086 21 3 19.2091 3 17V15H5ZM18 10L22.4 21H20.245L19.044 18H14.954L13.755 21H11.601L16 10H18ZM17 12.8852L15.753 16H18.245L17 12.8852ZM8 2V4H12V11H8V14H6V11H2V4H6V2H8ZM17 3C19.2091 3 21 4.79086 21 7V9H19V7C19 5.89543 18.1046 5 17 5H14V3H17ZM6 6H4V9H6V6ZM10 6H8V9H10V6Z"})]),o("span",null," Hey! Do you want to read in other languages? ")],-1),ee=o("div",{class:"gap"},null,-1),te={class:"languages"},ne={key:1,class:"language-selector"},se=o("div",{class:"message"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[o("path",{fill:"var(--vp-c-text-1)",d:"M5 15V17C5 18.0544 5.81588 18.9182 6.85074 18.9945L7 19H10V21H7C4.79086 21 3 19.2091 3 17V15H5ZM18 10L22.4 21H20.245L19.044 18H14.954L13.755 21H11.601L16 10H18ZM17 12.8852L15.753 16H18.245L17 12.8852ZM8 2V4H12V11H8V14H6V11H2V4H6V2H8ZM17 3C19.2091 3 21 4.79086 21 7V9H19V7C19 5.89543 18.1046 5 17 5H14V3H17ZM6 6H4V9H6V6ZM10 6H8V9H10V6Z"})]),A(" Whoops! It looks like it doesn't have multilingual support yet! ")],-1),ae=o("div",{class:"gap"},null,-1),oe=["href"],le={__name:"Layout",setup(e){const{Layout:t}=L,n=s=>{m.value=c[s],localStorage.setItem(".vitepress-select-language",c[s]);const a=document.querySelector("body"),u=[];for(const r in c)u.push("lang-index-"+(Number(r)+1));for(const r of u)a.classList.remove(r);a.classList.add(u[s]);let i=document.querySelector('style[is-lang-css="yes"]');i===null&&(i=document.createElement("style"),i.setAttribute("type","text/css"),i.setAttribute("is-lang-css","yes"),document.head.appendChild(i));let l="";for(const r in c)Number(r)!==Number(s)?l=l+`
.lang-${c[r]} { display: none !important; }`:l=l+`
.lang-${c[r]} { display: inline !important; }`;for(const r in c)for(const v in c)r!==v&&(l=l+`
.lang-index-${Number(r)+1} .enable-i18n > *:nth-child(${c.length}n + ${Number(v)+1}) {`,l=l+`
display: none;`,l=l+`
}`);i.innerHTML=l};return V(()=>{const s=localStorage.getItem(".vitepress-select-language")||"en";m.value=s;const a=c.findIndex(i=>i===s);n(a);const u=document.querySelector("body");b(()=>{u.classList.add("i18n-loaded")})}),(s,a)=>{const u=w("ClientOnly");return d(),x(_(t),null,{"doc-before":H(()=>[o("div",K,[M(u,null,{default:H(()=>[_(h)?(d(),g("div",Q,[Y,ee,o("div",te,[_(m)===_(c)[0]?(d(),g("div",{key:0,class:"button",onClick:a[0]||(a[0]=i=>n(1))},"Read in English")):(d(),g("div",{key:1,class:"button",onClick:a[1]||(a[1]=i=>n(0))},"阅读中文"))])])):(d(),g("div",ne,[se,ae,o("a",{class:"button",href:_(J),target:"_blank"},"IMPROVE",8,oe)]))]),_:1})])]),_:1})}}};const ce={},ie={class:"enable-i18n"};function re(e,t){return d(),g("div",ie,[k(e.$slots,"default")])}const ue=N(ce,[["render",re]]);const de={extends:L,Layout:le,async enhanceApp({app:e,router:t}){e.component("I18N",ue);const n=()=>{b(()=>{document.querySelector(".enable-i18n")?h.value=!0:h.value=!1})};Z(()=>t.route.path,()=>{n()}),setTimeout(()=>{n()},256)}};function C(e){if(e.extends){const t=C(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const p=C(de),pe=q({name:"VitePressApp",setup(){const{site:e}=F();return V(()=>{U(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),z(),G(),W(),p.setup&&p.setup(),()=>X(p.Layout)}});async function _e(){const e=me(),t=ge();t.provide(P,e);const n=E(e.route);return t.provide(S,n),t.component("Content",I),t.component("ClientOnly",T),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),p.enhanceApp&&await p.enhanceApp({app:t,router:e,siteData:R}),{app:t,router:e,data:n}}function ge(){return O(pe)}function me(){let e=f,t;return B(n=>{let s=D(n),a=null;return s&&(e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),a=j(()=>import(s),[])),f&&(e=!1),a},p.NotFound)}f&&_e().then(({app:e,router:t,data:n})=>{t.go().then(()=>{$(t.route,n.site),e.mount("#app")})});export{_e as createApp};