const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
router.post("/users", (req, resp) => {
  const user = new User(req.body);
  user.save().then((result) => {
    resp.send(result);
  });
});
router.get("/users", auth, (req, resp) => {
  User.find()
    .then((result) => {
      resp.send(result);
    })
    .catch((error) => {
      resp.send(error);
    });
});
router.post("/userlogin", async (req, resp) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;

    const userdata = await User.findOne({ email: email });
    const verify = await bcrypt.compare(pass, userdata.pass);
    const token = await jwt.sign({ _id: userdata._id }, "thisismyfirsttoken");

    if (verify) {
      resp.send("Token :" + " " + token);
    } else {
      resp.send("Invalide user or password");
    }
  } catch (error) {
    resp.send("404 not found");
  }
});
module.exports = router;
