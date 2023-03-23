const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  pid: {
    type: mongoose.Schema.Types.ObjectId,
  },
  uid: {
    type: mongoose.Schema.Types.ObjectId,
  },
  qty: {
    type: Number,
  },
  add_on: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Cart", cartSchema);
