import{a5 as o,R as g,aK as y,j as e,b as _,dd as v,a8 as N,a9 as C,y as k,t as p,B as j,H as S,w as n,x as w,ab as F}from"./index-oLtKV1Ux.js";import{K as E}from"./chunk-6HTZNHPT-DsPxpq1N.js";import{R as d,u as H}from"./chunk-6DAFMWMA-DcFXWLP6.js";import"./prompt-D1yV89PX.js";var M=o.object({labels:o.array(o.object({tracking_number:o.string(),tracking_url:o.string().optional(),label_url:o.string().optional()})),send_notification:o.boolean().optional()});function R({order:c,fulfillment:i}){const{t:s}=_(),{handleSuccess:x}=H(),{mutateAsync:u,isPending:h}=v(c.id,i==null?void 0:i.id),a=N({defaultValues:{send_notification:!c.no_notification},resolver:C(M)}),{fields:m,append:f}=k({name:"labels",control:a.control}),b=a.handleSubmit(async l=>{var t;await u({items:(t=i==null?void 0:i.items)==null?void 0:t.map(r=>({id:r.line_item_id,quantity:r.quantity})),labels:l.labels.filter(r=>!!r.tracking_number).map(r=>({tracking_number:r.tracking_number,tracking_url:"#",label_url:"#"})),no_notification:!l.send_notification},{onSuccess:()=>{p.success(s("orders.shipment.toastCreated")),x(`/orders/${c.id}`)},onError:r=>{p.error(r.message)}})});return e.jsx(d.Form,{form:a,children:e.jsxs(E,{onSubmit:b,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(d.Header,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(d.Close,{asChild:!0,children:e.jsx(j,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(j,{size:"small",type:"submit",isLoading:h,children:s("actions.save")})]})}),e.jsx(d.Body,{className:"flex h-full w-full flex-col items-center divide-y overflow-y-auto",children:e.jsx("div",{className:"flex size-full flex-col items-center overflow-auto p-16",children:e.jsx("div",{className:"flex w-full max-w-[736px] flex-col justify-center px-2 pb-2",children:e.jsxs("div",{className:"flex flex-col divide-y",children:[e.jsxs("div",{className:"flex flex-1 flex-col",children:[e.jsx(S,{className:"mb-4",children:s("orders.shipment.title")}),m.map((l,t)=>e.jsx(n.Field,{control:a.control,name:`labels.${t}.tracking_number`,render:({field:r})=>e.jsxs(n.Item,{className:"mb-4",children:[t===0&&e.jsx(n.Label,{children:s("orders.shipment.trackingNumber")}),e.jsx(n.Control,{children:e.jsx(w,{...r,placeholder:"123-456-789"})}),e.jsx(n.ErrorMessage,{})]})},l.id)),e.jsx(j,{type:"button",onClick:()=>f({tracking_number:""}),className:"self-end",variant:"secondary",children:s("orders.shipment.addTracking")})]}),e.jsx("div",{className:"mt-8 pt-8 ",children:e.jsx(n.Field,{control:a.control,name:"send_notification",render:({field:{onChange:l,value:t,...r}})=>e.jsxs(n.Item,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(n.Label,{children:s("orders.shipment.sendNotification")}),e.jsx(n.Control,{children:e.jsx(n.Control,{children:e.jsx(F,{checked:!!t,onCheckedChange:l,...r})})})]}),e.jsx(n.Hint,{className:"!mt-1",children:s("orders.shipment.sendNotificationHint")}),e.jsx(n.ErrorMessage,{})]})})})]})})})})]})})}function I(){var m;const{id:c,f_id:i}=g(),{order:s,isLoading:x,isError:u,error:h}=y(c,{fields:"*fulfillments,*fulfillments.items"});if(u)throw h;const a=!x&&s;return e.jsx(d,{children:a&&e.jsx(R,{order:s,fulfillment:(m=s.fulfillments)==null?void 0:m.find(f=>f.id===i)})})}export{I as Component};
