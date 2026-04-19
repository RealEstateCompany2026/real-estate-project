import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as B}from"./index-BNURykns.js";import{c as N}from"./utils-BLSKlp9E.js";const o=B.forwardRef(({className:E,type:I,...k},w)=>e.jsx("input",{type:I,className:N("flex h-10 w-full rounded-md border border-edge-default bg-surface-neutral-default px-3 py-2 text-sm text-content-body ring-offset-surface-page file:border-0 file:bg-transparent file:text-sm file:font-semibold placeholder:text-content-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",E),ref:w,...k}));o.displayName="Input";o.__docgenInfo={description:"",methods:[],displayName:"Input"};const _={title:"Design System/Atoms/Input",component:o,argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","search"]},disabled:{control:"boolean"},placeholder:{control:"text"}}},a={args:{placeholder:"Saisissez un texte…"}},t={args:{type:"email",placeholder:"email@example.com"}},r={args:{type:"password",placeholder:"Mot de passe"}},n={args:{placeholder:"Champ désactivé",disabled:!0}},l={args:{defaultValue:"Jean Dupont"}},s={render:()=>e.jsxs("div",{style:{maxWidth:400,display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:14,fontWeight:600,color:"var(--text-body)",marginBottom:4},children:"Prénom"}),e.jsx(o,{placeholder:"Jean"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:14,fontWeight:600,color:"var(--text-body)",marginBottom:4},children:"Nom"}),e.jsx(o,{placeholder:"Dupont"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:14,fontWeight:600,color:"var(--text-body)",marginBottom:4},children:"Email"}),e.jsx(o,{type:"email",placeholder:"jean.dupont@email.com"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:14,fontWeight:600,color:"var(--text-body)",marginBottom:4},children:"Téléphone"}),e.jsx(o,{type:"tel",placeholder:"06 12 34 56 78"})]})]})};var i,d,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: "Saisissez un texte…"
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "email@example.com"
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,b,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Mot de passe"
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,g,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: "Champ désactivé",
    disabled: true
  }
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,j,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    defaultValue: "Jean Dupont"
  }
}`,...(S=(j=l.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var W,D,z;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 400,
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <div>
        <label style={{
        display: "block",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--text-body)",
        marginBottom: 4
      }}>
          Prénom
        </label>
        <Input placeholder="Jean" />
      </div>
      <div>
        <label style={{
        display: "block",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--text-body)",
        marginBottom: 4
      }}>
          Nom
        </label>
        <Input placeholder="Dupont" />
      </div>
      <div>
        <label style={{
        display: "block",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--text-body)",
        marginBottom: 4
      }}>
          Email
        </label>
        <Input type="email" placeholder="jean.dupont@email.com" />
      </div>
      <div>
        <label style={{
        display: "block",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--text-body)",
        marginBottom: 4
      }}>
          Téléphone
        </label>
        <Input type="tel" placeholder="06 12 34 56 78" />
      </div>
    </div>
}`,...(z=(D=s.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};const T=["Default","Email","Password","Disabled","WithValue","FormExample"];export{a as Default,n as Disabled,t as Email,s as FormExample,r as Password,l as WithValue,T as __namedExportsOrder,_ as default};
