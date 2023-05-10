const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const userRouter = require("../router/userrouter");
const port = process.env.PORT || 9000;
const dburl = process.env.dburl;

app.use(express.json());

app.listen(port, () => {
  console.log("Server runnig on port :" + port);
});

mongoose
  .connect(dburl)
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/", userRouter);
