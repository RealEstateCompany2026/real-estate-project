import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as p}from"./Badge-DS_tmhFu.js";import{B as w}from"./Button-nkpS-x_8.js";import{A as D}from"./AiSuggestion-oBwrb1u-.js";import{C as U}from"./circle-user-DpLagki5.js";import{H as k}from"./home-HNgQxOBc.js";import{M as q}from"./maximize-2-BwNiMDGV.js";import{M as z}from"./map-pin-B0sOVehg.js";import{A as F}from"./arrow-right-CowbYVXw.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";function n({icon:d,children:u}){return e.jsxs("div",{className:"inline-flex gap-[4px] items-center shrink-0",children:[e.jsx("div",{className:"shrink-0 size-[20px] flex items-center justify-center",children:d}),e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:u})]})}function s({contactName:d,propertyType:u,surface:j,city:P,status:a,aiSuggestions:A=0,onView:O,onClick:I,className:R=""}){const r="var(--icon-neutral-default)";return e.jsxs("div",{className:`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[70px] px-[20px] cursor-pointer transition-colors ${R}`.trim(),onClick:I,children:[e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx(n,{icon:e.jsx(U,{size:20,style:{color:r}}),children:d}),e.jsx(n,{icon:e.jsx(k,{size:20,style:{color:r}}),children:u}),e.jsx(n,{icon:e.jsx(q,{size:20,style:{color:r}}),children:j}),e.jsx(n,{icon:e.jsx(z,{size:20,style:{color:r}}),children:P})]}),e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx(p,{variant:a.dossier.variant,children:a.dossier.label}),e.jsx(p,{variant:a.decision.variant,children:a.decision.label}),e.jsxs(w,{variant:"ghost",size:"default",onClick:O,children:["Voir le dossier",e.jsx(F,{size:20})]}),e.jsx(D,{count:A})]})]})}s.__docgenInfo={description:"",methods:[],displayName:"ListCandidatureLocataire",props:{contactName:{required:!0,tsType:{name:"string"},description:"Nom du contact candidat"},propertyType:{required:!0,tsType:{name:"string"},description:'Type de logement (ex: "T3")'},surface:{required:!0,tsType:{name:"string"},description:'Surface (ex: "120m²")'},city:{required:!0,tsType:{name:"string"},description:'Ville (ex: "Carcassonne")'},status:{required:!0,tsType:{name:"CandidatureLocataireStatus"},description:"Statuts de la candidature"},aiSuggestions:{required:!1,tsType:{name:"number"},description:"Nombre de suggestions IA",defaultValue:{value:"0",computed:!1}},onView:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Callback au clic sur "Voir le dossier"'},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback au clic sur la ligne"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles",defaultValue:{value:'""',computed:!1}}}};const ee={title:"Design System/Organisms/ListCandidatureLocataire",component:s,parameters:{layout:"padded",docs:{description:{component:"Ligne de liste candidature locataire — contact + type + surface + ville + badges dossier/décision + bouton voir le dossier + AI."}}}},t={args:{contactName:"Nathalie DUFLOT",propertyType:"T3",surface:"120m²",city:"Carcassonne",status:{dossier:{label:"COMPLET",variant:"success"},decision:{label:"ACCEPTÉ",variant:"success"}},aiSuggestions:0}},i={args:{contactName:"Pierre MARTIN",propertyType:"T2",surface:"65m²",city:"Toulouse",status:{dossier:{label:"COMPLET",variant:"success"},decision:{label:"EN ATTENTE",variant:"warning"}},aiSuggestions:2}},o={args:{contactName:"Jean DUPONT",propertyType:"T4",surface:"95m²",city:"Montpellier",status:{dossier:{label:"INCOMPLET",variant:"error"},decision:{label:"EN ATTENTE",variant:"disabled"}},aiSuggestions:0}},c={args:{contactName:"Marie LEFEVRE",propertyType:"Studio",surface:"30m²",city:"Lyon",status:{dossier:{label:"COMPLET",variant:"success"},decision:{label:"REFUSÉ",variant:"error"}},aiSuggestions:0}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[e.jsx(s,{contactName:"Nathalie DUFLOT",propertyType:"T3",surface:"120m²",city:"Carcassonne",status:{dossier:{label:"COMPLET",variant:"success"},decision:{label:"ACCEPTÉ",variant:"success"}},aiSuggestions:0}),e.jsx(s,{contactName:"Pierre MARTIN",propertyType:"T2",surface:"65m²",city:"Toulouse",status:{dossier:{label:"COMPLET",variant:"success"},decision:{label:"EN ATTENTE",variant:"warning"}},aiSuggestions:2}),e.jsx(s,{contactName:"Jean DUPONT",propertyType:"T4",surface:"95m²",city:"Montpellier",status:{dossier:{label:"INCOMPLET",variant:"error"},decision:{label:"EN ATTENTE",variant:"disabled"}},aiSuggestions:0})]})};var m,T,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    contactName: "Nathalie DUFLOT",
    propertyType: "T3",
    surface: "120m²",
    city: "Carcassonne",
    status: {
      dossier: {
        label: "COMPLET",
        variant: "success"
      },
      decision: {
        label: "ACCEPTÉ",
        variant: "success"
      }
    },
    aiSuggestions: 0
  }
}`,...(g=(T=t.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var y,f,N;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    contactName: "Pierre MARTIN",
    propertyType: "T2",
    surface: "65m²",
    city: "Toulouse",
    status: {
      dossier: {
        label: "COMPLET",
        variant: "success"
      },
      decision: {
        label: "EN ATTENTE",
        variant: "warning"
      }
    },
    aiSuggestions: 2
  }
}`,...(N=(f=i.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var v,x,E;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    contactName: "Jean DUPONT",
    propertyType: "T4",
    surface: "95m²",
    city: "Montpellier",
    status: {
      dossier: {
        label: "INCOMPLET",
        variant: "error"
      },
      decision: {
        label: "EN ATTENTE",
        variant: "disabled"
      }
    },
    aiSuggestions: 0
  }
}`,...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var b,C,L;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    contactName: "Marie LEFEVRE",
    propertyType: "Studio",
    surface: "30m²",
    city: "Lyon",
    status: {
      dossier: {
        label: "COMPLET",
        variant: "success"
      },
      decision: {
        label: "REFUSÉ",
        variant: "error"
      }
    },
    aiSuggestions: 0
  }
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var S,M,h;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-[8px]">
      <ListCandidatureLocataire contactName="Nathalie DUFLOT" propertyType="T3" surface="120m²" city="Carcassonne" status={{
      dossier: {
        label: "COMPLET",
        variant: "success"
      },
      decision: {
        label: "ACCEPTÉ",
        variant: "success"
      }
    }} aiSuggestions={0} />
      <ListCandidatureLocataire contactName="Pierre MARTIN" propertyType="T2" surface="65m²" city="Toulouse" status={{
      dossier: {
        label: "COMPLET",
        variant: "success"
      },
      decision: {
        label: "EN ATTENTE",
        variant: "warning"
      }
    }} aiSuggestions={2} />
      <ListCandidatureLocataire contactName="Jean DUPONT" propertyType="T4" surface="95m²" city="Montpellier" status={{
      dossier: {
        label: "INCOMPLET",
        variant: "error"
      },
      decision: {
        label: "EN ATTENTE",
        variant: "disabled"
      }
    }} aiSuggestions={0} />
    </div>
}`,...(h=(M=l.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};const se=["Accepte","EnAttente","DossierIncomplet","Refuse","MultipleRows"];export{t as Accepte,o as DossierIncomplet,i as EnAttente,l as MultipleRows,c as Refuse,se as __namedExportsOrder,ee as default};
