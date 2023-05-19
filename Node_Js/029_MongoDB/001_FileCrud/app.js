const yargs = require("yargs");
const file = require("./file");
yargs.command({
  command: "Addfile",
  builder: {
    name: String,
    age: Number,
    email: String,
  },
  handler: function (argv) {
    const data = {
      name: argv.name,
      age: argv.age,
      email: argv.email,
    };
    file.createfile(data);
  },
});
yargs.argv;
