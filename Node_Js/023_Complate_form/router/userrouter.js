const express = require("express");
const user_router = express.Router();
const User = require("../model/User");
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
user_router.get("/getuser", (req, resp) => {
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

  user_router.put("/update/:id", async (req, resp) => {
    const _id = req.params.id;
    console.log(_id);
    const userdata = await User.findByIdAndUpdate(_id, req.body)
      .then((result) => {
        resp.send(result);
      })
      .catch((err) => {
        resp.send(err);
      });
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
module.exports = user_router;
