import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as l}from"./Button-nkpS-x_8.js";import"./index-BNURykns.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";const B=({currentStep:p,totalSteps:D,title:I,description:E,position:G,onNext:u,onSkip:c,onPrevious:d,width:O=360,nextLabel:W="Suivant",skipLabel:_="Passer"})=>e.jsxs("div",{className:"absolute rounded-lg shadow-lg bg-surface-neutral-default border border-edge-default",style:{...G,width:`${O}px`,zIndex:1e4,pointerEvents:"auto"},children:[e.jsx("div",{className:"px-4 py-3 border-b border-edge-default",children:e.jsxs("div",{className:"text-sm font-medium text-content-branded-strong",children:["Étape ",p," sur ",D]})}),e.jsxs("div",{className:"px-4 py-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2 text-content-strong",children:I}),e.jsx("p",{className:"text-sm leading-relaxed text-content-body",children:E})]}),e.jsxs("div",{className:"px-4 py-3 flex items-center justify-between border-t border-edge-default",children:[d&&p>1?e.jsx(l,{variant:"ghost",size:"small",onClick:d,children:"Précédent"}):e.jsx("div",{}),e.jsxs("div",{className:"flex items-center gap-2",children:[c&&e.jsx(l,{variant:"ghost",size:"small",onClick:c,children:_}),u&&e.jsx(l,{variant:"filled",size:"small",onClick:u,children:W})]})]})]});B.__docgenInfo={description:"",methods:[],displayName:"TooltipOnboarding",props:{currentStep:{required:!0,tsType:{name:"number"},description:"Numéro de l'étape actuelle (1-based)"},totalSteps:{required:!0,tsType:{name:"number"},description:"Nombre total d'étapes"},title:{required:!0,tsType:{name:"string"},description:"Titre du tooltip"},description:{required:!0,tsType:{name:"string"},description:"Description/explication"},position:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}`,signature:{properties:[{key:"top",value:{name:"number",required:!1}},{key:"left",value:{name:"number",required:!1}},{key:"right",value:{name:"number",required:!1}},{key:"bottom",value:{name:"number",required:!1}}]}},description:"Position du tooltip"},onNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback pour passer à l'étape suivante"},onSkip:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback pour passer le tour"},onPrevious:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback pour revenir en arrière (optionnel)"},width:{required:!1,tsType:{name:"number"},description:"Largeur du tooltip (défaut: 360px)",defaultValue:{value:"360",computed:!1}},nextLabel:{required:!1,tsType:{name:"string"},description:'Texte du bouton principal (défaut: "Suivant")',defaultValue:{value:'"Suivant"',computed:!1}},skipLabel:{required:!1,tsType:{name:"string"},description:'Texte du bouton secondaire (défaut: "Passer")',defaultValue:{value:'"Passer"',computed:!1}}}};const H={title:"Design System/Molecules/TooltipOnboarding",component:B},t={args:{currentStep:1,totalSteps:4,title:"Bienvenue !",description:"Découvrez les fonctionnalités principales de l'application en quelques minutes.",position:{top:100,left:100},onNext:()=>console.log("Étape suivante"),onSkip:()=>console.log("Fin du tour")}},o={args:{currentStep:2,totalSteps:4,title:"Gestion des propriétés",description:"Ici vous pouvez consulter, modifier et gérer toutes vos propriétés. Cliquez sur une propriété pour voir les détails.",position:{top:200,left:300},onNext:()=>console.log("Étape suivante"),onPrevious:()=>console.log("Étape précédente"),onSkip:()=>console.log("Fin du tour")}},s={args:{currentStep:4,totalSteps:4,title:"Vous êtes prêt !",description:"Vous disposez maintenant de tous les outils pour gérer efficacement vos biens immobiliers.",position:{bottom:100,right:50},nextLabel:"Terminer",onNext:()=>console.log("Fin de l'onboarding")}},r={args:{currentStep:2,totalSteps:3,title:"Gestion des clients",description:"Créez et gérez vos clients, suivez leurs achats et ventes.",position:{top:150,left:200},onNext:()=>console.log("Suivant"),onPrevious:()=>console.log("Précédent"),onSkip:()=>console.log("Passer")}},n={args:{currentStep:1,totalSteps:2,title:"Tableau de bord personnalisé",description:"Bienvenue sur votre tableau de bord. Vous y retrouverez un résumé de vos affaires en cours, vos tâches à faire et des statistiques importantes sur votre activité immobilière.",position:{top:100,left:50},width:480,onNext:()=>console.log("Suivant"),onSkip:()=>console.log("Passer")}},i={args:{currentStep:3,totalSteps:5,title:"Étape importante",description:"Voici une information cruciale que vous devez connaître.",position:{top:200,left:300},nextLabel:"Aller au suivant",onNext:()=>console.log("Suivant"),onSkip:()=>console.log("Ignorer le tour")}},a={args:{currentStep:1,totalSteps:4,title:"Exploitation des données",description:"Utilisez les filtres avancés pour trouver rapidement les propriétés correspondant à vos critères. Vous pouvez filtrer par type de bien, prix, localisation, surface, et bien d'autres critères. Cliquez sur le bouton 'Filtrer' pour accéder à tous les options disponibles.",position:{top:120,left:150},onNext:()=>console.log("Suivant"),onSkip:()=>console.log("Passer")}};var m,g,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    currentStep: 1,
    totalSteps: 4,
    title: "Bienvenue !",
    description: "Découvrez les fonctionnalités principales de l'application en quelques minutes.",
    position: {
      top: 100,
      left: 100
    },
    onNext: () => console.log("Étape suivante"),
    onSkip: () => console.log("Fin du tour")
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,b,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentStep: 2,
    totalSteps: 4,
    title: "Gestion des propriétés",
    description: "Ici vous pouvez consulter, modifier et gérer toutes vos propriétés. Cliquez sur une propriété pour voir les détails.",
    position: {
      top: 200,
      left: 300
    },
    onNext: () => console.log("Étape suivante"),
    onPrevious: () => console.log("Étape précédente"),
    onSkip: () => console.log("Fin du tour")
  }
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,h,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    currentStep: 4,
    totalSteps: 4,
    title: "Vous êtes prêt !",
    description: "Vous disposez maintenant de tous les outils pour gérer efficacement vos biens immobiliers.",
    position: {
      bottom: 100,
      right: 50
    },
    nextLabel: "Terminer",
    onNext: () => console.log("Fin de l'onboarding")
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var z,q,N;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    currentStep: 2,
    totalSteps: 3,
    title: "Gestion des clients",
    description: "Créez et gérez vos clients, suivez leurs achats et ventes.",
    position: {
      top: 150,
      left: 200
    },
    onNext: () => console.log("Suivant"),
    onPrevious: () => console.log("Précédent"),
    onSkip: () => console.log("Passer")
  }
}`,...(N=(q=r.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var k,T,P;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    currentStep: 1,
    totalSteps: 2,
    title: "Tableau de bord personnalisé",
    description: "Bienvenue sur votre tableau de bord. Vous y retrouverez un résumé de vos affaires en cours, vos tâches à faire et des statistiques importantes sur votre activité immobilière.",
    position: {
      top: 100,
      left: 50
    },
    width: 480,
    onNext: () => console.log("Suivant"),
    onSkip: () => console.log("Passer")
  }
}`,...(P=(T=n.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var j,C,L;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    currentStep: 3,
    totalSteps: 5,
    title: "Étape importante",
    description: "Voici une information cruciale que vous devez connaître.",
    position: {
      top: 200,
      left: 300
    },
    nextLabel: "Aller au suivant",
    onNext: () => console.log("Suivant"),
    onSkip: () => console.log("Ignorer le tour")
  }
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var V,w,F;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    currentStep: 1,
    totalSteps: 4,
    title: "Exploitation des données",
    description: "Utilisez les filtres avancés pour trouver rapidement les propriétés correspondant à vos critères. Vous pouvez filtrer par type de bien, prix, localisation, surface, et bien d'autres critères. Cliquez sur le bouton 'Filtrer' pour accéder à tous les options disponibles.",
    position: {
      top: 120,
      left: 150
    },
    onNext: () => console.log("Suivant"),
    onSkip: () => console.log("Passer")
  }
}`,...(F=(w=a.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const J=["FirstStep","MiddleStep","LastStep","WithPreviousButton","CustomWidth","CustomLabels","LongDescription"];export{i as CustomLabels,n as CustomWidth,t as FirstStep,s as LastStep,a as LongDescription,o as MiddleStep,r as WithPreviousButton,J as __namedExportsOrder,H as default};
