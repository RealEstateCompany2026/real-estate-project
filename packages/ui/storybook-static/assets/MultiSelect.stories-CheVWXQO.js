import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as a}from"./index-BNURykns.js";import{C as G}from"./chevron-down-CwOBiCf7.js";import{C as J}from"./check-BPMjXyas.js";import"./createLucideIcon-CtqQySJq.js";function r({label:t,options:s,value:l,onChange:x,placeholder:B="Sélectionner...",disabled:f=!1,className:R=""}){const[i,v]=a.useState(!1),b=a.useRef(null);a.useEffect(()=>{const n=o=>{b.current&&!b.current.contains(o.target)&&v(!1)};return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[]);const H=n=>{l.includes(n)?x(l.filter(o=>o!==n)):x([...l,n])},F=l.length>0?`${t} (${l.length})`:B;return e.jsxs("div",{ref:b,className:`relative ${R}`.trim(),children:[e.jsxs("button",{type:"button",onClick:()=>!f&&v(!i),disabled:f,className:`h-[56px] w-full rounded-[8px] px-[12px] py-[18px] bg-surface-neutral-default border border-solid flex items-center justify-between transition-all ${f?"opacity-50 cursor-not-allowed bg-surface-neutral-action border-edge-disabled":i?"border-edge-neutral-default cursor-pointer":"border-edge-disabled cursor-pointer hover:border-edge-neutral-default"}`,children:[e.jsx("span",{className:"text-[16px] leading-[20px] font-semibold text-content-body truncate",children:F}),e.jsx(G,{size:20,className:`shrink-0 text-content-caption transition-transform duration-200 ml-2 ${i?"rotate-180":""}`})]}),i&&e.jsx("div",{className:"absolute z-50 top-full mt-1 w-full rounded-[8px] bg-surface-neutral-default border border-solid border-edge-neutral-default shadow-lg max-h-80 overflow-y-auto py-2",children:s.map(n=>{const o=l.includes(n);return e.jsxs("button",{type:"button",className:`w-full h-[48px] px-[12px] py-[12px] flex items-center gap-[8px] transition-colors ${o?"bg-surface-neutral-action":"hover:bg-surface-neutral-action"}`,onClick:()=>H(n),children:[e.jsx("div",{className:`size-5 rounded shrink-0 flex items-center justify-center border ${o?"bg-surface-branded-default border-surface-branded-default":"bg-surface-neutral-default border-edge-default"}`,children:o&&e.jsx(J,{size:14,className:"text-content-branded-on-action",strokeWidth:3})}),e.jsx("span",{className:"text-[16px] leading-[20px] font-semibold text-content-body text-left",children:n})]},n)})})]})}r.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{label:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Sélectionner..."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const te={title:"Design System/Molecules/MultiSelect",component:r,argTypes:{label:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"}}},S=["Option 1","Option 2","Option 3","Option 4","Option 5"],Y=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego"],K=["Active","Inactive","Pending","Archived","Draft"],c={render:()=>{const[t,s]=a.useState([]);return e.jsx(r,{label:"Select Items",options:S,value:t,onChange:s,placeholder:"Choose options..."})}},u={render:()=>{const[t,s]=a.useState(["Option 1","Option 3"]);return e.jsx(r,{label:"Select Items",options:S,value:t,onChange:s,placeholder:"Choose options..."})}},d={render:()=>{const[t,s]=a.useState([]);return e.jsx(r,{label:"Select Cities",options:Y,value:t,onChange:s,placeholder:"Choose cities..."})}},p={render:()=>{const[t,s]=a.useState(["New York","Chicago"]);return e.jsx(r,{label:"Select Cities",options:Y,value:t,onChange:s,placeholder:"Choose cities..."})}},m={render:()=>{const[t,s]=a.useState([]);return e.jsx(r,{label:"Select Status",options:K,value:t,onChange:s,placeholder:"Choose status..."})}},h={render:()=>{const[t,s]=a.useState(["Option 1"]);return e.jsx(r,{label:"Select Items",options:S,value:t,onChange:s,placeholder:"Choose options...",disabled:!0})}},g={render:()=>{const[t,s]=a.useState([]);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{label:"Select Options",options:["Apple","Banana","Cherry","Date","Elderberry"],value:t,onChange:s,placeholder:"Choose fruits..."}),e.jsxs("div",{className:"p-3 bg-gray-100 rounded",children:[e.jsx("p",{className:"text-sm font-semibold mb-2",children:"Selected:"}),e.jsx("p",{className:"text-sm",children:t.length===0?"None selected":t.join(", ")})]})]})}};var C,y,O;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <MultiSelect label="Select Items" options={defaultOptions} value={value} onChange={setValue} placeholder="Choose options..." />;
  }
}`,...(O=(y=c.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var j,N,V;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(["Option 1", "Option 3"]);
    return <MultiSelect label="Select Items" options={defaultOptions} value={value} onChange={setValue} placeholder="Choose options..." />;
  }
}`,...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var w,M,k;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <MultiSelect label="Select Cities" options={CityOptions} value={value} onChange={setValue} placeholder="Choose cities..." />;
  }
}`,...(k=(M=d.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var D,A,I;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(["New York", "Chicago"]);
    return <MultiSelect label="Select Cities" options={CityOptions} value={value} onChange={setValue} placeholder="Choose cities..." />;
  }
}`,...(I=(A=p.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var E,T,q;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <MultiSelect label="Select Status" options={StatusOptions} value={value} onChange={setValue} placeholder="Choose status..." />;
  }
}`,...(q=(T=m.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var $,W,z;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(["Option 1"]);
    return <MultiSelect label="Select Items" options={defaultOptions} value={value} onChange={setValue} placeholder="Choose options..." disabled={true} />;
  }
}`,...(z=(W=h.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var L,_,P;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div className="flex flex-col gap-4">
        <MultiSelect label="Select Options" options={["Apple", "Banana", "Cherry", "Date", "Elderberry"]} value={value} onChange={setValue} placeholder="Choose fruits..." />
        <div className="p-3 bg-gray-100 rounded">
          <p className="text-sm font-semibold mb-2">Selected:</p>
          <p className="text-sm">
            {value.length === 0 ? "None selected" : value.join(", ")}
          </p>
        </div>
      </div>;
  }
}`,...(P=(_=g.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const se=["Default","WithSelection","Cities","CitiesWithSelection","Status","Disabled","Controlled"];export{d as Cities,p as CitiesWithSelection,g as Controlled,c as Default,h as Disabled,m as Status,u as WithSelection,se as __namedExportsOrder,te as default};
