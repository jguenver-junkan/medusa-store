import{r as n,bl as T,aD as s,V as k,m as N,aM as M,c2 as j}from"./index-oLtKV1Ux.js";import{a as I}from"./chunk-2RQLKDBF-V0vRnTD9.js";var $=Object.defineProperty,d=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,b=(t,e,a)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,A=(t,e)=>{for(var a in e||(e={}))E.call(e,a)&&b(t,a,e[a]);if(d)for(var a of d(e))_.call(e,a)&&b(t,a,e[a]);return t},U=(t,e)=>{var a={};for(var r in t)E.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&d)for(var r of d(t))e.indexOf(r)<0&&_.call(t,r)&&(a[r]=t[r]);return a};const S=n.forwardRef((t,e)=>{var a=t,{color:r="currentColor"}=a,c=U(a,["color"]);return n.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:e},c),n.createElement("g",{clipPath:"url(#a)"},n.createElement("path",{fill:r,d:"M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m3.416 5.074-3.778 4.889a.67.67 0 0 1-.502.258h-.025a.67.67 0 0 1-.496-.22l-2-2.222a.668.668 0 0 1 .992-.893l1.465 1.629 3.29-4.257a.667.667 0 0 1 1.055.815z"})),n.createElement("defs",null,n.createElement("clipPath",{id:"a"},n.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});S.displayName="CheckCircleMiniSolid";var V=Object.defineProperty,m=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,C=(t,e,a)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,z=(t,e)=>{for(var a in e||(e={}))x.call(e,a)&&C(t,a,e[a]);if(m)for(var a of m(e))D.call(e,a)&&C(t,a,e[a]);return t},H=(t,e)=>{var a={};for(var r in t)x.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&m)for(var r of m(t))e.indexOf(r)<0&&D.call(t,r)&&(a[r]=t[r]);return a};const O=n.forwardRef((t,e)=>{var a=t,{color:r="currentColor"}=a,c=H(a,["color"]);return n.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:e},c),n.createElement("g",{stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,clipPath:"url(#a)"},n.createElement("path",{d:"M12.167 4.166H5.944c-.981 0-1.777.796-1.777 1.778v6.222c0 .982.796 1.778 1.777 1.778h6.223c.982 0 1.777-.796 1.777-1.778V5.944c0-.982-.796-1.778-1.777-1.778"}),n.createElement("path",{d:"M1.99 10.165 1.075 4.01a1.78 1.78 0 0 1 1.497-2.02l6.155-.914a1.78 1.78 0 0 1 1.909 1.091"})),n.createElement("defs",null,n.createElement("clipPath",{id:"a"},n.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});O.displayName="SquareTwoStackMini";var q=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,a=[],r=0;r<t.rangeCount;r++)a.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||a.forEach(function(c){t.addRange(c)}),e&&e.focus()}},L=q,h={"text/plain":"Text","text/html":"Url",default:"Text"},F="Copy to clipboard: #{key}, Enter";function K(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function W(t,e){var a,r,c,f,i,o,p=!1;e||(e={}),a=e.debug||!1;try{c=L(),f=document.createRange(),i=document.getSelection(),o=document.createElement("span"),o.textContent=t,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(l){if(l.stopPropagation(),e.format)if(l.preventDefault(),typeof l.clipboardData>"u"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var u=h[e.format]||h.default;window.clipboardData.setData(u,t)}else l.clipboardData.clearData(),l.clipboardData.setData(e.format,t);e.onCopy&&(l.preventDefault(),e.onCopy(l.clipboardData))}),document.body.appendChild(o),f.selectNodeContents(o),i.addRange(f);var g=document.execCommand("copy");if(!g)throw new Error("copy command was unsuccessful");p=!0}catch(l){a&&console.error("unable to copy using execCommand: ",l),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),p=!0}catch(u){a&&console.error("unable to copy using clipboardData: ",u),a&&console.error("falling back to prompt"),r=K("message"in e?e.message:F),window.prompt(r,t)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(f):i.removeAllRanges()),o&&document.body.removeChild(o),c()}return p}var X=W;const B=T(X),G=s.forwardRef(({children:t,className:e,content:a,variant:r="default",asChild:c=!1,...f},i)=>{const[o,p]=n.useState(!1),[g,l]=n.useState(!1),[u,v]=n.useState("Copy"),P=y=>{y.stopPropagation(),p(!0),B(a),setTimeout(()=>{p(!1)},2e3)};s.useEffect(()=>{if(o){v("Copied");return}setTimeout(()=>{v("Copy")},500)},[o]);const w=(y=>y==="default")(r),R=c?j:"button";return s.createElement(k,{content:u,open:o||g,onOpenChange:l},s.createElement(R,{ref:i,"aria-label":"Copy code snippet",type:"button",className:N("h-fit w-fit",e),onClick:P,...f},t||(o?w?s.createElement(M,{className:"text-ui-fg-subtle"}):s.createElement(S,{className:"text-ui-fg-subtle"}):w?s.createElement(I,{className:"text-ui-fg-subtle"}):s.createElement(O,{className:"text-ui-fg-subtle"}))))});G.displayName="Copy";export{G as C};
