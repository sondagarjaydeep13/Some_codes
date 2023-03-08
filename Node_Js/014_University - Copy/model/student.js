const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const auth = require("../middelware/auth");
const student = new mongoose.Schema({
  Number: {
    type: Number,
    require: true,
  },
  Name: {
    type: String,
  },
  Email: {
    type: String,
    Unique: true,
  },
  Pass: {
    type: String,
  },
});
student.pre("save", async function () {
  this.Pass = await bcrypt.hash(this.Pass, 10);
});

const Student = new mongoose.model("Student", student);
module.exports = Student;
