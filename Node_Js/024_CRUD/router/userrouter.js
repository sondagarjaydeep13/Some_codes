const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/adduser", async (req, res) => {
  try {
    const user = await User({
      uname: req.body.uname,
      email: req.body.email,
      password: req.body.password,
      gender: req.body.gender,
    });
    await user.save();
    res.render("register", { registermsg: "User register success !!!!" });
  } catch (error) {
    res.render(error);
  }
});
module.exports = router;
