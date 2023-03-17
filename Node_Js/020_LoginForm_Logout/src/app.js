//****************Require***************** */
const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");
const path = require("path");
const app = express();
require("dotenv").config();
const userrouter = require("../router/userrouter");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = process.env.port || 7000;
const dburl = process.env.dburl;
//**************Set or Use*********************** */
const publicpath = path.join("./public");
const partialpath = path.join("./templetes/partial");
const viewpath = path.join("./templetes/view");
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);
app.use(express.static(publicpath));
app.use(cookieParser);

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", userrouter);

//**********************port and mongoose********** */
app.listen(port, () => {
  console.log("Server runnig on port" + " " + port);
});
mongoose.connect(dburl).then((result) => {
  console.log("Myapi Database Connected ");
});
