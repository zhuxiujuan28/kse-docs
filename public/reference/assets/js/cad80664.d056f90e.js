"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8787],{84184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var a=r(87462),i=(r(67294),r(3905)),s=r(26389),l=r(94891),n=(r(75190),r(47507)),p=r(24310),o=r(63303),m=(r(75035),r(85162));const c={id:"get-platform-metrics",title:"Get platform metrics",description:"Get platform metrics",sidebar_label:"Get platform metrics",hide_title:!0,hide_table_of_contents:!0,api:{tags:["User Related Resources"],operationId:"GetPlatformMetrics",responses:{200:{description:"ok",content:{"application/json":{schema:{required:["results"],properties:{results:{type:"array",items:{required:["metric_name","data"],properties:{data:{required:["resultType","result"],properties:{result:{type:"array",items:{required:["value"],properties:{value:{type:"array",items:{}}}}},resultType:{type:"string"}}},metric_name:{type:"string"}}}}}}}}}},description:"Get platform metrics",method:"get",path:"/kapis/tenant.kubesphere.io/v1alpha2/metrics",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Get platform metrics",description:{type:"text/plain"},url:{path:["kapis","tenant.kubesphere.io","v1alpha2","metrics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},u=void 0,d={unversionedId:"api/v4.0.0/get-platform-metrics",id:"api/v4.0.0/get-platform-metrics",title:"Get platform metrics",description:"Get platform metrics",source:"@site/docs/api/v4.0.0/get-platform-metrics.api.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/get-platform-metrics",permalink:"/reference/api/v4.0.0/get-platform-metrics",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-platform-metrics",title:"Get platform metrics",description:"Get platform metrics",sidebar_label:"Get platform metrics",hide_title:!0,hide_table_of_contents:!0,api:{tags:["User Related Resources"],operationId:"GetPlatformMetrics",responses:{200:{description:"ok",content:{"application/json":{schema:{required:["results"],properties:{results:{type:"array",items:{required:["metric_name","data"],properties:{data:{required:["resultType","result"],properties:{result:{type:"array",items:{required:["value"],properties:{value:{type:"array",items:{}}}}},resultType:{type:"string"}}},metric_name:{type:"string"}}}}}}}}}},description:"Get platform metrics",method:"get",path:"/kapis/tenant.kubesphere.io/v1alpha2/metrics",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Get platform metrics",description:{type:"text/plain"},url:{path:["kapis","tenant.kubesphere.io","v1alpha2","metrics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"List clusters available to users",permalink:"/reference/api/v4.0.0/user-related-clusters"},next:{title:"List the namespaces for the current user",permalink:"/reference/api/v4.0.0/list-namespaces"}},y={},f=[{value:"Get platform metrics",id:"get-platform-metrics",level:2}],k={toc:f},h="wrapper";function v(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-platform-metrics"},"Get platform metrics"),(0,i.kt)("p",null,"Get platform metrics"),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"ok")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"results"),(0,i.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"data"),(0,i.kt)("span",{style:{opacity:"0.6"}}," "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"result"),(0,i.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(p.Z,{collapsible:!1,name:"value",required:!0,schemaName:"undefined[]",qualifierMessage:void 0,schema:{type:"array",items:{}},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(p.Z,{collapsible:!1,name:"resultType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{collapsible:!1,name:"metric_name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "results": [\n    {\n      "data": {\n        "result": [\n          {\n            "value": [\n              null\n            ]\n          }\n        ],\n        "resultType": "string"\n      },\n      "metric_name": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);