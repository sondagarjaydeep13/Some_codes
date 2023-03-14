const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  uname: String,
  email: String,
  pass: String,
});
userSchema.pre("save", async function (pass) {
  this.pass = await bcrypt.hash(this.pass, 10);
});
const User = mongoose.model("User", userSchema);
module.exports = User;
