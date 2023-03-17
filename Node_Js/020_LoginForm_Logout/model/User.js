const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  uname: String,
  email: String,
  pass: String,
  jdate: {
    type: Date,
    default: Date.now(),
  },
});

//****************Bcrypt Password************* */
userSchema.pre("save", async function (pass) {
  this.pass = await bcrypt.hash(this.pass, 10);
});
//****************end Bcrypt Password************* */

const User = new mongoose.model("User", userSchema);
module.exports = User;
