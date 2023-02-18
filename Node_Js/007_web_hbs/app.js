const express=require("express");
const port=9000;
const path=require("path");
const app=express();
const hbs=require("hbs");
const partialpath=path.join(__dirname,"./templates/partial");
const viewpath=path.join(__dirname,"./templates/view");

app.set("view engine","hbs");
app.set("views",viewpath);
hbs.registerPartials(partialpath);
app.listen(port,()=>{
    console.log("port number :" +port);
})

app.get("/home",(req,resp)=>{
    resp.render("home");
})
app.get("/about",(req,resp)=>{
    resp.render("about")
})