const express=require("express");
const app=express();
app.use(express.json());
const port=9000;



// connect to database

const mongoose=require("mongoose");

mongoose.set('strictQuery', true);

const dbURl= "mongodb+srv://sondagarjaydeep13:Jaydeep123@cluster0.jvvwc8q.mongodb.net/student?retryWrites=true&w=majority"

mongoose.connect(dbURl).then(result=>{
    console.log("DB Connected..~~");
}).catch(err=>{
    console.log(err);
})

// create the schema

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

// Create port

app.listen(port,()=>{
    console.log("Port Running : "+port);
})
app.get("/user",(req,resp)=>{
    resp.send("Get is Calling");
})

// All Data Find -view method

app.get("/userd",(req,resp)=>{

     User.find().then(result=>{
        resp.send(result);
     }).catch(err=>{
        resp.send(err);
     })
})

// Data  find by id -view method

app.get("/user/:id",(req,resp)=>{
    const _id=req.params.id;

    User.findById(_id).then(result=>{
        console.log(result);
        resp.send(result);
    }).catch(err=>{
        console.log(err);
        resp.send(err);
    })
})


// Add the new data into database --post 

app.post("/user",(req,resp)=>{
       
      const user=new User(req.body)
      user.save().then(result=>{
        resp.send(result);
      }).catch(err=>{
        resp.send(err);
      })
    
})

app.put("/user/:id",(req,resp)=>{
    const _id=req.params.id;

    User.findByIdAndUpdate(_id,req.body).then(result=>{
        resp.send(result);
    }).catch(err=>{
        resp.send(err);
    })
})

app.delete("/user/:id",(req,resp)=>{
    const _id=req.params.id

    User.findByIdAndDelete(_id).then(result=>{
        resp.send(result);
    }).catch(err=>{
        resp.send(err);
    })

})
