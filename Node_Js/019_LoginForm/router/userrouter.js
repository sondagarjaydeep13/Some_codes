const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const multer = require("multer");

//**************multer middleware********** */
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/img");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });
//******************************** */
router.get("/", (req, resp) => {
  resp.render("registration");
});
router.post("/addUser", upload.single("file"), async (req, resp) => {
  try {
    const user = await new User({
      uname: req.body.uname,
      email: req.body.email,
      img: req.file.filename,
      pass: req.body.pass,
    });
    await user.save();
    resp.render("registration", { msg: "Successfully Registration...!!" });
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

    const isvalide = await bcrypt.compare(pass, userdata.pass);
    const alldata = await User.find();

    if (isvalide) {
      const token = await jwt.sign(
        { _id: userdata._id },
        "thisismyfirstwebtoken"
      );
      resp.cookie("jwt", token);
      resp.render("home", { udata: userdata.uname, alldata: alldata });
    } else {
      resp.render("login", { alert: "Invalide User or Passworld" });
    }
  } catch (error) {
    resp.render("login", { alert: "Invalide User or Password" });
  }
});

router.get("/home", auth, async (req, resp) => {
  try {
    const userdata = await User.find();
    resp.render("home", { alldata: userdata });
  } catch (error) {
    resp.render(error);
  }
});
router.get("/delete", async (req, resp) => {
  const userid = req.query.deleteid;
  try {
    await User.findByIdAndDelete(userid);
    const userdata = await User.find();
    resp.render("home", { alldata: userdata });
  } catch (error) {
    resp.render(error);
  }
});
router.get("/logout", (req, resp) => {
  resp.clearCookie("jwt");
  resp.redirect("login");
});
module.exports = router;
