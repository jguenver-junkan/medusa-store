import{ct as m,s as l,d8 as i,b as x,r as d,j as t}from"./index-oLtKV1Ux.js";import{T as o,a as c}from"./chunk-MSDRGCRR-CJJ34J4_.js";import{u as f}from"./chunk-C76H5USB-VLX403Ju.js";import{c as p}from"./index-CgI6BRDf.js";var y="currencies",C=i(y),b=(e,r)=>{const{data:s,...a}=m({queryFn:()=>l.admin.currency.list(e),queryKey:C.list(e),...r});return{...s,...a}},u=p(),h=()=>{const{t:e}=x();return d.useMemo(()=>[u.accessor("code",{header:()=>t.jsx(o,{text:e("fields.code")}),cell:({getValue:r})=>t.jsx(c,{text:r().toUpperCase()})}),u.accessor("name",{header:()=>t.jsx(o,{text:e("fields.name")}),cell:({getValue:r})=>t.jsx(c,{text:r()})})],[e])},K=({pageSize:e=10,prefix:r})=>{const s=f(["order","q","offset"],r),{offset:a,...n}=s;return{searchParams:{limit:e,offset:a?parseInt(a):0,...n},raw:s}};export{b as a,h as b,K as u};
