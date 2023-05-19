const fs = require("fs");

const createfile = (data) => {
  const jsondata = JSON.stringify(data);
  fs.writeFile("first.json", jsondata, () => {
    console.log("file created success and data added success");
  });
};
module.exports = { createfile };
