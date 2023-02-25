const express=require("express");
const webpage=express();
const port=9100;

// for path

const path=require("path");
webpage.get("/web",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"my.html"));
})
webpage.get("/google",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"google.html"));
})

webpage.listen(port,()=>{
    console.log("port running..port number:"+port);
})