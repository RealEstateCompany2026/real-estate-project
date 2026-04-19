import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BNURykns.js";import{H as j}from"./home-HNgQxOBc.js";import{F as I}from"./file-text-CGmI5HgC.js";import{U as q}from"./user-BnRui8Nx.js";import{S as W}from"./settings-Bi2upNBe.js";import"./createLucideIcon-CtqQySJq.js";function i({tabs:e,activeTab:t,onChange:n,className:m=""}){return a.jsx("div",{className:`w-full ${m}`,children:a.jsx("div",{className:"flex items-center gap-[4px] border-b border-edge-default",children:e.map(s=>{const o=s.icon,c=s.id===t;return a.jsx(H,{tab:s,isActive:c,onClick:()=>!s.disabled&&n(s.id),hasIcon:!!o},s.id)})})})}function H({tab:e,isActive:t,onClick:n,hasIcon:m}){const[s,o]=r.useState(!1),c=e.icon;return a.jsxs("button",{onClick:n,disabled:e.disabled,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:`
        relative inline-flex items-center justify-center gap-[8px]
        px-[16px] py-[12px] rounded-t-[8px]
        text-[16px] leading-[20px] tracking-[0.16px]
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset
        disabled:cursor-not-allowed disabled:opacity-50
        font-roboto
        ${t?"font-semibold text-content-branded-action":"font-normal text-content-placeholder"}
        ${s&&!t&&!e.disabled?"text-content-headings":""}
      `.trim(),children:[c&&a.jsx(c,{className:"size-[20px]",strokeWidth:1.5}),e.label,t&&a.jsx("div",{className:"absolute bottom-[-1px] left-0 right-0 h-[2px] bg-surface-branded-default"})]})}i.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"Tab"}],raw:"Tab[]"},description:"Liste des onglets"},activeTab:{required:!0,tsType:{name:"string"},description:"ID de l'onglet actif"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:"Callback au changement d'onglet"},className:{required:!1,tsType:{name:"string"},description:"Classes CSS supplémentaires",defaultValue:{value:'""',computed:!1}}}};const $={title:"Design System/Molecules/Tabs",component:i},N=[{id:"details",label:"Détails"},{id:"documents",label:"Documents"},{id:"historique",label:"Historique"}],M=[{id:"accueil",label:"Accueil",icon:j},{id:"documents",label:"Documents",icon:I},{id:"contact",label:"Contact",icon:q},{id:"parametres",label:"Paramètres",icon:W}],l={render:()=>{const[e,t]=r.useState("details");return a.jsx(i,{tabs:N,activeTab:e,onChange:t})}},d={render:()=>{const[e,t]=r.useState("accueil");return a.jsx(i,{tabs:M,activeTab:e,onChange:t})}},b={render:()=>{const[e,t]=r.useState("details"),n=[{id:"details",label:"Détails"},{id:"documents",label:"Documents",disabled:!0},{id:"historique",label:"Historique"}];return a.jsx(i,{tabs:n,activeTab:e,onChange:t})}},u={render:()=>{const[e,t]=r.useState("tab1"),n=[{id:"tab1",label:"Vue d'ensemble"},{id:"tab2",label:"Bien immobilier"},{id:"tab3",label:"Acheteur"},{id:"tab4",label:"Vendeur"},{id:"tab5",label:"Financement"},{id:"tab6",label:"Contrats"}];return a.jsx(i,{tabs:n,activeTab:e,onChange:t})}};var p,T,v;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState("details");
    return <Tabs tabs={defaultTabs} activeTab={activeTab} onChange={setActiveTab} />;
  }
}`,...(v=(T=l.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var g,f,h;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState("accueil");
    return <Tabs tabs={tabsWithIcons} activeTab={activeTab} onChange={setActiveTab} />;
  }
}`,...(h=(f=d.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,y;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState("details");
    const tabsWithDisabled: Tab[] = [{
      id: "details",
      label: "Détails"
    }, {
      id: "documents",
      label: "Documents",
      disabled: true
    }, {
      id: "historique",
      label: "Historique"
    }];
    return <Tabs tabs={tabsWithDisabled} activeTab={activeTab} onChange={setActiveTab} />;
  }
}`,...(y=(S=b.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var C,D,A;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const manyTabs: Tab[] = [{
      id: "tab1",
      label: "Vue d'ensemble"
    }, {
      id: "tab2",
      label: "Bien immobilier"
    }, {
      id: "tab3",
      label: "Acheteur"
    }, {
      id: "tab4",
      label: "Vendeur"
    }, {
      id: "tab5",
      label: "Financement"
    }, {
      id: "tab6",
      label: "Contrats"
    }];
    return <Tabs tabs={manyTabs} activeTab={activeTab} onChange={setActiveTab} />;
  }
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const L=["Default","WithIcons","WithDisabledTab","ManyTabs"];export{l as Default,u as ManyTabs,b as WithDisabledTab,d as WithIcons,L as __namedExportsOrder,$ as default};
