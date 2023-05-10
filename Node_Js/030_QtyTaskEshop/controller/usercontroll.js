const bcrypt = require("bcryptjs");

const bcryptpass = async (pass) => {
  const password = await bcrypt.hash(pass, 10);
  return password;
};
module.exports = { bcryptpass };
