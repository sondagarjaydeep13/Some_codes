const express=require("express");
const app=express();
const port=9000;
const hbs=require("hbs");
const path=require("path");
const pathview=path.join(__dirname,"../view");
const publicpath=path.join(__dirname,"../public");

app.set("view engine","hbs");
app.set("views",pathview);

app.listen(port,()=>{
    console.log("Port Number Running "+" "+port);
})

app.get("/",(req,resp)=>{
    resp.send("Welcome Web-Page");
})
app.get("/clock",(req,resp)=>{
    resp.render("clock")
})