const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  pnumber: {
    type: String,
  },
  pname: {
    type: String,
  },
});
module.exports = mongoose.model("Product", productSchema);
