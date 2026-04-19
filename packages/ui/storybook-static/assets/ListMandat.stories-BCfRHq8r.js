import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as t}from"./Badge-DS_tmhFu.js";import{B as V}from"./Button-nkpS-x_8.js";import{A as y}from"./AiSuggestion-oBwrb1u-.js";import{A as N}from"./arrow-right-CowbYVXw.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";function s({reference:S,workflow:o,aiSuggestions:M=0,onView:k,onClick:h,className:j=""}){return e.jsxs("div",{className:`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[70px] px-[20px] cursor-pointer transition-colors ${j}`.trim(),onClick:h,children:[e.jsx("div",{className:"px-[10px] py-[8px]",children:e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap",children:S})}),e.jsxs("div",{className:"flex gap-[24px] items-center shrink-0",children:[e.jsxs("div",{className:"flex gap-[24px] items-center",children:[e.jsx(t,{variant:o.edition,children:"ÉDITION"}),e.jsx(t,{variant:o.revision,children:"RÉVISION"}),e.jsx(t,{variant:o.signature,children:"SIGNATURE"})]}),e.jsxs(V,{variant:"ghost",size:"default",onClick:k,children:["Voir le mandat",e.jsx(N,{size:20})]}),e.jsx(y,{count:M})]})]})}s.__docgenInfo={description:"",methods:[],displayName:"ListMandat",props:{reference:{required:!0,tsType:{name:"string"},description:'Numéro de référence du mandat (ex: "MV.789.083.263")'},workflow:{required:!0,tsType:{name:"MandatWorkflow"},description:"Statuts des 3 étapes du workflow"},aiSuggestions:{required:!1,tsType:{name:"number"},description:"Nombre de suggestions IA",defaultValue:{value:"0",computed:!1}},onView:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Callback au clic sur "Voir le mandat"'},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback au clic sur la ligne"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles",defaultValue:{value:'""',computed:!1}}}};const O={title:"Design System/Organisms/ListMandat",component:s,parameters:{layout:"padded",docs:{description:{component:"Ligne de liste mandat — référence + 3 badges workflow (édition, révision, signature) + bouton Voir le mandat + suggestions IA."}}}},r={args:{reference:"MV.789.083.263",workflow:{edition:"success",revision:"disabled",signature:"disabled"},aiSuggestions:1}},n={args:{reference:"MV.456.123.789",workflow:{edition:"success",revision:"success",signature:"success"},aiSuggestions:0}},i={args:{reference:"ML.321.654.987",workflow:{edition:"success",revision:"warning",signature:"disabled"},aiSuggestions:2}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[e.jsx(s,{reference:"MV.789.083.263",workflow:{edition:"success",revision:"disabled",signature:"disabled"},aiSuggestions:1}),e.jsx(s,{reference:"MV.456.123.789",workflow:{edition:"success",revision:"success",signature:"success"},aiSuggestions:0}),e.jsx(s,{reference:"ML.321.654.987",workflow:{edition:"success",revision:"warning",signature:"disabled"},aiSuggestions:2})]})};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    reference: "MV.789.083.263",
    workflow: {
      edition: "success",
      revision: "disabled",
      signature: "disabled"
    },
    aiSuggestions: 1
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var l,g,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    reference: "MV.456.123.789",
    workflow: {
      edition: "success",
      revision: "success",
      signature: "success"
    },
    aiSuggestions: 0
  }
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,f,x;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    reference: "ML.321.654.987",
    workflow: {
      edition: "success",
      revision: "warning",
      signature: "disabled"
    },
    aiSuggestions: 2
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var w,v,b;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-[8px]">
      <ListMandat reference="MV.789.083.263" workflow={{
      edition: "success",
      revision: "disabled",
      signature: "disabled"
    }} aiSuggestions={1} />
      <ListMandat reference="MV.456.123.789" workflow={{
      edition: "success",
      revision: "success",
      signature: "success"
    }} aiSuggestions={0} />
      <ListMandat reference="ML.321.654.987" workflow={{
      edition: "success",
      revision: "warning",
      signature: "disabled"
    }} aiSuggestions={2} />
    </div>
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const _=["Default","AllSigned","InRevision","MultipleRows"];export{n as AllSigned,r as Default,i as InRevision,a as MultipleRows,_ as __namedExportsOrder,O as default};
