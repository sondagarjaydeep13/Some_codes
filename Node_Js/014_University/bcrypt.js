const bcrypt = require("bcryptjs");
async function Pass(pass) {
  const bcrypt_pass = await bcrypt.hash(pass, 10);
  // console.log(bcrypt_pass);
  const check_pass = await bcrypt.compare("Jaydeep@123", bcrypt_pass);
  if (check_pass == true) {
    console.log("Phone Open");
  } else {
    console.log("Enter PassWord is Wrong");
  }
}

Pass("Jaydee@123");
