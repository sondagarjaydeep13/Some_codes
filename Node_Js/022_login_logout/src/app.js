//************Require module********* */
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const hbs = require("hbs");
const path = require("path");
const userrouter = require("../router/userrouter");
const bodyParser = require("body-parser");
//************ Uses  ***************** */
const port = process.env.port;
const dburl = process.env.dburl;
//************Join Path ************* */
const viewpath = path.join(__dirname, "../templetes/view");
const partialpath = path.join(__dirname, "../templetes/partial");
const publicpath = path.join(__dirname, "./public");
//*************Views****************** */
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);
app.use(express.static(publicpath));
app.use("/", userrouter);
app.use(bodyParser.urlencoded({ extended: false }));
//***********Create Server port************* */
app.listen(port, () => {
  console.log("Server running on port " + " " + port);
});

//****************Database connection********** */
mongoose
  .connect(dburl)
  .then((result) => {
    console.log("Firstdb database connected");
  })
  .catch((err) => {
    console.log(err);
  });
