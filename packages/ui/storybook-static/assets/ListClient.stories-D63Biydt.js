import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as D}from"./Badge-DS_tmhFu.js";import{C as k}from"./Chip-DbXFJYRR.js";import{K as r}from"./KpiIndicator-c9bDg6aa.js";import{A as V}from"./AiSuggestion-oBwrb1u-.js";import{U as y}from"./user-BnRui8Nx.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";import"./database-Dl4PIW4M.js";function n(){return e.jsx("div",{className:"divider h-[84px] w-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] shrink-0 transition-colors"})}function i({firstName:U,lastName:h,badges:C=[{label:"VENDEUR",variant:"default"},{label:"ACQUÉREUR",variant:"default"}],kpis:a,aiSuggestions:A=0,onClick:j,className:S=""}){return e.jsxs("div",{className:`group w-full bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between cursor-pointer transition-colors overflow-hidden ${S}`.trim(),onClick:j,children:[e.jsx("div",{className:"flex flex-col items-start pl-[30px] pr-[138px] py-[34px] shrink-0 w-[425px] h-[120px]",children:e.jsxs("div",{className:"flex flex-col gap-[12px] items-start w-[259px]",children:[e.jsx("div",{className:"flex gap-[12px] items-center",children:C.map((c,q)=>e.jsx(D,{variant:c.variant,children:c.label},q))}),e.jsxs(k,{size:"medium",icon:e.jsx(y,{size:20,className:"text-icon-neutral-default"}),children:[U," ",h]})]})}),e.jsx(n,{}),e.jsx(r,{kpi:"qual",value:`${a.qualification}%`,percentage:a.qualification,variant:"vertical",className:"w-[77px] shrink-0"}),e.jsx(n,{}),e.jsx(r,{kpi:"eng",value:`${a.engagement}%`,percentage:a.engagement,variant:"vertical",className:"w-[78px] shrink-0"}),e.jsx(n,{}),e.jsx(r,{kpi:"conv",value:`${a.conversion}%`,percentage:a.conversion,variant:"vertical",className:"w-[78px] shrink-0"}),e.jsx(n,{}),e.jsx(r,{kpi:"reac",value:`${a.reactivation}%`,percentage:a.reactivation,variant:"vertical",className:"w-[78px] shrink-0"}),e.jsx(n,{}),e.jsx("div",{className:"flex flex-col items-center justify-center pr-[38px] py-[48px] shrink-0 w-[86px] h-[120px]",children:e.jsx(V,{count:A})})]})}i.__docgenInfo={description:"",methods:[],displayName:"ListClient",props:{firstName:{required:!0,tsType:{name:"string"},description:"Prénom du client"},lastName:{required:!0,tsType:{name:"string"},description:"Nom de famille du client"},badges:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; variant?: BadgeVariant }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>',required:!1}}]}}],raw:"Array<{ label: string; variant?: BadgeVariant }>"},description:"Badges rôles (ex: VENDEUR, ACQUÉREUR)",defaultValue:{value:`[
  { label: "VENDEUR", variant: "default" },
  { label: "ACQUÉREUR", variant: "default" },
]`,computed:!1}},kpis:{required:!0,tsType:{name:"ListClientKpi"},description:"KPI pourcentages (0-100)"},aiSuggestions:{required:!1,tsType:{name:"number"},description:"Nombre de suggestions IA",defaultValue:{value:"0",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback au clic"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles",defaultValue:{value:'""',computed:!1}}}};const J={title:"Design System/Organisms/ListClient",component:i},t={args:{firstName:"Jean-Christophe",lastName:"LEMARCHAND",badges:[{label:"VENDEUR",variant:"default"},{label:"ACQUÉREUR",variant:"default"}],kpis:{qualification:64,engagement:82,conversion:24,reactivation:49},aiSuggestions:0}},s={args:{firstName:"Marie",lastName:"DUPONT",badges:[{label:"VENDEUR",variant:"default"}],kpis:{qualification:92,engagement:78,conversion:56,reactivation:34},aiSuggestions:3}},l={args:{firstName:"Pierre",lastName:"MARTIN",badges:[{label:"ACQUÉREUR",variant:"default"}],kpis:{qualification:18,engagement:12,conversion:8,reactivation:22},aiSuggestions:4}},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(i,{firstName:"Jean-Christophe",lastName:"LEMARCHAND",badges:[{label:"VENDEUR",variant:"default"},{label:"ACQUÉREUR",variant:"default"}],kpis:{qualification:64,engagement:82,conversion:24,reactivation:49},aiSuggestions:0}),e.jsx(i,{firstName:"Marie",lastName:"DUPONT",badges:[{label:"VENDEUR",variant:"default"}],kpis:{qualification:92,engagement:78,conversion:56,reactivation:34},aiSuggestions:3}),e.jsx(i,{firstName:"Pierre",lastName:"MARTIN",badges:[{label:"ACQUÉREUR",variant:"default"}],kpis:{qualification:18,engagement:12,conversion:8,reactivation:22},aiSuggestions:4})]})};var u,d,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    firstName: "Jean-Christophe",
    lastName: "LEMARCHAND",
    badges: [{
      label: "VENDEUR",
      variant: "default"
    }, {
      label: "ACQUÉREUR",
      variant: "default"
    }],
    kpis: {
      qualification: 64,
      engagement: 82,
      conversion: 24,
      reactivation: 49
    },
    aiSuggestions: 0
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,p,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    firstName: "Marie",
    lastName: "DUPONT",
    badges: [{
      label: "VENDEUR",
      variant: "default"
    }],
    kpis: {
      qualification: 92,
      engagement: 78,
      conversion: 56,
      reactivation: 34
    },
    aiSuggestions: 3
  }
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var f,N,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    firstName: "Pierre",
    lastName: "MARTIN",
    badges: [{
      label: "ACQUÉREUR",
      variant: "default"
    }],
    kpis: {
      qualification: 18,
      engagement: 12,
      conversion: 8,
      reactivation: 22
    },
    aiSuggestions: 4
  }
}`,...(x=(N=l.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var b,R,E;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <ListClient firstName="Jean-Christophe" lastName="LEMARCHAND" badges={[{
      label: "VENDEUR",
      variant: "default"
    }, {
      label: "ACQUÉREUR",
      variant: "default"
    }]} kpis={{
      qualification: 64,
      engagement: 82,
      conversion: 24,
      reactivation: 49
    }} aiSuggestions={0} />
      <ListClient firstName="Marie" lastName="DUPONT" badges={[{
      label: "VENDEUR",
      variant: "default"
    }]} kpis={{
      qualification: 92,
      engagement: 78,
      conversion: 56,
      reactivation: 34
    }} aiSuggestions={3} />
      <ListClient firstName="Pierre" lastName="MARTIN" badges={[{
      label: "ACQUÉREUR",
      variant: "default"
    }]} kpis={{
      qualification: 18,
      engagement: 12,
      conversion: 8,
      reactivation: 22
    }} aiSuggestions={4} />
    </div>
}`,...(E=(R=o.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const K=["Default","WithAiSuggestions","LowScores","MultipleRows"];export{t as Default,l as LowScores,o as MultipleRows,s as WithAiSuggestions,K as __namedExportsOrder,J as default};
