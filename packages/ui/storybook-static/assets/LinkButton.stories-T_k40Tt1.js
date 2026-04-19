import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{C as j}from"./check-BPMjXyas.js";import{A as D}from"./arrow-right-CowbYVXw.js";import"./createLucideIcon-CtqQySJq.js";import"./index-BNURykns.js";function S({variant:w="neutral",iconLeft:s,iconRight:l,children:R,onClick:V,disabled:o=!1,className:q="",type:I="button"}){const c=(()=>{if(o)return{default:"text-content-subtle",hover:"text-content-subtle"};switch(w){case"branded":return{default:"text-[var(--text-branded-default)]",hover:"hover:text-[var(--surface-branded-action-hover)]"};case"neutral":default:return{default:"text-content-headings",hover:"hover:text-content-headings"}}})();return i.jsxs("button",{type:I,onClick:V,disabled:o,className:`
        inline-flex items-center justify-center gap-[8px]
        px-[12px] py-[12px] rounded-[16px]
        font-semibold text-[16px] leading-[20px] tracking-[0.16px]
        underline decoration-1 underline-offset-2
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        ${o?"cursor-not-allowed opacity-50":`cursor-pointer ${c.hover}`}
        ${c.default}
        ${q}
      `.trim(),children:[s&&i.jsx(s,{size:20}),R,l&&i.jsx(l,{size:20})]})}S.__docgenInfo={description:"",methods:[],displayName:"LinkButton",props:{variant:{required:!1,tsType:{name:"union",raw:'"neutral" | "branded"',elements:[{name:"literal",value:'"neutral"'},{name:"literal",value:'"branded"'}]},description:"Variante de style",defaultValue:{value:'"neutral"',computed:!1}},iconLeft:{required:!1,tsType:{name:"LucideIcon"},description:"Icône à gauche du texte"},iconRight:{required:!1,tsType:{name:"LucideIcon"},description:"Icône à droite du texte"},children:{required:!0,tsType:{name:"ReactNode"},description:"Texte du bouton"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Fonction appelée au clic"},disabled:{required:!1,tsType:{name:"boolean"},description:"Désactiver le bouton",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classes CSS supplémentaires",defaultValue:{value:'""',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit" | "reset"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'},{name:"literal",value:'"reset"'}]},description:"Type HTML du bouton",defaultValue:{value:'"button"',computed:!1}}}};const z={title:"Design System/Atoms/LinkButton",component:S},e={args:{variant:"neutral",children:"View details",onClick:()=>console.log("Clicked")}},t={args:{variant:"branded",children:"Get started",onClick:()=>console.log("Clicked")}},n={args:{variant:"neutral",children:"Continue",iconRight:D,onClick:()=>console.log("Clicked")}},r={args:{variant:"branded",children:"Confirm",iconLeft:j,onClick:()=>console.log("Clicked")}},a={args:{variant:"neutral",children:"Disabled link",disabled:!0}};var d,u,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "neutral",
    children: "View details",
    onClick: () => console.log("Clicked")
  }
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,f,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "branded",
    children: "Get started",
    onClick: () => console.log("Clicked")
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,v,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "neutral",
    children: "Continue",
    iconRight: ArrowRight,
    onClick: () => console.log("Clicked")
  }
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,C,k;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "branded",
    children: "Confirm",
    iconLeft: Check,
    onClick: () => console.log("Clicked")
  }
}`,...(k=(C=r.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var y,L,T;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "neutral",
    children: "Disabled link",
    disabled: true
  }
}`,...(T=(L=a.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const E=["Neutral","Branded","WithIconRight","WithIconLeft","Disabled"];export{t as Branded,a as Disabled,e as Neutral,r as WithIconLeft,n as WithIconRight,E as __namedExportsOrder,z as default};
