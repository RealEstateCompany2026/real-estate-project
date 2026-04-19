import{j as e}from"./jsx-runtime-BjG_zV1W.js";function i({height:r=84,variant:j="default",className:y=""}){const S=()=>j==="hover"?"var(--surface-neutral-action-hover)":"var(--surface-neutral-action)";return e.jsx("div",{className:`relative size-full ${y}`,children:e.jsx("div",{className:"absolute flex inset-0 items-center justify-center",children:e.jsx("svg",{className:"block",fill:"none",preserveAspectRatio:"none",viewBox:`0 0 1 ${r}`,style:{width:"1px",height:`${r}px`},children:e.jsx("line",{stroke:S(),x1:"0.5",y1:"0",x2:"0.5",y2:r,strokeWidth:"1"})})})})}i.__docgenInfo={description:"",methods:[],displayName:"VerticalDivider",props:{height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"84",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "hover"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hover"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const I={title:"Design System/Atoms/VerticalDivider",component:i},a={args:{variant:"default",height:84}},t={args:{variant:"hover",height:84}},s={args:{variant:"default",height:40}},n={args:{variant:"default",height:84},render:r=>e.jsxs("div",{className:"flex items-center gap-4",style:{height:"100px"},children:[e.jsx("div",{children:"Item 1"}),e.jsx(i,{...r}),e.jsx("div",{children:"Item 2"})]})};var o,l,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "default",
    height: 84
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "hover",
    height: 84
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,p,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "default",
    height: 40
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,g,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "default",
    height: 84
  },
  render: args => <div className="flex items-center gap-4" style={{
    height: "100px"
  }}>
      <div>Item 1</div>
      <VerticalDivider {...args} />
      <div>Item 2</div>
    </div>
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const N=["Default","Hover","ShortHeight","InlineWithContent"];export{a as Default,t as Hover,n as InlineWithContent,s as ShortHeight,N as __namedExportsOrder,I as default};
