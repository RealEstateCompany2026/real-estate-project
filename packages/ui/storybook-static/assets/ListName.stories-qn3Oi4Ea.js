import{j as t}from"./jsx-runtime-BjG_zV1W.js";function N({firstName:g,lastName:f,onClick:r,className:x=""}){const h=r?"button":"div";return t.jsxs(h,{onClick:r,className:`flex flex-col gap-3 text-left text-content-body ${x}`,children:[t.jsx("p",{className:"relative shrink-0 w-full text-[16px] leading-[20px]",children:g}),t.jsx("p",{className:"relative shrink-0 w-full text-[16px] leading-[20px] font-semibold text-content-headings",children:f})]})}N.__docgenInfo={description:"",methods:[],displayName:"ListName",props:{firstName:{required:!0,tsType:{name:"string"},description:""},lastName:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const y={title:"Design System/Atoms/ListName",component:N},e={args:{firstName:"Jean",lastName:"Dupont"}},a={args:{firstName:"Marie",lastName:"Martin",onClick:()=>console.log("Name clicked")}},s={args:{firstName:"Alexander",lastName:"Vanderbilt-Richardson"}};var n,i,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    firstName: "Jean",
    lastName: "Dupont"
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var c,m,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    firstName: "Marie",
    lastName: "Martin",
    onClick: () => console.log("Name clicked")
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    firstName: "Alexander",
    lastName: "Vanderbilt-Richardson"
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const v=["Default","WithClick","LongNames"];export{e as Default,s as LongNames,a as WithClick,v as __namedExportsOrder,y as default};
