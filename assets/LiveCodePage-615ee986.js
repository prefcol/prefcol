import{r as s,j as e,q as P,aC as F,bs as D}from"./index-f50897c9.js";import{v as B,w as q,x as G,y as V}from"./index-33d6d1d4.js";const $=F.lazy(()=>D(()=>import("./index-da3be1dc.js"),["assets/index-da3be1dc.js","assets/index-f50897c9.js","assets/index-be515e65.css"])),T=[{id:"java",label:"Java"},{id:"python",label:"Python"},{id:"javascript",label:"JavaScript"},{id:"c",label:"C"},{id:"cpp",label:"C++"},{id:"html",label:"HTML / CSS / JS"},{id:"csharp",label:"C#"},{id:"php",label:"PHP"},{id:"go",label:"Go"},{id:"rust",label:"Rust"},{id:"sql",label:"SQL"}],K={java:"Main.java",python:"main.py",javascript:"script.js",c:"main.c",cpp:"main.cpp",html:"index.html",csharp:"Program.cs",php:"main.php",go:"main.go",rust:"main.rs",sql:"query.sql"},k={c:`#include <stdio.h>

int main() {
    printf("Hello from C!\\n");
    return 0;
}
`,cpp:`#include <iostream>

int main() {
    std::cout << "Hello from C++!\\n";
    return 0;
}
`,java:`// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class Main {
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");
    }
}
`,python:`# Online Python Compiler
print("Hello from Python!")`,javascript:`// Online JavaScript Compiler
console.log("Hello from JavaScript!");`,html:`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Live Preview</title>
  <style>
    body { font-family: system-ui; padding: 1rem; }
  </style>
</head>
<body>
  <h1>Hello from HTML!</h1>
  <p>Edit this template to see live changes.</p>
  <script>
    console.log("Hello from embedded JS");
  <\/script>
</body>
</html>
`,sql:`-- Example SQL
SELECT * FROM users LIMIT 10;
`,php:`<?php
  echo 'Hello from PHP!';
?>
`,csharp:`using System;

class Program {
  static void Main() {
    Console.WriteLine("Hello from C#!");
  }
}
`,go:`package main

import "fmt"

func main() {
  fmt.Println("Hello from Go!")
}
`,rust:`fn main() {
    println!("Hello from Rust!");
}
`},R="prefcol_livecode_state_v1",W=()=>{if(typeof window>"u")return null;try{const r=localStorage.getItem(R);return r?JSON.parse(r):null}catch{return null}},z=r=>{if(!(typeof window>"u"))try{localStorage.setItem(R,JSON.stringify(r))}catch{}};function X(){var E;const r=W(),[n,O]=s.useState((r==null?void 0:r.language)||"java"),[i,N]=s.useState((r==null?void 0:r.code)??k[(r==null?void 0:r.language)||"java"]),[m,_]=s.useState((r==null?void 0:r.input)||""),[h,c]=s.useState((r==null?void 0:r.output)||""),[p,l]=s.useState((r==null?void 0:r.error)||""),[g,d]=s.useState((r==null?void 0:r.executionTime)||""),[x,I]=s.useState((r==null?void 0:r.theme)||"vs-light"),[L,v]=s.useState(!1),S=typeof import.meta<"u"&&{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}.VITE_COMPILE_API_URL||"/api/compile",C=K[n]||"code.txt";s.useEffect(()=>{z({language:n,code:i,input:m,output:h,error:p,executionTime:g,theme:x})},[n,i,m,h,p,g,x]);const M=t=>{O(t),N(a=>a&&a.trim()&&t===n?a:k[t]||""),c(""),l(""),d("")},H=()=>{var o;const t=document.getElementById("live-html-preview");if(!t)return;const a=t.contentDocument||((o=t.contentWindow)==null?void 0:o.document);a&&(a.open(),a.write(i||""),a.close(),c("Rendered HTML preview."),l(""),d(""))},w=s.useCallback(async()=>{if(!i||!i.trim()){l("Nothing to run. Please write some code first."),c(""),d("");return}v(!0),l(""),c(""),d("");const t=performance.now();try{if(n==="html"){H(),d(`${((performance.now()-t)/1e3).toFixed(2)}s`),v(!1);return}const a=await fetch(S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:n,code:i,input:m})}),o=await a.json().catch(()=>({})),f=performance.now()-t;d(o.executionTime||`${(f/1e3).toFixed(2)}s`);const j=!["javascript","html"].includes(n),y=!a.ok&&(a.status===404||a.status===405||a.status===0),u=(o.error==="Compilation failed"||!o.error)&&!o.output;if(y&&j){const b=a.status===405?`
(405 = POST not allowed. If this is production, set VITE_COMPILE_API_URL to your deployed API and rebuild.)`:"";l(`${n.toUpperCase()} needs the compile server. No backend is configured.

• Local: Run \`npm run backend\` in a separate terminal, then click Run again.
• Production: Set VITE_COMPILE_API_URL in .env.production to your backend URL and rebuild.
• Or use JavaScript / HTML in this editor to run code in the browser.`+b),c("")}else if(!a.ok||o.error){const b=[o.error,o.output].filter(Boolean).join(`

`)||"Compilation failed";l(u&&j?b+"\n\nTip: Run `npm run backend` (local) or set VITE_COMPILE_API_URL (production).":b),c("")}else c(o.output||""),l("")}catch{if(d(`${((performance.now()-t)/1e3).toFixed(2)}s`),n==="javascript")try{let o="";const f=console.log;console.log=(...y)=>{o+=y.map(u=>typeof u=="object"?JSON.stringify(u):String(u)).join(" ")+`
`,f.apply(console,y)},new Function("readInput",i)(()=>m),console.log=f,c(o||"Program finished with no output."),l("")}catch(o){l(String(o))}else l(`${n.toUpperCase()} needs the compile server. No backend is configured.

• Run \`npm run backend\` in a separate terminal (from project root), then try Run again.
• Or use JavaScript / HTML to run in the browser.`)}finally{v(!1)}},[i,n,m,S]);s.useEffect(()=>{const t=a=>{(a.ctrlKey||a.metaKey)&&a.key==="Enter"&&(a.preventDefault(),w())};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[w]);const J=()=>{c(""),l(""),d("")},U=async()=>{try{await navigator.clipboard.writeText(i||"")}catch{}},A=()=>{const t=new Blob([i||""],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download=C,a.click(),URL.revokeObjectURL(a.href)};return e.jsx("div",{className:"min-h-screen bg-[#f5f5f5] pt-20 pb-8 px-4",children:e.jsxs(P.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},className:"mx-auto max-w-6xl",children:[e.jsxs("div",{className:"mb-4 flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("h1",{className:"text-2xl md:text-3xl font-bold text-gray-800",children:["Online ",((E=T.find(t=>t.id===n))==null?void 0:E.label)||n," Compiler"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("select",{value:n,onChange:t=>M(t.target.value),className:"rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500",children:T.map(t=>e.jsx("option",{value:t.id,children:t.label},t.id))}),e.jsx("button",{onClick:()=>I(t=>t==="vs-dark"?"vs-light":"vs-dark"),className:"rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50",children:x==="vs-dark"?"Light":"Dark"}),e.jsxs("button",{onClick:U,className:"rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50",children:[e.jsx(B,{className:"inline w-4 h-4 mr-1"})," Copy"]}),e.jsxs("button",{onClick:A,className:"rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50",children:[e.jsx(q,{className:"inline w-4 h-4 mr-1"})," Download"]}),e.jsx(P.button,{onClick:w,whileTap:{scale:.98},disabled:L,className:"inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-emerald-700 disabled:opacity-70",children:L?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin"}),"Running..."]}):e.jsxs(e.Fragment,{children:[e.jsx(G,{className:"w-4 h-4"}),"Run"]})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-gray-200 bg-gray-50 px-3 py-2",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700",children:C}),e.jsx("span",{className:"text-xs text-gray-500",children:"Ctrl+Enter to run"})]}),e.jsx("div",{className:"min-h-[360px]",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{className:"flex h-[360px] items-center justify-center text-gray-500",children:"Loading editor..."}),children:e.jsx($,{height:"360px",theme:x,language:n==="html"?"html":n,value:i,onChange:t=>N(t||""),options:{fontSize:14,minimap:{enabled:!1},automaticLayout:!0,wordWrap:"on",padding:{top:8}}})})}),e.jsxs("details",{className:"border-t border-gray-200 bg-gray-50",children:[e.jsx("summary",{className:"cursor-pointer px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-100",children:"Custom Input (stdin)"}),e.jsx("textarea",{value:m,onChange:t=>_(t.target.value),rows:3,className:"w-full border-0 bg-white px-3 py-2 text-sm font-mono text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0",placeholder:"Paste input for your program..."})]})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-gray-200 bg-gray-50 px-3 py-2",children:[e.jsx("span",{className:"text-sm font-semibold text-gray-700",children:"Output"}),e.jsxs("div",{className:"flex items-center gap-2",children:[g&&e.jsx("span",{className:"text-xs text-emerald-600 font-medium",children:g}),e.jsxs("button",{onClick:J,className:"inline-flex items-center gap-1 rounded bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-300",children:[e.jsx(V,{className:"w-3 h-3"}),"Clear"]})]})]}),e.jsx("div",{className:`flex-1 min-h-[320px] p-3 text-sm font-mono overflow-auto whitespace-pre-wrap ${p?"bg-red-50 text-red-800":h?"bg-gray-50 text-gray-800":"bg-gray-50 text-gray-500"}`,children:p||h||"Run your code to see output here."}),n==="html"&&e.jsxs("div",{className:"border-t border-gray-200 p-2",children:[e.jsx("div",{className:"text-xs font-medium text-gray-600 mb-1",children:"Live Preview"}),e.jsx("div",{className:"rounded border border-gray-200 bg-white h-48 overflow-hidden",children:e.jsx("iframe",{id:"live-html-preview",title:"Live HTML Preview",className:"w-full h-full bg-white"})})]})]})]}),e.jsxs("p",{className:"mt-3 text-center text-xs text-gray-500",children:["JavaScript & HTML run in the browser. Java & Python need the backend: run"," ",e.jsx("code",{className:"rounded bg-gray-200 px-1",children:"npm run backend"})," in a separate terminal."]})]})})}export{X as default};
