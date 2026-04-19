import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as g}from"./index-BNURykns.js";import{c as x}from"./createLucideIcon-CtqQySJq.js";import{F as b,a as h,M as k}from"./message-square-DRIPxU_R.js";import{H as y}from"./home-HNgQxOBc.js";import{B,F as C}from"./files-BuB8oJgP.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=x("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),A=[{id:"profil",label:"Profil",icon:e.jsx(j,{size:20})},{id:"activites",label:"Activités",icon:e.jsx(b,{size:20})},{id:"affaires",label:"Affaires",icon:e.jsx(h,{size:20})},{id:"biens",label:"Biens",icon:e.jsx(y,{size:20})},{id:"carnet",label:"Carnet",icon:e.jsx(B,{size:20})},{id:"documents",label:"Documents",icon:e.jsx(C,{size:20})},{id:"messages",label:"Messages",icon:e.jsx(k,{size:20})}],p=({items:i=A,onItemClick:r})=>{const u=n=>{r&&r(n)};return e.jsx("div",{className:"px-5 py-10 bg-surface-neutral-default",children:e.jsx("div",{className:"flex items-center gap-[30px]",children:i.map((n,f)=>e.jsxs(g.Fragment,{children:[e.jsxs("button",{onClick:()=>u(n.id),className:"flex items-center gap-1 transition-opacity hover:opacity-70 cursor-pointer text-content-body",children:[e.jsx("div",{className:"text-icon-neutral-default",children:n.icon}),e.jsxs("div",{className:"font-semibold text-base whitespace-nowrap text-content-body",children:[n.label,n.count!==void 0&&e.jsxs("span",{className:"ml-1 font-normal text-content-body",children:["(",n.count,")"]})]})]}),f<i.length-1&&e.jsx("div",{className:"h-[50px] w-px bg-surface-neutral-action"})]},n.id))})})};p.__docgenInfo={description:"",methods:[],displayName:"AppBarClientAncres",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"AppBarClientAncresItem"}],raw:"AppBarClientAncresItem[]"},description:"",defaultValue:{value:`[
  {
    id: "profil",
    label: "Profil",
    icon: <CircleUserRound size={20} />,
  },
  {
    id: "activites",
    label: "Activités",
    icon: <Flag size={20} />,
  },
  {
    id: "affaires",
    label: "Affaires",
    icon: <FileSearch size={20} />,
  },
  {
    id: "biens",
    label: "Biens",
    icon: <Home size={20} />,
  },
  {
    id: "carnet",
    label: "Carnet",
    icon: <BookOpen size={20} />,
  },
  {
    id: "documents",
    label: "Documents",
    icon: <Files size={20} />,
  },
  {
    id: "messages",
    label: "Messages",
    icon: <MessageSquare size={20} />,
  },
]`,computed:!1}},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemId: string) => void",signature:{arguments:[{type:{name:"string"},name:"itemId"}],return:{name:"void"}}},description:""}}};const R={title:"Design System/Organisms/AppBarClientAncres",component:p},s={args:{clientId:"CLI-2026-1842",clientName:"Dupont, Jean-François",onBack:()=>console.log("Back clicked")}},a={args:{clientId:"CLI-2026-5094",clientName:"Marthéline-Rousseau, Gabrielle Marie-Christine",onBack:()=>console.log("Back clicked")}};var c,t,o;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    clientId: "CLI-2026-1842",
    clientName: "Dupont, Jean-François",
    onBack: () => console.log("Back clicked")
  }
}`,...(o=(t=s.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var l,d,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    clientId: "CLI-2026-5094",
    clientName: "Marthéline-Rousseau, Gabrielle Marie-Christine",
    onBack: () => console.log("Back clicked")
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const D=["Default","WithLongName"];export{s as Default,a as WithLongName,D as __namedExportsOrder,R as default};
