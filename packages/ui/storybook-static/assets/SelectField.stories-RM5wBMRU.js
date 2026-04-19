import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-BNURykns.js";import{L as Z}from"./Label-C5FOg3zv.js";import{M as ee}from"./MenuItem-44Ta0R4c.js";import{C as ae}from"./chevron-down-CwOBiCf7.js";import"./info-BiYvWz97.js";import"./createLucideIcon-CtqQySJq.js";function r({label:e,value:a,onChange:v,options:S,placeholder:H="Selectionner...",required:G=!1,disabled:f=!1,helperText:T,error:s,id:J,className:K=""}){const C=J||`select-${e.toLowerCase().replace(/\s+/g,"-")}`,[o,g]=n.useState(!1),y=n.useRef(null);n.useEffect(()=>{const t=Y=>{y.current&&!y.current.contains(Y.target)&&g(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]);const x=S.find(t=>t.value===a),Q=x?x.label:H,U=s?"border-edge-error-default":o?"border-edge-neutral-default":"border-edge-disabled hover:border-edge-neutral-default",X=f?"opacity-50 cursor-not-allowed bg-surface-neutral-action border-edge-disabled":"bg-surface-neutral-default cursor-pointer";return l.jsxs("div",{ref:y,className:`flex flex-col gap-[12px] ${K}`.trim(),children:[l.jsx(Z,{label:e,required:G,htmlFor:C}),l.jsxs("div",{className:"relative",children:[l.jsxs("button",{id:C,type:"button",onClick:()=>!f&&g(!o),disabled:f,className:`
            w-full h-[56px] px-[12px] py-[18px] rounded-[8px]
            text-[16px] leading-[20px] font-semibold
            border border-solid transition-all
            flex items-center justify-between
            ${U}
            ${X}
            ${x?"text-content-body":"text-content-caption"}
          `,children:[l.jsx("span",{className:"truncate text-left",children:Q}),l.jsx(ae,{size:20,className:`shrink-0 text-content-caption transition-transform ${o?"rotate-180":""}`})]}),o&&l.jsx("div",{className:"absolute z-50 top-full mt-1 w-full rounded-[16px] overflow-hidden bg-surface-neutral-default border border-solid border-edge-neutral-default shadow-lg max-h-80 overflow-y-auto",children:S.map(t=>l.jsx(ee,{label:t.label,selected:a===t.value,onClick:()=>{v(t.value),g(!1)}},t.value))})]}),(T||s)&&l.jsx("span",{className:`text-xs ${s?"text-content-error":"text-content-subtle"}`,children:s||T})]})}r.__docgenInfo={description:`SelectField - Champ de selection avec label

