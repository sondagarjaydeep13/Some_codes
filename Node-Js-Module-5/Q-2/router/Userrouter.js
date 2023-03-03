// const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../model/User");

//Add One Data

router.post("/user", (req, resp) => {
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

  // Find Data
  router.get("/user", (req, resp) => {
    User.find()
      .then((result) => {
        resp.send(result);
      })
      .catch((err) => {
        resp.send(err);
      });
  });

  // Update data
  router.put("/user/:id",(req,resp)=>{
    const _id=req.params.id;
    User.findByIdAndUpdate(_id,req.body).then(result=>{
        resp.send(result);
    }).catch(err=>{
        resp.send(err);
    });
  });

  // Delete Data

  router.delete("/user/:id",(req,resp)=>{
    const _id=req.params.id;
    User.findByIdAndDelete(_id).then(result=>{
        resp.send(send);
    }).catch(err=>{
        resp.send(err);
    })
  })


module.exports = router;
