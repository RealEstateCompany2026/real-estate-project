import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{c as r}from"./createLucideIcon-CtqQySJq.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=r("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=r("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function u({isDark:t=!1,onChange:e,className:l=""}){const i=()=>{e==null||e()},o=s=>{(s.key===" "||s.key==="Enter")&&(s.preventDefault(),e==null||e())},n=t?"bg-surface-neutral-action":"bg-surface-neutral-action-hover";return a.jsx("div",{className:`relative w-12 h-[30px] rounded-2xl transition-all duration-200 cursor-pointer ${n} ${l}`.trim(),onClick:i,onKeyDown:o,role:"switch","aria-checked":t,"aria-label":t?"Passer en mode clair":"Passer en mode sombre",tabIndex:0,children:a.jsx("div",{className:`absolute top-[3px] size-6 rounded-full bg-surface-neutral-default shadow-sm transition-all duration-200 flex items-center justify-center ${t?"left-[21px]":"left-[3px]"}`,children:t?a.jsx(d,{size:14,className:"text-icon-neutral-default"}):a.jsx(c,{size:14,className:"text-icon-placeholder"})})})}u.__docgenInfo={description:"",methods:[],displayName:"SwitchTheme",props:{isDark:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};export{u as S};
