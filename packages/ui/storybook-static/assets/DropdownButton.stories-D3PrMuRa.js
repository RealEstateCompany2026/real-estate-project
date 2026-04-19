import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as X}from"./index-BNURykns.js";import{C as Y}from"./chevron-down-CwOBiCf7.js";import{S as f}from"./settings-Bi2upNBe.js";import{c as Z}from"./createLucideIcon-CtqQySJq.js";import{U as ee}from"./user-BnRui8Nx.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=Z("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);function m({label:s,leftIcon:a,isOpen:H=!1,shadow:J=!0,onClick:K,disabled:b=!1,className:Q=""}){return e.jsx("button",{type:"button",onClick:K,disabled:b,className:`h-11 rounded-lg p-3 min-w-[104px] bg-surface-neutral-default border border-edge-default transition-all ${J?"shadow-sm":""} ${b?"opacity-40 cursor-not-allowed":"cursor-pointer hover:bg-surface-neutral-action"} ${Q}`.trim(),children:e.jsxs("div",{className:"flex items-center gap-2",children:[a&&e.jsx(a,{size:20,className:"shrink-0 text-content-body"}),s&&a&&e.jsx("div",{className:"w-1"}),s&&e.jsx("span",{className:"text-base font-semibold text-content-body tracking-[0.16px] whitespace-nowrap",children:s}),e.jsx(Y,{size:20,className:`shrink-0 text-content-body transition-transform duration-200 ${H?"rotate-180":""}`})]})})}m.__docgenInfo={description:"",methods:[],displayName:"DropdownButton",props:{label:{required:!1,tsType:{name:"string"},description:""},leftIcon:{required:!1,tsType:{name:"LucideIcon"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const le={title:"Design System/Molecules/DropdownButton",component:m,argTypes:{label:{control:"text"},isOpen:{control:"boolean"},shadow:{control:"boolean"},disabled:{control:"boolean"}}},r={args:{label:"Options",isOpen:!1,shadow:!0,disabled:!1}},n={args:{label:"Options",isOpen:!0,shadow:!0,disabled:!1}},t={args:{label:"Filter",leftIcon:G,isOpen:!1,shadow:!0,disabled:!1}},o={args:{label:"Filter",leftIcon:G,isOpen:!0,shadow:!0,disabled:!1}},l={args:{label:"Settings",leftIcon:f,isOpen:!1,shadow:!0,disabled:!1}},i={args:{label:"Profile",leftIcon:ee,isOpen:!1,shadow:!0,disabled:!1}},c={args:{label:"Options",isOpen:!1,shadow:!1,disabled:!1}},d={args:{label:"Options",isOpen:!1,shadow:!0,disabled:!0}},p={args:{leftIcon:f,isOpen:!1,shadow:!0,disabled:!1}},u={render:()=>{const[s,a]=X.useState(!1);return e.jsx(m,{label:"Click me",leftIcon:f,isOpen:s,onClick:()=>a(!s)})}};var g,O,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Options",
    isOpen: false,
    shadow: true,
    disabled: false
  }
}`,...(h=(O=r.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var w,I,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Options",
    isOpen: true,
    shadow: true,
    disabled: false
  }
}`,...(S=(I=n.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var y,x,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Filter",
    leftIcon: Filter,
    isOpen: false,
    shadow: true,
    disabled: false
  }
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var D,N,j;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Filter",
    leftIcon: Filter,
    isOpen: true,
    shadow: true,
    disabled: false
  }
}`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var k,F,T;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Settings",
    leftIcon: Settings,
    isOpen: false,
    shadow: true,
    disabled: false
  }
}`,...(T=(F=l.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var W,q,C;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Profile",
    leftIcon: User,
    isOpen: false,
    shadow: true,
    disabled: false
  }
}`,...(C=(q=i.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var U,B,L;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: "Options",
    isOpen: false,
    shadow: false,
    disabled: false
  }
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var V,_,$;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: "Options",
    isOpen: false,
    shadow: true,
    disabled: true
  }
}`,...($=(_=d.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var E,z,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    leftIcon: Settings,
    isOpen: false,
    shadow: true,
    disabled: false
  }
}`,...(P=(z=p.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var M,R,A;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <DropdownButton label="Click me" leftIcon={Settings} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />;
  }
}`,...(A=(R=u.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const ie=["Default","Open","WithLeftIcon","WithLeftIconOpen","WithSettings","WithUser","NoShadow","Disabled","IconOnly","Interactive"];export{r as Default,d as Disabled,p as IconOnly,u as Interactive,c as NoShadow,n as Open,t as WithLeftIcon,o as WithLeftIconOpen,l as WithSettings,i as WithUser,ie as __namedExportsOrder,le as default};
