const fs = require("fs");

const createfile = (data) => {
  fs.writeFileSync("myfile.JSON", JSON.stringify(data));
};
module.exports = { createfile };
