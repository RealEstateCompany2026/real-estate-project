import{j as e}from"./jsx-runtime-BjG_zV1W.js";function J(a){if(a.length===0)return"";if(a.length===1)return`M${a[0].x},${a[0].y}`;let l=`M${a[0].x},${a[0].y}`;for(let n=1;n<a.length;n++){const r=a[n-1],t=a[n],$=r.x+(t.x-r.x)*.4,D=t.x-(t.x-r.x)*.4;l+=` C${$},${r.y} ${D},${t.y} ${t.x},${t.y}`}return l}function F(a,l){if(a.length===0)return"";const n=J(a),r=a[a.length-1].x,t=a[0].x;return`${n} L${r},${l} L${t},${l} Z`}function X({direction:a}){const l=a==="up"?"var(--icon-success)":"var(--icon-error)";return e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:a==="up"?"M10 5L14 9H6L10 5Z":"M10 15L6 11H14L10 15Z",fill:l})})}const Z=[{label:"10 avr",value:18},{label:"17 avr",value:30},{label:"24 avr",value:25},{label:"01 mai",value:35},{label:"08 mai",value:32},{label:"15 mai",value:28},{label:"22 mai",value:22},{label:"29 mai",value:38}];function W({title:a="Label",data:l=Z,selectedIndex:n=5,selectedDate:r="22 fév 2026",selectedLabel:t="28 réactions positives",trendPercentage:$="7%",trendDirection:D="up",maxY:H,className:R=""}){const L=H??Math.ceil(Math.max(...l.map(s=>s.value))/10)*10,E=Math.round(L/2),x=1e3,d=200,v=l.map((s,S)=>({x:l.length===1?x/2:S/(l.length-1)*x,y:d-s.value/L*d})),O=J(v),z=F(v,d),o=n!=null&&n>=0&&n<v.length?v[n]:null,i=o?o.x/x*100:null,w=o?o.y/d*100:null,c=20,b=200,m=27,u=37,p=24;return e.jsxs("div",{className:`relative h-[320px] rounded-[20px] overflow-hidden bg-[var(--surface-neutral-action)] ${R}`.trim(),children:[e.jsxs("div",{className:`absolute z-[4] flex items-center gap-1 rounded-[16px]
          bg-[var(--surface-elevated)]`,style:{top:`${c}px`,left:"16px",height:"44px",padding:"12px 20px",boxShadow:"1px 1px 8px 0px rgba(0,0,0,0.15)"},children:[e.jsx("span",{className:"text-[16px] font-semibold leading-[20px] tracking-[0.16px] whitespace-nowrap",style:{color:"var(--text-body)"},children:a}),e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",style:{color:"var(--text-body)"},children:e.jsx("path",{d:"M6.5 8.5L10 12L13.5 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),e.jsxs("div",{className:"absolute",style:{top:`${c}px`,left:"0px",right:`${m+u+p}px`,height:`${b}px`},children:[e.jsxs("svg",{className:"absolute inset-0 w-full h-full",preserveAspectRatio:"none",children:[e.jsx("line",{x1:"0",y1:"0",x2:"100%",y2:"0",stroke:"var(--border-disabled)",strokeWidth:"1",opacity:"0.5"}),e.jsx("line",{x1:"0",y1:"50%",x2:"100%",y2:"50%",stroke:"var(--border-disabled)",strokeWidth:"1",opacity:"0.5"}),e.jsx("line",{x1:"0",y1:"100%",x2:"100%",y2:"100%",stroke:"var(--border-disabled)",strokeWidth:"1",opacity:"0.5"})]}),e.jsxs("svg",{className:"absolute inset-0 w-full h-full",preserveAspectRatio:"none",viewBox:`0 0 ${x} ${d}`,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"graphCourbeGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"var(--surface-branded-default)",stopOpacity:"0.3"}),e.jsx("stop",{offset:"100%",stopColor:"var(--surface-branded-default)",stopOpacity:"0"})]})}),e.jsx("path",{d:z,fill:"url(#graphCourbeGrad)"}),e.jsx("path",{d:O,fill:"none",stroke:"var(--border-branded-default)",strokeWidth:"3"})]}),o&&i!=null&&w!=null&&e.jsx("div",{className:"absolute z-[2] pointer-events-none",style:{left:`${i}%`,top:`${w}%`,transform:"translate(-50%, -50%)"},children:e.jsx("svg",{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",children:e.jsx("circle",{cx:"9.5",cy:"9.5",r:"7.5",fill:"var(--surface-neutral-action)",stroke:"var(--border-branded-default)",strokeWidth:"3"})})})]}),o&&i!=null&&e.jsx("div",{className:"absolute top-0 bottom-0 z-[1] pointer-events-none",style:{left:`calc((100% - ${m+u+p}px) * ${i/100})`,borderLeft:"1.5px dashed var(--border-disabled)",opacity:.5}}),e.jsx("div",{className:"absolute flex flex-col justify-between",style:{top:`${c}px`,right:`${p}px`,width:`${u}px`,height:`${b}px`},children:[L,E,0].map(s=>e.jsx("span",{className:"text-[14px] font-bold leading-[16px] tracking-[0.14px] px-[10px] py-[8px]",style:{color:"var(--text-subtle)"},children:s},s))}),e.jsx("div",{className:"absolute flex justify-between items-center",style:{top:`${c+b+10}px`,left:"0px",right:`${m+u+p}px`},children:l.map((s,S)=>e.jsx("span",{className:"text-[14px] font-bold leading-[16px] tracking-[0.14px] px-[10px] py-[8px]",style:{color:"var(--text-subtle)"},children:s.label},`${s.label}-${S}`))}),o&&i!=null&&e.jsxs("div",{className:`absolute z-[3] flex flex-col rounded-[16px]
            bg-[var(--surface-elevated)]`,style:{top:`${c+b*.15}px`,left:`calc((100% - ${m+u+p}px) * ${i/100} + 24px)`,padding:"8px 12px",boxShadow:"0px 0px 8px 0px rgba(0,0,0,0.15)"},children:[e.jsx("div",{className:"py-[8px]",children:e.jsx("span",{className:"text-[20px] font-bold leading-[24px] tracking-[0.2px]",style:{color:"var(--text-headings)"},children:r})}),e.jsx("div",{className:"py-[8px]",children:e.jsx("span",{className:"text-[14px] font-normal leading-[16px] tracking-[0.14px]",style:{color:"var(--text-caption)"},children:t})}),e.jsxs("div",{className:"flex items-center gap-[4px] py-[8px]",children:[e.jsx(X,{direction:D}),e.jsx("span",{className:"text-[16px] font-semibold leading-[20px] tracking-[0.16px]",style:{color:"var(--text-body)"},children:$})]})]})]})}W.__docgenInfo={description:"",methods:[],displayName:"GraphCourbe",props:{title:{required:!1,tsType:{name:"string"},description:"Titre affiché dans le dropdown (en haut à gauche)",defaultValue:{value:'"Label"',computed:!1}},data:{required:!1,tsType:{name:"Array",elements:[{name:"DataPoint"}],raw:"DataPoint[]"},description:"Points de données à afficher",defaultValue:{value:`[
  { label: "10 avr", value: 18 },
  { label: "17 avr", value: 30 },
  { label: "24 avr", value: 25 },
  { label: "01 mai", value: 35 },
  { label: "08 mai", value: 32 },
  { label: "15 mai", value: 28 },
  { label: "22 mai", value: 22 },
  { label: "29 mai", value: 38 },
]`,computed:!1}},selectedIndex:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"Index du point sélectionné (0-based). null = aucun.",defaultValue:{value:"5",computed:!1}},selectedLabel:{required:!1,tsType:{name:"string"},description:'Texte descriptif dans la popup (ex: "28 réactions positives")',defaultValue:{value:'"28 réactions positives"',computed:!1}},selectedDate:{required:!1,tsType:{name:"string"},description:'Date/titre dans la popup (ex: "22 fév 2026")',defaultValue:{value:'"22 fév 2026"',computed:!1}},trendPercentage:{required:!1,tsType:{name:"string"},description:'Pourcentage de variation (ex: "7%")',defaultValue:{value:'"7%"',computed:!1}},trendDirection:{required:!1,tsType:{name:"union",raw:'"up" | "down"',elements:[{name:"literal",value:'"up"'},{name:"literal",value:'"down"'}]},description:"Direction de la tendance",defaultValue:{value:'"up"',computed:!1}},maxY:{required:!1,tsType:{name:"number"},description:"Valeur max de l'échelle Y. Auto-calculée si non fournie."},className:{required:!1,tsType:{name:"string"},description:"Classe CSS personnalisée",defaultValue:{value:'""',computed:!1}}}};const K={title:"Design System/Organisms/GraphCourbe",component:W,parameters:{layout:"padded",docs:{description:{component:"Graphique en courbe avec dégradé, grille, popup d'indication et dropdown de sélection. Supporte des données dynamiques."}}}},f={args:{title:"Interactions clients",selectedIndex:5,selectedDate:"22 fév 2026",selectedLabel:"28 réactions positives",trendPercentage:"7%",trendDirection:"up"}},h={args:{title:"Ventes complétées",data:[{label:"Jan",value:12},{label:"Fév",value:18},{label:"Mar",value:15},{label:"Avr",value:22},{label:"Mai",value:30},{label:"Juin",value:45}],selectedIndex:5,selectedDate:"Juin 2026",selectedLabel:"45 propriétés vendues",trendPercentage:"12%",trendDirection:"up",maxY:50}},g={args:{title:"Temps moyen de vente",data:[{label:"S1",value:60},{label:"S2",value:55},{label:"S3",value:50},{label:"S4",value:48},{label:"S5",value:42},{label:"S6",value:38},{label:"S7",value:35}],selectedIndex:4,selectedDate:"5 avril 2026",selectedLabel:"42 jours",trendPercentage:"5%",trendDirection:"down"}},y={args:{title:"Prospects qualifiés",data:[{label:"Lun",value:5},{label:"Mar",value:12},{label:"Mer",value:8},{label:"Jeu",value:15},{label:"Ven",value:20}],selectedIndex:null}},j={args:{title:"Annonces publiées",data:[{label:"Q1",value:120},{label:"Q2",value:156},{label:"Q3",value:180},{label:"Q4",value:210}],selectedIndex:1,selectedDate:"Q2 2026",selectedLabel:"156 annonces",trendPercentage:"34%",trendDirection:"up",maxY:250}};var P,N,k;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: "Interactions clients",
    selectedIndex: 5,
    selectedDate: "22 fév 2026",
    selectedLabel: "28 réactions positives",
    trendPercentage: "7%",
    trendDirection: "up"
  }
}`,...(k=(N=f.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var T,V,A;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: "Ventes complétées",
    data: [{
      label: "Jan",
      value: 12
    }, {
      label: "Fév",
      value: 18
    }, {
      label: "Mar",
      value: 15
    }, {
      label: "Avr",
      value: 22
    }, {
      label: "Mai",
      value: 30
    }, {
      label: "Juin",
      value: 45
    }],
    selectedIndex: 5,
    selectedDate: "Juin 2026",
    selectedLabel: "45 propriétés vendues",
    trendPercentage: "12%",
    trendDirection: "up",
    maxY: 50
  }
}`,...(A=(V=h.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var M,I,_;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: "Temps moyen de vente",
    data: [{
      label: "S1",
      value: 60
    }, {
      label: "S2",
      value: 55
    }, {
      label: "S3",
      value: 50
    }, {
      label: "S4",
      value: 48
    }, {
      label: "S5",
      value: 42
    }, {
      label: "S6",
      value: 38
    }, {
      label: "S7",
      value: 35
    }],
    selectedIndex: 4,
    selectedDate: "5 avril 2026",
    selectedLabel: "42 jours",
    trendPercentage: "5%",
    trendDirection: "down"
  }
}`,...(_=(I=g.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var q,G,C;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: "Prospects qualifiés",
    data: [{
      label: "Lun",
      value: 5
    }, {
      label: "Mar",
      value: 12
    }, {
      label: "Mer",
      value: 8
    }, {
      label: "Jeu",
      value: 15
    }, {
      label: "Ven",
      value: 20
    }],
    selectedIndex: null
  }
}`,...(C=(G=y.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};var Q,Y,B;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: "Annonces publiées",
    data: [{
      label: "Q1",
      value: 120
    }, {
      label: "Q2",
      value: 156
    }, {
      label: "Q3",
      value: 180
    }, {
      label: "Q4",
      value: 210
    }],
    selectedIndex: 1,
    selectedDate: "Q2 2026",
    selectedLabel: "156 annonces",
    trendPercentage: "34%",
    trendDirection: "up",
    maxY: 250
  }
}`,...(B=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};const ee=["Default","VentesHausse","TendanceBaisse","SansSelection","GrandesValeurs"];export{f as Default,j as GrandesValeurs,y as SansSelection,g as TendanceBaisse,h as VentesHausse,ee as __namedExportsOrder,K as default};
