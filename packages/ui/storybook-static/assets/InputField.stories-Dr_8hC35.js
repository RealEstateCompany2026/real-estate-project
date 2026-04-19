import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as ee}from"./index-BNURykns.js";import{L as re}from"./Label-C5FOg3zv.js";import{T as ae}from"./TextField-Dhq33LVo.js";import{M as oe}from"./map-pin-B0sOVehg.js";import{c as te}from"./createLucideIcon-CtqQySJq.js";import{U as J}from"./user-BnRui8Nx.js";import{M as se}from"./mail-DXAFx0Ek.js";import"./info-BiYvWz97.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=te("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);function h({label:e,icon:m=!1,required:u=!1,hintText:f,leftIcon:K,rightIcon:Q,id:X,className:Y="",...Z}){const g=X||`input-${e.toLowerCase().replace(/\s+/g,"-")}`;return r.jsxs("div",{className:`flex flex-col gap-[12px] items-start ${Y}`.trim(),children:[r.jsx(re,{label:e,icon:m,required:u,htmlFor:g}),r.jsx(ae,{id:g,leftIcon:K,rightIcon:Q,ariaLabel:e,...Z}),f&&r.jsx("div",{className:"flex flex-col justify-center leading-[0] not-italic text-[14px] tracking-[0.14px] text-content-body font-roboto",children:r.jsx("p",{className:"leading-[16px]",children:f})})]})}h.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!0,tsType:{name:"string"},description:"Label du champ"},icon:{required:!1,tsType:{name:"boolean"},description:"Afficher l'icône info dans le label",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Champ requis (affiche astérisque rouge)",defaultValue:{value:"false",computed:!1}},hintText:{required:!1,tsType:{name:"string"},description:"Texte d'aide sous le champ"},leftIcon:{required:!1,tsType:{name:"LucideIcon"},description:"Icône gauche du TextField"},rightIcon:{required:!1,tsType:{name:"LucideIcon"},description:"Icône droite du TextField"},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const fe={title:"Design System/Molecules/InputField",component:h},a={args:{label:"Nom",placeholder:"Entrez votre nom complet"}},o={args:{label:"Prénom",placeholder:"Entrez votre prénom",required:!0}},t={args:{label:"Email",placeholder:"exemple@email.com",hintText:"Nous utiliserons cet email pour les communications importantes"}},s={args:{label:"Identité",placeholder:"Nom et prénom",leftIcon:J}},n={args:{label:"Email",placeholder:"votre.email@example.com",rightIcon:se}},l={args:{label:"Téléphone",placeholder:"+33 6 12 34 56 78",leftIcon:x,rightIcon:x}},i={args:{label:"Adresse",placeholder:"123 rue de la Paix, 75000 Paris",leftIcon:oe,required:!0,icon:!0}},c={args:{label:"Code postal",placeholder:"75000",hintText:"Le code postal est invalide",error:!0}},d={args:{label:"Domaine",placeholder:"Impossible de modifier",disabled:!0}},p={render:()=>{const[e,m]=ee.useState("");return r.jsx(h,{label:"Nom du client",placeholder:"Entrez le nom du client",value:e,onChange:u=>m(u.target.value),required:!0,hintText:`Caractères saisis: ${e.length}`,leftIcon:J})}};var I,b,v;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Nom",
    placeholder: "Entrez votre nom complet"
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var q,T,E;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Prénom",
    placeholder: "Entrez votre prénom",
    required: true
  }
}`,...(E=(T=o.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var L,N,S;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "exemple@email.com",
    hintText: "Nous utiliserons cet email pour les communications importantes"
  }
}`,...(S=(N=t.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var P,W,y;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: "Identité",
    placeholder: "Nom et prénom",
    leftIcon: User
  }
}`,...(y=(W=s.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var j,C,F;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "votre.email@example.com",
    rightIcon: Mail
  }
}`,...(F=(C=n.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var M,z,R;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "Téléphone",
    placeholder: "+33 6 12 34 56 78",
    leftIcon: Phone,
    rightIcon: Phone
  }
}`,...(R=(z=l.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var V,A,D;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: "Adresse",
    placeholder: "123 rue de la Paix, 75000 Paris",
    leftIcon: MapPin,
    required: true,
    icon: true
  }
}`,...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var B,U,_;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Code postal",
    placeholder: "75000",
    hintText: "Le code postal est invalide",
    error: true
  }
}`,...(_=(U=c.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var $,k,H;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: "Domaine",
    placeholder: "Impossible de modifier",
    disabled: true
  }
}`,...(H=(k=d.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var O,w,G;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <InputField label="Nom du client" placeholder="Entrez le nom du client" value={value} onChange={e => setValue(e.target.value)} required hintText={\`Caractères saisis: \${value.length}\`} leftIcon={User} />;
  }
}`,...(G=(w=p.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};const ge=["Basic","Required","WithHintText","WithLeftIcon","WithRightIcon","WithBothIcons","RequiredWithIcon","WithError","Disabled","Interactive"];export{a as Basic,d as Disabled,p as Interactive,o as Required,i as RequiredWithIcon,l as WithBothIcons,c as WithError,t as WithHintText,s as WithLeftIcon,n as WithRightIcon,ge as __namedExportsOrder,fe as default};
