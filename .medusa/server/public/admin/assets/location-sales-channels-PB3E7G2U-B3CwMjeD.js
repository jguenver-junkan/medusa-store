import{u as F,a as M,b as B}from"./chunk-VELNOPU6-BthpPAqo.js";import{a1 as H,ad as I,a3 as N,R as O,aS as V,j as s,b as $,a8 as q,a9 as G,r as p,J,eM as Q,t as y,B as j,k as U}from"./index-oLtKV1Ux.js";import{u as Z,D as K}from"./chunk-HRTYC4AL-Cv-xTLnn.js";import"./lodash-BQPOQPbG.js";import"./chunk-OXA2WNST-SUxUod8m.js";import"./chunk-BNLHRJ2A-Dbt8kFSd.js";import"./chunk-KHOKHZC6-I23na9JB.js";import{R as i,u as W}from"./chunk-6DAFMWMA-DcFXWLP6.js";import{C as b}from"./checkbox-DUCWB_Nj.js";import{c as X}from"./index-CgI6BRDf.js";import"./chunk-GA34GXNI-CQl9oAOA.js";import"./chunk-P3UUX2T6-DnUA5WKI.js";import"./chunk-MSDRGCRR-CJJ34J4_.js";import"./chunk-ADOCJB6L--Hg-Ptul.js";import"./chunk-C76H5USB-VLX403Ju.js";import"./chunk-YEDAFXMB-BJZC5lZ4.js";import"./chunk-AOFGTNG6-BswFuWR8.js";import"./chunk-WX2SMNCD-CfHnLN5T.js";import"./plus-mini-Dt4gvBBt.js";import"./command-bar-BwZPhbxc.js";import"./index-C-zGjL7k.js";import"./chunk-CI243JRA-Dpv-K69h.js";import"./format-C8xOVGEJ.js";import"./date-picker-OqO4Himc.js";import"./clsx-B-dksMZM.js";import"./popover-Cu6DVetU.js";import"./x-mark-mini-CknGqCj5.js";import"./triangle-left-mini-BxOUHAZM.js";import"./prompt-D1yV89PX.js";var Y=H({sales_channels:I(N()).optional()}),m=50,ee=({location:a})=>{var f,g;const{t:e}=$(),{handleSuccess:o}=W(),l=q({defaultValues:{sales_channels:((f=a.sales_channels)==null?void 0:f.map(t=>t.id))??[]},resolver:G(Y)}),{setValue:c}=l,d=((g=a.sales_channels)==null?void 0:g.reduce((t,r)=>(t[r.id]=!0,t),{}))??{},[u,k]=p.useState(d);p.useEffect(()=>{const t=Object.keys(u);c("sales_channels",t,{shouldDirty:!0,shouldTouch:!0})},[u,c]);const{searchParams:v,raw:_}=F({pageSize:m}),{sales_channels:w,count:h,isLoading:P,isError:R,error:T}=J({...v},{placeholderData:U}),E=M(),S=ae(),{table:L}=Z({data:w??[],columns:S,count:h,enablePagination:!0,enableRowSelection:!0,rowSelection:{state:u,updater:k},getRowId:t=>t.id,pageSize:m}),{mutateAsync:A,isPending:D}=Q(a.id),z=l.handleSubmit(async t=>{var x;const r=(x=a.sales_channels)==null?void 0:x.map(n=>n.id),C=t.sales_channels??[];await A({add:C.filter(n=>!(r!=null&&r.includes(n))),remove:r==null?void 0:r.filter(n=>!C.includes(n))},{onSuccess:()=>{y.success(e("stockLocations.salesChannels.successToast")),o(`/settings/locations/${a.id}`)},onError:n=>{y.error(n.message)}})});if(R)throw T;return s.jsx(i.Form,{form:l,children:s.jsxs("div",{className:"flex h-full flex-col overflow-hidden",children:[s.jsx(i.Header,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(i.Close,{asChild:!0,children:s.jsx(j,{size:"small",variant:"secondary",children:e("actions.cancel")})}),s.jsx(j,{size:"small",isLoading:D,onClick:z,children:e("actions.save")})]})}),s.jsx(i.Body,{children:s.jsx(K,{table:L,columns:S,pageSize:m,isLoading:P,count:h,filters:E,search:"autofocus",pagination:!0,orderBy:[{key:"name",label:e("fields.name")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],queryObject:_,layout:"fill"})})]})})},se=X(),ae=()=>{const a=B();return p.useMemo(()=>[se.display({id:"select",header:({table:e})=>s.jsx(b,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:o=>e.toggleAllPageRowsSelected(!!o)}),cell:({row:e})=>s.jsx(b,{checked:e.getIsSelected(),onCheckedChange:o=>e.toggleSelected(!!o),onClick:o=>{o.stopPropagation()}})}),...a],[a])},Ae=()=>{const{location_id:a}=O(),{stock_location:e,isPending:o,isError:l,error:c}=V(a,{fields:"id,*sales_channels"}),d=!o&&!!e;if(l)throw c;return s.jsx(i,{children:d&&s.jsx(ee,{location:e})})};export{Ae as Component};