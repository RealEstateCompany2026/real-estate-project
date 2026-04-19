import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as w}from"./index-BNURykns.js";function I({value:d="",onChange:t,placeholder:o="",type:c="text",leftIcon:i,rightIcon:n,rightIconClassName:p="",error:s=!1,disabled:a=!1,name:m,id:f,ariaLabel:x,autoComplete:g,required:v=!1,maxLength:b,onFocus:r,onBlur:l,className:y=""}){const[T,u]=w.useState(!1),h=()=>a?"border-edge-disabled":s?"border-red-500":T?"border-edge-neutral-default":"border-edge-disabled",q=()=>a?"bg-surface-neutral-action":s?"bg-red-50":"bg-surface-neutral-default";return e.jsxs("div",{className:`
        text-field-outlined-component
        w-full flex items-center gap-[8px]
        h-[56px] px-[12px] py-[18px]
        border border-solid rounded-[8px]
        transition-all
        ${h()}
        ${q()}
        ${a?"opacity-50 cursor-not-allowed":""}
        ${y}
      `.trim(),children:[i&&e.jsx("div",{className:"shrink-0 w-[20px] h-[20px] flex items-center justify-center text-content-caption",children:e.jsx(i,{size:20})}),e.jsx("input",{type:c,value:d,onChange:j=>t==null?void 0:t(j.target.value),placeholder:o,name:m,id:f,"aria-label":x,autoComplete:g,required:v,maxLength:b,disabled:a,onFocus:()=>{u(!0),r==null||r()},onBlur:()=>{u(!1),l==null||l()},className:`
          flex-1 bg-transparent text-[16px] leading-[20px]
          placeholder:text-content-subtle
          focus:outline-none
          text-content-body font-semibold
        `}),n&&e.jsx("div",{className:`shrink-0 w-[20px] h-[20px] flex items-center justify-center ${p||"text-content-caption"}`,children:e.jsx(n,{size:20})})]})}I.__docgenInfo={description:"",methods:[],displayName:"TextFieldOutlined",props:{value:{required:!1,tsType:{name:"string"},description:"Valeur du champ",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback appelé quand la valeur change"},placeholder:{required:!1,tsType:{name:"string"},description:"Texte du placeholder",defaultValue:{value:'""',computed:!1}},type:{required:!1,tsType:{name:"union",raw:`| "text"
| "email"
| "tel"
| "url"
| "password"
| "number"
| "search"
| "date"
| "time"
| "datetime-local"`,elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"email"'},{name:"literal",value:'"tel"'},{name:"literal",value:'"url"'},{name:"literal",value:'"password"'},{name:"literal",value:'"number"'},{name:"literal",value:'"search"'},{name:"literal",value:'"date"'},{name:"literal",value:'"time"'},{name:"literal",value:'"datetime-local"'}]},description:"Type de champ HTML5",defaultValue:{value:'"text"',computed:!1}},leftIcon:{required:!1,tsType:{name:"LucideIcon"},description:"Icône gauche (Lucide)"},rightIcon:{required:!1,tsType:{name:"LucideIcon"},description:"Icône droite (Lucide)"},rightIconClassName:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles pour l'icône droite",defaultValue:{value:'""',computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"État erreur (border rouge)",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"État disabled (non interactif)",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"Nom du champ (pour formulaires)"},id:{required:!1,tsType:{name:"string"},description:"ID du champ"},ariaLabel:{required:!1,tsType:{name:"string"},description:"Label accessible (aria-label)"},autoComplete:{required:!1,tsType:{name:"string"},description:"Autocomplete attribute"},required:{required:!1,tsType:{name:"boolean"},description:"Required field",defaultValue:{value:"false",computed:!1}},maxLength:{required:!1,tsType:{name:"number"},description:"Max length"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback sur focus"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback sur blur"},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};export{I as T};
