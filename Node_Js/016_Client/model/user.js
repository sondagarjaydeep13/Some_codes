const mongoose = require("mongoose");
//.............for pass hashing..........
const bcrypt = require("bcrypt");
//.............Create thr Schema(Structure)......
const userSchema = new mongoose.Schema({
  uname: String,
  email: {
    type: String,
    require: true,
    unique: true,
  },
  pass: {
    type: String,
    require: true,
  },
  createon: {
    type: Date,
    default: Date.now(),
  },
});
userSchema.pre("save", async function () {
  this.pass = await bcrypt.hash(this.pass, 10);
});
const User = new mongoose.model("User", userSchema);
module.exports = User;
