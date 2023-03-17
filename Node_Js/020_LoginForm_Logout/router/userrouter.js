const express = require("express");
const router = express.Router();
const User = require("../model/User");
const multer = require("multer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.get("/", (req, resp) => {
  resp.render("login");
});

router.post("/addUser", async (req, resp) => {
  try {
    const user = await User(req.body);

    await user.save();
    resp.render("registration", { msg: "Registration Success.!!!" });
  } catch (error) {
    resp.render(error);
  }
});
router.get("/registration", (req, resp) => {
  resp.render("registration");
});
router.post("/login", async (req, resp) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;
    const userdata = await User.findOne({ email: email });
    const isValide = await bcrypt.compare(pass, userdata.pass);

    if (isValide) {
      const token = await jwt.sign({ _id: userdata._id }, process.env.SKEY);

      resp.render("home", { msg: userdata.uname });
      resp.render("jwt", token);
    } else {
      resp.render("login", { msg: "Invalide User or Password" });
    }
  } catch (error) {
    resp.render("login", { msg: "Invalide User or Password" });
  }
});

module.exports = router;
