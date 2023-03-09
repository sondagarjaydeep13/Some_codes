const express = require("express");
const router = express.Router();
const Product = require("../model/Product");
const auth = require("../middelware/auth");
router.post("/products", (req, resp) => {
  const product = new Product(req.body);
  product
    .save()
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});

const Cart = require("../model/Cart");
// ..............................Add to cart ......................
router.post("/addtocart", auth, async (req, resp) => {
  const user = req.user;
  try {
    const cart = new Cart({
      uid: uid._id,
      pid: req.body._id,
      qty: req.body.qty,
    });
    const cdata = await cart.save();
    console.log(cdata);
  } catch (error) {
    resp.send(err);
  }
});
module.exports = router;