Composant molecule qui combine un dropdown custom (MenuItem du DS)
avec un Label. Remplace l'ancien select HTML natif.`,methods:[],displayName:"SelectField",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"{ value: string; label: string }[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Selectionner..."',computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const ce={title:"Design System/Molecules/SelectField",component:r},h=[{value:"maison",label:"Maison"},{value:"appartement",label:"Appartement"},{value:"commerce",label:"Commerce"},{value:"terrain",label:"Terrain"}],le=[{value:"A",label:"A - Très efficace"},{value:"B",label:"B - Efficace"},{value:"C",label:"C - Convenable"},{value:"D",label:"D - Assez convenable"},{value:"E",label:"E - Peu efficace"},{value:"F",label:"F - Très peu efficace"},{value:"G",label:"G - Extrêmement peu efficace"}],u={render:()=>{const[e,a]=n.useState("");return l.jsx(r,{label:"Type de bien",value:e,onChange:a,options:h,placeholder:"Choisir un type..."})}},i={render:()=>{const[e,a]=n.useState("");return l.jsx(r,{label:"Diagnostic DPE",value:e,onChange:a,options:le,required:!0})}},c={render:()=>{const[e,a]=n.useState("appartement");return l.jsx(r,{label:"Type de bien",value:e,onChange:a,options:h})}},d={render:()=>{const[e,a]=n.useState("");return l.jsx(r,{label:"Statut du mandat",value:e,onChange:a,options:[{value:"actif",label:"Actif"},{value:"suspendu",label:"Suspendu"},{value:"termine",label:"Terminé"}],helperText:"Sélectionnez le statut actuel du mandat"})}},p={render:()=>{const[e,a]=n.useState("");return l.jsx(r,{label:"Type de propriétaire",value:e,onChange:a,options:[{value:"personne",label:"Personne physique"},{value:"entreprise",label:"Entreprise"},{value:"syndic",label:"Syndic"}],error:"Ce champ est obligatoire"})}},m={render:()=>{const[e,a]=n.useState("maison");return l.jsx(r,{label:"Type de bien",value:e,onChange:a,options:h,disabled:!0})}},b={render:()=>{const[e,a]=n.useState(""),v=[{value:"paris",label:"Paris"},{value:"lyon",label:"Lyon"},{value:"marseille",label:"Marseille"},{value:"toulouse",label:"Toulouse"},{value:"nice",label:"Nice"},{value:"nantes",label:"Nantes"},{value:"strasbourg",label:"Strasbourg"},{value:"montpellier",label:"Montpellier"},{value:"bordeaux",label:"Bordeaux"},{value:"lille",label:"Lille"}];return l.jsx(r,{label:"Ville",value:e,onChange:a,options:v,placeholder:"Sélectionner une ville...",required:!0})}};var V,q,j;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <SelectField label="Type de bien" value={value} onChange={setValue} options={propertyTypeOptions} placeholder="Choisir un type..." />;
  }
}`,...(j=(q=u.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var E,w,F;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <SelectField label="Diagnostic DPE" value={value} onChange={setValue} options={dpeOptions} required />;
  }
}`,...(F=(w=i.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var D,N,O;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("appartement");
    return <SelectField label="Type de bien" value={value} onChange={setValue} options={propertyTypeOptions} />;
  }
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var L,M,A;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <SelectField label="Statut du mandat" value={value} onChange={setValue} options={[{
      value: "actif",
      label: "Actif"
    }, {
      value: "suspendu",
      label: "Suspendu"
    }, {
      value: "termine",
      label: "Terminé"
    }]} helperText="Sélectionnez le statut actuel du mandat" />;
  }
}`,...(A=(M=d.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var P,$,k;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <SelectField label="Type de propriétaire" value={value} onChange={setValue} options={[{
      value: "personne",
      label: "Personne physique"
    }, {
      value: "entreprise",
      label: "Entreprise"
    }, {
      value: "syndic",
      label: "Syndic"
    }]} error="Ce champ est obligatoire" />;
  }
}`,...(k=($=p.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var W,z,I;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("maison");
    return <SelectField label="Type de bien" value={value} onChange={setValue} options={propertyTypeOptions} disabled />;
  }
}`,...(I=(z=m.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var R,B,_;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const cities = [{
      value: "paris",
      label: "Paris"
    }, {
      value: "lyon",
      label: "Lyon"
    }, {
      value: "marseille",
      label: "Marseille"
    }, {
      value: "toulouse",
      label: "Toulouse"
    }, {
      value: "nice",
      label: "Nice"
    }, {
      value: "nantes",
      label: "Nantes"
    }, {
      value: "strasbourg",
      label: "Strasbourg"
    }, {
      value: "montpellier",
      label: "Montpellier"
    }, {
      value: "bordeaux",
      label: "Bordeaux"
    }, {
      value: "lille",
      label: "Lille"
    }];
    return <SelectField label="Ville" value={value} onChange={setValue} options={cities} placeholder="Sélectionner une ville..." required />;
  }
}`,...(_=(B=b.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};const de=["Default","Required","WithSelected","WithHelperText","WithError","Disabled","ManyOptions"];export{u as Default,m as Disabled,b as ManyOptions,i as Required,p as WithError,d as WithHelperText,c as WithSelected,de as __namedExportsOrder,ce as default};
