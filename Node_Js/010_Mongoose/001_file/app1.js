const mongoose=require("mongoose");
const dburl=  "mongodb://127.0.0.1:27017/school";

mongoose.set('strictQuery', true);

mongoose.connect(dburl).then(result=>{
    console.log("DB Connected..!!");
}).catch(err=>{
    console.log(err);
})

// for sturcture....
const userSchema=new mongoose.Schema({
    uname:{
        type :String
    },
    email:{
        type:String
    },
    pass:{
        type:String
    },
    age:{
        type:String
    },
    J_date:{
        type:Date,
        default:Date.now()
    }
})

const User=new mongoose.model("User",userSchema)

//now add the  data

const adduser=()=>{
    const user=new User({
        uname:"RajeshKumar",email:"rajesh@gmail.com",pass:"123456",age:23
    });
    user.save().then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}

// call function
// adduser();

// insert many data

const addMany=()=>{

    const user1=new User({uname:"Sanket",email:"sanket@gmail.com",pass:"1548",age:22})
    const user2=new User({uname:"Mohan",email:"Mohan@gmail.com",pass:"568848",age:25})
    const user3=new User({uname:"Vivek",email:"vivek@gmail.com",pass:"15445548",age:28})

    User.insertMany([user1,user2,user3]).then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}

// addMany();

// find methode

const userfind=()=>{
               
    User.find().then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}

// userfind();

const updateone=()=>{
   User.updateOne({uname:"Sanket"},{pass:"sanket@123"}).then(result=>{
    console.log(result);
   }).catch(err=>{
    console.log(err);
   })
}

// updateone();

// Delete one data

const deleteone=()=>{
    User.deleteOne({email:"rajesh@gmail.com"}).then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}

// deleteone();