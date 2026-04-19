import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{R as f}from"./index-BNURykns.js";import{B as p}from"./BadgeCriteria-8i3a3Sca.js";import"./circle-x-DfRUSFQm.js";import"./createLucideIcon-CtqQySJq.js";const P={title:"Design System/Atoms/BadgeCriteria",component:p},e={args:{label:"Price: €500k",variant:"outlined"}},r={args:{label:"Rooms: 3",variant:"default"}},a={args:{label:"Location: Paris",variant:"outlined"},render:g=>{const[v,b]=f.useState(!0);return v?s.jsx(p,{...g,onRemove:()=>b(!1)}):s.jsx("p",{children:"Badge removed"})}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Price: €500k",
    variant: "outlined"
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var i,l,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Rooms: 3",
    variant: "default"
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Location: Paris",
    variant: "outlined"
  },
  render: args => {
    const [visible, setVisible] = React.useState(true);
    return visible ? <BadgeCriteria {...args} onRemove={() => setVisible(false)} /> : <p>Badge removed</p>;
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const h=["Outlined","Default","WithRemove"];export{r as Default,e as Outlined,a as WithRemove,h as __namedExportsOrder,P as default};
