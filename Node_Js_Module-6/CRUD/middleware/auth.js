const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  const token = req.cookies.jwt;

  try {
    const isVerify = await jwt.verify(token, process.env.SKEY);
    const userdata = await User.findOne({ _id: isVerify._id });

    if (isVerify) {
      req.user = userdata;
      req.token = token;
      next();
    } else {
      res.render("login", { loginmsg: "Pls Login first" });
    }
  } catch (error) {
    res.render("login", { loginmsg: "Pls Login first" });
  }
};

module.exports = auth;
