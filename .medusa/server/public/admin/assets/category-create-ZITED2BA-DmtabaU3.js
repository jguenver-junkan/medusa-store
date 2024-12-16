import{i as B}from"./chunk-54IEHX46-DWMq7yL7.js";import{C as A}from"./chunk-ZCYHMOTT-CbmvIiaL.js";import{H as K}from"./chunk-7OYLCEKK-CTDl0eyM.js";import{a5 as c,a6 as $,j as e,b as M,r as j,a8 as W,a9 as Y,ay as q,t as H,B as V,H as G,T as J,w as s,x as O,ag as Q,v as P,Y as U}from"./index-oLtKV1Ux.js";import{t as X}from"./chunk-3ISBJK7K-BDgyZg6W.js";import{K as Z}from"./chunk-6HTZNHPT-DsPxpq1N.js";import{R as g,u as ee}from"./chunk-6DAFMWMA-DcFXWLP6.js";import{P as m}from"./progress-tabs-DhL0_rOD.js";import{T as se}from"./textarea-Dely2w2-.js";import{S as n}from"./select-B34QaV4n.js";import"./sortable.esm-BZmGrs_n.js";import"./dots-six-BkjlAoUX.js";import"./folder-illustration-Bxk3eROW.js";import"./chunk-6GU6IDUA-CDc7wW5L.js";import"./prompt-D1yV89PX.js";import"./triangles-mini-DH8IYMeu.js";import"./check-B8tGs9E9.js";var ae=({form:r})=>{const{t:a}=M();return e.jsx("div",{className:"flex flex-col items-center p-16",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsxs("div",{children:[e.jsx(G,{children:a("categories.create.header")}),e.jsx(J,{size:"small",className:"text-ui-fg-subtle",children:a("categories.create.hint")})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(s.Field,{control:r.control,name:"name",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("fields.title")}),e.jsx(s.Control,{children:e.jsx(O,{autoComplete:"off",...t})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:r.control,name:"handle",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,tooltip:a("collections.handleTooltip"),children:a("fields.handle")}),e.jsx(s.Control,{children:e.jsx(K,{...t})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(s.Field,{control:r.control,name:"description",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:a("fields.description")}),e.jsx(s.Control,{children:e.jsx(se,{...t})}),e.jsx(s.ErrorMessage,{})]})}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(s.Field,{control:r.control,name:"status",render:({field:{ref:t,onChange:o,...d}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("categories.fields.status.label")}),e.jsx(s.Control,{children:e.jsxs(n,{...d,onValueChange:o,children:[e.jsx(n.Trigger,{ref:t,children:e.jsx(n.Value,{})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{value:"active",children:a("categories.fields.status.active")}),e.jsx(n.Item,{value:"inactive",children:a("categories.fields.status.inactive")})]})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:r.control,name:"visibility",render:({field:{ref:t,onChange:o,...d}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("categories.fields.visibility.label")}),e.jsx(s.Control,{children:e.jsxs(n,{...d,onValueChange:o,children:[e.jsx(n.Trigger,{ref:t,children:e.jsx(n.Value,{})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{value:"public",children:a("categories.fields.visibility.public")}),e.jsx(n.Item,{value:"internal",children:a("categories.fields.visibility.internal")})]})]})}),e.jsx(s.ErrorMessage,{})]})})]})]})})},L="new-item",re=({form:r,shouldFreeze:a})=>{const{t}=M(),[o,d]=j.useState([]),{product_categories:x,isPending:w,isError:N,error:p}=Q({parent_category_id:"null",limit:9999,fields:"id,name,parent_category_id,rank,category_children,rank",include_descendants_tree:!0}),i=P({control:r.control,name:"parent_category_id"}),h=P({control:r.control,name:"rank"}),f=P({control:r.control,name:"name"}),S=j.useMemo(()=>B(x??[],{id:L,name:f,parent_category_id:i,rank:h,category_children:null}),[x,f,i,h]),T=({parentId:l,index:v},b)=>{r.setValue("parent_category_id",l,{shouldDirty:!0,shouldTouch:!0}),r.setValue("rank",v,{shouldDirty:!0,shouldTouch:!0}),d(b)};if(N)throw p;const z=!w&&!!x;return e.jsx(A,{value:a?o:S,enableDrag:l=>l.id===L,onChange:T,renderValue:l=>l.id===L?e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx("span",{children:l.name}),e.jsx(U,{size:"2xsmall",color:"blue",children:t("categories.fields.new.label")})]}):l.name,isLoading:!z})},R=c.object({name:c.string().min(1),description:c.string().optional(),handle:c.string().optional(),status:c.enum(["active","inactive"]),visibility:c.enum(["public","internal"])}),te=c.object({rank:c.number().nullable(),parent_category_id:c.string().nullable()}).merge(R),ie=({parentCategoryId:r})=>{var v,b;const{t:a}=M(),{handleSuccess:t}=ee(),[o,d]=j.useState("details"),[x,w]=j.useState(!1),[N,p]=j.useState(!1),i=W({defaultValues:{name:"",description:"",handle:"",status:"active",visibility:"public",rank:r?0:null,parent_category_id:r},resolver:Y(te)}),h=u=>{if(u==="organize"){const{name:F,handle:I,description:k,status:D,visibility:E}=i.getValues(),y=R.safeParse({name:F,handle:I,description:k,status:D,visibility:E});if(!y.success){y.error.errors.forEach(C=>{i.setError(C.path.join("."),{type:"manual",message:C.message})});return}i.clearErrors(),w(!0)}d(u)},{mutateAsync:f,isPending:S}=q(),T=i.handleSubmit(u=>{const{visibility:F,status:I,parent_category_id:k,rank:D,name:E,...y}=u,C=X(y,!1);p(!0),f({name:E,...C,parent_category_id:k??void 0,rank:D??void 0,is_active:I==="active",is_internal:F==="internal"},{onSuccess:({product_category:_})=>{H.success(a("categories.create.successToast",{name:_.name})),t(`/categories/${_.id}`)},onError:_=>{H.error(_.message),p(!1)}})}),z=(v=i.getFieldState("parent_category_id"))!=null&&v.isDirty||(b=i.getFieldState("rank"))!=null&&b.isDirty||o==="organize"?"in-progress":"not-started",l=x?"completed":"in-progress";return e.jsx(g.Form,{form:i,children:e.jsx(Z,{onSubmit:T,className:"flex size-full flex-col overflow-hidden",children:e.jsxs(m,{value:o,onValueChange:u=>h(u),className:"flex size-full flex-col",children:[e.jsx(g.Header,{children:e.jsx("div",{className:"flex w-full items-center justify-between",children:e.jsx("div",{className:"-my-2 w-full max-w-[400px] border-l",children:e.jsxs(m.List,{className:"grid w-full grid-cols-2",children:[e.jsx(m.Trigger,{value:"details",status:l,className:"w-full min-w-0 overflow-hidden",children:e.jsx("span",{className:"truncate",children:a("categories.create.tabs.details")})}),e.jsx(m.Trigger,{value:"organize",status:z,className:"w-full min-w-0 overflow-hidden",children:e.jsx("span",{className:"truncate",children:a("categories.create.tabs.organize")})})]})})})}),e.jsxs(g.Body,{className:"flex size-full flex-col overflow-auto",children:[e.jsx(m.Content,{value:"details",children:e.jsx(ae,{form:i})}),e.jsx(m.Content,{value:"organize",className:"bg-ui-bg-subtle flex-1",children:e.jsx(re,{form:i,shouldFreeze:N})})]}),e.jsx(g.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(g.Close,{asChild:!0,children:e.jsx(V,{size:"small",variant:"secondary",children:a("actions.cancel")})}),o==="organize"?e.jsx(V,{size:"small",variant:"primary",type:"submit",isLoading:S,children:a("actions.save")},"submit-btn"):e.jsx(V,{size:"small",variant:"primary",type:"button",onClick:()=>h("organize"),children:a("actions.continue")},"continue-btn")]})})]})})})},_e=()=>{const[r]=$(),a=r.get("parent_category_id");return e.jsx(g,{children:e.jsx(ie,{parentCategoryId:a})})};export{_e as Component};