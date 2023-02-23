const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient

const DB_URL= "mongodb://127.0.0.1:27017";
const database="student"

MongoClient.connect(DB_URL).then(result=>{
    // console.log("Database Connected..~~~");
  const mydb= result.db(database);
    // mydb.createCollection("Employe").then(data=>{
    //     console.log("New Collection Created..!!");
    // })
    mydb.collection("Employe").insertOne({
        name:"RutvikBhai",
        email:"rutvik@gmail.com"
    }).then(result=>{
        console.log("Data inserted..!!");
    })
}).catch(err=>{
    console.log(err);
})
