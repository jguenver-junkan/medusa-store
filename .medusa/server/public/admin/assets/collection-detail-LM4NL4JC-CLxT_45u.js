import{u as N}from"./chunk-RJSD5KRU-CLX6W0xo.js";import{dI as j,j as o,d as q,R as _,a as z,dJ as L,q as M,b as p,u as W,dG as B,H as b,A as g,T as f,e as H,k as O,dK as C,W as Q,r as G,dL as J,s as K,t as d}from"./index-oLtKV1Ux.js";import{u as Y,a as $}from"./chunk-ZE4FSVPB-DFAMY1Kh.js";import{S as F}from"./chunk-2RQLKDBF-V0vRnTD9.js";import{u as U,D as Z}from"./chunk-HRTYC4AL-Cv-xTLnn.js";import"./lodash-BQPOQPbG.js";import"./chunk-OXA2WNST-SUxUod8m.js";import"./chunk-BNLHRJ2A-Dbt8kFSd.js";import"./chunk-KHOKHZC6-I23na9JB.js";import{P as S}from"./pencil-square-C8ZH4Ygr.js";import{T as P}from"./trash-6kiDg8sd.js";import{u as x}from"./use-prompt-BiYcM7z7.js";import{C as w}from"./container-OlDu1QSq.js";import{C as v}from"./checkbox-DUCWB_Nj.js";import{c as V}from"./index-CgI6BRDf.js";import"./chunk-RERSP5B2-DGFars32.js";import"./chunk-ADOCJB6L--Hg-Ptul.js";import"./chunk-P3UUX2T6-DnUA5WKI.js";import"./chunk-C76H5USB-VLX403Ju.js";import"./Trans-BliKkizb.js";import"./x-mark-mini-CknGqCj5.js";import"./check-B8tGs9E9.js";import"./chunk-YEDAFXMB-BJZC5lZ4.js";import"./chunk-AOFGTNG6-BswFuWR8.js";import"./chunk-WX2SMNCD-CfHnLN5T.js";import"./plus-mini-Dt4gvBBt.js";import"./command-bar-BwZPhbxc.js";import"./index-C-zGjL7k.js";import"./chunk-CI243JRA-Dpv-K69h.js";import"./format-C8xOVGEJ.js";import"./date-picker-OqO4Himc.js";import"./clsx-B-dksMZM.js";import"./popover-Cu6DVetU.js";import"./triangle-left-mini-BxOUHAZM.js";import"./prompt-D1yV89PX.js";var Be=s=>{const{id:e}=s.params||{},{collection:t}=j(e,{initialData:s.data,enabled:!!e});return t?o.jsx("span",{children:t.title}):null},X=({collection:s})=>{const{t:e}=p(),t=x(),r=W(),{mutateAsync:i}=B(s.id),a=async()=>{await t({title:e("general.areYouSure"),description:e("collections.deleteWarning",{count:1,title:s.title})})&&(await i(),r("../",{replace:!0}))};return o.jsxs(w,{className:"divide-y p-0",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[o.jsx(b,{children:s.title}),o.jsx(g,{groups:[{actions:[{icon:o.jsx(S,{}),label:e("actions.edit"),to:`/collections/${s.id}/edit`,disabled:!s.id}]},{actions:[{icon:o.jsx(P,{}),label:e("actions.delete"),onClick:a,disabled:!s.id}]}]})]}),o.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[o.jsx(f,{size:"small",leading:"compact",weight:"plus",children:e("fields.handle")}),o.jsxs(f,{size:"small",children:["/",s.handle]})]})]})},l=10,ee=({collection:s})=>{const{t:e}=p(),{searchParams:t,raw:r}=Y({pageSize:l}),{products:i,count:a,isLoading:n,isError:u,error:T}=H({limit:l,...t,collection_id:[s.id]},{placeholderData:O}),k=$(["collections"]),h=se(),{table:D}=U({data:i??[],columns:h,getRowId:c=>c.id,count:a,enablePagination:!0,enableRowSelection:!0,pageSize:l,meta:{collectionId:s.id}}),A=x(),{mutateAsync:R}=C(s.id),E=async c=>{const m=Object.keys(c);await A({title:e("general.areYouSure"),description:e("collections.removeProductsWarning",{count:m.length}),confirmText:e("actions.remove"),cancelText:e("actions.cancel")})&&await R({remove:m},{onSuccess:()=>{d.success(e("collections.products.remove.successToast",{count:m.length}))},onError:I=>{d.error(I.message)}})};if(u)throw T;return o.jsxs(w,{className:"divide-y p-0",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[o.jsx(b,{level:"h2",children:e("products.domain")}),o.jsx(g,{groups:[{actions:[{icon:o.jsx(Q,{}),label:e("actions.add"),to:"products"}]}]})]}),o.jsx(Z,{table:D,columns:h,search:!0,pagination:!0,pageSize:l,navigateTo:({original:c})=>`/products/${c.id}`,count:a,filters:k,isLoading:n,orderBy:[{key:"title",label:e("fields.title")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],queryObject:r,commands:[{action:E,label:e("actions.remove"),shortcut:"r"}],noRecords:{message:e("collections.products.list.noRecordsMessage")}})]})},te=({product:s,collectionId:e})=>{const{t}=p(),r=x(),{mutateAsync:i}=C(e),a=async()=>{await r({title:t("general.areYouSure"),description:t("collections.removeSingleProductWarning",{title:s.title}),confirmText:t("actions.remove"),cancelText:t("actions.cancel")})&&await i({remove:[s.id]},{onSuccess:()=>{d.success(t("collections.products.remove.successToast",{count:1}))},onError:u=>{d.error(u.message)}})};return o.jsx(g,{groups:[{actions:[{icon:o.jsx(S,{}),label:t("actions.edit"),to:`/products/${s.id}/edit`}]},{actions:[{icon:o.jsx(P,{}),label:t("actions.remove"),onClick:a}]}]})},y=V(),se=()=>{const s=N();return G.useMemo(()=>[y.display({id:"select",header:({table:e})=>o.jsx(v,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t)}),cell:({row:e})=>o.jsx(v,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),onClick:t=>{t.stopPropagation()}})}),...s,y.display({id:"actions",cell:({row:e,table:t})=>{const{collectionId:r}=t.options.meta;return o.jsx(te,{product:e.original,collectionId:r})}})],[s])},He=()=>{const s=q(),{id:e}=_(),{collection:t,isLoading:r,isError:i,error:a}=j(e,{initialData:s}),{getWidgets:n}=z();if(r||!t)return o.jsx(L,{sections:2,showJSON:!0,showMetadata:!0});if(i)throw a;return o.jsxs(F,{widgets:{after:n("product_collection.details.after"),before:n("product_collection.details.before")},showJSON:!0,showMetadata:!0,data:t,children:[o.jsx(X,{collection:t}),o.jsx(ee,{collection:t})]})},oe=s=>({queryKey:J.detail(s),queryFn:async()=>K.admin.productCollection.retrieve(s)}),Oe=async({params:s})=>{const e=s.id,t=oe(e);return M.ensureQueryData(t)};export{Be as Breadcrumb,He as Component,Oe as loader};
