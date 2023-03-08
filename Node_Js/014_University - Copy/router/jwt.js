const jwt = require("jsonwebtoken");

const auth = async (id) => {
  const result = await jwt.sign(id, "welcome");

  console.log(result);
};
auth("640351a55810c61fd944fd9d");
