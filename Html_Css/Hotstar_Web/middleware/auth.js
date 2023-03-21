const jwt = require("jsonwebtoken");
const User = require("../model/User");
const auth = async (req, resp, next) => {
  const token = req.cookies.jwt;
  try {
    const isverify = await jwt.verify(token, process.env.SKEY);
    if (isverify) {
      const userdata = await User.findOne({ _id: isverify._id });
      req.user = userdata;
      next();
    } else {
      resp.render("login", { alert: "Please login first...!!!!" });
    }
  } catch (error) {
    resp.render("login", { alert: "Please login first...!!!!" });
  }
};

module.exports = auth;
