const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  uname: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  pass: {
    type: String,
    require: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});
userSchema.pre("save", async function () {
  this.pass = await bcrypt.hash(this.pass, 10);
});
const User = new mongoose.model("User", userSchema);
module.exports = User;
