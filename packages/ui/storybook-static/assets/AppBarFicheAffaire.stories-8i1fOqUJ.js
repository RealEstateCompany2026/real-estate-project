import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as O}from"./Badge-DS_tmhFu.js";import{A as B}from"./AiSuggestion-oBwrb1u-.js";import{A as E}from"./arrow-left-DG8bwFE_.js";import{H as V}from"./home-HNgQxOBc.js";import{M as q}from"./maximize-2-BwNiMDGV.js";import{M as k}from"./map-pin-B0sOVehg.js";import{T as w}from"./tag-RLp9pZil.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-CtqQySJq.js";import"./index-BNURykns.js";const z={VENTE:"success",BAIL:"information",ACQUISITION:"warning",LOCATION:"default"};function i({icon:c,children:r}){return e.jsxs("div",{className:"inline-flex gap-[4px] items-center shrink-0",children:[e.jsx("div",{className:"shrink-0 size-[20px] flex items-center justify-center",children:c}),e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:r})]})}function h({dealId:c,dealType:r,propertyType:N,surface:S,city:j,price:v,aiSuggestions:C=0,onBack:L,onAiClick:M,className:b=""}){const s="var(--icon-neutral-default)";return e.jsx("div",{className:`bg-surface-neutral-default h-[100px] flex items-center px-[20px] py-[27px] ${b}`.trim(),children:e.jsxs("div",{className:"flex gap-[24px] items-center",children:[e.jsx("button",{type:"button",onClick:L,className:"p-[12px] rounded-2xl transition-colors hover:opacity-70 text-content-body",children:e.jsx(E,{size:20})}),e.jsx("h4",{className:"whitespace-nowrap font-bold text-[28px] leading-[34px] tracking-[0.28px] text-content-headings px-[10px] py-[10px]",children:c}),e.jsx(O,{variant:z[r],children:r}),e.jsx(i,{icon:e.jsx(V,{size:20,style:{color:s}}),children:N}),e.jsx(i,{icon:e.jsx(q,{size:20,style:{color:s}}),children:S}),e.jsx(i,{icon:e.jsx(k,{size:20,style:{color:s}}),children:j}),e.jsx(i,{icon:e.jsx(w,{size:20,style:{color:s}}),children:v}),e.jsx(B,{count:C,onClick:M})]})})}h.__docgenInfo={description:"",methods:[],displayName:"AppBarFicheAffaire",props:{dealId:{required:!0,tsType:{name:"string"},description:`Identifiant de l'affaire (ex: "MV.789.083.263")`},dealType:{required:!0,tsType:{name:"union",raw:'"VENTE" | "BAIL" | "ACQUISITION" | "LOCATION"',elements:[{name:"literal",value:'"VENTE"'},{name:"literal",value:'"BAIL"'},{name:"literal",value:'"ACQUISITION"'},{name:"literal",value:'"LOCATION"'}]},description:"Type d'affaire"},propertyType:{required:!0,tsType:{name:"string"},description:'Type de bien (ex: "T4", "Studio", "Maison")'},surface:{required:!0,tsType:{name:"string"},description:'Surface (ex: "84 m²")'},city:{required:!0,tsType:{name:"string"},description:"Ville du bien"},price:{required:!0,tsType:{name:"string"},description:'Prix affiché (ex: "360 000€")'},aiSuggestions:{required:!1,tsType:{name:"number"},description:"Nombre de suggestions IA",defaultValue:{value:"0",computed:!1}},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback retour"},onAiClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback clic AI suggestions"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles",defaultValue:{value:'""',computed:!1}}}};const K={title:"Design System/Organisms/AppBarFicheAffaire",component:h,parameters:{layout:"padded",docs:{description:{component:"Barre d'en-tête fiche affaire — deal ID + badge type + infos bien (type, surface, ville, prix) + AI suggestions."}}}},a={args:{dealId:"MV.789.083.263",dealType:"VENTE",propertyType:"T4",surface:"84 m²",city:"Charleville-Mézières",price:"360 000€",aiSuggestions:1}},t={args:{dealId:"MB.456.123.789",dealType:"BAIL",propertyType:"T2",surface:"45 m²",city:"Toulouse",price:"750€/mois",aiSuggestions:0}},n={args:{dealId:"MA.321.654.987",dealType:"ACQUISITION",propertyType:"Maison",surface:"120 m²",city:"Lyon",price:"520 000€",aiSuggestions:3}},o={args:{dealId:"ML.111.222.333",dealType:"LOCATION",propertyType:"Studio",surface:"25 m²",city:"Paris",price:"900€/mois",aiSuggestions:0}};var p,l,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    dealId: "MV.789.083.263",
    dealType: "VENTE",
    propertyType: "T4",
    surface: "84 m²",
    city: "Charleville-Mézières",
    price: "360 000€",
    aiSuggestions: 1
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,m,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    dealId: "MB.456.123.789",
    dealType: "BAIL",
    propertyType: "T2",
    surface: "45 m²",
    city: "Toulouse",
    price: "750€/mois",
    aiSuggestions: 0
  }
}`,...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,f,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    dealId: "MA.321.654.987",
    dealType: "ACQUISITION",
    propertyType: "Maison",
    surface: "120 m²",
    city: "Lyon",
    price: "520 000€",
    aiSuggestions: 3
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var T,I,A;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    dealId: "ML.111.222.333",
    dealType: "LOCATION",
    propertyType: "Studio",
    surface: "25 m²",
    city: "Paris",
    price: "900€/mois",
    aiSuggestions: 0
  }
}`,...(A=(I=o.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const W=["Vente","Bail","Acquisition","Location"];export{n as Acquisition,t as Bail,o as Location,a as Vente,W as __namedExportsOrder,K as default};
