const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const auth = require("../middelware/auth");
const jwt = require("jsonwebtoken");
router.post("/users", (req, resp) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});

router.get("/users", auth, (req, resp) => {
  User.find()
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});
router.post("/userslogin", async (req, resp) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;
    const userdata = await User.findOne({ email: email });
    const verify = await bcrypt.compare(pass, userdata.pass);
    if (verify) {
      const token = await jwt.sign({ _id: userdata._id }, "thisismyfirsttoken");
      resp.send("Token:" + "" + token);
    }
    else{
      resp.send("Invalide data")
    }
  } catch (error) {
    resp.send("404 Not Found..!!!");
  }
});
module.exports = router;
