const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const hbs = require("hbs");
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.port;
const dburl = process.env.dburl;
const userrouter = require("../router/userrouter");
const cookieParser = require("cookie-parser");

const viewpath = path.join("./templetes/view");
const partialpath = path.join("./templetes/partial");
const publicpath = path.join("./public");
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);
app.use(express.static(publicpath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", userrouter);
app.use(cookieParser);

app.listen(port, () => {
  console.log("Server runnig on port" + " " + port);
});
mongoose
  .connect(dburl)
  .then((result) => {
    console.log("Data base connected");
  })
  .catch((err) => {
    console.log(err);
  });
