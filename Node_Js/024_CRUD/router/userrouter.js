const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
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
router.post("/loginuser", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const alluser = await User.find();
    const userdata = await User.findOne({ email: email });
    iscompare = await bcrypt.compare(password, userdata.password);
    if (iscompare) {
      res.render("views", { udata: alluser });
    } else {
      res.render("login", { loginerror: "Invalide user or password !!!" });
    }
  } catch (error) {
    res.render("login", { loginerror: "Invalide user or password !!!" });
  }
});
router.get("/delete", async (req, res) => {
  const deleteuser = req.query.deleteid;
  try {
    await User.findByIdAndDelete({ _id: deleteuser });
    const alluser = await User.find();
    res.render("views", { udata: alluser });
  } catch (error) {
    console.log(error);
  }
});
router.get("/edit", async (req, res) => {
  const edituser = req.query.editid;
  try {
    const userdata = await User.findOne({ _id: edituser });
    res.render("userupdate", { udata: userdata });
  } catch (error) {
    res.render(error);
  }
});
router.post("/updateuser", async (req, res) => {
  const userupdate = req.body._id;

  try {
    await User.findByIdAndUpdate(
      { _id: userupdate },
      {
        uname: req.body.uname,
        email: req.body.email,
        gender: req.body.gender,
      }
    );
    const userdata = await User.find();
    res.render("views", { udata: userdata });
  } catch (error) {
    res.render(error);
  }
});
module.exports = router;
