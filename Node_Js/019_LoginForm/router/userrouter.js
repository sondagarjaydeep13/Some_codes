const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
router.get("/", (req, resp) => {
  resp.render("registration");
});
router.post("/addUser", async (req, resp) => {
  const user = await new User(req.body);
  try {
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

    if (isvalide) {
      const token = await jwt.sign(
        { _id: userdata._id },
        "thisismyfirstwebtoken"
      );
      resp.cookie("jwt", token);
      resp.render("home", { msg: userdata.uname });
    } else {
      resp.render("login", { alert: "Invalide User or Passworld" });
    }
  } catch (error) {
    resp.render("login", { alert: "Invalide User or Password" });
  }
});

router.get("/home", auth, (req, resp) => {
  resp.render("home");
});
module.exports = router;
