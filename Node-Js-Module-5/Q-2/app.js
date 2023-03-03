// First Create the Port
const express = require("express");
const app = express();
const port = 9000;
const mongoose = require("mongoose");

// for data in json formatt
app.use(express.json());
app.listen(port, () => {
  console.log("Port Number " + " " + port + " " + "Running");
});

// Create Database -Use mongoose And Store into  Atlas

const dburl =
  "mongodb+srv://sondagarjaydeep13:Jaydeep123@cluster0.jvvwc8q.mongodb.net/Flipkart?retryWrites=true&w=majority";

mongoose
  .connect(dburl)
  .then((result) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userrouter=require('./router/Userrouter')
app.use("/", userrouter);
