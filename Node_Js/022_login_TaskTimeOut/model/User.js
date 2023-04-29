const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  uname: String,
  email: String,
  pass: String,
  createdAt: { type: Date, expires: "10m", default: Date.now },
});

userSchema.pre("save", async function (pass) {
  if (this.isModified("pass")) {
    this.pass = await bcrypt.hash(this.pass, 10);
  }
});

const User = new mongoose.model("User", userSchema);
module.exports = User;
