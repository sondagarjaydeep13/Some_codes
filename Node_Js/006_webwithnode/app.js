
const express=require("express");
const port=9000;
const app=express();
const path=require("path");

app.get("/",(req,resp)=>{
    resp.send("Main req calling...!!!");
})
app.get("/home",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"home.html"));
})
// app.get("/first",(req,resp)=>{
//     resp.sendFile(path.join(__dirname,"first.html"));
// })
app.get("/about",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"about.html"));
})
app.get("/webpage",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"webpage.html"));
})
app.get("/contact",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"contacts.html"));
})
// ............any other Input...............

app.get("*",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"error.html"));
})




app.listen(port,()=>{
    console.log("Port is start :"+port);
})