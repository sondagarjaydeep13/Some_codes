const express = require("express");
const app = express();
const mongoose = require("mongoose");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const port = process.env.port || 8080;
const path = require("path");
const viewpath = path.join(__dirname, "../templetes/view");
const partialpath = path.join(__dirname, "../templetes/partial");
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);
app.use(bodyParser.urlencoded({ extended: false }));
const dburl =
  "mongodb+srv://sondagarjaydeep13:Jaydeep123@cluster0.jvvwc8q.mongodb.net/myloginform?retryWrites=true&w=majority";

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
