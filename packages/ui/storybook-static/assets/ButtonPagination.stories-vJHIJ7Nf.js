import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as s}from"./Button-nkpS-x_8.js";import{c as T}from"./utils-BLSKlp9E.js";import{C as q,a as h}from"./chevron-right-DYdkb8qx.js";import"./index-BNURykns.js";import"./index-1evVQkiP.js";import"./createLucideIcon-CtqQySJq.js";const B={default:"default",outlined:"outline"};function N({onPrevious:k,onNext:G,canGoPrevious:b=!0,canGoNext:y=!0,variant:j="default",className:D}){const r=B[j];return e.jsxs("div",{className:T("inline-flex items-center gap-3 rounded-[20px] p-1",D),role:"navigation","aria-label":"Pagination",children:[e.jsx(s,{variant:r,icon:e.jsx(q,{className:"size-5"}),onClick:k,disabled:!b,"aria-label":"Page précédente"}),e.jsx(s,{variant:r,icon:e.jsx(h,{className:"size-5"}),onClick:G,disabled:!y,"aria-label":"Page suivante"})]})}N.__docgenInfo={description:"",methods:[],displayName:"ButtonPagination",props:{onPrevious:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNext:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},canGoPrevious:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},canGoNext:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "outlined"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"outlined"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Design System/Atoms/ButtonPagination",component:N,argTypes:{variant:{control:"select",options:["default","outlined"]}}},o={args:{variant:"default",onPrevious:()=>console.log("Previous clicked"),onNext:()=>console.log("Next clicked"),canGoPrevious:!0,canGoNext:!0}},a={args:{variant:"outlined",onPrevious:()=>console.log("Previous clicked"),onNext:()=>console.log("Next clicked"),canGoPrevious:!0,canGoNext:!0}},n={args:{variant:"default",onPrevious:()=>console.log("Previous clicked"),onNext:()=>console.log("Next clicked"),canGoPrevious:!1,canGoNext:!0}},t={args:{variant:"default",onPrevious:()=>console.log("Previous clicked"),onNext:()=>console.log("Next clicked"),canGoPrevious:!0,canGoNext:!1}};var i,l,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "default",
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    canGoPrevious: true,
    canGoNext: true
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,d,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "outlined",
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    canGoPrevious: true,
    canGoNext: true
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,v,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "default",
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    canGoPrevious: false,
    canGoNext: true
  }
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,x,P;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "default",
    onPrevious: () => console.log("Previous clicked"),
    onNext: () => console.log("Next clicked"),
    canGoPrevious: true,
    canGoNext: false
  }
}`,...(P=(x=t.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const E=["Default","Outlined","DisabledPrevious","DisabledNext"];export{o as Default,t as DisabledNext,n as DisabledPrevious,a as Outlined,E as __namedExportsOrder,z as default};
