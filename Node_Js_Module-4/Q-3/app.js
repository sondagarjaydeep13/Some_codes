// Q-3) Create the New Database for online Shoping App

const mongodb=require("mongodb");
const database="Shopping";
const MongoClient=mongodb.MongoClient;
const DBurl="mongodb://127.0.0.1:27017/Shopping";

    // MongoClient.connect(DBurl).then(result=>{
    //     console.log("DB Connected");
    //     const mydb=client.db(database);
    // }).catch(err=>{
    //     console.log(err);
    // })

// Q-4) Create Collections
    
    MongoClient.connect(DBurl).then(result=>{
          console.log("Data base connected");
           const mydb=result.db(database);

 // 1)User

    // mydb.createCollection("User").then(result=>{
    //     console.log("Collection created");
    // }).catch(err=>{
    //     console.log(err);
    // })

 // 2)Product Category

    // mydb.createCollection("ProductCategory").then(result=>{
    //     console.log("Product-Category Collection created");
    // }).catch(err=>{
    //     console.log(err);
    // })

 // 3) Product

    // mydb.createCollection("Product").then(result=>{
    //     console.log("Product Collection created");
    // }).catch(err=>{
    //     console.log(err);
    // })

 // 4)Order

    // mydb.createCollection("Order").then(result=>{
    //     console.log("Order Colection Created");
    // }).catch(err=>{
    //     console.log(err);
    // })

// 5)Review

    // mydb.createCollection("Review").then(result=>{
    //     console.log("Review Collection Created");
    // }).catch(err=>{
    //     console.log(err);
    // })

// Q-5) write Command To show All data from Product Collection

  // First Add One Data

    //   mydb.collection("Product").insertOne({
    //     Pnumber:554231,
    //     Pname:"Roy",
    //     Price:5000,
    //     Pweight:"600 gram",

    //   }).then(result=>{
    //     console.log(result);
    //   }).catch(err=>{
    //     console.log(err);
    //   })

// Now Find All the Data
 
    //  mydb.collection("Product").find().toArray().then(result=>{
    //     console.log(result);
    //  }).catch(err=>{
    //     console.log(err);
    //  })

// Now find Only First Data

    // mydb.collection("Product").find().limit(1).toArray().then(result=>{
    //     console.log(result);
    // }).catch(err=>{
    //     console.log(err);
    // })

// Now Find by Name

    // mydb.collection("Product").find({Pname:"Toy"}).toArray().then(result=>{
    //     console.log(result);
    // }).catch(err=>{
    //     console.log(err);
    // })

// Now Sort Data use 1 for assendind and -1 for desending

    //  mydb.collection("Product").find().sort({Pname:1}).toArray().then(result=>{
    //     console.log(result);
    //  }).catch(err=>{
    //     console.log(err);
    //  })


// Q-6) Update product price for particular product. 
    
        //    mydb.collection("Product").updateOne({ Pname:'Toy'},{$set:{ Price:10000}}).then(result=>{
        //     console.log(result);
        //    }).catch(err=>{
        //     console.log(err);
        //    })

// Q-7) Write command to delete particular document and collection.

    //delet particular document

        // mydb.collection("Product").deleteOne({Pname:"Toy"}).then(result=>{
        //     console.log(result);
        // }).catch(err=>{
        //     console.log(err);
        // })
    
        //Now delet Particular Collection

        // mydb.collection("Product").drop().then(result=>{
        //     console.log("Product Collection Deleted");
        // }).catch(err=>{
        //     console.log(err);
        // })
    }).catch(err=>{
        console.log(err);
    })
        

    
    