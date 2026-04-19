import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{K as n}from"./KpiIndicator-c9bDg6aa.js";import{A as k}from"./AiSuggestionBanner-B41DoOe-.js";import{C as w}from"./CardLog-B9eglPtG.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";import"./database-Dl4PIW4M.js";import"./Button-nkpS-x_8.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./arrow-right-CowbYVXw.js";import"./Badge-DS_tmhFu.js";function P({qualification:g,engagement:p,conversion:d,reactivation:m,suggestions:c,recentLogs:u,className:E=""}){return e.jsxs("div",{className:`flex flex-col gap-5 px-5 py-5 ${E}`.trim(),children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx(n,{kpi:"qual",value:`${g}%`,percentage:g,variant:"straight"}),e.jsx(n,{kpi:"eng",value:`${p}%`,percentage:p,variant:"straight"}),e.jsx(n,{kpi:"conv",value:`${d}%`,percentage:d,variant:"straight"}),e.jsx(n,{kpi:"reac",value:`${m}%`,percentage:m,variant:"straight"})]}),c&&c.length>0&&e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h6",{className:"text-[16px] font-bold leading-[20px] tracking-[0.16px] text-content-headings",children:"Suggestions d'actions"}),c.slice(0,2).map((a,l)=>e.jsx(k,{suggestion:a.text,actionLabel:a.actionLabel,onAction:a.onAction,variant:"compact"},l))]}),u&&u.length>0&&e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h6",{className:"text-[16px] font-bold leading-[20px] tracking-[0.16px] text-content-headings",children:"Activités"}),u.slice(0,3).map((a,l)=>e.jsx(w,{date:a.date,time:a.time,author:a.author,category:a.category,description:a.description,badgeVariant:a.badgeVariant,className:"w-full"},l))]})]})}P.__docgenInfo={description:"",methods:[],displayName:"SheetClientDetails",props:{qualification:{required:!0,tsType:{name:"number"},description:""},engagement:{required:!0,tsType:{name:"number"},description:""},conversion:{required:!0,tsType:{name:"number"},description:""},reactivation:{required:!0,tsType:{name:"number"},description:""},suggestions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  text: string;
  actionLabel?: string;
  onAction?: () => void;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"actionLabel",value:{name:"string",required:!1}},{key:"onAction",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:`Array<{
  text: string;
  actionLabel?: string;
  onAction?: () => void;
}>`},description:""},recentLogs:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  date: string;
  time: string;
  author: string;
  category: string;
  description: string;
  badgeVariant?: BadgeVariant;
}`,signature:{properties:[{key:"date",value:{name:"string",required:!0}},{key:"time",value:{name:"string",required:!0}},{key:"author",value:{name:"string",required:!0}},{key:"category",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"badgeVariant",value:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>',required:!1}}]}}],raw:`Array<{
  date: string;
  time: string;
  author: string;
  category: string;
  description: string;
  badgeVariant?: BadgeVariant;
}>`},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const O={title:"Design System/Molecules/SheetClientDetails",component:P},r={args:{qualification:75,engagement:60,conversion:80,reactivation:45,suggestions:[{text:"Relancer M. Dupont sur son projet d'achat T3 dans le 8e arrondissement",actionLabel:"Programmer"},{text:"Proposer une estimation gratuite pour son bien actuel rue de Rivoli",actionLabel:"Envoyer"}],recentLogs:[{date:"15 avr. 2026",time:"14:32",author:"Sophie Martin",category:"Appel",description:"Echange sur les criteres de recherche, budget revu a la hausse",badgeVariant:"success"},{date:"12 avr. 2026",time:"09:15",author:"Sophie Martin",category:"Email",description:"Envoi de 3 biens correspondant aux nouveaux criteres",badgeVariant:"information"},{date:"08 avr. 2026",time:"16:45",author:"Marc Leroy",category:"Visite",description:"Visite du T4 boulevard Haussmann — retour positif",badgeVariant:"default"}]}},t={args:{qualification:95,engagement:90,conversion:88,reactivation:85,suggestions:[{text:"Client fidele — proposer le programme neuf Cogedim a Saint-Germain-en-Laye",actionLabel:"Programmer"}],recentLogs:[{date:"17 avr. 2026",time:"11:00",author:"Sophie Martin",category:"Signature",description:"Compromis signe pour le T2 rue du Bac",badgeVariant:"success"},{date:"14 avr. 2026",time:"10:30",author:"Sophie Martin",category:"Appel",description:"Confirmation du financement avec le courtier",badgeVariant:"success"}]}},i={args:{qualification:30,engagement:25,conversion:20,reactivation:15,suggestions:[{text:"Completer le profil : numero de telephone et budget manquants",actionLabel:"Completer"},{text:"Envoyer un email de reactivation avec les nouveautes du quartier",actionLabel:"Envoyer"}],recentLogs:[{date:"02 mars 2026",time:"08:45",author:"Marc Leroy",category:"Email",description:"Email de relance envoye — pas de reponse",badgeVariant:"warning"}]}},o={args:{qualification:50,engagement:40,conversion:35,reactivation:0}},s={args:{qualification:70,engagement:50,conversion:65,reactivation:40,suggestions:[{text:"Planifier une visite pour le bien repere avenue Foch",actionLabel:"Planifier"}],recentLogs:[{date:"16 avr. 2026",time:"17:00",author:"Sophie Martin",category:"Note",description:"Le client souhaite un balcon et un parking en sous-sol",badgeVariant:"default"},{date:"10 avr. 2026",time:"14:20",author:"Marc Leroy",category:"Appel",description:"Premier contact telephonique, projet achat residence principale",badgeVariant:"information"}],onViewFiche:()=>console.log("Voir la Fiche"),onViewActions:()=>console.log("Voir les actions"),onMessage:()=>console.log("Message"),onCall:()=>console.log("Appel")}};var v,h,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    qualification: 75,
    engagement: 60,
    conversion: 80,
    reactivation: 45,
    suggestions: [{
      text: "Relancer M. Dupont sur son projet d'achat T3 dans le 8e arrondissement",
      actionLabel: "Programmer"
    }, {
      text: "Proposer une estimation gratuite pour son bien actuel rue de Rivoli",
      actionLabel: "Envoyer"
    }],
    recentLogs: [{
      date: "15 avr. 2026",
      time: "14:32",
      author: "Sophie Martin",
      category: "Appel",
      description: "Echange sur les criteres de recherche, budget revu a la hausse",
      badgeVariant: "success"
    }, {
      date: "12 avr. 2026",
      time: "09:15",
      author: "Sophie Martin",
      category: "Email",
      description: "Envoi de 3 biens correspondant aux nouveaux criteres",
      badgeVariant: "information"
    }, {
      date: "08 avr. 2026",
      time: "16:45",
      author: "Marc Leroy",
      category: "Visite",
      description: "Visite du T4 boulevard Haussmann — retour positif",
      badgeVariant: "default"
    }]
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,b,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    qualification: 95,
    engagement: 90,
    conversion: 88,
    reactivation: 85,
    suggestions: [{
      text: "Client fidele — proposer le programme neuf Cogedim a Saint-Germain-en-Laye",
      actionLabel: "Programmer"
    }],
    recentLogs: [{
      date: "17 avr. 2026",
      time: "11:00",
      author: "Sophie Martin",
      category: "Signature",
      description: "Compromis signe pour le T2 rue du Bac",
      badgeVariant: "success"
    }, {
      date: "14 avr. 2026",
      time: "10:30",
      author: "Sophie Martin",
      category: "Appel",
      description: "Confirmation du financement avec le courtier",
      badgeVariant: "success"
    }]
  }
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var V,L,q;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    qualification: 30,
    engagement: 25,
    conversion: 20,
    reactivation: 15,
    suggestions: [{
      text: "Completer le profil : numero de telephone et budget manquants",
      actionLabel: "Completer"
    }, {
      text: "Envoyer un email de reactivation avec les nouveautes du quartier",
      actionLabel: "Envoyer"
    }],
    recentLogs: [{
      date: "02 mars 2026",
      time: "08:45",
      author: "Marc Leroy",
      category: "Email",
      description: "Email de relance envoye — pas de reponse",
      badgeVariant: "warning"
    }]
  }
}`,...(q=(L=i.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var S,A,M;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    qualification: 50,
    engagement: 40,
    conversion: 35,
    reactivation: 0
  }
}`,...(M=(A=o.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var j,C,N;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    qualification: 70,
    engagement: 50,
    conversion: 65,
    reactivation: 40,
    suggestions: [{
      text: "Planifier une visite pour le bien repere avenue Foch",
      actionLabel: "Planifier"
    }],
    recentLogs: [{
      date: "16 avr. 2026",
      time: "17:00",
      author: "Sophie Martin",
      category: "Note",
      description: "Le client souhaite un balcon et un parking en sous-sol",
      badgeVariant: "default"
    }, {
      date: "10 avr. 2026",
      time: "14:20",
      author: "Marc Leroy",
      category: "Appel",
      description: "Premier contact telephonique, projet achat residence principale",
      badgeVariant: "information"
    }],
    onViewFiche: () => console.log("Voir la Fiche"),
    onViewActions: () => console.log("Voir les actions"),
    onMessage: () => console.log("Message"),
    onCall: () => console.log("Appel")
  }
}`,...(N=(C=s.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const z=["Default","HighPerformer","LowPerformer","NoSuggestionsNoLogs","WithActions"];export{r as Default,t as HighPerformer,i as LowPerformer,o as NoSuggestionsNoLogs,s as WithActions,z as __namedExportsOrder,O as default};
