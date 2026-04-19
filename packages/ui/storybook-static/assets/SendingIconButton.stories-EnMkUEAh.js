import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{S as c}from"./send-C08PLC66.js";import{C as q}from"./check-BPMjXyas.js";import"./createLucideIcon-CtqQySJq.js";import"./index-BNURykns.js";function y({status:o="idle",onClick:C,disabled:j=!1,className:w="",title:N}){const I=o==="sent",d=o==="sending",i=j||d,t=(()=>{switch(o){case"sent":return{background:"bg-green-500",border:"border-edge-success-default",icon:e.jsx(q,{className:"w-[20px] h-[20px]"})};case"sending":return{background:"bg-surface-branded-action-hover",border:"border-edge-branded-action",icon:e.jsx(c,{className:"w-[20px] h-[20px]"})};case"idle":default:return{background:"bg-surface-branded-action",border:"border-edge-branded-action",icon:e.jsx(c,{className:"w-[20px] h-[20px]"})}}})();return e.jsx("button",{onClick:i?void 0:C,disabled:i,title:N||(I?"Envoyé":d?"Envoi en cours...":"Envoyer"),className:`
        sending-icon-button-component
        relative rounded-[16px] transition-colors inline-flex
        w-[46px] h-[46px] p-[12px]
        border border-solid
        ${t.background}
        ${t.border}
        cursor-pointer hover:bg-surface-branded-action-hover
        disabled:pointer-events-none disabled:bg-surface-disabled disabled:text-content-disabled disabled:border-edge-disabled
        ${w}
      `.trim(),children:e.jsx("div",{className:"flex flex-row items-center justify-center size-full",children:e.jsx("div",{className:"relative shrink-0 w-[20px] h-[20px] transition-colors text-content-branded-on-action",children:t.icon})})})}y.__docgenInfo={description:"",methods:[],displayName:"SendingIconButton",props:{status:{required:!1,tsType:{name:"union",raw:'"idle" | "sending" | "sent"',elements:[{name:"literal",value:'"idle"'},{name:"literal",value:'"sending"'},{name:"literal",value:'"sent"'}]},description:"",defaultValue:{value:'"idle"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""}}};const $={title:"Design System/Atoms/SendingIconButton",component:y},s={args:{status:"idle",onClick:()=>console.log("Send clicked")}},n={args:{status:"sending",onClick:()=>console.log("Send clicked")}},r={args:{status:"sent",onClick:()=>console.log("Send clicked")}},a={args:{status:"idle",disabled:!0}};var l,u,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    status: "idle",
    onClick: () => console.log("Send clicked")
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,g,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: "sending",
    onClick: () => console.log("Send clicked")
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,x,S;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: "sent",
    onClick: () => console.log("Send clicked")
  }
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var k,v,h;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    status: "idle",
    disabled: true
  }
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const z=["Idle","Sending","Sent","Disabled"];export{a as Disabled,s as Idle,n as Sending,r as Sent,z as __namedExportsOrder,$ as default};
