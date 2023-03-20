//**********Require************* */
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const app = express();
const hbs = require("hbs");
const bodyParser = require("body-parser");
const hostarrouter = require("../router/hostarrouter");

const port = process.env.port;
const dburl = process.env.dburl;
//***************Path************* */
const viewpath = path.join(__dirname, "../templetes/view");
const partialpath = path.join(__dirname, "../templetes/partial");
const csspath = path.join(__dirname, "../templetes/css");
const publicpath = path.join(__dirname, "./public");
//***********Use****************** */

app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);
app.use(express.static(publicpath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", hostarrouter);

//*************port & database************** */
app.listen(port, () => {
  console.log("Port Number running :" + " " + port);
});
mongoose
  .connect(dburl)
  .then((result) => {
    console.log("Hostar-data DB connected");
  })
  .catch((error) => {
    console.log(error);
  });
