import{u as y}from"./chunk-C76H5USB-VLX403Ju.js";import{b as c,i as v,J as j,r as b,j as l,V as _}from"./index-oLtKV1Ux.js";import{D as C,a as N}from"./chunk-B4FQDBC3-Cc7EPwPe.js";import{M as g}from"./chunk-LHJ6JQGA-BoEuY2_6.js";import{g as w,a as S}from"./chunk-XFSJ7YIN-CYgS8ok5.js";import{S as h}from"./chunk-ADOCJB6L--Hg-Ptul.js";import{P as f}from"./chunk-P3UUX2T6-DnUA5WKI.js";import{R as F}from"./react-country-flag.esm-B16G8_V1.js";import{c as D}from"./index-CgI6BRDf.js";var Z=({prefix:e,pageSize:a=20})=>{const n=y(["offset","q","created_at","updated_at","region_id","sales_channel_id","payment_status","fulfillment_status","order"],e),{offset:r,sales_channel_id:u,created_at:i,updated_at:s,fulfillment_status:t,payment_status:d,region_id:m,q:x,order:p}=n;return{searchParams:{limit:a,offset:r?Number(r):0,sales_channel_id:u==null?void 0:u.split(","),fulfillment_status:t==null?void 0:t.split(","),payment_status:d==null?void 0:d.split(","),created_at:i?JSON.parse(i):void 0,updated_at:s?JSON.parse(s):void 0,region_id:m==null?void 0:m.split(","),order:p||"-display_id",q:x},raw:n}},$=()=>{const{t:e}=c(),{regions:a}=v({limit:1e3,fields:"id,name"}),{sales_channels:n}=j({limit:1e3,fields:"id,name"});let r=[];if(a){const i={key:"region_id",label:e("fields.region"),type:"select",options:a.map(s=>({label:s.name,value:s.id})),multiple:!0,searchable:!0};r=[...r,i]}if(n){const i={key:"sales_channel_id",label:e("fields.salesChannel"),type:"select",multiple:!0,searchable:!0,options:n.map(s=>({label:s.name,value:s.id}))};r=[...r,i]}e("orders.payment.statusLabel"),e("orders.payment.status.notPaid"),e("orders.payment.status.awaiting"),e("orders.payment.status.captured"),e("orders.payment.status.refunded"),e("orders.payment.status.partiallyRefunded"),e("orders.payment.status.canceled"),e("orders.payment.status.requiresAction"),e("orders.fulfillment.statusLabel"),e("orders.fulfillment.status.notFulfilled"),e("orders.fulfillment.status.fulfilled"),e("orders.fulfillment.status.partiallyFulfilled"),e("orders.fulfillment.status.returned"),e("orders.fulfillment.status.partiallyReturned"),e("orders.fulfillment.status.shipped"),e("orders.fulfillment.status.partiallyShipped"),e("orders.fulfillment.status.canceled"),e("orders.fulfillment.status.requiresAction");const u=[{label:"Created At",key:"created_at"},{label:"Updated At",key:"updated_at"}].map(i=>({key:i.key,label:i.label,type:"date"}));return r=[...r,...u],r},H=({country:e})=>e?l.jsx("div",{className:"flex size-5 items-center justify-center",children:l.jsx(_,{content:e.display_name,children:l.jsx("div",{className:"flex size-4 items-center justify-center overflow-hidden rounded-sm",children:l.jsx(F,{countryCode:e.iso_2.toUpperCase(),svg:!0,style:{width:"16px",height:"16px"},"aria-label":e.display_name})})})}):l.jsx(f,{}),P=({customer:e})=>{if(!e)return l.jsx("span",{className:"text-ui-fg-muted",children:"-"});const{first_name:a,last_name:n,email:r}=e,u=[a,n].filter(Boolean).join(" ");return l.jsx("div",{className:"flex h-full w-full items-center",children:l.jsx("span",{className:"truncate",children:u||r})})},k=()=>{const{t:e}=c();return l.jsx("div",{className:"flex h-full w-full items-center",children:l.jsx("span",{className:"truncate",children:e("fields.customer")})})},O=({displayId:e})=>e?l.jsx("div",{className:"text-ui-fg-subtle txt-compact-small flex h-full w-full items-center overflow-hidden",children:l.jsxs("span",{className:"truncate",children:["#",e]})}):l.jsx(f,{}),q=()=>{const{t:e}=c();return l.jsx("div",{className:"flex h-full w-full items-center",children:l.jsx("span",{className:"truncate",children:e("fields.order")})})},T=({status:e})=>{const{t:a}=c();if(!e)return"-";const{label:n,color:r}=w(a,e);return l.jsx(h,{color:r,children:n})},A=()=>{const{t:e}=c();return l.jsx("div",{className:"flex h-full w-full items-center",children:l.jsx("span",{className:"truncate",children:e("fields.fulfillment")})})},R=({status:e})=>{const{t:a}=c(),{label:n,color:r}=S(a,e);return l.jsx(h,{color:r,children:n})},E=()=>{const{t:e}=c();return l.jsx("div",{className:"flex h-full w-full items-center",children:l.jsx("span",{className:"truncate",children:e("fields.payment")})})},J=({channel:e})=>{if(!e)return l.jsx("span",{className:"text-ui-fg-muted",children:"-"});const{name:a}=e;return l.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:l.jsx("span",{className:"truncate",children:a})})},M=()=>{const{t:e}=c();return l.jsx("div",{className:"flex h-full w-full items-center",children:l.jsx("span",{className:"truncate",children:e("fields.salesChannel")})})},z=({currencyCode:e,total:a})=>a?l.jsx(g,{currencyCode:e,amount:a,align:"right"}):l.jsx(f,{}),I=()=>{const{t:e}=c();return l.jsx("div",{className:"flex h-full w-full items-center justify-end",children:l.jsx("span",{className:"truncate",children:e("fields.total")})})},o=D(),ee=e=>{const{exclude:a=[]}=e??{},n=b.useMemo(()=>[o.accessor("display_id",{header:()=>l.jsx(q,{}),cell:({getValue:s})=>{const t=s();return l.jsx(O,{displayId:t})}}),o.accessor("created_at",{header:()=>l.jsx(C,{}),cell:({getValue:s})=>{const t=new Date(s());return l.jsx(N,{date:t})}}),o.accessor("customer",{header:()=>l.jsx(k,{}),cell:({getValue:s})=>{const t=s();return l.jsx(P,{customer:t})}}),o.accessor("sales_channel",{header:()=>l.jsx(M,{}),cell:({getValue:s})=>{const t=s();return l.jsx(J,{channel:t})}}),o.accessor("payment_status",{header:()=>l.jsx(E,{}),cell:({getValue:s})=>{const t=s();return l.jsx(R,{status:t})}}),o.accessor("fulfillment_status",{header:()=>l.jsx(A,{}),cell:({getValue:s})=>{const t=s();return l.jsx(T,{status:t})}}),o.accessor("total",{header:()=>l.jsx(I,{}),cell:({getValue:s,row:t})=>{const d=s(),m=t.original.currency_code;return l.jsx(z,{currencyCode:m,total:d})}}),o.display({id:"actions",cell:({row:s})=>{var d;const t=(d=s.original.shipping_address)==null?void 0:d.country;return l.jsx(H,{country:t})}})],[]),r=s=>s.accessorKey!==void 0,u=s=>s.id!==void 0,i=s=>r(s)?a.includes(s.accessorKey):u(s)?a.includes(s.id):!1;return n.filter(s=>!i(s))};export{$ as a,ee as b,Z as u};
