const mongodb=require("mongodb");

const MongoClient=mongodb.MongoClient;

const databaseURL= "mongodb://127.0.0.1:27017";

const mydatabase="school";

MongoClient.connect(databaseURL).then(result=>{
         const mydb=result.db(mydatabase);

         mydb.collection("school").insertMany([
            {Name:"Chagan",Rollnumber:100},
            {Name:"Kunal",Rollnumber:15}
         ]).then(data=>{
            console.log("Data added ");
         }).catch(err=>{
            console.log(err);
         })
})