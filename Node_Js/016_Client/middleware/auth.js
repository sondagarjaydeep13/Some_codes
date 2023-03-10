const jwt = require("jsonwebtoken");
const User = require("../model/user");
const auth = async (req, resp, next) => {
  const token = await req.header("auth-token");
  try {
    const data = await jwt.verify(token, "thisismyfirsttoken");

    if (data) {
      const userdata = await User.findOne({ _id: data._id });
      req.user = userdata;
      next();
    } else {
      resp.send("Invalide token");
    }
  } catch (error) {
    resp.send("Invalide Token");
  }
};
module.exports = auth;
