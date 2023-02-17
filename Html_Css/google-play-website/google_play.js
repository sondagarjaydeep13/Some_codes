const express=require("express");
const port=9500;
const app=express();

const path=require("path");

app.listen(port,()=>{
    console.log("port number "+port+ "running..!!");
    
})
app.get("/googleplay",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"google_play.html"));
})
app.get("/games",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"games.html"));
})