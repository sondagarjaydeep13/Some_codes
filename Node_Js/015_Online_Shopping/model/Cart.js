const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
  },
  pid: {
    type: mongoose.Schema.Types.ObjectId,
  },
  qty: {
    type: Number,
  },
});
const Cart = new mongoose.model("Cart", cartSchema);
module.exports = Cart;
