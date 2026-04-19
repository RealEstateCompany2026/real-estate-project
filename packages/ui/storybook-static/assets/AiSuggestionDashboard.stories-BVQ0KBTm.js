import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{A as s}from"./AiTitleWithBadge-Ch0XrpOc.js";import{A as q}from"./arrow-right-CowbYVXw.js";import"./AiSuggestion-oBwrb1u-.js";import"./createLucideIcon-CtqQySJq.js";import"./index-BNURykns.js";function S({conseil:h=0,service:y=0,administratif:k=0,transaction:j=0,onViewAll:N,className:T=""}){return e.jsxs("div",{className:`flex items-center justify-between px-[20px] py-[28px] rounded-[16px] w-full
        bg-surface-neutral-action ${T}`.trim(),children:[e.jsxs("div",{className:"flex items-center gap-[36px] shrink-0",children:[e.jsx(s,{title:"Conseil",count:h}),e.jsx(s,{title:"Service",count:y}),e.jsx(s,{title:"Administratif",count:k}),e.jsx(s,{title:"Transaction",count:j})]}),e.jsxs("button",{type:"button",onClick:N,className:`shrink-0 flex items-center gap-[8px] p-[12px] rounded-[16px] border border-solid
          bg-surface-branded-default border-edge-branded-action
          hover:opacity-90 transition-opacity`,children:[e.jsx("span",{className:"text-[16px] font-semibold leading-[20px] tracking-[0.16px] whitespace-nowrap",style:{color:"var(--text-branded-on-action)"},children:"Voir les suggestions"}),e.jsx(q,{size:20,style:{color:"var(--text-branded-on-action)"}})]})]})}S.__docgenInfo={description:"",methods:[],displayName:"AiSuggestionDashboard",props:{conseil:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},service:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},administratif:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},transaction:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onViewAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const L={title:"Design System/Organisms/AiSuggestionDashboard",component:S},n={args:{conseil:3,service:2,administratif:1,transaction:4,onViewAll:()=>console.log("View all clicked")}},a={args:{conseil:8,service:5,administratif:6,transaction:12,onViewAll:()=>console.log("View all clicked")}},i={args:{conseil:1,service:0,administratif:1,transaction:0,onViewAll:()=>console.log("View all clicked")}},r={args:{conseil:0,service:0,administratif:0,transaction:0,onViewAll:()=>console.log("View all clicked")}},o={args:{conseil:2,service:2,administratif:2,transaction:3,onViewAll:()=>console.log("View all clicked")}};var t,l,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    conseil: 3,
    service: 2,
    administratif: 1,
    transaction: 4,
    onViewAll: () => console.log("View all clicked")
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    conseil: 8,
    service: 5,
    administratif: 6,
    transaction: 12,
    onViewAll: () => console.log("View all clicked")
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    conseil: 1,
    service: 0,
    administratif: 1,
    transaction: 0,
    onViewAll: () => console.log("View all clicked")
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,w,V;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    conseil: 0,
    service: 0,
    administratif: 0,
    transaction: 0,
    onViewAll: () => console.log("View all clicked")
  }
}`,...(V=(w=r.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var v,b,A;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    conseil: 2,
    service: 2,
    administratif: 2,
    transaction: 3,
    onViewAll: () => console.log("View all clicked")
  }
}`,...(A=(b=o.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};const O=["Default","HighSuggestions","LowSuggestions","NoSuggestions","BalancedSuggestions"];export{o as BalancedSuggestions,n as Default,a as HighSuggestions,i as LowSuggestions,r as NoSuggestions,O as __namedExportsOrder,L as default};
