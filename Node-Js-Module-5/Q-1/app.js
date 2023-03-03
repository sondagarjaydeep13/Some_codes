// Q-1) Create Rest Api for Task Managment-(get,post,patch,put,delete)

// First Creating Port Using Express
const express=require("express");
const app=express();
const port=9000;
// For Data in Json Formate
app.use(express.json());

app.listen(port,()=>{
    console.log("Port number"+" "+port+" "+"running");
})

// Creating database
const mongoose=require("mongoose");
// MongoDB Atlas link
const dburl="mongodb+srv://sondagarjaydeep13:Jaydeep123@cluster0.jvvwc8q.mongodb.net/Colors?retryWrites=true&w=majority";

mongoose.connect(dburl).then(result=>{
    console.log("Database Connected");
}).catch(err=>{
    console.log(err);
})

// Now Adding Data Using Router (data Maintain Using Postman)

// creating Structure(Schema)

const TaskSchema=new mongoose.Schema({
    Name:String,
    MobileNr:Number,
    Address:String,
    Gender:String
})
const Task=new mongoose.model("Task",TaskSchema);

// Now Add Some Data Using-post

app.post("/task",(req,resp)=>{
      const task=new Task(req.body);
      task.save().then(result=>{
        resp.send(result);
      }).catch(err=>{
        resp.send(err);
      })
})

// Now Find All data Using -get

app.get("/task",(req,resp)=>{
    Task.find().then(result=>{
        resp.send(result);
    }).catch(err=>{
        resp.send(err);
    })
})

//Now Find By Id Using -get

app.get("/task/:id",(req,resp)=>{
    const _id=req.params.id;
    Task.findById(_id).then(result=>{
        resp.send(result);
    }).catch(err=>{
        resp.send(err);
    })
})

// Now Update Data Using -put

app.put("/task/:id",(req,resp)=>{
    const _id=req.params.id;
    Task.findByIdAndUpdate(_id,req.body).then(result=>{
        resp.send(result);
    }).catch(err=>{
        resp.send(err);
    })
})

// Now Delete One Data

app.delete("/task/:id",(req,resp)=>{
    const _id=req.params.id;
    Task.findByIdAndDelete(_id).then(result=>{
        resp.send(result);
    }).catch(err=>{
        resp.send(err);
    })
})