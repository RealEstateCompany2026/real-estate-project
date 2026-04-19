import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{M as z}from"./MessageBadge-CNeGmMk4.js";import{M as _}from"./MessageStatusDot-iESl-atJ.js";import{M as P}from"./MessageTimestamp-B5rCp8TL.js";import{M as E}from"./MessageBubble-BAZagrh-.js";import{C as O}from"./circle-arrow-right-CK4k4kcg.js";import{P as R}from"./paperclip-Bwk56Ofa.js";import"./createLucideIcon-CtqQySJq.js";import"./index-BNURykns.js";function s({children:q,date:B,time:l,status:N="none",variant:u="standard",showBadge:k=!0,showArrow:C=!0,attachments:V=[],className:T=""}){const t=u==="chat";return e.jsx("div",{className:`w-full max-w-[420px] ml-auto ${T}`.trim(),children:e.jsxs("div",{className:`flex flex-col items-end w-full ${t?"gap-[4px]":"gap-[10px]"}`,children:[e.jsxs("div",{className:"flex gap-[8px] items-center justify-end w-full",children:[!t&&C&&e.jsx(O,{size:20,strokeWidth:1.5,className:"shrink-0 text-content-caption"}),t?e.jsx("span",{className:"text-[12px] leading-tight tracking-tighter text-content-caption",children:l.replace("à ","")}):e.jsx(P,{date:B,time:l}),e.jsx(_,{status:N}),!t&&k&&e.jsx(z,{label:"ENVOYÉ"})]}),e.jsxs(E,{variant:u,align:"right",children:[e.jsx("div",{className:"px-[10px] py-[8px] w-full",children:e.jsx("div",{className:"text-[16px] font-normal leading-[22px] tracking-[0.16px] text-content-body",children:q})}),V.map((c,D)=>e.jsxs("button",{onClick:c.onClick,className:"flex items-center gap-[8px] p-[12px] rounded-[16px] bg-surface-neutral-default",children:[e.jsx(R,{size:20,className:"text-content-neutral-action"}),e.jsx("span",{className:"text-[16px] font-semibold leading-[20px] tracking-[0.16px] whitespace-nowrap text-content-neutral-action",children:c.label})]},D))]})]})})}s.__docgenInfo={description:"",methods:[],displayName:"MessageSent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Contenu texte du message"},date:{required:!0,tsType:{name:"string"},description:"Date du message"},time:{required:!0,tsType:{name:"string"},description:"Heure du message"},status:{required:!1,tsType:{name:"union",raw:'"none" | "success" | "fail"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"success"'},{name:"literal",value:'"fail"'}]},description:"Statut du message",defaultValue:{value:'"none"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"standard" | "chat"',elements:[{name:"literal",value:'"standard"'},{name:"literal",value:'"chat"'}]},description:"Variante de style",defaultValue:{value:'"standard"',computed:!1}},showBadge:{required:!1,tsType:{name:"boolean"},description:"Afficher le badge ENVOYÉ (standard uniquement)",defaultValue:{value:"true",computed:!1}},showArrow:{required:!1,tsType:{name:"boolean"},description:"Afficher l'icône arrow (standard uniquement)",defaultValue:{value:"true",computed:!1}},attachments:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; onClick?: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"{ label: string; onClick?: () => void }[]"},description:"Pièces jointes à afficher",defaultValue:{value:"[]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const K={title:"Design System/Molecules/MessageSent",component:s},a={args:{date:"le 12 fév 2026",time:"à 14:32",status:"none",showBadge:!0,showArrow:!0,children:"Bonjour, cette propriété vous intéresse-t-elle?"}},r={args:{date:"le 12 fév 2026",time:"à 14:32",status:"none",showBadge:!0,showArrow:!0,attachments:[{label:"Photos_propriété.zip"}],children:"Voici les photos de la propriété."}},n={args:{date:"le 15 mars 2026",time:"à 09:30",status:"success",showBadge:!0,showArrow:!0,children:"La visite est prévue pour demain à 14h."}},o={args:{date:"le 10 jan 2026",time:"à 18:00",status:"fail",showBadge:!0,showArrow:!0,children:"Ce message n'a pas pu être envoyé."}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(s,{date:"le 12 fév 2026",time:"à 14:30",status:"success",children:"Bonjour!"}),e.jsx(s,{date:"le 12 fév 2026",time:"à 14:31",status:"success",children:"Je vous contacte au sujet de la propriété"}),e.jsx(s,{date:"le 12 fév 2026",time:"à 14:32",attachments:[{label:"Mandat.pdf"}],children:"Avez-vous un créneau pour une visite?"})]})};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    date: "le 12 fév 2026",
    time: "à 14:32",
    status: "none",
    showBadge: true,
    showArrow: true,
    children: "Bonjour, cette propriété vous intéresse-t-elle?"
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,f,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    date: "le 12 fév 2026",
    time: "à 14:32",
    status: "none",
    showBadge: true,
    showArrow: true,
    attachments: [{
      label: "Photos_propriété.zip"
    }],
    children: "Voici les photos de la propriété."
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,v,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    date: "le 15 mars 2026",
    time: "à 09:30",
    status: "success",
    showBadge: true,
    showArrow: true,
    children: "La visite est prévue pour demain à 14h."
  }
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,y,S;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    date: "le 10 jan 2026",
    time: "à 18:00",
    status: "fail",
    showBadge: true,
    showArrow: true,
    children: "Ce message n'a pas pu être envoyé."
  }
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var M,b,A;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <MessageSent date="le 12 fév 2026" time="à 14:30" status="success">
        Bonjour!
      </MessageSent>
      <MessageSent date="le 12 fév 2026" time="à 14:31" status="success">
        Je vous contacte au sujet de la propriété
      </MessageSent>
      <MessageSent date="le 12 fév 2026" time="à 14:32" attachments={[{
      label: "Mandat.pdf"
    }]}>
        Avez-vous un créneau pour une visite?
      </MessageSent>
    </div>
}`,...(A=(b=i.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};const Q=["Default","WithAttachment","Success","Fail","Sequence"];export{a as Default,o as Fail,i as Sequence,n as Success,r as WithAttachment,Q as __namedExportsOrder,K as default};
