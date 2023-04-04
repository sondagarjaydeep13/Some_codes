const jwt = require("jsonwebtoken");
const User = require("../model/User");
const auth = async (req, res, next) => {
  const userToken = req.cookies.jwtToken;
  console.log(userToken);
  try {
    const isverify = await jwt.verify(userToken, process.env.SKEY);
    const userdata = await User.findOne({ _id: isverify.rdata._id });
    if (isverify) {
      req.user = userdata;
      next();
    } else {
      res.render("login", { loginerror: "pls login first  !!!!!" });
    }
  } catch (error) {
    res.render("login", { loginerror: "Inavalide token  !!!!!" });
  }
};
module.exports = auth;
