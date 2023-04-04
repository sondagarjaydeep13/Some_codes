const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  age: String,
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  Tokens: [
    {
      Token: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});
{
  userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
      next();
    }
  });
}
userSchema.methods.genrateToken = async function (next) {
  try {
    const token = await jwt.sign({ _id: this._id }, process.env.SKEY);
    this.Tokens = await this.Tokens.concat({ Token: token });
    await this.save();
    return token;
    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = mongoose.model("User", userSchema);
