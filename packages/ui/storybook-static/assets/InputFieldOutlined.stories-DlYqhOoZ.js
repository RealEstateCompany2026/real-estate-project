import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as K}from"./index-BNURykns.js";import{L as Q}from"./Label-C5FOg3zv.js";import{T as U}from"./TextFieldOutlined-BdTpch0w.js";import{C as X}from"./calendar-gRs8LC7V.js";import{E as Y}from"./euro-tykbo77t.js";import{B as Z}from"./building-DTwI-Jmd.js";import"./info-BiYvWz97.js";import"./createLucideIcon-CtqQySJq.js";function m({label:e,icon:u=!1,required:p=!1,hintText:h,leftIcon:H,rightIcon:P,id:k,className:G="",...J}){const f=k||`input-outlined-${e.toLowerCase().replace(/\s+/g,"-")}`;return r.jsxs("div",{className:`flex flex-col gap-[12px] w-full ${G}`.trim(),children:[r.jsx(Q,{label:e,icon:u,required:p,htmlFor:f}),r.jsx(U,{id:f,leftIcon:H,rightIcon:P,ariaLabel:e,...J}),h&&r.jsx("div",{className:"flex flex-col justify-center leading-[0] not-italic text-[14px] tracking-[0.14px] text-content-body font-roboto",children:r.jsx("p",{className:"leading-[16px]",children:h})})]})}m.__docgenInfo={description:"",methods:[],displayName:"InputFieldOutlined",props:{label:{required:!0,tsType:{name:"string"},description:"Label du champ"},icon:{required:!1,tsType:{name:"boolean"},description:"Afficher l'icône info dans le label",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Champ requis (affiche astérisque rouge)",defaultValue:{value:"false",computed:!1}},hintText:{required:!1,tsType:{name:"string"},description:"Texte d'aide sous le champ"},leftIcon:{required:!1,tsType:{name:"LucideIcon"},description:"Icône gauche du TextField"},rightIcon:{required:!1,tsType:{name:"LucideIcon"},description:"Icône droite du TextField"},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const ce={title:"Design System/Molecules/InputFieldOutlined",component:m},a={args:{label:"Titre",placeholder:"Entrez le titre"}},t={args:{label:"Description",placeholder:"Décrivez le bien",required:!0}},s={args:{label:"Surface",placeholder:"120",hintText:"En mètres carrés"}},n={args:{label:"Bâtiment",placeholder:"Type de bâtiment",leftIcon:Z}},o={args:{label:"Prix de vente",placeholder:"450000",rightIcon:Y,hintText:"Montant en euros"}},l={args:{label:"Date de visite",placeholder:"Sélectionnez une date",leftIcon:X,required:!0,icon:!0}},i={args:{label:"Email du notaire",placeholder:"notaire@email.com",hintText:"Format d'email invalide",error:!0}},c={args:{label:"Référence",placeholder:"REF-2024-001",disabled:!0}},d={render:()=>{const[e,u]=K.useState("");return r.jsx(m,{label:"Notes",placeholder:"Ajoutez des notes...",value:e,onChange:p=>u(p.target.value),hintText:`${e.length} caractères`})}};var g,x,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Titre",
    placeholder: "Entrez le titre"
  }
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var I,T,v;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Description",
    placeholder: "Décrivez le bien",
    required: true
  }
}`,...(v=(T=t.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var q,E,S;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Surface",
    placeholder: "120",
    hintText: "En mètres carrés"
  }
}`,...(S=(E=s.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var y,F,j;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Bâtiment",
    placeholder: "Type de bâtiment",
    leftIcon: Building
  }
}`,...(j=(F=n.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var W,C,D;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Prix de vente",
    placeholder: "450000",
    rightIcon: Euro,
    hintText: "Montant en euros"
  }
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var R,z,B;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Date de visite",
    placeholder: "Sélectionnez une date",
    leftIcon: Calendar,
    required: true,
    icon: true
  }
}`,...(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var L,N,O;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "Email du notaire",
    placeholder: "notaire@email.com",
    hintText: "Format d'email invalide",
    error: true
  }
}`,...(O=(N=i.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var V,_,$;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: "Référence",
    placeholder: "REF-2024-001",
    disabled: true
  }
}`,...($=(_=c.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var A,M,w;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <InputFieldOutlined label="Notes" placeholder="Ajoutez des notes..." value={value} onChange={e => setValue(e.target.value)} hintText={\`\${value.length} caractères\`} />;
  }
}`,...(w=(M=d.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};const de=["Basic","Required","WithHintText","WithIcon","WithCurrencyIcon","RequiredWithIcon","WithError","Disabled","Interactive"];export{a as Basic,c as Disabled,d as Interactive,t as Required,l as RequiredWithIcon,o as WithCurrencyIcon,i as WithError,s as WithHintText,n as WithIcon,de as __namedExportsOrder,ce as default};
