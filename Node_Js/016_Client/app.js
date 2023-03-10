const express = require("express");
const app = express();
const port = 9000;
const mongoose = require("mongoose");
const dburl =
  "mongodb+srv://sondagarjaydeep13:Jaydeep123@cluster0.jvvwc8q.mongodb.net/Client?retryWrites=true&w=majority";
//..........Require user router.................
const userrouter = require("./router/userrouter");
const productrouter = require("./router/productrouter");
//...........Data add into Json.................
app.use(express.json());
//.............Connect port.....................
app.listen(port, () => {
  console.log("port number " + " " + port + " " + "running");
});
//.............Connect to the database...........
mongoose
  .connect(dburl)
  .then((result) => {
    console.log("Client database connected..!!!");
  })
  .catch((error) => {
    console.log(error);
  });
//..............Use user router..............
app.use("/", userrouter);
app.use("/", productrouter);
