import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as w}from"./Badge-DS_tmhFu.js";import{B as E}from"./Button-nkpS-x_8.js";import{A as R}from"./AiSuggestion-oBwrb1u-.js";import{C as M}from"./circle-user-DpLagki5.js";import{C as O}from"./calendar-gRs8LC7V.js";import{A as I}from"./arrow-right-CowbYVXw.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";function d({icon:i,children:o}){return e.jsxs("div",{className:"inline-flex gap-[4px] items-center shrink-0",children:[e.jsx("div",{className:"shrink-0 size-[20px] flex items-center justify-center",children:i}),e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:o})]})}function a({contactName:i,dateTime:o,status:c,aiSuggestions:j=0,onView:A,onClick:y,className:P=""}){const l="var(--icon-neutral-default)";return e.jsxs("div",{className:`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[70px] px-[20px] cursor-pointer transition-colors ${P}`.trim(),onClick:y,children:[e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx(d,{icon:e.jsx(M,{size:20,style:{color:l}}),children:i}),e.jsx(d,{icon:e.jsx(O,{size:20,style:{color:l}}),children:o})]}),e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx(w,{variant:c.variant,children:c.label}),e.jsxs(E,{variant:"ghost",size:"default",onClick:A,children:["Voir les notes",e.jsx(I,{size:20})]}),e.jsx(R,{count:j})]})]})}a.__docgenInfo={description:"",methods:[],displayName:"ListActeNotarie",props:{contactName:{required:!0,tsType:{name:"string"},description:"Nom du contact"},dateTime:{required:!0,tsType:{name:"string"},description:`Date et heure de l'acte (ex: "12 mar 2026 à 17h30")`},status:{required:!0,tsType:{name:"signature",type:"object",raw:"{ label: string; variant: BadgeVariant }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>',required:!0}}]}},description:"Statut de l'acte notarié"},aiSuggestions:{required:!1,tsType:{name:"number"},description:"Nombre de suggestions IA",defaultValue:{value:"0",computed:!1}},onView:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Callback au clic sur "Voir les notes"'},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback au clic sur la ligne"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles",defaultValue:{value:'""',computed:!1}}}};const J={title:"Design System/Organisms/ListActeNotarie",component:a,parameters:{layout:"padded",docs:{description:{component:"Ligne de liste acte notarié — contact + date + badge statut + bouton voir les notes + AI."}}}},t={args:{contactName:"Nathalie DUFLOT",dateTime:"12 mar 2026 à 17h30",status:{label:"PROGRAMMÉ",variant:"warning"},aiSuggestions:0}},s={args:{contactName:"Pierre MARTIN",dateTime:"5 janv. 2026 à 10h00",status:{label:"SIGNÉ",variant:"success"},aiSuggestions:1}},r={args:{contactName:"Jean DUPONT",dateTime:"20 fév. 2026 à 14h00",status:{label:"EN ATTENTE",variant:"disabled"},aiSuggestions:0}},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[e.jsx(a,{contactName:"Nathalie DUFLOT",dateTime:"12 mar 2026 à 17h30",status:{label:"PROGRAMMÉ",variant:"warning"},aiSuggestions:0}),e.jsx(a,{contactName:"Pierre MARTIN",dateTime:"5 janv. 2026 à 10h00",status:{label:"SIGNÉ",variant:"success"},aiSuggestions:1}),e.jsx(a,{contactName:"Jean DUPONT",dateTime:"20 fév. 2026 à 14h00",status:{label:"EN ATTENTE",variant:"disabled"},aiSuggestions:0})]})};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    contactName: "Nathalie DUFLOT",
    dateTime: "12 mar 2026 à 17h30",
    status: {
      label: "PROGRAMMÉ",
      variant: "warning"
    },
    aiSuggestions: 0
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,N,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    contactName: "Pierre MARTIN",
    dateTime: "5 janv. 2026 à 10h00",
    status: {
      label: "SIGNÉ",
      variant: "success"
    },
    aiSuggestions: 1
  }
}`,...(v=(N=s.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var x,f,T;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    contactName: "Jean DUPONT",
    dateTime: "20 fév. 2026 à 14h00",
    status: {
      label: "EN ATTENTE",
      variant: "disabled"
    },
    aiSuggestions: 0
  }
}`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var b,h,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-[8px]">
      <ListActeNotarie contactName="Nathalie DUFLOT" dateTime="12 mar 2026 à 17h30" status={{
      label: "PROGRAMMÉ",
      variant: "warning"
    }} aiSuggestions={0} />
      <ListActeNotarie contactName="Pierre MARTIN" dateTime="5 janv. 2026 à 10h00" status={{
      label: "SIGNÉ",
      variant: "success"
    }} aiSuggestions={1} />
      <ListActeNotarie contactName="Jean DUPONT" dateTime="20 fév. 2026 à 14h00" status={{
      label: "EN ATTENTE",
      variant: "disabled"
    }} aiSuggestions={0} />
    </div>
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const _=["Programme","Signe","EnAttente","MultipleRows"];export{r as EnAttente,n as MultipleRows,t as Programme,s as Signe,_ as __namedExportsOrder,J as default};
