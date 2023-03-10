const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
  },
  pid: {
    type: mongoose.Schema.Types.ObjectId,
  },
  qty: Number,
  addon: {
    type: Date,
    default: Date.now(),
  },
});
const Cart = new mongoose.model("Cart", cartSchema);
module.exports = Cart;
