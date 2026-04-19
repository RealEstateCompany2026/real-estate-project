import{j as o}from"./jsx-runtime-BjG_zV1W.js";function x({method:t="visa",logoSrc:n,className:b=""}){const P=()=>{switch(t){case"visa":return"Visa";case"mastercard":return"Mastercard";case"cb":return"CB";case"paypal":return"PayPal";default:return t.toUpperCase()}};return o.jsx("div",{className:`
        relative h-[35px] w-[60px] rounded-[16px]
        border border-edge-default border-solid
        flex items-center justify-center
        bg-surface-neutral-default
        ${b}
      `.trim(),children:n?o.jsx("img",{alt:t,src:n,className:"w-full h-full object-contain rounded-[16px] p-1"}):o.jsx("span",{className:"text-xs font-semibold text-content-caption",children:P()})})}x.__docgenInfo={description:"",methods:[],displayName:"BadgePaymentMethod",props:{method:{required:!1,tsType:{name:"union",raw:'"visa" | "mastercard" | "cb" | "paypal"',elements:[{name:"literal",value:'"visa"'},{name:"literal",value:'"mastercard"'},{name:"literal",value:'"cb"'},{name:"literal",value:'"paypal"'}]},description:"",defaultValue:{value:'"visa"',computed:!1}},logoSrc:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const M={title:"Design System/Atoms/BadgePaymentMethod",component:x},e={args:{method:"visa"}},a={args:{method:"mastercard"}},r={args:{method:"cb"}},s={args:{method:"paypal"}};var c,d,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    method: "visa"
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,i,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    method: "mastercard"
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    method: "cb"
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,y,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    method: "paypal"
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const B=["Visa","Mastercard","CB","PayPal"];export{r as CB,a as Mastercard,s as PayPal,e as Visa,B as __namedExportsOrder,M as default};
