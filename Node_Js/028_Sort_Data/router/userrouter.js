const express = require("express");
const router = express.Router();
const User = require("../model/User");
router.get("/", (req, res) => {
  res.send("Welcome to index");
});

router.post("/adduser", async (req, res) => {
  try {
    const userdata = await User(req.body).save();

    res.send(userdata);
  } catch (error) {
    res.send(error);
  }
});

router.get("/userdata/:id", async (req, res) => {
  try {
    const uname = req.params.id;
    const age = req.params.id;

    // console.log(age);
    let sortdata = {};
    if (uname == "uname") {
      sortdata = { uname: 1 };
    } else if (age == "age") {
      sortdata = { age: 1 };
    } else {
      sortdata = { _id: 1 };
    }
    const userdata = await User.find().sort(sortdata);
    res.send(userdata);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
