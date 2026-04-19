import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{M as k}from"./MessageStatusDot-iESl-atJ.js";import{K as E}from"./KpiIndicator-c9bDg6aa.js";import{C as w}from"./circle-user-DpLagki5.js";import{c as T}from"./createLucideIcon-CtqQySJq.js";import{X as C}from"./x-C_NNgUki.js";import"./index-BNURykns.js";import"./database-Dl4PIW4M.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=T("CalendarCheck",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]),L={none:"none",received:"fail",read:"success"};function F({icon:o,children:a}){return e.jsxs("div",{className:"inline-flex gap-[4px] items-center shrink-0",children:[e.jsx("div",{className:"shrink-0 size-[20px] flex items-center justify-center",children:o}),e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:a})]})}function f({contactName:o,engagementScore:a,lastMessageStatuses:S,lastMessageAge:y,onClose:N,className:j=""}){return e.jsxs("div",{className:`bg-surface-neutral-default h-[100px] flex items-center justify-between px-[20px] py-[27px] ${j}`.trim(),children:[e.jsxs("div",{className:"flex gap-[24px] items-center px-[10px]",children:[e.jsx("h4",{className:"whitespace-nowrap font-bold text-[28px] leading-[34px] tracking-[0.28px] text-content-headings px-[10px] py-[10px]",children:"Messages"}),e.jsx(F,{icon:e.jsx(w,{size:20,className:"text-icon-neutral-default"}),children:o}),e.jsx(E,{kpi:"eng",value:`${a}%`,percentage:a,variant:"straight"}),e.jsx("div",{className:"flex gap-[8px] items-center py-px shrink-0",children:S.map((A,b)=>e.jsx(k,{status:L[A]},b))}),e.jsxs("div",{className:"flex gap-[8px] items-center shrink-0",children:[e.jsx(B,{size:20,className:"text-icon-neutral-default"}),e.jsx("span",{className:"text-base font-normal font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:y})]})]}),e.jsx("button",{type:"button",onClick:N,"aria-label":"Fermer",className:"p-[12px] rounded-2xl transition-colors hover:opacity-70 text-content-body",children:e.jsx(C,{size:20})})]})}f.__docgenInfo={description:"",methods:[],displayName:"AppBarMessagerie",props:{contactName:{required:!0,tsType:{name:"string"},description:"Nom du contact"},engagementScore:{required:!0,tsType:{name:"number"},description:"Score d'engagement (0-100)"},lastMessageStatuses:{required:!0,tsType:{name:"tuple",raw:"[AppBarMessageStatus, AppBarMessageStatus, AppBarMessageStatus, AppBarMessageStatus, AppBarMessageStatus]",elements:[{name:"union",raw:'"none" | "received" | "read"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"received"'},{name:"literal",value:'"read"'}]},{name:"union",raw:'"none" | "received" | "read"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"received"'},{name:"literal",value:'"read"'}]},{name:"union",raw:'"none" | "received" | "read"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"received"'},{name:"literal",value:'"read"'}]},{name:"union",raw:'"none" | "received" | "read"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"received"'},{name:"literal",value:'"read"'}]},{name:"union",raw:'"none" | "received" | "read"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"received"'},{name:"literal",value:'"read"'}]}]},description:"Statuts des 5 derniers messages"},lastMessageAge:{required:!0,tsType:{name:"string"},description:'Durée depuis le dernier message (ex: "280 j", "3 h", "12 min")'},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fermer"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles",defaultValue:{value:'""',computed:!1}}}};const J={title:"Design System/Organisms/AppBarMessagerie",component:f,parameters:{layout:"padded",docs:{description:{component:"Barre d'en-tête messagerie — titre + contact + engagement score + 5 statuts messages (none/reçu/lu) + date dernier message + fermer."}}}},n={args:{contactName:"CAPELLO, Jean-François",engagementScore:82,lastMessageStatuses:["none","none","received","read","read"],lastMessageAge:"280 j"}},s={args:{contactName:"MARTIN, Pierre",engagementScore:45,lastMessageStatuses:["none","none","none","received","read"],lastMessageAge:"3 j"}},t={args:{contactName:"DUPONT, Jean",engagementScore:15,lastMessageStatuses:["none","none","none","none","received"],lastMessageAge:"45 j"}},r={args:{contactName:"LEFEVRE, Marie",engagementScore:97,lastMessageStatuses:["read","read","read","read","read"],lastMessageAge:"2 h"}};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    contactName: "CAPELLO, Jean-François",
    engagementScore: 82,
    lastMessageStatuses: ["none", "none", "received", "read", "read"],
    lastMessageAge: "280 j"
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    contactName: "MARTIN, Pierre",
    engagementScore: 45,
    lastMessageStatuses: ["none", "none", "none", "received", "read"],
    lastMessageAge: "3 j"
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,u,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    contactName: "DUPONT, Jean",
    engagementScore: 15,
    lastMessageStatuses: ["none", "none", "none", "none", "received"],
    lastMessageAge: "45 j"
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var v,M,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    contactName: "LEFEVRE, Marie",
    engagementScore: 97,
    lastMessageStatuses: ["read", "read", "read", "read", "read"],
    lastMessageAge: "2 h"
  }
}`,...(h=(M=r.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};const U=["BonEngagement","EngagementMoyen","FaibleEngagement","TousLus"];export{n as BonEngagement,s as EngagementMoyen,t as FaibleEngagement,r as TousLus,U as __namedExportsOrder,J as default};
