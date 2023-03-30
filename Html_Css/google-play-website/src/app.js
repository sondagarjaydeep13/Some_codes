const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const port = process.env.port;
const dburl = process.env.dburl;
const path = require("path");
const hbs = require("hbs");
const userrouter = require("../router/userrouter");
//*******************Path*************************************************** */
const viewpath = path.join(__dirname, "../templates/view");
const partialpath = path.join(__dirname, "../templates/partial");
const publipath = path.join("./public");

//**************** Use ***************************************************** */
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);
app.use(express.static(publipath));
app.use("/", userrouter);
//*************** Server connect ******************************************* */
app.listen(port, () => {
  console.log("server running on port" + " " + port);
});
mongoose
  .connect(dburl)
  .then((result) => {
    console.log("Google-play database connected");
  })
  .catch((err) => {
    console.log(err);
  });
