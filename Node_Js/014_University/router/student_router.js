const express = require("express");
const Student = require("../model/student");
const router = express.Router();

router.post("/student", (req, resp) => {
  const student = new Student(req.body);
  student
    .save()
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});
router.get("/student", (req, resp) => {
  Student.find()
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});
router.get("/student/:id", (req, resp) => {
  const _id = req.params.id;
  Student.findById(_id)
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});
router.delete("/student/:id", (req, resp) => {
  const _id = req.params.id;
  Student.findByIdAndDelete(_id)
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});

module.exports = router;
