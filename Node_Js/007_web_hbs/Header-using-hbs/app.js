const express=require("express");
const app=express();
const port=9000;

const path=require("path");

// apply the hbs

const hbs=require("hbs");

const header=path.join(__dirname,"./templates/Heading");
const viewpath=path.join(__dirname,"./view");


app.set("view engine","hbs")
app.set("views",viewpath)

hbs.registerPartials(header);



app.listen(port,()=>{
    console.log("Running Port Number :"+port);
})


// app.get("/header",(req,resp)=>{
//     resp.sendFile(path.join(__dirname,"Heading/header.html"));
// })

// home page



app.get("/home",(req,resp)=>{
    resp.render("home");
})

app.get("/about",(req,resp)=>{
    resp.render("about");
})

app.get("/contact",(req,resp)=>{
    resp.render("contact");
})

app.get("/movies",(req,resp)=>{
    resp.render("movies");
})

app.get("/games",(req,resp)=>{
    resp.render("games");
})