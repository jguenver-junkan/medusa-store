import{a as x}from"./chunk-D2UCOBBT-BZcS4uOz.js";import{q as p,a as y,j as t,fi as h,s as g,b as u,de as j,H as b,T as v,B as T,L as D,r as w,k as C,A as S,fj as L,t as d}from"./index-oLtKV1Ux.js";import{b as P}from"./chunk-5R4UGQUP-CyDlXwjs.js";import{S as q}from"./chunk-2RQLKDBF-V0vRnTD9.js";import{u as E,D as A}from"./chunk-HRTYC4AL-Cv-xTLnn.js";import"./lodash-BQPOQPbG.js";import"./chunk-OXA2WNST-SUxUod8m.js";import"./chunk-BNLHRJ2A-Dbt8kFSd.js";import"./chunk-KHOKHZC6-I23na9JB.js";import{P as k}from"./pencil-square-C8ZH4Ygr.js";import{T as z}from"./trash-6kiDg8sd.js";import{u as H}from"./use-prompt-BiYcM7z7.js";import{C as Q}from"./container-OlDu1QSq.js";import{c as N}from"./index-CgI6BRDf.js";import"./chunk-B4FQDBC3-Cc7EPwPe.js";import"./chunk-P3UUX2T6-DnUA5WKI.js";import"./format-C8xOVGEJ.js";import"./chunk-MSDRGCRR-CJJ34J4_.js";import"./chunk-C76H5USB-VLX403Ju.js";import"./Trans-BliKkizb.js";import"./x-mark-mini-CknGqCj5.js";import"./check-B8tGs9E9.js";import"./chunk-YEDAFXMB-BJZC5lZ4.js";import"./chunk-AOFGTNG6-BswFuWR8.js";import"./chunk-WX2SMNCD-CfHnLN5T.js";import"./plus-mini-Dt4gvBBt.js";import"./command-bar-BwZPhbxc.js";import"./index-C-zGjL7k.js";import"./chunk-CI243JRA-Dpv-K69h.js";import"./date-picker-OqO4Himc.js";import"./clsx-B-dksMZM.js";import"./popover-Cu6DVetU.js";import"./triangle-left-mini-BxOUHAZM.js";import"./prompt-D1yV89PX.js";var _=e=>({queryKey:h.list(e),queryFn:async()=>g.admin.returnReason.list(e)}),De=async()=>{const e=_();return p.getQueryData(e.queryKey)??await p.fetchQuery(e)},K=({id:e,label:r})=>{const{t:s}=u(),o=H(),{mutateAsync:a}=L(e);return async()=>{await o({title:s("general.areYouSure"),description:s("returnReasons.delete.confirmation",{label:r}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await a(void 0,{onSuccess:()=>{d.success(s("returnReasons.delete.successToast",{label:r}))},onError:n=>{d.error(n.message)}})}},i=20,M=()=>{const{t:e}=u(),{searchParams:r,raw:s}=P({pageSize:i}),{return_reasons:o,count:a,isPending:c,isError:l,error:n}=j(r,{placeholderData:C}),m=I(),{table:R}=E({data:o,columns:m,count:a,getRowId:f=>f.id,pageSize:i});if(l)throw n;return t.jsxs(Q,{className:"divide-y px-0 py-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsxs("div",{children:[t.jsx(b,{children:e("returnReasons.domain")}),t.jsx(v,{className:"text-ui-fg-subtle",size:"small",children:e("returnReasons.subtitle")})]}),t.jsx(T,{variant:"secondary",size:"small",asChild:!0,children:t.jsx(D,{to:"create",children:e("actions.create")})})]}),t.jsx(A,{table:R,queryObject:s,count:a,isLoading:c,columns:m,pageSize:i,noHeader:!0,pagination:!0,search:!0})]})},O=({returnReason:e})=>{const{t:r}=u(),s=K(e);return t.jsx(S,{groups:[{actions:[{icon:t.jsx(k,{}),label:r("actions.edit"),to:`${e.id}/edit`}]},{actions:[{icon:t.jsx(z,{}),label:r("actions.delete"),onClick:s}]}]})},B=N(),I=()=>{const e=x();return w.useMemo(()=>[...e,B.display({id:"actions",cell:({row:r})=>t.jsx(O,{returnReason:r.original})})],[e])},we=()=>{const{getWidgets:e}=y();return t.jsx(q,{showMetadata:!1,showJSON:!1,hasOutlet:!0,widgets:{after:e("return_reason.list.after"),before:e("return_reason.list.before")},children:t.jsx(M,{})})};export{we as Component,De as loader};
