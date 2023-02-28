const express=require("express");
const path = require("path");
const app=express();
const port=9000;



app.listen(port,()=>{
    console.log("Port Number running :"+" "+port);
})

app.get("/hostar",(req,resp)=>{
resp.sendFile(path.join(__dirname,"hostar.html"));
})