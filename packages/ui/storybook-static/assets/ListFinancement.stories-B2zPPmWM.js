import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as D}from"./Badge-DS_tmhFu.js";import{B as F}from"./Button-nkpS-x_8.js";import{A as R}from"./AiSuggestion-oBwrb1u-.js";import{C as w}from"./circle-user-DpLagki5.js";import{H as U}from"./home-HNgQxOBc.js";import{M as V}from"./maximize-2-BwNiMDGV.js";import{M as A}from"./map-pin-B0sOVehg.js";import{A as z}from"./arrow-right-CowbYVXw.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";function n({icon:s,children:u}){return e.jsxs("div",{className:"inline-flex gap-[4px] items-center shrink-0",children:[e.jsx("div",{className:"shrink-0 size-[20px] flex items-center justify-center",children:s}),e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:u})]})}function a(s){const{contactName:u,useCase:O,status:m,aiSuggestions:S=0,onView:P,onClick:I,className:E=""}=s,t="var(--icon-neutral-default)";return e.jsxs("div",{className:`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[70px] px-[20px] cursor-pointer transition-colors ${E}`.trim(),onClick:I,children:[e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx(n,{icon:e.jsx(w,{size:20,style:{color:t}}),children:u}),O==="recherche"&&e.jsxs(e.Fragment,{children:[e.jsx(n,{icon:e.jsx(U,{size:20,style:{color:t}}),children:s.propertyType}),e.jsx(n,{icon:e.jsx(V,{size:20,style:{color:t}}),children:s.surface}),e.jsx(n,{icon:e.jsx(A,{size:20,style:{color:t}}),children:s.city})]})]}),e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx(D,{variant:m.variant,children:m.label}),e.jsxs(F,{variant:"ghost",size:"default",onClick:P,children:["Voir les notes",e.jsx(z,{size:20})]}),e.jsx(R,{count:S})]})]})}a.__docgenInfo={description:"",methods:[],displayName:"ListFinancement"};const Z={title:"Design System/Organisms/ListFinancement",component:a,parameters:{layout:"padded",docs:{description:{component:"Ligne de liste dossier de financement — 2 variantes : Vente (contact + statut) et Recherche (contact + infos bien + statut)."}}}},r={args:{useCase:"vente",contactName:"Nathalie DUFLOT",status:{label:"INCOMPLET",variant:"success"},aiSuggestions:0}},c={args:{useCase:"vente",contactName:"Pierre MARTIN",status:{label:"COMPLET",variant:"success"},aiSuggestions:1}},i={args:{useCase:"recherche",contactName:"Nathalie DUFLOT",propertyType:"T3",surface:"120m²",city:"Carcassonne",status:{label:"INCOMPLET",variant:"warning"},aiSuggestions:0}},o={args:{useCase:"recherche",contactName:"Jean DUPONT",propertyType:"Maison",surface:"200m²",city:"Montpellier",status:{label:"VALIDÉ",variant:"success"},aiSuggestions:2}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[e.jsx(a,{useCase:"vente",contactName:"Nathalie DUFLOT",status:{label:"INCOMPLET",variant:"success"},aiSuggestions:0}),e.jsx(a,{useCase:"vente",contactName:"Pierre MARTIN",status:{label:"COMPLET",variant:"success"},aiSuggestions:1}),e.jsx(a,{useCase:"recherche",contactName:"Jean DUPONT",propertyType:"T3",surface:"120m²",city:"Carcassonne",status:{label:"INCOMPLET",variant:"warning"},aiSuggestions:0})]})};var p,d,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    useCase: "vente",
    contactName: "Nathalie DUFLOT",
    status: {
      label: "INCOMPLET",
      variant: "success"
    },
    aiSuggestions: 0
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,x,N;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    useCase: "vente",
    contactName: "Pierre MARTIN",
    status: {
      label: "COMPLET",
      variant: "success"
    },
    aiSuggestions: 1
  }
}`,...(N=(x=c.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var f,v,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    useCase: "recherche",
    contactName: "Nathalie DUFLOT",
    propertyType: "T3",
    surface: "120m²",
    city: "Carcassonne",
    status: {
      label: "INCOMPLET",
      variant: "warning"
    },
    aiSuggestions: 0
  }
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var T,y,b;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    useCase: "recherche",
    contactName: "Jean DUPONT",
    propertyType: "Maison",
    surface: "200m²",
    city: "Montpellier",
    status: {
      label: "VALIDÉ",
      variant: "success"
    },
    aiSuggestions: 2
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var j,L,M;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-[8px]">
      <ListFinancement useCase="vente" contactName="Nathalie DUFLOT" status={{
      label: "INCOMPLET",
      variant: "success"
    }} aiSuggestions={0} />
      <ListFinancement useCase="vente" contactName="Pierre MARTIN" status={{
      label: "COMPLET",
      variant: "success"
    }} aiSuggestions={1} />
      <ListFinancement useCase="recherche" contactName="Jean DUPONT" propertyType="T3" surface="120m²" city="Carcassonne" status={{
      label: "INCOMPLET",
      variant: "warning"
    }} aiSuggestions={0} />
    </div>
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const ee=["VenteIncomplet","VenteComplet","Recherche","RechercheValide","MultipleRows"];export{l as MultipleRows,i as Recherche,o as RechercheValide,c as VenteComplet,r as VenteIncomplet,ee as __namedExportsOrder,Z as default};
