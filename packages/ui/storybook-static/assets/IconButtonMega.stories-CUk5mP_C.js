import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as O}from"./index-1evVQkiP.js";import{c as N}from"./utils-BLSKlp9E.js";import{S as P}from"./settings-Bi2upNBe.js";import{H as y}from"./home-HNgQxOBc.js";import{S as B}from"./search-BRDQbtZK.js";import{S as G}from"./star-Gfh1B_3E.js";import"./createLucideIcon-CtqQySJq.js";import"./index-BNURykns.js";const H=O("inline-flex items-center justify-center rounded-[28px] w-[70px] h-[70px] p-[23px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ring-offset-surface-page disabled:pointer-events-none disabled:bg-surface-disabled disabled:text-content-disabled disabled:border-edge-disabled",{variants:{variant:{default:"bg-surface-neutral-default text-content-body border border-edge-neutral-default hover:bg-surface-neutral-action-hover",primary:"bg-surface-branded-action text-content-branded-on-action border border-edge-branded-action hover:bg-surface-branded-action-hover",outline:"border border-edge-neutral-default bg-surface-neutral-default hover:bg-surface-neutral-default text-content-body hover:border-edge-neutral-action",ghost:"text-content-body hover:bg-surface-neutral-action"}},defaultVariants:{variant:"default"}});function S({icon:j,variant:z="default",className:C,...D}){return e.jsx("button",{className:N(H({variant:z}),C),...D,children:e.jsx("div",{className:"flex items-center justify-center size-full",children:e.jsx("div",{className:"shrink-0 w-[24px] h-[24px]",children:j})})})}S.__docgenInfo={description:"",methods:[],displayName:"IconButtonMega",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},variant:{defaultValue:{value:'"default"',computed:!1},required:!1}},composes:["Omit","VariantProps"]};const T={title:"Design System/Atoms/IconButtonMega",component:S},r={args:{icon:e.jsx(P,{size:24}),variant:"default",onClick:()=>console.log("Default button clicked")}},o={args:{icon:e.jsx(y,{size:24}),variant:"primary",onClick:()=>console.log("Primary button clicked")}},a={args:{icon:e.jsx(G,{size:24}),variant:"outline",onClick:()=>console.log("Outline button clicked")}},t={args:{icon:e.jsx(B,{size:24}),variant:"ghost",onClick:()=>console.log("Ghost button clicked")}},n={args:{icon:e.jsx(y,{size:24}),variant:"primary",disabled:!0}};var s,i,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    icon: <Settings size={24} />,
    variant: "default",
    onClick: () => console.log("Default button clicked")
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    icon: <Home size={24} />,
    variant: "primary",
    onClick: () => console.log("Primary button clicked")
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: <Star size={24} />,
    variant: "outline",
    onClick: () => console.log("Outline button clicked")
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,b,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    icon: <Search size={24} />,
    variant: "ghost",
    onClick: () => console.log("Ghost button clicked")
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,h,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    icon: <Home size={24} />,
    variant: "primary",
    disabled: true
  }
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const F=["Default","Primary","Outline","Ghost","Disabled"];export{r as Default,n as Disabled,t as Ghost,a as Outline,o as Primary,F as __namedExportsOrder,T as default};
