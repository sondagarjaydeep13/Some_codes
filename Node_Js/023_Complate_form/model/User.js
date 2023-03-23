const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uname: {
    type: String,
    require: true,
  },
  pass: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  create: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("User", userSchema);
