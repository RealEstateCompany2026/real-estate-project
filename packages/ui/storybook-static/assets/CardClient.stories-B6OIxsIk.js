import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as D}from"./Badge-DS_tmhFu.js";import{C as V}from"./Chip-DbXFJYRR.js";import{K as r}from"./KpiIndicator-c9bDg6aa.js";import{A as q}from"./AiSuggestion-oBwrb1u-.js";import{U as A}from"./user-BnRui8Nx.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-BNURykns.js";import"./createLucideIcon-CtqQySJq.js";import"./database-Dl4PIW4M.js";function l(){return e.jsx("div",{className:"divider w-full h-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] transition-colors"})}function c(){return e.jsx("div",{className:"divider h-[84px] w-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] shrink-0 transition-colors"})}function s({firstName:b,lastName:C,badges:E=[{label:"VENDEUR",variant:"default"},{label:"ACQUÉREUR",variant:"default"}],kpis:a,aiSuggestions:h=0,onClick:U,className:R=""}){return e.jsxs("div",{className:`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex flex-col gap-[22px] items-center pb-[24px] w-[350px] cursor-pointer transition-colors ${R}`.trim(),onClick:U,children:[e.jsxs("div",{className:"flex flex-col items-start w-full",children:[e.jsx("div",{className:"flex flex-col items-start pl-[30px] pr-[138px] py-[34px] w-full h-[120px]",children:e.jsxs("div",{className:"flex flex-col gap-[12px] items-start w-[259px]",children:[e.jsx("div",{className:"flex gap-[12px] items-center",children:E.map((o,j)=>e.jsx(D,{variant:o.variant,children:o.label},j))}),e.jsxs(V,{size:"medium",icon:e.jsx(A,{size:20,className:"text-icon-neutral-default"}),children:[b," ",C]})]})}),e.jsxs("div",{className:"flex flex-col gap-[22px] items-center w-full",children:[e.jsx(l,{}),e.jsxs("div",{className:"flex gap-[38px] items-center",children:[e.jsx(r,{kpi:"qual",value:`${a.qualification}%`,percentage:a.qualification,variant:"vertical",className:"w-[77px]"}),e.jsx(c,{}),e.jsx(r,{kpi:"eng",value:`${a.engagement}%`,percentage:a.engagement,variant:"vertical",className:"w-[78px]"})]}),e.jsx(l,{}),e.jsxs("div",{className:"flex gap-[38px] items-center",children:[e.jsx(r,{kpi:"conv",value:`${a.conversion}%`,percentage:a.conversion,variant:"vertical",className:"w-[78px]"}),e.jsx(c,{}),e.jsx(r,{kpi:"reac",value:`${a.reactivation}%`,percentage:a.reactivation,variant:"vertical",className:"w-[78px]"})]}),e.jsx(l,{})]})]}),e.jsx(q,{count:h})]})}s.__docgenInfo={description:"",methods:[],displayName:"CardClient",props:{firstName:{required:!0,tsType:{name:"string"},description:"Prénom du client"},lastName:{required:!0,tsType:{name:"string"},description:"Nom de famille du client"},badges:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; variant?: BadgeVariant }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"NonNullable",elements:[{name:'VariantProps["variant"]',raw:'VariantProps<typeof badgeVariants>["variant"]'}],raw:'NonNullable<VariantProps<typeof badgeVariants>["variant"]>',required:!1}}]}}],raw:"Array<{ label: string; variant?: BadgeVariant }>"},description:"Badges rôles (ex: VENDEUR, ACQUÉREUR)",defaultValue:{value:`[
  { label: "VENDEUR", variant: "default" },
  { label: "ACQUÉREUR", variant: "default" },
]`,computed:!1}},kpis:{required:!0,tsType:{name:"CardClientKpi"},description:"KPI pourcentages (0-100)"},aiSuggestions:{required:!1,tsType:{name:"number"},description:"Nombre de suggestions IA",defaultValue:{value:"0",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback au clic"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles",defaultValue:{value:'""',computed:!1}}}};const $={title:"Design System/Organisms/CardClient",component:s},i={args:{firstName:"Jean-Christophe",lastName:"LEMARCHAND",badges:[{label:"VENDEUR",variant:"default"},{label:"ACQUÉREUR",variant:"default"}],kpis:{qualification:64,engagement:82,conversion:24,reactivation:49},aiSuggestions:2}},n={args:{firstName:"Marie",lastName:"DUPONT",badges:[{label:"VENDEUR",variant:"default"}],kpis:{qualification:92,engagement:88,conversion:76,reactivation:81},aiSuggestions:0}},t={render:()=>e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(s,{firstName:"Jean-Christophe",lastName:"LEMARCHAND",badges:[{label:"VENDEUR",variant:"default"},{label:"ACQUÉREUR",variant:"default"}],kpis:{qualification:64,engagement:82,conversion:24,reactivation:49},aiSuggestions:2}),e.jsx(s,{firstName:"Marie",lastName:"DUPONT",badges:[{label:"VENDEUR",variant:"default"}],kpis:{qualification:92,engagement:88,conversion:76,reactivation:81},aiSuggestions:0})]})};var d,u,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    aiSuggestions: 2
  }
}`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    firstName: "Marie",
    lastName: "DUPONT",
    badges: [{
      label: "VENDEUR",
      variant: "default"
    }],
    kpis: {
      qualification: 92,
      engagement: 88,
      conversion: 76,
      reactivation: 81
    },
    aiSuggestions: 0
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,x,N;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap">
      <CardClient firstName="Jean-Christophe" lastName="LEMARCHAND" badges={[{
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
    }} aiSuggestions={2} />
      <CardClient firstName="Marie" lastName="DUPONT" badges={[{
      label: "VENDEUR",
      variant: "default"
    }]} kpis={{
      qualification: 92,
      engagement: 88,
      conversion: 76,
      reactivation: 81
    }} aiSuggestions={0} />
    </div>
}`,...(N=(x=t.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};const I=["Default","WithHighScores","MultipleCards"];export{i as Default,t as MultipleCards,n as WithHighScores,I as __namedExportsOrder,$ as default};
