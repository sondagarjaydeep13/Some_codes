const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const multer = require("multer");
const userSchema = new mongoose.Schema({
  uname: String,
  email: String,
  pass: String,
  JoinDate: {
    type: Date,
    default: Date.now(),
  },
  img: {
    type: String,
  },
});



userSchema.pre("save", async function (pass) {
  this.pass = await bcrypt.hash(this.pass, 10);
});
const User = mongoose.model("User", userSchema);
module.exports = User;
