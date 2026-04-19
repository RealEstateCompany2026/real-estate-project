import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as e}from"./Badge-DS_tmhFu.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";const G={title:"Design System/Atoms/Badge",component:e,argTypes:{variant:{control:"select",options:["default","disabled","success","warning","information","error"]}}},n={args:{children:"LABEL",variant:"default"}},r={args:{children:"LABEL",variant:"disabled"}},s={args:{children:"LABEL",variant:"success"}},i={args:{children:"LABEL",variant:"warning"}},t={args:{children:"LABEL",variant:"information"}},d={args:{children:"LABEL",variant:"error"}},o={render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[a.jsx(e,{variant:"default",children:"LABEL"}),a.jsx(e,{variant:"disabled",children:"LABEL"}),a.jsx(e,{variant:"information",children:"LABEL"}),a.jsx(e,{variant:"warning",children:"LABEL"}),a.jsx(e,{variant:"success",children:"LABEL"}),a.jsx(e,{variant:"error",children:"LABEL"})]})})},c={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[a.jsx("span",{style:{fontSize:14,color:"var(--text-body)",width:120},children:"Client :"}),a.jsx(e,{variant:"success",children:"PROPRIÉTAIRE"}),a.jsx(e,{variant:"information",children:"ACQUÉREUR"})]}),a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[a.jsx("span",{style:{fontSize:14,color:"var(--text-body)",width:120},children:"Bien :"}),a.jsx(e,{variant:"default",children:"À VENDRE"}),a.jsx(e,{variant:"disabled",children:"BROUILLON"})]}),a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[a.jsx("span",{style:{fontSize:14,color:"var(--text-body)",width:120},children:"Affaire :"}),a.jsx(e,{variant:"warning",children:"EN NÉGOCIATION"}),a.jsx(e,{variant:"success",children:"SIGNÉE"}),a.jsx(e,{variant:"error",children:"PERDUE"})]})]})};var l,p,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "LABEL",
    variant: "default"
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,v,B;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "LABEL",
    variant: "disabled"
  }
}`,...(B=(v=r.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var L,u,x;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: "LABEL",
    variant: "success"
  }
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,E,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "LABEL",
    variant: "warning"
  }
}`,...(h=(E=i.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var y,A,j;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "LABEL",
    variant: "information"
  }
}`,...(j=(A=t.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var I,S,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: "LABEL",
    variant: "error"
  }
}`,...(R=(S=d.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var b,w,D;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      {/* Light variants */}
      <div style={{
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        <Badge variant="default">LABEL</Badge>
        <Badge variant="disabled">LABEL</Badge>
        <Badge variant="information">LABEL</Badge>
        <Badge variant="warning">LABEL</Badge>
        <Badge variant="success">LABEL</Badge>
        <Badge variant="error">LABEL</Badge>
      </div>
    </div>
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var N,O,U;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <div style={{
      display: "flex",
      gap: 8,
      alignItems: "center"
    }}>
        <span style={{
        fontSize: 14,
        color: "var(--text-body)",
        width: 120
      }}>Client :</span>
        <Badge variant="success">PROPRIÉTAIRE</Badge>
        <Badge variant="information">ACQUÉREUR</Badge>
      </div>
      <div style={{
      display: "flex",
      gap: 8,
      alignItems: "center"
    }}>
        <span style={{
        fontSize: 14,
        color: "var(--text-body)",
        width: 120
      }}>Bien :</span>
        <Badge variant="default">À VENDRE</Badge>
        <Badge variant="disabled">BROUILLON</Badge>
      </div>
      <div style={{
      display: "flex",
      gap: 8,
      alignItems: "center"
    }}>
        <span style={{
        fontSize: 14,
        color: "var(--text-body)",
        width: 120
      }}>Affaire :</span>
        <Badge variant="warning">EN NÉGOCIATION</Badge>
        <Badge variant="success">SIGNÉE</Badge>
        <Badge variant="error">PERDUE</Badge>
      </div>
    </div>
}`,...(U=(O=c.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const V=["Default","Disabled","Success","Warning","Information","Error","AllVariants","StatusExamples"];export{o as AllVariants,n as Default,r as Disabled,d as Error,t as Information,c as StatusExamples,s as Success,i as Warning,V as __namedExportsOrder,G as default};
