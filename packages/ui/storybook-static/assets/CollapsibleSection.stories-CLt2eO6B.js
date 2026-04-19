import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as W}from"./index-BNURykns.js";import{c as z}from"./createLucideIcon-CtqQySJq.js";import{C as B}from"./chevron-down-CwOBiCf7.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=z("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),t=({title:q,description:n,children:w,defaultExpanded:M=!0,badge:s})=>{const[r,T]=W.useState(M);return e.jsxs("div",{className:"rounded-lg border overflow-hidden bg-surface-neutral-default border-edge-default",children:[e.jsxs("button",{className:"w-full px-6 py-4 flex items-center justify-between transition-colors hover:bg-surface-neutral-action",onClick:()=>T(!r),children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1 text-left",children:[e.jsx("h3",{className:"text-lg font-semibold text-content-strong",children:q}),s&&(typeof s=="string"?e.jsx("span",{className:"px-2 py-0.5 rounded-full text-xs font-medium bg-surface-branded-subtle text-content-branded-strong",children:s}):e.jsx(e.Fragment,{children:s})),n&&!r&&e.jsx("span",{className:"text-sm ml-2 text-content-subtle",children:n})]}),r?e.jsx(I,{size:20,className:"text-icon-neutral-default"}):e.jsx(B,{size:20,className:"text-icon-neutral-default"})]}),r&&e.jsxs("div",{className:"px-6 py-4 border-t border-edge-default",children:[n&&e.jsx("p",{className:"text-sm mb-4 text-content-body",children:n}),w]})]})};t.__docgenInfo={description:"",methods:[],displayName:"CollapsibleSection",props:{title:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Titre de la section"},description:{required:!1,tsType:{name:"string"},description:"Description optionnelle sous le titre"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Contenu de la section"},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"État initial (défaut: true)",defaultValue:{value:"true",computed:!1}},badge:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Badge optionnel (ex: nombre de champs complétés)"}}};const G={title:"Design System/Molecules/CollapsibleSection",component:t},i={args:{title:"Informations personnelles",children:e.jsxs("div",{children:[e.jsx("p",{children:"Nom: Martin Dupont"}),e.jsx("p",{children:"Email: martin.dupont@email.com"}),e.jsx("p",{children:"Téléphone: +33 6 12 34 56 78"})]})}},a={args:{title:"Documents",description:"Gérez vos documents importants",children:e.jsxs("div",{children:[e.jsx("p",{children:"Acte de vente"}),e.jsx("p",{children:"Attestation de propriété"}),e.jsx("p",{children:"Diagnostic immobilier"})]})}},o={args:{title:"Contrats",badge:"3 nouveaux",children:e.jsxs("div",{children:[e.jsx("p",{children:"Contrat de vente"}),e.jsx("p",{children:"Promesse d'achat"}),e.jsx("p",{children:"Mandat de vente"})]})}},c={args:{title:"Historique",badge:e.jsx("span",{style:{color:"green"},children:"Actif"}),children:e.jsxs("div",{children:[e.jsx("p",{children:"Créé le: 15 mars 2024"}),e.jsx("p",{children:"Modifié le: 10 avril 2024"})]})}},l={args:{title:"Paramètres avancés",description:"Options de configuration supplémentaires",children:e.jsxs("div",{children:[e.jsx("p",{children:"Notifications: Activées"}),e.jsx("p",{children:"Synchronisation: En temps réel"}),e.jsx("p",{children:"Sauvegarde: Automatique"})]})}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(t,{title:"Section 1",children:e.jsx("p",{children:"Contenu de la section 1"})}),e.jsx(t,{title:"Section 2",children:e.jsx("p",{children:"Contenu de la section 2"})}),e.jsx(t,{title:"Section 3",children:e.jsx("p",{children:"Contenu de la section 3"})})]})};var p,m,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Informations personnelles",
    children: <div>
        <p>Nom: Martin Dupont</p>
        <p>Email: martin.dupont@email.com</p>
        <p>Téléphone: +33 6 12 34 56 78</p>
      </div>
  }
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,h,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Documents",
    description: "Gérez vos documents importants",
    children: <div>
        <p>Acte de vente</p>
        <p>Attestation de propriété</p>
        <p>Diagnostic immobilier</p>
      </div>
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,v,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: "Contrats",
    badge: "3 nouveaux",
    children: <div>
        <p>Contrat de vente</p>
        <p>Promesse d'achat</p>
        <p>Mandat de vente</p>
      </div>
  }
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var b,C,S;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Historique",
    badge: <span style={{
      color: "green"
    }}>Actif</span>,
    children: <div>
        <p>Créé le: 15 mars 2024</p>
        <p>Modifié le: 10 avril 2024</p>
      </div>
  }
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var N,y,R;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: "Paramètres avancés",
    description: "Options de configuration supplémentaires",
    children: <div>
        <p>Notifications: Activées</p>
        <p>Synchronisation: En temps réel</p>
        <p>Sauvegarde: Automatique</p>
      </div>
  }
}`,...(R=(y=l.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var D,E,A;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <CollapsibleSection title="Section 1" children={<p>Contenu de la section 1</p>} />
      <CollapsibleSection title="Section 2" children={<p>Contenu de la section 2</p>} />
      <CollapsibleSection title="Section 3" children={<p>Contenu de la section 3</p>} />
    </div>
}`,...(A=(E=d.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const H=["Default","WithDescription","WithBadge","WithCustomBadge","Expanded","MultipleCollapsible"];export{i as Default,l as Expanded,d as MultipleCollapsible,o as WithBadge,c as WithCustomBadge,a as WithDescription,H as __namedExportsOrder,G as default};
