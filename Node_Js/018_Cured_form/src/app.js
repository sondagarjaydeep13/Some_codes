const express = require("express");
const app = express();
const port = 9000;
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const dburl =
  "mongodb+srv://sondagarjaydeep13:Jaydeep123@cluster0.jvvwc8q.mongodb.net/mywebformdb?retryWrites=true&w=majority";
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
