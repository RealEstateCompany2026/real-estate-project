import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{S as M}from"./Spinner-D1MfsUd2.js";import"./loader-circle-BfO5DH_c.js";import"./createLucideIcon-CtqQySJq.js";import"./index-BNURykns.js";function z({size:s="md",message:o,fullscreen:C=!1,zIndex:w=50,backgroundOpacity:T=.5,className:q=""}){const O=C?"fixed":"absolute",L=T>.3?"bg-black/50":"bg-white/30";return e.jsxs("div",{className:`
        ${O}
        inset-0
        flex flex-col items-center justify-center
        gap-[16px]
        ${L}
        ${q}
      `.trim(),style:{zIndex:w},role:"alert","aria-busy":"true","aria-live":"polite",children:[e.jsx(M,{size:s,variant:"primary"}),o&&e.jsx("p",{className:"text-[16px] leading-[20px] tracking-[0.16px] font-medium text-content-body font-roboto",children:o})]})}z.__docgenInfo={description:"",methods:[],displayName:"LoadingOverlay",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:`Taille du spinner
@default "md"`,defaultValue:{value:'"md"',computed:!1}},message:{required:!1,tsType:{name:"string"},description:"Message optionnel affiché sous le spinner"},fullscreen:{required:!1,tsType:{name:"boolean"},description:`Mode fullscreen (couvre toute la fenêtre)
@default false`,defaultValue:{value:"false",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:`Z-index de l'overlay
@default 50`,defaultValue:{value:"50",computed:!1}},backgroundOpacity:{required:!1,tsType:{name:"number"},description:`Opacité du background (0-1)
@default 0.5`,defaultValue:{value:"0.5",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classe CSS supplémentaire",defaultValue:{value:'""',computed:!1}}}};const D={title:"Design System/Molecules/LoadingOverlay",component:z,argTypes:{size:{control:"select",options:["sm","md","lg"]}}},n={args:{size:"md"},decorators:[s=>e.jsxs("div",{style:{width:"100%",height:"300px",position:"relative",border:"1px solid #ccc"},children:[e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Contenu du conteneur"})}),e.jsx(s,{})]})]},r={args:{size:"md",message:"Chargement des données..."},decorators:[s=>e.jsx("div",{style:{width:"100%",height:"300px",position:"relative",border:"1px solid #ccc"},children:e.jsx(s,{})})]},t={args:{size:"sm",message:"Sync en cours"},decorators:[s=>e.jsx("div",{style:{width:"100%",height:"250px",position:"relative",border:"1px solid #ccc"},children:e.jsx(s,{})})]},a={args:{size:"lg",message:"Traitement important en cours..."},decorators:[s=>e.jsx("div",{style:{width:"100%",height:"400px",position:"relative",border:"1px solid #ccc"},children:e.jsx(s,{})})]},i={args:{size:"md",message:"Sauvegarde en cours"},decorators:[s=>e.jsxs("div",{style:{width:"100%",height:"300px",position:"relative",border:"2px dashed #999",display:"flex",alignItems:"center",justifyContent:"center"},children:[e.jsxs("div",{style:{padding:"40px",textAlign:"center"},children:[e.jsx("h3",{children:"Contenu de mon application"}),e.jsx("p",{children:"Ce contenu est masqué pendant le chargement"})]}),e.jsx(s,{})]})]};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  decorators: [Story => <div style={{
    width: "100%",
    height: "300px",
    position: "relative",
    border: "1px solid #ccc"
  }}>
        <div style={{
      padding: "20px"
    }}>
          <p>Contenu du conteneur</p>
        </div>
        <Story />
      </div>]
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "md",
    message: "Chargement des données..."
  },
  decorators: [Story => <div style={{
    width: "100%",
    height: "300px",
    position: "relative",
    border: "1px solid #ccc"
  }}>
        <Story />
      </div>]
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,x,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "sm",
    message: "Sync en cours"
  },
  decorators: [Story => <div style={{
    width: "100%",
    height: "250px",
    position: "relative",
    border: "1px solid #ccc"
  }}>
        <Story />
      </div>]
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,y,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: "lg",
    message: "Traitement important en cours..."
  },
  decorators: [Story => <div style={{
    width: "100%",
    height: "400px",
    position: "relative",
    border: "1px solid #ccc"
  }}>
        <Story />
      </div>]
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,b,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: "md",
    message: "Sauvegarde en cours"
  },
  decorators: [Story => <div style={{
    width: "100%",
    height: "300px",
    position: "relative",
    border: "2px dashed #999",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
        <div style={{
      padding: "40px",
      textAlign: "center"
    }}>
          <h3>Contenu de mon application</h3>
          <p>Ce contenu est masqué pendant le chargement</p>
        </div>
        <Story />
      </div>]
}`,...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const $=["Default","WithMessage","SmallSize","LargeSize","ContainerOverlay"];export{i as ContainerOverlay,n as Default,a as LargeSize,t as SmallSize,r as WithMessage,$ as __namedExportsOrder,D as default};
