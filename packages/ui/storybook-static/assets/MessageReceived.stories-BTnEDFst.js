import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{M as W}from"./MessageBadge-CNeGmMk4.js";import{M as z}from"./MessageStatusDot-iESl-atJ.js";import{M as F}from"./MessageTimestamp-B5rCp8TL.js";import{M as J}from"./MessageBubble-BAZagrh-.js";import{C as Q}from"./circle-arrow-right-CK4k4kcg.js";import{P as U}from"./paperclip-Bwk56Ofa.js";import"./createLucideIcon-CtqQySJq.js";import"./index-BNURykns.js";function a({children:k,date:C,time:u,status:T="none",variant:c="standard",showBadge:D=!0,showArrow:V=!0,attachments:_=[],className:E=""}){const s=c==="chat";return e.jsx("div",{className:`w-full max-w-[420px] ${E}`.trim(),children:e.jsxs("div",{className:`flex flex-col items-start w-full ${s?"gap-[4px]":"gap-[10px]"}`,children:[e.jsxs("div",{className:"flex gap-[8px] items-center w-full",children:[!s&&D&&e.jsx(W,{label:"REÇU"}),e.jsx(z,{status:T}),s?e.jsx("span",{className:"text-[12px] leading-tight tracking-tighter text-content-caption",children:u.replace("à ","")}):e.jsx(F,{date:C,time:u}),!s&&V&&e.jsx(Q,{size:20,strokeWidth:1.5,className:"shrink-0 text-content-caption"})]}),e.jsxs(J,{variant:c,align:"left",children:[e.jsx("div",{className:"px-[10px] py-[8px] w-full",children:e.jsx("div",{className:"text-[16px] font-normal leading-[22px] tracking-[0.16px] text-content-body",children:k})}),_.map((d,P)=>e.jsxs("button",{onClick:d.onClick,className:"flex items-center gap-[8px] p-[12px] rounded-[16px] bg-surface-neutral-default",children:[e.jsx(U,{size:20,className:"text-content-neutral-action"}),e.jsx("span",{className:"text-[16px] font-semibold leading-[20px] tracking-[0.16px] whitespace-nowrap text-content-neutral-action",children:d.label})]},P))]})]})})}a.__docgenInfo={description:"",methods:[],displayName:"MessageReceived",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Contenu texte du message"},date:{required:!0,tsType:{name:"string"},description:"Date du message"},time:{required:!0,tsType:{name:"string"},description:"Heure du message"},status:{required:!1,tsType:{name:"union",raw:'"none" | "success" | "fail"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"success"'},{name:"literal",value:'"fail"'}]},description:"Statut du message",defaultValue:{value:'"none"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"standard" | "chat"',elements:[{name:"literal",value:'"standard"'},{name:"literal",value:'"chat"'}]},description:"Variante de style",defaultValue:{value:'"standard"',computed:!1}},showBadge:{required:!1,tsType:{name:"boolean"},description:"Afficher le badge REÇU (standard uniquement)",defaultValue:{value:"true",computed:!1}},showArrow:{required:!1,tsType:{name:"boolean"},description:"Afficher l'icône arrow (standard uniquement)",defaultValue:{value:"true",computed:!1}},attachments:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; onClick?: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"{ label: string; onClick?: () => void }[]"},description:"Pièces jointes à afficher",defaultValue:{value:"[]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const Z={title:"Design System/Molecules/MessageReceived",component:a},t={args:{date:"le 12 fév 2026",time:"à 12:47",status:"none",showBadge:!0,showArrow:!0,children:"Bonjour, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab..."}},r={args:{date:"le 12 fév 2026",time:"à 12:47",status:"none",showBadge:!0,showArrow:!0,attachments:[{label:"Button title"}],children:"Bonjour, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab..."}},n={args:{date:"le 15 mars 2026",time:"à 09:30",status:"success",showBadge:!0,showArrow:!0,children:"Message reçu et confirmé par le système."}},i={args:{date:"le 10 jan 2026",time:"à 18:00",status:"fail",showBadge:!0,showArrow:!0,children:"Ce message a rencontré une erreur."}},o={args:{date:"le 12 fév 2026",time:"à 12:47",showBadge:!1,showArrow:!1,children:"Message sans badge ni flèche."}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{date:"le 12 fév 2026",time:"à 14:30",children:"Bonjour"}),e.jsx(a,{date:"le 12 fév 2026",time:"à 14:32",attachments:[{label:"Mandat_vente.pdf"}],children:"Je suis intéressée par cette propriété"}),e.jsx(a,{date:"le 12 fév 2026",time:"à 14:33",children:"Quand puis-je la visiter?"})]})};var m,p,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    date: "le 12 fév 2026",
    time: "à 12:47",
    status: "none",
    showBadge: true,
    showArrow: true,
    children: "Bonjour, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab..."
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,h,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    date: "le 12 fév 2026",
    time: "à 12:47",
    status: "none",
    showBadge: true,
    showArrow: true,
    attachments: [{
      label: "Button title"
    }],
    children: "Bonjour, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab..."
  }
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,w,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    date: "le 15 mars 2026",
    time: "à 09:30",
    status: "success",
    showBadge: true,
    showArrow: true,
    children: "Message reçu et confirmé par le système."
  }
}`,...(j=(w=n.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var q,b,y;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    date: "le 10 jan 2026",
    time: "à 18:00",
    status: "fail",
    showBadge: true,
    showArrow: true,
    children: "Ce message a rencontré une erreur."
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var M,B,A;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    date: "le 12 fév 2026",
    time: "à 12:47",
    showBadge: false,
    showArrow: false,
    children: "Message sans badge ni flèche."
  }
}`,...(A=(B=o.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var S,N,R;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <MessageReceived date="le 12 fév 2026" time="à 14:30">
        Bonjour
      </MessageReceived>
      <MessageReceived date="le 12 fév 2026" time="à 14:32" attachments={[{
      label: "Mandat_vente.pdf"
    }]}>
        Je suis intéressée par cette propriété
      </MessageReceived>
      <MessageReceived date="le 12 fév 2026" time="à 14:33">
        Quand puis-je la visiter?
      </MessageReceived>
    </div>
}`,...(R=(N=l.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const ee=["Default","WithAttachment","Success","Fail","NoBadge","Sequence"];export{t as Default,i as Fail,o as NoBadge,l as Sequence,n as Success,r as WithAttachment,ee as __namedExportsOrder,Z as default};
