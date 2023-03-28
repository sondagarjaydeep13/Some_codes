const express = require("express");
const User = require("../models/users/User");
const bcrypt = require("bcryptjs");
const route = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

//********************************* GET FOR INDEX*********************************** */
route.get("/form", (req, res) => {
  res.render("index");
});
route.get("/login", (req, res) => {
  res.render("login");
});
route.get("/view", auth, (req, res) => {
  res.render("view");
});
//********************************** ADD USER************************************** **/
route.post("/adduser", async (req, res) => {
  const _id = req.body._id;
  try {
    if (_id == "") {
      const user = await User({
        uname: req.body.uname,
        email: req.body.email,
        pass: req.body.pass,
      });
      await user.save();
      res.render("index", { usermsg: "Registartion success..!!" });
    } else {
      const user = await User.findByIdAndUpdate(
        { _id: _id },
        {
          uname: req.body.uname,
          email: req.body.email,
        }
      );
      console.log(user);
      res.render("index", { uupdate: "User update success..!!" });
    }
  } catch (error) {
    res.render(error);
  }
});
//******************************* LOGIN USER****************************************** */
route.post("/loginuser", async (req, res) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;
    const userdata = await User.findOne({ email: email });
    const userdata2 = await User.find();
    const isCompare = await bcrypt.compare(pass, userdata.pass);

    if (isCompare) {
      const Token = await userdata.generateToken();

      res.cookie("jwt", Token);

      res.render("view", { udata: userdata });
    } else {
      // res.render("login", { alert: "Invalide user or password" });
      res.render(error);
    }
  } catch (error) {
    // res.render("login", { alert: "Invalide user or password" });
    res.render(error);
  }
});
//******************************** DELETE USER**************************** */
route.get("/delete", async (req, res) => {
  try {
    const _id = req.query.deleteid;

    await User.findByIdAndDelete(_id);
    res.render("view");
  } catch (error) {
    res.render(error);
  }
});
// ******************************** EDIT USER**********************************/
route.get("/edit", async (req, res) => {
  try {
    const _id = req.query.editid;
    const edata = await User.findById(_id);
    res.render("index", {
      editdata: edata,
      passalert: "Password cant change here",
    });
  } catch (error) {
    res.render(error);
  }
});
//******************************** USER LOGOUT************************** */
route.get("/logout", auth, (req, res) => {
  const token = req.token;
  const user = req.user;
  user.Token.filter((e) => {
    console.log(e);
  });
  res.clearCookie("jwt");
  res.render("login");
});
module.exports = route;
