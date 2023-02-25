const express=require("express");
const app=express();
const port=9010;

const getwether=require("./city");
const geocode=require("./lat_lng");
const path=require("path");
const hbs=require("hbs");


const weatherjava=path.join(__dirname,"./js");
app.use(express.static(weatherjava));


app.listen(port,()=>{
    console.log("Port number"+port+"Running");
})
app.get("/",( req,resp)=>{
    resp.send("Welcome to webpage");
})

app.get("/myweather",(req,resp)=>{
   resp.sendFile(path.join(__dirname,"./weatherhtml/weather.html"));
})
app.get("/weather",(req,resp)=>{
     const location=req.query.location;
     getwether.getWether(location).then(result=>{
        return geocode.getTemp(result.lat,result.lon);
     }).then(data=>
        {
            resp.send(data);
        }).catch(err=>{
            console.log(err);
        })
})