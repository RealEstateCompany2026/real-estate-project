import{j as e}from"./jsx-runtime-BjG_zV1W.js";function s({variant:t="default",className:f=""}){const g=t==="hover"?"var(--surface-neutral-action-hover)":"var(--surface-neutral-action)";return e.jsx("div",{className:`w-full h-px ${f}`,style:{backgroundColor:g},"aria-hidden":"true"})}s.__docgenInfo={description:"",methods:[],displayName:"HorizontalDivider",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "hover"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hover"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const x={title:"Design System/Atoms/HorizontalDivider",component:s},a={args:{variant:"default"}},r={args:{variant:"hover"}},n={args:{variant:"default"},render:t=>e.jsxs("div",{className:"space-y-4 w-full",children:[e.jsx("div",{children:"Content above"}),e.jsx(s,{...t}),e.jsx("div",{children:"Content below"})]})};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "hover"
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var v,m,p;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "default"
  },
  render: args => <div className="space-y-4 w-full">
      <div>Content above</div>
      <HorizontalDivider {...args} />
      <div>Content below</div>
    </div>
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const C=["Default","Hover","InContainer"];export{a as Default,r as Hover,n as InContainer,C as __namedExportsOrder,x as default};
