import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as T}from"./Badge-DS_tmhFu.js";import{c as N}from"./createLucideIcon-CtqQySJq.js";import{E as J}from"./ellipsis-vertical-mEyo_0xJ.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=N("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=N("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);function V({active:t,onToggle:a}){return e.jsx("button",{type:"button",role:"switch","aria-checked":t,onClick:r=>{r.stopPropagation(),a==null||a(!t)},className:`relative inline-flex h-[30px] w-[48px] shrink-0 items-center rounded-full px-[3px] transition-colors ${t?"bg-[var(--success-500)]":"bg-[var(--border-disabled)]"}`,children:e.jsx("span",{className:`inline-block size-[24px] rounded-full bg-surface-neutral-default shadow transition-transform ${t?"translate-x-[18px]":"translate-x-0"}`})})}function p({icon:t,onClick:a,label:r}){return e.jsx("button",{type:"button","aria-label":r,onClick:l=>{l.stopPropagation(),a==null||a()},className:"flex items-center justify-center p-[12px] rounded-2xl hover:bg-[var(--surface-neutral-action)] transition-colors",children:t})}function s({name:t,tags:a=[],isActive:r,onToggle:l,onHistory:R,onDuplicate:k,onMore:S,onClick:E,className:C=""}){const u="var(--icon-neutral-default)";return e.jsxs("div",{className:`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[70px] px-[10px] cursor-pointer transition-colors ${C}`.trim(),onClick:E,children:[e.jsxs("div",{className:"flex gap-[20px] items-center flex-1 min-w-0",children:[e.jsx("span",{className:"text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap px-[10px] py-[8px]",children:t}),a.length>0&&e.jsx("div",{className:"flex gap-[8px] items-center",children:a.map(m=>e.jsx(T,{variant:"default",children:m},m))})]}),e.jsxs("div",{className:"flex gap-[30px] items-center shrink-0",children:[e.jsx(V,{active:r,onToggle:l}),e.jsxs("div",{className:"flex items-center px-[10px]",children:[e.jsx(p,{icon:e.jsx(M,{size:20,style:{color:u}}),onClick:R,label:"Historique"}),e.jsx(p,{icon:e.jsx(L,{size:20,style:{color:u}}),onClick:k,label:"Dupliquer"}),e.jsx(p,{icon:e.jsx(J,{size:20,style:{color:u}}),onClick:S,label:"Plus d'options"})]})]})]})}s.__docgenInfo={description:"",methods:[],displayName:"ListAutomatisation",props:{name:{required:!0,tsType:{name:"string"},description:"Nom de l'automatisation"},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:'Tags descriptifs (ex: ["Email", "Relance", "J+7"])',defaultValue:{value:"[]",computed:!1}},isActive:{required:!0,tsType:{name:"boolean"},description:"Si l'automatisation est active"},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(active: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"active"}],return:{name:"void"}}},description:"Callback changement d'état on/off"},onHistory:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback clic sur historique"},onDuplicate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback clic sur dupliquer"},onMore:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback clic sur menu (more)"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback au clic sur la ligne"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles",defaultValue:{value:'""',computed:!1}}}};const H={title:"Design System/Organisms/ListAutomatisation",component:s,parameters:{layout:"padded",docs:{description:{component:"Ligne de liste automatisation — nom + tags + switch on/off + icon buttons (historique, dupliquer, menu)."}}}},i={args:{name:"Relance acquéreur J+7",tags:["Email","Relance","J+7"],isActive:!0}},n={args:{name:"Notification propriétaire mensuelle",tags:["Email","Rapport"],isActive:!1}},o={args:{name:"Alerte nouveau bien correspondant",tags:[],isActive:!0}},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[e.jsx(s,{name:"Relance acquéreur J+7",tags:["Email","Relance","J+7"],isActive:!0}),e.jsx(s,{name:"Notification propriétaire mensuelle",tags:["Email","Rapport"],isActive:!1}),e.jsx(s,{name:"Alerte nouveau bien correspondant",tags:["Push","Matching"],isActive:!0}),e.jsx(s,{name:"Rappel visite J-1",tags:["SMS","Visite"],isActive:!0})]})};var d,x,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: "Relance acquéreur J+7",
    tags: ["Email", "Relance", "J+7"],
    isActive: true
  }
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,v,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: "Notification propriétaire mensuelle",
    tags: ["Email", "Rapport"],
    isActive: false
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,h,A;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: "Alerte nouveau bien correspondant",
    tags: [],
    isActive: true
  }
}`,...(A=(h=o.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var j,q,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-[8px]">
      <ListAutomatisation name="Relance acquéreur J+7" tags={["Email", "Relance", "J+7"]} isActive={true} />
      <ListAutomatisation name="Notification propriétaire mensuelle" tags={["Email", "Rapport"]} isActive={false} />
      <ListAutomatisation name="Alerte nouveau bien correspondant" tags={["Push", "Matching"]} isActive={true} />
      <ListAutomatisation name="Rappel visite J-1" tags={["SMS", "Visite"]} isActive={true} />
    </div>
}`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const O=["Active","Inactive","SansTags","MultipleRows"];export{i as Active,n as Inactive,c as MultipleRows,o as SansTags,O as __namedExportsOrder,H as default};
