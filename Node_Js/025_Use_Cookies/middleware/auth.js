const jwt = require("jsonwebtoken");
const User = require("../model/User");
const auth = async (req, res, next) => {
  const Token = req.cookies.jwt;

  try {
    const isverify = await jwt.verify(Token, process.env.SKEY);
    const userdata = await User.findOne({ _id: isverify.id });
    if (userdata) {
      req.user = userdata;
      next();
    } else {
      res.render("login", { loginerror: "Invalide Token,pls login first !!!" });
    }
  } catch (error) {
    res.render("login", { loginerror: "Invalide Token,pls login first !!!" });
  }
};

module.exports = auth;
