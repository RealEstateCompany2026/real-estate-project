import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-BNURykns.js";import{B as de}from"./Button-nkpS-x_8.js";import{F as ue}from"./file-text-CGmI5HgC.js";import{X as me}from"./x-C_NNgUki.js";import{c as fe}from"./createLucideIcon-CtqQySJq.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=fe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);function j({accept:t="*",maxSize:n=50*1024*1024,onFileSelect:o,onFileRemove:a,selectedFile:i,error:c,disabled:l=!1,className:Y=""}){const[Z,y]=p.useState(!1),d=p.useRef(null),ee=e=>{var s;if(e.size>n)return`Le fichier est trop volumineux. Taille maximale: ${(n/1048576).toFixed(0)}MB`;if(t!=="*"){const z=t.split(",").map(pe=>pe.trim()),ce=`.${(s=e.name.split(".").pop())==null?void 0:s.toLowerCase()}`;if(!z.includes(ce))return`Format de fichier non supporté. Formats acceptés: ${t}`}return null},b=e=>{ee(e)||o==null||o(e)},re=e=>{e.preventDefault(),e.stopPropagation(),l||y(!0)},te=e=>{e.preventDefault(),e.stopPropagation(),y(!1)},se=e=>{e.preventDefault(),e.stopPropagation()},ne=e=>{if(e.preventDefault(),e.stopPropagation(),y(!1),l)return;const s=e.dataTransfer.files;s&&s.length>0&&b(s[0])},ae=()=>{var e;!l&&!i&&((e=d.current)==null||e.click())},oe=e=>{const s=e.target.files;s&&s.length>0&&b(s[0])},ie=e=>{e.stopPropagation(),a==null||a(),d.current&&(d.current.value="")},le=e=>e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`;return r.jsxs("div",{className:Y,children:[r.jsxs("div",{className:`
          relative rounded-[16px] border-2 border-dashed
          transition-all duration-200 min-h-[200px]
          flex flex-col items-center justify-center
          ${!l&&!i?"cursor-pointer":""}
          ${l?"opacity-50 cursor-not-allowed":""}
          ${Z?"border-edge-branded-action bg-surface-branded-action":"border-edge-subtle bg-surface-neutral-default"}
        `.trim(),onDragEnter:re,onDragLeave:te,onDragOver:se,onDrop:ne,onClick:ae,children:[r.jsx("input",{ref:d,type:"file",accept:t,onChange:oe,disabled:l,className:"hidden"}),i?r.jsx("div",{className:"flex flex-col items-center justify-center p-8 w-full",children:r.jsxs("div",{className:"flex items-center gap-4 w-full max-w-md",children:[r.jsx(ue,{size:48,className:"text-icon-branded-default flex-shrink-0"}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:"text-[16px] font-medium truncate text-content-body font-roboto",children:i.name}),r.jsx("p",{className:"text-[14px] mt-1 text-content-caption font-roboto",children:le(i.size)})]}),r.jsx(de,{variant:"ghost",size:"sm",onClick:ie,disabled:l,children:r.jsx(me,{size:20})})]})}):r.jsxs("div",{className:"flex flex-col items-center justify-center p-8",children:[r.jsx(xe,{size:64,className:"text-icon-branded-default mb-4 stroke-[1.5]"}),r.jsxs("p",{className:"text-[16px] text-center text-content-body font-roboto",children:["Déposez votre fichier ici ou"," ",r.jsx("span",{className:"font-semibold text-icon-branded-default hover:underline cursor-pointer",children:"cliquez pour parcourir"})]}),r.jsxs("p",{className:"text-[14px] mt-2 text-content-caption font-roboto",children:[t!=="*"?`Formats supportés: ${t}`:"Tous les formats acceptés"," ","(max ",(n/(1024*1024)).toFixed(0),"MB)"]})]})]}),c&&r.jsx("p",{className:"text-[14px] mt-2 text-content-error font-roboto",children:c})]})}j.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{accept:{required:!1,tsType:{name:"string"},description:'Types de fichiers acceptés (ex: ".csv,.xlsx,.xls")',defaultValue:{value:'"*"',computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:`Taille maximale en bytes
@default 50MB`,defaultValue:{value:"50 * 1024 * 1024",computed:!1}},onFileSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"void"}}},description:"Callback quand un fichier est sélectionné"},onFileRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback pour supprimer le fichier"},selectedFile:{required:!1,tsType:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},description:"Fichier actuellement sélectionné"},error:{required:!1,tsType:{name:"string"},description:"Message d'erreur"},disabled:{required:!1,tsType:{name:"boolean"},description:"État disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classe CSS supplémentaire",defaultValue:{value:'""',computed:!1}}}};const ze={title:"Design System/Molecules/FileUpload",component:j},u={args:{accept:".pdf,.jpg,.png,.jpeg"}},m={args:{accept:".csv",maxSize:10*1024*1024}},f={args:{accept:".xlsx,.xls",maxSize:20*1024*1024}},x={args:{accept:".jpg,.jpeg,.png,.webp",maxSize:5*1024*1024}},g={args:{accept:".pdf,.doc,.docx,.txt",maxSize:25*1024*1024}},h={render:()=>{const[t,n]=p.useState(null),o=new File(["content"],"rapport-vente.pdf",{type:"application/pdf"});return r.jsx(j,{accept:".pdf",selectedFile:o,onFileSelect:a=>n(a),onFileRemove:()=>n(null)})}},F={args:{disabled:!0}},v={args:{error:"Fichier trop volumineux (maximum 10 MB)",accept:".csv"}},S={render:()=>{const[t,n]=p.useState(null),[o,a]=p.useState(""),i=c=>{c.size>5*1024*1024?(a("Le fichier dépasse 5 MB"),n(null)):(a(""),n(c))};return r.jsxs("div",{children:[r.jsx(j,{accept:".pdf,.csv,.xlsx",selectedFile:t,onFileSelect:i,onFileRemove:()=>{n(null),a("")},error:o,maxSize:5*1024*1024}),t&&r.jsxs("p",{children:["Fichier sélectionné: ",t.name]})]})}};var D,M,B;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    accept: ".pdf,.jpg,.png,.jpeg"
  }
}`,...(B=(M=u.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var E,w,N;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    accept: ".csv",
    maxSize: 10 * 1024 * 1024 // 10MB
  }
}`,...(N=(w=m.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var T,k,U;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    accept: ".xlsx,.xls",
    maxSize: 20 * 1024 * 1024 // 20MB
  }
}`,...(U=(k=f.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var C,q,$;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    accept: ".jpg,.jpeg,.png,.webp",
    maxSize: 5 * 1024 * 1024 // 5MB
  }
}`,...($=(q=x.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var I,L,V;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    accept: ".pdf,.doc,.docx,.txt",
    maxSize: 25 * 1024 * 1024 // 25MB
  }
}`,...(V=(L=g.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var P,R,W;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [file, setFile] = useState<File | null>(null);
    const mockFile = new File(["content"], "rapport-vente.pdf", {
      type: "application/pdf"
    });
    return <FileUpload accept=".pdf" selectedFile={mockFile} onFileSelect={f => setFile(f)} onFileRemove={() => setFile(null)} />;
  }
}`,...(W=(R=h.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var _,O,A;F.parameters={...F.parameters,docs:{...(_=F.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(A=(O=F.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var H,K,X;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    error: "Fichier trop volumineux (maximum 10 MB)",
    accept: ".csv"
  }
}`,...(X=(K=v.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var G,J,Q;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string>("");
    const handleFileSelect = (newFile: File) => {
      if (newFile.size > 5 * 1024 * 1024) {
        setError("Le fichier dépasse 5 MB");
        setFile(null);
      } else {
        setError("");
        setFile(newFile);
      }
    };
    return <div>
        <FileUpload accept=".pdf,.csv,.xlsx" selectedFile={file} onFileSelect={handleFileSelect} onFileRemove={() => {
        setFile(null);
        setError("");
      }} error={error} maxSize={5 * 1024 * 1024} />
        {file && <p>Fichier sélectionné: {file.name}</p>}
      </div>;
  }
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const De=["Default","CSVUpload","ExcelUpload","ImageUpload","MultipleAcceptedTypes","WithFile","Disabled","WithError","Interactive"];export{m as CSVUpload,u as Default,F as Disabled,f as ExcelUpload,x as ImageUpload,S as Interactive,g as MultipleAcceptedTypes,v as WithError,h as WithFile,De as __namedExportsOrder,ze as default};
