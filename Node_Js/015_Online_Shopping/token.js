const jwt = require("jsonwebtoken");
const token = async (value) => {
  const data = await jwt.sign(value,"thisismyfirsttoken");
  console.log(data);
};
token("Jaydeep@123");
