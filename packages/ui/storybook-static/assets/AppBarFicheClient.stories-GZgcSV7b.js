import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as A}from"./Badge-DS_tmhFu.js";import{K as a,M as R,S as T,F as D}from"./KpiIndicator-c9bDg6aa.js";import{A as V}from"./AiSuggestion-oBwrb1u-.js";import{A as q}from"./arrow-left-DG8bwFE_.js";import{D as M}from"./database-Dl4PIW4M.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";const b=({clientName:j="NOM, Prénom du client",tags:E=["VENDEUR","ACQUÉREUR"],qualification:r=64,engagement:o=82,conversion:c=24,reactivation:l=49,aiSuggestions:u=1,onBack:P})=>e.jsx("div",{className:"h-[100px] flex items-center px-8 bg-surface-neutral-default",children:e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("button",{onClick:P,className:"p-3 rounded-2xl transition-colors hover:opacity-70 text-content-body",children:e.jsx(q,{size:20})}),e.jsx("h4",{className:"whitespace-nowrap font-bold text-[28px] leading-[34px] tracking-[0.28px] text-content-headings",children:j}),E.map((S,y)=>e.jsx(A,{variant:"default",children:S},y)),e.jsx(a,{icon:e.jsx(M,{size:20,className:"text-icon-neutral-default"}),value:`${r}%`,percentage:r,variant:"straight"}),e.jsx(a,{icon:e.jsx(R,{size:20,className:"text-icon-neutral-default"}),value:`${o}%`,percentage:o,variant:"straight"}),e.jsx(a,{icon:e.jsx(T,{size:20,className:"text-icon-neutral-default"}),value:`${c}%`,percentage:c,variant:"straight"}),e.jsx(a,{icon:e.jsx(D,{size:20,className:"text-icon-neutral-default"}),value:`${l}%`,percentage:l,variant:"straight"}),u>0&&e.jsx(V,{count:u})]})});b.__docgenInfo={description:"",methods:[],displayName:"AppBarFicheClient",props:{clientName:{required:!1,tsType:{name:"string"},description:"Nom du client",defaultValue:{value:'"NOM, Prénom du client"',computed:!1}},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Tags du client",defaultValue:{value:'["VENDEUR", "ACQUÉREUR"]',computed:!1}},qualification:{required:!1,tsType:{name:"number"},description:"KPI Qualification (0-100)",defaultValue:{value:"64",computed:!1}},engagement:{required:!1,tsType:{name:"number"},description:"KPI Engagement (0-100)",defaultValue:{value:"82",computed:!1}},conversion:{required:!1,tsType:{name:"number"},description:"KPI Conversion (0-100)",defaultValue:{value:"24",computed:!1}},reactivation:{required:!1,tsType:{name:"number"},description:"KPI Réactivation (0-100)",defaultValue:{value:"49",computed:!1}},aiSuggestions:{required:!1,tsType:{name:"number"},description:"Nombre de suggestions IA",defaultValue:{value:"1",computed:!1}},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback lors du clic sur le bouton retour"}}};const H={title:"Design System/Organisms/AppBarFicheClient",component:b},n={args:{clientName:"Dupont, Jean-François",clientEmail:"jean-francois.dupont@email.fr",clientPhone:"+33 6 12 34 56 78",favoriteCount:5,businessCount:2,aiSuggestions:3,onBack:()=>console.log("Back clicked")}},t={args:{clientName:"Martin, Sophie",clientEmail:"sophie.martin@email.fr",clientPhone:"+33 6 98 76 54 32",favoriteCount:12,businessCount:7,aiSuggestions:5,onBack:()=>console.log("Back clicked")}},s={args:{clientName:"Rousseau, Marie",clientEmail:"marie.rousseau@email.fr",clientPhone:"+33 6 55 44 33 22",favoriteCount:0,businessCount:0,aiSuggestions:1,onBack:()=>console.log("Back clicked")}},i={args:{clientName:"Bernard, Pierre",clientEmail:"pierre.bernard@email.fr",clientPhone:void 0,favoriteCount:3,businessCount:1,aiSuggestions:2,onBack:()=>console.log("Back clicked")}};var m,d,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    clientName: "Dupont, Jean-François",
    clientEmail: "jean-francois.dupont@email.fr",
    clientPhone: "+33 6 12 34 56 78",
    favoriteCount: 5,
    businessCount: 2,
    aiSuggestions: 3,
    onBack: () => console.log("Back clicked")
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,f,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    clientName: "Martin, Sophie",
    clientEmail: "sophie.martin@email.fr",
    clientPhone: "+33 6 98 76 54 32",
    favoriteCount: 12,
    businessCount: 7,
    aiSuggestions: 5,
    onBack: () => console.log("Back clicked")
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,v,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    clientName: "Rousseau, Marie",
    clientEmail: "marie.rousseau@email.fr",
    clientPhone: "+33 6 55 44 33 22",
    favoriteCount: 0,
    businessCount: 0,
    aiSuggestions: 1,
    onBack: () => console.log("Back clicked")
  }
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var C,N,B;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    clientName: "Bernard, Pierre",
    clientEmail: "pierre.bernard@email.fr",
    clientPhone: undefined,
    favoriteCount: 3,
    businessCount: 1,
    aiSuggestions: 2,
    onBack: () => console.log("Back clicked")
  }
}`,...(B=(N=i.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const J=["Default","HighEngagement","NewClient","WithoutPhone"];export{n as Default,t as HighEngagement,s as NewClient,i as WithoutPhone,J as __namedExportsOrder,H as default};
