
const file=require("./covid-19")

const yargs=require("yargs");
yargs.command({
    command:"covid",
    handler:function(argv){
        file.covid();
    }
})
yargs.argv