const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  pname: String,
  price: Number,
  qty: Number,
});
const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
