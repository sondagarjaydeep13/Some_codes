const mongoose = require("mongoose");

const userSchem = new mongoose.Schema({
  uname: String,
  email: String,
  age: Number,
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", userSchem);
