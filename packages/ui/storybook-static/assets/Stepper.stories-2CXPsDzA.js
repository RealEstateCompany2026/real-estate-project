import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{C as K}from"./check-BPMjXyas.js";import"./createLucideIcon-CtqQySJq.js";import"./index-BNURykns.js";function W({steps:S,currentStep:G,completedSteps:H=[],variant:g="default",className:v=""}){const x=n=>H.includes(n)?"completed":n===G?"active":"future";return g==="minimal"?e.jsx("div",{className:`flex items-center justify-center gap-2 ${v}`.trim(),children:S.map((n,a)=>{const p=x(a),r=p==="completed",t=p==="active";return e.jsx("div",{className:"rounded-full transition-all duration-300",style:{width:t?"24px":"8px",height:"8px",backgroundColor:r||t?"var(--purple-500)":"var(--neutral-200)",opacity:t?1:.5}},a)})}):e.jsx("div",{className:`flex items-center justify-center ${v}`.trim(),children:S.map((n,a)=>{const p=x(a),r=p==="completed",t=p==="active",J=a===S.length-1;return e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:`
                  flex items-center justify-center
                  w-8 h-8 rounded-full
                  transition-all duration-200
                  ${r||t?"bg-surface-branded-default":"bg-surface-neutral-action"}
                `,children:r?e.jsx(K,{size:18,className:`${r||t?"text-content-branded-on-action":"text-content-placeholder"}`,strokeWidth:3}):e.jsx("span",{className:`${t?"font-bold":"font-semibold"} text-[var(--text-sm)]`,style:{color:r||t?"var(--text-branded-on-action)":"var(--text-placeholder)"},children:a+1})}),g==="default"&&e.jsx("p",{className:`
                    whitespace-nowrap
                    transition-all duration-200
                    text-[var(--text-sm)]
                    tracking-[0.14px]
                    ${t?"font-bold text-content-branded-action":r?"font-medium text-content-body":"font-medium text-content-placeholder"}
                  `,children:n})]}),!J&&e.jsx("div",{className:"h-[2px] bg-surface-neutral-action",style:{width:"60px",marginLeft:"var(--scale-300)",marginRight:"var(--scale-300)"}})]},a)})})}W.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Labels des étapes"},currentStep:{required:!0,tsType:{name:"number"},description:"Index de l'étape active (0-based)"},completedSteps:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"Indices des étapes complétées",defaultValue:{value:"[]",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "minimal"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"minimal"'}]},description:`Variante d'affichage
- default: avec numéros et labels
- minimal: petits points sans texte, discret`,defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classe CSS supplémentaire",defaultValue:{value:'""',computed:!1}}}};const Y={title:"Design System/Molecules/Stepper",component:W,argTypes:{variant:{control:"select",options:["default","minimal"]}}},s=["Informations","Bien immobilier","Financement","Confirmation"],c={args:{steps:s,currentStep:1,completedSteps:[0],variant:"default"}},o={args:{steps:s,currentStep:0,completedSteps:[],variant:"default"}},i={args:{steps:s,currentStep:2,completedSteps:[0,1],variant:"default"}},l={args:{steps:s,currentStep:3,completedSteps:[0,1,2],variant:"default"}},m={args:{steps:s,currentStep:3,completedSteps:[0,1,2,3],variant:"default"}},d={args:{steps:s,currentStep:1,completedSteps:[0],variant:"minimal"}},u={args:{steps:s,currentStep:3,completedSteps:[0,1,2,3],variant:"minimal"}},f={args:{steps:["Étape 1","Étape 2","Étape 3","Étape 4","Étape 5","Étape 6"],currentStep:2,completedSteps:[0,1],variant:"default"}};var h,y,b;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 1,
    completedSteps: [0],
    variant: "default"
  }
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var j,C,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 0,
    completedSteps: [],
    variant: "default"
  }
}`,...(N=(C=o.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var M,w,A;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 2,
    completedSteps: [0, 1],
    variant: "default"
  }
}`,...(A=(w=i.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var T,V,$;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 3,
    completedSteps: [0, 1, 2],
    variant: "default"
  }
}`,...($=(V=l.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var q,L,k;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 3,
    completedSteps: [0, 1, 2, 3],
    variant: "default"
  }
}`,...(k=(L=m.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var I,_,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 1,
    completedSteps: [0],
    variant: "minimal"
  }
}`,...(D=(_=d.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var F,E,R;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 3,
    completedSteps: [0, 1, 2, 3],
    variant: "minimal"
  }
}`,...(R=(E=u.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var z,B,O;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    steps: ["Étape 1", "Étape 2", "Étape 3", "Étape 4", "Étape 5", "Étape 6"],
    currentStep: 2,
    completedSteps: [0, 1],
    variant: "default"
  }
}`,...(O=(B=f.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const Z=["Default","FirstStep","MiddleStep","LastStep","AllCompleted","MinimalVariant","MinimalAllCompleted","ManySteps"];export{m as AllCompleted,c as Default,o as FirstStep,l as LastStep,f as ManySteps,i as MiddleStep,u as MinimalAllCompleted,d as MinimalVariant,Z as __namedExportsOrder,Y as default};
