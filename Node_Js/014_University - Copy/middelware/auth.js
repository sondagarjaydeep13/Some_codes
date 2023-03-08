const jwt = require("jsonwebtoken");
const student = require("../model/student");

const auth = async (req, resp, next) => {
  const token = req.header("auth-token");
  try {
    const data = await jwt.verify(token, "welcome");

    if (data) {
      const studentdata = await student.findOne({ _id: data._id });
      console.log(studentdata);
      req.student = studentdata;
      next();
    } else {
      resp.send("Invalide token");
    }
  } catch (error) {
    resp.send(error);
  }
};
module.exports = auth;
