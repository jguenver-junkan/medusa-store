import{u as F}from"./chunk-RJSD5KRU-CLX6W0xo.js";import{a1 as z,ad as _,a3 as B,R as H,dI as M,j as e,b as S,a8 as K,a9 as L,dK as N,r as f,e as O,k as V,t as y,E as q,B as b,V as G}from"./index-oLtKV1Ux.js";import{u as Q,a as U}from"./chunk-ZE4FSVPB-DFAMY1Kh.js";import{u as X,D as Z}from"./chunk-HRTYC4AL-Cv-xTLnn.js";import"./lodash-BQPOQPbG.js";import"./chunk-OXA2WNST-SUxUod8m.js";import"./chunk-BNLHRJ2A-Dbt8kFSd.js";import"./chunk-KHOKHZC6-I23na9JB.js";import{K as $}from"./chunk-6HTZNHPT-DsPxpq1N.js";import{R as u,u as J}from"./chunk-6DAFMWMA-DcFXWLP6.js";import{C as j}from"./checkbox-DUCWB_Nj.js";import{c as W}from"./index-CgI6BRDf.js";import"./chunk-RERSP5B2-DGFars32.js";import"./chunk-ADOCJB6L--Hg-Ptul.js";import"./chunk-P3UUX2T6-DnUA5WKI.js";import"./chunk-C76H5USB-VLX403Ju.js";import"./chunk-YEDAFXMB-BJZC5lZ4.js";import"./chunk-AOFGTNG6-BswFuWR8.js";import"./chunk-WX2SMNCD-CfHnLN5T.js";import"./plus-mini-Dt4gvBBt.js";import"./command-bar-BwZPhbxc.js";import"./index-C-zGjL7k.js";import"./chunk-CI243JRA-Dpv-K69h.js";import"./format-C8xOVGEJ.js";import"./date-picker-OqO4Himc.js";import"./clsx-B-dksMZM.js";import"./popover-Cu6DVetU.js";import"./x-mark-mini-CknGqCj5.js";import"./triangle-left-mini-BxOUHAZM.js";import"./prompt-D1yV89PX.js";var Y=z({add:_(B()).min(1)}),p=50,h="p",ee=({collection:i})=>{const{t}=S(),{handleSuccess:o}=J(),s=K({defaultValues:{add:[]},resolver:L(Y)}),{setValue:l}=s,{mutateAsync:d,isPending:m}=N(i.id),[a,c]=f.useState({}),C=r=>{const n=typeof r=="function"?r(a):r;l("add",Object.keys(n).filter(D=>n[D]),{shouldDirty:!0,shouldTouch:!0}),c(n)};f.useEffect(()=>{l("add",Object.keys(a).filter(r=>a[r]),{shouldDirty:!0,shouldTouch:!0})},[a,l]);const{searchParams:P,raw:v}=Q({prefix:h,pageSize:p}),{products:T,count:g,isLoading:k,isError:A,error:R}=O({fields:"*variants,*sales_channels",...P},{placeholderData:V}),x=oe(),w=U(["collections"]),{table:E}=X({data:T??[],columns:x,count:g,pageSize:p,prefix:h,getRowId:r=>r.id,enableRowSelection:!0,rowSelection:{state:a,updater:C},enablePagination:!0,meta:{collectionId:i.id}}),I=s.handleSubmit(async r=>{await d({add:r.add},{onSuccess:()=>{y.success(t("collections.products.add.successToast",{count:r.add.length})),o()},onError:n=>{y.error(n.message)}})});if(A)throw R;return e.jsx(u.Form,{form:s,children:e.jsxs($,{onSubmit:I,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(u.Header,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.formState.errors.add&&e.jsx(q,{variant:"error",children:s.formState.errors.add.message}),e.jsx(u.Close,{asChild:!0,children:e.jsx(b,{size:"small",variant:"secondary",children:t("actions.cancel")})}),e.jsx(b,{size:"small",type:"submit",isLoading:m,children:t("actions.save")})]})}),e.jsx(u.Body,{className:"size-full overflow-hidden",children:e.jsx(Z,{table:E,columns:x,pageSize:p,count:g,queryObject:v,filters:w,orderBy:[{key:"title",label:t("fields.title")},{key:"created_at",label:t("fields.createdAt")},{key:"updated_at",label:t("fields.updatedAt")}],prefix:h,isLoading:k,layout:"fill",pagination:!0,search:"autofocus"})})]})})},te=W(),oe=()=>{const{t:i}=S(),t=F();return f.useMemo(()=>[te.display({id:"select",header:({table:o})=>e.jsx(j,{checked:o.getIsSomePageRowsSelected()?"indeterminate":o.getIsAllPageRowsSelected(),onCheckedChange:s=>o.toggleAllPageRowsSelected(!!s)}),cell:({row:o,table:s})=>{const{collectionId:l}=s.options.meta,d=o.original.collection_id===l,m=o.getIsSelected()||d,a=e.jsx(j,{checked:m,disabled:d,onCheckedChange:c=>o.toggleSelected(!!c),onClick:c=>{c.stopPropagation()}});return d?e.jsx(G,{content:i("salesChannels.productAlreadyAdded"),side:"right",children:a}):a}}),...t],[i,t])},Fe=()=>{const{id:i}=H(),{collection:t,isLoading:o,isError:s,error:l}=M(i);if(s)throw l;return e.jsx(u,{children:!o&&t&&e.jsx(ee,{collection:t})})};export{Fe as Component};