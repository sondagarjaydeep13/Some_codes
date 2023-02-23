const express=require("express");
const app=express();
const port=9200;


app.listen(port,()=>{
    console.log("Port Number "+" "+port+" "+"Running...!!");
})