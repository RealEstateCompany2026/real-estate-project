import{j as c}from"./jsx-runtime-BjG_zV1W.js";const F={A:"#f2e9f7",B:"#ddb8ee",C:"#cd97e4",D:"#b768d9",E:"#a23bce",F:"#8b1fb5",G:"#6d0f91"},I={small:{width:20,height:20,fontSize:14},medium:{width:40,height:40,fontSize:20},large:{width:60,height:60,fontSize:28}};function D({type:B,classe:q,selected:i=!1,size:T="small",className:_=""}){const o=q||B||"A",j=F[o],e=I[T];return c.jsx("div",{className:`
        relative rounded-[16px] flex items-center justify-center
        transition-all ${_}
      `.trim(),style:{backgroundColor:j,width:`${e.width}px`,height:`${e.height}px`,border:i?"3px solid var(--surface-branded-action)":"3px solid transparent",boxShadow:i?"0 0 0 2px var(--surface-branded-subtle)":"none"},children:c.jsx("p",{className:"text-center whitespace-nowrap font-bold text-content-branded-on-action",style:{fontSize:`${e.fontSize}px`,lineHeight:`${e.height}px`,letterSpacing:"0.14px"},children:o})})}D.__docgenInfo={description:"",methods:[],displayName:"IconGes",props:{type:{required:!1,tsType:{name:"union",raw:'"A" | "B" | "C" | "D" | "E" | "F" | "G"',elements:[{name:"literal",value:'"A"'},{name:"literal",value:'"B"'},{name:"literal",value:'"C"'},{name:"literal",value:'"D"'},{name:"literal",value:'"E"'},{name:"literal",value:'"F"'},{name:"literal",value:'"G"'}]},description:"Alias for type, kept for backward compatibility"},classe:{required:!1,tsType:{name:"union",raw:'"A" | "B" | "C" | "D" | "E" | "F" | "G"',elements:[{name:"literal",value:'"A"'},{name:"literal",value:'"B"'},{name:"literal",value:'"C"'},{name:"literal",value:'"D"'},{name:"literal",value:'"E"'},{name:"literal",value:'"F"'},{name:"literal",value:'"G"'}]},description:"Classe GES"},selected:{required:!1,tsType:{name:"boolean"},description:"Est-ce que cette classe est sélectionnée",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Taille du composant",defaultValue:{value:'"small"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const N={title:"Design System/Atoms/IconGes",component:D},a={args:{classe:"A",size:"medium"}},s={args:{classe:"D",size:"medium"}},r={args:{classe:"G",size:"medium"}},l={args:{classe:"B",size:"small"}},t={args:{classe:"C",size:"large"}},n={args:{classe:"A",size:"medium",selected:!0}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    classe: "A",
    size: "medium"
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,g,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    classe: "D",
    size: "medium"
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,h,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    classe: "G",
    size: "medium"
  }
}`,...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var x,z,C;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    classe: "B",
    size: "small"
  }
}`,...(C=(z=l.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var b,A,G;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    classe: "C",
    size: "large"
  }
}`,...(G=(A=t.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var y,w,E;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    classe: "A",
    size: "medium",
    selected: true
  }
}`,...(E=(w=n.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const k=["ClassA","ClassD","ClassG","Small","Large","Selected"];export{a as ClassA,s as ClassD,r as ClassG,t as Large,n as Selected,l as Small,k as __namedExportsOrder,N as default};
