const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  uname: {
    type: String,
  },
  email: String,
  pnumber: String,
  pass: String,
});
const User = new mongoose.model("User", userSchema);
module.exports = User;
