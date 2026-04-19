import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as f}from"./index-BNURykns.js";import{I as x}from"./image-DVSJviQY.js";import{c as b}from"./createLucideIcon-CtqQySJq.js";import{F as h,a as B,M as k}from"./message-square-DRIPxU_R.js";import{T as A}from"./tag-RLp9pZil.js";import{B as y,F as j}from"./files-BuB8oJgP.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=b("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]),z=[{id:"galerie",label:"Galerie",icon:e.jsx(x,{size:20})},{id:"caracteristiques",label:"Caractéristiques",icon:e.jsx(I,{size:20})},{id:"activites",label:"Activités",icon:e.jsx(h,{size:20})},{id:"affaires",label:"Affaires",icon:e.jsx(B,{size:20})},{id:"annonce",label:"Annonce",icon:e.jsx(A,{size:20})},{id:"carnet",label:"Carnet",icon:e.jsx(y,{size:20})},{id:"documents",label:"Documents",icon:e.jsx(j,{size:20})},{id:"messages",label:"Messages",icon:e.jsx(k,{size:20})}],p=({items:i=z,onItemClick:r})=>{const u=s=>{r&&r(s)};return e.jsx("div",{className:"px-5 py-10 bg-surface-neutral-default",children:e.jsx("div",{className:"flex items-center gap-[30px]",children:i.map((s,g)=>e.jsxs(f.Fragment,{children:[e.jsxs("button",{onClick:()=>u(s.id),className:"flex items-center gap-1 transition-opacity hover:opacity-70 cursor-pointer text-content-body",children:[e.jsx("div",{className:"text-icon-neutral-default",children:s.icon}),e.jsx("div",{className:"font-semibold text-base whitespace-nowrap text-content-body",children:s.label})]}),g<i.length-1&&e.jsx("div",{className:"h-[50px] w-px bg-surface-neutral-action"})]},s.id))})})};p.__docgenInfo={description:"",methods:[],displayName:"AppBarBienAncres",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"AppBarBienAncresItem"}],raw:"AppBarBienAncresItem[]"},description:"",defaultValue:{value:`[
  {
    id: "galerie",
    label: "Galerie",
    icon: <Image size={20} />,
  },
  {
    id: "caracteristiques",
    label: "Caractéristiques",
    icon: <ListChecks size={20} />,
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
    id: "annonce",
    label: "Annonce",
    icon: <Tag size={20} />,
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
]`,computed:!1}},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemId: string) => void",signature:{arguments:[{type:{name:"string"},name:"itemId"}],return:{name:"void"}}},description:""}}};const w={title:"Design System/Organisms/AppBarBienAncres",component:p},a={args:{bienId:"BIEN-2026-4521",address:"42 rue de la Paix, 75000 Paris",onBack:()=>console.log("Back clicked")}},n={args:{bienId:"BIEN-2026-7834",address:"Appartement 5C, 128 avenue des Champs-Élysées, 75008 Paris 8ème arrondissement",onBack:()=>console.log("Back clicked")}};var t,c,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    bienId: "BIEN-2026-4521",
    address: "42 rue de la Paix, 75000 Paris",
    onBack: () => console.log("Back clicked")
  }
}`,...(o=(c=a.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    bienId: "BIEN-2026-7834",
    address: "Appartement 5C, 128 avenue des Champs-Élysées, 75008 Paris 8ème arrondissement",
    onBack: () => console.log("Back clicked")
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const E=["Default","LongAddress"];export{a as Default,n as LongAddress,E as __namedExportsOrder,w as default};
