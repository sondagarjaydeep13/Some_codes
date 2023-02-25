// first connect database using mongoose...!!

const mongoose=require("mongoose");

mongoose.set('strictQuery', true);

const databaseURL=  "mongodb://127.0.0.1:27017/student";

mongoose.connect(databaseURL).then(result=>{
    console.log("Database Connected..!!");
}).catch(err=>{
    console.log(err);
})

// create the collection and stucture

const studentSchema=new mongoose.Schema({
           Sname:{
            type:String,
            require:true
           },
           Address:{
            type:String
           },
           PhoneNr:{
            type:Number,
            require:true
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

const StudentDetail=new mongoose.model("StudentDetail",studentSchema);

// now add the data 

const addDetail=()=>{

          const student1=new StudentDetail({
               Sname:"Kamal",Address:"120 Surat Gujarat",PhoneNr:"8945769235",Gender:"Male",
               Fees:5000
          })

          student1.save().then(result=>{
            console.log(result);
          }).catch(err=>{
            console.log(err);
          })
}

// addDetail();

// find the data

const viewDetail=()=>{

            //    StudentDetail.find().then(result=>{
            //     console.log(result);
            //    }).catch(err=>{
            //     console.log(err);
            //    })

            // Find as name

            // StudentDetail.find({Sname:"Chaganbhai"}).then(result=>{
            //     console.log(result);
            // }).catch(err=>{
            //     console.log(err);
            // })

            //$and operator-> Both Condition Are True

            StudentDetail.find({$and:[{Sname:{$eq:"Chaganbhai"}},{Gender:{$eq:"Male"}}]})
            .then(result=>{
                console.log(result)
            }).catch(err=>{
                console.log(err);
            })



     
}
viewDetail();

// insert Many User Detail

const inputMany=()=>{
     
    const student1={
              Sname:"Sureshkumar",Address:"85,Jamnagar,Gujarat",PhoneNr:6865412375,
              Gender:"Male",Fees:4000
                     }
    const student2={
              Sname:"Maganbhai",Address:"251,Rajkot,Gujarat",PhoneNr:6575412375,
              Gender:"Male",Fees:6500
                      }
    const student3={
        Sname:"Chaganbhai",Address:"32,Amreli,Gujarat",PhoneNr:6865412375,
        Gender:"Male",Fees:11000
                      }
    const student4={
            Sname:"Rutvikbhai",Address:"113,Surat,Gujarat",PhoneNr:7865412375,
            Gender:"Male",Fees:6000
                        }
              
               StudentDetail.insertMany([student1,student2,student3,student4]).then(result=>
                {
                    console.log(result);
                }).catch(err=>{
                    console.log(err);
                })

}

// inputMany();