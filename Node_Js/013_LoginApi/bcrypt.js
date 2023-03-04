const bcrypt = require("bcryptjs");

const bcryptpass = async (pass) => {
  const newpass = await bcrypt.hash(pass, 10);
  //   console.log(newpass);

  const check = await bcrypt.compare("Jaydeep@123", newpass);
  console.log(check);
};

bcryptpass("Jaydeep@123");
