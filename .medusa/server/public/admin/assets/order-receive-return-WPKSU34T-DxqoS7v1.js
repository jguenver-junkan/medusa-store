import{c as K,d as Z,e as L,f as J,g as X,h as Y,i as ee,j as te,k as se,l as re}from"./chunk-P75BH6ZT-CZzlo1Le.js";import{a as P}from"./chunk-FSMQADBD-DQ6u7KYm.js";import{r as u,a5 as b,R as ae,b as V,u as ne,aK as ie,aN as oe,t as y,j as e,H as le,aS as ce,a8 as de,a9 as ue,T as D,aZ as me,w as x,x as F,ab as fe,B as M}from"./index-oLtKV1Ux.js";import{K as he}from"./chunk-6HTZNHPT-DsPxpq1N.js";import{b as R,u as xe}from"./chunk-6DAFMWMA-DcFXWLP6.js";import{A as pe}from"./alert-DGTegOAr.js";import{P as k}from"./popover-Cu6DVetU.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./prompt-D1yV89PX.js";import"./x-mark-mini-CknGqCj5.js";import"./index-C-zGjL7k.js";var ye=Object.defineProperty,O=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,$=(t,s,r)=>s in t?ye(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,ge=(t,s)=>{for(var r in s||(s={}))U.call(s,r)&&$(t,r,s[r]);if(O)for(var r of O(s))B.call(s,r)&&$(t,r,s[r]);return t},ve=(t,s)=>{var r={};for(var a in t)U.call(t,a)&&s.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&O)for(var a of O(t))s.indexOf(a)<0&&B.call(t,a)&&(r[a]=t[a]);return r};const H=u.forwardRef((t,s)=>{var r=t,{color:a="currentColor"}=r,m=ve(r,["color"]);return u.createElement("svg",ge({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:s},m),u.createElement("path",{stroke:a,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M13.056 7.5H1.944M9.278 3.722 13.056 7.5l-3.778 3.778"}))});H.displayName="ArrrowRight";var _e=Object.defineProperty,T=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,S=(t,s,r)=>s in t?_e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,je=(t,s)=>{for(var r in s||(s={}))z.call(s,r)&&S(t,r,s[r]);if(T)for(var r of T(s))Q.call(s,r)&&S(t,r,s[r]);return t},be=(t,s)=>{var r={};for(var a in t)z.call(t,a)&&s.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&T)for(var a of T(t))s.indexOf(a)<0&&Q.call(t,a)&&(r[a]=t[a]);return r};const G=u.forwardRef((t,s)=>{var r=t,{color:a="currentColor"}=r,m=be(r,["color"]);return u.createElement("svg",je({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:s},m),u.createElement("path",{stroke:a,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7.5 3.473 5.722 5.722 9.278 7.5 7.5 9.278"}),u.createElement("path",{stroke:a,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7.081 13.03a.9.9 0 0 0 .837 0c1.395-.727 5.803-3.366 5.803-7.655a3.42 3.42 0 0 0-3.4-3.43A3.45 3.45 0 0 0 7.5 3.472a3.45 3.45 0 0 0-2.82-1.529 3.42 3.42 0 0 0-3.401 3.43c0 4.29 4.407 6.929 5.802 7.657"}))});G.displayName="HeartBroken";var Ne=b.object({items:b.array(b.object({quantity:b.number().nullish(),dismissed_quantity:b.number().nullish(),item_id:b.string()})),send_notification:b.boolean().optional()});function Ee({form:t,item:s,index:r,returnId:a,orderId:m}){const{t:o}=V(),[N,I]=u.useState(!1),{mutateAsync:q}=te(a,m),{mutateAsync:C}=se(a,m),{mutateAsync:j}=re(a,m),[E,w]=u.useMemo(()=>{var g,n;const l=(g=s.actions)==null?void 0:g.find(i=>i.action==="RECEIVE_RETURN_ITEM"),d=(n=s.actions)==null?void 0:n.find(i=>i.action==="RECEIVE_DAMAGED_RETURN_ITEM");return[l==null?void 0:l.details.quantity,d==null?void 0:d.details.quantity]},[s]),p=async l=>{var g;const d=(g=s.actions)==null?void 0:g.find(n=>n.action==="RECEIVE_DAMAGED_RETURN_ITEM");if(typeof l=="number"&&l<0){t.setValue(`items.${r}.dismissed_quantity`,w,{shouldTouch:!0,shouldDirty:!0}),y.error(o("orders.returns.receive.toast.errorNegativeValue"));return}if(typeof l=="number"&&l>s.quantity-s.detail.return_received_quantity){t.setValue(`items.${r}.dismissed_quantity`,w,{shouldTouch:!0,shouldDirty:!0}),y.error(o("orders.returns.receive.toast.errorLargeDamagedValue"));return}try{l?d?await C({actionId:d.id,quantity:l}):await q({items:[{id:s.id,quantity:l}]}):d&&await j(d.id)}catch(n){y.error(n.message)}};return e.jsxs(k,{open:N,onOpenChange:I,children:[e.jsx(k.Trigger,{asChild:!0,children:e.jsxs(M,{className:"flex gap-2 px-2",variant:"secondary",type:"button",children:[e.jsx("div",{children:e.jsx(G,{})}),!!w&&e.jsx("span",{children:w})]})}),e.jsx(k.Content,{align:"center",children:e.jsxs("div",{className:"flex flex-col p-2",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle mb-2 font-medium",children:o("orders.returns.receive.writeOffInputLabel")}),e.jsx(x.Field,{control:t.control,name:`items.${r}.dismissed_quantity`,render:({field:{onChange:l,value:d,...g}})=>e.jsx(x.Item,{className:"w-full",children:e.jsx(x.Control,{children:e.jsx(F,{min:0,max:s.quantity,type:"number",value:d,className:"bg-ui-bg-field-component text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",onChange:n=>{const i=n.target.value===""?null:parseFloat(n.target.value);l(i)},...g,onBlur:()=>{g.onBlur(),p(d)}})})})})]})})]})}var we=Ee;function Re({order:t,preview:s,orderReturn:r}){const{t:a}=V(),{handleSuccess:m}=xe(),o=u.useMemo(()=>{const n={};return r.items.forEach(i=>n[i.item_id]=!0),s.items.filter(i=>n[i.id])},[s.items,r]),{mutateAsync:N}=J(r.id,t.id),{mutateAsync:I}=X(r.id,t.id),{mutateAsync:q}=L(r.id,t.id),{mutateAsync:C}=Y(r.id,t.id),{mutateAsync:j}=ee(r.id,t.id),{stock_location:E}=ce(r.location_id,void 0,{enabled:!!r.location_id}),w=u.useMemo(()=>{const n={};return t.items.forEach(i=>n[i.id]=i),n},[t.items]),p=de({defaultValues:{items:o==null?void 0:o.sort((n,i)=>n.id.localeCompare(i.id)).map(n=>({item_id:n.id})),send_notification:!1},resolver:ue(Ne)});u.useEffect(()=>{o==null||o.sort((n,i)=>n.id.localeCompare(i.id)).forEach((n,i)=>{var v,_;const f=(v=n.actions)==null?void 0:v.find(h=>h.action==="RECEIVE_RETURN_ITEM"),c=(_=n.actions)==null?void 0:_.find(h=>h.action==="RECEIVE_DAMAGED_RETURN_ITEM");p.setValue(`items.${i}.quantity`,f==null?void 0:f.details.quantity,{shouldTouch:!0,shouldDirty:!0}),p.setValue(`items.${i}.dismissed_quantity`,c==null?void 0:c.details.quantity,{shouldTouch:!0,shouldDirty:!0})})},[o]);const l=p.handleSubmit(async n=>{try{await N({no_notification:!n.send_notification}),m(`/orders/${t.id}`),y.success(a("general.success"),{description:a("orders.returns.receive.toast.success"),dismissLabel:a("actions.close")})}catch(i){y.error(a("general.error"),{description:i.message,dismissLabel:a("actions.close")})}}),d=async(n,i,f)=>{var _;const c=o==null?void 0:o.find(h=>h.id===n),v=(_=c==null?void 0:c.actions)==null?void 0:_.find(h=>h.action==="RECEIVE_RETURN_ITEM");if(typeof i=="number"&&i<0){p.setValue(`items.${f}.quantity`,c.detail.return_received_quantity,{shouldTouch:!0,shouldDirty:!0}),y.error(a("orders.returns.receive.toast.errorNegativeValue"));return}if(typeof i=="number"&&i>c.quantity){p.setValue(`items.${f}.quantity`,c.detail.return_received_quantity,{shouldTouch:!0,shouldDirty:!0}),y.error(a("orders.returns.receive.toast.errorLargeValue"));return}try{if(v){if(i===null||i===0){await j(v.id);return}await C({actionId:v.id,quantity:i})}else typeof i=="number"&&i>0&&i<=c.quantity&&await q({items:[{id:c.id,quantity:i}]})}catch(h){y.error(h.message)}},g=async n=>{try{n||await I()}catch(i){y.error(i.message)}};return e.jsx(R.Form,{form:p,onClose:g,children:e.jsxs(he,{onSubmit:l,className:"flex size-full flex-col overflow-hidden",children:[e.jsxs(R.Body,{className:"flex size-full flex-col overflow-auto",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{children:E&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(H,{className:"text-ui-fg-subtle"})," ",e.jsx("span",{className:"text-ui-fg-base txt-small font-medium",children:E.name})]})}),e.jsx("span",{className:"text-ui-fg-muted txt-small text-right",children:a("orders.returns.receive.itemsLabel")})]}),o.map((n,i)=>{const f=w[n.id];return e.jsx("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest mt-2 rounded-xl",children:e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsxs(D,{size:"small",className:"text-ui-fg-subtle",children:[n.quantity,"x"]}),e.jsx(me,{src:n.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(D,{className:"txt-small",as:"span",weight:"plus",children:[n.title," "]}),f.variant_sku&&e.jsxs("span",{children:["(",f.variant_sku,")"]})]}),e.jsx(D,{as:"div",className:"text-ui-fg-subtle txt-small",children:f.product_title})]})]}),e.jsxs("div",{className:"flex flex-1 flex-row items-center gap-2",children:[e.jsx(we,{form:p,item:n,index:i,returnId:r.id,orderId:t.id}),e.jsx(x.Field,{control:p.control,name:`items.${i}.quantity`,render:({field:{onChange:c,value:v,..._}})=>e.jsx(x.Item,{className:"w-full",children:e.jsx(x.Control,{children:e.jsx(F,{min:0,max:n.quantity,type:"number",value:v,className:"bg-ui-bg-field-component text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",onChange:h=>{const W=h.target.value===""?null:parseFloat(h.target.value);c(W)},..._,onBlur:()=>{_.onBlur(),d(n.id,v,i)}})})})})]})]})},n.id)}),e.jsxs("div",{className:"my-6 border-b border-t border-dashed py-4",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:a("fields.total")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:P(s.total,t.currency_code)})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-dotted pt-4",children:[e.jsx("span",{className:"txt-small font-medium",children:a("orders.returns.outstandingAmount")}),e.jsx("span",{className:"txt-small font-medium",children:P(s.summary.pending_difference||0,t.currency_code)})]})]}),e.jsx(pe,{className:"rounded-xl",variant:"warning",children:a("orders.returns.receive.inventoryWarning")}),e.jsx("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl p-3",children:e.jsx(x.Field,{control:p.control,name:"send_notification",render:({field:{onChange:n,value:i,...f}})=>e.jsxs(x.Item,{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(x.Control,{children:e.jsx(fe,{className:"mt-1 self-start",checked:!!i,onCheckedChange:n,...f})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(x.Label,{children:a("orders.returns.sendNotification")}),e.jsx(x.Hint,{className:"!mt-1",children:a("orders.returns.receive.sendNotificationHint")})]})]}),e.jsx(x.ErrorMessage,{})]})})})]}),e.jsx(R.Footer,{className:"overflow-hidden",children:e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(R.Close,{asChild:!0,children:e.jsx(M,{size:"small",variant:"secondary",children:a("actions.cancel")})}),e.jsx(M,{size:"small",type:"submit",isLoading:!1,children:a("actions.save")})]})})]})})}var A=!1;function $e(){const{id:t,return_id:s}=ae(),{t:r}=V(),a=ne(),{order:m}=ie(t,{fields:"+currency_code,*items"}),{order:o}=oe(t),{return:N}=K(s,{fields:"*items.item,*items.item.variant,*items.item.variant.product"}),{mutateAsync:I}=Z(s,t),{mutateAsync:q}=L(s,t);u.useEffect(()=>{(async function(){if(!(A||!o)){if(o.order_change){o.order_change.change_type!=="return_receive"&&(a(`/orders/${t}`,{replace:!0}),y.error(r("orders.returns.activeChangeError")));return}A=!0;try{const{return:j}=await I({});await q({items:j.items.map(E=>({id:E.item_id,quantity:E.quantity}))})}catch(j){y.error(j.message)}finally{A=!1}}})()},[o]);const C=m&&N&&o;return e.jsxs(R,{children:[e.jsx(R.Header,{children:e.jsx(le,{children:r("orders.returns.receive.title",{returnId:s==null?void 0:s.slice(-7)})})}),C&&e.jsx(Re,{order:m,orderReturn:N,preview:o})]})}export{$e as Component};
