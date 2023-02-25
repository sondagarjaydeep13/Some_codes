const mongodb=require("mongodb");

const MongoClient=mongodb.MongoClient;
const db_url= "mongodb://127.0.0.1:27017";

const database="school";

MongoClient.connect(db_url).then(result=>{
    // console.log("Database Connected..!!");
    const myData=result.db(database);

    myData.collection("school").insertOne({
        Rollnumber:2,
        Name:"Rutvik ",
        Gender:"Male"
    }).then(data=>{
        console.log("Data Added");
    })
}).catch(err=>{
    console.log(err);
})