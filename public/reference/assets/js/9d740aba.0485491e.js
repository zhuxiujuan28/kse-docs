"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9633],{65010:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>h,toc:()=>y});var s=t(87462),i=(t(67294),t(3905)),n=t(26389),m=t(94891),p=t(75190),r=t(47507),l=t(24310),c=t(63303),o=(t(75035),t(85162));const d={id:"list-namespace-members",title:"List all members in the specified namespace",description:"List all members in the specified namespace",sidebar_label:"List all members in the specified namespace",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Access Management"],operationId:"ListNamespaceMembers",parameters:[{description:"specific the role name",name:"role",in:"query",schema:{type:"string"}},{description:"The specified namespace.",name:"namespace",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"ok",content:{"application/json":{schema:{required:["items","totalItems"],properties:{items:{type:"array",items:{}},totalItems:{type:"integer",format:"int32"}}}}}}},description:"List all members in the specified namespace",method:"get",path:"/kapis/iam.kubesphere.io/v1beta1/namespaces/{namespace}/namespacemembers",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"List all members in the specified namespace",description:{type:"text/plain"},url:{path:["kapis","iam.kubesphere.io","v1beta1","namespaces",":namespace","namespacemembers"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"specific the role name",type:"text/plain"},key:"role",value:""}],variable:[{disabled:!1,description:{content:"(Required) The specified namespace.",type:"text/plain"},type:"any",value:"",key:"namespace"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},u=void 0,h={unversionedId:"api/v4.0.0/list-namespace-members",id:"api/v4.0.0/list-namespace-members",title:"List all members in the specified namespace",description:"List all members in the specified namespace",source:"@site/docs/api/v4.0.0/list-namespace-members.api.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/list-namespace-members",permalink:"/reference/api/v4.0.0/list-namespace-members",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-namespace-members",title:"List all members in the specified namespace",description:"List all members in the specified namespace",sidebar_label:"List all members in the specified namespace",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Access Management"],operationId:"ListNamespaceMembers",parameters:[{description:"specific the role name",name:"role",in:"query",schema:{type:"string"}},{description:"The specified namespace.",name:"namespace",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"ok",content:{"application/json":{schema:{required:["items","totalItems"],properties:{items:{type:"array",items:{}},totalItems:{type:"integer",format:"int32"}}}}}}},description:"List all members in the specified namespace",method:"get",path:"/kapis/iam.kubesphere.io/v1beta1/namespaces/{namespace}/namespacemembers",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"List all members in the specified namespace",description:{type:"text/plain"},url:{path:["kapis","iam.kubesphere.io","v1beta1","namespaces",":namespace","namespacemembers"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"specific the role name",type:"text/plain"},key:"role",value:""}],variable:[{disabled:!1,description:{content:"(Required) The specified namespace.",type:"text/plain"},type:"any",value:"",key:"namespace"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"Delete member from cluster",permalink:"/reference/api/v4.0.0/remove-cluster-member"},next:{title:"Add members to the namespace in bulk.",permalink:"/reference/api/v4.0.0/create-namespace-members"}},b={},y=[{value:"List all members in the specified namespace",id:"list-all-members-in-the-specified-namespace",level:2}],k={toc:y},f="wrapper";function v(e){let{components:a,...t}=e;return(0,i.kt)(f,(0,s.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"list-all-members-in-the-specified-namespace"},"List all members in the specified namespace"),(0,i.kt)("p",null,"List all members in the specified namespace"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{description:"The specified namespace.",name:"namespace",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{description:"specific the role name",name:"role",in:"query",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"ok")),(0,i.kt)("div",null,(0,i.kt)(m.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"items",required:!0,schemaName:"undefined[]",qualifierMessage:void 0,schema:{type:"array",items:{}},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"totalItems",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "items": [\n    null\n  ],\n  "totalItems": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);