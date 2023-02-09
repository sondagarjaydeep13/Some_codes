const yargs = require("yargs");
const fs=require("fs");

// create folder using yargs

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