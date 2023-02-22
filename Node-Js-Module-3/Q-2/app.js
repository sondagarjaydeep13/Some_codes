const express=require("express");
const app=express();

const path=require("path");

const port=9500;

app.listen(port,()=>{
    console.log("Port Number "+" "+port+" "+"Running");
})
app.get("/Hello",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"Hello.html"));
})