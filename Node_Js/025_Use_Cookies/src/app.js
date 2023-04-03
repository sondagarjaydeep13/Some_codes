const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");

const port = process.env.PORT;
const dburl = process.env.DBURL;

const viewpath = path.join(__dirname, "../templates/view");
const partialpath = path.join(__dirname, "../templates/partials");
const staticpath = path.join(__dirname, "./public");
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);
app.use(express.static(staticpath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", require("../router/userrouter"));
app.listen(port, () => {
  console.log("Server runnig on port:" + port);
});
mongoose
  .connect(dburl)
  .then((rersult) => {
    console.log("Db Connected");
  })
  .catch((error) => {
    console.log(error);
  });
