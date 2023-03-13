const express = require("express");
const router = express.Router();
const User = require("../model/user");
router.get("/", (req, resp) => {
  resp.render("index");
});
router.post("/adduser", async (req, resp) => {
  const user = new User({
    uname: req.body.uname,
    email: req.body.email,
    pass: req.body.pass,
    pnumber: req.body.pnumber,
  });

  const data = await user.save();
  if (data) {
    resp.render("success");
  } else {
    resp.send("Invalide Data");
  }
});
router.get("/backhome", (req, resp) => {
  resp.render("index");
});
router.get("/infodata", async (req, resp) => {
  const userdata = await User.find();

  resp.render("infodata", { udata: userdata });
});
module.exports = router;
