const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const port = process.env.PORT || 3000;
const dburl = process.env.DBURL;
const localtunnel = require("localtunnel");
app.listen(port, () => {
  console.log("Server Running on Port :" + port);
});
mongoose
  .connect(dburl)
  .then(() => {
    console.log("UserDatabase Connected success");
  })
  .catch((error) => console.log(error));

app.use("/", require("../router/userrouter"));
