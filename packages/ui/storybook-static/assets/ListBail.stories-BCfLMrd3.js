import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as p}from"./Badge-DS_tmhFu.js";import{B as R}from"./Button-nkpS-x_8.js";import{A as B}from"./AiSuggestion-oBwrb1u-.js";import{C as V}from"./circle-user-DpLagki5.js";import{H as D}from"./home-HNgQxOBc.js";import{M as U}from"./maximize-2-BwNiMDGV.js";import{M as q}from"./map-pin-B0sOVehg.js";import{A as P}from"./arrow-right-CowbYVXw.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";function i({icon:u,children:l}){return e.jsxs("div",{className:"inline-flex gap-[4px] items-center shrink-0",children:[e.jsx("div",{className:"shrink-0 size-[20px] flex items-center justify-center",children:u}),e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:l})]})}function s({contactName:u,propertyType:l,surface:M,city:E,workflow:d,aiSuggestions:L=0,onView:A,onClick:I,className:O=""}){const r="var(--icon-neutral-default)";return e.jsxs("div",{className:`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[70px] px-[20px] cursor-pointer transition-colors ${O}`.trim(),onClick:I,children:[e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx(i,{icon:e.jsx(V,{size:20,style:{color:r}}),children:u}),e.jsx(i,{icon:e.jsx(D,{size:20,style:{color:r}}),children:l}),e.jsx(i,{icon:e.jsx(U,{size:20,style:{color:r}}),children:M}),e.jsx(i,{icon:e.jsx(q,{size:20,style:{color:r}}),children:E})]}),e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx(p,{variant:d.edition,children:"ÉDITION"}),e.jsx(p,{variant:d.revision,children:"RÉVISION"}),e.jsx(p,{variant:d.signature,children:"SIGNATURE"}),e.jsxs(R,{variant:"ghost",size:"default",onClick:A,children:["Voir le bail",e.jsx(P,{size:20})]}),e.jsx(B,{count:L})]})]})}s.__docgenInfo={description:"",methods:[],displayName:"ListBail",props:{contactName:{required:!0,tsType:{name:"string"},description:"Nom du contact locataire"},propertyType:{required:!0,tsType:{name:"string"},description:'Type de logement (ex: "T3")'},surface:{required:!0,tsType:{name:"string"},description:'Surface (ex: "120m²")'},city:{required:!0,tsType:{name:"string"},description:'Ville (ex: "Carcassonne")'},workflow:{required:!0,tsType:{name:"BailWorkflow"},description:"Workflow du bail (édition / révision / signature)"},aiSuggestions:{required:!1,tsType:{name:"number"},description:"Nombre de suggestions IA",defaultValue:{value:"0",computed:!1}},onView:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Callback au clic sur "Voir le bail"'},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback au clic sur la ligne"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles",defaultValue:{value:'""',computed:!1}}}};const ee={title:"Design System/Organisms/ListBail",component:s,parameters:{layout:"padded",docs:{description:{component:"Ligne de liste bail — contact + type + surface + ville + 3 workflow badges (édition/révision/signature) + bouton voir le bail + AI."}}}},n={args:{contactName:"Nathalie DUFLOT",propertyType:"T3",surface:"120m²",city:"Carcassonne",workflow:{edition:"success",revision:"success",signature:"success"},aiSuggestions:0}},a={args:{contactName:"Pierre MARTIN",propertyType:"T2",surface:"65m²",city:"Toulouse",workflow:{edition:"success",revision:"warning",signature:"disabled"},aiSuggestions:1}},o={args:{contactName:"Jean DUPONT",propertyType:"T4",surface:"95m²",city:"Montpellier",workflow:{edition:"warning",revision:"disabled",signature:"disabled"},aiSuggestions:0}},t={args:{contactName:"Marie LEFEVRE",propertyType:"Studio",surface:"30m²",city:"Lyon",workflow:{edition:"success",revision:"error",signature:"disabled"},aiSuggestions:2}},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[e.jsx(s,{contactName:"Nathalie DUFLOT",propertyType:"T3",surface:"120m²",city:"Carcassonne",workflow:{edition:"success",revision:"success",signature:"success"},aiSuggestions:0}),e.jsx(s,{contactName:"Pierre MARTIN",propertyType:"T2",surface:"65m²",city:"Toulouse",workflow:{edition:"success",revision:"warning",signature:"disabled"},aiSuggestions:1}),e.jsx(s,{contactName:"Jean DUPONT",propertyType:"T4",surface:"95m²",city:"Montpellier",workflow:{edition:"warning",revision:"disabled",signature:"disabled"},aiSuggestions:0})]})};var m,g,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    contactName: "Nathalie DUFLOT",
    propertyType: "T3",
    surface: "120m²",
    city: "Carcassonne",
    workflow: {
      edition: "success",
      revision: "success",
      signature: "success"
    },
    aiSuggestions: 0
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,T,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    contactName: "Pierre MARTIN",
    propertyType: "T2",
    surface: "65m²",
    city: "Toulouse",
    workflow: {
      edition: "success",
      revision: "warning",
      signature: "disabled"
    },
    aiSuggestions: 1
  }
}`,...(x=(T=a.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var w,v,N;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    contactName: "Jean DUPONT",
    propertyType: "T4",
    surface: "95m²",
    city: "Montpellier",
    workflow: {
      edition: "warning",
      revision: "disabled",
      signature: "disabled"
    },
    aiSuggestions: 0
  }
}`,...(N=(v=o.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var b,h,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    contactName: "Marie LEFEVRE",
    propertyType: "Studio",
    surface: "30m²",
    city: "Lyon",
    workflow: {
      edition: "success",
      revision: "error",
      signature: "disabled"
    },
    aiSuggestions: 2
  }
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var j,k,C;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-[8px]">
      <ListBail contactName="Nathalie DUFLOT" propertyType="T3" surface="120m²" city="Carcassonne" workflow={{
      edition: "success",
      revision: "success",
      signature: "success"
    }} aiSuggestions={0} />
      <ListBail contactName="Pierre MARTIN" propertyType="T2" surface="65m²" city="Toulouse" workflow={{
      edition: "success",
      revision: "warning",
      signature: "disabled"
    }} aiSuggestions={1} />
      <ListBail contactName="Jean DUPONT" propertyType="T4" surface="95m²" city="Montpellier" workflow={{
      edition: "warning",
      revision: "disabled",
      signature: "disabled"
    }} aiSuggestions={0} />
    </div>
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const se=["ToutValide","EnCours","AEditer","Erreur","MultipleRows"];export{o as AEditer,a as EnCours,t as Erreur,c as MultipleRows,n as ToutValide,se as __namedExportsOrder,ee as default};
