import{u as b}from"./chunk-RJSD5KRU-CLX6W0xo.js";import{q as v,a as P,j as t,p as C,s as T,b as f,c as D,d as L,e as S,k,H as q,B as c,L as l,O as w,r as A,f as E,A as z,t as m}from"./index-oLtKV1Ux.js";import{u as Q,a as H}from"./chunk-ZE4FSVPB-DFAMY1Kh.js";import{S as R}from"./chunk-2RQLKDBF-V0vRnTD9.js";import{u as B,D as K}from"./chunk-HRTYC4AL-Cv-xTLnn.js";import"./lodash-BQPOQPbG.js";import"./chunk-OXA2WNST-SUxUod8m.js";import"./chunk-BNLHRJ2A-Dbt8kFSd.js";import"./chunk-KHOKHZC6-I23na9JB.js";import{P as M}from"./pencil-square-C8ZH4Ygr.js";import{T as N}from"./trash-6kiDg8sd.js";import{u as O}from"./use-prompt-BiYcM7z7.js";import{C as _}from"./container-OlDu1QSq.js";import{c as $}from"./index-CgI6BRDf.js";import"./chunk-RERSP5B2-DGFars32.js";import"./chunk-ADOCJB6L--Hg-Ptul.js";import"./chunk-P3UUX2T6-DnUA5WKI.js";import"./chunk-C76H5USB-VLX403Ju.js";import"./Trans-BliKkizb.js";import"./x-mark-mini-CknGqCj5.js";import"./check-B8tGs9E9.js";import"./chunk-YEDAFXMB-BJZC5lZ4.js";import"./chunk-AOFGTNG6-BswFuWR8.js";import"./chunk-WX2SMNCD-CfHnLN5T.js";import"./plus-mini-Dt4gvBBt.js";import"./command-bar-BwZPhbxc.js";import"./index-C-zGjL7k.js";import"./chunk-CI243JRA-Dpv-K69h.js";import"./format-C8xOVGEJ.js";import"./date-picker-OqO4Himc.js";import"./clsx-B-dksMZM.js";import"./popover-Cu6DVetU.js";import"./triangle-left-mini-BxOUHAZM.js";import"./prompt-D1yV89PX.js";var F=()=>({queryKey:C.list({limit:20,offset:0}),queryFn:async()=>T.admin.product.list({limit:20,offset:0})}),qe=e=>async()=>{const s=F();return v.getQueryData(s.queryKey)??await e.fetchQuery(s)},d=20,I=()=>{const{t:e}=f(),s=D(),r=L(),{searchParams:o,raw:i}=Q({pageSize:d}),{products:u,count:a,isLoading:x,isError:y,error:h}=S({...o},{initialData:r,placeholderData:k}),g=H(),p=Y(),{table:j}=B({data:u??[],columns:p,count:a,enablePagination:!0,pageSize:d,getRowId:n=>n.id});if(y)throw h;return t.jsxs(_,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsx(q,{level:"h2",children:e("products.domain")}),t.jsxs("div",{className:"flex items-center justify-center gap-x-2",children:[t.jsx(c,{size:"small",variant:"secondary",asChild:!0,children:t.jsx(l,{to:`export${s.search}`,children:e("actions.export")})}),t.jsx(c,{size:"small",variant:"secondary",asChild:!0,children:t.jsx(l,{to:"import",children:e("actions.import")})}),t.jsx(c,{size:"small",variant:"secondary",asChild:!0,children:t.jsx(l,{to:"create",children:e("actions.create")})})]})]}),t.jsx(K,{table:j,columns:p,count:a,pageSize:d,filters:g,search:!0,pagination:!0,isLoading:x,queryObject:i,navigateTo:n=>`${n.original.id}`,orderBy:[{key:"title",label:e("fields.title")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],noRecords:{message:e("products.list.noRecordsMessage")}}),t.jsx(w,{})]})},W=({product:e})=>{const{t:s}=f(),r=O(),{mutateAsync:o}=E(e.id),i=async()=>{await r({title:s("general.areYouSure"),description:s("products.deleteWarning",{title:e.title}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await o(void 0,{onSuccess:()=>{m.success(s("products.toasts.delete.success.header"),{description:s("products.toasts.delete.success.description",{title:e.title})})},onError:a=>{m.error(s("products.toasts.delete.error.header"),{description:a.message})}})};return t.jsx(z,{groups:[{actions:[{icon:t.jsx(M,{}),label:s("actions.edit"),to:`/products/${e.id}/edit`}]},{actions:[{icon:t.jsx(N,{}),label:s("actions.delete"),onClick:i}]}]})},G=$(),Y=()=>{const e=b();return A.useMemo(()=>[...e,G.display({id:"actions",cell:({row:r})=>t.jsx(W,{product:r.original})})],[e])},we=()=>{const{getWidgets:e}=P();return t.jsx(R,{widgets:{after:e("product.list.after"),before:e("product.list.before")},children:t.jsx(I,{})})};export{we as Component,qe as productLoader};