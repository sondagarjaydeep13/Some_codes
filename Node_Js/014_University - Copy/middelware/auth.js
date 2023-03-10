const jwt = require("jsonwebtoken");
const Student = require("../model/student");

const auth = async (req, resp, next) => {
  const token = req.header("auth-token");
  const data = await jwt.verify(token, "welcome");
  console.log(data);
  const studentdata = await Student.findOne({ _id: data._id });
  console.log(studentdata);
  // try {
  //   const data = await jwt.verify(token, "welcome");

  //   if (data) {
  //     const studentdata = await student.findOne({ _id:data._id });

  //     req.user = studentdata;
  //     next();
  //   } else {
  //     resp.send("Invalide token");
  //   }
  // } catch (error) {
  //   resp.send("404 not found");
  // }
};
module.exports = auth;
