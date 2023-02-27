const express=require("express");
const app=express();
const port=9000;

// connect to database

const mongoose=require("mongoose");

const dbURl= "mongodb://127.0.0.1:27017/student"

mongoose.connect(dbURl).then(result=>{
    console.log("DB Connected..~~");
}).catch(err=>{
    console.log(err);
})

// created schema

const userSchema=new mongoose.Schema({
    Sname:{
        type:String
    },
    Address:{
        type:String
    },
    PhoneNr:{
        type:Number
    },
    Gender:{
        type:String
    },
    Fees:{
        type:Number
    },
    JoinDate:{
        type:Date,
        default:Date.now()
    }
})

const User=new mongoose.model("studentdetails",userSchema);

app.listen(port,()=>{
    console.log("Port Running : "+port);
})
app.get("/user",(req,resp)=>{
    resp.send("Get is Calling");
})

app.get("/userd",(req,resp)=>{

     User.find().then(result=>{
        resp.send(result);
     }).catch(err=>{
        resp.send(err);
     })
})