const express=require("express");
const { join } = require("path");
const app=express();
const port=9600;

const path=require("path");

app.listen(port,()=>{
    console.log(`port number running ${port} ..!!`);
})
app.get("/header",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"Header.html"));
})
app.get("/registration",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"registration.html"));
})
app.get("/submit",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"reg_submit.html"));
})
app.get("/signin",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"signin_form.html"))
})
app.get("/login",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"signin_form.html"));

})
app.get("/logout",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"signin_form.html"));
})

// for forgot passsword

app.get("/forgot",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"forgot_password.html"))
})
