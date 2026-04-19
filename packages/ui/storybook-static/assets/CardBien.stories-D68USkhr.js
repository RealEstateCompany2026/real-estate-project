import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as u}from"./Badge-DS_tmhFu.js";import{K as d}from"./KpiIndicator-c9bDg6aa.js";import{A as B}from"./AiSuggestion-oBwrb1u-.js";import{I as O}from"./IconDpe-CXk4_5Y1.js";import{H as f}from"./home-HNgQxOBc.js";import{T as D}from"./tag-RLp9pZil.js";import{M}from"./map-pin-B0sOVehg.js";import{M as z}from"./maximize-2-BwNiMDGV.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";import"./database-Dl4PIW4M.js";function g(){return e.jsx("div",{className:"divider w-full h-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] transition-colors"})}function x(){return e.jsx("div",{className:"divider h-[84px] w-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] shrink-0 transition-colors"})}function s({icon:n,children:c}){return e.jsxs("div",{className:"inline-flex gap-[4px] items-center shrink-0",children:[e.jsx("div",{className:"shrink-0 size-[20px] flex items-center justify-center",children:n}),e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:c})]})}function a({imageUrl:n,operationType:c,price:S,hasCarnet:w=!1,city:E,propertyType:I,surface:k,dpeGrade:m,kpis:r,aiSuggestions:A=0,onClick:V,className:G=""}){const i="var(--icon-neutral-default)";return e.jsxs("div",{className:`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex flex-col items-center pb-[24px] w-[350px] cursor-pointer transition-colors overflow-hidden ${G}`.trim(),onClick:V,children:[e.jsx("div",{className:"h-[160px] w-full shrink-0 overflow-hidden",children:n?e.jsx("img",{src:n,alt:"Photo du bien",className:"size-full object-cover"}):e.jsx("div",{className:"size-full bg-surface-disabled flex items-center justify-center",children:e.jsx(f,{size:40,style:{color:i}})})}),e.jsxs("div",{className:"flex flex-col gap-[16px] items-start w-full px-[20px] py-[16px]",children:[e.jsxs("div",{className:"flex gap-[16px] items-center flex-wrap",children:[e.jsx(u,{variant:"default",children:c}),e.jsx(s,{icon:e.jsx(D,{size:20,style:{color:i}}),children:S}),w&&e.jsx(u,{variant:"success",children:"CARNET"})]}),e.jsxs("div",{className:"flex gap-[16px] items-center flex-wrap",children:[e.jsx(s,{icon:e.jsx(M,{size:20,style:{color:i}}),children:E}),e.jsx(s,{icon:e.jsx(f,{size:20,style:{color:i}}),children:I}),e.jsx(s,{icon:e.jsx(z,{size:20,style:{color:i}}),children:k}),m&&e.jsx(O,{type:m})]})]}),e.jsxs("div",{className:"flex flex-col gap-[22px] items-center w-full",children:[e.jsx(g,{}),e.jsxs("div",{className:"flex gap-[24px] items-center",children:[e.jsx(d,{kpi:"qual",value:`${r.qualification}%`,percentage:r.qualification,variant:"vertical",className:"w-[77px]"}),e.jsx(x,{}),e.jsx(d,{kpi:"ent",value:`${r.entretien}`,percentage:r.entretien,variant:"vertical",className:"w-[78px]"}),e.jsx(x,{}),e.jsx(d,{kpi:"conv",value:`${r.conversion}%`,percentage:r.conversion,variant:"vertical",className:"w-[78px]"})]}),e.jsx(g,{})]}),e.jsx("div",{className:"pt-[22px]",children:e.jsx(B,{count:A})})]})}a.__docgenInfo={description:"",methods:[],displayName:"CardBien",props:{imageUrl:{required:!1,tsType:{name:"string"},description:"URL de l'image du bien"},operationType:{required:!0,tsType:{name:"string"},description:"Type d'opération (VENTE, LOCATION, etc.)"},price:{required:!0,tsType:{name:"string"},description:'Prix affiché (ex: "450 000€")'},hasCarnet:{required:!1,tsType:{name:"boolean"},description:"Badge carnet d'entretien actif",defaultValue:{value:"false",computed:!1}},city:{required:!0,tsType:{name:"string"},description:"Ville / commune"},propertyType:{required:!0,tsType:{name:"string"},description:"Type de bien (T3, T4, Maison, etc.)"},surface:{required:!0,tsType:{name:"string"},description:'Surface (ex: "120m²")'},dpeGrade:{required:!1,tsType:{name:"union",raw:'"A" | "B" | "C" | "D" | "E" | "F" | "G"',elements:[{name:"literal",value:'"A"'},{name:"literal",value:'"B"'},{name:"literal",value:'"C"'},{name:"literal",value:'"D"'},{name:"literal",value:'"E"'},{name:"literal",value:'"F"'},{name:"literal",value:'"G"'}]},description:"Note DPE (A-G)"},kpis:{required:!0,tsType:{name:"CardBienKpi"},description:"KPI pourcentages (0-100)"},aiSuggestions:{required:!1,tsType:{name:"number"},description:"Nombre de suggestions IA",defaultValue:{value:"0",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback au clic"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles",defaultValue:{value:'""',computed:!1}}}};const Z={title:"Design System/Organisms/CardBien",component:a,parameters:{layout:"padded",docs:{description:{component:"Carte bien immobilier — image + infos + 3 KPIs (qualification, entretien, conversion) + suggestions IA. Layout vertical."}}}},l="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&h=400&fit=crop",t={args:{imageUrl:l,operationType:"VENTE",price:"450 000€",hasCarnet:!0,city:"Saint-Jean-de-Vedas",propertyType:"T3",surface:"120m²",dpeGrade:"A",kpis:{qualification:64,entretien:38,conversion:24},aiSuggestions:1}},o={args:{imageUrl:l,operationType:"LOCATION",price:"1 200€/mois",hasCarnet:!1,city:"Montpellier",propertyType:"T2",surface:"55m²",dpeGrade:"B",kpis:{qualification:92,entretien:88,conversion:75},aiSuggestions:0}},p={render:()=>e.jsxs("div",{className:"flex gap-[16px] flex-wrap",children:[e.jsx(a,{imageUrl:l,operationType:"VENTE",price:"450 000€",hasCarnet:!0,city:"Saint-Jean-de-Vedas",propertyType:"T3",surface:"120m²",dpeGrade:"A",kpis:{qualification:64,entretien:38,conversion:24},aiSuggestions:1}),e.jsx(a,{imageUrl:l,operationType:"LOCATION",price:"1 200€/mois",hasCarnet:!1,city:"Montpellier",propertyType:"T2",surface:"55m²",dpeGrade:"D",kpis:{qualification:45,entretien:72,conversion:85},aiSuggestions:3}),e.jsx(a,{operationType:"VENTE",price:"180 000€",hasCarnet:!1,city:"Nîmes",propertyType:"T1",surface:"32m²",dpeGrade:"G",kpis:{qualification:15,entretien:10,conversion:5},aiSuggestions:0})]})};var v,y,T;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    imageUrl: sampleImage,
    operationType: "VENTE",
    price: "450 000€",
    hasCarnet: true,
    city: "Saint-Jean-de-Vedas",
    propertyType: "T3",
    surface: "120m²",
    dpeGrade: "A",
    kpis: {
      qualification: 64,
      entretien: 38,
      conversion: 24
    },
    aiSuggestions: 1
  }
}`,...(T=(y=t.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var h,j,N;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    imageUrl: sampleImage,
    operationType: "LOCATION",
    price: "1 200€/mois",
    hasCarnet: false,
    city: "Montpellier",
    propertyType: "T2",
    surface: "55m²",
    dpeGrade: "B",
    kpis: {
      qualification: 92,
      entretien: 88,
      conversion: 75
    },
    aiSuggestions: 0
  }
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var C,b,q;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex gap-[16px] flex-wrap">
      <CardBien imageUrl={sampleImage} operationType="VENTE" price="450 000€" hasCarnet={true} city="Saint-Jean-de-Vedas" propertyType="T3" surface="120m²" dpeGrade="A" kpis={{
      qualification: 64,
      entretien: 38,
      conversion: 24
    }} aiSuggestions={1} />
      <CardBien imageUrl={sampleImage} operationType="LOCATION" price="1 200€/mois" hasCarnet={false} city="Montpellier" propertyType="T2" surface="55m²" dpeGrade="D" kpis={{
      qualification: 45,
      entretien: 72,
      conversion: 85
    }} aiSuggestions={3} />
      <CardBien operationType="VENTE" price="180 000€" hasCarnet={false} city="Nîmes" propertyType="T1" surface="32m²" dpeGrade="G" kpis={{
      qualification: 15,
      entretien: 10,
      conversion: 5
    }} aiSuggestions={0} />
    </div>
}`,...(q=(b=p.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};const ee=["Default","HighScores","MultipleCards"];export{t as Default,o as HighScores,p as MultipleCards,ee as __namedExportsOrder,Z as default};
