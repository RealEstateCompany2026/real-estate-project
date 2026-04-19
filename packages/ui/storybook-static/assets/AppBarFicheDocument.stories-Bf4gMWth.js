import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as S}from"./Badge-DS_tmhFu.js";import{A as F}from"./arrow-left-DG8bwFE_.js";import{C as P}from"./circle-user-DpLagki5.js";import{C as U}from"./calendar-gRs8LC7V.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-CtqQySJq.js";import"./index-BNURykns.js";const w={"EN ATTENTE":"warning",REÇU:"information",VÉRIFIÉ:"success",EXPIRÉ:"error",REJETÉ:"error",ARCHIVÉ:"disabled"};function l({icon:i,children:a}){return e.jsxs("div",{className:"inline-flex gap-[4px] items-center shrink-0",children:[e.jsx("div",{className:"shrink-0 size-[20px] flex items-center justify-center",children:i}),e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:a})]})}function j({documentName:i,contactName:a,dealId:c,status:d,date:C,onBack:V,className:D=""}){const m="var(--icon-neutral-default)";return e.jsx("div",{className:`bg-surface-neutral-default h-[100px] flex items-center px-[20px] py-[27px] ${D}`.trim(),children:e.jsxs("div",{className:"flex gap-[24px] items-center",children:[e.jsx("button",{type:"button",onClick:V,className:"p-[12px] rounded-2xl transition-colors hover:opacity-70 text-content-body",children:e.jsx(F,{size:20})}),e.jsx("h4",{className:"whitespace-nowrap font-bold text-[28px] leading-[34px] tracking-[0.28px] text-content-headings px-[10px] py-[10px]",children:i}),a&&e.jsx(l,{icon:e.jsx(P,{size:20,style:{color:m}}),children:a}),c&&e.jsx("span",{className:"text-base font-normal font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:c}),e.jsx(S,{variant:w[d],children:d}),e.jsx(l,{icon:e.jsx(U,{size:20,style:{color:m}}),children:C})]})})}j.__docgenInfo={description:"",methods:[],displayName:"AppBarFicheDocument",props:{documentName:{required:!0,tsType:{name:"string"},description:"Nom du document"},contactName:{required:!1,tsType:{name:"string"},description:"Nom du contact associé (optionnel)"},dealId:{required:!1,tsType:{name:"string"},description:"ID de l'affaire associée (optionnel)"},status:{required:!0,tsType:{name:"union",raw:`| "EN ATTENTE"
| "REÇU"
| "VÉRIFIÉ"
| "EXPIRÉ"
| "REJETÉ"
| "ARCHIVÉ"`,elements:[{name:"literal",value:'"EN ATTENTE"'},{name:"literal",value:'"REÇU"'},{name:"literal",value:'"VÉRIFIÉ"'},{name:"literal",value:'"EXPIRÉ"'},{name:"literal",value:'"REJETÉ"'},{name:"literal",value:'"ARCHIVÉ"'}]},description:"Statut du document"},date:{required:!0,tsType:{name:"string"},description:'Date de création (ex: "03 jan. 2027")'},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback retour"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles",defaultValue:{value:'""',computed:!1}}}};const z={title:"Design System/Organisms/AppBarFicheDocument",component:j,parameters:{layout:"padded",docs:{description:{component:"Barre d'en-tête fiche document — back + nom document + contact + deal ID + badge statut + date."}}}},t={args:{documentName:"Compromis de vente",contactName:"Nathalie DUFLOT",dealId:"55679201",status:"EN ATTENTE",date:"03 jan. 2027"}},n={args:{documentName:"Diagnostic immobilier",contactName:"Pierre MARTIN",dealId:"44821093",status:"VÉRIFIÉ",date:"15 fév. 2027"}},r={args:{documentName:"Attestation d'assurance",contactName:"Jean DUPONT",status:"EXPIRÉ",date:"10 nov. 2026"}},s={args:{documentName:"Plan cadastral",dealId:"33567890",status:"REÇU",date:"22 mar. 2027"}},o={args:{documentName:"Ancien bail locatif",contactName:"Marie LEFEVRE",dealId:"11223344",status:"ARCHIVÉ",date:"5 sep. 2025"}};var p,u,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    documentName: "Compromis de vente",
    contactName: "Nathalie DUFLOT",
    dealId: "55679201",
    status: "EN ATTENTE",
    date: "03 jan. 2027"
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var N,E,g;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    documentName: "Diagnostic immobilier",
    contactName: "Pierre MARTIN",
    dealId: "44821093",
    status: "VÉRIFIÉ",
    date: "15 fév. 2027"
  }
}`,...(g=(E=n.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};var f,I,T;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    documentName: "Attestation d'assurance",
    contactName: "Jean DUPONT",
    status: "EXPIRÉ",
    date: "10 nov. 2026"
  }
}`,...(T=(I=r.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var R,h,A;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    documentName: "Plan cadastral",
    dealId: "33567890",
    status: "REÇU",
    date: "22 mar. 2027"
  }
}`,...(A=(h=s.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var v,y,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    documentName: "Ancien bail locatif",
    contactName: "Marie LEFEVRE",
    dealId: "11223344",
    status: "ARCHIVÉ",
    date: "5 sep. 2025"
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const M=["EnAttente","Verifie","Expire","SansContact","Archive"];export{o as Archive,t as EnAttente,r as Expire,s as SansContact,n as Verifie,M as __namedExportsOrder,z as default};
