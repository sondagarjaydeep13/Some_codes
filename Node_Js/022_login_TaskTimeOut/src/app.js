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
const port = process.env.port || 9000;
// const dburl = process.env.dburl;
const dburl =
  "mongodb+srv://sondagarjaydeep13:Jaydeep123@cluster0.jvvwc8q.mongodb.net/firstdb?retryWrites=true&w=majority";
//************Join Path ************* */
const viewpath = path.join(__dirname, "../templetes/view");
const partialpath = path.join(__dirname, "../templetes/partial");
const publicpath = path.join(__dirname, "./public");
//*************Views****************** */
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);
app.use(express.static(publicpath));

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
app.use("/", userrouter);
