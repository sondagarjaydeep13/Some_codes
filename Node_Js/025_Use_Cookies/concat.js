const jwt = require("jsonwebtoken");

const mytoken = jwt.sign("123" + Date.now(), "firstwebtoken");
console.log(mytoken);
