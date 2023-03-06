const mongoose = require("mongoose");

const payment = new mongoose.Schema({
  Number: {
    type: Number,
  },
  In_Nr: {
    type: Number,
  },
  Total_Paid: {
    type: Number,
  },
});

const Payment = new mongoose.model("Payment", payment);

module.exports = Payment;
