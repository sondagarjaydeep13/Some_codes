// Here Created the Schema(Structure)

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  Gender: {
    type: String,
  },
});
const User = new mongoose.model("User", userSchema);
// We Use This File into the Onther File
module.exports = User;
