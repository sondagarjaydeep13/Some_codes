//******************************* REQUIRE********************************************* */
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const DBURL = process.env.DBURL;
const app = express();
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const userrouter = require("../router/userrouter");
const cookieParser = require("cookie-parser");
//********************************** PATH ********************************************* */

const partialpath = path.join(__dirname, "../templete/partial");
const viewpath = path.join(__dirname, "../templete/view");
const publicpath = path.join(__dirname, "./public");
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);
app.use(express.static(publicpath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", userrouter);
//************************************ PORT and DATABASE******************************* */
app.listen(PORT, () => {
  console.log("Server running on port" + " " + PORT);
});
mongoose.connect(DBURL).then((result) => {
  console.log("Module-6 database connected");
});
