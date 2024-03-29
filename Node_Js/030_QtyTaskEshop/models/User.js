const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  pass: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  mobileno: {
    type: Number,
    require: true,
  },
  createAt: {
    type: Date,

    expires: "10m",
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
