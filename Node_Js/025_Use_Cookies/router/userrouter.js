const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
router.get("/", (req, res) => {
  res.render("login");
});
router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/index", auth, (req, res) => {
  res.render("index");
});
router.post("/adduser", async (req, res) => {
  try {
    await User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
    }).save();
    res.render("register", { registermsg: "Register Success  !!!" });
  } catch (error) {
    res.render(error);
  }
});
router.get("/data", async (req, res) => {
  try {
    const result = await User.find();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});

router.post("/loginuser", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userdata = await User.findOne({ email: email });
    const iscompare = await bcrypt.compare(password, userdata.password);
    // const userToken = await jwt.sign({ id: userdata._id }, process.env.SKEY);

    if (iscompare) {
      const userToken = await userdata.genrateToken();

      res.cookie("jwt", userToken);
      res.render("index");
    } else {
      res.render("login", { loginerror: "Invalide User or Password  !!!" });
    }
  } catch (error) {
    res.render(error);
  }
});
router.get("/userlogout", auth, async (req, res) => {
  try {
    const loginuser = req.user;
    const currentToken = req.token;
    // console.log("data :" + loginuser.Tokens.map((e) => e.Token));
    loginuser.Tokens = loginuser.Tokens.filter((e) => {
      e.Token != currentToken;
    });
    await loginuser.save();
    res.clearCookie("jwt");
    res.render("login");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
