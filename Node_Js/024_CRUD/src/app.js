// start date:31/03/2023 database-31_03_database
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 9000;
const dburl = process.env.DBURL;
//************************** path**************************************** */
const partialpath = path.join(__dirname, "../templates/partials");
const viewpath = path.join(__dirname, "../templates/view");
const publicpath = path.join(__dirname, "./public");
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);
app.use(express.static(publicpath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", require("../router/userrouter"));
app.use(cookieParser());
//************************ create port************************************ */
app.listen(port, () => {
  try {
    console.log("Server running on port:" + port);
  } catch (error) {
    console.log(error);
  }
});
//************************ connect database******************************* */
mongoose
  .connect(dburl)
  .then((result) => {
    console.log("31_03_Update DB connected");
  })
  .catch((error) => {
    console.log(error);
  });
