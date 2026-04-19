import{j as e}from"./jsx-runtime-BjG_zV1W.js";const R=({targetRect:t,padding:n=8,borderRadius:a=8,children:q,onSkip:l,zIndex:z=9999})=>{const I=p=>{p.target===p.currentTarget&&l&&l()};return e.jsxs("div",{className:"fixed inset-0",style:{zIndex:z,pointerEvents:"auto"},onClick:I,children:[e.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",style:{pointerEvents:"none"},children:[e.jsx("defs",{children:e.jsxs("mask",{id:"spotlight-mask",children:[e.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"white"}),e.jsx("rect",{x:t.left-n,y:t.top-n,width:t.width+n*2,height:t.height+n*2,rx:a,ry:a,fill:"black"})]})}),e.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"rgba(0, 0, 0, 0.7)",mask:"url(#spotlight-mask)"})]}),e.jsx("div",{className:"absolute border-2 pointer-events-none",style:{borderColor:"var(--border-neutral-default)",top:t.top-n,left:t.left-n,width:t.width+n*2,height:t.height+n*2,borderRadius:`${a}px`,boxShadow:"0 0 0 4px rgba(255, 255, 255, 0.1)"}}),q]})};R.__docgenInfo={description:"",methods:[],displayName:"Spotlight",props:{targetRect:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  top: number;
  left: number;
  width: number;
  height: number;
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]}},description:"Rectangle de la zone à mettre en évidence (position relative au viewport)"},padding:{required:!1,tsType:{name:"number"},description:"Padding autour de la zone mise en évidence (défaut: 8px)",defaultValue:{value:"8",computed:!1}},borderRadius:{required:!1,tsType:{name:"number"},description:"Rayon de bordure de la zone découpée (défaut: 8px)",defaultValue:{value:"8",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Contenu à afficher (généralement un tooltip)"},onSkip:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback pour passer le tour"},zIndex:{required:!1,tsType:{name:"number"},description:"Z-index de l'overlay (défaut: 9999)",defaultValue:{value:"9999",computed:!1}}}};const B={title:"Design System/Molecules/Spotlight",component:R},r={args:{targetRect:{top:100,left:100,width:200,height:100},children:e.jsx("div",{children:"Cliquez ici pour continuer"})},decorators:[t=>e.jsxs("div",{style:{height:"400px",position:"relative"},children:[e.jsx("button",{style:{position:"absolute",top:"100px",left:"100px",width:"200px",height:"100px",padding:"16px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Bouton en évidence"}),e.jsx(t,{})]})]},o={args:{targetRect:{top:80,left:120,width:160,height:120},padding:16,children:e.jsx("div",{children:"Zone avec plus d'espace"})},decorators:[t=>e.jsxs("div",{style:{height:"400px",position:"relative"},children:[e.jsx("input",{type:"text",placeholder:"Entrez votre email",style:{position:"absolute",top:"80px",left:"120px",width:"160px",padding:"12px",borderRadius:"8px",border:"2px solid #007bff"}}),e.jsx(t,{})]})]},i={args:{targetRect:{top:150,left:150,width:100,height:100},zIndex:50,children:e.jsx("p",{children:"Spotlight au premier plan"})},decorators:[t=>e.jsxs("div",{style:{height:"400px",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"150px",left:"150px",width:"100px",height:"100px",backgroundColor:"#FF9800",borderRadius:"8px"}}),e.jsx(t,{})]})]},s={args:{targetRect:{top:100,left:100,width:200,height:80},children:e.jsx("p",{children:"Cliquez sur le bouton de retrait"}),onSkip:()=>console.log("Spotlight ignoré")},decorators:[t=>e.jsxs("div",{style:{height:"400px",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"100px",left:"100px",width:"200px",height:"80px",backgroundColor:"#2196F3",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold"},children:"Élément à découvrir"}),e.jsx(t,{})]})]},d={args:{targetRect:{top:120,left:80,width:240,height:100},borderRadius:24,padding:12},decorators:[t=>e.jsxs("div",{style:{height:"400px",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"120px",left:"80px",width:"240px",height:"100px",backgroundColor:"#9C27B0",borderRadius:"24px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"16px"},children:"Zone arrondie"}),e.jsx(t,{})]})]};var c,h,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    targetRect: {
      top: 100,
      left: 100,
      width: 200,
      height: 100
    },
    children: <div>Cliquez ici pour continuer</div>
  },
  decorators: [Story => <div style={{
    height: "400px",
    position: "relative"
  }}>
        <button style={{
      position: "absolute",
      top: "100px",
      left: "100px",
      width: "200px",
      height: "100px",
      padding: "16px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer"
    }}>
          Bouton en évidence
        </button>
        <Story />
      </div>]
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,g,m;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    targetRect: {
      top: 80,
      left: 120,
      width: 160,
      height: 120
    },
    padding: 16,
    children: <div>Zone avec plus d'espace</div>
  },
  decorators: [Story => <div style={{
    height: "400px",
    position: "relative"
  }}>
        <input type="text" placeholder="Entrez votre email" style={{
      position: "absolute",
      top: "80px",
      left: "120px",
      width: "160px",
      padding: "12px",
      borderRadius: "8px",
      border: "2px solid #007bff"
    }} />
        <Story />
      </div>]
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var f,v,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    targetRect: {
      top: 150,
      left: 150,
      width: 100,
      height: 100
    },
    zIndex: 50,
    children: <p>Spotlight au premier plan</p>
  },
  decorators: [Story => <div style={{
    height: "400px",
    position: "relative"
  }}>
        <div style={{
      position: "absolute",
      top: "150px",
      left: "150px",
      width: "100px",
      height: "100px",
      backgroundColor: "#FF9800",
      borderRadius: "8px"
    }} />
        <Story />
      </div>]
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,w,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    targetRect: {
      top: 100,
      left: 100,
      width: 200,
      height: 80
    },
    children: <p>Cliquez sur le bouton de retrait</p>,
    onSkip: () => console.log("Spotlight ignoré")
  },
  decorators: [Story => <div style={{
    height: "400px",
    position: "relative"
  }}>
        <div style={{
      position: "absolute",
      top: "100px",
      left: "100px",
      width: "200px",
      height: "80px",
      backgroundColor: "#2196F3",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold"
    }}>
          Élément à découvrir
        </div>
        <Story />
      </div>]
}`,...(j=(w=s.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var S,C,k;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    targetRect: {
      top: 120,
      left: 80,
      width: 240,
      height: 100
    },
    borderRadius: 24,
    padding: 12
  },
  decorators: [Story => <div style={{
    height: "400px",
    position: "relative"
  }}>
        <div style={{
      position: "absolute",
      top: "120px",
      left: "80px",
      width: "240px",
      height: "100px",
      backgroundColor: "#9C27B0",
      borderRadius: "24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "16px"
    }}>
          Zone arrondie
        </div>
        <Story />
      </div>]
}`,...(k=(C=d.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const T=["Default","WithCustomPadding","HighZIndex","WithSkipCallback","BorderRadius"];export{d as BorderRadius,r as Default,i as HighZIndex,o as WithCustomPadding,s as WithSkipCallback,T as __namedExportsOrder,B as default};
