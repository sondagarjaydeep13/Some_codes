const User = require("../model/User");
const jwt = require("jsonwebtoken");
const auth = async (req, resp, next) => {
  const token = req.header("auth-token");
  try {
    const isVerify = await jwt.verify(token, process.env.SKEY);
    const _id = await isVerify._id;
    const userdata = await User.findById(_id);

    User.find();
    if (isVerify) {
      req.user = userdata;
      next();
    } else {
      resp.send("Invalide token");
    }
  } catch (error) {
    resp.send("Invalide token");
  }
};

module.exports = auth;
