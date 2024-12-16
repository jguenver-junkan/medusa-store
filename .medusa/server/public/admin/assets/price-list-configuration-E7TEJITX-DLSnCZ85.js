import{P}from"./chunk-WPSLON76-D1jN2AaM.js";import{a5 as m,b as S,R as F,dR as E,dQ as T,j as s,H as D,a8 as M,a9 as I,y as k,dU as G,t as L,w as r,D as C,m as H,bM as O,B as w,T as R,I as z,X as B}from"./index-oLtKV1Ux.js";import"./chunk-HRTYC4AL-Cv-xTLnn.js";import"./lodash-BQPOQPbG.js";import"./chunk-OXA2WNST-SUxUod8m.js";import"./chunk-BNLHRJ2A-Dbt8kFSd.js";import"./chunk-KHOKHZC6-I23na9JB.js";import{K}from"./chunk-6HTZNHPT-DsPxpq1N.js";import{b as c,u as U,a as V,c as u}from"./chunk-6DAFMWMA-DcFXWLP6.js";import{D as A}from"./date-picker-OqO4Himc.js";import"./chunk-ZJRFL6ZN-ao922U4r.js";import"./chunk-C76H5USB-VLX403Ju.js";import"./chunk-MSDRGCRR-CJJ34J4_.js";import"./chunk-P3UUX2T6-DnUA5WKI.js";import"./index-CgI6BRDf.js";import"./checkbox-DUCWB_Nj.js";import"./chunk-YEDAFXMB-BJZC5lZ4.js";import"./chunk-AOFGTNG6-BswFuWR8.js";import"./chunk-WX2SMNCD-CfHnLN5T.js";import"./plus-mini-Dt4gvBBt.js";import"./command-bar-BwZPhbxc.js";import"./index-C-zGjL7k.js";import"./chunk-CI243JRA-Dpv-K69h.js";import"./format-C8xOVGEJ.js";import"./x-mark-mini-CknGqCj5.js";import"./prompt-D1yV89PX.js";import"./clsx-B-dksMZM.js";import"./popover-Cu6DVetU.js";import"./triangle-left-mini-BxOUHAZM.js";var X=m.object({ends_at:m.date().nullable(),starts_at:m.date().nullable(),customer_group_id:m.array(m.object({id:m.string(),name:m.string()}))}),N="cg",Q=({priceList:d,customerGroups:g})=>{const{t:e}=S(),{handleSuccess:p}=U(),{setIsOpen:h}=V(),o=M({defaultValues:{ends_at:d.ends_at?new Date(d.ends_at):null,starts_at:d.starts_at?new Date(d.starts_at):null,customer_group_id:g},resolver:I(X)}),{fields:t,remove:x,append:j}=k({control:o.control,name:"customer_group_id",keyName:"cg_id"}),b=i=>{if(!i.length){o.setValue("customer_group_id",[]),h(N,!1);return}const l=i.map(n=>n.id),a=i.filter(n=>!t.some(f=>f.id===n.id));for(const n of t)l.includes(n.id)||x(t.indexOf(n));j(a),h(N,!1)},{mutateAsync:y}=G(d.id),v=o.handleSubmit(async i=>{var n,f;const l=i.customer_group_id.map(_=>_.id),a={...d.rules};l.length?a.customer_group_id=l:delete a.customer_group_id,await y({starts_at:((n=i.starts_at)==null?void 0:n.toISOString())||null,ends_at:((f=i.ends_at)==null?void 0:f.toISOString())||null,rules:a},{onSuccess:()=>{L.success(e("priceLists.configuration.edit.successToast")),p()},onError:_=>L.error(_.message)})});return s.jsxs(c.Form,{form:o,children:[s.jsx(c.Description,{className:"sr-only",children:e("priceLists.configuration.edit.description")}),s.jsxs(K,{className:"flex flex-1 flex-col overflow-hidden",onSubmit:v,children:[s.jsxs(c.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-auto",children:[s.jsx(r.Field,{control:o.control,name:"starts_at",render:({field:i})=>s.jsxs(r.Item,{children:[s.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[s.jsxs("div",{className:"flex flex-col",children:[s.jsx(r.Label,{optional:!0,children:e("priceLists.fields.startsAt.label")}),s.jsx(r.Hint,{children:e("priceLists.fields.startsAt.hint")})]}),s.jsx(r.Control,{children:s.jsx(A,{granularity:"minute",shouldCloseOnSelect:!1,...i})})]}),s.jsx(r.ErrorMessage,{})]})}),s.jsx(C,{}),s.jsx(r.Field,{control:o.control,name:"ends_at",render:({field:i})=>s.jsxs(r.Item,{children:[s.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[s.jsxs("div",{className:"flex flex-col",children:[s.jsx(r.Label,{optional:!0,children:e("priceLists.fields.endsAt.label")}),s.jsx(r.Hint,{children:e("priceLists.fields.endsAt.hint")})]}),s.jsx(r.Control,{children:s.jsx(A,{granularity:"minute",shouldCloseOnSelect:!1,...i})})]}),s.jsx(r.ErrorMessage,{})]})}),s.jsx(C,{}),s.jsx(r.Field,{control:o.control,name:"customer_group_id",render:({field:i})=>s.jsxs(r.Item,{children:[s.jsxs("div",{children:[s.jsx(r.Label,{optional:!0,children:e("priceLists.fields.customerAvailability.label")}),s.jsx(r.Hint,{children:e("priceLists.fields.customerAvailability.hint")})]}),s.jsx(r.Control,{children:s.jsxs("div",{className:H("bg-ui-bg-component shadow-elevation-card-rest transition-fg grid gap-1.5 rounded-xl py-1.5","aria-[invalid='true']:shadow-borders-error"),role:"application",ref:i.ref,children:[s.jsxs("div",{className:"text-ui-fg-subtle grid gap-1.5 px-1.5 md:grid-cols-2",children:[s.jsx("div",{className:"bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5",children:e("priceLists.fields.customerAvailability.attribute")}),s.jsx("div",{className:"bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5",children:e("operators.in")})]}),s.jsx("div",{className:"flex items-center gap-1.5 px-1.5",children:s.jsxs(u,{id:N,children:[s.jsx(u.Trigger,{asChild:!0,children:s.jsxs("button",{type:"button",className:"bg-ui-bg-field shadow-borders-base txt-compact-small text-ui-fg-muted flex flex-1 items-center gap-x-2 rounded-md px-2 py-1.5",children:[s.jsx(O,{}),e("priceLists.fields.customerAvailability.placeholder")]})}),s.jsx(u.Trigger,{asChild:!0,children:s.jsx(w,{variant:"secondary",children:e("actions.browse")})}),s.jsxs(u.Content,{children:[s.jsxs(u.Header,{children:[s.jsx(u.Title,{asChild:!0,children:s.jsx(D,{children:e("priceLists.fields.customerAvailability.header")})}),s.jsx(u.Description,{className:"sr-only",children:e("priceLists.fields.customerAvailability.hint")})]}),s.jsx(P,{type:"drawer",setState:b,state:t})]})]})}),t.length>0?s.jsxs("div",{className:"flex flex-col gap-y-1.5",children:[s.jsx(C,{variant:"dashed"}),s.jsx("div",{className:"flex flex-col gap-y-1.5 px-1.5",children:t.map((l,a)=>s.jsxs("div",{className:"bg-ui-bg-field-component shadow-borders-base flex items-center justify-between gap-2 rounded-md px-2 py-0.5",children:[s.jsx(R,{size:"small",leading:"compact",children:l.name}),s.jsx(z,{size:"small",variant:"transparent",type:"button",onClick:()=>x(a),children:s.jsx(B,{})})]},l.cg_id))})]}):null]})}),s.jsx(r.ErrorMessage,{})]})})]}),s.jsx(c.Footer,{className:"shrink-0",children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(c.Close,{asChild:!0,children:s.jsx(w,{size:"small",variant:"secondary",children:e("actions.cancel")})}),s.jsx(w,{size:"small",type:"submit",children:e("actions.save")})]})})]})]})},Cs=()=>{const{t:d}=S(),{id:g}=F(),{price_list:e,isPending:p,isError:h,error:o}=E(g),t=e==null?void 0:e.rules.customer_group_id,{customer_groups:x,isPending:j,isError:b,error:y}=T({id:t},{enabled:!!(t!=null&&t.length)}),v=(x==null?void 0:x.map(a=>({id:a.id,name:a.name})))||[],i=p?!1:!(t!=null&&t.length&&j),l=!p&&!!e&&i;if(h)throw o;if(b)throw y;return s.jsxs(c,{children:[s.jsx(c.Header,{children:s.jsx(c.Title,{asChild:!0,children:s.jsx(D,{children:d("priceLists.configuration.edit.header")})})}),l&&s.jsx(Q,{priceList:e,customerGroups:v})]})};export{Cs as Component};
