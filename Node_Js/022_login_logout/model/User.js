const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  uname: String,
  email: String,
  pass: String,
  img: String,
});
const User = new mongoose.model("User", userSchema);
module.exports = User;
