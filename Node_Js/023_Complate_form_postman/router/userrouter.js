const express = require("express");
const user_router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
///******************Add User****************** */
user_router.post("/adduser", async (req, resp) => {
  const user = await User(req.body);
  user
    .save()
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});
//*************All user get*************** */
user_router.get("/getuser", auth, (req, resp) => {
  User.find()
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});
//****************User get by id********* */
user_router.get("/getuser/:id", (req, resp) => {
  const id = req.params.id;
  User.findById(id)
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});
//*************** Delete user ***************/
user_router.delete("/delete/:id", (req, resp) => {
  const _id = req.params.id;
  User.findByIdAndDelete(_id)
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});
//********************* User login ***********/
user_router.post("/loginuser", async (req, resp) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;

    const userdata = await User.findOne({ email: email });
    const isverify = await bcrypt.compare(pass, userdata.pass);
    const isToken = await jwt.sign({ _id: userdata._id }, process.env.SKEY);

    if (isverify) {
      resp.send("Welcome" + " " + userdata.uname + " " + isToken);
    } else {
      resp.send("Invalide User or password");
    }
  } catch (error) {
    resp.send(error);
  }
});
module.exports = user_router;
