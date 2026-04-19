import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as t}from"./index-BNURykns.js";import{X as R}from"./x-C_NNgUki.js";import{I as B}from"./info-BiYvWz97.js";import{T as G}from"./triangle-alert-WN3b9Z4q.js";import{C as H}from"./circle-x-DfRUSFQm.js";import{c as J}from"./createLucideIcon-CtqQySJq.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=J("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);function W({id:Q,variant:$,title:_,description:d,duration:p=5e3,onClose:l,persistent:m=!1}){const[M,F]=t.useState(!1),[P,U]=t.useState(!1);t.useEffect(()=>{requestAnimationFrame(()=>{F(!0)})},[]),t.useEffect(()=>{if(m)return;const O=setTimeout(()=>{g()},p);return()=>clearTimeout(O)},[p,m]);const g=()=>{U(!0),setTimeout(()=>{l==null||l()},300)},r=(()=>{switch($){case"success":return{icon:K,bgClass:"bg-green-500/10",borderClass:"border-edge-success-default",iconColorClass:"text-content-success"};case"error":return{icon:H,bgClass:"bg-red-500/10",borderClass:"border-edge-error-default",iconColorClass:"text-content-error"};case"warning":return{icon:G,bgClass:"bg-orange-500/10",borderClass:"border-edge-warning-default",iconColorClass:"text-content-warning"};case"info":return{icon:B,bgClass:"bg-blue-500/10",borderClass:"border-edge-information-default",iconColorClass:"text-content-information"}}})(),X=r.icon;return e.jsxs("div",{className:`
        relative w-[400px] p-[16px] rounded-[16px]
        flex items-start gap-[12px]
        transition-all duration-300 ease-out
        border
        ${r.bgClass}
        ${r.borderClass}
        ${M&&!P?"translate-x-0 opacity-100":"translate-x-full opacity-0"}
        shadow-md
      `.trim(),children:[e.jsx("div",{className:"shrink-0 mt-[2px]",children:e.jsx(X,{size:20,className:`${r.iconColorClass} stroke-[2]`})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"font-medium text-[16px] leading-[20px] tracking-[0.16px] mb-[4px] text-content-body font-roboto",children:_}),d&&e.jsx("p",{className:"text-[14px] leading-[18px] tracking-[0.14px] text-content-placeholder font-roboto",children:d})]}),e.jsx("button",{onClick:g,className:"shrink-0 p-[4px] rounded-[8px] transition-all hover:opacity-70 text-content-body","aria-label":"Fermer",children:e.jsx(R,{size:16,strokeWidth:2})})]})}W.__docgenInfo={description:"Toast - Composant individuel",methods:[],displayName:"Toast",props:{id:{required:!0,tsType:{name:"string"},description:"ID unique du toast"},variant:{required:!0,tsType:{name:"union",raw:'"success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}]},description:"Variant du toast (success, error, warning, info)"},title:{required:!0,tsType:{name:"string"},description:"Titre du toast"},description:{required:!1,tsType:{name:"string"},description:"Description optionnelle"},duration:{required:!1,tsType:{name:"number"},description:`Durée avant auto-dismiss (ms)
@default 5000`,defaultValue:{value:"5000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback appelé lors de la fermeture"},persistent:{required:!1,tsType:{name:"boolean"},description:"Désactive l'auto-dismiss",defaultValue:{value:"false",computed:!1}}}};const ie={title:"Design System/Molecules/Toast",component:W},s={args:{id:"toast-1",variant:"success",title:"Succès",description:"Le client a été créé avec succès.",persistent:!0}},a={args:{id:"toast-2",variant:"error",title:"Erreur",description:"Une erreur est survenue lors de la sauvegarde.",persistent:!0}},n={args:{id:"toast-3",variant:"warning",title:"Attention",description:"Cet enregistrement sera supprimé définitivement.",persistent:!0}},i={args:{id:"toast-4",variant:"info",title:"Information",description:"Synchronisation en cours avec vos données.",persistent:!0}},o={args:{id:"toast-5",variant:"success",title:"Propriété publiée",persistent:!0}},c={args:{id:"toast-6",variant:"info",title:"Info temporaire",description:"Ce message disparaîtra après 5 secondes.",duration:5e3}},u={args:{id:"toast-7",variant:"error",title:"Erreur de validation",description:"Veuillez vérifier que tous les champs requis sont remplis correctement avant de continuer.",persistent:!0}};var f,v,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: "toast-1",
    variant: "success" as ToastVariant,
    title: "Succès",
    description: "Le client a été créé avec succès.",
    persistent: true
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,C,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: "toast-2",
    variant: "error" as ToastVariant,
    title: "Erreur",
    description: "Une erreur est survenue lors de la sauvegarde.",
    persistent: true
  }
}`,...(h=(C=a.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var y,T,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: "toast-3",
    variant: "warning" as ToastVariant,
    title: "Attention",
    description: "Cet enregistrement sera supprimé définitivement.",
    persistent: true
  }
}`,...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var V,w,I;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    id: "toast-4",
    variant: "info" as ToastVariant,
    title: "Information",
    description: "Synchronisation en cours avec vos données.",
    persistent: true
  }
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var q,E,k;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    id: "toast-5",
    variant: "success" as ToastVariant,
    title: "Propriété publiée",
    persistent: true
  }
}`,...(k=(E=o.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var j,D,N;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: "toast-6",
    variant: "info" as ToastVariant,
    title: "Info temporaire",
    description: "Ce message disparaîtra après 5 secondes.",
    duration: 5000
  }
}`,...(N=(D=c.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var A,z,L;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: "toast-7",
    variant: "error" as ToastVariant,
    title: "Erreur de validation",
    description: "Veuillez vérifier que tous les champs requis sont remplis correctement avant de continuer.",
    persistent: true
  }
}`,...(L=(z=u.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const oe=["Success","Error","Warning","Info","WithoutDescription","AutoDismiss","LongMessage"];export{c as AutoDismiss,a as Error,i as Info,u as LongMessage,s as Success,n as Warning,o as WithoutDescription,oe as __namedExportsOrder,ie as default};
