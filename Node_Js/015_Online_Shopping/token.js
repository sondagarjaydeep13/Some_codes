const jwt = require("jsonwebtoken");
const token = async (value) => {
  const data = await jwt.sign(value,"thisismyfirsttoken");
  console.log(data);
};
token("64087d7d831c4344685af7df");
