const express=require("express");
const app=express();
const port=9000;

// listen the port
app.listen(port,()=>{
    console.log("Port nummber running :"+port);
})
