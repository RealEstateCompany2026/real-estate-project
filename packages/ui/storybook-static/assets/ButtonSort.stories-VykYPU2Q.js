import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as S}from"./createLucideIcon-CtqQySJq.js";import"./index-BNURykns.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=S("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=S("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);function w({label:a,count:c,sortDirection:o="none",onClick:D,disabled:l=!1,className:N=""}){const j=c!==void 0?`${a} (${c})`:a,i=o!=="none";return e.jsxs("button",{onClick:D,disabled:l,className:`
        button-sort-component inline-flex items-center transition-all
        ${l?"cursor-not-allowed opacity-50":"cursor-pointer hover:opacity-70"}
        ${N}
      `.trim(),"aria-label":`Trier par ${a} ${o==="asc"?"croissant":o==="desc"?"décroissant":""}`,children:[e.jsx("div",{className:"p-3",children:e.jsx("p",{className:`
            text-base font-semibold tracking-[0.14px] whitespace-nowrap
            ${i?"text-content-body":"text-content-caption"}
          `,children:j})}),i&&e.jsx("div",{className:"w-5 h-5 shrink-0",children:o==="asc"?e.jsx(q,{className:"w-full h-full",style:{color:"var(--icon-neutral-default)",strokeWidth:"1.5px"}}):e.jsx(C,{className:"w-full h-full",style:{color:"var(--icon-neutral-default)",strokeWidth:"1.5px"}})})]})}w.__docgenInfo={description:"",methods:[],displayName:"ButtonSort",props:{label:{required:!0,tsType:{name:"string"},description:""},count:{required:!1,tsType:{name:"number"},description:""},sortDirection:{required:!1,tsType:{name:"union",raw:'"none" | "asc" | "desc"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const I={title:"Design System/Atoms/ButtonSort",component:w},r={args:{label:"Clients",count:482,sortDirection:"none",onClick:()=>console.log("Sort clicked")}},s={args:{label:"Properties",count:156,sortDirection:"asc",onClick:()=>console.log("Sort clicked")}},n={args:{label:"Prospects",sortDirection:"desc",onClick:()=>console.log("Sort clicked")}},t={args:{label:"Inactive",disabled:!0,sortDirection:"none"}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Clients",
    count: 482,
    sortDirection: "none",
    onClick: () => console.log("Sort clicked")
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Properties",
    count: 156,
    sortDirection: "asc",
    onClick: () => console.log("Sort clicked")
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var k,b,v;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Prospects",
    sortDirection: "desc",
    onClick: () => console.log("Sort clicked")
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,y,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Inactive",
    disabled: true,
    sortDirection: "none"
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const P=["NoSort","Ascending","Descending","Disabled"];export{s as Ascending,n as Descending,t as Disabled,r as NoSort,P as __namedExportsOrder,I as default};
