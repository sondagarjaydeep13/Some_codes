const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  const token = req.cookies.jwt;

  try {
    const isVerify = await jwt.verify(token, process.env.SKEY);
    if (isVerify) {
      next();
    } else {
      res.render("login", { loginmsg: "Pls Login first" });
    }
  } catch (error) {
    res.render("login", { loginmsg: "Pls Login first" });
  }
};

module.exports = auth;
