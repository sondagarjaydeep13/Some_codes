const jwt = require("jsonwebtoken");
const User = require("../model/User");
const auth = async (req, res, next) => {
  const Token = req.cookies.jwt;

  try {
    const isverify = await jwt.verify(Token, process.env.SKEY);
    
    const userdata = await User.findOne({ _id: isverify._id });

    if (userdata) {
      const mytoken = userdata.Tokens.find((e) => {
        return (e.Token = Token);
      });
      if (mytoken == undefined) {
        res.render("login", {
          loginerror: "invalide token pls login first !!!",
        });
      } else {
        req.user = userdata;
        req.token = Token;
        next();
      }
    } else {
      res.render("login", { loginerror: "invalide token pls login first !!!" });
    }
  } catch (error) {
    res.render("login", { loginerror: "invalide token pls login first !!!" });
  }
};

module.exports = auth;
