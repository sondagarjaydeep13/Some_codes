const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  uname: String,
  email: String,
  pass: String,
  img: String,
});
userSchema.pre("save", async function (pass) {
  this.pass = await bcrypt.hash(this.pass, 10);
});
const User = new mongoose.model("User", userSchema);
module.exports = User;
