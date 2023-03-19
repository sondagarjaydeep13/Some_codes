const express = require("express");
const router = express.Router();
const User = require("../model/User");
const multer = require("multer");
const { emit } = require("nodemon");
//***********Img upload********* *******/
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/img");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
/************** For Home Req ***********/

router.get("/login", (req, resp) => {
  resp.render("login");
});
router.get("/registration", (req, resp) => {
  resp.render("registration");
});
/**********User Reg.************* */
router.post("/adduser", upload.single("file"), async (req, resp) => {
  try {
    const user = await User({
      uname: req.body.uname,
      email: req.body.email,
      pass: req.body.pass,
      img: req.file.filename,
    });
    await user.save();
    resp.render("registration", { msg: "Cong,,,registration success....!!!" });
  } catch (error) {
    resp.render(error);
  }
});
//***********User Login***************** */
router.post("/loginuser", async (req, resp) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;
    console.log(email);
    const userdata = await User.findOne({ email: email });
    console.log(userdata);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
