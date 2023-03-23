const express = require("express");
const Product = require("../model/Product");
const product_router = express.Router();
const Cart = require("../model/Cart");
const auth = require("../middleware/auth");
product_router.get("/getproduct", async (req, resp) => {
  try {
    const result = await Product.find();
    resp.send(result);
  } catch (error) {
    resp.send(error);
  }
});

product_router.post("/addproduct", async (req, resp) => {
  try {
    const product = await Product(req.body);
    const result = product.save();
    resp.send(result);
  } catch (error) {
    resp.send(error);
  }
});
product_router.delete("/deleteproduct/:id", async (req, resp) => {
  const _id = req.params.id;
  try {
    const result = await Product.findByIdAndDelete(_id);
    resp.send(result);
  } catch (error) {
    resp.send(err);
  }
});
product_router.post("/addtocart", auth, async (req, resp) => {
  const user = req.user;
  try {
    const cart = await new Cart({
      uid: user._id,
      pid: req.body.pid,
      qty: req.body.qty,
    });
    const result = await cart.save();
    resp.send(result);
  } catch (error) {
    resp.send(error);
  }
});
//*******************View Product Cart********************* */
product_router.get("/viewcart", (req, resp) => {
  Cart.find()
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});
//****************** My Cart************************* */
product_router.get("/mycart", auth, async (req, resp) => {
  const userdata = req.user;
  try {
    const data = await Cart.aggregate([
      { $match: { uid: userdata._id } },
      {
        $lookup: {
          from: "users",
          localField: "uid",
          foreignField: "_id",
          as: "User Data",
        },
      },
    ]);
    resp.send(data);
  } catch (error) {
    resp.send(error);
  }
});
module.exports = product_router;
