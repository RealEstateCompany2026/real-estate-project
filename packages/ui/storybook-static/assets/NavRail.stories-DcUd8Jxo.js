import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{N as $}from"./NavButton-CVcZ4N6W.js";import{N as K}from"./NavDivider-Cq81QEoM.js";import{N as Q}from"./NavAvatar-BB8IFFex.js";import{N as X}from"./NavLogo-B2HWfRef.js";import{S as Y}from"./SwitchTheme-4zcvOkPb.js";import{c as g}from"./createLucideIcon-CtqQySJq.js";import{D as Z}from"./database-Dl4PIW4M.js";import{U as ee}from"./user-BnRui8Nx.js";import{H as ae}from"./home-HNgQxOBc.js";import{F as te}from"./file-text-CGmI5HgC.js";import{C as oe}from"./calendar-gRs8LC7V.js";import"./index-BNURykns.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=g("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=g("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=g("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]),ne=[[{id:"dashboard",icon:ce,label:"Tableau de bord"},{id:"database",icon:Z,label:"Base de données"}],[{id:"clients",icon:ee,label:"Clients"},{id:"properties",icon:ae,label:"Biens"},{id:"deals",icon:le,label:"Affaires"},{id:"documents",icon:te,label:"Documents"}],[{id:"calendar",icon:oe,label:"Agenda"},{id:"automations",icon:re,label:"Automatisations"}]];function _({activeSection:e,onNavigate:v,avatarSrc:J="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",avatarAlt:W="Utilisateur",onAvatarClick:E,onLogoClick:H,avatarSelected:O=!1,className:z="",isDark:F=!1,onThemeToggle:p}){return a.jsxs("div",{className:`
        fixed left-0 top-0
        flex flex-col items-center
        bg-surface-neutral-default
        ${z}
      `.trim(),style:{width:"90px",height:"100vh",paddingTop:"10px",paddingBottom:"10px"},children:[a.jsx(X,{onClick:H}),a.jsx("div",{className:"flex flex-col items-center gap-[20px] mt-[20px] flex-1",children:ne.map((I,u)=>a.jsxs("div",{className:"flex flex-col items-center gap-[10px]",children:[u>0&&a.jsx(K,{}),a.jsx("div",{className:"flex flex-col items-center gap-[10px]",children:I.map(t=>a.jsx($,{icon:t.icon,label:t.label,selected:e===t.id,onClick:()=>v==null?void 0:v(t.id)},t.id))})]},u))}),a.jsxs("div",{className:"flex flex-col items-center gap-[16px]",children:[p&&a.jsx(Y,{isDark:F,onChange:p}),a.jsx(Q,{src:J,alt:W,selected:O,onClick:E})]})]})}_.__docgenInfo={description:"",methods:[],displayName:"NavRail",props:{activeSection:{required:!1,tsType:{name:"union",raw:'"dashboard" | "database" | "clients" | "properties" | "deals" | "documents" | "calendar" | "automations"',elements:[{name:"literal",value:'"dashboard"'},{name:"literal",value:'"database"'},{name:"literal",value:'"clients"'},{name:"literal",value:'"properties"'},{name:"literal",value:'"deals"'},{name:"literal",value:'"documents"'},{name:"literal",value:'"calendar"'},{name:"literal",value:'"automations"'}]},description:"Section active"},onNavigate:{required:!1,tsType:{name:"signature",type:"function",raw:"(section: NavSection) => void",signature:{arguments:[{type:{name:"union",raw:'"dashboard" | "database" | "clients" | "properties" | "deals" | "documents" | "calendar" | "automations"',elements:[{name:"literal",value:'"dashboard"'},{name:"literal",value:'"database"'},{name:"literal",value:'"clients"'},{name:"literal",value:'"properties"'},{name:"literal",value:'"deals"'},{name:"literal",value:'"documents"'},{name:"literal",value:'"calendar"'},{name:"literal",value:'"automations"'}]},name:"section"}],return:{name:"void"}}},description:"Callback de navigation"},avatarSrc:{required:!1,tsType:{name:"string"},description:"URL de l'avatar utilisateur",defaultValue:{value:'"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"',computed:!1}},avatarAlt:{required:!1,tsType:{name:"string"},description:"Texte alternatif de l'avatar",defaultValue:{value:'"Utilisateur"',computed:!1}},onAvatarClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback au clic sur l'avatar"},onLogoClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback au clic sur le logo"},avatarSelected:{required:!1,tsType:{name:"boolean"},description:"Afficher l'avatar comme sélectionné",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classe CSS supplémentaire",defaultValue:{value:'""',computed:!1}},isDark:{required:!1,tsType:{name:"boolean"},description:"Mode sombre actif",defaultValue:{value:"false",computed:!1}},onThemeToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback toggle theme"}}};const Ae={title:"Design System/Organisms/NavRail",component:_},o={args:{activeSection:"dashboard",onNavigate:e=>console.log("Navigate to:",e),avatarSrc:"https://placehold.co/40x40?text=JD",avatarAlt:"Jean Dupont",onAvatarClick:()=>console.log("Avatar clicked"),onLogoClick:()=>console.log("Logo clicked"),avatarSelected:!1}},l={args:{activeSection:"database",onNavigate:e=>console.log("Navigate to:",e),avatarSrc:"https://placehold.co/40x40?text=SM",avatarAlt:"Sophie Martin",onAvatarClick:()=>console.log("Avatar clicked"),onLogoClick:()=>console.log("Logo clicked"),avatarSelected:!1}},c={args:{activeSection:"clients",onNavigate:e=>console.log("Navigate to:",e),avatarSrc:"https://placehold.co/40x40?text=MR",avatarAlt:"Marie Rousseau",onAvatarClick:()=>console.log("Avatar clicked"),onLogoClick:()=>console.log("Logo clicked"),avatarSelected:!1}},r={args:{activeSection:"properties",onNavigate:e=>console.log("Navigate to:",e),avatarSrc:"https://placehold.co/40x40?text=PB",avatarAlt:"Pierre Bernard",onAvatarClick:()=>console.log("Avatar clicked"),onLogoClick:()=>console.log("Logo clicked"),avatarSelected:!1}},n={args:{activeSection:"deals",onNavigate:e=>console.log("Navigate to:",e),avatarSrc:"https://placehold.co/40x40?text=CL",avatarAlt:"Claude Laurent",onAvatarClick:()=>console.log("Avatar clicked"),onLogoClick:()=>console.log("Logo clicked"),avatarSelected:!1}},s={args:{activeSection:"calendar",onNavigate:e=>console.log("Navigate to:",e),avatarSrc:"https://placehold.co/40x40?text=AC",avatarAlt:"Anne Charles",onAvatarClick:()=>console.log("Avatar clicked"),onLogoClick:()=>console.log("Logo clicked"),avatarSelected:!1}},i={args:{activeSection:"dashboard",onNavigate:e=>console.log("Navigate to:",e),avatarSrc:"https://placehold.co/40x40?text=GP",avatarAlt:"Gabrielle Petit",onAvatarClick:()=>console.log("Avatar clicked"),onLogoClick:()=>console.log("Logo clicked"),avatarSelected:!0}},d={args:{activeSection:"dashboard",onNavigate:e=>console.log("Navigate to:",e),avatarSrc:void 0,avatarAlt:"Utilisateur",onAvatarClick:()=>console.log("Avatar clicked"),onLogoClick:()=>console.log("Logo clicked"),avatarSelected:!1}};var m,h,k;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    activeSection: "dashboard",
    onNavigate: section => console.log("Navigate to:", section),
    avatarSrc: "https://placehold.co/40x40?text=JD",
    avatarAlt: "Jean Dupont",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: false
  }
}`,...(k=(h=o.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var f,S,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    activeSection: "database",
    onNavigate: section => console.log("Navigate to:", section),
    avatarSrc: "https://placehold.co/40x40?text=SM",
    avatarAlt: "Sophie Martin",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: false
  }
}`,...(x=(S=l.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var A,C,b;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    activeSection: "clients",
    onNavigate: section => console.log("Navigate to:", section),
    avatarSrc: "https://placehold.co/40x40?text=MR",
    avatarAlt: "Marie Rousseau",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: false
  }
}`,...(b=(C=c.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var N,L,y;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    activeSection: "properties",
    onNavigate: section => console.log("Navigate to:", section),
    avatarSrc: "https://placehold.co/40x40?text=PB",
    avatarAlt: "Pierre Bernard",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: false
  }
}`,...(y=(L=r.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var w,D,M;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    activeSection: "deals",
    onNavigate: section => console.log("Navigate to:", section),
    avatarSrc: "https://placehold.co/40x40?text=CL",
    avatarAlt: "Claude Laurent",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: false
  }
}`,...(M=(D=n.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var T,j,q;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    activeSection: "calendar",
    onNavigate: section => console.log("Navigate to:", section),
    avatarSrc: "https://placehold.co/40x40?text=AC",
    avatarAlt: "Anne Charles",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: false
  }
}`,...(q=(j=s.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var P,R,B;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    activeSection: "dashboard",
    onNavigate: section => console.log("Navigate to:", section),
    avatarSrc: "https://placehold.co/40x40?text=GP",
    avatarAlt: "Gabrielle Petit",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: true
  }
}`,...(B=(R=i.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var U,V,G;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    activeSection: "dashboard",
    onNavigate: section => console.log("Navigate to:", section),
    avatarSrc: undefined,
    avatarAlt: "Utilisateur",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: false
  }
}`,...(G=(V=d.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const Ce=["Default","DatabaseSelected","ClientsSelected","PropertiesSelected","DealsSelected","CalendarSelected","AvatarSelected","WithoutAvatar"];export{i as AvatarSelected,s as CalendarSelected,c as ClientsSelected,l as DatabaseSelected,n as DealsSelected,o as Default,r as PropertiesSelected,d as WithoutAvatar,Ce as __namedExportsOrder,Ae as default};
