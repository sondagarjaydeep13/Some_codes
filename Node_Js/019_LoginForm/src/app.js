const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8000;
const dburl =
  "mongodb+srv://sondagarjaydeep13:Jaydeep123@cluster0.jvvwc8q.mongodb.net/myloginform?retryWrites=true&w=majority";
const hbs = require("hbs");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
app.use(cookieParser());

const path = require("path");
const { execPath } = require("process");
const viewpath = path.join(__dirname, "../templetes/view");
const partialpath = path.join(__dirname, "../templetes/partial");
const publicpath = path.join(__dirname, "../public");
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);
app.use(express.static(publicpath));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log("Server Running on port" + " " + port);
});
mongoose
  .connect(dburl)
  .then((result) => {
    console.log("Myloginform database Connected");
  })
  .catch((error) => {
    console.log(error);
  });
// const userrouter = require("../router/userrouter");
// app.use("/", userrouter);
app.use("/", require("../router/userrouter"));
