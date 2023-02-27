const express=require("express");
const app=express();
const port=9200;
const hbs=require("hbs");
const weather=require("./untill/weather");
const geocode=require("./untill/geocode");
const path=require("path");

const viewpath=path.join(__dirname,"../001_Weather/template");
const publicpath=path.join(__dirname,"../001_Weather/public");

app.set("view engine","hbs");
app.set("views",viewpath);
app.use(express.static(publicpath));


app.listen(port,()=>{
    console.log("Port Number "+" "+port+" "+"Running...!!");
})


app.get("/",(req,resp)=>{
    resp.render("weather");
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