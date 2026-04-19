import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as g}from"./Badge-DS_tmhFu.js";import{C}from"./Chip-DbXFJYRR.js";import{K as p}from"./KpiIndicator-c9bDg6aa.js";import{A as D}from"./AiSuggestionBanner-B41DoOe-.js";import{C as k}from"./CardLog-B9eglPtG.js";import{T as R}from"./tag-RLp9pZil.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";import"./database-Dl4PIW4M.js";import"./Button-nkpS-x_8.js";import"./arrow-right-CowbYVXw.js";function B({bienType:I,surface:U,type:E,price:N,location:F,dpe:G="A",qualification:u,entretien:d,conversion:m,suggestions:s,recentLogs:c,className:w=""}){return e.jsxs("div",{className:`flex flex-col gap-5 px-5 py-5 ${w}`.trim(),children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(g,{variant:"default",children:E}),e.jsx(C,{size:"medium",icon:e.jsx(R,{size:20,className:"text-icon-neutral-default"}),iconPosition:"left",children:N}),e.jsx(g,{variant:"success",children:"CARNET"})]}),e.jsx("div",{className:"w-full h-[115px] rounded-2xl flex items-center justify-center border border-edge-default bg-surface-neutral-default"}),e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx(p,{kpi:"qual",value:`${u}%`,percentage:u,variant:"straight"}),e.jsx(p,{kpi:"ent",value:`${d}%`,percentage:d,variant:"straight"}),e.jsx(p,{kpi:"conv",value:`${m}%`,percentage:m,variant:"straight"})]}),s&&s.length>0&&e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h6",{className:"text-[16px] font-bold leading-[20px] tracking-[0.16px] text-content-headings",children:"Suggestions d'actions"}),s.slice(0,2).map((r,l)=>e.jsx(D,{suggestion:r.text,actionLabel:r.actionLabel,onAction:r.onAction,variant:"compact"},l))]}),c&&c.length>0&&e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h6",{className:"text-[16px] font-bold leading-[20px] tracking-[0.16px] text-content-headings",children:"Activités"}),c.slice(0,3).map((r,l)=>e.jsx(k,{date:r.date,time:r.time,author:r.author,category:r.category,description:r.description,badgeVariant:r.badgeVariant,className:"w-full"},l))]})]})}B.__docgenInfo={description:"",methods:[],displayName:"SheetBienDetails",props:{bienType:{required:!0,tsType:{name:"string"},description:""},surface:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"string"},description:""},location:{required:!0,tsType:{name:"string"},description:""},dpe:{required:!1,tsType:{name:"union",raw:'"A" | "B" | "C" | "D" | "E" | "F" | "G"',elements:[{name:"literal",value:'"A"'},{name:"literal",value:'"B"'},{name:"literal",value:'"C"'},{name:"literal",value:'"D"'},{name:"literal",value:'"E"'},{name:"literal",value:'"F"'},{name:"literal",value:'"G"'}]},description:"",defaultValue:{value:'"A"',computed:!1}},qualification:{required:!0,tsType:{name:"number"},description:""},entretien:{required:!0,tsType:{name:"number"},description:""},conversion:{required:!0,tsType:{name:"number"},description:""},suggestions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const ae={title:"Design System/Molecules/SheetBienDetails",component:B},a={args:{bienType:"Appartement",surface:"85 m2",type:"T3",price:"450 000 EUR",location:"75008 Paris",dpe:"B",qualification:75,entretien:60,conversion:80,suggestions:[{text:"Ce bien correspond au profil de 3 acquereurs actifs — envoyer les fiches",actionLabel:"Envoyer"},{text:"Photos a mettre a jour, dernier shooting il y a 8 mois",actionLabel:"Programmer"}],recentLogs:[{date:"16 avr. 2026",time:"15:30",author:"Sophie Martin",category:"Visite",description:"Visite avec M. et Mme Bernard — retour tres positif, offre en cours",badgeVariant:"success"},{date:"14 avr. 2026",time:"10:00",author:"Marc Leroy",category:"Appel",description:"Appel proprietaire pour point mensuel sur les visites",badgeVariant:"information"},{date:"10 avr. 2026",time:"09:30",author:"Sophie Martin",category:"Email",description:"Diffusion annonce mise a jour sur SeLoger et LeBonCoin",badgeVariant:"default"}]}},n={args:{bienType:"Maison",surface:"250 m2",type:"Villa",price:"1 800 000 EUR",location:"92100 Boulogne-Billancourt",dpe:"A",qualification:95,entretien:90,conversion:88,suggestions:[{text:"Bien premium — organiser une visite privee pour les acquireurs VIP",actionLabel:"Organiser"}],recentLogs:[{date:"17 avr. 2026",time:"11:00",author:"Sophie Martin",category:"Signature",description:"Offre acceptee par le vendeur, passage chez le notaire prevu",badgeVariant:"success"}]}},i={args:{bienType:"Studio",surface:"25 m2",type:"Studio",price:"250 000 EUR",location:"75005 Paris",dpe:"G",qualification:30,entretien:20,conversion:35,suggestions:[{text:"Bien avec DPE G — informer le proprietaire de l'obligation de renovation 2028",actionLabel:"Informer"},{text:"Aucune visite depuis 45 jours — baisser le prix de 5% recommande",actionLabel:"Proposer"}],recentLogs:[{date:"01 mars 2026",time:"14:00",author:"Marc Leroy",category:"Email",description:"Relance proprietaire sur la baisse de prix — en attente de retour",badgeVariant:"warning"}]}},t={args:{bienType:"Duplex",surface:"120 m2",type:"T4",price:"650 000 EUR",location:"75011 Paris",dpe:"D",qualification:55,entretien:50,conversion:60}},o={args:{bienType:"Commerce",surface:"150 m2",type:"Local commercial",price:"400 000 EUR",location:"75001 Paris",dpe:"C",qualification:65,entretien:55,conversion:70,suggestions:[{text:"3 demandes de visite en attente cette semaine",actionLabel:"Planifier"}],recentLogs:[{date:"15 avr. 2026",time:"16:00",author:"Sophie Martin",category:"Visite",description:"Visite avec la SCI Investimmo — interesse par un bail 3/6/9",badgeVariant:"information"},{date:"12 avr. 2026",time:"11:30",author:"Marc Leroy",category:"Note",description:"Proprietaire confirme travaux de facade termines",badgeVariant:"success"}],onViewFiche:()=>console.log("Voir la Fiche"),onViewActions:()=>console.log("Voir les actions"),onMessage:()=>console.log("Message"),onCall:()=>console.log("Appel")}};var f,v,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    bienType: "Appartement",
    surface: "85 m2",
    type: "T3",
    price: "450 000 EUR",
    location: "75008 Paris",
    dpe: "B",
    qualification: 75,
    entretien: 60,
    conversion: 80,
    suggestions: [{
      text: "Ce bien correspond au profil de 3 acquereurs actifs — envoyer les fiches",
      actionLabel: "Envoyer"
    }, {
      text: "Photos a mettre a jour, dernier shooting il y a 8 mois",
      actionLabel: "Programmer"
    }],
    recentLogs: [{
      date: "16 avr. 2026",
      time: "15:30",
      author: "Sophie Martin",
      category: "Visite",
      description: "Visite avec M. et Mme Bernard — retour tres positif, offre en cours",
      badgeVariant: "success"
    }, {
      date: "14 avr. 2026",
      time: "10:00",
      author: "Marc Leroy",
      category: "Appel",
      description: "Appel proprietaire pour point mensuel sur les visites",
      badgeVariant: "information"
    }, {
      date: "10 avr. 2026",
      time: "09:30",
      author: "Sophie Martin",
      category: "Email",
      description: "Diffusion annonce mise a jour sur SeLoger et LeBonCoin",
      badgeVariant: "default"
    }]
  }
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,h,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    bienType: "Maison",
    surface: "250 m2",
    type: "Villa",
    price: "1 800 000 EUR",
    location: "92100 Boulogne-Billancourt",
    dpe: "A",
    qualification: 95,
    entretien: 90,
    conversion: 88,
    suggestions: [{
      text: "Bien premium — organiser une visite privee pour les acquireurs VIP",
      actionLabel: "Organiser"
    }],
    recentLogs: [{
      date: "17 avr. 2026",
      time: "11:00",
      author: "Sophie Martin",
      category: "Signature",
      description: "Offre acceptee par le vendeur, passage chez le notaire prevu",
      badgeVariant: "success"
    }]
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var V,L,q;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    bienType: "Studio",
    surface: "25 m2",
    type: "Studio",
    price: "250 000 EUR",
    location: "75005 Paris",
    dpe: "G",
    qualification: 30,
    entretien: 20,
    conversion: 35,
    suggestions: [{
      text: "Bien avec DPE G — informer le proprietaire de l'obligation de renovation 2028",
      actionLabel: "Informer"
    }, {
      text: "Aucune visite depuis 45 jours — baisser le prix de 5% recommande",
      actionLabel: "Proposer"
    }],
    recentLogs: [{
      date: "01 mars 2026",
      time: "14:00",
      author: "Marc Leroy",
      category: "Email",
      description: "Relance proprietaire sur la baisse de prix — en attente de retour",
      badgeVariant: "warning"
    }]
  }
}`,...(q=(L=i.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var A,S,T;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    bienType: "Duplex",
    surface: "120 m2",
    type: "T4",
    price: "650 000 EUR",
    location: "75011 Paris",
    dpe: "D",
    qualification: 55,
    entretien: 50,
    conversion: 60
  }
}`,...(T=(S=t.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,P,M;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    bienType: "Commerce",
    surface: "150 m2",
    type: "Local commercial",
    price: "400 000 EUR",
    location: "75001 Paris",
    dpe: "C",
    qualification: 65,
    entretien: 55,
    conversion: 70,
    suggestions: [{
      text: "3 demandes de visite en attente cette semaine",
      actionLabel: "Planifier"
    }],
    recentLogs: [{
      date: "15 avr. 2026",
      time: "16:00",
      author: "Sophie Martin",
      category: "Visite",
      description: "Visite avec la SCI Investimmo — interesse par un bail 3/6/9",
      badgeVariant: "information"
    }, {
      date: "12 avr. 2026",
      time: "11:30",
      author: "Marc Leroy",
      category: "Note",
      description: "Proprietaire confirme travaux de facade termines",
      badgeVariant: "success"
    }],
    onViewFiche: () => console.log("Voir la Fiche"),
    onViewActions: () => console.log("Voir les actions"),
    onMessage: () => console.log("Message"),
    onCall: () => console.log("Appel")
  }
}`,...(M=(P=o.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};const ne=["Default","HighQuality","LowQuality","NoSuggestionsNoLogs","WithActions"];export{a as Default,n as HighQuality,i as LowQuality,t as NoSuggestionsNoLogs,o as WithActions,ne as __namedExportsOrder,ae as default};
