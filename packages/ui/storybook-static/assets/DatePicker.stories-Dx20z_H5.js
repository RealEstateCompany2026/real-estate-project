import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-BNURykns.js";import{D as ce}from"./DatePickerDay-CefWWzu-.js";import{D as ie}from"./DatePickerMonth-BlJj6JbE.js";import{D as de}from"./DatePickerNumber-lSz8Oylp.js";import{C as me}from"./calendar-gRs8LC7V.js";import{C as De,a as ue}from"./chevron-right-DYdkb8qx.js";import"./chevron-down-CwOBiCf7.js";import"./createLucideIcon-CtqQySJq.js";const pe=["D","L","M","M","J","V","S"],ge=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];function fe(e,l="short"){const r=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],i=["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"];switch(l){case"short":return`${r[e.getDay()]} ${e.getDate()} ${i[e.getMonth()]}`;case"DD/MM/YYYY":return`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getFullYear()}`;case"MM/DD/YYYY":return`${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getDate().toString().padStart(2,"0")}/${e.getFullYear()}`;case"YYYY-MM-DD":return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`;default:return`${r[e.getDay()]} ${e.getDate()} ${i[e.getMonth()]}`}}function H({selectedDate:e=new Date,minDate:l,maxDate:r,dateFormat:i="short",onDateSelect:h,onCancel:R,onConfirm:C,className:U=""}){const[n,d]=m.useState(e.getMonth()),[o,v]=m.useState(e.getFullYear()),[c,B]=m.useState(e),[G,w]=m.useState(null),S=new Date,Q=t=>t===S.getDate()&&n===S.getMonth()&&o===S.getFullYear(),X=t=>t===c.getDate()&&n===c.getMonth()&&o===c.getFullYear(),Z=t=>{const s=new Date(o,n,t);if(l){const b=new Date(l.getFullYear(),l.getMonth(),l.getDate());if(s<b)return!0}if(r){const b=new Date(r.getFullYear(),r.getMonth(),r.getDate());if(s>b)return!0}return!1},ee=()=>l?new Date(o,n,0)<l:!1,te=()=>r?new Date(o,n+1,1)>r:!1,ae=new Date(o,n+1,0).getDate(),ne=new Date(o,n,1).getDay(),y=[];for(let t=0;t<ne;t++)y.push(null);for(let t=1;t<=ae;t++)y.push(t);const oe=t=>{const s=new Date(o,n,t);B(s),h==null||h(s)},re=()=>{n===0?(d(11),v(o-1)):d(n-1)},se=()=>{n===11?(d(0),v(o+1)):d(n+1)},le=t=>t===null?"disabled":X(t)?"selected":Q(t)?"today":t===G?"hover":"default";return a.jsx("div",{className:`relative rounded-[16px] w-[390px] bg-surface-neutral-default border border-surface-neutral-default ${U}`.trim(),children:a.jsxs("div",{className:"p-[24px]",children:[a.jsx("div",{className:"mb-[20px]",children:a.jsx("h3",{className:"text-[20px] leading-[24px] font-semibold text-content-headings",children:"Select date"})}),a.jsx("div",{className:"mb-[24px] px-[16px] py-[12px] rounded-[12px] flex items-center justify-between bg-surface-neutral-action",children:a.jsxs("div",{className:"flex items-center gap-[12px]",children:[a.jsx(me,{size:20,className:"text-icon-neutral-default"}),a.jsx("span",{className:"text-[16px] leading-[20px] font-medium text-content-body",children:fe(c,i)})]})}),a.jsxs("div",{className:"flex items-center justify-between mb-[16px]",children:[a.jsx("button",{onClick:re,className:"p-[8px] rounded-[8px] transition-opacity disabled:opacity-40 disabled:cursor-not-allowed bg-surface-neutral-action",type:"button",disabled:ee(),children:a.jsx(De,{size:20,className:"text-icon-neutral-default"})}),a.jsx(ie,{month:`${ge[n]} ${o}`,onClick:()=>{}}),a.jsx("button",{onClick:se,className:"p-[8px] rounded-[8px] transition-opacity disabled:opacity-40 disabled:cursor-not-allowed bg-surface-neutral-action",type:"button",disabled:te(),children:a.jsx(ue,{size:20,className:"text-icon-neutral-default"})})]}),a.jsx("div",{className:"flex gap-[10px] items-center mb-[8px]",children:pe.map((t,s)=>a.jsx(ce,{day:t},s))}),a.jsx("div",{className:"grid grid-cols-7 gap-[10px] mb-[24px]",children:y.map((t,s)=>a.jsx("div",{children:t===null?a.jsx("div",{className:"w-[40px] h-[40px]"}):a.jsx(de,{value:t,state:le(t),onClick:()=>oe(t),onMouseEnter:()=>w(t),onMouseLeave:()=>w(null),disabled:Z(t)})},s))}),a.jsxs("div",{className:"flex gap-2 justify-end px-4 pb-4",children:[a.jsx("button",{type:"button",onClick:R,className:"px-[10px] py-[8px] hover:opacity-70 transition-opacity cursor-pointer text-[14px] leading-[16px] tracking-[0.14px] font-semibold whitespace-nowrap text-content-body",children:"Cancel"}),a.jsx("button",{type:"button",onClick:()=>C==null?void 0:C(c),className:"px-[10px] py-[8px] hover:opacity-70 transition-opacity cursor-pointer text-[14px] leading-[16px] tracking-[0.14px] font-semibold whitespace-nowrap text-content-body",children:"OK"})]})]})})}H.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{selectedDate:{required:!1,tsType:{name:"Date"},description:"",defaultValue:{value:"new Date()",computed:!1}},minDate:{required:!1,tsType:{name:"Date"},description:"Date minimum sélectionnable (inclusive)"},maxDate:{required:!1,tsType:{name:"Date"},description:"Date maximum sélectionnable (inclusive)"},dateFormat:{required:!1,tsType:{name:"union",raw:'"short" | "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD"',elements:[{name:"literal",value:'"short"'},{name:"literal",value:'"DD/MM/YYYY"'},{name:"literal",value:'"MM/DD/YYYY"'},{name:"literal",value:'"YYYY-MM-DD"'}]},description:`Format d'affichage de la date
- "short": Format court français "Lun 15 jan" (défaut)
- "DD/MM/YYYY": Format européen "15/08/2025"
- "MM/DD/YYYY": Format américain "08/15/2025"
- "YYYY-MM-DD": Format ISO "2025-08-15"`,defaultValue:{value:'"short"',computed:!1}},onDateSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const we={title:"Design System/Organisms/DatePicker",component:H},K=new Date(2026,3,10),x=new Date(2026,0,1),M=new Date(2026,11,31),D={args:{selectedDate:K,minDate:x,maxDate:M,dateFormat:"DD/MM/YYYY",onDateSelect:e=>console.log("Date selected:",e),onCancel:()=>console.log("Cancelled"),onConfirm:e=>console.log("Confirmed:",e)}},u={args:{selectedDate:K,minDate:x,maxDate:M,dateFormat:"short",onDateSelect:e=>console.log("Date selected:",e),onCancel:()=>console.log("Cancelled"),onConfirm:e=>console.log("Confirmed:",e)}},p={args:{selectedDate:new Date(2026,5,15),minDate:x,maxDate:M,dateFormat:"YYYY-MM-DD",onDateSelect:e=>console.log("Date selected:",e),onCancel:()=>console.log("Cancelled"),onConfirm:e=>console.log("Confirmed:",e)}},g={args:{selectedDate:new Date(2026,2,20),minDate:x,maxDate:M,dateFormat:"MM/DD/YYYY",onDateSelect:e=>console.log("Date selected:",e),onCancel:()=>console.log("Cancelled"),onConfirm:e=>console.log("Confirmed:",e)}},f={args:{selectedDate:new Date(2026,6,1),minDate:new Date(2026,6,1),maxDate:new Date(2026,8,30),dateFormat:"DD/MM/YYYY",onDateSelect:e=>console.log("Date selected:",e),onCancel:()=>console.log("Cancelled"),onConfirm:e=>console.log("Confirmed:",e)}},Y={args:{selectedDate:new Date(2025,11,25),minDate:new Date(2025,0,1),maxDate:new Date(2026,11,31),dateFormat:"DD/MM/YYYY",onDateSelect:e=>console.log("Date selected:",e),onCancel:()=>console.log("Cancelled"),onConfirm:e=>console.log("Confirmed:",e)}};var F,j,N;D.parameters={...D.parameters,docs:{...(F=D.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    selectedDate: today,
    minDate,
    maxDate,
    dateFormat: "DD/MM/YYYY",
    onDateSelect: date => console.log("Date selected:", date),
    onCancel: () => console.log("Cancelled"),
    onConfirm: date => console.log("Confirmed:", date)
  }
}`,...(N=(j=D.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var $,O,k;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    selectedDate: today,
    minDate,
    maxDate,
    dateFormat: "short",
    onDateSelect: date => console.log("Date selected:", date),
    onCancel: () => console.log("Cancelled"),
    onConfirm: date => console.log("Confirmed:", date)
  }
}`,...(k=(O=u.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var P,T,q;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    selectedDate: new Date(2026, 5, 15),
    minDate,
    maxDate,
    dateFormat: "YYYY-MM-DD",
    onDateSelect: date => console.log("Date selected:", date),
    onCancel: () => console.log("Cancelled"),
    onConfirm: date => console.log("Confirmed:", date)
  }
}`,...(q=(T=p.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var E,I,J;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    selectedDate: new Date(2026, 2, 20),
    minDate,
    maxDate,
    dateFormat: "MM/DD/YYYY",
    onDateSelect: date => console.log("Date selected:", date),
    onCancel: () => console.log("Cancelled"),
    onConfirm: date => console.log("Confirmed:", date)
  }
}`,...(J=(I=g.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var _,L,V;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    selectedDate: new Date(2026, 6, 1),
    minDate: new Date(2026, 6, 1),
    // Start of July
    maxDate: new Date(2026, 8, 30),
    // End of September
    dateFormat: "DD/MM/YYYY",
    onDateSelect: date => console.log("Date selected:", date),
    onCancel: () => console.log("Cancelled"),
    onConfirm: date => console.log("Confirmed:", date)
  }
}`,...(V=(L=f.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var z,A,W;Y.parameters={...Y.parameters,docs:{...(z=Y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    selectedDate: new Date(2025, 11, 25),
    minDate: new Date(2025, 0, 1),
    maxDate: new Date(2026, 11, 31),
    dateFormat: "DD/MM/YYYY",
    onDateSelect: date => console.log("Date selected:", date),
    onCancel: () => console.log("Cancelled"),
    onConfirm: date => console.log("Confirmed:", date)
  }
}`,...(W=(A=Y.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};const Fe=["Default","ShortFormat","ISOFormat","USFormat","WithConstraints","PastDate"];export{D as Default,p as ISOFormat,Y as PastDate,u as ShortFormat,g as USFormat,f as WithConstraints,Fe as __namedExportsOrder,we as default};
