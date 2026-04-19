import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as c}from"./Badge-DS_tmhFu.js";import{C as b}from"./Chip-DbXFJYRR.js";import{K as j}from"./KpiIndicator-c9bDg6aa.js";import{A as L}from"./AiSuggestion-oBwrb1u-.js";import{A as C}from"./arrow-left-DG8bwFE_.js";import{U as M}from"./user-BnRui8Nx.js";import{D as O}from"./database-Dl4PIW4M.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";const y=({title:E="Bien",transactionType:h="À VENDRE",contactName:S="—",qualification:o=0,carnetActive:q=!1,mandatActive:R=!1,aiSuggestions:D=0,onBack:V})=>e.jsx("div",{className:"h-[100px] flex items-center px-8 bg-surface-neutral-default",children:e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("button",{onClick:V,className:"p-3 rounded-2xl transition-colors hover:opacity-70 text-content-body",children:e.jsx(C,{size:20})}),e.jsx("h4",{className:"whitespace-nowrap font-bold text-[28px] leading-[34px] tracking-[0.28px] text-content-headings",children:E}),e.jsx(c,{variant:"default",children:h}),e.jsx(b,{size:"medium",icon:e.jsx(M,{size:20,className:"text-icon-neutral-default"}),children:S}),e.jsx(j,{icon:e.jsx(O,{size:20,className:"text-icon-neutral-default"}),value:`${o}%`,percentage:o,variant:"straight"}),e.jsx(c,{variant:q?"success":"disabled",children:"CARNET"}),e.jsx(c,{variant:R?"success":"disabled",children:"MANDAT"}),e.jsx(L,{count:D})]})});y.__docgenInfo={description:"",methods:[],displayName:"AppBarFicheBien",props:{title:{required:!1,tsType:{name:"string"},description:'Titre affiché — format "Type · surface"',defaultValue:{value:'"Bien"',computed:!1}},transactionType:{required:!1,tsType:{name:"string"},description:"Type de transaction (À VENDRE, À LOUER, etc.)",defaultValue:{value:'"À VENDRE"',computed:!1}},contactName:{required:!1,tsType:{name:"string"},description:"Nom du contact/propriétaire",defaultValue:{value:'"—"',computed:!1}},qualification:{required:!1,tsType:{name:"number"},description:"KPI Qualification (0-100)",defaultValue:{value:"0",computed:!1}},carnetActive:{required:!1,tsType:{name:"boolean"},description:"Carnet activé pour ce bien",defaultValue:{value:"false",computed:!1}},mandatActive:{required:!1,tsType:{name:"boolean"},description:"Au moins un mandat en cours",defaultValue:{value:"false",computed:!1}},aiSuggestions:{required:!1,tsType:{name:"number"},description:"Nombre de suggestions IA",defaultValue:{value:"0",computed:!1}},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback lors du clic sur le bouton retour"}}};const G={title:"Design System/Organisms/AppBarFicheBien",component:y},a={args:{title:"T3 · 75m²",transactionType:"À VENDRE",contactName:"Dupont, Jean-François",qualification:64,carnetActive:!0,mandatActive:!0,aiSuggestions:3,onBack:()=>console.log("Back clicked")}},t={args:{title:"T5 · 120m²",transactionType:"À LOUER",contactName:"Martin, Sophie",qualification:92,carnetActive:!0,mandatActive:!1,aiSuggestions:5,onBack:()=>console.log("Back clicked")}},n={args:{title:"T2 · 45m²",transactionType:"À VENDRE",contactName:"Bernard, Pierre",qualification:18,carnetActive:!1,mandatActive:!0,aiSuggestions:1,onBack:()=>console.log("Back clicked")}},i={args:{title:"Studio · 22m²",transactionType:"À VENDRE",contactName:"Rousseau, Marie",qualification:45,carnetActive:!1,mandatActive:!1,aiSuggestions:0,onBack:()=>console.log("Back clicked")}},s={args:{title:"T4 · 95m²",transactionType:"À LOUER",contactName:"Laurent, Claude",qualification:78,carnetActive:!0,mandatActive:!0,aiSuggestions:8,onBack:()=>console.log("Back clicked")}};var r,l,u;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: "T3 · 75m²",
    transactionType: "À VENDRE",
    contactName: "Dupont, Jean-François",
    qualification: 64,
    carnetActive: true,
    mandatActive: true,
    aiSuggestions: 3,
    onBack: () => console.log("Back clicked")
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: "T5 · 120m²",
    transactionType: "À LOUER",
    contactName: "Martin, Sophie",
    qualification: 92,
    carnetActive: true,
    mandatActive: false,
    aiSuggestions: 5,
    onBack: () => console.log("Back clicked")
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,f,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "T2 · 45m²",
    transactionType: "À VENDRE",
    contactName: "Bernard, Pierre",
    qualification: 18,
    carnetActive: false,
    mandatActive: true,
    aiSuggestions: 1,
    onBack: () => console.log("Back clicked")
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var A,B,k;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: "Studio · 22m²",
    transactionType: "À VENDRE",
    contactName: "Rousseau, Marie",
    qualification: 45,
    carnetActive: false,
    mandatActive: false,
    aiSuggestions: 0,
    onBack: () => console.log("Back clicked")
  }
}`,...(k=(B=i.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var N,T,x;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: "T4 · 95m²",
    transactionType: "À LOUER",
    contactName: "Laurent, Claude",
    qualification: 78,
    carnetActive: true,
    mandatActive: true,
    aiSuggestions: 8,
    onBack: () => console.log("Back clicked")
  }
}`,...(x=(T=s.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const W=["Default","HighQualification","LowQualification","NoBadgesActive","ManySuggestions"];export{a as Default,t as HighQualification,n as LowQualification,s as ManySuggestions,i as NoBadgesActive,W as __namedExportsOrder,G as default};
