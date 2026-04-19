import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as z}from"./createLucideIcon-CtqQySJq.js";import{S as W}from"./share-2-zP4JEcfR.js";import{C as P}from"./check-BPMjXyas.js";import"./index-BNURykns.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=z("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",key:"llx8ln"}]]);function M({message:T,buttonLabel:i,buttonIcon:c,onButtonClick:l,linkLabel:u,linkIcon:d,onLinkClick:p,className:U=""}){const m=!!(i&&l),D=!!(u&&p);return e.jsxs("div",{className:`
        inline-flex items-center gap-[12px]
        px-[16px] py-[12px] rounded-[8px]
        max-w-[600px] w-auto
        shadow-md
        ${U}
      `.trim(),style:{backgroundColor:"var(--neutral-700)",color:"white"},children:[e.jsx("p",{className:"flex-1 text-[16px] leading-[20px] tracking-[0.16px] font-roboto",children:T}),m&&e.jsx("div",{className:"shrink-0",children:e.jsxs("button",{onClick:l,className:`
              inline-flex items-center justify-center gap-[8px]
              px-[12px] py-[8px] rounded-[8px]
              font-semibold text-[16px] leading-[20px] tracking-[0.16px]
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-[-4px]
              font-roboto
              bg-transparent
              border border-white
              hover:opacity-80
            `,style:{color:"white"},children:[i,c&&e.jsx(c.type,{className:"size-[20px]",strokeWidth:1.5})]})}),D&&!m&&e.jsx("div",{className:"shrink-0",children:e.jsxs("button",{onClick:p,className:`
              inline-flex items-center justify-center gap-[8px]
              px-[12px] py-[8px] rounded-[8px]
              font-semibold text-[16px] leading-[20px] tracking-[0.16px]
              underline decoration-1 underline-offset-2
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-[-4px]
              font-roboto
              bg-transparent
              hover:opacity-80
            `,style:{color:"white"},children:[u,d&&e.jsx(d.type,{className:"size-[20px]",strokeWidth:1.5})]})})]})}M.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{message:{required:!0,tsType:{name:"string"},description:"Message à afficher"},buttonLabel:{required:!1,tsType:{name:"string"},description:"Label du bouton d'action (optionnel)"},buttonIcon:{required:!1,tsType:{name:"LucideIcon"},description:"Icône du bouton (optionnel)"},onButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback du bouton"},linkLabel:{required:!1,tsType:{name:"string"},description:"Label du lien (optionnel)"},linkIcon:{required:!1,tsType:{name:"LucideIcon"},description:"Icône du lien (optionnel)"},onLinkClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback du lien"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS supplémentaires",defaultValue:{value:'""',computed:!1}}}};const $={title:"Design System/Molecules/Snackbar",component:M},n={args:{message:"Action effectuée avec succès"}},o={args:{message:"Modification en cours...",buttonLabel:"Annuler",buttonIcon:V,onButtonClick:()=>console.log("Undo")}},s={args:{message:"Propriété partagée",linkLabel:"Voir",linkIcon:W,onLinkClick:()=>console.log("View")}},t={args:{message:"Bien immobilier créé",buttonLabel:"Partager",buttonIcon:W,onButtonClick:()=>console.log("Share")}},r={args:{message:"Contrat sauvegardé",buttonLabel:"Annuler",buttonIcon:V,onButtonClick:()=>console.log("Undo"),linkLabel:"Détails",linkIcon:P,onLinkClick:()=>console.log("Details")}},a={args:{message:"Votre demande a été envoyée au gestionnaire. Vous recevrez une notification dès qu'elle sera traitée."}};var g,b,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    message: "Action effectuée avec succès"
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,k,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    message: "Modification en cours...",
    buttonLabel: "Annuler",
    buttonIcon: Undo2,
    onButtonClick: () => console.log("Undo")
  }
}`,...(h=(k=o.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var y,v,L;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    message: "Propriété partagée",
    linkLabel: "Voir",
    linkIcon: Share2,
    onLinkClick: () => console.log("View")
  }
}`,...(L=(v=s.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var C,S,I;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    message: "Bien immobilier créé",
    buttonLabel: "Partager",
    buttonIcon: Share2,
    onButtonClick: () => console.log("Share")
  }
}`,...(I=(S=t.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var B,j,w;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    message: "Contrat sauvegardé",
    buttonLabel: "Annuler",
    buttonIcon: Undo2,
    onButtonClick: () => console.log("Undo"),
    linkLabel: "Détails",
    linkIcon: Check,
    onLinkClick: () => console.log("Details")
  }
}`,...(w=(j=r.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var q,A,N;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    message: "Votre demande a été envoyée au gestionnaire. Vous recevrez une notification dès qu'elle sera traitée."
  }
}`,...(N=(A=a.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const F=["Simple","WithButton","WithLink","WithButtonAndIcon","WithButtonAndLink","LongMessage"];export{a as LongMessage,n as Simple,o as WithButton,t as WithButtonAndIcon,r as WithButtonAndLink,s as WithLink,F as __namedExportsOrder,$ as default};
