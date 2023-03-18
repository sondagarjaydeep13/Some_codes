const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  uname: String,
  email: {
    type: String,
  },
  pass: String,
  img: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  Token: [
    {
      token: {
        type: String,
      },
    },
  ],
});

userSchema.pre("save", async function (pass) {
  this.pass = await bcrypt.hash(this.pass, 10);
});
const User = new mongoose.model("User", userSchema);
module.exports = User;
