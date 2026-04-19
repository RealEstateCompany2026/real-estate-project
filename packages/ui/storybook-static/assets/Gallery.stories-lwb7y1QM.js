import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as x}from"./image-DVSJviQY.js";import"./createLucideIcon-CtqQySJq.js";import"./index-BNURykns.js";function $({images:r,onGalleryClick:m,onAddPhotos:p,galleryLabel:V="Galerie",height:g=277,className:f=""}){const u=r[0],s=r[1],l=r[2];return r.length===0?e.jsxs("div",{className:`relative w-full rounded-[16px] overflow-hidden
          flex flex-col items-center justify-center gap-[12px] ${f}`.trim(),style:{height:`${g}px`,backgroundColor:"var(--surface-neutral-action)"},children:[e.jsx(x,{size:40,style:{color:"var(--text-disabled)"}}),e.jsx("p",{className:"text-[14px] leading-[20px] font-medium",style:{color:"var(--text-subtle)"},children:"Aucune photo pour ce bien"}),p&&e.jsx("button",{onClick:p,className:`mt-[4px] px-[16px] py-[8px] rounded-[12px] border border-solid
              text-[14px] font-semibold leading-[20px] transition-colors`,style:{backgroundColor:"var(--surface-neutral-default)",borderColor:"var(--border-default)",color:"var(--text-neutral-action)"},children:"Ajouter des photos"})]}):e.jsxs("div",{className:`relative w-full ${f}`.trim(),style:{height:`${g}px`},children:[e.jsxs("div",{className:"w-full h-full",style:{display:"grid",gridTemplateColumns:l?"412fr 412fr 363fr":s?"1fr 1fr":"1fr",gap:"2px"},children:[u&&e.jsx("div",{className:"relative overflow-hidden rounded-tl-[16px] rounded-bl-[16px]",children:e.jsx("img",{src:u.url,alt:u.alt??"",className:"absolute inset-0 w-full h-full object-cover"})}),s&&e.jsx("div",{className:"relative overflow-hidden",children:e.jsx("img",{src:s.url,alt:s.alt??"",className:"absolute inset-0 w-full h-full object-cover"})}),l&&e.jsx("div",{className:"relative overflow-hidden",children:e.jsx("img",{src:l.url,alt:l.alt??"",className:"absolute inset-0 w-full h-full object-cover"})})]}),m&&e.jsxs("button",{onClick:m,className:`absolute top-[20px] right-[20px] flex items-center gap-[8px]
            p-[12px] rounded-[16px] border border-solid transition-colors`,style:{backgroundColor:"var(--surface-neutral-default)",borderColor:"var(--surface-neutral-default)"},children:[e.jsx("span",{className:"text-[16px] font-semibold leading-[20px] tracking-[0.16px] whitespace-nowrap",style:{color:"var(--text-neutral-action)"},children:V}),e.jsx(x,{size:20,style:{color:"var(--text-neutral-action)"}})]})]})}$.__docgenInfo={description:"",methods:[],displayName:"Gallery",props:{images:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ url: string; alt?: string }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1}}]}}],raw:"Array<{ url: string; alt?: string }>"},description:"Liste des images (URL + alt) — les 3 premières sont affichées"},onGalleryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Callback au clic sur "Galerie"'},onAddPhotos:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback quand l'utilisateur veut ajouter des photos (affiché dans l'empty state)"},galleryLabel:{required:!1,tsType:{name:"string"},description:"Label du bouton",defaultValue:{value:'"Galerie"',computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Hauteur du strip",defaultValue:{value:"277",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const W={title:"Design System/Organisms/Gallery",component:$,parameters:{layout:"padded"}},a=[{url:"https://placehold.co/800x400/e8a87c/fff?text=Salon",alt:"Salon"},{url:"https://placehold.co/800x400/7b8fa1/fff?text=Chambre",alt:"Chambre"},{url:"https://placehold.co/800x400/c4a882/fff?text=Salle+de+bain",alt:"Salle de bain"}],t={args:{images:a,onGalleryClick:()=>console.log("Galerie clicked")}},o={args:{images:a.slice(0,2),onGalleryClick:()=>console.log("Galerie clicked")}},i={args:{images:a.slice(0,1),onGalleryClick:()=>console.log("Galerie clicked")}},n={args:{images:[]}},c={args:{images:a}},d={args:{images:a,onGalleryClick:()=>console.log("Galerie clicked"),height:200},decorators:[r=>e.jsx("div",{style:{maxWidth:420},children:e.jsx(r,{})})]};var h,y,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    onGalleryClick: () => console.log("Galerie clicked")
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,j,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    images: sampleImages.slice(0, 2),
    onGalleryClick: () => console.log("Galerie clicked")
  }
}`,...(k=(j=o.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var G,w,C;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    images: sampleImages.slice(0, 1),
    onGalleryClick: () => console.log("Galerie clicked")
  }
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var N,I,S;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    images: []
  }
}`,...(S=(I=n.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var T,q,A;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    images: sampleImages
  }
}`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var E,L,_;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    onGalleryClick: () => console.log("Galerie clicked"),
    height: 200
  },
  decorators: [Story => <div style={{
    maxWidth: 420
  }}>
        <Story />
      </div>]
}`,...(_=(L=d.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const D=["ThreeImages","TwoImages","SingleImage","Empty","NoBoutonGalerie","Narrow"];export{n as Empty,d as Narrow,c as NoBoutonGalerie,i as SingleImage,t as ThreeImages,o as TwoImages,D as __namedExportsOrder,W as default};
