const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.get("/", (req, resp) => {
  resp.render("index");
});

router.post("/adduser", async (req, resp) => {
  const user = new User({
    uname: req.body.uname,
    pass: req.body.pass,
    email: req.body.email,
  });
  const data = await user.save();
  resp.redirect("/");
});
module.exports = router;
