import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{C as s}from"./Chip-DbXFJYRR.js";import{S as m}from"./star-Gfh1B_3E.js";import{H as V}from"./home-HNgQxOBc.js";import{U as _}from"./user-BnRui8Nx.js";import"./createLucideIcon-CtqQySJq.js";import"./index-BNURykns.js";const M={title:"Design System/Atoms/Chip",component:s,argTypes:{size:{control:{type:"radio",options:["small","medium"]}},iconPosition:{control:{type:"radio",options:["left","right"]}},fontWeight:{control:{type:"radio",options:["semibold","regular"]}},gap:{control:{type:"radio",options:["tight","normal"]}},disabled:{control:"boolean"}}},i={args:{children:"Chip Label",size:"medium",disabled:!1}},r={args:{children:"Starred",icon:e.jsx(m,{size:20}),iconPosition:"left",size:"medium",disabled:!1}},a={args:{children:"Starred",icon:e.jsx(m,{size:20}),iconPosition:"right",size:"medium",disabled:!1}},n={args:{children:"Small Chip",size:"small",disabled:!1}},o={args:{children:"Home",icon:e.jsx(V,{size:16}),iconPosition:"left",size:"small",disabled:!1}},l={args:{children:"Regular Weight",fontWeight:"regular",size:"medium",disabled:!1}},c={args:{children:"Disabled Chip",disabled:!0,size:"medium"}},t={args:{children:"Disabled",icon:e.jsx(_,{size:20}),iconPosition:"left",disabled:!0,size:"medium"}},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(s,{children:"Basic"}),e.jsx(s,{icon:e.jsx(m,{size:20}),children:"With Icon"}),e.jsx(s,{icon:e.jsx(V,{size:20}),iconPosition:"right",children:"Icon Right"}),e.jsx(s,{size:"small",children:"Small"}),e.jsx(s,{disabled:!0,children:"Disabled"})]}),e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(s,{fontWeight:"regular",children:"Regular Weight"}),e.jsx(s,{gap:"normal",icon:e.jsx(_,{size:20}),children:"Wider Gap"}),e.jsx(s,{size:"small",icon:e.jsx(m,{size:16}),children:"Small Icon"})]})]})};var p,h,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: "Chip Label",
    size: "medium",
    disabled: false
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,f,z;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Starred",
    icon: <Star size={20} />,
    iconPosition: "left",
    size: "medium",
    disabled: false
  }
}`,...(z=(f=r.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var x,b,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Starred",
    icon: <Star size={20} />,
    iconPosition: "right",
    size: "medium",
    disabled: false
  }
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var C,j,W;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: "Small Chip",
    size: "small",
    disabled: false
  }
}`,...(W=(j=n.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var I,D,P;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: "Home",
    icon: <Home size={16} />,
    iconPosition: "left",
    size: "small",
    disabled: false
  }
}`,...(P=(D=o.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var R,v,y;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: "Regular Weight",
    fontWeight: "regular",
    size: "medium",
    disabled: false
  }
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var H,N,w;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: "Disabled Chip",
    disabled: true,
    size: "medium"
  }
}`,...(w=(N=c.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var U,A,B;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    icon: <User size={20} />,
    iconPosition: "left",
    disabled: true,
    size: "medium"
  }
}`,...(B=(A=t.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var E,G,L;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <Chip>Basic</Chip>
        <Chip icon={<Star size={20} />}>With Icon</Chip>
        <Chip icon={<Home size={20} />} iconPosition="right">Icon Right</Chip>
        <Chip size="small">Small</Chip>
        <Chip disabled>Disabled</Chip>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Chip fontWeight="regular">Regular Weight</Chip>
        <Chip gap="normal" icon={<User size={20} />}>Wider Gap</Chip>
        <Chip size="small" icon={<Star size={16} />}>Small Icon</Chip>
      </div>
    </div>
}`,...(L=(G=d.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};const Q=["Default","WithIcon","IconRight","Small","SmallWithIcon","Regular","Disabled","DisabledWithIcon","AllVariants"];export{d as AllVariants,i as Default,c as Disabled,t as DisabledWithIcon,a as IconRight,l as Regular,n as Small,o as SmallWithIcon,r as WithIcon,Q as __namedExportsOrder,M as default};
