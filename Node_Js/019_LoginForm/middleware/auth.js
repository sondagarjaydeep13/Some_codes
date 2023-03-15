const jwt = require("jsonwebtoken");
const User = require("../model/user");
const auth = async (req, resp, next) => {
  const token = req.cookies.jwt;
  try {
    const verify = await jwt.verify(token, "thisismyfirstwebtoken");
    if (verify) {
      const userdata = await User.findOne({ _id: verify._id });
      req.user = userdata;
      next();
    } else {
      resp.render("login", { msg: "Login First" });
    }
  } catch (error) {
    resp.render("login", { msg: "Login First" });
  }
};

module.exports = auth;
