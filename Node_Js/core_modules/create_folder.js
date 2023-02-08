const yargs = require("yargs");
const fs=require("fs");

yargs.command({
    command:"add",
    builder:{
        add:{
            type:fs.mkdirSync("firstfolder")
        }
    },
    handler:function(argv){
        console.log("Folder created");
    }
})
yargs.argv;