// Creating the port

const express=require("express");
const app=express();
const port=9000;

app.listen(port,()=>{
    console.log("Port Number :"+port+"Running");
})
app.get("/first",(req,resp)=>{
    resp.send("Welcome To Webpage...~~~~");
})
