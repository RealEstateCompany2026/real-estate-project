import{j as e}from"./jsx-runtime-BjG_zV1W.js";const z={small:"h-1",medium:"h-2",large:"h-3"};function a({percentage:r,label:f="Complétion",size:x="medium",showPercentage:h=!0,className:re=""}){const s=Math.min(Math.max(r,0),100),se=s>=100?"bg-green-500":s>=75?"bg-surface-branded-default":s>=50?"bg-orange-500":"bg-red-300";return e.jsxs("div",{className:`w-full ${re}`.trim(),children:[(f||h)&&e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f&&e.jsx("span",{className:"text-sm font-medium text-content-body",children:f}),h&&e.jsxs("span",{className:"text-sm font-semibold text-content-strong",children:[s,"%"]})]}),e.jsx("div",{className:`w-full ${z[x]} rounded-full bg-surface-neutral-action overflow-hidden`,children:e.jsx("div",{className:`${z[x]} rounded-full transition-all duration-300 ${se}`,style:{width:`${s}%`}})})]})}a.__docgenInfo={description:"",methods:[],displayName:"CompletionGauge",props:{percentage:{required:!0,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Complétion"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},showPercentage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const te={title:"Design System/Atoms/CompletionGauge",component:a,argTypes:{percentage:{control:{type:"number",min:0,max:100}},label:{control:"text"},size:{control:{type:"radio",options:["small","medium","large"]}},showPercentage:{control:"boolean"}}},n={args:{percentage:0,label:"Completion",size:"medium",showPercentage:!0}},t={args:{percentage:25,label:"Completion",size:"medium",showPercentage:!0}},o={args:{percentage:50,label:"Completion",size:"medium",showPercentage:!0}},l={args:{percentage:75,label:"Completion",size:"medium",showPercentage:!0}},c={args:{percentage:100,label:"Completion",size:"medium",showPercentage:!0}},m={args:{percentage:60,label:"Profile",size:"small",showPercentage:!0}},i={args:{percentage:60,label:"Project",size:"large",showPercentage:!0}},p={args:{percentage:75,label:"",size:"medium",showPercentage:!0}},u={args:{percentage:75,label:"Completion",size:"medium",showPercentage:!1}},d={args:{percentage:65,label:"Data Entry",size:"medium",showPercentage:!0}},g={render:r=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold mb-2",children:"Small"}),e.jsx(a,{...r,size:"small",percentage:45})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold mb-2",children:"Medium"}),e.jsx(a,{...r,size:"medium",percentage:45})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold mb-2",children:"Large"}),e.jsx(a,{...r,size:"large",percentage:45})]})]})},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(a,{percentage:0,label:"0%"}),e.jsx(a,{percentage:25,label:"25%"}),e.jsx(a,{percentage:50,label:"50%"}),e.jsx(a,{percentage:75,label:"75%"}),e.jsx(a,{percentage:100,label:"100%"})]})};var C,P,j;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    percentage: 0,
    label: "Completion",
    size: "medium",
    showPercentage: true
  }
}`,...(j=(P=n.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var v,w,N;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    percentage: 25,
    label: "Completion",
    size: "medium",
    showPercentage: true
  }
}`,...(N=(w=t.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var S,y,G;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    percentage: 50,
    label: "Completion",
    size: "medium",
    showPercentage: true
  }
}`,...(G=(y=o.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};var L,T,q;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    percentage: 75,
    label: "Completion",
    size: "medium",
    showPercentage: true
  }
}`,...(q=(T=l.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var $,E,M;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    percentage: 100,
    label: "Completion",
    size: "medium",
    showPercentage: true
  }
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var Q,V,_;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    percentage: 60,
    label: "Profile",
    size: "small",
    showPercentage: true
  }
}`,...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var A,D,F;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    percentage: 60,
    label: "Project",
    size: "large",
    showPercentage: true
  }
}`,...(F=(D=i.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var H,Z,I;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    percentage: 75,
    label: "",
    size: "medium",
    showPercentage: true
  }
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};var O,R,k;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    percentage: 75,
    label: "Completion",
    size: "medium",
    showPercentage: false
  }
}`,...(k=(R=u.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var B,J,K;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    percentage: 65,
    label: "Data Entry",
    size: "medium",
    showPercentage: true
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var U,W,X;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-semibold mb-2">Small</p>
        <CompletionGauge {...args} size="small" percentage={45} />
      </div>
      <div>
        <p className="text-sm font-semibold mb-2">Medium</p>
        <CompletionGauge {...args} size="medium" percentage={45} />
      </div>
      <div>
        <p className="text-sm font-semibold mb-2">Large</p>
        <CompletionGauge {...args} size="large" percentage={45} />
      </div>
    </div>
}`,...(X=(W=g.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,ee,ae;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <CompletionGauge percentage={0} label="0%" />
      <CompletionGauge percentage={25} label="25%" />
      <CompletionGauge percentage={50} label="50%" />
      <CompletionGauge percentage={75} label="75%" />
      <CompletionGauge percentage={100} label="100%" />
    </div>
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const oe=["Zero","Quarter","Half","ThreeQuarters","Full","Small","Large","NoLabel","NoPercentage","CustomLabel","AllSizes","ProgressSequence"];export{g as AllSizes,d as CustomLabel,c as Full,o as Half,i as Large,p as NoLabel,u as NoPercentage,b as ProgressSequence,t as Quarter,m as Small,l as ThreeQuarters,n as Zero,oe as __namedExportsOrder,te as default};
