const bcrypt = require("bcryptjs");
const mypass = "Jaydeep@123";
const password = async (pass) => {
  const hash_pass = await bcrypt.hash(pass, 10);
  const verify = await bcrypt.compare(mypass, hash_pass);
  if (verify == true) {
    console.log("Welcome To Web Page");
  } else {
    console.log("Enter Password Wrong");
  }
};
password("Jaydeep@123");
