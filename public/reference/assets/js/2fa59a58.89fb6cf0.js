"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1e3],{91894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>y});var s=r(87462),a=(r(67294),r(3905)),i=r(26389),n=r(94891),o=(r(75190),r(47507)),m=r(24310),l=r(63303),p=(r(75035),r(85162));const c={id:"create-cluster-members",title:"Add members to cluster",description:"Add members to cluster",sidebar_label:"Add members to cluster",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Access Management"],operationId:"CreateClusterMembers",requestBody:{content:{"application/json":{schema:{type:"array",items:{required:["username","roleRef"],properties:{roleRef:{type:"string"},username:{type:"string"}}}}}},required:!0},responses:{200:{description:"ok",content:{"application/json":{schema:{type:"array",items:{required:["username","roleRef"],properties:{roleRef:{type:"string"},username:{type:"string"}}}}}}}},description:"Add members to cluster",method:"post",path:"/kapis/iam.kubesphere.io/v1beta1/clustermembers",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:[{roleRef:"string",username:"string"}],info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Add members to cluster",description:{type:"text/plain"},url:{path:["kapis","iam.kubesphere.io","v1beta1","clustermembers"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},d=void 0,u={unversionedId:"api/v4.0.0/create-cluster-members",id:"api/v4.0.0/create-cluster-members",title:"Add members to cluster",description:"Add members to cluster",source:"@site/docs/api/v4.0.0/create-cluster-members.api.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/create-cluster-members",permalink:"/reference/api/v4.0.0/create-cluster-members",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-cluster-members",title:"Add members to cluster",description:"Add members to cluster",sidebar_label:"Add members to cluster",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Access Management"],operationId:"CreateClusterMembers",requestBody:{content:{"application/json":{schema:{type:"array",items:{required:["username","roleRef"],properties:{roleRef:{type:"string"},username:{type:"string"}}}}}},required:!0},responses:{200:{description:"ok",content:{"application/json":{schema:{type:"array",items:{required:["username","roleRef"],properties:{roleRef:{type:"string"},username:{type:"string"}}}}}}}},description:"Add members to cluster",method:"post",path:"/kapis/iam.kubesphere.io/v1beta1/clustermembers",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:[{roleRef:"string",username:"string"}],info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Add members to cluster",description:{type:"text/plain"},url:{path:["kapis","iam.kubesphere.io","v1beta1","clustermembers"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"List all members of cluster",permalink:"/reference/api/v4.0.0/list-cluster-members"},next:{title:"Update member from the cluster",permalink:"/reference/api/v4.0.0/update-cluster-member"}},b={},y=[{value:"Add members to cluster",id:"add-members-to-cluster",level:2}],k={toc:y},h="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,s.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"add-members-to-cluster"},"Add members to cluster"),(0,a.kt)("p",null,"Add members to cluster"),(0,a.kt)(n.Z,{mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("span",{style:{opacity:"0.6"}}," array"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(m.Z,{collapsible:!1,name:"roleRef",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"username",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"ok")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(m.Z,{collapsible:!1,name:"roleRef",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"username",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'[\n  {\n    "roleRef": "string",\n    "username": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);