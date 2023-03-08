const express = require("express");
const Payment = require("../model/studentpayment");

const router = express.Router();

router.post("/payment", (req, resp) => {
  const payment = new Payment(req.body);
  payment
    .save()
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});

module.exports = router;
