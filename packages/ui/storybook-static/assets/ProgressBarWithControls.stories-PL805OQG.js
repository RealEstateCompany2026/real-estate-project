import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{P as V}from"./ProgressBar-C-XXGnCh.js";import{A as W}from"./arrow-left-DG8bwFE_.js";import{A as E}from"./arrow-right-CowbYVXw.js";import"./createLucideIcon-CtqQySJq.js";import"./index-BNURykns.js";function z({label:Q,progress:q,onPrevious:D,onNext:B,disablePrevious:A=!1,disableNext:O=!1,className:_=""}){return e.jsx("div",{className:`h-[100px] max-w-[1191px] min-w-[380px] relative rounded-[20px] w-[1191px] bg-surface-neutral-default ${_}`.trim(),children:e.jsx("div",{className:"flex flex-col justify-center max-w-[inherit] min-w-[inherit] size-full",children:e.jsx("div",{className:"content-stretch flex flex-col items-start justify-center max-w-[inherit] min-w-[inherit] px-[10px] py-[34px] relative size-full",children:e.jsxs("div",{className:"content-stretch flex gap-[24px] items-center relative shrink-0 w-full",children:[e.jsx("div",{className:"relative shrink-0",children:e.jsx("div",{className:"flex flex-row items-center size-full",children:e.jsx("div",{className:"content-stretch flex items-center px-[10px] py-[8px] relative",children:e.jsx("p",{className:"text-[14px] leading-[16px] tracking-[0.14px] font-semibold not-italic relative shrink-0 whitespace-nowrap text-content-body",children:Q})})})}),e.jsx("div",{className:"relative shrink-0",children:e.jsx("div",{className:"flex flex-row items-center size-full",children:e.jsxs("div",{className:"content-stretch flex gap-[12px] items-center relative",children:[e.jsx("button",{type:"button",onClick:D,disabled:A,className:"relative shrink-0 size-[24px] disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-70 transition-opacity text-icon-neutral-default","aria-label":"Précédent",children:e.jsx(W,{size:24})}),e.jsx("button",{type:"button",onClick:B,disabled:O,className:"relative shrink-0 size-[24px] disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-70 transition-opacity text-icon-neutral-default","aria-label":"Suivant",children:e.jsx(E,{size:24})})]})})}),e.jsx(V,{progress:q})]})})})})}z.__docgenInfo={description:"",methods:[],displayName:"ProgressBarWithControls",props:{label:{required:!0,tsType:{name:"string"},description:'Label affiché à gauche (ex: "Complétion", "Progression", etc.)'},progress:{required:!0,tsType:{name:"number"},description:"Pourcentage de progression (0-100)"},onPrevious:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback bouton précédent (flèche gauche)"},onNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback bouton suivant (flèche droite)"},disablePrevious:{required:!1,tsType:{name:"boolean"},description:"Désactiver le bouton précédent",defaultValue:{value:"false",computed:!1}},disableNext:{required:!1,tsType:{name:"boolean"},description:"Désactiver le bouton suivant",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classe CSS personnalisée",defaultValue:{value:'""',computed:!1}}}};const H={title:"Design System/Organisms/ProgressBarWithControls",component:z},s={args:{label:"Complétion du profil",progress:50,onPrevious:()=>console.log("Previous clicked"),onNext:()=>console.log("Next clicked"),disablePrevious:!1,disableNext:!1}},o={args:{label:"Étape 1 sur 5",progress:20,onPrevious:()=>console.log("Previous clicked"),onNext:()=>console.log("Next clicked"),disablePrevious:!0,disableNext:!1}},r={args:{label:"Étape 4 sur 5",progress:80,onPrevious:()=>console.log("Previous clicked"),onNext:()=>console.log("Next clicked"),disablePrevious:!1,disableNext:!1}},a={args:{label:"Onboarding complété",progress:100,onPrevious:()=>console.log("Previous clicked"),onNext:()=>console.log("Next clicked"),disablePrevious:!1,disableNext:!0}},l={args:{label:"Traitement en cours",progress:65,onPrevious:()=>console.log("Previous clicked"),onNext:()=>console.log("Next clicked"),disablePrevious:!0,disableNext:!0}},i={args:{label:"Qualification client",progress:25,onPrevious:()=>console.log("Previous clicked"),onNext:()=>console.log("Next clicked"),disablePrevious:!1,disableNext:!1}},t={args:{label:"Qualification client",progress:75,onPrevious:()=>console.log("Previous clicked"),onNext:()=>console.log("Next clicked"),disablePrevious:!1,disableNext:!1}};var n,c,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Complétion du profil",
    progress: 50,
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    disablePrevious: false,
    disableNext: false
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,p,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Étape 1 sur 5",
    progress: 20,
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    disablePrevious: true,
    disableNext: false
  }
}`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var m,g,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Étape 4 sur 5",
    progress: 80,
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    disablePrevious: false,
    disableNext: false
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,b,N;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Onboarding complété",
    progress: 100,
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    disablePrevious: false,
    disableNext: true
  }
}`,...(N=(b=a.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var P,h,k;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: "Traitement en cours",
    progress: 65,
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    disablePrevious: true,
    disableNext: true
  }
}`,...(k=(h=l.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var y,j,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Qualification client",
    progress: 25,
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    disablePrevious: false,
    disableNext: false
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var C,S,T;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Qualification client",
    progress: 75,
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    disablePrevious: false,
    disableNext: false
  }
}`,...(T=(S=t.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const J=["Default","Starting","NearCompletion","Completed","BothDisabled","QuarterProgress","ThreeQuartersProgress"];export{l as BothDisabled,a as Completed,s as Default,r as NearCompletion,i as QuarterProgress,o as Starting,t as ThreeQuartersProgress,J as __namedExportsOrder,H as default};
