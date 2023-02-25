const mongodb=require("mongodb");

const MongoClient=mongodb.MongoClient;

const databaseURL= "mongodb://127.0.0.1:27017";

const mydatabase="school";

MongoClient.connect(databaseURL).then(result=>{
         const mydb=result.db(mydatabase);

         // mydb.collection("school").insertMany([
         //    {Name:"Chagan",Rollnumber:100},
         //    {Name:"Kunal",Rollnumber:15}
         // ]).then(data=>{
         //    console.log("Data added ");
         // }).catch(err=>{
         //    console.log(err);
         // })

         // mydb.collection("school").updateOne({Name:"Magan"},{$set:{Address:"Varacha"}},{upsert:true}).then(result=>{
         //    console.log(result);
         
         // })

         // equle opr..
         // mydb.collection("school").find({Rollnumber:{$eq:10}}).toArray().then(result=>{
         //    console.log(result);
         // }).catch(err=>{
         //    console.log(err);
         // })

         
         // And operator....
               // mydb.collection("school").find({$and:[{Name:{$eq:'Kunal'}},{Rollnumber:{$eq:15}}]}).toArray().then(result=>{
               //    console.log(result);
               // }).catch(err=>{
               //    console.log(err)
               // })

      // or operator...

         // mydb.collection("school").find({$or:[{Name:{$eq:"Rutvik"}},{Rollnumber:{$eq:15}}]}).toArray().then(result=>{
         //    console.log(result);
         // }).catch(err=>{
         //    console.log(err);
         // })

         


         }).catch(err=>{
            console.log(err);
})