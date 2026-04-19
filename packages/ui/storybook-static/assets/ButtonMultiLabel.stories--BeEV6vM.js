import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{c}from"./utils-BLSKlp9E.js";function h({sections:t,className:v,fullWidth:i=!1}){return l.jsx("div",{className:c("inline-flex",i&&"w-full",v),role:"group","aria-label":"Multi-action button",children:t.map((e,a)=>{const r=a===0,x=a===t.length-1;return l.jsxs("button",{type:"button",onClick:e.onClick,disabled:e.disabled,className:c("inline-flex items-center justify-center gap-2","p-3 text-base font-semibold tracking-[0.16px]","transition-colors","border border-edge-neutral-default","bg-surface-neutral-default text-content-body","hover:border-edge-neutral-action","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ring-offset-surface-page","disabled:pointer-events-none disabled:bg-surface-disabled disabled:text-content-disabled disabled:border-edge-disabled",r&&"rounded-l-lg",x&&"rounded-r-lg",!r&&"-ml-px",i&&"flex-1"),children:[e.icon&&l.jsx("span",{className:"shrink-0 [&>svg]:size-5",children:e.icon}),l.jsx("span",{className:"whitespace-nowrap",children:e.label})]},`${e.label}-${a}`)})})}h.__docgenInfo={description:"",methods:[],displayName:"ButtonMultiLabel",props:{sections:{required:!0,tsType:{name:"Array",elements:[{name:"ButtonMultiLabelSection"}],raw:"ButtonMultiLabelSection[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const A={title:"Design System/Atoms/ButtonMultiLabel",component:h},o={args:{sections:[{label:"Précédent",onClick:()=>console.log("Précédent")},{label:"Suivant",onClick:()=>console.log("Suivant")}]}},n={args:{sections:[{label:"Tous",onClick:()=>console.log("Tous")},{label:"Actifs",onClick:()=>console.log("Actifs")},{label:"Archivés",onClick:()=>console.log("Archivés"),disabled:!0},{label:"Brouillons",onClick:()=>console.log("Brouillons")}]}},s={args:{sections:[{label:"Liste",onClick:()=>console.log("Liste")},{label:"Carte",onClick:()=>console.log("Carte")},{label:"Tableau",onClick:()=>console.log("Tableau")}],fullWidth:!0}};var u,d,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    sections: [{
      label: "Précédent",
      onClick: () => console.log("Précédent")
    }, {
      label: "Suivant",
      onClick: () => console.log("Suivant")
    }]
  }
}`,...(b=(d=o.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var g,p,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    sections: [{
      label: "Tous",
      onClick: () => console.log("Tous")
    }, {
      label: "Actifs",
      onClick: () => console.log("Actifs")
    }, {
      label: "Archivés",
      onClick: () => console.log("Archivés"),
      disabled: true
    }, {
      label: "Brouillons",
      onClick: () => console.log("Brouillons")
    }]
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,C,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    sections: [{
      label: "Liste",
      onClick: () => console.log("Liste")
    }, {
      label: "Carte",
      onClick: () => console.log("Carte")
    }, {
      label: "Tableau",
      onClick: () => console.log("Tableau")
    }],
    fullWidth: true
  }
}`,...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const L=["TwoSections","FourSectionsWithDisabled","FullWidth"];export{n as FourSectionsWithDisabled,s as FullWidth,o as TwoSections,L as __namedExportsOrder,A as default};
