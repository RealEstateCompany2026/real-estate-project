import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as d}from"./Badge-DS_tmhFu.js";import{B as O}from"./Button-nkpS-x_8.js";import{A as R}from"./AiSuggestion-oBwrb1u-.js";import{I}from"./IconDpe-CXk4_5Y1.js";import{M as L}from"./map-pin-B0sOVehg.js";import{H as G}from"./home-HNgQxOBc.js";import{M as C}from"./maximize-2-BwNiMDGV.js";import{C as B}from"./circle-user-DpLagki5.js";import{A as q}from"./arrow-right-CowbYVXw.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";function i({icon:c,children:l}){return e.jsxs("div",{className:"inline-flex gap-[4px] items-center shrink-0",children:[e.jsx("div",{className:"shrink-0 size-[20px] flex items-center justify-center",children:c}),e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:l})]})}function r({city:c,propertyType:l,surface:j,dpeGrade:u,ownerName:h,workflow:p,aiSuggestions:k=0,onView:M,onClick:P,className:D=""}){const s="var(--icon-neutral-default)";return e.jsxs("div",{className:`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[70px] pl-[34px] pr-[31px] cursor-pointer transition-colors ${D}`.trim(),onClick:P,children:[e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx(i,{icon:e.jsx(L,{size:20,style:{color:s}}),children:c}),e.jsx(i,{icon:e.jsx(G,{size:20,style:{color:s}}),children:l}),e.jsx(i,{icon:e.jsx(C,{size:20,style:{color:s}}),children:j}),u&&e.jsx(I,{type:u}),e.jsx(i,{icon:e.jsx(B,{size:20,style:{color:s}}),children:h})]}),e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsx(d,{variant:p.edition,children:"ÉDITION"}),e.jsx(d,{variant:p.revision,children:"RÉVISION"}),e.jsx(d,{variant:p.publication,children:"PUBLICATION"}),e.jsxs(O,{variant:"ghost",size:"default",onClick:M,children:["Voir",e.jsx(q,{size:20})]}),e.jsx(R,{count:k})]})]})}r.__docgenInfo={description:"",methods:[],displayName:"ListAnnonce",props:{city:{required:!0,tsType:{name:"string"},description:"Ville / commune"},propertyType:{required:!0,tsType:{name:"string"},description:"Type de bien (T3, Maison, etc.)"},surface:{required:!0,tsType:{name:"string"},description:'Surface (ex: "120m²")'},dpeGrade:{required:!1,tsType:{name:"union",raw:'"A" | "B" | "C" | "D" | "E" | "F" | "G"',elements:[{name:"literal",value:'"A"'},{name:"literal",value:'"B"'},{name:"literal",value:'"C"'},{name:"literal",value:'"D"'},{name:"literal",value:'"E"'},{name:"literal",value:'"F"'},{name:"literal",value:'"G"'}]},description:"Note DPE (A-G)"},ownerName:{required:!0,tsType:{name:"string"},description:"Nom du propriétaire"},workflow:{required:!0,tsType:{name:"AnnonceWorkflow"},description:"Statuts des 3 étapes du workflow"},aiSuggestions:{required:!1,tsType:{name:"number"},description:"Nombre de suggestions IA",defaultValue:{value:"0",computed:!1}},onView:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Callback au clic sur "Voir"'},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback au clic sur la ligne"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles",defaultValue:{value:'""',computed:!1}}}};const Z={title:"Design System/Organisms/ListAnnonce",component:r,parameters:{layout:"padded",docs:{description:{component:"Ligne de liste annonce immobilière — infos bien + propriétaire + 3 badges workflow (édition, révision, publication) + bouton Voir + suggestions IA."}}}},n={args:{city:"Montpellier",propertyType:"T3",surface:"120m²",dpeGrade:"A",ownerName:"RASTAPOPULOS, Roberto",workflow:{edition:"success",revision:"success",publication:"warning"},aiSuggestions:1}},o={args:{city:"Lyon",propertyType:"Maison",surface:"200m²",dpeGrade:"B",ownerName:"DUPONT, Marie",workflow:{edition:"success",revision:"success",publication:"success"},aiSuggestions:0}},a={args:{city:"Paris",propertyType:"T2",surface:"45m²",dpeGrade:"D",ownerName:"MARTIN, Jean",workflow:{edition:"warning",revision:"disabled",publication:"disabled"},aiSuggestions:3}},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[e.jsx(r,{city:"Montpellier",propertyType:"T3",surface:"120m²",dpeGrade:"A",ownerName:"RASTAPOPULOS, Roberto",workflow:{edition:"success",revision:"success",publication:"warning"},aiSuggestions:1}),e.jsx(r,{city:"Lyon",propertyType:"Maison",surface:"200m²",dpeGrade:"B",ownerName:"DUPONT, Marie",workflow:{edition:"success",revision:"success",publication:"success"},aiSuggestions:0}),e.jsx(r,{city:"Paris",propertyType:"T2",surface:"45m²",dpeGrade:"D",ownerName:"MARTIN, Jean",workflow:{edition:"warning",revision:"disabled",publication:"disabled"},aiSuggestions:3})]})};var m,g,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    city: "Montpellier",
    propertyType: "T3",
    surface: "120m²",
    dpeGrade: "A",
    ownerName: "RASTAPOPULOS, Roberto",
    workflow: {
      edition: "success",
      revision: "success",
      publication: "warning"
    },
    aiSuggestions: 1
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,w,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    city: "Lyon",
    propertyType: "Maison",
    surface: "200m²",
    dpeGrade: "B",
    ownerName: "DUPONT, Marie",
    workflow: {
      edition: "success",
      revision: "success",
      publication: "success"
    },
    aiSuggestions: 0
  }
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var T,b,v;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    city: "Paris",
    propertyType: "T2",
    surface: "45m²",
    dpeGrade: "D",
    ownerName: "MARTIN, Jean",
    workflow: {
      edition: "warning",
      revision: "disabled",
      publication: "disabled"
    },
    aiSuggestions: 3
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var N,A,S;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-[8px]">
      <ListAnnonce city="Montpellier" propertyType="T3" surface="120m²" dpeGrade="A" ownerName="RASTAPOPULOS, Roberto" workflow={{
      edition: "success",
      revision: "success",
      publication: "warning"
    }} aiSuggestions={1} />
      <ListAnnonce city="Lyon" propertyType="Maison" surface="200m²" dpeGrade="B" ownerName="DUPONT, Marie" workflow={{
      edition: "success",
      revision: "success",
      publication: "success"
    }} aiSuggestions={0} />
      <ListAnnonce city="Paris" propertyType="T2" surface="45m²" dpeGrade="D" ownerName="MARTIN, Jean" workflow={{
      edition: "warning",
      revision: "disabled",
      publication: "disabled"
    }} aiSuggestions={3} />
    </div>
}`,...(S=(A=t.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const ee=["Default","AllDone","EarlyStage","MultipleRows"];export{o as AllDone,n as Default,a as EarlyStage,t as MultipleRows,ee as __namedExportsOrder,Z as default};
