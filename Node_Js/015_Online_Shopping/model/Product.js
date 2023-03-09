const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  pname: String,
  price: String,
  qty: String,
});

const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
