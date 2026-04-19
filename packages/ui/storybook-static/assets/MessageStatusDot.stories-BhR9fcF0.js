import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{M as c}from"./MessageStatusDot-iESl-atJ.js";const f={title:"Design System/Atoms/MessageStatusDot",component:c},e={args:{status:"success"}},t={args:{status:"fail"}},a={args:{status:"none"}},r={render:()=>s.jsxs("div",{className:"flex gap-8",children:[s.jsxs("div",{className:"text-center",children:[s.jsx(c,{status:"success"}),s.jsx("p",{className:"text-sm mt-2",children:"Success"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx(c,{status:"fail"}),s.jsx("p",{className:"text-sm mt-2",children:"Fail"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx(c,{status:"none"}),s.jsx("p",{className:"text-sm mt-2",children:"None"})]})]})};var n,o,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    status: "success"
  }
}`,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var l,i,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    status: "fail"
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,p,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    status: "none"
  }
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,N,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8">
      <div className="text-center">
        <MessageStatusDot status="success" />
        <p className="text-sm mt-2">Success</p>
      </div>
      <div className="text-center">
        <MessageStatusDot status="fail" />
        <p className="text-sm mt-2">Fail</p>
      </div>
      <div className="text-center">
        <MessageStatusDot status="none" />
        <p className="text-sm mt-2">None</p>
      </div>
    </div>
}`,...(S=(N=r.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const h=["Success","Fail","None","AllStates"];export{r as AllStates,t as Fail,a as None,e as Success,h as __namedExportsOrder,f as default};
