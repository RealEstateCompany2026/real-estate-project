import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as y}from"./Badge-DS_tmhFu.js";import{K as f}from"./KpiIndicator-c9bDg6aa.js";import{A as P}from"./AiSuggestion-oBwrb1u-.js";import{I as K}from"./IconDpe-CXk4_5Y1.js";import{H as x}from"./home-HNgQxOBc.js";import{T as R}from"./tag-RLp9pZil.js";import{M as F}from"./map-pin-B0sOVehg.js";import{M as J}from"./maximize-2-BwNiMDGV.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";import"./database-Dl4PIW4M.js";function t(){return e.jsx("div",{className:"divider h-[84px] w-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] shrink-0 transition-colors"})}function o({icon:s,children:u}){return e.jsxs("div",{className:"inline-flex gap-[4px] items-center shrink-0",children:[e.jsx("div",{className:"shrink-0 size-[20px] flex items-center justify-center",children:s}),e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:u})]})}function n({imageUrl:s,operationType:u,price:w,hasCarnet:A=!1,city:B,propertyType:M,surface:O,dpeGrade:g,kpis:r,aiSuggestions:U=0,onClick:D,className:z=""}){const i="var(--icon-neutral-default)";return e.jsxs("div",{className:`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[120px] cursor-pointer transition-colors ${z}`.trim(),onClick:D,children:[e.jsxs("div",{className:"flex items-center shrink-0 h-[120px]",children:[e.jsx("div",{className:"h-[120px] w-[160px] shrink-0 overflow-hidden rounded-l-2xl",children:s?e.jsx("img",{src:s,alt:"Photo du bien",className:"size-full object-cover"}):e.jsx("div",{className:"size-full bg-surface-disabled flex items-center justify-center",children:e.jsx(x,{size:32,style:{color:i}})})}),e.jsxs("div",{className:"flex flex-col gap-[24px] items-start pl-[16px]",children:[e.jsxs("div",{className:"flex gap-[24px] items-center",children:[e.jsx(y,{variant:"default",children:u}),e.jsx(o,{icon:e.jsx(R,{size:20,style:{color:i}}),children:w}),A&&e.jsx(y,{variant:"success",children:"CARNET"})]}),e.jsxs("div",{className:"flex gap-[24px] items-center",children:[e.jsx(o,{icon:e.jsx(F,{size:20,style:{color:i}}),children:B}),e.jsx(o,{icon:e.jsx(x,{size:20,style:{color:i}}),children:M}),e.jsx(o,{icon:e.jsx(J,{size:20,style:{color:i}}),children:O}),g&&e.jsx(K,{type:g})]})]})]}),e.jsx(t,{}),e.jsx(f,{kpi:"qual",value:`${r.qualification}%`,percentage:r.qualification,variant:"vertical",className:"w-[77px]"}),e.jsx(t,{}),e.jsx(f,{kpi:"ent",value:`${r.entretien}`,percentage:r.entretien,variant:"vertical",className:"w-[78px]"}),e.jsx(t,{}),e.jsx(f,{kpi:"conv",value:`${r.conversion}%`,percentage:r.conversion,variant:"vertical",className:"w-[78px]"}),e.jsx(t,{}),e.jsx("div",{className:"flex flex-col items-center justify-center pr-[38px] py-[48px] shrink-0 w-[86px] h-[120px]",children:e.jsx(P,{count:U})})]})}n.__docgenInfo={description:"",methods:[],displayName:"ListBien",props:{imageUrl:{required:!1,tsType:{name:"string"},description:"URL de l'image du bien"},operationType:{required:!0,tsType:{name:"string"},description:"Type d'opération (VENTE, LOCATION, etc.)"},price:{required:!0,tsType:{name:"string"},description:'Prix affiché (ex: "450 000€")'},hasCarnet:{required:!1,tsType:{name:"boolean"},description:"Badge carnet d'entretien actif",defaultValue:{value:"false",computed:!1}},city:{required:!0,tsType:{name:"string"},description:"Ville / commune"},propertyType:{required:!0,tsType:{name:"string"},description:"Type de bien (T3, T4, Maison, etc.)"},surface:{required:!0,tsType:{name:"string"},description:'Surface (ex: "120m²")'},dpeGrade:{required:!1,tsType:{name:"union",raw:'"A" | "B" | "C" | "D" | "E" | "F" | "G"',elements:[{name:"literal",value:'"A"'},{name:"literal",value:'"B"'},{name:"literal",value:'"C"'},{name:"literal",value:'"D"'},{name:"literal",value:'"E"'},{name:"literal",value:'"F"'},{name:"literal",value:'"G"'}]},description:"Note DPE (A-G)"},kpis:{required:!0,tsType:{name:"ListBienKpi"},description:"KPI pourcentages (0-100)"},aiSuggestions:{required:!1,tsType:{name:"number"},description:"Nombre de suggestions IA",defaultValue:{value:"0",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback au clic"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles",defaultValue:{value:'""',computed:!1}}}};const te={title:"Design System/Organisms/ListBien",component:n,parameters:{layout:"padded",docs:{description:{component:"Ligne de liste bien immobilier — image + infos + 3 KPIs (qualification, entretien, conversion) + suggestions IA."}}}},a="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=320&h=240&fit=crop",p={args:{imageUrl:a,operationType:"VENTE",price:"450 000€",hasCarnet:!0,city:"Saint-Jean-de-Vedas",propertyType:"T3",surface:"120m²",dpeGrade:"A",kpis:{qualification:64,entretien:38,conversion:24},aiSuggestions:1}},c={args:{imageUrl:a,operationType:"LOCATION",price:"1 200€/mois",hasCarnet:!1,city:"Montpellier",propertyType:"T2",surface:"55m²",dpeGrade:"C",kpis:{qualification:85,entretien:72,conversion:45},aiSuggestions:3}},l={args:{imageUrl:a,operationType:"VENTE",price:"180 000€",hasCarnet:!1,city:"Nîmes",propertyType:"T1",surface:"32m²",dpeGrade:"F",kpis:{qualification:15,entretien:10,conversion:5},aiSuggestions:0}},d={args:{operationType:"VENTE",price:"320 000€",hasCarnet:!0,city:"Lyon",propertyType:"Maison",surface:"95m²",dpeGrade:"B",kpis:{qualification:78,entretien:55,conversion:60},aiSuggestions:2}},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[e.jsx(n,{imageUrl:a,operationType:"VENTE",price:"450 000€",hasCarnet:!0,city:"Saint-Jean-de-Vedas",propertyType:"T3",surface:"120m²",dpeGrade:"A",kpis:{qualification:64,entretien:38,conversion:24},aiSuggestions:1}),e.jsx(n,{imageUrl:a,operationType:"LOCATION",price:"1 200€/mois",hasCarnet:!1,city:"Montpellier",propertyType:"T2",surface:"55m²",dpeGrade:"D",kpis:{qualification:45,entretien:72,conversion:85},aiSuggestions:3}),e.jsx(n,{operationType:"VENTE",price:"180 000€",hasCarnet:!1,city:"Nîmes",propertyType:"T1",surface:"32m²",dpeGrade:"G",kpis:{qualification:15,entretien:10,conversion:5},aiSuggestions:0})]})};var T,v,h;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(h=(v=p.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var N,j,S;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    imageUrl: sampleImage,
    operationType: "LOCATION",
    price: "1 200€/mois",
    hasCarnet: false,
    city: "Montpellier",
    propertyType: "T2",
    surface: "55m²",
    dpeGrade: "C",
    kpis: {
      qualification: 85,
      entretien: 72,
      conversion: 45
    },
    aiSuggestions: 3
  }
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var q,C,E;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    imageUrl: sampleImage,
    operationType: "VENTE",
    price: "180 000€",
    hasCarnet: false,
    city: "Nîmes",
    propertyType: "T1",
    surface: "32m²",
    dpeGrade: "F",
    kpis: {
      qualification: 15,
      entretien: 10,
      conversion: 5
    },
    aiSuggestions: 0
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var b,k,I;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    operationType: "VENTE",
    price: "320 000€",
    hasCarnet: true,
    city: "Lyon",
    propertyType: "Maison",
    surface: "95m²",
    dpeGrade: "B",
    kpis: {
      qualification: 78,
      entretien: 55,
      conversion: 60
    },
    aiSuggestions: 2
  }
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var L,V,G;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-[8px]">
      <ListBien imageUrl={sampleImage} operationType="VENTE" price="450 000€" hasCarnet={true} city="Saint-Jean-de-Vedas" propertyType="T3" surface="120m²" dpeGrade="A" kpis={{
      qualification: 64,
      entretien: 38,
      conversion: 24
    }} aiSuggestions={1} />
      <ListBien imageUrl={sampleImage} operationType="LOCATION" price="1 200€/mois" hasCarnet={false} city="Montpellier" propertyType="T2" surface="55m²" dpeGrade="D" kpis={{
      qualification: 45,
      entretien: 72,
      conversion: 85
    }} aiSuggestions={3} />
      <ListBien operationType="VENTE" price="180 000€" hasCarnet={false} city="Nîmes" propertyType="T1" surface="32m²" dpeGrade="G" kpis={{
      qualification: 15,
      entretien: 10,
      conversion: 5
    }} aiSuggestions={0} />
    </div>
}`,...(G=(V=m.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const oe=["Default","Location","LowScores","NoImage","MultipleRows"];export{p as Default,c as Location,l as LowScores,m as MultipleRows,d as NoImage,oe as __namedExportsOrder,te as default};
