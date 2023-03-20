const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const router = express.Router();
router.get("/", (req, resp) => {
  resp.render("hostar", { msg: "Login" });
});
router.get("/login", (req, resp) => {
  resp.render("login");
});
router.get("/registration", (req, resp) => {
  resp.render("registration");
});
//**************************Add user******************** */
router.post("/adduser", async (req, resp) => {
  const user = await new User(req.body);
  await user.save();
  resp.render("registration", { usermsg: "Congr,,Registration success..!!" });
});

//***************Login User***************************** */
router.post("/loginuser", async (req, resp) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;
    const userdata = await User.findOne({ email: email });
    const isverify = await bcrypt.compare(pass, userdata.pass);
    if (isverify) {
      resp.render("hostar", {
        udata: "Welcome" + " " + userdata.uname,
        msg: "Logout",
      });
    }
  } catch (error) {
    resp.render(error);
  }
});
module.exports = router;
