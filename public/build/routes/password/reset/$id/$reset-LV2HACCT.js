import{c as R}from"/build/_shared/chunk-N2SCW52I.js";import{a as h,c as C,h as x}from"/build/_shared/chunk-GF6VVQVG.js";import{E as N,a,e as T,g as E,k as o,n as d,q as m,t as A}from"/build/_shared/chunk-OMGNAYS3.js";import"/build/_shared/chunk-FMYFO4L2.js";import"/build/_shared/chunk-HH4FNOKV.js";import"/build/_shared/chunk-ERJPHUOK.js";import{a as F,b as P}from"/build/_shared/chunk-O4ZNHJCK.js";import{d as l}from"/build/_shared/chunk-W6WK5VNR.js";var t=l(F());var s=l(P()),{Title:S,Text:b}=A;var k=()=>({title:"Reset Password"});function I(){var i,u,w,g,f,c,y,v;let e=x(),z=h(),[p,O]=(0,t.useState)({password:"",cpassword:""}),n=r=>{O(B=>({...B,[r.target.name]:r.target.value}))};return(0,t.useEffect)(()=>{var r;(r=e==null?void 0:e.mydata)!=null&&r.message&&z("/login")},[(i=e==null?void 0:e.mydata)==null?void 0:i.message]),(0,s.jsx)(m,{justify:"center",align:"middle",style:{height:"100vh"},children:(0,s.jsxs)(o,{sm:16,xl:10,children:[(u=e==null?void 0:e.mydata)!=null&&u.message?(0,s.jsx)(a,{message:(w=e==null?void 0:e.mydata)==null?void 0:w.message,type:"success"}):null,(g=e==null?void 0:e.error)!=null&&g.message?(0,s.jsx)(a,{message:"Fail to reset password!",type:"error"}):null,(0,s.jsx)("div",{className:"main-user-component",children:(0,s.jsxs)("div",{className:"main-component",children:[(0,s.jsxs)("div",{style:{textAlign:"center"},children:[(0,s.jsx)(T,{style:{backgroundColor:"#9c27b0",verticalAlign:"middle"},size:"large",children:(0,s.jsx)(N,{size:"large"})}),(0,s.jsx)(S,{level:2,style:{marginTop:"10px"},children:"Reset Your Password"})]}),(0,s.jsx)(C,{method:"POST",children:(0,s.jsxs)(m,{gutter:[16,16],className:"row",children:[(0,s.jsxs)(o,{sm:24,xl:24,children:[(0,s.jsx)(d,{name:"password",placeholder:"Enter New Password",required:!0,size:"large",autoComplete:"off",type:"password",value:p.password,onChange:n}),(f=e==null?void 0:e.formErrors)!=null&&f.password?(0,s.jsx)(b,{type:"danger",children:(c=e==null?void 0:e.formErrors)==null?void 0:c.password}):null]}),(0,s.jsxs)(o,{sm:24,xl:24,children:[(0,s.jsx)(d,{name:"cpassword",placeholder:"Confirm New Password",required:!0,autoComplete:"off",type:"password",size:"large",value:p.cpassword,onChange:n}),(y=e==null?void 0:e.formErrors)!=null&&y.cpassword?(0,s.jsx)(b,{type:"danger",children:(v=e==null?void 0:e.formErrors)==null?void 0:v.cpassword}):null]}),(0,s.jsx)(o,{sm:24,xl:24,children:(0,s.jsx)(E,{type:"primary",htmlType:"submit",style:R,size:"large",children:"Update Password"})})]})})]})})]})})}var U=I;export{U as default,k as meta};