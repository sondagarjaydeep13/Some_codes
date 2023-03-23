//***Start date: 22-03-2023 */
const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const mongoose = require("mongoose");
const userrouter = require("../router/userrouter");
const productrouter = require("../router/productrouter");
app.use(express.json());
const port = process.env.port;
const dburl = process.env.dburl;

//************ Port************************ */
app.listen(port, () => {
  console.log("server runnig on port " + " " + port);
});

//*********************Mongoose database******** */

mongoose
  .connect(dburl)
  .then((result) => {
    console.log("form_22_03 database connected");
  })
  .catch((err) => {
    console.log(err);
  });

//******************* Use************* */
app.use("/", userrouter);
app.use("/", productrouter);
