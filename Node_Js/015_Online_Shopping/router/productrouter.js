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
router.get("/products", (req, resp) => {
  Product.find()
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
      uid: user._id,
      pid: req.body.pid,
      qty: req.body.qty,
    });
    const cdata = await cart.save();
    resp.send("Product add to cart" + " " + cdata);
  } catch (error) {
    resp.send(error);
  }
});

//......................View Cart.............................

router.get("/viewcart", auth, (req, resp) => {
  Cart.find()
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});

// ....................View mycart........................

router.get("/viewmycart", async (req, resp) => {
  // const userdata = req.user;

  // const mydata = userdata.findOne({ uid: user._id });
  // resp.send(mydata);
  try {
    const cartdata = await Cart.aggregate([
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
          as: "Product Detail",
        },
      },
    ]);
    resp.send(cartdata);
  } catch (error) {
    resp.send(error);
  }
});
module.exports = router;
