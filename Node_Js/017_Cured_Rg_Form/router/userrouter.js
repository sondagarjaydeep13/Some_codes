const express = require("express");
const router = express.Router();
const User = require("../model/user");

// router.get("/", (req, resp) => {
//   resp.render("index");
// });

router.post("/adduser", async (req, resp) => {
  // const user = new User({
  //   uname: req.body.uname,
  //   pass: req.body.pass,
  //   email: req.body.email,
  // });
  // const data = await user.save();
  // resp.redirect("/");
  var _id = req.body._id;
  if (_id == "") {
    const user = new User({
      uname: req.body.uname,
      email: req.body.email,
      pass: req.body.pass,
    });
    await user.save();
  } else {
    await User.findByIdAndUpdate(_id, req.body);
  }
  resp.redirect("/");
});

// .............view data ..............
router.get("/", async (req, resp) => {
  const data = await User.find();

  resp.render("index", { udata: data });
});

router.get("/delete", async (req, resp) => {
  try {
    const _id = req.query.did;
    await User.findByIdAndDelete(_id);
    resp.redirect("/");
  } catch (error) {
    resp.send(error);
  }
});

router.get("/edit", async (req, resp) => {
  const _id = req.query.eid;

  const data = await User.findOne({ _id: _id });
  const data1 = await User.find();
  resp.render("index", { edata: data, udata: data1 });
});
module.exports = router;
