import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as t}from"./index-BNURykns.js";import{c as R}from"./createLucideIcon-CtqQySJq.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=R("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=R("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);function s({viewMode:d,onViewModeChange:i,className:P="",disabled:S=!1}){const[c,x]=t.useState(!1),u=[{id:"list",label:"Liste",icon:e.jsx(T,{size:20})},{id:"cards",label:"Grille",icon:e.jsx(D,{size:20})}],r=u.find(n=>n.id===d);return e.jsxs("div",{className:`relative inline-block ${P}`.trim(),children:[e.jsxs("button",{onClick:()=>x(!c),disabled:S,className:`
          inline-flex items-center gap-2
          p-3 rounded-lg
          border border-edge-neutral-default
          bg-surface-neutral-default
          hover:bg-surface-neutral-action-hover
          text-content-body
          text-base font-semibold tracking-[0.16px]
          transition-colors
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ring-offset-surface-page
          disabled:pointer-events-none disabled:bg-surface-disabled disabled:text-content-disabled disabled:border-edge-disabled
        `,children:[r==null?void 0:r.icon,e.jsx("span",{children:r==null?void 0:r.label})]}),c&&e.jsx("div",{className:`
            absolute top-full right-0 mt-1
            bg-surface-neutral-default
            border border-edge-neutral-default
            rounded-lg shadow-lg
            z-10
          `,children:u.map((n,g)=>e.jsxs("button",{onClick:()=>{i(n.id),x(!1)},className:`
                w-full px-4 py-2 text-left
                flex items-center gap-2
                hover:bg-surface-neutral-action-hover
                transition-colors
                text-content-body
                text-base font-semibold tracking-[0.16px]
                ${g===0?"rounded-t-lg":""}
                ${g===u.length-1?"rounded-b-lg":""}
                ${d===n.id?"bg-surface-branded-subtle":""}
              `,children:[n.icon,e.jsx("span",{children:n.label})]},n.id))}),c&&e.jsx("div",{className:"fixed inset-0 z-0",onClick:()=>x(!1)})]})}s.__docgenInfo={description:"",methods:[],displayName:"ViewModeDropdown",props:{viewMode:{required:!0,tsType:{name:"union",raw:'"list" | "cards"',elements:[{name:"literal",value:'"list"'},{name:"literal",value:'"cards"'}]},description:""},onViewModeChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(mode: ViewMode) => void",signature:{arguments:[{type:{name:"union",raw:'"list" | "cards"',elements:[{name:"literal",value:'"list"'},{name:"literal",value:'"cards"'}]},name:"mode"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const q={title:"Design System/Molecules/ViewModeDropdown",component:s},o={render:()=>{const[d,i]=t.useState("list");return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(s,{viewMode:d,onViewModeChange:i}),e.jsxs("p",{style:{marginTop:"16px"},children:["Mode: ",d]})]})}},a={render:()=>{const[d,i]=t.useState("cards");return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(s,{viewMode:d,onViewModeChange:i}),e.jsxs("p",{style:{marginTop:"16px"},children:["Mode: ",d]})]})}},l={render:()=>{const[d,i]=t.useState("list");return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(s,{viewMode:d,onViewModeChange:i,disabled:!0}),e.jsxs("p",{style:{marginTop:"16px"},children:["Mode: ",d," (disabled)"]})]})}},p={render:()=>{const[d,i]=t.useState("list");return e.jsxs("div",{children:[e.jsx("div",{style:{padding:"20px",borderBottom:"1px solid #e0e0e0"},children:e.jsx(s,{viewMode:d,onViewModeChange:i})}),e.jsx("div",{style:{padding:"20px"},children:d==="list"?e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("div",{style:{padding:"12px",border:"1px solid #ccc",borderRadius:"4px"},children:"Propriété 1 - Vue liste"}),e.jsx("div",{style:{padding:"12px",border:"1px solid #ccc",borderRadius:"4px"},children:"Propriété 2 - Vue liste"}),e.jsx("div",{style:{padding:"12px",border:"1px solid #ccc",borderRadius:"4px"},children:"Propriété 3 - Vue liste"})]}):e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[e.jsx("div",{style:{padding:"16px",border:"1px solid #ccc",borderRadius:"8px",textAlign:"center"},children:"Propriété 1"}),e.jsx("div",{style:{padding:"16px",border:"1px solid #ccc",borderRadius:"8px",textAlign:"center"},children:"Propriété 2"}),e.jsx("div",{style:{padding:"16px",border:"1px solid #ccc",borderRadius:"8px",textAlign:"center"},children:"Propriété 3"}),e.jsx("div",{style:{padding:"16px",border:"1px solid #ccc",borderRadius:"8px",textAlign:"center"},children:"Propriété 4"})]})})]})}};var v,b,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [viewMode, setViewMode] = useState<ViewMode>("list");
    return <div style={{
      padding: "20px"
    }}>
        <ViewModeDropdown viewMode={viewMode} onViewModeChange={setViewMode} />
        <p style={{
        marginTop: "16px"
      }}>Mode: {viewMode}</p>
      </div>;
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var m,w,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [viewMode, setViewMode] = useState<ViewMode>("cards");
    return <div style={{
      padding: "20px"
    }}>
        <ViewModeDropdown viewMode={viewMode} onViewModeChange={setViewMode} />
        <p style={{
        marginTop: "16px"
      }}>Mode: {viewMode}</p>
      </div>;
  }
}`,...(h=(w=a.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var M,f,V;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [viewMode, setViewMode] = useState<ViewMode>("list");
    return <div style={{
      padding: "20px"
    }}>
        <ViewModeDropdown viewMode={viewMode} onViewModeChange={setViewMode} disabled />
        <p style={{
        marginTop: "16px"
      }}>Mode: {viewMode} (disabled)</p>
      </div>;
  }
}`,...(V=(f=l.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var j,k,C;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [viewMode, setViewMode] = useState<ViewMode>("list");
    return <div>
        <div style={{
        padding: "20px",
        borderBottom: "1px solid #e0e0e0"
      }}>
          <ViewModeDropdown viewMode={viewMode} onViewModeChange={setViewMode} />
        </div>
        <div style={{
        padding: "20px"
      }}>
          {viewMode === "list" ? <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>
              <div style={{
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}>
                Propriété 1 - Vue liste
              </div>
              <div style={{
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}>
                Propriété 2 - Vue liste
              </div>
              <div style={{
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}>
                Propriété 3 - Vue liste
              </div>
            </div> : <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px"
        }}>
              <div style={{
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            textAlign: "center"
          }}>
                Propriété 1
              </div>
              <div style={{
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            textAlign: "center"
          }}>
                Propriété 2
              </div>
              <div style={{
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            textAlign: "center"
          }}>
                Propriété 3
              </div>
              <div style={{
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            textAlign: "center"
          }}>
                Propriété 4
              </div>
            </div>}
        </div>
      </div>;
  }
}`,...(C=(k=p.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const z=["ListMode","CardsMode","Disabled","Interactive"];export{a as CardsMode,l as Disabled,p as Interactive,o as ListMode,z as __namedExportsOrder,q as default};
