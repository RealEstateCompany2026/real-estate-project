import{j as u}from"./jsx-runtime-BjG_zV1W.js";const H={sm:"rounded",default:"rounded",lg:"rounded-lg"},J={sm:"p-2",default:"p-4",lg:"p-6",xl:"p-8"};function c({radius:i="default",padding:O="default",showBorder:k=!0,showShadow:z=!0,onClick:m,className:F="",children:G}){return u.jsx("div",{className:`
        bg-surface-neutral-default
        ${k?"border border-edge-default":""}
        ${z?"shadow-sm":""}
        ${H[i]}
        ${J[O]}
        ${m?"cursor-pointer hover:shadow-md transition-shadow":""}
        ${F}
      `.trim().replace(/\s+/g," "),onClick:m,children:G})}c.__docgenInfo={description:"",methods:[],displayName:"Card",props:{radius:{required:!1,tsType:{name:"union",raw:'"sm" | "default" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"default"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},padding:{required:!1,tsType:{name:"union",raw:'"sm" | "default" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"default"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},showBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showShadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const M={title:"Design System/Atoms/Card",component:c,argTypes:{radius:{control:{type:"radio",options:["sm","default","lg"]}},padding:{control:{type:"radio",options:["sm","default","lg","xl"]}},showBorder:{control:"boolean"},showShadow:{control:"boolean"}}},e={args:{radius:"default",padding:"default",showBorder:!0,showShadow:!0,children:"Card content"}},a={args:{radius:"sm",padding:"default",showBorder:!0,showShadow:!0,children:"Small radius card"}},r={args:{radius:"lg",padding:"default",showBorder:!0,showShadow:!0,children:"Large radius card"}},d={args:{radius:"default",padding:"sm",showBorder:!0,showShadow:!0,children:"Small padding card"}},s={args:{radius:"default",padding:"lg",showBorder:!0,showShadow:!0,children:"Large padding card"}},t={args:{radius:"default",padding:"xl",showBorder:!0,showShadow:!0,children:"Extra large padding card"}},o={args:{radius:"default",padding:"default",showBorder:!1,showShadow:!0,children:"Card without border"}},n={args:{radius:"default",padding:"default",showBorder:!0,showShadow:!1,children:"Card without shadow"}},l={render:i=>u.jsxs(c,{...i,children:[u.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Card Title"}),u.jsx("p",{className:"text-sm text-content-body",children:"This is a card with more detailed content including text and other elements."})]}),args:{radius:"default",padding:"default",showBorder:!0,showShadow:!0}};var p,h,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    radius: "default",
    padding: "default",
    showBorder: true,
    showShadow: true,
    children: "Card content"
  }
}`,...(g=(h=e.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var w,f,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    radius: "sm",
    padding: "default",
    showBorder: true,
    showShadow: true,
    children: "Small radius card"
  }
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,B,C;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    radius: "lg",
    padding: "default",
    showBorder: true,
    showShadow: true,
    children: "Large radius card"
  }
}`,...(C=(B=r.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var v,b,y;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    radius: "default",
    padding: "sm",
    showBorder: true,
    showShadow: true,
    children: "Small padding card"
  }
}`,...(y=(b=d.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var N,T,L;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    radius: "default",
    padding: "lg",
    showBorder: true,
    showShadow: true,
    children: "Large padding card"
  }
}`,...(L=(T=s.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var R,q,j;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    radius: "default",
    padding: "xl",
    showBorder: true,
    showShadow: true,
    children: "Extra large padding card"
  }
}`,...(j=(q=t.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var E,P,$;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    radius: "default",
    padding: "default",
    showBorder: false,
    showShadow: true,
    children: "Card without border"
  }
}`,...($=(P=o.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var V,_,D;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    radius: "default",
    padding: "default",
    showBorder: true,
    showShadow: false,
    children: "Card without shadow"
  }
}`,...(D=(_=n.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var W,A,I;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <h3 className="text-lg font-semibold mb-2">Card Title</h3>
      <p className="text-sm text-content-body">
        This is a card with more detailed content including text and other elements.
      </p>
    </Card>,
  args: {
    radius: "default",
    padding: "default",
    showBorder: true,
    showShadow: true
  }
}`,...(I=(A=l.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const Q=["Default","SmallRadius","LargeRadius","SmallPadding","LargePadding","ExtraLargePadding","NoBorder","NoShadow","WithContent"];export{e as Default,t as ExtraLargePadding,s as LargePadding,r as LargeRadius,o as NoBorder,n as NoShadow,d as SmallPadding,a as SmallRadius,l as WithContent,Q as __namedExportsOrder,M as default};
