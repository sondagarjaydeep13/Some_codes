const express = require("express");
const router = express.Router();
const User = require("../model/user");
const multer = require("multer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
router.get("/", (req, resp) => {
  resp.render("form");
});
//*****************Image upload****************** */
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/img");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
//********************end******************* */
router.post("/adduser", upload.single("file"), async (req, resp) => {
  try {
    const user = await User({
      uname: req.body.uname,
      email: req.body.email,
      pass: req.body.pass,
      img: req.file.filename,
    });
    const userdata = await user.save();
    resp.render("home", { udata: userdata });
  } catch (error) {
    resp.render(error);
  }
});
router.get("/home", async (req, resp) => {
  try {
    const userdata = await User.find();
    resp.render("home", { udata: userdata });
  } catch (error) {
    resp.render(error);
  }
});
router.get("/login", (req, resp) => {
  resp.render("login");
});
router.post("/loginuser", async (req, resp) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;
    const userdata = await User.findOne({ email: email });
    const verify = await bcrypt.compare(pass, userdata.pass);
    const token = await jwt.sign({ _id: userdata._id }, process.env.SKEY);

    if (verify) {
      resp.cookie("jwt", token);
      resp.render("home", { udata: userdata });
    } else {
      resp.render("login", { msg: "Invalide user or password" });
    }
  } catch (error) {
    // resp.render("login", { msg: "Invalide user or password" });
    resp.send("404 not found");
  }
});

module.exports = router;
