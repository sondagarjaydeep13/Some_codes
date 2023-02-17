const express=require("express");
const app=express();
const port=9600;

const path=require("path");

app.listen(port,()=>{
    console.log(`port number running ${port} ..!!`);
})

app.get("/registration",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"Registration_form.html"));
})
app.get("/submit",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"reg_submit.html"));
})
app.get("/signin",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"signin_form.html"))
})
app.get("/login",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"login_success.html"));

})
app.get("/logout",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"signin_form.html"));
})
