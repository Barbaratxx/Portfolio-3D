import{r as i,j as t}from"./index-DDpWlG8D.js";import{m as u}from"./proxy-DXJhZN-y.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),j=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,s)=>s?s.toUpperCase():a.toLowerCase()),l=r=>{const e=j(r);return e.charAt(0).toUpperCase()+e.slice(1)},m=(...r)=>r.filter((e,a,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===a).join(" ").trim(),C=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=i.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:c="",children:o,iconNode:d,...n},x)=>i.createElement("svg",{ref:x,...w,width:e,height:e,stroke:r,strokeWidth:s?Number(a)*24/Number(e):a,className:m("lucide",c),...!o&&!C(n)&&{"aria-hidden":"true"},...n},[...d.map(([h,p])=>i.createElement(h,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(r,e)=>{const a=i.forwardRef(({className:s,...c},o)=>i.createElement(b,{ref:o,iconNode:e,className:m(`lucide-${f(l(r))}`,`lucide-${r}`,s),...c}));return a.displayName=l(r),a};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],y=g("mail",v),A=()=>t.jsxs("div",{className:"contact",children:[t.jsx("div",{className:"cSection",children:t.jsxs("form",{children:[t.jsx("h1",{className:"cTitle",children:"Contact Me"}),t.jsxs("div",{className:"formItem",children:[t.jsx("label",{children:"Name"}),t.jsx("input",{type:"text",placeholder:"Bárbara Teixeira"})]}),t.jsxs("div",{className:"formItem",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",placeholder:"barbaratxx@gmail.com"})]}),t.jsxs("div",{className:"formItem",children:[t.jsx("label",{children:"Message"}),t.jsx("textarea",{row:10,placeholder:"Write your message..."})]}),t.jsx("button",{className:"formButton",children:"Send"})]})}),t.jsx("div",{className:"cSection",children:t.jsx(u.div,{animate:{scale:[2,2.1,2],rotate:[0,5,-5,0],color:["#f00","#0f0","#00f","#f00"]},transition:{duration:2,repeat:1/0,repeatType:"reverse"},children:t.jsx(y,{size:100})})})]});export{A as default};
