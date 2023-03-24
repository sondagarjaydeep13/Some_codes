// const array = [1, 2, 310, 4, 56, 1, 78, 96, 12];
// const result = array.filter((i) => {
//   return i >= 10;
// });
// console.log(result);

// const array = ["Kamal", "Rajesh", "Mohan", "Aman", "Rohan"];
// const number = [1, 2, 3, 45, 6, 78, 9];
// // const result = array.indexOf("Aman");

// // const result = array.slice(5);
// // const result2 = array.slice(2);
// // console.log(result2);
// // // console.log(result);

// // const result = array.splice(2, 2);
// const result = array.shift();
// console.log(result);
// console.log(array);

// ---------Primitive data type-------------
// let a = 10;
// a = 20;
// console.log(a);

//.................reference data type...........

// const data = {
//   name: "Kamal",
//   age: 20,
// };
// const person = data;
// person.name = "Mohan";
// console.log(data);

// const MongoDB = require("mongodb");
// const MongoClient = MongoDB.MongoClient;
// dburl = "mongodb://127.0.0.1:27017";
// database = "sampledata";
// MongoClient.connect(dburl).then((result) => {
//   const mydb = result.db(database);

  // mydb.createCollection("Users").then((result) => {
  //   console.log("collection created");
  // });
  // mydb
  //   .collection("Users")
  //   .insertOne({
  //     uname: "Kamal BHai",
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // mydb
  //   .collection("Users")
  //   .insertMany([
  //     { uname: "Magan Bhai", unumber: 110, gender: "Male" },
  //     { uname: "Krunal", unumber: 520, gender: "Male" },
  //   ])
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // mydb
  //   .collection("Users")
  //   .find()
  //   .toArray()
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // mydb
  //   .collection("Users")
  //   .updateOne(
  //     { uname: "Magan Bhai" },
  //     { $set: { gender: "Female" } },
  //     { upsert: true }
  //   )

  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // mydb
  //   .collection("Users")
  //   .find()
  //   .toArray()
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // mydb
  //   .collection("Users")
  //   .deleteOne({ uname: "Krunal" })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // mydb
  //   .collection("Users")
  //   .insertMany([
  //     { uname: "Kamal", gender: "Male", number: 10 },
  //     { uname: "Rajesh", gender: "Male", number: 52 },
  //   ])
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

//   mydb
//     .collection("Users")
//     .find()
//     .toArray()
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//******************* Java Script****************** */

