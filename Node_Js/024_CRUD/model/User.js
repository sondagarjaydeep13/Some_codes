const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  uname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
  },
  password: {
    type: String,
    require: true,
  },
});

if ((this.isModified = "password")) {
  userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
  });
}

module.exports = mongoose.model("User", userSchema);
