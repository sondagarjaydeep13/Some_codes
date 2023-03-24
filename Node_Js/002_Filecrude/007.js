const yargs = require("yargs");
const files = require("./008");
yargs.command({
  command: "Addfile",
  builder: {
    uname: String,
    unumber: Number,
  },
  handler: function (argv) {
    const data = {
      uname: argv.uname,
      unumber: argv.unumber,
    };
    files.createfile(data);
  },
});
yargs.argv;
