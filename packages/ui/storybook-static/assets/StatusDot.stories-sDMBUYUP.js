import{j as e}from"./jsx-runtime-BjG_zV1W.js";const k={sm:"size-2",md:"size-3",lg:"size-4"},B={empty:"bg-transparent border border-edge-neutral-default",partial:"bg-surface-warning-subtle border border-edge-warning",complete:"bg-surface-branded-subtle border border-edge-branded-default",success:"bg-surface-success-subtle border border-edge-success",error:"bg-surface-error-subtle border border-edge-error"};function s({level:I,size:O="md",className:R=""}){return e.jsx("div",{className:`rounded-full ${k[O]} ${B[I]} ${R}`.trim()})}s.__docgenInfo={description:"",methods:[],displayName:"StatusDot",props:{level:{required:!0,tsType:{name:"union",raw:'"empty" | "partial" | "complete" | "success" | "error"',elements:[{name:"literal",value:'"empty"'},{name:"literal",value:'"partial"'},{name:"literal",value:'"complete"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const G={title:"Design System/Atoms/StatusDot",component:s,argTypes:{level:{control:{type:"radio",options:["empty","partial","complete","success","error"]}},size:{control:{type:"radio",options:["sm","md","lg"]}}}},a={args:{level:"empty",size:"md"}},r={args:{level:"partial",size:"md"}},l={args:{level:"complete",size:"md"}},t={args:{level:"success",size:"md"}},c={args:{level:"error",size:"md"}},n={args:{level:"complete",size:"sm"}},m={args:{level:"success",size:"lg"}},o={render:()=>e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{level:"empty"}),e.jsx("span",{className:"text-xs",children:"Empty"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{level:"partial"}),e.jsx("span",{className:"text-xs",children:"Partial"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{level:"complete"}),e.jsx("span",{className:"text-xs",children:"Complete"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{level:"success"}),e.jsx("span",{className:"text-xs",children:"Success"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{level:"error"}),e.jsx("span",{className:"text-xs",children:"Error"})]})]})},i={render:()=>e.jsxs("div",{className:"flex gap-8 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{level:"complete",size:"sm"}),e.jsx("span",{className:"text-xs",children:"Small"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{level:"complete",size:"md"}),e.jsx("span",{className:"text-xs",children:"Medium"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{level:"complete",size:"lg"}),e.jsx("span",{className:"text-xs",children:"Large"})]})]})};var p,d,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    level: "empty",
    size: "md"
  }
}`,...(x=(d=a.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var u,v,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    level: "partial",
    size: "md"
  }
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,N,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    level: "complete",
    size: "md"
  }
}`,...(S=(N=l.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var z,j,b;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    level: "success",
    size: "md"
  }
}`,...(b=(j=t.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var y,h,D;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    level: "error",
    size: "md"
  }
}`,...(D=(h=c.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var E,w,C;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    level: "complete",
    size: "sm"
  }
}`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var L,A,P;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    level: "success",
    size: "lg"
  }
}`,...(P=(A=m.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var T,_,q;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center flex-wrap">
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="empty" />
        <span className="text-xs">Empty</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="partial" />
        <span className="text-xs">Partial</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="complete" />
        <span className="text-xs">Complete</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="success" />
        <span className="text-xs">Success</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="error" />
        <span className="text-xs">Error</span>
      </div>
    </div>
}`,...(q=(_=o.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var $,M,V;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 items-center">
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="complete" size="sm" />
        <span className="text-xs">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="complete" size="md" />
        <span className="text-xs">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusDot level="complete" size="lg" />
        <span className="text-xs">Large</span>
      </div>
    </div>
}`,...(V=(M=i.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const H=["Empty","Partial","Complete","Success","Error","SmallSize","LargeSize","AllLevels","AllSizes"];export{o as AllLevels,i as AllSizes,l as Complete,a as Empty,c as Error,m as LargeSize,r as Partial,n as SmallSize,t as Success,H as __namedExportsOrder,G as default};
