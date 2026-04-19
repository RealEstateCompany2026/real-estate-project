import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as c}from"./Badge-DS_tmhFu.js";import{B as A}from"./Button-nkpS-x_8.js";import{A as D}from"./AiSuggestion-oBwrb1u-.js";import{C as L}from"./circle-user-DpLagki5.js";import{H as U}from"./home-HNgQxOBc.js";import{M as F}from"./maximize-2-BwNiMDGV.js";import{M as V}from"./map-pin-B0sOVehg.js";import{A as z}from"./arrow-right-CowbYVXw.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";function o({icon:s,children:d}){return e.jsxs("div",{className:"inline-flex gap-[4px] items-center shrink-0",children:[e.jsx("div",{className:"shrink-0 size-[20px] flex items-center justify-center",children:s}),e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:d})]})}function a(s){const{contactName:d,useCase:p,workflow:r,aiSuggestions:R=0,onView:P,onClick:M,className:O=""}=s,n="var(--icon-neutral-default)";return e.jsxs("div",{className:`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[70px] px-[20px] cursor-pointer transition-colors ${O}`.trim(),onClick:M,children:[e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx(o,{icon:e.jsx(L,{size:20,style:{color:n}}),children:d}),p==="recherche"&&e.jsxs(e.Fragment,{children:[e.jsx(o,{icon:e.jsx(U,{size:20,style:{color:n}}),children:s.propertyType}),e.jsx(o,{icon:e.jsx(F,{size:20,style:{color:n}}),children:s.surface}),e.jsx(o,{icon:e.jsx(V,{size:20,style:{color:n}}),children:s.city})]})]}),e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx("div",{className:"flex gap-[24px] items-center",children:p==="vente"?e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:r.recue,children:"REÇUE"}),e.jsx(c,{variant:r.transmise,children:"TRANSMISE"}),e.jsx(c,{variant:r.accord,children:"ACCORD"})]}):e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:r.envoyee,children:"ENVOYÉE"}),e.jsx(c,{variant:r.acceptee,children:"ACCEPTÉE"})]})}),e.jsxs(A,{variant:"ghost",size:"default",onClick:P,children:["Voir la promesse",e.jsx(z,{size:20})]}),e.jsx(D,{count:R})]})]})}a.__docgenInfo={description:"",methods:[],displayName:"ListPromesse"};const Z={title:"Design System/Organisms/ListPromesse",component:a,parameters:{layout:"padded",docs:{description:{component:"Ligne de liste promesse — 2 variantes : Vente (contact + REÇUE/TRANSMISE/ACCORD) et Recherche (contact + infos bien + ENVOYÉE/ACCEPTÉE)."}}}},t={args:{useCase:"vente",contactName:"Nathalie DUFLOT",workflow:{recue:"success",transmise:"success",accord:"success"},aiSuggestions:0}},i={args:{useCase:"vente",contactName:"Pierre MARTIN",workflow:{recue:"success",transmise:"warning",accord:"disabled"},aiSuggestions:1}},u={args:{useCase:"recherche",contactName:"Nathalie DUFLOT",propertyType:"T3",surface:"120m²",city:"Carcassonne",workflow:{envoyee:"success",acceptee:"success"},aiSuggestions:0}},l={args:{useCase:"recherche",contactName:"Jean DUPONT",propertyType:"Maison",surface:"200m²",city:"Montpellier",workflow:{envoyee:"success",acceptee:"disabled"},aiSuggestions:2}},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[e.jsx(a,{useCase:"vente",contactName:"Nathalie DUFLOT",workflow:{recue:"success",transmise:"success",accord:"success"},aiSuggestions:0}),e.jsx(a,{useCase:"vente",contactName:"Pierre MARTIN",workflow:{recue:"success",transmise:"warning",accord:"disabled"},aiSuggestions:1}),e.jsx(a,{useCase:"recherche",contactName:"Jean DUPONT",propertyType:"T3",surface:"120m²",city:"Carcassonne",workflow:{envoyee:"success",acceptee:"disabled"},aiSuggestions:0})]})};var g,h,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    useCase: "vente",
    contactName: "Nathalie DUFLOT",
    workflow: {
      recue: "success",
      transmise: "success",
      accord: "success"
    },
    aiSuggestions: 0
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,N,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    useCase: "vente",
    contactName: "Pierre MARTIN",
    workflow: {
      recue: "success",
      transmise: "warning",
      accord: "disabled"
    },
    aiSuggestions: 1
  }
}`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var v,y,C;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    useCase: "recherche",
    contactName: "Nathalie DUFLOT",
    propertyType: "T3",
    surface: "120m²",
    city: "Carcassonne",
    workflow: {
      envoyee: "success",
      acceptee: "success"
    },
    aiSuggestions: 0
  }
}`,...(C=(y=u.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var j,T,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    useCase: "recherche",
    contactName: "Jean DUPONT",
    propertyType: "Maison",
    surface: "200m²",
    city: "Montpellier",
    workflow: {
      envoyee: "success",
      acceptee: "disabled"
    },
    aiSuggestions: 2
  }
}`,...(S=(T=l.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var k,b,E;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-[8px]">
      <ListPromesse useCase="vente" contactName="Nathalie DUFLOT" workflow={{
      recue: "success",
      transmise: "success",
      accord: "success"
    }} aiSuggestions={0} />
      <ListPromesse useCase="vente" contactName="Pierre MARTIN" workflow={{
      recue: "success",
      transmise: "warning",
      accord: "disabled"
    }} aiSuggestions={1} />
      <ListPromesse useCase="recherche" contactName="Jean DUPONT" propertyType="T3" surface="120m²" city="Carcassonne" workflow={{
      envoyee: "success",
      acceptee: "disabled"
    }} aiSuggestions={0} />
    </div>
}`,...(E=(b=m.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};const ee=["Vente","VenteEnCours","Recherche","RechercheEnCours","MultipleRows"];export{m as MultipleRows,u as Recherche,l as RechercheEnCours,t as Vente,i as VenteEnCours,ee as __namedExportsOrder,Z as default};
