import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as xe}from"./index-BNURykns.js";import{B as r}from"./Badge-DS_tmhFu.js";import{C as p}from"./Chip-DbXFJYRR.js";import{K as ye}from"./KpiIndicator-c9bDg6aa.js";import{V as h}from"./VerticalDivider-DpK_tJYD.js";import{L as ge}from"./ListItemDivider-CWOGkFUD.js";import{D as he,P as ve,T as Ne}from"./deal-types-BPgR1Mjr.js";import{H as be}from"./home-HNgQxOBc.js";import{M as Te}from"./maximize-2-BwNiMDGV.js";import{M as Se}from"./map-pin-B0sOVehg.js";import{T as je}from"./tag-RLp9pZil.js";import{U as Ve}from"./user-BnRui8Nx.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-CtqQySJq.js";import"./database-Dl4PIW4M.js";function ee({dealType:v,mandateVariant:ae="disabled",reference:se,propertyType:N,propertySurface:b,propertyCity:T,propertyPrice:S,clientName:j,pipelineStage:V,lastActivityDate:w,winProbability:P=0,weightedRevenue:te,listingStatus:re,leadsCount:ne,visitsCount:g,offerStatus:E,matchedPropertiesCount:I,applicationStatus:ie,occupancyStatus:oe,rentStatus:le,maintenanceStatus:pe,mandateEndDate:O,onDealClick:C,className:ce="",theme:a="light",forceHover:c=!1}){const[de,A]=xe.useState(c),l=a==="dark",t=c||de,i=l?"#d0d1d4":"#444955",me=()=>l?t?"#333740":"#22252B":t?"#C7C8CB":"#ECEDEE",fe=()=>l?t?"#22252B":"#111215":t?"#ECEDEE":"#FFFFFF",s=()=>"#A1A4AA",n=()=>l?"#D0D1D4":"#444955",ue=()=>{switch(v){case"VENTE":return e.jsxs("div",{className:"flex flex-col gap-[8px] items-start",children:[e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"12px",fontWeight:400,color:s()},children:"Annonce"}),e.jsx(r,{variant:re??"disabled",theme:a})]}),e.jsxs("div",{className:"flex items-center gap-[16px]",children:[e.jsxs("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:600,color:n()},children:[ne??0," leads"]}),e.jsxs("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:600,color:n()},children:[g??0," visites"]})]}),e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"12px",fontWeight:400,color:s()},children:"Promesse"}),e.jsx(r,{variant:E??"disabled",theme:a})]})]});case"ACQUISITION":return e.jsxs("div",{className:"flex flex-col gap-[8px] items-start",children:[e.jsxs("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:600,color:n()},children:[I??0," biens matchés"]}),e.jsxs("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:600,color:n()},children:[g??0," visites"]}),e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"12px",fontWeight:400,color:s()},children:"Promesse"}),e.jsx(r,{variant:E??"disabled",theme:a})]})]});case"LOCATION":return e.jsxs("div",{className:"flex flex-col gap-[8px] items-start",children:[e.jsxs("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:600,color:n()},children:[I??0," biens matchés"]}),e.jsxs("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:600,color:n()},children:[g??0," visites"]}),e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"12px",fontWeight:400,color:s()},children:"Dossier"}),e.jsx(r,{variant:ie??"disabled",theme:a})]})]});case"GESTION":return e.jsxs("div",{className:"flex flex-col gap-[8px] items-start",children:[e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"12px",fontWeight:400,color:s()},children:"Occupation"}),e.jsx(r,{variant:oe??"disabled",theme:a})]}),e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"12px",fontWeight:400,color:s()},children:"Loyer"}),e.jsx(r,{variant:le??"disabled",theme:a})]}),e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"12px",fontWeight:400,color:s()},children:"Entretien"}),e.jsx(r,{variant:pe??"disabled",theme:a})]}),O&&e.jsxs("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"12px",fontWeight:400,color:s()},children:["Échéance ",O]})]});default:return null}};return e.jsxs("div",{className:ce,style:{paddingTop:"15px",paddingBottom:"15px"},children:[e.jsxs("div",{className:"flex items-center transition-colors",style:{width:"1191px",height:"120px",border:`1px solid ${me()}`,borderRadius:"16px",backgroundColor:fe(),cursor:C?"pointer":"default"},onMouseEnter:()=>!c&&A(!0),onMouseLeave:()=>!c&&A(!1),onClick:C,children:[e.jsxs("div",{className:"flex flex-col justify-center gap-[8px] px-[20px]",style:{width:"600px",height:"100%"},children:[e.jsxs("div",{className:"flex items-center gap-[10px]",children:[e.jsx(r,{variant:ae,label:he[v],theme:a}),e.jsx("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"12px",fontWeight:400,color:s(),whiteSpace:"nowrap"},children:se}),V&&e.jsxs("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"12px",fontWeight:400,color:s(),whiteSpace:"nowrap"},children:["· ",ve[V]]})]}),e.jsxs("div",{className:"flex items-center gap-[12px] flex-wrap",children:[N&&e.jsx(p,{size:"small",icon:e.jsx(be,{size:16,style:{color:i}}),iconPosition:"left",theme:a,children:N}),b&&e.jsx(p,{size:"small",icon:e.jsx(Te,{size:16,style:{color:i}}),iconPosition:"left",theme:a,children:b}),T&&e.jsx(p,{size:"small",icon:e.jsx(Se,{size:16,style:{color:i}}),iconPosition:"left",theme:a,children:T}),S&&e.jsx(p,{size:"small",icon:e.jsx(je,{size:16,style:{color:i}}),iconPosition:"left",theme:a,children:S})]}),e.jsxs("div",{className:"flex items-center gap-[12px]",children:[j&&e.jsx(p,{size:"small",icon:e.jsx(Ve,{size:16,style:{color:i}}),iconPosition:"left",theme:a,children:j}),w&&e.jsx("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"12px",fontWeight:400,color:s()},children:w})]})]}),e.jsxs("div",{className:"flex items-center",style:{width:"30px",height:"100%"},children:[e.jsx("div",{style:{width:"15px"}}),e.jsx("div",{style:{width:"1px",height:"84px"},children:e.jsx(h,{height:84,theme:a,variant:t?"hover":"default"})}),e.jsx("div",{style:{width:"14px"}})]}),e.jsxs("div",{className:"flex items-center gap-[24px] px-[20px]",style:{width:"561px",height:"100%"},children:[e.jsx("div",{style:{width:"90px"},children:e.jsx(ye,{icon:e.jsx(Ne,{size:16,style:{color:i}}),value:`${P}%`,percentage:P,variant:"vertical",hover:t,theme:a})}),e.jsxs("div",{className:"flex items-center",style:{width:"30px",height:"100%"},children:[e.jsx("div",{style:{width:"15px"}}),e.jsx("div",{style:{width:"1px",height:"84px"},children:e.jsx(h,{height:84,theme:a,variant:t?"hover":"default"})}),e.jsx("div",{style:{width:"14px"}})]}),e.jsxs("div",{className:"flex flex-col gap-[4px]",style:{minWidth:"100px"},children:[e.jsx("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"12px",fontWeight:400,color:s()},children:"CA pondéré"}),e.jsx("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"16px",fontWeight:600,color:n(),whiteSpace:"nowrap"},children:te??"—"})]}),e.jsxs("div",{className:"flex items-center",style:{width:"30px",height:"100%"},children:[e.jsx("div",{style:{width:"15px"}}),e.jsx("div",{style:{width:"1px",height:"84px"},children:e.jsx(h,{height:84,theme:a,variant:t?"hover":"default"})}),e.jsx("div",{style:{width:"14px"}})]}),e.jsx("div",{className:"flex-1",children:ue()})]})]}),e.jsx(ge,{})]})}ee.__docgenInfo={description:"",methods:[],displayName:"ListAffaire",props:{dealType:{required:!0,tsType:{name:"union",raw:"'VENTE' | 'ACQUISITION' | 'LOCATION' | 'GESTION'",elements:[{name:"literal",value:"'VENTE'"},{name:"literal",value:"'ACQUISITION'"},{name:"literal",value:"'LOCATION'"},{name:"literal",value:"'GESTION'"}]},description:""},mandateVariant:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:"",defaultValue:{value:'"disabled"',computed:!1}},reference:{required:!0,tsType:{name:"string"},description:""},propertyType:{required:!1,tsType:{name:"string"},description:""},propertySurface:{required:!1,tsType:{name:"string"},description:""},propertyCity:{required:!1,tsType:{name:"string"},description:""},propertyPrice:{required:!1,tsType:{name:"string"},description:""},clientName:{required:!1,tsType:{name:"string"},description:""},pipelineStage:{required:!1,tsType:{name:"union",raw:`| 'MANDAT'
| 'PROMOTION'
| 'VISITES'
| 'CLOSING'
| 'GESTION'
| 'RENOUVELLEMENT'`,elements:[{name:"literal",value:"'MANDAT'"},{name:"literal",value:"'PROMOTION'"},{name:"literal",value:"'VISITES'"},{name:"literal",value:"'CLOSING'"},{name:"literal",value:"'GESTION'"},{name:"literal",value:"'RENOUVELLEMENT'"}]},description:""},lastActivityDate:{required:!1,tsType:{name:"string"},description:""},winProbability:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},weightedRevenue:{required:!1,tsType:{name:"string"},description:""},listingStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},leadsCount:{required:!1,tsType:{name:"number"},description:""},visitsCount:{required:!1,tsType:{name:"number"},description:""},offerStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},matchedPropertiesCount:{required:!1,tsType:{name:"number"},description:""},applicationStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},occupancyStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},rentStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},maintenanceStatus:{required:!1,tsType:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>'},description:""},mandateEndDate:{required:!1,tsType:{name:"string"},description:""},onDealClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},theme:{required:!1,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:"",defaultValue:{value:'"light"',computed:!1}},forceHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ke={title:"Design System/Organisms/ListAffaire",component:ee,parameters:{layout:"padded",docs:{description:{component:"Ligne de liste affaire immobilière — badge type + chips bien/client + KPI probabilité + CA pondéré + zone variable selon dealType."}}}},o={args:{dealType:"VENTE",mandateVariant:"success",reference:"MV-0042",propertyType:"T3",propertySurface:"85 m²",propertyCity:"Montpellier",propertyPrice:"320 000 €",clientName:"Jean Dupont",pipelineStage:"PROMOTION",winProbability:45,weightedRevenue:"4 500 €",lastActivityDate:"15 avr. 2026",leadsCount:8,visitsCount:3,listingStatus:"success",offerStatus:"disabled"}},d={args:{dealType:"ACQUISITION",mandateVariant:"warning",reference:"MRA-0018",propertyType:"Maison",propertyCity:"Lyon",clientName:"Marie Martin",pipelineStage:"VISITES",winProbability:60,weightedRevenue:"7 200 €",matchedPropertiesCount:12,visitsCount:5,offerStatus:"disabled"}},m={args:{dealType:"LOCATION",mandateVariant:"success",reference:"MRL-0007",clientName:"Pierre Lefèvre",pipelineStage:"PROMOTION",winProbability:35,weightedRevenue:"840 €",matchedPropertiesCount:6,visitsCount:2,applicationStatus:"warning"}},f={args:{dealType:"GESTION",mandateVariant:"success",reference:"MG-0031",propertyType:"T4",propertySurface:"110 m²",propertyCity:"Nîmes",propertyPrice:"1 200 €/mois",clientName:"Sophie Bernard",pipelineStage:"GESTION",winProbability:90,weightedRevenue:"2 160 €",occupancyStatus:"success",rentStatus:"success",maintenanceStatus:"disabled",mandateEndDate:"15 sept. 2027"}},u={args:{...o.args,forceHover:!0}},x={args:{...o.args,theme:"dark"}},y={args:{dealType:"VENTE",mandateVariant:"disabled",reference:"MV-0043",pipelineStage:"MANDAT",winProbability:15}};var R,M,L;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(M=o.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var z,q,F;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var D,W,G;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(W=m.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var B,k,U;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(U=(k=f.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var _,H,Q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Vente.args,
    forceHover: true
  }
}`,...(Q=(H=u.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var K,J,$;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Vente.args,
    theme: "dark"
  }
}`,...($=(J=x.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var Y,Z,X;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    dealType: "VENTE",
    mandateVariant: "disabled",
    reference: "MV-0043",
    pipelineStage: "MANDAT",
    winProbability: 15
  }
}`,...(X=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:X.source}}};const Ue=["Vente","Acquisition","Location","Gestion","VenteHover","VenteDark","MandatNonSigne"];export{d as Acquisition,f as Gestion,m as Location,y as MandatNonSigne,o as Vente,x as VenteDark,u as VenteHover,Ue as __namedExportsOrder,ke as default};
