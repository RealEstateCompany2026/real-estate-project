import{j as i}from"./jsx-runtime-BjG_zV1W.js";function v({checked:a=!1,onChange:r,disabled:e=!1,name:c,id:w,ariaLabel:D,className:L=""}){const S=()=>{e||r==null||r(!a)},q=n=>{e||(n.key===" "||n.key==="Enter")&&(n.preventDefault(),r==null||r(!a))},j=a?"bg-green-500":"bg-surface-neutral-action-hover";return i.jsxs("div",{className:`relative w-12 h-[30px] rounded-2xl transition-all duration-200 group ${e?"cursor-not-allowed opacity-40":"cursor-pointer"} ${j} ${L}`.trim(),onClick:S,onKeyDown:q,role:"switch","aria-checked":a,"aria-disabled":e,"aria-label":D,tabIndex:e?-1:0,children:[c&&i.jsx("input",{type:"checkbox",name:c,id:w,checked:a,disabled:e,onChange:()=>{},className:"sr-only",tabIndex:-1,"aria-hidden":"true"}),i.jsx("div",{className:`absolute top-[3px] size-6 rounded-full shadow-sm transition-all duration-200 ${a?"left-[21px]":"left-[3px]"} ${e?"":"group-hover:opacity-90"}`,style:{backgroundColor:"var(--surface-neutral-default)"}})]})}v.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const $={title:"Design System/Atoms/Switch",component:v,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},ariaLabel:{control:"text"}}},s={args:{checked:!1,disabled:!1,ariaLabel:"Toggle feature"}},t={args:{checked:!0,disabled:!1,ariaLabel:"Toggle feature"}},o={args:{checked:!1,disabled:!0,ariaLabel:"Toggle feature"}},l={args:{checked:!0,disabled:!0,ariaLabel:"Toggle feature"}};var d,u,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    ariaLabel: "Toggle feature"
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,m,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    ariaLabel: "Toggle feature"
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,y,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    ariaLabel: "Toggle feature"
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var k,x,T;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    ariaLabel: "Toggle feature"
  }
}`,...(T=(x=l.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const _=["Default","Checked","Disabled","DisabledChecked"];export{t as Checked,s as Default,o as Disabled,l as DisabledChecked,_ as __namedExportsOrder,$ as default};
