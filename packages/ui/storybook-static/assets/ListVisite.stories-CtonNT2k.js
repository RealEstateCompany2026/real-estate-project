import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as c}from"./Badge-DS_tmhFu.js";import{B as F}from"./Button-nkpS-x_8.js";import{A as U}from"./AiSuggestion-oBwrb1u-.js";import{C as A}from"./calendar-gRs8LC7V.js";import{C as z}from"./circle-user-DpLagki5.js";import{H as P}from"./home-HNgQxOBc.js";import{M as I}from"./maximize-2-BwNiMDGV.js";import{M as B}from"./map-pin-B0sOVehg.js";import{A as E}from"./arrow-right-CowbYVXw.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";function n({icon:s,children:u}){return e.jsxs("div",{className:"inline-flex gap-[4px] items-center shrink-0",children:[e.jsx("div",{className:"shrink-0 size-[20px] flex items-center justify-center",children:s}),e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:u})]})}function t(s){const{dateTime:u,contactName:L,useCase:p,workflow:r,aiSuggestions:M=0,onView:O,onClick:D,className:V=""}=s,a="var(--icon-neutral-default)";return e.jsxs("div",{className:`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[70px] px-[20px] cursor-pointer transition-colors ${V}`.trim(),onClick:D,children:[e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx(n,{icon:e.jsx(A,{size:20,style:{color:a}}),children:u}),e.jsx(n,{icon:e.jsx(z,{size:20,style:{color:a}}),children:L}),p==="recherche"&&e.jsxs(e.Fragment,{children:[e.jsx(n,{icon:e.jsx(P,{size:20,style:{color:a}}),children:s.propertyType}),e.jsx(n,{icon:e.jsx(I,{size:20,style:{color:a}}),children:s.surface}),e.jsx(n,{icon:e.jsx(B,{size:20,style:{color:a}}),children:s.city})]})]}),e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx("div",{className:"flex gap-[24px] items-center",children:p==="vente"?e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:r.calendrier,children:"CALENDRIER"}),e.jsx(c,{variant:r.odj,children:"ODJ"}),e.jsx(c,{variant:r.cr,children:"CR"})]}):e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:r.programme,children:"PROGRAMMÉ"}),e.jsx(c,{variant:r.cr,children:"CR"})]})}),e.jsxs(F,{variant:"ghost",size:"default",onClick:O,children:["Voir le mandat",e.jsx(E,{size:20})]}),e.jsx(U,{count:M})]})]})}t.__docgenInfo={description:"",methods:[],displayName:"ListVisite"};const re={title:"Design System/Organisms/ListVisite",component:t,parameters:{layout:"padded",docs:{description:{component:"Ligne de liste visite — 2 variantes : Vente (date + contact + 3 badges workflow) et Recherche (date + contact + infos bien + 2 badges workflow)."}}}},o={args:{useCase:"vente",dateTime:"12 fév. 2026 à 14h00",contactName:"Nathalie DUFLOT",workflow:{calendrier:"success",odj:"success",cr:"disabled"},aiSuggestions:0}},i={args:{useCase:"vente",dateTime:"5 janv. 2026 à 10h00",contactName:"Pierre MARTIN",workflow:{calendrier:"success",odj:"success",cr:"success"},aiSuggestions:2}},l={args:{useCase:"recherche",dateTime:"12 fév. 2026 à 14h00",contactName:"Nathalie DUFLOT",propertyType:"T3",surface:"120m²",city:"Carcassonne",workflow:{programme:"success",cr:"disabled"},aiSuggestions:0}},m={args:{useCase:"recherche",dateTime:"3 mars 2026 à 16h30",contactName:"Jean DUPONT",propertyType:"Maison",surface:"200m²",city:"Montpellier",workflow:{programme:"success",cr:"success"},aiSuggestions:1}},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[e.jsx(t,{useCase:"vente",dateTime:"12 fév. 2026 à 14h00",contactName:"Nathalie DUFLOT",workflow:{calendrier:"success",odj:"success",cr:"disabled"},aiSuggestions:0}),e.jsx(t,{useCase:"vente",dateTime:"5 janv. 2026 à 10h00",contactName:"Pierre MARTIN",workflow:{calendrier:"success",odj:"success",cr:"success"},aiSuggestions:2}),e.jsx(t,{useCase:"recherche",dateTime:"12 fév. 2026 à 14h00",contactName:"Nathalie DUFLOT",propertyType:"T3",surface:"120m²",city:"Carcassonne",workflow:{programme:"success",cr:"disabled"},aiSuggestions:0})]})};var h,g,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    useCase: "vente",
    dateTime: "12 fév. 2026 à 14h00",
    contactName: "Nathalie DUFLOT",
    workflow: {
      calendrier: "success",
      odj: "success",
      cr: "disabled"
    },
    aiSuggestions: 0
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,j,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    useCase: "vente",
    dateTime: "5 janv. 2026 à 10h00",
    contactName: "Pierre MARTIN",
    workflow: {
      calendrier: "success",
      odj: "success",
      cr: "success"
    },
    aiSuggestions: 2
  }
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var w,N,T;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    useCase: "recherche",
    dateTime: "12 fév. 2026 à 14h00",
    contactName: "Nathalie DUFLOT",
    propertyType: "T3",
    surface: "120m²",
    city: "Carcassonne",
    workflow: {
      programme: "success",
      cr: "disabled"
    },
    aiSuggestions: 0
  }
}`,...(T=(N=l.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var C,y,k;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    useCase: "recherche",
    dateTime: "3 mars 2026 à 16h30",
    contactName: "Jean DUPONT",
    propertyType: "Maison",
    surface: "200m²",
    city: "Montpellier",
    workflow: {
      programme: "success",
      cr: "success"
    },
    aiSuggestions: 1
  }
}`,...(k=(y=m.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var b,S,R;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-[8px]">
      <ListVisite useCase="vente" dateTime="12 fév. 2026 à 14h00" contactName="Nathalie DUFLOT" workflow={{
      calendrier: "success",
      odj: "success",
      cr: "disabled"
    }} aiSuggestions={0} />
      <ListVisite useCase="vente" dateTime="5 janv. 2026 à 10h00" contactName="Pierre MARTIN" workflow={{
      calendrier: "success",
      odj: "success",
      cr: "success"
    }} aiSuggestions={2} />
      <ListVisite useCase="recherche" dateTime="12 fév. 2026 à 14h00" contactName="Nathalie DUFLOT" propertyType="T3" surface="120m²" city="Carcassonne" workflow={{
      programme: "success",
      cr: "disabled"
    }} aiSuggestions={0} />
    </div>
}`,...(R=(S=d.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};const ae=["Vente","VenteComplete","Recherche","RechercheComplete","MultipleRows"];export{d as MultipleRows,l as Recherche,m as RechercheComplete,o as Vente,i as VenteComplete,ae as __namedExportsOrder,re as default};
