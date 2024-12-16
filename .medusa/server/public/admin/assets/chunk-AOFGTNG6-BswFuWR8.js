import{r as l,m as f,B as x,a6 as I,b as H,j as o,bL as i,I as V}from"./index-oLtKV1Ux.js";var W=Object.defineProperty,g=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,w=(t,e,r)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,G=(t,e)=>{for(var r in e||(e={}))j.call(e,r)&&w(t,r,e[r]);if(g)for(var r of g(e))E.call(e,r)&&w(t,r,e[r]);return t},K=(t,e)=>{var r={};for(var a in t)j.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&g)for(var a of g(t))e.indexOf(a)<0&&E.call(t,a)&&(r[a]=t[a]);return r};const N=l.forwardRef((t,e)=>{var r=t,{color:a="currentColor"}=r,s=K(r,["color"]);return l.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:e},s),l.createElement("path",{stroke:a,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"m8.611 10.833 2.222 2.223 2.223-2.223M10.833 13.056v-8M1.944 8.167h5.778M1.944 5.056h5.778M1.944 1.944h8.89"}))});N.displayName="DescendingSorting";var q=Object.defineProperty,v=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,_=(t,e,r)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,z=(t,e)=>{for(var r in e||(e={}))O.call(e,r)&&_(t,r,e[r]);if(v)for(var r of v(e))P.call(e,r)&&_(t,r,e[r]);return t},A=(t,e)=>{var r={};for(var a in t)O.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&v)for(var a of v(t))e.indexOf(a)<0&&P.call(t,a)&&(r[a]=t[a]);return r};const R=l.forwardRef((t,e)=>{var r=t,{color:a="currentColor"}=r,s=A(r,["color"]);return l.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:e},s),l.createElement("path",{stroke:a,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M2.5 7.5h10"}))});R.displayName="Minus";const k=l.forwardRef(({className:t,...e},r)=>l.createElement("table",{ref:r,className:f("text-ui-fg-subtle txt-compact-small w-full",t),...e}));k.displayName="Table";const C=l.forwardRef(({className:t,...e},r)=>l.createElement("tr",{ref:r,className:f("bg-ui-bg-base hover:bg-ui-bg-base-hover border-ui-border-base transition-fg border-b","[&_td:last-child]:pr-6 [&_th:last-child]:pr-6","[&_td:first-child]:pl-6 [&_th:first-child]:pl-6",t),...e}));C.displayName="Table.Row";const S=l.forwardRef(({className:t,...e},r)=>l.createElement("td",{ref:r,className:f("h-12 pr-6",t),...e}));S.displayName="Table.Cell";const $=l.forwardRef(({className:t,...e},r)=>l.createElement("thead",{ref:r,className:f("border-ui-border-base txt-compact-small-plus [&_tr:hover]:bg-ui-bg-base border-y",t),...e}));$.displayName="Table.Header";const T=l.forwardRef(({className:t,...e},r)=>l.createElement("th",{ref:r,className:f("txt-compact-small-plus h-12 pr-6 text-left",t),...e}));T.displayName="Table.HeaderCell";const M=l.forwardRef(({className:t,...e},r)=>l.createElement("tbody",{ref:r,className:f("border-ui-border-base border-b",t),...e}));M.displayName="Table.Body";const D=l.forwardRef(({className:t,count:e,pageSize:r,pageCount:a,pageIndex:s,canPreviousPage:p,canNextPage:u,nextPage:b,previousPage:y,translations:m={of:"of",results:"results",pages:"pages",prev:"Prev",next:"Next"},...h},n)=>{const{from:c,to:d}=l.useMemo(()=>{const L=e===0?e:s*r+1,B=Math.min(e,(s+1)*r);return{from:L,to:B}},[e,s,r]);return l.createElement("div",{ref:n,className:f("text-ui-fg-subtle txt-compact-small-plus flex w-full items-center justify-between px-3 py-4",t),...h},l.createElement("div",{className:"inline-flex items-center gap-x-1 px-3 py-[5px]"},l.createElement("p",null,c),l.createElement(R,{className:"text-ui-fg-muted"}),l.createElement("p",null,`${d} ${m.of} ${e} ${m.results}`)),l.createElement("div",{className:"flex items-center gap-x-2"},l.createElement("div",{className:"inline-flex items-center gap-x-1 px-3 py-[5px]"},l.createElement("p",null,s+1," ",m.of," ",Math.max(a,1)," ",m.pages)),l.createElement(x,{type:"button",variant:"transparent",onClick:y,disabled:!p},m.prev),l.createElement(x,{type:"button",variant:"transparent",onClick:b,disabled:!u},m.next)))});D.displayName="Table.Pagination";const Q=Object.assign(k,{Row:C,Cell:S,Header:$,HeaderCell:T,Body:M,Pagination:D});var F=(t,e)=>{const r=e?`${e}_order`:"order",a=t.get(r);if(!a)return{dir:"asc"};const s=a.startsWith("-")?"desc":"asc";return{key:a.replace("-",""),dir:s}},U=({keys:t,prefix:e})=>{const[r,a]=I(),[s,p]=l.useState(F(r,e)),u=e?`${e}_order`:"order",{t:b}=H(),y=n=>{p(c=>({...c,dir:n})),h({key:s.key,dir:n})},m=n=>{p(c=>({...c,key:n})),h({key:n,dir:s.dir})},h=n=>{if(!n.key){a(d=>(d.delete(u),d));return}const c=n.dir==="asc"?n.key:`-${n.key}`;a(d=>(d.set(u,c),d))};return o.jsxs(i,{children:[o.jsx(i.Trigger,{asChild:!0,children:o.jsx(V,{size:"small",children:o.jsx(N,{})})}),o.jsxs(i.Content,{className:"z-[1]",align:"end",children:[o.jsx(i.RadioGroup,{value:s.key,onValueChange:m,children:t.map(n=>{const c=String(n.key);return o.jsx(i.RadioItem,{value:c,onSelect:d=>d.preventDefault(),children:n.label},c)})}),o.jsx(i.Separator,{}),o.jsxs(i.RadioGroup,{value:s.dir,onValueChange:y,children:[o.jsxs(i.RadioItem,{className:"flex items-center justify-between",value:"asc",onSelect:n=>n.preventDefault(),children:[b("general.ascending"),o.jsx(i.Label,{children:"1 - 30"})]}),o.jsxs(i.RadioItem,{className:"flex items-center justify-between",value:"desc",onSelect:n=>n.preventDefault(),children:[b("general.descending"),o.jsx(i.Label,{children:"30 - 1"})]})]})]})]})};export{U as D,Q as T};
