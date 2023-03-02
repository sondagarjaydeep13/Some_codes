const mongoose=require("mongoose");
const dbURL="mongodb://127.0.0.1:27017/Amzone";
// const database="Country";

mongoose.connect(dbURL).then(result=>{
    // const mydb=client.db(database);
    console.log("Database Connected");
}).catch(err=>{
    console.log(err);
})

const userSchema=new mongoose.Schema({
    Name:{
        type:String,
    },
    Address:{
        type:String
    },
    MobileNr:{
        type:Number
    }
})

const User=new mongoose.model("User",userSchema);

const addUser=()=>{
    const user=new User({
        Name:"Magan bhai",
        Address:"538,Mahuva,Bhavnagar",
        MobileNr:"9632587415"
    })
    user.save().then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}
const moreUser=()=>{
    const user1=new User({Name:"Chagan Bhai",Address:"856,Vesu,Surat",MobileNr:6589321472});
    const user2=new User({Name:"Rajesh Bhai",Address:"586,Rajkot",MobileNr:7561234892});

    User.insertMany([user1,user2]).then(result=>{
        console.log(result);

    }).catch(err=>{
        console.log(err);
    })
}
// View User;

const findUser=()=>{

     User.find().then(result=>{
        console.log(result);
     }).catch(err=>{
        console.log(err);
     })
}

const findbyName=()=>{
    User.find({Name:"Rajesh Bhai"}).then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}

// Delete Rajesh Bhai Name Data 

const deletByname=()=>{

    User.deleteOne({Name:"Rajesh Bhai"}).then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}

// Update One Data 

const updateOne=()=>{
    User.updateOne({Name:"Magan bhai"},{$set:{Address:"63,Varachha,Surat"}}).then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}

// addUser();
// moreUser();
// findUser();
// findbyName()
// deletByname();
updateOne();