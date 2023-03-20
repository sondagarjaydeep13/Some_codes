const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  uname: String,
  email: String,
  pass: String,
  create_on: {
    type: Date,
    default: Date.now(),
  },
});
userSchema.pre("save", async function (pass) {
  this.pass = await bcrypt.hash(this.pass, 10);
});
const User = mongoose.model("User", userSchema);
module.exports = User;
