import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-BNURykns.js";import{X as z}from"./x-C_NNgUki.js";import{B as c}from"./Badge-DS_tmhFu.js";import{B as F}from"./Button-nkpS-x_8.js";import"./createLucideIcon-CtqQySJq.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";const s=({isOpen:t,onClose:r,title:q,width:p="narrow",children:B,footer:u,showHeaderDivider:x=!1,className:W="",closeIcon:h,customHeader:f,headerAfterTitle:E,headerActions:H})=>{const V=p==="narrow"?"420px":"1024px",_=p==="narrow";return n.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),n.useEffect(()=>{const m=D=>{D.key==="Escape"&&t&&r()};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[t,r]),t?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-40 bg-[rgba(0,0,0,0.5)] transition-opacity duration-300",onClick:r,"aria-hidden":"true"}),e.jsxs("div",{className:`fixed top-0 right-0 bottom-0 z-50 flex flex-col
          transition-transform duration-300
          rounded-tl-[16px] rounded-bl-[16px]
          bg-surface-neutral-default shadow-[0px_0px_10px_7px_rgba(0,0,0,0.05)]
          ${W}`,style:{width:V,transform:t?"translateX(0)":"translateX(100%)"},children:[f?e.jsx("div",{className:`sticky top-0 z-10 bg-surface-neutral-default ${x?"border-b border-edge-default":""}`,children:f}):e.jsxs("div",{className:`sticky top-0 z-10 flex items-center justify-between rounded-tl-[16px] bg-surface-neutral-default ${_?"pt-[47px] px-[20px]":"pt-[51px] px-[40px]"} ${x?"border-b border-edge-default":""}`,children:[e.jsxs("div",{className:"flex items-center gap-3 p-[10px]",children:[e.jsx("h4",{className:"text-[28px] font-bold leading-[34px] tracking-[0.28px] whitespace-nowrap text-content-headings",children:q}),E]}),e.jsxs("div",{className:"flex items-center gap-3",children:[H,e.jsx("button",{onClick:r,className:"p-[12px] rounded-[16px] transition-colors text-content-caption","aria-label":"Fermer",children:h||e.jsx(z,{size:20})})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:B}),u&&e.jsx("div",{className:"sticky bottom-0 bg-surface-neutral-default border-t border-edge-divider px-5 py-4 flex items-center gap-3",children:u})]})]}):null};s.__docgenInfo={description:"",methods:[],displayName:"Sheet",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"État d'ouverture du sheet"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback appelé à la fermeture"},title:{required:!1,tsType:{name:"string"},description:"Titre du sheet"},width:{required:!1,tsType:{name:"union",raw:'"narrow" | "wide"',elements:[{name:"literal",value:'"narrow"'},{name:"literal",value:'"wide"'}]},description:`Largeur du sheet
@default "narrow"`,defaultValue:{value:'"narrow"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Contenu du sheet"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Footer sticky optionnel"},showHeaderDivider:{required:!1,tsType:{name:"boolean"},description:`Afficher le divider du header
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classe CSS additionnelle",defaultValue:{value:'""',computed:!1}},closeIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icône personnalisée pour le bouton de fermeture"},customHeader:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Header personnalisé (remplace le header par défaut)\n@deprecated Utiliser `headerAfterTitle` et `headerActions` à la place"},headerAfterTitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Composants affichés après le titre (badges, chips, IconDpe, etc.)"},headerActions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Composants affichés avant le close button (switches, boutons action, etc.)"}}};const K={title:"Design System/Organisms/Sheet",component:s,parameters:{layout:"fullscreen"}},a={args:{isOpen:!0,onClose:()=>{},title:"Sheets title",width:"narrow",children:e.jsx("div",{style:{padding:20},children:e.jsx("p",{style:{color:"var(--text-body)"},children:"Vérifie : border-radius 16px uniquement sur bords gauches (tl + bl), shadow 0 0 10px 7px autour du panneau."})})}},d={args:{isOpen:!0,onClose:()=>{},title:"Sheets title",width:"wide",children:e.jsx("div",{style:{padding:40},children:e.jsx("p",{style:{color:"var(--text-body)"},children:"Sheet wide (1024px). Même radius gauche, même shadow."})})}},i={render:()=>{const[t,r]=n.useState(!1);return e.jsxs("div",{style:{padding:40},children:[e.jsx("button",{onClick:()=>r(!0),style:{padding:"10px 20px",borderRadius:8,border:"1px solid #ccc",cursor:"pointer"},children:"Ouvrir narrow (420px)"}),e.jsx(s,{isOpen:t,onClose:()=>r(!1),title:"Détails de la fiche",width:"narrow",children:e.jsx("div",{style:{padding:20},children:e.jsx("p",{style:{color:"var(--text-body)"},children:"Contenu du sheet narrow. Cliquer sur × ou sur le backdrop pour fermer."})})})]})}},o={render:()=>{const[t,r]=n.useState(!1);return e.jsxs("div",{style:{padding:40},children:[e.jsx("button",{onClick:()=>r(!0),style:{padding:"10px 20px",borderRadius:8,border:"1px solid #ccc",cursor:"pointer"},children:"Ouvrir wide (1024px)"}),e.jsx(s,{isOpen:t,onClose:()=>r(!1),title:"Sélectionner un bien",width:"wide",footer:e.jsx("div",{style:{padding:"16px 40px",borderTop:"1px solid var(--border-neutral-default)",display:"flex",justifyContent:"flex-end",gap:8},children:e.jsx("button",{onClick:()=>r(!1),style:{padding:"10px 20px",borderRadius:16,backgroundColor:"var(--surface-branded-default)",color:"var(--text-branded-on-action)",fontWeight:600,border:"none",cursor:"pointer"},children:"Valider"})}),children:e.jsx("div",{style:{padding:40,minHeight:400},children:e.jsx("p",{style:{color:"var(--text-body)"},children:"Sheet wide avec footer sticky."})})})]})}},l={render:()=>{const[t,r]=n.useState(!1);return e.jsxs("div",{style:{padding:40},children:[e.jsx("button",{onClick:()=>r(!0),style:{padding:"10px 20px",borderRadius:8,border:"1px solid #ccc",cursor:"pointer"},children:"Ouvrir header composable"}),e.jsx(s,{isOpen:t,onClose:()=>r(!1),title:"Annonce",width:"wide",headerAfterTitle:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(c,{variant:"success",children:"ÉDITION"}),e.jsx(c,{variant:"warning",children:"RÉVISION"}),e.jsx(c,{variant:"disabled",children:"PUBLICATION"})]}),headerActions:e.jsx(F,{variant:"outline",onClick:()=>{},children:"Publier"}),children:e.jsx("div",{style:{padding:40,minHeight:400},children:e.jsx("p",{style:{color:"var(--text-body)"},children:"Header composable : titre + badges (headerAfterTitle) + bouton (headerActions) + close."})})})]})}};var b,g,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Sheets title",
    width: "narrow",
    children: <div style={{
      padding: 20
    }}>
        <p style={{
        color: "var(--text-body)"
      }}>
          Vérifie : border-radius 16px uniquement sur bords gauches (tl + bl),
          shadow 0 0 10px 7px autour du panneau.
        </p>
      </div>
  }
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,w,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Sheets title",
    width: "wide",
    children: <div style={{
      padding: 40
    }}>
        <p style={{
        color: "var(--text-body)"
      }}>
          Sheet wide (1024px). Même radius gauche, même shadow.
        </p>
      </div>
  }
}`,...(j=(w=d.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var O,C,N;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      padding: 40
    }}>
        <button onClick={() => setIsOpen(true)} style={{
        padding: "10px 20px",
        borderRadius: 8,
        border: "1px solid #ccc",
        cursor: "pointer"
      }}>
          Ouvrir narrow (420px)
        </button>
        <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="Détails de la fiche" width="narrow">
          <div style={{
          padding: 20
        }}>
            <p style={{
            color: "var(--text-body)"
          }}>
              Contenu du sheet narrow. Cliquer sur × ou sur le backdrop pour fermer.
            </p>
          </div>
        </Sheet>
      </div>;
  }
}`,...(N=(C=i.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var R,S,I;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      padding: 40
    }}>
        <button onClick={() => setIsOpen(true)} style={{
        padding: "10px 20px",
        borderRadius: 8,
        border: "1px solid #ccc",
        cursor: "pointer"
      }}>
          Ouvrir wide (1024px)
        </button>
        <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="Sélectionner un bien" width="wide" footer={<div style={{
        padding: "16px 40px",
        borderTop: "1px solid var(--border-neutral-default)",
        display: "flex",
        justifyContent: "flex-end",
        gap: 8
      }}>
              <button onClick={() => setIsOpen(false)} style={{
          padding: "10px 20px",
          borderRadius: 16,
          backgroundColor: "var(--surface-branded-default)",
          color: "var(--text-branded-on-action)",
          fontWeight: 600,
          border: "none",
          cursor: "pointer"
        }}>
                Valider
              </button>
            </div>}>
          <div style={{
          padding: 40,
          minHeight: 400
        }}>
            <p style={{
            color: "var(--text-body)"
          }}>
              Sheet wide avec footer sticky.
            </p>
          </div>
        </Sheet>
      </div>;
  }
}`,...(I=(S=o.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var k,T,A;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      padding: 40
    }}>
        <button onClick={() => setIsOpen(true)} style={{
        padding: "10px 20px",
        borderRadius: 8,
        border: "1px solid #ccc",
        cursor: "pointer"
      }}>
          Ouvrir header composable
        </button>
        <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="Annonce" width="wide" headerAfterTitle={<div className="flex items-center gap-3">
              <Badge variant="success">ÉDITION</Badge>
              <Badge variant="warning">RÉVISION</Badge>
              <Badge variant="disabled">PUBLICATION</Badge>
            </div>} headerActions={<Button variant="outline" onClick={() => {}}>
              Publier
            </Button>}>
          <div style={{
          padding: 40,
          minHeight: 400
        }}>
            <p style={{
            color: "var(--text-body)"
          }}>
              Header composable : titre + badges (headerAfterTitle) + bouton (headerActions) + close.
            </p>
          </div>
        </Sheet>
      </div>;
  }
}`,...(A=(T=l.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const Q=["NarrowOpen","WideOpen","NarrowInteractive","WideWithFooter","WithHeaderComposable"];export{i as NarrowInteractive,a as NarrowOpen,d as WideOpen,o as WideWithFooter,l as WithHeaderComposable,Q as __namedExportsOrder,K as default};
