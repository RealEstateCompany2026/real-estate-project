import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as t}from"./createLucideIcon-CtqQySJq.js";import{T as i}from"./triangle-alert-WN3b9Z4q.js";import{I as o}from"./info-BiYvWz97.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=t("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=t("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);function d({type:s,message:n,className:a=""}){const c=()=>{switch(s){case"info":return e.jsx(o,{size:20,className:"text-icon-information"});case"warning":return e.jsx(i,{size:20,className:"text-icon-warning"});case"error":return e.jsx(l,{size:20,className:"text-icon-error"});case"success":return e.jsx(u,{size:20,className:"text-icon-success"})}},r=(()=>{switch(s){case"info":return{bg:"bg-surface-information",border:"border-edge-information",text:"text-content-information"};case"warning":return{bg:"bg-surface-warning",border:"border-edge-warning",text:"text-content-warning"};case"error":return{bg:"bg-surface-error",border:"border-edge-error",text:"text-content-error"};case"success":return{bg:"bg-surface-success",border:"border-edge-success",text:"text-content-success"}}})();return e.jsxs("div",{className:`
        flex items-start gap-3 px-4 py-3 rounded-2xl
        border
        ${r.bg}
        ${r.border}
        ${a}
      `,children:[e.jsx("div",{className:"flex-shrink-0 pt-0.5",children:c()}),e.jsx("p",{className:`text-sm leading-5 flex-1 ${r.text}`,children:n})]})}d.__docgenInfo={description:"",methods:[],displayName:"InlineMessage",props:{type:{required:!0,tsType:{name:"union",raw:'"info" | "warning" | "error" | "success"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:""},message:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};export{d as I};
