import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{P as e}from"./ProgressBar-C-XXGnCh.js";const U={title:"Design System/Atoms/ProgressBar",component:e,argTypes:{progress:{control:{type:"number",min:0,max:100}},size:{control:{type:"radio",options:["sm","default","lg"]}},color:{control:"color"}}},r={args:{progress:0,size:"default"}},a={args:{progress:45,size:"default"}},o={args:{progress:50,size:"default"}},n={args:{progress:85,size:"default"}},t={args:{progress:100,size:"default"}},c={args:{progress:60,size:"sm"}},m={args:{progress:60,size:"lg"}},l={args:{progress:65,color:"#FF6B6B",size:"default"}},p={args:{progress:50,color:"#FFA500",size:"default"}},i={render:g=>s.jsxs("div",{className:"flex flex-col gap-6",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-medium mb-2",children:"Small"}),s.jsx(e,{...g,size:"sm",progress:45})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-medium mb-2",children:"Default"}),s.jsx(e,{...g,size:"default",progress:45})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-medium mb-2",children:"Large"}),s.jsx(e,{...g,size:"lg",progress:45})]})]})},d={render:()=>s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-xs mb-1",children:"0%"}),s.jsx(e,{progress:0})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xs mb-1",children:"25%"}),s.jsx(e,{progress:25})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xs mb-1",children:"50%"}),s.jsx(e,{progress:50})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xs mb-1",children:"75%"}),s.jsx(e,{progress:75})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xs mb-1",children:"100%"}),s.jsx(e,{progress:100})]})]})};var u,x,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    progress: 0,
    size: "default"
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,j,z;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    progress: 45,
    size: "default"
  }
}`,...(z=(j=a.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var N,S,h;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    progress: 50,
    size: "default"
  }
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var b,P,B;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    progress: 85,
    size: "default"
  }
}`,...(B=(P=n.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var C,F,y;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    progress: 100,
    size: "default"
  }
}`,...(y=(F=t.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};var A,L,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    progress: 60,
    size: "sm"
  }
}`,...(D=(L=c.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var q,E,H;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    progress: 60,
    size: "lg"
  }
}`,...(H=(E=m.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var W,Z,_;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    progress: 65,
    color: "#FF6B6B",
    size: "default"
  }
}`,...(_=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var O,R,T;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    progress: 50,
    color: "#FFA500",
    size: "default"
  }
}`,...(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var k,w,G;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-medium mb-2">Small</p>
        <ProgressBar {...args} size="sm" progress={45} />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Default</p>
        <ProgressBar {...args} size="default" progress={45} />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Large</p>
        <ProgressBar {...args} size="lg" progress={45} />
      </div>
    </div>
}`,...(G=(w=i.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var I,J,K;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <p className="text-xs mb-1">0%</p>
        <ProgressBar progress={0} />
      </div>
      <div>
        <p className="text-xs mb-1">25%</p>
        <ProgressBar progress={25} />
      </div>
      <div>
        <p className="text-xs mb-1">50%</p>
        <ProgressBar progress={50} />
      </div>
      <div>
        <p className="text-xs mb-1">75%</p>
        <ProgressBar progress={75} />
      </div>
      <div>
        <p className="text-xs mb-1">100%</p>
        <ProgressBar progress={100} />
      </div>
    </div>
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const V=["Zero","Partial","Half","Nearly","Complete","Small","Large","CustomColor","CustomColorWarning","AllSizes","ProgressSequence"];export{i as AllSizes,t as Complete,l as CustomColor,p as CustomColorWarning,o as Half,m as Large,n as Nearly,a as Partial,d as ProgressSequence,c as Small,r as Zero,V as __namedExportsOrder,U as default};
