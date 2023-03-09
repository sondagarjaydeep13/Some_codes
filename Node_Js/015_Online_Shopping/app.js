const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 9000;
app.use(express.json());
const database = "Online_Shopping";
const dburl =
  "mongodb+srv://sondagarjaydeep13:Jaydeep123@cluster0.jvvwc8q.mongodb.net/Online_Shopping?retryWrites=true&w=majority";

app.listen(port, () => {
  console.log("Port" + " " + port + " " + "Running");
});

mongoose
  .connect(dburl)
  .then((result) => {
    console.log(database + " " + " Database Connected..!!");
  })
  .catch((err) => {
    console.log(err);
  });
const userrouter = require("./router/userrouter");
const productrouter = require("./router/productrouter");
app.use("/", userrouter);
app.use("/", productrouter);
