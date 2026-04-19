import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as D}from"./Badge-DS_tmhFu.js";import{A as O}from"./AiSuggestion-oBwrb1u-.js";import{I as L}from"./IconDpe-CXk4_5Y1.js";import{M as G}from"./map-pin-B0sOVehg.js";import{H as I}from"./home-HNgQxOBc.js";import{M as U}from"./maximize-2-BwNiMDGV.js";import{C as q}from"./circle-user-DpLagki5.js";import{C as E}from"./calendar-gRs8LC7V.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-CtqQySJq.js";import"./index-BNURykns.js";const k={active:{label:"ACTIVÉ",variant:"success"},dormant:{label:"DORMANT",variant:"disabled"},pending:{label:"EN ATTENTE",variant:"warning"},transferred:{label:"TRANSFÉRÉ",variant:"information"},archived:{label:"ARCHIVÉ",variant:"default"}};function a({icon:d,children:p}){return e.jsxs("div",{className:"inline-flex gap-[4px] items-center shrink-0",children:[e.jsx("div",{className:"shrink-0 size-[20px] flex items-center justify-center",children:d}),e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:p})]})}function t({city:d,propertyType:p,surface:M,dpeGrade:l,ownerName:h,status:C="active",date:c,aiSuggestions:P=0,onClick:w,className:R=""}){const r="var(--icon-neutral-default)",m=k[C];return e.jsxs("div",{className:`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[70px] pl-[33px] pr-[37px] cursor-pointer transition-colors ${R}`.trim(),onClick:w,children:[e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx(a,{icon:e.jsx(G,{size:20,style:{color:r}}),children:d}),e.jsx(a,{icon:e.jsx(I,{size:20,style:{color:r}}),children:p}),e.jsx(a,{icon:e.jsx(U,{size:20,style:{color:r}}),children:M}),l&&e.jsx(L,{type:l}),e.jsx(a,{icon:e.jsx(q,{size:20,style:{color:r}}),children:h})]}),e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx(D,{variant:m.variant,children:m.label}),c&&e.jsx(a,{icon:e.jsx(E,{size:20,style:{color:r}}),children:c}),e.jsx(O,{count:P})]})]})}t.__docgenInfo={description:"",methods:[],displayName:"ListCarnet",props:{city:{required:!0,tsType:{name:"string"},description:"Ville / commune"},propertyType:{required:!0,tsType:{name:"string"},description:"Type de bien (T3, Maison, etc.)"},surface:{required:!0,tsType:{name:"string"},description:'Surface (ex: "120m²")'},dpeGrade:{required:!1,tsType:{name:"union",raw:'"A" | "B" | "C" | "D" | "E" | "F" | "G"',elements:[{name:"literal",value:'"A"'},{name:"literal",value:'"B"'},{name:"literal",value:'"C"'},{name:"literal",value:'"D"'},{name:"literal",value:'"E"'},{name:"literal",value:'"F"'},{name:"literal",value:'"G"'}]},description:"Note DPE (A-G)"},ownerName:{required:!0,tsType:{name:"string"},description:'Nom du propriétaire (ex: "RASTAPOPULOS, Roberto")'},status:{required:!1,tsType:{name:"union",raw:'"active" | "dormant" | "pending" | "transferred" | "archived"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"dormant"'},{name:"literal",value:'"pending"'},{name:"literal",value:'"transferred"'},{name:"literal",value:'"archived"'}]},description:"Statut du carnet",defaultValue:{value:'"active"',computed:!1}},date:{required:!1,tsType:{name:"string"},description:"Date d'activation ou dernière mise à jour"},aiSuggestions:{required:!1,tsType:{name:"number"},description:"Nombre de suggestions IA",defaultValue:{value:"0",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback au clic"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles",defaultValue:{value:'""',computed:!1}}}};const Z={title:"Design System/Organisms/ListCarnet",component:t,parameters:{layout:"padded",docs:{description:{component:"Ligne de liste carnet d'entretien — infos bien + propriétaire + statut + date + suggestions IA."}}}},s={args:{city:"Montpellier",propertyType:"T3",surface:"120m²",dpeGrade:"A",ownerName:"RASTAPOPULOS, Roberto",status:"active",date:"12 fév. 2026",aiSuggestions:1}},n={args:{city:"Lyon",propertyType:"Maison",surface:"200m²",dpeGrade:"D",ownerName:"DUPONT, Marie",status:"dormant",date:"3 janv. 2025",aiSuggestions:0}},i={args:{city:"Paris",propertyType:"T2",surface:"45m²",dpeGrade:"C",ownerName:"MARTIN, Jean",status:"pending",date:"8 mars 2026",aiSuggestions:2}},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[e.jsx(t,{city:"Montpellier",propertyType:"T3",surface:"120m²",dpeGrade:"A",ownerName:"RASTAPOPULOS, Roberto",status:"active",date:"12 fév. 2026",aiSuggestions:1}),e.jsx(t,{city:"Lyon",propertyType:"Maison",surface:"200m²",dpeGrade:"D",ownerName:"DUPONT, Marie",status:"dormant",date:"3 janv. 2025",aiSuggestions:0}),e.jsx(t,{city:"Paris",propertyType:"T2",surface:"45m²",dpeGrade:"C",ownerName:"MARTIN, Jean",status:"pending",date:"8 mars 2026",aiSuggestions:2})]})};var u,g,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    city: "Montpellier",
    propertyType: "T3",
    surface: "120m²",
    dpeGrade: "A",
    ownerName: "RASTAPOPULOS, Roberto",
    status: "active",
    date: "12 fév. 2026",
    aiSuggestions: 1
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,v,T;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    city: "Lyon",
    propertyType: "Maison",
    surface: "200m²",
    dpeGrade: "D",
    ownerName: "DUPONT, Marie",
    status: "dormant",
    date: "3 janv. 2025",
    aiSuggestions: 0
  }
}`,...(T=(v=n.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var x,N,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    city: "Paris",
    propertyType: "T2",
    surface: "45m²",
    dpeGrade: "C",
    ownerName: "MARTIN, Jean",
    status: "pending",
    date: "8 mars 2026",
    aiSuggestions: 2
  }
}`,...(S=(N=i.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var j,A,b;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-[8px]">
      <ListCarnet city="Montpellier" propertyType="T3" surface="120m²" dpeGrade="A" ownerName="RASTAPOPULOS, Roberto" status="active" date="12 fév. 2026" aiSuggestions={1} />
      <ListCarnet city="Lyon" propertyType="Maison" surface="200m²" dpeGrade="D" ownerName="DUPONT, Marie" status="dormant" date="3 janv. 2025" aiSuggestions={0} />
      <ListCarnet city="Paris" propertyType="T2" surface="45m²" dpeGrade="C" ownerName="MARTIN, Jean" status="pending" date="8 mars 2026" aiSuggestions={2} />
    </div>
}`,...(b=(A=o.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};const ee=["Default","Dormant","Pending","MultipleRows"];export{s as Default,n as Dormant,o as MultipleRows,i as Pending,ee as __namedExportsOrder,Z as default};
