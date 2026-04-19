import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as s}from"./DatePickerNumber-lSz8Oylp.js";const H={title:"Design System/Atoms/DatePickerNumber",component:s},a={args:{value:15,state:"default",onClick:()=>console.log("Selected: 15")}},t={args:{value:20,state:"selected",onClick:()=>console.log("Selected: 20")}},r={args:{value:10,state:"today",onClick:()=>console.log("Selected: 10")}},c={args:{value:5,disabled:!0}},l={args:{value:25,state:"hover",onClick:()=>console.log("Selected: 25")}},n={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-2 w-fit",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{value:1,state:"default"}),e.jsx("p",{className:"text-xs mt-1",children:"Default"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{value:15,state:"selected"}),e.jsx("p",{className:"text-xs mt-1",children:"Selected"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{value:10,state:"today"}),e.jsx("p",{className:"text-xs mt-1",children:"Today"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{value:20,state:"hover"}),e.jsx("p",{className:"text-xs mt-1",children:"Hover"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{value:5,disabled:!0}),e.jsx("p",{className:"text-xs mt-1",children:"Disabled"})]})]})};var o,d,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    value: 15,
    state: "default",
    onClick: () => console.log("Selected: 15")
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,u,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 20,
    state: "selected",
    onClick: () => console.log("Selected: 20")
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var p,v,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 10,
    state: "today",
    onClick: () => console.log("Selected: 10")
  }
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var N,S,j;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 5,
    disabled: true
  }
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var D,b,h;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: 25,
    state: "hover",
    onClick: () => console.log("Selected: 25")
  }
}`,...(h=(b=l.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var k,f,y;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-2 w-fit">
      <div className="text-center">
        <DatePickerNumber value={1} state="default" />
        <p className="text-xs mt-1">Default</p>
      </div>
      <div className="text-center">
        <DatePickerNumber value={15} state="selected" />
        <p className="text-xs mt-1">Selected</p>
      </div>
      <div className="text-center">
        <DatePickerNumber value={10} state="today" />
        <p className="text-xs mt-1">Today</p>
      </div>
      <div className="text-center">
        <DatePickerNumber value={20} state="hover" />
        <p className="text-xs mt-1">Hover</p>
      </div>
      <div className="text-center">
        <DatePickerNumber value={5} disabled />
        <p className="text-xs mt-1">Disabled</p>
      </div>
    </div>
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const T=["Default","Selected","Today","Disabled","Hover","AllStates"];export{n as AllStates,a as Default,c as Disabled,l as Hover,t as Selected,r as Today,T as __namedExportsOrder,H as default};
