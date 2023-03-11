const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const userrouter = require("../router/userrouter");
require("dotenv").config();
const port = process.env.port || 9000;
const dburl =
  process.env.dburl ||
  "mongodb+srv://sondagarjaydeep13:Jaydeep123@cluster0.jvvwc8q.mongodb.net/Webform?retryWrites=true&w=majority";

app.listen(port, (req, resp) => {
  console.log("server running on port" + " " + port);
});

mongoose
  .connect(dburl)
  .then((result) => {
    console.log("Webform database connected");
  })
  .catch((err) => {
    console.log(err);
  });
//.........for body parsser
app.use(bodyParser.urlencoded({ extended: false }));

const publicpath = path.join(__dirname, "../public");
const viewpath = path.join(__dirname, "../templetes/view");
const partialpath = path.join(__dirname, "../templetes/partial");
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);
app.use(express.static(publicpath));
app.use("/", userrouter);
