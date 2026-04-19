import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as v}from"./index-BNURykns.js";import{B as g}from"./Button-nkpS-x_8.js";import{P as j}from"./paperclip-Bwk56Ofa.js";import{X as $}from"./x-C_NNgUki.js";import{S as y}from"./send-C08PLC66.js";import{P as F}from"./plus-DHzzy8q4.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-CtqQySJq.js";function P({onSend:t,onCancel:s,placeholder:a="Votre message...",variant:x="standard",defaultValue:A="",isEditing:u=!1,className:h=""}){const[n,m]=v.useState(A),[l,B]=v.useState([]),p=()=>{(n.trim()||l.length>0)&&(t==null||t(n,n,l),m(""),B([]))},f=()=>{console.log("Add attachment")},_=r=>{r.key==="Enter"&&!r.shiftKey&&x==="chat"&&(r.preventDefault(),p())};return x==="chat"?e.jsx("div",{className:`relative w-full ${h}`.trim(),children:e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-3xl bg-surface-neutral-default",children:[e.jsx("button",{onClick:f,className:"relative shrink-0 size-10 rounded-full flex items-center justify-center hover:bg-surface-neutral-action-hover transition-colors mt-1",children:e.jsx(j,{className:"size-5 text-icon-neutral-default"})}),e.jsx("div",{className:"flex-1 rounded-full overflow-hidden bg-surface-neutral-default px-4 py-2",children:e.jsx("textarea",{value:n,onChange:r=>m(r.target.value),onKeyPress:_,placeholder:a,rows:2,className:"w-full bg-transparent border-none outline-none resize-none text-sm leading-5 text-content-body"})}),u&&e.jsx("button",{onClick:s,className:"relative shrink-0 size-10 rounded-full flex items-center justify-center hover:bg-surface-neutral-action-hover transition-colors mt-1",children:e.jsx($,{className:"size-5 text-icon-neutral-default"})}),e.jsx("button",{onClick:p,disabled:!n.trim()&&l.length===0,className:`relative shrink-0 size-10 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:pointer-events-none mt-1 ${n.trim()?"bg-surface-branded-default":"bg-transparent"}`,children:e.jsx(y,{className:`size-5 ${n.trim()?"text-content-branded-on-action":"text-icon-neutral-default"}`})})]})}):e.jsxs("div",{className:`flex flex-col gap-[12px] items-center w-full max-w-[550px] ${h}`.trim(),children:[e.jsxs("div",{className:"flex flex-col gap-[12px] items-start w-full",children:[e.jsx("div",{className:"p-[10px]",children:e.jsx("h2",{className:"text-[20px] font-bold leading-[24px] tracking-[0.2px] text-content-headings",children:u?"Modifier le message":"Votre message"})}),e.jsxs("div",{className:"flex flex-col gap-[8px] items-end w-full",children:[e.jsxs("div",{className:`flex flex-col gap-[8px] items-start p-[20px] rounded-[16px] w-full
              border border-solid border-edge-subtle bg-surface-neutral-default`,children:[e.jsx("div",{className:"w-full px-[10px] py-[8px]",children:e.jsx("textarea",{value:n,onChange:r=>m(r.target.value),placeholder:a,rows:5,className:`w-full bg-transparent border-none outline-none resize-none
                  text-[16px] font-normal leading-[20px] tracking-[0.16px] text-content-body`})}),e.jsxs(g,{variant:"outline",size:"default",onClick:f,children:[e.jsx(j,{size:20}),"Pièce jointe"]})]}),e.jsxs(g,{variant:"ghost",size:"default",onClick:f,children:["Ajouter une pièce jointe",e.jsx(F,{size:20})]})]})]}),e.jsxs(g,{variant:"primary",size:"default",onClick:p,disabled:!n.trim()&&l.length===0,children:[u?"Enregistrer":"Envoyer le message",e.jsx(y,{size:20})]})]})}P.__docgenInfo={description:"",methods:[],displayName:"MessageEdit",props:{onSend:{required:!1,tsType:{name:"signature",type:"function",raw:"(html: string, plainText: string, attachments: File[]) => void",signature:{arguments:[{type:{name:"string"},name:"html"},{type:{name:"string"},name:"plainText"},{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"attachments"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Votre message..."',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"standard" | "chat"',elements:[{name:"literal",value:'"standard"'},{name:"literal",value:'"chat"'}]},description:"",defaultValue:{value:'"standard"',computed:!1}},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},isEditing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const Q={title:"Design System/Molecules/MessageEdit",component:P},o={args:{variant:"standard",placeholder:"Votre message...",onSend:(t,s,a)=>console.log("Send:",{html:t,text:s,files:a})}},i={args:{variant:"standard",isEditing:!0,defaultValue:"Bonjour, j'aimerais avoir plus de détails sur cette propriété.",onSend:(t,s,a)=>console.log("Save:",{html:t,text:s,files:a}),onCancel:()=>console.log("Cancel")}},d={args:{variant:"chat",placeholder:"Tapez un message...",onSend:(t,s,a)=>console.log("Send:",{html:t,text:s,files:a})}},c={args:{variant:"chat",isEditing:!0,defaultValue:"Message en cours d'édition",onSend:(t,s,a)=>console.log("Save:",{html:t,text:s,files:a}),onCancel:()=>console.log("Cancel")}};var b,S,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "standard",
    placeholder: "Votre message...",
    onSend: (html, text, files) => console.log("Send:", {
      html,
      text,
      files
    })
  }
}`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var N,w,z;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: "standard",
    isEditing: true,
    defaultValue: "Bonjour, j'aimerais avoir plus de détails sur cette propriété.",
    onSend: (html, text, files) => console.log("Save:", {
      html,
      text,
      files
    }),
    onCancel: () => console.log("Cancel")
  }
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var E,V,k;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "chat",
    placeholder: "Tapez un message...",
    onSend: (html, text, files) => console.log("Send:", {
      html,
      text,
      files
    })
  }
}`,...(k=(V=d.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var T,q,M;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "chat",
    isEditing: true,
    defaultValue: "Message en cours d'édition",
    onSend: (html, text, files) => console.log("Save:", {
      html,
      text,
      files
    }),
    onCancel: () => console.log("Cancel")
  }
}`,...(M=(q=c.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};const U=["Standard","StandardEditing","Chat","ChatEditing"];export{d as Chat,c as ChatEditing,o as Standard,i as StandardEditing,U as __namedExportsOrder,Q as default};
