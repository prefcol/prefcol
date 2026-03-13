import{f as te,j as e,B as O,Q as E,h as l,aD as F,aE as L,aF as R,H as x,V as A,ab as M,n as b,ag as B,aQ as ae,aR as ne,aS as I,aT as d,aU as oe,aV as c,i as p,Z as se,M as le,$ as ie,s as re,r as de,v as ce,aa as he}from"./vendor-chakra-e312fbc0.js";import{r}from"./vendor-react-d4f1e0e3.js";import{e as pe,s as me}from"./adminApi-2e0ace0b.js";import"./vendor-motion-461a34d7.js";const ge="/assets/Brand Logo-35da69e4.jpg",J=[{id:1,name:"Kowsalya P",code:"PREFCOLCHY0001",role:"Academic Coordinator",dept:"Academics",location:"Chennai",ctc:12e4,dateOfJoining:"2025-10-06",pan:"HJMPM3654J",bankAccountNo:"809401502557"},{id:2,name:"Aarthi B",code:"PREFCOLCHY0002",role:"Trainer - Java",dept:"IT Training",location:"Chennai",ctc:12e4,dateOfJoining:"2025-10-07",pan:"ETXPA6836C",bankAccountNo:"123456789012"},{id:4,name:"Shahina Banu",code:"PREFCOLCHY0016",role:"Software Developer",dept:"Information Technology",location:"Chennai",ctc:24e4,dateOfJoining:"2026-01-16",pan:"SHAHI1234R",bankAccountNo:"556677889900"}],y=["January","February","March","April","May","June","July","August","September","October","November","December"];function je(){const m=te(),T=new Date().getFullYear(),[g,H]=r.useState(new Date().getMonth()),[u,Y]=r.useState(T),[j,_]=r.useState("all"),[f,G]=r.useState("all"),[k,N]=r.useState([]),[W,w]=r.useState(!1),[i,$]=r.useState(null),[V,D]=r.useState(!1);r.useEffect(()=>{(async()=>{try{const o=await pe(),n=Array.isArray(o)&&o.length?o:J;N(n.map((a,h)=>{const s=a.ctc??a.annualCtc??(typeof a.monthlyCtc=="number"?a.monthlyCtc*12:0),P=a.code||a.employeeCode||`EMP-${String(h+1).padStart(4,"0")}`;return{employeeId:a.id??P,name:a.name||"Employee",code:P,role:a.role||"Employee",dept:a.department||a.dept||"General",location:a.location||"Chennai",basic:s?Math.round(s*.4/12):0,hra:s?Math.round(s*.2/12):0,allowances:s?Math.round(s*.2/12):0,deductions:s?Math.round(s*.1/12):0,dateOfJoining:a.dateOfJoining||a.joiningDate||"",pan:a.pan||a.panNumber||"",bankAccountNo:a.bankAccountNo||a.bankAccount||""}}))}catch(o){console.error("Failed to load employees for payroll:",o),N(J.map(n=>({employeeId:n.id,name:n.name,code:n.code,role:n.role,dept:n.dept,location:n.location,basic:Math.round(n.ctc*.4/12),hra:Math.round(n.ctc*.2/12),allowances:Math.round(n.ctc*.2/12),deductions:Math.round(n.ctc*.1/12),dateOfJoining:n.dateOfJoining||"",pan:n.pan||"",bankAccountNo:n.bankAccountNo||""})))}})()},[]);const v=r.useMemo(()=>k.filter(t=>(j==="all"||t.dept===j)&&(f==="all"||t.location===f)),[k,j,f]),C=(t,o,n)=>{N(a=>a.map((h,s)=>s===t?{...h,[o]:Number(n)||0}:h))},z=t=>{const o=`${y[g]} ${u}`,n=(t.basic||0)+(t.hra||0)+(t.allowances||0)-(t.deductions||0),h=((t.basic||0)+(t.hra||0)+(t.allowances||0))*12,s=30,P=s,U=0,X=t.joiningDate||t.dateOfJoining||"",q=t.pan||t.panNumber||"",Z=t.bankAccountNo||t.bankAccount||"",ee=`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>PREFCOL Payslip - ${t.name} - ${o}</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        font-size: 12px;
        color: #222;
        margin: 0;
        padding: 24px 32px;
      }
      .header-brand {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        border-bottom: 2px solid #0f7f3b;
        padding-bottom: 2px;
      }
      .brand-logo img {
        height: 88px;
      }
      .brand-sub {
        margin-top: 6px;
        font-size: 12px;
        color: #555;
      }
      .contact {
        text-align: right;
        font-size: 11px;
        color: #555;
      }
      .section-title {
        text-align: center;
        margin: 16px 0 8px;
        font-size: 18px;
        font-weight: 600;
        color: #0f7f3b;
      }
      .section-subtitle {
        text-align: center;
        margin-bottom: 16px;
        font-size: 12px;
      }
      .summary-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 4px 48px;
        margin-bottom: 16px;
      }
      .summary-label {
        font-weight: 600;
        min-width: 120px;
        display: inline-block;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 8px;
      }
      th, td {
        border: 1px solid #ccc;
        padding: 6px 8px;
      }
      th {
        background-color: #f3f3f3;
        text-align: left;
        font-weight: 600;
      }
      tfoot td {
        font-weight: 600;
      }
      .net-row td {
        border-top: 2px solid #0f7f3b;
      }
      .note {
        margin-top: 24px;
        font-size: 11px;
        color: #555;
      }
    </style>
  </head>
  <body>
    <div class="header-brand">
      <div>
        <div class="brand-logo">
          <img src="${ge}" alt="PREFCOL Edutech Solutions (OPC) Pvt Ltd" />
        </div>
        <div class="brand-sub">
          Olympia Technology Park Address: Level 5, Fortius Tower, Olympia Tech Park, Plot No.1 SIDCO
          Industrial Estate, Guindy, Chennai, Tamil Nadu, 600032, India
        </div>
      </div>
      <div class="contact">
        info@prefcol.com<br/>
        9445918818<br/>
        www.prefcol.com
      </div>
    </div>

    <div class="section-title">Employee Payslip</div>
    <div class="section-subtitle">Payslip for the month of ${o}</div>

    <h4>Pay Summary</h4>
    <div class="summary-grid">
      <div><span class="summary-label">Name</span> ${t.name}</div>
      <div><span class="summary-label">EMP Code</span> ${t.code||t.employeeId}</div>
      <div><span class="summary-label">Designation</span> ${t.role}</div>
      <div><span class="summary-label">Department</span> ${t.dept}</div>
      <div><span class="summary-label">Date of Joining</span> ${X||"-"}</div>
      <div><span class="summary-label">PAN</span> ${q||"-"}</div>
      <div><span class="summary-label">Bank Account No</span> ${Z||"-"}</div>
      <div><span class="summary-label">Work Location</span> ${t.location}</div>
      <div><span class="summary-label">Pay Period</span> ${o}</div>
      <div><span class="summary-label">CTC</span> ${h.toFixed(2)}</div>
    </div>

    <div style="margin: 8px 0 4px; font-size: 11px;">
      Month Days: ${s} &nbsp;&nbsp;&nbsp;
      Paid Days: ${P} &nbsp;&nbsp;&nbsp;
      LOP Days: ${U} &nbsp;&nbsp;&nbsp;
      CTC: ${h.toFixed(2)}
    </div>

    <table>
      <thead>
        <tr>
          <th>Earnings</th>
          <th style="text-align:right;">Amount (₹)</th>
          <th>Deductions</th>
          <th style="text-align:right;">Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Basic</td>
          <td style="text-align:right;">${t.basic||0}</td>
          <td>PF Amount</td>
          <td style="text-align:right;">0.00</td>
        </tr>
        <tr>
          <td>HRA</td>
          <td style="text-align:right;">${t.hra||0}</td>
          <td>ESIC</td>
          <td style="text-align:right;">0.00</td>
        </tr>
        <tr>
          <td>Allowances</td>
          <td style="text-align:right;">${t.allowances||0}</td>
          <td>TDS</td>
          <td style="text-align:right;">0.00</td>
        </tr>
        <tr>
          <td>Other</td>
          <td style="text-align:right;">0.00</td>
          <td>Other Deductions</td>
          <td style="text-align:right;">${t.deductions||0}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td style="text-align:right;">${n}</td>
          <td>Total</td>
          <td style="text-align:right;">${t.deductions||0}</td>
        </tr>
        <tr class="net-row">
          <td colspan="3">Net Pay</td>
          <td style="text-align:right;">${n}</td>
        </tr>
      </tfoot>
    </table>

    <div class="note">
      Note: This is a computer generated payslip and does not require a physical signature.
    </div>

    <script>
      window.onload = function() {
        window.print();
      };
    <\/script>
  </body>
</html>
    `,S=window.open("","_blank");S?(S.document.open(),S.document.write(ee),S.document.close()):m({status:"error",title:"Popup blocked",description:"Allow popups for this site to print/download the payslip."})},K=async t=>{if(!t||!t.code){m({status:"warning",title:"Missing employee code",description:"Cannot send payslip email without an employee code."});return}D(!0);try{await me({employeeCode:t.code,month:y[g],year:u}),m({status:"success",title:"Payslip email sent",description:`Payslip emailed to ${t.name}'s registered address.`})}catch(o){m({status:"error",title:"Failed to send email",description:o.message||"Please check the backend email service."})}finally{D(!1)}},Q=()=>{w(!0),setTimeout(()=>{w(!1),m({status:"success",title:"Payslips generated",description:`Generated ${v.length} payslips for ${y[g]} ${u}.`})},1e3)};return e.jsxs(O,{children:[e.jsx(E,{size:"lg",mb:2,color:"teal.300",children:"Generate Monthly Payslips"}),e.jsx(l,{color:"gray.300",mb:6,children:"Choose the payroll period and optionally filter by department/location. You can fine‑tune salary components before generating payslips."}),e.jsxs(F,{mb:6,bg:"rgba(15,23,42,0.75)",borderColor:"whiteAlpha.200",borderWidth:"1px",color:"gray.100",children:[e.jsx(L,{children:e.jsx(E,{size:"md",color:"teal.200",children:"Payroll Period"})}),e.jsx(R,{children:e.jsxs(x,{spacing:4,flexWrap:"wrap",children:[e.jsxs(A,{align:"start",spacing:1,children:[e.jsx(l,{fontSize:"sm",color:"gray.100",children:"Month"}),e.jsx(M,{value:g,onChange:t=>H(Number(t.target.value)),bg:"gray.900",borderColor:"whiteAlpha.300",children:y.map((t,o)=>e.jsx("option",{value:o,children:t},t))})]}),e.jsxs(A,{align:"start",spacing:1,children:[e.jsx(l,{fontSize:"sm",color:"gray.100",children:"Year"}),e.jsx(b,{type:"number",value:u,onChange:t=>Y(Number(t.target.value)||T),bg:"gray.900",borderColor:"whiteAlpha.300",width:"100px"})]}),e.jsxs(A,{align:"start",spacing:1,children:[e.jsx(l,{fontSize:"sm",color:"gray.100",children:"Department"}),e.jsxs(M,{value:j,onChange:t=>_(t.target.value),bg:"gray.900",borderColor:"whiteAlpha.300",children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"Academics",children:"Academics"}),e.jsx("option",{value:"IT Training",children:"IT Training"}),e.jsx("option",{value:"Sales",children:"Sales"})]})]}),e.jsxs(A,{align:"start",spacing:1,children:[e.jsx(l,{fontSize:"sm",color:"gray.100",children:"Location"}),e.jsxs(M,{value:f,onChange:t=>G(t.target.value),bg:"gray.900",borderColor:"whiteAlpha.300",children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"Chennai",children:"Chennai"})]})]})]})})]}),e.jsxs(F,{bg:"rgba(15,23,42,0.9)",borderColor:"whiteAlpha.200",borderWidth:"1px",color:"gray.100",children:[e.jsx(L,{children:e.jsxs(x,{justify:"space-between",children:[e.jsx(E,{size:"md",color:"teal.200",children:"Employee Salary Breakdown"}),e.jsxs(B,{colorScheme:"teal",variant:"subtle",children:[v.length," employees"]})]})}),e.jsxs(R,{children:[v.length===0?e.jsx(l,{color:"gray.200",children:"No employees match the current filters."}):e.jsx(O,{overflowX:"auto",children:e.jsxs(ae,{size:"sm",variant:"simple",color:"gray.100",children:[e.jsx(ne,{children:e.jsxs(I,{children:[e.jsx(d,{color:"teal.100",children:"Employee"}),e.jsx(d,{color:"teal.100",children:"Code"}),e.jsx(d,{color:"teal.100",children:"Role"}),e.jsx(d,{isNumeric:!0,color:"teal.100",children:"Basic"}),e.jsx(d,{isNumeric:!0,color:"teal.100",children:"HRA"}),e.jsx(d,{isNumeric:!0,color:"teal.100",children:"Allowances"}),e.jsx(d,{isNumeric:!0,color:"teal.100",children:"Deductions"}),e.jsx(d,{isNumeric:!0,color:"teal.100",children:"Net / Month"}),e.jsx(d,{color:"teal.100",children:"Payslip"})]})}),e.jsx(oe,{children:v.map((t,o)=>{const n=(t.basic||0)+(t.hra||0)+(t.allowances||0)-(t.deductions||0);return e.jsxs(I,{children:[e.jsx(c,{children:t.name}),e.jsx(c,{children:t.code}),e.jsx(c,{children:t.role}),e.jsx(c,{isNumeric:!0,children:e.jsx(b,{type:"number",value:t.basic,onChange:a=>C(o,"basic",a.target.value),size:"sm",bg:"gray.900",color:"teal.100",borderColor:"whiteAlpha.300",_hover:{borderColor:"teal.400"},_focus:{borderColor:"teal.300",boxShadow:"0 0 0 1px rgba(56, 178, 172, 0.6)"}})}),e.jsx(c,{isNumeric:!0,children:e.jsx(b,{type:"number",value:t.hra,onChange:a=>C(o,"hra",a.target.value),size:"sm",bg:"gray.900",color:"teal.100",borderColor:"whiteAlpha.300",_hover:{borderColor:"teal.400"},_focus:{borderColor:"teal.300",boxShadow:"0 0 0 1px rgba(56, 178, 172, 0.6)"}})}),e.jsx(c,{isNumeric:!0,children:e.jsx(b,{type:"number",value:t.allowances,onChange:a=>C(o,"allowances",a.target.value),size:"sm",bg:"gray.900",color:"teal.100",borderColor:"whiteAlpha.300",_hover:{borderColor:"teal.400"},_focus:{borderColor:"teal.300",boxShadow:"0 0 0 1px rgba(56, 178, 172, 0.6)"}})}),e.jsx(c,{isNumeric:!0,children:e.jsx(b,{type:"number",value:t.deductions,onChange:a=>C(o,"deductions",a.target.value),size:"sm",bg:"gray.900",color:"teal.100",borderColor:"whiteAlpha.300",_hover:{borderColor:"teal.400"},_focus:{borderColor:"teal.300",boxShadow:"0 0 0 1px rgba(56, 178, 172, 0.6)"}})}),e.jsx(c,{isNumeric:!0,children:e.jsxs(B,{colorScheme:"green",children:["₹",n.toLocaleString("en-IN")]})}),e.jsx(c,{children:e.jsxs(x,{spacing:2,children:[e.jsx(p,{size:"xs",variant:"outline",colorScheme:"teal",onClick:()=>z(t),children:"PDF"}),e.jsx(p,{size:"xs",variant:"outline",colorScheme:"purple",onClick:()=>$(t),children:"Preview"})]})})]},t.employeeId)})})]})}),e.jsx(x,{justify:"flex-end",mt:6,children:e.jsx(p,{colorScheme:"teal",size:"md",onClick:Q,isLoading:W,loadingText:"Generating",children:"Generate Payslips"})})]})]}),e.jsxs(se,{isOpen:!!i,onClose:()=>$(null),size:"lg",isCentered:!0,children:[e.jsx(le,{}),e.jsxs(ie,{bg:"gray.900",color:"gray.100",children:[e.jsx(re,{children:"Preview Payslip"}),e.jsx(de,{}),i&&e.jsxs(ce,{children:[e.jsxs(l,{mb:2,children:[e.jsx("strong",{children:"Employee:"})," ",i.name," (",i.code,")"]}),e.jsxs(l,{mb:1,children:[e.jsx("strong",{children:"Role:"})," ",i.role]}),e.jsxs(l,{mb:1,children:[e.jsx("strong",{children:"Department:"})," ",i.dept]}),e.jsxs(l,{mb:1,children:[e.jsx("strong",{children:"Location:"})," ",i.location]}),e.jsxs(l,{mb:1,children:[e.jsx("strong",{children:"Pay Period:"})," ",y[g]," ",u]}),e.jsx(l,{mt:3,fontSize:"sm",color:"gray.300",children:"Choose an action for this employee’s payslip."})]}),e.jsx(he,{children:e.jsxs(x,{spacing:3,children:[e.jsx(p,{colorScheme:"teal",size:"sm",onClick:()=>i&&z(i),children:"Download PDF"}),e.jsx(p,{colorScheme:"purple",size:"sm",isLoading:V,onClick:()=>i&&K(i),children:"Send Email"}),e.jsx(p,{variant:"ghost",size:"sm",onClick:()=>$(null),children:"Close"})]})})]})]})]})}export{je as default};
