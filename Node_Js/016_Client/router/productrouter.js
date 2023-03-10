const express = require("express");
const router = express.Router();
const Product = require("../model/product");
const auth = require("../middleware/auth");
const Cart = require("../model/cart");
const { route } = require("./userrouter");
const { response } = require("express");
router.post("/products", (req, resp) => {
  const product = new Product(req.body);
  product
    .save()
    .then((result) => {
      resp.send(result);
    })
    .catch((error) => {
      resp.send(error);
    });
});
router.get("/products", auth, (req, resp) => {
  Product.find()
    .then((result) => {
      resp.send(result);
    })
    .catch((error) => {
      resp.send(error);
    });
});

//................Add to cart..................
router.post("/addtocart", auth, async (req, resp) => {
  const user = req.user;
  try {
    const cart = new Cart({
      uid: user._id,
      pid: req.body.pid,
      qty: req.body.qty,
    });
    await cart
      .save()
      .then((result) => {
        resp.send("product add to cart " + result);
      })
      .catch((error) => {
        resp.send(error);
      });
  } catch (error) {
    resp.send("token not found");
  }
});
router.get("/viewcart", auth, async (req, resp) => {
  const userdata = req.user;
  try {
    const cartdata = await Cart.aggregate([
      { $match: { uid: userdata._id } },
      {
        $lookup: {
          from: "users",
          localField: "uid",
          foreignField: "_id",
          as: "User",
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "pid",
          foreignField: "_id",
          as: "Products",
        },
      },
    ]);
    resp.send(cartdata);
  } catch (error) {
    resp.send(error);
  }
});
module.exports = router;
