import{I as He}from"./chunk-QJ6SBVJ2-_autqsds.js";import{R as _t,C as jt,O as vt}from"./chunk-P3DRE4IY-C6Rjv6oP.js";import{M as Fe}from"./chunk-LHJ6JQGA-BoEuY2_6.js";import{c as yt,d as It,e as Nt,u as St,f as Ct,g as Pt,h as Et,i as wt,j as qt,k as kt,l as At,m as Mt,n as Dt,o as Rt,p as Tt,q as Ot}from"./chunk-YAQNI7BB-CqiX3_ZB.js";import{g as Le}from"./chunk-PXZ7QYKX-DZ_CHK12.js";import{D as Ht}from"./chunk-AMJSV3NG-DPKI1Y1t.js";import{c as Ft,o as Lt}from"./chunk-P75BH6ZT-CZzlo1Le.js";import{a as K}from"./chunk-FSMQADBD-DQ6u7KYm.js";import{a5 as O,R as zt,u as Bt,b as F,aK as Vt,aN as Ut,r as I,j as e,a8 as Gt,a9 as $t,b7 as Qt,y as ze,t as R,H as _e,B as ne,w as p,T as B,I as oe,ab as Jt,de as Xt,aZ as Be,x as je,A as Ve,X as Pe,s as Ue,dg as Kt}from"./index-oLtKV1Ux.js";import{P as Ge,a as $e}from"./chunk-RERSP5B2-DGFars32.js";import{C as re}from"./chunk-W6N53UNG-B1QpwSpL.js";import{c as Ee}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{u as Qe,D as Je}from"./chunk-HRTYC4AL-Cv-xTLnn.js";import"./lodash-BQPOQPbG.js";import{u as Xe}from"./chunk-C76H5USB-VLX403Ju.js";import"./chunk-OXA2WNST-SUxUod8m.js";import"./chunk-BNLHRJ2A-Dbt8kFSd.js";import"./chunk-KHOKHZC6-I23na9JB.js";import{u as Ke}from"./chunk-STLKFKTM-Bvil_KZP.js";import{K as Zt}from"./chunk-6HTZNHPT-DsPxpq1N.js";import{R as Q,u as Wt,a as Ze,S as L}from"./chunk-6DAFMWMA-DcFXWLP6.js";import{P as we}from"./pencil-square-C8ZH4Ygr.js";import{D as Yt}from"./document-text-C718xlgZ.js";import{X as We}from"./x-circle-BiDk9ejG.js";import{u as en}from"./use-prompt-BiYcM7z7.js";import{A as Ye}from"./alert-DGTegOAr.js";import{C as qe}from"./currency-input-DVzab5bf.js";import{C as le}from"./checkbox-DUCWB_Nj.js";import{c as et}from"./index-CgI6BRDf.js";import"./Trans-BliKkizb.js";import"./chunk-P3UUX2T6-DnUA5WKI.js";import"./x-mark-mini-CknGqCj5.js";import"./triangles-mini-DH8IYMeu.js";import"./plus-mini-Dt4gvBBt.js";import"./chunk-YEDAFXMB-BJZC5lZ4.js";import"./chunk-AOFGTNG6-BswFuWR8.js";import"./chunk-WX2SMNCD-CfHnLN5T.js";import"./command-bar-BwZPhbxc.js";import"./index-C-zGjL7k.js";import"./chunk-CI243JRA-Dpv-K69h.js";import"./format-C8xOVGEJ.js";import"./date-picker-OqO4Himc.js";import"./clsx-B-dksMZM.js";import"./popover-Cu6DVetU.js";import"./triangle-left-mini-BxOUHAZM.js";import"./prompt-D1yV89PX.js";import"./index.esm-WiAENjKK.js";var te=et(),tn=i=>{const{t:l}=F();return I.useMemo(()=>[te.display({id:"select",header:({table:o})=>e.jsx(le,{checked:o.getIsSomePageRowsSelected()?"indeterminate":o.getIsAllPageRowsSelected(),onCheckedChange:d=>o.toggleAllPageRowsSelected(!!d)}),cell:({row:o})=>{const d=o.getCanSelect();return e.jsx(le,{disabled:!d,checked:o.getIsSelected(),onCheckedChange:n=>o.toggleSelected(!!n),onClick:n=>{n.stopPropagation()}})}}),te.display({id:"product",header:()=>e.jsx(Ge,{}),cell:({row:o})=>e.jsx($e,{product:{thumbnail:o.original.thumbnail,title:o.original.product_title}})}),te.accessor("variant.sku",{header:l("fields.sku"),cell:({getValue:o})=>o()||"-"}),te.accessor("variant.title",{header:l("fields.variant")}),te.accessor("quantity",{header:()=>e.jsx("div",{className:"flex size-full items-center overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:l("fields.quantity")})}),cell:({getValue:o,row:d})=>Le(d.original)}),te.accessor("refundable_total",{header:()=>e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:l("fields.price")})}),cell:({getValue:o})=>{const d=o()||0,n=K(d,i);return e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:n})})}})],[l,i])},nn=()=>{const{t:i}=F();return[{key:"returnable_quantity",label:i("orders.returns.returnableQuantityLabel"),type:"number"},{key:"refundable_amount",label:i("orders.returns.refundableAmountLabel"),type:"number"},{key:"created_at",label:i("fields.createdAt"),type:"date"},{key:"updated_at",label:i("fields.updatedAt"),type:"date"}]},sn=({pageSize:i=50,prefix:l})=>{const o=Xe(["q","offset","order","created_at","updated_at","returnable_quantity","refundable_amount"],l),{offset:d,created_at:n,updated_at:h,refundable_amount:m,returnable_quantity:_,...j}=o;return{searchParams:{...j,limit:i,offset:d?Number(d):0,created_at:n?JSON.parse(n):void 0,updated_at:h?JSON.parse(h):void 0,refundable_amount:m?JSON.parse(m):void 0,returnable_quantity:_?JSON.parse(_):void 0},raw:o}},pe=50,ke="rit",an=({onSelectionChange:i,selectedItems:l,items:o,currencyCode:d})=>{const{t:n}=F(),[h,m]=I.useState(l.reduce((f,E)=>(f[E]=!0,f),{})),_=f=>{const E=typeof f=="function"?f(h):f;m(E),i(Object.keys(E))},{searchParams:j,raw:v}=sn({pageSize:pe,prefix:ke}),w=I.useMemo(()=>{const{order:f,offset:E,limit:C,q:V,created_at:Z,updated_at:W,refundable_amount:J,returnable_quantity:U}=j;let M=o;if(V&&(M=M.filter(z=>{var G;return z.product_title.toLowerCase().includes(V.toLowerCase())||z.variant_title.toLowerCase().includes(V.toLowerCase())||((G=z.variant_sku)==null?void 0:G.toLowerCase().includes(V.toLowerCase()))})),f){const z=f[0]==="-"?"desc":"asc",G=f.replace("-","");M=on(M,G,z)}return Z&&(M=Ae(M,Z,"created_at")),W&&(M=Ae(M,W,"updated_at")),U&&(M=De(M,U,"returnable_quantity",d)),J&&(M=De(M,J,"refundable_amount",d)),M.slice(E,E+C)},[o,d,j]),q=tn(d),k=nn(),{table:S}=Qe({data:w,columns:q,count:w.length,enablePagination:!0,getRowId:f=>f.id,pageSize:pe,enableRowSelection:f=>Le(f.original)>0,rowSelection:{state:h,updater:_}});return e.jsx("div",{className:"flex size-full flex-col overflow-hidden",children:e.jsx(Je,{table:S,columns:q,pageSize:pe,count:w.length,filters:k,pagination:!0,layout:"fill",search:!0,orderBy:[{key:"product_title",label:n("fields.product")},{key:"variant_title",label:n("fields.variant")},{key:"sku",label:n("fields.sku")},{key:"returnable_quantity",label:n("orders.fields.returnableQuantity")},{key:"refundable_amount",label:n("orders.fields.refundableAmount")}],prefix:ke,queryObject:v})})},on=(i,l,o)=>i.sort((d,n)=>{let h,m;return l==="product_title"?(h=d.product_title,m=n.product_title):l==="variant_title"?(h=d.variant_title,m=n.variant_title):l==="sku"?(h=d.variant_sku,m=n.variant_sku):l==="returnable_quantity"?(h=d.quantity-(d.returned_quantity||0),m=n.quantity-(n.returned_quantity||0)):l==="refundable_amount"&&(h=d.refundable||0,m=n.refundable||0),h<m?o==="asc"?-1:1:h>m?o==="asc"?1:-1:0}),Ae=(i,l,o)=>{const{gt:d,gte:n,lt:h,lte:m}=l;return i.filter(_=>{const j=new Date(_[o]);let v=!0;return d&&(v=v&&j>new Date(d)),n&&(v=v&&j>=new Date(n)),h&&(v=v&&j<new Date(h)),m&&(v=v&&j<=new Date(m)),v})},Me={eq:void 0,gt:void 0,gte:void 0,lt:void 0,lte:void 0},De=(i,l,o,d)=>{const{eq:n,gt:h,lt:m,gte:_,lte:j}=typeof l=="object"?{...Me,...l}:{...Me,eq:l};return i.filter(v=>{const w=v.quantity-(v.returned_quantity||0),q=K(v.refundable||0,d),k=o==="returnable_quantity"?w:q;if(n)return k===n;let S=!0;return h&&(S=S&&k>h),_&&(S=S&&k>=_),m&&(S=S&&k<m),j&&(S=S&&k<=j),S})};function rn({item:i,previewItem:l,currencyCode:o,form:d,onRemove:n,onUpdate:h,index:m}){const{t:_}=F(),{return_reasons:j=[]}=Xt({fields:"+label"}),v=d.watch(`inbound_items.${m}`),w=typeof v.reason_id=="string",q=typeof v.note=="string";return e.jsxs("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",children:[e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 border-b p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(Be,{src:i.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(B,{className:"txt-small",as:"span",weight:"plus",children:[i.title," "]}),i.variant_sku&&e.jsxs("span",{children:["(",i.variant_sku,")"]})]}),e.jsx(B,{as:"div",className:"text-ui-fg-subtle txt-small",children:i.product_title})]})]}),e.jsxs("div",{className:"flex flex-1 justify-between",children:[e.jsxs("div",{className:"flex flex-grow items-center gap-2",children:[e.jsx(p.Field,{control:d.control,name:`inbound_items.${m}.quantity`,render:({field:k})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(je,{...k,className:"bg-ui-bg-base txt-small w-[67px] rounded-lg",min:1,max:i.quantity,type:"number",onBlur:S=>{const f=S.target.value,E=f===""?null:Number(f);k.onChange(E),E&&h({quantity:E})}})}),e.jsx(p.ErrorMessage,{})]})}),e.jsx(B,{className:"txt-small text-ui-fg-subtle",children:_("fields.qty")})]}),e.jsx("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0",children:e.jsx(Fe,{currencyCode:o,amount:l.return_requested_total})}),e.jsx(Ve,{groups:[{actions:[!w&&{label:_("actions.addReason"),onClick:()=>d.setValue(`inbound_items.${m}.reason_id`,""),icon:e.jsx(jt,{})},!q&&{label:_("actions.addNote"),onClick:()=>d.setValue(`inbound_items.${m}.note`,""),icon:e.jsx(Yt,{})},{label:_("actions.remove"),onClick:n,icon:e.jsx(We,{})}].filter(Boolean)}]})]})]}),e.jsxs(e.Fragment,{children:[w&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:_("orders.returns.reason")}),e.jsx(p.Hint,{className:"!mt-1",children:_("orders.returns.reasonHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(p.Field,{control:d.control,name:`inbound_items.${m}.reason_id`,render:({field:{ref:k,value:S,onChange:f,...E}})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(re,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",value:S,onChange:C=>{h({reason_id:C}),f(C)},...E,options:j.map(C=>({label:C.label,value:C.id}))})}),e.jsx(p.ErrorMessage,{})]})})}),e.jsx(oe,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{d.setValue(`inbound_items.${m}.reason_id`,null),h({reason_id:null})},children:e.jsx(Pe,{className:"text-ui-fg-muted"})})]})]}),q&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:_("orders.returns.note")}),e.jsx(p.Hint,{className:"!mt-1",children:_("orders.returns.noteHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(p.Field,{control:d.control,name:`inbound_items.${m}.note`,render:({field:{ref:k,...S}})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(je,{...S,onBlur:()=>{S.onChange(S.value),h({internal_note:S.value})},className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover"})}),e.jsx(p.ErrorMessage,{})]})})}),e.jsx(oe,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{d.setValue(`inbound_items.${m}.note`,null),h({internal_note:null})},children:e.jsx(Pe,{className:"text-ui-fg-muted"})})]})]})]})]})}var ln=O.object({inbound_items:O.array(O.object({item_id:O.string(),quantity:O.number(),reason_id:O.string().nullish(),note:O.string().nullish()})),outbound_items:O.array(O.object({item_id:O.string(),quantity:O.number()})),location_id:O.string().optional(),inbound_option_id:O.string().nullish(),outbound_option_id:O.string().nullish(),send_notification:O.boolean().optional()}),ae=et(),dn=i=>{const{t:l}=F();return I.useMemo(()=>[ae.display({id:"select",header:({table:o})=>e.jsx(le,{checked:o.getIsSomePageRowsSelected()?"indeterminate":o.getIsAllPageRowsSelected(),onCheckedChange:d=>o.toggleAllPageRowsSelected(!!d)}),cell:({row:o})=>{const d=o.getCanSelect();return e.jsx(le,{disabled:!d,checked:o.getIsSelected(),onCheckedChange:n=>o.toggleSelected(!!n),onClick:n=>{n.stopPropagation()}})}}),ae.display({id:"product",header:()=>e.jsx(Ge,{}),cell:({row:o})=>e.jsx($e,{product:o.original.product})}),ae.accessor("sku",{header:l("fields.sku"),cell:({getValue:o})=>o()||"-"}),ae.accessor("title",{header:l("fields.title")})],[l,i])},cn=()=>{const{t:i}=F();return[{key:"created_at",label:i("fields.createdAt"),type:"date"},{key:"updated_at",label:i("fields.updatedAt"),type:"date"}]},un=({pageSize:i=50,prefix:l})=>{const o=Xe(["q","offset","order","created_at","updated_at"],l),{offset:d,created_at:n,updated_at:h,...m}=o;return{searchParams:{...m,limit:i,offset:d?Number(d):0,created_at:n?JSON.parse(n):void 0,updated_at:h?JSON.parse(h):void 0},raw:o}},fe=50,Re="rit",mn=({onSelectionChange:i,selectedItems:l,currencyCode:o})=>{const{t:d}=F(),[n,h]=I.useState(l.reduce((f,E)=>(f[E]=!0,f),{})),m=f=>{const E=typeof f=="function"?f(n):f;h(E),i(Object.keys(E))},{searchParams:_,raw:j}=un({pageSize:fe,prefix:Re}),{variants:v=[],count:w}=Kt({..._,fields:"*inventory_items.inventory.location_levels,+inventory_quantity"}),q=dn(o),k=cn(),{table:S}=Qe({data:v,columns:q,count:w,enablePagination:!0,getRowId:f=>f.id,pageSize:fe,enableRowSelection:f=>!0,rowSelection:{state:n,updater:m}});return e.jsx("div",{className:"flex size-full flex-col overflow-hidden",children:e.jsx(Je,{table:S,columns:q,pageSize:fe,count:w,filters:k,pagination:!0,layout:"fill",search:!0,orderBy:[{key:"product_id",label:d("fields.product")},{key:"title",label:d("fields.title")},{key:"sku",label:d("fields.sku")}],prefix:Re,queryObject:j})})};function pn({previewItem:i,currencyCode:l,form:o,onRemove:d,onUpdate:n,index:h}){const{t:m}=F();return e.jsx("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",children:e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 border-b p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(Be,{src:i.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(B,{className:"txt-small",as:"span",weight:"plus",children:[i.title," "]}),i.variant_sku&&e.jsxs("span",{children:["(",i.variant_sku,")"]})]}),e.jsx(B,{as:"div",className:"text-ui-fg-subtle txt-small",children:i.product_title})]})]}),e.jsxs("div",{className:"flex flex-1 justify-between",children:[e.jsxs("div",{className:"flex flex-grow items-center gap-2",children:[e.jsx(p.Field,{control:o.control,name:`outbound_items.${h}.quantity`,render:({field:_})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(je,{..._,className:"bg-ui-bg-base txt-small w-[67px] rounded-lg",min:1,type:"number",onBlur:j=>{const v=j.target.value,w=v===""?null:Number(v);_.onChange(w),w&&n({quantity:w})}})}),e.jsx(p.ErrorMessage,{})]})}),e.jsx(B,{className:"txt-small text-ui-fg-subtle",children:m("fields.qty")})]}),e.jsx("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0",children:e.jsx(Fe,{currencyCode:l,amount:i.total})}),e.jsx(Ve,{groups:[{actions:[{label:m("actions.remove"),onClick:d,icon:e.jsx(We,{})}].filter(Boolean)}]})]})]})})}var he=[],Te=[],fn=({order:i,preview:l,claim:o,form:d})=>{const{t:n}=F(),{setIsOpen:h}=Ze(),[m,_]=I.useState({}),{shipping_options:j=[]}=Ke({limit:999,fields:"*prices,+service_zone.fulfillment_set.location.id"}),{mutateAsync:v}=Mt(o.id,i.id),{mutateAsync:w}=Dt(o.id,i.id),{mutateAsync:q}=Rt(o.id,i.id),{mutateAsync:k}=Tt(o.id,i.id),{mutateAsync:S}=Ot(o.id,i.id),f=I.useMemo(()=>{var y;return(y=l==null?void 0:l.items)==null?void 0:y.filter(g=>{var u;return!!((u=g.actions)!=null&&u.find(x=>x.claim_id===o.id&&x.action==="ITEM_ADD"))})},[l.items]),E=I.useMemo(()=>{var y;return new Map((y=i==null?void 0:i.items)==null?void 0:y.map(g=>[g.variant_id,g]))},[i.items]),{fields:C,append:V,remove:Z,update:W}=ze({name:"outbound_items",control:d.control}),J=I.useMemo(()=>new Map(f.map(y=>[y.variant_id,y])),[f,C]);I.useEffect(()=>{const y={};f.forEach(g=>{const u=C.findIndex(x=>x.item_id===g.id);y[g.id]=!0,u>-1?C[u].quantity!==g.detail.quantity&&W(u,{...C[u],quantity:g.detail.quantity}):V({item_id:g.id,quantity:g.detail.quantity,variant_id:g.variant_id},{shouldFocus:!1})}),C.forEach((g,u)=>{g.item_id in y||Z(u)})},[f]);const U=d.watch("location_id"),M=!C.length,z=async()=>{var y,g;he.length&&await q({items:he.map(u=>({variant_id:u,quantity:1}))},{onError:u=>{R.error(u.message)}});for(const u of Te){const x=(g=(y=f.find(N=>N.variant_id===u))==null?void 0:y.actions)==null?void 0:g.find(N=>N.action==="ITEM_ADD");x!=null&&x.id&&await S(x==null?void 0:x.id,{onError:N=>{R.error(N.message)}})}h("outbound-items",!1)},G=async y=>{const u=l.shipping_methods.filter(x=>{var D;const N=(D=x.actions)==null?void 0:D.find(A=>A.action==="SHIPPING_ADD"&&!A.return_id);return N&&!(N!=null&&N.return_id)}).filter(Boolean).map(x=>{var D;const N=(D=x.actions)==null?void 0:D.find(A=>A.action==="SHIPPING_ADD"&&!A.return_id);if(N)return w(N.id)});await Promise.all(u),await v({shipping_option_id:y},{onError:x=>{R.error(x.message)}})},de=I.useMemo(()=>U?!C.map(g=>{var x,N;const u=E.get(g.variant_id);return!(u!=null&&u.variant_id)||!(u!=null&&u.variant)||!((x=u.variant)!=null&&x.manage_inventory)?!0:(N=m[u.variant_id])==null?void 0:N.find(D=>D.location_id===U)}).every(Boolean):!1,[C,m,U]);return I.useEffect(()=>{(async()=>{const g={};if(!C.length)return g;const u=C.map(N=>N==null?void 0:N.variant_id).filter(Boolean);return(await Ue.admin.productVariant.list({id:u},{fields:"*inventory,*inventory.location_levels"})).variants.forEach(N=>{var D,A;g[N.id]=((A=(D=N.inventory)==null?void 0:D[0])==null?void 0:A.location_levels)||[]}),g})().then(g=>{_(g)})},[C]),e.jsxs("div",{children:[e.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[e.jsx(_e,{level:"h2",children:n("orders.returns.outbound")}),e.jsxs(L,{id:"outbound-items",children:[e.jsx(L.Trigger,{asChild:!0,children:e.jsx("a",{className:"focus-visible:shadow-borders-focus transition-fg txt-compact-small-plus cursor-pointer text-blue-500 outline-none hover:text-blue-400",children:n("actions.addItems")})}),e.jsxs(L.Content,{children:[e.jsx(L.Header,{}),e.jsx(mn,{selectedItems:C.map(y=>y.variant_id),currencyCode:i.currency_code,onSelectionChange:y=>{const g=C.map(u=>u.variant_id);he=y.filter(u=>!g.includes(u)),Te=g.filter(u=>!y.includes(u))}}),e.jsx(L.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(Q.Close,{asChild:!0,children:e.jsx(ne,{type:"button",variant:"secondary",size:"small",children:n("actions.cancel")})}),e.jsx(ne,{type:"submit",variant:"primary",size:"small",role:"button",onClick:async()=>await z(),children:n("actions.save")},"submit-button")]})})})]})]})]}),M&&e.jsx(He,{}),C.map((y,g)=>J.get(y.variant_id)&&e.jsx(pn,{previewItem:J.get(y.variant_id),currencyCode:i.currency_code,form:d,onRemove:()=>{var x,N,D;const u=(D=(N=(x=f.find(A=>A.id===y.item_id))==null?void 0:x.actions)==null?void 0:N.find(A=>A.action==="ITEM_ADD"))==null?void 0:D.id;u&&S(u,{onError:A=>{R.error(A.message)}})},onUpdate:u=>{var N,D,A;const x=(A=(D=(N=f.find(X=>X.id===y.item_id))==null?void 0:N.actions)==null?void 0:D.find(X=>X.action==="ITEM_ADD"))==null?void 0:A.id;x&&k({...u,actionId:x},{onError:X=>{R.error(X.message)}})},index:g},y.id)),!M&&e.jsx("div",{className:"mt-8 flex flex-col gap-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:n("orders.claims.outboundShipping")}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.claims.outboundShippingHint")})]}),e.jsx(p.Field,{control:d.control,name:"outbound_option_id",render:({field:{value:y,onChange:g,...u}})=>e.jsx(p.Item,{children:e.jsx(p.Control,{children:e.jsx(re,{value:y??void 0,onChange:x=>{g(x),x&&G(x)},...u,options:j.map(x=>({label:x.name,value:x.id})),disabled:!j.length,noResultsPlaceholder:e.jsx(vt,{})})})})})]})}),de&&e.jsxs(Ye,{variant:"warning",dismissible:!0,className:"mt-4 p-5",children:[e.jsx("div",{className:"text-ui-fg-subtle txt-small pb-2 font-medium leading-[20px]",children:n("orders.returns.noInventoryLevel")}),e.jsx(B,{className:"text-ui-fg-subtle txt-small leading-normal",children:n("orders.returns.noInventoryLevelDesc")})]})]})},xe=[],Oe=[],ge=!1,hn=({order:i,preview:l,claim:o,orderReturn:d})=>{var Ne;const{t:n}=F(),{handleSuccess:h}=Wt(),{setIsOpen:m}=Ze(),[_,j]=I.useState(!1),[v,w]=I.useState(!1),[q,k]=I.useState(0),[S,f]=I.useState(0),[E,C]=I.useState({}),{mutateAsync:V,isPending:Z}=Nt(o.id,i.id),{mutateAsync:W,isPending:J}=St(o.id,i.id),{mutateAsync:U,isPending:M}=Lt((Ne=l==null?void 0:l.order_change)==null?void 0:Ne.return_id,i.id),{mutateAsync:z,isPending:G}=Ct(o.id,i.id),{mutateAsync:de,isPending:y}=Pt(o.id,i.id),{mutateAsync:g,isPending:u}=Et(o.id,i.id),{mutateAsync:x,isPending:N}=wt(o.id,i.id),{mutateAsync:D,isPending:A}=qt(o.id,i.id),{mutateAsync:X,isPending:tt}=kt(o.id,i.id),{mutateAsync:ve,isPending:nt}=At(o.id,i.id),st=Z||J||G||y||N||u||A||nt||tt||M,$=I.useMemo(()=>{var s;return(s=l==null?void 0:l.items)==null?void 0:s.filter(r=>{var t;return!!((t=r.actions)!=null&&t.find(a=>a.claim_id===o.id))})},[l.items]),se=$.filter(s=>{var r;return!!((r=s.actions)!=null&&r.find(t=>t.action==="RETURN_ITEM"))}),ce=$.filter(s=>{var r;return!!((r=s.actions)!=null&&r.find(t=>t.action==="ITEM_ADD"))}),ue=I.useMemo(()=>{var s;return new Map((s=i==null?void 0:i.items)==null?void 0:s.map(r=>[r.id,r]))},[i.items]),T=Gt({defaultValues:()=>{const s=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!!c.return_id))}),r=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!c.return_id))});return Promise.resolve({inbound_items:se.map(t=>{var c,b;const a=(c=t.actions)==null?void 0:c.find(P=>P.action==="RETURN_ITEM");return{item_id:t.id,variant_id:t.variant_id,quantity:t.detail.return_requested_quantity,note:a==null?void 0:a.internal_note,reason_id:(b=a==null?void 0:a.details)==null?void 0:b.reason_id}}),outbound_items:ce.map(t=>({item_id:t.id,variant_id:t.variant_id,quantity:t.detail.quantity})),inbound_option_id:s?s.shipping_option_id:"",outbound_option_id:r?r.shipping_option_id:"",location_id:d==null?void 0:d.location_id,send_notification:!1})},resolver:$t(ln)}),Y=T.watch("location_id"),{stock_locations:it=[]}=Qt({limit:999}),{shipping_options:at=[]}=Ke({limit:999,fields:"*prices,+service_zone.fulfillment_set.location.id",stock_location_id:Y},{enabled:!!Y}),ot=at.filter(s=>!!s.rules.find(r=>r.attribute==="is_return"&&r.value==="true")),me=l.shipping_methods.find(s=>{var r;return!!((r=s.actions)!=null&&r.find(t=>t.action==="SHIPPING_ADD"&&!!t.return_id))}),ee=l.shipping_methods.find(s=>{var r;return!!((r=s.actions)!=null&&r.find(t=>t.action==="SHIPPING_ADD"&&!t.return_id))});I.useEffect(()=>{me&&k(me.total)},[me]),I.useEffect(()=>{ee&&f(ee.total)},[ee]);const{fields:H,append:rt,remove:lt,update:dt}=ze({name:"inbound_items",control:T.control}),ye=I.useMemo(()=>new Map($.map(s=>[s.id,s])),[$,H]);I.useEffect(()=>{const s={};se.forEach(r=>{var a,c;const t=H.findIndex(b=>b.item_id===r.id);if(s[r.id]=!0,t>-1){if(H[t].quantity!==r.detail.return_requested_quantity){const b=(a=r.actions)==null?void 0:a.find(P=>P.action==="RETURN_ITEM");dt(t,{...H[t],quantity:r.detail.return_requested_quantity,note:b==null?void 0:b.internal_note,reason_id:(c=b==null?void 0:b.details)==null?void 0:c.reason_id})}}else rt({item_id:r.id,quantity:r.detail.return_requested_quantity},{shouldFocus:!1})}),H.forEach((r,t)=>{r.item_id in s||lt(t)})},[$]),I.useEffect(()=>{const s=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!!c.return_id))});s?T.setValue("inbound_option_id",s.shipping_option_id):T.setValue("inbound_option_id",null);const r=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!c.return_id))});r?T.setValue("outbound_option_id",r.shipping_option_id):T.setValue("outbound_option_id",null)},[l.shipping_methods]),I.useEffect(()=>{T.setValue("location_id",d==null?void 0:d.location_id)},[d]);const ie=!se.length,Ie=!ce.length,ct=T.watch("inbound_option_id"),ut=T.watch("outbound_option_id"),mt=en(),pt=T.handleSubmit(async s=>{await mt({title:n("general.areYouSure"),description:n("orders.claims.confirmText"),confirmText:n("actions.continue"),cancelText:n("actions.cancel"),variant:"confirmation"})&&await V({no_notification:!s.send_notification},{onSuccess:()=>{R.success(n("orders.claims.toast.confirmedSuccessfully")),h()},onError:t=>{R.error(t.message)}})}),ft=async()=>{var s,r,t;xe.length&&await D({items:xe.map(a=>({id:a,quantity:1}))},{onError:a=>{R.error(a.message)}});for(const a of Oe){const c=(t=(r=(s=$.find(b=>b.id===a))==null?void 0:s.actions)==null?void 0:r.find(b=>b.action==="RETURN_ITEM"))==null?void 0:t.id;c&&await ve(c,{onError:b=>{R.error(b.message)}})}m("inbound-items",!1)},ht=async s=>{await U({location_id:s})},xt=async s=>{const t=l.shipping_methods.filter(a=>{var b;const c=(b=a.actions)==null?void 0:b.find(P=>P.action==="SHIPPING_ADD"&&!!P.return_id);return c&&!(c!=null&&c.return_id)}).filter(Boolean).map(a=>{var b;const c=(b=a.actions)==null?void 0:b.find(P=>P.action==="SHIPPING_ADD"&&!!P.return_id);if(c)return x(c.id)});await Promise.all(t),await z({shipping_option_id:s},{onError:a=>{R.error(a.message)}})};I.useEffect(()=>{var s;_&&((s=document.getElementById("js-shipping-inbound-input"))==null||s.focus())},[_]),I.useEffect(()=>{var s;v&&((s=document.getElementById("js-shipping-outbound-input"))==null||s.focus())},[v]);const gt=I.useMemo(()=>Y?!H.map(r=>{var a,c;const t=ue.get(r.item_id);return!(t!=null&&t.variant_id)||!(t!=null&&t.variant)||!((a=t.variant)!=null&&a.manage_inventory)?!0:(c=E[t.variant_id])==null?void 0:c.find(b=>b.location_id===Y)}).every(Boolean):!1,[H,E,Y]);I.useEffect(()=>{(async()=>{const r={};if(!H.length)return r;const t=H.map(c=>c==null?void 0:c.variant_id).filter(Boolean);return(await Ue.admin.productVariant.list({id:t},{fields:"*inventory,*inventory.location_levels"})).variants.forEach(c=>{var b,P;r[c.id]=((P=(b=c.inventory)==null?void 0:b[0])==null?void 0:P.location_levels)||[]}),r})().then(r=>{C(r)})},[H]),I.useEffect(()=>()=>{ge&&(W(void 0,{onSuccess:()=>{R.success(n("orders.claims.actions.cancelClaim.successToast"))},onError:s=>{R.error(s.message)}}),ge=!1)},[]);const bt=I.useMemo(()=>{const s=l.shipping_methods.find(r=>{var t;return!!((t=r.actions)!=null&&t.find(a=>a.action==="SHIPPING_ADD"&&!!a.return_id))});return(s==null?void 0:s.total)||0},[l.shipping_methods]);return e.jsx(Q.Form,{form:T,children:e.jsxs(Zt,{onSubmit:pt,className:"flex h-full flex-col",children:[e.jsx(Q.Header,{}),e.jsx(Q.Body,{className:"flex size-full justify-center overflow-y-auto",children:e.jsxs("div",{className:"mt-16 w-[720px] max-w-[100%] px-4 md:p-0",children:[e.jsx(_e,{level:"h1",children:n("orders.claims.create")}),e.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[e.jsx(_e,{level:"h2",children:n("orders.returns.inbound")}),e.jsxs(L,{id:"inbound-items",children:[e.jsx(L.Trigger,{asChild:!0,children:e.jsx("a",{className:"focus-visible:shadow-borders-focus transition-fg txt-compact-small-plus cursor-pointer text-blue-500 outline-none hover:text-blue-400",children:n("actions.addItems")})}),e.jsxs(L.Content,{children:[e.jsx(L.Header,{}),e.jsx(an,{items:i.items,selectedItems:H.map(s=>s.item_id),currencyCode:i.currency_code,onSelectionChange:s=>{const r=H.map(t=>t.item_id);xe=s.filter(t=>!r.includes(t)),Oe=r.filter(t=>!s.includes(t))}}),e.jsx(L.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(Q.Close,{asChild:!0,children:e.jsx(ne,{type:"button",variant:"secondary",size:"small",children:n("actions.cancel")})}),e.jsx(ne,{type:"submit",variant:"primary",size:"small",role:"button",onClick:async()=>await ft(),children:n("actions.save")},"submit-button")]})})})]})]})]}),ie&&e.jsx(He,{}),H.map((s,r)=>ye.get(s.item_id)&&ue.get(s.item_id)&&e.jsx(rn,{item:ue.get(s.item_id),previewItem:ye.get(s.item_id),currencyCode:i.currency_code,form:T,onRemove:()=>{var a,c,b;const t=(b=(c=(a=$.find(P=>P.id===s.item_id))==null?void 0:a.actions)==null?void 0:c.find(P=>P.action==="RETURN_ITEM"))==null?void 0:b.id;t&&ve(t,{onError:P=>{R.error(P.message)}})},onUpdate:t=>{var c,b;const a=(b=(c=$.find(P=>P.id===s.item_id))==null?void 0:c.actions)==null?void 0:b.find(P=>P.action==="RETURN_ITEM");a&&X({...t,actionId:a.id},{onError:P=>{var Se,Ce;(Se=a.details)!=null&&Se.quantity&&t.quantity&&T.setValue(`inbound_items.${r}.quantity`,(Ce=a.details)==null?void 0:Ce.quantity),R.error(P.message)}})},index:r},s.id)),!ie&&e.jsxs("div",{className:"mt-8 flex flex-col gap-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:n("orders.returns.location")}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.returns.locationHint")})]}),e.jsx(p.Field,{control:T.control,name:"location_id",render:({field:{value:s,onChange:r,...t}})=>e.jsx(p.Item,{children:e.jsx(p.Control,{children:e.jsx(re,{...t,value:s??void 0,onChange:a=>{r(a),ht(a)},options:(it??[]).map(a=>({label:a.name,value:a.id}))})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsxs(p.Label,{children:[n("orders.returns.inboundShipping"),e.jsxs(B,{size:"small",leading:"compact",className:"text-ui-fg-muted ml-1 inline",children:["(",n("fields.optional"),")"]})]}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.returns.inboundShippingHint")})]}),e.jsx(p.Field,{control:T.control,name:"inbound_option_id",render:({field:{value:s,onChange:r,...t}})=>e.jsx(p.Item,{children:e.jsx(p.Control,{children:e.jsx(re,{value:s??void 0,onChange:a=>{r(a),a&&xt(a)},...t,options:ot.map(a=>({label:a.name,value:a.id})),disabled:!Y,noResultsPlaceholder:e.jsx(_t,{})})})})})]})]}),gt&&e.jsxs(Ye,{variant:"warning",dismissible:!0,className:"mt-4 p-5",children:[e.jsx("div",{className:"text-ui-fg-subtle txt-small pb-2 font-medium leading-[20px]",children:n("orders.returns.noInventoryLevel")}),e.jsx(B,{className:"text-ui-fg-subtle txt-small leading-normal",children:n("orders.returns.noInventoryLevelDesc")})]}),e.jsx(fn,{form:T,preview:l,order:i,claim:o}),e.jsxs("div",{className:"mt-8 border-y border-dotted py-4",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.returns.inboundTotal")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:K(se.reduce((s,r)=>{var a;const t=(a=r.actions)==null?void 0:a.find(c=>c.action==="RETURN_ITEM");return s=s+((t==null?void 0:t.amount)||0),s},0)*-1,i.currency_code)})]}),e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.claims.outboundTotal")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:K(ce.reduce((s,r)=>{var a;const t=(a=r.actions)==null?void 0:a.find(c=>c.action==="ITEM_ADD");return s=s+((t==null?void 0:t.amount)||0),s},0),i.currency_code)})]}),e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.returns.inboundShipping")}),e.jsxs("span",{className:"txt-small text-ui-fg-subtle flex items-center",children:[!_&&e.jsx(oe,{onClick:()=>j(!0),variant:"transparent",className:"text-ui-fg-muted",disabled:ie||!ct,children:e.jsx(we,{})}),_?e.jsx(qe,{id:"js-shipping-inbound-input",onBlur:()=>{let s;l.shipping_methods.forEach(t=>{if(t.actions)for(const a of t.actions)a.action==="SHIPPING_ADD"&&a.return_id&&(s=a.id)});const r=q===""?null:parseFloat(q);s&&de({actionId:s,custom_amount:r},{onError:t=>{R.error(t.message)}}),j(!1)},symbol:Ee[i.currency_code.toUpperCase()].symbol_native,code:i.currency_code,onValueChange:k,value:q,disabled:ie}):K(bt,i.currency_code)]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.claims.outboundShipping")}),e.jsxs("span",{className:"txt-small text-ui-fg-subtle flex items-center",children:[!v&&e.jsx(oe,{onClick:()=>w(!0),variant:"transparent",className:"text-ui-fg-muted",disabled:Ie||!ut,children:e.jsx(we,{})}),v?e.jsx(qe,{id:"js-shipping-outbound-input",onBlur:()=>{let s;l.shipping_methods.forEach(t=>{if(t.actions)for(const a of t.actions)a.action==="SHIPPING_ADD"&&!a.return_id&&(s=a.id)});const r=S===""?null:parseFloat(S);s&&g({actionId:s,custom_amount:r},{onError:t=>{R.error(t.message)}}),w(!1)},symbol:Ee[i.currency_code.toUpperCase()].symbol_native,code:i.currency_code,onValueChange:f,value:S,disabled:Ie}):K((ee==null?void 0:ee.amount)??0,i.currency_code)]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-dotted pt-4",children:[e.jsx("span",{className:"txt-small font-medium",children:n("orders.claims.refundAmount")}),e.jsx("span",{className:"txt-small font-medium",children:K(l.summary.pending_difference,i.currency_code)})]})]}),e.jsx("div",{className:"bg-ui-bg-field mt-8 rounded-lg border py-2 pl-2 pr-4",children:e.jsx(p.Field,{control:T.control,name:"send_notification",render:({field:{onChange:s,value:r,...t}})=>e.jsxs(p.Item,{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(p.Control,{className:"mr-4 self-start",children:e.jsx(Jt,{className:"mt-[2px]",checked:!!r,onCheckedChange:s,...t})}),e.jsxs("div",{className:"block",children:[e.jsx(p.Label,{children:n("orders.returns.sendNotification")}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.returns.sendNotificationHint")})]})]}),e.jsx(p.ErrorMessage,{})]})})}),e.jsx("div",{className:"p-8"})]})}),e.jsx(Q.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(Q.Close,{asChild:!0,children:e.jsx(ne,{type:"button",onClick:()=>ge=!0,variant:"secondary",size:"small",children:n("orders.claims.cancel.title")})}),e.jsx(ne,{type:"submit",variant:"primary",size:"small",isLoading:st,children:n("orders.claims.confirm")},"submit-button")]})})})]})})},be=!1,ds=()=>{const{id:i}=zt(),l=Bt(),{t:o}=F(),{order:d}=Vt(i,{fields:Ht}),{order:n}=Ut(i),[h,m]=I.useState(),{mutateAsync:_}=yt(d.id),{claim:j}=It(h,void 0,{enabled:!!h}),{return:v}=Ft(j==null?void 0:j.return_id,void 0,{enabled:!!(j!=null&&j.return_id)});return I.useEffect(()=>{async function w(){if(!(be||!n)){if(n.order_change){n.order_change.change_type==="claim"?m(n.order_change.claim_id):(l(`/orders/${n.id}`,{replace:!0}),R.error(o("orders.claims.activeChangeError")));return}be=!0;try{const{claim:q}=await _({order_id:n.id,type:"replace"});m(q.id)}catch(q){R.error(q.message),l(`/orders/${n.id}`,{replace:!0})}finally{be=!1}}}w()},[n]),e.jsx(Q,{children:j&&n&&d&&e.jsx(hn,{order:d,claim:j,preview:n,orderReturn:v})})};export{ds as Component};
