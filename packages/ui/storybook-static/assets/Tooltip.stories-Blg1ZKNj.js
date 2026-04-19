import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BNURykns.js";const k={top:"bottom-full left-1/2 -translate-x-1/2 mb-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2",right:"left-full top-1/2 -translate-y-1/2 ml-2"};function o({content:t,children:E,side:V="top",delayDuration:_=200,className:B=""}){const[I,c]=u.useState(!1),[d,M]=u.useState(null),p=()=>{const $=setTimeout(()=>c(!0),_);M($)},m=()=>{d&&clearTimeout(d),c(!1)};return e.jsxs("div",{className:"relative inline-flex",onMouseEnter:p,onMouseLeave:m,onFocus:p,onBlur:m,children:[E,I&&e.jsx("div",{className:`absolute z-50 ${k[V]} pointer-events-none ${B}`.trim(),role:"tooltip",children:e.jsx("div",{className:"text-sm leading-[18px] px-3 py-1.5 rounded-lg max-w-[300px] whitespace-normal shadow-md",style:{backgroundColor:"var(--neutral-700)",color:"white"},children:t})})]})}o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},delayDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const F={title:"Design System/Atoms/Tooltip",component:o,argTypes:{content:{control:"text"},side:{control:{type:"radio",options:["top","right","bottom","left"]}},delayDuration:{control:"number"}}},n={args:{content:"This is a helpful tooltip",side:"top",delayDuration:200},render:t=>e.jsx("div",{className:"flex items-center justify-center h-48",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded",children:"Hover me"})})})},s={args:{content:"Tooltip on top",side:"top"},render:t=>e.jsx("div",{className:"flex items-center justify-center h-48",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded",children:"Hover me"})})})},r={args:{content:"Tooltip on right",side:"right"},render:t=>e.jsx("div",{className:"flex items-center justify-center h-48",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded",children:"Hover me"})})})},i={args:{content:"Tooltip on bottom",side:"bottom"},render:t=>e.jsx("div",{className:"flex items-center justify-center h-48",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded",children:"Hover me"})})})},a={args:{content:"Tooltip on left",side:"left"},render:t=>e.jsx("div",{className:"flex items-center justify-center h-48",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded",children:"Hover me"})})})},l={args:{content:"This is a longer tooltip with more information to display on hover",side:"top"},render:t=>e.jsx("div",{className:"flex items-center justify-center h-48",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded",children:"Hover me"})})})};var h,x,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    content: "This is a helpful tooltip",
    side: "top",
    delayDuration: 200
  },
  render: args => <div className="flex items-center justify-center h-48">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,b,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on top",
    side: "top"
  },
  render: args => <div className="flex items-center justify-center h-48">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,T,j;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on right",
    side: "right"
  },
  render: args => <div className="flex items-center justify-center h-48">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
}`,...(j=(T=r.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var N,w,S;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on bottom",
    side: "bottom"
  },
  render: args => <div className="flex items-center justify-center h-48">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var H,D,q;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on left",
    side: "left"
  },
  render: args => <div className="flex items-center justify-center h-48">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
}`,...(q=(D=a.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var L,R,C;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    content: "This is a longer tooltip with more information to display on hover",
    side: "top"
  },
  render: args => <div className="flex items-center justify-center h-48">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
}`,...(C=(R=l.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const O=["Default","TopSide","RightSide","BottomSide","LeftSide","LongContent"];export{i as BottomSide,n as Default,a as LeftSide,l as LongContent,r as RightSide,s as TopSide,O as __namedExportsOrder,F as default};
