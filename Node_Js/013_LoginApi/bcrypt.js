const yargs = require("yargs");
const fs = require("fs");
yargs.command({
  command: "add",
  builder: {
    email: {
      type: String,
    },
    pass: {
      type: String,
    },
  },
  handler: function (argv) {
    const data = {
      email: argv.email,
      pass: argv.pass,
    };
    fs.writeFileSync("first.pdf", JSON.stringify(data));
  },
});
yargs.argv;
