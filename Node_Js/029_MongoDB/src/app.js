const mongoDB = require("mongodb");

const MongoClient = mongoDB.MongoClient;
const dburl = "mongodb://127.0.0.1:27017/";
const Database = "Practice_DB";

MongoClient.connect(dburl)
  .then((result) => {
    var mydb = result.db(Database);
    console.log("Database Connected");

    // mydb
    //   .createCollection("Student")
    //   .then((result) => {
    //     console.log("Collection Created");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    mydb
      .collection("Student")
      .insertOne({
        name: "kamal",
        age: 20,
      })

      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    result.save();
  })
  .catch((error) => {
    console.log(error);
  });
