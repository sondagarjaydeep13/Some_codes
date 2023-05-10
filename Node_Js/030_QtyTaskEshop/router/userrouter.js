const express = require("express");
const router = express.Router();
const User = require("../models/User");
const controller = require("../controller/usercontroll");
const mongoose = require("mongoose");

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

module.exports = router;
