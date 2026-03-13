import{aZ as D,a_ as $,a$ as V,b0 as B,b1 as W,b2 as G,b3 as z}from"./index-b9165fad.js";import{j as e}from"./vendor-chakra-e312fbc0.js";import{r as l,W as q}from"./vendor-react-d4f1e0e3.js";import{m as b}from"./vendor-motion-461a34d7.js";import"./vendor-antd-2fb7f97b.js";const Q=q.lazy(()=>z(()=>import("./index-730fd0e7.js"),["assets/index-730fd0e7.js","assets/vendor-react-d4f1e0e3.js"])),Y=[{id:"c",label:"C"},{id:"cpp",label:"C++"},{id:"java",label:"Java"},{id:"python",label:"Python"},{id:"javascript",label:"JavaScript"},{id:"html",label:"HTML / CSS / JS"},{id:"sql",label:"SQL"},{id:"php",label:"PHP"},{id:"csharp",label:"C#"},{id:"go",label:"Go"},{id:"rust",label:"Rust"}],E={c:`#include <stdio.h>

int main() {
    printf("Hello from C!\\n");
    return 0;
}
`,cpp:`#include <iostream>

int main() {
    std::cout << "Hello from C++!\\n";
    return 0;
}
`,java:`import java.util.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from Java!");
    }
}
`,python:'print("Hello from Python!")',javascript:'console.log("Hello from JavaScript!");',html:`<!DOCTYPE html>
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
`},T="prefcol_livecode_state_v1",K=()=>{if(typeof window>"u")return null;try{const t=localStorage.getItem(T);return t?JSON.parse(t):null}catch{return null}},Z=t=>{if(!(typeof window>"u"))try{localStorage.setItem(T,JSON.stringify(t))}catch{}};function re(){const t=K(),[r,k]=l.useState((t==null?void 0:t.language)||"javascript"),[i,S]=l.useState((t==null?void 0:t.code)||E[(t==null?void 0:t.language)||"javascript"]),[u,_]=l.useState((t==null?void 0:t.input)||""),[f,d]=l.useState((t==null?void 0:t.output)||""),[x,n]=l.useState((t==null?void 0:t.error)||""),[g,c]=l.useState((t==null?void 0:t.executionTime)||""),[v,I]=l.useState((t==null?void 0:t.theme)||"vs-dark"),[y,L]=l.useState(!1),[j,M]=l.useState(!1),R=typeof import.meta<"u"&&{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}.VITE_COMPILE_API_URL||"/api/compile";l.useEffect(()=>{Z({language:r,code:i,input:u,output:f,error:x,executionTime:g,theme:v})},[r,i,u,f,x,g,v]);const H=s=>{k(s),S(a=>a&&a.trim()&&s===r?a:E[s]||""),d(""),n(""),c("")},O=async()=>{try{await navigator.clipboard.writeText(i||"")}catch{}},F=()=>{const s=new Blob([i||""],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(s),a.download=`code-${r}.txt`,a.click(),URL.revokeObjectURL(a.href)},U=()=>{var o;const s=document.getElementById("live-html-preview");if(!s)return;const a=s.contentDocument||((o=s.contentWindow)==null?void 0:o.document);a&&(a.open(),a.write(i||""),a.close(),d("Rendered HTML preview."),n(""),c(""))},A=async()=>{if(!i||!i.trim()){n("Nothing to run. Please write some code first."),d(""),c("");return}L(!0),n(""),d(""),c("");const s=performance.now();try{if(r==="html"){U();const m=performance.now()-s;c(`${(m/1e3).toFixed(2)}s`);return}const a=await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:r,code:i,input:u})}),o=await a.json().catch(()=>({})),p=performance.now()-s;c(o.executionTime||`${(p/1e3).toFixed(2)}s`);const h=!["javascript","html"].includes(r),w=!a.ok&&(a.status===404||a.status===405||a.status===0),N=(o.error==="Compilation failed"||!o.error)&&!o.output;if(w&&h){const m=a.status===405?`
(405 = POST not allowed on this URL. Set VITE_COMPILE_API_URL to your deployed compile API and rebuild.)`:"";n(`${r.toUpperCase()} needs a compile server. No backend is configured.

• Set VITE_COMPILE_API_URL in .env to your backend (e.g. http://localhost:8080/api/compile)
• Start the prefcol-compiler-svc backend and ensure Docker is running for Java/C/Python.
• Or use JavaScript / HTML in this editor to run code in the browser.`+m),d("")}else if(!a.ok||o.error){let m=[o.error,o.output].filter(Boolean).join(`

`)||"Compilation failed";N&&h&&(m+=`

Tip: Start the compile backend (prefcol-compiler-svc) and set VITE_COMPILE_API_URL, or use JavaScript / HTML to run in the browser.`),n(m),d("")}else d(o.output||""),n("")}catch{const o=performance.now()-s;if(c(`${(o/1e3).toFixed(2)}s`),r==="javascript")try{let p="";const h=console.log;console.log=(...P)=>{p+=P.join(" ")+`
`,h.apply(console,P)};const w=u,N=()=>w;new Function("readInput",i)(N),console.log=h,d(p||"Program finished with no output."),n("")}catch(p){n(String(p))}else n(`${r.toUpperCase()} needs a compile server. No backend is configured.

• Set VITE_COMPILE_API_URL in .env to your backend (e.g. http://localhost:8080/api/compile)
• Or use JavaScript / HTML in this editor to run code in the browser.`)}finally{L(!1)}},J=()=>{d(""),n(""),c("")},C=j?"calc(100vh - 12rem)":"420px";return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-900 pt-24 pb-10 px-4",children:e.jsxs(b.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.7},className:"mx-auto max-w-6xl",children:[e.jsxs("div",{className:"mb-6 text-center space-y-2",children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-white",children:"Live Code Playground"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base max-w-2xl mx-auto",children:"Write, run, and experiment with code across multiple languages in a modern, responsive online compiler."}),e.jsxs("p",{className:"text-xs text-emerald-200/80",children:["JavaScript & HTML run in the browser. Other languages call your"," ",e.jsx("code",{className:"px-1 rounded bg-emerald-950/60 border border-emerald-500/40",children:"/api/compile"})," ","backend. Configure ",e.jsx("code",{children:"VITE_COMPILE_API_URL"})," for production."]})]}),e.jsxs("div",{className:`backdrop-blur-xl bg-white/5 border border-emerald-500/20 rounded-3xl shadow-2xl shadow-emerald-500/10 overflow-hidden transition-all duration-300 ${j?"fixed inset-4 z-40":""}`,children:[e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-3 px-4 py-3 bg-emerald-900/60 border-b border-emerald-500/30",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(b.div,{className:"relative",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:e.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-emerald-400/40 text-emerald-100 text-sm shadow-md",children:[e.jsx(D,{className:"w-3 h-3 opacity-60"}),e.jsx("select",{value:r,onChange:s=>H(s.target.value),className:"bg-transparent border-none outline-none text-emerald-50 text-sm cursor-pointer",children:Y.map(s=>e.jsx("option",{value:s.id,className:"bg-slate-900",children:s.label},s.id))})]})}),e.jsxs("button",{onClick:()=>I(s=>s==="vs-dark"?"vs-light":"vs-dark"),className:"text-xs px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-100 border border-emerald-400/50 hover:bg-emerald-500/40 transition-colors",children:[v==="vs-dark"?"Dark":"Light"," mode"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:O,className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/70 text-slate-100 hover:bg-slate-700/90 border border-slate-500/40 transition-colors",children:[e.jsx($,{className:"w-4 h-4"}),"Copy"]}),e.jsxs("button",{onClick:F,className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/70 text-slate-100 hover:bg-slate-700/90 border border-slate-500/40 transition-colors",children:[e.jsx(V,{className:"w-4 h-4"}),"Download"]}),e.jsxs("button",{onClick:()=>M(s=>!s),className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/70 text-slate-100 hover:bg-slate-700/90 border border-slate-500/40 transition-colors",children:[e.jsx(B,{className:"w-4 h-4"}),j?"Windowed":"Fullscreen"]}),e.jsx(b.button,{onClick:A,whileTap:{scale:.96},className:`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg ${y?"bg-amber-500 text-black":"bg-emerald-400 text-emerald-950 hover:bg-emerald-300"} transition-colors`,disabled:y,children:y?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"h-3 w-3 rounded-full border-2 border-amber-900 border-t-transparent animate-spin"}),"Running..."]}):e.jsxs(e.Fragment,{children:[e.jsx(W,{className:"w-4 h-4"}),"Run (Ctrl+Enter)"]})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4 px-4 py-3",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{className:"rounded-2xl bg-black/70 border border-emerald-500/30 overflow-hidden shadow-inner",children:e.jsx(l.Suspense,{fallback:e.jsx("div",{style:{height:C},className:"flex items-center justify-center text-slate-300 text-sm",children:"Loading editor..."}),children:e.jsx(Q,{height:C,theme:v,language:r==="html"?"html":r,value:i,onChange:s=>S(s||""),options:{fontSize:14,minimap:{enabled:!1},automaticLayout:!0,wordWrap:"on"}})})}),e.jsxs("div",{className:"rounded-2xl bg-slate-900/80 border border-slate-600/40 p-3",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-200 uppercase tracking-wide",children:"Custom Input (stdin)"}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Paste input for your program if needed"})]}),e.jsx("textarea",{value:u,onChange:s=>_(s.target.value),rows:4,className:"w-full bg-black/40 border border-slate-600/60 rounded-xl px-3 py-2 text-xs text-slate-100 font-mono outline-none focus:ring-1 focus:ring-emerald-400",placeholder:"Example: input values for your program..."})]})]}),e.jsxs("div",{className:"flex flex-col gap-3 mt-4 lg:mt-0",children:[e.jsxs(b.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},className:"rounded-2xl bg-slate-950/80 border border-slate-600/50 p-3 shadow-inner",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-200 uppercase tracking-wide",children:"Console Output"}),e.jsxs("div",{className:"flex items-center gap-2",children:[g&&e.jsx("span",{className:"text-[10px] text-emerald-300",children:g}),e.jsxs("button",{onClick:J,className:"inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-500/50 transition-colors",children:[e.jsx(G,{className:"w-3 h-3"}),"Clear"]})]})]}),e.jsx("div",{className:`mt-1 h-48 md:h-56 lg:h-64 rounded-xl border px-3 py-2 text-xs font-mono overflow-auto whitespace-pre-wrap ${x?"border-red-500/70 bg-red-950/50 text-red-200 animate-pulse":f?"border-emerald-500/60 bg-emerald-950/40 text-emerald-100":"border-slate-600/60 bg-black/40 text-slate-400"}`,children:x||f||"Hit Run to see output here."})]}),r==="html"&&e.jsxs(b.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.45,delay:.12},className:"rounded-2xl bg-slate-900/80 border border-emerald-500/40 p-3",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs font-semibold text-emerald-200 uppercase tracking-wide",children:"Live Preview"}),e.jsx("span",{className:"text-[10px] text-emerald-300",children:"HTML / CSS / JS rendered sandbox"})]}),e.jsx("div",{className:"rounded-xl overflow-hidden border border-emerald-500/40 bg-white h-56",children:e.jsx("iframe",{id:"live-html-preview",title:"Live HTML Preview",className:"w-full h-full bg-white"})})]})]})]})]})]})})}export{re as default};
