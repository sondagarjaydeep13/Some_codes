const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  Tokens: [{ token: String }],
});
if ((this.isModified = "pass")) {
  userSchema.pre("save", async function (next) {
    this.pass = await bcrypt.hash(this.pass, 10);
  });
}

//******************************************** generateToken*************************** */
userSchema.methods.generateToken = async function (next) {
  const Token = await jwt.sign({ _id: this._id }, process.env.SKEY);
  this.Tokens = await this.Tokens.concat({ token: Token });
  await this.save();
  return Token;
  next();
};
module.exports = mongoose.model("User", userSchema);
