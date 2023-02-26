const express=require("express");
const app=express();
const port=9200;
const weather=require("./untill/weather");
const geocode=require("./untill/geocode");

app.listen(port,()=>{
    console.log("Port Number "+" "+port+" "+"Running...!!");
})
app.get("/",(req,resp)=>{
    resp.send("Welcome To Webpage");
})

app.get("/weather",(req,resp)=>{
    const location=req.query.location;

    geocode.getGeocode(location,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        lat=data.lat;
        lng=data.lng;

        weather.getWeather(lat,lng,(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            resp.send(data);
        })

    })

})