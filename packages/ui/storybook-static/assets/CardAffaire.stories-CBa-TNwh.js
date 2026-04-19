import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./Badge-DS_tmhFu.js";import{C as n}from"./Chip-DbXFJYRR.js";import{K as H}from"./KpiIndicator-c9bDg6aa.js";import{D as J,T as $}from"./deal-types-BPgR1Mjr.js";import{H as Y}from"./home-HNgQxOBc.js";import{M as Z}from"./maximize-2-BwNiMDGV.js";import{M as F}from"./map-pin-B0sOVehg.js";import{T as W}from"./tag-RLp9pZil.js";import{U as X}from"./user-BnRui8Nx.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";import"./database-Dl4PIW4M.js";function g(){return e.jsx("div",{className:"divider w-full h-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] transition-colors"})}function ee(){return e.jsx("div",{className:"divider h-[84px] w-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] shrink-0 transition-colors"})}function A({dealType:c,mandateVariant:q="disabled",reference:L,propertyType:p,propertySurface:d,propertyCity:m,propertyPrice:u,clientName:x,lastActivityDate:f,winProbability:y=0,weightedRevenue:R,listingStatus:D,leadsCount:G,visitsCount:l,offerStatus:b,matchedPropertiesCount:N,applicationStatus:z,occupancyStatus:U,rentStatus:_,maintenanceStatus:k,mandateEndDate:v,onDealClick:B,className:Q=""}){const t="var(--icon-neutral-default)",K=()=>{switch(c){case"VENTE":return e.jsxs("div",{className:"flex flex-col gap-[8px] items-start w-full",children:[e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"Annonce"}),e.jsx(a,{variant:D??"disabled"})]}),e.jsxs("div",{className:"flex items-center gap-[16px]",children:[e.jsxs("span",{className:"text-sm font-semibold font-roboto text-content-body",children:[G??0," leads"]}),e.jsxs("span",{className:"text-sm font-semibold font-roboto text-content-body",children:[l??0," visites"]})]}),e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"Promesse"}),e.jsx(a,{variant:b??"disabled"})]})]});case"ACQUISITION":return e.jsxs("div",{className:"flex flex-col gap-[8px] items-start w-full",children:[e.jsxs("span",{className:"text-sm font-semibold font-roboto text-content-body",children:[N??0," biens matchés"]}),e.jsxs("span",{className:"text-sm font-semibold font-roboto text-content-body",children:[l??0," visites"]}),e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"Promesse"}),e.jsx(a,{variant:b??"disabled"})]})]});case"LOCATION":return e.jsxs("div",{className:"flex flex-col gap-[8px] items-start w-full",children:[e.jsxs("span",{className:"text-sm font-semibold font-roboto text-content-body",children:[N??0," biens matchés"]}),e.jsxs("span",{className:"text-sm font-semibold font-roboto text-content-body",children:[l??0," visites"]}),e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"Dossier"}),e.jsx(a,{variant:z??"disabled"})]})]});case"GESTION":return e.jsxs("div",{className:"flex flex-col gap-[8px] items-start w-full",children:[e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"Occupation"}),e.jsx(a,{variant:U??"disabled"})]}),e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"Loyer"}),e.jsx(a,{variant:_??"disabled"})]}),e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"Entretien"}),e.jsx(a,{variant:k??"disabled"})]}),v&&e.jsxs("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:["Échéance ",v]})]});default:return null}};return e.jsxs("div",{className:`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex flex-col items-start pb-[20px] w-[350px] cursor-pointer transition-colors overflow-hidden ${Q}`.trim(),onClick:B,children:[e.jsxs("div",{className:"flex flex-col gap-[8px] items-start px-[20px] pt-[20px] w-full",children:[e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx(a,{variant:q,children:J[c]}),e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary whitespace-nowrap",children:L})]}),e.jsxs("div",{className:"flex flex-wrap gap-[8px] items-center",children:[p&&e.jsx(n,{size:"small",icon:e.jsx(Y,{size:16,style:{color:t}}),iconPosition:"left",children:p}),d&&e.jsx(n,{size:"small",icon:e.jsx(Z,{size:16,style:{color:t}}),iconPosition:"left",children:d}),m&&e.jsx(n,{size:"small",icon:e.jsx(F,{size:16,style:{color:t}}),iconPosition:"left",children:m}),u&&e.jsx(n,{size:"small",icon:e.jsx(W,{size:16,style:{color:t}}),iconPosition:"left",children:u})]}),x&&e.jsx(n,{size:"small",icon:e.jsx(X,{size:16,style:{color:t}}),iconPosition:"left",children:x}),f&&e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:f})]}),e.jsx(g,{}),e.jsxs("div",{className:"flex items-center gap-[16px] px-[20px] py-[16px] w-full",children:[e.jsx(H,{icon:e.jsx($,{size:16,style:{color:t}}),value:`${y}%`,percentage:y,variant:"vertical",className:"w-[90px]"}),e.jsx(ee,{}),e.jsxs("div",{className:"flex flex-col gap-[4px]",children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"CA pondéré"}),e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body whitespace-nowrap",children:R??"—"})]})]}),e.jsx(g,{}),e.jsx("div",{className:"px-[20px] pt-[16px] w-full",children:K()})]})}A.__docgenInfo={description:"",methods:[],displayName:"CardAffaire",props:{dealType:{required:!0,tsType:{name:"union",raw:"'VENTE' | 'ACQUISITION' | 'LOCATION' | 'GESTION'",elements:[{name:"literal",value:"'VENTE'"},{name:"literal",value:"'ACQUISITION'"},{name:"literal",value:"'LOCATION'"},{name:"literal",value:"'GESTION'"}]},description:""},mandateVariant:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:"",defaultValue:{value:'"disabled"',computed:!1}},reference:{required:!0,tsType:{name:"string"},description:""},propertyType:{required:!1,tsType:{name:"string"},description:""},propertySurface:{required:!1,tsType:{name:"string"},description:""},propertyCity:{required:!1,tsType:{name:"string"},description:""},propertyPrice:{required:!1,tsType:{name:"string"},description:""},clientName:{required:!1,tsType:{name:"string"},description:""},pipelineStage:{required:!1,tsType:{name:"union",raw:`| 'MANDAT'
| 'PROMOTION'
| 'VISITES'
| 'CLOSING'
| 'GESTION'
| 'RENOUVELLEMENT'`,elements:[{name:"literal",value:"'MANDAT'"},{name:"literal",value:"'PROMOTION'"},{name:"literal",value:"'VISITES'"},{name:"literal",value:"'CLOSING'"},{name:"literal",value:"'GESTION'"},{name:"literal",value:"'RENOUVELLEMENT'"}]},description:""},lastActivityDate:{required:!1,tsType:{name:"string"},description:""},winProbability:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},weightedRevenue:{required:!1,tsType:{name:"string"},description:""},listingStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},leadsCount:{required:!1,tsType:{name:"number"},description:""},visitsCount:{required:!1,tsType:{name:"number"},description:""},offerStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},matchedPropertiesCount:{required:!1,tsType:{name:"number"},description:""},applicationStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},occupancyStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},rentStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},maintenanceStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},mandateEndDate:{required:!1,tsType:{name:"string"},description:""},onDealClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const ye={title:"Design System/Organisms/CardAffaire",component:A,parameters:{layout:"padded",docs:{description:{component:"Card affaire immobilière pour vue Kanban — badge type + chips bien/client + KPI probabilité + CA pondéré + zone variable selon dealType. Layout vertical 350px."}}}},r={args:{dealType:"VENTE",mandateVariant:"success",reference:"MV-0042",propertyType:"T3",propertySurface:"85 m²",propertyCity:"Montpellier",propertyPrice:"320 000 €",clientName:"Jean Dupont",pipelineStage:"PROMOTION",winProbability:45,weightedRevenue:"4 500 €",lastActivityDate:"15 avr. 2026",leadsCount:8,visitsCount:3,listingStatus:"success",offerStatus:"disabled"}},s={args:{dealType:"ACQUISITION",mandateVariant:"warning",reference:"MRA-0018",propertyType:"Maison",propertyCity:"Lyon",clientName:"Marie Martin",pipelineStage:"VISITES",winProbability:60,weightedRevenue:"7 200 €",matchedPropertiesCount:12,visitsCount:5,offerStatus:"disabled"}},i={args:{dealType:"LOCATION",mandateVariant:"success",reference:"MRL-0007",clientName:"Pierre Lefèvre",pipelineStage:"PROMOTION",winProbability:35,weightedRevenue:"840 €",matchedPropertiesCount:6,visitsCount:2,applicationStatus:"warning"}},o={args:{dealType:"GESTION",mandateVariant:"success",reference:"MG-0031",propertyType:"T4",propertySurface:"110 m²",propertyCity:"Nîmes",propertyPrice:"1 200 €/mois",clientName:"Sophie Bernard",pipelineStage:"GESTION",winProbability:90,weightedRevenue:"2 160 €",occupancyStatus:"success",rentStatus:"success",maintenanceStatus:"disabled",mandateEndDate:"15 sept. 2027"}};var T,h,j;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    dealType: "VENTE",
    mandateVariant: "success",
    reference: "MV-0042",
    propertyType: "T3",
    propertySurface: "85 m²",
    propertyCity: "Montpellier",
    propertyPrice: "320 000 €",
    clientName: "Jean Dupont",
    pipelineStage: "PROMOTION",
    winProbability: 45,
    weightedRevenue: "4 500 €",
    lastActivityDate: "15 avr. 2026",
    leadsCount: 8,
    visitsCount: 3,
    listingStatus: "success",
    offerStatus: "disabled"
  }
}`,...(j=(h=r.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var S,V,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    dealType: "ACQUISITION",
    mandateVariant: "warning",
    reference: "MRA-0018",
    propertyType: "Maison",
    propertyCity: "Lyon",
    clientName: "Marie Martin",
    pipelineStage: "VISITES",
    winProbability: 60,
    weightedRevenue: "7 200 €",
    matchedPropertiesCount: 12,
    visitsCount: 5,
    offerStatus: "disabled"
  }
}`,...(w=(V=s.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var P,O,I;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    dealType: "LOCATION",
    mandateVariant: "success",
    reference: "MRL-0007",
    clientName: "Pierre Lefèvre",
    pipelineStage: "PROMOTION",
    winProbability: 35,
    weightedRevenue: "840 €",
    matchedPropertiesCount: 6,
    visitsCount: 2,
    applicationStatus: "warning"
  }
}`,...(I=(O=i.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var C,E,M;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    dealType: "GESTION",
    mandateVariant: "success",
    reference: "MG-0031",
    propertyType: "T4",
    propertySurface: "110 m²",
    propertyCity: "Nîmes",
    propertyPrice: "1 200 €/mois",
    clientName: "Sophie Bernard",
    pipelineStage: "GESTION",
    winProbability: 90,
    weightedRevenue: "2 160 €",
    occupancyStatus: "success",
    rentStatus: "success",
    maintenanceStatus: "disabled",
    mandateEndDate: "15 sept. 2027"
  }
}`,...(M=(E=o.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const be=["Vente","Acquisition","Location","Gestion"];export{s as Acquisition,o as Gestion,i as Location,r as Vente,be as __namedExportsOrder,ye as default};
