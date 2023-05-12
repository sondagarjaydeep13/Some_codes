const express = require("express");
const router = express.Router();
const User = require("../models/User");
const controller = require("../controller/usercontroll");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  try {
    res.send("Welcome To index");
  } catch (error) {
    console.log(error);
  }
});

router.post("/adduser", async (req, res) => {
  try {
    const { uname, email, pass, address, mobileno, confirmpass } = req.body;
    const user = await User({
      uname,
      email,
      pass,
      address,
      mobileno,
      confirmpass,
    });
    if (pass != confirmpass) {
      res.send("Password and confirmpass mitch match found !!!");
    } else {
      user.pass = await controller.bcryptpass(pass);
      console.log(user.pass);
      const userdata = await user.save();
      res.send(userdata);
    }
  } catch (error) {
    res.send(error);
  }
});
router.get("/dropcollection", async (req, res) => {
  try {
    mongoose.connection.db.dropCollection("users");
    res.send("Collection drop success !!");
  } catch (error) {
    res.send(error);
  }
});
router.post("/userlogin", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const userdata = await User.findOne({ email: email });
    const isValide = await bcrypt.compare(pass, userdata.pass);
    // console.log(isValide);
    if (isValide == true) {
      res.send("Welcome  " + userdata.uname);
    } else {
      res.send("Invalide Username Or Password !!!");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
