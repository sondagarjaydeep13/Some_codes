const express = require("express");
const router = express.Router();
const User = require("../model/user");
router.get("/", (req, resp) => {
  resp.render("index");
});
router.post("/adduser", async (req, resp) => {
  var id = req.body._id;
  try {
    if (id == "") {
      const user = new User({
        uname: req.body.uname,
        email: req.body.email,
        pass: req.body.pass,
        pnumber: req.body.pnumber,
      });

      await user.save();
    } else {
      await User.findByIdAndUpdate(id, req.body);
    }
    resp.render("success");
  } catch (error) {
    console.log(error);
  }
});
router.get("/backhome", (req, resp) => {
  resp.render("index");
});
router.get("/infodata", async (req, resp) => {
  const userdata = await User.find();

  resp.render("infodata", { udata: userdata });
});

router.get("/edit", async (req, resp) => {
  const _id = req.query.editid;

  try {
    const data = await User.findOne({ _id: _id });

    resp.render("index", { edata: data });
  } catch (error) {
    resp.send(error);
  }
});
router.get("/delete", async (req, resp) => {
  const _id = req.query.deleteid;

  try {
    await User.findByIdAndDelete(_id);
    resp.redirect("infodata");
  } catch (error) {
    resp.send(error);
  }
});
module.exports = router;
