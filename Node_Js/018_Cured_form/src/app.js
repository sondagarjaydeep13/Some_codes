const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port;
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const dburl = process.env.dburl;
const hbs = require("hbs");
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
const viewpath = path.join(__dirname, "../templetes/view");
const partialpath = path.join(__dirname, "../tempetes/partial");
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);

const userrouter = require("../router/userrouter");
app.use("/", userrouter);

app.listen(port, () => {
  console.log("Server running on port " + " " + port);
});

mongoose.connect(dburl).then((result) => {
  console.log("mywebformdb connected");
});

