import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./Badge-DS_tmhFu.js";import{C as n}from"./Chip-DbXFJYRR.js";import{K as Z}from"./KpiIndicator-c9bDg6aa.js";import{D as F,P as X,T as ee}from"./deal-types-BPgR1Mjr.js";import{H as ae}from"./home-HNgQxOBc.js";import{M as te}from"./maximize-2-BwNiMDGV.js";import{M as ne}from"./map-pin-B0sOVehg.js";import{T as se}from"./tag-RLp9pZil.js";import{U as re}from"./user-BnRui8Nx.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";import"./database-Dl4PIW4M.js";function p(){return e.jsx("div",{className:"divider h-[84px] w-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] shrink-0 transition-colors"})}function G({dealType:d,mandateVariant:z="disabled",reference:U,propertyType:m,propertySurface:u,propertyCity:x,propertyPrice:f,clientName:y,pipelineStage:N,lastActivityDate:b,winProbability:v=0,weightedRevenue:_,listingStatus:B,leadsCount:k,visitsCount:c,offerStatus:g,matchedPropertiesCount:T,applicationStatus:Q,occupancyStatus:K,rentStatus:H,maintenanceStatus:J,mandateEndDate:h,onDealClick:$,className:W=""}){const t="var(--icon-neutral-default)",Y=()=>{switch(d){case"VENTE":return e.jsxs("div",{className:"flex flex-col gap-[8px] items-start",children:[e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"Annonce"}),e.jsx(a,{variant:B??"disabled"})]}),e.jsxs("div",{className:"flex items-center gap-[16px]",children:[e.jsxs("span",{className:"text-sm font-semibold font-roboto text-content-body",children:[k??0," leads"]}),e.jsxs("span",{className:"text-sm font-semibold font-roboto text-content-body",children:[c??0," visites"]})]}),e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"Promesse"}),e.jsx(a,{variant:g??"disabled"})]})]});case"ACQUISITION":return e.jsxs("div",{className:"flex flex-col gap-[8px] items-start",children:[e.jsxs("span",{className:"text-sm font-semibold font-roboto text-content-body",children:[T??0," biens matchés"]}),e.jsxs("span",{className:"text-sm font-semibold font-roboto text-content-body",children:[c??0," visites"]}),e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"Promesse"}),e.jsx(a,{variant:g??"disabled"})]})]});case"LOCATION":return e.jsxs("div",{className:"flex flex-col gap-[8px] items-start",children:[e.jsxs("span",{className:"text-sm font-semibold font-roboto text-content-body",children:[T??0," biens matchés"]}),e.jsxs("span",{className:"text-sm font-semibold font-roboto text-content-body",children:[c??0," visites"]}),e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"Dossier"}),e.jsx(a,{variant:Q??"disabled"})]})]});case"GESTION":return e.jsxs("div",{className:"flex flex-col gap-[8px] items-start",children:[e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"Occupation"}),e.jsx(a,{variant:K??"disabled"})]}),e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"Loyer"}),e.jsx(a,{variant:H??"disabled"})]}),e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"Entretien"}),e.jsx(a,{variant:J??"disabled"})]}),h&&e.jsxs("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:["Échéance ",h]})]});default:return null}};return e.jsxs("div",{className:`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center h-[120px] cursor-pointer transition-colors ${W}`.trim(),onClick:$,children:[e.jsxs("div",{className:"flex flex-col justify-center gap-[8px] px-[20px] shrink-0 h-full",style:{width:"600px"},children:[e.jsxs("div",{className:"flex items-center gap-[10px]",children:[e.jsx(a,{variant:z,children:F[d]}),e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary whitespace-nowrap",children:U}),N&&e.jsxs("span",{className:"text-xs font-normal font-roboto text-content-secondary whitespace-nowrap",children:["· ",X[N]]})]}),e.jsxs("div",{className:"flex items-center gap-[12px] flex-wrap",children:[m&&e.jsx(n,{size:"small",icon:e.jsx(ae,{size:16,style:{color:t}}),iconPosition:"left",children:m}),u&&e.jsx(n,{size:"small",icon:e.jsx(te,{size:16,style:{color:t}}),iconPosition:"left",children:u}),x&&e.jsx(n,{size:"small",icon:e.jsx(ne,{size:16,style:{color:t}}),iconPosition:"left",children:x}),f&&e.jsx(n,{size:"small",icon:e.jsx(se,{size:16,style:{color:t}}),iconPosition:"left",children:f})]}),e.jsxs("div",{className:"flex items-center gap-[12px]",children:[y&&e.jsx(n,{size:"small",icon:e.jsx(re,{size:16,style:{color:t}}),iconPosition:"left",children:y}),b&&e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:b})]})]}),e.jsx(p,{}),e.jsx(Z,{icon:e.jsx(ee,{size:16,style:{color:t}}),value:`${v}%`,percentage:v,variant:"vertical",className:"w-[90px]"}),e.jsx(p,{}),e.jsxs("div",{className:"flex flex-col gap-[4px] px-[20px]",style:{minWidth:"100px"},children:[e.jsx("span",{className:"text-xs font-normal font-roboto text-content-secondary",children:"CA pondéré"}),e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body whitespace-nowrap",children:_??"—"})]}),e.jsx(p,{}),e.jsx("div",{className:"flex-1 px-[20px]",children:Y()})]})}G.__docgenInfo={description:"",methods:[],displayName:"ListAffaire",props:{dealType:{required:!0,tsType:{name:"union",raw:"'VENTE' | 'ACQUISITION' | 'LOCATION' | 'GESTION'",elements:[{name:"literal",value:"'VENTE'"},{name:"literal",value:"'ACQUISITION'"},{name:"literal",value:"'LOCATION'"},{name:"literal",value:"'GESTION'"}]},description:""},mandateVariant:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:"",defaultValue:{value:'"disabled"',computed:!1}},reference:{required:!0,tsType:{name:"string"},description:""},propertyType:{required:!1,tsType:{name:"string"},description:""},propertySurface:{required:!1,tsType:{name:"string"},description:""},propertyCity:{required:!1,tsType:{name:"string"},description:""},propertyPrice:{required:!1,tsType:{name:"string"},description:""},clientName:{required:!1,tsType:{name:"string"},description:""},pipelineStage:{required:!1,tsType:{name:"union",raw:`| 'MANDAT'
| 'PROMOTION'
| 'VISITES'
| 'CLOSING'
| 'GESTION'
| 'RENOUVELLEMENT'`,elements:[{name:"literal",value:"'MANDAT'"},{name:"literal",value:"'PROMOTION'"},{name:"literal",value:"'VISITES'"},{name:"literal",value:"'CLOSING'"},{name:"literal",value:"'GESTION'"},{name:"literal",value:"'RENOUVELLEMENT'"}]},description:""},lastActivityDate:{required:!1,tsType:{name:"string"},description:""},winProbability:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},weightedRevenue:{required:!1,tsType:{name:"string"},description:""},listingStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},leadsCount:{required:!1,tsType:{name:"number"},description:""},visitsCount:{required:!1,tsType:{name:"number"},description:""},offerStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},matchedPropertiesCount:{required:!1,tsType:{name:"number"},description:""},applicationStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},occupancyStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},rentStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},maintenanceStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},mandateEndDate:{required:!1,tsType:{name:"string"},description:""},onDealClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const Te={title:"Design System/Organisms/ListAffaire",component:G,parameters:{layout:"padded",docs:{description:{component:"Ligne de liste affaire immobilière — badge type + chips bien/client + KPI probabilité + CA pondéré + zone variable selon dealType."}}}},s={args:{dealType:"VENTE",mandateVariant:"success",reference:"MV-0042",propertyType:"T3",propertySurface:"85 m²",propertyCity:"Montpellier",propertyPrice:"320 000 €",clientName:"Jean Dupont",pipelineStage:"PROMOTION",winProbability:45,weightedRevenue:"4 500 €",lastActivityDate:"15 avr. 2026",leadsCount:8,visitsCount:3,listingStatus:"success",offerStatus:"disabled"}},r={args:{dealType:"ACQUISITION",mandateVariant:"warning",reference:"MRA-0018",propertyType:"Maison",propertyCity:"Lyon",clientName:"Marie Martin",pipelineStage:"VISITES",winProbability:60,weightedRevenue:"7 200 €",matchedPropertiesCount:12,visitsCount:5,offerStatus:"disabled"}},i={args:{dealType:"LOCATION",mandateVariant:"success",reference:"MRL-0007",clientName:"Pierre Lefèvre",pipelineStage:"PROMOTION",winProbability:35,weightedRevenue:"840 €",matchedPropertiesCount:6,visitsCount:2,applicationStatus:"warning"}},o={args:{dealType:"GESTION",mandateVariant:"success",reference:"MG-0031",propertyType:"T4",propertySurface:"110 m²",propertyCity:"Nîmes",propertyPrice:"1 200 €/mois",clientName:"Sophie Bernard",pipelineStage:"GESTION",winProbability:90,weightedRevenue:"2 160 €",occupancyStatus:"success",rentStatus:"success",maintenanceStatus:"disabled",mandateEndDate:"15 sept. 2027"}},l={args:{dealType:"VENTE",mandateVariant:"disabled",reference:"MV-0043",pipelineStage:"MANDAT",winProbability:15}};var S,V,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(V=s.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var P,w,I;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(w=r.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var O,E,C;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(C=(E=i.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var M,A,L;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(L=(A=o.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var q,R,D;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    dealType: "VENTE",
    mandateVariant: "disabled",
    reference: "MV-0043",
    pipelineStage: "MANDAT",
    winProbability: 15
  }
}`,...(D=(R=l.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const he=["Vente","Acquisition","Location","Gestion","MandatNonSigne"];export{r as Acquisition,o as Gestion,i as Location,l as MandatNonSigne,s as Vente,he as __namedExportsOrder,Te as default};
