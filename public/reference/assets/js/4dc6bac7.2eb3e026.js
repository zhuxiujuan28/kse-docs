"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[810],{52991:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(67294),a=n(86010),c=n(53438),s=n(39960),i=n(13919),o=n(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return r.createElement(s.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},n)}function u(e){let{href:t,icon:n,title:c,description:s}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:c},n," ",c),s&&r.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:s},s))}function p(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,c.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,c.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const s=(0,c.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},s.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},79342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),c=n(52991),s=n(53438);const i={id:"component-status",title:"Component Status",description:"Component Status",custom_edit_url:null},o=void 0,l={unversionedId:"api/v4.0.0/component-status",id:"api/v4.0.0/component-status",title:"Component Status",description:"Component Status",source:"@site/docs/api/v4.0.0/component-status.tag.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/component-status",permalink:"/reference/api/v4.0.0/component-status",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"component-status",title:"Component Status",description:"Component Status",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"Get namespace scope resource",permalink:"/reference/api/v4.0.0/get-namespaced-resource"},next:{title:"Get the health status of system components",permalink:"/reference/api/v4.0.0/get-system-health-status-v-1-alpha-2"}},m={},u=[],p={toc:u},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);