import{i as l}from"./chunk-G2J2T2QU-cBH-re3m.js";import{a5 as r,g as v,i as b,l as j,b as y,r as _,j as t,aZ as S}from"./index-oLtKV1Ux.js";import{D as P,c as C,a as L}from"./chunk-ZF4OL2GU-DR2dd5g5.js";var z=()=>{const{store:c,isPending:o,isError:a,error:n}=v({fields:"+supported_currencies"}),d=c==null?void 0:c.supported_currencies,{regions:e,isPending:i,isError:s,error:u}=b({fields:"id,name,currency_code",limit:999}),{price_preferences:m,isPending:g,isError:f,error:h}=j({}),p=!!d&&!!e&&!!m&&!o&&!i&&!g;if(s)throw u;if(a)throw n;if(f)throw h;return p?{regions:e,currencies:d,pricePreferences:m,isReady:p}:{regions:void 0,currencies:void 0,pricePreferences:void 0,isReady:!1}},R=L(),F=({currencies:c=[],regions:o=[],pricePreferences:a=[]})=>{const{t:n}=y();return _.useMemo(()=>[R.column({id:n("fields.title"),header:n("fields.title"),cell:e=>{const i=e.row.original;return l(i)?t.jsx(P.ReadonlyCell,{context:e,children:t.jsxs("div",{className:"flex h-full w-full items-center gap-x-2 overflow-hidden",children:[t.jsx(S,{src:i.thumbnail}),t.jsx("span",{className:"truncate",children:i.title})]})}):t.jsx(P.ReadonlyCell,{context:e,children:t.jsx("div",{className:"flex h-full w-full items-center gap-x-2 overflow-hidden",children:t.jsx("span",{className:"truncate",children:i.title})})})},disableHiding:!0}),...C({currencies:c.map(e=>e.currency_code),regions:o,pricePreferences:a,isReadyOnly:e=>{const i=e.row.original;return l(i)},getFieldName:(e,i)=>{var u;const s=e.row.original;return l(s)?null:(u=e.column.id)!=null&&u.startsWith("currency_prices")?`products.${s.product_id}.variants.${s.id}.currency_prices.${i}.amount`:`products.${s.product_id}.variants.${s.id}.region_prices.${i}.amount`},t:n})],[n,c,o,a])},x=r.object({id:r.string(),name:r.string()}),M=r.object({customer_group_id:r.array(x).nullish()}),w=r.object({amount:r.string().or(r.number()).optional()}),E=r.object({amount:r.string().or(r.number()).optional()}),D=r.object({currency_prices:r.record(w.optional()),region_prices:r.record(E.optional())}),$=r.record(D),O=r.record(r.object({variants:$})),G=r.object({amount:r.string().or(r.number()).optional(),id:r.string().nullish()}),N=r.object({amount:r.string().or(r.number()).optional(),id:r.string().nullish()}),U=r.record(r.object({currency_prices:r.record(G.optional()),region_prices:r.record(N.optional())})),W=r.record(r.object({variants:U}));export{O as P,M as a,F as b,W as c,z as u};
