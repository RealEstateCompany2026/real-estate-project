import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as P,I as d}from"./Button-nkpS-x_8.js";import{L as H}from"./ListItemDivider-CWOGkFUD.js";import{I as V}from"./InlineMessage-tIoz1SF6.js";import{P as X}from"./plus-DHzzy8q4.js";import{c as F}from"./createLucideIcon-CtqQySJq.js";import{C as G}from"./check-BPMjXyas.js";import{X as J}from"./x-C_NNgUki.js";import"./index-BNURykns.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./triangle-alert-WN3b9Z4q.js";import"./info-BiYvWz97.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=F("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);function D({status:i,tableName:o,targetTableName:l,errorMessage:p,onSelect:m,onRemap:c,className:O=""}){return e.jsxs("div",{className:O,children:[i==="select"&&e.jsxs("div",{className:"flex items-center justify-between gap-6 px-4 py-6 min-h-[80px] bg-surface-page",children:[e.jsx("div",{className:"w-[360px] shrink-0",children:e.jsx("p",{className:"text-content-body font-sans text-base leading-base",children:o})}),m&&e.jsx(P,{variant:"outlined",size:"md",onClick:m,iconLeft:e.jsx(X,{size:20}),children:"Sélectionner"})]}),i==="success"&&e.jsxs("div",{className:"flex items-center gap-6 px-4 py-6 min-h-[80px] bg-surface-page",children:[e.jsx("div",{className:"w-[360px] shrink-0",children:e.jsx("p",{className:"text-content-body font-sans text-base leading-base",children:o})}),c&&e.jsx(d,{icon:e.jsx(u,{size:20}),variant:"neutral",size:"md",onClick:c,title:"Remapper"}),e.jsxs("div",{className:"flex items-center gap-4 flex-1",children:[e.jsx("div",{className:"w-[160px] shrink-0",children:e.jsx("p",{className:"text-content-body font-sans text-base leading-base",children:l})}),e.jsx(G,{size:20,className:"text-icon-success",strokeWidth:1.5})]})]}),i==="error"&&e.jsxs("div",{className:"flex items-start gap-6 px-4 py-2 min-h-[80px] bg-surface-page",children:[e.jsx("div",{className:"w-[360px] shrink-0 pt-4",children:e.jsx("p",{className:"text-content-body font-sans text-base leading-base",children:o})}),c&&e.jsx("div",{className:"shrink-0 mt-2",children:e.jsx(d,{icon:e.jsx(u,{size:20}),variant:"neutral",size:"md",onClick:c,title:"Remapper"})}),e.jsxs("div",{className:"flex items-start gap-4 flex-1",children:[e.jsx("div",{className:"w-[160px] shrink-0 pt-4",children:e.jsx("p",{className:"text-content-body font-sans text-base leading-base",children:l})}),e.jsxs("div",{className:"flex items-start gap-4 flex-1",children:[e.jsx("div",{className:"shrink-0 pt-4",children:e.jsx(J,{size:20,className:"text-icon-error",strokeWidth:1.5})}),p&&e.jsx("div",{className:"flex-1 pt-2",children:e.jsx(V,{type:"error",message:p})})]})]})]}),e.jsx(H,{})]})}D.__docgenInfo={description:"",methods:[],displayName:"ListImport",props:{status:{required:!0,tsType:{name:"union",raw:'"select" | "success" | "error"',elements:[{name:"literal",value:'"select"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:""},tableName:{required:!0,tsType:{name:"string"},description:"Nom de la table (mode select) ou table source (mode success/error)"},targetTableName:{required:!1,tsType:{name:"string"},description:"Table cible — requis pour success et error"},errorMessage:{required:!1,tsType:{name:"string"},description:"Message d'erreur — requis pour error"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback sélection (mode select)"},onRemap:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback remapping (mode success/error)"},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const ie={title:"Design System/Organisms/ListImport",component:D},s={args:{status:"select",tableName:"clients_export.csv",onSelect:()=>alert("Sélectionner")}},r={args:{status:"success",tableName:"clients_export.csv",targetTableName:"Clients",onRemap:()=>alert("Remapper")}},a={args:{status:"error",tableName:"proprietes_mai_2024.xlsx",targetTableName:"Biens",errorMessage:"Colonnes manquantes : adresse, prix, surface",onRemap:()=>alert("Remapper")}},t={args:{status:"select",tableName:"clients_export.csv"}},n={args:{status:"success",tableName:"affaires_q1.csv",targetTableName:"Affaires"}};var x,g,f,h,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: "select",
    tableName: "clients_export.csv",
    onSelect: () => alert("Sélectionner")
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:"Mode sélection avec callback",...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};var v,N,j,y,k;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    status: "success",
    tableName: "clients_export.csv",
    targetTableName: "Clients",
    onRemap: () => alert("Remapper")
  }
}`,...(j=(N=r.parameters)==null?void 0:N.docs)==null?void 0:j.source},description:{story:"Mode succès avec mapping et remapping",...(k=(y=r.parameters)==null?void 0:y.docs)==null?void 0:k.description}}};var S,_,q,T,C;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: "error",
    tableName: "proprietes_mai_2024.xlsx",
    targetTableName: "Biens",
    errorMessage: "Colonnes manquantes : adresse, prix, surface",
    onRemap: () => alert("Remapper")
  }
}`,...(q=(_=a.parameters)==null?void 0:_.docs)==null?void 0:q.source},description:{story:"Mode erreur avec message et remapping",...(C=(T=a.parameters)==null?void 0:T.docs)==null?void 0:C.description}}};var M,R,w,I,L;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    status: "select",
    tableName: "clients_export.csv"
  }
}`,...(w=(R=t.parameters)==null?void 0:R.docs)==null?void 0:w.source},description:{story:"Mode sélection sans callback (bouton masqué)",...(L=(I=t.parameters)==null?void 0:I.docs)==null?void 0:L.description}}};var z,W,B,A,E;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    status: "success",
    tableName: "affaires_q1.csv",
    targetTableName: "Affaires"
  }
}`,...(B=(W=n.parameters)==null?void 0:W.docs)==null?void 0:B.source},description:{story:"Mode succès sans bouton remapping",...(E=(A=n.parameters)==null?void 0:A.docs)==null?void 0:E.description}}};const oe=["Select","Success","Error","SelectWithoutAction","SuccessWithoutRemap"];export{a as Error,s as Select,t as SelectWithoutAction,r as Success,n as SuccessWithoutRemap,oe as __namedExportsOrder,ie as default};
