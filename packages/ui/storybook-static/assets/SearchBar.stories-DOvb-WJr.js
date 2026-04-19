import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BNURykns.js";import{S as Z}from"./search-BRDQbtZK.js";import{L as ee}from"./loader-circle-BfO5DH_c.js";import{X as ae}from"./x-C_NNgUki.js";import"./createLucideIcon-CtqQySJq.js";function f({value:r="",onChange:a,onSearch:s,onClear:n,placeholder:x="Rechercher...",loading:b=!1,disabled:o=!1,autoFocus:K=!1,size:W="md",className:O="",ariaLabel:X="Champ de recherche"}){const[G,S]=c.useState(!1),[y,v]=c.useState(r);c.useEffect(()=>{v(r)},[r]);const J=l=>{v(l),a==null||a(l)},P=()=>{v(""),a==null||a(""),n==null||n()},Q=l=>{l.key==="Enter"&&!b&&(s==null||s(y))},t={sm:{height:"h-[48px]",padding:"px-[10px] py-[14px]",fontSize:"text-[14px]",leadingHeight:"leading-[18px]",iconSize:16},md:{height:"h-[56px]",padding:"px-[12px] py-[18px]",fontSize:"text-[16px]",leadingHeight:"leading-[20px]",iconSize:20},lg:{height:"h-[64px]",padding:"px-[16px] py-[22px]",fontSize:"text-[18px]",leadingHeight:"leading-[22px]",iconSize:24}}[W],U=y.length>0,Y=o?"border-edge-disabled":G?"border-edge-neutral-default":"border-edge-default";return e.jsxs("div",{className:`
        relative flex items-center gap-[8px] transition-all
        ${t.height} ${t.padding}
        ${o?"opacity-50 cursor-not-allowed":""}
        border-b ${Y}
        ${o?"bg-surface-disabled":"bg-surface-neutral-default"}
        ${O}
      `.trim(),children:[e.jsx(Z,{size:t.iconSize,className:"text-icon-neutral-default flex-shrink-0","aria-hidden":"true"}),e.jsx("input",{type:"search",value:y,onChange:l=>J(l.target.value),onFocus:()=>S(!0),onBlur:()=>S(!1),onKeyDown:Q,placeholder:x,disabled:o||b,autoFocus:K,"aria-label":X,className:`
          flex-1 bg-transparent outline-none
          ${t.fontSize} ${t.leadingHeight}
          font-semibold text-content-body
          placeholder:text-content-placeholder
          tracking-[0.16px]
          font-roboto
        `}),e.jsx("div",{className:"flex items-center gap-[8px] flex-shrink-0",children:b?e.jsx(ee,{size:t.iconSize,className:"animate-spin text-icon-neutral-default","aria-label":"Recherche en cours"}):U&&!o?e.jsx("button",{type:"button",onClick:P,className:"p-[4px] rounded-full hover:bg-surface-neutral-action transition-colors cursor-pointer","aria-label":"Effacer la recherche",tabIndex:0,children:e.jsx(ae,{size:t.iconSize,className:"text-icon-neutral-default"})}):null}),e.jsx("style",{children:`
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
        }
      `})]})}f.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{value:{required:!1,tsType:{name:"string"},description:"Valeur de recherche",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback appelé quand la valeur change"},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:"Callback appelé lors de la recherche (Enter ou bouton)"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback appelé lors du clear"},placeholder:{required:!1,tsType:{name:"string"},description:"Texte du placeholder",defaultValue:{value:'"Rechercher..."',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"État de chargement (affiche un spinner)",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"État disabled",defaultValue:{value:"false",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Auto-focus au montage",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Taille du composant",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classes CSS additionnelles",defaultValue:{value:'""',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Aria label pour accessibilité",defaultValue:{value:'"Champ de recherche"',computed:!1}}}};const ie={title:"Design System/Molecules/SearchBar",component:f,argTypes:{size:{control:"select",options:["sm","md","lg"]},loading:{control:"boolean"},disabled:{control:"boolean"},placeholder:{control:"text"}}},i={args:{placeholder:"Rechercher un client ou une propriété...",size:"md"}},u={args:{placeholder:"Rechercher...",size:"sm"}},d={args:{placeholder:"Rechercher un client ou une propriété...",size:"lg"}},p={render:()=>{const[r,a]=c.useState("Martin Dupont");return e.jsx(f,{value:r,onChange:a,placeholder:"Rechercher..."})}},h={args:{placeholder:"Recherche en cours...",loading:!0}},m={args:{placeholder:"Recherche désactivée",disabled:!0}},g={render:()=>{const[r,a]=c.useState(""),[s,n]=c.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(f,{value:r,onChange:a,onSearch:x=>n(`Recherche: "${x}"`),onClear:()=>{a(""),n("")},placeholder:"Cherchez un client..."}),s&&e.jsx("p",{children:s})]})}};var z,R,V;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placeholder: "Rechercher un client ou une propriété...",
    size: "md"
  }
}`,...(V=(R=i.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var q,j,C;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    placeholder: "Rechercher...",
    size: "sm"
  }
}`,...(C=(j=u.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var T,k,D;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: "Rechercher un client ou une propriété...",
    size: "lg"
  }
}`,...(D=(k=d.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var w,$,N;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Martin Dupont");
    return <SearchBar value={value} onChange={setValue} placeholder="Rechercher..." />;
  }
}`,...(N=($=p.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var E,L,B;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: "Recherche en cours...",
    loading: true
  }
}`,...(B=(L=h.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var I,F,H;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: "Recherche désactivée",
    disabled: true
  }
}`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var _,M,A;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const [searchResult, setSearchResult] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
        <SearchBar value={value} onChange={setValue} onSearch={query => setSearchResult(\`Recherche: "\${query}"\`)} onClear={() => {
        setValue("");
        setSearchResult("");
      }} placeholder="Cherchez un client..." />
        {searchResult && <p>{searchResult}</p>}
      </div>;
  }
}`,...(A=(M=g.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};const ue=["Default","Small","Large","WithValue","Loading","Disabled","Interactive"];export{i as Default,m as Disabled,g as Interactive,d as Large,h as Loading,u as Small,p as WithValue,ue as __namedExportsOrder,ie as default};
