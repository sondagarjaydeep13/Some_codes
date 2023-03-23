const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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
if ((this.isModified = "pass")) {
  userSchema.pre("save", async function (next) {
    this.pass = await bcrypt.hash(this.pass, 10);
  });
}
module.exports = mongoose.model("User", userSchema);
