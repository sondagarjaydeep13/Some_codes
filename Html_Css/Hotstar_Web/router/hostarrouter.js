const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
router.get("/", (req, resp) => {
  resp.render("hostar", { msglogin: "Login" });
});
router.get("/home", auth, (req, resp) => {
  resp.render("hostar");
});
router.get("/login", (req, resp) => {
  resp.render("login");
});
router.get("/registration", (req, resp) => {
  resp.render("registration");
});
//************************TV**************************** */
router.get("/tv", auth, (req, resp) => {
  resp.render("tv");
});
//**************************Add user******************** */
router.post("/adduser", async (req, resp) => {
  const _id = req.body._id;

  try {
    if (_id == "") {
      const user = await new User(req.body);
      await user.save();
      resp.render("registration", {
        usermsg: "Congr,,Registration success..!!",
      });
    } else {
      const user = await User.findByIdAndUpdate({ _id: _id }, req.body);
      console.log(user);
      resp.render("registration", { usermsg: "User data Update success..!!!" });
    }
  } catch (error) {
    resp.render(error);
  }
});

//***************Login User***************************** */
router.post("/loginuser", async (req, resp) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;
    const userdata = await User.findOne({ email: email });
    const isverify = await bcrypt.compare(pass, userdata.pass);
    const token = await jwt.sign({ _id: userdata._id }, process.env.SKEY);

    if (isverify) {
      resp.cookie("jwt", token);
      resp.render("hostar", {
        udata: "Welcome" + " " + userdata.uname,
        msglogout: "Logout",
        msgedit: "Edit",
        _id: userdata._id,
      });
    } else {
      resp.render("login", { alert: "Invalide user or password..!!" });
    }
  } catch (error) {
    resp.render("login", { alert: "Invalide user or password..!!" });
  }
});
//**************** Logout*********************************** */
router.get("/logout", (req, resp) => {
  resp.clearCookie("jwt");
  resp.render("hostar", { msglogin: "Login" });
});
//***********************Edit user**************************** */
router.get("/edit", async (req, resp) => {
  const _id = req.query.editid;
  try {
    const useredit = await User.findOne({ _id: _id });
    resp.render("registration", { editdata: useredit });
  } catch (error) {
    resp.render(error);
  }
});
module.exports = router;
