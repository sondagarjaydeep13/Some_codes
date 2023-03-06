const express = require("express");
const Student = require("../model/student");
const router = express.Router();
const bcrypt = require("bcryptjs");
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
router.post("/studentlogin", async (req, resp) => {
  try {
    const Email = req.body.Email;
    const Pass = req.body.Pass;
    const data = await Student.findOne({ Email: Email });
    const validation = await bcrypt.compare(Pass, data.Pass);
    if (validation) {
      resp.send("Welcome" + " " + data.Name);
    } else {
      resp.send("User Not Found..!!");
    }
  } catch (error) {
    resp.send("404 not found");
  }
});

module.exports = router;
